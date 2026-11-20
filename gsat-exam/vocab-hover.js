// vocab-hover.js — underline every Level 3–6 word in the quiz text (question, options, wrong-answer list)
// and show a hover/tap card: word · pos · level · 中譯 · 🔊 · 🗂 flashcard link. Data comes from lexicon.js
// (window.GSAT_LEX = { w: base -> [zone, unit, pos, zh, en, level, isHead], f: inflected -> base }).
(function () {
  const LEX = window.GSAT_LEX; if (!LEX) return;
  const ROOT = new URL('../', document.currentScript ? document.currentScript.src : location.href).href; // site root
  const TOKEN = /[A-Za-z][A-Za-z'’-]*[A-Za-z]|[A-Za-z]/g;
  const SKIP = new Set(['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA', 'BUTTON', 'A']);

  function baseOf(tok) {
    const t = tok.toLowerCase();
    if (LEX.w[t]) return t;
    const b = LEX.f[t];
    return b && LEX.w[b] ? b : null;
  }

  function wrap(node) {
    const text = node.nodeValue;
    if (!text || !/[A-Za-z]{3}/.test(text)) return;
    let last = 0, m, frag = null;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(text))) {
      const tok = m[0];
      if (tok.length < 3) continue;
      const base = baseOf(tok);
      if (!base) continue;
      if (!frag) frag = document.createDocumentFragment();
      if (m.index > last) frag.append(text.slice(last, m.index));
      const span = document.createElement('span');
      span.className = 'gw gw-l' + LEX.w[base][5];
      span.dataset.base = base;
      span.textContent = tok;
      frag.append(span);
      last = m.index + tok.length;
    }
    if (!frag) return;
    if (last < text.length) frag.append(text.slice(last));
    node.parentNode.replaceChild(frag, node);
  }

  function mark(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        for (let p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (SKIP.has(p.nodeName) || p.classList.contains('gw')) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(wrap);
  }

  // ---------- card ----------
  const card = document.createElement('div');
  card.className = 'gw-card';
  card.hidden = true;
  card.innerHTML = '<div class="gw-head"><b class="gw-word"></b><span class="gw-pos"></span><span class="gw-lv"></span><button type="button" class="gw-speak" title="發音">🔊</button></div><p class="gw-zh"></p><p class="gw-en"></p><div class="gw-foot"><a class="gw-link" target="_blank" rel="noopener">🗂 字卡＋例句 →</a><span class="gw-form"></span></div>';
  document.body.append(card);
  let current = null, hideTimer = null, speakTimer = null;

  function speak(word) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  function pageFor(zone, unit) {
    // l4-unit12.html / t5-unit4.html — same naming for every zone on this site
    return ROOT + zone + '-unit' + unit + '.html';
  }

  function show(span) {
    const base = span.dataset.base, e = LEX.w[base];
    if (!e) return;
    clearTimeout(hideTimer);
    current = span;
    card.querySelector('.gw-word').textContent = base;
    card.querySelector('.gw-pos').textContent = e[2];
    const lv = card.querySelector('.gw-lv');
    lv.textContent = 'Level ' + e[5] + (e[6] ? '' : '（詞族）');
    lv.className = 'gw-lv gw-lv' + e[5];
    card.querySelector('.gw-zh').textContent = e[3];
    card.querySelector('.gw-en').textContent = e[4] || '';
    card.querySelector('.gw-link').href = pageFor(e[0], e[1]) + '#w=' + encodeURIComponent(base);
    const form = span.textContent.toLowerCase();
    card.querySelector('.gw-form').textContent = form !== base ? '文中：' + span.textContent : '';
    card.hidden = false;
    document.querySelectorAll('.gw.gw-active').forEach(el => el.classList.remove('gw-active'));
    span.classList.add('gw-active');
    // position: below the word, kept inside the viewport
    const r = span.getBoundingClientRect(), cw = card.offsetWidth, ch = card.offsetHeight;
    let left = Math.min(Math.max(8, r.left), window.innerWidth - cw - 8);
    let top = r.bottom + 8;
    if (top + ch > window.innerHeight - 8) top = Math.max(8, r.top - ch - 8);
    card.style.left = left + 'px'; card.style.top = top + 'px';
  }

  function hide() {
    card.hidden = true; current = null; clearTimeout(speakTimer);
    document.querySelectorAll('.gw.gw-active').forEach(el => el.classList.remove('gw-active'));
  }
  function hideSoon() { clearTimeout(hideTimer); hideTimer = setTimeout(hide, 220); }

  document.addEventListener('pointerover', ev => {
    const span = ev.target.closest && ev.target.closest('.gw');
    if (!span || ev.pointerType !== 'mouse') return;
    show(span);
    clearTimeout(speakTimer);
    speakTimer = setTimeout(() => speak(span.dataset.base), 250);
  });
  document.addEventListener('pointerout', ev => {
    const span = ev.target.closest && ev.target.closest('.gw');
    if (!span || ev.pointerType !== 'mouse') return;
    clearTimeout(speakTimer);
    hideSoon();
  });
  card.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  card.addEventListener('pointerleave', hideSoon);
  // touch / pen / keyboard: tap a word to open its card, tap again (or elsewhere) to close
  document.addEventListener('click', ev => {
    const span = ev.target.closest && ev.target.closest('.gw');
    if (span) {
      if (current === span && !card.hidden) { hide(); return; }
      show(span);
      return;
    }
    if (!card.contains(ev.target)) hide();
  });
  card.querySelector('.gw-speak').addEventListener('click', ev => { ev.stopPropagation(); if (current) speak(current.dataset.base); });
  window.addEventListener('scroll', hide, { passive: true });
  window.addEventListener('keydown', ev => { if (ev.key === 'Escape') hide(); });

  // ---------- watch the quiz areas ----------
  const targets = ['#question', '#answerArea', '#wrongList'].map(s => document.querySelector(s)).filter(Boolean);
  const obs = new MutationObserver(muts => {
    const roots = new Set();
    muts.forEach(m => { const t = targets.find(r => r.contains(m.target)); if (t) roots.add(t); });
    roots.forEach(r => { obs.disconnect(); mark(r); observeAll(); });
  });
  function observeAll() { targets.forEach(t => obs.observe(t, { childList: true, characterData: true, subtree: true })); }
  targets.forEach(mark);
  observeAll();
})();
