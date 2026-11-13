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
    "q": "She made a ______ to help him.【承諾，保證】",
    "options": [
      "purpose",
      "puzzle",
      "record",
      "promise"
    ],
    "answer": 3,
    "cn": "她承諾幫助他。",
    "vocabIndex": 0
  },
  {
    "q": "Can you ______ this word correctly?【發音，宣佈】",
    "options": [
      "provide",
      "realize",
      "pronounce",
      "protect"
    ],
    "answer": 2,
    "cn": "你能正確發音這個詞嗎？",
    "vocabIndex": 1
  },
  {
    "q": "The laws are designed to ______ the environment.【保護，防護】",
    "options": [
      "protect",
      "realize",
      "provide",
      "recover"
    ],
    "answer": 0,
    "cn": "法律旨在保護環境。",
    "vocabIndex": 2
  },
  {
    "q": "The school will ______ all the necessary materials.【提供，供給】",
    "options": [
      "protect",
      "provide",
      "pronounce",
      "recover"
    ],
    "answer": 1,
    "cn": "學校將提供所有必要的材料。",
    "vocabIndex": 3
  },
  {
    "q": "The water ______ is broken.【泵，打氣筒】",
    "options": [
      "railroad",
      "purpose",
      "raincoat",
      "pump"
    ],
    "answer": 3,
    "cn": "水泵壞了。",
    "vocabIndex": 4
  },
  {
    "q": "He was ______ for breaking the rules.【懲罰，處罰】",
    "options": [
      "punished",
      "received",
      "quit",
      "recover"
    ],
    "answer": 0,
    "cn": "他因違反規定而受到懲罰。",
    "vocabIndex": 5
  },
  {
    "q": "The main ______ of the meeting is to discuss the budget.【目的，意圖】",
    "options": [
      "railway",
      "record",
      "purpose",
      "pump"
    ],
    "answer": 2,
    "cn": "會議的主要目的是討論預算。",
    "vocabIndex": 6
  },
  {
    "q": "She keeps her keys in her ______.【錢包，手提包】",
    "options": [
      "puzzle",
      "purse",
      "record",
      "raincoat"
    ],
    "answer": 1,
    "cn": "她把鑰匙放在手提包裡。",
    "vocabIndex": 7
  },
  {
    "q": "They enjoyed solving the ______.【拼圖，謎題】",
    "options": [
      "puzzle",
      "rectangle",
      "purse",
      "record"
    ],
    "answer": 0,
    "cn": "他們喜歡解謎題。",
    "vocabIndex": 8
  },
  {
    "q": "He decided to ______ his job.【辭職，放棄】",
    "options": [
      "recover",
      "quit",
      "provide",
      "protect"
    ],
    "answer": 1,
    "cn": "他決定辭職。",
    "vocabIndex": 9
  },
  {
    "q": "The train travels along the ______.【鐵路】",
    "options": [
      "pump",
      "purse",
      "promise",
      "railroad"
    ],
    "answer": 3,
    "cn": "火車沿著鐵路行駛。",
    "vocabIndex": 10
  },
  {
    "q": "They built a new ______.【鐵路，鐵道】",
    "options": [
      "record",
      "railroad",
      "railway",
      "purse"
    ],
    "answer": 2,
    "cn": "他們建造了一條新鐵路。",
    "vocabIndex": 11
  },
  {
    "q": "She wore a ______ because it was raining.【雨衣】",
    "options": [
      "raincoat",
      "puzzle",
      "railroad",
      "promise"
    ],
    "answer": 0,
    "cn": "因為下雨，她穿了一件雨衣。",
    "vocabIndex": 12
  },
  {
    "q": "This species of bird is very ______.【稀有的，罕見的】",
    "options": [
      "natural",
      "rare",
      "central",
      "pale"
    ],
    "answer": 1,
    "cn": "這種鳥類非常罕見。",
    "vocabIndex": 13
  },
  {
    "q": "I would ______ stay home than go out.【寧願，倒不如說】",
    "options": [
      "hardly",
      "backward",
      "therefore",
      "rather"
    ],
    "answer": 3,
    "cn": "我寧願待在家裡也不願出去。",
    "vocabIndex": 14
  },
  {
    "q": "She didn't ______ the danger she was in.【意識到，實現】",
    "options": [
      "provide",
      "pronounce",
      "realize",
      "quit"
    ],
    "answer": 2,
    "cn": "她沒有意識到自己所處的危險。",
    "vocabIndex": 15
  },
  {
    "q": "She ______ a gift from her friend.【收到，接受】",
    "options": [
      "punished",
      "received",
      "recover",
      "protect"
    ],
    "answer": 1,
    "cn": "她收到了一份來自朋友的禮物。",
    "vocabIndex": 16
  },
  {
    "q": "She keeps a ______ of all her expenses.【記錄，唱片】",
    "options": [
      "purpose",
      "purse",
      "record",
      "rectangle"
    ],
    "answer": 2,
    "cn": "她記錄所有的開支。",
    "vocabIndex": 17
  },
  {
    "q": "He is expected to ______ from his illness soon.【恢復，痊癒】",
    "options": [
      "recover",
      "provide",
      "protect",
      "quit"
    ],
    "answer": 0,
    "cn": "他預計很快會從疾病中康復。",
    "vocabIndex": 18
  },
  {
    "q": "She drew a ______ on the paper.【長方形】",
    "options": [
      "record",
      "purpose",
      "promise",
      "rectangle"
    ],
    "answer": 3,
    "cn": "她在紙上畫了一個長方形。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "backward": {
    "pos": "adv.",
    "en_def": "toward the back",
    "cn_def": "向後地"
  },
  "central": {
    "pos": "adj.",
    "en_def": "in the middle; for the whole building",
    "cn_def": "中央的，核心的"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "from nature; not made by people",
    "cn_def": "自然的，天然的"
  },
  "pale": {
    "pos": "adj.",
    "en_def": "having a light or white face, often because you are sick",
    "cn_def": "蒼白的，淡色的"
  },
  "promise": {
    "pos": "n.",
    "en_def": "words that say you will surely do something",
    "cn_def": "承諾，保證"
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word or letter",
    "cn_def": "發音，宣佈"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe",
    "cn_def": "保護，防護"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give someone what they need",
    "cn_def": "提供，供給"
  },
  "pump": {
    "pos": "n.",
    "en_def": "a machine that moves water, air, or gas",
    "cn_def": "泵，打氣筒"
  },
  "punished": {
    "pos": "v.",
    "en_def": "to make someone suffer because they did something wrong",
    "cn_def": "懲罰，處罰"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason for doing something",
    "cn_def": "目的，意圖"
  },
  "purse": {
    "pos": "n.",
    "en_def": "a small bag in which a woman carries money and keys",
    "cn_def": "錢包，手提包"
  },
  "puzzle": {
    "pos": "n.",
    "en_def": "a game or question that is hard to work out",
    "cn_def": "拼圖，謎題"
  },
  "quit": {
    "pos": "v.",
    "en_def": "to leave a job or stop doing something",
    "cn_def": "辭職，放棄"
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
  "raincoat": {
    "pos": "n.",
    "en_def": "a coat that keeps you dry in the rain",
    "cn_def": "雨衣"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的，罕見的"
  },
  "rather": {
    "pos": "adv.",
    "en_def": "more willingly (used with \"would\")",
    "cn_def": "寧願，倒不如說"
  },
  "realize": {
    "pos": "v.",
    "en_def": "to suddenly know or understand something",
    "cn_def": "意識到，實現"
  },
  "received": {
    "pos": "v.",
    "en_def": "to get something that someone gives or sends you",
    "cn_def": "收到，接受"
  },
  "record": {
    "pos": "n.",
    "en_def": "written information that is kept so people can look at it later",
    "cn_def": "記錄，唱片"
  },
  "recover": {
    "pos": "v.",
    "en_def": "to get well again after being sick",
    "cn_def": "恢復，痊癒"
  },
  "rectangle": {
    "pos": "n.",
    "en_def": "a shape with four straight sides, two long and two short",
    "cn_def": "長方形"
  },
  "therefore": {
    "pos": "adv.",
    "en_def": "so; for that reason",
    "cn_def": "因此，所以"
  }
};

const EXTRA_GLOSSES = {};
