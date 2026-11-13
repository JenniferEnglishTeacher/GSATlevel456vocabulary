// Part 2 Quiz Data: benefit – derive from = originate from
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 2 - benefit – derive from = originate from",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "好處",
    "en_def": "a good or helpful result",
    "sentence": "The {{BLANK}} of exercising regularly are numerous.",
    "cn": "定期鍛煉的好處很多。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的",
    "en_def": "helpful; having a good effect",
    "sentence": "It's {{BLANK}} to take breaks when studying for long periods.",
    "cn": "長時間學習時，休息是有益的。"
  },
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "a general idea",
    "sentence": "The {{BLANK}} of freedom varies from culture to culture.",
    "cn": "自由的概念因文化而異。"
  },
  {
    "word": "consist of",
    "pos": "v.",
    "cn_def": "由...組成",
    "en_def": "to be made up of certain parts",
    "sentence": "The team {{BLANK}} experts from different fields.",
    "cn": "該團隊由來自不同領域的專家組成。"
  },
  {
    "word": "consistent",
    "pos": "adj.",
    "cn_def": "一致的",
    "en_def": "always the same; not changing",
    "sentence": "Her performance has been {{BLANK}} throughout the year.",
    "cn": "她的表現在整個年度都是一致的。"
  },
  {
    "word": "consistency",
    "pos": "n.",
    "cn_def": "一致性",
    "en_def": "the quality of always being the same",
    "sentence": "There's a lack of {{BLANK}} in his arguments.",
    "cn": "他的論點缺乏一致性。"
  },
  {
    "word": "constitution",
    "pos": "n.",
    "cn_def": "憲法",
    "en_def": "the basic laws of a country",
    "sentence": "The country's {{BLANK}} guarantees freedom of speech.",
    "cn": "該國的憲法保障言論自由。"
  },
  {
    "word": "constitutional",
    "pos": "adj.",
    "cn_def": "憲法的",
    "en_def": "allowed by or about a constitution",
    "sentence": "This law may be a {{BLANK}} violation.",
    "cn": "這項法律可能違反憲法。"
  },
  {
    "word": "context",
    "pos": "n.",
    "cn_def": "上下文",
    "en_def": "the situation or words around something",
    "sentence": "In this {{BLANK}}, the word has a different meaning.",
    "cn": "在這個上下文中，這個詞有不同的意思。"
  },
  {
    "word": "contextual",
    "pos": "adj.",
    "cn_def": "與上下文有關的",
    "en_def": "related to the situation or words around something",
    "sentence": "{{BLANK}} information is essential for understanding the statement.",
    "cn": "與上下文相關的資訊對於理解聲明至關重要。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合同",
    "en_def": "a written legal agreement",
    "sentence": "They signed a {{BLANK}} for the sale of the house.",
    "cn": "他們簽了一個出售房子的合同。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創建",
    "en_def": "to make something new",
    "sentence": "Artists {{BLANK}} works that reflect their emotions and ideas.",
    "cn": "藝術家創建反映他們的情感和想法的作品。"
  },
  {
    "word": "creation",
    "pos": "n.",
    "cn_def": "創作",
    "en_def": "something new that someone makes",
    "sentence": "The sculpture is this world-renowned artist's latest {{BLANK}}.",
    "cn": "這座雕塑是這位世界知名藝術家的最新創作。"
  },
  {
    "word": "creature",
    "pos": "n.",
    "cn_def": "生物",
    "en_def": "any living animal",
    "sentence": "The forest is home to many unique {{BLANK}}.",
    "cn": "森林是許多獨特生物的家。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創造力的",
    "en_def": "good at thinking of new ideas",
    "sentence": "She's a very {{BLANK}} designer with innovative concepts.",
    "cn": "她是一個非常有創造力的設計師，有很創新的概念。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the ability to make new and original things",
    "sentence": "Innovation requires {{BLANK}}.",
    "cn": "創新需要創造力。"
  },
  {
    "word": "data",
    "pos": "n.",
    "cn_def": "數據",
    "en_def": "facts or numbers collected to study",
    "sentence": "The {{BLANK}} collected will be used for further research.",
    "cn": "收集的資料將用於進一步的研究。"
  },
  {
    "word": "define",
    "pos": "v.",
    "cn_def": "定義",
    "en_def": "to explain exactly what something means",
    "sentence": "How do you {{BLANK}} success?",
    "cn": "你如何定義成功？"
  },
  {
    "word": "definition",
    "pos": "n.",
    "cn_def": "定義",
    "en_def": "a sentence that explains what a word means",
    "sentence": "The dictionary provides a clear {{BLANK}} of each word.",
    "cn": "字典為每個詞提供了清晰的定義。"
  },
  {
    "word": "derives from",
    "pos": "v.",
    "cn_def": "來源於",
    "en_def": "to come from something",
    "sentence": "The word \"piano\" {{BLANK}} the Italian language.",
    "cn": "“鋼琴”一詞來源於義大利語。"
  }
];

const MCQS = [
  {
    "q": "The ______ of exercising regularly are numerous.",
    "options": [
      "significance",
      "benefit",
      "legislator",
      "individual"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "It's ______ to take breaks when studying for long periods.",
    "options": [
      "established",
      "exported",
      "proficient",
      "beneficial"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of freedom varies from culture to culture.",
    "options": [
      "concept",
      "proficiency",
      "researcher",
      "sector"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The team ______ experts from different fields.",
    "options": [
      "play a significant role",
      "It is estimated that",
      "consist of",
      "be derived from"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Her performance has been ______ throughout the year.",
    "options": [
      "theoretical",
      "consistent",
      "beneficial",
      "economic"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "There's a lack of ______ in his arguments.",
    "options": [
      "section",
      "identification",
      "variable",
      "consistency"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The country's ______ guarantees freedom of speech.",
    "options": [
      "requirement",
      "distribution",
      "constitution",
      "theory"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "This law may be a ______ violation.",
    "options": [
      "constitutional",
      "illegal",
      "economical",
      "unauthorized"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "In this ______, the word has a different meaning.",
    "options": [
      "percent",
      "distribution",
      "labor",
      "context"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "______ information is essential for understanding the statement.",
    "options": [
      "economical",
      "major",
      "contextual",
      "unauthorized"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "They signed a ______ for the sale of the house.",
    "options": [
      "indication",
      "contract",
      "factor",
      "individual"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Artists ______ works that reflect their emotions and ideas.",
    "options": [
      "create",
      "authorize",
      "estimate",
      "establish"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The sculpture is this world-renowned artist's latest ______.",
    "options": [
      "percentage",
      "source",
      "creation",
      "resource"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The forest is home to many unique ______.",
    "options": [
      "creature",
      "context",
      "creation",
      "issue"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "She's a very ______ designer with innovative concepts.",
    "options": [
      "specific",
      "creative",
      "authorized",
      "theoretical"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Innovation requires ______.",
    "options": [
      "authority",
      "legislation",
      "interpretation",
      "creativity"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The ______ collected will be used for further research.",
    "options": [
      "data",
      "creativity",
      "contract",
      "benefit"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "How do you ______ success?",
    "options": [
      "occur",
      "authorize",
      "distribute",
      "define"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The dictionary provides a clear ______ of each word.",
    "options": [
      "factor",
      "occurrence",
      "definition",
      "concept"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The word \"piano\" ______ the Italian language.",
    "options": [
      "in response to",
      "derive from",
      "make a response to N",
      "play a significant role"
    ],
    "answer": 1,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "benefit": {
    "pos": "n.",
    "en_def": "a good or helpful result",
    "cn_def": "好處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a good or helpful result",
        "cn_def": "好處"
      }
    ]
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "helpful; having a good effect",
    "cn_def": "有益的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "helpful; having a good effect",
        "cn_def": "有益的"
      }
    ]
  },
  "concept": {
    "pos": "n.",
    "en_def": "a general idea",
    "cn_def": "概念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general idea",
        "cn_def": "概念"
      }
    ]
  },
  "consist of": {
    "pos": "v.",
    "en_def": "to be made up of certain parts",
    "cn_def": "由...組成",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be made up of certain parts",
        "cn_def": "由...組成"
      }
    ]
  },
  "consistent": {
    "pos": "adj.",
    "en_def": "always the same; not changing",
    "cn_def": "一致的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "always the same; not changing",
        "cn_def": "一致的"
      }
    ]
  },
  "consistency": {
    "pos": "n.",
    "en_def": "the quality of always being the same",
    "cn_def": "一致性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of always being the same",
        "cn_def": "一致性"
      }
    ]
  },
  "constitution": {
    "pos": "n.",
    "en_def": "the basic laws of a country",
    "cn_def": "憲法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the basic laws of a country",
        "cn_def": "憲法"
      }
    ]
  },
  "constitutional": {
    "pos": "adj.",
    "en_def": "allowed by or about a constitution",
    "cn_def": "憲法的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "allowed by or about a constitution",
        "cn_def": "憲法的"
      }
    ]
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or words around something",
    "cn_def": "上下文",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the situation or words around something",
        "cn_def": "上下文"
      }
    ]
  },
  "contextual": {
    "pos": "adj.",
    "en_def": "related to the situation or words around something",
    "cn_def": "與上下文有關的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "related to the situation or words around something",
        "cn_def": "與上下文有關的"
      }
    ]
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written legal agreement",
    "cn_def": "合同",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a written legal agreement",
        "cn_def": "合同"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創建",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something new",
        "cn_def": "創建"
      }
    ]
  },
  "creation": {
    "pos": "n.",
    "en_def": "something new that someone makes",
    "cn_def": "創作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something new that someone makes",
        "cn_def": "創作"
      }
    ]
  },
  "creature": {
    "pos": "n.",
    "en_def": "any living animal",
    "cn_def": "生物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any living animal",
        "cn_def": "生物"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new ideas",
    "cn_def": "有創造力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "good at thinking of new ideas",
        "cn_def": "有創造力的"
      }
    ]
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to make new and original things",
        "cn_def": "創造力"
      }
    ]
  },
  "data": {
    "pos": "n.",
    "en_def": "facts or numbers collected to study",
    "cn_def": "數據",
    "combined": [
      {
        "pos": "n.",
        "en_def": "facts or numbers collected to study",
        "cn_def": "數據"
      }
    ]
  },
  "define": {
    "pos": "v.",
    "en_def": "to explain exactly what something means",
    "cn_def": "定義",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to explain exactly what something means",
        "cn_def": "定義"
      }
    ]
  },
  "definition": {
    "pos": "n.",
    "en_def": "a sentence that explains what a word means",
    "cn_def": "定義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sentence that explains what a word means",
        "cn_def": "定義"
      }
    ]
  },
  "derives from": {
    "pos": "v.",
    "en_def": "to come from something",
    "cn_def": "來源於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come from something",
        "cn_def": "來源於"
      }
    ]
  },
  "derive from = originate from": {
    "pos": "v.",
    "en_def": "to come from something",
    "cn_def": "來源於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come from something",
        "cn_def": "來源於"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
