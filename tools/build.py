#!/usr/bin/env python3
"""Build the GSAT Level 4/5/6 vocabulary site (dashboard + flashcards + quizzes).
Usage: build.py <all.json> <reference SAT site dir> <existing quiz repo dir> <output dir>
"""
import json, re, shutil, sys, os, html

DATA, REF, QUIZ, OUT = sys.argv[1:5]
V = "20261113g"
d = json.load(open(DATA, encoding="utf8"))
J = json.load(open(os.path.join(os.path.dirname(os.path.abspath(DATA)), "b2k.json"), encoding="utf8"))  # 國中小基礎2000字 groups
EXTRA = os.path.join(os.path.dirname(os.path.abspath(DATA)), "b2k_extra.json")  # groups converted by tools/convert_g.py
if os.path.exists(EXTRA):
    J.update(json.load(open(EXTRA, encoding="utf8")))
LEVELS = [4, 5, 6]
BLANK = "__________"


def js(obj, indent=None):
    return json.dumps(obj, ensure_ascii=False, indent=indent, separators=None if indent else (",", ":"))


def write(name, text):
    with open(os.path.join(OUT, name), "w", encoding="utf8", newline="\n") as f:
        f.write(text)


def group_range(cfg):
    m = re.search(r"Group \d+ - (.+?)\s*\(word family\)", cfg["groupName"])
    return m.group(1).strip() if m else ""


def card_page(zid, g, title, back, with_index):
    """Flashcard page for one group of any zone."""
    idx = f'  <script src="gsat-words.js?v={V}"></script>\n' if with_index else ""
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)} · Flashcards</title>
  <link rel="stylesheet" href="styles.css?v={V}">
</head>
<body data-set="{zid}">
  <main class="app-shell">
    <header class="topbar">
      <div>
        <p class="eyebrow"><a class="back-link" href="index.html#{zid}">Unit Board · {html.escape(back)}</a></p>
        <h1 id="unitTitle">{html.escape(title)}</h1>
      </div>
      <div class="unit-controls">
        <label for="unitSelect">Group</label>
        <select id="unitSelect"></select>
      </div>
    </header>

    <section class="study-area" aria-live="polite">
      <aside class="word-list" id="wordList" aria-label="Vocabulary list"></aside>
      <section class="card-stage">
        <article class="flashcard" id="flashcard" tabindex="0" aria-label="Flashcard">
          <div class="card-face card-front"><p class="front-label">Vocabulary</p><h2 id="frontWord"></h2><button class="speak-button" id="speakWordFront" type="button">Listen</button></div>
          <div class="card-face card-back"><div class="visual-wrap"><img id="cardImage" alt=""></div><div class="card-details"><div class="detail-heading"><div><p id="posTag"></p><h2 id="backWord"></h2></div><button class="speak-button" id="speakWordBack" type="button">Word</button></div><p class="definition" id="definition"></p><p class="synonyms" id="synonyms"></p><div class="sentence-block"><div class="sentence-heading"><span>Example Sentence <small>例句</small></span><button class="speak-button" id="speakSentence" type="button">Sentence</button></div><p class="sentence" id="sentence"></p><p class="translation" id="translation"></p></div></div></div>
        </article>
        <div class="mode-row"><button class="secondary-button" id="prevCard" type="button">← Prev</button><button class="primary-button" id="nextCard" type="button">Next →</button><button class="primary-button" id="flipCard" type="button" hidden>Flip</button><button class="secondary-button" id="shuffleCards" type="button">Shuffle</button><button class="secondary-button" id="resetCards" type="button">Reset</button><span class="card-counter" id="cardCounter"></span></div>
      </section>
      <aside class="lookup-panel" id="lookupPanel" aria-live="polite"><p class="lookup-label">Word Lookup</p><h3 id="lookupWord">Select a word</h3><p id="lookupEnglish">English meaning will appear here.</p><p id="lookupChinese">點例句中的任何單字查中文意思。</p><button class="speak-button" id="speakLookup" type="button">Listen</button></aside>
    </section>
  </main>
  <script src="{zid}-unit{g}-data.js?v={V}"></script>
{idx}  <script src="books.js?v={V}"></script>
  <script src="tracker-config.js?v={V}"></script>
  <script src="tracker.js?v={V}"></script>
  <script src="app.js?v={V}"></script>
</body>
</html>
"""


def patch_quiz_page(page, base, zid, g):
    """Existing online quiz page: point its links back to this board and load the progress tracker."""
    old = '<a href="index.html" class="back-home-link">← 所有單元 / All units</a>'
    assert old in page, base
    page = page.replace(old, f'<a href="index.html#{zid}" class="back-home-link">← 所有單元 / Unit Board</a> &nbsp;·&nbsp; <a href="{zid}-unit{g}.html" class="back-home-link">🗂 字卡 Flashcards</a>')
    old = f'<script src="{base}-data.js"></script>'
    assert old in page, base
    return page.replace(old, f'<script src="books.js?v={V}"></script>\n<script src="tracker-config.js?v={V}"></script>\n<script src="tracker.js?v={V}"></script>\n' + old)


def patch_quiz_app(qapp, base):
    old = "  const body = new URLSearchParams();"
    assert qapp.count(old) == 1, base
    # Also report this quiz to the progress tracker (time, name, level, group, accuracy, mistaken words).
    return qapp.replace(old, "  if (window.GsatTracker) GsatTracker.logQuiz(state, VOCAB, MCQS);\n" + old)


counts, names, index = {}, {}, {}
for L in LEVELS:
    groups = sorted(int(k.split("-")[1]) for k in d if k.startswith(f"{L}-"))
    counts[f"l{L}"] = len(groups)
    names[f"l{L}"] = []
    index[f"l{L}"] = {}
    dash = []
    for g in groups:
        G = d[f"{L}-{g}"]
        rng = group_range(G["QUIZ_CONFIG"])
        names[f"l{L}"].append(rng)
        cards, dcards = [], []
        for i, e in enumerate(G["VOCAB"]):
            answer = e.get("answer") or e["word"]
            blank = " ".join([BLANK] * 1)
            sent = e["sentence"].replace("{{BLANK}}", blank)
            filled = e["sentence"].replace("{{BLANK}}", answer)
            cards.append({
                "word": e["word"], "answer": answer, "pos": e["pos"],
                "definition": e["en_def"], "chinese": e["cn_def"],
                "family": e.get("family") or e["word"], "isHead": bool(e.get("isHead")),
                "sentence": sent, "translation": e["cn"],
                "lookup": {"english": e["en_def"], "chinese": e["cn_def"]},
            })
            dc = {"w": e["word"], "p": e["pos"], "d": e["en_def"], "c": e["cn_def"], "s": filled, "t": e["cn"]}
            if answer != e["word"]:
                dc["a"] = answer
            if e.get("isHead"):
                dc["h"] = 1
                w = e["word"].lower()
                if " " not in w and w not in index[f"l{L}"]:
                    index[f"l{L}"][w] = [g, i, e["en_def"], e["cn_def"]]
            dcards.append(dc)
        quiz = []
        for q in G["MCQS"]:
            quiz.append({
                "question": re.sub(r"_{3,}", BLANK, q["q"]),
                "options": [{"letter": "ABCD"[j], "text": o} for j, o in enumerate(q["options"])],
                "answer": "ABCD"[q["answer"]],
                "vi": q.get("vocabIndex"),
            })
        title = f"學測6000字 Level {L} · Group {g}: {rng}"
        unit = {"title": title, "theme": rng, "cards": cards, "quiz": quiz}
        local = {}
        for w, info in (G.get("LOOKUP") or {}).items():
            if isinstance(info, dict) and " " not in w:
                local[w.lower()] = [info.get("en_def", ""), info.get("cn_def", "")]
        eg = G.get("EXTRA_GLOSSES") or {}
        if isinstance(eg, dict):
            for w, info in eg.items():
                if isinstance(info, dict):
                    local.setdefault(w.lower(), [info.get("en_def", info.get("en", "")), info.get("cn_def", info.get("cn", ""))])
                elif isinstance(info, str):
                    local.setdefault(w.lower(), ["", info])
        write(f"l{L}-unit{g}-data.js",
              f"// 學測6000字 Level {L} Group {g} ({rng}) — flashcards + MCQ practice\n"
              f"window.FLASHCARD_UNITS = {js({str(g): unit}, 1)};\n"
              f"window.LOCAL_LOOKUP = Object.assign({{}}, window.LOCAL_LOOKUP || {{}}, {js(local)});\n")
        write(f"l{L}-unit{g}.html", card_page(f"l{L}", g, title, f"Level {L}", True))
        dash.append({"unit": g, "theme": rng, "cards": dcards})

        # Recorded online quiz (spelling + 30 MCQ, logs to the Google Sheet): copy the three files unchanged
        # except for the "all units" link, which now returns to this board.
        base = f"level{L}-group{g:02d}"
        write(base + ".html", patch_quiz_page(open(os.path.join(QUIZ, base + ".html"), encoding="utf8").read(), base, f"l{L}", g))
        shutil.copyfile(os.path.join(QUIZ, base + "-data.js"), os.path.join(OUT, base + "-data.js"))
        write(base + "-app.js", patch_quiz_app(open(os.path.join(QUIZ, base + "-app.js"), encoding="utf8").read(), base))
    write(f"l{L}-dashboard-data.js", f"// Auto-generated for the Unit Board — 學測6000字 Level {L}\nwindow.L{L}_DASHBOARD_UNITS = {js(dash)};\n")

# ---------------------------------------------------------------- simple zones: one board of groups each
RUN = re.compile(r"\{\{BLANK\}\}(?:\s+\{\{BLANK\}\})*")


def emit_zone(zid, book, back, unit_word, groups, base_of, heading, global_name):
    """Write flashcards, MCQ practice, the online quiz and the dashboard data for every group of one zone.
    groups: {number: data}; base_of(n): quiz file stem; heading: title printed on the quiz page."""
    order = sorted(groups)
    names, dash = {}, []
    for g in order:
        G = groups[g]
        m = re.match(r"Group \d+ - (.+)$", G["QUIZ_CONFIG"]["groupName"])
        theme = G.get("theme") or (m.group(1).strip() if m else "")
        names[g] = theme
        cards, dcards = [], []
        for e in G["VOCAB"]:
            answer = e.get("answer") or e["word"]
            card = {
                "word": e["word"], "answer": answer, "pos": e["pos"], "definition": e["en_def"], "chinese": e["cn_def"],
                "sentence": RUN.sub(BLANK, e["sentence"]), "translation": e["cn"],
                "lookup": {"english": e["en_def"], "chinese": e["cn_def"]},
            }
            if e.get("forms"):
                card["forms"] = e["forms"]
            cards.append(card)
            dcards.append({"w": e["word"], "p": e["pos"], "d": e["en_def"], "c": e["cn_def"], "s": RUN.sub(lambda _: answer, e["sentence"]), "t": e["cn"]})
        quiz = [{
            "question": re.sub(r"_{3,}", BLANK, q["q"]),
            "options": [{"letter": "ABCD"[j], "text": o} for j, o in enumerate(q["options"])],
            "answer": "ABCD"[q["answer"]], "vi": q.get("vocabIndex"),
        } for q in G["MCQS"]]
        title = f"{book} · {unit_word} {g}: {theme}"
        local = {}
        for src in (G.get("LOOKUP"), G.get("EXTRA_GLOSSES")):
            if isinstance(src, dict):
                for w, info in src.items():
                    if " " in w:
                        continue
                    if isinstance(info, dict):
                        local.setdefault(w.lower(), [info.get("en_def", info.get("en", "")), info.get("cn_def", info.get("cn", ""))])
                    elif isinstance(info, str):
                        local.setdefault(w.lower(), ["", info])
        write(f"{zid}-unit{g}-data.js",
              f"// {book} {unit_word} {g} ({theme}) — flashcards + MCQ practice\n"
              f"window.FLASHCARD_UNITS = {js({str(g): {'title': title, 'theme': theme, 'cards': cards, 'quiz': quiz}}, 1)};\n"
              f"window.LOCAL_LOOKUP = Object.assign({{}}, window.LOCAL_LOOKUP || {{}}, {js(local)});\n")
        write(f"{zid}-unit{g}.html", card_page(zid, g, title, back, False))
        dash.append({"unit": g, "theme": theme, "cards": dcards})
        base = base_of(g)
        src_html = os.path.join(QUIZ, base + ".html")
        if os.path.exists(src_html) and not G.get("generated"):
            page = open(src_html, encoding="utf8").read()
        else:
            # No page of its own in the source repo: use the newest quiz page with this group's names.
            page = open(os.path.join(QUIZ, "group49.html"), encoding="utf8").read()
            page = re.sub(r"<title>.*?</title>", f"<title>{unit_word} {g} Quiz — {html.escape(theme.split(' (')[0])}</title>", page)
            page, n1 = re.subn(r"<h1>[^<]*Group 49</h1>", f"<h1>{heading} — {unit_word} {g}</h1>", page)
            assert n1 == 1 and page.count("group49-") == 2, base
            page = page.replace("group49-", base + "-")
        write(base + ".html", patch_quiz_page(page, base, zid, g))
        if G.get("generated"):
            # Converted group: write its quiz data in the same shape as the other groups and reuse the newest quiz app.
            vocab_out = [{**{k: v for k, v in e.items() if k not in ("answer", "quizWord", "forms")}, "word": e.get("quizWord", e["word"])} for e in G["VOCAB"]]
            write(base + "-data.js",
                  f"// {unit_word} {g} Quiz Data: {theme}\n// Converted for this site by the scripts in tools/.\n"
                  f"const QUIZ_CONFIG = {js(G['QUIZ_CONFIG'], 2)};\n\nconst VOCAB = {js(vocab_out, 2)};\n\nconst MCQS = {js(G['MCQS'], 2)};\n\n"
                  f"const LOOKUP = {js(G['LOOKUP'], 2)};\n\nconst EXTRA_GLOSSES = {{}};\n")
            qapp = open(os.path.join(QUIZ, "group49-app.js"), encoding="utf8").read().replace("Group 49 Quiz App Logic", f"{unit_word} {g} Quiz App Logic")
            write(base + "-app.js", patch_quiz_app(qapp, base))
        else:
            shutil.copyfile(os.path.join(QUIZ, base + "-data.js"), os.path.join(OUT, base + "-data.js"))
            write(base + "-app.js", patch_quiz_app(open(os.path.join(QUIZ, base + "-app.js"), encoding="utf8").read(), base))
    write(f"{zid}-dashboard-data.js", f"// Auto-generated for the Unit Board — {book}\nwindow.{global_name} = {js(dash)};\n")
    return order, names


# 國中小基礎2000字 (zone "j")
jgroups, jnames = emit_zone("j", "國中小基礎2000字", "國中小2000", "Group", {int(k): v for k, v in J.items()},
                            lambda g: f"group{g}", "國中 2000 單字練習", "J_DASHBOARD_UNITS")

# 捷進全民英檢初級單字書 (zone "g"): 100 lessons converted by tools/gept_convert.py
GEPT_FILE = os.path.join(os.path.dirname(os.path.abspath(DATA)), "gept.json")
GEPT = {int(k): v for k, v in json.load(open(GEPT_FILE, encoding="utf8")).items()} if os.path.exists(GEPT_FILE) else {}
if GEPT:
    ggroups, gnames = emit_zone("g", "捷進全民英檢初級單字書", "捷進GEPT初級", "Lesson", GEPT,
                                lambda g: f"gept-lesson{g}", "捷進全民英檢初級單字練習", "G_DASHBOARD_UNITS")

# AWL Sublists 1–10 (zones "a1".."a10"): each sublist split into parts of about 20 entries by tools/awl_convert.py
AWL_FILE = os.path.join(os.path.dirname(os.path.abspath(DATA)), "awl.json")
AWL = json.load(open(AWL_FILE, encoding="utf8")) if os.path.exists(AWL_FILE) else {}
awl_zones = {}
for n in sorted(AWL, key=int):
    order, part_names = emit_zone(f"a{n}", f"AWL Sublist {n}", f"AWL Sublist {n}", "Part", {int(k): v for k, v in AWL[n].items()},
                                  lambda g, n=n: f"awl{n}-part{g}", f"AWL 學術單字練習 Sublist {n}", f"A{n}_DASHBOARD_UNITS")
    awl_zones[n] = (order, part_names)

# ---------------------------------------------------------------- books.js: the registry every page reads
zones = {}
for L, cls in ((4, ""), (5, "hot"), (6, "va")):
    n = counts[f"l{L}"]
    zones[f"l{L}"] = {
        "book": "gsat", "prefix": str(L), "tag": f"L{L}", "name": f"學測6000字 Level {L}", "short": f"Level {L}", "num": str(L),
        "levelLabel": str(L), "cls": cls, "family": True, "headLabel": f"Level {L} 單字", "tile": f"學測 6000 字 · Level {L}",
        "data": f"l{L}-dashboard-data.js", "global": f"L{L}_DASHBOARD_UNITS", "page": f"l{L}-unit{{u}}.html", "quiz": f"level{L}-group{{uu}}.html",
        "units": list(range(1, n + 1)), "names": {str(i + 1): nm for i, nm in enumerate(names[f"l{L}"])},
        "blurb": "25 words + word families per group",
    }
zones["j"] = {
    "book": "j2000", "prefix": "j", "tag": "J", "name": "國中小基礎2000字", "short": "國中小 2000", "num": "J",
    "levelLabel": "國中小2000", "cls": "", "family": False, "headLabel": "", "tile": "國中小基礎 2000 字",
    "data": "j-dashboard-data.js", "global": "J_DASHBOARD_UNITS", "page": "j-unit{u}.html", "quiz": "group{u}.html",
    "units": jgroups, "names": {str(g): jnames[g] for g in jgroups}, "blurb": "themed groups 主題分組",
}
if GEPT:
    zones["g"] = {
        "book": "gept", "prefix": "g", "tag": "GEPT", "name": "捷進全民英檢初級單字書", "short": "捷進 GEPT 初級", "num": "G",
        "levelLabel": "捷進GEPT初級", "cls": "hot", "family": False, "headLabel": "", "tile": "捷進全民英檢初級單字",
        "unitName": "Lesson", "data": "g-dashboard-data.js", "global": "G_DASHBOARD_UNITS", "page": "g-unit{u}.html", "quiz": "gept-lesson{u}.html",
        "units": ggroups, "names": {str(g): gnames[g] for g in ggroups}, "blurb": "10 words per lesson 每課 10 字",
    }
books = [
    {"id": "gsat", "name": "學測6000字 Level 4–6", "zones": ["l4", "l5", "l6"]},
    {"id": "j2000", "name": "國中小基礎2000字", "zones": ["j"]},
]
if GEPT:
    books.append({"id": "gept", "name": "捷進全民英檢初級單字書", "zones": ["g"]})
for n, (order, part_names) in awl_zones.items():
    zones[f"a{n}"] = {
        "book": "awl", "prefix": f"a{n}", "tag": f"AWL{n}", "name": f"AWL Sublist {n}", "short": f"Sublist {n}", "num": str(n),
        "levelLabel": f"AWL {n}", "cls": "va", "family": False, "headLabel": "", "tile": f"Academic Word List · Sublist {n}",
        "unitName": "Part", "data": f"a{n}-dashboard-data.js", "global": f"A{n}_DASHBOARD_UNITS", "page": f"a{n}-unit{{u}}.html", "quiz": f"awl{n}-part{{u}}.html",
        "units": order, "names": {str(g): part_names[g] for g in order}, "blurb": "about 20 words & phrases per part 每部分約 20 個",
    }
if awl_zones:
    books.append({"id": "awl", "name": "AWL 學術單字 Sublist 1–10", "zones": [f"a{n}" for n in awl_zones]})
write("books.js",
      "// Registry of every vocabulary book on this site. A zone is one tab of word groups; a book is a set of zones.\n"
      "// Review keys are \"<prefix>-<group>:<cardIndex>\". To add a book: add its zones here and its data files.\n"
      f"window.VOCAB_ZONES = {js(zones, 1)};\nwindow.VOCAB_BOOKS = {js(books, 1)};\n"
      "window.vocabZoneOfKey = function (key) {\n  const m = /^([a-z0-9]+)-(\\d+):(\\d+)$/i.exec(String(key || \"\"));\n  if (!m) return null;\n"
      "  const id = Object.keys(window.VOCAB_ZONES).find(z => window.VOCAB_ZONES[z].prefix === m[1]);\n"
      "  return id ? { zone: id, unit: Number(m[2]), index: Number(m[3]) } : null;\n};\n")

write("gsat-words.js",
      "// Auto-generated: group names, and every headword -> [group, cardIndex, definition, chinese] per level\n"
      f"window.GSAT_INDEX = {js(index)};\n")

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_TAGS = "".join(f'  <script src="{z["data"]}?v={V}"></script>\n' for z in zones.values())
for name in ("tracker.js", "dashboard.js", "teacher.html", "index.html"):
    src = os.path.join(HERE, name)
    if not os.path.exists(src):
        continue
    text = open(src, encoding="utf8").read()
    if name.endswith(".html"):
        # one dashboard-data script per zone, and the current cache version on every local script
        text, n_tags = re.subn(r"(?:  <script src=\"[a-z0-9]+-dashboard-data\.js\?v=\w+\"></script>\n)+", DATA_TAGS, text)
        assert n_tags == 1, name
        text = re.sub(r"\?v=2026\w+", f"?v={V}", text)
    write(name, text)
if not os.path.exists(os.path.join(OUT, "tracker-config.js")):
    write("tracker-config.js", "// Address of the teacher's Google Apps Script web app (ends with /exec). Leave empty to switch tracking off.\nwindow.GSAT_TRACKER_URL = \"\";\n")
os.makedirs(os.path.join(OUT, "vendor"), exist_ok=True)
shutil.copyfile(os.path.join(REF, "vendor", "xlsx.full.min.js"), os.path.join(OUT, "vendor", "xlsx.full.min.js"))

# ---------------------------------------------------------------- styles
css = open(os.path.join(REF, "styles.css"), encoding="utf8").read()
css += """
/* ===== 學測6000字 Level 4–6 additions ===== */
.board-word.head { font-weight: 700; border-color: rgba(8, 127, 140, 0.55); }
.hot-block .board-word.head { border-color: rgba(184, 84, 26, 0.55); }
.va-block .board-word.head { border-color: rgba(107, 79, 160, 0.55); }
.board-word.marked.head { border-color: #c62828; }
.mini-test { display: inline-flex; align-items: center; padding: 5px 10px; border-radius: 999px; background: #c6533e; color: #fff; font-size: 13px; font-weight: 700; text-decoration: none; white-space: nowrap; }
.mini-test:hover { filter: brightness(1.08); text-decoration: underline; }
.book-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 10px; }
.book-tab { border: 2px solid var(--line); background: #fff; color: var(--ink); border-radius: 999px; padding: 9px 18px; font: inherit; font-weight: 800; cursor: pointer; }
.book-tab:hover { border-color: var(--teal); }
.book-tab.active { background: var(--ink); border-color: var(--ink); color: #fff; }
.zone-tabs[hidden], .zone-tab[hidden] { display: none; }
.unit-block-head { flex-direction: column; align-items: stretch; }
.unit-title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; }
.unit-title .unit-theme { margin: 0; font-size: 14px; }
.unit-actions { flex-wrap: wrap; justify-content: flex-start; }
.mini-test { border-radius: 6px; font-weight: 800; background: #17202a; }
.board-loading { color: var(--muted); padding: 18px 4px; }
.legend-note { color: var(--muted); font-size: 14px; margin: 6px 0 0; }
.legend-note b.head-demo { display: inline-block; padding: 1px 8px; border: 1px solid rgba(8, 127, 140, 0.55); border-radius: 999px; background: #fff; color: var(--ink); }
.syn-chip.family-chip button.family-open { border: 0; background: none; padding: 0; font: inherit; color: inherit; cursor: pointer; text-decoration: underline; text-decoration-style: dotted; }
.syn-chip.family-chip.is-head button.family-open { font-weight: 700; }
.syn-chip.family-chip small { color: var(--muted); margin-left: 4px; }
.head-tag { display: inline-block; margin-left: 8px; padding: 1px 8px; border-radius: 999px; background: #fff1bb; color: #7a5200; font-size: 12px; font-weight: 700; vertical-align: middle; }
.card-counter { align-self: center; color: var(--muted); font-size: 14px; font-weight: 700; margin-left: 4px; }
.quiz-link.recorded { background: #17202a; box-shadow: 0 8px 20px rgba(23, 32, 42, 0.25); }\n.quiz-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
.quiz-sent { color: #3f7d4a; font-weight: 700; font-size: 14px; }
.tracker-box { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: var(--muted); }
.tracker-box b { color: var(--ink); }
.tracker-box button { border: 0; background: none; color: var(--teal-dark); text-decoration: underline; cursor: pointer; font: inherit; padding: 0; }
.forms-tag { display: inline-block; margin-left: 8px; color: var(--muted); font-weight: 700; font-size: 13px; text-transform: none; letter-spacing: 0; }
.teacher-link { display: block; margin: 28px 0 8px; text-align: center; color: var(--muted); font-size: 13px; }
.quiz-link.recorded:hover { background: #000; }
"""
write("styles.css", css)

# ---------------------------------------------------------------- app.js (flashcard pages)
app = open(os.path.join(REF, "app.js"), encoding="utf8").read()


def sub(old, new, count=1):
    global app
    assert app.count(old) >= 1, old[:80]
    app = app.replace(old, new) if count == 0 else app.replace(old, new, count)


def cut(start, end, new):
    """Replace everything from `start` up to (not including) `end`."""
    global app
    a = app.index(start)
    b = app.index(end, a)
    app = app[:a] + new + app[b:]


cut("// Which word set this page belongs to", "const SETCFG = SETS[SET];", """// Which level this page belongs to: 學測6000字 Level 4 / 5 / 6 (l4-unitN.html, l5-unitN.html, l6-unitN.html).
const SET = ["l4", "l5", "l6"].includes(document.body.dataset.set) ? document.body.dataset.set : "l4";
const GSAT_INDEX = window.GSAT_INDEX || {};
const GSAT_NAMES = window.GSAT_GROUP_NAMES || {};
const makeSet = (n, cls) => ({
  level: n, cls,
  page: u => `l${n}-unit${u}.html`,
  quizPage: u => `level${n}-group${String(u).padStart(2, "0")}.html`,
  badge: u => `L${n}·${u}`,
  label: u => `Level ${n} — Group ${u}`,
  unitName: "Group",
  count: (window.GSAT_COUNTS || {})[`l${n}`] || 40,
  board: `index.html#l${n}`,
  index: () => GSAT_INDEX[`l${n}`] || {}
});
// cls picks the colour family already in styles.css: Level 4 teal (default), Level 5 orange ("hot"), Level 6 purple ("va").
const SETS = { l4: makeSet(4, ""), l5: makeSet(5, "hot"), l6: makeSet(6, "va") };
""")
sub("const localLookup = window.LOCAL_LOOKUP;", "const localLookup = window.LOCAL_LOOKUP || {};")
cut("    option.textContent = SET === \"va\"", "    els.unitSelect.append(option);",
    "    const groupName = (GSAT_NAMES[SET] || [])[n - 1];\n    option.textContent = groupName ? `${SETCFG.unitName} ${n} · ${groupName}` : `${SETCFG.unitName} ${n}`;\n")
cut("  // Verbal Advantage units 26–50 (Lv.6–10) live in their own board zone.", "  resetOrder();\n  bindEvents();",
    "  if (backLink) backLink.href = SETCFG.board;\n")
sub('  if (SET === "roots") renderSetSentence();\n', "")
cut("// ---------- Online HTML quiz links (top bar) ----------", "// ---------- Jump to a card from a link", """// ---------- Quiz links (top bar): MCQ practice on this page + the recorded online quiz ----------
function createQuizLinks() {
  if (document.querySelector("#quizLinks")) return;
  const wrap = document.createElement("div");
  wrap.className = "quiz-links";
  wrap.id = "quizLinks";
  els.unitTitle.insertAdjacentElement("afterend", wrap);
  els.quizLinks = wrap;
}

function renderQuizLinks() {
  if (!els.quizLinks) return;
  const unit = state.unit;
  const practice = document.createElement("a");
  practice.className = "quiz-link";
  practice.href = "#quizSection";
  practice.textContent = `📝 ${SETCFG.unitName} ${unit} MCQ Practice 選擇題練習`;
  practice.addEventListener("click", event => {
    event.preventDefault();
    els.quizSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  const recorded = document.createElement("a");
  recorded.className = "quiz-link review recorded";
  recorded.href = SETCFG.quizPage(unit);
  recorded.textContent = "✏️ Online Quiz 線上測驗（拼字＋選擇題，記錄成績）";
  recorded.title = "Spelling + 30 MCQ. Your result is recorded for your teacher.";
  els.quizLinks.replaceChildren(practice, recorded);
}

""")
sub('''  els.posTag.textContent = card.pos;''', '''  els.posTag.textContent = card.pos;
  if (card.isHead) {
    const tag = document.createElement("span");
    tag.className = "head-tag";
    tag.textContent = `Level ${SETCFG.level} 單字`;
    els.posTag.append(tag);
  }''')
sub('const REVIEW_KEY = "barrons1100-review-list";', 'const REVIEW_KEY = "gsat456-review-list";')
sub('const KEY_PREFIX = { barrons: "", hot: "h", va: "v", roots: "r" }[SET];', 'const KEY_PREFIX = `${SETCFG.level}-`; // review keys: "<level>-<group>:<cardIndex>"')
sub('  return SET === "barrons" ? /^\\d+:/.test(key) : key.startsWith(KEY_PREFIX) && /^\\D\\d+:/.test(key);', "  return key.startsWith(KEY_PREFIX);")
sub('  return SET === "va" && Number(state.unit) > 25 ? "index.html#va2" : SETCFG.board;', "  return SETCFG.board;")
cut("// Synonyms: each word -> hover", "function createQuizSection() {", """// Word family: the other entries of this card's family in this group (headword, phrases, derived words).
// Click a member to open its card; 🔊 to hear it; ↗ opens Cambridge English–Chinese (Traditional).
const CAMBRIDGE = "https://dictionary.cambridge.org/dictionary/english-chinese-traditional/";

function renderSynonyms(card) {
  const list = cards();
  const members = list.map((c, i) => ({ c, i })).filter(({ c }) => c.family === card.family && c !== card);
  const label = document.createElement("span");
  label.className = "syn-label";
  label.textContent = "Word family 詞族: ";
  const chips = members.map(({ c, i }) => {
    const chip = document.createElement("span");
    chip.className = `syn-chip family-chip${c.isHead ? " is-head" : ""}`;
    const open = document.createElement("button");
    open.type = "button";
    open.className = "family-open";
    open.textContent = c.word;
    open.title = `${c.pos} ${c.chinese} — click to open this card 點一下看字卡`;
    open.addEventListener("pointerenter", event => {
      if (event.pointerType !== "mouse") return;
      setLookup(c.word, c.definition, c.chinese);
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => speak(c.word), 180);
    });
    open.addEventListener("pointerleave", () => clearTimeout(hoverTimer));
    open.addEventListener("click", event => {
      event.stopPropagation();
      state.index = state.order.indexOf(i);
      render();
      speak(c.word);
    });
    const pos = document.createElement("small");
    pos.textContent = c.pos;
    const sound = document.createElement("button");
    sound.type = "button";
    sound.className = "syn-speak";
    sound.setAttribute("aria-label", `Listen: ${c.word}`);
    sound.textContent = "🔊";
    sound.addEventListener("click", event => { event.stopPropagation(); speak(c.word); });
    chip.append(open, pos, sound);
    return chip;
  });
  const dict = document.createElement("span");
  dict.className = "syn-chip";
  const link = document.createElement("a");
  link.href = CAMBRIDGE + encodeURIComponent(card.word.toLowerCase().replace(/\\s+/g, "-"));
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Cambridge ↗";
  link.title = `Open "${card.word}" in Cambridge Dictionary (英文-繁體中文)`;
  link.addEventListener("click", event => event.stopPropagation());
  dict.append(link);
  els.synonyms.replaceChildren(label, ...chips, dict);
}

""")
sub('  const add = (form, head) => { if (form.length > 2 && !forms.has(form)) forms.set(form, head); };',
    '  const add = (form, head) => { if (form.length > 2 && !forms.has(form)) forms.set(form, head); };\n  const MIN_STEM = 4; // short headwords (aid, ban, …) match only as themselves, so everyday words are not mis-linked')
sub('    const w = head;\n', '    const w = head;\n    if (w.length < MIN_STEM) return;\n')
sub('  wordForms = { barrons: buildForms(SETS.barrons.index()), hot: buildForms(SETS.hot.index()), va: buildForms(SETS.va.index()) };',
    '  wordForms = { l4: buildForms(SETS.l4.index()), l5: buildForms(SETS.l5.index()), l6: buildForms(SETS.l6.index()) };')
cut("// Generated forms that look like a headword but mean something else.", "// Roots pages: the card's own word", """// Generated forms that look like a headword but mean something else.
const NOT_WORD = { l4: new Set(), l5: new Set(), l6: new Set() };
const SET_ORDER = [SET, ...Object.keys(SETS).filter(s => s !== SET)];

""")
sub('''  if (!wordForms) buildBarronsForms();
  const sentence = text == null ? fillSentence(card) : text;''', '''  if (!wordForms) buildBarronsForms();
  // The card's own sentence: the blank becomes the highlighted answer (a word or a whole phrase).
  if (text == null && /_{4,}/.test(card.sentence)) {
    const [before, ...rest] = card.sentence.split(/_{4,}/);
    const target = document.createElement("button");
    target.type = "button";
    target.className = "barrons-word target";
    target.textContent = card.answer || card.word;
    target.title = `This card's word: ${card.word}`;
    target.addEventListener("pointerenter", event => {
      if (event.pointerType !== "mouse") return;
      setLookup(card.word, card.lookup.english, card.lookup.chinese);
    });
    target.addEventListener("click", event => { event.stopPropagation(); speak(card.answer || card.word); });
    return [...makeSentenceNodes(card, before), target, ...makeSentenceNodes(card, rest.join(card.answer || card.word))];
  }
  const sentence = text == null ? fillSentence(card) : text;''')
sub('''    button.className = `barrons-word${set === "hot" ? " hot-word" : set === "va" ? " va-word" : ""}${isTarget ? " target" : ""}`;''',
    '''    const cls = SETS[set].cls;
    button.className = `barrons-word${cls ? ` ${cls}-word` : ""}${isTarget ? " target" : ""}`;''')
sub('''      badge.className = set === "hot" ? "unit-badge hot-badge" : set === "va" ? "unit-badge va-badge" : "unit-badge";''',
    '''      badge.className = cls ? `unit-badge ${cls}-badge` : "unit-badge";''')
cut("function fillSentence(card) {", "function lookupWord(rawWord, card) {", """function fillSentence(card) {
  return card.sentence.replace(/_{4,}/g, card.answer || card.word);
}

""")
sub("add this word to LOCAL_LOOKUP if you want it saved.", "try the Cambridge link on the card.")
sub('english = "English lookup is offline right now. The local SAT words still work.";', 'english = "English lookup is offline right now.";')
cut("// Roots sets: a word-part tile", "function imageCue(card) {", """// Card tile: the word, its part of speech, 中文 and its word family (drawn as SVG, no picture files needed).
function photoFor() { return ""; }
function preloadNextPhoto() {}
function openPhotoZoom() {}

function makeIllustration(card) {
  const ink = "#17202a", coral = "#c6533e", cream = "#fff5d6";
  const tone = { l4: "#087f8c", l5: "#b8541a", l6: "#6b4fa0" }[SET];
  const word = card.word;
  const size = word.length > 22 ? 24 : word.length > 16 ? 30 : word.length > 11 ? 38 : 50;
  const zh = String(card.chinese || "");
  const zhLines = zh.length > 11 ? [zh.slice(0, 11), truncateText(zh.slice(11), 11)] : [zh];
  const family = card.family && card.family !== card.word ? `word family 詞族：${card.family}` : (card.isHead ? `Level ${SETCFG.level} headword 單字` : "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" role="img" aria-label="${escapeXml(word)}">
    <rect width="420" height="420" rx="30" fill="#f7fafc"/>
    <circle cx="74" cy="74" r="40" fill="${tone}" opacity=".10"/>
    <circle cx="346" cy="350" r="54" fill="#d89a27" opacity=".13"/>
    <text x="210" y="62" text-anchor="middle" font-family="Arial, 'Noto Sans TC', sans-serif" font-size="18" font-weight="700" fill="${tone}">學測 6000 字 · Level ${SETCFG.level}${card.isHead ? " ★" : ""}</text>
    <rect x="30" y="92" width="360" height="140" rx="22" fill="${cream}" stroke="${tone}" stroke-width="6"/>
    <text x="210" y="${168 + size / 6}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${size}" font-weight="900" fill="${ink}">${escapeXml(word)}</text>
    <text x="210" y="216" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-style="italic" fill="${tone}">${escapeXml(card.pos || "")}</text>
    ${zhLines.map((line, i) => `<text x="210" y="${284 + i * 38}" text-anchor="middle" font-family="Arial, 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" font-size="30" font-weight="700" fill="${coral}">${escapeXml(line)}</text>`).join("")}
    <text x="210" y="392" text-anchor="middle" font-family="Arial, 'Noto Sans TC', sans-serif" font-size="17" font-weight="700" fill="${ink}" opacity=".75">${escapeXml(truncateText(family, 34))}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

""")
sub('<a class="arcade-link" href="review-arcade.html">', '<a class="arcade-link" href="review-arcade.html">')
# --- multi-book: every set comes from books.js instead of being hard-coded
cut("// Which level this page belongs to", "const SETCFG = SETS[SET];", """// Which zone this page belongs to (books.js lists every zone: 學測 Level 4/5/6, 國中小2000, …).
const ZONES = window.VOCAB_ZONES || {};
const SET = ZONES[document.body.dataset.set] ? document.body.dataset.set : Object.keys(ZONES)[0];
const GSAT_INDEX = window.GSAT_INDEX || {};
const fillPattern = (pattern, u) => pattern.replace("{u}", u).replace("{uu}", String(u).padStart(2, "0"));
const SETS = {};
Object.entries(ZONES).forEach(([id, z]) => {
  SETS[id] = {
    ...z,
    level: z.levelLabel,
    page: u => fillPattern(z.page, u),
    quizPage: u => fillPattern(z.quiz, u),
    badge: u => `${z.tag}·${u}`,
    label: u => `${z.name} — ${z.unitName || "Group"} ${u}`,
    unitName: z.unitName || "Group",
    board: `index.html#${id}`,
    index: () => GSAT_INDEX[id] || {}
  };
});
// Words inside a sentence are cross-linked only to zones of the same book.
const BOOK_ZONES = Object.keys(SETS).filter(id => SETS[id].book === SETS[SET].book);
""")
sub("""  for (let n = 1; n <= SETCFG.count; n += 1) {
    const option = document.createElement("option");
    option.value = String(n);
    const groupName = (GSAT_NAMES[SET] || [])[n - 1];""", """  for (const n of SETCFG.units) {
    const option = document.createElement("option");
    option.value = String(n);
    const groupName = SETCFG.names[n];""")
sub("""    tag.textContent = `Level ${SETCFG.level} 單字`;""", """    tag.textContent = SETCFG.headLabel;""")
sub("""  els.definition.textContent = card.definition;""", """  if (card.forms) { // verb forms / irregular plural given in the book
    const forms = document.createElement("span");
    forms.className = "forms-tag";
    forms.textContent = card.forms;
    els.posTag.append(forms);
  }
  els.definition.textContent = card.definition;""")
sub("""const KEY_PREFIX = `${SETCFG.level}-`; // review keys: "<level>-<group>:<cardIndex>\"""", """const KEY_PREFIX = `${SETCFG.prefix}-`; // review keys: "<zone prefix>-<group>:<cardIndex>\"""")
sub("""  wordForms = { l4: buildForms(SETS.l4.index()), l5: buildForms(SETS.l5.index()), l6: buildForms(SETS.l6.index()) };""", """  wordForms = {};
  BOOK_ZONES.forEach(id => { wordForms[id] = buildForms(SETS[id].index()); });""")
sub("""const NOT_WORD = { l4: new Set(), l5: new Set(), l6: new Set() };
const SET_ORDER = [SET, ...Object.keys(SETS).filter(s => s !== SET)];""", """const NOT_WORD = {};
Object.keys(SETS).forEach(id => { NOT_WORD[id] = new Set(); });
const SET_ORDER = [SET, ...BOOK_ZONES.filter(s => s !== SET)];""")
sub("""  const tone = { l4: "#087f8c", l5: "#b8541a", l6: "#6b4fa0" }[SET];""", """  const tone = { hot: "#b8541a", va: "#6b4fa0" }[SETCFG.cls] || "#087f8c";""")
sub("""(card.isHead ? `Level ${SETCFG.level} headword 單字` : "")""", """(card.isHead ? SETCFG.headLabel : "")""")
sub("""學測 6000 字 · Level ${SETCFG.level}${card.isHead""", """${escapeXml(SETCFG.tile)}${card.isHead""")
sub("""  const members = list.map((c, i) => ({ c, i })).filter(({ c }) => c.family === card.family && c !== card);""", """  const members = SETCFG.family ? list.map((c, i) => ({ c, i })).filter(({ c }) => c.family === card.family && c !== card) : [];""")
sub("""  els.synonyms.replaceChildren(label, ...chips, dict);""", """  els.synonyms.replaceChildren(...(SETCFG.family ? [label, ...chips] : []), dict);""")
sub("""        state.quizAnswers[key] = option.letter;
        renderQuiz();""", """        if (!(key in quizFirst)) quizFirst[key] = option.letter; // the first answer is the one reported to the teacher
        state.quizAnswers[key] = option.letter;
        renderQuiz();
        sendQuizResult(false);""")
sub("""      <div class="quiz-score" id="quizScore">0 / 0</div>""", """      <div class="quiz-tools"><button class="secondary-button" id="quizSend" type="button" hidden>Send result 送出成績</button><span class="quiz-sent" id="quizSentNote" hidden>✓ Sent to your teacher 成績已送出</span><div class="quiz-score" id="quizScore">0 / 0</div></div>""")
sub("""  els.quizList = section.querySelector("#quizList");""", """  els.quizList = section.querySelector("#quizList");
  section.querySelector("#quizSend").addEventListener("click", () => sendQuizResult(true));""")
sub("""  els.quizScore.textContent = `${correctCount} / ${quiz.length}`;""", """  els.quizScore.textContent = `${correctCount} / ${quiz.length}`;
  const tracking = Boolean(window.GsatTracker && GsatTracker.enabled);
  const answeredCount = quiz.filter((_, i) => quizFirst[`${state.unit}-${i}`]).length;
  const sendBtn = els.quizSection.querySelector("#quizSend");
  const sentNote = els.quizSection.querySelector("#quizSentNote");
  sendBtn.hidden = !tracking || Boolean(quizSent[state.unit]) || answeredCount === 0;
  sendBtn.textContent = `Send result 送出成績 (${answeredCount}/${quiz.length})`;
  sentNote.hidden = !quizSent[state.unit];""")
sub("""function renderQuiz() {""", """// MCQ practice report: sent once per group, automatically when every question has been answered,
// or earlier when the student presses "Send result". Accuracy uses the first answer to each question.
const quizFirst = {};
const quizSent = {};

function sendQuizResult(force) {
  if (!window.GsatTracker || !GsatTracker.enabled || quizSent[state.unit]) return;
  const quiz = units[state.unit].quiz || [];
  const answered = quiz.map((q, i) => ({ q, first: quizFirst[`${state.unit}-${i}`] })).filter(x => x.first);
  if (!answered.length || (!force && answered.length < quiz.length)) return;
  quizSent[state.unit] = true;
  const list = cards();
  const wrong = answered.filter(x => x.first !== x.q.answer).map(x => {
    const text = (x.q.options.find(o => o.letter === x.q.answer) || {}).text || "";
    const vi = Number.isInteger(x.q.vi) && list[x.q.vi] ? x.q.vi : list.findIndex(c => c.word === text);
    return { w: vi >= 0 ? list[vi].word : text, key: vi >= 0 ? `${KEY_PREFIX}${state.unit}:${vi}` : "" };
  });
  GsatTracker.logTest({
    type: answered.length < quiz.length ? `MCQ practice (${answered.length} of ${quiz.length} answered)` : "MCQ practice",
    level: SETCFG.level, group: Number(state.unit),
    total: answered.length, correct: answered.length - wrong.length, wrong
  });
  renderQuiz();
}

function renderQuiz() {""")
sub("""    localStorage.setItem(REVIEW_KEY, JSON.stringify(list));""", """    localStorage.setItem(REVIEW_KEY, JSON.stringify(list));
    if (window.GsatTracker) GsatTracker.reviewChanged();""")
write("app.js", app)

# ---------------------------------------------------------------- review arcade
arc = open(os.path.join(REF, "review-arcade.html"), encoding="utf8").read()


def asub(old, new):
    global arc
    assert old in arc, old[:80]
    arc = arc.replace(old, new)


asub("← 回到 SAT Vocabulary Board", "← 回到 Vocabulary Board 單字學習板")
asub('<a href="index.html">SAT Vocabulary Board</a>', '<a href="index.html">Vocabulary Board</a>')
a = arc.index('<script src="dashboard-data.js')
b = arc.index("<script>", a)
arc = arc[:a] + "".join(f'<script src="l{L}-dashboard-data.js?v={V}"></script>\n' for L in LEVELS) + arc[b:]
a = arc.index("   Keys: Barron's")
b = arc.index("const readStore=")
arc = arc[:a] + """   Keys: "<level>-<group>:<cardIndex>", e.g. "4-12:5"
   ========================================================= */
const STORE_KEY='gsat456-review-list';
const mkBook=n=>({name:`學測6000字 Level ${n}`,unit:'Group',units:window[`L${n}_DASHBOARD_UNITS`]||[],key:(u,i)=>`${n}-${u}:${i}`,page:u=>`l${n}-unit${u}.html`});
const BOOKS={l4:mkBook(4),l5:mkBook(5),l6:mkBook(6)};
""" + arc[b:]
a = arc.index("Object.entries(readStore(ROOTS_REVIEW_CARDS")
b = arc.index("function loadReview(){")
arc = arc[:a] + "// Distractor pools per level.\nconst POOL={};\nObject.keys(BOOKS).forEach(b=>{POOL[b]=[...lookup.values()].filter(c=>c.book===b);});\n\n" + arc[b:]
asub("  if(!card.s)return null;\n", "  if(!card.s)return null;\n  if(card.a){const i=card.s.indexOf(card.a);if(i>=0)return{form:card.a,index:i};}\n")
asub("shuffle(POOL.barrons)", "shuffle(POOL.l4)")
asub("(e.key===STORE_KEY||e.key===ROOTS_REVIEW_CARDS)", "(e.key===STORE_KEY)")
asub("ex:'Desiring or consuming great quantities. → voracious'", "ex:'to leave a person, place, or thing and never come back → abandon'")
asub("ex:'The ____ reader consumed three novels in a single weekend…'", "ex:'The villagers had to ____ their homes and run to higher ground…'")
asub("ex:'貪婪的；貪得無厭的 → voracious'", "ex:'放棄；遺棄 → abandon'")
asub("ex:'voracious → 貪婪的；貪得無厭的'", "ex:'abandon → 放棄；遺棄'")
asub("ex:'🔊 → 貪婪的；貪得無厭的'", "ex:'🔊 → 放棄；遺棄'")
for old, new in [("選要考哪幾本書的單字", "選要考哪幾個 Level 的單字"), ("清單裡沒有這本書的字", "清單裡沒有這個 Level 的字"), ("請至少選一本書。", "請至少選一個 Level。")]:
    assert old in arc, old
    arc = arc.replace(old, new)
asub("""const mkBook=n=>({name:`學測6000字 Level ${n}`,unit:'Group',units:window[`L${n}_DASHBOARD_UNITS`]||[],key:(u,i)=>`${n}-${u}:${i}`,page:u=>`l${n}-unit${u}.html`});
const BOOKS={l4:mkBook(4),l5:mkBook(5),l6:mkBook(6)};""", """const BOOKS={};
Object.entries(window.VOCAB_ZONES||{}).forEach(([id,z])=>{BOOKS[id]={name:z.name,tag:z.tag,unit:z.unitName||'Group',units:window[z.global]||[],key:(u,i)=>`${z.prefix}-${u}:${i}`,page:u=>z.page.replace('{u}',u)};});""")
asub("shuffle(POOL.l4)", "shuffle(POOL[Object.keys(BOOKS)[0]])")
asub("""    const n=counts[id]||0;if(n)state.books.add(id);""", """    const n=counts[id]||0;if(n)state.books.add(id);
    if(!n&&state.all.length)return; // with many books, list only those that have review words""")
asub("清單裡沒有這個 Level 的字", "清單裡沒有這一冊的字")
asub("選要考哪幾個 Level 的單字", "選要考哪幾冊／哪幾個 Level 的單字")
asub("請至少選一個 Level。", "請至少選一項。")
a = arc.index('<script src="l4-dashboard-data.js')
b = arc.index("<script>", a)
arc = arc[:a] + f'<script src="books.js?v={V}"></script>\n' + "".join(f'<script src="{z["data"]}?v={V}"></script>\n' for z in zones.values()) + arc[b:]
asub("""function loadReview(){
  const seen=new Set();
  return readStore(STORE_KEY,[]).map(""", """// A teacher test link (review-arcade.html#set=4-1:3,4-2:7&label=Name) tests those words instead of the student's own list.
const HASH=new URLSearchParams(location.hash.slice(1));
const SET_KEYS=(HASH.get('set')||'').split(',').filter(k=>lookup.has(k)).slice(0,100);
const SET_LABEL=(HASH.get('label')||'').slice(0,40);
function loadReview(){
  const seen=new Set();
  return (SET_KEYS.length?SET_KEYS:readStore(STORE_KEY,[])).map(""")
asub("function finish(){", """function reportRun(){
  if(!window.GsatTracker||!state.log.length)return;
  const levels=[...new Set(state.log.map(r=>BOOKS[r.card.book].tag))].sort().join(',');
  GsatTracker.logTest({type:SET_KEYS.length?'Teacher test':'Review game',level:levels,group:'',total:state.log.length,
    correct:state.log.filter(r=>r.ok).length,wrong:state.log.filter(r=>!r.ok).map(r=>({w:r.card.w,key:r.card.key})),label:SET_LABEL});
}
function finish(){
  reportRun();""")
asub('<script src="vendor/xlsx.full.min.js"></script>', f'<script src="tracker-config.js?v={V}"></script>\n<script src="tracker.js?v={V}"></script>\n<script src="vendor/xlsx.full.min.js"></script>')
a = arc.rindex("</script>")
arc = arc[:a] + """
if(SET_KEYS.length){
  document.querySelector('.brand h1 small').textContent='老師指定測驗 Teacher test'+(SET_LABEL?'：'+SET_LABEL:'')+'｜每答對 10 題進入一分鐘小遊戲';
  document.querySelector('#setupTitle').childNodes[1].textContent='老師指定的單字 ';
}
""" + arc[a:]
write("review-arcade.html", arc)

total = sum(len(G["VOCAB"]) for G in d.values())
print("groups", counts, "entries", total, "headwords indexed", {k: len(v) for k, v in index.items()})
