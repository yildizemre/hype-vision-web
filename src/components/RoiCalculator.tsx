import { useMemo, useState } from 'react';
import { Calculator, ArrowRight, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function formatCurrency(n: number) {
  return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(Math.round(n));
}

function clamp(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

const DEFAULTS = {
  lines: 3,
  personnel: 8,
  defectRate: 3.2,
  unitCost: 45,
  hourlyRate: 120,
} as const;

type FieldKey = keyof typeof DEFAULTS;

type FieldConfig = {
  key: FieldKey;
  label: string;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
};

export default function RoiCalculator() {
  const { t } = useTranslation();
  const [lines, setLines] = useState(DEFAULTS.lines);
  const [personnel, setPersonnel] = useState(DEFAULTS.personnel);
  const [defectRate, setDefectRate] = useState(DEFAULTS.defectRate);
  const [unitCost, setUnitCost] = useState(DEFAULTS.unitCost);
  const [hourlyRate, setHourlyRate] = useState(DEFAULTS.hourlyRate);
  const [calculated, setCalculated] = useState(true);

  const setters: Record<FieldKey, (n: number) => void> = {
    lines: setLines,
    personnel: setPersonnel,
    defectRate: setDefectRate,
    unitCost: setUnitCost,
    hourlyRate: setHourlyRate,
  };

  const values: Record<FieldKey, number> = {
    lines,
    personnel,
    defectRate,
    unitCost,
    hourlyRate,
  };

  const fields: FieldConfig[] = [
    { key: 'lines', label: t('growth.roi.lines'), min: 1, max: 99, step: 1 },
    { key: 'personnel', label: t('growth.roi.personnel'), min: 1, max: 200, step: 1 },
    { key: 'defectRate', label: t('growth.roi.defectRate'), min: 0, max: 100, step: 0.1, suffix: '%' },
    { key: 'unitCost', label: t('growth.roi.unitCost'), min: 0, max: 999999, step: 1, prefix: '₺' },
    { key: 'hourlyRate', label: t('growth.roi.hourlyRate'), min: 0, max: 99999, step: 1, prefix: '₺' },
  ];

  const updateField = (key: FieldKey, raw: string, min: number, max: number) => {
    const parsed = raw === '' ? min : Number(raw);
    setters[key](clamp(parsed, min, max));
    setCalculated(true);
  };

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

  const reset = () => {
    setLines(DEFAULTS.lines);
    setPersonnel(DEFAULTS.personnel);
    setDefectRate(DEFAULTS.defectRate);
    setUnitCost(DEFAULTS.unitCost);
    setHourlyRate(DEFAULTS.hourlyRate);
    setCalculated(true);
  };

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
          <div className="panel-card rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-5">
            {fields.map((field) => (
              <div key={field.key}>
                <label htmlFor={`roi-${field.key}`} className="block text-sm font-medium text-[#0A0A0A] mb-1.5">
                  {field.label}
                </label>
                <div className="relative">
                  {field.prefix ? (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                      {field.prefix}
                    </span>
                  ) : null}
                  <input
                    id={`roi-${field.key}`}
                    type="number"
                    inputMode="decimal"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={values[field.key]}
                    onChange={(e) => updateField(field.key, e.target.value, field.min, field.max)}
                    className={`w-full rounded-xl border border-gray-200 bg-white py-2.5 text-sm text-[#0A0A0A] tabular-nums focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15 transition-shadow ${
                      field.prefix ? 'pl-8 pr-10' : field.suffix ? 'pl-3 pr-10' : 'px-3'
                    }`}
                  />
                  {field.suffix ? (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                      {field.suffix}
                    </span>
                  ) : null}
                </div>
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
                onClick={reset}
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
