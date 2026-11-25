# 詞類變化 Word Formation (book `wordform`, zone `wf`)

Source: `source/fce_wordform.json` = `window.FCE_WF` from `fce-wordform-data.js` on Jennifer's
GEPT-PET-FCE-TOEFL-IELTS-agree-disagree-speaking site (fce-wordform.html): 490 word families, 1,191 sentences.
Each sentence is `… ____ (stem) …`, `answer` may list alternatives `a / b`, and `note` = 中文翻譯 + `考點：…`.

Families stay in alphabetical order, 15 per unit (33 units). Same-spelling members (alert adj./v./n.) are merged into one card.

English definitions: the site's own cards (`gsat-words.js`, every `*-dashboard-data.js`), else `source/extra_defs.tsv`.

MCQ options = the answer + 3 other forms of the family. Small families get real inflected/derived forms
(kept only if `wordfreq` knows them, zipf ≥ 1.7, American spelling); `source/block.txt` removes bad ones,
`source/manual_options.tsv` adds hand-picked options (with POS, 中文, English), and `source/option_info.tsv` gives the
meaning of generated options that are not simply the family word (unaware…, nonviolent…).
After answering, all 4 options show 🔊, POS, 中文 and English.

Build:  `pip install wordfreq; python3 tools/wordform/build.py <version>`
Writes `wf-unitN.html` + `-data.js`, `wf-index.js`, `wf-dashboard-data.js`, registers the zone/book in `books.js`
(after 學測易混淆字) and adds the dashboard-data tag to index.html, teacher.html and review-arcade.html.
Quiz results go to the teacher's sheet (GsatTracker.logTest, level "學測詞類變化"); wrong words go on the ★ review
list (keys `wf-<unit>:<card>`).
