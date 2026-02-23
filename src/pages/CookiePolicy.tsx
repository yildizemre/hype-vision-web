import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookiePolicy: React.FC = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  return (
    <main className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {isTr ? 'Çerez Politikası' : 'Cookie Policy'}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {isTr
            ? 'Bu politika, Hype Vision web sitesinde kullanılan çerez türlerini ve amaçlarını açıklar.'
            : 'This policy explains the types of cookies used on the Hype Vision website and their purposes.'}
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '1. Çerez Nedir?' : '1. What Are Cookies?'}
            </h2>
            <p>
              {isTr
                ? 'Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Site deneyiminizi iyileştirmek ve kullanım istatistiklerini toplamak için kullanılır.'
                : 'Cookies are small text files placed on your browser when you visit a website. They are used to improve your experience and collect usage statistics.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '2. Kullandığımız Çerez Türleri' : '2. Types of Cookies We Use'}
            </h2>
            <p>
              {isTr
                ? 'Zorunlu çerezler (oturum yönetimi), performans çerezleri (trafik ve kullanım analizi) ve tercihlerinizin hatırlanması için işlevsel çerezler kullanabiliriz.'
                : 'We may use strictly necessary cookies (session management), performance cookies (traffic and usage analytics) and functional cookies to remember your preferences.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '3. Çerez Tercihleri' : '3. Cookie Preferences'}
            </h2>
            <p>
              {isTr
                ? 'Tarayıcı ayarlarınız üzerinden çerezleri devre dışı bırakabilir veya silebilirsiniz. Ancak bu durumda web sitemizin bazı bölümleri doğru çalışmayabilir.'
                : 'You can disable or delete cookies via your browser settings. However, some parts of our website may not function properly if cookies are disabled.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '4. İletişim' : '4. Contact'}
            </h2>
            <p>
              {isTr
                ? 'Çerez politikamızla ilgili sorularınız için bizimle şu adresten iletişime geçebilirsiniz: hello@hypevisionlab.com'
                : 'If you have any questions about this cookie policy, you can contact us at: hello@hypevisionlab.com'}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicy;

