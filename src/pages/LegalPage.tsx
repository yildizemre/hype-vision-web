import { useEffect, useMemo } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { Calendar, ChevronRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LegalSeo from '../components/LegalSeo';
import LegalFooterBar from '../components/LegalFooterBar';
import {
  headingToId,
  SITE_URL,
  type LegalSection,
} from '../data/legalContent';
import { useLegalNavLinks, useLegalPage, useLegalPagesList } from '../i18n/content';
import { getHomeSeoStrings } from '../components/HomeSeo';

function sectionAnchor(section: LegalSection, index: number): string {
  if (section.id) return section.id;
  if (section.heading) return headingToId(section.heading);
  return `bolum-${index + 1}`;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function LegalPage() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const page = useLegalPage(slug);
  const legalPagesList = useLegalPagesList();
  const legalNavLinks = useLegalNavLinks();

  const toc = useMemo(
    () =>
      page?.sections
        .map((section, i) => ({
          id: sectionAnchor(section, i),
              label: section.heading ?? (i === 0 ? t('legal.ui.intro') : `${t('legal.ui.section')} ${i + 1}`),
          isIntro: !section.heading && i === 0,
        }))
        .filter((item) => item.label) ?? [],
    [page, t]
  );

  useEffect(() => {
    if (!page) return;

    document.title = `${page.title} | ${t('legal.ui.titleSuffix')}`;
    setMeta('description', page.metaDescription);
    setMeta('og:title', `${page.title} | ${t('common.seo.legalTitleSuffix')}`, 'property');
    setMeta('og:description', page.metaDescription, 'property');
    setMeta('og:url', `${SITE_URL}/${page.slug}`, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:title', `${page.title} | ${t('common.seo.legalTitleSuffix')}`);
    setMeta('twitter:description', page.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/${page.slug}`;

    return () => {
      const home = getHomeSeoStrings(t);
      document.title = home.title;
      setMeta('description', home.description);
      setMeta('og:title', home.ogTitle, 'property');
      setMeta('og:description', home.ogDescription, 'property');
      setMeta('og:url', `${SITE_URL}/`, 'property');
      if (canonical) canonical.href = `${SITE_URL}/`;
    };
  }, [page, t]);

  if (!page) return <Navigate to="/" replace />;

  const PageIcon = page.Icon;

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <LegalSeo page={page} />
      <Header variant="solid" />

      {/* Hero — pt header offset */}
      <div className="pt-16 lg:pt-[4.25rem] bg-[#0c2a30] border-b border-vision/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-14">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 mb-5">
            <Link to="/" className="hover:text-vision-light transition-colors">
              {t('legal.ui.breadcrumbHome')}
            </Link>
            <ChevronRight size={12} className="text-gray-600 shrink-0" aria-hidden />
            <span className="text-gray-500">{t('legal.ui.breadcrumbLegal')}</span>
            <ChevronRight size={12} className="text-gray-600 shrink-0" aria-hidden />
            <span className="text-vision-light font-medium">{page.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-vision/15 border border-vision/25">
                <PageIcon size={14} className="text-vision-light" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-vision-light">
                  {t('legal.ui.documentBadge')}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-3">
                {page.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{page.summary}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 shrink-0">
              <Calendar size={14} className="text-vision-light" />
              {t('legal.ui.lastUpdated')}: {page.lastUpdated}
            </div>
          </div>

          {/* Mobil: yasal sayfa sekmeleri */}
          <div
            className="flex gap-2 mt-8 overflow-x-auto pb-1 snap-x snap-mandatory lg:hidden -mx-1 px-1"
            role="tablist"
            aria-label={t('legal.ui.legalPagesTablist')}
          >
            {legalNavLinks.map(({ slug: s, shortTitle, href }) => (
              <Link
                key={s}
                to={href}
                role="tab"
                aria-selected={s === slug}
                className={`snap-start shrink-0 px-4 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                  s === slug
                    ? 'bg-vision text-white border-vision'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-vision/30'
                }`}
              >
                {shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-14">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Sidebar — masaüstü */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-6">
              <div className="panel-card rounded-2xl p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-vision-dark mb-3">
                  {t('legal.ui.legalPages')}
                </p>
                <nav className="space-y-1" aria-label={t('legal.ui.legalPages')}>
                  {legalPagesList.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        p.slug === slug
                          ? 'bg-vision text-white'
                          : 'text-gray-600 hover:bg-vision-50/60 hover:text-vision-dark'
                      }`}
                    >
                      <p.Icon size={15} strokeWidth={1.5} />
                      {p.shortTitle}
                    </Link>
                  ))}
                </nav>
              </div>

              {toc.length > 1 && (
                <div className="panel-card rounded-2xl p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-vision-dark mb-3">
                    {t('legal.ui.tableOfContents')}
                  </p>
                  <nav className="space-y-0.5" aria-label={t('legal.ui.tableOfContents')}>
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block px-3 py-2 text-xs text-gray-600 hover:text-vision-dark hover:bg-vision-50/50 rounded-lg transition-colors leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </aside>

            {/* İçerik */}
            <article className="lg:col-span-9" aria-labelledby="legal-page-title">
              <h2 id="legal-page-title" className="sr-only">
                {page.title}
              </h2>

              {/* Mobil içindekiler */}
              {toc.length > 1 && (
                <div className="lg:hidden panel-card rounded-2xl p-4 mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-vision-dark mb-2">
                    {t('legal.ui.tableOfContents')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 hover:border-vision/30 hover:text-vision-dark transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="panel-card rounded-2xl p-6 sm:p-8 lg:p-10 space-y-10 sm:space-y-12">
                {page.sections.map((section, i) => {
                  const anchor = sectionAnchor(section, i);
                  return (
                    <section key={anchor} id={anchor} className="scroll-mt-28">
                      {section.heading ? (
                        <h2 className="text-lg sm:text-xl font-semibold text-[#0A0A0A] mb-4 pb-3 border-b border-gray-100">
                          {section.heading}
                        </h2>
                      ) : i === 0 ? (
                        <h2 className="sr-only">{t('legal.ui.intro')}</h2>
                      ) : null}
                      <div className="space-y-3">
                        {section.paragraphs.map((p, j) => (
                          <p key={j} className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

              {/* İletişim CTA */}
              <div className="mt-6 sm:mt-8 p-6 sm:p-8 rounded-2xl bg-[#0c2a30] border border-vision/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-white font-semibold text-base mb-1">{t('legal.ui.questionsTitle')}</p>
                  <p className="text-sm text-gray-400">
                    {t('legal.ui.questionsDesc')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="mailto:info@hypevisionlab.com"
                    data-track="email"
                    data-track-location="legal"
                    id="cta-email-legal"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
                  >
                    <Mail size={16} />
                    {t('legal.ui.sendEmail')}
                  </a>
                </div>
              </div>

              {/* Diğer yasal sayfalar — mobil kart */}
              <div className="mt-6 lg:hidden grid sm:grid-cols-2 gap-3">
                {legalPagesList
                  .filter((p) => p.slug !== slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className="flex items-center gap-3 p-4 rounded-xl panel-card hover:border-vision/25 transition-colors"
                    >
                      <p.Icon size={18} className="text-vision shrink-0" />
                      <span className="text-sm font-medium text-[#0A0A0A]">{p.title}</span>
                      <ChevronRight size={14} className="text-gray-400 ml-auto shrink-0" />
                    </Link>
                  ))}
              </div>
            </article>
          </div>
        </div>
      </main>

      <LegalFooterBar activeSlug={slug} />
      <Footer hideLegalBar />
    </div>
  );
}
