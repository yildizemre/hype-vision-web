import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageProcessing from './components/ImageProcessing';
import SensorAnalytics from './components/SensorAnalytics';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import VisionModules from './components/VisionModules';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import ProductionControl from './pages/ProductionControl';
import QualityAI from './pages/QualityAI';
import ProcessMonitoring from './pages/ProcessMonitoring';
import ERPIntegration from './pages/ERPIntegration';
import Electronics from './pages/Electronics';
import AutomotiveSector from './pages/AutomotiveSector';
import FoodBeverage from './pages/FoodBeverage';
import ManufacturingSector from './pages/ManufacturingSector';
import Machinery from './pages/Machinery';
import Pharmaceutical from './pages/Pharmaceutical';
import SmallBusiness from './pages/SmallBusiness';
import MediumBusiness from './pages/MediumBusiness';
import Enterprise from './pages/Enterprise';
import CustomSolutions from './pages/CustomSolutions';
import Blog from './pages/Blog';
import SupportCenter from './pages/SupportCenter';
import About from './pages/About';
import Contact from './pages/Contact';
import SafetyAI from './pages/SafetyAI';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const HomePage = () => (
  <>
    <Hero />
    <ImageProcessing />
    <SensorAnalytics />
    <Features />
    <Dashboard />
    <VisionModules />
    <Solutions />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/production-control" element={<ProductionControl />} />
            <Route path="/quality-ai" element={<QualityAI />} />
            <Route path="/process-monitoring" element={<ProcessMonitoring />} />
            <Route path="/erp-integration" element={<ERPIntegration />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/automotive" element={<AutomotiveSector />} />
            <Route path="/food-beverage" element={<FoodBeverage />} />
            <Route path="/manufacturing" element={<ManufacturingSector />} />
            <Route path="/machinery" element={<Machinery />} />
            <Route path="/pharmaceutical" element={<Pharmaceutical />} />
            <Route path="/small-business" element={<SmallBusiness />} />
            <Route path="/medium-business" element={<MediumBusiness />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/custom-solutions" element={<CustomSolutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<SupportCenter />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safety-ai" element={<SafetyAI />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;