import { Shield, Cpu, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const icons = [Shield, Cpu, Target];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.about.title}
          </h2>
          <p
            className="text-base md:text-lg text-[#999] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.about.text}
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center gap-12 md:gap-20 mb-16"
        >
          {[
            { value: '15+', label: 'Anos de Experiência' },
            { value: '200+', label: 'Profissionais' },
            { value: '98%', label: 'Satisfação' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm text-[#999] mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.values.map((value, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + 0.12 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-center bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h3
                  className="text-base font-semibold text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm text-[#999]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
