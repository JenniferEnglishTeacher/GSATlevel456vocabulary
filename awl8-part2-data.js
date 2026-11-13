// Part 2 Quiz Data: biased – currency
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 8 Part 2 - biased – currency",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "biased",
    "pos": "adj.",
    "cn_def": "有偏見的",
    "en_def": "unfairly favoring one side",
    "sentence": "The review was clearly {{BLANK}}, lacking objectivity.",
    "cn": "這個評論顯然是有偏見的，缺乏客觀性。"
  },
  {
    "word": "chart",
    "pos": "n.",
    "cn_def": "圖表",
    "en_def": "a picture that shows information",
    "sentence": "The {{BLANK}} displayed the sales figures for the past year.",
    "cn": "圖表顯示了過去一年的銷售數字。"
  },
  {
    "word": "chart",
    "pos": "v.",
    "cn_def": "繪製圖表",
    "en_def": "to record something step by step",
    "sentence": "They needed to {{BLANK}} the progress of the project carefully.",
    "cn": "他們需要仔細繪製項目進展的圖表。"
  },
  {
    "word": "uncharted territory",
    "pos": "phr.",
    "cn_def": "未知領域",
    "en_def": "a new area nobody knows about",
    "sentence": "Venturing into {{BLANK}}, the team faced many unforeseen challenges.",
    "cn": "冒險進入未知領域，團隊面臨許多未預見的挑戰。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清楚的",
    "en_def": "easy to understand",
    "sentence": "The instructions should be {{BLANK}} and easy to follow.",
    "cn": "指示應該清楚且易於遵循。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清",
    "en_def": "to make something clearer",
    "sentence": "Can you {{BLANK}} the objectives of the assignment?",
    "cn": "你能澄清一下任務的目標嗎？"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰度",
    "en_def": "the quality of being clear",
    "sentence": "He explained the concept with great {{BLANK}}, making it easy to understand.",
    "cn": "他非常清楚地解釋了這個概念，使其容易理解。"
  },
  {
    "word": "conform to",
    "pos": "phr.",
    "cn_def": "符合",
    "en_def": "to follow a rule or standard",
    "sentence": "All products must {{BLANK}} the safety standards before they are sold.",
    "cn": "所有產品在出售前都必須符合安全標準。"
  },
  {
    "word": "conformity",
    "pos": "n.",
    "cn_def": "符合",
    "en_def": "behaving the same as other people",
    "sentence": "There's a culture of {{BLANK}} in the corporate world that often stifles creativity.",
    "cn": "企業界存在一種常常抑制創造力的符合文化。"
  },
  {
    "word": "commodity",
    "pos": "n.",
    "cn_def": "商品",
    "en_def": "a product that is bought and sold",
    "sentence": "The price of the {{BLANK}} fluctuated in the international market.",
    "cn": "商品在國際市場上的價格波動。"
  },
  {
    "word": "complement",
    "pos": "adj.",
    "cn_def": "互補的",
    "en_def": "going well together",
    "sentence": "The two technologies are a {{BLANK}} to each other, enhancing the system's efficiency.",
    "cn": "這兩種技術相互補充，提高了系統的效率。"
  },
  {
    "word": "complement",
    "pos": "v.",
    "cn_def": "補充",
    "en_def": "to go well with something",
    "sentence": "The wine will {{BLANK}} the flavors of the meal perfectly.",
    "cn": "酒將完美補充飯菜的味道。"
  },
  {
    "word": "contemporary",
    "pos": "adj.",
    "cn_def": "當代的",
    "en_def": "modern; of the present time",
    "sentence": "The museum featured {{BLANK}} artists from around the world.",
    "cn": "博物館展出了來自世界各地的當代藝術家。"
  },
  {
    "word": "contradict",
    "pos": "v.",
    "cn_def": "矛盾",
    "en_def": "to say the opposite of something",
    "sentence": "His statement seemed to {{BLANK}} the evidence presented in the case.",
    "cn": "他的陳述似乎與案件中呈現的證據矛盾。"
  },
  {
    "word": "contradictory",
    "pos": "adj.",
    "cn_def": "矛盾的",
    "en_def": "saying opposite things",
    "sentence": "The {{BLANK}} information made it difficult to arrive at a conclusion.",
    "cn": "矛盾的信息使得得出結論變得困難。"
  },
  {
    "word": "contradiction",
    "pos": "n.",
    "cn_def": "矛盾",
    "en_def": "a difference between two facts",
    "sentence": "The theory was full of {{BLANK}} and unclear assumptions.",
    "cn": "這個理論充滿了矛盾和不清楚的假設。"
  },
  {
    "word": "crucial",
    "pos": "adj.",
    "cn_def": "關鍵的",
    "en_def": "extremely important",
    "sentence": "Making accurate forecasts is {{BLANK}} for the success of the project.",
    "cn": "做出準確的預測對於項目的成功至關重要。"
  },
  {
    "word": "current",
    "pos": "adj.",
    "cn_def": "現在的",
    "en_def": "happening now",
    "sentence": "The {{BLANK}} situation requires immediate attention.",
    "cn": "當前的情況需要立即關注。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "電流",
    "en_def": "a flow of electricity",
    "sentence": "The device measures the {{BLANK}} flowing through the circuit.",
    "cn": "該設備測量通過電路的電流。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "水流/洋流",
    "en_def": "a flow of water in the sea or a river",
    "sentence": "The boat was carried away by the strong {{BLANK}}.",
    "cn": "船被強大的水流/洋流帶走了。"
  },
  {
    "word": "currency",
    "pos": "n.",
    "cn_def": "貨幣",
    "en_def": "the money used in a country",
    "sentence": "The exchange rate between the two {{BLANK}} fluctuates daily.",
    "cn": "這兩種貨幣的匯率每天都在波動。"
  }
];

const MCQS = [
  {
    "q": "The review was clearly ______, lacking objectivity.",
    "options": [
      "biased",
      "intensive",
      "accompanied",
      "tense"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ______ displayed the sales figures for the past year.",
    "options": [
      "currency",
      "inspector",
      "schedule",
      "chart"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "They needed to ______ the progress of the project carefully.",
    "options": [
      "offset",
      "chart",
      "accumulate",
      "appreciate"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Venturing into ______, the team faced many unforeseen challenges.",
    "options": [
      "keep someone company",
      "practice",
      "uncharted territory",
      "current"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The instructions should be ______ and easy to follow.",
    "options": [
      "inevitable",
      "clear",
      "contradictory",
      "contemporary"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Can you ______ the objectives of the assignment?",
    "options": [
      "intensify",
      "restore",
      "clarify",
      "chart"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "He explained the concept with great ______, making it easy to understand.",
    "options": [
      "clarity",
      "exhibition",
      "revision",
      "displacement"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "All products must ______ the safety standards before they are sold.",
    "options": [
      "nuclear power plant",
      "practice",
      "at random",
      "conform to"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "There's a culture of ______ in the corporate world that often stifles creativity.",
    "options": [
      "commodity",
      "practitioner",
      "conformity",
      "guide"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The price of the ______ fluctuated in the international market.",
    "options": [
      "commodity",
      "contradiction",
      "appreciation",
      "guidance"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The two technologies are a ______ to each other, enhancing the system's efficiency.",
    "options": [
      "highlighted",
      "intensive",
      "virtual",
      "complement"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The wine will ______ the flavors of the meal perfectly.",
    "options": [
      "offset",
      "complement",
      "intensify",
      "chart"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The museum featured ______ artists from around the world.",
    "options": [
      "complement",
      "uniform",
      "terminated",
      "contemporary"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "His statement seemed to ______ the evidence presented in the case.",
    "options": [
      "dominate",
      "schedule",
      "contradict",
      "accompany"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ______ information made it difficult to arrive at a conclusion.",
    "options": [
      "displaced",
      "contradictory",
      "intense",
      "fluctuated"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The theory was full of ______ and unclear assumptions.",
    "options": [
      "contradiction",
      "guide",
      "reinforcement",
      "intensity"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Making accurate forecasts is ______ for the success of the project.",
    "options": [
      "implicit",
      "fluctuated",
      "contemporary",
      "crucial"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The ______ situation requires immediate attention.",
    "options": [
      "minimised",
      "terminated",
      "current",
      "abandoned"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The device measures the ______ flowing through the circuit.",
    "options": [
      "current",
      "company",
      "at random",
      "on schedule"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The boat was carried away by the strong ______.",
    "options": [
      "on exhibit",
      "current",
      "nuclear power plant",
      "uncharted territory"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The exchange rate between the two ______ fluctuates daily.",
    "options": [
      "detection",
      "event",
      "currency",
      "companion"
    ],
    "answer": 2,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "biased": {
    "pos": "adj.",
    "en_def": "unfairly favoring one side",
    "cn_def": "有偏見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unfairly favoring one side",
        "cn_def": "有偏見的"
      }
    ]
  },
  "chart": {
    "pos": "n.",
    "en_def": "a picture that shows information",
    "cn_def": "圖表",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a picture that shows information",
        "cn_def": "圖表"
      },
      {
        "pos": "v.",
        "en_def": "to record something step by step",
        "cn_def": "繪製圖表"
      }
    ]
  },
  "uncharted territory": {
    "pos": "phr.",
    "en_def": "a new area nobody knows about",
    "cn_def": "未知領域",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a new area nobody knows about",
        "cn_def": "未知領域"
      }
    ]
  },
  "clear": {
    "pos": "adj.",
    "en_def": "easy to understand",
    "cn_def": "清楚的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easy to understand",
        "cn_def": "清楚的"
      }
    ]
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer",
    "cn_def": "澄清",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something clearer",
        "cn_def": "澄清"
      }
    ]
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear",
    "cn_def": "清晰度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being clear",
        "cn_def": "清晰度"
      }
    ]
  },
  "conform to": {
    "pos": "phr.",
    "en_def": "to follow a rule or standard",
    "cn_def": "符合",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to follow a rule or standard",
        "cn_def": "符合"
      }
    ]
  },
  "conformity": {
    "pos": "n.",
    "en_def": "behaving the same as other people",
    "cn_def": "符合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "behaving the same as other people",
        "cn_def": "符合"
      }
    ]
  },
  "commodity": {
    "pos": "n.",
    "en_def": "a product that is bought and sold",
    "cn_def": "商品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a product that is bought and sold",
        "cn_def": "商品"
      }
    ]
  },
  "complement": {
    "pos": "adj.",
    "en_def": "going well together",
    "cn_def": "互補的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "going well together",
        "cn_def": "互補的"
      },
      {
        "pos": "v.",
        "en_def": "to go well with something",
        "cn_def": "補充"
      }
    ]
  },
  "contemporary": {
    "pos": "adj.",
    "en_def": "modern; of the present time",
    "cn_def": "當代的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "modern; of the present time",
        "cn_def": "當代的"
      }
    ]
  },
  "contradict": {
    "pos": "v.",
    "en_def": "to say the opposite of something",
    "cn_def": "矛盾",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say the opposite of something",
        "cn_def": "矛盾"
      }
    ]
  },
  "contradictory": {
    "pos": "adj.",
    "en_def": "saying opposite things",
    "cn_def": "矛盾的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "saying opposite things",
        "cn_def": "矛盾的"
      }
    ]
  },
  "contradiction": {
    "pos": "n.",
    "en_def": "a difference between two facts",
    "cn_def": "矛盾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a difference between two facts",
        "cn_def": "矛盾"
      }
    ]
  },
  "crucial": {
    "pos": "adj.",
    "en_def": "extremely important",
    "cn_def": "關鍵的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely important",
        "cn_def": "關鍵的"
      }
    ]
  },
  "current": {
    "pos": "adj.",
    "en_def": "happening now",
    "cn_def": "現在的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening now",
        "cn_def": "現在的"
      },
      {
        "pos": "n.",
        "en_def": "a flow of electricity",
        "cn_def": "電流"
      },
      {
        "pos": "n.",
        "en_def": "a flow of water in the sea or a river",
        "cn_def": "水流/洋流"
      }
    ]
  },
  "currency": {
    "pos": "n.",
    "en_def": "the money used in a country",
    "cn_def": "貨幣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the money used in a country",
        "cn_def": "貨幣"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
