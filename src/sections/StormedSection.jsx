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
        <FadeIn className="text-center mb-20 sm:mb-28 md:mb-32 lg:mb-40">
          <div className="mb-10">
            <span className="badge-ns">
              <Zap className="w-3.5 h-3.5 text-ns-warm" />
              <span>Produto NeuralSense</span>
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-ns-white leading-[1.05] tracking-tight mb-8 sm:mb-10"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            STORMED<span className="text-ns-accent">.AI</span>
          </h2>
          <p className="text-lg sm:text-xl text-ns-accent font-semibold mb-6">{t.stormed.subtitle}</p>
          <p className="text-base sm:text-lg md:text-xl text-ns-gray leading-[1.8] max-w-[660px] mx-auto">{t.stormed.text}</p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1} className="flex justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-36 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
          {t.stormed.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-ns-white tracking-tight"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-ns-muted mt-3">{stat.label}</p>
            </div>
          ))}
        </FadeIn>

        {/* Modules */}
        <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
          {t.stormed.modules.map((mod, i) => {
            const Icon = moduleIcons[mod.icon] || FileSearch;
            return (
              <StaggerItem key={i}>
                <div className="p-10 sm:p-12 rounded-3xl border border-ns-border bg-ns-card/40 hover:border-ns-border-hover transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-ns-accent-muted flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6 text-ns-accent" />
                  </div>
                  <h4
                    className="text-lg font-bold text-ns-white mb-4"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {mod.title}
                  </h4>
                  <p className="text-sm text-ns-muted leading-[1.85]">{mod.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Features + Dashboard — two columns */}
        <FadeIn className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Features */}
          <div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-ns-white mb-12"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Funcionalidades
            </h3>
            <div className="space-y-4 mb-14">
              {t.stormed.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-5 py-4 px-6 rounded-2xl border border-ns-border/40 bg-ns-card/30 hover:border-ns-border-hover transition-colors duration-300">
                  <Check className="w-5 h-5 text-ns-accent flex-shrink-0" />
                  <span className="text-base text-ns-gray">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg" icon={ArrowRight}>{t.stormed.cta}</Button>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-3xl border border-ns-border bg-ns-card/50 overflow-hidden">
            <div className="flex border-b border-ns-border">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-5 py-5 text-sm font-semibold transition-all duration-300 ${
                    activeTab === i
                      ? 'text-ns-accent border-b-2 border-ns-accent bg-ns-accent/5'
                      : 'text-ns-muted hover:text-ns-gray'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              {activeTab === 0 && (
                <>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Custo Reduzido', value: '-23%', icon: TrendingDown, color: 'text-emerald-400' },
                      { label: 'Alertas Hoje', value: '7', icon: Zap, color: 'text-ns-warm' },
                      { label: 'ROI Mensal', value: '+R$45k', icon: BarChart3, color: 'text-ns-accent' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-ns-black/60 rounded-2xl p-5 border border-ns-border/30">
                        <kpi.icon className={`w-5 h-5 ${kpi.color} mb-3`} />
                        <p className={`text-xl font-bold ${kpi.color}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>{kpi.value}</p>
                        <p className="text-xs text-ns-muted mt-2">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-ns-black/60 rounded-2xl p-7 border border-ns-border/30">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-semibold text-ns-gray">Custo por Componente</span>
                      <span className="text-xs text-ns-muted">30 dias</span>
                    </div>
                    {[
                      { name: 'Aço SAE 1020', pct: 82, saving: '-12%' },
                      { name: 'Alumínio 6061', pct: 65, saving: '-8%' },
                      { name: 'Processo CNC', pct: 45, saving: '-18%' },
                    ].map((item, i) => (
                      <div key={i} className="mb-5 last:mb-0">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-ns-gray">{item.name}</span>
                          <span className="text-emerald-400 font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.saving}</span>
                        </div>
                        <div className="h-2 bg-ns-black rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-ns-accent/50" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <div className="border-2 border-dashed border-ns-border rounded-2xl p-12 text-center">
                    <Upload className="w-10 h-10 text-ns-muted mx-auto mb-4" />
                    <p className="text-sm text-ns-muted font-medium">Upload CAD Blueprint</p>
                    <p className="text-xs text-ns-subtle mt-2">.PDF, .DWG, .STEP</p>
                  </div>
                  <div className="bg-ns-black/60 rounded-2xl p-7 border border-ns-border/30">
                    <div className="flex items-center gap-3 mb-6">
                      <FileSearch className="w-5 h-5 text-ns-accent" />
                      <span className="text-sm font-bold text-ns-white">Análise</span>
                      <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full ml-auto font-semibold">OK</span>
                    </div>
                    {[
                      { label: 'Componentes', value: '24 peças' },
                      { label: 'Material', value: 'Aço SAE 4140' },
                      { label: 'Tolerância', value: '±0.005mm' },
                      { label: 'BOM', value: 'MBOM + BBOM' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between py-3.5 border-b border-ns-border/20 last:border-0">
                        <span className="text-sm text-ns-muted">{row.label}</span>
                        <span className="text-sm text-ns-white font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-ns-black/60 rounded-2xl p-7 border border-ns-border/30">
                    <div className="flex items-center gap-3 mb-5">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-ns-white">GD&T — ASME Y14.5</span>
                    </div>
                    {[
                      { check: 'Datum references', ok: true },
                      { check: 'Position tolerances', ok: true },
                      { check: 'Surface finish', ok: true },
                      { check: 'Thread callouts', ok: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 py-2.5">
                        {item.ok ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-ns-warm" />}
                        <span className="text-sm text-ns-gray flex-1">{item.check}</span>
                        <span className={`text-xs font-bold ${item.ok ? 'text-emerald-400' : 'text-ns-warm'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {item.ok ? 'OK' : 'WARN'}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <div className="bg-ns-black/60 rounded-2xl p-7 border border-ns-border/30">
                    <span className="text-sm font-bold text-ns-white">Fornecedores</span>
                    <div className="space-y-4 mt-6">
                      {[
                        { name: 'Fornecedor A (Atual)', price: 'R$142.50/kg', best: false },
                        { name: 'Fornecedor B', price: 'R$128.30/kg', best: false },
                        { name: 'Fornecedor C (IA)', price: 'R$118.90/kg', best: true },
                      ].map((s, i) => (
                        <div key={i} className={`p-5 rounded-2xl border ${s.best ? 'border-ns-accent/30 bg-ns-accent/5' : 'border-ns-border/20'}`}>
                          <div className="flex justify-between">
                            <span className="text-sm text-ns-gray">{s.name}</span>
                            <span className={`text-sm font-bold ${s.best ? 'text-ns-accent' : 'text-ns-muted'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-ns-black/60 rounded-2xl p-7 border border-ns-border/30">
                    <span className="text-sm font-bold text-ns-white">Commodities</span>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                      {[
                        { name: 'Aço HRC', price: '$680/ton', change: '-2.3%', down: true },
                        { name: 'Alumínio', price: '$2,410/ton', change: '+1.1%', down: false },
                        { name: 'Cobre', price: '$8,950/ton', change: '-0.8%', down: true },
                        { name: 'Zinco', price: '$2,680/ton', change: '+0.5%', down: false },
                      ].map((c, i) => (
                        <div key={i} className="p-5 rounded-2xl border border-ns-border/20">
                          <p className="text-xs text-ns-muted">{c.name}</p>
                          <p className="text-sm font-bold text-ns-white mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{c.price}</p>
                          <p className={`text-xs font-semibold mt-1 ${c.down ? 'text-emerald-400' : 'text-red-400'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>{c.change}</p>
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
