import { useState } from 'react';
import { Cpu, Car, Scissors, Factory, ArrowRight, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type SectorCase = {
  category: string;
  tagline: string;
  challenge: string[];
  approach: string[];
  outcomeSummary: string;
  stats: { value: string; label: string; hint?: string }[];
  modules: string[];
};

const sectorIcons: Record<string, LucideIcon> = {
  elektronik: Cpu,
  otomotiv: Car,
  tekstil: Scissors,
  metal: Factory,
};

export default function UseCases() {
  const { t } = useTranslation();
  const sectors = t('sections.useCases.sectors', { returnObjects: true }) as Record<string, SectorCase>;
  const sectorKeys = Object.keys(sectors);
  const [activeId, setActiveId] = useState(sectorKeys[0] ?? 'elektronik');
  const active = sectors[activeId];

  if (!active) return null;

  return (
    <section id="sektorler" className="section-tint py-16 sm:py-24 lg:py-32 border-t border-vision/10 scroll-mt-20" aria-labelledby="sektorler-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">{t('sections.useCases.eyebrow')}</p>
          <h2 id="sektorler-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4">
            {t('sections.useCases.title')} <span className="text-vision">{t('sections.useCases.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('sections.useCases.description')}</p>
        </div>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2" role="tablist" aria-label={t('sections.useCases.tablist')}>
          {sectorKeys.map((key) => {
            const item = sectors[key];
            const Icon = sectorIcons[key] ?? Cpu;
            const isActive = key === activeId;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(key)}
                className={`shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl border text-left transition-all ${
                  isActive ? 'bg-vision text-white border-vision' : 'bg-white text-[#0A0A0A] border-gray-200 hover:border-vision/40'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-vision'} />
                <span className="text-sm font-semibold whitespace-nowrap">{item.category}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 panel-card rounded-2xl overflow-hidden border border-vision/15">
          <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-br from-vision-50/80 to-white">
            <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-1">{active.category}</p>
            <p className="text-lg sm:text-xl font-semibold text-[#0A0A0A] leading-snug mb-3">{active.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {active.modules.map((module) => (
                <span key={module} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-vision/25 text-vision-dark">
                  {module}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            <StoryBlock title={t('sections.useCases.challengeTitle')} points={active.challenge} />
            <StoryBlock title={t('sections.useCases.approachTitle')} points={active.approach} />
            <div className="p-6 sm:p-8 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-vision mb-2">{t('sections.useCases.outcomeTitle')}</span>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{active.outcomeSummary}</p>
              <div className="mt-auto grid grid-cols-3 gap-3">
                {active.stats.map((stat) => (
                  <div key={stat.label} className="text-center rounded-lg bg-vision-50/60 border border-vision/10 px-2 py-3">
                    <div className="text-lg font-bold text-[#0A0A0A]">{stat.value}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
                    {stat.hint ? <div className="text-[10px] text-vision-dark/80 mt-0.5">{stat.hint}</div> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-xl bg-white border border-gray-200 panel-card">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[#0A0A0A] mb-1">{t('sections.useCases.ctaTitle')}</p>
            <p className="text-sm text-gray-600 max-w-lg">{t('sections.useCases.ctaDesc')}</p>
          </div>
          <a href="/#iletisim" data-track="contact_cta" data-track-location="use_cases" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors shrink-0">
            {t('sections.useCases.contact')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="p-6 sm:p-8 bg-white">
      <span className="text-[10px] font-bold uppercase tracking-widest text-vision mb-2 block">{title}</span>
      <ul className="space-y-3 mt-4">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-vision" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
