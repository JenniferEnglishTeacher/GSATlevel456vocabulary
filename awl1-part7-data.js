// Part 7 Quiz Data: specifically – counterfeit
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 7 - specifically – counterfeit",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "specifically",
    "pos": "adv.",
    "cn_def": "具體地",
    "en_def": "for one special purpose; clearly",
    "sentence": "He asked {{BLANK}} for a chocolate cake.",
    "cn": "他具體要求一個巧克力蛋糕。"
  },
  {
    "word": "specify",
    "pos": "v.",
    "cn_def": "指定",
    "en_def": "to say exactly what you want",
    "sentence": "Please {{BLANK}} the number of items you want.",
    "cn": "請指定您想要的物品數量。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構",
    "en_def": "the way the parts of something are put together",
    "sentence": "The {{BLANK}} of the building is sound.",
    "cn": "建築的結構是穩固的。"
  },
  {
    "word": "structural",
    "pos": "adj.",
    "cn_def": "結構的",
    "en_def": "about the structure of something",
    "sentence": "There are some {{BLANK}} issues with the bridge.",
    "cn": "這座橋有一些結構問題。"
  },
  {
    "word": "structured",
    "pos": "adj.",
    "cn_def": "有結構的",
    "en_def": "well organized; planned in parts",
    "sentence": "The course is well-{{BLANK}}.",
    "cn": "課程結構良好。"
  },
  {
    "word": "theory",
    "pos": "n.",
    "cn_def": "理論",
    "en_def": "an idea that explains why something happens",
    "sentence": "The scientist proposed a new {{BLANK}} on the origin of the universe.",
    "cn": "科學家提出了一個關於宇宙起源的新理論。"
  },
  {
    "word": "theoretical",
    "pos": "adj.",
    "cn_def": "理論的",
    "en_def": "based on ideas, not practice",
    "sentence": "His approach is more {{BLANK}} than practical.",
    "cn": "他的方法更加理論化，而不是實際的。"
  },
  {
    "word": "vary",
    "pos": "v.",
    "cn_def": "變化",
    "en_def": "to change or be different",
    "sentence": "Prices can {{BLANK}} depending on the season.",
    "cn": "價格可能會根據季節變化。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "各種各樣的",
    "en_def": "many different kinds of",
    "sentence": "The exhibition showcased {{BLANK}} types of artwork.",
    "cn": "展覽展示了各種各樣的藝術品。"
  },
  {
    "word": "varied",
    "pos": "adj.",
    "cn_def": "多種多樣的",
    "en_def": "including many different kinds",
    "sentence": "The menu was {{BLANK}} and offered something for everyone.",
    "cn": "菜單多種多樣，適合每個人。"
  },
  {
    "word": "a variety of",
    "pos": "phr.",
    "cn_def": "各種各樣的",
    "en_def": "many different kinds of",
    "sentence": "The shop sells {{BLANK}} products.",
    "cn": "商店出售各種各樣的產品。"
  },
  {
    "word": "variable",
    "pos": "n.",
    "cn_def": "變數",
    "en_def": "something that can change",
    "sentence": "There are too many {{BLANK}} to predict the outcome accurately.",
    "cn": "有太多的變數無法準確預測結果。"
  },
  {
    "word": "intricate",
    "pos": "adj.",
    "cn_def": "錯綜複雜的",
    "en_def": "having many small parts and details",
    "sentence": "The artist drew an {{BLANK}} design on the paper.",
    "cn": "那位藝術家在紙上畫出錯綜複雜的圖案。"
  },
  {
    "word": "proficient",
    "pos": "adj.",
    "cn_def": "熟練的",
    "en_def": "skilled and good at something",
    "sentence": "She is {{BLANK}} in both English and Japanese.",
    "cn": "她在英語和日語方面都很熟練。"
  },
  {
    "word": "proficiency",
    "pos": "n.",
    "cn_def": "熟練程度",
    "en_def": "a high level of skill in something",
    "sentence": "He showed his {{BLANK}} in playing the piano.",
    "cn": "他展現了他在彈鋼琴方面的熟練程度。"
  },
  {
    "word": "occur",
    "pos": "v.",
    "cn_def": "發生",
    "en_def": "to happen",
    "sentence": "Many accidents {{BLANK}} on this road.",
    "cn": "在這條路上發生了許多事故。"
  },
  {
    "word": "occurrence",
    "pos": "n.",
    "cn_def": "事件；發生",
    "en_def": "something that happens",
    "sentence": "The {{BLANK}} of the storm surprised everyone.",
    "cn": "這場暴風雨的發生讓大家都很驚訝。"
  },
  {
    "word": "counterfeit",
    "pos": "adj.",
    "cn_def": "偽造的",
    "en_def": "made to look real to trick people; fake",
    "sentence": "The police found many {{BLANK}} bills in the shop.",
    "cn": "警方在商店裡發現了許多偽造的鈔票。"
  }
];

const MCQS = [
  {
    "q": "He asked ______ for a chocolate cake.",
    "options": [
      "similarly",
      "issue",
      "specifically",
      "distribute"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Please ______ the number of items you want.",
    "options": [
      "import",
      "specify",
      "contract",
      "occur"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of the building is sound.",
    "options": [
      "structure",
      "distribution",
      "finance",
      "assumption"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "There are some ______ issues with the bridge.",
    "options": [
      "creative",
      "intricate",
      "analytical",
      "structural"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The course is well-______.",
    "options": [
      "economic",
      "required",
      "structured",
      "exported"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The scientist proposed a new ______ on the origin of the universe.",
    "options": [
      "economy",
      "theory",
      "identity",
      "significance"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "His approach is more ______ than practical.",
    "options": [
      "estimated",
      "proficient",
      "unauthorized",
      "theoretical"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Prices can ______ depending on the season.",
    "options": [
      "vary",
      "require",
      "assess",
      "occur"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The exhibition showcased ______ types of artwork.",
    "options": [
      "contextual",
      "various",
      "financial",
      "economic"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The menu was ______ and offered something for everyone.",
    "options": [
      "varied",
      "evident",
      "legal",
      "analytical"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The shop sells ______ products.",
    "options": [
      "It is estimated that",
      "be derived from",
      "be similar to",
      "a variety of"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "There are too many ______ to predict the outcome accurately.",
    "options": [
      "definition",
      "policy",
      "variable",
      "function"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The artist drew an ______ design on the paper.",
    "options": [
      "intricate",
      "structured",
      "available",
      "legal"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "She is ______ in both English and Japanese.",
    "options": [
      "structural",
      "individual",
      "evident",
      "proficient"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "He showed his ______ in playing the piano.",
    "options": [
      "approach",
      "proficiency",
      "authority",
      "interpretation"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many accidents ______ on this road.",
    "options": [
      "identify",
      "assess",
      "occur",
      "estimate"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The ______ of the storm surprised everyone.",
    "options": [
      "consistency",
      "resource",
      "area",
      "occurrence"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The police found many ______ bills in the shop.",
    "options": [
      "various",
      "counterfeit",
      "varied",
      "functional"
    ],
    "answer": 1,
    "vocabIndex": 17
  }
];

const LOOKUP = {
  "specifically": {
    "pos": "adv.",
    "en_def": "for one special purpose; clearly",
    "cn_def": "具體地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "for one special purpose; clearly",
        "cn_def": "具體地"
      }
    ]
  },
  "specify": {
    "pos": "v.",
    "en_def": "to say exactly what you want",
    "cn_def": "指定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say exactly what you want",
        "cn_def": "指定"
      }
    ]
  },
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are put together",
    "cn_def": "結構",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way the parts of something are put together",
        "cn_def": "結構"
      }
    ]
  },
  "structural": {
    "pos": "adj.",
    "en_def": "about the structure of something",
    "cn_def": "結構的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about the structure of something",
        "cn_def": "結構的"
      }
    ]
  },
  "structured": {
    "pos": "adj.",
    "en_def": "well organized; planned in parts",
    "cn_def": "有結構的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "well organized; planned in parts",
        "cn_def": "有結構的"
      }
    ]
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea that explains why something happens",
    "cn_def": "理論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea that explains why something happens",
        "cn_def": "理論"
      }
    ]
  },
  "theoretical": {
    "pos": "adj.",
    "en_def": "based on ideas, not practice",
    "cn_def": "理論的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on ideas, not practice",
        "cn_def": "理論的"
      }
    ]
  },
  "vary": {
    "pos": "v.",
    "en_def": "to change or be different",
    "cn_def": "變化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change or be different",
        "cn_def": "變化"
      }
    ]
  },
  "various": {
    "pos": "adj.",
    "en_def": "many different kinds of",
    "cn_def": "各種各樣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "many different kinds of",
        "cn_def": "各種各樣的"
      }
    ]
  },
  "varied": {
    "pos": "adj.",
    "en_def": "including many different kinds",
    "cn_def": "多種多樣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "including many different kinds",
        "cn_def": "多種多樣的"
      }
    ]
  },
  "a variety of": {
    "pos": "phr.",
    "en_def": "many different kinds of",
    "cn_def": "各種各樣的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "many different kinds of",
        "cn_def": "各種各樣的"
      }
    ]
  },
  "variable": {
    "pos": "n.",
    "en_def": "something that can change",
    "cn_def": "變數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that can change",
        "cn_def": "變數"
      }
    ]
  },
  "intricate": {
    "pos": "adj.",
    "en_def": "having many small parts and details",
    "cn_def": "錯綜複雜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having many small parts and details",
        "cn_def": "錯綜複雜的"
      }
    ]
  },
  "proficient": {
    "pos": "adj.",
    "en_def": "skilled and good at something",
    "cn_def": "熟練的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "skilled and good at something",
        "cn_def": "熟練的"
      }
    ]
  },
  "proficiency": {
    "pos": "n.",
    "en_def": "a high level of skill in something",
    "cn_def": "熟練程度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a high level of skill in something",
        "cn_def": "熟練程度"
      }
    ]
  },
  "occur": {
    "pos": "v.",
    "en_def": "to happen",
    "cn_def": "發生",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to happen",
        "cn_def": "發生"
      }
    ]
  },
  "occurrence": {
    "pos": "n.",
    "en_def": "something that happens",
    "cn_def": "事件；發生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that happens",
        "cn_def": "事件；發生"
      }
    ]
  },
  "counterfeit": {
    "pos": "adj.",
    "en_def": "made to look real to trick people; fake",
    "cn_def": "偽造的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made to look real to trick people; fake",
        "cn_def": "偽造的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
