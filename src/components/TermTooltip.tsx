import type { ReactNode } from 'react';

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
  edge: 'Görüntü tesisinizdeki sunucuda işlenir — video dışarı çıkmaz, hızlı tepki.',
  cloud: 'Merkezi bulutta işlenir — çok lokasyonlu tesisler için ölçeklenebilir.',
  vms: 'Milestone, Dahua vb. kamera yönetim yazılımları — olay anında popup açılabilir.',
  oee: 'Makine verimliliği skoru: çalışma × hız × kalite.',
  rtsp: 'IP kameraların görüntü akışı protokolü — çoğu marka destekler.',
  onvif: 'Kamera keşfi ve bağlantı standardı — marka bağımsız entegrasyon.',
  idle: 'Boşta kalma: personel veya hatın atıl geçirdiği süre.',
  mes: 'Üretim yürütme sistemi — hat durumu ve iş emirleri.',
} as const;
