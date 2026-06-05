import { HardHat, Users, ScanEye, ShieldAlert, AlertTriangle, EyeOff } from 'lucide-react';

const pains = [
  {
    Icon: AlertTriangle,
    title: 'Manuel denetim kritik riski kaçırır',
    desc: 'Kağıt İSG denetimi, checklist ve örneklemeli saha turu ciddi ihlalleri göremez. Vardiya sonunda öğrenilen kaza, önlenememiş kaza demektir.',
  },
  {
    Icon: EyeOff,
    title: 'Göremediğinizi önleyemezsiniz',
    desc: 'İSG ekipleri çok çalışır; ama gerçek zamanlı görünürlük olmadan gizli riskler fire, idle kaybı ve iş kazasına dönüşür. Hep bir adım geridesiniz.',
  },
];

const areas = [
  {
    Icon: HardHat,
    title: 'İSG Denetimleri',
    desc: 'Baret, yelek, maske ve tehlikeli bölge ihlalleri 7/24 izlenir. İnsan denetimi yerine sürekli, kanıt üreten AI gözetimi.',
    highlight: 'KKD & bölge',
    tags: ['İSG denetimi', 'İhlal uyarısı'],
  },
  {
    Icon: Users,
    title: 'Personel & Verimlilik',
    desc: 'Personel denetimleri, çalışma süreleri, verimlilik ve boşta kalma süreleri otomatik ölçülür — kayıp zaman görünür olur.',
    highlight: 'Boşta kalma',
    tags: ['Personel denetimi', 'Verimlilik KPI'],
  },
  {
    Icon: ScanEye,
    title: 'Kalite Kontrol',
    desc: 'Hat üzerinde anlık hata tespiti; fire ve hurda insan yorgunluğuna ve geç müdahaleye bağlı kalmaz.',
    highlight: 'Anlık tespit',
    tags: ['Kalite kontrol', 'Fire azaltma'],
  },
  {
    Icon: ShieldAlert,
    title: 'Güvenlik & Tesis',
    desc: 'Şüpheli hareket, yetkisiz giriş-çıkış ve anormal durumlar 7/24 bildirilir.',
    highlight: '7/24 alarm',
    tags: ['Güvenlik', 'Anomali'],
  },
];

export default function ProblemSolution() {
  return (
    <section
      id="cozumler"
      className="bg-[#0c2a30] py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="cozumler-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-3">
            Neden hâlâ oluyor?
          </p>
          <h2
            id="cozumler-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-8"
          >
            Gecikmiş göstergeler ve manuel yöntemler{' '}
            <span className="text-vision-light">tesisi modernleştiremez.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {pains.map((p) => (
              <div
                key={p.title}
                className="p-5 sm:p-6 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <p.Icon size={20} className="text-vision-light shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-white text-sm sm:text-base leading-snug">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed pl-8">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-10 border-t border-white/10">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light/80 mb-4">
              Hype Vision ile
            </p>
            <h3 className="text-3xl lg:text-4xl font-light text-white leading-tight mb-6">
              İnsan denetimi{' '}
              <span className="font-semibold">ölçeklenmez.</span>
              <br />
              <span className="text-gray-500 font-light text-2xl lg:text-3xl">
                Yapay zeka ölçeklenir.
              </span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Görüntüyü anlamlandırılmış veriye çeviririz: alarm, metrik, kanıt. Vardiya içinde
              müdahale; maliyet, risk ve fire düşer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#denetim"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Tüm denetim modülleri →
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
              >
                Demo planla
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((m, i) => (
              <div
                key={m.title}
                className="group p-6 sm:p-7 rounded-2xl border hover:border-white/15 transition-all duration-300 hover:bg-white/[0.02]"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center">
                    <m.Icon size={18} className="text-vision-light" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{ background: 'rgba(0, 202, 220, 0.15)', color: '#00cadc' }}
                >
                  {m.highlight}
                </span>
                <h4 className="text-white font-semibold text-base mb-2 leading-snug">{m.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-gray-500 px-2 py-0.5 rounded-md bg-white/5 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
