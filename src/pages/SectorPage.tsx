import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import PilotTimeline from '../components/PilotTimeline';
import { SITE_URL } from '../data/legalContent';
import { useBlogPost, useSectorList, useSectorPage } from '../i18n/content';
import { getHomeSeoStrings } from '../components/HomeSeo';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function SectorPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const sector = useSectorPage(slug ?? '');
  const allSlugs = useSectorList();
  const casePost = useBlogPost(sector?.caseSlug ?? '');

  useEffect(() => {
    if (!sector) return;
    document.title = `${sector.title} | Hype Vision`;
    setMeta('description', sector.metaDescription);
    setMeta('og:title', sector.title, 'property');
    setMeta('og:description', sector.metaDescription, 'property');
    setMeta('og:url', `${SITE_URL}/sektor/${sector.slug}`, 'property');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/sektor/${sector.slug}`;

    return () => {
      const home = getHomeSeoStrings(t);
      document.title = home.title;
      setMeta('description', home.description);
      if (canonical) canonical.href = `${SITE_URL}/`;
    };
  }, [sector, t]);

  if (!sector) return <Navigate to="/" replace />;

  const related = allSlugs.filter((s) => s !== sector.slug);

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] hero-bg border-b border-vision/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              {t('sectors.ui.breadcrumbHome')}
            </Link>
            <ChevronRight size={12} aria-hidden />
            <span className="text-gray-500">{t('sectors.ui.breadcrumbSectors')}</span>
            <ChevronRight size={12} aria-hidden />
            <span className="text-vision-light">{sector.eyebrow}</span>
          </nav>

          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">
            {sector.eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-5">
            {sector.headline}{' '}
            <span className="text-vision-light">{sector.headlineHighlight}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mb-8">
            {sector.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#iletisim"
              data-track="contact_cta"
              data-track-location={`sector_${sector.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-6 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors"
            >
              {t('sectors.ui.cta')}
              <ArrowRight size={16} />
            </a>
            <a
              href="https://panel.hypevisionlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/25 px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {t('sectors.ui.ctaPanel')}
            </a>
          </div>

          <TrustBadges variant="hero" />
        </div>
      </div>

      <main className="flex-1">
        <section className="py-12 sm:py-16 border-b border-vision/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-6">{t('sectors.ui.metricsTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {sector.metrics.map((m) => (
                <div key={m.label} className="panel-card rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-vision mb-1">{m.value}</p>
                  <p className="text-xs text-gray-500">{m.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-6">{t('sectors.ui.painsTitle')}</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {sector.pains.map((p) => (
                <div key={p.title} className="panel-card rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-[#0A0A0A] mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-4">{t('sectors.ui.modulesTitle')}</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {sector.modules.map((mod) => (
                <span
                  key={mod}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-vision-50 border border-vision/20 text-vision-dark"
                >
                  <CheckCircle2 size={14} className="text-vision" />
                  {mod}
                </span>
              ))}
            </div>

            {casePost && (
              <div className="panel-card rounded-2xl p-6 sm:p-8 border-vision/20">
                <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-2">
                  {t('sectors.ui.caseStudy')}
                </p>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">{casePost.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{casePost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {casePost.results.map((r) => (
                    <span key={r.label} className="text-xs px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100">
                      {r.label}: <strong className="text-vision-dark">{r.value}</strong>
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${casePost.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-vision hover:text-vision-dark"
                >
                  {t('sections.blog.readMore')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        </section>

        <PilotTimeline />

        <section className="py-12 border-t border-vision/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-sm font-semibold text-[#0A0A0A] mb-4">{t('sectors.ui.relatedSectors')}</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((s) => (
                <Link
                  key={s}
                  to={`/sektor/${s}`}
                  className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-vision/40 hover:text-vision-dark transition-colors capitalize"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
