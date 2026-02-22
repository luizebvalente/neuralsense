import { LanguageProvider } from './hooks/useLanguage';
import CustomCursor from './components/effects/CustomCursor';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import ServicesSection from './sections/ServicesSection';
import StormedSection from './sections/StormedSection';
import ConsciousnessSection from './sections/ConsciousnessSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

function SectionDivider() {
  return <div className="section-line" />;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="grain" />
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <SolutionSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <StormedSection />
        <SectionDivider />
        <ConsciousnessSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
