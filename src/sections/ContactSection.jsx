import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fireConfetti } from '../components/effects/ConfettiEffect';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function ContactSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    fireConfetti();
    setTimeout(() => setSuccess(false), 5000);
    setForm({ name: '', email: '', company: '', phone: '', message: '' });
  }

  return (
    <section id="contact" className="py-24 bg-ns-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ns-accent/3 rounded-full blur-[200px]" />

      <div ref={ref} className={`relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-ns-gray">{t.contact.subtitle}</p>
        </div>

        {success && (
          <div className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3 animate-slide-down">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <p className="text-sm text-green-400">{t.contact.form.success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-ns-card border border-ns-border rounded-2xl p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input label={t.contact.form.name} placeholder="João Silva" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
            <Input label={t.contact.form.email} type="email" placeholder="joao@empresa.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input label={t.contact.form.company} placeholder="Empresa S/A" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
            <Input label={t.contact.form.phone} type="tel" placeholder="+55 (11) 99999-0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          </div>
          <Input label={t.contact.form.message} textarea placeholder="Como podemos ajudar?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />

          <Button type="submit" loading={loading} className="w-full" size="lg" icon={Send}>
            {t.contact.form.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
