import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const layerDetails = [
  ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
  ['OpenAI', 'Anthropic', 'Gemini', 'Meta Llama', 'Mistral'],
  ['Agentic Negotiation', 'Cost Analysis', 'Quality Vision', 'Predictive Engine'],
  ['Manutenção Preditiva', 'Controle de Qualidade', 'Cotação IA', 'Digital Twin'],
];

export default function SolutionSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(3);

  const layers = [
    { label: t.solution.layers.iaas, tab: t.solution.tabs[3] },
    { label: t.solution.layers.platform, tab: t.solution.tabs[2] },
    { label: t.solution.layers.tools, tab: t.solution.tabs[1] },
    { label: t.solution.layers.apps, tab: t.solution.tabs[0] },
  ];

  return (
    <section id="solution" className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <SectionTitle title={t.solution.title} subtitle={t.solution.subtitle} />

        <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {layers.map((layer, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-ns-accent text-white'
                    : 'text-ns-muted border border-ns-border hover:text-ns-white hover:border-ns-muted'
                }`}
              >
                {layer.tab}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-ns-border bg-ns-panel/40 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-ns-white mb-6">{layers[active].label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layerDetails[active].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 px-5 rounded-xl bg-ns-black/40 border border-ns-border/50">
                  <div className="w-2 h-2 rounded-full bg-ns-accent flex-shrink-0" />
                  <span className="text-sm text-ns-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
