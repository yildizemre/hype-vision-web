import { Shield, FileText, Cookie } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const LEGAL_ICONS: Record<string, LucideIcon> = {
  'gizlilik-politikasi': Shield,
  'hizmet-sartlari': FileText,
  'cerez-politikasi': Cookie,
};

export type LegalSection = {
  id?: string;
  heading?: string;
  paragraphs: string[];
};

export type LegalPageData = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  summary: string;
  lastUpdated: string;
  Icon: LucideIcon;
  sections: LegalSection[];
};

export function headingToId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[ğ]/g, 'g')
    .replace(/[ü]/g, 'u')
    .replace(/[ş]/g, 's')
    .replace(/[ı]/g, 'i')
    .replace(/[ö]/g, 'o')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const legalPagesList: LegalPageData[] = [
  {
    slug: 'gizlilik-politikasi',
    title: 'Gizlilik Politikası',
    shortTitle: 'Gizlilik',
    Icon: Shield,
    metaDescription:
      'Hype Vision (Hype Teknoloji) gizlilik politikası: kişisel verilerin toplanması, KVKK kapsamında haklarınız, veri güvenliği ve saklama süreleri. Beykoz, İstanbul.',
    summary:
      'Kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu KVKK kapsamında şeffaf biçimde açıklıyoruz.',
    lastUpdated: '3 Haziran 2026',
    sections: [
      {
        id: 'genel',
        paragraphs: [
          'Bu Gizlilik Politikası, Hype Teknoloji (“Hype Vision”, “biz”) tarafından işletilen hypevisionlab.com web sitesi ve Hype Vision platformu kapsamında kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.',
          '6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuata uygun hareket ederiz.',
        ],
      },
      {
        id: 'veri-sorumlusu',
        heading: 'Veri sorumlusu',
        paragraphs: [
          'Hype Teknoloji — Yeni Riva Yolu, Beykoz, 34805, İstanbul, Türkiye',
          'E-posta: info@hypevisionlab.com · Telefon: 0541 862 91 90',
        ],
      },
      {
        id: 'toplanan-veriler',
        heading: 'Toplanan veriler',
        paragraphs: [
          'Web sitemiz üzerinden iletişim formu, e-posta veya telefon yoluyla paylaştığınız ad, soyad, şirket, e-posta, telefon ve mesaj içeriği.',
          'Platform kullanımında: kullanıcı hesap bilgileri, rol tanımları, oturum kayıtları ve yapılandırma tercihleri.',
          'Teknik veriler: IP adresi, tarayıcı türü, cihaz bilgisi, çerez verileri ve site kullanım istatistikleri.',
          'Hype Vision hizmeti kapsamında işlenen görüntü ve analiz verileri müşteri sözleşmesine ve KVKK’ya uygun şekilde işlenir; ham video varsayılan olarak uzun süreli arşivlenmez.',
        ],
      },
      {
        id: 'islenme-amaclari',
        heading: 'Verilerin işlenme amaçları',
        paragraphs: [
          'Hizmet sunumu, keşif görüşmesi ve iletişim taleplerinin yanıtlanması.',
          'Platform güvenliği, performans izleme ve teknik destek.',
          'Yasal yükümlülüklerin yerine getirilmesi.',
          'Açık rızanız dahilinde pazarlama iletişimi (bülten vb.).',
        ],
      },
      {
        id: 'veri-paylasimi',
        heading: 'Veri paylaşımı',
        paragraphs: [
          'Kişisel verileriniz, hizmetin sunulması için gerekli altyapı sağlayıcıları (barındırma, e-posta) ile sınırlı ve sözleşmesel güvenceler altında paylaşılabilir.',
          'Yasal zorunluluk halinde yetkili kamu kurumlarıyla paylaşım yapılabilir.',
          'Kişisel verileriniz üçüncü taraflara satılmaz.',
        ],
      },
      {
        id: 'saklama-suresi',
        heading: 'Saklama süresi',
        paragraphs: [
          'Veriler, işleme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri çerçevesinde muhafaza edilir; süre sonunda silinir, yok edilir veya anonim hale getirilir.',
        ],
      },
      {
        id: 'kvkk-haklari',
        heading: 'Haklarınız (KVKK md. 11)',
        paragraphs: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme, itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.',
          'Taleplerinizi info@hypevisionlab.com adresine iletebilirsiniz.',
        ],
      },
      {
        id: 'guvenlik',
        heading: 'Güvenlik',
        paragraphs: [
          'Verilerinizi korumak için erişim kontrolü, şifreleme, ağ güvenliği ve rol bazlı yetkilendirme uygulanır.',
        ],
      },
      {
        id: 'guncellemeler',
        heading: 'Politika güncellemeleri',
        paragraphs: [
          'Bu politika güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.',
        ],
      },
    ],
  },
  {
    slug: 'hizmet-sartlari',
    title: 'Hizmet Şartları',
    shortTitle: 'Hizmet',
    Icon: FileText,
    metaDescription:
      'Hype Vision hizmet şartları: platform kullanım koşulları, kullanıcı yükümlülükleri, fikri mülkiyet, sorumluluk sınırları ve uygulanacak hukuk. Hype Teknoloji.',
    summary:
      'Hype Vision platformunun kullanımına ilişkin hak, yükümlülük ve sorumlulukları net biçimde tanımlar.',
    lastUpdated: '3 Haziran 2026',
    sections: [
      {
        id: 'genel',
        paragraphs: [
          'Bu Hizmet Şartları, Hype Teknoloji tarafından sunulan Hype Vision web sitesi ve yapay zeka destekli görüntü analiz platformunun kullanımına ilişkin koşulları düzenler.',
          'Siteyi veya hizmeti kullanarak bu şartları kabul etmiş sayılırsınız.',
        ],
      },
      {
        id: 'hizmet-kapsami',
        heading: 'Hizmet kapsamı',
        paragraphs: [
          'Hype Vision; mevcut IP kameralardan görüntü alarak İSG, kalite, verimlilik ve güvenlik denetimlerini yapay zeka ile analiz eden bir yazılım platformudur.',
          'Hizmet kapsamı, müşteri sözleşmesi ve keşif sonrası belirlenen modüllerle sınırlıdır.',
        ],
      },
      {
        id: 'kullanici-yukumlulukleri',
        heading: 'Kullanıcı yükümlülükleri',
        paragraphs: [
          'Platform erişim bilgilerinizi gizli tutmak ve yetkisiz kullanımı önlemek.',
          'Yasalara, KVKK’ya ve işyeri iç düzenlemelerine uygun kullanım.',
          'Kamera ve personel verilerinin işlenmesi için gerekli aydınlatma ve hukuki dayanağın sağlanması (işveren/müşteri sorumluluğunda).',
        ],
      },
      {
        id: 'fikri-mulkiyet',
        heading: 'Fikri mülkiyet',
        paragraphs: [
          'Hype Vision yazılımı, arayüzü, markası ve dokümantasyonu Hype Teknoloji’ye aittir. İzinsiz kopyalama, dağıtma veya tersine mühendislik yasaktır.',
        ],
      },
      {
        id: 'sorumluluk',
        heading: 'Hizmet seviyesi ve sorumluluk',
        paragraphs: [
          'Hizmet, makul ticari çaba ile sunulur. Kesintisiz veya hatasız çalışma garantisi verilmez.',
          'Yapay zeka çıktıları karar destek amaçlıdır; nihai operasyonel ve hukuki sorumluluk müşteriye aittir.',
          'Mücbir sebep hallerinde hizmet askıya alınabilir.',
        ],
      },
      {
        id: 'fesih',
        heading: 'Fesih',
        paragraphs: [
          'Sözleşme koşullarına aykırılık halinde erişim askıya alınabilir veya sonlandırılabilir.',
          'Fesih sonrası veri iade ve silme süreçleri sözleşmede belirtilen şekilde yürütülür.',
        ],
      },
      {
        id: 'hukuk',
        heading: 'Uygulanacak hukuk',
        paragraphs: [
          'Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda İstanbul (Anadolu) mahkemeleri ve icra daireleri yetkilidir.',
        ],
      },
      {
        id: 'iletisim',
        heading: 'İletişim',
        paragraphs: [
          'Sorularınız için: info@hypevisionlab.com · 0541 862 91 90',
        ],
      },
    ],
  },
  {
    slug: 'cerez-politikasi',
    title: 'Çerez Politikası',
    shortTitle: 'Çerezler',
    Icon: Cookie,
    metaDescription:
      'Hype Vision çerez politikası: web sitesinde kullanılan çerez türleri, üçüncü taraf çerezleri, tercih yönetimi ve tarayıcı ayarları. KVKK uyumlu bilgilendirme.',
    summary:
      'hypevisionlab.com’da hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklar.',
    lastUpdated: '3 Haziran 2026',
    sections: [
      {
        id: 'genel',
        paragraphs: [
          'Bu Çerez Politikası, hypevisionlab.com web sitesinde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi verir.',
        ],
      },
      {
        id: 'cerez-nedir',
        heading: 'Çerez nedir?',
        paragraphs: [
          'Çerezler, web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Site işlevselliği, güvenlik ve kullanım analizi için kullanılabilir.',
        ],
      },
      {
        id: 'cerez-turleri',
        heading: 'Kullandığımız çerez türleri',
        paragraphs: [
          'Zorunlu çerezler: Sitenin temel işlevleri ve güvenliği için gereklidir.',
          'Performans / analitik çerezler: Ziyaretçi sayısı, sayfa görüntüleme ve trafik kaynaklarını anonim olarak anlamamıza yardımcı olur.',
          'Tercih çerezleri: Dil veya görüntüleme tercihlerinizi hatırlar.',
        ],
      },
      {
        id: 'ucuncu-taraf',
        heading: 'Üçüncü taraf çerezleri',
        paragraphs: [
          'Analitik çerezler yalnızca çerez bandında "Kabul et" seçeneğini tercih etmeniz halinde yüklenir. "Reddet" seçeneğinde Google Analytics veya benzeri analitik araçlar devreye girmez.',
          'Kabul etmeniz durumunda Google Analytics 4 (GA4) kullanılabilir; ziyaretçi sayısı, sayfa görüntüleme ve trafik kaynakları anonim/agrege düzeyde ölçülür. IP anonimleştirme etkindir. Detaylar: Google gizlilik politikası (policies.google.com).',
        ],
      },
      {
        id: 'cerez-yonetimi',
        heading: 'Çerezleri yönetme',
        paragraphs: [
          'Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması sitenin bazı bölümlerinin çalışmamasına neden olabilir.',
        ],
      },
      {
        id: 'guncellemeler',
        heading: 'Güncellemeler',
        paragraphs: [
          'Bu politika güncellenebilir. Son güncelleme tarihi sayfa üstünde belirtilir.',
          'Sorularınız için: info@hypevisionlab.com',
        ],
      },
    ],
  },
];

export const legalPages: Record<string, LegalPageData> = Object.fromEntries(
  legalPagesList.map((p) => [p.slug, p])
);

export const legalNavLinks = legalPagesList.map(({ slug, title, shortTitle, summary, Icon }) => ({
  slug,
  title,
  shortTitle,
  summary,
  Icon,
  href: `/${slug}`,
}));

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61588502380203',
  instagram: 'https://www.instagram.com/hypevisionlab/',
} as const;

export const SITE_URL = 'https://hypevisionlab.com';

export const HOME_TITLE =
  "Hype Vision | Endüstriyel Yapay Zeka — İSG, Kalite, Verimlilik (2020'den Beri)";

export const HOME_DESCRIPTION =
  "Hype Teknoloji — 2020'den beri endüstriyel AI. Mevcut IP kameralarınızla (RTSP/ONVIF) İSG/KKD analizi, kalite kontrol, personel verimliliği, OEE. Edge/Cloud, KVKK uyumlu. Beykoz, İstanbul.";
