export default {
  ui: {
    breadcrumbHome: 'Home',
    breadcrumbSectors: 'Sectors',
    modulesTitle: 'Recommended modules',
    metricsTitle: 'Typical outcomes',
    painsTitle: 'Sector challenges',
    caseStudy: 'Related case study',
    cta: 'Request discovery for your sector',
    ctaPanel: 'View live panel',
    relatedSectors: 'Other sectors',
  },
  pages: {
    tekstil: {
      title: 'AI inspection for textile manufacturing',
      metaDescription:
        'Productivity, PPE compliance, and line tracking for textile plants — with your existing cameras via Hype Vision.',
      eyebrow: 'Textile & apparel',
      headline: 'From sewing to packing —',
      headlineHighlight: 'measurable productivity',
      intro:
        'Textile sites lose visibility on idle time, PPE violations, and line imbalance until end of shift. Hype Vision makes it real-time with existing IP cameras.',
      pains: [
        { title: 'Hidden idle time', desc: 'Operator wait time is reported at shift end; intervention comes too late.' },
        { title: 'PPE compliance', desc: 'Helmet, glove, and vest gaps are caught only on sample walks.' },
        { title: 'Line imbalance', desc: 'Bottlenecks between feeding and packing are noticed late.' },
      ],
      modules: ['Workforce productivity', 'PPE / HSE', 'People counting', 'Zone analytics'],
      metrics: [
        { value: '−18%', label: 'Avg. idle reduction' },
        { value: '24/7', label: 'PPE monitoring' },
        { value: '4 days', label: 'Typical pilot setup' },
      ],
      caseSlug: 'tekstil-hat-a-fire-dususu',
    },
    otomotiv: {
      title: 'Quality and HSE for automotive suppliers',
      metaDescription:
        'Scrap reduction, PPE detection, and instant alerts on assembly lines — Hype Vision for automotive tier suppliers.',
      eyebrow: 'Automotive supply chain',
      headline: 'On the assembly line —',
      headlineHighlight: 'scrap and HSE control',
      intro:
        'Under JIT pressure, late defect detection and HSE gaps create cost and audit risk for automotive suppliers.',
      pains: [
        { title: 'Late scrap detection', desc: 'Defects reaching the next station multiply scrap cost.' },
        { title: 'Manual HSE tours', desc: 'Blind spots remain outside tour hours.' },
        { title: 'Weak digital evidence', desc: 'Audit files stay on paper and spreadsheets.' },
      ],
      modules: ['Quality control', 'PPE / HSE', 'Object counting', 'Face recognition access'],
      metrics: [
        { value: '−22%', label: 'Scrap trend (pilot)' },
        { value: '0.2 s', label: 'Defect detection' },
        { value: '−40%', label: 'Manual tour reduction' },
      ],
      caseSlug: 'isg-kkd-ihlal-tespiti',
    },
    gida: {
      title: 'Hygiene and productivity in food production',
      metaDescription:
        'Idle tracking, hygiene zone violations, and workforce productivity on food lines — 24/7 with Hype Vision.',
      eyebrow: 'Food & beverage',
      headline: 'On the packaging line —',
      headlineHighlight: 'make lost time visible',
      intro:
        'Food plants must manage hygiene rules and shift productivity together. Hype Vision monitors both from one panel.',
      pains: [
        { title: 'Shift loss', desc: 'Idle time on pack and feed lines is noticed too late.' },
        { title: 'Hygiene zones', desc: 'Unauthorized entry and equipment violations are not caught instantly.' },
        { title: 'Traceability', desc: 'Finding footage after an incident takes hours.' },
      ],
      modules: ['Workforce productivity', 'Zone violation', 'PPE / hygiene', 'Live panel'],
      metrics: [
        { value: '−18%', label: 'Idle reduction' },
        { value: 'Instant', label: 'Alert latency' },
        { value: 'GDPR/KVKK', label: 'Edge option' },
      ],
      caseSlug: 'gida-hattinda-idle-azaltma',
    },
    metal: {
      title: 'HSE for metal and machinery manufacturing',
      metaDescription:
        'PPE, hazardous zones, and fall detection in welding, cutting, and assembly — Hype Vision for metal production.',
      eyebrow: 'Metal & machinery',
      headline: 'In welding and assembly —',
      headlineHighlight: '24/7 HSE monitoring',
      intro:
        'Highest risk in metal processing sits in welding, cutting, and heavy equipment zones. Continuous AI coverage goes beyond manual rounds.',
      pains: [
        { title: 'PPE violations', desc: 'Welding mask, gloves, and helmet gaps are common.' },
        { title: 'Hazardous zones', desc: 'Forklift and pedestrian collision risk is high.' },
        { title: 'Fall / abnormal posture', desc: 'Early warning via pose analysis is not available manually.' },
      ],
      modules: ['PPE / HSE', 'Pose & fall', 'Forklift detection', 'Alerts'],
      metrics: [
        { value: '24/7', label: 'HSE coverage' },
        { value: '<3 s', label: 'Alert delay' },
        { value: 'Auto', label: 'Evidence archive' },
      ],
      caseSlug: 'kalite-kontrol-fire-azaltma',
    },
  },
};
