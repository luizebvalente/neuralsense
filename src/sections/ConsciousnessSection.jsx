import { ClipboardCheck, Map, GraduationCap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';

const iconMap = { ClipboardCheck, Map, GraduationCap };

export default function ConsciousnessSection() {
  const { t } = useLanguage();

  return (
    <section id="consciousness" className="section-pad relative overflow-hidden">
      <div className="container-ns">
        <SectionTitle title={t.consciousness.title} subtitle={t.consciousness.text} />

        <StaggerContainer stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[1100px] mx-auto">
          {t.consciousness.items.map((item, i) => {
            const Icon = iconMap[item.icon] || ClipboardCheck;
            return (
              <StaggerItem key={i}>
                <div className="text-center p-12 sm:p-14 md:p-16 rounded-3xl border border-ns-border bg-ns-card/40 hover:border-ns-border-hover hover:bg-ns-card/60 transition-all duration-500">
                  <div className="w-18 h-18 w-[72px] h-[72px] rounded-3xl bg-ns-accent-muted flex items-center justify-center mx-auto mb-10">
                    <Icon className="w-8 h-8 text-ns-accent" />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-ns-white mb-5"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-ns-muted leading-[1.85]">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
