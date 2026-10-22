import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArchitectureDiagram, Bullets, CtaButton, FaqList, LeadForm, PageHero, PilotProcess, RelatedLinks, Section } from '../components/kit';
import { INDUSTRIES, type Lang } from '../content';
import { BUYER_FAQ, CAMERA_APPROACH, COMPANY_DEFINITION, PILOT_CONFIG, UI } from '../content/shared';
import { SITE_URL } from '../data/legalContent';
import { URL_LANG } from '../i18n/routing';
import { breadcrumbSchema, faqSchema, usePageMeta } from '../seo/usePageMeta';

const L = (): Lang => (URL_LANG === 'en' ? 'en' : 'tr');
const home = (l: Lang) => (l === 'en' ? '/en/' : '/');

function useConversionMeta(l: Lang, path: string, title: string, description: string, name: string, faq?: { q: string; a: string }[]) {
  usePageMeta({
    title,
    description,
    schemas: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name, description, url: `${SITE_URL}${path}`, inLanguage: l, publisher: { '@id': `${SITE_URL}/#organization` } },
      breadcrumbSchema([
        { name: UI[l].home, url: `${SITE_URL}${home(l)}` },
        { name, url: `${SITE_URL}${path}` },
      ]),
      ...(faq ? [faqSchema(faq)] : []),
    ],
  });
}

const USE_CASES: Record<Lang, string[]> = {
  en: ['PPE detection', 'Restricted / danger zones', 'Forklift–pedestrian safety', 'Fall detection', 'Fire & smoke', 'Production line monitoring', 'Product counting', 'Visual quality inspection', 'Queue / people counting / occupancy', 'Other'],
  tr: ['KKD / baret tespiti', 'Yasak / tehlikeli bölge', 'Forklift-yaya güvenliği', 'Düşme tespiti', 'Yangın ve duman', 'Üretim hattı izleme / OEE', 'Ürün sayımı', 'Görsel kalite kontrol', 'Kuyruk / kişi sayma / yoğunluk', 'Diğer'],
};

/* ---------------- Kamera değerlendirme ---------------- */
export function CameraAssessmentPage() {
  const l = L();
  const u = UI[l];
  const path = l === 'en' ? '/en/camera-assessment' : '/kamera-degerlendirme';
  const name = l === 'en' ? 'Camera assessment' : 'Kamera değerlendirmesi';
  useConversionMeta(
    l,
    path,
    l === 'en' ? 'Can Your CCTV Run AI Analytics? Free Camera Assessment | Hype Vision' : 'Kameralarınız Yapay Zeka için Uygun mu? Kamera Değerlendirmesi | Hype Vision',
    l === 'en'
      ? 'Find out whether your existing CCTV/IP cameras are suitable for AI video analytics. Tell us about your cameras and use case; our engineers review angle, resolution and lighting.'
      : 'Mevcut CCTV/IP kameralarınızın yapay zeka video analitiğine uygun olup olmadığını öğrenin. Kameralarınızı ve senaryonuzu iletin; mühendislerimiz açı, çözünürlük ve ışığı inceler.',
    name,
    BUYER_FAQ[l].filter((_, i) => [0, 1, 4, 8].includes(i)),
  );

  const f =
    l === 'en'
      ? [
          { name: 'Name', label: 'Name', required: true },
          { name: 'Company', label: 'Company', required: true },
          { name: 'Email', label: 'Business email', type: 'email' as const, required: true },
          { name: 'Country', label: 'Country', required: true },
          { name: 'Industry', label: 'Industry', type: 'select' as const, options: [...INDUSTRIES.map((i) => i.en.name), 'Other'], required: true },
          { name: 'Cameras', label: 'Number of cameras', type: 'number' as const },
          { name: 'UseCase', label: 'Primary use case', type: 'select' as const, options: USE_CASES.en, required: true },
          { name: 'Message', label: 'Camera brands/models, NVR/VMS and anything else we should know', type: 'textarea' as const },
        ]
      : [
          { name: 'Ad_Soyad', label: 'Ad soyad', required: true },
          { name: 'Firma', label: 'Firma', required: true },
          { name: 'Eposta', label: 'Kurumsal e-posta', type: 'email' as const, required: true },
          { name: 'Ulke_Sehir', label: 'Ülke / şehir', required: true },
          { name: 'Sektor', label: 'Sektör', type: 'select' as const, options: [...INDUSTRIES.map((i) => i.tr?.name ?? i.en.name), 'Diğer'], required: true },
          { name: 'Kamera_Sayisi', label: 'Kamera sayısı', type: 'number' as const },
          { name: 'Senaryo', label: 'Öncelikli senaryo', type: 'select' as const, options: USE_CASES.tr, required: true },
          { name: 'Mesaj', label: 'Kamera marka/modeli, NVR/VMS ve bilmemiz gereken diğer bilgiler', type: 'textarea' as const },
        ];

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: home(l) }, { name }]}
        eyebrow={name}
        h1={l === 'en' ? 'Can your CCTV run AI analytics?' : 'Kameralarınız yapay zeka analitiği için uygun mu?'}
        lead={
          l === 'en'
            ? 'Tell us about your cameras and the problem you want to solve. An engineer reviews the setup and tells you honestly what is feasible — and what would need to change.'
            : 'Kameralarınızı ve çözmek istediğiniz problemi anlatın. Bir mühendis kurulumu inceler ve neyin mümkün olduğunu, neyin değişmesi gerektiğini açıkça söyler.'
        }
      />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <div className="space-y-4">
          <LeadForm kind="camera_assessment" lang={l} fields={f} submitLabel={l === 'en' ? 'Request assessment' : 'Değerlendirme iste'} />
          {/* TODO(Hype Vision): kamera karesi yükleme — güvenli bir upload altyapısı (ör. imzalı URL) kurulduğunda eklenecek. */}
          <p className="text-xs text-gray-500">
            {l === 'en'
              ? 'After submitting, we will ask for a few still frames from the relevant cameras via a secure channel.'
              : 'Gönderimden sonra ilgili kameralardan birkaç kareyi güvenli bir kanal üzerinden sizden isteyeceğiz.'}
          </p>
        </div>
        <aside className="space-y-8">
          <Section title={l === 'en' ? 'What we check' : 'Neleri kontrol ediyoruz?'}>
            <Bullets
              items={
                l === 'en'
                  ? ['Stream access (RTSP/ONVIF, NVR)', 'Resolution and distance to the subject', 'Camera angle for the use case', 'Lighting, backlight and night conditions', 'Frame rate for fast processes']
                  : ['Akış erişimi (RTSP/ONVIF, NVR)', 'Çözünürlük ve nesneye mesafe', 'Senaryoya göre kamera açısı', 'Işık, ters ışık ve gece koşulları', 'Hızlı süreçler için kare hızı']
              }
            />
          </Section>
          <Section title={u.cameras}>
            <Bullets items={CAMERA_APPROACH[l]} />
          </Section>
        </aside>
        <div className="lg:col-span-2 space-y-10">
          <Section id="faq" title={u.faq} className="max-w-4xl">
            <FaqList faq={BUYER_FAQ[l].filter((_, i) => [0, 1, 4, 8].includes(i))} />
          </Section>
          <RelatedLinks
            title={u.relatedResources}
            links={
              l === 'en'
                ? [
                    { title: 'How to evaluate existing cameras for computer vision', url: '/en/resources/how-to-evaluate-cameras-for-computer-vision' },
                    { title: 'What are RTSP and ONVIF?', url: '/en/resources/what-is-rtsp-and-onvif' },
                    { title: 'CCTV AI analytics', url: '/en/cctv-ai-analytics' },
                  ]
                : [
                    { title: 'Mevcut IP kameralar yapay zeka için yeterli mi?', url: '/blog/mevcut-ip-kamera-yapay-zeka' },
                    { title: 'Kamera açısı neden önemli?', url: '/blog/kamera-acisi-neden-onemli' },
                    { title: 'CCTV yapay zeka', url: '/cctv-yapay-zeka' },
                  ]
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Pilot ---------------- */
export function PilotPage() {
  const l = L();
  const u = UI[l];
  const path = l === 'en' ? '/en/pilot' : '/pilot';
  const name = l === 'en' ? 'Pilot projects' : 'Pilot süreci';
  const faq = BUYER_FAQ[l].filter((_, i) => [6, 7, 8, 10, 11].includes(i));
  useConversionMeta(
    l,
    path,
    l === 'en' ? 'Computer Vision Pilot Projects: How a Hype Vision Pilot Works' : 'Görüntü İşleme Pilot Projesi: Hype Vision Pilot Süreci',
    l === 'en'
      ? 'How a Hype Vision computer-vision pilot works: discovery, camera assessment, use-case definition, deployment, validation on your own footage, report and rollout decision.'
      : 'Hype Vision görüntü işleme pilotu nasıl işler: keşif, kamera değerlendirmesi, senaryo tanımı, kurulum, kendi görüntünüzde doğrulama, rapor ve yaygınlaştırma kararı.',
    name,
    faq,
  );

  const f =
    l === 'en'
      ? [
          { name: 'Name', label: 'Name', required: true },
          { name: 'Company', label: 'Company', required: true },
          { name: 'Email', label: 'Business email', type: 'email' as const, required: true },
          { name: 'UseCase', label: 'Use case for the pilot', type: 'select' as const, options: USE_CASES.en, required: true },
          { name: 'Message', label: 'Site, number of cameras and goals', type: 'textarea' as const },
        ]
      : [
          { name: 'Ad_Soyad', label: 'Ad soyad', required: true },
          { name: 'Firma', label: 'Firma', required: true },
          { name: 'Eposta', label: 'Kurumsal e-posta', type: 'email' as const, required: true },
          { name: 'Senaryo', label: 'Pilot senaryosu', type: 'select' as const, options: USE_CASES.tr, required: true },
          { name: 'Mesaj', label: 'Tesis, kamera sayısı ve hedefler', type: 'textarea' as const },
        ];

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: home(l) }, { name }]}
        eyebrow={name}
        h1={l === 'en' ? 'A pilot that ends in a decision, not a demo' : 'Demo ile değil, kararla biten bir pilot'}
        lead={
          l === 'en'
            ? 'Every Hype Vision project starts small: a defined use case, a few representative cameras, success criteria written in advance, and validation on your own footage.'
            : 'Her Hype Vision projesi küçük başlar: tanımlı bir senaryo, birkaç temsilî kamera, önceden yazılmış başarı kriterleri ve kendi görüntülerinizde doğrulama.'
        }
      >
        <CtaButton href="#pilot-form" event="pilot_request" location="pilot_hero">
          {u.ctaPilot}
        </CtaButton>
      </PageHero>
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        <Section id="process" title={l === 'en' ? 'Pilot process' : 'Pilot adımları'}>
          <PilotProcess lang={l} />
        </Section>
        {(PILOT_CONFIG.durationWeeks || PILOT_CONFIG.cameraRange) && (
          <Section title={l === 'en' ? 'Typical scope' : 'Tipik kapsam'}>
            <Bullets
              items={[
                ...(PILOT_CONFIG.durationWeeks ? [`${l === 'en' ? 'Duration' : 'Süre'}: ${PILOT_CONFIG.durationWeeks}`] : []),
                ...(PILOT_CONFIG.cameraRange ? [`${l === 'en' ? 'Cameras' : 'Kamera'}: ${PILOT_CONFIG.cameraRange}`] : []),
              ]}
            />
          </Section>
        )}
        <ArchitectureDiagram lang={l} />
        <div className="grid lg:grid-cols-2 gap-10">
          <Section title={l === 'en' ? 'What you provide' : 'Sizden beklenenler'}>
            <Bullets
              items={
                l === 'en'
                  ? ['A use-case owner and a short weekly check-in', 'Network access to the selected cameras or NVR', 'A place for the edge device and power', 'Agreement on success criteria before deployment']
                  : ['Senaryo sahibi ve haftalık kısa değerlendirme', 'Seçilen kameralara veya NVR’a ağ erişimi', 'Edge cihaz için yer ve enerji', 'Kurulumdan önce başarı kriterlerinde mutabakat']
              }
            />
          </Section>
          <Section title={l === 'en' ? 'What you receive' : 'Size sunulanlar'}>
            <Bullets
              items={
                l === 'en'
                  ? ['Configured analytics on the pilot cameras', 'Dashboard and alerts for the agreed recipients', 'Per-camera validation of detections, false alarms and misses', 'A written report with results, limitations and rollout options']
                  : ['Pilot kameralarında yapılandırılmış analitik', 'Belirlenen kişiler için panel ve alarmlar', 'Kamera bazında tespit, yanlış alarm ve kaçırılan olay doğrulaması', 'Sonuç, sınırlama ve yaygınlaştırma seçeneklerini içeren yazılı rapor']
              }
            />
          </Section>
        </div>
        <Section id="faq" title={u.faq} className="max-w-4xl">
          <FaqList faq={faq} />
        </Section>
        <div id="pilot-form" className="scroll-mt-24 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-4">{u.ctaPilot}</h2>
          <LeadForm kind="pilot_request" lang={l} fields={f} submitLabel={u.ctaPilot} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- İş ortaklığı ---------------- */
export function PartnersPage() {
  const l = L();
  const u = UI[l];
  const path = l === 'en' ? '/en/partners' : '/is-ortakligi';
  const name = l === 'en' ? 'Partners' : 'İş ortaklığı';
  useConversionMeta(
    l,
    path,
    l === 'en' ? 'Partner Program: Add AI Video Analytics to Your CCTV Portfolio | Hype Vision' : 'İş Ortaklığı: CCTV Projelerinize Yapay Zeka Analitiği Ekleyin | Hype Vision',
    l === 'en'
      ? 'For CCTV installers, security and VMS integrators, industrial automation companies and resellers: add AI video analytics to existing and new camera projects with Hype Vision.'
      : 'CCTV kurulum firmaları, güvenlik ve VMS entegratörleri, endüstriyel otomasyon firmaları ve bayiler için: mevcut ve yeni kamera projelerinize Hype Vision ile yapay zeka analitiği ekleyin.',
    name,
  );

  const f =
    l === 'en'
      ? [
          { name: 'Name', label: 'Name', required: true },
          { name: 'Company', label: 'Company', required: true },
          { name: 'Email', label: 'Business email', type: 'email' as const, required: true },
          { name: 'Country', label: 'Country / region', required: true },
          { name: 'PartnerType', label: 'Company type', type: 'select' as const, options: ['CCTV installer', 'Security integrator', 'VMS integrator', 'Industrial automation', 'Reseller / distributor', 'Other'], required: true },
          { name: 'Message', label: 'Typical projects and customers', type: 'textarea' as const },
        ]
      : [
          { name: 'Ad_Soyad', label: 'Ad soyad', required: true },
          { name: 'Firma', label: 'Firma', required: true },
          { name: 'Eposta', label: 'Kurumsal e-posta', type: 'email' as const, required: true },
          { name: 'Bolge', label: 'Ülke / bölge', required: true },
          { name: 'Firma_Tipi', label: 'Firma tipi', type: 'select' as const, options: ['CCTV kurulum', 'Güvenlik entegratörü', 'VMS entegratörü', 'Endüstriyel otomasyon', 'Bayi / distribütör', 'Diğer'], required: true },
          { name: 'Mesaj', label: 'Tipik projeleriniz ve müşterileriniz', type: 'textarea' as const },
        ];

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <PageHero
        crumbs={[{ name: u.home, url: home(l) }, { name }]}
        eyebrow={name}
        h1={l === 'en' ? 'Add AI video analytics to your CCTV portfolio' : 'CCTV projelerinize yapay zeka analitiği ekleyin'}
        lead={
          l === 'en'
            ? 'Your customers already have cameras. Hype Vision adds an analytics layer for safety, production and operations on top of the systems you install and maintain.'
            : 'Müşterilerinizin kameraları zaten var. Hype Vision, kurduğunuz ve bakımını yaptığınız sistemlerin üzerine güvenlik, üretim ve operasyon için bir analitik katmanı ekler.'
        }
      >
        <CtaButton href="#partner-form" event="partner_request" location="partners_hero">
          {l === 'en' ? 'Become a partner' : 'İş ortağı olun'}
        </CtaButton>
        <CtaButton href={l === 'en' ? '/en/pilot' : '/pilot'} variant="ghost" location="partners_hero">
          {l === 'en' ? 'Discuss a project' : 'Bir projeyi görüşelim'}
        </CtaButton>
      </PageHero>
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 w-full space-y-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <Section title={l === 'en' ? 'Who this is for' : 'Kimler için?'}>
            <Bullets
              items={
                l === 'en'
                  ? ['CCTV installers and maintenance companies', 'Security and VMS integrators', 'Industrial automation and MES integrators', 'Technology resellers serving industrial customers']
                  : ['CCTV kurulum ve bakım firmaları', 'Güvenlik ve VMS entegratörleri', 'Endüstriyel otomasyon ve MES entegratörleri', 'Sanayi müşterilerine hizmet veren teknoloji bayileri']
              }
            />
          </Section>
          <Section title={l === 'en' ? 'How we work together' : 'Birlikte nasıl çalışırız?'}>
            <Bullets
              items={
                l === 'en'
                  ? [
                      'You bring the customer relationship and camera infrastructure knowledge.',
                      'We support technical evaluation: camera assessment, use-case definition and sizing.',
                      'Pilots follow the same validated process, with your team involved on site.',
                      'Commercial models are agreed per partnership and project.',
                    ]
                  : [
                      'Siz müşteri ilişkisini ve kamera altyapısı bilgisini getirirsiniz.',
                      'Biz teknik değerlendirmeyi destekleriz: kamera değerlendirmesi, senaryo tanımı ve boyutlandırma.',
                      'Pilotlar aynı doğrulanmış süreçle, sahada sizin ekibinizin katılımıyla yürütülür.',
                      'Ticari model iş ortaklığı ve proje bazında belirlenir.',
                    ]
              }
            />
            {/* TODO(Hype Vision): white-label / reseller programı varsa koşulları burada açıklanmalı; doğrulanana kadar yazılmadı. */}
          </Section>
        </div>
        <ArchitectureDiagram lang={l} />
        <Section title={l === 'en' ? 'About Hype Vision' : 'Hype Vision hakkında'} className="max-w-3xl">
          <p className="text-[15px] text-gray-700 leading-relaxed">{COMPANY_DEFINITION[l]}</p>
        </Section>
        <div id="partner-form" className="scroll-mt-24 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-4">{l === 'en' ? 'Become a partner' : 'İş ortağı olun'}</h2>
          <LeadForm kind="partner_request" lang={l} fields={f} submitLabel={l === 'en' ? 'Send' : 'Gönder'} />
        </div>
        <RelatedLinks
          title={u.solutions}
          links={
            l === 'en'
              ? [
                  { title: 'CCTV AI analytics', url: '/en/cctv-ai-analytics' },
                  { title: 'All solutions', url: '/en/solutions' },
                  { title: 'Industrial computer vision', url: '/en/industrial-computer-vision' },
                ]
              : [
                  { title: 'CCTV yapay zeka', url: '/cctv-yapay-zeka' },
                  { title: 'Tüm çözümler', url: '/cozumler' },
                  { title: 'Endüstriyel görüntü işleme', url: '/endustriyel-goruntu-isleme' },
                ]
          }
        />
      </main>
      <Footer />
    </div>
  );
}
