import Header from '../components/Header';
import Hero from '../components/Hero';
import CameraIntegration from '../components/CameraIntegration';
import VisionShowcase from '../components/VisionShowcase';
import LogoStrip from '../components/LogoStrip';
import TrustStrip from '../components/TrustStrip';
import TrustBadges from '../components/TrustBadges';
import PilotTimeline from '../components/PilotTimeline';
import ComparisonTable from '../components/ComparisonTable';
import RoiCalculator from '../components/RoiCalculator';
import SectorHub from '../components/SectorHub';
import AboutSection from '../components/AboutSection';
import CoreProducts from '../components/CoreProducts';
import InspectionModules from '../components/InspectionModules';
import AudienceSection from '../components/AudienceSection';
import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import ValueImpact from '../components/ValueImpact';
import UseCases from '../components/UseCases';
import PlatformOverview from '../components/PlatformOverview';
import BlogSection from '../components/BlogSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import SeoSchema from '../components/SeoSchema';
import HomeSeo from '../components/HomeSeo';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomeSeo />
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <section className="py-8 sm:py-10 bg-white border-b border-vision/10" aria-label="Trust">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <TrustBadges />
          </div>
        </section>
        <CameraIntegration />
        <VisionShowcase />
        <LogoStrip />
        <TrustStrip />
        <PilotTimeline />
        <AboutSection />
        <CoreProducts />
        <InspectionModules />
        <ComparisonTable />
        <AudienceSection />
        <ProblemSolution />
        <HowItWorks />
        <ValueImpact />
        <RoiCalculator />
        <UseCases />
        <SectorHub />
        <PlatformOverview />
        <BlogSection />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
