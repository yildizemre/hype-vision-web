import { useState, type FormEvent, type ReactNode } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  HardHat,
  TrendingUp,
  ScanEye,
  Shield,
} from 'lucide-react';

const focusOptions = [
  { id: 'isg', label: 'İSG Denetimi', Icon: HardHat },
  { id: 'verimlilik', label: 'Personel Verimliliği', Icon: TrendingUp },
  { id: 'kalite', label: 'Kalite Kontrol', Icon: ScanEye },
  { id: 'guvenlik', label: 'Güvenlik', Icon: Shield },
] as const;

const steps = [
  { n: '01', title: 'Talep', desc: 'Formu doldurun veya arayın — talebiniz bize ulaşır.' },
  { n: '02', title: 'Keşif', desc: 'Mevcut kameralarınız ve hat yapınız birlikte netleşir.' },
  { n: '03', title: 'Görüşme', desc: 'İhtiyacınıza göre canlı senaryo veya teknik brifing.' },
];

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

function buildMailto(data: FormState) {
  const focusLabels = data.focus
    .map((id) => focusOptions.find((f) => f.id === id)?.label)
    .filter(Boolean)
    .join(', ');

  const body = [
    'Merhaba Hype Vision ekibi,',
    '',
    'İletişim / bilgi talep ediyorum.',
    '',
    `Ad Soyad: ${data.name}`,
    `Firma: ${data.company}`,
    `Telefon: ${data.phone}`,
    `E-posta: ${data.email}`,
    `Konu / ilgi alanı: ${focusLabels || 'Belirtilmedi'}`,
    '',
    data.message ? `Not:\n${data.message}` : '',
    '',
    '---',
    'hypevisionlab.com demo formu',
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:info@hypevisionlab.com?subject=${encodeURIComponent(
    `İletişim — ${data.company || data.name}`
  )}&body=${encodeURIComponent(body)}`;
}

export default function FinalCTA() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const toggleFocus = (id: string) => {
    setForm((prev) => ({
      ...prev,
      focus: prev.focus.includes(id)
        ? prev.focus.filter((f) => f !== id)
        : [...prev.focus, id],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    window.location.href = buildMailto(form);
    setSubmitted(true);
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="demo"
      className="relative scroll-mt-20 overflow-hidden"
      aria-labelledby="demo-heading"
    >
      <div className="hero-bg py-16 sm:py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-vision/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Sol — mesaj */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-4">
                İletişim
              </p>
              <h2
                id="demo-heading"
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold text-white leading-tight mb-5"
              >
                Tesisiniz için birlikte planlayalım.
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                İSG, verimlilik, kalite veya güvenlik odağında bilgi almak için formu doldurun
                veya doğrudan arayın. Mevcut kameralarınızla — marka fark etmez.
              </p>

              <div className="space-y-4 mb-10">
                {steps.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="text-xs font-bold text-vision-light/80 w-8 shrink-0 pt-0.5">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">{step.title}</p>
                      <p className="text-sm text-white/60 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="tel:+905418629190"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-vision flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">
                      Hemen arayın
                    </p>
                    <p className="text-white font-semibold text-sm group-hover:text-vision-light transition-colors">
                      0541 862 91 90
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@hypevisionlab.com?subject=Hype%20Vision%20Demo%20Talebi"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">
                      E-posta
                    </p>
                    <p className="text-white font-medium text-sm truncate group-hover:text-vision-light transition-colors">
                      info@hypevisionlab.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-xs text-white/45">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-vision-light" />
                  Beykoz · İstanbul
                </span>
              </div>
            </div>

            {/* Sağ — form */}
            <div className="rounded-2xl bg-white shadow-2xl shadow-black/20 p-6 sm:p-8 lg:p-9">
              {submitted ? (
                <div className="text-center py-10 px-4">
                  <div className="w-14 h-14 rounded-full bg-vision-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-vision" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">Talebiniz hazır</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
                    E-posta uygulamanız açıldı. En kısa sürede değerlendirip size dönüş yapacağız.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="text-sm font-medium text-vision hover:text-vision-dark"
                  >
                    Yeni talep oluştur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A0A0A] mb-1">İletişim formu</h3>
                    <p className="text-xs text-gray-500">
                      Zorunlu alanları doldurun; size en uygun senaryoyu birlikte seçelim.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Ad Soyad" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Adınız Soyadınız"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Firma" required>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder="Firma adı"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Telefon" required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="05xx xxx xx xx"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="E-posta">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="ornek@firma.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-3">
                      Demo odağı <span className="text-gray-400 font-normal">(birden fazla seçebilirsiniz)</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {focusOptions.map(({ id, label, Icon }) => {
                        const active = form.focus.includes(id);
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => toggleFocus(id)}
                            className={`flex items-center gap-2 p-3 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all ${
                              active
                                ? 'border-vision bg-vision-50 text-vision-dark'
                                : 'border-gray-200 text-gray-600 hover:border-vision/40 hover:bg-gray-50'
                            }`}
                          >
                            <Icon size={16} className={active ? 'text-vision' : 'text-gray-400'} />
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <Field label="Not (opsiyonel)">
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Hat sayısı, mevcut kamera markası, öncelikli sorun..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-4 rounded-xl bg-vision hover:bg-vision-dark transition-colors"
                  >
                    Gönder
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                    Gönder’e tıkladığınızda e-posta uygulamanız açılır. Bilgileriniz yalnızca demo
                    planlaması için kullanılır.
                  </p>
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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-gray-700 mb-1.5 block">
        {label}
        {required && <span className="text-vision ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
