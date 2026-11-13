// Part 4 Quiz Data: exclusion – initiate
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 4 - exclusion – initiate",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "exclusion",
    "pos": "n.",
    "cn_def": "排除",
    "en_def": "leaving someone or something out",
    "sentence": "The {{BLANK}} of certain groups from the survey skewed the results.",
    "cn": "從調查中排除某些群體使結果產生偏見。"
  },
  {
    "word": "include",
    "pos": "v.",
    "cn_def": "包括",
    "en_def": "to have something as a part",
    "sentence": "The package {{BLANK}} accommodation and meals.",
    "cn": "套餐包括住宿和膳食。"
  },
  {
    "word": "inclusive",
    "pos": "adj.",
    "cn_def": "包含的",
    "en_def": "including everyone or everything",
    "sentence": "The price is {{BLANK}} of all taxes and fees.",
    "cn": "價格包含所有稅費。"
  },
  {
    "word": "including",
    "pos": "prep.",
    "cn_def": "包括",
    "en_def": "having something as a part",
    "sentence": "All students, {{BLANK}} those who are international, are eligible.",
    "cn": "所有學生，包括國際學生，都有資格。"
  },
  {
    "word": "included",
    "pos": "adj.",
    "cn_def": "被包括在內的",
    "en_def": "part of a group",
    "sentence": "All {{BLANK}} items are listed in the appendix.",
    "cn": "所有包含的項目都列在附錄中。"
  },
  {
    "word": "inclusive of",
    "pos": "phr.",
    "cn_def": "包含",
    "en_def": "containing; counting as part",
    "sentence": "The tour price is {{BLANK}} all meals and transportation.",
    "cn": "旅遊價格包含所有餐飲和交通。"
  },
  {
    "word": "framework",
    "pos": "n.",
    "cn_def": "框架",
    "en_def": "a basic structure or plan",
    "sentence": "The new policy provides a {{BLANK}} for further reforms.",
    "cn": "新政策為進一步的改革提供了框架。"
  },
  {
    "word": "fund",
    "pos": "v.",
    "cn_def": "資助",
    "en_def": "to give money for something",
    "sentence": "The government will {{BLANK}} the research project.",
    "cn": "政府將資助這個研究項目。"
  },
  {
    "word": "fund",
    "pos": "n.",
    "cn_def": "基金",
    "en_def": "an amount of money saved for a purpose",
    "sentence": "The {{BLANK}} for the school trip is running low.",
    "cn": "學校旅行的基金正逐漸減少。"
  },
  {
    "word": "fundamental",
    "pos": "adj.",
    "cn_def": "基本的",
    "en_def": "basic and very important",
    "sentence": "Understanding the {{BLANK}} concepts is crucial for advanced study.",
    "cn": "了解基本概念對於高級學習至關重要。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "插畫",
    "en_def": "to draw pictures for a book",
    "sentence": "The book is {{BLANK}} by a famous artist.",
    "cn": "這本書是由一位著名藝術家插畫的。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "解釋",
    "en_def": "to explain by using examples",
    "sentence": "Use examples to {{BLANK}} your point.",
    "cn": "使用例子來解釋你的觀點。"
  },
  {
    "word": "illustrated",
    "pos": "adj.",
    "cn_def": "插圖的",
    "en_def": "having pictures",
    "sentence": "I prefer {{BLANK}} children's books for their visual appeal.",
    "cn": "我更喜歡有插圖的兒童書，因為它們具有視覺吸引力。"
  },
  {
    "word": "immigrate",
    "pos": "v.",
    "cn_def": "移民",
    "en_def": "to come to live in another country",
    "sentence": "Many people {{BLANK}} to the country for better job opportunities.",
    "cn": "許多人為了更好的工作機會移民到這個國家。"
  },
  {
    "word": "immigrant",
    "pos": "n.",
    "cn_def": "移民",
    "en_def": "a person who comes to live in another country",
    "sentence": "The city is home to a large population of {{BLANK}}.",
    "cn": "這座城市擁有大量的移民。"
  },
  {
    "word": "immigration",
    "pos": "n.",
    "cn_def": "移民",
    "en_def": "coming to live in another country",
    "sentence": "The {{BLANK}} office is extremely busy this time of year.",
    "cn": "移民辦公室在這個時候非常繁忙。"
  },
  {
    "word": "imply",
    "pos": "v.",
    "cn_def": "暗示",
    "en_def": "to suggest something without saying it directly",
    "sentence": "Her silence seemed to {{BLANK}} that she disagreed.",
    "cn": "她的沉默似乎暗示她不同意。"
  },
  {
    "word": "implication",
    "pos": "n.",
    "cn_def": "暗示",
    "en_def": "a meaning that is suggested, not said",
    "sentence": "The {{BLANK}} of the statement was clear to everyone in the room.",
    "cn": "該聲明的含義對房間裡的每個人都很明確。"
  },
  {
    "word": "initial",
    "pos": "adj.",
    "cn_def": "初始的",
    "en_def": "first; at the beginning",
    "sentence": "The {{BLANK}} findings are promising, but more research is needed.",
    "cn": "初始的研究結果很有希望，但需要進一步的研究。"
  },
  {
    "word": "initiate",
    "pos": "v.",
    "cn_def": "開始",
    "en_def": "to start something",
    "sentence": "They plan to {{BLANK}} a new marketing strategy next quarter.",
    "cn": "他們計劃下一季度啟動新的營銷策略。"
  }
];

const MCQS = [
  {
    "q": "The ______ of certain groups from the survey skewed the results.",
    "options": [
      "exclusion",
      "corporation",
      "criteria",
      "justification"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The package ______ accommodation and meals.",
    "options": [
      "expire",
      "immigrate",
      "include",
      "initiate"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The price is ______ of all taxes and fees.",
    "options": [
      "sexual",
      "inclusive",
      "technological",
      "justified"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "All students, ______ those who are international, are eligible.",
    "options": [
      "justify",
      "ensure that",
      "in sequence",
      "including"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All ______ items are listed in the appendix.",
    "options": [
      "justified",
      "constant",
      "included",
      "negative"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The tour price is ______ all meals and transportation.",
    "options": [
      "inclusive of",
      "be located in",
      "minor in",
      "interaction with"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new policy provides a ______ for further reforms.",
    "options": [
      "coordination",
      "technology",
      "physics",
      "framework"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The government will ______ the research project.",
    "options": [
      "illustrate",
      "fund",
      "expire",
      "task"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ______ for the school trip is running low.",
    "options": [
      "fund",
      "registration",
      "implication",
      "consent"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Understanding the ______ concepts is crucial for advanced study.",
    "options": [
      "corporate",
      "fundamental",
      "considerate",
      "justified"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The book is ______ by a famous artist.",
    "options": [
      "initiate",
      "fund",
      "illustrate",
      "justify"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Use examples to ______ your point.",
    "options": [
      "remove from",
      "make a comment on",
      "reliance on",
      "illustrate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "I prefer ______ children's books for their visual appeal.",
    "options": [
      "sexual",
      "valid",
      "illustrated",
      "proportional"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Many people ______ to the country for better job opportunities.",
    "options": [
      "assure",
      "justify",
      "document",
      "immigrate"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The city is home to a large population of ______.",
    "options": [
      "outcome",
      "immigrant",
      "validity",
      "deduction"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The ______ office is extremely busy this time of year.",
    "options": [
      "immigration",
      "physics",
      "component",
      "volume"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Her silence seemed to ______ that she disagreed.",
    "options": [
      "coordinate",
      "imply",
      "compensate",
      "include"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The ______ of the statement was clear to everyone in the room.",
    "options": [
      "consideration",
      "volume",
      "technique",
      "implication"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The ______ findings are promising, but more research is needed.",
    "options": [
      "initial",
      "considerable",
      "consent",
      "sufficient"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "They plan to ______ a new marketing strategy next quarter.",
    "options": [
      "illustrate",
      "imply",
      "initiate",
      "constrain"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "exclusion": {
    "pos": "n.",
    "en_def": "leaving someone or something out",
    "cn_def": "排除",
    "combined": [
      {
        "pos": "n.",
        "en_def": "leaving someone or something out",
        "cn_def": "排除"
      }
    ]
  },
  "include": {
    "pos": "v.",
    "en_def": "to have something as a part",
    "cn_def": "包括",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have something as a part",
        "cn_def": "包括"
      }
    ]
  },
  "inclusive": {
    "pos": "adj.",
    "en_def": "including everyone or everything",
    "cn_def": "包含的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "including everyone or everything",
        "cn_def": "包含的"
      }
    ]
  },
  "including": {
    "pos": "prep.",
    "en_def": "having something as a part",
    "cn_def": "包括",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "having something as a part",
        "cn_def": "包括"
      }
    ]
  },
  "included": {
    "pos": "adj.",
    "en_def": "part of a group",
    "cn_def": "被包括在內的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "part of a group",
        "cn_def": "被包括在內的"
      }
    ]
  },
  "inclusive of": {
    "pos": "phr.",
    "en_def": "containing; counting as part",
    "cn_def": "包含",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "containing; counting as part",
        "cn_def": "包含"
      }
    ]
  },
  "framework": {
    "pos": "n.",
    "en_def": "a basic structure or plan",
    "cn_def": "框架",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a basic structure or plan",
        "cn_def": "框架"
      }
    ]
  },
  "fund": {
    "pos": "v.",
    "en_def": "to give money for something",
    "cn_def": "資助",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give money for something",
        "cn_def": "資助"
      },
      {
        "pos": "n.",
        "en_def": "an amount of money saved for a purpose",
        "cn_def": "基金"
      }
    ]
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and very important",
    "cn_def": "基本的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "basic and very important",
        "cn_def": "基本的"
      }
    ]
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to draw pictures for a book",
    "cn_def": "插畫",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to draw pictures for a book",
        "cn_def": "插畫"
      },
      {
        "pos": "v.",
        "en_def": "to explain by using examples",
        "cn_def": "解釋"
      }
    ]
  },
  "illustrate = explain": {
    "pos": "v.",
    "en_def": "to explain by using examples",
    "cn_def": "解釋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to explain by using examples",
        "cn_def": "解釋"
      }
    ]
  },
  "illustrated": {
    "pos": "adj.",
    "en_def": "having pictures",
    "cn_def": "插圖的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having pictures",
        "cn_def": "插圖的"
      }
    ]
  },
  "immigrate": {
    "pos": "v.",
    "en_def": "to come to live in another country",
    "cn_def": "移民",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come to live in another country",
        "cn_def": "移民"
      }
    ]
  },
  "immigrant": {
    "pos": "n.",
    "en_def": "a person who comes to live in another country",
    "cn_def": "移民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who comes to live in another country",
        "cn_def": "移民"
      }
    ]
  },
  "immigration": {
    "pos": "n.",
    "en_def": "coming to live in another country",
    "cn_def": "移民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "coming to live in another country",
        "cn_def": "移民"
      }
    ]
  },
  "imply": {
    "pos": "v.",
    "en_def": "to suggest something without saying it directly",
    "cn_def": "暗示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest something without saying it directly",
        "cn_def": "暗示"
      }
    ]
  },
  "implication": {
    "pos": "n.",
    "en_def": "a meaning that is suggested, not said",
    "cn_def": "暗示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meaning that is suggested, not said",
        "cn_def": "暗示"
      }
    ]
  },
  "initial": {
    "pos": "adj.",
    "en_def": "first; at the beginning",
    "cn_def": "初始的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "first; at the beginning",
        "cn_def": "初始的"
      }
    ]
  },
  "initiate": {
    "pos": "v.",
    "en_def": "to start something",
    "cn_def": "開始",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to start something",
        "cn_def": "開始"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
