import { Shield, Cpu, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import FadeIn, { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';

export default function AboutSection() {
  const { t } = useLanguage();
  const icons = [Shield, Cpu, Target];

  return (
    <section id="about" className="section-pad relative overflow-hidden glow-top">
      <div className="container-ns">
        <div className="max-w-[1100px] mx-auto">
          {/* Title */}
          <FadeIn className="text-center mb-16 sm:mb-20 lg:mb-28">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold text-ns-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg text-ns-gray max-w-[620px] mx-auto leading-[1.8]">{t.about.text}</p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.1} className="flex justify-center gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-20 lg:mb-24">
            {[
              { value: '15+', label: 'Anos de Experiência' },
              { value: '200+', label: 'Profissionais' },
              { value: '98%', label: 'Satisfação' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ns-white font-[JetBrains_Mono]">{stat.value}</p>
                <p className="text-xs sm:text-sm text-ns-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </FadeIn>

          {/* Values */}
          <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.about.values.map((value, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={i}>
                  <div className="text-center p-10 sm:p-12 rounded-2xl border border-ns-border bg-ns-card/40 hover:border-ns-border-hover transition-all duration-400">
                    <div className="w-14 h-14 rounded-2xl bg-ns-accent-muted flex items-center justify-center mx-auto mb-7">
                      <Icon className="w-6 h-6 text-ns-accent" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-ns-white mb-3 font-[Outfit]">{value.title}</h3>
                    <p className="text-sm text-ns-muted leading-[1.8]">{value.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
