// Lesson 68 Quiz Data: Vocal Expressions, Regret, Apologies, Crimes & Harmful Actions
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 68 - Vocal Expressions, Regret, Apologies, Crimes & Harmful Actions",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bark",
    "pos": "v. / n.",
    "cn_def": "狗叫；吠叫",
    "en_def": "the loud harsh cry of a dog; to make this sound",
    "sentence": "The guard dog began to {{BLANK}} fiercely at the front gate when an unfamiliar stranger approached the yard.",
    "cn": "當一位陌生的外人走近院子時，警衛犬開始在前門兇猛地吠叫。"
  },
  {
    "word": "shout",
    "pos": "v. / n.",
    "cn_def": "大喊；呼喊",
    "en_def": "to utter a loud cry or call; a loud cry",
    "sentence": "When the fire broke out in the basement, the neighbors began to {{BLANK}} loudly to warn everyone inside.",
    "cn": "當地下室起火時，鄰居們開始大聲呼喊以警告裡面的所有人。"
  },
  {
    "word": "blame",
    "pos": "v. / n.",
    "cn_def": "責怪；歸咎",
    "en_def": "to hold responsible for a fault or wrong; responsibility",
    "sentence": "You should not {{BLANK}} your little sister for breaking the ceramic cup, because it was an accident.",
    "cn": "你不應該責怪你年幼的妹妹打破了陶瓷杯，因為那純粹是一場意外。"
  },
  {
    "word": "regret",
    "pos": "v. / n.",
    "cn_def": "後悔；遺憾",
    "en_def": "to feel sorry about something that occurred",
    "sentence": "If you spend all your money on video games now, you will definitely {{BLANK}} it when you need to buy textbooks.",
    "cn": "如果你現在把所有的錢都花在電玩遊戲上，當你需要買教科書時你肯定會後悔。"
  },
  {
    "word": "apologize",
    "pos": "v.",
    "cn_def": "道歉",
    "en_def": "to express regret for something that one has done wrong",
    "sentence": "The polite young gentleman walked over to {{BLANK}} sincerely to the lady for spilling cold tea on her coat.",
    "cn": "這位有禮貌的年輕紳士走上前去，真誠地向那位女士道歉，因為他不小心把冰茶潑到了她的外套上。"
  },
  {
    "word": "satisfy",
    "pos": "v.",
    "cn_def": "使滿意；滿足",
    "en_def": "to meet the expectations, needs, or desires of someone",
    "sentence": "It is almost impossible to {{BLANK}} greedy individuals because they always demand more than they actually need.",
    "cn": "要滿足貪婪的人幾乎是不可能的，因為他們索取的總是遠多於他們實際所需。"
  },
  {
    "word": "rob",
    "pos": "v.",
    "cn_def": "搶劫",
    "en_def": "to take property unlawfully from a person or place by force",
    "sentence": "Two masked criminals attempted to {{BLANK}} the neighborhood convenience store late at night, but the police arrived quickly.",
    "cn": "兩名戴面具的罪犯企圖在深夜搶劫社區便利商店，但警察迅速趕到了現場。"
  },
  {
    "word": "steal",
    "pos": "v.",
    "cn_def": "偷竊",
    "en_def": "to take another person's property without permission",
    "sentence": "The cunning thief managed to {{BLANK}} a diamond necklace from the jewelry shop without setting off the alarm.",
    "cn": "這名狡猾的竊賊設法從珠寶店偷走了一條鑽石項鍊，而沒有觸動警報器。"
  },
  {
    "word": "waste",
    "pos": "v. / n.",
    "cn_def": "浪費；廢棄物",
    "en_def": "to use or expend carelessly or to no purpose",
    "sentence": "Please turn off the water faucet while brushing your teeth, and do not {{BLANK}} precious drinking water.",
    "cn": "刷牙時請關閉水龍頭，不要浪費寶貴的飲用水資源。"
  },
  {
    "word": "ruin",
    "pos": "v. / n.",
    "cn_def": "毀滅；毀壞",
    "en_def": "to destroy, damage severely, or spoil something completely",
    "sentence": "The unexpected heavy downpour threatened to {{BLANK}} our outdoor wedding ceremony, so we moved all the chairs inside.",
    "cn": "這場突如其來的傾盆大雨險些毀了我們的戶外婚禮儀式，所以我們把所有椅子都搬到了室內。"
  }
];

const MCQS = [
  {
    "q": "Whenever the mail carrier rides his motorcycle near our gate, our brown puppy runs outside and begins to ______.",
    "options": [
      "rob",
      "bark",
      "steal",
      "ruin"
    ],
    "answer": 1,
    "cn": "每當郵差騎機車靠近我們大門時，我們的棕色小狗就會跑出去並開始吠叫。 【選項解析】(A) bark 吠叫  (B) rob 搶劫  (C) steal 偷竊  (D) ruin 毀壞。小狗叫用 bark。",
    "vocabIndex": 0
  },
  {
    "q": "The music in the nightclub was so deafening that customers had to ______ at each other to be heard.",
    "options": [
      "waste",
      "satisfy",
      "blame",
      "shout"
    ],
    "answer": 3,
    "cn": "夜店裡的音樂震耳欲聾，顧客們不得不對著彼此大喊才能被聽見。 【選項解析】(A) waste 浪費  (B) shout 大喊  (C) blame 責怪  (D) satisfy 滿足。噪音環境中說話用 shout。",
    "vocabIndex": 1
  },
  {
    "q": "Instead of trying to ______ others for the business failure, the manager took full responsibility for the mistake.",
    "options": [
      "satisfy",
      "regret",
      "blame",
      "ruin"
    ],
    "answer": 2,
    "cn": "這位經理沒有把商業失敗歸咎於他人，而是對該錯誤承擔了全部責任。 【選項解析】(A) satisfy 滿足  (B) regret 後悔  (C) blame 歸咎  (D) ruin 毀掉。blame others 指「責怪他人」。",
    "vocabIndex": 2
  },
  {
    "q": "Many elderly people look back on their youth and deeply ______ not studying foreign languages while in school.",
    "options": [
      "regret",
      "rob",
      "bark",
      "steal"
    ],
    "answer": 0,
    "cn": "許多長者回顧他們的青春歲月，深感遺憾在校期間沒有好好學習外語。 【選項解析】(A) rob 搶劫  (B) regret 後悔  (C) bark 吠叫  (D) steal 偷竊。regret not doing 表示「後悔沒做某事」。",
    "vocabIndex": 3
  },
  {
    "q": "If you accidentally step on someone's foot on a crowded subway, you should immediately ______.",
    "options": [
      "shout",
      "apologize",
      "steal",
      "rob"
    ],
    "answer": 1,
    "cn": "如果你在擁擠的捷運上不小心踩到了別人的腳，你應該立即道歉。 【選項解析】(A) apologize 道歉  (B) shout 大喊  (C) steal 偷竊  (D) rob 搶劫。失禮時應 apologize。",
    "vocabIndex": 4
  },
  {
    "q": "The luxury resort offers delicious buffets and spacious swimming pools designed to ______ every holiday guest.",
    "options": [
      "ruin",
      "waste",
      "bark",
      "satisfy"
    ],
    "answer": 3,
    "cn": "這家豪華度假村提供美味的自助餐和寬敞的泳池，旨在滿足每位度假賓客的需求。 【選項解析】(A) ruin 毀滅  (B) waste 浪費  (C) satisfy 滿足  (D) bark 叫。satisfy guests 指「使賓客滿意」。",
    "vocabIndex": 5
  },
  {
    "q": "The armed bandits planned to ______ the gold delivery van as it drove through the lonely mountain tunnel.",
    "options": [
      "rob",
      "regret",
      "apologize",
      "shout"
    ],
    "answer": 0,
    "cn": "這夥持械強盜企圖在運金貨車駛過僻靜的山間隧道時實施搶劫。 【選項解析】(A) apologize 道歉  (B) regret 後悔  (C) rob 搶劫  (D) shout 呼喊。強行掠奪車輛為 rob the van。",
    "vocabIndex": 6
  },
  {
    "q": "The security guard saw a suspicious teenager try to ______ a leather wallet from a customer's open backpack.",
    "options": [
      "bark",
      "blame",
      "steal",
      "satisfy"
    ],
    "answer": 2,
    "cn": "警衛看到一名可疑的青少年企圖從顧客敞開的背包中偷走一個皮夾。 【選項解析】(A) bark 吠叫  (B) steal 偷竊  (C) blame 責怪  (D) satisfy 滿足。暗中竊取財物用 steal。",
    "vocabIndex": 7
  },
  {
    "q": "Spending hours browsing social media on your smartphone without studying is an unfortunate ______ of precious time.",
    "options": [
      "shout",
      "bark",
      "blame",
      "waste"
    ],
    "answer": 3,
    "cn": "花好幾個小時在智慧型手機上瀏覽社群媒體而不讀書，是對寶貴時間的一種遺憾浪費。 【選項解析】(A) shout 大喊  (B) bark 吠叫  (C) waste 浪費  (D) blame 責備。a waste of time 指「浪費時間」。",
    "vocabIndex": 8
  },
  {
    "q": "Spilling black coffee across the official contract will completely ______ the document, so be very careful.",
    "options": [
      "ruin",
      "satisfy",
      "regret",
      "apologize"
    ],
    "answer": 0,
    "cn": "把黑咖啡潑在正式合約上會徹底毀了這份文件，所以要非常小心。 【選項解析】(A) apologize 道歉  (B) satisfy 滿足  (C) regret 遺憾  (D) ruin 毀壞。破壞物品完整用 ruin。",
    "vocabIndex": 9
  },
  {
    "q": "Hearing the stray dog ______ aggressively in the alley made the little children stop and turn around.",
    "options": [
      "waste",
      "steal",
      "bark",
      "rob"
    ],
    "answer": 2,
    "cn": "聽到巷子裡流浪狗攻擊性地狂吠，讓小孩子們停下腳步並轉身折返。 【選項解析】(A) bark 吠叫  (B) steal 偷竊  (C) waste 浪費  (D) rob 搶劫。狗叫用 bark。",
    "vocabIndex": 0
  },
  {
    "q": "The coach had to ______ across the soccer field because the strong wind carried his voice away.",
    "options": [
      "blame",
      "shout",
      "regret",
      "ruin"
    ],
    "answer": 1,
    "cn": "教練不得不對著整個足球場大喊，因為強風把他的聲音吹散了。 【選項解析】(A) blame 責備  (B) shout 大喊  (C) regret 遺憾  (D) ruin 毀壞。遠距離傳話用 shout。",
    "vocabIndex": 1
  },
  {
    "q": "Don't ______ the weather for your poor grades when you didn't spend enough time reading your textbooks.",
    "options": [
      "blame",
      "rob",
      "satisfy",
      "apologize"
    ],
    "answer": 0,
    "cn": "當你沒有花足夠的時間閱讀教科書時，不要把成績差歸咎於天氣。 【選項解析】(A) satisfy 滿足  (B) rob 搶劫  (C) blame 歸咎  (D) apologize 道歉。推卸責任用 blame。",
    "vocabIndex": 2
  },
  {
    "q": "Mr. Davis has lived an honest life and stated that he had no major ______ about his career choices.",
    "options": [
      "shouts",
      "barks",
      "wastes",
      "regrets"
    ],
    "answer": 3,
    "cn": "戴維斯先生過著光明磊落的生活，並表示他對自己的職業選擇沒有重大遺憾。 【選項解析】(A) shouts 叫喊  (B) barks 吠叫  (C) regrets 遺憾  (D) wastes 浪費。have no regrets 指「沒有遺憾」。",
    "vocabIndex": 3
  },
  {
    "q": "The airline representative stepped forward to ______ for the four-hour flight delay caused by mechanical issues.",
    "options": [
      "steal",
      "apologize",
      "rob",
      "ruin"
    ],
    "answer": 1,
    "cn": "航空公司代表上前為機械問題導致的四小時航班延誤致歉。 【選項解析】(A) apologize 致歉  (B) steal 偷  (C) rob 搶劫  (D) ruin 毀滅。向旅客致歉為 apologize。",
    "vocabIndex": 4
  },
  {
    "q": "A cold glass of fresh watermelon juice on a scorching summer afternoon will certainly ______ your thirst.",
    "options": [
      "waste",
      "blame",
      "satisfy",
      "shout"
    ],
    "answer": 2,
    "cn": "在炎炎夏日午後喝上一杯冰涼的新鮮西瓜汁，肯定能消除你的乾渴。 【選項解析】(A) waste 浪費  (B) blame 責備  (C) satisfy 解渴；滿足  (D) shout 呼叫。satisfy one's thirst 指「解渴」。",
    "vocabIndex": 5
  },
  {
    "q": "Two masked suspects were arrested by detectives after attempting to ______ a downtown jewelry store.",
    "options": [
      "rob",
      "apologize",
      "regret",
      "bark"
    ],
    "answer": 0,
    "cn": "兩名蒙面嫌犯在企圖搶劫市中心一家珠寶店後，被刑警逮捕。 【選項解析】(A) apologize 道歉  (B) rob 搶劫  (C) regret 後悔  (D) bark 叫。暴力搶劫商店為 rob a store。",
    "vocabIndex": 6
  },
  {
    "q": "Somebody managed to ______ my bicycle from outside the library while I was studying in the reading room.",
    "options": [
      "bark",
      "steal",
      "blame",
      "satisfy"
    ],
    "answer": 1,
    "cn": "當我在閱覽室讀書時，有人設法從圖書館外偷走了我的自行車。 【選項解析】(A) steal 偷走  (B) bark 吠叫  (C) blame 責怪  (D) satisfy 滿足。竊取腳踏車為 steal my bicycle。",
    "vocabIndex": 7
  },
  {
    "q": "Leaving the air conditioner running when nobody is at home will ______ an enormous amount of electricity.",
    "options": [
      "shout",
      "rob",
      "apologize",
      "waste"
    ],
    "answer": 3,
    "cn": "家裡沒人時開著冷氣會浪費大量的電力。 【選項解析】(A) shout 叫喊  (B) waste 浪費  (C) apologize 道歉  (D) rob 搶劫。虛耗能源為 waste electricity。",
    "vocabIndex": 8
  },
  {
    "q": "Careless rumors and untrue gossip can easily ______ an innocent person's reputation within the community.",
    "options": [
      "satisfy",
      "apologize",
      "ruin",
      "bark"
    ],
    "answer": 2,
    "cn": "粗心的謠言和不真實的八卦很容易毀掉一個無辜者在社區中的名譽。 【選項解析】(A) satisfy 滿足  (B) apologize 道歉  (C) ruin 毀掉  (D) bark 吠叫。敗壞名譽為 ruin reputation。",
    "vocabIndex": 9
  },
  {
    "q": "The watchdog started to ______ the moment the delivery worker stepped onto the front driveway.",
    "options": [
      "waste",
      "rob",
      "steal",
      "bark"
    ],
    "answer": 3,
    "cn": "送貨員踏上前車道的那一刻，看門狗就開始吠叫了。 【選項解析】(A) bark 吠叫  (B) rob 搶劫  (C) steal 偷  (D) waste 浪費。看門犬鳴吠為 bark。",
    "vocabIndex": 0
  },
  {
    "q": "When Tommy got separated from his mother in the supermarket, he began to cry and ______ her name.",
    "options": [
      "regret",
      "blame",
      "shout",
      "satisfy"
    ],
    "answer": 2,
    "cn": "湯米在超市與母親走散時，他開始哭泣並大聲呼喊母親的名字。 【選項解析】(A) shout 呼喊  (B) blame 責備  (C) regret 遺憾  (D) satisfy 滿足。大聲叫名字為 shout her name。",
    "vocabIndex": 1
  },
  {
    "q": "It is unfair to place all the ______ on the goalkeeper when the whole team played poorly during the game.",
    "options": [
      "shout",
      "blame",
      "waste",
      "bark"
    ],
    "answer": 1,
    "cn": "當整支球隊在比賽中表現都很差時，把所有的責難都推到守門員身上是不公平的。 【選項解析】(A) shout 叫喊  (B) blame 責難  (C) waste 浪費  (D) bark 狗叫。承擔過錯為 place the blame on。",
    "vocabIndex": 2
  },
  {
    "q": "The bank cashier pressed the silent panic button when the criminal threatened to ______ the teller counter.",
    "options": [
      "rob",
      "regret",
      "satisfy",
      "apologize"
    ],
    "answer": 0,
    "cn": "當歹徒威脅要搶劫出納櫃台時，銀行出納員按下了無聲緊急報警按鈕。 【選項解析】(A) apologize 道歉  (B) regret 後悔  (C) satisfy 滿足  (D) rob 搶劫。搶劫銀行櫃台為 rob the counter。",
    "vocabIndex": 6
  },
  {
    "q": "Moisture and mold will ______ the antique paper manuscripts if they are not stored in a dry room.",
    "options": [
      "blame",
      "apologize",
      "ruin",
      "shout"
    ],
    "answer": 2,
    "cn": "如果不將古董紙質手稿保存在乾燥的房間裡，潮氣和黴菌將會毀了它們。 【選項解析】(A) ruin 毀損  (B) apologize 道歉  (C) blame 責怪  (D) shout 叫喊。損壞文物為 ruin manuscripts。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "bark": {
    "pos": "v. / n.",
    "en_def": "the loud harsh cry of a dog; to make this sound",
    "cn_def": "狗叫；吠叫",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "the loud harsh cry of a dog; to make this sound",
        "cn_def": "狗叫；吠叫"
      }
    ]
  },
  "shout": {
    "pos": "v. / n.",
    "en_def": "to utter a loud cry or call; a loud cry",
    "cn_def": "大喊；呼喊",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to utter a loud cry or call; a loud cry",
        "cn_def": "大喊；呼喊"
      }
    ]
  },
  "blame": {
    "pos": "v. / n.",
    "en_def": "to hold responsible for a fault or wrong; responsibility",
    "cn_def": "責怪；歸咎",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to hold responsible for a fault or wrong; responsibility",
        "cn_def": "責怪；歸咎"
      }
    ]
  },
  "regret": {
    "pos": "v. / n.",
    "en_def": "to feel sorry about something that occurred",
    "cn_def": "後悔；遺憾",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to feel sorry about something that occurred",
        "cn_def": "後悔；遺憾"
      }
    ]
  },
  "apologize": {
    "pos": "v.",
    "en_def": "to express regret for something that one has done wrong",
    "cn_def": "道歉",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to express regret for something that one has done wrong",
        "cn_def": "道歉"
      }
    ]
  },
  "satisfy": {
    "pos": "v.",
    "en_def": "to meet the expectations, needs, or desires of someone",
    "cn_def": "使滿意；滿足",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to meet the expectations, needs, or desires of someone",
        "cn_def": "使滿意；滿足"
      }
    ]
  },
  "rob": {
    "pos": "v.",
    "en_def": "to take property unlawfully from a person or place by force",
    "cn_def": "搶劫",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take property unlawfully from a person or place by force",
        "cn_def": "搶劫"
      }
    ]
  },
  "steal": {
    "pos": "v.",
    "en_def": "to take another person's property without permission",
    "cn_def": "偷竊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take another person's property without permission",
        "cn_def": "偷竊"
      }
    ]
  },
  "waste": {
    "pos": "v. / n.",
    "en_def": "to use or expend carelessly or to no purpose",
    "cn_def": "浪費；廢棄物",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to use or expend carelessly or to no purpose",
        "cn_def": "浪費；廢棄物"
      }
    ]
  },
  "ruin": {
    "pos": "v. / n.",
    "en_def": "to destroy, damage severely, or spoil something completely",
    "cn_def": "毀滅；毀壞",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to destroy, damage severely, or spoil something completely",
        "cn_def": "毀滅；毀壞"
      }
    ]
  },
  "shouts": {
    "pos": "",
    "en_def": "",
    "cn_def": "叫喊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "叫喊"
      }
    ]
  },
  "barks": {
    "pos": "",
    "en_def": "",
    "cn_def": "吠叫",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "吠叫"
      }
    ]
  },
  "wastes": {
    "pos": "",
    "en_def": "",
    "cn_def": "浪費",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "浪費"
      }
    ]
  },
  "regrets": {
    "pos": "",
    "en_def": "",
    "cn_def": "遺憾",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "遺憾"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
