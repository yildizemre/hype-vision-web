/**
 * vite build sonrası çalışır:
 *  1. Uygulamadaki sayfa kümelerini (window.__ROUTE_CLUSTERS__) okur — tek kaynak src/seo/routes.ts
 *  2. Her URL'i headless Chrome ile statik HTML'e yazar (içerik JS'siz de okunur)
 *  3. dist/404.html, hreflang'li sitemap.xml ve llms.txt üretir
 *  4. Başlık tekrarı / eksik canonical / bozuk JSON-LD kontrolü yapar
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
const HREFLANG = { tr: 'tr-TR', en: 'en', ru: 'ru' };

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/ bulunamadı — önce vite build çalıştırın.');
  process.exit(1);
}

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.pdf': 'application/pdf', '.ico': 'image/x-icon',
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

/**
 * "/x" → dist/x.html (Netlify serves it at /x with 200, no redirect to /x/).
 * Writing dist/x/index.html made Netlify 301 every canonical "/x" to "/x/", so every
 * sitemap/canonical URL was a redirect. Routes that end in "/" ("/", "/en/") keep index.html.
 */
function routeToFile(route) {
  const clean = route.replace(/^\//, '');
  if (!clean) return path.join(dist, 'index.html');
  if (clean.endsWith('/')) return path.join(dist, clean, 'index.html');
  return path.join(dist, `${clean}.html`);
}

async function renderTo(browser, url, outFile) {
  const page = await browser.newPage();
  try {
    await page.setRequestInterception(true);
    page.on('request', (r) => (r.url().startsWith(`http://localhost:${PORT}`) || r.url().startsWith('data:') ? r.continue() : r.abort()));
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('#root > *', { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 500));
    const info = await page.evaluate(() => {
      document.querySelectorAll('script[src*="googletagmanager"], script[src*="gtag"]').forEach((n) => n.remove());
      const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent);
      return {
        html: '<!doctype html>\n' + document.documentElement.outerHTML,
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
        robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '',
        h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
        ld,
        links: [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href').split('#')[0]).filter(Boolean),
      };
    });
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, info.html, 'utf8');
    return { ...info, errors };
  } finally {
    await page.close();
  }
}

function buildSitemap(clusters) {
  const out = [];
  for (const c of clusters) {
    const langs = Object.keys(c.urls).filter((l) => c.urls[l]);
    const alt =
      langs.length > 1
        ? [
            ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${SITE}${c.urls[l]}"/>`),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${c.urls.tr ?? c.urls.en}"/>`,
          ]
        : [];
    for (const l of langs) {
      out.push(['  <url>', `    <loc>${SITE}${c.urls[l]}</loc>`, ...(c.lastmod ? [`    <lastmod>${c.lastmod}</lastmod>`] : []), ...alt, '  </url>'].join('\n'));
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${out.join('\n')}\n</urlset>\n`;
}

function buildLlms(clusters, meta) {
  const line = (u) => {
    const m = meta.get(u);
    return m ? `- [${m.title.split(' | ')[0]}](${SITE}${u}): ${m.description}` : null;
  };
  const section = (title, kinds, lang) => {
    const rows = clusters.filter((c) => kinds.includes(c.kind) && c.urls[lang]).map((c) => line(c.urls[lang])).filter(Boolean);
    return rows.length ? `## ${title}\n\n${rows.join('\n')}\n` : '';
  };
  return [
    '# Hype Vision\n',
    '> Hype Vision develops computer-vision and AI video-analytics solutions that run on existing IP/CCTV cameras for industrial safety, manufacturing, quality and operational monitoring. Based at GTÜ Teknopark, Gebze, Türkiye; working on industrial AI projects since 2020. Website languages: Turkish (root) and English (/en/).\n',
    'Contact: info@hypevisionlab.com · Camera assessment: https://hypevisionlab.com/en/camera-assessment\n',
    section('Overview (English)', ['hub'], 'en'),
    section('Solutions (English)', ['solution'], 'en'),
    section('Industries (English)', ['industry'], 'en'),
    section('Technical resources (English)', ['resource'], 'en'),
    section('Case studies (English)', ['case'], 'en'),
    section('Pilot, assessment and partners (English)', ['conversion'], 'en'),
    section('Genel bakış (Türkçe)', ['hub'], 'tr'),
    section('Çözümler (Türkçe)', ['solution'], 'tr'),
    section('Sektörler (Türkçe)', ['industry'], 'tr'),
    section('Teknik kaynaklar (Türkçe)', ['resource'], 'tr'),
    section('Vaka çalışmaları (Türkçe)', ['case'], 'tr'),
  ]
    .filter(Boolean)
    .join('\n');
}

async function main() {
  const server = createSpaServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const problems = [];
  const meta = new Map();

  try {
    const probe = await browser.newPage();
    await probe.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 60000 });
    const clusters = await probe.evaluate(() => window.__ROUTE_CLUSTERS__);
    await probe.close();
    if (!Array.isArray(clusters) || !clusters.length) throw new Error('__ROUTE_CLUSTERS__ okunamadı');

    const urls = clusters.flatMap((c) => Object.values(c.urls).filter(Boolean));
    const known = new Set(urls);

    for (const u of urls) {
      try {
        const info = await renderTo(browser, `http://localhost:${PORT}${u}`, routeToFile(u));
        meta.set(u, info);
        if (info.errors.length) problems.push(`${u}: JS hatası — ${info.errors[0]}`);
        if (info.canonical !== `${SITE}${u}`) problems.push(`${u}: canonical "${info.canonical}"`);
        if (!info.robots.startsWith('index')) problems.push(`${u}: robots "${info.robots}"`);
        if (info.h1.length !== 1) problems.push(`${u}: ${info.h1.length} adet h1`);
        if (!info.description) problems.push(`${u}: description yok`);
        for (const j of info.ld) {
          try {
            JSON.parse(j);
          } catch {
            problems.push(`${u}: bozuk JSON-LD`);
          }
        }
        process.stdout.write('.');
      } catch (err) {
        problems.push(`${u}: render başarısız — ${err.message}`);
      }
    }
    console.log('');

    // Başlık tekrarları ve kırık iç linkler
    const byTitle = new Map();
    for (const [u, m] of meta) byTitle.set(m.title, [...(byTitle.get(m.title) ?? []), u]);
    for (const [t, us] of byTitle) if (us.length > 1) problems.push(`Tekrarlanan başlık "${t}": ${us.join(', ')}`);
    const allowed = (h) => known.has(h) || known.has(`${h}/`) || known.has(h.replace(/\/$/, '')) || /^\/(sunum|hype_vision_katalog\.pdf|.*\.(pdf|png|jpg|jpeg|webp|avif|svg|ico|xml|txt))/.test(h);
    const broken = new Map();
    for (const [u, m] of meta) for (const h of m.links) if (!allowed(h)) broken.set(h, u);
    for (const [h, u] of broken) problems.push(`Kırık iç link ${h} (ör. ${u})`);

    await renderTo(browser, `http://localhost:${PORT}/__olmayan-sayfa__`, path.join(dist, '404.html'));
    fs.writeFileSync(path.join(dist, 'sitemap.xml'), buildSitemap(clusters), 'utf8');
    fs.writeFileSync(path.join(dist, 'llms.txt'), buildLlms(clusters, meta), 'utf8');
    console.log(`✓ ${urls.length} sayfa · 404.html · sitemap.xml · llms.txt`);
  } finally {
    await browser.close();
    server.close();
  }

  if (problems.length) {
    console.error(`\n${problems.length} sorun:\n- ${problems.join('\n- ')}`);
    process.exit(1);
  }
  console.log('QA temiz.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
