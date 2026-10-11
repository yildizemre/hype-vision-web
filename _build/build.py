"""Site üretici (TR + EN).
Kullanım (site kökünden):  python -I _build/build.py
- index.html (TR ana sayfa) elle düzenlenir; EN ana sayfa (en/index.html) i18n.py sözlüğüyle buradan üretilir.
- Alt sayfalar content.json'dan (eski siteden çekilen metinler) üretilir.
- SEO: canonical, hreflang, Open Graph, JSON-LD, sitemap.xml, robots.txt, _redirects, 404.html."""
import json, os, re, html, glob, shutil, importlib.util, datetime
from bs4 import BeautifulSoup, Comment

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://hypevisionlab.com"
E = html.escape
D = json.load(open(os.path.join(ROOT, "content.json"), encoding="utf-8"))

def load_mod(name):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, "_build", name + ".py"))
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m
I18N = load_mod("i18n")
EN_OF = I18N.en_map(D)                       # TR yolu -> EN yolu
TR_OF = {v: k for k, v in EN_OF.items()}     # EN yolu -> TR yolu
U = I18N.UI

# ------------------------------------------------------------------ içerik kümeleri
SOLS = list(D["solutions"])
SECS = [p for p in D["sectors"] if "banka" not in p["path"]]
PAGES = [p for p in D.get("pages", []) if p["path"] not in ("/sss", "/blog", "/vaka-calismalari")]
def _auto_guides():
    """Lead paneli (lead.hypevisionlab.com) 'Yayınla' ile src/data/guides/auto/<slug>.json yazar (eski siteyle aynı Guide formatı)."""
    out = []
    md = lambda s: re.sub(r"\*\*(.+?)\*\*", r"", re.sub(r"\[([^\]]+)\]\([^)]+\)", r"", s))
    for f in sorted(glob.glob(os.path.join(ROOT, "src", "data", "guides", "auto", "*.json"))):
        try:
            g = json.load(open(f, encoding="utf-8"))
            if g.get("lang", "tr") != "tr" or not g.get("slug"): continue
            secs, cur = [], None
            for b in g.get("blocks", []):
                t = b.get("type")
                if t == "h2":
                    cur = {"h": md(b["text"]), "p": [], "li": [], "cards": [], "rows": []}; secs.append(cur); continue
                if cur is None:
                    cur = {"h": g["title"], "p": [], "li": [], "cards": [], "rows": []}; secs.append(cur)
                if t in ("p", "note"): cur["p"].append(md(b["text"]))
                elif t == "h3": cur["p"].append("### " + md(b["text"]))
                elif t in ("ul", "ol"): cur["li"] += [md(x) for x in b["items"]]
                elif t == "table": cur["rows"] = [b["head"]] + b["rows"]
            out.append({"path": "/blog/" + g["slug"], "title": g["title"], "desc": g.get("metaDescription") or g.get("excerpt", ""), "date": g.get("isoDate", ""),
                        "intro": [g.get("excerpt", "")], "specs": [], "sections": secs, "faq": g.get("faq", []), "links": [], "auto": True})
        except Exception as e:
            print("auto guide atlandı:", os.path.basename(f), e)
    return out
_have = {p["path"] for p in PAGES}
PAGES += [g for g in _auto_guides() if g["path"] not in _have]
BLOGS = sorted([p for p in PAGES if p["path"].startswith("/blog/")], key=lambda p: p.get("date", ""), reverse=True)
CASES = [p for p in PAGES if p["path"].startswith("/vaka-calismalari/")]
EG = next(p for p in D["extra"] if p["path"] == "/endustriyel-goruntu-isleme")
COMPANY = ["/hakkimizda", "/kariyer", "/yasal", "/is-ortakligi", "/gizlilik-politikasi", "/hizmet-sartlari", "/cerez-politikasi"]
TR_LOCAL = {p["path"] for p in SOLS + SECS + PAGES} | {"/", "/cozumler", "/sektorler", "/sss", "/endustriyel-goruntu-isleme", "/blog", "/vaka-calismalari"} | set(COMPANY) | {"/katalog", "/ig"}
# EN'de üretilecek sayfalar: TR karşılığı olan ve İngilizce metni bulunanlar + sabit dizin/şirket sayfaları
def en_page(tr):
    pg = D.get("en", {}).get(tr)
    return pg if pg else None
EN_LOCAL = {"/en"} | {EN_OF[t] for t in TR_LOCAL if t in EN_OF and (en_page(t) or t in I18N.FIXED)}
FALLBACK = {"/pilot": "#iletisim", "/kamera-degerlendirme": "#iletisim", "/iletisim": "#iletisim", "/katalog": "/cozumler/"}
EN_FALLBACK = {"/en/pilot": "/en/#iletisim", "/en/camera-assessment": "/en/#iletisim", "/en/contact": "/en/#iletisim"}

def norm(p):
    return (p.split("#")[0].split("?")[0].rstrip("/") or "/")

def slash(p):
    """Eski siteyle aynı URL politikası: sonda / yok (yalnızca / ve /en/ hariç)."""
    p = norm(p)
    return {"/": "/", "/en": "/en/"}.get(p, p)

def link(href, lang="tr"):
    """Site içi yol -> üretilmiş sayfa yolu (yoksa None)."""
    if "banka" in href or "/banking" in href: return None
    base = norm(href)
    if lang == "tr":
        if base in TR_LOCAL: return slash(base)
        if base in FALLBACK: return "/" + FALLBACK[base] if FALLBACK[base].startswith("#") else FALLBACK[base]
        if base.startswith("/en"): return slash(TR_OF[base]) if base in TR_OF else None
        return None
    # en
    if base.startswith("/en"):
        if base in EN_LOCAL: return slash(base)
        if base in EN_FALLBACK: return EN_FALLBACK[base]
        if base in TR_OF and TR_OF[base] in EN_OF and EN_OF[TR_OF[base]] in EN_LOCAL: return slash(EN_OF[TR_OF[base]])
        return None
    if base in EN_OF and EN_OF[base] in EN_LOCAL: return slash(EN_OF[base])
    if base == "/": return "/en/"
    return None

def alt_of(path, lang):
    """Sayfanın diğer dildeki karşılığı (yoksa o dilin ana sayfası)."""
    base = norm(path)
    if lang == "tr":
        e = EN_OF.get(base)
        return slash(e) if e and e in EN_LOCAL else None
    t = TR_OF.get(base)
    return slash(t) if t else "/"

# ------------------------------------------------------------------ görseller
IMG = [
    ("sektor/imalat|industries/manufacturing", "/img/sektor/imalat.webp"), ("depo-lojistik|industries/logistics", "/img/sektor/lojistik.webp"),
    ("perakende|industries/retail", "/img/sektor/perakende.webp"), ("sektor/restoran|industries/restaurants", "/img/sektor/restoran.webp"),
    ("sektor/otel|industries/hospitality", "/img/sektor/otel.webp"), ("insaat|industries/construction", "/img/sektor/insaat.webp"),
    ("kuyumculuk|jewelry", "/img/sektor/kuyumculuk.webp"), ("sektor/tekstil|industries/textile", "/img/sektor/tekstil.webp"),
    ("otomotiv|industries/automotive", "/img/sektor/otomotiv.webp"), ("sektor/gida|industries/food", "/img/sektor/gida.webp"), ("sektor/metal|industries/metal", "/img/sektor/imalat.webp"),
    ("medikal|medical", "/img/vaka/med-ok.webp"), ("gida-hattinda", "/img/vaka/gida-idle.webp"), ("harman-stok|stockyard", "/img/vaka/harman-1.webp"), ("islak-mendil|wet-wipes", "/img/vaka/mendil-ocr.webp"), ("darbogaz|bottleneck", "/img/vaka/darbogaz.webp"), ("tekstil-hat-a", "/img/vaka/tekstil-bant.webp"), ("tir-yukleme|truck-loading", "/img/vaka/tir-1.webp"), ("fuar|trade-fair", "/img/vaka/fuar-1.webp"), ("acik-alan-duman|outdoor-smoke", "/img/vaka/duman.webp"), ("400-kamera", "/img/vaka/kkd-depo.webp"), ("kaynak-atolyesi|welding-shop", "/img/vaka/kaynak-1.webp"),
    ("kkd|baret|ppe", "/img/det-kkd.webp"), ("forklift|palet|depo|lojistik|logistics", "/img/det-forklift.webp"),
    ("oee|verimlilik|personel|urun-sayimi|tekstil-hat|production|workforce|counting", "/img/det-hat.webp"),
    ("kalite|yuzey|anomali|fire|metal|otomotiv|quality|anomaly", "/img/det-cnc.webp"),
    ("yogunluk|nesne|kisi-sayma|50-100|imalat|cctv|manufacturing|occupancy|tracking|people", "/img/det-kusbakisi.webp"),
    ("yasakli|restricted", "/img/d/yasaklialan.webp"), ("dusme|fall", "/img/02b-dusme-sonra.webp"), ("yangin|fire-smoke", "/img/03b-yangin-sonra.webp"),
    ("kuyruk|perakende|queue|retail", "/img/d/kofte2.webp"), ("kvkk|gizlilik", "/img/00-genel.webp"),
    ("onvif|endustriyel|rtsp|ip-kamera|kamera-acisi|edge|industrial", "/img/01-kusbakisi.webp"),
    ("is-guvenligi", "/img/08-kkd.webp"), ("nedir|firmasi|makine|dogruluk|pilot|video|accuracy", "/img/06-cnc-istasyon.webp"),
    ("restoran|otel|restaurant|hospitality", "/img/otel-servis.webp"), ("insaat|construction", "/img/d/baretmaske.webp"),
    ("kuyumculuk|jewelry", "/img/06-cnc-istasyon.webp"), ("tekstil|textile", "/img/d/utu-bant1.webp"), ("gida|food", "/img/d/kumes2.webp"),
]
def img_for(path):
    for k, v in IMG:
        if re.search(k, path): return v
    return "/img/00-genel.webp"

def short(t, n=150):
    return t if len(t) <= n else t[:n].rsplit(" ", 1)[0] + "…"

# ------------------------------------------------------------------ EN ana sayfa üretimi
def build_en_home():
    tr = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    soup = BeautifulSoup(tr, "html.parser")
    soup.html["lang"] = "en"
    miss = []
    for s in soup.find_all(string=True):
        if isinstance(s, Comment) or s.parent.name in ("script", "style"): continue
        t = s.strip()
        if not t: continue
        if t in I18N.T: s.replace_with(s.replace(t, I18N.T[t]))
        elif re.search(r"[çğıöşüÇĞİÖŞÜ]", t) and not s.find_parent(class_=["vk", "hfaq"]) and "Bilişim Vadisi" not in t: miss.append(t)
    for el in soup.find_all(attrs={"placeholder": True}):
        el["placeholder"] = I18N.T.get("PH:" + el["placeholder"], el["placeholder"])
    md = soup.find("meta", attrs={"name": "description"})
    if md: md["content"] = I18N.T.get("META:" + md["content"], md["content"])
    # vaka kartları ve SSS'yi İngilizce içerikle yeniden kur
    for a in soup.select("a.vk"):
        tr_path = norm(a["href"]); en = en_page(tr_path)
        if en:
            a.select_one("h4").string = en["title"]; a.select_one("p").string = short(en["desc"], 140)
            a.select_one("small").string = "Case study"
    egen = en_page("/endustriyel-goruntu-isleme")
    box = soup.select_one(".hfaq")
    if box and egen and egen["faq"]:
        box.clear()
        for f in egen["faq"]:
            box.append(BeautifulSoup(f"<details><summary>{E(f['q'])}</summary><p>{E(f['a'])}</p></details>", "html.parser"))
    # linkler
    BLOG_FIX = {"/blog/yapay-zeka-ile-is-guvenligi": "/blog/cctv-ile-baret-tespiti", "/blog/kvkk-kamera-yapay-zeka": "/blog/edge-ai-ve-cloud-ai-farki"}
    for a in soup.find_all("a", href=True):
        h = a["href"]
        if h.startswith("#"): continue
        if h.startswith("/") and not h.startswith("//"):
            b = BLOG_FIX.get(norm(h), h)
            if a.get("hreflang") == "en":
                a["href"] = "/"; a["hreflang"] = "tr"; a["aria-label"] = "Türkçe"; continue
            if norm(b) == "/": a["href"] = "/en/"; continue
            if b.startswith("/#"): a["href"] = "/en/" + b[1:]; continue
            a["href"] = link(b, "en") or "/en/#iletisim"
    WA_EN = ('https://wa.me/905412609190?text=Merhaba%2C%20bilgi%20almak%20istiyorum.', 'https://wa.me/905412609190?text=Hello%2C%20I%27d%20like%20to%20get%20more%20information.')
    out = str(soup).replace(WA_EN[0], WA_EN[1]).replace('https://wa.me/905412609190?text=Merhaba%2C%20bilgi%20almak%20istiyorum.', 'https://wa.me/905412609190?text=Hello%2C%20I%27d%20like%20to%20get%20more%20information.').replace('<span class="on">TR</span><span>EN</span>', '<span>TR</span><span class="on">EN</span>')
    out = re.sub(r"<script>/\* varsayılan dil.*?</script>", "", out, flags=re.S)
    for a, b in I18N.JS: out = out.replace(a, b)
    out = re.sub(r"const QA=\[.*?\n\];", lambda m: I18N.QA_EN, out, count=1, flags=re.S)
    out = out.replace('src="img/', 'src="/img/').replace("'img/", "'/img/").replace('src="hypevisionlogo', 'src="/hypevisionlogo')
    out = out.replace("Uyum son 6 ayda", "Compliance rose").replace("'ya yükseldi", "")
    S = "https://hypevisionlab.com"
    out = out.replace(f'<link rel="canonical" href="{S}/">', f'<link rel="canonical" href="{S}/en/">')
    out = out.replace("/img/og-tr.jpg", "/img/og-en.jpg").replace("Yapay zekânın gücü, kameralarınızda.", "The power of AI, in your cameras.")
    out = out.replace('<meta property="og:locale" content="tr_TR">', '<meta property="og:locale" content="en_US">').replace(f'<meta property="og:url" content="{S}/">', f'<meta property="og:url" content="{S}/en/">')
    out = out.replace('content="Hype Vision — Kameralarınız için Yapay Zekâ"', 'content="Hype Vision — AI for Your Existing Cameras"')
    out = out.replace('content="Mevcut kameralarınızla 7/24 İSG, kalite ve verimlilik denetimi. Marka fark etmez, KVKK uyumlu."', 'content="24/7 safety, quality and productivity monitoring with the cameras you already have. Brand-agnostic and privacy-compliant."')
    if egen and egen["faq"]:
        out = re.sub(r'\{"@type": "FAQPage".*?\]\}\]\}', lambda m: json.dumps({"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": f["q"], "acceptedAnswer": {"@type": "Answer", "text": f["a"]}} for f in egen["faq"]]}, ensure_ascii=False) + "]}", out, count=1, flags=re.S)
    os.makedirs(os.path.join(ROOT, "en"), exist_ok=True)
    open(os.path.join(ROOT, "en", "index.html"), "w", encoding="utf-8").write(out)
    return miss

# ------------------------------------------------------------------ şablon parçaları
def parts(lang):
    src = open(os.path.join(ROOT, "index.html" if lang == "tr" else "en/index.html"), encoding="utf-8").read()
    style = re.search(r"<style>.*?</style>", src, re.S).group(0)
    header = re.search(r'<header class="hvnav".*?</header>', src, re.S).group(0)
    footer = re.search(r"<footer.*?</footer>", src, re.S).group(0)
    fonts = re.search(r'<link[^>]*preconnect[^>]*>.*?<link[^>]*stylesheet[^>]*>', src, re.S).group(0)
    formjs = re.search(r"/\* forms \(.*?\n(?=\n/\* misc)", src, re.S)
    home = "/" if lang == "tr" else "/en/"
    fix = lambda s: re.sub(r'href="#', f'href="{home}#', re.sub(r'src="(img/|hypevisionlogo|logo-light)', r'src="/\1', s))
    sj = re.search(r"/\* dil değişince aynı yerde kal \*/.*?\}\)\(\);", src, re.S)
    return {"style": style, "header": fix(header), "footer": fix(footer), "fonts": fonts, "formjs": formjs.group(0) if formjs else "", "scrolljs": sj.group(0).replace("{", "{").replace("}", "}") if sj else ""}
P = {}

PAGE_CSS = open(os.path.join(ROOT, "_build", "page.css"), encoding="utf-8").read() if os.path.exists(os.path.join(ROOT, "_build", "page.css")) else ""

ORG = {"@type": "Organization", "@id": SITE + "/#org", "name": "Hype Vision", "legalName": "Hype Teknoloji", "alternateName": "HypeVision",
       "url": SITE + "/", "logo": SITE + "/img/logo-dark.png", "email": "info@hypevisionlab.com", "telephone": "+90 541 260 91 90",
       "foundingDate": "2020", "sameAs": ["https://www.instagram.com/hypevisionlab/", "https://www.linkedin.com/company/hypevisionlab", "https://www.wikidata.org/wiki/Q141702105"],
       "address": {"@type": "PostalAddress", "streetAddress": "Bilişim Vadisi, Muallimköy, Deniz Cd. No:143-5", "addressLocality": "Gebze",
                   "addressRegion": "Kocaeli", "postalCode": "41400", "addressCountry": "TR"}}

SITEMAP = []  # (loc, alt_tr, alt_en)

def shell(title, desc, body, path, lang="tr", faq=None, crumbs=None, kind="page", image=None, date=None, items_ld=None):
    pp = P[lang]
    path = slash(norm(path))
    alt = alt_of(path, lang)
    tr_url, en_url = (path, alt) if lang == "tr" else (alt, path)
    hl = ""
    if tr_url and en_url:
        hl = f'<link rel="alternate" hreflang="tr" href="{SITE}{tr_url}">\n<link rel="alternate" hreflang="en" href="{SITE}{en_url}">\n<link rel="alternate" hreflang="x-default" href="{SITE}{en_url}">'
    SITEMAP.append((path, tr_url if (tr_url and en_url) else None, en_url if (tr_url and en_url) else None))
    if path != "/404": LLMS.append((lang, title, path, desc, kind))
    header = pp["header"].replace('class="hvlang" href="/en/"', f'class="hvlang" href="{alt or "/en/"}"').replace('class="hvlang" href="/"', f'class="hvlang" href="{alt or "/"}"')
    img = SITE + ("/img/og-tr.jpg" if lang == "tr" else "/img/og-en.jpg")
    graph = [ORG, {"@type": "WebPage", "@id": SITE + path, "url": SITE + path, "name": title, "description": desc, "inLanguage": "tr-TR" if lang == "tr" else "en", "isPartOf": {"@id": SITE + "/#site"}}]
    if crumbs:
        graph.append({"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + u} for i, (n, u) in enumerate(crumbs)]})
    if faq:
        graph.append({"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": f["q"], "acceptedAnswer": {"@type": "Answer", "text": f["a"]}} for f in faq]})
    if kind == "sol":
        graph.append({"@type": "Service", "name": title, "description": desc, "serviceType": "Computer vision / video analytics", "provider": {"@id": SITE + "/#org"}, "areaServed": "TR", "url": SITE + path})
    if kind == "index" and items_ld:
        graph[1]["@type"] = "CollectionPage"
        graph.append({"@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": SITE + u, "name": n} for i, (n, u) in enumerate(items_ld)]})
    if kind in ("blog", "case"):
        art = {"@type": "BlogPosting" if kind == "blog" else "Article", "headline": title, "description": desc, "image": img, "author": {"@id": SITE + "/#org"}, "publisher": {"@id": SITE + "/#org"}, "mainEntityOfPage": SITE + path}
        if date: art["datePublished"] = date
        graph.append(art)
    ld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False).replace("</", "<\\/")
    ogl = "tr_TR" if lang == "tr" else "en_US"
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(title)} — Hype Vision</title>
<meta name="description" content="{E(desc)}">
<link rel="canonical" href="{SITE}{path}">
{hl}
<meta property="og:type" content="{'article' if kind in ('blog','case') else 'website'}">
<meta property="og:site_name" content="Hype Vision">
<meta property="og:locale" content="{ogl}">
<meta property="og:url" content="{SITE}{path}">
<meta property="og:title" content="{E(title)}">
<meta property="og:description" content="{E(desc)}">
<meta property="og:image" content="{img}">
<meta property="og:image:secure_url" content="{img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="{img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<script type="application/ld+json">{ld}</script>
{pp['fonts']}
{pp['style']}
<style>{PAGE_CSS}</style>
</head>
<body>
{header}
<main class="pg">
{body}
</main>
{pp['footer']}
<script>
const nav=document.getElementById('nav');addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20),{{passive:true}});
document.getElementById('burger').onclick=()=>nav.classList.toggle('open');
const io=new IntersectionObserver(es=>es.forEach(e=>{{if(e.isIntersecting){{e.target.classList.add('in');io.unobserve(e.target)}}}}),{{threshold:.06}});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
{pp['formjs']}
{pp['scrolljs']}
</script>
</body>
</html>"""

def H(lang):  # ana sayfa kökü
    return "/" if lang == "tr" else "/en/"

def cta(lang="tr"):
    u = U[lang]; h = H(lang)
    return f"""<div class="wrap endcta"><div class="cta rv"><img src="/img/det-kusbakisi.webp" alt=""><div class="in">
<h2 class="h">{u['cta_h']}<span>{u['cta_s']}</span></h2>
<div class="pillg"><a href="{h}#iletisim">{u['contact']}</a><a class="d" href="{h}#iletisim">{u['demo']}</a></div></div></div></div>"""

def faq_html(items, lang="tr"):
    if not items: return ""
    qs = "".join(f"<details><summary>{E(f['q'])}</summary><p>{E(f['a'])}</p></details>" for f in items)
    return f'<div class="wrap" style="margin-top:70px"><h2 class="h rv">{U[lang]["faq"]}</h2><div class="faq rv">{qs}</div></div>'

def section_html(s, lang="tr"):
    out = [f'<div class="sec2 rv"><h2>{E(s["h"])}</h2><div class="c">']
    for p in s["p"]:
        out.append(f"<h3 class='sh3'>{E(p[4:])}</h3>" if p.startswith("### ") else f"<p>{E(p)}</p>")
    if s.get("rows"):
        out.append('<div class="tbl"><table>' + "".join("<tr>" + "".join((f"<th>{E(c)}</th>" if i == 0 else f"<td>{E(c)}</td>") for c in row) + "</tr>" for i, row in enumerate(s["rows"])) + "</table></div>")
    if s.get("imgs"):
        out.append('<div class="figs">' + "".join(f'<figure><img src="{u}" alt="{E(c)}" loading="lazy"><figcaption>{E(c)}</figcaption></figure>' for u, c in s["imgs"]) + "</div>")
    lis = [l for l in s["li"] if not re.match(r"^0\d ", l)]
    if lis:
        out.append('<ul class="ck">' + "".join(f"<li>{E(l)}</li>" for l in lis) + "</ul>")
    cards = []
    for c in s.get("cards", []):
        h = link(c["href"], lang)
        if h: cards.append(f'<a class="cd" href="{h}"><b>{E(c["t"])}</b><span>{E(c["d"])}</span><i>{U[lang]["inspect"]}</i></a>')
    if cards: out.append('<div class="cards">' + "".join(cards) + "</div>")
    out.append("</div></div>")
    return "".join(out)

KIND_CRUMB = {"sol": ("solutions", "/cozumler"), "sec": ("industries", "/sektorler"), "blog": ("blog", "/blog"), "case": ("cases", "/vaka-calismalari")}


def short_box(p, kind, lang):
    """Vaka sayfası başına Sorun → Çözüm → Sonuç özeti (yapay zekâ aramalarının alıntılayacağı kısa cevap)."""
    if kind != "case": return ""
    def first(names, use_li=False):
        for s in p["sections"]:
            if any(n in s["h"].lower() for n in names):
                if use_li and s["li"]: return "; ".join(s["li"][:3])
                for t in s["p"] + s["li"]:
                    if not t.startswith("### "):
                        t = t.split(". ")[0].rstrip(".") + "."
                        return t
        return ""
    pr = first(["problem", "sorun", "başlangıç", "starting", "baseline", "initial"]); so = first(["çözüm", "solution", "nasıl", "how", "ne ölç", "what we", "ne değişti", "what changed"]); rs = first(["sonuç", "result"], True)
    if not (pr and rs): return ""
    L = {"tr": ("Kısa cevap", "Sorun", "Çözüm", "Sonuç"), "en": ("In short", "Problem", "Solution", "Result")}[lang]
    rows = "".join(f"<div><b>{k}</b><p>{E(v)}</p></div>" for k, v in ((L[1], pr), (L[2], so), (L[3], rs)) if v)
    return f'<div class="wrap"><section class="tldr rv" aria-label="{L[0]}"><span class="k-eyebrow">{L[0]}</span><div class="tldr-g">{rows}</div></section></div>'

def detail(p, kind, lang="tr", img_key=None):
    path = p["path"]; u = U[lang]; h = H(lang)
    cl = KIND_CRUMB.get(kind)
    crumbs = [(u["home"], h)]
    crumb_html = f'<a href="{h}">{u["home"]}</a>'
    if cl:
        cu = slash(cl[1] if lang == "tr" else EN_OF[cl[1]])
        crumbs.append((u[cl[0]], cu)); crumb_html += f' / <a href="{cu}">{u[cl[0]]}</a>'
    crumbs.append((p["title"], slash(path)))
    intro = "".join(f"<p>{E(t)}</p>" for t in p.get("intro", [])[:3] if len(t) > 40)
    specs = ""
    if p["specs"]:
        specs = '<div class="wrap"><div class="specs rv">' + "".join(f"<div><small>{E(k)}</small><b>{E(v)}</b></div>" for k, v in p["specs"]) + "</div></div>"
    secs = "".join(section_html(s, lang) for s in p["sections"])
    im = img_for(img_key or path)
    body = f"""<div class="wrap">
<div class="crumb rv">{crumb_html} / <span>{E(p['title'])}</span></div>
<div class="ph rv"><h1>{E(p['title'])}<span>{E(p['desc'])}</span>{f'<div class="date">{p["date"]}</div>' if p.get("date") else ''}</h1>
<div class="intro">{intro}<div class="pillg"><a href="{h}#iletisim">{u['contact']}</a><a class="d" href="{h}#iletisim">{u['demo']}</a></div></div></div>
<div class="pimg rv"><img src="{im}" alt="{E(p['title'])}"></div>
</div>
{short_box(p, kind, lang)}
{specs}
<div class="wrap" style="margin-top:50px">{secs}</div>
{faq_html(p['faq'], lang)}
{cta(lang)}"""
    return shell(p["title"], p["desc"], body, path, lang, faq=p["faq"] or None, crumbs=crumbs, kind=kind, image=im, date=p.get("date"))

def write(path, content):
    """x.html (Netlify'da /x 200 döner, eski siteyle aynı) + x/index.html (yerel önizleme)."""
    rel = path.strip("/")
    d = os.path.join(ROOT, rel)
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(content)
    if rel and rel != "en":
        open(os.path.join(ROOT, rel + ".html"), "w", encoding="utf-8").write(content)

def tile(p, href, key):
    return f'<a class="gc rv" href="{href}"><div class="im"><img src="{img_for(key)}" alt="" loading="lazy"></div><div class="bd"><b>{E(p["title"])}</b><span>{E(short(p["desc"]))}</span></div></a>'

def listing(path, title, sub, items, lang="tr"):
    """items: (page, href, imgkey)"""
    u = U[lang]; h = H(lang)
    body = f"""<div class="wrap"><div class="crumb rv"><a href="{h}">{u['home']}</a> / <span>{title}</span></div>
<div class="ph rv"><h1>{title}<span>{sub}</span></h1><div class="intro"><div class="pillg"><a href="{slash('/cozumler' if lang=='tr' else '/en/solutions')}">{u['solutions']}</a><a class="d" href="{h}#iletisim">{u['demo']}</a></div></div></div>
<div class="grid3">{''.join(tile(p, hr, k) for p, hr, k in items)}</div></div>{cta(lang)}"""
    write(path, shell(title, sub, body, path, lang, crumbs=[(u["home"], h), (title, slash(path))], kind="index", items_ld=[(p["title"], hr) for p, hr, k in items]))

GROUPS = {"tr": [("İş sağlığı ve güvenliği", "kkd|baret|forklift|yasakli|dusme|yangin"), ("Üretim ve kalite", "oee|urun-sayimi|kalite|yuzey|personel|anomali"),
                 ("Operasyon ve analitik", "kuyruk|kisi|yogunluk|nesne"), ("Altyapı ve uyum", "kvkk|onvif|cctv")],
          "en": [("Health & safety", "kkd|baret|forklift|yasakli|dusme|yangin"), ("Production & quality", "oee|urun-sayimi|kalite|yuzey|personel|anomali"),
                 ("Operations & analytics", "kuyruk|kisi|yogunluk|nesne"), ("Infrastructure & compliance", "kvkk|onvif|cctv")]}

def solutions_index(lang):
    u = U[lang]; h = H(lang)
    blocks = []
    for name, rx in GROUPS[lang]:
        items = []
        for p in SOLS:
            if not re.search(rx, p["path"]): continue
            if lang == "tr": items.append((p, slash(p["path"]), p["path"]))
            else:
                e = en_page(p["path"])
                if e: items.append((e, slash(e["path"]), p["path"]))
        if items: blocks.append(f'<div class="grp"><h3 class="rv">{name}</h3><div class="grid3">{"".join(tile(*i) for i in items)}</div></div>')
    eg = EG if lang == "tr" else en_page("/endustriyel-goruntu-isleme")
    t, s, i, w = (("Görüntü işleme çözümleri", "İş güvenliği, üretim, kalite ve operasyon için mevcut kameralarınızla çalışan modüller.", "Her modül aynı platformda çalışır: tek kamera birden fazla analitiği besleyebilir, sonuçlar tek panelde toplanır.", "Görüntü işleme nedir?") if lang == "tr"
                  else ("Computer vision solutions", "Modules for safety, production, quality and operations that run on your existing cameras.", "Every module runs on the same platform: one camera can feed several analytics, and results land in one dashboard.", "What is industrial computer vision?"))
    path = "/cozumler" if lang == "tr" else "/en/solutions"
    body = f"""<div class="wrap"><div class="crumb rv"><a href="{h}">{u['home']}</a> / <span>{u['solutions']}</span></div>
<div class="ph rv"><h1>{t}<span>{s}</span></h1>
<div class="intro"><p>{i}</p><div class="pillg"><a href="{slash('/endustriyel-goruntu-isleme' if lang=='tr' else '/en/industrial-computer-vision')}">{w}</a><a class="d" href="{h}#iletisim">{u['demo']}</a></div></div></div>
{''.join(blocks)}</div>{faq_html(eg['faq'] if eg else [], lang)}{cta(lang)}"""
    write(path, shell(t, s, body, path, lang, faq=(eg["faq"] if eg else None), crumbs=[(u["home"], h), (u["solutions"], slash(path))]))

def sectors_index(lang):
    items = []
    for p in SECS:
        if lang == "tr": items.append((p, slash(p["path"]), p["path"]))
        else:
            e = en_page(p["path"])
            if e: items.append((e, slash(EN_OF[p["path"]]), p["path"]))
    if lang == "tr":
        listing("/sektorler", "Sektörler", "Farklı sahalar, farklı problemler — aynı platform.", items, "tr")
    else:
        listing("/en/industries", "Industries", "Different sites, different problems — one platform.", items, "en")

def faq_all(lang):
    seen, items = set(), []
    pages = (D["extra"] + SOLS + SECS) if lang == "tr" else [en_page(p["path"]) for p in D["extra"] + SOLS + SECS]
    for p in pages:
        if not p: continue
        for f in p["faq"]:
            if f["q"] not in seen: seen.add(f["q"]); items.append(f)
    u = U[lang]; h = H(lang)
    path = "/sss" if lang == "tr" else "/en/faq"
    t, s, b1, b2 = (("Sık sorulan sorular", "Kamera, kurulum, veri gizliliği ve modüller hakkında.", "Sorunuz mu var?", "Bize yazın") if lang == "tr"
                    else ("Frequently asked questions", "About cameras, deployment, data privacy and modules.", "Have a question?", "Write to us"))
    body = f"""<div class="wrap"><div class="crumb rv"><a href="{h}">{u['home']}</a> / <span>{t}</span></div>
<div class="ph rv"><h1>{t}<span>{s}</span></h1><div class="intro"><div class="pillg"><a href="{h}#iletisim">{b1}</a><a class="d" href="{h}#iletisim">{b2}</a></div></div></div></div>
<div class="wrap"><div class="faq rv">{''.join(f"<details><summary>{E(f['q'])}</summary><p>{E(f['a'])}</p></details>" for f in items)}</div></div>{cta(lang)}"""
    write(path, shell(t, s, body, path, lang, faq=items, crumbs=[(u["home"], h), (t, slash(path))]))
    return len(items)

# ================================================================== ÜRETİM
miss = build_en_home()
P["tr"], P["en"] = parts("tr"), parts("en")
# ana sayfalar sitemap'e
SITEMAP.append(("/", "/", "/en/")); SITEMAP.append(("/en/", "/", "/en/"))
LLMS = []  # (lang, title, url, desc)

for lang in ("tr", "en"):
    for group, kind in ((SOLS, "sol"), (SECS, "sec"), ([EG], "sol"), (BLOGS, "blog"), (CASES, "case")):
        for p in group:
            if lang == "tr":
                write(p["path"], detail(p, kind, "tr"))
            else:
                e = en_page(p["path"])
                if e:
                    e = dict(e); e["path"] = EN_OF[p["path"]]
                    write(e["path"], detail(e, kind, "en", img_key=p["path"]))
    solutions_index(lang); sectors_index(lang); faq_all(lang)

listing("/blog", "Rehberler ve blog", "Görüntü işlemeyi sahada uygulayanlar için rehberler.", [(p, slash(p["path"]), p["path"]) for p in BLOGS], "tr")
listing("/vaka-calismalari", "Vaka çalışmaları", "Sahadan ölçülmüş sonuçlar.", [(p, slash(p["path"]), p["path"]) for p in CASES], "tr")
listing("/en/resources", "Guides & resources", "Practical guides for teams putting computer vision to work.", [(en_page(p["path"]), slash(EN_OF[p["path"]]), p["path"]) for p in BLOGS if en_page(p["path"])], "en")
listing("/en/case-studies", "Case studies", "Results measured on site.", [(en_page(p["path"]), slash(EN_OF[p["path"]]), p["path"]) for p in CASES if en_page(p["path"])], "en")

ctx = {"E": E, "shell": shell, "write": write, "cta": cta, "faq_html": faq_html, "section_html": section_html, "D": D, "EN_OF": EN_OF, "en_page": en_page}
load_mod("pages_extra").run(ctx, "tr")
load_mod("pages_extra").run(ctx, "en")
load_mod("katalog").run(ctx, "tr"); load_mod("katalog").run(ctx, "en")
load_mod("ig").run(ctx, "tr"); load_mod("ig").run(ctx, "en")

# ------------------------------------------------------------------ eski siteye giden <a> linklerini temizle
def fix_file(f):
    s = open(f, encoding="utf-8").read()
    lang = "en" if re.search(r'<html lang="en"', s) else "tr"
    def rep(m):
        t = link(m.group(2) or "/", lang)
        return m.group(1) + (t if t else (H(lang) + "#iletisim")) + '"'
    s2 = re.sub(r'(<a\b[^>]*?\bhref=")https://hypevisionlab\.com(/[^"]*)?"', rep, s)
    # mobil için küçük görsel: -sm.webp varsa srcset ekle
    def _ss(m):
        tag, src = m.group(0), m.group(1)
        if "srcset=" in tag: return tag
        sm = src[:-5] + "-sm.webp"
        if not os.path.exists(os.path.join(ROOT, sm.lstrip("/"))): return tag
        return tag.replace(f'src="{src}"', f'src="{src}" srcset="{sm} 720w, {src} 1600w" sizes="(max-width: 760px) 100vw, 50vw"', 1)
    s2 = re.sub(r'<img\b[^>]*\bsrc="(/?img/[^"]+?\.webp)"[^>]*>', _ss, s2)
    # eski siteyle aynı URL politikası: iç linklerde sonda / yok (/ ve /en/ hariç)
    s2 = re.sub(r'href="(/(?!en/["#])[^"#?]*?[^/"#?])/(#[^"]*)?"', lambda m: f'href="{m.group(1)}{m.group(2) or ""}"', s2)
    if s2 != s: open(f, "w", encoding="utf-8").write(s2); return 1
    return 0
cnt = sum(fix_file(f) for f in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True) if "_build" not in f and os.sep + "src" + os.sep not in f)

# ------------------------------------------------------------------ SEO dosyaları
today = datetime.date.today().isoformat()
seen, urls = set(), []
for loc, tr, en in SITEMAP:
    if loc in seen or loc in ("/404/", "/404", "/ig", "/en/ig"): continue
    seen.add(loc)
    alts = f'<xhtml:link rel="alternate" hreflang="tr" href="{SITE}{tr}"/><xhtml:link rel="alternate" hreflang="en" href="{SITE}{en}"/>' if tr and en else ""
    urls.append(f"<url><loc>{SITE}{loc}</loc><lastmod>{today}</lastmod>{alts}</url>")
open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + "\n".join(urls) + "\n</urlset>\n")
open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(f"User-agent: *\nAllow: /\nDisallow: /_build/\nDisallow: /sunum\nDisallow: /en/sunum\n\nSitemap: {SITE}/sitemap.xml\n")
REDIR = """# Müşteri sunumu (eski React uygulaması, şifreli)
/sunum      /sunum-app.html   200
/sunum/*    /sunum-app.html   200
/en/sunum/*  /sunum-app.html  200

# Dil: seçilmiş dil çerezi, yoksa tarayıcı dili (Türkçe → TR ana sayfa, diğerleri → /en/)
/   /index.html   200!   Cookie=hv_tr
/   /en/          302!   Cookie=hv_en
/   /index.html   200!   Language=tr
/   /en/          302

# Eski adresler (301) — eski sitenin _redirects kuralları + bu sürümde kaldırılan sayfalar
/goruntu-isleme              /endustriyel-goruntu-isleme   301
/cctv-yapay-zeka-analizi     /cctv-yapay-zeka              301
/vaka-notlari                /vaka-calismalari             301
/en/blog                     /en/resources                 301
/en/solutions/cctv-ai-analytics  /en/cctv-ai-analytics     301
/blog/gida-hattinda-idle-azaltma        /vaka-calismalari/gida-hattinda-idle-azaltma        301
/blog/isg-kkd-ihlal-tespiti             /vaka-calismalari/isg-kkd-ihlal-tespiti             301
/blog/tekstil-hat-a-fire-dususu         /vaka-calismalari/tekstil-hat-a-fire-dususu         301
/vaka-calismalari/lojistik-palet-sayim-sapmasi   /vaka-calismalari   301
/vaka-calismalari/kalite-kontrol-fire-azaltma   /vaka-calismalari   301
/en/case-studies/lojistik-palet-sayim-sapmasi   /en/case-studies   301
/en/case-studies/kalite-kontrol-fire-azaltma   /en/case-studies   301
/blog/lojistik-palet-sayim-sapmasi   /vaka-calismalari   301
/blog/kalite-kontrol-fire-azaltma   /vaka-calismalari   301
/sektor/banka                /sektorler                    301
/en/industries/banking       /en/industries                301
/pilot                       /#iletisim                     301
/kamera-degerlendirme        /#iletisim                     301
/en/pilot                    /en/#iletisim                  301
/en/camera-assessment        /en/#iletisim                  301
/en/sektor/tekstil           /en/industries/textile        301
/en/sektor/otomotiv          /en/industries/automotive     301
/en/sektor/gida              /en/industries/food           301
/en/sektor/metal             /en/industries/metal          301
/en/gizlilik-politikasi      /en/privacy-policy            301
/en/hizmet-sartlari          /en/terms-of-service          301
/en/cerez-politikasi         /en/cookie-policy             301
/ru/*                        /en                           301
/_build/*                    /404.html                      404
/src/*                       /404.html                      404
/panel/*                     /404.html                      404
/content.json                /404.html                      404
"""
open(os.path.join(ROOT, "_redirects"), "w", encoding="utf-8").write(REDIR)
nf = shell("Sayfa bulunamadı", "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
           '<div class="wrap" style="padding:80px 0 40px"><div class="k-eyebrow">404</div><h1 class="ph" style="display:block"><span style="font-size:56px;font-weight:600;letter-spacing:-.03em;color:var(--ink)">Sayfa bulunamadı</span></h1><p style="color:var(--mute);margin:14px 0 26px">Aradığınız sayfa taşınmış veya kaldırılmış olabilir. / The page you are looking for may have moved.</p><div class="pillg" style="display:inline-flex"><a href="/">Ana sayfa</a><a class="d" href="/en/">English</a></div></div>',
           "/404", "tr")
open(os.path.join(ROOT, "404.html"), "w", encoding="utf-8").write(nf.replace(f'<link rel="canonical" href="{SITE}/404/">', '<meta name="robots" content="noindex">'))
SITEMAP[:] = [x for x in SITEMAP if x[0] != "/404/"]

# llms.txt (eski sitedeki gibi: şirket tanımı + sayfa listesi)
def _ll(lang, kinds):
    seen_u = set(); out = []
    for lg, t, u, d, k in LLMS:
        if lg == lang and k in kinds and u not in seen_u:
            seen_u.add(u); out.append(f"- [{t}]({SITE}{u}): {d}")
    return "\n".join(out)
llms = f"""# Hype Vision

> Hype Vision (yasal unvan: Hype Teknoloji), Türkiye merkezli bir endüstriyel görüntü işleme ve yapay zekâ video analitiği şirketidir. Fabrikalardaki, depolardaki ve tesislerdeki mevcut IP/CCTV kameraları yapay zekâ ile 7/24 çalışan bir denetim sistemine dönüştürür: iş güvenliği (KKD/baret/yelek, forklift–yaya, düşme, yangın/duman), verimlilik (istasyon doluluğu, çevrim süresi, darboğaz, OEE), kalite kontrol (boş paket, SKT/baskı, yüzey kusuru) ve lojistik (TIR yükleme sayımı, palet). 2020'den beri; Bilişim Vadisi, Muallimköy, Gebze / Kocaeli.

## Hype Vision kimdir, ne yapar?
- Mevcut kameralarla çalışır (RTSP/ONVIF, marka bağımsız: Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview); çoğu projede yeni kamera gerekmez.
- 100+ hazır modül; tek kamera birden fazla analitiği besler; 400 kameralık kurulumlara kadar sahada deneyim.
- On-premise (tesis içi, kapalı devre) çalışabilir; görüntü tesisten çıkmaz. Modüllerin büyük çoğunluğu yüz tanıma olmadan, KVKK uyumlu çalışır.
- Alarm ve veri: canlı panel, WhatsApp/SMS, VMS popup (Milestone, Dahua), PLC/röle/turnike, ERP/MES, REST API.
- Kalite kontrolde gerektiğinde endüstriyel kamera ve aydınlatma ile çalışır.
- Ürünler: Hype Asistan (sahaya doğal dille soru sorma), mobil devriye (robot köpek), drone ile havadan denetim, dijital fabrika ikizi.

## Hangi sektörlere hizmet verir?
İmalat, otomotiv yan sanayi, metal ve kaynak atölyeleri, tekstil/konfeksiyon, gıda ve ambalaj, medikal sarf, maden ve kimya, lojistik ve depo, perakende, restoran, otel, inşaat, kuyumculuk, fuar ve etkinlik alanları.

## Nasıl iletişime geçilir?
- E-posta: info@hypevisionlab.com
- Telefon / WhatsApp: +90 541 260 91 90
- Web: https://hypevisionlab.com (TR) · https://hypevisionlab.com/en/ (EN)
- Instagram: https://www.instagram.com/hypevisionlab/ · LinkedIn: https://www.linkedin.com/company/hypevisionlab
- Tipik başlangıç: tek kamera, tek modülle 2–4 haftalık pilot ve yazılı doğruluk raporu.

## Sık sorulanlar
- Türkiye'de endüstriyel görüntü işleme firması arayanlar için: Hype Vision mevcut kameralarla, on-premise ve sahaya gelen ekiple çalışan yerel bir platformdur.
- Yeni kamera gerekir mi? İSG, verimlilik ve lojistikte genellikle hayır; mikron seviyesinde kalite kontrolde endüstriyel kamera önerilir.
- Proje ne kadar sürer? Keşif 1–2 gün, kurulum 3–5 gün, pilot 2–4 hafta.
- Firma seçimi rehberi: https://hypevisionlab.com/blog/turkiye-goruntu-isleme-firmalari-nasil-secilir

## Çözümler
{_ll("tr", {"sol"})}

## Sektörler
{_ll("tr", {"sec"})}

## Vaka çalışmaları
{_ll("tr", {"case"})}

## Rehberler
{_ll("tr", {"blog"})}

## English
{_ll("en", {"sol", "sec", "case", "blog"})}
"""
open(os.path.join(ROOT, "llms.txt"), "w", encoding="utf-8").write(llms)

print("EN ana sayfa: tüm metinler çevrildi" if not miss else f"UYARI — EN ana sayfada çevrilmeyen {len(miss)} metin (i18n.py T sözlüğüne ekleyin): " + " | ".join(miss[:12]))
print(f"sayfa: {len(seen)} (sitemap) | eski link düzeltilen dosya: {cnt}")
