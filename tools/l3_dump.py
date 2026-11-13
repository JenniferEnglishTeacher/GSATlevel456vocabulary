#!/usr/bin/env python3
"""Dump the Unit_UU-P_Vocabulary_Learning_Guide.docx worksheets (高中 Level 3, 2001-3000字) to JSON.
Usage: python3 -I l3_dump.py <folder with the docx files> <out l3_raw.json>"""
import sys, os, re, json, docx
out = {}
for f in sorted(os.listdir(sys.argv[1])):
    m = re.match(r"Unit_(\d+)-(\d+)_Vocabulary_Learning_Guide\.docx$", f)
    if not m: continue
    d = docx.Document(os.path.join(sys.argv[1], f))
    out[f"{int(m.group(1))}-{int(m.group(2))}"] = {
        "paras": [p.text for p in d.paragraphs if p.text.strip()],
        "tables": [[[c.text for c in r.cells] for r in t.rows] for t in d.tables]}
json.dump(out, open(sys.argv[2], "w", encoding="utf8"), ensure_ascii=False)
print(len(out), "files")
