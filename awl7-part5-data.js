// Part 5 Quiz Data: isolation – release pressure
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 5 - isolation – release pressure",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "isolation",
    "pos": "n.",
    "cn_def": "隔離",
    "en_def": "being alone or apart",
    "sentence": "The {{BLANK}} of the virus was a critical step in developing a vaccine.",
    "cn": "病毒的隔離是開發疫苗的關鍵步驟。"
  },
  {
    "word": "medium",
    "pos": "n.",
    "cn_def": "媒介",
    "en_def": "a way of sending information",
    "sentence": "The artist chose a unique {{BLANK}} for his sculpture, utilizing recycled materials.",
    "cn": "藝術家為他的雕塑選擇了獨特的媒介，利用了回收材料。"
  },
  {
    "word": "media",
    "pos": "n.",
    "cn_def": "媒體",
    "en_def": "TV, radio, newspapers and the internet",
    "sentence": "The {{BLANK}} plays a crucial role in shaping public opinion.",
    "cn": "媒體在塑造公眾意見中起著至關重要的作用。"
  },
  {
    "word": "mode",
    "pos": "n.",
    "cn_def": "模式",
    "en_def": "a way of doing something",
    "sentence": "Switching the application to dark {{BLANK}} helps reduce eye strain.",
    "cn": "將應用程序切換到深色模式有助於減輕眼睛疲勞。"
  },
  {
    "word": "paradigm",
    "pos": "n.",
    "cn_def": "範例",
    "en_def": "a model or example of how to think",
    "sentence": "The scientist challenged the existing {{BLANK}} with her groundbreaking research.",
    "cn": "科學家通過她的開創性研究挑戰了現有的範例。"
  },
  {
    "word": "phenomenon",
    "pos": "n.",
    "cn_def": "現象",
    "en_def": "something that happens and can be seen",
    "sentence": "The migration of monarch butterflies is a fascinating natural {{BLANK}}.",
    "cn": "帝王蝶的遷徙是一個迷人的自然現象。"
  },
  {
    "word": "prior to",
    "pos": "phr.",
    "cn_def": "在...之前",
    "en_def": "before",
    "sentence": "You should complete all required training {{BLANK}} starting the job.",
    "cn": "在開始工作之前，您應完成所有必需的培訓。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先權",
    "en_def": "something more important than other things",
    "sentence": "Health and safety are of the highest {{BLANK}} in this facility.",
    "cn": "健康和安全是這個設施的最高優先事項。"
  },
  {
    "word": "prioritize",
    "pos": "v.",
    "cn_def": "給...擺列優先順序",
    "en_def": "to decide what is most important",
    "sentence": "It's important to {{BLANK}} tasks based on their urgency and importance.",
    "cn": "根據任務的緊急性和重要性給它們擺列優先順序非常重要。"
  },
  {
    "word": "prohibit",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to officially not allow something",
    "sentence": "The law {{BLANK}} smoking in public places to protect the health of non-smokers.",
    "cn": "法律禁止在公共場所吸煙以保護非吸煙者的健康。"
  },
  {
    "word": "prohibited",
    "pos": "adj.",
    "cn_def": "被禁止的",
    "en_def": "not allowed by law or rule",
    "sentence": "The possession of {{BLANK}} substances can lead to severe legal consequences.",
    "cn": "擁有被禁止的物質可能導致嚴重的法律後果。"
  },
  {
    "word": "prohibition",
    "pos": "n.",
    "cn_def": "禁令",
    "en_def": "a law that stops something",
    "sentence": "The {{BLANK}} on alcohol during the 1920s led to the rise of speakeasies.",
    "cn": "20世紀20年代對酒精的禁令導致了私酒店的興起。"
  },
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版",
    "en_def": "to print and sell a book or magazine",
    "sentence": "She managed to {{BLANK}} her first book at the age of twenty.",
    "cn": "她在二十歲時成功出版了她的第一本書。"
  },
  {
    "word": "published",
    "pos": "adj.",
    "cn_def": "出版的",
    "en_def": "printed and made public",
    "sentence": "The {{BLANK}} works of the author have been translated into multiple languages.",
    "cn": "作者的出版物已被翻譯成多種語言。"
  },
  {
    "word": "publisher",
    "pos": "n.",
    "cn_def": "出版商",
    "en_def": "a company that publishes books",
    "sentence": "The {{BLANK}} decided to print a second edition due to high demand.",
    "cn": "由於需求很高，出版商決定印刷第二版。"
  },
  {
    "word": "publication",
    "pos": "n.",
    "cn_def": "出版物",
    "en_def": "a book or magazine that is published",
    "sentence": "The {{BLANK}} received positive reviews from the critics.",
    "cn": "出版物得到了評論家的好評。"
  },
  {
    "word": "quote",
    "pos": "v.",
    "cn_def": "引用",
    "en_def": "to repeat someone's exact words",
    "sentence": "It's crucial to {{BLANK}} reputable sources in your research paper.",
    "cn": "在你的研究論文中引用可靠的來源非常重要。"
  },
  {
    "word": "quote",
    "pos": "n.",
    "cn_def": "引文",
    "en_def": "someone's exact words repeated",
    "sentence": "He started his speech with a {{BLANK}} from Nelson Mandela.",
    "cn": "他以納爾遜·曼德拉的引文開始了他的演講。"
  },
  {
    "word": "quotation",
    "pos": "n.",
    "cn_def": "引文",
    "en_def": "someone's exact words repeated",
    "sentence": "The {{BLANK}} was taken from a speech by Martin Luther King Jr.",
    "cn": "引文摘自馬丁·路德·金（Martin Luther King Jr.）的演講。"
  },
  {
    "word": "quotation",
    "pos": "n.",
    "cn_def": "報價",
    "en_def": "a price given for work",
    "sentence": "Please provide a {{BLANK}} for the services you will be providing.",
    "cn": "請為您將提供的服務提供報價。"
  },
  {
    "word": "release a hostage",
    "pos": "v.",
    "cn_def": "釋放人質",
    "en_def": "to set someone free",
    "sentence": "The kidnappers agreed to {{BLANK}} after the ransom was paid.",
    "cn": "綁架者在贖金支付後同意釋放人質。"
  },
  {
    "word": "release pressure",
    "pos": "phr.",
    "cn_def": "釋放壓力",
    "en_def": "to let out pressure",
    "sentence": "Regular exercise is a good way to {{BLANK}} and manage stress.",
    "cn": "定期運動是釋放壓力並控制壓力的好方法。"
  }
];

const MCQS = [
  {
    "q": "The ______ of the virus was a critical step in developing a vaccine.",
    "options": [
      "globe",
      "disposal",
      "thesis",
      "isolation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The artist chose a unique ______ for his sculpture, utilizing recycled materials.",
    "options": [
      "decade",
      "innovation",
      "medium",
      "intervention"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The ______ plays a crucial role in shaping public opinion.",
    "options": [
      "insertion",
      "media",
      "isolation",
      "globe"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Switching the application to dark ______ helps reduce eye strain.",
    "options": [
      "mode",
      "advocate",
      "infinity",
      "publication"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The scientist challenged the existing ______ with her groundbreaking research.",
    "options": [
      "media",
      "file",
      "reverse",
      "paradigm"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The migration of monarch butterflies is a fascinating natural ______.",
    "options": [
      "priority",
      "phenomenon",
      "release",
      "insertion"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "You should complete all required training ______ starting the job.",
    "options": [
      "prior to",
      "be equipped with",
      "contrary to",
      "be comprised of"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Health and safety are of the highest ______ in this facility.",
    "options": [
      "publication",
      "founder",
      "priority",
      "thesis"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "It's important to ______ tasks based on their urgency and importance.",
    "options": [
      "confirm",
      "publish",
      "insert",
      "prioritize"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The law ______ smoking in public places to protect the health of non-smokers.",
    "options": [
      "transmit",
      "insert",
      "prohibit",
      "adapt"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The possession of ______ substances can lead to severe legal consequences.",
    "options": [
      "successful",
      "prohibited",
      "simulated",
      "transmitted"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The ______ on alcohol during the 1920s led to the rise of speakeasies.",
    "options": [
      "prohibition",
      "insertion",
      "mode",
      "dynamic"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "She managed to ______ her first book at the age of twenty.",
    "options": [
      "infer",
      "reverse",
      "publish",
      "prioritize"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The ______ works of the author have been translated into multiple languages.",
    "options": [
      "published",
      "indefinite",
      "prohibited",
      "guaranteed"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The ______ decided to print a second edition due to high demand.",
    "options": [
      "quote",
      "disposal",
      "topic",
      "publisher"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The ______ received positive reviews from the critics.",
    "options": [
      "media",
      "publication",
      "differentiation",
      "transmission"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "It's crucial to ______ reputable sources in your research paper.",
    "options": [
      "found",
      "comprise",
      "quote",
      "insert"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "He started his speech with a ______ from Nelson Mandela.",
    "options": [
      "intervention",
      "ideology",
      "file",
      "quote"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The ______ was taken from a speech by Martin Luther King Jr.",
    "options": [
      "reverse",
      "quotation",
      "hierarchy",
      "mode"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Please provide a ______ for the services you will be providing.",
    "options": [
      "quotation",
      "priority",
      "infinity",
      "denial"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The kidnappers agreed to ______ after the ransom was paid.",
    "options": [
      "be comprised of",
      "grade",
      "contrary to",
      "release a hostage"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Regular exercise is a good way to ______ and manage stress.",
    "options": [
      "differ from",
      "release pressure",
      "dispose of",
      "contrary to"
    ],
    "answer": 1,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "isolation": {
    "pos": "n.",
    "en_def": "being alone or apart",
    "cn_def": "隔離",
    "combined": [
      {
        "pos": "n.",
        "en_def": "being alone or apart",
        "cn_def": "隔離"
      }
    ]
  },
  "medium": {
    "pos": "n.",
    "en_def": "a way of sending information",
    "cn_def": "媒介",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of sending information",
        "cn_def": "媒介"
      }
    ]
  },
  "media": {
    "pos": "n.",
    "en_def": "TV, radio, newspapers and the internet",
    "cn_def": "媒體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "TV, radio, newspapers and the internet",
        "cn_def": "媒體"
      }
    ]
  },
  "mode": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "模式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of doing something",
        "cn_def": "模式"
      }
    ]
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a model or example of how to think",
    "cn_def": "範例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a model or example of how to think",
        "cn_def": "範例"
      }
    ]
  },
  "phenomenon": {
    "pos": "n.",
    "en_def": "something that happens and can be seen",
    "cn_def": "現象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that happens and can be seen",
        "cn_def": "現象"
      }
    ]
  },
  "prior to": {
    "pos": "phr.",
    "en_def": "before",
    "cn_def": "在...之前",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "before",
        "cn_def": "在...之前"
      }
    ]
  },
  "priority": {
    "pos": "n.",
    "en_def": "something more important than other things",
    "cn_def": "優先權",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something more important than other things",
        "cn_def": "優先權"
      }
    ]
  },
  "prioritize": {
    "pos": "v.",
    "en_def": "to decide what is most important",
    "cn_def": "給...擺列優先順序",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to decide what is most important",
        "cn_def": "給...擺列優先順序"
      }
    ]
  },
  "prohibit": {
    "pos": "v.",
    "en_def": "to officially not allow something",
    "cn_def": "禁止",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially not allow something",
        "cn_def": "禁止"
      }
    ]
  },
  "prohibited": {
    "pos": "adj.",
    "en_def": "not allowed by law or rule",
    "cn_def": "被禁止的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not allowed by law or rule",
        "cn_def": "被禁止的"
      }
    ]
  },
  "prohibition": {
    "pos": "n.",
    "en_def": "a law that stops something",
    "cn_def": "禁令",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a law that stops something",
        "cn_def": "禁令"
      }
    ]
  },
  "publish": {
    "pos": "v.",
    "en_def": "to print and sell a book or magazine",
    "cn_def": "出版",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to print and sell a book or magazine",
        "cn_def": "出版"
      }
    ]
  },
  "published": {
    "pos": "adj.",
    "en_def": "printed and made public",
    "cn_def": "出版的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "printed and made public",
        "cn_def": "出版的"
      }
    ]
  },
  "publisher": {
    "pos": "n.",
    "en_def": "a company that publishes books",
    "cn_def": "出版商",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company that publishes books",
        "cn_def": "出版商"
      }
    ]
  },
  "publication": {
    "pos": "n.",
    "en_def": "a book or magazine that is published",
    "cn_def": "出版物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a book or magazine that is published",
        "cn_def": "出版物"
      }
    ]
  },
  "quote": {
    "pos": "v.",
    "en_def": "to repeat someone's exact words",
    "cn_def": "引用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to repeat someone's exact words",
        "cn_def": "引用"
      },
      {
        "pos": "n.",
        "en_def": "someone's exact words repeated",
        "cn_def": "引文"
      }
    ]
  },
  "quotation": {
    "pos": "n.",
    "en_def": "someone's exact words repeated",
    "cn_def": "引文",
    "combined": [
      {
        "pos": "n.",
        "en_def": "someone's exact words repeated",
        "cn_def": "引文"
      },
      {
        "pos": "n.",
        "en_def": "a price given for work",
        "cn_def": "報價"
      }
    ]
  },
  "release a hostage": {
    "pos": "v.",
    "en_def": "to set someone free",
    "cn_def": "釋放人質",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to set someone free",
        "cn_def": "釋放人質"
      }
    ]
  },
  "release pressure": {
    "pos": "phr.",
    "en_def": "to let out pressure",
    "cn_def": "釋放壓力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to let out pressure",
        "cn_def": "釋放壓力"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
