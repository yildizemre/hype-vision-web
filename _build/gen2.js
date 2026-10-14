// Lead sunucusunda çalışır: /tmp/specs2.json -> /tmp/gen2_out.json (bölge, mevzuat sayfaları + çözüm SSS'leri)
const fs = require('fs'); const ai = require('/opt/emre-lead/app/lib/ai');
const specs = JSON.parse(fs.readFileSync('/tmp/specs2.json', 'utf8'));
const OUT = '/tmp/gen2_out.json';
const out = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const ABOUT = `Hype Vision (hypevisionlab.com, Bilişim Vadisi Gebze/Kocaeli, 2020'den beri) mevcut IP/CCTV kameraları RTSP/ONVIF ile marka bağımsız bağlayıp yapay zekâ ile analiz eden endüstriyel görüntü işleme platformudur. Kendi modeli "Hype-Model" ailesidir. On-premise (tesis içi) çalışabilir, çoğu modül kimliksiz/KVKK uyumludur. Modüller: KKD/baret/yelek tespiti, yasaklı alan, forklift-yaya yakınlığı, düşme, yangın/duman, ürün sayımı, kalite kontrol/yüzey kusuru, OEE ve verimlilik, acil çıkış/yangın kapısı, 5S. Alarm: panel, WhatsApp/SMS, VMS popup, PLC/röle, ERP/MES, REST API. Tipik başlangıç 2–4 haftalık pilot.`;
const RULES = `KURALLAR: Türkçe, uzman ama sade dil. Uydurma istatistik, yüzde, firma sayısı, müşteri adı, referans, sertifika, ödül YAZMA. Hype Vision'ın o bölgede müşterisi/ofisi/projesi olduğunu İMA ETME. Kamera/VMS üreticileriyle ortaklık ima etme. "YOLO" kelimesini KULLANMA; modele "Hype-Model" de. Anahtar ifadeleri doğal kullan, doldurma yapma. Ziyaretçiye somut, doğru ve işine yarar bilgi ver.`;
const PAGE = `ÇIKTI yalnızca JSON: {"title": "H1 başlık (≤70 karakter)", "desc": "meta açıklama (140-155 karakter)", "intro": ["2-3 cümlelik giriş"], "short": "Kısa cevap: 2-3 cümle", "sections": [{"h": "H2", "p": ["paragraf"], "li": ["madde"]}], "faq": [{"q": "soru", "a": "cevap"}]}. 5-7 bölüm, 4-6 SSS, toplam 900-1300 kelime.`;
const TYPE = {
  city: s => `Konu: ${s.title_hint} bölgesindeki fabrikalar için yapay zekâ destekli kamera / görüntü işleme (İSG, kalite kontrol, verimlilik). Bölgede öne çıkan sanayi kolları (genel bilgi): ${s.industry}. Hedef aramalar: ${s.kws.join(' · ')}. Bölümler: bölge sanayisinin yapısı ve tipik riskler/kalite sorunları (sadece genel, doğrulanabilir bilgi; rakam verme); bu sanayi kollarına özel kamera ile çözülebilecek 4-6 somut senaryo; mevcut kameralarla kurulum (keşif, RTSP bağlantısı, pilot); yerinde keşif: ekip Gebze Bilişim Vadisi'nden çalışır, Marmara'ya yakın bölgelerde yerinde, uzak bölgelerde uzaktan bağlantı + gerekirse saha ziyareti (yakınlığa göre doğru ifade et); KVKK ve on-premise; ücretsiz ön analiz ile nasıl başlanır. Başlıkta bölge adı geçsin. Metin bölgeye özgü olsun, başka şehre kopyalanabilecek genel metin yazma.`,
  law: s => `Konu: ${s.title_hint}. Hedef aramalar: ${s.kws.join(' · ')}. Bu bir bilgilendirme/mevzuat rehberi: işverenin ve İSG profesyonelinin yükümlülüklerini genel hatlarıyla, doğru ve temkinli anlat. Kesin emin olmadığın madde numarası, ceza tutarı veya tarih YAZMA; kanun/yönetmelik adını genel olarak an. Bölümler: mevzuat ne diyor (genel çerçeve); sahada pratikte nasıl uygulanır; kamera ve yapay zekâ bu süreçte nasıl destek olur (kanıt kaydı, sürekli izleme, raporlama) ve nerede yetmez (insan denetiminin yerini almaz); KVKK açısından dikkat edilecekler (aydınlatma, amaçla sınırlılık, saklama süresi, kimliksiz analiz); adım adım uygulama önerisi (li); ilgili raporlar ve kayıtlar. Bir bölümün sonunda kısa not: "Bu içerik genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez."`,
};
async function one(s) {
  if (out[s.path]) return;
  let prompt;
  if (s.type === 'faq') prompt = `${ABOUT}\n\nSayfa: "${s.title_hint}" — ${s.desc}\nBu sayfa için Google'da gerçekten aranan türden ${s.need} yeni soru-cevap yaz (Kullanıcılar şunları da sordu tarzı: fiyat/maliyet, kurulum süresi, mevcut kamera uyumu, doğruluk, KVKK, gece/düşük ışık, kaç kamera vb. konudan uygun olanlar). Var olan sorular (tekrarlama): ${JSON.stringify(s.have)}. Cevaplar 2-4 cümle, net; kesin fiyat ve uydurma rakam verme.\n\n${RULES}\n\nÇIKTI yalnızca JSON: {"faq": [{"q": "...", "a": "..."}]}`;
  else prompt = `${ABOUT}\n\n${TYPE[s.type](s)}\n\n${RULES}\n\n${PAGE}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await ai.ask(prompt, { json: true, kind: 'site-seo' });
      const j = typeof r === 'string' ? JSON.parse(r) : r;
      const ok = s.type === 'faq' ? j && Array.isArray(j.faq) && j.faq.length : j && j.title && Array.isArray(j.sections) && j.sections.length >= 4;
      if (ok) { j.path = s.path; j.type = s.type; j.kws = s.kws; out[s.path] = j; console.log('ok', s.path); return; }
    } catch (e) { console.log('retry', s.path, String(e.message).slice(0, 90)); }
  }
  console.log('FAIL', s.path);
}
(async () => {
  const q = [...specs]; const N = 4;
  await Promise.all(Array.from({ length: N }, async () => { while (q.length) { await one(q.shift()); fs.writeFileSync(OUT, JSON.stringify(out)); } }));
  fs.writeFileSync(OUT, JSON.stringify(out)); console.log('done', Object.keys(out).length, '/', specs.length);
})();
