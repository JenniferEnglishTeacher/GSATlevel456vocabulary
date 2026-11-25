# 學測易混淆字 Confusables (book `confus`, zones fa fb fc fd)

Source: `source/*.txt` = the content of Jennifer's 學測L3-6_易混淆字_Confusables.xlsx (2026-11-25): every 學測6000字 Level 3–6
word was checked; 405 groups, 939 entries. `gsat6000_words.json` = the 學測6000字 list (word -> level, POS, 中文).

Types: A 形近字 (fa) · B 字根字首誤導 (fb) · C 熟字僻義 (fc, entries 常見義 → 進階義) · D 易混用法 (fd).
Within a type, groups go easy → hard (mean level; words outside the list count 6.5), 10 groups per unit.
IDs (形近-001 …) follow that order, so adding a group renumbers the later ones.

Block format:
    @A adapt / adopt
    tz=分辨口訣  te=Tip (EN)  trap=陷阱
    - word | pos | English definition | 中文 | synonyms | antonyms | sentence | 翻譯 [| 常見義/進階義]
Sentences must contain the word in its base form or a regular -s / -ed / -ing form (irregular past forms of the
other options are in IRREG); build.py prints PROBLEMS for anything it cannot turn into a question.

Build:  python3 tools/confusables/build.py <version>
Writes the unit pages + data, cf-index.js, cf-wrong.html, fX-dashboard-data.js, and registers the zones/book in
books.js and index.html. review-arcade.html and teacher.html load fX-dashboard-data.js (added by hand).
Quiz results go to the teacher's sheet (GsatTracker.logTest); wrong words go on the ★ review list (keys fX-<unit>:<card>).
