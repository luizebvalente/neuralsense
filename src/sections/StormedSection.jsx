import { useState } from 'react';
import { Check, Zap, TrendingDown, BarChart3, ArrowRight, FileSearch, ShieldCheck, GitCompare, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlowCard from '../components/ui/GlowCard';
import Button from '../components/ui/Button';

const moduleIcons = { FileSearch, TrendingDown, ShieldCheck, GitCompare };

export default function StormedSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Dashboard', 'Blueprint AI', 'Cost Analysis'];

  return (
    <section id="stormed" className="py-20 sm:py-28 lg:py-32 bg-ns-black relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-ns-accent/3 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-xs font-bold text-red-400 tracking-wider uppercase">Produto NeuralSense</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white leading-tight mb-4 tracking-tight">
            STORMED<span className="text-ns-accent">.AI</span>
          </h2>
          <p className="text-xl text-ns-accent font-medium mb-4">{t.stormed.subtitle}</p>
          <p className="text-ns-gray leading-relaxed max-w-3xl mx-auto">{t.stormed.text}</p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {t.stormed.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 bg-ns-card border border-ns-border rounded-xl">
              <p className="text-2xl sm:text-3xl font-bold font-heading text-ns-accent">{stat.value}</p>
              <p className="text-[11px] text-ns-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.stormed.modules.map((mod, i) => {
            const Icon = moduleIcons[mod.icon] || FileSearch;
            return (
              <GlowCard key={i} className="p-5">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <h4 className="font-heading text-sm font-bold text-ns-white mb-2 tracking-tight">{mod.title}</h4>
                <p className="text-xs text-ns-gray leading-relaxed">{mod.desc}</p>
              </GlowCard>
            );
          })}
        </div>

        {/* Main content: features + dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: features list */}
          <div>
            <h3 className="font-heading text-xl font-bold text-ns-white mb-6">Funcionalidades Completas</h3>
            <div className="space-y-3 mb-8">
              {t.stormed.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-ns-panel/50 border border-ns-border/30 hover:border-ns-accent/20 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ns-accent/10 border border-ns-accent/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-ns-accent" />
                  </div>
                  <span className="text-sm text-ns-gray">{feature}</span>
                </div>
              ))}
            </div>
            <Button icon={ArrowRight}>{t.stormed.cta}</Button>
          </div>

          {/* Right: interactive dashboard mockup */}
          <div className="relative">
            <div className="absolute inset-0 gradient-accent rounded-2xl blur-2xl opacity-10" />
            <div className="relative bg-ns-card border border-ns-border rounded-2xl overflow-hidden">
              {/* Dashboard tabs */}
              <div className="flex border-b border-ns-border">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 px-4 py-3 text-xs font-medium transition-all ${
                      activeTab === i
                        ? 'text-ns-accent border-b-2 border-ns-accent bg-ns-accent/5'
                        : 'text-ns-muted hover:text-ns-gray'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 space-y-4">
                {activeTab === 0 && (
                  <>
                    {/* KPIs */}
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

                    {/* Cost breakdown */}
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
                          <div key={i}>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-ns-gray">{item.name}</span>
                              <span className="text-green-400 font-medium">{item.saving}</span>
                            </div>
                            <div className="h-1.5 bg-ns-dark rounded-full">
                              <div className="h-full rounded-full gradient-accent" style={{ width: `${item.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI recommendation */}
                    <div className="bg-ns-accent/5 border border-ns-accent/20 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-ns-accent animate-pulse" />
                        <span className="text-[10px] font-bold text-ns-accent uppercase tracking-wider">Recomendação IA</span>
                      </div>
                      <p className="text-xs text-ns-gray">Substituir fornecedor de Aço SAE 1020 por alternativa com custo 12% menor. Economia projetada: R$15.200/mês.</p>
                    </div>
                  </>
                )}

                {activeTab === 1 && (
                  <>
                    {/* Blueprint upload mock */}
                    <div className="border-2 border-dashed border-ns-border rounded-xl p-6 text-center">
                      <Upload className="w-8 h-8 text-ns-muted mx-auto mb-2" />
                      <p className="text-xs text-ns-muted">Upload de Blueprint CAD</p>
                      <p className="text-[10px] text-ns-muted mt-1">.PDF, .DWG, .STEP, .DXF</p>
                    </div>

                    {/* Analyzed blueprint results */}
                    <div className="bg-ns-panel rounded-xl p-4 border border-ns-border/50">
                      <div className="flex items-center gap-2 mb-3">
                        <FileSearch className="w-4 h-4 text-ns-accent" />
                        <span className="text-xs font-bold text-ns-white">Resultado da Análise</span>
                        <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full ml-auto">Concluído</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { label: 'Componentes detectados', value: '24 peças' },
                          { label: 'Material principal', value: 'Aço SAE 4140' },
                          { label: 'Tolerância mais crítica', value: '±0.005mm' },
                          { label: 'Processos identificados', value: 'CNC, Retífica, Têmpera' },
                          { label: 'BOM gerada', value: 'MBOM + BBOM' },
                        ].map((row, i) => (
                          <div key={i} className="flex justify-between items-center py-1.5 border-b border-ns-border/30 last:border-0">
                            <span className="text-[11px] text-ns-muted">{row.label}</span>
                            <span className="text-[11px] text-ns-white font-medium">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* GD&T check */}
                    <div className="bg-ns-panel rounded-xl p-4 border border-ns-border/50">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-xs font-bold text-ns-white">GD&T Compliance — ASME Y14.5-2018</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { check: 'Datum references', status: 'pass' },
                          { check: 'Position tolerances', status: 'pass' },
                          { check: 'Surface finish specs', status: 'pass' },
                          { check: 'Thread callouts', status: 'warn' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            {item.status === 'pass' ? (
                              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                              <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
                            )}
                            <span className="text-[11px] text-ns-gray">{item.check}</span>
                            <span className={`text-[10px] ml-auto font-medium ${item.status === 'pass' ? 'text-green-400' : 'text-yellow-400'}`}>
                              {item.status === 'pass' ? 'PASS' : 'WARN'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 2 && (
                  <>
                    {/* Cost comparison */}
                    <div className="bg-ns-panel rounded-xl p-4 border border-ns-border/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-ns-white">Comparativo de Fornecedores</span>
                        <span className="text-[10px] text-ns-accent">IA recomenda</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: 'Fornecedor A (Atual)', price: 'R$142.50/kg', status: 'current', pct: 100 },
                          { name: 'Fornecedor B', price: 'R$128.30/kg', status: 'better', pct: 90 },
                          { name: 'Fornecedor C (IA Pick)', price: 'R$118.90/kg', status: 'best', pct: 83 },
                        ].map((s, i) => (
                          <div key={i} className={`p-3 rounded-lg border ${s.status === 'best' ? 'border-ns-accent/30 bg-ns-accent/5' : 'border-ns-border/30 bg-ns-dark/50'}`}>
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[11px] text-ns-gray">{s.name}</span>
                              <span className={`text-[11px] font-bold ${s.status === 'best' ? 'text-ns-accent' : s.status === 'better' ? 'text-green-400' : 'text-ns-muted'}`}>{s.price}</span>
                            </div>
                            <div className="h-1.5 bg-ns-dark rounded-full">
                              <div className={`h-full rounded-full ${s.status === 'best' ? 'gradient-accent' : s.status === 'better' ? 'bg-green-500/50' : 'bg-ns-muted/30'}`} style={{ width: `${s.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Commodity tracker */}
                    <div className="bg-ns-panel rounded-xl p-4 border border-ns-border/50">
                      <span className="text-xs font-bold text-ns-white">Commodities em Tempo Real</span>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {[
                          { name: 'Aço HRC', price: '$680/ton', change: '-2.3%', down: true },
                          { name: 'Alumínio LME', price: '$2,410/ton', change: '+1.1%', down: false },
                          { name: 'Cobre', price: '$8,950/ton', change: '-0.8%', down: true },
                          { name: 'Zinco', price: '$2,680/ton', change: '+0.5%', down: false },
                        ].map((c, i) => (
                          <div key={i} className="p-2 rounded-lg bg-ns-dark/50 border border-ns-border/20">
                            <p className="text-[10px] text-ns-muted">{c.name}</p>
                            <p className="text-xs font-bold text-ns-white">{c.price}</p>
                            <p className={`text-[10px] font-medium ${c.down ? 'text-green-400' : 'text-red-400'}`}>{c.change}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Saving projection */}
                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Economia Projetada</span>
                      </div>
                      <p className="text-xs text-ns-gray">Com base nas 3 recomendações ativas, economia projetada de <span className="text-green-400 font-bold">R$47.800/mês</span> nos próximos 90 dias.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
