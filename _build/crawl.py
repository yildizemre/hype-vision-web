"""Sitedeki hypevisionlab.com linklerini takip edip o sayfaların metnini content.json'a ekler.
Kullanım: python -I _build/crawl.py   (scratchpad/scrape.py ile aynı ayrıştırma mantığı)"""
import os, re, json, sys, time, urllib.request, glob
from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
D.setdefault("pages", [])
SKIP_H2 = re.compile(r"Keşiften rapora|İlgili|iletişime geç|Sık sorulan|İLGİLİ YAZILAR|Pilot görüşelim|başlayın|Kameralarınızı değerlendirelim|Pilot nasıl|Çerez|Benzer yazılar|Diğer yazılar", re.I)
EXCLUDE = re.compile(r"^/(en|ru)(/|$)|banka|\.pdf$|^/#|^/$")

def get(path):
    req = urllib.request.Request("https://hypevisionlab.com" + path, headers={"User-Agent": "Mozilla/5.0"})
    return urllib.request.urlopen(req, timeout=30).read().decode("utf-8")

def faq_ld(soup):
    out = []
    for s in soup.find_all("script", type="application/ld+json"):
        try: d = json.loads(s.string or "")
        except Exception: continue
        for it in (d if isinstance(d, list) else d.get("@graph", [d])):
            if isinstance(it, dict) and it.get("@type") == "FAQPage":
                for q in it.get("mainEntity", []):
                    a = q.get("acceptedAnswer", {}).get("text", "")
                    out.append({"q": q.get("name", ""), "a": BeautifulSoup(a, "html.parser").get_text(" ", strip=True)})
    return out

def meta_date(soup):
    for s in soup.find_all("script", type="application/ld+json"):
        m = re.search(r'"datePublished"\s*:\s*"([^"]+)"', s.string or "")
        if m: return m.group(1)[:10]
    return ""

def parse(path):
    soup = BeautifulSoup(get(path), "html.parser")
    h1 = soup.find("h1")
    md = soup.find("meta", attrs={"name": "description"})
    page = {"path": path, "title": h1.get_text(" ", strip=True) if h1 else soup.title.get_text(strip=True),
            "desc": md["content"] if md else "", "date": meta_date(soup), "specs": [], "sections": [], "faq": faq_ld(soup), "intro": [], "links": []}
    if h1:
        for p in h1.find_all_next(["p", "h2"]):
            if p.name == "h2": break
            t = p.get_text(" ", strip=True)
            if t: page["intro"].append(t)
    if not page["faq"]:
        for h2 in soup.find_all("h2"):
            if "Sık sorulan" in h2.get_text():
                for q in h2.parent.find_all(["h3", "summary", "button"]):
                    nxt = q.find_next("p"); qt = q.get_text(" ", strip=True).rstrip("+").strip()
                    if qt and nxt: page["faq"].append({"q": qt, "a": nxt.get_text(" ", strip=True)})
    main = soup.find("main") or soup.body
    cur = None
    for el in main.find_all(["h2", "h3", "p", "li", "table"]):
        t = el.get_text(" ", strip=True)
        if not t: continue
        if el.name == "h2":
            if SKIP_H2.search(t): cur = None; continue
            cur = {"h": t, "p": [], "li": [], "cards": [], "rows": []}
            for a in el.parent.find_all("a"):
                ss = list(a.stripped_strings)
                if len(ss) >= 2 and a.get("href", "").startswith("/"):
                    cur["cards"].append({"href": a["href"], "t": ss[0], "d": " ".join(ss[1:])})
            page["sections"].append(cur)
        elif cur is None:
            continue
        elif el.name == "table":
            cur["rows"] = [[c.get_text(" ", strip=True) for c in tr.find_all(["th", "td"])] for tr in el.find_all("tr")]
        elif el.name == "h3":
            cur["p"].append("### " + t)
        elif el.name in ("p", "li"):
            if el.find_parent(["li", "table"]) is not None and el.name == "p": continue
            if el.find_parent("table") is not None: continue
            (cur["p"] if el.name == "p" else cur["li"]).append(t)
    for s in page["sections"]:
        if s["h"].lower().startswith("teknik"):
            ps = s["p"]; page["specs"] = [[ps[i], ps[i + 1]] for i in range(0, len(ps) - 1, 2)]
    page["sections"] = [s for s in page["sections"] if not s["h"].lower().startswith("teknik") and (s["p"] or s["li"] or s["cards"] or s["rows"])]
    page["links"] = sorted({a["href"].split("#")[0].rstrip("/") for a in main.find_all("a", href=True) if a["href"].startswith("/")})
    return page

have = {p["path"] for k in ("solutions", "sectors", "extra", "pages") for p in D[k]}
queue = set()
for f in glob.glob(os.path.join(ROOT, "**", "index.html"), recursive=True):
    for m in re.finditer(r'href="https://hypevisionlab\.com(/[^"#?]*)', open(f, encoding="utf-8").read()):
        queue.add(m.group(1).rstrip("/") or "/")
queue |= {"/blog", "/vaka-calismalari"}
done = 0
while queue and done < 120:
    p = queue.pop()
    if p in have or EXCLUDE.search(p) or not p.startswith("/"): continue
    try:
        pg = parse(p)
    except Exception as e:
        print("ERR", p, e, file=sys.stderr); have.add(p); continue
    D["pages"].append(pg); have.add(p); done += 1
    print("ok", p, len(pg["sections"]), file=sys.stderr)
    if p in ("/blog", "/vaka-calismalari") or p.startswith("/blog/") or p.startswith("/vaka-calismalari/"):
        for l in pg["links"]:
            if (l.startswith("/blog/") or l.startswith("/vaka-calismalari/")) and l not in have: queue.add(l)
    time.sleep(0.25)
json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("pages:", len(D["pages"]))
