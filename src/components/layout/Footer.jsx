import { Brain, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export default function Footer() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();

  const navItems = [
    { label: t.nav.inicio, id: 'hero' },
    { label: t.nav.solucoes, id: 'services' },
    { label: t.nav.stormed, id: 'stormed' },
    { label: t.nav.consciencia, id: 'consciousness' },
    { label: t.nav.sobre, id: 'about' },
    { label: t.nav.contato, id: 'contact' },
  ];

  return (
    <footer className="border-t border-ns-border">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold text-ns-white tracking-tight">
                Neural<span className="text-ns-accent">Sense</span><span className="text-ns-muted font-normal">.ai</span>
              </span>
            </div>
            <p className="text-sm text-ns-muted leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg border border-ns-border flex items-center justify-center text-ns-muted hover:text-ns-white hover:border-ns-muted transition-all">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg border border-ns-border flex items-center justify-center text-ns-muted hover:text-ns-white hover:border-ns-muted transition-all">
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-ns-muted mb-4 tracking-widest uppercase">{t.nav.solucoes}</h4>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-sm text-ns-muted hover:text-ns-white transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-ns-muted mb-4 tracking-widest uppercase">STORMED.AI</h4>
            <ul className="space-y-2.5 text-sm text-ns-muted">
              <li>Cost Analysis</li>
              <li>Blueprint Classifier</li>
              <li>Commodity Monitor</li>
              <li>ERP Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-ns-muted mb-4 tracking-widest uppercase">{t.nav.contato}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-ns-muted">
                <Mail className="w-4 h-4 text-ns-accent flex-shrink-0" />
                contato@neuralsense.ai
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ns-muted">
                <Phone className="w-4 h-4 text-ns-accent flex-shrink-0" />
                +55 (11) 9999-0000
              </li>
              <li className="flex items-start gap-2.5 text-sm text-ns-muted">
                <MapPin className="w-4 h-4 text-ns-accent mt-0.5 flex-shrink-0" />
                São Paulo, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ns-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ns-muted">{t.footer.rights}</p>
          <p className="text-xs text-ns-muted">
            Powered by <span className="text-ns-accent">AI</span> — Built for Industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
