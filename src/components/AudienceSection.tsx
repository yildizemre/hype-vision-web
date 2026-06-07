import { Briefcase, HardHat, ScanEye, ArrowRight, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Audience = { role: string; pain: string; solution: string; action: string; tags: string[] };
const audienceIcons = [Briefcase, HardHat, ScanEye];

export default function AudienceSection() {
  const { t } = useTranslation();
  const audienceTexts = t('sections.audience.audiences', { returnObjects: true }) as Audience[];
  const audiences = audienceTexts.map((item, i) => ({ ...item, Icon: audienceIcons[i] ?? Briefcase }));
  return (
    <section
      id="kimler-icin"
      className="bg-[#0c2a30] py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="kimler-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light/80 mb-3">
            {t('sections.audience.eyebrow')}
          </p>
          <h2
            id="kimler-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4"
          >
            {t('sections.audience.title')}{' '}
            <span className="text-vision-light">{t('sections.audience.titleHighlight')}</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {t('sections.audience.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((a) => (
            <article
              key={a.role}
              className="rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col hover:border-vision/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-vision/15 border border-vision/25 flex items-center justify-center mb-5">
                <a.Icon size={20} className="text-vision-light" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-white text-lg mb-4">{a.role}</h3>

              <div className="mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                  {t('sections.audience.problem')}
                </p>
                <p className="text-sm text-white/65 leading-relaxed">{a.pain}</p>
              </div>

              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-vision-light mb-1.5">
                  {t('sections.audience.solution')}
                </p>
                <p className="text-sm text-white/85 leading-relaxed">{a.solution}</p>
              </div>

              <div className="mt-auto p-3.5 rounded-lg bg-vision/10 border border-vision/20">
                <p className="text-[10px] font-bold uppercase tracking-wider text-vision-light mb-1.5 flex items-center gap-1">
                  <Zap size={11} />
                  {t('sections.audience.action')}
                </p>
                <p className="text-sm text-white font-medium leading-relaxed">{a.action}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/10">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 text-white/60 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/#iletisim"
            data-track="contact_cta"
            data-track-location="audience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-8 py-3.5 rounded-lg bg-white hover:bg-gray-100 transition-colors"
          >
            {t('sections.audience.cta')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
