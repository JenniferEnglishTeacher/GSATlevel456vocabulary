// Part 6 Quiz Data: secure – transfer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 2 Part 6 - secure – transfer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "safe; protected",
    "sentence": "The facility is {{BLANK}} and monitored 24/7.",
    "cn": "該設施是安全的，並且24/7進行監控。"
  },
  {
    "word": "secure",
    "pos": "v.",
    "cn_def": "獲得；固定",
    "en_def": "to get something important; to fasten firmly",
    "sentence": "She managed to {{BLANK}} a place in the highly competitive program.",
    "cn": "她設法在競爭激烈的項目中獲得了一個位置。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "安全",
    "en_def": "protection from danger or crime",
    "sentence": "The new system provides better {{BLANK}} against theft.",
    "cn": "新系統提供了更好的防盜安全性。"
  },
  {
    "word": "seek-sought-sought",
    "pos": "v.",
    "cn_def": "尋求",
    "en_def": "to look for or try to get something",
    "sentence": "She {{BLANK}} advice from her mentor.",
    "cn": "她尋求了導師的建議。"
  },
  {
    "word": "select",
    "pos": "v.",
    "cn_def": "選擇",
    "en_def": "to choose something",
    "sentence": "Please {{BLANK}} your preferred option from the list.",
    "cn": "請從清單中選擇您的首選選項。"
  },
  {
    "word": "selection",
    "pos": "n.",
    "cn_def": "選擇",
    "en_def": "a group of things to choose from",
    "sentence": "There's a wide {{BLANK}} of desserts available.",
    "cn": "有各種各樣的甜點可供選擇。"
  },
  {
    "word": "selective",
    "pos": "adj.",
    "cn_def": "有選擇性的",
    "en_def": "careful about what you choose",
    "sentence": "Be {{BLANK}} about the information you share online.",
    "cn": "對您線上分享的資訊要有選擇性。"
  },
  {
    "word": "site",
    "pos": "n.",
    "cn_def": "地點",
    "en_def": "a place where something is or happened",
    "sentence": "The {{BLANK}} of the ancient temple is now a tourist attraction.",
    "cn": "古廟的遺址現在是一個旅遊景點。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a plan to reach a goal",
    "sentence": "The company's marketing {{BLANK}} proved to be very effective.",
    "cn": "該公司的行銷策略被證明非常有效。"
  },
  {
    "word": "survey",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to ask many people questions to learn their opinions",
    "sentence": "We will {{BLANK}} the employees to get their feedback.",
    "cn": "我們將調查員工以獲取他們的回饋。"
  },
  {
    "word": "survey",
    "pos": "n.",
    "cn_def": "調查",
    "en_def": "a set of questions to learn people's opinions",
    "sentence": "According to the {{BLANK}}, most people prefer online shopping.",
    "cn": "根據調查，大多數人更喜歡線上購物。"
  },
  {
    "word": "text",
    "pos": "n.",
    "cn_def": "文本",
    "en_def": "the written words in a book or document",
    "sentence": "Please refer to the {{BLANK}} for a detailed explanation.",
    "cn": "請參閱文本以獲取詳細解釋。"
  },
  {
    "word": "text",
    "pos": "v.",
    "cn_def": "發短信",
    "en_def": "to send a message by phone",
    "sentence": "I'll {{BLANK}} you the address.",
    "cn": "我會發短信給你地址。"
  },
  {
    "word": "context",
    "pos": "n.",
    "cn_def": "上下文",
    "en_def": "the situation or words around something",
    "sentence": "Without {{BLANK}}, the statement can be misleading.",
    "cn": "如果沒有上下文，聲明可能會產生誤導。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom passed down from the past",
    "sentence": "It's a {{BLANK}} in our family to have a big reunion every year.",
    "cn": "我們家的傳統是每年都有一個大團圓。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following old customs",
    "sentence": "They wore {{BLANK}} costumes for the festival.",
    "cn": "他們穿傳統服裝參加節日。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "轉移",
    "en_def": "to move from one place to another",
    "sentence": "You can {{BLANK}} the funds to my account.",
    "cn": "您可以將資金轉移到我的帳戶。"
  },
  {
    "word": "transfer",
    "pos": "n.",
    "cn_def": "轉移；調動",
    "en_def": "moving someone or something to another place",
    "sentence": "He requested a job {{BLANK}} from the company's headquarter to the regional branch in Shanghai.",
    "cn": "他要求將工作轉移從公司總部移到在上海的分支機搆。"
  }
];

const MCQS = [
  {
    "q": "The facility is ______ and monitored 24/7.",
    "options": [
      "secure",
      "equivalent",
      "administrative",
      "resourceful"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "She managed to ______ a place in the highly competitive program.",
    "options": [
      "seek-sought-sought",
      "construct",
      "secure",
      "impact"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new system provides better ______ against theft.",
    "options": [
      "feature",
      "security",
      "site",
      "assistance"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "She ______ advice from her mentor.",
    "options": [
      "categorize",
      "text",
      "finalize",
      "seek-sought-sought"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please ______ your preferred option from the list.",
    "options": [
      "select",
      "regulate",
      "conclude",
      "achieve"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "There's a wide ______ of desserts available.",
    "options": [
      "chapter",
      "survey",
      "selection",
      "journal"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Be ______ about the information you share online.",
    "options": [
      "complicated",
      "selective",
      "restricted",
      "complex"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The ______ of the ancient temple is now a tourist attraction.",
    "options": [
      "anomaly",
      "feature",
      "resident",
      "site"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The company's marketing ______ proved to be very effective.",
    "options": [
      "strategy",
      "journal",
      "construction",
      "feature"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "We will ______ the employees to get their feedback.",
    "options": [
      "conduct",
      "maintain",
      "affect",
      "survey"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "According to the ______, most people prefer online shopping.",
    "options": [
      "distinction",
      "survey",
      "effect",
      "equation"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Please refer to the ______ for a detailed explanation.",
    "options": [
      "administration",
      "item",
      "text",
      "consumption"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "I'll ______ you the address.",
    "options": [
      "text",
      "secure",
      "administer",
      "restrict"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Without ______, the statement can be misleading.",
    "options": [
      "consumer",
      "journal",
      "context",
      "category"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "It's a ______ in our family to have a big reunion every year.",
    "options": [
      "selection",
      "residence",
      "credit",
      "tradition"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "They wore ______ costumes for the festival.",
    "options": [
      "selective",
      "traditional",
      "primary",
      "abnormal"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "You can ______ the funds to my account.",
    "options": [
      "transfer",
      "acquire",
      "evaluate",
      "administer"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "He requested a job ______ from the company's headquarter to the regional branch in Shanghai.",
    "options": [
      "construction",
      "maintenance",
      "feature",
      "transfer"
    ],
    "answer": 3,
    "vocabIndex": 17
  }
];

const LOOKUP = {
  "secure": {
    "pos": "adj.",
    "en_def": "safe; protected",
    "cn_def": "安全的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "safe; protected",
        "cn_def": "安全的"
      },
      {
        "pos": "v.",
        "en_def": "to get something important; to fasten firmly",
        "cn_def": "獲得；固定"
      }
    ]
  },
  "security": {
    "pos": "n.",
    "en_def": "protection from danger or crime",
    "cn_def": "安全",
    "combined": [
      {
        "pos": "n.",
        "en_def": "protection from danger or crime",
        "cn_def": "安全"
      }
    ]
  },
  "seek-sought-sought": {
    "pos": "v.",
    "en_def": "to look for or try to get something",
    "cn_def": "尋求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to look for or try to get something",
        "cn_def": "尋求"
      }
    ]
  },
  "select": {
    "pos": "v.",
    "en_def": "to choose something",
    "cn_def": "選擇",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to choose something",
        "cn_def": "選擇"
      }
    ]
  },
  "selection": {
    "pos": "n.",
    "en_def": "a group of things to choose from",
    "cn_def": "選擇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of things to choose from",
        "cn_def": "選擇"
      }
    ]
  },
  "selective": {
    "pos": "adj.",
    "en_def": "careful about what you choose",
    "cn_def": "有選擇性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "careful about what you choose",
        "cn_def": "有選擇性的"
      }
    ]
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is or happened",
    "cn_def": "地點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where something is or happened",
        "cn_def": "地點"
      }
    ]
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan to reach a goal",
    "cn_def": "策略",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a plan to reach a goal",
        "cn_def": "策略"
      }
    ]
  },
  "survey": {
    "pos": "v.",
    "en_def": "to ask many people questions to learn their opinions",
    "cn_def": "調查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask many people questions to learn their opinions",
        "cn_def": "調查"
      },
      {
        "pos": "n.",
        "en_def": "a set of questions to learn people's opinions",
        "cn_def": "調查"
      }
    ]
  },
  "text": {
    "pos": "n.",
    "en_def": "the written words in a book or document",
    "cn_def": "文本",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the written words in a book or document",
        "cn_def": "文本"
      },
      {
        "pos": "v.",
        "en_def": "to send a message by phone",
        "cn_def": "發短信"
      }
    ]
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or words around something",
    "cn_def": "上下文",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the situation or words around something",
        "cn_def": "上下文"
      }
    ]
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom passed down from the past",
    "cn_def": "傳統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a custom passed down from the past",
        "cn_def": "傳統"
      }
    ]
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following old customs",
    "cn_def": "傳統的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "following old customs",
        "cn_def": "傳統的"
      }
    ]
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to move from one place to another",
    "cn_def": "轉移",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move from one place to another",
        "cn_def": "轉移"
      },
      {
        "pos": "n.",
        "en_def": "moving someone or something to another place",
        "cn_def": "轉移；調動"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
