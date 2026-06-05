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
import { Term, TERMS } from './TermTooltip';

type Product = {
  id: string;
  Icon: LucideIcon;
  label: string;
  title: string;
  summary: string;
  detects: string[];
  howItWorks: string;
  panelShows: string[];
  outcome: string;
};

const products: Product[] = [
  {
    id: 'isg',
    Icon: HardHat,
    label: '01 · İSG Analizleri',
    title: 'KKD ve iş güvenliği — 7/24, kanıtlı',
    summary:
      'Saha kameralarından gelen görüntüde baret, yelek, maske, eldiven ve tehlikeli bölge ihlalleri yapay zeka ile sürekli analiz edilir. İnsan denetimi örneklemeli kalır; AI her kareyi izler.',
    detects: [
      'Baret, yelek, maske, eldiven eksikliği',
      'Tehlikeli / yasak bölge girişi',
      'İSG kuralına aykırı davranış ve duruş',
      'Olay anı görüntüsü ve zaman damgası',
    ],
    howItWorks:
      'Mevcut IP kameralarınıza modül bağlanır. Görüntü tesis içinde veya bulutta işlenir; ihlal anında panel, WhatsApp veya VMS popup ile uyarı gider.',
    panelShows: [
      'Günlük / vardiya ihlal sayısı',
      'Bölge bazlı ihlal ısı haritası',
      'Kanıt fotoğrafı ve video klibi',
      'İSG sorumlusu için filtrelenmiş alarm listesi',
    ],
    outcome:
      'İş kazası riski erken görünür; denetimlerde dijital kanıt arşivi oluşur, manuel devriye yükü azalır.',
  },
  {
    id: 'kalite',
    Icon: ScanEye,
    label: '02 · Kalite Kontrol',
    title: 'Hat içi hata tespiti — fire birikmeden',
    summary:
      'Üretim hattındaki kusur, montaj hatası, renk / boyut sapması ve yüzey defektleri 0.1–0.3 saniyede tespit edilir. İnsan gözünün kaçırdığı veya geç fark ettiği hatalar hat içinde durdurulur.',
    detects: [
      'Yüzey, lehim, montaj ve boyut sapması',
      'Eksik / hatalı parça, renk uyumsuzluğu',
      'OK / red kararı ve hata sınıflandırması',
      'Fire trendi ve vardiya karşılaştırması',
    ],
    howItWorks:
      'Hat kamerası görüntüsü modele göre analiz edilir. Hata tespitinde uyarı, red sinyali veya hat durdurma (PLC / MES entegrasyonu) tetiklenebilir.',
    panelShows: [
      'Anlık hata oranı ve hata tipi dağılımı',
      'Son 24 saat / vardiya kalite grafiği',
      'Red edilen parça sayacı',
      'Kalite mühendisi için detay görüntüsü',
    ],
    outcome:
      'Fire ve hurda maliyeti düşer; müşteri şikayeti üretim aşamasında kesilir, kalite ekibi kök neden analizine odaklanır.',
  },
  {
    id: 'verimlilik',
    Icon: Users,
    label: '03 · Personel & Verimlilik',
    title: 'Kim ne kadar aktif — kayıp zaman görünür',
    summary:
      'Personel denetimleri, aktif çalışma süresi, istasyon bazlı performans ve boşta kalma (idle) ölçülür. Vardiya sonunda değil, vardiya içinde müdahale edilir.',
    detects: [
      'Aktif çalışma vs bekleme / boşta kalma',
      'İstasyon ve hat bazlı performans skoru',
      'Alan ihlali ve yetkisiz bölge',
      'Vardiya ve ekip karşılaştırması',
    ],
    howItWorks:
      'Kamera + hareket analizi ile personel aktivitesi sınıflandırılır. Tanımlı eşikler aşıldığında yönetime ve vardiya amirine KPI özeti ve alarm gider.',
    panelShows: [
      'Vardiya verimlilik yüzdesi',
      'Boşta kalma süresi (dk) ve trend',
      'Hat / istasyon bazlı performans tablosu',
      'Haftalık kayıp zaman raporu',
    ],
    outcome:
      'Gizli kapasite kaybı ortaya çıkar; prim, vardiya planı ve verimlilik iyileştirmesi veriye dayanır.',
  },
  {
    id: 'panel',
    Icon: LayoutDashboard,
    label: '04 · Canlı Vision Paneli',
    title: 'Tüm modüller tek ekranda — gerçek zamanlı',
    summary:
      'İSG, kalite, verimlilik ve güvenlik verileri ayrı Excel’lere değil, tek canlı panele akar. Fabrika müdürü, kalite ve İSG sorumlusu kendi filtresini görür.',
    detects: [
      'Tüm modüllerden gelen olay ve alarm',
      'KPI özet kartları ve trend grafikleri',
      'Kritik alarm önceliklendirme',
      'ERP / MES senkron durumu',
    ],
    howItWorks:
      'Web tabanlı panel; tarayıcıdan erişim. Rol bazlı görünüm, olay geçmişi arama ve dışa aktarma. API ile mevcut sistemlerinize veri gönderimi.',
    panelShows: [
      'Canlı hat durumu ve açık alarm sayısı',
      'Günlük İSG / kalite / verimlilik özeti',
      'Olay detayı + kanıt görüntüsü',
      'Entegrasyon ve kamera sağlık durumu',
    ],
    outcome:
      'Karar gecikmesi azalır; yönetim kuruluna net, ölçülebilir operasyonel görünürlük sunulur.',
  },
];

const integrations = ['SAP', 'Oracle', 'Dynamics 365', 'Salesforce'];

const panelExamples: Record<
  string,
  {
    image?: string;
    imageAlt?: string;
    imageType?: 'panel' | 'saha';
    title: string;
    subtitle: string;
    event: { time: string; title: string; detail: string; action: string };
    explains: { label: string; text: string }[];
  }
> = {
  isg: {
    image: '/1.avif',
    imageAlt: 'Forklift yaya risk analizi — AI görüntü işleme',
    title: 'Bu ekran ne?',
    subtitle: 'İSG sorumlusunun gördüğü canlı panel — tarayıcıdan açılır, kurulum gerekmez.',
    event: {
      time: '14:32',
      title: 'Baret ihlali · Montaj hattı',
      detail: 'Kamera 4 · Tehlikeli bölge sınırı',
      action: '→ WhatsApp + VMS popup gönderildi',
    },
    explains: [
      { label: 'Sol üst', text: 'Bugünkü ihlal sayısı — vardiya bazlı' },
      { label: 'Orta', text: 'Olay kartı: ne, nerede, ne zaman' },
      { label: 'Sağ', text: 'Kanıt görüntüsü — denetim için arşivlenir' },
    ],
  },
  kalite: {
    image: '/3.avif',
    imageAlt: 'Konveyör hattında kalite ve personel izleme',
    title: 'Bu ekran ne?',
    subtitle: 'Kalite mühendisinin hata takip ekranı — OK/red kararı ve fire trendi.',
    event: {
      time: '09:15',
      title: 'Lehim hatası · PCB hattı',
      detail: 'Otomatik red · 0.12 sn tespit',
      action: '→ Hat durdurma sinyali (opsiyonel)',
    },
    explains: [
      { label: 'Üst', text: 'Anlık kalite oranı (%98+ hedef)' },
      { label: 'Orta', text: 'Hata tipi: lehim, montaj, boyut…' },
      { label: 'Alt', text: 'Vardiya fire raporu — Excel yerine panel' },
    ],
  },
  verimlilik: {
    image: '/panel.jpeg',
    imageAlt: 'Hype Vision panel — bölge verimlilik detayı ekranı',
    imageType: 'panel',
    title: 'Bu ekran ne?',
    subtitle: 'Bölge verimlilik detayı — verimli çalışma, boşta kalma ve mola saatlik takip edilir.',
    event: {
      time: 'Vardiya A',
      title: 'Idle süre eşiği aşıldı · Paketleme',
      detail: '42 dk boşta kalma · hedef 25 dk',
      action: '→ Vardiya amirine bildirim',
    },
    explains: [
      { label: 'Üst', text: 'Verimli / boşta / mola / kamera dışı özeti' },
      { label: 'Grafik', text: 'Saatlik zaman dağılımı — vardiya içi trend' },
      { label: 'Tablo', text: 'Saat bazlı detay ve verimlilik %' },
    ],
  },
  panel: {
    image: '/panel.jpeg',
    imageAlt: 'Hype Vision canlı panel — bölge verimlilik ve KPI ekranı',
    imageType: 'panel',
    title: 'Bu ekran ne?',
    subtitle: 'Web tabanlı canlı panel — tarayıcıdan açılır, rol bazlı görünüm.',
    event: {
      time: 'Canlı',
      title: '3 açık alarm · 0 kritik',
      detail: '2 İSG · 1 kalite · 0 güvenlik',
      action: '→ Tüm modüller senkron',
    },
    explains: [
      { label: 'Sol', text: 'Modül menüsü: İSG, personel, verimlilik, güvenlik' },
      { label: 'Orta', text: 'KPI kartları ve saatlik performans grafiği' },
      { label: 'Alt', text: 'Saat bazlı detay tablosu — Excel yerine canlı veri' },
    ],
  },
};

function PanelExplainer({ productId }: { productId: string }) {
  const ex = panelExamples[productId] ?? panelExamples.panel;

  return (
    <div className="rounded-2xl bg-slate-800 border border-white/10 overflow-hidden flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-white/10 bg-slate-800/80">
        <div className="flex items-center gap-2 mb-2">
          <Monitor size={16} className="text-vision-light" />
          <p className="text-white font-semibold text-sm">{ex.title}</p>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">{ex.subtitle}</p>
      </div>

      {ex.image && (
        <div className="border-b border-white/10 bg-slate-900">
          <img
            src={ex.image}
            alt={ex.imageAlt ?? ''}
            loading="lazy"
            decoding="async"
            className={
              ex.imageType === 'panel'
                ? 'w-full h-auto max-h-[240px] sm:max-h-[280px] object-contain object-top'
                : 'w-full h-32 sm:h-40 object-cover object-center opacity-90'
            }
          />
          <p className="px-4 py-2 text-[10px] text-gray-500 bg-slate-900/80">
            {ex.imageType === 'panel'
              ? 'Canlı Vision Paneli — gerçek ekran görüntüsü'
              : 'Örnek saha görüntüsü — AI analiz katmanı'}
          </p>
        </div>
      )}

      {/* Akış şeması */}
      <div className="px-5 py-4 bg-slate-900/50 border-b border-white/5">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3">Veri akışı</p>
        <div className="flex items-center justify-between gap-1 text-[10px] text-gray-400">
          {[
            { Icon: Camera, label: 'Kamera' },
            { Icon: Brain, label: 'AI' },
            { Icon: LayoutDashboard, label: 'Panel' },
            { Icon: BellRing, label: 'Alarm' },
          ].map((node, i) => (
            <div key={node.label} className="flex items-center gap-1 flex-1 min-w-0">
              <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                <node.Icon size={12} className="text-vision-light" />
              </div>
              <span className="truncate hidden sm:inline">{node.label}</span>
              {i < 3 && <ArrowRight size={10} className="text-gray-600 shrink-0 mx-0.5" />}
            </div>
          ))}
        </div>
      </div>

      {/* Örnek olay kartı */}
      <div className="p-5 sm:p-6 flex-1">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3">Örnek olay</p>
        <div className="p-4 rounded-xl bg-white/5 border border-vision/20 mb-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-mono text-vision-light">{ex.event.time}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
              Yeni
            </span>
          </div>
          <p className="text-sm font-semibold text-white mb-1">{ex.event.title}</p>
          <p className="text-xs text-gray-400 mb-2">{ex.event.detail}</p>
          <p className="text-xs text-vision-light font-medium">{ex.event.action}</p>
        </div>

        <ul className="space-y-2">
          {ex.explains.map((e) => (
            <li key={e.label} className="flex gap-2 text-xs">
              <span className="font-semibold text-gray-500 shrink-0 w-14">{e.label}</span>
              <span className="text-gray-400">{e.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-5 py-3 bg-vision/10 border-t border-vision/20">
        <p className="text-[11px] text-vision-light text-center">
          Demo&apos;da kendi tesis senaryonuzla canlı gösterilir
        </p>
      </div>
    </div>
  );
}

export default function CoreProducts() {
  const [activeId, setActiveId] = useState(products[0].id);
  const active = products.find((p) => p.id === activeId) ?? products[0];

  return (
    <section
      id="urunler"
      className="section-tint-deep py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="urunler-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            Ürün
          </p>
          <h2
            id="urunler-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            İSG analizleri, kalite kontrol, verimlilik —{' '}
            <span className="text-vision">her biri ayrıntılı anlatıldı.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Hype Vision tek platform: kameralardan görüntü alır, yapay zeka ile analiz eder,
            sonucu{' '}
            <strong className="font-medium text-[#0A0A0A]">canlı panele</strong> ve isteğe bağlı{' '}
            <Term tip={TERMS.mes}>ERP / MES</Term> sistemlerinize iletir.
          </p>
        </div>

        {/* Ürün sekmeleri */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory -mx-1 px-1 mb-6"
          role="tablist"
          aria-label="Ürün modülleri"
        >
          {products.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(p.id)}
                className={`snap-start shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-vision text-white border-vision shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-vision/40'
                }`}
              >
                <p.Icon size={16} strokeWidth={1.75} />
                {p.label.split('·')[1]?.trim() ?? p.title.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Aktif ürün detayı */}
        <div
          role="tabpanel"
          className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          <div className="lg:col-span-3 panel-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-2">
              {active.label}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-3 leading-snug">
              {active.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {active.summary}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                  Ne analiz eder?
                </p>
                <ul className="space-y-2">
                  {active.detects.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-vision shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                  Panelde ne görürsünüz?
                </p>
                <ul className="space-y-2">
                  {active.panelShows.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-vision shrink-0">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-vision-50/60 border border-vision/15">
              <p className="text-xs font-bold uppercase tracking-wider text-vision-dark mb-2">
                Nasıl çalışır?
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{active.howItWorks}</p>
            </div>

            <p className="mt-5 text-sm font-semibold text-[#0A0A0A] leading-relaxed">
              → {active.outcome}
            </p>
          </div>

          <div className="lg:col-span-2">
            <PanelExplainer productId={activeId} />
          </div>
        </div>

        {/* ERP + altyapı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="p-6 sm:p-8 rounded-xl bg-slate-800 text-white">
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3">
              Entegrasyon
            </p>
            <h3 className="font-semibold text-lg mb-4">ERP veriniz kopmasın</h3>
            <ul className="space-y-2 mb-6">
              {integrations.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 size={14} className="text-vision shrink-0" />
                  {item} — iş emri, stok ve olay senkronu
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className="text-xs font-semibold text-vision-light hover:text-white flex items-center gap-1.5"
            >
              Entegrasyon detayı için demo <ArrowRight size={14} />
            </a>
          </div>

          <div className="p-6 sm:p-8 rounded-xl panel-card">
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-3">
              Altyapı
            </p>
            <h3 className="font-semibold text-lg text-[#0A0A0A] mb-3">
              Kurumsal güvenlik, kesintisiz operasyon
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              <Term tip={TERMS.edge}>Tesis içi (Edge)</Term> veya{' '}
              <Term tip={TERMS.cloud}>bulut</Term> kurulum; KVKK uyumlu veri akışı.
            </p>
            <div className="flex flex-wrap gap-2">
              {['KVKK', 'API', 'Rol bazlı erişim'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            Ürün demosu iste
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
