/**
 * Dil = URL. Türkçe kökte (/), İngilizce /en, Rusça /ru altında yayınlanır.
 * Router basename bu önekle kurulduğu için <Link to="/x"> otomatik doğru dile gider;
 * düz <a href> kullanan yerler localizeHref() ile sarılır.
 */
export const LANGS = ['tr', 'en', 'ru'] as const;
export type UrlLang = (typeof LANGS)[number];

export const LANG_PREFIX: Record<UrlLang, string> = { tr: '', en: '/en', ru: '/ru' };
export const HREFLANG: Record<UrlLang, string> = { tr: 'tr-TR', en: 'en', ru: 'ru' };
export const OG_LOCALE: Record<UrlLang, string> = { tr: 'tr_TR', en: 'en_US', ru: 'ru_RU' };

export function detectUrlLang(pathname: string): UrlLang {
  const seg = pathname.split('/')[1];
  return seg === 'en' || seg === 'ru' ? seg : 'tr';
}

export const URL_LANG: UrlLang =
  typeof window === 'undefined' ? 'tr' : detectUrlLang(window.location.pathname);

export const ROUTER_BASENAME = LANG_PREFIX[URL_LANG] || '/';

/** Kök-göreli href'e aktif dil önekini ekler: "/#iletisim" → "/en/#iletisim" */
export function localizeHref(href: string, lang: UrlLang = URL_LANG): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  return `${LANG_PREFIX[lang]}${href}`;
}

/** Dilsiz yol ("/sss") için verilen dilde tam yol */
export function pathFor(path: string, lang: UrlLang): string {
  const p = path === '/' ? '/' : path.replace(/\/$/, '');
  const prefix = LANG_PREFIX[lang];
  if (!prefix) return p;
  return p === '/' ? `${prefix}/` : `${prefix}${p}`;
}
