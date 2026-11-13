#!/usr/bin/env python3
"""Convert the grammar-edition quiz pages (junior-2000-groupNN-*.html) into the site's group format.
Usage: convert_g.py <groups.json from extract_g.py> <out b2k_extra.json>"""
import json, random, re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from defs import THEMES, DEFS
src = json.load(open(sys.argv[1], encoding="utf8"))
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
FIX_OPTION = {"branchs": "branches", "halfs": "halves", "lifes": "lives"}
# Source slips corrected here: (group, id) -> grammar option to use instead of the marked one.
FIX_GRAMMAR = {(50, 26): "afraid of"}
M = "\x00"
out = {}
for g, grp in sorted(src.items(), key=lambda kv: int(kv[0])):
    g = int(g)
    defs = DEFS[g].split("\n")
    assert len(defs) == len(grp["Q"]), (g, len(defs), len(grp["Q"]))
    vocab, mcqs, lookup = [], [], {}
    rng = random.Random(g)  # same key every build
    for i, q in enumerate(grp["Q"]):
        slot = None
        def build(parts):
            global slot
            s = ""
            for p in parts:
                if isinstance(p, str):
                    s += p
                elif p.get("v"):
                    slot = p
                    s += M
                else:
                    opt = FIX_GRAMMAR.get((g, q["id"]), p["o"][p["a"]])
                    s += "" if opt == "—" else opt
            return re.sub(r"\s{2,}", " ", s).strip()
        qs, as_ = build(q["qparts"]), build(q["aparts"])
        assert slot is not None and (qs + as_).count(M) == 1, (g, q["id"])
        answer = FIX_OPTION.get(slot["o"][slot["a"]], slot["o"][slot["a"]])
        dialogue = f"{qs} {as_}"
        full_src = f'{q["qfull"]} {q["target"]}'
        if dialogue.replace(M, answer) != full_src:
            print("differs from source:", g, q["id"], "|", dialogue.replace(M, answer), "|", full_src)
        word = q["word"]
        if answer.lower() == word.lower():
            sent = dialogue.replace(M, "{{BLANK}}")
        else:
            assert answer.lower().startswith(word.lower()), (g, q["id"], answer, word)
            sent = dialogue.replace(M, "{{BLANK}}" + answer[len(word):])   # blocks -> ______s
        cn = re.sub(r"[【】]", "", f'{q["zq"]} {q["za"]}')
        v = {"word": word, "pos": q["pos"], "cn_def": q["zhw"], "en_def": defs[i], "sentence": sent, "cn": cn}
        if answer != word and answer.lower() == word.lower():
            v["answer"] = answer
        vocab.append(v)
        # Re-seat the correct option so the answer key is balanced and no two neighbours share a letter.
        options = [FIX_OPTION.get(o, o) for o in slot["o"]]
        prev = mcqs[-1]["answer"] if mcqs else -1
        counts = [sum(1 for m in mcqs if m["answer"] == k) for k in range(4)]
        target = min((k for k in range(4) if k != prev), key=lambda k: (counts[k], rng.random()))
        options[slot["a"]], options[target] = options[target], options[slot["a"]]
        mcqs.append({"q": dialogue.replace(M, "______"), "options": options, "answer": target, "vocabIndex": i})
        entry = {"pos": q["pos"], "en_def": defs[i], "cn_def": q["zhw"]}
        key = word.lower()
        if key in lookup:
            lookup[key]["combined"].append(entry)
        else:
            lookup[key] = {**entry, "combined": [entry]}
    out[str(g)] = {"generated": True, "QUIZ_CONFIG": {"groupName": f"Group {g} - {THEMES[g]}", "gasEndpoint": GAS},
                   "VOCAB": vocab, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
    lens = [len(m["q"].split()) for m in mcqs]
    print(g, THEMES[g], len(vocab), "words; MCQ words min/max", min(lens), max(lens), "answers", "".join("ABCD"[m["answer"]] for m in mcqs))
json.dump(out, open(sys.argv[2], "w", encoding="utf8"), ensure_ascii=False)
