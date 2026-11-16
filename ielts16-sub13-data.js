// Topic 16 Subunit 13 Quiz Data: Academic Words 學術單字 6 (small-scale – universally)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T16 S13 - Academic Words 學術單字 6 (small-scale – universally)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "small-scale",
    "pos": "adj.",
    "cn_def": "小規模的",
    "en_def": "limited in size or number",
    "sentence": "The first trial was {{BLANK}}, but it gave the researchers enough confidence to apply for more funding.",
    "cn": "第一次試驗規模很小，但它給了研究人員足夠的信心去申請更多經費。"
  },
  {
    "word": "long-term",
    "pos": "adj.",
    "cn_def": "長期的",
    "en_def": "continuing for a long period",
    "sentence": "The {{BLANK}} benefits of exercise are enormous, although many people only notice the short-term tiredness.",
    "cn": "運動的長期益處非常巨大，雖然許多人只注意到短期的疲累。"
  },
  {
    "word": "short-term",
    "pos": "adj.",
    "cn_def": "短期的",
    "en_def": "lasting only a short period",
    "sentence": "A {{BLANK}} gain in speed is useless if the training leaves you injured for the whole season.",
    "cn": "如果訓練讓你整季受傷，速度上的短期提升就毫無用處。"
  },
  {
    "word": "wide-ranging",
    "pos": "adj.",
    "cn_def": "範圍廣泛的",
    "en_def": "covering many different subjects",
    "sentence": "The report was {{BLANK}}, and it discussed everything from school timetables to the design of playgrounds.",
    "cn": "這份報告範圍廣泛，從學校課表到遊戲場設計無所不談。"
  },
  {
    "word": "cross-sectional",
    "pos": "adj.",
    "cn_def": "橫斷面的",
    "en_def": "looking at many people at one point in time",
    "sentence": "A {{BLANK}} study can show a pattern quickly, but it cannot prove that one thing caused another.",
    "cn": "橫斷面研究能快速顯示一種模式，但它無法證明一件事導致了另一件事。"
  },
  {
    "word": "adversely",
    "pos": "adv.",
    "cn_def": "不利地；有害地",
    "en_def": "in a way that causes harm",
    "sentence": "Poor sleep {{BLANK}} affects reaction time, so coaches now ask players to switch off their phones before midnight.",
    "cn": "睡眠不足會不利地影響反應時間，所以教練現在要求球員在午夜前關掉手機。"
  },
  {
    "word": "appreciably",
    "pos": "adv.",
    "cn_def": "明顯地",
    "en_def": "by an amount large enough to notice",
    "sentence": "Her times improved {{BLANK}} after she changed her diet, although she had not changed her training at all.",
    "cn": "她改變飲食後成績明顯進步，雖然她完全沒有改變訓練方式。"
  },
  {
    "word": "categorically",
    "pos": "adv.",
    "cn_def": "斷然地；明確地",
    "en_def": "in a clear and complete way, with no doubt",
    "sentence": "The athlete {{BLANK}} denied taking any banned drug, and later tests supported what she had said.",
    "cn": "那位運動員斷然否認服用任何禁藥，而後來的檢測支持了她的說法。"
  },
  {
    "word": "comprehensively",
    "pos": "adv.",
    "cn_def": "全面地；徹底地",
    "en_def": "completely and in every way",
    "sentence": "Our team was beaten {{BLANK}} in the first round, but we learned a great deal from the experience.",
    "cn": "我們球隊在第一輪被徹底擊敗，但我們從這次經驗中學到很多。"
  },
  {
    "word": "decisively",
    "pos": "adv.",
    "cn_def": "果斷地；決定性地",
    "en_def": "in a firm way that settles something",
    "sentence": "She acted {{BLANK}} at the final bend, and she had opened a clear gap before the others reacted.",
    "cn": "她在最後一個彎道果斷地發動，而在其他人反應前她已拉開明顯差距。"
  },
  {
    "word": "demonstrably",
    "pos": "adv.",
    "cn_def": "可證明地；明顯地",
    "en_def": "in a way that can be proved",
    "sentence": "Warming up is {{BLANK}} safer than starting cold, and dozens of studies have reached the same conclusion.",
    "cn": "熱身明顯地比直接開始更安全，而數十項研究得出相同結論。"
  },
  {
    "word": "erroneously",
    "pos": "adv.",
    "cn_def": "錯誤地",
    "en_def": "wrongly or by mistake",
    "sentence": "The report {{BLANK}} stated that he had failed a test, so the newspaper printed an apology the next day.",
    "cn": "那份報告錯誤地說他檢測未通過，所以報社隔天刊登了道歉。"
  },
  {
    "word": "implicitly",
    "pos": "adv.",
    "cn_def": "含蓄地；隱含地",
    "en_def": "in a way that is suggested but not said directly",
    "sentence": "By choosing him as captain, the coach {{BLANK}} accepted his ideas about training, and the older players noticed.",
    "cn": "教練選他當隊長，就隱含地接受了他對訓練的想法，而資深球員都注意到了。"
  },
  {
    "word": "inadvertently",
    "pos": "adv.",
    "cn_def": "不經意地；無意中",
    "en_def": "without meaning to",
    "sentence": "He {{BLANK}} took a banned substance in a cold remedy, but the panel accepted that it was an honest mistake.",
    "cn": "他在感冒藥中無意間服用了禁用物質，但委員會接受那是個無心之過。"
  },
  {
    "word": "incrementally",
    "pos": "adv.",
    "cn_def": "逐步地",
    "en_def": "in a series of small steps",
    "sentence": "Add weight {{BLANK}} each week, because sudden jumps are the quickest way to hurt yourself.",
    "cn": "每週逐步增加重量，因為突然加重是最快讓自己受傷的方式。"
  },
  {
    "word": "indisputably",
    "pos": "adv.",
    "cn_def": "無可爭辯地",
    "en_def": "in a way nobody can argue against",
    "sentence": "She is {{BLANK}} the best player of her generation, although she has never won a world title.",
    "cn": "她無可爭辯地是她那一代最好的球員，儘管她從未贏得世界冠軍。"
  },
  {
    "word": "meticulously",
    "pos": "adv.",
    "cn_def": "一絲不苟地",
    "en_def": "with great care and attention to detail",
    "sentence": "He records every session {{BLANK}}, so he can see exactly what worked before his best races.",
    "cn": "他一絲不苟地記錄每次訓練，所以他能確切看出在最佳表現前哪些做法有效。"
  },
  {
    "word": "objectively",
    "pos": "adv.",
    "cn_def": "客觀地",
    "en_def": "without being influenced by feelings",
    "sentence": "Video lets coaches judge performance {{BLANK}}, because the camera does not care who the player is.",
    "cn": "影片讓教練能客觀地評斷表現，因為攝影機不在意球員是誰。"
  },
  {
    "word": "proportionally",
    "pos": "adv.",
    "cn_def": "成比例地",
    "en_def": "in a way that matches something else in size",
    "sentence": "Children's equipment should be {{BLANK}} smaller, so a junior ball is lighter than an adult one.",
    "cn": "兒童的器材應該成比例地較小，所以兒童用球比成人用球輕。"
  },
  {
    "word": "rigorously",
    "pos": "adv.",
    "cn_def": "嚴格地",
    "en_def": "in a strict and thorough way",
    "sentence": "Every supplement is tested {{BLANK}} before the team uses it, because one mistake could end a career.",
    "cn": "每種補充品在球隊使用前都經過嚴格檢測，因為一個錯誤可能結束一段職業生涯。"
  },
  {
    "word": "significantly",
    "pos": "adv.",
    "cn_def": "顯著地",
    "en_def": "by an important amount",
    "sentence": "Injury numbers fell {{BLANK}} after the new warm-up was introduced, and other schools soon copied it.",
    "cn": "在引入新的熱身方式後，受傷人數顯著下降，而其他學校很快就效法。"
  },
  {
    "word": "systematically",
    "pos": "adv.",
    "cn_def": "系統地",
    "en_def": "in an organised, step-by-step way",
    "sentence": "The coach {{BLANK}} worked through each weakness, and by March the team had almost no defensive errors.",
    "cn": "教練系統地處理每一個弱點，而到了三月球隊幾乎沒有防守失誤。"
  },
  {
    "word": "tentatively",
    "pos": "adv.",
    "cn_def": "試探性地；暫時地",
    "en_def": "in a careful, uncertain way",
    "sentence": "The doctors {{BLANK}} cleared him to train, but they asked him to stop if any pain returned.",
    "cn": "醫生暫時許可他訓練，但他們要求他若有任何疼痛復發就停止。"
  },
  {
    "word": "thoroughly",
    "pos": "adv.",
    "cn_def": "徹底地",
    "en_def": "completely and carefully",
    "sentence": "Clean the equipment {{BLANK}} after every single session, because shared mats can easily spread skin infections among players.",
    "cn": "每一次訓練後都要徹底清潔器材，因為共用的墊子很容易在球員之間傳播皮膚感染。"
  },
  {
    "word": "universally",
    "pos": "adv.",
    "cn_def": "普遍地；全體一致地",
    "en_def": "by everyone or everywhere",
    "sentence": "The new rule was {{BLANK}} welcomed, and even the oldest coaches admitted that it made the game safer.",
    "cn": "新規則受到普遍歡迎，而連最資深的教練都承認它讓比賽更安全。"
  }
];

const MCQS = [
  {
    "q": "The first trial was _____, but it gave the researchers enough confidence to apply for more funding.",
    "options": [
      "small-scale",
      "multidisciplinary",
      "head-to-head",
      "reliant"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ benefits of exercise are enormous, although many people only notice the short-term tiredness.",
    "options": [
      "abdominal",
      "stiff",
      "undesirable",
      "long-term"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "A _____ gain in speed is useless if the training leaves you injured for the whole season.",
    "options": [
      "high-intensity",
      "short-term",
      "unilateral",
      "replicable"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The report was _____, and it discussed everything from school timetables to the design of playgrounds.",
    "options": [
      "proportionate",
      "multidisciplinary",
      "wide-ranging",
      "unilateral"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "A _____ study can show a pattern quickly, but it cannot prove that one thing caused another.",
    "options": [
      "aerodynamic",
      "high-intensity",
      "large-scale",
      "cross-sectional"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Poor sleep _____ affects reaction time, so coaches now ask players to switch off their phones before midnight.",
    "options": [
      "adversely",
      "incrementally",
      "decisively",
      "appreciably"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Her times improved _____ after she changed her diet, although she had not changed her training at all.",
    "options": [
      "implicitly",
      "appreciably",
      "universally",
      "inadvertently"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The athlete _____ denied taking any banned drug, and later tests supported what she had said.",
    "options": [
      "thoroughly",
      "systematically",
      "categorically",
      "inadvertently"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Our team was beaten _____ in the first round, but we learned a great deal from the experience.",
    "options": [
      "decisively",
      "comprehensively",
      "categorically",
      "meticulously"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "She acted _____ at the final bend, and she had opened a clear gap before the others reacted.",
    "options": [
      "categorically",
      "thoroughly",
      "appreciably",
      "decisively"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Warming up is _____ safer than starting cold, and dozens of studies have reached the same conclusion.",
    "options": [
      "systematically",
      "incrementally",
      "demonstrably",
      "categorically"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The report _____ stated that he had failed a test, so the newspaper printed an apology the next day.",
    "options": [
      "erroneously",
      "incrementally",
      "implicitly",
      "tentatively"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "By choosing him as captain, the coach _____ accepted his ideas about training, and the older players noticed.",
    "options": [
      "incrementally",
      "implicitly",
      "thoroughly",
      "inadvertently"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "He _____ took a banned substance in a cold remedy, but the panel accepted that it was an honest mistake.",
    "options": [
      "inadvertently",
      "implicitly",
      "universally",
      "tentatively"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Add weight _____ each week, because sudden jumps are the quickest way to hurt yourself.",
    "options": [
      "indisputably",
      "universally",
      "inadvertently",
      "incrementally"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "She is _____ the best player of her generation, although she has never won a world title.",
    "options": [
      "inadvertently",
      "comprehensively",
      "indisputably",
      "adversely"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "He records every session _____, so he can see exactly what worked before his best races.",
    "options": [
      "meticulously",
      "erroneously",
      "thoroughly",
      "significantly"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Video lets coaches judge performance _____, because the camera does not care who the player is.",
    "options": [
      "systematically",
      "erroneously",
      "objectively",
      "adversely"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Children's equipment should be _____ smaller, so a junior ball is lighter than an adult one.",
    "options": [
      "rigorously",
      "decisively",
      "objectively",
      "proportionally"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Every supplement is tested _____ before the team uses it, because one mistake could end a career.",
    "options": [
      "meticulously",
      "rigorously",
      "tentatively",
      "incrementally"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Injury numbers fell _____ after the new warm-up was introduced, and other schools soon copied it.",
    "options": [
      "adversely",
      "erroneously",
      "systematically",
      "significantly"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The coach _____ worked through each weakness, and by March the team had almost no defensive errors.",
    "options": [
      "objectively",
      "implicitly",
      "systematically",
      "significantly"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The doctors _____ cleared him to train, but they asked him to stop if any pain returned.",
    "options": [
      "tentatively",
      "comprehensively",
      "proportionally",
      "demonstrably"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Clean the equipment _____ after every single session, because shared mats can easily spread skin infections among players.",
    "options": [
      "inadvertently",
      "thoroughly",
      "decisively",
      "tentatively"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The new rule was _____ welcomed, and even the oldest coaches admitted that it made the game safer.",
    "options": [
      "universally",
      "indisputably",
      "erroneously",
      "demonstrably"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "small-scale": {
    "pos": "adj.",
    "en_def": "limited in size or number",
    "cn_def": "小規模的"
  },
  "long-term": {
    "pos": "adj.",
    "en_def": "continuing for a long period",
    "cn_def": "長期的"
  },
  "short-term": {
    "pos": "adj.",
    "en_def": "lasting only a short period",
    "cn_def": "短期的"
  },
  "wide-ranging": {
    "pos": "adj.",
    "en_def": "covering many different subjects",
    "cn_def": "範圍廣泛的"
  },
  "cross-sectional": {
    "pos": "adj.",
    "en_def": "looking at many people at one point in time",
    "cn_def": "橫斷面的"
  },
  "adversely": {
    "pos": "adv.",
    "en_def": "in a way that causes harm",
    "cn_def": "不利地；有害地"
  },
  "appreciably": {
    "pos": "adv.",
    "en_def": "by an amount large enough to notice",
    "cn_def": "明顯地"
  },
  "categorically": {
    "pos": "adv.",
    "en_def": "in a clear and complete way, with no doubt",
    "cn_def": "斷然地；明確地"
  },
  "comprehensively": {
    "pos": "adv.",
    "en_def": "completely and in every way",
    "cn_def": "全面地；徹底地"
  },
  "decisively": {
    "pos": "adv.",
    "en_def": "in a firm way that settles something",
    "cn_def": "果斷地；決定性地"
  },
  "demonstrably": {
    "pos": "adv.",
    "en_def": "in a way that can be proved",
    "cn_def": "可證明地；明顯地"
  },
  "erroneously": {
    "pos": "adv.",
    "en_def": "wrongly or by mistake",
    "cn_def": "錯誤地"
  },
  "implicitly": {
    "pos": "adv.",
    "en_def": "in a way that is suggested but not said directly",
    "cn_def": "含蓄地；隱含地"
  },
  "inadvertently": {
    "pos": "adv.",
    "en_def": "without meaning to",
    "cn_def": "不經意地；無意中"
  },
  "incrementally": {
    "pos": "adv.",
    "en_def": "in a series of small steps",
    "cn_def": "逐步地"
  },
  "indisputably": {
    "pos": "adv.",
    "en_def": "in a way nobody can argue against",
    "cn_def": "無可爭辯地"
  },
  "meticulously": {
    "pos": "adv.",
    "en_def": "with great care and attention to detail",
    "cn_def": "一絲不苟地"
  },
  "objectively": {
    "pos": "adv.",
    "en_def": "without being influenced by feelings",
    "cn_def": "客觀地"
  },
  "proportionally": {
    "pos": "adv.",
    "en_def": "in a way that matches something else in size",
    "cn_def": "成比例地"
  },
  "rigorously": {
    "pos": "adv.",
    "en_def": "in a strict and thorough way",
    "cn_def": "嚴格地"
  },
  "significantly": {
    "pos": "adv.",
    "en_def": "by an important amount",
    "cn_def": "顯著地"
  },
  "systematically": {
    "pos": "adv.",
    "en_def": "in an organised, step-by-step way",
    "cn_def": "系統地"
  },
  "tentatively": {
    "pos": "adv.",
    "en_def": "in a careful, uncertain way",
    "cn_def": "試探性地；暫時地"
  },
  "thoroughly": {
    "pos": "adv.",
    "en_def": "completely and carefully",
    "cn_def": "徹底地"
  },
  "universally": {
    "pos": "adv.",
    "en_def": "by everyone or everywhere",
    "cn_def": "普遍地；全體一致地"
  },
  "multidisciplinary": {
    "pos": "adj.",
    "en_def": "involving several different subjects or specialists",
    "cn_def": "多專業的；跨領域的"
  },
  "head-to-head": {
    "pos": "adj.",
    "en_def": "directly against one other person or team",
    "cn_def": "對決的；正面交鋒的"
  },
  "reliant": {
    "pos": "adj.",
    "en_def": "depending on someone or something",
    "cn_def": "依賴的"
  },
  "abdominal": {
    "pos": "adj.",
    "en_def": "relating to the stomach area",
    "cn_def": "腹部的"
  },
  "stiff": {
    "pos": "adj.",
    "en_def": "hard to move and a little painful",
    "cn_def": "僵硬的"
  },
  "undesirable": {
    "pos": "adj.",
    "en_def": "not wanted because it causes problems",
    "cn_def": "不良的；不受歡迎的"
  },
  "high-intensity": {
    "pos": "adj.",
    "en_def": "very hard and fast",
    "cn_def": "高強度的"
  },
  "unilateral": {
    "pos": "adj.",
    "en_def": "done by one side only",
    "cn_def": "單方面的"
  },
  "replicable": {
    "pos": "adj.",
    "en_def": "able to be copied exactly by other researchers",
    "cn_def": "可複製的"
  },
  "proportionate": {
    "pos": "adj.",
    "en_def": "matching something else in size or importance",
    "cn_def": "相稱的；成比例的"
  },
  "aerodynamic": {
    "pos": "adj.",
    "en_def": "shaped so that air passes over it easily",
    "cn_def": "空氣力學的；流線的"
  },
  "large-scale": {
    "pos": "adj.",
    "en_def": "involving many people or a wide area",
    "cn_def": "大規模的"
  }
};

const EXTRA_GLOSSES = {};
