"""Görsel SEO: içerik görsellerini Türkçe anahtar kelimeli dosya adlarıyla /img/g/ altına kopyalar,
HTML'deki src/srcset yollarını yeni adlara çevirir ve sitemap-images.xml üretir."""
import os, re, glob, shutil
from xml.sax.saxutils import escape
SX = None  # build.py atar (load_mod ile yüklenen seo_extra)

SKIP = {"p2", "p3", "p4"}
NAME = {}  # eski anahtar -> yeni dosya kökü

def _slug(s, n=7):
    s = s.lower()
    for a, b in zip("çğıöşüâîû", "cgiosuaiu"): s = s.replace(a, b)
    w = [x for x in re.split(r"[^a-z0-9]+", s) if x and x not in ("ve", "ile", "bir", "the", "a", "of")]
    return "-".join(w[:n])

def _names():
    if NAME: return NAME
    used = set()
    for k, (tr, _en) in SX.ALT.items():
        if k in SKIP: continue
        n = _slug(tr)
        while n in used: n += "-2"
        used.add(n); NAME[k] = n; SX.REV[n] = k
    return NAME

def rewrite(html, root):
    names = _names()
    def rep(m):
        path = m.group(0)
        base = os.path.basename(path)[:-5]
        sm = base.endswith("-sm"); key = base[:-3] if sm else base
        if key not in names or "/img/g/" in path: return path
        src = os.path.join(root, path.lstrip("/"))
        if not os.path.exists(src): return path
        new = f"/img/g/{names[key]}{'-sm' if sm else ''}.webp"
        dst = os.path.join(root, new.lstrip("/"))
        if not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(src):
            os.makedirs(os.path.dirname(dst), exist_ok=True); shutil.copy2(src, dst)
        return new
    # yalnızca <img> src/srcset içindeki yollar (og:image, preload ve CSS arka planlarına dokunma)
    def tag(m):
        return re.sub(r"/?img/(?:[a-z0-9_-]+/)?[A-Za-z0-9_.-]+?\.webp", rep, m.group(0))
    return re.sub(r'<img\b[^>]*>|<link\b(?=[^>]*rel="preload")(?=[^>]*as="image")[^>]*>', tag, html)

def sitemap(root, site):
    rows = []
    for f in sorted(glob.glob(os.path.join(root, "**", "*.html"), recursive=True)):
        r = os.path.relpath(f, root).replace(os.sep, "/")
        if r.startswith(("_build", "src", "panel", "404", "sunum", "ig", "en/ig")) or r.endswith("/index.html") and r != "en/index.html": continue
        s = open(f, encoding="utf-8").read()
        if 'name="robots" content="noindex' in s: continue
        url = {"index.html": "/", "en/index.html": "/en/"}.get(r, "/" + r[:-5])
        imgs = []
        for src in re.findall(r'<img\b[^>]*?\bsrc="(/?img/[^"]+\.(?:webp|jpg|png))"', s):
            u = site + "/" + src.lstrip("/")
            if u not in imgs and "/brand/" not in u and "logo" not in u: imgs.append(u)
        if imgs:
            rows.append(f"<url><loc>{escape(site + url)}</loc>" + "".join(f"<image:image><image:loc>{escape(i)}</image:loc></image:image>" for i in imgs[:20]) + "</url>")
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' + "\n".join(rows) + "\n</urlset>\n"
    open(os.path.join(root, "sitemap-images.xml"), "w", encoding="utf-8").write(xml)
    return len(rows)
