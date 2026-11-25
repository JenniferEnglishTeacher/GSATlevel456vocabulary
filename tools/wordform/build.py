#!/usr/bin/env python3
"""詞類變化 Word Formation (book `wordform`, zone wf) — build the unit pages, data and board registration.

Source: source/fce_wordform.json = window.FCE_WF of fce-wordform-data.js on Jennifer's
GEPT-PET-FCE-TOEFL-IELTS-agree-disagree-speaking site (490 word families, 1,191 sentences).
English definitions come from the cards already on this site (every *-dashboard-data.js); the ones the site
did not have are written in source/extra_defs.tsv.

Usage:  python3 tools/wordform/build.py <version>      (needs: pip install wordfreq — used only to add real
        inflected forms as extra MCQ options when a word family has fewer than 4 forms)
"""
import json, os, re, sys, random, glob

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
VER = sys.argv[1] if len(sys.argv) > 1 else "20261125wf"
PER_UNIT = 15
MINF = 1.7   # wordfreq zipf floor for generated MCQ options
ZONE = "wf"

from wordfreq import zipf_frequency

D = json.load(open(os.path.join(HERE, "source", "fce_wordform.json"), encoding="utf8"))
EXTRA = {}
for line in open(os.path.join(HERE, "source", "extra_defs.tsv"), encoding="utf8"):
    if "\t" in line:
        w, d = line.rstrip("\n").split("\t", 1)
        EXTRA[w.strip().lower()] = d.strip()

# ---------- word knowledge from the rest of the site ----------
SITECARD = {}   # word -> {p, d, c, s, t}
for f in sorted(glob.glob(os.path.join(ROOT, "*-dashboard-data.js"))):
    if os.path.basename(f).startswith(ZONE + "-"):
        continue
    t = open(f, encoding="utf8").read()
    m = re.search(r"=\s*(\[.*\])\s*;?\s*$", t, re.S)
    if not m:
        continue
    try:
        units = json.loads(m.group(1))
    except Exception:
        continue
    for u in units:
        for c in u.get("cards", []):
            w = str(c.get("w", "")).strip().lower()
            if w and c.get("d") and w not in SITECARD:
                SITECARD[w] = c

GI = {}
t = open(os.path.join(ROOT, "gsat-words.js"), encoding="utf8").read()
for line in t.split("\n"):
    if line.startswith("window.GSAT_INDEX"):
        GI = json.loads(line[line.index("=") + 1:].strip().rstrip(";"))
LEVELS = json.load(open(os.path.join(ROOT, "tools", "confusables", "gsat6000_words.json"), encoding="utf8"))


def level(w):
    e = LEVELS.get(w.lower())
    return e["lv"] if e else 0


def flash(w):
    """The word's own flashcard on this site (學測6000字 L4–6 word-family groups)."""
    for L in ("l4", "l5", "l6"):
        e = GI.get(L, {}).get(w.lower())
        if e:
            return [f"學測 L{L[1]} Group {e[0]}", f"{L}-unit{e[0]}.html#w={w}"]
    return None


def definition(w, pos):
    k = w.lower()
    for L in ("l4", "l5", "l6"):
        e = GI.get(L, {}).get(k)
        if e and e[2]:
            return e[2]
    c = SITECARD.get(k)
    if c:
        return c["d"]
    return EXTRA.get(k, "")


norm = lambda s: re.sub(r"\s+", " ", str(s).strip().lower().replace("’", "'"))


def alts(ans):
    return [a.strip() for a in re.split(r"\s*/\s*", ans) if a.strip()]


# ---------- inflections (only to fill MCQ options in small families; kept if wordfreq knows them) ----------
V = "aeiou"


def forms(b):
    out = set()
    if " " in b or len(b) < 3:
        return out
    if b.endswith("y") and b[-2] not in V:
        out |= {b[:-1] + "ies", b[:-1] + "ied", b + "ing", b[:-1] + "ily", b[:-1] + "iness"}
    elif b.endswith("e"):
        out |= {b + "s", b + "d", b[:-1] + "ing", b + "ly"}
    elif re.search(r"(s|x|z|ch|sh)$", b):
        out |= {b + "es", b + "ed", b + "ing", b + "ly"}
    else:
        out |= {b + "s", b + "ed", b + "ing", b + "ly", b + "ness"}
        if re.search(r"[^aeiou][aeiou][bdgmnprt]$", b) and len(b) <= 5:
            out |= {b + b[-1] + "ed", b + b[-1] + "ing"}
    if b.endswith("ic"):
        out.add(b + "ally")
    if b.endswith("le"):
        out.add(b[:-1] + "y")
    if b.endswith("ly") and len(b) > 4:
        out.add(b[:-2])
    # derivational forms (adj./n./adv. of the same root)
    for a, rep in (("ent", ["ence", "ency", "ently"]), ("ant", ["ance", "ancy", "antly"]), ("ous", ["ously", "ousness"]),
                   ("able", ["ably", "ability"]), ("ible", ["ibly", "ibility"]), ("al", ["ally", "ality", "alize", "alism"]),
                   ("ate", ["ation", "ately", "ative"]), ("ic", ["ical", "ically"]), ("ive", ["ively", "iveness", "ivity"]),
                   ("ful", ["fully", "fulness"]), ("less", ["lessly", "lessness"]), ("y", ["ier", "iest", "ily", "iness"])):
        if b.endswith(a):
            out |= {b[:-len(a)] + r for r in rep}
    if re.fullmatch(r"[a-z]{3,7}", b):
        out |= {b + "er", b + "est", b + "y", b + "ful", b + "less", b + "ous", b + "al", b + "ity", b + "ize"}
        if b.endswith("e"):
            out |= {b + "r", b + "st", b[:-1] + "y", b[:-1] + "ous", b[:-1] + "ity"}
    for p in ("un", "in", "im", "il", "ir", "dis", "mis", "non"):
        out.add(p + b)
    return out


MANUAL = {}   # family -> [[word, pos, zh, def], ...]
for line in open(os.path.join(HERE, "source", "manual_options.tsv"), encoding="utf8"):
    if line.strip() and not line.startswith("#"):
        fam, w, pos, zh, d = line.rstrip("\n").split("\t")
        MANUAL.setdefault(fam, []).append([w, pos, zh, d])
MANUAL_INFO = {r[0]: r for rows in MANUAL.values() for r in rows}
for line in open(os.path.join(HERE, "source", "option_info.tsv"), encoding="utf8"):
    if line.strip() and not line.startswith("#"):
        w, pos, zh, d = line.rstrip("\n").split("\t")
        MANUAL_INFO[w] = [w, pos, zh, d]

# generated words that are names, slang or not standard English
BLOCK = set(open(os.path.join(HERE, "source", "block.txt"), encoding="utf8").read().split())


def british(c):
    """organise / behaviour / symbolises: the American spelling is the one students learn."""
    for a, b in (("ise", "ize"), ("isi", "izi"), ("isa", "iza"), ("our", "or"), ("yse", "yze"), ("lled", "led"), ("lling", "ling")):
        if a in c and zipf_frequency(c.replace(a, b, 1), "en") > zipf_frequency(c, "en"):
            return True
    return False


def common_prefix(a, b):
    n = 0
    for x, y in zip(a, b):
        if x != y:
            break
        n += 1
    return n


IRREG = {"awoke": "awake", "awoken": "awake", "struck": "strike", "strove": "strive", "striven": "strive", "misled": "mislead",
         "arose": "arise", "arisen": "arise", "forbade": "forbid", "forbidden": "forbid", "withdrew": "withdraw"}


def lemmas(w):
    out = [IRREG[w]] if w in IRREG else []
    for suf, reps in (("ies", ["y"]), ("ied", ["y"]), ("ing", ["", "e"]), ("ed", ["", "e"]), ("es", ["", "e"]), ("s", [""]), ("d", [""])):
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            st = w[:-len(suf)]
            out += [st + r for r in reps]
            if len(st) > 3 and st[-1] == st[-2]:
                out.append(st[:-1])
    return out


NEG = ("non", "dis", "mis", "un", "in", "im", "il", "ir")


def base_member(word, members):
    w = word.lower()
    for m in members:
        if norm(m["form"]) == w:
            return m, True
    for l in lemmas(w):
        for m in members:
            if norm(m["form"]) == l:
                return m, False
    for l in [w[:-2], w[:-1], w[:-3], w[:-2] if w.endswith("ier") else None]:  # comparatives: smoother, nicer, happiest
        for m in members:
            if l and norm(m["form"]) in (l, l + "y", l[:-1] + "y" if l.endswith("i") else None) and "adj" in m["pos"]:
                return m, False
    for p in NEG:
        if w.startswith(p) and len(w) - len(p) >= 4:
            m, exact = base_member(w[len(p):], members)
            return m, False
    best = max(members, key=lambda m: (common_prefix(w, m["form"].lower()), -abs(len(m["form"]) - len(w))))
    return best, False


def form_note(word, base):
    w, b = word.lower(), base.lower()
    if not w.startswith(b[:3]) and any(w.startswith(p) for p in NEG):
        return f"{guess_pos(w, '')}（{base} 加否定字首）".replace("（", "（", 1) if guess_pos(w, "") else f"（{base} 加否定字首）"
    if w.endswith(("er", "r")) and w[:-2] in (b, b[:-1]) or w == b + "r" or w == b[:-1] + "ier":
        return f"{base} 的比較級"
    if w.endswith("est") and (w[:-3] in (b, b[:-1]) or w == b + "st" or w == b[:-1] + "iest"):
        return f"{base} 的最高級"
    if w in IRREG:
        return f"{IRREG[w]} 的過去式／過去分詞"
    if w.endswith("ing"):
        return f"{base} 的 V-ing"
    if w.endswith("ed"):
        return f"{base} 的過去式／過去分詞"
    if w.endswith("ies") or (w.endswith("s") and not b.endswith("s")):
        return f"{base} 的複數／第三人稱單數"
    if w.endswith("ly"):
        return f"{base} 的副詞"
    return ""


def guess_pos(word, base_pos):
    w = word.lower()
    for suf, pos in (("ness", "n."), ("ity", "n."), ("ment", "n."), ("tion", "n."), ("sion", "n."), ("ance", "n."), ("ence", "n."),
                     ("ancy", "n."), ("ency", "n."), ("ism", "n."), ("ist", "n."), ("ian", "n."), ("ure", "n."),
                     ("ly", "adv."), ("ous", "adj."), ("ful", "adj."), ("less", "adj."), ("able", "adj."), ("ible", "adj."),
                     ("ive", "adj."), ("ical", "adj."), ("ic", "adj."), ("al", "adj."), ("ize", "v."), ("ate", "v."),
                     ("er", "n."), ("or", "n.")):
        if w.endswith(suf):
            return pos
    return base_pos


def option_info(word, members):
    if word in MANUAL_INFO:
        return list(MANUAL_INFO[word])
    m, exact = base_member(word, members)
    if exact:
        return [word, m["pos"], m["zh"], definition(m["form"], m["pos"]) or "—"]
    c = SITECARD.get(word.lower())
    if c and c.get("c"):
        return [word, c.get("p", ""), c["c"], c["d"]]
    d = EXTRA.get(word.lower())
    note = form_note(word, m["form"]) or f"{guess_pos(word, m['pos'])}（與 {m['form']} 同字族）"
    return [word, note, m["zh"], d or definition(m["form"], m["pos"]) or "—"]


def cap_like(s, like):
    return s[:1].upper() + s[1:] if like[:1].isupper() else s


rng = random.Random(20261125)
problems, extra_used = [], 0
fams = []
for f in D:
    members, byform = [], {}
    for m in f["members"]:
        k = m["form"].lower()
        if k in byform:  # same spelling, another part of speech (alert adj./v./n.): one card
            e = byform[k]
            e["pos"] = "/".join(dict.fromkeys(e["pos"].split("/") + m["pos"].split("/")))
            e["zh"] = "；".join(dict.fromkeys(e["zh"].split("；") + m["zh"].split("；")))
            continue
        d = definition(m["form"], m["pos"])
        if not d:
            problems.append(f"{f['fam']}: no English definition for {m['form']}")
        members.append({"w": m["form"], "pos": m["pos"], "zh": m["zh"], "def": d, "lv": level(m["form"]), "card": flash(m["form"])})
        byform[k] = members[-1]
    pool = []
    for x in [m["form"] for m in f["members"]] + [i["stem"] for i in f["items"]] + [a for i in f["items"] for a in alts(i["answer"])]:
        if norm(x) not in [norm(p) for p in pool]:
            pool.append(x.lower() if not x.isupper() else x)
    pool = [p.lower() for p in pool]
    items = []
    for it in f["items"]:
        acc = alts(it["answer"])
        accn = [norm(a) for a in acc]
        m = re.match(r"^(.*?)_{2,}\s*\(\s*([^)]+?)\s*\)(.*)$", it["sentence"], re.S)
        pre, stem, post = m.group(1), m.group(2), m.group(3)
        full = pre + acc[0] + post
        note = it.get("note", "")
        tr, tip = (note.split("考點", 1) + [""])[:2]
        tr = tr.strip().rstrip("。") + "。" if tr.strip() else ""
        tip = tip.lstrip("：: ").strip()
        # MCQ options: the answer + 3 other forms of the same family (real inflected forms if the family is small)
        dis = [p for p in pool if norm(p) not in accn]
        rng.shuffle(dis)
        dis = dis[:3]
        for r in MANUAL.get(f["fam"], []):
            if len(dis) < 3 and r[0] not in dis:
                dis.append(r[0])
        if len(dis) < 3:
            # first: forms of the other family words; last resort: forms of the answer itself
            # (an inflection of the answer, e.g. its plural, may also fit the sentence)
            take = []
            for src in ([p for p in pool if norm(p) not in accn], acc):
                cands = set()
                for p in src:
                    cands |= forms(p.lower())
                cands = [c for c in cands if norm(c) not in accn and c not in dis + take and c not in BLOCK
                         and zipf_frequency(c, "en") >= MINF and not british(c)]
                cands.sort(key=lambda c: -zipf_frequency(c, "en"))
                take += cands[:3 - len(dis) - len(take)]
            extra_used += len(take)
            dis += take
        if len(dis) < 3:
            problems.append(f"{it['id']}: only {len(dis) + 1} options")
        right = acc[0]
        opts = [right] + dis
        order = list(range(len(opts)))
        rng.shuffle(order)
        opts = [opts[i] for i in order]
        a = order.index(0)
        opts = [cap_like(o, right) for o in opts]
        info = [option_info(o.lower(), f["members"]) for o in opts]
        for x, o in zip(info, opts):
            x[0] = o
        items.append({"id": it["id"], "pre": pre, "stem": stem, "post": post, "ans": acc, "full": full,
                      "t": tr, "tip": tip, "o": opts, "ow": info, "a": a})
    fams.append({"fam": f["fam"], "members": members, "items": items})

# ---------- units: 15 families each, alphabetical ----------
units, meta, index = [], [], {}
for ui in range(0, len(fams), PER_UNIT):
    u = ui // PER_UNIT + 1
    chunk = fams[ui:ui + PER_UNIT]
    cards = []
    for F in chunk:
        for m in F["members"]:
            m["ci"] = len(cards)
            hit = next((i for i in F["items"] if norm(m["w"]) in [norm(a) for a in i["ans"]]), None)
            sc = SITECARD.get(m["w"].lower())
            if hit:
                s, tt = hit["full"], hit["t"]
            elif sc and sc.get("s"):
                s, tt = sc["s"], sc.get("t", "")
            else:
                s, tt = F["items"][0]["full"], F["items"][0]["t"]
            cards.append({"w": m["w"], "p": m["pos"], "d": m["def"], "c": m["zh"], "s": s, "t": tt, "f": F["fam"]})
        for i in F["items"]:
            bm, _ = base_member(i["ans"][0], [{"form": m["w"], **m} for m in F["members"]])
            i["ci"] = bm["ci"]
        for m in F["members"]:
            index.setdefault(m["w"].lower(), [u, F["fam"]])
    title = f"{chunk[0]['fam']} – {chunk[-1]['fam']}"
    units.append({"zone": ZONE, "u": u, "title": title, "fams": chunk, "cards": cards})
    meta.append({"u": u, "title": title, "n": sum(len(F["items"]) for F in chunk)})

# ---------- write pages ----------
TEMPLATE = open(os.path.join(HERE, "page.html"), encoding="utf8").read()
for U in units:
    u = U["u"]
    with open(os.path.join(ROOT, f"{ZONE}-unit{u}-data.js"), "w", encoding="utf8") as fh:
        fh.write(f"// Auto-generated by tools/wordform/build.py — 詞類變化 Unit {u}: {U['title']}\n")
        fh.write("window.WF_UNIT = " + json.dumps(U, ensure_ascii=False, separators=(",", ":")) + ";\n")
    html = (TEMPLATE.replace("{{DATA}}", f'  <script src="{ZONE}-unit{u}-data.js?v={VER}"></script>\n')
            .replace("{{TITLE}}", f"Unit {u} · {U['title']}").replace("{{V}}", VER))
    with open(os.path.join(ROOT, f"{ZONE}-unit{u}.html"), "w", encoding="utf8") as fh:
        fh.write(html)
with open(os.path.join(ROOT, "wf-index.js"), "w", encoding="utf8") as fh:
    fh.write("// Auto-generated by tools/wordform/build.py — 詞類變化 index (word -> [unit, family])\n")
    fh.write("window.WF_META = " + json.dumps(meta, ensure_ascii=False, separators=(",", ":")) + ";\n")
    fh.write("window.WF_INDEX = " + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ";\n")
board = [{"unit": U["u"], "theme": f"{U['title']} · {len(U['fams'])} 字族 · {sum(len(F['items']) for F in U['fams'])} 題",
          "cards": [{k: c[k] for k in ("w", "p", "d", "c", "s", "t")} for c in U["cards"]]} for U in units]
with open(os.path.join(ROOT, f"{ZONE}-dashboard-data.js"), "w", encoding="utf8") as fh:
    fh.write("// Auto-generated for the Unit Board — 詞類變化 Word Formation (tools/wordform/build.py)\n")
    fh.write(f"window.WF_DASHBOARD_UNITS = " + json.dumps(board, ensure_ascii=False, separators=(",", ":")) + ";\n")

# ---------- register in books.js, index.html, teacher.html, review-arcade.html ----------
b = open(os.path.join(ROOT, "books.js"), encoding="utf8").read()
zs = b.index("window.VOCAB_ZONES = ") + len("window.VOCAB_ZONES = ")
ze = b.index("};\n", zs) + 1
zones = json.loads(b[zs:ze])
HELP = ("每個字族先看<b>字族卡</b>（每個詞類的詞性、中英文意思、🔊 發音），再看例句練習；"
        "<b>✏️ Quiz</b> 進入測驗，自己選 <b>✍️ 拼字</b>（打出正確詞類）或 <b>🔘 選擇題</b>（四選一，答完四個選項都有詞性與中英文意思）。"
        "完成後成績送給老師，答錯的字自動加入 ★ 複習清單。")
zones = {k: v for k, v in zones.items() if v.get("book") != "wordform"}
zones[ZONE] = {
    "book": "wordform", "prefix": ZONE, "tag": "詞類", "name": "詞類變化 Word Formation", "short": "詞類變化",
    "num": "W", "levelLabel": "學測詞類變化", "cls": "va", "family": False, "headLabel": "", "unitName": "Unit",
    "tile": "詞類變化 Word Formation", "data": f"{ZONE}-dashboard-data.js", "global": "WF_DASHBOARD_UNITS",
    "page": f"{ZONE}-unit{{u}}.html", "quiz": f"{ZONE}-unit{{u}}.html#quiz",
    "units": [U["u"] for U in units], "names": {str(U["u"]): U["title"] for U in units},
    "help": HELP, "blurb": f"{len(fams)} 個字族 · {sum(len(F['items']) for F in fams)} 題 · 字族卡＋拼字／選擇題",
}
b = b[:zs] + json.dumps(zones, ensure_ascii=False, indent=1) + b[ze:]
bs = b.index("window.VOCAB_BOOKS = ") + len("window.VOCAB_BOOKS = ")
be = b.index("];\n", bs) + 1
books = [x for x in json.loads(b[bs:be]) if x["id"] != "wordform"]
ids = [x["id"] for x in books]
books.insert(ids.index("confus") + 1 if "confus" in ids else 1,
             {"id": "wordform", "name": "詞類變化 Word Formation", "zones": [ZONE], "group": "gsat"})
b = b[:bs] + json.dumps(books, ensure_ascii=False, indent=1) + b[be:]
open(os.path.join(ROOT, "books.js"), "w", encoding="utf8").write(b)

for page, anchor in (("index.html", '  <script src="tracker-config.js'), ("teacher.html", None), ("review-arcade.html", None)):
    p = os.path.join(ROOT, page)
    h = open(p, encoding="utf8").read()
    h = re.sub(r'[ \t]*<script src="wf-dashboard-data\.js\?v=[^"]*"></script>\n', "", h)
    m = re.search(r'([ \t]*)<script src="fa-dashboard-data\.js\?v=[^"]*"></script>\n', h)
    if m:
        h = h[:m.start()] + f'{m.group(1)}<script src="wf-dashboard-data.js?v={VER}"></script>\n' + h[m.start():]
    else:
        problems.append(f"{page}: fa-dashboard-data.js tag not found; add wf-dashboard-data.js by hand")
    h = re.sub(r'books\.js\?v=[^"]*', f"books.js?v={VER}", h)
    open(p, "w", encoding="utf8").write(h)

print(f"{len(units)} units, {len(fams)} families, {sum(len(F['items']) for F in fams)} questions, "
      f"{sum(len(F['members']) for F in fams)} family words, {extra_used} inflected options added")
if problems:
    print("PROBLEMS:\n" + "\n".join(problems))
