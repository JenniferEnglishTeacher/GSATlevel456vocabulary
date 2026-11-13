// Part 1 Quiz Data: analyze – benefit
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 1 - analyze – benefit",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "analyze",
    "pos": "v.",
    "cn_def": "分析",
    "en_def": "to study something carefully to understand it",
    "sentence": "After examining the data, he needs to {{BLANK}} the results for trends.",
    "cn": "在檢查資料後，他需要分析趨勢結果。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something to understand it",
    "sentence": "His {{BLANK}} of the novel was insightful and thorough.",
    "cn": "他對小說的分析既有洞見又全面。"
  },
  {
    "word": "analytical",
    "pos": "adj.",
    "cn_def": "分析的",
    "en_def": "good at studying things carefully and logically",
    "sentence": "She has an {{BLANK}} mind, always breaking problems down.",
    "cn": "她有分析的頭腦，總是分解問題。"
  },
  {
    "word": "approach",
    "pos": "v.",
    "cn_def": "靠近，處理",
    "en_def": "to start dealing with a task or job",
    "sentence": "As the deadline neared, he began to {{BLANK}} the task with more urgency.",
    "cn": "隨著截止日期的臨近，他開始更緊迫地處理這項任務。"
  },
  {
    "word": "approach",
    "pos": "n.",
    "cn_def": "方法",
    "en_def": "a way of doing or dealing with something",
    "sentence": "The new {{BLANK}} to teaching has received mixed feedback.",
    "cn": "新的教學方法收到了不同的回饋。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合約",
    "en_def": "a written legal agreement",
    "sentence": "After lengthy negotiations, the two companies finally signed a {{BLANK}}.",
    "cn": "經過冗長的談判，這兩家公司終於簽署了一份合約。"
  },
  {
    "word": "contract",
    "pos": "v.",
    "cn_def": "簽訂",
    "en_def": "to make a legal agreement to do work",
    "sentence": "The artist will {{BLANK}} with a new gallery for her upcoming exhibition.",
    "cn": "藝術家將與一家新畫廊簽訂合約，為她即將到來的展覽做準備。"
  },
  {
    "word": "area",
    "pos": "n.",
    "cn_def": "區域",
    "en_def": "a part of a place, town or country",
    "sentence": "The {{BLANK}} around the river is known for its rich biodiversity.",
    "cn": "河流周圍的區域以其豐富的生物多樣性而著稱。"
  },
  {
    "word": "assess",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge how good, bad or important something is",
    "sentence": "It's important to {{BLANK}} the risks before making a decision.",
    "cn": "在做決定之前，評估風險非常重要。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評估",
    "en_def": "a judgment of how good or bad something is",
    "sentence": "The teacher's {{BLANK}} of the student's work was fair.",
    "cn": "老師對學生的工作的評估是公正的。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假設",
    "en_def": "to think something is true without proof",
    "sentence": "We cannot {{BLANK}} that everyone agrees with this perspective that gender is binary.",
    "cn": "我們不能假設每個人都同意性別二元論這種觀點。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假設",
    "en_def": "something you think is true without proof",
    "sentence": "Under the {{BLANK}} of constant growth in AI, the company invested heavily in data mining and statistic analysis.",
    "cn": "在AI持續增長的假設下，公司大舉投資在數據挖掘與數據分析。"
  },
  {
    "word": "authorize",
    "pos": "v.",
    "cn_def": "授權",
    "en_def": "to give official permission for something",
    "sentence": "Only the director can {{BLANK}} such a large expenditure.",
    "cn": "只有總監可以授權這麼大的開支。"
  },
  {
    "word": "authorized",
    "pos": "adj.",
    "cn_def": "已授權的",
    "en_def": "having official permission",
    "sentence": "This is an {{BLANK}} biography, written with the subject's input.",
    "cn": "這是一部已授權的傳記，是在當事人的參與下寫的。"
  },
  {
    "word": "unauthorized",
    "pos": "adj.",
    "cn_def": "未經授權的",
    "en_def": "done without official permission",
    "sentence": "{{BLANK}} access to the building is strictly prohibited.",
    "cn": "嚴禁未經授權進入該建築。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權威",
    "en_def": "an expert on a subject",
    "sentence": "She's an {{BLANK}} on medieval history.",
    "cn": "她是中世紀歷史的權威。"
  },
  {
    "word": "the authorities",
    "pos": "n.",
    "cn_def": "當局",
    "en_def": "the police or government groups in charge",
    "sentence": "{{BLANK}} have issued a warning about the storm.",
    "cn": "當局已就暴風雨發出警告。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可用的",
    "en_def": "free to use, buy or get",
    "sentence": "Are there any tickets {{BLANK}} for the concert?",
    "cn": "音樂會還有票嗎？"
  },
  {
    "word": "benefit from",
    "pos": "v.",
    "cn_def": "人從事務中受益",
    "en_def": "to get something good from something",
    "sentence": "Many students {{BLANK}} extra tutoring.",
    "cn": "許多學生從額外的輔導中受益。"
  },
  {
    "word": "benefit",
    "pos": "v.",
    "cn_def": "事務造福人",
    "en_def": "to be good or helpful for someone",
    "sentence": "The extra tutoring {{BLANK}} many students who struggle to learn a foreign language.",
    "cn": "額外的輔導造福許多在學習外語方面遇到困難的學生。"
  }
];

const MCQS = [
  {
    "q": "After examining the data, he needs to ______ the results for trends.",
    "options": [
      "analyze",
      "indicate",
      "establish",
      "issue"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "His ______ of the novel was insightful and thorough.",
    "options": [
      "context",
      "finance",
      "analysis",
      "procedure"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "She has an ______ mind, always breaking problems down.",
    "options": [
      "legal",
      "analytical",
      "various",
      "identified"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "As the deadline neared, he began to ______ the task with more urgency.",
    "options": [
      "It is estimated that",
      "major in",
      "consist of",
      "approach a task/mission"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new ______ to teaching has received mixed feedback.",
    "options": [
      "identification",
      "approach",
      "creature",
      "interpretation"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "After lengthy negotiations, the two companies finally signed a ______.",
    "options": [
      "indication",
      "research",
      "contract",
      "data"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The artist will ______ with a new gallery for her upcoming exhibition.",
    "options": [
      "contract",
      "establish",
      "occur",
      "analyze"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The ______ around the river is known for its rich biodiversity.",
    "options": [
      "definition",
      "authority",
      "source",
      "area"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "It's important to ______ the risks before making a decision.",
    "options": [
      "import",
      "require",
      "assess",
      "occur"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The teacher's ______ of the student's work was fair.",
    "options": [
      "method",
      "economy",
      "labor",
      "assessment"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "We cannot ______ that everyone agrees with this perspective that gender is binary.",
    "options": [
      "assume",
      "export",
      "create",
      "occur"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Under the ______ of constant growth in AI, the company invested heavily in data mining and statistic analysis.",
    "options": [
      "economics",
      "assumption",
      "legislator",
      "process"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Only the director can ______ such a large expenditure.",
    "options": [
      "authorize",
      "define",
      "distribute",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "This is an ______ biography, written with the subject's input.",
    "options": [
      "legal",
      "consistent",
      "authorized",
      "significant"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "______ access to the building is strictly prohibited.",
    "options": [
      "various",
      "unauthorized",
      "estimated",
      "identified"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "She's an ______ on medieval history.",
    "options": [
      "legislator",
      "structure",
      "laborer",
      "authority"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "______ have issued a warning about the storm.",
    "options": [
      "benefit",
      "in response to",
      "the authorities",
      "play a significant role"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Are there any tickets ______ for the concert?",
    "options": [
      "creative",
      "available",
      "estimated",
      "structural"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Many students ______ extra tutoring.",
    "options": [
      "benefit from",
      "play a significant role",
      "consist of",
      "the authorities"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The extra tutoring ______ many students who struggle to learn a foreign language.",
    "options": [
      "be involved in",
      "make a response to N",
      "consist of",
      "benefit"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "analyze": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to study something carefully to understand it",
        "cn_def": "分析"
      }
    ]
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a careful study of something to understand it",
        "cn_def": "分析"
      }
    ]
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "good at studying things carefully and logically",
    "cn_def": "分析的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "good at studying things carefully and logically",
        "cn_def": "分析的"
      }
    ]
  },
  "approach a task/mission": {
    "pos": "v.",
    "en_def": "to start dealing with a task or job",
    "cn_def": "靠近，處理",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to start dealing with a task or job",
        "cn_def": "靠近，處理"
      }
    ]
  },
  "approach": {
    "pos": "v.",
    "en_def": "to start dealing with a task or job",
    "cn_def": "靠近，處理",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to start dealing with a task or job",
        "cn_def": "靠近，處理"
      },
      {
        "pos": "n.",
        "en_def": "a way of doing or dealing with something",
        "cn_def": "方法"
      }
    ]
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written legal agreement",
    "cn_def": "合約",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a written legal agreement",
        "cn_def": "合約"
      },
      {
        "pos": "v.",
        "en_def": "to make a legal agreement to do work",
        "cn_def": "簽訂"
      }
    ]
  },
  "area": {
    "pos": "n.",
    "en_def": "a part of a place, town or country",
    "cn_def": "區域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of a place, town or country",
        "cn_def": "區域"
      }
    ]
  },
  "assess": {
    "pos": "v.",
    "en_def": "to judge how good, bad or important something is",
    "cn_def": "評估",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to judge how good, bad or important something is",
        "cn_def": "評估"
      }
    ]
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a judgment of how good or bad something is",
    "cn_def": "評估",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a judgment of how good or bad something is",
        "cn_def": "評估"
      }
    ]
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without proof",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think something is true without proof",
        "cn_def": "假設"
      }
    ]
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you think is true without proof",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you think is true without proof",
        "cn_def": "假設"
      }
    ]
  },
  "authorize": {
    "pos": "v.",
    "en_def": "to give official permission for something",
    "cn_def": "授權",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give official permission for something",
        "cn_def": "授權"
      }
    ]
  },
  "authorized": {
    "pos": "adj.",
    "en_def": "having official permission",
    "cn_def": "已授權的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having official permission",
        "cn_def": "已授權的"
      }
    ]
  },
  "unauthorized": {
    "pos": "adj.",
    "en_def": "done without official permission",
    "cn_def": "未經授權的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done without official permission",
        "cn_def": "未經授權的"
      }
    ]
  },
  "authority": {
    "pos": "n.",
    "en_def": "an expert on a subject",
    "cn_def": "權威",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an expert on a subject",
        "cn_def": "權威"
      }
    ]
  },
  "the authorities": {
    "pos": "n.",
    "en_def": "the police or government groups in charge",
    "cn_def": "當局",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the police or government groups in charge",
        "cn_def": "當局"
      }
    ]
  },
  "available": {
    "pos": "adj.",
    "en_def": "free to use, buy or get",
    "cn_def": "可用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "free to use, buy or get",
        "cn_def": "可用的"
      }
    ]
  },
  "benefit from": {
    "pos": "v.",
    "en_def": "to get something good from something",
    "cn_def": "人從事務中受益",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to get something good from something",
        "cn_def": "人從事務中受益"
      }
    ]
  },
  "benefit": {
    "pos": "v.",
    "en_def": "to be good or helpful for someone",
    "cn_def": "事務造福人",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be good or helpful for someone",
        "cn_def": "事務造福人"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
