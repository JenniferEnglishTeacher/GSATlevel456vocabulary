#!/usr/bin/env python3
"""搭配詞 Collocations book: builds the zone pages, per-unit data and dashboard data.

Source: tools/colloc/source.json  {zone: [{h, lv, ty, en, zh}, ...]}
  - h = headword, lv = 學測 level, ty = usage type, en = collocation (connectives: example sentence), zh = 繁中
Optional sentences: tools/colloc/sentences/<zone>-unit<N>.json  {phrase: [sentence_with_target, 中文翻譯]}
  The sentence must contain the collocation's answer word; when present the MCQ shows the sentence + its 中文.
Word info for the options (POS / English / 中文): tools/colloc/wordinfo.json  {word: {p, d, c}}

Run:  python3 tools/colloc_emit.py
"""
import hashlib, json, os, random, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "tools/colloc/source.json"
SENT_DIR = ROOT / "tools/colloc/sentences"
INFO = ROOT / "tools/colloc/wordinfo.json"

ZONES = {
    # id: (display name, short tab label, tab number, POS shown on options, colour class)
    "cv": ("學測單字搭配詞 · 動詞篇 Verb Collocations", "動詞 Verbs", "V", "v.", ""),
    "cn": ("學測單字搭配詞 · 名詞篇 Noun Collocations", "名詞 Nouns", "N", "n.", "hot"),
    "ca": ("學測單字搭配詞 · 形容詞篇 Adjective Collocations", "形容詞 Adjectives", "Adj", "adj.", "va"),
    "cd": ("學測單字搭配詞 · 副詞篇 Adverb Collocations", "副詞 Adverbs", "Adv", "adv.", ""),
    "cc": ("學測單字搭配詞 · 連接詞與轉承語篇 Connectives", "連接詞 Connectives", "Conj", "conj.", "hot"),
    "jn": ("會考單字搭配詞 · 名詞篇 Noun Collocations", "名詞 Nouns", "N", "n.", "hot"),
    "jv": ("會考單字搭配詞 · 動詞篇 Verb Collocations", "動詞 Verbs", "V", "v.", ""),
    "ja": ("會考單字搭配詞 · 形容詞篇 Adjective Collocations", "形容詞 Adjectives", "Adj", "adj.", "va"),
    "jd": ("會考單字搭配詞 · 副詞篇 Adverb Collocations", "副詞 Adverbs", "Adv", "adv.", ""),
    "jp": ("會考單字搭配詞 · 介係詞篇 Preposition Collocations", "介係詞 Prepositions", "Prep", "prep.", "hot"),
    "jc": ("會考單字搭配詞 · 轉承詞篇 Connectives", "轉承詞 Connectives", "Conj", "conj.", "va"),
}
CONN = {"cc", "jc"}  # connective zones: the collocation is a whole example sentence
# 會考 zones blank a multi-word headword ("in front of", "as far as I know") as a whole;
# the 學測 zones keep the original first-word behaviour so their existing questions do not change.
WHOLE_MULTI = {"jn", "jv", "ja", "jd", "jp", "jc"}
SPLIT_HEADS = {"ja", "jd", "jp", "jc"}  # the older zones keep their fixed unit numbering
# book id, book name, short tag used in tracker labels
BOOK_OF = {z: ("colloc", "學測單字搭配詞 Collocations", "學測") for z in ("cv", "cn", "ca", "cd", "cc")}
BOOK_OF.update({z: ("jcolloc", "會考單字搭配詞 Collocations", "會考") for z in ("jn", "jv", "ja", "jd", "jp", "jc")})
FUNC_ZH = {
    "contrast": ("shows an opposite or different idea", "對比／轉折"),
    "concession": ("admits a fact but still goes on to a different point", "讓步"),
    "cause/result": ("shows a reason or a result", "因果"),
    "addition": ("adds another point", "補充／遞進"),
    "condition": ("gives a condition", "條件"),
    "sequence": ("shows the order of events", "順序／時間"),
    "example": ("introduces an example", "舉例"),
    "emphasis": ("makes a point stronger", "強調"),
    "purpose": ("shows a purpose", "目的"),
    "summary": ("sums up or concludes", "總結"),
    "comparison": ("shows that things are alike", "比較／類比"),
    "alternative": ("gives another choice", "選擇／替代"),
    "clarification": ("explains in other words", "換句話說／澄清"),
}
TARGET, MAXU = 28, 40
BLANK = "＿＿＿＿＿"
LIGHT = set("make take have give get do go come put set keep hold run be become bring pay play".split())
STOP = set("a an the of to in on at for by with from as and or be is are was were it its one's oneself sb sth someone something your my his her their our into up out off over about than that this".split())
ZH_STOP = set("的地得之一了是有在和與或及，；、()（）/／…「」。！？：:;,. 被把對使讓很非常人事物某")


def tokens(text, split_hyphen=False):
    pat = r"[A-Za-z][A-Za-z']*" if split_hyphen else r"[A-Za-z][A-Za-z'\-]*"
    return [(m.start(), m.end(), m.group(0)) for m in re.finditer(pat, text)]


def head_forms(h):
    h = h.lower()
    return {h, h + "s", h + "es", h + "ed", h + "d", h + "ing", h + "ly", h + "er", h + "est", h + "'s", h + "s'"}


def find_span(head, text, whole_multi=False):
    """(start, end) of the headword (or its inflected/derived form) inside text, else None."""
    h = re.sub(r"\(.*?\)", "", head).split("/")[0].strip().lower()
    if not h:
        return None
    if whole_multi and " " in h and "…" not in h and "..." not in h:
        m = re.search(r"(?<![A-Za-z])" + re.escape(h).replace(r"\ ", r"\s+") + r"(?![A-Za-z])", text, re.I)
        if m:
            return (m.start(), m.end())
    if " " in h or "…" in h or "..." in h:  # multi-word connective such as "as long as", "not only … but also"
        first = re.split(r"\s*(?:…|\.\.\.)\s*", h)[0].strip()
        m = re.search(r"(?<![A-Za-z])" + re.escape(first) + r"(?![A-Za-z])", text, re.I)
        return (m.start(), m.end()) if m else None
    forms = head_forms(h)
    for split in (False, True):  # whole tokens first, then the parts of hyphen compounds ("award-winning")
        for s, e, t in tokens(text, split):
            if t.lower() in forms:
                return (s, e)
    if len(h) >= 4:
        stem = h[:-1]
        for s, e, t in tokens(text):
            tl = t.lower()
            if tl.startswith(stem) and 0 <= len(tl) - len(h) <= 4:
                return (s, e)
        if h.endswith("y"):
            for s, e, t in tokens(text):
                if t.lower().startswith(h[:-1] + "i"):
                    return (s, e)
    return None


def neighbours(text, span):
    before = re.findall(r"[A-Za-z']+", text[:span[0]])
    after = re.findall(r"[A-Za-z']+", text[span[1]:])
    return (before[-1].lower() if before else "", after[0].lower() if after else "")


def form_class(tok, head):
    t, h = tok.lower(), head.lower()
    if " " in t:
        return "multi%d" % len(t.split())
    if t == h:
        return "base_ly" if t.endswith("ly") else "base"
    for suf in ("ly", "ing", "ed", "est", "er", "s"):
        if t.endswith(suf) and not h.endswith(suf):
            return suf
    return "base"


def zh_chars(s):
    return {ch for ch in (s or "") if "一" <= ch <= "鿿" and ch not in ZH_STOP}


def match_case(word, like):
    if like[:1].isupper() and word[:1].islower():
        return word[:1].upper() + word[1:]
    if like[:1].islower() and word[:1].isupper() and not word.isupper():
        return word[:1].lower() + word[1:]
    return word


def seeded(*parts):
    return random.Random(int(hashlib.md5("|".join(map(str, parts)).encode()).hexdigest()[:12], 16))


def build_zone(zone, rows, info, all_phrases):
    is_conn = zone in CONN
    wm = zone in WHOLE_MULTI
    items, skipped = [], []
    for r in rows:
        if " vs" in r["en"].lower() or r["en"].lower().startswith("vs"):
            skipped.append((r["h"], r["en"], "辨析提示"))
            continue
        span = find_span(r["h"], r["en"], wm)
        if not span:
            skipped.append((r["h"], r["en"], "找不到目標字"))
            continue
        ans = r["en"][span[0]:span[1]]
        items.append({**r, "span": span, "ans": ans, "cls": form_class(ans, r["h"]), "nb": neighbours(r["en"], span)})

    # word -> its phrases' content words (to skip a distractor that also collocates)
    content_by_head = {}
    for it in items:
        words = {t.lower() for _, _, t in tokens(it["en"])} - STOP - LIGHT
        content_by_head.setdefault(it["h"].lower(), set()).update(words)
    pool = {}
    for it in items:
        pool.setdefault(it["cls"], []).append(it)

    def zh_of(h):
        i = info.get(h.lower()) or {}
        return i.get("c", "")

    def options_for(it):
        rng = seeded(zone, it["h"], it["en"])
        rest = (it["en"][:it["span"][0]] + " " + it["en"][it["span"][1]:]).lower()
        rest_words = {t.lower() for _, _, t in tokens(rest)} - STOP - LIGHT
        my_zh = zh_chars(zh_of(it["h"])) | (set() if is_conn else zh_chars(it["zh"]))
        cands = pool.get(it["cls"], [])[:]
        rng.shuffle(cands)
        prev_w, next_w = neighbours(it["en"], it["span"])
        def score(c):
            cp, cn = c["nb"]
            sc = 0
            for mine, theirs in ((prev_w, cp), (next_w, cn)):
                if mine and mine == theirs:
                    sc += 1 if mine in STOP else 2
            return -sc
        cands.sort(key=score)
        picked, seen = [], {it["ans"].lower(), it["h"].lower()}
        for c in cands:
            ch, ct = c["h"].lower(), c["ans"].lower()
            if ch in seen or ct in seen:
                continue
            if prev_w == "an" and not re.match(r"[aeiou]", ct):
                continue
            if prev_w == "a" and re.match(r"[aeiou]", ct):
                continue
            if is_conn:
                if c["ty"] == it["ty"]:
                    continue  # same function would also fit
                if abs(len(ct.split()) - len(it["ans"].split())) > 1:
                    continue
            else:
                swapped = (it["en"][:it["span"][0]] + c["ans"] + it["en"][it["span"][1]:]).lower()
                if swapped in all_phrases:
                    continue
                if rest_words and rest_words & content_by_head.get(ch, set()):
                    continue  # the distractor word has its own collocation with the same partner word
                if len(my_zh & zh_chars(zh_of(ch))) >= 2:
                    continue  # near-synonym
            picked.append(c)
            seen |= {ch, ct}
            if len(picked) == 3:
                break
        return picked

    out = []
    for it in items:
        ds = options_for(it)
        if len(ds) < 3:
            skipped.append((it["h"], it["en"], "干擾選項不足"))
            continue
        it["ds"] = ds
        out.append(it)
    return out, skipped


def chunk(items, split_heads=False):
    """split_heads: a headword with very many rows (會考 prepositions) may run across units."""
    units, cur, last = [], [], None
    for it in items:
        if cur and ((it["h"] != last and (len(cur) >= TARGET or len(cur) + 1 > MAXU)) or (split_heads and len(cur) >= MAXU)):
            units.append(cur)
            cur = []
        cur.append(it)
        last = it["h"]
    if cur:
        if units and len(cur) < 10:
            units[-1].extend(cur)
        else:
            units.append(cur)
    return units


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


def word_info(word, head, zone, ty, info):
    pos = ZONES[zone][3]
    if zone in CONN:
        d, c = FUNC_ZH.get(ty, ("connects ideas", ty or "連接"))
        i = info.get(head.lower(), {})
        return {"h": word, "p": i.get("p") or "conj./adv.", "d": i.get("d") or d, "c": (i.get("c") + "｜" if i.get("c") else "") + c}
    i = info.get(head.lower(), {})
    return {"h": head if head.lower() != word.lower() else word, "p": i.get("p") or pos, "d": i.get("d", ""), "c": i.get("c", "")}


def inflect(w, suf):
    lw = w.lower()
    if suf == "s":
        if re.search(r"(s|x|z|ch|sh)$", lw): return w + "es"
        if re.search(r"[^aeiou]y$", lw): return w[:-1] + "ies"
        return w + "s"
    if suf == "ed":
        if lw.endswith("e"): return w + "d"
        if re.search(r"[^aeiou]y$", lw): return w[:-1] + "ied"
        return w + "ed"
    if suf == "ing":
        if lw.endswith("ie"): return w[:-2] + "ying"
        if lw.endswith("e") and not lw.endswith("ee"): return w[:-1] + "ing"
        return w + "ing"
    return w


def reinflect(opts, a, phrase_ans, real):
    """Options for a sentence whose answer form differs from the phrase (harbor -> harbors). None = cannot."""
    if real.lower() == phrase_ans.lower():
        out = opts[:]
        out[a] = real
        return [match_case(o, real) for o in out]
    for suf in ("s", "ed", "ing"):
        if inflect(phrase_ans, suf).lower() == real.lower():
            return [real if j == a else match_case(inflect(o, suf), real) for j, o in enumerate(opts)]
    return None


def js(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":"))


PAGE = """<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="stylesheet" href="colloc.css?v={ver}">
</head>
<body data-tracker-ask>
<div id="app" class="cx-app"><p>Loading… 載入中…</p></div>
<script src="books.js?v={ver}"></script>
<script src="tracker-config.js?v=20261114b"></script>
<script src="tracker.js?v=20261114d"></script>
<script src="{zone}-unit{u}-data.js?v={ver}"></script>
<script src="colloc-app.js?v={ver}"></script>
</body>
</html>
"""


def main():
    ver = sys.argv[1] if len(sys.argv) > 1 else "20261119a"
    src = json.loads(SRC.read_text("utf-8"))
    info = json.loads(INFO.read_text("utf-8")) if INFO.exists() else {}
    all_phrases = {r["en"].lower() for rows in src.values() for r in rows}
    meta = {}
    report = []
    bad_sent = []
    for zone, rows in src.items():
        items, skipped = build_zone(zone, rows, info, all_phrases)
        units = chunk(items, zone in SPLIT_HEADS)
        dash = []
        names = {}
        for n, unit in enumerate(units, 1):
            sent = {}
            sp = SENT_DIR / f"{zone}-unit{n}.json"
            if sp.exists():
                sent = json.loads(sp.read_text("utf-8"))
            sa = SENT_DIR / f"{zone}-all.json"  # 會考 zones: example sentences from Jennifer's 含例句 xlsx
            if sa.exists():
                sent = {**json.loads(sa.read_text("utf-8")), **sent}
            rng = seeded(zone, n, "slots")
            slots = answer_slots(len(unit), rng)
            qs, cards = [], []
            for i, it in enumerate(unit):
                a = slots[i]
                opts = [d["ans"] for d in it["ds"]]
                opts = [match_case(o, it["ans"]) for o in opts]
                opts.insert(a, it["ans"])
                heads = [d["h"] for d in it["ds"]]
                heads.insert(a, it["h"])
                tys = [d["ty"] for d in it["ds"]]
                tys.insert(a, it["ty"])
                s0, s1 = it["span"]
                q = {
                    "w": it["en"], "zh": it["zh"], "h": it["h"], "lv": it["lv"], "ty": it["ty"],
                    "q": it["en"][:s0] + BLANK + it["en"][s1:],
                    "o": opts, "a": a,
                    "oi": [word_info(o, h, zone, t, info) for o, h, t in zip(opts, heads, tys)],
                }
                if it["en"] in sent:
                    s, st = sent[it["en"]]
                    sspan = find_span(it["h"], s, zone in WHOLE_MULTI)
                    real = s[sspan[0]:sspan[1]] if sspan else ""
                    new_opts = reinflect(q["o"], a, it["ans"], real) if real else None
                    if new_opts is None:
                        bad_sent.append(f"{zone}-unit{n}\t{it['en']}\t{s}")
                    else:
                        q["o"] = new_opts
                        q["s"] = s
                        q["sq"] = s[:sspan[0]] + BLANK + s[sspan[1]:]
                        q["st"] = st
                        q["pa"] = it["ans"]
                qs.append(q)
                cards.append({"w": it["en"], "p": ZONES[zone][3], "d": f"{it['h']} · {it['ty']}", "c": it["zh"], "s": q.get("s", "")})
            first, last = unit[0]["h"], unit[-1]["h"]
            def label(h):  # a headword split over several units gets its part number: "on (2)"
                if zone not in SPLIT_HEADS:
                    return h
                having = [k for k, uu in enumerate(units) if any(x["h"] == h for x in uu)]
                return h if len(having) == 1 else f"{h} ({having.index(n - 1) + 1})"
            names[str(n)] = f"{label(first)} – {label(last)}" if first != last else label(first)
            data = {"zone": zone, "unit": n, "units": len(units), "title": names[str(n)], "items": qs}
            (ROOT / f"{zone}-unit{n}-data.js").write_text(
                f"// 搭配詞 {ZONES[zone][1]} Unit {n}: {names[str(n)]} — built by tools/colloc_emit.py\nwindow.COLLOC_UNIT = {js(data)};\n", "utf-8")
            (ROOT / f"{zone}-unit{n}.html").write_text(
                PAGE.format(title=f"{ZONES[zone][1]} Unit {n} · {names[str(n)]} 搭配詞", zone=zone, u=n, ver=ver), "utf-8")
            dash.append({"unit": n, "theme": names[str(n)], "cards": cards})
        g = f"{zone.upper()}_DASHBOARD_UNITS"
        (ROOT / f"{zone}-dashboard-data.js").write_text(
            f"// Auto-generated for the Unit Board — 搭配詞 {ZONES[zone][1]} (tools/colloc_emit.py)\nwindow.{g} = {js(dash)};\n", "utf-8")
        meta[zone] = {"units": len(units), "names": names, "items": len(items)}
        report.append((zone, len(rows), len(items), len(units), skipped))
    (ROOT / "tools/colloc/meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=1), "utf-8")
    (ROOT / "tools/colloc/sentence_problems.txt").write_text("\n".join(bad_sent) + "\n", "utf-8")
    if bad_sent:
        print(f"sentences not used: {len(bad_sent)} (see tools/colloc/sentence_problems.txt)")
    with open(ROOT / "tools/colloc/skipped.txt", "w", encoding="utf-8") as f:
        for zone, n, k, u, sk in report:
            print(f"{zone}: source {n}, questions {k}, units {u}, skipped {len(sk)}")
            for h, e, why in sk:
                f.write(f"{zone}\t{h}\t{e}\t{why}\n")


if __name__ == "__main__":
    main()
