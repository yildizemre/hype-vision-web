import { Shield, Server, HardHat, FileCheck, Lock, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ICONS = {
  kvkk: Shield,
  edge: Server,
  isg: HardHat,
  iso: FileCheck,
  tls: Lock,
  onvif: Camera,
} as const;

type TrustBadgesProps = {
  variant?: 'hero' | 'footer' | 'inline';
};

export default function TrustBadges({ variant = 'inline' }: TrustBadgesProps) {
  const { t } = useTranslation();
  const items = t('growth.trustBadges.items', { returnObjects: true }) as {
    id: keyof typeof ICONS;
    label: string;
    desc: string;
  }[];

  if (variant === 'hero') {
    return (
      <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
        {items.slice(0, 4).map((item) => {
          const Icon = ICONS[item.id] ?? Shield;
          return (
            <span
              key={item.id}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 bg-white/5 text-xs text-white/85 backdrop-blur-sm"
              title={item.desc}
            >
              <Icon size={14} className="text-vision-light shrink-0" />
              {item.label}
            </span>
          );
        })}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
        {items.map((item) => {
          const Icon = ICONS[item.id] ?? Shield;
          return (
            <div key={item.id} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/8">
              <div className="w-8 h-8 rounded-lg bg-vision/10 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-vision-light" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-gray-300 leading-tight">{item.label}</p>
                <p className="text-[10px] text-gray-600 mt-0.5 leading-snug">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {items.map((item) => {
        const Icon = ICONS[item.id] ?? Shield;
        return (
          <div
            key={item.id}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-white border border-vision/15 shadow-sm"
            title={item.desc}
          >
            <Icon size={16} className="text-vision shrink-0" />
            <span className="text-xs font-semibold text-[#0A0A0A]">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
