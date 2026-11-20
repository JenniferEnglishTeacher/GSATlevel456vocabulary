# 學測／會考英文歷屆試題 HTML MCQ — 製作紀錄

（與 claude.ai Project「高中學測題庫 三民 龍騰 學測歷屆試題」的文件 `claude/gsat-past-exam-quiz-pipeline.md` 同步；兩邊有差異時以 repo 這份為準。）

## 主站：GSATlevel456vocabulary（2026-11-20）
- Dashboard 書籤分兩組、由難到易：
  - 紫色「學測程度」：學測歷屆試題 #x → 學測單字搭配詞 → 學測6000字 L4–6 → LiveABC 3–5 → AWL → 4000 Essential → 2001–3000 L3 → LiveABC 2–4 → TOEIC → 學測/IELTS/TOEFL 主題字彙
  - 粉紅「國中會考程度」：會考歷屆試題 #xc → 會考單字搭配詞 → 國中小基礎2000 → 捷進GEPT初級 → 進階800 → 1200
  - 設定在 `books.js` 的 `VOCAB_BOOKS[].group`（gsat/cap），順序即顯示順序
- **學測歷屆試題** `gsat-exam/`：97–115 全部選擇題 1,014 題（詞彙 260、綜合測驗 260、文意選填 190、篇章結構 20、閱讀測驗 284）；未納入混合題、非選
- **會考歷屆試題** `cap-exam/`：105–115 單題 191＋閱讀測驗 209＋克漏字 61＝461 題（單題／克漏字從 high-school-blank-translation-quiz 移植；閱讀測驗 2026-11-20 新增，含圖表／地圖／漫畫／圖片選項題）；hover 字表取自 國中基礎2000(j)／進階800(h)／Level 3／Level 4，**只標內容字**（`content_only`：排除代名詞、介係詞、連接詞、助動詞、限定詞與 be/have/get/make 等常見輕動詞，見 exam_build.py 的 `STOP`）
- 每年一頁 `<dir>/<slug>-<year>.html`（分區頁籤）＋ `<slug>-all.html`（可選年度／隨機 20 題）
- **單字 hover 卡**：底線顏色依級數（基礎2000 粉紅、進階800 橘、L3 綠、L4 藍綠、L5 橘、L6 紫），滑過＝發音＋詞性＋中譯＋英釋；「🗂 字卡」在測驗頁上開面板（iframe）載入 `<zone>-unit<N>.html#w=<word>`，「← 回到測驗」回原題
- 共用引擎在 `gsat-exam/`（quiz.js、quiz.css、mistake-kit.js、vocab-hover.js/.css）；cap-exam 以 `../gsat-exam/` 引用
- 重建：`python3 tools/exam_build.py`（來源 `tools/exam/questions.json`、`tools/exam/cap-questions.json`；欄位 num/section/group/passage/stem|prompt/options/answer/explanation/image）；改完 bump index.html 的 `exam-board-data.js?v=`
- 成績送 `/high-school-blank-translation-quiz/quiz-result-recorder.js`（同 origin）

## 會考閱讀測驗來源（2026-11-20）
- 題本：翰林 `public.ehanlin.com.tw/pre-exam/cap/{yy}會考英文題本.pdf`（106–115）；105 只有解析 PDF（文章為圖片，OCR）
- 113–115 翰林題本的文章是圖片 → tesseract OCR 後人工校對；112 為翰林重排版（題組 1–7 對應官方 24–41）
- 答案：官方題號順序答案（翰林解析）比對 107/109/110/111/113/114/115；105/106 用解析【解答】；108、112 自行作答並抽查解析
- 解析為自寫中文說明（不照抄翰林），圖片存 `cap-exam/assets/cap{yy}-g{n}.png`（題組）／`cap{yy}-q{n}.png`（單題）

## 答案來源與修正（學測）
- 97–108 `{yy}英文解析.pdf`、109–115 翰林精彩解析、99/100 大考中心參考答案、107 龍騰考情最前線；文意選填缺的 I/J 以「每選項只用一次」補足
- 舊站 GSATmultiple-choice-online-quiz 答案錯誤（新站已修正）：101 cloze 23–25、101 閱讀 #52、106 cloze #27、108 閱讀 #49/#50、110 cloze #28、115 詞彙 #4、115 cloze 16–18
- 103 docx 缺字 → PDF 文字；105 閱讀題號遺失 → 舊站資料；110#49 圖片 (C)(D) 對調以符合官方答案 (D)
- 原始試卷與解析 PDF 在本機 `D:\英語教學資源和師訓\學測英文\學測歷屆試題`

## 次站：high-school-blank-translation-quiz
- 學測區仍是 520 題版（詞彙＋綜合測驗）；會考區 cap-past-exam 為原始來源

## 格式
- `window.QUIZ_CONFIG={title, mode:"mcq", questions:[{id, question, options[4–10], answer(0-9), answerLabel, source, explanation, explanationSource:"own", section, image?}]}`
- 題組：`【<section> 第 a–b 題】\n<passage>\n\n▶ 第 n 題　<hint 或 reading prompt>`

## 可能的下一步
- 學測混合題（需 quiz.js 多選模式）；會考 103–104 年（翰林無）
- 同步 1,014 題版到 high-school-blank-translation-quiz
- 83–96 年（有 .doc 無解析）
