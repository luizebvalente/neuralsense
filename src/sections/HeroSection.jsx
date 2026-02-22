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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Neural Sphere background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 opacity-70">
          <NeuralSphere />
        </div>
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ns-black via-ns-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ns-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ns-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side: text content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ns-accent/20 bg-ns-accent/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-ns-accent animate-pulse" />
              <span className="text-xs font-medium text-ns-accent tracking-wider uppercase">AI-Powered Industrial Consulting</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-ns-white leading-[1.08] mb-6 tracking-tight">
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
              ) : t.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-ns-gray max-w-xl leading-relaxed mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" icon={ArrowRight} onClick={() => scrollTo('services')}>
                {t.hero.cta1}
              </Button>
              <Button size="lg" variant="secondary" icon={MessageCircle} iconPosition="left" onClick={() => scrollTo('contact')}>
                {t.hero.cta2}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-ns-border/50">
              {[
                { value: '50+', label: 'Projetos Entregues' },
                { value: '99.2%', label: 'Uptime Garantido' },
                { value: '10x', label: 'ROI Médio' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl sm:text-2xl font-bold text-ns-accent">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-ns-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: space for 3D sphere to show through */}
          <div className="hidden lg:block flex-1 min-h-[400px]" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-ns-accent/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-ns-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
