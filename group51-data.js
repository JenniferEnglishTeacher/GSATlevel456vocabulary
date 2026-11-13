// Group 51 Quiz Data: Common Nouns, Part 2 (常見名詞 二)
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "Group 51 - Common Nouns, Part 2 (常見名詞 二)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "death",
    "pos": "n.",
    "cn_def": "死亡",
    "en_def": "the end of life",
    "sentence": "Have you ever read a story about the {{BLANK}} of a pet? Yes. It was very sad.",
    "cn": "你讀過關於寵物死亡的故事嗎？ 讀過。非常悲傷。"
  },
  {
    "word": "decision",
    "pos": "n.",
    "cn_def": "決定",
    "en_def": "a choice you make after thinking",
    "sentence": "Which club will you join? I haven't made a {{BLANK}} yet.",
    "cn": "你要參加哪個社團？ 我還沒做決定。"
  },
  {
    "word": "desire",
    "pos": "n.",
    "cn_def": "渴望",
    "en_def": "a strong feeling of wanting something",
    "sentence": "Have you ever had a strong {{BLANK}} to travel? Yes. I really want to visit Europe.",
    "cn": "你曾經有過強烈的旅行渴望嗎？ 有。我真的很想去歐洲。"
  },
  {
    "word": "difference",
    "pos": "n.",
    "cn_def": "差別",
    "en_def": "the way two things are not the same",
    "sentence": "What's the {{BLANK}} between a frog and a toad? A frog has smooth skin.",
    "cn": "青蛙和蟾蜍之間有什麼差別？ 青蛙的皮膚是光滑的。"
  },
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "難處；困難",
    "en_def": "a problem; something that is hard to do",
    "sentence": "Have you ever had any {{BLANK}} with math? Yes. Fractions were hard for me.",
    "cn": "你在數學上曾經遇過任何困難嗎？ 有。分數對我來說很難。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk about something with other people",
    "sentence": "What did your class do today? We had a {{BLANK}} about the school trip.",
    "cn": "你們班今天做了什麼？ 我們針對校外旅行進行了討論。"
  },
  {
    "word": "distance",
    "pos": "n.",
    "cn_def": "距離",
    "en_def": "how far it is between two places",
    "sentence": "What's the {{BLANK}} between Taipei and Kaohsiung? It's about 350 kilometers.",
    "cn": "台北和高雄之間的距離是多少？ 大約三百五十公里。"
  },
  {
    "word": "dot",
    "pos": "n.",
    "cn_def": "點",
    "en_def": "a very small round mark",
    "sentence": "What's between the two words in an e-mail address? There's a {{BLANK}}, like \"gmail dot com.\"",
    "cn": "電子郵件地址中兩個字之間是什麼？ 有一個點，像是「gmail dot com」。"
  },
  {
    "word": "earthquake",
    "pos": "n.",
    "cn_def": "地震",
    "en_def": "a sudden strong shaking of the ground",
    "sentence": "Have you ever felt an {{BLANK}}? Yes. Many times. Taiwan has a lot of them.",
    "cn": "你曾經感受過地震嗎？ 有。很多次。台灣常常地震。"
  },
  {
    "word": "edge",
    "pos": "n.",
    "cn_def": "邊緣",
    "en_def": "the outside end or side of something",
    "sentence": "Where did you put the cup? Between the plate and the {{BLANK}} of the table. Don't knock it off.",
    "cn": "你把杯子放在哪裡？ 在盤子和桌子邊緣之間。別把它撞掉了。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力",
    "en_def": "the hard work you do to try to do something",
    "sentence": "How did you pass the test? I made a big {{BLANK}}. I studied every day.",
    "cn": "你是怎麼通過考試的？ 我付出了很大的努力。我每天都讀書。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "精力；能量",
    "en_def": "the power to be active and do things",
    "sentence": "Have you ever seen a kid with so much {{BLANK}}? No! He runs all day.",
    "cn": "你曾經看過這麼有精力的小孩嗎？ 沒有！他整天都在跑。"
  },
  {
    "word": "engine",
    "pos": "n.",
    "cn_def": "引擎",
    "en_def": "the part of a car or machine that makes it move",
    "sentence": "Has the car {{BLANK}} ever stopped on the highway? Yes, once. It was scary.",
    "cn": "這輛車的引擎曾經在高速公路上熄火過嗎？ 有，一次。很可怕。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the air, water, and land around us",
    "sentence": "How can we help the {{BLANK}}? We can make an effort to recycle.",
    "cn": "我們要怎麼幫助環境？ 我們可以努力做回收。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤；差錯",
    "en_def": "something that is wrong; a mistake",
    "sentence": "Why did your computer stop? It had an {{BLANK}}. I need to restart it.",
    "cn": "你的電腦為什麼停了？ 它出現錯誤。我需要重新開機。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "事件；活動",
    "en_def": "something important that happens",
    "sentence": "Have you ever joined a big sports {{BLANK}}? Yes. I ran in a marathon last year.",
    "cn": "你曾經參加過大型運動賽事嗎？ 參加過。我去年跑了一場馬拉松。"
  },
  {
    "word": "example",
    "pos": "n.",
    "cn_def": "例子",
    "en_def": "one thing that shows what others are like",
    "sentence": "Can you give me an {{BLANK}} of the difference between \"a\" and \"an\"? Sure. \"A cat\" and \"an apple.\"",
    "cn": "你可以舉個例子說明 a 和 an 之間的差別嗎？ 當然。「a cat」和「an apple」。"
  },
  {
    "word": "excuse",
    "pos": "n.",
    "cn_def": "藉口",
    "en_def": "a reason you give for doing something wrong",
    "sentence": "Why was Ben late again? He made an {{BLANK}}. He said his clock was broken.",
    "cn": "班為什麼又遲到了？ 他找了個藉口。他說他的時鐘壞了。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "something that happens to you",
    "sentence": "Have you ever had a scary {{BLANK}}? Yes. I got lost in the mountains once.",
    "cn": "你曾經有過可怕的經驗嗎？ 有。我曾經在山裡迷路。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯",
    "en_def": "a mistake that someone is to blame for",
    "sentence": "Who broke the vase? It was my {{BLANK}}. I made a mistake.",
    "cn": "誰打破了花瓶？ 是我的錯。我犯了一個錯。"
  },
  {
    "word": "flat tire",
    "pos": "n.",
    "cn_def": "爆胎",
    "en_def": "a tire with no air in it",
    "sentence": "Have you ever had a {{BLANK}}? Yes. My bike had one last week.",
    "cn": "你曾經爆胎過嗎？ 有。我的腳踏車上週爆胎了。"
  },
  {
    "word": "freedom",
    "pos": "n.",
    "cn_def": "自由",
    "en_def": "being able to do what you want",
    "sentence": "What's the difference between a pet bird and a wild bird? A wild bird has {{BLANK}}. It can fly anywhere.",
    "cn": "寵物鳥和野鳥之間有什麼差別？ 野鳥有自由。牠可以飛到任何地方。"
  },
  {
    "word": "friendship",
    "pos": "n.",
    "cn_def": "友誼",
    "en_def": "the feeling between people who are friends",
    "sentence": "Have you ever lost a {{BLANK}}? Yes. My best friend moved away.",
    "cn": "你曾經失去過一段友誼嗎？ 有。我最好的朋友搬走了。"
  },
  {
    "word": "front",
    "pos": "n.",
    "cn_def": "前面；正面",
    "en_def": "the part of something that faces forward",
    "sentence": "Where are you sitting? I'm sitting between Amy and Ben in the {{BLANK}} row.",
    "cn": "你坐在哪裡？ 我坐在前排艾咪和班的中間。"
  },
  {
    "word": "fun",
    "pos": "n.",
    "cn_def": "樂趣；娛樂",
    "en_def": "a good time; something you enjoy",
    "sentence": "How was the party? We had a lot of {{BLANK}}.",
    "cn": "派對怎麼樣？ 我們玩得很開心。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "遊戲",
    "en_def": "something you play, often with rules",
    "sentence": "What did you do at the party? We played a {{BLANK}} and had fun.",
    "cn": "你們在派對上做了什麼？ 我們玩了一個遊戲，玩得很開心。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "姿勢；手勢",
    "en_def": "a move of your hand or body that shows what you mean",
    "sentence": "What's the difference between these two {{BLANK}}s? One means \"OK,\" and the other means \"good.\"",
    "cn": "這兩個手勢之間有什麼差別？ 一個代表「OK」，另一個代表「很好」。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標；球門",
    "en_def": "something you want to do; a point in soccer",
    "sentence": "Have you ever scored a {{BLANK}} in soccer? Yes. I scored two last week.",
    "cn": "你曾經在足球比賽中射進過球嗎？ 有。我上週進了兩球。"
  },
  {
    "word": "guy",
    "pos": "n.",
    "cn_def": "傢伙；人(口語)",
    "en_def": "a man or boy",
    "sentence": "Who is the {{BLANK}} between Ben and Tom? That's Mike, our new classmate.",
    "cn": "站在班和湯姆中間的那個傢伙是誰？ 那是麥克，我們的新同學。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do again and again",
    "sentence": "Do you exercise every day? Yes. I have a good {{BLANK}} of jogging every morning.",
    "cn": "你每天運動嗎？ 對。我有每天早上慢跑的好習慣。"
  },
  {
    "word": "haircut",
    "pos": "n.",
    "cn_def": "理髮",
    "en_def": "the act of cutting your hair",
    "sentence": "Have you had a {{BLANK}}? You look different! Yes. I went to the barber yesterday.",
    "cn": "你剪頭髮了嗎？你看起來不一樣了！ 剪了。我昨天去了理髮店。"
  },
  {
    "word": "half",
    "pos": "n.",
    "cn_def": "一半",
    "en_def": "one of two equal parts of something",
    "sentence": "How should we share the cake? Let's cut it between us. You take one {{BLANK}}.",
    "cn": "我們該怎麼分蛋糕？ 我們兩個人分。你拿一半。"
  },
  {
    "word": "hole",
    "pos": "n.",
    "cn_def": "洞",
    "en_def": "an empty space or opening in something",
    "sentence": "Has your sock ever had a {{BLANK}} in it? Yes. My toe came out!",
    "cn": "你的襪子曾經破洞嗎？ 有。我的腳趾跑出來了！"
  },
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日",
    "en_def": "a day when people do not go to work or school",
    "sentence": "What did you do during the {{BLANK}}? I took a trip to Kenting.",
    "cn": "你假期期間做了什麼？ 我去墾丁旅行。"
  }
];

const MCQS = [
  {
    "q": "Have you ever read a story about the ______ of a pet? Yes. It was very sad.",
    "options": [
      "holiday",
      "habit",
      "death",
      "front"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Which club will you join? I haven't made a ______ yet.",
    "options": [
      "decision",
      "haircut",
      "front",
      "excuse"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Have you ever had a strong ______ to travel? Yes. I really want to visit Europe.",
    "options": [
      "dot",
      "desire",
      "front",
      "death"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "What's the ______ between a frog and a toad? A frog has smooth skin.",
    "options": [
      "holiday",
      "distance",
      "example",
      "difference"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Have you ever had any ______ with math? Yes. Fractions were hard for me.",
    "options": [
      "difficulty",
      "event",
      "difference",
      "effort"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "What did your class do today? We had a ______ about the school trip.",
    "options": [
      "error",
      "difference",
      "decision",
      "discussion"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "What's the ______ between Taipei and Kaohsiung? It's about 350 kilometers.",
    "options": [
      "effort",
      "distance",
      "discussion",
      "difference"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "What's between the two words in an e-mail address? There's a ______, like \"gmail dot com.\"",
    "options": [
      "guy",
      "desire",
      "dot",
      "half"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Have you ever felt an ______? Yes. Many times. Taiwan has a lot of them.",
    "options": [
      "holiday",
      "gesture",
      "discussion",
      "earthquake"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Where did you put the cup? Between the plate and the ______ of the table. Don't knock it off.",
    "options": [
      "edge",
      "dot",
      "energy",
      "habit"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "How did you pass the test? I made a big ______. I studied every day.",
    "options": [
      "freedom",
      "gesture",
      "effort",
      "difficulty"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Have you ever seen a kid with so much ______? No! He runs all day.",
    "options": [
      "guy",
      "energy",
      "discussion",
      "difficulty"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Has the car ______ ever stopped on the highway? Yes, once. It was scary.",
    "options": [
      "experience",
      "hole",
      "haircut",
      "engine"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "How can we help the ______? We can make an effort to recycle.",
    "options": [
      "experience",
      "decision",
      "environment",
      "effort"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Why did your computer stop? It had an ______. I need to restart it.",
    "options": [
      "excuse",
      "error",
      "event",
      "engine"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Have you ever joined a big sports ______? Yes. I ran in a marathon last year.",
    "options": [
      "event",
      "difference",
      "fun",
      "energy"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Can you give me an ______ of the difference between \"a\" and \"an\"? Sure. \"A cat\" and \"an apple.\"",
    "options": [
      "death",
      "decision",
      "example",
      "energy"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Why was Ben late again? He made an ______. He said his clock was broken.",
    "options": [
      "decision",
      "excuse",
      "gesture",
      "habit"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Have you ever had a scary ______? Yes. I got lost in the mountains once.",
    "options": [
      "experience",
      "holiday",
      "engine",
      "habit"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Who broke the vase? It was my ______. I made a mistake.",
    "options": [
      "example",
      "freedom",
      "death",
      "fault"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Have you ever had a ______? Yes. My bike had one last week.",
    "options": [
      "earthquake",
      "guy",
      "flat tire",
      "event"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "What's the difference between a pet bird and a wild bird? A wild bird has ______. It can fly anywhere.",
    "options": [
      "freedom",
      "engine",
      "habit",
      "friendship"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Have you ever lost a ______? Yes. My best friend moved away.",
    "options": [
      "dot",
      "decision",
      "death",
      "friendship"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Where are you sitting? I'm sitting between Amy and Ben in the ______ row.",
    "options": [
      "freedom",
      "front",
      "difficulty",
      "earthquake"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "How was the party? We had a lot of ______.",
    "options": [
      "hole",
      "experience",
      "habit",
      "fun"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "What did you do at the party? We played a ______ and had fun.",
    "options": [
      "half",
      "experience",
      "game",
      "fun"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "What's the difference between these two ______? One means \"OK,\" and the other means \"good.\"",
    "options": [
      "halves",
      "gestures",
      "dots",
      "habits"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Have you ever scored a ______ in soccer? Yes. I scored two last week.",
    "options": [
      "goal",
      "half",
      "hole",
      "fun"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Who is the ______ between Ben and Tom? That's Mike, our new classmate.",
    "options": [
      "engine",
      "energy",
      "difference",
      "guy"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Do you exercise every day? Yes. I have a good ______ of jogging every morning.",
    "options": [
      "difficulty",
      "habit",
      "dot",
      "death"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Have you had a ______? You look different! Yes. I went to the barber yesterday.",
    "options": [
      "haircut",
      "event",
      "freedom",
      "hole"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "How should we share the cake? Let's cut it between us. You take one ______.",
    "options": [
      "death",
      "experience",
      "half",
      "fault"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Has your sock ever had a ______ in it? Yes. My toe came out!",
    "options": [
      "hole",
      "energy",
      "gesture",
      "death"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "What did you do during the ______? I took a trip to Kenting.",
    "options": [
      "game",
      "edge",
      "holiday",
      "death"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "death": {
    "pos": "n.",
    "en_def": "the end of life",
    "cn_def": "死亡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the end of life",
        "cn_def": "死亡"
      }
    ]
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice you make after thinking",
    "cn_def": "決定",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a choice you make after thinking",
        "cn_def": "決定"
      }
    ]
  },
  "desire": {
    "pos": "n.",
    "en_def": "a strong feeling of wanting something",
    "cn_def": "渴望",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong feeling of wanting something",
        "cn_def": "渴望"
      }
    ]
  },
  "difference": {
    "pos": "n.",
    "en_def": "the way two things are not the same",
    "cn_def": "差別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way two things are not the same",
        "cn_def": "差別"
      }
    ]
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "a problem; something that is hard to do",
    "cn_def": "難處；困難",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a problem; something that is hard to do",
        "cn_def": "難處；困難"
      }
    ]
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk about something with other people",
    "cn_def": "討論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a talk about something with other people",
        "cn_def": "討論"
      }
    ]
  },
  "distance": {
    "pos": "n.",
    "en_def": "how far it is between two places",
    "cn_def": "距離",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how far it is between two places",
        "cn_def": "距離"
      }
    ]
  },
  "dot": {
    "pos": "n.",
    "en_def": "a very small round mark",
    "cn_def": "點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very small round mark",
        "cn_def": "點"
      }
    ]
  },
  "earthquake": {
    "pos": "n.",
    "en_def": "a sudden strong shaking of the ground",
    "cn_def": "地震",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sudden strong shaking of the ground",
        "cn_def": "地震"
      }
    ]
  },
  "edge": {
    "pos": "n.",
    "en_def": "the outside end or side of something",
    "cn_def": "邊緣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the outside end or side of something",
        "cn_def": "邊緣"
      }
    ]
  },
  "effort": {
    "pos": "n.",
    "en_def": "the hard work you do to try to do something",
    "cn_def": "努力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the hard work you do to try to do something",
        "cn_def": "努力"
      }
    ]
  },
  "energy": {
    "pos": "n.",
    "en_def": "the power to be active and do things",
    "cn_def": "精力；能量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the power to be active and do things",
        "cn_def": "精力；能量"
      }
    ]
  },
  "engine": {
    "pos": "n.",
    "en_def": "the part of a car or machine that makes it move",
    "cn_def": "引擎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of a car or machine that makes it move",
        "cn_def": "引擎"
      }
    ]
  },
  "environment": {
    "pos": "n.",
    "en_def": "the air, water, and land around us",
    "cn_def": "環境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the air, water, and land around us",
        "cn_def": "環境"
      }
    ]
  },
  "error": {
    "pos": "n.",
    "en_def": "something that is wrong; a mistake",
    "cn_def": "錯誤；差錯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is wrong; a mistake",
        "cn_def": "錯誤；差錯"
      }
    ]
  },
  "event": {
    "pos": "n.",
    "en_def": "something important that happens",
    "cn_def": "事件；活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something important that happens",
        "cn_def": "事件；活動"
      }
    ]
  },
  "example": {
    "pos": "n.",
    "en_def": "one thing that shows what others are like",
    "cn_def": "例子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one thing that shows what others are like",
        "cn_def": "例子"
      }
    ]
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give for doing something wrong",
    "cn_def": "藉口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a reason you give for doing something wrong",
        "cn_def": "藉口"
      }
    ]
  },
  "experience": {
    "pos": "n.",
    "en_def": "something that happens to you",
    "cn_def": "經驗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that happens to you",
        "cn_def": "經驗"
      }
    ]
  },
  "fault": {
    "pos": "n.",
    "en_def": "a mistake that someone is to blame for",
    "cn_def": "過錯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mistake that someone is to blame for",
        "cn_def": "過錯"
      }
    ]
  },
  "flat tire": {
    "pos": "n.",
    "en_def": "a tire with no air in it",
    "cn_def": "爆胎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tire with no air in it",
        "cn_def": "爆胎"
      }
    ]
  },
  "freedom": {
    "pos": "n.",
    "en_def": "being able to do what you want",
    "cn_def": "自由",
    "combined": [
      {
        "pos": "n.",
        "en_def": "being able to do what you want",
        "cn_def": "自由"
      }
    ]
  },
  "friendship": {
    "pos": "n.",
    "en_def": "the feeling between people who are friends",
    "cn_def": "友誼",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the feeling between people who are friends",
        "cn_def": "友誼"
      }
    ]
  },
  "front": {
    "pos": "n.",
    "en_def": "the part of something that faces forward",
    "cn_def": "前面；正面",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the part of something that faces forward",
        "cn_def": "前面；正面"
      }
    ]
  },
  "fun": {
    "pos": "n.",
    "en_def": "a good time; something you enjoy",
    "cn_def": "樂趣；娛樂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a good time; something you enjoy",
        "cn_def": "樂趣；娛樂"
      }
    ]
  },
  "game": {
    "pos": "n.",
    "en_def": "something you play, often with rules",
    "cn_def": "遊戲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you play, often with rules",
        "cn_def": "遊戲"
      }
    ]
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a move of your hand or body that shows what you mean",
    "cn_def": "姿勢；手勢",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a move of your hand or body that shows what you mean",
        "cn_def": "姿勢；手勢"
      }
    ]
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you want to do; a point in soccer",
    "cn_def": "目標；球門",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you want to do; a point in soccer",
        "cn_def": "目標；球門"
      }
    ]
  },
  "guy": {
    "pos": "n.",
    "en_def": "a man or boy",
    "cn_def": "傢伙；人(口語)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a man or boy",
        "cn_def": "傢伙；人(口語)"
      }
    ]
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do again and again",
    "cn_def": "習慣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you do again and again",
        "cn_def": "習慣"
      }
    ]
  },
  "haircut": {
    "pos": "n.",
    "en_def": "the act of cutting your hair",
    "cn_def": "理髮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of cutting your hair",
        "cn_def": "理髮"
      }
    ]
  },
  "half": {
    "pos": "n.",
    "en_def": "one of two equal parts of something",
    "cn_def": "一半",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of two equal parts of something",
        "cn_def": "一半"
      }
    ]
  },
  "hole": {
    "pos": "n.",
    "en_def": "an empty space or opening in something",
    "cn_def": "洞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an empty space or opening in something",
        "cn_def": "洞"
      }
    ]
  },
  "holiday": {
    "pos": "n.",
    "en_def": "a day when people do not go to work or school",
    "cn_def": "假日",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a day when people do not go to work or school",
        "cn_def": "假日"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
