// Part 5 Quiz Data: be involved in – procedure
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 5 - be involved in – procedure",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "involved in",
    "pos": "phr",
    "cn_def": "參與",
    "en_def": "to take part in an activity",
    "sentence": "She is {{BLANK}} various charitable activities.",
    "cn": "她參與了各種慈善活動。"
  },
  {
    "word": "issue",
    "pos": "v.",
    "cn_def": "發行",
    "en_def": "to officially give out or print something",
    "sentence": "They plan to {{BLANK}} a new edition of the book.",
    "cn": "他們計畫發行這本書的新版本。"
  },
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "問題",
    "en_def": "an important problem or topic",
    "sentence": "The main {{BLANK}} discussed was the budget.",
    "cn": "討論的主要問題是預算。"
  },
  {
    "word": "labor",
    "pos": "n.",
    "cn_def": "勞動",
    "en_def": "hard physical work",
    "sentence": "Manual {{BLANK}} is highly valued in some professions.",
    "cn": "在某些職業中，手工勞動被高度重視。"
  },
  {
    "word": "laborer",
    "pos": "n.",
    "cn_def": "勞工",
    "en_def": "a worker who does hard physical work",
    "sentence": "The {{BLANK}} worked long hours under the sun.",
    "cn": "勞工在太陽下工作了很長時間。"
  },
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "合法的",
    "en_def": "allowed by the law",
    "sentence": "It's not {{BLANK}} to park here. It's prohibited.",
    "cn": "在這裡停車是不合法的。這是禁止的"
  },
  {
    "word": "illegal",
    "pos": "adj.",
    "cn_def": "非法的",
    "en_def": "not allowed by the law",
    "sentence": "Selling counterfeit goods is {{BLANK}}. People  with violation of the regulation will be sentenced to 3 years of jail",
    "cn": "出售假冒商品是非法的。觸犯該法規的人會被判三年徒刑"
  },
  {
    "word": "legislation",
    "pos": "n.",
    "cn_def": "立法",
    "en_def": "laws made by a government",
    "sentence": "The new {{BLANK}} aims to protect the environment by illegalizing proaching endangered species.",
    "cn": "新的立法旨在保護環境，藉由使盜獵瀕臨物種非法化。"
  },
  {
    "word": "legislator",
    "pos": "n.",
    "cn_def": "立法者",
    "en_def": "a person who makes laws",
    "sentence": "The {{BLANK}} proposed a bill to support local businesses.",
    "cn": "立法者提出了一項支持本地企業的法案。"
  },
  {
    "word": "major",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "very important or big",
    "sentence": "The museum underwent a {{BLANK}} renovation.",
    "cn": "博物館經歷了一次主要的翻新。"
  },
  {
    "word": "major in",
    "pos": "phr",
    "cn_def": "主修",
    "en_def": "to study a subject as your main subject at university",
    "sentence": "She decided to {{BLANK}} biology.",
    "cn": "她決定主修生物學。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法",
    "en_def": "a way of doing something",
    "sentence": "They adopted a new {{BLANK}} to solve the problem.",
    "cn": "他們採用了一種新方法來解決這個問題。"
  },
  {
    "word": "occur",
    "pos": "v.",
    "cn_def": "發生",
    "en_def": "to happen",
    "sentence": "Accidents can {{BLANK}} if precautions are not taken.",
    "cn": "如果不採取預防措施，可能會發生事故。"
  },
  {
    "word": "occurrence",
    "pos": "n.",
    "cn_def": "事件",
    "en_def": "something that happens",
    "sentence": "The sudden {{BLANK}} left everyone in shock.",
    "cn": "突然的事件讓每個人都震驚。"
  },
  {
    "word": "percent",
    "pos": "n.",
    "cn_def": "百分比",
    "en_def": "one part in every hundred",
    "sentence": "Only ten {{BLANK}} of the applicants passed the exam.",
    "cn": "只有十分之一的申請人通過了考試。"
  },
  {
    "word": "percentage",
    "pos": "n.",
    "cn_def": "百分比",
    "en_def": "an amount shown as part of 100",
    "sentence": "A large {{BLANK}} of the budget is allocated for research.",
    "cn": "大部分預算分配給了研究。"
  },
  {
    "word": "period",
    "pos": "n.",
    "cn_def": "時期",
    "en_def": "a length of time",
    "sentence": "The Renaissance was a significant {{BLANK}} in European history.",
    "cn": "文藝復興是歐洲歷史上的一個重要時期。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策",
    "en_def": "an official plan or set of rules",
    "sentence": "The company's new {{BLANK}} allows remote work.",
    "cn": "公司的新政策允許遠端工作。"
  },
  {
    "word": "principle",
    "pos": "n.",
    "cn_def": "原則",
    "en_def": "a basic rule or belief",
    "sentence": "He lives by the {{BLANK}} of honesty.",
    "cn": "他按照誠實的原則生活。"
  },
  {
    "word": "procedure",
    "pos": "n.",
    "cn_def": "程式",
    "en_def": "the correct steps for doing something",
    "sentence": "The medical {{BLANK}} is complex.",
    "cn": "醫療程式很複雜。"
  }
];

const MCQS = [
  {
    "q": "She is ______ various charitable activities.",
    "options": [
      "major in",
      "benefit",
      "respond to",
      "be involved in"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "They plan to ______ a new edition of the book.",
    "options": [
      "issue",
      "establish",
      "identify",
      "specify"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The main ______ discussed was the budget.",
    "options": [
      "contract",
      "issue",
      "interpretation",
      "source"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Manual ______ is highly valued in some professions.",
    "options": [
      "percent",
      "significance",
      "labor",
      "finance"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The ______ worked long hours under the sun.",
    "options": [
      "proficiency",
      "policy",
      "percentage",
      "laborer"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "It's not ______ to park here. It's prohibited.",
    "options": [
      "significant",
      "legal",
      "imported",
      "major"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Selling counterfeit goods is ______. People  with violation of the regulation will be sentenced to 3 years of jail",
    "options": [
      "counterfeit",
      "economic",
      "illegal",
      "beneficial"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The new ______ aims to protect the environment by illegalizing proaching endangered species.",
    "options": [
      "legislation",
      "indication",
      "context",
      "factor"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The ______ proposed a bill to support local businesses.",
    "options": [
      "indication",
      "assessment",
      "legislator",
      "evidence"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The museum underwent a ______ renovation.",
    "options": [
      "financial",
      "legal",
      "available",
      "major"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "She decided to ______ biology.",
    "options": [
      "major in",
      "It is estimated that",
      "be derived from",
      "respond to"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "They adopted a new ______ to solve the problem.",
    "options": [
      "definition",
      "method",
      "section",
      "data"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Accidents can ______ if precautions are not taken.",
    "options": [
      "occur",
      "indicate",
      "distribute",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The sudden ______ left everyone in shock.",
    "options": [
      "sector",
      "occurrence",
      "legislation",
      "contract"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Only ten ______ of the applicants passed the exam.",
    "options": [
      "factor",
      "formula",
      "percent",
      "consistency"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "A large ______ of the budget is allocated for research.",
    "options": [
      "procedure",
      "method",
      "theory",
      "percentage"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The Renaissance was a significant ______ in European history.",
    "options": [
      "formula",
      "process",
      "period",
      "area"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The company's new ______ allows remote work.",
    "options": [
      "research",
      "policy",
      "percent",
      "formula"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "He lives by the ______ of honesty.",
    "options": [
      "principle",
      "period",
      "section",
      "percentage"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The medical ______ is complex.",
    "options": [
      "establishment",
      "creation",
      "requirement",
      "procedure"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "be involved in": {
    "pos": "phr",
    "en_def": "to take part in an activity",
    "cn_def": "參與",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to take part in an activity",
        "cn_def": "參與"
      }
    ]
  },
  "involved in": {
    "pos": "phr",
    "en_def": "to take part in an activity",
    "cn_def": "參與",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to take part in an activity",
        "cn_def": "參與"
      }
    ]
  },
  "issue": {
    "pos": "v.",
    "en_def": "to officially give out or print something",
    "cn_def": "發行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially give out or print something",
        "cn_def": "發行"
      },
      {
        "pos": "n.",
        "en_def": "an important problem or topic",
        "cn_def": "問題"
      }
    ]
  },
  "labor": {
    "pos": "n.",
    "en_def": "hard physical work",
    "cn_def": "勞動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "hard physical work",
        "cn_def": "勞動"
      }
    ]
  },
  "laborer": {
    "pos": "n.",
    "en_def": "a worker who does hard physical work",
    "cn_def": "勞工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a worker who does hard physical work",
        "cn_def": "勞工"
      }
    ]
  },
  "legal": {
    "pos": "adj.",
    "en_def": "allowed by the law",
    "cn_def": "合法的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "allowed by the law",
        "cn_def": "合法的"
      }
    ]
  },
  "illegal": {
    "pos": "adj.",
    "en_def": "not allowed by the law",
    "cn_def": "非法的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not allowed by the law",
        "cn_def": "非法的"
      }
    ]
  },
  "legislation": {
    "pos": "n.",
    "en_def": "laws made by a government",
    "cn_def": "立法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "laws made by a government",
        "cn_def": "立法"
      }
    ]
  },
  "legislator": {
    "pos": "n.",
    "en_def": "a person who makes laws",
    "cn_def": "立法者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who makes laws",
        "cn_def": "立法者"
      }
    ]
  },
  "major": {
    "pos": "adj.",
    "en_def": "very important or big",
    "cn_def": "主要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very important or big",
        "cn_def": "主要的"
      }
    ]
  },
  "major in": {
    "pos": "phr",
    "en_def": "to study a subject as your main subject at university",
    "cn_def": "主修",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to study a subject as your main subject at university",
        "cn_def": "主修"
      }
    ]
  },
  "method": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of doing something",
        "cn_def": "方法"
      }
    ]
  },
  "occur": {
    "pos": "v.",
    "en_def": "to happen",
    "cn_def": "發生",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to happen",
        "cn_def": "發生"
      }
    ]
  },
  "occurrence": {
    "pos": "n.",
    "en_def": "something that happens",
    "cn_def": "事件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that happens",
        "cn_def": "事件"
      }
    ]
  },
  "percent": {
    "pos": "n.",
    "en_def": "one part in every hundred",
    "cn_def": "百分比",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one part in every hundred",
        "cn_def": "百分比"
      }
    ]
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as part of 100",
    "cn_def": "百分比",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount shown as part of 100",
        "cn_def": "百分比"
      }
    ]
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time",
    "cn_def": "時期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a length of time",
        "cn_def": "時期"
      }
    ]
  },
  "policy": {
    "pos": "n.",
    "en_def": "an official plan or set of rules",
    "cn_def": "政策",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official plan or set of rules",
        "cn_def": "政策"
      }
    ]
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic rule or belief",
    "cn_def": "原則",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a basic rule or belief",
        "cn_def": "原則"
      }
    ]
  },
  "procedure": {
    "pos": "n.",
    "en_def": "the correct steps for doing something",
    "cn_def": "程式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the correct steps for doing something",
        "cn_def": "程式"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
