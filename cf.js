/* 學測易混淆字 Confusables (book confus, zones fa fb fc fd) — comparison cards + quiz.
   {zone}-unit{u}.html loads {zone}-unit{u}-data.js (window.CF_UNIT); cf-wrong.html loads every unit (window.CF_ALL).
   A finished quiz is sent to the teacher's sheet (tracker.js GsatTracker.logTest) and its wrong words go on the ★ review list.
   Best scores and the 錯題本 stay in this browser (localStorage). Built by tools/confusables/build.py. */
(function () {
  "use strict";
  const K_PROG = "gsat-cf-progress";   // { "fa-3": best % }
  const K_WRONG = "gsat-cf-wrong";     // { "zone-u|gid|kind|word": { z, u, g, k, w, c, ts } }
  const REVIEW_KEY = "gsat456-review-list";
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const META = window.CF_META || [];
  const TYPES = window.CF_TYPES || [];           // [code, zone, 中文, English]
  const ZONES = window.VOCAB_ZONES || {};
  const typeOfZone = z => TYPES.find(t => t[1] === z) || [z, z, z, ""];
  const page = (z, u) => `${z}-unit${u}.html`;
  const unitLabel = (z, u) => `${typeOfZone(z)[2]} U${u}`;
  const root = document.getElementById("cf-root");
  const WRONG_PAGE = document.body.dataset.page === "wrong";

  function speak(text, rate) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = rate || 0.92;
    speechSynthesis.speak(u);
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const sb = (text, label) => `<button type="button" class="cf-say" data-say="${esc(text)}" aria-label="${esc(label || "Listen")}">🔊</button>`;
  const lvTag = lv => lv ? `<span class="cf-lv lv${lv}" title="學測6000字 Level ${lv}">學測 L${lv}</span>` : `<span class="cf-lv lvx" title="不在學測6000字表">範圍外</span>`;

  // Bold the word (any form) inside its sentence.
  function boldWord(sentence, word) {
    const w = String(word);
    const stem = w.length > 5 ? w.slice(0, Math.max(4, w.length - 2)) : w;
    const re = new RegExp("\\b(" + stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[a-z]*)\\b", "i");
    const m = re.exec(sentence);
    if (!m) return esc(sentence);
    return esc(sentence.slice(0, m.index)) + "<b>" + esc(m[0]) + "</b>" + esc(sentence.slice(m.index + m[0].length));
  }

  // ---------- unit selector ----------
  function fillSelect(z, u) {
    const sel = document.getElementById("unitSelect");
    if (!sel) return;
    TYPES.forEach(([, zone, name]) => {
      const og = document.createElement("optgroup");
      og.label = name;
      META.filter(m => m.zone === zone).forEach(m => {
        const o = document.createElement("option");
        o.value = page(m.zone, m.u); o.textContent = `${name} U${m.u}`;
        if (m.zone === z && m.u === u) o.selected = true;
        og.append(o);
      });
      sel.append(og);
    });
    if (WRONG_PAGE) { const o = document.createElement("option"); o.value = ""; o.textContent = "📕 錯題本"; o.selected = true; sel.prepend(o); }
    sel.addEventListener("change", () => { if (sel.value) location.href = sel.value; });
  }

  // ---------- comparison cards ----------
  function wordCol(w) {
    const col = el("div", "cf-word");
    col.id = "w-" + w.w.toLowerCase() + (w.sense === "進階義" ? "-adv" : "");
    const links = w.cards.map(c => `<a href="${esc(c[1])}#w=${encodeURIComponent(w.w)}">🗂 ${esc(c[0])}</a>`).join("");
    const rel = (label, list, cls) => list ? `<p class="cf-rel ${cls}"><span>${label}</span>${esc(list)}</p>` : "";
    col.innerHTML = `
      <div class="cf-word-head">
        <h3>${esc(w.w)}</h3>${sb(w.w, "Listen: " + w.w)}
        <span class="cf-pos">${esc(w.pos)}</span>
        ${w.sense ? `<span class="cf-sense ${w.sense === "進階義" ? "sat" : ""}">${esc(w.sense)}</span>` : ""}
        ${lvTag(w.lv)}
      </div>
      <p class="cf-zh">${esc(w.zh)}</p>
      <p class="cf-def">${esc(w.def)}</p>
      <div class="cf-sent"><p>${boldWord(w.s, w.w)} ${sb(w.s, "Listen to the sentence")}</p><p class="cf-tr">${esc(w.t)}</p></div>
      ${rel("同義", w.syn, "syn")}${rel("反義", w.ant, "ant")}
      ${links ? `<div class="cf-links">${links}</div>` : ""}`;
    return col;
  }
  function groupCard(g) {
    const card = el("article", "cf-card");
    card.id = "g-" + g.id;
    const uniq = g.words.map(w => w.w).filter((x, i, a) => a.indexOf(x) === i);
    const head = el("header", "cf-card-head", `<span class="cf-id">${esc(g.id)}</span><h2>${esc(g.name)}</h2>${sb(uniq.join(", "), "Listen to all")}`);
    const tip = el("div", "cf-tip", `<p class="zh"><span>分辨口訣</span>${esc(g.tipZh)}</p><p class="en"><span>Tip</span>${esc(g.tipEn)}</p>`);
    const trap = el("p", "cf-trap", `<span>⚠ 陷阱</span>${esc(g.trap)}`);
    const grid = el("div", "cf-grid cols" + g.words.length);
    g.words.forEach(w => grid.append(wordCol(w)));
    card.append(head, tip, trap, grid);
    return card;
  }

  // ---------- quiz ----------
  // An item: { z, u, type, g, q } — q from the data: { k: "cz" | "tm", w, q, o, a, ci, full?, t?, ctx?, pos? }
  function meaningsOf(q) { // every option's word: 🔊 + POS + 中文 + English, shown after answering
    return (q.ow || []).map(([w, pos, zh, def]) => `<li>${sb(w, "Listen: " + w)} <b>${esc(w)}</b> <span class="cf-pos">${esc(pos)}</span> ${esc(zh)} <span class="cf-muted">— ${esc(def)}</span></li>`).join("");
  }
  function questionNode(item, onAnswer) {
    const { q, g, z, u } = item;
    const box = el("div", "cf-q");
    const kind = q.k === "cz" ? "例句選對字" : "判斷真意";
    let prompt;
    if (q.k === "cz") prompt = `<p class="cf-q-ask">選出最適合填入空格的字：</p><p class="cf-q-text">${esc(q.q).replace("_____", '<span class="cf-blank">_____</span>')}</p>`;
    else if (q.ctx) prompt = `<p class="cf-q-ask">句中 <b>${esc(q.w)}</b> 的意思最接近？</p><p class="cf-q-text">${esc(q.ctx).replace(/\[\[(.+?)\]\]/, "<b>$1</b>")} ${sb(q.ctx.replace(/\[\[|\]\]/g, ""))}</p>`;
    else prompt = `<p class="cf-q-ask"><b class="cf-q-word">${esc(q.w)}</b> <span class="cf-pos">${esc(q.pos || "")}</span> ${sb(q.w)} 的真正意思是？</p>`;
    box.innerHTML = `<p class="cf-q-meta">${kind} · ${esc(typeOfZone(z)[2])} U${u} · ${esc(g.id)} ${esc(g.name)}</p>${prompt}`;
    const opts = el("div", "cf-opts");
    const order = shuffle(q.o.map((t, i) => i));
    order.forEach(i => {
      const b = el("button", "cf-opt", esc(q.o[i]));
      b.type = "button";
      b.addEventListener("click", () => {
        if (box.classList.contains("done")) return;
        box.classList.add("done");
        const ok = i === q.a;
        opts.querySelectorAll(".cf-opt").forEach(x => x.disabled = true);
        b.classList.add(ok ? "right" : "wrong");
        opts.children[order.indexOf(q.a)].classList.add("right");
        const fb = el("div", "cf-fb " + (ok ? "ok" : "no"));
        const full = q.k === "cz" ? `<p>${boldWord(q.full, q.o[q.a])} ${sb(q.full)}</p><p class="cf-tr">${esc(q.t)}</p>` : (q.ctx ? `<p class="cf-tr">${esc(q.t)}</p>` : "");
        const mean = `<ul class="cf-means">${meaningsOf(q)}</ul>`;
        fb.innerHTML = `<strong>${ok ? "✓ 答對了 Correct!" : "✗ 正解：" + esc(q.o[q.a])}</strong>${full}${mean}<p class="cf-fb-tip">💡 ${esc(g.tipZh)}</p><a href="${page(z, u)}#g=${esc(g.id)}">看對照卡 →</a>`;
        box.append(fb);
        onAnswer(ok);
      });
      opts.append(b);
    });
    box.append(opts);
    return box;
  }
  const keyOf = it => `${it.z}-${it.u}|${it.g.id}|${it.q.k}|${it.q.w}`;
  const reviewKey = it => `${it.z}-${it.u}:${it.q.ci}`;
  function record(it, ok) {
    const W = load(K_WRONG, {});
    const k = keyOf(it);
    if (ok) { if (WRONG_PAGE && W[k]) delete W[k]; }
    else W[k] = { z: it.z, u: it.u, g: it.g.id, k: it.q.k, w: it.q.w, c: ((W[k] || {}).c || 0) + 1, ts: Date.now() };
    save(K_WRONG, W);
  }
  function addToReview(items) {
    const list = load(REVIEW_KEY, []);
    const set = new Set(Array.isArray(list) ? list : []);
    let changed = false;
    items.forEach(it => { const k = reviewKey(it); if (!set.has(k)) { set.add(k); changed = true; } });
    if (changed) { save(REVIEW_KEY, [...set]); if (window.GsatTracker) window.GsatTracker.reviewChanged(); }
  }

  function runQuiz(host, items, opts) {
    opts = opts || {};
    let i = 0, right = 0;
    const wrongItems = [];
    host.replaceChildren();
    const bar = el("div", "cf-qbar");
    const stage = el("div", "cf-stage");
    host.append(bar, stage);
    const paintBar = () => { bar.innerHTML = `第 ${Math.min(i + 1, items.length)} / ${items.length} 題 · 答對 ${right}`; };
    function next() {
      paintBar();
      stage.replaceChildren();
      if (i >= items.length) return finish();
      const it = items[i];
      const node = questionNode(it, ok => {
        if (ok) right++; else wrongItems.push(it);
        record(it, ok);
        paintBar();
        const nb = el("button", "primary-button cf-next", i + 1 < items.length ? "下一題 Next →" : "看成績 Result");
        nb.type = "button";
        nb.addEventListener("click", () => { i++; next(); });
        node.append(nb);
        nb.focus();
      });
      stage.append(node);
      node.scrollIntoView({ block: "nearest" });
    }
    function finish() {
      const pct = items.length ? Math.round(right * 100 / items.length) : 0;
      if (opts.unit) { const P = load(K_PROG, {}); P[opts.unit] = Math.max(P[opts.unit] || 0, pct); save(K_PROG, P); }
      bar.innerHTML = `完成！`;
      const end = el("div", "cf-end", `<h3>${right} / ${items.length} 題答對（${pct}%）</h3><p>${pct >= 90 ? "🌟 Excellent! 太棒了" : pct >= 70 ? "👍 Good job! 不錯喔" : "💪 Keep going! 再練習一次"}</p>`);
      if (wrongItems.length) {
        addToReview(wrongItems);
        end.append(el("p", null, "答錯的字（已加入 ★ 複習清單與錯題本）：" + [...new Set(wrongItems.map(x => x.q.w))].map(esc).join("、")));
        const redo = el("button", "primary-button", `只重做錯的 ${wrongItems.length} 題`);
        redo.type = "button";
        redo.addEventListener("click", () => runQuiz(host, shuffle(wrongItems), Object.assign({}, opts, { retry: true })));
        end.append(redo);
      }
      const again = el("button", "secondary-button", "整份重做");
      again.type = "button";
      again.addEventListener("click", () => opts.restart ? opts.restart() : runQuiz(host, shuffle(items), opts));
      end.append(again);
      const book = el("a", "secondary-button", "📕 錯題本 →");
      book.href = "cf-wrong.html";
      end.append(book);
      stage.append(end);
      if (window.GsatTracker && items.length) {
        const first = items[0];
        const z = opts.zone || first.z;
        window.GsatTracker.logTest({
          type: (opts.mode ? `Confusables ${opts.mode}` : "Confusables 錯題本") + (opts.retry ? " (retry)" : ""),
          level: (ZONES[z] || {}).levelLabel || "學測易混淆字",
          group: opts.u || "",
          total: items.length, correct: right,
          wrong: wrongItems.map(x => ({ w: x.q.w, key: reviewKey(x) })),
          label: opts.label || "學測易混淆字 錯題本"
        });
      }
    }
    next();
  }

  function itemsOf(unit, mode) {
    const out = [];
    unit.groups.forEach(g => g.qs.forEach(q => {
      if (mode === "all" || q.k === mode) out.push({ z: unit.zone, u: unit.u, type: unit.type, g, q });
    }));
    return out;
  }

  // ---------- unit page ----------
  function unitPage(U) {
    document.title = `學測易混淆字 ${U.title}`;
    fillSelect(U.zone, U.u);
    root.replaceChildren();
    const idx = META.findIndex(m => m.zone === U.zone && m.u === U.u);
    const prev = META[idx - 1], next = META[idx + 1];
    const best = load(K_PROG, {})[`${U.zone}-${U.u}`];
    const intro = el("section", "cf-intro");
    intro.innerHTML = `
      <p><strong>${esc(U.typeName)}</strong> <span class="cf-en">${esc(U.typeEn)}</span> · ${U.groups.length} 組 · 先看對照卡，再做測驗。答錯自動進 <a href="cf-wrong.html">📕 錯題本</a> 和 ★ 複習清單。${best != null ? ` · 最佳成績 <b>${best}%</b>` : ""}</p>
      <nav class="cf-tabs" role="tablist">
        <button type="button" class="cf-tab active" data-tab="cards">對照卡 Compare</button>
        <button type="button" class="cf-tab" data-tab="quiz">測驗 Quiz</button>
      </nav>
      <div class="cf-pn">${prev ? `<a href="${page(prev.zone, prev.u)}">← ${esc(unitLabel(prev.zone, prev.u))}</a>` : "<span></span>"}${next ? `<a href="${page(next.zone, next.u)}">${esc(unitLabel(next.zone, next.u))} →</a>` : ""}</div>`;
    const cards = el("section", "cf-cards");
    const jump = el("nav", "cf-jump");
    U.groups.forEach(g => {
      cards.append(groupCard(g));
      const a = el("a", null, esc(g.name)); a.href = "#g=" + g.id; jump.append(a);
    });
    const quiz = el("section", "cf-quiz");
    quiz.hidden = true;
    const counts = { cz: itemsOf(U, "cz").length, tm: itemsOf(U, "tm").length };
    const modes = [["all", "混合 Mixed", counts.cz + counts.tm], ["cz", "例句選對字", counts.cz], ["tm", "判斷真意", counts.tm]].filter(m => m[2]);
    const pick = el("div", "cf-modes");
    pick.innerHTML = `<p>選擇題型 Choose：</p>` + modes.map(m => `<button type="button" class="secondary-button" data-mode="${m[0]}">${m[1]}（${m[2]} 題）</button>`).join("");
    const host = el("div", "cf-qhost");
    quiz.append(pick, host);
    pick.addEventListener("click", e => {
      const b = e.target.closest("[data-mode]");
      if (!b) return;
      const mode = modes.find(m => m[0] === b.dataset.mode);
      const start = () => runQuiz(host, shuffle(itemsOf(U, mode[0])), {
        unit: `${U.zone}-${U.u}`, zone: U.zone, u: U.u, mode: mode[1], label: `學測易混淆字 ${U.title}（${mode[1]}）`, restart: start
      });
      start();
    });
    root.append(intro, jump, cards, quiz);
    intro.querySelector(".cf-tabs").addEventListener("click", e => {
      const t = e.target.closest(".cf-tab");
      if (!t) return;
      intro.querySelectorAll(".cf-tab").forEach(x => x.classList.toggle("active", x === t));
      const isQuiz = t.dataset.tab === "quiz";
      quiz.hidden = !isQuiz; cards.hidden = isQuiz; jump.hidden = isQuiz;
      history.replaceState(null, "", isQuiz ? "#quiz" : location.pathname + location.search);
    });
    applyHash();
    window.addEventListener("hashchange", applyHash);
  }
  function applyHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (/^(quiz|test)$/.test(h)) { const t = document.querySelector('.cf-tab[data-tab="quiz"]'); if (t && !t.classList.contains("active")) t.click(); return; }
    let target = null;
    if (h.startsWith("g=")) target = document.getElementById("g-" + h.slice(2));
    if (h.startsWith("w=")) {
      const w = h.slice(2).toLowerCase();
      target = document.getElementById("w-" + w + "-adv") || document.getElementById("w-" + w);
      if (!target) { // a board chip of a 形近字 group name ("adapt / adopt") → that group
        const U = window.CF_UNIT, g = U && U.groups.find(x => x.name.toLowerCase() === w);
        if (g) target = document.getElementById("g-" + g.id);
      }
    }
    if (!target) return;
    const t = document.querySelector('.cf-tab[data-tab="cards"]'); if (t && !t.classList.contains("active")) t.click();
    document.querySelectorAll(".cf-flash").forEach(x => x.classList.remove("cf-flash"));
    target.classList.add("cf-flash");
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
  }

  // ---------- wrong-answer book ----------
  function wrongPage(all) {
    document.title = "學測易混淆字 錯題本";
    fillSelect(null, null);
    const W = load(K_WRONG, {});
    const items = [];
    Object.values(W).forEach(v => {
      const U = all.find(x => x.zone === v.z && x.u === v.u); if (!U) return;
      const g = U.groups.find(x => x.id === v.g); if (!g) return;
      const q = g.qs.find(x => x.k === v.k && x.w === v.w); if (!q) return;
      items.push({ z: U.zone, u: U.u, type: U.type, g, q, c: v.c, ts: v.ts });
    });
    items.sort((a, b) => b.c - a.c || b.ts - a.ts);
    root.replaceChildren();
    const intro = el("section", "cf-intro");
    if (!items.length) {
      intro.innerHTML = `<p>目前沒有錯題 🎉 到各單元做測驗，答錯的題目會自動收進這裡；在這裡答對就會移出。</p><p><a href="index.html#fa">← 回學測易混淆字</a></p>`;
      root.append(intro);
      return;
    }
    intro.innerHTML = `<p><strong>${items.length}</strong> 題錯題（依答錯次數排序）。在這裡答對就會移出錯題本。</p>`;
    const list = el("table", "cf-wlist");
    list.innerHTML = `<thead><tr><th>單字</th><th>題型</th><th>單元</th><th>錯次</th></tr></thead><tbody>${items.map(it => `<tr><td><b>${esc(it.q.w)}</b> <span class="cf-muted">${esc(it.g.name)}</span></td><td>${it.q.k === "cz" ? "例句選對字" : "判斷真意"}</td><td><a href="${page(it.z, it.u)}#g=${esc(it.g.id)}">${esc(unitLabel(it.z, it.u))}</a></td><td>${it.c}</td></tr>`).join("")}</tbody>`;
    const startBtn = el("button", "primary-button", `開始重做 ${items.length} 題`);
    startBtn.type = "button";
    const clear = el("button", "secondary-button", "清空錯題本");
    clear.type = "button";
    clear.addEventListener("click", () => { if (confirm("確定清空錯題本？")) { save(K_WRONG, {}); wrongPage(all); } });
    const host = el("div", "cf-qhost");
    startBtn.addEventListener("click", () => { list.hidden = true; startBtn.hidden = true; clear.hidden = true; runQuiz(host, items, { restart: () => wrongPage(all) }); });
    root.append(intro, startBtn, clear, list, host);
  }

  document.addEventListener("click", e => {
    const b = e.target.closest(".cf-say");
    if (b) { e.preventDefault(); speak(b.dataset.say); }
  });

  if (WRONG_PAGE) wrongPage(window.CF_ALL || []);
  else if (window.CF_UNIT) unitPage(window.CF_UNIT);
  else root.textContent = "找不到單元資料。";
})();
