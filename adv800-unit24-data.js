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
    "q": "______ of the students could answer the question. It was too hard for all thirty of them.",
    "options": [
      "Oneself",
      "None",
      "Neither",
      "Nearly"
    ],
    "answer": 1,
    "cn": "沒有一個學生知道答案。",
    "vocabIndex": 0
  },
  {
    "q": "I am reading a long ______. The story is about a boy who can do magic.",
    "options": [
      "nut",
      "onion",
      "oven",
      "novel"
    ],
    "answer": 3,
    "cn": "她正在寫一本新小說。",
    "vocabIndex": 1
  },
  {
    "q": "Squirrels love to eat ______. They break the hard shells with their teeth.",
    "options": [
      "nuts",
      "novels",
      "ovens",
      "objects"
    ],
    "answer": 0,
    "cn": "他喜歡吃堅果。",
    "vocabIndex": 2
  },
  {
    "q": "Students must ______ the school rules. They can't be late or fight.",
    "options": [
      "offer",
      "omit",
      "obey",
      "pardon"
    ],
    "answer": 2,
    "cn": "狗被訓練服從命令。",
    "vocabIndex": 3
  },
  {
    "q": "What is that strange ______ in the sky? Is it a bird or a plane?",
    "options": [
      "opinion",
      "onion",
      "owner",
      "object"
    ],
    "answer": 3,
    "cn": "桌上的物體是一件罕見的文物。",
    "vocabIndex": 4
  },
  {
    "q": "The Pacific ______ is the biggest sea in the world.",
    "options": [
      "Oven",
      "ocean",
      "Onion",
      "Object"
    ],
    "answer": 1,
    "cn": "他們航行穿越了海洋。",
    "vocabIndex": 5
  },
  {
    "q": "The young man ______ his seat to an old woman on the bus.",
    "options": [
      "offered",
      "obeyed",
      "omitted",
      "paused"
    ],
    "answer": 0,
    "cn": "他提出幫助工作。",
    "vocabIndex": 6
  },
  {
    "q": "Don't ______ any words when you copy the sentence. Write every one of them.",
    "options": [
      "obey",
      "offer",
      "omit",
      "pardon"
    ],
    "answer": 2,
    "cn": "你可以省略最後一個問題。",
    "vocabIndex": 7
  },
  {
    "q": "It is hard to see ______ as others do.",
    "options": [
      "oneself",
      "none",
      "neither",
      "nobody"
    ],
    "answer": 0,
    "cn": "照顧好自己很重要。",
    "vocabIndex": 8
  },
  {
    "q": "Cutting an ______ always makes me cry.",
    "options": [
      "oven",
      "onion",
      "ox",
      "object"
    ],
    "answer": 1,
    "cn": "她切了一個洋蔥。",
    "vocabIndex": 9
  },
  {
    "q": "The doctor did an ______ on my grandfather's heart. It took six hours.",
    "options": [
      "opinion",
      "onion",
      "operation",
      "owner"
    ],
    "answer": 2,
    "cn": "手術很成功。",
    "vocabIndex": 10
  },
  {
    "q": "In my ______, this is the best restaurant in town. What do you think?",
    "options": [
      "operation",
      "onion",
      "oven",
      "opinion"
    ],
    "answer": 3,
    "cn": "她徵求他的意見。",
    "vocabIndex": 11
  },
  {
    "q": "It was just an ______ day. Nothing special happened.",
    "options": [
      "ordinary",
      "overweight",
      "overseas",
      "pale"
    ],
    "answer": 0,
    "cn": "他只是一個普通人。",
    "vocabIndex": 12
  },
  {
    "q": "She put the cake in the ______ and baked it for forty minutes.",
    "options": [
      "onion",
      "oven",
      "ocean",
      "object"
    ],
    "answer": 1,
    "cn": "她在烤箱裡烤蛋糕。",
    "vocabIndex": 13
  },
  {
    "q": "Don't run across the busy road. Use the ______ and walk over the cars.",
    "options": [
      "oven",
      "onion",
      "owner",
      "overpass"
    ],
    "answer": 3,
    "cn": "他們用天橋過街。",
    "vocabIndex": 14
  },
  {
    "q": "My brother works ______. He has lived in Japan for five years.",
    "options": [
      "downstairs",
      "everywhere",
      "overseas",
      "hardly"
    ],
    "answer": 2,
    "cn": "他計劃去國外學習。",
    "vocabIndex": 15
  },
  {
    "q": "The doctor says my dog is ______. It weighs too much and needs more exercise.",
    "options": [
      "ordinary",
      "overweight",
      "painful",
      "pale"
    ],
    "answer": 1,
    "cn": "醫生建議他減肥，因為他超重。",
    "vocabIndex": 16
  },
  {
    "q": "Who is the ______ of this car? It is parked in front of my door.",
    "options": [
      "onion",
      "oven",
      "ocean",
      "owner"
    ],
    "answer": 3,
    "cn": "她是這家餐廳的所有者。",
    "vocabIndex": 17
  },
  {
    "q": "The farmer used an ______ to pull the cart. It is a big, strong animal like a cow.",
    "options": [
      "ox",
      "oven",
      "onion",
      "owner"
    ],
    "answer": 0,
    "cn": "牛拉了車。",
    "vocabIndex": 18
  },
  {
    "q": "I have a ______ in my back. It hurts when I sit down.",
    "options": [
      "novel",
      "nut",
      "pain",
      "owner"
    ],
    "answer": 2,
    "cn": "他感到背部劇烈疼痛。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "oneself": {
    "pos": "pron.",
    "en_def": "a person's own self",
    "cn_def": "自己"
  },
  "none": {
    "pos": "pron.",
    "en_def": "not any; not one",
    "cn_def": "沒有一個"
  },
  "neither": {
    "pos": "adv.",
    "en_def": "not one and not the other of two",
    "cn_def": "也不，既不"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost",
    "cn_def": "幾乎，差不多"
  },
  "nut": {
    "pos": "n.",
    "en_def": "a hard dry fruit with a shell, like a peanut",
    "cn_def": "堅果"
  },
  "onion": {
    "pos": "n.",
    "en_def": "a round vegetable with a strong smell that can make you cry",
    "cn_def": "洋蔥"
  },
  "oven": {
    "pos": "n.",
    "en_def": "the box-shaped part of a stove where you bake food",
    "cn_def": "烤箱"
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
  "novels": {
    "pos": "n.",
    "en_def": "a long story in a book about people who are not real",
    "cn_def": "小說"
  },
  "ovens": {
    "pos": "n.",
    "en_def": "the box-shaped part of a stove where you bake food",
    "cn_def": "烤箱"
  },
  "objects": {
    "pos": "n.",
    "en_def": "a thing that you can see and touch",
    "cn_def": "物體，目標"
  },
  "offer": {
    "pos": "v.",
    "en_def": "to say that you will do something for someone or give them something",
    "cn_def": "提供，提議"
  },
  "omit": {
    "pos": "v.",
    "en_def": "to leave something out",
    "cn_def": "省略，忽略"
  },
  "obey": {
    "pos": "v.",
    "en_def": "to do what someone tells you to do",
    "cn_def": "服從，遵守"
  },
  "pardon": {
    "pos": "v.",
    "en_def": "to forgive someone",
    "cn_def": "原諒，寬恕"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think about something",
    "cn_def": "意見，看法"
  },
  "owner": {
    "pos": "n.",
    "en_def": "the person that something belongs to",
    "cn_def": "所有者"
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
  "obeyed": {
    "pos": "v.",
    "en_def": "to do what someone tells you to do",
    "cn_def": "服從，遵守"
  },
  "omitted": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "省略"
  },
  "paused": {
    "pos": "v.",
    "en_def": "to stop for a short time",
    "cn_def": "暫停，中止"
  },
  "nobody": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "沒有人"
  },
  "ox": {
    "pos": "n.",
    "en_def": "a big, strong male cow that pulls heavy things",
    "cn_def": "牛，公牛"
  },
  "operation": {
    "pos": "n.",
    "en_def": "when a doctor cuts into a body to fix something inside",
    "cn_def": "操作，手術"
  },
  "ordinary": {
    "pos": "adj.",
    "en_def": "normal; not special",
    "cn_def": "普通的，平凡的"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "too heavy or fat",
    "cn_def": "超重的，過重的"
  },
  "overseas": {
    "pos": "adv.",
    "en_def": "in or to a country across the sea",
    "cn_def": "海外，國外"
  },
  "pale": {
    "pos": "adj.",
    "en_def": "having a light or white face, often because you are sick",
    "cn_def": "蒼白的，淡色的"
  },
  "overpass": {
    "pos": "n.",
    "en_def": "a bridge that takes a road or path over another road",
    "cn_def": "天橋"
  },
  "downstairs": {
    "pos": "adv.",
    "en_def": "on or to a lower floor of a building",
    "cn_def": "在樓下"
  },
  "everywhere": {
    "pos": "adv.",
    "en_def": "in all places",
    "cn_def": "到處"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
  },
  "painful": {
    "pos": "adj.",
    "en_def": "making you feel pain or very sad",
    "cn_def": "痛苦的，疼痛的"
  },
  "pain": {
    "pos": "n.",
    "en_def": "the feeling you have when part of your body hurts",
    "cn_def": "疼痛"
  }
};

const EXTRA_GLOSSES = {};
