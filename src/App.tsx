import Header from './components/Header';
import Hero from './components/Hero';
import CameraIntegration from './components/CameraIntegration';
import VisionShowcase from './components/VisionShowcase';
import LogoStrip from './components/LogoStrip';
import TrustStrip from './components/TrustStrip';
import AboutSection from './components/AboutSection';
import CoreProducts from './components/CoreProducts';
import InspectionModules from './components/InspectionModules';
import AudienceSection from './components/AudienceSection';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import ValueImpact from './components/ValueImpact';
import UseCases from './components/UseCases';
import PlatformOverview from './components/PlatformOverview';
import FaqSection from './components/FaqSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SeoSchema from './components/SeoSchema';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <CameraIntegration />
        <VisionShowcase />
        <LogoStrip />
        <TrustStrip />
        <AboutSection />
        <CoreProducts />
        <InspectionModules />
        <AudienceSection />
        <ProblemSolution />
        <HowItWorks />
        <ValueImpact />
        <UseCases />
        <PlatformOverview />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
