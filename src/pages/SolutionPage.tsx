import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';
import {
  ArchitectureDiagram,
  Bullets,
  CtaButton,
  CtaPanel,
  FaqList,
  PageHero,
  PilotProcess,
  RelatedLinks,
  Section,
  Steps,
  StickyCta,
} from '../components/kit';
import {
  casesForSolution,
  getSolution,
  industriesForSolution,
  industryName,
  resourcesForSolution,
  solutionByPath,
  solutionName,
  solutionUrl,
} from '../content';
import { caseUrl } from '../content/cases';
import { CAMERA_APPROACH, DEPLOYMENT, PRIVACY, UI } from '../content/shared';
import { SITE_URL } from '../data/legalContent';
import { LANG_PREFIX, URL_LANG } from '../i18n/routing';
import { toFullPath } from '../seo/routes';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';
import { useBlogPosts } from '../i18n/content';

export default function SolutionPage() {
  const { pathname } = useLocation();
  const hit = solutionByPath(toFullPath(LANG_PREFIX[URL_LANG], pathname));
  if (!hit) return <NotFoundPage />;
  return <SolutionView key={hit.sol.id} />;
}

function SolutionView() {
  const { pathname } = useLocation();
  const { sol, lang } = solutionByPath(toFullPath(LANG_PREFIX[URL_LANG], pathname))!;
  const c = lang === 'en' ? sol.en : sol.tr!;
  const u = UI[lang];
  const url = `${SITE_URL}${solutionUrl(sol, lang)}`;
  const solutionsIndex = lang === 'en' ? '/en/solutions' : '/cozumler';
  const assess = lang === 'en' ? '/en/camera-assessment' : '/kamera-degerlendirme';
  const pilot = lang === 'en' ? '/en/pilot' : '/pilot';
  const casePosts = useBlogPosts();

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: c.name,
        serviceType: c.name,
        description: c.definition,
        url,
        inLanguage: lang,
        provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Hype Vision', url: SITE_URL },
        areaServed: lang === 'en' ? 'Worldwide' : { '@type': 'Country', name: 'Türkiye' },
      },
      breadcrumbSchema([
        { name: u.home, url: `${SITE_URL}${lang === 'en' ? '/en/' : '/'}` },
        { name: u.solutions, url: `${SITE_URL}${solutionsIndex}` },
        { name: c.name, url },
      ]),
      faqSchema(c.faq),
    ],
  });

  const relatedSolutions = sol.related
    .map(getSolution)
    .map((s) => ({ s, href: solutionUrl(s, lang) }))
    .filter((x): x is { s: typeof x.s; href: string } => Boolean(x.href))
    .map(({ s, href }) => ({ title: solutionName(s, lang), url: href, desc: lang === 'en' ? s.en.lead : s.tr?.lead }));

  const industries = industriesForSolution(sol.id).map((i) => ({ title: industryName(i, lang), url: lang === 'en' ? i.urls.en : i.urls.tr }));
  const resources = resourcesForSolution(sol.id, lang);
  const cases = casesForSolution(sol.id).map((cs) => ({
    title: casePosts.find((p) => p.slug === cs.slug)?.title ?? cs.client[lang],
    url: caseUrl(cs.slug, lang),
    desc: cs.client[lang],
  }));

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: lang === 'en' ? '/en/' : '/' }, { name: u.solutions, url: solutionsIndex }, { name: c.name }]}
        eyebrow={u.solutions}
        h1={c.h1}
        lead={c.lead}
        definition={c.definition}
      >
        <CtaButton href={assess} event="camera_assessment" location="solution_hero">
          {u.ctaCameras}
        </CtaButton>
        <CtaButton href={pilot} variant="ghost" location="solution_hero">
          {u.ctaPilot}
        </CtaButton>
      </PageHero>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <Section id="problem" title={u.problem}>
            <div className="space-y-3">
              {c.problem.map((p) => (
                <p key={p} className="text-[15px] text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Section>
          <Section id="how" title={u.howItWorks}>
            <Steps items={c.howItWorks} />
          </Section>
        </div>

        <ArchitectureDiagram lang={lang} />

        <div className="grid lg:grid-cols-2 gap-10">
          <Section id="events" title={u.events}>
            <Bullets items={c.events} />
          </Section>
          <Section id="scenarios" title={u.scenarios}>
            <Bullets items={c.scenarios} />
          </Section>
        </div>

        <Section id="deployment" title={u.deployment}>
          <div className="grid sm:grid-cols-3 gap-4">
            {DEPLOYMENT[lang].map((d) => (
              <div key={d.title} className="panel-card rounded-xl p-5">
                <p className="font-semibold text-[#0A0A0A] mb-1.5">{d.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid lg:grid-cols-2 gap-10">
          <Section id="cameras" title={u.cameras}>
            <Bullets items={[...c.cameraNotes, ...CAMERA_APPROACH[lang]]} />
          </Section>
          <Section id="integration" title={u.integrations}>
            <Bullets items={c.integrations} />
          </Section>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <Section id="privacy" title={u.privacy}>
            <Bullets items={PRIVACY[lang]} />
          </Section>
          <Section id="limitations" title={u.limitations}>
            <Bullets items={c.limitations} />
          </Section>
        </div>

        <Section id="pilot" title={u.pilot}>
          <PilotProcess lang={lang} />
        </Section>

        <Section id="faq" title={u.faq} className="max-w-4xl">
          <FaqList faq={c.faq} />
        </Section>

        <div className="space-y-10">
          <RelatedLinks title={u.relatedSolutions} links={relatedSolutions} />
          <RelatedLinks title={u.relatedIndustries} links={industries} />
          <RelatedLinks title={u.caseStudies} links={cases} />
          <RelatedLinks title={u.relatedResources} links={resources} />
        </div>

        <CtaPanel lang={lang} location={`solution_${sol.id}`} secondary={{ label: u.ctaPilot, href: pilot }} />
      </main>
      <StickyCta label={u.ctaCameras} href={assess} location={`solution_${sol.id}`} />
      <Footer />
    </div>
  );
}
