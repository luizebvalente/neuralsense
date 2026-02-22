import { Activity, Eye, TrendingUp, Zap, Bot, Layers } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';

const iconMap = { Activity, Eye, TrendingUp, Zap, Bot, Layers };

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad relative overflow-hidden glow-top">
      <div className="container-ns">
        <SectionTitle
          badge="Solutions"
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <StaggerContainer stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {t.services.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Activity;
            return (
              <StaggerItem key={i}>
                <div className="group p-10 sm:p-12 rounded-2xl border border-ns-border bg-ns-card/40 transition-all duration-400 hover:border-ns-border-hover hover:bg-ns-card/70 hover:shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                  <div className="w-14 h-14 rounded-2xl bg-ns-accent-muted flex items-center justify-center mb-8 group-hover:bg-ns-accent/15 transition-colors duration-400">
                    <Icon className="w-6 h-6 text-ns-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ns-white mb-4 font-[Outfit]">{card.title}</h3>
                  <p className="text-sm text-ns-muted leading-[1.8]">{card.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
