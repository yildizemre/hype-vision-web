/**
 * Tek kaynak: indekslenecek tüm sayfalar, "cluster" olarak.
 * Bir cluster aynı içeriğin dil sürümlerini (tam yol, dil önekiyle) bir arada tutar;
 * prerender, sitemap, hreflang, llms.txt ve dil değiştirici buradan beslenir.
 * Burada olmayan bir yol Netlify'da 404 döner.
 */
import { MODULE_SLUGS, SEO_SECTOR_SLUGS } from '../data/landingPages';
import { SECTOR_SLUGS, LEGAL_SLUGS } from '../i18n/content';
import { GUIDES, GUIDES_EN, guideUrl } from '../data/guides';
import { SOLUTIONS, INDUSTRIES, HUBS, CASE_STUDIES } from '../content';
import { caseUrl } from '../content/cases';

export type RouteLang = 'tr' | 'en' | 'ru';
export type RouteKind = 'home' | 'hub' | 'solution' | 'industry' | 'resource' | 'case' | 'conversion' | 'index' | 'legal' | 'page';

export type RouteCluster = {
  urls: Partial<Record<RouteLang, string>>;
  kind: RouteKind;
  /** Yalnızca gerçek veriden (yayın/güncelleme tarihi) */
  lastmod?: string;
};

const clusters: RouteCluster[] = [];
const add = (c: RouteCluster) => clusters.push(c);
const all3 = (p: string): Partial<Record<RouteLang, string>> => ({
  tr: p,
  en: p === '/' ? '/en/' : `/en${p}`,
  ru: p === '/' ? '/ru/' : `/ru${p}`,
});

// Çekirdek sayfalar
add({ urls: all3('/'), kind: 'home' });
add({ urls: all3('/iletisim'), kind: 'conversion' });
LEGAL_SLUGS.forEach((s) => add({ urls: all3(`/${s}`), kind: 'legal' }));
SECTOR_SLUGS.forEach((s) => add({ urls: all3(`/sektor/${s}`), kind: 'industry' }));
add({ urls: { tr: '/katalog' }, kind: 'conversion' });
add({ urls: { tr: '/sss' }, kind: 'page' });

// Dönüşüm ve indeks sayfaları
add({ urls: { tr: '/pilot', en: '/en/pilot' }, kind: 'conversion' });
add({ urls: { tr: '/kamera-degerlendirme', en: '/en/camera-assessment' }, kind: 'conversion' });
add({ urls: { tr: '/is-ortakligi', en: '/en/partners' }, kind: 'conversion' });
add({ urls: { tr: '/cozumler', en: '/en/solutions' }, kind: 'index' });
add({ urls: { tr: '/sektorler', en: '/en/industries' }, kind: 'index' });
add({ urls: { tr: '/blog', en: '/en/resources', ru: '/ru/blog' }, kind: 'index' });
add({ urls: { tr: '/vaka-calismalari', en: '/en/case-studies' }, kind: 'index' });

// Hub'lar
HUBS.forEach((h) => add({ urls: { tr: h.urls.tr, en: h.urls.en }, kind: 'hub' }));

// Çözümler (TR tarafı mevcut landing veya yeni sayfa)
const pairedTr = new Set<string>();
SOLUTIONS.forEach((s) => {
  if (s.urls.tr) pairedTr.add(s.urls.tr);
  add({ urls: { tr: s.urls.tr, en: s.urls.en }, kind: 'solution' });
});
MODULE_SLUGS.filter((s) => !pairedTr.has(`/${s}`)).forEach((s) => add({ urls: { tr: `/${s}` }, kind: 'solution' }));

// Sektörler
INDUSTRIES.forEach((i) => {
  pairedTr.add(i.urls.tr);
  add({ urls: { tr: i.urls.tr, en: i.urls.en }, kind: 'industry' });
});
SEO_SECTOR_SLUGS.filter((s) => !pairedTr.has(`/sektor/${s}`)).forEach((s) => add({ urls: { tr: `/sektor/${s}` }, kind: 'industry' }));

// Kaynaklar: EN yazının `pair` alanı iki dili bağlar
const pairedGuides = new Set<string>();
GUIDES_EN.forEach((g) => {
  const urls: RouteCluster['urls'] = { en: guideUrl(g) };
  const tr = g.pair && GUIDES.find((t) => guideUrl(t) === g.pair);
  if (tr) {
    urls.tr = guideUrl(tr);
    pairedGuides.add(tr.slug);
  }
  add({ urls, kind: 'resource', lastmod: g.updated ?? g.isoDate });
});
GUIDES.filter((g) => !pairedGuides.has(g.slug)).forEach((g) =>
  add({ urls: { tr: guideUrl(g) }, kind: 'resource', lastmod: g.updated ?? g.isoDate }),
);

// Vaka çalışmaları (RU tarafı eski /ru/blog adresinde kalır)
CASE_STUDIES.forEach((c) =>
  add({ urls: { tr: caseUrl(c.slug, 'tr'), en: caseUrl(c.slug, 'en'), ru: caseUrl(c.slug, 'ru') }, kind: 'case', lastmod: c.isoDate }),
);

export const ROUTE_CLUSTERS: RouteCluster[] = clusters;

const byUrl = new Map<string, RouteCluster>();
clusters.forEach((c) => Object.values(c.urls).forEach((u) => u && byUrl.set(u, c)));

/** Dil önekli tam yol: "/en" + "/solutions/x" */
export function toFullPath(prefix: string, pathname: string): string {
  const p = !pathname || pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (!prefix) return p;
  return p === '/' ? `${prefix}/` : `${prefix}${p}`;
}

export function findCluster(fullPath: string): RouteCluster | undefined {
  return byUrl.get(fullPath);
}

/** Prerender listesi: tüm dillerdeki tüm URL'ler */
export function allUrls(): string[] {
  return clusters.flatMap((c) => Object.values(c.urls).filter(Boolean) as string[]);
}
