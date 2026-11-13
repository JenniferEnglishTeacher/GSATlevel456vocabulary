#!/usr/bin/env python3
"""Convert the GEPT_Basic_Vocabulary_Unit_NNN.docx worksheets (捷進全民英檢初級單字書, 100 lessons) into group data.
Usage: gept_convert.py <gept_raw.json from gept_dump.py> <out gept.json>"""
import json, random, re, sys
R = json.load(open(sys.argv[1], encoding="utf8"))
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
# Grid sentences whose blank needs a plural: (lesson, word) -> form that fits the sentence.
PLURAL = {(6, "relative"): "relatives", (8, "grape"): "grapes", (10, "donut"): "donuts", (10, "dumpling"): "dumplings",
          (20, "activity"): "activities", (25, "servant"): "servants", (34, "ant"): "ants", (34, "bug"): "bugs",
          (34, "kitten"): "kittens", (35, "goose"): "geese", (36, "wolf"): "wolves", (36, "zebra"): "zebras",
          (37, "bat"): "bats", (37, "pigeon"): "pigeons", (58, "instance"): "instances", (60, "crayon"): "crayons",
          (87, "liquid"): "liquids", (99, "stick"): "sticks"}
IRREGULAR = {"geese": "goose", "wolves": "wolf", "oxen": "ox", "knives": "knife", "leaves": "leaf", "thieves": "thief"}
out, problems = {}, []
for key in sorted(R, key=int):
    u = int(key)
    P, T = R[key]["paras"], R[key]["tables"][0]
    m = re.search(r"Topic(?: Focus)?:\s*(.+?)\s*\|", "\n".join(P[:2]))
    topic = m.group(1).strip() if m else ""
    vocab, lookup = [], {}
    rng = random.Random(1000 + u)
    for r in T[1:]:
        cell = r[0].strip()
        word = re.split(r"\s*[\n(]", cell)[0].strip()
        fm = re.search(r"\(([^)]*)\)", cell)
        forms = fm.group(1).strip() if fm else ""
        pos = re.sub(r"[()]", "", r[1]).strip()
        sent = re.sub(r"_{3,}(?:\s+_{3,})*", "{{BLANK}}", r[4].strip())
        if sent.count("{{BLANK}}") != 1:
            problems.append((u, word, "blank count"))
        e = {"word": word, "pos": pos, "cn_def": r[3].strip(), "en_def": r[2].strip(), "sentence": sent, "cn": r[5].strip()}
        if forms:
            e["forms"] = forms
        ans = PLURAL.get((u, word))
        if ans:
            if ans.startswith(word):
                e["sentence"] = sent.replace("{{BLANK}}", "{{BLANK}}" + ans[len(word):])
            else:
                e["answer"] = ans   # flashcards show this form; the spelling quiz asks for it
                e["quizWord"] = ans
        vocab.append(e)
        entry = {"pos": pos, "en_def": e["en_def"], "cn_def": e["cn_def"]}
        lookup[word.lower()] = {**entry, "combined": [entry]}
    qs = [(i, p) for i, p in enumerate(P) if re.match(r"\d+\. ", p)]
    keys = [p for p in P if p.startswith("第 ")]
    mcqs = []
    for n, (i, p) in enumerate(qs):
        q = re.sub(r"^\d+\.\s*", "", p).strip()
        opts = [o.strip() for o in re.findall(r"\([A-D]\)\s*(.*?)(?=\s*\([A-D]\)|$)", P[i + 1].strip())]
        km = re.match(r"第\s*(\d+)\s*題\s*解答:\s*\(([A-D])\)\s*目標字:\s*(.+?)\s*\((.*?)\)", keys[n])
        if len(opts) != 4 or not km or int(km.group(1)) != n + 1:
            problems.append((u, n + 1, "mcq parse"))
            continue
        a = "ABCD".index(km.group(2))
        target = km.group(3).strip()
        vi = next((j for j, v in enumerate(vocab) if v["word"].lower() == target.lower()), None)
        if vi is None:   # inflected target (carrots, strawberries, jealousy): the grid word sharing the longest stem
            t = IRREGULAR.get(target.lower(), target.lower())
            def stem(w):
                n = 0
                while n < min(len(w), len(t)) and w[n] == t[n]:
                    n += 1
                return n
            best = max(range(len(vocab)), key=lambda j: stem(vocab[j]["word"].lower()))
            w = vocab[best]["word"].lower()
            if stem(w) >= max(3, len(w) - 1):
                vi = best
        if vi is None:
            problems.append((u, n + 1, f"target '{target}' / answer '{opts[a]}' not in grid"))
        cn = re.search(r"【全文中譯】(.*)", keys[n])
        # Re-seat the correct option: balanced key, no two neighbours alike (the worksheet keys lean heavily on A/B).
        prev = mcqs[-1]["answer"] if mcqs else -1
        counts = [sum(1 for x in mcqs if x["answer"] == k) for k in range(4)]
        seat = min((k for k in range(4) if k != prev), key=lambda k: (counts[k], rng.random()))
        opts[a], opts[seat] = opts[seat], opts[a]
        a = seat
        item = {"q": re.sub(r"_{3,}(?:\s+_{3,})*", "______", q), "options": opts, "answer": a, "cn": cn.group(1).strip() if cn else ""}
        if vi is not None:
            item["vocabIndex"] = vi
        mcqs.append(item)
        # Chinese for the other options comes from the answer-key notes: "(A) bone 骨頭  (B) ankle 腳踝 ..."
        notes = re.search(r"【選項解析】(.*)", keys[n])
        if notes:
            for o in opts:
                g = re.search(r"\([A-D]\)\s*" + re.escape(o) + r"\s+([^\s(。.]+)", notes.group(1))
                if g and o.lower() not in lookup:
                    lookup[o.lower()] = {"pos": "", "en_def": "", "cn_def": g.group(1), "combined": [{"pos": "", "en_def": "", "cn_def": g.group(1)}]}
    letters = "".join("ABCD"[m["answer"]] for m in mcqs)
    if re.search(r"(.)\1", letters):
        problems.append((u, 0, "adjacent same answers " + letters))
    tested = {m.get("vocabIndex") for m in mcqs}
    missing = [v["word"] for j, v in enumerate(vocab) if j not in tested]
    if missing:
        problems.append((u, 0, "not tested in MCQ: " + ", ".join(missing)))
    out[str(u)] = {"generated": True, "theme": topic,
                   "QUIZ_CONFIG": {"groupName": f"捷進GEPT初級 Lesson {u} - {topic}", "gasEndpoint": GAS},
                   "VOCAB": vocab, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
json.dump(out, open(sys.argv[2], "w", encoding="utf8"), ensure_ascii=False)
print("lessons", len(out), "words", sum(len(v["VOCAB"]) for v in out.values()), "mcqs", sum(len(v["MCQS"]) for v in out.values()))
print("topics missing:", [k for k, v in out.items() if not v["theme"]])
print(len(problems), "notes")
for p in problems[:60]:
    print(" ", p)
