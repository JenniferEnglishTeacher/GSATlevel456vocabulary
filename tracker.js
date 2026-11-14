// Student progress tracker for the 學測6000字 board.
// Sends each finished self-test (MCQ practice, online quiz, review game, teacher test) and the student's ★ review list
// to the teacher's Google Sheet through the Apps Script web app set in tracker-config.js.
// If no web app address is set, nothing is asked and nothing is sent.
(function () {
  const ENDPOINT = String(window.GSAT_TRACKER_URL || "").trim();
  const NAME_KEY = "gsat456-student-name";
  const STORE_KEY = "gsat456-review-list";
  const SYNCED_KEY = "gsat456-review-synced";
  const QUEUE_KEY = "gsat456-tracker-queue";
  const enabled = /^https:\/\/script\.google\.com\//.test(ENDPOINT);

  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || "") ?? fallback; } catch (error) { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* storage blocked */ } };

  function getName() {
    try { return (localStorage.getItem(NAME_KEY) || "").trim(); } catch (error) { return ""; }
  }

  function setName(name) {
    const clean = String(name || "").trim().slice(0, 40);
    if (!clean) return;
    try { localStorage.setItem(NAME_KEY, clean); } catch (error) { /* storage blocked */ }
    document.querySelectorAll("[data-tracker-name]").forEach(el => { el.textContent = clean; });
  }

  // ---------- Name dialog ----------
  let askPromise = null;
  function askName(force, required) {
    const current = getName();
    if (current && !force) return Promise.resolve(current);
    if (askPromise) return askPromise;
    askPromise = new Promise(resolve => {
      const wrap = document.createElement("div");
      wrap.setAttribute("role", "dialog");
      wrap.setAttribute("aria-modal", "true");
      wrap.style.cssText = "position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(23,32,42,.55);padding:16px;font-family:Arial,'Noto Sans TC','Microsoft JhengHei',sans-serif";
      wrap.innerHTML = `
        <form style="background:#fff;border-radius:14px;padding:22px;max-width:380px;width:100%;box-shadow:0 18px 50px rgba(0,0,0,.3)">
          <h2 style="margin:0 0 6px;font-size:20px;color:#17202a">Your name 你的姓名</h2>
          <p style="margin:0 0 12px;color:#5d6b7a;font-size:14px;line-height:1.5">Your practice results and ★ review words are sent to your teacher under this name.<br>你的練習成績和 ★ 複習單字會用這個名字傳給老師。</p>
          <input type="text" maxlength="40" autocomplete="name" placeholder="班級＋姓名，例如 201 王小明" style="width:100%;padding:10px 12px;font-size:16px;border:1px solid #d7dee7;border-radius:8px;box-sizing:border-box">
          <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px">
            <button type="button" data-skip style="padding:9px 14px;border:1px solid #d7dee7;border-radius:8px;background:#fff;cursor:pointer;font-size:14px">Later 稍後</button>
            <button type="submit" style="padding:9px 16px;border:0;border-radius:8px;background:#087f8c;color:#fff;font-weight:700;cursor:pointer;font-size:14px">OK 確定</button>
          </div>
        </form>`;
      const input = wrap.querySelector("input");
      input.value = current;
      const done = value => { wrap.remove(); askPromise = null; resolve(value); };
      wrap.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) { input.focus(); return; }
        setName(value);
        done(value);
        reviewChanged();
        flushQueue();
      });
      const skip = wrap.querySelector("[data-skip]");
      if (required) skip.textContent = "Don't send 不送出";
      skip.addEventListener("click", () => done(getName()));
      document.body.append(wrap);
      input.focus();
    });
    return askPromise;
  }

  // ---------- Sending (failed sends wait in a queue and go out on the next visit) ----------
  // CORS request: the Apps Script answers "ok", so a failed send is noticed, queued and retried.
  function post(data, keepalive) {
    return fetch(ENDPOINT, {
      method: "POST", keepalive: !!keepalive,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data)
    }).then(r => r.text()).then(t => { if (!/^ok/.test(String(t).trim())) throw new Error(t || "no answer"); return true; });
  }

  function queueItem(data) {
    const queue = read(QUEUE_KEY, []);
    queue.push(data);
    write(QUEUE_KEY, queue.slice(-50));
  }

  function send(data) {
    if (!enabled) return Promise.resolve(false);
    return post(data, true)
      .catch(() => post(data, false)) // some browsers refuse keepalive requests: try once more without it
      .catch(() => { queueItem(data); return false; });
  }

  let flushing = false;
  async function flushQueue() {
    if (!enabled || flushing) return;
    const name = getName();
    const queue = read(QUEUE_KEY, []);
    if (!queue.length) return;
    flushing = true;
    write(QUEUE_KEY, []);
    const left = [];
    for (const item of queue) {
      if (!item.name) { if (name) item.name = name; else { left.push(item); continue; } } // waiting for a name
      try { await post(item, false); } catch (error) { left.push(item); }
    }
    if (left.length) write(QUEUE_KEY, read(QUEUE_KEY, []).concat(left).slice(-50));
    flushing = false;
  }

  // Small notice so the student (and teacher) can see whether the result reached the teacher.
  function toast(text, ok) {
    const box = document.createElement("div");
    box.setAttribute("role", "status");
    box.textContent = text;
    box.style.cssText = `position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:10000;max-width:92vw;padding:10px 16px;border-radius:10px;font:600 14px Arial,'Noto Sans TC','Microsoft JhengHei',sans-serif;color:#fff;background:${ok ? "#1f8a4c" : "#b3541e"};box-shadow:0 8px 24px rgba(0,0,0,.25)`;
    document.body.append(box);
    setTimeout(() => box.remove(), ok ? 3500 : 7000);
  }

  // ---------- Tests ----------
  // info: { type, level, group, total, correct, wrong: [{ w, key }], label }
  async function logTest(info) {
    if (!enabled || !info || !info.total) return false;
    const name = getName() || await askName(false, true);
    const seen = new Set();
    const wrong = (info.wrong || []).filter(x => x && x.w && !seen.has(x.key || x.w) && seen.add(x.key || x.w));
    const data = {
      kind: "test",
      name: name || "",
      type: info.type || "Practice",
      level: info.level ?? "",
      group: info.group ?? "",
      total: info.total,
      correct: info.correct,
      accuracy: Math.round((info.correct / info.total) * 100),
      wrongWords: wrong.map(x => x.w).join(", "),
      wrongKeys: wrong.map(x => x.key).filter(Boolean).join(","),
      label: info.label || "",
      page: location.pathname.split("/").pop() || "index.html"
    };
    if (!name) { // never throw a result away: keep it until the student gives a name
      queueItem(data);
      toast("⚠ 沒有姓名，成績還沒送給老師。下次輸入姓名後會自動送出。 Result saved — it will be sent once you enter your name.", false);
      return false;
    }
    const ok = await send(data);
    toast(ok ? "✓ 成績已送給老師 Result sent to your teacher" : "⚠ 網路問題，成績先存起來，下次開網頁會自動重送。 Not sent yet — will retry.", ok);
    return ok;
  }

  // Online quiz pages (levelN-groupGG.html): called from the quiz's own submit step with its state and data.
  function logQuiz(state, vocab, mcqs) {
    const zones = window.VOCAB_ZONES || {};
    const file = location.pathname.split("/").pop() || "";
    let zoneId = null, group = 0;
    Object.keys(zones).forEach(id => {
      // quiz pattern "level4-group{uu}.html" / "group{u}.html" -> regular expression
      const pattern = new RegExp("^" + zones[id].quiz.replace(/[.]/g, "\\.").replace("{uu}", "(\\d+)").replace("{u}", "(\\d+)") + "$");
      const m = pattern.exec(file);
      if (m) { zoneId = id; group = Number(m[1]); }
    });
    if (!zoneId || !state) return;
    const zone = zones[zoneId];
    if (state.studentName) setName(state.studentName);
    const tookP1 = state.mode !== "p2", tookP2 = state.mode !== "p1";
    const keyOf = word => {
      let i = vocab.findIndex(v => v.word === word || v.answer === word);
      if (i < 0) { // an inflected MCQ answer ("blocks"): find its question, which names the word it tests
        const q = mcqs.find(m => m.options && m.options[m.answer] === word && Number.isInteger(m.vocabIndex));
        if (q) i = q.vocabIndex;
      }
      return { w: word, key: i >= 0 ? `${zone.prefix}-${group}:${i}` : "" };
    };
    const p1Wrong = tookP1 ? state.p1WrongWords : [];
    const p2Wrong = tookP2 ? state.p2WrongWords : [];
    const total = (tookP1 ? vocab.length : 0) + (tookP2 ? mcqs.length : 0);
    const p2Right = typeof state.p2Score === "number" ? Math.min(state.p2Score, mcqs.length) : mcqs.length - p2Wrong.length;
    const correct = (tookP1 ? vocab.length - p1Wrong.length : 0) + (tookP2 ? p2Right : 0);
    logTest({
      type: `Online quiz${state.mode === "p1" ? " (spelling)" : state.mode === "p2" ? " (MCQ)" : " (spelling + MCQ)"}`,
      level: zone.levelLabel, group, total, correct,
      wrong: [...p1Wrong, ...p2Wrong].map(keyOf)
    });
  }

  // ---------- ★ review list ----------
  const loaded = {};
  function loadZone(id) {
    const zone = (window.VOCAB_ZONES || {})[id];
    if (!zone || window[zone.global]) return Promise.resolve();
    if (!loaded[id]) {
      loaded[id] = new Promise(resolve => {
        const script = document.createElement("script");
        script.src = zone.data;
        script.onload = script.onerror = () => resolve();
        document.head.append(script);
      });
    }
    return loaded[id];
  }

  async function wordsFor(keys) {
    const zones = window.VOCAB_ZONES || {};
    const parsed = keys.map(key => window.vocabZoneOfKey ? window.vocabZoneOfKey(key) : null).filter(Boolean);
    await Promise.all([...new Set(parsed.map(p => p.zone))].map(loadZone));
    const byZone = {};
    parsed.forEach(p => {
      const unit = (window[zones[p.zone].global] || []).find(u => u.unit === p.unit);
      const card = unit && unit.cards[p.index];
      if (card) (byZone[p.zone] = byZone[p.zone] || []).push(card.w);
    });
    return Object.keys(zones).filter(id => byZone[id]).map(id => `${zones[id].tag}: ${byZone[id].join(", ")}`).join(" | ");
  }

  async function syncReview() {
    if (!enabled) return;
    const name = getName();
    if (!name) return;
    const keys = read(STORE_KEY, []).filter(k => typeof k === "string");
    const signature = `${name}|${keys.join(",")}`;
    if (read(SYNCED_KEY, "") === signature) return;
    if (!keys.length && !read(SYNCED_KEY, "")) return; // never had a list: nothing to report
    const words = await wordsFor(keys);
    const ok = await send({ kind: "review", name, count: keys.length, words, keys: keys.join(",") });
    if (ok) write(SYNCED_KEY, signature);
  }

  let syncTimer = null;
  function reviewChanged() {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncReview, 4000);
  }

  // ---------- Start ----------
  function start() {
    const stored = getName();
    document.querySelectorAll("[data-tracker-name]").forEach(el => { el.textContent = stored || "—"; });
    document.querySelectorAll("[data-tracker-box]").forEach(el => { el.hidden = !enabled; });
    document.querySelectorAll("[data-tracker-change]").forEach(el => el.addEventListener("click", () => askName(true)));
    const quizName = document.querySelector("#student-name-input");
    if (quizName && stored && !quizName.value) quizName.value = stored;
    if (!enabled) return;
    if (!stored && document.body.hasAttribute("data-tracker-ask")) askName(false);
    flushQueue();
    window.addEventListener("online", flushQueue);
    setTimeout(syncReview, 3000);
    window.addEventListener("storage", event => { if (event.key === STORE_KEY) reviewChanged(); });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") { clearTimeout(syncTimer); syncReview(); }
    });
  }

  window.GsatTracker = { enabled, getName, setName, askName, logTest, logQuiz, reviewChanged, syncReview };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
