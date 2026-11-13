// Part 2 Quiz Data: complex – design
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 2 Part 2 - complex – design",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "complex",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "having many parts; hard to understand",
    "sentence": "The situation is more {{BLANK}} than it appears.",
    "cn": "情況比看起來更複雜。"
  },
  {
    "word": "complicated",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "difficult to understand or deal with",
    "sentence": "The machinery is {{BLANK}} and requires training to use.",
    "cn": "機械複雜，需要培訓才能使用。"
  },
  {
    "word": "complication",
    "pos": "n.",
    "cn_def": "併發症",
    "en_def": "a new problem that makes things harder",
    "sentence": "The surgery was successful, with no {{BLANK}}.",
    "cn": "手術成功，沒有併發症。"
  },
  {
    "word": "computer",
    "pos": "n.",
    "cn_def": "電腦",
    "en_def": "an electronic machine for working with information",
    "sentence": "The {{BLANK}} crashed and I lost all my work.",
    "cn": "電腦崩潰了，我失去了所有的工作。"
  },
  {
    "word": "computerized",
    "pos": "adj.",
    "cn_def": "電腦化的",
    "en_def": "done or controlled by a computer",
    "sentence": "The factory is now fully {{BLANK}}.",
    "cn": "工廠現在完全電腦化了。"
  },
  {
    "word": "conclude",
    "pos": "v.",
    "cn_def": "結束",
    "en_def": "to end something; to decide after thinking",
    "sentence": "After a lengthy discussion, they {{BLANK}} the meeting.",
    "cn": "經過長時間的討論，他們結束了會議。"
  },
  {
    "word": "in conclusion",
    "pos": "phr",
    "cn_def": "最後",
    "en_def": "finally; to finish what I am saying",
    "sentence": "{{BLANK}}, I believe that we should adopt this new policy.",
    "cn": "最後，我認為我們應該採納這項新政策。"
  },
  {
    "word": "conduct",
    "pos": "v.",
    "cn_def": "導電，導熱",
    "en_def": "to let heat or electricity pass through",
    "sentence": "Certain materials {{BLANK}} electricity better than others.",
    "cn": "某些材料比其他材料更好地導電。"
  },
  {
    "word": "conduct",
    "pos": "v.",
    "cn_def": "指揮，引導",
    "en_def": "to lead or direct (an orchestra or activity)",
    "sentence": "She will {{BLANK}} the orchestra tonight.",
    "cn": "她今晚將指揮這個管弦樂隊。"
  },
  {
    "word": "conduct",
    "pos": "n.",
    "cn_def": "品格",
    "en_def": "the way a person behaves",
    "sentence": "He is a man of good {{BLANK}}.",
    "cn": "他是一個品格高尚的人。"
  },
  {
    "word": "consequence",
    "pos": "n.",
    "cn_def": "結果",
    "en_def": "a result of an action",
    "sentence": "Actions have {{BLANK}}.",
    "cn": "行動有後果。"
  },
  {
    "word": "construct",
    "pos": "v.",
    "cn_def": "建造",
    "en_def": "to build something",
    "sentence": "They plan to {{BLANK}} a bridge over the river.",
    "cn": "他們計畫在河上建造一座橋樑。"
  },
  {
    "word": "construction",
    "pos": "n.",
    "cn_def": "建築",
    "en_def": "the act of building something",
    "sentence": "The {{BLANK}} of the new mall will be completed next year.",
    "cn": "新購物中心的建設將于明年完成。"
  },
  {
    "word": "construction site",
    "pos": "n.",
    "cn_def": "建築工地",
    "en_def": "a place where a building is being built",
    "sentence": "Workers were busy at the {{BLANK}}.",
    "cn": "工人們在建築工地忙碌地工作。"
  },
  {
    "word": "consume",
    "pos": "v.",
    "cn_def": "消耗",
    "en_def": "to use something such as energy or food",
    "sentence": "This device doesn't {{BLANK}} much energy.",
    "cn": "這個設備不消耗太多能源。"
  },
  {
    "word": "consumer",
    "pos": "n.",
    "cn_def": "消費者",
    "en_def": "a person who buys and uses goods",
    "sentence": "The product was popular among young {{BLANK}}.",
    "cn": "該產品在年輕消費者中很受歡迎。"
  },
  {
    "word": "consumption",
    "pos": "n.",
    "cn_def": "消耗",
    "en_def": "the amount of something that is used",
    "sentence": "The country's oil {{BLANK}} has increased.",
    "cn": "該國的石油消耗量已經增加。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "信用",
    "en_def": "trust that you will pay money back later",
    "sentence": "Good {{BLANK}} is essential for getting a loan.",
    "cn": "良好的信用對於獲得貸款至關重要。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "學分",
    "en_def": "a unit of study at college or university",
    "sentence": "She needs 3 more {{BLANK}} to graduate, so she's taking an extra course.",
    "cn": "她還需要3個學分才能畢業，所以她正在上一門額外的課程。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the customs and way of life of a group",
    "sentence": "Studying {{BLANK}} helps us understand societies better.",
    "cn": "研究文化有助於我們更好地瞭解社會。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "about culture",
    "sentence": "The city is known for its {{BLANK}} festivals.",
    "cn": "該城市以其文化節日而著稱。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the way something is planned or made",
    "sentence": "He came up with an innovative {{BLANK}} for the website.",
    "cn": "他為網站提出了一個創新的設計。"
  }
];

const MCQS = [
  {
    "q": "The situation is more ______ than it appears.",
    "options": [
      "primary",
      "previous",
      "complex",
      "restricted"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The machinery is ______ and requires training to use.",
    "options": [
      "relevant",
      "residential",
      "potential",
      "complicated"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The surgery was successful, with no ______.",
    "options": [
      "culture",
      "complication",
      "region",
      "site"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The ______ crashed and I lost all my work.",
    "options": [
      "computer",
      "credit",
      "distinction",
      "feature"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The factory is now fully ______.",
    "options": [
      "residential",
      "obtained",
      "injured",
      "computerized"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "After a lengthy discussion, they ______ the meeting.",
    "options": [
      "injure",
      "conclude",
      "secure",
      "achieve"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "______, I believe that we should adopt this new policy.",
    "options": [
      "in conclusion",
      "construction site",
      "be in effect",
      "investment in"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Certain materials ______ electricity better than others.",
    "options": [
      "assist",
      "perceive",
      "conduct",
      "acquire"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "She will ______ the orchestra tonight.",
    "options": [
      "consume",
      "conduct",
      "categorize",
      "impact"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "He is a man of good ______.",
    "options": [
      "conduct",
      "resource",
      "survey",
      "journal"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Actions have ______.",
    "options": [
      "text",
      "journal",
      "perception",
      "consequence"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "They plan to ______ a bridge over the river.",
    "options": [
      "seek-sought-sought",
      "finalize",
      "construct",
      "restrict"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The ______ of the new mall will be completed next year.",
    "options": [
      "potential",
      "feature",
      "restriction",
      "construction"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Workers were busy at the ______.",
    "options": [
      "construction site",
      "in conclusion",
      "make a purchase",
      "reside in"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "This device doesn't ______ much energy.",
    "options": [
      "survey",
      "obtain",
      "consume",
      "seek-sought-sought"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The product was popular among young ______.",
    "options": [
      "feature",
      "consumer",
      "potential",
      "journal"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The country's oil ______ has increased.",
    "options": [
      "consumption",
      "category",
      "computer",
      "element"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Good ______ is essential for getting a loan.",
    "options": [
      "high-achiever",
      "administration",
      "consumption",
      "credit"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "She needs 3 more ______ to graduate, so she's taking an extra course.",
    "options": [
      "complex",
      "consumer",
      "credit",
      "perception"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Studying ______ helps us understand societies better.",
    "options": [
      "resident",
      "culture",
      "consequence",
      "resource"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The city is known for its ______ festivals.",
    "options": [
      "cultural",
      "injured",
      "previous",
      "secure"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "He came up with an innovative ______ for the website.",
    "options": [
      "region",
      "design",
      "resident",
      "complex"
    ],
    "answer": 1,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "complex": {
    "pos": "adj.",
    "en_def": "having many parts; hard to understand",
    "cn_def": "複雜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having many parts; hard to understand",
        "cn_def": "複雜的"
      }
    ]
  },
  "complicated": {
    "pos": "adj.",
    "en_def": "difficult to understand or deal with",
    "cn_def": "複雜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "difficult to understand or deal with",
        "cn_def": "複雜的"
      }
    ]
  },
  "complication": {
    "pos": "n.",
    "en_def": "a new problem that makes things harder",
    "cn_def": "併發症",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a new problem that makes things harder",
        "cn_def": "併發症"
      }
    ]
  },
  "computer": {
    "pos": "n.",
    "en_def": "an electronic machine for working with information",
    "cn_def": "電腦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an electronic machine for working with information",
        "cn_def": "電腦"
      }
    ]
  },
  "computerized": {
    "pos": "adj.",
    "en_def": "done or controlled by a computer",
    "cn_def": "電腦化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done or controlled by a computer",
        "cn_def": "電腦化的"
      }
    ]
  },
  "conclude": {
    "pos": "v.",
    "en_def": "to end something; to decide after thinking",
    "cn_def": "結束",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to end something; to decide after thinking",
        "cn_def": "結束"
      }
    ]
  },
  "in conclusion": {
    "pos": "phr",
    "en_def": "finally; to finish what I am saying",
    "cn_def": "最後",
    "combined": [
      {
        "pos": "phr",
        "en_def": "finally; to finish what I am saying",
        "cn_def": "最後"
      }
    ]
  },
  "conduct": {
    "pos": "v.",
    "en_def": "to let heat or electricity pass through",
    "cn_def": "導電，導熱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to let heat or electricity pass through",
        "cn_def": "導電，導熱"
      },
      {
        "pos": "v.",
        "en_def": "to lead or direct (an orchestra or activity)",
        "cn_def": "指揮，引導"
      },
      {
        "pos": "n.",
        "en_def": "the way a person behaves",
        "cn_def": "品格"
      }
    ]
  },
  "consequence": {
    "pos": "n.",
    "en_def": "a result of an action",
    "cn_def": "結果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a result of an action",
        "cn_def": "結果"
      }
    ]
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build something",
    "cn_def": "建造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to build something",
        "cn_def": "建造"
      }
    ]
  },
  "construction": {
    "pos": "n.",
    "en_def": "the act of building something",
    "cn_def": "建築",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of building something",
        "cn_def": "建築"
      }
    ]
  },
  "construction site": {
    "pos": "n.",
    "en_def": "a place where a building is being built",
    "cn_def": "建築工地",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where a building is being built",
        "cn_def": "建築工地"
      }
    ]
  },
  "consume": {
    "pos": "v.",
    "en_def": "to use something such as energy or food",
    "cn_def": "消耗",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use something such as energy or food",
        "cn_def": "消耗"
      }
    ]
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys and uses goods",
    "cn_def": "消費者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who buys and uses goods",
        "cn_def": "消費者"
      }
    ]
  },
  "consumption": {
    "pos": "n.",
    "en_def": "the amount of something that is used",
    "cn_def": "消耗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount of something that is used",
        "cn_def": "消耗"
      }
    ]
  },
  "credit": {
    "pos": "n.",
    "en_def": "trust that you will pay money back later",
    "cn_def": "信用",
    "combined": [
      {
        "pos": "n.",
        "en_def": "trust that you will pay money back later",
        "cn_def": "信用"
      },
      {
        "pos": "n.",
        "en_def": "a unit of study at college or university",
        "cn_def": "學分"
      }
    ]
  },
  "culture": {
    "pos": "n.",
    "en_def": "the customs and way of life of a group",
    "cn_def": "文化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the customs and way of life of a group",
        "cn_def": "文化"
      }
    ]
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "about culture",
    "cn_def": "文化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about culture",
        "cn_def": "文化的"
      }
    ]
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned or made",
    "cn_def": "設計",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way something is planned or made",
        "cn_def": "設計"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
