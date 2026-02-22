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
      {/* 3D Neural Sphere background — centered behind content */}
      <Suspense fallback={null}>
        <div className="absolute inset-0">
          <NeuralSphere />
        </div>
      </Suspense>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ns-black/70 via-ns-black/50 to-ns-black" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ns-accent/5 rounded-full blur-[200px]" />

      {/* Content — centered like scale.com */}
      <div
        ref={ref}
        className={`relative z-10 container-wide py-32 sm:py-40 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ns-accent/20 bg-ns-accent/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-ns-accent animate-pulse" />
            <span className="text-xs font-medium text-ns-accent tracking-wider uppercase">
              AI-Powered Industrial Consulting
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ns-white leading-[1.08] mb-6 tracking-tight">
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

          <p className="text-base sm:text-lg md:text-xl text-ns-gray max-w-2xl mx-auto leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" icon={ArrowRight} onClick={() => scrollTo('services')}>
              {t.hero.cta1}
            </Button>
            <Button size="lg" variant="secondary" icon={MessageCircle} iconPosition="left" onClick={() => scrollTo('contact')}>
              {t.hero.cta2}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-ns-border/30 max-w-lg mx-auto">
            {[
              { value: '50+', label: 'Projetos Entregues' },
              { value: '99.2%', label: 'Uptime Garantido' },
              { value: '10x', label: 'ROI Médio' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-ns-accent">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-ns-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-ns-accent/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-ns-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
