// Part 4 Quiz Data: grade – isolated
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 4 - grade – isolated",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "等級",
    "en_def": "a level of quality or difficulty",
    "sentence": "The {{BLANK}} of difficulty for this video game increases as you progress through the levels.",
    "cn": "隨著你在關卡中的進步，這款視頻遊戲的難度等級會增加。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績",
    "en_def": "a mark for schoolwork",
    "sentence": "He was happy with his {{BLANK}} on the midterm exam.",
    "cn": "他對期中考試的成績感到滿意。"
  },
  {
    "word": "guarantee",
    "pos": "v.",
    "cn_def": "保證",
    "en_def": "to promise something",
    "sentence": "We {{BLANK}} satisfaction or your money back.",
    "cn": "我們保證滿意，否則退款。"
  },
  {
    "word": "guarantee",
    "pos": "n.",
    "cn_def": "保證",
    "en_def": "a written promise to repair a product",
    "sentence": "The product comes with a one-year {{BLANK}} for repairs.",
    "cn": "產品附帶一年的維修保證。"
  },
  {
    "word": "guaranteed",
    "pos": "adj.",
    "cn_def": "保證的",
    "en_def": "certain to happen",
    "sentence": "With the team's strong lineup, victory was almost {{BLANK}}.",
    "cn": "有了團隊的強大陣容，勝利幾乎是保證的。"
  },
  {
    "word": "hierarchical",
    "pos": "adj.",
    "cn_def": "分層的",
    "en_def": "arranged by rank or level",
    "sentence": "The company has a {{BLANK}} structure with clear lines of authority.",
    "cn": "公司具有分層結構，權限劃分清晰。"
  },
  {
    "word": "hierarchy",
    "pos": "n.",
    "cn_def": "等級制度",
    "en_def": "a system of levels from high to low",
    "sentence": "Understanding the {{BLANK}} within the organization is crucial for effective communication.",
    "cn": "瞭解組織內的等級制度對於有效溝通至關重要。"
  },
  {
    "word": "identical to",
    "pos": "phr.",
    "cn_def": "與...相同",
    "en_def": "exactly the same as",
    "sentence": "The results of the experiment were nearly {{BLANK}} those of the previous study.",
    "cn": "實驗的結果與先前研究的結果幾乎相同。"
  },
  {
    "word": "ideology",
    "pos": "n.",
    "cn_def": "意識形態",
    "en_def": "a set of political beliefs",
    "sentence": "Different political {{BLANK}} often lead to heated debates.",
    "cn": "不同的政治意識形態經常導致激烈的辯論。"
  },
  {
    "word": "infer",
    "pos": "v.",
    "cn_def": "推斷",
    "en_def": "to guess something from what you know",
    "sentence": "From the evidence provided, we can {{BLANK}} that the suspect had a motive.",
    "cn": "從提供的證據中，我們可以推斷嫌疑人有動機。"
  },
  {
    "word": "inferred",
    "pos": "adj.",
    "cn_def": "推斷的",
    "en_def": "guessed from what you know",
    "sentence": "The {{BLANK}} conclusions from the data should be taken with caution.",
    "cn": "應謹慎對待從數據中推斷出的結論。"
  },
  {
    "word": "innovate",
    "pos": "v.",
    "cn_def": "創新",
    "en_def": "to make new ideas or ways of doing things",
    "sentence": "Companies that fail to {{BLANK}} risk falling behind in the competitive market.",
    "cn": "未能創新的公司有在競爭市場中落後的風險。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new ideas",
    "sentence": "Their {{BLANK}} approach to teaching engages students in active learning.",
    "cn": "他們創新的教學方法讓學生參與積極學習。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新",
    "en_def": "a new idea or way of doing things",
    "sentence": "The tech industry is driven by constant {{BLANK}} and development.",
    "cn": "科技行業受到不斷創新和發展的推動。"
  },
  {
    "word": "insert",
    "pos": "v.",
    "cn_def": "插入",
    "en_def": "to put something into something else",
    "sentence": "Please {{BLANK}} your credit card into the machine to complete the transaction.",
    "cn": "請將您的信用卡插入機器以完成交易。"
  },
  {
    "word": "inserted",
    "pos": "adj.",
    "cn_def": "已插入的",
    "en_def": "put into something else",
    "sentence": "The {{BLANK}} chip improved the device's performance significantly.",
    "cn": "已插入的芯片顯著提高了設備的性能。"
  },
  {
    "word": "insertion",
    "pos": "n.",
    "cn_def": "插入",
    "en_def": "the act of putting something into something",
    "sentence": "The {{BLANK}} of the new data skewed the results of the analysis.",
    "cn": "新數據的插入使分析結果產生偏差。"
  },
  {
    "word": "intervene",
    "pos": "v.",
    "cn_def": "介入",
    "en_def": "to step in to help or stop something",
    "sentence": "The government decided to {{BLANK}} in the market to stabilize prices.",
    "cn": "政府決定介入市場以穩定價格。"
  },
  {
    "word": "intervened",
    "pos": "adj.",
    "cn_def": "介入的",
    "en_def": "done to help or stop a problem",
    "sentence": "The {{BLANK}} measures helped prevent a larger crisis.",
    "cn": "介入的措施有助於防止更大的危機。"
  },
  {
    "word": "intervention",
    "pos": "n.",
    "cn_def": "介入",
    "en_def": "the act of stepping in to help",
    "sentence": "Early {{BLANK}} is crucial in managing the disease effectively.",
    "cn": "早期介入對於有效管理疾病至關重要。"
  },
  {
    "word": "isolate",
    "pos": "v.",
    "cn_def": "隔離",
    "en_def": "to keep someone or something apart",
    "sentence": "The researchers aim to {{BLANK}} the cause of the problem.",
    "cn": "研究人員的目標是隔離問題的原因。"
  },
  {
    "word": "isolated",
    "pos": "adj.",
    "cn_def": "隔離的",
    "en_def": "alone; far from others",
    "sentence": "The {{BLANK}} community had its own unique traditions and customs.",
    "cn": "隔離的社區有自己獨特的傳統和習俗。"
  }
];

const MCQS = [
  {
    "q": "The ______ of difficulty for this video game increases as you progress through the levels.",
    "options": [
      "grade",
      "release pressure",
      "be founded",
      "be equipped with"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "He was happy with his ______ on the midterm exam.",
    "options": [
      "identical to",
      "grade",
      "a couple of",
      "dispose of"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "We ______ satisfaction or your money back.",
    "options": [
      "advocate",
      "adapt",
      "eliminate",
      "guarantee"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The product comes with a one-year ______ for repairs.",
    "options": [
      "isolation",
      "media",
      "guarantee",
      "prohibition"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "With the team's strong lineup, victory was almost ______.",
    "options": [
      "inserted",
      "voluntary",
      "inferred",
      "guaranteed"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The company has a ______ structure with clear lines of authority.",
    "options": [
      "voluntary",
      "empirical",
      "hierarchical",
      "successive"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Understanding the ______ within the organization is crucial for effective communication.",
    "options": [
      "submission",
      "hierarchy",
      "insertion",
      "topic"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The results of the experiment were nearly ______ those of the previous study.",
    "options": [
      "identical to",
      "grade",
      "prior to",
      "be comprised of"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Different political ______ often lead to heated debates.",
    "options": [
      "foundation",
      "innovation",
      "intervention",
      "ideology"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "From the evidence provided, we can ______ that the suspect had a motive.",
    "options": [
      "survive",
      "prioritize",
      "infer",
      "guarantee"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ______ conclusions from the data should be taken with caution.",
    "options": [
      "successful",
      "inferred",
      "released",
      "invisible"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Companies that fail to ______ risk falling behind in the competitive market.",
    "options": [
      "innovate",
      "prohibit",
      "eliminate",
      "extract"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Their ______ approach to teaching engages students in active learning.",
    "options": [
      "reversible",
      "innovative",
      "converted",
      "contrary"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The tech industry is driven by constant ______ and development.",
    "options": [
      "aid",
      "isolation",
      "chemical",
      "innovation"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Please ______ your credit card into the machine to complete the transaction.",
    "options": [
      "succeed",
      "differentiate",
      "insert",
      "publish"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The ______ chip improved the device's performance significantly.",
    "options": [
      "inserted",
      "successful",
      "successive",
      "eliminated"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The ______ of the new data skewed the results of the analysis.",
    "options": [
      "topic",
      "equipment",
      "comprehension",
      "insertion"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The government decided to ______ in the market to stabilize prices.",
    "options": [
      "isolate",
      "intervene",
      "differentiate",
      "advocate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The ______ measures helped prevent a larger crisis.",
    "options": [
      "indefinite",
      "guaranteed",
      "intervened",
      "irreversible"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Early ______ is crucial in managing the disease effectively.",
    "options": [
      "intervention",
      "confirmation",
      "medium",
      "founder"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The researchers aim to ______ the cause of the problem.",
    "options": [
      "grade",
      "isolate",
      "prohibit",
      "succeed"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The ______ community had its own unique traditions and customs.",
    "options": [
      "ultimate",
      "simulated",
      "isolated",
      "confirmed"
    ],
    "answer": 2,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "grade": {
    "pos": "n.",
    "en_def": "a level of quality or difficulty",
    "cn_def": "等級",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a level of quality or difficulty",
        "cn_def": "等級"
      },
      {
        "pos": "n.",
        "en_def": "a mark for schoolwork",
        "cn_def": "成績"
      }
    ]
  },
  "guarantee": {
    "pos": "v.",
    "en_def": "to promise something",
    "cn_def": "保證",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to promise something",
        "cn_def": "保證"
      },
      {
        "pos": "n.",
        "en_def": "a written promise to repair a product",
        "cn_def": "保證"
      }
    ]
  },
  "guaranteed": {
    "pos": "adj.",
    "en_def": "certain to happen",
    "cn_def": "保證的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "certain to happen",
        "cn_def": "保證的"
      }
    ]
  },
  "hierarchical": {
    "pos": "adj.",
    "en_def": "arranged by rank or level",
    "cn_def": "分層的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "arranged by rank or level",
        "cn_def": "分層的"
      }
    ]
  },
  "hierarchy": {
    "pos": "n.",
    "en_def": "a system of levels from high to low",
    "cn_def": "等級制度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a system of levels from high to low",
        "cn_def": "等級制度"
      }
    ]
  },
  "identical to": {
    "pos": "phr.",
    "en_def": "exactly the same as",
    "cn_def": "與...相同",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "exactly the same as",
        "cn_def": "與...相同"
      }
    ]
  },
  "ideology": {
    "pos": "n.",
    "en_def": "a set of political beliefs",
    "cn_def": "意識形態",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of political beliefs",
        "cn_def": "意識形態"
      }
    ]
  },
  "infer": {
    "pos": "v.",
    "en_def": "to guess something from what you know",
    "cn_def": "推斷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to guess something from what you know",
        "cn_def": "推斷"
      }
    ]
  },
  "inferred": {
    "pos": "adj.",
    "en_def": "guessed from what you know",
    "cn_def": "推斷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "guessed from what you know",
        "cn_def": "推斷的"
      }
    ]
  },
  "innovate": {
    "pos": "v.",
    "en_def": "to make new ideas or ways of doing things",
    "cn_def": "創新",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make new ideas or ways of doing things",
        "cn_def": "創新"
      }
    ]
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new ideas",
    "cn_def": "創新的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "using new ideas",
        "cn_def": "創新的"
      }
    ]
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea or way of doing things",
    "cn_def": "創新",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a new idea or way of doing things",
        "cn_def": "創新"
      }
    ]
  },
  "insert": {
    "pos": "v.",
    "en_def": "to put something into something else",
    "cn_def": "插入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put something into something else",
        "cn_def": "插入"
      }
    ]
  },
  "inserted": {
    "pos": "adj.",
    "en_def": "put into something else",
    "cn_def": "已插入的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "put into something else",
        "cn_def": "已插入的"
      }
    ]
  },
  "insertion": {
    "pos": "n.",
    "en_def": "the act of putting something into something",
    "cn_def": "插入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of putting something into something",
        "cn_def": "插入"
      }
    ]
  },
  "intervene": {
    "pos": "v.",
    "en_def": "to step in to help or stop something",
    "cn_def": "介入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to step in to help or stop something",
        "cn_def": "介入"
      }
    ]
  },
  "intervened": {
    "pos": "adj.",
    "en_def": "done to help or stop a problem",
    "cn_def": "介入的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done to help or stop a problem",
        "cn_def": "介入的"
      }
    ]
  },
  "intervention": {
    "pos": "n.",
    "en_def": "the act of stepping in to help",
    "cn_def": "介入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of stepping in to help",
        "cn_def": "介入"
      }
    ]
  },
  "isolate": {
    "pos": "v.",
    "en_def": "to keep someone or something apart",
    "cn_def": "隔離",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep someone or something apart",
        "cn_def": "隔離"
      }
    ]
  },
  "isolated": {
    "pos": "adj.",
    "en_def": "alone; far from others",
    "cn_def": "隔離的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "alone; far from others",
        "cn_def": "隔離的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
