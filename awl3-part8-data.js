// Part 8 Quiz Data: specific – volume
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 8 - specific – volume",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "specific",
    "pos": "adj.",
    "cn_def": "具體的",
    "en_def": "exact and clear; certain",
    "sentence": "Do you have any {{BLANK}} requirements for this project?",
    "cn": "您對這個項目有沒有具體的要求？"
  },
  {
    "word": "sufficient",
    "pos": "adj.",
    "cn_def": "足夠的",
    "en_def": "enough",
    "sentence": "Do we have {{BLANK}} resources to complete the project?",
    "cn": "我們有足夠的資源完成該項目嗎？"
  },
  {
    "word": "sufficiently",
    "pos": "adv.",
    "cn_def": "足夠地",
    "en_def": "enough",
    "sentence": "The room wasn't {{BLANK}} heated, so we felt cold.",
    "cn": "房間沒有足夠的加熱，所以我們覺得冷。"
  },
  {
    "word": "task",
    "pos": "v.",
    "cn_def": "任務",
    "en_def": "to give someone a job to do",
    "sentence": "She was {{BLANK}} with organizing the event.",
    "cn": "她負責組織這次活動。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務",
    "en_def": "a piece of work to be done",
    "sentence": "Next {{BLANK}} is to analyze the data.",
    "cn": "您的下一個任務是分析數據"
  },
  {
    "word": "technical",
    "pos": "adj.",
    "cn_def": "技術的",
    "en_def": "about special skills or machines",
    "sentence": "We encountered some {{BLANK}} difficulties during the setup.",
    "cn": "在設置過程中，我們遇到了一些技術上的困難。"
  },
  {
    "word": "technically",
    "pos": "adv.",
    "cn_def": "從技術上講",
    "en_def": "by the strict meaning of the rules",
    "sentence": "{{BLANK}} speaking, the code is correct, but it could be optimized.",
    "cn": "從技術上講，代碼是正確的，但它可以被優化。"
  },
  {
    "word": "technological",
    "pos": "adj.",
    "cn_def": "科技的",
    "en_def": "about new science and machines",
    "sentence": "The {{BLANK}} advancements in the last decade have been remarkable.",
    "cn": "過去十年的科技進步非常引人注目。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧",
    "en_def": "a special way of doing something",
    "sentence": "She has mastered the {{BLANK}} of playing the violin.",
    "cn": "她掌握了拉小提琴的技巧。"
  },
  {
    "word": "technology",
    "pos": "n.",
    "cn_def": "技術",
    "en_def": "science used to make machines and tools",
    "sentence": "The impact of {{BLANK}} on society is undeniable.",
    "cn": "技術對社會的影響是不可否認的。"
  },
  {
    "word": "valid",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "officially accepted; reasonable",
    "sentence": "The offer is no longer {{BLANK}} as it expired last month.",
    "cn": "由於上個月已過期，該優惠不再有效。"
  },
  {
    "word": "validity",
    "pos": "n.",
    "cn_def": "有效性",
    "en_def": "the state of being valid",
    "sentence": "We are checking the {{BLANK}} of your claims.",
    "cn": "我們正在檢查您的索賠的有效性。"
  },
  {
    "word": "expire",
    "pos": "v.",
    "cn_def": "到期",
    "en_def": "to come to an end; no longer be valid",
    "sentence": "Your membership will {{BLANK}} at the end of this month.",
    "cn": "您的會員資格將在本月底到期。"
  },
  {
    "word": "expired",
    "pos": "adj.",
    "cn_def": "已過期的",
    "en_def": "too old to be used",
    "sentence": "We cannot use this medicine because it's already {{BLANK}}.",
    "cn": "我們不能使用這種藥物，因為它已經過期了。"
  },
  {
    "word": "expiration",
    "pos": "n.",
    "cn_def": "期滿",
    "en_def": "the end of a period of time",
    "sentence": "The {{BLANK}} date of the contract is December 31st.",
    "cn": "合同的到期日期是12月31日。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "體積",
    "en_def": "the amount of space something fills",
    "sentence": "The {{BLANK}} of water in the tank is 100 liters.",
    "cn": "槽中的水體積為100升。"
  }
];

const MCQS = [
  {
    "q": "Do you have any ______ requirements for this project?",
    "options": [
      "illustrated",
      "specific",
      "proportional",
      "maximum"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Do we have ______ resources to complete the project?",
    "options": [
      "maximum",
      "illustrated",
      "sufficient",
      "removed"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The room wasn't ______ heated, so we felt cold.",
    "options": [
      "constantly",
      "subsequently",
      "physically",
      "sufficiently"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "She was ______ with organizing the event.",
    "options": [
      "task",
      "fund",
      "consider",
      "expire"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Next ______ is to analyze the data.",
    "options": [
      "location",
      "link",
      "publisher",
      "task"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "We encountered some ______ difficulties during the setup.",
    "options": [
      "considerate",
      "technical",
      "proportional",
      "included"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "______ speaking, the code is correct, but it could be optimized.",
    "options": [
      "considerably",
      "subsequently",
      "technically",
      "sufficiently"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The ______ advancements in the last decade have been remarkable.",
    "options": [
      "technological",
      "maximum",
      "excluded",
      "proportional"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "She has mastered the ______ of playing the violin.",
    "options": [
      "sex",
      "task",
      "portion",
      "technique"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The impact of ______ on society is undeniable.",
    "options": [
      "technology",
      "validity",
      "framework",
      "deduction"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The offer is no longer ______ as it expired last month.",
    "options": [
      "proportional",
      "dominant",
      "valid",
      "fundamental"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We are checking the ______ of your claims.",
    "options": [
      "registration",
      "validity",
      "removal",
      "physics"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Your membership will ______ at the end of this month.",
    "options": [
      "include",
      "dominate",
      "consider",
      "expire"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "We cannot use this medicine because it's already ______.",
    "options": [
      "removed",
      "expired",
      "reliable",
      "inclusive"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The ______ date of the contract is December 31st.",
    "options": [
      "removal",
      "coordination",
      "expiration",
      "justification"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The ______ of water in the tank is 100 liters.",
    "options": [
      "volume",
      "link",
      "outcome",
      "proportion"
    ],
    "answer": 0,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "specific": {
    "pos": "adj.",
    "en_def": "exact and clear; certain",
    "cn_def": "具體的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "exact and clear; certain",
        "cn_def": "具體的"
      }
    ]
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough",
    "cn_def": "足夠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "enough",
        "cn_def": "足夠的"
      }
    ]
  },
  "sufficiently": {
    "pos": "adv.",
    "en_def": "enough",
    "cn_def": "足夠地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "enough",
        "cn_def": "足夠地"
      }
    ]
  },
  "task": {
    "pos": "v.",
    "en_def": "to give someone a job to do",
    "cn_def": "任務",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone a job to do",
        "cn_def": "任務"
      },
      {
        "pos": "n.",
        "en_def": "a piece of work to be done",
        "cn_def": "任務"
      }
    ]
  },
  "technical": {
    "pos": "adj.",
    "en_def": "about special skills or machines",
    "cn_def": "技術的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about special skills or machines",
        "cn_def": "技術的"
      }
    ]
  },
  "technically": {
    "pos": "adv.",
    "en_def": "by the strict meaning of the rules",
    "cn_def": "從技術上講",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "by the strict meaning of the rules",
        "cn_def": "從技術上講"
      }
    ]
  },
  "technological": {
    "pos": "adj.",
    "en_def": "about new science and machines",
    "cn_def": "科技的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about new science and machines",
        "cn_def": "科技的"
      }
    ]
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something",
    "cn_def": "技巧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a special way of doing something",
        "cn_def": "技巧"
      }
    ]
  },
  "technology": {
    "pos": "n.",
    "en_def": "science used to make machines and tools",
    "cn_def": "技術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "science used to make machines and tools",
        "cn_def": "技術"
      }
    ]
  },
  "valid": {
    "pos": "adj.",
    "en_def": "officially accepted; reasonable",
    "cn_def": "有效的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "officially accepted; reasonable",
        "cn_def": "有效的"
      }
    ]
  },
  "validity": {
    "pos": "n.",
    "en_def": "the state of being valid",
    "cn_def": "有效性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being valid",
        "cn_def": "有效性"
      }
    ]
  },
  "expire": {
    "pos": "v.",
    "en_def": "to come to an end; no longer be valid",
    "cn_def": "到期",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to come to an end; no longer be valid",
        "cn_def": "到期"
      }
    ]
  },
  "expired": {
    "pos": "adj.",
    "en_def": "too old to be used",
    "cn_def": "已過期的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "too old to be used",
        "cn_def": "已過期的"
      }
    ]
  },
  "expiration": {
    "pos": "n.",
    "en_def": "the end of a period of time",
    "cn_def": "期滿",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the end of a period of time",
        "cn_def": "期滿"
      }
    ]
  },
  "volume": {
    "pos": "n.",
    "en_def": "the amount of space something fills",
    "cn_def": "體積",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount of space something fills",
        "cn_def": "體積"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
