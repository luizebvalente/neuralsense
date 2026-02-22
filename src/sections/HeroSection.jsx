import { ArrowRight, MessageCircle } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const NeuralSphere = lazy(() => import('../components/effects/NeuralSphere'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const scrollTo = useSmoothScroll();

  const highlightWord = lang === 'pt' ? 'Inteligência Artificial' : 'Artificial Intelligence';
  const parts = t.hero.title.split(highlightWord);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000]">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0">
          <NeuralSphere />
        </div>
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <div className="max-w-[900px] mx-auto">
          {/* Label */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-xs tracking-widest text-[#666] uppercase mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            AI-Powered Industrial Consulting
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.4)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="bg-gradient-to-r from-[#6366f1] to-[#818cf8] bg-clip-text text-transparent">
                  {highlightWord}
                </span>
                {parts[1]}
              </>
            ) : (
              t.hero.title
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.6)}
            className="text-lg text-[#999] max-w-lg mx-auto leading-relaxed mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.8)}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24 md:mb-32"
          >
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-full transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/[0.12] hover:border-white/[0.24] text-white text-sm font-medium rounded-full transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <MessageCircle className="w-4 h-4" />
              {t.hero.cta2}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(1.0)}
            className="flex justify-center gap-12 md:gap-20"
          >
            {[
              { value: '50+', label: lang === 'pt' ? 'Projetos' : 'Projects' },
              { value: '99.2%', label: 'Uptime' },
              { value: '10x', label: lang === 'pt' ? 'ROI Médio' : 'Avg ROI' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm text-[#666] mt-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border border-white/[0.12] flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-[#6366f1]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
