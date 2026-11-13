// Part 3 Quiz Data: design – institution
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 2 Part 3 - design – institution",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "design",
    "pos": "v.",
    "cn_def": "設計",
    "en_def": "to plan and make something",
    "sentence": "This renowned fashion designer wants to {{BLANK}} her own line of clothing.",
    "cn": "這位名的室內設計師想設計自己的服裝系列。"
  },
  {
    "word": "distinct",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "clearly different",
    "sentence": "There's a {{BLANK}} difference between the two concepts.",
    "cn": "這兩個概念之間有明顯的區別。"
  },
  {
    "word": "distinction",
    "pos": "n.",
    "cn_def": "區別",
    "en_def": "a clear difference between things",
    "sentence": "The {{BLANK}} between the two species is subtle.",
    "cn": "這兩個物種之間的區別是微妙的。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "有特色的",
    "en_def": "special and easy to recognize",
    "sentence": "Her voice is {{BLANK}} and easily recognizable.",
    "cn": "她的嗓音很有特色，容易識別。"
  },
  {
    "word": "element",
    "pos": "n.",
    "cn_def": "元素",
    "en_def": "one basic part of something",
    "sentence": "Water is composed of two {{BLANK}}: hydrogen and oxygen.",
    "cn": "水由兩種元素組成：氫和氧。"
  },
  {
    "word": "equation",
    "pos": "n.",
    "cn_def": "方程",
    "en_def": "a math statement with an equal sign",
    "sentence": "The mathematical {{BLANK}} was difficult to solve.",
    "cn": "這個數學方程很難解。"
  },
  {
    "word": "equivalent",
    "pos": "adj.",
    "cn_def": "相等的",
    "en_def": "equal in value or meaning",
    "sentence": "Ten dollars is {{BLANK}} to a thousand rubles.",
    "cn": "十美元相當於一千盧布。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge how good or useful something is",
    "sentence": "We need to {{BLANK}} the project's feasibility.",
    "cn": "我們需要評估專案的可行性。"
  },
  {
    "word": "evaluation",
    "pos": "n.",
    "cn_def": "評價",
    "en_def": "a judgment of how good something is",
    "sentence": "The teacher gave an {{BLANK}} of each student's performance.",
    "cn": "老師評價了每個學生的表現。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "特點",
    "en_def": "an important or typical part",
    "sentence": "The main {{BLANK}} of this product is its durability and compatibility with various electronic devices.",
    "cn": "該產品的主要特點是其耐用性以及與各式各樣電子裝置的相容性。"
  },
  {
    "word": "feature",
    "pos": "v.",
    "cn_def": "以...為特色",
    "en_def": "to have something as an important part",
    "sentence": "The exhibition will {{BLANK}} artwork from local artists.",
    "cn": "展覽將以當地藝術家的藝術品為特色。"
  },
  {
    "word": "final",
    "pos": "adj.",
    "cn_def": "最後的",
    "en_def": "last",
    "sentence": "This is the {{BLANK}} version of the report.",
    "cn": "這是報告的最終版本。"
  },
  {
    "word": "finalize",
    "pos": "v.",
    "cn_def": "定稿",
    "en_def": "to make the last decision about something",
    "sentence": "We need to {{BLANK}} the plans by next week.",
    "cn": "我們需要在下周之前定稿計畫。"
  },
  {
    "word": "focus on",
    "pos": "phr",
    "cn_def": "聚焦於",
    "en_def": "to give all your attention to something",
    "sentence": "It's essential to {{BLANK}} the task at hand.",
    "cn": "聚焦於手頭的任務是至關重要的。"
  },
  {
    "word": "focused",
    "pos": "adj.",
    "cn_def": "專注的",
    "en_def": "to keep giving all your attention",
    "sentence": "He remained {{BLANK}} despite the distractions.",
    "cn": "儘管有分心的事，他仍然保持專注。"
  },
  {
    "word": "impact",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to have an effect on something",
    "sentence": "The decision will {{BLANK}} the company's future.",
    "cn": "這一決定將影響公司的未來。"
  },
  {
    "word": "have a significant impact on",
    "pos": "phr",
    "cn_def": "對...有...的影響",
    "en_def": "to have a strong effect on something",
    "sentence": "The policy will {{BLANK}} the industry.",
    "cn": "該政策將對行業產生重大影響。"
  },
  {
    "word": "injury",
    "pos": "n.",
    "cn_def": "傷害",
    "en_def": "harm done to the body",
    "sentence": "He sustained an {{BLANK}} during the game.",
    "cn": "他在比賽中受傷。"
  },
  {
    "word": "injure",
    "pos": "v.",
    "cn_def": "受傷",
    "en_def": "to hurt someone",
    "sentence": "Be careful not to {{BLANK}} yourself while using these tools.",
    "cn": "使用這些工具時要小心不要受傷。"
  },
  {
    "word": "injured",
    "pos": "adj.",
    "cn_def": "受傷的",
    "en_def": "hurt",
    "sentence": "The {{BLANK}} player was taken off the field.",
    "cn": "受傷的球員被帶出了場地。"
  },
  {
    "word": "institute",
    "pos": "n.",
    "cn_def": "機構",
    "en_def": "an organization for study or research",
    "sentence": "The research {{BLANK}} published its findings last month.",
    "cn": "研究機構上個月發佈了其研究結果。"
  },
  {
    "word": "institution",
    "pos": "n.",
    "cn_def": "機構",
    "en_def": "a large organization such as a school or bank",
    "sentence": "He has been a member of that {{BLANK}} for a decade.",
    "cn": "他已經是那個機構的成員十年了。"
  }
];

const MCQS = [
  {
    "q": "This renowned fashion designer wants to ______ her own line of clothing.",
    "options": [
      "conduct",
      "conclude",
      "injure",
      "design"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "There's a ______ difference between the two concepts.",
    "options": [
      "equivalent",
      "normal",
      "distinct",
      "residential"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The ______ between the two species is subtle.",
    "options": [
      "community",
      "distinction",
      "range",
      "computer"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Her voice is ______ and easily recognizable.",
    "options": [
      "distinctive",
      "complicated",
      "regional",
      "negative"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Water is composed of two ______: hydrogen and oxygen.",
    "options": [
      "institution",
      "effect",
      "element",
      "consumption"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The mathematical ______ was difficult to solve.",
    "options": [
      "site",
      "equation",
      "feature",
      "element"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Ten dollars is ______ to a thousand rubles.",
    "options": [
      "resourceful",
      "negative",
      "primary",
      "equivalent"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "We need to ______ the project's feasibility.",
    "options": [
      "evaluate",
      "design",
      "affect",
      "seek-sought-sought"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The teacher gave an ______ of each student's performance.",
    "options": [
      "restriction",
      "context",
      "consequence",
      "evaluation"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The main ______ of this product is its durability and compatibility with various electronic devices.",
    "options": [
      "context",
      "perception",
      "feature",
      "resident"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The exhibition will ______ artwork from local artists.",
    "options": [
      "feature",
      "injure",
      "text",
      "impact"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "This is the ______ version of the report.",
    "options": [
      "selective",
      "final",
      "complicated",
      "perceived"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "We need to ______ the plans by next week.",
    "options": [
      "assist",
      "perceive",
      "conduct",
      "finalize"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "It's essential to ______ the task at hand.",
    "options": [
      "range from...to..",
      "focus on",
      "construction site",
      "in conclusion"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "He remained ______ despite the distractions.",
    "options": [
      "remain/stay focused",
      "investment in",
      "have a... impact on",
      "be in effect"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The decision will ______ the company's future.",
    "options": [
      "assist",
      "seek-sought-sought",
      "impact",
      "conduct"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The policy will ______ a significant ______ the industry.",
    "options": [
      "have a... impact on",
      "focus on",
      "make a purchase",
      "participate in"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "He sustained an ______ during the game.",
    "options": [
      "journal",
      "high-achiever",
      "computer",
      "injury"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Be careful not to ______ yourself while using these tools.",
    "options": [
      "impact",
      "seek-sought-sought",
      "injure",
      "conclude"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The ______ player was taken off the field.",
    "options": [
      "administrative",
      "injured",
      "selective",
      "secure"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The research ______ published its findings last month.",
    "options": [
      "institute",
      "strategy",
      "context",
      "resident"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "He has been a member of that ______ for a decade.",
    "options": [
      "construction",
      "survey",
      "security",
      "institution"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "design": {
    "pos": "v.",
    "en_def": "to plan and make something",
    "cn_def": "設計",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to plan and make something",
        "cn_def": "設計"
      }
    ]
  },
  "distinct": {
    "pos": "adj.",
    "en_def": "clearly different",
    "cn_def": "明顯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clearly different",
        "cn_def": "明顯的"
      }
    ]
  },
  "distinction": {
    "pos": "n.",
    "en_def": "a clear difference between things",
    "cn_def": "區別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a clear difference between things",
        "cn_def": "區別"
      }
    ]
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "special and easy to recognize",
    "cn_def": "有特色的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "special and easy to recognize",
        "cn_def": "有特色的"
      }
    ]
  },
  "element": {
    "pos": "n.",
    "en_def": "one basic part of something",
    "cn_def": "元素",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one basic part of something",
        "cn_def": "元素"
      }
    ]
  },
  "equation": {
    "pos": "n.",
    "en_def": "a math statement with an equal sign",
    "cn_def": "方程",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a math statement with an equal sign",
        "cn_def": "方程"
      }
    ]
  },
  "equivalent": {
    "pos": "adj.",
    "en_def": "equal in value or meaning",
    "cn_def": "相等的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "equal in value or meaning",
        "cn_def": "相等的"
      }
    ]
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to judge how good or useful something is",
    "cn_def": "評估",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to judge how good or useful something is",
        "cn_def": "評估"
      }
    ]
  },
  "evaluation": {
    "pos": "n.",
    "en_def": "a judgment of how good something is",
    "cn_def": "評價",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a judgment of how good something is",
        "cn_def": "評價"
      }
    ]
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important or typical part",
    "cn_def": "特點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an important or typical part",
        "cn_def": "特點"
      },
      {
        "pos": "v.",
        "en_def": "to have something as an important part",
        "cn_def": "以...為特色"
      }
    ]
  },
  "final": {
    "pos": "adj.",
    "en_def": "last",
    "cn_def": "最後的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "last",
        "cn_def": "最後的"
      }
    ]
  },
  "finalize": {
    "pos": "v.",
    "en_def": "to make the last decision about something",
    "cn_def": "定稿",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make the last decision about something",
        "cn_def": "定稿"
      }
    ]
  },
  "focus on": {
    "pos": "phr",
    "en_def": "to give all your attention to something",
    "cn_def": "聚焦於",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to give all your attention to something",
        "cn_def": "聚焦於"
      }
    ]
  },
  "focus on = concentrate on": {
    "pos": "phr",
    "en_def": "to give all your attention to something",
    "cn_def": "聚焦於",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to give all your attention to something",
        "cn_def": "聚焦於"
      }
    ]
  },
  "remain/stay focused": {
    "pos": "adj.",
    "en_def": "to keep giving all your attention",
    "cn_def": "專注的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "to keep giving all your attention",
        "cn_def": "專注的"
      }
    ]
  },
  "focused": {
    "pos": "adj.",
    "en_def": "to keep giving all your attention",
    "cn_def": "專注的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "to keep giving all your attention",
        "cn_def": "專注的"
      }
    ]
  },
  "impact": {
    "pos": "v.",
    "en_def": "to have an effect on something",
    "cn_def": "影響",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have an effect on something",
        "cn_def": "影響"
      }
    ]
  },
  "have a significant impact on": {
    "pos": "phr",
    "en_def": "to have a strong effect on something",
    "cn_def": "對...有...的影響",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to have a strong effect on something",
        "cn_def": "對...有...的影響"
      }
    ]
  },
  "have a... impact on": {
    "pos": "phr",
    "en_def": "to have a strong effect on something",
    "cn_def": "對...有...的影響",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to have a strong effect on something",
        "cn_def": "對...有...的影響"
      }
    ]
  },
  "injury": {
    "pos": "n.",
    "en_def": "harm done to the body",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "n.",
        "en_def": "harm done to the body",
        "cn_def": "傷害"
      }
    ]
  },
  "injure": {
    "pos": "v.",
    "en_def": "to hurt someone",
    "cn_def": "受傷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to hurt someone",
        "cn_def": "受傷"
      }
    ]
  },
  "injured": {
    "pos": "adj.",
    "en_def": "hurt",
    "cn_def": "受傷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "hurt",
        "cn_def": "受傷的"
      }
    ]
  },
  "institute": {
    "pos": "n.",
    "en_def": "an organization for study or research",
    "cn_def": "機構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organization for study or research",
        "cn_def": "機構"
      }
    ]
  },
  "institution": {
    "pos": "n.",
    "en_def": "a large organization such as a school or bank",
    "cn_def": "機構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large organization such as a school or bank",
        "cn_def": "機構"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
