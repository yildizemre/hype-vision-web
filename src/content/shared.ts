import type { Faq, Lang } from './types';

/**
 * Pilot parametreleri — ekip doğrulayana kadar boş bırakılır; boşsa sayfada gösterilmez.
 * TODO(Hype Vision): tipik pilot süresi, kamera sayısı aralığı ve ücretlendirme modeli.
 */
export const PILOT_CONFIG: { durationWeeks?: string; cameraRange?: string; pricingNote?: Record<Lang, string> } = {};

/** Kurumsal tanım — AI/cevap motorlarının alıntılayabileceği tek cümle */
export const COMPANY_DEFINITION: Record<Lang, string> = {
  en: 'Hype Vision develops computer-vision and AI video-analytics solutions that run on existing IP/CCTV cameras for industrial safety, manufacturing, quality and operational monitoring. The team is based at GTÜ Teknopark in Gebze, Türkiye, and has been working on industrial AI projects since 2020.',
  tr: 'Hype Vision, mevcut IP/CCTV kameralar üzerinde çalışan; iş güvenliği, üretim, kalite ve operasyon izleme için görüntü işleme ve yapay zeka video analitiği çözümleri geliştirir. Ekip GTÜ Teknopark, Gebze’dedir ve 2020’den beri endüstriyel yapay zeka projeleri yürütmektedir.',
};

export const DEPLOYMENT: Record<Lang, { title: string; desc: string }[]> = {
  en: [
    { title: 'On-premise / edge', desc: 'Analysis runs on hardware inside your network. Video does not leave the site; only events and metrics are stored or shared.' },
    { title: 'Cloud', desc: 'Suitable for distributed, low-camera-count sites where central management matters more than keeping video on-site.' },
    { title: 'Hybrid', desc: 'Video is processed on-site, while events, dashboards and multi-site reporting are managed centrally.' },
  ],
  tr: [
    { title: 'Tesis içi / edge', desc: 'Analiz ağınızdaki donanımda yapılır. Görüntü tesisten çıkmaz; yalnızca olay ve metrikler saklanır veya paylaşılır.' },
    { title: 'Bulut', desc: 'Merkezi yönetimin görüntüyü yerinde tutmaktan daha önemli olduğu, kamera sayısı az ve dağınık lokasyonlar için uygundur.' },
    { title: 'Hibrit', desc: 'Görüntü sahada işlenir; olaylar, paneller ve çok lokasyonlu raporlama merkezden yönetilir.' },
  ],
};

export const CAMERA_APPROACH: Record<Lang, string[]> = {
  en: [
    'Most IP cameras and NVRs that provide RTSP or ONVIF streams can be connected, regardless of brand.',
    'Before a pilot, sample footage from each candidate camera is reviewed for resolution, angle, distance and lighting.',
    'Where a view is not suitable, the recommendation is usually to reposition the camera or add one — not to replace the whole system.',
  ],
  tr: [
    'RTSP veya ONVIF akışı veren IP kamera ve NVR’lerin çoğu, markadan bağımsız olarak bağlanabilir.',
    'Pilot öncesinde aday kameraların örnek görüntüleri çözünürlük, açı, mesafe ve ışık açısından incelenir.',
    'Bir görüş uygun değilse öneri genellikle tüm sistemi değiştirmek değil, kamerayı yeniden konumlandırmak veya bir kamera eklemektir.',
  ],
};

export const PRIVACY: Record<Lang, string[]> = {
  en: [
    'No face recognition is used in safety and operations analytics; events describe what happened, not who.',
    'On-premise processing keeps video inside your network.',
    'Evidence clips, retention periods and user access are configurable and should follow your GDPR/KVKK policies.',
    'Workplace monitoring should be introduced with clear employee information and, where applicable, consultation with employee representatives.',
  ],
  tr: [
    'Güvenlik ve operasyon analitiğinde yüz tanıma kullanılmaz; olaylar kimin değil, ne olduğunu anlatır.',
    'Tesis içi işleme, görüntünün ağınız içinde kalmasını sağlar.',
    'Kanıt görüntüleri, saklama süreleri ve kullanıcı erişimi yapılandırılabilir ve KVKK politikalarınıza uygun olmalıdır.',
    'İşyeri izlemesi, çalışanlara açık bilgilendirme yapılarak devreye alınmalıdır.',
  ],
};

export const PILOT_STEPS: Record<Lang, { title: string; desc: string }[]> = {
  en: [
    { title: 'Discovery', desc: 'We agree on the problem, the owner, the sites and what a successful outcome would look like.' },
    { title: 'Camera assessment', desc: 'Sample footage from candidate cameras is reviewed for angle, resolution, distance and lighting.' },
    { title: 'Use-case definition', desc: 'Events, zones, rules, alert recipients and success metrics are written down before deployment.' },
    { title: 'Pilot deployment', desc: 'Edge hardware or cloud processing is set up and connected to the selected cameras.' },
    { title: 'Validation', desc: 'Detections are checked against reviewed footage; true detections, false alarms and misses are counted per camera.' },
    { title: 'Report', desc: 'Results, limitations and recommended changes are documented and shared with all stakeholders.' },
    { title: 'Rollout decision', desc: 'Based on measured results, you decide whether and how to expand to more cameras, sites or use cases.' },
  ],
  tr: [
    { title: 'Keşif', desc: 'Problem, sorumlu, lokasyonlar ve başarılı bir sonucun neye benzeyeceği birlikte belirlenir.' },
    { title: 'Kamera değerlendirmesi', desc: 'Aday kameraların örnek görüntüleri açı, çözünürlük, mesafe ve ışık açısından incelenir.' },
    { title: 'Senaryo tanımı', desc: 'Olaylar, bölgeler, kurallar, alarm alıcıları ve başarı metrikleri kurulumdan önce yazılı hale getirilir.' },
    { title: 'Pilot kurulum', desc: 'Edge donanım veya bulut işleme kurulur ve seçilen kameralara bağlanır.' },
    { title: 'Doğrulama', desc: 'Tespitler incelenmiş görüntülerle karşılaştırılır; doğru tespit, yanlış alarm ve kaçırılan olaylar kamera bazında sayılır.' },
    { title: 'Rapor', desc: 'Sonuçlar, sınırlamalar ve önerilen değişiklikler belgelenir ve paydaşlarla paylaşılır.' },
    { title: 'Yaygınlaştırma kararı', desc: 'Ölçülen sonuçlara göre daha fazla kamera, lokasyon veya senaryoya genişleyip genişlemeyeceğinize karar verirsiniz.' },
  ],
};

export const BUYER_FAQ: Record<Lang, Faq[]> = {
  en: [
    { q: 'Can Hype Vision work with existing CCTV cameras?', a: 'In most projects, yes. Cameras or NVRs that provide RTSP or ONVIF streams can be connected regardless of brand. Each camera’s view is checked for suitability before a pilot.' },
    { q: 'Do we need to replace our cameras?', a: 'Usually not for safety and operations use cases. Some views may need repositioning or an additional camera. Visual quality inspection often needs dedicated cameras and lighting.' },
    { q: 'Can the system run on-premise?', a: 'Yes. Analysis can run on edge hardware inside your network so that video is processed locally.' },
    { q: 'Can it operate without sending video to the cloud?', a: 'Yes. In an on-premise deployment, video stays on-site; only event data and, if enabled, short evidence clips are stored for review.' },
    { q: 'How is camera suitability evaluated?', a: 'We review short sample recordings or still frames from each candidate camera and check resolution, angle, distance, lighting and occlusion against the use case.' },
    { q: 'Can Hype Vision integrate with existing systems?', a: 'Events and metrics can be sent to other systems via REST API or webhooks, and local outputs (relays) can drive devices such as sirens or turnstiles. Specific integrations are scoped per project.' },
    { q: 'How is a pilot structured?', a: 'Discovery, camera assessment, use-case definition, deployment, validation, report and a rollout decision. Success criteria are agreed before deployment.' },
    { q: 'How is accuracy validated?', a: 'On your own footage. During validation, events are compared with reviewed recordings and true detections, false alarms and misses are counted per camera.' },
    { q: 'What affects detection performance?', a: 'Camera angle, resolution, distance to the subject, lighting, occlusion, motion blur and how clearly the rule is defined. These are reviewed during camera assessment.' },
    { q: 'How many cameras can be analysed?', a: 'It depends on the use cases, frame rates and the hardware selected. Capacity is sized during discovery for the specific camera count and analytics required.' },
    { q: 'What happens when an event is detected?', a: 'The event is recorded with time, camera and zone, optionally with a snapshot or clip, and sent to the configured channels: dashboard, notifications or integrated systems.' },
    { q: 'Can alerts be integrated with existing systems?', a: 'Yes, via API/webhook or relay outputs. The receiving system and message format are agreed during the pilot.' },
  ],
  tr: [
    { q: 'Hype Vision mevcut CCTV kameralarla çalışabilir mi?', a: 'Projelerin çoğunda evet. RTSP veya ONVIF akışı veren kamera ve NVR’ler markadan bağımsız bağlanabilir. Her kameranın görüşü pilot öncesinde uygunluk açısından kontrol edilir.' },
    { q: 'Kameralarımızı değiştirmemiz gerekir mi?', a: 'Güvenlik ve operasyon senaryolarında genellikle hayır. Bazı görüşler yeniden konumlandırma veya ek kamera gerektirebilir. Görsel kalite kontrol çoğu zaman özel kamera ve aydınlatma ister.' },
    { q: 'Sistem tesis içinde (on-premise) çalışabilir mi?', a: 'Evet. Analiz ağınızdaki edge donanımda çalışır; görüntü yerelde işlenir.' },
    { q: 'Görüntü buluta gönderilmeden çalışabilir mi?', a: 'Evet. Tesis içi kurulumda görüntü sahada kalır; yalnızca olay verisi ve istenirse kısa kanıt görüntüleri saklanır.' },
    { q: 'Kamera uygunluğu nasıl değerlendirilir?', a: 'Her aday kameradan kısa kayıt veya kare alınır; çözünürlük, açı, mesafe, ışık ve görüş engelleri senaryoya göre kontrol edilir.' },
    { q: 'Mevcut sistemlerimize entegre olur mu?', a: 'Olay ve metrikler REST API veya webhook ile diğer sistemlere gönderilebilir; röle çıkışlarıyla siren veya turnike gibi cihazlar tetiklenebilir. Entegrasyon kapsamı proje bazında belirlenir.' },
    { q: 'Pilot nasıl yapılandırılır?', a: 'Keşif, kamera değerlendirmesi, senaryo tanımı, kurulum, doğrulama, rapor ve yaygınlaştırma kararı. Başarı kriterleri kurulumdan önce yazılır.' },
    { q: 'Doğruluk nasıl doğrulanır?', a: 'Kendi görüntüleriniz üzerinde. Doğrulamada olaylar incelenmiş kayıtlarla karşılaştırılır; doğru tespit, yanlış alarm ve kaçırılan olay kamera bazında sayılır.' },
    { q: 'Tespit performansını neler etkiler?', a: 'Kamera açısı, çözünürlük, mesafe, ışık, görüş engelleri, hareket bulanıklığı ve kuralın ne kadar net tanımlandığı. Bunlar kamera değerlendirmesinde incelenir.' },
    { q: 'Kaç kamera analiz edilebilir?', a: 'Senaryolara, kare hızına ve seçilen donanıma bağlıdır. Kapasite keşif aşamasında kamera sayısı ve istenen analitiklere göre boyutlandırılır.' },
    { q: 'Bir olay tespit edildiğinde ne olur?', a: 'Olay zaman, kamera ve bölge bilgisiyle, istenirse kare veya kısa görüntüyle kaydedilir ve tanımlı kanallara iletilir: panel, bildirim veya entegre sistemler.' },
    { q: 'Alarmlar mevcut sistemlere bağlanabilir mi?', a: 'Evet; API/webhook veya röle çıkışlarıyla. Alıcı sistem ve mesaj formatı pilot sırasında belirlenir.' },
  ],
};

/** Arayüz metinleri */
export const UI: Record<Lang, Record<string, string>> = {
  en: {
    home: 'Home',
    solutions: 'Solutions',
    industries: 'Industries',
    resources: 'Resources',
    caseStudies: 'Case studies',
    whatIs: 'What is it?',
    problem: 'The problem',
    howItWorks: 'How it works',
    events: 'What can be detected',
    scenarios: 'Typical scenarios',
    deployment: 'Deployment options',
    cameras: 'Working with existing cameras',
    integrations: 'Integration',
    privacy: 'Privacy and security',
    limitations: 'Limitations',
    pilot: 'How a pilot works',
    faq: 'Frequently asked questions',
    relatedSolutions: 'Related solutions',
    relatedIndustries: 'Industries',
    relatedResources: 'Further reading',
    useCases: 'Use cases',
    considerations: 'Things to consider',
    ctaDemo: 'Request a demo',
    ctaPilot: 'Discuss a pilot',
    ctaCameras: 'Evaluate your cameras',
    ctaEngineer: 'Talk to an engineer',
    ctaExplore: 'Explore solutions',
    ctaTitle: 'Start with the cameras you already have',
    ctaText: 'Send us a few frames from your cameras and the problem you want to solve. We will tell you honestly what is feasible.',
    about: 'About Hype Vision',
  },
  tr: {
    home: 'Ana sayfa',
    solutions: 'Çözümler',
    industries: 'Sektörler',
    resources: 'Kaynaklar',
    caseStudies: 'Vaka çalışmaları',
    whatIs: 'Nedir?',
    problem: 'Problem',
    howItWorks: 'Nasıl çalışır?',
    events: 'Neler tespit edilir?',
    scenarios: 'Tipik kullanım alanları',
    deployment: 'Kurulum seçenekleri',
    cameras: 'Mevcut kameralarla çalışma',
    integrations: 'Entegrasyon',
    privacy: 'Gizlilik ve güvenlik',
    limitations: 'Sınırlamalar',
    pilot: 'Pilot nasıl işler?',
    faq: 'Sık sorulan sorular',
    relatedSolutions: 'İlgili çözümler',
    relatedIndustries: 'Sektörler',
    relatedResources: 'İlgili yazılar',
    useCases: 'Kullanım senaryoları',
    considerations: 'Dikkat edilmesi gerekenler',
    ctaDemo: 'Demo talep edin',
    ctaPilot: 'Pilot görüşelim',
    ctaCameras: 'Kameralarınızı değerlendirelim',
    ctaEngineer: 'Mühendisle görüşün',
    ctaExplore: 'Çözümleri inceleyin',
    ctaTitle: 'Zaten sahip olduğunuz kameralarla başlayın',
    ctaText: 'Kameralarınızdan birkaç kare ve çözmek istediğiniz problemi gönderin; neyin mümkün olduğunu açıkça söyleyelim.',
    about: 'Hype Vision hakkında',
  },
};
