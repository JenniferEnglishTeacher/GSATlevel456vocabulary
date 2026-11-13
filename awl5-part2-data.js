// Part 2 Quiz Data: ability to V – energy
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 5 Part 2 - ability to V – energy",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ability to",
    "pos": "phr.",
    "cn_def": "能力",
    "en_def": "the skill or power to do something",
    "sentence": "Her {{BLANK}} grasp complex concepts quickly is commendable.",
    "cn": "她能迅速理解複雜概念的能力值得稱讚。"
  },
  {
    "word": "challenge",
    "pos": "v.",
    "cn_def": "挑戰",
    "en_def": "to test someone's ability; to question something",
    "sentence": "The recent economic downturn will {{BLANK}} businesses to adapt.",
    "cn": "近期的經濟衰退將挑戰企業的適應能力。"
  },
  {
    "word": "overcome a challenge",
    "pos": "phr.",
    "cn_def": "克服挑戰",
    "en_def": "to solve a difficult problem",
    "sentence": "With determination and hard work, he managed to {{BLANK}}.",
    "cn": "憑著決心和努力，他成功克服了挑戰。"
  },
  {
    "word": "clause",
    "pos": "n.",
    "cn_def": "子句",
    "en_def": "a part of a sentence with a subject and verb",
    "sentence": "Make sure you read every {{BLANK}} of the contract before signing it.",
    "cn": "在簽署合同之前，請確保您閱讀了每一條款。"
  },
  {
    "word": "compound",
    "pos": "n.",
    "cn_def": "化合物",
    "en_def": "a substance made of two or more elements",
    "sentence": "The scientist isolated a new {{BLANK}} from the plant extract.",
    "cn": "科學家從植物提取物中分離出了一種新的化合物。"
  },
  {
    "word": "conflict",
    "pos": "v.",
    "cn_def": "衝突",
    "en_def": "to be different and not able to exist together",
    "sentence": "Personal interests might {{BLANK}} with professional duties.",
    "cn": "個人興趣可能與專業職責衝突。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement or fight",
    "sentence": "The ongoing {{BLANK}} between the two nations is of global concern.",
    "cn": "兩國之間的持續衝突引起了全球的關注。"
  },
  {
    "word": "consult",
    "pos": "v.",
    "cn_def": "諮詢",
    "en_def": "to ask an expert for advice",
    "sentence": "Before making a decision, she decided to {{BLANK}} her family.",
    "cn": "做決定之前，她決定諮詢她的家人。"
  },
  {
    "word": "consultation",
    "pos": "n.",
    "cn_def": "諮詢",
    "en_def": "a meeting to get advice",
    "sentence": "After a lengthy {{BLANK}} with his team, the manager outlined the new strategy.",
    "cn": "經過與他的團隊長時間的諮詢後，經理概述了新的策略。"
  },
  {
    "word": "counsel",
    "pos": "n.",
    "cn_def": "忠告",
    "en_def": "advice",
    "sentence": "She sought the {{BLANK}} of her mentor before changing her career path.",
    "cn": "她在改變職業道路之前尋求了導師的忠告。"
  },
  {
    "word": "counselling",
    "pos": "n.",
    "cn_def": "輔導",
    "en_def": "professional help with personal problems",
    "sentence": "He attended several {{BLANK}} sessions to cope with his stress.",
    "cn": "為了應對壓力，他參加了幾次輔導課程。"
  },
  {
    "word": "contact",
    "pos": "v.",
    "cn_def": "聯繫",
    "en_def": "to call or write to someone",
    "sentence": "Please {{BLANK}} the supplier if you have any queries.",
    "cn": "如果您有任何疑問，請聯繫供應商。"
  },
  {
    "word": "contact",
    "pos": "n.",
    "cn_def": "聯繫",
    "en_def": "communication with someone",
    "sentence": "She lost all {{BLANK}} with her college friends after graduation.",
    "cn": "她畢業後與大學朋友失去了所有聯繫。"
  },
  {
    "word": "decline",
    "pos": "v.",
    "cn_def": "衰退",
    "en_def": "to become less or worse",
    "sentence": "The quality of the product seemed to {{BLANK}} over the years.",
    "cn": "這款產品的質量似乎隨著時間的推移而下降。"
  },
  {
    "word": "decline in",
    "pos": "n./phr.",
    "cn_def": "下降",
    "en_def": "a decrease in something",
    "sentence": "There's been a steady {{BLANK}} sales over the past six months.",
    "cn": "過去六個月，銷售一直在下降。"
  },
  {
    "word": "discretion",
    "pos": "n.",
    "cn_def": "判斷",
    "en_def": "the freedom to decide what to do",
    "sentence": "Use your {{BLANK}} when discussing sensitive topics with clients.",
    "cn": "與客戶討論敏感話題時請謹慎行事。"
  },
  {
    "word": "draft",
    "pos": "n.",
    "cn_def": "草稿",
    "en_def": "a first version of a piece of writing",
    "sentence": "After several edits, the final version was much improved from the original {{BLANK}}.",
    "cn": "經過幾次編輯後，最終版本比原始草稿有很大改進。"
  },
  {
    "word": "draft",
    "pos": "v.",
    "cn_def": "起草",
    "en_def": "to write a first version of something",
    "sentence": "She was asked to {{BLANK}} a proposal for the upcoming project.",
    "cn": "她被要求為即將到來的項目起草一份提案。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "能源",
    "en_def": "power used to make machines work",
    "sentence": "The country is looking for alternative {{BLANK}} sources to reduce its dependence on fossil fuels.",
    "cn": "該國正在尋找替代能源，以減少對化石燃料的依賴。"
  }
];

const MCQS = [
  {
    "q": "Her ______ grasp complex concepts quickly is commendable.",
    "options": [
      "raise awareness",
      "be exposed to",
      "ability to V",
      "be equivalent to"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The recent economic downturn will ______ businesses to adapt.",
    "options": [
      "challenge",
      "style",
      "internalize",
      "beware"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "With determination and hard work, he managed to ______.",
    "options": [
      "in pursuit of",
      "overcome a challenge",
      "exposure to",
      "adjust to"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Make sure you read every ______ of the contract before signing it.",
    "options": [
      "notification",
      "counsel",
      "energy",
      "clause"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The scientist isolated a new ______ from the plant extract.",
    "options": [
      "compound",
      "clause",
      "network",
      "networking"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Personal interests might ______ with professional duties.",
    "options": [
      "challenge",
      "facilitate",
      "license",
      "conflict"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The ongoing ______ between the two nations is of global concern.",
    "options": [
      "alternation",
      "stability",
      "conflict",
      "welfare"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Before making a decision, she decided to ______ her family.",
    "options": [
      "generate",
      "consult",
      "style",
      "energize"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "After a lengthy ______ with his team, the manager outlined the new strategy.",
    "options": [
      "notion",
      "pursuit",
      "consultation",
      "energy"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "She sought the ______ of her mentor before changing her career path.",
    "options": [
      "counsel",
      "academics",
      "revenue",
      "expansion"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "He attended several ______ sessions to cope with his stress.",
    "options": [
      "academy",
      "stability",
      "image",
      "counselling"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Please ______ the supplier if you have any queries.",
    "options": [
      "evolve",
      "contact",
      "rate",
      "amend"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "She lost all ______ with her college friends after graduation.",
    "options": [
      "symbol",
      "academics",
      "entities",
      "contact"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The quality of the product seemed to ______ over the years.",
    "options": [
      "transit",
      "rate",
      "decline",
      "draft"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "There's been a steady ______ sales over the past six months.",
    "options": [
      "decline in",
      "be symbolic of",
      "raise awareness",
      "make adjustment"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Use your ______ when discussing sensitive topics with clients.",
    "options": [
      "precision",
      "discretion",
      "extension",
      "evolution"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "After several edits, the final version was much improved from the original ______.",
    "options": [
      "medication",
      "notion",
      "draft",
      "logic"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "She was asked to ______ a proposal for the upcoming project.",
    "options": [
      "monitor",
      "reinforce",
      "notify",
      "draft"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The country is looking for alternative ______ sources to reduce its dependence on fossil fuels.",
    "options": [
      "contact",
      "energy",
      "logic",
      "rejection"
    ],
    "answer": 1,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "ability to v": {
    "pos": "phr.",
    "en_def": "the skill or power to do something",
    "cn_def": "能力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the skill or power to do something",
        "cn_def": "能力"
      }
    ]
  },
  "ability to": {
    "pos": "phr.",
    "en_def": "the skill or power to do something",
    "cn_def": "能力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the skill or power to do something",
        "cn_def": "能力"
      }
    ]
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to test someone's ability; to question something",
    "cn_def": "挑戰",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to test someone's ability; to question something",
        "cn_def": "挑戰"
      }
    ]
  },
  "overcome a challenge": {
    "pos": "phr.",
    "en_def": "to solve a difficult problem",
    "cn_def": "克服挑戰",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to solve a difficult problem",
        "cn_def": "克服挑戰"
      }
    ]
  },
  "clause": {
    "pos": "n.",
    "en_def": "a part of a sentence with a subject and verb",
    "cn_def": "子句",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of a sentence with a subject and verb",
        "cn_def": "子句"
      }
    ]
  },
  "compound": {
    "pos": "n.",
    "en_def": "a substance made of two or more elements",
    "cn_def": "化合物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance made of two or more elements",
        "cn_def": "化合物"
      }
    ]
  },
  "conflict": {
    "pos": "v.",
    "en_def": "to be different and not able to exist together",
    "cn_def": "衝突",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be different and not able to exist together",
        "cn_def": "衝突"
      },
      {
        "pos": "n.",
        "en_def": "a serious disagreement or fight",
        "cn_def": "衝突"
      }
    ]
  },
  "consult": {
    "pos": "v.",
    "en_def": "to ask an expert for advice",
    "cn_def": "諮詢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask an expert for advice",
        "cn_def": "諮詢"
      }
    ]
  },
  "consultation": {
    "pos": "n.",
    "en_def": "a meeting to get advice",
    "cn_def": "諮詢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meeting to get advice",
        "cn_def": "諮詢"
      }
    ]
  },
  "counsel": {
    "pos": "n.",
    "en_def": "advice",
    "cn_def": "忠告",
    "combined": [
      {
        "pos": "n.",
        "en_def": "advice",
        "cn_def": "忠告"
      }
    ]
  },
  "counselling": {
    "pos": "n.",
    "en_def": "professional help with personal problems",
    "cn_def": "輔導",
    "combined": [
      {
        "pos": "n.",
        "en_def": "professional help with personal problems",
        "cn_def": "輔導"
      }
    ]
  },
  "contact": {
    "pos": "v.",
    "en_def": "to call or write to someone",
    "cn_def": "聯繫",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to call or write to someone",
        "cn_def": "聯繫"
      },
      {
        "pos": "n.",
        "en_def": "communication with someone",
        "cn_def": "聯繫"
      }
    ]
  },
  "decline": {
    "pos": "v.",
    "en_def": "to become less or worse",
    "cn_def": "衰退",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become less or worse",
        "cn_def": "衰退"
      }
    ]
  },
  "decline in": {
    "pos": "n./phr.",
    "en_def": "a decrease in something",
    "cn_def": "下降",
    "combined": [
      {
        "pos": "n./phr.",
        "en_def": "a decrease in something",
        "cn_def": "下降"
      }
    ]
  },
  "discretion": {
    "pos": "n.",
    "en_def": "the freedom to decide what to do",
    "cn_def": "判斷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the freedom to decide what to do",
        "cn_def": "判斷"
      }
    ]
  },
  "draft": {
    "pos": "n.",
    "en_def": "a first version of a piece of writing",
    "cn_def": "草稿",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a first version of a piece of writing",
        "cn_def": "草稿"
      },
      {
        "pos": "v.",
        "en_def": "to write a first version of something",
        "cn_def": "起草"
      }
    ]
  },
  "energy": {
    "pos": "n.",
    "en_def": "power used to make machines work",
    "cn_def": "能源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "power used to make machines work",
        "cn_def": "能源"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
