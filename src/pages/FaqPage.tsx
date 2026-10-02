import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../data/legalContent';
import { CATALOG_FAQ } from '../data/catalogFaq';

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Sık Sorulan Sorular | Hype Vision';
    setMeta(
      'description',
      'Hype Vision endüstriyel yapay zeka SSS: kamera entegrasyonu, KVKK uyumu, Edge/Cloud mimari, doğruluk oranları, kurulum süresi ve pilot süreci.'
    );

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/sss#faq`,
      mainEntity: CATALOG_FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };
    const scriptId = 'faq-page-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <main className="flex-1 pt-16 lg:pt-[4.25rem]">
        <div className="hero-bg border-b border-vision/15 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">SSS</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Sık sorulan sorular</h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              Endüstriyel yapay zeka, kamera entegrasyonu, KVKK ve kurulum hakkında 16 soru — katalogumuzdan derlendi.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-3">
            {CATALOG_FAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={item.q}
                  className="panel-card rounded-xl overflow-hidden border border-gray-100"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50/80 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h2 className="text-sm sm:text-base font-semibold text-[#0A0A0A]" itemProp="name">
                      {item.q}
                    </h2>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen ? (
                    <div
                      className="px-5 pb-5 pt-0 border-t border-gray-100"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed pt-4" itemProp="text">
                        {item.a}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div className="mt-12 panel-card rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-2">Daha fazla detay mı lazım?</h2>
            <p className="text-sm text-gray-500 mb-5">
              21 sayfalık teknik kataloğumuzu indirin veya demo talep edin.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/katalog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-vision px-6 py-2.5 rounded-lg hover:bg-vision-dark transition-colors"
              >
                Katalogu indir
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 text-sm font-semibold text-vision-dark border border-vision/30 px-6 py-2.5 rounded-lg hover:bg-vision-50 transition-colors"
              >
                İletişime geçin
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
