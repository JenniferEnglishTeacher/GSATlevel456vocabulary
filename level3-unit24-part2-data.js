// Part 2 Quiz Data: dizzy – interrupt
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 24-2 - dizzy – interrupt",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dizzy",
    "pos": "adj.",
    "cn_def": "頭暈目眩的；令人頭暈的",
    "en_def": "having a sensation of spinning and losing one's balance; causing vertigo",
    "sentence": "After spinning quickly on the amusement park ride, the young boy felt so {{BLANK}} that he had to sit on a bench.",
    "cn": "在遊樂園的遊樂設施上飛速旋轉後，小男孩感到非常頭暈，不得不坐在長凳上。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯；編校；剪輯",
    "en_def": "to prepare written or video material for publication by correcting or modifying",
    "sentence": "The creative director spent entire nights learning how to {{BLANK}} documentary footage using sophisticated computer software.",
    "cn": "這位創意總監整夜學習如何使用先進的電腦軟體來剪輯紀錄片毛片。"
  },
  {
    "word": "fountain",
    "pos": "n.",
    "cn_def": "噴水池；飲水器；泉源",
    "en_def": "an ornamental structure in a pool jetting water; an abundant source",
    "sentence": "Enchanted visitors gathered around the ornate marble {{BLANK}} in the central square to toss shiny coins and make wishes.",
    "cn": "著迷的遊客聚集在中央廣場華麗的大理石噴泉周圍，丟擲閃亮的硬幣並許下願望。"
  },
  {
    "word": "headlines",
    "pos": "n./v.",
    "cn_def": "頭條新聞；大字標題 (n.)；為…加標題；主演 (v.)",
    "en_def": "a heading at the top of an article or page in a newspaper; to star in",
    "sentence": "The historic peace treaty between the two conflicting nations made the {{BLANK}} across every major international publication.",
    "cn": "這兩個衝突國家之間簽署的歷史性和平條約，登上了各大主要國際刊物的頭條新聞。"
  },
  {
    "word": "heel",
    "pos": "n./v.",
    "cn_def": "腳後跟；鞋跟 (n.)；緊跟在後 (v.)",
    "en_def": "the back part of the human foot below the ankle; the rear part of a shoe",
    "sentence": "Although the brilliant mathematician solved complex formulas effortlessly, his lack of organizational discipline proved to be his Achilles' {{BLANK}}.",
    "cn": "雖然這位才華橫溢的數學家能毫不費力地解出複雜的公式，但他缺乏條理的紀律卻成了他的致命要害。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫；躊躇；遲疑",
    "en_def": "to pause before saying or doing something through doubt or indecision",
    "sentence": "If you encounter any technical difficulties during online examination registration, please do not {{BLANK}} to contact our customer support team. The brave lifeguard jumped into the stormy ocean current without a moment's hesitation to rescue the struggling swimmer.",
    "cn": "若您在線上考試報名過程中遇到任何技術困難，請毫不猶豫地聯絡我們的客戶支援團隊。 這位勇敢的救生員毫不猶豫地跳入狂暴的洋流中，奮力營救正在掙扎的泳客。"
  },
  {
    "word": "homesick",
    "pos": "adj.",
    "cn_def": "思鄉的；想家的",
    "en_def": "experiencing a longing for one's home during an absence from it",
    "sentence": "During her first semester studying abroad in London, Amanda felt terribly {{BLANK}} whenever she thought of her family and hometown cooking.",
    "cn": "在倫敦留學的第一個學期裡，每當想念家人與家鄉菜餚時，Amanda 都會感到極度想家。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷；打擾；中斷",
    "en_def": "to stop the continuous progress of an activity or speaker by interjecting",
    "sentence": "It is considered impolite in formal diplomatic negotiations to {{BLANK}} a speaker before they have completely finished expressing their perspective.",
    "cn": "在正式的外交談判中，在發言者完全陳述完觀點之前予以打斷，被視為極其失禮之舉。"
  }
];

const MCQS = [
  {
    "q": "After stepping off the roller coaster, the tourist felt so ______ that he had to sit quietly on a bench.",
    "options": [
      "dizzy",
      "homesick",
      "armed",
      "tight"
    ],
    "answer": 0,
    "cn": "從雲霄飛車上下來後，這位遊客感到非常頭暈，不得不靜靜地坐在長凳上。",
    "vocabIndex": 0
  },
  {
    "q": "The graduate student asked an experienced proofreader to ______ her dissertation before submitting it to the university committee.",
    "options": [
      "interrupt",
      "hesitate",
      "edit",
      "clothe"
    ],
    "answer": 2,
    "cn": "這位研究生請一位經驗豐富的校對員在將學位論文提交給大學審查委員會前進行編輯校訂。",
    "vocabIndex": 1
  },
  {
    "q": "Crowds of joyful tourists gathered around the historic central ______ to toss silver coins and make wishes.",
    "options": [
      "headline",
      "fountain",
      "heel",
      "breeze"
    ],
    "answer": 1,
    "cn": "成群歡欣的遊客聚集在歷史悠久的中央噴泉周圍丟擲銀幣並許願。",
    "vocabIndex": 2
  },
  {
    "q": "The shocking announcement of the corporate merger made the ______ across major financial newspapers worldwide.",
    "options": [
      "fountain",
      "heel",
      "crew",
      "headline"
    ],
    "answer": 3,
    "cn": "企業合併的震撼公告登上了全球各大財經報紙的頭條新聞。",
    "vocabIndex": 3
  },
  {
    "q": "The manager's chronic inability to delegate responsibilities proved to be his major Achilles' ______ in leadership.",
    "options": [
      "heel",
      "headline",
      "bacon",
      "fountain"
    ],
    "answer": 0,
    "cn": "該經理長期無法下放職責，證明是他領導能力上的一大阿基里斯腱（致命弱點）。",
    "vocabIndex": 4
  },
  {
    "q": "If you require any assistance regarding your travel itinerary, please do not ______ to reach out to our concierge desk.",
    "options": [
      "interrupt",
      "edit",
      "hesitate",
      "ditch"
    ],
    "answer": 2,
    "cn": "若您對行程有任何需要協助之處，請毫不猶豫地聯繫我們的服務台。",
    "vocabIndex": 5
  },
  {
    "q": "Spending the Lunar New Year holidays away from his family made the young soldier feel deeply ______.",
    "options": [
      "dizzy",
      "homesick",
      "armed",
      "tight"
    ],
    "answer": 1,
    "cn": "遠離家人度過農曆新年假期，讓這名年輕士兵感到深深地想家。",
    "vocabIndex": 6
  },
  {
    "q": "It is customary etiquette during academic debates never to ______ other participants while they present their arguments.",
    "options": [
      "hesitate",
      "edit",
      "clothe",
      "interrupt"
    ],
    "answer": 3,
    "cn": "在學術辯論中，其他與會者陳述論點時切勿打斷他們，這是一種習俗禮儀。",
    "vocabIndex": 7
  },
  {
    "q": "Standing at the edge of the towering canyon cliff caused the nervous hiker to experience a ______ sensation.",
    "options": [
      "junior",
      "homesick",
      "dizzy",
      "racial"
    ],
    "answer": 2,
    "cn": "站在高聳的峽谷懸崖邊緣，導致這位緊張的登山客體驗到了頭暈目眩的感覺。",
    "vocabIndex": 0
  },
  {
    "q": "Professional video creators rely on specialized software to ______ sound effects and color grading into their films.",
    "options": [
      "interrupt",
      "edit",
      "hesitate",
      "ditch"
    ],
    "answer": 1,
    "cn": "專業影片創作者依賴專用軟體將音效與調色編輯融入他們的電影中。",
    "vocabIndex": 1
  },
  {
    "q": "City authorities installed several clean drinking ______ throughout the public park for the convenience of joggers.",
    "options": [
      "ditches",
      "headlines",
      "heels",
      "fountains"
    ],
    "answer": 3,
    "cn": "市府當局在公共公園各處安裝了數台乾淨的飲水機，以方便慢跑者使用。",
    "vocabIndex": 2
  },
  {
    "q": "A bold front-page ______ in the national daily drew immediate attention to the government's tax reform package.",
    "options": [
      "headline",
      "heel",
      "breeze",
      "fountain"
    ],
    "answer": 0,
    "cn": "全國日報頭版上的顯著大標題立刻引發了大眾對政府稅制改革方案的關注。",
    "vocabIndex": 3
  },
  {
    "q": "The fashion model walked confidently down the runway wearing sparkling evening attire and four-inch high ______.",
    "options": [
      "fountains",
      "crews",
      "headlines",
      "heels"
    ],
    "answer": 3,
    "cn": "時裝模特兒自信地走在伸展台上，身著閃耀的晚禮服與四英吋的高跟鞋。",
    "vocabIndex": 4
  },
  {
    "q": "When the captain spotted a suspicious vessel approaching the harbor, he did not ______ to raise the defense alarm.",
    "options": [
      "hesitate",
      "edit",
      "interrupt",
      "clothe"
    ],
    "answer": 0,
    "cn": "當船長發現一艘可疑船隻靠近海港時，他毫不遲疑地拉響了防衛警報。",
    "vocabIndex": 5
  },
  {
    "q": "Far away from her parents during her first term at boarding school, the little girl often cried tears of ______ longing.",
    "options": [
      "dizzy",
      "armed",
      "homesick",
      "tight"
    ],
    "answer": 2,
    "cn": "在寄宿學校的第一個學期遠離父母，小女孩經常流下思鄉渴望的眼淚。",
    "vocabIndex": 6
  },
  {
    "q": "The professor kindly asked the students not to ______ the guest speaker with questions until the end of the presentation.",
    "options": [
      "edit",
      "interrupt",
      "clothe",
      "hesitate"
    ],
    "answer": 1,
    "cn": "教授親切地要求學生們在演講結束之前不要提出問題來打斷客座演講者。",
    "vocabIndex": 7
  },
  {
    "q": "The patient complained to the physician of feeling unexpectedly ______ after taking the prescribed blood pressure pills.",
    "options": [
      "dizzy",
      "homesick",
      "junior",
      "underlying"
    ],
    "answer": 0,
    "cn": "病患向醫師抱怨在服用處方降血壓藥物後感到出乎意料地頭暈。",
    "vocabIndex": 0
  },
  {
    "q": "Before publishing the comprehensive field guide, the editors spent months ______ the scientific classifications.",
    "options": [
      "hesitating",
      "ditching",
      "interrupting",
      "editing"
    ],
    "answer": 3,
    "cn": "在出版這份詳盡的野外圖鑑之前，編輯們花費了數月時間編修科學分類名稱。",
    "vocabIndex": 1
  },
  {
    "q": "The botanical garden features an exquisite musical ______ that shoots glowing streams of water synchronized with classical melodies.",
    "options": [
      "headline",
      "fountain",
      "heel",
      "dealer"
    ],
    "answer": 1,
    "cn": "植物園內擁有一座精緻的音樂噴泉，能噴射出與古典旋律同步的發光水流。",
    "vocabIndex": 2
  },
  {
    "q": "Stories regarding breakthrough renewable energy discoveries frequently dominate the ______ in global news outlets.",
    "options": [
      "fountains",
      "heels",
      "headlines",
      "crews"
    ],
    "answer": 2,
    "cn": "關於突破性再生能源發現的報導，頻繁佔據全球新聞媒體的頭條大版面。",
    "vocabIndex": 3
  },
  {
    "q": "Coming on the ______ of unexpected inflation figures, the central bank's rate hike caught many investors off guard.",
    "options": [
      "heels",
      "fountains",
      "headlines",
      "ditches"
    ],
    "answer": 0,
    "cn": "緊隨在出人意料的通膨數據之後，央行的升息讓許多投資人措手不及。",
    "vocabIndex": 4
  },
  {
    "q": "Should you feel uncertain about the contractual terms, do not ______ to seek advice from an independent legal consultant.",
    "options": [
      "interrupt",
      "clothe",
      "edit",
      "hesitate"
    ],
    "answer": 3,
    "cn": "若您對合約條款感到不確定，請毫不猶豫地向獨立法律顧問尋求建議。",
    "vocabIndex": 5
  },
  {
    "q": "The comforting taste of warm chicken broth gave immense joy to the ______ international student during winter.",
    "options": [
      "dizzy",
      "armed",
      "homesick",
      "tight"
    ],
    "answer": 2,
    "cn": "熱雞湯溫暖療癒的滋味，在寒冬中帶給這位思鄉的國際學生無比的喜悅。",
    "vocabIndex": 6
  },
  {
    "q": "A sudden power outage during the live television broadcast managed to ______ the presidential candidate's closing statement.",
    "options": [
      "hesitate",
      "interrupt",
      "clothe",
      "edit"
    ],
    "answer": 1,
    "cn": "現場電視直播期間的突然停電，意外打斷了總統候選人的結語陳詞。",
    "vocabIndex": 7
  },
  {
    "q": "Aspiring authors often find that ______ their own work is much harder than writing the initial creative draft.",
    "options": [
      "editing",
      "hesitating",
      "interrupting",
      "ditching"
    ],
    "answer": 0,
    "cn": "有抱負的作家常常發現，修改與潤飾自己的作品遠比撰寫最初的創作草稿更為困難。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "dizzy": {
    "pos": "adj.",
    "en_def": "having a sensation of spinning and losing one's balance; causing vertigo",
    "cn_def": "頭暈目眩的；令人頭暈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a sensation of spinning and losing one's balance; causing vertigo",
        "cn_def": "頭暈目眩的；令人頭暈的"
      }
    ]
  },
  "edit": {
    "pos": "v.",
    "en_def": "to prepare written or video material for publication by correcting or modifying",
    "cn_def": "編輯；編校；剪輯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to prepare written or video material for publication by correcting or modifying",
        "cn_def": "編輯；編校；剪輯"
      }
    ]
  },
  "fountain": {
    "pos": "n.",
    "en_def": "an ornamental structure in a pool jetting water; an abundant source",
    "cn_def": "噴水池；飲水器；泉源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ornamental structure in a pool jetting water; an abundant source",
        "cn_def": "噴水池；飲水器；泉源"
      }
    ]
  },
  "headline": {
    "pos": "n./v.",
    "en_def": "a heading at the top of an article or page in a newspaper; to star in",
    "cn_def": "頭條新聞；大字標題 (n.)；為…加標題；主演 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a heading at the top of an article or page in a newspaper; to star in",
        "cn_def": "頭條新聞；大字標題 (n.)；為…加標題；主演 (v.)"
      }
    ]
  },
  "headlines": {
    "pos": "n./v.",
    "en_def": "a heading at the top of an article or page in a newspaper; to star in",
    "cn_def": "頭條新聞；大字標題 (n.)；為…加標題；主演 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a heading at the top of an article or page in a newspaper; to star in",
        "cn_def": "頭條新聞；大字標題 (n.)；為…加標題；主演 (v.)"
      }
    ]
  },
  "heel": {
    "pos": "n./v.",
    "en_def": "the back part of the human foot below the ankle; the rear part of a shoe",
    "cn_def": "腳後跟；鞋跟 (n.)；緊跟在後 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the back part of the human foot below the ankle; the rear part of a shoe",
        "cn_def": "腳後跟；鞋跟 (n.)；緊跟在後 (v.)"
      }
    ]
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to pause before saying or doing something through doubt or indecision",
    "cn_def": "猶豫；躊躇；遲疑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pause before saying or doing something through doubt or indecision",
        "cn_def": "猶豫；躊躇；遲疑"
      }
    ]
  },
  "homesick": {
    "pos": "adj.",
    "en_def": "experiencing a longing for one's home during an absence from it",
    "cn_def": "思鄉的；想家的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "experiencing a longing for one's home during an absence from it",
        "cn_def": "思鄉的；想家的"
      }
    ]
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop the continuous progress of an activity or speaker by interjecting",
    "cn_def": "打斷；打擾；中斷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop the continuous progress of an activity or speaker by interjecting",
        "cn_def": "打斷；打擾；中斷"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
