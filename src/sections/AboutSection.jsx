import { Shield, Cpu, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import FadeIn, { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';

export default function AboutSection() {
  const { t } = useLanguage();
  const icons = [Shield, Cpu, Target];

  return (
    <section id="about" className="section-pad relative overflow-hidden glow-top">
      <div className="container-ns">
        {/* Title */}
        <FadeIn className="text-center mb-20 sm:mb-28 md:mb-32 lg:mb-40">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-ns-white tracking-tight leading-[1.05] mb-8 sm:mb-10"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ns-gray max-w-[640px] mx-auto leading-[1.8]">{t.about.text}</p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1} className="flex justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-36 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
          {[
            { value: '15+', label: 'Anos de Experiência' },
            { value: '200+', label: 'Profissionais' },
            { value: '98%', label: 'Satisfação' },
          ].map((stat, i) => (
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

        {/* Values */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {t.about.values.map((value, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="text-center p-12 sm:p-14 md:p-16 rounded-3xl border border-ns-border bg-ns-card/40 hover:border-ns-border-hover transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-ns-accent-muted flex items-center justify-center mx-auto mb-8">
                    <Icon className="w-7 h-7 text-ns-accent" />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-ns-white mb-4"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-base text-ns-muted leading-[1.85]">{value.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
