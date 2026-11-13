// Part 1 Quiz Data: alternative – constantly
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 1 - alternative – constantly",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "alternative",
    "pos": "n.",
    "cn_def": "替代方案",
    "en_def": "another choice",
    "sentence": "Given the situation, the team explored another {{BLANK}}.",
    "cn": "考慮到情況，團隊探索了另一個替代方案。"
  },
  {
    "word": "alternative",
    "pos": "adj.",
    "cn_def": "替代的",
    "en_def": "that can be used instead of something else",
    "sentence": "We are looking for an {{BLANK}} solution to this problem.",
    "cn": "我們正在尋找此問題的替代解決方案。"
  },
  {
    "word": "circumstances",
    "pos": "n.",
    "cn_def": "情況",
    "en_def": "the facts or situation around an event",
    "sentence": "Due to unforeseen {{BLANK}}, the event has been postponed.",
    "cn": "由於無法預見的情況，活動已被延期。"
  },
  {
    "word": "under the circumstance",
    "pos": "phr.",
    "cn_def": "在這種情況下",
    "en_def": "because of the situation",
    "sentence": "{{BLANK}} , I believe we made the right decision.",
    "cn": "在這種情況下，我相信我們做出了正確的決定。"
  },
  {
    "word": "comment on",
    "pos": "v.",
    "cn_def": "評論",
    "en_def": "to give your opinion about something",
    "sentence": "The professor will {{BLANK}} your paper once it's submitted.",
    "cn": "一旦提交，教授將評論您的論文。"
  },
  {
    "word": "make a comment on",
    "pos": "n.",
    "cn_def": "對...做出評論",
    "en_def": "to say your opinion about something",
    "sentence": "She didn't {{BLANK}} the artist's new exhibition.",
    "cn": "她沒有對藝術家的新展覽做出評論。"
  },
  {
    "word": "compensate",
    "pos": "v.",
    "cn_def": "賠償",
    "en_def": "to pay someone for loss or harm",
    "sentence": "Due to the delay, the airline decided to {{BLANK}} its passengers.",
    "cn": "由於延遲，航空公司決定賠償其乘客。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "賠償金",
    "en_def": "money paid for loss or harm",
    "sentence": "He received a substantial amount in {{BLANK}} for the accident.",
    "cn": "他因事故收到了大筆賠償金。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "薪資",
    "en_def": "money paid for work",
    "sentence": "The average {{BLANK}}, or salary for start-ups are ten times higher than that of employees in traditional manufacturing industries.",
    "cn": "新創企業的平均薪資是傳統製造業員工的十倍。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "組件",
    "en_def": "one part of a machine or system",
    "sentence": "That small {{BLANK}} is essential for the machine to work properly.",
    "cn": "那小組件對機器的正常工作至關重要。"
  },
  {
    "word": "consent",
    "pos": "n.",
    "cn_def": "同意",
    "en_def": "permission or agreement",
    "sentence": "They proceeded with the project after getting the {{BLANK}} of the local community.",
    "cn": "在得到當地社區的同意後，他們繼續進行該項目。"
  },
  {
    "word": "consent",
    "pos": "adj.",
    "cn_def": "同意的",
    "en_def": "agreed by everyone",
    "sentence": "It's a {{BLANK}} decision between both parties.",
    "cn": "這是雙方的共同決定。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think carefully about something",
    "sentence": "Did you {{BLANK}} the implications of your decision?",
    "cn": "你考慮過你的決定的含義嗎？"
  },
  {
    "word": "consideration",
    "pos": "n.",
    "cn_def": "考慮",
    "en_def": "careful thought",
    "sentence": "The main {{BLANK}} for our choice was the quality of the product.",
    "cn": "我們選擇的主要考慮是產品的質量。"
  },
  {
    "word": "take into consideration",
    "pos": "phr.",
    "cn_def": "考慮到...",
    "en_def": "to think about something before deciding",
    "sentence": "You should {{BLANK}} his feelings when making such a decision.",
    "cn": "做出這樣的決定時，你應該考慮到他的感受。"
  },
  {
    "word": "considerate",
    "pos": "adj.",
    "cn_def": "體貼的",
    "en_def": "kind and caring about others' feelings",
    "sentence": "He is always {{BLANK}} and thinks of others before himself.",
    "cn": "他總是體貼並在自己之前考慮別人。"
  },
  {
    "word": "considerable",
    "pos": "adj.",
    "cn_def": "相當大的",
    "en_def": "large in amount or size",
    "sentence": "The damage caused a {{BLANK}} amount of financial loss.",
    "cn": "損害造成了相當大的財務損失。"
  },
  {
    "word": "considerably",
    "pos": "adv.",
    "cn_def": "相當地",
    "en_def": "by a large amount",
    "sentence": "The costs have risen {{BLANK}} since last year.",
    "cn": "費用自去年以來已經大幅上升。"
  },
  {
    "word": "constant",
    "pos": "adj.",
    "cn_def": "持續的",
    "en_def": "happening all the time",
    "sentence": "The {{BLANK}} noise from the construction site is annoying.",
    "cn": "來自工地的持續噪音很煩人。"
  },
  {
    "word": "constantly",
    "pos": "adv.",
    "cn_def": "不斷地",
    "en_def": "all the time",
    "sentence": "He's {{BLANK}} checking his phone for updates.",
    "cn": "他不斷地查看手機以獲取更新。"
  }
];

const MCQS = [
  {
    "q": "Given the situation, the team explored another ______.",
    "options": [
      "compensation",
      "proportion",
      "alternative",
      "criteria"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "We are looking for an ______ solution to this problem.",
    "options": [
      "sexual",
      "alternative",
      "corporate",
      "reliant"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Due to unforeseen ______, the event has been postponed.",
    "options": [
      "circumstances",
      "implication",
      "deduction",
      "link"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "______ , I believe we made the right decision.",
    "options": [
      "in sequence",
      "the minority group",
      "ensure that",
      "under the circumstance"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The professor will ______ your paper once it's submitted.",
    "options": [
      "demonstrate",
      "comment on",
      "core value",
      "for instance"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "She didn't ______ the artist's new exhibition.",
    "options": [
      "ensure that",
      "convention",
      "ensure",
      "make a comment on"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Due to the delay, the airline decided to ______ its passengers.",
    "options": [
      "compensate",
      "initiate",
      "specify",
      "shift"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "He received a substantial amount in ______ for the accident.",
    "options": [
      "component",
      "consideration",
      "compensation",
      "alternative"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The average ______, or salary for start-ups are ten times higher than that of employees in traditional manufacturing industries.",
    "options": [
      "technique",
      "compensation",
      "scheme",
      "alternative"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "That small ______ is essential for the machine to work properly.",
    "options": [
      "component",
      "exclusion",
      "philosophy",
      "immigrant"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "They proceeded with the project after getting the ______ of the local community.",
    "options": [
      "sequence",
      "immigrant",
      "consent",
      "alternative"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "It's a ______ decision between both parties.",
    "options": [
      "inclusive",
      "minimum",
      "exclusive",
      "consent"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Did you ______ the implications of your decision?",
    "options": [
      "deduct",
      "immigrate",
      "consider",
      "exclude"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The main ______ for our choice was the quality of the product.",
    "options": [
      "sexuality",
      "consideration",
      "consent",
      "framework"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "You should ______ his feelings when making such a decision.",
    "options": [
      "take...into consideration",
      "reaction to",
      "the minorities",
      "correspond with"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "He is always ______ and thinks of others before himself.",
    "options": [
      "sexual",
      "minimum",
      "specific",
      "considerate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The damage caused a ______ amount of financial loss.",
    "options": [
      "considerable",
      "technological",
      "physical",
      "dominant"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The costs have risen ______ since last year.",
    "options": [
      "physically",
      "considerably",
      "technically",
      "immigrant"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The ______ noise from the construction site is annoying.",
    "options": [
      "conventional",
      "specified",
      "fundamental",
      "constant"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "He's ______ checking his phone for updates.",
    "options": [
      "sufficiently",
      "physically",
      "constantly",
      "technically"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "alternative": {
    "pos": "n.",
    "en_def": "another choice",
    "cn_def": "替代方案",
    "combined": [
      {
        "pos": "n.",
        "en_def": "another choice",
        "cn_def": "替代方案"
      },
      {
        "pos": "adj.",
        "en_def": "that can be used instead of something else",
        "cn_def": "替代的"
      }
    ]
  },
  "circumstances": {
    "pos": "n.",
    "en_def": "the facts or situation around an event",
    "cn_def": "情況",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the facts or situation around an event",
        "cn_def": "情況"
      }
    ]
  },
  "under the circumstance": {
    "pos": "phr.",
    "en_def": "because of the situation",
    "cn_def": "在這種情況下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "because of the situation",
        "cn_def": "在這種情況下"
      }
    ]
  },
  "comment on": {
    "pos": "v.",
    "en_def": "to give your opinion about something",
    "cn_def": "評論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give your opinion about something",
        "cn_def": "評論"
      }
    ]
  },
  "make a comment on": {
    "pos": "n.",
    "en_def": "to say your opinion about something",
    "cn_def": "對...做出評論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "to say your opinion about something",
        "cn_def": "對...做出評論"
      }
    ]
  },
  "compensate": {
    "pos": "v.",
    "en_def": "to pay someone for loss or harm",
    "cn_def": "賠償",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pay someone for loss or harm",
        "cn_def": "賠償"
      }
    ]
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid for loss or harm",
    "cn_def": "賠償金",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money paid for loss or harm",
        "cn_def": "賠償金"
      },
      {
        "pos": "n.",
        "en_def": "money paid for work",
        "cn_def": "薪資"
      }
    ]
  },
  "component": {
    "pos": "n.",
    "en_def": "one part of a machine or system",
    "cn_def": "組件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one part of a machine or system",
        "cn_def": "組件"
      }
    ]
  },
  "consent": {
    "pos": "n.",
    "en_def": "permission or agreement",
    "cn_def": "同意",
    "combined": [
      {
        "pos": "n.",
        "en_def": "permission or agreement",
        "cn_def": "同意"
      },
      {
        "pos": "adj.",
        "en_def": "agreed by everyone",
        "cn_def": "同意的"
      }
    ]
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something",
    "cn_def": "考慮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think carefully about something",
        "cn_def": "考慮"
      }
    ]
  },
  "consideration": {
    "pos": "n.",
    "en_def": "careful thought",
    "cn_def": "考慮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "careful thought",
        "cn_def": "考慮"
      }
    ]
  },
  "take...into consideration": {
    "pos": "phr.",
    "en_def": "to think about something before deciding",
    "cn_def": "考慮到...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to think about something before deciding",
        "cn_def": "考慮到..."
      }
    ]
  },
  "take into consideration": {
    "pos": "phr.",
    "en_def": "to think about something before deciding",
    "cn_def": "考慮到...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to think about something before deciding",
        "cn_def": "考慮到..."
      }
    ]
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "kind and caring about others' feelings",
    "cn_def": "體貼的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "kind and caring about others' feelings",
        "cn_def": "體貼的"
      }
    ]
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "large in amount or size",
    "cn_def": "相當大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "large in amount or size",
        "cn_def": "相當大的"
      }
    ]
  },
  "considerably": {
    "pos": "adv.",
    "en_def": "by a large amount",
    "cn_def": "相當地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "by a large amount",
        "cn_def": "相當地"
      }
    ]
  },
  "constant": {
    "pos": "adj.",
    "en_def": "happening all the time",
    "cn_def": "持續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening all the time",
        "cn_def": "持續的"
      }
    ]
  },
  "constantly": {
    "pos": "adv.",
    "en_def": "all the time",
    "cn_def": "不斷地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "all the time",
        "cn_def": "不斷地"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
