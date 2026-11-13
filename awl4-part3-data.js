// Part 3 Quiz Data: dimensional – implement
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 4 Part 3 - dimensional – implement",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dimensional",
    "pos": "adj.",
    "cn_def": "有...維度的",
    "en_def": "having a certain number of dimensions",
    "sentence": "The artist's work is known for its {{BLANK}} quality.",
    "cn": "藝術家的作品因其多維度的特質而聞名。"
  },
  {
    "word": "domestic",
    "pos": "adj.",
    "cn_def": "本國的",
    "en_def": "about your own country",
    "sentence": "The product has been popular both in {{BLANK}} and international markets.",
    "cn": "該產品在國內外市場都很受歡迎。"
  },
  {
    "word": "Domestic",
    "pos": "adj.",
    "cn_def": "家庭的",
    "en_def": "about the home or family",
    "sentence": "{{BLANK}} chores can be quite time-consuming.",
    "cn": "家庭雜務可能相當耗時。"
  },
  {
    "word": "emerge",
    "pos": "v.",
    "cn_def": "出現",
    "en_def": "to appear or come out",
    "sentence": "New issues will {{BLANK}} as the project progresses.",
    "cn": "隨著項目的進展，將會出現新的問題。"
  },
  {
    "word": "emerge from",
    "pos": "phr.",
    "cn_def": "從...中出現",
    "en_def": "to come out of something",
    "sentence": "The butterfly will {{BLANK}} its cocoon when it's ready.",
    "cn": "當蝴蝶準備好時，它將從它的繭中出現。"
  },
  {
    "word": "emergent",
    "pos": "adj.",
    "cn_def": "新興的",
    "en_def": "new and starting to develop",
    "sentence": "In recent years, we've seen an {{BLANK}} trend towards sustainability in the fashion industry.",
    "cn": "近年來，我們在時尚行業看到了一個朝向可持續性的新興趨勢。"
  },
  {
    "word": "emergence",
    "pos": "n.",
    "cn_def": "出現",
    "en_def": "the act of appearing",
    "sentence": "The {{BLANK}} of digital currencies has transformed the financial landscape.",
    "cn": "數位貨幣的出現改變了金融格局。"
  },
  {
    "word": "emergency",
    "pos": "n.",
    "cn_def": "緊急狀況",
    "en_def": "a dangerous situation that needs fast action",
    "sentence": "In case of an {{BLANK}}, please call this number.",
    "cn": "如果有緊急狀況，請撥打這個號碼。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "a mistake",
    "sentence": "There was an {{BLANK}} in the system that caused the application to crash.",
    "cn": "系統中有一個錯誤導致應用程式崩潰。"
  },
  {
    "word": "ethnic",
    "pos": "adj.",
    "cn_def": "種族的",
    "en_def": "about a group of people with the same culture",
    "sentence": "The festival celebrates the {{BLANK}} diversity of the community.",
    "cn": "該節日慶祝社區的種族多樣性。"
  },
  {
    "word": "ethic",
    "pos": "n.",
    "cn_def": "倫理",
    "en_def": "moral rules about right and wrong",
    "sentence": "The doctor adheres to a strict {{BLANK}} when treating patients.",
    "cn": "醫生在治療病人時堅守嚴格的倫理。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you hope to do",
    "sentence": "Achieving this {{BLANK}} requires dedication and hard work.",
    "cn": "達到這個目標需要奉獻和努力。"
  },
  {
    "word": "grant",
    "pos": "n.",
    "cn_def": "補助金",
    "en_def": "money given for a special purpose",
    "sentence": "She received a research {{BLANK}} from the government.",
    "cn": "她從政府那裡得到了一筆研究補助金。"
  },
  {
    "word": "granted",
    "pos": "v.",
    "cn_def": "批准",
    "en_def": "gave or allowed something officially",
    "sentence": "The city council {{BLANK}} permission for the new building's construction.",
    "cn": "市議會批准了新大樓的建設許可。"
  },
  {
    "word": "take for granted",
    "pos": "phr.",
    "cn_def": "視為理所當然",
    "en_def": "to expect something always and not value it",
    "sentence": "We often {{BLANK}} the clean air we breathe, not realizing its importance until it's gone.",
    "cn": "我們經常把呼吸的乾淨空氣視為理所當然，直到它消失我們才意識到它的重要性。"
  },
  {
    "word": "hence",
    "pos": "adv.",
    "cn_def": "因此",
    "en_def": "for this reason; so",
    "sentence": "The roads were slippery; {{BLANK}}, driving was dangerous.",
    "cn": "道路很滑；因此，開車很危險。"
  },
  {
    "word": "hypothesis",
    "pos": "n.",
    "cn_def": "假設",
    "en_def": "an idea that has not yet been proven",
    "sentence": "Based on the data, the scientist formulated a new {{BLANK}}.",
    "cn": "基於數據，科學家提出了一個新的假設。"
  },
  {
    "word": "hypothesize",
    "pos": "v.",
    "cn_def": "提出假設",
    "en_def": "to suggest an idea that needs testing",
    "sentence": "Researchers {{BLANK}} that the decline is due to environmental factors.",
    "cn": "研究者假設該衰退是由於環境因素造成的。"
  },
  {
    "word": "implement",
    "pos": "v.",
    "cn_def": "實施",
    "en_def": "to put a plan into action",
    "sentence": "The government decided to {{BLANK}} a new policy to reduce pollution.",
    "cn": "政府決定實施一項新政策以減少污染。"
  }
];

const MCQS = [
  {
    "q": "The artist's work is known for its ______ quality.",
    "options": [
      "domestic",
      "dimensional",
      "parallel",
      "prior"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The product has been popular both in ______ and international markets.",
    "options": [
      "stressful",
      "annual",
      "occupied",
      "domestic"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "______ chores can be quite time-consuming.",
    "options": [
      "predicted",
      "retained",
      "domestic",
      "implied"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "New issues will ______ as the project progresses.",
    "options": [
      "emerge",
      "resolve",
      "sum",
      "imply"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The butterfly will ______ its cocoon when it's ready.",
    "options": [
      "in contrast",
      "communicate with",
      "impose ...to",
      "emerge from"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "In recent years, we've seen an ______ trend towards sustainability in the fashion industry.",
    "options": [
      "emergent",
      "implied",
      "attributed",
      "domestic"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The ______ of digital currencies has transformed the financial landscape.",
    "options": [
      "stress",
      "goal",
      "emergence",
      "resolve"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "In case of an ______, please call this number.",
    "options": [
      "error",
      "emergency",
      "sum",
      "occupation"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "There was an ______ in the system that caused the application to crash.",
    "options": [
      "error",
      "civilian",
      "resolution",
      "occupation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The festival celebrates the ______ diversity of the community.",
    "options": [
      "implied",
      "ethnic",
      "imposed",
      "integrated"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The doctor adheres to a strict ______ when treating patients.",
    "options": [
      "goal",
      "integration",
      "ethic",
      "implementation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Achieving this ______ requires dedication and hard work.",
    "options": [
      "error",
      "projector",
      "principal",
      "goal"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "She received a research ______ from the government.",
    "options": [
      "resolve",
      "hypothesis",
      "grant",
      "principle"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The city council ______ permission for the new building's construction.",
    "options": [
      "occupy",
      "summarize",
      "stress",
      "granted"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "We often ______ the clean air we breathe, not realizing its importance until it's gone.",
    "options": [
      "take...for granted",
      "make a commitment to",
      "emerge from",
      "in spite of"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The roads were slippery; ______, driving was dangerous.",
    "options": [
      "annually",
      "hence",
      "adequately",
      "approximately"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Based on the data, the scientist formulated a new ______.",
    "options": [
      "contrast",
      "principal",
      "status",
      "hypothesis"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Researchers ______ that the decline is due to environmental factors.",
    "options": [
      "hypothesize",
      "undertake-undertook-undertaken",
      "resolve",
      "retain"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The government decided to ______ a new policy to reduce pollution.",
    "options": [
      "resolve",
      "imply",
      "implement",
      "emerge"
    ],
    "answer": 2,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "dimensional": {
    "pos": "adj.",
    "en_def": "having a certain number of dimensions",
    "cn_def": "有...維度的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a certain number of dimensions",
        "cn_def": "有...維度的"
      }
    ]
  },
  "domestic": {
    "pos": "adj.",
    "en_def": "about your own country",
    "cn_def": "本國的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about your own country",
        "cn_def": "本國的"
      },
      {
        "pos": "adj.",
        "en_def": "about the home or family",
        "cn_def": "家庭的"
      }
    ]
  },
  "emerge": {
    "pos": "v.",
    "en_def": "to appear or come out",
    "cn_def": "出現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to appear or come out",
        "cn_def": "出現"
      }
    ]
  },
  "emerge from": {
    "pos": "phr.",
    "en_def": "to come out of something",
    "cn_def": "從...中出現",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to come out of something",
        "cn_def": "從...中出現"
      }
    ]
  },
  "emergent": {
    "pos": "adj.",
    "en_def": "new and starting to develop",
    "cn_def": "新興的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "new and starting to develop",
        "cn_def": "新興的"
      }
    ]
  },
  "emergence": {
    "pos": "n.",
    "en_def": "the act of appearing",
    "cn_def": "出現",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of appearing",
        "cn_def": "出現"
      }
    ]
  },
  "emergency": {
    "pos": "n.",
    "en_def": "a dangerous situation that needs fast action",
    "cn_def": "緊急狀況",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a dangerous situation that needs fast action",
        "cn_def": "緊急狀況"
      }
    ]
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake",
    "cn_def": "錯誤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mistake",
        "cn_def": "錯誤"
      }
    ]
  },
  "ethnic": {
    "pos": "adj.",
    "en_def": "about a group of people with the same culture",
    "cn_def": "種族的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about a group of people with the same culture",
        "cn_def": "種族的"
      }
    ]
  },
  "ethic": {
    "pos": "n.",
    "en_def": "moral rules about right and wrong",
    "cn_def": "倫理",
    "combined": [
      {
        "pos": "n.",
        "en_def": "moral rules about right and wrong",
        "cn_def": "倫理"
      }
    ]
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you hope to do",
    "cn_def": "目標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you hope to do",
        "cn_def": "目標"
      }
    ]
  },
  "grant": {
    "pos": "n.",
    "en_def": "money given for a special purpose",
    "cn_def": "補助金",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money given for a special purpose",
        "cn_def": "補助金"
      }
    ]
  },
  "granted": {
    "pos": "v.",
    "en_def": "gave or allowed something officially",
    "cn_def": "批准",
    "combined": [
      {
        "pos": "v.",
        "en_def": "gave or allowed something officially",
        "cn_def": "批准"
      }
    ]
  },
  "take for granted": {
    "pos": "phr.",
    "en_def": "to expect something always and not value it",
    "cn_def": "視為理所當然",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to expect something always and not value it",
        "cn_def": "視為理所當然"
      }
    ]
  },
  "take...for granted": {
    "pos": "phr.",
    "en_def": "to expect something always and not value it",
    "cn_def": "視為理所當然",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to expect something always and not value it",
        "cn_def": "視為理所當然"
      }
    ]
  },
  "hence": {
    "pos": "adv.",
    "en_def": "for this reason; so",
    "cn_def": "因此",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "for this reason; so",
        "cn_def": "因此"
      }
    ]
  },
  "hypothesis": {
    "pos": "n.",
    "en_def": "an idea that has not yet been proven",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea that has not yet been proven",
        "cn_def": "假設"
      }
    ]
  },
  "hypothesize": {
    "pos": "v.",
    "en_def": "to suggest an idea that needs testing",
    "cn_def": "提出假設",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest an idea that needs testing",
        "cn_def": "提出假設"
      }
    ]
  },
  "implement": {
    "pos": "v.",
    "en_def": "to put a plan into action",
    "cn_def": "實施",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put a plan into action",
        "cn_def": "實施"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
