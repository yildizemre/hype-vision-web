import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';

const FOOTER_LOGO = '/hypefoooterlogo.png';

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Ürün: [
    { label: 'Kamera Entegrasyonu', href: '#kamera' },
    { label: 'Canlı Panel', href: '#urunler' },
    { label: 'Denetim Modülleri', href: '#denetim' },
    { label: 'İletişim', href: '#demo' },
  ],
  Çözümler: [
    { label: 'Kimler İçin', href: '#kimler-icin' },
    { label: 'İSG Denetimi', href: '#denetim' },
    { label: 'Kalite Kontrol', href: '#denetim' },
    { label: 'SSS', href: '#sss' },
  ],
  Kurumsal: [
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Platform Süreci', href: '#platform' },
    { label: 'Sektörler', href: '#sektorler' },
    { label: 'İletişim', href: '#demo' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/8" style={{ borderColor: 'rgba(255,255,255,0.08)' }} role="contentinfo">
      <div className="border-b border-white/8 py-4 text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <p className="text-xs text-gray-600 font-light px-4">
          İnsan gözüyle takibi zor süreçlerde yapay zeka ile verimlilik artışı —{' '}
          <span className="text-gray-500 font-medium">7/24 otomatik denetim.</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6" aria-label="Hype Vision">
              <img
                src={FOOTER_LOGO}
                alt="Hype Vision"
                width={180}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
              İnsan denetimini yapay zekaya devrederek İSG, verimlilik, kalite ve güvenlikte
              ölçülebilir sonuç üretiyoruz.
            </p>
            <address className="not-italic text-xs text-gray-600 leading-relaxed space-y-1">
              <p>Yeni Riva Yolu</p>
              <p>Beykoz, 34805</p>
              <p>Türkiye</p>
              <div className="pt-3 space-y-1">
                <p>
                  <a href="tel:+905418629190" className="hover:text-gray-400 transition-colors">
                    0541 862 91 90
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@hypevisionlab.com"
                    className="hover:text-gray-400 transition-colors flex items-center gap-1.5"
                  >
                    <Mail size={11} />
                    info@hypevisionlab.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-light">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Bülten</h4>
            <p className="text-xs text-gray-500 mb-3 font-light">
              Endüstriyel AI ve akıllı üretim güncellemeleri
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-gray-600 outline-none focus:border-white/20 transition-colors"
              />
              <button
                type="button"
                className="text-xs font-semibold text-white px-4 py-2 rounded-lg whitespace-nowrap bg-vision hover:bg-vision-dark transition-colors"
              >
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-light">
            © {new Date().getFullYear()} Hype Vision. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs text-gray-600">
              {['Gizlilik Politikası', 'Hizmet Şartları', 'Çerez Politikası'].map((item, i) => (
                <span key={item} className="flex items-center gap-4">
                  {i > 0 && <span className="text-gray-700">·</span>}
                  <a href="#" className="hover:text-gray-400 transition-colors">{item}</a>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors" aria-label="Twitter">
                <Twitter size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
