// Lesson 82 Quiz Data: Cultural Traditions, Customs, Social Etiquette & Household Safety
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 82 - Cultural Traditions, Customs, Social Etiquette & Household Safety",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激；欣賞",
    "en_def": "to recognize the good qualities of someone or something; to be grateful for",
    "sentence": "The foreign exchange student was very polite, and she wrote a heartfelt thank-you card to {{BLANK}} the kindness of her host family.",
    "cn": "這位外國交換學生非常懂禮貌，她寫了一張由衷的感謝卡以感激寄宿家庭的善意。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹；引進",
    "en_def": "to make someone known by name to another person",
    "sentence": "When you arrive at the international business conference tomorrow, our team manager will gladly {{BLANK}} you to our overseas clients.",
    "cn": "當你明天到達國際商業會議時，我們的團隊經理會很高興將你介紹給我們的海外客戶。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；佈置",
    "en_def": "to make something more attractive by adding pretty things",
    "sentence": "Before the festive holiday dinner begins on Christmas Eve, the children always gather in the living room to {{BLANK}} the tall tree.",
    "cn": "在平安夜節日晚餐開始之前，孩子們總是聚集在客廳裝飾那棵高大的樹。"
  },
  {
    "word": "mask",
    "pos": "n. / v.",
    "cn_def": "面具；口罩；遮掩",
    "en_def": "a covering worn over all or part of the face; to hide something",
    "sentence": "To protect elderly family members from the seasonal influenza virus, everyone was advised to wear a protective medical {{BLANK}} in public.",
    "cn": "為了保護年長的家庭成員免受季節性流感病毒的侵害，建議大家在公共場合佩戴醫療防護口罩。"
  },
  {
    "word": "alarm",
    "pos": "n. / v.",
    "cn_def": "警報；警鈴；使驚恐",
    "en_def": "a warning sound or device; a feeling of sudden fear",
    "sentence": "Every residential apartment in the modern building is equipped with a sensitive smoke {{BLANK}} to detect dangerous fires quickly.",
    "cn": "現代化大樓中的每間住宅公寓都配備了靈敏的煙霧警報器，以便快速發現危險火災。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the customs, beliefs, art, and way of life of a particular society",
    "sentence": "Traveling to different countries allows students to learn about foreign {{BLANK}} and understand diverse lifestyles with open minds.",
    "cn": "到不同的國家旅行可以讓學生了解外國文化，並以開放的心態理解多樣的生活方式。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a belief, principle, or way of acting that has continued for a long time",
    "sentence": "Eating mooncakes and watching the bright full moon with relatives is an ancient cultural {{BLANK}} celebrated across Taiwan every autumn.",
    "cn": "與親戚一起吃月餅和賞滿月是每年秋天全台灣都慶祝的古老文化傳統。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；慣例",
    "en_def": "a way of behaving or a belief that has been established for a long time",
    "sentence": "Taking off shoes before entering someone's private home is an important local {{BLANK}} that visitors must follow respectfully.",
    "cn": "進入他人的私人住宅前脫鞋是一項重要的當地習俗，訪客必須恭敬遵守。"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "cn_def": "圖案；花樣；模式",
    "en_def": "a repeated decorative design; a particular way in which something is done",
    "sentence": "The traditional silk dress had an intricate flower {{BLANK}} woven with golden threads that caught everyone's admiration at the party.",
    "cn": "這件傳統絲綢連衣裙織有用金線編織的複雜花朵圖案，在派對上贏得所有人的讚賞。"
  },
  {
    "word": "manner",
    "pos": "n.",
    "cn_def": "方式；禮貌；規矩",
    "en_def": "the way in which something is done; polite ways of behaving",
    "sentence": "Parents should teach their young children good table {{BLANK}} so that they do not talk loudly with their mouths full of food.",
    "cn": "父母應該教導幼童良好的餐桌禮貌，這樣他們就不會在嘴裡塞滿食物時大聲說話。"
  }
];

const MCQS = [
  {
    "q": "We sincerely ______ all the valuable advice and patient guidance our school principal gave us before our college graduation.",
    "options": [
      "appreciate",
      "decorate",
      "introduce",
      "mask"
    ],
    "answer": 0,
    "cn": "在大學畢業前，我們由衷感激學校校長給予我們的一切寶貴建議與耐心指導。 【選項解析】(A) appreciate 感激  (B) decorate 裝飾  (C) introduce 介紹  (D) mask 掩蓋。感激師長建議指導，選 appreciate。",
    "vocabIndex": 0
  },
  {
    "q": "At the beginning of the English workshop, the friendly teacher asked each student to stand up and ______ himself or herself briefly.",
    "options": [
      "decorate",
      "mask",
      "introduce",
      "appreciate"
    ],
    "answer": 2,
    "cn": "在英語工作坊開始時，和藹可親的老師請每位學生站起來簡短介紹自己。 【選項解析】(A) decorate 裝飾  (B) mask 掩飾  (C) introduce 介紹  (D) appreciate 欣賞。自我介紹用 introduce oneself。",
    "vocabIndex": 1
  },
  {
    "q": "The young couple decided to ______ their new living room with colorful paintings, potted plants, and soft yellow lamps.",
    "options": [
      "introduce",
      "appreciate",
      "mask",
      "decorate"
    ],
    "answer": 3,
    "cn": "這對年輕夫婦決定用色彩斑斕的畫作、盆栽和柔和的黃色檯燈來佈置他們的新客廳。 【選項解析】(A) introduce 介紹  (B) appreciate 欣賞  (C) mask 遮掩  (D) decorate 裝飾。用物品裝飾房間，選 decorate。",
    "vocabIndex": 2
  },
  {
    "q": "When visiting the hospital during winter, you should always wear a clean face ______ to protect yourself from spreading germs.",
    "options": [
      "alarm",
      "mask",
      "culture",
      "pattern"
    ],
    "answer": 1,
    "cn": "冬天到醫院探病時，你應該隨時戴上乾淨的口罩以保護自己免於散播病菌。 【選項解析】(A) mask 口罩  (B) alarm 警報  (C) culture 文化  (D) pattern 圖案。face mask 表示口罩，選 mask。",
    "vocabIndex": 3
  },
  {
    "q": "When smoke began pouring out of the apartment kitchen, the loud ceiling ______ rang immediately to alert all residents.",
    "options": [
      "pattern",
      "manner",
      "custom",
      "alarm"
    ],
    "answer": 3,
    "cn": "當公寓廚房開始冒出濃煙時，天花板上的響亮警報器立即響起以提醒所有住戶。 【選項解析】(A) pattern 圖案  (B) alarm 警報器  (C) custom 習俗  (D) manner 禮貌。煙霧警報器 smoke alarm，選 alarm。",
    "vocabIndex": 4
  },
  {
    "q": "Learning a foreign language is not just about memorizing words, but also about understanding the deep history and rich ______ of the nation.",
    "options": [
      "culture",
      "alarm",
      "mask",
      "manner"
    ],
    "answer": 0,
    "cn": "學習外語不僅僅是背單字，更是為了理解該國深厚的歷史與豐富的文化。 【選項解析】(A) alarm 警報  (B) culture 文化  (C) mask 面具  (D) manner 禮節。國家深厚歷史與豐富文化，選 culture。",
    "vocabIndex": 5
  },
  {
    "q": "Giving red envelopes filled with lucky money to children during Chinese New Year is a treasured family ______ passed down for generations.",
    "options": [
      "mask",
      "tradition",
      "alarm",
      "pattern"
    ],
    "answer": 1,
    "cn": "農曆新年發裝有壓歲錢的紅包給小孩子，是代代相傳的珍貴家庭傳統。 【選項解析】(A) mask 面具  (B) alarm 警報  (C) tradition 傳統  (D) pattern 圖樣。代代相傳之習慣為 tradition。",
    "vocabIndex": 6
  },
  {
    "q": "In many Asian countries, it is a polite social ______ to bow slightly when greeting someone older or of higher rank.",
    "options": [
      "mask",
      "alarm",
      "custom",
      "pattern"
    ],
    "answer": 2,
    "cn": "在許多亞洲國家，向年長者或地位較高的人問候時微微鞠躬是一種禮貌的社交習俗。 【選項解析】(A) custom 習俗  (B) alarm 警報  (C) mask 面具  (D) pattern 模式。社會通行的生活習俗為 custom。",
    "vocabIndex": 7
  },
  {
    "q": "The interior designer chose wallpaper with a geometric square ______ that made the small bedroom look wider and brighter.",
    "options": [
      "manner",
      "alarm",
      "culture",
      "pattern"
    ],
    "answer": 3,
    "cn": "室內設計師選擇了帶有幾何方格圖案的壁紙，讓狹小的臥室顯得更寬敞明亮。 【選項解析】(A) manner 禮貌  (B) alarm 警鈴  (C) culture 文化  (D) pattern 圖案。壁紙的花樣圖案為 pattern。",
    "vocabIndex": 8
  },
  {
    "q": "Speaking rudely to convenience store clerks shows a serious lack of good ______, and people should treat service workers with respect.",
    "options": [
      "pattern",
      "alarm",
      "manner",
      "mask"
    ],
    "answer": 2,
    "cn": "對便利商店店員說話粗魯無禮表現出嚴重缺乏良好禮貌，人們應該尊重服務人員。 【選項解析】(A) pattern 圖樣  (B) manner 禮貌/方式  (C) alarm 警報  (D) mask 面具。good manners 表示良好禮貌規矩。",
    "vocabIndex": 9
  },
  {
    "q": "I really ______ your generous offer to drive me to the train station in the heavy rain, but my brother is already on his way.",
    "options": [
      "appreciate",
      "introduce",
      "decorate",
      "mask"
    ],
    "answer": 0,
    "cn": "我非常感謝你好心提議在大雨中載我去火車站，但我哥哥已經在路上了。 【選項解析】(A) decorate 裝飾  (B) introduce 介紹  (C) appreciate 感激  (D) mask 遮掩。由衷感激他人的提議好意，選 appreciate。",
    "vocabIndex": 0
  },
  {
    "q": "Let me ______ my college roommate Kevin, who has just moved to Taipei to work as a software engineer for an international firm.",
    "options": [
      "decorate",
      "introduce",
      "appreciate",
      "mask"
    ],
    "answer": 1,
    "cn": "讓我來介紹我的大學室友凱文，他剛搬到台北一家國際公司擔任軟體工程師。 【選項解析】(A) introduce 介紹  (B) decorate 裝飾  (C) appreciate 感謝  (D) mask 掩蓋。向他人介紹新朋友，選 introduce。",
    "vocabIndex": 1
  },
  {
    "q": "The students spent all Friday afternoon hanging paper lanterns and ribbons to ______ their classroom for the Halloween party.",
    "options": [
      "appreciate",
      "mask",
      "introduce",
      "decorate"
    ],
    "answer": 3,
    "cn": "學生們整個星期五下午都在掛紙燈籠和彩帶，為萬聖節派對佈置他們的教室。 【選項解析】(A) appreciate 感謝  (B) decorate 佈置  (C) introduce 介紹  (D) mask 遮蔽。掛燈籠裝飾教室，選 decorate。",
    "vocabIndex": 2
  },
  {
    "q": "The robber wore a black ski ______ to cover his face, but police officers were still able to identify him from street camera footage.",
    "options": [
      "manner",
      "alarm",
      "mask",
      "tradition"
    ],
    "answer": 2,
    "cn": "搶匪戴著黑色滑雪面罩遮住臉部，但警官依然能夠從街道攝影機鏡頭辨認出他。 【選項解析】(A) mask 面罩/面具  (B) alarm 警報  (C) manner 禮貌  (D) tradition 傳統。遮擋面部之 ski mask，選 mask。",
    "vocabIndex": 3
  },
  {
    "q": "If anyone tries to open the bank vault after business hours without authorization, a silent ______ will alert the central police station.",
    "options": [
      "culture",
      "alarm",
      "pattern",
      "custom"
    ],
    "answer": 1,
    "cn": "如果有人未經授權在營業時間外試圖打開銀行保險庫，無聲警報將會通知中央警察局。 【選項解析】(A) culture 文化  (B) alarm 警報  (C) pattern 模式  (D) custom 習俗。安全防盜警報器為 alarm。",
    "vocabIndex": 4
  },
  {
    "q": "Food festivals provide wonderful opportunities for community members to taste international dishes and experience traditional ______.",
    "options": [
      "culture",
      "mask",
      "alarm",
      "manner"
    ],
    "answer": 0,
    "cn": "美食節為社區居民提供了品嚐各國料理並體驗各國傳統文化的絕佳機會。 【選項解析】(A) alarm 警報  (B) mask 面具  (C) culture 文化  (D) manner 舉止。飲食與人文文化，選 culture。",
    "vocabIndex": 5
  },
  {
    "q": "Our school holds an annual sports day every November, and this athletic ______ has been maintained without interruption for thirty years.",
    "options": [
      "pattern",
      "alarm",
      "mask",
      "tradition"
    ],
    "answer": 3,
    "cn": "我們學校每年十一月都會舉辦校運會，這項體育傳統已經保持了三十年未曾中斷。 【選項解析】(A) tradition 傳統  (B) alarm 警報  (C) mask 面具  (D) pattern 圖案。歷史悠久的活動傳統，選 tradition。",
    "vocabIndex": 6
  },
  {
    "q": "Shaking hands firmly with a confident smile is a widely accepted business ______ when meeting new business partners in Western countries.",
    "options": [
      "alarm",
      "custom",
      "mask",
      "pattern"
    ],
    "answer": 1,
    "cn": "在西方國家與新商業夥伴見面時，帶著自信微笑用力握手是普遍接受的商業慣例。 【選項解析】(A) custom 習俗  (B) alarm 警報  (C) mask 面具  (D) pattern 圖案。握手寒暄的商務習慣為 custom。",
    "vocabIndex": 7
  },
  {
    "q": "Meteorologists noticed an unusual weather ______ that brought continuous torrential rainfall to the southern region for an entire week.",
    "options": [
      "manner",
      "alarm",
      "pattern",
      "culture"
    ],
    "answer": 2,
    "cn": "氣象學家注意到一種不尋常的天氣模式，給南部地區帶來整整一週的連續暴雨。 【選項解析】(A) manner 方式  (B) pattern 模式/型態  (C) alarm 警報  (D) culture 文化。天氣型態 weather pattern，選 pattern。",
    "vocabIndex": 8
  },
  {
    "q": "The waiter served our meals in a very polite and attentive ______, so my father gladly left a generous ten percent tip on the table.",
    "options": [
      "manner",
      "pattern",
      "alarm",
      "mask"
    ],
    "answer": 0,
    "cn": "服務生以非常禮貌和周到的態度為我們上菜，因此我父親欣然在桌上留下了豐厚的百分之十小費。 【選項解析】(A) pattern 圖案  (B) manner 態度/舉止  (C) alarm 警報  (D) mask 面罩。in a polite manner 表示以禮貌的方式態度。",
    "vocabIndex": 9
  },
  {
    "q": "The museum tourists deeply ______ the rare historical artifacts because the tour guide explained the ancient stories behind each item.",
    "options": [
      "masked",
      "decorated",
      "introduced",
      "appreciated"
    ],
    "answer": 3,
    "cn": "博物館的遊客非常欣賞這些珍貴的歷史文物，因為導遊為每件物品講解了背後的古老故事。 【選項解析】(A) appreciated 欣賞  (B) decorated 裝飾  (C) introduced 介紹  (D) masked 掩蓋。欣賞文物價值，選 appreciate。",
    "vocabIndex": 0
  },
  {
    "q": "Before beginning the official project presentation, please ______ the main objectives and team members to our board of directors.",
    "options": [
      "introduce",
      "decorate",
      "appreciate",
      "mask"
    ],
    "answer": 0,
    "cn": "在開始正式的專案簡報之前，請先向我們的董事會介紹主要目標和團隊成員。 【選項解析】(A) decorate 佈置  (B) introduce 介紹  (C) appreciate 感激  (D) mask 掩蓋。介紹團隊與目標，選 introduce。",
    "vocabIndex": 1
  },
  {
    "q": "During spring festival, many families like to ______ their front doors with red couplets to welcome good fortune into their homes.",
    "options": [
      "introduce",
      "decorate",
      "appreciate",
      "mask"
    ],
    "answer": 1,
    "cn": "在春節期間，許多家庭喜歡在大門上裝飾紅色春聯，以迎接好運進入家中。 【選項解析】(A) introduce 介紹  (B) appreciate 感激  (C) decorate 裝飾  (D) mask 遮掩。貼春聯裝飾大門，選 decorate。",
    "vocabIndex": 2
  },
  {
    "q": "The actor wore an elaborate theatrical ______ representing an ancient dragon warrior during the opening scene of the play.",
    "options": [
      "pattern",
      "alarm",
      "mask",
      "custom"
    ],
    "answer": 2,
    "cn": "在該劇的開場戲中，演員戴著代表古代神龍勇士的精美戲劇面具登場。 【選項解析】(A) mask 面具  (B) alarm 警鈴  (C) pattern 圖樣  (D) custom 習俗。舞台演戲佩戴之面具為 mask。",
    "vocabIndex": 3
  },
  {
    "q": "When the burglar broke the side window of the jewelry store at midnight, the security ______ sounded loudly and frightened him away.",
    "options": [
      "alarm",
      "pattern",
      "manner",
      "culture"
    ],
    "answer": 0,
    "cn": "當竊賊在午夜打破珠寶店的側窗時，防盜警報器大聲響起並將他嚇跑了。 【選項解析】(A) culture 文化  (B) pattern 圖案  (C) manner 禮貌  (D) alarm 警報。防盜警報器 security alarm，選 alarm。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "appreciate": {
    "pos": "v.",
    "en_def": "to recognize the good qualities of someone or something; to be grateful for",
    "cn_def": "感激；欣賞",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to recognize the good qualities of someone or something; to be grateful for",
        "cn_def": "感激；欣賞"
      }
    ]
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to make someone known by name to another person",
    "cn_def": "介紹；引進",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone known by name to another person",
        "cn_def": "介紹；引進"
      }
    ]
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make something more attractive by adding pretty things",
    "cn_def": "裝飾；佈置",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something more attractive by adding pretty things",
        "cn_def": "裝飾；佈置"
      }
    ]
  },
  "mask": {
    "pos": "n. / v.",
    "en_def": "a covering worn over all or part of the face; to hide something",
    "cn_def": "面具；口罩；遮掩",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a covering worn over all or part of the face; to hide something",
        "cn_def": "面具；口罩；遮掩"
      }
    ]
  },
  "alarm": {
    "pos": "n. / v.",
    "en_def": "a warning sound or device; a feeling of sudden fear",
    "cn_def": "警報；警鈴；使驚恐",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a warning sound or device; a feeling of sudden fear",
        "cn_def": "警報；警鈴；使驚恐"
      }
    ]
  },
  "culture": {
    "pos": "n.",
    "en_def": "the customs, beliefs, art, and way of life of a particular society",
    "cn_def": "文化",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the customs, beliefs, art, and way of life of a particular society",
        "cn_def": "文化"
      }
    ]
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a belief, principle, or way of acting that has continued for a long time",
    "cn_def": "傳統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a belief, principle, or way of acting that has continued for a long time",
        "cn_def": "傳統"
      }
    ]
  },
  "custom": {
    "pos": "n.",
    "en_def": "a way of behaving or a belief that has been established for a long time",
    "cn_def": "習俗；慣例",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of behaving or a belief that has been established for a long time",
        "cn_def": "習俗；慣例"
      }
    ]
  },
  "pattern": {
    "pos": "n.",
    "en_def": "a repeated decorative design; a particular way in which something is done",
    "cn_def": "圖案；花樣；模式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a repeated decorative design; a particular way in which something is done",
        "cn_def": "圖案；花樣；模式"
      }
    ]
  },
  "manner": {
    "pos": "n.",
    "en_def": "the way in which something is done; polite ways of behaving",
    "cn_def": "方式；禮貌；規矩",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way in which something is done; polite ways of behaving",
        "cn_def": "方式；禮貌；規矩"
      }
    ]
  },
  "masked": {
    "pos": "",
    "en_def": "",
    "cn_def": "掩蓋",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "掩蓋"
      }
    ]
  },
  "decorated": {
    "pos": "",
    "en_def": "",
    "cn_def": "裝飾",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "裝飾"
      }
    ]
  },
  "introduced": {
    "pos": "",
    "en_def": "",
    "cn_def": "介紹",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "介紹"
      }
    ]
  },
  "appreciated": {
    "pos": "",
    "en_def": "",
    "cn_def": "欣賞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "欣賞"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
