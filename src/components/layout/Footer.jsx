import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
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
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="text-[15px] font-bold text-white tracking-tight">
              Neural<span className="text-[#6366f1]">Sense</span><span className="text-[#666] font-normal">.ai</span>
            </span>
            <p className="text-sm text-[#666] leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-[#666] hover:text-white hover:border-white/[0.12] transition-all">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-[#666] hover:text-white hover:border-white/[0.12] transition-all">
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#666] mb-5 tracking-widest uppercase">{t.nav.solucoes}</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-sm text-[#666] hover:text-white transition-colors">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#666] mb-5 tracking-widest uppercase">STORMED.AI</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li>Cost Analysis</li>
              <li>Blueprint Classifier</li>
              <li>Commodity Monitor</li>
              <li>ERP Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#666] mb-5 tracking-widest uppercase">{t.nav.contato}</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3 text-sm text-[#666]"><Mail className="w-4 h-4 text-[#6366f1] shrink-0" />contato@neuralsense.ai</li>
              <li className="flex items-center gap-3 text-sm text-[#666]"><Phone className="w-4 h-4 text-[#6366f1] shrink-0" />+55 (11) 9999-0000</li>
              <li className="flex items-start gap-3 text-sm text-[#666]"><MapPin className="w-4 h-4 text-[#6366f1] shrink-0 mt-0.5" />São Paulo, SP — Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666]">{t.footer.rights}</p>
          <p className="text-xs text-[#666]">Powered by <span className="text-[#6366f1]">AI</span> — Built for Industry.</p>
        </div>
      </div>
    </footer>
  );
}
