# Validate one topic entry before merging: python3 tools/toeic_check.py topic_N.json "w1|w2|..."
import json, sys, re
# usage: python3 check.py topic_N.json "word1|word2|..."
G = json.load(open(sys.argv[1]))
words = sys.argv[2].split("|") if len(sys.argv) > 2 else None
VOC, MC = G["VOCAB"], G["MCQS"]
errs = []
if words and [v["word"] for v in VOC] != words:
    errs.append(("word list mismatch", [v["word"] for v in VOC]))
POS = {"n.", "v.", "adj.", "adv.", "phr.", "n.phr.", "v.phr.", "adj.phr.", "prep.", "conj."}
for e in VOC:
    s = e["sentence"]; w = e["word"]
    if s.count("{{BLANK}}") != 1: errs.append((w, "blank count"))
    if not (s.startswith("A: ") and " B: " in s): errs.append((w, "A/B format"))
    if len(s.split()) < 40: errs.append((w, "only %d words" % len(s.split())))
    if re.search(r"\b" + re.escape(w.lower()) + r"\b", s.lower().replace("{{blank}}", "")): errs.append((w, "word repeated in sentence"))
    if not ("【" in e["cn"] and " B：" in e["cn"] and e["cn"].startswith("A：")): errs.append((w, "cn format"))
    if e["pos"] not in POS: errs.append((w, "pos"))
    for k in ["en_def", "cn_def", "collocation"]:
        if not e.get(k): errs.append((w, k))
if len(MC) != 30: errs.append(("MCQ count", len(MC)))
for n, q in enumerate(MC):
    if len(q["options"]) != 4 or len(set(o.lower() for o in q["options"])) != 4: errs.append((n, "options"))
    if VOC[q["vocabIndex"]]["word"].lower() != q["options"][q["answer"]].lower(): errs.append((n, "answer/vocabIndex mismatch"))
    if q["q"].count("_____") != 1: errs.append((n, "blank"))
    nw = len(q["q"].split())
    if not 16 <= nw <= 26: errs.append((n, "q words %d" % nw))
    if len(re.findall(r"[.!?](\s|$)", q["q"])) != 2: errs.append((n, "not exactly two sentences?"))
    if n and q["answer"] == MC[n - 1]["answer"]: errs.append((n, "same answer twice"))
cnt = [sum(q["answer"] == x for q in MC) for x in range(4)]
if max(cnt) - min(cnt) > 2: errs.append(("balance", cnt))
covered = {q["vocabIndex"] for q in MC}
if len(VOC) <= 30 and len(covered) != len(VOC): errs.append(("words without MCQ", [VOC[i]["word"] for i in range(len(VOC)) if i not in covered]))
print("OK" if not errs else "\n".join(map(str, errs)))
