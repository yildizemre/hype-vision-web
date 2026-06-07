import { Camera, Brain, LayoutDashboard, Headphones, ArrowRight, TrendingUp, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Outcome = { sector: string; metric: string; note: string };
type Step = { step: string; title: string; desc: string };

const stepIcons: LucideIcon[] = [Camera, Brain, LayoutDashboard, Headphones];

export default function PlatformOverview() {
  const { t } = useTranslation();
  const outcomes = t('sections.platformOverview.outcomes', { returnObjects: true }) as Outcome[];
  const steps = t('sections.platformOverview.steps', { returnObjects: true }) as Step[];
  const sectors = t('sections.platformOverview.sectors', { returnObjects: true }) as string[];

  return (
    <section id="platform" className="py-16 sm:py-24 lg:py-32 scroll-mt-20 bg-vision-gradient border-y border-vision-dark/20" aria-labelledby="platform-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/70 mb-3">{t('sections.platformOverview.eyebrow')}</p>
            <h2 id="platform-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
              {t('sections.platformOverview.title')} <span className="text-white/90">{t('sections.platformOverview.titleHighlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mb-6">{t('sections.platformOverview.description')}</p>
            <a href="/#iletisim" data-track="contact_cta" data-track-location="platform" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 px-6 py-3 rounded-lg transition-colors">
              {t('sections.platformOverview.cta')}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((item) => (
              <div key={item.sector} className="p-4 sm:p-5 rounded-xl bg-white/12 backdrop-blur-sm border border-white/20">
                <div className="flex items-start gap-2 mb-2">
                  <TrendingUp size={16} className="text-vision-light shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">{item.sector}</p>
                </div>
                <p className="text-lg font-bold text-white mb-0.5">{item.metric}</p>
                <p className="text-[11px] text-white/55">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Camera;
            return (
              <div key={step.step} className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <Icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-white/50">{step.step}</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-white/75 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="pt-8 border-t border-white/20">
          <p className="text-xs font-medium text-white/60 mb-3">{t('sections.platformOverview.sectorsLabel')}</p>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span key={sector} className="text-xs text-white/90 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                {sector}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/45 mt-4">{t('sections.platformOverview.footnote')}</p>
        </div>
      </div>
    </section>
  );
}
