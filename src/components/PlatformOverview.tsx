import { Camera, Brain, LayoutDashboard, Headphones, ArrowRight, TrendingUp } from 'lucide-react';

const steps = [
  {
    Icon: Camera,
    step: '01',
    title: 'Keşif & kamera eşleştirme',
    desc: 'Sahadaki kameralarınız ve hatlarınız haritalanır. Marka fark etmez.',
  },
  {
    Icon: Brain,
    step: '02',
    title: 'Modül kurulumu',
    desc: 'İSG, kalite veya verimlilik — ihtiyacınız olan modüller devreye alınır.',
  },
  {
    Icon: LayoutDashboard,
    step: '03',
    title: 'Canlı panel & uyarılar',
    desc: 'Alarm, rapor ve kanıt görüntüsü tek ekranda; ERP bağlantısı opsiyonel.',
  },
  {
    Icon: Headphones,
    step: '04',
    title: 'Destek & iyileştirme',
    desc: 'Ekip eğitimi, eşik ayarları ve yeni hat ekleme desteği.',
  },
];

const outcomes = [
  {
    sector: 'Otomotiv yan sanayi',
    metric: '%22 fire düşüşü',
    note: '6 aylık kalite modülü pilotu',
  },
  {
    sector: 'Elektronik & PCB',
    metric: '0.1 sn tespit',
    note: 'Hat içi hata ayırma',
  },
  {
    sector: 'Tekstil üretimi',
    metric: '−%18 idle süre',
    note: 'Vardiya verimlilik takibi',
  },
  {
    sector: 'Metal & makine',
    metric: '7/24 İSG izleme',
    note: 'KKD ihlali anlık alarm',
  },
];

const sectors = [
  'Elektronik',
  'Otomotiv',
  'Tekstil',
  'Gıda',
  'Kimya',
  'Savunma',
  'Metal',
  'Ambalaj',
];

export default function PlatformOverview() {
  return (
    <section
      id="platform"
      className="py-16 sm:py-24 lg:py-32 scroll-mt-20 bg-vision-gradient border-y border-vision-dark/20"
      aria-labelledby="platform-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/70 mb-3">
              Saha deneyimi
            </p>
            <h2
              id="platform-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4"
            >
              Türkiye&apos;de üretim tesislerinde{' '}
              <span className="text-white/90">ölçülebilir sonuçlar</span>
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mb-6">
              2020&apos;den beri endüstriyel görüntü işleme — farklı sektörlerde saha projeleri ve
              pilot kurulumlar. İsim paylaşmadan, tipik sonuç aralıkları:
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 px-6 py-3 rounded-lg transition-colors"
            >
              Tesisinize özel senaryo
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((o) => (
              <div
                key={o.sector}
                className="p-4 sm:p-5 rounded-xl bg-white/12 backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-start gap-2 mb-2">
                  <TrendingUp size={16} className="text-vision-light shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">{o.sector}</p>
                </div>
                <p className="text-lg font-bold text-white mb-0.5">{o.metric}</p>
                <p className="text-[11px] text-white/55">{o.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <s.Icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-white/50">{s.step}</span>
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-white/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/20">
          <p className="text-xs font-medium text-white/60 mb-3">Hizmet verilen sektörler</p>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="text-xs text-white/90 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/45 mt-4">
            2+ yıllık saha deneyimi · modüler kurulum · demo ile tesisinize özel senaryo
          </p>
        </div>
      </div>
    </section>
  );
}
