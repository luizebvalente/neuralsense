import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

export default function ProblemSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <SectionTitle title={t.problem.title} subtitle={t.problem.text} />

        <div ref={ref} className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.problem.stats.map((stat, i) => (
            <div key={i} className="text-center py-10 px-6 rounded-2xl border border-ns-border bg-ns-panel/30">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white mb-3">{stat.value}</p>
              <p className="text-sm text-ns-muted leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
