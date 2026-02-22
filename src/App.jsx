import { LanguageProvider } from './hooks/useLanguage';
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

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <StormedSection />
        <ConsciousnessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
