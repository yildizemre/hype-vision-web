import {
  Smartphone,
  MessageCircle,
  BellRing,
  Radio,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react';

type IntegrationGroup = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
};

const groups: IntegrationGroup[] = [
  {
    Icon: LayoutGrid,
    title: 'ERP & MES',
    desc: 'Üretim verisi tek yerde — çift giriş yok',
    items: ['SAP', 'Oracle', 'Dynamics 365', 'MES / BI'],
  },
  {
    Icon: BellRing,
    title: 'VMS popup & alarm',
    desc: 'Milestone, Dahua vb. — olay anında VMS ekranında',
    items: ['Milestone', 'Dahua', 'Hikvision', 'Genetec'],
  },
  {
    Icon: MessageCircle,
    title: 'Mobil & mesaj',
    desc: 'Geri bildirim anında cebinizde',
    items: ['Mobil panel', 'WhatsApp', 'Telegram', 'E-posta / SMS'],
  },
  {
    Icon: Radio,
    title: 'IoT & saha tetikleme',
    desc: 'Alarm çaldırıyoruz — cihazları otomatik devreye alıyoruz',
    items: ['Siren / flaşör', 'Röle & I/O', 'Hat durdurma', 'ERP olay senkronu'],
  },
];

export default function LogoStrip() {
  return (
    <section
      className="section-tint-deep py-12 sm:py-16 lg:py-20 border-b border-vision/10"
      aria-labelledby="entegrasyon-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-2">
            Entegrasyon & bildirim
          </p>
          <h2
            id="entegrasyon-heading"
            className="text-lg sm:text-xl font-semibold text-[#0A0A0A] leading-snug mb-2"
          >
            ERP, VMS popup, mobil panel — alarm IoT&apos;ya kadar
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Tespit panelde kalır; Milestone veya Dahua popup&apos;ı, WhatsApp/Telegram bildirimi ve
            sahadaki IoT cihaz tetiklemesi aynı akışta.
          </p>
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
            Mobil panel geri bildirimi
          </span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>Anlık alarm akışı</span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>API ile özelleştirilebilir</span>
        </div>
      </div>
    </section>
  );
}
