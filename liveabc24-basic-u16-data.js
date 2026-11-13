// Unit 16 Quiz Data: perfume – acclaim
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U16 - perfume – acclaim",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "perfume",
    "pos": "n.",
    "cn_def": "香水",
    "en_def": "a liquid with a pleasant smell that you put on your skin",
    "sentence": "She loves the scent of roses in her {{BLANK}} collection.",
    "cn": "她喜歡她的香水收藏中玫瑰的香味。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "使發展;開發;形成",
    "en_def": "to grow or change into something bigger or more advanced; to create something new",
    "sentence": "The company plans to {{BLANK}} new software next year.",
    "cn": "公司計劃明年開發新軟件。"
  },
  {
    "word": "development",
    "pos": "n.",
    "cn_def": "發展",
    "en_def": "the process of growing, changing or becoming more advanced",
    "sentence": "The city's rapid {{BLANK}} has led to increased employment.",
    "cn": "這座城市的快速發展導致了就業增加。"
  },
  {
    "word": "developing",
    "pos": "adj.",
    "cn_def": "發展中的",
    "en_def": "growing or becoming more advanced",
    "sentence": "Many countries in Africa are {{BLANK}} nations.",
    "cn": "非洲的許多國家是發展中國家。"
  },
  {
    "word": "pleasant",
    "pos": "adj.",
    "cn_def": "令人愉快的",
    "en_def": "enjoyable, nice or friendly",
    "sentence": "It was a {{BLANK}} surprise to see her at the party.",
    "cn": "在派對上見到她真是一個愉快的驚喜。"
  },
  {
    "word": "please",
    "pos": "v.",
    "cn_def": "使高興;滿意",
    "en_def": "to make someone happy or satisfied",
    "sentence": "His efforts to {{BLANK}} his boss were successful.",
    "cn": "他設法使老板滿意的努力是成功的。"
  },
  {
    "word": "unpleasant",
    "pos": "adj.",
    "cn_def": "令人不愉快的",
    "en_def": "not enjoyable; not nice or friendly",
    "sentence": "The weather turned {{BLANK}} just as we started our picnic.",
    "cn": "我們剛開始野餐時天氣變得不愉快。"
  },
  {
    "word": "expand",
    "pos": "v.",
    "cn_def": "擴大;增加;發展",
    "en_def": "to become or make something larger in size, number or importance",
    "sentence": "The company plans to {{BLANK}} its operations overseas.",
    "cn": "公司計劃擴展其海外業務。"
  },
  {
    "word": "broaden",
    "pos": "n.",
    "cn_def": "拓展視野;廣見聞",
    "en_def": "to help someone learn about and experience more new things",
    "sentence": "Traveling to new places can {{BLANK}} your horizons.",
    "cn": "到新地方旅行可以拓展你的視野。"
  },
  {
    "word": "expansion",
    "pos": "n.",
    "cn_def": "擴展",
    "en_def": "the act of becoming larger in size, number or importance",
    "sentence": "The rapid {{BLANK}} of the city led to infrastructure improvements.",
    "cn": "城市的快速擴展促使基礎設施改善。"
  },
  {
    "word": "expansive",
    "pos": "adj.",
    "cn_def": "擴張的",
    "en_def": "covering a wide area; growing larger",
    "sentence": "Her {{BLANK}} gestures showed her enthusiasm.",
    "cn": "她的大手勢顯示出她的熱情。"
  },
  {
    "word": "possibility",
    "pos": "n.",
    "cn_def": "可能性;可能",
    "en_def": "a chance that something may happen or be true",
    "sentence": "There's a strong {{BLANK}} of rain later today.",
    "cn": "今天晚些時候很有可能會下雨。"
  },
  {
    "word": "possible",
    "pos": "adj.",
    "cn_def": "可能的",
    "en_def": "that can happen, be done or be true",
    "sentence": "Is it {{BLANK}} to finish this project by Friday?",
    "cn": "這個項目能在星期五完成嗎？"
  },
  {
    "word": "entry",
    "pos": "n.",
    "cn_def": "進入權;參加",
    "en_def": "the act or right of going into a place or joining a competition",
    "sentence": "Admission is free upon {{BLANK}} to the museum.",
    "cn": "進入博物館免費。"
  },
  {
    "word": "gain entry into",
    "pos": "n.",
    "cn_def": "進入",
    "en_def": "to succeed in getting into a place",
    "sentence": "He managed to {{BLANK}} the exclusive club.",
    "cn": "他成功進入了這個專屬俱樂部。"
  },
  {
    "word": "sprays",
    "pos": "v.",
    "cn_def": "噴灑;噴劑",
    "en_def": "to send liquid through the air in very small drops",
    "sentence": "She {{BLANK}} perfume on her neck before going out.",
    "cn": "她在出門前在脖子上噴了香水。"
  },
  {
    "word": "Blend",
    "pos": "v.",
    "cn_def": "(使)混合;融合",
    "en_def": "to mix different things together so they become one",
    "sentence": "{{BLANK}} the ingredients thoroughly for a smooth texture.",
    "cn": "將成分充分混合以獲得光滑的質地。"
  },
  {
    "word": "blender",
    "pos": "n.",
    "cn_def": "攪拌機",
    "en_def": "an electric machine for mixing soft food or liquids",
    "sentence": "She used a {{BLANK}} to make a fruit smoothie.",
    "cn": "她用攪拌機做了果汁冰沙。"
  },
  {
    "word": "outcome",
    "pos": "n.",
    "cn_def": "結果",
    "en_def": "the result of an action or event",
    "sentence": "The {{BLANK}} of the negotiations was favorable for both parties.",
    "cn": "談判的結果對雙方都是有利的。"
  },
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "觀念;概念",
    "en_def": "an idea of what something is or how it works",
    "sentence": "Understanding the {{BLANK}} of sustainability is crucial.",
    "cn": "理解可持續發展的概念是至關重要的。"
  },
  {
    "word": "conception",
    "pos": "n.",
    "cn_def": "概念;構想;想法",
    "en_def": "an idea or understanding of what something is like",
    "sentence": "His {{BLANK}} of justice influenced his decisions.",
    "cn": "他對正義的概念影響了他的決定。"
  },
  {
    "word": "misconception",
    "pos": "n.",
    "cn_def": "錯誤觀念;誤解",
    "en_def": "a belief or idea that is wrong because it is based on wrong information",
    "sentence": "There's a common {{BLANK}} that cats always land on their feet.",
    "cn": "人們普遍誤解貓總是能落在腳上。"
  },
  {
    "word": "shift",
    "pos": "v.",
    "cn_def": "改變;轉移",
    "en_def": "to move or change from one position, direction or opinion to another",
    "sentence": "The {{BLANK}} in public opinion was noticeable after the scandal.",
    "cn": "丑聞後公眾意見的轉變是顯著的。"
  },
  {
    "word": "conventional",
    "pos": "adj.",
    "cn_def": "傳統上的;常規的",
    "en_def": "following what is traditional or usual",
    "sentence": "Their wedding was very {{BLANK}}, with all the traditional rituals.",
    "cn": "他們的婚禮非常傳統，包括所有傳統儀式。"
  },
  {
    "word": "unconventional",
    "pos": "adj.",
    "cn_def": "不因循守舊的",
    "en_def": "very different from what is traditional or usual",
    "sentence": "Her {{BLANK}} approach to solving problems impressed her colleagues.",
    "cn": "她不按常規解決問題的方法給同事留下了深刻的印象。"
  },
  {
    "word": "convention",
    "pos": "n.",
    "cn_def": "慣例",
    "en_def": "a way of behaving that most people in a society accept as normal",
    "sentence": "It's a {{BLANK}} to shake hands when you meet someone new.",
    "cn": "與陌生人見面時握手是慣例。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "戰勝;克服",
    "en_def": "to succeed in dealing with or controlling a problem or feeling",
    "sentence": "She managed to {{BLANK}} her fear of public speaking.",
    "cn": "她成功地克服了對公開演講的恐懼。"
  },
  {
    "word": "overcome with",
    "pos": "n.",
    "cn_def": "被...所克服",
    "en_def": "to be so strongly affected by a feeling that you cannot act normally",
    "sentence": "He was {{BLANK}} emotion when he won the award.",
    "cn": "當他獲得獎項時，他充滿了情感。"
  },
  {
    "word": "boldness",
    "pos": "n.",
    "cn_def": "勇敢;大膽",
    "en_def": "the quality of being brave and willing to take risks",
    "sentence": "The soldier showed great {{BLANK}} in the face of danger.",
    "cn": "士兵在危險面前展示了偉大的勇氣。"
  },
  {
    "word": "bold",
    "pos": "adj.",
    "cn_def": "醒目的;大膽的",
    "en_def": "brave and confident; easy to see or notice",
    "sentence": "Her {{BLANK}} decision to quit her job surprised everyone.",
    "cn": "她大膽地決定辭去工作讓大家都感到驚訝。"
  },
  {
    "word": "favorable",
    "pos": "adj.",
    "cn_def": "贊成的;稱的;肯定的",
    "en_def": "showing approval; good for someone or something",
    "sentence": "The weather conditions were {{BLANK}} for sailing.",
    "cn": "天氣條件對航行是有利的。"
  },
  {
    "word": "unfavorable",
    "pos": "adj.",
    "cn_def": "令人不快的;不利的",
    "en_def": "showing disapproval; not good for someone or something",
    "sentence": "The {{BLANK}} outcome of the negotiations disappointed us.",
    "cn": "談判的不利結果讓我們感到失望。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "評價;評論",
    "en_def": "to write or give your opinion of a book, film or product",
    "sentence": "She wrote a positive {{BLANK}} of the movie for the newspaper.",
    "cn": "她為報紙寫了一篇對電影的正面評論。"
  },
  {
    "word": "spread rumors",
    "pos": "v.",
    "cn_def": "謠傳;傳言",
    "en_def": "to spread a story that may not be true",
    "sentence": "Don't {{BLANK}} about others; it can be harmful.",
    "cn": "別輕易傳言他人，這可能會有害。"
  },
  {
    "word": "delivered",
    "pos": "v.",
    "cn_def": "提供;運送;投遞",
    "en_def": "to take goods or letters to a place; to give a speech",
    "sentence": "He {{BLANK}} a heartfelt apology to his friend.",
    "cn": "他向朋友誠摯地道歉。"
  },
  {
    "word": "delivering a speech",
    "pos": "n.",
    "cn_def": "發表演講",
    "en_def": "to give a formal talk to an audience",
    "sentence": "She was nervous about {{BLANK}} at the conference.",
    "cn": "她對在會議上發表演講感到緊張。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "遞送;運送",
    "en_def": "the act of taking goods or letters to a person or place",
    "sentence": "The courier service provides fast {{BLANK}} of packages.",
    "cn": "快遞服務提供快速的包裹遞送。"
  },
  {
    "word": "molecule",
    "pos": "n.",
    "cn_def": "分子",
    "en_def": "the smallest unit of a substance, made of two or more atoms joined together",
    "sentence": "A water {{BLANK}} is made of two hydrogen atoms and one oxygen atom.",
    "cn": "一個水分子由兩個氫原子和一個氧原子組成。"
  },
  {
    "word": "pheromones",
    "pos": "n.",
    "cn_def": "費洛蒙(昆蟲分泌以刺激同種昆蟲之化合物質)",
    "en_def": "a chemical that an animal produces to send signals to others of its kind",
    "sentence": "Ants use {{BLANK}} to communicate with each other.",
    "cn": "螞蟻使用費洛蒙彼此溝通。"
  },
  {
    "word": "acclaimed",
    "pos": "v.",
    "cn_def": "為...歡呼;稱讚",
    "en_def": "to praise someone or something publicly",
    "sentence": "The actor was {{BLANK}} for his outstanding performance in the play.",
    "cn": "這位演員因其在劇中出色的表演而受到稱讚。"
  }
];

const MCQS = [
  {
    "q": "She loves the scent of roses in her ______ collection.",
    "options": [
      "possibility",
      "perfume",
      "molecule",
      "concept"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The company plans to ______ new software next year.",
    "options": [
      "please",
      "acclaimed",
      "sprays",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The city's rapid ______ has led to increased employment.",
    "options": [
      "entry",
      "expansion",
      "development",
      "pheromones"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Many countries in Africa are ______ nations.",
    "options": [
      "developing",
      "unconventional",
      "bold",
      "pleasant"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "It was a ______ surprise to see her at the party.",
    "options": [
      "possible",
      "conventional",
      "pleasant",
      "favorable"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "His efforts to ______ his boss were successful.",
    "options": [
      "review",
      "please",
      "shift",
      "expand"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The weather turned ______ just as we started our picnic.",
    "options": [
      "unpleasant",
      "conventional",
      "bold",
      "possible"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The company plans to ______ its operations overseas.",
    "options": [
      "shift",
      "sprays",
      "review",
      "expand"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Traveling to new places can ______ your horizons.",
    "options": [
      "possibility",
      "broaden",
      "conception",
      "pheromones"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The rapid ______ of the city led to infrastructure improvements.",
    "options": [
      "possibility",
      "delivering a speech",
      "molecule",
      "expansion"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Her ______ gestures showed her enthusiasm.",
    "options": [
      "unfavorable",
      "developing",
      "expansive",
      "unpleasant"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "There's a strong ______ of rain later today.",
    "options": [
      "possibility",
      "boldness",
      "delivering a speech",
      "outcome"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Is it ______ to finish this project by Friday?",
    "options": [
      "unpleasant",
      "possible",
      "unconventional",
      "conventional"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Admission is free upon ______ to the museum.",
    "options": [
      "entry",
      "gain entry into",
      "delivery",
      "boldness"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "He managed to ______ the exclusive club.",
    "options": [
      "misconception",
      "overcome with",
      "gain entry into",
      "concept"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "She ______ perfume on her neck before going out.",
    "options": [
      "shift",
      "develop",
      "expand",
      "sprays"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "______ the ingredients thoroughly for a smooth texture.",
    "options": [
      "please",
      "overcome",
      "Blend",
      "acclaimed"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "She used a ______ to make a fruit smoothie.",
    "options": [
      "blender",
      "pheromones",
      "misconception",
      "convention"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The ______ of the negotiations was favorable for both parties.",
    "options": [
      "development",
      "outcome",
      "delivering a speech",
      "boldness"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Understanding the ______ of sustainability is crucial.",
    "options": [
      "perfume",
      "pheromones",
      "misconception",
      "concept"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "His ______ of justice influenced his decisions.",
    "options": [
      "conception",
      "outcome",
      "delivering a speech",
      "pheromones"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "There's a common ______ that cats always land on their feet.",
    "options": [
      "molecule",
      "boldness",
      "broaden",
      "misconception"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The ______ in public opinion was noticeable after the scandal.",
    "options": [
      "expand",
      "sprays",
      "shift",
      "delivered"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Their wedding was very ______, with all the traditional rituals.",
    "options": [
      "bold",
      "conventional",
      "unpleasant",
      "unfavorable"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Her ______ approach to solving problems impressed her colleagues.",
    "options": [
      "developing",
      "unpleasant",
      "unconventional",
      "unfavorable"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "It's a ______ to shake hands when you meet someone new.",
    "options": [
      "broaden",
      "convention",
      "blender",
      "molecule"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "She managed to ______ her fear of public speaking.",
    "options": [
      "acclaimed",
      "shift",
      "delivered",
      "overcome"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "He was ______ emotion when he won the award.",
    "options": [
      "overcome with",
      "possibility",
      "gain entry into",
      "delivery"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The soldier showed great ______ in the face of danger.",
    "options": [
      "delivery",
      "misconception",
      "broaden",
      "boldness"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Her ______ decision to quit her job surprised everyone.",
    "options": [
      "possible",
      "pleasant",
      "bold",
      "conventional"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The weather conditions were ______ for sailing.",
    "options": [
      "favorable",
      "pleasant",
      "unconventional",
      "possible"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The ______ outcome of the negotiations disappointed us.",
    "options": [
      "possible",
      "unfavorable",
      "unpleasant",
      "favorable"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "She wrote a positive ______ of the movie for the newspaper.",
    "options": [
      "spread rumors",
      "develop",
      "review",
      "acclaimed"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Don't ______ about others; it can be harmful.",
    "options": [
      "spread rumors",
      "shift",
      "Blend",
      "overcome"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "He ______ a heartfelt apology to his friend.",
    "options": [
      "please",
      "delivered",
      "expand",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "She was nervous about ______ at the conference.",
    "options": [
      "perfume",
      "possibility",
      "conception",
      "delivering a speech"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The courier service provides fast ______ of packages.",
    "options": [
      "delivery",
      "convention",
      "conception",
      "development"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "A water ______ is made of two hydrogen atoms and one oxygen atom.",
    "options": [
      "perfume",
      "misconception",
      "overcome with",
      "molecule"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "Ants use ______ to communicate with each other.",
    "options": [
      "concept",
      "pheromones",
      "molecule",
      "gain entry into"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The actor was ______ for his outstanding performance in the play.",
    "options": [
      "review",
      "develop",
      "acclaimed",
      "expand"
    ],
    "answer": 2,
    "vocabIndex": 39
  }
];

const LOOKUP = {
  "perfume": {
    "pos": "n.",
    "en_def": "a liquid with a pleasant smell that you put on your skin",
    "cn_def": "香水",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a liquid with a pleasant smell that you put on your skin",
        "cn_def": "香水"
      }
    ]
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow or change into something bigger or more advanced; to create something new",
    "cn_def": "使發展;開發;形成",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to grow or change into something bigger or more advanced; to create something new",
        "cn_def": "使發展;開發;形成"
      }
    ]
  },
  "development": {
    "pos": "n.",
    "en_def": "the process of growing, changing or becoming more advanced",
    "cn_def": "發展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of growing, changing or becoming more advanced",
        "cn_def": "發展"
      }
    ]
  },
  "developing": {
    "pos": "adj.",
    "en_def": "growing or becoming more advanced",
    "cn_def": "發展中的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "growing or becoming more advanced",
        "cn_def": "發展中的"
      }
    ]
  },
  "pleasant": {
    "pos": "adj.",
    "en_def": "enjoyable, nice or friendly",
    "cn_def": "令人愉快的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "enjoyable, nice or friendly",
        "cn_def": "令人愉快的"
      }
    ]
  },
  "please": {
    "pos": "v.",
    "en_def": "to make someone happy or satisfied",
    "cn_def": "使高興;滿意",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone happy or satisfied",
        "cn_def": "使高興;滿意"
      }
    ]
  },
  "unpleasant": {
    "pos": "adj.",
    "en_def": "not enjoyable; not nice or friendly",
    "cn_def": "令人不愉快的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not enjoyable; not nice or friendly",
        "cn_def": "令人不愉快的"
      }
    ]
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become or make something larger in size, number or importance",
    "cn_def": "擴大;增加;發展",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make something larger in size, number or importance",
        "cn_def": "擴大;增加;發展"
      }
    ]
  },
  "broaden": {
    "pos": "n.",
    "en_def": "to help someone learn about and experience more new things",
    "cn_def": "拓展視野;廣見聞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to help someone learn about and experience more new things",
        "cn_def": "拓展視野;廣見聞"
      }
    ]
  },
  "expand/widen/broaden sb.'s horizons": {
    "pos": "n.",
    "en_def": "to help someone learn about and experience more new things",
    "cn_def": "拓展視野;廣見聞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to help someone learn about and experience more new things",
        "cn_def": "拓展視野;廣見聞"
      }
    ]
  },
  "expansion": {
    "pos": "n.",
    "en_def": "the act of becoming larger in size, number or importance",
    "cn_def": "擴展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of becoming larger in size, number or importance",
        "cn_def": "擴展"
      }
    ]
  },
  "expansive": {
    "pos": "adj.",
    "en_def": "covering a wide area; growing larger",
    "cn_def": "擴張的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "covering a wide area; growing larger",
        "cn_def": "擴張的"
      }
    ]
  },
  "possibility": {
    "pos": "n.",
    "en_def": "a chance that something may happen or be true",
    "cn_def": "可能性;可能",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chance that something may happen or be true",
        "cn_def": "可能性;可能"
      }
    ]
  },
  "possible": {
    "pos": "adj.",
    "en_def": "that can happen, be done or be true",
    "cn_def": "可能的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "that can happen, be done or be true",
        "cn_def": "可能的"
      }
    ]
  },
  "entry": {
    "pos": "n.",
    "en_def": "the act or right of going into a place or joining a competition",
    "cn_def": "進入權;參加",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act or right of going into a place or joining a competition",
        "cn_def": "進入權;參加"
      }
    ]
  },
  "gain entry into": {
    "pos": "n.",
    "en_def": "to succeed in getting into a place",
    "cn_def": "進入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to succeed in getting into a place",
        "cn_def": "進入"
      }
    ]
  },
  "sprays": {
    "pos": "v.",
    "en_def": "to send liquid through the air in very small drops",
    "cn_def": "噴灑;噴劑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to send liquid through the air in very small drops",
        "cn_def": "噴灑;噴劑"
      }
    ]
  },
  "spray": {
    "pos": "v.",
    "en_def": "to send liquid through the air in very small drops",
    "cn_def": "噴灑;噴劑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to send liquid through the air in very small drops",
        "cn_def": "噴灑;噴劑"
      }
    ]
  },
  "blend": {
    "pos": "v.",
    "en_def": "to mix different things together so they become one",
    "cn_def": "(使)混合;融合",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to mix different things together so they become one",
        "cn_def": "(使)混合;融合"
      }
    ]
  },
  "blender": {
    "pos": "n.",
    "en_def": "an electric machine for mixing soft food or liquids",
    "cn_def": "攪拌機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an electric machine for mixing soft food or liquids",
        "cn_def": "攪拌機"
      }
    ]
  },
  "outcome": {
    "pos": "n.",
    "en_def": "the result of an action or event",
    "cn_def": "結果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the result of an action or event",
        "cn_def": "結果"
      }
    ]
  },
  "concept": {
    "pos": "n.",
    "en_def": "an idea of what something is or how it works",
    "cn_def": "觀念;概念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea of what something is or how it works",
        "cn_def": "觀念;概念"
      }
    ]
  },
  "conception": {
    "pos": "n.",
    "en_def": "an idea or understanding of what something is like",
    "cn_def": "概念;構想;想法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea or understanding of what something is like",
        "cn_def": "概念;構想;想法"
      }
    ]
  },
  "misconception": {
    "pos": "n.",
    "en_def": "a belief or idea that is wrong because it is based on wrong information",
    "cn_def": "錯誤觀念;誤解",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a belief or idea that is wrong because it is based on wrong information",
        "cn_def": "錯誤觀念;誤解"
      }
    ]
  },
  "shift": {
    "pos": "v.",
    "en_def": "to move or change from one position, direction or opinion to another",
    "cn_def": "改變;轉移",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move or change from one position, direction or opinion to another",
        "cn_def": "改變;轉移"
      }
    ]
  },
  "conventional": {
    "pos": "adj.",
    "en_def": "following what is traditional or usual",
    "cn_def": "傳統上的;常規的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "following what is traditional or usual",
        "cn_def": "傳統上的;常規的"
      }
    ]
  },
  "unconventional": {
    "pos": "adj.",
    "en_def": "very different from what is traditional or usual",
    "cn_def": "不因循守舊的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very different from what is traditional or usual",
        "cn_def": "不因循守舊的"
      }
    ]
  },
  "convention": {
    "pos": "n.",
    "en_def": "a way of behaving that most people in a society accept as normal",
    "cn_def": "慣例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of behaving that most people in a society accept as normal",
        "cn_def": "慣例"
      }
    ]
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with or controlling a problem or feeling",
    "cn_def": "戰勝;克服",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to succeed in dealing with or controlling a problem or feeling",
        "cn_def": "戰勝;克服"
      }
    ]
  },
  "overcome with": {
    "pos": "n.",
    "en_def": "to be so strongly affected by a feeling that you cannot act normally",
    "cn_def": "被...所克服",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to be so strongly affected by a feeling that you cannot act normally",
        "cn_def": "被...所克服"
      }
    ]
  },
  "be overcome with": {
    "pos": "n.",
    "en_def": "to be so strongly affected by a feeling that you cannot act normally",
    "cn_def": "被...所克服",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to be so strongly affected by a feeling that you cannot act normally",
        "cn_def": "被...所克服"
      }
    ]
  },
  "boldness": {
    "pos": "n.",
    "en_def": "the quality of being brave and willing to take risks",
    "cn_def": "勇敢;大膽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being brave and willing to take risks",
        "cn_def": "勇敢;大膽"
      }
    ]
  },
  "bold": {
    "pos": "adj.",
    "en_def": "brave and confident; easy to see or notice",
    "cn_def": "醒目的;大膽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "brave and confident; easy to see or notice",
        "cn_def": "醒目的;大膽的"
      }
    ]
  },
  "favorable": {
    "pos": "adj.",
    "en_def": "showing approval; good for someone or something",
    "cn_def": "贊成的;稱的;肯定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing approval; good for someone or something",
        "cn_def": "贊成的;稱的;肯定的"
      }
    ]
  },
  "unfavorable": {
    "pos": "adj.",
    "en_def": "showing disapproval; not good for someone or something",
    "cn_def": "令人不快的;不利的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing disapproval; not good for someone or something",
        "cn_def": "令人不快的;不利的"
      }
    ]
  },
  "review": {
    "pos": "v.",
    "en_def": "to write or give your opinion of a book, film or product",
    "cn_def": "評價;評論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to write or give your opinion of a book, film or product",
        "cn_def": "評價;評論"
      }
    ]
  },
  "spread rumors": {
    "pos": "v.",
    "en_def": "to spread a story that may not be true",
    "cn_def": "謠傳;傳言",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to spread a story that may not be true",
        "cn_def": "謠傳;傳言"
      }
    ]
  },
  "rumor": {
    "pos": "v.",
    "en_def": "to spread a story that may not be true",
    "cn_def": "謠傳;傳言",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to spread a story that may not be true",
        "cn_def": "謠傳;傳言"
      }
    ]
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to take goods or letters to a place; to give a speech",
    "cn_def": "提供;運送;投遞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take goods or letters to a place; to give a speech",
        "cn_def": "提供;運送;投遞"
      }
    ]
  },
  "delivered": {
    "pos": "v.",
    "en_def": "to take goods or letters to a place; to give a speech",
    "cn_def": "提供;運送;投遞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take goods or letters to a place; to give a speech",
        "cn_def": "提供;運送;投遞"
      }
    ]
  },
  "delivering a speech": {
    "pos": "n.",
    "en_def": "to give a formal talk to an audience",
    "cn_def": "發表演講",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to give a formal talk to an audience",
        "cn_def": "發表演講"
      }
    ]
  },
  "deliver a speech": {
    "pos": "n.",
    "en_def": "to give a formal talk to an audience",
    "cn_def": "發表演講",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to give a formal talk to an audience",
        "cn_def": "發表演講"
      }
    ]
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of taking goods or letters to a person or place",
    "cn_def": "遞送;運送",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of taking goods or letters to a person or place",
        "cn_def": "遞送;運送"
      }
    ]
  },
  "molecule": {
    "pos": "n.",
    "en_def": "the smallest unit of a substance, made of two or more atoms joined together",
    "cn_def": "分子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the smallest unit of a substance, made of two or more atoms joined together",
        "cn_def": "分子"
      }
    ]
  },
  "pheromone": {
    "pos": "n.",
    "en_def": "a chemical that an animal produces to send signals to others of its kind",
    "cn_def": "費洛蒙(昆蟲分泌以刺激同種昆蟲之化合物質)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chemical that an animal produces to send signals to others of its kind",
        "cn_def": "費洛蒙(昆蟲分泌以刺激同種昆蟲之化合物質)"
      }
    ]
  },
  "pheromones": {
    "pos": "n.",
    "en_def": "a chemical that an animal produces to send signals to others of its kind",
    "cn_def": "費洛蒙(昆蟲分泌以刺激同種昆蟲之化合物質)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chemical that an animal produces to send signals to others of its kind",
        "cn_def": "費洛蒙(昆蟲分泌以刺激同種昆蟲之化合物質)"
      }
    ]
  },
  "acclaim": {
    "pos": "v.",
    "en_def": "to praise someone or something publicly",
    "cn_def": "為...歡呼;稱讚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to praise someone or something publicly",
        "cn_def": "為...歡呼;稱讚"
      }
    ]
  },
  "acclaimed": {
    "pos": "v.",
    "en_def": "to praise someone or something publicly",
    "cn_def": "為...歡呼;稱讚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to praise someone or something publicly",
        "cn_def": "為...歡呼;稱讚"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
