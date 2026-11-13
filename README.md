# GSATlevel456vocabulary

Vocabulary Board — 學測6000字 Level 4 · 5 · 6 (word-family edition) · LiveABC Level 3–5 (Basic / Advanced) · 2001–3000字 LiveABC Level 3 · LiveABC Level 2–4 · 國中小基礎2000字 · 國中小1200字 · 國中小進階800字 · 4000 Essential Words (Book 3) · 捷進全民英檢初級單字書 · AWL Sublists 1–10

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
| `books.js` | Registry of every book and zone on the site (add a new book here) |
| `j-unitG.html` + `j-unitG-data.js`, `groupG.html` + `-data.js` + `-app.js`, `j-dashboard-data.js` | 國中小基礎2000字: flashcards + MCQ practice, online quiz, and dashboard data for Group G |
| `g-unitN.html` + `g-unitN-data.js`, `gept-lessonN.html` + `-data.js` + `-app.js`, `g-dashboard-data.js` | 捷進全民英檢初級單字書: flashcards + MCQ practice, online quiz, and dashboard data for Lesson N |
| `lb-unitN.html` / `la-unitN.html` + `-data.js`, `liveabc-basic-uN.html` / `liveabc-advanced-uN.html` + `-data.js` + `-app.js`, `lb-`/`la-dashboard-data.js` | LiveABC Level 3–5 Basic / Advanced, Unit N: flashcards + MCQ practice, online quiz (spelling + MCQ, tracked), dashboard data. Built from the unit pages of `liveABCvocabLevel3-5` by `tools/liveabc_extract.js` + `tools/liveabc_convert.py`; `tools/liveabc_manual.py` holds the hand-checked answers and rewritten sentences |
| `tU-unitP.html` + `tU-unitP-data.js`, `level3-unitU-partP.html` + `-data.js` + `-app.js`, `tU-dashboard-data.js` | 2001–3000字 Level 3, Unit U Part P: flashcards + MCQ practice, online quiz (spelling + 25 MCQ), dashboard data. Built from the Vocabulary Learning Guide worksheets by `tools/l3_dump.py` + `tools/l3_convert.py` (hand-checked blanks in `tools/l3_manual.py`) |
| `kb-unitN.html` + `-data.js`, `liveabc24-basic-uN.html` + `-data.js` + `-app.js`, `kb-dashboard-data.js` | LiveABC Level 2–4 Basic, Unit N (Advanced uses `ka-` / `liveabc24-advanced-`): flashcards + MCQ practice, online quiz, dashboard data. Built by `tools/liveabc_convert.py --book=2-4` with the hand-checked answers in `tools/liveabc24_manual.py` |
| `e-unitN.html` + `-data.js`, `e1200-unitN.html` + `-data.js` + `-app.js`, `e-dashboard-data.js` | 國中小1200字, Unit N (39 themed units, 1,331 words): flashcards + MCQ practice, online quiz, dashboard data. Built by `tools/e1200_convert.py` from the Q&A worksheet docx; English definitions are hand-written in `tools/defs/`; multiple-choice questions are hand-written two-sentence items in `tools/mcq/` where a unit has them, otherwise generated (same sentence + a Chinese hint + same-part-of-speech options). `tools/vocab_extra.py` loads both |
| `h-unitN.html` + `-data.js`, `adv800-unitN.html` + `-data.js` + `-app.js`, `h-dashboard-data.js` | 國中小進階800字, Unit N (40 alphabetical units, 804 words): flashcards + MCQ practice, online quiz, dashboard data. Built by `tools/adv800_convert.py` from the word sheet (xlsx); inflected answers are listed by hand in that script, and the multiple-choice questions are generated like the 1200 book |
| `wB-unitN.html` + `-data.js`, `ee4000-bB-unitN.html` + `-data.js` + `-app.js`, `wB-dashboard-data.js` | 4000 Essential English Words (2nd ed.) Book B, Unit N (Book 3: 30 units, 600 words): flashcards + MCQ practice, online quiz, dashboard data. Built by `tools/ee4000_convert.py` from the word list in `tools/ee4000/bB_words.json`; the definitions, sentences and translations in `tools/ee4000/bB_*.txt` were written for this site (the book's own text is not used) |
| `aS-unitP.html` + `aS-unitP-data.js`, `awlS-partP.html` + `-data.js` + `-app.js`, `aS-dashboard-data.js` | AWL Sublist S, Part P: flashcards + MCQ practice, online quiz, and dashboard data |
