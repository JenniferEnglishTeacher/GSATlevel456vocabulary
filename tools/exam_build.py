#!/usr/bin/env python3
"""Build the past-exam MCQ pages: 學測 (gsat-exam/) and 國中會考 (cap-exam/).

Inputs
  tools/exam/questions.json      學測 97–115: {year: [ {num, section, stem | group+passage(+prompt), options, answer, explanation, image?} ]}
  tools/exam/cap-questions.json  會考 105–115, same shape (sections 單題 / 克漏字)
  *-dashboard-data.js            the site's word data, for the hover lexicon

Outputs (per dataset)
  <dir>/<slug>-<year>.html, <dir>/<slug>-all.html, <dir>/lexicon.js, <dir>/exam-board-data.js
  shared quiz engine files (quiz.js/quiz.css/mistake-kit.js/vocab-hover.*) live in gsat-exam/

Run from the repo root:  python3 tools/exam_build.py
"""
import json, os, re, html, glob, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
V = '20261120-7'
LABELS = 'ABCDEFGHIJ'
SECTION_HINT = {'綜合測驗': '請選出 __{n}__ 的最佳答案', '克漏字': '請選出 __{n}__ 的最佳答案',
                '文意選填': '請從 (A)–(J) 選出最適合 __{n}__ 的字（每個選項只用一次）', '篇章結構': '請選出最適合放入 __{n}__ 的句子'}

def dump(o): return json.dumps(o, ensure_ascii=False)
def load_js(path):
    s = open(path, encoding='utf-8').read()
    return json.loads(s[s.find('=') + 1:].strip().rstrip(';'))

# ---------------------------------------------------------------- word data (shared)
ZONE_WORDS = {}
def zone_words(zone):
    if zone in ZONE_WORDS: return ZONE_WORDS[zone]
    out = []
    for u in load_js(os.path.join(ROOT, f'{zone}-dashboard-data.js')):
        for c in u['cards']:
            if ' ' in c['w']: continue
            out.append((c['w'].lower(), {'zone': zone, 'unit': u['unit'], 'pos': c['p'], 'zh': c['c'], 'en': c['d'], 'head': 1 if c.get('h') else 0}))
    ZONE_WORDS[zone] = out
    return out
T_ZONES = sorted((os.path.basename(f).split('-')[0] for f in glob.glob(os.path.join(ROOT, 't*-dashboard-data.js'))), key=lambda z: int(z[1:]) if z[1:].isdigit() else 999)
T_ZONES = [z for z in T_ZONES if re.fullmatch(r't\d+', z)]

IRREGULAR = {
 'arose':'arise','arisen':'arise','bore':'bear','borne':'bear','bound':'bind','bred':'breed','burst':'burst','cast':'cast','clung':'cling','crept':'creep',
 'dealt':'deal','dug':'dig','fed':'feed','fled':'flee','flung':'fling','forbade':'forbid','forbidden':'forbid','foresaw':'foresee','foreseen':'foresee',
 'froze':'freeze','frozen':'freeze','ground':'grind','hid':'hide','hidden':'hide','knelt':'kneel','laid':'lay','lain':'lie','leapt':'leap','lent':'lend','lit':'light',
 'misled':'mislead','mistook':'mistake','mistaken':'mistake','overcame':'overcome','overthrew':'overthrow','overthrown':'overthrow','overtook':'overtake','overtaken':'overtake',
 'proven':'prove','quit':'quit','rid':'rid','rode':'ride','ridden':'ride','rang':'ring','rung':'ring','rose':'rise','risen':'rise','sank':'sink','sunk':'sink','sought':'seek',
 'shed':'shed','shone':'shine','shook':'shake','shaken':'shake','shrank':'shrink','shrunk':'shrink','slid':'slide','slain':'slay','sown':'sow','spat':'spit','split':'split',
 'sprang':'spring','sprung':'spring','spun':'spin','stank':'stink','stuck':'stick','stung':'sting','strove':'strive','struck':'strike','strung':'string','swept':'sweep',
 'swollen':'swell','swore':'swear','sworn':'swear','swung':'swing','thrust':'thrust','trod':'tread','undergone':'undergo','underwent':'undergo','undertook':'undertake',
 'undertaken':'undertake','upheld':'uphold','withdrew':'withdraw','withdrawn':'withdraw','withheld':'withhold','withstood':'withstand','wove':'weave','woven':'weave',
 'wept':'weep','wound':'wind','wrung':'wring','spread':'spread','bet':'bet','bid':'bid','leant':'lean',
 'ate':'eat','eaten':'eat','began':'begin','begun':'begin','bit':'bite','bitten':'bite','blew':'blow','blown':'blow','broke':'break','broken':'break','brought':'bring',
 'built':'build','bought':'buy','caught':'catch','chose':'choose','chosen':'choose','came':'come','did':'do','done':'do','drew':'draw','drawn':'draw',
 'drank':'drink','drunk':'drink','drove':'drive','driven':'drive','fell':'fall','fallen':'fall','felt':'feel','fought':'fight','found':'find','flew':'fly','flown':'fly',
 'forgot':'forget','forgotten':'forget','got':'get','gotten':'get','gave':'give','given':'give','went':'go','gone':'go','grew':'grow','grown':'grow','hung':'hang',
 'heard':'hear','held':'hold','kept':'keep','knew':'know','known':'know','led':'lead','lost':'lose','made':'make','meant':'mean','met':'meet',
 'paid':'pay','ran':'run','said':'say','saw':'see','seen':'see','sold':'sell','sent':'send','shot':'shoot','sang':'sing',
 'sung':'sing','sat':'sit','slept':'sleep','spoke':'speak','spoken':'speak','spent':'spend','stood':'stand','stole':'steal','stolen':'steal','swam':'swim','swum':'swim',
 'took':'take','taken':'take','taught':'teach','tore':'tear','torn':'tear','told':'tell','thought':'think','threw':'throw','thrown':'throw','understood':'understand',
 'woke':'wake','woken':'wake','wore':'wear','worn':'wear','won':'win','wrote':'write','written':'write',
 'children':'child','feet':'foot','teeth':'tooth','mice':'mouse','men':'man','women':'woman','geese':'goose','leaves':'leaf','knives':'knife','wolves':'wolf','lives':'life','halves':'half','shelves':'shelf','thieves':'thief','wives':'wife',
}
CONS = 'bcdfghjklmnpqrstvwxz'
def candidates(tok):
    t = tok.lower()
    yield t, None
    if t in IRREGULAR: yield IRREGULAR[t], None
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
    p = entry['pos']
    if fam is None: return True
    if fam == 'v': return 'v.' in p
    if fam == 'nv': return 'n.' in p or 'v.' in p
    if fam == 'a': return 'adj.' in p
    return True

TOKEN = re.compile(r"[A-Za-z][A-Za-z'’-]*[A-Za-z]|[A-Za-z]")

FUNC_POS = re.compile(r'^(?:\s*(?:pron|conj|prep|art|aux|det|interrog)\.\s*/?)+$')
STOP = set('''be am is are was were been being have has had do does did done get gets got make makes made go goes went gone come comes came take took
say says said see saw seen know knew think thought want like look give gave use find found tell told put let keep thing things way time times day days
people person man men woman women boy girl good very really also just more most much many lot lots one two three first last new old big small little own
other another same next year years can will would could may might must shall should not now then here there when what who how why where which this that
these those yes okay ok mr mrs ms dear hi hello please thank thanks everyone everything someone something anyone anything nothing every each some any all
both such only even still again back well too so than about over after before into out off away down around
he she it we they you me him her us them my your his its our their mine yours ours myself yourself himself herself
four five six seven eight nine ten eleven twelve twenty hundred thousand million second third'''.split())

def build_lexicon(levels, corpus, out_path, content_only=False):
    """levels: [(level_code, [zones], head_only)] in priority order; level_code -> css class gw-l<code> and the card badge."""
    full = {}
    for prio, (code, zones, head_only) in enumerate(levels):
        for zone in zones:
            for w, e in zone_words(zone):
                if head_only and not e['head']: continue
                if w not in full:
                    full[w] = dict(e, lv=code, prio=prio, head=1 if not head_only else e['head'])
                elif full[w]['prio'] == prio and full[w]['zone'] == e['zone'] and full[w]['unit'] == e['unit']:
                    f = full[w]
                    if e['pos'] not in f['pos'].split(' / '): f['pos'] += ' / ' + e['pos']
                    if e['zh'] not in f['zh']: f['zh'] += '；' + e['zh']
    for code, zones, head_only in levels:  # word-family entries of the head-only zones come last
        if not head_only: continue
        for zone in zones:
            for w, e in zone_words(zone):
                if not e['head'] and w not in full: full[w] = dict(e, lv=code, prio=99)
    def resolve(tok):
        for cand, fam in candidates(tok):
            e = full.get(cand)
            if e and pos_ok(e, fam): return cand
        return None
    words, forms = {}, {}
    for text in corpus:
        for m in TOKEN.finditer(text):
            tok = m.group(0)
            if len(tok) < 3: continue
            base = resolve(tok)
            if not base: continue
            e = full[base]
            if content_only and (base in STOP or FUNC_POS.match(e['pos'])): continue
            words[base] = [e['zone'], e['unit'], e['pos'], e['zh'], e['en'], e['lv'], e['head']]
            if tok.lower() != base: forms[tok.lower()] = base
    open(out_path, 'w', encoding='utf-8').write(
        '// Auto-generated by tools/exam_build.py — words from this site\'s word lists that occur in the exam pages.\n'
        '// w: base word -> [zone, unit, pos, 中譯, English, level, isHead]; f: inflected form -> base word\n'
        'window.GSAT_LEX=' + dump({'w': words, 'f': forms}) + ';\n')
    return len(words), collections.Counter(v[5] for v in words.values())

# ---------------------------------------------------------------- pages
def qtext(it):
    if it.get('stem') is not None:
        return f"第 {it['num']} 題　{it['stem']}"
    if it['section'] == '閱讀測驗':
        return f"【閱讀測驗 第 {it['group']} 題】\n{it['passage']}\n\n▶ 第 {it['num']} 題　{it['prompt']}"
    hint = SECTION_HINT.get(it['section'], '請選出 __{n}__ 的最佳答案').format(n=it['num'])
    return f"【{it['section']} 第 {it['group']} 題】\n{it['passage']}\n\n▶ 第 {it['num']} 題　{hint}"

def counts(items):
    c = collections.OrderedDict()
    for it in items: c[it['section']] = c.get(it['section'], 0) + 1
    return c
def count_text(c, sep='＋'): return sep.join(f"{k} {v}" for k, v in c.items())

HEAD = '''<!doctype html>
<html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{desc}"><title>{title}</title><link rel="stylesheet" href="{shared}quiz.css?v=20261027-2"><link rel="stylesheet" href="{shared}vocab-hover.css?v={v}"><style>.explain{{white-space:pre-line}}.question{{font-size:19px;font-weight:600;line-height:1.65}}.options:has(.option:nth-child(7)){{grid-template-columns:1fr 1fr}}@media(max-width:600px){{.options:has(.option:nth-child(7)){{grid-template-columns:1fr}}}}</style></head><body>
<main class="wrap"><header class="hero"><a class="btn" href="../index.html#{zone}">← 回到 Vocabulary Board</a><h1 id="title">{title}</h1><p id="description" class="note"></p><p class="note gw-legend">{legend}</p></header>
<section id="select" class="card"><h2>選擇題目</h2><div class="toolbar"><button id="all" class="btn" type="button">全選</button><button id="none" class="btn" type="button">取消全選</button><button id="random" class="btn" type="button">隨機 20 題</button><span id="picked" class="note"></span></div><div id="list"></div><label class="pick"><input id="shuffle" type="checkbox"> 隨機排列題目</label><button id="start" class="btn primary" type="button">開始測驗 →</button></section>
<section id="quiz" class="card hidden"><div class="progress"><div id="bar" class="bar"></div></div><div class="meta"><span id="meta"></span><span id="wrongCount"></span></div><div id="zh" class="zh hidden"></div><div id="question" class="question"></div><div id="answerArea"></div><div id="feedback" class="feedback hidden" aria-live="polite"></div><div class="actions"><button id="check" class="btn primary" type="button">檢查答案</button><button id="next" class="btn primary hidden" type="button">下一題 →</button><button id="finish" class="btn danger" type="button">結束練習</button></div></section>
<section id="result" class="card hidden"><h2>練習結果</h2><div id="summary" class="summary"></div><h2>錯題紀錄</h2><div id="wrongList"></div><div class="actions"><button id="retry" class="btn primary" type="button">重做錯題</button><button id="download" class="btn" type="button">下載 DOCX 錯題</button><button id="restart" class="btn" type="button">重新選題</button></div></section></main>
'''
IMG_SCRIPT = ('<script>(function(){var M={};window.QUIZ_CONFIG.questions.forEach(function(q){if(q.image)M[q.question]=q.image});'
              'var qn=document.getElementById("question");if(!qn)return;function put(){var old=document.getElementById("gsatImg");var src=M[qn.textContent];'
              'if(old&&old.dataset.src===src)return;if(old)old.remove();if(!src)return;var im=document.createElement("img");im.id="gsatImg";im.dataset.src=src;im.src=src;im.alt="題目圖片";'
              'im.style.cssText="display:block;max-width:100%;max-height:520px;margin:10px auto;border:1px solid #dbe3ee;border-radius:10px;background:#fff";qn.insertAdjacentElement("afterend",im)}'
              'new MutationObserver(put).observe(qn,{childList:true,characterData:true,subtree:true});})();</script>')
TAIL = '''<script src="{shared}quiz.js?v=20261106-3"></script><script>document.querySelector("#description").textContent={desc_js};</script><script src="lexicon.js?v={v}"></script><script src="{shared}vocab-hover.js?v={v}"></script><script src="/high-school-blank-translation-quiz/quiz-result-recorder.js?v=20261027-1" defer></script></body></html>
'''

def build_dataset(cfg):
    Q = json.load(open(os.path.join(ROOT, cfg['source']), encoding='utf-8'))
    years = sorted((int(y) for y in Q), reverse=True)
    out_dir = os.path.join(ROOT, cfg['dir']); os.makedirs(out_dir, exist_ok=True)
    shared = cfg['shared']
    def build_questions(y, section_by_year=False):
        out = []
        for it in Q[str(y)]:
            out.append({
                'id': it['num'], 'question': qtext(it), 'options': it['options'],
                'answer': LABELS.index(it['answer']), 'answerLabel': it['answer'],
                'source': f"{y} {cfg['exam']}｜{it['section']}｜第 {it['num']} 題",
                'explanation': it['explanation'], 'explanationSource': 'own',
                'section': f'{y}年' if section_by_year else it['section'],
                **({'image': it['image'] + '?v=' + V} if it.get('image') else {}),
            })
        return out
    cards, grand = [], collections.OrderedDict()
    for y in years:
        qs = build_questions(y); c = counts(Q[str(y)])
        for k, v in c.items(): grand[k] = grand.get(k, 0) + v
        title = f"{y} 年{cfg['title']}｜" + '＋'.join(c)
        desc = f"{y} 年{cfg['title']}：{count_text(c)}｜共 {len(qs)} 題｜單選｜附中文解析｜{cfg['legend_short']}｜可隨機 20 題、隨時結束並下載 DOCX 錯題"
        page = (HEAD.format(title=title, desc=html.escape(desc), v=V, shared=shared, zone=cfg['zone'], legend=cfg['legend'])
                + '<script>window.QUIZ_CONFIG=' + dump({'title': title, 'mode': 'mcq', 'questions': qs}) + ';</script>' + IMG_SCRIPT + TAIL.format(desc_js=dump(desc), v=V, shared=shared))
        open(os.path.join(out_dir, f"{cfg['slug']}-{y}.html"), 'w', encoding='utf-8').write(page)
        cards.append({'title': f"{y} 年{cfg['title']}", 'sub': f'{count_text(c)}｜共 {len(qs)} 題｜附中文解析', 'href': f"{cfg['dir']}/{cfg['slug']}-{y}.html?v={V}", 'year': y})
    all_qs, passages, n = [], {}, 0
    for y in years:
        qs = build_questions(y, section_by_year=True)
        for q, it in zip(qs, Q[str(y)]):
            n += 1; q['id'] = n
            if it.get('passage'):
                key = f"{y}-{it['group']}"; passages[key] = it['passage']
                q['question'] = q['question'].replace(it['passage'], f'@@{key}@@')
        all_qs += qs
    total = len(all_qs)
    title = f"{cfg['title']}歷屆試題｜{years[-1]}–{years[0]} 年選擇題"
    desc = f"{years[-1]}–{years[0]} 年共 {len(years)} 屆：{count_text(grand)}｜可選單一年度／隨機 20 題／全部｜附中文解析｜{cfg['legend_short']}｜隨時結束並下載 DOCX 錯題"
    expand = ('<script>(function(){var P=window.GSAT_PASSAGES||{};window.QUIZ_CONFIG.questions.forEach(function(q){'
              'q.question=q.question.replace(/@@([^@]+)@@/g,function(m,k){return P[k]||m});});})();</script>')
    page = (HEAD.format(title=title, desc=html.escape(desc), v=V, shared=shared, zone=cfg['zone'], legend=cfg['legend'])
            + '<script>window.GSAT_PASSAGES=' + dump(passages) + ';window.QUIZ_CONFIG=' + dump({'title': title, 'mode': 'mcq', 'questions': all_qs}) + ';</script>'
            + expand + IMG_SCRIPT + TAIL.format(desc_js=dump(desc), v=V, shared=shared))
    open(os.path.join(out_dir, f"{cfg['slug']}-all.html"), 'w', encoding='utf-8').write(page)
    board = {
        'title': f"{cfg['title']}歷屆試題 {years[-1]}–{years[0]} 年",
        'blurb': f"{len(years)} 個年度｜{total} 題（{count_text(grand, '、')}）｜附中文解析｜{cfg['legend_short']}｜隨時結束並下載 DOCX 錯題",
        'all': {'title': f'🧩 {years[-1]}–{years[0]} 年全部綜合練習', 'sub': f'{total} 題｜可選單一年度／隨機 20 題／全部｜隨時結束→下載 DOCX 錯題', 'href': f"{cfg['dir']}/{cfg['slug']}-all.html?v={V}"},
        'years': cards,
    }
    open(os.path.join(out_dir, 'exam-board-data.js'), 'w', encoding='utf-8').write(f"// Auto-generated by tools/exam_build.py\nwindow.{cfg['global']}=" + dump(board) + ';\n')
    corpus = []
    for y in years:
        for it in Q[str(y)]:
            corpus += [it.get('stem') or '', it.get('passage') or '', it.get('prompt') or ''] + it['options']
    nwords, by = build_lexicon(cfg['levels'], corpus, os.path.join(out_dir, 'lexicon.js'), cfg.get('content_only', False))
    print(cfg['dir'], 'pages', len(years) + 1, 'questions', total, 'lexicon', nwords, dict(by))

GSAT = {
    'source': 'tools/exam/questions.json', 'dir': 'gsat-exam', 'slug': 'gsat-past-exam', 'shared': '', 'zone': 'x', 'global': 'GSAT_EXAM_BOARD',
    'exam': '學測', 'title': '學測英文',
    'legend': '文中 <span class="gw gw-l3">Level 3</span> <span class="gw gw-l4">Level 4</span> <span class="gw gw-l5">Level 5</span> <span class="gw gw-l6">Level 6</span> 的學測單字會標示底線：滑過／點一下可聽發音、看詞性與中譯，再點「🗂 字卡」看例句。',
    'legend_short': 'Level 3–6 單字滑過即看中譯與字卡',
    'levels': [('4', ['l4'], True), ('5', ['l5'], True), ('6', ['l6'], True), ('3', T_ZONES, False)],
}
CAP = {
    'source': 'tools/exam/cap-questions.json', 'dir': 'cap-exam', 'slug': 'cap-past-exam', 'shared': '../gsat-exam/', 'zone': 'xc', 'global': 'CAP_EXAM_BOARD',
    'exam': '會考', 'title': '國中會考英語',
    'legend': '文中 <span class="gw gw-lj">基礎2000字</span> <span class="gw gw-lh">進階800字</span> <span class="gw gw-l3">Level 3</span> <span class="gw gw-l4">Level 4</span> 的單字會標示底線：滑過／點一下可聽發音、看詞性與中譯，再點「🗂 字卡」看例句。',
    'legend_short': '國中2000字／進階800／Level 3–4 單字滑過即看中譯與字卡',
    'levels': [('j', ['j'], False), ('h', ['h'], False), ('3', T_ZONES, False), ('4', ['l4'], True)],
    'content_only': True,  # mark only content words (nouns/verbs/adj/adv), skip function words and very common light words
}
if __name__ == '__main__':
    build_dataset(GSAT)
    build_dataset(CAP)
