import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService: React.FC = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  return (
    <main className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {isTr ? 'Hizmet Şartları' : 'Terms of Service'}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {isTr
            ? 'Hype Vision MES çözümlerini ve web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz.'
            : 'By using Hype Vision MES solutions and this website, you agree to the following terms.'}
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '1. Hizmet Kapsamı' : '1. Scope of Service'}
            </h2>
            <p>
              {isTr
                ? 'MES, görüntü işleme ve entegrasyon çözümlerimiz; sözleşmelerde belirtilen özellikler, SLA ve kullanım koşulları çerçevesinde sunulur.'
                : 'Our MES, computer vision and integration solutions are provided within the scope, SLA and usage conditions defined in the relevant contracts.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '2. Kullanıcı Yükümlülükleri' : '2. User Obligations'}
            </h2>
            <p>
              {isTr
                ? 'Kullanıcılar, sistemlerimize yalnızca yetkili kişilerle erişmeli ve hesabının güvenliğinden sorumludur. Üçüncü kişilerin haklarını ihlal edecek şekilde kullanım yasaktır.'
                : 'Users must access our systems only with authorized personnel and are responsible for keeping their accounts secure. Use that infringes the rights of third parties is prohibited.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '3. Fikri Mülkiyet Hakları' : '3. Intellectual Property'}
            </h2>
            <p>
              {isTr
                ? 'Yazılım, algoritmalar, arayüzler ve dokümantasyon dahil olmak üzere tüm fikri mülkiyet hakları Hype Vision veya lisans verenlerine aittir.'
                : 'All intellectual property rights, including software, algorithms, interfaces and documentation, belong to Hype Vision or its licensors.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '4. Sorumluluk Sınırı' : '4. Limitation of Liability'}
            </h2>
            <p>
              {isTr
                ? 'Dolaylı, arızi veya sonuçsal zararlardan sorumlu değiliz. Doğrudan zararlar, ilgili sözleşmede belirtilen sınırlar dahilinde değerlendirilir.'
                : 'We are not liable for any indirect, incidental or consequential damages. Direct damages are limited to the amounts specified in the applicable contract.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTr ? '5. Uygulanacak Hukuk' : '5. Governing Law'}
            </h2>
            <p>
              {isTr
                ? 'İşbu şartlar, Türkiye Cumhuriyeti kanunlarına tabidir ve uyuşmazlıklar İstanbul (Anadolu) mahkemelerinde çözümlenir.'
                : 'These terms are governed by the laws of the Republic of Turkey and any disputes shall be resolved by the courts of Istanbul (Anadolu).'}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;

