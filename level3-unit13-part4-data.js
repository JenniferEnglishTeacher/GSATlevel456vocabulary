// Part 4 Quiz Data: rug – structure
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 13-4 - rug – structure",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rug",
    "pos": "n.",
    "cn_def": "小地毯；墊子（可數）",
    "en_def": "a floor covering of thick woven material or animal skin; a small carpet",
    "sentence": "Instead of confronting their serious financial deficit honestly, the corrupt executives tried to sweep the problem under the {{BLANK}}.",
    "cn": "那群貪腐的高層主管非但沒有坦誠面對嚴重的財政赤字，反而試圖將問題掩飾粉飾過去。"
  },
  {
    "word": "rushed",
    "pos": "v.",
    "cn_def": "急促行進；倉促行事；催促（動詞）",
    "en_def": "to move or act with urgent haste; to force someone to act too quickly",
    "sentence": "After hearing that his grandfather had fallen down the stairs, Jason {{BLANK}} to the city hospital without a second thought.",
    "cn": "在聽說祖父從樓梯跌落後，傑森毫不猶豫地火速趕往市立醫院。"
  },
  {
    "word": "rush",
    "pos": "n.",
    "cn_def": "匆忙；熱潮；尖峰（不可數/可數）",
    "en_def": "a sudden quick movement toward something; a period of frantic activity",
    "sentence": "Commuting on the downtown highway during morning {{BLANK}} hour is always frustrating because cars barely move.",
    "cn": "在早晨交通尖峰時刻於市中心高速公路上通勤總是令人沮喪，因為車輛幾乎動彈不得。"
  },
  {
    "word": "sausage",
    "pos": "n.",
    "cn_def": "香腸；臘腸（可數/不可數）",
    "en_def": "minced meat seasoned and stuffed into a cylindrical casing",
    "sentence": "At the lively night market, vendors grilled juicy Taiwanese {{BLANK}} over charcoal, filling the alley with delicious aromas.",
    "cn": "在熱鬧的夜市裡，攤販在炭火上烘烤著多汁的台灣香腸，讓香氣瀰漫了整條巷弄。"
  },
  {
    "word": "scarf",
    "pos": "n.",
    "cn_def": "圍巾；披肩（可數）",
    "en_def": "a piece of fabric worn around the neck or head for warmth or fashion (plural: scarves or scarfs)",
    "sentence": "Grandmother lovingly spent three winter weeks knitting a soft red {{BLANK}} for her newborn granddaughter.",
    "cn": "祖母慈愛地花了三個冬日星期為剛出生的孫女編織了一條柔軟的紅色圍巾。"
  },
  {
    "word": "slave",
    "pos": "n.",
    "cn_def": "奴隸；苦工（可數）",
    "en_def": "a person who is the legal property of another and is forced to obey them",
    "sentence": "In ancient Greek and Roman societies, thousands of captured prisoners of war were forced to labor as {{BLANK}} on agricultural estates.",
    "cn": "在古希臘與古羅馬社會中，成千上萬被俘虜的戰俘被迫在農業莊園中充當奴隸勞作。"
  },
  {
    "word": "slave",
    "pos": "v.",
    "cn_def": "做苦工；辛勤苦幹（動詞）",
    "en_def": "to work excessively hard like a slave",
    "sentence": "Instead of taking a relaxing holiday, the accounting staff had to {{BLANK}} through the weekend to finish auditing tax documents.",
    "cn": "會計部門人員非但沒有享受輕鬆的假期，反而必須在週末拚命苦幹以完成稅務稽核文件。"
  },
  {
    "word": "slavery",
    "pos": "n.",
    "cn_def": "奴隸身分；奴隸制度（不可數）",
    "en_def": "the state of being a slave; the practice or system of owning slaves",
    "sentence": "President Abraham Lincoln issued the historic Emancipation Proclamation in an enduring effort to abolish {{BLANK}} across the United States.",
    "cn": "亞伯拉罕·林肯總統發表了具有歷史意義的《解放宣言》，長久致力於在全美廢除奴隸制度。"
  },
  {
    "word": "slippery",
    "pos": "adj.",
    "cn_def": "滑的；滑溜溜的；狡猾不可信的",
    "en_def": "difficult to hold firmly or walk on; unreliable or elusive",
    "sentence": "Hiking down the steep mountain path was hazardous because morning dew and loose mud made the rocks very {{BLANK}}.",
    "cn": "走下險峻的山徑極具危險性，因為晨露與鬆軟的泥土使岩石變得非常滑溜。"
  },
  {
    "word": "statue",
    "pos": "n.",
    "cn_def": "雕像；塑像（可數）",
    "en_def": "a carved or cast figure of a person or animal, especially life-size or larger",
    "sentence": "Millions of international immigrants sailing into New York harbor were welcomed by the magnificent sight of the {{BLANK}} of Liberty.",
    "cn": "數以百萬計乘船駛入紐約港的國際移民，受到宏偉的自由女神雕像的熱烈迎接。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；構造；建築結構體（可數/不可數）",
    "en_def": "the arrangement of parts in an organic or complex whole; a building",
    "sentence": "City building inspectors carefully examined the high-rise tower to check for any severe {{BLANK}} damage following the magnitude seven earthquake.",
    "cn": "在發生規模七級地震後，市建築檢查員仔細檢查了高樓大廈，以確認是否有嚴重的結構性受損。"
  },
  {
    "word": "structure",
    "pos": "v.",
    "cn_def": "精心組織；合理安排；建構（動詞）",
    "en_def": "to construct, organize, or arrange according to a systematic plan",
    "sentence": "The university professor advised her students to {{BLANK}} their research essays logically before writing the final draft.",
    "cn": "大學教授建議她的學生在撰寫最終講稿之前，合乎邏輯地精心組織構架他們的研究論文。"
  }
];

const MCQS = [
  {
    "q": "The cat curled up happily on the soft wool ______ in front of the warm fireplace.",
    "options": [
      "sausage",
      "rug",
      "scarf",
      "statue"
    ],
    "answer": 1,
    "cn": "貓咪在溫暖壁爐前的柔軟羊毛小地毯上高興地蜷縮成一團。",
    "vocabIndex": 0
  },
  {
    "q": "We ordered grilled pork ______ and crispy French fries at the night market food stall.",
    "options": [
      "rug",
      "scarf",
      "sausage",
      "statue"
    ],
    "answer": 2,
    "cn": "我們在夜市攤位點了烤豬肉香腸與酥脆的薯條。",
    "vocabIndex": 3
  },
  {
    "q": "Wrap a thick warm ______ around your neck before going outside into the winter wind.",
    "options": [
      "sausage",
      "rug",
      "statue",
      "scarf"
    ],
    "answer": 3,
    "cn": "在走入冬季寒風前，把一條厚實保暖的圍巾圍在你的脖子上。",
    "vocabIndex": 4
  },
  {
    "q": "A tall marble ______ of the historic national hero was erected in the central city park.",
    "options": [
      "statue",
      "sausage",
      "scarf",
      "rug"
    ],
    "answer": 0,
    "cn": "一座紀念歷史民族英雄的巍峨大理石雕像被樹立在市立中央公園內。",
    "vocabIndex": 9
  },
  {
    "q": "In ancient history, a captured prisoner was often forced to work as a cruel master's ______.",
    "options": [
      "statue",
      "slave",
      "sausage",
      "rug"
    ],
    "answer": 1,
    "cn": "在古代歷史中，被俘虜的囚犯常被迫充當殘酷主人的奴隸。",
    "vocabIndex": 5
  },
  {
    "q": "Many countries passed strict laws in the nineteenth century to completely end ______.",
    "options": [
      "slavery",
      "statue",
      "sausage",
      "structure"
    ],
    "answer": 0,
    "cn": "許多國家在十九世紀通過了嚴格法律，以徹底終結奴隸制度。",
    "vocabIndex": 7
  },
  {
    "q": "The strong earthquake caused serious ______ damage to the old brick building downtown.",
    "options": [
      "statue",
      "slavery",
      "structure",
      "sausage"
    ],
    "answer": 2,
    "cn": "強烈地震對市中心的老舊磚造建築造成了嚴重的結構受損。",
    "vocabIndex": 10
  },
  {
    "q": "Because Cindy was in a terrible ______, she quickly grabbed her bag and left without breakfast.",
    "options": [
      "statue",
      "sausage",
      "rug",
      "rush"
    ],
    "answer": 3,
    "cn": "因為辛蒂非常匆忙慌張，她迅速抓起背包，沒吃早餐就出門了。",
    "vocabIndex": 1
  },
  {
    "q": "When Peter heard the smoke alarm sounding loudly, he ______ out of the burning apartment.",
    "options": [
      "rushed",
      "slaved",
      "structured",
      "slipped"
    ],
    "answer": 0,
    "cn": "當彼得聽到煙霧警報器大聲響起時，他火速衝出燃燒的公寓。",
    "vocabIndex": 1
  },
  {
    "q": "The poor baker had to ______ away for twelve hours over the hot oven to bake fresh bread.",
    "options": [
      "rush",
      "structure",
      "slave",
      "slip"
    ],
    "answer": 2,
    "cn": "可憐的烘焙師不得不對著滾燙烤爐辛苦苦幹十二個小時來烤新鮮麵包。",
    "vocabIndex": 5
  },
  {
    "q": "The teacher told the students to ______ their essays logically with an introduction and conclusion.",
    "options": [
      "rush",
      "slave",
      "slip",
      "structure"
    ],
    "answer": 3,
    "cn": "老師告訴學生們要有條理地組織構架包含引言與結論的論文。",
    "vocabIndex": 10
  },
  {
    "q": "Be careful when walking on the bathroom floor because wet soap makes the tiles very ______.",
    "options": [
      "structural",
      "slippery",
      "slaved",
      "rushed"
    ],
    "answer": 1,
    "cn": "在浴室地板上走動要小心，因為濕肥皂水讓磁磚非常滑溜。",
    "vocabIndex": 8
  },
  {
    "q": "The engineer inspected the bridge's main steel beams to evaluate their ______ strength.",
    "options": [
      "rushed",
      "slippery",
      "structural",
      "slaved"
    ],
    "answer": 2,
    "cn": "工程師檢查了橋樑的主要鋼樑以評估其結構上的堅固強度。"
  },
  {
    "q": "The rocks near the crashing waves were green with sea moss and extremely ______ to walk on.",
    "options": [
      "structural",
      "slippery",
      "rushed",
      "slave"
    ],
    "answer": 1,
    "cn": "拍打浪花旁的岩石佈滿了綠色海苔，走在上面非常滑溜危險。",
    "vocabIndex": 8
  },
  {
    "q": "A warm colorful ______ covered the wooden floor of my bedroom, making it cozy for my feet.",
    "options": [
      "sausage",
      "statue",
      "slave",
      "rug"
    ],
    "answer": 3,
    "cn": "一塊溫暖多彩的小地毯鋪在臥室木質地板上，踩上去非常舒適。",
    "vocabIndex": 0
  },
  {
    "q": "The chef sliced the grilled German ______ into round pieces to serve on the salad.",
    "options": [
      "sausage",
      "statue",
      "scarf",
      "rug"
    ],
    "answer": 0,
    "cn": "主廚將烤好的德國香腸切成圓片，擺在沙拉上供客人享用。",
    "vocabIndex": 3
  },
  {
    "q": "She knitted a lovely pink ______ using soft wool so her mother would stay warm in winter.",
    "options": [
      "sausage",
      "statue",
      "scarf",
      "rug"
    ],
    "answer": 2,
    "cn": "她用柔軟的羊毛編織了一條可愛的粉色圍巾，讓母親在冬天保持溫暖。",
    "vocabIndex": 4
  },
  {
    "q": "Tourists took photos in front of the giant bronze ______ of the freedom fighter in the square.",
    "options": [
      "sausage",
      "statue",
      "scarf",
      "rug"
    ],
    "answer": 1,
    "cn": "遊客們在廣場上那位自由戰士的巨大青銅雕像前合影留念。",
    "vocabIndex": 9
  },
  {
    "q": "You should not ______ into choosing a college major before you know what you truly enjoy.",
    "options": [
      "rush",
      "structure",
      "slave",
      "slip"
    ],
    "answer": 0,
    "cn": "在弄清楚自己真正喜歡什麼之前，你不應該倉促決定大學主修。",
    "vocabIndex": 1
  },
  {
    "q": "The factory workers ______ day and night under harsh conditions for very little pay.",
    "options": [
      "rushed",
      "structured",
      "slipped",
      "slaved"
    ],
    "answer": 3,
    "cn": "工廠工人們在惡劣的條件下日夜苦幹勞役，卻只領取微薄的薪資。",
    "vocabIndex": 5
  },
  {
    "q": "The highway is always packed with slow traffic during the evening ______.",
    "options": [
      "rush hour",
      "Statue of Liberty",
      "German sausage",
      "Persian rug"
    ],
    "answer": 0,
    "cn": "在傍晚的交通尖峰時間，高速公路總是被緩慢前行的車輛擠得水洩不通。",
    "vocabIndex": 1
  },
  {
    "q": "When visiting New York harbor by ferry, you will see the famous ______ holding a torch.",
    "options": [
      "rush hour",
      "Persian rug",
      "German sausage",
      "Statue of Liberty"
    ],
    "answer": 3,
    "cn": "搭乘渡輪造訪紐約港時，你會看見手持火炬的著名自由女神像。",
    "vocabIndex": 9
  },
  {
    "q": "Don't try to ______; we must talk about the problem honestly and fix it.",
    "options": [
      "rush into",
      "sweep the problem under the rug",
      "slave away",
      "wrap a scarf"
    ],
    "answer": 1,
    "cn": "不要試圖粉飾太平／把問題掩蓋在地毯下；我們必須坦誠討論並解決問題。",
    "vocabIndex": 0
  },
  {
    "q": "The dishonest salesman was ______ and never gave a clear answer to our questions.",
    "options": [
      "in a rush",
      "snug as a bug in a rug",
      "as slippery as an eel",
      "structural"
    ],
    "answer": 2,
    "cn": "那個不誠實的業務員狡猾如泥鰍，從未正面回答我們的問題。",
    "vocabIndex": 8
  },
  {
    "q": "Wrapped in a soft warm blanket by the fire, the little girl was as ______.",
    "options": [
      "as slippery as an eel",
      "snug as a bug in a rug",
      "a slave to",
      "in a rush"
    ],
    "answer": 1,
    "cn": "裹在火爐旁柔軟保暖的毛毯裡，那個小女孩感到無比溫暖舒服。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "rug": {
    "pos": "n.",
    "en_def": "a floor covering of thick woven material or animal skin; a small carpet",
    "cn_def": "小地毯；墊子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a floor covering of thick woven material or animal skin; a small carpet",
        "cn_def": "小地毯；墊子（可數）"
      }
    ]
  },
  "rushed": {
    "pos": "v.",
    "en_def": "to move or act with urgent haste; to force someone to act too quickly",
    "cn_def": "急促行進；倉促行事；催促（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move or act with urgent haste; to force someone to act too quickly",
        "cn_def": "急促行進；倉促行事；催促（動詞）"
      }
    ]
  },
  "rush": {
    "pos": "v.",
    "en_def": "to move or act with urgent haste; to force someone to act too quickly",
    "cn_def": "急促行進；倉促行事；催促（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move or act with urgent haste; to force someone to act too quickly",
        "cn_def": "急促行進；倉促行事；催促（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a sudden quick movement toward something; a period of frantic activity",
        "cn_def": "匆忙；熱潮；尖峰（不可數/可數）"
      }
    ]
  },
  "sausage": {
    "pos": "n.",
    "en_def": "minced meat seasoned and stuffed into a cylindrical casing",
    "cn_def": "香腸；臘腸（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "minced meat seasoned and stuffed into a cylindrical casing",
        "cn_def": "香腸；臘腸（可數/不可數）"
      }
    ]
  },
  "scarf": {
    "pos": "n.",
    "en_def": "a piece of fabric worn around the neck or head for warmth or fashion (plural: scarves or scarfs)",
    "cn_def": "圍巾；披肩（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of fabric worn around the neck or head for warmth or fashion (plural: scarves or scarfs)",
        "cn_def": "圍巾；披肩（可數）"
      }
    ]
  },
  "slave": {
    "pos": "n.",
    "en_def": "a person who is the legal property of another and is forced to obey them",
    "cn_def": "奴隸；苦工（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is the legal property of another and is forced to obey them",
        "cn_def": "奴隸；苦工（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to work excessively hard like a slave",
        "cn_def": "做苦工；辛勤苦幹（動詞）"
      }
    ]
  },
  "slavery": {
    "pos": "n.",
    "en_def": "the state of being a slave; the practice or system of owning slaves",
    "cn_def": "奴隸身分；奴隸制度（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being a slave; the practice or system of owning slaves",
        "cn_def": "奴隸身分；奴隸制度（不可數）"
      }
    ]
  },
  "slippery": {
    "pos": "adj.",
    "en_def": "difficult to hold firmly or walk on; unreliable or elusive",
    "cn_def": "滑的；滑溜溜的；狡猾不可信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "difficult to hold firmly or walk on; unreliable or elusive",
        "cn_def": "滑的；滑溜溜的；狡猾不可信的"
      }
    ]
  },
  "statue": {
    "pos": "n.",
    "en_def": "a carved or cast figure of a person or animal, especially life-size or larger",
    "cn_def": "雕像；塑像（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a carved or cast figure of a person or animal, especially life-size or larger",
        "cn_def": "雕像；塑像（可數）"
      }
    ]
  },
  "structure": {
    "pos": "n.",
    "en_def": "the arrangement of parts in an organic or complex whole; a building",
    "cn_def": "結構；構造；建築結構體（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the arrangement of parts in an organic or complex whole; a building",
        "cn_def": "結構；構造；建築結構體（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to construct, organize, or arrange according to a systematic plan",
        "cn_def": "精心組織；合理安排；建構（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
