#!/usr/bin/env python3
"""Build the GSAT Level 4/5/6 vocabulary site (dashboard + flashcards + quizzes).
Usage: build.py <all.json> <reference SAT site dir> <existing quiz repo dir> <output dir>
"""
import json, re, shutil, sys, os, html

DATA, REF, QUIZ, OUT = sys.argv[1:5]
V = "20261113a"
d = json.load(open(DATA, encoding="utf8"))
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
        write(f"l{L}-unit{g}.html", f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>學測6000字 Level {L} Group {g} Flashcards — {html.escape(rng)}</title>
  <link rel="stylesheet" href="styles.css?v={V}">
</head>
<body data-set="l{L}">
  <main class="app-shell">
    <header class="topbar">
      <div>
        <p class="eyebrow"><a class="back-link" href="index.html#l{L}">Unit Board · Level {L}</a></p>
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
  <script src="l{L}-unit{g}-data.js?v={V}"></script>
  <script src="gsat-words.js?v={V}"></script>
  <script src="app.js?v={V}"></script>
</body>
</html>
""")
        dash.append({"unit": g, "theme": rng, "cards": dcards})

        # Recorded online quiz (spelling + 30 MCQ, logs to the Google Sheet): copy the three files unchanged
        # except for the "all units" link, which now returns to this board.
        base = f"level{L}-group{g:02d}"
        page = open(os.path.join(QUIZ, base + ".html"), encoding="utf8").read()
        old = '<a href="index.html" class="back-home-link">← 所有單元 / All units</a>'
        assert old in page, base
        page = page.replace(old, f'<a href="index.html#l{L}" class="back-home-link">← 所有單元 / Unit Board</a> &nbsp;·&nbsp; <a href="l{L}-unit{g}.html" class="back-home-link">🗂 字卡 Flashcards</a>')
        write(base + ".html", page)
        for suffix in ("-data.js", "-app.js"):
            shutil.copyfile(os.path.join(QUIZ, base + suffix), os.path.join(OUT, base + suffix))
    write(f"l{L}-dashboard-data.js", f"// Auto-generated for the Unit Board — 學測6000字 Level {L}\nwindow.L{L}_DASHBOARD_UNITS = {js(dash)};\n")

write("gsat-words.js",
      "// Auto-generated: group names, and every headword -> [group, cardIndex, definition, chinese] per level\n"
      f"window.GSAT_COUNTS = {js(counts)};\nwindow.GSAT_GROUP_NAMES = {js(names)};\nwindow.GSAT_INDEX = {js(index)};\n")

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
.quiz-link.recorded { background: #17202a; box-shadow: 0 8px 20px rgba(23, 32, 42, 0.25); }\n.quiz-link.recorded:hover { background: #000; }
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
write("app.js", app)

# ---------------------------------------------------------------- review arcade
arc = open(os.path.join(REF, "review-arcade.html"), encoding="utf8").read()


def asub(old, new):
    global arc
    assert old in arc, old[:80]
    arc = arc.replace(old, new)


asub("← 回到 SAT Vocabulary Board", "← 回到 學測6000字 Vocabulary Board")
asub('<a href="index.html">SAT Vocabulary Board</a>', '<a href="index.html">學測6000字 Vocabulary Board</a>')
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
write("review-arcade.html", arc)

total = sum(len(G["VOCAB"]) for G in d.values())
print("groups", counts, "entries", total, "headwords indexed", {k: len(v) for k, v in index.items()})
