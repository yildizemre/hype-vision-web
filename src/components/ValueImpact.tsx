import { PiggyBank, Shield, Zap, BarChart3, XCircle, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Impact = { title: string; points: string[] };
type CompareRow = {
  dimension: string;
  human: string;
  humanNote?: string;
  ai: string;
  aiNote?: string;
};

export default function ValueImpact() {
  const { t } = useTranslation();
  const impacts = t('sections.valueImpact.impacts', { returnObjects: true }) as Impact[];
  const rows = t('sections.valueImpact.rows', { returnObjects: true }) as CompareRow[];
  const icons = [PiggyBank, Shield, Zap, BarChart3];

  return (
    <section id="deger" className="section-tint-deep py-16 sm:py-24 lg:py-32 scroll-mt-20" aria-labelledby="deger-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">{t('sections.valueImpact.eyebrow')}</p>
          <h2 id="deger-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4">
            {t('sections.valueImpact.title')} <span className="text-vision">{t('sections.valueImpact.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('sections.valueImpact.description')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {impacts.map((impact, i) => {
            const Icon = icons[i] ?? PiggyBank;
            return (
              <div key={impact.title} className="panel-card rounded-xl p-5 sm:p-6">
                <div className="w-10 h-10 rounded-lg bg-vision-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-vision" />
                </div>
                <h3 className="font-semibold text-[#0A0A0A] mb-3 text-sm sm:text-base">{impact.title}</h3>
                <ul className="space-y-2">
                  {impact.points.map((p) => (
                    <li key={p} className="text-xs sm:text-sm text-gray-600 flex gap-2">
                      <span className="text-vision shrink-0">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">{t('sections.valueImpact.compareEyebrow')}</p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0A0A0A] leading-tight">
            {t('sections.valueImpact.compareTitle')} <span className="text-gray-300 font-light mx-1 sm:mx-2">{t('sections.valueImpact.compareVs')}</span> <span className="text-vision">{t('sections.valueImpact.compareHighlight')}</span>
          </h3>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{t('sections.valueImpact.compareDesc')}</p>
        </div>

        <div className="rounded-2xl border border-vision/20 overflow-hidden bg-white">
          {rows.map((row) => (
            <div key={row.dimension} className="grid md:grid-cols-2 border-b border-gray-100 last:border-b-0">
              <div className="p-5 sm:p-6 bg-gray-50/60">
                <p className="text-xs font-bold text-gray-500 mb-2">{row.dimension}</p>
                <p className="text-sm text-gray-700">{row.human}</p>
                {row.humanNote ? <p className="text-xs text-gray-500 mt-1">{row.humanNote}</p> : null}
              </div>
              <div className="p-5 sm:p-6 bg-vision-50/50">
                <p className="text-sm font-semibold text-[#0A0A0A]">{row.ai}</p>
                {row.aiNote ? <p className="text-xs text-vision-dark/90 mt-1">{row.aiNote}</p> : null}
              </div>
            </div>
          ))}

          <div className="grid md:grid-cols-2 border-t border-gray-100">
            <div className="p-5 sm:p-6 bg-gray-50/80 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <XCircle size={20} className="text-gray-400 shrink-0" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-700">{t('sections.valueImpact.humanResult')}</span> {t('sections.valueImpact.humanResultText')}
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-vision/10 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-vision shrink-0" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#0A0A0A]">{t('sections.valueImpact.aiResult')}</span> {t('sections.valueImpact.aiResultText')}
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 max-w-lg mx-auto">{t('sections.valueImpact.footnote')}</p>
      </div>
    </section>
  );
}
