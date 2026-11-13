// Part 4 Quiz Data: factor – involve
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 4 - factor – involve",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "factor",
    "pos": "n.",
    "cn_def": "因素",
    "en_def": "one of the things that cause a result",
    "sentence": "There are several {{BLANK}} that contributed to the success.",
    "cn": "有幾個因素促成了這次的成功。"
  },
  {
    "word": "finance",
    "pos": "n.",
    "cn_def": "財務",
    "en_def": "the management of money",
    "sentence": "He works in the field of {{BLANK}}.",
    "cn": "他在財務領域工作。"
  },
  {
    "word": "financial",
    "pos": "adj.",
    "cn_def": "財務的",
    "en_def": "about money",
    "sentence": "The company faced {{BLANK}} difficulties.",
    "cn": "該公司面臨財務困難。"
  },
  {
    "word": "formula",
    "pos": "n.",
    "cn_def": "公式",
    "en_def": "a rule written in letters, numbers or symbols",
    "sentence": "The scientist is working on a new chemical {{BLANK}}.",
    "cn": "科學家正在研究新的化學公式。"
  },
  {
    "word": "function",
    "pos": "n.",
    "cn_def": "功能",
    "en_def": "the job or purpose something has",
    "sentence": "The {{BLANK}} of the heart is to pump blood.",
    "cn": "心臟的功能是泵血。"
  },
  {
    "word": "functional",
    "pos": "adj.",
    "cn_def": "有功能的",
    "en_def": "useful and working well",
    "sentence": "This tool is both decorative and {{BLANK}}.",
    "cn": "這個工具既有裝飾性又有功能性。"
  },
  {
    "word": "identify",
    "pos": "v.",
    "cn_def": "識別",
    "en_def": "to recognize and name someone or something",
    "sentence": "She was able to {{BLANK}} the thief from a lineup.",
    "cn": "她能夠從一群人中識別出小偷。"
  },
  {
    "word": "identified",
    "pos": "adj.",
    "cn_def": "已識別的",
    "en_def": "recognized and named",
    "sentence": "The {{BLANK}} suspect was taken into custody.",
    "cn": "被識別的嫌疑犯被拘留。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身份",
    "en_def": "who or what a person is",
    "sentence": "He struggles with his cultural {{BLANK}}.",
    "cn": "他為自己的文化身份感到困惑。"
  },
  {
    "word": "identification",
    "pos": "n.",
    "cn_def": "身份識別",
    "en_def": "a document that shows who you are",
    "sentence": "Please show your {{BLANK}} at the checkpoint.",
    "cn": "請在檢查點出示您的身份證明。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入",
    "en_def": "money you get from work or investments",
    "sentence": "His annual {{BLANK}} has increased this year.",
    "cn": "他今年的年收入增加了。"
  },
  {
    "word": "indicate",
    "pos": "v.",
    "cn_def": "指示",
    "en_def": "to show or point to something",
    "sentence": "The signs {{BLANK}} the way to the emergency exit.",
    "cn": "標誌指示通往緊急出口的路。"
  },
  {
    "word": "indication",
    "pos": "n.",
    "cn_def": "跡象",
    "en_def": "a sign that something may happen or is true",
    "sentence": "The forecast gives an {{BLANK}} of rain tomorrow.",
    "cn": "天氣預報顯示明天有雨的跡象。"
  },
  {
    "word": "individual",
    "pos": "n.",
    "cn_def": "個體",
    "en_def": "a single person",
    "sentence": "Each {{BLANK}} has their own set of beliefs.",
    "cn": "每個個體都有自己的信仰體系。"
  },
  {
    "word": "individual",
    "pos": "adj.",
    "cn_def": "個別的",
    "en_def": "for each person or thing separately",
    "sentence": "They addressed {{BLANK}} concerns during the meeting.",
    "cn": "他們在會議上解決了個別的關注點。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "口譯",
    "en_def": "to change spoken words into another language",
    "sentence": "The role of the interpreter is to {{BLANK}} the speaker's words.",
    "cn": "口譯員的角色是解釋說話者的話。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "詮釋",
    "en_def": "to explain the meaning of something",
    "sentence": "She tried to {{BLANK}} the poem for the class.",
    "cn": "她試著為全班詮釋這首詩。"
  },
  {
    "word": "interpretation",
    "pos": "n.",
    "cn_def": "口譯；詮釋",
    "en_def": "the act of translating spoken words",
    "sentence": "She did the {{BLANK}} during the meeting.",
    "cn": "她在會議中進行了口譯"
  },
  {
    "word": "interpretation",
    "pos": "n.",
    "cn_def": "解釋",
    "en_def": "an explanation of the meaning of something",
    "sentence": "His {{BLANK}} of the painting was quite original.",
    "cn": "他對這幅畫的解釋非常獨特。"
  },
  {
    "word": "involve",
    "pos": "v.",
    "cn_def": "涉及",
    "en_def": "to include something as a necessary part",
    "sentence": "The project {{BLANK}} a lot of time and resources.",
    "cn": "該專案涉及大量時間和資源。"
  }
];

const MCQS = [
  {
    "q": "There are several ______ that contributed to the success.",
    "options": [
      "percent",
      "factor",
      "definition",
      "assessment"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "He works in the field of ______.",
    "options": [
      "section",
      "contract",
      "finance",
      "environment"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The company faced ______ difficulties.",
    "options": [
      "financial",
      "intricate",
      "creative",
      "identified"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The scientist is working on a new chemical ______.",
    "options": [
      "factor",
      "percentage",
      "authority",
      "formula"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The ______ of the heart is to pump blood.",
    "options": [
      "formula",
      "approach",
      "function",
      "policy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "This tool is both decorative and ______.",
    "options": [
      "major",
      "functional",
      "significant",
      "financial"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "She was able to ______ the thief from a lineup.",
    "options": [
      "interpret",
      "occur",
      "assess",
      "identify"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ______ suspect was taken into custody.",
    "options": [
      "identified",
      "various",
      "intricate",
      "legal"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "He struggles with his cultural ______.",
    "options": [
      "section",
      "contract",
      "identity",
      "proficiency"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Please show your ______ at the checkpoint.",
    "options": [
      "identification",
      "contract",
      "section",
      "creation"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "His annual ______ has increased this year.",
    "options": [
      "process",
      "occurrence",
      "percent",
      "income"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The signs ______ the way to the emergency exit.",
    "options": [
      "require",
      "indicate",
      "assess",
      "issue"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The forecast gives an ______ of rain tomorrow.",
    "options": [
      "authority",
      "requirement",
      "indication",
      "issue"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Each ______ has their own set of beliefs.",
    "options": [
      "percent",
      "environment",
      "consistency",
      "individual"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "They addressed ______ concerns during the meeting.",
    "options": [
      "economical",
      "individual",
      "required",
      "unauthorized"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The role of the interpreter is to ______ the speaker's words.",
    "options": [
      "interpret",
      "estimate",
      "establish",
      "create"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "She tried to ______ the poem for the class.",
    "options": [
      "identify",
      "interpret",
      "issue",
      "establish"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "She did the ______ during the meeting.",
    "options": [
      "interpretation",
      "distribution",
      "variable",
      "individual"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "His ______ of the painting was quite original.",
    "options": [
      "assumption",
      "legislator",
      "interpretation",
      "legislation"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The project ______ a lot of time and resources.",
    "options": [
      "occur",
      "research",
      "export",
      "involve"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "factor": {
    "pos": "n.",
    "en_def": "one of the things that cause a result",
    "cn_def": "因素",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of the things that cause a result",
        "cn_def": "因素"
      }
    ]
  },
  "finance": {
    "pos": "n.",
    "en_def": "the management of money",
    "cn_def": "財務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the management of money",
        "cn_def": "財務"
      }
    ]
  },
  "financial": {
    "pos": "adj.",
    "en_def": "about money",
    "cn_def": "財務的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about money",
        "cn_def": "財務的"
      }
    ]
  },
  "formula": {
    "pos": "n.",
    "en_def": "a rule written in letters, numbers or symbols",
    "cn_def": "公式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rule written in letters, numbers or symbols",
        "cn_def": "公式"
      }
    ]
  },
  "function": {
    "pos": "n.",
    "en_def": "the job or purpose something has",
    "cn_def": "功能",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the job or purpose something has",
        "cn_def": "功能"
      }
    ]
  },
  "functional": {
    "pos": "adj.",
    "en_def": "useful and working well",
    "cn_def": "有功能的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "useful and working well",
        "cn_def": "有功能的"
      }
    ]
  },
  "identify": {
    "pos": "v.",
    "en_def": "to recognize and name someone or something",
    "cn_def": "識別",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to recognize and name someone or something",
        "cn_def": "識別"
      }
    ]
  },
  "identified": {
    "pos": "adj.",
    "en_def": "recognized and named",
    "cn_def": "已識別的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "recognized and named",
        "cn_def": "已識別的"
      }
    ]
  },
  "identity": {
    "pos": "n.",
    "en_def": "who or what a person is",
    "cn_def": "身份",
    "combined": [
      {
        "pos": "n.",
        "en_def": "who or what a person is",
        "cn_def": "身份"
      }
    ]
  },
  "identification": {
    "pos": "n.",
    "en_def": "a document that shows who you are",
    "cn_def": "身份識別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a document that shows who you are",
        "cn_def": "身份識別"
      }
    ]
  },
  "income": {
    "pos": "n.",
    "en_def": "money you get from work or investments",
    "cn_def": "收入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money you get from work or investments",
        "cn_def": "收入"
      }
    ]
  },
  "indicate": {
    "pos": "v.",
    "en_def": "to show or point to something",
    "cn_def": "指示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show or point to something",
        "cn_def": "指示"
      }
    ]
  },
  "indication": {
    "pos": "n.",
    "en_def": "a sign that something may happen or is true",
    "cn_def": "跡象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sign that something may happen or is true",
        "cn_def": "跡象"
      }
    ]
  },
  "individual": {
    "pos": "n.",
    "en_def": "a single person",
    "cn_def": "個體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a single person",
        "cn_def": "個體"
      },
      {
        "pos": "adj.",
        "en_def": "for each person or thing separately",
        "cn_def": "個別的"
      }
    ]
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to change spoken words into another language",
    "cn_def": "口譯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change spoken words into another language",
        "cn_def": "口譯"
      },
      {
        "pos": "v.",
        "en_def": "to explain the meaning of something",
        "cn_def": "詮釋"
      }
    ]
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "the act of translating spoken words",
    "cn_def": "口譯；詮釋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of translating spoken words",
        "cn_def": "口譯；詮釋"
      },
      {
        "pos": "n.",
        "en_def": "an explanation of the meaning of something",
        "cn_def": "解釋"
      }
    ]
  },
  "involve": {
    "pos": "v.",
    "en_def": "to include something as a necessary part",
    "cn_def": "涉及",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to include something as a necessary part",
        "cn_def": "涉及"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
