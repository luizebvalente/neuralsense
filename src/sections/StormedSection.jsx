import { useState } from 'react';
import { Check, Zap, TrendingDown, BarChart3, ArrowRight, FileSearch, ShieldCheck, GitCompare, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const moduleIcons = { FileSearch, TrendingDown, ShieldCheck, GitCompare };
const tabs = ['Dashboard', 'Blueprint AI', 'Cost Analysis'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const staggerCard = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function StormedSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const modulesRef = useRef(null);
  const modulesInView = useInView(modulesRef, { once: true, margin: '-60px' });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' });

  return (
    <section id="stormed" ref={sectionRef} className="py-24 md:py-32 bg-[#000] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeUp(0)}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs tracking-widest text-[#666] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Produto NeuralSense
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            STORMED<span className="text-[#6366f1]">.AI</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-lg text-[#6366f1] font-medium mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.stormed.subtitle}
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#999] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.stormed.text}
          </motion.p>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          {...fadeUp(0.4)}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center gap-12 md:gap-20 mb-16"
        >
          {t.stormed.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm text-[#999] mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Module Cards ── */}
        <div ref={modulesRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {t.stormed.modules.map((mod, i) => {
            const Icon = moduleIcons[mod.icon] || FileSearch;
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={modulesInView ? 'visible' : 'hidden'}
                variants={staggerCard}
                className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h4
                  className="text-sm font-semibold text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {mod.title}
                </h4>
                <p
                  className="text-xs text-[#999] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {mod.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Two-Column: Features + Dashboard ── */}
        <div ref={bottomRef} className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Features + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3
              className="text-xl font-semibold text-white mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Funcionalidades
            </h3>

            <div>
              {t.stormed.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5">
                  <Check className="w-4 h-4 text-[#6366f1] flex-shrink-0" />
                  <span
                    className="text-sm text-[#999]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="mt-8 inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#5558e6] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t.stormed.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl overflow-hidden"
          >
            {/* Tab bar */}
            <div className="flex border-b border-white/[0.06]">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                    activeTab === i
                      ? 'text-[#6366f1] border-b-2 border-[#6366f1]'
                      : 'text-[#666] hover:text-[#999]'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">

              {/* ── Tab 0: Dashboard ── */}
              {activeTab === 0 && (
                <div className="space-y-4">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Custo Reduzido', value: '-23%', icon: TrendingDown, color: 'text-emerald-400' },
                      { label: 'Alertas Hoje', value: '7', icon: Zap, color: 'text-amber-400' },
                      { label: 'ROI Mensal', value: '+R$45k', icon: BarChart3, color: 'text-[#6366f1]' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                        <kpi.icon className={`w-4 h-4 ${kpi.color} mb-2`} />
                        <p
                          className={`text-lg font-bold ${kpi.color}`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {kpi.value}
                        </p>
                        <p
                          className="text-[11px] text-[#666] mt-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {kpi.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Cost Breakdown Chart */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-semibold text-[#999]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Custo por Componente
                      </span>
                      <span
                        className="text-[11px] text-[#666]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        30 dias
                      </span>
                    </div>
                    {[
                      { name: 'Aco SAE 1020', pct: 82, saving: '-12%' },
                      { name: 'Aluminio 6061', pct: 65, saving: '-8%' },
                      { name: 'Processo CNC', pct: 45, saving: '-18%' },
                    ].map((item, i) => (
                      <div key={i} className="mb-3 last:mb-0">
                        <div className="flex justify-between mb-1.5">
                          <span
                            className="text-xs text-[#999]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.name}
                          </span>
                          <span
                            className="text-xs text-emerald-400 font-semibold"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.saving}
                          </span>
                        </div>
                        <div className="h-1.5 bg-[#111] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#6366f1]/50"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Tab 1: Blueprint AI ── */}
              {activeTab === 1 && (
                <div className="space-y-4">
                  {/* Upload Zone */}
                  <div className="border-2 border-dashed border-white/[0.06] rounded-xl p-8 text-center">
                    <Upload className="w-8 h-8 text-[#666] mx-auto mb-3" />
                    <p
                      className="text-sm text-[#666] font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Upload CAD Blueprint
                    </p>
                    <p
                      className="text-[11px] text-[#666] mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      .PDF, .DWG, .STEP
                    </p>
                  </div>

                  {/* Analysis Card */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-center gap-2 mb-4">
                      <FileSearch className="w-4 h-4 text-[#6366f1]" />
                      <span
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Analise
                      </span>
                      <span className="text-[11px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full ml-auto font-medium">
                        OK
                      </span>
                    </div>
                    {[
                      { label: 'Componentes', value: '24 pecas' },
                      { label: 'Material', value: 'Aco SAE 4140' },
                      { label: 'Tolerancia', value: '+-0.005mm' },
                      { label: 'BOM', value: 'MBOM + BBOM' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between py-2.5 border-b border-white/[0.04] last:border-0">
                        <span
                          className="text-xs text-[#666]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.label}
                        </span>
                        <span
                          className="text-xs text-white font-semibold"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* GD&T Compliance Card */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        GD&T — ASME Y14.5
                      </span>
                    </div>
                    {[
                      { check: 'Datum references', ok: true },
                      { check: 'Position tolerances', ok: true },
                      { check: 'Surface finish', ok: true },
                      { check: 'Thread callouts', ok: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 py-2">
                        {item.ok
                          ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          : <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        }
                        <span
                          className="text-xs text-[#999] flex-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.check}
                        </span>
                        <span
                          className={`text-[11px] font-bold ${item.ok ? 'text-emerald-400' : 'text-amber-400'}`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.ok ? 'OK' : 'WARN'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Tab 2: Cost Analysis ── */}
              {activeTab === 2 && (
                <div className="space-y-4">
                  {/* Supplier Comparison */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                    <span
                      className="text-xs font-semibold text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Fornecedores
                    </span>
                    <div className="space-y-2.5 mt-4">
                      {[
                        { name: 'Fornecedor A (Atual)', price: 'R$142.50/kg', best: false },
                        { name: 'Fornecedor B', price: 'R$128.30/kg', best: false },
                        { name: 'Fornecedor C (IA)', price: 'R$118.90/kg', best: true },
                      ].map((s, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-xl border ${
                            s.best
                              ? 'border-[#6366f1]/30 bg-[#6366f1]/5'
                              : 'border-white/[0.04]'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span
                              className="text-xs text-[#999]"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {s.name}
                            </span>
                            <span
                              className={`text-xs font-bold ${s.best ? 'text-[#6366f1]' : 'text-[#666]'}`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {s.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commodity Prices */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                    <span
                      className="text-xs font-semibold text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Commodities
                    </span>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {[
                        { name: 'Aco HRC', price: '$680/ton', change: '-2.3%', down: true },
                        { name: 'Aluminio', price: '$2,410/ton', change: '+1.1%', down: false },
                        { name: 'Cobre', price: '$8,950/ton', change: '-0.8%', down: true },
                        { name: 'Zinco', price: '$2,680/ton', change: '+0.5%', down: false },
                      ].map((c, i) => (
                        <div key={i} className="p-3 rounded-xl border border-white/[0.04]">
                          <p
                            className="text-[11px] text-[#666]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {c.name}
                          </p>
                          <p
                            className="text-xs font-bold text-white mt-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {c.price}
                          </p>
                          <p
                            className={`text-[11px] font-semibold mt-1 ${c.down ? 'text-emerald-400' : 'text-amber-400'}`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {c.change}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
