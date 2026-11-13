"""國中小進階800字 (xlsx, sheet 全: word | pos | 中文 | sentence with one blank | 中譯) -> adv800.json for build.py.
usage: python3 -I adv800_convert.py <xlsx> <out.json>
40 units of about 20 words in the sheet's order. The sheet gives base forms only, so ANSWERS holds the form each
sentence really needs (checked by hand). One multiple-choice question is generated per word (same sentence, a Chinese
hint for the target word, three options of the same part of speech)."""
import sys, re, json, random, openpyxl

SRC, OUT = sys.argv[1], sys.argv[2]
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
POS = {"n": "n.", "v": "v.", "adj": "adj.", "adv": "adv.", "prep": "prep.", "pron": "pron.", "aux v": "aux.", "adj/adv": "adj./adv."}
B, UNITS = "{{BLANK}}", 40
# row (from 0): the form that fills the blank, then any other accepted spellings
ANSWERS = {
    5: "activities", 8: "adults", 11: "advised", 14: "aims", 16: "airline", 31: "barked", 59: "bricks brick", 76: "canceled cancelled", 92: "charges",
    94: "chased", 97: "chicks chick", 115: "commanded", 120: "completed", 124: "confuse confused", 125: "Congratulations", 128: "contact lenses",
    143: "crayons", 151: "cubs cub", 161: "damaged", 168: "decorated", 169: "decreased", 173: "delivered", 183: "dialed dialled", 192: "directed",
    193: "directions direction", 194: "disappeared", 195: "discovered", 199: "divided", 211: "dramas drama", 215: "dumplings", 223: "efforts effort",
    225: "elected", 227: "embarrassed embarrass", 228: "emotions emotion", 229: "emphasized emphasizes", 232: "enemies", 240: "errors",
    245: "exam exams", 246: "excited", 289: "frightened", 294: "gathered gather", 311: "greeted greets", 312: "guard guarded", 334: "hopped",
    353: "includes", 355: "inches", 362: "insisted insists", 363: "inspired", 365: "instruments", 369: "introduced", 370: "invented", 393: "laid",
    394: "leaf leaves", 396: "licked", 398: "lifted", 407: "locked", 427: "measured", 432: "meters", 439: "mixed", 463: "nodded", 466: "nuts",
    470: "offered", 498: "paused", 526: "praised", 535: "principles", 539: "produces", 549: "punished", 560: "received", 564: "recycle recycled",
    565: "refused", 566: "regretted regrets", 568: "rejected", 572: "respect respected", 579: "robbed", 581: "roller skating", 583: "rubbed",
    586: "ruined", 599: "searching", 603: "seeking", 604: "seems seemed", 605: "selected", 613: "sheets", 628: "skiing", 629: "skills skill",
    635: "slices", 684: "supported supports", 688: "sweeps", 706: "thoughts", 719: "tourists", 730: "treated", 733: "troops", 736: "trusts trusted",
    745: "underlined", 759: "vegetables", 763: "visitors", 773: "waved", 782: "wheels", 783: "whispered", 789: "wiped", 791: "wished wishes",
    794: "workbooks workbook", 795: "worm worms", 796: "worries", 798: "wrapped",
}
MULTI = {128, 581}      # these answers are two words, not an answer plus another spelling
SENT = {659: "He is in a __________ of confusion.",       # the sheet's sentence had no blank
        603: "He is __________ a new job."}                # was "seeking for"
TW = [("屏幕", "螢幕"), ("項目", "專案"), ("酒店", "飯店"), ("捲心菜", "高麗菜"), ("國際象棋", "西洋棋"), ("胡蘿蔔", "紅蘿蔔"), ("空調", "冷氣機"),
      ("自動售貨機", "自動販賣機"), ("紋身", "刺青"), ("網纜", "網路線")]      # Taiwan wording


def tw(s):
    for a, b in TW:
        s = s.replace(a, b)
    return re.sub(r"(\d)米", r"\1公尺", s)


rows = []
for r in openpyxl.load_workbook(SRC)["全"].iter_rows(values_only=True):
    if r[0] is None:
        continue
    c = ["" if x is None else str(x).strip() for x in r[:5]]
    if c[0] in ("True", "False"):
        c[0] = c[0].lower()             # Excel turned the word into a boolean
    rows.append(c)
V = []
for i, (word, pos, cn_def, sent, cn) in enumerate(rows):
    sent = SENT.get(i, sent).replace("’", "'")
    assert len(re.findall(r"_{3,}", sent)) == 1, (i, sent)
    forms = ANSWERS[i].split(" ") if i in ANSWERS and i not in MULTI else [ANSWERS.get(i, word)]
    ans, alts = forms[0], forms[1:]
    sent = re.sub(r"_{3,}", B, sent)
    if sent.startswith(B) and ans[0].islower():
        ans = ans[0].upper() + ans[1:]
    e = {"word": word, "pos": POS[pos], "cn_def": tw(cn_def), "en_def": "", "sentence": sent, "cn": tw(cn)}
    if ans != word:
        e["answer"] = ans
    if len(ans.split()) > 1:
        e["nblanks"] = len(ans.split())
    if alts:
        e["alts"] = alts
    V.append(e)

ans_of = lambda e: e.get("answer") or e["word"]
shape = lambda a: "ing" if a.lower().endswith("ing") else "ed" if a.lower().endswith("ed") else "s" if a.lower().endswith("s") else "-"
by_pos = {}
for e in V:
    by_pos.setdefault(e["pos"][:4], []).append(e)
base, extra = divmod(len(V), UNITS)
out, at = {}, 0
for u in range(1, UNITS + 1):
    n = base + (1 if u <= extra else 0)
    G = V[at:at + n]; at += n
    rng = random.Random(800 + u)
    seats, prev = [], -1
    while len(seats) < len(G):
        block = [0, 1, 2, 3]
        rng.shuffle(block)
        if block[0] == prev:
            block.append(block.pop(0))
        seats += block
        prev = seats[-1]
    mcqs = []
    for i, e in enumerate(G):
        a = ans_of(e)
        taken = {a.lower(), e["word"].lower()} | {x.lower() for x in e.get("alts", [])}
        cns, picks = {e["cn_def"]}, []
        for pool in ([x for x in G if x["pos"] == e["pos"]], by_pos[e["pos"][:4]], V):
            pool = [x for x in pool if x is not e]
            rng.shuffle(pool)
            pool.sort(key=lambda x: shape(ans_of(x)) != shape(a))
            for x in pool:
                o = ans_of(x)
                o = o[0].upper() + o[1:] if a[0].isupper() and o[0].islower() else (o[0].lower() + o[1:] if a[0].islower() and o[0].isupper() and x["word"][0].islower() else o)
                if o.lower() in taken or x["cn_def"] in cns:
                    continue
                picks.append(o); taken.add(o.lower()); cns.add(x["cn_def"])
                if len(picks) == 3:
                    break
            if len(picks) == 3:
                break
        opts = picks[:]
        opts.insert(seats[i], a)
        mcqs.append({"q": e["sentence"].replace(B, "______") + f"【{e['cn_def']}】", "options": opts, "answer": seats[i], "cn": e["cn"], "vocabIndex": i})
    used = {o.lower() for q in mcqs for o in q["options"]}
    lookup = {}
    for e in V:
        for k in {ans_of(e).lower(), e["word"].lower()}:
            if k in used:
                lookup.setdefault(k, {"pos": e["pos"], "en_def": "", "cn_def": e["cn_def"]})
    theme = f"{G[0]['word']} – {G[-1]['word']}"
    out[str(u)] = {"generated": True, "theme": theme, "QUIZ_CONFIG": {"groupName": f"國中小進階800字 U{u:02d} - {theme}", "gasEndpoint": GAS},
                   "VOCAB": G, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
json.dump(out, open(OUT, "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(len(out), "units,", len(V), "words")
