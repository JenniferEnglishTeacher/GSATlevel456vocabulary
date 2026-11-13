// Lesson 49 Quiz Data: Global Geography, European & Eurasian Nations
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 49 - Global Geography, European & Eurasian Nations",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Philippines",
    "pos": "n.",
    "cn_def": "菲律賓",
    "en_def": "an archipelago country in Southeast Asia",
    "sentence": "The {{BLANK}} is famous for its crystal-clear waters and hundreds of beautiful tropical islands that attract divers.",
    "cn": "菲律賓因其清澈見底的海水和數百個吸引潛水愛好者的美麗熱帶島嶼而聞名。"
  },
  {
    "word": "Taiwan",
    "pos": "n.",
    "cn_def": "台灣",
    "en_def": "an island nation in East Asia known for technology and cuisine",
    "sentence": "People in {{BLANK}} are world-renowned for their hospitality, delicious night market snacks, and stunning mountain landscapes.",
    "cn": "台灣人以其熱情好客、美味的夜市小吃和壯麗的高山景觀聞名於世。"
  },
  {
    "word": "Taiwanese",
    "pos": "adj. / n.",
    "cn_def": "台灣的；台灣人；台語",
    "en_def": "relating to Taiwan, its people, or its local culture",
    "sentence": "Many foreign exchange students fall in love with traditional {{BLANK}} bubble tea and fried chicken cutlets.",
    "cn": "許多外國交換學生愛上了傳統的台灣珍珠奶茶與炸雞排。"
  },
  {
    "word": "Singapore",
    "pos": "n.",
    "cn_def": "新加坡",
    "en_def": "an island city-state in Southeast Asia known for cleanliness",
    "sentence": "Strict municipal laws and efficient public urban planning have made {{BLANK}} one of the cleanest green cities in the world.",
    "cn": "嚴格的市政法規與高效的公共城市規劃，使新加坡成為全球最乾淨的綠色城市之一。"
  },
  {
    "word": "Russia",
    "pos": "n.",
    "cn_def": "俄羅斯",
    "en_def": "the largest country in the world, spanning Eastern Europe and Northern Asia",
    "sentence": "Covering eleven distinct time zones across Eurasia, {{BLANK}} features vast snowy pine forests and rich historic architecture.",
    "cn": "俄羅斯橫跨歐亞大陸的十一個不同時區，擁有廣袤的雪白松樹林與豐富的歷史建築。"
  },
  {
    "word": "Russian",
    "pos": "adj. / n.",
    "cn_def": "俄羅斯的；俄羅斯人；俄語",
    "en_def": "relating to Russia, its people, or its language",
    "sentence": "Tchaikovsky was a brilliant {{BLANK}} composer whose classical ballet music continues to be performed across the globe.",
    "cn": "柴可夫斯基是一位才華洋溢的俄羅斯作曲家，他的古典芭蕾舞音樂繼續在全球各地演出。"
  },
  {
    "word": "Europe",
    "pos": "n.",
    "cn_def": "歐洲",
    "en_def": "a continent situated entirely in the Northern Hemisphere",
    "sentence": "Traveling across {{BLANK}} by passenger train allows tourists to explore multiple historic nations in a single summer trip.",
    "cn": "搭乘客運火車橫穿歐洲旅行，讓遊客能夠在一次暑期旅行中探索多個歷史悠久的國家。"
  },
  {
    "word": "European",
    "pos": "adj. / n.",
    "cn_def": "歐洲的；歐洲人",
    "en_def": "relating to Europe, its people, or its languages",
    "sentence": "The {{BLANK}} Union facilitates international trade, environmental cooperation, and peaceful travel among member nations.",
    "cn": "歐洲聯盟促進了成員國之間的國際貿易、環保合作與和平旅行。"
  },
  {
    "word": "Britain",
    "pos": "n.",
    "cn_def": "英國；大不列顛",
    "en_def": "the island comprising England, Scotland, and Wales",
    "sentence": "Great {{BLANK}} played a major role in the global Industrial Revolution during the eighteenth and nineteenth centuries.",
    "cn": "大不列顛在十八和十九世紀的全球工業革命中發揮了重大作用。"
  },
  {
    "word": "British",
    "pos": "adj. / n.",
    "cn_def": "英國的；英國人",
    "en_def": "relating to Great Britain or the United Kingdom",
    "sentence": "Enjoying afternoon tea with freshly baked scones and strawberry jam is a quintessential {{BLANK}} cultural tradition.",
    "cn": "享用帶有剛出爐司康餅與草莓果醬的下午茶，是一項典型的英國文化傳統。"
  }
];

const MCQS = [
  {
    "q": "During their round-the-world vacation, the family spent three weeks traveling through France, Italy, and Germany in ______.",
    "options": [
      "Russia",
      "Europe",
      "Singapore",
      "Taiwan"
    ],
    "answer": 1,
    "cn": "在環球假期期間，這家人花了三週時間穿行於歐洲的法國、義大利和德國。 【選項解析】(A) Europe 歐洲  (B) Russia 俄羅斯  (C) Singapore 新加坡  (D) Taiwan 台灣。法義德屬於 Europe。",
    "vocabIndex": 6
  },
  {
    "q": "The island of ______ is famous worldwide for producing advanced semiconductor computer chips and electronic hardware.",
    "options": [
      "Taiwan",
      "Russia",
      "Britain",
      "Europe"
    ],
    "answer": 0,
    "cn": "台灣這座島嶼因生產先進的半導體電腦晶片與電子硬體而舉世聞名。 【選項解析】(A) Taiwan 台灣  (B) Russia 俄羅斯  (C) Britain 英國  (D) Europe 歐洲。半導體重鎮為 Taiwan。",
    "vocabIndex": 1
  },
  {
    "q": "Many international financial corporations have regional headquarters established in the modern city-state of ______.",
    "options": [
      "Taiwan",
      "Russia",
      "Europe",
      "Singapore"
    ],
    "answer": 3,
    "cn": "許多國際金融機構在新加坡這座現代城市國家設立了區域總部。 【選項解析】(A) Singapore 新加坡  (B) Russia 俄羅斯  (C) Europe 歐洲  (D) Taiwan 台灣。現代城市島國為 Singapore。",
    "vocabIndex": 3
  },
  {
    "q": "Winter temperatures in northern regions of ______ can drop below minus forty degrees Celsius for months.",
    "options": [
      "Taiwan",
      "Singapore",
      "Russia",
      "Europe"
    ],
    "answer": 2,
    "cn": "俄羅斯北部地區冬季氣溫可能會連續數月降至攝氏零下四十度以下。 【選項解析】(A) Russia 俄羅斯  (B) Singapore 新加坡  (C) Taiwan 台灣  (D) Europe 歐洲。酷寒廣袤地區為 northern Russia。",
    "vocabIndex": 4
  },
  {
    "q": "Tropical storms often pass through the island archipelago of the ______ during the annual summer monsoon season.",
    "options": [
      "Philippines",
      "Russia",
      "Britain",
      "Europe"
    ],
    "answer": 0,
    "cn": "在每年的夏季季風季節期間，熱帶風暴經常掠過菲律賓這個島嶼群島國家。 【選項解析】(A) Philippines 菲律賓  (B) Russia 俄羅斯  (C) Britain 英國  (D) Europe 歐洲。熱帶群島為 Philippines。",
    "vocabIndex": 0
  },
  {
    "q": "Many travelers admire the historic red double-decker buses and black taxicabs that drive on ______ streets.",
    "options": [
      "Russian",
      "Taiwanese",
      "British",
      "European"
    ],
    "answer": 2,
    "cn": "許多旅客讚賞在英國街道上行駛的歷史悠久紅色雙層巴士與黑色計程車。 【選項解析】(A) British 英國的  (B) Taiwanese 台灣的  (C) Russian 俄羅斯的  (D) European 歐洲的。紅色雙層巴士是 British streets 的標誌。",
    "vocabIndex": 9
  },
  {
    "q": "Several ______ nations use the Euro as their shared official currency to simplify cross-border commerce.",
    "options": [
      "Taiwanese",
      "European",
      "Russian",
      "British"
    ],
    "answer": 1,
    "cn": "好幾個歐洲國家使用歐元作為其共同官方貨幣，以簡化跨境商業貿易。 【選項解析】(A) European 歐洲的  (B) Taiwanese 台灣的  (C) Russian 俄國的  (D) British 英國的。使用歐元的國家為 European nations。",
    "vocabIndex": 7
  },
  {
    "q": "Visitors love walking through night markets to sample authentic ______ street foods such as stinky tofu.",
    "options": [
      "European",
      "British",
      "Russian",
      "Taiwanese"
    ],
    "answer": 3,
    "cn": "遊客喜歡逛夜市品嚐道地的台灣街頭小吃，例如臭豆腐。 【選項解析】(A) Taiwanese 台灣的  (B) British 英國的  (C) Russian 俄國的  (D) European 歐洲的。臭豆腐與夜市為 Taiwanese street foods。",
    "vocabIndex": 2
  },
  {
    "q": "Leo Tolstoy was a master of nineteenth-century ______ literature whose epic novels are read across the world.",
    "options": [
      "British",
      "Russian",
      "Taiwanese",
      "European"
    ],
    "answer": 1,
    "cn": "列夫·托爾斯泰是十九世紀俄羅斯文學大師，其史詩級小說在全世界廣為流傳。 【選項解析】(A) Russian 俄羅斯的  (B) British 英國的  (C) Taiwanese 台灣的  (D) European 歐洲的。托爾斯泰為 Russian literature 大師。",
    "vocabIndex": 5
  },
  {
    "q": "The government of Great ______ consists of an elected Parliament and a historic constitutional monarchy.",
    "options": [
      "Russia",
      "Europe",
      "Britain",
      "Singapore"
    ],
    "answer": 2,
    "cn": "大不列顛政府由民選議會與歷史悠久的君主立憲制所組成。 【選項解析】(A) Britain 英國  (B) Europe 歐洲  (C) Russia 俄羅斯  (D) Singapore 新加坡。Great Britain（大不列顛）。",
    "vocabIndex": 8
  },
  {
    "q": "Pristine white sandy beaches and colorful coral reefs make the ______ a top vacation destination for scuba divers.",
    "options": [
      "Britain",
      "Russia",
      "Europe",
      "Philippines"
    ],
    "answer": 3,
    "cn": "原始的白色沙灘與多彩的珊瑚礁使菲律賓成為水肺潛水員的首選度假勝地。 【選項解析】(A) Philippines 菲律賓  (B) Russia 俄國  (C) Europe 歐洲  (D) Britain 英國。潛水勝地為 Philippines。",
    "vocabIndex": 0
  },
  {
    "q": "High-speed rail lines run down the entire western coast of ______, connecting major urban hubs in under two hours.",
    "options": [
      "Taiwan",
      "Russia",
      "Britain",
      "Europe"
    ],
    "answer": 0,
    "cn": "高鐵線路貫穿台灣整個西海岸，在不到兩小時內連接主要城市樞紐。 【選項解析】(A) Taiwan 台灣  (B) Russia 俄羅斯  (C) Britain 英國  (D) Europe 歐洲。高鐵西海岸貫通為 Taiwan。",
    "vocabIndex": 1
  },
  {
    "q": "Changi Airport in ______ is consistently voted by travelers as one of the best international transit hubs.",
    "options": [
      "Russia",
      "Singapore",
      "Europe",
      "Taiwan"
    ],
    "answer": 1,
    "cn": "新加坡樟宜機場一直被旅客評為最佳國際過境轉運樞紐之一。 【選項解析】(A) Singapore 新加坡  (B) Russia 俄羅斯  (C) Europe 歐洲  (D) Taiwan 台灣。Changi Airport 位於 Singapore。",
    "vocabIndex": 3
  },
  {
    "q": "Trans-Siberian trains take nearly a week to cross the vast geographical expanse of ______ from Moscow to Vladivostok.",
    "options": [
      "Russia",
      "Singapore",
      "Taiwan",
      "Britain"
    ],
    "answer": 0,
    "cn": "西伯利亞大鐵路列車需要近一週時間才能橫穿從莫斯科到符拉迪沃斯托克的俄羅斯廣大疆域。 【選項解析】(A) Russia 俄羅斯  (B) Singapore 新加坡  (C) Taiwan 台灣  (D) Britain 英國。西伯利亞橫跨 Russia。",
    "vocabIndex": 4
  },
  {
    "q": "The historical ties between the English language and Great ______ trace back over more than a thousand years.",
    "options": [
      "Singapore",
      "Russia",
      "Britain",
      "Taiwan"
    ],
    "answer": 2,
    "cn": "英語與大不列顛之間的歷史紐帶可以追溯到一千多年前。 【選項解析】(A) Britain 大不列顛  (B) Russia 俄國  (C) Singapore 新加坡  (D) Taiwan 台灣。Great Britain 與英語源流。",
    "vocabIndex": 8
  },
  {
    "q": "Shakespeare was an English playwright who is considered the greatest writer in the history of ______ drama.",
    "options": [
      "European",
      "Taiwanese",
      "Russian",
      "British"
    ],
    "answer": 3,
    "cn": "莎士比亞是英國劇作家，被認為是英國戲劇史上最偉大的作家。 【選項解析】(A) British 英國的  (B) Taiwanese 台灣的  (C) Russian 俄羅斯的  (D) European 歐洲的。莎士比亞開創 British drama。",
    "vocabIndex": 9
  },
  {
    "q": "Many prominent classical music composers were born and worked across the culturally rich cities of central ______.",
    "options": [
      "Russia",
      "Europe",
      "Singapore",
      "Taiwan"
    ],
    "answer": 1,
    "cn": "許多傑出的古典音樂作曲家誕生並工作於文化底蘊豐富的中歐各城市。 【選項解析】(A) Europe 歐洲  (B) Russia 俄羅斯  (C) Singapore 新加坡  (D) Taiwan 台灣。中歐城市為 central Europe。",
    "vocabIndex": 6
  },
  {
    "q": "Over twenty-seven democratic countries are officially united under the legal umbrella of the ______ Union.",
    "options": [
      "British",
      "Taiwanese",
      "Russian",
      "European"
    ],
    "answer": 3,
    "cn": "超過二十七個民主國家正式聯合在歐洲聯盟的法律架構之下。 【選項解析】(A) European 歐洲的  (B) Taiwanese 台灣的  (C) Russian 俄羅斯的  (D) British 英國的。European Union（歐洲聯盟）。",
    "vocabIndex": 7
  },
  {
    "q": "Traditional ______ puppet theater combines elaborate hand-carved wooden figures with dramatic storytelling.",
    "options": [
      "Russian",
      "British",
      "Taiwanese",
      "European"
    ],
    "answer": 2,
    "cn": "傳統台灣布袋戲將精緻的手雕木偶與戲劇性故事講述融為一體。 【選項解析】(A) Taiwanese 台灣的  (B) British 英國的  (C) Russian 俄國的  (D) European 歐洲的。布袋戲為 Taiwanese puppet theater。",
    "vocabIndex": 2
  },
  {
    "q": "The famous Moscow ballet company is recognized as one of the premier institutions of traditional ______ dance.",
    "options": [
      "Russian",
      "British",
      "Taiwanese",
      "European"
    ],
    "answer": 0,
    "cn": "著名的莫斯科芭蕾舞團被公認為傳統俄羅斯舞蹈的頂級機構之一。 【選項解析】(A) Russian 俄羅斯的  (B) British 英國的  (C) Taiwanese 台灣的  (D) European 歐洲的。莫斯科芭蕾代表 Russian dance。",
    "vocabIndex": 5
  },
  {
    "q": "Thousands of workers commute daily across the causeway between Malaysia and the bustling island of ______.",
    "options": [
      "Britain",
      "Russia",
      "Singapore",
      "Europe"
    ],
    "answer": 2,
    "cn": "數以千計的上班族每天穿過新柔長堤往返於馬來西亞與熱鬧的新加坡島之間。 【選項解析】(A) Singapore 新加坡  (B) Russia 俄羅斯  (C) Britain 英國  (D) Europe 歐洲。新柔長堤連接馬來西亞與 Singapore。",
    "vocabIndex": 3
  },
  {
    "q": "Mango shaved ice is a wildly popular sweet dessert enjoyed by tourists during hot summers in ______.",
    "options": [
      "Europe",
      "Russia",
      "Britain",
      "Taiwan"
    ],
    "answer": 3,
    "cn": "芒果刨冰是遊客在炎熱夏天造訪台灣時非常喜愛的甜點。 【選項解析】(A) Taiwan 台灣  (B) Russia 俄羅斯  (C) Britain 英國  (D) Europe 歐洲。芒果冰代表性地區為 Taiwan。",
    "vocabIndex": 1
  },
  {
    "q": "The tropical climate of the ______ allows local farmers to cultivate vast plantations of coconuts and sweet mangoes.",
    "options": [
      "Russia",
      "Philippines",
      "Britain",
      "Europe"
    ],
    "answer": 1,
    "cn": "菲律賓的熱帶氣候使當地農民能夠種植廣闊的椰子與甜芒果種植園。 【選項解析】(A) Philippines 菲律賓  (B) Russia 俄羅斯  (C) Britain 英國  (D) Europe 歐洲。盛產椰子芒果之熱帶島國為 Philippines。",
    "vocabIndex": 0
  },
  {
    "q": "The Industrial Revolution began in ______ before spreading to manufacturing centers across the European continent.",
    "options": [
      "Britain",
      "Russia",
      "Singapore",
      "Taiwan"
    ],
    "answer": 0,
    "cn": "工業革命始於英國，隨後蔓延至整個歐洲大陸的製造業中心。 【選項解析】(A) Britain 英國  (B) Russia 俄羅斯  (C) Singapore 新加坡  (D) Taiwan 台灣。工業革命起源於 Britain。",
    "vocabIndex": 8
  },
  {
    "q": "Learning a foreign ______ language like French or German opens up numerous career opportunities across international trade.",
    "options": [
      "Taiwanese",
      "European",
      "Russian",
      "British"
    ],
    "answer": 1,
    "cn": "學習法語或德語等歐洲外語，為國際貿易開啟了許多職業機會。 【選項解析】(A) European 歐洲的  (B) Taiwanese 台灣的  (C) Russian 俄國的  (D) British 英國的。法德等語種為 European language。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "philippines": {
    "pos": "n.",
    "en_def": "an archipelago country in Southeast Asia",
    "cn_def": "菲律賓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an archipelago country in Southeast Asia",
        "cn_def": "菲律賓"
      }
    ]
  },
  "taiwan": {
    "pos": "n.",
    "en_def": "an island nation in East Asia known for technology and cuisine",
    "cn_def": "台灣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an island nation in East Asia known for technology and cuisine",
        "cn_def": "台灣"
      }
    ]
  },
  "taiwanese": {
    "pos": "adj. / n.",
    "en_def": "relating to Taiwan, its people, or its local culture",
    "cn_def": "台灣的；台灣人；台語",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Taiwan, its people, or its local culture",
        "cn_def": "台灣的；台灣人；台語"
      }
    ]
  },
  "singapore": {
    "pos": "n.",
    "en_def": "an island city-state in Southeast Asia known for cleanliness",
    "cn_def": "新加坡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an island city-state in Southeast Asia known for cleanliness",
        "cn_def": "新加坡"
      }
    ]
  },
  "russia": {
    "pos": "n.",
    "en_def": "the largest country in the world, spanning Eastern Europe and Northern Asia",
    "cn_def": "俄羅斯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the largest country in the world, spanning Eastern Europe and Northern Asia",
        "cn_def": "俄羅斯"
      }
    ]
  },
  "russian": {
    "pos": "adj. / n.",
    "en_def": "relating to Russia, its people, or its language",
    "cn_def": "俄羅斯的；俄羅斯人；俄語",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Russia, its people, or its language",
        "cn_def": "俄羅斯的；俄羅斯人；俄語"
      }
    ]
  },
  "europe": {
    "pos": "n.",
    "en_def": "a continent situated entirely in the Northern Hemisphere",
    "cn_def": "歐洲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a continent situated entirely in the Northern Hemisphere",
        "cn_def": "歐洲"
      }
    ]
  },
  "european": {
    "pos": "adj. / n.",
    "en_def": "relating to Europe, its people, or its languages",
    "cn_def": "歐洲的；歐洲人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Europe, its people, or its languages",
        "cn_def": "歐洲的；歐洲人"
      }
    ]
  },
  "britain": {
    "pos": "n.",
    "en_def": "the island comprising England, Scotland, and Wales",
    "cn_def": "英國；大不列顛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the island comprising England, Scotland, and Wales",
        "cn_def": "英國；大不列顛"
      }
    ]
  },
  "british": {
    "pos": "adj. / n.",
    "en_def": "relating to Great Britain or the United Kingdom",
    "cn_def": "英國的；英國人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Great Britain or the United Kingdom",
        "cn_def": "英國的；英國人"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
