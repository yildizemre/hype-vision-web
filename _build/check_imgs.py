"""Tüm sayfalarda src/srcset görsel yollarının gerçekten var olduğunu kontrol eder."""
import re, glob, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
bad = []
for f in glob.glob('**/*.html', recursive=True):
    if f.startswith(('_build', 'src', 'assets')) or 'sunum' in f: continue
    base = os.path.dirname(f)
    for u in re.findall(r'(?:src|srcset)="([^"]+)"', open(f, encoding='utf-8').read()):
        for x in u.split(','):
            x = x.strip().split(' ')[0]
            if not x or '${' in x or x.startswith(('http', 'data:', "'")): continue
            p = x.lstrip('/') if x.startswith('/') else os.path.join(base, x)
            if not os.path.exists(p.split('?')[0]): bad.append((f, x))
print('broken img refs:', len(bad))
for b in bad[:10]: print(' ', b)
