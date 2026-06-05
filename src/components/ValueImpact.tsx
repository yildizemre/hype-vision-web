import {
  PiggyBank,
  Shield,
  Zap,
  BarChart3,
  Users,
  ScanEye,
  XCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const impacts = [
  {
    Icon: PiggyBank,
    title: 'Maliyet kontrolü',
    points: [
      'Fire, hurda ve idle süre kaybını görünür kılar',
      'Manuel denetim ve devriye yükünü azaltır',
      'Yanlış üretimi hat içinde durdurur',
    ],
  },
  {
    Icon: Shield,
    title: 'Risk ve uyum',
    points: [
      'İSG ihlallerinde anlık uyarı ve kanıt',
      'İş kazası ve ceza riskini düşürme',
      'Denetimlere hazır rapor arşivi',
    ],
  },
  {
    Icon: Zap,
    title: 'Operasyonel hız',
    points: [
      'Kararlar vardiya içinde verilir',
      'ERP / MES ile senkron veri akışı',
      '3–5 günde modüler canlıya alma',
    ],
  },
  {
    Icon: BarChart3,
    title: 'Ölçülebilir yönetim',
    points: [
      'Fabrika müdürü için tek panel',
      'KPI: verimlilik, kalite, İSG, idle',
      'Vardiya ve hat bazlı karşılaştırma',
    ],
  },
];

type CompareRow = {
  dimension: string;
  human: string;
  humanNote?: string;
  ai: string;
  aiNote?: string;
};

const compareRows: CompareRow[] = [
  {
    dimension: 'Kapsam',
    human: 'Örneklemeli kontrol — tüm hat görülmez',
    humanNote: 'Vardiya başı / sonu, belirli saatler',
    ai: '7/24, her kamera karesi',
    aiNote: 'İnsan yorulmadan sürekli izleme',
  },
  {
    dimension: 'İSG & KKD',
    human: 'Baret / yelek kontrolü kaçırılabilir',
    humanNote: 'İhlal sonradan fark edilir',
    ai: 'Anlık ihlal uyarısı + kanıt görüntüsü',
    aiNote: 'Denetim ve iş kazanı öncesi müdahale',
  },
  {
    dimension: 'Kalite',
    human: 'Göz yorgunluğu, geç tespit',
    humanNote: 'Fire birikir, müdahale gecikir',
    ai: '0.1–0.3 sn hat içi tespit',
    aiNote: 'OK / red, otomatik ayırma',
  },
  {
    dimension: 'Kayıt',
    human: 'Kağıt, Excel, hafıza',
    humanNote: 'Denetimde kanıt zayıf',
    ai: 'Zaman damgalı dijital arşiv',
    aiNote: 'Olay + görüntü tek panelde',
  },
  {
    dimension: 'Müdahale',
    human: 'Vardiya sonunda öğrenilir',
    humanNote: 'Kayıp saatler geri dönülmez',
    ai: 'Anlık alarm ve panel bildirimi',
    aiNote: 'ERP / MES ile senkron opsiyon',
  },
  {
    dimension: 'Maliyet & ölçek',
    human: 'Sürekli iş gücü ve devriye',
    humanNote: 'Hat sayısı arttıkça maliyet artar',
    ai: 'Mevcut kamera + modüler AI',
    aiNote: 'Yeni kamera şart değil',
  },
];

export default function ValueImpact() {
  return (
    <section
      id="deger"
      className="section-tint-deep py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="deger-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            İş değeri
          </p>
          <h2
            id="deger-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            Sadece teknoloji değil —{' '}
            <span className="text-vision">ölçülebilir kazanç</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Hype Vision, mevcut kameralarınızla çalışır; tesisinize maliyet, risk, hız ve
            yönetim görünürlüğü katar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {impacts.map((item) => (
            <div key={item.title} className="panel-card rounded-xl p-5 sm:p-6">
              <div className="w-10 h-10 rounded-lg bg-vision-50 flex items-center justify-center mb-4">
                <item.Icon size={20} className="text-vision" />
              </div>
              <h3 className="font-semibold text-[#0A0A0A] mb-3 text-sm sm:text-base">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="text-xs sm:text-sm text-gray-600 flex gap-2">
                    <span className="text-vision shrink-0">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Karşılaştırma */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            Karşılaştırma
          </p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0A0A0A] leading-tight">
            İnsan denetimi{' '}
            <span className="text-gray-300 font-light mx-1 sm:mx-2">vs</span>{' '}
            <span className="text-vision">Hype Vision</span>
          </h3>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
            Aynı tesis, aynı hat — fark süreklilik, hız ve ölçülebilirlikte.
          </p>
        </div>

        <div className="rounded-2xl border border-vision/20 overflow-hidden shadow-lg shadow-vision/5 bg-white">
          {/* Sütun başlıkları — masaüstü */}
          <div className="hidden md:grid md:grid-cols-2">
            <div className="flex items-center gap-4 p-6 lg:p-8 bg-gray-50 border-b border-r border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gray-200/80 flex items-center justify-center shrink-0">
                <Users size={22} className="text-gray-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Geleneksel
                </p>
                <h4 className="font-semibold text-[#0A0A0A] text-lg">İnsan denetimi</h4>
                <p className="text-sm text-gray-500 mt-0.5">Örneklemeli, yorulur, geç kalır</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 lg:p-8 bg-gradient-to-br from-vision-50 to-vision-100/80 border-b border-vision/15">
              <div className="w-12 h-12 rounded-xl bg-vision flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-1">
                  Yapay zeka
                </p>
                <h4 className="font-semibold text-[#0A0A0A] text-lg">Hype Vision</h4>
                <p className="text-sm text-vision-dark mt-0.5">7/24, kanıtlı, anlık müdahale</p>
              </div>
            </div>
          </div>

          {/* Satırlar */}
          <div className="divide-y divide-gray-100">
            {compareRows.map((row, index) => (
              <CompareRowItem key={row.dimension} row={row} isLast={index === compareRows.length - 1} />
            ))}
          </div>

          {/* Özet şerit */}
          <div className="grid md:grid-cols-2 border-t border-gray-100">
            <div className="p-5 sm:p-6 bg-gray-50/80 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <XCircle size={20} className="text-gray-400 shrink-0" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-700">Sonuç:</span> Darboğaz insan kapasitesi;
                veri geç ve parçalı gelir.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-vision/10 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-vision shrink-0" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#0A0A0A]">Sonuç:</span> Sürekli denetim, anlık alarm,
                tek panelde KPI.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 max-w-lg mx-auto">
          İnsan denetimi tamamen kalkmaz — kritik kararlar yönetimde; rutin ve sürekli kontrol AI’ya
          devredilir.
        </p>
      </div>
    </section>
  );
}

function CompareRowItem({ row }: { row: CompareRow; isLast: boolean }) {
  return (
    <div className="relative md:py-1">
      <div className="flex justify-center pt-4 pb-2 md:py-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:z-10 pointer-events-none">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#0A0A0A] shadow-sm">
          {row.dimension}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 sm:p-6 md:pr-12 lg:pr-16 md:border-r border-gray-100 bg-gray-50/60 md:bg-white">
          <p className="md:hidden text-[10px] font-bold uppercase text-gray-400 mb-2 flex items-center gap-1.5">
            <Users size={14} /> İnsan denetimi
          </p>
          <div className="flex gap-3">
            <XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-600 text-sm sm:text-base leading-snug">{row.human}</p>
              {row.humanNote && (
                <p className="text-xs text-gray-400 mt-1.5">{row.humanNote}</p>
              )}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 md:pl-12 lg:pl-16 bg-vision-50/50 border-t md:border-t-0 border-vision/10">
          <p className="md:hidden text-[10px] font-bold uppercase text-vision-dark mb-2 flex items-center gap-1.5">
            <ScanEye size={14} /> Hype Vision
          </p>
          <div className="flex gap-3">
            <CheckCircle2 size={18} className="text-vision shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0A0A0A] text-sm sm:text-base leading-snug">{row.ai}</p>
              {row.aiNote && (
                <p className="text-xs text-vision-dark/90 mt-1.5">{row.aiNote}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
