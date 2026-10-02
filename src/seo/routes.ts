/**
 * Tek kaynak: indekslenecek tüm rotalar. Prerender, sitemap ve hreflang buradan beslenir.
 * `translated: true` → /en ve /ru sürümleri de yayınlanır ve hreflang ile bağlanır.
 * TR'ye özel içerik (landing + rehber yazıları) yalnızca kökte yayınlanır.
 */
import { MODULE_SLUGS, SEO_SECTOR_SLUGS } from '../data/landingPages';
import { BLOG_SLUGS, SECTOR_SLUGS, LEGAL_SLUGS } from '../i18n/content';
import { GUIDES } from '../data/guides';

export type SeoRoute = {
  path: string;
  translated: boolean;
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  lastmod?: string;
};

export const SEO_ROUTES: SeoRoute[] = [
  { path: '/', translated: true, priority: 1.0, changefreq: 'weekly' },
  { path: '/goruntu-isleme', translated: false, priority: 1.0, changefreq: 'monthly' },
  { path: '/blog', translated: true, priority: 0.9, changefreq: 'weekly' },
  { path: '/iletisim', translated: true, priority: 0.8, changefreq: 'monthly' },
  { path: '/katalog', translated: false, priority: 0.8, changefreq: 'monthly' },
  { path: '/sss', translated: false, priority: 0.8, changefreq: 'monthly' },
  ...MODULE_SLUGS.map((s) => ({ path: `/${s}`, translated: false, priority: 0.9, changefreq: 'monthly' as const })),
  ...SEO_SECTOR_SLUGS.map((s) => ({ path: `/sektor/${s}`, translated: false, priority: 0.85, changefreq: 'monthly' as const })),
  ...SECTOR_SLUGS.map((s) => ({ path: `/sektor/${s}`, translated: true, priority: 0.8, changefreq: 'monthly' as const })),
  ...GUIDES.map((g) => ({
    path: `/blog/${g.slug}`,
    translated: false,
    priority: 0.85,
    changefreq: 'monthly' as const,
    lastmod: g.updated ?? g.isoDate,
  })),
  ...BLOG_SLUGS.map((s) => ({ path: `/blog/${s}`, translated: true, priority: 0.7, changefreq: 'yearly' as const })),
  ...LEGAL_SLUGS.map((s) => ({ path: `/${s}`, translated: true, priority: 0.3, changefreq: 'yearly' as const })),
];

const byPath = new Map(SEO_ROUTES.map((r) => [r.path, r]));

/** Dil önekinden arındırılmış yol (router basename zaten çıkarır) */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function getSeoRoute(pathname: string): SeoRoute | undefined {
  return byPath.get(normalizePath(pathname));
}

export function isTranslatedPath(pathname: string): boolean {
  return getSeoRoute(pathname)?.translated ?? false;
}
