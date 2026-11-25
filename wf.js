/* 詞類變化 Word Formation (book wordform, zone wf) — word-family cards + word-bank practice + quiz.
   wf-unit{u}.html loads wf-unit{u}-data.js (window.WF_UNIT) and wf-index.js (WF_META, WF_INDEX).
   Quiz: the student picks ✍️ 拼字 (type the right form) or 🔘 選擇題 (4 options). A finished quiz is sent to the
   teacher's sheet (tracker.js GsatTracker.logTest) and its wrong words go on the ★ review list (keys wf-<unit>:<card>).
   Built by tools/wordform/build.py from Jennifer's FCE word-formation page. */
(function () {
  "use strict";
  const K_PROG = "gsat-wf-progress";     // { "wf-3": best % }
  const K_DONE = "gsat-wf-practice";     // { itemId: 1 } — practice sentences answered right
  const REVIEW_KEY = "gsat456-review-list";
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const norm = s => String(s || "").trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ");
  const META = window.WF_META || [];
  const U = window.WF_UNIT;
  const ZONES = window.VOCAB_ZONES || {};
  const page = u => `wf-unit${u}.html`;
  const root = document.getElementById("wf-root");

  let voice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
    voice = vs.find(v => /en[-_]US/i.test(v.lang) && /Google|Samantha|Aria|Jenny|Natural/i.test(v.name)) || vs.find(v => /en[-_]US/i.test(v.lang)) || vs[0] || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); if (speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", pickVoice); }
  function speak(text, rate) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = rate || 0.88; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const sb = (text, label) => `<button type="button" class="cf-say" data-say="${esc(text)}" aria-label="${esc(label || "Listen")}">🔊</button>`;
  const lvTag = lv => lv ? `<span class="cf-lv lv${lv}" title="學測6000字 Level ${lv}">學測 L${lv}</span>` : "";
  const boldFull = it => esc(it.pre) + "<b>" + esc(it.ans[0]) + "</b>" + esc(it.post);
  const blankText = (it, inner) => `${esc(it.pre)}${inner} <span class="wf-stem">(${esc(it.stem)})</span>${esc(it.post)}`;
  const explain = it => `${it.t ? `<p class="cf-tr">${esc(it.t)}</p>` : ""}${it.tip ? `<p class="wf-tip"><span>考點</span>${esc(it.tip)}</p>` : ""}`;
  const isRight = (it, v) => !!norm(v) && it.ans.map(norm).includes(norm(v));

  // ---------- unit selector ----------
  function fillSelect(u) {
    const sel = document.getElementById("unitSelect");
    if (!sel) return;
    META.forEach(m => {
      const o = document.createElement("option");
      o.value = page(m.u); o.textContent = `Unit ${m.u} · ${m.title}`;
      if (m.u === u) o.selected = true;
      sel.append(o);
    });
    sel.addEventListener("change", () => { if (sel.value) location.href = sel.value; });
  }

  // ---------- family cards with word-bank practice ----------
  function memberCol(m) {
    const col = el("div", "cf-word wf-member");
    col.id = "w-" + m.w.toLowerCase();
    col.innerHTML = `
      <div class="cf-word-head"><h3>${esc(m.w)}</h3>${sb(m.w, "Listen: " + m.w)}<span class="cf-pos">${esc(m.pos)}</span>${lvTag(m.lv)}</div>
      <p class="cf-zh">${esc(m.zh)}</p>
      ${m.def ? `<p class="cf-def">${esc(m.def)}</p>` : ""}
      ${m.card ? `<div class="cf-links"><a href="${esc(m.card[1])}">🗂 ${esc(m.card[0])}</a></div>` : ""}`;
    return col;
  }
  function bankWords(F) {
    const seen = new Map();
    const add = w => { const k = norm(w); if (k && !seen.has(k)) seen.set(k, w.toLowerCase()); };
    F.members.forEach(m => add(m.w));
    F.items.forEach(it => { if (!it.ans.some(a => seen.has(norm(a)))) add(it.ans[0]); });
    return [...seen.values()].sort((a, b) => a.localeCompare(b));
  }
  function familyCard(F, fi) {
    const card = el("article", "cf-card wf-card");
    card.id = "f-" + F.fam;
    const done = load(K_DONE, {});
    const nDone = () => F.items.filter(it => load(K_DONE, {})[it.id]).length;
    const head = el("header", "cf-card-head", `<span class="cf-id">${fi + 1}</span><h2>${esc(F.fam)}</h2>${sb(F.members.map(m => m.w).join(", "), "Listen to all")}<span class="wf-count">${nDone()}/${F.items.length}</span>`);
    const grid = el("div", "cf-grid wf-members cols" + Math.min(F.members.length, 5));
    F.members.forEach(m => grid.append(memberCol(m)));
    const prac = el("div", "wf-practice");
    prac.innerHTML = `<p class="wf-prac-head">例句練習 Practice <span>先點字庫中的單字，再點空格（可再點空格清除）。</span></p>`;
    const bank = el("div", "wf-bank");
    bank.innerHTML = bankWords(F).map(w => `<button type="button" class="wf-chip" data-w="${esc(w)}">${esc(w)}</button>`).join("");
    prac.append(bank);
    let selWord = null, armed = null;
    const filled = {};
    const paint = () => {
      bank.querySelectorAll(".wf-chip").forEach(c => c.classList.toggle("sel", c.dataset.w === selWord));
      prac.querySelectorAll(".wf-blank").forEach(b => b.classList.toggle("armed", b.dataset.id === armed));
    };
    const display = (it, w) => it.ans[0][0] !== it.ans[0][0].toLowerCase() ? w[0].toUpperCase() + w.slice(1) : w;
    F.items.forEach((it, k) => {
      const q = el("div", "wf-pq");
      q.innerHTML = `<p class="wf-ps"><b class="wf-n">${k + 1}</b> ${blankText(it, `<button type="button" class="wf-blank" data-id="${esc(it.id)}" aria-label="Blank ${k + 1}">&nbsp;</button>`)}${done[it.id] ? ' <span class="wf-done" title="已答對">✓</span>' : ""}</p>
        <div class="wf-pact"><button class="secondary-button" type="button" data-check>Check 對答案</button><button class="secondary-button" type="button" data-show>Answer 看解答</button></div>
        <div class="cf-fb" hidden></div>`;
      const blank = q.querySelector(".wf-blank");
      const res = q.querySelector(".cf-fb");
      const fill = w => {
        blank.classList.remove("ok", "bad"); res.hidden = true;
        if (w == null) { delete filled[it.id]; blank.innerHTML = "&nbsp;"; blank.classList.remove("filled"); }
        else { filled[it.id] = display(it, w); blank.textContent = filled[it.id]; blank.classList.add("filled"); }
      };
      blank.addEventListener("click", () => {
        if (selWord) { fill(selWord); selWord = null; armed = null; }
        else if (filled[it.id]) { fill(null); armed = null; }
        else armed = armed === it.id ? null : it.id;
        paint();
      });
      blank._fill = fill;
      const check = reveal => {
        const ok = isRight(it, filled[it.id]);
        if (reveal && !ok) { filled[it.id] = it.ans[0]; blank.textContent = it.ans[0]; blank.classList.add("filled"); }
        blank.classList.toggle("ok", ok); blank.classList.toggle("bad", !ok && !reveal && !!filled[it.id]);
        res.hidden = false;
        res.className = "cf-fb " + (ok ? "ok" : reveal ? "shown" : "no");
        if (!ok && !reveal) { res.innerHTML = filled[it.id] ? "<strong>✗ Try again. 再想想看。</strong>" : "<strong>請先選字 Choose a word first.</strong>"; return; }
        res.innerHTML = `${ok ? "<strong>✓ Correct! 答對了</strong>" : `<strong>Answer 解答：${esc(it.ans.join(" / "))}</strong>`}<p>${boldFull(it)} ${sb(it.full, "Listen to the sentence")}</p>${explain(it)}`;
        if (ok) { const D = load(K_DONE, {}); D[it.id] = 1; save(K_DONE, D); head.querySelector(".wf-count").textContent = `${nDone()}/${F.items.length}`; }
      };
      q.querySelector("[data-check]").addEventListener("click", () => check(false));
      q.querySelector("[data-show]").addEventListener("click", () => check(true));
      prac.append(q);
    });
    bank.addEventListener("click", e => {
      const c = e.target.closest(".wf-chip");
      if (!c) return;
      speak(c.dataset.w);
      const w = c.dataset.w;
      if (armed) { const b = prac.querySelector(`.wf-blank[data-id="${CSS.escape(armed)}"]`); if (b) b._fill(w); armed = null; selWord = null; }
      else selWord = selWord === w ? null : w;
      paint();
    });
    card.append(head, grid, prac);
    return card;
  }

  // ---------- quiz ----------
  const reviewKey = it => `wf-${U.u}:${it.ci}`;
  function addToReview(items) {
    const list = load(REVIEW_KEY, []);
    const set = new Set(Array.isArray(list) ? list : []);
    let changed = false;
    items.forEach(it => { const k = reviewKey(it); if (!set.has(k)) { set.add(k); changed = true; } });
    if (changed) { save(REVIEW_KEY, [...set]); if (window.GsatTracker) window.GsatTracker.reviewChanged(); }
  }
  function meaningsOf(it) { // every option: 🔊 + POS + 中文 + English, shown after answering
    return `<ul class="cf-means">${it.ow.map(([w, pos, zh, def]) => `<li>${sb(w, "Listen: " + w)} <b>${esc(w)}</b> <span class="cf-pos">${esc(pos)}</span> ${esc(zh)} <span class="cf-muted">— ${esc(def)}</span></li>`).join("")}</ul>`;
  }
  function feedback(it, ok, label, withMeanings) {
    const fb = el("div", "cf-fb " + (ok ? "ok" : "no"));
    fb.innerHTML = `<strong>${label}</strong><p>${boldFull(it)} ${sb(it.full, "Listen to the sentence")}</p>${explain(it)}${withMeanings ? meaningsOf(it) : ""}<a href="${page(U.u)}#f=${encodeURIComponent(it.fam)}">看字族卡 →</a>`;
    return fb;
  }
  function mcqNode(it, onAnswer) {
    const box = el("div", "cf-q");
    box.innerHTML = `<p class="cf-q-meta">🔘 選擇題 · 字族 ${esc(it.fam)}</p><p class="cf-q-ask">選出正確的詞類變化：</p><p class="cf-q-text">${blankText(it, '<span class="cf-blank">_____</span>')}</p>`;
    const opts = el("div", "cf-opts");
    const order = shuffle(it.o.map((t, i) => i));
    order.forEach(i => {
      const b = el("button", "cf-opt", esc(it.o[i]));
      b.type = "button";
      b.addEventListener("click", () => {
        if (box.classList.contains("done")) return;
        box.classList.add("done");
        const ok = i === it.a;
        opts.querySelectorAll(".cf-opt").forEach(x => x.disabled = true);
        b.classList.add(ok ? "right" : "wrong");
        opts.children[order.indexOf(it.a)].classList.add("right");
        box.append(feedback(it, ok, ok ? "✓ 答對了 Correct!" : "✗ 正解：" + esc(it.ans.join(" / ")), true));
        speak(it.full);
        onAnswer(ok);
      });
      opts.append(b);
    });
    box.append(opts);
    return box;
  }
  function spellNode(it, onAnswer) {
    const box = el("div", "cf-q");
    box.innerHTML = `<p class="cf-q-meta">✍️ 拼字 · 字族 ${esc(it.fam)}</p><p class="cf-q-ask">打出括號中單字的正確詞類變化：</p>
      <p class="cf-q-text">${blankText(it, '<input class="wf-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer">')}</p>
      <div class="wf-pact"><button type="button" class="primary-button" data-go>送出 Check</button></div><div class="wf-slot"></div>`;
    const input = box.querySelector(".wf-input");
    const go = box.querySelector("[data-go]");
    const slot = box.querySelector(".wf-slot");
    let tries = 0, finished = false;
    function submit() {
      if (finished) return;
      const v = input.value;
      if (!norm(v)) { input.focus(); return; }
      tries++;
      const ok = isRight(it, v);
      if (ok || tries >= 2) {
        finished = true;
        input.disabled = true; go.disabled = true;
        input.classList.add(ok ? "ok" : "bad");
        slot.replaceChildren(feedback(it, ok, ok ? (tries === 1 ? "✓ 答對了 Correct!" : "✓ 這次拼對了！（第一次拼錯，記為答錯）") : "✗ 正解：" + esc(it.ans.join(" / ")), false));
        speak(it.full);
        onAnswer(ok && tries === 1);
        return;
      }
      // first miss: show the right spelling, then hide it for a second try
      input.classList.add("bad"); input.disabled = true; go.disabled = true;
      const show = el("div", "cf-fb no wf-peek", `<strong>✗ 正確拼法：<span class="wf-big">${esc(it.ans[0])}</span></strong> ${sb(it.ans[0])}<p>記住拼法後，按下面的按鈕再拼一次（答案會消失）。</p>`);
      const again = el("button", "secondary-button", "我記住了，再拼一次 Spell again");
      again.type = "button";
      again.addEventListener("click", () => {
        show.remove();
        input.value = ""; input.disabled = false; go.disabled = false; input.classList.remove("bad");
        input.focus();
      });
      show.append(again);
      slot.replaceChildren(show);
      again.focus();
    }
    go.addEventListener("click", submit);
    input.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); submit(); } });
    setTimeout(() => input.focus({ preventScroll: true }), 50);
    return box;
  }
  function runQuiz(host, items, opts) {
    let i = 0, right = 0;
    const wrongItems = [];
    host.replaceChildren();
    const bar = el("div", "cf-qbar");
    const stage = el("div", "cf-stage");
    host.append(bar, stage);
    const paintBar = () => { bar.innerHTML = `${opts.icon} ${opts.mode} · 第 ${Math.min(i + 1, items.length)} / ${items.length} 題 · 答對 ${right}`; };
    function next() {
      paintBar();
      stage.replaceChildren();
      if (i >= items.length) return finish();
      const it = items[i];
      const node = (opts.kind === "spell" ? spellNode : mcqNode)(it, ok => {
        if (ok) right++; else wrongItems.push(it);
        paintBar();
        const nb = el("button", "primary-button cf-next", i + 1 < items.length ? "下一題 Next →" : "看成績 Result");
        nb.type = "button";
        nb.addEventListener("click", () => { i++; next(); });
        node.append(nb);
        setTimeout(() => nb.focus({ preventScroll: true }), 30);
      });
      stage.append(node);
      node.scrollIntoView({ block: "nearest" });
    }
    function finish() {
      const pct = items.length ? Math.round(right * 100 / items.length) : 0;
      if (!opts.retry) { const P = load(K_PROG, {}); const k = `wf-${U.u}`; P[k] = Math.max(P[k] || 0, pct); save(K_PROG, P); }
      bar.innerHTML = "完成！";
      const end = el("div", "cf-end", `<h3>${right} / ${items.length} 題答對（${pct}%）</h3><p>${pct >= 90 ? "🌟 Excellent! 太棒了" : pct >= 70 ? "👍 Good job! 不錯喔" : "💪 Keep going! 再練習一次"}</p>`);
      if (wrongItems.length) {
        addToReview(wrongItems);
        end.append(el("p", null, "答錯的字（已加入 ★ 複習清單）：" + [...new Set(wrongItems.map(x => x.ans[0]))].map(esc).join("、")));
        const redo = el("button", "primary-button", `只重做錯的 ${wrongItems.length} 題`);
        redo.type = "button";
        redo.addEventListener("click", () => runQuiz(host, shuffle(wrongItems), Object.assign({}, opts, { retry: true })));
        end.append(redo);
      }
      const again = el("button", "secondary-button", "整份重做");
      again.type = "button";
      again.addEventListener("click", () => runQuiz(host, shuffle(opts.all), Object.assign({}, opts, { retry: false })));
      const other = el("button", "secondary-button", opts.kind === "spell" ? "改做 🔘 選擇題" : "改做 ✍️ 拼字");
      other.type = "button";
      other.addEventListener("click", () => startMode(opts.kind === "spell" ? "mcq" : "spell"));
      end.append(again, other);
      stage.append(end);
      if (window.GsatTracker && items.length) {
        window.GsatTracker.logTest({
          type: `Word formation ${opts.kind === "spell" ? "spelling 拼字" : "MCQ 選擇題"}${opts.retry ? " (retry)" : ""}`,
          level: (ZONES.wf || {}).levelLabel || "學測詞類變化",
          group: U.u,
          total: items.length, correct: right,
          wrong: wrongItems.map(x => ({ w: x.ans[0], key: reviewKey(x) })),
          label: `詞類變化 Unit ${U.u} ${U.title}（${opts.mode}）`
        });
      }
    }
    next();
  }

  // ---------- unit page ----------
  const ALL = [];
  let quizHost = null, quizSec = null;
  function startMode(kind) {
    showTab("quiz");
    const mode = kind === "spell" ? ["✍️", "拼字 Spelling"] : ["🔘", "選擇題 MCQ"];
    runQuiz(quizHost, shuffle(ALL), { kind, icon: mode[0], mode: mode[1], all: ALL });
    quizSec.scrollIntoView({ block: "start" });
  }
  function showTab(name) {
    document.querySelectorAll(".cf-tab").forEach(x => x.classList.toggle("active", x.dataset.tab === name));
    const isQuiz = name === "quiz";
    quizSec.hidden = !isQuiz;
    document.querySelector(".cf-cards").hidden = isQuiz;
    document.querySelector(".cf-jump").hidden = isQuiz;
  }
  function unitPage() {
    document.title = `詞類變化 Unit ${U.u} · ${U.title}`;
    fillSelect(U.u);
    U.fams.forEach(F => F.items.forEach(it => { it.fam = F.fam; ALL.push(it); }));
    root.replaceChildren();
    const idx = META.findIndex(m => m.u === U.u);
    const prev = META[idx - 1], next = META[idx + 1];
    const best = load(K_PROG, {})[`wf-${U.u}`];
    const intro = el("section", "cf-intro");
    intro.innerHTML = `
      <p><strong>詞類變化 Word Formation</strong> · Unit ${U.u}：${esc(U.title)} · ${U.fams.length} 個字族 · ${ALL.length} 題。先看字族卡、做例句練習，再做測驗（自己選拼字或選擇題）。答錯的字自動進 ★ 複習清單。${best != null ? ` · 最佳成績 <b>${best}%</b>` : ""}</p>
      <nav class="cf-tabs" role="tablist">
        <button type="button" class="cf-tab active" data-tab="cards">字族卡 Families</button>
        <button type="button" class="cf-tab" data-tab="quiz">測驗 Quiz</button>
      </nav>
      <div class="cf-pn">${prev ? `<a href="${page(prev.u)}">← Unit ${prev.u} · ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="${page(next.u)}">Unit ${next.u} · ${esc(next.title)} →</a>` : ""}</div>`;
    const jump = el("nav", "cf-jump");
    const cards = el("section", "cf-cards");
    U.fams.forEach((F, i) => {
      cards.append(familyCard(F, i));
      const a = el("a", null, esc(F.fam)); a.href = "#f=" + encodeURIComponent(F.fam); jump.append(a);
    });
    quizSec = el("section", "cf-quiz");
    quizSec.hidden = true;
    const pick = el("div", "cf-modes");
    pick.innerHTML = `<p>選擇題型 Choose：</p>
      <button type="button" class="secondary-button" data-mode="spell">✍️ 拼字 Spelling（${ALL.length} 題）</button>
      <button type="button" class="secondary-button" data-mode="mcq">🔘 選擇題 MCQ（${ALL.length} 題）</button>`;
    quizHost = el("div", "cf-qhost");
    quizSec.append(pick, quizHost);
    pick.addEventListener("click", e => { const b = e.target.closest("[data-mode]"); if (b) startMode(b.dataset.mode); });
    root.append(intro, jump, cards, quizSec);
    intro.querySelector(".cf-tabs").addEventListener("click", e => {
      const t = e.target.closest(".cf-tab");
      if (!t) return;
      showTab(t.dataset.tab);
      history.replaceState(null, "", t.dataset.tab === "quiz" ? "#quiz" : location.pathname + location.search);
    });
    applyHash();
    window.addEventListener("hashchange", applyHash);
  }
  function applyHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (/^(quiz|test)$/.test(h)) { showTab("quiz"); return; }
    if (h === "spell" || h === "mcq") { startMode(h); return; }
    let target = null;
    if (h.startsWith("f=")) target = document.getElementById("f-" + h.slice(2));
    if (h.startsWith("w=")) {
      const w = h.slice(2).toLowerCase();
      target = document.getElementById("w-" + w);
      if (!target) { const hit = (window.WF_INDEX || {})[w]; if (hit) target = document.getElementById("f-" + hit[1]); }
    }
    if (!target) return;
    showTab("cards");
    document.querySelectorAll(".cf-flash").forEach(x => x.classList.remove("cf-flash"));
    target.classList.add("cf-flash");
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
  }

  document.addEventListener("click", e => {
    const b = e.target.closest(".cf-say");
    if (b) { e.preventDefault(); e.stopPropagation(); speak(b.dataset.say); }
  });

  if (U) unitPage();
  else root.textContent = "找不到單元資料。";
})();
