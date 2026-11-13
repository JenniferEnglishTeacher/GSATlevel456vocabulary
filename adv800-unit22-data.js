// Unit 22 Quiz Data: match – motion
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U22 - match – motion",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "match",
    "pos": "n.",
    "cn_def": "比賽，火柴",
    "en_def": "a game between two players or teams",
    "sentence": "They won the soccer {{BLANK}}.",
    "cn": "他們贏得了足球比賽。"
  },
  {
    "word": "maximum",
    "pos": "adj.",
    "cn_def": "最大的，最高的",
    "en_def": "the largest that is possible or allowed",
    "sentence": "The {{BLANK}} capacity of the hall is 500 people.",
    "cn": "大廳的最大容量是500人。"
  },
  {
    "word": "meaning",
    "pos": "n.",
    "cn_def": "意義，意思",
    "en_def": "the idea that a word or sign shows",
    "sentence": "The {{BLANK}} of the word is unclear.",
    "cn": "這個詞的意思不清楚。"
  },
  {
    "word": "measure",
    "pos": "v.",
    "cn_def": "測量，衡量",
    "en_def": "to find out how long, big, or heavy something is",
    "sentence": "They {{BLANK}} the length of the room.",
    "cn": "他們測量了房間的長度。"
  },
  {
    "word": "mechanic",
    "pos": "n.",
    "cn_def": "技工，機械師",
    "en_def": "a person who fixes cars or machines",
    "sentence": "He works as a car {{BLANK}}.",
    "cn": "他是一名汽車技工。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶，回憶",
    "en_def": "the power to remember things",
    "sentence": "She has a good {{BLANK}}.",
    "cn": "她的記憶力很好。"
  },
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "信息，訊息",
    "en_def": "words that you send or leave for someone",
    "sentence": "She left a {{BLANK}} on his phone.",
    "cn": "她在他的手機上留了訊息。"
  },
  {
    "word": "metal",
    "pos": "n.",
    "cn_def": "金屬",
    "en_def": "a hard, shiny material like iron or gold",
    "sentence": "The table is made of {{BLANK}}.",
    "cn": "這張桌子是金屬製成的。"
  },
  {
    "word": "meter",
    "pos": "n.",
    "cn_def": "公尺，計量器",
    "en_def": "a unit of length; it is 100 centimeters",
    "sentence": "The room is 5 {{BLANK}} long.",
    "cn": "這個房間長5公尺。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法，方式",
    "en_def": "a way of doing something",
    "sentence": "They developed a new {{BLANK}} for testing the product.",
    "cn": "他們開發了一種新的產品測試方法。"
  },
  {
    "word": "microwave",
    "pos": "n.",
    "cn_def": "微波爐",
    "en_def": "a machine that heats food very quickly",
    "sentence": "She heated the food in the {{BLANK}}.",
    "cn": "她用微波爐加熱食物。"
  },
  {
    "word": "midnight",
    "pos": "n.",
    "cn_def": "午夜",
    "en_def": "twelve o'clock at night",
    "sentence": "The train arrived at {{BLANK}}.",
    "cn": "火車在午夜到達。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "較小的，次要的",
    "en_def": "small; not very serious",
    "sentence": "He suffered only {{BLANK}} injuries in the accident.",
    "cn": "他在事故中只受了輕傷。"
  },
  {
    "word": "minus",
    "pos": "prep.",
    "cn_def": "減，負的",
    "en_def": "below zero; made smaller by a number",
    "sentence": "The temperature is {{BLANK}} 5 degrees.",
    "cn": "溫度是零下5度。"
  },
  {
    "word": "mirror",
    "pos": "n.",
    "cn_def": "鏡子",
    "en_def": "a piece of glass in which you can see yourself",
    "sentence": "She looked at herself in the {{BLANK}}.",
    "cn": "她照了照鏡子。"
  },
  {
    "word": "mix",
    "pos": "v.",
    "cn_def": "混合，攪拌",
    "en_def": "to put different things together and stir them",
    "sentence": "She {{BLANK}} the ingredients together.",
    "cn": "她把材料混合在一起。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "模型，模特",
    "en_def": "a small copy of something, like a plane or a building",
    "sentence": "He built a {{BLANK}} of the airplane.",
    "cn": "他製作了一個飛機模型。"
  },
  {
    "word": "monster",
    "pos": "n.",
    "cn_def": "怪物",
    "en_def": "a big, ugly, scary animal in stories",
    "sentence": "The children were afraid of the {{BLANK}}.",
    "cn": "孩子們害怕那個怪物。"
  },
  {
    "word": "mosquito",
    "pos": "n.",
    "cn_def": "蚊子",
    "en_def": "a small flying insect that bites people and drinks blood",
    "sentence": "She was bitten by a {{BLANK}}.",
    "cn": "她被蚊子咬了。"
  },
  {
    "word": "motion",
    "pos": "n.",
    "cn_def": "運動，動作",
    "en_def": "the act of moving",
    "sentence": "The {{BLANK}} of the boat made her feel sick.",
    "cn": "船的運動讓她感到噁心。"
  }
];

const MCQS = [
  {
    "q": "We watched a tennis ______ on TV. The two players played for three hours.",
    "options": [
      "metal",
      "mirror",
      "match",
      "method"
    ],
    "answer": 2,
    "cn": "他們贏得了足球比賽。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ speed on this highway is 110 kilometers an hour. You must not go faster.",
    "options": [
      "maximum",
      "minor",
      "major",
      "male"
    ],
    "answer": 0,
    "cn": "大廳的最大容量是500人。",
    "vocabIndex": 1
  },
  {
    "q": "What is the ______ of this word? I don't understand it.",
    "options": [
      "memory",
      "meaning",
      "metal",
      "motion"
    ],
    "answer": 1,
    "cn": "這個詞的意思不清楚。",
    "vocabIndex": 2
  },
  {
    "q": "Use a ruler to ______ the desk. How long is it?",
    "options": [
      "mix",
      "marry",
      "lock",
      "measure"
    ],
    "answer": 3,
    "cn": "他們測量了房間的長度。",
    "vocabIndex": 3
  },
  {
    "q": "My car broke down, so I took it to a ______. He fixed it in two hours.",
    "options": [
      "monster",
      "model",
      "mechanic",
      "mosquito"
    ],
    "answer": 2,
    "cn": "他是一名汽車技工。",
    "vocabIndex": 4
  },
  {
    "q": "Grandpa has a good ______. He can still remember the names of all his classmates.",
    "options": [
      "memory",
      "meaning",
      "metal",
      "method"
    ],
    "answer": 0,
    "cn": "她的記憶力很好。",
    "vocabIndex": 5
  },
  {
    "q": "Amy is not home. Can I take a ______ for her? I will tell her you called.",
    "options": [
      "mirror",
      "meter",
      "metal",
      "message"
    ],
    "answer": 3,
    "cn": "她在他的手機上留了訊息。",
    "vocabIndex": 6
  },
  {
    "q": "Gold and iron are two kinds of ______. They are hard and shiny.",
    "options": [
      "method",
      "metal",
      "message",
      "motion"
    ],
    "answer": 1,
    "cn": "這張桌子是金屬製成的。",
    "vocabIndex": 7
  },
  {
    "q": "The swimming pool is fifty ______ long. I can swim across it in one minute.",
    "options": [
      "meters",
      "methods",
      "mirrors",
      "models"
    ],
    "answer": 0,
    "cn": "這個房間長5公尺。",
    "vocabIndex": 8
  },
  {
    "q": "This is a good ______ for learning new words. Many students use it this way.",
    "options": [
      "metal",
      "mirror",
      "method",
      "midnight"
    ],
    "answer": 2,
    "cn": "他們開發了一種新的產品測試方法。",
    "vocabIndex": 9
  },
  {
    "q": "Put the cold pizza in the ______ for one minute. It will be hot again.",
    "options": [
      "mirror",
      "meter",
      "model",
      "microwave"
    ],
    "answer": 3,
    "cn": "她用微波爐加熱食物。",
    "vocabIndex": 10
  },
  {
    "q": "I went to bed at ______. It was twelve o'clock at night.",
    "options": [
      "method",
      "midnight",
      "metal",
      "motion"
    ],
    "answer": 1,
    "cn": "火車在午夜到達。",
    "vocabIndex": 11
  },
  {
    "q": "Don't worry. It is only a ______ problem. We can fix it in five minutes.",
    "options": [
      "minor",
      "maximum",
      "major",
      "marvelous"
    ],
    "answer": 0,
    "cn": "他在事故中只受了輕傷。",
    "vocabIndex": 12
  },
  {
    "q": "Ten ______ three is seven.",
    "options": [
      "plus",
      "against",
      "minus",
      "beyond"
    ],
    "answer": 2,
    "cn": "溫度是零下5度。",
    "vocabIndex": 13
  },
  {
    "q": "She looked at herself in the ______ and brushed her hair.",
    "options": [
      "microwave",
      "mirror",
      "model",
      "meter"
    ],
    "answer": 1,
    "cn": "她照了照鏡子。",
    "vocabIndex": 14
  },
  {
    "q": "______ the eggs and sugar together in a bowl with a spoon.",
    "options": [
      "Measure",
      "Marry",
      "Lock",
      "mix"
    ],
    "answer": 3,
    "cn": "她把材料混合在一起。",
    "vocabIndex": 15
  },
  {
    "q": "The boy made a ______ of a plane with paper and wood. It looks like a real one.",
    "options": [
      "mirror",
      "model",
      "monster",
      "mosquito"
    ],
    "answer": 1,
    "cn": "他製作了一個飛機模型。",
    "vocabIndex": 16
  },
  {
    "q": "The child was afraid that a ______ lived under his bed. He thought it was big and ugly.",
    "options": [
      "mirror",
      "model",
      "meter",
      "monster"
    ],
    "answer": 3,
    "cn": "孩子們害怕那個怪物。",
    "vocabIndex": 17
  },
  {
    "q": "A ______ bit me on the arm last night. Now I have a red spot there.",
    "options": [
      "mosquito",
      "monster",
      "model",
      "mechanic"
    ],
    "answer": 0,
    "cn": "她被蚊子咬了。",
    "vocabIndex": 18
  },
  {
    "q": "The ______ of the ship on the sea made me feel sick.",
    "options": [
      "metal",
      "method",
      "motion",
      "midnight"
    ],
    "answer": 2,
    "cn": "船的運動讓她感到噁心。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "metal": {
    "pos": "n.",
    "en_def": "a hard, shiny material like iron or gold",
    "cn_def": "金屬"
  },
  "mirror": {
    "pos": "n.",
    "en_def": "a piece of glass in which you can see yourself",
    "cn_def": "鏡子"
  },
  "match": {
    "pos": "n.",
    "en_def": "a game between two players or teams",
    "cn_def": "比賽，火柴"
  },
  "method": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法，方式"
  },
  "maximum": {
    "pos": "adj.",
    "en_def": "the largest that is possible or allowed",
    "cn_def": "最大的，最高的"
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small; not very serious",
    "cn_def": "較小的，次要的"
  },
  "major": {
    "pos": "adj.",
    "en_def": "very big or important",
    "cn_def": "主要的，重要的"
  },
  "male": {
    "pos": "adj.",
    "en_def": "being a man or a boy",
    "cn_def": "男性的"
  },
  "memory": {
    "pos": "n.",
    "en_def": "the power to remember things",
    "cn_def": "記憶，回憶"
  },
  "meaning": {
    "pos": "n.",
    "en_def": "the idea that a word or sign shows",
    "cn_def": "意義，意思"
  },
  "motion": {
    "pos": "n.",
    "en_def": "the act of moving",
    "cn_def": "運動，動作"
  },
  "mix": {
    "pos": "v.",
    "en_def": "to put different things together and stir them",
    "cn_def": "混合，攪拌"
  },
  "marry": {
    "pos": "v.",
    "en_def": "to become someone's husband or wife",
    "cn_def": "結婚"
  },
  "lock": {
    "pos": "v.",
    "en_def": "to close something with a key",
    "cn_def": "鎖住"
  },
  "measure": {
    "pos": "v.",
    "en_def": "to find out how long, big, or heavy something is",
    "cn_def": "測量，衡量"
  },
  "monster": {
    "pos": "n.",
    "en_def": "a big, ugly, scary animal in stories",
    "cn_def": "怪物"
  },
  "model": {
    "pos": "n.",
    "en_def": "a small copy of something, like a plane or a building",
    "cn_def": "模型，模特"
  },
  "mechanic": {
    "pos": "n.",
    "en_def": "a person who fixes cars or machines",
    "cn_def": "技工，機械師"
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect that bites people and drinks blood",
    "cn_def": "蚊子"
  },
  "meter": {
    "pos": "n.",
    "en_def": "a unit of length; it is 100 centimeters",
    "cn_def": "公尺，計量器"
  },
  "message": {
    "pos": "n.",
    "en_def": "words that you send or leave for someone",
    "cn_def": "信息，訊息"
  },
  "meters": {
    "pos": "n.",
    "en_def": "a unit of length; it is 100 centimeters",
    "cn_def": "公尺，計量器"
  },
  "methods": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法，方式"
  },
  "mirrors": {
    "pos": "n.",
    "en_def": "a piece of glass in which you can see yourself",
    "cn_def": "鏡子"
  },
  "models": {
    "pos": "n.",
    "en_def": "a small copy of something, like a plane or a building",
    "cn_def": "模型，模特"
  },
  "midnight": {
    "pos": "n.",
    "en_def": "twelve o'clock at night",
    "cn_def": "午夜"
  },
  "microwave": {
    "pos": "n.",
    "en_def": "a machine that heats food very quickly",
    "cn_def": "微波爐"
  },
  "marvelous": {
    "pos": "adj.",
    "en_def": "very, very good; wonderful",
    "cn_def": "奇妙的，極好的"
  },
  "plus": {
    "pos": "prep.",
    "en_def": "and also; added to",
    "cn_def": "加上，此外"
  },
  "against": {
    "pos": "prep.",
    "en_def": "not agreeing with something",
    "cn_def": "反對，對抗"
  },
  "minus": {
    "pos": "prep.",
    "en_def": "below zero; made smaller by a number",
    "cn_def": "減，負的"
  },
  "beyond": {
    "pos": "prep.",
    "en_def": "on the far side of something",
    "cn_def": "超過，在...之外"
  }
};

const EXTRA_GLOSSES = {};
