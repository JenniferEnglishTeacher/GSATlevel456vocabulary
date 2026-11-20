#!/usr/bin/env python3
"""會考單字搭配詞 — the 10 「單字片語總整理」 zones (一字多義 … 轉折詞), from tools/jphrase/source.json.

Pages use the 搭配詞 engine (colloc-app.js):
  · word-list units: every Part 1 row = one list entry + one MCQ (its sample sentence, 4 phrases of the same list);
  · 綜合練習 units: the Part 2 multiple-choice questions as written, with the answer-key 中文.
Run:  python3 tools/jphrase_emit.py [version]     (writes pages + registers the zones in books.js / index.html)
"""
import hashlib, json, random, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "tools/jphrase/source.json"
BLANK = "＿＿＿＿＿"
PER = 30
# docx number: (zone id, tab label, tab number, colour)
ZONES = {
    "01": ("jm", "一字多義 Polysemy", "多義", ""),
    "02": ("jvp", "動詞片語 Verb Phrases", "VP", "hot"),
    "03": ("jbe", "be+形容詞片語 be + Adj", "be", "va"),
    "04": ("jap", "形容詞片語 Adj Phrases", "AdjP", ""),
    "05": ("jpp", "介系詞片語 Prep Phrases", "PP", "hot"),
    "06": ("jdp", "副詞片語 Adv Phrases", "AdvP", "va"),
    "07": ("jcp", "連接詞片語 Conj Phrases", "ConjP", ""),
    "08": ("jnp", "名詞片語 Noun Phrases", "NP", "hot"),
    "09": ("jex", "慣用語與句型 Expressions", "Expr", "va"),
    "10": ("jtw", "轉折詞 Transition Words", "Trans", ""),
}
ZH_STOP = set("的地得之一了是有在和與或及，；、()（）/／…「」。！？：:;,. 某人事物⋯")


def seeded(*parts):
    return random.Random(int(hashlib.md5("|".join(map(str, parts)).encode()).hexdigest()[:12], 16))


def zh_set(s):
    return {ch for ch in re.sub(r"（.*?）|\(.*?\)", "", s or "") if "一" <= ch <= "鿿" and ch not in ZH_STOP}


def core(w):
    """'account for + N' -> 'account for'; used to match MCQ options to list rows."""
    w = re.sub(r"\+\s*(N|VR|V-ing|Ving|子句|sb|sth|名詞|動詞)\b.*", "", w)
    return re.sub(r"\s+", " ", w.replace("…", " ").replace("⋯", " ")).strip().lower()


def answer_slots(n, rng):
    seq, prev = [], None
    while len(seq) < n:
        block = [0, 1, 2, 3]
        rng.shuffle(block)
        if block[0] == prev:
            block[0], block[1] = block[1], block[0]
        seq.extend(block)
        prev = seq[-1]
    return seq[:n]


def gap_sentence(s):
    return re.sub(r"_{3,}(?:\s+_{3,})*", "＿＿＿", s)


def js(o):
    return json.dumps(o, ensure_ascii=False, separators=(",", ":"))


PAGE = (ROOT / "tools/colloc_emit.py").read_text("utf-8").split('PAGE = """', 1)[1].split('"""', 1)[0]


def build(num, z, src):
    zid, short, _, _ = z
    rows = src["rows"]
    poly = num == "01"
    # meaning sets per headword (a polysemous word's distractor must not share any sense's 中文)
    word_zh = {}
    for r in rows:
        word_zh.setdefault(r["w"].lower(), set()).update(zh_set(r["c"]))
    info = lambda r: {"h": r["w"], "p": r["p"], "d": r["d"], "c": r["c"]}
    items = []
    for r in rows:
        rng = seeded(zid, r["w"], r["s"])
        cands = [c for c in rows if c["w"].lower() != r["w"].lower()]
        rng.shuffle(cands)
        nw = len(core(r["w"]).split())
        cands.sort(key=lambda c: (c["p"] != r["p"], abs(len(core(c["w"]).split()) - nw) > 1))
        mine = word_zh[r["w"].lower()] if poly else zh_set(r["c"])
        picked, seen = [], {r["w"].lower()}
        for c in cands:
            if c["w"].lower() in seen:
                continue
            theirs = word_zh[c["w"].lower()] if poly else zh_set(c["c"])
            if len(mine & theirs) >= (1 if poly else 2):
                continue
            picked.append(c)
            seen.add(c["w"].lower())
            if len(picked) == 3:
                break
        head = r["g"] or (r["w"] if poly else (core(r["w"])[:1].upper() or "#"))
        items.append({"r": r, "ds": picked, "h": head})
    def wstem(t):
        t = re.sub(r"(ies)$", "y", t)
        t = re.sub(r"(ing|ed|es|s)$", "", t) if len(t) > 4 else t
        t = re.sub(r"([b-df-hj-np-tv-z])\1$", r"\1", t)
        return t.rstrip("e")
    DROP = {"be", "am", "is", "are", "was", "were", "been", "being", "a", "b", "one's", "oneself", "sb", "sth", "n", "vr",
            "my", "your", "his", "her", "our", "their", "its", "myself", "yourself", "himself", "herself", "themselves", "ourselves"}
    skey = lambda w: " ".join(wstem(t) for t in re.findall(r"[a-z']+", re.sub(r"\(.*?\)|（.*?）", "", core(w))) if t not in DROP)
    by_core = {}
    for r in rows:
        by_core.setdefault(skey(r["w"]), r)
    def lookup(o):
        k = skey(o)
        if k in by_core:
            return info(by_core[k])
        for ck, r in by_core.items():
            if ck and (ck.startswith(k + " ") or k.startswith(ck + " ")):
                return {**info(r), "h": r["w"]}
        return {"h": o, "p": "", "d": "", "c": ""}

    units = []
    cur = []
    for it in items:  # keep a polysemous word's senses together
        if cur and len(cur) >= PER and (not poly or it["r"]["w"] != cur[-1]["r"]["w"]):
            units.append(("list", cur)); cur = []
        cur.append(it)
    if cur:
        if units and len(cur) < 10:
            units[-1][1].extend(cur)
        else:
            units.append(("list", cur))
    mcq = src["mcq"]
    for i in range(0, len(mcq), PER):
        part = mcq[i:i + PER]
        if units and len(part) < 10 and units[-1][0] == "mcq":
            units[-1][1].extend(part)
        else:
            units.append(("mcq", part))

    dash, names = [], {}
    total = 0
    for n, (kind, unit) in enumerate(units, 1):
        rng = seeded(zid, n, "slots")
        slots = answer_slots(len(unit), rng)
        qs, cards = [], []
        if kind == "list":
            for i, it in enumerate(unit):
                r, a = it["r"], slots[i]
                opts = [d["w"] for d in it["ds"]]
                ois = [info(d) for d in it["ds"]]
                opts.insert(a, r["w"]); ois.insert(a, info(r))
                q = {"w": r["w"], "zh": f"{r['c']}　{r['d']}", "h": it["h"], "lv": "—", "ty": r["p"] if poly else "",
                     "q": BLANK, "o": opts, "a": a, "oi": ois,
                     "s": r["s"], "sq": gap_sentence(r["s"]), "st": r["st"]}
                qs.append(q)
                cards.append({"w": r["w"], "p": r["p"], "d": r["d"], "c": r["c"], "s": r["s"]})
            first, last = unit[0]["r"]["w"], unit[-1]["r"]["w"]
            names[str(n)] = f"{first} – {last}"
        else:
            for i, m in enumerate(unit):
                ans = m["o"][m["a"]]
                stem = re.sub(r"_{3,}", BLANK, m["q"], count=1)
                stem = re.sub(r"_{3,}", "＿＿＿", stem)
                if BLANK not in stem:
                    stem = stem + " " + BLANK
                qs.append({"w": ans, "zh": m["st"], "h": "綜合練習 Practice", "lv": "—", "ty": "",
                           "q": stem, "o": m["o"], "a": m["a"], "oi": [lookup(o) for o in m["o"]], "pa": ans})
                li = lookup(ans)
                cards.append({"w": ans, "p": li["p"], "d": li["d"], "c": li["c"] or m["st"], "s": ""})
            names[str(n)] = f"綜合練習 Practice Q{unit[0]['n']}–{unit[-1]['n']}"
        total += len(qs)
        data = {"zone": zid, "unit": n, "units": len(units), "title": names[str(n)], "items": qs}
        (ROOT / f"{zid}-unit{n}-data.js").write_text(
            f"// 會考單字搭配詞 {short} Unit {n}: {names[str(n)]} — built by tools/jphrase_emit.py\nwindow.COLLOC_UNIT = {js(data)};\n", "utf-8")
        (ROOT / f"{zid}-unit{n}.html").write_text(PAGE.format(title=f"{short} Unit {n} · 會考單字搭配詞", zone=zid, u=n, ver=VER), "utf-8")
        dash.append({"unit": n, "theme": names[str(n)], "cards": cards})
    (ROOT / f"{zid}-dashboard-data.js").write_text(
        f"// Auto-generated for the Unit Board — 會考單字搭配詞 {short} (tools/jphrase_emit.py)\nwindow.{zid.upper()}_DASHBOARD_UNITS = {js(dash)};\n", "utf-8")
    return {"units": len(units), "names": names, "items": total, "rows": len(rows), "mcq": len(mcq)}


VER = sys.argv[1] if len(sys.argv) > 1 else "20261120e"
src = json.loads(SRC.read_text("utf-8"))
b = (ROOT / "books.js").read_text("utf-8")
zs, ze = b.index("window.VOCAB_ZONES = ") + len("window.VOCAB_ZONES = "), b.index("};\n", b.index("window.VOCAB_ZONES")) + 1
zones = json.loads(b[zs:ze])
new = []
for num, z in ZONES.items():
    if num not in src:
        continue
    zid, short, tabnum, cls = z
    m = build(num, z, src[num])
    new.append(zid)
    zones[zid] = {
        "book": "jcolloc", "prefix": zid, "tag": f"會考{short.split()[0]}", "name": f"會考單字搭配詞 · {src[num]['title']}",
        "short": short, "num": tabnum, "levelLabel": f"會考搭配詞-{short.split()[0]}", "cls": cls, "family": False,
        "headLabel": "", "unitName": "Unit", "tile": f"片語 · {short}", "data": f"{zid}-dashboard-data.js",
        "global": f"{zid.upper()}_DASHBOARD_UNITS", "page": f"{zid}-unit{{u}}.html", "quiz": f"{zid}-unit{{u}}.html#test",
        "units": list(range(1, m["units"] + 1)), "names": m["names"],
        "blurb": f"{m['rows']} 個單字片語（例句填空）＋ {m['mcq']} 題綜合練習",
    }
    print(zid, short, m["units"], "units", m["items"], "questions")
b = b[:zs] + json.dumps(zones, ensure_ascii=False, indent=1) + b[ze:]
bs, be = b.index("window.VOCAB_BOOKS = ") + len("window.VOCAB_BOOKS = "), b.index("];\n", b.index("window.VOCAB_BOOKS")) + 1
books = json.loads(b[bs:be])
for bk in books:
    if bk["id"] == "jcolloc":
        bk["zones"] = [z for z in bk["zones"] if z not in new] + new
b = b[:bs] + json.dumps(books, ensure_ascii=False, indent=1) + b[be:]
b = re.sub(r"(window\.VOCAB_ZONES = )", r"\1", b)
(ROOT / "books.js").write_text(b, "utf-8")
h = (ROOT / "index.html").read_text("utf-8")
pat = "|".join(new)
h = re.sub(rf'  <script src="(?:{pat})-dashboard-data\.js\?v=[^"]*"></script>\n', "", h)
tags = "".join(f'  <script src="{z}-dashboard-data.js?v={VER}"></script>\n' for z in new)
h = h.replace('  <script src="tracker-config.js', tags + '  <script src="tracker-config.js', 1)
h = re.sub(r'books\.js\?v=[^"]*', f"books.js?v={VER}", h)
(ROOT / "index.html").write_text(h, "utf-8")
