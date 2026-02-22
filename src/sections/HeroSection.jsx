import { ArrowRight, MessageCircle } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/ui/Button';

const NeuralSphere = lazy(() => import('../components/effects/NeuralSphere'));

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <div className="absolute inset-0">
          <NeuralSphere />
        </div>
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-ns-black/80 via-ns-black/50 to-ns-black" />

      <div
        ref={ref}
        className={`relative z-10 container-wide py-40 sm:py-48 lg:py-56 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ns-border bg-ns-panel/50 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-ns-accent" />
          <span className="text-xs font-medium text-ns-gray tracking-wider uppercase">
            AI-Powered Industrial Consulting
          </span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-ns-white leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto">
          {t.hero.title.split('Inteligência Artificial').length > 1 ? (
            <>
              {t.hero.title.split('Inteligência Artificial')[0]}
              <span className="text-gradient">Inteligência Artificial</span>
              {t.hero.title.split('Inteligência Artificial')[1]}
            </>
          ) : t.hero.title.split('Artificial Intelligence').length > 1 ? (
            <>
              {t.hero.title.split('Artificial Intelligence')[0]}
              <span className="text-gradient">Artificial Intelligence</span>
              {t.hero.title.split('Artificial Intelligence')[1]}
            </>
          ) : (
            t.hero.title
          )}
        </h1>

        <p className="text-base sm:text-lg text-ns-gray max-w-xl mx-auto leading-relaxed mb-12">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button size="lg" icon={ArrowRight} onClick={() => scrollTo('services')}>
            {t.hero.cta1}
          </Button>
          <Button size="lg" variant="secondary" icon={MessageCircle} iconPosition="left" onClick={() => scrollTo('contact')}>
            {t.hero.cta2}
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '50+', label: 'Projetos' },
            { value: '99.2%', label: 'Uptime' },
            { value: '10x', label: 'ROI Médio' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-ns-white">{stat.value}</p>
              <p className="text-xs text-ns-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border border-ns-border flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-ns-muted animate-bounce" />
        </div>
      </div>
    </section>
  );
}
