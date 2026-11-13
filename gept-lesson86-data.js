// Lesson 86 Quiz Data: Daily Records, Cable Communications, Science & Humanitarian Aid
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 86 - Daily Records, Cable Communications, Science & Humanitarian Aid",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accident",
    "pos": "n.",
    "cn_def": "意外；交通事故",
    "en_def": "an unexpected event that causes damage or injury",
    "sentence": "Because the mountain road was very slippery from the rain, a minor traffic {{BLANK}} occurred between two delivery trucks yesterday.",
    "cn": "由於山路因雨變得十分濕滑，昨天兩輛貨車之間發生了一起輕微的交通事故。"
  },
  {
    "word": "album",
    "pos": "n.",
    "cn_def": "相簿；音樂專輯",
    "en_def": "a book for keeping photographs or stamps; a collection of audio tracks",
    "sentence": "Grandmother opened the dusty photo {{BLANK}} on her lap and showed the young children black-and-white pictures of their ancestors.",
    "cn": "祖母在大腿上打開積滿灰塵的相簿，給小孩子們看他們祖先的黑白照片。"
  },
  {
    "word": "diary",
    "pos": "n.",
    "cn_def": "日記",
    "en_def": "a book in which you record your daily thoughts and experiences",
    "sentence": "Ever since she entered junior high school, Emily has kept a private {{BLANK}} to record her personal feelings and daily school life.",
    "cn": "自從進入初中以來，艾蜜莉一直寫私人日記來記錄她的個人感受和日常學校生活。"
  },
  {
    "word": "cable",
    "pos": "n.",
    "cn_def": "電纜；有線電視",
    "en_def": "a strong, thick rope of wire; television signals sent through wires",
    "sentence": "The technical worker carefully replaced the damaged underground telephone {{BLANK}} to restore internet connections across the town.",
    "cn": "技術工人小心地更換了受損的地下電話電纜，以恢復全鎮的網際網路連線。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "主要的；首要的；初等的",
    "en_def": "more important than anything else; basic or earliest",
    "sentence": "The {{BLANK}} goal of the national environmental project is to reduce greenhouse gas emissions and protect natural water resources.",
    "cn": "國家環境專案的首要目標是減少溫室氣體排放並保護自然水資源。"
  },
  {
    "word": "chemical",
    "pos": "adj. / n.",
    "cn_def": "化學的；化學品",
    "en_def": "relating to chemistry; a substance produced by or used in chemistry",
    "sentence": "Factory workers must wear thick protective rubber gloves when handling hazardous {{BLANK}} liquids in the research laboratory.",
    "cn": "工廠工人在研究實驗室處理危險化學液體時，必須戴上厚實的橡膠防護手套。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤；失誤",
    "en_def": "a mistake, especially one that causes problems",
    "sentence": "Because of a typographical {{BLANK}} in the bank transaction system, the accountant spent three hours rechecking all the balances.",
    "cn": "由於銀行交易系統中的排印錯誤，會計師花了三個小時重新檢查所有餘額。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯；缺點；故障",
    "en_def": "responsibility for a mistake or bad situation; a weakness",
    "sentence": "It was entirely my {{BLANK}} that the front glass door was left unlocked overnight, and I sincerely apologize to my coworkers.",
    "cn": "前玻璃門整夜未鎖完全是我的過錯，我由衷向我的同事們道歉。"
  },
  {
    "word": "false",
    "pos": "adj.",
    "cn_def": "錯誤的；假的；虛偽的",
    "en_def": "not true or correct; artificial",
    "sentence": "Spreading {{BLANK}} rumors about other students on social media platforms is considered cyberbullying and will be punished by school rules.",
    "cn": "在社群媒體平台上散佈關於其他學生的虛假謠言被視為網路霸凌，將受到校規懲處。"
  },
  {
    "word": "aid",
    "pos": "n. / v.",
    "cn_def": "援助；救援；幫助",
    "en_def": "help, support, or financial assistance; to help someone",
    "sentence": "International humanitarian organizations sent medical teams and emergency food {{BLANK}} to the victims of the severe earthquake.",
    "cn": "國際人道組織向強烈地震的災民派遣了醫療隊和緊急糧食援助。"
  }
];

const MCQS = [
  {
    "q": "Fortunately, nobody was seriously injured in the highway car ______ this morning, but both vehicles sustained heavy front-end damage.",
    "options": [
      "cable",
      "album",
      "diary",
      "accident"
    ],
    "answer": 3,
    "cn": "幸運的是，在今天早上的國道車禍中沒有人受重傷，但兩輛車的前端都嚴重受損。 【選項解析】(A) accident 車禍  (B) album 相簿  (C) diary 日記  (D) cable 電纜。國道車禍為 highway car accident。",
    "vocabIndex": 0
  },
  {
    "q": "The famous Taiwanese pop band released their tenth studio ______ today, and thousands of fans queued overnight at the music store.",
    "options": [
      "album",
      "accident",
      "diary",
      "cable"
    ],
    "answer": 0,
    "cn": "這支著名的台灣流行樂團今天發行了他們的第十張錄音室專輯，數千名歌迷在唱片行連夜排隊。 【選項解析】(A) accident 意外  (B) album 專輯  (C) diary 日記  (D) cable 電纜。發行錄音室專輯為 studio album。",
    "vocabIndex": 1
  },
  {
    "q": "Writing in a personal ______ before going to sleep helps many people organize their thoughts and reduce stress after work.",
    "options": [
      "cable",
      "diary",
      "accident",
      "album"
    ],
    "answer": 1,
    "cn": "在睡前寫私人日記有助於許多人整理思緒，並減輕下班後的壓力。 【選項解析】(A) cable 電纜  (B) accident 意外  (C) diary 日記  (D) album 相簿。寫日記為 write in a diary。",
    "vocabIndex": 2
  },
  {
    "q": "Underground fiber-optic ______ networks transmit vast amounts of digital data across the world in just milliseconds.",
    "options": [
      "diary",
      "album",
      "cable",
      "accident"
    ],
    "answer": 2,
    "cn": "地下光纖電纜網路僅在幾毫秒內就能在全世界傳輸大量的數位數據。 【選項解析】(A) diary 日記  (B) album 相簿  (C) accident 意外  (D) cable 電纜。光纖電纜為 fiber-optic cable。",
    "vocabIndex": 3
  },
  {
    "q": "Ensuring the physical safety of young school children is the ______ duty of all teachers and school security guards.",
    "options": [
      "aid",
      "chemical",
      "false",
      "primary"
    ],
    "answer": 3,
    "cn": "確保學童的人身安全是所有教師和學校警衛的首要職責。 【選項解析】(A) primary 首要的  (B) chemical 化學的  (C) false 虛假的  (D) aid 援助。首要職責為 primary duty。",
    "vocabIndex": 4
  },
  {
    "q": "Household cleaning products often contain strong ______ substances that should never be swallowed or splashed into eyes.",
    "options": [
      "primary",
      "false",
      "chemical",
      "aid"
    ],
    "answer": 2,
    "cn": "家用清潔產品通常含有強烈化學物質，絕不可吞食或濺入眼睛。 【選項解析】(A) primary 首要的  (B) false 錯誤的  (C) chemical 化學的  (D) aid 援助。化學物質為 chemical substances。",
    "vocabIndex": 5
  },
  {
    "q": "The programmer spent the entire afternoon reviewing code lines to locate a minor mathematical ______ that crashed the application.",
    "options": [
      "fault",
      "error",
      "aid",
      "cable"
    ],
    "answer": 1,
    "cn": "程式設計師花了一整個下午檢查程式碼行，以找出導致應用程式崩潰的微小數學錯誤。 【選項解析】(A) error 錯誤  (B) fault 過錯  (C) aid 援助  (D) cable 電纜。系統運算錯誤為 mathematical error。",
    "vocabIndex": 6
  },
  {
    "q": "The driver admitted that the road collision was his own ______ because he was looking at his smartphone instead of watching traffic.",
    "options": [
      "fault",
      "error",
      "aid",
      "album"
    ],
    "answer": 0,
    "cn": "司機承認這起道路碰撞是他自己的過錯，因為他在看智慧型手機而不是注意路況。 【選項解析】(A) error 錯誤  (B) fault 過錯  (C) aid 援助  (D) album 相簿。某人承擔的過錯責任為 one's own fault。",
    "vocabIndex": 7
  },
  {
    "q": "The dishonest merchant gave customers ______ information regarding the origin of the meat products, which led to a heavy government fine.",
    "options": [
      "primary",
      "false",
      "chemical",
      "aid"
    ],
    "answer": 1,
    "cn": "不誠實的商家向顧客提供了有關肉類產品來源的虛假訊息，導致了政府的巨額罰款。 【選項解析】(A) primary 主要的  (B) chemical 化學的  (C) false 虛假的  (D) aid 援助。虛假不實訊息為 false information。",
    "vocabIndex": 8
  },
  {
    "q": "The government provided emergency financial ______ to small business owners who suffered heavy losses during the pandemic.",
    "options": [
      "accident",
      "error",
      "fault",
      "aid"
    ],
    "answer": 3,
    "cn": "政府向在疫情期間遭受嚴重損失的小企業主提供了緊急財政援助。 【選項解析】(A) aid 援助  (B) error 錯誤  (C) fault 過錯  (D) accident 事故。緊急財政援助為 emergency financial aid。",
    "vocabIndex": 9
  },
  {
    "q": "Always wear your seatbelt when driving on the expressway, for it can save your life in the event of a sudden ______.",
    "options": [
      "diary",
      "album",
      "accident",
      "cable"
    ],
    "answer": 2,
    "cn": "在快速道路上行駛時務必繫好安全帶，因為在發生突發事故時它能挽救你的生命。 【選項解析】(A) accident 事故  (B) album 相簿  (C) diary 日記  (D) cable 電纜。突發交通事故為 sudden accident。",
    "vocabIndex": 0
  },
  {
    "q": "During my summer visit to grandfather's farm, he opened an old family ______ and showed me photos of my mother as a toddler.",
    "options": [
      "album",
      "accident",
      "diary",
      "cable"
    ],
    "answer": 0,
    "cn": "在夏天拜訪祖父的農場時，他打開了一本舊家庭相簿，給我看了我母親蹣跚學步時的照片。 【選項解析】(A) accident 事故  (B) album 相簿  (C) diary 日記  (D) cable 電纜。家庭照片簿為 family album。",
    "vocabIndex": 1
  },
  {
    "q": "Anne Frank's wartime ______ has been translated into dozens of languages and read by millions of people across the globe.",
    "options": [
      "cable",
      "diary",
      "accident",
      "album"
    ],
    "answer": 1,
    "cn": "安妮·法蘭克的戰時日記已被翻譯成數十種語言，並被全球數百萬人閱讀。 【選項解析】(A) cable 電纜  (B) accident 意外  (C) diary 日記  (D) album 相簿。戰時日記為 wartime diary。",
    "vocabIndex": 2
  },
  {
    "q": "Severe stormy winds knocked down several electrical ______ poles along the coast, cutting off electricity to hundreds of homes.",
    "options": [
      "cable",
      "album",
      "accident",
      "diary"
    ],
    "answer": 0,
    "cn": "猛烈的狂風吹倒了沿海的幾根電線桿，導致數百戶家庭斷電。 【選項解析】(A) diary 日記  (B) album 相簿  (C) accident 意外  (D) cable 電纜。電纜電線為 electrical cable。",
    "vocabIndex": 3
  },
  {
    "q": "Learning foundational phonics and vocabulary forms the ______ foundation of foreign language acquisition in elementary education.",
    "options": [
      "false",
      "chemical",
      "primary",
      "aid"
    ],
    "answer": 2,
    "cn": "學習基礎自然發音和單字構成了小學教育中外語習得的基礎基石。 【選項解析】(A) primary 初級的/主要的  (B) chemical 化學的  (C) false 虛假的  (D) aid 援助。主要基礎為 primary foundation。",
    "vocabIndex": 4
  },
  {
    "q": "Never mix bleach with other ______ cleaners in the bathroom, as the reaction can produce dangerous poisonous gases.",
    "options": [
      "primary",
      "false",
      "aid",
      "chemical"
    ],
    "answer": 3,
    "cn": "絕不要在浴室將漂白水與其他化學清潔劑混合，因為化學反應會產生危險的有毒氣體。 【選項解析】(A) primary 主要的  (B) false 虛假的  (C) chemical 化學的  (D) aid 援助。化學清潔劑為 chemical cleaners。",
    "vocabIndex": 5
  },
  {
    "q": "Due to a small computer system ______, the flight departure time was displayed incorrectly on the airport information screens.",
    "options": [
      "fault",
      "error",
      "aid",
      "cable"
    ],
    "answer": 1,
    "cn": "由於電腦系統的一個小錯誤，機場資訊螢幕上的航班起飛時間顯示有誤。 【選項解析】(A) error 錯誤  (B) fault 過失  (C) aid 援助  (D) cable 電纜。系統出錯為 system error。",
    "vocabIndex": 6
  },
  {
    "q": "Although the machinery broke down suddenly during operation, the technician explained that it was not the worker's ______.",
    "options": [
      "fault",
      "error",
      "aid",
      "album"
    ],
    "answer": 0,
    "cn": "儘管機械在運轉過程中突然發生故障，但技術人員解釋說這不是工人的過錯。 【選項解析】(A) error 錯誤  (B) fault 過失  (C) aid 援助  (D) album 相片簿。不是某人的錯用 not sb's fault。",
    "vocabIndex": 7
  },
  {
    "q": "Giving ______ statements to a police officer during a criminal investigation is considered a serious legal offense.",
    "options": [
      "primary",
      "chemical",
      "aid",
      "false"
    ],
    "answer": 3,
    "cn": "在刑事調查期間向警官提供虛假口供被視為嚴重的違法行為。 【選項解析】(A) primary 主要的  (B) chemical 化學的  (C) false 虛假的  (D) aid 援助。虛假口供為 false statements。",
    "vocabIndex": 8
  },
  {
    "q": "The Red Cross delivered first ______ kits containing bandages, antiseptic creams, and pain relievers to the disaster shelters.",
    "options": [
      "fault",
      "error",
      "aid",
      "accident"
    ],
    "answer": 2,
    "cn": "紅十字會向災民安置所運送了裝有繃帶、消毒藥膏和止痛藥的急救箱。 【選項解析】(A) aid 急救/援助  (B) error 錯誤  (C) fault 過錯  (D) accident 事故。急救箱為 first aid kit。",
    "vocabIndex": 9
  },
  {
    "q": "The reckless driver ran a red light at the intersection and caused a serious traffic ______ that blocked the street for two hours.",
    "options": [
      "accident",
      "album",
      "diary",
      "cable"
    ],
    "answer": 0,
    "cn": "魯莽的司機在十字路口闖紅燈，引發了一場嚴重的交通事故，導致街道封閉了兩小時。 【選項解析】(A) accident 車禍  (B) album 相簿  (C) diary 日記  (D) cable 電纜。交通事故為 traffic accident。",
    "vocabIndex": 0
  },
  {
    "q": "The bride and groom designed a commemorative wedding ______ featuring color photographs taken during their European honeymoon trip.",
    "options": [
      "accident",
      "album",
      "diary",
      "cable"
    ],
    "answer": 1,
    "cn": "新郎和新娘設計了一本紀念婚禮相簿，收錄了他們歐洲蜜月旅行期間拍攝的彩色照片。 【選項解析】(A) accident 事故  (B) album 相簿  (C) diary 日記  (D) cable 電纜。紀念婚禮相簿為 wedding album。",
    "vocabIndex": 1
  },
  {
    "q": "The captain kept a detailed ship's ______ that recorded every ocean storm, navigation coordinate, and daily distance traveled.",
    "options": [
      "cable",
      "accident",
      "diary",
      "album"
    ],
    "answer": 2,
    "cn": "船長保持著詳細的船隻日誌，記錄了每次海洋暴風雨、航海座標和每日航行里程。 【選項解析】(A) cable 電纜  (B) accident 意外  (C) diary 日記/日誌  (D) album 相簿。航海日誌記錄為 ship's diary。",
    "vocabIndex": 2
  },
  {
    "q": "The computer monitor was connected to the desktop computer tower by a heavy black video ______ under the desk.",
    "options": [
      "diary",
      "album",
      "accident",
      "cable"
    ],
    "answer": 3,
    "cn": "電腦螢幕通過書桌下一條粗粗的黑色視訊電纜與桌上型電腦主機相連。 【選項解析】(A) diary 日記  (B) album 相簿  (C) accident 意外  (D) cable 連接線。視訊傳輸線為 video cable。",
    "vocabIndex": 3
  },
  {
    "q": "Preventing teenage smoking and alcohol consumption is the ______ objective of our school health education program this semester.",
    "options": [
      "false",
      "chemical",
      "primary",
      "aid"
    ],
    "answer": 2,
    "cn": "預防青少年吸菸和飲酒是我們學校本學期健康教育計畫的首要目標。 【選項解析】(A) primary 首要的  (B) chemical 化學的  (C) false 虛假的  (D) aid 援助。首要目標為 primary objective。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "accident": {
    "pos": "n.",
    "en_def": "an unexpected event that causes damage or injury",
    "cn_def": "意外；交通事故",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unexpected event that causes damage or injury",
        "cn_def": "意外；交通事故"
      }
    ]
  },
  "album": {
    "pos": "n.",
    "en_def": "a book for keeping photographs or stamps; a collection of audio tracks",
    "cn_def": "相簿；音樂專輯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a book for keeping photographs or stamps; a collection of audio tracks",
        "cn_def": "相簿；音樂專輯"
      }
    ]
  },
  "diary": {
    "pos": "n.",
    "en_def": "a book in which you record your daily thoughts and experiences",
    "cn_def": "日記",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a book in which you record your daily thoughts and experiences",
        "cn_def": "日記"
      }
    ]
  },
  "cable": {
    "pos": "n.",
    "en_def": "a strong, thick rope of wire; television signals sent through wires",
    "cn_def": "電纜；有線電視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong, thick rope of wire; television signals sent through wires",
        "cn_def": "電纜；有線電視"
      }
    ]
  },
  "primary": {
    "pos": "adj.",
    "en_def": "more important than anything else; basic or earliest",
    "cn_def": "主要的；首要的；初等的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "more important than anything else; basic or earliest",
        "cn_def": "主要的；首要的；初等的"
      }
    ]
  },
  "chemical": {
    "pos": "adj. / n.",
    "en_def": "relating to chemistry; a substance produced by or used in chemistry",
    "cn_def": "化學的；化學品",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to chemistry; a substance produced by or used in chemistry",
        "cn_def": "化學的；化學品"
      }
    ]
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake, especially one that causes problems",
    "cn_def": "錯誤；失誤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mistake, especially one that causes problems",
        "cn_def": "錯誤；失誤"
      }
    ]
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for a mistake or bad situation; a weakness",
    "cn_def": "過錯；缺點；故障",
    "combined": [
      {
        "pos": "n.",
        "en_def": "responsibility for a mistake or bad situation; a weakness",
        "cn_def": "過錯；缺點；故障"
      }
    ]
  },
  "false": {
    "pos": "adj.",
    "en_def": "not true or correct; artificial",
    "cn_def": "錯誤的；假的；虛偽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not true or correct; artificial",
        "cn_def": "錯誤的；假的；虛偽的"
      }
    ]
  },
  "aid": {
    "pos": "n. / v.",
    "en_def": "help, support, or financial assistance; to help someone",
    "cn_def": "援助；救援；幫助",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "help, support, or financial assistance; to help someone",
        "cn_def": "援助；救援；幫助"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
