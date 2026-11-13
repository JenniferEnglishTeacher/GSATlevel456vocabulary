// Part 5 Quiz Data: inspected – predominantly
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 8 Part 5 - inspected – predominantly",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inspected",
    "pos": "adj.",
    "cn_def": "被檢查的",
    "en_def": "checked carefully",
    "sentence": "The {{BLANK}} equipment was found to be in good working condition.",
    "cn": "經檢查的設備處於良好的工作狀態。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查",
    "en_def": "a careful check",
    "sentence": "The {{BLANK}} revealed some discrepancies that needed to be addressed.",
    "cn": "檢查揭示了一些需要解決的差異。"
  },
  {
    "word": "intensity",
    "pos": "n.",
    "cn_def": "強度",
    "en_def": "how strong something is",
    "sentence": "The {{BLANK}} of the storm caused widespread damage.",
    "cn": "暴風雨的強度造成了廣泛的損害。"
  },
  {
    "word": "intensify",
    "pos": "v.",
    "cn_def": "加劇",
    "en_def": "to become stronger",
    "sentence": "The conflict began to {{BLANK}} as more countries got involved.",
    "cn": "隨著更多國家的參與，衝突開始加劇。"
  },
  {
    "word": "manipulate",
    "pos": "v.",
    "cn_def": "操縱",
    "en_def": "to control someone or something unfairly",
    "sentence": "It's unethical to {{BLANK}} people for personal gain.",
    "cn": "為了個人利益操縱他人是不道德的。"
  },
  {
    "word": "manipulative",
    "pos": "adj.",
    "cn_def": "操縱的",
    "en_def": "good at controlling people unfairly",
    "sentence": "He was a {{BLANK}} individual, always trying to control others.",
    "cn": "他是一個操縱型的個人，總是試圖控制他人。"
  },
  {
    "word": "manipulation",
    "pos": "n.",
    "cn_def": "操縱",
    "en_def": "controlling people or things unfairly",
    "sentence": "The {{BLANK}} of data can lead to incorrect conclusions.",
    "cn": "數據操縱可能導致不正確的結論。"
  },
  {
    "word": "minimum",
    "pos": "adj./n.",
    "cn_def": "最低的/最小值",
    "en_def": "the smallest amount possible",
    "sentence": "The {{BLANK}} requirement for this job is a Bachelor's degree.",
    "cn": "這份工作的最低要求是學士學位。"
  },
  {
    "word": "minimised",
    "pos": "adj.",
    "cn_def": "最小化的",
    "en_def": "made as small as possible",
    "sentence": "The risks have been {{BLANK}} through careful planning.",
    "cn": "通過仔細規劃，風險已被最小化。"
  },
  {
    "word": "nuclear power plant",
    "pos": "n.",
    "cn_def": "核電廠",
    "en_def": "a place that makes electricity from nuclear energy",
    "sentence": "The {{BLANK}} is being inspected for safety compliance.",
    "cn": "核電廠正在接受安全合規檢查。"
  },
  {
    "word": "offset",
    "pos": "n.",
    "cn_def": "抵消",
    "en_def": "something that balances another thing",
    "sentence": "The gains in the stock market were {{BLANK}} by losses in the bond market.",
    "cn": "股市的收益被債券市場的損失所抵消。"
  },
  {
    "word": "offset",
    "pos": "v.",
    "cn_def": "抵消",
    "en_def": "to balance one thing with another",
    "sentence": "We can {{BLANK}} the carbon emissions by planting more trees.",
    "cn": "我們可以通過種植更多樹木來抵消碳排放。"
  },
  {
    "word": "paragraph",
    "pos": "n.",
    "cn_def": "段落",
    "en_def": "a group of sentences about one idea",
    "sentence": "Each {{BLANK}} in the essay should support your thesis statement.",
    "cn": "論文中的每一段都應支持你的論文陳述。"
  },
  {
    "word": "plus",
    "pos": "conj./prep./n.",
    "cn_def": "加上/正的",
    "en_def": "added to; and also",
    "sentence": "The cost of materials, {{BLANK}} the cost of labor, gives the total cost.",
    "cn": "材料成本加上勞動成本，得出總成本。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again to get better",
    "sentence": "To become proficient, you must {{BLANK}} daily.",
    "cn": "要熟練，你必須每天練習。"
  },
  {
    "word": "practice",
    "pos": "phr.",
    "cn_def": "從事法律/醫學",
    "en_def": "to work as a lawyer or doctor",
    "sentence": "She decided to {{BLANK}} law after graduating from university.",
    "cn": "她決定在大學畢業後從事法律工作。"
  },
  {
    "word": "practitioner",
    "pos": "n.",
    "cn_def": "從業者",
    "en_def": "a person who works in a skilled job",
    "sentence": "A medical {{BLANK}} should have a good understanding of human anatomy.",
    "cn": "醫學從業者應對人體解剖學有很好的理解。"
  },
  {
    "word": "dominate",
    "pos": "v.",
    "cn_def": "主導",
    "en_def": "to have power or control over others",
    "sentence": "One company seems to {{BLANK}} the market in this sector.",
    "cn": "一家公司似乎主導了這個領域的市場。"
  },
  {
    "word": "dominant",
    "pos": "adj.",
    "cn_def": "主導的",
    "en_def": "most important or powerful",
    "sentence": "Their {{BLANK}} position in the industry is due to their innovative products.",
    "cn": "他們在行業中的主導地位歸功於他們的創新產品。"
  },
  {
    "word": "domination",
    "pos": "n.",
    "cn_def": "主導",
    "en_def": "power or control over others",
    "sentence": "The {{BLANK}} of the market by a single entity is unhealthy for competition.",
    "cn": "市場由單一實體主導對競爭是不利的。"
  },
  {
    "word": "predominantly",
    "pos": "adv.",
    "cn_def": "主要地",
    "en_def": "mostly; mainly",
    "sentence": "The population in this area is {{BLANK}} elderly.",
    "cn": "這個地區的人口主要是老年人。"
  }
];

const MCQS = [
  {
    "q": "The ______ equipment was found to be in good working condition.",
    "options": [
      "induced",
      "inspected",
      "visual",
      "widespread"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The ______ revealed some discrepancies that needed to be addressed.",
    "options": [
      "inspection",
      "practitioner",
      "commodity",
      "conformity"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of the storm caused widespread damage.",
    "options": [
      "revision",
      "manipulation",
      "detective",
      "intensity"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The conflict began to ______ as more countries got involved.",
    "options": [
      "unify",
      "appreciate",
      "intensify",
      "revise"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It's unethical to ______ people for personal gain.",
    "options": [
      "manipulate",
      "accompany",
      "chart",
      "clarify"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "He was a ______ individual, always trying to control others.",
    "options": [
      "abandoned",
      "arbitrary",
      "manipulative",
      "minimum"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The ______ of data can lead to incorrect conclusions.",
    "options": [
      "exhibition",
      "infrastructure",
      "detective",
      "manipulation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ______ requirement for this job is a Bachelor's degree.",
    "options": [
      "prospective",
      "minimum",
      "minimised",
      "induced"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The risks have been ______ through careful planning.",
    "options": [
      "minimised",
      "inevitable",
      "induced",
      "biased"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The ______ is being inspected for safety compliance.",
    "options": [
      "current",
      "nuclear power plant",
      "deviate from",
      "at random"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The gains in the stock market were ______ by losses in the bond market.",
    "options": [
      "exhibit",
      "paragraph",
      "offset",
      "virtue"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We can ______ the carbon emissions by planting more trees.",
    "options": [
      "fluctuate",
      "exhibit",
      "reinforce",
      "offset"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Each ______ in the essay should support your thesis statement.",
    "options": [
      "highlight",
      "exhibit",
      "paragraph",
      "accumulation"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The cost of materials, ______ the cost of labor, gives the total cost.",
    "options": [
      "plus",
      "via",
      "chart",
      "dominate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "To become proficient, you must ______ daily.",
    "options": [
      "deviate from",
      "practice",
      "uncharted territory",
      "conform to"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "She decided to ______ law after graduating from university.",
    "options": [
      "on exhibit",
      "current",
      "deviate from",
      "practice the law/medicine"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "A medical ______ should have a good understanding of human anatomy.",
    "options": [
      "practitioner",
      "vehicle",
      "unity",
      "contradiction"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "One company seems to ______ the market in this sector.",
    "options": [
      "restore",
      "dominate",
      "appreciate",
      "reinforce"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Their ______ position in the industry is due to their innovative products.",
    "options": [
      "widespread",
      "displaced",
      "random",
      "dominant"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The ______ of the market by a single entity is unhealthy for competition.",
    "options": [
      "detection",
      "accumulation",
      "domination",
      "vehicle"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The population in this area is ______ elderly.",
    "options": [
      "thereby",
      "predominantly",
      "automatically",
      "dramatically"
    ],
    "answer": 1,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "inspected": {
    "pos": "adj.",
    "en_def": "checked carefully",
    "cn_def": "被檢查的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "checked carefully",
        "cn_def": "被檢查的"
      }
    ]
  },
  "inspection": {
    "pos": "n.",
    "en_def": "a careful check",
    "cn_def": "檢查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a careful check",
        "cn_def": "檢查"
      }
    ]
  },
  "intensity": {
    "pos": "n.",
    "en_def": "how strong something is",
    "cn_def": "強度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how strong something is",
        "cn_def": "強度"
      }
    ]
  },
  "intensify": {
    "pos": "v.",
    "en_def": "to become stronger",
    "cn_def": "加劇",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become stronger",
        "cn_def": "加劇"
      }
    ]
  },
  "manipulate": {
    "pos": "v.",
    "en_def": "to control someone or something unfairly",
    "cn_def": "操縱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to control someone or something unfairly",
        "cn_def": "操縱"
      }
    ]
  },
  "manipulative": {
    "pos": "adj.",
    "en_def": "good at controlling people unfairly",
    "cn_def": "操縱的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "good at controlling people unfairly",
        "cn_def": "操縱的"
      }
    ]
  },
  "manipulation": {
    "pos": "n.",
    "en_def": "controlling people or things unfairly",
    "cn_def": "操縱",
    "combined": [
      {
        "pos": "n.",
        "en_def": "controlling people or things unfairly",
        "cn_def": "操縱"
      }
    ]
  },
  "minimum": {
    "pos": "adj./n.",
    "en_def": "the smallest amount possible",
    "cn_def": "最低的/最小值",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "the smallest amount possible",
        "cn_def": "最低的/最小值"
      }
    ]
  },
  "minimised": {
    "pos": "adj.",
    "en_def": "made as small as possible",
    "cn_def": "最小化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made as small as possible",
        "cn_def": "最小化的"
      }
    ]
  },
  "nuclear power plant": {
    "pos": "n.",
    "en_def": "a place that makes electricity from nuclear energy",
    "cn_def": "核電廠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place that makes electricity from nuclear energy",
        "cn_def": "核電廠"
      }
    ]
  },
  "offset": {
    "pos": "n.",
    "en_def": "something that balances another thing",
    "cn_def": "抵消",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that balances another thing",
        "cn_def": "抵消"
      },
      {
        "pos": "v.",
        "en_def": "to balance one thing with another",
        "cn_def": "抵消"
      }
    ]
  },
  "paragraph": {
    "pos": "n.",
    "en_def": "a group of sentences about one idea",
    "cn_def": "段落",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of sentences about one idea",
        "cn_def": "段落"
      }
    ]
  },
  "plus": {
    "pos": "conj./prep./n.",
    "en_def": "added to; and also",
    "cn_def": "加上/正的",
    "combined": [
      {
        "pos": "conj./prep./n.",
        "en_def": "added to; and also",
        "cn_def": "加上/正的"
      }
    ]
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something again to get better",
    "cn_def": "練習",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to do something again to get better",
        "cn_def": "練習"
      },
      {
        "pos": "phr.",
        "en_def": "to work as a lawyer or doctor",
        "cn_def": "從事法律/醫學"
      }
    ]
  },
  "practice the law/medicine": {
    "pos": "phr.",
    "en_def": "to work as a lawyer or doctor",
    "cn_def": "從事法律/醫學",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to work as a lawyer or doctor",
        "cn_def": "從事法律/醫學"
      }
    ]
  },
  "practitioner": {
    "pos": "n.",
    "en_def": "a person who works in a skilled job",
    "cn_def": "從業者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who works in a skilled job",
        "cn_def": "從業者"
      }
    ]
  },
  "dominate": {
    "pos": "v.",
    "en_def": "to have power or control over others",
    "cn_def": "主導",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have power or control over others",
        "cn_def": "主導"
      }
    ]
  },
  "dominant": {
    "pos": "adj.",
    "en_def": "most important or powerful",
    "cn_def": "主導的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "most important or powerful",
        "cn_def": "主導的"
      }
    ]
  },
  "domination": {
    "pos": "n.",
    "en_def": "power or control over others",
    "cn_def": "主導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "power or control over others",
        "cn_def": "主導"
      }
    ]
  },
  "predominantly": {
    "pos": "adv.",
    "en_def": "mostly; mainly",
    "cn_def": "主要地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "mostly; mainly",
        "cn_def": "主要地"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
