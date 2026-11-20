import json,re
r=json.load(open('raw.json'))
SPK=r'(M|W|F|B|G|Man|Woman|Boy|Girl|Anchor|M1|M2|W1|W2|Question|Q)'
fixopt={('111',18):{'B':'What to do when there is a fire in their home.','C':'How to keep fire away from the Christmas tree.'},
 ('111',20):{'A':'Hank Biden died when Dark Mountain came out.','B':'She likes Dark Mountain more than Sing with Me.','C':'She thought Jason Smith appeared in Dark Mountain.'},
 ('114',18):{'A':'Because she wants a better job.'},('114',19):{'C':'Which music garbage trucks in Taiwan play.'},
 ('114',20):{'B':'She does not think Alan will move to America.','C':'She thinks Alan will move to America next year.'},
 ('104',20):{'A':'10:00.','B':'11:00.','C':'12:00.'}}
out={}
for y,qs in r.items():
    L=[]
    for i,q in enumerate(qs[:21]):
        n=i+1
        txt=' '.join(q['script'])
        txt=txt.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"')
        txt=re.sub(r'免費觀看.*?(?=\b(M|W|Question)\s*:|$)','',txt)
        txt=re.sub(r'\s+',' ',txt).strip()
        parts=re.split(r'(?:(?<=^)|(?<=\s)|(?<=[.?!"]))'+SPK+r'\s*[:：]\s*',txt)
        lines=[];pre=parts[0].strip()
        if pre: lines.append(['',pre])
        for k in range(1,len(parts),2):
            s=parts[k];t=parts[k+1].strip()
            if s=='F':s='W'
            if s=='Q':s='Question'
            lines.append([s,t])
        opts=dict((a,b) for a,b in q.get('opts',[]))
        for k,v in fixopt.get((y,n),{}).items(): opts[k]=v
        L.append({'n':n,'ans':q['ans'],'opts':opts,'lines':lines})
    out[y]=L
json.dump(out,open('clean.json','w'),ensure_ascii=False,indent=0)
with open('clean.txt','w') as f:
    for y,L in out.items():
        for q in L:
            f.write(f"\n== {y} Q{q['n']} ans={q['ans']}\n")
            for s,t in q['lines']: f.write(f"  {s}: {t}\n")
            for k,v in sorted(q['opts'].items()): f.write(f"   ({k}) {v}\n")
