// Part 5 Quiz Data: initiative – the minority group
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 5 - initiative – the minority group",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "主動權",
    "en_def": "a new plan; the will to act first",
    "sentence": "Taking the {{BLANK}} to start the project earned her a lot of respect.",
    "cn": "採取主動開始該項目為她贏得了很多尊重。"
  },
  {
    "word": "for instance",
    "pos": "phr.",
    "cn_def": "舉例",
    "en_def": "for example",
    "sentence": "There are many ways to approach the problem, {{BLANK}} , we could try brainstorming first.",
    "cn": "有很多方法可以解決這個問題，舉例來說，我們可以先嘗試腦力激盪。"
  },
  {
    "word": "interact with",
    "pos": "v.",
    "cn_def": "與...互動",
    "en_def": "to talk or work with others",
    "sentence": "Children learn when they {{BLANK}} their peers.",
    "cn": "當兒童與他們的同齡人互動時，他們會學到東西。"
  },
  {
    "word": "interaction with",
    "pos": "n.",
    "cn_def": "與...的互動",
    "en_def": "talking or working with others",
    "sentence": "The {{BLANK}} customers is essential for our business.",
    "cn": "與客戶的互動對我們的業務至關重要。"
  },
  {
    "word": "justify",
    "pos": "v.",
    "cn_def": "證明...是正當的",
    "en_def": "to give a good reason for something",
    "sentence": "How do you {{BLANK}} spending so much on a single meal?",
    "cn": "你如何證明在一餐上花那麼多錢是正當的？"
  },
  {
    "word": "justified",
    "pos": "adj.",
    "cn_def": "有正當理由的",
    "en_def": "fair and having a good reason",
    "sentence": "The manager felt that the expenses were completely {{BLANK}}.",
    "cn": "經理覺得這些開銷完全是有正當理由的。"
  },
  {
    "word": "justification",
    "pos": "n.",
    "cn_def": "理由",
    "en_def": "a good reason for something",
    "sentence": "He provided {{BLANK}} for each of his decisions during the meeting.",
    "cn": "他在會議期間為他的每一個決定提供了理由。"
  },
  {
    "word": "lay-laid-laid",
    "pos": "v.",
    "cn_def": "放下",
    "en_def": "to put something down",
    "sentence": "She {{BLANK}} the book on the table and walked away.",
    "cn": "她把書放在桌子上然後走開了。"
  },
  {
    "word": "layer",
    "pos": "n.",
    "cn_def": "層",
    "en_def": "a thin covering over or under something",
    "sentence": "The cake had multiple {{BLANK}} of chocolate and cream.",
    "cn": "蛋糕有多層巧克力和奶油。"
  },
  {
    "word": "link",
    "pos": "v.",
    "cn_def": "連接",
    "en_def": "to connect things",
    "sentence": "Can you {{BLANK}} this computer to the main server?",
    "cn": "你可以將這台電腦連接到主服務器嗎？"
  },
  {
    "word": "link",
    "pos": "n.",
    "cn_def": "連結",
    "en_def": "a connection; a web address",
    "sentence": "Click on this {{BLANK}} to access the website.",
    "cn": "點擊此連結以訪問該網站。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "位置",
    "en_def": "a place or position",
    "sentence": "The {{BLANK}} of the conference will be announced later.",
    "cn": "會議的地點將在稍後宣布。"
  },
  {
    "word": "located in",
    "pos": "phr.",
    "cn_def": "位於",
    "en_def": "to be in a certain place",
    "sentence": "The museum is {{BLANK}} the heart of the city.",
    "cn": "博物館位於城市的中心。"
  },
  {
    "word": "maximum",
    "pos": "adj./n.",
    "cn_def": "最大值",
    "en_def": "the largest amount possible",
    "sentence": "You are allowed a {{BLANK}} of three bags on the flight.",
    "cn": "您在航班上允許攜帶最多三個袋子。"
  },
  {
    "word": "minimum",
    "pos": "adj./n.",
    "cn_def": "最小值",
    "en_def": "the smallest amount possible",
    "sentence": "The {{BLANK}} order quantity is 50 units.",
    "cn": "最小訂購數量是50個單位。"
  },
  {
    "word": "major",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "very important or big",
    "sentence": "The {{BLANK}} reason for the delay was bad weather.",
    "cn": "主要的延遲原因是惡劣的天氣。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "次要的",
    "en_def": "small; not very important",
    "sentence": "There were a few {{BLANK}} errors in the report.",
    "cn": "報告中有一些次要錯誤。"
  },
  {
    "word": "minor in",
    "pos": "v.",
    "cn_def": "輔修",
    "en_def": "to study a second subject at university",
    "sentence": "She decided to major in psychology and {{BLANK}} sociology.",
    "cn": "她決定主修心理學並輔修社會學。"
  },
  {
    "word": "the minorities",
    "pos": "n.",
    "cn_def": "少數民族",
    "en_def": "groups that are smaller in number in a society",
    "sentence": "{{BLANK}} often have their own unique cultures and traditions.",
    "cn": "少數民族通常有自己獨特的文化和傳統。"
  },
  {
    "word": "the minority group",
    "pos": "phr.",
    "cn_def": "少數族群",
    "en_def": "a group that is smaller in number",
    "sentence": "The government is taking measures to support {{BLANK}} in the country.",
    "cn": "政府正在採取措施支持國家的少數族群。"
  }
];

const MCQS = [
  {
    "q": "Taking the ______ to start the project earned her a lot of respect.",
    "options": [
      "initiative",
      "physics",
      "shift",
      "component"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "There are many ways to approach the problem, ______ , we could try brainstorming first.",
    "options": [
      "ensure that",
      "for instance",
      "ensure",
      "contribute to"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Children learn when they ______ their peers.",
    "options": [
      "core value",
      "demonstrate",
      "interact with",
      "make a comment on"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The ______ customers is essential for our business.",
    "options": [
      "ensure",
      "reliance on",
      "comment on",
      "interaction with"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "How do you ______ spending so much on a single meal?",
    "options": [
      "justify",
      "include",
      "assure",
      "reassure"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The manager felt that the expenses were completely ______.",
    "options": [
      "physical",
      "justified",
      "constant",
      "corporate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "He provided ______ for each of his decisions during the meeting.",
    "options": [
      "task",
      "initiative",
      "justification",
      "circumstances"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "She ______ the book on the table and walked away.",
    "options": [
      "constrain",
      "reassure",
      "publish",
      "lay-laid-laid"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The cake had multiple ______ of chocolate and cream.",
    "options": [
      "layer",
      "consent",
      "exclusion",
      "compensation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Can you ______ this computer to the main server?",
    "options": [
      "interaction with",
      "for instance",
      "link to/with",
      "make a contribution to"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Click on this ______ to access the website.",
    "options": [
      "immigrant",
      "link",
      "fund",
      "compensation"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The ______ of the conference will be announced later.",
    "options": [
      "initiative",
      "physics",
      "consent",
      "location"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The museum is ______ the heart of the city.",
    "options": [
      "be located in",
      "comment on",
      "convention",
      "demonstrate"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "You are allowed a ______ of three bags on the flight.",
    "options": [
      "technological",
      "maximum",
      "included",
      "registered"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The ______ order quantity is 50 units.",
    "options": [
      "major",
      "excluded",
      "dominating",
      "minimum"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The ______ reason for the delay was bad weather.",
    "options": [
      "dominating",
      "alternative",
      "major",
      "justified"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "There were a few ______ errors in the report.",
    "options": [
      "male-dominating",
      "reliable",
      "conventional",
      "minor"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "She decided to major in psychology and ______ sociology.",
    "options": [
      "emphasize on",
      "rely on",
      "minor in",
      "make a contribution to"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "______ often have their own unique cultures and traditions.",
    "options": [
      "the minorities",
      "rely on",
      "make a contribution to",
      "interaction with"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The government is taking measures to support ______ in the country.",
    "options": [
      "lay/put emphasis on",
      "the minority group",
      "comment on",
      "rely on"
    ],
    "answer": 1,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "initiative": {
    "pos": "n.",
    "en_def": "a new plan; the will to act first",
    "cn_def": "主動權",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a new plan; the will to act first",
        "cn_def": "主動權"
      }
    ]
  },
  "for instance": {
    "pos": "phr.",
    "en_def": "for example",
    "cn_def": "舉例",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "for example",
        "cn_def": "舉例"
      }
    ]
  },
  "interact with": {
    "pos": "v.",
    "en_def": "to talk or work with others",
    "cn_def": "與...互動",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to talk or work with others",
        "cn_def": "與...互動"
      }
    ]
  },
  "interaction with": {
    "pos": "n.",
    "en_def": "talking or working with others",
    "cn_def": "與...的互動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "talking or working with others",
        "cn_def": "與...的互動"
      }
    ]
  },
  "justify": {
    "pos": "v.",
    "en_def": "to give a good reason for something",
    "cn_def": "證明...是正當的",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a good reason for something",
        "cn_def": "證明...是正當的"
      }
    ]
  },
  "justified": {
    "pos": "adj.",
    "en_def": "fair and having a good reason",
    "cn_def": "有正當理由的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fair and having a good reason",
        "cn_def": "有正當理由的"
      }
    ]
  },
  "justification": {
    "pos": "n.",
    "en_def": "a good reason for something",
    "cn_def": "理由",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a good reason for something",
        "cn_def": "理由"
      }
    ]
  },
  "lay-laid-laid": {
    "pos": "v.",
    "en_def": "to put something down",
    "cn_def": "放下",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put something down",
        "cn_def": "放下"
      }
    ]
  },
  "layer": {
    "pos": "n.",
    "en_def": "a thin covering over or under something",
    "cn_def": "層",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thin covering over or under something",
        "cn_def": "層"
      }
    ]
  },
  "link to/with": {
    "pos": "v.",
    "en_def": "to connect things",
    "cn_def": "連接",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to connect things",
        "cn_def": "連接"
      }
    ]
  },
  "link": {
    "pos": "v.",
    "en_def": "to connect things",
    "cn_def": "連接",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to connect things",
        "cn_def": "連接"
      },
      {
        "pos": "n.",
        "en_def": "a connection; a web address",
        "cn_def": "連結"
      }
    ]
  },
  "location": {
    "pos": "n.",
    "en_def": "a place or position",
    "cn_def": "位置",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place or position",
        "cn_def": "位置"
      }
    ]
  },
  "be located in": {
    "pos": "phr.",
    "en_def": "to be in a certain place",
    "cn_def": "位於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be in a certain place",
        "cn_def": "位於"
      }
    ]
  },
  "located in": {
    "pos": "phr.",
    "en_def": "to be in a certain place",
    "cn_def": "位於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be in a certain place",
        "cn_def": "位於"
      }
    ]
  },
  "maximum": {
    "pos": "adj./n.",
    "en_def": "the largest amount possible",
    "cn_def": "最大值",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "the largest amount possible",
        "cn_def": "最大值"
      }
    ]
  },
  "minimum": {
    "pos": "adj./n.",
    "en_def": "the smallest amount possible",
    "cn_def": "最小值",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "the smallest amount possible",
        "cn_def": "最小值"
      }
    ]
  },
  "major": {
    "pos": "adj.",
    "en_def": "very important or big",
    "cn_def": "主要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very important or big",
        "cn_def": "主要的"
      }
    ]
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small; not very important",
    "cn_def": "次要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "small; not very important",
        "cn_def": "次要的"
      }
    ]
  },
  "minor in": {
    "pos": "v.",
    "en_def": "to study a second subject at university",
    "cn_def": "輔修",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to study a second subject at university",
        "cn_def": "輔修"
      }
    ]
  },
  "the minorities": {
    "pos": "n.",
    "en_def": "groups that are smaller in number in a society",
    "cn_def": "少數民族",
    "combined": [
      {
        "pos": "n.",
        "en_def": "groups that are smaller in number in a society",
        "cn_def": "少數民族"
      }
    ]
  },
  "the minority group": {
    "pos": "phr.",
    "en_def": "a group that is smaller in number",
    "cn_def": "少數族群",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a group that is smaller in number",
        "cn_def": "少數族群"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
