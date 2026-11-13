#!/usr/bin/env python3
"""Convert AWL_Sublist_NN_Handout.docx (grid + MCQ + key) into site data, split into parts of about 20 entries.
Usage: awl_convert.py <dir with handout docx> <dir with awl-sublist-N.html (filled example sentences)> <out awl.json>"""
import glob, json, os, random, re, sys
from docx import Document
HDIR, QDIR, OUTF = sys.argv[1:4]
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
PART = 20
POS = {"noun": "n.", "verb": "v.", "phrase": "phr.", "preposition": "prep.", "conjunction": "conj.", "n. phrase": "n.phr.", "adjective": "adj.", "adverb": "adv."}
CJK = re.compile(r"[㐀-鿿＀-￯，、]+")


def clean_word(w):
    """'company (n)公司' -> 'company'; 'approach (v) a tasl/mission' -> 'approach a tasl/mission'"""
    w = CJK.sub(" ", w)
    w = re.sub(r"\((?:n|v|adj|adv|phr|prep|conj)\.?\)", " ", w, flags=re.I)
    w = re.sub(r"\((?:[nv],?\s*for)?[^A-Za-z)]*\)", " ", w)          # "( )" left after removing a Chinese note
    w = re.sub(r"\s*=\s*", " = ", w)
    return re.sub(r"\s+", " ", w).strip(" ,;")


BE = {"is", "are", "was", "were", "be", "been", "being", "am", "'s", "'re", "she's", "he's", "it's"}
KEEP_BE_AFTER = {"will", "would", "should", "can", "could", "may", "might", "must", "to", "shall"}


def stem(w):
    return re.sub(r"(ed|es|s|ing|d)$", "", w.lower())


def fit_answer(word, sentence):
    """The words that actually fill the blank: the grid phrase minus notes, alternatives and any part the sentence already prints."""
    w = word.split("=")[0]
    w = re.sub(r"\(.*?\)|\+\s*N\b|\.{2,}", " ", w)
    w = re.sub(r"\s+(N|V|Ving)$", "", w.strip())
    w = re.sub(r"\s*/\s*", "/", re.sub(r"\s+", " ", w)).strip()
    pre, _, post = sentence.partition("{{BLANK}}")
    before = re.findall(r"[A-Za-z']+", pre.lower())
    after = re.findall(r"[A-Za-z']+", post.lower())
    # expand "lay/put emphasis on" into its variants and prefer the one the sentence supports
    variants = [[]]
    for tok in w.split(" "):
        alts = tok.split("/")
        variants = [v + [a_] for v in variants for a_ in alts]
    best = None
    for toks in variants:
        t = list(toks)
        score = 0
        if t and before:
            first = t[0].lower()
            if (first == "be" and before[-1] in BE) or (first != "be" and len(t) > 1 and stem(before[-1]) == stem(first)):
                t = t[1:]; score += 1
        while t and after and len(t) > 1 and t[-1].lower() == after[0]:
            t = t[:-1]; after = after[1:]; score += 1
        cand = " ".join(t)
        if best is None or score > best[0]:
            best = (score, cand)
    ans = best[1]
    flag = ""
    if ans.lower().startswith("be ") and (not before or before[-1] not in KEEP_BE_AFTER):
        flag = "be?"
    return ans, flag


# (sublist, no) -> (one-blank sentence or None to keep the handout's, text that fills it). Checked by hand:
# phrases whose grid form does not drop straight into the sentence (verb agreement, split blanks, placeholders).
MANUAL = {
    (1, 4): (None, "approach"), (1, 40): (None, "derives from"), (1, 41): (None, "is derived from"),
    (1, 108): ("The president {{BLANK}} the recent allegations.", "made a response to"),
    (1, 111): ("Proper nutrition {{BLANK}} in an athlete's performance.", "plays a significant role"),
    (2, 61): ("The policy will {{BLANK}} the industry.", "have a significant impact on"),
    (2, 94): ("The ages of the participants {{BLANK}} 35.", "range from 18 to"),
    (2, 100): (None, "resides in"),
    (2, 106): ("The country's growth is driven by its abundant {{BLANK}}.", "human and natural resources"),
    (3, 90): (None, "link"), (4, 41): (None, "Domestic"), (4, 62): (None, "impose"), (4, 79): (None, "occupied with"),
    (4, 125): (None, "under stress"), (5, 18): (None, "enable"), (6, 19): (None, "attach"), (6, 20): (None, "attached"),
    (8, 100): (None, "practice"), (10, 64): (None, "are at odds"), (10, 84): (None, "undertook"),
}
out, report = {}, {"derived": 0, "fallback": [], "mcq_bad": [], "key_mismatch": []}
for f in sorted(glob.glob(os.path.join(HDIR, "AWL_Sublist_*_Handout.docx"))):
    s_no = int(re.search(r"Sublist_(\d+)_", f).group(1))
    d = Document(f)
    rows = [[c.text.strip() for c in r.cells] for r in d.tables[0].rows[1:]]
    key = {}
    for r in d.tables[1].rows:
        for c in r.cells:
            m = re.match(r"(\d+)\.\s*([A-D])\s+(.*)", c.text.strip(), re.S)
            if m:
                key[int(m.group(1))] = ("ABCD".index(m.group(2)), m.group(3).strip())
    # MCQ paragraphs
    paras = [p.text for p in d.paragraphs if p.text.strip()]
    qs, cur = {}, None
    for p in paras:
        m = re.match(r"\s*(\d+)\.\t(.+)", p, re.S)
        if m and "____" in p:
            cur = int(m.group(1)); qs[cur] = {"q": m.group(2).strip(), "opts": []}
        elif cur and re.search(r"\([A-D]\)", p) and len(qs[cur]["opts"]) < 4:
            qs[cur]["opts"] += [o.strip() for o in re.findall(r"\([A-D]\)\s*(.*?)(?=\s*\([A-D]\)|$)", p.strip(), re.S)]
    entries = []
    for r in rows:
        no, raw, pos, en, zh, sent, cn = r[:7]
        word = clean_word(raw)
        one = re.sub(r"_{3,}(?:\s*_{3,})*", "{{BLANK}}", sent)
        if (s_no, int(no)) in MANUAL:
            m_sent, ans = MANUAL[(s_no, int(no))]
            one = m_sent or one
            flag = ""
        else:
            ans, flag = fit_answer(word, one)
            if one.count("{{BLANK}}") != 1:
                flag = "blanks"
        if flag or ans != word:
            report["fallback"].append((s_no, int(no), flag, raw, ans, one.replace("{{BLANK}}", "[" + ans + "]")))
        sent = one
        q = qs.get(int(no))
        k = key.get(int(no))
        if not q or len(q["opts"]) != 4 or not k:
            report["mcq_bad"].append((s_no, no, raw)); q = None
        entries.append({"no": int(no), "raw": raw, "word": word, "answer": ans, "pos": POS.get(pos.lower(), pos), "en_def": en, "cn_def": zh,
                        "sentence": sent, "cn": cn, "mcq": q, "key": k})
    n_parts = max(1, round(len(entries) / PART))
    size = -(-len(entries) // n_parts)
    zone = {}
    for p in range(n_parts):
        chunk = entries[p * size:(p + 1) * size]
        if not chunk:
            continue
        rng = random.Random(s_no * 100 + p)
        vocab, mcqs, lookup = [], [], {}
        for i, e in enumerate(chunk):
            v = {"word": e["word"], "pos": e["pos"], "cn_def": e["cn_def"], "en_def": e["en_def"], "sentence": e["sentence"], "cn": e["cn"]}
            if e["answer"] != e["word"]:
                v["answer"] = e["answer"]; v["quizWord"] = e["answer"]
            vocab.append(v)
            entry = {"pos": e["pos"], "en_def": e["en_def"], "cn_def": e["cn_def"]}
            for k_ in {e["word"].lower(), e["answer"].lower()}:
                if k_ in lookup:
                    lookup[k_]["combined"].append(entry)
                else:
                    lookup[k_] = {**entry, "combined": [entry]}
            if e["mcq"]:
                opts, a = list(e["mcq"]["opts"]), e["key"][0]
                prev = mcqs[-1]["answer"] if mcqs else -1
                counts = [sum(1 for x in mcqs if x["answer"] == k_) for k_ in range(4)]
                seat = min((k_ for k_ in range(4) if k_ != prev), key=lambda k_: (counts[k_], rng.random()))
                opts[a], opts[seat] = opts[seat], opts[a]
                mcqs.append({"q": re.sub(r"_{3,}(?:\s*_{3,})*", "______", e["mcq"]["q"]), "options": opts, "answer": seat, "vocabIndex": i})
        first, last = chunk[0]["word"], chunk[-1]["word"]
        theme = f"{first} – {last}"
        zone[str(p + 1)] = {"generated": True, "theme": theme,
                            "QUIZ_CONFIG": {"groupName": f"AWL Sublist {s_no} Part {p + 1} - {theme}", "gasEndpoint": GAS},
                            "VOCAB": vocab, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
    out[str(s_no)] = zone
    print("Sublist", s_no, len(entries), "entries ->", len(zone), "parts of", [len(z["VOCAB"]) for z in zone.values()])
json.dump(out, open(OUTF, "w", encoding="utf8"), ensure_ascii=False)
print("entries whose answer differs from the grid word or needs a look:", len(report["fallback"]), "| MCQ problems:", len(report["mcq_bad"]))
for x in report["fallback"]:
    print(" ", x[0], x[1], x[2], "|", x[3], "=>", x[5])
