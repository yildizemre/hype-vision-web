import type { ReactNode } from 'react';
import i18n from '../i18n';

export function Term({ children, tip }: { children: ReactNode; tip: string }) {
  return (
    <span className="relative group/tip inline-block">
      <abbr
        className="border-b border-dotted border-vision/60 cursor-help no-underline text-inherit font-medium"
        title={tip}
      >
        {children}
      </abbr>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 px-3 py-2 rounded-lg bg-[#0A0A0A] text-white text-[11px] leading-relaxed opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-opacity z-20 shadow-lg"
      >
        {tip}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0A0A0A]" />
      </span>
    </span>
  );
}

export const TERMS = {
  get edge() {
    return i18n.t('common.terms.edge');
  },
  get cloud() {
    return i18n.t('common.terms.cloud');
  },
  get vms() {
    return i18n.t('common.terms.vms');
  },
  get oee() {
    return i18n.t('common.terms.oee');
  },
  get rtsp() {
    return i18n.t('common.terms.rtsp');
  },
  get onvif() {
    return i18n.t('common.terms.onvif');
  },
  get idle() {
    return i18n.t('common.terms.idle');
  },
  get mes() {
    return i18n.t('common.terms.mes');
  },
} as const;
