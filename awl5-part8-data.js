// Part 8 Quiz Data: submit to – whereas
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 5 Part 8 - submit to – whereas",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "submit to",
    "pos": "v. phr.",
    "cn_def": "提交至",
    "en_def": "to give something to someone for a decision",
    "sentence": "Authors must {{BLANK}} their manuscripts to the editorial board for review.",
    "cn": "作者必須將他們的手稿提交至編輯委員會進行審查。"
  },
  {
    "word": "submitted",
    "pos": "v. past",
    "cn_def": "已提交的",
    "en_def": "to have been given in officially",
    "sentence": "The report was {{BLANK}} on time, despite the tight deadline.",
    "cn": "儘管時間緊迫，報告還是準時提交了。"
  },
  {
    "word": "substitution",
    "pos": "n.",
    "cn_def": "替代",
    "en_def": "using one thing in place of another",
    "sentence": "Using honey as a {{BLANK}} for sugar is a healthier option in recipes.",
    "cn": "在食譜中使用蜜糖替代糖是一個更健康的選擇。"
  },
  {
    "word": "sustain",
    "pos": "v.",
    "cn_def": "維持",
    "en_def": "to keep something going",
    "sentence": "The city has been trying to {{BLANK}} its historic landmarks for future generations.",
    "cn": "該城市一直在努力維護其歷史地標，以供後代參觀。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "可持續的",
    "en_def": "able to continue without harming nature",
    "sentence": "{{BLANK}} farming practices are vital for protecting the environment.",
    "cn": "可持續的農業實踐對於保護環境至關重要。"
  },
  {
    "word": "sustainability",
    "pos": "n.",
    "cn_def": "可持續性",
    "en_def": "the ability to continue without harm",
    "sentence": "The conference focused on {{BLANK}} in urban planning.",
    "cn": "會議聚焦於城市規劃的可持續性。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "符號",
    "en_def": "a sign or picture that stands for something",
    "sentence": "The dove is a universal {{BLANK}} of peace.",
    "cn": "和平鴿是和平的普遍符號。"
  },
  {
    "word": "symbolic of",
    "pos": "phr.",
    "cn_def": "象徵",
    "en_def": "to stand for an idea",
    "sentence": "The empty throne in the painting is {{BLANK}} the missing leadership in the kingdom.",
    "cn": "畫中的空王座象徵著王國中缺失的領導力。"
  },
  {
    "word": "symbolize",
    "pos": "v.",
    "cn_def": "象徵",
    "en_def": "to stand for an idea",
    "sentence": "White roses often {{BLANK}} purity and innocence.",
    "cn": "白玫瑰通常象徵純潔和無辜。"
  },
  {
    "word": "target",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you aim to achieve",
    "sentence": "The company has set a {{BLANK}} of increasing sales by 15% this year.",
    "cn": "該公司設定了今年銷售增長15%的目標。"
  },
  {
    "word": "transit",
    "pos": "n.",
    "cn_def": "過境，交通",
    "en_def": "being moved from one place to another",
    "sentence": "The goods are currently in {{BLANK}} and will arrive at the port tomorrow.",
    "cn": "貨物目前正在過境，將於明天到達港口。"
  },
  {
    "word": "transit",
    "pos": "v.",
    "cn_def": "經過",
    "en_def": "to pass through a place",
    "sentence": "The migratory birds {{BLANK}} through this region every spring.",
    "cn": "每年春天，候鳥都會經過這個地區。"
  },
  {
    "word": "transition",
    "pos": "n.",
    "cn_def": "轉變，過渡",
    "en_def": "a change from one state to another",
    "sentence": "The country is in a {{BLANK}} from a dictatorship to a democratic system.",
    "cn": "這個國家正在從獨裁制轉變為民主制度。"
  },
  {
    "word": "transitional",
    "pos": "adj.",
    "cn_def": "過渡的",
    "en_def": "happening during a change",
    "sentence": "{{BLANK}} governments often face challenges in ensuring stability.",
    "cn": "過渡政府在確保穩定性方面經常面臨挑戰。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢",
    "en_def": "the way something is changing",
    "sentence": "The current {{BLANK}} in fashion leans towards more sustainable practices.",
    "cn": "當前的時尚趨勢傾向於更加可持續的做法。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "時髦的",
    "en_def": "fashionable",
    "sentence": "Wearing vintage clothes has become very {{BLANK}} among young people.",
    "cn": "年輕人中間，穿復古衣服已經變得非常時髦。"
  },
  {
    "word": "version",
    "pos": "n.",
    "cn_def": "版本",
    "en_def": "a slightly different form of something",
    "sentence": "I prefer the original {{BLANK}} of the song to the remix.",
    "cn": "我更喜歡這首歌的原始版本，而不是混音版本。"
  },
  {
    "word": "welfare",
    "pos": "n.",
    "cn_def": "福利",
    "en_def": "help for people's health and happiness",
    "sentence": "The new policy aims to improve the {{BLANK}} of the country's elderly population.",
    "cn": "新政策旨在改善該國老年人口的福利。"
  },
  {
    "word": "whereas",
    "pos": "conj.",
    "cn_def": "然而",
    "en_def": "while on the other hand",
    "sentence": "Some people love the hustle and bustle of the city, {{BLANK}} others prefer the quiet of the countryside.",
    "cn": "有些人喜歡城市的喧囂，而其他人則更喜歡鄉村的寧靜。"
  }
];

const MCQS = [
  {
    "q": "Authors must ______ their manuscripts to the editorial board for review.",
    "options": [
      "submit to",
      "be equivalent to",
      "be submitted",
      "enable to V"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The report was ______ on time, despite the tight deadline.",
    "options": [
      "in pursuit of",
      "be submitted",
      "decline in",
      "make adjustment"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Using honey as a ______ for sugar is a healthier option in recipes.",
    "options": [
      "symbol",
      "image",
      "sustainability",
      "substitution"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The city has been trying to ______ its historic landmarks for future generations.",
    "options": [
      "extend",
      "generate",
      "sustain",
      "license"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "______ farming practices are vital for protecting the environment.",
    "options": [
      "sustainable",
      "evolved",
      "physical",
      "unstable"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The conference focused on ______ in urban planning.",
    "options": [
      "contact",
      "sustainability",
      "networking",
      "compound"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The dove is a universal ______ of peace.",
    "options": [
      "enforcement",
      "clause",
      "symbol",
      "orientation"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The empty throne in the painting is ______ the missing leadership in the kingdom.",
    "options": [
      "in pursuit of",
      "social networking",
      "decline in",
      "be symbolic of"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "White roses often ______ purity and innocence.",
    "options": [
      "symbolize",
      "extend",
      "notify",
      "challenge"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company has set a ______ of increasing sales by 15% this year.",
    "options": [
      "contact",
      "rate",
      "alternation",
      "target"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The goods are currently in ______ and will arrive at the port tomorrow.",
    "options": [
      "version",
      "ratio",
      "transit",
      "compound"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The migratory birds ______ through this region every spring.",
    "options": [
      "amend",
      "transit",
      "enforce",
      "extend"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The country is in a ______ from a dictatorship to a democratic system.",
    "options": [
      "transition",
      "capacity",
      "contact",
      "amendment"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "______ governments often face challenges in ensuring stability.",
    "options": [
      "oriental",
      "transitional",
      "imaginary",
      "mental"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The current ______ in fashion leans towards more sustainable practices.",
    "options": [
      "precision",
      "enforcement",
      "sustainability",
      "trend"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Wearing vintage clothes has become very ______ among young people.",
    "options": [
      "imaginary",
      "energetic",
      "trendy",
      "imaginative"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "I prefer the original ______ of the song to the remix.",
    "options": [
      "discretion",
      "version",
      "academy",
      "expansion"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The new policy aims to improve the ______ of the country's elderly population.",
    "options": [
      "conflict",
      "network",
      "welfare",
      "license"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Some people love the hustle and bustle of the city, ______ others prefer the quiet of the countryside.",
    "options": [
      "whereas",
      "trend",
      "alter",
      "monitor"
    ],
    "answer": 0,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "submit to": {
    "pos": "v. phr.",
    "en_def": "to give something to someone for a decision",
    "cn_def": "提交至",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "to give something to someone for a decision",
        "cn_def": "提交至"
      }
    ]
  },
  "be submitted": {
    "pos": "v. past",
    "en_def": "to have been given in officially",
    "cn_def": "已提交的",
    "combined": [
      {
        "pos": "v. past",
        "en_def": "to have been given in officially",
        "cn_def": "已提交的"
      }
    ]
  },
  "submitted": {
    "pos": "v. past",
    "en_def": "to have been given in officially",
    "cn_def": "已提交的",
    "combined": [
      {
        "pos": "v. past",
        "en_def": "to have been given in officially",
        "cn_def": "已提交的"
      }
    ]
  },
  "substitution": {
    "pos": "n.",
    "en_def": "using one thing in place of another",
    "cn_def": "替代",
    "combined": [
      {
        "pos": "n.",
        "en_def": "using one thing in place of another",
        "cn_def": "替代"
      }
    ]
  },
  "sustain": {
    "pos": "v.",
    "en_def": "to keep something going",
    "cn_def": "維持",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep something going",
        "cn_def": "維持"
      }
    ]
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue without harming nature",
    "cn_def": "可持續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to continue without harming nature",
        "cn_def": "可持續的"
      }
    ]
  },
  "sustainability": {
    "pos": "n.",
    "en_def": "the ability to continue without harm",
    "cn_def": "可持續性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to continue without harm",
        "cn_def": "可持續性"
      }
    ]
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a sign or picture that stands for something",
    "cn_def": "符號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sign or picture that stands for something",
        "cn_def": "符號"
      }
    ]
  },
  "be symbolic of": {
    "pos": "phr.",
    "en_def": "to stand for an idea",
    "cn_def": "象徵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stand for an idea",
        "cn_def": "象徵"
      }
    ]
  },
  "symbolic of": {
    "pos": "phr.",
    "en_def": "to stand for an idea",
    "cn_def": "象徵",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stand for an idea",
        "cn_def": "象徵"
      }
    ]
  },
  "symbolize": {
    "pos": "v.",
    "en_def": "to stand for an idea",
    "cn_def": "象徵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stand for an idea",
        "cn_def": "象徵"
      }
    ]
  },
  "target": {
    "pos": "n.",
    "en_def": "something you aim to achieve",
    "cn_def": "目標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you aim to achieve",
        "cn_def": "目標"
      }
    ]
  },
  "transit": {
    "pos": "n.",
    "en_def": "being moved from one place to another",
    "cn_def": "過境，交通",
    "combined": [
      {
        "pos": "n.",
        "en_def": "being moved from one place to another",
        "cn_def": "過境，交通"
      },
      {
        "pos": "v.",
        "en_def": "to pass through a place",
        "cn_def": "經過"
      }
    ]
  },
  "transition": {
    "pos": "n.",
    "en_def": "a change from one state to another",
    "cn_def": "轉變，過渡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change from one state to another",
        "cn_def": "轉變，過渡"
      }
    ]
  },
  "transitional": {
    "pos": "adj.",
    "en_def": "happening during a change",
    "cn_def": "過渡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening during a change",
        "cn_def": "過渡的"
      }
    ]
  },
  "trend": {
    "pos": "n.",
    "en_def": "the way something is changing",
    "cn_def": "趨勢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way something is changing",
        "cn_def": "趨勢"
      }
    ]
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "fashionable",
    "cn_def": "時髦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fashionable",
        "cn_def": "時髦的"
      }
    ]
  },
  "version": {
    "pos": "n.",
    "en_def": "a slightly different form of something",
    "cn_def": "版本",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a slightly different form of something",
        "cn_def": "版本"
      }
    ]
  },
  "welfare": {
    "pos": "n.",
    "en_def": "help for people's health and happiness",
    "cn_def": "福利",
    "combined": [
      {
        "pos": "n.",
        "en_def": "help for people's health and happiness",
        "cn_def": "福利"
      }
    ]
  },
  "whereas": {
    "pos": "conj.",
    "en_def": "while on the other hand",
    "cn_def": "然而",
    "combined": [
      {
        "pos": "conj.",
        "en_def": "while on the other hand",
        "cn_def": "然而"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
