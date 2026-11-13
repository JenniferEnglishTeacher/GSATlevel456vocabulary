// Part 2 Quiz Data: citizen – geographical
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 4-2 - citizen – geographical",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；國民；市民（可數）",
    "en_def": "a legally recognized subject or national of a state or commonwealth",
    "sentence": "Every adult {{BLANK}} in this democratic nation has the constitutional right and duty to vote.",
    "cn": "在這個民主國家中，每位成年公民都擁有投票的憲法權利與義務。"
  },
  {
    "word": "citizenship",
    "pos": "n.",
    "cn_def": "公民身分；公民權（不可數）",
    "en_def": "the position or status of being a citizen of a particular country",
    "sentence": "After living legally and working productively in Canada for five years, Maria decided to apply for {{BLANK}}.",
    "cn": "在加拿大合法居留並辛勤工作五年後，瑪麗亞決定申請公民身分。"
  },
  {
    "word": "closet",
    "pos": "n.",
    "cn_def": "衣櫥；壁櫥；儲藏室（可數）",
    "en_def": "a small room or large tall cupboard used for storing clothes and personal items",
    "sentence": "Before the autumn season arrived, Carrie thoroughly cleaned out her bedroom {{BLANK}} and donated old winter jackets.",
    "cn": "在秋季來臨之前，凱莉徹底清理了她的臥室衣櫥，並捐贈了舊冬裝夾克。"
  },
  {
    "word": "dam",
    "pos": "n.",
    "cn_def": "水壩；水閘（可數）",
    "en_def": "a barrier constructed across a river to hold back water and raise its level",
    "sentence": "The government built a massive hydroelectric {{BLANK}} across the deep mountain canyon to generate clean electricity.",
    "cn": "政府在深邃的山谷中建造了一座巨大的水力發電水壩來產生潔淨電力。"
  },
  {
    "word": "dam",
    "pos": "v.",
    "cn_def": "築壩阻擋；攔截（河流）（動詞）",
    "en_def": "to build a dam across a river or stream to stop the flow of water",
    "sentence": "Engineers decided to {{BLANK}} the rushing river in order to create a reliable fresh water reservoir.",
    "cn": "工程師們決定築壩截斷那條湍急的河流，以建造一個可靠的淡水水庫。"
  },
  {
    "word": "dock",
    "pos": "n.",
    "cn_def": "碼頭；船塢；裝卸區（可數）",
    "en_def": "a structure extending along or out from the shore where ships can load and unload",
    "sentence": "Betty waited anxiously on the wooden {{BLANK}} for her father's commercial fishing vessel to return safely.",
    "cn": "貝蒂焦急地在木製碼頭上等待父親的商業漁船安全歸來。"
  },
  {
    "word": "dock",
    "pos": "v.",
    "cn_def": "（船隻）靠岸；停泊碼頭；扣除（工資）",
    "en_def": "to bring a ship or boat into a dock; to deduct money from someone's wages",
    "sentence": "The strict manager warned the late employee that arriving tardy again would {{BLANK}} his monthly wages.",
    "cn": "嚴格的經理警告那名遲到的員工，如果再次遲到將會扣除他的月薪。"
  },
  {
    "word": "exchange",
    "pos": "n.",
    "cn_def": "交換；交流；匯兌（可數/不可數）",
    "en_def": "an act of giving one thing and receiving another in return; a short conversation",
    "sentence": "The lively {{BLANK}} of creative views at the international conference led to dozens of groundbreaking business ideas.",
    "cn": "在國際會議上熱烈的創意觀點交流激發了數十個突破性的商業點子。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "交換；調換；兌換（動詞）",
    "en_def": "to give something and receive something of equivalent value in return",
    "sentence": "Before traveling abroad to Tokyo for vacation, we went to the bank to {{BLANK}} local currency for Japanese yen.",
    "cn": "在出國前往東京度假之前，我們前往銀行將本國貨幣兌換成日圓。"
  },
  {
    "word": "exchange student",
    "pos": "n.phr.",
    "cn_def": "交換學生",
    "en_def": "a student who studies abroad at a partner school or university for a period",
    "sentence": "Our family enjoyed the delightful experience of hosting a high school {{BLANK}} from Germany for a semester.",
    "cn": "我們全家非常享受接待一名來自德國的高中交換學生長達一個學期的愉快經歷。"
  },
  {
    "word": "flute",
    "pos": "n.",
    "cn_def": "長笛；笛子（可數）",
    "en_def": "a high-pitched wind instrument consisting of a tube with holes stopped by fingers or keys",
    "sentence": "The talented young musician has practiced playing the classical silver {{BLANK}} diligently since she was seven years old.",
    "cn": "那位才華洋溢的年輕音樂家自七歲起便勤奮練習吹奏古典銀長笛。"
  },
  {
    "word": "garage",
    "pos": "n.",
    "cn_def": "車庫；修車廠（可數）",
    "en_def": "a building or shed for housing motor vehicles; a repair shop for cars",
    "sentence": "The mechanic at the local auto repair {{BLANK}} called to say that our brakes had been completely fixed.",
    "cn": "當地汽車維修廠的技師打電話來說我們的煞車系統已經完全修復了。"
  },
  {
    "word": "garage sale",
    "pos": "n.phr.",
    "cn_def": "車庫拍賣；二手雜物出清拍賣",
    "en_def": "a sale of miscellaneous secondhand household items held in the garage or front yard",
    "sentence": "Before moving across the country next month, the Miller family held a massive weekend {{BLANK}} in their front driveway.",
    "cn": "在下個月搬遷到全國另一端之前，米勒一家人在前車道舉辦了一場盛大的週末車庫拍賣。"
  },
  {
    "word": "geography",
    "pos": "n.",
    "cn_def": "地理學；地形；地理分佈（不可數）",
    "en_def": "the study of the physical features of the earth, its atmosphere, and human activity",
    "sentence": "During our junior high school {{BLANK}} lesson, we examined colorful topographic maps of volcanoes across the Pacific.",
    "cn": "在我們的國中地理課上，我們仔細研究了太平洋各火山的多彩地形圖。"
  },
  {
    "word": "geographical",
    "pos": "adj.",
    "cn_def": "地理學的；地理特徵的",
    "en_def": "based on or derived from the physical features of an area",
    "sentence": "The port city enjoys an exceptionally favorable {{BLANK}} location with direct maritime access to international trading routes.",
    "cn": "這座港口城市享有極佳的地理位置，可直接透過海路通達國際貿易航線。"
  }
];

const MCQS = [
  {
    "q": "Every good ______ should obey traffic laws and help keep public parks clean.",
    "options": [
      "closet",
      "dam",
      "citizen",
      "dock"
    ],
    "answer": 2,
    "cn": "每一位好公民都應該遵守交通法規並協助維護公共公園的整潔。",
    "vocabIndex": 0
  },
  {
    "q": "My bedroom ______ was full of clothes, so I gave some old shirts to charity.",
    "options": [
      "closet",
      "flute",
      "citizen",
      "dock"
    ],
    "answer": 0,
    "cn": "我的臥室衣櫥塞滿了衣服，所以我把一些舊襯衫捐給了慈善機構。",
    "vocabIndex": 2
  },
  {
    "q": "A giant concrete ______ was built across the river to store drinking water for the city.",
    "options": [
      "citizen",
      "dam",
      "flute",
      "closet"
    ],
    "answer": 1,
    "cn": "一座巨大的混凝土水壩橫跨河流而建，為城市儲存飲用水。",
    "vocabIndex": 3
  },
  {
    "q": "Fishermen tied their small boats to the wooden ______ before walking into town.",
    "options": [
      "closet",
      "citizen",
      "flute",
      "dock"
    ],
    "answer": 3,
    "cn": "漁民在走進城鎮之前，將他們的小船繫在木製碼頭上。",
    "vocabIndex": 5
  },
  {
    "q": "Alice practiced playing the silver ______ every afternoon because she loved its sweet sound.",
    "options": [
      "closet",
      "dam",
      "flute",
      "dock"
    ],
    "answer": 2,
    "cn": "愛麗絲每天下午練習吹奏銀色長笛，因為她喜愛它甜美的樂音。",
    "vocabIndex": 10
  },
  {
    "q": "Dad parked our family car in the ______ to keep it safe from heavy hail.",
    "options": [
      "flute",
      "dam",
      "citizen",
      "garage"
    ],
    "answer": 3,
    "cn": "爸爸把我們的家用汽車停在車庫裡，以免遭受強烈冰雹損害。",
    "vocabIndex": 11
  },
  {
    "q": "In our middle school ______ class, we used a colorful globe to learn all seven continents.",
    "options": [
      "closet",
      "geography",
      "dock",
      "citizen"
    ],
    "answer": 1,
    "cn": "在我們的國中地理課上，我們使用一個彩色的地球儀來認識各大洲。",
    "vocabIndex": 13
  },
  {
    "q": "After living in Australia for ten years, David finally received his legal ______.",
    "options": [
      "citizenship",
      "flute",
      "garage",
      "dam"
    ],
    "answer": 0,
    "cn": "在澳洲生活十年後，大衛終於獲得了他的法定公民身分。",
    "vocabIndex": 1
  },
  {
    "q": "The meeting allowed an open ______ of ideas between high school teachers and parents.",
    "options": [
      "dock",
      "garage",
      "closet",
      "exchange"
    ],
    "answer": 3,
    "cn": "這場會議促成了高中教師與家長之間開誠布公的意見交流。",
    "vocabIndex": 7
  },
  {
    "q": "A friendly ______ from Japan lived with our family for two semesters to practice English.",
    "options": [
      "exchange student",
      "garage sale",
      "concrete dam",
      "walk-in closet"
    ],
    "answer": 0,
    "cn": "一位來自日本的友善交換學生與我們全家同住了兩個學期以練習英語。",
    "vocabIndex": 9
  },
  {
    "q": "The neighbors sold their old chairs, toys, and books at a sunny Saturday ______.",
    "options": [
      "walk-in closet",
      "garage sale",
      "exchange student",
      "senior citizen"
    ],
    "answer": 1,
    "cn": "鄰居們在陽光明媚的週六車庫二手拍賣上出售他們的舊椅子、玩具和書籍。",
    "vocabIndex": 12
  },
  {
    "q": "Her new apartment has a luxurious ______ where she can hang all her dresses and shoes.",
    "options": [
      "senior citizen",
      "garage sale",
      "walk-in closet",
      "exchange student"
    ],
    "answer": 2,
    "cn": "她的新公寓有一間奢華的步入式衣櫥／更衣室，可以懸掛她所有的洋裝和鞋子。",
    "vocabIndex": 2
  },
  {
    "q": "Bus fares are discounted for any ______ who is over sixty-five years old.",
    "options": [
      "senior citizen",
      "garage sale",
      "walk-in closet",
      "exchange student"
    ],
    "answer": 0,
    "cn": "任何年滿六十五歲的年長者／銀髮公民搭乘公車皆享有票價優惠。",
    "vocabIndex": 0
  },
  {
    "q": "Island nations have special ______ advantages because they are surrounded by open sea.",
    "options": [
      "geographic",
      "civic",
      "legal",
      "geographical"
    ],
    "answer": 3,
    "cn": "島國擁有特殊的地理優勢，因為它們被開闊的海洋所環繞。",
    "vocabIndex": 14
  },
  {
    "q": "The high mountains and rushing rivers are notable ______ features of this country.",
    "options": [
      "legal",
      "geographical",
      "civic",
      "foreign"
    ],
    "answer": 1,
    "cn": "高聳山脈與湍急河流是這個國家顯著的地理特徵。",
    "vocabIndex": 14
  },
  {
    "q": "The large passenger cruise ship will ______ at the island port early tomorrow morning.",
    "options": [
      "dam",
      "exchange",
      "dock",
      "flute"
    ],
    "answer": 2,
    "cn": "那艘大型客運遊輪將於明天清晨在該島港口靠泊碼頭。",
    "vocabIndex": 5
  },
  {
    "q": "Beavers work together with branches and stones to ______ up the small mountain stream.",
    "options": [
      "dock",
      "exchange",
      "flute",
      "dam"
    ],
    "answer": 3,
    "cn": "海狸們用樹枝和石塊協力合作，將山間小溪築壩攔截。",
    "vocabIndex": 3
  },
  {
    "q": "The two businessmen smiled and ______ their phone numbers after finishing lunch.",
    "options": [
      "exchanged",
      "dammed",
      "docked",
      "fluted"
    ],
    "answer": 0,
    "cn": "兩位商人在吃完午餐後微笑並交換了他們的電話號碼。",
    "vocabIndex": 7
  },
  {
    "q": "The small fishing boat ______ beside the wooden pier so the crew could step onto land.",
    "options": [
      "dammed",
      "docked",
      "exchanged",
      "citizen"
    ],
    "answer": 1,
    "cn": "那艘小型漁船停靠在木碼頭旁，以便船員們能走上陸地。",
    "vocabIndex": 5
  },
  {
    "q": "The government decided to ______ the river to prevent flash floods during the rainy season.",
    "options": [
      "dock",
      "exchange",
      "dam",
      "garage"
    ],
    "answer": 2,
    "cn": "政府決定在河上築壩攔截，以防止雨季期間發生暴洪。",
    "vocabIndex": 3
  },
  {
    "q": "I gave my brother my old skateboard ______ his warm winter coat.",
    "options": [
      "senior citizen",
      "beat around the bush",
      "bundle up",
      "in exchange for"
    ],
    "answer": 3,
    "cn": "我把我的舊滑板給我哥哥，作為交換他那件保暖冬大衣的代價。",
    "vocabIndex": 7
  },
  {
    "q": "The kind farmer offered food and shelter to travelers ______ their help on the farm.",
    "options": [
      "in exchange for",
      "bundle up",
      "beat around the bush",
      "garage sale"
    ],
    "answer": 0,
    "cn": "那位仁慈的農民為旅人提供食物和住處，作為交換他們在農場協助工作的回報。",
    "vocabIndex": 7
  },
  {
    "q": "Before going to sleep, Dad always makes sure all cars are safely parked ______.",
    "options": [
      "in exchange for",
      "bundle up",
      "in the garage",
      "at first glance"
    ],
    "answer": 2,
    "cn": "在睡覺之前，爸爸總是確保所有的車輛都安全停放在車庫裡。",
    "vocabIndex": 11
  },
  {
    "q": "We bought two vintage ceramic cups for only five dollars ______ down the street.",
    "options": [
      "in exchange for",
      "at a garage sale",
      "bundle up",
      "in the closet"
    ],
    "answer": 1,
    "cn": "我們在街角二手車庫拍賣上只花五美元就買到了兩個古董陶瓷杯。",
    "vocabIndex": 12
  },
  {
    "q": "Hang your damp raincoat ______ near the front door so the floor stays dry.",
    "options": [
      "bundle up",
      "in exchange for",
      "in the closet",
      "at a garage sale"
    ],
    "answer": 2,
    "cn": "把你微濕的雨衣掛在前門附近的衣櫥裡，這樣地板才能保持乾燥。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "citizen": {
    "pos": "n.",
    "en_def": "a legally recognized subject or national of a state or commonwealth",
    "cn_def": "公民；國民；市民（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a legally recognized subject or national of a state or commonwealth",
        "cn_def": "公民；國民；市民（可數）"
      }
    ]
  },
  "citizenship": {
    "pos": "n.",
    "en_def": "the position or status of being a citizen of a particular country",
    "cn_def": "公民身分；公民權（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the position or status of being a citizen of a particular country",
        "cn_def": "公民身分；公民權（不可數）"
      }
    ]
  },
  "closet": {
    "pos": "n.",
    "en_def": "a small room or large tall cupboard used for storing clothes and personal items",
    "cn_def": "衣櫥；壁櫥；儲藏室（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small room or large tall cupboard used for storing clothes and personal items",
        "cn_def": "衣櫥；壁櫥；儲藏室（可數）"
      }
    ]
  },
  "dam": {
    "pos": "n.",
    "en_def": "a barrier constructed across a river to hold back water and raise its level",
    "cn_def": "水壩；水閘（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a barrier constructed across a river to hold back water and raise its level",
        "cn_def": "水壩；水閘（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to build a dam across a river or stream to stop the flow of water",
        "cn_def": "築壩阻擋；攔截（河流）（動詞）"
      }
    ]
  },
  "dock": {
    "pos": "n.",
    "en_def": "a structure extending along or out from the shore where ships can load and unload",
    "cn_def": "碼頭；船塢；裝卸區（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a structure extending along or out from the shore where ships can load and unload",
        "cn_def": "碼頭；船塢；裝卸區（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to bring a ship or boat into a dock; to deduct money from someone's wages",
        "cn_def": "（船隻）靠岸；停泊碼頭；扣除（工資）"
      }
    ]
  },
  "exchange": {
    "pos": "n.",
    "en_def": "an act of giving one thing and receiving another in return; a short conversation",
    "cn_def": "交換；交流；匯兌（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of giving one thing and receiving another in return; a short conversation",
        "cn_def": "交換；交流；匯兌（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to give something and receive something of equivalent value in return",
        "cn_def": "交換；調換；兌換（動詞）"
      }
    ]
  },
  "exchange student": {
    "pos": "n.phr.",
    "en_def": "a student who studies abroad at a partner school or university for a period",
    "cn_def": "交換學生",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a student who studies abroad at a partner school or university for a period",
        "cn_def": "交換學生"
      }
    ]
  },
  "flute": {
    "pos": "n.",
    "en_def": "a high-pitched wind instrument consisting of a tube with holes stopped by fingers or keys",
    "cn_def": "長笛；笛子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a high-pitched wind instrument consisting of a tube with holes stopped by fingers or keys",
        "cn_def": "長笛；笛子（可數）"
      }
    ]
  },
  "garage": {
    "pos": "n.",
    "en_def": "a building or shed for housing motor vehicles; a repair shop for cars",
    "cn_def": "車庫；修車廠（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building or shed for housing motor vehicles; a repair shop for cars",
        "cn_def": "車庫；修車廠（可數）"
      }
    ]
  },
  "garage sale": {
    "pos": "n.phr.",
    "en_def": "a sale of miscellaneous secondhand household items held in the garage or front yard",
    "cn_def": "車庫拍賣；二手雜物出清拍賣",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a sale of miscellaneous secondhand household items held in the garage or front yard",
        "cn_def": "車庫拍賣；二手雜物出清拍賣"
      }
    ]
  },
  "geography": {
    "pos": "n.",
    "en_def": "the study of the physical features of the earth, its atmosphere, and human activity",
    "cn_def": "地理學；地形；地理分佈（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the study of the physical features of the earth, its atmosphere, and human activity",
        "cn_def": "地理學；地形；地理分佈（不可數）"
      }
    ]
  },
  "geographical": {
    "pos": "adj.",
    "en_def": "based on or derived from the physical features of an area",
    "cn_def": "地理學的；地理特徵的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on or derived from the physical features of an area",
        "cn_def": "地理學的；地理特徵的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
