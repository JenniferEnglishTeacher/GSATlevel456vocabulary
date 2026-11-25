/**
 * 學測6000字 Vocabulary Board — student codes, device sync and progress tracker (Google Apps Script).
 *
 * Paste this whole file into the spreadsheet's Apps Script editor (Extensions → Apps Script).
 * Keep your own TEACHER_KEY below (the password you type on teacher.html).
 * Then Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy
 * (the web app address stays the same, so tracker-config.js does not change).
 *
 * Tabs it creates and fills by itself:
 *   Students         one row per student: Code 密碼, Name 姓名, MaxDevices, Devices, Active, Last seen, Note
 *                    You type Name (and optionally Code). Menu "📊 Tracker → 產生學生密碼" fills empty codes.
 *                    Clear a student's Devices cell to free their device slots. Active = FALSE locks the code.
 *   Sync             one row per student code: their ★ review list, 錯題本 and progress, shared by all their devices
 *   Test Log         one row per finished self-test
 *   Review Lists     one row per student: their current ★ review words
 *   Mistake Summary  rebuilt from the menu "📊 Tracker → Rebuild Mistake Summary"
 */
const TEACHER_KEY = "CHANGE-ME";   // the password you type on teacher.html
const TIMEZONE = "Asia/Taipei";
const DEFAULT_MAX_DEVICES = 3;     // used when a student's MaxDevices cell is empty

const TEST_SHEET = "Test Log";
const TEST_HEAD = ["Time 時間", "Name 姓名", "Test type 測驗類型", "Level", "Group", "Questions 題數", "Correct 答對", "Accuracy % 正確率", "Mistaken words 錯字", "Mistake keys", "Test label", "Page"];
const REVIEW_SHEET = "Review Lists";
const REVIEW_HEAD = ["Name 姓名", "Updated 更新時間", "Count 字數", "★ Review words 複習單字", "Keys"];
const SUMMARY_SHEET = "Mistake Summary";
const STUDENT_SHEET = "Students";
const STUDENT_HEAD = ["Code 密碼", "Name 姓名", "MaxDevices 裝置上限", "Devices 已登入裝置", "Active 啟用", "Last seen 最近使用", "Note 備註"];
const SYNC_SHEET = "Sync";
const SYNC_HEAD = ["Code 密碼", "Updated 更新時間", "State (JSON, split over columns)"];
const CHUNK = 45000; // a cell holds 50,000 characters

function sheet_(name, head) {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(name);
  if (!sheet) {
    sheet = book.insertSheet(name);
    sheet.appendRow(head);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, head.length).setFontWeight("bold").setBackground("#e6f0f2");
  }
  return sheet;
}

function now_() {
  return Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm:ss");
}

function text_(value, max) {
  // Plain text only: a leading = + - @ would otherwise be read as a formula.
  let s = String(value == null ? "" : value).slice(0, max || 500);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// ---------- Students ----------
function normCode_(code) {
  return String(code || "").trim().toUpperCase().replace(/\s+/g, "");
}

function findStudent_(code) {
  const c = normCode_(code);
  if (!c) return null;
  const sheet = sheet_(STUDENT_SHEET, STUDENT_HEAD);
  const n = sheet.getLastRow() - 1;
  if (n < 1) return null;
  const rows = sheet.getRange(2, 1, n, STUDENT_HEAD.length).getValues();
  for (let i = 0; i < rows.length; i++) {
    if (normCode_(rows[i][0]) !== c) continue;
    const r = rows[i];
    let devices = [];
    try { devices = JSON.parse(r[3] || "[]"); } catch (e) { devices = String(r[3] || "").split(/\s*,\s*/).filter(String); }
    if (!Array.isArray(devices)) devices = [];
    const active = !(r[4] === false || /^(false|no|0|停用|否)$/i.test(String(r[4]).trim()));
    return { sheet: sheet, row: i + 2, code: c, name: String(r[1] || "").trim() || c, max: Number(r[2]) || DEFAULT_MAX_DEVICES, devices: devices, active: active };
  }
  return null;
}

function saveDevices_(st) {
  st.sheet.getRange(st.row, 4).setValue(JSON.stringify(st.devices));
  st.sheet.getRange(st.row, 6).setValue(now_());
}

// Checks the code and the device. register = true lets a new device take a free slot (login).
function check_(code, device, register) {
  const st = findStudent_(code);
  if (!st || !st.active) return { error: "code" };
  const dev = String(device || "").slice(0, 40);
  if (!dev) return { error: "device" };
  if (st.devices.indexOf(dev) < 0) {
    if (!register) return { error: "device" };
    if (st.devices.length >= st.max) return { error: "full", max: st.max };
    st.devices.push(dev);
  }
  saveDevices_(st);
  return { student: st };
}

// ---------- Sync state (★ list, 錯題本, progress) ----------
function readState_(code) {
  const sheet = sheet_(SYNC_SHEET, SYNC_HEAD);
  const n = sheet.getLastRow() - 1;
  if (n < 1) return { row: 0, state: null };
  const codes = sheet.getRange(2, 1, n, 1).getValues().map(r => normCode_(r[0]));
  const at = codes.indexOf(code);
  if (at < 0) return { row: 0, state: null };
  const width = Math.max(3, sheet.getLastColumn());
  const cells = sheet.getRange(at + 2, 3, 1, width - 2).getValues()[0];
  const text = cells.map(String).join("");
  let state = null;
  try { state = text ? JSON.parse(text) : null; } catch (e) { state = null; }
  return { row: at + 2, state: state };
}

function writeState_(code, row, state) {
  const sheet = sheet_(SYNC_SHEET, SYNC_HEAD);
  const text = JSON.stringify(state);
  const parts = [];
  for (let i = 0; i < text.length; i += CHUNK) parts.push(text.slice(i, i + CHUNK));
  if (!parts.length) parts.push("");
  if (!row) { sheet.appendRow([code, now_()]); row = sheet.getLastRow(); }
  const width = Math.max(sheet.getLastColumn(), 2 + parts.length);
  const values = [code, now_()].concat(parts);
  while (values.length < width) values.push("");
  // Text format so a chunk starting with "=" or "+" is never read as a formula.
  sheet.getRange(row, 1, 1, width).setNumberFormat("@").setValues([values]);
}

// Three-way merge: an entry removed on one device (present in base, missing on that side) stays removed.
function merge3_(L, R, B, combine) {
  L = L || {}; R = R || {};
  const out = {};
  const keys = {};
  Object.keys(R).forEach(k => { keys[k] = 1; });
  Object.keys(L).forEach(k => { keys[k] = 1; });
  Object.keys(keys).forEach(k => {
    const inL = Object.prototype.hasOwnProperty.call(L, k), inR = Object.prototype.hasOwnProperty.call(R, k);
    const inB = B && Object.prototype.hasOwnProperty.call(B, k);
    if (inL && inR) out[k] = combine(L[k], R[k]);
    else if (!inB) out[k] = inL ? L[k] : R[k];
    // else: deleted on one side → drop
  });
  return out;
}

function toSet_(a) {
  const o = {};
  (Array.isArray(a) ? a : []).forEach(k => { if (typeof k === "string") o[k] = 1; });
  return o;
}

const newer_ = (a, b) => ((b && b.ts) || 0) > ((a && a.ts) || 0) ? Object.assign({}, b, { c: Math.max((a && a.c) || 0, b.c || 0) }) : Object.assign({}, a, { c: Math.max((a && a.c) || 0, (b && b.c) || 0) });
const max_ = (a, b) => Math.max(Number(a) || 0, Number(b) || 0);
const first_ = a => a;

// Keys kept in each student's browser storage and shared by all their devices.
const MERGE = {
  "gsat456-review-list": "set",
  "gsat-cf-wrong": newer_,
  "gsat-cf-progress": max_,
  "gsat-wf-progress": max_,
  "gsat-wf-practice": max_,
  "roots-review-cards": first_
};

function mergeState_(local, remote, base) {
  local = local || {}; remote = remote || {};
  const out = {};
  Object.keys(MERGE).forEach(key => {
    const rule = MERGE[key];
    const b = base ? base[key] : null;
    if (rule === "set") {
      const merged = merge3_(toSet_(local[key]), toSet_(remote[key]), b ? toSet_(b) : null, first_);
      // keep the device's own order first, then words added elsewhere
      const order = (Array.isArray(local[key]) ? local[key] : []).concat(Array.isArray(remote[key]) ? remote[key] : []);
      const seen = {};
      out[key] = order.filter(k => merged[k] && !seen[k] && (seen[k] = 1));
    } else {
      out[key] = merge3_(local[key], remote[key], b || null, rule);
    }
  });
  return out;
}

// ---------- Web app ----------
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);

    if (d.kind === "login" || d.kind === "sync") {
      const ck = check_(d.code, d.device, d.kind === "login");
      if (ck.error) return json_({ ok: false, error: ck.error, max: ck.max || 0 });
      const st = ck.student;
      const saved = readState_(st.code);
      let state = saved.state;
      if (d.local) {
        state = mergeState_(d.local, saved.state, d.base || null);
        writeState_(st.code, saved.row, state);
      }
      return json_({ ok: true, name: st.name, code: st.code, state: state || null });
    }

    // Results: with a code, the name always comes from the Students tab.
    let name = text_(d.name, 40);
    if (d.code) {
      const st = findStudent_(d.code);
      if (!st || !st.active) return ContentService.createTextOutput("error: code");
      name = text_(st.name, 40);
    }
    if (d.kind === "test") {
      sheet_(TEST_SHEET, TEST_HEAD).appendRow([
        now_(), name, text_(d.type, 60), text_(d.level, 10), text_(d.group, 10),
        Number(d.total) || 0, Number(d.correct) || 0, Number(d.accuracy) || 0,
        text_(d.wrongWords, 5000), text_(d.wrongKeys, 5000), text_(d.label, 120), text_(d.page, 80)
      ]);
    } else if (d.kind === "review") {
      const sheet = sheet_(REVIEW_SHEET, REVIEW_HEAD);
      const row = [name, now_(), Number(d.count) || 0, text_(d.words, 20000), text_(d.keys, 20000)];
      const names = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues().map(r => String(r[0])) : [];
      const at = names.indexOf(name);
      if (at >= 0) sheet.getRange(at + 2, 1, 1, row.length).setValues([row]);
      else sheet.appendRow(row);
    }
    return ContentService.createTextOutput("ok");
  } catch (error) {
    return ContentService.createTextOutput("error: " + error);
  } finally {
    lock.releaseLock();
  }
}

function rows_(name, head) {
  const sheet = sheet_(name, head);
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, head.length).getDisplayValues();
}

// teacher.html reads everything with ?key=<TEACHER_KEY>
function doGet(e) {
  if (!e || !e.parameter || e.parameter.key !== TEACHER_KEY || TEACHER_KEY === "CHANGE-ME") return json_({ error: "wrong key" });
  const tests = rows_(TEST_SHEET, TEST_HEAD).map(r => ({
    time: r[0], name: r[1], type: r[2], level: r[3], group: r[4], total: Number(r[5]), correct: Number(r[6]),
    accuracy: Number(r[7]), wrongWords: r[8], wrongKeys: r[9], label: r[10]
  }));
  const reviews = rows_(REVIEW_SHEET, REVIEW_HEAD).map(r => ({ name: r[0], updated: r[1], count: Number(r[2]), words: r[3], keys: r[4] }));
  const students = rows_(STUDENT_SHEET, STUDENT_HEAD).filter(r => r[0] || r[1]).map(r => {
    let devices = 0;
    try { devices = (JSON.parse(r[3] || "[]") || []).length; } catch (err) { devices = String(r[3] || "").split(",").filter(String).length; }
    return { code: r[0], name: r[1] || r[0], max: Number(r[2]) || DEFAULT_MAX_DEVICES, devices: devices,
      active: !/^(false|no|0|停用|否)$/i.test(String(r[4]).trim()), lastSeen: r[5] };
  });
  return json_({ tests: tests, reviews: reviews, students: students });
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu("📊 Tracker")
    .addItem("產生學生密碼 Make codes for new students", "makeCodes")
    .addItem("Rebuild Mistake Summary 重新統計錯字", "rebuildMistakeSummary")
    .addToUi();
}

// Fills an empty Code cell for every student row that has a Name. Letters/digits that are easy to read (no O/0, I/1).
function makeCodes() {
  const sheet = sheet_(STUDENT_SHEET, STUDENT_HEAD);
  const n = sheet.getLastRow() - 1;
  if (n < 1) { SpreadsheetApp.getUi().alert("Students 分頁還沒有學生。先在 Name 姓名 欄填學生姓名，再按一次。"); return; }
  const range = sheet.getRange(2, 1, n, STUDENT_HEAD.length);
  const rows = range.getValues();
  const used = {};
  rows.forEach(r => { if (r[0]) used[normCode_(r[0])] = 1; });
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let made = 0;
  rows.forEach(r => {
    if (r[0] || !String(r[1]).trim()) return;
    let code;
    do { code = ""; for (let i = 0; i < 6; i++) code += abc[Math.floor(Math.random() * abc.length)]; } while (used[code]);
    used[code] = 1;
    r[0] = code;
    if (!r[2]) r[2] = DEFAULT_MAX_DEVICES;
    if (r[4] === "") r[4] = true;
    made++;
  });
  range.setValues(rows);
  sheet.getRange(2, 5, n, 1).insertCheckboxes();
  SpreadsheetApp.getUi().alert(`已產生 ${made} 組密碼。 ${made} code(s) made.`);
}

// Word → how many times it was missed, by how many students, and who.
function rebuildMistakeSummary() {
  const tally = {};
  rows_(TEST_SHEET, TEST_HEAD).forEach(r => {
    String(r[8]).split(/\s*,\s*/).filter(String).forEach(word => {
      const t = tally[word] = tally[word] || { times: 0, students: {} };
      t.times += 1;
      t.students[r[1]] = true;
    });
  });
  const rows = Object.keys(tally).map(word => [word, tally[word].times, Object.keys(tally[word].students).length, Object.keys(tally[word].students).join(", ")])
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName(SUMMARY_SHEET) || book.insertSheet(SUMMARY_SHEET);
  sheet.clear();
  const head = ["Word 單字", "Times missed 錯誤次數", "Students 人數", "Who 學生"];
  sheet.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight("bold").setBackground("#e6f0f2");
  sheet.setFrozenRows(1);
  if (rows.length) sheet.getRange(2, 1, rows.length, head.length).setValues(rows);
}
