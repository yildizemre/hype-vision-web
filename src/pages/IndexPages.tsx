import { ArrowRight, ShieldCheck, Gauge, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CtaPanel, PageHero, RelatedLinks, Section, SmartLink } from '../components/kit';
import { HUBS, INDUSTRIES, SOLUTIONS, industryName, solutionName, solutionUrl, type Lang, type SolutionGroup } from '../content';
import { COMPANY_DEFINITION, UI } from '../content/shared';
import { MODULE_SLUGS, getLandingPage } from '../data/landingPages';
import { SITE_URL } from '../data/legalContent';
import { URL_LANG } from '../i18n/routing';
import { breadcrumbSchema, usePageMeta } from '../seo/usePageMeta';

const lang = (): Lang => (URL_LANG === 'en' ? 'en' : 'tr');

const GROUPS: Record<SolutionGroup, { icon: typeof ShieldCheck; tr: string; en: string }> = {
  safety: { icon: ShieldCheck, tr: 'İş güvenliği', en: 'Workplace safety' },
  production: { icon: Gauge, tr: 'Üretim ve kalite', en: 'Production and quality' },
  operations: { icon: Activity, tr: 'Operasyon analitiği', en: 'Operational analytics' },
};

export function SolutionsIndexPage() {
  const l = lang();
  const u = UI[l];
  const url = `${SITE_URL}${l === 'en' ? '/en/solutions' : '/cozumler'}`;
  const title = l === 'en' ? 'AI Video Analytics Solutions for Safety, Production & Operations | Hype Vision' : 'Görüntü İşleme Çözümleri: İSG, Üretim ve Operasyon | Hype Vision';
  const description =
    l === 'en'
      ? 'All Hype Vision computer-vision solutions on existing CCTV: PPE, forklift–pedestrian, restricted areas, falls, fire and smoke, production monitoring, counting, quality inspection, queues and occupancy.'
      : 'Mevcut CCTV üzerinde çalışan tüm Hype Vision görüntü işleme çözümleri: KKD, forklift-yaya, yasak bölge, düşme, yangın, hat izleme, sayım, kalite kontrol, kuyruk ve yoğunluk.';

  // TR'de eşleşmesi olmayan mevcut modül sayfaları da listelenir (baret, yüzey kusuru, KVKK, ONVIF)
  const trExtras =
    l === 'tr'
      ? MODULE_SLUGS.filter((s) => !SOLUTIONS.some((x) => x.urls.tr === `/${s}`)).map((s) => ({
          title: getLandingPage(s)!.title.split('|')[0].trim(),
          url: `/${s}`,
          desc: getLandingPage(s)!.metaDescription,
        }))
      : [];

  usePageMeta({
    title,
    description,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url,
        inLanguage: l,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: SOLUTIONS.filter((s) => solutionUrl(s, l)).map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: solutionName(s, l),
            url: `${SITE_URL}${solutionUrl(s, l)}`,
          })),
        },
      },
      breadcrumbSchema([
        { name: u.home, url: `${SITE_URL}${l === 'en' ? '/en/' : '/'}` },
        { name: u.solutions, url },
      ]),
    ],
  });

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: l === 'en' ? '/en/' : '/' }, { name: u.solutions }]}
        eyebrow={u.solutions}
        h1={l === 'en' ? 'Computer-vision solutions on your existing cameras' : 'Mevcut kameralarınız üzerinde görüntü işleme çözümleri'}
        lead={COMPANY_DEFINITION[l]}
      />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        {(Object.keys(GROUPS) as SolutionGroup[]).map((g) => {
          const { icon: Icon } = GROUPS[g];
          return (
            <Section key={g} id={g} title={GROUPS[g][l]}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SOLUTIONS.filter((s) => s.group === g && solutionUrl(s, l)).map((s) => (
                  <SmartLink key={s.id} href={solutionUrl(s, l)!} className="group panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                    <Icon size={18} className="text-vision mb-2" aria-hidden />
                    <span className="flex items-center justify-between font-semibold text-[#0A0A0A] group-hover:text-vision-dark">
                      {solutionName(s, l)} <ArrowRight size={15} className="text-vision" aria-hidden />
                    </span>
                    <span className="block mt-1.5 text-sm text-gray-600 line-clamp-2">{l === 'en' ? s.en.lead : s.tr?.lead ?? s.en.lead}</span>
                  </SmartLink>
                ))}
              </div>
            </Section>
          );
        })}
        <RelatedLinks title={l === 'en' ? 'More modules' : 'Diğer modüller'} links={trExtras} />
        <RelatedLinks
          title={l === 'en' ? 'Background' : 'Arka plan'}
          links={HUBS.map((h) => ({ title: h.copy[l].h1, url: h.urls[l], desc: h.copy[l].lead }))}
        />
        <CtaPanel lang={l} location="solutions_index" />
      </main>
      <Footer />
    </div>
  );
}

export function IndustriesIndexPage() {
  const l = lang();
  const u = UI[l];
  const url = `${SITE_URL}${l === 'en' ? '/en/industries' : '/sektorler'}`;
  const title = l === 'en' ? 'Industries | Computer Vision & Video Analytics Use Cases — Hype Vision' : 'Sektörler | Görüntü İşleme Kullanım Alanları — Hype Vision';
  const description =
    l === 'en'
      ? 'Computer vision and CCTV analytics use cases by industry: manufacturing, logistics, retail, banking, restaurants, hospitality, construction and jewelry manufacturing.'
      : 'Sektörlere göre görüntü işleme ve CCTV analitiği: imalat, lojistik, perakende, bankacılık, restoran, otel, inşaat ve kuyumculuk.';

  const trExtra =
    l === 'tr'
      ? [
          { title: 'Tekstil', url: '/sektor/tekstil' },
          { title: 'Otomotiv', url: '/sektor/otomotiv' },
          { title: 'Gıda', url: '/sektor/gida' },
          { title: 'Metal', url: '/sektor/metal' },
          { title: getLandingPage('tekstil-fabrikasi-yapay-zeka')!.title.split('|')[0].trim(), url: '/sektor/tekstil-fabrikasi-yapay-zeka' },
          { title: getLandingPage('gida-fabrikasi-kalite-kontrol')!.title.split('|')[0].trim(), url: '/sektor/gida-fabrikasi-kalite-kontrol' },
        ]
      : [
          { title: 'Textile', url: '/en/sektor/tekstil' },
          { title: 'Automotive', url: '/en/sektor/otomotiv' },
          { title: 'Food & beverage', url: '/en/sektor/gida' },
          { title: 'Metal', url: '/en/sektor/metal' },
        ];

  usePageMeta({
    title,
    description,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url,
        inLanguage: l,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: INDUSTRIES.map((i, n) => ({ '@type': 'ListItem', position: n + 1, name: industryName(i, l), url: `${SITE_URL}${l === 'en' ? i.urls.en : i.urls.tr}` })),
        },
      },
      breadcrumbSchema([
        { name: u.home, url: `${SITE_URL}${l === 'en' ? '/en/' : '/'}` },
        { name: u.industries, url },
      ]),
    ],
  });

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: l === 'en' ? '/en/' : '/' }, { name: u.industries }]}
        eyebrow={u.industries}
        h1={l === 'en' ? 'Video analytics use cases by industry' : 'Sektörlere göre görüntü işleme kullanım alanları'}
        lead={l === 'en' ? 'The same camera infrastructure answers different questions in different industries. Choose yours to see the relevant use cases.' : 'Aynı kamera altyapısı her sektörde farklı sorulara cevap verir. Sektörünüzü seçerek ilgili senaryoları görün.'}
      />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((i) => {
            const c = l === 'en' ? i.en : i.tr;
            return (
              <SmartLink key={i.id} href={l === 'en' ? i.urls.en : i.urls.tr} className="group panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                <span className="flex items-center justify-between font-semibold text-[#0A0A0A] group-hover:text-vision-dark">
                  {industryName(i, l)} <ArrowRight size={15} className="text-vision" aria-hidden />
                </span>
                {c && <span className="block mt-1.5 text-sm text-gray-600 line-clamp-3">{c.lead}</span>}
              </SmartLink>
            );
          })}
        </div>
        <RelatedLinks title={l === 'en' ? 'Sector notes' : 'Sektör notları'} links={trExtra} />
        <CtaPanel lang={l} location="industries_index" />
      </main>
      <Footer />
    </div>
  );
}
