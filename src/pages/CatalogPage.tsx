import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Download, Loader2, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../data/legalContent';
import { CATALOG_PDF_PATH } from '../data/siteConfig';
import { submitCatalogDownload } from '../lib/forms';

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function CatalogPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.title = 'Endüstriyel AI Kataloğu | Hype Vision';
    setMeta(
      'description',
      'Hype Vision 21 sayfalık endüstriyel yapay zeka kataloğunu indirin. İSG, kalite kontrol, OEE ve KKD modülleri — teknik künyeler ve doğruluk aralıkları.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/katalog`;
  }, []);

  const triggerDownload = () => {
    const a = document.createElement('a');
    a.href = CATALOG_PDF_PATH;
    a.download = 'Hype_Vision_Katalog.pdf';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !company.trim() || !email.trim() || !phone.trim()) {
      setError('Ad soyad, firma, e-posta ve telefon zorunludur.');
      return;
    }
    setLoading(true);
    const result = await submitCatalogDownload({ name, company, email, phone, address });
    setLoading(false);
    if (result.ok) {
      setDone(true);
      triggerDownload();
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <main className="flex-1 pt-16 lg:pt-[4.25rem]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
                Ürün kataloğu
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#0A0A0A] leading-tight mb-4">
                Endüstriyel yapay zeka çözümleri kataloğu
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                21 sayfalık katalog; modül künyeleri, doğruluk aralıkları, teknik gereksinimler ve 16 sık sorulan
                soruyu içerir. İSG, kalite kontrol, personel verimliliği ve ONVIF/RTSP entegrasyonu tek dokümanda.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'KKD, baret, tehlikeli bölge ve forklift-yaya modülleri',
                  'Kalite kontrol OK/RED ve yüzey kusuru tespiti',
                  'OEE, idle time ve personel verimliliği KPI',
                  'Edge/Cloud mimari ve KVKK uyum rehberi',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <FileText size={16} className="text-vision shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400">
                GTÜ Teknopark Gebze · Hype Vision · 2020&apos;den beri endüstriyel AI
              </p>
            </div>

            <div className="panel-card rounded-2xl p-6 sm:p-8 shadow-lg shadow-vision/5">
              {done ? (
                <div className="text-center py-6">
                  <CheckCircle2 size={48} className="text-vision mx-auto mb-4" />
                  <h2 className="text-lg font-semibold text-[#0A0A0A] mb-2">Katalog indiriliyor</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    İndirme başlamadıysa aşağıdaki bağlantıyı kullanın.
                  </p>
                  <button
                    type="button"
                    onClick={triggerDownload}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-vision px-6 py-3 rounded-lg hover:bg-vision-dark transition-colors"
                  >
                    <Download size={16} />
                    PDF&apos;yi tekrar indir
                  </button>
                  <p className="mt-6 text-xs text-gray-400">
                    Ekibimiz en kısa sürede sizinle iletişime geçecektir.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-[#0A0A0A] mb-1">Kataloğu indirmek için formu doldurun</h2>
                  <p className="text-xs text-gray-500 mb-6">
                    Bilgileriniz yalnızca katalog talebiniz için kullanılır.
                  </p>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="cat-name" className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Ad soyad *
                      </label>
                      <input
                        id="cat-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="cat-company" className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Firma / şirket *
                      </label>
                      <input
                        id="cat-company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="cat-email" className="block text-xs font-semibold text-gray-600 mb-1.5">
                        E-posta *
                      </label>
                      <input
                        id="cat-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="cat-phone" className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Telefon *
                      </label>
                      <input
                        id="cat-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05xx xxx xx xx"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="cat-address" className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Adres
                      </label>
                      <input
                        id="cat-address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="İl / ilçe veya tesis adresi"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15"
                      />
                    </div>

                    {error ? (
                      <p className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                        {error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-vision text-white text-sm font-semibold hover:bg-vision-dark disabled:opacity-60 transition-colors"
                    >
                      {loading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                      Kataloğu indir
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sorularınız mı var?{' '}
            <Link to="/sss" className="text-vision-dark font-medium hover:underline">
              SSS sayfasına
            </Link>{' '}
            göz atın veya{' '}
            <Link to="/iletisim" className="text-vision-dark font-medium hover:underline">
              doğrudan iletişime geçin
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
