import { useState } from 'react';
import {
  Users,
  HardHat,
  ScanEye,
  TrendingUp,
  Clock,
  Factory,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Module = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  metric: string;
  whatWeDo: string[];
  valueAdd: string[];
};

const moduleIcons = [Users, HardHat, ScanEye, TrendingUp, Clock, Factory];

function ModuleCard({
  module,
  isOpen,
  onToggle,
  labels,
}: {
  module: Module;
  isOpen: boolean;
  onToggle: () => void;
  labels: { expandOpen: string; expandClosed: string; whatWeDo: string; valueAdd: string };
}) {
  const { Icon, title, desc, metric, whatWeDo, valueAdd } = module;

  return (
    <article className="bg-white rounded-xl border border-vision/15 overflow-hidden panel-card transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 flex gap-4 items-start"
        aria-expanded={isOpen}
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-vision-50 border border-vision/20 flex items-center justify-center shrink-0">
          <Icon size={22} className="text-vision" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="font-semibold text-[#0A0A0A] text-base sm:text-lg">{title}</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-vision-50 text-vision-dark">
              {metric}
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          <p className="text-xs text-vision-dark font-medium mt-2">
            {isOpen ? labels.expandOpen : labels.expandClosed}
          </p>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-vision transition-transform duration-200 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-gray-100 grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-3">
                {labels.whatWeDo}
              </p>
              <ul className="space-y-2">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-vision mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:border-l sm:border-gray-100 sm:pl-6 pt-5 sm:pt-0 border-t border-gray-100 sm:border-t-0">
              <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-3">
                {labels.valueAdd}
              </p>
              <ul className="space-y-2">
                {valueAdd.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                    <span className="text-vision shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function InspectionModules() {
  const { t } = useTranslation();
  const moduleTexts = t('sections.inspectionModules.modules', { returnObjects: true }) as Omit<Module, 'Icon'>[];
  const modules: Module[] = moduleTexts.map((module, i) => ({
    ...module,
    Icon: moduleIcons[i] ?? Users,
  }));
  const labels = {
    expandOpen: t('sections.inspectionModules.expandOpen'),
    expandClosed: t('sections.inspectionModules.expandClosed'),
    whatWeDo: t('sections.inspectionModules.whatWeDo'),
    valueAdd: t('sections.inspectionModules.valueAdd'),
  };
  const [openId, setOpenId] = useState<string | null>(modules[0].title);

  const toggle = (title: string) => {
    setOpenId((prev) => (prev === title ? null : title));
  };

  return (
    <section
      id="denetim"
      className="section-tint py-16 sm:py-24 lg:py-32 scroll-mt-20 border-t border-vision/10"
      aria-labelledby="denetim-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            {t('sections.inspectionModules.eyebrow')}
          </p>
          <h2
            id="denetim-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            {t('sections.inspectionModules.title')} <span className="text-vision">{t('sections.inspectionModules.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t('sections.inspectionModules.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {modules.map((m) => (
            <ModuleCard
              key={m.title}
              module={m}
              isOpen={openId === m.title}
              onToggle={() => toggle(m.title)}
              labels={labels}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-xl panel-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="max-w-xl">
            <p className="text-[#0A0A0A] font-semibold text-base sm:text-lg mb-2">
              {t('sections.inspectionModules.ctaTitle')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('sections.inspectionModules.ctaDesc')}
            </p>
          </div>
          <a
            href="/#iletisim"
            data-track="contact_cta"
            data-track-location="inspection"
            className="shrink-0 w-full sm:w-auto inline-flex justify-center items-center text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            {t('sections.inspectionModules.contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
