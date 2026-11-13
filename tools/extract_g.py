import re,json,sys,glob,os
out={}
for f in sorted(glob.glob('/mnt/user-data/uploads/*junior-2000-group*.html')):
    s=open(f,encoding='utf8').read()
    g=int(re.search(r'group(\d+)',os.path.basename(f)).group(1))
    title=re.search(r'const TITLE="(.*?)";',s).group(1)
    Q=json.loads(re.search(r'const Q=(\[.*?\]);\nconst \$',s,re.S).group(1))
    out[g]={"title":title,"Q":Q}
json.dump(out,open('/home/claude/up/groups.json','w',encoding='utf8'),ensure_ascii=False)
for g,v in out.items():
    print(g,v["title"],len(v["Q"]))
    print(" | ".join(f'{q["id"]}.{q["word"]} {q["pos"]} {q["zhw"]}' for q in v["Q"]))
