// Part 3 Quiz Data: mostly – request
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 22-3 - mostly – request",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mostly",
    "pos": "adv.",
    "cn_def": "主要地；大部分",
    "en_def": "as regards the greater part or for the most part; mainly",
    "sentence": "The weather forecast for tomorrow indicates that it will be {{BLANK}} sunny with occasional light showers.",
    "cn": "明天的天氣預報顯示將會是大致晴朗且偶有陣雨的天氣。"
  },
  {
    "word": "outline",
    "pos": "n./v.",
    "cn_def": "大綱；輪廓；概述",
    "en_def": "a general sketch or summary; to give a summary of",
    "sentence": "Before you begin drafting your final term paper, you should write a detailed {{BLANK}} of your main points.",
    "cn": "在開始撰寫期末論文初稿之前，你應該先撰寫一份主要論點的詳細大綱。"
  },
  {
    "word": "permission",
    "pos": "n.",
    "cn_def": "許可；允許",
    "en_def": "consent or authorization given by someone in authority",
    "sentence": "Students must ask for written {{BLANK}} from their homeroom teacher before leaving the school campus early.",
    "cn": "學生在提早離開校園前，必須先向導師請求書面許可。"
  },
  {
    "word": "permitting",
    "pos": "v./n.",
    "cn_def": "准許；允許；許可證",
    "en_def": "to allow something to happen; an official document giving authorization",
    "sentence": "We are planning to have a barbecue in the public park this Saturday afternoon, weather {{BLANK}}.",
    "cn": "如果天氣允許的話，我們計劃本週六下午在公園舉行烤肉活動。"
  },
  {
    "word": "purse",
    "pos": "n./v.",
    "cn_def": "女用手提包；錢包；噘起(嘴唇)",
    "en_def": "a small bag for carrying money; to pucker or tighten one's lips",
    "sentence": "She had to dig through her large leather {{BLANK}} to locate her ringing smartphone and car keys.",
    "cn": "她不得不在她的大皮製手提包裡翻找，以找到響個不停的智慧型手機和車鑰匙。"
  },
  {
    "word": "ray",
    "pos": "n.",
    "cn_def": "光線；射線；一絲(希望)",
    "en_def": "a narrow beam of light or energy; a tiny trace of something positive",
    "sentence": "After weeks of failing negotiations, the mediator's unexpected breakthrough provided a {{BLANK}} of hope for peace.",
    "cn": "經過數週談判失敗後，調解人意想不到的突破為和平帶來了一線希望。"
  },
  {
    "word": "razor",
    "pos": "n.",
    "cn_def": "刮鬍刀；剃刀",
    "en_def": "an instrument with a sharp blade used for shaving hair from the skin",
    "sentence": "My father prefers shaving with a modern electric {{BLANK}} because it is faster and prevents accidental cuts.",
    "cn": "我父親更喜歡用現代電動刮鬍刀刮鬍子，因為這樣更快且能防止意外割傷。"
  },
  {
    "word": "regret",
    "pos": "v./n.",
    "cn_def": "後悔；遺憾；抱歉",
    "en_def": "to feel sad, repentant, or disappointed over something; sorrow",
    "sentence": "We deeply {{BLANK}} to inform you that your job application was not successful on this occasion.",
    "cn": "我們非常遺憾地通知您，您的求職申請這次並未成功。"
  },
  {
    "word": "regretful",
    "pos": "adj.",
    "cn_def": "感到後悔的；遺憾的",
    "en_def": "feeling or expressing sorrow or remorse",
    "sentence": "He gave a {{BLANK}} smile as he explained why he could not attend his best friend's wedding ceremony.",
    "cn": "他帶著遺憾的微笑解釋了為何無法參加好友的婚禮。"
  },
  {
    "word": "request",
    "pos": "n./v.",
    "cn_def": "要求；請求",
    "en_def": "an act of asking politely for something; to ask for something formally",
    "sentence": "The popular rock band performed an acoustic version of their hit ballad at the {{BLANK}} of the fans.",
    "cn": "這支受歡迎的搖滾樂團應粉絲的要求演唱了其熱門抒情曲的木吉他版。"
  }
];

const MCQS = [
  {
    "q": "The scientific paper was praised for its clarity because the author presented a well-organized ______ first.",
    "options": [
      "ray",
      "razor",
      "purse",
      "outline"
    ],
    "answer": 3,
    "cn": "這篇科學論文因其清晰明瞭而受到稱讚，因為作者首先呈現了一份結構良好的大綱。",
    "vocabIndex": 1
  },
  {
    "q": "Visitors are not allowed to take photographs inside the historical cathedral without written ______.",
    "options": [
      "razor",
      "permission",
      "ray",
      "purse"
    ],
    "answer": 1,
    "cn": "未經書面許可，訪客不得在這座歷史悠久的大教堂內拍照。",
    "vocabIndex": 2
  },
  {
    "q": "Outdoor sports will continue as scheduled this Saturday morning, weather ______.",
    "options": [
      "mostly",
      "regretting",
      "permitting",
      "requesting"
    ],
    "answer": 2,
    "cn": "如果天氣允許的話，戶外運動將於本週六上午照常舉行。",
    "vocabIndex": 3
  },
  {
    "q": "The detective observed how the nervous suspect ______ her lips before answering the question.",
    "options": [
      "pursed",
      "regretted",
      "requested",
      "permitted"
    ],
    "answer": 0,
    "cn": "偵探觀察到緊張的嫌疑人在回答問題前如何噘起嘴唇。",
    "vocabIndex": 4
  },
  {
    "q": "A single ______ of sunshine pierced through the dark storm clouds, illuminating the green valley.",
    "options": [
      "outline",
      "razor",
      "ray",
      "purse"
    ],
    "answer": 2,
    "cn": "一束陽光穿透烏雲，照亮了翠綠的山谷。",
    "vocabIndex": 5
  },
  {
    "q": "Be very cautious when replacing the blade of this surgical tool; it is ______ sharp.",
    "options": [
      "outline",
      "razor",
      "ray",
      "purse"
    ],
    "answer": 1,
    "cn": "更換此手術工具的刀片時要非常小心；它極其鋒利。",
    "vocabIndex": 6
  },
  {
    "q": "The airline management said they ______ any inconvenience caused by the unexpected flight cancellation.",
    "options": [
      "permitted",
      "outlined",
      "pursed",
      "regretted"
    ],
    "answer": 3,
    "cn": "航空公司管理層表示，對於因意外取消航班所造成的任何不便，他們深感遺憾。",
    "vocabIndex": 7
  },
  {
    "q": "The concert pianist agreed to play an encore ______ the enthusiastic request of the audience.",
    "options": [
      "at",
      "with",
      "in",
      "for"
    ],
    "answer": 0,
    "cn": "應觀眾熱烈要求，音樂會鋼琴家同意演奏一首安可曲。"
  },
  {
    "q": "The population of this coastal town is ______ elderly residents who have retired from large cities.",
    "options": [
      "barely",
      "mostly",
      "regretfully",
      "sharply"
    ],
    "answer": 1,
    "cn": "這個沿海城鎮的人口主要是從大城市退休的年長居民。",
    "vocabIndex": 0
  },
  {
    "q": "The speaker used bullet points to ______ the essential milestones of the environmental campaign.",
    "options": [
      "permit",
      "regret",
      "outline",
      "purse"
    ],
    "answer": 2,
    "cn": "演講者使用項目符號概述了環保運動的重要里程碑。",
    "vocabIndex": 1
  },
  {
    "q": "You need to apply for a building ______ from the municipal office before adding a second floor.",
    "options": [
      "ray",
      "purse",
      "outline",
      "permit"
    ],
    "answer": 3,
    "cn": "在加蓋二樓之前，你需要向市政辦公室申請建築許可證。",
    "vocabIndex": 3
  },
  {
    "q": "She searched frantically in her leather ______ for the lost house key.",
    "options": [
      "purse",
      "razor",
      "outline",
      "ray"
    ],
    "answer": 0,
    "cn": "她在自己的皮包裡瘋狂翻找遺失的家門鑰匙。",
    "vocabIndex": 4
  },
  {
    "q": "The discovery of a viable vaccine brought a welcome ______ of hope to the struggling global economy.",
    "options": [
      "razor",
      "ray",
      "purse",
      "permit"
    ],
    "answer": 1,
    "cn": "可行疫苗的發現為步履維艱的全球經濟帶來了令人欣喜的一線希望。",
    "vocabIndex": 5
  },
  {
    "q": "Using an electric ______ is often much gentler on sensitive facial skin than traditional blades.",
    "options": [
      "purse",
      "ray",
      "outline",
      "razor"
    ],
    "answer": 3,
    "cn": "比起傳統刀片，使用電動刮鬍刀對敏感的面部皮膚通常要溫和得多。",
    "vocabIndex": 6
  },
  {
    "q": "I ______ having spoken so harshly to my coworker during the heated marketing debate.",
    "options": [
      "regret",
      "purse",
      "permit",
      "outline"
    ],
    "answer": 0,
    "cn": "我後悔在激烈的行銷辯論中對同事說話如此嚴苛。",
    "vocabIndex": 7
  },
  {
    "q": "The hotel guest submitted a formal ______ for a room located far away from the elevator.",
    "options": [
      "outline",
      "purse",
      "request",
      "razor"
    ],
    "answer": 2,
    "cn": "飯店房客正式提出了希望入住遠離電梯之客房的要求。",
    "vocabIndex": 9
  },
  {
    "q": "During the winter season, the tourists visiting this ski resort are ______ intermediate and expert skiers.",
    "options": [
      "regretfully",
      "mostly",
      "sharply",
      "scarcely"
    ],
    "answer": 1,
    "cn": "在冬季，造訪這個滑雪勝地的遊客主要是中級和高級滑雪者。",
    "vocabIndex": 0
  },
  {
    "q": "The architect sketched an initial ______ of the skyscraper to show the structural engineers.",
    "options": [
      "outline",
      "razor",
      "ray",
      "purse"
    ],
    "answer": 0,
    "cn": "建築師畫出了摩天大樓的初步輪廓草圖，以展示給結構工程師看。",
    "vocabIndex": 1
  },
  {
    "q": "Without the written ______ of the copyright holder, you cannot reproduce these artistic illustrations.",
    "options": [
      "razor",
      "purse",
      "permission",
      "ray"
    ],
    "answer": 2,
    "cn": "未經版權擁有者的書面許可，您不得複製這些藝術插圖。",
    "vocabIndex": 2
  },
  {
    "q": "The security rules do not ______ employees to bring unauthorized USB storage drives into the data room.",
    "options": [
      "regret",
      "outline",
      "purse",
      "permit"
    ],
    "answer": 3,
    "cn": "安全規則不允許員工將未經授權的USB隨身碟帶入機房。",
    "vocabIndex": 3
  },
  {
    "q": "She reached into her designer ______ and pulled out a stylish pair of sunglasses.",
    "options": [
      "outline",
      "purse",
      "razor",
      "ray"
    ],
    "answer": 1,
    "cn": "她將手伸進名牌手提包，拿出一副時尚的太陽眼鏡。",
    "vocabIndex": 4
  },
  {
    "q": "Wearing dark protective goggles shields eyes from damaging infrared and ultraviolet ______.",
    "options": [
      "outlines",
      "razors",
      "rays",
      "purses"
    ],
    "answer": 2,
    "cn": "佩戴深色防護護目鏡可保護眼睛免受有害的紅外線和紫外線傷害。"
  },
  {
    "q": "He gave his former mentor a ______ nod, knowing that his reckless pride had ruined their collaboration.",
    "options": [
      "regretful",
      "charming",
      "mostly",
      "razor"
    ],
    "answer": 0,
    "cn": "他向昔日的導師遺憾地點了點頭，深知自己的魯莽驕傲破壞了他們的合作。",
    "vocabIndex": 8
  },
  {
    "q": "Customers may ______ a full refund within fourteen days if the electronic device malfunctions.",
    "options": [
      "outline",
      "purse",
      "permit",
      "request"
    ],
    "answer": 3,
    "cn": "如果該電子設備發生故障，顧客可在十四天內要求全額退款。",
    "vocabIndex": 9
  },
  {
    "q": "The lawyer gave a ______ analysis that cut directly to the core of the constitutional crisis.",
    "options": [
      "regretful",
      "cheerful",
      "razor-sharp",
      "mostly"
    ],
    "answer": 2,
    "cn": "律師做出了無比敏銳深刻的分析，直接切中憲政危機的核心。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "mostly": {
    "pos": "adv.",
    "en_def": "as regards the greater part or for the most part; mainly",
    "cn_def": "主要地；大部分",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as regards the greater part or for the most part; mainly",
        "cn_def": "主要地；大部分"
      }
    ]
  },
  "outline": {
    "pos": "n./v.",
    "en_def": "a general sketch or summary; to give a summary of",
    "cn_def": "大綱；輪廓；概述",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a general sketch or summary; to give a summary of",
        "cn_def": "大綱；輪廓；概述"
      }
    ]
  },
  "permission": {
    "pos": "n.",
    "en_def": "consent or authorization given by someone in authority",
    "cn_def": "許可；允許",
    "combined": [
      {
        "pos": "n.",
        "en_def": "consent or authorization given by someone in authority",
        "cn_def": "許可；允許"
      }
    ]
  },
  "permitting": {
    "pos": "v./n.",
    "en_def": "to allow something to happen; an official document giving authorization",
    "cn_def": "准許；允許；許可證",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to allow something to happen; an official document giving authorization",
        "cn_def": "准許；允許；許可證"
      }
    ]
  },
  "permit": {
    "pos": "v./n.",
    "en_def": "to allow something to happen; an official document giving authorization",
    "cn_def": "准許；允許；許可證",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to allow something to happen; an official document giving authorization",
        "cn_def": "准許；允許；許可證"
      }
    ]
  },
  "purse": {
    "pos": "n./v.",
    "en_def": "a small bag for carrying money; to pucker or tighten one's lips",
    "cn_def": "女用手提包；錢包；噘起(嘴唇)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a small bag for carrying money; to pucker or tighten one's lips",
        "cn_def": "女用手提包；錢包；噘起(嘴唇)"
      }
    ]
  },
  "ray": {
    "pos": "n.",
    "en_def": "a narrow beam of light or energy; a tiny trace of something positive",
    "cn_def": "光線；射線；一絲(希望)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a narrow beam of light or energy; a tiny trace of something positive",
        "cn_def": "光線；射線；一絲(希望)"
      }
    ]
  },
  "razor": {
    "pos": "n.",
    "en_def": "an instrument with a sharp blade used for shaving hair from the skin",
    "cn_def": "刮鬍刀；剃刀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an instrument with a sharp blade used for shaving hair from the skin",
        "cn_def": "刮鬍刀；剃刀"
      }
    ]
  },
  "regret": {
    "pos": "v./n.",
    "en_def": "to feel sad, repentant, or disappointed over something; sorrow",
    "cn_def": "後悔；遺憾；抱歉",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to feel sad, repentant, or disappointed over something; sorrow",
        "cn_def": "後悔；遺憾；抱歉"
      }
    ]
  },
  "regretful": {
    "pos": "adj.",
    "en_def": "feeling or expressing sorrow or remorse",
    "cn_def": "感到後悔的；遺憾的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or expressing sorrow or remorse",
        "cn_def": "感到後悔的；遺憾的"
      }
    ]
  },
  "request": {
    "pos": "n./v.",
    "en_def": "an act of asking politely for something; to ask for something formally",
    "cn_def": "要求；請求",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "an act of asking politely for something; to ask for something formally",
        "cn_def": "要求；請求"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
