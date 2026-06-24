import { useState, type FormEvent, type ReactNode } from 'react';
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  HardHat,
  TrendingUp,
  ScanEye,
  Shield,
  Loader2,
  AlertCircle,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../lib/forms';
import { trackLeadSubmit } from '../lib/conversions';

type ContactStep = { title: string; desc: string };

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  focus: string[];
  message: string;
};

const initialForm: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  focus: [],
  message: '',
};

const focusIcons: Record<string, LucideIcon> = {
  isg: HardHat,
  verimlilik: TrendingUp,
  kalite: ScanEye,
  guvenlik: Shield,
};

export default function FinalCTA() {
  const { t } = useTranslation();
  const focusOptions = Object.entries(
    t('common.forms.contact.focusOptions', { returnObjects: true }) as Record<string, string>
  ).map(([id, label]) => ({ id, label }));
  const stepsRaw = t('common.forms.contact.steps', { returnObjects: true }) as Record<string, ContactStep>;
  const steps = [
    { n: '01', ...stepsRaw.request },
    { n: '02', ...stepsRaw.discovery },
    { n: '03', ...stepsRaw.meeting },
  ];

  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFocus = (id: string) => {
    setForm((prev) => ({
      ...prev,
      focus: prev.focus.includes(id) ? prev.focus.filter((f) => f !== id) : [...prev.focus, id],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || loading) return;
    setLoading(true);
    setError(null);

    const focusLabels = form.focus
      .map((id) => focusOptions.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const result = await submitContactForm({
      name: form.name.trim(),
      company: form.company.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      focus: focusLabels,
      message: form.message.trim(),
    });

    setLoading(false);
    if (result.ok) {
      trackLeadSubmit('contact', 'final_cta_form');
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  const update = (field: keyof FormState, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="iletisim" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="iletisim-heading">
      <div className="hero-bg py-16 sm:py-20 lg:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-4">{t('sections.finalCta.eyebrow')}</p>
              <h2 id="iletisim-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-5">
                {t('common.forms.contact.sectionTitle')}
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">{t('common.forms.contact.sectionDesc')}</p>

              <div className="space-y-4 mb-10">
                {steps.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="text-xs font-bold text-vision-light/80 w-8 shrink-0 pt-0.5">{step.n}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{step.title}</p>
                      <p className="text-sm text-white/60 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3">
                <a href="mailto:info@hypevisionlab.com?subject=Hype%20Vision%20Iletisim" data-track="email" data-track-location="final_cta" id="cta-email-final" className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">{t('common.forms.contact.emailLabel')}</p>
                    <p className="text-white font-medium text-sm truncate group-hover:text-vision-light transition-colors">info@hypevisionlab.com</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-xs text-white/45">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-vision-light" />
                  {t('common.forms.contact.location')}
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-2xl shadow-black/20 p-6 sm:p-8 lg:p-9">
              {submitted ? (
                <div className="text-center py-10 px-4">
                  <div className="w-14 h-14 rounded-full bg-vision-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-vision" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">{t('common.forms.contact.submittedTitle')}</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">{t('common.forms.contact.submittedDesc')}</p>
                  <button type="button" onClick={() => { setSubmitted(false); setForm(initialForm); setError(null); }} className="text-sm font-medium text-vision hover:text-vision-dark">
                    {t('common.forms.contact.newRequest')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form-final">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A0A0A] mb-1">{t('common.forms.contact.title')}</h3>
                    <p className="text-xs text-gray-500">{t('common.forms.contact.subtitle')}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={t('common.forms.fields.name')} required>
                      <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder={t('common.forms.contact.namePlaceholder')} className={inputClass} />
                    </Field>
                    <Field label={t('common.forms.fields.company')} required>
                      <input type="text" required value={form.company} onChange={(e) => update('company', e.target.value)} placeholder={t('common.forms.contact.companyPlaceholder')} className={inputClass} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={t('common.forms.fields.phone')} required>
                      <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder={t('common.forms.contact.phonePlaceholder')} className={inputClass} />
                    </Field>
                    <Field label={t('common.forms.fields.email')}>
                      <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder={t('common.forms.contact.emailPlaceholder')} className={inputClass} />
                    </Field>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-3">
                      {t('common.forms.contact.focusLabel')} <span className="text-gray-400 font-normal">{t('common.forms.contact.focusHint')}</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {focusOptions.map((opt) => {
                        const active = form.focus.includes(opt.id);
                        const Icon = focusIcons[opt.id] ?? HardHat;
                        return (
                          <button key={opt.id} type="button" onClick={() => toggleFocus(opt.id)} className={`flex items-center gap-2 p-3 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all ${
                            active ? 'border-vision bg-vision-50 text-vision-dark' : 'border-gray-200 text-gray-600 hover:border-vision/40 hover:bg-gray-50'
                          }`}>
                            <Icon size={16} className={active ? 'text-vision' : 'text-gray-400'} />
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <Field label={t('common.forms.contact.messageOptional')}>
                    <textarea rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder={t('common.forms.contact.messagePlaceholder')} className={`${inputClass} resize-none`} />
                  </Field>

                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-4 rounded-xl bg-vision hover:bg-vision-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {t('common.forms.contact.submitting')}
                      </>
                    ) : (
                      <>
                        {t('common.forms.contact.submit')}
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  {error ? (
                    <p className="flex items-start gap-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2.5">
                      <AlertCircle size={14} className="shrink-0 mt-0.5" />
                      {error}
                    </p>
                  ) : null}

                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">{t('common.forms.contact.privacy')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none focus:border-vision focus:ring-2 focus:ring-vision/20 transition-shadow bg-white';

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-gray-700 mb-1.5 block">
        {label}
        {required ? <span className="text-vision ml-0.5">*</span> : null}
      </span>
      {children}
    </label>
  );
}
