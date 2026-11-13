// Part 4 Quiz Data: exploiter – inspector
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 8 Part 4 - exploiter – inspector",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "exploiter",
    "pos": "n.",
    "cn_def": "剝削者",
    "en_def": "a person who uses others unfairly",
    "sentence": "The {{BLANK}} was eventually brought to justice for his actions.",
    "cn": "剝削者最終因其行為被繩之以法。"
  },
  {
    "word": "exploitation",
    "pos": "n.",
    "cn_def": "剝削",
    "en_def": "unfair use of people or things",
    "sentence": "The film exposes the {{BLANK}} of workers in certain industries.",
    "cn": "電影揭示了某些行業中工人的剝削。"
  },
  {
    "word": "fluctuate",
    "pos": "v.",
    "cn_def": "波動",
    "en_def": "to go up and down",
    "sentence": "Stock prices tend to {{BLANK}} based on market conditions.",
    "cn": "股票價格傾向於根據市場條件波動。"
  },
  {
    "word": "fluctuated",
    "pos": "adj.",
    "cn_def": "波動的",
    "en_def": "went up and down",
    "sentence": "The {{BLANK}} income made budgeting a challenge.",
    "cn": "波動的收入使預算成為一個挑戰。"
  },
  {
    "word": "fluctuation",
    "pos": "n.",
    "cn_def": "波動",
    "en_def": "a change up and down",
    "sentence": "The {{BLANK}} in the exchange rate can impact international business transactions.",
    "cn": "匯率的波動可能會影響國際商業交易。"
  },
  {
    "word": "guide",
    "pos": "v.",
    "cn_def": "引導",
    "en_def": "to show someone the way",
    "sentence": "The mentor will {{BLANK}} the new employees through the training program.",
    "cn": "導師將引導新員工完成培訓課程。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "指南",
    "en_def": "a book that gives information",
    "sentence": "Please refer to the user {{BLANK}} for troubleshooting steps.",
    "cn": "請參考用戶指南以獲取疑難解答步驟。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導",
    "en_def": "help and advice",
    "sentence": "With proper {{BLANK}}, they were able to complete the project on time.",
    "cn": "在適當的指導下，他們能夠按時完成項目。"
  },
  {
    "word": "guidelines",
    "pos": "n.",
    "cn_def": "指南",
    "en_def": "rules or advice on how to do something",
    "sentence": "The company has set strict {{BLANK}} for employee conduct.",
    "cn": "公司為員工行為制定了嚴格的指南。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is important",
    "sentence": "The report will {{BLANK}} the major accomplishments of the team.",
    "cn": "報告將強調團隊的主要成就。"
  },
  {
    "word": "highlight",
    "pos": "n.",
    "cn_def": "重點",
    "en_def": "the best or most important part",
    "sentence": "One of the {{BLANK}} of the event was the keynote speech.",
    "cn": "活動的重點之一是主題演講。"
  },
  {
    "word": "highlighted",
    "pos": "adj.",
    "cn_def": "被強調的",
    "en_def": "marked to show importance",
    "sentence": "The {{BLANK}} issues require immediate attention.",
    "cn": "被強調的問題需要立即關注。"
  },
  {
    "word": "implicit",
    "pos": "adj.",
    "cn_def": "含蓄的",
    "en_def": "suggested but not said directly",
    "sentence": "The {{BLANK}} meaning of the poem is hard to grasp.",
    "cn": "詩的含蓄意義很難把握。"
  },
  {
    "word": "explicit",
    "pos": "adj.",
    "cn_def": "明確的",
    "en_def": "very clear and direct",
    "sentence": "The instructions were {{BLANK}} and easy to follow.",
    "cn": "指令很明確，容易遵循。"
  },
  {
    "word": "induce",
    "pos": "v.",
    "cn_def": "引起",
    "en_def": "to cause something to happen",
    "sentence": "The medication can {{BLANK}} sleep in some patients.",
    "cn": "這種藥物可能會在一些病人中引起睡眠。"
  },
  {
    "word": "induced",
    "pos": "adj.",
    "cn_def": "誘導的",
    "en_def": "caused by something",
    "sentence": "The {{BLANK}} coma was necessary to reduce the swelling in his brain.",
    "cn": "誘導的昏迷是必要的，以減少他的大腦腫脹。"
  },
  {
    "word": "inevitable",
    "pos": "adj.",
    "cn_def": "不可避免的",
    "en_def": "certain to happen",
    "sentence": "The changes were {{BLANK}} given the circumstances.",
    "cn": "鑑於情況，變化是不可避免的。"
  },
  {
    "word": "inevitably",
    "pos": "adv.",
    "cn_def": "不可避免地",
    "en_def": "as was certain to happen",
    "sentence": "The project will {{BLANK}} face challenges as it progresses.",
    "cn": "隨著項目的進展，它將不可避免地面臨挑戰。"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎設施",
    "en_def": "basic systems like roads and power",
    "sentence": "The city needs to invest in its {{BLANK}} to support growth.",
    "cn": "該市需要投資於其基礎設施以支持增長。"
  },
  {
    "word": "inspect",
    "pos": "v.",
    "cn_def": "檢查",
    "en_def": "to look at something carefully",
    "sentence": "The officer will {{BLANK}} the premises for any safety violations.",
    "cn": "官員將檢查房屋是否存在任何安全違規行為。"
  },
  {
    "word": "inspector",
    "pos": "n.",
    "cn_def": "檢查員",
    "en_def": "a person whose job is to inspect things",
    "sentence": "The {{BLANK}} identified several issues during the audit.",
    "cn": "檢查員在審計期間確定了幾個問題。"
  }
];

const MCQS = [
  {
    "q": "The ______ was eventually brought to justice for his actions.",
    "options": [
      "exploiter",
      "revision",
      "termination",
      "restoration"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The film exposes the ______ of workers in certain industries.",
    "options": [
      "deviation",
      "revision",
      "exploitation",
      "accumulation"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Stock prices tend to ______ based on market conditions.",
    "options": [
      "manipulate",
      "fluctuate",
      "denote",
      "guide"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The ______ income made budgeting a challenge.",
    "options": [
      "widespread",
      "induced",
      "abandoned",
      "fluctuated"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The ______ in the exchange rate can impact international business transactions.",
    "options": [
      "companion",
      "guide",
      "fluctuation",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The mentor will ______ the new employees through the training program.",
    "options": [
      "guide",
      "restore",
      "inspect",
      "fluctuate"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please refer to the user ______ for troubleshooting steps.",
    "options": [
      "event",
      "termination",
      "prospect",
      "guide"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "With proper ______, they were able to complete the project on time.",
    "options": [
      "intensity",
      "guidance",
      "event",
      "exhibit"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The company has set strict ______ for employee conduct.",
    "options": [
      "clarity",
      "practitioner",
      "revision",
      "guidelines"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The report will ______ the major accomplishments of the team.",
    "options": [
      "highlight",
      "terminate",
      "detect",
      "complement"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "One of the ______ of the event was the keynote speech.",
    "options": [
      "exhibition",
      "highlight",
      "unity",
      "guidelines"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The ______ issues require immediate attention.",
    "options": [
      "complement",
      "reinforced",
      "highlighted",
      "radical"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The ______ meaning of the poem is hard to grasp.",
    "options": [
      "manipulative",
      "implicit",
      "inevitable",
      "dramatic"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The instructions were ______ and easy to follow.",
    "options": [
      "tense",
      "terminated",
      "intensive",
      "explicit"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The medication can ______ sleep in some patients.",
    "options": [
      "manipulate",
      "guide",
      "induce",
      "exploit"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The ______ coma was necessary to reduce the swelling in his brain.",
    "options": [
      "induced",
      "displaced",
      "inspected",
      "accompanied"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The changes were ______ given the circumstances.",
    "options": [
      "biased",
      "complement",
      "accompanied",
      "inevitable"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The project will ______ face challenges as it progresses.",
    "options": [
      "inevitably",
      "automatically",
      "thereby",
      "predominantly"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The city needs to invest in its ______ to support growth.",
    "options": [
      "schedule",
      "infrastructure",
      "guidance",
      "detection"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The officer will ______ the premises for any safety violations.",
    "options": [
      "denote",
      "intensify",
      "inspect",
      "clarify"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The ______ identified several issues during the audit.",
    "options": [
      "virtue",
      "fluctuation",
      "termination",
      "inspector"
    ],
    "answer": 3,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "exploiter": {
    "pos": "n.",
    "en_def": "a person who uses others unfairly",
    "cn_def": "剝削者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who uses others unfairly",
        "cn_def": "剝削者"
      }
    ]
  },
  "exploitation": {
    "pos": "n.",
    "en_def": "unfair use of people or things",
    "cn_def": "剝削",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair use of people or things",
        "cn_def": "剝削"
      }
    ]
  },
  "fluctuate": {
    "pos": "v.",
    "en_def": "to go up and down",
    "cn_def": "波動",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to go up and down",
        "cn_def": "波動"
      }
    ]
  },
  "fluctuated": {
    "pos": "adj.",
    "en_def": "went up and down",
    "cn_def": "波動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "went up and down",
        "cn_def": "波動的"
      }
    ]
  },
  "fluctuation": {
    "pos": "n.",
    "en_def": "a change up and down",
    "cn_def": "波動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change up and down",
        "cn_def": "波動"
      }
    ]
  },
  "guide": {
    "pos": "v.",
    "en_def": "to show someone the way",
    "cn_def": "引導",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show someone the way",
        "cn_def": "引導"
      },
      {
        "pos": "n.",
        "en_def": "a book that gives information",
        "cn_def": "指南"
      }
    ]
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice",
    "cn_def": "指導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "help and advice",
        "cn_def": "指導"
      }
    ]
  },
  "guidelines": {
    "pos": "n.",
    "en_def": "rules or advice on how to do something",
    "cn_def": "指南",
    "combined": [
      {
        "pos": "n.",
        "en_def": "rules or advice on how to do something",
        "cn_def": "指南"
      }
    ]
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to show that something is important",
    "cn_def": "強調",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show that something is important",
        "cn_def": "強調"
      },
      {
        "pos": "n.",
        "en_def": "the best or most important part",
        "cn_def": "重點"
      }
    ]
  },
  "highlighted": {
    "pos": "adj.",
    "en_def": "marked to show importance",
    "cn_def": "被強調的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "marked to show importance",
        "cn_def": "被強調的"
      }
    ]
  },
  "implicit": {
    "pos": "adj.",
    "en_def": "suggested but not said directly",
    "cn_def": "含蓄的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "suggested but not said directly",
        "cn_def": "含蓄的"
      }
    ]
  },
  "explicit": {
    "pos": "adj.",
    "en_def": "very clear and direct",
    "cn_def": "明確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very clear and direct",
        "cn_def": "明確的"
      }
    ]
  },
  "induce": {
    "pos": "v.",
    "en_def": "to cause something to happen",
    "cn_def": "引起",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause something to happen",
        "cn_def": "引起"
      }
    ]
  },
  "induced": {
    "pos": "adj.",
    "en_def": "caused by something",
    "cn_def": "誘導的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "caused by something",
        "cn_def": "誘導的"
      }
    ]
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen",
    "cn_def": "不可避免的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "certain to happen",
        "cn_def": "不可避免的"
      }
    ]
  },
  "inevitably": {
    "pos": "adv.",
    "en_def": "as was certain to happen",
    "cn_def": "不可避免地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as was certain to happen",
        "cn_def": "不可避免地"
      }
    ]
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "basic systems like roads and power",
    "cn_def": "基礎設施",
    "combined": [
      {
        "pos": "n.",
        "en_def": "basic systems like roads and power",
        "cn_def": "基礎設施"
      }
    ]
  },
  "inspect": {
    "pos": "v.",
    "en_def": "to look at something carefully",
    "cn_def": "檢查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look at something carefully",
        "cn_def": "檢查"
      }
    ]
  },
  "inspector": {
    "pos": "n.",
    "en_def": "a person whose job is to inspect things",
    "cn_def": "檢查員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose job is to inspect things",
        "cn_def": "檢查員"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
