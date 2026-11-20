# 學測單字搭配詞 (book id `colloc`) and 會考單字搭配詞 (book id `jcolloc`)

Source: Jennifer's 學測單字特殊延伸用法 lists (Google Drive folder 「特殊延伸用法區（學測6000 + 國中2000）」).
`source.json` = 動詞區 (cv) / 名詞區 (cn) / 形容詞區 (ca) / 副詞區 (cd) / 連接詞區 (cc) from 學測單字特殊延伸用法_名形副連_合併版.xlsx.
動詞區 (cv) = 學測單字特殊延伸用法_動詞區.xlsx (Jennifer's upload, 2026-11-19), 5,532 rows.

會考單字搭配詞: 名詞區 (jn) and 動詞區 (jv) from Jennifer's 國中2000字特殊用法 xlsx files (2026-11-19).
形容詞 (ja) / 副詞 (jd) / 介係詞 (jp) / 轉承詞 (jc) from the 國中2000字特殊用法_*區_含例句.xlsx files (2026-11-20);
their example sentences are in `sentences/<zone>-all.json`. These four zones blank multi-word headwords whole and may split a long headword across units.
Zones and book names: `ZONES` / `BOOK_OF` in colloc_emit.py.

Question = the collocation with the headword blanked + 中文 → choose 1 of 4 words of the same part of speech.
After answering: the whole collocation, and 🔊 + POS + English + 中文 for all 4 options.

## Build
    python3 tools/colloc_emit.py      # writes {zone}-unitN.html, {zone}-unitN-data.js, {zone}-dashboard-data.js
    python3 tools/colloc_register.py  # books.js + index.html script tags
Files: `colloc-app.js` (page engine), `colloc.css`. Reports: `skipped.txt`, `sentence_problems.txt`.
Units are fixed by alphabetical headword (≈28–40 items); never renumber once sentences exist.

## Sentences (added unit by unit)
`sentences/<zone>-unit<N>.json` = `{ "<collocation exactly as in source>": ["English sentence", "整句繁中翻譯"] }`
- One sentence per collocation in that unit; CEFR B1–B2, 12–22 words, a natural everyday/學測 context.
- The sentence must contain the collocation; the answer word must appear in the SAME form as in the collocation,
  or a regular -s / -ed / -ing form of it (irregular forms are rejected — see sentence_problems.txt).
- Chinese translation is complete and must include the collocation's 中文 meaning, so the 中文 points to one answer.
- The 3 distractors stay the ones the emitter picked; make sure none of them could also fit the sentence.
Progress: `SENTENCE_PLAN.md`.

## 會考片語 zones (same book 會考單字搭配詞, built separately)
Source: Jennifer's 10 「國中會考英文 單字片語總整理」 docx (01 一字多義 … 10 轉折詞, 2026-11-20).
    python3 tools/jphrase_extract.py 01_*.docx … 10_*.docx   # -> tools/jphrase/source.json
    python3 tools/jphrase_emit.py <version>                  # pages + books.js zones + index.html tags
Zones jm jvp jbe jap jpp jdp jcp jnp jex jtw. Word-list units: each row = its docx sample sentence (blanks kept) +
4 phrases from the same list; 綜合練習 units = the docx Part 2 MCQs with the answer key's 中文.
colloc_register.py keeps these zones when it rebuilds the 會考單字搭配詞 book.
