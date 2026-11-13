// Unit 33 Quiz Data: soda – step
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U33 - soda – step",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "soda",
    "pos": "n.",
    "cn_def": "汽水，蘇打水",
    "en_def": "a sweet drink with bubbles",
    "sentence": "She ordered a {{BLANK}} with her meal.",
    "cn": "她點了一杯汽水配餐。"
  },
  {
    "word": "soft",
    "pos": "adj.",
    "cn_def": "柔軟的，溫和的",
    "en_def": "not hard; nice to touch",
    "sentence": "The pillow is very {{BLANK}}.",
    "cn": "這個枕頭很柔軟。"
  },
  {
    "word": "soft drink",
    "pos": "n.",
    "cn_def": "軟飲料，非酒精飲料",
    "en_def": "a cold, sweet drink with no alcohol",
    "sentence": "She prefers {{BLANK}} to alcohol.",
    "cn": "她更喜歡軟飲料而不是酒精飲料。",
    "nblanks": 2
  },
  {
    "word": "softball",
    "pos": "n.",
    "cn_def": "壘球",
    "en_def": "a game like baseball with a bigger, softer ball",
    "sentence": "They played {{BLANK}} in the park.",
    "cn": "他們在公園裡打壘球。"
  },
  {
    "word": "solve",
    "pos": "v.",
    "cn_def": "解決，解答",
    "en_def": "to find the answer to a problem",
    "sentence": "Can you {{BLANK}} this math problem?",
    "cn": "你能解答這個數學問題嗎？"
  },
  {
    "word": "soul",
    "pos": "n.",
    "cn_def": "靈魂，精神",
    "en_def": "the part of a person that some people believe lives on after death",
    "sentence": "She believes in the immortality of the {{BLANK}}.",
    "cn": "她相信靈魂的不朽。"
  },
  {
    "word": "sour",
    "pos": "adj.",
    "cn_def": "酸的，不愉快的",
    "en_def": "having a taste like a lemon; (of milk) gone bad",
    "sentence": "The milk tasted {{BLANK}}.",
    "cn": "牛奶味道酸了。"
  },
  {
    "word": "soy sauce",
    "pos": "n.",
    "cn_def": "醬油",
    "en_def": "a dark, salty brown sauce used in Chinese cooking",
    "sentence": "She added {{BLANK}} to the dish.",
    "cn": "她在菜裡加了醬油。",
    "nblanks": 2
  },
  {
    "word": "spaghetti",
    "pos": "n.",
    "cn_def": "義大利麵",
    "en_def": "long thin noodles from Italy",
    "sentence": "She made {{BLANK}} for dinner.",
    "cn": "她做了義大利麵作晚餐。"
  },
  {
    "word": "speaker",
    "pos": "n.",
    "cn_def": "演講者，揚聲器",
    "en_def": "a person who gives a talk",
    "sentence": "The {{BLANK}} gave an inspiring talk.",
    "cn": "演講者發表了一場鼓舞人心的演講。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講，講話",
    "en_def": "a talk that someone gives to a group of people",
    "sentence": "He prepared a {{BLANK}} for the conference.",
    "cn": "他為會議準備了一場演講。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "how fast something moves",
    "sentence": "The car's top {{BLANK}} is 120 mph.",
    "cn": "這輛車的最高速度是每小時120英里。"
  },
  {
    "word": "spirit",
    "pos": "n.",
    "cn_def": "精神，靈魂",
    "en_def": "brave and strong feelings; the will to keep trying",
    "sentence": "She showed great {{BLANK}} during the competition.",
    "cn": "她在比賽中展現出極大的精神。"
  },
  {
    "word": "spot",
    "pos": "n.",
    "cn_def": "地點，斑點",
    "en_def": "a place",
    "sentence": "They found a perfect {{BLANK}} for a picnic.",
    "cn": "他們找到了一個完美的野餐地點。"
  },
  {
    "word": "spread",
    "pos": "v.",
    "cn_def": "展開，傳播",
    "en_def": "to move and reach more and more people or places",
    "sentence": "The news of the event quickly {{BLANK}}.",
    "cn": "事件的消息迅速傳開。"
  },
  {
    "word": "state",
    "pos": "n.",
    "cn_def": "狀態，州",
    "en_def": "the condition that someone or something is in",
    "sentence": "He is in a {{BLANK}} of confusion.",
    "cn": "他處於困惑狀態。"
  },
  {
    "word": "stationery",
    "pos": "n.",
    "cn_def": "文具",
    "en_def": "paper, pens, and other things for writing",
    "sentence": "She bought some new {{BLANK}} for school.",
    "cn": "她為學校買了一些新文具。"
  },
  {
    "word": "steal",
    "pos": "v.",
    "cn_def": "偷竊，盜取",
    "en_def": "to take something that is not yours",
    "sentence": "Someone tried to {{BLANK}} his bike.",
    "cn": "有人試圖偷他的自行車。"
  },
  {
    "word": "steam",
    "pos": "n.",
    "cn_def": "蒸汽",
    "en_def": "the hot white gas that comes from boiling water",
    "sentence": "The pot was full of {{BLANK}}.",
    "cn": "鍋裡充滿了蒸汽。"
  },
  {
    "word": "step",
    "pos": "n.",
    "cn_def": "步驟，步伐",
    "en_def": "one movement of your foot when you walk",
    "sentence": "He took a {{BLANK}} forward.",
    "cn": "他向前邁了一步。"
  }
];

const MCQS = [
  {
    "q": "I'd like a cold ______ with my pizza. I love sweet drinks with bubbles.",
    "options": [
      "speech",
      "steam",
      "soda",
      "step"
    ],
    "answer": 2,
    "cn": "她點了一杯汽水配餐。",
    "vocabIndex": 0
  },
  {
    "q": "This pillow is very ______. I love to put my head on it.",
    "options": [
      "sour",
      "stingy",
      "stormy",
      "soft"
    ],
    "answer": 3,
    "cn": "這個枕頭很柔軟。",
    "vocabIndex": 1
  },
  {
    "q": "Children can't drink beer, but they can have ______ like cola or juice.",
    "options": [
      "soy sauces",
      "soft drinks",
      "speeches",
      "steps"
    ],
    "answer": 1,
    "cn": "她更喜歡軟飲料而不是酒精飲料。",
    "vocabIndex": 2
  },
  {
    "q": "The girls played ______ on the field. One of them hit the ball very far.",
    "options": [
      "softball",
      "spaghetti",
      "stationery",
      "soy sauce"
    ],
    "answer": 0,
    "cn": "他們在公園裡打壘球。",
    "vocabIndex": 3
  },
  {
    "q": "This math problem is very hard. Can you help me ______ it?",
    "options": [
      "spread",
      "steal",
      "sink",
      "solve"
    ],
    "answer": 3,
    "cn": "你能解答這個數學問題嗎？",
    "vocabIndex": 4
  },
  {
    "q": "Some people believe that the ______ lives on after the body dies.",
    "options": [
      "soul",
      "speed",
      "step",
      "steam"
    ],
    "answer": 0,
    "cn": "她相信靈魂的不朽。",
    "vocabIndex": 5
  },
  {
    "q": "This lemon juice is too ______. Please add some sugar.",
    "options": [
      "soft",
      "stingy",
      "sour",
      "straight"
    ],
    "answer": 2,
    "cn": "牛奶味道酸了。",
    "vocabIndex": 6
  },
  {
    "q": "Dip the dumplings in ______. This dark, salty sauce makes them taste better.",
    "options": [
      "softball",
      "soy sauce",
      "stationery",
      "steam"
    ],
    "answer": 1,
    "cn": "她在菜裡加了醬油。",
    "vocabIndex": 7
  },
  {
    "q": "We had ______ with tomato sauce for dinner at the Italian restaurant.",
    "options": [
      "softball",
      "stationery",
      "spaghetti",
      "steam"
    ],
    "answer": 2,
    "cn": "她做了義大利麵作晚餐。",
    "vocabIndex": 8
  },
  {
    "q": "The ______ talked about his trip to Africa. Everyone listened to him carefully.",
    "options": [
      "speaker",
      "speed",
      "steam",
      "step"
    ],
    "answer": 0,
    "cn": "演講者發表了一場鼓舞人心的演講。",
    "vocabIndex": 9
  },
  {
    "q": "The principal gave a ______ to the students. He talked for twenty minutes.",
    "options": [
      "speed",
      "spot",
      "steam",
      "speech"
    ],
    "answer": 3,
    "cn": "他為會議準備了一場演講。",
    "vocabIndex": 10
  },
  {
    "q": "The train runs at a ______ of 300 kilometers an hour.",
    "options": [
      "speech",
      "speed",
      "spot",
      "step"
    ],
    "answer": 1,
    "cn": "這輛車的最高速度是每小時120英里。",
    "vocabIndex": 11
  },
  {
    "q": "We lost the game, but our team showed great ______. We never gave up.",
    "options": [
      "steam",
      "step",
      "spirit",
      "spot"
    ],
    "answer": 2,
    "cn": "她在比賽中展現出極大的精神。",
    "vocabIndex": 12
  },
  {
    "q": "This is a good ______ for a picnic. Let's sit here under the tree.",
    "options": [
      "spot",
      "speed",
      "steam",
      "speech"
    ],
    "answer": 0,
    "cn": "他們找到了一個完美的野餐地點。",
    "vocabIndex": 13
  },
  {
    "q": "The fire ______ quickly from the kitchen to the other rooms.",
    "options": [
      "solved",
      "stole",
      "sank",
      "spread"
    ],
    "answer": 3,
    "cn": "事件的消息迅速傳開。",
    "vocabIndex": 14
  },
  {
    "q": "California is the biggest ______ in the U.S.A. by population.",
    "options": [
      "step",
      "state",
      "steam",
      "spot"
    ],
    "answer": 1,
    "cn": "他處於困惑狀態。",
    "vocabIndex": 15
  },
  {
    "q": "I bought some ______, like pens, paper, and envelopes, at the bookstore.",
    "options": [
      "spaghetti",
      "softball",
      "steam",
      "stationery"
    ],
    "answer": 3,
    "cn": "她為學校買了一些新文具。",
    "vocabIndex": 16
  },
  {
    "q": "Someone tried to ______ my bike, so now I always lock it.",
    "options": [
      "steal",
      "solve",
      "spread",
      "sink"
    ],
    "answer": 0,
    "cn": "有人試圖偷他的自行車。",
    "vocabIndex": 17
  },
  {
    "q": "The water is boiling. You can see white ______ coming out of the pot.",
    "options": [
      "speed",
      "spot",
      "steam",
      "step"
    ],
    "answer": 2,
    "cn": "鍋裡充滿了蒸汽。",
    "vocabIndex": 18
  },
  {
    "q": "The baby took her first ______ today. She will be walking soon.",
    "options": [
      "spot",
      "step",
      "steam",
      "speed"
    ],
    "answer": 1,
    "cn": "他向前邁了一步。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "speech": {
    "pos": "n.",
    "en_def": "a talk that someone gives to a group of people",
    "cn_def": "演講，講話"
  },
  "steam": {
    "pos": "n.",
    "en_def": "the hot white gas that comes from boiling water",
    "cn_def": "蒸汽"
  },
  "soda": {
    "pos": "n.",
    "en_def": "a sweet drink with bubbles",
    "cn_def": "汽水，蘇打水"
  },
  "step": {
    "pos": "n.",
    "en_def": "one movement of your foot when you walk",
    "cn_def": "步驟，步伐"
  },
  "sour": {
    "pos": "adj.",
    "en_def": "having a taste like a lemon; (of milk) gone bad",
    "cn_def": "酸的，不愉快的"
  },
  "stingy": {
    "pos": "adj.",
    "en_def": "not willing to spend or give money",
    "cn_def": "吝嗇的，小氣的"
  },
  "stormy": {
    "pos": "adj.",
    "en_def": "with strong wind and heavy rain",
    "cn_def": "暴風雨的，猛烈的"
  },
  "soft": {
    "pos": "adj.",
    "en_def": "not hard; nice to touch",
    "cn_def": "柔軟的，溫和的"
  },
  "soy sauces": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "醬油"
  },
  "soft drinks": {
    "pos": "n.",
    "en_def": "a cold, sweet drink with no alcohol",
    "cn_def": "軟飲料，非酒精飲料"
  },
  "speeches": {
    "pos": "n.",
    "en_def": "a talk that someone gives to a group of people",
    "cn_def": "演講，講話"
  },
  "steps": {
    "pos": "n.",
    "en_def": "one movement of your foot when you walk",
    "cn_def": "步驟，步伐"
  },
  "softball": {
    "pos": "n.",
    "en_def": "a game like baseball with a bigger, softer ball",
    "cn_def": "壘球"
  },
  "spaghetti": {
    "pos": "n.",
    "en_def": "long thin noodles from Italy",
    "cn_def": "義大利麵"
  },
  "stationery": {
    "pos": "n.",
    "en_def": "paper, pens, and other things for writing",
    "cn_def": "文具"
  },
  "soy sauce": {
    "pos": "n.",
    "en_def": "a dark, salty brown sauce used in Chinese cooking",
    "cn_def": "醬油"
  },
  "spread": {
    "pos": "v.",
    "en_def": "to move and reach more and more people or places",
    "cn_def": "展開，傳播"
  },
  "steal": {
    "pos": "v.",
    "en_def": "to take something that is not yours",
    "cn_def": "偷竊，盜取"
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
  "soul": {
    "pos": "n.",
    "en_def": "the part of a person that some people believe lives on after death",
    "cn_def": "靈魂，精神"
  },
  "speed": {
    "pos": "n.",
    "en_def": "how fast something moves",
    "cn_def": "速度"
  },
  "straight": {
    "pos": "adj.",
    "en_def": "not bending or turning",
    "cn_def": "直的，直接的"
  },
  "speaker": {
    "pos": "n.",
    "en_def": "a person who gives a talk",
    "cn_def": "演講者，揚聲器"
  },
  "spot": {
    "pos": "n.",
    "en_def": "a place",
    "cn_def": "地點，斑點"
  },
  "spirit": {
    "pos": "n.",
    "en_def": "brave and strong feelings; the will to keep trying",
    "cn_def": "精神，靈魂"
  },
  "solved": {
    "pos": "v.",
    "en_def": "to find the answer to a problem",
    "cn_def": "解決，解答"
  },
  "stole": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "偷"
  },
  "sank": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "下沉"
  },
  "state": {
    "pos": "n.",
    "en_def": "the condition that someone or something is in",
    "cn_def": "狀態，州"
  }
};

const EXTRA_GLOSSES = {};
