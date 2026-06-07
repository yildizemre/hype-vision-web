import type { LegalPageData } from '../data/legalContent';
import { SITE_URL } from '../data/legalContent';
import i18n from '../i18n';

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function LegalSeo({ page }: { page: LegalPageData }) {
  const pageUrl = `${SITE_URL}/${page.slug}`;

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${page.title} | ${i18n.t('legal.ui.titleSuffix')}`,
    description: page.metaDescription,
    inLanguage: 'tr-TR',
    dateModified: '2026-06-03',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: i18n.t('legal.ui.breadcrumbSeoHome'),
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: i18n.t('legal.ui.breadcrumbSeoLegal'),
        item: `${SITE_URL}/gizlilik-politikasi`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
