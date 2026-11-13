// Part 1 Quiz Data: abstract – be attached to
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 1 - abstract – be attached to",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "abstract",
    "pos": "adj.",
    "cn_def": "抽象的",
    "en_def": "based on ideas, not real things",
    "sentence": "The concept is quite {{BLANK}}, making it hard for some people to grasp.",
    "cn": "這個概念非常抽象，使得一些人很難理解。"
  },
  {
    "word": "abstract of a thesis",
    "pos": "n.",
    "cn_def": "論文摘要",
    "en_def": "a short summary of a research paper",
    "sentence": "The {{BLANK}} should summarize the key points and findings of the research.",
    "cn": "論文摘要應總結研究的主要要點和發現。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的",
    "en_def": "correct and exact",
    "sentence": "The measurements need to be {{BLANK}} to ensure the experiment's success.",
    "cn": "測量需要準確以確保實驗的成功。"
  },
  {
    "word": "inaccurate",
    "pos": "adj.",
    "cn_def": "不準確的",
    "en_def": "not correct",
    "sentence": "The {{BLANK}} information led to a lot of confusion among the team.",
    "cn": "不準確的信息導致團隊中出現了很多混淆。"
  },
  {
    "word": "accurately",
    "pos": "adv.",
    "cn_def": "準確地",
    "en_def": "in a correct and exact way",
    "sentence": "He {{BLANK}} predicted the outcome of the election.",
    "cn": "他準確地預測了選舉的結果。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確度",
    "en_def": "the quality of being correct",
    "sentence": "The {{BLANK}} of the data is crucial for making informed decisions.",
    "cn": "數據的準確度對於做出明智的決策至關重要。"
  },
  {
    "word": "knowledge",
    "pos": "n.",
    "cn_def": "知識",
    "en_def": "information and understanding",
    "sentence": "With the right {{BLANK}}, you can overcome any challenge.",
    "cn": "擁有正確的知識，你可以克服任何挑戰。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to accept that something is true",
    "sentence": "It's important to {{BLANK}} one's mistakes and learn from them.",
    "cn": "承認自己的錯誤並從中學習是很重要的。"
  },
  {
    "word": "acknowledged",
    "pos": "adj.",
    "cn_def": "承認的",
    "en_def": "generally accepted as true or good",
    "sentence": "He is an {{BLANK}} expert in his field.",
    "cn": "他是他領域中公認的專家。"
  },
  {
    "word": "acknowledgement",
    "pos": "n.",
    "cn_def": "承認",
    "en_def": "the act of accepting that something is true",
    "sentence": "She showed her {{BLANK}} of the problem by nodding.",
    "cn": "她通過點頭表明了她對問題的承認。"
  },
  {
    "word": "aggregate",
    "pos": "v./n.",
    "cn_def": "聚集 / 總計",
    "en_def": "to collect together; a total amount",
    "sentence": "The {{BLANK}} amount of sales over the quarter was quite impressive.",
    "cn": "季度的總銷售額非常令人印象深刻。"
  },
  {
    "word": "aggregation",
    "pos": "n.",
    "cn_def": "聚集",
    "en_def": "the act of collecting things together",
    "sentence": "The {{BLANK}} of data was necessary to see the bigger picture.",
    "cn": "數據聚集是必要的，以看到更大的圖景。"
  },
  {
    "word": "allocate",
    "pos": "v.",
    "cn_def": "分配",
    "en_def": "to give something for a special purpose",
    "sentence": "They decided to {{BLANK}} more funds to the marketing department.",
    "cn": "他們決定分配更多的資金給市場營銷部門。"
  },
  {
    "word": "allocated",
    "pos": "adj.",
    "cn_def": "分配的",
    "en_def": "given for a special purpose",
    "sentence": "The {{BLANK}} resources were used wisely.",
    "cn": "分配的資源被明智地使用了。"
  },
  {
    "word": "allocation",
    "pos": "n.",
    "cn_def": "分配",
    "en_def": "an amount given for a special purpose",
    "sentence": "The {{BLANK}} of tasks among team members was fair and efficient.",
    "cn": "在團隊成員之間的任務分配是公平和高效的。"
  },
  {
    "word": "assign",
    "pos": "v.",
    "cn_def": "分配",
    "en_def": "to give someone a job or task",
    "sentence": "The project manager will {{BLANK}} tasks to each team member based on their expertise and availability.",
    "cn": "項目經理將根據每個團隊成員的專業知識和可用性分配任務。"
  },
  {
    "word": "assigned",
    "pos": "adj.",
    "cn_def": "已分配的",
    "en_def": "given as a job or task",
    "sentence": "The {{BLANK}} duties were clear to everyone, ensuring a smooth workflow within the department.",
    "cn": "分配的職責對每個人來說都很清楚，確保部門內的工作流程順利。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "任務",
    "en_def": "a piece of work given to someone",
    "sentence": "The {{BLANK}} required a deep understanding of the subject matter and collaboration among team members.",
    "cn": "任務要求對主題內容有深刻的理解並需要團隊成員之間的合作。"
  },
  {
    "word": "attach",
    "pos": "phr.",
    "cn_def": "附上...到",
    "en_def": "to fasten or add one thing to another",
    "sentence": "Please {{BLANK}} your resume to the email before sending it to the prospective employer.",
    "cn": "在將其發送給潛在雇主之前，請將您的簡歷附加到電子郵件中。"
  },
  {
    "word": "attached",
    "pos": "phr.",
    "cn_def": "附屬於",
    "en_def": "to be fastened to; to love someone a lot",
    "sentence": "She has always {{BLANK}} great importance to maintaining a healthy work-life balance.",
    "cn": "她始終非常重視保持健康的工作與生活平衡。"
  }
];

const MCQS = [
  {
    "q": "The concept is quite ______, making it hard for some people to grasp.",
    "options": [
      "minimum",
      "abstract",
      "neutral",
      "cooperative"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The ______ should summarize the key points and findings of the research.",
    "options": [
      "racial discrimination",
      "be capable of",
      "abstract of a thesis",
      "discriminate against"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The measurements need to be ______ to ensure the experiment's success.",
    "options": [
      "federal",
      "incorporated",
      "brief",
      "accurate"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The ______ information led to a lot of confusion among the team.",
    "options": [
      "inaccurate",
      "assigned",
      "diverse",
      "maximum"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "He ______ predicted the outcome of the election.",
    "options": [
      "overseas",
      "nevertheless",
      "furthermore",
      "accurately"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The ______ of the data is crucial for making informed decisions.",
    "options": [
      "initiative",
      "accuracy",
      "incident",
      "author"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "With the right ______, you can overcome any challenge.",
    "options": [
      "knowledge",
      "interval",
      "accuracy",
      "rationality"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "It's important to ______ one's mistakes and learn from them.",
    "options": [
      "presume",
      "precede",
      "acknowledge",
      "authorize"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "He is an ______ expert in his field.",
    "options": [
      "cited",
      "unedited",
      "ignorant",
      "acknowledged"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "She showed her ______ of the problem by nodding.",
    "options": [
      "discrimination",
      "acknowledgement",
      "transport",
      "instructor"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The ______ amount of sales over the quarter was quite impressive.",
    "options": [
      "aggregate",
      "inhibition",
      "fee",
      "instruction"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The ______ of data was necessary to see the bigger picture.",
    "options": [
      "estate",
      "input",
      "aggregation",
      "assignment"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "They decided to ______ more funds to the marketing department.",
    "options": [
      "brief",
      "allocate",
      "instruct",
      "acknowledge"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The ______ resources were used wisely.",
    "options": [
      "abstract",
      "excessive",
      "rational",
      "allocated"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The ______ of tasks among team members was fair and efficient.",
    "options": [
      "acknowledgement",
      "trace",
      "allocation",
      "attachment"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The project manager will ______ tasks to each team member based on their expertise and availability.",
    "options": [
      "assign",
      "instruct",
      "migrate",
      "trace"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The ______ duties were clear to everyone, ensuring a smooth workflow within the department.",
    "options": [
      "uncited",
      "preceding",
      "cooperative",
      "assigned"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The ______ required a deep understanding of the subject matter and collaboration among team members.",
    "options": [
      "domain",
      "lecture",
      "assignment",
      "instructor"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Please ______ your resume to the email before sending it to the prospective employer.",
    "options": [
      "be capable of",
      "attach ...to",
      "utility bill",
      "be attached to"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "She has always ______ great importance to maintaining a healthy work-life balance.",
    "options": [
      "be attached to",
      "cooperate with",
      "on display",
      "abstract of a thesis"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "abstract": {
    "pos": "adj.",
    "en_def": "based on ideas, not real things",
    "cn_def": "抽象的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on ideas, not real things",
        "cn_def": "抽象的"
      }
    ]
  },
  "abstract of a thesis": {
    "pos": "n.",
    "en_def": "a short summary of a research paper",
    "cn_def": "論文摘要",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short summary of a research paper",
        "cn_def": "論文摘要"
      }
    ]
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and exact",
    "cn_def": "準確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "correct and exact",
        "cn_def": "準確的"
      }
    ]
  },
  "inaccurate": {
    "pos": "adj.",
    "en_def": "not correct",
    "cn_def": "不準確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not correct",
        "cn_def": "不準確的"
      }
    ]
  },
  "accurately": {
    "pos": "adv.",
    "en_def": "in a correct and exact way",
    "cn_def": "準確地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a correct and exact way",
        "cn_def": "準確地"
      }
    ]
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality of being correct",
    "cn_def": "準確度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being correct",
        "cn_def": "準確度"
      }
    ]
  },
  "knowledge": {
    "pos": "n.",
    "en_def": "information and understanding",
    "cn_def": "知識",
    "combined": [
      {
        "pos": "n.",
        "en_def": "information and understanding",
        "cn_def": "知識"
      }
    ]
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to accept that something is true",
    "cn_def": "承認",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to accept that something is true",
        "cn_def": "承認"
      }
    ]
  },
  "acknowledged": {
    "pos": "adj.",
    "en_def": "generally accepted as true or good",
    "cn_def": "承認的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "generally accepted as true or good",
        "cn_def": "承認的"
      }
    ]
  },
  "acknowledgement": {
    "pos": "n.",
    "en_def": "the act of accepting that something is true",
    "cn_def": "承認",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of accepting that something is true",
        "cn_def": "承認"
      }
    ]
  },
  "aggregate": {
    "pos": "v./n.",
    "en_def": "to collect together; a total amount",
    "cn_def": "聚集 / 總計",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to collect together; a total amount",
        "cn_def": "聚集 / 總計"
      }
    ]
  },
  "aggregation": {
    "pos": "n.",
    "en_def": "the act of collecting things together",
    "cn_def": "聚集",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of collecting things together",
        "cn_def": "聚集"
      }
    ]
  },
  "allocate": {
    "pos": "v.",
    "en_def": "to give something for a special purpose",
    "cn_def": "分配",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give something for a special purpose",
        "cn_def": "分配"
      }
    ]
  },
  "allocated": {
    "pos": "adj.",
    "en_def": "given for a special purpose",
    "cn_def": "分配的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "given for a special purpose",
        "cn_def": "分配的"
      }
    ]
  },
  "allocation": {
    "pos": "n.",
    "en_def": "an amount given for a special purpose",
    "cn_def": "分配",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount given for a special purpose",
        "cn_def": "分配"
      }
    ]
  },
  "assign": {
    "pos": "v.",
    "en_def": "to give someone a job or task",
    "cn_def": "分配",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone a job or task",
        "cn_def": "分配"
      }
    ]
  },
  "assigned": {
    "pos": "adj.",
    "en_def": "given as a job or task",
    "cn_def": "已分配的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "given as a job or task",
        "cn_def": "已分配的"
      }
    ]
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to someone",
    "cn_def": "任務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of work given to someone",
        "cn_def": "任務"
      }
    ]
  },
  "attach": {
    "pos": "phr.",
    "en_def": "to fasten or add one thing to another",
    "cn_def": "附上...到",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to fasten or add one thing to another",
        "cn_def": "附上...到"
      }
    ]
  },
  "attach ...to": {
    "pos": "phr.",
    "en_def": "to fasten or add one thing to another",
    "cn_def": "附上...到",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to fasten or add one thing to another",
        "cn_def": "附上...到"
      }
    ]
  },
  "be attached to": {
    "pos": "phr.",
    "en_def": "to be fastened to; to love someone a lot",
    "cn_def": "附屬於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be fastened to; to love someone a lot",
        "cn_def": "附屬於"
      }
    ]
  },
  "attached": {
    "pos": "phr.",
    "en_def": "to be fastened to; to love someone a lot",
    "cn_def": "附屬於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be fastened to; to love someone a lot",
        "cn_def": "附屬於"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
