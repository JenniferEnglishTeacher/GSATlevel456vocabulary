// Part 1 Quiz Data: achieve – complex
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 2 Part 1 - achieve – complex",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "實現",
    "en_def": "to succeed in doing something after trying hard",
    "sentence": "To succeed in this field, you must {{BLANK}} a balance between work and relaxation.",
    "cn": "要在這個領域取得成功，您必須實現工作和放鬆之間的平衡。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good you succeed in doing after hard work",
    "sentence": "Winning the medal was a significant {{BLANK}} for the athlete.",
    "cn": "對於運動員來說，獲得這枚獎牌是一個重要的成就。"
  },
  {
    "word": "high-achiever",
    "pos": "n.",
    "cn_def": "高成就者",
    "en_def": "a person who does very well in school or work",
    "sentence": "She's always been a {{BLANK}} since her school days.",
    "cn": "從上學時起，她一直是一個高成就者。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "獲得",
    "en_def": "to get or gain something",
    "sentence": "It's important to {{BLANK}} new skills in this rapidly changing world.",
    "cn": "在這個快速變化的世界裡，獲得新技能很重要。"
  },
  {
    "word": "acquisition",
    "pos": "n.",
    "cn_def": "收購",
    "en_def": "the act of getting something; something a company buys",
    "sentence": "The company's recent {{BLANK}} has expanded its market share.",
    "cn": "公司最近的收購擴大了其市場份額。"
  },
  {
    "word": "administer",
    "pos": "v.",
    "cn_def": "管理",
    "en_def": "to manage or be in charge of something",
    "sentence": "It's the principal's duty to {{BLANK}} the school's policies.",
    "cn": "校長有責任管理學校的政策。"
  },
  {
    "word": "administration",
    "pos": "n.",
    "cn_def": "管理",
    "en_def": "the work of managing a company or organization",
    "sentence": "The {{BLANK}} of the new drug must be done carefully.",
    "cn": "必須小心管理新藥物。"
  },
  {
    "word": "administrative",
    "pos": "adj.",
    "cn_def": "管理的",
    "en_def": "about managing a company or organization",
    "sentence": "He holds an {{BLANK}} position in the company.",
    "cn": "他在公司擔任管理職位。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to cause a change in someone or something",
    "sentence": "The drought will {{BLANK}} the crop yield this year.",
    "cn": "乾旱將影響今年的作物產量。"
  },
  {
    "word": "effect",
    "pos": "n.",
    "cn_def": "效果",
    "en_def": "a change or result caused by something",
    "sentence": "The new policy had an immediate {{BLANK}} on productivity.",
    "cn": "新政策立即產生了對生產率的效果。"
  },
  {
    "word": "be in effect",
    "pos": "phr",
    "cn_def": "生效",
    "en_def": "to be in use or have power (rules, laws)",
    "sentence": "The new rules will {{BLANK}} from next month.",
    "cn": "新規定將從下個月開始生效。"
  },
  {
    "word": "appropriate",
    "pos": "adj.",
    "cn_def": "適當的",
    "en_def": "right or suitable for a situation",
    "sentence": "Is it {{BLANK}} to wear jeans to the meeting?",
    "cn": "穿牛仔褲參加會議合適嗎？"
  },
  {
    "word": "aspect",
    "pos": "n.",
    "cn_def": "方面",
    "en_def": "one part or side of something",
    "sentence": "The {{BLANK}} of culture we'll study today is its influence on behavior.",
    "cn": "我們今天要研究的文化方面是它對行為的影響。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助",
    "en_def": "to help someone",
    "sentence": "Can you {{BLANK}} me with this task?",
    "cn": "你能協助我完成這項任務嗎？"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "幫助",
    "en_def": "help or support",
    "sentence": "I need your {{BLANK}} in moving these boxes.",
    "cn": "我需要你的説明來移動這些盒子。"
  },
  {
    "word": "category",
    "pos": "n.",
    "cn_def": "類別",
    "en_def": "a group of things of the same kind",
    "sentence": "The museum is organized by {{BLANK}} of artifacts.",
    "cn": "博物館按文物類別進行組織。"
  },
  {
    "word": "categorize",
    "pos": "v.",
    "cn_def": "分類",
    "en_def": "to put things into groups",
    "sentence": "The library {{BLANK}} books by genre.",
    "cn": "圖書館按類型分類書籍。"
  },
  {
    "word": "chapter",
    "pos": "n.",
    "cn_def": "章節",
    "en_def": "one part of a book",
    "sentence": "I'll finish reading this {{BLANK}} before going to bed.",
    "cn": "我會在睡覺前讀完這一章節。"
  },
  {
    "word": "charter",
    "pos": "n.",
    "cn_def": "憲章",
    "en_def": "an official document that sets out rules or rights",
    "sentence": "The company's {{BLANK}} outlines its mission and values.",
    "cn": "公司的憲章概述了其使命和價值觀。"
  },
  {
    "word": "commission",
    "pos": "n.",
    "cn_def": "委員會",
    "en_def": "an official group chosen to do a special job",
    "sentence": "She was appointed to the city's planning {{BLANK}}.",
    "cn": "她被任命為市規劃委員會。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區",
    "en_def": "the people living in one area",
    "sentence": "The entire {{BLANK}} came together to help after the disaster.",
    "cn": "災難發生後，整個社區都團結起來提供幫助。"
  },
  {
    "word": "complex",
    "pos": "n.",
    "cn_def": "綜合體",
    "en_def": "a group of buildings in one place",
    "sentence": "The apartment {{BLANK}} has a gym and a swimming pool.",
    "cn": "公寓綜合體設有健身房和游泳池。"
  }
];

const MCQS = [
  {
    "q": "To succeed in this field, you must ______ a balance between work and relaxation.",
    "options": [
      "achieve",
      "perceive",
      "affect",
      "conduct"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Winning the medal was a significant ______ for the athlete.",
    "options": [
      "chapter",
      "community",
      "complex",
      "achievement"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "She's always been a ______ since her school days.",
    "options": [
      "maintenance",
      "distinction",
      "high-achiever",
      "source"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "It's important to ______ new skills in this rapidly changing world.",
    "options": [
      "perceive",
      "acquire",
      "conduct",
      "conclude"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The company's recent ______ has expanded its market share.",
    "options": [
      "journal",
      "transfer",
      "acquisition",
      "effect"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "It's the principal's duty to ______ the school's policies.",
    "options": [
      "select",
      "administer",
      "text",
      "transfer"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The ______ of the new drug must be done carefully.",
    "options": [
      "feature",
      "participation",
      "tradition",
      "administration"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "He holds an ______ position in the company.",
    "options": [
      "administrative",
      "selective",
      "resourceful",
      "final"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The drought will ______ the crop yield this year.",
    "options": [
      "obtain",
      "consume",
      "acquire",
      "affect"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The new policy had an immediate ______ on productivity.",
    "options": [
      "text",
      "effect",
      "commission",
      "institution"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new rules will ______ from next month.",
    "options": [
      "be in effect",
      "investment in",
      "in conclusion",
      "participate in"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Is it ______ to wear jeans to the meeting?",
    "options": [
      "primary",
      "residential",
      "appropriate",
      "computerized"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The ______ of culture we'll study today is its influence on behavior.",
    "options": [
      "journal",
      "aspect",
      "residence",
      "text"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Can you ______ me with this task?",
    "options": [
      "injure",
      "conduct",
      "affect",
      "assist"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "I need your ______ in moving these boxes.",
    "options": [
      "complex",
      "feature",
      "assistance",
      "item"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The museum is organized by ______ of artifacts.",
    "options": [
      "category",
      "community",
      "institute",
      "complex"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The library ______ books by genre.",
    "options": [
      "consume",
      "text",
      "categorize",
      "obtain"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "I'll finish reading this ______ before going to bed.",
    "options": [
      "administration",
      "complex",
      "commission",
      "chapter"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The company's ______ outlines its mission and values.",
    "options": [
      "consumer",
      "charter",
      "perception",
      "effect"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "She was appointed to the city's planning ______.",
    "options": [
      "commission",
      "credit",
      "source",
      "conduct"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The entire ______ came together to help after the disaster.",
    "options": [
      "design",
      "strategy",
      "community",
      "culture"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The apartment ______ has a gym and a swimming pool.",
    "options": [
      "distinction",
      "injury",
      "credit",
      "complex"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in doing something after trying hard",
    "cn_def": "實現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to succeed in doing something after trying hard",
        "cn_def": "實現"
      }
    ]
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good you succeed in doing after hard work",
    "cn_def": "成就",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something good you succeed in doing after hard work",
        "cn_def": "成就"
      }
    ]
  },
  "high-achiever": {
    "pos": "n.",
    "en_def": "a person who does very well in school or work",
    "cn_def": "高成就者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who does very well in school or work",
        "cn_def": "高成就者"
      }
    ]
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or gain something",
    "cn_def": "獲得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to get or gain something",
        "cn_def": "獲得"
      }
    ]
  },
  "acquisition": {
    "pos": "n.",
    "en_def": "the act of getting something; something a company buys",
    "cn_def": "收購",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of getting something; something a company buys",
        "cn_def": "收購"
      }
    ]
  },
  "administer": {
    "pos": "v.",
    "en_def": "to manage or be in charge of something",
    "cn_def": "管理",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to manage or be in charge of something",
        "cn_def": "管理"
      }
    ]
  },
  "administration": {
    "pos": "n.",
    "en_def": "the work of managing a company or organization",
    "cn_def": "管理",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the work of managing a company or organization",
        "cn_def": "管理"
      }
    ]
  },
  "administrative": {
    "pos": "adj.",
    "en_def": "about managing a company or organization",
    "cn_def": "管理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about managing a company or organization",
        "cn_def": "管理的"
      }
    ]
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause a change in someone or something",
        "cn_def": "影響"
      }
    ]
  },
  "effect": {
    "pos": "n.",
    "en_def": "a change or result caused by something",
    "cn_def": "效果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change or result caused by something",
        "cn_def": "效果"
      }
    ]
  },
  "be in effect": {
    "pos": "phr",
    "en_def": "to be in use or have power (rules, laws)",
    "cn_def": "生效",
    "combined": [
      {
        "pos": "phr",
        "en_def": "to be in use or have power (rules, laws)",
        "cn_def": "生效"
      }
    ]
  },
  "appropriate": {
    "pos": "adj.",
    "en_def": "right or suitable for a situation",
    "cn_def": "適當的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "right or suitable for a situation",
        "cn_def": "適當的"
      }
    ]
  },
  "aspect": {
    "pos": "n.",
    "en_def": "one part or side of something",
    "cn_def": "方面",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one part or side of something",
        "cn_def": "方面"
      }
    ]
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone",
    "cn_def": "協助",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to help someone",
        "cn_def": "協助"
      }
    ]
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help or support",
    "cn_def": "幫助",
    "combined": [
      {
        "pos": "n.",
        "en_def": "help or support",
        "cn_def": "幫助"
      }
    ]
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of things of the same kind",
    "cn_def": "類別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of things of the same kind",
        "cn_def": "類別"
      }
    ]
  },
  "categorize": {
    "pos": "v.",
    "en_def": "to put things into groups",
    "cn_def": "分類",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put things into groups",
        "cn_def": "分類"
      }
    ]
  },
  "chapter": {
    "pos": "n.",
    "en_def": "one part of a book",
    "cn_def": "章節",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one part of a book",
        "cn_def": "章節"
      }
    ]
  },
  "charter": {
    "pos": "n.",
    "en_def": "an official document that sets out rules or rights",
    "cn_def": "憲章",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official document that sets out rules or rights",
        "cn_def": "憲章"
      }
    ]
  },
  "commission": {
    "pos": "n.",
    "en_def": "an official group chosen to do a special job",
    "cn_def": "委員會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official group chosen to do a special job",
        "cn_def": "委員會"
      }
    ]
  },
  "community": {
    "pos": "n.",
    "en_def": "the people living in one area",
    "cn_def": "社區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the people living in one area",
        "cn_def": "社區"
      }
    ]
  },
  "complex": {
    "pos": "n.",
    "en_def": "a group of buildings in one place",
    "cn_def": "綜合體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of buildings in one place",
        "cn_def": "綜合體"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
