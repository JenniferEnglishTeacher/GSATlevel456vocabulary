#!/usr/bin/env python3
"""學測易混淆字 Confusables (book `confus`, zones fa / fb / fc / fd) — pages, data, board data.

Source: tools/confusables/source/*.txt (the reviewed content of 學測L3-6_易混淆字_Confusables.xlsx, 2026-11-25).
Block format:
    @<TYPE A|B|C|D> <group name>
    tz=<分辨口訣>   te=<Tip EN>   trap=<陷阱>
    - word | pos | English definition | 中文 | synonyms | antonyms | sentence | 翻譯 [| 常見義/進階義 (type C)]
Groups are ordered easy -> hard (mean 學測 level; words not in the list count 6.5), 10 per unit, per type.

Writes to the site root:
    {zone}-unit{u}.html + {zone}-unit{u}-data.js   comparison cards + quiz (cf.js, cf.css)
    {zone}-dashboard-data.js                       board data (one card per word; type C: one card per group)
    cf-index.js   CF_TYPES, CF_META, CF_INDEX (word -> groups; app.js shows a ⚠ chip on flashcards)
    cf-wrong.html 錯題本 (all units)
and registers the zones + book in books.js and the board data in index.html.
Usage: python3 tools/confusables/build.py <version>
"""
import json, os, random, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
VER = sys.argv[1] if len(sys.argv) > 1 else "1"
LIST = json.load(open(os.path.join(HERE, "gsat6000_words.json"), encoding="utf8"))  # word -> {lv, pos, zh}

TYPES = [("A", "fa", "形近字", "Look-alikes", "形近"), ("B", "fb", "字根字首誤導", "Misleading word parts", "字根"),
         ("C", "fc", "熟字僻義", "Familiar words, advanced meanings", "熟字"), ("D", "fd", "易混用法", "Commonly confused usage", "用法")]
ZONE_OF = {t[0]: t[1] for t in TYPES}


def parse():
    groups = []
    for fn in sorted(os.listdir(os.path.join(HERE, "source"))):
        if not fn.endswith(".txt"):
            continue
        for blk in open(os.path.join(HERE, "source", fn), encoding="utf8").read().split("\n@"):
            blk = blk.strip().lstrip("@")
            if not blk:
                continue
            lines = blk.split("\n")
            t, name = lines[0].split(" ", 1)
            g = {"type": t, "name": name.strip(), "words": []}
            for ln in lines[1:]:
                ln = ln.strip()
                for k in ("tz", "te", "trap"):
                    if ln.startswith(k + "="):
                        g[k] = ln[len(k) + 1:]
                if ln.startswith("- "):
                    p = [x.strip() for x in re.split(r"\s*\|\s*", ln[2:])]
                    p += [""] * (9 - len(p))
                    d = dict(zip(["w", "pos", "def", "zh", "syn", "ant", "s", "t", "sense"], p))
                    for k in ("syn", "ant"):  # "attract / " -> "attract"
                        d[k] = " / ".join(x.strip() for x in d[k].split("/") if x.strip())
                    g["words"].append(d)
            groups.append(g)
    return groups


def lv(w):
    return (LIST.get(w.lower()) or {}).get("lv")


# ---------- inflection of cloze options (the answer's form in the sentence -> same form for the others) ----------
DOUBLE = {"omit", "admit", "submit", "commit", "permit", "infer", "refer", "prefer", "scrap", "scrub", "stir", "spit", "split",
          "quit", "rob", "plot", "swap", "slip", "drop", "stop", "plan", "ship", "grab", "trap", "wrap", "clip", "chop", "dip"}


IRREG = {"steal": "stole", "rise": "rose", "arise": "arose", "overtake": "overtook", "overhear": "overheard", "undertake": "undertook",
         "undergo": "underwent", "withdraw": "withdrew", "withhold": "withheld", "forbid": "forbade", "lend": "lent", "mislead": "misled",
         "bind": "bound", "lean": "leaned", "spit": "spat", "split": "split", "quit": "quit", "seek": "sought", "swear": "swore",
         "stride": "strode", "sting": "stung", "stink": "stank", "shed": "shed", "cast": "cast", "bear": "bore", "lie": "lay"}
NOINFL = {"sent", "thrown", "lightening", "some time", "migration", "customs", "versus"}


def past(b):
    if b in IRREG: return IRREG[b]
    if re.search(r"(?:^|[^aeiou])[aeiou][bdgmnprt]$", b) and len(b) <= 4: return b + b[-1] + "ed"
    if b in DOUBLE: return b + b[-1] + "ed"
    if b.endswith("e"): return b + "d"
    if re.search(r"[^aeiou]y$", b): return b[:-1] + "ied"
    return b + "ed"


def plural(b):
    if re.search(r"(s|x|z|ch|sh)$", b): return b + "es"
    if re.search(r"[^aeiou]y$", b): return b[:-1] + "ies"
    return b + "s"


def ing(b):
    if b in DOUBLE: return b + b[-1] + "ing"
    return (b[:-1] if b.endswith("e") and not b.endswith("ee") else b) + "ing"


def find_token(word, sent):
    w = word.lower()
    for form in (w, plural(w), past(w), ing(w), w + "s", w + "d", w + "ed"):
        m = re.search(r"\b(" + re.escape(form) + r")\b", sent, re.I)
        if m:
            return m.group(1)
    return None


def form_of(token, base):
    t, b = token.lower(), base.lower()
    if t == b: return None
    if t in (past(b), b + "d", b + "ed"): return "ed"
    if t in (plural(b), b + "s"): return "s"
    if t == ing(b): return "ing"
    return None


def inflect(other, pos, kind):
    if kind is None or " " in other or other.lower() in NOINFL: return other
    if kind in ("ed", "ing") and "v" not in pos: return other
    if kind == "s" and not ("v" in pos or "n" in pos): return other
    return {"ed": past, "s": plural, "ing": ing}[kind](other)


def cap(s, like):
    return s[:1].upper() + s[1:] if like[:1].isupper() else s


def meaning(w):
    return f"{w['zh']} — {w['def']}"


def ow(o):
    return [o["w"], o["pos"], o["zh"], o["def"]]


def site_card(w):
    """The word's own flashcard on this site (學測6000字 L4–6 word-family groups)."""
    l = lv(w)
    if l not in (4, 5, 6):
        return None
    idx = SITE.get(f"l{l}", {})
    if w.lower() in idx:
        return [f"學測 L{l} Group {idx[w.lower()][0]}", f"l{l}-unit{idx[w.lower()][0]}.html"]
    return None


def load_site_index():
    t = open(os.path.join(ROOT, "gsat-words.js"), encoding="utf8").read()
    for line in t.split("\n"):
        if line.startswith("window.GSAT_INDEX"):
            return json.loads(line[line.index("=") + 1:].strip().rstrip(";"))
    return {}


SITE = load_site_index()
G = parse()
rng = random.Random(20261125)
problems = []
for g in G:
    ls = [lv(w["w"]) or 6.5 for w in g["words"]]
    g["score"] = sum(ls) / len(ls)

units, meta, index = [], [], {}
for code, zone, tname, ten, idp in TYPES:
    gs = sorted([g for g in G if g["type"] == code], key=lambda g: (g["score"], g["name"]))
    for i, g in enumerate(gs):
        g["id"] = f"{idp}-{i + 1:03d}"
    pool = [w for g in gs for w in (g["words"][1:] if code == "C" else g["words"])]
    for ui in range(0, len(gs), 10):
        u = ui // 10 + 1
        chunk = gs[ui:ui + 10]
        out_groups, cards = [], []
        for g in chunk:
            words = []
            if code == "C":  # one board card per group: the advanced meaning, with both meanings in 中文
                common, adv = g["words"][0], g["words"][-1]
                ci = len(cards)
                cards.append({"w": g["name"], "p": adv["pos"], "d": adv["def"], "c": f"常見：{common['zh']}／進階：{adv['zh']}",
                              "s": adv["s"], "t": adv["t"], "g": g["id"]})
            for w in g["words"]:
                l = lv(w["w"])
                if code != "C":
                    ci = len(cards)
                    cards.append({"w": w["w"], "p": w["pos"], "d": w["def"], "c": w["zh"], "s": w["s"], "t": w["t"], "g": g["id"]})
                sc = site_card(w["w"])
                words.append({"w": w["w"], "pos": w["pos"], "def": w["def"], "zh": w["zh"], "sense": w["sense"],
                              "syn": w["syn"], "ant": w["ant"], "s": w["s"], "t": w["t"], "lv": l or 0,
                              "cards": [sc] if sc else [], "ci": ci})
            qs = []
            if code != "C":
                names = [o["w"] for o in g["words"]]
                for wi, w in enumerate(words):  # 例句選對字
                    tok = find_token(w["w"], w["s"])
                    if not tok:
                        problems.append(f"{g['id']} {w['w']}: word not found in sentence"); continue
                    kind = form_of(tok, w["w"])
                    opts = [cap(inflect(o["w"], o["pos"], kind) if oi != wi else tok.lower(), tok) for oi, o in enumerate(g["words"])]
                    if len(set(x.lower() for x in opts)) < len(opts):
                        problems.append(f"{g['id']} {w['w']}: duplicate options {opts}"); continue
                    blank = re.sub(r"\b" + re.escape(tok) + r"\b", "_____", w["s"], count=1)
                    qs.append({"k": "cz", "w": w["w"], "q": blank, "full": w["s"], "t": w["t"], "o": opts, "ow": [ow(o) for o in g["words"]], "a": wi, "ci": w["ci"]})
                for wi, w in enumerate(words):  # 判斷真意
                    src = list(g["words"])[:4]
                    if wi >= 4:
                        src = src[:3] + [g["words"][wi]]
                    fill = [x for x in pool if x["w"] not in names and x["pos"][:1] == w["pos"][:1]]
                    rng.shuffle(fill)
                    for x in fill:
                        if len(src) >= 4: break
                        if meaning(x) not in [meaning(o) for o in src]: src.append(x)
                    opts = [meaning(o) for o in src]
                    qs.append({"k": "tm", "w": w["w"], "q": w["w"], "pos": w["pos"], "o": opts, "ow": [ow(o) for o in src],
                               "a": opts.index(meaning(g["words"][wi])), "ci": w["ci"]})
            else:
                common, adv = g["words"][0], g["words"][-1]
                fill = [x for x in pool if x["w"] != adv["w"]]
                rng.shuffle(fill)
                src = [adv, common] + fill[:2]
                opts = [meaning(x) for x in src]
                tok = find_token(adv["w"], adv["s"])
                if not tok:
                    problems.append(f"{g['id']} {adv['w']}: word not found in sentence")
                    tok = adv["w"]
                hl = re.sub(r"\b" + re.escape(tok) + r"\b", "[[" + tok + "]]", adv["s"], count=1)
                qs.append({"k": "tm", "w": adv["w"], "q": adv["w"], "pos": adv["pos"], "ctx": hl, "t": adv["t"], "o": opts, "ow": [ow(x) for x in src], "a": 0, "ci": words[-1]["ci"]})
                ctok = find_token(common["w"], common["s"]) or common["w"]
                chl = re.sub(r"\b" + re.escape(ctok) + r"\b", "[[" + ctok + "]]", common["s"], count=1)
                fill = [x for x in pool if x["w"] != adv["w"]]
                rng.shuffle(fill)
                csrc = [common, adv] + fill[:2]
                copts = [meaning(x) for x in csrc]
                qs.append({"k": "tm", "w": common["w"], "q": common["w"], "pos": common["pos"], "ctx": chl, "t": common["t"], "o": copts, "ow": [ow(x) for x in csrc], "a": 0, "ci": words[0]["ci"]})
            name = g["name"]
            out_groups.append({"id": g["id"], "tipZh": g["tz"], "tipEn": g["te"], "trap": g["trap"], "name": name, "words": words, "qs": qs})
            for w in dict.fromkeys(x["w"].lower() for x in g["words"]):
                index.setdefault(w, []).append([zone, u, g["id"], name])
        unit = {"zone": zone, "u": u, "type": code, "typeName": tname, "typeEn": ten, "title": f"{tname} U{u}",
                "groups": out_groups, "cards": cards}
        units.append(unit)
        meta.append({"zone": zone, "u": u, "type": code, "count": len(out_groups), "names": [g["name"] for g in out_groups]})

# ---------- write pages ----------
TEMPLATE = open(os.path.join(HERE, "page.html"), encoding="utf8").read()
for U in units:
    z, u = U["zone"], U["u"]
    data = dict(U)
    with open(os.path.join(ROOT, f"{z}-unit{u}-data.js"), "w", encoding="utf8") as f:
        f.write(f"// Auto-generated by tools/confusables/build.py — 學測易混淆字 {U['title']}\n")
        f.write("window.CF_UNIT = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n(window.CF_ALL = window.CF_ALL || []).push(window.CF_UNIT);\n")
    html = (TEMPLATE.replace("{{DATA}}", f'  <script src="{z}-unit{u}-data.js?v={VER}"></script>\n')
            .replace("{{TITLE}}", U["title"]).replace("{{V}}", VER).replace("{{ZONE}}", z))
    with open(os.path.join(ROOT, f"{z}-unit{u}.html"), "w", encoding="utf8") as f:
        f.write(html)
wrong = (TEMPLATE.replace("{{DATA}}", "".join(f'  <script src="{U["zone"]}-unit{U["u"]}-data.js?v={VER}"></script>\n' for U in units))
         .replace("{{TITLE}}", "錯題本").replace("{{V}}", VER).replace("{{ZONE}}", "fa")
         .replace('<body data-set="cf"', '<body data-set="cf" data-page="wrong"'))
with open(os.path.join(ROOT, "cf-wrong.html"), "w", encoding="utf8") as f:
    f.write(wrong)
with open(os.path.join(ROOT, "cf-index.js"), "w", encoding="utf8") as f:
    f.write("// Auto-generated by tools/confusables/build.py — 學測易混淆字 index\n")
    f.write("window.CF_TYPES = " + json.dumps([[c, z, t, e] for c, z, t, e, _ in TYPES], ensure_ascii=False) + ";\n")
    f.write("window.CF_META = " + json.dumps(meta, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("window.CF_INDEX = " + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ";\n")
for code, zone, tname, ten, _ in TYPES:
    board = [{"unit": U["u"], "theme": "；".join(g["name"] for g in U["groups"][:3]) + ("…" if len(U["groups"]) > 3 else ""),
              "cards": [{k: c[k] for k in ("w", "p", "d", "c", "s", "t")} for c in U["cards"]]}
             for U in units if U["zone"] == zone]
    with open(os.path.join(ROOT, f"{zone}-dashboard-data.js"), "w", encoding="utf8") as f:
        f.write(f"// Auto-generated for the Unit Board — 學測易混淆字 {tname} (tools/confusables/build.py)\n")
        f.write(f"window.{zone.upper()}_DASHBOARD_UNITS = " + json.dumps(board, ensure_ascii=False, separators=(",", ":")) + ";\n")

# ---------- register in books.js and index.html ----------
b = open(os.path.join(ROOT, "books.js"), encoding="utf8").read()
zs = b.index("window.VOCAB_ZONES = ") + len("window.VOCAB_ZONES = ")
ze = b.index("};\n", zs) + 1
zones = json.loads(b[zs:ze])
HELP = ("每一組先看<b>對照卡</b>（分辨口訣、陷阱、每個字的詞性、中英文意思、例句），再做<b>測驗</b>：例句選對字＋判斷真意，"
        "答完四個選項都有中英文意思；完成後成績送給老師，答錯的字自動加入 ★ 複習清單和錯題本。"
        "<a href=\"cf-wrong.html\">📕 錯題本</a>")
new = {}
for code, zone, tname, ten, _ in TYPES:
    us = [U for U in units if U["zone"] == zone]
    new[zone] = {
        "book": "confus", "prefix": zone, "tag": "易混淆", "name": f"學測易混淆字 · {tname} {ten}", "short": tname,
        "num": code, "levelLabel": f"學測易混淆字-{tname}", "cls": "", "family": False, "headLabel": "", "unitName": "Unit",
        "tile": f"{tname} {ten}", "data": f"{zone}-dashboard-data.js", "global": f"{zone.upper()}_DASHBOARD_UNITS",
        "page": f"{zone}-unit{{u}}.html", "quiz": f"{zone}-unit{{u}}.html#quiz",
        "units": [U["u"] for U in us], "names": {str(U["u"]): U["title"] for U in us},
        "help": HELP, "blurb": f"{sum(len(U['groups']) for U in us)} 組易混淆字 · 對照卡＋測驗",
    }
zones = {k: v for k, v in zones.items() if v.get("book") != "confus"}
zones.update(new)
b = b[:zs] + json.dumps(zones, ensure_ascii=False, indent=1) + b[ze:]
bs = b.index("window.VOCAB_BOOKS = ") + len("window.VOCAB_BOOKS = ")
be = b.index("];\n", bs) + 1
books = [x for x in json.loads(b[bs:be]) if x["id"] != "confus"]
ids = [x["id"] for x in books]
books.insert(ids.index("colloc") + 1 if "colloc" in ids else 1,
             {"id": "confus", "name": "學測易混淆字 Confusables", "zones": [t[1] for t in TYPES], "group": "gsat"})
b = b[:bs] + json.dumps(books, ensure_ascii=False, indent=1) + b[be:]
open(os.path.join(ROOT, "books.js"), "w", encoding="utf8").write(b)
h = open(os.path.join(ROOT, "index.html"), encoding="utf8").read()
h = re.sub(r'  <script src="f[abcd]-dashboard-data\.js\?v=[^"]*"></script>\n', "", h)
tags = "".join(f'  <script src="{t[1]}-dashboard-data.js?v={VER}"></script>\n' for t in TYPES)
h = h.replace('  <script src="tracker-config.js', tags + '  <script src="tracker-config.js', 1)
h = re.sub(r'books\.js\?v=[^"]*', f"books.js?v={VER}", h)
open(os.path.join(ROOT, "index.html"), "w", encoding="utf8").write(h)

nq = sum(len(g["qs"]) for U in units for g in U["groups"])
print(f"{len(units)} units, {sum(len(U['groups']) for U in units)} groups, {nq} questions, {len(index)} indexed words")
if problems:
    print("PROBLEMS:\n" + "\n".join(problems))
