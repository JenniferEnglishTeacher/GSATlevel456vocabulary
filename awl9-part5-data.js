// Part 5 Quiz Data: informal – mediate
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 9 Part 5 - informal – mediate",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的",
    "en_def": "relaxed and friendly; not official",
    "sentence": "The {{BLANK}} meeting allowed everyone to speak freely and share their ideas.",
    "cn": "非正式會議讓每個人都可以自由發言並分享他們的想法。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "official and serious",
    "sentence": "A {{BLANK}} dinner requires guests to dress in formal attire.",
    "cn": "正式晚宴要求客人穿著正式服裝。"
  },
  {
    "word": "former",
    "pos": "adj.",
    "cn_def": "前者的",
    "en_def": "earlier; from the past",
    "sentence": "The {{BLANK}} is preferred over the latter in most cases.",
    "cn": "在大多數情況下，前者比後者更受歡迎。"
  },
  {
    "word": "inherent",
    "pos": "adj.",
    "cn_def": "固有的",
    "en_def": "being a natural part of something",
    "sentence": "There are {{BLANK}} risks involved in the procedure.",
    "cn": "該過程涉及固有的風險。"
  },
  {
    "word": "inheritance",
    "pos": "n.",
    "cn_def": "繼承",
    "en_def": "money or property received after someone dies",
    "sentence": "The legal battle over the {{BLANK}} lasted for years.",
    "cn": "關於繼承的法律戰爭持續了好幾年。"
  },
  {
    "word": "hereditary disease",
    "pos": "n.",
    "cn_def": "遺傳病",
    "en_def": "an illness passed from parents to children",
    "sentence": "Early detection can help manage {{BLANK}} and improve quality of life.",
    "cn": "早期檢測可以幫助管理遺傳病並提高生活質量。"
  },
  {
    "word": "insight",
    "pos": "n.",
    "cn_def": "洞察力",
    "en_def": "a clear and deep understanding",
    "sentence": "His {{BLANK}} into human behavior is remarkable.",
    "cn": "他對人類行為的洞察力非常出色。"
  },
  {
    "word": "integral",
    "pos": "adj.",
    "cn_def": "不可或缺的",
    "en_def": "necessary and important as part of a whole",
    "sentence": "An {{BLANK}} part of the project is the collaboration between teams.",
    "cn": "該項目的一個不可或缺的部分是團隊之間的合作。"
  },
  {
    "word": "integrate",
    "pos": "v.",
    "cn_def": "整合",
    "en_def": "to combine things to work together",
    "sentence": "The goal is to {{BLANK}} all the systems for better functionality.",
    "cn": "目標是整合所有系統以實現更好的功能。"
  },
  {
    "word": "integrated",
    "pos": "adj.",
    "cn_def": "綜合的",
    "en_def": "combined into one system",
    "sentence": "The {{BLANK}} approach yielded better results in tackling the issue.",
    "cn": "綜合方法在解決問題方面取得了更好的效果。"
  },
  {
    "word": "integration",
    "pos": "n.",
    "cn_def": "整合",
    "en_def": "the act of combining things",
    "sentence": "{{BLANK}} of data from different sources can be challenging.",
    "cn": "從不同來源整合數據可能具有挑戰性。"
  },
  {
    "word": "intermediate",
    "pos": "adj.",
    "cn_def": "中等的",
    "en_def": "between beginning and advanced",
    "sentence": "The course is designed for {{BLANK}} level learners.",
    "cn": "該課程是為中等水平的學習者設計的。"
  },
  {
    "word": "manual",
    "pos": "adj.",
    "cn_def": "手動的",
    "en_def": "done by hand",
    "sentence": "In the absence of power, the {{BLANK}} override can be used to operate the system.",
    "cn": "在缺乏電力的情況下，可以使用手動覆蓋來操作系統。"
  },
  {
    "word": "manual",
    "pos": "n.",
    "cn_def": "手冊",
    "en_def": "a book of instructions",
    "sentence": "Please refer to the {{BLANK}} for troubleshooting tips.",
    "cn": "請參閱手冊以獲取疑難解答技巧。"
  },
  {
    "word": "mature",
    "pos": "v.",
    "cn_def": "成熟",
    "en_def": "to grow and develop fully",
    "sentence": "It will take some time for the idea to {{BLANK}} and become viable.",
    "cn": "該想法需要一些時間才能成熟並變得可行。"
  },
  {
    "word": "mature",
    "pos": "adj.",
    "cn_def": "成熟的",
    "en_def": "fully grown; behaving like an adult",
    "sentence": "She is very {{BLANK}} for her age and handles situations well.",
    "cn": "她非常成熟，能夠很好地處理情況。"
  },
  {
    "word": "immature",
    "pos": "adj.",
    "cn_def": "不成熟的",
    "en_def": "behaving like a child",
    "sentence": "His {{BLANK}} behavior was frowned upon by his peers.",
    "cn": "他不成熟的行為受到了同伴的不滿。"
  },
  {
    "word": "maturity",
    "pos": "n.",
    "cn_def": "成熟度",
    "en_def": "the state of being fully grown",
    "sentence": "His {{BLANK}} and professionalism are admired by everyone in the office.",
    "cn": "他在辦公室裡的成熟度和專業度受到每個人的欣賞。"
  },
  {
    "word": "immaturity",
    "pos": "n.",
    "cn_def": "不成熟",
    "en_def": "childish behavior",
    "sentence": "Her {{BLANK}} was evident when she threw a tantrum over a minor issue.",
    "cn": "她因為一個小問題發脾氣，顯示出她的不成熟。"
  },
  {
    "word": "mediate",
    "pos": "v.",
    "cn_def": "調解",
    "en_def": "to help two sides agree",
    "sentence": "The counselor tried to {{BLANK}} the dispute between the two parties.",
    "cn": "輔導員試圖調解兩方的爭端。"
  }
];

const MCQS = [
  {
    "q": "The ______ meeting allowed everyone to speak freely and share their ideas.",
    "options": [
      "analogous",
      "widespread",
      "informal",
      "temperate"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "A ______ dinner requires guests to dress in formal attire.",
    "options": [
      "united",
      "integral",
      "scenic",
      "formal"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The ______ is preferred over the latter in most cases.",
    "options": [
      "former",
      "concurrent",
      "compatible",
      "militant"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "There are ______ risks involved in the procedure.",
    "options": [
      "former",
      "inherent",
      "united",
      "scenic"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The legal battle over the ______ lasted for years.",
    "options": [
      "integration",
      "attainment",
      "inheritance",
      "immaturity"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Early detection can help manage ______ and improve quality of life.",
    "options": [
      "be dedicated to",
      "hereditary disease",
      "the converse",
      "accommodate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "His ______ into human behavior is remarkable.",
    "options": [
      "insight",
      "current",
      "behavior",
      "behalf"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "An ______ part of the project is the collaboration between teams.",
    "options": [
      "mature",
      "former",
      "spherical",
      "integral"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The goal is to ______ all the systems for better functionality.",
    "options": [
      "relax",
      "integrate",
      "assure",
      "confine"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The ______ approach yielded better results in tackling the issue.",
    "options": [
      "attained",
      "overlapping",
      "integrated",
      "erosive"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "______ of data from different sources can be challenging.",
    "options": [
      "assurance",
      "route",
      "inflation",
      "integration"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The course is designed for ______ level learners.",
    "options": [
      "intermediate",
      "formal",
      "informal",
      "uniform"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "In the absence of power, the ______ override can be used to operate the system.",
    "options": [
      "informal",
      "unified",
      "coherent",
      "manual"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Please refer to the ______ for troubleshooting tips.",
    "options": [
      "manual",
      "revolution",
      "violation",
      "medium"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "It will take some time for the idea to ______ and become viable.",
    "options": [
      "confine",
      "mature",
      "commence",
      "team"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "She is very ______ for her age and handles situations well.",
    "options": [
      "widespread",
      "controversial",
      "mature",
      "contemporary"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "His ______ behavior was frowned upon by his peers.",
    "options": [
      "reassured",
      "immature",
      "temperate",
      "minimal"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "His ______ and professionalism are admired by everyone in the office.",
    "options": [
      "behalf",
      "erosion",
      "inheritance",
      "maturity"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Her ______ was evident when she threw a tantrum over a minor issue.",
    "options": [
      "quantity",
      "revolution",
      "immaturity",
      "suspense"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The counselor tried to ______ the dispute between the two parties.",
    "options": [
      "mediate",
      "insure",
      "confine",
      "attain"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly; not official",
    "cn_def": "非正式的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relaxed and friendly; not official",
        "cn_def": "非正式的"
      }
    ]
  },
  "formal": {
    "pos": "adj.",
    "en_def": "official and serious",
    "cn_def": "正式的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "official and serious",
        "cn_def": "正式的"
      }
    ]
  },
  "former": {
    "pos": "adj.",
    "en_def": "earlier; from the past",
    "cn_def": "前者的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "earlier; from the past",
        "cn_def": "前者的"
      }
    ]
  },
  "inherent": {
    "pos": "adj.",
    "en_def": "being a natural part of something",
    "cn_def": "固有的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "being a natural part of something",
        "cn_def": "固有的"
      }
    ]
  },
  "inheritance": {
    "pos": "n.",
    "en_def": "money or property received after someone dies",
    "cn_def": "繼承",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money or property received after someone dies",
        "cn_def": "繼承"
      }
    ]
  },
  "hereditary disease": {
    "pos": "n.",
    "en_def": "an illness passed from parents to children",
    "cn_def": "遺傳病",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an illness passed from parents to children",
        "cn_def": "遺傳病"
      }
    ]
  },
  "insight": {
    "pos": "n.",
    "en_def": "a clear and deep understanding",
    "cn_def": "洞察力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a clear and deep understanding",
        "cn_def": "洞察力"
      }
    ]
  },
  "integral": {
    "pos": "adj.",
    "en_def": "necessary and important as part of a whole",
    "cn_def": "不可或缺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "necessary and important as part of a whole",
        "cn_def": "不可或缺的"
      }
    ]
  },
  "integrate": {
    "pos": "v.",
    "en_def": "to combine things to work together",
    "cn_def": "整合",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to combine things to work together",
        "cn_def": "整合"
      }
    ]
  },
  "integrated": {
    "pos": "adj.",
    "en_def": "combined into one system",
    "cn_def": "綜合的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "combined into one system",
        "cn_def": "綜合的"
      }
    ]
  },
  "integration": {
    "pos": "n.",
    "en_def": "the act of combining things",
    "cn_def": "整合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of combining things",
        "cn_def": "整合"
      }
    ]
  },
  "intermediate": {
    "pos": "adj.",
    "en_def": "between beginning and advanced",
    "cn_def": "中等的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "between beginning and advanced",
        "cn_def": "中等的"
      }
    ]
  },
  "manual": {
    "pos": "adj.",
    "en_def": "done by hand",
    "cn_def": "手動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done by hand",
        "cn_def": "手動的"
      },
      {
        "pos": "n.",
        "en_def": "a book of instructions",
        "cn_def": "手冊"
      }
    ]
  },
  "mature": {
    "pos": "v.",
    "en_def": "to grow and develop fully",
    "cn_def": "成熟",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to grow and develop fully",
        "cn_def": "成熟"
      },
      {
        "pos": "adj.",
        "en_def": "fully grown; behaving like an adult",
        "cn_def": "成熟的"
      }
    ]
  },
  "immature": {
    "pos": "adj.",
    "en_def": "behaving like a child",
    "cn_def": "不成熟的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "behaving like a child",
        "cn_def": "不成熟的"
      }
    ]
  },
  "maturity": {
    "pos": "n.",
    "en_def": "the state of being fully grown",
    "cn_def": "成熟度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being fully grown",
        "cn_def": "成熟度"
      }
    ]
  },
  "immaturity": {
    "pos": "n.",
    "en_def": "childish behavior",
    "cn_def": "不成熟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "childish behavior",
        "cn_def": "不成熟"
      }
    ]
  },
  "mediate": {
    "pos": "v.",
    "en_def": "to help two sides agree",
    "cn_def": "調解",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to help two sides agree",
        "cn_def": "調解"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
