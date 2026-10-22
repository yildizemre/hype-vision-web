import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const enStrings = JSON.parse(readFileSync(join(root, 'scripts/en-strings.json'), 'utf8'));
const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const match = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const overlay = Function(`"use strict"; return (${match[1]});`)();

const phraseMap = new Map([
  ['Summary Message for Customer', 'Итоговое сообщение для клиента'],
  ['OHS', 'ОТ'],
  ['PPE', 'СИЗ'],
  ['FIRE', 'ПОЖАР'],
  ['EFFICIENCY', 'ЭФФЕКТИВНОСТЬ'],
  ['CUSTOM', 'CUSTOM'],
  ['MES', 'MES'],
  ['Occupational health and safety demos', 'Демонстрации охраны труда'],
  ['Early fire detection and disaster management', 'Раннее обнаружение пожара и управление ЧС'],
  ['Production and operations demos', 'Демонстрации производства и операций'],
  ['Custom project demos', 'Демонстрации индивидуальных проектов'],
  [
    'PPE compliance, restricted zone violations, and digital evidence archive — real field recordings and technical insights.',
    'Соответствие СИЗ, нарушения опасных зон и цифровой архив доказательств — реальные полевые записи и технические выводы.',
  ],
  [
    '10×10 pixel flame detection, fire panel integration, multi-channel alarms, and fire department routing — before classic sensors.',
    'Обнаружение пламени 10×10 пикселей, интеграция с пожарной панелью, многоканальные оповещения и маршрутизация пожарной службы — раньше классических датчиков.',
  ],
  [
    'OEE, line downtime, cycle time, personnel and product tracking — field proof with measurable efficiency metrics.',
    'OEE, простои линии, время цикла, учёт персонала и продукции — полевые доказательства с измеримыми метриками эффективности.',
  ],
  [
    'Customer-specific pilot deployments, integration scenarios, and industry-tailored computer vision solutions.',
    'Пилотные внедрения под клиента, сценарии интеграции и отраслевые решения компьютерного зрения.',
  ],
  ['MES Solution', 'Решение MES'],
  [
    'Production execution, OEE, line efficiency, and operational visibility',
    'Исполнение производства, OEE, эффективность линии и операционная прозрачность',
  ],
  ['OHS Inspection', 'Проверка ОТ'],
  ['PPE, restricted zones, fire, and digital evidence archive', 'СИЗ, опасные зоны, пожар и цифровой архив доказательств'],
  ['Introduction', 'Введение'],
  ['Problem', 'Проблема'],
  ['Solution architecture', 'Архитектура решения'],
  ['Modules', 'Модули'],
  ['Live dashboard', 'Живая панель'],
  ['Integration', 'Интеграция'],
  ['Pilot process', 'Пилотный процесс'],
  ['Conclusion', 'Заключение'],
  ['Manual tracking and delayed data', 'Ручной учёт и задержка данных'],
  ['Edge + existing cameras', 'Edge + существующие камеры'],
  ['OEE, idle, quality, alarm', 'OEE, простой, качество, тревога'],
  ['Shift-based KPI', 'KPI по сменам'],
  ['ERP / MES API', 'ERP / MES API'],
  ['Discovery → deployment → report', 'Обследование → внедрение → отчёт'],
  ['Measurable efficiency gain', 'Измеримый прирост эффективности'],
  ['OHS solution presentation', 'Презентация решений ОТ'],
]);

function translate(text) {
  if (phraseMap.has(text)) return phraseMap.get(text);

  let result = text;
  const ordered = [...phraseMap.entries()].sort((a, b) => b[0].length - a[0].length);
  for (const [en, ru] of ordered) {
    if (en.length <= 3) continue;
    result = result.split(en).join(ru);
  }

  result = result
    .replace(/\bVehicle Detection and Dock Tracking\b/g, 'Обнаружение транспорта и контроль рампы')
    .replace(/\bVehicle arrival, wait time, personnel and product counting at the logistics dock\b/g, 'Прибытие транспорта, время ожидания, учёт персонала и продукции на логистической рампе')
    .replace(/\bTextile Sewing Line — Personnel Behavior and Presence Tracking\b/g, 'Швейная линия — поведение персонала и контроль присутствия')
    .replace(/\bIroning and Packing Stations — Counting and Efficiency Analysis\b/g, 'Станции глажки и упаковки — подсчёт и анализ эффективности')
    .replace(/\bDigital Textile Line — Sewing Times and KPI Performance Analysis\b/g, 'Цифровая текстильная линия — время шитья и анализ KPI')
    .replace(/\bTurnstile Integration and Unauthorized Pass Prevention\b/g, 'Интеграция турникета и предотвращение несанкционированного прохода')
    .replace(/\bFuel Station Video Analytics & Market Routing\b/g, 'Видеоаналитика АЗС и направление в магазин')
    .replace(/\bOkey Tile Quality Control and Automatic Sorting\b/g, 'Контроль качества плиток Okey и автоматическая сортировка')
    .replace(/\bIFM Expo Center — Entry Turnstiles\b/g, 'Выставочный центр IFM — входные турникеты')
    .replace(/\bIFM Expo Center — Hall 1 Density Analysis\b/g, 'Выставочный центр IFM — анализ плотности зала 1')
    .replace(/\bIFM Expo Center — Prestige Area Analysis\b/g, 'Выставочный центр IFM — анализ зоны Prestige')
    .replace(/\bMigros Checkout — No Customer & Fraud Detection\b/g, 'Касса Migros — отсутствие покупателя и обнаружение мошенничества')
    .replace(/\bMigros Checkout — SAP Fraud Video Evidence\b/g, 'Касса Migros — видеодоказательство мошенничества для SAP')
    .replace(/\bEarly-Stage Fire Detection and Disaster Management\b/g, 'Раннее обнаружение пожара и управление ЧС')
    .replace(/\bGratis Factory — Open-Area Fire Detection\b/g, 'Фабрика Gratis — обнаружение пожара на открытой площадке')
    .replace(/\bBursa Furniture Factory — Open-Area Fire\b/g, 'Мебельная фабрика Bursa — пожар на открытой площадке')
    .replace(/\bMetro Istanbul Warehouses — Open-Area Fire\b/g, 'Склады Metro Istanbul — пожар на открытой площадке')
    .replace(/\bInofa Technology — Early Fire Detection\b/g, 'Inofa Technology — раннее обнаружение пожара')
    .replace(/\bEarly Smoke Detection — VMS Pop-Up and Audible Alert\b/g, 'Раннее обнаружение дыма — pop-up VMS и звуковое оповещение')
    .replace(/\bPallet Production & Repair Line Digital Twin\b/g, 'Цифровой двойник линии производства и ремонта паллет')
    .replace(/\bMetro Market — Shopping Cart Tracking & VMS\b/g, 'Metro Market — отслеживание тележек и VMS')
    .replace(/\bSleepy Packing Line — Print Verification\b/g, 'Линия упаковки Sleepy — проверка печати')
    .replace(/\bAnkara Şeker — Conveyor Sack Counting & OEE\b/g, 'Ankara Şeker — подсчёт мешков на конвейере и OEE')
    .replace(/\bBİM Distribution — Unauthorized Passenger on Vehicle Detection\b/g, 'Распределительный центр BİM — обнаружение пассажира на технике')
    .replace(/\bDonas — Loss Prevention and Unauthorized Order Detection\b/g, 'Donas — предотвращение потерь и обнаружение несанкционированных заказов')
    .replace(/\bFreight Elevators — Smart Protection and Automatic Hardware Lockout\b/g, 'Грузовые лифты — умная защита и аппаратная блокировка')
    .replace(/\bElectric Motor Production — Smart Coil Winding and Packing Line\b/g, 'Производство электродвигателей — умная намотка и упаковка')
    .replace(/\bConveyor Assembly Line — Smart Bottleneck and Efficiency Analysis\b/g, 'Сборочный конвейер — анализ узких мест и эффективности')
    .replace(/\bManual Assembly Stations — Pose-Based Efficiency Analysis\b/g, 'Ручные сборочные станции — анализ эффективности на основе Pose')
    .replace(/\bSmart Line Production Tracking and Process Verification \(Poka-Yoke\)\b/g, 'Умный учёт производства и проверка процесса (Poka-Yoke)')
    .replace(/\bSmart Shipping Area — Truck Loading and Forklift Product Counting\b/g, 'Умная зона отгрузки — погрузка фуры и подсчёт продукции')
    .replace(/\bCummins Motor Test Station — Smart Foreign Object Prevention\b/g, 'Испытательная станция Cummins — предотвращение посторонних предметов')
    .replace(/\bPPE Compliance Inspection — Safe Passage\b/g, 'Проверка СИЗ — безопасный проход')
    .replace(/\bPPE Inspection — Turnstile Integration\b/g, 'Проверка СИЗ — интеграция с турникетом')
    .replace(/\bForklift Smart Distance Tracking and Speed Limiting\b/g, 'Умное дистанционное отслеживание погрузчика и ограничение скорости')
    .replace(/\bMoving Machine Lines — Smart Limb Protection and Hardware Emergency Stop\b/g, 'Движущиеся линии — защита конечностей и аппаратный аварийный стоп')
    .replace(/\bTekirdağ Paper Factory — Restricted Area and Hardware Power Cut\b/g, 'Бумажная фабрика Tekirdağ — запретная зона и отключение питания')
    .replace(/\bEAE Test Environment — OHS Safety and PLC Integration\b/g, 'Испытательная среда EAE — безопасность ОТ и интеграция ПЛК');

  return result;
}

const map = {};
for (const s of enStrings) {
  map[s] = translate(s);
}

writeFileSync(join(root, 'scripts/ru-translations.json'), JSON.stringify(map, null, 2), 'utf8');

function translateNode(node, key) {
  if (typeof node === 'string') {
    if (key === 'id') return node;
    return map[node] ?? translate(node);
  }
  if (Array.isArray(node)) return node.map((item) => translateNode(item));
  if (node && typeof node === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = translateNode(v, k);
    return out;
  }
  return node;
}

const ruOverlay = translateNode(overlay);
ruOverlay.videoCategoryMeta.isg.label = 'ОТ';
ruOverlay.videoCategoryMeta.isg.title = 'Демонстрации охраны труда';
ruOverlay.decks.find((d) => d.id === 'isg').tag = 'ОТ';
ruOverlay.decks.find((d) => d.id === 'isg').title = 'Проверка ОТ';

writeFileSync(join(root, 'scripts/ru-overlay-preview.json'), JSON.stringify(ruOverlay, null, 2), 'utf8');
console.log('translations', Object.keys(map).length);
