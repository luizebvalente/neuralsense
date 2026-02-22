import { ArrowRight, MessageCircle } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Button from '../components/ui/Button';

const NeuralSphere = lazy(() => import('../components/effects/NeuralSphere'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const scrollTo = useSmoothScroll();

  const highlightWord = lang === 'pt' ? 'Inteligência Artificial' : 'Artificial Intelligence';
  const parts = t.hero.title.split(highlightWord);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0">
          <NeuralSphere />
        </div>
      </Suspense>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-ns-black/70 via-ns-black/40 to-ns-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-ns-black/30 via-transparent to-ns-black/30" />

      {/* Content */}
      <div className="relative z-10 container-ns py-48 sm:py-56 lg:py-64 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.2)} className="mb-10 sm:mb-12">
          <span className="badge-ns">
            <span className="w-1.5 h-1.5 rounded-full bg-ns-accent animate-glow-pulse" />
            AI-Powered Industrial Consulting
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.4)}
          className="text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem] font-extrabold text-ns-white leading-[1.06] tracking-tight mb-8 sm:mb-10 max-w-[900px] mx-auto"
        >
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="text-gradient">{highlightWord}</span>
              {parts[1]}
            </>
          ) : (
            t.hero.title
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-base sm:text-lg text-ns-gray max-w-[560px] mx-auto leading-[1.8] mb-12 sm:mb-14"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.8)} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-24 sm:mb-28">
          <Button size="lg" icon={ArrowRight} onClick={() => scrollTo('services')}>
            {t.hero.cta1}
          </Button>
          <Button size="lg" variant="secondary" icon={MessageCircle} iconPosition="left" onClick={() => scrollTo('contact')}>
            {t.hero.cta2}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(1)} className="flex justify-center gap-12 sm:gap-16 lg:gap-20">
          {[
            { value: '50+', label: 'Projetos' },
            { value: '99.2%', label: 'Uptime' },
            { value: '10x', label: 'ROI Médio' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ns-white font-[JetBrains_Mono]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-ns-muted mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border border-ns-border/60 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-ns-accent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
