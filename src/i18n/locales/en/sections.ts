export default {
  hero: {
    ariaLabel: 'Main introduction',
    badge: 'Since 2020 · Your existing cameras · Any brand',
    subtitle: 'A new standard in industrial safety and operational efficiency',
    titleLine1: 'Real-time',
    titleHighlight: 'HSE, quality, and efficiency',
    titleLine2: '— with your existing cameras.',
    description:
      '24/7 detection, instant alarms, and measurable KPIs. Staff inspection, HSE, quality control, and idle time — processes the human eye cannot sustain are',
    descriptionHighlight: 'monitored automatically.',
    contact: 'Contact',
    cameraIntegration: 'Camera integration',
    stats: [
      { value: 'RTSP', label: 'ONVIF compatible' },
      { value: 'HSE', label: 'Automated inspection' },
      { value: 'Quality', label: 'Instant detection' },
      { value: 'Idle', label: 'Idle time' },
    ],
  },
  trustStrip: {
    main:
      'Industrial AI and image processing since 2020 — with your existing IP cameras, brand-independent integration.',
    mainBold: 'Since 2020',
    sub: 'Edge · Cloud · Hybrid · KVKK-compliant architecture',
    metrics: [
      { value: '2020+', label: 'Field experience' },
      { value: 'ONVIF', label: 'Brand-independent' },
      { value: '24/7', label: 'AI inspection' },
    ],
  },
  cameraIntegration: {
    eyebrow: 'Product · Camera integration',
    title: 'We work with your existing camera brands and models.',
    description:
      'Hype Vision connects your facility IP cameras to an AI layer. Hikvision, Dahua, Axis, or any other manufacturer —',
    descriptionBold: 'brand does not matter',
    descriptionSuffix: '. Deploy inspection modules without changing your on-site infrastructure.',
    benefits: [
      'No new cameras required — we connect to what you already have',
      'Brand and model do not matter; integration via standard protocols',
      'After setup, all inspections are managed from one dashboard',
      'HSE, workforce, quality, and security modules on the same infrastructure',
    ],
    protocols: ['ONVIF', 'RTSP', 'IP Camera', 'NVR compatible'],
    cta: 'Contact for camera compatibility',
    howConnect: 'How does it connect?',
    steps: [
      { label: 'Existing IP cameras', sub: 'All brands' },
      { label: 'Hype Vision AI', sub: 'Image analysis' },
      { label: 'Live dashboard', sub: 'Alerts and reports' },
    ],
    brandsLabel: 'Compatible brands (examples)',
    brands: [
      'Hikvision',
      'Dahua',
      'Axis',
      'Bosch',
      'Hanwha',
      'Uniview',
      'Honeywell',
      'TP-Link',
      'Generic IP / RTSP',
    ],
    brandsNote: 'Not on the list? Connect via RTSP or ONVIF.',
  },
  visionShowcase: {
    eyebrow: 'What does AI see on site?',
    title: 'Not camera footage —',
    titleHighlight: 'structured events',
    description:
      'Raw video is not stored. AI reads people, vehicles, zones, and violations; presents alarms, counters, and evidence on the dashboard.',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    shots: [
      {
        alt: 'Forklift and pedestrian distance analysis — hazardous zone detection',
        title: 'Forklift–pedestrian risk',
        desc: 'Distance between vehicle and staff is measured instantly; red-zone violations trigger alarms.',
        tags: ['HSE', 'Hazardous area', 'Distance analysis'],
      },
      {
        alt: 'Staff and zone monitoring on a food production line',
        title: 'Hazard zone & movement',
        desc: 'Staff position and floor zones are tracked; violations in front of machines are recorded.',
        tags: ['HSE', 'Zone rule', 'Pose tracking'],
      },
      {
        alt: 'Staff inspection and skeleton tracking on a conveyor line',
        title: 'Line inspection',
        desc: 'Who is where during the shift — compliance with station and line rules becomes visible.',
        tags: ['Workforce', 'Line monitoring', 'Efficiency'],
      },
      {
        alt: 'Area violation and staff detection in a warehouse',
        title: 'Warehouse & area security',
        desc: 'Unauthorized or risky area entry detected instantly; evidence image on the dashboard.',
        tags: ['Security', 'Area violation', '24/7'],
      },
    ],
  },
  logoStrip: {
    eyebrow: 'Integration & notifications',
    title: 'ERP, VMS popup, mobile dashboard — alarms down to IoT',
    description:
      'Detection stays on the dashboard; Milestone or Dahua popup, mobile notification, and on-site IoT device triggers run in the same flow.',
    protocolBadges: [
      'ONVIF',
      'RTSP',
      'IP Camera',
      'NVR compatible',
      'SAP',
      'Oracle',
      'Dynamics 365',
      'REST API',
      'KVKK',
      'Edge',
      'Cloud',
    ],
    groups: [
      {
        title: 'ERP & MES',
        desc: 'Production data in one place — no double entry',
        items: ['SAP', 'Oracle', 'Dynamics 365', 'MES / BI'],
      },
      {
        title: 'VMS popup & alarm',
        desc: 'Milestone, Dahua, etc. — on the VMS screen at event time',
        items: ['Milestone', 'Dahua', 'Hikvision', 'Genetec'],
      },
      {
        title: 'Mobile & messaging',
        desc: 'Feedback in your pocket instantly',
        items: ['Mobile dashboard', 'Telegram', 'Email / SMS', 'VMS popup'],
      },
      {
        title: 'IoT & field triggers',
        desc: 'We sound the alarm — we automatically activate devices',
        items: ['Siren / beacon', 'Relay & I/O', 'Line stop', 'ERP event sync'],
      },
    ],
    footer: ['Mobile dashboard feedback', 'Instant alarm flow', 'Customizable via API'],
  },
  about: {
    eyebrow: 'About us',
    title: 'Since 2020',
    titleHighlight: 'industrial AI',
    p1Bold: 'Hype Technology',
    p1: 'has been developing AI-powered image processing systems for industrial safety and operational efficiency since 2020.',
    p2Bold: 'Hype Vision',
    p2: 'analyzes video from on-site IP cameras to automate HSE, quality control, workforce efficiency, and security. Instead of storing raw video, it produces structured data — alarms, metrics, reports.',
    p3: 'Our goal is to turn continuous inspection that the human eye cannot sustain into a scalable, KVKK-compliant layer compatible with existing infrastructure.',
    founded: 'Founded: 2020',
    location: 'Beykoz, Istanbul',
    architecture: 'Edge · Cloud · Hybrid',
    cta: 'Meet our team',
    imageAlt: 'Hype Vision field analysis — staff and zone monitoring in a warehouse',
    stats: [
      { value: '2020', label: 'Founded' },
      { value: '24/7', label: 'Field monitoring' },
      { value: 'KVKK', label: 'Compliant architecture' },
    ],
    focusTitle: 'What do we focus on?',
    focusAreas: [
      { label: 'HSE inspection', desc: 'PPE, hazardous zones, forklift–pedestrian' },
      { label: 'Quality control', desc: 'Instant defect detection on the line' },
      { label: 'Workforce & efficiency', desc: 'Idle time, station compliance' },
      { label: 'Facility security', desc: 'Area violations, 24/7 alarms' },
    ],
  },
  coreProducts: {
    eyebrow: 'Product',
    title: 'HSE analytics, quality control, efficiency —',
    titleHighlight: 'each explained in detail.',
    description:
      'Hype Vision is one platform: it takes video from cameras, analyzes it with AI, and sends results to the',
    descriptionBold: 'live dashboard',
    descriptionSuffix: 'and optionally to your ERP / MES systems.',
    tablist: 'Product modules',
    whatAnalyzes: 'What does it analyze?',
    panelShows: 'What do you see on the dashboard?',
    howWorks: 'How does it work?',
    products: {
      isg: {
        label: '01 · HSE Analytics',
        tab: 'HSE Analytics',
        title: 'PPE and safety — 24/7, with evidence',
        summary:
          'Hard hats, vests, masks, gloves, and hazardous zone violations in field camera footage are continuously analyzed by AI. Human inspection remains sample-based; AI watches every frame.',
        detects: [
          'Missing hard hat, vest, mask, gloves',
          'Hazardous / restricted zone entry',
          'Behavior and posture violating HSE rules',
          'Event image and timestamp',
        ],
        howItWorks:
          'A module connects to your existing IP cameras. Video is processed on-site or in the cloud; on violation, alerts go to the dashboard, WhatsApp, or VMS popup.',
        panelShows: [
          'Daily / shift violation count',
          'Zone-based violation heat map',
          'Evidence photo and video clip',
          'Filtered alarm list for the HSE officer',
        ],
        outcome:
          'Work accident risk becomes visible early; digital evidence archive for audits, reduced manual patrol load.',
      },
      kalite: {
        label: '02 · Quality Control',
        tab: 'Quality Control',
        title: 'In-line defect detection — before scrap builds up',
        summary:
          'Defects, assembly errors, color/size deviation, and surface flaws on the production line are detected in 0.1–0.3 seconds. Errors missed or caught late by the human eye are stopped in-line.',
        detects: [
          'Surface, solder, assembly, and dimension deviation',
          'Missing / faulty parts, color mismatch',
          'OK / reject decision and defect classification',
          'Scrap trend and shift comparison',
        ],
        howItWorks:
          'Line camera video is analyzed by the model. On defect detection, warning, reject signal, or line stop (PLC / MES integration) can be triggered.',
        panelShows: [
          'Instant defect rate and defect type distribution',
          'Last 24 hours / shift quality chart',
          'Rejected part counter',
          'Detail image for the quality engineer',
        ],
        outcome:
          'Scrap and waste cost drops; customer complaints are stopped in production; quality team focuses on root cause analysis.',
      },
      verimlilik: {
        label: '03 · Workforce & Efficiency',
        tab: 'Workforce & Efficiency',
        title: 'Who is how active — lost time becomes visible',
        summary:
          'Staff inspections, active work time, station-level performance, and idle time are measured. Intervention happens within the shift, not at shift end.',
        detects: [
          'Active work vs waiting / idle',
          'Station and line performance score',
          'Area violation and unauthorized zone',
          'Shift and team comparison',
        ],
        howItWorks:
          'Camera + motion analysis classifies staff activity. When defined thresholds are exceeded, KPI summary and alarms go to management and shift supervisors.',
        panelShows: [
          'Shift efficiency percentage',
          'Idle time (min) and trend',
          'Line / station performance table',
          'Weekly lost-time report',
        ],
        outcome:
          'Hidden capacity loss surfaces; bonuses, shift planning, and efficiency improvements are data-driven.',
      },
      panel: {
        label: '04 · Live Vision Dashboard',
        tab: 'Live Vision Dashboard',
        title: 'All modules on one screen — real time',
        summary:
          'HSE, quality, efficiency, and security data flow to one live dashboard, not separate Excel files. Plant manager, quality, and HSE officers each see their own filter.',
        detects: [
          'Events and alarms from all modules',
          'KPI summary cards and trend charts',
          'Critical alarm prioritization',
          'ERP / MES sync status',
        ],
        howItWorks:
          'Web-based dashboard; browser access. Role-based views, event history search, and export. API sends data to your existing systems.',
        panelShows: [
          'Live line status and open alarm count',
          'Daily HSE / quality / efficiency summary',
          'Event detail + evidence image',
          'Integration and camera health status',
        ],
        outcome:
          'Decision delay shrinks; clear, measurable operational visibility for management.',
      },
    },
    panelExamples: {
      isg: {
        imageAlt: 'Forklift pedestrian risk analysis — AI image processing',
        title: 'What is this screen?',
        subtitle: 'Live dashboard for the HSE officer — opens in browser, no install required.',
        event: {
          time: '14:32',
          title: 'Hard hat violation · Assembly line',
          detail: 'Camera 4 · Hazardous zone boundary',
          action: '→ WhatsApp + VMS popup sent',
        },
        explains: [
          { label: 'Top left', text: 'Today’s violation count — by shift' },
          { label: 'Center', text: 'Event card: what, where, when' },
          { label: 'Right', text: 'Evidence image — archived for audit' },
        ],
      },
      kalite: {
        imageAlt: 'Quality and staff monitoring on a conveyor line',
        title: 'What is this screen?',
        subtitle: 'Defect tracking screen for the quality engineer — OK/reject and scrap trend.',
        event: {
          time: '09:15',
          title: 'Solder defect · PCB line',
          detail: 'Auto reject · 0.12 s detection',
          action: '→ Line stop signal (optional)',
        },
        explains: [
          { label: 'Top', text: 'Instant quality rate (98%+ target)' },
          { label: 'Center', text: 'Defect type: solder, assembly, dimension…' },
          { label: 'Bottom', text: 'Shift scrap report — dashboard instead of Excel' },
        ],
      },
      verimlilik: {
        imageAlt: 'Line efficiency and staff tracking — AI video analysis',
        title: 'What is this screen?',
        subtitle: 'Efficiency summary for the plant manager — who is active, where is the loss.',
        event: {
          time: 'Shift A',
          title: 'Idle threshold exceeded · Packaging',
          detail: '42 min idle · target 25 min',
          action: '→ Notification to shift supervisor',
        },
        explains: [
          { label: 'KPI', text: 'Active work 87% — shift average' },
          { label: 'Idle', text: 'Idle minutes and trend' },
          { label: 'Line', text: 'Station-level performance table' },
        ],
      },
      panel: {
        imageAlt: 'Warehouse security — area and staff inspection',
        title: 'What is this screen?',
        subtitle: 'Management summary — HSE, quality, efficiency at a glance.',
        event: {
          time: 'Live',
          title: '3 open alarms · 0 critical',
          detail: '2 HSE · 1 quality · 0 security',
          action: '→ All modules in sync',
        },
        explains: [
          { label: 'Summary', text: 'Open alarms, line status, KPI cards' },
          { label: 'Filter', text: 'Role-based: manager / HSE / quality view' },
          { label: 'Integration', text: 'ERP and camera health status' },
        ],
      },
    },
    panelExplainer: {
      dataFlow: 'Data flow',
      flowNodes: ['Camera', 'AI', 'Dashboard', 'Alarm'],
      sampleEvent: 'Sample event',
      newBadge: 'New',
      panelScreenshot: 'Live Vision Dashboard — actual screen capture',
      fieldScreenshot: 'Sample field image — AI analysis layer',
      discoveryNote: 'We evaluate your facility scenario together in a discovery meeting',
    },
    integration: {
      eyebrow: 'Integration',
      title: 'Keep your ERP data connected',
      items: ['SAP', 'Oracle', 'Dynamics 365', 'Salesforce'],
      itemSuffix: '— work order, inventory, and event sync',
      cta: 'Contact for integration',
    },
    infrastructure: {
      eyebrow: 'Infrastructure',
      title: 'Enterprise security, uninterrupted operations',
      description: 'On-site (Edge) or cloud deployment; KVKK-compliant data flow.',
      tags: ['KVKK', 'API', 'Role-based access'],
    },
    contact: 'Contact',
  },
  inspectionModules: {
    eyebrow: 'Inspection Modules',
    title: 'Click a module —',
    titleHighlight: 'what we do, what you gain',
    description:
      'See the field side and business outcome for each module. Start with one module and expand over time if you prefer.',
    expandOpen: 'Hide details',
    expandClosed: 'What we do · What you gain — click',
    whatWeDo: 'What do we do?',
    valueAdd: 'What do you gain?',
    modules: [
      {
        title: 'Staff Inspection',
        desc: 'Who is on site, where, doing what — compliance with shift and area rules is monitored automatically.',
        metric: '24/7 monitoring',
        whatWeDo: [
          'Staff position and movement analysis from camera video',
          'Unauthorized zone and off-shift area entry detection',
          'Task area compliance and duration tracking',
          'Timestamped event recording',
        ],
        valueAdd: [
          'Reduces manual patrol and paper inspection cost',
          'Makes violations visible instantly — not at shift end',
          'Makes discipline and process compliance measurable',
        ],
      },
      {
        title: 'HSE Inspection',
        desc: 'PPE and safety rules monitored 24/7; violations reported instantly.',
        metric: 'Instant alert',
        whatWeDo: [
          'Hard hat, vest, mask, and glove usage check',
          'Hazardous zone violation and restricted area entry alert',
          'Evidence image storage before audit and incidents',
          'Instant notification to HSE officer (dashboard / integration)',
        ],
        valueAdd: [
          'Reduces workplace accident and penalty risk',
          'Easier preparation for OSHA / local HSE audits',
          'Supports safety culture on site with data',
        ],
      },
      {
        title: 'Quality Control',
        desc: 'Defects and deviations on the line caught instantly; scrap separated on site.',
        metric: '0.1–0.3 s',
        whatWeDo: [
          'Surface, assembly, and dimension deviation detection via image processing',
          'Automatic OK / reject decision and line stop integration',
          'Defect type and frequency reporting',
          'Quality trend charts and shift-based analysis',
        ],
        valueAdd: [
          'Reduces scrap and waste cost',
          'Stops customer complaints in production',
          'Reduces repetitive inspection load on quality team',
        ],
      },
      {
        title: 'Workforce Efficiency',
        desc: 'Active work and line performance measured; management sees clear KPIs.',
        metric: 'Measurable KPI',
        whatWeDo: [
          'Active work vs waiting time separation',
          'Station and line performance scores',
          'Shift and team comparison',
          'Target vs actual KPI dashboard',
        ],
        valueAdd: [
          'Surfaces hidden capacity losses',
          'Bases bonuses and shift planning on data',
          'Single-screen summary for plant manager',
        ],
      },
      {
        title: 'Idle Time',
        desc: 'Idle time and lost time become visible; response speeds up.',
        metric: 'Lost time −%',
        whatWeDo: [
          'Staff and line idle time measurement',
          'Unplanned stop and waiting analysis',
          'Lost-time heat map and alarm thresholds',
          'Weekly efficiency loss report',
        ],
        valueAdd: [
          'Unmeasured lost hours stop being pure cost',
          'Clearly shows bottleneck lines',
          'Gives concrete starting point for OEE improvement projects',
        ],
      },
      {
        title: 'Machine & Line Efficiency',
        desc: 'Downtime, run rate, and OEE tracked on one dashboard.',
        metric: 'Live dashboard',
        whatWeDo: [
          'Line status: running / stopped / maintenance',
          'Video synchronized with machine and production speed',
          'Live tracking of OEE components',
          'Event synchronization with ERP / MES',
        ],
        valueAdd: [
          'Helps shorten unplanned downtime',
          'Aligns production plan with field reality',
          'Instant operational visibility for management',
        ],
      },
    ],
    ctaTitle: 'Which modules fit your facility?',
    ctaDesc: 'In a discovery meeting, we clarify your scenario module by module.',
    contact: 'Contact',
  },
  audience: {
    eyebrow: 'Who is it for?',
    title: 'Hype Vision for',
    titleHighlight: 'your team',
    description: 'Your problem → solution → on-site action. Clear, measurable value for every role.',
    problem: 'Your problem',
    solution: 'Hype Vision',
    action: 'What happens on site?',
    audiences: [
      {
        role: 'Plant Manager',
        pain: 'You learn field reality at shift end; OEE, downtime, and idle losses are reported late.',
        solution:
          'Hype Vision presents efficiency, downtime, quality, and HSE summary live on one dashboard. Decisions are made within the shift.',
        action: 'See OEE and idle metrics within the shift; send clear KPIs to management.',
        tags: ['OEE & downtime', 'Shift KPI', 'Single screen'],
      },
      {
        role: 'HSE Officer',
        pain: 'PPE and zone violations remain sample-based; accident risk is noticed late, evidence is weak.',
        solution: '24/7 PPE and hazardous area analysis; instant alarm + timestamped evidence image on violation.',
        action:
          'On violation: VMS popup, WhatsApp notification, or site siren — intervention within the shift.',
        tags: ['PPE detection', 'VMS popup', 'IoT trigger'],
      },
      {
        role: 'Quality Engineer',
        pain: 'Scrap builds up, manual inspection is tiring; defects stay hidden until customer or final assembly.',
        solution: '0.1–0.3 s in-line defect detection; OK/reject, defect trend, and shift report.',
        action: 'Automatic in-line reject and scrap separation — stop before customer complaints.',
        tags: ['Instant detection', 'OK / reject', 'Scrap reduction'],
      },
    ],
    cta: 'Reach us',
  },
  problemSolution: {
    eyebrow: 'Why does it still happen?',
    title: 'Delayed indicators and manual methods',
    titleHighlight: 'cannot modernize the plant.',
    pains: [
      {
        title: 'Manual inspection misses critical risk',
        desc: 'Paper HSE audits, checklists, and sample floor tours cannot see serious violations. Accidents learned at shift end are accidents that could not be prevented.',
      },
      {
        title: 'You cannot prevent what you cannot see',
        desc: 'HSE teams work hard; but without real-time visibility, hidden risks turn into scrap, idle loss, and accidents. You are always one step behind.',
      },
    ],
    withHype: 'With Hype Vision',
    headline1: 'Human inspection',
    headlineHighlight: 'does not scale.',
    headline2: 'AI scales.',
    description:
      'We turn video into structured data: alarms, metrics, evidence. Intervention within the shift; cost, risk, and scrap drop.',
    allModules: 'All inspection modules →',
    contact: 'Contact',
    areas: [
      {
        title: 'HSE Inspection',
        desc: 'Hard hat, vest, mask, and hazardous zone violations monitored 24/7. Continuous, evidence-producing AI oversight instead of human inspection.',
        highlight: 'PPE & zones',
        tags: ['HSE inspection', 'Violation alert'],
      },
      {
        title: 'Workforce & Efficiency',
        desc: 'Staff inspections, work durations, efficiency, and idle time measured automatically — lost time becomes visible.',
        highlight: 'Idle time',
        tags: ['Staff inspection', 'Efficiency KPI'],
      },
      {
        title: 'Quality Control',
        desc: 'Instant defect detection on the line; scrap and waste no longer depend on human fatigue and late response.',
        highlight: 'Instant detection',
        tags: ['Quality control', 'Scrap reduction'],
      },
      {
        title: 'Security & Facility',
        desc: 'Suspicious movement, unauthorized entry/exit, and abnormal conditions reported 24/7.',
        highlight: '24/7 alarm',
        tags: ['Security', 'Anomaly'],
      },
    ],
  },
  howItWorks: {
    eyebrow: 'How does it work?',
    title: 'In 4 steps',
    titleHighlight: 'from camera to action',
    description: 'Deployment can be on-site (Edge) or cloud — finalized after discovery.',
    imageAlt: 'Hype Vision flow diagram — camera, AI analysis, dashboard, and action',
    flow: [
      { label: 'Connect', short: 'Your existing IP cameras are recognized', detail: 'Brand does not matter. No new cameras required.' },
      { label: 'Analyze', short: 'AI reads the video', detail: 'HSE, quality, or efficiency — your chosen module.' },
      { label: 'Dashboard', short: 'Results land on one screen', detail: 'Alarms, counters, evidence — not Excel.' },
      { label: 'Action', short: 'Team is notified instantly', detail: 'WhatsApp, VMS popup, or site siren.' },
    ],
    cards: [
      { title: 'How long does it take?', text: 'Pilot setup usually', bold: '3–5 business days', suffix: '.' },
      { title: 'Which cameras?', text: 'RTSP / ONVIF compatible IP cameras.' },
      { title: 'IT load?', text: 'Existing infrastructure is used; modular start is possible.' },
    ],
    ctaTitle: 'Let’s talk about your on-site video',
    ctaDesc: 'Fill out the form or call directly.',
    contact: 'Contact',
  },
  valueImpact: {
    eyebrow: 'Business value',
    title: 'Not just technology —',
    titleHighlight: 'measurable gain',
    description:
      'Hype Vision works with your existing cameras; adds cost control, risk reduction, speed, and management visibility to your facility.',
    impacts: [
      {
        title: 'Cost control',
        points: [
          'Makes scrap, waste, and idle time loss visible',
          'Reduces manual inspection and patrol load',
          'Stops wrong production in-line',
        ],
      },
      {
        title: 'Risk and compliance',
        points: [
          'Instant alert and evidence on HSE violations',
          'Lower workplace accident and penalty risk',
          'Audit-ready report archive',
        ],
      },
      {
        title: 'Operational speed',
        points: [
          'Decisions made within the shift',
          'Synchronized data flow with ERP / MES',
          'Modular go-live in 3–5 days',
        ],
      },
      {
        title: 'Measurable management',
        points: [
          'Single dashboard for plant manager',
          'KPIs: efficiency, quality, HSE, idle',
          'Shift and line comparison',
        ],
      },
    ],
    compareEyebrow: 'Comparison',
    compareTitle: 'Human inspection',
    compareVs: 'vs',
    compareHighlight: 'Hype Vision',
    compareDesc: 'Same facility, same line — the difference is continuity, speed, and measurability.',
    traditional: 'Traditional',
    humanInspection: 'Human inspection',
    humanSub: 'Sample-based, tires, reacts late',
    ai: 'Artificial intelligence',
    hypeVision: 'Hype Vision',
    hypeSub: '24/7, evidence-based, instant response',
    rows: [
      {
        dimension: 'Coverage',
        human: 'Sample-based control — entire line not seen',
        humanNote: 'Shift start / end, specific hours',
        ai: '24/7, every camera frame',
        aiNote: 'Continuous monitoring without human fatigue',
      },
      {
        dimension: 'HSE & PPE',
        human: 'Hard hat / vest checks can be missed',
        humanNote: 'Violation noticed later',
        ai: 'Instant violation alert + evidence image',
        aiNote: 'Intervention before audit and incidents',
      },
      {
        dimension: 'Quality',
        human: 'Eye fatigue, late detection',
        humanNote: 'Scrap builds, response delayed',
        ai: '0.1–0.3 s in-line detection',
        aiNote: 'OK / reject, automatic separation',
      },
      {
        dimension: 'Records',
        human: 'Paper, Excel, memory',
        humanNote: 'Weak evidence in audits',
        ai: 'Timestamped digital archive',
        aiNote: 'Event + image on one dashboard',
      },
      {
        dimension: 'Response',
        human: 'Learned at shift end',
        humanNote: 'Lost hours cannot be recovered',
        ai: 'Instant alarm and dashboard notification',
        aiNote: 'Optional ERP / MES sync',
      },
      {
        dimension: 'Cost & scale',
        human: 'Continuous labor and patrol',
        humanNote: 'Cost rises as lines increase',
        ai: 'Existing cameras + modular AI',
        aiNote: 'No new cameras required',
      },
    ],
    humanResult: 'Result:',
    humanResultText: 'Bottleneck is human capacity; data arrives late and fragmented.',
    aiResult: 'Result:',
    aiResultText: 'Continuous inspection, instant alarms, KPIs on one dashboard.',
    footnote:
      'Human inspection does not disappear entirely — critical decisions stay with management; routine and continuous control is handed to AI.',
  },
  useCases: {
    eyebrow: 'Sector Results',
    title: 'Choose your sector —',
    titleHighlight: 'problem, solution, outcome',
    description:
      'Same platform; different line realities. In every case: existing cameras, modular setup, measurable business outcome.',
    tablist: 'Sector selection',
    challengeTitle: 'Sector challenge',
    approachTitle: 'With Hype Vision',
    outcomeTitle: 'Measured outcome',
    sectors: {
      elektronik: {
        category: 'Electronics & PCB',
        tagline: 'Stop scrap in-line, remove manual inspection burden',
        challenge: [
          'Component and solder defects noticed late, scrap accumulates',
          'Manual AOI / visual inspection is a bottleneck and fatigue source',
          'Errors learned at shift end — response is too late',
        ],
        approach: [
          'Quality module on existing line cameras — no new cameras required',
          '0.1 s image analysis; OK / reject and line stop integration',
          'Defect type, frequency, and shift trend on one dashboard',
        ],
        outcomeSummary:
          'Scrap rate drops, output quality stabilizes; quality team focuses on root cause instead of repetitive checks.',
        stats: [
          { value: '22%', label: 'Scrap reduction', hint: '6-month pilot' },
          { value: '0.1 s', label: 'Detection time' },
          { value: '50K+', label: 'Parts / day' },
        ],
        modules: ['Quality Control', 'Line Efficiency', 'Idle Time'],
      },
      otomotiv: {
        category: 'Automotive & Supplier',
        tagline: 'Separate faulty parts before shipment, cut return cost',
        challenge: [
          'Dimension and assembly deviation hidden until customer or final assembly',
          'High return, scrap, and reputation cost',
          'HSE and quality inspections in separate processes, fragmented data',
        ],
        approach: [
          'Automatic part-level reject; event sync with ERP / MES',
          'PPE and hazardous zone on same infrastructure with HSE module',
          'Modular rollout on supplier lines (3–5 days)',
        ],
        outcomeSummary:
          'Defects caught before shipment; lower scrap and recall risk, digital evidence archive for audits.',
        stats: [
          { value: '95%', label: 'Detection accuracy' },
          { value: '0.2 s', label: 'Inspection speed' },
          { value: '100K+', label: 'Parts / day' },
        ],
        modules: ['Quality Control', 'HSE Inspection', 'Staff Inspection'],
      },
      tekstil: {
        category: 'Textile & Apparel',
        tagline: 'See fabric scrap in production, not on the roll',
        challenge: [
          'Color, stitch, and fabric defects noticed after meters of production',
          'Scrap cost erodes order margin',
          'Workforce efficiency and machine downtime not measurable',
        ],
        approach: [
          'Instant defect detection and alarm on line camera',
          'Meter-based scrap and shift report',
          'Lost-time analysis with idle time and machine downtime',
        ],
        outcomeSummary:
          'Scrap cut early, delivery risk drops; plant manager sees shift-based quality and efficiency KPIs on one screen.',
        stats: [
          { value: '94%', label: 'Quality score' },
          { value: '0.3 s', label: 'Detection' },
          { value: '200K+', label: 'Meters / day' },
        ],
        modules: ['Quality Control', 'Idle Time', 'Machine Efficiency'],
      },
      metal: {
        category: 'Metal, Plastic & Machinery',
        tagline: 'Manage downtime, HSE, and quality from one dashboard',
        challenge: [
          'Unplanned machine downtime and OEE loss reported late',
          'HSE violations on press / welding lines remain sample-based',
          'Quality and security data scattered in Excel',
        ],
        approach: [
          'Live monitoring of machine run / stop and line speed',
          'Instant PPE and zone violation alert + evidence image',
          'OEE components and quality events on one dashboard',
        ],
        outcomeSummary:
          'Downtime shortens, HSE risk becomes visible; management sees operational reality within the shift.',
        stats: [
          { value: '−18%', label: 'Idle time', hint: '3 months' },
          { value: '24/7', label: 'HSE monitoring' },
          { value: 'Live', label: 'OEE dashboard' },
        ],
        modules: ['HSE Inspection', 'Machine Efficiency', 'Workforce Efficiency'],
      },
    },
    ctaTitle: 'Your sector not listed?',
    ctaDesc:
      'We work with the same modules in food, chemicals, logistics, and more — we discuss a facility-specific scenario in discovery.',
    contact: 'Contact',
  },
  platformOverview: {
    eyebrow: 'Field experience',
    title: 'Measurable results at production facilities in Turkey',
    titleHighlight: 'across industries',
    description:
      'Industrial image processing since 2020 — field projects and pilot deployments across sectors. Typical result ranges without naming clients:',
    cta: 'Scenario tailored to your facility',
    outcomes: [
      { sector: 'Automotive supplier', metric: '22% scrap reduction', note: '6-month quality module pilot' },
      { sector: 'Electronics & PCB', metric: '0.1 s detection', note: 'In-line defect separation' },
      { sector: 'Textile production', metric: '−18% idle time', note: 'Shift efficiency tracking' },
      { sector: 'Metal & machinery', metric: '24/7 HSE monitoring', note: 'Instant PPE violation alarm' },
    ],
    steps: [
      { step: '01', title: 'Discovery & camera mapping', desc: 'Your on-site cameras and lines are mapped. Brand does not matter.' },
      { step: '02', title: 'Module deployment', desc: 'HSE, quality, or efficiency — the modules you need go live.' },
      { step: '03', title: 'Live dashboard & alerts', desc: 'Alarms, reports, and evidence on one screen; ERP connection optional.' },
      { step: '04', title: 'Support & improvement', desc: 'Team training, threshold tuning, and new line support.' },
    ],
    sectorsLabel: 'Sectors served',
    sectors: ['Electronics', 'Automotive', 'Textile', 'Food', 'Chemicals', 'Defense', 'Metal', 'Packaging'],
    footnote: '2+ years field experience · modular deployment · facility-specific scenario in discovery',
  },
  finalCta: {
    eyebrow: 'Contact',
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    title: 'General, technical, and',
    titleHighlight: 'deployment',
    description:
      'Most asked questions about the Hype Vision platform — cameras, KVKK, Edge/Cloud, licensing, and API.',
    searchPlaceholder: 'Search FAQ...',
    noResults: 'No results found.',
    notFound: 'Couldn’t find your answer?',
    email: 'info@hypevisionlab.com',
  },
  blog: {
    eyebrow: 'Case notes',
    title: 'Anonymous',
    titleHighlight: 'field result stories',
    description:
      'Real on-site experience with measurable outcomes by sector — customer names are not disclosed.',
    readMore: 'Read more',
  },
};
