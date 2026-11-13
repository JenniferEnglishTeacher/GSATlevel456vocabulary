// Part 4 Quiz Data: excessive – incorporate
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 4 - excessive – incorporate",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "excessive",
    "pos": "adj.",
    "cn_def": "過度的",
    "en_def": "too much",
    "sentence": "{{BLANK}} consumption of sugary drinks can lead to health issues.",
    "cn": "過度飲用含糖飲料可能會導致健康問題。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person with special skill or knowledge",
    "sentence": "The {{BLANK}} was called to testify in court due to her extensive knowledge on digital forensics.",
    "cn": "由於她在數字取證方面的廣泛知識，專家被要求在法庭上作證。"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "cn_def": "專業知識",
    "en_def": "special skill or knowledge",
    "sentence": "His {{BLANK}} in network security was crucial in preventing a potential data leak.",
    "cn": "他在網絡安全方面的專業知識對於防止潛在的數據洩漏至關重要。"
  },
  {
    "word": "explicit",
    "pos": "adj.",
    "cn_def": "明確的",
    "en_def": "very clear and direct",
    "sentence": "The instructions were {{BLANK}} and left no room for ambiguity.",
    "cn": "指令非常明確，沒有任何歧義。"
  },
  {
    "word": "explicit",
    "pos": "adj.",
    "cn_def": "遭檢查的字)",
    "en_def": "showing too much (violence or sex)",
    "sentence": "The {{BLANK}} content was removed from the film to adhere to the rating guidelines.",
    "cn": "為了遵守評分指南，將遭檢查的內容從電影中刪除。"
  },
  {
    "word": "implicit",
    "pos": "adj.",
    "cn_def": "含蓄的",
    "en_def": "suggested but not said directly",
    "sentence": "The {{BLANK}} message in the story encourages readers to be empathetic and understanding.",
    "cn": "故事中的含蓄信息鼓勵讀者要有同理心和理解力。"
  },
  {
    "word": "federal",
    "pos": "adj.",
    "cn_def": "聯邦的",
    "en_def": "about the national government",
    "sentence": "The {{BLANK}} government has launched a new initiative to combat climate change.",
    "cn": "聯邦政府已經推出了一項新的倡議來對抗氣候變化。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用",
    "en_def": "money paid for a service",
    "sentence": "The admission {{BLANK}} for the museum is ten dollars for adults and five dollars for children.",
    "cn": "博物館的入場費是十美元的成人和五美元的兒童。"
  },
  {
    "word": "flexible",
    "pos": "adj.",
    "cn_def": "靈活的",
    "en_def": "able to change easily",
    "sentence": "The {{BLANK}} working hours allow employees to maintain a good work-life balance.",
    "cn": "靈活的工作時間使員工能夠保持良好的工作與生活平衡。"
  },
  {
    "word": "flexibility",
    "pos": "n.",
    "cn_def": "靈活性",
    "en_def": "the ability to change easily",
    "sentence": "{{BLANK}} in decision-making can lead to better outcomes in unpredictable situations.",
    "cn": "在決策中的靈活性可以在不可預測的情況下帶來更好的結果。"
  },
  {
    "word": "furthermore",
    "pos": "adv.",
    "cn_def": "此外",
    "en_def": "also; in addition",
    "sentence": "The plan is cost-effective; {{BLANK}}, it has the potential to significantly reduce the environmental impact.",
    "cn": "該計劃具有成本效益；此外，它有可能顯著減少對環境的影響。"
  },
  {
    "word": "gender",
    "pos": "n.",
    "cn_def": "性別",
    "en_def": "being male or female",
    "sentence": "The survey collected data on various demographics including age, {{BLANK}}, and educational background.",
    "cn": "調查收集了包括年齡、性別和教育背景在內的各種人口統計數據。"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "cn_def": "忽略",
    "en_def": "to pay no attention to something",
    "sentence": "It's unwise to {{BLANK}} the advice of experienced professionals when making critical decisions.",
    "cn": "在做出關鍵決定時，忽略經驗豐富的專業人士的建議是不明智的。"
  },
  {
    "word": "ignored",
    "pos": "adj.",
    "cn_def": "被忽略的",
    "en_def": "not paid attention to",
    "sentence": "The {{BLANK}} warnings from the experts led to severe consequences.",
    "cn": "專家們被忽略的警告導致了嚴重的後果。"
  },
  {
    "word": "ignorant",
    "pos": "adj.",
    "cn_def": "無知的",
    "en_def": "not knowing things you should know",
    "sentence": "Remaining {{BLANK}} of the laws can lead to unintended violations and penalties.",
    "cn": "對法律保持無知可能會導致無意的違規和處罰。"
  },
  {
    "word": "ignorance",
    "pos": "n.",
    "cn_def": "無知",
    "en_def": "lack of knowledge",
    "sentence": "{{BLANK}} of the historical context may lead to a misinterpretation of the event.",
    "cn": "對歷史背景的無知可能會導致對事件的誤解。"
  },
  {
    "word": "incentive",
    "pos": "n.",
    "cn_def": "刺激",
    "en_def": "something that makes you want to do something",
    "sentence": "The company offers an {{BLANK}} program to motivate employees to meet their quarterly goals.",
    "cn": "公司提供了一個刺激計劃，以激勵員工達到他們的季度目標。"
  },
  {
    "word": "incidence",
    "pos": "n.",
    "cn_def": "發生率",
    "en_def": "how often something happens",
    "sentence": "The {{BLANK}} of smoking-related illnesses has decreased significantly over the past decade.",
    "cn": "過去十年中，吸煙相關疾病的發生率已經顯著下降。"
  },
  {
    "word": "incident",
    "pos": "n.",
    "cn_def": "事件",
    "en_def": "an event, often a bad one",
    "sentence": "The {{BLANK}} at the factory prompted a review of safety procedures.",
    "cn": "工廠的事件促使人們重新審視了安全程序。"
  },
  {
    "word": "incorporate",
    "pos": "v.",
    "cn_def": "納入",
    "en_def": "to include something as a part",
    "sentence": "It's important to {{BLANK}} feedback from all stakeholders when developing a new product.",
    "cn": "在開發新產品時，納入所有利益相關者的反饋非常重要。"
  }
];

const MCQS = [
  {
    "q": "______ consumption of sugary drinks can lead to health issues.",
    "options": [
      "excessive",
      "incorporated",
      "initial",
      "cooperative"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ______ was called to testify in court due to her extensive knowledge on digital forensics.",
    "options": [
      "diversity",
      "attachment",
      "expert",
      "tape"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "His ______ in network security was crucial in preventing a potential data leak.",
    "options": [
      "gender",
      "enhancement",
      "immigrant",
      "expertise"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The instructions were ______ and left no room for ambiguity.",
    "options": [
      "implicit",
      "explicit",
      "allocated",
      "enhanced"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The ______ content was removed from the film to adhere to the rating guidelines.",
    "options": [
      "allocated",
      "diverse",
      "explicit",
      "initial"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The ______ message in the story encourages readers to be empathetic and understanding.",
    "options": [
      "implicit",
      "ignorant",
      "rational",
      "recovered"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The ______ government has launched a new initiative to combat climate change.",
    "options": [
      "implicit",
      "federal",
      "intelligent",
      "excessive"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The admission ______ for the museum is ten dollars for adults and five dollars for children.",
    "options": [
      "immigrant",
      "revelation",
      "edition",
      "fee"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The ______ working hours allow employees to maintain a good work-life balance.",
    "options": [
      "flexible",
      "revealed",
      "cooperative",
      "intelligent"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "______ in decision-making can lead to better outcomes in unpredictable situations.",
    "options": [
      "transformation",
      "flexibility",
      "aggregation",
      "tape"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The plan is cost-effective; ______, it has the potential to significantly reduce the environmental impact.",
    "options": [
      "nevertheless",
      "accurately",
      "overseas",
      "furthermore"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The survey collected data on various demographics including age, ______, and educational background.",
    "options": [
      "transport",
      "immigrant",
      "gender",
      "assignment"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "It's unwise to ______ the advice of experienced professionals when making critical decisions.",
    "options": [
      "presume",
      "authorize",
      "recover",
      "ignore"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The ______ warnings from the experts led to severe consequences.",
    "options": [
      "neutral",
      "ignored",
      "edited",
      "incorporated"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Remaining ______ of the laws can lead to unintended violations and penalties.",
    "options": [
      "implicit",
      "acknowledged",
      "ignorant",
      "uncited"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "______ of the historical context may lead to a misinterpretation of the event.",
    "options": [
      "ignorance",
      "inhibition",
      "attachment",
      "knowledge"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The company offers an ______ program to motivate employees to meet their quarterly goals.",
    "options": [
      "attachment",
      "expert",
      "incentive",
      "discrimination"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The ______ of smoking-related illnesses has decreased significantly over the past decade.",
    "options": [
      "incidence",
      "incentive",
      "flexibility",
      "ration"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The ______ at the factory prompted a review of safety procedures.",
    "options": [
      "fee",
      "incident",
      "immigration",
      "flexibility"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "It's important to ______ feedback from all stakeholders when developing a new product.",
    "options": [
      "inhibit",
      "display",
      "recover",
      "incorporate"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "excessive": {
    "pos": "adj.",
    "en_def": "too much",
    "cn_def": "過度的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "too much",
        "cn_def": "過度的"
      }
    ]
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person with special skill or knowledge",
    "cn_def": "專家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person with special skill or knowledge",
        "cn_def": "專家"
      }
    ]
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special skill or knowledge",
    "cn_def": "專業知識",
    "combined": [
      {
        "pos": "n.",
        "en_def": "special skill or knowledge",
        "cn_def": "專業知識"
      }
    ]
  },
  "explicit": {
    "pos": "adj.",
    "en_def": "very clear and direct",
    "cn_def": "明確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very clear and direct",
        "cn_def": "明確的"
      },
      {
        "pos": "adj.",
        "en_def": "showing too much (violence or sex)",
        "cn_def": "遭檢查的字)"
      }
    ]
  },
  "explicit (censored word)": {
    "pos": "adj.",
    "en_def": "showing too much (violence or sex)",
    "cn_def": "遭檢查的字)",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing too much (violence or sex)",
        "cn_def": "遭檢查的字)"
      }
    ]
  },
  "implicit": {
    "pos": "adj.",
    "en_def": "suggested but not said directly",
    "cn_def": "含蓄的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "suggested but not said directly",
        "cn_def": "含蓄的"
      }
    ]
  },
  "federal": {
    "pos": "adj.",
    "en_def": "about the national government",
    "cn_def": "聯邦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about the national government",
        "cn_def": "聯邦的"
      }
    ]
  },
  "fee": {
    "pos": "n.",
    "en_def": "money paid for a service",
    "cn_def": "費用",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money paid for a service",
        "cn_def": "費用"
      }
    ]
  },
  "flexible": {
    "pos": "adj.",
    "en_def": "able to change easily",
    "cn_def": "靈活的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to change easily",
        "cn_def": "靈活的"
      }
    ]
  },
  "flexibility": {
    "pos": "n.",
    "en_def": "the ability to change easily",
    "cn_def": "靈活性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to change easily",
        "cn_def": "靈活性"
      }
    ]
  },
  "furthermore": {
    "pos": "adv.",
    "en_def": "also; in addition",
    "cn_def": "此外",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "also; in addition",
        "cn_def": "此外"
      }
    ]
  },
  "gender": {
    "pos": "n.",
    "en_def": "being male or female",
    "cn_def": "性別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "being male or female",
        "cn_def": "性別"
      }
    ]
  },
  "ignore": {
    "pos": "v.",
    "en_def": "to pay no attention to something",
    "cn_def": "忽略",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pay no attention to something",
        "cn_def": "忽略"
      }
    ]
  },
  "ignored": {
    "pos": "adj.",
    "en_def": "not paid attention to",
    "cn_def": "被忽略的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not paid attention to",
        "cn_def": "被忽略的"
      }
    ]
  },
  "ignorant": {
    "pos": "adj.",
    "en_def": "not knowing things you should know",
    "cn_def": "無知的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not knowing things you should know",
        "cn_def": "無知的"
      }
    ]
  },
  "ignorance": {
    "pos": "n.",
    "en_def": "lack of knowledge",
    "cn_def": "無知",
    "combined": [
      {
        "pos": "n.",
        "en_def": "lack of knowledge",
        "cn_def": "無知"
      }
    ]
  },
  "incentive": {
    "pos": "n.",
    "en_def": "something that makes you want to do something",
    "cn_def": "刺激",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that makes you want to do something",
        "cn_def": "刺激"
      }
    ]
  },
  "incidence": {
    "pos": "n.",
    "en_def": "how often something happens",
    "cn_def": "發生率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how often something happens",
        "cn_def": "發生率"
      }
    ]
  },
  "incident": {
    "pos": "n.",
    "en_def": "an event, often a bad one",
    "cn_def": "事件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an event, often a bad one",
        "cn_def": "事件"
      }
    ]
  },
  "incorporate": {
    "pos": "v.",
    "en_def": "to include something as a part",
    "cn_def": "納入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to include something as a part",
        "cn_def": "納入"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
