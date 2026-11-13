// Part 1 Quiz Data: bead – dramatic
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 19-1 - bead – dramatic",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "beads",
    "pos": "n.",
    "cn_def": "念珠；小珠子；水珠（可數）",
    "en_def": "a small piece of glass, wood, or other material, pierced for stringing",
    "sentence": "The creative young girl loved to string colorful glass {{BLANK}} together to make pretty bracelets for her friends.",
    "cn": "那位富有創意的小女孩喜歡把五顏六色的玻璃珠子串在一起，為朋友們製作漂亮的手環。"
  },
  {
    "word": "bride",
    "pos": "n.",
    "cn_def": "新娘；即將結婚的女子（可數）",
    "en_def": "a woman on her wedding day or just before or after the event",
    "sentence": "The beautiful {{BLANK}} looked radiant in her elegant white lace gown as she walked down the church aisle.",
    "cn": "美麗的新娘身穿優雅的白蕾絲禮服，走在教堂走道上時顯得光彩照人。"
  },
  {
    "word": "casual",
    "pos": "adj.",
    "cn_def": "休閒的；非正式的；漫不經心的；偶然的",
    "en_def": "relaxed and unconcerned; not formal; happening by chance",
    "sentence": "Because our modern technology company has a relaxed dress code, all software engineers can wear comfortable {{BLANK}} clothes to the office.",
    "cn": "因為我們這家現代科技公司有寬鬆的穿著規範，所有軟體工程師都可以穿著舒適的休閒服飾上班。"
  },
  {
    "word": "columns",
    "pos": "n.",
    "cn_def": "石柱；柱狀物；（報紙）專欄；縱列（可數）",
    "en_def": "an upright pillar; a vertical division of a page; a regular article in a paper",
    "sentence": "The ancient Greek temple on top of the windy hill is supported by twenty magnificent marble {{BLANK}}.",
    "cn": "山頂上的古希臘神廟由二十根壯麗的大理石石柱／圓柱所支撐。"
  },
  {
    "word": "crop",
    "pos": "n.",
    "cn_def": "農作物；收成（可數/不可數）",
    "en_def": "a cultivated plant that is grown as food on a large scale",
    "sentence": "Due to the continuous drought that lasted for three months, farmers in the southern valley suffered severe {{BLANK}} failure.",
    "cn": "由於持續了三個月的乾旱，南部山谷的農民遭受了嚴重的作物歉收。"
  },
  {
    "word": "cropped",
    "pos": "v.",
    "cn_def": "收割；修剪；剪裁（照片）；突然出現（動詞）",
    "en_def": "to harvest or cut off; to appear unexpectedly (crop up)",
    "sentence": "We were ready to leave the office on Friday afternoon when an urgent technical problem suddenly {{BLANK}} up.",
    "cn": "我們週五下午正準備離開辦公室，這時一個緊急的技術問題卻突然出乎意料地冒出來。"
  },
  {
    "word": "dime",
    "pos": "n.",
    "cn_def": "（美、加的一角硬幣，值十美分）（可數）",
    "en_def": "a ten-cent coin in the US and Canada",
    "sentence": "In modern consumer societies, cheap plastic toys produced by automated factories are practically a {{BLANK}} a dozen in every toy store.",
    "cn": "在現代消費社會中，自動化工廠生產的廉價塑膠玩具在每家玩具店裡簡直到處都是／多得不值錢。"
  },
  {
    "word": "dirt",
    "pos": "n.",
    "cn_def": "泥土；塵垢；污垢（不可數）",
    "en_def": "loose soil or earth; unclean matter that soils someone or something",
    "sentence": "After playing football outside in the pouring rain, the boys returned home with their uniforms covered in {{BLANK}}.",
    "cn": "在傾盆大雨中踢完足球後，男孩們穿著滿是泥垢的球衣回到家中。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；引人注目的；急劇的",
    "en_def": "relating to drama or the theater; sudden, striking, and exciting",
    "sentence": "The popular actress loved to make a {{BLANK}} entrance at glamorous film festivals by wearing a sparkling red gown.",
    "cn": "這位受歡迎的女演員喜歡在光彩奪目的電影節上穿著閃亮的紅色禮服引人注目地登場。"
  }
];

const MCQS = [
  {
    "q": "The little girl sat on the floor and put each colorful ______ onto a piece of string.",
    "options": [
      "bead",
      "dime",
      "column",
      "crop"
    ],
    "answer": 0,
    "cn": "小女孩坐在地板上，把一顆顆五顏六色的小珠子穿在一條繩子上。",
    "vocabIndex": 0
  },
  {
    "q": "Everyone at the wedding clapped loudly when the beautiful ______ walked into the church.",
    "options": [
      "column",
      "bride",
      "crop",
      "dime"
    ],
    "answer": 1,
    "cn": "當美麗的新娘走進教堂時，婚禮上的每個人都大聲鼓掌。",
    "vocabIndex": 1
  },
  {
    "q": "The roof of the ancient museum is supported by tall marble ______.",
    "options": [
      "dimes",
      "brides",
      "beads",
      "columns"
    ],
    "answer": 3,
    "cn": "這座古老博物館的屋頂是由高聳的大理石石柱／圓柱所支撐。",
    "vocabIndex": 3
  },
  {
    "q": "Farmers in our town grow rice and corn as their primary food ______.",
    "options": [
      "beads",
      "dimes",
      "crops",
      "brides"
    ],
    "answer": 2,
    "cn": "我們鎮上的農民種植稻米和玉米作為他們主要的糧食農作物。",
    "vocabIndex": 4
  },
  {
    "q": "In the United States, a ten-cent silver coin is called a ______.",
    "options": [
      "dime",
      "crop",
      "bride",
      "column"
    ],
    "answer": 0,
    "cn": "在美國，十美分的銀色硬幣被稱為一角硬幣。",
    "vocabIndex": 6
  },
  {
    "q": "After playing outside in the mud, Tommy had black ______ all over his shoes.",
    "options": [
      "bride",
      "column",
      "dirt",
      "bead"
    ],
    "answer": 2,
    "cn": "在戶外的泥地裡玩耍後，湯米的鞋子到處都是黑色的泥土／污垢。",
    "vocabIndex": 7
  },
  {
    "q": "My mother made a lovely necklace using hundred-year-old wooden ______.",
    "options": [
      "crops",
      "columns",
      "dimes",
      "beads"
    ],
    "answer": 3,
    "cn": "我母親用擁有百年歷史的木製小珠子製作了一條可愛的項鍊。"
  },
  {
    "q": "The newspaper writer has a weekly ______ where he reviews delicious local food.",
    "options": [
      "dime",
      "column",
      "bead",
      "bride"
    ],
    "answer": 1,
    "cn": "這位報社作家有一個每週專欄，在其中評估推薦當地的美味食物。",
    "vocabIndex": 3
  },
  {
    "q": "The handsome groom stood near the altar waiting for his smiling ______.",
    "options": [
      "dirt",
      "crop",
      "dime",
      "bride"
    ],
    "answer": 3,
    "cn": "英俊的新郎站在聖壇附近，等待著微笑的新娘走上前來。",
    "vocabIndex": 1
  },
  {
    "q": "Because of the heavy summer floods, many farmers lost their entire corn ______.",
    "options": [
      "crop",
      "dime",
      "bead",
      "column"
    ],
    "answer": 0,
    "cn": "由於夏季嚴重的洪災，許多農民失去了他們整片玉米農作物／收成。",
    "vocabIndex": 4
  },
  {
    "q": "Before posting the picture online, you should ______ out the strangers standing behind you.",
    "options": [
      "bride",
      "dirt",
      "crop",
      "bead"
    ],
    "answer": 2,
    "cn": "在網路上公開發布這張照片之前，你應該把站在你身後的陌生人修剪／裁切掉。",
    "vocabIndex": 4
  },
  {
    "q": "When you edit your digital photo, remember to ______ the edges so it looks neat.",
    "options": [
      "bead",
      "crop",
      "dime",
      "column"
    ],
    "answer": 1,
    "cn": "當你編輯數位照片時，記得要修剪／裁切邊緣，使它看起來很整齊。",
    "vocabIndex": 4
  },
  {
    "q": "We thought everything was ready, but unexpected problems began to ______ up.",
    "options": [
      "crop",
      "bead",
      "dirt",
      "dime"
    ],
    "answer": 0,
    "cn": "我們以為一切都準備就緒了，但意想不到的問題卻開始突然冒出來。",
    "vocabIndex": 4
  },
  {
    "q": "The photographer decided to ______ the image to focus on the child's smiling face.",
    "options": [
      "dime",
      "bead",
      "bride",
      "crop"
    ],
    "answer": 3,
    "cn": "攝影師決定修剪／裁切照片，以便將焦點聚集在孩子微笑的臉龐上。",
    "vocabIndex": 4
  },
  {
    "q": "If you ______ the photo slightly on the left side, the main building will look centered.",
    "options": [
      "dime",
      "crop",
      "dirt",
      "bride"
    ],
    "answer": 1,
    "cn": "如果你將照片的左側稍微裁切一下，主建築看起來就會居中。",
    "vocabIndex": 4
  },
  {
    "q": "New questions and challenges will always ______ up during a large project.",
    "options": [
      "dime",
      "bead",
      "crop",
      "column"
    ],
    "answer": 2,
    "cn": "在進行大型企劃期間，新的疑問與挑戰總是會突然冒出來。",
    "vocabIndex": 4
  },
  {
    "q": "On weekends, I like to wear ______ clothes like T-shirts and blue jeans.",
    "options": [
      "dramatic",
      "casual",
      "bloody",
      "stale"
    ],
    "answer": 1,
    "cn": "在週末，我喜歡穿著像 T 恤和藍色牛仔褲這樣的休閒服裝。",
    "vocabIndex": 2
  },
  {
    "q": "The actor made a very ______ entrance by flying down from the ceiling on a wire.",
    "options": [
      "dramatic",
      "moist",
      "casual",
      "raw"
    ],
    "answer": 0,
    "cn": "這位男演員藉由鋼絲從天花板上飛下來，做了一次非常戲劇性／引人注目的登場。",
    "vocabIndex": 8
  },
  {
    "q": "We had a friendly, ______ conversation over a cup of coffee this morning.",
    "options": [
      "bloody",
      "dramatic",
      "casual",
      "stale"
    ],
    "answer": 2,
    "cn": "今天早上我們一邊喝咖啡，一邊進行了一場友好而輕鬆隨意的談話。",
    "vocabIndex": 2
  },
  {
    "q": "There has been a ______ drop in winter temperatures over the past two days.",
    "options": [
      "casual",
      "moist",
      "raw",
      "dramatic"
    ],
    "answer": 3,
    "cn": "過去兩天內，冬季氣溫出現了急劇的／引人注目的下滑。",
    "vocabIndex": 8
  },
  {
    "q": "In this modern world, cheap smartphone cases are ______ and easy to find everywhere.",
    "options": [
      "crop failure",
      "a dime a dozen",
      "a dramatic rise",
      "covered in dirt"
    ],
    "answer": 1,
    "cn": "在現今世界裡，廉價的手機殼多得不值錢／到處都是，在各處都很容易找到。",
    "vocabIndex": 6
  },
  {
    "q": "The sports car has such wonderful new brakes that it can ______ on a wet road.",
    "options": [
      "stop on a dime",
      "make a casual remark",
      "string beads together",
      "crop up"
    ],
    "answer": 0,
    "cn": "這款跑車擁有非常棒的新煞車系統，甚至能在濕滑路面上立即煞停。",
    "vocabIndex": 6
  },
  {
    "q": "A good company should respect its workers and never ______.",
    "options": [
      "be a dime a dozen",
      "stop on a dime",
      "treat them like dirt",
      "crop the photo"
    ],
    "answer": 2,
    "cn": "一家好公司應該尊重員工，絕不應該把他們當垃圾對待／踐踏他們。",
    "vocabIndex": 7
  },
  {
    "q": "Thanks to excellent sunshine and good soil, the village harvested a ______ of corn this year.",
    "options": [
      "dramatic entrance",
      "stone column",
      "casual attire",
      "bumper crop"
    ],
    "answer": 3,
    "cn": "多虧了充足的陽光和良好的土壤，該村莊今年迎來了玉米的大豐收。",
    "vocabIndex": 4
  },
  {
    "q": "The quiet art teacher showed the students how to ______ to create a necklace.",
    "options": [
      "stop on a dime",
      "crop up",
      "string beads together",
      "treat others like dirt"
    ],
    "answer": 2,
    "cn": "文靜的藝術老師向學生們展示如何把珠子串在一起來製作項鍊。"
  }
];

const LOOKUP = {
  "bead": {
    "pos": "n.",
    "en_def": "a small piece of glass, wood, or other material, pierced for stringing",
    "cn_def": "念珠；小珠子；水珠（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small piece of glass, wood, or other material, pierced for stringing",
        "cn_def": "念珠；小珠子；水珠（可數）"
      }
    ]
  },
  "beads": {
    "pos": "n.",
    "en_def": "a small piece of glass, wood, or other material, pierced for stringing",
    "cn_def": "念珠；小珠子；水珠（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small piece of glass, wood, or other material, pierced for stringing",
        "cn_def": "念珠；小珠子；水珠（可數）"
      }
    ]
  },
  "bride": {
    "pos": "n.",
    "en_def": "a woman on her wedding day or just before or after the event",
    "cn_def": "新娘；即將結婚的女子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a woman on her wedding day or just before or after the event",
        "cn_def": "新娘；即將結婚的女子（可數）"
      }
    ]
  },
  "casual": {
    "pos": "adj.",
    "en_def": "relaxed and unconcerned; not formal; happening by chance",
    "cn_def": "休閒的；非正式的；漫不經心的；偶然的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relaxed and unconcerned; not formal; happening by chance",
        "cn_def": "休閒的；非正式的；漫不經心的；偶然的"
      }
    ]
  },
  "column": {
    "pos": "n.",
    "en_def": "an upright pillar; a vertical division of a page; a regular article in a paper",
    "cn_def": "石柱；柱狀物；（報紙）專欄；縱列（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an upright pillar; a vertical division of a page; a regular article in a paper",
        "cn_def": "石柱；柱狀物；（報紙）專欄；縱列（可數）"
      }
    ]
  },
  "columns": {
    "pos": "n.",
    "en_def": "an upright pillar; a vertical division of a page; a regular article in a paper",
    "cn_def": "石柱；柱狀物；（報紙）專欄；縱列（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an upright pillar; a vertical division of a page; a regular article in a paper",
        "cn_def": "石柱；柱狀物；（報紙）專欄；縱列（可數）"
      }
    ]
  },
  "crop": {
    "pos": "n.",
    "en_def": "a cultivated plant that is grown as food on a large scale",
    "cn_def": "農作物；收成（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cultivated plant that is grown as food on a large scale",
        "cn_def": "農作物；收成（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to harvest or cut off; to appear unexpectedly (crop up)",
        "cn_def": "收割；修剪；剪裁（照片）；突然出現（動詞）"
      }
    ]
  },
  "cropped": {
    "pos": "v.",
    "en_def": "to harvest or cut off; to appear unexpectedly (crop up)",
    "cn_def": "收割；修剪；剪裁（照片）；突然出現（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to harvest or cut off; to appear unexpectedly (crop up)",
        "cn_def": "收割；修剪；剪裁（照片）；突然出現（動詞）"
      }
    ]
  },
  "dime": {
    "pos": "n.",
    "en_def": "a ten-cent coin in the US and Canada",
    "cn_def": "（美、加的一角硬幣，值十美分）（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a ten-cent coin in the US and Canada",
        "cn_def": "（美、加的一角硬幣，值十美分）（可數）"
      }
    ]
  },
  "dirt": {
    "pos": "n.",
    "en_def": "loose soil or earth; unclean matter that soils someone or something",
    "cn_def": "泥土；塵垢；污垢（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "loose soil or earth; unclean matter that soils someone or something",
        "cn_def": "泥土；塵垢；污垢（不可數）"
      }
    ]
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "relating to drama or the theater; sudden, striking, and exciting",
    "cn_def": "戲劇性的；引人注目的；急劇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to drama or the theater; sudden, striking, and exciting",
        "cn_def": "戲劇性的；引人注目的；急劇的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
