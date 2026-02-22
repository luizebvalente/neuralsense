import { ArrowRight, MessageCircle } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Button from '../components/ui/Button';

const NeuralSphere = lazy(() => import('../components/effects/NeuralSphere'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ns-black/60 via-ns-black/30 to-ns-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-ns-black/20 via-transparent to-ns-black/20" />

      {/* Content */}
      <div className="relative z-10 container-ns text-center">
        <div className="max-w-[1000px] mx-auto">
          {/* Badge */}
          <motion.div {...fadeUp(0.3)} className="mb-12 sm:mb-14 md:mb-16">
            <span className="badge-ns">
              <span className="w-1.5 h-1.5 rounded-full bg-ns-accent animate-glow-pulse" />
              AI-Powered Industrial Consulting
            </span>
          </motion.div>

          {/* Headline — MASSIVE */}
          <motion.h1
            {...fadeUp(0.5)}
            className="text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold text-ns-white leading-[1.02] tracking-[-0.04em] mb-10 sm:mb-12 md:mb-14"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
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
            {...fadeUp(0.7)}
            className="text-lg sm:text-xl md:text-[1.375rem] text-ns-gray max-w-[580px] mx-auto leading-[1.8] mb-14 sm:mb-16 md:mb-20"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.9)}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-28 sm:mb-32 md:mb-40"
          >
            <Button size="lg" icon={ArrowRight} onClick={() => scrollTo('services')}>
              {t.hero.cta1}
            </Button>
            <Button size="lg" variant="secondary" icon={MessageCircle} iconPosition="left" onClick={() => scrollTo('contact')}>
              {t.hero.cta2}
            </Button>
          </motion.div>

          {/* Stats — with plenty of space between */}
          <motion.div
            {...fadeUp(1.1)}
            className="flex justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-36"
          >
            {[
              { value: '50+', label: 'Projetos' },
              { value: '99.2%', label: 'Uptime' },
              { value: '10x', label: 'ROI Médio' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-ns-white tracking-tight"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-ns-muted mt-3 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
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
