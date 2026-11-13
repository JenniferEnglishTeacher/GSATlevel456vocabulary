// Part 1 Quiz Data: adjacent to – persuade
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 10 Part 1 - adjacent to – persuade",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adjacent to",
    "pos": "prep.",
    "cn_def": "鄰近的",
    "en_def": "next to something",
    "sentence": "The park {{BLANK}} our house is always bustling with activity.",
    "cn": "我們家附近的公園總是熙來攘往。"
  },
  {
    "word": "albeit",
    "pos": "conj.",
    "cn_def": "雖然",
    "en_def": "although",
    "sentence": "He agreed to come, {{BLANK}} reluctantly.",
    "cn": "他同意來了，雖然有些不情願。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝",
    "en_def": "to put the parts of something together",
    "sentence": "They {{BLANK}} the furniture according to the instructions provided.",
    "cn": "他們根據提供的說明組裝家具。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "集會",
    "en_def": "a meeting of many people",
    "sentence": "The school {{BLANK}} was scheduled for Friday morning.",
    "cn": "學校集會定於星期五早上。"
  },
  {
    "word": "assembly line",
    "pos": "n.phr.",
    "cn_def": "生產線",
    "en_def": "a line of workers and machines making products",
    "sentence": "The {{BLANK}} was automated to increase efficiency.",
    "cn": "生產線是自動化的，以提高效率。"
  },
  {
    "word": "collapse",
    "pos": "v.",
    "cn_def": "倒塌",
    "en_def": "to fall down suddenly",
    "sentence": "The building might {{BLANK}} if the fire continues to spread.",
    "cn": "如果火勢繼續蔓延，建築物可能會倒塌。"
  },
  {
    "word": "collapse",
    "pos": "n.",
    "cn_def": "倒塌",
    "en_def": "a sudden fall or failure",
    "sentence": "The {{BLANK}} of the roof caused panic among the residents.",
    "cn": "屋頂的倒塌使居民恐慌。"
  },
  {
    "word": "league",
    "pos": "n.",
    "cn_def": "聯盟",
    "en_def": "a group of sports teams",
    "sentence": "The teams were competing for the championship of the {{BLANK}}.",
    "cn": "這些隊伍正在爭奪聯盟冠軍。"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person you work with",
    "sentence": "My {{BLANK}} helped me when I was overwhelmed with work.",
    "cn": "我淹沒在工作中時，我的同事幫助了我。"
  },
  {
    "word": "compile",
    "pos": "v.",
    "cn_def": "編輯",
    "en_def": "to collect information into a book or list",
    "sentence": "They plan to {{BLANK}} a comprehensive report by the end of the month.",
    "cn": "他們計劃在月底前編輯一份全面的報告。"
  },
  {
    "word": "compiled",
    "pos": "adj.",
    "cn_def": "已編輯的",
    "en_def": "collected together",
    "sentence": "The {{BLANK}} data was presented in a clear and organized manner.",
    "cn": "已編輯的數據以清晰有條理的方式呈現。"
  },
  {
    "word": "compilation",
    "pos": "n.",
    "cn_def": "編輯",
    "en_def": "a collection of things put together",
    "sentence": "The {{BLANK}} of essays was published to critical acclaim.",
    "cn": "這本文章的編輯得到了好評。"
  },
  {
    "word": "conceive",
    "pos": "v.",
    "cn_def": "構想",
    "en_def": "to think of a new idea",
    "sentence": "She could not {{BLANK}} of a better way to solve the problem.",
    "cn": "她想不出更好的方法來解決這個問題。"
  },
  {
    "word": "conceived",
    "pos": "adj.",
    "cn_def": "構想的",
    "en_def": "thought of; planned",
    "sentence": "It was a newly {{BLANK}} idea that had a lot of potentials.",
    "cn": "這是一個具有很多潛力的新構想。"
  },
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "使確信",
    "en_def": "to make someone believe something",
    "sentence": "It took a while to {{BLANK}} him that the plan would work.",
    "cn": "花了一些時間使他相信計劃會奏效。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "making you believe something is true",
    "sentence": "Her argument was {{BLANK}}, swaying the opinions of many.",
    "cn": "她的論點令人信服，影響了很多人的看法。"
  },
  {
    "word": "unconvincing",
    "pos": "adj.",
    "cn_def": "不具有說服力的",
    "en_def": "not making you believe something",
    "sentence": "The evidence provided was {{BLANK}}, causing doubt among the jury.",
    "cn": "提供的證據不具說服力，使陪審團產生懷疑。"
  },
  {
    "word": "convinced",
    "pos": "adj.",
    "cn_def": "確信的",
    "en_def": "completely sure",
    "sentence": "She was {{BLANK}} that she had made the right decision.",
    "cn": "她確信她做出了正確的決定。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服",
    "en_def": "to make someone agree to do something",
    "sentence": "They managed to {{BLANK}} her to join the team.",
    "cn": "他們成功地說服她加入了團隊"
  }
];

const MCQS = [
  {
    "q": "The park ______ our house is always bustling with activity.",
    "options": [
      "in the similar manner",
      "be inclined to",
      "adjacent to",
      "insist on"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "He agreed to come, ______ reluctantly.",
    "options": [
      "albeit",
      "compile",
      "undertake",
      "underprivileged"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "They ______ the furniture according to the instructions provided.",
    "options": [
      "incline",
      "assemble",
      "invoke",
      "undertake"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The school ______ was scheduled for Friday morning.",
    "options": [
      "integrity",
      "persistence",
      "undertaking",
      "assembly"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The ______ was automated to increase efficiency.",
    "options": [
      "impose a levy on",
      "be at odds",
      "the assembly line",
      "panel discussion"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The building might ______ if the fire continues to spread.",
    "options": [
      "undertake",
      "encountered",
      "provoke",
      "collapse"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The ______ of the roof caused panic among the residents.",
    "options": [
      "colleague",
      "collapse",
      "reluctance",
      "odds"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The teams were competing for the championship of the ______.",
    "options": [
      "league",
      "discouragement",
      "odds",
      "integrity"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "My ______ helped me when I was overwhelmed with work.",
    "options": [
      "assembly",
      "colleague",
      "undertaking",
      "integration"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "They plan to ______ a comprehensive report by the end of the month.",
    "options": [
      "incline",
      "encountered",
      "recline",
      "compile"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The ______ data was presented in a clear and organized manner.",
    "options": [
      "compiled",
      "unconvincing",
      "persistent",
      "underlying"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The ______ of essays was published to critical acclaim.",
    "options": [
      "integrity",
      "assembly",
      "compilation",
      "odds"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "She could not ______ of a better way to solve the problem.",
    "options": [
      "compile",
      "assemble",
      "depress",
      "conceive"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "It was a newly ______ idea that had a lot of potentials.",
    "options": [
      "conceived",
      "depressing",
      "provocative",
      "convinced"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "It took a while to ______ him that the plan would work.",
    "options": [
      "posed",
      "convince",
      "provoke",
      "integrate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Her argument was ______, swaying the opinions of many.",
    "options": [
      "underlying",
      "discouraged",
      "convincing",
      "forthcoming"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The evidence provided was ______, causing doubt among the jury.",
    "options": [
      "depressed",
      "unconvincing",
      "underprivileged",
      "enormous"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "She was ______ that she had made the right decision.",
    "options": [
      "tremendous",
      "encouraging",
      "convinced",
      "underprivileged"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "They managed to ______ her to join the team.",
    "options": [
      "undertake",
      "assemble",
      "posed",
      "persuade"
    ],
    "answer": 3,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "adjacent to": {
    "pos": "prep.",
    "en_def": "next to something",
    "cn_def": "鄰近的",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "next to something",
        "cn_def": "鄰近的"
      }
    ]
  },
  "albeit": {
    "pos": "conj.",
    "en_def": "although",
    "cn_def": "雖然",
    "combined": [
      {
        "pos": "conj.",
        "en_def": "although",
        "cn_def": "雖然"
      }
    ]
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put the parts of something together",
        "cn_def": "組裝"
      }
    ]
  },
  "assembly": {
    "pos": "n.",
    "en_def": "a meeting of many people",
    "cn_def": "集會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meeting of many people",
        "cn_def": "集會"
      }
    ]
  },
  "assembly line": {
    "pos": "n.phr.",
    "en_def": "a line of workers and machines making products",
    "cn_def": "生產線",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a line of workers and machines making products",
        "cn_def": "生產線"
      }
    ]
  },
  "the assembly line": {
    "pos": "n.phr.",
    "en_def": "a line of workers and machines making products",
    "cn_def": "生產線",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a line of workers and machines making products",
        "cn_def": "生產線"
      }
    ]
  },
  "collapse": {
    "pos": "v.",
    "en_def": "to fall down suddenly",
    "cn_def": "倒塌",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fall down suddenly",
        "cn_def": "倒塌"
      },
      {
        "pos": "n.",
        "en_def": "a sudden fall or failure",
        "cn_def": "倒塌"
      }
    ]
  },
  "league": {
    "pos": "n.",
    "en_def": "a group of sports teams",
    "cn_def": "聯盟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of sports teams",
        "cn_def": "聯盟"
      }
    ]
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person you work with",
        "cn_def": "同事"
      }
    ]
  },
  "compile": {
    "pos": "v.",
    "en_def": "to collect information into a book or list",
    "cn_def": "編輯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collect information into a book or list",
        "cn_def": "編輯"
      }
    ]
  },
  "compiled": {
    "pos": "adj.",
    "en_def": "collected together",
    "cn_def": "已編輯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "collected together",
        "cn_def": "已編輯的"
      }
    ]
  },
  "compilation": {
    "pos": "n.",
    "en_def": "a collection of things put together",
    "cn_def": "編輯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a collection of things put together",
        "cn_def": "編輯"
      }
    ]
  },
  "conceive": {
    "pos": "v.",
    "en_def": "to think of a new idea",
    "cn_def": "構想",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think of a new idea",
        "cn_def": "構想"
      }
    ]
  },
  "conceived": {
    "pos": "adj.",
    "en_def": "thought of; planned",
    "cn_def": "構想的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "thought of; planned",
        "cn_def": "構想的"
      }
    ]
  },
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe something",
    "cn_def": "使確信",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone believe something",
        "cn_def": "使確信"
      }
    ]
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making you believe something is true",
    "cn_def": "有說服力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you believe something is true",
        "cn_def": "有說服力的"
      }
    ]
  },
  "unconvincing": {
    "pos": "adj.",
    "en_def": "not making you believe something",
    "cn_def": "不具有說服力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not making you believe something",
        "cn_def": "不具有說服力的"
      }
    ]
  },
  "convinced": {
    "pos": "adj.",
    "en_def": "completely sure",
    "cn_def": "確信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely sure",
        "cn_def": "確信的"
      }
    ]
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something",
    "cn_def": "說服",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone agree to do something",
        "cn_def": "說服"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
