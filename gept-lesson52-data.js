// Lesson 52 Quiz Data: Engines, Industrial Materials, Metals & Mechanical Power
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 52 - Engines, Industrial Materials, Metals & Mechanical Power",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "engine",
    "pos": "n.",
    "cn_def": "引擎；發動機",
    "en_def": "a machine with moving parts that converts power into motion",
    "sentence": "The driver turned the key to start the car {{BLANK}}, and the vehicle moved smoothly onto the highway toward Taipei.",
    "cn": "司機轉動鑰匙發動了汽車______，車輛便平穩地駛上前往台北的公路。"
  },
  {
    "word": "rubber",
    "pos": "n. / adj.",
    "cn_def": "橡膠；橡膠的",
    "en_def": "a tough, elastic substance made from the sap of tropical trees",
    "sentence": "Waterproof boots are usually made of thick {{BLANK}}, so factory workers can keep their feet dry when working in wet areas.",
    "cn": "防水靴通常由厚______製成，因此工廠工人在潮濕區域工作時能保持雙腳乾燥。"
  },
  {
    "word": "wheel",
    "pos": "n.",
    "cn_def": "車輪；方向盤",
    "en_def": "a circular object that revolves on an axle to allow movement",
    "sentence": "The bicycle mechanic quickly replaced the damaged front {{BLANK}} so that the boy could ride safely around the neighborhood.",
    "cn": "自行車技工迅速更換了損壞的前______，好讓小男孩可以在社區附近安全騎車。"
  },
  {
    "word": "iron",
    "pos": "n. / v.",
    "cn_def": "鐵；熨斗；熨燙",
    "en_def": "a strong, hard magnetic silver-gray metal; to smooth clothes",
    "sentence": "My grandmother asked me to {{BLANK}} my school uniform shirts before Monday morning so they would look neat and clean.",
    "cn": "我祖母要求我在星期一早上之前先______好學校制服襯衫，這樣看起來才會整潔乾淨。"
  },
  {
    "word": "metal",
    "pos": "n. / adj.",
    "cn_def": "金屬；金屬製的",
    "en_def": "a solid material that is hard, shiny, and good at conducting heat",
    "sentence": "Heavy cooking pots are usually made of strong {{BLANK}}, and they conduct heat quickly over an open kitchen fire.",
    "cn": "厚重的烹飪鍋通常由堅固的______製成，它們在開放的廚房爐火上能快速導熱。"
  },
  {
    "word": "force",
    "pos": "n. / v.",
    "cn_def": "力量；武力；強迫",
    "en_def": "physical strength or power; to compel someone to do something",
    "sentence": "The fierce typhoon wind struck the coastal town with enormous {{BLANK}}, and several old trees were blown down onto the street.",
    "cn": "猛烈的颱風以巨大的______襲擊了沿海小鎮，幾棵老樹被吹倒在街道上。"
  },
  {
    "word": "power",
    "pos": "n.",
    "cn_def": "力量；電力；權力",
    "en_def": "the ability to do something or act in a particular way; energy",
    "sentence": "The sudden summer thunderstorm knocked down electrical wires, and the whole neighborhood lost electrical {{BLANK}} for two hours.",
    "cn": "突如其來的夏日雷陣雨擊斷了電線，整個社區失去了電______長達兩小時。"
  },
  {
    "word": "powerful",
    "pos": "adj.",
    "cn_def": "強大的；強而有力的",
    "en_def": "having great power, strength, influence, or physical force",
    "sentence": "The cargo truck has a very {{BLANK}} diesel engine, so it can easily carry tons of heavy building supplies up steep mountain roads.",
    "cn": "這輛貨車配備了非常______的柴油引擎，因此能輕鬆運載數噸沉重的建築材料攀登陡峭山路。"
  }
];

const MCQS = [
  {
    "q": "The train mechanic inspected the diesel ______ carefully because strange knocking sounds came from the front compartment.",
    "options": [
      "metal",
      "wheel",
      "engine",
      "rubber"
    ],
    "answer": 2,
    "cn": "火車技工仔細檢查了柴油引擎，因為前車廂傳來了奇怪的敲擊聲。 【選項解析】(A) engine 引擎 (B) wheel 車輪 (C) metal 金屬 (D) rubber 橡膠。柴油發動機為 diesel engine。",
    "vocabIndex": 0
  },
  {
    "q": "Modern car tires are manufactured from synthetic ______ to provide strong traction during heavy rainfall.",
    "options": [
      "iron",
      "rubber",
      "engine",
      "wheel"
    ],
    "answer": 1,
    "cn": "現代汽車輪胎由合成橡膠製成，以在大雨中提供強大的抓地力。 【選項解析】(A) iron 鐵 (B) rubber 橡膠 (C) engine 引擎 (D) wheel 車輪。輪胎主要成分為 rubber。",
    "vocabIndex": 1
  },
  {
    "q": "When the car got a flat tire on the freeway, Mr. Brown stopped at the shoulder to change the rear ______.",
    "options": [
      "wheel",
      "power",
      "engine",
      "force"
    ],
    "answer": 0,
    "cn": "當汽車在高速公路上爆胎時，布朗先生停在路肩更換後輪。 【選項解析】(A) force 力量 (B) power 電力 (C) engine 引擎 (D) wheel 車輪。換輪胎為 change rear wheel。",
    "vocabIndex": 2
  },
  {
    "q": "Before attending the formal job interview, Kevin used a hot electric ______ to smooth the wrinkles from his dress shirt.",
    "options": [
      "engine",
      "wheel",
      "rubber",
      "iron"
    ],
    "answer": 3,
    "cn": "在參加正式工作面試前，凱文用發熱的電熨斗燙平了襯衫上的褶皺。 【選項解析】(A) iron 熨斗 (B) wheel 車輪 (C) rubber 橡膠 (D) engine 引擎。燙衣服用 electric iron。",
    "vocabIndex": 3
  },
  {
    "q": "Gold and silver are valuable types of ______, and craftsmen have shaped them into exquisite jewelry for centuries.",
    "options": [
      "power",
      "metal",
      "force",
      "wheel"
    ],
    "answer": 1,
    "cn": "金和銀是珍貴的金屬，工匠們幾個世紀以來一直將它們塑造成精美的珠寶。 【選項解析】(A) power 力量 (B) metal 金屬 (C) force 武力 (D) wheel 車輪。金銀屬於 metal。",
    "vocabIndex": 4
  },
  {
    "q": "The ocean waves crashed against the rocky seawall with incredible ______, spraying seawater high into the air.",
    "options": [
      "metal",
      "wheel",
      "force",
      "rubber"
    ],
    "answer": 2,
    "cn": "海浪以驚人的力量衝擊岩石防波堤，將海水高高噴向空中。 【選項解析】(A) metal 金屬 (B) wheel 車輪 (C) force 力量 (D) rubber 橡膠。衝擊威力為 force。",
    "vocabIndex": 5
  },
  {
    "q": "Solar panels installed on the school roof generate clean electrical ______ to operate all the classroom air conditioners.",
    "options": [
      "power",
      "wheel",
      "iron",
      "engine"
    ],
    "answer": 0,
    "cn": "學校屋頂安裝的太陽能板產生清潔的電力，以運轉教室內所有的冷氣機。 【選項解析】(A) power 電力 (B) wheel 車輪 (C) iron 鐵 (D) engine 引擎。產生電能為 generate electrical power。",
    "vocabIndex": 6
  },
  {
    "q": "The sports car is equipped with a ______ V8 motor that accelerates from zero to sixty miles per hour in seconds.",
    "options": [
      "daily",
      "natural",
      "silent",
      "powerful"
    ],
    "answer": 3,
    "cn": "這輛跑車配備了強大的V8發動機，在幾秒鐘內就能從零加速到每小時六十英里。 【選項解析】(A) powerful 強大的 (B) natural 自然的 (C) silent 沉默的 (D) daily 每日的。修飾高效能引擎用 powerful。",
    "vocabIndex": 7
  },
  {
    "q": "The airplane captain started the jet ______ and waited for the control tower to clear the runway for takeoff.",
    "options": [
      "rubber",
      "engine",
      "iron",
      "force"
    ],
    "answer": 1,
    "cn": "飛機機長啟動了噴射引擎，等待控制塔台批准跑道起飛。 【選項解析】(A) engine 引擎 (B) rubber 橡膠 (C) iron 鐵 (D) force 力量。啟動噴射發動機為 start jet engine。",
    "vocabIndex": 0
  },
  {
    "q": "Children love playing with bouncy ______ balls in the park, but they must be careful not to let them roll onto the street.",
    "options": [
      "metal",
      "engine",
      "rubber",
      "power"
    ],
    "answer": 2,
    "cn": "孩子們喜歡在公園裡玩彈力橡膠球，但他們必須小心不要讓球滾到街上。 【選項解析】(A) metal 金屬 (B) rubber 橡膠 (C) engine 引擎 (D) power 力量。彈力球為 bouncy rubber ball。",
    "vocabIndex": 1
  },
  {
    "q": "The heavy wagon had four large wooden ______ banded with iron to withstand traveling over rugged dirt trails.",
    "options": [
      "engines",
      "forces",
      "metals",
      "wheels"
    ],
    "answer": 3,
    "cn": "沉重的馬車有四個用鐵圈加固的大木輪，以承受在崎嶇泥濘小徑上的行駛。 【選項解析】(A) engines 引擎 (B) wheels 車輪 (C) metals 金屬 (D) forces 力量。馬車的輪子為 wooden wheels。",
    "vocabIndex": 2
  },
  {
    "q": "Magnetite is a natural mineral that contains large amounts of ______, and it attracts small metal objects easily.",
    "options": [
      "iron",
      "wheel",
      "rubber",
      "engine"
    ],
    "answer": 0,
    "cn": "磁鐵礦是一種含有大量鐵的天然礦物，它很容易吸引小型金屬物體。 【選項解析】(A) rubber 橡膠 (B) wheel 車輪 (C) iron 鐵 (D) engine 引擎。磁鐵礦富含鐵 iron。",
    "vocabIndex": 3
  },
  {
    "q": "Construction workers erected strong scaffolding made of galvanized ______ to support the exterior renovation of the tall museum.",
    "options": [
      "force",
      "power",
      "metal",
      "rubber"
    ],
    "answer": 2,
    "cn": "建築工人搭建了由鍍鋅金屬製成的堅固鷹架，以支撐高大博物館的外觀翻修。 【選項解析】(A) metal 金屬 (B) power 力量 (C) force 武力 (D) rubber 橡膠。鍍鋅金屬鷹架為 galvanized metal scaffolding。",
    "vocabIndex": 4
  },
  {
    "q": "The police officer did not want to use physical ______ against the suspect, but the man refused to put his hands up.",
    "options": [
      "metal",
      "force",
      "wheel",
      "iron"
    ],
    "answer": 1,
    "cn": "警察不想對嫌犯使用武力，但該名男子拒絕舉起雙手。 【選項解析】(A) metal 金屬 (B) force 武力 (C) wheel 車輪 (D) iron 鐵。動用武力為 use physical force。",
    "vocabIndex": 5
  },
  {
    "q": "Nuclear reactors produce substantial amounts of electrical ______, yet governments must enforce strict safety protocols.",
    "options": [
      "wheel",
      "rubber",
      "engine",
      "power"
    ],
    "answer": 3,
    "cn": "核反應爐產生大量的電力，但政府必須執行嚴格的安全規範。 【選項解析】(A) power 電力 (B) rubber 橡膠 (C) engine 引擎 (D) wheel 車輪。發電為 produce electrical power。",
    "vocabIndex": 6
  },
  {
    "q": "With a ______ kick from the striker, the soccer ball flew straight past the goalkeeper into the top corner of the net.",
    "options": [
      "powerful",
      "weekly",
      "rapid",
      "rare"
    ],
    "answer": 0,
    "cn": "隨著前鋒一記有力的射門，足球直接越過守門員飛入球網頂角。 【選項解析】(A) powerful 有力的 (B) weekly 每週的 (C) rapid 快速的 (D) rare 罕見的。強勁射門為 powerful kick。",
    "vocabIndex": 7
  },
  {
    "q": "If you hear a loud hissing noise from under the hood, turn off the automobile ______ immediately to prevent overheating.",
    "options": [
      "wheel",
      "engine",
      "rubber",
      "iron"
    ],
    "answer": 1,
    "cn": "如果你聽到引擎蓋下傳來很大的嘶嘶聲，請立即關閉汽車發動機以防止過熱。 【選項解析】(A) wheel 車輪 (B) engine 引擎 (C) rubber 橡膠 (D) iron 鐵。關閉發動機為 turn off engine。",
    "vocabIndex": 0
  },
  {
    "q": "The sole of my running shoe is made of durable ______, which protects my feet from shock when jogging on asphalt roads.",
    "options": [
      "iron",
      "power",
      "rubber",
      "metal"
    ],
    "answer": 2,
    "cn": "我慢跑鞋的鞋底由耐用的橡膠製成，在瀝青路上慢跑時能保護我的雙腳免受衝擊。 【選項解析】(A) iron 鐵 (B) power 力量 (C) rubber 橡膠 (D) metal 金屬。鞋底為 rubber sole。",
    "vocabIndex": 1
  },
  {
    "q": "When the bus driver turned the steering ______ sharply to the left, all the standing passengers grabbed the handrails.",
    "options": [
      "force",
      "engine",
      "metal",
      "wheel"
    ],
    "answer": 3,
    "cn": "當公車司機將方向盤猛地向左打時，所有站著的乘客都抓緊了扶手。 【選項解析】(A) wheel 方向盤 (B) engine 引擎 (C) metal 金屬 (D) force 力量。steering wheel 指方向盤。",
    "vocabIndex": 2
  },
  {
    "q": "You should never leave a heated clothes ______ facedown on a garment, or the intense heat will burn a hole through the fabric.",
    "options": [
      "iron",
      "metal",
      "rubber",
      "power"
    ],
    "answer": 0,
    "cn": "你絕不能把加熱的熨斗正面朝下放在衣物上，否則高溫會在布料上燙出一個洞。 【選項解析】(A) metal 金屬 (B) iron 熨斗 (C) rubber 橡膠 (D) power 力量。加熱熨斗為 heated clothes iron。",
    "vocabIndex": 3
  },
  {
    "q": "Cans used for preserving canned vegetables are typically made of thin sheets of ______ coated with protective tin.",
    "options": [
      "force",
      "metal",
      "wheel",
      "rubber"
    ],
    "answer": 1,
    "cn": "用於保存蔬菜的罐頭通常由塗有保護性錫的薄金屬片製成。 【選項解析】(A) force 力量 (B) wheel 車輪 (C) metal 金屬 (D) rubber 橡膠。罐頭為 thin sheets of metal。",
    "vocabIndex": 4
  },
  {
    "q": "Gravitational ______ keeps all the planets orbiting around the sun in predictable elliptical paths throughout the universe.",
    "options": [
      "force",
      "iron",
      "rubber",
      "wheel"
    ],
    "answer": 0,
    "cn": "萬有引力讓所有行星在整個宇宙中沿著可預測的橢圓軌道繞太陽運行。 【選項解析】(A) force 力量 (B) iron 鐵 (C) rubber 橡膠 (D) wheel 車輪。重力為 gravitational force。",
    "vocabIndex": 5
  },
  {
    "q": "The ancient king held absolute political ______ over his empire, but he listened to the wise counsel of his trusted advisors.",
    "options": [
      "metal",
      "rubber",
      "wheel",
      "power"
    ],
    "answer": 3,
    "cn": "這位古代國王對其帝國擁有絕對的政治權力，但他聽取了他信任的顧問們的明智建議。 【選項解析】(A) metal 金屬 (B) power 權力 (C) wheel 車輪 (D) rubber 橡膠。政治權力為 political power。",
    "vocabIndex": 6
  },
  {
    "q": "A ______ magnet was used at the recycling center to separate discarded iron cans from piles of plastic trash.",
    "options": [
      "ordinary",
      "single",
      "powerful",
      "classic"
    ],
    "answer": 2,
    "cn": "回收中心使用了一塊強力磁鐵，從成堆的塑膠垃圾中分選出廢棄鐵罐。 【選項解析】(A) powerful 強力的 (B) single 單一的 (C) ordinary 普通的 (D) classic 經典的。強力磁鐵為 powerful magnet。",
    "vocabIndex": 7
  },
  {
    "q": "Modern electric vehicles rely on an electric motor rather than a traditional gasoline ______ to propel the vehicle forward.",
    "options": [
      "wheel",
      "engine",
      "rubber",
      "iron"
    ],
    "answer": 1,
    "cn": "現代電動車依靠電動馬達而不是傳統的汽油引擎來驅動車輛前進。 【選項解析】(A) wheel 車輪 (B) engine 引擎 (C) rubber 橡膠 (D) iron 鐵。汽油引擎為 gasoline engine。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "engine": {
    "pos": "n.",
    "en_def": "a machine with moving parts that converts power into motion",
    "cn_def": "引擎；發動機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine with moving parts that converts power into motion",
        "cn_def": "引擎；發動機"
      }
    ]
  },
  "rubber": {
    "pos": "n. / adj.",
    "en_def": "a tough, elastic substance made from the sap of tropical trees",
    "cn_def": "橡膠；橡膠的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a tough, elastic substance made from the sap of tropical trees",
        "cn_def": "橡膠；橡膠的"
      }
    ]
  },
  "wheel": {
    "pos": "n.",
    "en_def": "a circular object that revolves on an axle to allow movement",
    "cn_def": "車輪；方向盤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a circular object that revolves on an axle to allow movement",
        "cn_def": "車輪；方向盤"
      }
    ]
  },
  "iron": {
    "pos": "n. / v.",
    "en_def": "a strong, hard magnetic silver-gray metal; to smooth clothes",
    "cn_def": "鐵；熨斗；熨燙",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a strong, hard magnetic silver-gray metal; to smooth clothes",
        "cn_def": "鐵；熨斗；熨燙"
      }
    ]
  },
  "metal": {
    "pos": "n. / adj.",
    "en_def": "a solid material that is hard, shiny, and good at conducting heat",
    "cn_def": "金屬；金屬製的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a solid material that is hard, shiny, and good at conducting heat",
        "cn_def": "金屬；金屬製的"
      }
    ]
  },
  "force": {
    "pos": "n. / v.",
    "en_def": "physical strength or power; to compel someone to do something",
    "cn_def": "力量；武力；強迫",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "physical strength or power; to compel someone to do something",
        "cn_def": "力量；武力；強迫"
      }
    ]
  },
  "power": {
    "pos": "n.",
    "en_def": "the ability to do something or act in a particular way; energy",
    "cn_def": "力量；電力；權力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to do something or act in a particular way; energy",
        "cn_def": "力量；電力；權力"
      }
    ]
  },
  "powerful": {
    "pos": "adj.",
    "en_def": "having great power, strength, influence, or physical force",
    "cn_def": "強大的；強而有力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having great power, strength, influence, or physical force",
        "cn_def": "強大的；強而有力的"
      }
    ]
  },
  "daily": {
    "pos": "",
    "en_def": "",
    "cn_def": "每日的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "每日的"
      }
    ]
  },
  "natural": {
    "pos": "",
    "en_def": "",
    "cn_def": "自然的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "自然的"
      }
    ]
  },
  "silent": {
    "pos": "",
    "en_def": "",
    "cn_def": "沉默的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "沉默的"
      }
    ]
  },
  "engines": {
    "pos": "",
    "en_def": "",
    "cn_def": "引擎",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "引擎"
      }
    ]
  },
  "forces": {
    "pos": "",
    "en_def": "",
    "cn_def": "力量",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "力量"
      }
    ]
  },
  "metals": {
    "pos": "",
    "en_def": "",
    "cn_def": "金屬",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "金屬"
      }
    ]
  },
  "wheels": {
    "pos": "",
    "en_def": "",
    "cn_def": "車輪",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "車輪"
      }
    ]
  },
  "weekly": {
    "pos": "",
    "en_def": "",
    "cn_def": "每週的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "每週的"
      }
    ]
  },
  "rapid": {
    "pos": "",
    "en_def": "",
    "cn_def": "快速的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "快速的"
      }
    ]
  },
  "rare": {
    "pos": "",
    "en_def": "",
    "cn_def": "罕見的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "罕見的"
      }
    ]
  },
  "ordinary": {
    "pos": "",
    "en_def": "",
    "cn_def": "普通的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "普通的"
      }
    ]
  },
  "single": {
    "pos": "",
    "en_def": "",
    "cn_def": "單一的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "單一的"
      }
    ]
  },
  "classic": {
    "pos": "",
    "en_def": "",
    "cn_def": "經典的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "經典的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
