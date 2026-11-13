// Part 6 Quiz Data: minimum – reveal
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 6 - minimum – reveal",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "minimum",
    "pos": "adj.",
    "cn_def": "最低的",
    "en_def": "the smallest amount possible",
    "sentence": "The {{BLANK}} requirement for application to this program is a bachelor's degree.",
    "cn": "申請該計劃的最低要求是學士學位。"
  },
  {
    "word": "ministry",
    "pos": "n.",
    "cn_def": "部",
    "en_def": "a government department",
    "sentence": "The {{BLANK}} of Health has issued new guidelines to combat the spread of the virus.",
    "cn": "衛生部發布了新的指南以對抗病毒的傳播。"
  },
  {
    "word": "maximum",
    "pos": "adj.",
    "cn_def": "最大的",
    "en_def": "the largest amount possible",
    "sentence": "The {{BLANK}} capacity of the hall is 200 people, so we need to limit the number of attendees.",
    "cn": "大廳的最大容量是200人，所以我們需要限制參與者的人數。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵",
    "en_def": "to make someone want to do something",
    "sentence": "The promise of a bonus did much to {{BLANK}} the employees to reach their sales targets.",
    "cn": "獎金的承諾在很大程度上激勵了員工達到他們的銷售目標。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機",
    "en_def": "the reason you want to do something",
    "sentence": "His {{BLANK}} for learning languages is to communicate with people from different cultures.",
    "cn": "他學習語言的動機是與來自不同文化的人交流。"
  },
  {
    "word": "neutral",
    "pos": "adj.",
    "cn_def": "中立的",
    "en_def": "not supporting either side",
    "sentence": "The mediator remained {{BLANK}} during the negotiations between the two parties.",
    "cn": "調解人在雙方談判期間保持中立。"
  },
  {
    "word": "nevertheless",
    "pos": "adv.",
    "cn_def": "然而",
    "en_def": "but still; however",
    "sentence": "The hike was challenging; {{BLANK}}, everyone enjoyed the stunning views at the summit.",
    "cn": "徒步旅行很具挑戰性；然而，每個人都喜歡山頂上令人驚嘆的景色。"
  },
  {
    "word": "oversea",
    "pos": "adj.",
    "cn_def": "海外的",
    "en_def": "in a foreign country",
    "sentence": "The company has several {{BLANK}} branches that contribute to its global presence.",
    "cn": "公司有幾個海外分支，有助於其全球影響力。"
  },
  {
    "word": "overseas",
    "pos": "adv.",
    "cn_def": "在海外",
    "en_def": "to or in a foreign country",
    "sentence": "She will be traveling {{BLANK}} for business over the next few months.",
    "cn": "她將在接下來的幾個月裡出國出差。"
  },
  {
    "word": "precede",
    "pos": "v.",
    "cn_def": "在...之前",
    "en_def": "to come before something",
    "sentence": "The meeting will {{BLANK}} the workshop, to provide an overview of the topics to be discussed.",
    "cn": "會議將在研討會之前舉行，以提供要討論的主題概述。"
  },
  {
    "word": "preceding",
    "pos": "adj.",
    "cn_def": "在...之前的",
    "en_def": "coming just before",
    "sentence": "The {{BLANK}} chapters provide the necessary background for understanding the complex theories.",
    "cn": "在...之前的章節為理解複雜的理論提供了必要的背景。"
  },
  {
    "word": "presume",
    "pos": "v.",
    "cn_def": "假設",
    "en_def": "to think something is true",
    "sentence": "We {{BLANK}} that all attendees have a basic understanding of the subject matter.",
    "cn": "我們假設所有與會者都對主題有基本的了解。"
  },
  {
    "word": "presumption",
    "pos": "n.",
    "cn_def": "假設",
    "en_def": "something thought to be true",
    "sentence": "There's a {{BLANK}} of innocence until proven guilty in the legal system.",
    "cn": "在法律系統中，被告在被證明有罪之前被假定為無辜。"
  },
  {
    "word": "ration",
    "pos": "n.",
    "cn_def": "定量",
    "en_def": "a fixed amount of food allowed",
    "sentence": "Due to the food shortage, each family received a {{BLANK}} of basic supplies.",
    "cn": "由於食品短缺，每個家庭都收到了基本供應品的定量。"
  },
  {
    "word": "rational",
    "pos": "adj.",
    "cn_def": "理性的",
    "en_def": "based on reason, not feelings",
    "sentence": "It's important to make a {{BLANK}} decision based on facts rather than emotions.",
    "cn": "基於事實而不是情感做出理性決定是很重要的。"
  },
  {
    "word": "rationality",
    "pos": "n.",
    "cn_def": "理性",
    "en_def": "the ability to think clearly",
    "sentence": "The debate required a level of {{BLANK}} to discuss the issues objectively.",
    "cn": "辯論需要一定程度的理性以客觀討論問題。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "恢復",
    "en_def": "to get well again; to get something back",
    "sentence": "The economy has begun to {{BLANK}} after the recent downturn.",
    "cn": "經濟在最近的低迷之後已經開始恢復。"
  },
  {
    "word": "recovered",
    "pos": "adj.",
    "cn_def": "恢復的",
    "en_def": "made well again",
    "sentence": "The {{BLANK}} artifacts are now on display at the local museum.",
    "cn": "恢復的文物現在在當地博物館展出。"
  },
  {
    "word": "recovery",
    "pos": "n.",
    "cn_def": "恢復",
    "en_def": "getting well again",
    "sentence": "The patient made a full {{BLANK}} after the surgery.",
    "cn": "病人在手術後完全恢復了。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "揭示",
    "en_def": "to show something hidden",
    "sentence": "The investigation will {{BLANK}} the truth behind the incident.",
    "cn": "調查將揭示事件背後的真相。"
  }
];

const MCQS = [
  {
    "q": "The ______ requirement for application to this program is a bachelor's degree.",
    "options": [
      "minimum",
      "diverse",
      "acknowledged",
      "enhanced"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ______ of Health has issued new guidelines to combat the spread of the virus.",
    "options": [
      "fee",
      "ministry",
      "edition",
      "immigration"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The ______ capacity of the hall is 200 people, so we need to limit the number of attendees.",
    "options": [
      "rational",
      "underlying",
      "cooperative",
      "maximum"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The promise of a bonus did much to ______ the employees to reach their sales targets.",
    "options": [
      "cite",
      "enhance",
      "motivate",
      "migrate"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "His ______ for learning languages is to communicate with people from different cultures.",
    "options": [
      "motivation",
      "bonding",
      "bond",
      "trace"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The mediator remained ______ during the negotiations between the two parties.",
    "options": [
      "revealed",
      "minimum",
      "neutral",
      "brief"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The hike was challenging; ______, everyone enjoyed the stunning views at the summit.",
    "options": [
      "furthermore",
      "accurately",
      "overseas",
      "nevertheless"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The company has several ______ branches that contribute to its global presence.",
    "options": [
      "edited",
      "oversea",
      "implicit",
      "enhanced"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "She will be traveling ______ for business over the next few months.",
    "options": [
      "accurately",
      "furthermore",
      "nevertheless",
      "overseas"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The meeting will ______ the workshop, to provide an overview of the topics to be discussed.",
    "options": [
      "precede",
      "transform",
      "edit",
      "enhance"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The ______ chapters provide the necessary background for understanding the complex theories.",
    "options": [
      "diverse",
      "preceding",
      "federal",
      "exceeding"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "We ______ that all attendees have a basic understanding of the subject matter.",
    "options": [
      "enhance",
      "authorize",
      "presume",
      "allocate"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "There's a ______ of innocence until proven guilty in the legal system.",
    "options": [
      "biodiversity",
      "presumption",
      "initiative",
      "trace"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Due to the food shortage, each family received a ______ of basic supplies.",
    "options": [
      "authority",
      "ministry",
      "ration",
      "initiative"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "It's important to make a ______ decision based on facts rather than emotions.",
    "options": [
      "ignorant",
      "ignored",
      "diverse",
      "rational"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The debate required a level of ______ to discuss the issues objectively.",
    "options": [
      "rationality",
      "assignment",
      "estate",
      "accuracy"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The economy has begun to ______ after the recent downturn.",
    "options": [
      "authorize",
      "exceed",
      "recover",
      "lecture"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The ______ artifacts are now on display at the local museum.",
    "options": [
      "explicit",
      "abstract",
      "cooperative",
      "recovered"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The patient made a full ______ after the surgery.",
    "options": [
      "fee",
      "recovery",
      "transportation",
      "tape"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The investigation will ______ the truth behind the incident.",
    "options": [
      "reveal",
      "instruct",
      "lecture",
      "brief"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "minimum": {
    "pos": "adj.",
    "en_def": "the smallest amount possible",
    "cn_def": "最低的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "the smallest amount possible",
        "cn_def": "最低的"
      }
    ]
  },
  "ministry": {
    "pos": "n.",
    "en_def": "a government department",
    "cn_def": "部",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a government department",
        "cn_def": "部"
      }
    ]
  },
  "maximum": {
    "pos": "adj.",
    "en_def": "the largest amount possible",
    "cn_def": "最大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "the largest amount possible",
        "cn_def": "最大的"
      }
    ]
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to do something",
    "cn_def": "激勵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone want to do something",
        "cn_def": "激勵"
      }
    ]
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the reason you want to do something",
    "cn_def": "動機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the reason you want to do something",
        "cn_def": "動機"
      }
    ]
  },
  "neutral": {
    "pos": "adj.",
    "en_def": "not supporting either side",
    "cn_def": "中立的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not supporting either side",
        "cn_def": "中立的"
      }
    ]
  },
  "nevertheless": {
    "pos": "adv.",
    "en_def": "but still; however",
    "cn_def": "然而",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "but still; however",
        "cn_def": "然而"
      }
    ]
  },
  "oversea": {
    "pos": "adj.",
    "en_def": "in a foreign country",
    "cn_def": "海外的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "in a foreign country",
        "cn_def": "海外的"
      }
    ]
  },
  "overseas": {
    "pos": "adv.",
    "en_def": "to or in a foreign country",
    "cn_def": "在海外",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "to or in a foreign country",
        "cn_def": "在海外"
      }
    ]
  },
  "precede": {
    "pos": "v.",
    "en_def": "to come before something",
    "cn_def": "在...之前",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come before something",
        "cn_def": "在...之前"
      }
    ]
  },
  "preceding": {
    "pos": "adj.",
    "en_def": "coming just before",
    "cn_def": "在...之前的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "coming just before",
        "cn_def": "在...之前的"
      }
    ]
  },
  "presume": {
    "pos": "v.",
    "en_def": "to think something is true",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think something is true",
        "cn_def": "假設"
      }
    ]
  },
  "presumption": {
    "pos": "n.",
    "en_def": "something thought to be true",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something thought to be true",
        "cn_def": "假設"
      }
    ]
  },
  "ration": {
    "pos": "n.",
    "en_def": "a fixed amount of food allowed",
    "cn_def": "定量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed amount of food allowed",
        "cn_def": "定量"
      }
    ]
  },
  "rational": {
    "pos": "adj.",
    "en_def": "based on reason, not feelings",
    "cn_def": "理性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on reason, not feelings",
        "cn_def": "理性的"
      }
    ]
  },
  "rationality": {
    "pos": "n.",
    "en_def": "the ability to think clearly",
    "cn_def": "理性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to think clearly",
        "cn_def": "理性"
      }
    ]
  },
  "recover": {
    "pos": "v.",
    "en_def": "to get well again; to get something back",
    "cn_def": "恢復",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to get well again; to get something back",
        "cn_def": "恢復"
      }
    ]
  },
  "recovered": {
    "pos": "adj.",
    "en_def": "made well again",
    "cn_def": "恢復的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made well again",
        "cn_def": "恢復的"
      }
    ]
  },
  "recovery": {
    "pos": "n.",
    "en_def": "getting well again",
    "cn_def": "恢復",
    "combined": [
      {
        "pos": "n.",
        "en_def": "getting well again",
        "cn_def": "恢復"
      }
    ]
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show something hidden",
    "cn_def": "揭示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show something hidden",
        "cn_def": "揭示"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
