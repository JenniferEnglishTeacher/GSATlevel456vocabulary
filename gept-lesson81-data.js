// Lesson 81 Quiz Data: Physical Actions, Movement Dynamics & Natural Phenomena
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 81 - Physical Actions, Movement Dynamics & Natural Phenomena",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "include",
    "pos": "v.",
    "cn_def": "包含；包括",
    "en_def": "to contain or make someone or something part of a group",
    "sentence": "The full registration fee will {{BLANK}} all seminar materials and warm buffet lunches, but hotel rooms must be booked separately.",
    "cn": "全額註冊費將會包含所有研討會資料和熱騰騰的自助午餐，但飯店房間必須分開預訂。"
  },
  {
    "word": "mix",
    "pos": "v. / n.",
    "cn_def": "混合；混合物",
    "en_def": "to combine different things together; a combination",
    "sentence": "You should gently {{BLANK}} the fresh flour and eggs in a large glass bowl before you add milk to bake the cake.",
    "cn": "在加入牛奶烘烤蛋糕之前，你應該先在一個大玻璃碗中輕輕混合新鮮麵粉和雞蛋。"
  },
  {
    "word": "rise",
    "pos": "v. / n.",
    "cn_def": "上升；升起",
    "en_def": "to move upwards; to increase in level or amount",
    "sentence": "When morning comes over the eastern hills, the bright sun begins to {{BLANK}} slowly, and songbirds start singing loudly in the forest.",
    "cn": "當清晨降臨在東方山丘上時，明亮的太陽開始緩緩升起，而鳴鳥也開始在森林中大聲歌唱。"
  },
  {
    "word": "rub",
    "pos": "v. / n.",
    "cn_def": "摩擦；搓揉",
    "en_def": "to move your hand or an object back and forth across a surface",
    "sentence": "Because the cold winter wind made his hands freeze, Jimmy had to {{BLANK}} his palms together quickly to produce some warmth.",
    "cn": "因為寒冷的冬風讓他的雙手凍僵，吉米不得不迅速搓揉手掌以產生些許溫暖。"
  },
  {
    "word": "shoot",
    "pos": "v.",
    "cn_def": "射擊；發射；射門",
    "en_def": "to fire a bullet or arrow; to kick or hit a ball toward a goal",
    "sentence": "The brave soldier received a strict military command not to {{BLANK}} his rifle unless the enemy forces entered the border zone.",
    "cn": "這位英勇的士兵接到了嚴格的軍事命令，除非敵軍進入邊境地帶，否則不得發射步槍。"
  },
  {
    "word": "shock",
    "pos": "n. / v.",
    "cn_def": "震驚；使震驚",
    "en_def": "a sudden violent shaking; a state of extreme surprise",
    "sentence": "The tragic news of the plane crash came as a terrible {{BLANK}} to everyone in town, and neighbors gathered in tears to support the family.",
    "cn": "空難的悲慘消息給鎮上的每個人帶來極大的震驚，鄰居們含著淚水聚集在一起支持家屬。"
  },
  {
    "word": "shine",
    "pos": "v. / n.",
    "cn_def": "發光；照耀",
    "en_def": "to produce or reflect light; brightness",
    "sentence": "After three rainy days on the island, the afternoon sun began to {{BLANK}} through the clouds, and children ran outside happily.",
    "cn": "在島上下了三天的雨之後，午後的陽光開始穿透雲層照耀，孩子們高興地跑到戶外玩耍。"
  },
  {
    "word": "print",
    "pos": "v. / n.",
    "cn_def": "印刷；列印",
    "en_def": "to produce words or pictures on paper using a machine",
    "sentence": "Before the board meeting begins tomorrow morning, our office secretary needs to {{BLANK}} thirty copies of the annual financial report.",
    "cn": "在明天早上的董事會開始之前，我們的辦公室秘書需要列印三十份年度財務報告。"
  },
  {
    "word": "printer",
    "pos": "n.",
    "cn_def": "印表機",
    "en_def": "a machine connected to a computer for producing text or pictures",
    "sentence": "Our department purchased a high-speed laser {{BLANK}} yesterday, and it works quietly and saves lots of valuable time for our staff.",
    "cn": "我們部門昨天採購了一台高速雷射印表機，它運作安靜且為我們的員工節省了許多寶貴的時間。"
  },
  {
    "word": "burst",
    "pos": "v. / n.",
    "cn_def": "爆裂；突然爆發",
    "en_def": "to break open suddenly and violently; a sudden display",
    "sentence": "The red party balloon was blown up too large by the careless boy, and it suddenly {{BLANK}} with a very loud noise.",
    "cn": "那個粗心的小男孩把紅色的派對氣球吹得太大了，結果它突然爆裂並發出很大的聲響。"
  }
];

const MCQS = [
  {
    "q": "The travel package to Tokyo will ______ round-trip flight tickets and four nights at a downtown hotel, so travelers don't need to worry.",
    "options": [
      "rub",
      "mix",
      "rise",
      "include"
    ],
    "answer": 3,
    "cn": "前往東京的旅遊套裝行程將會包含來回機票和市區飯店四晚住宿，因此旅客無需擔心。 【選項解析】(A) include 包含  (B) mix 混合  (C) rise 上升  (D) rub 摩擦。行程包含機票住宿，選 include。",
    "vocabIndex": 0
  },
  {
    "q": "The young basketball player tried to ______ the ball from behind the three-point line, and the whole crowd cheered when it went in.",
    "options": [
      "shoot",
      "print",
      "burst",
      "include"
    ],
    "answer": 0,
    "cn": "那位年輕的籃球員試圖在三分線外投籃，當球投進時全場觀眾都歡呼雀躍。 【選項解析】(A) print 列印  (B) shoot 投籃/射擊  (C) burst 爆裂  (D) include 包含。三分線外出手投籃，選 shoot。",
    "vocabIndex": 4
  },
  {
    "q": "The loud explosion of the factory tire ______ with a sharp bang, and several nearby window panes were completely shattered.",
    "options": [
      "rubbed",
      "mixed",
      "burst",
      "shone"
    ],
    "answer": 2,
    "cn": "工廠輪胎的劇烈爆裂發出尖銳巨響，附近幾扇玻璃窗被徹底震碎。 【選項解析】(A) rubbed 搓揉  (B) mixed 混合  (C) burst 爆裂  (D) shone 照耀。輪胎突然爆裂發出巨響，選 burst。",
    "vocabIndex": 9
  },
  {
    "q": "If you want to make delicious vegetable soup, you should ______ fresh carrots, sweet corn, and chicken broth in a large boiling pot.",
    "options": [
      "rub",
      "mix",
      "rise",
      "shoot"
    ],
    "answer": 1,
    "cn": "如果你想煮美味的蔬菜湯，你應該在一個大湯鍋裡將新鮮胡蘿蔔、甜玉米和雞湯混合在一起。 【選項解析】(A) rub 摩擦  (B) mix 混合  (C) rise 上升  (D) shoot 射擊。烹飪時混合食材，選 mix。",
    "vocabIndex": 1
  },
  {
    "q": "When the temperature drops below zero on high mountains, the morning mist will disappear as the bright sun begins to ______.",
    "options": [
      "burst",
      "print",
      "rise",
      "rub"
    ],
    "answer": 2,
    "cn": "當高山上的氣溫降至零度以下時，晨霧會隨著明亮的太陽開始升起而漸漸消散。 【選項解析】(A) rise 升起  (B) print 列印  (C) burst 爆裂  (D) rub 搓揉。太陽升起用 rise。",
    "vocabIndex": 2
  },
  {
    "q": "His shoes were covered with dry dust after hiking along the dirt path, so he used a soft cloth to ______ them thoroughly.",
    "options": [
      "rub",
      "mix",
      "shoot",
      "include"
    ],
    "answer": 0,
    "cn": "沿著泥土小徑健行後他的鞋子沾滿了乾灰塵，所以他用一塊軟布徹底擦拭乾淨。 【選項解析】(A) shoot 射擊  (B) mix 混合  (C) rub 擦拭  (D) include 包含。用布擦拭鞋子，選 rub。",
    "vocabIndex": 3
  },
  {
    "q": "The teacher asked the class assistant to ______ fifty copies of the reading worksheet so that every student could practice today.",
    "options": [
      "include",
      "print",
      "mix",
      "burst"
    ],
    "answer": 1,
    "cn": "老師請課堂助教列印五十份閱讀學習單，以便每位學生今天都能練習。 【選項解析】(A) include 包含  (B) burst 爆裂  (C) mix 混合  (D) print 列印。印學習單副本，選 print。",
    "vocabIndex": 7
  },
  {
    "q": "The stars in the dark country night began to ______ brightly like tiny diamonds across the vast open sky.",
    "options": [
      "shoot",
      "rise",
      "rub",
      "shine"
    ],
    "answer": 3,
    "cn": "鄉村黑夜裡的繁星開始像微小的鑽石般在廣闊的夜空中閃閃發光。 【選項解析】(A) shoot 發射  (B) shine 發光  (C) rub 摩擦  (D) rise 升起。星星閃爍發光，選 shine。",
    "vocabIndex": 6
  },
  {
    "q": "The sudden death of the talented young singer came as a tremendous ______ to millions of loyal fans around the world.",
    "options": [
      "shock",
      "printer",
      "mix",
      "burst"
    ],
    "answer": 0,
    "cn": "這位才華橫溢的年輕歌手突然去世，給全世界數百萬忠實歌迷帶來了巨大的震驚。 【選項解析】(A) shock 震驚  (B) printer 印表機  (C) mix 混合物  (D) burst 爆發。噩耗帶來極大震驚，選 shock。",
    "vocabIndex": 5
  },
  {
    "q": "Our company bought a brand-new color ______ this morning because the old machine kept jamming paper during important print jobs.",
    "options": [
      "shock",
      "mix",
      "printer",
      "burst"
    ],
    "answer": 2,
    "cn": "我們公司今天早上買了一台全新的彩色印表機，因為舊機器在重要列印作業中老是卡紙。 【選項解析】(A) shock 震驚  (B) printer 印表機  (C) mix 混合物  (D) burst 爆破。由 print jobs 與 jamming paper 可知是印表機 printer。",
    "vocabIndex": 8
  },
  {
    "q": "Don't ______ oil and water together in that glass jar because they will naturally separate into two distinct layers.",
    "options": [
      "include",
      "shoot",
      "rub",
      "mix"
    ],
    "answer": 3,
    "cn": "不要把油和水在那個玻璃罐裡混合在一起，因為它們會自然分成兩個不同的層次。 【選項解析】(A) include 包含  (B) mix 混合  (C) rub 摩擦  (D) shoot 射擊。油水不相溶，不可 mix。",
    "vocabIndex": 1
  },
  {
    "q": "As economic development continues rapidly in the city, housing prices are expected to ______ significantly over the next two years.",
    "options": [
      "print",
      "rise",
      "mix",
      "burst"
    ],
    "answer": 1,
    "cn": "隨著該市經濟持續快速發展，預計未來兩年房價將大幅上漲。 【選項解析】(A) print 列印  (B) mix 混合  (C) rise 上漲  (D) burst 爆裂。房價上漲用 rise。",
    "vocabIndex": 2
  },
  {
    "q": "When you wash your hands before dinner, you should ______ soap onto your skin for at least twenty seconds to kill harmful germs.",
    "options": [
      "include",
      "shoot",
      "shine",
      "rub"
    ],
    "answer": 3,
    "cn": "晚餐前洗手時，你應該在皮膚上搓揉肥皂至少二十秒以殺死有害細菌。 【選項解析】(A) rub 搓揉  (B) shoot 射擊  (C) shine 發光  (D) include 包含。洗手搓揉肥皂用 rub。",
    "vocabIndex": 3
  },
  {
    "q": "The hunter decided not to ______ the deer because it was walking peacefully with its two newborn fawns in the meadow.",
    "options": [
      "include",
      "shoot",
      "mix",
      "print"
    ],
    "answer": 1,
    "cn": "獵人決定不射殺那隻鹿，因為牠正帶著兩隻剛出生的小鹿在草地上平靜地漫步。 【選項解析】(A) include 包含  (B) shoot 射擊  (C) mix 混合  (D) print 列印。獵人不開槍射擊，選 shoot。",
    "vocabIndex": 4
  },
  {
    "q": "When the cheerful comedian entered the stage in a funny costume, the entire audience ______ into continuous laughter.",
    "options": [
      "burst",
      "printed",
      "mixed",
      "rubbed"
    ],
    "answer": 0,
    "cn": "當滑稽的喜劇演員穿著搞笑服裝登場時，全場觀眾頓時爆發出連綿不斷的笑聲。 【選項解析】(A) rubbed 摩擦  (B) printed 列印  (C) mixed 混合  (D) burst 突然爆發。burst into laughter 為常見片語。",
    "vocabIndex": 9
  },
  {
    "q": "Does this university summer course ______ practical laboratory experiments, or does it only consist of classroom lectures?",
    "options": [
      "mix",
      "rub",
      "include",
      "shoot"
    ],
    "answer": 2,
    "cn": "這門大學暑期課程是否包含實際的實驗室實驗，還是僅由課堂講授組成？ 【選項解析】(A) mix 混合  (B) rub 搓揉  (C) include 包含  (D) shoot 拍攝。課程內容是否包含，選 include。",
    "vocabIndex": 0
  },
  {
    "q": "Her diamond necklace caught the stage lighting and seemed to ______ with dazzling brilliance throughout the whole musical concert.",
    "options": [
      "print",
      "burst",
      "rub",
      "shine"
    ],
    "answer": 3,
    "cn": "她的鑽石項鍊捕捉到了舞台燈光，在整場音樂會中似乎都散發著耀眼的光芒。 【選項解析】(A) shine 閃耀  (B) burst 爆裂  (C) rub 摩擦  (D) print 列印。珠寶閃耀發光，選 shine。",
    "vocabIndex": 6
  },
  {
    "q": "The sudden power outage caused by the lightning storm gave our computer system a huge ______ and damaged several files.",
    "options": [
      "mix",
      "printer",
      "shock",
      "burst"
    ],
    "answer": 2,
    "cn": "雷雨引起的突然停電給我們的電腦系統帶來了巨大的衝擊並損壞了幾個檔案。 【選項解析】(A) mix 混合物  (B) shock 衝擊/震驚  (C) printer 印表機  (D) burst 爆發。系統受電力衝擊，選 shock。",
    "vocabIndex": 5
  },
  {
    "q": "Before you send the final draft to our chief editor, please check whether the wireless ______ has enough ink and paper loaded.",
    "options": [
      "printer",
      "shock",
      "burst",
      "mix"
    ],
    "answer": 0,
    "cn": "在把最終稿件寄給我們的主編之前，請檢查無線印表機是否已裝入足夠的墨水和紙張。 【選項解析】(A) printer 印表機  (B) shock 震驚  (C) burst 爆裂  (D) mix 混合物。裝墨水與紙張的設備是 printer。",
    "vocabIndex": 8
  },
  {
    "q": "The local government decided to ______ a small handbook containing emergency contact numbers and distribute it to all residents.",
    "options": [
      "mix",
      "print",
      "rub",
      "burst"
    ],
    "answer": 1,
    "cn": "地方政府決定印製一本包含緊急聯絡電話的小手冊，並發放給所有居民。 【選項解析】(A) mix 混合  (B) rub 摩擦  (C) print 印製  (D) burst 爆裂。印製手冊用 print。",
    "vocabIndex": 7
  },
  {
    "q": "In ancient times, people had to ______ two dry wooden sticks together with great effort to create sparks and start a campfire.",
    "options": [
      "rub",
      "shoot",
      "include",
      "shine"
    ],
    "answer": 0,
    "cn": "在古代人們必須非常費力地將兩根乾燥的木棍相互摩擦以產生火花並升起營火。 【選項解析】(A) rub 摩擦  (B) shoot 射擊  (C) include 包含  (D) shine 發光。鑽木取火摩擦木棍，選 rub。",
    "vocabIndex": 3
  },
  {
    "q": "Because of heavy traffic congestion during the rush hour, the travel time to the airport began to ______ from thirty minutes to one hour.",
    "options": [
      "burst",
      "mix",
      "print",
      "rise"
    ],
    "answer": 3,
    "cn": "由於尖峰時段交通嚴重壅塞，前往機場的行車時間開始從三十分鐘攀升到一小時。 【選項解析】(A) burst 爆裂  (B) mix 混合  (C) rise 攀升  (D) print 列印。時間數字上升攀升，選 rise。",
    "vocabIndex": 2
  },
  {
    "q": "The experienced director yelled action, and the camera crew prepared to ______ the opening scene of the romantic film on the beach.",
    "options": [
      "include",
      "rub",
      "shoot",
      "mix"
    ],
    "answer": 2,
    "cn": "經驗豐富的導演大喊開拍，攝影組準備在海灘上拍攝這部浪漫電影的開場戲。 【選項解析】(A) include 包含  (B) shoot 拍攝  (C) rub 摩擦  (D) mix 混合。電影拍攝鏡頭用 shoot。",
    "vocabIndex": 4
  },
  {
    "q": "The sudden car collision at the crossroad created a violent ______, and both drivers had to be examined by paramedics immediately.",
    "options": [
      "printer",
      "shock",
      "mix",
      "burst"
    ],
    "answer": 1,
    "cn": "十字路口的突然撞車事故造成了劇烈的衝擊震盪，兩名司機都必須立即接受護理人員的檢查。 【選項解析】(A) printer 印表機  (B) mix 混合物  (C) shock 衝擊  (D) burst 爆裂。車禍碰撞衝擊，選 shock。",
    "vocabIndex": 5
  },
  {
    "q": "Even during the darkest winter storm, the lighthouse keeper kept the beacon lamp ready to ______ across the dangerous ocean rocks.",
    "options": [
      "rub",
      "burst",
      "mix",
      "shine"
    ],
    "answer": 3,
    "cn": "即使在最黑暗的冬季暴風雨中，燈塔看守人也隨時準備讓信標燈照耀在危險的海洋礁石上。 【選項解析】(A) shine 照耀  (B) burst 爆裂  (C) mix 混合  (D) rub 摩擦。燈塔發光照耀，選 shine。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "include": {
    "pos": "v.",
    "en_def": "to contain or make someone or something part of a group",
    "cn_def": "包含；包括",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to contain or make someone or something part of a group",
        "cn_def": "包含；包括"
      }
    ]
  },
  "mix": {
    "pos": "v. / n.",
    "en_def": "to combine different things together; a combination",
    "cn_def": "混合；混合物",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to combine different things together; a combination",
        "cn_def": "混合；混合物"
      }
    ]
  },
  "rise": {
    "pos": "v. / n.",
    "en_def": "to move upwards; to increase in level or amount",
    "cn_def": "上升；升起",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to move upwards; to increase in level or amount",
        "cn_def": "上升；升起"
      }
    ]
  },
  "rub": {
    "pos": "v. / n.",
    "en_def": "to move your hand or an object back and forth across a surface",
    "cn_def": "摩擦；搓揉",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to move your hand or an object back and forth across a surface",
        "cn_def": "摩擦；搓揉"
      }
    ]
  },
  "shoot": {
    "pos": "v.",
    "en_def": "to fire a bullet or arrow; to kick or hit a ball toward a goal",
    "cn_def": "射擊；發射；射門",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fire a bullet or arrow; to kick or hit a ball toward a goal",
        "cn_def": "射擊；發射；射門"
      }
    ]
  },
  "shock": {
    "pos": "n. / v.",
    "en_def": "a sudden violent shaking; a state of extreme surprise",
    "cn_def": "震驚；使震驚",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a sudden violent shaking; a state of extreme surprise",
        "cn_def": "震驚；使震驚"
      }
    ]
  },
  "shine": {
    "pos": "v. / n.",
    "en_def": "to produce or reflect light; brightness",
    "cn_def": "發光；照耀",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to produce or reflect light; brightness",
        "cn_def": "發光；照耀"
      }
    ]
  },
  "print": {
    "pos": "v. / n.",
    "en_def": "to produce words or pictures on paper using a machine",
    "cn_def": "印刷；列印",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to produce words or pictures on paper using a machine",
        "cn_def": "印刷；列印"
      }
    ]
  },
  "printer": {
    "pos": "n.",
    "en_def": "a machine connected to a computer for producing text or pictures",
    "cn_def": "印表機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine connected to a computer for producing text or pictures",
        "cn_def": "印表機"
      }
    ]
  },
  "burst": {
    "pos": "v. / n.",
    "en_def": "to break open suddenly and violently; a sudden display",
    "cn_def": "爆裂；突然爆發",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to break open suddenly and violently; a sudden display",
        "cn_def": "爆裂；突然爆發"
      }
    ]
  },
  "rubbed": {
    "pos": "",
    "en_def": "",
    "cn_def": "搓揉",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "搓揉"
      }
    ]
  },
  "mixed": {
    "pos": "",
    "en_def": "",
    "cn_def": "混合",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "混合"
      }
    ]
  },
  "shone": {
    "pos": "",
    "en_def": "",
    "cn_def": "照耀",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "照耀"
      }
    ]
  },
  "printed": {
    "pos": "",
    "en_def": "",
    "cn_def": "列印",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "列印"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
