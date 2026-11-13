import sys, glob, json, re
from docx import Document
out={}
for f in sorted(glob.glob(sys.argv[1]+"/GEPT_Basic_Vocabulary_Unit_*.docx")):
    u=int(re.search(r"Unit_(\d+)",f).group(1))
    d=Document(f)
    paras=[p.text for p in d.paragraphs if p.text.strip()]
    tables=[[[c.text for c in r.cells] for r in t.rows] for t in d.tables]
    out[u]={"paras":paras,"tables":tables}
json.dump(out,open(sys.argv[2],"w",encoding="utf8"),ensure_ascii=False)
u=out[1]
print("PARAS",len(u["paras"])); [print(" ",p[:160]) for p in u["paras"][:60]]
for i,t in enumerate(u["tables"]):
    print("TABLE",i,len(t),"rows x",len(t[0]),"cols")
    for r in t[:4]: print("  ",[c[:70] for c in r])
import collections
print(collections.Counter(tuple((len(t),len(t[0])) for t in v["tables"]) for v in out.values()).most_common(8))
print(collections.Counter(len(v["paras"]) for v in out.values()).most_common(8))
