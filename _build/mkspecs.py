import json, re, sys, os
S = os.path.dirname(os.path.abspath(__file__))
def slug(s):
    s = s.lower()
    for a, b in zip("çğıöşüâîû", "cgiosuaiu"): s = s.replace(a, b)
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:70].rstrip("-")
C = json.load(open(S + "/clusters.json", encoding="utf-8"))
specs = []
for c in C:
    if c["sector"].startswith("Banka"): continue
    specs.append({"path": "/uygulamalar/" + slug(c["cluster"]), "type": "cluster", "sector": c["sector"], "title_hint": c["cluster"], "kws": c["kws"]})
INTEG = [
 ("hikvision-yapay-zeka", "Hikvision kameralara yapay zekâ ekleme (mevcut Hikvision IP kamera ve NVR, RTSP akışı ile harici AI analizi)", ["hikvision yapay zeka", "hikvision rtsp yapay zeka", "hikvision kamera baret tespiti", "hikvision nvr yapay zeka", "hikvision ai kamera"]),
 ("dahua-yapay-zeka", "Dahua kameralarda yapay zekâ analizi (Dahua IPC/NVR, yerleşik analitik ve harici AI)", ["dahua yapay zeka", "dahua ai alternatif", "dahua nvr harici ai", "dahua kamera görüntü işleme"]),
 ("axis-yapay-zeka", "Axis kameralarla yapay zekâ entegrasyonu (Axis IP kamera, RTSP/ONVIF, ACAP ve harici analiz)", ["axis yapay zeka", "axis rtsp ai", "axis kamera baret tespiti", "axis ip kamera görüntü işleme"]),
 ("onvif-yapay-zeka", "ONVIF uyumlu kameralarla yapay zekâ entegrasyonu", ["onvif yapay zeka", "onvif kamera ai", "onvif profile s yapay zeka"]),
 ("nvr-yapay-zeka", "Mevcut NVR sistemine yapay zekâ ekleme", ["nvr yapay zeka", "nvr ai entegrasyonu", "kayıt cihazına yapay zeka ekleme"]),
 ("milestone-xprotect-yapay-zeka", "Milestone XProtect ile yapay zekâ görüntü işleme entegrasyonu (olayların VMS'e popup/alarm olarak düşmesi)", ["milestone xprotect görüntü işleme", "milestone yapay zeka entegrasyonu", "vms ai entegrasyonu"]),
 ("nx-witness-yapay-zeka", "Nx Witness / Network Optix ile yapay zekâ analitiği entegrasyonu", ["nx witness ai analytics", "nx witness yapay zeka"]),
 ("ip-kamera-kkd-tespiti", "IP kameralarla baret ve KKD tespiti", ["ip kamera ai", "ip kamera kkd tespiti", "ip kamera baret tespiti"]),
 ("rtsp-baret-tespiti", "RTSP akışı ile güvenlik kameralarından baret tespiti", ["rtsp baret tespiti", "rtsp yapay zeka", "rtsp kamera ai sunucu"]),
]
for s, t, k in INTEG: specs.append({"path": "/entegrasyon/" + s, "type": "integration", "title_hint": t, "kws": k})
TOPIC = [
 ("yangin-kapisi-izleme", "Yangın kapısı ve acil çıkış açık kaldı / önü kapatıldı alarmı (kamera ile)", ["yangın kapısı açık kaldı alarmı", "acil çıkış önü kapalı tespiti", "yangın kapısı izleme kamera"]),
 ("kamera-ile-5s-denetimi", "Güvenlik kamerasıyla 5S denetimi (düzen, yerinde olmayan malzeme, işaretli alan ihlali)", ["güvenlik kamerasıyla 5s denetimi", "5s yapay zeka", "kamera ile 5s kontrolü"]),
 ("uretim-bandi-urun-sayma", "Üretim bandında kamera ile ürün sayma", ["üretim bandında ürün sayma", "konveyör ürün sayımı kamera", "kamera ile adet sayma"]),
 ("ip-kamera-yapay-zeka", "IP kameradan yapay zekâ analizi (mevcut güvenlik kameralarını akıllandırma)", ["ip kameradan yapay zeka analizi", "mevcut güvenlik kameraları nasıl akıllandırılır", "cctv yapay zeka"]),
]
for s, t, k in TOPIC: specs.append({"path": "/" + s, "type": "topic", "title_hint": t, "kws": k})
COMP = [
 ("kamera-ici-ai-mi-merkezi-sunucu-mu", "Kamera içi (edge) AI mı, merkezi GPU sunucu mu? Karşılaştırma", ["kamera içi ai mı merkezi sunucu mu", "edge ai kamera vs sunucu"]),
 ("hikvision-acusense-ve-harici-ai", "Hikvision AcuSense gibi yerleşik analitik ile harici AI analizi arasındaki fark", ["hikvision acusense ile harici ai farkı", "hikvision akıllı analiz yetersiz"]),
 ("dahua-wizsense-ve-harici-ai", "Dahua WizSense/WizMind yerleşik analitiği ile harici AI sistemleri", ["dahua wizsense harici ai", "dahua yerleşik analitik"]),
 ("axis-acap-ve-harici-ai", "Axis ACAP kamera içi uygulamaları ile merkezi AI analizi", ["axis acap yapay zeka", "axis kamera içi analitik"]),
]
for s, t, k in COMP: specs.append({"path": "/karsilastirma/" + s, "type": "compare", "title_hint": t, "kws": k})
TROUBLE = [
 ("rtsp-baglanti-hatasi", "RTSP bağlantı hatası nasıl çözülür (401, 404, timeout, yanlış yol)", ["rtsp bağlantı hatası", "rtsp 401 unauthorized", "rtsp stream açılmıyor"]),
 ("onvif-kamera-bulunamiyor", "ONVIF kamera bulunamıyor / keşfedilemiyor sorunu", ["onvif kamera bulunamıyor", "onvif device manager kamera görmüyor"]),
 ("h265-goruntu-acilmiyor", "H.265 görüntü açılmıyor / oynatılamıyor", ["h.265 görüntü açılmıyor", "h265 stream oynatma sorunu"]),
 ("nvr-stream-erisim-sorunu", "NVR üzerinden kanal akışına (RTSP) erişim sorunu", ["nvr stream erişim sorunu", "nvr rtsp kanal adresi"]),
 ("rtsp-gecikme-sorunu", "RTSP görüntü gecikmesi (latency) nasıl azaltılır", ["rtsp gecikme", "ip kamera görüntü gecikmesi"]),
 ("kamera-goruntusu-donuyor", "IP kamera görüntüsü donuyor / kesiliyor", ["ip kamera görüntü donuyor", "rtsp kopuyor"]),
 ("ana-akis-alt-akis-substream", "Ana akış ve alt akış (main stream / substream) ayarları; yapay zekâ için hangisi", ["substream nedir", "main stream substream farkı"]),
 ("onvif-kullanici-yetki-sorunu", "ONVIF kullanıcı/yetki ve saat senkronu (NTP) sorunları", ["onvif yetki hatası", "onvif saat senkronizasyonu"]),
]
for s, t, k in TROUBLE: specs.append({"path": "/cctv-sorun-cozumleri/" + s, "type": "trouble", "title_hint": t, "kws": k})
specs.append({"path": "/sozluk", "type": "glossary", "title_hint": "CCTV ve yapay zekâ video analitiği sözlüğü",
  "kws": ["rtsp ile onvif farkı", "ai kamera kaç fps işlemeli", "edge ai mı merkezi gpu mu", "100 kameraya kaç gpu gerekir", "cctv ile davranış analizi nasıl çalışır", "substream", "roi nedir", "nesne tespit modeli nedir", "vlm nedir", "false positive nedir"]})
json.dump(specs, open(S + "/specs.json", "w", encoding="utf-8"), ensure_ascii=False)
print(len(specs))
