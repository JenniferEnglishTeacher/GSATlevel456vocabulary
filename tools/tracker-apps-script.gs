/**
 * 學測6000字 Vocabulary Board — student progress tracker (Google Apps Script).
 *
 * Paste this whole file into the spreadsheet's Apps Script editor (Extensions → Apps Script),
 * change TEACHER_KEY below to your own password, then Deploy → New deployment → Web app
 * (Execute as: Me · Who has access: Anyone).
 *
 * Tabs it creates and fills by itself:
 *   Test Log         one row per finished self-test
 *   Review Lists     one row per student: their current ★ review words
 *   Mistake Summary  rebuilt from the menu "📊 Tracker → Rebuild Mistake Summary"
 */
const TEACHER_KEY = "CHANGE-ME";   // the password you type on teacher.html
const TIMEZONE = "Asia/Taipei";

const TEST_SHEET = "Test Log";
const TEST_HEAD = ["Time 時間", "Name 姓名", "Test type 測驗類型", "Level", "Group", "Questions 題數", "Correct 答對", "Accuracy % 正確率", "Mistaken words 錯字", "Mistake keys", "Test label", "Page"];
const REVIEW_SHEET = "Review Lists";
const REVIEW_HEAD = ["Name 姓名", "Updated 更新時間", "Count 字數", "★ Review words 複習單字", "Keys"];
const SUMMARY_SHEET = "Mistake Summary";

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

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.kind === "test") {
      sheet_(TEST_SHEET, TEST_HEAD).appendRow([
        now_(), text_(d.name, 40), text_(d.type, 60), text_(d.level, 10), text_(d.group, 10),
        Number(d.total) || 0, Number(d.correct) || 0, Number(d.accuracy) || 0,
        text_(d.wrongWords, 5000), text_(d.wrongKeys, 5000), text_(d.label, 120), text_(d.page, 80)
      ]);
    } else if (d.kind === "review") {
      const sheet = sheet_(REVIEW_SHEET, REVIEW_HEAD);
      const name = text_(d.name, 40);
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
  const out = data => ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
  if (!e || !e.parameter || e.parameter.key !== TEACHER_KEY || TEACHER_KEY === "CHANGE-ME") return out({ error: "wrong key" });
  const tests = rows_(TEST_SHEET, TEST_HEAD).map(r => ({
    time: r[0], name: r[1], type: r[2], level: r[3], group: r[4], total: Number(r[5]), correct: Number(r[6]),
    accuracy: Number(r[7]), wrongWords: r[8], wrongKeys: r[9], label: r[10]
  }));
  const reviews = rows_(REVIEW_SHEET, REVIEW_HEAD).map(r => ({ name: r[0], updated: r[1], count: Number(r[2]), words: r[3], keys: r[4] }));
  return out({ tests: tests, reviews: reviews });
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu("📊 Tracker").addItem("Rebuild Mistake Summary 重新統計錯字", "rebuildMistakeSummary").addToUi();
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
