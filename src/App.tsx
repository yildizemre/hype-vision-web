import { Routes, Route } from 'react-router-dom';
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
import SunumApp from './sunum/SunumApp';
import { MODULE_SLUGS, SEO_SECTOR_SLUGS } from './data/landingPages';

export default function App() {
  return (
    <>
      <DocumentLang />
      <AnalyticsBootstrap />
      <ScrollToTop />
      <AnalyticsRouteTracker />
      <AnalyticsClickTracker />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/katalog" element={<CatalogPage />} />
        <Route path="/sss" element={<FaqPage />} />
        <Route path="/gizlilik-politikasi" element={<LegalPage />} />
        <Route path="/hizmet-sartlari" element={<LegalPage />} />
        <Route path="/cerez-politikasi" element={<LegalPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        {SEO_SECTOR_SLUGS.map((slug) => (
          <Route key={slug} path={`/sektor/${slug}`} element={<LandingPage />} />
        ))}
        <Route path="/sektor/:slug" element={<SectorPage />} />
        {MODULE_SLUGS.map((slug) => (
          <Route key={slug} path={`/${slug}`} element={<LandingPage />} />
        ))}
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/sunum/*" element={<SunumApp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
