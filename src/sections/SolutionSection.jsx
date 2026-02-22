import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';

const layerDetails = [
  ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
  ['OpenAI', 'Anthropic', 'Gemini', 'Meta Llama', 'Mistral'],
  ['Agentic Negotiation', 'Cost Analysis', 'Quality Vision', 'Predictive Engine'],
  ['Manutenção Preditiva', 'Controle de Qualidade', 'Cotação IA', 'Digital Twin'],
];

export default function SolutionSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(3);

  const layers = [
    { label: t.solution.layers.iaas, tab: t.solution.tabs[3] },
    { label: t.solution.layers.platform, tab: t.solution.tabs[2] },
    { label: t.solution.layers.tools, tab: t.solution.tabs[1] },
    { label: t.solution.layers.apps, tab: t.solution.tabs[0] },
  ];

  return (
    <section id="solution" className="section-pad relative overflow-hidden">
      <div className="container-ns">
        <SectionTitle title={t.solution.title} subtitle={t.solution.subtitle} />

        <FadeIn className="max-w-[860px] mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 md:mb-20">
            {layers.map((layer, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-400 ${
                  active === i
                    ? 'bg-ns-accent text-white shadow-[0_0_24px_rgba(99,102,241,0.3)]'
                    : 'text-ns-muted border border-ns-border hover:text-ns-white hover:border-ns-border-hover'
                }`}
              >
                {layer.tab}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="rounded-3xl border border-ns-border bg-ns-card/50 p-10 sm:p-14 md:p-16">
            <h3
              className="text-2xl sm:text-3xl font-bold text-ns-white mb-10 md:mb-12"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              {layers[active].label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {layerDetails[active].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 py-5 px-7 rounded-2xl bg-ns-black/60 border border-ns-border/40 hover:border-ns-border-hover transition-all duration-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-ns-accent flex-shrink-0" />
                  <span className="text-base text-ns-gray font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
