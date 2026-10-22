import type { Solution } from './types';

/** İş güvenliği çözümleri. TR karşılığı mevcut landing ise yalnızca `en` kopyası yazılır. */
export const SAFETY_SOLUTIONS: Solution[] = [
  {
    id: 'ppe-detection',
    group: 'safety',
    urls: { tr: '/kkd-kontrol-kamera-sistemi', en: '/en/solutions/ppe-detection' },
    industries: ['manufacturing', 'construction', 'logistics', 'jewelry-manufacturing'],
    related: ['restricted-area-monitoring', 'forklift-pedestrian-detection', 'fall-detection'],
    en: {
      name: 'PPE Detection',
      metaTitle: 'PPE Detection with Existing CCTV | Hard Hat & Vest Detection — Hype Vision',
      metaDescription:
        'Detect missing hard hats, high-visibility vests and other PPE from existing IP/CCTV cameras. On-premise edge processing, real-time alerts and evidence clips for HSE teams.',
      h1: 'PPE detection using your existing CCTV cameras',
      lead: 'Automatically flag missing hard hats, vests and other required PPE in defined zones — continuously, on every shift, without replacing cameras.',
      definition:
        'PPE detection is a computer-vision application that analyses camera footage to identify people and check whether they are wearing the protective equipment required in a given area, such as a hard hat or high-visibility vest.',
      problem: [
        'HSE teams can only be in one place at a time. Walk-arounds and spot checks capture a sample of what happens on the floor, usually during day shifts, and violations at shift changes, at night or in low-traffic areas go unrecorded.',
        'Without data, it is hard to tell whether a rule is being followed, where non-compliance concentrates, or whether a training campaign actually changed behaviour.',
      ],
      howItWorks: [
        'Video streams are read from existing IP cameras or the NVR over RTSP/ONVIF.',
        'A deep-learning model detects each person and classifies the PPE items configured for that zone.',
        'Zone, duration and schedule rules decide when a detection becomes an event (for example, "no hard hat for more than 5 seconds inside the press area").',
        'Events are sent to the dashboard and notification channels with a short evidence clip or snapshot, and are stored for reporting.',
      ],
      events: [
        'Missing hard hat / helmet',
        'Missing high-visibility vest',
        'Other PPE items such as safety glasses, gloves or masks — evaluated per site and camera view',
        'Repeated violations in the same zone or time window',
        'PPE compliance trends by zone, shift and day',
      ],
      scenarios: [
        'Entrances to production halls where PPE is mandatory',
        'Loading docks and warehouse aisles with vehicle traffic',
        'Construction or maintenance areas with temporary rules',
        'Turnstile or door control where entry is refused when required PPE is not detected',
      ],
      cameraNotes: [
        'Standard 1080p IP cameras are usually sufficient when the person occupies a reasonable part of the frame.',
        'A slightly elevated, angled view works better than a straight top-down view for helmet and vest classification.',
        'Small items (glasses, gloves) need closer framing; suitability is checked on sample footage before the pilot.',
      ],
      integrations: [
        'Web dashboard and mobile notifications',
        'REST API / webhook for EHS, ERP or ticketing systems',
        'Relay or PLC signals for sirens, beacons or turnstiles',
      ],
      limitations: [
        'Detection quality depends on resolution, distance, lighting and occlusion; it is measured per camera during the pilot.',
        'The system identifies a PPE violation, not a person. It does not use face recognition.',
        'Rules must reflect site policy — the same item may be mandatory in one zone and optional in another.',
      ],
      faq: [
        {
          q: 'Can PPE detection work with our current CCTV cameras?',
          a: 'In most cases, yes. If the cameras provide an RTSP/ONVIF stream and the area is visible at a usable size, they can be analysed. Camera suitability is checked on sample footage before committing to a pilot.',
        },
        {
          q: 'Does the video leave our site?',
          a: 'Not in an on-premise/edge deployment. Analysis runs on hardware inside your network and only event data (and evidence clips, if enabled) is stored.',
        },
        {
          q: 'How is detection accuracy validated?',
          a: 'During the pilot, events are reviewed against labelled footage from your own cameras. True detections, false alarms and missed events are counted per camera so results reflect your site, not a lab dataset.',
        },
      ],
    },
  },
  {
    id: 'forklift-pedestrian-detection',
    group: 'safety',
    urls: { tr: '/forklift-yaya-guvenlik-sistemi', en: '/en/solutions/forklift-pedestrian-detection' },
    industries: ['logistics', 'manufacturing', 'retail'],
    related: ['restricted-area-monitoring', 'ppe-detection', 'object-tracking'],
    en: {
      name: 'Forklift–Pedestrian Detection',
      metaTitle: 'Forklift Pedestrian Detection with CCTV | Warehouse Safety AI — Hype Vision',
      metaDescription:
        'Detect forklift–pedestrian proximity and near-misses from existing cameras. Zone rules, real-time alerts, siren or beacon triggers and near-miss reporting for warehouses and plants.',
      h1: 'Forklift–pedestrian detection from existing cameras',
      lead: 'Make forklift and pedestrian interactions visible: real-time warnings when people and vehicles share space, and data on where near-misses happen.',
      definition:
        'Forklift–pedestrian detection uses computer vision to detect forklifts and people in the same camera view, estimate their proximity or zone overlap, and trigger an alert or record a near-miss when a defined rule is broken.',
      problem: [
        'Many warehouse incidents happen where pedestrian walkways cross vehicle routes: aisle ends, dock doors, blind corners. Near-misses in these places are rarely reported, so the risk stays invisible until an accident occurs.',
        'Painted lines and mirrors help, but they do not tell safety managers how often the rules are broken or which crossing needs attention first.',
      ],
      howItWorks: [
        'Existing cameras covering aisles, crossings and docks are connected over RTSP/ONVIF.',
        'The model detects forklifts (and other configured vehicles) and people in each frame and tracks them over time.',
        'Rules define pedestrian-only zones, vehicle-only zones and proximity conditions per camera.',
        'When a rule is broken, an alert is raised and the event is logged with a clip for near-miss analysis.',
      ],
      events: [
        'Pedestrian and forklift inside the same zone at the same time',
        'Pedestrian entering a vehicle-only zone',
        'Forklift entering a pedestrian-only walkway',
        'Near-miss hotspots by location and time of day',
      ],
      scenarios: [
        'Aisle ends and blind intersections in warehouses',
        'Dock doors and loading ramps',
        'Production halls where internal logistics share space with operators',
        'Local warnings via beacon or siren at a specific crossing',
      ],
      cameraNotes: [
        'Wide-angle views over crossings work well; the whole interaction area should be in frame.',
        'Higher frame rates help with fast-moving vehicles.',
        'Proximity is estimated from the 2D image and zone calibration; it is not a certified distance measurement.',
      ],
      integrations: [
        'Dashboard, mobile and e-mail alerts',
        'Relay outputs for local beacons or sirens',
        'REST API / webhook for WMS or EHS reporting',
      ],
      limitations: [
        'This is a monitoring and awareness layer, not a replacement for vehicle-mounted safety systems or a safety-rated interlock.',
        'Heavy occlusion by racks or loads can reduce detection quality; camera placement is reviewed before the pilot.',
      ],
      faq: [
        {
          q: 'Do forklifts need tags or sensors?',
          a: 'No. Detection is camera-based, so vehicles and people do not need wearables or tags.',
        },
        {
          q: 'Can an alert trigger a local warning light?',
          a: 'Yes, events can drive relay outputs for beacons or sirens near the crossing. The exact wiring is defined with your maintenance team.',
        },
        {
          q: 'Will it slow down operations with false alarms?',
          a: 'Zone and duration rules are tuned during the pilot and false alarms are measured per camera. Rules are only rolled out once the alarm rate is acceptable to the operations team.',
        },
      ],
    },
  },
  {
    id: 'restricted-area-monitoring',
    group: 'safety',
    urls: { tr: '/yasakli-alan-ihlal-tespiti', en: '/en/solutions/restricted-area-monitoring' },
    industries: ['manufacturing', 'logistics', 'construction', 'banking', 'jewelry-manufacturing'],
    related: ['ppe-detection', 'forklift-pedestrian-detection', 'people-counting'],
    en: {
      name: 'Restricted Area Monitoring',
      metaTitle: 'Restricted Area & Danger Zone Monitoring with AI CCTV — Hype Vision',
      metaDescription:
        'Detect people entering danger zones, machine areas or restricted rooms from existing CCTV. Virtual zones, schedules, dwell-time rules and real-time alerts.',
      h1: 'Restricted area and danger zone monitoring',
      lead: 'Draw virtual zones on existing camera views and get alerted when someone enters a danger area, stays too long, or is there outside permitted hours.',
      definition:
        'Restricted area monitoring is a video-analytics function that detects people (or vehicles) inside a user-defined zone of a camera image and raises an event based on rules such as time of day, dwell time or the number of people present.',
      problem: [
        'Robot cells, press areas, high-voltage rooms and chemical stores are dangerous to enter without authorisation or while machinery is running. Physical guarding is not always possible, and existing CCTV is typically only reviewed after an incident.',
        'Security teams face a similar problem with after-hours access to sensitive rooms and perimeters.',
      ],
      howItWorks: [
        'Zones are drawn on each camera view in the dashboard.',
        'People and configured vehicle types are detected and tracked through the zone.',
        'Rules combine zone, schedule, dwell time and person count.',
        'Events are sent with a snapshot or clip and can trigger local outputs.',
      ],
      events: [
        'Entry into a danger or restricted zone',
        'Presence outside permitted hours',
        'Dwell time above a threshold',
        'Lone-worker or minimum-headcount conditions in a zone',
      ],
      scenarios: [
        'Robot cells and machine guarding areas',
        'Electrical rooms, chemical storage, roof access',
        'Vaults, server rooms and cash-handling rooms',
        'Construction site exclusion zones',
      ],
      cameraNotes: [
        'The zone should be clearly visible; lens distortion at frame edges can make zone boundaries less precise.',
        'Night operation depends on the camera’s IR or ambient lighting quality.',
      ],
      integrations: ['Dashboard and mobile alerts', 'Relay outputs (siren, beacon)', 'REST API / webhook to VMS, access control or EHS systems'],
      limitations: [
        'Camera-based zone monitoring is not a safety-rated machine guard and should not replace light curtains or interlocks where those are required.',
        'Identity is not determined; the system reports that someone is in the zone, not who.',
      ],
      faq: [
        {
          q: 'Can different rules apply at different times?',
          a: 'Yes. Zones can have schedules, for example allowing access during maintenance windows and alerting outside them.',
        },
        {
          q: 'Can it tell authorised staff apart from others?',
          a: 'Not by face. Where needed, events can be combined with access-control data or PPE/uniform rules defined for the site.',
        },
      ],
    },
  },
  {
    id: 'fall-detection',
    group: 'safety',
    urls: { tr: '/dusme-tespit-sistemi', en: '/en/solutions/fall-detection' },
    industries: ['manufacturing', 'logistics', 'construction', 'hospitality', 'retail'],
    related: ['restricted-area-monitoring', 'ppe-detection', 'anomaly-detection'],
    en: {
      name: 'Fall Detection',
      metaTitle: 'Fall Detection with CCTV Cameras | Worker Down Alerts — Hype Vision',
      metaDescription:
        'Detect falls and people lying motionless from existing CCTV cameras. Real-time worker-down alerts for plants, warehouses and lone-worker areas, processed on-premise.',
      h1: 'Fall and worker-down detection with CCTV',
      lead: 'Get alerted when a person falls or remains on the ground — especially in areas where nobody else would notice quickly.',
      definition:
        'Camera-based fall detection analyses human posture and motion over time to recognise a fall or a person lying on the ground, and raises an alert so that help can be sent quickly.',
      problem: [
        'Slips, trips and falls are among the most common workplace incidents. When they happen in remote aisles, cold rooms, night shifts or lone-worker areas, the time until someone notices can matter more than the fall itself.',
      ],
      howItWorks: [
        'People are detected and tracked in each camera view.',
        'Posture and motion patterns are analysed to recognise a fall or a person lying down.',
        'A short confirmation window reduces alerts for people who simply bend or kneel.',
        'An alert with a snapshot is sent to the defined responders.',
      ],
      events: ['Fall event', 'Person lying motionless beyond a time threshold', 'Fall locations over time for risk analysis'],
      scenarios: ['Lone-worker areas and night shifts', 'Stairs, ramps and wet floors', 'Cold storage and remote warehouse zones', 'Public areas in hotels or retail spaces'],
      cameraNotes: [
        'The person’s full body should be visible; heavy occlusion reduces reliability.',
        'Side or angled views are generally better than strict top-down views for posture analysis.',
      ],
      integrations: ['Dashboard and mobile alerts', 'Escalation via REST API / webhook', 'Local siren or beacon via relay output'],
      limitations: [
        'Some work tasks (lying under a vehicle, maintenance on the floor) resemble falls; such zones are configured or excluded during the pilot.',
        'It is an alerting aid and does not replace emergency procedures.',
      ],
      faq: [
        {
          q: 'Does fall detection require wearables?',
          a: 'No. It uses existing camera views; no device needs to be worn.',
        },
        {
          q: 'How quickly is an alert sent?',
          a: 'With on-premise processing, alerts are generated shortly after the confirmation window. The exact latency depends on the network and notification channel and is measured during the pilot.',
        },
      ],
    },
  },
  {
    id: 'fire-smoke-detection',
    group: 'safety',
    urls: { tr: '/yangin-duman-tespiti', en: '/en/solutions/fire-smoke-detection' },
    industries: ['manufacturing', 'logistics', 'hospitality', 'restaurants', 'retail'],
    related: ['restricted-area-monitoring', 'anomaly-detection', 'occupancy-analytics'],
    todo: ['Yangın modülünün piksel boyutu / tepki süresi iddiaları (sunumdaki 10x10 piksel) saha verisiyle doğrulanmalı'],
    en: {
      name: 'Fire & Smoke Detection',
      metaTitle: 'Video Fire & Smoke Detection with Existing CCTV — Hype Vision',
      metaDescription:
        'Visual fire and smoke detection from existing CCTV as an additional early-warning layer. Alerts, evidence clips and integration with alarm workflows.',
      h1: 'Video-based fire and smoke detection',
      lead: 'Add a visual early-warning layer to your existing cameras, so visible flames or smoke can be flagged as they appear on screen.',
      definition:
        'Video fire and smoke detection uses computer vision to recognise the visual signature of flames and smoke in camera footage and raise an alert, complementing conventional point detectors.',
      problem: [
        'Point smoke detectors react when smoke reaches the sensor. In high-ceilinged halls, open yards and large warehouses, that can take time — and outdoor areas often have no detectors at all.',
        'Cameras already watch many of these areas, but nobody can watch every screen continuously.',
      ],
      howItWorks: [
        'Camera streams are analysed continuously on-premise.',
        'A model trained on flame and smoke appearance flags candidate regions.',
        'A short temporal check reduces false alarms from reflections, lights or steam.',
        'An alert with a snapshot is sent to the control room and configured channels.',
      ],
      events: ['Visible flame', 'Visible smoke', 'Event location and evidence clip for review'],
      scenarios: ['High-bay warehouses and production halls', 'Outdoor storage yards and waste areas', 'Kitchens and technical rooms', 'Battery charging areas'],
      cameraNotes: [
        'The camera must have a view of the area where fire or smoke could appear; detection range depends on resolution and distance.',
        'Strong backlight, steam and dust are reviewed during camera assessment.',
      ],
      integrations: ['Control room dashboard and mobile alerts', 'REST API / webhook into existing alarm workflows', 'Relay outputs for local signalling'],
      limitations: [
        'Video fire detection is a supplementary layer. It does not replace certified fire detection and alarm systems required by regulation.',
        'Fire that is not visible to a camera (inside equipment, behind walls) cannot be detected.',
      ],
      faq: [
        {
          q: 'Can this replace our smoke detectors?',
          a: 'No. It is an additional early-warning layer for areas that cameras already cover. Certified fire detection systems remain required.',
        },
        {
          q: 'How are false alarms from steam or lights handled?',
          a: 'A temporal confirmation step and per-camera tuning are used. False alarm rates are measured on your footage during the pilot.',
        },
      ],
    },
    tr: {
      name: 'Yangın ve Duman Tespiti',
      metaTitle: 'Kamera ile Yangın ve Duman Tespiti | Görüntü İşleme — Hype Vision',
      metaDescription:
        'Mevcut CCTV kameralarla görsel yangın ve duman tespiti: alev ve duman görüntüde belirdiğinde alarm, kanıt görüntüsü ve alarm iş akışlarına entegrasyon.',
      h1: 'Kamera ile yangın ve duman tespiti',
      lead: 'Mevcut kameralarınıza görsel bir erken uyarı katmanı ekleyin: alev veya duman görüntüde belirdiği anda işaretlensin.',
      definition:
        'Görüntü tabanlı yangın ve duman tespiti, kamera görüntüsündeki alev ve dumanın görsel izlerini yapay zeka ile tanıyarak alarm üreten ve klasik dedektörleri tamamlayan bir görüntü işleme uygulamasıdır.',
      problem: [
        'Nokta tipi duman dedektörleri, duman sensöre ulaştığında tepki verir. Yüksek tavanlı hollerde, açık sahalarda ve büyük depolarda bu süre uzayabilir; açık alanlarda çoğu zaman dedektör hiç yoktur.',
        'Bu alanların çoğunu kameralar zaten görür, ancak kimse tüm ekranları sürekli izleyemez.',
      ],
      howItWorks: [
        'Kamera akışları tesis içinde sürekli analiz edilir.',
        'Alev ve duman görünümüyle eğitilmiş model aday bölgeleri işaretler.',
        'Yansıma, ışık veya buhar kaynaklı yanlış alarmları azaltmak için kısa bir zaman doğrulaması yapılır.',
        'Görüntülü alarm kontrol odasına ve tanımlı kanallara iletilir.',
      ],
      events: ['Görünür alev', 'Görünür duman', 'Olay konumu ve inceleme için kanıt görüntüsü'],
      scenarios: ['Yüksek tavanlı depo ve üretim holleri', 'Açık stok sahaları ve atık alanları', 'Mutfaklar ve teknik odalar', 'Akü şarj alanları'],
      cameraNotes: [
        'Kameranın yangın veya dumanın oluşabileceği alanı görmesi gerekir; algılama mesafesi çözünürlük ve uzaklığa bağlıdır.',
        'Güçlü ters ışık, buhar ve toz kamera değerlendirmesinde incelenir.',
      ],
      integrations: ['Kontrol odası paneli ve mobil bildirim', 'REST API / webhook ile mevcut alarm iş akışları', 'Yerel sinyal için röle çıkışı'],
      limitations: [
        'Görüntü tabanlı yangın tespiti tamamlayıcı bir katmandır; mevzuatın gerektirdiği sertifikalı yangın algılama sistemlerinin yerini almaz.',
        'Kameranın görmediği yangın (ekipman içi, duvar arkası) tespit edilemez.',
      ],
      faq: [
        {
          q: 'Duman dedektörlerimizin yerini alır mı?',
          a: 'Hayır. Kameraların zaten gördüğü alanlar için ek bir erken uyarı katmanıdır; sertifikalı yangın algılama sistemleri gerekli olmaya devam eder.',
        },
        {
          q: 'Buhar veya ışık kaynaklı yanlış alarmlar nasıl yönetilir?',
          a: 'Zaman doğrulaması ve kamera bazlı ayar kullanılır. Yanlış alarm oranı pilot sırasında kendi görüntüleriniz üzerinde ölçülür.',
        },
      ],
    },
  },
];
