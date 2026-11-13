// Part 5 Quiz Data: incorporated – immigration
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 5 - incorporated – immigration",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "incorporated",
    "pos": "adj.",
    "cn_def": "已納入的",
    "en_def": "included as a part",
    "sentence": "The newly {{BLANK}} features make the software more user-friendly.",
    "cn": "新納入的功能使軟件更加用戶友好。"
  },
  {
    "word": "incorporation",
    "pos": "n.",
    "cn_def": "納入",
    "en_def": "including something as a part",
    "sentence": "The {{BLANK}} of the subsidiary into the larger corporation will take place next month.",
    "cn": "子公司將在下個月納入大公司。"
  },
  {
    "word": "index",
    "pos": "n.",
    "cn_def": "索引",
    "en_def": "a list at the back of a book",
    "sentence": "The book includes an {{BLANK}} at the back for easy reference to key topics.",
    "cn": "該書在封底包括一個索引，以便輕鬆參考主要主題。"
  },
  {
    "word": "inhibit",
    "pos": "v.",
    "cn_def": "抑制",
    "en_def": "to stop or slow something down",
    "sentence": "Lack of resources can {{BLANK}} the progress of the research project.",
    "cn": "資源不足可能抑制研究項目的進展。"
  },
  {
    "word": "inhibition",
    "pos": "n.",
    "cn_def": "抑制",
    "en_def": "a feeling that stops you acting freely",
    "sentence": "His lack of {{BLANK}} allowed him to speak freely in front of the audience.",
    "cn": "他缺乏抑制，使他能夠在觀眾面前自由地講話。"
  },
  {
    "word": "initial",
    "pos": "adj.",
    "cn_def": "初步的",
    "en_def": "first; at the beginning",
    "sentence": "The {{BLANK}} results of the experiment are promising, but further testing is needed.",
    "cn": "實驗的初步結果很有希望，但是需要進一步的測試。"
  },
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "主動性",
    "en_def": "the ability to act first without being told",
    "sentence": "Taking {{BLANK}} to solve problems is valued in this company.",
    "cn": "這家公司重視主動解決問題。"
  },
  {
    "word": "input",
    "pos": "n.",
    "cn_def": "輸入",
    "en_def": "information or ideas you give",
    "sentence": "Your {{BLANK}} is crucial for the success of the project.",
    "cn": "你的輸入對項目的成功至關重要。"
  },
  {
    "word": "instruct",
    "pos": "v.",
    "cn_def": "指示",
    "en_def": "to tell someone what to do",
    "sentence": "The teacher will {{BLANK}} the students on how to complete the assignment.",
    "cn": "老師將指示學生如何完成作業。"
  },
  {
    "word": "instructor",
    "pos": "n.",
    "cn_def": "指導者",
    "en_def": "a teacher or trainer",
    "sentence": "The {{BLANK}} provided valuable feedback on my performance.",
    "cn": "指導者對我的表現提供了寶貴的反饋。"
  },
  {
    "word": "instruction",
    "pos": "n.",
    "cn_def": "指示",
    "en_def": "information on how to do something",
    "sentence": "Follow the {{BLANK}} carefully to ensure the task is completed accurately.",
    "cn": "仔細遵循指示以確保任務準確完成。"
  },
  {
    "word": "intelligence",
    "pos": "n.",
    "cn_def": "智力",
    "en_def": "the ability to learn and understand",
    "sentence": "His {{BLANK}} and quick thinking were crucial in resolving the crisis.",
    "cn": "他的智力和快速思考在解決危機中至關重要。"
  },
  {
    "word": "intelligent",
    "pos": "adj.",
    "cn_def": "聰明的",
    "en_def": "smart; good at learning",
    "sentence": "She is an {{BLANK}} young woman with a bright future ahead of her.",
    "cn": "她是一位有前途的聰明年輕女性。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "間隔",
    "en_def": "the time between two events",
    "sentence": "The training sessions are scheduled at regular {{BLANK}} throughout the week.",
    "cn": "整個星期的培訓課程都安排在固定的間隔中。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "講座",
    "en_def": "a talk given to teach people",
    "sentence": "The professor will deliver a {{BLANK}} on modern art at the university auditorium.",
    "cn": "教授將在大學禮堂上講授現代藝術的講座。"
  },
  {
    "word": "lecture",
    "pos": "v.",
    "cn_def": "訓斥",
    "en_def": "to talk angrily to someone about their mistakes",
    "sentence": "It's not helpful to {{BLANK}} someone for making a mistake; instead, provide constructive feedback.",
    "cn": "訓斥某人犯錯是沒有幫助的；相反，應提供建設性的反饋。"
  },
  {
    "word": "migrate",
    "pos": "v.",
    "cn_def": "遷移",
    "en_def": "to move from one place to another",
    "sentence": "Many birds {{BLANK}} south for the winter to find warmer climates.",
    "cn": "許多鳥類冬天會向南遷移以尋找更暖和的氣候。"
  },
  {
    "word": "migration",
    "pos": "n.",
    "cn_def": "遷移",
    "en_def": "moving from one place to another",
    "sentence": "The annual {{BLANK}} of wildebeests in Africa is a spectacular natural event.",
    "cn": "非洲角馬的年度遷移是壯觀的自然事件。"
  },
  {
    "word": "immigrant",
    "pos": "n.",
    "cn_def": "移民",
    "en_def": "a person who comes to live in another country",
    "sentence": "The {{BLANK}} community contributes significantly to the cultural diversity of the city.",
    "cn": "移民社區對城市的文化多樣性做出了重大貢獻。"
  },
  {
    "word": "immigration",
    "pos": "n.",
    "cn_def": "移民",
    "en_def": "coming to live in another country",
    "sentence": "The country's {{BLANK}} policy has been a topic of debate among politicians.",
    "cn": "該國的移民政策一直是政治家們討論的話題。"
  }
];

const MCQS = [
  {
    "q": "The newly ______ features make the software more user-friendly.",
    "options": [
      "incorporated",
      "inaccurate",
      "ignorant",
      "unedited"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ______ of the subsidiary into the larger corporation will take place next month.",
    "options": [
      "capability",
      "motivation",
      "incorporation",
      "attachment"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The book includes an ______ at the back for easy reference to key topics.",
    "options": [
      "expertise",
      "index",
      "incident",
      "authority"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Lack of resources can ______ the progress of the research project.",
    "options": [
      "ignore",
      "precede",
      "allocate",
      "inhibit"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "His lack of ______ allowed him to speak freely in front of the audience.",
    "options": [
      "ignorance",
      "inhibition",
      "display",
      "tape"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The ______ results of the experiment are promising, but further testing is needed.",
    "options": [
      "incorporated",
      "explicit",
      "ignored",
      "initial"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Taking ______ to solve problems is valued in this company.",
    "options": [
      "initiative",
      "domain",
      "instructor",
      "transport"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Your ______ is crucial for the success of the project.",
    "options": [
      "aggregate",
      "attachment",
      "input",
      "biodiversity"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The teacher will ______ the students on how to complete the assignment.",
    "options": [
      "exceed",
      "instruct",
      "ignore",
      "enhance"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The ______ provided valuable feedback on my performance.",
    "options": [
      "cooperation",
      "transportation",
      "migration",
      "instructor"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Follow the ______ carefully to ensure the task is completed accurately.",
    "options": [
      "instruction",
      "aggregation",
      "attachment",
      "migration"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "His ______ and quick thinking were crucial in resolving the crisis.",
    "options": [
      "instruction",
      "allocation",
      "intelligence",
      "fee"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "She is an ______ young woman with a bright future ahead of her.",
    "options": [
      "federal",
      "intelligent",
      "abstract",
      "implicit"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The training sessions are scheduled at regular ______ throughout the week.",
    "options": [
      "domain",
      "ignorance",
      "interval",
      "authority"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The professor will deliver a ______ on modern art at the university auditorium.",
    "options": [
      "lecture",
      "instructor",
      "citation",
      "aggregate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "It's not helpful to ______ someone for making a mistake; instead, provide constructive feedback.",
    "options": [
      "transform",
      "edit",
      "acknowledge",
      "lecture"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Many birds ______ south for the winter to find warmer climates.",
    "options": [
      "migrate",
      "reveal",
      "trace",
      "display"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The annual ______ of wildebeests in Africa is a spectacular natural event.",
    "options": [
      "attachment",
      "briefing",
      "recovery",
      "migration"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The ______ community contributes significantly to the cultural diversity of the city.",
    "options": [
      "discrimination",
      "immigrant",
      "diversity",
      "authority"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The country's ______ policy has been a topic of debate among politicians.",
    "options": [
      "instruction",
      "incorporation",
      "immigration",
      "assignment"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "incorporated": {
    "pos": "adj.",
    "en_def": "included as a part",
    "cn_def": "已納入的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "included as a part",
        "cn_def": "已納入的"
      }
    ]
  },
  "incorporation": {
    "pos": "n.",
    "en_def": "including something as a part",
    "cn_def": "納入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "including something as a part",
        "cn_def": "納入"
      }
    ]
  },
  "index": {
    "pos": "n.",
    "en_def": "a list at the back of a book",
    "cn_def": "索引",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a list at the back of a book",
        "cn_def": "索引"
      }
    ]
  },
  "inhibit": {
    "pos": "v.",
    "en_def": "to stop or slow something down",
    "cn_def": "抑制",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop or slow something down",
        "cn_def": "抑制"
      }
    ]
  },
  "inhibition": {
    "pos": "n.",
    "en_def": "a feeling that stops you acting freely",
    "cn_def": "抑制",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling that stops you acting freely",
        "cn_def": "抑制"
      }
    ]
  },
  "initial": {
    "pos": "adj.",
    "en_def": "first; at the beginning",
    "cn_def": "初步的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "first; at the beginning",
        "cn_def": "初步的"
      }
    ]
  },
  "initiative": {
    "pos": "n.",
    "en_def": "the ability to act first without being told",
    "cn_def": "主動性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to act first without being told",
        "cn_def": "主動性"
      }
    ]
  },
  "input": {
    "pos": "n.",
    "en_def": "information or ideas you give",
    "cn_def": "輸入",
    "combined": [
      {
        "pos": "n.",
        "en_def": "information or ideas you give",
        "cn_def": "輸入"
      }
    ]
  },
  "instruct": {
    "pos": "v.",
    "en_def": "to tell someone what to do",
    "cn_def": "指示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tell someone what to do",
        "cn_def": "指示"
      }
    ]
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a teacher or trainer",
    "cn_def": "指導者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a teacher or trainer",
        "cn_def": "指導者"
      }
    ]
  },
  "instruction": {
    "pos": "n.",
    "en_def": "information on how to do something",
    "cn_def": "指示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "information on how to do something",
        "cn_def": "指示"
      }
    ]
  },
  "intelligence": {
    "pos": "n.",
    "en_def": "the ability to learn and understand",
    "cn_def": "智力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to learn and understand",
        "cn_def": "智力"
      }
    ]
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "smart; good at learning",
    "cn_def": "聰明的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "smart; good at learning",
        "cn_def": "聰明的"
      }
    ]
  },
  "interval": {
    "pos": "n.",
    "en_def": "the time between two events",
    "cn_def": "間隔",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the time between two events",
        "cn_def": "間隔"
      }
    ]
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to teach people",
    "cn_def": "講座",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a talk given to teach people",
        "cn_def": "講座"
      },
      {
        "pos": "v.",
        "en_def": "to talk angrily to someone about their mistakes",
        "cn_def": "訓斥"
      }
    ]
  },
  "migrate": {
    "pos": "v.",
    "en_def": "to move from one place to another",
    "cn_def": "遷移",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move from one place to another",
        "cn_def": "遷移"
      }
    ]
  },
  "migration": {
    "pos": "n.",
    "en_def": "moving from one place to another",
    "cn_def": "遷移",
    "combined": [
      {
        "pos": "n.",
        "en_def": "moving from one place to another",
        "cn_def": "遷移"
      }
    ]
  },
  "immigrant": {
    "pos": "n.",
    "en_def": "a person who comes to live in another country",
    "cn_def": "移民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who comes to live in another country",
        "cn_def": "移民"
      }
    ]
  },
  "immigration": {
    "pos": "n.",
    "en_def": "coming to live in another country",
    "cn_def": "移民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "coming to live in another country",
        "cn_def": "移民"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
