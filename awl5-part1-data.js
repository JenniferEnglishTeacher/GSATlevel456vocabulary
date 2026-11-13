// Part 1 Quiz Data: academic – be able to V
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 5 Part 1 - academic – be able to V",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學術的",
    "en_def": "about school or study",
    "sentence": "Her {{BLANK}} achievements are remarkable.",
    "cn": "她的學術成就非常卓越。"
  },
  {
    "word": "academics",
    "pos": "n.",
    "cn_def": "學術",
    "en_def": "school work and studies",
    "sentence": "She's been deeply involved in {{BLANK}} throughout her college life.",
    "cn": "她在大學生活中一直深深參與學術活動。"
  },
  {
    "word": "academy",
    "pos": "n.",
    "cn_def": "學院",
    "en_def": "a school for special training",
    "sentence": "The {{BLANK}} has a renowned history of excellence in the arts.",
    "cn": "這所學院在藝術方面有著著名的卓越歷史。"
  },
  {
    "word": "academically",
    "pos": "adv.",
    "cn_def": "在學術上",
    "en_def": "in a way related to study",
    "sentence": "He performed {{BLANK}} better this semester.",
    "cn": "他這學期在學術上的表現更好。"
  },
  {
    "word": "adjust to",
    "pos": "phr.",
    "cn_def": "調整至",
    "en_def": "to get used to something new",
    "sentence": "It took him some time to {{BLANK}} the new work environment.",
    "cn": "他花了一些時間調整到新的工作環境。"
  },
  {
    "word": "make adjustment",
    "pos": "phr.",
    "cn_def": "做調整",
    "en_def": "to make small changes",
    "sentence": "We may need to {{BLANK}} to the plan based on the feedback.",
    "cn": "根據反饋，我們可能需要對計劃進行調整。"
  },
  {
    "word": "alter",
    "pos": "v.",
    "cn_def": "改變",
    "en_def": "to change something",
    "sentence": "They decided to {{BLANK}} the design after the prototype was tested.",
    "cn": "在原型測試後，他們決定改變設計。"
  },
  {
    "word": "alternation",
    "pos": "n.",
    "cn_def": "交替",
    "en_def": "changing back and forth between two things",
    "sentence": "The {{BLANK}} between hot and cold water in the shower was abrupt.",
    "cn": "淋浴中的冷熱水交替很突然。"
  },
  {
    "word": "amend",
    "pos": "v.",
    "cn_def": "修改",
    "en_def": "to make changes to a law or document",
    "sentence": "They decided to {{BLANK}} the document before the final submission.",
    "cn": "他們決定在最終提交之前修改文件。"
  },
  {
    "word": "amendment",
    "pos": "n.",
    "cn_def": "修正案",
    "en_def": "a change made to a law or document",
    "sentence": "The {{BLANK}} was passed by a majority vote in the parliament.",
    "cn": "修正案在議會中經多數票通過。"
  },
  {
    "word": "be aware of",
    "pos": "phr.",
    "cn_def": "意識到",
    "en_def": "to know that something exists",
    "sentence": "Citizens should {{BLANK}} their rights and responsibilities.",
    "cn": "公民應意識到他們的權利和責任。"
  },
  {
    "word": "beware",
    "pos": "v.",
    "cn_def": "注意",
    "en_def": "to be careful of danger",
    "sentence": "{{BLANK}} of slippery roads when driving in rainy conditions.",
    "cn": "雨天開車時要小心滑路。"
  },
  {
    "word": "unaware",
    "pos": "adj.",
    "cn_def": "沒意識到的",
    "en_def": "not knowing about something",
    "sentence": "He was completely {{BLANK}} of the consequences of his actions.",
    "cn": "他完全沒有意識到他的行為的後果。"
  },
  {
    "word": "raise awareness",
    "pos": "phr.",
    "cn_def": "提高意識",
    "en_def": "to help people know more about an issue",
    "sentence": "The charity event was organized to {{BLANK}} about children's health issues.",
    "cn": "這次慈善活動是為了提高人們對兒童健康問題的意識。"
  },
  {
    "word": "capable of",
    "pos": "phr.",
    "cn_def": "有能力的",
    "en_def": "having the ability to do something",
    "sentence": "She's {{BLANK}} achieving great things in her career.",
    "cn": "她在她的職業生涯中有能力取得偉大的成就。"
  },
  {
    "word": "uncapable",
    "pos": "adj.",
    "cn_def": "無能力的",
    "en_def": "not able to do something",
    "sentence": "Due to his health issues, he felt {{BLANK}} of taking on a full-time job.",
    "cn": "由於他的健康問題，他覺得無法承擔全職工作。"
  },
  {
    "word": "capacity",
    "pos": "n.",
    "cn_def": "容量",
    "en_def": "the amount something can hold",
    "sentence": "The stadium has a {{BLANK}} of 20,000 spectators.",
    "cn": "這個體育場的容量為20,000名觀眾。"
  },
  {
    "word": "enable",
    "pos": "phr.",
    "cn_def": "使能夠",
    "en_def": "to make someone able to do something",
    "sentence": "Advanced technology will {{BLANK}} us to explore deeper parts of the ocean.",
    "cn": "先進的技術將使我們能夠探索海洋的更深部分。"
  },
  {
    "word": "be able to",
    "pos": "phr.",
    "cn_def": "能夠",
    "en_def": "can do something",
    "sentence": "With enough training, you will {{BLANK}} complete the marathon.",
    "cn": "經過足夠的訓練，您將能夠完成馬拉松。"
  }
];

const MCQS = [
  {
    "q": "Her ______ achievements are remarkable.",
    "options": [
      "stylish",
      "unaware",
      "objective",
      "academic"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "She's been deeply involved in ______ throughout her college life.",
    "options": [
      "modification",
      "academics",
      "monitoring",
      "network"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The ______ has a renowned history of excellence in the arts.",
    "options": [
      "academy",
      "precision",
      "counsel",
      "liberty"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "He performed ______ better this semester.",
    "options": [
      "objective",
      "clause",
      "academically",
      "precisely"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It took him some time to ______ the new work environment.",
    "options": [
      "submit to",
      "objective",
      "be notified",
      "adjust to"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "We may need to ______ to the plan based on the feedback.",
    "options": [
      "generate electricity",
      "enable to V",
      "make adjustment",
      "be submitted"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "They decided to ______ the design after the prototype was tested.",
    "options": [
      "alter",
      "beware",
      "enforce",
      "generate"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The ______ between hot and cold water in the shower was abrupt.",
    "options": [
      "amendment",
      "alternation",
      "orientation",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "They decided to ______ the document before the final submission.",
    "options": [
      "challenge",
      "generated",
      "symbolize",
      "amend"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The ______ was passed by a majority vote in the parliament.",
    "options": [
      "amendment",
      "notion",
      "target",
      "counsel"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Citizens should ______ their rights and responsibilities.",
    "options": [
      "submit to",
      "be aware of",
      "generate electricity",
      "decline in"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "______ of slippery roads when driving in rainy conditions.",
    "options": [
      "draft",
      "symbolize",
      "beware",
      "decline"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "He was completely ______ of the consequences of his actions.",
    "options": [
      "unaware",
      "liberal",
      "evolved",
      "external"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The charity event was organized to ______ about children's health issues.",
    "options": [
      "genetically modified",
      "make adjustment",
      "raise awareness",
      "be equivalent to"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "She's ______ achieving great things in her career.",
    "options": [
      "raise awareness",
      "expose to",
      "enable to V",
      "be capable of"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Due to his health issues, he felt ______ of taking on a full-time job.",
    "options": [
      "extensive",
      "uncapable",
      "medical",
      "academic"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The stadium has a ______ of 20,000 spectators.",
    "options": [
      "welfare",
      "draft",
      "capacity",
      "psychology"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Advanced technology will ______ us to explore deeper parts of the ocean.",
    "options": [
      "be notified",
      "enable to V",
      "be exposed to",
      "be able to V"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "With enough training, you will ______ complete the marathon.",
    "options": [
      "make adjustment",
      "in pursuit of",
      "decline in",
      "be able to V"
    ],
    "answer": 3,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "academic": {
    "pos": "adj.",
    "en_def": "about school or study",
    "cn_def": "學術的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about school or study",
        "cn_def": "學術的"
      }
    ]
  },
  "academics": {
    "pos": "n.",
    "en_def": "school work and studies",
    "cn_def": "學術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "school work and studies",
        "cn_def": "學術"
      }
    ]
  },
  "academy": {
    "pos": "n.",
    "en_def": "a school for special training",
    "cn_def": "學院",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a school for special training",
        "cn_def": "學院"
      }
    ]
  },
  "academically": {
    "pos": "adv.",
    "en_def": "in a way related to study",
    "cn_def": "在學術上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way related to study",
        "cn_def": "在學術上"
      }
    ]
  },
  "adjust to": {
    "pos": "phr.",
    "en_def": "to get used to something new",
    "cn_def": "調整至",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to get used to something new",
        "cn_def": "調整至"
      }
    ]
  },
  "make adjustment": {
    "pos": "phr.",
    "en_def": "to make small changes",
    "cn_def": "做調整",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make small changes",
        "cn_def": "做調整"
      }
    ]
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something",
    "cn_def": "改變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something",
        "cn_def": "改變"
      }
    ]
  },
  "alternation": {
    "pos": "n.",
    "en_def": "changing back and forth between two things",
    "cn_def": "交替",
    "combined": [
      {
        "pos": "n.",
        "en_def": "changing back and forth between two things",
        "cn_def": "交替"
      }
    ]
  },
  "amend": {
    "pos": "v.",
    "en_def": "to make changes to a law or document",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make changes to a law or document",
        "cn_def": "修改"
      }
    ]
  },
  "amendment": {
    "pos": "n.",
    "en_def": "a change made to a law or document",
    "cn_def": "修正案",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change made to a law or document",
        "cn_def": "修正案"
      }
    ]
  },
  "be aware of": {
    "pos": "phr.",
    "en_def": "to know that something exists",
    "cn_def": "意識到",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to know that something exists",
        "cn_def": "意識到"
      }
    ]
  },
  "beware": {
    "pos": "v.",
    "en_def": "to be careful of danger",
    "cn_def": "注意",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be careful of danger",
        "cn_def": "注意"
      }
    ]
  },
  "unaware": {
    "pos": "adj.",
    "en_def": "not knowing about something",
    "cn_def": "沒意識到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not knowing about something",
        "cn_def": "沒意識到的"
      }
    ]
  },
  "raise awareness": {
    "pos": "phr.",
    "en_def": "to help people know more about an issue",
    "cn_def": "提高意識",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to help people know more about an issue",
        "cn_def": "提高意識"
      }
    ]
  },
  "capable of": {
    "pos": "phr.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "having the ability to do something",
        "cn_def": "有能力的"
      }
    ]
  },
  "be capable of": {
    "pos": "phr.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "having the ability to do something",
        "cn_def": "有能力的"
      }
    ]
  },
  "uncapable": {
    "pos": "adj.",
    "en_def": "not able to do something",
    "cn_def": "無能力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to do something",
        "cn_def": "無能力的"
      }
    ]
  },
  "capacity": {
    "pos": "n.",
    "en_def": "the amount something can hold",
    "cn_def": "容量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount something can hold",
        "cn_def": "容量"
      }
    ]
  },
  "enable to v": {
    "pos": "phr.",
    "en_def": "to make someone able to do something",
    "cn_def": "使能夠",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make someone able to do something",
        "cn_def": "使能夠"
      }
    ]
  },
  "enable": {
    "pos": "phr.",
    "en_def": "to make someone able to do something",
    "cn_def": "使能夠",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make someone able to do something",
        "cn_def": "使能夠"
      }
    ]
  },
  "be able to": {
    "pos": "phr.",
    "en_def": "can do something",
    "cn_def": "能夠",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "can do something",
        "cn_def": "能夠"
      }
    ]
  },
  "be able to v": {
    "pos": "phr.",
    "en_def": "can do something",
    "cn_def": "能夠",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "can do something",
        "cn_def": "能夠"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
