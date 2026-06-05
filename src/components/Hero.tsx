import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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

    video.play().catch(() => {
      /* autoplay engellendi — poster kalır */
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden"
      aria-label="Ana tanıtım"
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
          className="absolute inset-0 w-full h-full object-cover opacity-45 sm:opacity-50 scale-[1.03] [transform:translateZ(0)]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Blur videoda değil overlay'de — okunabilirlik + GPU dengesi */}
        <div className="absolute inset-0 backdrop-blur-[6px] sm:backdrop-blur-[8px] bg-[#0a2530]/55" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2530]/92 via-[#0c3540]/88 to-[#062028]/94" />
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

      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-vision/20 blur-[100px] pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-black/35 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-vision-light animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-white/95">
              2020&apos;den beri · Mevcut kameralarınız · Marka fark etmez
            </span>
          </div>

          <p className="text-sm sm:text-base font-medium text-vision-light mb-4 tracking-wide">
            Endüstriyel güvenlik ve operasyonel verimlilikte yeni standart
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-light text-white leading-[1.1] tracking-tight mb-5 drop-shadow-sm">
            Gerçek zamanlı{' '}
            <span className="font-semibold">İSG, kalite ve verimlilik</span>
            <br />
            <span className="font-medium text-vision-light">— mevcut kameralarınızla.</span>
          </h1>

          <div className="w-16 h-px bg-vision-light/50 mb-6" />

          <p className="text-base lg:text-lg text-gray-100 max-w-2xl leading-relaxed mb-8 font-light">
            7/24 tespit, anlık alarm ve ölçülebilir KPI. Personel denetimi, İSG, kalite kontrol
            ve boşta kalma — insan gözünün yetemediği süreçler{' '}
            <span className="text-white font-medium">otomatik izlenir.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#demo"
              className="inline-flex justify-center items-center text-[#0A0A0A] text-sm font-semibold px-7 py-3.5 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-lg"
            >
              İletişim
            </a>
            <a
              href="#kamera"
              className="inline-flex justify-center items-center gap-2 text-sm font-medium text-white/90 hover:text-white border border-white/25 rounded-lg px-5 py-3.5 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Kamera entegrasyonu
              <span>→</span>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/15">
            {[
              { value: 'RTSP', label: 'ONVIF uyumlu' },
              { value: 'İSG', label: 'Otomatik denetim' },
              { value: 'Kalite', label: 'Anlık tespit' },
              { value: 'Idle', label: 'Boşta kalma' },
            ].map((stat) => (
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
