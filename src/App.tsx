import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import DocumentLang from './components/DocumentLang';
import AnalyticsRouteTracker, { AnalyticsBootstrap } from './components/AnalyticsRouteTracker';
import AnalyticsClickTracker from './components/AnalyticsClickTracker';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import BlogPostPage from './pages/BlogPostPage';
import SectorPage from './pages/SectorPage';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogIndexPage from './pages/BlogIndexPage';
import SolutionPage from './pages/SolutionPage';
import IndustryPage from './pages/IndustryPage';
import HubPage from './pages/HubPage';
import ResourcePage from './pages/ResourcePage';
import { SolutionsIndexPage, IndustriesIndexPage } from './pages/IndexPages';
import { CaseStudyPage, CaseStudiesIndexPage } from './pages/CaseStudyPages';
import { CameraAssessmentPage, PartnersPage, PilotPage } from './pages/ConversionPages';
import SeoHead from './seo/SeoHead';
const SunumApp = lazy(() => import('./sunum/SunumApp'));
import { MODULE_SLUGS, SEO_SECTOR_SLUGS } from './data/landingPages';
import { HUBS, INDUSTRIES, SOLUTIONS } from './content';
import { CASE_BY_SLUG } from './content/cases';
import { URL_LANG } from './i18n/routing';

/** Eski /blog/<vaka> adresleri yeni vaka çalışması adresine (Netlify 301'in SPA karşılığı) */
function BlogSlugRoute() {
  const { slug = '' } = useParams();
  if (URL_LANG !== 'ru' && CASE_BY_SLUG.has(slug)) {
    return <Navigate to={URL_LANG === 'en' ? `/case-studies/${slug}` : `/vaka-calismalari/${slug}`} replace />;
  }
  return <BlogPostPage />;
}

const strip = (p: string) => p.replace(/^\/en(?=\/)/, '');

export default function App() {
  const tr = URL_LANG === 'tr';
  const en = URL_LANG === 'en';
  return (
    <>
      <DocumentLang />
      <SeoHead />
      <AnalyticsBootstrap />
      <ScrollToTop />
      <AnalyticsRouteTracker />
      <AnalyticsClickTracker />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/gizlilik-politikasi" element={<LegalPage />} />
        <Route path="/hizmet-sartlari" element={<LegalPage />} />
        <Route path="/cerez-politikasi" element={<LegalPage />} />
        <Route path="/blog/:slug" element={<BlogSlugRoute />} />
        <Route path="/sunum/*" element={<Suspense fallback={null}><SunumApp /></Suspense>} />

        {tr && (
          <>
            <Route path="/katalog" element={<CatalogPage />} />
            <Route path="/sss" element={<FaqPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/goruntu-isleme" element={<Navigate to="/endustriyel-goruntu-isleme" replace />} />
            <Route path="/cctv-yapay-zeka-analizi" element={<Navigate to="/cctv-yapay-zeka" replace />} />
            {HUBS.map((h) => <Route key={h.id} path={h.urls.tr} element={<HubPage />} />)}
            {SOLUTIONS.filter((s) => s.tr).map((s) => <Route key={s.id} path={s.urls.tr!} element={<SolutionPage />} />)}
            {INDUSTRIES.filter((i) => i.tr && !i.trExisting).map((i) => <Route key={i.id} path={i.urls.tr} element={<IndustryPage />} />)}
            <Route path="/cozumler" element={<SolutionsIndexPage />} />
            <Route path="/sektorler" element={<IndustriesIndexPage />} />
            <Route path="/vaka-calismalari" element={<CaseStudiesIndexPage />} />
            <Route path="/vaka-calismalari/:slug" element={<CaseStudyPage />} />
            <Route path="/pilot" element={<PilotPage />} />
            <Route path="/kamera-degerlendirme" element={<CameraAssessmentPage />} />
            <Route path="/is-ortakligi" element={<PartnersPage />} />
            {SEO_SECTOR_SLUGS.map((slug) => <Route key={slug} path={`/sektor/${slug}`} element={<LandingPage />} />)}
            {MODULE_SLUGS.map((slug) => <Route key={slug} path={`/${slug}`} element={<LandingPage />} />)}
          </>
        )}

        {en && (
          <>
            <Route path="/blog" element={<Navigate to="/resources" replace />} />
            <Route path="/resources" element={<BlogIndexPage />} />
            <Route path="/resources/:slug" element={<ResourcePage />} />
            <Route path="/solutions" element={<SolutionsIndexPage />} />
            <Route path="/solutions/cctv-ai-analytics" element={<Navigate to="/cctv-ai-analytics" replace />} />
            {SOLUTIONS.map((s) => <Route key={s.id} path={strip(s.urls.en)} element={<SolutionPage />} />)}
            <Route path="/industries" element={<IndustriesIndexPage />} />
            {INDUSTRIES.map((i) => <Route key={i.id} path={strip(i.urls.en)} element={<IndustryPage />} />)}
            {HUBS.map((h) => <Route key={h.id} path={strip(h.urls.en)} element={<HubPage />} />)}
            <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
            <Route path="/pilot" element={<PilotPage />} />
            <Route path="/camera-assessment" element={<CameraAssessmentPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </>
        )}

        {URL_LANG === 'ru' && <Route path="/blog" element={<BlogIndexPage />} />}

        <Route path="/sektor/:slug" element={<SectorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
