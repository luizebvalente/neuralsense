import { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Brain } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import Button from '../ui/Button';

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const scrollTo = useSmoothScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 50); }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.inicio, id: 'hero' },
    { label: t.nav.solucoes, id: 'services' },
    { label: t.nav.stormed, id: 'stormed' },
    { label: t.nav.consciencia, id: 'consciousness' },
    { label: t.nav.sobre, id: 'about' },
    { label: t.nav.contato, id: 'contact' },
  ];

  function handleNav(id) {
    scrollTo(id);
    setOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark border-b border-ns-border' : 'bg-transparent'}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-[72px]">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-ns-white tracking-tight">
              Neural<span className="text-ns-accent">Sense</span><span className="text-ns-muted font-normal">.ai</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm text-ns-muted hover:text-ns-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-ns-muted hover:text-ns-white transition-colors">
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <Button size="sm" icon={ArrowRight} onClick={() => scrollTo('contact')}>
              {t.nav.cta}
            </Button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ns-muted hover:text-ns-white transition-colors">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 space-y-1 border-t border-ns-border">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-4 py-3 text-sm text-ns-muted hover:text-ns-white rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-4 px-4">
              <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-ns-muted hover:text-ns-white">
                <Globe className="w-4 h-4" /> {lang.toUpperCase()}
              </button>
              <Button size="sm" className="flex-1" icon={ArrowRight} onClick={() => handleNav('contact')}>
                {t.nav.cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
