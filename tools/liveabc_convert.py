#!/usr/bin/env python3
"""Convert the LiveABC Level 3-5 unit quiz data (DEFS + QUESTION_POOL, from liveabc_extract.js) into site group data.
Usage: liveabc_convert.py <lab35_raw.json> <out lab35.json>"""
import json, random, re, sys
R = json.load(open(sys.argv[1], encoding="utf8"))
BE = {"is", "are", "was", "were", "be", "been", "being", "am"}
MODAL = {"will", "would", "should", "can", "could", "may", "might", "must", "to", "shall", "not"}
PLACEHOLDER = {"sth", "sb", "somebody", "something", "someone", "n", "v", "ving", "v-ing", "one's", "oneself", "...", "…", "a...", "a…"}
norm = lambda t: re.sub(r"\s+", " ", str(t).replace("’", "'")).strip()
BLANKS = re.compile(r"_{3,}(?:\s+_{3,})*")
# Sentences whose blanks are split and whose example sentence is worded differently: the text that fills the joined blank.
MANUAL = {("basic", 1, "be exposed to"): "are constantly exposed to", ("basic", 3, "have something in one's possession"): "has it in his possession",
          ("basic", 3, "invest in"): "invest your savings wisely in", ("basic", 4, "take in"): "take it all in"}


try:
    BOOK = next((a[7:] for a in sys.argv if a.startswith("--book=")), "3-5")      # "3-5" or "2-4"
    _m = __import__("liveabc_manual" if BOOK == "3-5" else "liveabc" + BOOK.replace("-", "") + "_manual")
    ANSWERS, SENTENCES, CN = _m.ANSWERS, _m.SENTENCES, _m.CN     # hand-checked answers, rewritten sentences, missing translations
except ImportError:
    ANSWERS, SENTENCES, CN = {}, {}, {}
try:
    EXTRA_DEFS = __import__("liveabc" + BOOK.replace("-", "") + "_defs").DEFS if BOOK != "3-5" else {}      # definitions written for this site
except ImportError:
    EXTRA_DEFS = {}
REVIEW = "--review" in sys.argv
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
FILL = set("completely totally entirely highly deeply perfectly absolutely fully heavily thoroughly strictly securely safely successfully quickly "
           "correctly rapidly purely strongly simply exactly incredibly extremely truly intensely actively effectively efficiently carefully firmly "
           "drastically softly quietly easily directly beautifully clearly freely rigorously diligently happily comfortably shockingly automatically "
           "naturally significantly officially cleanly smoothly properly precisely explicitly nicely neatly gently tightly accurately smartly".split())
WORDS = re.compile(r"[A-Za-z]+(?:'[a-z]+)?")
VOWEL_SOUND = re.compile(r"^(?:[aeiou](?!ni[^n]|se|su|ne\b|nce)|hour|honest|heir)", re.I)


def declutter(sent):
    """Some source sentences are stuffed with strings of filler adverbs (completely totally entirely ...): take them out."""
    toks = re.split(r"(\s+)", sent)
    idx = [i for i, t in enumerate(toks) if t.strip()]
    low = [re.sub(r"[^a-z]", "", toks[i].lower()) for i in idx]
    isf = [w in FILL and "_" not in toks[i] for w, i in zip(low, idx)]
    n = sum(isf)
    runs = [k for k in range(len(idx) - 1) if isf[k] and isf[k + 1]]
    if not runs and n < 5:
        return sent
    heavy = n >= 5
    drop = set()
    k = 0
    while k < len(idx):
        if isf[k]:
            j = k
            while j + 1 < len(idx) and isf[j + 1]:
                j += 1
            if j > k:       # a run of fillers: keep only the one next to the word it describes
                drop.update(range(k, j + 1 if heavy and not (j == k + 1 and low[k] == low[j]) else j))
            elif heavy:
                drop.add(k)
            k = j + 1
        else:
            k += 1
    for k in drop:
        t = toks[idx[k]]
        tail = re.search(r"[,.;:!?)]+$", t)
        toks[idx[k]] = tail.group(0) if tail and tail.group(0) not in (",",) else ""
    out = re.sub(r"\s+([,.;:!?])", r"\1", re.sub(r"\s+", " ", "".join(toks))).strip()
    out = re.sub(r"\b([A-Za-z]{4,}) \1\b", r"\1", out)          # "violently violently", "wooden wooden"
    out = re.sub(r"\b([Aa])n?\s+(?=([A-Za-z]+))", lambda m: (m.group(1) + ("n " if VOWEL_SOUND.match(m.group(2)) else " ")), out)
    return out[:1].upper() + out[1:]


def stem(w):
    w = w.lower()
    return "be" if w in BE else re.sub(r"(ies|ied|ing|ed|es|s|d|y|e)$", "", w)[:6]


DOUBLE = {"commit", "ban", "admit", "permit", "plan", "stop", "drag", "drop", "refer", "prefer", "occur", "regret", "submit", "equip",
          "slip", "trap", "grab", "rob", "spot", "chat", "ship", "clap", "omit", "control", "compel", "expel", "transfer", "nod", "beg", "stir"}
IRREG = {"take": "took", "make": "made", "give": "gave", "come": "came", "go": "went", "bring": "brought", "awake": "awoke", "spy": "spied"}
ADV = {"often", "always", "never", "also", "still", "now", "currently", "usually", "sometimes", "just", "very", "so", "more", "most", "both", "all"}
PLURALS = {"they", "we", "you", "people", "children", "students", "teeth", "feet", "men", "women", "police", "these", "those"}


def past(w):
    """Join a verb to the "ed" the sentence prints after its blank."""
    lw = w.lower()
    if lw in IRREG:
        return IRREG[lw]
    if lw in DOUBLE:
        return w + w[-1] + "ed"
    if lw.endswith("e"):
        return w + "d"
    if re.search(r"[^aeiou]y$", lw):
        return w[:-1] + "ied"
    return w + "ed"


SUFFIX = re.compile(r"(ed|d|ies|es|s|ing)\b")


def attach(w, suffix):
    """Join a word to the ending the sentence prints straight after its blank (______s, ______ed, ______ing)."""
    lw = w.lower()
    if suffix in ("ed", "d"):
        return past(w)
    if suffix == "ing":
        if lw in DOUBLE:
            return w + w[-1] + "ing"
        return (w[:-1] if lw.endswith("e") and not lw.endswith("ee") else w) + "ing"
    if re.search(r"[^aeiou]y$", lw) or suffix == "ies":
        return w[:-1] + "ies"
    if re.search(r"(s|x|ch|sh)$", lw):
        return w + "es"
    return w + "s"


def surface_from(example, key_words):
    """The key phrase as it is inflected in the example sentence ('vanish into thin air' -> 'vanished into thin air')."""
    toks = re.findall(r"[A-Za-z'-]+", example)
    n = len(key_words)
    for i in range(len(toks) - n + 1):
        if all(stem(toks[i + j]) == stem(key_words[j]) for j in range(n)):
            m = re.search(r"\b" + r"\W+".join(re.escape(t) for t in toks[i:i + n]) + r"\b", example)
            return m.group(0) if m else " ".join(toks[i:i + n])
    return None


IRR = {"take": ("took", "taken"), "make": ("made", "made"), "give": ("gave", "given"), "come": ("came", "come"), "go": ("went", "gone"),
       "bring": ("brought", "brought"), "get": ("got", "gotten"), "have": ("had", "had"), "do": ("did", "done"), "see": ("saw", "seen"),
       "run": ("ran", "run"), "keep": ("kept", "kept"), "hold": ("held", "held"), "put": ("put", "put"), "set": ("set", "set"),
       "cut": ("cut", "cut"), "let": ("let", "let"), "lose": ("lost", "lost"), "find": ("found", "found"), "break": ("broke", "broken"),
       "fall": ("fell", "fallen"), "draw": ("drew", "drawn"), "lead": ("led", "led"), "spread": ("spread", "spread"), "stand": ("stood", "stood"),
       "pay": ("paid", "paid"), "lay": ("laid", "laid"), "rise": ("rose", "risen"), "catch": ("caught", "caught"), "throw": ("threw", "thrown"),
       "shed": ("shed", "shed"), "seek": ("sought", "sought"), "build": ("built", "built"), "leave": ("left", "left"), "feel": ("felt", "felt"),
       "undergo": ("underwent", "undergone"), "overcome": ("overcame", "overcome"), "withdraw": ("withdrew", "withdrawn"), "win": ("won", "won"),
       "bear": ("bore", "borne"), "strike": ("struck", "struck"), "split": ("split", "split"), "quit": ("quit", "quit"), "hit": ("hit", "hit"),
       "send": ("sent", "sent"), "spend": ("spent", "spent"), "sell": ("sold", "sold"), "tell": ("told", "told"), "think": ("thought", "thought"),
       "meet": ("met", "met"), "begin": ("began", "begun"), "write": ("wrote", "written"), "speak": ("spoke", "spoken"), "choose": ("chose", "chosen"),
       "fly": ("flew", "flown"), "grow": ("grew", "grown"), "know": ("knew", "known"), "shake": ("shook", "shaken"), "wear": ("wore", "worn"),
       "hide": ("hid", "hidden"), "ride": ("rode", "ridden"), "drive": ("drove", "driven"), "eat": ("ate", "eaten"), "stick": ("stuck", "stuck"),
       "burst": ("burst", "burst"), "cast": ("cast", "cast"), "shut": ("shut", "shut"), "forbid": ("forbade", "forbidden"), "arise": ("arose", "arisen"),
       "deal": ("dealt", "dealt"), "mean": ("meant", "meant"), "bind": ("bound", "bound"), "wind": ("wound", "wound"), "sink": ("sank", "sunk"),
       "swear": ("swore", "sworn"), "tear": ("tore", "torn"), "freeze": ("froze", "frozen"), "steal": ("stole", "stolen"), "fight": ("fought", "fought"),
       "teach": ("taught", "taught"), "sit": ("sat", "sat"), "lie": ("lay", "lain"), "hang": ("hung", "hung"), "feed": ("fed", "fed"),
       "forgive": ("forgave", "forgiven"), "foresee": ("foresaw", "foreseen"), "outdo": ("outdid", "outdone"), "undo": ("undid", "undone"),
       "upset": ("upset", "upset"), "broadcast": ("broadcast", "broadcast"), "mistake": ("mistook", "mistaken"), "sweep": ("swept", "swept")}
DOUBLE |= {"wrap", "strip", "tap", "rub", "scan", "plug", "hug", "dip", "tip", "jog", "pin", "shop", "step", "skip", "snap", "trim", "swap", "propel", "rebel", "deter", "infer", "confer", "incur", "recur", "outfit", "program", "patrol", "excel", "label", "travel", "cancel", "model"} - {"label", "travel", "cancel", "model"}
PREP_ING = {"of", "for", "by", "in", "on", "after", "before", "without", "from", "at", "about", "stop", "stopped", "enjoy", "enjoys", "enjoyed", "keep", "kept",
            "avoid", "finish", "finished", "consider", "while", "when", "started", "began", "spent", "like", "love", "loves", "despite", "upon", "than", "into"}
PAST_CUE = {"yesterday", "ago", "last", "was", "were", "had", "did", "went", "came", "saw", "took", "made", "got", "became", "felt", "found", "gave",
            "told", "said", "left", "lost", "won", "ran", "began", "broke", "fell", "knew", "thought", "brought", "could", "didn't", "wasn't", "weren't", "once"}
PRES_CUE = {"is", "are", "has", "have", "does", "do", "can", "will", "every", "always", "usually", "often", "now", "today", "currently", "must", "should", "may"}
SUBJ_PL = PLURALS | {"i", "who", "that", "which", "and"}


def conj(w, form):
    lw = w.lower()
    if form == "past":
        return IRR[lw][0] if lw in IRR else past(w)
    if form == "pp":
        return IRR[lw][1] if lw in IRR else past(w)
    if form == "ing":
        return attach(w, "ing")
    if form == "s":
        return "has" if lw == "have" else ("does" if lw == "do" else ("goes" if lw == "go" else attach(w, "s")))
    return w


def verb_form(sent_one):
    """Guess the form a verb needs where the blank stands: base, s, past, pp or ing; second value = sure?"""
    pre, _, post = sent_one.partition("{{BLANK}}")
    before = [t.lower() for t in re.findall(r"[A-Za-z]+(?:'[a-z]+)?|n't", pre.replace("n't", " n't"))]
    after = [t.lower() for t in WORDS.findall(post)]
    soft = ADV | {"only", "just", "really", "truly", "simply", "even", "ever", "finally", "then", "soon", "already", "actually", "blindly"}
    core = [t for t in before if t not in soft and not (t.endswith("ly") and t not in {"family", "only", "early", "elderly"})]
    prev = core[-1] if core else ""
    aux = MODAL | {"do", "does", "did", "n't", "cannot", "please", "let", "let's", "'ll", "'d", "i'll", "you'll", "we'll", "they'll", "he'll", "she'll", "it'll"}
    if not core or prev in aux or prev.endswith(("'ll", "n't")):
        return "base", True
    if any(t in {"help", "helps", "helped", "let", "lets", "make", "makes", "made"} for t in core[-3:]):
        return "base", False
    if prev in {"and", "or"} and any(t in aux for t in core[-9:-1]):
        return "base", False
    if prev in {"have", "has", "had", "having"}:
        return "pp", True
    if prev in BE:
        return ("pp" if (after[:1] and after[0] in {"by", "with", "in", "to", "from", "as", "for", "into", "on"}) else "ing"), False
    if prev in PREP_ING:
        return "ing", prev in {"of", "for", "by", "without", "from", "about", "stop", "avoid", "enjoy", "despite", "upon"}
    if set(before + after) & PAST_CUE:
        return "past", False
    if prev in SUBJ_PL or (prev.endswith("s") and not prev.endswith(("ss", "us", "is", "'s"))):
        return "base", False
    return "s", False


review = []
out, notes = {}, {"dropped": [], "seq": 0, "inflected": 0, "plain": 0, "joined": 0}
for lv, units in R.items():
    out[lv] = {}
    for u in sorted(units, key=int):
        d = units[u]
        entries, seen = [], set()
        for q in d["POOL"]:
            key, sent, cn = q[0], norm(q[1]), norm(q[2]).replace("**", "").replace("，編因為", "，因為")
            sent = norm(re.sub(r"\(Self-correction.*$", "", sent))
            sent = re.sub(r"\s*[)”\"]+$", "", sent) if sent.count("(") < sent.count(")") else sent
            sent = sent.replace("。", ".")
            cleaned = declutter(sent)
            if cleaned != sent:      # the Chinese carries the same padding
                cn = re.sub(r"(?:完全|高度|極其|極度|絕對|徹底|深深|重度)地?(?=[^，。、])", "", cn)
            sent = re.sub(r"\b([A-Za-z]{4,}) \1\b", r"\1", re.sub(r"\s+([,.;:!?])", r"\1", cleaned))
            cn = cn or CN.get((lv, int(u), key), "")
            mkey = (lv, int(u), key) if (lv, int(u), key) in SENTENCES or (lv, int(u), key) in ANSWERS else (lv, int(u), len(entries))
            sent = re.sub(r"(_{3,})(?!(?:s|es|ies|ed|d|ing)\b)(?=[A-Za-z])", r"\1 ", sent) if BOOK != "3-5" else sent      # "__________children"
            if BOOK != "3-5":       # "__________ ed", "__________ s": the ending belongs to the blank
                sent = re.sub(r"(_{3,}) (?:p(?=ed\b))?(ed|d|s|es|ing)\b", r"\1\2", sent)
            if mkey in SENTENCES:
                if SENTENCES[mkey] is None:
                    continue
                sent, cn = SENTENCES[mkey]
            info = d["DEFS"].get(key) or {}
            base = re.sub(r"__\d+$", "", key)
            if BOOK != "3-5" and info.get("word"):        # LiveABC 2-4 keys: credit_card, tame_2 (the word is in DEFS)
                base = norm(info["word"]).replace("…", "...")
                base = re.sub(r"\s*\((?:n|v|adj|adv)\)$", "", base)
                base = re.sub(r"\s*\((?:n|v|adj|adv)\.?\)", "", base)
                if "Industrial Revolution" not in base:      # stray capitals: "gain Weight", "A Blessing in Disguise"
                    base = re.sub(r"\b[A-Z][a-z]+\b", lambda m: m.group(0).lower(), base)
                base = re.sub(r"\s*=\s*", " / ", base)
                vf2 = re.fullmatch(r"([a-z]+)\s*[-–]\s*([a-z]+)\s*[-–]\s*([a-z]+)", base)
                if vf2:                                   # "lie - lay-lain", "sting–stung–stung"
                    base = f"{vf2.group(1)} ({vf2.group(1)}, {vf2.group(2)}, {vf2.group(3)})"
            fm = re.search(r"\(([^)]*,[^)]*)\)", base)                      # "withdraw (withdraw, withdrew, withdrawn)"
            forms = fm.group(1).replace(", ", " / ") if fm else ""
            word = norm(re.sub(r"\([^)]*,[^)]*\)", "", base))
            vf = re.fullmatch(r"([a-z]+)(?:\s{2,}|,\s*|-)([a-z]+)(?:\s{2,}|,\s*|-)([a-z]+)", base.strip())
            if vf and vf.group(1)[:2] == vf.group(2)[:2] and not forms:          # "emit  emitted  emitted", "bear-bore-born"
                word, forms = vf.group(1), " / ".join(vf.groups())
            elif "  " in base.strip():                                             # "electric drill  power drill": two ways to say it
                word = " / ".join(dict.fromkeys(norm(x) for x in re.split(r"\s{2,}", base.strip()) if x.strip()))
            word = word.replace("showexpress", "show/express").replace("withto", "with/to")
            kw = [w for w in re.split(r"\s+", re.sub(r"\.{2,}|…|\(.*?\)", " ", word)) if w]
            parts = BLANKS.split(sent)
            ex = norm(info.get("ex", "")) if BOOK == "3-5" else ""     # the 2-4 examples only repeat the headword
            K = [w for w in kw if w.lower() not in PLACEHOLDER and not re.fullmatch(r"[AB]", w)]
            if len(parts) == 1:
                m = re.search(r"\b" + re.escape(word) + r"\b", sent)
                if not m:
                    notes["dropped"].append((lv, u, key)); continue
                parts = [sent[:m.start()], sent[m.end():]]
                ans = m.group(0)
            elif (lv, int(u), key) in MANUAL:
                ans = MANUAL[(lv, int(u), key)]
            else:
                ex_span = None
                if ex.startswith(parts[0]) and ex.endswith(parts[-1]) and len(ex) > len(parts[0]) + len(parts[-1]):
                    ex_span = ex[len(parts[0]):len(ex) - len(parts[-1])].strip()
                # one piece per blank token, with the printed words between runs kept in place
                pieces = re.split(r"(_{3,})", sent[len(parts[0]):len(sent) - len(parts[-1])])
                nt = sum(1 for x in pieces if re.fullmatch(r"_{3,}", x))
                before = re.findall(r"[A-Za-z']+", parts[0].lower())
                fill = list(K)
                subject = [w for w in before if w not in ADV and not w.endswith("ly")]
                if fill and fill[0].lower() in BE:
                    if nt == len(fill) - 1 or (subject and subject[-1] in BE):
                        fill = fill[1:]                                      # the sentence already prints is/are/was
                    elif subject and subject[-1] in MODAL:
                        pass
                    elif ex_span and ex_span.split(" ")[0].lower() in BE - {"be"}:
                        fill[0] = ex_span.split(" ")[0]
                    else:
                        subj = subject[-1] if subject else ""
                        plural = subj in PLURALS or (subj.endswith("s") and not subj.endswith(("ss", "us", "is")))
                        fill[0] = "are" if plural else "is"
                # "______ed": the sentence prints the ending after the blank, so the verb is joined to it
                tail_ed = SUFFIX.match(parts[-1])
                if tail_ed:
                    parts[-1] = parts[-1][tail_ed.end():]
                if nt == len(fill) and nt > 0:
                    built, k, last = [], 0, 0
                    for idx, x in enumerate(pieces):
                        if re.fullmatch(r"_{3,}", x):
                            w = fill[k]; k += 1
                            sm = SUFFIX.match(pieces[idx + 1]) if idx + 1 < len(pieces) else None
                            if sm:
                                w = attach(w, sm.group(1)); pieces[idx + 1] = pieces[idx + 1][sm.end():]
                            last = len(built)
                            built.append(w)
                        else:
                            built.append(x)
                    if tail_ed:
                        built[last] = attach(built[last], tail_ed.group(1))
                    ans = norm("".join(built))
                    notes["seq"] += 1
                elif tail_ed and fill:
                    ans = attach(fill[0], tail_ed.group(1))                                      # "ban...from" + "______ed customers from"
                elif nt == 1 and len(K) > 1 and len({stem(w) for w in K}) == 1:
                    ans = K[0]                                               # "permit permitted permitted": verb forms, one blank
                elif len(parts) == 2:
                    ans = " ".join(fill) if fill else word
                    notes["plain"] += 1
                else:
                    ans = " ".join(fill) if fill else word                  # blanks do not match the phrase: one blank for the whole phrase
                    notes["joined"] += 1
                # a real example sentence shows the inflection (roamed, poses a threat to): prefer it when it is the same words
                cand = ex_span if ex_span else (surface_from(ex, ans.split(" ")) if ex else None)
                if cand and cand != ans:
                    ct, at = cand.split(" "), ans.split(" ")
                    if len(ct) == len(at) and all(stem(x) == stem(y) for x, y in zip(ct, at)) and not (ct[0].lower() == "be" and at[0].lower() != "be") and not tail_ed:
                        # some examples carry a naive "+ed" (reviveed): spell those properly
                        ans = " ".join(past(y) if x.lower() == y.lower() + "ed" and x.lower() != past(y).lower() else x for x, y in zip(ct, at)); notes["inflected"] += 1
            one = f"{parts[0]}{{{{BLANK}}}}{parts[-1]}"
            # ---- form check: the source prints base forms even where the sentence needs an inflected one
            first = ans.split(" ")[0] if ans else ""
            is_verb = info.get("cat") == "v" or (info.get("cat") == "phr" and norm(info.get("en", "")).lower().startswith("to ") and first.lower() == (K[0].lower() if K else "") and first.lower() not in {"in", "on", "at", "by", "for", "with", "to", "of", "as", "a", "an", "the", "out", "under", "beyond"})
            guess = None
            if mkey in ANSWERS:
                ans = ANSWERS[mkey]
            elif is_verb and first and first.lower() == K[0].lower() and first.lower() not in BE:
                form, sure = verb_form(one)
                new = (conj(first, form) + ans[len(first):]) if form != "base" else ans
                if form in ("pp", "past") and fm and form:      # forms printed with the word: withdraw (withdraw, withdrew, withdrawn)
                    fl3 = [x.strip() for x in fm.group(1).split(",")]
                    if len(fl3) == 3:
                        new = fl3[1 if form == "past" else 2] + ans[len(first):]
                if not sure:
                    review.append((lv, u, key, form, one.replace("{{BLANK}}", "[" + new + "]")))
                ans = new
            elif info.get("cat") == "n" and " " not in ans and ans.lower() == word.lower():
                before = [t.lower() for t in WORDS.findall(parts[0])][-4:]
                nxt = (WORDS.findall(parts[-1]) or [""])[0].lower()
                if nxt in {"are", "were", "have"} or any(t in {"many", "several", "few", "these", "those", "two", "three", "four", "five", "six", "ten", "hundred",
                        "thousands", "hundreds", "millions", "numerous", "various", "both", "all", "some", "other", "most", "more", "multiple", "countless", "different", "such"} for t in before):
                    review.append((lv, u, key, "n?", one.replace("{{BLANK}}", "[" + ans + "]")))
            if not parts[0].strip() and ans[:1].islower():       # the blank opens the sentence
                ans = ans[:1].upper() + ans[1:]
            if (word.lower(), one) in seen:
                continue
            seen.add((word.lower(), one))
            e = {"word": word, "pos": re.sub(r"[()]", "", info.get("pos", "")).strip() or info.get("cat", ""), "cat": info.get("cat", ""),
                 "cn_def": norm(info.get("cn", "")), "en_def": "" if info.get("en", "").startswith("a vocabulary item meaning") else re.sub(r":\.$", ".", norm(info.get("en", ""))), "sentence": one, "cn": cn}
            if not e["en_def"] and lv == "basic":
                e["en_def"] = EXTRA_DEFS.get(int(u), {}).get(len(entries), "")
            if forms:
                e["forms"] = forms
            if ans != word:
                e["answer"] = ans
                e["quizWord"] = ans
            entries.append(e)
        rng = random.Random(f"{lv}{u}")
        mcqs, lookup = [], {}
        for i, e in enumerate(entries):
            ans = e.get("answer", e["word"])
            pool = [x.get("answer", x["word"]) for x in entries if x["cat"] == e["cat"] and x["word"].lower() != e["word"].lower()]
            pool = list(dict.fromkeys(p for p in pool if p.lower() != ans.lower()))
            if len(pool) < 3:
                pool += [p for p in dict.fromkeys(x.get("answer", x["word"]) for x in entries) if p.lower() != ans.lower() and p not in pool]
            opts = rng.sample(pool, 3) if len(pool) >= 3 else pool[:3]
            prev = mcqs[-1]["answer"] if mcqs else -1
            counts = [sum(1 for x in mcqs if x["answer"] == k) for k in range(4)]
            seat = min((k for k in range(4) if k != prev), key=lambda k: (counts[k], rng.random()))
            opts.insert(seat, ans)
            mcqs.append({"q": e["sentence"].replace("{{BLANK}}", "______"), "options": opts, "answer": seat, "vocabIndex": i})
            entry = {"pos": e["pos"], "en_def": e["en_def"], "cn_def": e["cn_def"]}
            for k in {e["word"].lower(), ans.lower()}:
                if k in lookup:
                    lookup[k]["combined"].append(entry)
                else:
                    lookup[k] = {**entry, "combined": [entry]}
        for e in entries:
            e.pop("cat", None)
        theme = f'{entries[0]["word"]} – {entries[-1]["word"]}'
        out[lv][u] = {"generated": True, "theme": theme, "QUIZ_CONFIG": {"groupName": f"LiveABC {BOOK} {lv.title()} U{u} - {theme}", "gasEndpoint": GAS},
                      "VOCAB": entries, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
    print(lv, "units", len(out[lv]), "entries", sum(len(g["VOCAB"]) for g in out[lv].values()), [len(g["VOCAB"]) for g in out[lv].values()])
json.dump(out, open(sys.argv[2], "w", encoding="utf8"), ensure_ascii=False)
if REVIEW:
    json.dump(review, open("/home/claude/lab_review.json", "w", encoding="utf8"), ensure_ascii=False)
    print("review rows:", len(review))
print({k: v for k, v in notes.items() if k != "dropped"}, "dropped:", notes["dropped"])
