// Part 3 Quiz Data: knit – mist
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 17-3 - knit – mist",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "knit",
    "pos": "v./n.",
    "cn_def": "編織；針織（動詞）；針織品（名詞）",
    "en_def": "to make a garment by interlocking loops of wool with needles; a knitted fabric",
    "sentence": "Every winter, my caring grandmother sits quietly by the fireplace to {{BLANK}} warm wool socks for the family.",
    "cn": "每年冬天，慈祥的祖母總是靜靜坐在壁爐旁為全家編織溫暖的羊毛襪。"
  },
  {
    "word": "koala",
    "pos": "n.",
    "cn_def": "無尾熊；考拉（可數）",
    "en_def": "an Australian arboreal marsupial with thick gray fur and large ears",
    "sentence": "During our wonderful trip to Sydney, we visited a famous nature sanctuary to see a mother {{BLANK}} sleeping peacefully.",
    "cn": "在雪梨的美好旅行中，我們參觀了一處著名的自然保護區，看見一隻母無尾熊正平靜地熟睡著。"
  },
  {
    "word": "lace",
    "pos": "n./v.",
    "cn_def": "蕾絲；鞋帶（名詞）；繫鞋帶（動詞）",
    "en_def": "a fine delicate fabric made of yarn in an open webbed pattern; to fasten with laces",
    "sentence": "The graceful bride walked slowly down the aisle in an exquisite wedding gown decorated with vintage French {{BLANK}}.",
    "cn": "優雅的新娘身穿飾有復古法國蕾絲的精美婚紗緩步走過紅毯通道。"
  },
  {
    "word": "lately",
    "pos": "adv.",
    "cn_def": "近來；最近",
    "en_def": "not long ago; in recent times; recently",
    "sentence": "Dana looks quite exhausted because she has been working overtime at the advertising agency {{BLANK}}.",
    "cn": "黛娜看起來相當疲憊，因為她最近一直在廣告公司加班。"
  },
  {
    "word": "lawn",
    "pos": "n.",
    "cn_def": "草坪；草地（可數）",
    "en_def": "an area of short, regularly mown grass in the yard of a house or in a park",
    "sentence": "My father spends every sunny Saturday morning using an electric mower to cut the front {{BLANK}}.",
    "cn": "我父親每逢陽光明媚的週六早晨都會使用電動除草機修剪前院草坪。"
  },
  {
    "word": "Liberty",
    "pos": "n.",
    "cn_def": "自由；特權；自主權（不可數/可數）",
    "en_def": "the state of being free within society from oppressive restrictions",
    "sentence": "Millions of immigrants arriving in New York Harbor were inspired by the magnificent Statue of {{BLANK}}.",
    "cn": "抵達紐約港的數百萬移民都受到了雄偉自由女神像的鼓舞。"
  },
  {
    "word": "lock",
    "pos": "n./v.",
    "cn_def": "鎖（名詞）；鎖上；鎖好（動詞）",
    "en_def": "a mechanism for keeping a door or lid fastened; to fasten or secure with a lock",
    "sentence": "Viola routinely forgets to {{BLANK}} the back door before leaving for her morning run in the park.",
    "cn": "薇奧拉在出門前往公園晨跑前，經常忘記把後門鎖上。"
  },
  {
    "word": "mist",
    "pos": "n./v.",
    "cn_def": "薄霧；水汽（名詞）；蒙上薄霧（動詞）",
    "en_def": "a cloud of tiny water droplets suspended in the atmosphere; to cover with mist",
    "sentence": "As dawn broke across the valley, the high mountain peaks were completely shrouded in thick morning {{BLANK}}.",
    "cn": "當破曉拂曉時分劃過山谷，高聳的山峰完全籠罩在濃濃的清晨薄霧中。"
  }
];

const MCQS = [
  {
    "q": "Grandma loves to ______ warm wool sweaters for all her grandchildren during winter.",
    "options": [
      "lock",
      "knit",
      "lace",
      "mist"
    ],
    "answer": 1,
    "cn": "冬天時，奶奶喜歡為所有的孫子孫女編織溫暖的羊毛衣。",
    "vocabIndex": 0
  },
  {
    "q": "The sleepy ______ climbed slowly up the eucalyptus tree in the Australian wildlife park.",
    "options": [
      "koala",
      "lawn",
      "liberty",
      "lock"
    ],
    "answer": 0,
    "cn": "那隻昏昏欲睡的無尾熊在澳洲野生動物園裡緩慢地爬上尤加利樹。",
    "vocabIndex": 1
  },
  {
    "q": "The bride's wedding gown was decorated with delicate white ______ around the sleeves.",
    "options": [
      "mist",
      "lawn",
      "koala",
      "lace"
    ],
    "answer": 3,
    "cn": "新娘的婚紗袖口周圍裝飾著精緻的白色蕾絲。",
    "vocabIndex": 2
  },
  {
    "q": "Peter hasn't been sleeping very well ______, so he feels sleepy during morning classes.",
    "options": [
      "openly",
      "strictly",
      "lately",
      "fairly"
    ],
    "answer": 2,
    "cn": "彼得最近一直睡得不太好，所以早自習時感覺昏昏欲睡。",
    "vocabIndex": 3
  },
  {
    "q": "Dad takes out the mower every weekend to cut the tall grass on our front ______.",
    "options": [
      "koala",
      "liberty",
      "mist",
      "lawn"
    ],
    "answer": 3,
    "cn": "爸爸每週末都會拿出除草機修剪我們前院草坪上的長草。",
    "vocabIndex": 4
  },
  {
    "q": "The famous Statue of ______ stands proudly in New York Harbor welcoming immigrants.",
    "options": [
      "Liberty",
      "Koala",
      "Lawn",
      "Mist"
    ],
    "answer": 0,
    "cn": "著名的自由女神像驕傲地矗立在紐約港，歡迎移民的到來。",
    "vocabIndex": 5
  },
  {
    "q": "Always remember to ______ your front door when you leave home for vacation.",
    "options": [
      "knit",
      "mist",
      "lock",
      "lace"
    ],
    "answer": 2,
    "cn": "出門度假時，切記一定要把前門鎖好。",
    "vocabIndex": 6
  },
  {
    "q": "In the early morning, a gentle ______ rose from the calm surface of the lake.",
    "options": [
      "koala",
      "mist",
      "lawn",
      "liberty"
    ],
    "answer": 1,
    "cn": "清晨時分，一陣輕柔的薄霧從平靜的湖面上升起。",
    "vocabIndex": 7
  },
  {
    "q": "The athlete sat on the bench to ______ up his running shoes before the race.",
    "options": [
      "mist",
      "lock",
      "knit",
      "lace"
    ],
    "answer": 3,
    "cn": "那名運動員在比賽前坐在長椅上繫緊他的跑鞋鞋帶。",
    "vocabIndex": 2
  },
  {
    "q": "The keys were left inside, so the security guard had to break the rusty ______.",
    "options": [
      "lawn",
      "lock",
      "koala",
      "liberty"
    ],
    "answer": 1,
    "cn": "鑰匙忘在裡面了，所以警衛不得不砸開生鏽的鎖。",
    "vocabIndex": 6
  },
  {
    "q": "The bathroom mirror ______ up quickly while I was taking a hot shower.",
    "options": [
      "locked",
      "laced",
      "misted",
      "knitted"
    ],
    "answer": 2,
    "cn": "當我洗熱水澡時，浴室鏡子迅速蒙上了一層水霧。",
    "vocabIndex": 7
  },
  {
    "q": "Citizens in a democratic society cherish their civil rights and basic ______.",
    "options": [
      "liberties",
      "lawns",
      "koalas",
      "mists"
    ],
    "answer": 0,
    "cn": "民主社會的公民珍惜他們的公民權利與基本自由。",
    "vocabIndex": 5
  },
  {
    "q": "This small mountain town is a closely ______ community where everyone knows each other.",
    "options": [
      "locked",
      "misted",
      "knit",
      "laced"
    ],
    "answer": 2,
    "cn": "這座山間小鎮是一個彼此緊密結合／緊密相依的社區，每個人都互相認識。",
    "vocabIndex": 0
  },
  {
    "q": "Signs posted throughout the botanical garden clearly warn visitors to ______.",
    "options": [
      "take the liberty of",
      "keep off the lawn",
      "lace up shoes",
      "come in handy"
    ],
    "answer": 1,
    "cn": "植物園各處樹立的標誌明確告誡遊客請勿踐踏草坪。",
    "vocabIndex": 4
  },
  {
    "q": "I ______ sending the project report directly to the manager before asking you.",
    "options": [
      "took the liberty of",
      "kept off the lawn",
      "came in handy",
      "bridged the gap"
    ],
    "answer": 0,
    "cn": "在詢問您之前，我冒昧直接將專案報告發送給了經理。",
    "vocabIndex": 5
  },
  {
    "q": "The gold coins and valuable diamonds are kept safely ______ in the bank vault.",
    "options": [
      "by taking liberties",
      "on the lawn",
      "in the morning mist",
      "under lock and key"
    ],
    "answer": 3,
    "cn": "金幣與昂貴的鑽石都被安全地妥善鎖好保管在銀行保險庫中。",
    "vocabIndex": 6
  },
  {
    "q": "The mountain peak was completely ______ as the sun began to rise above the clouds.",
    "options": [
      "shrouded in mist",
      "kept under lock",
      "taking liberties",
      "laced with ribbon"
    ],
    "answer": 0,
    "cn": "當太陽開始在雲層上升起時，山頂完全籠罩在薄霧之中。",
    "vocabIndex": 7
  },
  {
    "q": "Before hiking up the rugged trail, make sure you properly ______.",
    "options": [
      "keep off the lawn",
      "take the liberty",
      "lace up your boots",
      "knit your brows"
    ],
    "answer": 2,
    "cn": "在沿著崎嶇小徑登山前，務必確保你已經妥善繫緊了登山靴帶。",
    "vocabIndex": 2
  },
  {
    "q": "The boss began to ______ in concentration as he examined the confusing numbers.",
    "options": [
      "keep off the lawn",
      "knit his brows",
      "lace up his shoes",
      "take liberties"
    ],
    "answer": 1,
    "cn": "老闆在仔細檢查令人困惑的數字時，全神貫注地皺起眉頭。",
    "vocabIndex": 0
  },
  {
    "q": "The baby was dressed in a soft ______ cap with tiny blue flowers.",
    "options": [
      "handy",
      "competitive",
      "dishonest",
      "knit"
    ],
    "answer": 3,
    "cn": "小寶寶戴著一頂帶有細小藍花的柔軟針織毛帽。",
    "vocabIndex": 0
  },
  {
    "q": "The morning weather in the coastal village was quite ______ and cool.",
    "options": [
      "honest",
      "handy",
      "misty",
      "additional"
    ],
    "answer": 2,
    "cn": "這座沿海村莊早晨的天氣相當霧濛濛的且涼爽。",
    "vocabIndex": 7
  },
  {
    "q": "Australian wildlife sanctuaries work hard to protect the native ______ population.",
    "options": [
      "lawn",
      "mist",
      "liberty",
      "koala"
    ],
    "answer": 3,
    "cn": "澳洲野生動物保護區致力於保護本土的無尾熊族群。",
    "vocabIndex": 1
  },
  {
    "q": "The heavy old iron ______ on the castle gate has not been opened for a century.",
    "options": [
      "lock",
      "koala",
      "lawn",
      "liberty"
    ],
    "answer": 0,
    "cn": "城堡大門上沉重的舊鐵鎖已經有一百年沒有被打開過了。",
    "vocabIndex": 6
  },
  {
    "q": "The gardener used a sharp mower to trim the green ______ behind the house.",
    "options": [
      "mist",
      "lawn",
      "koala",
      "liberty"
    ],
    "answer": 1,
    "cn": "園丁使用鋒利的割草機修剪屋後綠色的草坪。",
    "vocabIndex": 4
  },
  {
    "q": "We bought our train tickets online ______ so we didn't have to wait in line.",
    "options": [
      "lately",
      "strictly",
      "unfairly",
      "in advance"
    ],
    "answer": 3,
    "cn": "我們提前／事先在網路上購買了火車票，因此不必排隊等候。"
  }
];

const LOOKUP = {
  "knit": {
    "pos": "v./n.",
    "en_def": "to make a garment by interlocking loops of wool with needles; a knitted fabric",
    "cn_def": "編織；針織（動詞）；針織品（名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to make a garment by interlocking loops of wool with needles; a knitted fabric",
        "cn_def": "編織；針織（動詞）；針織品（名詞）"
      }
    ]
  },
  "koala": {
    "pos": "n.",
    "en_def": "an Australian arboreal marsupial with thick gray fur and large ears",
    "cn_def": "無尾熊；考拉（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an Australian arboreal marsupial with thick gray fur and large ears",
        "cn_def": "無尾熊；考拉（可數）"
      }
    ]
  },
  "lace": {
    "pos": "n./v.",
    "en_def": "a fine delicate fabric made of yarn in an open webbed pattern; to fasten with laces",
    "cn_def": "蕾絲；鞋帶（名詞）；繫鞋帶（動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a fine delicate fabric made of yarn in an open webbed pattern; to fasten with laces",
        "cn_def": "蕾絲；鞋帶（名詞）；繫鞋帶（動詞）"
      }
    ]
  },
  "lately": {
    "pos": "adv.",
    "en_def": "not long ago; in recent times; recently",
    "cn_def": "近來；最近",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "not long ago; in recent times; recently",
        "cn_def": "近來；最近"
      }
    ]
  },
  "lawn": {
    "pos": "n.",
    "en_def": "an area of short, regularly mown grass in the yard of a house or in a park",
    "cn_def": "草坪；草地（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of short, regularly mown grass in the yard of a house or in a park",
        "cn_def": "草坪；草地（可數）"
      }
    ]
  },
  "liberty": {
    "pos": "n.",
    "en_def": "the state of being free within society from oppressive restrictions",
    "cn_def": "自由；特權；自主權（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being free within society from oppressive restrictions",
        "cn_def": "自由；特權；自主權（不可數/可數）"
      }
    ]
  },
  "lock": {
    "pos": "n./v.",
    "en_def": "a mechanism for keeping a door or lid fastened; to fasten or secure with a lock",
    "cn_def": "鎖（名詞）；鎖上；鎖好（動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a mechanism for keeping a door or lid fastened; to fasten or secure with a lock",
        "cn_def": "鎖（名詞）；鎖上；鎖好（動詞）"
      }
    ]
  },
  "mist": {
    "pos": "n./v.",
    "en_def": "a cloud of tiny water droplets suspended in the atmosphere; to cover with mist",
    "cn_def": "薄霧；水汽（名詞）；蒙上薄霧（動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a cloud of tiny water droplets suspended in the atmosphere; to cover with mist",
        "cn_def": "薄霧；水汽（名詞）；蒙上薄霧（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
