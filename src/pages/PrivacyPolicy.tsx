import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  return (
    <main className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {isTr
            ? 'Son güncelleme: Şubat 2026'
            : 'Last updated: February 2026'}
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '1. Genel Bilgiler' : '1. General Information'}
            </h2>
            <p>
              {isTr
                ? 'Bu gizlilik politikası, Hype Vision web sitesi ve MES çözümlerimizi kullanırken kişisel verilerinizin nasıl işlendiğini açıklar.'
                : 'This privacy policy explains how your personal data is processed when you use the Hype Vision website and our MES solutions.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '2. Toplanan Veriler' : '2. Data We Collect'}
            </h2>
            <p>
              {isTr
                ? 'İletişim formlarımızı veya demo taleplerini kullandığınızda adınız, e-posta adresiniz, telefon numaranız ve şirket bilgileriniz gibi temel iletişim verilerini toplarız.'
                : 'When you use our contact forms or request a demo, we collect basic contact information such as your name, email address, phone number and company details.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '3. Verilerin Kullanım Amaçları' : '3. Purpose of Processing'}
            </h2>
            <p>
              {isTr
                ? 'Toplanan veriler; taleplerinize yanıt vermek, demo planlamak, sözleşme ve teklif süreçlerini yürütmek ve ürünlerimizi geliştirmek amacıyla kullanılır.'
                : 'The data we collect is used to respond to your requests, schedule demos, manage contracts and proposals, and improve our products.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '4. Üçüncü Taraflarla Paylaşım' : '4. Sharing with Third Parties'}
            </h2>
            <p>
              {isTr
                ? 'Verileriniz, yasal yükümlülükler veya sözleşmesel gereklilikler dışında üçüncü taraflarla paylaşılmaz. Altyapı sağlayıcılarımız yalnızca barındırma ve güvenlik amaçlı sınırlı erişime sahiptir.'
                : 'Your data is not shared with third parties except where required by law or contractual obligations. Our infrastructure providers have limited access only for hosting and security purposes.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '5. Haklarınız' : '5. Your Rights'}
            </h2>
            <p>
              {isTr
                ? 'KVKK ve ilgili mevzuat kapsamında, verilerinize erişim talep etme, düzeltilmesini veya silinmesini isteme hakkına sahipsiniz. Talepleriniz için bizimle iletişime geçebilirsiniz: hello@hypevisionlab.com'
                : 'Under applicable data protection laws, you have the right to request access, correction or deletion of your data. You can contact us for any requests at: hello@hypevisionlab.com'}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

