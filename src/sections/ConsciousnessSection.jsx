import { ClipboardCheck, Map, GraduationCap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const iconMap = { ClipboardCheck, Map, GraduationCap };

export default function ConsciousnessSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="consciousness" className="py-24 md:py-32 relative overflow-hidden">
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
            {t.consciousness.title}
          </h2>
          <p
            className="text-base md:text-lg text-[#999] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.consciousness.text}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.consciousness.items.map((item, i) => {
            const Icon = iconMap[item.icon] || ClipboardCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * (i + 1),
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-center bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8 md:p-10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-[#6366f1]" />
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-[#999] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
