import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden glow-top">
      <div className="container-ns">
        <SectionTitle title={t.problem.title} subtitle={t.problem.text} />

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 xl:gap-10">
          {t.problem.stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center py-14 sm:py-16 md:py-20 px-8 rounded-3xl border border-ns-border bg-ns-card/50 hover:border-ns-border-hover hover:bg-ns-card/80 transition-all duration-500">
                <p
                  className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-5xl xl:text-[3.5rem] font-bold text-ns-white mb-5 tracking-tight"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-ns-muted leading-relaxed">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
