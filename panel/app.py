from flask import Flask, Response, jsonify, render_template, stream_with_context
import json
import random
import time

from data.mock import (
    ALARMS,
    SIDEBAR,
    USER,
    generic_context,
    izleme_context,
    kameralar_context,
    nesne_context,
    open_alarm_count,
    preview_alarms,
    random_stream_alarm,
    verimlilik_context,
)

app = Flask(__name__)

ROUTES = {
    "": ("verimlilik.html", verimlilik_context),
    "izleme": ("izleme.html", izleme_context),
    "alarmlar": ("izleme.html", izleme_context),
    "kameralar": ("kameralar.html", kameralar_context),
    "yuz-tanima": ("placeholder.html", lambda: generic_context("Yüz Tanıma Girişi", "Tanınan personel giriş/çıkış kayıtları")),
    "kisi-sayimi": ("placeholder.html", lambda: generic_context("Kişi Sayımı", "Bölge bazlı anlık kişi sayımı")),
    "hareket": ("placeholder.html", lambda: generic_context("Personel Hareket Takibi", "Heatmap ve rota analizi")),
    "nesne-sayim": ("nesne-sayim.html", nesne_context),
    "tir-yukleme": ("placeholder.html", lambda: generic_context("Tır Yükleme Takibi", "Rampada yükleme süresi ve sayım")),
    "bolge-verimlilik": ("placeholder.html", lambda: generic_context("Bölge Verimlilik Detayı", "Bölge karşılaştırmalı verimlilik")),
    "bolge-varlik": ("placeholder.html", lambda: generic_context("Bölge Varlık Analizi", "Varlık yoğunluğu ve kalış süresi")),
    "performans": ("placeholder.html", lambda: generic_context("Performans Değerlendirme", "Vardiya ve personel skorları")),
    "ayarlar": ("placeholder.html", lambda: generic_context("Ayarlar", "Kamera, eşik ve kullanıcı yönetimi")),
}


@app.context_processor
def inject():
    return {
        "sidebar": SIDEBAR,
        "user": USER,
        "header_alarms": preview_alarms(5),
        "open_alarm_count": open_alarm_count(),
    }


@app.route("/api/alarms")
def api_alarms():
    return jsonify(ALARMS)


@app.route("/api/stream")
def api_stream():
    def generate():
        while True:
            alarm = random_stream_alarm()
            ALARMS.insert(0, alarm)
            payload = json.dumps({"type": "alarm", "data": alarm}, ensure_ascii=False)
            yield f"data: {payload}\n\n"
            time.sleep(random.uniform(12, 22))

    return Response(
        stream_with_context(generate()),
        mimetype="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@app.route("/")
def home():
    ctx = verimlilik_context()
    return render_template("verimlilik.html", **ctx, active="")


@app.route("/<slug>")
def page(slug: str):
    if slug not in ROUTES:
        return render_template("404.html"), 404
    tpl, fn = ROUTES[slug]
    active_slug = "izleme" if slug == "alarmlar" else slug
    return render_template(tpl, **fn(), active=active_slug)


if __name__ == "__main__":
    app.run(debug=True, port=5050)
