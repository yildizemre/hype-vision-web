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

type Module = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  metric: string;
  whatWeDo: string[];
  valueAdd: string[];
};

const modules: Module[] = [
  {
    Icon: Users,
    title: 'Personel Denetimleri',
    desc: 'Sahada kim, nerede, ne yapıyor — vardiya ve alan kurallarına uyum otomatik izlenir.',
    metric: '7/24 izleme',
    whatWeDo: [
      'Kamera görüntüsünden personel konumu ve hareket analizi',
      'Yetkisiz bölge ve vardiya dışı alan girişi tespiti',
      'Görev alanına uyum ve süre takibi',
      'Olayları zaman damgalı kayıt altına alma',
    ],
    valueAdd: [
      'Manuel devriye ve kağıt denetim maliyetini düşürür',
      'İhlalleri anında görünür kılar — vardiya sonuna kalmaz',
      'Disiplin ve süreç uyumunu ölçülebilir hale getirir',
    ],
  },
  {
    Icon: HardHat,
    title: 'İSG Denetimleri',
    desc: 'KKD ve iş güvenliği kuralları 7/24 izlenir; ihlal anında raporlanır.',
    metric: 'Anlık uyarı',
    whatWeDo: [
      'Baret, yelek, maske ve eldiven kullanım kontrolü',
      'Tehlikeli bölge ihlali ve yasak alan girişi uyarısı',
      'Denetim ve iş kazası öncesi kanıt görüntüsü saklama',
      'İSG sorumlusuna anlık bildirim (panel / entegrasyon)',
    ],
    valueAdd: [
      'İş kazası ve ceza riskini azaltır',
      'OSHA / yerel İSG denetimlerine hazırlık kolaylaşır',
      'Saha güvenlik kültürünü veriyle destekler',
    ],
  },
  {
    Icon: ScanEye,
    title: 'Kalite Kontrol',
    desc: 'Hat üzerinde kusur ve sapma anlık yakalanır; fire sahada ayrılır.',
    metric: '0.1–0.3 sn',
    whatWeDo: [
      'Görüntü işleme ile yüzey, montaj ve boyut sapması tespiti',
      'Otomatik OK / red kararı ve hat durdurma entegrasyonu',
      'Hata tipi ve sıklığı raporlama',
      'Kalite trend grafikleri ve vardiya bazlı analiz',
    ],
    valueAdd: [
      'Fire ve hurda maliyetini düşürür',
      'Müşteri şikayetlerini üretimde keser',
      'Kalite ekibinin tekrarlayan kontrol yükünü azaltır',
    ],
  },
  {
    Icon: TrendingUp,
    title: 'Personel Verimliliği',
    desc: 'Aktif çalışma ve hat performansı ölçülür; yönetim net KPI görür.',
    metric: 'Ölçülebilir KPI',
    whatWeDo: [
      'Aktif çalışma vs bekleme süresi ayrımı',
      'İstasyon ve hat bazlı performans skorları',
      'Vardiya ve ekip karşılaştırması',
      'Hedef–gerçekleşen KPI paneli',
    ],
    valueAdd: [
      'Gizli kapasite kayıplarını ortaya çıkarır',
      'Prim ve vardiya planlamasını veriye dayandırır',
      'Fabrika müdürü için tek ekran özeti',
    ],
  },
  {
    Icon: Clock,
    title: 'Boşta Kalma Süreleri',
    desc: 'Idle süre ve kayıp zaman görünür; müdahale hızlanır.',
    metric: 'Kayıp zaman −%',
    whatWeDo: [
      'Personel ve hat boşta kalma (idle) süresi ölçümü',
      'Plansız duraklama ve bekleme analizi',
      'Kayıp zaman ısı haritası ve alarm eşikleri',
      'Haftalık verimlilik kaybı raporu',
    ],
    valueAdd: [
      'Ölçülmeyen kayıp saatleri para kaybı olmaktan çıkar',
      'Darboğaz hatları net gösterir',
      'OEE iyileştirme projelerine somut başlangıç verir',
    ],
  },
  {
    Icon: Factory,
    title: 'Makine & Hat Verimliliği',
    desc: 'Duruş, çalışma oranı ve OEE tek panelde takip edilir.',
    metric: 'Canlı panel',
    whatWeDo: [
      'Hat durumu: çalışıyor / durdu / bakım',
      'Makine ve üretim hızı ile senkron görüntü',
      'OEE bileşenlerinin canlı takibi',
      'ERP / MES ile olay senkronizasyonu',
    ],
    valueAdd: [
      'Plansız duruş süresini kısaltmaya yardımcı olur',
      'Üretim planı ile saha gerçeğini hizalar',
      'Yönetim kuruluna anlık operasyonel görünürlük',
    ],
  },
];

function ModuleCard({
  module,
  isOpen,
  onToggle,
}: {
  module: Module;
  isOpen: boolean;
  onToggle: () => void;
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
            {isOpen ? 'Detayı gizle' : 'Ne yapıyoruz · Ne katıyoruz — tıkla'}
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
                Ne yapıyoruz?
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
                Size ne katıyoruz?
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
            Denetim Modülleri
          </p>
          <h2
            id="denetim-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            Modüle tıklayın —{' '}
            <span className="text-vision">ne yapıyoruz, ne kazanırsınız</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Her modülde saha tarafını ve iş sonucunu ayrı ayrı görün. İsterseniz tek modülle
            başlayıp zamanla genişletin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {modules.map((m) => (
            <ModuleCard
              key={m.title}
              module={m}
              isOpen={openId === m.title}
              onToggle={() => toggle(m.title)}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-xl panel-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="max-w-xl">
            <p className="text-[#0A0A0A] font-semibold text-base sm:text-lg mb-2">
              Hangi modüller tesisinize uygun?
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Demo sırasında modül modül canlı senaryo gösteriyoruz.
            </p>
          </div>
          <a
            href="#demo"
            className="shrink-0 w-full sm:w-auto inline-flex justify-center items-center text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            Modül demo talep et
          </a>
        </div>
      </div>
    </section>
  );
}
