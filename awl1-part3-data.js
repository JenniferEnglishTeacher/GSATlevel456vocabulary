// Part 3 Quiz Data: be derived from – imported
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 3 - be derived from – imported",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "is derived from",
    "pos": "adj.",
    "cn_def": "衍生的",
    "en_def": "to come from or be made from something",
    "sentence": "This oil {{BLANK}} plants.",
    "cn": "這種油是從植物中提取的。"
  },
  {
    "word": "distribute",
    "pos": "v.",
    "cn_def": "分發",
    "en_def": "to give things out to many people",
    "sentence": "The organization will {{BLANK}} food to those in need.",
    "cn": "該組織將向有需要的人分發食物。"
  },
  {
    "word": "distribution",
    "pos": "n.",
    "cn_def": "分配",
    "en_def": "the way things are shared or given out",
    "sentence": "The {{BLANK}} of resources is a critical issue.",
    "cn": "資源的分配是一個關鍵問題。"
  },
  {
    "word": "economy",
    "pos": "n.",
    "cn_def": "經濟",
    "en_def": "the money, trade and business of a country",
    "sentence": "The global {{BLANK}} has been affected by the pandemic.",
    "cn": "全球經濟受到了大流行的影響。"
  },
  {
    "word": "economic",
    "pos": "adj.",
    "cn_def": "經濟的",
    "en_def": "about money, trade and business",
    "sentence": "The {{BLANK}} situation in the country is improving.",
    "cn": "該國的經濟形勢正在改善。"
  },
  {
    "word": "economical",
    "pos": "adj.",
    "cn_def": "省錢的",
    "en_def": "saving money; not costing much",
    "sentence": "It's more {{BLANK}} to buy groceries in bulk.",
    "cn": "批量購買雜貨更為省錢。"
  },
  {
    "word": "economics",
    "pos": "n.",
    "cn_def": "經濟學",
    "en_def": "the study of money, trade and business",
    "sentence": "He's studying {{BLANK}} at the university.",
    "cn": "他在大學學習經濟學。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the air, water and land around us",
    "sentence": "Protecting the {{BLANK}} should be a global priority.",
    "cn": "保護環境應該是全球的優先事項。"
  },
  {
    "word": "establish",
    "pos": "v.",
    "cn_def": "建立",
    "en_def": "to start or create something that will last",
    "sentence": "They hope to {{BLANK}} a new school in the area.",
    "cn": "他們希望在該地區建立一所新學校。"
  },
  {
    "word": "established",
    "pos": "adj.",
    "cn_def": "知名的",
    "en_def": "well known and accepted for a long time",
    "sentence": "The museum is an {{BLANK}} institution in the city.",
    "cn": "該博物館是城市的一個知名的機構。"
  },
  {
    "word": "establishment",
    "pos": "n.",
    "cn_def": "建造，機構",
    "en_def": "the act of starting something; an organization",
    "sentence": "The {{BLANK}} of new parks benefits the community.",
    "cn": "新公園的建立對社區有益。"
  },
  {
    "word": "estimate",
    "pos": "v.",
    "cn_def": "估計",
    "en_def": "to guess a number or amount",
    "sentence": "We need to {{BLANK}} the cost of the project.",
    "cn": "我們需要估計專案的成本。"
  },
  {
    "word": "estimated",
    "pos": "adj.",
    "cn_def": "估計的",
    "en_def": "guessed, not exact",
    "sentence": "The {{BLANK}} arrival time is 5 pm.",
    "cn": "估計的到達時間是下午5點。"
  },
  {
    "word": "It is estimated that",
    "pos": "phr.",
    "cn_def": "據估計",
    "en_def": "people believe the number is about...",
    "sentence": "{{BLANK}} over 1,000 people attended the event.",
    "cn": "據估計有超過1000人參加了這個活動。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or things that show something is true",
    "sentence": "The detective searched for {{BLANK}} at the crime scene.",
    "cn": "偵探在犯罪現場尋找證據。"
  },
  {
    "word": "evident",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "clear and easy to see",
    "sentence": "It was {{BLANK}} that she was tired after the trip.",
    "cn": "她旅行後很累是明顯的"
  },
  {
    "word": "export",
    "pos": "v.",
    "cn_def": "出口",
    "en_def": "to sell goods to another country",
    "sentence": "The country plans to {{BLANK}} more agricultural products.",
    "cn": "該國計畫出口更多的農產品。"
  },
  {
    "word": "exported",
    "pos": "adj.",
    "cn_def": "出口的",
    "en_def": "sold and sent to another country",
    "sentence": "The {{BLANK}} goods reached their destination safely.",
    "cn": "出口的貨物安全到達目的地。"
  },
  {
    "word": "import",
    "pos": "v.",
    "cn_def": "進口",
    "en_def": "to buy goods from another country",
    "sentence": "They {{BLANK}} electronics from several Asian countries.",
    "cn": "他們從幾個亞洲國家進口電子產品。"
  },
  {
    "word": "imported",
    "pos": "adj.",
    "cn_def": "進口的",
    "en_def": "brought in from another country",
    "sentence": "She loves drinking {{BLANK}} wines from Europe.",
    "cn": "她喜歡喝從歐洲進口的葡萄酒。"
  }
];

const MCQS = [
  {
    "q": "This oil ______ plants.",
    "options": [
      "be derived from",
      "benefit",
      "make a response to N",
      "a variety of"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The organization will ______ food to those in need.",
    "options": [
      "specify",
      "occur",
      "distribute",
      "contract"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of resources is a critical issue.",
    "options": [
      "identity",
      "distribution",
      "economics",
      "process"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The global ______ has been affected by the pandemic.",
    "options": [
      "benefit",
      "individual",
      "structure",
      "economy"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The ______ situation in the country is improving.",
    "options": [
      "consistent",
      "functional",
      "economic",
      "structural"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "It's more ______ to buy groceries in bulk.",
    "options": [
      "economical",
      "imported",
      "exported",
      "creative"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "He's studying ______ at the university.",
    "options": [
      "interpretation",
      "proficiency",
      "area",
      "economics"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Protecting the ______ should be a global priority.",
    "options": [
      "creation",
      "environment",
      "context",
      "proficiency"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "They hope to ______ a new school in the area.",
    "options": [
      "establish",
      "occur",
      "indicate",
      "vary"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The museum is an ______ institution in the city.",
    "options": [
      "legal",
      "available",
      "established",
      "structured"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ______ of new parks benefits the community.",
    "options": [
      "theory",
      "establishment",
      "source",
      "concept"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "We need to ______ the cost of the project.",
    "options": [
      "export",
      "contract",
      "assume",
      "estimate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The ______ arrival time is 5 pm.",
    "options": [
      "estimated",
      "counterfeit",
      "evident",
      "imported"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "______ over 1,000 people attended the event.",
    "options": [
      "benefit",
      "benefit from",
      "It is estimated that",
      "derive from"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The detective searched for ______ at the crime scene.",
    "options": [
      "method",
      "evidence",
      "interpretation",
      "labor"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "It was ______ that she was tired after the trip.",
    "options": [
      "functional",
      "consistent",
      "available",
      "evident"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The country plans to ______ more agricultural products.",
    "options": [
      "vary",
      "export",
      "occur",
      "require"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The ______ goods reached their destination safely.",
    "options": [
      "authorized",
      "significant",
      "structural",
      "exported"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "They ______ electronics from several Asian countries.",
    "options": [
      "import",
      "indicate",
      "define",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "She loves drinking ______ wines from Europe.",
    "options": [
      "unauthorized",
      "major",
      "imported",
      "established"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "is derived from": {
    "pos": "adj.",
    "en_def": "to come from or be made from something",
    "cn_def": "衍生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "to come from or be made from something",
        "cn_def": "衍生的"
      }
    ]
  },
  "be derived from": {
    "pos": "adj.",
    "en_def": "to come from or be made from something",
    "cn_def": "衍生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "to come from or be made from something",
        "cn_def": "衍生的"
      }
    ]
  },
  "distribute": {
    "pos": "v.",
    "en_def": "to give things out to many people",
    "cn_def": "分發",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give things out to many people",
        "cn_def": "分發"
      }
    ]
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way things are shared or given out",
    "cn_def": "分配",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way things are shared or given out",
        "cn_def": "分配"
      }
    ]
  },
  "economy": {
    "pos": "n.",
    "en_def": "the money, trade and business of a country",
    "cn_def": "經濟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the money, trade and business of a country",
        "cn_def": "經濟"
      }
    ]
  },
  "economic": {
    "pos": "adj.",
    "en_def": "about money, trade and business",
    "cn_def": "經濟的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about money, trade and business",
        "cn_def": "經濟的"
      }
    ]
  },
  "economical": {
    "pos": "adj.",
    "en_def": "saving money; not costing much",
    "cn_def": "省錢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "saving money; not costing much",
        "cn_def": "省錢的"
      }
    ]
  },
  "economics": {
    "pos": "n.",
    "en_def": "the study of money, trade and business",
    "cn_def": "經濟學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the study of money, trade and business",
        "cn_def": "經濟學"
      }
    ]
  },
  "environment": {
    "pos": "n.",
    "en_def": "the air, water and land around us",
    "cn_def": "環境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the air, water and land around us",
        "cn_def": "環境"
      }
    ]
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to start or create something that will last",
        "cn_def": "建立"
      }
    ]
  },
  "established": {
    "pos": "adj.",
    "en_def": "well known and accepted for a long time",
    "cn_def": "知名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "well known and accepted for a long time",
        "cn_def": "知名的"
      }
    ]
  },
  "establishment": {
    "pos": "n.",
    "en_def": "the act of starting something; an organization",
    "cn_def": "建造，機構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of starting something; an organization",
        "cn_def": "建造，機構"
      }
    ]
  },
  "estimate": {
    "pos": "v.",
    "en_def": "to guess a number or amount",
    "cn_def": "估計",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to guess a number or amount",
        "cn_def": "估計"
      }
    ]
  },
  "estimated": {
    "pos": "adj.",
    "en_def": "guessed, not exact",
    "cn_def": "估計的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "guessed, not exact",
        "cn_def": "估計的"
      }
    ]
  },
  "it is estimated that": {
    "pos": "phr.",
    "en_def": "people believe the number is about...",
    "cn_def": "據估計",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "people believe the number is about...",
        "cn_def": "據估計"
      }
    ]
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or things that show something is true",
    "cn_def": "證據",
    "combined": [
      {
        "pos": "n.",
        "en_def": "facts or things that show something is true",
        "cn_def": "證據"
      }
    ]
  },
  "evident": {
    "pos": "adj.",
    "en_def": "clear and easy to see",
    "cn_def": "明顯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clear and easy to see",
        "cn_def": "明顯的"
      }
    ]
  },
  "export": {
    "pos": "v.",
    "en_def": "to sell goods to another country",
    "cn_def": "出口",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to sell goods to another country",
        "cn_def": "出口"
      }
    ]
  },
  "exported": {
    "pos": "adj.",
    "en_def": "sold and sent to another country",
    "cn_def": "出口的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sold and sent to another country",
        "cn_def": "出口的"
      }
    ]
  },
  "import": {
    "pos": "v.",
    "en_def": "to buy goods from another country",
    "cn_def": "進口",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to buy goods from another country",
        "cn_def": "進口"
      }
    ]
  },
  "imported": {
    "pos": "adj.",
    "en_def": "brought in from another country",
    "cn_def": "進口的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "brought in from another country",
        "cn_def": "進口的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
