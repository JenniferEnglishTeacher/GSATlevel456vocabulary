// Topic 1 Subunit 12 Quiz Data: Academic Words 學術單字 5 (precise – essential)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S12 - Academic Words 學術單字 5 (precise – essential)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精確的",
    "en_def": "exact and clear in every detail",
    "sentence": "The map gave {{BLANK}} directions to the café, so we found it easily even though it was hidden in a small lane.",
    "cn": "地圖給了到咖啡館的精確路線,所以即使它藏在一條小巷裡,我們還是很容易就找到了。"
  },
  {
    "word": "consistent",
    "pos": "adj.",
    "cn_def": "一致的;始終如一的",
    "en_def": "always behaving or happening in the same way",
    "sentence": "If you practise English for ten minutes every day, your progress will be more {{BLANK}} than if you study once a week for hours.",
    "cn": "如果你每天練習英文十分鐘,你的進步會比一週讀一次好幾小時更穩定一致。"
  },
  {
    "word": "inconsistent",
    "pos": "adj.",
    "cn_def": "不一致的;前後矛盾的",
    "en_def": "not staying the same; changing in a confusing way",
    "sentence": "The chatbot gave {{BLANK}} answers to the same question, so I stopped trusting it for my science homework.",
    "cn": "聊天機器人對同一個問題給出前後不一致的答案,所以我寫自然作業時不再相信它。"
  },
  {
    "word": "random",
    "pos": "adj.",
    "cn_def": "隨機的",
    "en_def": "happening without any plan or pattern",
    "sentence": "The app shows {{BLANK}} words each day, but I prefer lists that are organised by topic because they are easier to remember.",
    "cn": "這個應用程式每天顯示隨機的單字,但我比較喜歡按主題分類的清單,因為比較好記。"
  },
  {
    "word": "sample",
    "pos": "n.",
    "cn_def": "樣本",
    "en_def": "a small group chosen to represent a larger group",
    "sentence": "The researchers asked a {{BLANK}} of 500 students about AI, but critics said all of them came from city schools.",
    "cn": "研究人員針對五百名學生的樣本詢問有關人工智慧的問題,但批評者說他們全都來自城市學校。"
  },
  {
    "word": "participant",
    "pos": "n.",
    "cn_def": "參與者",
    "en_def": "a person who takes part in an activity or study",
    "sentence": "Each {{BLANK}} in the study used an AI tutor for a month, and then they took the same English test again.",
    "cn": "研究中的每位參與者都使用人工智慧家教一個月,然後再考一次相同的英文測驗。"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "cn_def": "比例",
    "en_def": "a part of a whole, compared with the total",
    "sentence": "A large {{BLANK}} of online shoppers are now over sixty, so websites are making their text bigger and clearer.",
    "cn": "網路購物者中有很大比例現在超過六十歲,所以網站正在把文字放大、變得更清楚。"
  },
  {
    "word": "percentage",
    "pos": "n.",
    "cn_def": "百分比",
    "en_def": "an amount shown as part of 100",
    "sentence": "The {{BLANK}} of homes with fast internet is high in Taipei, but it is much lower in the mountains.",
    "cn": "在台北,擁有高速網路的家庭百分比很高,但在山區則低得多。"
  },
  {
    "word": "majority",
    "pos": "n.",
    "cn_def": "大多數",
    "en_def": "more than half of a group",
    "sentence": "The {{BLANK}} of my classmates use AI to check grammar, but only a few use it to write whole paragraphs.",
    "cn": "我的同學中大多數都用人工智慧檢查文法,但只有少數人用它寫整段文章。"
  },
  {
    "word": "minority",
    "pos": "n.",
    "cn_def": "少數",
    "en_def": "less than half of a group",
    "sentence": "Only a {{BLANK}} of teachers have received AI training, so many are still unsure how to use it in lessons.",
    "cn": "只有少數老師接受過人工智慧培訓,所以許多人仍不確定如何在課堂上使用它。"
  },
  {
    "word": "approximately",
    "pos": "adv.",
    "cn_def": "大約",
    "en_def": "close to an exact number, but not exactly",
    "sentence": "{{BLANK}} half of all office tasks could be done by AI, but most jobs include skills that machines still cannot copy.",
    "cn": "大約一半的辦公室工作可以由人工智慧完成,但大多數工作都包含機器仍無法複製的技能。"
  },
  {
    "word": "estimate",
    "pos": "v.",
    "cn_def": "估計",
    "en_def": "to guess a number or amount by thinking carefully",
    "sentence": "Experts {{BLANK}} that the market for AI tools will double in five years, so many companies are hiring quickly.",
    "cn": "專家估計人工智慧工具的市場將在五年內翻倍,所以許多公司正在快速招募人才。"
  },
  {
    "word": "predict",
    "pos": "v.",
    "cn_def": "預測",
    "en_def": "to say what will happen in the future",
    "sentence": "AI can {{BLANK}} which students might fail a course, so teachers can offer extra help before it is too late.",
    "cn": "人工智慧能預測哪些學生可能會被當,所以老師可以在為時已晚之前提供額外幫助。"
  },
  {
    "word": "forecast",
    "pos": "v.",
    "cn_def": "預測;預報",
    "en_def": "to say what will probably happen, often with weather or money",
    "sentence": "The bank {{BLANK}} that online payments would keep growing, so it closed several branches and opened a new app.",
    "cn": "這家銀行預測線上付款會持續成長,所以關閉了幾家分行並推出新的應用程式。"
  },
  {
    "word": "anticipate",
    "pos": "v.",
    "cn_def": "預期;預料",
    "en_def": "to expect something and prepare for it",
    "sentence": "We did not {{BLANK}} that the new app would be so popular, so the servers crashed on the first day.",
    "cn": "我們沒有預料到這個新應用程式會這麼受歡迎,所以伺服器在第一天就當機了。"
  },
  {
    "word": "speculate",
    "pos": "v.",
    "cn_def": "推測;揣測",
    "en_def": "to guess about something without enough facts",
    "sentence": "Many people {{BLANK}} about what jobs will look like in 2050, but nobody can know for sure because technology changes so fast.",
    "cn": "許多人推測2050年的工作會是什麼樣子,但沒有人能確定,因為科技變化太快了。"
  },
  {
    "word": "likelihood",
    "pos": "n.",
    "cn_def": "可能性",
    "en_def": "how probable something is",
    "sentence": "The {{BLANK}} of being tricked by a scam is higher for people who do not know about AI voice copies, so education is important.",
    "cn": "不了解人工智慧聲音模仿的人被詐騙的可能性較高,所以教育很重要。"
  },
  {
    "word": "probability",
    "pos": "n.",
    "cn_def": "機率",
    "en_def": "how likely something is to happen, often as a number",
    "sentence": "The app says there is a 70% {{BLANK}} of rain, so I decided to bring an umbrella even though the sky looked clear.",
    "cn": "應用程式說有百分之七十的降雨機率,所以雖然天空看起來很晴朗,我還是決定帶傘。"
  },
  {
    "word": "uncertainty",
    "pos": "n.",
    "cn_def": "不確定性",
    "en_def": "a feeling of not being sure about something",
    "sentence": "There is a lot of {{BLANK}} about which jobs will survive, so many parents do not know what to tell their children to study.",
    "cn": "哪些工作能留存下來有很大的不確定性,所以許多家長不知道該建議孩子讀什麼。"
  },
  {
    "word": "ambiguous",
    "pos": "adj.",
    "cn_def": "模稜兩可的;含糊的",
    "en_def": "having more than one possible meaning",
    "sentence": "My prompt was {{BLANK}}, so the AI wrote a story about a bat the animal when I wanted one about a baseball bat.",
    "cn": "我的提示詞模稜兩可,所以當我想要一個關於棒球棒的故事時,人工智慧寫了一個關於蝙蝠的故事。"
  },
  {
    "word": "apparent",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "easy to see or understand",
    "sentence": "It soon became {{BLANK}} that the essay was written by AI, because it used words that the student had never learned.",
    "cn": "很快就明顯看出那篇作文是人工智慧寫的,因為它用了那位學生從沒學過的字。"
  },
  {
    "word": "evident",
    "pos": "adj.",
    "cn_def": "顯而易見的",
    "en_def": "clear and easy to notice",
    "sentence": "The benefits of online banking are {{BLANK}}, but older users still need help to protect themselves from scams.",
    "cn": "網路銀行的好處顯而易見,但年長的使用者仍需要協助來保護自己免於詐騙。"
  },
  {
    "word": "inherent",
    "pos": "adj.",
    "cn_def": "固有的;內在的",
    "en_def": "being a natural part of something that cannot be removed",
    "sentence": "There are {{BLANK}} risks in sharing personal photos online, because once they are posted, you can never fully delete them.",
    "cn": "在網路上分享個人照片有其固有的風險,因為一旦貼出,你就永遠無法完全刪除。"
  },
  {
    "word": "fundamental",
    "pos": "adj.",
    "cn_def": "基本的;根本的",
    "en_def": "basic and very important",
    "sentence": "Reading and thinking are {{BLANK}} skills, so students should not let AI do all their reading for them.",
    "cn": "閱讀和思考是基本技能,所以學生不應該讓人工智慧替他們完成所有的閱讀。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的;不可或缺的",
    "en_def": "completely necessary",
    "sentence": "A stable internet connection is {{BLANK}} for online classes, so the school lends Wi-Fi devices to families who need them.",
    "cn": "穩定的網路連線對線上課程是不可或缺的,所以學校會借無線網路設備給有需要的家庭。"
  }
];

const MCQS = [
  {
    "q": "The map gave _____ directions to the café, so we found it easily even though it was hidden in a small lane.",
    "options": [
      "precise",
      "interactive",
      "accurate",
      "sophisticated"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "If you practise English for ten minutes every day, your progress will be more _____ than if you study once a week for hours.",
    "options": [
      "valid",
      "empirical",
      "consistent",
      "comparable"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The chatbot gave _____ answers to the same question, so I stopped trusting it for my science homework.",
    "options": [
      "sophisticated",
      "transparent",
      "widespread",
      "inconsistent"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The app shows _____ words each day, but I prefer lists that are organised by topic because they are easier to remember.",
    "options": [
      "dystopian",
      "random",
      "subsequent",
      "transparent"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The researchers asked a _____ of 500 students about AI, but critics said all of them came from city schools.",
    "options": [
      "backup",
      "evidence",
      "sample",
      "component"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Each _____ in the study used an AI tutor for a month, and then they took the same English test again.",
    "options": [
      "participant",
      "salary",
      "originality",
      "principle"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "A large _____ of online shoppers are now over sixty, so websites are making their text bigger and clearer.",
    "options": [
      "subscription",
      "deepfake",
      "phenomenon",
      "proportion"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ of homes with fast internet is high in Taipei, but it is much lower in the mountains.",
    "options": [
      "glitch",
      "percentage",
      "startup",
      "e-commerce"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of my classmates use AI to check grammar, but only a few use it to write whole paragraphs.",
    "options": [
      "database",
      "chip",
      "detector",
      "majority"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Only a _____ of teachers have received AI training, so many are still unsure how to use it in lessons.",
    "options": [
      "gadget",
      "minority",
      "efficiency",
      "database"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "_____ half of all office tasks could be done by AI, but most jobs include skills that machines still cannot copy.",
    "options": [
      "approximately",
      "hence",
      "previously",
      "alternatively"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Experts _____ that the market for AI tools will double in five years, so many companies are hiring quickly.",
    "options": [
      "argue",
      "evolve",
      "estimate",
      "paraphrase"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "AI can _____ which students might fail a course, so teachers can offer extra help before it is too late.",
    "options": [
      "assume",
      "predict",
      "diminish",
      "monitor"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The bank _____ that online payments would keep growing, so it closed several branches and opened a new app.",
    "options": [
      "benefit",
      "collaborate",
      "conclude",
      "forecast"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "We did not _____ that the new app would be so popular, so the servers crashed on the first day.",
    "options": [
      "retrain",
      "analyse",
      "anticipate",
      "modify"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Many people _____ about what jobs will look like in 2050, but nobody can know for sure because technology changes so fast.",
    "options": [
      "speculate",
      "upskill",
      "adapt",
      "misuse"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The _____ of being tricked by a scam is higher for people who do not know about AI voice copies, so education is important.",
    "options": [
      "shift",
      "companionship",
      "approach",
      "likelihood"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The app says there is a 70% _____ of rain, so I decided to bring an umbrella even though the sky looked clear.",
    "options": [
      "computing",
      "drawback",
      "probability",
      "tutor"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "There is a lot of _____ about which jobs will survive, so many parents do not know what to tell their children to study.",
    "options": [
      "scam",
      "uncertainty",
      "database",
      "deepfake"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "My prompt was _____, so the AI wrote a story about a bat the animal when I wanted one about a baseball bat.",
    "options": [
      "ambiguous",
      "inevitable",
      "dishonest",
      "reliable"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "It soon became _____ that the essay was written by AI, because it used words that the student had never learned.",
    "options": [
      "empirical",
      "appropriate",
      "apparent",
      "sufficient"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The benefits of online banking are _____, but older users still need help to protect themselves from scams.",
    "options": [
      "artificial",
      "evident",
      "generative",
      "valid"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "There are _____ risks in sharing personal photos online, because once they are posted, you can never fully delete them.",
    "options": [
      "significant",
      "wearable",
      "facial",
      "inherent"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Reading and thinking are _____ skills, so students should not let AI do all their reading for them.",
    "options": [
      "fundamental",
      "relevant",
      "sceptical",
      "transparent"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "A stable internet connection is _____ for online classes, so the school lends Wi-Fi devices to families who need them.",
    "options": [
      "adequate",
      "significant",
      "essential",
      "controversial"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "precise": {
    "pos": "adj.",
    "en_def": "exact and clear in every detail",
    "cn_def": "精確的"
  },
  "consistent": {
    "pos": "adj.",
    "en_def": "always behaving or happening in the same way",
    "cn_def": "一致的;始終如一的"
  },
  "inconsistent": {
    "pos": "adj.",
    "en_def": "not staying the same; changing in a confusing way",
    "cn_def": "不一致的;前後矛盾的"
  },
  "random": {
    "pos": "adj.",
    "en_def": "happening without any plan or pattern",
    "cn_def": "隨機的"
  },
  "sample": {
    "pos": "n.",
    "en_def": "a small group chosen to represent a larger group",
    "cn_def": "樣本"
  },
  "participant": {
    "pos": "n.",
    "en_def": "a person who takes part in an activity or study",
    "cn_def": "參與者"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "a part of a whole, compared with the total",
    "cn_def": "比例"
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as part of 100",
    "cn_def": "百分比"
  },
  "majority": {
    "pos": "n.",
    "en_def": "more than half of a group",
    "cn_def": "大多數"
  },
  "minority": {
    "pos": "n.",
    "en_def": "less than half of a group",
    "cn_def": "少數"
  },
  "approximately": {
    "pos": "adv.",
    "en_def": "close to an exact number, but not exactly",
    "cn_def": "大約"
  },
  "estimate": {
    "pos": "v.",
    "en_def": "to guess a number or amount by thinking carefully",
    "cn_def": "估計"
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say what will happen in the future",
    "cn_def": "預測"
  },
  "forecast": {
    "pos": "v.",
    "en_def": "to say what will probably happen, often with weather or money",
    "cn_def": "預測;預報"
  },
  "anticipate": {
    "pos": "v.",
    "en_def": "to expect something and prepare for it",
    "cn_def": "預期;預料"
  },
  "speculate": {
    "pos": "v.",
    "en_def": "to guess about something without enough facts",
    "cn_def": "推測;揣測"
  },
  "likelihood": {
    "pos": "n.",
    "en_def": "how probable something is",
    "cn_def": "可能性"
  },
  "probability": {
    "pos": "n.",
    "en_def": "how likely something is to happen, often as a number",
    "cn_def": "機率"
  },
  "uncertainty": {
    "pos": "n.",
    "en_def": "a feeling of not being sure about something",
    "cn_def": "不確定性"
  },
  "ambiguous": {
    "pos": "adj.",
    "en_def": "having more than one possible meaning",
    "cn_def": "模稜兩可的;含糊的"
  },
  "apparent": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的"
  },
  "evident": {
    "pos": "adj.",
    "en_def": "clear and easy to notice",
    "cn_def": "顯而易見的"
  },
  "inherent": {
    "pos": "adj.",
    "en_def": "being a natural part of something that cannot be removed",
    "cn_def": "固有的;內在的"
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and very important",
    "cn_def": "基本的;根本的"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary",
    "cn_def": "必要的;不可或缺的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people and computers to respond to each other",
    "cn_def": "互動式的"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and true in every detail",
    "cn_def": "準確的"
  },
  "sophisticated": {
    "pos": "adj.",
    "en_def": "advanced and complicated",
    "cn_def": "精密的;複雜的"
  },
  "valid": {
    "pos": "adj.",
    "en_def": "based on good reasons or facts; acceptable",
    "cn_def": "有效的;站得住腳的"
  },
  "empirical": {
    "pos": "adj.",
    "en_def": "based on real experiments or observation, not theory",
    "cn_def": "實證的;以經驗為依據的"
  },
  "comparable": {
    "pos": "adj.",
    "en_def": "similar enough to be compared",
    "cn_def": "可比較的;相當的"
  },
  "transparent": {
    "pos": "adj.",
    "en_def": "open and easy to understand, with nothing hidden",
    "cn_def": "透明的;公開的"
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "happening in many places or among many people",
    "cn_def": "普遍的;廣泛的"
  },
  "dystopian": {
    "pos": "adj.",
    "en_def": "describing a frightening imagined future where life is bad",
    "cn_def": "反烏托邦的"
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "happening after something else",
    "cn_def": "隨後的;後續的"
  },
  "backup": {
    "pos": "n.",
    "en_def": "an extra copy of data kept in case the original is lost",
    "cn_def": "備份"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts that show something is true",
    "cn_def": "證據"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that make up a machine or system",
    "cn_def": "零件;組成部分"
  },
  "salary": {
    "pos": "n.",
    "en_def": "fixed money paid to a worker every month",
    "cn_def": "薪水"
  },
  "originality": {
    "pos": "n.",
    "en_def": "the quality of being new and not copied",
    "cn_def": "原創性"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic rule or belief",
    "cn_def": "原則"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money you pay regularly to use a service",
    "cn_def": "訂閱"
  },
  "deepfake": {
    "pos": "n.",
    "en_def": "a fake video or voice made by AI that looks real",
    "cn_def": "深偽(影片)"
  },
  "phenomenon": {
    "pos": "n.",
    "en_def": "something that happens and can be observed",
    "cn_def": "現象"
  },
  "glitch": {
    "pos": "n.",
    "en_def": "a small problem that stops something working properly",
    "cn_def": "小故障"
  },
  "startup": {
    "pos": "n.",
    "en_def": "a new small company, often in technology",
    "cn_def": "新創公司"
  },
  "e-commerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "database": {
    "pos": "n.",
    "en_def": "an organised collection of information stored on a computer",
    "cn_def": "資料庫"
  },
  "chip": {
    "pos": "n.",
    "en_def": "a very small piece of material inside electronic devices",
    "cn_def": "晶片"
  },
  "detector": {
    "pos": "n.",
    "en_def": "a tool that finds or notices something",
    "cn_def": "偵測器;檢測工具"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small useful machine or tool",
    "cn_def": "小裝置;小玩意兒"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "doing something well without wasting time or energy",
    "cn_def": "效率"
  },
  "hence": {
    "pos": "adv.",
    "en_def": "for this reason",
    "cn_def": "因此"
  },
  "previously": {
    "pos": "adv.",
    "en_def": "before now or before a particular time",
    "cn_def": "以前;先前"
  },
  "alternatively": {
    "pos": "adv.",
    "en_def": "used to suggest another choice",
    "cn_def": "或者;另一個選擇是"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "evolve": {
    "pos": "v.",
    "en_def": "to develop and change slowly over time",
    "cn_def": "演變;逐步發展"
  },
  "paraphrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "改寫;換句話說"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without checking",
    "cn_def": "假定;認為"
  },
  "diminish": {
    "pos": "v.",
    "en_def": "to become or make smaller or less important",
    "cn_def": "減少;減弱"
  },
  "monitor": {
    "pos": "v.",
    "en_def": "to watch or check something over a period of time",
    "cn_def": "監控;監測"
  },
  "benefit": {
    "pos": "v.",
    "en_def": "to get help or an advantage from something",
    "cn_def": "受益"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others",
    "cn_def": "合作"
  },
  "conclude": {
    "pos": "v.",
    "en_def": "to decide something after thinking about the facts",
    "cn_def": "下結論;推斷"
  },
  "retrain": {
    "pos": "v.",
    "en_def": "to learn or teach new skills for a different job",
    "cn_def": "再培訓;重新訓練"
  },
  "analyse": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "modify": {
    "pos": "v.",
    "en_def": "to change something a little to improve it",
    "cn_def": "修改;調整"
  },
  "upskill": {
    "pos": "v.",
    "en_def": "to learn new skills to do your job better",
    "cn_def": "提升技能"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change to suit a new situation",
    "cn_def": "適應;調整"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or harmful way",
    "cn_def": "濫用;誤用"
  },
  "shift": {
    "pos": "n.",
    "en_def": "a change in position or direction",
    "cn_def": "轉變;轉移"
  },
  "companionship": {
    "pos": "n.",
    "en_def": "the pleasure of having friendly company",
    "cn_def": "陪伴;友誼"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with something",
    "cn_def": "方法;途徑"
  },
  "computing": {
    "pos": "n.",
    "en_def": "the use or study of computers",
    "cn_def": "電腦運算;計算"
  },
  "drawback": {
    "pos": "n.",
    "en_def": "a disadvantage or problem",
    "cn_def": "缺點"
  },
  "tutor": {
    "pos": "n.",
    "en_def": "a teacher who helps one student or a small group",
    "cn_def": "家教;導師"
  },
  "scam": {
    "pos": "n.",
    "en_def": "a dishonest plan to get money from people",
    "cn_def": "詐騙"
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen and impossible to avoid",
    "cn_def": "不可避免的"
  },
  "dishonest": {
    "pos": "adj.",
    "en_def": "not telling the truth; likely to cheat",
    "cn_def": "不誠實的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的"
  },
  "appropriate": {
    "pos": "adj.",
    "en_def": "suitable for a situation",
    "cn_def": "適當的;合適的"
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose",
    "cn_def": "充足的;足夠的"
  },
  "artificial": {
    "pos": "adj.",
    "en_def": "made by people, not natural",
    "cn_def": "人造的;人工的"
  },
  "generative": {
    "pos": "adj.",
    "en_def": "able to create new text, pictures or sound",
    "cn_def": "生成式的"
  },
  "significant": {
    "pos": "adj.",
    "en_def": "large or important enough to notice",
    "cn_def": "顯著的;重大的"
  },
  "wearable": {
    "pos": "adj.",
    "en_def": "designed to be worn on the body",
    "cn_def": "可穿戴的"
  },
  "facial": {
    "pos": "adj.",
    "en_def": "related to the face",
    "cn_def": "臉部的"
  },
  "relevant": {
    "pos": "adj.",
    "en_def": "connected to what is being discussed",
    "cn_def": "相關的"
  },
  "sceptical": {
    "pos": "adj.",
    "en_def": "doubting whether something is true or useful",
    "cn_def": "懷疑的"
  },
  "adequate": {
    "pos": "adj.",
    "en_def": "enough or good enough for a purpose",
    "cn_def": "足夠的;適當的"
  },
  "controversial": {
    "pos": "adj.",
    "en_def": "causing a lot of disagreement",
    "cn_def": "有爭議的"
  }
};

const EXTRA_GLOSSES = {};
