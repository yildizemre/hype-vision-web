import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_URL } from '../data/legalContent';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Ana sayfa title / meta — dil değişince güncellenir */
export default function HomeSeo() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t('common.seo.homeTitle');
    const description = t('common.seo.homeDescription');

    document.title = title;
    setMeta('description', description);
    setMeta('og:title', t('common.seo.ogTitle'), 'property');
    setMeta('og:description', t('common.seo.ogDescription'), 'property');
    setMeta('og:url', `${SITE_URL}/`, 'property');
    setMeta('twitter:title', t('common.seo.twitterTitle'));
    setMeta('twitter:description', t('common.seo.twitterDescription'));

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/`;
  }, [t, i18n.language]);

  return null;
}

export function getHomeSeoStrings(t: (key: string) => string) {
  return {
    title: t('common.seo.homeTitle'),
    description: t('common.seo.homeDescription'),
    ogTitle: t('common.seo.ogTitle'),
    ogDescription: t('common.seo.ogDescription'),
  };
}
