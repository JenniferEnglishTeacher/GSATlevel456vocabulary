// Part 4 Quiz Data: invest in – previous
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 2 Part 4 - invest in – previous",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "invest in",
    "pos": "phr",
    "cn_def": "投資於",
    "en_def": "to put money into something to make a profit",
    "sentence": "It's wise to {{BLANK}} renewable energy now.",
    "cn": "現在投資于可再生能源是明智的。"
  },
  {
    "word": "investment in",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money put into something to make a profit",
    "sentence": "The initial {{BLANK}} infrastructure was high, but it paid off.",
    "cn": "最初在基礎項目的投資很高，但它得到了回報。"
  },
  {
    "word": "item",
    "pos": "n.",
    "cn_def": "項目",
    "en_def": "one thing in a list or group",
    "sentence": "Each {{BLANK}} on the list must be checked.",
    "cn": "列表上的每一項都必須被檢查。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "期刊",
    "en_def": "a magazine about a special subject",
    "sentence": "He published his findings in a scientific {{BLANK}}.",
    "cn": "他在一本科學期刊上發表了他的研究結果。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "雜誌",
    "en_def": "a magazine",
    "sentence": "She reads that fashion {{BLANK}} every month.",
    "cn": "她每個月都讀那本時尚雜誌。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維護",
    "en_def": "to keep something in good condition",
    "sentence": "It's important to {{BLANK}} a balanced diet.",
    "cn": "保持均衡飲食很重要。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維護",
    "en_def": "the work of keeping something in good condition",
    "sentence": "The machine requires regular {{BLANK}}.",
    "cn": "機器需要定期維護。"
  },
  {
    "word": "normal",
    "pos": "adj.",
    "cn_def": "正常的",
    "en_def": "usual or ordinary",
    "sentence": "It's {{BLANK}} to feel nervous before an exam.",
    "cn": "考試前感到緊張是正常的。"
  },
  {
    "word": "abnormal",
    "pos": "adj.",
    "cn_def": "不正常的",
    "en_def": "not normal; unusual",
    "sentence": "His behavior was considered {{BLANK}} by many.",
    "cn": "他的行為被許多人認為是不正常的。"
  },
  {
    "word": "anomaly",
    "pos": "n.",
    "cn_def": "異常",
    "en_def": "something that is different from what is normal",
    "sentence": "The scientist noticed an {{BLANK}} in the data.",
    "cn": "科學家注意到資料中的一個異常。"
  },
  {
    "word": "obtain",
    "pos": "v.",
    "cn_def": "獲得",
    "en_def": "to get something",
    "sentence": "She managed to {{BLANK}} rare manuscripts for her research.",
    "cn": "她設法為她的研究獲得了罕見的手稿。"
  },
  {
    "word": "obtained",
    "pos": "adj.",
    "cn_def": "已獲得的",
    "en_def": "gotten; received",
    "sentence": "The {{BLANK}} results were promising.",
    "cn": "已獲得的結果很有希望。"
  },
  {
    "word": "participate in",
    "pos": "phr",
    "cn_def": "參與",
    "en_def": "to take part in an activity",
    "sentence": "She decided to {{BLANK}} the marathon.",
    "cn": "她決定參加馬拉松。"
  },
  {
    "word": "participation",
    "pos": "n.",
    "cn_def": "參與",
    "en_def": "taking part in an activity",
    "sentence": "Active {{BLANK}} in class is crucial for understanding the material.",
    "cn": "積極參與課堂對理解材料至關重要。"
  },
  {
    "word": "perceive",
    "pos": "v.",
    "cn_def": "感知",
    "en_def": "to notice or understand something",
    "sentence": "Some animals can {{BLANK}} ultrasonic sounds.",
    "cn": "一些動物可以感知超聲波。"
  },
  {
    "word": "perceived",
    "pos": "adj.",
    "cn_def": "感知到的",
    "en_def": "seen or understood in a certain way",
    "sentence": "His {{BLANK}} threats turned out to be harmless.",
    "cn": "他感知到的威脅結果是無害的。"
  },
  {
    "word": "perception",
    "pos": "n.",
    "cn_def": "感知",
    "en_def": "the way you see or understand something",
    "sentence": "Beauty lies in the {{BLANK}} of the beholder.",
    "cn": "美在觀察者的感知中。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "積極正面的",
    "en_def": "good, hopeful or helpful",
    "sentence": "She always has a {{BLANK}} attitude towards life.",
    "cn": "她對生活總是持有積極的態度。"
  },
  {
    "word": "negative",
    "pos": "adj.",
    "cn_def": "消極負面的",
    "en_def": "bad or harmful; not hopeful",
    "sentence": "His {{BLANK}} feedback was taken into consideration.",
    "cn": "他的消極回饋被考慮在內。"
  },
  {
    "word": "potential",
    "pos": "adj.",
    "cn_def": "潛在的",
    "en_def": "possible in the future",
    "sentence": "There are {{BLANK}} risks involved.",
    "cn": "這其中涉及潛在的風險。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力",
    "en_def": "the ability to become good in the future",
    "sentence": "The young athlete showed great {{BLANK}} in the tryouts.",
    "cn": "年輕的運動員在試訓中表現出了很大的潛力。"
  },
  {
    "word": "previous",
    "pos": "adj.",
    "cn_def": "之前的",
    "en_def": "happening before",
    "sentence": "Please refer to the {{BLANK}} email for more details.",
    "cn": "請參考之前的電子郵件以獲取更多詳細資訊。"
  }
];

const MCQS = [
  {
    "q": "It's wise to ______ renewable energy now.",
    "options": [
      "invest in",
      "have a... impact on",
      "remain/stay focused",
      "range from...to.."
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The initial ______ infrastructure was high, but it paid off.",
    "options": [
      "range from...to..",
      "participate in",
      "investment in",
      "construction site"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Each ______ on the list must be checked.",
    "options": [
      "survey",
      "item",
      "regulation",
      "perception"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "He published his findings in a scientific ______.",
    "options": [
      "feature",
      "maintenance",
      "complication",
      "journal"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "She reads that fashion ______ every month.",
    "options": [
      "journal",
      "strategy",
      "participation",
      "evaluation"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "It's important to ______ a balanced diet.",
    "options": [
      "feature",
      "text",
      "maintain",
      "affect"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The machine requires regular ______.",
    "options": [
      "culture",
      "transfer",
      "computer",
      "maintenance"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "It's ______ to feel nervous before an exam.",
    "options": [
      "distinct",
      "normal",
      "complex",
      "resourceful"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "His behavior was considered ______ by many.",
    "options": [
      "final",
      "perceived",
      "abnormal",
      "computerized"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The scientist noticed an ______ in the data.",
    "options": [
      "anomaly",
      "effect",
      "credit",
      "text"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "She managed to ______ rare manuscripts for her research.",
    "options": [
      "injure",
      "finalize",
      "affect",
      "obtain"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The ______ results were promising.",
    "options": [
      "normal",
      "obtained",
      "administrative",
      "negative"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "She decided to ______ the marathon.",
    "options": [
      "investment in",
      "human and natural resources",
      "participate in",
      "in conclusion"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Active ______ in class is crucial for understanding the material.",
    "options": [
      "restriction",
      "acquisition",
      "tradition",
      "participation"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Some animals can ______ ultrasonic sounds.",
    "options": [
      "assist",
      "perceive",
      "impact",
      "affect"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "His ______ threats turned out to be harmless.",
    "options": [
      "perceived",
      "appropriate",
      "normal",
      "restricted"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Beauty lies in the ______ of the beholder.",
    "options": [
      "complex",
      "perception",
      "strategy",
      "equation"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "She always has a ______ attitude towards life.",
    "options": [
      "positive",
      "administrative",
      "computerized",
      "appropriate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "His ______ feedback was taken into consideration.",
    "options": [
      "residential",
      "cultural",
      "computerized",
      "negative"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "There are ______ risks involved.",
    "options": [
      "restricted",
      "computerized",
      "potential",
      "appropriate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The young athlete showed great ______ in the tryouts.",
    "options": [
      "acquisition",
      "potential",
      "resource",
      "tradition"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Please refer to the ______ email for more details.",
    "options": [
      "computerized",
      "cultural",
      "positive",
      "previous"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "invest in": {
    "pos": "phr",
    "en_def": "to put money into something to make a profit",
    "cn_def": "投資於",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to put money into something to make a profit",
        "cn_def": "投資於"
      }
    ]
  },
  "investment in": {
    "pos": "n.",
    "en_def": "money put into something to make a profit",
    "cn_def": "投資",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money put into something to make a profit",
        "cn_def": "投資"
      }
    ]
  },
  "item": {
    "pos": "n.",
    "en_def": "one thing in a list or group",
    "cn_def": "項目",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one thing in a list or group",
        "cn_def": "項目"
      }
    ]
  },
  "journal": {
    "pos": "n.",
    "en_def": "a magazine about a special subject",
    "cn_def": "期刊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a magazine about a special subject",
        "cn_def": "期刊"
      },
      {
        "pos": "n.",
        "en_def": "a magazine",
        "cn_def": "雜誌"
      }
    ]
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "維護",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep something in good condition",
        "cn_def": "維護"
      }
    ]
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping something in good condition",
    "cn_def": "維護",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the work of keeping something in good condition",
        "cn_def": "維護"
      }
    ]
  },
  "normal": {
    "pos": "adj.",
    "en_def": "usual or ordinary",
    "cn_def": "正常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "usual or ordinary",
        "cn_def": "正常的"
      }
    ]
  },
  "abnormal": {
    "pos": "adj.",
    "en_def": "not normal; unusual",
    "cn_def": "不正常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not normal; unusual",
        "cn_def": "不正常的"
      }
    ]
  },
  "anomaly": {
    "pos": "n.",
    "en_def": "something that is different from what is normal",
    "cn_def": "異常",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is different from what is normal",
        "cn_def": "異常"
      }
    ]
  },
  "obtain": {
    "pos": "v.",
    "en_def": "to get something",
    "cn_def": "獲得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to get something",
        "cn_def": "獲得"
      }
    ]
  },
  "obtained": {
    "pos": "adj.",
    "en_def": "gotten; received",
    "cn_def": "已獲得的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "gotten; received",
        "cn_def": "已獲得的"
      }
    ]
  },
  "participate in": {
    "pos": "phr",
    "en_def": "to take part in an activity",
    "cn_def": "參與",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to take part in an activity",
        "cn_def": "參與"
      }
    ]
  },
  "participation": {
    "pos": "n.",
    "en_def": "taking part in an activity",
    "cn_def": "參與",
    "combined": [
      {
        "pos": "n.",
        "en_def": "taking part in an activity",
        "cn_def": "參與"
      }
    ]
  },
  "perceive": {
    "pos": "v.",
    "en_def": "to notice or understand something",
    "cn_def": "感知",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to notice or understand something",
        "cn_def": "感知"
      }
    ]
  },
  "perceived": {
    "pos": "adj.",
    "en_def": "seen or understood in a certain way",
    "cn_def": "感知到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "seen or understood in a certain way",
        "cn_def": "感知到的"
      }
    ]
  },
  "perception": {
    "pos": "n.",
    "en_def": "the way you see or understand something",
    "cn_def": "感知",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way you see or understand something",
        "cn_def": "感知"
      }
    ]
  },
  "positive": {
    "pos": "adj.",
    "en_def": "good, hopeful or helpful",
    "cn_def": "積極正面的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "good, hopeful or helpful",
        "cn_def": "積極正面的"
      }
    ]
  },
  "negative": {
    "pos": "adj.",
    "en_def": "bad or harmful; not hopeful",
    "cn_def": "消極負面的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "bad or harmful; not hopeful",
        "cn_def": "消極負面的"
      }
    ]
  },
  "potential": {
    "pos": "adj.",
    "en_def": "possible in the future",
    "cn_def": "潛在的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "possible in the future",
        "cn_def": "潛在的"
      },
      {
        "pos": "n.",
        "en_def": "the ability to become good in the future",
        "cn_def": "潛力"
      }
    ]
  },
  "previous": {
    "pos": "adj.",
    "en_def": "happening before",
    "cn_def": "之前的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening before",
        "cn_def": "之前的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
