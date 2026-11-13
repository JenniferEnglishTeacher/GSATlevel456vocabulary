// Unit 15 Quiz Data: frank – god
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U15 - frank – god",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "frank",
    "pos": "adj.",
    "cn_def": "坦率的",
    "en_def": "saying what you really think; honest",
    "sentence": "She gave a {{BLANK}} opinion about the matter.",
    "cn": "她對這件事給出了坦率的意見。"
  },
  {
    "word": "freedom",
    "pos": "n.",
    "cn_def": "自由",
    "en_def": "being able to do, say, and think what you want",
    "sentence": "They fought for their {{BLANK}}.",
    "cn": "他們為自由而戰。"
  },
  {
    "word": "freezer",
    "pos": "n.",
    "cn_def": "冷凍庫",
    "en_def": "a machine that keeps food very cold and hard like ice",
    "sentence": "She put the ice cream in the {{BLANK}}.",
    "cn": "她把冰淇淋放在冷凍庫裡。"
  },
  {
    "word": "freezing",
    "pos": "adj.",
    "cn_def": "冰凍的，極冷的",
    "en_def": "very, very cold",
    "sentence": "It was {{BLANK}} outside last night.",
    "cn": "昨晚外面很冷。"
  },
  {
    "word": "friendship",
    "pos": "n.",
    "cn_def": "友誼",
    "en_def": "the feeling between people who are friends",
    "sentence": "Their {{BLANK}} has lasted for years.",
    "cn": "他們的友誼已持續多年。"
  },
  {
    "word": "frighten",
    "pos": "v.",
    "cn_def": "使害怕",
    "en_def": "to make someone afraid",
    "sentence": "The loud noise {{BLANK}} the children.",
    "cn": "巨大的聲音嚇到了孩子們。"
  },
  {
    "word": "Frisbee",
    "pos": "n.",
    "cn_def": "飛盤",
    "en_def": "a flat plastic plate that people throw to each other for fun",
    "sentence": "They played {{BLANK}} in the park.",
    "cn": "他們在公園裡玩飛盤。"
  },
  {
    "word": "furniture",
    "pos": "n.",
    "cn_def": "家具",
    "en_def": "tables, chairs, beds, and other big things in a house",
    "sentence": "They bought new {{BLANK}} for the living room.",
    "cn": "他們為客廳買了新家具。"
  },
  {
    "word": "gain",
    "pos": "v.",
    "cn_def": "獲得，增加",
    "en_def": "to get something that you want or need",
    "sentence": "She managed to {{BLANK}} the trust of her colleagues.",
    "cn": "她設法贏得了同事的信任。"
  },
  {
    "word": "garage",
    "pos": "n.",
    "cn_def": "車庫",
    "en_def": "a building where you keep a car",
    "sentence": "He parked his car in the {{BLANK}}.",
    "cn": "他把車停在車庫裡。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集，收集",
    "en_def": "to come together in a group",
    "sentence": "They {{BLANK}} around the table for dinner.",
    "cn": "他們聚集在桌子旁吃晚飯。",
    "alts": [
      "gather"
    ]
  },
  {
    "word": "general",
    "pos": "adj.",
    "cn_def": "一般的，總的",
    "en_def": "not exact or full of details; about the main things only",
    "sentence": "She has a {{BLANK}} idea of how the system works.",
    "cn": "她大致了解系統的運作方式。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的，大方的",
    "en_def": "happy to give money, help, or time to others",
    "sentence": "He is very {{BLANK}} with his time.",
    "cn": "他很慷慨地付出他的時間。"
  },
  {
    "word": "genius",
    "pos": "n.",
    "cn_def": "天才",
    "en_def": "a person who is much smarter or better at something than other people",
    "sentence": "He is considered a musical {{BLANK}}.",
    "cn": "他被認為是音樂天才。"
  },
  {
    "word": "gentle",
    "pos": "adj.",
    "cn_def": "溫和的，文雅的",
    "en_def": "soft, kind, and careful",
    "sentence": "She has a {{BLANK}} touch when handling animals.",
    "cn": "她對待動物時很溫柔。"
  },
  {
    "word": "gentleman",
    "pos": "n.",
    "cn_def": "紳士",
    "en_def": "a man who is polite and kind to others",
    "sentence": "He is a true {{BLANK}}.",
    "cn": "他是一位真正的紳士。"
  },
  {
    "word": "geography",
    "pos": "n.",
    "cn_def": "地理學",
    "en_def": "the study of the countries, mountains, and seas of the world",
    "sentence": "She is studying {{BLANK}} in school.",
    "cn": "她在學校學習地理。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢，姿勢",
    "en_def": "something you do to show how you feel; a movement of the hand",
    "sentence": "He made a kind {{BLANK}} to help her.",
    "cn": "他做了一個友好的手勢來幫助她。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標，球門",
    "en_def": "something that you want to do or reach in the future",
    "sentence": "His main {{BLANK}} is to finish the project on time.",
    "cn": "他的主要目標是按時完成專案。"
  },
  {
    "word": "god",
    "pos": "n.",
    "cn_def": "神",
    "en_def": "one of the beings that people pray to",
    "sentence": "They prayed to their {{BLANK}}.",
    "cn": "他們向他們的神祈禱。"
  }
];

const MCQS = [
  {
    "q": "To be ______, I don't like your new haircut. I am just telling you the truth.",
    "options": [
      "freezing",
      "general",
      "gentle",
      "frank"
    ],
    "answer": 3,
    "cn": "她對這件事給出了坦率的意見。",
    "vocabIndex": 0
  },
  {
    "q": "The bird flew out of the cage and enjoyed its ______ in the sky.",
    "options": [
      "freedom",
      "freezer",
      "furniture",
      "geography"
    ],
    "answer": 0,
    "cn": "他們為自由而戰。",
    "vocabIndex": 1
  },
  {
    "q": "Put the ice cream in the ______ right away, or it will turn into water.",
    "options": [
      "freedom",
      "freezer",
      "furniture",
      "garage"
    ],
    "answer": 1,
    "cn": "她把冰淇淋放在冷凍庫裡。",
    "vocabIndex": 2
  },
  {
    "q": "It is ______ outside! The temperature is below zero. Put on your coat and gloves.",
    "options": [
      "frank",
      "generous",
      "freezing",
      "gentle"
    ],
    "answer": 2,
    "cn": "昨晚外面很冷。",
    "vocabIndex": 3
  },
  {
    "q": "Our ______ began in elementary school. We have been best friends for ten years.",
    "options": [
      "freedom",
      "furniture",
      "geography",
      "friendship"
    ],
    "answer": 3,
    "cn": "他們的友誼已持續多年。",
    "vocabIndex": 4
  },
  {
    "q": "The loud thunder ______ the little girl. She ran to her mother and cried.",
    "options": [
      "gained",
      "frightened",
      "gathered",
      "forgave"
    ],
    "answer": 1,
    "cn": "巨大的聲音嚇到了孩子們。",
    "vocabIndex": 5
  },
  {
    "q": "We threw a ______ to each other in the park. The dog jumped up and caught it.",
    "options": [
      "Frisbee",
      "furniture",
      "garage",
      "genius"
    ],
    "answer": 0,
    "cn": "他們在公園裡玩飛盤。",
    "vocabIndex": 6
  },
  {
    "q": "We bought some new ______ for the living room: a sofa, a table, and two chairs.",
    "options": [
      "freedom",
      "friendship",
      "furniture",
      "geography"
    ],
    "answer": 2,
    "cn": "他們為客廳買了新家具。",
    "vocabIndex": 7
  },
  {
    "q": "You will ______ weight if you eat too much fast food and never exercise.",
    "options": [
      "gather",
      "frighten",
      "forgive",
      "gain"
    ],
    "answer": 3,
    "cn": "她設法贏得了同事的信任。",
    "vocabIndex": 8
  },
  {
    "q": "Dad parks his car in the ______ next to our house every night.",
    "options": [
      "garage",
      "freezer",
      "gesture",
      "goal"
    ],
    "answer": 0,
    "cn": "他把車停在車庫裡。",
    "vocabIndex": 9
  },
  {
    "q": "The students ______ in the gym to listen to the principal's speech.",
    "options": [
      "gained",
      "frightened",
      "gathered",
      "forgave"
    ],
    "answer": 2,
    "cn": "他們聚集在桌子旁吃晚飯。",
    "vocabIndex": 10
  },
  {
    "q": "I don't know the details. I only have a ______ idea of the plan.",
    "options": [
      "frank",
      "general",
      "generous",
      "gentle"
    ],
    "answer": 1,
    "cn": "她大致了解系統的運作方式。",
    "vocabIndex": 11
  },
  {
    "q": "Mr. Wang is very ______. He gave a lot of money to help poor children.",
    "options": [
      "freezing",
      "general",
      "generous",
      "frank"
    ],
    "answer": 2,
    "cn": "他很慷慨地付出他的時間。",
    "vocabIndex": 12
  },
  {
    "q": "Mozart was a ______. He started writing music when he was only five.",
    "options": [
      "gentleman",
      "genius",
      "gesture",
      "goal"
    ],
    "answer": 1,
    "cn": "他被認為是音樂天才。",
    "vocabIndex": 13
  },
  {
    "q": "Be ______ with the baby. Hold her softly and carefully.",
    "options": [
      "frank",
      "general",
      "freezing",
      "gentle"
    ],
    "answer": 3,
    "cn": "她對待動物時很溫柔。",
    "vocabIndex": 14
  },
  {
    "q": "Mr. Lin is a real ______. He always opens the door for others and speaks politely.",
    "options": [
      "gentleman",
      "genius",
      "gesture",
      "garage"
    ],
    "answer": 0,
    "cn": "他是一位真正的紳士。",
    "vocabIndex": 15
  },
  {
    "q": "In ______ class, we learn about countries, mountains, rivers, and seas.",
    "options": [
      "freedom",
      "friendship",
      "furniture",
      "geography"
    ],
    "answer": 3,
    "cn": "她在學校學習地理。",
    "vocabIndex": 16
  },
  {
    "q": "He raised his hand as a ______ to say \"stop.\"",
    "options": [
      "genius",
      "goal",
      "gesture",
      "garage"
    ],
    "answer": 2,
    "cn": "他做了一個友好的手勢來幫助她。",
    "vocabIndex": 17
  },
  {
    "q": "My ______ is to pass the exam and get into a good senior high school.",
    "options": [
      "god",
      "goal",
      "garage",
      "gesture"
    ],
    "answer": 1,
    "cn": "他的主要目標是按時完成專案。",
    "vocabIndex": 18
  },
  {
    "q": "In the old stories of Greece, Zeus was the ______ of the sky.",
    "options": [
      "god",
      "goal",
      "genius",
      "gentleman"
    ],
    "answer": 0,
    "cn": "他們向他們的神祈禱。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "freezing": {
    "pos": "adj.",
    "en_def": "very, very cold",
    "cn_def": "冰凍的，極冷的"
  },
  "general": {
    "pos": "adj.",
    "en_def": "not exact or full of details; about the main things only",
    "cn_def": "一般的，總的"
  },
  "gentle": {
    "pos": "adj.",
    "en_def": "soft, kind, and careful",
    "cn_def": "溫和的，文雅的"
  },
  "frank": {
    "pos": "adj.",
    "en_def": "saying what you really think; honest",
    "cn_def": "坦率的"
  },
  "freedom": {
    "pos": "n.",
    "en_def": "being able to do, say, and think what you want",
    "cn_def": "自由"
  },
  "freezer": {
    "pos": "n.",
    "en_def": "a machine that keeps food very cold and hard like ice",
    "cn_def": "冷凍庫"
  },
  "furniture": {
    "pos": "n.",
    "en_def": "tables, chairs, beds, and other big things in a house",
    "cn_def": "家具"
  },
  "geography": {
    "pos": "n.",
    "en_def": "the study of the countries, mountains, and seas of the world",
    "cn_def": "地理學"
  },
  "garage": {
    "pos": "n.",
    "en_def": "a building where you keep a car",
    "cn_def": "車庫"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give money, help, or time to others",
    "cn_def": "慷慨的，大方的"
  },
  "friendship": {
    "pos": "n.",
    "en_def": "the feeling between people who are friends",
    "cn_def": "友誼"
  },
  "gained": {
    "pos": "v.",
    "en_def": "to get something that you want or need",
    "cn_def": "獲得，增加"
  },
  "frightened": {
    "pos": "v.",
    "en_def": "to make someone afraid",
    "cn_def": "使害怕"
  },
  "gathered": {
    "pos": "v.",
    "en_def": "to come together in a group",
    "cn_def": "聚集，收集"
  },
  "forgave": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "原諒"
  },
  "frisbee": {
    "pos": "n.",
    "en_def": "a flat plastic plate that people throw to each other for fun",
    "cn_def": "飛盤"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a person who is much smarter or better at something than other people",
    "cn_def": "天才"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in a group",
    "cn_def": "聚集，收集"
  },
  "frighten": {
    "pos": "v.",
    "en_def": "to make someone afraid",
    "cn_def": "使害怕"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone for something they did",
    "cn_def": "原諒，寬恕"
  },
  "gain": {
    "pos": "v.",
    "en_def": "to get something that you want or need",
    "cn_def": "獲得，增加"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "something you do to show how you feel; a movement of the hand",
    "cn_def": "手勢，姿勢"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something that you want to do or reach in the future",
    "cn_def": "目標，球門"
  },
  "gentleman": {
    "pos": "n.",
    "en_def": "a man who is polite and kind to others",
    "cn_def": "紳士"
  },
  "god": {
    "pos": "n.",
    "en_def": "one of the beings that people pray to",
    "cn_def": "神"
  }
};

const EXTRA_GLOSSES = {};
