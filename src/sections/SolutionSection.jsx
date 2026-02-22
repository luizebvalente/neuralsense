import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const layerColors = [
  { bg: 'bg-blue-900/40', border: 'border-blue-500/30', accent: 'text-blue-400' },
  { bg: 'bg-indigo-900/40', border: 'border-indigo-500/30', accent: 'text-indigo-400' },
  { bg: 'bg-violet-900/40', border: 'border-violet-500/30', accent: 'text-violet-400' },
  { bg: 'bg-ns-accent/10', border: 'border-ns-accent/40', accent: 'text-ns-accent-light' },
];

const layerDetails = [
  ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
  ['OpenAI', 'Anthropic', 'Gemini', 'Meta Llama', 'Mistral'],
  ['Agentic Negotiation', 'Cost Analysis', 'Quality Vision', 'Predictive Engine'],
  ['Manutenção Preditiva', 'Controle de Qualidade', 'Cotação IA', 'Digital Twin'],
];

export default function SolutionSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [activeLayer, setActiveLayer] = useState(3);

  const layers = [
    { label: t.solution.layers.iaas, tab: t.solution.tabs[3] },
    { label: t.solution.layers.platform, tab: t.solution.tabs[2] },
    { label: t.solution.layers.tools, tab: t.solution.tabs[1] },
    { label: t.solution.layers.apps, tab: t.solution.tabs[0] },
  ];

  return (
    <section id="solution" className="py-24 sm:py-32 lg:py-40 bg-ns-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ns-accent/3 rounded-full blur-[200px]" />

      <div className="relative container-wide">
        <SectionTitle title={t.solution.title} subtitle={t.solution.subtitle} />

        <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {layers.map((layer, i) => (
              <button
                key={i}
                onClick={() => setActiveLayer(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLayer === i
                    ? 'bg-ns-accent text-white shadow-lg shadow-ns-accent/20'
                    : 'bg-ns-panel text-ns-gray border border-ns-border hover:text-ns-accent hover:border-ns-accent/30'
                }`}
              >
                {layer.tab}
              </button>
            ))}
          </div>

          {/* Stacked layers visualization */}
          <div className="space-y-3 mb-10">
            {layers.map((layer, i) => (
              <div
                key={i}
                onClick={() => setActiveLayer(i)}
                className={`
                  w-full px-6 py-5 rounded-xl border cursor-pointer
                  transition-all duration-300 ease-out
                  ${layerColors[i].bg} ${layerColors[i].border}
                  ${activeLayer === i
                    ? 'ring-1 ring-ns-accent/30 shadow-lg'
                    : 'opacity-50 hover:opacity-75'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold tracking-wide ${activeLayer === i ? layerColors[i].accent : 'text-ns-gray'}`}>
                    {layer.label}
                  </p>
                  <span className={`text-[10px] uppercase tracking-widest ${activeLayer === i ? 'text-ns-muted' : 'text-ns-muted/50'}`}>
                    Layer {i + 1}
                  </span>
                </div>
                {activeLayer === i && (
                  <div className="flex flex-wrap gap-2 mt-4 animate-fade-in">
                    {layerDetails[i].map((tag, j) => (
                      <span key={j} className="text-xs px-3 py-1.5 rounded-full bg-ns-accent/10 text-ns-accent-light border border-ns-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="bg-ns-card border border-ns-border rounded-2xl p-8">
            <h3 className="text-lg font-bold text-ns-white mb-4">{layers[activeLayer].label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {layerDetails[activeLayer].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-ns-panel/50 border border-ns-border/50">
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
