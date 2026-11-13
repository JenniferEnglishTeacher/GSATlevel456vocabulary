// Part 7 Quiz Data: retain – undertaking
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 4 Part 7 - retain – undertaking",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "retain",
    "pos": "v.",
    "cn_def": "保留",
    "en_def": "to keep something",
    "sentence": "The company decided to {{BLANK}} its older employees due to their vast experience.",
    "cn": "由於他們的豐富經驗，公司決定保留其資深員工。"
  },
  {
    "word": "retained",
    "pos": "adj.",
    "cn_def": "被保留的",
    "en_def": "kept",
    "sentence": "The {{BLANK}} knowledge from the workshop greatly benefited the team.",
    "cn": "從工作坊中獲得的知識對團隊大有裨益。"
  },
  {
    "word": "series",
    "pos": "n.",
    "cn_def": "系列",
    "en_def": "a number of related things in order",
    "sentence": "The author released the third book in the popular {{BLANK}}.",
    "cn": "作者發布了受歡迎的系列的第三本書。"
  },
  {
    "word": "a series of",
    "pos": "phr.",
    "cn_def": "一系列",
    "en_def": "several related things one after another",
    "sentence": "The museum is hosting {{BLANK}} events throughout the summer.",
    "cn": "博物館將在整個夏季舉辦一系列活動。"
  },
  {
    "word": "statistics",
    "pos": "n.",
    "cn_def": "統計數據",
    "en_def": "numbers that give information about something",
    "sentence": "According to recent {{BLANK}} , the unemployment rate has dropped significantly.",
    "cn": "根據最近的統計數據，失業率已大幅下降。"
  },
  {
    "word": "status",
    "pos": "n.",
    "cn_def": "狀態，地位",
    "en_def": "position or rank in a group",
    "sentence": "The {{BLANK}} of the order is still 'processing'.",
    "cn": "訂單的狀態仍然是'正在處理中'。"
  },
  {
    "word": "stress",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is important",
    "sentence": "The teacher {{BLANK}} the importance of regular study habits.",
    "cn": "老師強調定期學習習慣的重要性。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry because of problems",
    "sentence": "High levels of {{BLANK}} can lead to various health issues.",
    "cn": "高壓力水平可能導致各種健康問題。"
  },
  {
    "word": "stressed out",
    "pos": "phr.",
    "cn_def": "非常緊張",
    "en_def": "very worried and nervous",
    "sentence": "Due to the looming deadlines, many employees were {{BLANK}}.",
    "cn": "由於即將到來的截止日期，許多員工都感到非常緊張。"
  },
  {
    "word": "stressful",
    "pos": "adj.",
    "cn_def": "有壓力的",
    "en_def": "causing worry",
    "sentence": "Preparing for an international conference can be very {{BLANK}}.",
    "cn": "為國際會議做準備可能非常有壓力。"
  },
  {
    "word": "under stress",
    "pos": "phr.",
    "cn_def": "處於壓力之下",
    "en_def": "feeling a lot of pressure",
    "sentence": "Due to multiple projects at hand, he is currently {{BLANK}}.",
    "cn": "由於手頭有多個專案，他目前處於壓力之下。"
  },
  {
    "word": "subsequent",
    "pos": "adj.",
    "cn_def": "隨後的",
    "en_def": "coming after something else",
    "sentence": "The main event will start at 6 pm, with a {{BLANK}} dinner at 8 pm.",
    "cn": "主要活動將於下午6點開始，隨後的晚餐將於8點舉行。"
  },
  {
    "word": "sum",
    "pos": "v.",
    "cn_def": "總結",
    "en_def": "to give a short summary",
    "sentence": "Please {{BLANK}} up the main points of the meeting for those who were absent.",
    "cn": "請為缺席的人總結會議的主要要點。"
  },
  {
    "word": "sum",
    "pos": "n.",
    "cn_def": "總和",
    "en_def": "the total when numbers are added",
    "sentence": "The {{BLANK}} of 5 and 3 is 8.",
    "cn": "5加3的總和是8。"
  },
  {
    "word": "summary",
    "pos": "n.",
    "cn_def": "概要，摘要",
    "en_def": "a short statement of the main points",
    "sentence": "Can you give me a brief {{BLANK}} of the article?",
    "cn": "你能給我一個文章的簡短摘要嗎？"
  },
  {
    "word": "summarize",
    "pos": "v.",
    "cn_def": "總結",
    "en_def": "to give the main points briefly",
    "sentence": "He was able to {{BLANK}} the lengthy report in just a few sentences.",
    "cn": "他能夠用幾句話總結那份冗長的報告。"
  },
  {
    "word": "undertake-undertook-undertaken",
    "pos": "v.",
    "cn_def": "承擔",
    "en_def": "to agree to do a job or task",
    "sentence": "The company decided to {{BLANK}} a new initiative to reduce waste.",
    "cn": "公司決定承擔一項減少浪費的新計劃。"
  },
  {
    "word": "undertaken",
    "pos": "adj.",
    "cn_def": "已承擔的",
    "en_def": "already started or done as a job",
    "sentence": "All {{BLANK}} projects should be completed by the end of the month.",
    "cn": "所有已承擔的項目應在月底前完成。"
  },
  {
    "word": "undertaking",
    "pos": "n.",
    "cn_def": "承諾，任務",
    "en_def": "a big job or task you agree to do",
    "sentence": "Organizing the annual event is no small {{BLANK}}.",
    "cn": "組織年度活動絕非小任務。"
  }
];

const MCQS = [
  {
    "q": "The company decided to ______ its older employees due to their vast experience.",
    "options": [
      "undertake-undertook-undertaken",
      "cycle",
      "label",
      "retain"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The ______ knowledge from the workshop greatly benefited the team.",
    "options": [
      "unpredicted",
      "retained",
      "subsequent",
      "implied"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The author released the third book in the popular ______.",
    "options": [
      "project",
      "concentration",
      "series",
      "undertaking"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The museum is hosting ______ events throughout the summer.",
    "options": [
      "a series of",
      "impose ...to",
      "in contrast",
      "be committed to"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "According to recent ______ , the unemployment rate has dropped significantly.",
    "options": [
      "output",
      "statistics",
      "label",
      "occupation"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The ______ of the order is still 'processing'.",
    "options": [
      "job",
      "series",
      "status",
      "emergence"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The teacher ______ the importance of regular study habits.",
    "options": [
      "stress",
      "emerge",
      "access",
      "retain"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "High levels of ______ can lead to various health issues.",
    "options": [
      "parameter",
      "series",
      "occupation",
      "stress"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Due to the looming deadlines, many employees were ______.",
    "options": [
      "be stressed out",
      "impose ...to",
      "attitude toward",
      "communication with"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Preparing for an international conference can be very ______.",
    "options": [
      "domestic",
      "undertaken",
      "integrated",
      "stressful"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Due to multiple projects at hand, he is currently ______.",
    "options": [
      "in spite of",
      "regardless of",
      "be under stress",
      "a series of"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The main event will start at 6 pm, with a ______ dinner at 8 pm.",
    "options": [
      "retained",
      "subsequent",
      "occupied",
      "adequate"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Please ______ up the main points of the meeting for those who were absent.",
    "options": [
      "cycle",
      "granted",
      "promote",
      "sum"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The ______ of 5 and 3 is 8.",
    "options": [
      "access",
      "emergence",
      "sum",
      "principal"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Can you give me a brief ______ of the article?",
    "options": [
      "profession",
      "summary",
      "resolve",
      "project"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "He was able to ______ the lengthy report in just a few sentences.",
    "options": [
      "summarize",
      "access",
      "internalize",
      "implement"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The company decided to ______ a new initiative to reduce waste.",
    "options": [
      "internalize",
      "undertake-undertook-undertaken",
      "imply",
      "stress"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "All ______ projects should be completed by the end of the month.",
    "options": [
      "emergent",
      "apparent",
      "attributed",
      "undertaken"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Organizing the annual event is no small ______.",
    "options": [
      "sum",
      "option",
      "undertaking",
      "parameter"
    ],
    "answer": 2,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "retain": {
    "pos": "v.",
    "en_def": "to keep something",
    "cn_def": "保留",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep something",
        "cn_def": "保留"
      }
    ]
  },
  "retained": {
    "pos": "adj.",
    "en_def": "kept",
    "cn_def": "被保留的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "kept",
        "cn_def": "被保留的"
      }
    ]
  },
  "series": {
    "pos": "n.",
    "en_def": "a number of related things in order",
    "cn_def": "系列",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a number of related things in order",
        "cn_def": "系列"
      }
    ]
  },
  "a series of": {
    "pos": "phr.",
    "en_def": "several related things one after another",
    "cn_def": "一系列",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "several related things one after another",
        "cn_def": "一系列"
      }
    ]
  },
  "statistics": {
    "pos": "n.",
    "en_def": "numbers that give information about something",
    "cn_def": "統計數據",
    "combined": [
      {
        "pos": "n.",
        "en_def": "numbers that give information about something",
        "cn_def": "統計數據"
      }
    ]
  },
  "status": {
    "pos": "n.",
    "en_def": "position or rank in a group",
    "cn_def": "狀態，地位",
    "combined": [
      {
        "pos": "n.",
        "en_def": "position or rank in a group",
        "cn_def": "狀態，地位"
      }
    ]
  },
  "stress": {
    "pos": "v.",
    "en_def": "to show that something is important",
    "cn_def": "強調",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show that something is important",
        "cn_def": "強調"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of worry because of problems",
        "cn_def": "壓力"
      }
    ]
  },
  "stressed out": {
    "pos": "phr.",
    "en_def": "very worried and nervous",
    "cn_def": "非常緊張",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very worried and nervous",
        "cn_def": "非常緊張"
      }
    ]
  },
  "be stressed out": {
    "pos": "phr.",
    "en_def": "very worried and nervous",
    "cn_def": "非常緊張",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very worried and nervous",
        "cn_def": "非常緊張"
      }
    ]
  },
  "stressful": {
    "pos": "adj.",
    "en_def": "causing worry",
    "cn_def": "有壓力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing worry",
        "cn_def": "有壓力的"
      }
    ]
  },
  "under stress": {
    "pos": "phr.",
    "en_def": "feeling a lot of pressure",
    "cn_def": "處於壓力之下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "feeling a lot of pressure",
        "cn_def": "處於壓力之下"
      }
    ]
  },
  "be under stress": {
    "pos": "phr.",
    "en_def": "feeling a lot of pressure",
    "cn_def": "處於壓力之下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "feeling a lot of pressure",
        "cn_def": "處於壓力之下"
      }
    ]
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "coming after something else",
    "cn_def": "隨後的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "coming after something else",
        "cn_def": "隨後的"
      }
    ]
  },
  "sum": {
    "pos": "v.",
    "en_def": "to give a short summary",
    "cn_def": "總結",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a short summary",
        "cn_def": "總結"
      },
      {
        "pos": "n.",
        "en_def": "the total when numbers are added",
        "cn_def": "總和"
      }
    ]
  },
  "summary": {
    "pos": "n.",
    "en_def": "a short statement of the main points",
    "cn_def": "概要，摘要",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short statement of the main points",
        "cn_def": "概要，摘要"
      }
    ]
  },
  "summarize": {
    "pos": "v.",
    "en_def": "to give the main points briefly",
    "cn_def": "總結",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give the main points briefly",
        "cn_def": "總結"
      }
    ]
  },
  "undertake-undertook-undertaken": {
    "pos": "v.",
    "en_def": "to agree to do a job or task",
    "cn_def": "承擔",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to agree to do a job or task",
        "cn_def": "承擔"
      }
    ]
  },
  "undertaken": {
    "pos": "adj.",
    "en_def": "already started or done as a job",
    "cn_def": "已承擔的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "already started or done as a job",
        "cn_def": "已承擔的"
      }
    ]
  },
  "undertaking": {
    "pos": "n.",
    "en_def": "a big job or task you agree to do",
    "cn_def": "承諾，任務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big job or task you agree to do",
        "cn_def": "承諾，任務"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
