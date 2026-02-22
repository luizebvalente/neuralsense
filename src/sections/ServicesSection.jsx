import { Activity, Eye, TrendingUp, Zap, Bot, Layers } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import GlowCard from '../components/ui/GlowCard';

const iconMap = { Activity, Eye, TrendingUp, Zap, Bot, Layers };

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-ns-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative container-wide">
        <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.services.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Activity;
            return (
              <GlowCard key={i} className="p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-ns-accent/10 border border-ns-accent/20 flex items-center justify-center mb-6 group-hover:bg-ns-accent/20 group-hover:border-ns-accent/40 transition-all">
                  <Icon className="w-6 h-6 text-ns-accent" />
                </div>
                <h3 className="text-lg font-bold text-ns-white mb-3 tracking-tight">{card.title}</h3>
                <p className="text-sm text-ns-gray leading-relaxed">{card.desc}</p>
                <div className="mt-6 pt-5 border-t border-ns-border/50">
                  <span className="text-xs font-medium text-ns-accent cursor-pointer hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
