// Part 7 Quiz Data: registration – specified
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 7 - registration – specified",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "registration",
    "pos": "n.",
    "cn_def": "註冊",
    "en_def": "putting your name on an official list",
    "sentence": "The deadline for {{BLANK}} is next Friday.",
    "cn": "註冊的截止日期是下周五。"
  },
  {
    "word": "rely on",
    "pos": "v.",
    "cn_def": "依賴",
    "en_def": "to depend on someone or something",
    "sentence": "We can't always {{BLANK}} the weather forecast.",
    "cn": "我們不能總是依賴天氣預報。"
  },
  {
    "word": "reliance on",
    "pos": "n.",
    "cn_def": "依賴",
    "en_def": "the act of depending on something",
    "sentence": "The country's {{BLANK}} imported oil is a concern.",
    "cn": "該國對進口石油的依賴引起了擔憂。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted",
    "sentence": "We need a more {{BLANK}} method to collect data.",
    "cn": "我們需要一種更可靠的方法來收集數據。"
  },
  {
    "word": "reliant",
    "pos": "adj.",
    "cn_def": "依賴的",
    "en_def": "needing someone or something",
    "sentence": "The region is heavily {{BLANK}} tourism for income.",
    "cn": "該地區嚴重依賴旅遊業的收入。"
  },
  {
    "word": "remove from",
    "pos": "v.",
    "cn_def": "從...中移除",
    "en_def": "to take something away from a place",
    "sentence": "Please {{BLANK}} the sticker from the glass.",
    "cn": "請從玻璃上移除貼紙。"
  },
  {
    "word": "removed",
    "pos": "adj.",
    "cn_def": "被移除的",
    "en_def": "taken away",
    "sentence": "The outdated information was {{BLANK}} the website.",
    "cn": "過時的信息已從網站中刪除。"
  },
  {
    "word": "removal",
    "pos": "n.",
    "cn_def": "移除",
    "en_def": "the act of taking something away",
    "sentence": "The kidney plays a vital role in the {{BLANK}} of waste products from the blood.",
    "cn": "腎臟在清除血液中的廢物方面起著至關重要的作用。"
  },
  {
    "word": "scheme",
    "pos": "n.",
    "cn_def": "計劃",
    "en_def": "an official plan",
    "sentence": "She devised a clever {{BLANK}} to increase sales.",
    "cn": "她設計了一個巧妙的計劃來增加銷售。"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "cn_def": "連續",
    "en_def": "a set of things in a certain order",
    "sentence": "The events occurred in a strange {{BLANK}}.",
    "cn": "這些事件以奇怪的順序發生。"
  },
  {
    "word": "in sequence",
    "pos": "phr.",
    "cn_def": "按順序",
    "en_def": "in a certain order",
    "sentence": "Please arrange these documents {{BLANK}} according to date.",
    "cn": "請按日期將這些文件按順序排列。"
  },
  {
    "word": "sequent",
    "pos": "adj.",
    "cn_def": "連續的",
    "en_def": "following in order",
    "sentence": "The movie's events were not in {{BLANK}} order, making it confusing.",
    "cn": "電影的事件不是按連續順序進行的，使其令人困惑。"
  },
  {
    "word": "subsequently",
    "pos": "adv.",
    "cn_def": "隨後",
    "en_def": "later; after that",
    "sentence": "He missed the train and {{BLANK}} arrived late to the meeting.",
    "cn": "他錯過了火車，隨後開會遲到了。"
  },
  {
    "word": "sex",
    "pos": "n.",
    "cn_def": "性別",
    "en_def": "being male or female",
    "sentence": "The survey collected data on age, {{BLANK}}, and occupation of participants.",
    "cn": "調查收集了參與者的年齡、性別和職業數據。"
  },
  {
    "word": "sexual",
    "pos": "adj.",
    "cn_def": "性的",
    "en_def": "about sex",
    "sentence": "The course will also discuss {{BLANK}} reproduction in plants.",
    "cn": "課程還將討論植物的性生殖。"
  },
  {
    "word": "sexuality",
    "pos": "n.",
    "cn_def": "性取向",
    "en_def": "a person's sexual feelings and interests",
    "sentence": "It's important to promote understanding and acceptance of diverse {{BLANK}}.",
    "cn": "促進對多樣性取向的理解和接受非常重要。"
  },
  {
    "word": "shift",
    "pos": "n.",
    "cn_def": "輪班",
    "en_def": "a period of time when a group works",
    "sentence": "She has the night {{BLANK}} at the hospital.",
    "cn": "她在醫院有夜班。"
  },
  {
    "word": "shift",
    "pos": "v.",
    "cn_def": "轉移",
    "en_def": "to move or change from one position to another",
    "sentence": "We need to {{BLANK}} our focus towards more sustainable practices.",
    "cn": "我們需要將我們的焦點轉向更具可持續性的做法。"
  },
  {
    "word": "specify",
    "pos": "v.",
    "cn_def": "指定",
    "en_def": "to say exactly what you want",
    "sentence": "Please {{BLANK}} which items you would like to order.",
    "cn": "請指定您想要訂購的物品。"
  },
  {
    "word": "specified",
    "pos": "adj.",
    "cn_def": "指定的",
    "en_def": "stated clearly and exactly",
    "sentence": "All {{BLANK}} candidates should attend the meeting.",
    "cn": "所有指定的候選人應出席會議。"
  }
];

const MCQS = [
  {
    "q": "The deadline for ______ is next Friday.",
    "options": [
      "partnership",
      "component",
      "registration",
      "justification"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "We can't always ______ the weather forecast.",
    "options": [
      "rely on",
      "remove from",
      "make a comment on",
      "emphasize on"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The country's ______ imported oil is a concern.",
    "options": [
      "interaction with",
      "under the circumstance",
      "emphasize on",
      "reliance on"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "We need a more ______ method to collect data.",
    "options": [
      "physical",
      "reliable",
      "dominating",
      "negative"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The region is heavily ______ tourism for income.",
    "options": [
      "reliant",
      "specified",
      "published",
      "expired"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please ______ the sticker from the glass.",
    "options": [
      "reaction to",
      "remove from",
      "ensure",
      "the minority group"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The outdated information was ______ the website.",
    "options": [
      "reliant",
      "negative",
      "justified",
      "removed"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The kidney plays a vital role in the ______ of waste products from the blood.",
    "options": [
      "physics",
      "alternative",
      "removal",
      "philosophy"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "She devised a clever ______ to increase sales.",
    "options": [
      "criterion",
      "immigration",
      "task",
      "scheme"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The events occurred in a strange ______.",
    "options": [
      "criteria",
      "removal",
      "sequence",
      "implication"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please arrange these documents ______ according to date.",
    "options": [
      "ensure",
      "in sequence",
      "contribute to",
      "convention"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The movie's events were not in ______ order, making it confusing.",
    "options": [
      "sequent",
      "published",
      "maximum",
      "sexual"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "He missed the train and ______ arrived late to the meeting.",
    "options": [
      "constantly",
      "sufficiently",
      "subsequently",
      "considerably"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The survey collected data on age, ______, and occupation of participants.",
    "options": [
      "volume",
      "sex",
      "layer",
      "correspondent"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The course will also discuss ______ reproduction in plants.",
    "options": [
      "sexual",
      "technical",
      "dominating",
      "physical"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "It's important to promote understanding and acceptance of diverse ______.",
    "options": [
      "exclusion",
      "deduction",
      "justification",
      "sexuality"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "She has the night ______ at the hospital.",
    "options": [
      "core",
      "alternative",
      "shift",
      "location"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "We need to ______ our focus towards more sustainable practices.",
    "options": [
      "lay-laid-laid",
      "shift",
      "include",
      "immigrate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Please ______ which items you would like to order.",
    "options": [
      "specify",
      "task",
      "coordinate",
      "constrain"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "All ______ candidates should attend the meeting.",
    "options": [
      "consent",
      "published",
      "constant",
      "specified"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "registration": {
    "pos": "n.",
    "en_def": "putting your name on an official list",
    "cn_def": "註冊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "putting your name on an official list",
        "cn_def": "註冊"
      }
    ]
  },
  "rely on": {
    "pos": "v.",
    "en_def": "to depend on someone or something",
    "cn_def": "依賴",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to depend on someone or something",
        "cn_def": "依賴"
      }
    ]
  },
  "reliance on": {
    "pos": "n.",
    "en_def": "the act of depending on something",
    "cn_def": "依賴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of depending on something",
        "cn_def": "依賴"
      }
    ]
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be trusted",
        "cn_def": "可靠的"
      }
    ]
  },
  "reliant": {
    "pos": "adj.",
    "en_def": "needing someone or something",
    "cn_def": "依賴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "needing someone or something",
        "cn_def": "依賴的"
      }
    ]
  },
  "remove from": {
    "pos": "v.",
    "en_def": "to take something away from a place",
    "cn_def": "從...中移除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take something away from a place",
        "cn_def": "從...中移除"
      }
    ]
  },
  "removed": {
    "pos": "adj.",
    "en_def": "taken away",
    "cn_def": "被移除的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "taken away",
        "cn_def": "被移除的"
      }
    ]
  },
  "removal": {
    "pos": "n.",
    "en_def": "the act of taking something away",
    "cn_def": "移除",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of taking something away",
        "cn_def": "移除"
      }
    ]
  },
  "scheme": {
    "pos": "n.",
    "en_def": "an official plan",
    "cn_def": "計劃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official plan",
        "cn_def": "計劃"
      }
    ]
  },
  "sequence": {
    "pos": "n.",
    "en_def": "a set of things in a certain order",
    "cn_def": "連續",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of things in a certain order",
        "cn_def": "連續"
      }
    ]
  },
  "in sequence": {
    "pos": "phr.",
    "en_def": "in a certain order",
    "cn_def": "按順序",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a certain order",
        "cn_def": "按順序"
      }
    ]
  },
  "sequent": {
    "pos": "adj.",
    "en_def": "following in order",
    "cn_def": "連續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "following in order",
        "cn_def": "連續的"
      }
    ]
  },
  "subsequently": {
    "pos": "adv.",
    "en_def": "later; after that",
    "cn_def": "隨後",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "later; after that",
        "cn_def": "隨後"
      }
    ]
  },
  "sex": {
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
  "sexual": {
    "pos": "adj.",
    "en_def": "about sex",
    "cn_def": "性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about sex",
        "cn_def": "性的"
      }
    ]
  },
  "sexuality": {
    "pos": "n.",
    "en_def": "a person's sexual feelings and interests",
    "cn_def": "性取向",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's sexual feelings and interests",
        "cn_def": "性取向"
      }
    ]
  },
  "shift": {
    "pos": "n.",
    "en_def": "a period of time when a group works",
    "cn_def": "輪班",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of time when a group works",
        "cn_def": "輪班"
      },
      {
        "pos": "v.",
        "en_def": "to move or change from one position to another",
        "cn_def": "轉移"
      }
    ]
  },
  "specify": {
    "pos": "v.",
    "en_def": "to say exactly what you want",
    "cn_def": "指定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say exactly what you want",
        "cn_def": "指定"
      }
    ]
  },
  "specified": {
    "pos": "adj.",
    "en_def": "stated clearly and exactly",
    "cn_def": "指定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "stated clearly and exactly",
        "cn_def": "指定的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
