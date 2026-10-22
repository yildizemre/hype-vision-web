import type { GuideBlock } from '../data/guides';
import type { Faq, Lang, SolutionId } from './types';

export type HubCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  definition: string;
  blocks: GuideBlock[];
  faq: Faq[];
};

export type Hub = {
  id: 'industrial-cv' | 'cctv-ai';
  urls: Record<Lang, string>;
  solutions: SolutionId[];
  resources: Record<Lang, string[]>;
  copy: Record<Lang, HubCopy>;
};

export const HUBS: Hub[] = [
  {
    id: 'industrial-cv',
    urls: { tr: '/endustriyel-goruntu-isleme', en: '/en/industrial-computer-vision' },
    solutions: [
      'ppe-detection',
      'restricted-area-monitoring',
      'forklift-pedestrian-detection',
      'fall-detection',
      'fire-smoke-detection',
      'production-line-monitoring',
      'product-counting',
      'visual-quality-inspection',
      'workforce-analytics',
      'anomaly-detection',
    ],
    resources: {
      en: ['/en/resources/edge-vs-cloud-video-analytics', '/en/resources/how-to-evaluate-cameras-for-computer-vision', '/en/resources/planning-a-computer-vision-pilot'],
      tr: ['/blog/goruntu-isleme-nedir', '/blog/edge-ai-ve-cloud-ai-farki', '/blog/goruntu-isleme-pilot-projesi-planlama'],
    },
    copy: {
      en: {
        metaTitle: 'Industrial Computer Vision & AI Video Analytics | Hype Vision',
        metaDescription:
          'What industrial computer vision is, how existing CCTV is used for AI analytics, edge vs on-premise vs cloud, manufacturing use cases, camera requirements, deployment, privacy and pilots.',
        eyebrow: 'Industrial computer vision',
        h1: 'Industrial computer vision and AI video analytics',
        lead: 'A practical guide for HSE, operations and plant managers: what computer vision can do in industrial sites, what it needs, and how to start without replacing your camera system.',
        definition:
          'Industrial computer vision is the use of cameras and AI models to automatically detect, measure and classify what happens in factories, warehouses and other operational sites — for example PPE compliance, people in danger zones, line stops, product counts or visible defects — and turn it into alerts and data.',
        blocks: [
          { type: 'h2', id: 'existing-cctv', text: 'How is existing CCTV used for AI analytics?' },
          { type: 'p', text: 'Most industrial sites already have IP cameras recording to an NVR or VMS for security. Those cameras expose video streams (typically via **RTSP**, often discoverable via **ONVIF**). An analytics system reads the stream, runs detection models on each frame, applies rules (zones, schedules, durations) and outputs events. The cameras and recording system stay as they are.' },
          { type: 'p', text: 'Not every view is suitable for every use case. A camera that is fine for detecting a person in a restricted zone may be too far away to check safety glasses. That is why camera assessment comes before any commitment — see [how to evaluate cameras for computer vision](/en/resources/how-to-evaluate-cameras-for-computer-vision).' },
          { type: 'h2', id: 'deployment-models', text: 'Edge vs on-premise vs cloud' },
          {
            type: 'table',
            head: ['', 'Edge / on-premise', 'Cloud', 'Hybrid'],
            rows: [
              ['Where video is processed', 'On hardware inside the site network', 'In a cloud environment', 'On-site'],
              ['Video leaves the site', 'No', 'Yes', 'No (events only)'],
              ['Bandwidth need', 'Low', 'High (continuous upload)', 'Low'],
              ['Typical fit', 'Plants, banks, sensitive sites', 'Small, distributed sites', 'Multi-site organisations'],
            ],
          },
          { type: 'p', text: 'For most industrial projects, on-premise processing is the default because it keeps video inside the network and works with limited internet bandwidth. More detail: [edge vs cloud video analytics](/en/resources/edge-vs-cloud-video-analytics).' },
          { type: 'h2', id: 'use-cases', text: 'Typical manufacturing use cases' },
          { type: 'h3', text: 'Workplace safety' },
          { type: 'p', text: '[PPE detection](/en/solutions/ppe-detection), [restricted area monitoring](/en/solutions/restricted-area-monitoring), [forklift–pedestrian detection](/en/solutions/forklift-pedestrian-detection), [fall detection](/en/solutions/fall-detection) and [fire and smoke detection](/en/solutions/fire-smoke-detection) give HSE teams continuous coverage instead of periodic walk-arounds.' },
          { type: 'h3', text: 'Quality inspection' },
          { type: 'p', text: '[Visual quality inspection](/en/solutions/visual-quality-inspection) detects visible defects at line speed. Unlike safety use cases, it usually needs dedicated cameras and lighting at the inspection point.' },
          { type: 'h3', text: 'Production and operational analytics' },
          { type: 'p', text: '[Production line monitoring](/en/solutions/production-line-monitoring), [product counting](/en/solutions/product-counting) and [workstation analytics](/en/solutions/workforce-analytics) measure running time, micro-stops, output and bottlenecks — including on older machines without PLC data.' },
          { type: 'h2', id: 'camera-requirements', text: 'Camera requirements' },
          {
            type: 'ul',
            items: [
              '**Stream access:** RTSP/ONVIF from the camera or NVR.',
              '**Resolution and distance:** the subject must cover enough pixels; 1080p is usually enough for people-level events at moderate distance.',
              '**Angle:** angled views from above work better than strict top-down views for PPE and posture.',
              '**Lighting:** stable lighting or good IR for night operation; strong backlight is a common problem.',
              '**Frame rate:** fast processes (vehicles, conveyors) need higher frame rates.',
            ],
          },
          { type: 'h2', id: 'deployment', text: 'Deployment process and integration' },
          { type: 'p', text: 'A typical project moves from discovery and camera assessment to a defined pilot, validation on your own footage, and a rollout decision. Events are delivered to a dashboard and notifications, and can be sent to other systems via REST API/webhooks or local relay outputs. See [how a pilot works](/en/pilot).' },
          { type: 'h2', id: 'privacy', text: 'Privacy' },
          { type: 'p', text: 'Industrial safety and operations analytics do not need to identify people. Hype Vision does not use face recognition for these use cases. With on-premise processing, video stays inside your network, and retention and access rules follow your GDPR/KVKK policies.' },
          { type: 'h2', id: 'limitations', text: 'Limitations worth knowing' },
          {
            type: 'ul',
            items: [
              'Computer vision only sees what the camera sees; occlusion, distance and lighting set the limits.',
              'Camera-based monitoring is not a substitute for safety-rated machine guarding or certified fire detection.',
              'Performance varies per camera and must be measured on site, not quoted from a datasheet.',
            ],
          },
          { type: 'h2', id: 'hypevision', text: 'Where Hype Vision fits' },
          { type: 'p', text: 'Hype Vision develops computer-vision and AI video-analytics solutions that run on existing IP/CCTV cameras for industrial safety, manufacturing, quality and operational monitoring. The team is based at GTÜ Teknopark in Gebze, Türkiye, and has been working on industrial AI projects since 2020.' },
          { type: 'cta', text: 'Not sure whether your cameras are suitable? Send a few frames and the problem you want to solve.' },
        ],
        faq: [
          { q: 'What is the difference between machine vision and computer vision?', a: 'Machine vision traditionally refers to rule-based inspection systems with dedicated industrial cameras and controlled lighting. Computer vision is the broader field; in industry today it usually means deep-learning models that also work on general CCTV footage and in variable conditions.' },
          { q: 'Do we need GPUs on site?', a: 'For on-premise processing, an edge device with suitable acceleration is used. The hardware is sized to the number of cameras and analytics during discovery.' },
          { q: 'How long does a pilot take?', a: 'It depends on the use case and number of cameras. Ready-made safety analytics can be deployed quickly; custom quality inspection models need time for data collection and validation.' },
        ],
      },
      tr: {
        metaTitle: 'Endüstriyel Görüntü İşleme ve Yapay Zeka Video Analitiği | Hype Vision',
        metaDescription:
          'Endüstriyel görüntü işleme nedir, mevcut CCTV yapay zeka için nasıl kullanılır, edge / tesis içi / bulut farkı, fabrika kullanım alanları, kamera gereksinimleri, kurulum, gizlilik ve pilot.',
        eyebrow: 'Endüstriyel görüntü işleme',
        h1: 'Endüstriyel görüntü işleme ve yapay zeka video analitiği',
        lead: 'İSG, operasyon ve fabrika yöneticileri için pratik rehber: görüntü işleme sahada neler yapabilir, neye ihtiyaç duyar ve kamera sistemini değiştirmeden nasıl başlanır?',
        definition:
          'Endüstriyel görüntü işleme; fabrika, depo ve diğer operasyon alanlarında olanları kamera ve yapay zeka modelleriyle otomatik olarak tespit eden, ölçen ve sınıflandıran — örneğin KKD uyumu, tehlikeli bölgedeki kişi, hat duruşu, ürün sayısı veya görünür kusur — ve bunu alarm ile veriye dönüştüren teknolojidir.',
        blocks: [
          { type: 'h2', id: 'mevcut-cctv', text: 'Mevcut CCTV yapay zeka analitiği için nasıl kullanılır?' },
          { type: 'p', text: 'Çoğu sanayi tesisinde güvenlik amacıyla NVR veya VMS’e kayıt yapan IP kameralar zaten vardır. Bu kameralar video akışı sunar (genellikle **RTSP** ile, çoğu zaman **ONVIF** ile keşfedilebilir). Analitik sistemi akışı okur, her karede tespit modelleri çalıştırır, kuralları (bölge, zaman, süre) uygular ve olay üretir. Kameralar ve kayıt sistemi olduğu gibi kalır. Ayrıntılar: [RTSP nedir?](/blog/rtsp-nedir) ve [ONVIF nedir?](/blog/onvif-nedir)' },
          { type: 'p', text: 'Her görüş her senaryoya uygun değildir. Yasak bölgedeki kişiyi tespit etmeye yeten bir kamera, koruyucu gözlüğü kontrol etmek için fazla uzak olabilir. Bu yüzden her taahhütten önce [kamera değerlendirmesi](/kamera-degerlendirme) yapılır.' },
          { type: 'h2', id: 'kurulum-modelleri', text: 'Edge, tesis içi ve bulut' },
          {
            type: 'table',
            head: ['', 'Edge / tesis içi', 'Bulut', 'Hibrit'],
            rows: [
              ['Görüntü nerede işlenir?', 'Tesis ağındaki donanımda', 'Bulut ortamında', 'Sahada'],
              ['Görüntü tesisten çıkar mı?', 'Hayır', 'Evet', 'Hayır (yalnızca olay)'],
              ['Bant genişliği ihtiyacı', 'Düşük', 'Yüksek (sürekli yükleme)', 'Düşük'],
              ['Tipik uygunluk', 'Fabrikalar, bankalar, hassas tesisler', 'Küçük, dağınık lokasyonlar', 'Çok lokasyonlu yapılar'],
            ],
          },
          { type: 'p', text: 'Endüstriyel projelerin çoğunda varsayılan tercih tesis içi işlemedir: görüntü ağ içinde kalır ve sınırlı internet bant genişliğiyle çalışır. Ayrıntılar: [Edge AI ve Cloud AI farkı](/blog/edge-ai-ve-cloud-ai-farki).' },
          { type: 'h2', id: 'kullanim-alanlari', text: 'Fabrikada tipik kullanım alanları' },
          { type: 'h3', text: 'İş güvenliği' },
          { type: 'p', text: '[Baret tespiti](/baret-tespit-sistemi), [KKD kontrolü](/kkd-kontrol-kamera-sistemi), [yasaklı alan ihlali](/yasakli-alan-ihlal-tespiti), [forklift-yaya güvenliği](/forklift-yaya-guvenlik-sistemi), [düşme tespiti](/dusme-tespit-sistemi) ve [yangın-duman tespiti](/yangin-duman-tespiti) İSG ekiplerine periyodik tur yerine sürekli kapsama sağlar.' },
          { type: 'h3', text: 'Kalite kontrol' },
          { type: 'p', text: '[Görüntü işleme ile kalite kontrol](/kalite-kontrol-goruntu-isleme) ve [yüzey kusuru tespiti](/yuzey-kusuru-tespiti) görünür kusurları hat hızında yakalar. Güvenlik senaryolarından farklı olarak kontrol noktasında genellikle özel kamera ve aydınlatma gerekir.' },
          { type: 'h3', text: 'Üretim ve operasyon analitiği' },
          { type: 'p', text: '[OEE takibi](/oee-takip-sistemi), [ürün sayımı](/urun-sayimi) ve [personel/istasyon verimliliği](/personel-verimlilik-analizi-kamera) çalışma süresini, mikro duruşları, çıktıyı ve darboğazları ölçer; PLC verisi olmayan eski makinelerde bile.' },
          { type: 'h2', id: 'kamera-gereksinimleri', text: 'Kamera gereksinimleri' },
          {
            type: 'ul',
            items: [
              '**Akış erişimi:** kameradan veya NVR’den RTSP/ONVIF.',
              '**Çözünürlük ve mesafe:** nesne yeterli piksel kaplamalıdır; orta mesafede kişi seviyesindeki olaylar için 1080p çoğu zaman yeterlidir.',
              '**Açı:** KKD ve duruş analizi için yukarıdan çapraz bakış, tam tepeden bakıştan daha iyi sonuç verir.',
              '**Işık:** stabil aydınlatma veya gece için iyi IR; güçlü ters ışık sık görülen bir sorundur.',
              '**Kare hızı:** hızlı süreçler (araçlar, konveyörler) daha yüksek kare hızı gerektirir.',
            ],
          },
          { type: 'h2', id: 'kurulum', text: 'Kurulum süreci ve entegrasyon' },
          { type: 'p', text: 'Tipik bir proje keşif ve kamera değerlendirmesinden tanımlı bir pilota, kendi görüntüleriniz üzerinde doğrulamaya ve yaygınlaştırma kararına ilerler. Olaylar panele ve bildirimlere iletilir; REST API/webhook veya röle çıkışlarıyla diğer sistemlere gönderilebilir. Bkz. [pilot süreci](/pilot).' },
          { type: 'h2', id: 'gizlilik', text: 'Gizlilik' },
          { type: 'p', text: 'Endüstriyel güvenlik ve operasyon analitiği kişileri tanımlamayı gerektirmez; Hype Vision bu senaryolarda yüz tanıma kullanmaz. Tesis içi işlemede görüntü ağınızda kalır; saklama ve erişim kuralları KVKK politikalarınıza göre belirlenir. Bkz. [KVKK uyumlu kamera analitiği](/kvkk-uyumlu-kamera-analitigi).' },
          { type: 'h2', id: 'sinirlamalar', text: 'Bilinmesi gereken sınırlamalar' },
          {
            type: 'ul',
            items: [
              'Görüntü işleme yalnızca kameranın gördüğünü görür; görüş engeli, mesafe ve ışık sınırları belirler.',
              'Kamera tabanlı izleme, güvenlik sınıfı makine korumalarının veya sertifikalı yangın algılamanın yerini almaz.',
              'Performans kamera bazında değişir; teknik föyden değil sahada ölçülmelidir.',
            ],
          },
          { type: 'h2', id: 'hype-vision', text: 'Hype Vision’ın rolü' },
          { type: 'p', text: 'Hype Vision, mevcut IP/CCTV kameralar üzerinde çalışan; iş güvenliği, üretim, kalite ve operasyon izleme için görüntü işleme ve yapay zeka video analitiği çözümleri geliştirir. Ekip GTÜ Teknopark, Gebze’dedir ve 2020’den beri endüstriyel yapay zeka projeleri yürütmektedir. Firma seçerken bakılacaklar için: [görüntü işleme firmaları: 10 kriter](/blog/goruntu-isleme-firmasi-secimi).' },
          { type: 'cta', text: 'Kameralarınızın uygun olup olmadığından emin değil misiniz? Birkaç kare ve çözmek istediğiniz problemi gönderin.' },
        ],
        faq: [
          { q: 'Görüntü işleme kurmak için yeni kamera gerekir mi?', a: 'Çoğu İSG ve operasyon senaryosunda hayır; RTSP/ONVIF destekli mevcut IP kameralar kullanılır. Mikron seviyesinde kusur aranan kalite istasyonlarında endüstriyel kamera önerilebilir.' },
          { q: 'Makine görmesi ile görüntü işleme arasındaki fark nedir?', a: 'Makine görmesi genellikle özel endüstriyel kamera ve kontrollü ışıkla çalışan kural tabanlı kontrol sistemlerini ifade eder. Görüntü işleme daha geniş bir alandır; sanayide bugün çoğunlukla genel CCTV görüntüsünde ve değişken koşullarda da çalışan derin öğrenme modellerini kapsar.' },
          { q: 'Sahada GPU gerekir mi?', a: 'Tesis içi işlemede uygun hızlandırıcıya sahip bir edge cihaz kullanılır. Donanım keşif aşamasında kamera sayısı ve analitiklere göre boyutlandırılır.' },
          { q: 'Görüntüler tesis dışına çıkıyor mu?', a: 'Edge mimaride hayır; görüntüler tesis içinde işlenir, yalnızca olay verisi panele aktarılır.' },
        ],
      },
    },
  },
  {
    id: 'cctv-ai',
    urls: { tr: '/cctv-yapay-zeka', en: '/en/cctv-ai-analytics' },
    solutions: ['ppe-detection', 'restricted-area-monitoring', 'forklift-pedestrian-detection', 'people-counting', 'queue-analytics', 'occupancy-analytics', 'fire-smoke-detection', 'object-tracking'],
    resources: {
      en: ['/en/resources/what-is-rtsp-and-onvif', '/en/resources/ppe-detection-with-existing-cctv', '/en/resources/architecture-for-50-100-cameras'],
      tr: ['/blog/rtsp-nedir', '/blog/onvif-nedir', '/blog/mevcut-ip-kamera-yapay-zeka', '/blog/50-100-kamera-yapay-zeka-mimarisi'],
    },
    copy: {
      en: {
        metaTitle: 'CCTV AI Analytics: Add AI to Existing Security Cameras | Hype Vision',
        metaDescription:
          'Can existing CCTV cameras be used for AI? RTSP/IP camera basics, edge and on-premise processing, real-time detection, alerts, dashboards, API and VMS integration concepts, privacy and pilot methodology.',
        eyebrow: 'CCTV AI analytics',
        h1: 'Adding AI analytics to existing CCTV cameras',
        lead: 'How AI video analytics works on top of the cameras and recorders you already have — what is needed, what changes and what stays the same.',
        definition:
          'CCTV AI analytics means running computer-vision models on the live streams of existing security cameras to detect events — such as a person in a restricted area, missing PPE, a queue building up or smoke — and sending alerts and data in real time, instead of reviewing recordings after the fact.',
        blocks: [
          { type: 'h2', id: 'can-existing', text: 'Can existing CCTV cameras be used for AI?' },
          { type: 'p', text: 'Often, yes. The two conditions are **access to the video stream** and **a suitable view** of what needs to be detected. Most modern IP cameras and NVRs provide RTSP streams; analog systems usually need an encoder or replacement. Suitability of the view is checked per camera and per use case.' },
          { type: 'h2', id: 'rtsp-ip', text: 'RTSP and IP camera basics' },
          { type: 'p', text: '**RTSP** (Real Time Streaming Protocol) is the common way to pull a live video stream from an IP camera or NVR. **ONVIF** is an industry standard that helps devices from different manufacturers be discovered and configured in a common way. An analytics server typically connects to a sub-stream or main stream per camera. Detailed explanation: [what are RTSP and ONVIF?](/en/resources/what-is-rtsp-and-onvif)' },
          { type: 'h2', id: 'processing', text: 'Edge and on-premise processing' },
          { type: 'p', text: 'Streams are processed by an edge device or server in the same network as the cameras. Only events, metadata and optional short clips are stored or forwarded. This keeps bandwidth low and video inside the site. Sizing depends on camera count, frame rate and analytics: see [architecture for 50–100 cameras](/en/resources/architecture-for-50-100-cameras).' },
          { type: 'h2', id: 'realtime', text: 'Real-time detection, alerts and dashboards' },
          {
            type: 'ul',
            items: [
              '**Detection:** models find people, vehicles, PPE, smoke or other objects in each frame.',
              '**Rules:** zones, schedules, durations and counts decide what becomes an event.',
              '**Alerts:** events go to a dashboard, mobile notifications or e-mail, with a snapshot or clip.',
              '**Dashboards:** trends by camera, zone, shift and site support follow-up actions.',
            ],
          },
          { type: 'h2', id: 'integration', text: 'API and VMS integration concepts' },
          { type: 'p', text: 'Analytics events can be pushed to other systems via REST API or webhooks, and local relay outputs can drive sirens, beacons or turnstiles. Integration with a specific VMS (for example, showing events on the VMS timeline) depends on what that VMS supports and is scoped per project; we do not assume a native plugin exists for every VMS.' },
          { type: 'h2', id: 'privacy', text: 'Security and privacy considerations' },
          {
            type: 'ul',
            items: [
              'Keep cameras and analytics on a segmented network; avoid exposing RTSP to the internet.',
              'Use dedicated, least-privilege camera accounts for stream access.',
              'Define retention for evidence clips and restrict dashboard access by role.',
              'Inform employees and visitors in line with GDPR/KVKK; avoid face recognition unless there is a clear legal basis.',
            ],
          },
          { type: 'h2', id: 'use-cases', text: 'Typical use cases' },
          { type: 'p', text: '[PPE detection](/en/solutions/ppe-detection), [restricted areas](/en/solutions/restricted-area-monitoring), [forklift–pedestrian safety](/en/solutions/forklift-pedestrian-detection), [people counting](/en/solutions/people-counting), [queue analytics](/en/solutions/queue-analytics), [occupancy](/en/solutions/occupancy-analytics), [fire and smoke](/en/solutions/fire-smoke-detection) and [object tracking](/en/solutions/object-tracking).' },
          { type: 'h2', id: 'pilot', text: 'Pilot methodology' },
          { type: 'p', text: 'Start with a small set of cameras and one or two clearly defined use cases. Agree success criteria in advance, validate on your own footage and decide on rollout based on measured results. See [how a pilot works](/en/pilot) or [request a camera assessment](/en/camera-assessment).' },
          { type: 'cta' },
        ],
        faq: [
          { q: 'Do we need to change our VMS or NVR?', a: 'No. The analytics layer reads streams in parallel; recording continues as before.' },
          { q: 'Will analytics slow down our recording system?', a: 'Analytics usually reads a separate stream. The load on cameras and NVRs is reviewed during camera assessment.' },
          { q: 'Can analog cameras be used?', a: 'Analog cameras need an encoder or DVR that provides an IP stream. Image quality from older analog cameras often limits what can be detected.' },
        ],
      },
      tr: {
        metaTitle: 'CCTV Yapay Zeka Analizi: Mevcut Kameralara Yapay Zeka Ekleme | Hype Vision',
        metaDescription:
          'Mevcut CCTV kameralar yapay zeka için kullanılabilir mi? RTSP/IP kamera temelleri, edge ve tesis içi işleme, anlık tespit, alarm, panel, API ve VMS entegrasyonu, gizlilik ve pilot yöntemi.',
        eyebrow: 'CCTV yapay zeka',
        h1: 'Mevcut CCTV kameralara yapay zeka analitiği eklemek',
        lead: 'Yapay zeka video analitiğinin zaten sahip olduğunuz kamera ve kayıt cihazları üzerinde nasıl çalıştığı: neye ihtiyaç var, ne değişir, ne aynı kalır?',
        definition:
          'CCTV yapay zeka analizi, mevcut güvenlik kameralarının canlı akışlarında görüntü işleme modelleri çalıştırarak olayları — yasak bölgedeki kişi, eksik KKD, uzayan kuyruk veya duman gibi — tespit etmek ve kayıtları sonradan izlemek yerine anlık alarm ve veri üretmektir.',
        blocks: [
          { type: 'h2', id: 'mevcut-kamera', text: 'Mevcut CCTV kameralar yapay zeka için kullanılabilir mi?' },
          { type: 'p', text: 'Çoğu zaman evet. İki koşul vardır: **video akışına erişim** ve tespit edilecek şeyi **uygun bir açıdan görmek**. Modern IP kameraların ve NVR’lerin çoğu RTSP akışı sunar; analog sistemler genellikle bir encoder veya değişim gerektirir. Görüşün uygunluğu kamera ve senaryo bazında kontrol edilir. Ayrıntılı kontrol listesi: [mevcut IP kameralar yeterli mi?](/blog/mevcut-ip-kamera-yapay-zeka)' },
          { type: 'h2', id: 'rtsp-ip', text: 'RTSP ve IP kamera temelleri' },
          { type: 'p', text: '**RTSP** (Real Time Streaming Protocol), IP kameradan veya NVR’den canlı görüntü almanın yaygın yoludur. **ONVIF**, farklı üreticilerin cihazlarının ortak bir yöntemle keşfedilip yapılandırılmasını sağlayan bir sektör standardıdır. Analitik sunucu genellikle her kameranın ana veya alt akışına bağlanır. Ayrıntılar: [RTSP nedir?](/blog/rtsp-nedir), [ONVIF nedir?](/blog/onvif-nedir)' },
          { type: 'h2', id: 'isleme', text: 'Edge ve tesis içi işleme' },
          { type: 'p', text: 'Akışlar, kameralarla aynı ağdaki bir edge cihaz veya sunucuda işlenir. Yalnızca olaylar, meta veri ve istenirse kısa görüntüler saklanır veya iletilir. Bu, bant genişliğini düşük tutar ve görüntüyü tesiste bırakır. Boyutlandırma kamera sayısı, kare hızı ve analitiklere bağlıdır: [50–100 kamera için mimari](/blog/50-100-kamera-yapay-zeka-mimarisi).' },
          { type: 'h2', id: 'anlik', text: 'Anlık tespit, alarm ve paneller' },
          {
            type: 'ul',
            items: [
              '**Tespit:** modeller her karede kişi, araç, KKD, duman veya diğer nesneleri bulur.',
              '**Kurallar:** bölge, zaman, süre ve sayı neyin olay sayılacağını belirler.',
              '**Alarmlar:** olaylar kare veya kısa görüntüyle panele, mobil bildirime veya e-postaya gider.',
              '**Paneller:** kamera, bölge, vardiya ve lokasyon bazında trendler takip aksiyonlarını destekler.',
            ],
          },
          { type: 'h2', id: 'entegrasyon', text: 'API ve VMS entegrasyonu' },
          { type: 'p', text: 'Analitik olayları REST API veya webhook ile diğer sistemlere gönderilebilir; röle çıkışları siren, flaşör veya turnike tetikleyebilir. Belirli bir VMS ile entegrasyon (örneğin olayları VMS zaman çizelgesinde göstermek) o VMS’in desteklediği yöntemlere bağlıdır ve proje bazında belirlenir; her VMS için hazır eklenti olduğu varsayılmaz.' },
          { type: 'h2', id: 'gizlilik', text: 'Güvenlik ve gizlilik' },
          {
            type: 'ul',
            items: [
              'Kameraları ve analitiği ayrılmış bir ağ segmentinde tutun; RTSP’yi internete açmayın.',
              'Akış erişimi için ayrı ve en az yetkili kamera hesapları kullanın.',
              'Kanıt görüntüleri için saklama süresi belirleyin ve panel erişimini rol bazında sınırlayın.',
              'Çalışan ve ziyaretçileri KVKK’ya uygun bilgilendirin; açık bir hukuki dayanak yoksa yüz tanımadan kaçının.',
            ],
          },
          { type: 'h2', id: 'kullanim', text: 'Tipik kullanım alanları' },
          { type: 'p', text: '[KKD kontrolü](/kkd-kontrol-kamera-sistemi), [yasaklı alan](/yasakli-alan-ihlal-tespiti), [forklift-yaya güvenliği](/forklift-yaya-guvenlik-sistemi), [kişi sayma](/kisi-sayma), [kuyruk analizi](/kuyruk-analizi), [yoğunluk analizi](/yogunluk-analizi), [yangın ve duman](/yangin-duman-tespiti) ve [nesne takibi](/nesne-takibi).' },
          { type: 'h2', id: 'pilot', text: 'Pilot yöntemi' },
          { type: 'p', text: 'Az sayıda kamera ve net tanımlı bir veya iki senaryoyla başlayın. Başarı kriterlerini önceden belirleyin, kendi görüntüleriniz üzerinde doğrulayın ve yaygınlaştırmaya ölçülen sonuçlara göre karar verin. Bkz. [pilot süreci](/pilot) veya [kamera değerlendirmesi](/kamera-degerlendirme).' },
          { type: 'cta' },
        ],
        faq: [
          { q: 'VMS veya NVR’ımızı değiştirmemiz gerekir mi?', a: 'Hayır. Analitik katmanı akışları paralel okur; kayıt eskisi gibi devam eder.' },
          { q: 'Analitik kayıt sistemimizi yavaşlatır mı?', a: 'Analitik genellikle ayrı bir akış okur. Kamera ve NVR üzerindeki yük kamera değerlendirmesinde incelenir.' },
          { q: 'Analog kameralar kullanılabilir mi?', a: 'Analog kameralar IP akışı veren bir encoder veya DVR gerektirir. Eski analog kameraların görüntü kalitesi çoğu zaman tespit edilebilecekleri sınırlar.' },
        ],
      },
    },
  },
];
