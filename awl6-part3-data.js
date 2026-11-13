// Part 3 Quiz Data: discriminate against – exceeding
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 3 - discriminate against – exceeding",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "discriminate against",
    "pos": "phr.",
    "cn_def": "歧視",
    "en_def": "to treat people unfairly",
    "sentence": "Laws are in place to protect individuals who are {{BLANK}} based on race, gender, or age.",
    "cn": "法律旨在保護因種族，性別或年齡而受歧視的個人。"
  },
  {
    "word": "discrimination",
    "pos": "n.",
    "cn_def": "歧視",
    "en_def": "unfair treatment of people",
    "sentence": "The fight against {{BLANK}} is a long-term effort that requires the dedication of everyone involved.",
    "cn": "反歧視的鬥爭是一項長期努力，需要所有參與者的奉獻。"
  },
  {
    "word": "racial discrimination",
    "pos": "n.",
    "cn_def": "種族歧視",
    "en_def": "unfair treatment because of race",
    "sentence": "{{BLANK}} is a serious issue that societies across the globe are working to eradicate.",
    "cn": "種族歧視是全球各地的社會正在努力消除的嚴重問題。"
  },
  {
    "word": "display",
    "pos": "v.",
    "cn_def": "顯示",
    "en_def": "to show something for people to see",
    "sentence": "The museum will {{BLANK}} rare artifacts from ancient civilizations for a limited time.",
    "cn": "博物館將在有限的時間內展示來自古代文明的珍稀文物。"
  },
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "顯示",
    "en_def": "a show of things for people to see",
    "sentence": "The {{BLANK}} of local artwork attracts many visitors to the community center.",
    "cn": "地方藝術的展示吸引了許多訪客前往社區中心。"
  },
  {
    "word": "on display",
    "pos": "phr.",
    "cn_def": "展出",
    "en_def": "being shown for people to see",
    "sentence": "The rare manuscripts will be {{BLANK}} at the National Library for the next three months.",
    "cn": "珍稀手稿將在未來三個月內在國家圖書館展出。"
  },
  {
    "word": "diverse",
    "pos": "adj.",
    "cn_def": "多樣的",
    "en_def": "having many different kinds",
    "sentence": "The {{BLANK}} ecosystem of the rainforest is home to thousands of unique species.",
    "cn": "熱帶雨林的多樣生態系統是成千上萬種獨特物種的家園。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多樣性",
    "en_def": "a range of different things",
    "sentence": "The company is committed to promoting {{BLANK}} and inclusion in the workplace.",
    "cn": "公司致力於促進工作場所的多樣性和包容性。"
  },
  {
    "word": "biodiversity",
    "pos": "n.",
    "cn_def": "生物多樣性",
    "en_def": "the variety of living things in an area",
    "sentence": "The {{BLANK}} of this area is threatened by industrial development.",
    "cn": "這個地區的生物多樣性受到工業發展的威脅。"
  },
  {
    "word": "domain",
    "pos": "n.",
    "cn_def": "領域",
    "en_def": "an area of knowledge or activity",
    "sentence": "She has become an expert in her {{BLANK}}, contributing significantly to the field of renewable energy.",
    "cn": "她已成為她領域的專家，在可再生能源領域做出了重大貢獻。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯",
    "en_def": "to correct and improve writing",
    "sentence": "Before publishing, it's essential to {{BLANK}} the manuscript carefully to ensure accuracy and clarity.",
    "cn": "在出版之前，必須仔細編輯稿件以確保準確性和清晰度。"
  },
  {
    "word": "edited",
    "pos": "adj.",
    "cn_def": "編輯過的",
    "en_def": "corrected and improved",
    "sentence": "The {{BLANK}} version of the film includes additional scenes that provide more context to the story.",
    "cn": "編輯過的電影版本包括提供更多故事背景的額外場景。"
  },
  {
    "word": "unedited",
    "pos": "adj.",
    "cn_def": "未編輯的",
    "en_def": "not corrected or changed",
    "sentence": "The {{BLANK}} footage provides a raw and unfiltered look at the events as they unfolded.",
    "cn": "未編輯的鏡頭提供了對事件如何發展的原始和未經篩選的看法。"
  },
  {
    "word": "edition",
    "pos": "n.",
    "cn_def": "版本",
    "en_def": "one printing of a book",
    "sentence": "The latest {{BLANK}} of the software has several new features that enhance user experience.",
    "cn": "軟件的最新版本具有多個增強用戶體驗的新功能。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "增強",
    "en_def": "to make something better",
    "sentence": "The new training program is designed to {{BLANK}} the skills and knowledge of the employees.",
    "cn": "新的培訓計劃旨在增強員工的技能和知識。"
  },
  {
    "word": "enhanced",
    "pos": "adj.",
    "cn_def": "增強的",
    "en_def": "made better",
    "sentence": "The {{BLANK}} security measures have significantly reduced the incidence of data breaches.",
    "cn": "增強的安全措施顯著減少了數據泄露的發生。"
  },
  {
    "word": "enhancement",
    "pos": "n.",
    "cn_def": "增強",
    "en_def": "an improvement",
    "sentence": "The {{BLANK}} of customer service is a priority for the company to improve client satisfaction.",
    "cn": "提高客戶服務是公司提高客戶滿意度的重要目標。"
  },
  {
    "word": "estate",
    "pos": "n.",
    "cn_def": "地產",
    "en_def": "land and buildings someone owns",
    "sentence": "He inherited a large {{BLANK}} from his parents, which included several properties and acres of land.",
    "cn": "他從父母那裡繼承了大片地產，包括幾個房產和大量土地。"
  },
  {
    "word": "exceed",
    "pos": "v.",
    "cn_def": "超過",
    "en_def": "to go over a limit",
    "sentence": "If expenses {{BLANK}} revenues, the project may not be financially viable.",
    "cn": "如果支出超過收入，該項目可能在財務上不可行。"
  },
  {
    "word": "exceeding",
    "pos": "adj.",
    "cn_def": "超過的",
    "en_def": "going over a limit",
    "sentence": "The manager was impressed with the {{BLANK}} effort the team put into completing the project on time.",
    "cn": "經理對團隊為按時完成項目所付出的超常努力印象深刻。"
  }
];

const MCQS = [
  {
    "q": "Laws are in place to protect individuals who are ______ based on race, gender, or age.",
    "options": [
      "on display",
      "discriminate against",
      "be attached to",
      "attach ...to"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The fight against ______ is a long-term effort that requires the dedication of everyone involved.",
    "options": [
      "index",
      "ignorance",
      "discrimination",
      "lecture"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "______ is a serious issue that societies across the globe are working to eradicate.",
    "options": [
      "discriminate against",
      "cooperate with",
      "be capable of",
      "racial discrimination"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The museum will ______ rare artifacts from ancient civilizations for a limited time.",
    "options": [
      "display",
      "trace",
      "ignore",
      "inhibit"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The ______ of local artwork attracts many visitors to the community center.",
    "options": [
      "flexibility",
      "motivation",
      "expertise",
      "display"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The rare manuscripts will be ______ at the National Library for the next three months.",
    "options": [
      "attach ...to",
      "on display",
      "racial discrimination",
      "cooperate with"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The ______ ecosystem of the rainforest is home to thousands of unique species.",
    "options": [
      "diverse",
      "assigned",
      "explicit",
      "ignored"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The company is committed to promoting ______ and inclusion in the workplace.",
    "options": [
      "acknowledgement",
      "index",
      "diversity",
      "inhibition"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The ______ of this area is threatened by industrial development.",
    "options": [
      "interval",
      "bonding",
      "gender",
      "biodiversity"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "She has become an expert in her ______, contributing significantly to the field of renewable energy.",
    "options": [
      "diversity",
      "bond",
      "domain",
      "flexibility"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Before publishing, it's essential to ______ the manuscript carefully to ensure accuracy and clarity.",
    "options": [
      "edit",
      "incorporate",
      "ignore",
      "instruct"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The ______ version of the film includes additional scenes that provide more context to the story.",
    "options": [
      "federal",
      "edited",
      "allocated",
      "underlying"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The ______ footage provides a raw and unfiltered look at the events as they unfolded.",
    "options": [
      "minimum",
      "flexible",
      "unedited",
      "abstract"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The latest ______ of the software has several new features that enhance user experience.",
    "options": [
      "expertise",
      "display",
      "lecture",
      "edition"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The new training program is designed to ______ the skills and knowledge of the employees.",
    "options": [
      "enhance",
      "instruct",
      "edit",
      "cite"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The ______ security measures have significantly reduced the incidence of data breaches.",
    "options": [
      "uncited",
      "enhanced",
      "inaccurate",
      "explicit"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The ______ of customer service is a priority for the company to improve client satisfaction.",
    "options": [
      "accuracy",
      "allocation",
      "interval",
      "enhancement"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "He inherited a large ______ from his parents, which included several properties and acres of land.",
    "options": [
      "estate",
      "subsidiary",
      "utility",
      "rationality"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "If expenses ______ revenues, the project may not be financially viable.",
    "options": [
      "transform",
      "exceed",
      "migrate",
      "trace"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The manager was impressed with the ______ effort the team put into completing the project on time.",
    "options": [
      "implicit",
      "brief",
      "exceeding",
      "oversea"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "discriminate against": {
    "pos": "phr.",
    "en_def": "to treat people unfairly",
    "cn_def": "歧視",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to treat people unfairly",
        "cn_def": "歧視"
      }
    ]
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of people",
    "cn_def": "歧視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair treatment of people",
        "cn_def": "歧視"
      }
    ]
  },
  "racial discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment because of race",
    "cn_def": "種族歧視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair treatment because of race",
        "cn_def": "種族歧視"
      }
    ]
  },
  "display": {
    "pos": "v.",
    "en_def": "to show something for people to see",
    "cn_def": "顯示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show something for people to see",
        "cn_def": "顯示"
      },
      {
        "pos": "n.",
        "en_def": "a show of things for people to see",
        "cn_def": "顯示"
      }
    ]
  },
  "on display": {
    "pos": "phr.",
    "en_def": "being shown for people to see",
    "cn_def": "展出",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "being shown for people to see",
        "cn_def": "展出"
      }
    ]
  },
  "on display = on exhibit": {
    "pos": "phr.",
    "en_def": "being shown for people to see",
    "cn_def": "展出",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "being shown for people to see",
        "cn_def": "展出"
      }
    ]
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "having many different kinds",
    "cn_def": "多樣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having many different kinds",
        "cn_def": "多樣的"
      }
    ]
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of different things",
    "cn_def": "多樣性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a range of different things",
        "cn_def": "多樣性"
      }
    ]
  },
  "biodiversity": {
    "pos": "n.",
    "en_def": "the variety of living things in an area",
    "cn_def": "生物多樣性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the variety of living things in an area",
        "cn_def": "生物多樣性"
      }
    ]
  },
  "domain": {
    "pos": "n.",
    "en_def": "an area of knowledge or activity",
    "cn_def": "領域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of knowledge or activity",
        "cn_def": "領域"
      }
    ]
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve writing",
    "cn_def": "編輯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to correct and improve writing",
        "cn_def": "編輯"
      }
    ]
  },
  "edited": {
    "pos": "adj.",
    "en_def": "corrected and improved",
    "cn_def": "編輯過的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "corrected and improved",
        "cn_def": "編輯過的"
      }
    ]
  },
  "unedited": {
    "pos": "adj.",
    "en_def": "not corrected or changed",
    "cn_def": "未編輯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not corrected or changed",
        "cn_def": "未編輯的"
      }
    ]
  },
  "edition": {
    "pos": "n.",
    "en_def": "one printing of a book",
    "cn_def": "版本",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one printing of a book",
        "cn_def": "版本"
      }
    ]
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "增強",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something better",
        "cn_def": "增強"
      }
    ]
  },
  "enhanced": {
    "pos": "adj.",
    "en_def": "made better",
    "cn_def": "增強的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made better",
        "cn_def": "增強的"
      }
    ]
  },
  "enhancement": {
    "pos": "n.",
    "en_def": "an improvement",
    "cn_def": "增強",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an improvement",
        "cn_def": "增強"
      }
    ]
  },
  "estate": {
    "pos": "n.",
    "en_def": "land and buildings someone owns",
    "cn_def": "地產",
    "combined": [
      {
        "pos": "n.",
        "en_def": "land and buildings someone owns",
        "cn_def": "地產"
      }
    ]
  },
  "exceed": {
    "pos": "v.",
    "en_def": "to go over a limit",
    "cn_def": "超過",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to go over a limit",
        "cn_def": "超過"
      }
    ]
  },
  "exceeding": {
    "pos": "adj.",
    "en_def": "going over a limit",
    "cn_def": "超過的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "going over a limit",
        "cn_def": "超過的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
