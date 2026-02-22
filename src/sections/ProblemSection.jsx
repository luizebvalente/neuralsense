import { useLanguage } from '../hooks/useLanguage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function ProblemSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#000]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl lg:text-5xl font-bold tracking-tight text-white text-center mb-5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t.problem.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#999] text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed mb-16"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t.problem.text}
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.problem.stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="border border-white/[0.06] bg-[#0a0a0a] rounded-2xl p-8 text-center"
            >
              <p
                className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm text-[#999] mt-3 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
