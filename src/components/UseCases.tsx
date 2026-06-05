import { useState } from 'react';
import { Cpu, Car, Scissors, Factory, ArrowRight, type LucideIcon } from 'lucide-react';

type SectorCase = {
  id: string;
  Icon: LucideIcon;
  category: string;
  tagline: string;
  challenge: {
    title: string;
    points: string[];
  };
  approach: {
    title: string;
    points: string[];
  };
  outcome: {
    title: string;
    summary: string;
    stats: { value: string; label: string; hint?: string }[];
  };
  modules: string[];
};

const sectors: SectorCase[] = [
  {
    id: 'elektronik',
    Icon: Cpu,
    category: 'Elektronik & PCB',
    tagline: 'Fire’yi hat içinde durdurun, manuel kontrol yükünü kaldırın',
    challenge: {
      title: 'Sektördeki sorun',
      points: [
        'Komponent ve lehim hataları geç fark ediliyor, fire birikiyor',
        'Manuel AOI / görsel kontrol darboğaz ve yorgunluk kaynağı',
        'Vardiya sonunda öğrenilen hata — müdahale geç kalıyor',
      ],
    },
    approach: {
      title: 'Hype Vision ile',
      points: [
        'Mevcut hat kameralarına kalite modülü — yeni kamera şart değil',
        '0.1 sn görüntü analizi; OK / red ve hat durdurma entegrasyonu',
        'Hata tipi, sıklık ve vardiya trendi tek panelde',
      ],
    },
    outcome: {
      title: 'Ölçülen sonuç',
      summary:
        'Fire oranı düşer, çıkış kalitesi sabitlenir; kalite ekibi tekrarlayan kontrol yerine kök neden analizine odaklanır.',
      stats: [
        { value: '%22', label: 'Fire azalması', hint: '6 ay pilot' },
        { value: '0.1 sn', label: 'Tespit süresi' },
        { value: '50K+', label: 'Parça / gün' },
      ],
    },
    modules: ['Kalite Kontrol', 'Hat Verimliliği', 'Boşta Kalma'],
  },
  {
    id: 'otomotiv',
    Icon: Car,
    category: 'Otomotiv & Yan Sanayi',
    tagline: 'Hatalı parçayı sevkiyattan önce ayırın, geri dönüş maliyetini kesin',
    challenge: {
      title: 'Sektördeki sorun',
      points: [
        'Boyut ve montaj sapması müşteriye veya son montaja kadar gizli kalıyor',
        'Geri dönüş, hurda ve itibar maliyeti yüksek',
        'İSG ve kalite denetimleri ayrı süreçlerde, veri parçalı',
      ],
    },
    approach: {
      title: 'Hype Vision ile',
      points: [
        'Parça bazlı otomatik red; ERP / MES ile olay senkronu',
        'İSG modülü ile KKD ve tehlikeli bölge aynı altyapıda',
        'Tedarikçi hatlarında modüler devreye alma (3–5 gün)',
      ],
    },
    outcome: {
      title: 'Ölçülen sonuç',
      summary:
        'Sevkiyat öncesi hata yakalanır; hurda ve geri çağırma riski düşer, denetim için dijital kanıt arşivi oluşur.',
      stats: [
        { value: '%95', label: 'Tespit doğruluğu' },
        { value: '0.2 sn', label: 'Kontrol hızı' },
        { value: '100K+', label: 'Parça / gün' },
      ],
    },
    modules: ['Kalite Kontrol', 'İSG Denetimleri', 'Personel Denetimi'],
  },
  {
    id: 'tekstil',
    Icon: Scissors,
    category: 'Tekstil & Konfeksiyon',
    tagline: 'Kumaş fire’sini ruloda değil, üretimde görün',
    challenge: {
      title: 'Sektördeki sorun',
      points: [
        'Renk, dikiş ve kumaş hataları metrelerce üretildikten sonra fark ediliyor',
        'Fire maliyeti sipariş marjını eritiyor',
        'Personel verimliliği ve makine duruşu ölçülemiyor',
      ],
    },
    approach: {
      title: 'Hype Vision ile',
      points: [
        'Hat kamerasında anlık kusur tespiti ve alarm',
        'Metre bazlı fire ve vardiya raporu',
        'Boşta kalma ve makine duruşu ile kayıp zaman analizi',
      ],
    },
    outcome: {
      title: 'Ölçülen sonuç',
      summary:
        'Fire erken kesilir, teslim riski azalır; fabrika müdürü vardiya bazlı kalite ve verimlilik KPI’sını tek ekranda görür.',
      stats: [
        { value: '%94', label: 'Kalite skoru' },
        { value: '0.3 sn', label: 'Tespit' },
        { value: '200K+', label: 'Metre / gün' },
      ],
    },
    modules: ['Kalite Kontrol', 'Boşta Kalma', 'Makine Verimliliği'],
  },
  {
    id: 'metal',
    Icon: Factory,
    category: 'Metal, Plastik & Makine',
    tagline: 'Duruş, İSG ve kaliteyi aynı panelden yönetin',
    challenge: {
      title: 'Sektördeki sorun',
      points: [
        'Plansız makine duruşu ve OEE kaybı geç raporlanıyor',
        'Pres / kaynak hatlarında İSG ihlali örneklemeli denetimle kalıyor',
        'Kalite ve güvenlik verileri Excel’de dağınık',
      ],
    },
    approach: {
      title: 'Hype Vision ile',
      points: [
        'Makine çalışma / duruş ve hat hızı canlı izleme',
        'KKD ve bölge ihlali anlık uyarı + kanıt görüntüsü',
        'OEE bileşenleri ve kalite olayları tek dashboard',
      ],
    },
    outcome: {
      title: 'Ölçülen sonuç',
      summary:
        'Duruş süresi kısalır, İSG riski görünür olur; yönetim operasyonel gerçeği vardiya içinde görür.',
      stats: [
        { value: '−%18', label: 'Idle süre', hint: '3 ay' },
        { value: '7/24', label: 'İSG izleme' },
        { value: 'Canlı', label: 'OEE paneli' },
      ],
    },
    modules: ['İSG Denetimleri', 'Makine Verimliliği', 'Personel Verimliliği'],
  },
];

export default function UseCases() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const active = sectors.find((s) => s.id === activeId) ?? sectors[0];

  return (
    <section
      id="sektorler"
      className="section-tint py-16 sm:py-24 lg:py-32 border-t border-vision/10 scroll-mt-20"
      aria-labelledby="sektorler-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            Sektör Sonuçları
          </p>
          <h2
            id="sektorler-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            Sektörünüzü seçin —{' '}
            <span className="text-vision">sorun, çözüm, sonuç</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Aynı platform; farklı hat gerçekleri. Her vakada mevcut kameralar, modüler kurulum ve
            ölçülebilir iş sonucu.
          </p>
        </div>

        {/* Sektör seçici */}
        <div
          className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin snap-x snap-mandatory"
          role="tablist"
          aria-label="Sektör seçimi"
        >
          {sectors.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`sector-panel-${s.id}`}
                id={`sector-tab-${s.id}`}
                onClick={() => setActiveId(s.id)}
                className={`snap-start shrink-0 flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-vision text-white border-vision shadow-md'
                    : 'bg-white text-[#0A0A0A] border-gray-200 hover:border-vision/40 hover:bg-vision-50/50'
                }`}
              >
                <s.Icon
                  size={18}
                  className={isActive ? 'text-white' : 'text-vision'}
                  strokeWidth={1.75}
                />
                <span className="text-sm font-semibold whitespace-nowrap">{s.category}</span>
              </button>
            );
          })}
        </div>

        {/* Detay paneli */}
        <div
          id={`sector-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`sector-tab-${active.id}`}
          className="mt-6 sm:mt-8 panel-card rounded-2xl overflow-hidden border border-vision/15"
        >
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gradient-to-br from-vision-50/80 to-white">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-vision/20 flex items-center justify-center shrink-0 shadow-sm">
                  <active.Icon size={26} className="text-vision" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-1">
                    {active.category}
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-[#0A0A0A] leading-snug max-w-2xl">
                    {active.tagline}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-md">
                {active.modules.map((mod) => (
                  <span
                    key={mod}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-vision/25 text-vision-dark"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            <StoryBlock
              step="01"
              title={active.challenge.title}
              points={active.challenge.points}
              variant="muted"
            />
            <StoryBlock
              step="02"
              title={active.approach.title}
              points={active.approach.points}
              variant="accent"
            />
            <div className="p-6 sm:p-8 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-vision mb-2">
                03 · {active.outcome.title}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{active.outcome.summary}</p>
              <div className="mt-auto grid grid-cols-3 gap-3 sm:gap-4">
                {active.outcome.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center sm:text-left rounded-lg bg-vision-50/60 border border-vision/10 px-2 py-3 sm:px-3"
                  >
                    <div className="text-lg sm:text-xl font-bold text-[#0A0A0A]">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                    {stat.hint && (
                      <div className="text-[10px] text-vision-dark/80 mt-0.5">{stat.hint}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alt özet + CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-xl bg-white border border-gray-200 panel-card">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[#0A0A0A] mb-1">Sektörünüz listede yok mu?</p>
            <p className="text-sm text-gray-600 max-w-lg">
              Gıda, kimya, lojistik ve daha fazlasında aynı modüllerle çalışıyoruz — demo’da
              tesisinize özel senaryo gösteriyoruz.
            </p>
          </div>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors shrink-0"
          >
            Sektörünüze özel vaka
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function StoryBlock({
  step,
  title,
  points,
  variant,
}: {
  step: string;
  title: string;
  points: string[];
  variant: 'muted' | 'accent';
}) {
  return (
    <div
      className={`p-6 sm:p-8 ${
        variant === 'accent' ? 'bg-vision-50/30' : 'bg-white'
      }`}
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-vision mb-2 block">
        {step} · {title}
      </span>
      <ul className="space-y-3 mt-4">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
            <span
              className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                variant === 'accent' ? 'bg-vision' : 'bg-gray-300'
              }`}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
