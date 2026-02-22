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

        <StaggerContainer stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {t.services.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Activity;
            return (
              <StaggerItem key={i}>
                <div className="group p-10 sm:p-12 md:p-14 rounded-3xl border border-ns-border bg-ns-card/40 transition-all duration-500 hover:border-ns-border-hover hover:bg-ns-card/70 hover:shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
                  <div className="w-16 h-16 rounded-2xl bg-ns-accent-muted flex items-center justify-center mb-10 group-hover:bg-ns-accent/15 transition-colors duration-400">
                    <Icon className="w-7 h-7 text-ns-accent" />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-ns-white mb-5"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-base text-ns-muted leading-[1.85]">{card.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
