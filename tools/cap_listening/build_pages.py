import json, re, difflib, sys, os
sys.path.insert(0, '/home/claude/lis/work')
from notes import notes
C = json.load(open('/home/claude/lis/work/clean.json'))
W = json.load(open('/home/claude/lis/work/w114.json'))
REPO = '/home/claude/gsatlevel456vocabulary'
OUT = REPO + '/cap-listening/'
V = '20261120-c1'
KEYS = {'104': 'ABBCBAACACBABBCCACBCA', '110': 'BCBBABACABACACCCCACAA', '113': 'CCBCACABACBABBAACBABC', '114': 'ACCBABABCABBACAABCBBC'}
PICQ = {('110', 13), ('112', 18), ('113', 18)}

def tidy(t):
    t = re.sub(r'\s[一二三四]、.*$', '', t)          # section headers glued on by the PDF layout
    t = t.replace(' ,', ',').replace('steak,but', 'steak, but').replace("girl 's", "girl's").replace('shirt"I', 'shirt "I').replace('YY"on', 'YY" on').replace('word"love"and', 'word "love" and').replace('love"and', 'love" and')
    return re.sub(r'\s+', ' ', t).strip()

def sentences(t):
    if len(t) < 80: return [t]
    parts = re.split(r'(?<=[.?!])\s+(?=[A-Z"(])', t)
    out = []
    for p in parts:
        if out and len(out[-1]) < 25: out[-1] += ' ' + p
        else: out.append(p)
    return out

def build_year(y):
    qs = C[y]; ns = notes(y)
    key = KEYS.get(y)
    p3 = next(q['n'] for q in qs if q['n'] >= 4 and any(s == 'Question' for s, _ in q['lines']))
    secs = [dict(id='s1', title='一、辨識句意', rule='每題播出一個英文句子，請選出最符合描述的圖片。每題播放兩次。', units=[]),
            dict(id='s2', title='二、基本問答', rule='每題播出一句話或一小段對話，請選出最適合的回應。每題播放兩次。', units=[]),
            dict(id='s3', title='三、言談理解', rule='每題播出一段對話或獨白，以及一個問題，請選出最適合的答案。每題播放兩次。', units=[])]
    for q in qs:
        n = q['n']
        sub = []
        for s, t in q['lines']:
            t = tidy(t)
            if not t: continue
            if s == 'Question': s = 'Q'
            if t.startswith('[singing]'): s = '♪'
            if t.startswith('(') and t.endswith(')') and not s: s = '♪'
            for piece in sentences(t): sub.append([s, piece])
        ans = key[n - 1] if key else q['ans']
        assert ans in 'ABC', (y, n, ans)
        qd = {'n': n, 'ans': ans}
        img = None
        if n <= 3 or (y, n) in PICQ:
            img = [f'{y}-q{n}.png']
        else:
            qd['opts'] = [q['opts'][k].strip() for k in 'ABC']
        u = {'id': f'q{n}', 'label': f'第 {n} 題', 'qs': [qd], 'sub': sub, 'notes': [dict(ns[n - 1], n=n)]}
        if img: u['img'] = img; u['alt'] = ['(A)(B)(C) 三張圖片選項']
        if y == '114': u['audio'] = f'audio/114-q{n:02d}.mp3'
        secs[0 if n <= 3 else 1 if n < p3 else 2]['units'].append(u)
    times = align(secs) if y == '114' else {}
    return secs, times

NUM = {'6 .30': 'six thirty', '$1 ,500': 'one thousand five hundred dollars'}
def toks(s):
    s = s.lower().replace('’', "'")
    return re.findall(r"[a-z0-9']+", s)

def align(secs):
    T = {}
    for sec in secs:
        for u in sec['units']:
            n = int(u['id'][1:]); w = W[f'q{n:02d}']
            wt = []
            for s, e, word in w['words']:
                for k in toks(NUM.get(word.strip(), word)): wt.append((k, s, e))
            st = []
            for i, (sp, line) in enumerate(u['sub']):
                for k in toks(line): st.append((k, i))
            # first playthrough only: cut where the opening words come round again
            head = [k for k, _ in st[:4]]; words = [k for k, _, _ in wt]; cut = len(wt)
            for j in range(len(st) // 2, len(words) - len(head) + 1):
                if difflib.SequenceMatcher(None, words[j:j + len(head)], head).ratio() >= .75: cut = j; break
            sm = difflib.SequenceMatcher(None, [k for k, _ in st], words[:cut], autojunk=False)
            first, last = {}, {}
            for a, b, size in sm.get_matching_blocks():
                for d in range(size):
                    li = st[a + d][1]; s, e = wt[b + d][1], wt[b + d][2]
                    first.setdefault(li, s); last[li] = e
            lines = []
            for i in range(len(u['sub'])):
                lines.append([max(0, round(first[i] - .15, 2)), round(last[i] + .25, 2)] if i in first else None)
            # fill gaps from neighbours
            for i, ln in enumerate(lines):
                if ln is None:
                    prev = next((lines[j][1] for j in range(i - 1, -1, -1) if lines[j]), 0)
                    nxt = next((lines[j][0] for j in range(i + 1, len(lines)) if lines[j]), prev + 2)
                    lines[i] = [prev, nxt]
            miss = len(u['sub']) - len(first)
            if miss: print('  114', u['id'], 'unmatched lines', miss)
            T[u['id']] = {'s': 0, 'e': w['dur'], 'lines': lines}
    return T

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    allData = {}
    for y in ['104', '105', '110', '111', '112', '113', '114', '115']:
        secs, times = build_year(y)
        allData[y] = (secs, times)
    json.dump({y: v[0] for y, v in allData.items()}, open('/home/claude/lis/work/final.json', 'w'), ensure_ascii=False, indent=1)
    json.dump(allData['114'][1], open('/home/claude/lis/work/times114.json', 'w'))
    print('ok')

def page(y, secs, times):
    css = open('/tmp/gl.css').read() + '.uhead .tag{white-space:nowrap}.opts.pics{grid-template-columns:repeat(3,minmax(0,1fr))}.note h4{color:#7a2e1d}\n'
    js = open('/home/claude/lis/work/engine.js').read()
    rec = y == '114'
    mode = ('本年度使用會考原音：每題播放鍵播出該題的錄音（每題念兩遍，和考場一樣），字幕跟著錄音逐句亮起。' if rec else
            '本年度沒有公開的錄音檔，播放鍵改用瀏覽器的英文語音朗讀逐字稿（男聲／女聲依角色分開，每題念兩遍）。建議用 Chrome、Edge 或 Safari；手機請先關閉靜音。')
    legend = ('<p class="gw-legend" data-gw style="font-size:13px;color:#555;margin:6px 0 0">字幕、選項中的 <span class="gw gw-lj">基礎2000字</span> '
              '<span class="gw gw-lh">進階800字</span> <span class="gw gw-l3">Level 3</span> <span class="gw gw-l4">Level 4</span> 單字有底線：滑過／點一下可聽發音、看詞性與中譯，再點「🗂 字卡」看例句。</p>\n')
    html = f'''<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>會考英聽 {y} 年｜逐題聽・逐句字幕・解析</title>
<meta name="description" content="國中教育會考 {y} 年英語聽力測驗 21 題：逐題播放、逐句字幕、對答案與中文解析。">
<style>{css}</style>
<link rel="stylesheet" href="../gsat-exam/vocab-hover.css?v={V}" data-gw>
</head>
<body>
<div class="wrap">
<header>
  <p class="crumb"><a href="../index.html#xcl">← 回 Vocabulary Board 會考英聽</a>　／　國中會考英聽　／　{y} 年</p>
{legend}  <h1>會考英聽 {y} 年：逐題聽・逐句字幕<small>國中教育會考 英語（聽力）　三大題 21 題　{'🎧 原音' if rec else '🗣 語音朗讀'}</small></h1>
  <p class="lede">{mode}</p>
</header>

<div class="sticky" id="sticky"><div class="row">
  <span class="seg" role="group" aria-label="播放速度"><button type="button" data-rate="0.75">0.75×</button><button type="button" data-rate="0.9">0.9×</button><button type="button" data-rate="1" aria-pressed="true">1×</button></span>
  <span class="seg" role="group" aria-label="字幕模式"><button type="button" data-sub="hide" aria-pressed="true">字幕：作答後</button><button type="button" data-sub="show">字幕：一律顯示</button></span>
  <span class="now" id="now">尚未播放</span>
  <span class="tally" id="tally"></span>
</div></div>

<div class="panel">
  <h2>怎麼練習</h2>
  <ol>
    <li>按題目的 ▶ 播放鍵，只播這一題，念兩遍後自動停。</li>
    <li>聽完選答案，按「對答案」。對完答案字幕和解析會打開。</li>
    <li>聽不清楚的句子，點字幕那一行就從那一句重播；「只播這句」可以一句一句練。</li>
    <li>想先看字幕跟讀，在上方切換成「字幕：一律顯示」。</li>
  </ol>
  <div class="actions"><button type="button" class="btn" id="resetAll">全部重新作答</button><span id="audioStatus" class="rule"></span></div>
  <div class="qmap" id="qmap" aria-label="題號一覽"></div>
</div>

<nav class="toc" id="toc" aria-label="三大題"></nav>
<main id="app"></main>

<footer>
  <p>資料出處：國中教育會考 {y} 年英語（聽力）試題；題目、選項、答案依試題本與公布答案，逐字稿參考翰林出版會考解析整理。中文解析為本站自行撰寫。{'錄音為會考官方音檔。' if rec else '本年度錄音未公開，播放為瀏覽器語音朗讀，語調與考場錄音不同。'}試題著作權屬國立臺灣師範大學心理與教育測驗研究發展中心；本頁為非營利教學使用。</p>
  <p>作答紀錄只存在這台裝置的瀏覽器裡。</p>
</footer>
</div>

<audio id="aud" preload="none"></audio>
<script>
window.CAPL_KEY="jennifer-cap-listening-{y}-v1";window.HAS_AUDIO={'true' if rec else 'false'};
var DATA={json.dumps(secs, ensure_ascii=False, separators=(',', ':'))};
var TIMES={json.dumps(times, separators=(',', ':'))};
{js}</script>
<script data-gw>window.GW_TARGETS=["#app"];window.GW_TAP_ONLY=".sub p";</script>
<script src="lexicon.js?v={V}" data-gw></script>
<script src="../gsat-exam/vocab-hover.js?v={V}" data-gw></script>
</body>
</html>
'''
    open(f'{OUT}{y}.html', 'w', encoding='utf-8').write(html)

def finish(allData):
    sys.path.insert(0, REPO + '/tools')
    os.chdir(REPO)
    from exam_build import build_lexicon, CAP
    corpus = []
    def strings(o):
        if isinstance(o, str): corpus.append(o)
        elif isinstance(o, list): [strings(x) for x in o]
        elif isinstance(o, dict):
            for k, v in o.items():
                if k in ('units', 'sub', 'opts', 'qs', 'notes', 'key', 'wrong', 'words'): strings(v)
    for y, (secs, _) in allData.items(): strings(secs)
    n, by = build_lexicon(CAP['levels'], corpus, OUT + 'lexicon.js', True)
    print('lexicon', n, dict(by))
    ys = sorted(allData, reverse=True)
    items = []
    for y in ys:
        rec = y == '114'
        items.append({'title': f'{y} 年｜會考英聽', 'sub': '21 題｜' + ('🎧 會考原音' if rec else '🗣 語音朗讀逐字稿') + '｜0.75×／0.9×／1×｜逐句字幕＋中文解析', 'href': f'cap-listening/{y}.html', 'year': int(y)})
    open(OUT + 'listening-board-data.js', 'w', encoding='utf-8').write(
        '// 國中會考英聽 — generated by the cap-listening build (2026-11-20).\n'
        'window.CAP_LISTENING_BOARD=' + json.dumps({'title': '國中會考英聽試題', 'blurb': f'{ys[-1]}–{ys[0]} 年度共 {len(ys)} 份｜每份三大題 21 題｜114 年會考原音，其餘年度語音朗讀｜逐句字幕＋中文解析', 'years': items}, ensure_ascii=False).replace('{"title": "1', '\n{"title": "1') + ';\n')

if __name__ == '__main__':
    for y, (secs, times) in allData.items(): page(y, secs, times)
    finish(allData)
