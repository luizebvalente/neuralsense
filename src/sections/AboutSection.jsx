import { Shield, Cpu, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const icons = [Shield, Cpu, Target];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-bold text-ns-white tracking-tight leading-[1.1] mb-6">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg text-ns-gray max-w-[600px] mx-auto leading-relaxed">{t.about.text}</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-16 max-w-lg mx-auto">
            {[
              { value: '15+', label: 'Anos de Experiência' },
              { value: '200+', label: 'Profissionais' },
              { value: '98%', label: 'Satisfação' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-ns-white">{stat.value}</p>
                <p className="text-xs text-ns-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.values.map((value, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="p-8 rounded-2xl border border-ns-border bg-ns-panel/30 text-center">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-5 h-5 text-ns-accent" />
                  </div>
                  <h3 className="text-base font-bold text-ns-white mb-2">{value.title}</h3>
                  <p className="text-sm text-ns-muted leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
