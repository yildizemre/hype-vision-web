import { Calendar, MapPin, Cpu, ArrowRight, HardHat, ScanEye, Users, ShieldAlert } from 'lucide-react';

const focusAreas = [
  {
    Icon: HardHat,
    label: 'İSG denetimi',
    desc: 'KKD, tehlikeli bölge, forklift–yaya',
  },
  {
    Icon: ScanEye,
    label: 'Kalite kontrol',
    desc: 'Hat üzerinde anlık hata tespiti',
  },
  {
    Icon: Users,
    label: 'Personel & verimlilik',
    desc: 'Boşta kalma, istasyon uyumu',
  },
  {
    Icon: ShieldAlert,
    label: 'Tesis güvenliği',
    desc: 'Alan ihlali, 7/24 alarm',
  },
];

export default function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="section-tint py-16 sm:py-24 lg:py-32 scroll-mt-20 border-y border-vision/10"
      aria-labelledby="hakkimizda-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
              Hakkımızda
            </p>
            <h2
              id="hakkimizda-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-5"
            >
              2020&apos;den beri{' '}
              <span className="text-vision">endüstriyel yapay zeka</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              <strong className="font-semibold text-[#0A0A0A]">Hype Teknoloji</strong> olarak 2020
              yılından bu yana endüstriyel güvenlik ve operasyonel verimlilik alanında yapay zeka
              destekli görüntü işleme sistemleri geliştiriyoruz.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              <strong className="font-semibold text-[#0A0A0A]">Hype Vision</strong> platformumuz;
              sahadaki IP kameralardan gelen görüntüyü analiz ederek İSG, kalite kontrol, personel
              verimliliği ve güvenlik süreçlerini otomatikleştirir. Ham video depolamak yerine
              anlamlandırılmış veri — alarm, metrik, rapor — üretir.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Amacımız fabrikalarda insan gözünün yetemediği sürekli denetimi ölçeklenebilir,
              KVKK uyumlu ve mevcut altyapıyla uyumlu bir katmana dönüştürmek.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-vision" />
                Kuruluş: 2020
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-vision" />
                Beykoz, İstanbul
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu size={14} className="text-vision" />
                Edge · Cloud · Hibrit
              </span>
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
            >
              Ekibimizle tanışın
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg mb-4">
              <div className="relative">
                <img
                  src="/4.avif"
                  alt="Hype Vision saha analizi — depo alanında personel ve bölge izleme"
                  width={1280}
                  height={667}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[220px] sm:max-h-[280px] lg:max-h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a30]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-wrap gap-3">
                  {[
                    { value: '2020', label: 'Kuruluş' },
                    { value: '7/24', label: 'Saha izleme' },
                    { value: 'KVKK', label: 'Uyumlu mimari' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="px-3 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15"
                    >
                      <p className="text-sm font-semibold text-vision-light leading-none mb-0.5">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-white/75">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="panel-card rounded-2xl p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">
                Neye odaklanıyoruz?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {focusAreas.map(({ Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-3.5 rounded-xl bg-white border border-gray-100 hover:border-vision/25 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-vision-50 border border-vision/20 flex items-center justify-center mb-2">
                      <Icon size={16} className="text-vision" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs font-semibold text-[#0A0A0A] mb-0.5">{label}</p>
                    <p className="text-[11px] text-gray-500 leading-snug">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
