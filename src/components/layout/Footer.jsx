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
    <footer className="bg-ns-dark border-t border-ns-border">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-ns-white tracking-tight">
                Neural<span className="text-ns-accent">Sense</span><span className="text-ns-muted font-normal">.ai</span>
              </span>
            </div>
            <p className="text-sm text-ns-muted leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-ns-panel border border-ns-border flex items-center justify-center text-ns-gray hover:text-ns-accent hover:border-ns-accent/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-ns-panel border border-ns-border flex items-center justify-center text-ns-gray hover:text-ns-accent hover:border-ns-accent/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ns-white mb-4 tracking-widest uppercase">{t.nav.solucoes}</h4>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-sm text-ns-muted hover:text-ns-accent transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ns-white mb-4 tracking-widest uppercase">STORMED.AI</h4>
            <ul className="space-y-2.5 text-sm text-ns-muted">
              <li>Cost Analysis</li>
              <li>Component Breakdown</li>
              <li>Commodity Monitor</li>
              <li>ERP Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ns-white mb-4 tracking-widest uppercase">{t.nav.contato}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-ns-muted">
                <Mail className="w-4 h-4 text-ns-accent" />
                contato@neuralsense.ai
              </li>
              <li className="flex items-center gap-2 text-sm text-ns-muted">
                <Phone className="w-4 h-4 text-ns-accent" />
                +55 (11) 9999-0000
              </li>
              <li className="flex items-start gap-2 text-sm text-ns-muted">
                <MapPin className="w-4 h-4 text-ns-accent mt-0.5" />
                São Paulo, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ns-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ns-muted">{t.footer.rights}</p>
          <p className="text-xs text-ns-muted">
            Powered by <span className="text-ns-accent">AI</span> — Built for Industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
