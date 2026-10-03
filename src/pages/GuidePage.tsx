import SmartLink from '../components/kit/SmartLink';
import { StickyCta } from '../components/kit';
import { getSolution, solutionName, solutionUrl, type SolutionId } from '../content';
import { Calendar, ChevronRight, Clock, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GuideBody from '../components/GuideBody';
import { GUIDES, GUIDES_EN, guideUrl, type Guide } from '../data/guides';
import { getLandingPage } from '../data/landingPages';
import { SITE_URL } from '../data/legalContent';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';

const T = {
  tr: { home: 'Ana sayfa', blog: 'Blog', blogUrl: '/blog', homeUrl: '/', updated: 'Güncellendi', read: 'dk okuma', author: 'Yazar: Hype Vision Mühendislik Ekibi', toc: 'İçindekiler', faq: 'Sık sorulan sorular', related: 'İlgili sayfalar', solutions: 'İlgili çözümler', others: 'Diğer rehberler', cta: 'Tesisiniz için doğru görüntü işleme kurgusunu keşif görüşmesinde birlikte çıkaralım.', sticky: 'Kameralarınızı değerlendirelim', assess: '/kamera-degerlendirme', locale: 'tr-TR', authorName: 'Hype Vision Mühendislik Ekibi' },
  en: { home: 'Home', blog: 'Resources', blogUrl: '/en/resources', homeUrl: '/en/', updated: 'Updated', read: 'min read', author: 'By the Hype Vision engineering team', toc: 'Contents', faq: 'Frequently asked questions', related: 'Related pages', solutions: 'Related solutions', others: 'More resources', cta: 'Not sure what is feasible on your site? Send a few camera frames and your use case.', sticky: 'Evaluate your cameras', assess: '/en/camera-assessment', locale: 'en-GB', authorName: 'Hype Vision engineering team' },
} as const;

const fmtDate = (iso: string, locale: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });

const PAGE_TITLES: Record<string, string> = {
  '/endustriyel-goruntu-isleme': 'Endüstriyel görüntü işleme',
  '/cctv-yapay-zeka': 'CCTV yapay zeka',
  '/en/industrial-computer-vision': 'Industrial computer vision',
  '/en/cctv-ai-analytics': 'CCTV AI analytics',
  '/pilot': 'Pilot süreci',
  '/en/pilot': 'How a pilot works',
  '/kamera-degerlendirme': 'Kamera değerlendirmesi',
  '/en/camera-assessment': 'Camera assessment',
  '/en/solutions': 'All solutions',
};

function relatedTitle(path: string): string {
  if (PAGE_TITLES[path]) return PAGE_TITLES[path];
  const g = [...GUIDES, ...GUIDES_EN].find((x) => guideUrl(x) === path);
  if (g) return g.title;
  const lp = getLandingPage(path.split('/').pop() ?? '');
  if (lp) return lp.title.split('|')[0].trim();
  return path.split('/').pop()!.replace(/-/g, ' ');
}

export default function GuidePage({ guide }: { guide: Guide }) {
  const lang = guide.lang ?? 'tr';
  const t = T[lang];
  const url = `${SITE_URL}${guideUrl(guide)}`;
  const trDate = (iso: string) => fmtDate(iso, t.locale);
  const toc = guide.blocks.flatMap((b) => (b.type === 'h2' ? [b] : []));

  usePageMeta({
    title: guide.metaTitle,
    description: guide.metaDescription,
    ogType: 'article',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: guide.title,
        description: guide.metaDescription,
        datePublished: guide.isoDate,
        dateModified: guide.updated ?? guide.isoDate,
        inLanguage: lang === 'en' ? 'en' : 'tr-TR',
        keywords: guide.keywords.join(', '),
        image: `${SITE_URL}/og-image.png`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        author: { '@type': 'Organization', name: t.authorName, url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Hype Vision',
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-touch-icon.png` },
        },
      },
      breadcrumbSchema([
        { name: t.home, url: `${SITE_URL}${t.homeUrl}` },
        { name: t.blog, url: `${SITE_URL}${t.blogUrl}` },
        { name: guide.title, url },
      ]),
      ...(guide.faq.length ? [faqSchema(guide.faq)] : []),
    ],
  });

  const pool = lang === 'en' ? GUIDES_EN : GUIDES;
  const others = pool.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const sols = (guide.solutions ?? [])
    .map((id) => getSolution(id as SolutionId))
    .filter((x) => x && solutionUrl(x, lang))
    .map((x) => ({ title: solutionName(x, lang), url: solutionUrl(x, lang)! }));

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] bg-[#0c2a30] border-b border-vision/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 mb-5">
            <SmartLink href={t.homeUrl} className="hover:text-vision-light transition-colors">{t.home}</SmartLink>
            <ChevronRight size={12} className="text-gray-600" aria-hidden />
            <SmartLink href={t.blogUrl} className="hover:text-vision-light transition-colors">{t.blog}</SmartLink>
            <ChevronRight size={12} className="text-gray-600" aria-hidden />
            <span className="text-vision-light font-medium">{guide.category}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">{guide.title}</h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">{guide.excerpt}</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} />
              <time dateTime={guide.isoDate}>{trDate(guide.isoDate)}</time>
            </span>
            {guide.updated && (
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw size={12} />
                {t.updated}: <time dateTime={guide.updated}>{trDate(guide.updated)}</time>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} />
              {guide.readMinutes} {t.read}
            </span>
            <span>{t.author}</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 w-full">
        {toc.length > 2 && (
          <nav aria-label={t.toc} className="panel-card rounded-2xl p-5 sm:p-6 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-3">{t.toc}</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              {toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-gray-700 hover:text-vision-dark">{h.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="panel-card rounded-2xl p-6 sm:p-8 lg:p-10 space-y-5">
          <GuideBody
            blocks={guide.blocks}
            ctaDefault={t.cta}
            lang={lang}
          />

          {guide.faq.length > 0 && (
            <section aria-labelledby="sss" className="pt-6">
              <h2 id="sss" className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-4">{t.faq}</h2>
              <div className="space-y-3">
                {guide.faq.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-gray-200 bg-white p-4 open:border-vision/30">
                    <summary className="cursor-pointer font-medium text-[#0A0A0A] list-none flex justify-between gap-3">
                      {f.q}
                      <span className="text-vision group-open:rotate-45 transition-transform" aria-hidden>+</span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>

        {guide.related.length > 0 && (
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">{t.related}</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {guide.related.map((p) => (
                <SmartLink
                  key={p}
                  href={p}
                  className="panel-card rounded-xl p-4 text-sm font-semibold text-[#0A0A0A] hover:border-vision/25 transition-colors"
                >
                  {relatedTitle(p)}
                </SmartLink>
              ))}
            </div>
          </div>
        )}

        {sols.length > 0 && (
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">{t.solutions}</p>
            <div className="flex flex-wrap gap-2">
              {sols.map((x) => (
                <SmartLink key={x.url} href={x.url} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-vision-50 border border-vision/20 text-vision-dark hover:border-vision/40">
                  {x.title}
                </SmartLink>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">{t.others}</p>
          <div className="space-y-3">
            {others.map((g) => (
              <SmartLink
                key={g.slug}
                href={guideUrl(g)}
                className="block p-4 rounded-xl panel-card hover:border-vision/25 transition-colors"
              >
                <p className="text-sm font-semibold text-[#0A0A0A] mb-1">{g.title}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{g.excerpt}</p>
              </SmartLink>
            ))}
          </div>
        </div>
      </main>
      <StickyCta label={t.sticky} href={t.assess} location={`guide_${guide.slug}`} />
      <Footer />
    </div>
  );
}
