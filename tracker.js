// Student progress tracker for the 學測6000字 board.
// Sends each finished self-test (MCQ practice, online quiz, review game, teacher test) and the student's ★ review list
// to the teacher's Google Sheet through the Apps Script web app set in tracker-config.js.
// If no web app address is set, nothing is asked and nothing is sent.
// App mode (加到主畫面 / offline / in-app-browser warning): load pwa.js from the same folder as this file.
(function () {
  try {
    const me = document.currentScript && document.currentScript.src;
    if (!me || document.currentScript.hasAttribute("data-no-pwa") || window.__vocabPwa || document.querySelector('script[src*="pwa.js"]')) return;
    const s = document.createElement("script");
    s.src = me.replace(/tracker\.js(\?.*)?$/, "pwa.js?v=20261117a");
    document.head.append(s);
  } catch (error) { /* ignore */ }
})();
(function () {
  // Same address as tracker-config.js; used by pages that do not load tracker-config.js (past exams, listening).
  const DEFAULT_ENDPOINT = "https://script.google.com/macros/s/AKfycbx8nrhJxzJvw0KbTQixEBdcMxyC2hk5W4-3i3oKBlVLaWM0gxAnNj2b4p-Zjbq8sezE/exec";
  const ENDPOINT = String(window.GSAT_TRACKER_URL == null ? DEFAULT_ENDPOINT : window.GSAT_TRACKER_URL).trim();
  const NAME_KEY = "gsat456-student-name";
  const STORE_KEY = "gsat456-review-list";
  const SYNCED_KEY = "gsat456-review-synced";
  const QUEUE_KEY = "gsat456-tracker-queue";
  const AUTH_KEY = "gsat456-auth";        // { code, name, ok: last time the server accepted the code (ms) }
  const DEVICE_KEY = "gsat456-device";    // random id of this browser (one device slot)
  const BASE_KEY = "gsat456-sync-base";   // the state last agreed with the server (for three-way merge)
  const SYNC_AT_KEY = "gsat456-sync-at";
  // Browser storage shared by all of a student's devices (merged on the server, see tools/tracker-apps-script.gs).
  const SYNC_KEYS = ["gsat456-review-list", "gsat-cf-wrong", "gsat-cf-progress", "gsat-wf-progress", "gsat-wf-practice", "roots-review-cards"];
  const RECHECK_MS = 6 * 3600 * 1000;      // ask the server again every 6 hours
  const OFFLINE_MS = 14 * 24 * 3600 * 1000; // without internet, a checked code keeps working 14 days
  const PULL_MS = 20 * 1000;               // at most one sync per 20 s while moving between pages
  const enabled = /^https:\/\/(script\.google\.com|localhost|127\.0\.0\.1)[:/]/.test(ENDPOINT);
  const gateOn = enabled && !document.documentElement.hasAttribute("data-no-gate");

  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || "") ?? fallback; } catch (error) { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* storage blocked */ } };

  function getAuth() {
    const a = read(AUTH_KEY, null);
    return a && a.code ? a : null;
  }

  function getName() {
    const auth = getAuth();
    if (auth && auth.name) return auth.name;
    try { return (localStorage.getItem(NAME_KEY) || "").trim(); } catch (error) { return ""; }
  }

  function setName(name) {
    if (getAuth()) return; // the name comes with the student code
    const clean = String(name || "").trim().slice(0, 40);
    if (!clean) return;
    try { localStorage.setItem(NAME_KEY, clean); } catch (error) { /* storage blocked */ }
    document.querySelectorAll("[data-tracker-name]").forEach(el => { el.textContent = clean; });
  }

  // ---------- Name dialog ----------
  let askPromise = null;
  function askName(force, required) {
    if (gateOn) return force ? Promise.resolve(logout()) : Promise.resolve(getName());
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
    const auth = getAuth();
    if (auth && !data.code) data.code = auth.code;
    // One request only (no keepalive): a retried request could log the same test twice.
    return post(data, false).catch(() => { queueItem(data); return false; });
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
    const auth = getAuth();
    for (const item of queue) {
      if (auth && !item.code) item.code = auth.code;
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

  // ---------- Student code (login gate) ----------
  // Without a code the page stays hidden behind the login box. This keeps out people without a code;
  // it is not copy protection (the page files themselves are public on GitHub Pages).
  function deviceId() {
    let id = "";
    try { id = localStorage.getItem(DEVICE_KEY) || ""; } catch (error) { /* storage blocked */ }
    if (!id) {
      id = "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
      try { localStorage.setItem(DEVICE_KEY, id); } catch (error) { /* storage blocked */ }
    }
    return id;
  }

  function api(data) {
    return fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) })
      .then(r => r.json());
  }

  const LOCK_STYLE = "html.vg-lock body > *:not(.vg-gate){display:none!important}html.vg-lock body{background:#eef4f6!important}";
  function lockPage() {
    document.documentElement.classList.add("vg-lock");
    if (!document.getElementById("vg-lock-style")) {
      const st = document.createElement("style");
      st.id = "vg-lock-style";
      st.textContent = LOCK_STYLE;
      (document.head || document.documentElement).append(st);
    }
  }
  function unlockPage() {
    document.documentElement.classList.remove("vg-lock");
    document.querySelectorAll(".vg-gate").forEach(el => el.remove());
  }

  const ERR = {
    code: "密碼不對，或已停用。請向老師確認。 Wrong or inactive code.",
    full: n => `這組密碼已在 ${n} 台裝置登入，裝置數已滿。請老師幫你清除裝置後再登入。 This code is already used on ${n} devices.`,
    net: "連不上網路，請稍後再試。 No connection — try again."
  };

  let gateShown = false;
  function showGate(message) {
    lockPage();
    if (gateShown) { const m = document.querySelector(".vg-gate [data-msg]"); if (m && message) m.textContent = message; return; }
    gateShown = true;
    const build = () => {
      const wrap = document.createElement("div");
      wrap.className = "vg-gate";
      wrap.setAttribute("role", "dialog");
      wrap.setAttribute("aria-modal", "true");
      wrap.style.cssText = "position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;background:#eef4f6;padding:16px;font-family:Arial,'Noto Sans TC','Microsoft JhengHei',sans-serif";
      wrap.innerHTML = `
        <form style="background:#fff;border-radius:16px;padding:24px;max-width:390px;width:100%;box-shadow:0 18px 50px rgba(0,0,0,.18)">
          <div style="font-size:34px;line-height:1">🔑</div>
          <h2 style="margin:8px 0 6px;font-size:21px;color:#17202a">Student code 學生密碼</h2>
          <p style="margin:0 0 12px;color:#5d6b7a;font-size:14px;line-height:1.55">請輸入老師給你的密碼。同一組密碼最多可在 3 台裝置（手機、電腦、iPad）使用，★ 複習單字、錯題本和成績會自動同步。<br>Enter the code from your teacher.</p>
          <input type="text" maxlength="20" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="例如 K7QW3M" style="width:100%;padding:12px;font-size:20px;letter-spacing:2px;text-transform:uppercase;border:1px solid #d7dee7;border-radius:10px;box-sizing:border-box">
          <p data-msg style="min-height:20px;margin:10px 0 0;color:#b3541e;font-size:14px;line-height:1.5"></p>
          <button type="submit" style="width:100%;margin-top:8px;padding:12px;border:0;border-radius:10px;background:#087f8c;color:#fff;font-weight:700;font-size:16px;cursor:pointer">登入 Log in</button>
        </form>`;
      const form = wrap.querySelector("form"), input = wrap.querySelector("input"), msg = wrap.querySelector("[data-msg]"), btn = wrap.querySelector("button");
      if (message) msg.textContent = message;
      form.addEventListener("submit", async event => {
        event.preventDefault();
        const code = input.value.trim().toUpperCase().replace(/\s+/g, "");
        if (!code) { input.focus(); return; }
        btn.disabled = true; btn.textContent = "登入中… Checking…"; msg.textContent = "";
        const result = await login(code);
        btn.disabled = false; btn.textContent = "登入 Log in";
        if (result === true) { gateShown = false; unlockPage(); afterLogin(); return; }
        msg.textContent = result;
        input.select();
      });
      document.body.append(wrap);
      input.focus();
    };
    if (document.body) build(); else document.addEventListener("DOMContentLoaded", build);
  }

  async function login(code) {
    let res;
    try { res = await api({ kind: "login", code, device: deviceId() }); } catch (error) { return ERR.net; }
    if (!res || !res.ok) return res && res.error === "full" ? ERR.full(res.max || 3) : ERR.code;
    const prev = read(AUTH_KEY, null);
    // Another student's code on this device: their words must not mix into this account.
    if (prev && prev.code && prev.code !== res.code) {
      SYNC_KEYS.forEach(k => { try { localStorage.removeItem(k); } catch (error) { /* ignore */ } });
      try { localStorage.removeItem(BASE_KEY); localStorage.removeItem(SYNCED_KEY); } catch (error) { /* ignore */ }
    }
    write(AUTH_KEY, { code: res.code, name: res.name, ok: Date.now() });
    try { localStorage.setItem(NAME_KEY, res.name); } catch (error) { /* ignore */ }
    await syncState(true);
    return true;
  }

  function logout() {
    try { localStorage.removeItem(AUTH_KEY); } catch (error) { /* ignore */ }
    showGate("");
    return "";
  }

  // ---------- Sync between the student's devices ----------
  function localState() {
    const out = {};
    SYNC_KEYS.forEach(k => { const v = read(k, null); out[k] = v != null ? v : (k === STORE_KEY ? [] : {}); });
    return out;
  }

  function applyState(state) {
    if (!state) return;
    let changed = false;
    SYNC_KEYS.forEach(k => {
      if (!(k in state)) return;
      const next = JSON.stringify(state[k]);
      let now = null;
      try { now = localStorage.getItem(k); } catch (error) { /* ignore */ }
      if (now === next || (now == null && (next === "[]" || next === "{}"))) return;
      try { localStorage.setItem(k, next); } catch (error) { return; }
      changed = true;
      // Pages already listen for "storage" (other tabs); the same event refreshes them here.
      try { window.dispatchEvent(new StorageEvent("storage", { key: k, newValue: next })); } catch (error) { /* old browser */ }
    });
    if (changed) reviewChanged();
  }

  let syncing = null;
  function syncState(force, keepalive) {
    const auth = getAuth();
    if (!enabled || !auth) return Promise.resolve(false);
    const local = localState();
    const base = read(BASE_KEY, null);
    const dirty = JSON.stringify(local) !== JSON.stringify(base || {});
    const last = Number(read(SYNC_AT_KEY, 0)) || 0;
    if (!force && !dirty && Date.now() - last < PULL_MS && Date.now() - auth.ok < RECHECK_MS) return Promise.resolve(true);
    if (syncing) return syncing;
    const body = { kind: "sync", code: auth.code, device: deviceId(), local, base };
    if (keepalive) {
      // page is closing: send the changes and do not wait for the answer
      try { fetch(ENDPOINT, { method: "POST", keepalive: JSON.stringify(body).length < 60000, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body) }); } catch (error) { /* ignore */ }
      return Promise.resolve(true);
    }
    syncing = api(body).then(res => {
      if (res && res.ok) {
        write(AUTH_KEY, { code: auth.code, name: res.name || auth.name, ok: Date.now() });
        if (res.name && res.name !== auth.name) document.querySelectorAll("[data-tracker-name]").forEach(el => { el.textContent = res.name; });
        const state = res.state || local;
        // do not throw away a change made on this device while the request was on its way
        const now = localState();
        if (JSON.stringify(now) === JSON.stringify(local)) applyState(state);
        write(BASE_KEY, state);
        write(SYNC_AT_KEY, Date.now());
        return true;
      }
      if (res && res.error === "device") return api({ kind: "login", code: auth.code, device: deviceId() }).then(r => {
        if (r && r.ok) { write(AUTH_KEY, { code: auth.code, name: r.name, ok: Date.now() }); return true; }
        try { localStorage.removeItem(AUTH_KEY); } catch (error) { /* ignore */ } showGate(r && r.error === "full" ? ERR.full(r.max || 3) : ERR.code); return false;
      });
      if (res && res.error === "code") { try { localStorage.removeItem(AUTH_KEY); } catch (error) { /* ignore */ } showGate(ERR.code); }
      return false;
    }).catch(() => false).finally(() => { syncing = null; });
    return syncing;
  }

  // Runs as soon as this file loads: hide the page until a code is known.
  if (gateOn) {
    const auth = getAuth();
    if (!auth) lockPage();
    else if (Date.now() - (auth.ok || 0) > OFFLINE_MS) lockPage(); // not checked for 14 days: ask the server before showing
  }

  function afterLogin() {
    const name = getName();
    document.querySelectorAll("[data-tracker-name]").forEach(el => { el.textContent = name || "—"; });
    const quizName = document.querySelector("#student-name-input");
    if (quizName && name) { quizName.value = name; quizName.readOnly = true; }
    flushQueue();
    setTimeout(syncReview, 3000);
  }

  // ---------- Start ----------
  function start() {
    if (gateOn) {
      const auth = getAuth();
      if (!auth) { showGate(""); }
      else if (document.documentElement.classList.contains("vg-lock")) {
        // checked too long ago: ask the server before showing the page
        syncState(true).then(ok => { if (ok) { unlockPage(); afterLogin(); } else if (getAuth()) showGate(ERR.net); });
      } else syncState(false);
      document.querySelectorAll("[data-tracker-change]").forEach(el => { el.textContent = "登出 Log out"; });
      window.addEventListener("pageshow", e => { if (e.persisted) syncState(false); });
    }
    const stored = getName();
    document.querySelectorAll("[data-tracker-name]").forEach(el => { el.textContent = stored || "—"; });
    document.querySelectorAll("[data-tracker-box]").forEach(el => { el.hidden = !enabled; });
    document.querySelectorAll("[data-tracker-change]").forEach(el => el.addEventListener("click", () => askName(true)));
    const quizName = document.querySelector("#student-name-input");
    if (quizName && stored && !quizName.value) quizName.value = stored;
    if (quizName && getAuth()) quizName.readOnly = true;
    if (!enabled) return;
    if (!gateOn && !stored && document.body.hasAttribute("data-tracker-ask")) askName(false);
    flushQueue();
    window.addEventListener("online", flushQueue);
    setTimeout(syncReview, 3000);
    window.addEventListener("storage", event => { if (event.key === STORE_KEY) reviewChanged(); });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") { clearTimeout(syncTimer); syncReview(); syncState(false, true); }
      else { flushQueue(); syncState(false); } // app reopened from the home screen: resend anything still waiting, pull other devices' changes
    });
  }

  window.GsatTracker = { enabled, getName, setName, askName, logTest, logQuiz, reviewChanged, syncReview, syncState, logout, getAuth };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
