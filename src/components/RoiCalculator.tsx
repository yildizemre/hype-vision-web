import { useMemo, useState } from 'react';
import { Calculator, ArrowRight, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function formatCurrency(n: number) {
  return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(Math.round(n));
}

export default function RoiCalculator() {
  const { t } = useTranslation();
  const [lines, setLines] = useState(3);
  const [personnel, setPersonnel] = useState(8);
  const [defectRate, setDefectRate] = useState(3.2);
  const [unitCost, setUnitCost] = useState(45);
  const [hourlyRate, setHourlyRate] = useState(120);
  const [calculated, setCalculated] = useState(true);

  const results = useMemo(() => {
    const annualUnits = lines * personnel * 2000 * 250;
    const defectCostAnnual = annualUnits * (defectRate / 100) * unitCost;
    const defectSavings = defectCostAnnual * 0.28;

    const idleMinutesSavedPerPersonDay = 12;
    const workingDays = 250;
    const idleSavings = lines * personnel * idleMinutesSavedPerPersonDay * workingDays * (hourlyRate / 60);

    const isgSavings = lines * 85000;

    const total = defectSavings + idleSavings + isgSavings;
    return { defectSavings, idleSavings, isgSavings, total };
  }, [lines, personnel, defectRate, unitCost, hourlyRate]);

  const sliders = [
    { key: 'lines', label: t('growth.roi.lines'), value: lines, min: 1, max: 12, step: 1, set: setLines },
    { key: 'personnel', label: t('growth.roi.personnel'), value: personnel, min: 2, max: 40, step: 1, set: setPersonnel },
    { key: 'defectRate', label: t('growth.roi.defectRate'), value: defectRate, min: 0.5, max: 15, step: 0.1, set: setDefectRate },
    { key: 'unitCost', label: t('growth.roi.unitCost'), value: unitCost, min: 5, max: 500, step: 5, set: setUnitCost },
    { key: 'hourlyRate', label: t('growth.roi.hourlyRate'), value: hourlyRate, min: 50, max: 400, step: 10, set: setHourlyRate },
  ] as const;

  return (
    <section
      id="roi-hesaplayici"
      className="section-tint py-16 sm:py-24 lg:py-28 scroll-mt-24 border-y border-vision/10"
      aria-labelledby="roi-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            {t('growth.roi.eyebrow')}
          </p>
          <h2 id="roi-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4">
            {t('growth.roi.title')}{' '}
            <span className="text-vision">{t('growth.roi.titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('growth.roi.description')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="panel-card rounded-2xl p-6 sm:p-8 space-y-6">
            {sliders.map((s) => (
              <div key={s.key}>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={`roi-${s.key}`} className="text-sm font-medium text-[#0A0A0A]">
                    {s.label}
                  </label>
                  <span className="text-sm font-bold text-vision-dark tabular-nums">
                    {s.key === 'defectRate' ? `%${s.value}` : s.value}
                  </span>
                </div>
                <input
                  id={`roi-${s.key}`}
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => {
                    s.set(Number(e.target.value));
                    setCalculated(true);
                  }}
                  className="w-full h-2 rounded-full appearance-none bg-vision-50 accent-vision cursor-pointer"
                />
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCalculated(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
              >
                <Calculator size={16} />
                {t('growth.roi.calculate')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setLines(3);
                  setPersonnel(8);
                  setDefectRate(3.2);
                  setUnitCost(45);
                  setHourlyRate(120);
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <RotateCcw size={14} />
                {t('growth.roi.reset')}
              </button>
            </div>
          </div>

          <div
            className={`panel-card rounded-2xl p-6 sm:p-8 border-vision/20 bg-gradient-to-br from-vision-50/90 to-white transition-opacity ${
              calculated ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-vision-dark mb-6">
              {t('growth.roi.resultsTitle')}
            </h3>
            <div className="space-y-4 mb-8">
              {[
                { label: t('growth.roi.defectSavings'), value: results.defectSavings },
                { label: t('growth.roi.idleSavings'), value: results.idleSavings },
                { label: t('growth.roi.isgSavings'), value: results.isgSavings },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-3 border-b border-vision/10">
                  <span className="text-sm text-gray-600">{row.label}</span>
                  <span className="text-base font-bold text-[#0A0A0A] tabular-nums">
                    ₺{formatCurrency(row.value)}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-[#0c2a30] text-center mb-6">
              <p className="text-xs text-gray-400 mb-1">{t('growth.roi.total')}</p>
              <p className="text-2xl sm:text-3xl font-bold text-vision-light tabular-nums">
                ₺{formatCurrency(results.total)}
                <span className="text-sm font-medium text-gray-500 ml-1">{t('growth.roi.perYear')}</span>
              </p>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-6">{t('growth.roi.disclaimer')}</p>
            <a
              href="/#iletisim"
              data-track="contact_cta"
              data-track-location="roi_calculator"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors w-full sm:w-auto justify-center"
            >
              {t('growth.roi.cta')}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
