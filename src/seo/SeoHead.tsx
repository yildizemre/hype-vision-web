import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../data/legalContent';
import { HREFLANG, LANGS, LANG_PREFIX, OG_LOCALE, URL_LANG } from '../i18n/routing';
import { findCluster, toFullPath } from './routes';

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
    const full = toFullPath(LANG_PREFIX[URL_LANG], pathname);
    const cluster = findCluster(full);
    const canonicalUrl = `${SITE_URL}${full}`;

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    }) as HTMLLinkElement;
    if (cluster) canonical.href = canonicalUrl;
    else canonical.remove();

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
    const langs = cluster ? LANGS.filter((l) => cluster.urls[l]) : [];
    if (langs.length > 1) {
      for (const lang of langs) {
        const l = document.createElement('link');
        l.rel = 'alternate';
        l.hreflang = HREFLANG[lang];
        l.href = `${SITE_URL}${cluster!.urls[lang]}`;
        document.head.appendChild(l);
      }
      const xd = document.createElement('link');
      xd.rel = 'alternate';
      xd.hreflang = 'x-default';
      xd.href = `${SITE_URL}${cluster!.urls.tr ?? cluster!.urls.en}`;
      document.head.appendChild(xd);
    }

    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:locale', OG_LOCALE[URL_LANG]);
    // Kayıtlı olmayan yol (404, /sunum vb.) indekslenmez
    setMetaTag(
      'name',
      'robots',
      cluster ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow',
    );
  }, [pathname]);

  return null;
}
