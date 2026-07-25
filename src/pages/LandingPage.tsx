import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import PilotTimeline from '../components/PilotTimeline';
import { SITE_URL } from '../data/legalContent';
import { getLandingPage } from '../data/landingPages';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function LandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getLandingPage(slug) : undefined;

  useEffect(() => {
    if (!page) return;
    document.title = `${page.title} | Hype Vision`;
    setMeta('description', page.metaDescription);
    setMeta('og:title', page.title, 'property');
    setMeta('og:description', page.metaDescription, 'property');
    setMeta('og:url', `${SITE_URL}/${page.slug}`, 'property');
    setMeta('og:type', 'article', 'property');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/${page.slug}`;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.metaDescription,
      url: `${SITE_URL}/${page.slug}`,
      inLanguage: 'tr-TR',
      isPartOf: { '@type': 'WebSite', name: 'Hype Vision', url: SITE_URL },
      about: {
        '@type': 'SoftwareApplication',
        name: 'Hype Vision',
        applicationCategory: 'BusinessApplication',
      },
    };
    const scriptId = 'landing-page-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [page]);

  if (!page) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] hero-bg border-b border-vision/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Ana sayfa
            </Link>
            <ChevronRight size={12} aria-hidden />
            <span className="text-gray-500">{page.type === 'sector' ? 'Sektör' : 'Modül'}</span>
            <ChevronRight size={12} aria-hidden />
            <span className="text-vision-light">{page.eyebrow}</span>
          </nav>

          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">
            {page.eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-5">
            {page.h1}{' '}
            <span className="text-vision-light">{page.h1Highlight}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mb-6">
            {page.intro}
          </p>

          {page.accuracy ? (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-vision-light bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              Doğruluk: {page.accuracy}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <Link
              to="/iletisim"
              data-track="contact_cta"
              data-track-location={`landing_${page.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-6 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors"
            >
              Demo talep edin
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/katalog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/25 px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Katalogu indir
            </Link>
          </div>

          <TrustBadges variant="hero" />
        </div>
      </div>

      <main className="flex-1">
        <section className="py-12 sm:py-16 border-b border-vision/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-6">Teknik özellikler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {page.specs.map((s) => (
                <div key={s.label} className="panel-card rounded-xl p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{s.label}</p>
                  <p className="text-sm font-semibold text-[#0A0A0A]">{s.value}</p>
                </div>
              ))}
            </div>

            {page.sections.map((section) => (
              <article key={section.heading} className="mb-10 last:mb-0">
                <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-vision/10 bg-white/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-lg font-semibold text-[#0A0A0A] mb-4">Kullanım alanları</h2>
              <ul className="space-y-2">
                {page.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-vision shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#0A0A0A] mb-4">Kazanımlar</h2>
              <ul className="space-y-2">
                {page.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-vision shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PilotTimeline />

        {page.relatedSlugs.length > 0 ? (
          <section className="py-12 border-t border-vision/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
              <h2 className="text-sm font-semibold text-[#0A0A0A] mb-4">İlgili çözümler</h2>
              <div className="flex flex-wrap gap-3">
                {page.relatedSlugs.map((rel) => {
                  const related = getLandingPage(rel);
                  if (!related) return null;
                  const href = related.type === 'sector' ? `/sektor/${rel}` : `/${rel}`;
                  return (
                    <Link
                      key={rel}
                      to={href}
                      className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-vision/40 hover:text-vision-dark transition-colors"
                    >
                      {related.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-14 bg-[#0c2a30] border-t border-vision/15">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              30 günlük pilot için bizimle iletişime geçin
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              GTÜ Teknopark Gebze merkezli ekibimiz sahanıza keşif için gelir. Mevcut kameralarınızla başlayın.
            </p>
            <Link
              to="/iletisim"
              data-track="contact_cta"
              data-track-location={`landing_${page.slug}_footer`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
            >
              İletişime geçin
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
