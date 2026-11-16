"""學測/IELTS/TOEFL themed vocabulary (book "ielts", zones "i1".."i21"): one zone per topic, one subunit per section.
usage (from the repo root): python3 tools/ielts_emit.py
tools/ielts/topics_raw.json : {"<topic>": {"topic", "en", "zh", "items": [{w, pos, def, cn, s, zh, part, sec, lab, t}]}}
  Topics 1–20 come from high-school-blank-translation-quiz/ielts-topics/topic-NN-data.js, topic 21 from its Google Doc.
Subunits: every Part A section is one subunit, Part B (200 academic words) is split into 8 subunits of 25, Part C (20 phrases) is one.
The multiple-choice questions use each word's own sentence (no Chinese hint); the 3 wrong options are words of the same
part of speech from other sections of the same topic.
Writes iN-unitU.html/-data.js (flashcards + MCQ practice), ieltsN-subU.html/-data.js/-app.js (online quiz, tracked),
iN-dashboard-data.js, the "ielts" book in books.js and the dashboard-data tags in index.html / teacher.html."""
import json, re, os, html, random, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
from ielts_answer import answer as fit_answer  # noqa: E402

V = "20261116a"
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
BOOK_NAME = "學測/IELTS/TOEFL"
BLANK = "__________"
B_SIZE = 25
T = json.load(open(os.path.join(ROOT, "tools", "ielts", "topics_raw.json"), encoding="utf8"))
LINKS = json.load(open(os.path.join(ROOT, "tools", "ielts", "links.json"), encoding="utf8"))
# Irregular verbs / plurals: the form that fills each sentence (other forms are accepted in the spelling quiz).
FORM = {
    "forecast": "forecast", "overcome": "overcame", "breed": "bred", "lay": "laid", "seek": "sought", "undergo": "underwent",
    "underlie": "underlies", "arise": "arose", "undertake": "undertook", "sink": "sank", "catch": "caught", "strive": "strives",
    "uphold": "upheld", "unwind": "unwind", "withstand": "withstand", "mislead": "misled", "forgo": "forgo", "freeze": "froze",
    "overtake": "overtook", "withdraw": "withdrew", "forbid": "forbid", "weave": "wove", "sow": "sowed", "overrun": "overran",
    "overthrow": "overthrew", "interweave": "interwoven", "shear": "shear", "grind": "grinds", "withhold": "withheld",
    "partake": "partake", "interbreed": "interbred", "crossbreed": "crossbred", "spit": "spat", "shed": "shed",
    "foresee": "foresee", "tear": "tear", "cast": "cast", "bid": "bid", "leaf": "leaves", "fungus": "fungus", "outgrow": "outgrow",
}
# Sentences whose blanks are split by printed words: (topic, lab) -> (sentence with one {{BLANK}}, answer)
SPLIT = {
    ("17", "P15"): ("The talented actors brought the old story {{BLANK}}, and even students who hated history enjoyed the play.", "to life"),
}
NOUN, VERB, ADJ, ADV = {"n.", "n.phr."}, {"v.", "v.phr."}, {"adj.", "adj.phr."}, {"adv."}


def pclass(p):
    for name, s in (("n", NOUN), ("v", VERB), ("adj", ADJ), ("adv", ADV)):
        if p in s:
            return name
    return "phr"


def rd(n):
    return open(os.path.join(ROOT, n), encoding="utf8").read()


def wr(n, s):
    open(os.path.join(ROOT, n), "w", encoding="utf8", newline="\n").write(s)


def js(o, indent=None):
    return json.dumps(o, ensure_ascii=False, indent=indent, separators=None if indent else (",", ":"))


def rep(s, old, new, n=1):
    assert s.count(old) == n, (old, s.count(old))
    return s.replace(old, new)


def short_name(en):
    s = re.sub(r"^The ", "", re.split(r"\s*(?:&|:|,|\band\b)\s*", en)[0].strip())
    return s if len(s) <= 24 else s[:22] + "…"


def prepare(k, it):
    """One grid entry -> the card fields used everywhere below."""
    w = it["w"].strip()
    forms = None
    if " / " in w:
        forms = w.replace(" / ", " – ")
        base = w.split(" / ")[0].strip()
    else:
        base = w
    if (k, it["lab"]) in SPLIT:
        sent, ans = SPLIT[(k, it["lab"])]
    else:
        ans, why = fit_answer(w, it["s"])
        assert not why, (k, it["lab"], w, why)
        if forms:
            ans = FORM[base]
        sent = re.sub(r"_{3,}(?:[\s,]+_{3,})*", "{{BLANK}}", it["s"], count=1)
        assert "___" not in sent, (k, it["lab"], sent)
    word = re.sub(r"^Be ", "be ", base)
    alts = sorted({f.strip() for f in w.split(" / ")} - {ans}) if forms else []
    return {"word": word, "answer": ans, "alts": alts, "forms": forms, "pos": it["pos"], "en_def": it["def"], "cn_def": it["cn"],
            "sentence": sent, "cn": it["zh"], "lab": it["lab"], "cls": pclass(it["pos"])}


FC, QP, QA = rd("w3-unit1.html"), rd("ee4000-b3-unit1.html"), rd("ee4000-b3-unit1-app.js")
CLS3 = ("", "hot", "va")
zones_out, report = {}, []
for k in sorted(T, key=int):
    n, top = int(k), T[k]
    zid, en, zh = f"i{n}", top["en"], top["zh"]
    entries = [prepare(k, it) for it in top["items"]]
    # subunits
    subs, cur = [], None
    for e, it in zip(entries, top["items"]):
        key = it["sec"] if it["part"] != "B" else None
        if it["part"] == "B":
            if not subs or subs[-1]["part"] != "B" or len(subs[-1]["items"]) >= B_SIZE:
                subs.append({"part": "B", "sec": None, "items": []})
        elif not subs or subs[-1]["sec"] != key:
            subs.append({"part": it["part"], "sec": key, "items": []})
        subs[-1]["items"].append(e)
    nb = 0
    for i, s in enumerate(subs):
        e0, e1 = s["items"][0], s["items"][-1]
        if s["part"] == "A":
            s["theme"] = s["sec"]
        elif s["part"] == "B":
            nb += 1
            s["theme"] = f"Academic Words 學術單字 {nb} ({e0['word']} – {e1['word']})"
        else:
            s["theme"] = "Fixed Phrases & Collocations 固定片語與搭配詞"
        for e in s["items"]:
            e["sub"] = i + 1
    pool = entries
    order, names, dash = [], {}, []
    for u, s in enumerate(subs, 1):
        VOC, theme = s["items"], s["theme"]
        rng = random.Random(n * 1000 + u)
        # ---- MCQs: one per word, its own sentence, 3 same-part-of-speech options from other sections of the topic
        MC, extra = [], {}
        for vi, e in enumerate(VOC):
            nw = len(e["answer"].split())
            used = {e["answer"].lower(), e["word"].lower()}
            cands = [x for x in pool if x["sub"] != u and x["cls"] == e["cls"] and x["answer"].lower() not in used
                     and x["cn_def"] != e["cn_def"] and (len(x["answer"].split()) > 1) == (nw > 1)]
            if len(cands) < 3:     # phrases: the other phrases of the topic, this subunit included
                cands = [x for x in pool if x is not e and x["cls"] == e["cls"] and x["answer"].lower() not in used and (len(x["answer"].split()) > 1) == (nw > 1)]
            if len(cands) < 3:
                cands = [x for x in pool if x is not e and x["answer"].lower() not in used and (len(x["answer"].split()) > 1) == (nw > 1)]
            if len(cands) < 3:
                cands = [x for x in pool if x["sub"] != u and x["cls"] == e["cls"] and x["answer"].lower() not in used]
            rng.shuffle(cands)
            picks, seen = [], set(used)
            for x in cands:
                t = (x["word"] if x["forms"] else x["answer"])
                if t.lower() in seen:
                    continue
                seen.add(t.lower()); picks.append((t, x))
                if len(picks) == 3:
                    break
            assert len(picks) == 3, (k, e["word"])
            prev = MC[-1]["answer"] if MC else -1
            counts = [sum(q["answer"] == j for q in MC) for j in range(4)]
            seat = min((j for j in range(4) if j != prev), key=lambda j: (counts[j], rng.random()))
            opts = [p[0] for p in picks]
            opts.insert(seat, e["answer"])
            for t, x in picks:
                extra[t.lower()] = {"pos": x["pos"], "en_def": x["en_def"], "cn_def": x["cn_def"]}
            MC.append({"q": e["sentence"].replace("{{BLANK}}", "_____"), "options": opts, "answer": seat, "vocabIndex": vi})
        order.append(u); names[str(u)] = theme
        title = f"{BOOK_NAME} Topic {n} · Subunit {u}: {theme}"
        cards, dcards = [], []
        for e in VOC:
            c = {"word": e["word"], "answer": e["answer"], "pos": e["pos"], "definition": e["en_def"], "chinese": e["cn_def"],
                 "sentence": e["sentence"].replace("{{BLANK}}", BLANK), "translation": e["cn"],
                 "lookup": {"english": e["en_def"], "chinese": e["cn_def"]}}
            if e["forms"]:
                c["forms"] = e["forms"]
            cards.append(c)
            dcards.append({"w": e["word"], "p": e["pos"], "d": e["en_def"], "c": e["cn_def"], "s": e["sentence"].replace("{{BLANK}}", e["answer"]), "t": e["cn"]})
        quiz = [{"question": q["q"].replace("_____", BLANK), "options": [{"letter": "ABCD"[j], "text": o} for j, o in enumerate(q["options"])],
                 "answer": "ABCD"[q["answer"]], "vi": q["vocabIndex"]} for q in MC]
        lookup = {}
        for e in VOC:
            ent = {"pos": e["pos"], "en_def": e["en_def"], "cn_def": e["cn_def"]}
            for kk in {e["word"].lower(), e["answer"].lower()}:
                lookup.setdefault(kk, ent)
        for kk, ent in extra.items():
            lookup.setdefault(kk, ent)
        local = {w: [v["en_def"], v["cn_def"]] for w, v in lookup.items() if " " not in w}
        wr(f"{zid}-unit{u}-data.js", f"// {BOOK_NAME} Topic {n} Subunit {u} ({theme}) — flashcards + MCQ practice\n"
           f"window.FLASHCARD_UNITS = {js({str(u): {'title': title, 'theme': theme, 'cards': cards, 'quiz': quiz}}, 1)};\n"
           f"window.LOCAL_LOOKUP = Object.assign({{}}, window.LOCAL_LOOKUP || {{}}, {js(local)});\n")
        back = f"{BOOK_NAME} Topic {n}"
        p = FC
        p = re.sub(r"<title>.*?</title>", f"<title>{html.escape(title)} · Flashcards</title>", p)
        p = re.sub(r'<h1 id="unitTitle">.*?</h1>', f'<h1 id="unitTitle">{html.escape(title)}</h1>', p)
        p = rep(p, 'data-set="w3"', f'data-set="{zid}"')
        p = rep(p, 'href="index.html#w3">Unit Board · 4000 Essential Words Book 3<', f'href="index.html#{zid}">Unit Board · {html.escape(back)}<')
        p = rep(p, "w3-unit1-data.js", f"{zid}-unit{u}-data.js")
        p = re.sub(r'(app|books)\.js\?v=\w+', lambda m: f"{m.group(1)}.js?v={V}", p)
        wr(f"{zid}-unit{u}.html", p)
        base = f"ielts{n}-sub{u}"
        nv, nq = len(VOC), len(MC)
        p = QP
        p = re.sub(r"<title>.*?</title>", f"<title>Topic {n} Subunit {u} Quiz — {html.escape(theme)}</title>", p)
        p = re.sub(r"<h1>[^<]*</h1>", f"<h1>{BOOK_NAME} 主題單字練習 — Topic {n} Subunit {u}</h1>", p, count=1)
        p = rep(p, 'href="index.html#w3"', f'href="index.html#{zid}"')
        p = rep(p, 'href="w3-unit1.html"', f'href="{zid}-unit{u}.html"')
        p = rep(p, '<span id="mode-p1-count">20</span>', f'<span id="mode-p1-count">{nv}</span>')
        p = rep(p, "20 題選擇題，", f"{nq} 題選擇題，")
        p = rep(p, '<span id="p1-progress-label">1 / 20</span>', f'<span id="p1-progress-label">1 / {nv}</span>')
        p = rep(p, "第二部分：20 題選擇題", f"第二部分：{nq} 題選擇題")
        p = rep(p, "ee4000-b3-unit1-", base + "-", 2)
        for part in ("app", "data"):
            p, c_ = re.subn(rf'<script src="{base}-{part}\.js(?:\?v=\w+)?">', f'<script src="{base}-{part}.js?v={V}">', p)
            assert c_ == 1, (base, part)
        p = re.sub(r'books\.js\?v=\w+', f"books.js?v={V}", p)
        wr(base + ".html", p)
        wr(base + "-app.js", QA)
        vocab_out = []
        for e in VOC:
            v = {"word": e["word"], "pos": e["pos"], "cn_def": e["cn_def"], "en_def": e["en_def"], "sentence": e["sentence"], "cn": e["cn"]}
            if e["answer"] != e["word"]:
                v["answer"] = e["answer"]
            if e["alts"]:
                v["alts"] = e["alts"]
            vocab_out.append(v)
        cfg = {"groupName": f"IELTS T{n:02d} S{u:02d} - {theme}", "gasEndpoint": GAS}
        wr(base + "-data.js", f"// Topic {n} Subunit {u} Quiz Data: {theme}\n// From the IELTS topic grid (tools/ielts_emit.py).\n"
           f"const QUIZ_CONFIG = {js(cfg, 2)};\n\nconst VOCAB = {js(vocab_out, 2)};\n\nconst MCQS = {js(MC, 2)};\n\n"
           f"const LOOKUP = {js(lookup, 2)};\n\nconst EXTRA_GLOSSES = {{}};\n")
        dash.append({"unit": u, "theme": theme, "cards": dcards})
    wr(f"{zid}-dashboard-data.js", f"// Auto-generated for the Unit Board — {BOOK_NAME} Topic {n}\nwindow.I{n}_DASHBOARD_UNITS = {js(dash)};\n")
    L = LINKS.get(k, {})
    links = [{"label": "📄 Google Doc 單字表", "href": L["doc"]}] if L.get("doc") else []
    if L.get("quiz"):
        links.append({"label": "🧩 全主題測驗 (420 題)", "href": L["quiz"]})
    zones_out[zid] = {"book": "ielts", "prefix": zid, "tag": f"IELTS{n}", "name": f"Topic {n} · {en} {zh}", "short": short_name(en),
                      "num": str(n), "levelLabel": f"IELTS T{n}", "cls": CLS3[(n - 1) % 3], "family": False, "headLabel": "",
                      "tile": f"{BOOK_NAME} · Topic {n}", "unitName": "Subunit", "data": f"{zid}-dashboard-data.js",
                      "global": f"I{n}_DASHBOARD_UNITS", "page": f"{zid}-unit{{u}}.html", "quiz": f"ielts{n}-sub{{u}}.html",
                      "units": order, "names": names, "blurb": "theme words by section + academic words + phrases 主題單字分區＋學術單字＋固定片語",
                      "links": links}
    report.append((n, len(entries), [len(s["items"]) for s in subs]))

# books.js: add/refresh the "ielts" book and its zones
b = rd("books.js")
m = re.search(r"window\.VOCAB_ZONES = (\{.*?\n\});\nwindow\.VOCAB_BOOKS = (\[.*?\n\]);\n", b, re.S)
zones, books = json.loads(m.group(1)), json.loads(m.group(2))
zones = {z: c for z, c in zones.items() if c.get("book") != "ielts"}
zones.update(zones_out)
books = [x for x in books if x["id"] != "ielts"] + [{"id": "ielts", "name": BOOK_NAME + " 主題字彙", "zones": list(zones_out)}]
b = b[:m.start(1)] + js(zones, 1) + b[m.end(1):m.start(2)] + js(books, 1) + b[m.end(2):]
wr("books.js", b)

# dashboard-data tags on the board and the teacher page
for page in ("index.html", "teacher.html"):
    t = rd(page)
    t = re.sub(r'  <script src="i\d+-dashboard-data\.js\?v=\w+"></script>\n', "", t)
    tags = "".join(f'  <script src="{z}-dashboard-data.js?v={V}"></script>\n' for z in zones_out)
    anchor = re.search(r'  <script src="tc-dashboard-data\.js\?v=\w+"></script>\n', t)
    assert anchor, page
    t = t[:anchor.end()] + tags + t[anchor.end():]
    t = re.sub(r'books\.js\?v=\w+', f"books.js?v={V}", t)
    t = re.sub(r'dashboard\.js\?v=\w+', f"dashboard.js?v={V}", t)
    wr(page, t)
for r in report:
    print("Topic", r[0], r[1], "words ->", len(r[2]), "subunits", r[2])
