import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const layerColors = [
  { bg: 'from-blue-900/60 to-blue-800/40', border: 'border-blue-500/30', glow: 'shadow-blue-500/10' },
  { bg: 'from-cyan-900/60 to-cyan-800/40', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/10' },
  { bg: 'from-sky-900/60 to-sky-800/40', border: 'border-sky-500/30', glow: 'shadow-sky-500/10' },
  { bg: 'from-ns-accent/20 to-ns-accent/10', border: 'border-ns-accent/40', glow: 'shadow-ns-accent/20' },
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
    <section id="solution" className="py-24 bg-ns-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ns-accent/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.solution.title} subtitle={t.solution.subtitle} />

        <div ref={ref} className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex-1" style={{ perspective: '1000px' }}>
            <div className="relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(25deg) rotateZ(-5deg)' }}>
              {layers.map((layer, i) => (
                <div
                  key={i}
                  onClick={() => setActiveLayer(i)}
                  className={`
                    relative w-full max-w-md mx-auto mb-3 px-6 py-5 rounded-xl border cursor-pointer
                    transition-all duration-500 ease-out
                    bg-gradient-to-r ${layerColors[i].bg} ${layerColors[i].border}
                    ${activeLayer === i
                      ? `scale-105 shadow-2xl ${layerColors[i].glow} border-opacity-100 -translate-y-1`
                      : 'opacity-60 hover:opacity-80 hover:scale-[1.02]'
                    }
                  `}
                  style={{
                    transform: `translateZ(${i * 15}px) ${activeLayer === i ? 'translateY(-8px) scale(1.05)' : ''}`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <p className={`text-sm font-heading font-bold tracking-wider ${activeLayer === i ? 'text-ns-accent' : 'text-ns-gray'}`}>
                    {layer.label}
                  </p>
                  {activeLayer === i && (
                    <div className="flex flex-wrap gap-2 mt-3 animate-fade-in">
                      {layerDetails[i].map((tag, j) => (
                        <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-ns-accent/10 text-ns-accent-light border border-ns-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap gap-2">
              {layers.map((layer, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLayer(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeLayer === i
                      ? 'bg-ns-accent text-white shadow-lg shadow-ns-accent/20'
                      : 'bg-ns-panel text-ns-gray border border-ns-border hover:text-ns-accent hover:border-ns-accent/30'
                  }`}
                >
                  {layer.tab}
                </button>
              ))}
            </div>

            <div className="bg-ns-card border border-ns-border rounded-2xl p-6 min-h-[200px]">
              <h3 className="font-heading text-lg font-bold text-ns-white mb-3">{layers[activeLayer].label}</h3>
              <div className="space-y-2">
                {layerDetails[activeLayer].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-ns-panel/50 border border-ns-border/50">
                    <div className="w-2 h-2 rounded-full bg-ns-accent" />
                    <span className="text-sm text-ns-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
