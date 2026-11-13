// Lesson 16 Quiz Data: Home Architecture, Rooms & Interior Storage
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 16 - Home Architecture, Rooms & Interior Storage",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "balcony",
    "pos": "n.",
    "cn_def": "陽台",
    "en_def": "a platform projecting from the wall of a building",
    "sentence": "On cool summer evenings, my grandparents enjoy sitting on the second-floor {{BLANK}} to watch the street below.",
    "cn": "在涼爽的夏日傍晚，我的祖父母喜歡坐在二樓陽台上觀看下方街景。"
  },
  {
    "word": "basement",
    "pos": "n.",
    "cn_def": "地下室",
    "en_def": "the lowest floor of a building located entirely or partly underground",
    "sentence": "During heavy summer rainstorms, father went down to the dark {{BLANK}} to check if water had entered.",
    "cn": "在夏季強烈暴風雨期間，父親走到黑暗的地下室檢查是否有水滲入。"
  },
  {
    "word": "garage",
    "pos": "n.",
    "cn_def": "車庫",
    "en_def": "a building or indoor space used for housing motor vehicles",
    "sentence": "Uncle Robert parked his new electric car inside the spacious {{BLANK}} and plugged it into the charger.",
    "cn": "羅伯特叔叔將他的新電動車停進寬敞的車庫裡，並插上充電器。"
  },
  {
    "word": "fence",
    "pos": "n.",
    "cn_def": "籬笆；柵欄",
    "en_def": "a wooden or metal barrier enclosing an area of land",
    "sentence": "Our neighbor built a tall wooden {{BLANK}} around his backyard to prevent his energetic dog from running out.",
    "cn": "我們的鄰居在後院周圍建了一道高高的木籬笆，以防止他精力充沛的狗跑出去。"
  },
  {
    "word": "yard",
    "pos": "n.",
    "cn_def": "庭院；院子",
    "en_def": "a piece of ground adjoining a house, often with grass or gardens",
    "sentence": "The cheerful children chased colourful butterflies around the grassy front {{BLANK}} until dinner was ready.",
    "cn": "活潑開朗的孩子們在綠草如茵的前院追逐色彩繽紛的蝴蝶，直到晚餐準備就緒。"
  },
  {
    "word": "bookcase",
    "pos": "n.",
    "cn_def": "書櫃；書架",
    "en_def": "a piece of furniture with shelves used for storing books",
    "sentence": "Professor Miller ordered a custom-made mahogany {{BLANK}} to display his vast collection of antique literature.",
    "cn": "米勒教授訂製了一個紅木書架，以展示他收藏的大量古代文學典籍。"
  },
  {
    "word": "shelf",
    "pos": "n.",
    "cn_def": "層架；架子",
    "en_def": "a flat horizontal board fixed to a wall or frame for displaying objects",
    "sentence": "Mother asked Kevin to reach up and fetch the large porcelain bowl from the highest wooden {{BLANK}}.",
    "cn": "母親請凱文把手伸高，從最高處的木製層架上取下那個大瓷碗。"
  },
  {
    "word": "closet",
    "pos": "n.",
    "cn_def": "壁櫥；衣櫥",
    "en_def": "a tall cupboard or small recess used for storing clothes and coats",
    "sentence": "Before leaving for work, Mr. Davis opened the bedroom {{BLANK}} and selected a crisp navy blue suit.",
    "cn": "出門上班前，戴維斯先生打開臥室衣櫥，挑選了一套筆挺的海軍藍西裝。"
  },
  {
    "word": "drawer",
    "pos": "n.",
    "cn_def": "抽屜",
    "en_def": "a sliding box-like container fitted into a desk or chest of drawers",
    "sentence": "Grandmother kept her golden scissors, sewing needles, and thread safely stored in the top desk {{BLANK}}.",
    "cn": "祖母把她的金剪刀、縫紉針和線安全地收納在書桌最上方的抽屜裡。"
  },
  {
    "word": "dresser",
    "pos": "n.",
    "cn_def": "梳妝台；矮衣櫃",
    "en_def": "a piece of bedroom furniture with drawers and usually a mirror",
    "sentence": "My older sister sat in front of the bedroom {{BLANK}} every morning to comb her hair and apply light makeup.",
    "cn": "我姊姊每天早上坐在臥室梳妝台前梳理頭髮並化上淡淡的妝容。"
  }
];

const MCQS = [
  {
    "q": "From our fourth-floor apartment ______, we can observe the annual New Year fireworks display across the river.",
    "options": [
      "garage",
      "basement",
      "balcony",
      "fence"
    ],
    "answer": 2,
    "cn": "從我們四樓公寓的陽台，我們可以觀看對岸一年一度的跨年煙火秀。 【選項解析】(A) balcony 陽台  (B) basement 地下室  (C) garage 車庫  (D) fence 籬笆。高樓層觀景位置為 balcony。",
    "vocabIndex": 0
  },
  {
    "q": "The old laundry washing machines and heating boilers are installed down in the concrete ______.",
    "options": [
      "balcony",
      "dresser",
      "drawer",
      "basement"
    ],
    "answer": 3,
    "cn": "老舊的洗衣機和供暖鍋爐都安裝在下方的混凝土地下室裡。 【選項解析】(A) balcony 陽台  (B) basement 地下室  (C) drawer 抽屜  (D) dresser 梳妝台。鍋爐設備常置於 basement。",
    "vocabIndex": 1
  },
  {
    "q": "Mr. Brown drove into the two-car ______ and closed the automatic metal roller door behind his vehicle.",
    "options": [
      "balcony",
      "garage",
      "basement",
      "shelf"
    ],
    "answer": 1,
    "cn": "布朗先生開進雙車位車庫，並關閉了車輛後方的自動金屬鐵捲門。 【選項解析】(A) balcony 陽台  (B) basement 地下室  (C) garage 車庫  (D) shelf 架子。停車空間為 two-car garage。",
    "vocabIndex": 2
  },
  {
    "q": "The farmer repaired the wooden boundary ______ to stop wild deer from entering and eating his cabbage crop.",
    "options": [
      "fence",
      "drawer",
      "dresser",
      "balcony"
    ],
    "answer": 0,
    "cn": "農夫修補了木製邊界籬笆，以防止野生鹿跑進來啃食他的高麗菜作物。 【選項解析】(A) balcony 陽台  (B) drawer 抽屜  (C) dresser 梳妝台  (D) fence 籬笆。防野生動物入侵建 wooden boundary fence。",
    "vocabIndex": 3
  },
  {
    "q": "The neighborhood kids love playing badminton and pitching tents in our large grassy back ______.",
    "options": [
      "closet",
      "bookcase",
      "yard",
      "drawer"
    ],
    "answer": 2,
    "cn": "鄰居的孩子們喜歡在我們寬敞、綠草如茵的後院打羽毛球和搭帳篷。 【選項解析】(A) yard 庭院  (B) bookcase 書櫃  (C) closet 衣櫥  (D) drawer 抽屜。戶外活動場所為 grassy back yard。",
    "vocabIndex": 4
  },
  {
    "q": "Dad organized all his encyclopedia volumes in alphabetical order on the large living room ______.",
    "options": [
      "bookcase",
      "yard",
      "drawer",
      "dresser"
    ],
    "answer": 0,
    "cn": "爸爸按照字母順序將他所有的百科全書整齊收納在客廳大書櫃上。 【選項解析】(A) yard 庭院  (B) bookcase 書櫃  (C) drawer 抽屜  (D) dresser 梳妝台。存放百科全書為 bookcase。",
    "vocabIndex": 5
  },
  {
    "q": "The store clerk placed several glass perfume bottles carefully on the illuminated display ______.",
    "options": [
      "garage",
      "shelf",
      "fence",
      "basement"
    ],
    "answer": 1,
    "cn": "店員小心翼翼地將數個玻璃香水瓶擺放在有照明的展示層架上。 【選項解析】(A) garage 車庫  (B) fence 籬笆  (C) shelf 層架  (D) basement 地下室。商品陳列板為 display shelf。",
    "vocabIndex": 6
  },
  {
    "q": "Hang your winter overcoat on a wooden hanger and place it inside the hallway ______.",
    "options": [
      "fence",
      "yard",
      "balcony",
      "closet"
    ],
    "answer": 3,
    "cn": "把你的冬季大衣掛在木衣架上，並放進走廊的衣櫥裡面。 【選項解析】(A) fence 籬笆  (B) yard 庭院  (C) balcony 陽台  (D) closet 衣櫥。懸掛大衣放置於 hallway closet。",
    "vocabIndex": 7
  },
  {
    "q": "Tom opened the wooden desk ______ to look for a pair of scissors and a fresh ballpoint pen.",
    "options": [
      "drawer",
      "fence",
      "garage",
      "yard"
    ],
    "answer": 0,
    "cn": "湯姆拉開木製書桌抽屜，尋找一把剪刀和一支新的原子筆。 【選項解析】(A) drawer 抽屜  (B) fence 籬笆  (C) garage 車庫  (D) yard 庭院。書桌可抽拉收納為 desk drawer。",
    "vocabIndex": 8
  },
  {
    "q": "Mother keeps perfume bottles, cosmetics, and jewelry boxes neatly arranged on top of her bedroom ______.",
    "options": [
      "fence",
      "basement",
      "yard",
      "dresser"
    ],
    "answer": 3,
    "cn": "母親將香水瓶、化妝品和首飾盒整齊排列在她的臥室梳妝台上。 【選項解析】(A) fence 籬笆  (B) dresser 梳妝台  (C) yard 庭院  (D) basement 地下室。擺放化妝品之矮櫃為 bedroom dresser。",
    "vocabIndex": 9
  },
  {
    "q": "We set up a small table and two folding chairs on the flower-filled ______ to drink afternoon coffee.",
    "options": [
      "basement",
      "fence",
      "balcony",
      "drawer"
    ],
    "answer": 2,
    "cn": "我們在繁花盛開的陽台上擺放了一張小桌子和兩張折疊椅來喝下午茶咖啡。 【選項解析】(A) basement 地下室  (B) fence 籬笆  (C) balcony 陽台  (D) drawer 抽屜。戶外喝咖啡於 flower-filled balcony。",
    "vocabIndex": 0
  },
  {
    "q": "During the tornado warning, families in the Midwestern United States quickly retreated to the storm ______.",
    "options": [
      "fence",
      "basement",
      "dresser",
      "balcony"
    ],
    "answer": 1,
    "cn": "在龍捲風警報期間，美國中西部的家庭迅速撤離到防風暴地下室避難。 【選項解析】(A) fence 籬笆  (B) balcony 陽台  (C) dresser 梳妝台  (D) basement 地下室。避龍捲風進 storm basement。",
    "vocabIndex": 1
  },
  {
    "q": "You should clear those old boxes out of the private ______ so there is enough room to park the family minivan.",
    "options": [
      "fence",
      "balcony",
      "drawer",
      "garage"
    ],
    "answer": 3,
    "cn": "你應該把那些舊箱子從私人車庫清走，這樣才有足夠空間停放休旅車。 【選項解析】(A) garage 車庫  (B) balcony 陽台  (C) drawer 抽屜  (D) fence 籬笆。停放廂型車需清理 private garage。",
    "vocabIndex": 2
  },
  {
    "q": "A white picket ______ borders the charming country cottage and separates the front lawn from the lane.",
    "options": [
      "yard",
      "drawer",
      "fence",
      "dresser"
    ],
    "answer": 2,
    "cn": "一道白色尖頭木籬笆環繞著迷人的鄉村農舍，並將前草坪與小徑隔開。 【選項解析】(A) yard 庭院  (B) fence 籬笆  (C) drawer 抽屜  (D) dresser 梳妝台。經典美式白色籬笆為 white picket fence。",
    "vocabIndex": 3
  },
  {
    "q": "The children planted sunflowers and sweet cherry tomatoes along the perimeter of the sunny ______.",
    "options": [
      "bookcase",
      "yard",
      "drawer",
      "closet"
    ],
    "answer": 1,
    "cn": "孩子們在陽光充沛的院子周圍種下了向日葵和甜櫻桃番茄。 【選項解析】(A) bookcase 書櫃  (B) drawer 抽屜  (C) yard 院子  (D) closet 衣櫥。戶外種植花卉蔬菜在 sunny yard。",
    "vocabIndex": 4
  },
  {
    "q": "Hundreds of leather-bound classical novels fill every single row of the professor's oak ______.",
    "options": [
      "bookcase",
      "yard",
      "fence",
      "drawer"
    ],
    "answer": 0,
    "cn": "數百本皮質封面的古典小說填滿了教授橡木書架上的每一格。 【選項解析】(A) drawer 抽屜  (B) yard 院子  (C) fence 籬笆  (D) bookcase 書櫃。藏書傢俱為 oak bookcase。",
    "vocabIndex": 5
  },
  {
    "q": "Can you reach up to that high kitchen ______ and hand me down the jar of dried oregano seasoning?",
    "options": [
      "basement",
      "fence",
      "yard",
      "shelf"
    ],
    "answer": 3,
    "cn": "你能伸手夠到廚房上方的高架子，把那罐牛至香料遞給我嗎？ 【選項解析】(A) shelf 架子  (B) fence 籬笆  (C) yard 院子  (D) basement 地下室。廚房置物板為 kitchen shelf。",
    "vocabIndex": 6
  },
  {
    "q": "In winter, mother stores heavy down blankets in vacuum-sealed plastic bags inside the master bedroom ______.",
    "options": [
      "fence",
      "closet",
      "yard",
      "balcony"
    ],
    "answer": 1,
    "cn": "在冬天，母親把厚羽絨被收納在真空袋裡，放在主臥室的衣櫥裡。 【選項解析】(A) fence 籬笆  (B) closet 衣櫥  (C) yard 院子  (D) balcony 陽台。存放棉被於 master bedroom closet。",
    "vocabIndex": 7
  },
  {
    "q": "I can never find clean socks because my brother constantly mixes up his clothes in the shared dresser ______.",
    "options": [
      "drawer",
      "yard",
      "fence",
      "balcony"
    ],
    "answer": 0,
    "cn": "我總是找不到乾淨的襪子，因為我弟弟總是在共用的矮櫃抽屜裡把衣服混在一起。 【選項解析】(A) fence 籬笆  (B) yard 院子  (C) drawer 抽屜  (D) balcony 陽台。存放衣物的滑動盒為 dresser drawer。",
    "vocabIndex": 8
  },
  {
    "q": "The mirror attached to the vintage wooden ______ had to be cleaned because it was covered in dust.",
    "options": [
      "fence",
      "yard",
      "dresser",
      "balcony"
    ],
    "answer": 2,
    "cn": "附在那座復古木製梳妝台上的鏡子必須擦拭，因為上面沾滿了灰塵。 【選項解析】(A) fence 籬笆  (B) yard 院子  (C) balcony 陽台  (D) dresser 梳妝台。附帶鏡子的梳妝矮櫃為 vintage wooden dresser。",
    "vocabIndex": 9
  },
  {
    "q": "Potted geraniums and fresh basil plants flourish under the warm morning sun on our open ______.",
    "options": [
      "closet",
      "drawer",
      "dresser",
      "balcony"
    ],
    "answer": 3,
    "cn": "盆栽天竺葵與新鮮羅勒植物在我們開放式陽台上的溫暖晨光下茂盛生長。 【選項解析】(A) balcony 陽台  (B) drawer 抽屜  (C) dresser 梳妝台  (D) closet 衣櫥。植栽盆栽放於 open balcony。",
    "vocabIndex": 0
  },
  {
    "q": "Because there are no windows down in the underground ______, we installed bright overhead LED tube lights.",
    "options": [
      "balcony",
      "basement",
      "fence",
      "yard"
    ],
    "answer": 1,
    "cn": "因為地下室沒有窗戶，所以我們安裝了明亮的頂置LED燈管。 【選項解析】(A) balcony 陽台  (B) basement 地下室  (C) fence 籬笆  (D) yard 庭院。地底無窗空間為 underground basement。",
    "vocabIndex": 1
  },
  {
    "q": "The mechanic's home ______ is equipped with heavy-duty diagnostic computers and hydraulic lifting jacks.",
    "options": [
      "balcony",
      "shelf",
      "garage",
      "drawer"
    ],
    "answer": 2,
    "cn": "這位技師的自家車庫配備了重型診斷電腦和油壓千斤頂起重機。 【選項解析】(A) balcony 陽台  (B) shelf 架子  (C) garage 車庫  (D) drawer 抽屜。修車場兼車庫為 home garage。",
    "vocabIndex": 2
  },
  {
    "q": "The barbed-wire security ______ surrounding the military installation is monitored by electronic cameras 24 hours a day.",
    "options": [
      "fence",
      "yard",
      "balcony",
      "drawer"
    ],
    "answer": 0,
    "cn": "圍繞軍事基地的鐵絲網安全籬笆全天候24小時由電子監控攝影機監看。 【選項解析】(A) drawer 抽屜  (B) yard 院子  (C) balcony 陽台  (D) fence 鐵絲網籬笆。防護圍牆為 security fence。",
    "vocabIndex": 3
  },
  {
    "q": "Father spent all Saturday afternoon mowing the overgrown green grass in our spacious front ______.",
    "options": [
      "closet",
      "yard",
      "bookcase",
      "dresser"
    ],
    "answer": 1,
    "cn": "父親星期六整個下午都在為我們寬敞前院雜草叢生的綠草修剪草皮。 【選項解析】(A) yard 前院  (B) closet 衣櫥  (C) bookcase 書架  (D) dresser 梳妝台。割草修剪在 spacious front yard。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "balcony": {
    "pos": "n.",
    "en_def": "a platform projecting from the wall of a building",
    "cn_def": "陽台",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a platform projecting from the wall of a building",
        "cn_def": "陽台"
      }
    ]
  },
  "basement": {
    "pos": "n.",
    "en_def": "the lowest floor of a building located entirely or partly underground",
    "cn_def": "地下室",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the lowest floor of a building located entirely or partly underground",
        "cn_def": "地下室"
      }
    ]
  },
  "garage": {
    "pos": "n.",
    "en_def": "a building or indoor space used for housing motor vehicles",
    "cn_def": "車庫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building or indoor space used for housing motor vehicles",
        "cn_def": "車庫"
      }
    ]
  },
  "fence": {
    "pos": "n.",
    "en_def": "a wooden or metal barrier enclosing an area of land",
    "cn_def": "籬笆；柵欄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a wooden or metal barrier enclosing an area of land",
        "cn_def": "籬笆；柵欄"
      }
    ]
  },
  "yard": {
    "pos": "n.",
    "en_def": "a piece of ground adjoining a house, often with grass or gardens",
    "cn_def": "庭院；院子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of ground adjoining a house, often with grass or gardens",
        "cn_def": "庭院；院子"
      }
    ]
  },
  "bookcase": {
    "pos": "n.",
    "en_def": "a piece of furniture with shelves used for storing books",
    "cn_def": "書櫃；書架",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of furniture with shelves used for storing books",
        "cn_def": "書櫃；書架"
      }
    ]
  },
  "shelf": {
    "pos": "n.",
    "en_def": "a flat horizontal board fixed to a wall or frame for displaying objects",
    "cn_def": "層架；架子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat horizontal board fixed to a wall or frame for displaying objects",
        "cn_def": "層架；架子"
      }
    ]
  },
  "closet": {
    "pos": "n.",
    "en_def": "a tall cupboard or small recess used for storing clothes and coats",
    "cn_def": "壁櫥；衣櫥",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tall cupboard or small recess used for storing clothes and coats",
        "cn_def": "壁櫥；衣櫥"
      }
    ]
  },
  "drawer": {
    "pos": "n.",
    "en_def": "a sliding box-like container fitted into a desk or chest of drawers",
    "cn_def": "抽屜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sliding box-like container fitted into a desk or chest of drawers",
        "cn_def": "抽屜"
      }
    ]
  },
  "dresser": {
    "pos": "n.",
    "en_def": "a piece of bedroom furniture with drawers and usually a mirror",
    "cn_def": "梳妝台；矮衣櫃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of bedroom furniture with drawers and usually a mirror",
        "cn_def": "梳妝台；矮衣櫃"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
