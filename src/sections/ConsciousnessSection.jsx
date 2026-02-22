import { ClipboardCheck, Map, GraduationCap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const iconMap = { ClipboardCheck, Map, GraduationCap };

export default function ConsciousnessSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="consciousness" className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <SectionTitle title={t.consciousness.title} subtitle={t.consciousness.text} />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.consciousness.items.map((item, i) => {
            const Icon = iconMap[item.icon] || ClipboardCheck;
            return (
              <div key={i} className="text-center p-10 rounded-2xl border border-ns-border bg-ns-panel/30">
                <div className="w-14 h-14 rounded-2xl bg-ns-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-ns-accent" />
                </div>
                <h3 className="text-lg font-bold text-ns-white mb-3">{item.title}</h3>
                <p className="text-sm text-ns-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
