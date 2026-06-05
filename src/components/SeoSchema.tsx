import { allFaqs } from '../data/faqData';

const SITE_URL = 'https://hypevisionlab.com';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Hype Vision',
  legalName: 'Hype Teknoloji',
  alternateName: ['HypeVisionLab', 'Hype Analytics AI'],
  url: SITE_URL,
  logo: `${SITE_URL}/hypevisionlogo.png`,
  image: [`${SITE_URL}/og-image.png`, `${SITE_URL}/hypevisionlogo.png`],
  description:
    "2020'den beri endüstriyel yapay zeka: mevcut IP kameralarla İSG, kalite kontrol, personel verimliliği ve güvenlik denetimi. RTSP/ONVIF, Edge/Cloud, KVKK uyumlu.",
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Yeni Riva Yolu',
    addressLocality: 'Beykoz',
    addressRegion: 'İstanbul',
    postalCode: '34805',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'TR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-541-862-9190',
    contactType: 'sales',
    email: 'info@hypevisionlab.com',
    availableLanguage: ['Turkish', 'English'],
    areaServed: 'TR',
  },
  sameAs: [],
  knowsAbout: [
    'Endüstriyel yapay zeka',
    'Görüntü işleme',
    'İSG denetimi',
    'Kalite kontrol',
    'OEE',
    'IP kamera entegrasyonu',
    'ONVIF',
    'RTSP',
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Hype Vision — Hype Teknoloji',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  telephone: '+90-541-862-9190',
  email: 'info@hypevisionlab.com',
  priceRange: '$$',
  address: organization.address,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Turkey',
  },
};

const software = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'Hype Vision',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Industrial AI / Computer Vision',
  operatingSystem: 'Web, Cloud, Edge Linux',
  description:
    'Yapay zeka destekli görüntü işleme: IP kameralardan İSG/KKD analizi, kalite kontrol, personel verimliliği, boşta kalma, OEE ve güvenlik. Edge, Cloud ve hibrit mimari.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'TRY',
    description: 'Ücretsiz demo ve keşif',
    url: `${SITE_URL}/#demo`,
  },
  featureList: [
    'Mevcut IP kamera entegrasyonu — RTSP/ONVIF, marka bağımsız',
    'İSG ve KKD (PPE) analizi, tehlikeli alan ihlali',
    'Anlık kalite kontrol ve fire azaltma',
    'Personel verimliliği ve boşta kalma (idle) ölçümü',
    'OEE, duruş ve cycle-time metrikleri',
    'Edge, Cloud ve hibrit mimari',
    'KVKK uyumlu veri işleme',
    'ERP/SAP/MES REST API entegrasyonu',
    'Multi-site merkezi panel',
    'Custom model eğitimi',
  ],
  provider: { '@id': `${SITE_URL}/#organization` },
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Hype Vision',
  url: SITE_URL,
  inLanguage: 'tr-TR',
  description:
    'Endüstriyel yapay zeka ile otomatik fabrika denetimi — İSG, kalite, verimlilik, güvenlik',
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/#sss?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

function buildFaqPage(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function SeoSchema() {
  const faqPage = buildFaqPage(allFaqs);

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'Hype Vision | Endüstriyel Yapay Zeka — İSG, Kalite, Verimlilik',
    description:
      "2020'den beri Hype Teknoloji. Mevcut IP kameralarla İSG analizi, kalite kontrol ve operasyonel verimlilik. Beykoz, İstanbul.",
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#software` },
    primaryImageOfPage: `${SITE_URL}/og-image.png`,
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={localBusiness} />
      <JsonLd data={software} />
      <JsonLd data={website} />
      <JsonLd data={webPage} />
      <JsonLd data={faqPage} />
    </>
  );
}
