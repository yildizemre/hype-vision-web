import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

type ContactStep = { title: string; desc: string };

export default function FinalCTA() {
  const { t } = useTranslation();
  const stepsRaw = t('common.forms.contact.steps', { returnObjects: true }) as Record<string, ContactStep>;
  const steps = [
    { n: '01', ...stepsRaw.request },
    { n: '02', ...stepsRaw.discovery },
    { n: '03', ...stepsRaw.meeting },
  ];

  return (
    <section id="iletisim" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="iletisim-heading">
      <div className="hero-bg py-16 sm:py-20 lg:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-4">
                {t('sections.finalCta.eyebrow')}
              </p>
              <h2 id="iletisim-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-5">
                {t('common.forms.contact.sectionTitle')}
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                {t('common.forms.contact.sectionDesc')}
              </p>

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
                <a
                  href="mailto:info@hypevisionlab.com?subject=Hype%20Vision%20Iletisim"
                  data-track="email"
                  data-track-location="final_cta"
                  id="cta-email-final"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">
                      {t('common.forms.contact.emailLabel')}
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
                  {t('common.forms.contact.location')}
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-2xl shadow-black/20 p-6 sm:p-8 lg:p-9">
              <ContactForm trackLocation="final_cta_form" formId="contact-form-final" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
