import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  /** Sayfaya özel JSON-LD blokları */
  schemas?: object[];
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

const SCRIPT_ID = 'page-schema';

/** Title, description, OG/Twitter ve sayfa şemasını tek yerden yazar. Canonical/hreflang SeoHead'dedir. */
export function usePageMeta({ title, description, ogType = 'website', ogImage, schemas }: PageMeta) {
  const schemaJson = schemas ? JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) : '';

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
      setMeta('name', 'twitter:image', ogImage);
    }

    document.getElementById(SCRIPT_ID)?.remove();
    if (schemaJson) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      script.textContent = schemaJson;
      document.head.appendChild(script);
    }
    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [title, description, ogType, ogImage, schemaJson]);
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
