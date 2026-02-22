import { Activity, Eye, TrendingUp, Zap, Bot, Layers } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const iconMap = { Activity, Eye, TrendingUp, Zap, Bot, Layers };

export default function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#000]" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-base text-[#999] max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.services.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Activity;
            return (
              <motion.div
                key={i}
                className="group border border-white/[0.06] bg-[#0a0a0a] rounded-2xl p-8 hover:border-white/[0.12] transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * i,
                  ease: 'easeOut',
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#6366f1]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#999] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
