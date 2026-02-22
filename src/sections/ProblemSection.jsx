import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn, { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden glow-top">
      <div className="container-ns">
        <SectionTitle
          title={t.problem.title}
          subtitle={t.problem.text}
        />

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {t.problem.stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center py-12 sm:py-14 px-6 rounded-2xl border border-ns-border bg-ns-card/50 hover:border-ns-border-hover hover:bg-ns-card transition-all duration-400">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white mb-4 font-[JetBrains_Mono] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-ns-muted leading-relaxed px-2">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
