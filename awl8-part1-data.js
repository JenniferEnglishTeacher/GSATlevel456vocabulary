// Part 1 Quiz Data: abandon – bias
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 8 Part 1 - abandon – bias",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "abandon",
    "pos": "v.",
    "cn_def": "放棄",
    "en_def": "to leave something forever",
    "sentence": "They had to {{BLANK}} their home due to the natural disaster.",
    "cn": "由於自然災害，他們不得不放棄他們的家。"
  },
  {
    "word": "abandoned",
    "pos": "adj.",
    "cn_def": "被遺棄的",
    "en_def": "left empty or alone forever",
    "sentence": "The {{BLANK}} building became a refuge for stray animals.",
    "cn": "被遺棄的建築成了流浪動物的避難所。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "公司",
    "en_def": "a business",
    "sentence": "He works for a {{BLANK}} that specializes in renewable energy.",
    "cn": "他在一家專門從事可再生能源的公司工作。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "陪伴",
    "en_def": "being with someone so they are not alone",
    "sentence": "She appreciated the {{BLANK}} of her friends during tough times.",
    "cn": "在困難時期，她感激朋友的陪伴。"
  },
  {
    "word": "accompany",
    "pos": "v.",
    "cn_def": "陪伴",
    "en_def": "to go somewhere with someone",
    "sentence": "He offered to {{BLANK}} her to the doctor's appointment.",
    "cn": "他提議陪她去看醫生。"
  },
  {
    "word": "accompanied",
    "pos": "adj.",
    "cn_def": "陪同的",
    "en_def": "having something come with it",
    "sentence": "The offer was {{BLANK}} by a promise of support.",
    "cn": "這個提議伴隨著支援的承諾。"
  },
  {
    "word": "keep someone company",
    "pos": "phr.",
    "cn_def": "陪伴某人",
    "en_def": "to stay with someone so they are not alone",
    "sentence": "She decided to {{BLANK}} her friend who was feeling down.",
    "cn": "她決定陪伴感覺沮喪的朋友。"
  },
  {
    "word": "companion",
    "pos": "n.",
    "cn_def": "伴侶",
    "en_def": "a person you spend time with",
    "sentence": "His dog has been a loyal {{BLANK}} for many years.",
    "cn": "多年來，他的狗一直是忠實的伴侶。"
  },
  {
    "word": "accumulate",
    "pos": "v.",
    "cn_def": "累積",
    "en_def": "to collect more and more over time",
    "sentence": "Over time, he managed to {{BLANK}} a significant amount of rare stamps in his collection.",
    "cn": "隨著時間的推移，他在他的收藏中累積了大量的珍稀郵票。"
  },
  {
    "word": "accumulated",
    "pos": "adj.",
    "cn_def": "累積的",
    "en_def": "collected over a period of time",
    "sentence": "The {{BLANK}} knowledge from years of study prepared him well for the project.",
    "cn": "多年學習的累積知識為他的項目做好了充分準備。"
  },
  {
    "word": "accumulation",
    "pos": "n.",
    "cn_def": "累積",
    "en_def": "an amount that has collected over time",
    "sentence": "The {{BLANK}} of plastic in the oceans is a serious environmental issue.",
    "cn": "塑料在海洋中的累積是一個嚴重的環境問題。"
  },
  {
    "word": "ambiguous",
    "pos": "adj.",
    "cn_def": "模稜兩可的",
    "en_def": "not clear; having more than one meaning",
    "sentence": "The instructions were {{BLANK}} and caused a lot of confusion among the team.",
    "cn": "指示不明確，使團隊中的很多人感到困惑。"
  },
  {
    "word": "appendix",
    "pos": "n.",
    "cn_def": "附錄",
    "en_def": "extra information at the end of a book",
    "sentence": "The book includes an {{BLANK}} with additional resources for further reading.",
    "cn": "這本書包括一個附錄，其中有進一步閱讀的額外資源。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激",
    "en_def": "to be thankful for something",
    "sentence": "I {{BLANK}} your help during this difficult time.",
    "cn": "我感激你在這困難時期的幫助。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "欣賞",
    "en_def": "to see how good or beautiful something is",
    "sentence": "She could {{BLANK}} the beauty of the artwork.",
    "cn": "她可以欣賞這件藝術品的美。"
  },
  {
    "word": "appreciation",
    "pos": "n.",
    "cn_def": "感激",
    "en_def": "the feeling of being thankful",
    "sentence": "His {{BLANK}} for the support from his family was evident.",
    "cn": "他對家人支持的感激之情顯而易見。"
  },
  {
    "word": "appreciation",
    "pos": "n.",
    "cn_def": "欣賞",
    "en_def": "understanding how good or beautiful something is",
    "sentence": "An {{BLANK}} of classical music can enhance one's cultural understanding.",
    "cn": "對古典音樂的欣賞可以增強一個人的文化理解。"
  },
  {
    "word": "arbitrary",
    "pos": "adj.",
    "cn_def": "任意的",
    "en_def": "chosen by chance, not by reason",
    "sentence": "The decision seemed {{BLANK}} and lacked a solid basis.",
    "cn": "這個決定似乎是任意的，缺乏堅實的依據。"
  },
  {
    "word": "automatic",
    "pos": "adj.",
    "cn_def": "自動的",
    "en_def": "working by itself",
    "sentence": "The {{BLANK}} doors opened as we approached the building.",
    "cn": "當我們走近大廈時，自動門打開了。"
  },
  {
    "word": "automatically",
    "pos": "adv.",
    "cn_def": "自動地",
    "en_def": "by itself, without a person",
    "sentence": "The system {{BLANK}} updates to ensure optimal performance.",
    "cn": "系統自動更新以確保最佳性能。"
  },
  {
    "word": "bias",
    "pos": "n.",
    "cn_def": "偏見",
    "en_def": "an unfair opinion for or against something",
    "sentence": "It's important to recognize and address any {{BLANK}} in the study.",
    "cn": "重要的是認識並解決研究中的任何偏見。"
  }
];

const MCQS = [
  {
    "q": "They had to ______ their home due to the natural disaster.",
    "options": [
      "chart",
      "contradict",
      "abandon",
      "denote"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The ______ building became a refuge for stray animals.",
    "options": [
      "visual",
      "tense",
      "dominant",
      "abandoned"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "He works for a ______ that specializes in renewable energy.",
    "options": [
      "company",
      "on exhibit",
      "deviate from",
      "at random"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "She appreciated the ______ of her friends during tough times.",
    "options": [
      "nuclear power plant",
      "company",
      "on exhibit",
      "deviate from"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "He offered to ______ her to the doctor's appointment.",
    "options": [
      "accompany",
      "revise",
      "detect",
      "terminate"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The offer was ______ by a promise of support.",
    "options": [
      "arbitrary",
      "accompanied",
      "fluctuated",
      "manipulative"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "She decided to ______ her friend who was feeling down.",
    "options": [
      "at random",
      "on schedule",
      "company",
      "keep someone company"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "His dog has been a loyal ______ for many years.",
    "options": [
      "schedule",
      "intensity",
      "companion",
      "prospect"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Over time, he managed to ______ a significant amount of rare stamps in his collection.",
    "options": [
      "unify",
      "accumulate",
      "accompany",
      "fluctuate"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The ______ knowledge from years of study prepared him well for the project.",
    "options": [
      "clear",
      "exploited",
      "minimised",
      "accumulated"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The ______ of plastic in the oceans is a serious environmental issue.",
    "options": [
      "deviation",
      "theme",
      "accumulation",
      "conformity"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The instructions were ______ and caused a lot of confusion among the team.",
    "options": [
      "ambiguous",
      "manipulative",
      "automatic",
      "abandoned"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The book includes an ______ with additional resources for further reading.",
    "options": [
      "offset",
      "currency",
      "detection",
      "appendix"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "I ______ your help during this difficult time.",
    "options": [
      "inspect",
      "appreciate",
      "highlight",
      "exhibit"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "She could ______ the beauty of the artwork.",
    "options": [
      "intensify",
      "accompany",
      "appreciate",
      "inspect"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "His ______ for the support from his family was evident.",
    "options": [
      "appreciation",
      "inspector",
      "fluctuation",
      "contradiction"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "An ______ of classical music can enhance one's cultural understanding.",
    "options": [
      "conformity",
      "appreciation",
      "vehicle",
      "accumulation"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The decision seemed ______ and lacked a solid basis.",
    "options": [
      "complement",
      "displaced",
      "arbitrary",
      "exploited"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The ______ doors opened as we approached the building.",
    "options": [
      "automatic",
      "highlighted",
      "tense",
      "detected"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The system ______ updates to ensure optimal performance.",
    "options": [
      "predominantly",
      "dramatically",
      "virtually",
      "automatically"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "It's important to recognize and address any ______ in the study.",
    "options": [
      "highlight",
      "intensity",
      "bias",
      "paragraph"
    ],
    "answer": 2,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "abandon": {
    "pos": "v.",
    "en_def": "to leave something forever",
    "cn_def": "放棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave something forever",
        "cn_def": "放棄"
      }
    ]
  },
  "abandoned": {
    "pos": "adj.",
    "en_def": "left empty or alone forever",
    "cn_def": "被遺棄的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "left empty or alone forever",
        "cn_def": "被遺棄的"
      }
    ]
  },
  "company": {
    "pos": "n.",
    "en_def": "a business",
    "cn_def": "公司",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a business",
        "cn_def": "公司"
      },
      {
        "pos": "n.",
        "en_def": "being with someone so they are not alone",
        "cn_def": "陪伴"
      }
    ]
  },
  "accompany": {
    "pos": "v.",
    "en_def": "to go somewhere with someone",
    "cn_def": "陪伴",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to go somewhere with someone",
        "cn_def": "陪伴"
      }
    ]
  },
  "accompanied": {
    "pos": "adj.",
    "en_def": "having something come with it",
    "cn_def": "陪同的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having something come with it",
        "cn_def": "陪同的"
      }
    ]
  },
  "keep someone company": {
    "pos": "phr.",
    "en_def": "to stay with someone so they are not alone",
    "cn_def": "陪伴某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stay with someone so they are not alone",
        "cn_def": "陪伴某人"
      }
    ]
  },
  "companion": {
    "pos": "n.",
    "en_def": "a person you spend time with",
    "cn_def": "伴侶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person you spend time with",
        "cn_def": "伴侶"
      }
    ]
  },
  "accumulate": {
    "pos": "v.",
    "en_def": "to collect more and more over time",
    "cn_def": "累積",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collect more and more over time",
        "cn_def": "累積"
      }
    ]
  },
  "accumulated": {
    "pos": "adj.",
    "en_def": "collected over a period of time",
    "cn_def": "累積的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "collected over a period of time",
        "cn_def": "累積的"
      }
    ]
  },
  "accumulation": {
    "pos": "n.",
    "en_def": "an amount that has collected over time",
    "cn_def": "累積",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount that has collected over time",
        "cn_def": "累積"
      }
    ]
  },
  "ambiguous": {
    "pos": "adj.",
    "en_def": "not clear; having more than one meaning",
    "cn_def": "模稜兩可的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not clear; having more than one meaning",
        "cn_def": "模稜兩可的"
      }
    ]
  },
  "appendix": {
    "pos": "n.",
    "en_def": "extra information at the end of a book",
    "cn_def": "附錄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "extra information at the end of a book",
        "cn_def": "附錄"
      }
    ]
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something",
    "cn_def": "感激",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be thankful for something",
        "cn_def": "感激"
      },
      {
        "pos": "v.",
        "en_def": "to see how good or beautiful something is",
        "cn_def": "欣賞"
      }
    ]
  },
  "appreciation": {
    "pos": "n.",
    "en_def": "the feeling of being thankful",
    "cn_def": "感激",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the feeling of being thankful",
        "cn_def": "感激"
      },
      {
        "pos": "n.",
        "en_def": "understanding how good or beautiful something is",
        "cn_def": "欣賞"
      }
    ]
  },
  "arbitrary": {
    "pos": "adj.",
    "en_def": "chosen by chance, not by reason",
    "cn_def": "任意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "chosen by chance, not by reason",
        "cn_def": "任意的"
      }
    ]
  },
  "automatic": {
    "pos": "adj.",
    "en_def": "working by itself",
    "cn_def": "自動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "working by itself",
        "cn_def": "自動的"
      }
    ]
  },
  "automatically": {
    "pos": "adv.",
    "en_def": "by itself, without a person",
    "cn_def": "自動地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "by itself, without a person",
        "cn_def": "自動地"
      }
    ]
  },
  "bias": {
    "pos": "n.",
    "en_def": "an unfair opinion for or against something",
    "cn_def": "偏見",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unfair opinion for or against something",
        "cn_def": "偏見"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
