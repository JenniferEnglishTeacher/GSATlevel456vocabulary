#!/usr/bin/env python3
"""學測英聽 (gsat-listening/): build the Level 3–6 hover lexicon and wire the hover cards into each page.
Run from the repo root:  python3 tools/listening_build.py   (safe to re-run)"""
import os, re, json, glob, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from exam_build import build_lexicon, GSAT, ROOT

DIR = os.path.join(ROOT, 'gsat-listening')
V = '20261120-l1'
corpus = []
def strings(o):
    if isinstance(o, str): corpus.append(o)
    elif isinstance(o, list): [strings(x) for x in o]
    elif isinstance(o, dict):
        for k, v in o.items():
            if k not in ('id', 'img', 'ans'): strings(v)
pages = sorted(glob.glob(os.path.join(DIR, '1*.html')))
for f in pages:
    s = open(f, encoding='utf-8').read()
    m = re.search(r'^var DATA=(.*);\s*$', s, re.M)
    strings(json.loads(m.group(1)))
n, by = build_lexicon(GSAT['levels'], corpus, os.path.join(DIR, 'lexicon.js'))
print('lexicon', n, dict(by))

HEAD = (f'<link rel="stylesheet" href="../gsat-exam/vocab-hover.css?v={V}" data-gw>\n')
TAIL = (f'<script data-gw>window.GW_TARGETS=["#app"];window.GW_TAP_ONLY=".sub p";</script>\n'
        f'<script src="lexicon.js?v={V}" data-gw></script>\n<script src="../gsat-exam/vocab-hover.js?v={V}" data-gw></script>\n')
LEGEND = ('<p class="gw-legend" data-gw style="font-size:13px;color:#555;margin:6px 0 0">字幕、解析中的 <span class="gw gw-l3">Level 3</span> '
          '<span class="gw gw-l4">Level 4</span> <span class="gw gw-l5">Level 5</span> <span class="gw gw-l6">Level 6</span> 學測單字有底線：'
          '滑過／點一下可聽發音、看詞性與中譯，再點「🗂 字卡」看例句。</p>\n')
for f in pages:
    s = open(f, encoding='utf-8').read()
    s = re.sub(r'<[^>]*data-gw[^>]*>(?:</script>)?\n?', '', s)            # drop an earlier run's tags
    s = re.sub(r'<p class="gw-legend" data-gw.*?</p>\n', '', s, flags=re.S)
    s = s.replace('</head>', HEAD + '</head>', 1)
    i = s.rfind('</body>'); s = s[:i] + TAIL + s[i:]
    s = re.sub(r'(<p class="crumb">.*?</p>\n?)', lambda m: m.group(1) + ('' if m.group(1).endswith('\n') else '\n') + LEGEND, s, count=1, flags=re.S)
    open(f, 'w', encoding='utf-8').write(s)
    print(os.path.basename(f), s.count('data-gw'))
