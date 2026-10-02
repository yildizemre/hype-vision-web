import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Clock, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GuideBody from '../components/GuideBody';
import { GUIDES, type Guide } from '../data/guides';
import { getLandingPage } from '../data/landingPages';
import { SITE_URL } from '../data/legalContent';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';

const trDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

function relatedTitle(path: string): string {
  if (path === '/goruntu-isleme') return 'Endüstriyel görüntü işleme sistemleri';
  if (path.startsWith('/blog/')) {
    const g = GUIDES.find((x) => `/blog/${x.slug}` === path);
    if (g) return g.title;
  }
  const lp = getLandingPage(path.replace(/^\/(sektor\/)?/, ''));
  return lp ? lp.title.split('|')[0].trim() : path;
}

export default function GuidePage({ guide }: { guide: Guide }) {
  const url = `${SITE_URL}/blog/${guide.slug}`;
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
        inLanguage: 'tr-TR',
        keywords: guide.keywords.join(', '),
        image: `${SITE_URL}/og-image.png`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        author: { '@type': 'Organization', name: 'Hype Vision Mühendislik Ekibi', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Hype Vision',
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-touch-icon.png` },
        },
      },
      breadcrumbSchema([
        { name: 'Ana sayfa', url: `${SITE_URL}/` },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: guide.title, url },
      ]),
      ...(guide.faq.length ? [faqSchema(guide.faq)] : []),
    ],
  });

  const others = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] bg-[#0c2a30] border-b border-vision/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 mb-5">
            <Link to="/" className="hover:text-vision-light transition-colors">Ana sayfa</Link>
            <ChevronRight size={12} className="text-gray-600" aria-hidden />
            <Link to="/blog" className="hover:text-vision-light transition-colors">Blog</Link>
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
                Güncellendi: <time dateTime={guide.updated}>{trDate(guide.updated)}</time>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} />
              {guide.readMinutes} dk okuma
            </span>
            <span>Yazar: Hype Vision Mühendislik Ekibi</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 w-full">
        {toc.length > 2 && (
          <nav aria-label="İçindekiler" className="panel-card rounded-2xl p-5 sm:p-6 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-3">İçindekiler</p>
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
            ctaDefault="Tesisiniz için doğru görüntü işleme kurgusunu keşif görüşmesinde birlikte çıkaralım."
          />

          {guide.faq.length > 0 && (
            <section aria-labelledby="sss" className="pt-6">
              <h2 id="sss" className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-4">Sık sorulan sorular</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">İlgili sayfalar</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {guide.related.map((p) => (
                <Link
                  key={p}
                  to={p}
                  className="panel-card rounded-xl p-4 text-sm font-semibold text-[#0A0A0A] hover:border-vision/25 transition-colors"
                >
                  {relatedTitle(p)}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">Diğer rehberler</p>
          <div className="space-y-3">
            {others.map((g) => (
              <Link
                key={g.slug}
                to={`/blog/${g.slug}`}
                className="block p-4 rounded-xl panel-card hover:border-vision/25 transition-colors"
              >
                <p className="text-sm font-semibold text-[#0A0A0A] mb-1">{g.title}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{g.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
