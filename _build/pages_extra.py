"""Şirket sayfaları: Hakkımızda, Kariyer, Yasal (+ alt metinler), İş Ortaklığı.
build.py tarafından çağrılır: run(ctx) — ctx: shell, write, cta, faq_html, section_html, E, D"""

MAIL = "info@hypevisionlab.com"

CSS = """<style>
.k-eyebrow{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--mute)}
.bigh{font-size:clamp(36px,4.6vw,64px);line-height:1.04;letter-spacing:-.03em;font-weight:600;margin-top:14px;max-width:18ch}
.bigh em{font-style:italic;font-weight:500;color:var(--mute)}
.lead2{color:#4A4D52;font-size:18px;max-width:56ch;margin-top:18px}
.btn2{display:inline-flex;gap:8px;align-items:center;font-weight:600;font-size:15px;padding:12px 20px;border-radius:99px;background:var(--ink);color:#fff;transition:.2s}
.btn2:hover{background:#000}
.btn2.o{background:#fff;color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)}
.btn2.o:hover{box-shadow:inset 0 0 0 1px var(--ink)}
.row-btn{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.band{background:var(--bg2);padding:90px 0;margin-top:90px}
.stat4{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:50px}
.stat4 div{background:var(--bg2);border-radius:10px;padding:26px}
.stat4 b{display:block;font-size:clamp(34px,3.6vw,52px);font-weight:600;letter-spacing:-.03em;line-height:1}
.stat4 small{color:var(--mute);font-size:14px;display:block;margin-top:8px}
.ph2{border-radius:12px;overflow:hidden;aspect-ratio:16/10}.ph2 img{width:100%;height:100%;object-fit:cover}
.val3{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:40px}
.val3 div{background:#fff;border-radius:10px;padding:28px;box-shadow:inset 0 0 0 1px var(--line)}
.val3 i{display:inline-grid;place-items:center;width:36px;height:36px;border-radius:9px;background:var(--pill);font-style:normal;font-weight:700;font-size:14px;color:var(--pillInk)}
.val3 h4{font-size:19px;font-weight:600;margin-top:18px;letter-spacing:-.01em}
.val3 p{color:var(--mute);font-size:15px;margin-top:6px}
.area{border-top:1px solid var(--line);padding:46px 0;display:grid;grid-template-columns:340px 1fr;gap:50px}
.area h3{font-size:26px;font-weight:600;letter-spacing:-.02em}
.area .cnt{display:inline-block;margin-top:8px;font-size:13px;font-weight:600;color:var(--acc)}
.area>div>p{color:var(--mute);font-size:15px;margin-top:10px;max-width:36ch}
.role{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px 0;border-bottom:1px solid var(--line)}
.role:first-child{border-top:1px solid var(--line)}
.role b{font-size:16px;font-weight:600;display:block}
.role small{font-size:13px;color:var(--mute)}
.role a{font-size:14px;font-weight:600;padding:9px 16px;border-radius:99px;box-shadow:inset 0 0 0 1px var(--line);white-space:nowrap}
.role a:hover{background:var(--ink);color:#fff;box-shadow:none}
.challenge{margin:20px 0 0;border-radius:12px;background:var(--ink);color:#fff;padding:36px;display:flex;justify-content:space-between;gap:30px;align-items:center;flex-wrap:wrap}
.challenge h4{font-size:26px;font-weight:600;letter-spacing:-.02em}
.challenge p{color:#B8BBBF;max-width:60ch;margin-top:8px}
.challenge a{background:var(--pill);color:var(--pillInk);font-weight:600;padding:13px 20px;border-radius:99px;white-space:nowrap}
.legal3{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:40px}
.lg{background:var(--bg2);border-radius:12px;padding:30px;display:flex;flex-direction:column;min-height:240px;transition:.2s}
.lg:hover{background:#EDEDEA}
.lg h3{font-size:22px;font-weight:600}
.lg p{color:var(--mute);margin-top:8px;font-size:15px}
.lg span{margin-top:auto;font-weight:600;font-size:14px;padding-top:20px}
/* partnership */
.orbs{display:grid;grid-template-columns:repeat(3,1fr);gap:26px 18px;justify-items:center}
.orb{text-align:center}
.orb .c{width:clamp(96px,10vw,140px);aspect-ratio:1;border-radius:50%;display:grid;place-items:center;box-shadow:0 0 0 8px #fff,0 0 0 9px var(--line);margin:0 auto}
.orb .c img{max-width:62%;max-height:40%;object-fit:contain;filter:brightness(0) invert(1)}
.orb .c b{color:#fff;font-size:clamp(18px,2vw,26px);font-weight:700;letter-spacing:-.01em}
.orb small{display:block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-top:16px}
.orb span{font-size:13px;color:var(--mute)}
.flow{background:#141516;border-radius:14px;padding:16px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.flow div{border-radius:10px;background:#232427;color:#fff;padding:18px;min-height:170px;display:flex;flex-direction:column;box-shadow:inset 0 0 0 1px #34363a}
.flow div.on{background:var(--pill);color:var(--pillInk)}
.flow small{font-size:11px;opacity:.6}
.flow b{font-size:19px;font-weight:600;margin-top:auto}
.flow p{font-size:13px;opacity:.75;margin-top:6px}
.al{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.al .pnl{border-radius:16px;background:var(--pill);aspect-ratio:1.1;overflow:hidden;position:relative}
.al .pnl img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;opacity:.9}
.f4{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:26px}
.f4 div{border:1px solid var(--line);border-radius:10px;padding:20px}
.f4 i{display:block;width:9px;height:9px;border-radius:50%}
.f4 b{display:block;font-size:16px;font-weight:600;margin-top:12px}
.f4 p{font-size:14px;color:var(--mute);margin-top:4px}
.dk{background:#1D1E20;color:#fff;padding:100px 0;margin-top:100px}
.dk .grid{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center}
.ex{background:#2A2B2F;border-radius:12px;padding:24px;margin-top:12px}
.ex small{font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--acc)}
.ex b{display:block;font-size:19px;font-weight:600;margin-top:8px}
.ex p{color:#B8BBBF;font-size:14px;margin-top:6px}
.chips{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}
.chips span{border:1px solid #3A3C40;border-radius:8px;padding:10px;text-align:center;font-size:13px;color:#D5D7DA}
.phone{width:min(320px,100%);margin:0 auto;border-radius:44px;background:#0E0F10;padding:14px;box-shadow:0 0 0 2px #2c2d30,0 40px 80px rgba(0,0,0,.5)}
.phone .scr{border-radius:32px;background:linear-gradient(180deg,#2b3035,#15181b);min-height:560px;padding:56px 14px 20px;position:relative}
.phone .scr::before{content:"";position:absolute;top:12px;left:50%;transform:translateX(-50%);width:96px;height:26px;border-radius:20px;background:#000}
.phone .tm{text-align:center;color:#fff}.phone .tm small{font-size:12px;opacity:.7}.phone .tm b{display:block;font-size:52px;font-weight:600;line-height:1.1}
.nf{display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:16px;padding:10px 12px;margin-top:10px;color:#fff;animation:pop .5s both}
.nf img{width:38px;height:38px;border-radius:9px;object-fit:cover}
.nf b{font-size:13px;font-weight:600;display:block}.nf small{font-size:12px;opacity:.75}
.nf em{margin-left:auto;font-style:normal;font-size:11px;opacity:.6}
.build{margin-top:100px;border-radius:14px;background:#141516;color:#fff;padding:clamp(40px,6vw,80px)}
.build h2{font-size:clamp(34px,4.6vw,64px);font-weight:600;letter-spacing:-.03em;line-height:1.05;max-width:16ch}
.build p{color:#B8BBBF;max-width:56ch;margin-top:16px}
.build .row-btn a.btn2{background:var(--pill);color:var(--pillInk)}
@media (max-width:900px){.split,.al,.dk .grid,.area{grid-template-columns:1fr;gap:26px}.stat4{grid-template-columns:1fr 1fr}.val3,.legal3,.flow,.f4{grid-template-columns:1fr}.orbs{grid-template-columns:repeat(3,1fr)}}
</style>"""

TXT = {
"tr": dict(
 home="Ana sayfa", company="Şirket",
 ab_path="/hakkimizda", ab_t="Hakkımızda", ab_d="Hype Vision: 2020'den beri Bilişim Vadisi'ta endüstriyel görüntü işleme ve yapay zekâ.",
 ab_h='Fabrikalarda gözün yetmediği yerde <em>yapay zekâ</em> görür.',
 ab_l="Derin öğrenme ve bilgisayarlı görüdeki gelişmeleri, sahada gerçekten çalışan, ölçülebilir ve KVKK uyumlu denetim sistemlerine dönüştürüyoruz.",
 ab_b1="Misyonumuz", stats=[("2020","Kuruluş yılı"),("Bilişim Vadisi","Gebze / Kocaeli"),("7/24","Kesintisiz saha denetimi"),("100+","Hazır yapay zekâ modülü")],
 mis_k="Misyonumuz", mis_h="2020'den beri endüstriyel yapay zekâ.",
 mis_p=["Hype Vision olarak 2020 yılından bu yana endüstriyel güvenlik ve operasyonel verimlilik alanında yapay zekâ destekli görüntü işleme sistemleri geliştiriyoruz.",
        "Platformumuz sahadaki IP kameralardan gelen görüntüyü analiz ederek İSG, kalite kontrol, personel verimliliği ve güvenlik süreçlerini otomatikleştirir. Ham video depolamak yerine anlamlandırılmış veri — alarm, metrik, rapor — üretir.",
        "Amacımız, fabrikalarda insan gözünün yetemediği sürekli denetimi ölçeklenebilir, KVKK uyumlu ve mevcut altyapıyla uyumlu bir katmana dönüştürmek."],
 how_k="Nasıl çalışırız", how_h="Sahada çalışanı gerçek sayarız.<span>Demo değil, ölçülmüş sonuç.</span>",
 vals=[("Önemli problemleri seçeriz","Sahibi net, etkisi ölçülebilir senaryolarla başlarız: İSG ihlali, duruş, fire, kayıp süre."),
       ("Çalışanı teslim ederiz","Her model sizin sahanızın görüntüsüyle kalibre edilir; doğruluğu pilotta ölçüp yazılı raporlarız."),
       ("Birlikte çözeriz","İSG, üretim ve BT ekiplerinizle aynı masada çalışırız; karar bürokrasiden değil, veriden çıkar.")],
 car_k="Kariyer", car_h="Kameraları anlamlı kılan ekibe katılın.", car_p="Yapay zekâ, saha kurulumu ve iş geliştirmede bizimle üretmek isteyenleri arıyoruz.", car_b="Kariyer sayfası →",
 ab_faq=[("Hype Vision nerede bulunuyor?","Ekibimiz Bilişim Vadisi, Muallimköy, Deniz Cd. No:143-5, Gebze / Kocaeli'dedir; Türkiye genelindeki tesislere keşif ve kurulum için sahaya gideriz."),
         ("Hangi altyapıyla çalışıyorsunuz?","Mevcut IP/CCTV kameralarınızla (RTSP/ONVIF, marka bağımsız) çalışırız. İşleme tesis içinde edge sunucuda, bulutta veya hibrit olarak yapılabilir."),
         ("Hangi alanlara odaklanıyorsunuz?","İş sağlığı ve güvenliği, kalite kontrol, personel ve hat verimliliği, lojistik ve tesis güvenliği.")],
 kr_path="/kariyer", kr_t="Kariyer", kr_d="Hype Vision'da kariyer: yapay zekâ, saha kurulumu ve iş geliştirme.",
 kr_h="Kazayı azalt. <em>Verimi</em> artır.", kr_l="Fabrikalarda insanları daha güvende, hatları daha verimli kılan yapay zekâyı geliştiriyoruz. Bunu daha çok sahaya taşımamıza yardım edin.",
 kr_b1="Çalışma alanları", kr_b2="Genel başvuru", kr_subj_general="Genel başvuru", apply="Başvur", apply_subj="Başvuru: ",
 why_k="Neden buradayız", why_h="2020'de tek bir hedefle başladık.",
 why_p=["İSG uzmanlarının ve üretim ekiplerinin sahayı 7/24 izleyememesi gerçek bir problem. Mevcut kameraları yapay zekâ ile denetçiye dönüştürerek bu yükü hafifletiyoruz.",
        "Rutin denetimi otomatikleştirip anlık içgörü sağlayarak ekiplerin asıl işe — insanları korumaya ve daha iyi üretmeye — odaklanmasını istiyoruz."],
 who_k="Kimleri arıyoruz", who_h="Üretmeyi seven insanlar.<span>Fikirden sahaya, hızlıca.</span>",
 who=[("Güçlü ekip, güçlü ürün","Gücümüz kurduğumuz ekipten gelir. İyi ekip kurarsanız iyi ürün arkasından gelir."),
      ("Fikrini hayata geçir","Bir şeyin olması gerekiyorsa yapmaya başlarız ve hızla sahaya çıkarırız."),
      ("Bürokrasisiz iş birliği","Deneyimli mühendislerle doğrudan çalışırsınız; kararlar insanlarla, prosedürle değil.")],
 areas_k="Çalışma alanları", areas_h="Üç alan. Tek misyon.<span>İlan açık olmasa da başvurunuzu bekliyoruz.</span>", area_cnt="alan",
 areas=[("Yapay Zekâ & Yazılım","Modelleri eğiten, edge'de çalıştıran ve paneli geliştiren ekip. Bilgisayarlı görü, MLOps, backend ve frontend.",
         [("Bilgisayarlı Görü Mühendisi","Tam zamanlı · Gebze"),("Edge / MLOps Mühendisi","Tam zamanlı · Gebze"),("Full-stack Geliştirici","Tam zamanlı · Gebze / Hibrit"),("Veri Etiketleme Uzmanı","Tam zamanlı · Gebze")]),
        ("Saha & Kurulum","Keşiften devreye almaya, sistemi tesiste çalışır hale getiren ekip. Kamera, ağ ve entegrasyon.",
         [("Saha Uygulama Mühendisi","Tam zamanlı · Seyahatli"),("Sistem & Ağ Uzmanı","Tam zamanlı · Gebze")]),
        ("Satış & İş Geliştirme","Hype Vision'ı daha çok tesise, daha çok kameraya taşıyan ekip. Satış, iş ortaklıkları ve müşteri başarısı.",
         [("Kurumsal Satış Uzmanı","Tam zamanlı · İstanbul / Kocaeli"),("İş Ortaklığı Yöneticisi","Tam zamanlı · Hibrit"),("Müşteri Başarı Uzmanı","Tam zamanlı · Gebze")])],
 ch_h="İyi misin? Hemen göster.", ch_p="Belki CV'n seni anlatmıyor. Bir kamera görüntüsünden anlamlı bir olay çıkaran küçük bir çözüm geliştir, bize gönder. Her gönderiye 7 gün içinde dönüyoruz.", ch_b="Çözümünü gönder →",
 all_apps="Tüm başvurular için:", all_apps2="— e-postanıza CV'nizi ve ilgilendiğiniz alanı ekleyin.",
 kr_faq=[("Uzaktan çalışma imkânı var mı?","Yazılım ve iş geliştirme rollerinde hibrit çalışmaya açığız; saha ve donanım rolleri Gebze merkezli ve seyahatlidir."),
         ("Başvurumu nasıl yaparım?","CV'nizi ve ilgilendiğiniz alanı info@hypevisionlab.com adresine gönderin. Varsa GitHub, portfolyo veya geliştirdiğiniz projeleri de ekleyin."),
         ("Staj imkânı var mı?","Bilgisayarlı görü, yazılım ve veri etiketleme alanlarında dönemsel staj alımı yapıyoruz; genel başvuru ile iletebilirsiniz.")],
 lg_path="/yasal", lg_t="Yasal", lg_h="Yasal bilgilendirme", lg_d="Hype Vision gizlilik politikası, hizmet şartları ve çerez politikası.",
 lg_l="Kişisel verilerinizi nasıl işlediğimizi, platformun kullanım koşullarını ve çerez tercihlerinizi buradan inceleyebilirsiniz.", view="Görüntüle →",
 legal=[("/gizlilik-politikasi","Gizlilik Politikası","Kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu KVKK kapsamında şeffaf biçimde açıklıyoruz."),
        ("/hizmet-sartlari","Hizmet Şartları","Hype Vision platformunun kullanımına ilişkin hak, yükümlülük ve sorumlulukları net biçimde tanımlar."),
        ("/cerez-politikasi","Çerez Politikası","hypevisionlab.com’da hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklar.")],
 io_path="/is-ortakligi", io_t="İş Ortaklığı", io_d="CCTV kurulum firmaları, VMS ve otomasyon entegratörleri için Hype Vision iş ortaklığı.",
 io_k="İş ortaklığı", io_h="İçine kurulu. <em>Sonradan eklenmiş değil.</em>",
 io_l="Müşterilerinizin kameraları zaten var. Hype Vision, kurduğunuz ve bakımını yaptığınız sistemlerin üzerine güvenlik, üretim ve operasyon için bir yapay zekâ katmanı ekler.",
 io_b1="İletişime geçin", io_b2="Entegrasyonlar", io_subj="İş ortaklığı",
 orbs=[("VMS","Popup, alarm"),("ERP / MES","SAP, Oracle, D365"),("Saha","Röle, siren, turnike"),("REST","Webhook, olay akışı"),("Kamera","RTSP, ONVIF"),("Bildirim","WhatsApp, e-posta")],
 sh_k="Değişim", sh_h="Müşterinize bir ekran daha açtırmayın.", sh_p="İyi projeler, ayrı bir yazılım olarak kalınca benimsenmiyor. Hype Vision analitiği, müşterinizin zaten kullandığı VMS, ERP ve bildirim kanallarına olay olarak düşer.", sh_b="Nasıl çalıştığını görün",
 flow=[("Sinyal","Kamera akışı RTSP/ONVIF ile edge cihaza gelir."),("Hype bağlamı","Yapay zekâ + kurallar; bölge, zaman ve kanıt karesi eklenir."),("Saha aksiyonu","Doğru görev, doğru kişiye; panel, röle veya API ile.")],
 for_k="Kimler için", for_h="Kamera projenizin akıllı katmanı olun.",
 fors=[("CCTV kurulum ve bakım firmaları","Mevcut müşterilerinize yeni kamera satmadan yeni değer sunun."),("Güvenlik ve VMS entegratörleri","Olaylar Milestone, Dahua gibi VMS ekranlarında popup olarak düşer."),
       ("Otomasyon ve MES entegratörleri","Görüntüden gelen veri ERP/MES'e çift giriş olmadan akar."),("Teknoloji bayileri","Sanayi müşterilerinize hazır, sahada doğrulanmış modüller sunun.")],
 hw_k="Birlikte nasıl çalışırız", hw_h="Her noktayı <em>birleştirin.</em>",
 hws=[("Siz müşteri ilişkisini getirirsiniz","Kamera altyapısı bilgisi ve sahadaki güven sizde."),("Biz teknik değerlendirmeyi destekleriz","Kamera değerlendirmesi, senaryo tanımı ve boyutlandırma."),("Pilot birlikte yürür","Aynı doğrulanmış süreçle, sahada sizin ekibinizin katılımıyla. Ticari model proje bazında belirlenir.")],
 ex_k="Örnekler, tamamı değil", ex_h="Olaylar bağlamı olan aksiyonlara dönüşür.",
 exs=[("VMS","Bir alarm, önceliklendirilmiş bir göreve dönüşür.","Ayrı bir alarm akışı yerine olay; bölge, kamera, kanıt karesi ve son örüntülerle birlikte operatörün ekranına düşer."),
      ("PLC / RÖLE","Bir ihlal, sahada anında karşılık bulur.","Baret eksikliğinde turnike kilitlenir, forklift yakınlaşmasında siren çalar, kritik durumda hat durdurulur.")],
 chips=["ERP / MES senkronu","VMS popup","WhatsApp / SMS","Turnike ve PLC","REST / webhook","Mobil panel"],
 ph_date="Cumartesi, 11 Ekim", nfs=[("Depo B · Kamera 4","Forklift–yaya yakınlaşması","şimdi"),("Montaj Hattı 1","Baret eksik · turnike kilitlendi","2 dk"),("Hat 3","12 dk duruş tespit edildi","9 dk"),("CNC-04","Operatör istasyonda değil","16 dk")],
 bd_k="Hype Vision ile büyüyün", bd_h="Projelerinize yapay zekâ katmanını ekleyin.", bd_p="CCTV kurulum, VMS ve otomasyon projelerinize Hype Vision analitiğini ekleyin; müşterilerinize ölçülebilir İSG, kalite ve verimlilik sonucu sunun.",
 bd_b1="İş ortağı olun →", bd_b2="Modülleri inceleyin", bd_subj="İş ortağı olmak istiyorum", sol_path="/cozumler/", how_anchor="/#teknoloji",
),
"en": dict(
 home="Home", company="Company",
 ab_path="/en/about", ab_t="About us", ab_d="Hype Vision: industrial computer vision and AI from Bilişim Vadisi (IT Valley) since 2020.",
 ab_h='Where the eye can\'t keep up, <em>AI</em> sees.',
 ab_l="We turn advances in deep learning and computer vision into inspection systems that actually work on the shop floor — measurable and privacy-compliant.",
 ab_b1="Our mission", stats=[("2020","Founded"),("IT Valley","Gebze / Kocaeli"),("24/7","Continuous site monitoring"),("100+","Ready-made AI modules")],
 mis_k="Our mission", mis_h="Industrial AI since 2020.",
 mis_p=["Since 2020, Hype Vision has been building AI-powered computer vision systems for industrial safety and operational efficiency.",
        "Our platform analyses footage from on-site IP cameras to automate HSE, quality control, workforce productivity and security processes. Instead of storing raw video, it produces meaningful data — alerts, metrics and reports.",
        "Our goal is to turn the continuous inspection that the human eye can't sustain into a scalable, privacy-compliant layer that fits your existing infrastructure."],
 how_k="How we work", how_h="We only count what works on site.<span>Measured results, not demos.</span>",
 vals=[("We pick problems that matter","We start with scenarios that have a clear owner and measurable impact: HSE violations, stoppages, scrap, lost time."),
       ("We ship what works","Every model is calibrated on footage from your site; we measure accuracy in the pilot and report it in writing."),
       ("We solve it together","We sit at the same table as your HSE, production and IT teams; decisions come from data, not bureaucracy.")],
 car_k="Careers", car_h="Join the team that makes cameras meaningful.", car_p="We're looking for people who want to build with us in AI, field deployment and business development.", car_b="Careers page →",
 ab_faq=[("Where is Hype Vision based?","Our team is at Bilişim Vadisi (IT Valley), Muallimköy, Deniz Cd. No:143-5, Gebze / Kocaeli, Türkiye; we travel to sites across the country for discovery and deployment."),
         ("What infrastructure do you work with?","Your existing IP/CCTV cameras (RTSP/ONVIF, brand-agnostic). Processing can run on an on-premise edge server, in the cloud or hybrid."),
         ("What do you focus on?","Health and safety, quality control, workforce and line productivity, logistics and site security.")],
 kr_path="/en/careers", kr_t="Careers", kr_d="Careers at Hype Vision: AI, field deployment and business development.",
 kr_h="Fewer accidents. <em>More</em> output.", kr_l="We build AI that keeps people safer and lines more productive. Help us bring it to more sites.",
 kr_b1="Areas", kr_b2="Open application", kr_subj_general="Open application", apply="Apply", apply_subj="Application: ",
 why_k="Why we're here", why_h="We started in 2020 with one goal.",
 why_p=["HSE specialists and production teams can't watch the floor 24/7 — that's a real problem. We ease that load by turning existing cameras into AI inspectors.",
        "By automating routine inspection and providing real-time insight, we want teams to focus on what matters: keeping people safe and producing better."],
 who_k="Who we hire", who_h="People who love to build.<span>From idea to the floor, fast.</span>",
 who=[("Great teams, great products","Our strength comes from the team we build. Build an exceptional team, and great products follow."),
      ("Act on bright ideas","If something should exist, we start building it and get it into production quickly."),
      ("Collaboration without friction","Work directly with experienced engineers; decisions move through people, not procedures.")],
 areas_k="Where we work", areas_h="Three areas. One mission.<span>No open listing? We still want to hear from you.</span>", area_cnt="roles",
 areas=[("AI & Software","The team that trains models, runs them at the edge and builds the dashboard. Computer vision, MLOps, backend and frontend.",
         [("Computer Vision Engineer","Full-time · Gebze"),("Edge / MLOps Engineer","Full-time · Gebze"),("Full-stack Developer","Full-time · Gebze / Hybrid"),("Data Annotation Specialist","Full-time · Gebze")]),
        ("Field & Deployment","From discovery to go-live, the team that makes the system work on site. Cameras, networking and integration.",
         [("Field Application Engineer","Full-time · Travel"),("Systems & Network Specialist","Full-time · Gebze")]),
        ("Sales & Business Development","The team bringing Hype Vision to more sites and more cameras. Sales, partnerships and customer success.",
         [("Enterprise Account Executive","Full-time · Istanbul / Kocaeli"),("Partnerships Manager","Full-time · Hybrid"),("Customer Success Manager","Full-time · Gebze")])],
 ch_h="Top-notch? Prove it, straight away.", ch_p="Maybe your CV doesn't tell the whole story. Build a small solution that turns camera footage into a meaningful event and send it our way. We reply to every submission within 7 days.", ch_b="Send your solution →",
 all_apps="For all applications:", all_apps2="— attach your CV and the area you're interested in.",
 kr_faq=[("Do you offer remote work?","We're open to hybrid work for software and business roles; field and hardware roles are Gebze-based and involve travel."),
         ("How do I apply?","Send your CV and area of interest to info@hypevisionlab.com. Add GitHub, a portfolio or projects you've built if you have them."),
         ("Do you offer internships?","We take interns periodically in computer vision, software and data annotation; send an open application.")],
 lg_path="/en/legal", lg_t="Legal", lg_h="Legal", lg_d="Hype Vision privacy policy, terms of service and cookie policy.",
 lg_l="Read how we handle your personal data, the terms for using our platform and how we use cookies.", view="Read →",
 legal=[("/gizlilik-politikasi","Privacy Policy","How we collect, process and protect your personal data, explained transparently."),
        ("/hizmet-sartlari","Terms of Service","The rights, obligations and responsibilities that apply to using the Hype Vision platform."),
        ("/cerez-politikasi","Cookie Policy","Which cookies hypevisionlab.com uses and how you can manage your preferences.")],
 io_path="/en/partners", io_t="Partners", io_d="Hype Vision partnership for CCTV installers, VMS and automation integrators.",
 io_k="Partner integrations", io_h="Built in. <em>Not bolted on.</em>",
 io_l="Your customers already have cameras. Hype Vision adds an AI layer for safety, production and operations on top of the systems you install and maintain.",
 io_b1="Get in touch", io_b2="Integrations", io_subj="Partnership",
 orbs=[("VMS","Popup, alerts"),("ERP / MES","SAP, Oracle, D365"),("Field","Relay, siren, turnstile"),("REST","Webhook, event stream"),("Camera","RTSP, ONVIF"),("Alerts","WhatsApp, email")],
 sh_k="The shift", sh_h="Stop asking customers to open one more screen.", sh_p="Great projects stall when they live in a separate app. Hype Vision analytics land as events in the VMS, ERP and alert channels your customers already use.", sh_b="See how it works",
 flow=[("Signal","The camera stream reaches the edge device via RTSP/ONVIF."),("Hype context","AI + rules; zone, time and an evidence frame are attached."),("Field action","The right task reaches the right person via dashboard, relay or API.")],
 for_k="Who it's for", for_h="Become the smart layer of your camera projects.",
 fors=[("CCTV installers and maintainers","Offer existing customers new value without selling new cameras."),("Security and VMS integrators","Events pop up in VMS screens such as Milestone and Dahua."),
       ("Automation and MES integrators","Data from video flows into ERP/MES without double entry."),("Technology resellers","Offer industrial customers ready, field-proven modules.")],
 hw_k="How we work together", hw_h="Connect every <em>dot.</em>",
 hws=[("You bring the customer relationship","Camera infrastructure know-how and on-site trust stay with you."),("We support the technical assessment","Camera assessment, scenario definition and sizing."),("The pilot runs together","Same proven process, with your team on site. Commercial terms are set per project.")],
 ex_k="Examples, not the full set", ex_h="Events become context-aware actions.",
 exs=[("VMS","An alarm becomes a prioritised task.","Instead of another alert stream, the event reaches the operator with zone, camera, evidence frame and recent patterns."),
      ("PLC / RELAY","A violation gets an instant response on site.","A missing hard hat locks the turnstile, a forklift near miss sounds a siren, a critical event stops the line.")],
 chips=["ERP / MES sync","VMS popup","WhatsApp / SMS","Turnstile & PLC","REST / webhook","Mobile dashboard"],
 ph_date="Saturday, 11 October", nfs=[("Warehouse B · Camera 4","Forklift–pedestrian near miss","now"),("Assembly Line 1","Missing hard hat · turnstile locked","2m"),("Line 3","12-minute stoppage detected","9m"),("CNC-04","Operator away from station","16m")],
 bd_k="Grow with Hype Vision", bd_h="Add an AI layer to your projects.", bd_p="Add Hype Vision analytics to your CCTV, VMS and automation projects and give customers measurable safety, quality and productivity results.",
 bd_b1="Become a partner →", bd_b2="Explore modules", bd_subj="Partnership request", sol_path="/en/solutions/", how_anchor="/en/#teknoloji",
)}

def run(c, lang="tr"):
    E, shell, write, cta, faq_html, section_html = c["E"], c["shell"], c["write"], c["cta"], c["faq_html"], c["section_html"]
    t = TXT[lang]; h = "/" if lang == "tr" else "/en/"
    q = lambda s: s.replace(" ", "%20")
    mf = lambda items: [{"q": a, "a": b} for a, b in items]
    def page(title, desc, body, path, faq=None, crumbs=None):
        write(path, shell(title, desc, CSS + body, path, lang, faq=faq, crumbs=crumbs))
    crumb_home = f'<a href="{h}">{t["home"]}</a>'
    comp = f'<a href="{t["ab_path"]}/">{t["company"]}</a>'

    # ---- Hakkımızda / About
    stats = "".join(f'<div class="rv"><b>{a}</b><small>{b}</small></div>' for a, b in t["stats"])
    vals = "".join(f'<div class="rv"><i>0{i+1}</i><h4>{a}</h4><p>{b}</p></div>' for i, (a, b) in enumerate(t["vals"]))
    body = f"""<div class="wrap">
<div class="crumb rv">{crumb_home} / <span>{t['ab_t']}</span></div>
<div class="split" style="margin-top:30px">
 <div class="rv"><div class="k-eyebrow">{t['ab_t']}</div><h1 class="bigh">{t['ab_h']}</h1><p class="lead2">{t['ab_l']}</p>
  <div class="row-btn"><a class="btn2" href="#misyon">{t['ab_b1']}</a><a class="btn2 o" href="{t['kr_path']}/">{t['kr_t']}</a></div></div>
 <div class="ph2 rv"><img src="/img/det-kusbakisi.webp" alt="Hype Vision"></div>
</div><div class="stat4">{stats}</div></div>
<div class="band" id="misyon"><div class="wrap split">
 <div class="rv"><div class="k-eyebrow">{t['mis_k']}</div><h2 class="bigh" style="font-size:clamp(30px,3.4vw,46px)">{t['mis_h']}</h2></div>
 <div class="rv">{''.join(f'<p class="lead2"{" style=margin-top:0" if i==0 else ""}>{p}</p>' for i,p in enumerate(t['mis_p']))}</div></div></div>
<div class="wrap" style="margin-top:90px"><div class="k-eyebrow rv">{t['how_k']}</div><h2 class="h rv" style="margin-top:10px">{t['how_h']}</h2><div class="val3">{vals}</div></div>
<div class="wrap" style="margin-top:90px"><div class="split">
 <div class="ph2 rv"><img src="/img/det-hat.webp" alt=""></div>
 <div class="rv"><div class="k-eyebrow">{t['car_k']}</div><h2 class="bigh" style="font-size:clamp(30px,3.4vw,46px)">{t['car_h']}</h2><p class="lead2">{t['car_p']}</p>
 <div class="row-btn"><a class="btn2" href="{t['kr_path']}/">{t['car_b']}</a></div></div></div></div>
{faq_html(mf(t['ab_faq']), lang)}{cta(lang)}"""
    page(t["ab_t"], t["ab_d"], body, t["ab_path"], faq=mf(t["ab_faq"]), crumbs=[(t["home"], h), (t["ab_t"], t["ab_path"] + "/")])

    # ---- Kariyer / Careers
    def roles(items):
        return "".join(f'<div class="role"><div><b>{E(a)}</b><small>{E(w)}</small></div><a href="mailto:{MAIL}?subject={q(E(t["apply_subj"] + a))}">{t["apply"]}</a></div>' for a, w in items)
    area_html = "".join(f'<div class="area rv"><div><h3>{E(n)}</h3><span class="cnt">{len(r)} {t["area_cnt"]}</span><p>{E(d)}</p></div><div>{roles(r)}</div></div>' for n, d, r in t["areas"])
    who = "".join(f'<div class="rv"><i>0{i+1}</i><h4>{a}</h4><p>{b}</p></div>' for i, (a, b) in enumerate(t["who"]))
    body = f"""<div class="wrap">
<div class="crumb rv">{crumb_home} / {comp} / <span>{t['kr_t']}</span></div>
<div class="split" style="margin-top:30px">
 <div class="rv"><div class="k-eyebrow">{t['kr_t']}</div><h1 class="bigh">{t['kr_h']}</h1><p class="lead2">{t['kr_l']}</p>
  <div class="row-btn"><a class="btn2" href="#alanlar">{t['kr_b1']}</a><a class="btn2 o" href="mailto:{MAIL}?subject={q(t['kr_subj_general'])}">{t['kr_b2']}</a></div></div>
 <div class="ph2 rv"><img src="/img/det-cnc.webp" alt=""></div></div></div>
<div class="band"><div class="wrap split">
 <div class="rv"><div class="k-eyebrow">{t['why_k']}</div><h2 class="bigh" style="font-size:clamp(30px,3.4vw,46px)">{t['why_h']}</h2></div>
 <div class="rv">{''.join(f'<p class="lead2"{" style=margin-top:0" if i==0 else ""}>{p}</p>' for i,p in enumerate(t['why_p']))}</div></div></div>
<div class="wrap" style="margin-top:90px"><div class="k-eyebrow rv">{t['who_k']}</div><h2 class="h rv" style="margin-top:10px">{t['who_h']}</h2><div class="val3">{who}</div></div>
<div class="wrap" style="margin-top:90px" id="alanlar"><div class="k-eyebrow rv">{t['areas_k']}</div><h2 class="h rv" style="margin-top:10px">{t['areas_h']}</h2>
 <div style="margin-top:30px">{area_html}</div>
 <div class="challenge rv"><div><h4>{t['ch_h']}</h4><p>{t['ch_p']}</p></div><a href="mailto:{MAIL}?subject=Challenge">{t['ch_b']}</a></div>
 <p style="margin-top:20px;color:var(--mute);font-size:14px">{t['all_apps']} <a href="mailto:{MAIL}" style="color:var(--ink);font-weight:600">{MAIL}</a> {t['all_apps2']}</p></div>
{faq_html(mf(t['kr_faq']), lang)}{cta(lang)}"""
    page(t["kr_t"], t["kr_d"], body, t["kr_path"], faq=mf(t["kr_faq"]), crumbs=[(t["home"], h), (t["company"], t["ab_path"] + "/"), (t["kr_t"], t["kr_path"] + "/")])

    # ---- Yasal / Legal
    EN_OF, en_page, D = c["EN_OF"], c["en_page"], c["D"]
    lp = lambda p: p if lang == "tr" else EN_OF[p]
    body = f"""<div class="wrap"><div class="crumb rv">{crumb_home} / <span>{t['lg_t']}</span></div>
<div class="rv" style="margin-top:30px"><div class="k-eyebrow">{t['lg_t']}</div><h1 class="bigh">{t['lg_h']}</h1><p class="lead2">{t['lg_l']}</p></div>
<div class="legal3">{''.join(f'<a class="lg rv" href="{lp(p)}/"><h3>{a}</h3><p>{b}</p><span>{t["view"]}</span></a>' for p, a, b in t['legal'])}</div></div>{cta(lang)}"""
    page(t["lg_t"], t["lg_d"], body, t["lg_path"], crumbs=[(t["home"], h), (t["lg_t"], t["lg_path"] + "/")])
    for p, a, b in t["legal"]:
        pg = D.get("legal", {}).get(p) if lang == "tr" else en_page(p)
        if not pg: continue
        intro = f"<p class='lead2'>{E(b)}</p>"
        secs = "".join(section_html(s, lang) for s in pg["sections"] if not s["h"].lower().startswith(("yasal", "içindekiler", "legal", "contents")) and s["h"] != a)
        body = f"""<div class="wrap"><div class="crumb rv">{crumb_home} / <a href="{t['lg_path']}/">{t['lg_t']}</a> / <span>{a}</span></div>
<div class="rv" style="margin-top:30px"><div class="k-eyebrow">{t['lg_t']}</div><h1 class="bigh">{a}</h1>{intro}</div>
<div style="margin-top:40px">{secs}</div></div>"""
        page(a, b, body, lp(p), crumbs=[(t["home"], h), (t["lg_t"], t["lg_path"] + "/"), (a, lp(p) + "/")])

    # ---- İş ortaklığı / Partners
    COL = ["#EF6A3A", "#1FAE8C", "#D94C7A", "#7B6CF0", "#E5B92E", "#2F80ED"]
    INNER = ['<img src="/img/brand/milestone.png" alt="">', "<b>ERP</b>", "<b>PLC</b>", "<b>API</b>", "<b>NVR</b>", "<b>SMS</b>"]
    orb_html = "".join(f'<div class="orb rv"><div class="c" style="background:{COL[i]}">{INNER[i]}</div><small>{a}</small><span>{b}</span></div>' for i, (a, b) in enumerate(t["orbs"]))
    flow = "".join(f'<div{" class=on" if i==1 else ""}><small>0{i+1}</small><b>{a}</b><p>{b}</p></div>' for i, (a, b) in enumerate(t["flow"]))
    dots = ["#2F80ED", "#D94C7A", "#1FAE8C", "#EF6A3A"]
    fors = "".join(f'<div><i style="background:{dots[i]}"></i><b>{a}</b><p>{b}</p></div>' for i, (a, b) in enumerate(t["fors"]))
    hws = "".join(f'<div><i style="background:{dots[i]}"></i><b>{a}</b><p>{b}</p></div>' for i, (a, b) in enumerate(t["hws"]))
    exs = "".join(f'<div class="ex"><small>{k}</small><b>{a}</b><p>{b}</p></div>' for k, a, b in t["exs"])
    chips = "".join(f"<span>{x}</span>" for x in t["chips"])
    nimg = ["/img/det-forklift.webp", "/img/det-kkd.webp", "/img/det-hat.webp", "/img/det-cnc.webp"]
    nfs = "".join(f'<div class="nf" style="animation-delay:{i*.2}s"><img src="{nimg[i]}" alt=""><div><b>{a}</b><small>{b}</small></div><em>{w}</em></div>' for i, (a, b, w) in enumerate(t["nfs"]))
    body = f"""<div class="wrap">
<div class="crumb rv">{crumb_home} / {comp} / <span>{t['io_t']}</span></div>
<div class="split" style="margin-top:30px">
 <div class="rv"><div class="k-eyebrow">{t['io_k']}</div><h1 class="bigh">{t['io_h']}</h1><p class="lead2">{t['io_l']}</p>
  <div class="row-btn"><a class="btn2" href="mailto:{MAIL}?subject={q(t['io_subj'])}">{t['io_b1']}</a><a class="btn2 o" href="#entegrasyon">{t['io_b2']}</a></div></div>
 <div class="orbs" id="entegrasyon">{orb_html}</div></div></div>
<div class="band"><div class="wrap split">
 <div class="rv"><div class="k-eyebrow">{t['sh_k']}</div><h2 class="bigh" style="font-size:clamp(28px,3.2vw,44px)">{t['sh_h']}</h2><p class="lead2">{t['sh_p']}</p>
 <div class="row-btn"><a class="btn2" href="{t['how_anchor']}">{t['sh_b']}</a></div></div>
 <div class="flow rv">{flow}</div></div></div>
<div class="wrap" style="margin-top:100px"><div class="al">
 <div class="pnl rv"><img src="/img/det-forklift.webp" alt=""></div>
 <div class="rv"><div class="k-eyebrow">{t['for_k']}</div><h2 class="bigh" style="font-size:clamp(28px,3.2vw,44px)">{t['for_h']}</h2><div class="f4">{fors}</div></div></div></div>
<div class="wrap" style="margin-top:100px"><div class="split">
 <div class="rv"><div class="k-eyebrow">{t['hw_k']}</div><h2 class="bigh" style="font-size:clamp(28px,3.2vw,44px)">{t['hw_h']}</h2><div class="f4" style="grid-template-columns:1fr">{hws}</div></div>
 <div class="ph2 rv" style="aspect-ratio:1"><img src="/img/det-kusbakisi.webp" alt=""></div></div></div>
<div class="dk"><div class="wrap grid">
 <div class="rv"><div class="k-eyebrow" style="color:#8E9196">{t['ex_k']}</div><h2 class="bigh" style="font-size:clamp(28px,3.2vw,44px)">{t['ex_h']}</h2>{exs}<div class="chips">{chips}</div></div>
 <div class="rv"><div class="phone"><div class="scr"><div class="tm"><small>{t['ph_date']}</small><b>14:32</b></div>{nfs}</div></div></div></div></div>
<div class="wrap"><div class="build rv"><div class="k-eyebrow" style="color:var(--acc)">{t['bd_k']}</div><h2>{t['bd_h']}</h2><p>{t['bd_p']}</p>
 <div class="row-btn"><a class="btn2" href="mailto:{MAIL}?subject={q(t['bd_subj'])}">{t['bd_b1']}</a><a class="btn2 o" style="background:transparent;color:#fff;box-shadow:inset 0 0 0 1px #3a3c40" href="{t['sol_path']}">{t['bd_b2']}</a></div></div></div>"""
    page(t["io_t"], t["io_d"], body, t["io_path"], crumbs=[(t["home"], h), (t["company"], t["ab_path"] + "/"), (t["io_t"], t["io_path"] + "/")])
