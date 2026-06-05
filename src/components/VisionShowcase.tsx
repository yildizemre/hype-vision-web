import { useState } from 'react';
import { ScanEye, ChevronLeft, ChevronRight } from 'lucide-react';

const shots = [
  {
    src: '/1.avif',
    alt: 'Forklift ve yaya mesafe analizi — tehlikeli bölge tespiti',
    title: 'Forklift–yaya riski',
    desc: 'Araç ile personel arası mesafe anlık ölçülür; kırmızı bölge ihlali alarm üretir.',
    tags: ['İSG', 'Tehlikeli alan', 'Mesafe analizi'],
  },
  {
    src: '/2.avif',
    alt: 'Gıda üretim hattında personel ve bölge izleme',
    title: 'Tehlike alanı & hareket',
    desc: 'Personel pozisyonu ve zemin bölgesi izlenir; makine önü ihlalleri kayda alınır.',
    tags: ['İSG', 'Bölge kuralı', 'Pose takibi'],
  },
  {
    src: '/3.avif',
    alt: 'Konveyör hattında personel denetimi ve iskelet takibi',
    title: 'Hat denetimi',
    desc: 'Vardiya sırasında kim nerede — istasyon ve hat kurallarına uyum görünür olur.',
    tags: ['Personel', 'Hat izleme', 'Verimlilik'],
  },
  {
    src: '/4.avif',
    alt: 'Depo alanında alan ihlali ve personel tespiti',
    title: 'Depo & alan güvenliği',
    desc: 'Yetkisiz veya riskli alana giriş anında tespit; kanıt görüntüsü panelde.',
    tags: ['Güvenlik', 'Alan ihlali', '7/24'],
  },
];

export default function VisionShowcase() {
  const [active, setActive] = useState(0);
  const current = shots[active];

  const prev = () => setActive((i) => (i === 0 ? shots.length - 1 : i - 1));
  const next = () => setActive((i) => (i === shots.length - 1 ? 0 : i + 1));

  return (
    <section
      id="sahada-ai"
      className="section-tint py-16 sm:py-24 lg:py-32 scroll-mt-20 border-y border-vision/10"
      aria-labelledby="vision-showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
              Sahada AI ne görür?
            </p>
            <h2
              id="vision-showcase-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
            >
              Kamera görüntüsü değil —{' '}
              <span className="text-vision">anlamlandırılmış olay</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              Ham video depolanmaz. Yapay zeka personeli, araçları, bölgeleri ve ihlalleri
              okur; panelde alarm, sayaç ve kanıt olarak sunar.
            </p>

            <div className="space-y-3">
              {shots.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    active === i
                      ? 'border-vision bg-vision-50/60 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-vision/30'
                  }`}
                >
                  <p className="font-semibold text-sm text-[#0A0A0A] mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-[#0A0A0A]">
              <img
                src={current.src}
                alt={current.alt}
                width={3840}
                height={2000}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[320px] sm:max-h-[420px] object-cover object-center"
              />
              <div className="p-4 sm:p-5 bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/95">
                <div className="flex items-center gap-2 mb-2">
                  <ScanEye size={16} className="text-vision-light" />
                  <p className="font-semibold text-white text-sm">{current.title}</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{current.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/10 text-vision-light border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={prev}
                className="p-2 rounded-lg border border-gray-200 hover:bg-white transition-colors"
                aria-label="Önceki görsel"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <span className="text-xs text-gray-400">
                {active + 1} / {shots.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="p-2 rounded-lg border border-gray-200 hover:bg-white transition-colors"
                aria-label="Sonraki görsel"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
