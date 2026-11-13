"""Shared by e1200_convert.py and adv800_convert.py: hand-written English definitions (defs/*.txt) and
hand-written multiple-choice questions (mcq/*.txt).
defs file:  "#<unit>" then one "word = definition" line per word, in the unit's order.
mcq file:   "#<unit>" then one "answer | two-sentence stem with ____ | wrong 1 | wrong 2 | wrong 3" line per word, in order;
            "@ option = pos 中文" lines give a gloss for an option that is not a word of the book."""
import os, re, glob, random

HERE = os.path.dirname(os.path.abspath(__file__))


def load_defs(prefix):
    out, cur = {}, None
    for f in sorted(glob.glob(os.path.join(HERE, "defs", prefix + "*.txt"))):
        for line in open(f, encoding="utf8"):
            line = line.rstrip("\n")
            if not line.strip():
                continue
            if line.startswith("#"):
                cur = line[1:].strip(); out[cur] = []
            else:
                w, df = line.split(" = ", 1)
                out[cur].append((w, df.strip()))
    return out


def apply_defs(units, prefix):
    """units: {unit: [entries]}; fills en_def, checking every line sits on its own word."""
    D = load_defs(prefix)
    for u, V in units.items():
        rows = D.get(str(u), [])
        assert len(rows) == len(V), ("definitions", prefix, u, len(rows), len(V))
        for e, (w, df) in zip(V, rows):
            assert w == e["word"], ("definition order", prefix, u, w, e["word"])
            e["en_def"] = df


def load_mcqs(prefix):
    out, gloss, cur = {}, {}, None
    for f in sorted(glob.glob(os.path.join(HERE, "mcq", prefix + "*.txt"))):
        for line in open(f, encoding="utf8"):
            line = line.rstrip("\n")
            if not line.strip():
                continue
            if line.startswith("#"):
                cur = line[1:].strip(); out[cur] = []
            elif line.startswith("@"):
                w, g = line[1:].split(" = ", 1)
                pos, cn = g.strip().split(" ", 1)
                gloss[w.strip().lower()] = {"pos": pos, "en_def": "", "cn_def": cn}
            else:
                parts = [p.strip() for p in line.split(" | ")]
                assert len(parts) == 5, (f, line)
                out[cur].append(parts)
    return out, gloss


def seats_for(n, rng):
    seats, prev = [], -1
    while len(seats) < n:
        block = [0, 1, 2, 3]
        rng.shuffle(block)
        if block[0] == prev:
            block.append(block.pop(0))
        seats += block
        prev = seats[-1]
    return seats[:n]


def stems(o):
    o = o.lower()
    c = [o]
    for suf, rep in (("ies", "y"), ("ves", "f"), ("es", ""), ("s", ""), ("ied", "y"), ("ed", ""), ("d", ""), ("ing", ""), ("ing", "e"), ("er", ""), ("est", "")):
        if o.endswith(suf) and len(o) > len(suf) + 1:
            c.append(o[:-len(suf)] + rep)
            if suf in ("ed", "ing", "er", "est") and len(o) > len(suf) + 2 and o[-len(suf) - 1] == o[-len(suf) - 2]:
                c.append(o[:-len(suf) - 1])
    return c


def written_mcqs(V, rows, index, gloss, rng, where, ans_of):
    """rows: the unit's hand-written questions. index: {lower word or answer: entry} for the whole book."""
    assert len(rows) == len(V), ("questions", where, len(rows), len(V))
    seats = seats_for(len(V), rng)
    mcqs, lookup, missing = [], {}, []
    for i, (e, (ans, stem, *wrong)) in enumerate(zip(V, rows)):
        base = re.sub(r"\s*\(.*\)$", "", e["word"]).lower()
        ok = ans.lower() == ans_of(e).lower() or ans.lower() in (base, *[a.lower() for a in e.get("alts", [])]) or base[:3] in ans.lower() \
            or any(p.strip(" )").lower() == ans.lower() for p in re.split(r"[(,/]", e["word"]))
        assert ok, ("answer is not this word", where, e["word"], ans)
        assert len(re.findall(r"_{4}", stem)) == 1 and len({ans.lower(), *[w.lower() for w in wrong]}) == 4, (where, ans, stem)
        n = len(stem.split())
        if not 10 <= n <= 38:
            print("  length", where, ans, n)
        opts = wrong[:]
        opts.insert(seats[i], ans)
        mcqs.append({"q": stem.replace("____", "______"), "options": opts, "answer": seats[i], "cn": e["cn"], "vocabIndex": i})
        for o in opts:
            hit = next((index[s] for s in stems(o) if s in index), None)
            if o.lower() in gloss:
                lookup[o.lower()] = gloss[o.lower()]
            elif hit:
                lookup[o.lower()] = {"pos": hit["pos"], "en_def": hit.get("en_def", ""), "cn_def": hit["cn_def"]}
            elif " " not in o:
                missing.append(o)
    if missing:
        print("  no gloss", where, sorted(set(missing)))
    return mcqs, lookup
