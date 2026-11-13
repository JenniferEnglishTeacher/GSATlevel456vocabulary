// Part 5 Quiz Data: stuff – vacancy
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 12-5 - stuff – vacancy",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "stuff",
    "pos": "n.",
    "cn_def": "東西；物品；材料；素質（不可數）",
    "en_def": "matter, material, articles, or activities of a specified or unspecified kind (uncountable)",
    "sentence": "The experienced flight instructor praised the young pilot for having the right {{BLANK}} to handle emergencies.",
    "cn": "那位經驗豐富的飛行教官讚揚了那位年輕飛行員具備應對緊急狀況的真材實料／必備素質。"
  },
  {
    "word": "stuffed",
    "pos": "v.",
    "cn_def": "塞滿；填進；狼吞虎嚥（動詞）",
    "en_def": "to fill a receptacle tightly with something; to push something into a small space",
    "sentence": "During the Thanksgiving celebration, grandmother {{BLANK}} the roasted turkey with savory breadcrumbs and herbs.",
    "cn": "在感恩節慶祝活動期間，祖母用美味的麵包屑和香草填塞烤火雞。"
  },
  {
    "word": "stuffy",
    "pos": "adj.",
    "cn_def": "通風不良的；悶熱的；古板的",
    "en_def": "lacking fresh air or ventilation; narrow-minded or overly formal",
    "sentence": "Because all the bedroom windows remained shut throughout the afternoon, the room felt uncomfortably hot and {{BLANK}}.",
    "cn": "因為整個下午臥室的窗戶都緊閉著，房間感覺極不舒服地悶熱且通風不良。"
  },
  {
    "word": "substance",
    "pos": "n.",
    "cn_def": "物質；實質；本質；實質內容（可數/不可數）",
    "en_def": "a particular kind of matter with uniform properties; real importance or solidity",
    "sentence": "Industrial factories are legally prohibited from discharging any toxic chemical {{BLANK}} into the public river.",
    "cn": "法律嚴格禁止工廠向公共河流中排放任何有毒化學物質。"
  },
  {
    "word": "substantial",
    "pos": "adj.",
    "cn_def": "大量的；可觀的；實質的；堅固的",
    "en_def": "of considerable importance, size, or worth; strongly built or made",
    "sentence": "The technology corporation reported a {{BLANK}} increase in quarterly sales profits due to its new product.",
    "cn": "這家科技公司因推出新產品，公佈了季度銷售利潤的大幅／顯著增長。"
  },
  {
    "word": "tag",
    "pos": "n.",
    "cn_def": "標籤；標牌；捉迷藏遊戲（可數）",
    "en_def": "a label attached to someone or something for the purpose of identification",
    "sentence": "Before putting your suitcase onto the airport conveyor belt, make sure your luggage {{BLANK}} displays your phone number.",
    "cn": "在將行李箱放上機場輸送帶之前，請確保您的行李吊牌上註明了您的電話號碼。"
  },
  {
    "word": "tag",
    "pos": "v.",
    "cn_def": "貼標籤；給…加上標籤；在社群標註（動詞）",
    "en_def": "to attach a tag to; to label someone; to mention someone on social media",
    "sentence": "Whenever older brother goes to the neighborhood basketball court, his little sister always begs to {{BLANK}} along.",
    "cn": "每當哥哥去社區籃球場時，他的小妹妹總是懇求著要跟著去（當跟屁蟲）。"
  },
  {
    "word": "tunnel",
    "pos": "n.",
    "cn_def": "隧道；地道（可數）",
    "en_def": "an artificial underground passage, especially one dug through a hill or under a river",
    "sentence": "Vehicles traveling between the twin cities pass safely through an illuminated undersea {{BLANK}} built beneath the bay.",
    "cn": "在兩座城市之間行駛的車輛安全地穿過一條建造在海灣下方的明亮海底隧道。"
  },
  {
    "word": "vacant",
    "pos": "adj.",
    "cn_def": "空著的；未被佔用的；空缺的；茫然的",
    "en_def": "not occupied; empty, available to be used, or showing no expression",
    "sentence": "During the peak summer holiday festival, there was not a single {{BLANK}} hotel room available downtown.",
    "cn": "在夏季假日慶典的高峰期，市中心沒有一間空著的飯店房間。"
  },
  {
    "word": "vacancy",
    "pos": "n.",
    "cn_def": "空缺；空職；空房（可數）",
    "en_def": "an unoccupied position or job; an available room in a hotel",
    "sentence": "The neon sign outside the seaside motel flashed 'No {{BLANK}}' because all travelers had checked in early.",
    "cn": "海濱汽車旅館外的霓虹招牌閃爍著「客滿／無空房」，因為所有旅客都已提前登記入住。"
  }
];

const MCQS = [
  {
    "q": "Before dinner, please clear all your school books and pencils and other ______ off the table.",
    "options": [
      "stuff",
      "tag",
      "tunnel",
      "substance"
    ],
    "answer": 0,
    "cn": "晚餐前，請把你所有的課本、鉛筆和其他東西／雜物從桌上清理乾淨。",
    "vocabIndex": 0
  },
  {
    "q": "The scientist poured a clear chemical ______ into the test tube to see how it reacted.",
    "options": [
      "tunnel",
      "tag",
      "substance",
      "vacancy"
    ],
    "answer": 2,
    "cn": "科學家將一種透明的化學物質倒入試管中，觀察其反應。",
    "vocabIndex": 3
  },
  {
    "q": "Look at the price ______ on this jacket to see how much it costs before buying.",
    "options": [
      "substance",
      "tunnel",
      "stuff",
      "tag"
    ],
    "answer": 3,
    "cn": "購買前，請先看一下這件夾克上的價格標籤，看看它賣多少錢。",
    "vocabIndex": 5
  },
  {
    "q": "The train blew its loud horn and went directly through the dark mountain ______.",
    "options": [
      "tag",
      "tunnel",
      "stuff",
      "substance"
    ],
    "answer": 1,
    "cn": "火車鳴響了響亮的喇叭，直接穿過了黑暗的山脈隧道。",
    "vocabIndex": 7
  },
  {
    "q": "The sign outside the fully booked hotel said 'No ______' because all rooms were taken.",
    "options": [
      "Vacancy",
      "Tunnel",
      "Substance",
      "Tag"
    ],
    "answer": 0,
    "cn": "客滿的飯店外面的招牌寫著「無空房（客滿）」，因為所有的房間都被訂滿了。",
    "vocabIndex": 9
  },
  {
    "q": "Make sure your luggage ______ has your home phone number in case your bag gets lost.",
    "options": [
      "tunnel",
      "vacancy",
      "substance",
      "tag"
    ],
    "answer": 3,
    "cn": "請確保你的行李吊牌／標籤上寫有住家電話號碼，以防行李遺失。",
    "vocabIndex": 5
  },
  {
    "q": "The car drove into a long underground ______ to cross under the wide river.",
    "options": [
      "stuff",
      "tag",
      "tunnel",
      "vacancy"
    ],
    "answer": 2,
    "cn": "汽車駛入了一條長長的地下隧道，以穿過寬闊的河流下方。",
    "vocabIndex": 7
  },
  {
    "q": "The school has a job ______ for a new English teacher starting next semester.",
    "options": [
      "stuff",
      "vacancy",
      "tag",
      "tunnel"
    ],
    "answer": 1,
    "cn": "學校有一個從下學期開始的新英語教師職位空缺／職缺。",
    "vocabIndex": 9
  },
  {
    "q": "Children were laughing and running on the grass while playing a fun game of ______.",
    "options": [
      "substance",
      "tunnel",
      "stuff",
      "tag"
    ],
    "answer": 3,
    "cn": "孩子們在草地上歡笑奔跑，玩著有趣的捉迷藏／鬼抓人遊戲。",
    "vocabIndex": 5
  },
  {
    "q": "His speech sounded nice, but the arguments had very little real ______.",
    "options": [
      "tunnel",
      "tag",
      "substance",
      "vacancy"
    ],
    "answer": 2,
    "cn": "他的演講聽起來很好聽，但論點卻幾乎沒有任何實質內容／根據。",
    "vocabIndex": 3
  },
  {
    "q": "Mom ______ the chicken with rice, onions, and vegetables before putting it in the oven.",
    "options": [
      "stuffed",
      "tagged",
      "paved",
      "crashed"
    ],
    "answer": 0,
    "cn": "媽媽在把雞放進烤箱前，用米飯、洋蔥和蔬菜填滿／塞滿了雞肉內部。",
    "vocabIndex": 2
  },
  {
    "q": "Sarah took many pictures at the birthday party and ______ all her friends in them.",
    "options": [
      "stuffed",
      "tagged",
      "enabled",
      "harmed"
    ],
    "answer": 1,
    "cn": "莎拉在生日派對上拍了許多照片，並在照片中標註了她所有的朋友。",
    "vocabIndex": 6
  },
  {
    "q": "Whenever the big brother goes to play basketball, his little brother always wants to ______ along.",
    "options": [
      "stuff",
      "harm",
      "tag",
      "crash"
    ],
    "answer": 2,
    "cn": "每當哥哥去打籃球時，他的小弟弟總是想跟在後面（tag along）。",
    "vocabIndex": 5
  },
  {
    "q": "After eating two big bowls of noodles and a large dessert, I was completely ______.",
    "options": [
      "stuffed",
      "tagged",
      "paved",
      "enabled"
    ],
    "answer": 0,
    "cn": "在吃了兩大碗麵和一份大甜點後，我完全吃撐了／飽脹了。",
    "vocabIndex": 2
  },
  {
    "q": "Because all the windows were closed on the hot afternoon, the classroom felt very ______.",
    "options": [
      "vacant",
      "stuffy",
      "substantial",
      "tagged"
    ],
    "answer": 1,
    "cn": "因為在炎熱的下午所有窗戶都關閉著，教室裡感覺非常通風不良／悶熱。",
    "vocabIndex": 2
  },
  {
    "q": "There is a ______ seat next to me on the bus, so you can come and sit down.",
    "options": [
      "stuffy",
      "stuffed",
      "substantial",
      "vacant"
    ],
    "answer": 3,
    "cn": "公車上我旁邊有一個空著的座位，所以你可以過來坐下。",
    "vocabIndex": 8
  },
  {
    "q": "The company reported a ______ increase in profits after launching its new computer.",
    "options": [
      "stuffy",
      "vacant",
      "substantial",
      "tagged"
    ],
    "answer": 2,
    "cn": "公司在推出新電腦後，公佈了利潤的顯著／大幅增長。",
    "vocabIndex": 4
  },
  {
    "q": "Because of my cold, I have a ______ nose and cannot breathe easily through my nostrils.",
    "options": [
      "vacant",
      "stuffy",
      "substantial",
      "harmless"
    ],
    "answer": 1,
    "cn": "因為感冒，我鼻塞（stuffy nose），無法用鼻孔輕鬆呼吸。",
    "vocabIndex": 2
  },
  {
    "q": "The hotel was fully booked, and there was not a single ______ room in the whole town.",
    "options": [
      "stuffy",
      "substantial",
      "harmful",
      "vacant"
    ],
    "answer": 3,
    "cn": "飯店全部客滿，全鎮連一間空著的房間也沒有。",
    "vocabIndex": 8
  },
  {
    "q": "We enjoyed a ______ lunch with chicken, soup, bread, and fruits before continuing our hike.",
    "options": [
      "substantial",
      "stuffy",
      "vacant",
      "fake"
    ],
    "answer": 0,
    "cn": "在繼續健行前，我們享用了一頓包含雞肉、熱湯、麵包與水果的豐盛飽足午餐。",
    "vocabIndex": 4
  },
  {
    "q": "After months of hard work and difficult study, I can finally see the ______.",
    "options": [
      "heavy price tag",
      "tag along with friends",
      "light at the end of the tunnel",
      "toxic substance"
    ],
    "answer": 2,
    "cn": "經過數月的辛苦努力與苦讀，我終於看見了隧道盡頭的曙光（重見希望）。",
    "vocabIndex": 7
  },
  {
    "q": "The smart pilot has ______ to fly the plane through stormy weather safely.",
    "options": [
      "the right stuff",
      "a stuffy nose",
      "a price tag",
      "a vacant stare"
    ],
    "answer": 0,
    "cn": "那位聰明的飛行員擁有在暴風雨天氣中安全駕駛飛機的真材實料／必備素質。",
    "vocabIndex": 2
  },
  {
    "q": "That brand-name leather jacket is very nice, but it comes with a ______ that I cannot afford.",
    "options": [
      "toxic substance",
      "hefty price tag",
      "light at the end of the tunnel",
      "stuffy room"
    ],
    "answer": 1,
    "cn": "那件名牌皮夾克非常好看，但它附帶了一個我負擔不起的昂貴價格標籤。",
    "vocabIndex": 5
  },
  {
    "q": "Whenever her older sister goes to the shopping mall, little Lily always begs to ______.",
    "options": [
      "pave the way",
      "see the light",
      "hit the sack",
      "tag along"
    ],
    "answer": 3,
    "cn": "每當姊姊去購物中心時，小莉莉總是懇求著要跟著去（當跟班）。",
    "vocabIndex": 5
  },
  {
    "q": "The tired child did not answer the question; he just sat quietly with a ______ on his face.",
    "options": [
      "price tag",
      "vacant stare",
      "light at the end of the tunnel",
      "right stuff"
    ],
    "answer": 1,
    "cn": "疲憊的孩子沒有回答問題，他只是靜靜地坐著，臉上帶著茫然的凝視。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "stuff": {
    "pos": "n.",
    "en_def": "matter, material, articles, or activities of a specified or unspecified kind (uncountable)",
    "cn_def": "東西；物品；材料；素質（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "matter, material, articles, or activities of a specified or unspecified kind (uncountable)",
        "cn_def": "東西；物品；材料；素質（不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to fill a receptacle tightly with something; to push something into a small space",
        "cn_def": "塞滿；填進；狼吞虎嚥（動詞）"
      }
    ]
  },
  "stuffed": {
    "pos": "v.",
    "en_def": "to fill a receptacle tightly with something; to push something into a small space",
    "cn_def": "塞滿；填進；狼吞虎嚥（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fill a receptacle tightly with something; to push something into a small space",
        "cn_def": "塞滿；填進；狼吞虎嚥（動詞）"
      }
    ]
  },
  "stuffy": {
    "pos": "adj.",
    "en_def": "lacking fresh air or ventilation; narrow-minded or overly formal",
    "cn_def": "通風不良的；悶熱的；古板的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "lacking fresh air or ventilation; narrow-minded or overly formal",
        "cn_def": "通風不良的；悶熱的；古板的"
      }
    ]
  },
  "substance": {
    "pos": "n.",
    "en_def": "a particular kind of matter with uniform properties; real importance or solidity",
    "cn_def": "物質；實質；本質；實質內容（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular kind of matter with uniform properties; real importance or solidity",
        "cn_def": "物質；實質；本質；實質內容（可數/不可數）"
      }
    ]
  },
  "substantial": {
    "pos": "adj.",
    "en_def": "of considerable importance, size, or worth; strongly built or made",
    "cn_def": "大量的；可觀的；實質的；堅固的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of considerable importance, size, or worth; strongly built or made",
        "cn_def": "大量的；可觀的；實質的；堅固的"
      }
    ]
  },
  "tag": {
    "pos": "n.",
    "en_def": "a label attached to someone or something for the purpose of identification",
    "cn_def": "標籤；標牌；捉迷藏遊戲（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a label attached to someone or something for the purpose of identification",
        "cn_def": "標籤；標牌；捉迷藏遊戲（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to attach a tag to; to label someone; to mention someone on social media",
        "cn_def": "貼標籤；給…加上標籤；在社群標註（動詞）"
      }
    ]
  },
  "tunnel": {
    "pos": "n.",
    "en_def": "an artificial underground passage, especially one dug through a hill or under a river",
    "cn_def": "隧道；地道（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an artificial underground passage, especially one dug through a hill or under a river",
        "cn_def": "隧道；地道（可數）"
      }
    ]
  },
  "vacant": {
    "pos": "adj.",
    "en_def": "not occupied; empty, available to be used, or showing no expression",
    "cn_def": "空著的；未被佔用的；空缺的；茫然的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not occupied; empty, available to be used, or showing no expression",
        "cn_def": "空著的；未被佔用的；空缺的；茫然的"
      }
    ]
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "an unoccupied position or job; an available room in a hotel",
    "cn_def": "空缺；空職；空房（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unoccupied position or job; an available room in a hotel",
        "cn_def": "空缺；空職；空房（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
