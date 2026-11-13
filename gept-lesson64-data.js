// Lesson 64 Quiz Data: Cardinal Directions, Entrances, Exits & Social Invitations
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 64 - Cardinal Directions, Entrances, Exits & Social Invitations",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "direction",
    "pos": "n.",
    "cn_def": "方向；指示",
    "en_def": "the course along which someone or something moves; instructions",
    "sentence": "The wind changed its {{BLANK}} suddenly during the sailing race, so the crew had to adjust their main sail quickly.",
    "cn": "在帆船比賽中風向突然改變，因此船員們必須迅速調整他們的主帆。"
  },
  {
    "word": "eastern",
    "pos": "adj.",
    "cn_def": "東方的；東部的",
    "en_def": "located in or facing toward the east",
    "sentence": "The {{BLANK}} coast of Taiwan is renowned for its magnificent rocky cliffs and stunning Pacific Ocean sunrise views.",
    "cn": "台灣東部海岸以其壯麗的岩石懸崖和令人驚嘆的太平洋日出景色而聞名遐邇。"
  },
  {
    "word": "western",
    "pos": "adj.",
    "cn_def": "西方的；西部的",
    "en_def": "located in or facing toward the west",
    "sentence": "In modern medicine, doctors often combine traditional herbal remedies with advanced {{BLANK}} medical techniques.",
    "cn": "在現代醫學中，醫生常將傳統草本療法與先進的西方醫療技術相互結合。"
  },
  {
    "word": "southern",
    "pos": "adj.",
    "cn_def": "南方的；南部的",
    "en_def": "located in or facing toward the south",
    "sentence": "Many retired couples choose to spend their winters in {{BLANK}} California because the climate is warm and sunny.",
    "cn": "許多退休夫婦選擇在加州南部度過冬天，因為當地的氣候溫暖而陽光明媚。"
  },
  {
    "word": "northern",
    "pos": "adj.",
    "cn_def": "北方的；北部的",
    "en_def": "located in or facing toward the north",
    "sentence": "The expedition team traveled across {{BLANK}} Europe to study migratory arctic birds during their breeding season.",
    "cn": "探險隊橫越北歐，以研究北極候鳥在繁殖季節期間的習性。"
  },
  {
    "word": "entrance",
    "pos": "n.",
    "cn_def": "入口；門口",
    "en_def": "an opening, such as a door or gate, through which one enters",
    "sentence": "Visitors must show their identification cards at the main {{BLANK}} before entering the government building.",
    "cn": "訪客在進入政府大樓之前，必須在主要入口處出示身分證件。"
  },
  {
    "word": "gate",
    "pos": "n.",
    "cn_def": "大門；出入口",
    "en_def": "a hinged barrier used to close an opening in a wall or fence",
    "sentence": "The school security guard locks the front iron {{BLANK}} at seven in the evening, so late students must register.",
    "cn": "學校警衛在晚上七點將前鐵大門鎖上，因此遲到的學生必須進行登記。"
  },
  {
    "word": "exit",
    "pos": "n. / v.",
    "cn_def": "出口；離開",
    "en_def": "a passage or doorway by which one leaves; to depart",
    "sentence": "Every modern movie theater is equipped with clearly illuminated green {{BLANK}} signs above all emergency doors.",
    "cn": "每家現代電影院在所有緊急逃生門上方，都配備有清晰亮著的綠色出口標示。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone politely to come to an event or participate",
    "sentence": "Jenny plans to {{BLANK}} all her close high school classmates to her eighteenth birthday dinner celebration.",
    "cn": "珍妮計畫邀請她所有的高中摯友，參加她十八歲的生日晚餐慶祝活動。"
  },
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請卡；請帖",
    "en_def": "a written or verbal request inviting someone to attend an event",
    "sentence": "We received a formal printed wedding {{BLANK}} in the mail yesterday, and we immediately sent our congratulations.",
    "cn": "我們昨天在郵件中收到了正式印製的結婚請帖，並立即寄出了我們的祝賀。"
  }
];

const MCQS = [
  {
    "q": "When driving through the thick fog, the lost driver was unable to determine the correct compass ______.",
    "options": [
      "entrance",
      "direction",
      "gate",
      "exit"
    ],
    "answer": 1,
    "cn": "開車穿過濃霧時，迷路的司機無法確定正確的羅盤方向。 【選項解析】(A) entrance 入口  (B) gate 大門  (C) direction 方向  (D) exit 出口。羅盤指引的是 direction。",
    "vocabIndex": 0
  },
  {
    "q": "The train traveled along the ______ railway line, giving passengers spectacular views of the Pacific sun.",
    "options": [
      "western",
      "southern",
      "eastern",
      "northern"
    ],
    "answer": 2,
    "cn": "火車沿著東部鐵路幹線行駛，讓乘客能夠欣賞太平洋日出的壯觀景色。 【選項解析】(A) western 西部的  (B) eastern 東部的  (C) southern 南部的  (D) northern 北部的。見到太平洋日出為台灣東部 eastern。",
    "vocabIndex": 1
  },
  {
    "q": "The university library preserves an extensive collection of ancient Chinese manuscripts and ______ philosophy books.",
    "options": [
      "eastern",
      "southern",
      "northern",
      "western"
    ],
    "answer": 3,
    "cn": "大學圖書館保存了大量中國古代手稿與西方哲學書籍藏書。 【選項解析】(A) eastern 東方的  (B) western 西方的  (C) northern 北方的  (D) southern 南方的。與古代中國手稿對比者為西方哲學 western。",
    "vocabIndex": 2
  },
  {
    "q": "The agricultural valley in the ______ part of the country produces tropical fruits like bananas and mangoes.",
    "options": [
      "southern",
      "eastern",
      "northern",
      "western"
    ],
    "answer": 0,
    "cn": "該國南部的農業山谷生產香蕉和芒果等熱帶水果。 【選項解析】(A) northern 北部的  (B) eastern 東部的  (C) southern 南部的  (D) western 西部的。熱帶水果產地通常在南方 southern。",
    "vocabIndex": 3
  },
  {
    "q": "Winter temperatures in the ______ provinces frequently plummet below zero, bringing heavy snowstorms.",
    "options": [
      "southern",
      "eastern",
      "northern",
      "western"
    ],
    "answer": 2,
    "cn": "北部各省的冬季氣溫經常跌破零度，帶來嚴重的暴風雪。 【選項解析】(A) southern 南部的  (B) eastern 東部的  (C) northern 北部的  (D) western 西部的。嚴冬下暴雪位於北方 northern。",
    "vocabIndex": 4
  },
  {
    "q": "Security guards inspect all backpacks and handbags at the museum ______ to ensure public safety.",
    "options": [
      "direction",
      "entrance",
      "exit",
      "invitation"
    ],
    "answer": 1,
    "cn": "警衛在博物館門口檢查所有背包和手提包，以確保公共安全。 【選項解析】(A) entrance 入口  (B) direction 方向  (C) exit 出口  (D) invitation 邀請。進館安檢設於 entrance。",
    "vocabIndex": 5
  },
  {
    "q": "The farmer closed the wooden ______ to prevent his cows and sheep from wandering onto the highway.",
    "options": [
      "direction",
      "invitation",
      "entrance",
      "gate"
    ],
    "answer": 3,
    "cn": "農民關上了木大門，以防止他的牛羊漫遊到公路上。 【選項解析】(A) direction 方向  (B) invitation 邀請  (C) gate 大門  (D) entrance 入口。圍欄開關的柵門稱為 gate。",
    "vocabIndex": 6
  },
  {
    "q": "During the fire drill, teachers guided students to walk calmly toward the nearest emergency ______.",
    "options": [
      "exit",
      "direction",
      "gate",
      "invitation"
    ],
    "answer": 0,
    "cn": "在消防演習期間，老師引導學生平靜地走向最近的緊急逃生出口。 【選項解析】(A) direction 方向  (B) exit 出口  (C) gate 大門  (D) invitation 請帖。緊急疏散門為 emergency exit。",
    "vocabIndex": 7
  },
  {
    "q": "We would like to ______ our neighbors over for a barbecue dinner in our backyard this Saturday evening.",
    "options": [
      "direct",
      "invite",
      "underline",
      "address"
    ],
    "answer": 1,
    "cn": "我們想邀請鄰居這個星期六晚上來我們後院享用烤肉晚餐。 【選項解析】(A) invite 邀請  (B) direct 引導  (C) underline 畫底線  (D) address 致詞。邀人共進晚餐用 invite。",
    "vocabIndex": 8
  },
  {
    "q": "Mother placed the gold-embossed ______ on the refrigerator door so that the family would not forget the anniversary party.",
    "options": [
      "direction",
      "gate",
      "entrance",
      "invitation"
    ],
    "answer": 3,
    "cn": "母親將燙金請帖貼在冰箱門上，這樣全家人就不會忘記週年慶派對。 【選項解析】(A) direction 方向  (B) gate 大門  (C) entrance 入口  (D) invitation 邀請卡。宴會通知卡片為 invitation。",
    "vocabIndex": 9
  },
  {
    "q": "Always follow the medical ______ printed on the medicine bottle regarding daily dosage and meals.",
    "options": [
      "exits",
      "gates",
      "directions",
      "invitations"
    ],
    "answer": 2,
    "cn": "請務必遵守藥瓶上印刷的關於每日劑量和進餐時間的用藥指示。 【選項解析】(A) exits 出口  (B) directions 指示  (C) gates 大門  (D) invitations 邀請。藥品使用說明為 directions。",
    "vocabIndex": 0
  },
  {
    "q": "The city of Hualien is located in ______ Taiwan, nestled peacefully between rugged mountains and the ocean.",
    "options": [
      "eastern",
      "western",
      "southern",
      "northern"
    ],
    "answer": 0,
    "cn": "花蓮市位於台灣東部，寧靜地坐落在崎嶇群山與海洋之間。 【選項解析】(A) western 西部的  (B) eastern 東部的  (C) southern 南部的  (D) northern 北部的。花蓮地理位置為 eastern Taiwan。",
    "vocabIndex": 1
  },
  {
    "q": "Many international business executives have adopted ______ business etiquette when negotiating contracts.",
    "options": [
      "eastern",
      "western",
      "southern",
      "northern"
    ],
    "answer": 1,
    "cn": "許多國際企業高階主管在洽談合約時，已經採納了西方商業禮儀。 【選項解析】(A) eastern 東方的  (B) southern 南方的  (C) western 西方的  (D) northern 北方的。國際商務禮儀常指 western etiquette。",
    "vocabIndex": 2
  },
  {
    "q": "The tropical typhoon moved rapidly across the ______ coastline, causing tidal surges in fishing harbors.",
    "options": [
      "southern",
      "eastern",
      "western",
      "northern"
    ],
    "answer": 0,
    "cn": "熱帶颱風迅速掠過南部海岸線，在各漁港引發了滔天巨浪。 【選項解析】(A) northern 北部的  (B) eastern 東部的  (C) western 西部的  (D) southern 南部的。南部海岸線為 southern coastline。",
    "vocabIndex": 3
  },
  {
    "q": "Polar bears roam across the freezing ______ regions of Canada and Norway in search of seals.",
    "options": [
      "southern",
      "western",
      "eastern",
      "northern"
    ],
    "answer": 3,
    "cn": "北極熊在加拿大和挪威寒冷的北部地區漫遊，尋找海豹充飢。 【選項解析】(A) southern 南部的  (B) northern 北部的  (C) eastern 東部的  (D) western 西部的。北極熊生活於 northern regions。",
    "vocabIndex": 4
  },
  {
    "q": "Ticket holders lined up early outside the stadium ______ before the rock concert began.",
    "options": [
      "direction",
      "invitation",
      "entrance",
      "exit"
    ],
    "answer": 2,
    "cn": "在搖滾演唱會開始前，持票者一大早就在體育場入口外排隊等候。 【選項解析】(A) direction 方向  (B) entrance 入口  (C) invitation 邀請  (D) exit 出口。進場排隊處為 stadium entrance。",
    "vocabIndex": 5
  },
  {
    "q": "Please wait for me outside the main school ______ after your afternoon English class finishes.",
    "options": [
      "direction",
      "gate",
      "invitation",
      "exit"
    ],
    "answer": 1,
    "cn": "下午英文課結束後，請在學校正門外等我。 【選項解析】(A) gate 大門  (B) direction 方向  (C) invitation 請帖  (D) exit 出口。學校門口為 school gate。",
    "vocabIndex": 6
  },
  {
    "q": "In case of an earthquake, stay calm and follow the illuminated green signs toward the building ______.",
    "options": [
      "direction",
      "gate",
      "entrance",
      "exit"
    ],
    "answer": 3,
    "cn": "萬一發生地震，請保持冷靜並跟隨發光的綠色標誌走向建築物出口。 【選項解析】(A) direction 方向  (B) gate 大門  (C) entrance 入口  (D) exit 出口。逃生路線通往 building exit。",
    "vocabIndex": 7
  },
  {
    "q": "Did you ______ your homeroom teacher to attend the class graduation ceremony next week?",
    "options": [
      "invite",
      "direct",
      "broadcast",
      "address"
    ],
    "answer": 0,
    "cn": "你有邀請你們的班導師參加下週的班級畢業典禮嗎？ 【選項解析】(A) direct 指引  (B) invite 邀請  (C) broadcast 轉播  (D) address 致詞。邀人參加典禮用 invite。",
    "vocabIndex": 8
  },
  {
    "q": "The couple designed an elegant digital ______ and emailed it to all their friends around the world.",
    "options": [
      "entrance",
      "exit",
      "invitation",
      "direction"
    ],
    "answer": 2,
    "cn": "這對夫婦設計了一份精雅的電子請帖，並透過電子郵件寄給全球所有好友。 【選項解析】(A) entrance 入口  (B) exit 出口  (C) invitation 請帖  (D) direction 方向。寄發的電子請帖為 digital invitation。",
    "vocabIndex": 9
  },
  {
    "q": "The compass needle always points in a steady ______ toward magnetic north.",
    "options": [
      "gate",
      "direction",
      "exit",
      "invitation"
    ],
    "answer": 1,
    "cn": "指南針的指針始終穩定地指向磁北方向。 【選項解析】(A) direction 方向  (B) gate 大門  (C) exit 出口  (D) invitation 請帖。針指著某個 direction。",
    "vocabIndex": 0
  },
  {
    "q": "The bullet train connects the busy cities along the ______ coast of the island within ninety minutes.",
    "options": [
      "northern",
      "southern",
      "western",
      "eastern"
    ],
    "answer": 2,
    "cn": "高鐵在九十分鐘內串聯了這座島嶼西部海岸的繁華都市。 【選項解析】(A) northern 北部的  (B) western 西部的  (C) southern 南部的  (D) eastern 東部的。台灣高鐵貫穿西部 western coast。",
    "vocabIndex": 2
  },
  {
    "q": "The hotel provides a private ______ that leads hotel guests directly onto the white sandy beach.",
    "options": [
      "entrance",
      "direction",
      "invitation",
      "exit"
    ],
    "answer": 0,
    "cn": "飯店提供了一處私人通道入口，引導房客直接通往白色沙灘。 【選項解析】(A) entrance 入口  (B) direction 方向  (C) invitation 請帖  (D) exit 出口。通往沙灘的入口為 private entrance。",
    "vocabIndex": 5
  },
  {
    "q": "The flight attendant announced that passengers seated near the emergency ______ should read the safety guide.",
    "options": [
      "invitation",
      "direction",
      "gate",
      "exit"
    ],
    "answer": 3,
    "cn": "空服員宣布坐在緊急逃生出口附近的乘客應該詳細閱讀安全指南。 【選項解析】(A) invitation 請帖  (B) direction 方向  (C) exit 出口  (D) gate 大門。飛機逃生門為 emergency exit。",
    "vocabIndex": 7
  },
  {
    "q": "I received a warm ______ to speak at the international youth environmental conference in Singapore.",
    "options": [
      "invitation",
      "gate",
      "exit",
      "direction"
    ],
    "answer": 0,
    "cn": "我收到了一份熱情的邀請，前往新加坡的國際青年環保大會上演講。 【選項解析】(A) direction 方向  (B) gate 大門  (C) exit 出口  (D) invitation 邀請。演講邀請為 warm invitation。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "direction": {
    "pos": "n.",
    "en_def": "the course along which someone or something moves; instructions",
    "cn_def": "方向；指示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the course along which someone or something moves; instructions",
        "cn_def": "方向；指示"
      }
    ]
  },
  "eastern": {
    "pos": "adj.",
    "en_def": "located in or facing toward the east",
    "cn_def": "東方的；東部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "located in or facing toward the east",
        "cn_def": "東方的；東部的"
      }
    ]
  },
  "western": {
    "pos": "adj.",
    "en_def": "located in or facing toward the west",
    "cn_def": "西方的；西部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "located in or facing toward the west",
        "cn_def": "西方的；西部的"
      }
    ]
  },
  "southern": {
    "pos": "adj.",
    "en_def": "located in or facing toward the south",
    "cn_def": "南方的；南部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "located in or facing toward the south",
        "cn_def": "南方的；南部的"
      }
    ]
  },
  "northern": {
    "pos": "adj.",
    "en_def": "located in or facing toward the north",
    "cn_def": "北方的；北部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "located in or facing toward the north",
        "cn_def": "北方的；北部的"
      }
    ]
  },
  "entrance": {
    "pos": "n.",
    "en_def": "an opening, such as a door or gate, through which one enters",
    "cn_def": "入口；門口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an opening, such as a door or gate, through which one enters",
        "cn_def": "入口；門口"
      }
    ]
  },
  "gate": {
    "pos": "n.",
    "en_def": "a hinged barrier used to close an opening in a wall or fence",
    "cn_def": "大門；出入口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hinged barrier used to close an opening in a wall or fence",
        "cn_def": "大門；出入口"
      }
    ]
  },
  "exit": {
    "pos": "n. / v.",
    "en_def": "a passage or doorway by which one leaves; to depart",
    "cn_def": "出口；離開",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a passage or doorway by which one leaves; to depart",
        "cn_def": "出口；離開"
      }
    ]
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone politely to come to an event or participate",
    "cn_def": "邀請",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to ask someone politely to come to an event or participate",
        "cn_def": "邀請"
      }
    ]
  },
  "invitation": {
    "pos": "n.",
    "en_def": "a written or verbal request inviting someone to attend an event",
    "cn_def": "邀請卡；請帖",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a written or verbal request inviting someone to attend an event",
        "cn_def": "邀請卡；請帖"
      }
    ]
  },
  "direct": {
    "pos": "",
    "en_def": "",
    "cn_def": "引導",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "引導"
      }
    ]
  },
  "underline": {
    "pos": "",
    "en_def": "",
    "cn_def": "畫底線",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "畫底線"
      }
    ]
  },
  "address": {
    "pos": "",
    "en_def": "",
    "cn_def": "致詞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "致詞"
      }
    ]
  },
  "exits": {
    "pos": "",
    "en_def": "",
    "cn_def": "出口",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "出口"
      }
    ]
  },
  "gates": {
    "pos": "",
    "en_def": "",
    "cn_def": "大門",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "大門"
      }
    ]
  },
  "directions": {
    "pos": "",
    "en_def": "",
    "cn_def": "指示",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "指示"
      }
    ]
  },
  "invitations": {
    "pos": "",
    "en_def": "",
    "cn_def": "邀請",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "邀請"
      }
    ]
  },
  "broadcast": {
    "pos": "",
    "en_def": "",
    "cn_def": "轉播",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "轉播"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
