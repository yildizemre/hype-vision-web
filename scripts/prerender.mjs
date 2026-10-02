/**
 * vite build sonrası çalışır:
 *  1. Uygulamadaki rota listesini (window.__SEO_ROUTES__) okur — tek kaynak src/seo/routes.ts
 *  2. Her rotayı (çevrili olanları /en ve /ru ile birlikte) headless Chrome ile HTML'e yazar
 *  3. Gerçek 404 sayfası (dist/404.html) üretir
 *  4. hreflang'li sitemap.xml üretir
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '..', 'dist');
const PORT = 4173;
const SITE = 'https://hypevisionlab.com';
const LANGS = { tr: '', en: '/en', ru: '/ru' };
const HREFLANG = { tr: 'tr-TR', en: 'en', ru: 'ru' };

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/ bulunamadı — önce vite build çalıştırın.');
  process.exit(1);
}

// Prerender sırasında dist/index.html üzerine yazılacağı için boş şablonu bellekte tut
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

function createSpaServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
    const filePath = path.join(dist, urlPath);
    if (path.extname(urlPath) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(filePath)] ?? 'application/octet-stream' });
      res.end(fs.readFileSync(filePath));
      return;
    }
    res.writeHead(200, { 'Content-Type': TYPES['.html'] });
    res.end(template);
  });
}

const withLang = (p, lang) => {
  const prefix = LANGS[lang];
  if (!prefix) return p;
  return p === '/' ? `${prefix}/` : `${prefix}${p}`;
};

function routeToFile(route) {
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  return clean ? path.join(dist, clean, 'index.html') : path.join(dist, 'index.html');
}

async function renderTo(browser, url, outFile) {
  const page = await browser.newPage();
  try {
    // Analitik / dış istekleri engelle, yalnız yerel kaynakları yükle
    await page.setRequestInterception(true);
    page.on('request', (r) => (r.url().startsWith(`http://localhost:${PORT}`) || r.url().startsWith('data:') ? r.continue() : r.abort()));
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('#root > *', { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 800));
    // Video/iframe vb. render sırasında eklenen dış script'leri kaydetme
    const html = await page.evaluate(() => {
      document.querySelectorAll('script[src*="googletagmanager"], script[src*="gtag"]').forEach((n) => n.remove());
      return '<!doctype html>\n' + document.documentElement.outerHTML;
    });
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');
  } finally {
    await page.close();
  }
}

function buildSitemap(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];
  for (const r of routes) {
    const langs = r.translated ? Object.keys(LANGS) : ['tr'];
    const alternates = r.translated
      ? [
          ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${SITE}${withLang(r.path, l)}"/>`),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${r.path}"/>`,
        ].join('\n')
      : '';
    for (const l of langs) {
      urls.push(
        [
          '  <url>',
          `    <loc>${SITE}${withLang(r.path, l)}</loc>`,
          `    <lastmod>${r.lastmod ?? today}</lastmod>`,
          `    <changefreq>${r.changefreq}</changefreq>`,
          `    <priority>${(l === 'tr' ? r.priority : r.priority * 0.8).toFixed(2)}</priority>`,
          alternates,
          '  </url>',
        ]
          .filter(Boolean)
          .join('\n'),
      );
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

async function main() {
  const server = createSpaServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  let failed = 0;

  try {
    const probe = await browser.newPage();
    await probe.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 60000 });
    const routes = await probe.evaluate(() => window.__SEO_ROUTES__);
    await probe.close();
    if (!Array.isArray(routes) || routes.length === 0) throw new Error('__SEO_ROUTES__ okunamadı');

    const jobs = [];
    for (const r of routes) {
      for (const lang of r.translated ? Object.keys(LANGS) : ['tr']) jobs.push(withLang(r.path, lang));
    }

    for (const route of jobs) {
      try {
        await renderTo(browser, `http://localhost:${PORT}${route}`, routeToFile(route));
        console.log(`✓ ${route}`);
      } catch (err) {
        failed++;
        console.error(`✗ ${route}: ${err.message}`);
      }
    }

    await renderTo(browser, `http://localhost:${PORT}/__olmayan-sayfa__`, path.join(dist, '404.html'));
    console.log('✓ 404.html');

    fs.writeFileSync(path.join(dist, 'sitemap.xml'), buildSitemap(routes), 'utf8');
    console.log(`✓ sitemap.xml (${jobs.length} URL)`);
    console.log(`\nPrerender tamamlandı: ${jobs.length - failed}/${jobs.length} sayfa.`);
  } finally {
    await browser.close();
    server.close();
  }

  if (failed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
