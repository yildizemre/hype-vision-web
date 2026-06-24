import { Search, Wrench, Activity, FileBarChart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STEP_ICONS = [Search, Wrench, Activity, FileBarChart];

export default function PilotTimeline() {
  const { t } = useTranslation();
  const steps = t('growth.pilotTimeline.steps', { returnObjects: true }) as {
    step: string;
    title: string;
    duration: string;
    desc: string;
  }[];
  const stepsWithIcons = steps.map((s, i) => ({ ...s, Icon: STEP_ICONS[i] ?? Search }));

  return (
    <section
      id="pilot-sureci"
      className="bg-[#0c2a30] py-16 sm:py-24 lg:py-28 scroll-mt-24 border-y border-vision/15"
      aria-labelledby="pilot-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">
            {t('growth.pilotTimeline.eyebrow')}
          </p>
          <h2 id="pilot-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
            {t('growth.pilotTimeline.title')}{' '}
            <span className="text-vision-light">{t('growth.pilotTimeline.titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {t('growth.pilotTimeline.description')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-vision/40 to-transparent" aria-hidden />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {stepsWithIcons.map((step, i) => (
              <li key={step.step} className="relative flex flex-col items-center text-center lg:px-2">
                <div className="w-14 h-14 rounded-2xl bg-vision/15 border-2 border-vision/30 flex items-center justify-center mb-4 relative z-10">
                  <step.Icon size={24} className="text-vision-light" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-vision-light mb-1">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                <span className="text-xs font-medium text-vision-light/90 mb-2 px-2.5 py-0.5 rounded-full bg-vision/10 border border-vision/20">
                  {step.duration}
                </span>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-[220px]">{step.desc}</p>
                {i < stepsWithIcons.length - 1 && (
                  <ArrowRight size={16} className="text-vision/30 mt-4 lg:hidden rotate-90 sm:rotate-0" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 sm:mt-14 flex flex-col items-center gap-4 px-4 py-8 rounded-2xl border border-vision/20 bg-vision/[0.06]">
          <p className="text-sm text-gray-400 max-w-md text-center leading-relaxed">
            {t('growth.pilotTimeline.ctaHint')}
          </p>
          <a
            href="/#iletisim"
            data-track="contact_cta"
            data-track-location="pilot_timeline"
            id="cta-pilot-timeline"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-light transition-colors shadow-lg shadow-vision/20"
          >
            {t('growth.pilotTimeline.cta')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
