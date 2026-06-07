import { Camera, Brain, LayoutDashboard, BellRing, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type FlowItem = { label: string; short: string; detail: string };
type CardItem = { title: string; text: string; bold?: string; suffix?: string };
const flowIcons = [Camera, Brain, LayoutDashboard, BellRing];

export default function HowItWorks() {
  const { t } = useTranslation();
  const flowRaw = t('sections.howItWorks.flow', { returnObjects: true }) as FlowItem[];
  const flow = flowRaw.map((item, i) => ({ ...item, Icon: flowIcons[i] ?? Camera }));
  const cards = t('sections.howItWorks.cards', { returnObjects: true }) as CardItem[];
  return (
    <section
      id="nasil-calisir"
      className="section-tint-deep py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="nasil-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            {t('sections.howItWorks.eyebrow')}
          </p>
          <h2
            id="nasil-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            {t('sections.howItWorks.title')}{' '}
            <span className="text-vision">{t('sections.howItWorks.titleHighlight')}</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">{t('sections.howItWorks.description')}</p>
        </div>

        {/* Infografik + saha görseli */}
        <div className="panel-card rounded-2xl overflow-hidden mb-8">
          <img
            src="/nasil.jpg"
            alt={t('sections.howItWorks.imageAlt')}
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
          />
          <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {flow.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-vision-50 border-2 border-vision/25 flex items-center justify-center mb-3">
                  <step.Icon size={24} className="text-vision" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-vision-dark mb-1">
                  0{i + 1} · {step.label}
                </span>
                <p className="font-semibold text-[#0A0A0A] text-xs sm:text-sm mb-1">{step.short}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kısa detay kartları */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="p-5 rounded-xl bg-white border border-gray-100">
              <p className="text-xs font-bold text-vision-dark mb-2">{card.title}</p>
              <p className="text-sm text-gray-600">
                {card.text}{' '}
                {card.bold ? <strong className="text-[#0A0A0A]">{card.bold}</strong> : null}
                {card.suffix ?? ''}
              </p>
            </div>
          ))}
        </div>

        <div className="panel-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-semibold text-[#0A0A0A] text-lg mb-1">
              {t('sections.howItWorks.ctaTitle')}
            </p>
            <p className="text-sm text-gray-500">{t('sections.howItWorks.ctaDesc')}</p>
          </div>
          <a
            href="/#iletisim"
            data-track="contact_cta"
            data-track-location="how_it_works"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            {t('sections.howItWorks.contact')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
