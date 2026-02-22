import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { fireConfetti } from '../components/effects/ConfettiEffect';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function ContactSection() {
  const { t } = useLanguage();
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
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="container-ns">
        <FadeIn className="max-w-[580px] mx-auto">
          {/* Title */}
          <div className="text-center mb-14 sm:mb-16">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold text-ns-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-ns-gray leading-[1.8]">{t.contact.subtitle}</p>
          </div>

          {/* Success message */}
          {success && (
            <div className="mb-10 p-5 rounded-xl bg-emerald-500/8 border border-emerald-500/25 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p className="text-sm text-emerald-400">{t.contact.form.success}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label={t.contact.form.name}
                placeholder="João Silva"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                required
              />
              <Input
                label={t.contact.form.email}
                type="email"
                placeholder="joao@empresa.com"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label={t.contact.form.company}
                placeholder="Empresa S/A"
                value={form.company}
                onChange={e => setForm({...form, company: e.target.value})}
              />
              <Input
                label={t.contact.form.phone}
                type="tel"
                placeholder="+55 (11) 99999-0000"
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
              />
            </div>
            <Input
              label={t.contact.form.message}
              textarea
              placeholder="Como podemos ajudar?"
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              required
            />
            <Button type="submit" loading={loading} className="w-full" size="lg" icon={Send}>
              {t.contact.form.submit}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
