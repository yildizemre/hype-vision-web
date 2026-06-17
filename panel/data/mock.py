"""Panel demo verisi — panel.jpeg referans yapısına uygun."""
from __future__ import annotations

import random
from datetime import datetime
from typing import Any

USER = {"name": "Emre Yıldız", "role": "Müşteri Yöneticisi", "initials": "EY"}

SIDEBAR = [
    {
        "title": "Güvenlik",
        "links": [
            {"slug": "izleme", "label": "Canlı İzleme & Bildirimler", "icon": "video", "badge": 9},
            {"slug": "kameralar", "label": "Kamera Duvarı", "icon": "layout-grid"},
            {"slug": "yuz-tanima", "label": "Yüz Tanıma Girişi", "icon": "scan-face"},
        ],
    },
    {
        "title": "Personel",
        "links": [
            {"slug": "kisi-sayimi", "label": "Kişi Sayımı", "icon": "users"},
            {"slug": "hareket", "label": "Personel Hareket Takibi", "icon": "footprints"},
        ],
    },
    {
        "title": "Lojistik & Üretim",
        "links": [
            {"slug": "nesne-sayim", "label": "Nesne & Lojistik Sayımı", "icon": "package"},
            {"slug": "tir-yukleme", "label": "Tır Yükleme Takibi", "icon": "truck"},
        ],
    },
    {
        "title": "Raporlar",
        "links": [
            {"slug": "", "label": "Personel Verimlilik Detayı", "icon": "bar-chart-3"},
            {"slug": "bolge-verimlilik", "label": "Bölge Verimlilik Detayı", "icon": "map-pin"},
            {"slug": "bolge-varlik", "label": "Bölge Varlık Analizi", "icon": "layers"},
        ],
    },
    {
        "title": "Yönetim",
        "links": [
            {"slug": "performans", "label": "Performans Değerlendirme", "icon": "trophy"},
            {"slug": "ayarlar", "label": "Ayarlar", "icon": "settings"},
        ],
    },
]

ALARM_TYPES = [
    {"key": "all", "label": "Tümü"},
    {"key": "KKD", "label": "KKD"},
    {"key": "Yangın", "label": "Yangın / ISG"},
    {"key": "Güvenlik", "label": "Güvenlik"},
    {"key": "Personel", "label": "Personel"},
    {"key": "Lojistik", "label": "Lojistik"},
    {"key": "Düşme", "label": "Düşme"},
    {"key": "Hırsızlık", "label": "Hırsızlık"},
]

ALARMS = [
    {
        "id": 1, "type": "KKD", "title": "Baret eksik — kaynak alanı",
        "camera": "Kamera 02 · Kaynak", "zone": "Üretim / Hat B",
        "time": "08:42", "elapsed": "6 dk önce", "severity": "high",
        "status": "open", "confidence": 94,
        "icon": "hard-hat", "assignee": None, "is_new": True,
        "desc": "AI modeli baret tespiti yapamadı. Personel kaynak istasyonunda aktif.",
        "module": "KKD Algılama", "subject": "Personel #2841",
    },
    {
        "id": 2, "type": "Yangın", "title": "Duman algılandı — elektrik panosu",
        "camera": "Kamera 06 · Elektrik panosu", "zone": "Teknik / Pano odası",
        "time": "09:15", "elapsed": "12 dk önce", "severity": "critical",
        "status": "investigating", "confidence": 97,
        "icon": "flame", "assignee": "Ahmet K.", "is_new": False,
        "desc": "Isı ve duman sensörü eşiği aşıldı. Acil müdahale ekibi yönlendirildi.",
    },
    {
        "id": 3, "type": "Güvenlik", "title": "Yetkisiz alan girişi",
        "camera": "Kamera 04 · Koridor", "zone": "Güvenlik / Kısıtlı bölge",
        "time": "10:03", "elapsed": "18 dk önce", "severity": "high",
        "status": "open", "confidence": 89,
        "icon": "shield-alert", "assignee": None, "is_new": True,
        "desc": "Tanınmayan kişi kırmızı bölgeye girdi. Yüz tanıma eşleşmesi yok.",
    },
    {
        "id": 4, "type": "Personel", "title": "Idle eşiği aşıldı — 14 dk",
        "camera": "Kamera 08 · Hat A", "zone": "Üretim / Hat A",
        "time": "11:27", "elapsed": "4 dk önce", "severity": "medium",
        "status": "open", "confidence": 91,
        "icon": "user-x", "assignee": None, "is_new": True,
        "desc": "Personel 14 dakikadır hareketsiz. Vardiya hedefi %12 altında.",
    },
    {
        "id": 5, "type": "Lojistik", "title": "Sayım sapması — sevkiyat",
        "camera": "Kamera 01 · Sevkiyat", "zone": "Lojistik / Rampalar",
        "time": "12:44", "elapsed": "22 dk önce", "severity": "medium",
        "status": "open", "confidence": 86,
        "icon": "package-x", "assignee": "Selin D.", "is_new": False,
        "desc": "Beklenen palet sayısı 48, tespit edilen 41. Sapma %14.6.",
    },
    {
        "id": 6, "type": "KKD", "title": "Koruyucu gözlük eksik",
        "camera": "Kamera 03 · Depo", "zone": "Depo / Seviye 2",
        "time": "13:08", "elapsed": "35 dk önce", "severity": "medium",
        "status": "resolved", "confidence": 92,
        "icon": "glasses", "assignee": "Mehmet Y.", "is_new": False,
        "desc": "Gözlük ihlali tespit edildi, personel uyarıldı ve düzeltildi.",
    },
    {
        "id": 7, "type": "Düşme", "title": "Anormal duruş — rampa",
        "camera": "Kamera 05 · Rampa", "zone": "Lojistik / Rampa 3",
        "time": "14:51", "elapsed": "1 dk önce", "severity": "critical",
        "status": "investigating", "confidence": 88,
        "icon": "accessibility", "assignee": "Ahmet K.", "is_new": True,
        "desc": "Pose analizi düşme veya bayılma ihtimali. İSG ekibi bilgilendirildi.",
    },
    {
        "id": 8, "type": "Hırsızlık", "title": "Şüpheli paket hareketi",
        "camera": "Kamera 07 · Depo çıkış", "zone": "Depo / Çıkış kapısı",
        "time": "14:58", "elapsed": "Az önce", "severity": "high",
        "status": "open", "confidence": 83,
        "icon": "eye-off", "assignee": None, "is_new": True,
        "desc": "Yetkisiz bölgede paket taşınması. Kamera kaydı kilitlendi.",
    },
    {
        "id": 9, "type": "Yangın", "title": "Ateş kaynağı — atölye",
        "camera": "Kamera 09 · Atölye", "zone": "Üretim / Atölye",
        "time": "15:02", "elapsed": "Az önce", "severity": "critical",
        "status": "open", "confidence": 95,
        "icon": "flame", "assignee": None, "is_new": True,
        "desc": "Açık alev tespiti. Otomatik sprinkler devreye alındı.",
    },
]

ALARM_STATS = [
    {"label": "Açık Alarm", "value": "7", "color": "#ef4444", "icon": "bell"},
    {"label": "Kritik", "value": "3", "color": "#f97316", "icon": "alert-triangle"},
    {"label": "Bugün Çözülen", "value": "12", "color": "#22c55e", "icon": "check-circle"},
    {"label": "Ort. Yanıt Süresi", "value": "4.2 dk", "color": "#00cadc", "icon": "timer"},
]

ALARM_HOURLY = {
    "labels": ["08", "09", "10", "11", "12", "13", "14", "15"],
    "data": [2, 4, 3, 5, 2, 4, 6, 8],
}

STREAM_TEMPLATES = [
    ("KKD", "Eldiven eksik", "Kamera 11 · Montaj", "medium", "hand"),
    ("Personel", "Mola süresi aşıldı", "Kamera 08 · Hat A", "low", "coffee"),
    ("Güvenlik", "Kapı zorla açıldı", "Kamera 04 · Koridor", "high", "door-open"),
    ("Lojistik", "Palet düşmesi", "Kamera 01 · Sevkiyat", "medium", "package"),
    ("KKD", "Yansıtıcı yelek eksik", "Kamera 12 · Dış saha", "medium", "vest"),
    ("Yangın", "Isı artışı", "Kamera 06 · Pano", "critical", "thermometer"),
]

LIVE_LOG = [
    ("success", "Kamera 12 bağlantı başarılı"),
    ("warn", "AI modeli v2.3 güncellendi"),
    ("info", "Yeni alarm: KKD ihlali — Kamera 02"),
    ("success", "Verimlilik raporu otomatik oluşturuldu"),
    ("info", "Vardiya 2 aktif — 15 personel tanındı"),
    ("warn", "Alarm #7 — Düşme tespiti, ISG bilgilendirildi"),
    ("info", "Kamera 05 kaydı arşivlendi"),
]

HOURLY_ROWS = [
    {"hour": "07:00", "productive": 42, "idle": 8, "break": 10, "off": 0, "target": 45, "productivity": 93},
    {"hour": "08:00", "productive": 48, "idle": 5, "break": 7, "off": 0, "target": 50, "productivity": 96},
    {"hour": "09:00", "productive": 44, "idle": 10, "break": 6, "off": 0, "target": 48, "productivity": 92},
    {"hour": "10:00", "productive": 38, "idle": 12, "break": 8, "off": 2, "target": 46, "productivity": 83},
    {"hour": "11:00", "productive": 41, "idle": 9, "break": 10, "off": 0, "target": 47, "productivity": 87},
    {"hour": "12:00", "productive": 35, "idle": 6, "break": 19, "off": 0, "target": 40, "productivity": 88},
    {"hour": "13:00", "productive": 46, "idle": 4, "break": 10, "off": 0, "target": 48, "productivity": 96},
    {"hour": "14:00", "productive": 43, "idle": 11, "break": 6, "off": 0, "target": 47, "productivity": 89},
    {"hour": "15:00", "productive": 40, "idle": 14, "break": 6, "off": 0, "target": 46, "productivity": 83},
    {"hour": "16:00", "productive": 45, "idle": 7, "break": 8, "off": 0, "target": 48, "productivity": 90},
    {"hour": "17:00", "productive": 36, "idle": 5, "break": 4, "off": 15, "target": 42, "productivity": 86},
]

SUMMARY = [
    {"label": "Verimli Çalışma", "value": "468 dk", "color": "#22c55e", "key": "productive"},
    {"label": "Boşta (Mola Hariç)", "value": "72 dk", "color": "#ef4444", "key": "idle"},
    {"label": "Onaylı Mola", "value": "68 dk", "color": "#f59e0b", "key": "break"},
    {"label": "Kamera Dışı", "value": "52 dk", "color": "#94a3b8", "key": "off"},
    {"label": "Hedefle Fark", "value": "-67 dk", "color": "#f87171", "key": "diff"},
]

LOCATIONS = ["Fabrika Ana Bina", "Depo Alanı", "Sevkiyat"]
CAMERAS_FILTER = ["Kamera 01 — Üretim Girişi", "Kamera 02 — Kaynak", "Kamera 08 — Hat A"]

ACTIVE_CAMERA = {
    "id": "CAM-03",
    "name": "Üretim #3",
    "location": "Fabrika Ana Bina · Hat B",
}

CAMERA_STRIP = [
    {"id": "CAM-01", "name": "Sevkiyat #1", "active": False},
    {"id": "CAM-02", "name": "Kaynak #2", "active": False},
    {"id": "CAM-03", "name": "Üretim #3", "active": True},
    {"id": "CAM-04", "name": "Koridor #4", "active": False},
    {"id": "CAM-05", "name": "Rampa #5", "active": False},
]

DETECTION_BOXES = [
    {"label": "LIFTER #11", "color": "blue", "top": 38, "left": 22, "w": 14, "h": 28},
    {"label": "Personel", "color": "yellow", "top": 42, "left": 48, "w": 8, "h": 22},
    {"label": "LIFTER #3", "color": "blue", "top": 55, "left": 62, "w": 11, "h": 20},
    {"label": "Personel", "color": "yellow", "top": 36, "left": 72, "w": 7, "h": 18},
]

DETECTION_TOGGLES = [
    {"key": "people", "label": "Kişi Tespiti", "on": True},
    {"key": "vehicles", "label": "Forklift / Araç", "on": True},
    {"key": "kkd", "label": "KKD Kontrolü", "on": True},
    {"key": "zones", "label": "Bölge İhlali", "on": False},
]

LIVE_ANALYTICS = {
    "people": {"count": 4, "color": "#eab308", "series": [2, 3, 3, 4, 4, 3, 4]},
    "lifters": {"count": 2, "color": "#3b82f6", "series": [1, 2, 2, 2, 1, 2, 2]},
    "focus": {"label": "LIFTER #11", "metric": "Çalışma süresi", "value": "1:21:11"},
}

TIMELINE_SEGMENTS = [
    {"start": 2, "width": 6, "type": "alert"},
    {"start": 10, "width": 18, "type": "movement"},
    {"start": 32, "width": 8, "type": "unknown"},
    {"start": 44, "width": 12, "type": "movement"},
    {"start": 58, "width": 5, "type": "alert"},
    {"start": 68, "width": 14, "type": "movement"},
    {"start": 85, "width": 10, "type": "norecord"},
]

TIMELINE_MARKERS = [12, 58, 74]

ACTIVITY_MODULES = {
    "KKD": "KKD Algılama",
    "Yangın": "ISG / Yangın",
    "Güvenlik": "Bölge Güvenliği",
    "Personel": "Aktivite Kontrolü",
    "Lojistik": "Nesne Sayımı",
    "Düşme": "Pose Analizi",
    "Hırsızlık": "Anomali Tespiti",
}

CAMERA_WALL = [
    {"id": "CAM-01", "name": "Üretim #1", "location": "Hat A", "status": "live", "activity": None},
    {"id": "CAM-02", "name": "Üretim #2", "location": "Hat B", "status": "live", "activity": None},
    {"id": "CAM-03", "name": "Üretim #3", "location": "Hat B", "status": "live", "activity": "3g 17s"},
    {"id": "CAM-04", "name": "Depo #1", "location": "Depo", "status": "live", "activity": None},
    {"id": "CAM-05", "name": "Depo #2", "location": "Depo", "status": "alert", "activity": "12dk"},
    {"id": "CAM-06", "name": "Sevkiyat #1", "location": "Sevkiyat", "status": "live", "activity": None},
    {"id": "CAM-07", "name": "Ofis #1", "location": "Ofis", "status": "offline", "activity": None},
    {"id": "CAM-08", "name": "Rampa #3", "location": "Lojistik", "status": "live", "activity": None},
]

_next_id = 100


def activity_feed() -> list[dict[str, Any]]:
    feed = []
    subjects = ["Alan Walker", "Amanda Lee", "LIFTER #11", "Personel #2841", "Forklift #3", "Mehmet Y.", "Selin D."]
    for i, a in enumerate(ALARMS):
        if a["status"] == "resolved" and i > 6:
            continue
        feed.append({
            **a,
            "module": ACTIVITY_MODULES.get(a["type"], a["type"]),
            "subject": subjects[i % len(subjects)],
            "location": a.get("zone", a["camera"].split("·")[0].strip()),
        })
    return feed


def open_alarm_count() -> int:
    return sum(1 for a in ALARMS if a["status"] in ("open", "investigating"))


def preview_alarms(limit: int = 5) -> list[dict[str, Any]]:
    open_list = [a for a in ALARMS if a["status"] != "resolved"]
    open_list.sort(key=lambda x: (0 if x["severity"] == "critical" else 1, x["id"]))
    return open_list[:limit]


def random_stream_alarm() -> dict[str, Any]:
    global _next_id
    tpl = random.choice(STREAM_TEMPLATES)
    _next_id += 1
    now = datetime.now()
    return {
        "id": _next_id,
        "type": tpl[0],
        "title": tpl[1],
        "camera": tpl[2],
        "zone": "Fabrika Ana Bina",
        "time": now.strftime("%H:%M"),
        "elapsed": "Az önce",
        "severity": tpl[3] if tpl[3] != "low" else "medium",
        "status": "open",
        "confidence": random.randint(82, 98),
        "icon": tpl[4],
        "assignee": None,
        "is_new": True,
        "desc": f"Canlı akıştan gelen {tpl[0]} bildirimi.",
        "module": ACTIVITY_MODULES.get(tpl[0], tpl[0]),
        "subject": random.choice(["Personel #2841", "Alan Walker", "LIFTER #11"]),
    }


def chart_stacked_hourly() -> dict[str, Any]:
    labels = [r["hour"] for r in HOURLY_ROWS]
    targets = [r["target"] for r in HOURLY_ROWS]
    return {
        "labels": labels,
        "datasets": [
            {"label": "Verimli", "data": [r["productive"] for r in HOURLY_ROWS], "color": "#22c55e"},
            {"label": "Boşta", "data": [r["idle"] for r in HOURLY_ROWS], "color": "#ef4444"},
            {"label": "Mola", "data": [r["break"] for r in HOURLY_ROWS], "color": "#f59e0b"},
            {"label": "Kamera dışı", "data": [r["off"] for r in HOURLY_ROWS], "color": "#64748b"},
        ],
        "target": targets,
    }


def verimlilik_context() -> dict[str, Any]:
    return {
        "title": "Personel Verimlilik Detayı",
        "subtitle": "Bölgesel verimlilik, personel hareketleri ve saatlik dağılım",
        "summary": SUMMARY,
        "hourly": HOURLY_ROWS,
        "chart": chart_stacked_hourly(),
        "locations": LOCATIONS,
        "cameras": CAMERAS_FILTER,
        "live_log": LIVE_LOG,
        "status": {"cameras": "20/30", "personnel": "15/45"},
    }


def izleme_context() -> dict[str, Any]:
    return {
        "title": "Üretim #3",
        "subtitle": "Canlı kamera · AI katman · olay zaman çizgisi",
        "layout": "monitor",
        "active_camera": ACTIVE_CAMERA,
        "camera_strip": CAMERA_STRIP,
        "boxes": DETECTION_BOXES,
        "toggles": DETECTION_TOGGLES,
        "analytics": LIVE_ANALYTICS,
        "timeline": TIMELINE_SEGMENTS,
        "timeline_markers": TIMELINE_MARKERS,
        "activities": activity_feed(),
        "live_log": LIVE_LOG,
        "status": {"cameras": "20/30", "personnel": "15/45"},
    }


def kameralar_context() -> dict[str, Any]:
    return {
        "title": "Kamera Duvarı",
        "subtitle": "Tüm lokasyonlar · canlı durum · hızlı geçiş",
        "layout": "cameras",
        "cameras_wall": CAMERA_WALL,
        "live_log": LIVE_LOG,
        "status": {"cameras": "20/30", "personnel": "15/45"},
    }


def alarmlar_context() -> dict[str, Any]:
    return izleme_context()


def nesne_context() -> dict[str, Any]:
    return {
        "title": "Nesne & Lojistik Sayımı",
        "subtitle": "Hat bazlı sayım, fire ve anlık sapma",
        "lines": [
            {"name": "Hat A · Paketleme", "count": 1087, "target": 1200, "defect": 14},
            {"name": "Hat B · Montaj", "count": 902, "target": 860, "defect": 6},
            {"name": "Hat C · Besleme", "count": 2311, "target": 2400, "defect": 22},
        ],
        "live_log": LIVE_LOG,
    }


def generic_context(title: str, subtitle: str) -> dict[str, Any]:
    return {"title": title, "subtitle": subtitle, "live_log": LIVE_LOG, "placeholder": True}
