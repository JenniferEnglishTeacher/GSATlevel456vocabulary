#!/usr/bin/env python3
"""會考單字片語總整理 docx (01–10) -> tools/jphrase/source.json.

Usage: python3 tools/jphrase_extract.py 01_xxx.docx 02_xxx.docx ...   (files named NN_*.docx, any order)
Each docx: Part 1 word-list table (phrase, POS, English, 中文, sample sentence with _____ blanks, 中文翻譯 with 【】)
and Part 2 multiple-choice questions + answer-key table + numbered 中文 translations.
"""
import json, re, sys
from pathlib import Path
import docx

ROOT = Path(__file__).resolve().parent.parent
out = {}
for f in sys.argv[1:]:
    num = re.search(r"(\d\d)_[^/]*\.docx$", f).group(1)
    d = docx.Document(f)
    ps = [p.text.strip() for p in d.paragraphs if p.text.strip()]
    title = ps[1]
    rows, group = [], ""
    for r in d.tables[0].rows[1:]:
        c = [x.text.strip() for x in r.cells]
        if len(set(c)) == 1:  # category row, e.g. "1. 補充 Addition（13）"
            group = re.sub(r"^\d+\.\s*|（\d+）$", "", c[0]).strip()
            continue
        rows.append({"w": c[0], "p": c[1].replace("(", "").replace(")", ""), "d": c[2], "c": c[3], "s": c[4], "st": c[5], "g": group})
    keys = {}
    for r in d.tables[1].rows:
        for x in r.cells:
            m = re.match(r"(\d+)\.\s*([A-D])", x.text.strip())
            if m:
                keys[int(m.group(1))] = "ABCD".index(m.group(2))
    trans = {int(m.group(1)): m.group(2).strip() for p in ps for m in [re.match(r"(\d+)\.\s*\([A-D]\)\s*(.*)", p)] if m}
    qs, cur = [], None
    for p in ps:
        m = re.match(r"\(\s*\)\s*(\d+)\.\s*(.*)", p)
        if m:
            cur = {"n": int(m.group(1)), "q": m.group(2)}
            continue
        if cur and p.startswith("(A)"):
            opts = [o.strip() for o in re.split(r"\([A-D]\)", p)[1:]]
            n = cur["n"]
            if len(opts) == 4 and n in keys:
                qs.append({"n": n, "q": cur["q"], "o": opts, "a": keys[n], "st": trans.get(n, "")})
            cur = None
    out[num] = {"title": title, "rows": rows, "mcq": qs}
    print(num, title, len(rows), "rows", len(qs), "mcq")
(ROOT / "tools/jphrase/source.json").write_text(json.dumps(out, ensure_ascii=False, indent=0), "utf-8")
