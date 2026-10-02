import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Eye, Factory, ShieldCheck, Gauge, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import GuideBody from '../components/GuideBody';
import { GUIDES } from '../data/guides';
import { MODULE_SLUGS, SEO_SECTOR_SLUGS, getLandingPage } from '../data/landingPages';
import { SITE_URL } from '../data/legalContent';
import { SITE_ADDRESS, SITE_BRAND } from '../data/siteConfig';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';
import type { GuideBlock } from '../data/guides';

const PAGE_URL = `${SITE_URL}/goruntu-isleme`;
const TITLE = 'Görüntü İşleme | Endüstriyel Görüntü İşleme ve Yapay Zeka Sistemleri — Hype Vision';
const DESCRIPTION =
  "Endüstriyel görüntü işleme sistemleri: mevcut IP kameralarınızla yapay zeka destekli kalite kontrol, İSG/KKD denetimi, OEE ve verimlilik analizi. 2020'den beri GTÜ Teknopark Gebze. Ücretsiz keşif.";

const GROUPS: { title: string; icon: typeof Eye; slugs: string[] }[] = [
  {
    title: 'İş güvenliği (İSG)',
    icon: ShieldCheck,
    slugs: ['baret-tespit-sistemi', 'kkd-kontrol-kamera-sistemi', 'yasakli-alan-ihlal-tespiti', 'forklift-yaya-guvenlik-sistemi', 'dusme-tespit-sistemi'],
  },
  { title: 'Kalite kontrol', icon: Eye, slugs: ['kalite-kontrol-goruntu-isleme', 'yuzey-kusuru-tespiti'] },
  { title: 'Verimlilik ve OEE', icon: Gauge, slugs: ['oee-takip-sistemi', 'personel-verimlilik-analizi-kamera'] },
  { title: 'Altyapı ve uyum', icon: Lock, slugs: ['onvif-rtsp-yapay-zeka-entegrasyonu', 'kvkk-uyumlu-kamera-analitigi'] },
];

const BODY: GuideBlock[] = [
  { type: 'h2', id: 'nedir', text: 'Endüstriyel görüntü işleme nedir?' },
  {
    type: 'p',
    text: '**Endüstriyel görüntü işleme**, üretim ve lojistik sahalarındaki kamera görüntülerinin yapay zeka ile analiz edilerek kalite, güvenlik ve verimlilik kararlarına dönüştürülmesidir. Klasik makine görmesi sabit kurallarla çalışırken, Hype Vision’ın derin öğrenme tabanlı **yapay zeka görüntü işleme** modelleri değişken ışık, açı ve ürün çeşitliliğinde de doğru sonuç üretir. Temel kavramlar için [görüntü işleme nedir?](/blog/goruntu-isleme-nedir) rehberimize bakabilirsiniz.',
  },
  { type: 'h2', id: 'nasil-calisir', text: 'Hype Vision görüntü işleme sistemi nasıl çalışır?' },
  {
    type: 'ol',
    items: [
      '**Mevcut kameralara bağlanır:** RTSP/ONVIF destekli her marka IP kamera ve NVR akışı kullanılır; çoğu projede yeni kamera gerekmez.',
      '**Görüntüyü yerinde işler:** Analiz tesis içindeki edge cihazda yapılır, görüntü internete çıkmaz. İstenirse bulut veya hibrit mimari kurulur.',
      '**Olayı tespit eder:** Kusurlu ürün, eksik KKD, yasaklı alana giriş, duruş veya boşta kalma anında yakalanır.',
      '**Aksiyona dönüştürür:** Panel ve mobil bildirim, siren, turnike kilidi, PLC sinyali veya ERP/MES kaydı tetiklenir.',
      '**Raporlar ve iyileştirir:** Vardiya, hat ve bölge bazında trendler çıkarılır; model sahadan gelen veriyle sürekli kalibre edilir.',
    ],
  },
  { type: 'h2', id: 'neden', text: 'Neden Hype Vision?' },
  {
    type: 'table',
    head: ['', 'Hype Vision', 'Klasik makine görmesi', 'Manuel denetim'],
    rows: [
      ['Kamera', 'Mevcut IP kameralar, marka bağımsız', 'Özel endüstriyel kamera + ışık', '—'],
      ['Kapsam', 'Kalite + İSG + verimlilik tek panelde', 'Genellikle tek istasyon', 'Örneklemeli'],
      ['Değişken ortam', 'Derin öğrenme ile dayanıklı', 'Kural ayarı gerekir', 'Yorgunluğa bağlı'],
      ['Kurulum', 'Pilot günler içinde', 'Haftalar–aylar', '—'],
      ['Veri gizliliği', 'Edge işleme, KVKK odaklı', 'Değişken', '—'],
    ],
  },
  {
    type: 'p',
    text: 'Firma seçerken hangi sorulara bakmanız gerektiğini [görüntü işleme firmaları için 10 kriter](/blog/goruntu-isleme-firmasi-secimi) yazımızda özetledik.',
  },
];

const FAQ = [
  {
    q: 'Görüntü işleme sistemi kurmak için yeni kamera gerekir mi?',
    a: 'Çoğu İSG, güvenlik ve verimlilik uygulamasında hayır. RTSP/ONVIF destekleyen mevcut IP kameralarınız kullanılır. Mikron seviyesinde kusur aranan kalite istasyonlarında endüstriyel kamera önerilebilir.',
  },
  {
    q: 'Görüntü işleme ile hangi işler otomatikleştirilebilir?',
    a: 'Yüzey kusuru ve montaj hatası tespiti, baret/KKD denetimi, yasaklı alan ve forklift-yaya güvenliği, düşme algılama, OEE ve duruş takibi, personel verimliliği ve sayım işleri otomatikleştirilebilir.',
  },
  {
    q: 'Endüstriyel görüntü işleme projesi ne kadar sürede devreye alınır?',
    a: 'Hazır modüllerle pilot kurulum genellikle birkaç iş günü sürer. Ürüne özel kusur modeli gerektiren kalite projelerinde veri toplama ve eğitim dahil birkaç hafta planlanır.',
  },
  {
    q: 'Görüntüler tesis dışına çıkıyor mu? KVKK uyumlu mu?',
    a: 'Edge mimaride görüntüler tesis içinde işlenir ve dışarı çıkmaz; yalnızca olay verisi panele aktarılır. Maskeleme, saklama süresi ve rol bazlı erişim ile KVKK odaklı kurulum yapılır.',
  },
  {
    q: 'Hype Vision hangi sektörlerde görüntü işleme hizmeti veriyor?',
    a: 'Otomotiv, tekstil, gıda, metal, depo ve lojistik başta olmak üzere üretim yapan tüm sanayi tesislerinde; Türkiye genelinde ve yurt dışında hizmet verilmektedir.',
  },
];

export default function GoruntuIslemePage() {
  usePageMeta({
    title: TITLE,
    description: DESCRIPTION,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'Endüstriyel Görüntü İşleme Sistemleri',
        serviceType: 'Görüntü işleme / Bilgisayarlı görü',
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: { '@type': 'Country', name: 'Türkiye' },
        provider: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_BRAND.name,
          url: SITE_URL,
          telephone: SITE_BRAND.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_ADDRESS.street,
            addressLocality: SITE_ADDRESS.city,
            addressRegion: SITE_ADDRESS.region,
            postalCode: SITE_ADDRESS.postalCode,
            addressCountry: SITE_ADDRESS.country,
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Görüntü işleme modülleri',
          itemListElement: MODULE_SLUGS.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: getLandingPage(s)?.title.split('|')[0].trim(), url: `${SITE_URL}/${s}` },
          })),
        },
      },
      breadcrumbSchema([
        { name: 'Ana sayfa', url: `${SITE_URL}/` },
        { name: 'Görüntü İşleme', url: PAGE_URL },
      ]),
      faqSchema(FAQ),
    ],
  });

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] hero-bg border-b border-vision/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Ana sayfa</Link>
              <ChevronRight size={12} aria-hidden />
              <span className="text-vision-light">Görüntü İşleme</span>
            </nav>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">
              Endüstriyel görüntü işleme · 2020’den beri
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
              Görüntü işleme ile fabrikanızı <span className="text-vision-light">7/24 gören yapay zeka</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              Hype Vision, mevcut IP kameralarınızı yapay zeka destekli görüntü işleme sistemine dönüştürür:
              kalite kontrol, iş güvenliği ve verimlilik tek platformda, görüntü tesisten çıkmadan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/iletisim"
                data-track="contact_cta"
                data-track-location="pillar_hero"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
              >
                Ücretsiz keşif görüşmesi <ArrowRight size={16} />
              </Link>
              <Link
                to="/katalog"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-7 py-3.5 rounded-lg border border-white/25 hover:bg-white/10 transition-colors"
              >
                Kataloğu incele
              </Link>
            </div>
          </div>
          <img
            src="/panel.jpeg"
            alt="Hype Vision görüntü işleme paneli: IP kamera görüntüsünde yapay zeka ile KKD ve kalite tespiti"
            width={1200}
            height={750}
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 w-full -mt-6 relative z-10">
        <TrustBadges />
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-16">
        <section aria-labelledby="moduller">
          <h2 id="moduller" className="text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-2">
            Görüntü işleme modülleri
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Hazır, sahada kanıtlanmış modüllerle hızlı başlayın; ürününüze özel kusurlar için özel model eğitelim.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {GROUPS.map(({ title, icon: Icon, slugs }) => (
              <div key={title} className="panel-card rounded-2xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#0A0A0A] mb-4">
                  <Icon size={20} className="text-vision" aria-hidden /> {title}
                </h3>
                <ul className="space-y-3">
                  {slugs.map((s) => {
                    const lp = getLandingPage(s);
                    if (!lp) return null;
                    return (
                      <li key={s}>
                        <Link to={`/${s}`} className="group flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-vision mt-0.5 shrink-0" aria-hidden />
                          <span>
                            <span className="font-medium text-[#0A0A0A] group-hover:text-vision-dark">
                              {lp.title.split('|')[0].trim()}
                            </span>
                            {lp.accuracy && (
                              <span className="ml-2 text-xs text-vision-dark bg-vision-50 px-2 py-0.5 rounded">
                                {lp.accuracy}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <article className="panel-card rounded-2xl p-6 sm:p-10 space-y-5 max-w-4xl">
          <GuideBody blocks={BODY} ctaDefault="" />
        </article>

        <section aria-labelledby="sektorler">
          <h2 id="sektorler" className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-6">
            <Factory size={24} className="text-vision" aria-hidden /> Sektörlere göre görüntü işleme
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEO_SECTOR_SLUGS.map((s) => {
              const lp = getLandingPage(s);
              return (
                <Link key={s} to={`/sektor/${s}`} className="panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                  <p className="font-semibold text-[#0A0A0A] mb-1">{lp?.title.split('|')[0].trim()}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{lp?.metaDescription}</p>
                </Link>
              );
            })}
            {[
              ['otomotiv', 'Otomotiv ve yan sanayi'],
              ['metal', 'Metal ve döküm'],
              ['gida', 'Gıda ve içecek'],
            ].map(([s, name]) => (
              <Link key={s} to={`/sektor/${s}`} className="panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                <p className="font-semibold text-[#0A0A0A] mb-1">{name}</p>
                <p className="text-sm text-gray-500">Sektöre özel görüntü işleme senaryoları ve metrikler.</p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="rehberler">
          <h2 id="rehberler" className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-6">
            <Cpu size={24} className="text-vision" aria-hidden /> Görüntü işleme rehberleri
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GUIDES.slice(0, 8).map((g) => (
              <Link key={g.slug} to={`/blog/${g.slug}`} className="panel-card rounded-xl p-5 hover:border-vision/25 transition-colors">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-vision-dark mb-2">{g.category}</p>
                <p className="text-sm font-semibold text-[#0A0A0A] leading-snug">{g.title}</p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="sss" className="max-w-4xl">
          <h2 id="sss" className="text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-6">
            Görüntü işleme hakkında sık sorulan sorular
          </h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group rounded-xl border border-gray-200 bg-white p-5 open:border-vision/30">
                <summary className="cursor-pointer font-medium text-[#0A0A0A] list-none flex justify-between gap-3">
                  {f.q}
                  <span className="text-vision group-open:rotate-45 transition-transform" aria-hidden>+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[#0c2a30] p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Kameralarınız zaten var. Görüntü işlemeyi biz ekleyelim.
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Hat haritanızı ve kamera listenizi birlikte inceleyelim; hangi modülün ne kazandıracağını ölçülebilir hedeflerle
            çıkaralım.
          </p>
          <Link
            to="/iletisim"
            data-track="contact_cta"
            data-track-location="pillar_footer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            Keşif görüşmesi planla <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
