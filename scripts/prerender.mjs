import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { PRERENDER_ROUTES } from './prerender-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '..', 'dist');
const PORT = 4173;

function createSpaServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
    let filePath = path.join(dist, urlPath === '/' ? 'index.html' : urlPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(dist, 'index.html');
    }

    const ext = path.extname(filePath);
    const types = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.woff2': 'font/woff2',
      '.pdf': 'application/pdf',
    };

    res.writeHead(200, { 'Content-Type': types[ext] ?? 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  });
}

function routeToFile(route) {
  if (route === '/') return path.join(dist, 'index.html');
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  return path.join(dist, clean, 'index.html');
}

async function prerender() {
  if (!fs.existsSync(dist)) {
    console.error('dist/ bulunamadı — önce vite build çalıştırın.');
    process.exit(1);
  }

  const server = createSpaServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Prerender sunucusu: http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const route of PRERENDER_ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.waitForSelector('#root', { timeout: 15000 });
      await new Promise((r) => setTimeout(r, 1500));

      const html = await page.content();
      const outFile = routeToFile(route);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html, 'utf8');
      console.log(`✓ ${route}`);
    } catch (err) {
      console.error(`✗ ${route}:`, err.message);
      process.exitCode = 1;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`\nPrerender tamamlandı (${PRERENDER_ROUTES.length} rota).`);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
