import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { fireConfetti } from '../components/effects/ConfettiEffect';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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

  const inputClasses =
    'w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-[#444] text-sm focus:border-[#6366f1]/40 focus:outline-none transition-colors';

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t.contact.title}
            </h2>
            <p
              className="text-base md:text-lg text-[#999] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t.contact.subtitle}
            </p>
          </div>

          {/* Success Alert */}
          {success && (
            <div className="mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p
                className="text-sm text-emerald-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.contact.form.success}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium text-[#999] mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  placeholder="João Silva"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className={inputClasses}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[#999] mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  placeholder="joao@empresa.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className={inputClasses}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* Company + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium text-[#999] mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  placeholder="Empresa S/A"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                  className={inputClasses}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[#999] mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  placeholder="+55 (11) 99999-0000"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className={inputClasses}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium text-[#999] mb-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.contact.form.message}
              </label>
              <textarea
                placeholder="Como podemos ajudar?"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                className={`${inputClasses} min-h-[120px] resize-none`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6366f1] hover:bg-[#818cf8] text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.contact.form.submit}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
