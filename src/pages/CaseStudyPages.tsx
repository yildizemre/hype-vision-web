import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';
import { ArchitectureDiagram, CtaPanel, PageHero, RelatedLinks, SmartLink, StickyCta } from '../components/kit';
import { getIndustry, getSolution, industryName, solutionName, solutionUrl, type Lang } from '../content';
import { CASE_BY_SLUG, CASE_STUDIES, caseUrl, type CaseFacts } from '../content/cases';
import { UI } from '../content/shared';
import { SITE_URL } from '../data/legalContent';
import { useBlogPosts } from '../i18n/content';
import { URL_LANG } from '../i18n/routing';
import { track } from '../lib/events';
import { breadcrumbSchema, usePageMeta } from '../seo/usePageMeta';

const L = (): Lang => (URL_LANG === 'en' ? 'en' : 'tr');

const FACT_LABELS: Record<Lang, Record<keyof CaseFacts | 'industry' | 'client' | 'solutions', string>> = {
  en: { industry: 'Industry', client: 'Client', cameras: 'Existing infrastructure', deployment: 'Deployment', setup: 'Pilot setup', pilotDuration: 'Measurement period', scope: 'Pilot scope', solutions: 'AI use cases' },
  tr: { industry: 'Sektör', client: 'Müşteri', cameras: 'Mevcut altyapı', deployment: 'Kurulum tipi', setup: 'Pilot kurulumu', pilotDuration: 'Ölçüm dönemi', scope: 'Pilot kapsamı', solutions: 'Yapay zeka senaryoları' },
};

export function CaseStudyPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const cs = CASE_BY_SLUG.get(slug);
  const posts = useBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  const { t } = useTranslation();
  const l = L();
  const u = UI[l];
  const url = `${SITE_URL}${caseUrl(slug, l)}`;
  const indexUrl = l === 'en' ? '/en/case-studies' : '/vaka-calismalari';

  useEffect(() => {
    if (cs) track('case_study_view', { case: slug });
  }, [cs, slug]);

  usePageMeta({
    title: post
      ? cs?.seo?.[l]
        ? `${cs.seo[l]!.title} | Hype Vision`
        : `${post.title} | ${l === 'en' ? 'Case study' : 'Vaka çalışması'} — Hype Vision`
      : 'Hype Vision',
    description: cs?.seo?.[l]?.description ?? post?.metaDescription ?? '',
    ogType: 'article',
    schemas:
      cs && post
        ? [
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.metaDescription,
              datePublished: cs.isoDate,
              dateModified: cs.isoDate,
              inLanguage: l,
              image: `${SITE_URL}/og-image.png`,
              mainEntityOfPage: { '@type': 'WebPage', '@id': url },
              author: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Hype Vision' },
              publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Hype Vision' },
              about: cs.solutions.map((s) => solutionName(getSolution(s), l)),
            },
            breadcrumbSchema([
              { name: u.home, url: `${SITE_URL}${l === 'en' ? '/en/' : '/'}` },
              { name: u.caseStudies, url: `${SITE_URL}${indexUrl}` },
              { name: post.title, url },
            ]),
          ]
        : undefined,
  });

  if (!cs || !post) return <NotFoundPage />;

  const facts = cs.facts[l];
  const rows: [string, string][] = [
    [FACT_LABELS[l].industry, industryName(getIndustry(cs.industry), l)],
    [FACT_LABELS[l].client, cs.client[l]],
    ...(Object.keys(FACT_LABELS[l]) as (keyof CaseFacts)[])
      .filter((k) => k in facts && facts[k])
      .map((k) => [FACT_LABELS[l][k], facts[k]!] as [string, string]),
  ];
  const solutions = cs.solutions
    .map(getSolution)
    .filter((s) => solutionUrl(s, l))
    .map((s) => ({ title: solutionName(s, l), url: solutionUrl(s, l)! }))
    .concat(cs.extraLinks?.[l] ?? []);
  const assess = l === 'en' ? '/en/camera-assessment' : '/kamera-degerlendirme';

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: l === 'en' ? '/en/' : '/' }, { name: u.caseStudies, url: indexUrl }, { name: cs.client[l] }]}
        eyebrow={u.caseStudies}
        h1={post.title}
        lead={post.excerpt}
      />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-10">
        <dl className="panel-card rounded-2xl p-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {rows.map(([k, v]) => (
            <div key={k} className="flex flex-col">
              <dt className="text-[11px] uppercase tracking-wider text-gray-500">{k}</dt>
              <dd className="text-sm font-medium text-[#0A0A0A]">{v}</dd>
            </div>
          ))}
          <div className="flex flex-col sm:col-span-2">
            <dt className="text-[11px] uppercase tracking-wider text-gray-500">{FACT_LABELS[l].solutions}</dt>
            <dd className="text-sm font-medium flex flex-wrap gap-2 mt-1">
              {solutions.map((s) => (
                <SmartLink key={s.url} href={s.url} className="text-vision-dark underline underline-offset-2">
                  {s.title}
                </SmartLink>
              ))}
            </dd>
          </div>
        </dl>

        <div>
          <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">{l === 'en' ? 'Reported results' : 'Raporlanan sonuçlar'}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {post.results.map((r) => (
              <div key={r.label} className="panel-card rounded-xl p-4 text-center">
                <p className="text-lg sm:text-xl font-bold text-vision">{r.value}</p>
                <p className="text-xs text-gray-500">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        <article className="panel-card rounded-2xl p-6 sm:p-10 space-y-8">
          {post.sections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3 pb-2 border-b border-gray-100">{s.heading}</h2>}
              <div className="space-y-3">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-[15px] text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100 italic">{t('blog.ui.disclaimer')}</p>
        </article>

        {facts.deployment && <ArchitectureDiagram lang={l} />}

        <RelatedLinks title={u.relatedSolutions} links={solutions} />
        <RelatedLinks
          title={l === 'en' ? 'Other case studies' : 'Diğer vaka çalışmaları'}
          links={CASE_STUDIES.filter((c) => c.slug !== slug).map((c) => ({
            title: posts.find((p) => p.slug === c.slug)?.title ?? c.client[l],
            url: caseUrl(c.slug, l),
            desc: c.client[l],
          }))}
        />
        <CtaPanel lang={l} location={`case_${slug}`} secondary={{ label: u.ctaPilot, href: l === 'en' ? '/en/pilot' : '/pilot' }} />
      </main>
      <StickyCta label={u.ctaCameras} href={assess} location={`case_${slug}`} />
      <Footer />
    </div>
  );
}

export function CaseStudiesIndexPage() {
  const l = L();
  const u = UI[l];
  const posts = useBlogPosts();
  const url = `${SITE_URL}${l === 'en' ? '/en/case-studies' : '/vaka-calismalari'}`;
  const title = l === 'en' ? 'Case Studies | Computer Vision on Existing CCTV — Hype Vision' : 'Vaka Çalışmaları | Mevcut Kameralarla Görüntü İşleme — Hype Vision';
  const description =
    l === 'en'
      ? 'Anonymised Hype Vision case studies from manufacturing and logistics: PPE compliance, idle time, defect detection and pallet counting on existing cameras.'
      : 'İmalat ve lojistikten anonim Hype Vision vaka çalışmaları: KKD uyumu, boşta kalma, kusur tespiti ve palet sayımı; mevcut kameralarla.';

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
          itemListElement: CASE_STUDIES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}${caseUrl(c.slug, l)}`, name: posts.find((p) => p.slug === c.slug)?.title })),
        },
      },
      breadcrumbSchema([
        { name: u.home, url: `${SITE_URL}${l === 'en' ? '/en/' : '/'}` },
        { name: u.caseStudies, url },
      ]),
    ],
  });

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: l === 'en' ? '/en/' : '/' }, { name: u.caseStudies }]}
        eyebrow={u.caseStudies}
        h1={l === 'en' ? 'Case studies from the field' : 'Sahadan vaka çalışmaları'}
        lead={l === 'en' ? 'Client names are withheld; industry, infrastructure and reported results are shared as published.' : 'Müşteri adları paylaşılmaz; sektör, altyapı ve raporlanan sonuçlar yayınlandığı haliyle paylaşılır.'}
      />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((c) => {
            const p = posts.find((x) => x.slug === c.slug);
            if (!p) return null;
            return (
              <SmartLink key={c.slug} href={caseUrl(c.slug, l)} className="group panel-card rounded-2xl p-6 flex flex-col hover:border-vision/25 hover:shadow-md transition-all">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-vision-dark mb-2">{industryName(getIndustry(c.industry), l)}</span>
                <span className="font-semibold text-[#0A0A0A] leading-snug mb-2 group-hover:text-vision-dark">{p.title}</span>
                <span className="text-sm text-gray-500 mb-4 flex-1">{c.client[l]}</span>
                <span className="flex flex-wrap gap-2 mb-4">
                  {p.results.slice(0, 2).map((r) => (
                    <span key={r.label} className="text-xs px-2.5 py-1 rounded-md bg-vision-50 text-gray-700 border border-vision/15">
                      {r.label}: <strong className="text-vision-dark">{r.value}</strong>
                    </span>
                  ))}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-vision">
                  {l === 'en' ? 'Read' : 'Oku'} <ArrowRight size={14} aria-hidden />
                </span>
              </SmartLink>
            );
          })}
        </div>
        <CtaPanel lang={l} location="cases_index" />
      </main>
      <Footer />
    </div>
  );
}
