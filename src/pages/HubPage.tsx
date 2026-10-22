import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GuideBody from '../components/GuideBody';
import NotFoundPage from './NotFoundPage';
import { ArchitectureDiagram, CtaButton, CtaPanel, FaqList, PageHero, RelatedLinks, Section, SmartLink, StickyCta } from '../components/kit';
import { HUBS, getSolution, solutionName, solutionUrl } from '../content';
import { BUYER_FAQ, UI } from '../content/shared';
import { GUIDES, GUIDES_EN, guideUrl } from '../data/guides';
import { SITE_URL } from '../data/legalContent';
import { LANG_PREFIX, URL_LANG } from '../i18n/routing';
import { toFullPath } from '../seo/routes';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';

export default function HubPage() {
  const { pathname } = useLocation();
  const full = toFullPath(LANG_PREFIX[URL_LANG], pathname);
  const hub = HUBS.find((h) => h.urls.tr === full || h.urls.en === full);
  if (!hub || URL_LANG === 'ru') return <NotFoundPage />;
  const lang = URL_LANG;
  const c = hub.copy[lang];
  return <HubView key={hub.id} hubId={hub.id} lang={lang} title={c.h1} />;
}

function HubView({ hubId, lang }: { hubId: string; lang: 'tr' | 'en'; title: string }) {
  const hub = HUBS.find((h) => h.id === hubId)!;
  const c = hub.copy[lang];
  const u = UI[lang];
  const url = `${SITE_URL}${hub.urls[lang]}`;
  const assess = lang === 'en' ? '/en/camera-assessment' : '/kamera-degerlendirme';
  const faq = [...c.faq, ...BUYER_FAQ[lang].slice(0, 4)];
  const guides = lang === 'en' ? GUIDES_EN : GUIDES;
  const resources = hub.resources[lang]
    .map((p) => guides.find((g) => guideUrl(g) === p))
    .filter(Boolean)
    .map((g) => ({ title: g!.title, url: guideUrl(g!), desc: g!.excerpt }));

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: c.h1,
        description: c.definition,
        url,
        inLanguage: lang,
        isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
        about: { '@type': 'Thing', name: c.eyebrow },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          name: u.solutions,
          itemListElement: hub.solutions.map((id, i) => {
            const s = getSolution(id);
            return { '@type': 'ListItem', position: i + 1, name: solutionName(s, lang), url: `${SITE_URL}${solutionUrl(s, lang)}` };
          }),
        },
      },
      breadcrumbSchema([
        { name: u.home, url: `${SITE_URL}${lang === 'en' ? '/en/' : '/'}` },
        { name: c.eyebrow, url },
      ]),
      faqSchema(faq),
    ],
  });

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero crumbs={[{ name: u.home, url: lang === 'en' ? '/en/' : '/' }, { name: c.eyebrow }]} eyebrow={c.eyebrow} h1={c.h1} lead={c.lead} definition={c.definition}>
        <CtaButton href={assess} event="camera_assessment" location={`hub_${hub.id}`}>
          {u.ctaCameras}
        </CtaButton>
        <CtaButton href={lang === 'en' ? '/en/pilot' : '/pilot'} variant="ghost" location={`hub_${hub.id}`}>
          {u.ctaPilot}
        </CtaButton>
      </PageHero>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        <Section id="solutions" title={u.solutions}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hub.solutions.map((id) => {
              const s = getSolution(id);
              const href = solutionUrl(s, lang);
              if (!href) return null;
              return (
                <SmartLink key={id} href={href} className="group panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                  <span className="flex items-center justify-between font-semibold text-[#0A0A0A] group-hover:text-vision-dark">
                    {solutionName(s, lang)} <ArrowRight size={16} className="text-vision" aria-hidden />
                  </span>
                  <span className="block mt-1.5 text-sm text-gray-600 line-clamp-2">{lang === 'en' ? s.en.lead : s.tr?.lead ?? s.en.lead}</span>
                </SmartLink>
              );
            })}
          </div>
        </Section>

        <ArchitectureDiagram lang={lang} />

        <article className="panel-card rounded-2xl p-6 sm:p-10 space-y-5 max-w-4xl">
          <GuideBody blocks={c.blocks} ctaDefault="" lang={lang} />
        </article>

        <Section id="faq" title={u.faq} className="max-w-4xl">
          <FaqList faq={faq} />
        </Section>

        <RelatedLinks title={u.relatedResources} links={resources} />

        <CtaPanel lang={lang} location={`hub_${hub.id}`} secondary={{ label: u.ctaPilot, href: lang === 'en' ? '/en/pilot' : '/pilot' }} />
      </main>
      <StickyCta label={u.ctaCameras} href={assess} location={`hub_${hub.id}`} />
      <Footer />
    </div>
  );
}
