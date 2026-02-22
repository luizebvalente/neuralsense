import { AlertTriangle, TrendingDown, HelpCircle, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import GlowCard from '../components/ui/GlowCard';

export default function ProblemSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const icons = [AlertTriangle, TrendingDown, HelpCircle, Clock];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ns-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.problem.title} subtitle={t.problem.text} />

        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.problem.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <GlowCard key={i} className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-ns-accent/10 border border-ns-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-ns-accent" />
                </div>
                <p className="text-3xl font-bold font-heading text-ns-accent mb-2">{stat.value}</p>
                <p className="text-sm text-ns-gray leading-relaxed">{stat.label}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
