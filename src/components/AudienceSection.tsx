import { Briefcase, HardHat, ScanEye, ArrowRight, Zap } from 'lucide-react';

const audiences = [
  {
    Icon: Briefcase,
    role: 'Fabrika Müdürü',
    pain: 'Saha gerçeğini vardiya sonunda öğreniyorsunuz; OEE, duruş ve idle kayıpları geç raporlanıyor.',
    solution:
      'Hype Vision tek panelde verimlilik, duruş, kalite ve İSG özetini canlı sunar. Karar vardiya içinde verilir.',
    action:
      'OEE ve idle metriklerini vardiya içinde görün; yönetim kuruluna net KPI gönderin.',
    tags: ['OEE & duruş', 'Vardiya KPI', 'Tek ekran'],
  },
  {
    Icon: HardHat,
    role: 'İSG Sorumlusu',
    pain: 'KKD ve bölge ihlalleri örneklemeli denetimle kalıyor; iş kazası riski geç fark ediliyor, kanıt zayıf.',
    solution:
      '7/24 KKD ve tehlikeli alan analizi; ihlal anında alarm + zaman damgalı kanıt görüntüsü.',
    action:
      'İhlal anında VMS popup, WhatsApp bildirimi veya saha sireni — müdahale vardiya içinde.',
    tags: ['KKD tespiti', 'VMS popup', 'IoT tetikleme'],
  },
  {
    Icon: ScanEye,
    role: 'Kalite Mühendisi',
    pain: 'Fire birikiyor, manuel kontrol yoruluyor; hata müşteriye veya son montaja kadar gizli kalıyor.',
    solution:
      'Hat içi 0.1–0.3 sn hata tespiti; OK/red, hata tipi trendi ve vardiya raporu.',
    action:
      'Hat içi otomatik red ve fire ayrımı — müşteri şikayetine ulaşmadan durdurun.',
    tags: ['Anlık tespit', 'OK / red', 'Fire azaltma'],
  },
];

export default function AudienceSection() {
  return (
    <section
      id="kimler-icin"
      className="bg-[#0c2a30] py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="kimler-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light/80 mb-3">
            Kimler için?
          </p>
          <h2
            id="kimler-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4"
          >
            Ekibiniz için{' '}
            <span className="text-vision-light">Hype Vision</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Sorununuz → çözüm → sahadaki aksiyon. Her rol için net, ölçülebilir değer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((a) => (
            <article
              key={a.role}
              className="rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col hover:border-vision/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-vision/15 border border-vision/25 flex items-center justify-center mb-5">
                <a.Icon size={20} className="text-vision-light" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-white text-lg mb-4">{a.role}</h3>

              <div className="mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                  Sorununuz
                </p>
                <p className="text-sm text-white/65 leading-relaxed">{a.pain}</p>
              </div>

              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-vision-light mb-1.5">
                  Hype Vision
                </p>
                <p className="text-sm text-white/85 leading-relaxed">{a.solution}</p>
              </div>

              <div className="mt-auto p-3.5 rounded-lg bg-vision/10 border border-vision/20">
                <p className="text-[10px] font-bold uppercase tracking-wider text-vision-light mb-1.5 flex items-center gap-1">
                  <Zap size={11} />
                  Sahada ne olur?
                </p>
                <p className="text-sm text-white font-medium leading-relaxed">{a.action}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/10">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 text-white/60 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] px-8 py-3.5 rounded-lg bg-white hover:bg-gray-100 transition-colors"
          >
            Bize ulaşın
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
