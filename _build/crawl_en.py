"""Her TR sayfanın eski sitedeki hreflang="en" karşılığını bulup İngilizce metni content.json -> D["en"] içine yazar."""
import os, json, re, sys, time
__file__ = os.path.abspath(__file__)
SRC = open(os.path.join(os.path.dirname(__file__), "crawl.py"), encoding="utf-8").read().split("have = {")[0]
exec(SRC)  # get, parse, D, CJ

def alt_en(path):
    soup = BeautifulSoup(get(path), "html.parser")
    l = soup.find("link", rel="alternate", hreflang="en")
    if not l: return None
    return re.sub(r"^https?://[^/]+", "", l["href"]).rstrip("/") or "/"

D.setdefault("en", {})
paths = [p["path"] for k in ("solutions", "sectors", "extra", "pages") for p in D[k]] + list(D.get("legal", {}).keys())
paths += ["/blog", "/vaka-calismalari", "/cozumler", "/sektorler"]
for tr in dict.fromkeys(paths):
    if tr in D["en"] or "banka" in tr: continue
    try:
        en = alt_en(tr)
        if not en or en == tr or not en.startswith("/en"):
            print("no-en", tr, file=sys.stderr); D["en"][tr] = None; continue
        pg = parse(en); pg["path"] = en
        D["en"][tr] = pg
        print("ok", tr, "->", en, len(pg["sections"]), file=sys.stderr)
    except Exception as e:
        print("ERR", tr, e, file=sys.stderr)
    time.sleep(0.2)
json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("en pages:", sum(1 for v in D["en"].values() if v))
