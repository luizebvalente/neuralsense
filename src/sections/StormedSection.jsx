import { useState } from 'react';
import { Check, Zap, TrendingDown, BarChart3, ArrowRight, FileSearch, ShieldCheck, GitCompare, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/ui/Button';

const moduleIcons = { FileSearch, TrendingDown, ShieldCheck, GitCompare };

export default function StormedSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Dashboard', 'Blueprint AI', 'Cost Analysis'];

  return (
    <section id="stormed" className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ns-border bg-ns-panel/50 mb-8">
            <Zap className="w-3.5 h-3.5 text-ns-accent" />
            <span className="text-xs font-medium text-ns-muted tracking-wider uppercase">Produto NeuralSense</span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-bold text-ns-white leading-[1.1] tracking-tight mb-5">
            STORMED<span className="text-ns-accent">.AI</span>
          </h2>
          <p className="text-lg text-ns-accent font-medium mb-4">{t.stormed.subtitle}</p>
          <p className="text-base text-ns-gray leading-relaxed max-w-[600px] mx-auto">{t.stormed.text}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-md mx-auto">
          {t.stormed.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-ns-white">{stat.value}</p>
              <p className="text-xs text-ns-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {t.stormed.modules.map((mod, i) => {
            const Icon = moduleIcons[mod.icon] || FileSearch;
            return (
              <div key={i} className="p-8 rounded-2xl border border-ns-border bg-ns-panel/30">
                <div className="w-10 h-10 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-ns-accent" />
                </div>
                <h4 className="text-sm font-bold text-ns-white mb-2">{mod.title}</h4>
                <p className="text-xs text-ns-muted leading-relaxed">{mod.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Features + Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-ns-white mb-8">Funcionalidades</h3>
            <div className="space-y-3 mb-10">
              {t.stormed.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-xl border border-ns-border/50 bg-ns-panel/20">
                  <Check className="w-4 h-4 text-ns-accent flex-shrink-0" />
                  <span className="text-sm text-ns-gray">{feature}</span>
                </div>
              ))}
            </div>
            <Button icon={ArrowRight}>{t.stormed.cta}</Button>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-2xl border border-ns-border bg-ns-panel/40 overflow-hidden">
            <div className="flex border-b border-ns-border">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-4 py-3.5 text-xs font-medium transition-all ${
                    activeTab === i
                      ? 'text-ns-accent border-b-2 border-ns-accent bg-ns-accent/5'
                      : 'text-ns-muted hover:text-ns-gray'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-4">
              {activeTab === 0 && (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Custo Reduzido', value: '-23%', icon: TrendingDown, color: 'text-green-400' },
                      { label: 'Alertas Hoje', value: '7', icon: Zap, color: 'text-amber-400' },
                      { label: 'ROI Mensal', value: '+R$45k', icon: BarChart3, color: 'text-ns-accent' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-ns-black/40 rounded-xl p-4 border border-ns-border/50">
                        <kpi.icon className={`w-4 h-4 ${kpi.color} mb-2`} />
                        <p className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</p>
                        <p className="text-[10px] text-ns-muted mt-1">{kpi.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-ns-black/40 rounded-xl p-5 border border-ns-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-ns-gray">Custo por Componente</span>
                      <span className="text-[10px] text-ns-muted">30 dias</span>
                    </div>
                    {[
                      { name: 'Aço SAE 1020', pct: 82, saving: '-12%' },
                      { name: 'Alumínio 6061', pct: 65, saving: '-8%' },
                      { name: 'Processo CNC', pct: 45, saving: '-18%' },
                    ].map((item, i) => (
                      <div key={i} className="mb-3 last:mb-0">
                        <div className="flex justify-between text-[11px] mb-1.5">
                          <span className="text-ns-gray">{item.name}</span>
                          <span className="text-green-400 font-medium">{item.saving}</span>
                        </div>
                        <div className="h-1.5 bg-ns-black rounded-full">
                          <div className="h-full rounded-full bg-ns-accent/60" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <div className="border border-dashed border-ns-border rounded-xl p-8 text-center">
                    <Upload className="w-8 h-8 text-ns-muted mx-auto mb-3" />
                    <p className="text-xs text-ns-muted">Upload CAD Blueprint</p>
                    <p className="text-[10px] text-ns-muted/60 mt-1">.PDF, .DWG, .STEP</p>
                  </div>

                  <div className="bg-ns-black/40 rounded-xl p-5 border border-ns-border/50">
                    <div className="flex items-center gap-2 mb-4">
                      <FileSearch className="w-4 h-4 text-ns-accent" />
                      <span className="text-xs font-bold text-ns-white">Análise</span>
                      <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full ml-auto">OK</span>
                    </div>
                    {[
                      { label: 'Componentes', value: '24 peças' },
                      { label: 'Material', value: 'Aço SAE 4140' },
                      { label: 'Tolerância', value: '±0.005mm' },
                      { label: 'BOM', value: 'MBOM + BBOM' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-ns-border/20 last:border-0">
                        <span className="text-[11px] text-ns-muted">{row.label}</span>
                        <span className="text-[11px] text-ns-white font-medium">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-ns-black/40 rounded-xl p-5 border border-ns-border/50">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-green-400" />
                      <span className="text-xs font-bold text-ns-white">GD&T — ASME Y14.5</span>
                    </div>
                    {[
                      { check: 'Datum references', ok: true },
                      { check: 'Position tolerances', ok: true },
                      { check: 'Surface finish', ok: true },
                      { check: 'Thread callouts', ok: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 py-1">
                        {item.ok ? <CheckCircle className="w-3.5 h-3.5 text-green-400" /> : <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />}
                        <span className="text-[11px] text-ns-gray flex-1">{item.check}</span>
                        <span className={`text-[10px] font-medium ${item.ok ? 'text-green-400' : 'text-yellow-400'}`}>{item.ok ? 'OK' : 'WARN'}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <div className="bg-ns-black/40 rounded-xl p-5 border border-ns-border/50">
                    <span className="text-xs font-bold text-ns-white">Fornecedores</span>
                    <div className="space-y-3 mt-4">
                      {[
                        { name: 'Fornecedor A (Atual)', price: 'R$142.50/kg', best: false },
                        { name: 'Fornecedor B', price: 'R$128.30/kg', best: false },
                        { name: 'Fornecedor C (IA)', price: 'R$118.90/kg', best: true },
                      ].map((s, i) => (
                        <div key={i} className={`p-3 rounded-xl border ${s.best ? 'border-ns-accent/30 bg-ns-accent/5' : 'border-ns-border/30'}`}>
                          <div className="flex justify-between">
                            <span className="text-[11px] text-ns-gray">{s.name}</span>
                            <span className={`text-[11px] font-bold ${s.best ? 'text-ns-accent' : 'text-ns-muted'}`}>{s.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-ns-black/40 rounded-xl p-5 border border-ns-border/50">
                    <span className="text-xs font-bold text-ns-white">Commodities</span>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {[
                        { name: 'Aço HRC', price: '$680/ton', change: '-2.3%', down: true },
                        { name: 'Alumínio', price: '$2,410/ton', change: '+1.1%', down: false },
                        { name: 'Cobre', price: '$8,950/ton', change: '-0.8%', down: true },
                        { name: 'Zinco', price: '$2,680/ton', change: '+0.5%', down: false },
                      ].map((c, i) => (
                        <div key={i} className="p-3 rounded-xl border border-ns-border/20">
                          <p className="text-[10px] text-ns-muted">{c.name}</p>
                          <p className="text-xs font-bold text-ns-white">{c.price}</p>
                          <p className={`text-[10px] font-medium ${c.down ? 'text-green-400' : 'text-red-400'}`}>{c.change}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
