// Part 6 Quiz Data: mediation – qualitative research
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 9 Part 6 - mediation – qualitative research",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mediation",
    "pos": "n.",
    "cn_def": "調解",
    "en_def": "help given to two sides to agree",
    "sentence": "They agreed to settle the matter through {{BLANK}}.",
    "cn": "他們同意通過調解解決這個問題。"
  },
  {
    "word": "medium",
    "pos": "n.",
    "cn_def": "媒介",
    "en_def": "a way of sending information",
    "sentence": "Television is a powerful {{BLANK}} for advertising.",
    "cn": "電視是一個強大的廣告媒介。"
  },
  {
    "word": "media",
    "pos": "n.",
    "cn_def": "媒體",
    "en_def": "TV, radio, newspapers and the internet",
    "sentence": "The {{BLANK}} plays a crucial role in shaping public opinion.",
    "cn": "媒體在塑造公眾輿論中起著關鍵作用。"
  },
  {
    "word": "military",
    "pos": "n./adj.",
    "cn_def": "軍事/軍方的",
    "en_def": "about the army; the armed forces",
    "sentence": "He joined the {{BLANK}} after graduating from high school.",
    "cn": "他高中畢業後加入了軍隊。"
  },
  {
    "word": "militant",
    "pos": "adj.",
    "cn_def": "好戰的",
    "en_def": "ready to fight for a cause",
    "sentence": "The group has adopted a more {{BLANK}} stance in recent years.",
    "cn": "該組織近年來采取了更為好戰的立場。"
  },
  {
    "word": "minimal",
    "pos": "adj.",
    "cn_def": "最小的",
    "en_def": "very small in amount",
    "sentence": "The project was completed with {{BLANK}} resources.",
    "cn": "該項目以最少的資源完成。"
  },
  {
    "word": "mutual",
    "pos": "adj.",
    "cn_def": "相互的",
    "en_def": "shared by two or more people",
    "sentence": "It was a {{BLANK}} decision made by both parties involved.",
    "cn": "這是由涉及的雙方作出的相互決定。"
  },
  {
    "word": "norms",
    "pos": "n.",
    "cn_def": "常規",
    "en_def": "usual ways of behaving in a group",
    "sentence": "The {{BLANK}} of the community were strictly adhered to by all members.",
    "cn": "社區的常規被所有成員嚴格遵守。"
  },
  {
    "word": "overlap",
    "pos": "v.",
    "cn_def": "重疊",
    "en_def": "to cover part of the same area",
    "sentence": "The two projects {{BLANK}} in terms of objectives and resources.",
    "cn": "這兩個項目在目標和資源方面存在重疊。"
  },
  {
    "word": "overlapping",
    "pos": "adj.",
    "cn_def": "重疊的",
    "en_def": "partly covering the same area",
    "sentence": "Due to the {{BLANK}} deadlines, the team had to prioritize tasks.",
    "cn": "由於截止日期的重疊，團隊不得不對任務進行優先排序。"
  },
  {
    "word": "passive",
    "pos": "adj.",
    "cn_def": "被動的",
    "en_def": "letting things happen without taking action",
    "sentence": "In a {{BLANK}} role, he didn't contribute much to the discussion.",
    "cn": "在被動的角色中，他對討論沒有做出太多貢獻。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "積極的",
    "en_def": "busy doing things; taking action",
    "sentence": "Taking an {{BLANK}} role in community service is very rewarding.",
    "cn": "在社區服務中擔任積極角色非常有益。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "部分",
    "en_def": "a part of something",
    "sentence": "A significant {{BLANK}} of the budget was allocated to marketing.",
    "cn": "預算的一大部分分配給了市場營銷。"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "cn_def": "比例",
    "en_def": "the amount of one thing compared to another",
    "sentence": "The {{BLANK}} of funding for each department was carefully calculated.",
    "cn": "每個部門的資金比例都經過精心計算。"
  },
  {
    "word": "disproportionate",
    "pos": "adj.",
    "cn_def": "不成比例的",
    "en_def": "too large or too small compared to something",
    "sentence": "The {{BLANK}} amount of attention given to the issue was not justified.",
    "cn": "給予該問題的關注不成比例，這是不合理的。"
  },
  {
    "word": "preliminary",
    "pos": "adj.",
    "cn_def": "初步的",
    "en_def": "done first to prepare for something",
    "sentence": "{{BLANK}} data indicates a positive trend in sales.",
    "cn": "初步數據顯示銷售呈現出積極的趨勢。"
  },
  {
    "word": "protocol",
    "pos": "n.",
    "cn_def": "協議",
    "en_def": "an official set of rules",
    "sentence": "Following the correct {{BLANK}} is crucial for ensuring network security.",
    "cn": "遵循正確的協議對於確保網絡安全至關重要。"
  },
  {
    "word": "prototype",
    "pos": "n.",
    "cn_def": "原型",
    "en_def": "the first model of something",
    "sentence": "The {{BLANK}} of the machine was created to test the design before mass production.",
    "cn": "機器的原型是為了在大規模生產之前測試設計而創建的。"
  },
  {
    "word": "quality",
    "pos": "n.",
    "cn_def": "質量",
    "en_def": "how good or bad something is",
    "sentence": "The {{BLANK}} of the product is ensured through rigorous testing.",
    "cn": "通過嚴格的測試來確保產品的質量。"
  },
  {
    "word": "qualitative research",
    "pos": "n.",
    "cn_def": "定性研究",
    "en_def": "research about people's opinions and experiences",
    "sentence": "{{BLANK}} provides in-depth insights into human behavior.",
    "cn": "定性研究為人類行為提供了深刻的見解。"
  }
];

const MCQS = [
  {
    "q": "They agreed to settle the matter through ______.",
    "options": [
      "assurance",
      "mediation",
      "behavior",
      "insurance"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Television is a powerful ______ for advertising.",
    "options": [
      "medium",
      "quantity",
      "trigger",
      "suspension"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The ______ plays a crucial role in shaping public opinion.",
    "options": [
      "rigidity",
      "duration",
      "quality",
      "media"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "He joined the ______ after graduating from high school.",
    "options": [
      "minimal",
      "scenic",
      "military",
      "rigid"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The group has adopted a more ______ stance in recent years.",
    "options": [
      "revolving",
      "militant",
      "mutual",
      "confined"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The project was completed with ______ resources.",
    "options": [
      "scenic",
      "military",
      "minimal",
      "suspended"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "It was a ______ decision made by both parties involved.",
    "options": [
      "militant",
      "erosive",
      "informal",
      "mutual"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ______ of the community were strictly adhered to by all members.",
    "options": [
      "norms",
      "volunteer",
      "accommodation",
      "refinement"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The two projects ______ in terms of objectives and resources.",
    "options": [
      "format",
      "commence",
      "overlap",
      "devise"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Due to the ______ deadlines, the team had to prioritize tasks.",
    "options": [
      "coherent",
      "overlapping",
      "spherical",
      "united"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "In a ______ role, he didn't contribute much to the discussion.",
    "options": [
      "informal",
      "contemporary",
      "overlapping",
      "passive"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Taking an ______ role in community service is very rewarding.",
    "options": [
      "active",
      "revolving",
      "widespread",
      "unified"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "A significant ______ of the budget was allocated to marketing.",
    "options": [
      "volunteer",
      "behalf",
      "coincidence",
      "portion"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The ______ of funding for each department was carefully calculated.",
    "options": [
      "maturity",
      "norms",
      "proportion",
      "attainment"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ______ amount of attention given to the issue was not justified.",
    "options": [
      "disproportionate",
      "overlapping",
      "manual",
      "widespread"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "______ data indicates a positive trend in sales.",
    "options": [
      "formal",
      "preliminary",
      "informal",
      "relaxed"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Following the correct ______ is crucial for ensuring network security.",
    "options": [
      "protocol",
      "duration",
      "device",
      "violation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The ______ of the machine was created to test the design before mass production.",
    "options": [
      "scenery",
      "portion",
      "maturity",
      "prototype"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The ______ of the product is ensured through rigorous testing.",
    "options": [
      "mediation",
      "quality",
      "medium",
      "attainment"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "______ provides in-depth insights into human behavior.",
    "options": [
      "dedicate to",
      "currency exchange",
      "qualitative research",
      "be dedicated to"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "mediation": {
    "pos": "n.",
    "en_def": "help given to two sides to agree",
    "cn_def": "調解",
    "combined": [
      {
        "pos": "n.",
        "en_def": "help given to two sides to agree",
        "cn_def": "調解"
      }
    ]
  },
  "medium": {
    "pos": "n.",
    "en_def": "a way of sending information",
    "cn_def": "媒介",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of sending information",
        "cn_def": "媒介"
      }
    ]
  },
  "media": {
    "pos": "n.",
    "en_def": "TV, radio, newspapers and the internet",
    "cn_def": "媒體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "TV, radio, newspapers and the internet",
        "cn_def": "媒體"
      }
    ]
  },
  "military": {
    "pos": "n./adj.",
    "en_def": "about the army; the armed forces",
    "cn_def": "軍事/軍方的",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "about the army; the armed forces",
        "cn_def": "軍事/軍方的"
      }
    ]
  },
  "militant": {
    "pos": "adj.",
    "en_def": "ready to fight for a cause",
    "cn_def": "好戰的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ready to fight for a cause",
        "cn_def": "好戰的"
      }
    ]
  },
  "minimal": {
    "pos": "adj.",
    "en_def": "very small in amount",
    "cn_def": "最小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very small in amount",
        "cn_def": "最小的"
      }
    ]
  },
  "mutual": {
    "pos": "adj.",
    "en_def": "shared by two or more people",
    "cn_def": "相互的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "shared by two or more people",
        "cn_def": "相互的"
      }
    ]
  },
  "norms": {
    "pos": "n.",
    "en_def": "usual ways of behaving in a group",
    "cn_def": "常規",
    "combined": [
      {
        "pos": "n.",
        "en_def": "usual ways of behaving in a group",
        "cn_def": "常規"
      }
    ]
  },
  "overlap": {
    "pos": "v.",
    "en_def": "to cover part of the same area",
    "cn_def": "重疊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cover part of the same area",
        "cn_def": "重疊"
      }
    ]
  },
  "overlapping": {
    "pos": "adj.",
    "en_def": "partly covering the same area",
    "cn_def": "重疊的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "partly covering the same area",
        "cn_def": "重疊的"
      }
    ]
  },
  "passive": {
    "pos": "adj.",
    "en_def": "letting things happen without taking action",
    "cn_def": "被動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "letting things happen without taking action",
        "cn_def": "被動的"
      }
    ]
  },
  "active": {
    "pos": "adj.",
    "en_def": "busy doing things; taking action",
    "cn_def": "積極的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "busy doing things; taking action",
        "cn_def": "積極的"
      }
    ]
  },
  "portion": {
    "pos": "n.",
    "en_def": "a part of something",
    "cn_def": "部分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of something",
        "cn_def": "部分"
      }
    ]
  },
  "proportion": {
    "pos": "n.",
    "en_def": "the amount of one thing compared to another",
    "cn_def": "比例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount of one thing compared to another",
        "cn_def": "比例"
      }
    ]
  },
  "disproportionate": {
    "pos": "adj.",
    "en_def": "too large or too small compared to something",
    "cn_def": "不成比例的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "too large or too small compared to something",
        "cn_def": "不成比例的"
      }
    ]
  },
  "preliminary": {
    "pos": "adj.",
    "en_def": "done first to prepare for something",
    "cn_def": "初步的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done first to prepare for something",
        "cn_def": "初步的"
      }
    ]
  },
  "protocol": {
    "pos": "n.",
    "en_def": "an official set of rules",
    "cn_def": "協議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official set of rules",
        "cn_def": "協議"
      }
    ]
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of something",
    "cn_def": "原型",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the first model of something",
        "cn_def": "原型"
      }
    ]
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good or bad something is",
    "cn_def": "質量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how good or bad something is",
        "cn_def": "質量"
      }
    ]
  },
  "qualitative research": {
    "pos": "n.",
    "en_def": "research about people's opinions and experiences",
    "cn_def": "定性研究",
    "combined": [
      {
        "pos": "n.",
        "en_def": "research about people's opinions and experiences",
        "cn_def": "定性研究"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
