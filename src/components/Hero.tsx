import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const stats = t('sections.hero.stats', { returnObjects: true }) as { value: string; label: string }[];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobilde ve düşük güç modunda video oynatmayı atla — gradient yeterli
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 640px)').matches;

    if (reduceMotion || narrow) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      return;
    }

    const play = () => {
      video.play().catch(() => {});
    };

    play();

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else play();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden"
      aria-label={t('sections.hero.ariaLabel')}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/1.avif"
          className="absolute inset-0 w-full h-full object-cover opacity-40 sm:opacity-45"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Blur yok — sadece gradient; backdrop-blur video ile birlikte GPU kasar */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2530]/90 via-[#0c3540]/85 to-[#062028]/92" />
        <div className="absolute inset-0 bg-vision/5" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-vision/15 pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-black/45">
            <div className="w-1.5 h-1.5 rounded-full bg-vision-light animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-white/95">
              {t('sections.hero.badge')}
            </span>
          </div>

          <p className="text-sm sm:text-base font-medium text-vision-light mb-4 tracking-wide">
            {t('sections.hero.subtitle')}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-light text-white leading-[1.1] tracking-tight mb-5 drop-shadow-sm">
            {t('sections.hero.titleLine1')}{' '}
            <span className="font-semibold">{t('sections.hero.titleHighlight')}</span>
            <br />
            <span className="font-medium text-vision-light">{t('sections.hero.titleLine2')}</span>
          </h1>

          <div className="w-16 h-px bg-vision-light/50 mb-6" />

          <p className="text-base lg:text-lg text-gray-100 max-w-2xl leading-relaxed mb-8 font-light">
            {t('sections.hero.description')}{' '}
            <span className="text-white font-medium">{t('sections.hero.descriptionHighlight')}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="/#iletisim"
              data-track="contact_cta"
              data-track-location="hero"
              id="cta-contact-hero"
              className="inline-flex justify-center items-center text-[#0A0A0A] text-sm font-semibold px-7 py-3.5 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('sections.hero.contact')}
            </a>
            <a
              href="#kamera"
              className="inline-flex justify-center items-center gap-2 text-sm font-medium text-white/90 hover:text-white border border-white/25 rounded-lg px-5 py-3.5 bg-black/30 hover:bg-white/10 transition-colors"
            >
              {t('sections.hero.cameraIntegration')}
              <span>→</span>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/15">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl font-semibold text-vision-light mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
