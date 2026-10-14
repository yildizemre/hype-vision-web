// Lead sunucusunda çalışır: specs.json -> gen_out.json (Türkçe sayfa içerikleri)
const fs = require('fs'); const ai = require('/opt/emre-lead/app/lib/ai');
const specs = JSON.parse(fs.readFileSync('/tmp/specs.json', 'utf8'));
const OUT = '/tmp/gen_out.json';
const out = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const ABOUT = `Hype Vision (hypevisionlab.com, Bilişim Vadisi Gebze, 2020'den beri) mevcut IP/CCTV kameraları RTSP/ONVIF ile marka bağımsız bağlayıp yapay zekâ ile analiz eden endüstriyel görüntü işleme platformudur. Kendi modeli "Hype-Model" ailesidir (nesne tespiti, sınıflandırma, poz/el takibi, OCR). On-premise (tesis içi, kapalı devre) çalışabilir, çoğu modül kimliksiz/KVKK uyumludur. Alarm: panel, WhatsApp/SMS, VMS popup, PLC/röle, ERP/MES, REST API. Gerektiğinde kalite kontrolde endüstriyel kamera + aydınlatma kullanır. Tipik başlangıç 2–4 haftalık pilot.`;
const RULES = `KURALLAR: Türkçe, uzman ama sade dil, 900-1300 kelime. Uydurma istatistik, yüzde, müşteri adı, sertifika, ödül YAZMA. Kamera/VMS üreticileriyle resmî ortaklık ima ETME ("uyumlu çalışır/bağlanabilir" de). Rakip veya üretici ürünleri hakkında doğrulanamayacak olumsuz iddia yazma; yerleşik analitiklerin genel olarak kuralları önceden tanımlı ve kamera başına sınırlı olabileceğini nesnel anlat. "YOLO" kelimesini KULLANMA; kendi modelimize "Hype-Model" de. Anahtar ifadeleri doğal biçimde başlık, paragraf ve SSS içinde kullan; anahtar kelime doldurma yapma. Ziyaretçinin gerçekten işine yarayacak somut bilgi ver: nasıl çalışır, kamera/ışık gereksinimi, uygulanabilirlik sınırları, adım adım kurulum.`;
const SHAPE = `ÇIKTI yalnızca JSON: {"title": "H1 başlık (≤70 karakter)", "desc": "meta açıklama (140-155 karakter)", "intro": ["2-3 cümlelik giriş paragrafı"], "short": "Kısa cevap: 2-3 cümlelik doğrudan yanıt", "sections": [{"h": "H2 başlık", "p": ["paragraf", "..."], "li": ["madde", "..."]}], "faq": [{"q": "soru", "a": "cevap"}]}. 5-7 bölüm, 4-6 SSS.`;
const TYPE = {
  cluster: s => `Konu: "${s.title_hint}" (sektör: ${s.sector}). Bu sayfa şu aramaların hepsine cevap vermeli: ${s.kws.join(' · ')}. Bölümler: sorun ve neden önemli; geleneksel kontrol yöntemleri ve sınırları; kamera/yapay zekâ ile nasıl tespit edilir; kamera, lens, ışık gereksinimleri; kurulum adımları ve entegrasyon; uygulanabilirlik sınırları; Hype Vision ile pilot.`,
  integration: s => `Konu: ${s.title_hint}. Hedef aramalar: ${s.kws.join(' · ')}. Bölümler: mevcut cihazı değiştirmeden mümkün mü; bağlantı yöntemi (RTSP yolu, ONVIF, NVR kanal akışı, alt akış seçimi) — genel ve doğru teknik bilgi ver, model bazlı kesin iddiadan kaçın; mimari (kamera → NVR/VMS → edge sunucu → panel/alarm); yapılabilecek analizler (KKD, yasaklı alan, forklift, sayım, kalite); dikkat edilecekler (kullanıcı yetkisi, bant genişliği, H.264/H.265, firmware); uygunluk değerlendirmesi adımları.`,
  topic: s => `Konu: ${s.title_hint}. Hedef aramalar: ${s.kws.join(' · ')}. Bir ticari çözüm sayfası yaz: sorun, nasıl çalışır, örnek alarm senaryosu, kamera gereksinimi, entegrasyon, ölçülen çıktılar, pilot.`,
  compare: s => `Konu: ${s.title_hint}. Hedef aramalar: ${s.kws.join(' · ')}. Tarafsız karşılaştırma yaz; bir karşılaştırma tablosu için sections içinde "rows" alanı ekle: [["Kriter","Kamera içi/yerleşik","Merkezi / harici AI"],[...]] (6-8 satır). Hangi durumda hangisinin uygun olduğunu net söyle; ikisinin birlikte kullanılabileceğini belirt.`,
  trouble: s => `Konu: ${s.title_hint}. Hedef aramalar: ${s.kws.join(' · ')}. Pratik sorun giderme rehberi yaz: belirtiler, olası nedenler, adım adım kontrol listesi (li olarak), komut/araç önerileri (ör. ffprobe, VLC, ONVIF Device Manager — genel kullanım), yapay zekâ analizi için önerilen ayarlar. Sonda kurumsal entegrasyonda Hype Vision'ın bu ayarları keşifte yaptığını kısaca belirt.`,
  glossary: s => `CCTV ve yapay zekâ video analitiği sözlüğü yaz. 24-30 terim, her terim bir section: {"h": "Terim", "p": ["2-4 cümle net tanım + pratik not"]}. Şunları mutlaka içer: RTSP, ONVIF (Profile S/T/M), RTSP ile ONVIF farkı, NVR, VMS, H.264/H.265, ana akış/alt akış, FPS ve yapay zekâ için gereken FPS, çözünürlük ve piksel yoğunluğu, ROI, nesne tespiti, sınıflandırma, poz tahmini, OCR, VLM (görsel dil modeli), Hype-Model, edge AI, merkezi GPU sunucu, 100 kameraya kaç GPU (değişkenlere bağlı olduğunu açıkla, kesin sayı verme), çıkarım (inference), gecikme (latency), false positive/false negative, kalibrasyon, davranış analizi nasıl çalışır, KVKK ve kimliksiz analiz, on-premise. intro'da sözlüğü tanıt.`,
};
async function one(s) {
  if (out[s.path]) return;
  const prompt = `${ABOUT}\n\n${TYPE[s.type](s)}\n\n${RULES}\n\n${SHAPE}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await ai.ask(prompt, { json: true, kind: 'site-seo' });
      const j = typeof r === 'string' ? JSON.parse(r) : r;
      if (j && j.title && Array.isArray(j.sections) && j.sections.length >= 4) { j.path = s.path; j.type = s.type; j.sector = s.sector || ''; j.kws = s.kws; out[s.path] = j; console.log('ok', s.path); return; }
    } catch (e) { console.log('retry', s.path, String(e.message).slice(0, 90)); }
  }
  console.log('FAIL', s.path);
}
(async () => {
  const q = [...specs]; const N = 4;
  await Promise.all(Array.from({ length: N }, async () => { while (q.length) { await one(q.shift()); fs.writeFileSync(OUT, JSON.stringify(out)); } }));
  fs.writeFileSync(OUT, JSON.stringify(out)); console.log('done', Object.keys(out).length, '/', specs.length);
})();
