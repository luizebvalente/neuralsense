import { ClipboardCheck, Map, GraduationCap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import GlowCard from '../components/ui/GlowCard';

const iconMap = { ClipboardCheck, Map, GraduationCap };

export default function ConsciousnessSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="consciousness" className="py-24 bg-ns-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.consciousness.title} subtitle={t.consciousness.text} />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.consciousness.items.map((item, i) => {
            const Icon = iconMap[item.icon] || ClipboardCheck;
            return (
              <GlowCard key={i} className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-ns-accent/10 border border-ns-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-ns-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-ns-white mb-3">{item.title}</h3>
                <p className="text-sm text-ns-gray leading-relaxed">{item.desc}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
