// Group 52 Quiz Data: Common Nouns, Part 3 (常見名詞 三)
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "Group 52 - Common Nouns, Part 3 (常見名詞 三)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hunger",
    "pos": "n.",
    "cn_def": "饑餓",
    "en_def": "the feeling of needing food",
    "sentence": "Why do some children need help? Their {{BLANK}} is a big problem. It's important to give them food.",
    "cn": "為什麼有些孩子需要幫助？ 他們的饑餓是很大的問題。給他們食物很重要。"
  },
  {
    "word": "importance",
    "pos": "n.",
    "cn_def": "重要性",
    "en_def": "how important something is",
    "sentence": "What did the teacher talk about? The {{BLANK}} of sleep. It's important to sleep eight hours.",
    "cn": "老師講了什麼？ 睡眠的重要性。睡八小時很重要。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響",
    "en_def": "the power to change how people think or act",
    "sentence": "What does \"{{BLANK}}\" mean? It means the power to change people or things.",
    "cn": "influence 是什麼意思？ 意思是改變人或事物的力量（影響）。"
  },
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請",
    "en_def": "words or a card asking someone to come to something",
    "sentence": "Did you get an {{BLANK}} to Amy's party? Yes. It's fun to go to parties.",
    "cn": "你收到艾咪派對的邀請了嗎？ 收到了。參加派對很好玩。"
  },
  {
    "word": "item",
    "pos": "n.",
    "cn_def": "項目",
    "en_def": "one thing in a list or group",
    "sentence": "How many {{BLANK}}s did you buy? Ten. We had to wait in line for a long time.",
    "cn": "你買了幾件商品？ 十件。我們排隊排了很久。"
  },
  {
    "word": "joke",
    "pos": "n.",
    "cn_def": "笑話",
    "en_def": "something you say to make people laugh",
    "sentence": "Why is everyone laughing? Ben told a funny {{BLANK}}.",
    "cn": "大家為什麼在笑？ 班說了一個好笑的笑話。"
  },
  {
    "word": "kingdom",
    "pos": "n.",
    "cn_def": "王國",
    "en_def": "a country that has a king or queen",
    "sentence": "What does \"{{BLANK}}\" mean? It means a country with a king or queen.",
    "cn": "kingdom 是什麼意思？ 意思是有國王或女王的國家（王國）。"
  },
  {
    "word": "kiss",
    "pos": "n.",
    "cn_def": "親吻",
    "en_def": "a touch with the lips to show love",
    "sentence": "What did Mom do before you left? She gave me a {{BLANK}} on the cheek.",
    "cn": "你出門前媽媽做了什麼？ 她在我臉頰上親了一下。"
  },
  {
    "word": "language",
    "pos": "n.",
    "cn_def": "語言",
    "en_def": "the words people in a country speak and write",
    "sentence": "Why do you study Japanese? It's fun to learn a new {{BLANK}}.",
    "cn": "你為什麼學日文？ 學一種新語言很有趣。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律",
    "en_def": "a rule that everyone in a country must follow",
    "sentence": "Is it OK to ride a scooter without a helmet? No. It's against the {{BLANK}}. It's important to wear one.",
    "cn": "騎機車不戴安全帽可以嗎？ 不行。那違反法律。戴安全帽很重要。"
  },
  {
    "word": "level",
    "pos": "n.",
    "cn_def": "程度；關卡",
    "en_def": "how high or how good something is; one part of a game",
    "sentence": "What does \"{{BLANK}} 3\" mean in this game? It means you're in the third part.",
    "cn": "這個遊戲的「第三關」是什麼意思？ 意思是你在第三個階段。"
  },
  {
    "word": "life",
    "pos": "n.",
    "cn_def": "生活；人生",
    "en_def": "the time when a person is alive; the way someone lives",
    "sentence": "What do you want in your {{BLANK}}? It's important to be happy and healthy.",
    "cn": "你在人生中想要什麼？ 快樂和健康很重要。"
  },
  {
    "word": "light",
    "pos": "n.",
    "cn_def": "燈光；光線",
    "en_def": "something that lets you see, like the sun or a lamp",
    "sentence": "It's dark in here. Please turn on the {{BLANK}}.",
    "cn": "這裡好暗。 請把燈打開。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "線；隊伍",
    "en_def": "a long thin mark; a row of people waiting",
    "sentence": "Where should we stand? Please wait in {{BLANK}} behind the yellow mark.",
    "cn": "我們應該站在哪裡？ 請在黃色記號後面排隊等候。"
  },
  {
    "word": "liquid",
    "pos": "n.",
    "cn_def": "液體",
    "en_def": "something that flows like water",
    "sentence": "What does \"{{BLANK}}\" mean? It means something like water or milk.",
    "cn": "liquid 是什麼意思？ 意思是像水或牛奶那樣的東西（液體）。"
  },
  {
    "word": "locker",
    "pos": "n.",
    "cn_def": "(加鎖的)置物櫃",
    "en_def": "a small metal closet with a lock for keeping your things",
    "sentence": "Where do you keep your books? In my {{BLANK}}. It's easy to find them there.",
    "cn": "你把書放在哪裡？ 放在我的置物櫃裡。在那裡很容易找到。"
  },
  {
    "word": "love",
    "pos": "n.",
    "cn_def": "愛",
    "en_def": "a very strong feeling of liking someone",
    "sentence": "What does \"puppy {{BLANK}}\" mean? It means young love, like a first crush.",
    "cn": "puppy love 是什麼意思？ 意思是年輕時的愛，像是初戀。"
  },
  {
    "word": "machine",
    "pos": "n.",
    "cn_def": "機器",
    "en_def": "a thing with moving parts that does work",
    "sentence": "How do you use this {{BLANK}}? It's easy to use. Just press this button.",
    "cn": "這台機器怎麼用？ 很容易用。只要按這個按鈕。"
  },
  {
    "word": "manner",
    "pos": "n.",
    "cn_def": "方法；態度；禮貌",
    "en_def": "the way you do something; polite ways of acting",
    "sentence": "Why do people like Lucy? She has good {{BLANK}}s. She thinks it's important to be polite.",
    "cn": "大家為什麼喜歡露西？ 她很有禮貌。她認為有禮貌很重要。"
  },
  {
    "word": "mark",
    "pos": "n.",
    "cn_def": "記號",
    "en_def": "a small sign or spot on something",
    "sentence": "What did you make on the map? I made a red {{BLANK}} on our school.",
    "cn": "你在地圖上做了什麼？ 我在我們學校的位置做了紅色記號。"
  },
  {
    "word": "meaning",
    "pos": "n.",
    "cn_def": "意思；意涵",
    "en_def": "what a word or sign tells you",
    "sentence": "What's the {{BLANK}} of this word? What does it mean? It means \"happy.\"",
    "cn": "這個字的意思是什麼？它是什麼意思？ 意思是「快樂」。"
  },
  {
    "word": "medicine",
    "pos": "n.",
    "cn_def": "藥物",
    "en_def": "something you take to get well when you are sick",
    "sentence": "Is it OK to take this {{BLANK}} after lunch? Yes. But it's important to drink water with it.",
    "cn": "午餐後吃這個藥可以嗎？ 可以。但配水吃很重要。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶",
    "en_def": "something you remember from the past",
    "sentence": "What's your best {{BLANK}} of elementary school? The school trip. It was fun to camp with friends.",
    "cn": "你對小學最美好的回憶是什麼？ 校外旅行。和朋友一起露營很好玩。"
  },
  {
    "word": "metal",
    "pos": "n.",
    "cn_def": "金屬",
    "en_def": "a hard material like iron or gold",
    "sentence": "What does \"{{BLANK}}\" mean? It means hard things like iron or gold.",
    "cn": "metal 是什麼意思？ 意思是像鐵或金那樣堅硬的東西（金屬）。"
  },
  {
    "word": "mistake",
    "pos": "n.",
    "cn_def": "錯誤；過失",
    "en_def": "something you do that is wrong",
    "sentence": "Why did you get a low grade? I made many {{BLANK}}s on the test.",
    "cn": "你為什麼分數很低？ 我考試犯了很多錯誤。"
  }
];

const MCQS = [
  {
    "q": "Why do some children need help? Their ______ is a big problem. It's important to give them food.",
    "options": [
      "influence",
      "hunger",
      "importance",
      "locker"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "What did the teacher talk about? The ______ of sleep. It's important to sleep eight hours.",
    "options": [
      "law",
      "line",
      "importance",
      "item"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "What does \"______\" mean? It means the power to change people or things.",
    "options": [
      "influence",
      "life",
      "metal",
      "manner"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Did you get an ______ to Amy's party? Yes. It's fun to go to parties.",
    "options": [
      "kiss",
      "love",
      "medicine",
      "invitation"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "How many ______ did you buy? Ten. We had to wait in line for a long time.",
    "options": [
      "hungers",
      "kingdoms",
      "items",
      "lines"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Why is everyone laughing? Ben told a funny ______.",
    "options": [
      "joke",
      "mark",
      "manner",
      "kiss"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "What does \"______\" mean? It means a country with a king or queen.",
    "options": [
      "importance",
      "kingdom",
      "level",
      "liquid"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "What did Mom do before you left? She gave me a ______ on the cheek.",
    "options": [
      "locker",
      "metal",
      "medicine",
      "kiss"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Why do you study Japanese? It's fun to learn a new ______.",
    "options": [
      "mistake",
      "language",
      "mark",
      "memory"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Is it OK to ride a scooter without a helmet? No. It's against the ______. It's important to wear one.",
    "options": [
      "kiss",
      "mistake",
      "importance",
      "law"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "What does \"______ 3\" mean in this game? It means you're in the third part.",
    "options": [
      "hunger",
      "life",
      "level",
      "law"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "What do you want in your ______? It's important to be happy and healthy.",
    "options": [
      "life",
      "meaning",
      "language",
      "joke"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "It's dark in here. Please turn on the ______.",
    "options": [
      "life",
      "locker",
      "joke",
      "light"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Where should we stand? Please wait in ______ behind the yellow mark.",
    "options": [
      "kiss",
      "line",
      "love",
      "item"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "What does \"______\" mean? It means something like water or milk.",
    "options": [
      "importance",
      "kiss",
      "liquid",
      "hunger"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Where do you keep your books? In my ______. It's easy to find them there.",
    "options": [
      "locker",
      "meaning",
      "metal",
      "line"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "What does \"puppy ______\" mean? It means young love, like a first crush.",
    "options": [
      "locker",
      "liquid",
      "love",
      "mark"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "How do you use this ______? It's easy to use. Just press this button.",
    "options": [
      "machine",
      "medicine",
      "meaning",
      "level"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Why do people like Lucy? She has good ______. She thinks it's important to be polite.",
    "options": [
      "liquids",
      "manners",
      "lives",
      "jokes"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "What did you make on the map? I made a red ______ on our school.",
    "options": [
      "joke",
      "law",
      "mistake",
      "mark"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "What's the ______ of this word? What does it mean? It means \"happy.\"",
    "options": [
      "medicine",
      "kingdom",
      "meaning",
      "mark"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Is it OK to take this ______ after lunch? Yes. But it's important to drink water with it.",
    "options": [
      "medicine",
      "locker",
      "joke",
      "metal"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "What's your best ______ of elementary school? The school trip. It was fun to camp with friends.",
    "options": [
      "law",
      "language",
      "life",
      "memory"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "What does \"______\" mean? It means hard things like iron or gold.",
    "options": [
      "level",
      "metal",
      "liquid",
      "life"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Why did you get a low grade? I made many ______ on the test.",
    "options": [
      "jokes",
      "manners",
      "metals",
      "mistakes"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "hunger": {
    "pos": "n.",
    "en_def": "the feeling of needing food",
    "cn_def": "饑餓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the feeling of needing food",
        "cn_def": "饑餓"
      }
    ]
  },
  "importance": {
    "pos": "n.",
    "en_def": "how important something is",
    "cn_def": "重要性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how important something is",
        "cn_def": "重要性"
      }
    ]
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change how people think or act",
    "cn_def": "影響",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the power to change how people think or act",
        "cn_def": "影響"
      }
    ]
  },
  "invitation": {
    "pos": "n.",
    "en_def": "words or a card asking someone to come to something",
    "cn_def": "邀請",
    "combined": [
      {
        "pos": "n.",
        "en_def": "words or a card asking someone to come to something",
        "cn_def": "邀請"
      }
    ]
  },
  "item": {
    "pos": "n.",
    "en_def": "one thing in a list or group",
    "cn_def": "項目",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one thing in a list or group",
        "cn_def": "項目"
      }
    ]
  },
  "joke": {
    "pos": "n.",
    "en_def": "something you say to make people laugh",
    "cn_def": "笑話",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you say to make people laugh",
        "cn_def": "笑話"
      }
    ]
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country that has a king or queen",
    "cn_def": "王國",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a country that has a king or queen",
        "cn_def": "王國"
      }
    ]
  },
  "kiss": {
    "pos": "n.",
    "en_def": "a touch with the lips to show love",
    "cn_def": "親吻",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a touch with the lips to show love",
        "cn_def": "親吻"
      }
    ]
  },
  "language": {
    "pos": "n.",
    "en_def": "the words people in a country speak and write",
    "cn_def": "語言",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the words people in a country speak and write",
        "cn_def": "語言"
      }
    ]
  },
  "law": {
    "pos": "n.",
    "en_def": "a rule that everyone in a country must follow",
    "cn_def": "法律",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rule that everyone in a country must follow",
        "cn_def": "法律"
      }
    ]
  },
  "level": {
    "pos": "n.",
    "en_def": "how high or how good something is; one part of a game",
    "cn_def": "程度；關卡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how high or how good something is; one part of a game",
        "cn_def": "程度；關卡"
      }
    ]
  },
  "life": {
    "pos": "n.",
    "en_def": "the time when a person is alive; the way someone lives",
    "cn_def": "生活；人生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the time when a person is alive; the way someone lives",
        "cn_def": "生活；人生"
      }
    ]
  },
  "light": {
    "pos": "n.",
    "en_def": "something that lets you see, like the sun or a lamp",
    "cn_def": "燈光；光線",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that lets you see, like the sun or a lamp",
        "cn_def": "燈光；光線"
      }
    ]
  },
  "line": {
    "pos": "n.",
    "en_def": "a long thin mark; a row of people waiting",
    "cn_def": "線；隊伍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long thin mark; a row of people waiting",
        "cn_def": "線；隊伍"
      }
    ]
  },
  "liquid": {
    "pos": "n.",
    "en_def": "something that flows like water",
    "cn_def": "液體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that flows like water",
        "cn_def": "液體"
      }
    ]
  },
  "locker": {
    "pos": "n.",
    "en_def": "a small metal closet with a lock for keeping your things",
    "cn_def": "(加鎖的)置物櫃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small metal closet with a lock for keeping your things",
        "cn_def": "(加鎖的)置物櫃"
      }
    ]
  },
  "love": {
    "pos": "n.",
    "en_def": "a very strong feeling of liking someone",
    "cn_def": "愛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very strong feeling of liking someone",
        "cn_def": "愛"
      }
    ]
  },
  "machine": {
    "pos": "n.",
    "en_def": "a thing with moving parts that does work",
    "cn_def": "機器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing with moving parts that does work",
        "cn_def": "機器"
      }
    ]
  },
  "manner": {
    "pos": "n.",
    "en_def": "the way you do something; polite ways of acting",
    "cn_def": "方法；態度；禮貌",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way you do something; polite ways of acting",
        "cn_def": "方法；態度；禮貌"
      }
    ]
  },
  "mark": {
    "pos": "n.",
    "en_def": "a small sign or spot on something",
    "cn_def": "記號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small sign or spot on something",
        "cn_def": "記號"
      }
    ]
  },
  "meaning": {
    "pos": "n.",
    "en_def": "what a word or sign tells you",
    "cn_def": "意思；意涵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "what a word or sign tells you",
        "cn_def": "意思；意涵"
      }
    ]
  },
  "medicine": {
    "pos": "n.",
    "en_def": "something you take to get well when you are sick",
    "cn_def": "藥物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you take to get well when you are sick",
        "cn_def": "藥物"
      }
    ]
  },
  "memory": {
    "pos": "n.",
    "en_def": "something you remember from the past",
    "cn_def": "記憶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you remember from the past",
        "cn_def": "記憶"
      }
    ]
  },
  "metal": {
    "pos": "n.",
    "en_def": "a hard material like iron or gold",
    "cn_def": "金屬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard material like iron or gold",
        "cn_def": "金屬"
      }
    ]
  },
  "mistake": {
    "pos": "n.",
    "en_def": "something you do that is wrong",
    "cn_def": "錯誤；過失",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you do that is wrong",
        "cn_def": "錯誤；過失"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
