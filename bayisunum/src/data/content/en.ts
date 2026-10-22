import { buildContent } from './merge';
import type { ContentOverlay } from './merge';

const overlay: ContentOverlay = {
    videoCategoryMeta: {
      isg: {
        label: 'OHS',
        title: 'Occupational health and safety demos',
        description: 'PPE compliance, restricted zone violations, and digital evidence archive — real field recordings and technical insights.'
      },
      yangin: {
        label: 'FIRE',
        title: 'Early fire detection and disaster management',
        description: '10×10 pixel flame detection, fire panel integration, multi-channel alarms, and fire department routing — before classic sensors.'
      },
      verimlilik: {
        label: 'EFFICIENCY',
        title: 'Production and operations demos',
        description: 'OEE, line downtime, cycle time, personnel and product tracking — field proof with measurable efficiency metrics.'
      },
      custom: {
        label: 'CUSTOM',
        title: 'Custom project demos',
        description: 'Customer-specific pilot deployments, integration scenarios, and industry-tailored computer vision solutions.'
      }
    },
    decks: [
      {
        id: 'mes',
        title: 'MES Solution',
        subtitle: 'Production execution, OEE, line efficiency, and operational visibility',
        tag: 'MES',
        slides: [
          {
            index: 1,
            title: 'Introduction',
            subtitle: 'Hype Vision MES platform'
          },
          {
            index: 2,
            title: 'Problem',
            subtitle: 'Manual tracking and delayed data'
          },
          {
            index: 3,
            title: 'Solution architecture',
            subtitle: 'Edge + existing cameras'
          },
          {
            index: 4,
            title: 'Modules',
            subtitle: 'OEE, idle, quality, alarm'
          },
          {
            index: 5,
            title: 'Live dashboard',
            subtitle: 'Shift-based KPI'
          },
          {
            index: 6,
            title: 'Integration',
            subtitle: 'ERP / MES API'
          },
          {
            index: 7,
            title: 'Pilot process',
            subtitle: 'Discovery → deployment → report'
          },
          {
            index: 8,
            title: 'Conclusion',
            subtitle: 'Measurable efficiency gain'
          }
        ]
      },
      {
        id: 'isg',
        title: 'OHS Inspection',
        subtitle: 'PPE, restricted zones, fire, and digital evidence archive',
        tag: 'OHS',
        slides: Array.from({ length: 20 }, (_, i) => ({ index: i + 1, title: `Slide ${i + 1}`, subtitle: 'OHS solution presentation' }))
      }
    ],
    videoDemos: [
      {
        id: 'rampa-takip',
        title: 'Vehicle Detection and Dock Tracking',
        subtitle: 'Vehicle arrival, wait time, personnel and product counting at the logistics dock',
        insights: [
          {
            id: 'arac-algilama',
            title: '1. Vehicle Detection and Dock Tracking',
            paragraphs: [
              'Method: The area defined by yellow lines in the image (ROI — Region of Interest) represents the loading zone. When a vehicle enters this boundary, the system triggers the "Vehicle Arrived" logistics event.',
              'How long did it stay? The moment the vehicle enters the yellow zone, the system captures a timestamp (Tstart). When the vehicle leaves the area (Tend), the duration is measured and Total Dwell Time is calculated automatically.'
            ]
          },
          {
            id: 'personel-sayim',
            title: '2. Personnel and Product Counting (Counter: 18)',
            paragraphs: [
              'Personnel detection: The system tracks personnel in real time by enclosing them in a green bounding box with 86% accuracy (Person: 86%).',
              'How many products were loaded? As shown by the "COUNTER: 18" label at the bottom center of the screen, personnel have loaded exactly 18 products onto the truck so far. PRODUCT #18 is currently tracked in the top-right corner.'
            ]
          },
          {
            id: 'dongu-suresi',
            title: '3. Processing Time per Product (Cycle Time)',
            paragraphs: [
              'According to the "PRODUCT TIMES" table in the top-left, the loading speed of each product is measured with millisecond precision.',
              'The net elapsed time for the 18th product currently being loaded is measured as 0.84 seconds. This data is a critical metric for operational efficiency and personnel performance analysis.'
            ]
          },
          {
            id: 'tamamlandi',
            title: '4. When Was Loading Completed?',
            paragraphs: [
              'When personnel stop placing products (counter stops incrementing) and the vehicle leaves the yellow-lined safety zone, the system marks the loading process as "Completed".',
              'The exact end time is saved to the database, creating digital evidence for shipment reconciliation and logistics reporting.'
            ]
          }
        ]
      },
      {
        id: 'tekstil-dikim-verimlilik',
        title: 'Textile Sewing Line — Personnel Behavior and Presence Tracking',
        subtitle: 'Sewing vs. non-sewing time · absence from station and station occupancy analysis',
        insights: [
          {
            id: 'dikim-varlik',
            title: '1. Personnel Behavior and Presence Tracking (Sitting / Standing)',
            paragraphs: [
              'Time away from station (absenteeism): Periods when operators are not physically present at the station are logged in real time — e.g. 123 sec at the lower station, 155 sec at the upper-left station. Material supply delays, line balancing issues, and non-break station abandonment are analyzed with this data.',
              'Total time at station: Total time operators spend at the sewing table (e.g. 98 and 66 sec) is measured to calculate line occupancy performance.'
            ]
          },
          {
            id: 'dikim-operasyon',
            title: '2. Station and Operation Efficiency (Sewing vs. Non-Sewing Time)',
            paragraphs: [
              'Sewing time (value-added time): Net production time when the operator places fabric under the needle and runs the machine actively (e.g. 6 sec at lower station, 104 sec at right station) — directly determines OEE performance score.',
              'Non-sewing time (non-value-added / idle): Time when personnel sit at the table but the machine is not running (e.g. 215 sec at lower station, 117 sec at right station) — reveals micro-loss processes such as fabric folding, piece matching, and thread changes.'
            ]
          },
          {
            id: 'dikim-darbogaz',
            title: '3. Project Insights and Bottleneck Analysis',
            paragraphs: [
              'Imbalance between stations: While the right station stays active for a long sewing process (104 sec), low sewing times on the left stations (6 and 1 sec) signal operational imbalance and waiting behind a bottleneck on the line.',
              'Ergonomics and process optimization: Pose Estimation monitors sitting ergonomics and hand movements; prep fixtures or logistics support staff are recommended to reduce high non-sewing times.'
            ]
          },
          {
            id: 'dikim-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'On the textile sewing line, we measure performance not with estimated standard times but with second-by-second digital interaction between machine and personnel. We analyze in real time how long operators sew (104 sec), how long they idle (215 sec), and when they leave the station (155 sec), eliminating hidden time losses on garment lines.'
            ]
          }
        ]
      },
      {
        id: 'utu-paketleme-verimlilik',
        title: 'Ironing and Packing Stations — Counting and Efficiency Analysis',
        subtitle: 'Automatic counter · ironing vs. idle time and bottleneck detection',
        insights: [
          {
            id: 'utu-sayim',
            title: '1. Ironing and Packing Station Counting Mechanism',
            paragraphs: [
              'The AI model counts finished products leaving each ironing table and sent to packing one by one, free from human error.',
              'Station output tracking: Upper station Count: 98, lower-right Count: 104, lower-left Count: 1 — at end of day/shift, how many items each table ironed and prepared for packing is clearly documented.'
            ]
          },
          {
            id: 'utu-sure',
            title: '2. Ironing Time vs. Idle Time Analysis',
            paragraphs: [
              'Ironing time (active ironing time): Value-added time when the operator physically irons the product (e.g. 66 sec at lower-right) — measures per-product standard ironing KPI compliance.',
              'Non-ironing time (idle / preparation): Time when personnel are at the table but the iron is not running (e.g. 117 sec at lower-right) — shows time loss from interim steps such as taking from hanger, spreading, folding, and placing in bag.'
            ]
          },
          {
            id: 'utu-darbogaz',
            title: '3. Line Bottleneck and Absence Analysis',
            paragraphs: [
              'Time away from area: Periods when operators leave the station or wait for logistics are measured (155 sec at upper station, 123 sec at lower-left).',
              'Bottleneck insight: Lower-left station producing only 1 item and 123 sec away from area proves products are not arriving from sewing/washing or there is a serious line balancing problem.'
            ]
          },
          {
            id: 'utu-aksiyon',
            title: '4. Action Plan for Process Optimization',
            paragraphs: [
              'Ironing/packing separation: A conveyor flow should be designed where ironed products go directly to packing staff behind to reduce non-ironing time.',
              'Feed management: An intermediate stock (WIP) management model should be planned to distribute products from sewing evenly across tables and prevent low-count stations from idling.'
            ]
          },
          {
            id: 'utu-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'On the ironing and packing line, we measure each table\'s output, ironing time, and idle rate by the second. We instantly detect low-count stations and supply chain gaps, supporting line balancing and WIP management decisions with data.'
            ]
          }
        ]
      },
      {
        id: 'tekstil-kpi-dikim',
        title: 'Digital Textile Line — Sewing Times and KPI Performance Analysis',
        subtitle: 'Station-based OEE · cycle time compliance, idle time, and absenteeism score',
        insights: [
          {
            id: 'kpi-karsilastirma',
            title: '1. Station-Based KPI and Performance Comparison',
            paragraphs: [
              'Table 1 (high KPI 90.4%): Operator 420 min on station, 380 min active sewing, 40 min idle; 3.1 min average per product — efficiency close to target KPI.',
              'Table 2 (needs improvement 82.9%): 410 min on station, 340 min active sewing, 70 min idle; 3.5 min per product — below KPI target.'
            ]
          },
          {
            id: 'kpi-metrikler',
            title: '2. Core KPI Metrics Tracked in Sewing Processes',
            paragraphs: [
              'OEE (Overall Equipment/Station Effectiveness): Measures how effectively the table was used during the shift via active work time / total time.',
              'Cycle time standard compliance: Closeness of per-product time to factory recipe time; idle time rate and absence/line abandonment score (absenteeism via Pose) are reported.'
            ]
          },
          {
            id: 'kpi-aksiyon',
            title: '3. Process Planning and Action Management Based on KPI Outputs',
            paragraphs: [
              'Targeted training: Table 2 process time (3.5 min) is longer than Table 1 (3.1 min) — signals need for support/training in sewing technique or piece placement.',
              'Bottleneck prevention and incentives: Stations exceeding 90% efficiency join incentive systems; causes of 70 min idle on lagging tables (material, breakdown) are reviewed from logs to prevent line stoppages.'
            ]
          },
          {
            id: 'kpi-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We manage textile line efficiency not with subjective observations but with real-time KPI scorecards from AI. We analyze net sewing times and idle minutes instantly, objectively reporting target KPI compliance (Table 1: 90.4% vs Table 2: 82.9%) and making line balancing decisions fully data-driven.'
            ]
          }
        ]
      },
      {
        id: 'turnike-ihlal',
        title: 'Turnstile Integration and Unauthorized Pass Prevention',
        subtitle: 'Card reader logs + camera image hybrid integration — violation management and smart matching',
        insights: [
          {
            id: 'kartli-gecis',
            title: '1. Card Pass and Validation (Normal Flow)',
            paragraphs: [
              'Scenario: Personnel or visitor scans card, turnstile opens, and pass is completed.',
              'System response: Because card read log matches the person on camera, the system shows green light in the background; no violation record is created and the process is approved smoothly.'
            ]
          },
          {
            id: 'kacak-gecis',
            title: '2. Unauthorized Pass Detection and Digital Profile Record',
            paragraphs: [
              'Scenario: A person jumps the turnstile without scanning a card or passes through a rear turnstile (e.g. ID: 4 or ID: 12).',
              'System response: The moment dynamic human movement is detected in the turnstile zone without a "card read" signal from hardware, the "Violator Entry State" mechanism is triggered.',
              'Face biometrics, clothing colors, and distinguishing physical features of the unauthorized passer are extracted by AI and instantly saved to the Blacklist / Violation Pool database.'
            ]
          },
          {
            id: 'akilli-eslestirme',
            title: '3. Smart Matching and Alert Mechanism',
            paragraphs: [
              'Capture scenario: When the unauthorized passer uses their own card next time (evening exit or next day), the system activates.',
              'Matching and block: Live camera image at card scan is matched within seconds with unauthorized pass profile data in the pool.',
              'Alert notification: Instant alert to security and HR / Operations panel — "This personnel previously committed an unauthorized pass violation, cancel/suspend their card" notification is triggered.'
            ]
          },
          {
            id: 'ozet-mesaj',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We track not only those who open the turnstile but also those who bypass it. Our system processes card scan signal and visual verification in hybrid mode, stores profiles of unauthorized passers, and triggers an alert mechanism to automatically block the person\'s card on first card transaction.'
            ]
          }
        ]
      },
      {
        id: 'akaryakit-analitik',
        title: 'Fuel Station Video Analytics & Market Routing',
        subtitle: 'License plate recognition, skeleton tracking, and object interaction — service times + cross-selling',
        insights: [
          {
            id: 'operasyonel-metrikler',
            title: '1. Core Operational Metrics',
            paragraphs: [
              'How many vehicles arrived? Every vehicle entering the station area and pulling to pumps is counted individually with car and licence_plate (license plate recognition) models. Total vehicle volume is reported daily, hourly, and by pump (e.g. PUMP 1-2).',
              'Service time: Timestamp is taken when the vehicle enters the yellow-lined ROI at the pump. Exit timestamp when refueling finishes and vehicle leaves. Difference is recorded as Net Service Time — bottlenecks at which pumps are live-mapped.'
            ]
          },
          {
            id: 'ilk-temas',
            title: '2. Staff – Customer First Contact Time',
            paragraphs: [
              'System logic: Staff at the pump are tracked with Pose Estimation skeleton model — person 0.81 and person 0.92 labels active in the image.',
              'First contact measurement: Time between vehicle stop and first moment staff skeleton coordinates approach (intersect) vehicle or fuel cap.',
              'Goal: Detect how many seconds customer waits after entering station and standardize service quality (SLA).'
            ]
          },
          {
            id: 'cam-kaput',
            title: '3. Windshield Wiping and Hood Opening Detection',
            paragraphs: [
              'How many windshields were wiped? When staff arm and body skeleton movements show back-and-forth motion in the front windshield region (green box — front cam area) for a set duration, system logs "Windshield Wiping Activity".',
              'How many hoods were opened? Vertical geometry change at front of vehicle (hood raised) and staff leaning into engine bay triggers "Hood Opened / Oil-Water Check in Progress" action.'
            ]
          },
          {
            id: 'market-yonlendirme',
            title: '4. Market Routing Mechanism (Cross-Selling)',
            paragraphs: [
              'Active wait optimization: Fuel fill averages 1.5–3 minutes. After fill starts and staff contact is confirmed, customer idle wait time is calculated.',
              'Targeted campaign: If windshield wipe detected, pump screen or loyalty app triggers "Did you refresh your washer fluid? Buy 2 get 1 free at the market!" If hood opened, vehicle-type-based "20% off antifreeze and motor oils" routing.',
              'Time-based trigger: If vehicle waits over 90 seconds, driver screen shows "Would you like a hot coffee break?" image to route customer to market.'
            ]
          },
          {
            id: 'akaryakit-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'Our cameras do not just watch fuel sales; they interpret the full operation from staff\'s first touch to windshield wiping. Our goal is to dynamically convert the 2-minute passive wait during refueling into in-store sales with AI-triggered campaigns.'
            ]
          }
        ]
      },
      {
        id: 'okey-kalite',
        title: 'Okey Tile Quality Control and Automatic Sorting',
        subtitle: 'Geometric defect + face-up/face-down analysis, relay triggering, and packing efficiency',
        insights: [
          {
            id: 'kalite-analizi',
            title: '1. Quality Control and Face-Up/Face-Down Analysis',
            paragraphs: [
              'Correct orientation (green box): Tile in the finger-pointed region is marked with green bounding box — conforms to "Correct Face/Flat" or defect-free product standard.',
              'Faulty/reversed product (red boxes): Tiles passing lower channels are detected as red bounding box (Back/Faulty). Reversed orientation, mold defects, color or micron-level geometric defects are caught instantly.'
            ]
          },
          {
            id: 'role-tetikleme',
            title: '2. Ejection from Line via Relay Trigger',
            paragraphs: [
              'Real-time communication: The moment the model detects error with red box, trigger signal is sent to PLC line or relay board via industrial protocols.',
              'Physical sorting: Triggered relay activates air piston or mechanical pusher within milliseconds, ejecting faulty tile from belt. Only 100% defect-free tiles reach packing stage.'
            ]
          },
          {
            id: 'paketleme-oee',
            title: '3. Packing Efficiency and Cycle Time',
            paragraphs: [
              'Packing efficiency (OEE): Faulty products blocked from packing line; machine stop-start times minimized. Belt flow speed optimized to maximize production efficiency.',
              'Cycle time: Tile speed on belt and transition time between tiles measured in real time. Belt speed stabilization and machine performance tracking provided by this metric.'
            ]
          },
          {
            id: 'dijital-sayac',
            title: '4. Digital Counter — How Many Tiles Did I Pack Today?',
            paragraphs: [
              'Production count tracking: Every tile approved as green box and reaching packing area without ejection is recorded as "+1 Successful Product".',
              'Live dashboard: Data streamed instantly to operator panel and ERP — total tiles produced today, successfully packed count (set-based), defective/reversed tiles ejected, and scrap rate.'
            ]
          },
          {
            id: 'okey-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'Our AI model does not just detect defects; via relay integration it physically ejects faulty or reversed okey tiles from the line within milliseconds. Thus only 100% defect-free products enter the packing line, increasing packing efficiency, and we live-report how many flawless tiles were packed at end of day.'
            ]
          }
        ]
      },
      {
        id: 'ifm-giris',
        title: 'IFM Expo Center — Entry Turnstiles',
        subtitle: 'Main entry line demographic analysis · entry counter, age and gender distribution',
        insights: [
          {
            id: 'ifm-giris-sayac',
            title: '1. How Many People Entered? (Entry Counter)',
            paragraphs: [
              'image_853484 camera scans turnstiles at main entry door (Entry Line — red line) and registration desk area in real time.',
              'Unique visitors crossing the red trigger line are counted instantly. According to "ENTRY ANALYSIS" table top-left, total entries successfully passing the line are reported live.'
            ]
          },
          {
            id: 'ifm-giris-demo',
            title: '2. Age and Gender Distribution',
            paragraphs: [
              'AI model processes face and physical features of people passing turnstile for instant age group estimate and gender classification.',
              'Gender distribution: Male / Female counts updated live. Visitors in registration desk queue are added to data as they approach turnstile.',
              'Age estimate: Visitors segmented into target groups — e.g. 26–35 Adult, Age 31, Age 34 direct labeling.'
            ]
          },
          {
            id: 'ifm-giris-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At expo entry we measure not only how many people came but who came — age and gender distribution — in real time. Combined with booth performance, this data gives exhibiting companies demographic visitor profiles.'
            ]
          }
        ]
      },
      {
        id: 'ifm-hall',
        title: 'IFM Expo Center — Hall 1 Density Analysis',
        subtitle: 'Area-based dwell time and booth traffic · 5 ROI regions',
        insights: [
          {
            id: 'ifm-hall-dwell',
            title: '3. Total Dwell Times in Areas',
            paragraphs: [
              'image_8534e7 camera analyzes visitor behavior by dividing expo area (Hall 1) into 5 sub-regions (ROI).',
              'Region 1 and 3 (corridor/passage): Low dwell time — confirmed as transit between booths.',
              'Region 4 and 5 (booth meeting/product display): Time at tables or product inspection (e.g. Can-am vehicles) maximized — booth attractiveness measured.'
            ]
          },
          {
            id: 'ifm-hall-trafik',
            title: '4. Visit Count (Booth Traffic / Heatmap)',
            paragraphs: [
              'Each region\'s polygon area produces a Visit Score with unique people passing through or staying above threshold duration.',
              'Per heatmap logic, main hosting area at intersection of Borusan Oto and Can-am booths (Region 4) is recorded as highest visit traffic region.'
            ]
          },
          {
            id: 'ifm-hall-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We measure end-to-end how many minutes visitors spend in front of which booth. Combining entry demographic data with in-booth density, we offer smart expo analytics reporting which age group shows more interest in which product.'
            ]
          }
        ]
      },
      {
        id: 'ifm-prestige',
        title: 'IFM Expo Center — Prestige Area Analysis',
        subtitle: 'Prestige hall live visitor flow and area performance record',
        insights: [
          {
            id: 'ifm-prestige-genel',
            title: 'Prestige Hall Live Monitoring',
            paragraphs: [
              'Camera feed in Prestige area records visitor entry-exit, in-area circulation, and density changes in real time.',
              'Demographic data from entry turnstiles combined with in-hall behavior metrics on the same panel.'
            ]
          },
          {
            id: 'ifm-prestige-metrik',
            title: 'Operational Metrics',
            paragraphs: [
              'Area-based visitor count, average dwell time, and hourly density charts reported to exhibiting companies.',
              'Which time window which region drew more interest is monitored via live dashboard.'
            ]
          },
          {
            id: 'ifm-prestige-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'Across Istanbul Expo Center we offer end-to-end analytics from entry to inside booth: how many came, who came, how long at which booth — all on one platform.'
            ]
          }
        ]
      },
      {
        id: 'migros-kasa-fraud',
        title: 'Migros Checkout — No Customer & Fraud Detection',
        subtitle: 'Checkout zone presence analysis · ghost transaction and suspicious refund/drawer open alarm',
        insights: [
          {
            id: 'migros-kasa-bolge',
            title: '1. Checkout Zone and Customer Presence Analysis',
            paragraphs: [
              'Scenario A — No customer: Camera scans CHECKOUT ZONE polygon; if nobody in area, "NO CUSTOMER" label is shown. If POS triggers "DRAWER OPEN" during this, cash drawer opens or refund is attempted.',
              'Scenario B — Normal flow: When customer appears at checkout, counter updates with "CUSTOMER PRESENT Count: 1" and normal POS transaction flow is approved.'
            ]
          },
          {
            id: 'migros-fraud-hayalet',
            title: '2. Fraud & Unauthorized Pass — Ghost Transaction',
            paragraphs: [
              'When any of the following occurs while "NO CUSTOMER" signal at checkout, system enters alarm state:',
              'Opening drawer / triggering cash drawer without customer',
              'Processing suspicious refund or void',
              'Empty receipt / basket reset actions'
            ]
          }
        ]
      },
      {
        id: 'migros-kasa-sap',
        title: 'Migros Checkout — SAP Fraud Video Evidence',
        subtitle: 'POS log cross-check · automatic video clip to SAP loss-prevention module',
        insights: [
          {
            id: 'migros-sap-eslestirme',
            title: '3. SAP Integration and Automatic Video Evidence',
            paragraphs: [
              'Instant match: "No Customer" detection on camera cross-checked within milliseconds with "Refund/Drawer Open" event timestamp on POS log.',
              'Notification to SAP Fraud team: On suspicious match, automatic violation record opened in SAP ERP / Loss Prevention Management module.',
              'Video recording: Clip including 5 seconds before and after violation moment attached as link or media to SAP fraud record — audit team sees evidence without manual camera scan.'
            ]
          },
          {
            id: 'migros-sap-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'Our system validates cash movements at checkout not only with logs but visually. We instantly catch every refund, void, or drawer open when no physical customer is present and automatically send violation moment video to SAP Fraud team screen as evidence.'
            ]
          }
        ]
      },
      {
        id: 'yangin-erken-algilama',
        title: 'Early-Stage Fire Detection and Disaster Management',
        subtitle: '10×10 pixel flame detection · fire panel, omnichannel alarm, and fire department integration',
        insights: [
          {
            id: 'yangin-erken-teshis',
            title: '1. Ultra-Early Diagnosis (10×10 Pixel)',
            paragraphs: [
              'Detection before conventional sensors: Does not wait for smoke or heat to reach physical sensors. Flame spark or first smoke sign of 10×10 pixel size in camera frame (FIRE-labeled red box) captured within milliseconds.',
              'False alarm filter: Filters glare, sun reflection, or work machine headlights; alarm triggers only on real threats.'
            ]
          },
          {
            id: 'yangin-entegrasyon',
            title: '2. Hardware and System Integrations',
            paragraphs: [
              'Fire alarm panel: On flame detection, signal sent to physical fire panel via dry contact relays or industrial protocols, siren sounds.',
              'Multi-channel notification: Fire location, time, and live camera image sent to crisis management via mobile app, web UI, SMS, and Telegram/WhatsApp bots.',
              'Fire department integration: On verified alarms, automatic call/data packet with location and fire size to local fire center (112).'
            ]
          },
          {
            id: 'yangin-afet-yonetim',
            title: '3. Smart Disaster and Evacuation Management',
            paragraphs: [
              'How many people remain inside? Personnel/visitor count inside during fire digitally detected via entry-exit cameras and turnstile integrations.',
              'Simultaneous information flow: Fire spread speed, direction, and disabled cameras updated on live panel.',
              'Smart entry map for firefighters: Fire epicenter shown in red; clusters of people inside and clear corridors analyzed to draw safest intervention route live.'
            ]
          },
          {
            id: 'yangin-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We do not just detect fire; we manage chaos during fire. While classic detectors wait to sense smoke, our camera catches 10×10 pixel flame, sounds siren, triggers fire panels. During crisis we offer a dynamic disaster management ecosystem showing live on map how many remain inside and which door firefighters should use.'
            ]
          }
        ]
      },
      {
        id: 'gratis-yangin-vms',
        title: 'Gratis Factory — Open-Area Fire Detection',
        subtitle: 'Outdoor flame/smoke detection · Milestone VMS live pop-up integration',
        insights: [
          {
            id: 'gratis-algilama',
            title: '1. Open-Area Fire Detection',
            paragraphs: [
              'Gratis factory outdoor and open storage areas scanned 24/7 with computer vision.',
              'Flame and smoke signs in open areas unreachable by classic sensors captured within milliseconds with FIRE label; false alarm filter removes sun glare and light sources.'
            ]
          },
          {
            id: 'gratis-milestone',
            title: '2. Milestone VMS Integration and Pop-Up',
            paragraphs: [
              'Instant event signal sent to Milestone VMS system the moment fire is detected.',
              'Live image of violation camera automatically pops up enlarged at security and OHS monitoring center with audible alert — operator focuses on incident without scanning hundreds of cameras.'
            ]
          },
          {
            id: 'gratis-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Gratis factory we catch open-area fire risk with cameras without waiting for sensors. On detection, live pop-up on Milestone VMS security screen enables response within seconds.'
            ]
          }
        ]
      },
      {
        id: 'bursa-mobilya-yangin',
        title: 'Bursa Furniture Factory — Open-Area Fire',
        subtitle: 'Outdoor flame/smoke detection · VMS pop-up and fire panel integration',
        insights: [
          {
            id: 'bursa-algilama',
            title: '1. Open-Area Ultra-Early Diagnosis',
            paragraphs: [
              'Bursa furniture factory outdoor, open warehouse, and loading areas monitored continuously with computer vision.',
              '10×10 pixel flame spark and first smoke sign in open areas unreachable by classic smoke detectors captured within milliseconds with FIRE label.'
            ]
          },
          {
            id: 'bursa-vms',
            title: '2. VMS Pop-Up and Siren Feedback',
            paragraphs: [
              'Instant event signal sent to VMS (Milestone / NX Witness etc.) system the moment fire is detected.',
              'Relevant camera image automatically opens as pop-up at security monitoring center; audible siren and fire alarm panel triggered simultaneously.'
            ]
          },
          {
            id: 'bursa-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Bursa furniture factory we catch open-area fire risk with cameras without waiting for sensors. On detection, VMS pop-up, siren, and fire panel feedback enable response within seconds.'
            ]
          }
        ]
      },
      {
        id: 'metro-istanbul-yangin',
        title: 'Metro Istanbul Warehouses — Open-Area Fire',
        subtitle: 'Logistics warehouse outdoor detection · VMS pop-up, siren, and multi-channel alarm',
        insights: [
          {
            id: 'metro-yangin-alg',
            title: '1. Warehouse Open-Area Fire Detection',
            paragraphs: [
              'Open areas of Metro Istanbul warehouse and logistics sites scanned 24/7 with computer vision.',
              'Flame and smoke signs in outdoor areas with wood, cardboard, and flammable materials detected instantly without waiting for detectors; false alarm filter removes sun and reflection sources.'
            ]
          },
          {
            id: 'metro-yangin-vms',
            title: '2. VMS Pop-Up and Siren Feedback',
            paragraphs: [
              'Event sent to VMS system on fire detection; relevant camera enlarges as live pop-up at security center.',
              'Audible siren, fire alarm panel, and mobile push notification triggered simultaneously — operator and field team informed within seconds.'
            ]
          },
          {
            id: 'metro-yangin-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Metro Istanbul warehouses we catch open-area fire risk early with AI cameras. VMS pop-up, siren, and fire panel feedback enable fast response and evidence-based alarm management during crisis.'
            ]
          }
        ]
      },
      {
        id: 'inofa-yangin',
        title: 'Inofa Technology — Early Fire Detection',
        subtitle: 'Production site flame/smoke detection · VMS pop-up, siren, and fire panel integration',
        insights: [
          {
            id: 'inofa-algilama',
            title: '1. Early Fire and Smoke Detection',
            paragraphs: [
              'Inofa Technology production site and open areas monitored 24/7 with computer vision.',
              'Flame spark and first smoke sign captured within milliseconds with FIRE label; false alarm filter removes sun glare and light sources.'
            ]
          },
          {
            id: 'inofa-vms',
            title: '2. VMS Pop-Up and Siren Feedback',
            paragraphs: [
              'Instant event signal sent to VMS system on fire detection; relevant camera opens as live pop-up at security center.',
              'Audible siren, fire alarm panel, and mobile push notification triggered simultaneously — operator focuses on incident without scanning hundreds of cameras.'
            ]
          },
          {
            id: 'inofa-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Inofa Technology site we catch fire risk early with AI cameras without waiting for sensors. VMS pop-up, siren, and fire panel feedback enable response within seconds and evidence-based alarm management.'
            ]
          }
        ]
      },
      {
        id: 'duman-erken-algilama',
        title: 'Early Smoke Detection — VMS Pop-Up and Audible Alert',
        subtitle: 'First smoke sign detection · VMS live pop-up and audible alarm integration',
        insights: [
          {
            id: 'duman-alg',
            title: '1. Early Smoke Detection',
            paragraphs: [
              'Production and warehouse areas scanned 24/7 with computer vision; first smoke sign captured within milliseconds before flame appears.',
              'In high-ceiling or open areas unreachable by classic smoke detectors, AI model marks smoke with FIRE/SMOKE label; false alarm filter removes steam and dust sources.'
            ]
          },
          {
            id: 'duman-vms',
            title: '2. VMS Pop-Up and Audible Alert',
            paragraphs: [
              'Instant event signal sent to VMS system on smoke detection; relevant camera enlarges as live pop-up at security center.',
              'Audible siren and fire alarm panel triggered simultaneously — operator focuses on incident point without scanning hundreds of cameras.'
            ]
          },
          {
            id: 'duman-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We catch smoke before fire breaks out. On detection, live pop-up and audible alert on VMS enable response within seconds.'
            ]
          }
        ]
      },
      {
        id: 'khan-palet-dijital',
        title: 'Pallet Production & Repair Line Digital Twin',
        subtitle: 'Khan Palet — pallet counting, repair action recognition, and personnel efficiency analysis',
        insights: [
          {
            id: 'palet-metrikler',
            title: '1. Production and Repair Metrics',
            paragraphs: [
              'Total pallets on line: On main conveyor, every pallet counted individually — e.g. "TOTAL PALLET COUNT: 140".',
              'Repaired vs. not repaired: Activities such as nailing and board replacement at repair tables tracked with Action Recognition. Those on good line labeled "Repaired", those diverted to scrap line "Not Repaired / Scrap".'
            ]
          },
          {
            id: 'palet-personel',
            title: '2. Smart Personnel Efficiency Analysis',
            paragraphs: [
              'Legal break integration: Meal and restroom breaks automatically deducted via shift/calendar integration.',
              'Idle time: If personnel do not touch pallet at table for long or no pallet on table, "Material Wait / Operational Pause" recorded.',
              'Leaving station: Time outside ROI except defined breaks accumulated with millisecond precision. OEE score calculated by day, week, month, year.'
            ]
          },
          {
            id: 'palet-dijital-ikiz',
            title: '3. Factory Digital Panel',
            paragraphs: [
              'Digital twin screen: Real-time status of all tables on one panel — Table 1: Active, Table 2: 15 min idle, Line 3: Congestion.',
              'Strategic action: High idle time — "laziness" or "pallets not arriving from line behind" — system analyzes automatically, management rebalances line.'
            ]
          },
          {
            id: 'palet-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Khan Palet factory we fully digitize production. Our cameras not only count 140 pallets on the line but analyze every movement at the table, reporting invisible pauses outside legal breaks by day, week, and year. We produce the factory digital twin so management can take transparent, data-driven action.'
            ]
          }
        ]
      },
      {
        id: 'metro-araba-takip',
        title: 'Metro Market — Shopping Cart Tracking & VMS',
        subtitle: 'grocery_cart detection · ROI boundary violation and VMS live pop-up integration',
        insights: [
          {
            id: 'metro-algilama',
            title: '1. Object Detection and Boundary Violation',
            paragraphs: [
              'Shopping cart detection: Cart pushed by customer labeled grocery_cart by AI and enclosed in green bounding box.',
              'Zone boundary (ROI): Parking exit lines or critical zones where carts must not go are bounded with digital lines. Violation mechanism activates the moment cart crosses these lines.'
            ]
          },
          {
            id: 'metro-vms',
            title: '2. VMS Integration and Live Pop-Up',
            paragraphs: [
              'Instant alarm: When cart is taken outside parking boundary or abandoned on vehicle lanes, event signal sent to VMS (Milestone, NX Witness etc.) system.',
              'Live pop-up: Violation camera image automatically enlarges as pop-up on security room monitor with audible alert — operator focuses on incident without scanning hundreds of cameras.'
            ]
          },
          {
            id: 'metro-operasyon',
            title: '3. Operational Benefits',
            paragraphs: [
              'Mobile notification: Location of abandoned or attempted-exit carts sent as notification to parking staff handheld terminals.',
              'Loss and damage cost: Theft, collision with nearby vehicles, or traffic blockage prevented with data-driven approach.'
            ]
          },
          {
            id: 'metro-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We do not leave shopping carts unattended at Metro Market parking. Our cameras track carts in real time; when boundary exit or vehicle collision risk arises, live pop-up alert on VMS security screens enables field teams to respond within seconds.'
            ]
          }
        ]
      },
      {
        id: 'sleepy-kalite-kontrol',
        title: 'Sleepy Packing Line — Print Verification',
        subtitle: 'OCR/OCV label control · fade/defect detection and PLC line ejection',
        insights: [
          {
            id: 'sleepy-ocr',
            title: '1. Label and Print Accuracy Control',
            paragraphs: [
              'OCR & OCV: All text on package surface in ROI (production date, expiry, weight, barcode) scanned with optical character verification.',
              'Character control: Letters and numbers checked instantly for template compliance and correct alignment.'
            ]
          },
          {
            id: 'sleepy-kusur',
            title: '2. Fade and Defect Detection',
            paragraphs: [
              'Erased/missing characters: Number/letter fade, missing output, or faint print from inkjet clog or slip captured within milliseconds.',
              'Geometric error: Package seam shift or print tear/wrinkle verified at pixel level.'
            ]
          },
          {
            id: 'sleepy-plc',
            title: '3. PLC Trigger and Line Ejection',
            paragraphs: [
              'Relay/PLC: On detection of erased, missing, or faulty print, instant signal sent to factory PLC system.',
              'Ejector: Faulty Sleepy package ejected from belt with pneumatic thrower — prevents faulty products from being boxed and reaching shelf.'
            ]
          },
          {
            id: 'sleepy-dashboard',
            title: '4. Efficiency and Reporting',
            paragraphs: [
              'How many packages checked today? Flawless products passing line counted one by one.',
              'Scrap analysis: End-of-day report of packages ejected for print error; inkjet maintenance timing detected with predictive maintenance.'
            ]
          },
          {
            id: 'sleepy-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'On Sleepy production line we miss no defect. We scan numbers and letters on fast-moving packages in real time; on slightest fade, shift, or missing print we eject faulty package via PLC trigger. We raise packing efficiency to 100% so only flawless products reach shelf.'
            ]
          }
        ]
      },
      {
        id: 'ankara-seker-cuval',
        title: 'Ankara Şeker — Conveyor Sack Counting & OEE',
        subtitle: 'Türkşeker packing line · sack counter, SPM, and micro-stoppage analysis',
        insights: [
          {
            id: 'seker-sayim',
            title: '1. Object Detection and Smart Counting',
            paragraphs: [
              'Sack counter: Every Türkşeker sack on line counted individually by AI — updated live on SACK COUNTER TOTAL interface.',
              'Trigger points (ROI): Green and red polygon lines at bottom verify sack direction, speed, and successful exit from line. Yellow dashed box captures exact sack pass moment.'
            ]
          },
          {
            id: 'seker-oee',
            title: '2. Line Efficiency and Capacity (OEE)',
            paragraphs: [
              'Sacks per minute (SPM): Instant line flow speed measured; performance score calculated comparing planned target vs actual speed.',
              'Micro-stoppage: If no sack passes check lines for set duration (e.g. 2 min) while belt runs, "Feed Interruption" or "Packing Fault" recorded.',
              'Shift comparison: Efficiency rates of different conveyor lines compared by day, week, and shift; bottleneck points reported.'
            ]
          },
          {
            id: 'seker-erp',
            title: '3. ERP/SAP Integration and Alarms',
            paragraphs: [
              'Warehouse and stock: Every counted sack instantly posted to ERP/SAP stock management — reconciliation between production and warehouse intake.',
              'Anomaly alarms: On sack stacking, belt jam, or line stop, instant alert sent to operator screens.'
            ]
          },
          {
            id: 'seker-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Ankara Şeker factory we make conveyor lines fully smart. Our cameras count sacks on lines one by one within milliseconds while control zones analyze sacks per minute flow (SPM) and micro-stoppages, reporting line efficiency in real time.'
            ]
          }
        ]
      },
      {
        id: 'bim-forklift-yolcu',
        title: 'BİM Distribution — Unauthorized Passenger on Vehicle Detection',
        subtitle: 'Personnel on pallet jack/forklift · Person on forklift alarm and live pop-up',
        insights: [
          {
            id: 'bim-ihlal-analiz',
            title: '1. AI-Based Violation Analysis',
            paragraphs: [
              'Human-on-vehicle detection: Moving work machine and person on it analyzed simultaneously — Person on forklift label triggered in red box.',
              'Critical labeling: Not just two objects side by side; violation recorded by distinguishing person in mounting position on machine body/step.'
            ]
          },
          {
            id: 'bim-uyari',
            title: '2. Instant Notification and Alert',
            paragraphs: [
              'Pop-up central alarm: On violation, red pop-up with live camera image drops to warehouse OHS specialist or shift supervisor panel.',
              'Field information flow: Location (e.g. BİM Distribution Center — Block C, Corridor 4) and vehicle/operator info sent as push via Telegram, WhatsApp, or mobile OHS app.'
            ]
          },
          {
            id: 'bim-katki',
            title: '3. Operational and OHS Contributions',
            paragraphs: [
              'Fall and crush risk: Risks of falling from step, tipping, or being under load while pallet jack/forklift moving prevented at formation stage.',
              'Disciplinary management: Operators/personnel repeating rule violations digitally reported — definitive evidence for sanctions and targeted training.'
            ]
          },
          {
            id: 'bim-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At BİM logistics warehouses we prevent off-purpose and unsafe use of work machines with AI. We catch personnel riding pallet jack or forklift steps with Person on forklift alert; live pop-up on supervisors\' screens prevents dangerous movements.'
            ]
          }
        ]
      },
      {
        id: 'donas-kacak-siparis',
        title: 'Donas — Loss Prevention and Unauthorized Order Detection',
        subtitle: 'Grill wrap counting · POS cross-check and ghost product fraud alarm',
        insights: [
          {
            id: 'donas-sayim',
            title: '1. Grill and Production Line Product Counting',
            paragraphs: [
              'Real-time object tracking: Counter camera labels wraps entering grill and passing belt one by one — e.g. wrap id 496 (blue) and 497 (red) tracked instantly with unique ID.',
              'Net output: Total net wraps passing counter during day recorded to digital kitchen log independent of human error.'
            ]
          },
          {
            id: 'donas-fraud',
            title: '2. POS Cross-Check and Unauthorized Sale',
            paragraphs: [
              'Ghost product detection: For every wrap passing, active order/receipt opened at register in that time window is searched.',
              'Off-record sale violation: If wrap produced and packed at counter while no receipt/order at register, "Off-Record Product / Fraud" alarm generated — exposes cash-in-hand scenario.'
            ]
          },
          {
            id: 'donas-video-kanit',
            title: '3. Automatic Video Evidence and Management Notification',
            paragraphs: [
              'Timestamp match: Violation log opened the second incident detected (packing in kitchen while no register activity).',
              'Central audit: Video clip before and after suspicious record dropped to branch management panel or central internal audit team as evidence.'
            ]
          },
          {
            id: 'donas-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Donas branches we close the era of unauthorized and off-record sales with AI. We count every wrap on grill with unique ID while cross-checking POS register logs in real time. We catch every ghost wrap produced without register entry within seconds and report to internal audit panel with video evidence.'
            ]
          }
        ]
      },
      {
        id: 'yuk-asansor-transpalet',
        title: 'Freight Elevators — Smart Protection and Automatic Hardware Lockout',
        subtitle: 'Pallet jack ROI detection · Ethernet I/O relay power cut and lock mode',
        insights: [
          {
            id: 'asansor-roi',
            title: '1. Zone-Based Pallet Jack Detection (ROI Control)',
            paragraphs: [
              'Critical hall in front of elevator door defined as virtual control zone (ROI) enclosed by red polygon lines.',
              'When battery stacker or pallet jack enters red area, AI diagnoses object within milliseconds; "PALLET JACK DETECTED" warning appears instantly on interface.'
            ]
          },
          {
            id: 'asansor-relay',
            title: '2. Hardware Intervention — Power Cut and Lock Mode',
            paragraphs: [
              'The moment pallet jack is detected, controller in panel sends signal to Ethernet I/O relay module connected to elevator control panel.',
              'Main contactor or door motor power cut; elevator put in Lock/Safety mode — doors do not open, movement stops, pallet jack cannot enter cabin even by force.'
            ]
          },
          {
            id: 'asansor-popup',
            title: '3. Pop-Up Notification and Operational Reporting',
            paragraphs: [
              'Instant audible and visual pop-up violation notification to cabin/floor operation screens and central monitoring panel.',
              'Violation visual evidence (clip) and timestamp automatically reported to OHS and facility management.'
            ]
          },
          {
            id: 'asansor-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We fully prevent freight elevators in warehouses from being damaged by pallet jacks with AI. The moment pallet jack enters red zone, PALLET JACK DETECTED alarm fires and elevator power is cut via relay module, doors locked — preventing high-cost damage.'
            ]
          }
        ]
      },
      {
        id: 'aemot-bobin-sarim',
        title: 'Electric Motor Production — Smart Coil Winding and Packing Line',
        subtitle: 'Top-view Pose Estimation · winding/packing ROI, cycle time, and OEE reporting',
        insights: [
          {
            id: 'aemot-roi-pose',
            title: '1. Winding and Packing Area Process Flow (ROI & Pose Estimation)',
            paragraphs: [
              'Operators monitored in real time with blue skeleton lines from top-view cameras; system distinguishes whether personnel actively assemble/wind with hands, not just sitting at table.',
              'Two operational areas on table: Winding Area (orange box) for coil winding and counter tracking; Packing Area (green box) final station where wound coils are collected.'
            ]
          },
          {
            id: 'aemot-metrikler',
            title: '2. Production and Performance Tracking Metrics',
            paragraphs: [
              'Total production count: Products completed by each person counted in real time; line-based total output automatically finalized at end of day/shift.',
              'Cycle time: Time between coil entering winding area and transfer to packing area measured by the second; winding time of each coil logged individually.',
              'Personnel presence time: Total time operator skeleton actively detected on work chair measured throughout shift.'
            ]
          },
          {
            id: 'aemot-durum',
            title: '3. Table / Station Time and Status Analysis',
            paragraphs: [
              'Active work time: Productive time when personnel perform assembly, winding, or transfer in winding/packing areas.',
              'Idle time: Micro-loss periods when personnel sit at table without physical operation — material wait, pause.',
              'Station abandonment (absenteeism): Periods when personnel fully leave station and skeleton detection drops to zero.'
            ]
          },
          {
            id: 'aemot-rapor',
            title: '4. Daily / Shift Production Scorecard',
            paragraphs: [
              'System produces automatic report at end of day or shift by station/operator: presence time, active work, idle time, total output (units), average winding time per coil, and station efficiency score (OEE).',
              'Sample output: Station 1 — 420 min presence, 380 min active, 40 min idle, 120 units, 3.1 min/coil, 90.4% OEE; Station 2 — 410 min presence, 340 min active, 70 min idle.'
            ]
          },
          {
            id: 'aemot-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'On electric motor production line we measure efficiency not with estimates but with AI millisecond data. We analyze personnel skeleton movements and winding/packing areas in real time; automatically report how many minutes each coil took to wind, how long personnel worked actively, and when lines idled — producing daily and shift production scorecards independent of human discretion.'
            ]
          }
        ]
      },
      {
        id: 'konveyor-montaj-darbogaz',
        title: 'Conveyor Assembly Line — Smart Bottleneck and Efficiency Analysis',
        subtitle: 'Motor ID tracking · personnel-product interaction time, idle time, and delay alarm',
        insights: [
          {
            id: 'konveyor-cycle',
            title: '1. Product-Based Monitoring and Cycle Time Tracking',
            paragraphs: [
              'Every electric motor on conveyor tracked with unique ID — line flow monitored within milliseconds with labels like M-1, M-2, M-3, M-4, M-5, M-6.',
              'Ratio of time each motor spent so far to target time shown as instant efficiency percentage (e.g. M-1 54%, M-2 75%, M-4 76%, M-5 55%).'
            ]
          },
          {
            id: 'konveyor-personel',
            title: '2. Personnel — Product Interaction Analysis',
            paragraphs: [
              'Hand movements and positions of personnel on assembly line analyzed to measure workforce distribution.',
              'Point-specific operation time: Pairings like center personnel working on M-3 | 8.9 sec, right personnel on M-5 | 2.0 sec logged by the second; dexterity and standard time compliance (KPI) reported.'
            ]
          },
          {
            id: 'konveyor-idle',
            title: '3. Idle Time and Bottleneck Detection',
            paragraphs: [
              'Off-station tracking: When personnel leave assembly area, logs like "P-4 off station" produced; time not in operation recorded as idle.',
              'Bottleneck analysis: If assembled motor cannot advance due to line ahead, system marks this as line congestion point.'
            ]
          },
          {
            id: 'konveyor-alarm',
            title: '4. Proactive Feedback — Excessive Line Dwell / Delay Alerts',
            paragraphs: [
              'If motor exceeds defined maximum cycle time (e.g. 45 sec), anomaly alarm triggered; yellow/red alert on station smart screen or tower lamp.',
              'Pop-up / mobile notification to shift supervisor like "Line 2, Station 3: M-3 motor delayed 12 seconds" enables intervention before downtime cost.'
            ]
          },
          {
            id: 'konveyor-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We make line congestion and hidden time losses visible with AI. We instantly pair every motor and person on line, analyzing within milliseconds which person spent how many seconds on which motor and who stayed off station. When product dwells on line longer than normal, automatic feedback lets us resolve bottlenecks before they grow.'
            ]
          }
        ]
      },
      {
        id: 'masa-pose-verimlilik',
        title: 'Manual Assembly Stations — Pose-Based Efficiency Analysis',
        subtitle: 'Automatic counter · cycle time, occupancy rate, and bottleneck mapping',
        insights: [
          {
            id: 'masa-sayac',
            title: '1. Personnel Efficiency and Counter Tracking',
            paragraphs: [
              'AI model automatically counts products completed by each person — net outputs like Table 1: 44 units, Table 2: 41 units shown free from human error.',
              'Personnel performance compared objectively at same station or different shifts; e.g. Table 1 found 7.3% more efficient than Table 2, identifying targeted training needs.'
            ]
          },
          {
            id: 'masa-cycle',
            title: '2. Station Efficiency and Per-Product Time Analysis',
            paragraphs: [
              '"Duration" data in counter table (e.g. 2.1s) measures net processing time per product at station with millisecond precision; per-product standardization achieved.',
              'Pose Estimation measures time personnel perform active assembly ("Active 2.1s", "FULL" label); micro-loss time detected when present at station but idle.'
            ]
          },
          {
            id: 'masa-darbogaz',
            title: '3. Bottleneck Analysis and Process Planning',
            paragraphs: [
              'Instant efficiency scores of different stations compared (100% FULL vs 80% FULL) — where line slows and bottleneck forms mapped live.',
              'If Table 1 process time consistently longer, line balanced with dynamic process planning decisions such as backup personnel or operation shift.'
            ]
          },
          {
            id: 'masa-kayip',
            title: '4. Lost Time Analysis and Idle Detection',
            paragraphs: [
              'Difference between "Active" time and cycle time signals micro-pauses, material wait, and ergonomic issues.',
              'Periods when personnel skeleton detection cuts off and station goes "EMPTY" automatically recorded; non-break stoppages and logistics gaps analyzed data-driven.'
            ]
          },
          {
            id: 'masa-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We make manual operations fully transparent. We analyze by the second how many products each person made (Table 1: 44 units), how many seconds per product (Duration: 2.1s), and which minutes stations create bottlenecks. We aim to reach 100% production efficiency occupancy by eliminating invisible lost time.'
            ]
          }
        ]
      },
      {
        id: 'hat-poka-yoke-etiket',
        title: 'Smart Line Production Tracking and Process Verification (Poka-Yoke)',
        subtitle: 'Product counting · labeling process control and operator HMI alert',
        insights: [
          {
            id: 'poka-sayim',
            title: '1. Incoming Product Counting and Entry Tracking',
            paragraphs: [
              'Every semi-finished/product arriving on main conveyor to personnel detected individually by AI and posted to digital production counter.',
              'Blue and yellow polygon ROI areas represent assembly and labeling station where product is processed; process tracking starts when product enters this area.'
            ]
          },
          {
            id: 'poka-proses',
            title: '2. Process Verification and Missing Label (Defect) Detection',
            paragraphs: [
              'Step 1 — Detection: Product arrives at table. Step 2 — Process control: Operator label application movement and whether barcode/label object appears on product scanned instantly.',
              'Step 3 — Exit control: Product moved toward rear exit belt after process; missing label detected within seconds.'
            ]
          },
          {
            id: 'poka-uyari',
            title: '3. Operator Screen Instant Alert — "You Forgot the Label!"',
            paragraphs: [
              'If personnel try to put product on rear line without labeling, HMI panel in front flashes "WARNING: LABEL MISSING / YOU FORGOT THE LABEL!"',
              'Optional station lock: Exit belt motor can be stopped via Ethernet I/O relay; faulty product cannot exit until label applied and AI gives green approval.'
            ]
          },
          {
            id: 'poka-rapor',
            title: '4. Operational Insights and Quality Contribution',
            paragraphs: [
              'Zero faulty shipment: No product with missing assembly or label can proceed to packing stage.',
              'End-of-day reporting: How many products labeled at which station and how many label-forgot alerts triggered logged, digitizing operator focus and error tendencies.'
            ]
          },
          {
            id: 'poka-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We reduce quality defects from human error on production line to zero with AI. While counting products from line we instantly audit personnel label application process. The moment operator tries to send product rearward without label, "You Forgot the Label!" warning on screen instantly prevents faulty product leaving station.'
            ]
          }
        ]
      },
      {
        id: 'tir-yukleme-sayim',
        title: 'Smart Shipping Area — Truck Loading and Forklift Product Counting',
        subtitle: 'ROI zone pallet counting · loading cycle time and dock bottleneck analysis',
        insights: [
          {
            id: 'tir-roi-sayim',
            title: '1. Automatic Pallet/Product Counting with Dynamic ROI Zone',
            paragraphs: [
              'Yellow ROI ZONE defined at truck bed entry is system\'s main control center; verified by product presence and movement analysis whether forklift or pallet jack placed load inside.',
              'Digital counter top-right updates in real time from truck loading start; every approved pallet processed automatically without manual tally.'
            ]
          },
          {
            id: 'tir-darbogaz',
            title: '2. Shipping Line Bottleneck and Lost Time Analysis',
            paragraphs: [
              'Truck loading cycle time: Total time from truck docking at ramp until loading completes measured.',
              'Forklift feed frequency: Wait times between two pallet loads calculated — queue at ramp diagnosed as "Dock Bottleneck", long wait inside truck as "In-Warehouse Logistics Feed Bottleneck".'
            ]
          },
          {
            id: 'tir-poka-yoke',
            title: '3. Process Planning and Poka-Yoke Insights',
            paragraphs: [
              'With WMS integration, forklift operator warned before mistake when pallet with wrong barcode for that truck brought to ramp.',
              'Production/packing speed compared to shipping speed live; forklift operator assignments dynamically optimized to prevent product pile-up at ramp.'
            ]
          },
          {
            id: 'tir-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We crown AI tracking on production floor with truck loading ramps, making logistics processes 100% transparent. Via ROI ZONE we automatically count every product forklift places inside; we analyze by the second how many minutes each truck took to load and how long forklifts waited idle at dock, eliminating shipping bottlenecks.'
            ]
          }
        ]
      },
      {
        id: 'cummins-motor-yabanci-nesne',
        title: 'Cummins Motor Test Station — Smart Foreign Object Prevention',
        subtitle: 'Cloth/cardboard detection · PLC interlocking test lockout and safe start',
        insights: [
          {
            id: 'cummins-alg',
            title: '1. AI-Based Foreign Object Detection',
            paragraphs: [
              'Motor position on test stand placed in main control region (ROI) scanned by cameras.',
              'Model detects anomalies other than motor components; forgotten industrial cloths, cleaning papers, or packaging cardboard captured instantly with high accuracy.'
            ]
          },
          {
            id: 'cummins-plc',
            title: '2. Power Cut via PLC Integration (Interlocking)',
            paragraphs: [
              'On foreign object detection, FOREIGN_MATERIAL_VIOLATION = 1 signal sent to PLC via PROFINET / Modbus TCP; test stand power cut or start relay locked.',
              'HMI panel flashes "WARNING: CLOTH/CARDBOARD LEFT ON MOTOR - PLEASE CLEAN" — operator cannot start test regardless of action.'
            ]
          },
          {
            id: 'cummins-temizlik',
            title: '3. Safe Start Logic',
            paragraphs: [
              'System does not remove block until operator physically removes foreign object and cleans area.',
              'When object removed, AI confirms motor surface clean and sends TEST_PERMIT = 1 to PLC enabling safe test start.'
            ]
          },
          {
            id: 'cummins-kpi',
            title: '4. Process and Quality Improvement Contribution',
            paragraphs: [
              'Flammable materials that could contact high temperature or moving parts eliminated 100% before test — zero fire and mechanical damage risk.',
              'Which shift or motor type forgets cloth/cardboard more logged to revise prep processes on assembly line.'
            ]
          },
          {
            id: 'cummins-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'On Cummins motor test line we reduce fire and damage risks from human error to zero with AI. Before test we scan motor top, instantly diagnosing forgotten cloth, paper, or cardboard; while foreign material remains we cut test power via PLC integration, hardware-blocking test until area fully clean.'
            ]
          }
        ]
      },
      {
        id: 'isg-kkd-uyum',
        title: 'PPE Compliance Inspection — Safe Passage',
        subtitle: 'Hard hat, mask, and goggles detection · green approval scenarios',
        insights: [
          {
            id: 'isg-guvenli-gecis',
            title: '1. Safe Passage and Full PPE Compliance',
            paragraphs: [
              'Hard hat and mask/goggles detection: Personnel wearing hard hat correctly detected instantly by AI.',
              'System response: Passage allowed for personnel with full required equipment, green approval mark on screen, logged as "Compliant Passage" in OHS logs.'
            ]
          },
          {
            id: 'isg-ihlal-alarm',
            title: '2. Violation Detection and Instant Alarm',
            paragraphs: [
              'Passage without hard hat/incomplete equipment: Personnel entering site without hard hat or removing hard hat in corridor captured.',
              'System response: Red exclamation (violation/danger) icon triggered on screen the moment hard hat missing detected. Red box opened under person labeling violation type.'
            ]
          }
        ]
      },
      {
        id: 'isg-kkd-entegrasyon',
        title: 'PPE Inspection — Turnstile Integration',
        subtitle: 'Instant notification, turnstile lock, and retrospective OHS reporting',
        insights: [
          {
            id: 'isg-entegrasyon',
            title: '3. Integration and Enforcement Scenarios',
            paragraphs: [
              'Instant notification: On violation, push notification with personnel photo and location sent to shift supervisor, OHS specialist, or central security panel.',
              'Turnstile and door lock integration: Turnstile physically does not open until personnel wear hard hat or vest — incomplete entries 100% blocked.',
              'Retrospective reporting: How many OHS violations each department or person made monthly digitally reported for training planning data.'
            ]
          },
          {
            id: 'isg-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We move OHS inspections from paper forms to instant automation. Our cameras check hard hat, vest, and other PPE of personnel entering site within milliseconds; on violation we lock turnstiles and send instant visual notification to OHS specialist, preventing workplace accidents before they happen.'
            ]
          }
        ]
      },
      {
        id: 'isg-forklift-mesafe',
        title: 'Forklift Smart Distance Tracking and Speed Limiting',
        subtitle: 'Blind spot analysis · turtle mode ECU integration and near-miss reporting',
        insights: [
          {
            id: 'forklift-zonlar',
            title: '1. Dynamic Safety Zones',
            paragraphs: [
              'Green area (safe): Pedestrian at safe distance from forklift.',
              'Yellow area (near threat): Critical boundary where pedestrian begins approaching vehicle.',
              'Red violation area (danger zone): Critical region where person or obstacle enters forklift emergency stop distance / blind spot — marked with red transparent box.'
            ]
          },
          {
            id: 'forklift-kaplumbaga',
            title: '2. Automatic Turtle Mode (Speed Limiter)',
            paragraphs: [
              'CAN-Bus / ECU integration: When human detected in red zone, signal sent directly to forklift ECU or speed valves.',
              'Speed limiting: Even if operator presses accelerator, vehicle automatically switched to turtle mode (e.g. max 5 km/h) — gives pedestrian time to escape, minimizes collision severity.'
            ]
          },
          {
            id: 'forklift-uyari',
            title: '3. Pop-Up and Audible Alert',
            paragraphs: [
              'In-cabin live screen: Instant pop-up on operator screen; human in blind spot shown with red warning icons.',
              'Acoustic siren/buzzer: In addition to visual alert, in-cabin and external sirens triggered to warn operator and pedestrian loudly.'
            ]
          },
          {
            id: 'forklift-rapor',
            title: '4. OHS Reporting and Route Optimization',
            paragraphs: [
              'Near-miss logs: All turtle mode triggers narrowly avoided reported to OHS panel with location and camera recording.',
              'Density map: Corridors with most forklift-pedestrian encounters identified to redesign pedestrian paths.'
            ]
          },
          {
            id: 'forklift-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'We do not leave forklift accidents to operator attention; we manage the forklift with AI. When pedestrian enters blind spot, we drop audible and visual pop-up in cabin and mechanically cut speed by switching to automatic turtle mode. We hardware-prevent accidents before they happen.'
            ]
          }
        ]
      },
      {
        id: 'isg-makine-uzuv-koruma',
        title: 'Moving Machine Lines — Smart Limb Protection and Hardware Emergency Stop',
        subtitle: 'Pose Estimation skeleton tracking · mechanical power cut via Ethernet I/O relay',
        insights: [
          {
            id: 'makine-pose',
            title: '1. Pose Estimation (Skeleton Tracking) and Risk Analysis',
            paragraphs: [
              'Personnel in camera view mapped simultaneously by AI model with critical joint points such as hand, wrist, elbow, and shoulder. Colored skeleton lines show model tracking with millisecond precision.',
              'Machine\'s most dangerous rotating or pinch zone (e.g. winder separation area) defined to system as virtual protection shield with red transparent ROI box.'
            ]
          },
          {
            id: 'makine-relay',
            title: '2. Hardware Intervention — Ethernet I/O Relay Integration',
            paragraphs: [
              'When personnel hand or wrist joint violates red risk zone (MACHINE VIOLATION STATE), AI detects instantly.',
              'On detection, digital signal (Modbus TCP/IP etc.) sent to Ethernet I/O relay module in machine panel over local network; relay circuit opens, main power/contactor cut, machine enters Emergency Stop mode.'
            ]
          },
          {
            id: 'makine-panel',
            title: '3. Management Panel and OHS Logging',
            paragraphs: [
              'Red "MACHINE VIOLATION STATE" alert drops to digital screen at factory control center on violation; visual evidence presented instantly.',
              'All violations resulting in hardware stop or narrowly avoided (near-miss) saved to OHS database with personnel skeleton image and timestamp.'
            ]
          },
          {
            id: 'makine-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'To prevent limb and life loss in heavy industry we make AI the machine\'s fuse. Our cameras track personnel hand and arm movements millimetrically with Pose Estimation; the moment hand enters dangerous red zone we cut machine power within milliseconds via Ethernet I/O relay module, hardware-stopping production.'
            ]
          }
        ]
      },
      {
        id: 'tekirdag-kagit-yasak-alan',
        title: 'Tekirdağ Paper Factory — Restricted Area and Hardware Power Cut',
        subtitle: 'Dangerous zone violation detection · instant machine stop via Ethernet I/O relay',
        insights: [
          {
            id: 'tekirdag-roi',
            title: '1. Restricted Area (ROI) Definition and Violation Detection',
            paragraphs: [
              'Machine\'s dangerous rotating or pinch zone defined to system as red transparent protection area (ROI).',
              'When person enters defined area — even tip of foot crossing risk boundary — AI detects violation instantly and generates "PROHIBITED MOVEMENT" warning.'
            ]
          },
          {
            id: 'tekirdag-relay',
            title: '2. Hardware Power Cut via Ethernet I/O Relay',
            paragraphs: [
              'On violation, digital signal sent to Ethernet I/O relay module in machine panel over local network.',
              'Relay circuit opens within milliseconds, main power/contactor cut; machine hardware-stopped before operator caught in mechanism.'
            ]
          },
          {
            id: 'tekirdag-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At Tekirdağ paper factory we protect dangerous machine zones with AI cameras. Even if personnel enter restricted area by a toe, we instantly cut machine power via Ethernet I/O relay module, mechanically preventing workplace accident.'
            ]
          }
        ]
      },
      {
        id: 'eae-test-plc-isg',
        title: 'EAE Test Environment — OHS Safety and PLC Integration',
        subtitle: 'Door status analysis · in-cabin Pose tracking and hardware test lockout',
        insights: [
          {
            id: 'eae-kapi',
            title: '1. Door Status Analysis (Process Entry Lock)',
            paragraphs: [
              'Test room door monitored instantly by cameras; open/closed status verified every second with object detection models.',
              'First mandatory condition (Condition 1) for test start is AI confirmation that door is fully CLOSED.'
            ]
          },
          {
            id: 'eae-pose',
            title: '2. In-Cabin Human Presence Tracking (Pose & Zone Violation Detection)',
            paragraphs: [
              'Test room interior enclosed with red safety polygon (ROI Zone); door closing alone is not enough to start test.',
              'Personnel scanned to smallest hand/arm movement with skeleton analysis; presence detected with 100% accuracy even back-turned or in low light.'
            ]
          },
          {
            id: 'eae-plc',
            title: '3. PLC Integration and Test Lockout (Interlocking)',
            paragraphs: [
              'Even if door closed, when human detected inside, CABIN_OCCUPIED = 1 signal sent to PLC; test contactors/power relays locked — test cannot start even if Start button pressed.',
              'HMI screen shows "WARNING: PERSONNEL INSIDE - TEST CANNOT START!" Lock removed when personnel exit and area reported EMPTY (TEST_PERMIT = 1).'
            ]
          },
          {
            id: 'eae-rapor',
            title: '4. OHS Reporting and Digital Scorecard',
            paragraphs: [
              'How many test start attempts while person inside recorded to OHS database with date, time, and visual evidence.',
              'Near-miss reports automatically fed; zero accident target in high-voltage/test rooms hardware-supported.'
            ]
          },
          {
            id: 'eae-ozet',
            title: 'Summary Message for Customer',
            paragraphs: [
              'At EAE test environment we manage workplace safety with perfect cooperation of AI and PLC. After confirming test door closed we instantly audit personnel presence inside cabin with Pose Estimation; while human inside we hardware-prevent test start via PLC integration.'
            ]
          }
        ]
      }
    ]
  };

export const enContent = buildContent(overlay);
