// Unit 8 Quiz Data: cream – danger
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U08 - cream – danger",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cream",
    "pos": "n.",
    "cn_def": "奶油，乳霜",
    "en_def": "the thick, white, fatty part of milk",
    "sentence": "She put some {{BLANK}} in her coffee.",
    "cn": "她在咖啡裡加了些奶油。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造",
    "en_def": "to make something new",
    "sentence": "He wants to {{BLANK}} a new game.",
    "cn": "他想創造一個新遊戲。"
  },
  {
    "word": "credit card",
    "pos": "n.",
    "cn_def": "信用卡",
    "en_def": "a plastic card you use to buy things now and pay later",
    "sentence": "She paid with her {{BLANK}}.",
    "cn": "她用信用卡支付了。",
    "nblanks": 2
  },
  {
    "word": "crime",
    "pos": "n.",
    "cn_def": "罪行，犯罪",
    "en_def": "something that is against the law",
    "sentence": "He was arrested for {{BLANK}}.",
    "cn": "他因犯罪被逮捕。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群",
    "en_def": "a large group of people in one place",
    "sentence": "A large {{BLANK}} gathered at the concert.",
    "cn": "音樂會聚集了一大群人。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "The train was very {{BLANK}} during rush hour.",
    "cn": "高峰時段火車非常擁擠。"
  },
  {
    "word": "cruel",
    "pos": "adj.",
    "cn_def": "殘酷的，無情的",
    "en_def": "making people or animals suffer; very unkind",
    "sentence": "It was {{BLANK}} to leave the dog outside in the cold.",
    "cn": "把狗留在寒冷的外面是很殘酷的。"
  },
  {
    "word": "cub",
    "pos": "n.",
    "cn_def": "幼獸，年輕人",
    "en_def": "a baby lion, bear, or tiger",
    "sentence": "The lioness protected her {{BLANK}}.",
    "cn": "母獅保護她的幼崽。",
    "alts": [
      "cub"
    ]
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the way of life, art, and ideas of a group of people",
    "sentence": "Japanese {{BLANK}} is known for its traditions.",
    "cn": "日本文化以其傳統著稱。"
  },
  {
    "word": "cure",
    "pos": "v.",
    "cn_def": "治癒",
    "en_def": "to make a sick person well again; to make a sickness go away",
    "sentence": "They are working to {{BLANK}} the disease.",
    "cn": "他們正在努力治癒這種疾病。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "She was {{BLANK}} about the new neighbors.",
    "cn": "她對新鄰居感到好奇。"
  },
  {
    "word": "current",
    "pos": "adj.",
    "cn_def": "當前的，現行的",
    "en_def": "happening now",
    "sentence": "The {{BLANK}} situation is difficult.",
    "cn": "當前的情況很困難。"
  },
  {
    "word": "curtain",
    "pos": "n.",
    "cn_def": "窗簾，幕",
    "en_def": "a piece of cloth that hangs in front of a window",
    "sentence": "She closed the {{BLANK}} before going to bed.",
    "cn": "她睡前拉上了窗簾。"
  },
  {
    "word": "curve",
    "pos": "n.",
    "cn_def": "曲線，彎曲",
    "en_def": "a line or shape that bends",
    "sentence": "The road follows the {{BLANK}} of the hill.",
    "cn": "道路沿著山坡蜿蜒。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "風俗，習慣",
    "en_def": "something that people in a place have done for a long time",
    "sentence": "It is a local {{BLANK}} to celebrate the festival with fireworks.",
    "cn": "這是當地用煙花慶祝節日的習俗。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客",
    "en_def": "a person who buys something from a store",
    "sentence": "The {{BLANK}} was satisfied with the service.",
    "cn": "顧客對服務很滿意。"
  },
  {
    "word": "daily",
    "pos": "adj.",
    "cn_def": "每日的，日常的",
    "en_def": "happening or coming out every day",
    "sentence": "She reads the {{BLANK}} newspaper every morning.",
    "cn": "她每天早上讀日報。"
  },
  {
    "word": "damage",
    "pos": "v.",
    "cn_def": "損害，破壞",
    "en_def": "to break or hurt something so it is not as good as before",
    "sentence": "The storm {{BLANK}} several houses.",
    "cn": "暴風雨損壞了幾座房屋。"
  },
  {
    "word": "dancer",
    "pos": "n.",
    "cn_def": "舞者，舞蹈家",
    "en_def": "a person who dances",
    "sentence": "She is a professional {{BLANK}}.",
    "cn": "她是一名專業舞者。"
  },
  {
    "word": "danger",
    "pos": "n.",
    "cn_def": "危險",
    "en_def": "the chance that someone will be hurt or killed",
    "sentence": "He was in great {{BLANK}} during the storm.",
    "cn": "他在暴風雨中處於極大的危險中。"
  }
];

const MCQS = [
  {
    "q": "Would you like some ______ in your coffee? It makes the coffee white and smooth.",
    "options": [
      "crime",
      "crowd",
      "curve",
      "cream"
    ],
    "answer": 3,
    "cn": "她在咖啡裡加了些奶油。",
    "vocabIndex": 0
  },
  {
    "q": "The artist wants to ______ something new. Nobody has seen anything like it before.",
    "options": [
      "cure",
      "create",
      "damage",
      "cough"
    ],
    "answer": 1,
    "cn": "他想創造一個新遊戲。",
    "vocabIndex": 1
  },
  {
    "q": "I didn't have any cash, so I paid with my ______.",
    "options": [
      "crowd",
      "curtain",
      "credit card",
      "custom"
    ],
    "answer": 2,
    "cn": "她用信用卡支付了。",
    "vocabIndex": 2
  },
  {
    "q": "Stealing is a ______. The police will catch you and put you in jail.",
    "options": [
      "crime",
      "cream",
      "culture",
      "curve"
    ],
    "answer": 0,
    "cn": "他因犯罪被逮捕。",
    "vocabIndex": 3
  },
  {
    "q": "A big ______ of fans waited outside the hotel to see the singer. There were thousands of people.",
    "options": [
      "cream",
      "crowd",
      "curtain",
      "curve"
    ],
    "answer": 1,
    "cn": "音樂會聚集了一大群人。",
    "vocabIndex": 4
  },
  {
    "q": "The bus was so ______ that I couldn't find a seat. People were standing everywhere.",
    "options": [
      "cruel",
      "curious",
      "daily",
      "crowded"
    ],
    "answer": 3,
    "cn": "高峰時段火車非常擁擠。",
    "vocabIndex": 5
  },
  {
    "q": "It is ______ to hit a dog. Animals feel pain, too.",
    "options": [
      "crowded",
      "curious",
      "cruel",
      "current"
    ],
    "answer": 2,
    "cn": "把狗留在寒冷的外面是很殘酷的。",
    "vocabIndex": 6
  },
  {
    "q": "The mother bear has two ______. The babies follow her everywhere.",
    "options": [
      "cubs",
      "crowds",
      "curtains",
      "customs"
    ],
    "answer": 0,
    "cn": "母獅保護她的幼崽。",
    "vocabIndex": 7
  },
  {
    "q": "I am interested in Japanese ______. I love the food, the art, and the old festivals.",
    "options": [
      "curtain",
      "culture",
      "cream",
      "curve"
    ],
    "answer": 1,
    "cn": "日本文化以其傳統著稱。",
    "vocabIndex": 8
  },
  {
    "q": "Doctors are trying to find a way to ______ the disease. Many sick people are waiting.",
    "options": [
      "create",
      "damage",
      "cure",
      "cough"
    ],
    "answer": 2,
    "cn": "他們正在努力治癒這種疾病。",
    "vocabIndex": 9
  },
  {
    "q": "Children are ______ about everything. They ask \"why\" all day long.",
    "options": [
      "curious",
      "cruel",
      "crowded",
      "daily"
    ],
    "answer": 0,
    "cn": "她對新鄰居感到好奇。",
    "vocabIndex": 10
  },
  {
    "q": "Who is the ______ president of the U.S.A.? I only know the one before.",
    "options": [
      "cruel",
      "crowded",
      "curious",
      "current"
    ],
    "answer": 3,
    "cn": "當前的情況很困難。",
    "vocabIndex": 11
  },
  {
    "q": "Please close the ______. The sun is shining through the window into my eyes.",
    "options": [
      "customs",
      "crowds",
      "curtains",
      "curves"
    ],
    "answer": 2,
    "cn": "她睡前拉上了窗簾。",
    "vocabIndex": 12
  },
  {
    "q": "Slow down! There is a sharp ______ in the road ahead, and you can't see around it.",
    "options": [
      "cream",
      "curve",
      "crowd",
      "custom"
    ],
    "answer": 1,
    "cn": "道路沿著山坡蜿蜒。",
    "vocabIndex": 13
  },
  {
    "q": "Giving red envelopes at Chinese New Year is an old ______ in Taiwan.",
    "options": [
      "curve",
      "cream",
      "danger",
      "custom"
    ],
    "answer": 3,
    "cn": "這是當地用煙花慶祝節日的習俗。",
    "vocabIndex": 14
  },
  {
    "q": "The store is full of ______ today because everything is on sale.",
    "options": [
      "customers",
      "curtains",
      "curves",
      "cubs"
    ],
    "answer": 0,
    "cn": "顧客對服務很滿意。",
    "vocabIndex": 15
  },
  {
    "q": "Exercise is part of my ______ life. I run in the park every morning.",
    "options": [
      "cruel",
      "daily",
      "crowded",
      "curious"
    ],
    "answer": 1,
    "cn": "她每天早上讀日報。",
    "vocabIndex": 16
  },
  {
    "q": "The typhoon ______ many houses. Some roofs and windows were broken.",
    "options": [
      "created",
      "cured",
      "coughed",
      "damaged"
    ],
    "answer": 3,
    "cn": "暴風雨損壞了幾座房屋。",
    "vocabIndex": 17
  },
  {
    "q": "Lisa is a great ______. She moves beautifully to the music on the stage.",
    "options": [
      "customer",
      "danger",
      "dancer",
      "curtain"
    ],
    "answer": 2,
    "cn": "她是一名專業舞者。",
    "vocabIndex": 18
  },
  {
    "q": "The sign says \"______! Deep water.\" Don't swim here.",
    "options": [
      "danger",
      "Dancer",
      "Custom",
      "Culture"
    ],
    "answer": 0,
    "cn": "他在暴風雨中處於極大的危險中。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "crime": {
    "pos": "n.",
    "en_def": "something that is against the law",
    "cn_def": "罪行，犯罪"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "人群"
  },
  "curve": {
    "pos": "n.",
    "en_def": "a line or shape that bends",
    "cn_def": "曲線，彎曲"
  },
  "cream": {
    "pos": "n.",
    "en_def": "the thick, white, fatty part of milk",
    "cn_def": "奶油，乳霜"
  },
  "cure": {
    "pos": "v.",
    "en_def": "to make a sick person well again; to make a sickness go away",
    "cn_def": "治癒"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造"
  },
  "damage": {
    "pos": "v.",
    "en_def": "to break or hurt something so it is not as good as before",
    "cn_def": "損害，破壞"
  },
  "cough": {
    "pos": "v.",
    "en_def": "to push air out of your throat with a sudden, rough sound",
    "cn_def": "咳嗽"
  },
  "curtain": {
    "pos": "n.",
    "en_def": "a piece of cloth that hangs in front of a window",
    "cn_def": "窗簾，幕"
  },
  "credit card": {
    "pos": "n.",
    "en_def": "a plastic card you use to buy things now and pay later",
    "cn_def": "信用卡"
  },
  "custom": {
    "pos": "n.",
    "en_def": "something that people in a place have done for a long time",
    "cn_def": "風俗，習慣"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the way of life, art, and ideas of a group of people",
    "cn_def": "文化"
  },
  "cruel": {
    "pos": "adj.",
    "en_def": "making people or animals suffer; very unkind",
    "cn_def": "殘酷的，無情的"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "daily": {
    "pos": "adj.",
    "en_def": "happening or coming out every day",
    "cn_def": "每日的，日常的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "current": {
    "pos": "adj.",
    "en_def": "happening now",
    "cn_def": "當前的，現行的"
  },
  "cubs": {
    "pos": "n.",
    "en_def": "a baby lion, bear, or tiger",
    "cn_def": "幼獸，年輕人"
  },
  "crowds": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "人群"
  },
  "curtains": {
    "pos": "n.",
    "en_def": "a piece of cloth that hangs in front of a window",
    "cn_def": "窗簾，幕"
  },
  "customs": {
    "pos": "n.",
    "en_def": "something that people in a place have done for a long time",
    "cn_def": "風俗，習慣"
  },
  "curves": {
    "pos": "n.",
    "en_def": "a line or shape that bends",
    "cn_def": "曲線，彎曲"
  },
  "danger": {
    "pos": "n.",
    "en_def": "the chance that someone will be hurt or killed",
    "cn_def": "危險"
  },
  "customers": {
    "pos": "n.",
    "en_def": "a person who buys something from a store",
    "cn_def": "顧客"
  },
  "created": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造"
  },
  "cured": {
    "pos": "v.",
    "en_def": "to make a sick person well again; to make a sickness go away",
    "cn_def": "治癒"
  },
  "coughed": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "咳嗽"
  },
  "damaged": {
    "pos": "v.",
    "en_def": "to break or hurt something so it is not as good as before",
    "cn_def": "損害，破壞"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys something from a store",
    "cn_def": "顧客"
  },
  "dancer": {
    "pos": "n.",
    "en_def": "a person who dances",
    "cn_def": "舞者，舞蹈家"
  }
};

const EXTRA_GLOSSES = {};
