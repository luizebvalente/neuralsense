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
    function onScroll() { setScrolled(window.scrollY > 60); }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark border-b border-ns-border/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-ns">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <Brain className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-base font-bold text-ns-white tracking-tight font-[Outfit]">
              Neural<span className="text-ns-accent">Sense</span><span className="text-ns-muted font-normal">.ai</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[13px] font-medium text-ns-muted hover:text-ns-white transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[13px] font-medium text-ns-muted hover:text-ns-white transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <Button size="sm" icon={ArrowRight} onClick={() => scrollTo('contact')}>
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ns-muted hover:text-ns-white transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-8 pt-2 space-y-1 border-t border-ns-border/40">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-4 py-3.5 text-sm text-ns-muted hover:text-ns-white hover:bg-ns-surface/40 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-5 px-4">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-sm text-ns-muted hover:text-ns-white"
              >
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
