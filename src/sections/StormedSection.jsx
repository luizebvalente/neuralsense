import { useState } from 'react';
import { Check, Zap, TrendingDown, BarChart3, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function StormedSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="stormed" className="py-24 bg-ns-black relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-ns-accent/3 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Zap className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-400 tracking-wider uppercase">Produto NeuralSense</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white leading-tight mb-4 tracking-tight">
              STORMED<span className="text-ns-accent">.AI</span>
            </h2>
            <p className="text-xl text-ns-accent font-medium mb-4">{t.stormed.subtitle}</p>
            <p className="text-ns-gray leading-relaxed mb-8">{t.stormed.text}</p>

            <div className="space-y-3 mb-8">
              {t.stormed.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-ns-accent/10 border border-ns-accent/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-ns-accent" />
                  </div>
                  <span className="text-sm text-ns-gray">{feature}</span>
                </div>
              ))}
            </div>

            <Button icon={ArrowRight}>{t.stormed.cta}</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-accent rounded-2xl blur-2xl opacity-10" />
            <div className="relative bg-ns-card border border-ns-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-400" />
                  <span className="font-heading text-sm font-bold text-ns-white tracking-wider">STORMED.AI</span>
                </div>
                <span className="text-xs text-ns-accent bg-ns-accent/10 px-2.5 py-1 rounded-full">Live</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Custo Reduzido', value: '-23%', icon: TrendingDown, color: 'text-green-400' },
                  { label: 'Alertas Hoje', value: '7', icon: Zap, color: 'text-red-400' },
                  { label: 'ROI Mensal', value: '+R$45k', icon: BarChart3, color: 'text-ns-accent' },
                ].map((kpi, i) => (
                  <div key={i} className="bg-ns-panel rounded-xl p-3 border border-ns-border/50">
                    <kpi.icon className={`w-4 h-4 ${kpi.color} mb-1.5`} />
                    <p className={`text-xl font-bold font-heading ${kpi.color}`}>{kpi.value}</p>
                    <p className="text-[10px] text-ns-muted mt-0.5">{kpi.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-ns-panel rounded-xl p-4 border border-ns-border/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-ns-gray">Análise de Custo por Componente</span>
                  <span className="text-[10px] text-ns-muted">Últimos 30 dias</span>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Aço Carbono SAE 1020', pct: 82, saving: '-12%' },
                    { name: 'Alumínio 6061-T6', pct: 65, saving: '-8%' },
                    { name: 'Processo CNC', pct: 45, saving: '-18%' },
                    { name: 'Tratamento Térmico', pct: 30, saving: '-5%' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-ns-gray">{item.name}</span>
                          <span className="text-green-400 font-medium">{item.saving}</span>
                        </div>
                        <div className="h-1.5 bg-ns-dark rounded-full">
                          <div className="h-full rounded-full gradient-accent" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-ns-accent/5 border border-ns-accent/20 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-ns-accent animate-pulse" />
                  <span className="text-[10px] font-bold text-ns-accent uppercase tracking-wider">Recomendação IA</span>
                </div>
                <p className="text-xs text-ns-gray">Substituir fornecedor de Aço SAE 1020 por alternativa com custo 12% menor. Economia projetada: R$15.200/mês.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
