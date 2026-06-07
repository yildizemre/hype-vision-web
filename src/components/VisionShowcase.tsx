import { useState } from 'react';
import { ScanEye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Shot = { alt: string; title: string; desc: string; tags: string[] };

export default function VisionShowcase() {
  const { t } = useTranslation();
  const shotTexts = t('sections.visionShowcase.shots', { returnObjects: true }) as Shot[];
  const shots = shotTexts.map((shot, i) => ({ ...shot, src: `/${i + 1}.avif` }));
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
              {t('sections.visionShowcase.eyebrow')}
            </p>
            <h2
              id="vision-showcase-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
            >
              {t('sections.visionShowcase.title')}{' '}
              <span className="text-vision">{t('sections.visionShowcase.titleHighlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {t('sections.visionShowcase.description')}
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
                aria-label={t('sections.visionShowcase.prevImage')}
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
                aria-label={t('sections.visionShowcase.nextImage')}
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
