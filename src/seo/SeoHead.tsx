import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../data/legalContent';
import { HREFLANG, LANGS, OG_LOCALE, URL_LANG, pathFor } from '../i18n/routing';
import { getSeoRoute, normalizePath } from './routes';

function upsert(selector: string, create: () => HTMLElement): HTMLElement {
  return document.head.querySelector(selector) ?? document.head.appendChild(create());
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  }) as HTMLMetaElement;
  el.content = content;
}

/**
 * Her rota değişiminde canonical, hreflang, og:url, og:locale ve robots'u ayarlar.
 * Sayfa bileşenleri yalnızca title/description/şema ile ilgilenir.
 */
export default function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const route = getSeoRoute(path);
    // Çevrilmemiş (TR'ye özel) sayfanın /en veya /ru kopyası → kanonik TR sürüm
    const canonicalLang = route && !route.translated ? 'tr' : URL_LANG;
    const canonicalUrl = `${SITE_URL}${pathFor(path, canonicalLang)}`;

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    }) as HTMLLinkElement;
    if (route) canonical.href = canonicalUrl;
    else canonical.remove();

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
    if (route?.translated) {
      for (const lang of LANGS) {
        const l = document.createElement('link');
        l.rel = 'alternate';
        l.hreflang = HREFLANG[lang];
        l.href = `${SITE_URL}${pathFor(path, lang)}`;
        document.head.appendChild(l);
      }
      const xd = document.createElement('link');
      xd.rel = 'alternate';
      xd.hreflang = 'x-default';
      xd.href = `${SITE_URL}${pathFor(path, 'tr')}`;
      document.head.appendChild(xd);
    }

    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:locale', OG_LOCALE[URL_LANG]);
    // Bilinmeyen rota (404) ve sunum alanı indekslenmez
    const indexable = Boolean(route) && !(route && !route.translated && URL_LANG !== 'tr');
    setMetaTag(
      'name',
      'robots',
      indexable
        ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        : 'noindex, follow',
    );
  }, [pathname]);

  return null;
}
