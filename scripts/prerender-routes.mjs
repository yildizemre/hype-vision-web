/** Prerender edilecek statik rotalar — vite build sonrası HTML olarak yazılır */
const MODULE_SLUGS = [
  'baret-tespit-sistemi',
  'kkd-kontrol-kamera-sistemi',
  'yasakli-alan-ihlal-tespiti',
  'forklift-yaya-guvenlik-sistemi',
  'dusme-tespit-sistemi',
  'kalite-kontrol-goruntu-isleme',
  'yuzey-kusuru-tespiti',
  'oee-takip-sistemi',
  'personel-verimlilik-analizi-kamera',
  'kvkk-uyumlu-kamera-analitigi',
  'onvif-rtsp-yapay-zeka-entegrasyonu',
];

const SEO_SECTOR_SLUGS = [
  'tekstil-fabrikasi-yapay-zeka',
  'gida-fabrikasi-kalite-kontrol',
  'depo-lojistik-guvenlik',
];

const BLOG_SLUGS = [
  'gida-hattinda-idle-azaltma',
  'isg-kkd-ihlal-tespiti',
  'kalite-kontrol-fire-azaltma',
  'tekstil-hat-a-fire-dususu',
  'lojistik-palet-sayim-sapmasi',
];

const SECTOR_SLUGS = ['tekstil', 'otomotiv', 'gida', 'metal'];
const LEGAL = ['gizlilik-politikasi', 'hizmet-sartlari', 'cerez-politikasi'];

export const PRERENDER_ROUTES = [
  '/',
  '/iletisim',
  '/katalog',
  '/sss',
  ...MODULE_SLUGS.map((s) => `/${s}`),
  ...SEO_SECTOR_SLUGS.map((s) => `/sektor/${s}`),
  ...SECTOR_SLUGS.map((s) => `/sektor/${s}`),
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
  ...LEGAL.map((s) => `/${s}`),
];
