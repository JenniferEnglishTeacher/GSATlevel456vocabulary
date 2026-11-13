// 學測6000字 Vocabulary Board — three zones: Level 4, Level 5, Level 6 (40 groups each, word-family edition).
// Each group: word chips (bold = the level's own headword, others = its word family) + 🗂 Flashcards + 📝 MCQ + ✏️ Quiz.
// Hover = speak + definition card, click = mark red for review, double-click = open the word's flashcard,
// download marked words as Excel, 🎮 test the marked words.
const STORE_KEY = "gsat456-review-list";

// cls picks the colour family in styles.css: Level 4 teal (default), Level 5 orange ("hot"), Level 6 purple ("va").
const makeBook = (n, cls) => ({
  level: n, cls,
  name: `學測6000字 Level ${n}`,
  unitName: "Group",
  short: `L${n}·`,
  units: window[`L${n}_DASHBOARD_UNITS`] || [],
  key: (u, i) => `${n}-${u}:${i}`,
  page: u => `l${n}-unit${u}.html`,
  quizPage: u => `level${n}-group${String(u).padStart(2, "0")}.html`
});
const BOOKS = { l4: makeBook(4, ""), l5: makeBook(5, "hot"), l6: makeBook(6, "va") };
const ZONES = Object.keys(BOOKS);

const countEl = document.querySelector("#reviewCount");
const downloadBtn = document.querySelector("#downloadReview");
const arcadeBtn = document.querySelector("#arcadeReview");
const showBtn = document.querySelector("#showReview");
const clearBtn = document.querySelector("#clearReview");
const preview = document.querySelector("#reviewPreview");
const search = document.querySelector("#wordSearch");

// key -> card info
const lookup = new Map();
Object.entries(BOOKS).forEach(([book, cfg]) => cfg.units.forEach(u => u.cards.forEach((card, i) => {
  lookup.set(cfg.key(u.unit, i), { book, unit: u.unit, index: i, ...card });
})));

let marked = loadMarked();
let hoverTimer = null;

function loadMarked() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    return saved.filter(key => lookup.has(key));
  } catch (error) {
    return [];
  }
}

function saveMarked() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(marked)); } catch (error) { /* private mode: list lasts for this visit */ }
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

// ---------- Zones ----------
let zone = "l4";
const built = new Set(); // each level's board (~3,600 chips) is drawn the first time its tab opens

function setZone(next, push = true) {
  zone = ZONES.includes(next) ? next : "l4";
  ZONES.forEach(z => {
    document.querySelector(`#zone-${z}`).hidden = z !== zone;
    const tab = document.querySelector(`.zone-tab[data-zone="${z}"]`);
    tab.classList.toggle("active", z === zone);
    tab.setAttribute("aria-selected", String(z === zone));
  });
  if (!built.has(zone)) {
    buildBoard(zone);
    built.add(zone);
    refresh();
  }
  if (push) history.replaceState(null, "", `#${zone}`);
  hideTip();
  applySearch(false);
}

document.querySelectorAll(".zone-tab").forEach(tab => tab.addEventListener("click", () => setZone(tab.dataset.zone)));
window.addEventListener("hashchange", () => setZone(location.hash.slice(1), false));

// ---------- Word boards ----------
function buildBoard(book) {
  const cfg = BOOKS[book];
  const board = document.querySelector(`#board-${book}`);
  const frag = document.createDocumentFragment();
  cfg.units.forEach(u => {
    const section = document.createElement("section");
    section.className = `unit-block ${cfg.cls ? `${cfg.cls}-block` : "barrons-block"}`;
    section.innerHTML = `
      <div class="unit-block-head">
        <div class="unit-title"><a class="unit-number" href="${cfg.page(u.unit)}">${cfg.unitName} ${u.unit}</a></div>
        <div class="unit-actions">
          <a class="mini-cards" href="${cfg.page(u.unit)}" title="Flashcards with example sentences 字卡＋例句">🗂 Flashcards</a>
          <a class="mini-quiz" href="${cfg.page(u.unit)}#quiz" title="30 multiple-choice questions for practice 選擇題練習">📝 MCQ</a>
          <a class="mini-test" href="${cfg.quizPage(u.unit)}" title="Spelling + 30 MCQ; the result is recorded 拼字＋選擇題，記錄成績">✏️ Quiz</a>
        </div>
      </div>`;
    const theme = document.createElement("p");
    theme.className = "unit-theme";
    theme.textContent = `${u.theme} · ${u.cards.length} entries`;
    section.querySelector(".unit-title").append(theme);

    const words = document.createElement("div");
    words.className = "board-words";
    u.cards.forEach((card, i) => {
      const key = cfg.key(u.unit, i);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = card.h ? "board-word head" : "board-word";
      btn.dataset.key = key;
      btn.textContent = card.w;
      btn.addEventListener("pointerenter", event => {
        if (event.pointerType !== "mouse") return;
        showTip(btn, key);
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => speak(card.w), 150);
      });
      btn.addEventListener("pointerleave", () => {
        clearTimeout(hoverTimer);
        hideTip();
      });
      btn.addEventListener("focus", () => showTip(btn, key));
      btn.addEventListener("blur", hideTip);
      // Single click = mark/unmark for review (short delay so a double-click can cancel it);
      // double-click = open this word's flashcard (sample sentence) in a new tab.
      let clickTimer = null;
      btn.addEventListener("click", () => {
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => toggleWord(key), 250);
      });
      btn.addEventListener("dblclick", event => {
        event.preventDefault();
        clearTimeout(clickTimer);
        openCard(cfg, u.unit, card.w);
      });
      words.append(btn);
    });
    section.append(words);
    frag.append(section);
  });
  board.replaceChildren(frag);
}

// ---------- Hover card: definition preview before deciding to mark ----------
const tip = document.createElement("div");
tip.className = "word-tip";
tip.setAttribute("role", "tooltip");
tip.hidden = true;
document.body.append(tip);

function showTip(btn, key) {
  const card = lookup.get(key);
  const cfg = BOOKS[card.book];
  const isMarked = marked.includes(key);
  tip.innerHTML = `
    <div class="tip-head"><strong></strong><span class="tip-pos"></span><span class="tip-unit"></span></div>
    <p class="tip-en"></p>
    <p class="tip-zh"></p>
    <p class="tip-hint"></p>`;
  tip.querySelector("strong").textContent = card.w;
  tip.querySelector(".tip-pos").textContent = card.p;
  tip.querySelector(".tip-unit").textContent = `Level ${cfg.level} · ${cfg.unitName} ${card.unit}`;
  tip.querySelector(".tip-en").textContent = card.d;
  tip.querySelector(".tip-zh").textContent = card.c;
  tip.querySelector(".tip-hint").textContent = isMarked
    ? "Click: remove from review list 點一下移除 · Double-click: open flashcard 點兩下開字卡"
    : "Click: add to review list 點一下加入複習 · Double-click: open flashcard 點兩下開字卡";
  tip.classList.toggle("is-marked", isMarked);
  tip.classList.toggle("is-hot", cfg.cls === "hot");
  tip.classList.toggle("is-va", cfg.cls === "va");
  tip.hidden = false;

  const r = btn.getBoundingClientRect();
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  let left = r.left + r.width / 2 - tw / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  let top = r.bottom + 8;
  if (top + th > window.innerHeight - 8) top = r.top - th - 8;
  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
}

function cardUrl(cfg, unit, word) {
  return `${cfg.page(unit)}#w=${encodeURIComponent(word)}`;
}

function openCard(cfg, unit, word) {
  hideTip();
  window.open(cardUrl(cfg, unit, word), "_blank", "noopener");
}

function hideTip() {
  tip.hidden = true;
}

window.addEventListener("scroll", hideTip, { passive: true });

function toggleWord(key) {
  clearTimeout(hoverTimer);
  const card = lookup.get(key);
  if (marked.includes(key)) {
    marked = marked.filter(k => k !== key);
  } else {
    marked.push(key);
    speak(card.w);
  }
  saveMarked();
  refresh();
  const btn = document.querySelector(`.board-word[data-key="${key}"]`);
  if (!tip.hidden && btn) showTip(btn, key);
}

function refresh() {
  const set = new Set(marked);
  document.querySelectorAll(".board-word").forEach(btn => btn.classList.toggle("marked", set.has(btn.dataset.key)));
  countEl.textContent = marked.length;
  [downloadBtn, showBtn, clearBtn, arcadeBtn].forEach(btn => { if (btn) btn.disabled = marked.length === 0; });
  if (!marked.length) preview.hidden = true;
  if (!preview.hidden) renderPreview();
}

function renderPreview() {
  preview.replaceChildren(...marked.map(key => {
    const card = lookup.get(key);
    const cfg = BOOKS[card.book];
    const chip = document.createElement("span");
    chip.className = `preview-chip${cfg.cls ? ` ${cfg.cls}` : ""}`;
    chip.innerHTML = `<a href="${cardUrl(cfg, card.unit, card.w)}" target="_blank" rel="noopener"></a><small>${cfg.short}${card.unit}</small><button type="button" aria-label="Remove">✕</button>`;
    chip.querySelector("a").textContent = card.w;
    chip.querySelector("button").addEventListener("click", () => toggleWord(key));
    return chip;
  }));
}

function rows() {
  const header = ["No.", "Level", "Group", "Word", "POS", "English Definition", "Chinese Definition", "Sample Sentence", "Sentence Translation"];
  const body = marked.map((key, i) => {
    const c = lookup.get(key);
    const cfg = BOOKS[c.book];
    return [i + 1, `Level ${cfg.level}`, `${cfg.unitName} ${c.unit}`, c.w, c.p, c.d, c.c, c.s, c.t];
  });
  return [header, ...body];
}

function stamp() {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

function download() {
  if (!marked.length) return;
  const data = rows();
  if (window.XLSX) {
    const sheet = XLSX.utils.aoa_to_sheet(data);
    sheet["!cols"] = [5, 9, 10, 22, 8, 44, 24, 80, 56].map(wch => ({ wch }));
    sheet["!autofilter"] = { ref: `A1:I${data.length}` };
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, "Review Words");
    XLSX.writeFile(book, `GSAT6000_Vocab_Review_${stamp()}.xlsx`);
    return;
  }
  // Fallback if the Excel library could not load: CSV (opens in Excel, Chinese kept via BOM).
  const csv = data.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `GSAT6000_Vocab_Review_${stamp()}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

downloadBtn.addEventListener("click", download);
if (arcadeBtn) arcadeBtn.addEventListener("click", () => { location.href = "review-arcade.html"; });
showBtn.addEventListener("click", () => {
  preview.hidden = !preview.hidden;
  showBtn.textContent = preview.hidden ? "Show list" : "Hide list";
  if (!preview.hidden) renderPreview();
});
clearBtn.addEventListener("click", () => {
  if (!marked.length) return;
  marked = [];
  saveMarked();
  refresh();
});

// ---------- Search (works in whichever level is open) ----------
function applySearch(scroll = true) {
  const q = search.value.trim().toLowerCase();
  const panel = document.querySelector(`#zone-${zone}`);
  panel.querySelectorAll(".board-word").forEach(btn => {
    btn.classList.toggle("dim", Boolean(q) && !btn.textContent.toLowerCase().includes(q));
    btn.classList.toggle("hit", Boolean(q) && btn.textContent.toLowerCase().startsWith(q));
  });
  const note = document.querySelector("#searchNote");
  if (note) {
    // Tell the student when the word lives in another level.
    const elsewhere = q.length >= 2 ? ZONES.filter(z => z !== zone && BOOKS[z].units.some(u => u.cards.some(c => c.w.toLowerCase().startsWith(q)))) : [];
    note.replaceChildren();
    if (elsewhere.length) {
      note.append("Also found in 也出現在： ");
      elsewhere.forEach(z => {
        const a = document.createElement("a");
        a.href = `#${z}`;
        a.textContent = `Level ${BOOKS[z].level}`;
        a.addEventListener("click", event => { event.preventDefault(); setZone(z); });
        note.append(a, " ");
      });
    }
  }
  const first = panel.querySelector(".board-word.hit");
  if (scroll && first) first.scrollIntoView({ block: "center", behavior: "smooth" });
}
search.addEventListener("input", () => applySearch(true));

// Marks made in another tab (e.g. a student saves words on a flashcard page) stay in sync.
window.addEventListener("storage", event => {
  if (event.key === STORE_KEY) { marked = loadMarked(); refresh(); }
});

// ---------- Start ----------
ZONES.forEach(z => {
  const cfg = BOOKS[z];
  const entries = cfg.units.reduce((n, u) => n + u.cards.length, 0);
  const heads = cfg.units.reduce((n, u) => n + u.cards.filter(c => c.h).length, 0);
  document.querySelector(`#${z}Count`).textContent = `${cfg.units.length} groups · ${heads.toLocaleString()} words · ${entries.toLocaleString()} entries`;
});
refresh();
setZone(location.hash.slice(1) || "l4", false);
