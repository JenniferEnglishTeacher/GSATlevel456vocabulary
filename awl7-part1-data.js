// Part 1 Quiz Data: adapt – contrary
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 1 - adapt – contrary",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "改編",
    "en_def": "to change a book or story into a film or play",
    "sentence": "The director decided to {{BLANK}} the novel into a screenplay for the film.",
    "cn": "導演決定將小說改編成電影劇本。"
  },
  {
    "word": "adapt to",
    "pos": "phr.",
    "cn_def": "適應",
    "en_def": "to get used to a new situation",
    "sentence": "It took him a few months to {{BLANK}} the new work environment.",
    "cn": "他花了幾個月時間適應新的工作環境。"
  },
  {
    "word": "adapted",
    "pos": "adj.",
    "cn_def": "改編的",
    "en_def": "changed from a book or story into a film or play",
    "sentence": "The {{BLANK}} version of the play was well-received by the audience.",
    "cn": "觀眾對改編版的戲劇反應熱烈。"
  },
  {
    "word": "adaptation",
    "pos": "n.",
    "cn_def": "改編",
    "en_def": "a film or play made from a book or story",
    "sentence": "The {{BLANK}} of the classic novel into a movie was a huge success.",
    "cn": "將經典小說改編成電影是一個巨大的成功。"
  },
  {
    "word": "adult",
    "pos": "n./adj.",
    "cn_def": "成年人/成年的",
    "en_def": "a grown-up person",
    "sentence": "As an {{BLANK}}, it's important to take responsibility for your actions.",
    "cn": "作為一個成年人，對自己的行為負責是很重要的。"
  },
  {
    "word": "advocate",
    "pos": "v.",
    "cn_def": "提倡",
    "en_def": "to publicly support an idea",
    "sentence": "Many health experts {{BLANK}} for a balanced diet and regular exercise.",
    "cn": "許多健康專家提倡均衡飲食和定期運動。"
  },
  {
    "word": "advocate",
    "pos": "n.",
    "cn_def": "提倡者",
    "en_def": "a person who publicly supports an idea",
    "sentence": "She has been a longtime {{BLANK}} of renewable energy solutions.",
    "cn": "她長期以來一直是可再生能源解決方案的提倡者。"
  },
  {
    "word": "aid",
    "pos": "n.",
    "cn_def": "援助",
    "en_def": "help such as money or food given to people in need",
    "sentence": "The country provided humanitarian {{BLANK}} to the regions affected by the natural disaster.",
    "cn": "該國向受自然災害影響的地區提供了人道援助。"
  },
  {
    "word": "aid",
    "pos": "v.",
    "cn_def": "援助",
    "en_def": "to help someone",
    "sentence": "The funds will {{BLANK}} in the development of the new community center.",
    "cn": "這些資金將援助新社區中心的發展。"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道",
    "en_def": "a TV station",
    "sentence": "The news {{BLANK}} provides updates on current events around the world.",
    "cn": "新聞頻道提供了世界各地的最新事件更新。"
  },
  {
    "word": "channel",
    "pos": "v.",
    "cn_def": "引導",
    "en_def": "to direct money or energy toward something",
    "sentence": "They {{BLANK}} their resources into developing a new product.",
    "cn": "他們將資源引導到開發新產品中。"
  },
  {
    "word": "chemical",
    "pos": "n.",
    "cn_def": "化學品",
    "en_def": "a substance used in chemistry",
    "sentence": "The scientist mixed two {{BLANK}} together to observe the reaction.",
    "cn": "科學家將兩種化學品混合在一起以觀察反應。"
  },
  {
    "word": "classical",
    "pos": "adj.",
    "cn_def": "經典的",
    "en_def": "traditional and long-lasting in style",
    "sentence": "She enjoys listening to {{BLANK}} music while studying.",
    "cn": "她喜歡在學習時聽經典音樂。"
  },
  {
    "word": "comprehend",
    "pos": "v.",
    "cn_def": "理解",
    "en_def": "to understand something",
    "sentence": "It's difficult to {{BLANK}} the complexity of the issue without adequate background knowledge.",
    "cn": "如果沒有足夠的背景知識，很難理解這個問題的復雜性。"
  },
  {
    "word": "comprehensive",
    "pos": "adj.",
    "cn_def": "全面的",
    "en_def": "including everything; complete",
    "sentence": "The report provides a {{BLANK}} overview of the economic situation.",
    "cn": "該報告提供了經濟形勢的全面概述。"
  },
  {
    "word": "comprehension",
    "pos": "n.",
    "cn_def": "理解",
    "en_def": "the ability to understand something",
    "sentence": "His {{BLANK}} of the material was evident through his well-thought-out responses.",
    "cn": "他對材料的理解通過他經過深思熟慮的回應表現得淋漓盡致。"
  },
  {
    "word": "comprise",
    "pos": "v.",
    "cn_def": "包括",
    "en_def": "to be made up of certain parts",
    "sentence": "The committee {{BLANK}} members from various departments.",
    "cn": "委員會包括來自各個部門的成員。"
  },
  {
    "word": "comprised of",
    "pos": "phr.",
    "cn_def": "由...組成",
    "en_def": "to be made up of certain parts",
    "sentence": "The team is {{BLANK}} experts from different fields.",
    "cn": "該團隊由來自不同領域的專家組成。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say that something is true or certain",
    "sentence": "Please {{BLANK}} your attendance by replying to the invitation.",
    "cn": "請通過回覆邀請來確認您的出席。"
  },
  {
    "word": "confirmed",
    "pos": "adj.",
    "cn_def": "確認的",
    "en_def": "checked and made certain",
    "sentence": "The {{BLANK}} appointment will take place on Monday at 10 AM.",
    "cn": "確認的約會將在星期一上午10點舉行。"
  },
  {
    "word": "confirmation",
    "pos": "n.",
    "cn_def": "確認",
    "en_def": "a message that makes something certain",
    "sentence": "We are waiting for {{BLANK}} from the client before proceeding with the project.",
    "cn": "我們正在等待客戶的確認，然後再繼續進行該項目。"
  },
  {
    "word": "contrary",
    "pos": "adj.",
    "cn_def": "相反的",
    "en_def": "completely different; opposite",
    "sentence": "Her opinion is {{BLANK}} to mine, yet we work well together.",
    "cn": "她的意見與我的相反，但我們合作得很好。"
  }
];

const MCQS = [
  {
    "q": "The director decided to ______ the novel into a screenplay for the film.",
    "options": [
      "adapt",
      "succeed",
      "advocate",
      "guarantee"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "It took him a few months to ______ the new work environment.",
    "options": [
      "be equipped with",
      "prior to",
      "be comprised of",
      "adapt to"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The ______ version of the play was well-received by the audience.",
    "options": [
      "contrary",
      "adapted",
      "definite",
      "irreversible"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of the classic novel into a movie was a huge success.",
    "options": [
      "transmission",
      "priority",
      "adaptation",
      "reverse"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "As an ______, it's important to take responsibility for your actions.",
    "options": [
      "adult",
      "voluntary",
      "well-equipped",
      "invisible"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Many health experts ______ for a balanced diet and regular exercise.",
    "options": [
      "file",
      "advocate",
      "quote",
      "publish"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "She has been a longtime ______ of renewable energy solutions.",
    "options": [
      "submission",
      "prohibition",
      "survival",
      "advocate"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The country provided humanitarian ______ to the regions affected by the natural disaster.",
    "options": [
      "transmission",
      "isolation",
      "aid",
      "adaptation"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The funds will ______ in the development of the new community center.",
    "options": [
      "file",
      "aid",
      "prohibit",
      "intervene"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The news ______ provides updates on current events around the world.",
    "options": [
      "globe",
      "differentiation",
      "hierarchy",
      "channel"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "They ______ their resources into developing a new product.",
    "options": [
      "isolate",
      "volunteer",
      "channel",
      "advocate"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The scientist mixed two ______ together to observe the reaction.",
    "options": [
      "chemical",
      "release",
      "thesis",
      "submission"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "She enjoys listening to ______ music while studying.",
    "options": [
      "published",
      "successive",
      "classical",
      "well-equipped"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "It's difficult to ______ the complexity of the issue without adequate background knowledge.",
    "options": [
      "comprehend",
      "simulate",
      "submit",
      "volunteer"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The report provides a ______ overview of the economic situation.",
    "options": [
      "voluntary",
      "comprehensive",
      "well-equipped",
      "sole"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "His ______ of the material was evident through his well-thought-out responses.",
    "options": [
      "foundation",
      "advocate",
      "quotation",
      "comprehension"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The committee ______ members from various departments.",
    "options": [
      "submit",
      "adapt",
      "comprise",
      "aid"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The team is ______ experts from different fields.",
    "options": [
      "be comprised of",
      "prior to",
      "release a song/album",
      "release pressure"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please ______ your attendance by replying to the invitation.",
    "options": [
      "differentiate",
      "comprehend",
      "reverse",
      "confirm"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The ______ appointment will take place on Monday at 10 AM.",
    "options": [
      "irreversible",
      "confirmed",
      "ultimate",
      "transmitted"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We are waiting for ______ from the client before proceeding with the project.",
    "options": [
      "differentiation",
      "media",
      "confirmation",
      "file"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Her opinion is ______ to mine, yet we work well together.",
    "options": [
      "innovative",
      "contrary",
      "inserted",
      "adult"
    ],
    "answer": 1,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "adapt": {
    "pos": "v.",
    "en_def": "to change a book or story into a film or play",
    "cn_def": "改編",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change a book or story into a film or play",
        "cn_def": "改編"
      }
    ]
  },
  "adapt to": {
    "pos": "phr.",
    "en_def": "to get used to a new situation",
    "cn_def": "適應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to get used to a new situation",
        "cn_def": "適應"
      }
    ]
  },
  "adapted": {
    "pos": "adj.",
    "en_def": "changed from a book or story into a film or play",
    "cn_def": "改編的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "changed from a book or story into a film or play",
        "cn_def": "改編的"
      }
    ]
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a film or play made from a book or story",
    "cn_def": "改編",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a film or play made from a book or story",
        "cn_def": "改編"
      }
    ]
  },
  "adult": {
    "pos": "n./adj.",
    "en_def": "a grown-up person",
    "cn_def": "成年人/成年的",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "a grown-up person",
        "cn_def": "成年人/成年的"
      }
    ]
  },
  "advocate": {
    "pos": "v.",
    "en_def": "to publicly support an idea",
    "cn_def": "提倡",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to publicly support an idea",
        "cn_def": "提倡"
      },
      {
        "pos": "n.",
        "en_def": "a person who publicly supports an idea",
        "cn_def": "提倡者"
      }
    ]
  },
  "aid": {
    "pos": "n.",
    "en_def": "help such as money or food given to people in need",
    "cn_def": "援助",
    "combined": [
      {
        "pos": "n.",
        "en_def": "help such as money or food given to people in need",
        "cn_def": "援助"
      },
      {
        "pos": "v.",
        "en_def": "to help someone",
        "cn_def": "援助"
      }
    ]
  },
  "channel": {
    "pos": "n.",
    "en_def": "a TV station",
    "cn_def": "頻道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a TV station",
        "cn_def": "頻道"
      },
      {
        "pos": "v.",
        "en_def": "to direct money or energy toward something",
        "cn_def": "引導"
      }
    ]
  },
  "chemical": {
    "pos": "n.",
    "en_def": "a substance used in chemistry",
    "cn_def": "化學品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance used in chemistry",
        "cn_def": "化學品"
      }
    ]
  },
  "classical": {
    "pos": "adj.",
    "en_def": "traditional and long-lasting in style",
    "cn_def": "經典的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "traditional and long-lasting in style",
        "cn_def": "經典的"
      }
    ]
  },
  "comprehend": {
    "pos": "v.",
    "en_def": "to understand something",
    "cn_def": "理解",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to understand something",
        "cn_def": "理解"
      }
    ]
  },
  "comprehensive": {
    "pos": "adj.",
    "en_def": "including everything; complete",
    "cn_def": "全面的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "including everything; complete",
        "cn_def": "全面的"
      }
    ]
  },
  "comprehension": {
    "pos": "n.",
    "en_def": "the ability to understand something",
    "cn_def": "理解",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to understand something",
        "cn_def": "理解"
      }
    ]
  },
  "comprise": {
    "pos": "v.",
    "en_def": "to be made up of certain parts",
    "cn_def": "包括",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be made up of certain parts",
        "cn_def": "包括"
      }
    ]
  },
  "comprised of": {
    "pos": "phr.",
    "en_def": "to be made up of certain parts",
    "cn_def": "由...組成",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be made up of certain parts",
        "cn_def": "由...組成"
      }
    ]
  },
  "be comprised of": {
    "pos": "phr.",
    "en_def": "to be made up of certain parts",
    "cn_def": "由...組成",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be made up of certain parts",
        "cn_def": "由...組成"
      }
    ]
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say that something is true or certain",
    "cn_def": "確認",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say that something is true or certain",
        "cn_def": "確認"
      }
    ]
  },
  "confirmed": {
    "pos": "adj.",
    "en_def": "checked and made certain",
    "cn_def": "確認的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "checked and made certain",
        "cn_def": "確認的"
      }
    ]
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "a message that makes something certain",
    "cn_def": "確認",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a message that makes something certain",
        "cn_def": "確認"
      }
    ]
  },
  "contrary": {
    "pos": "adj.",
    "en_def": "completely different; opposite",
    "cn_def": "相反的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely different; opposite",
        "cn_def": "相反的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
