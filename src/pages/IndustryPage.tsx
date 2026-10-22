import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';
import { Bullets, CtaButton, CtaPanel, FaqList, PageHero, RelatedLinks, Section, SmartLink, StickyCta } from '../components/kit';
import { casesForIndustry, getSolution, industryByPath, solutionName, solutionUrl } from '../content';
import { caseUrl } from '../content/cases';
import { UI } from '../content/shared';
import { SITE_URL } from '../data/legalContent';
import { LANG_PREFIX, URL_LANG } from '../i18n/routing';
import { toFullPath } from '../seo/routes';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';
import { useBlogPosts } from '../i18n/content';

export default function IndustryPage() {
  const { pathname } = useLocation();
  const hit = industryByPath(toFullPath(LANG_PREFIX[URL_LANG], pathname));
  if (!hit) return <NotFoundPage />;
  return <IndustryView key={hit.ind.id} />;
}

function IndustryView() {
  const { pathname } = useLocation();
  const { ind, lang } = industryByPath(toFullPath(LANG_PREFIX[URL_LANG], pathname))!;
  const c = lang === 'en' ? ind.en : ind.tr!;
  const u = UI[lang];
  const url = `${SITE_URL}${lang === 'en' ? ind.urls.en : ind.urls.tr}`;
  const indexUrl = lang === 'en' ? '/en/industries' : '/sektorler';
  const assess = lang === 'en' ? '/en/camera-assessment' : '/kamera-degerlendirme';
  const posts = useBlogPosts();

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: c.h1,
        description: c.metaDescription,
        url,
        inLanguage: lang,
        about: c.name,
        isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      breadcrumbSchema([
        { name: u.home, url: `${SITE_URL}${lang === 'en' ? '/en/' : '/'}` },
        { name: u.industries, url: `${SITE_URL}${indexUrl}` },
        { name: c.name, url },
      ]),
      faqSchema(c.faq),
    ],
  });

  const cases = casesForIndustry(ind.id).map((cs) => ({
    title: posts.find((p) => p.slug === cs.slug)?.title ?? cs.client[lang],
    url: caseUrl(cs.slug, lang),
    desc: cs.client[lang],
  }));

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: lang === 'en' ? '/en/' : '/' }, { name: u.industries, url: indexUrl }, { name: c.name }]}
        eyebrow={u.industries}
        h1={c.h1}
        lead={c.lead}
      >
        <CtaButton href={assess} event="camera_assessment" location="industry_hero">
          {u.ctaCameras}
        </CtaButton>
      </PageHero>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        <div className="max-w-3xl space-y-3">
          {c.context.map((p) => (
            <p key={p} className="text-[15px] sm:text-base text-gray-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <Section id="use-cases" title={u.useCases}>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.useCases.map(({ solution, why }) => {
              const s = getSolution(solution);
              const href = solutionUrl(s, lang);
              const body = (
                <>
                  <span className="flex items-center justify-between gap-2 font-semibold text-[#0A0A0A]">
                    {solutionName(s, lang)}
                    {href && <ArrowRight size={16} className="text-vision shrink-0" aria-hidden />}
                  </span>
                  <span className="block text-sm text-gray-600 mt-1.5 leading-relaxed">{why}</span>
                </>
              );
              return href ? (
                <SmartLink key={solution} href={href} className="panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                  {body}
                </SmartLink>
              ) : (
                <div key={solution} className="panel-card rounded-xl p-5">
                  {body}
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="considerations" title={u.considerations} className="max-w-3xl">
          <Bullets items={c.considerations} />
        </Section>

        <Section id="faq" title={u.faq} className="max-w-4xl">
          <FaqList faq={c.faq} />
        </Section>

        <RelatedLinks title={u.caseStudies} links={cases} />

        <CtaPanel lang={lang} location={`industry_${ind.id}`} secondary={{ label: u.ctaPilot, href: lang === 'en' ? '/en/pilot' : '/pilot' }} />
      </main>
      <StickyCta label={u.ctaCameras} href={assess} location={`industry_${ind.id}`} />
      <Footer />
    </div>
  );
}
