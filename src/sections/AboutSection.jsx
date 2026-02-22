import { Shield, Cpu, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const icons = [Shield, Cpu, Target];

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-ns-black relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ns-accent/3 rounded-full blur-[200px]" />

      <div className="relative container-wide">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white leading-tight mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-lg text-ns-gray leading-relaxed mb-10">{t.about.text}</p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'Anos de Experiência' },
                { value: '200+', label: 'Profissionais Treinados' },
                { value: '98%', label: 'Satisfação dos Clientes' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-5 bg-ns-card border border-ns-border rounded-xl">
                  <p className="text-2xl sm:text-3xl font-bold text-ns-accent">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-ns-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {t.about.values.map((value, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex gap-6 p-7 bg-ns-card border border-ns-border rounded-2xl card-hover">
                  <div className="w-14 h-14 rounded-2xl bg-ns-accent/10 border border-ns-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-ns-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ns-white mb-2">{value.title}</h3>
                    <p className="text-sm text-ns-gray leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
