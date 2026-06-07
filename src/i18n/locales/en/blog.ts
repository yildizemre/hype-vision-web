export default {
  ui: {
    sectionEyebrow: 'Case notes',
    sectionTitle: 'Anonymous',
    sectionTitleHighlight: 'field result stories',
    sectionDesc:
      'Real on-site experience with measurable outcomes by sector — customer names are not disclosed.',
    readMore: 'Read more',
    breadcrumbHome: 'Home',
    breadcrumbBlog: 'Case notes',
    readTimeSuffix: 'read',
    disclaimer:
      '* Customer name and facility details are not shared for confidentiality. Results may vary by facility conditions.',
    allPosts: 'All case notes',
    contact: 'Contact',
    otherPosts: 'Other case notes',
    titleSuffix: 'Hype Vision',
  },
  posts: {
    'gida-hattinda-idle-azaltma': {
      title: 'How idle time on a food production line was reduced by 18%',
      excerpt:
        'Anonymous food facility — intra-shift idle became visible; response time shortened and lost capacity became measurable.',
      sector: 'Food & Beverage',
      readTime: '4 min',
      date: '15 May 2026',
      metaDescription:
        'AI idle tracking on a food production line: anonymous case note, 18% idle reduction, intra-shift intervention.',
      results: [
        { label: 'Idle reduction', value: '18%' },
        { label: 'Detection time', value: 'Instant' },
        { label: 'Installation', value: '4 days' },
      ],
      sections: [
        {
          paragraphs: [
            'This case note summarizes deployment of the Hype Vision workforce efficiency module at a mid-size food production facility in Turkey. The customer name is not disclosed for confidentiality.',
            'The facility’s main problem was lost time learned only at shift end: on the packaging line, how long staff were active versus waiting was visible only through Excel and observation-based reports at day end.',
          ],
        },
        {
          heading: 'Starting point',
          paragraphs: [
            'Six existing IP cameras (Hikvision, RTSP) covered packaging and feeding lines. No new cameras were purchased; a Hype Vision edge unit was connected to the plant network.',
            'Shift target: maximum 25 minutes idle per station. Actual average was 43 minutes — the gap was reported at shift end.',
          ],
        },
        {
          heading: 'What changed?',
          paragraphs: [
            'AI classified staff movement into active work, approved breaks, and idle time on an hourly basis. The shift supervisor received dashboard notifications when thresholds were exceeded.',
            'By end of month one, average idle dropped from 43 to 35 minutes (18% improvement). When station-level targets were tightened in month two, the trend held.',
            'The real gain for management: intervention happened within the shift; “what happened yesterday?” became “what is happening now?”',
          ],
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'The project was piloted in 4 business days. Full rollout extended to a second line with the same infrastructure.',
            'For facilities with similar line layouts, existing cameras may be sufficient — line mapping is done together during discovery.',
          ],
        },
      ],
    },
    'isg-kkd-ihlal-tespiti': {
      title: 'PPE violations on an assembly line: a 24/7 automated inspection case',
      excerpt:
        'Anonymous automotive supplier — hard hat and vest violations detected instantly; manual patrol load reduced and a digital evidence archive created.',
      sector: 'Automotive Supplier',
      readTime: '5 min',
      date: '2 May 2026',
      metaDescription:
        'HSE PPE inspection AI case note: hard hat and vest detection, hazardous area violations, 24/7 automated alarms. Anonymous factory example.',
      results: [
        { label: 'Violation visibility', value: '24/7' },
        { label: 'Manual rounds', value: '−40%' },
        { label: 'Evidence archive', value: 'Automatic' },
      ],
      sections: [
        {
          paragraphs: [
            'This facility (anonymous), an automotive supplier, ran HSE inspections in assembly and warehouse areas through sample floor tours and paper checklists. Critical violations could be missed after hours or in blind spots.',
          ],
        },
        {
          heading: 'Problem',
          paragraphs: [
            'Missing hard hat/vest at hazardous zone boundaries was the most common violation type. Even with two daily rounds, 24/7 coverage was impossible.',
            'After an incident, answering “what was on camera at that moment?” could take hours.',
          ],
        },
        {
          heading: 'Solution',
          paragraphs: [
            'The HSE module was connected to 8 existing cameras. Hard hat, vest, and zone violation models ran on on-site Edge; video was analyzed without leaving the facility.',
            'On violation, the HSE officer received a dashboard alarm and VMS popup. The event card automatically archived a timestamp and evidence frame.',
            'Daily violation counts fell in the first 6 weeks — we do not attribute this solely to behavior change; however, the concept of “invisible violations” disappeared.',
          ],
        },
        {
          heading: 'Operational impact',
          paragraphs: [
            'Manual floor tour frequency was reduced by 40%; the team had time for preventive actions.',
            'A digital evidence archive formed for audit files — event-based images instead of Excel lists.',
          ],
        },
      ],
    },
    'kalite-kontrol-fire-azaltma': {
      title: 'Scrap rate decline through early defect detection on a conveyor line',
      excerpt:
        'Anonymous white goods component line — surface defects caught instantly; late-intervention scrap buildup reduced.',
      sector: 'White Goods / Components',
      readTime: '4 min',
      date: '20 April 2026',
      metaDescription:
        'Quality control AI case note: defect detection on a conveyor line, scrap reduction, instant alarms. Anonymous production facility.',
      results: [
        { label: 'Scrap trend', value: '−22%' },
        { label: 'Detection', value: '0.2 s' },
        { label: 'Line stop', value: 'Optional' },
      ],
      sections: [
        {
          paragraphs: [
            'This facility (anonymous), producing white goods components, performed quality control by sampling at line end. In-line defects accumulated into scrap cost.',
          ],
        },
        {
          heading: 'Previous process',
          paragraphs: [
            'Operators tried to catch defects visually; fatigue and speed meant small surface flaws were often detected late.',
            'Scrap rate was around 3.2% per shift; root cause analysis was always delayed.',
          ],
        },
        {
          heading: 'Hype Vision quality module',
          paragraphs: [
            'Line camera video was analyzed by the model. Surface and assembly deviations were classified within 0.1–0.3 seconds.',
            'On defect detection, the quality engineer received an instant alarm; optional PLC integration defined a line-stop signal (this site used alarms only in the first phase).',
            'After an 8-week pilot, shift-based scrap rate fell to 2.5% (roughly 22% relative improvement).',
          ],
        },
        {
          heading: 'Lessons learned',
          paragraphs: [
            'Early detection stops scrap buildup; the real savings are in response speed, not only scrap cost.',
            'The model was fine-tuned within days on the facility’s own part samples — not a generic out-of-the-box model.',
          ],
        },
      ],
    },
  },
};
