# Hype Vision — Operasyon Paneli

Müşteriye verilen web panel (Flask demo). Mockup kopyası değil — **iş akışına göre** tasarlandı.

## Çalıştır

```bash
cd panel
pip install -r requirements.txt
python app.py
```

http://127.0.0.1:5050

## Mantık (neden böyle?)

| Sayfa | Müşteri ne yapar? |
|-------|-------------------|
| **Komuta Merkezi** | Vardiyaya bakar: acil kuyruk + hat durumu + canlı akış |
| **Olay Kutusu** | Tüm modüller tek inbox — filtrele, kapat |
| **İSG & Güvenlik** | KKD, yangın, düşme, hırsızlık — tek yerde |
| **Üretim Hatları** | Hat A/B/C sayım, fire, hedef |
| **Personel** | İstasyon haritası, yüz tanıma, masa/idle |
| **Kameralar** | RTSP sağlık, FPS, günlük olay |
| **Ayarlar** | Eşik, bildirim, rol |

Gerçek API bağlanınca `data/mock.py` yerine servis katmanı gelir.
