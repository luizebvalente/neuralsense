import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const layerDetails = [
  ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
  ['OpenAI', 'Anthropic', 'Gemini', 'Meta Llama', 'Mistral'],
  ['Agentic Negotiation', 'Cost Analysis', 'Quality Vision', 'Predictive Engine'],
  ['Manutenção Preditiva', 'Controle de Qualidade', 'Cotação IA', 'Digital Twin'],
];

export default function SolutionSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(3);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const layers = [
    { label: t.solution.layers.iaas, tab: t.solution.tabs[3] },
    { label: t.solution.layers.platform, tab: t.solution.tabs[2] },
    { label: t.solution.layers.tools, tab: t.solution.tabs[1] },
    { label: t.solution.layers.apps, tab: t.solution.tabs[0] },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 bg-[#000]" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {t.solution.title}
          </h2>
          <p className="text-base text-[#999] max-w-2xl mx-auto">
            {t.solution.subtitle}
          </p>
        </motion.div>

        {/* Tabs + Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {layers.map((layer, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-[#6366f1] text-white'
                    : 'text-[#999] border border-white/[0.06] hover:text-white'
                }`}
              >
                {layer.tab}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <motion.div
            key={active}
            className="border border-white/[0.06] bg-[#0a0a0a] rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              {layers[active].label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layerDetails[active].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6366f1] flex-shrink-0" />
                  <span className="text-sm text-[#999]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
