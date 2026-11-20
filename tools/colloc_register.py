#!/usr/bin/env python3
"""Registers the 搭配詞 zones in books.js and their dashboard data in index.html (run after colloc_emit.py)."""
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from colloc_emit import ZONES, ROOT, BOOK_OF
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
    bid, bname, btag = BOOK_OF[z]
    m = meta[z]
    zones[z] = {
        "book": bid, "prefix": z, "tag": f"{btag}搭配{short.split()[0]}", "name": name, "short": short, "num": num,
        "levelLabel": f"{btag}搭配詞-{short.split()[0]}", "cls": cls, "family": False, "headLabel": "", "unitName": "Unit",
        "tile": f"搭配詞 · {short}", "data": f"{z}-dashboard-data.js", "global": f"{z.upper()}_DASHBOARD_UNITS",
        "page": f"{z}-unit{{u}}.html", "quiz": f"{z}-unit{{u}}.html#test",
        "units": list(range(1, m["units"] + 1)), "names": m["names"],
        "blurb": f"{m['items']} 組搭配詞 · 看中文選出搭配的字",
    }
new_books = {}
for z in order:
    bid, bname, _ = BOOK_OF[z]
    new_books.setdefault(bid, {"id": bid, "name": bname, "zones": []})["zones"].append(z)
# Each 搭配詞 book sits in its level group right after that group's 歷屆試題 tab.
PLACE = {"colloc": ("gsat", "exam"), "jcolloc": ("cap", "capexam")}
for x in books:  # keep zones other tools add to these books (會考片語 zones from jphrase_emit.py)
    if x["id"] in new_books:
        new_books[x["id"]]["zones"] += [z for z in x["zones"] if z not in ZONES]
books = [x for x in books if x["id"] not in new_books]
for bid, nb in new_books.items():
    grp, after = PLACE.get(bid, (None, None))
    if grp: nb["group"] = grp
    ids = [x["id"] for x in books]
    books.insert(ids.index(after) + 1 if after in ids else len(books), nb)
b = b[:zs] + json.dumps(zones, ensure_ascii=False, indent=1) + b[ze:]
bs, be = b.index("window.VOCAB_BOOKS = ") + len("window.VOCAB_BOOKS = "), b.index("];\n", b.index("window.VOCAB_BOOKS")) + 1
b = b[:bs] + json.dumps(books, ensure_ascii=False, indent=1) + b[be:]
(ROOT / "books.js").write_text(b, "utf-8")
h = (ROOT / "index.html").read_text("utf-8")
h = re.sub(r'  <script src="(?:c[vnadc]|j[nvadpc])-dashboard-data\.js\?v=[^"]*"></script>\n', "", h)
tags = "".join(f'  <script src="{z}-dashboard-data.js?v={ver}"></script>\n' for z in order)
h = h.replace('  <script src="tracker-config.js', tags + '  <script src="tracker-config.js', 1)
h = re.sub(r'books\.js\?v=[^"]*', f"books.js?v={ver}", h)
(ROOT / "index.html").write_text(h, "utf-8")
print("registered", order)
