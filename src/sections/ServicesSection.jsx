import { Activity, Eye, TrendingUp, Zap, Bot, Layers } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const iconMap = { Activity, Eye, TrendingUp, Zap, Bot, Layers };

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.services.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Activity;
            return (
              <div key={i} className="group p-8 sm:p-10 rounded-2xl border border-ns-border bg-ns-panel/30 transition-all duration-300 hover:border-ns-accent/20 hover:bg-ns-panel/60">
                <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-6 group-hover:bg-ns-accent/15 transition-colors">
                  <Icon className="w-5 h-5 text-ns-accent" />
                </div>
                <h3 className="text-lg font-bold text-ns-white mb-3">{card.title}</h3>
                <p className="text-sm text-ns-muted leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
