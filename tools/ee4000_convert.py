"""4000 Essential English Words (2nd edition) -> ee4000.json for build.py.   usage: python3 ee4000_convert.py <out.json>
ee4000/b<N>_words.json : the book's word list (unit, word, part of speech, Chinese meaning) - 20 words per unit.
ee4000/b<N>_*.txt      : "#<unit>" then one "word | definition | sentence with ____ | 中譯" line per word, in the list's order.
                         These definitions and sentences were written for this site; the book's own are not used.
One multiple-choice question per word: its sentence, with three other words of the same part of speech from the unit
(EXCLUDE lists words too close in meaning to be offered against each other)."""
import sys, os, re, json, glob, random
HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ee4000")
GAS = "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
B = "{{BLANK}}"
POS_FIX = {(3, "inhabit"): "v.", (3, "host"): "n."}
EXCLUDE = {3: """chamber corridor|core interior|gap channel|elite royal|engineer found|humble modest|hut lodge|neglect overlook|fake inferior|ridiculous awkward|
satisfactory inferior|irritate offend tease kid|rot spoil|grasp tap|closet drawer|bulletin broadcast|ambitious brilliant enthusiastic|burst drip|
ally opponent rival bully|quarrel wrestle|imitate reproduce|gallery museum theater|guest host cousin|toss scatter|scent puff|harbor port|vessel voyage|
apprentice chef|crown robe|cheerful merry|affair assembly|bless pardon|justice liberty privacy punishment|affection sympathy|retreat withdraw yield|
knight warrior rebel|invasion revolution|cliff summit|dispute incident|horror rage shame|magnificent terrific supreme profound|profound vital evident|
seize squeeze|cell gene|female male|desperate terrified|fierce cautious|marine polar|consequent underlying|crush blend|wire fuse|grocer merchant|
congress institution|gaze glance|certificate license|shove thrust|devise implement|expertise insight"""}


def load(book):
    words = json.load(open(os.path.join(HERE, f"b{book}_words.json"), encoding="utf8"))
    rows, cur = {}, None
    for f in sorted(glob.glob(os.path.join(HERE, f"b{book}_[0-9]*.txt"))):
        for line in open(f, encoding="utf8"):
            line = line.rstrip("\n")
            if not line.strip():
                continue
            if line.startswith("#"):
                cur = int(line[1:]); rows[cur] = []
            else:
                p = [x.strip() for x in line.split(" | ")]
                assert len(p) == 4 and p[2].count("____") == 1, (f, line)
                rows[cur].append(p)
    units = {}
    for w in words:
        units.setdefault(w["unit"], []).append(w)
    out = {}
    for u in sorted(units):
        assert len(rows.get(u, [])) == len(units[u]), (book, u)
        V = []
        for w, (word, df, sent, zh) in zip(units[u], rows[u]):
            assert w["w"] == word, (book, u, w["w"], word)
            ans = word[0].upper() + word[1:] if sent.startswith("____") and word[0].islower() else word
            e = {"word": word, "pos": POS_FIX.get((book, word), w["pos"]), "cn_def": w["cn"], "en_def": df, "sentence": sent.replace("____", B), "cn": zh}
            if ans != word:
                e["answer"] = ans
            V.append(e)
        out[u] = V
    return out


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


OUT = {}
for book in (3,):
    units = load(book)
    close = {}
    for grp in EXCLUDE.get(book, "").replace("\n", "").split("|"):
        ws = grp.split()
        for a in ws:
            close.setdefault(a, set()).update(x for x in ws if x != a)
    allw = [e for u in units for e in units[u]]
    G = {}
    for u, V in units.items():
        rng = random.Random(4000 * book + u)
        seats = seats_for(len(V), rng)
        near = [e for uu in units if 0 < abs(uu - u) <= 2 for e in units[uu]]
        mcqs, lookup = [], {}
        for i, e in enumerate(V):
            picks = []
            for pool in (V, near, allw):
                pool = [x for x in pool if x is not e and x["pos"] == e["pos"] and x["word"] not in close.get(e["word"], ()) and x["word"] != e["word"]
                        and x["cn_def"] != e["cn_def"] and x["word"] not in picks]
                rng.shuffle(pool)
                picks += [x["word"] for x in pool[:3 - len(picks)]]
                if len(picks) == 3:
                    break
            assert len(picks) == 3, (book, u, e["word"])
            ans = e.get("answer") or e["word"]
            opts = [p[0].upper() + p[1:] if ans[0].isupper() and p[0].islower() else p for p in picks]
            opts.insert(seats[i], ans)
            mcqs.append({"q": e["sentence"].replace(B, "______"), "options": opts, "answer": seats[i], "cn": e["cn"], "vocabIndex": i})
        used = {o.lower() for q in mcqs for o in q["options"]}
        for e in allw:
            if e["word"].lower() in used:
                lookup.setdefault(e["word"].lower(), {"pos": e["pos"], "en_def": e["en_def"], "cn_def": e["cn_def"]})
        theme = f"{V[0]['word']} – {V[-1]['word']}"
        G[str(u)] = {"generated": True, "theme": theme, "QUIZ_CONFIG": {"groupName": f"4000 Essential Words Book {book} U{u:02d} - {theme}", "gasEndpoint": GAS},
                     "VOCAB": V, "MCQS": mcqs, "LOOKUP": lookup, "EXTRA_GLOSSES": {}}
    OUT[str(book)] = G
    print("book", book, len(G), "units", sum(len(g["VOCAB"]) for g in G.values()), "words")
json.dump(OUT, open(sys.argv[1], "w", encoding="utf8"), ensure_ascii=False, indent=1)
