#!/usr/bin/env python3
"""Registers the 搭配詞 zones in books.js and their dashboard data in index.html (run after colloc_emit.py)."""
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from colloc_emit import ZONES, ROOT
ver = sys.argv[1] if len(sys.argv) > 1 else "20261119a"
meta = json.loads((ROOT / "tools/colloc/meta.json").read_text("utf-8"))
order = [z for z in ZONES if z in meta]
b = (ROOT / "books.js").read_text("utf-8")
zs, ze = b.index("window.VOCAB_ZONES = ") + len("window.VOCAB_ZONES = "), b.index("};\n", b.index("window.VOCAB_ZONES")) + 1
zones = json.loads(b[zs:ze])
bs, be = b.index("window.VOCAB_BOOKS = ") + len("window.VOCAB_BOOKS = "), b.index("];\n", b.index("window.VOCAB_BOOKS")) + 1
books = json.loads(b[bs:be])
for z in order:
    name, short, num, pos, cls = ZONES[z]
    m = meta[z]
    zones[z] = {
        "book": "colloc", "prefix": z, "tag": f"搭配{short.split()[0]}", "name": name, "short": short, "num": num,
        "levelLabel": f"搭配詞-{short.split()[0]}", "cls": cls, "family": False, "headLabel": "", "unitName": "Unit",
        "tile": f"搭配詞 · {short}", "data": f"{z}-dashboard-data.js", "global": f"{z.upper()}_DASHBOARD_UNITS",
        "page": f"{z}-unit{{u}}.html", "quiz": f"{z}-unit{{u}}.html#test",
        "units": list(range(1, m["units"] + 1)), "names": m["names"],
        "blurb": f"{m['items']} 組搭配詞 · 看中文選出搭配的字",
    }
books = [x for x in books if x["id"] != "colloc"] + [{"id": "colloc", "name": "學測搭配詞 Collocations", "zones": order}]
b = b[:zs] + json.dumps(zones, ensure_ascii=False, indent=1) + b[ze:]
bs, be = b.index("window.VOCAB_BOOKS = ") + len("window.VOCAB_BOOKS = "), b.index("];\n", b.index("window.VOCAB_BOOKS")) + 1
b = b[:bs] + json.dumps(books, ensure_ascii=False, indent=1) + b[be:]
(ROOT / "books.js").write_text(b, "utf-8")
h = (ROOT / "index.html").read_text("utf-8")
h = re.sub(r'  <script src="c[vnadc]-dashboard-data\.js\?v=[^"]*"></script>\n', "", h)
tags = "".join(f'  <script src="{z}-dashboard-data.js?v={ver}"></script>\n' for z in order)
h = h.replace('  <script src="tracker-config.js', tags + '  <script src="tracker-config.js', 1)
h = re.sub(r'books\.js\?v=[^"]*', f"books.js?v={ver}", h)
(ROOT / "index.html").write_text(h, "utf-8")
print("registered", order)
