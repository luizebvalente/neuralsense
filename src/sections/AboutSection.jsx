import { Shield, Cpu, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const icons = [Shield, Cpu, Target];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-ns-black relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ns-accent/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white leading-tight mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-lg text-ns-gray leading-relaxed mb-8">{t.about.text}</p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: '15+', label: 'Anos de Experiência' },
                { value: '200+', label: 'Profissionais Treinados' },
                { value: '98%', label: 'Satisfação dos Clientes' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-ns-card border border-ns-border rounded-xl">
                  <p className="text-2xl font-bold font-heading text-ns-accent">{stat.value}</p>
                  <p className="text-[10px] text-ns-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {t.about.values.map((value, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex gap-5 p-6 bg-ns-card border border-ns-border rounded-2xl card-hover">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent/10 border border-ns-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-ns-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-ns-white mb-1">{value.title}</h3>
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
