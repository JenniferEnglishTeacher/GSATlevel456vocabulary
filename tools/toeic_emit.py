"""TOEIC themed vocabulary (zone "tc"): one topic per examword.com word group, in the order of
https://www.examword.com/group-topic . usage (from the repo root): python3 tools/toeic_emit.py
tools/toeic/topics.json : {"<topic>": {"theme", "source", "VOCAB": [...], "MCQS": [...]}}
  VOCAB entry: word, pos, en_def, cn_def, sentence (one {{BLANK}}; an "A: … B: …" dialogue), cn (中譯, target word in 【 】),
               collocation ("TOEIC collocation 中文"), forms (irregular verbs: "fall – fell – fallen")
  MCQS entry:  q (two sentences, one _____), options (4), answer (0-3), vocabIndex
The definitions, dialogues, translations, collocations and questions were written for this site.
A: lines are read by a male voice and B: lines by a female voice (dialogue-tts.js).
Writes tc-unitN.html/-data.js (flashcards + MCQ practice), toeic-topicN.html/-data.js/-app.js (online quiz),
tc-dashboard-data.js, and the "tc" zone + "toeic" book in books.js. Pages are made from the 4000 Essential Words
Book 3 Unit 1 pages, which build.py already generated from the shared quiz page."""
import json, re, os, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
V = "20261115c"
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
BOOK, BACK = "TOEIC Themed Vocabulary", "TOEIC Themed Vocabulary"
BLANK = "__________"
T = json.load(open(os.path.join(ROOT, "tools", "toeic", "topics.json"), encoding="utf8"))


def rd(n):
    return open(os.path.join(ROOT, n), encoding="utf8").read()


def wr(n, s):
    open(os.path.join(ROOT, n), "w", encoding="utf8", newline="\n").write(s)


def js(o, indent=None):
    return json.dumps(o, ensure_ascii=False, indent=indent, separators=None if indent else (",", ":"))


def rep(s, old, new, n=1):
    assert s.count(old) == n, (old, s.count(old))
    return s.replace(old, new)


FC, QP, QA = rd("w3-unit1.html"), rd("ee4000-b3-unit1.html"), rd("ee4000-b3-unit1-app.js")
order, names, dash = [], {}, []
for k in sorted(T, key=int):
    g, G = int(k), T[k]
    VOC, MC, theme = G["VOCAB"], G["MCQS"], G["theme"]
    for i, e in enumerate(VOC):
        assert e["sentence"].count("{{BLANK}}") == 1, (g, e["word"])
        assert e["sentence"].startswith("A: ") and " B: " in e["sentence"] and len(e["sentence"].split()) >= 40, (g, e["word"], "dialogue must be at least 40 words")
        assert "【" in e["cn"] and " B：" in e["cn"] and e["collocation"] and e["en_def"] and e["cn_def"], (g, e["word"])
    assert len(MC) == 30, (g, "need 30 MCQs")
    for n, q in enumerate(MC):
        assert len(q["options"]) == 4 and len(set(o.lower() for o in q["options"])) == 4, (g, q["q"])
        assert VOC[q["vocabIndex"]]["word"].lower() == q["options"][q["answer"]].lower(), (g, q["q"])
        assert q["q"].count("_____") == 1, (g, q["q"])
        assert n == 0 or q["answer"] != MC[n - 1]["answer"], (g, n, "same answer letter twice in a row")
    cnt = [sum(q["answer"] == x for q in MC) for x in range(4)]
    assert max(cnt) - min(cnt) <= 2, (g, cnt)
    order.append(g); names[str(g)] = theme
    title = f"{BOOK} · Topic {g}: {theme}"
    cards, dcards = [], []
    for e in VOC:
        c = {"word": e["word"], "answer": e["word"], "pos": e["pos"], "definition": e["en_def"], "chinese": e["cn_def"],
             "sentence": e["sentence"].replace("{{BLANK}}", BLANK), "translation": e["cn"],
             "lookup": {"english": e["en_def"], "chinese": e["cn_def"]}, "collocation": e["collocation"]}
        if e.get("forms"):
            c["forms"] = e["forms"]
        cards.append(c)
        dcards.append({"w": e["word"], "p": e["pos"], "d": e["en_def"], "c": e["cn_def"], "s": e["sentence"].replace("{{BLANK}}", e["word"]), "t": e["cn"]})
    quiz = [{"question": q["q"].replace("_____", BLANK), "options": [{"letter": "ABCD"[j], "text": o} for j, o in enumerate(q["options"])],
             "answer": "ABCD"[q["answer"]], "vi": q["vocabIndex"]} for q in MC]
    lookup = {e["word"].lower(): {"pos": e["pos"], "en_def": e["en_def"], "cn_def": e["cn_def"]} for e in VOC}
    local = {w: [v["en_def"], v["cn_def"]] for w, v in lookup.items()}
    wr(f"tc-unit{g}-data.js", f"// {BOOK} Topic {g} ({theme}) — flashcards + MCQ practice\n"
       f"window.FLASHCARD_UNITS = {js({str(g): {'title': title, 'theme': theme, 'cards': cards, 'quiz': quiz}}, 1)};\n"
       f"window.LOCAL_LOOKUP = Object.assign({{}}, window.LOCAL_LOOKUP || {{}}, {js(local)});\n")
    p = FC
    p = re.sub(r"<title>.*?</title>", f"<title>{html.escape(title)} · Flashcards</title>", p)
    p = re.sub(r'<h1 id="unitTitle">.*?</h1>', f'<h1 id="unitTitle">{html.escape(title)}</h1>', p)
    p = rep(p, 'data-set="w3"', 'data-set="tc"')
    p = rep(p, 'href="index.html#w3">Unit Board · 4000 Essential Words Book 3<', f'href="index.html#tc">Unit Board · {BACK}<')
    p = rep(p, "w3-unit1-data.js", f"tc-unit{g}-data.js")
    p = re.sub(r'(app|books)\.js\?v=\w+', lambda m: f"{m.group(1)}.js?v={V}", p)
    p = rep(p, f'<script src="app.js?v={V}"></script>', f'<script src="app.js?v={V}"></script>\n  <script src="dialogue-tts.js?v={V}"></script>')
    wr(f"tc-unit{g}.html", p)
    base = f"toeic-topic{g}"
    nv, nq = len(VOC), len(MC)
    p = QP
    p = re.sub(r"<title>.*?</title>", f"<title>Topic {g} Quiz — {html.escape(theme)}</title>", p)
    p = re.sub(r"<h1>[^<]*</h1>", f"<h1>TOEIC 主題單字練習 — Topic {g} {html.escape(theme)}</h1>", p, count=1)
    p = rep(p, 'href="index.html#w3"', 'href="index.html#tc"')
    p = rep(p, 'href="w3-unit1.html"', f'href="tc-unit{g}.html"')
    p = rep(p, '<span id="mode-p1-count">20</span>', f'<span id="mode-p1-count">{nv}</span>')
    p = rep(p, "20 題選擇題，", f"{nq} 題選擇題，")
    p = rep(p, '<span id="p1-progress-label">1 / 20</span>', f'<span id="p1-progress-label">1 / {nv}</span>')
    p = rep(p, "第二部分：20 題選擇題", f"第二部分：{nq} 題選擇題")
    p = rep(p, "ee4000-b3-unit1-", base + "-", 2)
    for part in ("app", "data"):
        p, n = re.subn(rf'<script src="{base}-{part}\.js(?:\?v=\w+)?">', f'<script src="{base}-{part}.js?v={V}">', p)
        assert n == 1, (base, part)
    p = re.sub(r'books\.js\?v=\w+', f"books.js?v={V}", p)
    p = rep(p, f'<script src="{base}-app.js?v={V}"></script>', f'<script src="{base}-app.js?v={V}"></script>\n<script src="dialogue-tts.js?v={V}"></script>')
    wr(base + ".html", p)
    wr(base + "-app.js", QA)
    vocab_out = [{x: e[x] for x in ("word", "pos", "cn_def", "en_def", "sentence", "cn")} for e in VOC]
    cfg = {"groupName": f"TOEIC Themed Vocabulary T{g:02d} - {theme}", "gasEndpoint": GAS}
    wr(base + "-data.js", f"// Topic {g} Quiz Data: {theme}\n// Source word list: {G['source']} — content written for this site (tools/toeic_emit.py).\n"
       f"const QUIZ_CONFIG = {js(cfg, 2)};\n\nconst VOCAB = {js(vocab_out, 2)};\n\nconst MCQS = {js(MC, 2)};\n\n"
       f"const LOOKUP = {js(lookup, 2)};\n\nconst EXTRA_GLOSSES = {{}};\n")
    dash.append({"unit": g, "theme": theme, "cards": dcards})
wr("tc-dashboard-data.js", f"// Auto-generated for the Unit Board — {BOOK}\nwindow.TC_DASHBOARD_UNITS = {js(dash)};\n")

# books.js: add/refresh the "tc" zone and the "toeic" book
b = rd("books.js")
m = re.search(r"window\.VOCAB_ZONES = (\{.*?\n\});\nwindow\.VOCAB_BOOKS = (\[.*?\n\]);\n", b, re.S)
zones, books = json.loads(m.group(1)), json.loads(m.group(2))
zones["tc"] = {"book": "toeic", "prefix": "tc", "tag": "TOEIC", "name": BOOK, "short": "Topics", "num": "T", "levelLabel": "TOEIC",
               "cls": "hot", "family": False, "headLabel": "", "tile": "TOEIC 主題單字 · examword topics", "unitName": "Topic",
               "data": "tc-dashboard-data.js", "global": "TC_DASHBOARD_UNITS", "page": "tc-unit{u}.html", "quiz": "toeic-topic{u}.html",
               "units": order, "names": names, "blurb": "one examword topic per unit 每單元一個主題"}
books = [x for x in books if x["id"] != "toeic"] + [{"id": "toeic", "name": "TOEIC 主題單字 Themed Vocabulary", "zones": ["tc"]}]
b = b[:m.start(1)] + js(zones, 1) + b[m.end(1):m.start(2)] + js(books, 1) + b[m.end(2):]
wr("books.js", b)
print("topics:", order, "words:", sum(len(T[k]["VOCAB"]) for k in T))
