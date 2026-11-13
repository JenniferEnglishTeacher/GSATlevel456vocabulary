// Unit 23 Quiz Data: movement – nod
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U23 - movement – nod",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "movement",
    "pos": "n.",
    "cn_def": "運動，動作",
    "en_def": "the way someone or something moves",
    "sentence": "The {{BLANK}} of the dancers was graceful.",
    "cn": "舞者的動作很優美。"
  },
  {
    "word": "MRT",
    "pos": "n.",
    "cn_def": "地鐵",
    "en_def": "the fast train system in a city like Taipei",
    "sentence": "They took the {{BLANK}} to get to the city center.",
    "cn": "他們乘地鐵去市中心。"
  },
  {
    "word": "musician",
    "pos": "n.",
    "cn_def": "音樂家，樂師",
    "en_def": "a person who plays or writes music",
    "sentence": "He is a talented {{BLANK}}.",
    "cn": "他是一位有才華的音樂家。"
  },
  {
    "word": "napkin",
    "pos": "n.",
    "cn_def": "餐巾",
    "en_def": "a piece of cloth or paper for cleaning your mouth and hands at meals",
    "sentence": "She placed a {{BLANK}} on her lap before eating.",
    "cn": "她在吃飯前把餐巾放在腿上。"
  },
  {
    "word": "narrow",
    "pos": "adj.",
    "cn_def": "狹窄的，有限的",
    "en_def": "not wide",
    "sentence": "The path was very {{BLANK}}.",
    "cn": "這條路很狹窄。"
  },
  {
    "word": "nation",
    "pos": "n.",
    "cn_def": "國家",
    "en_def": "a country and its people",
    "sentence": "They are proud of their {{BLANK}}.",
    "cn": "他們為自己的國家感到自豪。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的，天然的",
    "en_def": "from nature; not made by people",
    "sentence": "She prefers to use {{BLANK}} ingredients.",
    "cn": "她喜歡使用天然成分。"
  },
  {
    "word": "naughty",
    "pos": "adj.",
    "cn_def": "淘氣的，不聽話的",
    "en_def": "(of a child) behaving badly",
    "sentence": "The child was very {{BLANK}}.",
    "cn": "這個孩子很淘氣。"
  },
  {
    "word": "nearly",
    "pos": "adv.",
    "cn_def": "幾乎，差不多",
    "en_def": "almost",
    "sentence": "It is {{BLANK}} time to go.",
    "cn": "差不多該走了。"
  },
  {
    "word": "necessary",
    "pos": "adj.",
    "cn_def": "必要的",
    "en_def": "needed; that you must have or do",
    "sentence": "It is {{BLANK}} to drink water every day.",
    "cn": "每天喝水是必要的。"
  },
  {
    "word": "necklace",
    "pos": "n.",
    "cn_def": "項鍊",
    "en_def": "a pretty chain that you wear around your neck",
    "sentence": "She wore a beautiful {{BLANK}}.",
    "cn": "她戴了一條漂亮的項鍊。"
  },
  {
    "word": "needle",
    "pos": "n.",
    "cn_def": "針",
    "en_def": "a thin, sharp piece of metal, used for sewing or in a record player",
    "sentence": "The {{BLANK}} on the record player is broken.",
    "cn": "唱片機的針壞了。"
  },
  {
    "word": "negative",
    "pos": "adj.",
    "cn_def": "否定的，消極的",
    "en_def": "seeing only the bad side; saying \"no\"",
    "sentence": "He had a {{BLANK}} attitude towards the project.",
    "cn": "他對這個專案持消極態度。"
  },
  {
    "word": "neither",
    "pos": "adv.",
    "cn_def": "也不，既不",
    "en_def": "not one and not the other of two",
    "sentence": "{{BLANK}} of the answers is correct.",
    "cn": "這兩個答案都不正確。"
  },
  {
    "word": "nephew",
    "pos": "n.",
    "cn_def": "姪子，外甥",
    "en_def": "the son of your brother or sister",
    "sentence": "She bought a gift for her {{BLANK}}.",
    "cn": "她為她的姪子買了一份禮物。"
  },
  {
    "word": "nervous",
    "pos": "adj.",
    "cn_def": "緊張的，不安的",
    "en_def": "worried and a little afraid",
    "sentence": "She felt {{BLANK}} before the exam.",
    "cn": "她考試前感到緊張。"
  },
  {
    "word": "nest",
    "pos": "n.",
    "cn_def": "巢，窩",
    "en_def": "the home a bird makes for its eggs",
    "sentence": "The bird built a {{BLANK}} in the tree.",
    "cn": "鳥在樹上築了一個巢。"
  },
  {
    "word": "net",
    "pos": "n.",
    "cn_def": "網",
    "en_def": "material with many holes, used for catching fish",
    "sentence": "He caught a fish with a {{BLANK}}.",
    "cn": "他用網抓了一條魚。"
  },
  {
    "word": "niece",
    "pos": "n.",
    "cn_def": "姪女，外甥女",
    "en_def": "the daughter of your brother or sister",
    "sentence": "She took her {{BLANK}} to the zoo.",
    "cn": "她帶她的姪女去動物園。"
  },
  {
    "word": "nod",
    "pos": "v.",
    "cn_def": "點頭，打瞌睡",
    "en_def": "to move your head up and down to say \"yes\"",
    "sentence": "She {{BLANK}} in agreement.",
    "cn": "她點頭表示同意。"
  }
];

const MCQS = [
  {
    "q": "The dancer's every ______ was beautiful. She moved her arms like a bird.",
    "options": [
      "movement",
      "nation",
      "necklace",
      "needle"
    ],
    "answer": 0,
    "cn": "舞者的動作很優美。",
    "vocabIndex": 0
  },
  {
    "q": "I take the ______ to work every day. The trains come every five minutes.",
    "options": [
      "nest",
      "net",
      "necklace",
      "MRT"
    ],
    "answer": 3,
    "cn": "他們乘地鐵去市中心。",
    "vocabIndex": 1
  },
  {
    "q": "Jay Chou is a famous ______. He writes songs and plays the piano.",
    "options": [
      "nephew",
      "niece",
      "musician",
      "napkin"
    ],
    "answer": 2,
    "cn": "他是一位有才華的音樂家。",
    "vocabIndex": 2
  },
  {
    "q": "He cleaned his mouth with a ______ after eating the hamburger.",
    "options": [
      "needle",
      "napkin",
      "necklace",
      "nest"
    ],
    "answer": 1,
    "cn": "她在吃飯前把餐巾放在腿上。",
    "vocabIndex": 3
  },
  {
    "q": "The street is too ______ for a bus. Only bikes and small cars can go through it.",
    "options": [
      "narrow",
      "natural",
      "naughty",
      "nervous"
    ],
    "answer": 0,
    "cn": "這條路很狹窄。",
    "vocabIndex": 4
  },
  {
    "q": "The whole ______ was happy when its team won the gold medal.",
    "options": [
      "napkin",
      "nation",
      "needle",
      "net"
    ],
    "answer": 1,
    "cn": "他們為自己的國家感到自豪。",
    "vocabIndex": 5
  },
  {
    "q": "This juice is ______. Nothing is added to the fresh fruit.",
    "options": [
      "narrow",
      "naughty",
      "nervous",
      "natural"
    ],
    "answer": 3,
    "cn": "她喜歡使用天然成分。",
    "vocabIndex": 6
  },
  {
    "q": "The ______ boy drew on the wall and broke two cups. His mother was angry.",
    "options": [
      "narrow",
      "natural",
      "naughty",
      "negative"
    ],
    "answer": 2,
    "cn": "這個孩子很淘氣。",
    "vocabIndex": 7
  },
  {
    "q": "It is ______ midnight. It is 11:55 now.",
    "options": [
      "nearly",
      "especially",
      "forward",
      "hardly"
    ],
    "answer": 0,
    "cn": "差不多該走了。",
    "vocabIndex": 8
  },
  {
    "q": "It is ______ to wear a helmet when you ride a scooter. It is the law.",
    "options": [
      "narrow",
      "naughty",
      "necessary",
      "nervous"
    ],
    "answer": 2,
    "cn": "每天喝水是必要的。",
    "vocabIndex": 9
  },
  {
    "q": "She wore a gold ______ around her neck.",
    "options": [
      "napkin",
      "needle",
      "nest",
      "necklace"
    ],
    "answer": 3,
    "cn": "她戴了一條漂亮的項鍊。",
    "vocabIndex": 10
  },
  {
    "q": "Grandma used a ______ and thread to fix the hole in my shirt.",
    "options": [
      "napkin",
      "needle",
      "necklace",
      "nest"
    ],
    "answer": 1,
    "cn": "唱片機的針壞了。",
    "vocabIndex": 11
  },
  {
    "q": "Don't be so ______. Try to see the good side of things.",
    "options": [
      "negative",
      "narrow",
      "natural",
      "necessary"
    ],
    "answer": 0,
    "cn": "他對這個專案持消極態度。",
    "vocabIndex": 12
  },
  {
    "q": "______ of my parents can drive. We always take the bus.",
    "options": [
      "None",
      "Nearly",
      "Neither",
      "Hardly"
    ],
    "answer": 2,
    "cn": "這兩個答案都不正確。",
    "vocabIndex": 13
  },
  {
    "q": "My sister's son is my ______. He is five years old.",
    "options": [
      "niece",
      "musician",
      "nation",
      "nephew"
    ],
    "answer": 3,
    "cn": "她為她的姪子買了一份禮物。",
    "vocabIndex": 14
  },
  {
    "q": "I always feel ______ before a test. My hands get cold and wet.",
    "options": [
      "narrow",
      "nervous",
      "natural",
      "necessary"
    ],
    "answer": 1,
    "cn": "她考試前感到緊張。",
    "vocabIndex": 15
  },
  {
    "q": "The bird built a ______ in the tree. There are three eggs in it.",
    "options": [
      "net",
      "needle",
      "napkin",
      "nest"
    ],
    "answer": 3,
    "cn": "鳥在樹上築了一個巢。",
    "vocabIndex": 16
  },
  {
    "q": "The fisherman threw his ______ into the sea and caught a lot of fish.",
    "options": [
      "nest",
      "net",
      "needle",
      "napkin"
    ],
    "answer": 1,
    "cn": "他用網抓了一條魚。",
    "vocabIndex": 17
  },
  {
    "q": "My brother's daughter is my ______. She is a cute little girl.",
    "options": [
      "nephew",
      "musician",
      "niece",
      "nation"
    ],
    "answer": 2,
    "cn": "她帶她的姪女去動物園。",
    "vocabIndex": 18
  },
  {
    "q": "I asked if she wanted some tea, and she ______ her head to say yes.",
    "options": [
      "nodded",
      "measured",
      "mixed",
      "locked"
    ],
    "answer": 0,
    "cn": "她點頭表示同意。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "movement": {
    "pos": "n.",
    "en_def": "the way someone or something moves",
    "cn_def": "運動，動作"
  },
  "nation": {
    "pos": "n.",
    "en_def": "a country and its people",
    "cn_def": "國家"
  },
  "necklace": {
    "pos": "n.",
    "en_def": "a pretty chain that you wear around your neck",
    "cn_def": "項鍊"
  },
  "needle": {
    "pos": "n.",
    "en_def": "a thin, sharp piece of metal, used for sewing or in a record player",
    "cn_def": "針"
  },
  "nest": {
    "pos": "n.",
    "en_def": "the home a bird makes for its eggs",
    "cn_def": "巢，窩"
  },
  "net": {
    "pos": "n.",
    "en_def": "material with many holes, used for catching fish",
    "cn_def": "網"
  },
  "mrt": {
    "pos": "n.",
    "en_def": "the fast train system in a city like Taipei",
    "cn_def": "地鐵"
  },
  "nephew": {
    "pos": "n.",
    "en_def": "the son of your brother or sister",
    "cn_def": "姪子，外甥"
  },
  "niece": {
    "pos": "n.",
    "en_def": "the daughter of your brother or sister",
    "cn_def": "姪女，外甥女"
  },
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays or writes music",
    "cn_def": "音樂家，樂師"
  },
  "napkin": {
    "pos": "n.",
    "en_def": "a piece of cloth or paper for cleaning your mouth and hands at meals",
    "cn_def": "餐巾"
  },
  "narrow": {
    "pos": "adj.",
    "en_def": "not wide",
    "cn_def": "狹窄的，有限的"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "from nature; not made by people",
    "cn_def": "自然的，天然的"
  },
  "naughty": {
    "pos": "adj.",
    "en_def": "(of a child) behaving badly",
    "cn_def": "淘氣的，不聽話的"
  },
  "nervous": {
    "pos": "adj.",
    "en_def": "worried and a little afraid",
    "cn_def": "緊張的，不安的"
  },
  "negative": {
    "pos": "adj.",
    "en_def": "seeing only the bad side; saying \"no\"",
    "cn_def": "否定的，消極的"
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
  "forward": {
    "pos": "adv.",
    "en_def": "toward the front",
    "cn_def": "向前"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
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
  "neither": {
    "pos": "adv.",
    "en_def": "not one and not the other of two",
    "cn_def": "也不，既不"
  },
  "nodded": {
    "pos": "v.",
    "en_def": "to move your head up and down to say \"yes\"",
    "cn_def": "點頭，打瞌睡"
  },
  "measured": {
    "pos": "v.",
    "en_def": "to find out how long, big, or heavy something is",
    "cn_def": "測量，衡量"
  },
  "mixed": {
    "pos": "v.",
    "en_def": "to put different things together and stir them",
    "cn_def": "混合，攪拌"
  },
  "locked": {
    "pos": "v.",
    "en_def": "to close something with a key",
    "cn_def": "鎖住"
  }
};

const EXTRA_GLOSSES = {};
