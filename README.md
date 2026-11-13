# GSATlevel456vocabulary

學測6000字 Vocabulary Board — Level 4 · 5 · 6 (word-family edition)

Live site: https://jenniferenglishteacher.github.io/GSATlevel456vocabulary/

| File | What it is |
| --- | --- |
| `index.html`, `dashboard.js`, `l4/l5/l6-dashboard-data.js` | Dashboard: three level tabs, 40 groups each, word chips, review list, Excel download |
| `lN-unitG.html` + `lN-unitG-data.js`, `app.js`, `gsat-words.js` | Flashcards for Level N Group G (example sentence, word family, word lookup, TTS) + 30-question MCQ practice |
| `levelN-groupGG.html` + `-data.js` + `-app.js` | Online quiz (spelling + 30 MCQ); results are recorded in the teacher's Google Sheet |
| `review-arcade.html` | 🎮 Test my words: quiz on the student's own review list, with mini-games |
| `styles.css`, `vendor/xlsx.full.min.js` | Shared styles and the Excel export library |
| `tools/build.py` | Script that generated the pages from the group data |
| `tracker.js`, `tracker-config.js` | Sends each finished self-test and the ★ review list to the teacher's Google Sheet (web app address goes in `tracker-config.js`) |
| `teacher.html` | Teacher page: student overview, test log, ★ lists, and a builder that turns mistaken words into a test link |
| `tools/tracker-apps-script.gs` | Google Apps Script to paste into the tracker spreadsheet |
