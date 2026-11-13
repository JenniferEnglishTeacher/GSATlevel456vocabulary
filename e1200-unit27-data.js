// Unit 27 Quiz Data: Pronouns & Reflexives 代名詞（第28區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U27 - Pronouns & Reflexives",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "I (mine)",
    "pos": "pron.",
    "cn_def": "我",
    "en_def": "the person who is speaking (\"mine\" = the one that belongs to me)",
    "sentence": "Q: Whose pencil case is this? Is it yours, Ben? — A: Yes, it's {{BLANK}}. Thank you.",
    "cn": "這是誰的鉛筆盒？班，是你的嗎？ — 是的，是我的。謝謝你。"
  },
  {
    "word": "she (hers)",
    "pos": "pron.",
    "cn_def": "她",
    "en_def": "that woman or girl (\"hers\" = the one that belongs to her)",
    "sentence": "Q: Is this pink umbrella Amy's? — A: Yes, it's {{BLANK}}. She uses it every day.",
    "cn": "這把粉紅色的雨傘是艾美的嗎？ — 是的，是她的。她每天都用它。"
  },
  {
    "word": "we (ours)",
    "pos": "pron.",
    "cn_def": "我們",
    "en_def": "I and one or more other people (\"ours\" = the one that belongs to us)",
    "sentence": "Q: Do you and your brother share this room? — A: Yes, we do. This room is {{BLANK}}.",
    "cn": "你和你弟弟共用這個房間嗎？ — 是的。這個房間是我們的。"
  },
  {
    "word": "he (him)",
    "pos": "pron.",
    "cn_def": "他",
    "en_def": "that man or boy (\"him\" is used after a verb or \"with, to, for\")",
    "sentence": "Q: Does Tom play basketball with you? — A: Yes, he does. I play with {{BLANK}} every day.",
    "cn": "湯姆跟你一起打籃球嗎？ — 是的，他會。我每天都跟他打。"
  },
  {
    "word": "they (them)",
    "pos": "pron.",
    "cn_def": "他們",
    "en_def": "those people or things (\"them\" is used after a verb or \"with, to, for\")",
    "sentence": "Q: Do you like your new classmates? — A: Yes, I do. I often help {{BLANK}} with math.",
    "cn": "你喜歡你的新同學嗎？ — 是的，我喜歡。我常常教他們數學。"
  },
  {
    "word": "you (yourself)",
    "pos": "pron.",
    "cn_def": "你（們）",
    "en_def": "the person I am talking to (\"yourself\" = you and no one else)",
    "sentence": "Q: Can I have some cookies, Grandma? — A: Sure. Help {{BLANK}}, dear.",
    "cn": "奶奶，我可以吃一些餅乾嗎？ — 當然可以，親愛的，自己拿吧（別客氣）。"
  },
  {
    "word": "it (itself)",
    "pos": "pron.",
    "cn_def": "它；牠",
    "en_def": "that thing or animal (\"itself\" = it and nothing else)",
    "sentence": "Q: Does your robot clean the floor by {{BLANK}}? — A: Yes, it does. It cleans the floor every day.",
    "cn": "你的機器人會自己掃地嗎？ — 是的，它會。它每天都掃地。"
  },
  {
    "word": "someone (somebody)",
    "pos": "pron.",
    "cn_def": "某人",
    "en_def": "a person, but we do not know or say who",
    "sentence": "Q: Who is at the door? — A: I don't know. {{BLANK}} is knocking on the door.",
    "cn": "誰在門口？ — 我不知道，有人在敲門。",
    "alts": [
      "somebody"
    ]
  },
  {
    "word": "anyone (anybody)",
    "pos": "pron.",
    "cn_def": "任何人",
    "en_def": "any person; it does not matter who",
    "sentence": "Q: Does {{BLANK}} in your class have a dictionary? — A: Yes, Amy does. She always brings it to school.",
    "cn": "你們班上有任何人有字典嗎？ — 有，艾美有。她總是帶到學校。",
    "alts": [
      "anybody"
    ]
  },
  {
    "word": "everyone (everybody)",
    "pos": "pron.",
    "cn_def": "每一個人",
    "en_def": "all the people",
    "sentence": "Q: Is {{BLANK}} here today? — A: No. Tom is sick. He is at home.",
    "cn": "今天每個人都到了嗎？ — 沒有，湯姆生病了，他在家。",
    "alts": [
      "everybody"
    ]
  },
  {
    "word": "nobody",
    "pos": "pron.",
    "cn_def": "沒有人",
    "en_def": "no person; not anyone",
    "sentence": "Q: Who is in the classroom now? — A: {{BLANK}} is in it. Everyone is on the playground.",
    "cn": "現在誰在教室裡？ — 沒有人在裡面，大家都在操場上。"
  },
  {
    "word": "something",
    "pos": "pron.",
    "cn_def": "某事；某物",
    "en_def": "a thing, but we do not know or say what",
    "sentence": "Q: Do you want {{BLANK}} to drink? — A: Yes, please. I'd like some juice.",
    "cn": "你想要喝點什麼嗎？ — 好，麻煩你。我想要一些果汁。"
  },
  {
    "word": "anything",
    "pos": "pron.",
    "cn_def": "任何事物",
    "en_def": "any thing; it does not matter what",
    "sentence": "Q: Does your brother need {{BLANK}} from the store? — A: Yes, he does. He needs some milk.",
    "cn": "你哥哥需要從商店買任何東西嗎？ — 是的，他需要。他需要一些牛奶。"
  },
  {
    "word": "everything",
    "pos": "pron.",
    "cn_def": "每件事；一切",
    "en_def": "all things",
    "sentence": "Q: Do you have {{BLANK}} for the picnic? — A: Yes, we do. We have food, water, and a big blanket.",
    "cn": "野餐的東西你們全都準備好了嗎？ — 是的，都好了。我們有食物、水和一條大毯子。"
  },
  {
    "word": "nothing",
    "pos": "pron.",
    "cn_def": "沒東西；沒事",
    "en_def": "not anything; no thing",
    "sentence": "Q: What does Ben have in his pocket? — A: He has {{BLANK}}. He doesn't have any money.",
    "cn": "班的口袋裡有什麼？ — 他什麼都沒有。他沒有任何錢。"
  },
  {
    "word": "all",
    "pos": "pron.",
    "cn_def": "全部",
    "en_def": "every one of a group",
    "sentence": "Q: Do your classmates like PE? — A: Yes, {{BLANK}} of them like it. They love sports.",
    "cn": "你的同學們喜歡體育課嗎？ — 是的，他們全部都喜歡。他們熱愛運動。"
  },
  {
    "word": "both",
    "pos": "pron.",
    "cn_def": "兩者都",
    "en_def": "the two of them",
    "sentence": "Q: Do your parents speak English? — A: Yes, {{BLANK}} of them speak English.",
    "cn": "你的父母會說英文嗎？ — 會，他們兩個都會說英文。"
  },
  {
    "word": "each",
    "pos": "det.",
    "cn_def": "每一（個）",
    "en_def": "every one of two or more, one by one",
    "sentence": "Q: Does the teacher give the students a book? — A: Yes, she does. {{BLANK}} student has a new book.",
    "cn": "老師有發書給學生們嗎？ — 有，她有。每個學生都有一本新書。"
  },
  {
    "word": "most",
    "pos": "pron.",
    "cn_def": "大部分（的人／物）",
    "en_def": "almost all of a group",
    "sentence": "Q: Do your friends walk to school? — A: {{BLANK}} of them walk to school, but Tom rides his bike.",
    "cn": "你的朋友們走路上學嗎？ — 他們大部分走路上學，但湯姆騎腳踏車。"
  },
  {
    "word": "many",
    "pos": "pron.",
    "cn_def": "許多（人／物）",
    "en_def": "a large number of people or things",
    "sentence": "Q: Does your sister have friends at her new school? — A: Yes, she does. {{BLANK}} of her classmates are nice to her.",
    "cn": "你妹妹在新學校有朋友嗎？ — 有，她有。她的很多同學都對她很好。"
  },
  {
    "word": "some",
    "pos": "pron.",
    "cn_def": "一些",
    "en_def": "a few, or a small amount; not all",
    "sentence": "Q: I have many candies. Do you want {{BLANK}}? — A: Yes, please. Thank you.",
    "cn": "我有很多糖果，你想要一些嗎？ — 好，麻煩你。謝謝你。"
  },
  {
    "word": "any",
    "pos": "det.",
    "cn_def": "任何的",
    "en_def": "one or some, no matter which; used in questions and with \"not\"",
    "sentence": "Q: Does your sister have {{BLANK}} pets? — A: No, she doesn't. She is scared of animals.",
    "cn": "你妹妹有養任何寵物嗎？ — 沒有，她沒有。她怕動物。"
  },
  {
    "word": "another",
    "pos": "det.",
    "cn_def": "再一個；另一個",
    "en_def": "one more; a different one",
    "sentence": "Q: This cake is yummy. Can I have {{BLANK}} piece? — A: Sure. Here you are.",
    "cn": "這蛋糕好好吃，我可以再吃一塊嗎？ — 當然，給你。"
  },
  {
    "word": "other",
    "pos": "pron.",
    "cn_def": "其他的（人／物）",
    "en_def": "the second of two; the ones that are left",
    "sentence": "Q: What does Lisa have in her hands? — A: She has an apple in one hand and a banana in the {{BLANK}}.",
    "cn": "麗莎手上拿著什麼？ — 她一隻手拿著蘋果，另一隻手拿著香蕉。"
  },
  {
    "word": "part",
    "pos": "n.",
    "cn_def": "部分",
    "en_def": "one piece of something; not all of it",
    "sentence": "Q: What {{BLANK}} of the movie do you like? — A: I like the end. It is very funny.",
    "cn": "你喜歡這部電影的哪個部分？ — 我喜歡結尾，它非常好笑。"
  }
];

const MCQS = [
  {
    "q": "Q: Whose pencil case is this? Is it yours, Ben? — A: Yes, it's ______. Thank you.【我的（東西）】",
    "options": [
      "him",
      "mine",
      "some",
      "all"
    ],
    "answer": 1,
    "cn": "這是誰的鉛筆盒？班，是你的嗎？ — 是的，是我的。謝謝你。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Is this pink umbrella Amy's? — A: Yes, it's ______. She uses it every day.【她的（東西）】",
    "options": [
      "ours",
      "some",
      "hers",
      "both"
    ],
    "answer": 2,
    "cn": "這把粉紅色的雨傘是艾美的嗎？ — 是的，是她的。她每天都用它。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Do you and your brother share this room? — A: Yes, we do. This room is ______.【我們的（東西）】",
    "options": [
      "hers",
      "yourself",
      "him",
      "ours"
    ],
    "answer": 3,
    "cn": "你和你弟弟共用這個房間嗎？ — 是的。這個房間是我們的。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Does Tom play basketball with you? — A: Yes, he does. I play with ______ every day.【他（受詞）】",
    "options": [
      "him",
      "yourself",
      "someone",
      "itself"
    ],
    "answer": 0,
    "cn": "湯姆跟你一起打籃球嗎？ — 是的，他會。我每天都跟他打。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Do you like your new classmates? — A: Yes, I do. I often help ______ with math.【他們（受詞）】",
    "options": [
      "him",
      "them",
      "someone",
      "all"
    ],
    "answer": 1,
    "cn": "你喜歡你的新同學嗎？ — 是的，我喜歡。我常常教他們數學。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Can I have some cookies, Grandma? — A: Sure. Help ______, dear.【你自己】",
    "options": [
      "everyone",
      "many",
      "all",
      "yourself"
    ],
    "answer": 3,
    "cn": "奶奶，我可以吃一些餅乾嗎？ — 當然可以，親愛的，自己拿吧（別客氣）。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Does your robot clean the floor by ______? — A: Yes, it does. It cleans the floor every day.【它自己】",
    "options": [
      "nobody",
      "most",
      "itself",
      "all"
    ],
    "answer": 2,
    "cn": "你的機器人會自己掃地嗎？ — 是的，它會。它每天都掃地。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Who is at the door? — A: I don't know. ______ is knocking on the door.【某人】",
    "options": [
      "Someone",
      "Nobody",
      "Itself",
      "Mine"
    ],
    "answer": 0,
    "cn": "誰在門口？ — 我不知道，有人在敲門。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Does ______ in your class have a dictionary? — A: Yes, Amy does. She always brings it to school.【任何人】",
    "options": [
      "him",
      "anyone",
      "both",
      "yourself"
    ],
    "answer": 1,
    "cn": "你們班上有任何人有字典嗎？ — 有，艾美有。她總是帶到學校。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Is ______ here today? — A: No. Tom is sick. He is at home.【每一個人】",
    "options": [
      "nobody",
      "most",
      "itself",
      "everyone"
    ],
    "answer": 3,
    "cn": "今天每個人都到了嗎？ — 沒有，湯姆生病了，他在家。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Who is in the classroom now? — A: ______ is in it. Everyone is on the playground.【沒有人】",
    "options": [
      "Many",
      "Some",
      "Nobody",
      "Him"
    ],
    "answer": 2,
    "cn": "現在誰在教室裡？ — 沒有人在裡面，大家都在操場上。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Do you want ______ to drink? — A: Yes, please. I'd like some juice.【某事；某物】",
    "options": [
      "something",
      "anything",
      "everything",
      "nothing"
    ],
    "answer": 0,
    "cn": "你想要喝點什麼嗎？ — 好，麻煩你。我想要一些果汁。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Does your brother need ______ from the store? — A: Yes, he does. He needs some milk.【任何事物】",
    "options": [
      "everything",
      "something",
      "nothing",
      "anything"
    ],
    "answer": 3,
    "cn": "你哥哥需要從商店買任何東西嗎？ — 是的，他需要。他需要一些牛奶。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Do you have ______ for the picnic? — A: Yes, we do. We have food, water, and a big blanket.【每件事；一切】",
    "options": [
      "something",
      "everything",
      "nothing",
      "anything"
    ],
    "answer": 1,
    "cn": "野餐的東西你們全都準備好了嗎？ — 是的，都好了。我們有食物、水和一條大毯子。",
    "vocabIndex": 13
  },
  {
    "q": "Q: What does Ben have in his pocket? — A: He has ______. He doesn't have any money.【沒東西；沒事】",
    "options": [
      "anything",
      "everything",
      "nothing",
      "something"
    ],
    "answer": 2,
    "cn": "班的口袋裡有什麼？ — 他什麼都沒有。他沒有任何錢。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Do your classmates like PE? — A: Yes, ______ of them like it. They love sports.【全部】",
    "options": [
      "all",
      "mine",
      "some",
      "other"
    ],
    "answer": 0,
    "cn": "你的同學們喜歡體育課嗎？ — 是的，他們全部都喜歡。他們熱愛運動。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Do your parents speak English? — A: Yes, ______ of them speak English.【兩者都】",
    "options": [
      "him",
      "other",
      "itself",
      "both"
    ],
    "answer": 3,
    "cn": "你的父母會說英文嗎？ — 會，他們兩個都會說英文。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Does the teacher give the students a book? — A: Yes, she does. ______ student has a new book.【每一（個）】",
    "options": [
      "Each",
      "Another",
      "Any",
      "That"
    ],
    "answer": 0,
    "cn": "老師有發書給學生們嗎？ — 有，她有。每個學生都有一本新書。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Do your friends walk to school? — A: ______ of them walk to school, but Tom rides his bike.【大部分（的人／物）】",
    "options": [
      "All",
      "Most",
      "Anyone",
      "Many"
    ],
    "answer": 1,
    "cn": "你的朋友們走路上學嗎？ — 他們大部分走路上學，但湯姆騎腳踏車。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Does your sister have friends at her new school? — A: Yes, she does. ______ of her classmates are nice to her.【許多（人／物）】",
    "options": [
      "Yourself",
      "Some",
      "Many",
      "Anyone"
    ],
    "answer": 2,
    "cn": "你妹妹在新學校有朋友嗎？ — 有，她有。她的很多同學都對她很好。",
    "vocabIndex": 19
  },
  {
    "q": "Q: I have many candies. Do you want ______? — A: Yes, please. Thank you.【一些】",
    "options": [
      "nobody",
      "some",
      "many",
      "itself"
    ],
    "answer": 1,
    "cn": "我有很多糖果，你想要一些嗎？ — 好，麻煩你。謝謝你。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Does your sister have ______ pets? — A: No, she doesn't. She is scared of animals.【任何的】",
    "options": [
      "any",
      "another",
      "each",
      "every"
    ],
    "answer": 0,
    "cn": "你妹妹有養任何寵物嗎？ — 沒有，她沒有。她怕動物。",
    "vocabIndex": 21
  },
  {
    "q": "Q: This cake is yummy. Can I have ______ piece? — A: Sure. Here you are.【再一個；另一個】",
    "options": [
      "any",
      "each",
      "another",
      "their"
    ],
    "answer": 2,
    "cn": "這蛋糕好好吃，我可以再吃一塊嗎？ — 當然，給你。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What does Lisa have in her hands? — A: She has an apple in one hand and a banana in the ______.【其他的（人／物）】",
    "options": [
      "itself",
      "nobody",
      "everyone",
      "other"
    ],
    "answer": 3,
    "cn": "麗莎手上拿著什麼？ — 她一隻手拿著蘋果，另一隻手拿著香蕉。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What ______ of the movie do you like? — A: I like the end. It is very funny.【部分】",
    "options": [
      "market",
      "half",
      "part",
      "mouth"
    ],
    "answer": 2,
    "cn": "你喜歡這部電影的哪個部分？ — 我喜歡結尾，它非常好笑。",
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "mouth": {
    "pos": "n.",
    "en_def": "the part of your face that you eat and speak with",
    "cn_def": "嘴巴"
  },
  "many": {
    "pos": "adj.",
    "en_def": "a large number of (things you can count)",
    "cn_def": "許多的（可數）"
  },
  "some": {
    "pos": "adj.",
    "en_def": "a number or amount of something, not all",
    "cn_def": "一些"
  },
  "any": {
    "pos": "adj.",
    "en_def": "one or some, no matter which; used in questions and with \"not\"",
    "cn_def": "任何的"
  },
  "all": {
    "pos": "pron.",
    "en_def": "every one; the whole of something",
    "cn_def": "全部；都"
  },
  "both": {
    "pos": "pron.",
    "en_def": "the two; one and also the other",
    "cn_def": "兩者都"
  },
  "half": {
    "pos": "n.",
    "en_def": "one of two same-sized parts; thirty minutes",
    "cn_def": "一半；半小時"
  },
  "market": {
    "pos": "n.",
    "en_def": "a place where people buy and sell food and other things",
    "cn_def": "市場"
  },
  "that": {
    "pos": "det.",
    "en_def": "the one that is there, not near me",
    "cn_def": "那個"
  },
  "their": {
    "pos": "det.",
    "en_def": "belonging to them",
    "cn_def": "他們的"
  },
  "every": {
    "pos": "det.",
    "en_def": "each one of a group; all",
    "cn_def": "每一（個）的"
  },
  "mine": {
    "pos": "pron.",
    "en_def": "the person who is speaking (\"mine\" = the one that belongs to me)",
    "cn_def": "我"
  },
  "hers": {
    "pos": "pron.",
    "en_def": "that woman or girl (\"hers\" = the one that belongs to her)",
    "cn_def": "她"
  },
  "ours": {
    "pos": "pron.",
    "en_def": "I and one or more other people (\"ours\" = the one that belongs to us)",
    "cn_def": "我們"
  },
  "him": {
    "pos": "pron.",
    "en_def": "that man or boy (\"him\" is used after a verb or \"with, to, for\")",
    "cn_def": "他"
  },
  "them": {
    "pos": "pron.",
    "en_def": "those people or things (\"them\" is used after a verb or \"with, to, for\")",
    "cn_def": "他們"
  },
  "yourself": {
    "pos": "pron.",
    "en_def": "the person I am talking to (\"yourself\" = you and no one else)",
    "cn_def": "你（們）"
  },
  "itself": {
    "pos": "pron.",
    "en_def": "that thing or animal (\"itself\" = it and nothing else)",
    "cn_def": "它；牠"
  },
  "someone": {
    "pos": "pron.",
    "en_def": "a person, but we do not know or say who",
    "cn_def": "某人"
  },
  "anyone": {
    "pos": "pron.",
    "en_def": "any person; it does not matter who",
    "cn_def": "任何人"
  },
  "everyone": {
    "pos": "pron.",
    "en_def": "all the people",
    "cn_def": "每一個人"
  },
  "nobody": {
    "pos": "pron.",
    "en_def": "no person; not anyone",
    "cn_def": "沒有人"
  },
  "something": {
    "pos": "pron.",
    "en_def": "a thing, but we do not know or say what",
    "cn_def": "某事；某物"
  },
  "anything": {
    "pos": "pron.",
    "en_def": "any thing; it does not matter what",
    "cn_def": "任何事物"
  },
  "everything": {
    "pos": "pron.",
    "en_def": "all things",
    "cn_def": "每件事；一切"
  },
  "nothing": {
    "pos": "pron.",
    "en_def": "not anything; no thing",
    "cn_def": "沒東西；沒事"
  },
  "each": {
    "pos": "det.",
    "en_def": "every one of two or more, one by one",
    "cn_def": "每一（個）"
  },
  "most": {
    "pos": "pron.",
    "en_def": "almost all of a group",
    "cn_def": "大部分（的人／物）"
  },
  "another": {
    "pos": "det.",
    "en_def": "one more; a different one",
    "cn_def": "再一個；另一個"
  },
  "other": {
    "pos": "pron.",
    "en_def": "the second of two; the ones that are left",
    "cn_def": "其他的（人／物）"
  },
  "part": {
    "pos": "n.",
    "en_def": "one piece of something; not all of it",
    "cn_def": "部分"
  }
};

const EXTRA_GLOSSES = {};
