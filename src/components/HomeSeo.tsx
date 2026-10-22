import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
    setMeta('twitter:title', t('common.seo.twitterTitle'));
    setMeta('twitter:description', t('common.seo.twitterDescription'));
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
