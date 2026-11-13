#!/usr/bin/env python3
"""Convert the LiveABC Level 3-5 unit quiz data (DEFS + QUESTION_POOL, from liveabc_extract.js) into site group data.
Usage: liveabc_convert.py <lab35_raw.json> <out lab35.json>"""
import json, random, re, sys
R = json.load(open(sys.argv[1], encoding="utf8"))
BE = {"is", "are", "was", "were", "be", "been", "being", "am"}
MODAL = {"will", "would", "should", "can", "could", "may", "might", "must", "to", "shall", "not"}
PLACEHOLDER = {"sth", "sb", "somebody", "something", "someone", "n", "v", "ving", "v-ing", "one's", "oneself", "...", "…"}
norm = lambda t: re.sub(r"\s+", " ", str(t).replace("’", "'")).strip()
BLANKS = re.compile(r"_{3,}(?:\s+_{3,})*")
# Sentences whose blanks are split and whose example sentence is worded differently: the text that fills the joined blank.
MANUAL = {("basic", 1, "be exposed to"): "are constantly exposed to", ("basic", 3, "have something in one's possession"): "has it in his possession",
          ("basic", 3, "invest in"): "invest your savings wisely in", ("basic", 4, "take in"): "take it all in"}


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


out, notes = {}, {"dropped": [], "seq": 0, "inflected": 0, "plain": 0, "joined": 0}
for lv, units in R.items():
    out[lv] = {}
    for u in sorted(units, key=int):
        d = units[u]
        entries, seen = [], set()
        for q in d["POOL"]:
            key, sent, cn = q[0], norm(q[1]), norm(q[2])
            info = d["DEFS"].get(key) or {}
            base = re.sub(r"__\d+$", "", key)
            fm = re.search(r"\(([^)]*,[^)]*)\)", base)                      # "withdraw (withdraw, withdrew, withdrawn)"
            forms = fm.group(1).replace(", ", " / ") if fm else ""
            word = norm(re.sub(r"\([^)]*,[^)]*\)", "", base))
            kw = [w for w in re.split(r"\s+", re.sub(r"\.{2,}|…|\(.*?\)", " ", word)) if w]
            parts = BLANKS.split(sent)
            ex = norm(info.get("ex", ""))
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
            if (word.lower(), one) in seen:
                continue
            seen.add((word.lower(), one))
            e = {"word": word, "pos": re.sub(r"[()]", "", info.get("pos", "")).strip() or info.get("cat", ""), "cat": info.get("cat", ""),
                 "cn_def": norm(info.get("cn", "")), "en_def": norm(info.get("en", "")), "sentence": one, "cn": cn}
            if forms:
                e["forms"] = forms
            if ans != word:
                e["answer"] = ans
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
        out[lv][u] = {"generated": True, "theme": theme, "QUIZ_CONFIG": {"groupName": f"LiveABC 3-5 {lv.title()} U{u} - {theme}", "gasEndpoint": ""},
                      "VOCAB": entries, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
    print(lv, "units", len(out[lv]), "entries", sum(len(g["VOCAB"]) for g in out[lv].values()), [len(g["VOCAB"]) for g in out[lv].values()])
json.dump(out, open(sys.argv[2], "w", encoding="utf8"), ensure_ascii=False)
print({k: v for k, v in notes.items() if k != "dropped"}, "dropped:", notes["dropped"])
