import { Link } from 'react-router-dom';
import {
  Presentation,
  PlayCircle,
  ChevronRight,
  Layers,
  Shield,
  Camera,
  BarChart3,
  FileCheck,
} from 'lucide-react';
import Shell from '../components/Shell';
import VideoDemoBrowser from '../components/VideoDemoBrowser';
import { useHubScroll } from '../components/ScrollRestoration';
import { decks } from '../data/content';
import { sunumDeck } from '../paths';

const deckIcons: Record<string, typeof Layers> = {
  mes: Layers,
  isg: Shield,
};

const heroSteps = [
  { icon: Presentation, label: 'Sunumu açın', desc: 'MES veya İSG deck' },
  { icon: PlayCircle, label: 'Demoyu izleyin', desc: 'Gerçek saha kaydı' },
  { icon: FileCheck, label: 'Çıkarımı paylaşın', desc: 'Kanıta dayalı metrik' },
];

export default function HubPage() {
  useHubScroll();

  return (
    <Shell>
      <section className="hero-bg border-b border-vision/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,202,220,0.15),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-vision-light mb-3">
            Müşteri Sunum Merkezi
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight max-w-3xl mb-4 sm:mb-5">
            Yapay zeka destekli görüntü işleme —{' '}
            <span className="text-vision-light">tek ekrandan sunun</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed mb-8">
            Hype Vision; mevcut kameralarınızla üretim verimliliği ve iş güvenliği denetimini otomatikleştirir.
            Sunumları slayt slayt gezin, saha videolarını izleyin ve her kare için hazırlanmış teknik çıkarımları
            müşterinizle paylaşın.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: Camera, text: 'Mevcut kamera altyapısı' },
              { icon: BarChart3, text: 'Ölçülebilir KPI' },
              { icon: Shield, text: 'İSG uyum kanıtı' },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 bg-white/10 border border-white/15 rounded-full px-3.5 py-1.5 backdrop-blur-sm"
              >
                <Icon size={14} className="text-vision-light shrink-0" />
                {text}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-3xl">
            {heroSteps.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/8 border border-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <span className="w-8 h-8 rounded-lg bg-vision/20 border border-vision/30 flex items-center justify-center text-vision-light text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <Icon size={14} className="text-vision-light shrink-0" />
                    {label}
                  </p>
                  <p className="text-[11px] text-white/60 truncate">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
        <section>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-vision-dark mb-2">
              <Presentation size={18} />
              <span className="text-xs font-semibold uppercase tracking-widest">Sunumlar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-night">Çözüm sunumları</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
              MES ve İSG platformlarını kapsamlı deck formatında inceleyin. Tam ekran modunda müşteri
              görüşmelerinde doğrudan sunabilirsiniz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {decks.map((deck) => {
              const Icon = deckIcons[deck.id] ?? Presentation;
              return (
                <Link
                  key={deck.id}
                  to={sunumDeck(deck.id)}
                  className="group panel-card rounded-2xl p-6 sm:p-8 hover:border-vision/35 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-vision-50 border border-vision/20 flex items-center justify-center">
                      <Icon size={22} className="text-vision-dark" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-vision-dark px-2.5 py-1 rounded-full bg-vision-50 border border-vision/20">
                      {deck.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-night mb-2 group-hover:text-vision-dark transition-colors">
                    {deck.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{deck.subtitle}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{deck.slideCount} slayt · Canva sunum</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-vision-dark group-hover:gap-2 transition-all">
                      Sunumu aç
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section-tint-deep rounded-2xl sm:rounded-3xl border border-vision/10 p-4 sm:p-6 lg:p-10">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-vision-dark mb-2">
              <PlayCircle size={18} />
              <span className="text-xs font-semibold uppercase tracking-widest">Video demolar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-night">Saha kayıtları ve teknik çıkarımlar</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
              Kategori seçin veya arayın — tüm ürün videoları tek listede.
            </p>
          </div>

          <VideoDemoBrowser />
        </section>
      </div>
    </Shell>
  );
}
