// Unit 24 Quiz Data: none – pain
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U24 - none – pain",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "none",
    "pos": "pron.",
    "cn_def": "沒有一個",
    "en_def": "not any; not one",
    "sentence": "{{BLANK}} of the students knew the answer.",
    "cn": "沒有一個學生知道答案。"
  },
  {
    "word": "novel",
    "pos": "n.",
    "cn_def": "小說",
    "en_def": "a long story in a book about people who are not real",
    "sentence": "She is writing a new {{BLANK}}.",
    "cn": "她正在寫一本新小說。"
  },
  {
    "word": "nut",
    "pos": "n.",
    "cn_def": "堅果",
    "en_def": "a hard dry fruit with a shell, like a peanut",
    "sentence": "He likes to eat {{BLANK}}.",
    "cn": "他喜歡吃堅果。"
  },
  {
    "word": "obey",
    "pos": "v.",
    "cn_def": "服從，遵守",
    "en_def": "to do what someone tells you to do",
    "sentence": "Dogs are trained to {{BLANK}} commands.",
    "cn": "狗被訓練服從命令。"
  },
  {
    "word": "object",
    "pos": "n.",
    "cn_def": "物體，目標",
    "en_def": "a thing that you can see and touch",
    "sentence": "The {{BLANK}} on the table is a rare artifact.",
    "cn": "桌上的物體是一件罕見的文物。"
  },
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋",
    "en_def": "a very big sea",
    "sentence": "They sailed across the {{BLANK}}.",
    "cn": "他們航行穿越了海洋。"
  },
  {
    "word": "offer",
    "pos": "v.",
    "cn_def": "提供，提議",
    "en_def": "to say that you will do something for someone or give them something",
    "sentence": "He {{BLANK}} to help with the work.",
    "cn": "他提出幫助工作。"
  },
  {
    "word": "omit",
    "pos": "v.",
    "cn_def": "省略，忽略",
    "en_def": "to leave something out",
    "sentence": "You can {{BLANK}} the last question.",
    "cn": "你可以省略最後一個問題。"
  },
  {
    "word": "oneself",
    "pos": "pron.",
    "cn_def": "自己",
    "en_def": "a person's own self",
    "sentence": "It is important to take care of {{BLANK}}.",
    "cn": "照顧好自己很重要。"
  },
  {
    "word": "onion",
    "pos": "n.",
    "cn_def": "洋蔥",
    "en_def": "a round vegetable with a strong smell that can make you cry",
    "sentence": "She chopped an {{BLANK}}.",
    "cn": "她切了一個洋蔥。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "操作，手術",
    "en_def": "when a doctor cuts into a body to fix something inside",
    "sentence": "The {{BLANK}} was successful.",
    "cn": "手術很成功。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見，看法",
    "en_def": "what you think about something",
    "sentence": "She asked for his {{BLANK}}.",
    "cn": "她徵求他的意見。"
  },
  {
    "word": "ordinary",
    "pos": "adj.",
    "cn_def": "普通的，平凡的",
    "en_def": "normal; not special",
    "sentence": "He is just an {{BLANK}} person.",
    "cn": "他只是一個普通人。"
  },
  {
    "word": "oven",
    "pos": "n.",
    "cn_def": "烤箱",
    "en_def": "the box-shaped part of a stove where you bake food",
    "sentence": "She baked the cake in the {{BLANK}}.",
    "cn": "她在烤箱裡烤蛋糕。"
  },
  {
    "word": "overpass",
    "pos": "n.",
    "cn_def": "天橋",
    "en_def": "a bridge that takes a road or path over another road",
    "sentence": "They crossed the street using the {{BLANK}}.",
    "cn": "他們用天橋過街。"
  },
  {
    "word": "overseas",
    "pos": "adv.",
    "cn_def": "海外，國外",
    "en_def": "in or to a country across the sea",
    "sentence": "He plans to study {{BLANK}}.",
    "cn": "他計劃去國外學習。"
  },
  {
    "word": "overweight",
    "pos": "adj.",
    "cn_def": "超重的，過重的",
    "en_def": "too heavy or fat",
    "sentence": "The doctor advised him to lose weight because he is {{BLANK}}.",
    "cn": "醫生建議他減肥，因為他超重。"
  },
  {
    "word": "owner",
    "pos": "n.",
    "cn_def": "所有者",
    "en_def": "the person that something belongs to",
    "sentence": "She is the {{BLANK}} of the restaurant.",
    "cn": "她是這家餐廳的所有者。"
  },
  {
    "word": "ox",
    "pos": "n.",
    "cn_def": "牛，公牛",
    "en_def": "a big, strong male cow that pulls heavy things",
    "sentence": "The {{BLANK}} pulled the cart.",
    "cn": "牛拉了車。"
  },
  {
    "word": "pain",
    "pos": "n.",
    "cn_def": "疼痛",
    "en_def": "the feeling you have when part of your body hurts",
    "sentence": "He felt a sharp {{BLANK}} in his back.",
    "cn": "他感到背部劇烈疼痛。"
  }
];

const MCQS = [
  {
    "q": "______ of the students knew the answer.【沒有一個】",
    "options": [
      "None",
      "Oneself",
      "Steam",
      "Pollute"
    ],
    "answer": 0,
    "cn": "沒有一個學生知道答案。",
    "vocabIndex": 0
  },
  {
    "q": "She is writing a new ______.【小說】",
    "options": [
      "object",
      "owner",
      "ox",
      "novel"
    ],
    "answer": 3,
    "cn": "她正在寫一本新小說。",
    "vocabIndex": 1
  },
  {
    "q": "He likes to eat ______.【堅果】",
    "options": [
      "overpass",
      "ox",
      "nuts",
      "onion"
    ],
    "answer": 2,
    "cn": "他喜歡吃堅果。",
    "vocabIndex": 2
  },
  {
    "q": "Dogs are trained to ______ commands.【服從，遵守】",
    "options": [
      "omit",
      "obey",
      "offered",
      "bathe"
    ],
    "answer": 1,
    "cn": "狗被訓練服從命令。",
    "vocabIndex": 3
  },
  {
    "q": "The ______ on the table is a rare artifact.【物體，目標】",
    "options": [
      "oven",
      "novel",
      "object",
      "onion"
    ],
    "answer": 2,
    "cn": "桌上的物體是一件罕見的文物。",
    "vocabIndex": 4
  },
  {
    "q": "They sailed across the ______.【海洋】",
    "options": [
      "pain",
      "operation",
      "oven",
      "ocean"
    ],
    "answer": 3,
    "cn": "他們航行穿越了海洋。",
    "vocabIndex": 5
  },
  {
    "q": "He ______ to help with the work.【提供，提議】",
    "options": [
      "offered",
      "omit",
      "obey",
      "dialed"
    ],
    "answer": 0,
    "cn": "他提出幫助工作。",
    "vocabIndex": 6
  },
  {
    "q": "You can ______ the last question.【省略，忽略】",
    "options": [
      "obey",
      "omit",
      "offered",
      "design"
    ],
    "answer": 1,
    "cn": "你可以省略最後一個問題。",
    "vocabIndex": 7
  },
  {
    "q": "It is important to take care of ______.【自己】",
    "options": [
      "none",
      "pronounce",
      "oneself",
      "rush"
    ],
    "answer": 2,
    "cn": "照顧好自己很重要。",
    "vocabIndex": 8
  },
  {
    "q": "She chopped an ______.【洋蔥】",
    "options": [
      "opinion",
      "ocean",
      "object",
      "onion"
    ],
    "answer": 3,
    "cn": "她切了一個洋蔥。",
    "vocabIndex": 9
  },
  {
    "q": "The ______ was successful.【操作，手術】",
    "options": [
      "operation",
      "ocean",
      "novel",
      "ox"
    ],
    "answer": 0,
    "cn": "手術很成功。",
    "vocabIndex": 10
  },
  {
    "q": "She asked for his ______.【意見，看法】",
    "options": [
      "ox",
      "opinion",
      "oven",
      "owner"
    ],
    "answer": 1,
    "cn": "她徵求他的意見。",
    "vocabIndex": 11
  },
  {
    "q": "He is just an ______ person.【普通的，平凡的】",
    "options": [
      "overweight",
      "total",
      "latter",
      "ordinary"
    ],
    "answer": 3,
    "cn": "他只是一個普通人。",
    "vocabIndex": 12
  },
  {
    "q": "She baked the cake in the ______.【烤箱】",
    "options": [
      "oven",
      "ox",
      "object",
      "novel"
    ],
    "answer": 0,
    "cn": "她在烤箱裡烤蛋糕。",
    "vocabIndex": 13
  },
  {
    "q": "They crossed the street using the ______.【天橋】",
    "options": [
      "nuts",
      "onion",
      "overpass",
      "object"
    ],
    "answer": 2,
    "cn": "他們用天橋過街。",
    "vocabIndex": 14
  },
  {
    "q": "He plans to study ______.【海外，國外】",
    "options": [
      "besides",
      "overseas",
      "downstairs",
      "nearly"
    ],
    "answer": 1,
    "cn": "他計劃去國外學習。",
    "vocabIndex": 15
  },
  {
    "q": "The doctor advised him to lose weight because he is ______.【超重的，過重的】",
    "options": [
      "overweight",
      "ordinary",
      "energetic",
      "necessary"
    ],
    "answer": 0,
    "cn": "醫生建議他減肥，因為他超重。",
    "vocabIndex": 16
  },
  {
    "q": "She is the ______ of the restaurant.【所有者】",
    "options": [
      "ox",
      "object",
      "onion",
      "owner"
    ],
    "answer": 3,
    "cn": "她是這家餐廳的所有者。",
    "vocabIndex": 17
  },
  {
    "q": "The ______ pulled the cart.【牛，公牛】",
    "options": [
      "novel",
      "opinion",
      "ox",
      "ocean"
    ],
    "answer": 2,
    "cn": "牛拉了車。",
    "vocabIndex": 18
  },
  {
    "q": "He felt a sharp ______ in his back.【疼痛】",
    "options": [
      "opinion",
      "pain",
      "operation",
      "ox"
    ],
    "answer": 1,
    "cn": "他感到背部劇烈疼痛。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "bathe": {
    "pos": "v.",
    "en_def": "to wash your body in a bath",
    "cn_def": "洗澡"
  },
  "besides": {
    "pos": "adv.",
    "en_def": "in addition to",
    "cn_def": "除了...之外"
  },
  "design": {
    "pos": "v.",
    "en_def": "to plan and draw how something will look",
    "cn_def": "設計，構思"
  },
  "dialed": {
    "pos": "v.",
    "en_def": "to press the numbers on a phone to call someone",
    "cn_def": "撥號"
  },
  "downstairs": {
    "pos": "adv.",
    "en_def": "on or to a lower floor of a building",
    "cn_def": "在樓下"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "very active; full of energy",
    "cn_def": "精力充沛的"
  },
  "latter": {
    "pos": "adj.",
    "en_def": "nearer to the end; the second of two",
    "cn_def": "後者的，較後的"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost",
    "cn_def": "幾乎，差不多"
  },
  "necessary": {
    "pos": "adj.",
    "en_def": "needed; that you must have or do",
    "cn_def": "必要的"
  },
  "none": {
    "pos": "pron.",
    "en_def": "not any; not one",
    "cn_def": "沒有一個"
  },
  "novel": {
    "pos": "n.",
    "en_def": "a long story in a book about people who are not real",
    "cn_def": "小說"
  },
  "nuts": {
    "pos": "n.",
    "en_def": "a hard dry fruit with a shell, like a peanut",
    "cn_def": "堅果"
  },
  "obey": {
    "pos": "v.",
    "en_def": "to do what someone tells you to do",
    "cn_def": "服從，遵守"
  },
  "object": {
    "pos": "n.",
    "en_def": "a thing that you can see and touch",
    "cn_def": "物體，目標"
  },
  "ocean": {
    "pos": "n.",
    "en_def": "a very big sea",
    "cn_def": "海洋"
  },
  "offered": {
    "pos": "v.",
    "en_def": "to say that you will do something for someone or give them something",
    "cn_def": "提供，提議"
  },
  "omit": {
    "pos": "v.",
    "en_def": "to leave something out",
    "cn_def": "省略，忽略"
  },
  "oneself": {
    "pos": "pron.",
    "en_def": "a person's own self",
    "cn_def": "自己"
  },
  "onion": {
    "pos": "n.",
    "en_def": "a round vegetable with a strong smell that can make you cry",
    "cn_def": "洋蔥"
  },
  "operation": {
    "pos": "n.",
    "en_def": "when a doctor cuts into a body to fix something inside",
    "cn_def": "操作，手術"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think about something",
    "cn_def": "意見，看法"
  },
  "ordinary": {
    "pos": "adj.",
    "en_def": "normal; not special",
    "cn_def": "普通的，平凡的"
  },
  "oven": {
    "pos": "n.",
    "en_def": "the box-shaped part of a stove where you bake food",
    "cn_def": "烤箱"
  },
  "overpass": {
    "pos": "n.",
    "en_def": "a bridge that takes a road or path over another road",
    "cn_def": "天橋"
  },
  "overseas": {
    "pos": "adv.",
    "en_def": "in or to a country across the sea",
    "cn_def": "海外，國外"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "too heavy or fat",
    "cn_def": "超重的，過重的"
  },
  "owner": {
    "pos": "n.",
    "en_def": "the person that something belongs to",
    "cn_def": "所有者"
  },
  "ox": {
    "pos": "n.",
    "en_def": "a big, strong male cow that pulls heavy things",
    "cn_def": "牛，公牛"
  },
  "pain": {
    "pos": "n.",
    "en_def": "the feeling you have when part of your body hurts",
    "cn_def": "疼痛"
  },
  "pollute": {
    "pos": "v.",
    "en_def": "to make air, water, or land dirty",
    "cn_def": "污染"
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word or letter",
    "cn_def": "發音，宣佈"
  },
  "rush": {
    "pos": "v.",
    "en_def": "to go or do something very quickly",
    "cn_def": "衝，趕緊"
  },
  "steam": {
    "pos": "n.",
    "en_def": "the hot white gas that comes from boiling water",
    "cn_def": "蒸汽"
  },
  "total": {
    "pos": "adj.",
    "en_def": "with everything added together",
    "cn_def": "總的，全部的"
  }
};

const EXTRA_GLOSSES = {};
