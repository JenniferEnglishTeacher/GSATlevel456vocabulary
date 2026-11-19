# 學測搭配詞 Collocations (book id `colloc`)

Source: Jennifer's 學測單字特殊延伸用法 lists (Google Drive folder 「特殊延伸用法區（學測6000 + 國中2000）」).
`source.json` = 動詞區 (cv) / 名詞區 (cn) / 形容詞區 (ca) / 副詞區 (cd) / 連接詞區 (cc) from 學測單字特殊延伸用法_名形副連_合併版.xlsx.
動詞區 (cv) = 學測單字特殊延伸用法_動詞區.xlsx (Jennifer's upload, 2026-11-19), 5,532 rows.

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
