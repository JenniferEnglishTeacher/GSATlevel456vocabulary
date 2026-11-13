"""國中小1200字 (Jennifer Chen 國中1200單字 主題分類 Revision 版, Q&A 句型練習) -> e1200.json for build.py.
usage: python3 -I e1200_convert.py <docx> <out.json>
One unit per 區 (39 sections; 區 20–21 is one, 34 and 35 are split). Each row gives word, 詞性, 中文, one Q&A with a blank, and 中譯.
The docx has no multiple-choice questions, so one is generated per word: the same Q&A, a Chinese hint for the
target word, and three distractors of the same part of speech (same unit first). Units that have hand-written
questions in mcq/e*.txt use those instead (two sentences, no Chinese). English definitions come from defs/e*.txt."""
import sys, os, re, json, random, docx
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import vocab_extra

SRC, OUT = sys.argv[1], sys.argv[2]
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
POS = {"noun": "n.", "verb": "v.", "adjective": "adj.", "adverb": "adv.", "numeral": "num.", "prep.": "prep.", "pronoun": "pron.",
       "det.": "det.", "conj.": "conj.", "aux.": "aux.", "phrase": "phr.", "int.": "int.", "title (abbr.)": "abbr.", "abbr.": "abbr.",
       "article": "art.", "verb phrase": "v.phr."}
# rows whose bracket is another name for the word, not the form the sentence needs: the headword fills the blank
SYN = {123, 124, 125, 126, 239, 283, 474, 476, 480, 512, 518, 627, 640, 715, 740, 855, 856, 857, 936, 944, 960, 1328}
ANSWER = {104: "has a runny nose", 189: "a lot of", 284: "fries", 914: "out", 703: "U.S.A.", 704: "R.O.C.", 845: "an"}
ALTS = {703: ["USA"], 704: ["ROC"], 944: ["goodbye", "bye"], 120: ["Doctor"]}
B = "{{BLANK}}"
# Chinese hint for the generated questions where the answer is another form of the headword
HINT = {848: "我的（東西）", 849: "她的（東西）", 850: "我們的（東西）", 851: "他（受詞）", 852: "他們（受詞）", 853: "你自己", 854: "它自己"}
# rows with several blanks: one clear blank instead (sentence, Chinese, answer)
MANUAL = {
    65: (f"Tom is 160 cm, and Ben is 150 cm. — Tom is {B} than Ben.", "湯姆 160 公分，班 150 公分。— 湯姆比班高。", "taller"),
    66: (f"Amy is 145 cm, and Lisa is 140 cm. — Lisa is {B} than Amy.", "艾美 145 公分，麗莎 140 公分。— 麗莎比艾美矮。", "shorter"),
    67: (f"The box is 10 kg, and the bag is 2 kg. — The box is {B} than the bag.", "箱子 10 公斤，袋子 2 公斤。— 箱子比袋子重。", "heavier"),
    68: (f"Dad is 80 kg, and Uncle Sam is 60 kg. — Uncle Sam is {B} than Dad.", "爸爸 80 公斤，山姆叔叔 60 公斤。— 山姆叔叔比爸爸瘦。", "thinner"),
    69: (f"Q: Who has more money, the king or the farmer? — A: The king. He is {B} than the farmer.", "誰的錢比較多，國王還是農夫？— 國王，他比農夫有錢。", "richer"),
    70: (f"Q: Who do more people know, the movie star or your neighbor? — A: The movie star. She is {B} than my neighbor.", "比較多人認識誰，電影明星還是你的鄰居？— 電影明星，她比我的鄰居有名。", "more famous"),
    71: (f"Q: Who is the {B} in your family? — A: My grandpa. He is ninety years old.", "你家裡誰年紀最大？— 我爺爺，他九十歲。", "oldest"),
    72: (f"Q: Who is the {B} in your family? — A: My baby sister. She is one year old.", "你家裡誰最年輕？— 我的小妹妹，她一歲。", "youngest"),
    73: (f"Q: Who is the {B} student in your class? — A: Amy. She gets 100 on every test.", "你們班上最聰明的學生是誰？— 艾美，她每次考試都考一百分。", "smartest"),
    74: (f"Q: Which cat is the {B} of all? — A: Kitty. She eats a lot.", "哪一隻貓是全部裡面最胖的？— 凱蒂，她吃很多。", "fattest"),
    75: (f"Q: Which flower is the {B} in the garden? — A: The rose. Everyone loves to look at it.", "花園裡哪一種花最美？— 玫瑰，大家都喜歡看它。", "most beautiful"),
    121: (f"Q: What's your name? Do you have an English name? — A: Yes, I do. My English {B} is Amy.", "你叫什麼名字？你有英文名字嗎？— 有，我的英文名字是艾美。", "name"),
    845: (f"Q: What does Ben want for lunch? — A: He wants {B} apple and a hamburger.", "班午餐想吃什麼？— 他想要一顆蘋果和一個漢堡。", "an"),
}

d = docx.Document(SRC)
zones = []
for r in d.tables[0].rows[1:]:
    c = [x.text.strip() for x in r.cells]
    m = re.match(r"(\d+)\D+(\d+)", c[2])
    if m:       # units are numbered 1..39 in order; the docx label (20–21, 34上 ...) is kept in the theme
        zones.append((len(zones) + 1, c[1], int(m.group(1)), int(m.group(2)), c[0]))
rows = []
for t in d.tables:
    if len(t.columns) != 6:
        continue
    for r in t.rows[1:]:
        c = [x.text.strip() for x in r.cells]
        if c[0].isdigit():
            rows.append((int(c[0]), c[1], c[2], c[3], c[4], c[5]))
assert [r[0] for r in rows] == list(range(1, len(rows) + 1)), "row numbers are not 1..n"


def one_line(text):
    lines = [re.sub(r"^[①-⑳]\s*", "", x.strip()) for x in text.split("\n") if x.strip()]
    return " — ".join(lines)


def entry(no, word, pos, cn_def, qa, cn):
    m = re.match(r"^(.*?)\s*\((.+)\)$", word)
    base, alt = (m.group(1), m.group(2)) if m else (word, "")
    alts = list(ALTS.get(no, []))
    if no in MANUAL:
        sent, cn1, ans = MANUAL[no]
    else:
        sent, cn1 = one_line(qa), one_line(cn)
        if no in ANSWER:
            ans = ANSWER[no]
        elif alt and no not in SYN and "," not in alt:
            ans = alt
        else:
            ans = base.split(" / ")[0]
            alts += [a.strip() for a in alt.split(",") if a.strip()] if alt else []
        blanks = re.findall(r"_{3,}(?:\s+_{3,})*([A-Za-z]*)", sent)
        assert len(blanks) == 1, (no, sent)
        if blanks[0]:                       # "________s": the ending belongs to the answer
            ans = ans if ans.endswith(blanks[0]) and ans != base else base + blanks[0]
        sent = re.sub(r"_{3,}(?:\s+_{3,})*[A-Za-z]*", B, sent)
        if re.search(r"(?:^|[.?!] |— )(?:[QA]: )?\"?" + re.escape(B), sent) and ans[0].islower() and ans not in ("a.m.", "p.m."):
            ans = ans[0].upper() + ans[1:]  # the blank starts a sentence
    if ans.endswith("."):               # "It's 7 a.m.." -> the answer's own period ends the sentence
        sent = sent.replace(B + ".", B)
    e = {"word": word, "pos": POS[pos], "cn_def": cn_def, "en_def": "", "sentence": sent, "cn": cn1, "no": no}
    if ans != word:
        e["answer"] = ans
    if len(ans.split()) > 1:
        e["nblanks"] = len(ans.split())
    if alts:
        e["alts"] = list(dict.fromkeys(alts))
    return e


def shape(a):
    a = a.lower()
    return "ing" if a.endswith("ing") else "ed" if a.endswith("ed") else "s" if a.endswith("s") else "-"


entries = {no: entry(no, *rest) for no, *rest in rows}
ans_of = lambda e: e.get("answer") or e["word"]
by_pos = {}
for e in entries.values():
    by_pos.setdefault(e["pos"], []).append(e)
CLOSED = [e for e in entries.values() if e["pos"] in ("prep.", "pron.", "det.", "conj.", "aux.", "art.", "int.", "abbr.", "phr.", "v.phr.", "adv.")]
out = {}
vocab_extra.apply_defs({zno: [entries[n] for n in range(lo, hi + 1)] for zno, zname, lo, hi, label in zones}, "e")
WRITTEN, GLOSS = vocab_extra.load_mcqs("e")
INDEX = {}
for e in entries.values():
    for k in (re.sub(r"\s*\(.*\)$", "", e["word"]).lower(), ans_of(e).lower()):
        INDEX.setdefault(k, e)
for zno, zname, lo, hi, label in zones:
    V = [entries[n] for n in range(lo, hi + 1)]
    rng = random.Random(1200 + zno)
    seats, prev = [], -1
    while len(seats) < len(V):
        block = [0, 1, 2, 3]
        rng.shuffle(block)
        if block[0] == prev:
            block.append(block.pop(0))
        seats += block
        prev = seats[-1]
    mcqs, lookup = [], {}
    for i, e in enumerate(V):
        a = ans_of(e)
        taken = {a.lower(), e["word"].lower()} | {x.lower() for x in e.get("alts", [])}
        cns = {e["cn_def"]}
        picks = []
        pools = [[x for x in V if x["pos"] == e["pos"]], by_pos[e["pos"]], CLOSED]
        for pool in pools:
            pool = [x for x in pool if x is not e]
            rng.shuffle(pool)
            pool.sort(key=lambda x: shape(ans_of(x)) != shape(a))     # same ending first (stable)
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
        assert len(picks) == 3, e
        opts = picks[:]
        opts.insert(seats[i], a)
        mcqs.append({"q": e["sentence"].replace(B, "______") + f"【{HINT.get(e['no'], e['cn_def'])}】", "options": opts, "answer": seats[i], "cn": e["cn"], "vocabIndex": i})
    for e in entries.values():      # every word may appear as an option
        info = {"pos": e["pos"], "en_def": e["en_def"], "cn_def": e["cn_def"]}
        for k in {ans_of(e).lower(), re.sub(r"\s*\(.*\)$", "", e["word"]).lower()}:
            lookup.setdefault(k, info)
    used = {o.lower() for q in mcqs for o in q["options"]}
    lookup = {k: v for k, v in lookup.items() if k in used}
    if str(zno) in WRITTEN:
        mcqs, lookup = vocab_extra.written_mcqs(V, WRITTEN[str(zno)], INDEX, GLOSS, rng, f"e{zno}", ans_of)
    en, zh = (zname.split("｜") + [""])[:2]
    out[str(zno)] = {"generated": True, "theme": f"{en.strip()} {zh.strip()}（第{label}區）",
                     "QUIZ_CONFIG": {"groupName": f"國中小1200字 U{zno:02d} - {en.strip()}", "gasEndpoint": GAS},
                     "VOCAB": [{k: v for k, v in e.items() if k != "no"} for e in V], "MCQS": mcqs,
                     "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
json.dump(out, open(OUT, "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(len(out), "units,", sum(len(g["VOCAB"]) for g in out.values()), "words;", len(WRITTEN), "units with hand-written questions")
