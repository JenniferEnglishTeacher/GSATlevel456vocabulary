from PIL import Image, ImageDraw, ImageFont
import os
P='/home/claude/lis/pics/'; OUT='/home/claude/gsatlevel456vocabulary/cap-listening/img/'
M={'104':[(0,1,2),(3,4,5),(6,7,8)],'105':[(3,4,5),(6,7,8),(9,10,11)],'110':[(3,4,5),(6,7,8),(0,1,10)],
'111':[(2,3,4),(5,6,7),(8,9,10)],'112':[(0,1,2),(3,4,5),(6,7,8)],'113':[(3,4,5),(6,7,8),(9,10,11)],
'114':[(1,2,3),(4,5,6),(7,8,9)],'115':[(1,2,3),(4,5,6),(7,8,9)]}
EXTRA={('112',18):('112b',(0,1,2)),('113',18):('113',(16,17,18))}
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',26)
def combo(dirn,idx,out):
    ims=[Image.open(f'{P}{dirn}/i-{i:03d}.png').convert('RGB') for i in idx]
    H=260; ims=[im.resize((int(im.width*H/im.height),H)) for im in ims]
    gap=24; W=sum(i.width for i in ims)+gap*(len(ims)+1)
    c=Image.new('RGB',(W,H+52),'white'); d=ImageDraw.Draw(c); x=gap
    for k,im in enumerate(ims):
        c.paste(im,(x,8)); t='(%s)'%'ABC'[k]; tw=d.textlength(t,font=font); d.text((x+im.width/2-tw/2,H+14),t,fill='black',font=font); x+=im.width+gap
    if c.width>1000: c=c.resize((1000,int(c.height*1000/c.width)))
    c.save(out,optimize=True)
for y,qs in M.items():
    for n,idx in enumerate(qs,1): combo(y,idx,f'{OUT}{y}-q{n}.png')
for (y,n),(d,idx) in EXTRA.items(): combo(d,idx,f'{OUT}{y}-q{n}.png')
im=Image.open(P+'110/i-011.png'); print(im.size); im.convert('RGB').save(OUT+'110-q13.png',optimize=True)
print(sorted(os.listdir(OUT)))
