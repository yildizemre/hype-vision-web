"""Her sayfanın canonical'ı kendi adresini mi gösteriyor? (dizin kopyaları x/index.html hariç)"""
import re, glob, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
bad = []
for f in glob.glob('**/*.html', recursive=True):
    f2 = f.replace(os.sep, '/')
    if f2.startswith(('_build', 'src', 'assets', 'sunum', '404')) or f2.endswith('/index.html') and f2 not in ('en/index.html',): continue
    s = open(f, encoding='utf-8').read()
    m = re.search(r'<link[^>]*rel="canonical"[^>]*>', s)
    if not m:
        bad.append(('yok', f2)); continue
    href = re.search(r'href="([^"]+)"', m.group(0)).group(1).replace('https://hypevisionlab.com', '')
    path = {'index.html': '/', 'en/index.html': '/en/'}.get(f2, '/' + f2[:-5])
    if href != path: bad.append((href, f2))
print('canonical sorunları:', len(bad))
for b in bad[:10]: print(' ', b)
