// Part 2 Quiz Data: constrain – deduction
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 2 - constrain – deduction",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "constrain",
    "pos": "v.",
    "cn_def": "限制",
    "en_def": "to limit or control something",
    "sentence": "Limited resources might {{BLANK}} our ability to complete the project on time.",
    "cn": "有限的資源可能會限制我們及時完成項目的能力。"
  },
  {
    "word": "constraint",
    "pos": "n.",
    "cn_def": "限制",
    "en_def": "something that limits what you can do",
    "sentence": "The budgetary {{BLANK}} affected the scope of the project.",
    "cn": "預算限制影響了項目的範圍。"
  },
  {
    "word": "contribute to",
    "pos": "v.",
    "cn_def": "有助於",
    "en_def": "to help cause something",
    "sentence": "Healthy eating can {{BLANK}} overall well-being.",
    "cn": "健康飲食可以有助於整體健康。"
  },
  {
    "word": "make a contribution to",
    "pos": "phr.",
    "cn_def": "對...作出貢獻",
    "en_def": "to give help to make something happen",
    "sentence": "Volunteering can allow you to {{BLANK}} the community.",
    "cn": "志願工作可以讓您對社區作出貢獻。"
  },
  {
    "word": "convention",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "a large meeting or conference",
    "sentence": "The annual tech {{BLANK}} attracted innovators from around the world.",
    "cn": "年度技術會議吸引了來自世界各地的創新者。"
  },
  {
    "word": "convention",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a usual way of doing things",
    "sentence": "The village has a {{BLANK}} of celebrating the harvest with a big feast.",
    "cn": "這個村莊有一個慶祝豐收的大餐的傳統。"
  },
  {
    "word": "conventional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "traditional and usual",
    "sentence": "They opted for a more {{BLANK}} approach to the problem.",
    "cn": "他們選擇了一種更傳統的方法來解決問題。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "協調",
    "en_def": "to organize people or things to work together",
    "sentence": "We need to {{BLANK}} our efforts to be more efficient.",
    "cn": "我們需要協調我們的努力以更加高效。"
  },
  {
    "word": "coordination",
    "pos": "n.",
    "cn_def": "協調",
    "en_def": "organizing people to work well together",
    "sentence": "The event required the {{BLANK}} of multiple teams.",
    "cn": "這個活動需要多個團隊的協調。"
  },
  {
    "word": "core",
    "pos": "n.",
    "cn_def": "核心",
    "en_def": "the most important part",
    "sentence": "Trust is the {{BLANK}} of any strong relationship.",
    "cn": "信任是任何堅強關係的核心。"
  },
  {
    "word": "core value",
    "pos": "phr.",
    "cn_def": "核心價值",
    "en_def": "the most important belief or idea",
    "sentence": "Integrity is one of the company's {{BLANK}}.",
    "cn": "誠信是該公司的核心價值之一。"
  },
  {
    "word": "corporate",
    "pos": "adj.",
    "cn_def": "企業的",
    "en_def": "about a large company",
    "sentence": "He attended a {{BLANK}} training seminar last week.",
    "cn": "他上週參加了一場企業培訓研討會。"
  },
  {
    "word": "corporation",
    "pos": "n.",
    "cn_def": "公司",
    "en_def": "a large company",
    "sentence": "The {{BLANK}} announced a new CEO today.",
    "cn": "該公司今天宣布了一位新CEO。"
  },
  {
    "word": "correspond with",
    "pos": "v.",
    "cn_def": "與...相對應",
    "en_def": "to match or agree with something",
    "sentence": "The symptoms {{BLANK}} those described in the medical textbook.",
    "cn": "症狀與醫學教材中描述的相對應。"
  },
  {
    "word": "correspondent",
    "pos": "n.",
    "cn_def": "通訊記者",
    "en_def": "a reporter in a special place or on a topic",
    "sentence": "The news {{BLANK}} provided updates from the front lines.",
    "cn": "新聞通訊記者從前線提供了更新。"
  },
  {
    "word": "corresponding",
    "pos": "adj.",
    "cn_def": "相對應的",
    "en_def": "matching or connected to something",
    "sentence": "The {{BLANK}} numbers were found on the next page.",
    "cn": "相對應的數字在下一頁上找到。"
  },
  {
    "word": "criterion",
    "pos": "n.",
    "cn_def": "標準",
    "en_def": "a standard used to judge something",
    "sentence": "The main {{BLANK}} for the job is experience in the field.",
    "cn": "該工作的主要標準是該領域的經驗。"
  },
  {
    "word": "criteria",
    "pos": "n.",
    "cn_def": "標準",
    "en_def": "standards used to judge something (plural)",
    "sentence": "There are several {{BLANK}} for selecting the right candidate.",
    "cn": "選擇合適候選人有幾個標準。"
  },
  {
    "word": "deduct",
    "pos": "v.",
    "cn_def": "扣除",
    "en_def": "to take away an amount from a total",
    "sentence": "They will {{BLANK}} taxes from your monthly salary.",
    "cn": "他們將從您的月薪中扣除稅款。"
  },
  {
    "word": "deduction",
    "pos": "n.",
    "cn_def": "扣除",
    "en_def": "an amount taken away from a total",
    "sentence": "The {{BLANK}} was clearly indicated in the invoice.",
    "cn": "發票中明確指出了扣除項。"
  }
];

const MCQS = [
  {
    "q": "Limited resources might ______ our ability to complete the project on time.",
    "options": [
      "constrain",
      "include",
      "document",
      "assure"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The budgetary ______ affected the scope of the project.",
    "options": [
      "removal",
      "constraint",
      "volume",
      "consideration"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Healthy eating can ______ overall well-being.",
    "options": [
      "for instance",
      "the minority group",
      "contribute to",
      "ensure that"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Volunteering can allow you to ______ the community.",
    "options": [
      "minor in",
      "inclusive of",
      "under the circumstance",
      "make a contribution to"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The annual tech ______ attracted innovators from around the world.",
    "options": [
      "react with",
      "minor in",
      "convention",
      "the minority group"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The village has a ______ of celebrating the harvest with a big feast.",
    "options": [
      "react to",
      "ensure that",
      "rely on",
      "convention"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "They opted for a more ______ approach to the problem.",
    "options": [
      "constant",
      "conventional",
      "sufficient",
      "initial"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "We need to ______ our efforts to be more efficient.",
    "options": [
      "coordinate",
      "expire",
      "exclude",
      "publish"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The event required the ______ of multiple teams.",
    "options": [
      "validity",
      "sequence",
      "technology",
      "coordination"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Trust is the ______ of any strong relationship.",
    "options": [
      "registration",
      "shift",
      "core",
      "sequence"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Integrity is one of the company's ______.",
    "options": [
      "the minority group",
      "core value",
      "reliance on",
      "make a contribution to"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "He attended a ______ training seminar last week.",
    "options": [
      "corporate",
      "initial",
      "illustrated",
      "excluded"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The ______ announced a new CEO today.",
    "options": [
      "implication",
      "sex",
      "corporation",
      "immigrant"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The symptoms ______ those described in the medical textbook.",
    "options": [
      "correspond with",
      "convention",
      "remove from",
      "demonstrate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The news ______ provided updates from the front lines.",
    "options": [
      "portion",
      "removal",
      "consideration",
      "correspondent"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The ______ numbers were found on the next page.",
    "options": [
      "constant",
      "corresponding",
      "dominating",
      "fundamental"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The main ______ for the job is experience in the field.",
    "options": [
      "location",
      "coordination",
      "compensation",
      "criterion"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "There are several ______ for selecting the right candidate.",
    "options": [
      "immigration",
      "criteria",
      "corporation",
      "link"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "They will ______ taxes from your monthly salary.",
    "options": [
      "lay-laid-laid",
      "reassure",
      "deduct",
      "publish"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The ______ was clearly indicated in the invoice.",
    "options": [
      "deduction",
      "correspondent",
      "location",
      "sequence"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "constrain": {
    "pos": "v.",
    "en_def": "to limit or control something",
    "cn_def": "限制",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to limit or control something",
        "cn_def": "限制"
      }
    ]
  },
  "constraint": {
    "pos": "n.",
    "en_def": "something that limits what you can do",
    "cn_def": "限制",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that limits what you can do",
        "cn_def": "限制"
      }
    ]
  },
  "contribute to": {
    "pos": "v.",
    "en_def": "to help cause something",
    "cn_def": "有助於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to help cause something",
        "cn_def": "有助於"
      }
    ]
  },
  "make a contribution to": {
    "pos": "phr.",
    "en_def": "to give help to make something happen",
    "cn_def": "對...作出貢獻",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give help to make something happen",
        "cn_def": "對...作出貢獻"
      }
    ]
  },
  "convention": {
    "pos": "n.",
    "en_def": "a large meeting or conference",
    "cn_def": "會議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large meeting or conference",
        "cn_def": "會議"
      },
      {
        "pos": "n.",
        "en_def": "a usual way of doing things",
        "cn_def": "傳統"
      }
    ]
  },
  "convention = tradition": {
    "pos": "n.",
    "en_def": "a usual way of doing things",
    "cn_def": "傳統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a usual way of doing things",
        "cn_def": "傳統"
      }
    ]
  },
  "conventional": {
    "pos": "adj.",
    "en_def": "traditional and usual",
    "cn_def": "傳統的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "traditional and usual",
        "cn_def": "傳統的"
      }
    ]
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to organize people or things to work together",
    "cn_def": "協調",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to organize people or things to work together",
        "cn_def": "協調"
      }
    ]
  },
  "coordination": {
    "pos": "n.",
    "en_def": "organizing people to work well together",
    "cn_def": "協調",
    "combined": [
      {
        "pos": "n.",
        "en_def": "organizing people to work well together",
        "cn_def": "協調"
      }
    ]
  },
  "core": {
    "pos": "n.",
    "en_def": "the most important part",
    "cn_def": "核心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the most important part",
        "cn_def": "核心"
      }
    ]
  },
  "core value": {
    "pos": "phr.",
    "en_def": "the most important belief or idea",
    "cn_def": "核心價值",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the most important belief or idea",
        "cn_def": "核心價值"
      }
    ]
  },
  "corporate": {
    "pos": "adj.",
    "en_def": "about a large company",
    "cn_def": "企業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about a large company",
        "cn_def": "企業的"
      }
    ]
  },
  "corporation": {
    "pos": "n.",
    "en_def": "a large company",
    "cn_def": "公司",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large company",
        "cn_def": "公司"
      }
    ]
  },
  "correspond with": {
    "pos": "v.",
    "en_def": "to match or agree with something",
    "cn_def": "與...相對應",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to match or agree with something",
        "cn_def": "與...相對應"
      }
    ]
  },
  "correspondent": {
    "pos": "n.",
    "en_def": "a reporter in a special place or on a topic",
    "cn_def": "通訊記者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a reporter in a special place or on a topic",
        "cn_def": "通訊記者"
      }
    ]
  },
  "corresponding": {
    "pos": "adj.",
    "en_def": "matching or connected to something",
    "cn_def": "相對應的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "matching or connected to something",
        "cn_def": "相對應的"
      }
    ]
  },
  "criterion": {
    "pos": "n.",
    "en_def": "a standard used to judge something",
    "cn_def": "標準",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a standard used to judge something",
        "cn_def": "標準"
      }
    ]
  },
  "criteria": {
    "pos": "n.",
    "en_def": "standards used to judge something (plural)",
    "cn_def": "標準",
    "combined": [
      {
        "pos": "n.",
        "en_def": "standards used to judge something (plural)",
        "cn_def": "標準"
      }
    ]
  },
  "deduct": {
    "pos": "v.",
    "en_def": "to take away an amount from a total",
    "cn_def": "扣除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take away an amount from a total",
        "cn_def": "扣除"
      }
    ]
  },
  "deduction": {
    "pos": "n.",
    "en_def": "an amount taken away from a total",
    "cn_def": "扣除",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount taken away from a total",
        "cn_def": "扣除"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
