#!/usr/bin/env python3
"""Build the 學測歷屆試題 (GSAT past exam) MCQ pages under gsat-exam/.

Inputs
  tools/exam/questions.json   {year: [ {num, section, stem|passage+group, options[4], answer, explanation} ]}
  l4/l5/l6-dashboard-data.js + t*-dashboard-data.js   (the site's Level 3–6 word data, for the hover lexicon)

Outputs
  gsat-exam/gsat-past-exam-<year>.html, gsat-exam/gsat-past-exam-all.html
  gsat-exam/lexicon.js        every Level 3–6 word that occurs in the exam text -> flashcard link + pos + 中譯
  gsat-exam/exam-board-data.js  cards for the dashboard's 學測歷屆試題 tab

Run from the repo root:  python3 tools/exam_build.py
"""
import json, os, re, html, glob, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'gsat-exam')
V = '20261120-4'
Q = json.load(open(os.path.join(ROOT, 'tools/exam/questions.json'), encoding='utf-8'))
YEARS = sorted((int(y) for y in Q), reverse=True)

def dump(o): return json.dumps(o, ensure_ascii=False)

# ---------------------------------------------------------------- lexicon
def load_js(path):
    s = open(path, encoding='utf-8').read()
    return json.loads(s[s.find('=') + 1:].strip().rstrip(';'))

# word -> entry; priority: L4–6 head word < L3 word < L4–6 family entry
full = {}
def add(word, entry, prio):
    w = word.lower()
    if w not in full or prio < full[w]['prio']:
        full[w] = dict(entry, prio=prio)
    elif prio == full[w]['prio'] and entry['zone'] == full[w]['zone'] and entry['unit'] == full[w]['unit']:
        e = full[w]
        if entry['pos'] not in e['pos'].split(' / '): e['pos'] += ' / ' + entry['pos']
        if entry['zh'] not in e['zh']: e['zh'] += '；' + entry['zh']

for lv in ('4', '5', '6'):
    for u in load_js(os.path.join(ROOT, f'l{lv}-dashboard-data.js')):
        for c in u['cards']:
            if ' ' in c['w']: continue
            add(c['w'], {'zone': f'l{lv}', 'unit': u['unit'], 'pos': c['p'], 'zh': c['c'], 'en': c['d'], 'lv': lv, 'head': 1 if c.get('h') else 0}, int(lv) if c.get('h') else 10 + int(lv))
for f in sorted(glob.glob(os.path.join(ROOT, 't*-dashboard-data.js'))):
    zone = os.path.basename(f).split('-')[0]
    if not re.fullmatch(r't\d+', zone): continue
    for u in load_js(f):
        for c in u['cards']:
            if ' ' in c['w']: continue
            add(c['w'], {'zone': zone, 'unit': u['unit'], 'pos': c['p'], 'zh': c['c'], 'en': c['d'], 'lv': '3', 'head': 1}, 7)

IRREGULAR = {  # inflected -> base (only verbs likely in Level 3–6)
 'arose':'arise','arisen':'arise','bore':'bear','borne':'bear','bound':'bind','bred':'breed','broadcast':'broadcast','burst':'burst','cast':'cast',
 'clung':'cling','crept':'creep','dealt':'deal','dug':'dig','fed':'feed','fled':'flee','flung':'fling','forbade':'forbid','forbidden':'forbid',
 'forecast':'forecast','foresaw':'foresee','foreseen':'foresee','froze':'freeze','frozen':'freeze','grinded':'grind','ground':'grind','hid':'hide','hidden':'hide',
 'knelt':'kneel','knit':'knit','laid':'lay','lain':'lie','leapt':'leap','lent':'lend','lit':'light','mislaid':'mislay','misled':'mislead','mistook':'mistake','mistaken':'mistake',
 'overcame':'overcome','overthrew':'overthrow','overthrown':'overthrow','overtook':'overtake','overtaken':'overtake','pled':'plead','proved':'prove','proven':'prove',
 'quit':'quit','rid':'rid','rode':'ride','ridden':'ride','rang':'ring','rung':'ring','rose':'rise','risen':'rise','sank':'sink','sunk':'sink','sought':'seek','shed':'shed',
 'shone':'shine','shook':'shake','shaken':'shake','shrank':'shrink','shrunk':'shrink','slid':'slide','slew':'slay','slain':'slay','slit':'slit','sought':'seek','sown':'sow','sowed':'sow',
 'spat':'spit','split':'split','spoilt':'spoil','sprang':'spring','sprung':'spring','spun':'spin','stank':'stink','stuck':'stick','stung':'sting','strove':'strive','striven':'strive',
 'struck':'strike','strung':'string','swept':'sweep','swelled':'swell','swollen':'swell','swore':'swear','sworn':'swear','swung':'swing','thrust':'thrust','trod':'tread','trodden':'tread',
 'undergone':'undergo','underwent':'undergo','undertook':'undertake','undertaken':'undertake','upheld':'uphold','withdrew':'withdraw','withdrawn':'withdraw','withheld':'withhold',
 'withstood':'withstand','wove':'weave','woven':'weave','wept':'weep','wound':'wind','wrung':'wring','spread':'spread','bet':'bet','bid':'bid','leaned':'lean','leant':'lean',
}
CONS = 'bcdfghjklmnpqrstvwxz'

def candidates(tok):
    """(candidate base, required pos family) in priority order"""
    t = tok.lower()
    yield t, None
    if t in IRREGULAR: yield IRREGULAR[t], 'v'
    if t.endswith('ies') and len(t) > 4: yield t[:-3] + 'y', 'nv'
    if t.endswith('ied') and len(t) > 4: yield t[:-3] + 'y', 'v'
    if t.endswith('es') and len(t) > 4: yield t[:-2], 'nv'
    if t.endswith('s') and len(t) > 3 and not t.endswith('ss'): yield t[:-1], 'nv'
    if t.endswith('ed') and len(t) > 4:
        yield t[:-2], 'v'; yield t[:-1], 'v'
        if len(t) > 5 and t[-3] == t[-4] and t[-3] in CONS: yield t[:-3], 'v'
    if t.endswith('ing') and len(t) > 5:
        yield t[:-3], 'v'; yield t[:-3] + 'e', 'v'
        if t[-4] == t[-5] and t[-4] in CONS: yield t[:-4], 'v'
    if t.endswith('er') and len(t) > 4:
        yield t[:-2], 'a'; yield t[:-1], 'a'
        if t[-3] == t[-4] and t[-3] in CONS: yield t[:-3], 'a'
    if t.endswith('est') and len(t) > 5:
        yield t[:-3], 'a'; yield t[:-2], 'a'
        if t[-4] == t[-5] and t[-4] in CONS: yield t[:-4], 'a'
    if t.endswith('ier') and len(t) > 4: yield t[:-3] + 'y', 'a'
    if t.endswith('iest') and len(t) > 5: yield t[:-4] + 'y', 'a'

def pos_ok(entry, fam):
    if fam is None: return True
    p = entry['pos']
    if fam == 'v': return 'v.' in p
    if fam == 'nv': return 'n.' in p or 'v.' in p
    if fam == 'a': return 'adj.' in p
    return True

def resolve(tok):
    for cand, fam in candidates(tok):
        e = full.get(cand)
        if e and pos_ok(e, fam):
            return cand
    return None

TOKEN = re.compile(r"[A-Za-z][A-Za-z'’-]*[A-Za-z]|[A-Za-z]")
corpus = []
for y in YEARS:
    for it in Q[str(y)]:
        corpus.append(it.get('stem') or ''); corpus.append(it.get('passage') or ''); corpus += it['options']
lex_words, forms = {}, {}
for text in corpus:
    for m in TOKEN.finditer(text):
        tok = m.group(0)
        if len(tok) < 3: continue
        base = resolve(tok)
        if not base: continue
        e = full[base]
        lex_words[base] = [e['zone'], e['unit'], e['pos'], e['zh'], e['en'], e['lv'], e['head']]
        if tok.lower() != base: forms[tok.lower()] = base
lex = {'w': lex_words, 'f': forms}
open(os.path.join(OUT, 'lexicon.js'), 'w', encoding='utf-8').write(
    '// Auto-generated by tools/exam_build.py — Level 3–6 words that occur in the exam pages.\n'
    '// w: base word -> [zone, unit, pos, 中譯, English, level, isHead]; f: inflected form -> base word\n'
    'window.GSAT_LEX=' + dump(lex) + ';\n')
print('lexicon words', len(lex_words), 'forms', len(forms), 'by level', collections.Counter(v[5] for v in lex_words.values()))

# ---------------------------------------------------------------- pages
SECTION_HINT = {'綜合測驗': '請選出 __{n}__ 的最佳答案', '文意選填': '請從 (A)–(J) 選出最適合 __{n}__ 的字（每個選項只用一次）', '篇章結構': '請選出最適合放入 __{n}__ 的句子'}
def qtext(it):
    if it['section'] == '詞彙':
        return f"第 {it['num']} 題　{it['stem']}"
    hint = SECTION_HINT.get(it['section'], '請選出 __{n}__ 的最佳答案').format(n=it['num'])
    return f"【{it['section']} 第 {it['group']} 題】\n{it['passage']}\n\n▶ 第 {it['num']} 題　{hint}"

LABELS = 'ABCDEFGHIJ'
def counts(items):
    c = collections.OrderedDict()
    for it in items: c[it['section']] = c.get(it['section'], 0) + 1
    return c
def count_text(c, sep='＋'): return sep.join(f"{k} {v}" for k, v in c.items())

def build_questions(y, section_by_year=False):
    out = []
    for it in Q[str(y)]:
        out.append({
            'id': it['num'], 'question': qtext(it), 'options': it['options'],
            'answer': LABELS.index(it['answer']), 'answerLabel': it['answer'],
            'source': f"{y} 學測｜{it['section']}｜第 {it['num']} 題",
            'explanation': it['explanation'], 'explanationSource': 'own',
            'section': f'{y}年' if section_by_year else it['section'],
        })
    return out

HEAD = '''<!doctype html>
<html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{desc}"><title>{title}</title><link rel="stylesheet" href="quiz.css?v=20261027-2"><link rel="stylesheet" href="vocab-hover.css?v={v}"><style>.explain{{white-space:pre-line}}.question{{font-size:19px;font-weight:600;line-height:1.65}}.options:has(.option:nth-child(7)){{grid-template-columns:1fr 1fr}}@media(max-width:600px){{.options:has(.option:nth-child(7)){{grid-template-columns:1fr}}}}</style></head><body>
<main class="wrap"><header class="hero"><a class="btn" href="../index.html#x">← 回到 Vocabulary Board</a><h1 id="title">{title}</h1><p id="description" class="note"></p><p class="note gw-legend">文中 <span class="gw gw-l3">Level 3</span> <span class="gw gw-l4">Level 4</span> <span class="gw gw-l5">Level 5</span> <span class="gw gw-l6">Level 6</span> 的學測單字會標示底線：滑過／點一下可聽發音、看詞性與中譯，再點「🗂 字卡」看例句。</p></header>
<section id="select" class="card"><h2>選擇題目</h2><div class="toolbar"><button id="all" class="btn" type="button">全選</button><button id="none" class="btn" type="button">取消全選</button><button id="random" class="btn" type="button">隨機 20 題</button><span id="picked" class="note"></span></div><div id="list"></div><label class="pick"><input id="shuffle" type="checkbox"> 隨機排列題目</label><button id="start" class="btn primary" type="button">開始測驗 →</button></section>
<section id="quiz" class="card hidden"><div class="progress"><div id="bar" class="bar"></div></div><div class="meta"><span id="meta"></span><span id="wrongCount"></span></div><div id="zh" class="zh hidden"></div><div id="question" class="question"></div><div id="answerArea"></div><div id="feedback" class="feedback hidden" aria-live="polite"></div><div class="actions"><button id="check" class="btn primary" type="button">檢查答案</button><button id="next" class="btn primary hidden" type="button">下一題 →</button><button id="finish" class="btn danger" type="button">結束練習</button></div></section>
<section id="result" class="card hidden"><h2>練習結果</h2><div id="summary" class="summary"></div><h2>錯題紀錄</h2><div id="wrongList"></div><div class="actions"><button id="retry" class="btn primary" type="button">重做錯題</button><button id="download" class="btn" type="button">下載 DOCX 錯題</button><button id="restart" class="btn" type="button">重新選題</button></div></section></main>
'''
TAIL = '''<script src="quiz.js?v=20261106-3"></script><script>document.querySelector("#description").textContent={desc_js};</script><script src="lexicon.js?v={v}"></script><script src="vocab-hover.js?v={v}"></script><script src="/high-school-blank-translation-quiz/quiz-result-recorder.js?v=20261027-1" defer></script></body></html>
'''

cards, grand = [], collections.OrderedDict()
for y in YEARS:
    qs = build_questions(y)
    c = counts(Q[str(y)])
    for k, v in c.items(): grand[k] = grand.get(k, 0) + v
    title = f'{y} 年學測英文｜' + '＋'.join(c)
    desc = f'{y} 年學測英文：{count_text(c)}｜共 {len(qs)} 題｜單選｜附中文解析｜Level 3–6 單字滑過即看中譯與字卡｜可隨機 20 題、隨時結束並下載 DOCX 錯題'
    cfg = {'title': title, 'mode': 'mcq', 'questions': qs}
    page = HEAD.format(title=title, desc=html.escape(desc), v=V) + '<script>window.QUIZ_CONFIG=' + dump(cfg) + ';</script>' + TAIL.format(desc_js=dump(desc), v=V)
    open(os.path.join(OUT, f'gsat-past-exam-{y}.html'), 'w', encoding='utf-8').write(page)
    cards.append({'title': f'{y} 年學測英文', 'sub': f'{count_text(c)}｜共 {len(qs)} 題｜附中文解析', 'href': f'gsat-exam/gsat-past-exam-{y}.html?v={V}', 'year': y})

all_qs, passages, n = [], {}, 0
for y in YEARS:
    qs = build_questions(y, section_by_year=True)
    for q, it in zip(qs, Q[str(y)]):
        n += 1; q['id'] = n
        if it.get('passage'):
            key = f"{y}-{it['group']}"; passages[key] = it['passage']
            q['question'] = q['question'].replace(it['passage'], f'@@{key}@@')
    all_qs += qs
total = len(all_qs)
title = f'學測英文歷屆試題｜{YEARS[-1]}–{YEARS[0]} 年選擇題'
desc = f'{YEARS[-1]}–{YEARS[0]} 年共 {len(YEARS)} 屆：{count_text(grand)}｜可選單一年度／隨機 20 題／全部｜附中文解析｜Level 3–6 單字滑過即看中譯與字卡｜隨時結束並下載 DOCX 錯題'
cfg = {'title': title, 'mode': 'mcq', 'questions': all_qs}
expand = ('<script>(function(){var P=window.GSAT_PASSAGES||{};window.QUIZ_CONFIG.questions.forEach(function(q){'
          'q.question=q.question.replace(/@@([^@]+)@@/g,function(m,k){return P[k]||m});});})();</script>')
page = (HEAD.format(title=title, desc=html.escape(desc), v=V) + '<script>window.GSAT_PASSAGES=' + dump(passages) + ';window.QUIZ_CONFIG=' + dump(cfg) + ';</script>' + expand + TAIL.format(desc_js=dump(desc), v=V))
open(os.path.join(OUT, 'gsat-past-exam-all.html'), 'w', encoding='utf-8').write(page)

board = {
    'title': f'學測英文歷屆試題 {YEARS[-1]}–{YEARS[0]} 年',
    'blurb': f'{len(YEARS)} 個年度｜{total} 題（{count_text(grand, "、")}）｜附中文解析｜文中 Level 3–6 單字可滑過看中譯、開字卡｜隨時結束並下載 DOCX 錯題',
    'all': {'title': f'🧩 {YEARS[-1]}–{YEARS[0]} 年全部綜合練習', 'sub': f'{total} 題｜可選單一年度／隨機 20 題／全部｜隨時結束→下載 DOCX 錯題', 'href': f'gsat-exam/gsat-past-exam-all.html?v={V}'},
    'years': cards,
}
open(os.path.join(OUT, 'exam-board-data.js'), 'w', encoding='utf-8').write('// Auto-generated by tools/exam_build.py\nwindow.GSAT_EXAM_BOARD=' + dump(board) + ';\n')
print('pages', len(YEARS) + 1, 'questions', total)
