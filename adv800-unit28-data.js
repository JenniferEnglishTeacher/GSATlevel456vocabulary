// Unit 28 Quiz Data: promise – rectangle
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U28 - promise – rectangle",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "promise",
    "pos": "n.",
    "cn_def": "承諾，保證",
    "en_def": "words that say you will surely do something",
    "sentence": "She made a {{BLANK}} to help him.",
    "cn": "她承諾幫助他。"
  },
  {
    "word": "pronounce",
    "pos": "v.",
    "cn_def": "發音，宣佈",
    "en_def": "to make the sound of a word or letter",
    "sentence": "Can you {{BLANK}} this word correctly?",
    "cn": "你能正確發音這個詞嗎？"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護，防護",
    "en_def": "to keep someone or something safe",
    "sentence": "The laws are designed to {{BLANK}} the environment.",
    "cn": "法律旨在保護環境。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供，供給",
    "en_def": "to give someone what they need",
    "sentence": "The school will {{BLANK}} all the necessary materials.",
    "cn": "學校將提供所有必要的材料。"
  },
  {
    "word": "pump",
    "pos": "n.",
    "cn_def": "泵，打氣筒",
    "en_def": "a machine that moves water, air, or gas",
    "sentence": "The water {{BLANK}} is broken.",
    "cn": "水泵壞了。"
  },
  {
    "word": "punish",
    "pos": "v.",
    "cn_def": "懲罰，處罰",
    "en_def": "to make someone suffer because they did something wrong",
    "sentence": "He was {{BLANK}} for breaking the rules.",
    "cn": "他因違反規定而受到懲罰。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的，意圖",
    "en_def": "the reason for doing something",
    "sentence": "The main {{BLANK}} of the meeting is to discuss the budget.",
    "cn": "會議的主要目的是討論預算。"
  },
  {
    "word": "purse",
    "pos": "n.",
    "cn_def": "錢包，手提包",
    "en_def": "a small bag in which a woman carries money and keys",
    "sentence": "She keeps her keys in her {{BLANK}}.",
    "cn": "她把鑰匙放在手提包裡。"
  },
  {
    "word": "puzzle",
    "pos": "n.",
    "cn_def": "拼圖，謎題",
    "en_def": "a game or question that is hard to work out",
    "sentence": "They enjoyed solving the {{BLANK}}.",
    "cn": "他們喜歡解謎題。"
  },
  {
    "word": "quit",
    "pos": "v.",
    "cn_def": "辭職，放棄",
    "en_def": "to leave a job or stop doing something",
    "sentence": "He decided to {{BLANK}} his job.",
    "cn": "他決定辭職。"
  },
  {
    "word": "railroad",
    "pos": "n.",
    "cn_def": "鐵路",
    "en_def": "the metal tracks that trains run on",
    "sentence": "The train travels along the {{BLANK}}.",
    "cn": "火車沿著鐵路行駛。"
  },
  {
    "word": "railway",
    "pos": "n.",
    "cn_def": "鐵路，鐵道",
    "en_def": "the metal tracks that trains run on",
    "sentence": "They built a new {{BLANK}}.",
    "cn": "他們建造了一條新鐵路。"
  },
  {
    "word": "raincoat",
    "pos": "n.",
    "cn_def": "雨衣",
    "en_def": "a coat that keeps you dry in the rain",
    "sentence": "She wore a {{BLANK}} because it was raining.",
    "cn": "因為下雨，她穿了一件雨衣。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的，罕見的",
    "en_def": "not seen or found very often",
    "sentence": "This species of bird is very {{BLANK}}.",
    "cn": "這種鳥類非常罕見。"
  },
  {
    "word": "rather",
    "pos": "adv.",
    "cn_def": "寧願，倒不如說",
    "en_def": "more willingly (used with \"would\")",
    "sentence": "I would {{BLANK}} stay home than go out.",
    "cn": "我寧願待在家裡也不願出去。"
  },
  {
    "word": "realize",
    "pos": "v.",
    "cn_def": "意識到，實現",
    "en_def": "to suddenly know or understand something",
    "sentence": "She didn't {{BLANK}} the danger she was in.",
    "cn": "她沒有意識到自己所處的危險。"
  },
  {
    "word": "receive",
    "pos": "v.",
    "cn_def": "收到，接受",
    "en_def": "to get something that someone gives or sends you",
    "sentence": "She {{BLANK}} a gift from her friend.",
    "cn": "她收到了一份來自朋友的禮物。"
  },
  {
    "word": "record",
    "pos": "n.",
    "cn_def": "記錄，唱片",
    "en_def": "written information that is kept so people can look at it later",
    "sentence": "She keeps a {{BLANK}} of all her expenses.",
    "cn": "她記錄所有的開支。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "恢復，痊癒",
    "en_def": "to get well again after being sick",
    "sentence": "He is expected to {{BLANK}} from his illness soon.",
    "cn": "他預計很快會從疾病中康復。"
  },
  {
    "word": "rectangle",
    "pos": "n.",
    "cn_def": "長方形",
    "en_def": "a shape with four straight sides, two long and two short",
    "sentence": "She drew a {{BLANK}} on the paper.",
    "cn": "她在紙上畫了一個長方形。"
  }
];

const MCQS = [
  {
    "q": "I made a ______ to my mom that I would come home before ten. I must keep it.",
    "options": [
      "pump",
      "purse",
      "promise",
      "puzzle"
    ],
    "answer": 2,
    "cn": "她承諾幫助他。",
    "vocabIndex": 0
  },
  {
    "q": "How do you ______ this word? I can't say it correctly.",
    "options": [
      "protect",
      "pronounce",
      "provide",
      "punish"
    ],
    "answer": 1,
    "cn": "你能正確發音這個詞嗎？",
    "vocabIndex": 1
  },
  {
    "q": "Wear a hat to ______ your head from the strong sun.",
    "options": [
      "pronounce",
      "provide",
      "quit",
      "protect"
    ],
    "answer": 3,
    "cn": "法律旨在保護環境。",
    "vocabIndex": 2
  },
  {
    "q": "The school will ______ lunch for all the students on the trip. They don't need to bring food.",
    "options": [
      "provide",
      "protect",
      "pronounce",
      "punish"
    ],
    "answer": 0,
    "cn": "學校將提供所有必要的材料。",
    "vocabIndex": 3
  },
  {
    "q": "My bike tires are flat. I need a ______ to put air into them.",
    "options": [
      "purse",
      "puzzle",
      "promise",
      "pump"
    ],
    "answer": 3,
    "cn": "水泵壞了。",
    "vocabIndex": 4
  },
  {
    "q": "The teacher ______ Tom for cheating on the test. He had to stay after school for a week.",
    "options": [
      "protected",
      "punished",
      "provided",
      "pronounced"
    ],
    "answer": 1,
    "cn": "他因違反規定而受到懲罰。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ of this meeting is to plan the school trip. That is why we are all here.",
    "options": [
      "purpose",
      "purse",
      "pump",
      "puzzle"
    ],
    "answer": 0,
    "cn": "會議的主要目的是討論預算。",
    "vocabIndex": 6
  },
  {
    "q": "She took some money out of her ______ and paid for the dress.",
    "options": [
      "pump",
      "puzzle",
      "purse",
      "promise"
    ],
    "answer": 2,
    "cn": "她把鑰匙放在手提包裡。",
    "vocabIndex": 7
  },
  {
    "q": "This ______ has one thousand pieces. It took me three days to put them all together.",
    "options": [
      "purse",
      "puzzle",
      "pump",
      "promise"
    ],
    "answer": 1,
    "cn": "他們喜歡解謎題。",
    "vocabIndex": 8
  },
  {
    "q": "My father wants to ______ smoking. He knows it is bad for his health.",
    "options": [
      "quit",
      "protect",
      "provide",
      "pronounce"
    ],
    "answer": 0,
    "cn": "他決定辭職。",
    "vocabIndex": 9
  },
  {
    "q": "The children must not play on the ______. A train may come at any time.",
    "options": [
      "raincoat",
      "rectangle",
      "record",
      "railroad"
    ],
    "answer": 3,
    "cn": "火車沿著鐵路行駛。",
    "vocabIndex": 10
  },
  {
    "q": "They are building a new ______ between the two cities. Trains will run on it next year.",
    "options": [
      "raincoat",
      "rectangle",
      "railway",
      "purse"
    ],
    "answer": 2,
    "cn": "他們建造了一條新鐵路。",
    "vocabIndex": 11
  },
  {
    "q": "It is raining hard. Put on your ______ before you ride your bike to school.",
    "options": [
      "record",
      "rectangle",
      "railway",
      "raincoat"
    ],
    "answer": 3,
    "cn": "因為下雨，她穿了一件雨衣。",
    "vocabIndex": 12
  },
  {
    "q": "Pandas are ______ animals. There are only about two thousand of them in the wild.",
    "options": [
      "regular",
      "rare",
      "responsible",
      "rude"
    ],
    "answer": 1,
    "cn": "這種鳥類非常罕見。",
    "vocabIndex": 13
  },
  {
    "q": "I don't want to go out tonight. I would ______ stay home and read.",
    "options": [
      "rather",
      "hardly",
      "nearly",
      "especially"
    ],
    "answer": 0,
    "cn": "我寧願待在家裡也不願出去。",
    "vocabIndex": 14
  },
  {
    "q": "I didn't ______ it was so late. I thought it was only eight o'clock.",
    "options": [
      "receive",
      "recover",
      "realize",
      "recycle"
    ],
    "answer": 2,
    "cn": "她沒有意識到自己所處的危險。",
    "vocabIndex": 15
  },
  {
    "q": "I ______ a birthday card from my friend in the mail yesterday.",
    "options": [
      "received",
      "realized",
      "recovered",
      "recycled"
    ],
    "answer": 0,
    "cn": "她收到了一份來自朋友的禮物。",
    "vocabIndex": 16
  },
  {
    "q": "The teacher keeps a ______ of every student's test scores in her notebook.",
    "options": [
      "raincoat",
      "rectangle",
      "purse",
      "record"
    ],
    "answer": 3,
    "cn": "她記錄所有的開支。",
    "vocabIndex": 17
  },
  {
    "q": "It took Grandpa two months to ______ from his illness. He is healthy again now.",
    "options": [
      "receive",
      "recover",
      "realize",
      "recycle"
    ],
    "answer": 1,
    "cn": "他預計很快會從疾病中康復。",
    "vocabIndex": 18
  },
  {
    "q": "A door has the shape of a ______. It has two long sides and two short sides.",
    "options": [
      "record",
      "raincoat",
      "rectangle",
      "railroad"
    ],
    "answer": 2,
    "cn": "她在紙上畫了一個長方形。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "pump": {
    "pos": "n.",
    "en_def": "a machine that moves water, air, or gas",
    "cn_def": "泵，打氣筒"
  },
  "purse": {
    "pos": "n.",
    "en_def": "a small bag in which a woman carries money and keys",
    "cn_def": "錢包，手提包"
  },
  "promise": {
    "pos": "n.",
    "en_def": "words that say you will surely do something",
    "cn_def": "承諾，保證"
  },
  "puzzle": {
    "pos": "n.",
    "en_def": "a game or question that is hard to work out",
    "cn_def": "拼圖，謎題"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe",
    "cn_def": "保護，防護"
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word or letter",
    "cn_def": "發音，宣佈"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give someone what they need",
    "cn_def": "提供，供給"
  },
  "punish": {
    "pos": "v.",
    "en_def": "to make someone suffer because they did something wrong",
    "cn_def": "懲罰，處罰"
  },
  "quit": {
    "pos": "v.",
    "en_def": "to leave a job or stop doing something",
    "cn_def": "辭職，放棄"
  },
  "protected": {
    "pos": "v.",
    "en_def": "to keep someone or something safe",
    "cn_def": "保護，防護"
  },
  "punished": {
    "pos": "v.",
    "en_def": "to make someone suffer because they did something wrong",
    "cn_def": "懲罰，處罰"
  },
  "provided": {
    "pos": "v.",
    "en_def": "to give someone what they need",
    "cn_def": "提供，供給"
  },
  "pronounced": {
    "pos": "v.",
    "en_def": "to make the sound of a word or letter",
    "cn_def": "發音，宣佈"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason for doing something",
    "cn_def": "目的，意圖"
  },
  "raincoat": {
    "pos": "n.",
    "en_def": "a coat that keeps you dry in the rain",
    "cn_def": "雨衣"
  },
  "rectangle": {
    "pos": "n.",
    "en_def": "a shape with four straight sides, two long and two short",
    "cn_def": "長方形"
  },
  "record": {
    "pos": "n.",
    "en_def": "written information that is kept so people can look at it later",
    "cn_def": "記錄，唱片"
  },
  "railroad": {
    "pos": "n.",
    "en_def": "the metal tracks that trains run on",
    "cn_def": "鐵路"
  },
  "railway": {
    "pos": "n.",
    "en_def": "the metal tracks that trains run on",
    "cn_def": "鐵路，鐵道"
  },
  "regular": {
    "pos": "adj.",
    "en_def": "happening again and again at the same times",
    "cn_def": "定期的，規則的"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的，罕見的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having the job or duty of taking care of something",
    "cn_def": "負責任的"
  },
  "rude": {
    "pos": "adj.",
    "en_def": "not polite",
    "cn_def": "無禮的，粗魯的"
  },
  "rather": {
    "pos": "adv.",
    "en_def": "more willingly (used with \"would\")",
    "cn_def": "寧願，倒不如說"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost",
    "cn_def": "幾乎，差不多"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than others; more than usual",
    "cn_def": "特別地，尤其"
  },
  "receive": {
    "pos": "v.",
    "en_def": "to get something that someone gives or sends you",
    "cn_def": "收到，接受"
  },
  "recover": {
    "pos": "v.",
    "en_def": "to get well again after being sick",
    "cn_def": "恢復，痊癒"
  },
  "realize": {
    "pos": "v.",
    "en_def": "to suddenly know or understand something",
    "cn_def": "意識到，實現"
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to use old paper, glass, or plastic again to make new things",
    "cn_def": "回收，再利用"
  },
  "received": {
    "pos": "v.",
    "en_def": "to get something that someone gives or sends you",
    "cn_def": "收到，接受"
  },
  "realized": {
    "pos": "v.",
    "en_def": "to suddenly know or understand something",
    "cn_def": "意識到，實現"
  },
  "recovered": {
    "pos": "v.",
    "en_def": "to get well again after being sick",
    "cn_def": "恢復，痊癒"
  },
  "recycled": {
    "pos": "v.",
    "en_def": "to use old paper, glass, or plastic again to make new things",
    "cn_def": "回收，再利用"
  }
};

const EXTRA_GLOSSES = {};
