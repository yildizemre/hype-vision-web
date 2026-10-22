import {
  Smartphone,
  MessageCircle,
  BellRing,
  Radio,
  LayoutGrid,
  Camera,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

type IntegrationGroup = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
};

export default function LogoStrip() {
  const { t } = useTranslation();
  const protocolBadges = t('sections.logoStrip.protocolBadges', { returnObjects: true }) as string[];
  const groupTexts = t('sections.logoStrip.groups', { returnObjects: true }) as Omit<IntegrationGroup, 'Icon'>[];
  const groups: IntegrationGroup[] = groupTexts.map((group, i) => ({
    ...group,
    Icon: [LayoutGrid, BellRing, MessageCircle, Radio][i] ?? LayoutGrid,
  }));
  const footerItems = t('sections.logoStrip.footer', { returnObjects: true }) as string[];

  return (
    <section
      className="section-tint-deep py-12 sm:py-16 lg:py-20 border-b border-vision/10"
      aria-labelledby="entegrasyon-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-2">
            {t('sections.logoStrip.eyebrow')}
          </p>
          <h2
            id="entegrasyon-heading"
            className="text-lg sm:text-xl font-semibold text-[#0A0A0A] leading-snug mb-2"
          >
            {t('sections.logoStrip.title')}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            {t('sections.logoStrip.description')}
          </p>
        </div>

        {/* Protokol & platform rozetleri */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {protocolBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-vision/20 text-vision-dark shadow-sm"
            >
              {badge === 'ONVIF' || badge === 'RTSP' || badge === 'IP Kamera' ? (
                <Camera size={11} className="text-vision shrink-0" />
              ) : null}
              {badge}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="panel-card rounded-xl p-5 sm:p-6 flex flex-col h-full hover:border-vision/25 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-vision-50 border border-vision/20 flex items-center justify-center shrink-0">
                  <g.Icon size={18} className="text-vision" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[#0A0A0A] text-sm">{g.title}</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{g.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <Smartphone size={13} className="text-vision" />
            {footerItems[0]}
          </span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>{footerItems[1]}</span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>{footerItems[2]}</span>
        </div>
      </div>
    </section>
  );
}
