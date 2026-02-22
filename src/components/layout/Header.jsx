import { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const scrollTo = useSmoothScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.solucoes, id: 'services' },
    { label: t.nav.stormed, id: 'stormed' },
    { label: t.nav.consciencia, id: 'consciousness' },
    { label: t.nav.sobre, id: 'about' },
    { label: t.nav.contato, id: 'contact' },
  ];

  const handleNav = (id) => { scrollTo(id); setOpen(false); };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-white/[0.06]' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="text-[15px] font-bold text-white tracking-tight">
            Neural<span className="text-[#6366f1]">Sense</span><span className="text-[#666] font-normal">.ai</span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="text-[13px] text-[#999] hover:text-white transition-colors">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleLang} className="text-[13px] text-[#999] hover:text-white transition-colors flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              {lang.toUpperCase()}
            </button>
            <button onClick={() => scrollTo('contact')} className="bg-[#6366f1] hover:bg-[#818cf8] text-white text-[13px] font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
              {t.nav.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#999] hover:text-white">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 border-t border-white/[0.06]">
            <div className="py-4 space-y-1">
              {navItems.map(item => (
                <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-left px-3 py-2.5 text-sm text-[#999] hover:text-white rounded-lg transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 px-3 pt-3 border-t border-white/[0.06]">
              <button onClick={toggleLang} className="text-sm text-[#999] hover:text-white flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> {lang.toUpperCase()}
              </button>
              <button onClick={() => handleNav('contact')} className="flex-1 bg-[#6366f1] text-white text-sm font-medium py-2.5 rounded-lg text-center">
                {t.nav.cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
