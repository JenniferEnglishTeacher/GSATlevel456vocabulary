// Part 7 Quiz Data: intensify – visual
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 8 Part 7 - intensify – visual",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "intensify",
    "pos": "v.",
    "cn_def": "加劇",
    "en_def": "to become stronger",
    "sentence": "The debate is likely to {{BLANK}} as the election approaches.",
    "cn": "隨著選舉的臨近，辯論可能會加劇。"
  },
  {
    "word": "terminate",
    "pos": "v.",
    "cn_def": "終止",
    "en_def": "to end something",
    "sentence": "They had no choice but to {{BLANK}} the contract early.",
    "cn": "他們別無選擇，只能提前終止合同。"
  },
  {
    "word": "terminated",
    "pos": "adj.",
    "cn_def": "被終止的",
    "en_def": "ended",
    "sentence": "The {{BLANK}} agreement led to legal disputes between the parties.",
    "cn": "被終止的協議導致了雙方之間的法律糾紛。"
  },
  {
    "word": "termination",
    "pos": "n.",
    "cn_def": "終止",
    "en_def": "the act of ending something",
    "sentence": "The {{BLANK}} of employment can be a stressful event for anyone.",
    "cn": "解僱可能是任何人的壓力事件。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea",
    "sentence": "The {{BLANK}} of the conference is sustainable development.",
    "cn": "會議的主題是可持續發展。"
  },
  {
    "word": "thereby",
    "pos": "adv.",
    "cn_def": "從而",
    "en_def": "as a result of this",
    "sentence": "By automating the process, they {{BLANK}} increased efficiency.",
    "cn": "通過自動化過程，他們從而提高了效率。"
  },
  {
    "word": "uniform",
    "pos": "adj./n.",
    "cn_def": "統一的/制服",
    "en_def": "the same; a special set of clothes",
    "sentence": "All students are required to wear a {{BLANK}} to school.",
    "cn": "所有學生都必須穿制服上學。"
  },
  {
    "word": "unify",
    "pos": "v.",
    "cn_def": "統一",
    "en_def": "to join things together into one",
    "sentence": "The new leader hopes to {{BLANK}} the country after years of division.",
    "cn": "新領導人希望在多年的分裂後統一這個國家。"
  },
  {
    "word": "unity",
    "pos": "n.",
    "cn_def": "統一",
    "en_def": "being together as one",
    "sentence": "The event aimed to promote {{BLANK}} and collaboration among different communities.",
    "cn": "這個活動旨在促進不同社區之間的統一和合作。"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "cn_def": "車輛",
    "en_def": "a car, bus or truck",
    "sentence": "The {{BLANK}} was towed away due to illegal parking.",
    "cn": "由於非法停車，車輛被拖走了。"
  },
  {
    "word": "via",
    "pos": "prep.",
    "cn_def": "通過",
    "en_def": "by way of; through",
    "sentence": "You can reach the support team {{BLANK}} email or phone.",
    "cn": "你可以通過電子郵件或電話聯絡支持團隊。"
  },
  {
    "word": "virtue",
    "pos": "n.",
    "cn_def": "美德",
    "en_def": "a good quality in a person",
    "sentence": "Patience is a {{BLANK}} that he certainly lacks.",
    "cn": "耐心是他肯定缺乏的美德。"
  },
  {
    "word": "virtual",
    "pos": "adj.",
    "cn_def": "虛擬的",
    "en_def": "existing on a computer, not in real life",
    "sentence": "The {{BLANK}} reality experience was incredibly realistic.",
    "cn": "虛擬現實體驗非常逼真。"
  },
  {
    "word": "virtually",
    "pos": "adv.",
    "cn_def": "實際上",
    "en_def": "almost completely",
    "sentence": "The small town is {{BLANK}} unknown to the outside world.",
    "cn": "這個小鎮實際上是外界所不知道的。"
  },
  {
    "word": "widespread",
    "pos": "adj.",
    "cn_def": "廣泛的",
    "en_def": "found in many places",
    "sentence": "There's {{BLANK}} agreement among experts about the cause of the issue.",
    "cn": "專家們對問題的原因有廣泛的一致看法。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "about seeing",
    "sentence": "The {{BLANK}} effects in the movie were stunning.",
    "cn": "電影中的視覺效果令人驚嘆。"
  }
];

const MCQS = [
  {
    "q": "The debate is likely to ______ as the election approaches.",
    "options": [
      "detect",
      "intensify",
      "inspect",
      "complement"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "They had no choice but to ______ the contract early.",
    "options": [
      "accumulate",
      "appreciate",
      "accompany",
      "terminate"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The ______ agreement led to legal disputes between the parties.",
    "options": [
      "terminated",
      "clear",
      "biased",
      "manipulative"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of employment can be a stressful event for anyone.",
    "options": [
      "schedule",
      "clarity",
      "termination",
      "fluctuation"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The ______ of the conference is sustainable development.",
    "options": [
      "event",
      "theme",
      "contradiction",
      "infrastructure"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "By automating the process, they ______ increased efficiency.",
    "options": [
      "thereby",
      "eventually",
      "predominantly",
      "dramatically"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "All students are required to wear a ______ to school.",
    "options": [
      "intense",
      "current",
      "automatic",
      "uniform"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new leader hopes to ______ the country after years of division.",
    "options": [
      "highlight",
      "exploit",
      "unify",
      "chart"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The event aimed to promote ______ and collaboration among different communities.",
    "options": [
      "unity",
      "exhibition",
      "intensity",
      "reinforcement"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The ______ was towed away due to illegal parking.",
    "options": [
      "reinforcement",
      "paragraph",
      "vehicle",
      "fluctuation"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "You can reach the support team ______ email or phone.",
    "options": [
      "unify",
      "via",
      "plus",
      "on exhibit"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Patience is a ______ that he certainly lacks.",
    "options": [
      "reinforcement",
      "exploitation",
      "currency",
      "virtue"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The ______ reality experience was incredibly realistic.",
    "options": [
      "virtual",
      "reinforced",
      "detected",
      "complement"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The small town is ______ unknown to the outside world.",
    "options": [
      "automatically",
      "inevitably",
      "thereby",
      "virtually"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "There's ______ agreement among experts about the cause of the issue.",
    "options": [
      "random",
      "widespread",
      "highlighted",
      "accumulated"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The ______ effects in the movie were stunning.",
    "options": [
      "arbitrary",
      "exploited",
      "visual",
      "restored"
    ],
    "answer": 2,
    "vocabIndex": 15
  }
];

const LOOKUP = {
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
  "terminate": {
    "pos": "v.",
    "en_def": "to end something",
    "cn_def": "終止",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to end something",
        "cn_def": "終止"
      }
    ]
  },
  "terminated": {
    "pos": "adj.",
    "en_def": "ended",
    "cn_def": "被終止的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ended",
        "cn_def": "被終止的"
      }
    ]
  },
  "termination": {
    "pos": "n.",
    "en_def": "the act of ending something",
    "cn_def": "終止",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of ending something",
        "cn_def": "終止"
      }
    ]
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea",
    "cn_def": "主題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the main subject or idea",
        "cn_def": "主題"
      }
    ]
  },
  "thereby": {
    "pos": "adv.",
    "en_def": "as a result of this",
    "cn_def": "從而",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as a result of this",
        "cn_def": "從而"
      }
    ]
  },
  "uniform": {
    "pos": "adj./n.",
    "en_def": "the same; a special set of clothes",
    "cn_def": "統一的/制服",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "the same; a special set of clothes",
        "cn_def": "統一的/制服"
      }
    ]
  },
  "unify": {
    "pos": "v.",
    "en_def": "to join things together into one",
    "cn_def": "統一",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to join things together into one",
        "cn_def": "統一"
      }
    ]
  },
  "unity": {
    "pos": "n.",
    "en_def": "being together as one",
    "cn_def": "統一",
    "combined": [
      {
        "pos": "n.",
        "en_def": "being together as one",
        "cn_def": "統一"
      }
    ]
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a car, bus or truck",
    "cn_def": "車輛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a car, bus or truck",
        "cn_def": "車輛"
      }
    ]
  },
  "via": {
    "pos": "prep.",
    "en_def": "by way of; through",
    "cn_def": "通過",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "by way of; through",
        "cn_def": "通過"
      }
    ]
  },
  "virtue": {
    "pos": "n.",
    "en_def": "a good quality in a person",
    "cn_def": "美德",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a good quality in a person",
        "cn_def": "美德"
      }
    ]
  },
  "virtual": {
    "pos": "adj.",
    "en_def": "existing on a computer, not in real life",
    "cn_def": "虛擬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing on a computer, not in real life",
        "cn_def": "虛擬的"
      }
    ]
  },
  "virtually": {
    "pos": "adv.",
    "en_def": "almost completely",
    "cn_def": "實際上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "almost completely",
        "cn_def": "實際上"
      }
    ]
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "found in many places",
    "cn_def": "廣泛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "found in many places",
        "cn_def": "廣泛的"
      }
    ]
  },
  "visual": {
    "pos": "adj.",
    "en_def": "about seeing",
    "cn_def": "視覺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about seeing",
        "cn_def": "視覺的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
