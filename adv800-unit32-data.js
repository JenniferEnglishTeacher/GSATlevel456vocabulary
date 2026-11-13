// Unit 32 Quiz Data: sincere – society
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U32 - sincere – society",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的，誠懇的",
    "en_def": "really meaning what you say; honest",
    "sentence": "He gave a {{BLANK}} apology.",
    "cn": "他真誠地道歉。"
  },
  {
    "word": "single",
    "pos": "adj.",
    "cn_def": "單一的，單身的",
    "en_def": "not married; only one",
    "sentence": "She is a {{BLANK}} mother.",
    "cn": "她是一位單親媽媽。"
  },
  {
    "word": "sink",
    "pos": "v.",
    "cn_def": "下沉，沉沒",
    "en_def": "to go down under water",
    "sentence": "The boat began to {{BLANK}}.",
    "cn": "船開始下沉。"
  },
  {
    "word": "skate",
    "pos": "v.",
    "cn_def": "滑冰，溜冰",
    "en_def": "to move on ice wearing special shoes",
    "sentence": "They like to {{BLANK}} in the winter.",
    "cn": "他們喜歡冬天滑冰。"
  },
  {
    "word": "ski",
    "pos": "v.",
    "cn_def": "滑雪",
    "en_def": "to move over snow on two long, thin boards",
    "sentence": "He went {{BLANK}} in the mountains.",
    "cn": "他去山上滑雪。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能，本領",
    "en_def": "something that you can do well because you have practiced",
    "sentence": "She has great culinary {{BLANK}}.",
    "cn": "她有很棒的烹飪技能。",
    "alts": [
      "skill"
    ]
  },
  {
    "word": "skillful",
    "pos": "adj.",
    "cn_def": "熟練的，靈巧的",
    "en_def": "good at doing something",
    "sentence": "He is very {{BLANK}} with his hands.",
    "cn": "他的手很靈巧。"
  },
  {
    "word": "skin",
    "pos": "n.",
    "cn_def": "皮膚，外皮",
    "en_def": "the outside cover of your body",
    "sentence": "She has fair {{BLANK}}.",
    "cn": "她的皮膚很白皙。"
  },
  {
    "word": "skinny",
    "pos": "adj.",
    "cn_def": "瘦的，皮包骨的",
    "en_def": "very thin",
    "sentence": "The stray dog looked very {{BLANK}}.",
    "cn": "那隻流浪狗看起來很瘦。"
  },
  {
    "word": "sleepy",
    "pos": "adj.",
    "cn_def": "想睡的，困倦的",
    "en_def": "tired and wanting to sleep",
    "sentence": "She felt {{BLANK}} after the long day.",
    "cn": "經過漫長的一天，她感到很困倦。"
  },
  {
    "word": "slender",
    "pos": "adj.",
    "cn_def": "苗條的，纖細的",
    "en_def": "thin in a nice way",
    "sentence": "She has a {{BLANK}} figure.",
    "cn": "她的身材很苗條。"
  },
  {
    "word": "slice",
    "pos": "n.",
    "cn_def": "薄片，切片",
    "en_def": "a thin flat piece cut from something",
    "sentence": "She cut the bread into thick {{BLANK}}.",
    "cn": "她把麵包切成厚片。"
  },
  {
    "word": "slippers",
    "pos": "n.",
    "cn_def": "拖鞋",
    "en_def": "soft shoes that you wear inside the house",
    "sentence": "She wore {{BLANK}} around the house.",
    "cn": "她在家裡穿拖鞋。"
  },
  {
    "word": "snail",
    "pos": "n.",
    "cn_def": "蝸牛",
    "en_def": "a small animal with a shell on its back that moves very slowly",
    "sentence": "The {{BLANK}} moved slowly across the ground.",
    "cn": "蝸牛慢慢地在地上爬行。"
  },
  {
    "word": "sneakers",
    "pos": "n.",
    "cn_def": "運動鞋，球鞋",
    "en_def": "soft shoes for running and sports",
    "sentence": "He bought a new pair of {{BLANK}}.",
    "cn": "他買了一雙新運動鞋。"
  },
  {
    "word": "sneaky",
    "pos": "adj.",
    "cn_def": "鬼鬼祟祟的，偷偷摸摸的",
    "en_def": "doing things in a secret way that is not honest",
    "sentence": "He took a {{BLANK}} glance at the answers.",
    "cn": "他偷偷看了一眼答案。"
  },
  {
    "word": "snowman",
    "pos": "n.",
    "cn_def": "雪人",
    "en_def": "a figure of a person made of snow",
    "sentence": "The children built a {{BLANK}} in the yard.",
    "cn": "孩子們在院子裡堆了一個雪人。"
  },
  {
    "word": "soap",
    "pos": "n.",
    "cn_def": "肥皂",
    "en_def": "something that you use with water to wash your hands and body",
    "sentence": "She washed her hands with {{BLANK}}.",
    "cn": "她用肥皂洗手。"
  },
  {
    "word": "social",
    "pos": "adj.",
    "cn_def": "社會的，社交的",
    "en_def": "liking to be with other people",
    "sentence": "He is very {{BLANK}} and enjoys meeting new people.",
    "cn": "他很擅長社交，喜歡結識新朋友。"
  },
  {
    "word": "society",
    "pos": "n.",
    "cn_def": "社會",
    "en_def": "all the people who live together in a country or area",
    "sentence": "They studied the structure of {{BLANK}}.",
    "cn": "他們研究社會結構。"
  }
];

const MCQS = [
  {
    "q": "His apology was ______. He really felt sorry for what he did.",
    "options": [
      "single",
      "skinny",
      "sleepy",
      "sincere"
    ],
    "answer": 3,
    "cn": "他真誠地道歉。",
    "vocabIndex": 0
  },
  {
    "q": "My uncle is forty and still ______. He doesn't have a wife.",
    "options": [
      "sincere",
      "single",
      "sleepy",
      "skillful"
    ],
    "answer": 1,
    "cn": "她是一位單親媽媽。",
    "vocabIndex": 1
  },
  {
    "q": "A stone will ______ in water, but a piece of wood won't.",
    "options": [
      "skate",
      "ski",
      "sink",
      "solve"
    ],
    "answer": 2,
    "cn": "船開始下沉。",
    "vocabIndex": 2
  },
  {
    "q": "In winter, the lake turns to ice, and children ______ on it.",
    "options": [
      "skate",
      "sink",
      "solve",
      "steal"
    ],
    "answer": 0,
    "cn": "他們喜歡冬天滑冰。",
    "vocabIndex": 3
  },
  {
    "q": "We went ______ in the snowy mountains of Japan last winter.",
    "options": [
      "sinking",
      "skiing",
      "solving",
      "stealing"
    ],
    "answer": 1,
    "cn": "他去山上滑雪。",
    "vocabIndex": 4
  },
  {
    "q": "Reading and writing are important ______. Students learn them at school.",
    "options": [
      "slices",
      "snails",
      "slippers",
      "skills"
    ],
    "answer": 3,
    "cn": "她有很棒的烹飪技能。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ cook can cut vegetables very fast and make beautiful dishes.",
    "options": [
      "skillful",
      "sleepy",
      "single",
      "social"
    ],
    "answer": 0,
    "cn": "他的手很靈巧。",
    "vocabIndex": 6
  },
  {
    "q": "The baby's ______ is very soft. Too much sun is bad for it.",
    "options": [
      "slice",
      "soap",
      "skin",
      "snail"
    ],
    "answer": 2,
    "cn": "她的皮膚很白皙。",
    "vocabIndex": 7
  },
  {
    "q": "The street dog is ______ because it doesn't get enough food. You can see its bones.",
    "options": [
      "skinny",
      "sleepy",
      "sincere",
      "social"
    ],
    "answer": 0,
    "cn": "那隻流浪狗看起來很瘦。",
    "vocabIndex": 8
  },
  {
    "q": "I went to bed very late last night, so I feel ______ now. I can't keep my eyes open.",
    "options": [
      "skinny",
      "sleepy",
      "single",
      "sincere"
    ],
    "answer": 1,
    "cn": "經過漫長的一天，她感到很困倦。",
    "vocabIndex": 9
  },
  {
    "q": "The dancer has long, ______ legs. She looks beautiful on the stage.",
    "options": [
      "sleepy",
      "sincere",
      "sneaky",
      "slender"
    ],
    "answer": 3,
    "cn": "她的身材很苗條。",
    "vocabIndex": 10
  },
  {
    "q": "Would you like a ______ of pizza? I cut it into eight.",
    "options": [
      "snail",
      "soap",
      "slice",
      "skin"
    ],
    "answer": 2,
    "cn": "她把麵包切成厚片。",
    "vocabIndex": 11
  },
  {
    "q": "Take off your shoes and put on these ______. We wear them inside the house.",
    "options": [
      "slippers",
      "sneakers",
      "snails",
      "slices"
    ],
    "answer": 0,
    "cn": "她在家裡穿拖鞋。",
    "vocabIndex": 12
  },
  {
    "q": "A ______ carries its shell on its back and moves very slowly.",
    "options": [
      "slice",
      "snail",
      "soap",
      "snowman"
    ],
    "answer": 1,
    "cn": "蝸牛慢慢地在地上爬行。",
    "vocabIndex": 13
  },
  {
    "q": "You need a pair of ______ for PE class. You can't run in those shoes.",
    "options": [
      "slippers",
      "snails",
      "sneakers",
      "slices"
    ],
    "answer": 2,
    "cn": "他買了一雙新運動鞋。",
    "vocabIndex": 14
  },
  {
    "q": "The ______ boy took a cookie when his mother was not looking.",
    "options": [
      "sincere",
      "sleepy",
      "social",
      "sneaky"
    ],
    "answer": 3,
    "cn": "他偷偷看了一眼答案。",
    "vocabIndex": 15
  },
  {
    "q": "The children made a ______ in the yard. They gave it a carrot for a nose.",
    "options": [
      "snowman",
      "snail",
      "slice",
      "soap"
    ],
    "answer": 0,
    "cn": "孩子們在院子裡堆了一個雪人。",
    "vocabIndex": 16
  },
  {
    "q": "Wash your hands with ______ and water before you eat.",
    "options": [
      "skin",
      "soap",
      "slice",
      "snail"
    ],
    "answer": 1,
    "cn": "她用肥皂洗手。",
    "vocabIndex": 17
  },
  {
    "q": "Amy is very ______. She loves meeting new people and going to parties.",
    "options": [
      "sleepy",
      "single",
      "skinny",
      "social"
    ],
    "answer": 3,
    "cn": "他很擅長社交，喜歡結識新朋友。",
    "vocabIndex": 18
  },
  {
    "q": "We should all work together to make our ______ a better place to live.",
    "options": [
      "soap",
      "slice",
      "society",
      "skin"
    ],
    "answer": 2,
    "cn": "他們研究社會結構。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "single": {
    "pos": "adj.",
    "en_def": "not married; only one",
    "cn_def": "單一的，單身的"
  },
  "skinny": {
    "pos": "adj.",
    "en_def": "very thin",
    "cn_def": "瘦的，皮包骨的"
  },
  "sleepy": {
    "pos": "adj.",
    "en_def": "tired and wanting to sleep",
    "cn_def": "想睡的，困倦的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "really meaning what you say; honest",
    "cn_def": "真誠的，誠懇的"
  },
  "skillful": {
    "pos": "adj.",
    "en_def": "good at doing something",
    "cn_def": "熟練的，靈巧的"
  },
  "skate": {
    "pos": "v.",
    "en_def": "to move on ice wearing special shoes",
    "cn_def": "滑冰，溜冰"
  },
  "ski": {
    "pos": "v.",
    "en_def": "to move over snow on two long, thin boards",
    "cn_def": "滑雪"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down under water",
    "cn_def": "下沉，沉沒"
  },
  "solve": {
    "pos": "v.",
    "en_def": "to find the answer to a problem",
    "cn_def": "解決，解答"
  },
  "steal": {
    "pos": "v.",
    "en_def": "to take something that is not yours",
    "cn_def": "偷竊，盜取"
  },
  "sinking": {
    "pos": "v.",
    "en_def": "to go down under water",
    "cn_def": "下沉，沉沒"
  },
  "skiing": {
    "pos": "v.",
    "en_def": "to move over snow on two long, thin boards",
    "cn_def": "滑雪"
  },
  "solving": {
    "pos": "v.",
    "en_def": "to find the answer to a problem",
    "cn_def": "解決，解答"
  },
  "stealing": {
    "pos": "v.",
    "en_def": "to take something that is not yours",
    "cn_def": "偷竊，盜取"
  },
  "slices": {
    "pos": "n.",
    "en_def": "a thin flat piece cut from something",
    "cn_def": "薄片，切片"
  },
  "snails": {
    "pos": "n.",
    "en_def": "a small animal with a shell on its back that moves very slowly",
    "cn_def": "蝸牛"
  },
  "slippers": {
    "pos": "n.",
    "en_def": "soft shoes that you wear inside the house",
    "cn_def": "拖鞋"
  },
  "skills": {
    "pos": "n.",
    "en_def": "something that you can do well because you have practiced",
    "cn_def": "技能，本領"
  },
  "social": {
    "pos": "adj.",
    "en_def": "liking to be with other people",
    "cn_def": "社會的，社交的"
  },
  "slice": {
    "pos": "n.",
    "en_def": "a thin flat piece cut from something",
    "cn_def": "薄片，切片"
  },
  "soap": {
    "pos": "n.",
    "en_def": "something that you use with water to wash your hands and body",
    "cn_def": "肥皂"
  },
  "skin": {
    "pos": "n.",
    "en_def": "the outside cover of your body",
    "cn_def": "皮膚，外皮"
  },
  "snail": {
    "pos": "n.",
    "en_def": "a small animal with a shell on its back that moves very slowly",
    "cn_def": "蝸牛"
  },
  "sneaky": {
    "pos": "adj.",
    "en_def": "doing things in a secret way that is not honest",
    "cn_def": "鬼鬼祟祟的，偷偷摸摸的"
  },
  "slender": {
    "pos": "adj.",
    "en_def": "thin in a nice way",
    "cn_def": "苗條的，纖細的"
  },
  "sneakers": {
    "pos": "n.",
    "en_def": "soft shoes for running and sports",
    "cn_def": "運動鞋，球鞋"
  },
  "snowman": {
    "pos": "n.",
    "en_def": "a figure of a person made of snow",
    "cn_def": "雪人"
  },
  "society": {
    "pos": "n.",
    "en_def": "all the people who live together in a country or area",
    "cn_def": "社會"
  }
};

const EXTRA_GLOSSES = {};
