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
    <footer className="border-t border-ns-border/40">
      <div className="container-ns py-24 sm:py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 xl:gap-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-lg font-bold text-ns-white tracking-tight"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                Neural<span className="text-ns-accent">Sense</span><span className="text-ns-muted font-normal">.ai</span>
              </span>
            </div>
            <p className="text-base text-ns-muted leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl border border-ns-border flex items-center justify-center text-ns-muted hover:text-ns-white hover:border-ns-border-hover transition-all duration-300">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-ns-border flex items-center justify-center text-ns-muted hover:text-ns-white hover:border-ns-border-hover transition-all duration-300">
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold text-ns-muted mb-8 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              {t.nav.solucoes}
            </h4>
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-base text-ns-muted hover:text-ns-white transition-colors duration-300">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* STORMED */}
          <div>
            <h4
              className="text-xs font-semibold text-ns-muted mb-8 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              STORMED.AI
            </h4>
            <ul className="space-y-4 text-base text-ns-muted">
              <li>Cost Analysis</li>
              <li>Blueprint Classifier</li>
              <li>Commodity Monitor</li>
              <li>ERP Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold text-ns-muted mb-8 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              {t.nav.contato}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-base text-ns-muted">
                <Mail className="w-5 h-5 text-ns-accent flex-shrink-0" />
                contato@neuralsense.ai
              </li>
              <li className="flex items-center gap-4 text-base text-ns-muted">
                <Phone className="w-5 h-5 text-ns-accent flex-shrink-0" />
                +55 (11) 9999-0000
              </li>
              <li className="flex items-start gap-4 text-base text-ns-muted">
                <MapPin className="w-5 h-5 text-ns-accent mt-0.5 flex-shrink-0" />
                São Paulo, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ns-border/30 mt-24 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-ns-muted">{t.footer.rights}</p>
          <p className="text-sm text-ns-muted">
            Powered by <span className="text-ns-accent font-semibold">AI</span> — Built for Industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
