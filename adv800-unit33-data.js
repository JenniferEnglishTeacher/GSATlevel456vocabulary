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
    "en_def": "",
    "sentence": "She ordered a {{BLANK}} with her meal.",
    "cn": "她點了一杯汽水配餐。"
  },
  {
    "word": "soft",
    "pos": "adj.",
    "cn_def": "柔軟的，溫和的",
    "en_def": "",
    "sentence": "The pillow is very {{BLANK}}.",
    "cn": "這個枕頭很柔軟。"
  },
  {
    "word": "soft drink",
    "pos": "n.",
    "cn_def": "軟飲料，非酒精飲料",
    "en_def": "",
    "sentence": "She prefers {{BLANK}} to alcohol.",
    "cn": "她更喜歡軟飲料而不是酒精飲料。",
    "nblanks": 2
  },
  {
    "word": "softball",
    "pos": "n.",
    "cn_def": "壘球",
    "en_def": "",
    "sentence": "They played {{BLANK}} in the park.",
    "cn": "他們在公園裡打壘球。"
  },
  {
    "word": "solve",
    "pos": "v.",
    "cn_def": "解決，解答",
    "en_def": "",
    "sentence": "Can you {{BLANK}} this math problem?",
    "cn": "你能解答這個數學問題嗎？"
  },
  {
    "word": "soul",
    "pos": "n.",
    "cn_def": "靈魂，精神",
    "en_def": "",
    "sentence": "She believes in the immortality of the {{BLANK}}.",
    "cn": "她相信靈魂的不朽。"
  },
  {
    "word": "sour",
    "pos": "adj.",
    "cn_def": "酸的，不愉快的",
    "en_def": "",
    "sentence": "The milk tasted {{BLANK}}.",
    "cn": "牛奶味道酸了。"
  },
  {
    "word": "soy sauce",
    "pos": "n.",
    "cn_def": "醬油",
    "en_def": "",
    "sentence": "She added {{BLANK}} to the dish.",
    "cn": "她在菜裡加了醬油。",
    "nblanks": 2
  },
  {
    "word": "spaghetti",
    "pos": "n.",
    "cn_def": "義大利麵",
    "en_def": "",
    "sentence": "She made {{BLANK}} for dinner.",
    "cn": "她做了義大利麵作晚餐。"
  },
  {
    "word": "speaker",
    "pos": "n.",
    "cn_def": "演講者，揚聲器",
    "en_def": "",
    "sentence": "The {{BLANK}} gave an inspiring talk.",
    "cn": "演講者發表了一場鼓舞人心的演講。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講，講話",
    "en_def": "",
    "sentence": "He prepared a {{BLANK}} for the conference.",
    "cn": "他為會議準備了一場演講。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "",
    "sentence": "The car's top {{BLANK}} is 120 mph.",
    "cn": "這輛車的最高速度是每小時120英里。"
  },
  {
    "word": "spirit",
    "pos": "n.",
    "cn_def": "精神，靈魂",
    "en_def": "",
    "sentence": "She showed great {{BLANK}} during the competition.",
    "cn": "她在比賽中展現出極大的精神。"
  },
  {
    "word": "spot",
    "pos": "n.",
    "cn_def": "地點，斑點",
    "en_def": "",
    "sentence": "They found a perfect {{BLANK}} for a picnic.",
    "cn": "他們找到了一個完美的野餐地點。"
  },
  {
    "word": "spread",
    "pos": "v.",
    "cn_def": "展開，傳播",
    "en_def": "",
    "sentence": "The news of the event quickly {{BLANK}}.",
    "cn": "事件的消息迅速傳開。"
  },
  {
    "word": "state",
    "pos": "n.",
    "cn_def": "狀態，州",
    "en_def": "",
    "sentence": "He is in a {{BLANK}} of confusion.",
    "cn": "他處於困惑狀態。"
  },
  {
    "word": "stationery",
    "pos": "n.",
    "cn_def": "文具",
    "en_def": "",
    "sentence": "She bought some new {{BLANK}} for school.",
    "cn": "她為學校買了一些新文具。"
  },
  {
    "word": "steal",
    "pos": "v.",
    "cn_def": "偷竊，盜取",
    "en_def": "",
    "sentence": "Someone tried to {{BLANK}} his bike.",
    "cn": "有人試圖偷他的自行車。"
  },
  {
    "word": "steam",
    "pos": "n.",
    "cn_def": "蒸汽",
    "en_def": "",
    "sentence": "The pot was full of {{BLANK}}.",
    "cn": "鍋裡充滿了蒸汽。"
  },
  {
    "word": "step",
    "pos": "n.",
    "cn_def": "步驟，步伐",
    "en_def": "",
    "sentence": "He took a {{BLANK}} forward.",
    "cn": "他向前邁了一步。"
  }
];

const MCQS = [
  {
    "q": "She ordered a ______ with her meal.【汽水，蘇打水】",
    "options": [
      "spaghetti",
      "stationery",
      "softball",
      "soda"
    ],
    "answer": 3,
    "cn": "她點了一杯汽水配餐。",
    "vocabIndex": 0
  },
  {
    "q": "The pillow is very ______.【柔軟的，溫和的】",
    "options": [
      "soft",
      "sour",
      "golden",
      "general"
    ],
    "answer": 0,
    "cn": "這個枕頭很柔軟。",
    "vocabIndex": 1
  },
  {
    "q": "She prefers ______ to alcohol.【軟飲料，非酒精飲料】",
    "options": [
      "spaghetti",
      "soft drink",
      "spot",
      "speaker"
    ],
    "answer": 1,
    "cn": "她更喜歡軟飲料而不是酒精飲料。",
    "vocabIndex": 2
  },
  {
    "q": "They played ______ in the park.【壘球】",
    "options": [
      "stationery",
      "step",
      "softball",
      "soda"
    ],
    "answer": 2,
    "cn": "他們在公園裡打壘球。",
    "vocabIndex": 3
  },
  {
    "q": "Can you ______ this math problem?【解決，解答】",
    "options": [
      "spread",
      "steal",
      "serve",
      "solve"
    ],
    "answer": 3,
    "cn": "你能解答這個數學問題嗎？",
    "vocabIndex": 4
  },
  {
    "q": "She believes in the immortality of the ______.【靈魂，精神】",
    "options": [
      "stationery",
      "soul",
      "soft drink",
      "steam"
    ],
    "answer": 1,
    "cn": "她相信靈魂的不朽。",
    "vocabIndex": 5
  },
  {
    "q": "The milk tasted ______.【酸的，不愉快的】",
    "options": [
      "soft",
      "dumb",
      "sour",
      "stingy"
    ],
    "answer": 2,
    "cn": "牛奶味道酸了。",
    "vocabIndex": 6
  },
  {
    "q": "She added ______ to the dish.【醬油】",
    "options": [
      "soy sauce",
      "soul",
      "speech",
      "step"
    ],
    "answer": 0,
    "cn": "她在菜裡加了醬油。",
    "vocabIndex": 7
  },
  {
    "q": "She made ______ for dinner.【義大利麵】",
    "options": [
      "soft drink",
      "spaghetti",
      "soy sauce",
      "speaker"
    ],
    "answer": 1,
    "cn": "她做了義大利麵作晚餐。",
    "vocabIndex": 8
  },
  {
    "q": "The ______ gave an inspiring talk.【演講者，揚聲器】",
    "options": [
      "soy sauce",
      "step",
      "speaker",
      "state"
    ],
    "answer": 2,
    "cn": "演講者發表了一場鼓舞人心的演講。",
    "vocabIndex": 9
  },
  {
    "q": "He prepared a ______ for the conference.【演講，講話】",
    "options": [
      "soft drink",
      "steam",
      "stationery",
      "speech"
    ],
    "answer": 3,
    "cn": "他為會議準備了一場演講。",
    "vocabIndex": 10
  },
  {
    "q": "The car's top ______ is 120 mph.【速度】",
    "options": [
      "speed",
      "speaker",
      "spirit",
      "soda"
    ],
    "answer": 0,
    "cn": "這輛車的最高速度是每小時120英里。",
    "vocabIndex": 11
  },
  {
    "q": "She showed great ______ during the competition.【精神，靈魂】",
    "options": [
      "steam",
      "speaker",
      "spirit",
      "soul"
    ],
    "answer": 2,
    "cn": "她在比賽中展現出極大的精神。",
    "vocabIndex": 12
  },
  {
    "q": "They found a perfect ______ for a picnic.【地點，斑點】",
    "options": [
      "speaker",
      "soda",
      "step",
      "spot"
    ],
    "answer": 3,
    "cn": "他們找到了一個完美的野餐地點。",
    "vocabIndex": 13
  },
  {
    "q": "The news of the event quickly ______.【展開，傳播】",
    "options": [
      "steal",
      "spread",
      "solve",
      "wake"
    ],
    "answer": 1,
    "cn": "事件的消息迅速傳開。",
    "vocabIndex": 14
  },
  {
    "q": "He is in a ______ of confusion.【狀態，州】",
    "options": [
      "state",
      "spirit",
      "soul",
      "soda"
    ],
    "answer": 0,
    "cn": "他處於困惑狀態。",
    "vocabIndex": 15
  },
  {
    "q": "She bought some new ______ for school.【文具】",
    "options": [
      "spaghetti",
      "soda",
      "steam",
      "stationery"
    ],
    "answer": 3,
    "cn": "她為學校買了一些新文具。",
    "vocabIndex": 16
  },
  {
    "q": "Someone tried to ______ his bike.【偷竊，盜取】",
    "options": [
      "spread",
      "steal",
      "solve",
      "handle"
    ],
    "answer": 1,
    "cn": "有人試圖偷他的自行車。",
    "vocabIndex": 17
  },
  {
    "q": "The pot was full of ______.【蒸汽】",
    "options": [
      "steam",
      "soda",
      "speech",
      "soy sauce"
    ],
    "answer": 0,
    "cn": "鍋裡充滿了蒸汽。",
    "vocabIndex": 18
  },
  {
    "q": "He took a ______ forward.【步驟，步伐】",
    "options": [
      "soul",
      "steam",
      "step",
      "speaker"
    ],
    "answer": 2,
    "cn": "他向前邁了一步。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "dumb": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "啞的，愚蠢的"
  },
  "general": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "一般的，總的"
  },
  "golden": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "金色的，極好的"
  },
  "handle": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "處理，操作"
  },
  "serve": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "服務，提供"
  },
  "soda": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "汽水，蘇打水"
  },
  "soft": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "柔軟的，溫和的"
  },
  "soft drink": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "軟飲料，非酒精飲料"
  },
  "softball": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "壘球"
  },
  "solve": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "解決，解答"
  },
  "soul": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "靈魂，精神"
  },
  "sour": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "酸的，不愉快的"
  },
  "soy sauce": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "醬油"
  },
  "spaghetti": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "義大利麵"
  },
  "speaker": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "演講者，揚聲器"
  },
  "speech": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "演講，講話"
  },
  "speed": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "速度"
  },
  "spirit": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "精神，靈魂"
  },
  "spot": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地點，斑點"
  },
  "spread": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "展開，傳播"
  },
  "state": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "狀態，州"
  },
  "stationery": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "文具"
  },
  "steal": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "偷竊，盜取"
  },
  "steam": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "蒸汽"
  },
  "step": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "步驟，步伐"
  },
  "stingy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "吝嗇的，小氣的"
  },
  "wake": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "醒來，喚醒"
  }
};

const EXTRA_GLOSSES = {};
