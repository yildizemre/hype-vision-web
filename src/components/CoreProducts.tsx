import { useState } from 'react';
import {
  HardHat,
  ScanEye,
  Users,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  Camera,
  Brain,
  BellRing,
  Monitor,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Term, TERMS } from './TermTooltip';

type Product = {
  id: string;
  Icon: LucideIcon;
  label: string;
  tab: string;
  title: string;
  summary: string;
  detects: string[];
  howItWorks: string;
  panelShows: string[];
  outcome: string;
};

type PanelExample = {
  imageAlt: string;
  title: string;
  subtitle: string;
  event: { time: string; title: string; detail: string; action: string };
  explains: { label: string; text: string }[];
};

function PanelExplainer({ productId }: { productId: string }) {
  const { t } = useTranslation();
  const examples = t('sections.coreProducts.panelExamples', {
    returnObjects: true,
  }) as Record<string, PanelExample>;
  const flowNodes = t('sections.coreProducts.panelExplainer.flowNodes', {
    returnObjects: true,
  }) as string[];
  const ex = examples[productId] ?? examples.panel;
  const image = productId === 'isg' ? '/1.avif' : productId === 'kalite' ? '/3.avif' : productId === 'verimlilik' ? '/3.avif' : '/4.avif';

  return (
    <div className="rounded-2xl bg-slate-800 border border-white/10 overflow-hidden flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-white/10 bg-slate-800/80">
        <div className="flex items-center gap-2 mb-2">
          <Monitor size={16} className="text-vision-light" />
          <p className="text-white font-semibold text-sm">{ex.title}</p>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">{ex.subtitle}</p>
      </div>

      <img src={image} alt={ex.imageAlt} loading="lazy" decoding="async" className="w-full h-36 object-cover object-center border-b border-white/10" />

      <div className="px-5 py-4 bg-slate-900/50 border-b border-white/5">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3">
          {t('sections.coreProducts.panelExplainer.dataFlow')}
        </p>
        <div className="flex items-center justify-between gap-1 text-[10px] text-gray-400">
          {[Camera, Brain, LayoutDashboard, BellRing].map((Icon, i) => (
            <div key={i} className="flex items-center gap-1 flex-1 min-w-0">
              <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                <Icon size={12} className="text-vision-light" />
              </div>
              <span className="truncate hidden sm:inline">{flowNodes[i]}</span>
              {i < 3 && <ArrowRight size={10} className="text-gray-600 shrink-0 mx-0.5" />}
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3">
          {t('sections.coreProducts.panelExplainer.sampleEvent')}
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-vision/20 mb-4">
          <p className="text-[10px] font-mono text-vision-light mb-2">{ex.event.time}</p>
          <p className="text-sm font-semibold text-white mb-1">{ex.event.title}</p>
          <p className="text-xs text-gray-400 mb-2">{ex.event.detail}</p>
          <p className="text-xs text-vision-light font-medium">{ex.event.action}</p>
        </div>
        <ul className="space-y-2">
          {ex.explains.map((item) => (
            <li key={item.label} className="flex gap-2 text-xs">
              <span className="font-semibold text-gray-500 shrink-0 w-14">{item.label}</span>
              <span className="text-gray-400">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CoreProducts() {
  const { t } = useTranslation();
  const raw = t('sections.coreProducts.products', { returnObjects: true }) as Record<string, Omit<Product, 'id' | 'Icon'>>;
  const products: Product[] = [
    { id: 'isg', Icon: HardHat, ...raw.isg },
    { id: 'kalite', Icon: ScanEye, ...raw.kalite },
    { id: 'verimlilik', Icon: Users, ...raw.verimlilik },
    { id: 'panel', Icon: LayoutDashboard, ...raw.panel },
  ];
  const integrations = t('sections.coreProducts.integration.items', { returnObjects: true }) as string[];
  const infraTags = t('sections.coreProducts.infrastructure.tags', { returnObjects: true }) as string[];
  const [activeId, setActiveId] = useState(products[0].id);
  const active = products.find((p) => p.id === activeId) ?? products[0];

  return (
    <section id="urunler" className="section-tint-deep py-16 sm:py-24 lg:py-32 scroll-mt-20" aria-labelledby="urunler-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">{t('sections.coreProducts.eyebrow')}</p>
          <h2 id="urunler-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4">
            {t('sections.coreProducts.title')} <span className="text-vision">{t('sections.coreProducts.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t('sections.coreProducts.description')} <strong className="font-medium text-[#0A0A0A]">{t('sections.coreProducts.descriptionBold')}</strong> {t('sections.coreProducts.descriptionSuffix')} <Term tip={TERMS.mes}>ERP / MES</Term>.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6" role="tablist" aria-label={t('sections.coreProducts.tablist')}>
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === activeId}
              onClick={() => setActiveId(p.id)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                p.id === activeId ? 'bg-vision text-white border-vision' : 'bg-white text-gray-600 border-gray-200 hover:border-vision/40'
              }`}
            >
              <p.Icon size={16} />
              {p.tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-3 panel-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-2">{active.label}</p>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-3 leading-snug">{active.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">{active.summary}</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">{t('sections.coreProducts.whatAnalyzes')}</p>
                <ul className="space-y-2">
                  {active.detects.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-vision shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">{t('sections.coreProducts.panelShows')}</p>
                <ul className="space-y-2">
                  {active.panelShows.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-vision shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-vision-50/60 border border-vision/15">
              <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-2">{t('sections.coreProducts.howWorks')}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{active.howItWorks}</p>
            </div>

            <p className="mt-5 text-sm font-semibold text-[#0A0A0A] leading-relaxed">→ {active.outcome}</p>
          </div>

          <div className="lg:col-span-2">
            <PanelExplainer productId={activeId} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="p-6 sm:p-8 rounded-xl bg-slate-800 text-white">
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3">{t('sections.coreProducts.integration.eyebrow')}</p>
            <h3 className="font-semibold text-lg mb-4">{t('sections.coreProducts.integration.title')}</h3>
            <ul className="space-y-2 mb-6">
              {integrations.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 size={14} className="text-vision shrink-0" />
                  {item} {t('sections.coreProducts.integration.itemSuffix')}
                </li>
              ))}
            </ul>
            <a href="/#iletisim" data-track="contact_cta" data-track-location="core_products" className="text-xs font-semibold text-vision-light hover:text-white flex items-center gap-1.5">
              {t('sections.coreProducts.integration.cta')} <ArrowRight size={14} />
            </a>
          </div>

          <div className="p-6 sm:p-8 rounded-xl panel-card">
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-3">{t('sections.coreProducts.infrastructure.eyebrow')}</p>
            <h3 className="font-semibold text-lg text-[#0A0A0A] mb-3">{t('sections.coreProducts.infrastructure.title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              <Term tip={TERMS.edge}>Edge</Term> / <Term tip={TERMS.cloud}>Cloud</Term> {t('sections.coreProducts.infrastructure.description')}
            </p>
            <div className="flex flex-wrap gap-2">
              {infraTags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a href="/#iletisim" data-track="contact_cta" data-track-location="core_products" className="inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors">
            {t('sections.coreProducts.contact')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
