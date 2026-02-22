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
        <SectionTitle
          title={t.consciousness.title}
          subtitle={t.consciousness.text}
        />

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {t.consciousness.items.map((item, i) => {
            const Icon = iconMap[item.icon] || ClipboardCheck;
            return (
              <StaggerItem key={i}>
                <div className="text-center p-10 sm:p-12 rounded-2xl border border-ns-border bg-ns-card/40 hover:border-ns-border-hover hover:bg-ns-card/60 transition-all duration-400">
                  <div className="w-16 h-16 rounded-2xl bg-ns-accent-muted flex items-center justify-center mx-auto mb-8">
                    <Icon className="w-7 h-7 text-ns-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ns-white mb-4 font-[Outfit]">{item.title}</h3>
                  <p className="text-sm text-ns-muted leading-[1.8]">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
