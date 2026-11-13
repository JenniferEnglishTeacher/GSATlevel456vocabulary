#!/usr/bin/env python3
"""Convert the 高中 Level 3 (2001-3000字) Vocabulary Learning Guide worksheets into site group data.
Usage: l3_convert.py <l3_raw.json from l3_dump.py> <out l3.json> [--review]"""
import json, random, re, sys
R = json.load(open(sys.argv[1], encoding="utf8"))
REVIEW = "--review" in sys.argv
try:
    from l3_manual import MANUAL          # (unit-part, row, sentence no) -> text that fills the blank, checked by hand
except ImportError:
    MANUAL = {}
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
norm = lambda t: re.sub(r"\s+", " ", str(t).replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')).strip()
PLACEHOLDER = {"sth", "sb", "sth.", "sb.", "somebody", "something", "someone", "one's", "oneself", "sb's", "sb.'s", "...", "…", "doing", "do"}
BE = {"is", "are", "was", "were", "be", "been", "being", "am", "'s", "'re", "'m"}
BASE_AFTER = {"to", "will", "would", "should", "can", "could", "may", "might", "must", "shall", "not", "n't", "do", "does", "did", "please",
              "let", "cannot", "'ll", "'d", "can't", "won't", "don't", "doesn't", "didn't", "couldn't", "wouldn't", "shouldn't", "never"}
HAVE = {"have", "has", "had", "having", "'ve"}
ADVS = {"often", "always", "also", "still", "now", "usually", "sometimes", "just", "even", "ever", "only", "then", "soon", "already", "both", "all", "really"}
SING_DET = {"a", "an", "this", "that", "each", "every", "one", "another", "any"}
PLQ = {"many", "several", "few", "these", "those", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "twelve", "hundred",
       "thousand", "numerous", "various", "both", "all", "some", "other", "most", "more", "multiple", "countless", "dozens", "different", "such", "hundreds", "thousands", "millions"}
DET = SING_DET | {"the", "my", "his", "her", "its", "our", "your", "their", "no", "whose", "of", "in", "at", "by", "on", "with", "for", "to"}
SUBJ = {"he", "she", "it", "they", "we", "i", "you", "who", "that", "which"}
TOK = re.compile(r"[A-Za-z]+(?:'[a-z]+)?|n't")
BLANK1 = r"_{3,}"
RUN = re.compile(BLANK1 + r"(?:[\s-]+" + BLANK1 + r")*")
DOUBLE = {"commit", "ban", "admit", "permit", "plan", "stop", "drag", "drop", "refer", "prefer", "occur", "regret", "submit", "equip", "whip",
          "slip", "trap", "grab", "rob", "spot", "chat", "ship", "clap", "omit", "control", "nod", "beg", "stir", "skip", "dip", "hug", "wrap",
          "rub", "tap", "trip", "shop", "step", "pat", "jog", "knit", "pin", "sip", "snap", "strip", "tip", "tug", "wag", "zip", "scan", "span"}


def past(w, forms=None):
    if forms and len(forms) >= 2:
        return forms[-1]
    lw = w.lower()
    if lw in DOUBLE:
        return w + w[-1] + "ed"
    if lw.endswith("e"):
        return w + "d"
    if re.search(r"[^aeiou]y$", lw):
        return w[:-1] + "ied"
    return w + "ed"


def attach(w, suffix, forms=None):
    lw = w.lower()
    if suffix in ("ed", "d", "ped", "ied"):
        return past(w)
    if suffix == "ing":
        if lw in DOUBLE:
            return w + w[-1] + "ing"
        return (w[:-1] if lw.endswith("e") and not lw.endswith("ee") else w) + "ing"
    if re.search(r"[^aeiou]y$", lw):
        return w[:-1] + "ies"
    if re.search(r"(s|x|ch|sh)$", lw):
        return w + "es"
    return w + "s"


def parse_word(cell, en):
    c = norm(cell.replace("*", ""))
    forms = ""
    m = re.search(r"\(([^)]*)\)", c)
    alt = ""
    if m:
        inner = norm(m.group(1))
        if "," in inner or "/" in inner:
            forms = inner
        else:
            alt = inner
        c = norm(c[:m.start()] + c[m.end():])
    en = re.sub(r"<br\s*/?>", " ", en).replace("*", "")
    m2 = re.search(r"\(([^()]*,[^()]*)\)\s*$", en.strip())
    if m2 and not forms:
        forms = norm(m2.group(1)); en = en[:m2.start()]
    return c, forms, alt, norm(en)


def split_en(cell, word="", forms=""):
    c = re.sub(r"(?m)^\s*\(\d\)\s*", "", cell.strip())
    if re.match(r"1\.\s", c):
        return [norm(x) for x in re.split(r"(?:^|\n+)\s*\d\.\s+", c) if x.strip()]
    c = re.sub(r"\b(Dr|Mr|Mrs|Ms|Prof|St|Jr|vs)\.\s", r"\1․ ", norm(c))      # keep titles from ending a sentence
    sents = [x.replace("․", ".") for x in re.findall(r'.+?(?:[.!?]["\']?(?=\s+["\']?(?:[A-Z]|_{3}))|$)', c)]
    if "___" in c:
        has = lambda x: "___" in x
        if " " not in word:     # a sentence that prints the word instead of blanking it would give the answer away
            sents = [x for x in sents if "___" in x or not any(infl(t, word) for t in TOK.findall(x))]
    else:       # printed without blanks: a sentence "has" the word when it can be found there
        has = lambda x: locate(word, forms, x)[0] is not None
    groups, cur = [], ""
    for s in sents:
        s = s.strip()
        if not s:
            continue
        if cur and has(cur) and has(s):
            groups.append(cur); cur = s
        else:
            cur = (cur + " " + s).strip()
    if cur:
        groups.append(cur)
    return groups


def split_cn(cell, n):
    c = re.sub(r"(?m)^\s*\(\d\)\s*", "", cell.strip())
    if re.match(r"1\.\s*", c):
        parts = [norm(x) for x in re.split(r"(?:^|\n+)\s*\d\.\s*", c) if x.strip()]
    elif n == 1:
        parts = [norm(c)]
    else:
        sents = [s for s in re.findall(r".+?(?:[。！？!?][」』”\"]?|$)", norm(c)) if s.strip()]
        parts, cur = [], ""
        for s in sents:
            if cur and "【" in cur and "【" in s:
                parts.append(cur); cur = s
            else:
                cur += s
        if cur:
            parts.append(cur)
    parts = [re.sub(r"[【】]", "", p).strip() for p in parts]
    return parts if len(parts) == n else None


def stem(w):
    w = w.lower()
    return "be" if w in BE else re.sub(r"(ies|ied|ing|ed|es|s|d|y|e)$", "", w)


def infl(t, k):
    """Is token t the word k or one of its regular inflections?"""
    t, k = t.lower(), k.lower()
    if t == k:
        return True
    if len(k) < 2:
        return False
    return t in {k + "s", k + "es", k + "ed", k + "d", k + "ing", k[:-1] + "ing", k[:-1] + "ied", k[:-1] + "ies",
                 k + k[-1] + "ed", k + k[-1] + "ing", k + "'s"}


def locate(word, forms, sent):
    """Sentences printed without a blank: find the word as it is inflected there and blank it."""
    K = [w for w in re.split(r"\s+", re.sub(r"\(.*?\)|\.{2,}|…", " ", word)) if w and w.lower() not in PLACEHOLDER]
    alts = {stem(x) for x in re.split(r"[,/\s]+", forms) if x} if forms else set()
    toks = list(re.finditer(r"[A-Za-z]+(?:'[A-Za-z]+)*", sent))
    alts = {x.lower() for x in re.split(r"[,/\s]+", forms) if x} if forms else set()
    same = lambda t, k, first: infl(t, k) or (first and t.lower() in alts)
    best = None
    for i, t in enumerate(toks):
        if not same(t.group(0), K[0], True):
            continue
        j, last, ok = i, i, True
        for k in K[1:]:
            nxt = next((x for x in range(j + 1, min(j + 4, len(toks))) if same(toks[x].group(0), k, False)), None)
            if nxt is None:
                ok = False; break
            j = last = nxt
        if ok:
            exact = sent[t.start():toks[last].end()].lower() == word.lower()
            if best is None or (exact and not best[2]):
                best = (t.start(), toks[last].end(), exact)
    if best is None:
        return None, None, "word not found"
    a, b, _ = best
    return sent[:a] + "{{BLANK}}" + sent[b:], sent[a:b], ""


def plural_hint(word, colloc, before, after):
    """A collocation that prints the plural (live up to expectations) and shares a word with the text round the blank."""
    pl = attach(word, "s").lower()
    ctx = {stem(t) for t in before[-6:] + after[:3] if len(t) > 3}
    for line in re.split(r"[\n•]+", colloc):
        toks = [t.lower() for t in TOK.findall(line)]
        if pl in toks and word.lower() not in toks and any(stem(t) in ctx for t in toks if t != pl and len(t) > 3):
            return True
    return False


def solve(word, pos, forms, sent, cn_def="", colloc=""):
    """-> (one-blank sentence, text that fills it, risk note or '')"""
    runs = list(RUN.finditer(sent))
    if not runs:
        return locate(word, forms, sent)
    toks_word = [w for w in re.split(r"[\s]+", re.sub(r"\(.*?\)|\.{2,}|…", " ", word)) if w]
    K = [w for w in toks_word if w.lower() not in PLACEHOLDER]
    fl = [norm(x) for x in re.split(r"[,/]", forms)] if forms else []
    vforms = fl if (len(fl) in (2, 3) and "more" not in forms and pos.startswith("v")) else None
    blanks = list(re.finditer(BLANK1 + r"([a-z]*)", sent))
    nt = len(blanks)
    start, end = blanks[0].start(), blanks[-1].end()
    pre, post = sent[:start], sent[end:]
    before = [t.lower() for t in TOK.findall(pre)]
    prev = next((t for t in reversed(before) if t not in ADVS and not t.endswith("ly")), "")
    nxt = (TOK.findall(post) or [""])[0].lower()
    risk = ""
    cap = (lambda a: a[:1].upper() + a[1:]) if not pre.strip() else (lambda a: a)
    if len(K) > 1 and nt < len(K):
        # part of the phrase is printed around or between the blanks ("from ______ to ______", "took a ______ to")
        k = list(K)
        for n in range(len(k) - 1, 0, -1):
            if len(before) >= n and all(infl(before[-n + i], k[i]) or (vf and before[-n + i] in vf) for i in range(n) for vf in [set(x.lower() for x in fl)]):
                k = k[n:]; break
        after = [t.lower() for t in TOK.findall(post)]
        while len(k) > nt and after and k[-1].lower() == after[0]:
            k = k[:-1]; after = after[1:]
        inner = [t.lower() for t in TOK.findall(re.sub(BLANK1, " ", sent[start:end]))]
        k2 = [w for w in k]
        for t in inner:
            if t in [w.lower() for w in k2] and len(k2) > nt:
                k2.remove(next(w for w in k2 if w.lower() == t))
        K = k2 if len(k2) == nt else K
    if len(K) == 1 and nt >= 1 and len(runs) == 1 and nt == 1:
        w, suf = K[0], blanks[0].group(1)
        if suf:
            ans = attach(w, suf, vforms)
        elif pos.startswith("v"):
            if prev in BASE_AFTER or (not before):
                ans = w
            elif prev in HAVE:
                ans = past(w, vforms)
            else:
                ans = w; risk = "verb form?"
        elif pos.startswith("n"):
            ans = w
            near = before[-4:]
            if "/" in pos and "v" in pos and (prev in BASE_AFTER or prev in HAVE or prev in BE or prev in SUBJ):
                risk = "n/v form?" if prev not in BASE_AFTER else ""
            elif (not any(t in SING_DET for t in near[-3:]) and len(nxt) != 1
                  and plural_hint(w, colloc, before, [t.lower() for t in TOK.findall(post)])):
                ans = attach(w, "s")
            elif nxt in {"are", "were", "have"} or any(t in PLQ for t in near):
                risk = "noun number?"
            elif not any(t in DET or t.endswith("'s") for t in near) and "不可數" not in cn_def:
                risk = "noun number?"
        else:
            ans = w
            if "/" in pos and "v" in pos:
                risk = "form?"
        return sent[:start] + "{{BLANK}}" + sent[end:], cap(ans), risk
    if nt == len(K) and nt > 1:
        built, k, pos_i = [], 0, start
        for b in blanks:
            built.append(sent[pos_i:b.start()])
            w = K[k]; k += 1
            if b.group(1):
                w = attach(w, b.group(1))
            built.append(w); pos_i = b.end()
        ans = norm("".join(built))
        if pos.startswith("v") and not (prev in BASE_AFTER or not before):
            risk = "verb form?"
        if K[0].lower() == "be":
            risk = "be form?"
        return sent[:start] + "{{BLANK}}" + sent[end:], cap(ans), risk
    return sent[:start] + "{{BLANK}}" + sent[end:], " ".join(K), f"blanks {nt} vs words {len(K)}"


out, review, stats = {}, [], {"entries": 0, "risky": 0, "second": 0, "cn_fallback": 0, "mcq_bad": []}
for key in sorted(R, key=lambda k: tuple(map(int, k.split("-")))):
    P, T, KT = R[key]["paras"], R[key]["tables"][0], R[key]["tables"][1]
    vocab, lookup = [], {}
    for ri, r in enumerate(T[1:]):
        word, forms, alt, en = parse_word(r[0], r[2].strip())
        pos = norm(re.sub(r"[()]", "", r[1])).replace(" / ", "/").replace(", ", " ")
        cn_def = norm(r[3])
        ens = split_en(r[5], word, forms)
        cns = split_cn(r[6], len(ens))
        if cns is None:
            stats["cn_fallback"] += 1
            cns = [norm(re.sub(r"[【】]", "", r[6]))] * len(ens)
        cands = []
        for si, (s, c) in enumerate(zip(ens, cns)):
            one, ans, risk = solve(word, pos, forms, s, cn_def, r[4])
            if one and " " not in word and any(infl(t, word) for t in TOK.findall(one.replace("{{BLANK}}", " "))):
                risk = "blank is another word?"
            if (key, ri, si) in MANUAL:
                ans, risk = MANUAL[(key, ri, si)], ""
            cands.append((risk != "", si, one, ans, c, risk))
        cands.sort(key=lambda x: (x[0], x[1]))
        risky, si, one, ans, c, risk = cands[0]
        stats["entries"] += 1
        if si:
            stats["second"] += 1
        if risky:
            stats["risky"] += 1
            for x in cands:
                review.append((key, ri, x[1], word, pos, forms, x[5], (x[2] or "").replace("{{BLANK}}", "[" + str(x[3]) + "]")))
        if not one:
            stats.setdefault("dropped", []).append((key, word)); continue
        e = {"word": word, "pos": pos, "cn_def": cn_def, "en_def": en, "sentence": one, "cn": c}
        if forms:
            e["forms"] = forms.replace(", ", " / ")
        if ans != word:
            e["answer"] = ans; e["quizWord"] = ans
        vocab.append(e)
        entry = {"pos": pos, "en_def": en, "cn_def": cn_def}
        for k_ in {word.lower(), ans.lower()}:
            if k_ in lookup:
                lookup[k_]["combined"].append(entry)
            else:
                lookup[k_] = {**entry, "combined": [entry]}
    # ---- MCQs: question paragraph followed by an options paragraph; answers from the key table
    ans_key = {}
    for row in KT:
        for cell in row:
            m = re.match(r"\s*(\d+)\.\s*\(?([A-D])\)?", cell)
            if m:
                ans_key[int(m.group(1))] = "ABCD".index(m.group(2))
    qs = {}
    for i, p in enumerate(P[:-1]):
        m = re.match(r"\s*(\d+)\.\s+(.*_{3,}.*)$", p, re.S)
        if m and re.search(r"\(A\)", P[i + 1]) and "(A)" not in p:
            opts = [norm(o) for o in re.findall(r"\([A-D]\)\s*(.*?)(?=\s*\([A-D]\)|$)", P[i + 1].strip(), re.S)]
            qs[int(m.group(1))] = (norm(m.group(2)), opts)
    cn_of = {}
    text = "\n".join(P)
    for m in re.finditer(r"(?:第\s*(\d+)\s*題|(?:^|\n)\s*(\d+)\.\s*(?:【答案】|正確答案|答案))(.*?)(?=第\s*\d+\s*題\s*[：:正]|\n\s*\d+\.\s*(?:【答案】|正確答案|答案)|\Z)", text, re.S):
        n = int(m.group(1) or m.group(2))
        t = re.search(r"(?:題幹[^：:\n】]*[】：:]+|【中譯】[：:]?|【題幹翻譯】[：:]?|【中文翻譯】[：:]?)\s*(.+)", m.group(3))
        if t:
            cn_of[n] = norm(re.sub(r"[【】]", "", t.group(1)))
    mcqs, rng = [], random.Random(3000 + int(key.split("-")[0]) * 10 + int(key.split("-")[1]))
    for n in sorted(qs):
        q, opts = qs[n]
        if len(opts) != 4 or n not in ans_key:
            stats["mcq_bad"].append((key, n, "parse")); continue
        a = ans_key[n]
        target = opts[a].lower()
        vi = next((j for j, v in enumerate(vocab) if v["word"].lower() == target), None)
        if vi is None:      # a collocation or an inflected form: the longest grid word all of whose words appear in the answer
            tt = [stem(x) for x in TOK.findall(target)]
            best = None
            for j, v in enumerate(vocab):
                kw = [stem(x) for x in TOK.findall(v["word"]) if x.lower() not in PLACEHOLDER]
                alts = {stem(x) for x in TOK.findall(v.get("forms", ""))}
                if kw and (all(k in tt for k in kw) or (len(kw) == 1 and alts & set(tt))) and (best is None or len(v["word"]) > len(vocab[best]["word"])):
                    best = j
            vi = best
        prev = mcqs[-1]["answer"] if mcqs else -1
        counts = [sum(1 for x in mcqs if x["answer"] == k_) for k_ in range(4)]
        seat = min((k_ for k_ in range(4) if k_ != prev), key=lambda k_: (counts[k_], rng.random()))
        opts = list(opts); opts[a], opts[seat] = opts[seat], opts[a]
        item = {"q": re.sub(r"_{3,}(?:\s+_{3,})*", "______", q), "options": opts, "answer": seat, "cn": cn_of.get(n, "")}
        if not item["cn"]:
            stats["mcq_bad"].append((key, n, "no cn"))
        if vi is not None:
            item["vocabIndex"] = vi
        mcqs.append(item)
    u, p = key.split("-")
    if not vocab:
        print("EMPTY", key); continue
    theme = f"{vocab[0]['word']} – {vocab[-1]['word']}"
    out.setdefault(u, {})[p] = {"generated": True, "theme": theme,
                                "QUIZ_CONFIG": {"groupName": f"高中Level 3 (2001-3000字) Unit {u}-{p} - {theme}", "gasEndpoint": GAS},
                                "VOCAB": vocab, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
json.dump(out, open(sys.argv[2], "w", encoding="utf8"), ensure_ascii=False)
print({k: v for k, v in stats.items() if k != "mcq_bad"}, "mcq problems:", len(stats["mcq_bad"]), stats["mcq_bad"][:30])
print("mcqs per part:", sorted({(len(g["MCQS"])) for z in out.values() for g in z.values()}), "no vocabIndex:", sum(1 for z in out.values() for g in z.values() for q in g["MCQS"] if "vocabIndex" not in q))
if REVIEW:
    json.dump(review, open("/home/claude/l3_review.json", "w", encoding="utf8"), ensure_ascii=False, indent=0)
    print("review rows:", len(review))
