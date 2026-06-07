import { Shield, Zap, Calendar, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Metric = { value: string; label: string };

export default function TrustStrip() {
  const { t } = useTranslation();
  const main = t('sections.trustStrip.main');
  const mainBold = t('sections.trustStrip.mainBold');
  const [mainPrefix = '', mainSuffix = ''] = main.split(mainBold);
  const rawMetrics = t('sections.trustStrip.metrics', { returnObjects: true }) as Metric[];
  const metrics: { Icon?: LucideIcon; value: string; label: string }[] = rawMetrics.map((m, i) => ({
    ...m,
    Icon: i === 0 ? Calendar : i === 2 ? Zap : undefined,
  }));

  return (
    <section className="section-tint border-y border-vision/10 py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-vision-50 border border-vision/20 flex items-center justify-center shrink-0">
              <Shield size={16} className="text-vision" />
            </div>
            <div>
              <p className="text-sm lg:text-base text-[#0A0A0A] font-medium leading-relaxed">
                {mainPrefix}
                <strong className="font-semibold">{mainBold}</strong>
                {mainSuffix}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {t('sections.trustStrip.sub')}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:gap-10 justify-start lg:justify-end">
            {metrics.map((m) => (
              <div key={m.label} className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-1.5">
                  {m.Icon && <m.Icon size={14} className="text-vision" />}
                  <span className="text-xl font-bold text-vision">{m.value}</span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
