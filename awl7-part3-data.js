// Part 3 Quiz Data: empirical – grade
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 3 - empirical – grade",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "empirical",
    "pos": "adj.",
    "cn_def": "經驗的",
    "en_def": "based on what you see and test",
    "sentence": "The scientist used an {{BLANK}} approach to test the hypothesis.",
    "cn": "科學家使用經驗方法測試假設。"
  },
  {
    "word": "equip",
    "pos": "v.",
    "cn_def": "裝備",
    "en_def": "to give someone the tools they need",
    "sentence": "The organization plans to {{BLANK}} the local schools with new computers.",
    "cn": "該組織計劃為當地學校裝備新電腦。"
  },
  {
    "word": "equipped with",
    "pos": "phr.",
    "cn_def": "配備有",
    "en_def": "to have the tools or things you need",
    "sentence": "The new facility is {{BLANK}} modern laboratories and state-of-the-art technology.",
    "cn": "新設施配備有現代實驗室和最先進的技術。"
  },
  {
    "word": "well-equipped",
    "pos": "adj.",
    "cn_def": "裝備良好的",
    "en_def": "having all the right tools",
    "sentence": "The {{BLANK}} gym has everything needed for a complete workout.",
    "cn": "裝備良好的健身房擁有完成全部運動所需的一切。"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "cn_def": "設備",
    "en_def": "tools or machines used for a job",
    "sentence": "Proper maintenance of {{BLANK}} is essential for ensuring long-term functionality.",
    "cn": "正確維護設備對於確保長期功能至關重要。"
  },
  {
    "word": "extract",
    "pos": "n.",
    "cn_def": "提取物",
    "en_def": "a substance taken from a plant or food",
    "sentence": "The vanilla {{BLANK}} added a wonderful aroma to the baked goods.",
    "cn": "香草提取物為烘焙食品增添了美妙的香氣。"
  },
  {
    "word": "extract",
    "pos": "v.",
    "cn_def": "提取",
    "en_def": "to take something out",
    "sentence": "They managed to {{BLANK}} valuable information from the old documents.",
    "cn": "他們設法從舊文件中提取有價值的信息。"
  },
  {
    "word": "extracted",
    "pos": "adj.",
    "cn_def": "提取的",
    "en_def": "taken out of something",
    "sentence": "The {{BLANK}} data was analyzed to identify patterns.",
    "cn": "提取的數據被分析以識別模式。"
  },
  {
    "word": "file",
    "pos": "n.",
    "cn_def": "文件",
    "en_def": "a collection of information on a computer",
    "sentence": "Please save the document as a PDF {{BLANK}} before emailing it.",
    "cn": "請在通過電子郵件發送之前將文檔另存為PDF文件。"
  },
  {
    "word": "file",
    "pos": "v.",
    "cn_def": "提交",
    "en_def": "to officially send a document",
    "sentence": "She will {{BLANK}} the report by the end of the day.",
    "cn": "她將在一天結束時提交報告。"
  },
  {
    "word": "finite",
    "pos": "adj.",
    "cn_def": "有限的",
    "en_def": "having an end or limit",
    "sentence": "Resources are {{BLANK}}, so we need to use them wisely.",
    "cn": "資源是有限的，所以我們需要明智地使用它們。"
  },
  {
    "word": "infinite",
    "pos": "adj.",
    "cn_def": "無限的",
    "en_def": "without end or limit",
    "sentence": "The universe is vast and seemingly {{BLANK}}.",
    "cn": "宇宙是廣大且看似無限的。"
  },
  {
    "word": "infinity",
    "pos": "n.",
    "cn_def": "無限",
    "en_def": "something without end",
    "sentence": "The concept of {{BLANK}} is difficult to fully grasp.",
    "cn": "無限的概念很難完全理解。"
  },
  {
    "word": "found",
    "pos": "v.",
    "cn_def": "創立",
    "en_def": "to start a company or organization",
    "sentence": "They plan to {{BLANK}} a non-profit organization to support education in underprivileged areas.",
    "cn": "他們計劃創立一個非盈利組織以支持貧困地區的教育。"
  },
  {
    "word": "founded",
    "pos": "phr.",
    "cn_def": "被創立",
    "en_def": "to be started or created",
    "sentence": "The charity was {{BLANK}} in 2005 with the mission of alleviating poverty.",
    "cn": "該慈善機構於2005年成立，旨在減輕貧困。"
  },
  {
    "word": "founder",
    "pos": "n.",
    "cn_def": "創始人",
    "en_def": "a person who starts a company",
    "sentence": "The {{BLANK}} of the company is known for his innovative ideas and charismatic leadership.",
    "cn": "公司的創始人以其創新思想和富有感召力的領導而著稱。"
  },
  {
    "word": "foundation",
    "pos": "n.",
    "cn_def": "基礎",
    "en_def": "the basic part that supports something",
    "sentence": "A strong {{BLANK}} in mathematics is essential for pursuing a degree in engineering.",
    "cn": "在數學上有堅實的基礎對於攻讀工程學位至關重要。"
  },
  {
    "word": "foundation",
    "pos": "n.",
    "cn_def": "基金會",
    "en_def": "an organization that gives money to help others",
    "sentence": "The {{BLANK}} aims to promote educational initiatives in developing countries.",
    "cn": "該基金會旨在促進發展中國家的教育倡議。"
  },
  {
    "word": "globe",
    "pos": "n.",
    "cn_def": "地球",
    "en_def": "the earth",
    "sentence": "Climate change is a pressing issue facing the {{BLANK}}.",
    "cn": "氣候變化是地球面臨的一個迫切問題。"
  },
  {
    "word": "global",
    "pos": "adj.",
    "cn_def": "全球的",
    "en_def": "about the whole world",
    "sentence": "The pandemic has had a {{BLANK}} impact on economies worldwide.",
    "cn": "大流行病對全球經濟產生了全球性影響。"
  },
  {
    "word": "globally",
    "pos": "adv.",
    "cn_def": "全球地",
    "en_def": "around the whole world",
    "sentence": "The company is expanding {{BLANK}} to reach new markets.",
    "cn": "公司正在全球範圍內擴展以開拓新市場。"
  },
  {
    "word": "grade",
    "pos": "v.",
    "cn_def": "給...打分",
    "en_def": "to give a mark to schoolwork",
    "sentence": "The teacher took a long time to {{BLANK}} the final exams due to the large number of students.",
    "cn": "由於學生人數眾多，老師花了很長時間給期末考試打分。"
  }
];

const MCQS = [
  {
    "q": "The scientist used an ______ approach to test the hypothesis.",
    "options": [
      "infinite",
      "submitted",
      "empirical",
      "hierarchical"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The organization plans to ______ the local schools with new computers.",
    "options": [
      "simulate",
      "isolate",
      "quote",
      "equip"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The new facility is ______ modern laboratories and state-of-the-art technology.",
    "options": [
      "dispose of",
      "be equipped with",
      "identical to",
      "a couple of"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The ______ gym has everything needed for a complete workout.",
    "options": [
      "well-equipped",
      "classical",
      "extracted",
      "eliminated"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Proper maintenance of ______ is essential for ensuring long-term functionality.",
    "options": [
      "visibility",
      "equipment",
      "quotation",
      "founder"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The vanilla ______ added a wonderful aroma to the baked goods.",
    "options": [
      "quotation",
      "isolation",
      "publication",
      "extract"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "They managed to ______ valuable information from the old documents.",
    "options": [
      "extract",
      "comprise",
      "equip",
      "deny"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The ______ data was analyzed to identify patterns.",
    "options": [
      "classical",
      "contrary",
      "extracted",
      "reversible"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Please save the document as a PDF ______ before emailing it.",
    "options": [
      "file",
      "volunteer",
      "insertion",
      "survivor"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "She will ______ the report by the end of the day.",
    "options": [
      "channel",
      "file",
      "succeed",
      "differentiate"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Resources are ______, so we need to use them wisely.",
    "options": [
      "irreversible",
      "guaranteed",
      "successive",
      "finite"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The universe is vast and seemingly ______.",
    "options": [
      "published",
      "adapted",
      "infinite",
      "inferred"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The concept of ______ is difficult to fully grasp.",
    "options": [
      "conversion",
      "submission",
      "insertion",
      "infinity"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "They plan to ______ a non-profit organization to support education in underprivileged areas.",
    "options": [
      "infer",
      "confirm",
      "found",
      "guarantee"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The charity was ______ in 2005 with the mission of alleviating poverty.",
    "options": [
      "release a song/album",
      "be founded",
      "contrary to",
      "differ from"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The ______ of the company is known for his innovative ideas and charismatic leadership.",
    "options": [
      "founder",
      "elimination",
      "chemical",
      "phenomenon"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A strong ______ in mathematics is essential for pursuing a degree in engineering.",
    "options": [
      "transmission",
      "simulation",
      "insertion",
      "foundation"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The ______ aims to promote educational initiatives in developing countries.",
    "options": [
      "dynamic",
      "foundation",
      "channel",
      "adaptation"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Climate change is a pressing issue facing the ______.",
    "options": [
      "globe",
      "ideology",
      "submission",
      "quotation"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The pandemic has had a ______ impact on economies worldwide.",
    "options": [
      "innovative",
      "classical",
      "global",
      "contrary"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The company is expanding ______ to reach new markets.",
    "options": [
      "globally",
      "solely",
      "ultimately",
      "somewhat"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The teacher took a long time to ______ the final exams due to the large number of students.",
    "options": [
      "submit",
      "convert",
      "innovate",
      "grade"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "empirical": {
    "pos": "adj.",
    "en_def": "based on what you see and test",
    "cn_def": "經驗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on what you see and test",
        "cn_def": "經驗的"
      }
    ]
  },
  "equip": {
    "pos": "v.",
    "en_def": "to give someone the tools they need",
    "cn_def": "裝備",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone the tools they need",
        "cn_def": "裝備"
      }
    ]
  },
  "be equipped with": {
    "pos": "phr.",
    "en_def": "to have the tools or things you need",
    "cn_def": "配備有",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have the tools or things you need",
        "cn_def": "配備有"
      }
    ]
  },
  "equipped with": {
    "pos": "phr.",
    "en_def": "to have the tools or things you need",
    "cn_def": "配備有",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have the tools or things you need",
        "cn_def": "配備有"
      }
    ]
  },
  "well-equipped": {
    "pos": "adj.",
    "en_def": "having all the right tools",
    "cn_def": "裝備良好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having all the right tools",
        "cn_def": "裝備良好的"
      }
    ]
  },
  "equipment": {
    "pos": "n.",
    "en_def": "tools or machines used for a job",
    "cn_def": "設備",
    "combined": [
      {
        "pos": "n.",
        "en_def": "tools or machines used for a job",
        "cn_def": "設備"
      }
    ]
  },
  "extract": {
    "pos": "n.",
    "en_def": "a substance taken from a plant or food",
    "cn_def": "提取物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance taken from a plant or food",
        "cn_def": "提取物"
      },
      {
        "pos": "v.",
        "en_def": "to take something out",
        "cn_def": "提取"
      }
    ]
  },
  "extracted": {
    "pos": "adj.",
    "en_def": "taken out of something",
    "cn_def": "提取的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "taken out of something",
        "cn_def": "提取的"
      }
    ]
  },
  "file": {
    "pos": "n.",
    "en_def": "a collection of information on a computer",
    "cn_def": "文件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a collection of information on a computer",
        "cn_def": "文件"
      },
      {
        "pos": "v.",
        "en_def": "to officially send a document",
        "cn_def": "提交"
      }
    ]
  },
  "finite": {
    "pos": "adj.",
    "en_def": "having an end or limit",
    "cn_def": "有限的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having an end or limit",
        "cn_def": "有限的"
      }
    ]
  },
  "infinite": {
    "pos": "adj.",
    "en_def": "without end or limit",
    "cn_def": "無限的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "without end or limit",
        "cn_def": "無限的"
      }
    ]
  },
  "infinity": {
    "pos": "n.",
    "en_def": "something without end",
    "cn_def": "無限",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something without end",
        "cn_def": "無限"
      }
    ]
  },
  "found": {
    "pos": "v.",
    "en_def": "to start a company or organization",
    "cn_def": "創立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to start a company or organization",
        "cn_def": "創立"
      }
    ]
  },
  "founded": {
    "pos": "phr.",
    "en_def": "to be started or created",
    "cn_def": "被創立",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be started or created",
        "cn_def": "被創立"
      }
    ]
  },
  "be founded": {
    "pos": "phr.",
    "en_def": "to be started or created",
    "cn_def": "被創立",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be started or created",
        "cn_def": "被創立"
      }
    ]
  },
  "founder": {
    "pos": "n.",
    "en_def": "a person who starts a company",
    "cn_def": "創始人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who starts a company",
        "cn_def": "創始人"
      }
    ]
  },
  "foundation": {
    "pos": "n.",
    "en_def": "the basic part that supports something",
    "cn_def": "基礎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the basic part that supports something",
        "cn_def": "基礎"
      },
      {
        "pos": "n.",
        "en_def": "an organization that gives money to help others",
        "cn_def": "基金會"
      }
    ]
  },
  "globe": {
    "pos": "n.",
    "en_def": "the earth",
    "cn_def": "地球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the earth",
        "cn_def": "地球"
      }
    ]
  },
  "global": {
    "pos": "adj.",
    "en_def": "about the whole world",
    "cn_def": "全球的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about the whole world",
        "cn_def": "全球的"
      }
    ]
  },
  "globally": {
    "pos": "adv.",
    "en_def": "around the whole world",
    "cn_def": "全球地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "around the whole world",
        "cn_def": "全球地"
      }
    ]
  },
  "grade": {
    "pos": "v.",
    "en_def": "to give a mark to schoolwork",
    "cn_def": "給...打分",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a mark to schoolwork",
        "cn_def": "給...打分"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
