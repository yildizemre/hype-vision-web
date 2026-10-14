"""Bölge (şehir/OSB), mevzuat ve çözüm-sayfası SSS üretim listesi -> specs2.json (lead sunucusunda gen2.js ile üretilir)."""
import json, os
S = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(os.path.join(S, "..", "content.json"), encoding="utf-8"))
specs = []
# (slug, bölge adı, bölgenin baskın sanayi kolları — modele yön vermek için, genel bilgi)
CITY = [
 ("gebze-osb", "Gebze ve Gebze OSB'ler (Kocaeli)", "otomotiv yan sanayi, kimya, plastik, metal, makine, lojistik", ["gebze osb yapay zeka kamera", "gebze görüntü işleme firması", "gebze iş güvenliği kamera sistemi"]),
 ("dilovasi-osb", "Dilovası OSB (Kocaeli)", "kimya, metal, boya, ağır sanayi", ["dilovası osb iş güvenliği kamera", "dilovası yapay zeka kamera"]),
 ("kocaeli", "Kocaeli (İzmit, Kartepe, Körfez, TOSB)", "otomotiv, petrokimya, kimya, liman ve lojistik, metal", ["kocaeli yapay zeka kamera", "kocaeli görüntü işleme", "izmit iş güvenliği kamera sistemi"]),
 ("istanbul", "İstanbul (İkitelli, Tuzla, Hadımköy, Esenyurt sanayi bölgeleri)", "tekstil ve konfeksiyon, gıda, ambalaj, lojistik depo, metal işleme", ["istanbul yapay zeka kamera sistemi", "istanbul görüntü işleme firması", "tuzla osb kamera iş güvenliği"]),
 ("tuzla-osb", "Tuzla OSB ve Tuzla tersaneler bölgesi (İstanbul)", "kimya, deri, metal, tersane ve gemi inşa", ["tuzla osb yapay zeka", "tersane iş güvenliği kamera"]),
 ("bursa", "Bursa (BOSB, Nilüfer OSB, Demirtaş OSB)", "otomotiv ve yan sanayi, tekstil, makine, beyaz eşya", ["bursa yapay zeka kamera", "bursa osb görüntü işleme", "bursa otomotiv kalite kontrol kamera"]),
 ("sakarya", "Sakarya (1. ve 2. OSB, Hendek OSB)", "otomotiv, raylı sistemler, metal, savunma yan sanayi", ["sakarya osb yapay zeka kamera", "sakarya iş güvenliği kamera"]),
 ("tekirdag-cerkezkoy", "Tekirdağ — Çerkezköy ve Çorlu OSB", "tekstil, gıda, kimya, cam, ambalaj", ["çerkezköy osb yapay zeka", "çorlu tekstil kamera kalite kontrol", "tekirdağ iş güvenliği kamera"]),
 ("manisa-osb", "Manisa OSB", "beyaz eşya ve elektronik, metal, gıda", ["manisa osb yapay zeka kamera", "manisa kalite kontrol görüntü işleme"]),
 ("izmir", "İzmir (Atatürk OSB, Kemalpaşa OSB, Aliağa)", "gıda, demir-çelik, kimya, lojistik, tekstil", ["izmir yapay zeka kamera sistemi", "kemalpaşa osb görüntü işleme", "izmir iş güvenliği kamera"]),
 ("ankara", "Ankara (OSTİM, İvedik, Sincan OSB)", "savunma sanayi, makine imalatı, metal işleme, iş makineleri", ["ostim yapay zeka kamera", "ankara görüntü işleme firması", "ivedik osb iş güvenliği kamera"]),
 ("eskisehir-osb", "Eskişehir OSB", "havacılık ve raylı sistem yan sanayi, beyaz eşya, seramik, makine", ["eskişehir osb yapay zeka kamera", "eskişehir görüntü işleme"]),
 ("kayseri-osb", "Kayseri OSB", "mobilya ve yatak, metal, tekstil, gıda", ["kayseri osb yapay zeka kamera", "kayseri mobilya kalite kontrol kamera"]),
 ("konya-osb", "Konya OSB", "tarım makineleri, otomotiv yan sanayi, döküm, gıda", ["konya osb yapay zeka kamera", "konya döküm iş güvenliği kamera"]),
 ("gaziantep-osb", "Gaziantep OSB", "halı ve tekstil, gıda, plastik ve ambalaj", ["gaziantep osb yapay zeka kamera", "gaziantep halı kalite kontrol kamera"]),
 ("denizli-osb", "Denizli OSB", "tekstil ve havlu, kablo ve metal, mermer", ["denizli osb yapay zeka", "denizli tekstil kamera kontrol"]),
 ("adana", "Adana (Hacı Sabancı OSB)", "gıda, tekstil, kimya, plastik", ["adana osb yapay zeka kamera", "adana iş güvenliği kamera sistemi"]),
 ("kahramanmaras", "Kahramanmaraş OSB", "tekstil (iplik, dokuma), metal mutfak eşyası", ["kahramanmaraş tekstil kamera", "kahramanmaraş osb yapay zeka"]),
 ("duzce", "Düzce OSB ve Düzce sanayi bölgesi", "otomotiv yan sanayi, gıda, orman ürünleri", ["düzce osb yapay zeka kamera"]),
 ("bilecik-bozuyuk", "Bilecik — Bozüyük OSB", "seramik, metal, plastik", ["bozüyük osb kamera", "bilecik yapay zeka kamera"]),
]
for s, name, ind, kws in CITY:
    specs.append({"path": "/bolge/" + s, "type": "city", "title_hint": name, "industry": ind, "kws": kws})
LAW = [
 ("6331-isg-kanunu-kamera-ile-denetim", "6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında kamera ve yapay zekâ ile İSG denetimi", ["6331 isg kanunu kamera ile denetim", "iş güvenliği kamera denetimi yasal mı", "isg kamera takibi"]),
 ("kvkk-uyumlu-kamera-analizi", "KVKK'ya uygun kamera ve yapay zekâ analizi (işyerinde video analitiği ve kişisel veri)", ["kvkk uyumlu kamera analizi", "işyerinde kamera kvkk", "yapay zeka kamera kişisel veri"]),
 ("isyerinde-kamera-aydinlatma-metni", "İşyerinde kamera ve görüntü analizi için çalışan aydınlatma metni ve bilgilendirme", ["işyeri kamera aydınlatma metni", "çalışan kamera bilgilendirme", "kamera kvkk aydınlatma metni örneği"]),
 ("isg-kurulu-raporu-kamera-verisi", "İSG kurulu toplantıları ve raporları için kamera verisi kullanımı", ["isg kurulu raporu", "isg kurul toplantısı gündemi", "isg kurulu için veri"]),
 ("risk-degerlendirmesi-kamera", "Risk değerlendirmesinde kamera ve yapay zekâ verisinin kullanımı", ["risk değerlendirmesi kamera", "isg risk analizi yapay zeka", "risk değerlendirmesi veri toplama"]),
 ("kkd-yonetmeligi-kamera-takibi", "Kişisel koruyucu donanım (KKD) kullanımı yükümlülükleri ve kamera ile takip", ["kkd kullanımı yönetmeliği", "kkd kullanımı denetimi", "işveren kkd yükümlülüğü"]),
 ("ramak-kala-bildirimi-kamera", "Ramak kala olaylarının kamera ile yakalanması ve raporlanması", ["ramak kala bildirimi", "ramak kala örnekleri", "ramak kala kayıt sistemi"]),
 ("is-kazasi-kamera-kaydi", "İş kazası sonrası kamera kayıtları, olay incelemesi ve kök neden analizi", ["iş kazası kamera kaydı", "iş kazası kök neden analizi", "iş kazası olay incelemesi"]),
 ("is-ekipmanlari-forklift-guvenligi", "İş ekipmanları güvenliği kapsamında forklift ve yaya güvenliği", ["forklift iş güvenliği mevzuatı", "forklift yaya güvenliği kuralları", "iş ekipmanları yönetmeliği forklift"]),
 ("yangin-yonetmeligi-acil-cikis", "Yangından korunma kapsamında acil çıkış ve yangın kapısı kontrolleri", ["acil çıkış kapısı yönetmelik", "yangın kapısı açık bırakılır mı", "acil çıkış önü kapatma"]),
 ("yuksekte-calisma-kamera", "Yüksekte çalışmada emniyet kemeri ve güvenli çalışma için kamera ile izleme", ["yüksekte çalışma emniyet kemeri kontrolü", "yüksekte çalışma iş güvenliği"]),
 ("iso-45001-kamera-ile-izleme", "ISO 45001 iş sağlığı ve güvenliği yönetim sisteminde kamera verisi", ["iso 45001 kamera", "iso 45001 performans izleme", "isg performans göstergeleri"]),
]
for s, t, k in LAW:
    specs.append({"path": "/mevzuat/" + s, "type": "law", "title_hint": t, "kws": k})
# mevcut çözüm/sektör sayfalarına SSS (5'e tamamla)
for grp in ("solutions", "sectors"):
    for p in D[grp]:
        have = p.get("faq") or []
        if len(have) >= 5: continue
        specs.append({"path": "faq:" + p["path"], "type": "faq", "title_hint": p["title"], "desc": p.get("desc", ""), "have": [f.get("q") for f in have], "need": 5 - len(have), "kws": []})
json.dump(specs, open(os.path.join(S, "specs2.json"), "w", encoding="utf-8"), ensure_ascii=False)
print(len(specs))
