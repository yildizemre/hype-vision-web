import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ComparisonTable() {
  const { t } = useTranslation();
  const rows = t('growth.comparison.rows', { returnObjects: true }) as {
    feature: string;
    manual: string;
    hype: string;
  }[];

  return (
    <section
      id="karsilastirma"
      className="section-tint-deep py-16 sm:py-24 lg:py-28 scroll-mt-24"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            {t('growth.comparison.eyebrow')}
          </p>
          <h2 id="comparison-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4">
            {t('growth.comparison.title')}{' '}
            <span className="text-vision">{t('growth.comparison.titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {t('growth.comparison.description')}
          </p>
        </div>

        <div className="panel-card rounded-2xl overflow-hidden border border-vision/15">
          <div className="hidden sm:grid sm:grid-cols-[1.2fr_1fr_1fr] bg-vision-50/80 border-b border-vision/15 text-xs font-bold uppercase tracking-wider text-vision-dark">
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5 border-l border-vision/10">{t('growth.comparison.manualLabel')}</div>
            <div className="p-4 sm:p-5 border-l border-vision/10 bg-vision/5">{t('growth.comparison.hypeLabel')}</div>
          </div>

          <div className="divide-y divide-gray-100">
            {rows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr] gap-3 sm:gap-0 p-4 sm:p-0"
              >
                <div className="sm:p-5 font-semibold text-sm text-[#0A0A0A] flex items-center">
                  {row.feature}
                </div>
                <div className="sm:p-5 sm:border-l sm:border-gray-100 flex gap-2 items-start text-sm text-gray-500">
                  <X size={16} className="text-red-400 shrink-0 mt-0.5 sm:hidden" aria-hidden />
                  <span>
                    <span className="sm:hidden text-[10px] font-bold uppercase text-gray-400 block mb-0.5">
                      {t('growth.comparison.manualLabel')}
                    </span>
                    {row.manual}
                  </span>
                </div>
                <div className="sm:p-5 sm:border-l sm:border-vision/10 bg-vision-50/30 flex gap-2 items-start text-sm text-[#0A0A0A] rounded-lg sm:rounded-none">
                  <Check size={16} className="text-vision shrink-0 mt-0.5" aria-hidden />
                  <span>
                    <span className="sm:hidden text-[10px] font-bold uppercase text-vision-dark block mb-0.5">
                      {t('growth.comparison.hypeLabel')}
                    </span>
                    {row.hype}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
