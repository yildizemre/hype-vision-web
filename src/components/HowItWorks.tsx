import { Camera, Brain, LayoutDashboard, BellRing, ArrowRight } from 'lucide-react';
import { Term, TERMS } from './TermTooltip';

const flow = [
  {
    Icon: Camera,
    label: 'Bağlan',
    short: 'Mevcut IP kameralarınız tanınır',
    detail: 'Marka fark etmez. Yeni kamera almanız gerekmez.',
  },
  {
    Icon: Brain,
    label: 'Analiz et',
    short: 'Yapay zeka görüntüyü okur',
    detail: 'İSG, kalite veya verimlilik — seçtiğiniz modül.',
  },
  {
    Icon: LayoutDashboard,
    label: 'Panel',
    short: 'Sonuç tek ekrana düşer',
    detail: 'Alarm, sayaç, kanıt görüntüsü — Excel değil.',
  },
  {
    Icon: BellRing,
    label: 'Aksiyon',
    short: 'Ekip anında haberdar olur',
    detail: 'WhatsApp, VMS popup veya saha sireni.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      className="section-tint-deep py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="nasil-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            Nasıl çalışır?
          </p>
          <h2
            id="nasil-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            4 adımda{' '}
            <span className="text-vision">kameradan aksiyona</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Kurulum{' '}
            <Term tip={TERMS.edge}>
              tesis içi (Edge)
            </Term>{' '}
            veya{' '}
            <Term tip={TERMS.cloud}>bulut</Term> olabilir — keşif sonrası netleşir.
          </p>
        </div>

        {/* Infografik + saha görseli */}
        <div className="panel-card rounded-2xl overflow-hidden mb-8">
          <img
            src="/nasil.jpg"
            alt="Hype Vision akış şeması — kamera, AI analiz, panel ve aksiyon"
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
          />
          <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {flow.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-vision-50 border-2 border-vision/25 flex items-center justify-center mb-3">
                  <step.Icon size={24} className="text-vision" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-vision-dark mb-1">
                  0{i + 1} · {step.label}
                </span>
                <p className="font-semibold text-[#0A0A0A] text-xs sm:text-sm mb-1">{step.short}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kısa detay kartları */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-xl bg-white border border-gray-100">
            <p className="text-xs font-bold text-vision-dark mb-2">Ne kadar sürer?</p>
            <p className="text-sm text-gray-600">
              Pilot kurulum genelde <strong className="text-[#0A0A0A]">3–5 iş günü</strong>.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white border border-gray-100">
            <p className="text-xs font-bold text-vision-dark mb-2">Hangi kameralar?</p>
            <p className="text-sm text-gray-600">
              <Term tip={TERMS.rtsp}>RTSP</Term> /{' '}
              <Term tip={TERMS.onvif}>ONVIF</Term> uyumlu IP kameralar.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white border border-gray-100 sm:col-span-1">
            <p className="text-xs font-bold text-vision-dark mb-2">IT yükü?</p>
            <p className="text-sm text-gray-600">
              Mevcut altyapı kullanılır; modüler başlangıç mümkün.
            </p>
          </div>
        </div>

        <div className="panel-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-semibold text-[#0A0A0A] text-lg mb-1">
              Sahadaki görüntüyü birlikte konuşalım
            </p>
            <p className="text-sm text-gray-500">Formu doldurun veya doğrudan arayın.</p>
          </div>
          <a
            href="#demo"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            İletişim
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
