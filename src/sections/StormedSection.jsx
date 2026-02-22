import { useState } from 'react';
import { Check, Zap, TrendingDown, BarChart3, ArrowRight, FileSearch, ShieldCheck, GitCompare, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import FadeIn, { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import Button from '../components/ui/Button';

const moduleIcons = { FileSearch, TrendingDown, ShieldCheck, GitCompare };

export default function StormedSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Dashboard', 'Blueprint AI', 'Cost Analysis'];

  return (
    <section id="stormed" className="section-pad relative overflow-hidden glow-top">
      <div className="container-ns">
        {/* Header */}
        <FadeIn className="text-center mb-16 sm:mb-20 lg:mb-28">
          <div className="mb-8">
            <span className="badge-ns">
              <Zap className="w-3.5 h-3.5 text-ns-warm" />
              <span>Produto NeuralSense</span>
            </span>
          </div>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold text-ns-white leading-[1.08] tracking-tight mb-6">
            STORMED<span className="text-ns-accent">.AI</span>
          </h2>
          <p className="text-lg text-ns-accent font-semibold mb-5">{t.stormed.subtitle}</p>
          <p className="text-base text-ns-gray leading-[1.8] max-w-[640px] mx-auto">{t.stormed.text}</p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1} className="flex justify-center gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-20 lg:mb-24">
          {t.stormed.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ns-white font-[JetBrains_Mono]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-ns-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </FadeIn>

        {/* Modules */}
        <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20 lg:mb-24 max-w-[1100px] mx-auto">
          {t.stormed.modules.map((mod, i) => {
            const Icon = moduleIcons[mod.icon] || FileSearch;
            return (
              <StaggerItem key={i}>
                <div className="p-8 sm:p-10 rounded-2xl border border-ns-border bg-ns-card/40 hover:border-ns-border-hover transition-all duration-400">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent-muted flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-ns-accent" />
                  </div>
                  <h4 className="text-sm font-bold text-ns-white mb-3 font-[Outfit]">{mod.title}</h4>
                  <p className="text-xs text-ns-muted leading-[1.8]">{mod.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Features + Dashboard */}
        <FadeIn className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-[1100px] mx-auto items-start">
          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-ns-white mb-10 font-[Outfit]">Funcionalidades</h3>
            <div className="space-y-3 mb-12">
              {t.stormed.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5 px-5 rounded-xl border border-ns-border/40 bg-ns-card/30 hover:border-ns-border-hover transition-colors duration-300">
                  <Check className="w-4 h-4 text-ns-accent flex-shrink-0" />
                  <span className="text-sm text-ns-gray">{feature}</span>
                </div>
              ))}
            </div>
            <Button icon={ArrowRight}>{t.stormed.cta}</Button>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-2xl border border-ns-border bg-ns-card/50 overflow-hidden">
            <div className="flex border-b border-ns-border">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-4 py-4 text-xs font-semibold transition-all duration-300 ${
                    activeTab === i
                      ? 'text-ns-accent border-b-2 border-ns-accent bg-ns-accent/5'
                      : 'text-ns-muted hover:text-ns-gray'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              {activeTab === 0 && (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Custo Reduzido', value: '-23%', icon: TrendingDown, color: 'text-emerald-400' },
                      { label: 'Alertas Hoje', value: '7', icon: Zap, color: 'text-ns-warm' },
                      { label: 'ROI Mensal', value: '+R$45k', icon: BarChart3, color: 'text-ns-accent' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-ns-black/50 rounded-xl p-4 border border-ns-border/30">
                        <kpi.icon className={`w-4 h-4 ${kpi.color} mb-2`} />
                        <p className={`text-lg font-bold font-[JetBrains_Mono] ${kpi.color}`}>{kpi.value}</p>
                        <p className="text-[10px] text-ns-muted mt-1">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-ns-black/50 rounded-xl p-6 border border-ns-border/30">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold text-ns-gray">Custo por Componente</span>
                      <span className="text-[10px] text-ns-muted">30 dias</span>
                    </div>
                    {[
                      { name: 'Aço SAE 1020', pct: 82, saving: '-12%' },
                      { name: 'Alumínio 6061', pct: 65, saving: '-8%' },
                      { name: 'Processo CNC', pct: 45, saving: '-18%' },
                    ].map((item, i) => (
                      <div key={i} className="mb-4 last:mb-0">
                        <div className="flex justify-between text-[11px] mb-2">
                          <span className="text-ns-gray">{item.name}</span>
                          <span className="text-emerald-400 font-semibold font-[JetBrains_Mono]">{item.saving}</span>
                        </div>
                        <div className="h-1.5 bg-ns-black rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-ns-accent/50" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <div className="border border-dashed border-ns-border rounded-xl p-10 text-center">
                    <Upload className="w-8 h-8 text-ns-muted mx-auto mb-3" />
                    <p className="text-xs text-ns-muted font-medium">Upload CAD Blueprint</p>
                    <p className="text-[10px] text-ns-subtle mt-1">.PDF, .DWG, .STEP</p>
                  </div>
                  <div className="bg-ns-black/50 rounded-xl p-6 border border-ns-border/30">
                    <div className="flex items-center gap-2 mb-5">
                      <FileSearch className="w-4 h-4 text-ns-accent" />
                      <span className="text-xs font-bold text-ns-white">Análise</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full ml-auto font-semibold">OK</span>
                    </div>
                    {[
                      { label: 'Componentes', value: '24 peças' },
                      { label: 'Material', value: 'Aço SAE 4140' },
                      { label: 'Tolerância', value: '±0.005mm' },
                      { label: 'BOM', value: 'MBOM + BBOM' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between py-2.5 border-b border-ns-border/20 last:border-0">
                        <span className="text-[11px] text-ns-muted">{row.label}</span>
                        <span className="text-[11px] text-ns-white font-semibold font-[JetBrains_Mono]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-ns-black/50 rounded-xl p-6 border border-ns-border/30">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-ns-white">GD&T — ASME Y14.5</span>
                    </div>
                    {[
                      { check: 'Datum references', ok: true },
                      { check: 'Position tolerances', ok: true },
                      { check: 'Surface finish', ok: true },
                      { check: 'Thread callouts', ok: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 py-1.5">
                        {item.ok ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <AlertTriangle className="w-3.5 h-3.5 text-ns-warm" />}
                        <span className="text-[11px] text-ns-gray flex-1">{item.check}</span>
                        <span className={`text-[10px] font-semibold font-[JetBrains_Mono] ${item.ok ? 'text-emerald-400' : 'text-ns-warm'}`}>
                          {item.ok ? 'OK' : 'WARN'}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <div className="bg-ns-black/50 rounded-xl p-6 border border-ns-border/30">
                    <span className="text-xs font-bold text-ns-white">Fornecedores</span>
                    <div className="space-y-3 mt-5">
                      {[
                        { name: 'Fornecedor A (Atual)', price: 'R$142.50/kg', best: false },
                        { name: 'Fornecedor B', price: 'R$128.30/kg', best: false },
                        { name: 'Fornecedor C (IA)', price: 'R$118.90/kg', best: true },
                      ].map((s, i) => (
                        <div key={i} className={`p-4 rounded-xl border ${s.best ? 'border-ns-accent/30 bg-ns-accent/5' : 'border-ns-border/20'}`}>
                          <div className="flex justify-between">
                            <span className="text-[11px] text-ns-gray">{s.name}</span>
                            <span className={`text-[11px] font-bold font-[JetBrains_Mono] ${s.best ? 'text-ns-accent' : 'text-ns-muted'}`}>{s.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-ns-black/50 rounded-xl p-6 border border-ns-border/30">
                    <span className="text-xs font-bold text-ns-white">Commodities</span>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {[
                        { name: 'Aço HRC', price: '$680/ton', change: '-2.3%', down: true },
                        { name: 'Alumínio', price: '$2,410/ton', change: '+1.1%', down: false },
                        { name: 'Cobre', price: '$8,950/ton', change: '-0.8%', down: true },
                        { name: 'Zinco', price: '$2,680/ton', change: '+0.5%', down: false },
                      ].map((c, i) => (
                        <div key={i} className="p-4 rounded-xl border border-ns-border/20">
                          <p className="text-[10px] text-ns-muted">{c.name}</p>
                          <p className="text-xs font-bold text-ns-white font-[JetBrains_Mono] mt-1">{c.price}</p>
                          <p className={`text-[10px] font-semibold font-[JetBrains_Mono] mt-0.5 ${c.down ? 'text-emerald-400' : 'text-red-400'}`}>{c.change}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
