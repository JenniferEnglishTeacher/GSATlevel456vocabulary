// 搭配詞 Collocations — shared page engine for every {zone}-unit{N}.html page.
// Data (also the 會考片語 zones from tools/jphrase_emit.py): window.COLLOC_UNIT = { zone, unit, units, title, items: [{ w, zh, h, lv, ty, q, o[4], a, oi[4], s?, sq?, st? }] }
// Tabs: 🗂 list (🔊 + ★ review) and 📝 MCQ. #quiz / #test open the MCQ; #w=<phrase> jumps to a phrase.
// A finished MCQ round is sent to the teacher's sheet through tracker.js (GsatTracker.logTest).
(function () {
  const D = window.COLLOC_UNIT;
  const Z = (window.VOCAB_ZONES || {})[D.zone] || { name: "搭配詞", short: "", prefix: D.zone, levelLabel: D.zone, tag: D.zone };
  const STORE_KEY = "gsat456-review-list";
  const app = document.querySelector("#app");
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const keyOf = i => `${Z.prefix}-${D.unit}:${i}`;
  const BLANK = "＿＿＿＿＿";

  // ---------- speech ----------
  let voice = null;
  function pickVoice() {
    const vs = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
    voice = vs.find(v => /en[-_]US/i.test(v.lang) && /Samantha|Google US|Aria|Jenny|Zira/i.test(v.name)) || vs.find(v => /^en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  }
  if (window.speechSynthesis) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/…|\.\.\./g, " ").replace(/_{2,}|＿+/g, " … ").replace(/\bsb\b/g, "somebody").replace(/\bsth\b/g, "something"));
    u.lang = "en-US"; u.rate = 0.9;
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  const say = (text, cls = "cx-say") => `<button type="button" class="${cls}" data-say="${esc(text)}" title="Listen 聆聽" aria-label="Listen">🔊</button>`;
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-say]");
    if (b) { e.preventDefault(); speak(b.dataset.say); }
  });

  // ---------- ★ review list (same store as the dashboard) ----------
  const readMarked = () => { try { const v = JSON.parse(localStorage.getItem(STORE_KEY) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
  function toggleMark(key) {
    let m = readMarked();
    m = m.includes(key) ? m.filter(k => k !== key) : [...m, key];
    try { localStorage.setItem(STORE_KEY, JSON.stringify(m)); } catch (e) { /* storage blocked */ }
    if (window.GsatTracker) window.GsatTracker.reviewChanged();
    return m.includes(key);
  }

  // ---------- shell ----------
  const prev = D.unit > 1 ? `${D.zone}-unit${D.unit - 1}.html` : "";
  const next = D.unit < D.units ? `${D.zone}-unit${D.unit + 1}.html` : "";
  app.innerHTML = `
    <a class="cx-home" href="index.html#${esc(D.zone)}">← Vocabulary Board 回單字總表</a>
    <header class="cx-top">
      <p class="cx-kicker">${esc(Z.name)}</p>
      <h1>Unit ${D.unit} · ${esc(D.title)}</h1>
      <p class="cx-sub">${D.items.length} 組搭配詞 collocations · <span data-tracker-box hidden>👤 <b data-tracker-name>—</b> <button type="button" class="cx-link" data-tracker-change>change 更改</button></span></p>
      <nav class="cx-tabs">
        <button type="button" data-tab="list">🗂 搭配詞表 List</button>
        <button type="button" data-tab="quiz">📝 MCQ 選擇題</button>
      </nav>
    </header>
    <section id="cx-list" hidden></section>
    <section id="cx-quiz" hidden></section>
    <nav class="cx-pager">${prev ? `<a href="${prev}">← Unit ${D.unit - 1}</a>` : "<span></span>"}${next ? `<a href="${next}">Unit ${D.unit + 1} →</a>` : "<span></span>"}</nav>`;
  const listEl = app.querySelector("#cx-list");
  const quizEl = app.querySelector("#cx-quiz");
  function show(tab) {
    listEl.hidden = tab !== "list";
    quizEl.hidden = tab !== "quiz";
    app.querySelectorAll("[data-tab]").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
    if (tab === "quiz" && !quiz.started) startQuiz(D.items.map((_, i) => i));
  }
  app.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => { history.replaceState(null, "", b.dataset.tab === "quiz" ? "#quiz" : "#list"); show(b.dataset.tab); }));

  // ---------- list ----------
  const hl = it => {
    const i = it.q.indexOf(BLANK);
    const ans = it.pa || it.o[it.a];
    return i < 0 ? esc(it.w) : `${esc(it.q.slice(0, i))}<mark>${esc(ans)}</mark>${esc(it.q.slice(i + BLANK.length))}`;
  };
  function renderList() {
    const marked = new Set(readMarked());
    let lastHead = "";
    listEl.innerHTML = `<p class="cx-hint">🔊 聽發音 · ☆ 點星號加入複習清單（會出現在單字總表的 ★ 清單與 🎮 Test my words）</p>` + D.items.map((it, i) => {
      const head = it.h !== lastHead ? `<h3 class="cx-head">${esc(it.h)} <small>${esc(it.ty)}${it.lv && it.lv !== "—" ? ` · L${esc(it.lv)}` : ""}</small></h3>` : "";
      lastHead = it.h;
      const sent = it.s ? `<p class="cx-sent">${say(it.s)} ${esc(it.s)}<br><span>${esc(it.st)}</span></p>` : "";
      return `${head}<div class="cx-row" id="cx-r${i}">
        <button type="button" class="cx-star${marked.has(keyOf(i)) ? " on" : ""}" data-star="${i}" title="Review list 複習清單">${marked.has(keyOf(i)) ? "★" : "☆"}</button>
        ${say(it.w)}
        <div><p class="cx-phr">${hl(it)}</p><p class="cx-zh">${esc(it.zh)}</p>${sent}</div>
      </div>`;
    }).join("");
    listEl.querySelectorAll("[data-star]").forEach(b => b.addEventListener("click", () => {
      const on = toggleMark(keyOf(Number(b.dataset.star)));
      b.classList.toggle("on", on);
      b.textContent = on ? "★" : "☆";
    }));
  }

  // ---------- quiz ----------
  const quiz = { started: false, order: [], pos: 0, score: 0, wrong: [], answered: false };
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function startQuiz(indexes) {
    Object.assign(quiz, { started: true, order: shuffle(indexes.slice()), pos: 0, score: 0, wrong: [], answered: false, retry: indexes.length !== D.items.length });
    renderQ();
  }
  function stemHtml(it, filled) {
    const text = it.sq || it.q;
    const i = text.indexOf(BLANK);
    const ans = it.o[it.a];
    const mid = filled ? `<mark class="cx-fill">${esc(ans)}</mark>` : `<span class="cx-blank">${BLANK}</span>`;
    if (i < 0) return esc(text) + (filled ? ` → <mark class="cx-fill">${esc(ans)}</mark>` : ""); // 例句有多個空格（會考片語）
    return `${esc(text.slice(0, i))}${mid}${esc(text.slice(i + BLANK.length))}`;
  }
  function renderQ() {
    const it = D.items[quiz.order[quiz.pos]];
    quiz.answered = false;
    const zh = it.s ? it.st : it.zh;
    quizEl.innerHTML = `
      <div class="cx-progress"><span>Question ${quiz.pos + 1} / ${quiz.order.length}</span><span>✔ ${quiz.score}</span></div>
      <div class="cx-bar"><i style="width:${(quiz.pos / quiz.order.length) * 100}%"></i></div>
      <div class="cx-card">
        <p class="cx-stem">${stemHtml(it, false)}</p>
        <p class="cx-stem-zh">${esc(zh)}</p>
        <div class="cx-opts">${it.o.map((o, k) => `<button type="button" class="cx-opt" data-k="${k}"><b>(${"ABCD"[k]})</b> ${esc(o)}</button>`).join("")}</div>
        <div class="cx-feedback" hidden></div>
      </div>`;
    quizEl.querySelectorAll(".cx-opt").forEach(b => b.addEventListener("click", () => choose(Number(b.dataset.k))));
  }
  function choose(k) {
    if (quiz.answered) return;
    quiz.answered = true;
    const idx = quiz.order[quiz.pos];
    const it = D.items[idx];
    const ok = k === it.a;
    if (ok) quiz.score++; else quiz.wrong.push(idx);
    quizEl.querySelectorAll(".cx-opt").forEach((b, j) => {
      b.disabled = true;
      if (j === it.a) b.classList.add("right");
      else if (j === k) b.classList.add("wrong");
    });
    quizEl.querySelector(".cx-stem").innerHTML = stemHtml(it, true);
    const fb = quizEl.querySelector(".cx-feedback");
    fb.hidden = false;
    const sent = it.s ? `<p class="cx-fb-sent">${say(it.s)} ${esc(it.s)}<br><span>${esc(it.st)}</span></p>` : "";
    fb.innerHTML = `
      <p class="cx-verdict ${ok ? "ok" : "no"}">${ok ? "✔ Correct! 答對了" : `✘ The answer is (${"ABCD"[it.a]}) ${esc(it.o[it.a])} 正確答案`}</p>
      <p class="cx-colloc">${say(it.w)} <b>${hl(it)}</b> <span>${esc(it.zh)}</span></p>
      ${sent}
      <ul class="cx-oi">${it.oi.map((o, j) => `<li class="${j === it.a ? "is-ans" : ""}">${say(it.o[j], "cx-say sm")}<b>(${"ABCD"[j]}) ${esc(it.o[j])}</b>${o.h && o.h.toLowerCase() !== it.o[j].toLowerCase() ? ` <small>← ${esc(o.h)}</small>` : ""} <i>${esc(o.p)}</i> ${o.d ? `<span class="en">${esc(o.d)}</span>` : ""} <span class="zh">${esc(o.c)}</span></li>`).join("")}</ul>
      <button type="button" class="cx-next">${quiz.pos + 1 < quiz.order.length ? "Next 下一題 →" : "See result 看成績"}</button>`;
    speak(it.s || it.w);
    fb.querySelector(".cx-next").addEventListener("click", () => {
      quiz.pos++;
      if (quiz.pos < quiz.order.length) renderQ(); else finish();
    });
  }
  function finish() {
    const total = quiz.order.length;
    const pct = Math.round((quiz.score / total) * 100);
    quizEl.innerHTML = `
      <div class="cx-card cx-result">
        <h2>${pct}% · ${quiz.score} / ${total}</h2>
        <p>${pct >= 90 ? "🌟 Excellent! 太棒了" : pct >= 70 ? "👍 Good job! 不錯喔" : "💪 Keep going! 再練習一次"}</p>
        ${quiz.wrong.length ? `<h3>Review 錯題（已自動加入 ★ 複習清單）</h3><ul class="cx-wrong">${quiz.wrong.map(i => `<li>${say(D.items[i].w, "cx-say sm")} <b>${hl(D.items[i])}</b> ${esc(D.items[i].zh)}</li>`).join("")}</ul>` : ""}
        <div class="cx-actions">
          ${quiz.wrong.length ? `<button type="button" data-act="wrong">Retry wrong 只練錯題 (${quiz.wrong.length})</button>` : ""}
          <button type="button" data-act="all">Try again 全部重做</button>
          ${next ? `<a href="${next}#quiz">Next unit 下一單元 →</a>` : ""}
        </div>
      </div>`;
    // wrong ones go on the ★ review list
    const m = new Set(readMarked());
    let changed = false;
    quiz.wrong.forEach(i => { if (!m.has(keyOf(i))) { m.add(keyOf(i)); changed = true; } });
    if (changed) { try { localStorage.setItem(STORE_KEY, JSON.stringify([...m])); } catch (e) { /* ignore */ } if (window.GsatTracker) window.GsatTracker.reviewChanged(); }
    if (window.GsatTracker) {
      window.GsatTracker.logTest({
        type: quiz.retry ? "Collocation MCQ (retry)" : "Collocation MCQ",
        level: Z.levelLabel, group: D.unit, total, correct: quiz.score,
        wrong: quiz.wrong.map(i => ({ w: D.items[i].w, key: keyOf(i) })),
        label: `${Z.short} Unit ${D.unit} ${D.title}`
      });
    }
    renderList();
    quizEl.querySelector('[data-act="all"]').addEventListener("click", () => startQuiz(D.items.map((_, i) => i)));
    const w = quizEl.querySelector('[data-act="wrong"]');
    if (w) w.addEventListener("click", () => startQuiz(quiz.wrong.slice()));
  }

  // ---------- start ----------
  renderList();
  const hash = decodeURIComponent(location.hash.slice(1));
  if (/^(quiz|test)$/.test(hash)) show("quiz");
  else {
    show("list");
    const m = /^w=(.+)$/.exec(hash);
    if (m) {
      const i = D.items.findIndex(it => it.w === m[1]);
      const row = i >= 0 && listEl.querySelector(`#cx-r${i}`);
      if (row) { row.classList.add("flash"); setTimeout(() => row.scrollIntoView({ block: "center" }), 50); }
    }
  }
})();
