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

function Divider() {
  return <div className="section-divider" />;
}

export default function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <Divider />
        <ProblemSection />
        <Divider />
        <SolutionSection />
        <Divider />
        <ServicesSection />
        <Divider />
        <StormedSection />
        <Divider />
        <ConsciousnessSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
