// Part 7 Quiz Data: quantity – scenery
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 9 Part 7 - quantity – scenery",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "quantity",
    "pos": "n.",
    "cn_def": "數量",
    "en_def": "an amount or number",
    "sentence": "The {{BLANK}} of goods available will meet the demand.",
    "cn": "可用商品的數量將滿足需求。"
  },
  {
    "word": "quantitative research",
    "pos": "n.",
    "cn_def": "定量研究",
    "en_def": "research using numbers and data",
    "sentence": "{{BLANK}} relies on statistical analysis to draw conclusions.",
    "cn": "定量研究依賴統計分析來得出結論。"
  },
  {
    "word": "refine",
    "pos": "v.",
    "cn_def": "精煉",
    "en_def": "to make something purer or better",
    "sentence": "They plan to {{BLANK}} the process to improve efficiency.",
    "cn": "他們計劃精煉該過程以提高效率。"
  },
  {
    "word": "refined",
    "pos": "adj.",
    "cn_def": "精煉的",
    "en_def": "made purer or better",
    "sentence": "The {{BLANK}} product is free from impurities.",
    "cn": "精煉的產品不含雜質。"
  },
  {
    "word": "refinement",
    "pos": "n.",
    "cn_def": "精煉",
    "en_def": "a small change that improves something",
    "sentence": "The {{BLANK}} of the system led to significant performance improvements.",
    "cn": "系統的精煉導致性能得到了顯著改善。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and feel calm",
    "sentence": "It's important to {{BLANK}} and reduce stress for overall well-being.",
    "cn": "為了整體健康，放鬆和減壓很重要。"
  },
  {
    "word": "relaxing",
    "pos": "adj.",
    "cn_def": "放鬆的",
    "en_def": "making you feel calm",
    "sentence": "A {{BLANK}} vacation by the beach helped her recharge.",
    "cn": "在海灘上度過一個放鬆的假期幫助她重新充電。"
  },
  {
    "word": "relaxed",
    "pos": "adj.",
    "cn_def": "放鬆的",
    "en_def": "feeling calm",
    "sentence": "After a long week of work, he felt {{BLANK}} on the weekend getaway.",
    "cn": "經過一周的辛勤工作，他在周末度假時感到很放鬆。"
  },
  {
    "word": "relaxation",
    "pos": "n.",
    "cn_def": "放鬆",
    "en_def": "rest and enjoyment",
    "sentence": "{{BLANK}} techniques such as deep breathing and meditation can help manage stress.",
    "cn": "如深呼吸和冥想等放鬆技術可以幫助緩解壓力。"
  },
  {
    "word": "restrain",
    "pos": "v.",
    "cn_def": "抑制",
    "en_def": "to stop someone from doing something",
    "sentence": "She had to {{BLANK}} her anger during the heated argument.",
    "cn": "在激烈的爭論中，她不得不抑制她的憤怒。"
  },
  {
    "word": "restraint",
    "pos": "n.",
    "cn_def": "克制",
    "en_def": "control over your feelings or actions",
    "sentence": "Showing {{BLANK}} in difficult situations is a sign of maturity.",
    "cn": "在困難的情況下表現出克制是成熟的表現。"
  },
  {
    "word": "revolve",
    "pos": "v.",
    "cn_def": "旋轉",
    "en_def": "to turn around a center point",
    "sentence": "The earth {{BLANK}} around the sun.",
    "cn": "地球繞太陽旋轉。"
  },
  {
    "word": "revolving",
    "pos": "adj.",
    "cn_def": "旋轉的",
    "en_def": "turning around a center point",
    "sentence": "The {{BLANK}} door at the entrance was a modern touch to the building.",
    "cn": "入口處的旋轉門為建築增添了現代感。"
  },
  {
    "word": "revolution",
    "pos": "n.",
    "cn_def": "革命",
    "en_def": "a big change in government or society",
    "sentence": "The industrial {{BLANK}} dramatically changed the way people lived and worked.",
    "cn": "工業革命戲劇性地改變了人們的生活和工作方式。"
  },
  {
    "word": "rigid",
    "pos": "adj.",
    "cn_def": "僵硬的",
    "en_def": "not able to bend or change",
    "sentence": "The {{BLANK}} structure of the organization left little room for creativity.",
    "cn": "組織的僵硬結構留下了很小的創造空間。"
  },
  {
    "word": "rigidity",
    "pos": "n.",
    "cn_def": "僵硬",
    "en_def": "the quality of not being able to change",
    "sentence": "The {{BLANK}} of the system made it difficult to implement changes.",
    "cn": "系統的僵硬使得很難實施變更。"
  },
  {
    "word": "route",
    "pos": "n.",
    "cn_def": "路線",
    "en_def": "the way you go from one place to another",
    "sentence": "They decided to take a scenic {{BLANK}} through the countryside.",
    "cn": "他們決定選擇一條通過鄉村的風景路線。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "現場",
    "en_def": "the place where something happens",
    "sentence": "The {{BLANK}} of the accident was cordoned off for investigation.",
    "cn": "事故現場被封鎖以進行調查。"
  },
  {
    "word": "scenario",
    "pos": "n.",
    "cn_def": "情景",
    "en_def": "a possible situation in the future",
    "sentence": "The training exercise simulated a {{BLANK}} of a large-scale emergency.",
    "cn": "訓練練習模擬了大規模緊急情況的情景。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景",
    "en_def": "the natural beauty of a place",
    "sentence": "The {{BLANK}} along the coast was breathtaking.",
    "cn": "沿海的風景令人屏息。"
  }
];

const MCQS = [
  {
    "q": "The ______ of goods available will meet the demand.",
    "options": [
      "quantity",
      "coherence",
      "format",
      "controversy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "______ relies on statistical analysis to draw conclusions.",
    "options": [
      "accommodate",
      "be dedicated to",
      "quantitative research",
      "dedicate to"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "They plan to ______ the process to improve efficiency.",
    "options": [
      "restrain",
      "revolve",
      "behave",
      "refine"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The ______ product is free from impurities.",
    "options": [
      "intermediate",
      "refined",
      "erosive",
      "converse"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The ______ of the system led to significant performance improvements.",
    "options": [
      "device",
      "portion",
      "vision",
      "refinement"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "It's important to ______ and reduce stress for overall well-being.",
    "options": [
      "suspend",
      "relax",
      "erode",
      "assure"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "A ______ vacation by the beach helped her recharge.",
    "options": [
      "coherent",
      "military",
      "relaxing",
      "contemporary"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "After a long week of work, he felt ______ on the weekend getaway.",
    "options": [
      "relaxed",
      "integrated",
      "confined",
      "inherent"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "______ techniques such as deep breathing and meditation can help manage stress.",
    "options": [
      "suspension",
      "volunteer",
      "team",
      "relaxation"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "She had to ______ her anger during the heated argument.",
    "options": [
      "restrain",
      "suspend",
      "relax",
      "vision"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Showing ______ in difficult situations is a sign of maturity.",
    "options": [
      "proportion",
      "restraint",
      "analogy",
      "media"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The earth ______ around the sun.",
    "options": [
      "refine",
      "behave",
      "revolve",
      "overlap"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The ______ door at the entrance was a modern touch to the building.",
    "options": [
      "suspended",
      "integrated",
      "attained",
      "revolving"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The industrial ______ dramatically changed the way people lived and worked.",
    "options": [
      "restraint",
      "protocol",
      "revolution",
      "suspense"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ______ structure of the organization left little room for creativity.",
    "options": [
      "rigid",
      "passive",
      "informal",
      "intermediate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The ______ of the system made it difficult to implement changes.",
    "options": [
      "commencement",
      "rigidity",
      "restraint",
      "mediation"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "They decided to take a scenic ______ through the countryside.",
    "options": [
      "route",
      "anticipation",
      "manual",
      "refinement"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The ______ of the accident was cordoned off for investigation.",
    "options": [
      "quality",
      "violation",
      "sphere",
      "scene"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The training exercise simulated a ______ of a large-scale emergency.",
    "options": [
      "relaxation",
      "anticipation",
      "scenario",
      "insight"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The ______ along the coast was breathtaking.",
    "options": [
      "inheritance",
      "scenery",
      "erosion",
      "medium"
    ],
    "answer": 1,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "quantity": {
    "pos": "n.",
    "en_def": "an amount or number",
    "cn_def": "數量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount or number",
        "cn_def": "數量"
      }
    ]
  },
  "quantitative research": {
    "pos": "n.",
    "en_def": "research using numbers and data",
    "cn_def": "定量研究",
    "combined": [
      {
        "pos": "n.",
        "en_def": "research using numbers and data",
        "cn_def": "定量研究"
      }
    ]
  },
  "refine": {
    "pos": "v.",
    "en_def": "to make something purer or better",
    "cn_def": "精煉",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something purer or better",
        "cn_def": "精煉"
      }
    ]
  },
  "refined": {
    "pos": "adj.",
    "en_def": "made purer or better",
    "cn_def": "精煉的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made purer or better",
        "cn_def": "精煉的"
      }
    ]
  },
  "refinement": {
    "pos": "n.",
    "en_def": "a small change that improves something",
    "cn_def": "精煉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small change that improves something",
        "cn_def": "精煉"
      }
    ]
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and feel calm",
    "cn_def": "放鬆",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to rest and feel calm",
        "cn_def": "放鬆"
      }
    ]
  },
  "relaxing": {
    "pos": "adj.",
    "en_def": "making you feel calm",
    "cn_def": "放鬆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you feel calm",
        "cn_def": "放鬆的"
      }
    ]
  },
  "relaxed": {
    "pos": "adj.",
    "en_def": "feeling calm",
    "cn_def": "放鬆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling calm",
        "cn_def": "放鬆的"
      }
    ]
  },
  "relaxation": {
    "pos": "n.",
    "en_def": "rest and enjoyment",
    "cn_def": "放鬆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "rest and enjoyment",
        "cn_def": "放鬆"
      }
    ]
  },
  "restrain": {
    "pos": "v.",
    "en_def": "to stop someone from doing something",
    "cn_def": "抑制",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop someone from doing something",
        "cn_def": "抑制"
      }
    ]
  },
  "restraint": {
    "pos": "n.",
    "en_def": "control over your feelings or actions",
    "cn_def": "克制",
    "combined": [
      {
        "pos": "n.",
        "en_def": "control over your feelings or actions",
        "cn_def": "克制"
      }
    ]
  },
  "revolve": {
    "pos": "v.",
    "en_def": "to turn around a center point",
    "cn_def": "旋轉",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to turn around a center point",
        "cn_def": "旋轉"
      }
    ]
  },
  "revolving": {
    "pos": "adj.",
    "en_def": "turning around a center point",
    "cn_def": "旋轉的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "turning around a center point",
        "cn_def": "旋轉的"
      }
    ]
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a big change in government or society",
    "cn_def": "革命",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big change in government or society",
        "cn_def": "革命"
      }
    ]
  },
  "rigid": {
    "pos": "adj.",
    "en_def": "not able to bend or change",
    "cn_def": "僵硬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to bend or change",
        "cn_def": "僵硬的"
      }
    ]
  },
  "rigidity": {
    "pos": "n.",
    "en_def": "the quality of not being able to change",
    "cn_def": "僵硬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of not being able to change",
        "cn_def": "僵硬"
      }
    ]
  },
  "route": {
    "pos": "n.",
    "en_def": "the way you go from one place to another",
    "cn_def": "路線",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way you go from one place to another",
        "cn_def": "路線"
      }
    ]
  },
  "scene": {
    "pos": "n.",
    "en_def": "the place where something happens",
    "cn_def": "現場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place where something happens",
        "cn_def": "現場"
      }
    ]
  },
  "scenario": {
    "pos": "n.",
    "en_def": "a possible situation in the future",
    "cn_def": "情景",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a possible situation in the future",
        "cn_def": "情景"
      }
    ]
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural beauty of a place",
    "cn_def": "風景",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the natural beauty of a place",
        "cn_def": "風景"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
