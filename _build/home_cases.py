"""Ana sayfadaki 'Vaka çalışmaları' kartlarını content.json'dan yeniden üretir (ilk 6, ORDER sırasıyla)."""
import re, json, html, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
E = html.escape
ORDER = ["harman", "400-kamera", "kaynak", "tekstil", "tir-yukleme", "fuar", "acik-alan-duman", "islak-mendil", "darbogaz", "medikal", "isg", "kalite", "tekstil", "gida", "lojistik"]
CIMG = {"400-kamera": "img/vaka/kkd-depo.webp", "tir-yukleme": "img/vaka/tir-1.webp", "fuar": "img/vaka/fuar-1.webp", "acik-alan-duman": "img/vaka/duman.webp", "harman": "img/vaka/kkd-depo.webp", "islak-mendil": "img/vaka/mendil-ocr.webp", "darbogaz": "img/vaka/darbogaz.webp", "kaynak": "img/vaka/kaynak-1.webp", "medikal": "img/vaka/med-ok.webp", "gida": "img/vaka/gida-idle.webp",
        "isg": "img/det-kkd.webp", "kalite": "img/det-cnc.webp", "tekstil": "img/vaka/tekstil-bant.webp", "lojistik": "img/det-forklift.webp"}
D = json.load(open(os.path.join(ROOT, "content.json"), encoding="utf-8"))
cases = [x for x in D["pages"] if x["path"].startswith("/vaka-calismalari/")]
cases = sorted(cases, key=lambda x: next((i for i, k in enumerate(ORDER) if k in x["path"]), 99))[:6]
ci = lambda p: next((v for k, v in CIMG.items() if k in p), "img/det-hat.webp")
def badge(c):
    m = re.search(r"\d+\+|%\s?\d+[.,]?\d*", c["title"]); return m.group(0).replace(" ", "") if m else ""
cards = "".join(f'<a class="vk rv" href="{c["path"]}"><div class="im"><img src="{ci(c["path"])}" alt="" loading="lazy">{f"<b>{badge(c)}</b>" if badge(c) else ""}</div><div class="bd"><small>Vaka çalışması</small><h4>{E(c["title"])}</h4><p>{E(c["desc"][:140])}…</p></div></a>' for c in cases)
p = os.path.join(ROOT, "index.html"); h = open(p, encoding="utf-8").read()
h = re.sub(r'<div class="vks">.*?</div>\n  </div>\n</section>', lambda m: f'<div class="vks">{cards}</div>\n  </div>\n</section>', h, count=1, flags=re.S)
open(p, "w", encoding="utf-8").write(h); print("cards:", len(cases))
