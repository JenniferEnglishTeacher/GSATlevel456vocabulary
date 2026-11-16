// Topic 11 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "from farm to table",
    "pos": "phr.",
    "cn_def": "從產地到餐桌",
    "en_def": "directly from where food is grown to where it is eaten",
    "sentence": "The restaurant follows the idea of {{BLANK}}, so the vegetables you eat at lunch were picked that morning.",
    "cn": "這家餐廳遵循從產地到餐桌的理念，所以你午餐吃到的蔬菜是當天早上才採收的。"
  },
  {
    "word": "put food on the table",
    "pos": "v.phr.",
    "cn_def": "養家糊口",
    "en_def": "to earn enough money to feed your family",
    "sentence": "My father works two jobs to {{BLANK}}, but he still finds time to help me with homework.",
    "cn": "我爸爸做兩份工作來養家糊口，但他仍會抽空幫我寫功課。"
  },
  {
    "word": "bring home the bacon",
    "pos": "v.phr.",
    "cn_def": "賺錢養家",
    "en_def": "to earn money to support a family",
    "sentence": "In my family, both of my parents {{BLANK}}, so we all share the housework at weekends.",
    "cn": "在我們家，爸媽兩個人都賺錢養家，所以週末我們全家一起分擔家事。"
  },
  {
    "word": "go to waste",
    "pos": "v.phr.",
    "cn_def": "被浪費",
    "en_def": "to be thrown away or not used",
    "sentence": "We packed the leftovers in boxes because we did not want the food to {{BLANK}}, and we ate it the next day.",
    "cn": "我們把剩菜裝進盒子裡，因為不想讓食物被浪費，而且我們隔天就把它吃掉了。"
  },
  {
    "word": "make hay while the sun shines",
    "pos": "v.phr.",
    "cn_def": "趁機行事；把握良機",
    "en_def": "to make the most of a good chance while it lasts",
    "sentence": "Mango prices are high this week, so the farmers are picking as fast as they can to {{BLANK}}.",
    "cn": "這週芒果價格很高，所以農民們盡可能快速採收，好把握良機。"
  },
  {
    "word": "reap what you sow",
    "pos": "v.phr.",
    "cn_def": "自食其果；種瓜得瓜",
    "en_def": "to experience the results of your own actions",
    "sentence": "He never studied during the term, so he {{BLANK}} when he failed the final exam.",
    "cn": "他整學期都沒讀書，所以期末考不及格時，他就自食其果了。"
  },
  {
    "word": "the cream of the crop",
    "pos": "n.phr.",
    "cn_def": "精英；佼佼者",
    "en_def": "the best people or things in a group",
    "sentence": "Only {{BLANK}} are chosen for the national cooking team, and they train for hours every day.",
    "cn": "只有佼佼者才會被選入國家烹飪隊，而且他們每天都要訓練好幾個小時。"
  },
  {
    "word": "in season",
    "pos": "adj.phr.",
    "cn_def": "當季的",
    "en_def": "(of fruit or vegetables) available and at their best now",
    "sentence": "Lychees are only {{BLANK}} for a few weeks in summer, so people buy boxes of them and send them to relatives.",
    "cn": "荔枝只在夏天的幾個星期是當季的，所以人們會一箱箱地買來寄給親戚。"
  },
  {
    "word": "out of season",
    "pos": "adj.phr.",
    "cn_def": "非當季的",
    "en_def": "(of fruit or vegetables) not naturally available at this time",
    "sentence": "Strawberries are expensive when they are {{BLANK}}, because they have to be flown in from other countries.",
    "cn": "草莓在非當季時很貴，因為它們必須從其他國家空運進口。"
  },
  {
    "word": "a bad apple",
    "pos": "n.phr.",
    "cn_def": "害群之馬",
    "en_def": "one bad person who has a bad effect on others",
    "sentence": "Most food sellers at the market are honest, but {{BLANK}} who sold fake honey has hurt everyone's reputation.",
    "cn": "市場裡大部分的攤販都很誠實，但一個賣假蜂蜜的害群之馬損害了大家的名聲。"
  },
  {
    "word": "bear fruit",
    "pos": "v.phr.",
    "cn_def": "開花結果；產生成果",
    "en_def": "to produce good results",
    "sentence": "The farmer's years of hard work finally {{BLANK}}, and his organic rice is now sold in top restaurants.",
    "cn": "這位農夫多年的努力終於開花結果，而他的有機米現在在頂級餐廳販售。"
  },
  {
    "word": "cut back on",
    "pos": "v.phr.",
    "cn_def": "減少（使用量）",
    "en_def": "to reduce the amount of something you use or eat",
    "sentence": "My doctor told me to {{BLANK}} salty snacks, so I now eat fruit when I feel hungry after school.",
    "cn": "醫生叫我減少吃鹹的零食，所以現在我放學後肚子餓時改吃水果。"
  },
  {
    "word": "eat out",
    "pos": "v.phr.",
    "cn_def": "外食；上館子",
    "en_def": "to have a meal in a restaurant rather than at home",
    "sentence": "Many people in Taipei {{BLANK}} almost every day because they work long hours, but cooking at home is usually healthier.",
    "cn": "許多台北人幾乎每天都外食，因為他們工時很長，但在家做飯通常比較健康。"
  },
  {
    "word": "food for thought",
    "pos": "n.phr.",
    "cn_def": "值得深思的事",
    "en_def": "an idea that makes you think seriously",
    "sentence": "The film about food waste gave us {{BLANK}}, and our class decided to start a leftovers campaign.",
    "cn": "那部關於食物浪費的電影給了我們值得深思的事，而我們班決定發起一項剩菜再利用活動。"
  },
  {
    "word": "have a sweet tooth",
    "pos": "v.phr.",
    "cn_def": "愛吃甜食",
    "en_def": "to like eating sweet food very much",
    "sentence": "My little sister {{BLANK}}, so my mother hides the chocolate on the top shelf.",
    "cn": "我妹妹很愛吃甜食，所以我媽媽把巧克力藏在最上層的架子上。"
  },
  {
    "word": "a piece of cake",
    "pos": "n.phr.",
    "cn_def": "小事一樁；易如反掌",
    "en_def": "something very easy to do",
    "sentence": "Making dumplings looked difficult at first, but after my grandmother showed me, it was {{BLANK}}.",
    "cn": "包水餃一開始看起來很難，但奶奶示範給我看之後，就變得易如反掌了。"
  },
  {
    "word": "cry over spilt milk",
    "pos": "v.phr.",
    "cn_def": "為無法挽回的事懊悔",
    "en_def": "to be upset about something that cannot be changed",
    "sentence": "The typhoon destroyed half the crop, but there is no point in {{BLANK}}, so the farmers started replanting.",
    "cn": "颱風摧毀了一半的作物，但為無法挽回的事懊悔也沒有用，所以農民們開始重新種植。"
  },
  {
    "word": "sell like hot cakes",
    "pos": "v.phr.",
    "cn_def": "大賣；搶手",
    "en_def": "to sell very quickly and in large numbers",
    "sentence": "The new pineapple cakes {{BLANK}} at the festival, and the bakery ran out before noon.",
    "cn": "新推出的鳳梨酥在節慶上大賣，而這家麵包店中午不到就賣光了。"
  },
  {
    "word": "put all one's eggs in one basket",
    "pos": "v.phr.",
    "cn_def": "孤注一擲",
    "en_def": "to depend on only one plan or thing",
    "sentence": "Farmers who grow only bananas {{BLANK}}, so one disease could ruin them.",
    "cn": "只種香蕉的農民等於孤注一擲，所以一種病害就可能讓他們破產。"
  },
  {
    "word": "bread and butter",
    "pos": "n.phr.",
    "cn_def": "主要收入來源；生計",
    "en_def": "the main way someone earns money",
    "sentence": "Rice is the {{BLANK}} of this village, but young farmers are also trying coffee and tea to earn more.",
    "cn": "稻米是這個村莊的主要收入來源，但年輕農民也在嘗試種咖啡和茶來賺更多錢。"
  }
];

const MCQS = [
  {
    "q": "The restaurant follows the idea of _____, so the vegetables you eat at lunch were picked that morning.",
    "options": [
      "serving size",
      "lab-grown meat",
      "edible insect",
      "from farm to table"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "My father works two jobs to _____, but he still finds time to help me with homework.",
    "options": [
      "put food on the table",
      "bring home the bacon",
      "make hay while the sun shines",
      "reap what you sow"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "In my family, both of my parents _____, so we all share the housework at weekends.",
    "options": [
      "cry over spilt milk",
      "bring home the bacon",
      "sell like hot cakes",
      "put all one's eggs in one basket"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "We packed the leftovers in boxes because we did not want the food to _____, and we ate it the next day.",
    "options": [
      "cut back on",
      "bear fruit",
      "go to waste",
      "put all one's eggs in one basket"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Mango prices are high this week, so the farmers are picking as fast as they can to _____.",
    "options": [
      "bring home the bacon",
      "eat out",
      "have a sweet tooth",
      "make hay while the sun shines"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "He never studied during the term, so he _____ when he failed the final exam.",
    "options": [
      "cut back on",
      "reap what you sow",
      "put food on the table",
      "make hay while the sun shines"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Only _____ are chosen for the national cooking team, and they train for hours every day.",
    "options": [
      "food shortage",
      "food supply",
      "the cream of the crop",
      "bumper crop"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Lychees are only _____ for a few weeks in summer, so people buy boxes of them and send them to relatives.",
    "options": [
      "in season",
      "animal welfare",
      "out of season",
      "rice paddy"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Strawberries are expensive when they are _____, because they have to be flown in from other countries.",
    "options": [
      "food supply",
      "out of season",
      "drip irrigation",
      "serving size"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Most food sellers at the market are honest, but _____ who sold fake honey has hurt everyone's reputation.",
    "options": [
      "food aid",
      "cold storage",
      "a bad apple",
      "serving size"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The farmer's years of hard work finally _____, and his organic rice is now sold in top restaurants.",
    "options": [
      "bear fruit",
      "put all one's eggs in one basket",
      "put food on the table",
      "sell like hot cakes"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "My doctor told me to _____ salty snacks, so I now eat fruit when I feel hungry after school.",
    "options": [
      "have a sweet tooth",
      "sell like hot cakes",
      "cry over spilt milk",
      "cut back on"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many people in Taipei _____ almost every day because they work long hours, but cooking at home is usually healthier.",
    "options": [
      "cut back on",
      "put food on the table",
      "eat out",
      "cry over spilt milk"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The film about food waste gave us _____, and our class decided to start a leftovers campaign.",
    "options": [
      "food for thought",
      "food delivery app",
      "bumper crop",
      "lab-grown meat"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "My little sister _____, so my mother hides the chocolate on the top shelf.",
    "options": [
      "go to waste",
      "have a sweet tooth",
      "eat out",
      "make hay while the sun shines"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Making dumplings looked difficult at first, but after my grandmother showed me, it was _____.",
    "options": [
      "food inspector",
      "factory farming",
      "alternative protein",
      "a piece of cake"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The typhoon destroyed half the crop, but there is no point in _____, so the farmers started replanting.",
    "options": [
      "put all one's eggs in one basket",
      "bear fruit",
      "cry over spilt milk",
      "eat out"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The new pineapple cakes _____ at the festival, and the bakery ran out before noon.",
    "options": [
      "put food on the table",
      "make hay while the sun shines",
      "go to waste",
      "sell like hot cakes"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Farmers who grow only bananas _____, so one disease could ruin them.",
    "options": [
      "eat out",
      "put all one's eggs in one basket",
      "sell like hot cakes",
      "bear fruit"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Rice is the _____ of this village, but young farmers are also trying coffee and tea to earn more.",
    "options": [
      "bread and butter",
      "doggy bag",
      "food safety",
      "food technology"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "from farm to table": {
    "pos": "phr.",
    "en_def": "directly from where food is grown to where it is eaten",
    "cn_def": "從產地到餐桌"
  },
  "put food on the table": {
    "pos": "v.phr.",
    "en_def": "to earn enough money to feed your family",
    "cn_def": "養家糊口"
  },
  "bring home the bacon": {
    "pos": "v.phr.",
    "en_def": "to earn money to support a family",
    "cn_def": "賺錢養家"
  },
  "go to waste": {
    "pos": "v.phr.",
    "en_def": "to be thrown away or not used",
    "cn_def": "被浪費"
  },
  "make hay while the sun shines": {
    "pos": "v.phr.",
    "en_def": "to make the most of a good chance while it lasts",
    "cn_def": "趁機行事；把握良機"
  },
  "reap what you sow": {
    "pos": "v.phr.",
    "en_def": "to experience the results of your own actions",
    "cn_def": "自食其果；種瓜得瓜"
  },
  "the cream of the crop": {
    "pos": "n.phr.",
    "en_def": "the best people or things in a group",
    "cn_def": "精英；佼佼者"
  },
  "in season": {
    "pos": "adj.phr.",
    "en_def": "(of fruit or vegetables) available and at their best now",
    "cn_def": "當季的"
  },
  "out of season": {
    "pos": "adj.phr.",
    "en_def": "(of fruit or vegetables) not naturally available at this time",
    "cn_def": "非當季的"
  },
  "a bad apple": {
    "pos": "n.phr.",
    "en_def": "one bad person who has a bad effect on others",
    "cn_def": "害群之馬"
  },
  "bear fruit": {
    "pos": "v.phr.",
    "en_def": "to produce good results",
    "cn_def": "開花結果；產生成果"
  },
  "cut back on": {
    "pos": "v.phr.",
    "en_def": "to reduce the amount of something you use or eat",
    "cn_def": "減少（使用量）"
  },
  "eat out": {
    "pos": "v.phr.",
    "en_def": "to have a meal in a restaurant rather than at home",
    "cn_def": "外食；上館子"
  },
  "food for thought": {
    "pos": "n.phr.",
    "en_def": "an idea that makes you think seriously",
    "cn_def": "值得深思的事"
  },
  "have a sweet tooth": {
    "pos": "v.phr.",
    "en_def": "to like eating sweet food very much",
    "cn_def": "愛吃甜食"
  },
  "a piece of cake": {
    "pos": "n.phr.",
    "en_def": "something very easy to do",
    "cn_def": "小事一樁；易如反掌"
  },
  "cry over spilt milk": {
    "pos": "v.phr.",
    "en_def": "to be upset about something that cannot be changed",
    "cn_def": "為無法挽回的事懊悔"
  },
  "sell like hot cakes": {
    "pos": "v.phr.",
    "en_def": "to sell very quickly and in large numbers",
    "cn_def": "大賣；搶手"
  },
  "put all one's eggs in one basket": {
    "pos": "v.phr.",
    "en_def": "to depend on only one plan or thing",
    "cn_def": "孤注一擲"
  },
  "bread and butter": {
    "pos": "n.phr.",
    "en_def": "the main way someone earns money",
    "cn_def": "主要收入來源；生計"
  },
  "serving size": {
    "pos": "n.",
    "en_def": "the amount of food that counts as one portion on a label",
    "cn_def": "每份份量"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
  },
  "edible insect": {
    "pos": "n.",
    "en_def": "an insect that is safe for people to eat",
    "cn_def": "可食用昆蟲"
  },
  "food shortage": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough food",
    "cn_def": "糧食短缺"
  },
  "food supply": {
    "pos": "n.",
    "en_def": "the amount of food available to a population",
    "cn_def": "糧食供應"
  },
  "bumper crop": {
    "pos": "n.",
    "en_def": "an unusually large harvest",
    "cn_def": "大豐收"
  },
  "animal welfare": {
    "pos": "n.",
    "en_def": "the health and comfort of animals",
    "cn_def": "動物福利"
  },
  "rice paddy": {
    "pos": "n.",
    "en_def": "a flooded field where rice is grown",
    "cn_def": "稻田"
  },
  "drip irrigation": {
    "pos": "n.",
    "en_def": "watering plants slowly through small tubes near their roots",
    "cn_def": "滴灌"
  },
  "food aid": {
    "pos": "n.",
    "en_def": "food given to countries or people in need",
    "cn_def": "糧食援助"
  },
  "cold storage": {
    "pos": "n.",
    "en_def": "keeping food in a cold place so it stays fresh",
    "cn_def": "冷藏庫；冷藏儲存"
  },
  "food delivery app": {
    "pos": "n.",
    "en_def": "a phone app used to order meals to your home",
    "cn_def": "外送應用程式"
  },
  "food inspector": {
    "pos": "n.",
    "en_def": "an official who checks that food and restaurants are safe",
    "cn_def": "食品稽查員"
  },
  "factory farming": {
    "pos": "n.",
    "en_def": "keeping large numbers of animals indoors to produce cheap food",
    "cn_def": "工廠化養殖"
  },
  "alternative protein": {
    "pos": "n.",
    "en_def": "a source of protein other than traditional meat",
    "cn_def": "替代蛋白質"
  },
  "doggy bag": {
    "pos": "n.",
    "en_def": "a bag or box for taking home food you did not finish at a restaurant",
    "cn_def": "打包袋（剩菜外帶）"
  },
  "food safety": {
    "pos": "n.",
    "en_def": "keeping food free from things that can make people ill",
    "cn_def": "食品安全"
  },
  "food technology": {
    "pos": "n.",
    "en_def": "the science of making, storing and improving food",
    "cn_def": "食品科技"
  }
};

const EXTRA_GLOSSES = {};
