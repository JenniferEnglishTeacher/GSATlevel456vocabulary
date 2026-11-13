const units = window.FLASHCARD_UNITS;
const localLookup = window.LOCAL_LOOKUP || {};

// Which zone this page belongs to (books.js lists every zone: 學測 Level 4/5/6, 國中小2000, …).
const ZONES = window.VOCAB_ZONES || {};
const SET = ZONES[document.body.dataset.set] ? document.body.dataset.set : Object.keys(ZONES)[0];
const GSAT_INDEX = window.GSAT_INDEX || {};
const fillPattern = (pattern, u) => pattern.replace("{u}", u).replace("{uu}", String(u).padStart(2, "0"));
const SETS = {};
Object.entries(ZONES).forEach(([id, z]) => {
  SETS[id] = {
    ...z,
    level: z.levelLabel,
    page: u => fillPattern(z.page, u),
    quizPage: u => fillPattern(z.quiz, u),
    badge: u => `${z.tag}·${u}`,
    label: u => `${z.name} — ${z.unitName || "Group"} ${u}`,
    unitName: z.unitName || "Group",
    board: `index.html#${id}`,
    index: () => GSAT_INDEX[id] || {}
  };
});
// Words inside a sentence are cross-linked only to zones of the same book.
const BOOK_ZONES = Object.keys(SETS).filter(id => SETS[id].book === SETS[SET].book);
const SETCFG = SETS[SET];

const state = {
  unit: Object.keys(units)[0],
  order: [],
  index: 0,
  flipped: false,
  lookupText: "",
  quizAnswers: {}
};

const els = {
  unitTitle: document.querySelector("#unitTitle"),
  unitSelect: document.querySelector("#unitSelect"),
  wordList: document.querySelector("#wordList"),
  cardCounter: document.querySelector("#cardCounter"),
  meterFill: document.querySelector("#meterFill"),
  flashcard: document.querySelector("#flashcard"),
  frontWord: document.querySelector("#frontWord"),
  backWord: document.querySelector("#backWord"),
  posTag: document.querySelector("#posTag"),
  definition: document.querySelector("#definition"),
  memoryChant: null,
  synonyms: document.querySelector("#synonyms"),
  sentence: document.querySelector("#sentence"),
  translation: document.querySelector("#translation"),
  cardImage: document.querySelector("#cardImage"),
  prevCard: document.querySelector("#prevCard"),
  nextCard: document.querySelector("#nextCard"),
  flipCard: document.querySelector("#flipCard"),
  shuffleCards: document.querySelector("#shuffleCards"),
  resetCards: document.querySelector("#resetCards"),
  speakWordFront: document.querySelector("#speakWordFront"),
  speakWordBack: document.querySelector("#speakWordBack"),
  speakSentence: document.querySelector("#speakSentence"),
  lookupWord: document.querySelector("#lookupWord"),
  lookupEnglish: document.querySelector("#lookupEnglish"),
  lookupChinese: document.querySelector("#lookupChinese"),
  speakLookup: document.querySelector("#speakLookup"),
  quizSection: null,
  quizList: null,
  quizScore: null
};

function cards() {
  return units[state.unit].cards;
}

function currentCard() {
  return cards()[state.order[state.index]];
}

function init() {
  for (const n of SETCFG.units) {
    const option = document.createElement("option");
    option.value = String(n);
    const groupName = SETCFG.names[n];
    option.textContent = groupName ? `${SETCFG.unitName} ${n} · ${groupName}` : `${SETCFG.unitName} ${n}`;
    els.unitSelect.append(option);
  }
  const selectLabel = document.querySelector('label[for="unitSelect"]');
  if (selectLabel) selectLabel.textContent = SETCFG.unitName;
  const backLink = document.querySelector(".back-link");
  if (backLink) backLink.href = SETCFG.board;
  resetOrder();
  bindEvents();
  createMemoryChant();
  createQuizSection();
  createQuizLinks();
  applyHashTarget();
  render();
  window.addEventListener("hashchange", () => {
    applyHashTarget();
    render();
  });
}

// ---------- Quiz links (top bar): MCQ practice on this page + the recorded online quiz ----------
function createQuizLinks() {
  if (document.querySelector("#quizLinks")) return;
  const wrap = document.createElement("div");
  wrap.className = "quiz-links";
  wrap.id = "quizLinks";
  els.unitTitle.insertAdjacentElement("afterend", wrap);
  els.quizLinks = wrap;
}

function renderQuizLinks() {
  if (!els.quizLinks) return;
  const unit = state.unit;
  const practice = document.createElement("a");
  practice.className = "quiz-link";
  practice.href = "#quizSection";
  practice.textContent = `📝 ${SETCFG.unitName} ${unit} MCQ Practice 選擇題練習`;
  practice.addEventListener("click", event => {
    event.preventDefault();
    els.quizSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  const recorded = document.createElement("a");
  recorded.className = "quiz-link review recorded";
  recorded.href = SETCFG.quizPage(unit);
  recorded.textContent = "✏️ Online Quiz 線上測驗（拼字＋選擇題，記錄成績）";
  recorded.title = "Spelling + 30 MCQ. Your result is recorded for your teacher.";
  if (/^https?:/.test(SETCFG.quiz)) { // this book's quiz is kept on its own site
    recorded.target = "_blank";
    recorded.rel = "noopener";
    recorded.textContent = "✏️ Online Quiz 線上測驗（選擇題，另開視窗）";
    recorded.title = "Opens this unit's quiz on its own site in a new tab.";
  }
  els.quizLinks.replaceChildren(practice, recorded);
}

// ---------- Jump to a card from a link like unit7.html#w=deplore ----------
function applyHashTarget() {
  if (location.hash === "#quiz") {
    setTimeout(() => els.quizSection?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    return;
  }
  const match = location.hash.match(/^#w=(.+)$/);
  if (!match) return;
  const target = decodeURIComponent(match[1]).toLowerCase();
  const realIndex = cards().findIndex(card => card.word.toLowerCase() === target);
  if (realIndex < 0) return;
  state.index = state.order.indexOf(realIndex);
  state.flipped = true;
  setTimeout(() => els.flashcard.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
}

function createMemoryChant() {
  if (!els.definition || document.querySelector("#memoryChant")) return;
  const paragraph = document.createElement("p");
  paragraph.className = "memory-chant";
  paragraph.id = "memoryChant";
  els.definition.insertAdjacentElement("afterend", paragraph);
  els.memoryChant = paragraph;
}

function resetOrder() {
  state.order = cards().map((_, index) => index);
  state.index = 0;
  state.flipped = false;
}

function bindEvents() {
  els.unitSelect.addEventListener("change", () => {
    if (!units[els.unitSelect.value]) {
      location.href = SETCFG.page(els.unitSelect.value);
      return;
    }
    state.unit = els.unitSelect.value;
    resetOrder();
    render();
  });

  if (els.prevCard) els.prevCard.addEventListener("click", () => moveCard(-1));
  if (els.nextCard) els.nextCard.addEventListener("click", () => moveCard(1));
  // ← / → keys move between cards (the arrow bar above the card was removed so the picture sits higher).
  document.addEventListener("keydown", event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest && event.target.closest("input, textarea, select, [contenteditable]")) return;
    if (document.querySelector("#photoZoom.open")) return;
    event.preventDefault();
    moveCard(event.key === "ArrowRight" ? 1 : -1);
  });
  els.flipCard.addEventListener("click", flipCard);
  els.flashcard.addEventListener("click", event => {
    if (event.target === els.cardImage && els.flashcard.classList.contains("has-photo") && state.flipped) {
      openPhotoZoom(els.cardImage.src, els.cardImage.alt);
      return;
    }
    if (!event.target.closest("button, a")) flipCard();
  });
  els.flashcard.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipCard();
    }
  });

  els.shuffleCards.addEventListener("click", () => {
    state.order = shuffle([...state.order]);
    state.index = 0;
    state.flipped = false;
    render();
  });

  els.resetCards.addEventListener("click", () => {
    resetOrder();
    render();
  });

  els.speakWordFront.addEventListener("click", event => {
    event.stopPropagation();
    speak(currentCard().word);
  });
  els.speakWordBack.addEventListener("click", event => {
    event.stopPropagation();
    speak(currentCard().word);
  });
  els.speakSentence.addEventListener("click", event => {
    event.stopPropagation();
    speak(fillSentence(currentCard()), 0.86);
  });
  els.speakLookup.addEventListener("click", () => {
    if (state.lookupText) speak(state.lookupText);
  });
}

function moveCard(direction) {
  state.index = (state.index + direction + state.order.length) % state.order.length;
  state.flipped = false;
  render();
}

// Cards always open on the picture + details side (no flip step); the word-only front is no longer shown.
function flipCard() {
  state.flipped = true;
  els.flashcard.classList.add("flipped");
}

function render() {
  const data = units[state.unit];
  const card = currentCard();
  els.unitTitle.textContent = data.title;
  els.unitSelect.value = state.unit;
  state.flipped = true;
  els.flashcard.classList.add("flipped");
  els.frontWord.textContent = card.word;
  els.backWord.textContent = card.word;
  els.posTag.textContent = card.pos;
  if (card.isHead) {
    const tag = document.createElement("span");
    tag.className = "head-tag";
    tag.textContent = SETCFG.headLabel;
    els.posTag.append(tag);
  }
  if (card.forms) { // verb forms / irregular plural given in the book
    const forms = document.createElement("span");
    forms.className = "forms-tag";
    forms.textContent = card.forms;
    els.posTag.append(forms);
  }
  els.definition.textContent = card.definition;
  if (els.memoryChant) {
    els.memoryChant.textContent = card.memoryChant ? `Memory chant: ${card.memoryChant}` : "";
    els.memoryChant.hidden = !card.memoryChant;
  }
  renderSynonyms(card);
  renderQuizLinks();
  els.translation.textContent = card.translation;
  const photo = photoFor(card);
  els.flashcard.classList.toggle("has-photo", Boolean(photo));
  document.body.classList.toggle("photo-unit", Boolean(photo));
  els.cardImage.onerror = photo ? () => {
    els.cardImage.onerror = null;
    els.flashcard.classList.remove("has-photo");
    els.cardImage.src = makeIllustration(card);
  } : null;
  els.cardImage.src = photo || makeIllustration(card);
  els.cardImage.alt = photo ? `${card.word} — picture card (click to enlarge)` : `${card.word} illustration`;
  els.cardImage.title = photo ? "Click to enlarge 點圖放大" : "";
  preloadNextPhoto();
  els.sentence.replaceChildren(...makeSentenceNodes(card));
  renderAdvanced(card);
  if (els.cardCounter) els.cardCounter.textContent = `${state.index + 1} / ${state.order.length}`;
  if (els.meterFill) els.meterFill.style.width = `${((state.index + 1) / state.order.length) * 100}%`;
  renderWordList();
  setLookup(card.word, card.lookup.english, card.lookup.chinese);
  renderQuiz();
}

// Sidebar: click = jump + speak; mouse hover = speak (short delay so sweeping the list stays quiet).
// Buttons are reused between renders so the list never jumps or re-triggers hover.
let hoverTimer = null;

// ---------- Word list (every book): number + word + POS + 中文 + ☆ save to the board's review list ----------
// Saving here uses the board's own review list and keys, so a word saved on a card page is the same entry as
// clicking it red on the board: Barron's "unit:index", Hot "h<lesson>:index", Verbal Advantage "v<unit>:index",
// roots "r<set>:index". Zone 3 has no word chips on the board, so its saved cards' details are kept beside the list.
const REVIEW_KEY = "gsat456-review-list";
const ROOTS_REVIEW_CARDS = "roots-review-cards";

function readStore(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || "") || fallback; } catch (error) { return fallback; }
}

const KEY_PREFIX = `${SETCFG.prefix}-`; // review keys: "<zone prefix>-<group>:<cardIndex>"

function rootsKey(realIndex) {
  return `${KEY_PREFIX}${state.unit}:${realIndex}`;
}

function isThisBookKey(key) {
  return key.startsWith(KEY_PREFIX);
}

function boardLink() {
  return SETCFG.board;
}

function toggleRootsReview(realIndex) {
  const card = cards()[realIndex];
  const key = rootsKey(realIndex);
  let list = readStore(REVIEW_KEY, []);
  const details = readStore(ROOTS_REVIEW_CARDS, {});
  if (list.includes(key)) {
    list = list.filter(k => k !== key);
    delete details[key];
  } else {
    list.push(key);
    speak(card.word);
    if (SET === "roots") details[key] = { w: card.word, p: card.pos, d: card.definition, c: card.chinese, s: card.sentence, t: card.translation, as: card.advSentence || "", at: card.advTranslation || "", unit: Number(state.unit) };
  }
  try {
    localStorage.setItem(REVIEW_KEY, JSON.stringify(list));
    if (window.GsatTracker) GsatTracker.reviewChanged();
    if (SET === "roots") localStorage.setItem(ROOTS_REVIEW_CARDS, JSON.stringify(details));
  } catch (error) { /* private mode: nothing to save */ }
  renderWordList();
}

function renderRootsWordList() {
  const list = cards();
  if (!els.wordList.querySelector(".roots-list-head")) {
    const head = document.createElement("div");
    head.className = "roots-list-head";
    head.innerHTML = `<span>Click ☆ to save a word to your review list 點 ☆ 存入複習清單</span><a href="${boardLink()}"><b id="rootsSavedCount">0</b> saved · Download Excel on the board ↗</a><a class="arcade-link" href="review-arcade.html">🎮 Test my saved words 闖關測驗 →</a>`;
    const rows = list.map((card, realIndex) => {
      const row = document.createElement("div");
      row.className = "word-row";
      row.dataset.real = realIndex;
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "word-tab";
      tab.innerHTML = `<span class="wt-num"></span><span class="wt-word"></span><span class="wt-pos"></span><span class="wt-zh"></span>`;
      tab.querySelector(".wt-word").textContent = card.word;
      tab.querySelector(".wt-pos").textContent = card.pos;
      tab.querySelector(".wt-zh").textContent = card.chinese;
      tab.addEventListener("click", () => {
        clearTimeout(hoverTimer);
        state.index = state.order.indexOf(realIndex);
        state.flipped = false;
        render();
        speak(card.word);
      });
      tab.addEventListener("pointerenter", event => {
        if (event.pointerType !== "mouse") return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => speak(card.word), 180);
      });
      tab.addEventListener("pointerleave", () => clearTimeout(hoverTimer));
      const save = document.createElement("button");
      save.type = "button";
      save.className = "save-toggle";
      save.addEventListener("click", event => {
        event.stopPropagation();
        toggleRootsReview(realIndex);
      });
      row.append(tab, save);
      return row;
    });
    els.wordList.replaceChildren(head, ...rows);
  }
  const saved = new Set(readStore(REVIEW_KEY, []));
  let savedHere = 0;
  els.wordList.querySelectorAll(".word-row").forEach(row => {
    const realIndex = Number(row.dataset.real);
    const orderedIndex = state.order.indexOf(realIndex);
    const isSaved = saved.has(rootsKey(realIndex));
    if (isSaved) savedHere += 1;
    row.classList.toggle("active", orderedIndex === state.index);
    row.classList.toggle("saved", isSaved);
    row.querySelector(".wt-num").textContent = `${orderedIndex + 1}.`;
    const save = row.querySelector(".save-toggle");
    save.textContent = isSaved ? "★" : "☆";
    save.setAttribute("aria-pressed", String(isSaved));
    save.title = isSaved ? "Saved — click to remove from review list 已存入，點一下移除" : "Save to review list 存入複習清單";
    save.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${list[realIndex].word} ${isSaved ? "from" : "to"} review list`);
  });
  const countEl = document.querySelector("#rootsSavedCount");
  if (countEl) countEl.textContent = String(readStore(REVIEW_KEY, []).filter(isThisBookKey).length);
  const active = els.wordList.querySelector(".word-row.active");
  if (active) active.scrollIntoView({ block: "nearest" });
}

// The board or another card page changed the review list: refresh the stars.
window.addEventListener("storage", event => {
  if (event.key === REVIEW_KEY) renderRootsWordList();
});

function renderWordList() {
  renderRootsWordList();
}

function renderPlainWordList() { // previous list (word only); kept for reference, no longer used
  const list = cards();
  if (els.wordList.children.length !== list.length) {
    els.wordList.replaceChildren(...list.map((card, realIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.real = realIndex;
      button.addEventListener("click", () => {
        clearTimeout(hoverTimer);
        state.index = state.order.indexOf(realIndex);
        state.flipped = false;
        render();
        speak(card.word);
      });
      button.addEventListener("pointerenter", event => {
        if (event.pointerType !== "mouse") return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => speak(card.word), 180);
      });
      button.addEventListener("pointerleave", () => clearTimeout(hoverTimer));
      return button;
    }));
  }
  [...els.wordList.children].forEach(button => {
    const realIndex = Number(button.dataset.real);
    const orderedIndex = state.order.indexOf(realIndex);
    button.className = orderedIndex === state.index ? "word-tab active" : "word-tab";
    button.textContent = `${orderedIndex + 1}. ${list[realIndex].word}`;
  });
  const active = els.wordList.querySelector(".word-tab.active");
  if (active) active.scrollIntoView({ block: "nearest" });
}

// Word family: the other entries of this card's family in this group (headword, phrases, derived words).
// Click a member to open its card; 🔊 to hear it; ↗ opens Cambridge English–Chinese (Traditional).
const CAMBRIDGE = "https://dictionary.cambridge.org/dictionary/english-chinese-traditional/";

function renderSynonyms(card) {
  const list = cards();
  const members = SETCFG.family ? list.map((c, i) => ({ c, i })).filter(({ c }) => c.family === card.family && c !== card) : [];
  const label = document.createElement("span");
  label.className = "syn-label";
  label.textContent = "Word family 詞族: ";
  const chips = members.map(({ c, i }) => {
    const chip = document.createElement("span");
    chip.className = `syn-chip family-chip${c.isHead ? " is-head" : ""}`;
    const open = document.createElement("button");
    open.type = "button";
    open.className = "family-open";
    open.textContent = c.word;
    open.title = `${c.pos} ${c.chinese} — click to open this card 點一下看字卡`;
    open.addEventListener("pointerenter", event => {
      if (event.pointerType !== "mouse") return;
      setLookup(c.word, c.definition, c.chinese);
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => speak(c.word), 180);
    });
    open.addEventListener("pointerleave", () => clearTimeout(hoverTimer));
    open.addEventListener("click", event => {
      event.stopPropagation();
      state.index = state.order.indexOf(i);
      render();
      speak(c.word);
    });
    const pos = document.createElement("small");
    pos.textContent = c.pos;
    const sound = document.createElement("button");
    sound.type = "button";
    sound.className = "syn-speak";
    sound.setAttribute("aria-label", `Listen: ${c.word}`);
    sound.textContent = "🔊";
    sound.addEventListener("click", event => { event.stopPropagation(); speak(c.word); });
    chip.append(open, pos, sound);
    return chip;
  });
  const dict = document.createElement("span");
  dict.className = "syn-chip";
  const link = document.createElement("a");
  link.href = CAMBRIDGE + encodeURIComponent(card.word.toLowerCase().replace(/\s+/g, "-"));
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Cambridge ↗";
  link.title = `Open "${card.word}" in Cambridge Dictionary (英文-繁體中文)`;
  link.addEventListener("click", event => event.stopPropagation());
  dict.append(link);
  els.synonyms.replaceChildren(...(SETCFG.family ? [label, ...chips] : []), dict);
}

function createQuizSection() {
  const studyArea = document.querySelector(".study-area");
  if (!studyArea || document.querySelector("#quizSection")) return;

  const section = document.createElement("section");
  section.className = "quiz-section";
  section.id = "quizSection";
  section.innerHTML = `
    <div class="quiz-heading">
      <div>
        <p class="eyebrow">Practice Test</p>
        <h2>MCQ Practice</h2>
      </div>
      <div class="quiz-tools"><button class="secondary-button" id="quizSend" type="button" hidden>Send result 送出成績</button><span class="quiz-sent" id="quizSentNote" hidden>✓ Sent to your teacher 成績已送出</span><div class="quiz-score" id="quizScore">0 / 0</div></div>
    </div>
    <div class="quiz-list" id="quizList"></div>
  `;
  studyArea.insertAdjacentElement("afterend", section);
  els.quizSection = section;
  els.quizList = section.querySelector("#quizList");
  section.querySelector("#quizSend").addEventListener("click", () => sendQuizResult(true));
  els.quizScore = section.querySelector("#quizScore");
}

// MCQ practice report: sent once per group, automatically when every question has been answered,
// or earlier when the student presses "Send result". Accuracy uses the first answer to each question.
const quizFirst = {};
const quizSent = {};

function sendQuizResult(force) {
  if (!window.GsatTracker || !GsatTracker.enabled || quizSent[state.unit]) return;
  const quiz = units[state.unit].quiz || [];
  const answered = quiz.map((q, i) => ({ q, first: quizFirst[`${state.unit}-${i}`] })).filter(x => x.first);
  if (!answered.length || (!force && answered.length < quiz.length)) return;
  quizSent[state.unit] = true;
  const list = cards();
  const wrong = answered.filter(x => x.first !== x.q.answer).map(x => {
    const text = (x.q.options.find(o => o.letter === x.q.answer) || {}).text || "";
    const vi = Number.isInteger(x.q.vi) && list[x.q.vi] ? x.q.vi : list.findIndex(c => c.word === text);
    return { w: vi >= 0 ? list[vi].word : text, key: vi >= 0 ? `${KEY_PREFIX}${state.unit}:${vi}` : "" };
  });
  GsatTracker.logTest({
    type: answered.length < quiz.length ? `MCQ practice (${answered.length} of ${quiz.length} answered)` : "MCQ practice",
    level: SETCFG.level, group: Number(state.unit),
    total: answered.length, correct: answered.length - wrong.length, wrong
  });
  renderQuiz();
}

function renderQuiz() {
  const quiz = units[state.unit].quiz || [];
  if (!els.quizSection || !els.quizList || !els.quizScore) return;
  els.quizSection.hidden = quiz.length === 0;
  els.quizList.replaceChildren();

  let correctCount = 0;
  quiz.forEach((question, index) => {
    const key = `${state.unit}-${index}`;
    const selected = state.quizAnswers[key];
    const answered = Boolean(selected);
    if (selected === question.answer) correctCount += 1;

    const item = document.createElement("article");
    item.className = "quiz-item";
    const prompt = document.createElement("p");
    prompt.className = "quiz-question";
    prompt.textContent = `${index + 1}. ${question.question}`;
    item.append(prompt);

    const optionWrap = document.createElement("div");
    optionWrap.className = "quiz-options";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = `${option.letter}. ${option.text}`;
      if (answered && option.letter === question.answer) button.classList.add("correct");
      if (answered && option.letter === selected && selected !== question.answer) button.classList.add("wrong");
      button.addEventListener("click", () => {
        if (!(key in quizFirst)) quizFirst[key] = option.letter; // the first answer is the one reported to the teacher
        state.quizAnswers[key] = option.letter;
        renderQuiz();
        sendQuizResult(false);
      });
      optionWrap.append(button);
    });
    item.append(optionWrap);

    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    if (answered) {
      const answerText = question.options.find(option => option.letter === question.answer)?.text || question.answerWord || "";
      feedback.textContent = selected === question.answer ? `Correct: ${answerText}` : `Try again. Correct answer: ${question.answer}. ${answerText}`;
    } else {
      feedback.textContent = "Choose one answer.";
    }
    item.append(feedback);
    els.quizList.append(item);
  });

  els.quizScore.textContent = `${correctCount} / ${quiz.length}`;
  const tracking = Boolean(window.GsatTracker && GsatTracker.enabled);
  const answeredCount = quiz.filter((_, i) => quizFirst[`${state.unit}-${i}`]).length;
  const sendBtn = els.quizSection.querySelector("#quizSend");
  const sentNote = els.quizSection.querySelector("#quizSentNote");
  sendBtn.hidden = !tracking || Boolean(quizSent[state.unit]) || answeredCount === 0;
  sendBtn.textContent = `Send result 送出成績 (${answeredCount}/${quiz.length})`;
  sentNote.hidden = !quizSent[state.unit];
}

// ---------- Barron's / Hot Words inside sample sentences ----------
// Maps every inflected form (abounds, abounded, abounding, ...) to its headword, per word set.
// The page's own set is checked first, so a word in both books links within the current book.
let wordForms = null;   // { barrons: Map, hot: Map, va: Map }
let barronsPhrases = [];

function buildForms(index) {
  const forms = new Map();
  const add = (form, head) => { if (form.length > 2 && !forms.has(form)) forms.set(form, head); };
  const MIN_STEM = 4; // short headwords (aid, ban, …) match only as themselves, so everyday words are not mis-linked
  const heads = Object.keys(index);
  heads.forEach(head => add(head, head)); // exact headwords win over generated forms
  // Words ending in -e claim shared forms first (waning -> wane, not wan; loathing -> loathe, not loath).
  [...heads].sort((a, b) => Number(b.endsWith("e")) - Number(a.endsWith("e"))).forEach(head => {
    if (/\s/.test(head)) { if (!barronsPhrases.includes(head)) barronsPhrases.push(head); return; }
    const w = head;
    if (w.length < MIN_STEM) return;
    ["s", "es", "d", "ed", "ing", "ly", "ness", "ment"].forEach(suf => add(w + suf, head));
    if (w.endsWith("e")) {
      const stem = w.slice(0, -1);
      ["ing", "ion", "ions", "ation", "ations"].forEach(suf => add(stem + suf, head));
    }
    if (/[^aeiou]y$/.test(w)) {
      const stem = w.slice(0, -1);
      ["ies", "ied", "ily", "iness"].forEach(suf => add(stem + suf, head));
    }
    if (w.endsWith("le")) add(w.slice(0, -1) + "y", head);           // amenable -> amenably
    if (w.endsWith("ic")) add(w + "ally", head);                    // laconic -> laconically
    if (w.endsWith("ate")) add(w.slice(0, -1) + "ion", head);       // allocate -> allocation (already via e)
    if (/[^aeiou][aeiou][bdgklmnprt]$/.test(w)) {                   // abet -> abetted, abetting
      const last = w.slice(-1);
      ["ed", "ing"].forEach(suf => add(w + last + suf, head));
    }
  });
  return forms;
}

function buildBarronsForms() {
  wordForms = {};
  BOOK_ZONES.forEach(id => { wordForms[id] = buildForms(SETS[id].index()); });
  barronsPhrases.sort((a, b) => b.length - a.length);
}

// Generated forms that look like a headword but mean something else.
const NOT_WORD = {};
Object.keys(SETS).forEach(id => { NOT_WORD[id] = new Set(); });
const SET_ORDER = [SET, ...BOOK_ZONES.filter(s => s !== SET)];

// Roots pages: the card's own word (and simple inflections) is highlighted as the target even when no other book has it.
function isOwnWordForm(token, word, forms = []) {
  const t = token.toLowerCase(), w = word.toLowerCase();
  if (t === w || forms.some(f => f.toLowerCase().split(/\s+/).includes(t))) return true;
  const stem = w.replace(/e$/, "");
  return [w + "s", w + "es", w + "d", w + "ed", stem + "ing", stem + "ed", w.replace(/y$/, "ies"), w.replace(/y$/, "ied")].includes(t);
}

function findBarrons(token) {
  if (!wordForms) buildBarronsForms();
  const key = token.toLowerCase();
  for (const set of SET_ORDER) {
    if (NOT_WORD[set].has(key)) continue;
    const head = wordForms[set].get(key);
    if (head) return { set, head };
  }
  return null;
}

function makeSentenceNodes(card, text) {
  if (!wordForms) buildBarronsForms();
  // The card's own sentence: the blank becomes the highlighted answer (a word or a whole phrase).
  if (text == null && /_{4,}/.test(card.sentence)) {
    const [before, ...rest] = card.sentence.split(/_{4,}/);
    const target = document.createElement("button");
    target.type = "button";
    target.className = "barrons-word target";
    target.textContent = card.answer || card.word;
    target.title = `This card's word: ${card.word}`;
    target.addEventListener("pointerenter", event => {
      if (event.pointerType !== "mouse") return;
      setLookup(card.word, card.lookup.english, card.lookup.chinese);
    });
    target.addEventListener("click", event => { event.stopPropagation(); speak(card.answer || card.word); });
    return [...makeSentenceNodes(card, before), target, ...makeSentenceNodes(card, rest.join(card.answer || card.word))];
  }
  const sentence = text == null ? fillSentence(card) : text;
  const phrasePart = barronsPhrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const wordPart = "[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'-]*";
  const splitter = new RegExp(`(${phrasePart ? phrasePart + "|" : ""}${wordPart})`, "gi");
  const ownWord = card.word.toLowerCase();

  // Hyphenated tokens (once-revered) are split so each half can be matched, unless the whole thing is a headword.
  const pieces = sentence.split(splitter).flatMap(part => {
    if (!part || !part.includes("-") || findBarrons(part)) return [part];
    return part.split(/(-)/);
  });

  return pieces.map(part => {
    if (!part || !/^[A-Za-zÀ-ÿ]/.test(part)) return document.createTextNode(part || "");
    const found = findBarrons(part.replace(/^['-]+|['-]+$/g, "").replace(/'s$/i, ""));
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = part;

    if (SET === "roots" && isOwnWordForm(part.replace(/^['-]+|['-]+$/g, ""), card.word, card.forms)) {
      button.className = "barrons-word roots-word target";
      button.title = `This card's word: ${card.word}`;
      button.addEventListener("pointerenter", event => {
        if (event.pointerType !== "mouse") return;
        setLookup(card.word, card.lookup.english, card.lookup.chinese);
      });
      button.addEventListener("click", event => { event.stopPropagation(); speak(card.word); });
      return button;
    }

    if (!found) {
      button.addEventListener("click", event => {
        event.stopPropagation();
        lookupWord(part, card);
      });
      return button;
    }

    const { set, head } = found;
    const [unit, cardIndex, definition, chinese] = SETS[set].index()[head];
    const isTarget = set === SET && head === ownWord;
    const cls = SETS[set].cls;
    button.className = `barrons-word${cls ? ` ${cls}-word` : ""}${isTarget ? " target" : ""}`;
    button.title = isTarget
      ? `This card's word: ${head}`
      : `${SETS[set].label(unit)}: ${head}. Click to open its flashcard.`;
    if (!isTarget) {
      const badge = document.createElement("sup");
      badge.className = cls ? `unit-badge ${cls}-badge` : "unit-badge";
      badge.textContent = SETS[set].badge(unit);
      button.append(badge);
    }
    button.addEventListener("pointerenter", event => {
      if (event.pointerType !== "mouse") return;
      setLookup(head, definition, chinese);
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => speak(part.replace(/'s$/i, "")), 180);
    });
    button.addEventListener("pointerleave", () => clearTimeout(hoverTimer));
    button.addEventListener("click", event => {
      event.stopPropagation();
      if (isTarget) { speak(head); return; }
      openBarronsCard(head, unit, cardIndex, set);
    });
    return button;
  });
}

// ---------- Advanced sentence (Units 31–46): shown under the original sentence ----------
function renderAdvanced(card) {
  let block = document.querySelector("#advancedBlock");
  if (!block) {
    block = document.createElement("div");
    block.className = "sentence-block advanced-block";
    block.id = "advancedBlock";
    block.innerHTML = `<div class="sentence-heading"><span>${SET === "roots" ? "Another Example <small>另一個例句</small>" : `Advanced Sentence <small>★ review words from other ${SET === "hot" ? "lessons" : "units"}</small>`}</span><button class="speak-button" id="speakAdvanced" type="button">Sentence</button></div><p class="sentence" id="advSentence"></p><p class="translation" id="advTranslation"></p>`;
    els.translation.closest(".sentence-block").insertAdjacentElement("afterend", block);
    block.querySelector("#speakAdvanced").addEventListener("click", event => {
      event.stopPropagation();
      const current = currentCard();
      if (current.advSentence) speak(current.advSentence, 0.86);
    });
  }
  block.hidden = !card.advSentence;
  if (!card.advSentence) return;
  block.querySelector("#advSentence").replaceChildren(...makeSentenceNodes(card, card.advSentence));
  block.querySelector("#advTranslation").textContent = card.advTranslation || "";
}

// ---------- Set challenge sentence (roots sets only): one sentence using ≥4 words of this set ----------
// Data: roots-set-sentences.js (window.ROOTS_SET_SENTENCES = { "<set>": { en, zh } }).
// Highlighted words: mouse hover = speak + pop-up with POS / English / 中文; tap (touch) does the same.
let wordPop = null;
let popHideTimer = null;
let popSpeakTimer = null;

function setWordForCard(token, list) {
  const clean = token.replace(/^['-]+|['-]+$/g, "").replace(/'s$/i, "");
  if (!clean) return null;
  for (let i = 0; i < list.length; i += 1) {
    const head = list[i].word.replace(/\s*\(.*?\)\s*/g, "").trim();
    if (head.includes(" ")) continue;
    if (isOwnWordForm(clean, head, list[i].forms)) return i;
  }
  return null;
}

function ensureWordPop() {
  if (wordPop) return wordPop;
  wordPop = document.createElement("div");
  wordPop.className = "word-pop";
  wordPop.hidden = true;
  wordPop.setAttribute("role", "tooltip");
  wordPop.innerHTML = `<div class="word-pop-head"><button type="button" class="word-pop-say" aria-label="Listen">🔊</button><b class="word-pop-word"></b><span class="word-pop-pos"></span></div><p class="word-pop-en"></p><p class="word-pop-zh"></p><button type="button" class="word-pop-open"></button>`;
  document.body.append(wordPop);
  wordPop.addEventListener("pointerenter", () => clearTimeout(popHideTimer));
  wordPop.addEventListener("pointerleave", event => { if (event.pointerType === "mouse") hideWordPop(250); });
  wordPop.querySelector(".word-pop-say").addEventListener("click", event => { event.stopPropagation(); speak(wordPop.dataset.say || ""); });
  document.addEventListener("pointerdown", event => {
    if (!wordPop.hidden && !wordPop.contains(event.target) && !event.target.closest(".set-word")) hideWordPop(0);
  });
  window.addEventListener("scroll", () => hideWordPop(0), { passive: true });
  document.addEventListener("keydown", event => { if (event.key === "Escape") hideWordPop(0); });
  return wordPop;
}

function showWordPop(anchor, info) {
  const pop = ensureWordPop();
  clearTimeout(popHideTimer);
  pop.dataset.say = info.say;
  pop.querySelector(".word-pop-word").textContent = info.word;
  pop.querySelector(".word-pop-pos").textContent = info.pos || "";
  pop.querySelector(".word-pop-en").textContent = info.english || "";
  pop.querySelector(".word-pop-zh").textContent = info.chinese || "";
  const open = pop.querySelector(".word-pop-open");
  open.hidden = !info.open;
  open.textContent = info.openLabel || "";
  open.onclick = info.open ? event => { event.stopPropagation(); hideWordPop(0); info.open(); } : null;
  pop.hidden = false;
  const r = anchor.getBoundingClientRect();
  const w = pop.offsetWidth, h = pop.offsetHeight;
  let left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8);
  let top = r.bottom + 8;
  if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 8);
  pop.style.left = `${left}px`;
  pop.style.top = `${top}px`;
  document.querySelectorAll(".set-word.active").forEach(el => el.classList.remove("active"));
  anchor.classList.add("active");
}

function hideWordPop(delay = 200) {
  clearTimeout(popHideTimer);
  popHideTimer = setTimeout(() => {
    if (wordPop) wordPop.hidden = true;
    document.querySelectorAll(".set-word.active").forEach(el => el.classList.remove("active"));
  }, delay);
}

function bindPopWord(button, info) {
  button.addEventListener("pointerenter", event => {
    if (event.pointerType !== "mouse") return;
    showWordPop(button, info);
    clearTimeout(popSpeakTimer);
    popSpeakTimer = setTimeout(() => speak(info.say), 180);
  });
  button.addEventListener("pointerleave", event => {
    if (event.pointerType !== "mouse") return;
    clearTimeout(popSpeakTimer);
    hideWordPop(250);
  });
  button.addEventListener("click", event => {
    event.stopPropagation();
    showWordPop(button, info);
    speak(info.say);
  });
}

function makeSetSentenceNodes(text, list) {
  if (!wordForms) buildBarronsForms();
  const parts = text.split(/([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'-]*)/);
  return parts.map(part => {
    if (!part || !/^[A-Za-zÀ-ÿ]/.test(part)) return document.createTextNode(part || "");
    const idx = setWordForCard(part, list);
    const clean = part.replace(/^['-]+|['-]+$/g, "").replace(/'s$/i, "");
    if (idx != null) {
      const card = list[idx];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "set-word";
      button.textContent = part;
      bindPopWord(button, {
        word: card.word, pos: card.pos, english: card.definition, chinese: card.chinese, say: clean,
        openLabel: "Open this card 看字卡 →",
        open: () => {
          state.index = state.order.indexOf(idx);
          if (state.index < 0) { resetOrder(); state.index = idx; }
          render();
          speak(card.word);
          els.flashcard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      return button;
    }
    const found = findBarrons(clean);
    if (found) {
      const { set, head } = found;
      const [unit, cardIndex, definition, chinese] = SETS[set].index()[head];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "set-word other-book";
      button.textContent = part;
      bindPopWord(button, {
        word: head, pos: SETS[set].label(unit), english: definition, chinese, say: clean,
        openLabel: "Open its flashcard 開啟字卡 →",
        open: () => openBarronsCard(head, unit, cardIndex, set)
      });
      return button;
    }
    return document.createTextNode(part);
  });
}

function renderSetSentence() {
  const data = (window.ROOTS_SET_SENTENCES || {})[String(state.unit)];
  const studyArea = document.querySelector(".study-area");
  if (!data || !studyArea) return;
  const list = cards();
  const section = document.createElement("section");
  section.className = "set-sentence";
  section.id = "setSentence";
  section.innerHTML = `
    <div class="set-sentence-head">
      <div>
        <p class="eyebrow">Set Challenge Sentence · 本組進階例句</p>
        <p class="set-sentence-hint">Hover a highlighted word to hear it and see its meaning (tap on phones). 滑過螢光字：聽發音、看英英／中文解釋。</p>
      </div>
      <div class="set-sentence-actions">
        <span class="set-sentence-count"></span>
        <button class="speak-button" type="button" id="speakSetSentence">Listen</button>
        <button class="secondary-button set-zh-toggle" type="button" aria-pressed="true">中文</button>
      </div>
    </div>
    <p class="set-sentence-en"></p>
    <p class="set-sentence-zh"></p>`;
  const nodes = makeSetSentenceNodes(data.en, list);
  section.querySelector(".set-sentence-en").replaceChildren(...nodes);
  const used = new Set([...section.querySelectorAll(".set-word:not(.other-book)")].map(b => setWordForCard(b.textContent, list)));
  section.querySelector(".set-sentence-count").textContent = `${used.size} words from this set`;
  section.querySelector(".set-sentence-zh").textContent = data.zh;
  section.querySelector("#speakSetSentence").addEventListener("click", () => speak(data.en, 0.86));
  const toggle = section.querySelector(".set-zh-toggle");
  const zh = section.querySelector(".set-sentence-zh");
  let showZh = true;
  try { showZh = localStorage.getItem("rootsSetSentenceZh") !== "0"; } catch (error) { /* storage blocked */ }
  const applyZh = () => { zh.hidden = !showZh; toggle.setAttribute("aria-pressed", String(showZh)); toggle.textContent = showZh ? "Hide 中文" : "Show 中文"; };
  applyZh();
  toggle.addEventListener("click", () => {
    showZh = !showZh; applyZh();
    try { localStorage.setItem("rootsSetSentenceZh", showZh ? "1" : "0"); } catch (error) { /* storage blocked */ }
  });
  studyArea.insertAdjacentElement("beforebegin", section);
}

function openBarronsCard(head, unit, cardIndex, set = SET) {
  if (set === SET && String(unit) === String(state.unit)) {
    state.index = state.order.indexOf(cardIndex);
    state.flipped = true;
    render();
    speak(head);
    els.flashcard.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  location.href = `${SETS[set].page(unit)}#w=${encodeURIComponent(head)}`;
}

function fillSentence(card) {
  return card.sentence.replace(/_{4,}/g, card.answer || card.word);
}

function lookupWord(rawWord, card) {
  const word = normalizeWord(rawWord);
  const local = localLookup[word];
  if (local) {
    setLookup(rawWord, local[0], local[1]);
    return;
  }
  setLookup(rawWord, "Looking up English meaning...", "正在查詢中文意思...");
  fetchDictionary(word, rawWord);
}

async function fetchDictionary(word, displayWord) {
  let english = "No offline entry yet. Use the sentence context and try the Cambridge link on the card.";
  let chinese = "目前沒有離線中文釋義；可之後加入本地字典。";

  try {
    const response = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=dp&max=1`, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const data = await response.json();
      const raw = data[0]?.defs?.[0];
      if (raw) {
        const [pos, ...rest] = raw.split("\t");
        english = `${pos} — ${rest.join(" ")}`;
      }
    }
  } catch (error) {
    english = "English lookup is offline right now.";
  }

  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|zh-TW`, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const data = await response.json();
      if (data.responseData?.translatedText) chinese = data.responseData.translatedText;
    }
  } catch (error) {
    chinese = "中文線上查詢目前無法連線。";
  }

  setLookup(displayWord, english, chinese);
}

function setLookup(word, english, chinese) {
  state.lookupText = word;
  els.lookupWord.textContent = word;
  els.lookupEnglish.textContent = english;
  els.lookupChinese.textContent = chinese;
}

function normalizeWord(word) {
  return word.toLowerCase().replace(/^['-]+|['-]+$/g, "");
}

function speak(text, rate = 0.92) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

// Card tile: the word, its part of speech, 中文 and its word family (drawn as SVG, no picture files needed).
function photoFor() { return ""; }
function preloadNextPhoto() {}
function openPhotoZoom() {}

function makeIllustration(card) {
  const ink = "#17202a", coral = "#c6533e", cream = "#fff5d6";
  const tone = { hot: "#b8541a", va: "#6b4fa0" }[SETCFG.cls] || "#087f8c";
  const word = card.word;
  const size = word.length > 22 ? 24 : word.length > 16 ? 30 : word.length > 11 ? 38 : 50;
  const zh = String(card.chinese || "");
  const zhLines = zh.length > 11 ? [zh.slice(0, 11), truncateText(zh.slice(11), 11)] : [zh];
  const family = card.family && card.family !== card.word ? `word family 詞族：${card.family}` : (card.isHead ? SETCFG.headLabel : "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" role="img" aria-label="${escapeXml(word)}">
    <rect width="420" height="420" rx="30" fill="#f7fafc"/>
    <circle cx="74" cy="74" r="40" fill="${tone}" opacity=".10"/>
    <circle cx="346" cy="350" r="54" fill="#d89a27" opacity=".13"/>
    <text x="210" y="62" text-anchor="middle" font-family="Arial, 'Noto Sans TC', sans-serif" font-size="18" font-weight="700" fill="${tone}">${escapeXml(SETCFG.tile)}${card.isHead ? " ★" : ""}</text>
    <rect x="30" y="92" width="360" height="140" rx="22" fill="${cream}" stroke="${tone}" stroke-width="6"/>
    <text x="210" y="${168 + size / 6}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${size}" font-weight="900" fill="${ink}">${escapeXml(word)}</text>
    <text x="210" y="216" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-style="italic" fill="${tone}">${escapeXml(card.pos || "")}</text>
    ${zhLines.map((line, i) => `<text x="210" y="${284 + i * 38}" text-anchor="middle" font-family="Arial, 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" font-size="30" font-weight="700" fill="${coral}">${escapeXml(line)}</text>`).join("")}
    <text x="210" y="392" text-anchor="middle" font-family="Arial, 'Noto Sans TC', sans-serif" font-size="17" font-weight="700" fill="${ink}" opacity=".75">${escapeXml(truncateText(family, 34))}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imageCue(card) {
  const definition = (card.definition || "").replace(/[.:;]+$/g, "");
  if (!definition) return "clear vocabulary meaning";
  return truncateText(definition, 42);
}

function truncateText(value, maxLength) {
  const text = String(value || "").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}...`;
}

function escapeXml(value) {
  return value.replace(/[<>&"']/g, char => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;"
  }[char]));
}

init();
