import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import DocumentLang from './components/DocumentLang';
import AnalyticsRouteTracker, { AnalyticsBootstrap } from './components/AnalyticsRouteTracker';
import AnalyticsClickTracker from './components/AnalyticsClickTracker';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';

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
        <Route path="/gizlilik-politikasi" element={<LegalPage />} />
        <Route path="/hizmet-sartlari" element={<LegalPage />} />
        <Route path="/cerez-politikasi" element={<LegalPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
