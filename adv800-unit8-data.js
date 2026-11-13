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
    "q": "She put some ______ in her coffee.【奶油，乳霜】",
    "options": [
      "cream",
      "customer",
      "custom",
      "danger"
    ],
    "answer": 0,
    "cn": "她在咖啡裡加了些奶油。",
    "vocabIndex": 0
  },
  {
    "q": "He wants to ______ a new game.【創造】",
    "options": [
      "cure",
      "damaged",
      "avoid",
      "create"
    ],
    "answer": 3,
    "cn": "他想創造一個新遊戲。",
    "vocabIndex": 1
  },
  {
    "q": "She paid with her ______.【信用卡】",
    "options": [
      "danger",
      "credit card",
      "culture",
      "curtain"
    ],
    "answer": 1,
    "cn": "她用信用卡支付了。",
    "vocabIndex": 2
  },
  {
    "q": "He was arrested for ______.【罪行，犯罪】",
    "options": [
      "customer",
      "cream",
      "crime",
      "curve"
    ],
    "answer": 2,
    "cn": "他因犯罪被逮捕。",
    "vocabIndex": 3
  },
  {
    "q": "A large ______ gathered at the concert.【人群】",
    "options": [
      "crowd",
      "credit card",
      "culture",
      "cream"
    ],
    "answer": 0,
    "cn": "音樂會聚集了一大群人。",
    "vocabIndex": 4
  },
  {
    "q": "The train was very ______ during rush hour.【擁擠的】",
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
    "q": "It was ______ to leave the dog outside in the cold.【殘酷的，無情的】",
    "options": [
      "daily",
      "cruel",
      "current",
      "crowded"
    ],
    "answer": 1,
    "cn": "把狗留在寒冷的外面是很殘酷的。",
    "vocabIndex": 6
  },
  {
    "q": "The lioness protected her ______.【幼獸，年輕人】",
    "options": [
      "danger",
      "crowd",
      "cubs",
      "curve"
    ],
    "answer": 2,
    "cn": "母獅保護她的幼崽。",
    "vocabIndex": 7
  },
  {
    "q": "Japanese ______ is known for its traditions.【文化】",
    "options": [
      "culture",
      "curve",
      "crime",
      "cream"
    ],
    "answer": 0,
    "cn": "日本文化以其傳統著稱。",
    "vocabIndex": 8
  },
  {
    "q": "They are working to ______ the disease.【治癒】",
    "options": [
      "create",
      "damaged",
      "skate",
      "cure"
    ],
    "answer": 3,
    "cn": "他們正在努力治癒這種疾病。",
    "vocabIndex": 9
  },
  {
    "q": "She was ______ about the new neighbors.【好奇的】",
    "options": [
      "current",
      "curious",
      "cruel",
      "daily"
    ],
    "answer": 1,
    "cn": "她對新鄰居感到好奇。",
    "vocabIndex": 10
  },
  {
    "q": "The ______ situation is difficult.【當前的，現行的】",
    "options": [
      "cruel",
      "daily",
      "current",
      "curious"
    ],
    "answer": 2,
    "cn": "當前的情況很困難。",
    "vocabIndex": 11
  },
  {
    "q": "She closed the ______ before going to bed.【窗簾，幕】",
    "options": [
      "credit card",
      "curve",
      "cream",
      "curtain"
    ],
    "answer": 3,
    "cn": "她睡前拉上了窗簾。",
    "vocabIndex": 12
  },
  {
    "q": "The road follows the ______ of the hill.【曲線，彎曲】",
    "options": [
      "curve",
      "culture",
      "custom",
      "credit card"
    ],
    "answer": 0,
    "cn": "道路沿著山坡蜿蜒。",
    "vocabIndex": 13
  },
  {
    "q": "It is a local ______ to celebrate the festival with fireworks.【風俗，習慣】",
    "options": [
      "crowd",
      "crime",
      "custom",
      "curve"
    ],
    "answer": 2,
    "cn": "這是當地用煙花慶祝節日的習俗。",
    "vocabIndex": 14
  },
  {
    "q": "The ______ was satisfied with the service.【顧客】",
    "options": [
      "danger",
      "customer",
      "curve",
      "culture"
    ],
    "answer": 1,
    "cn": "顧客對服務很滿意。",
    "vocabIndex": 15
  },
  {
    "q": "She reads the ______ newspaper every morning.【每日的，日常的】",
    "options": [
      "current",
      "cruel",
      "daily",
      "curious"
    ],
    "answer": 2,
    "cn": "她每天早上讀日報。",
    "vocabIndex": 16
  },
  {
    "q": "The storm ______ several houses.【損害，破壞】",
    "options": [
      "create",
      "cure",
      "commanded",
      "damaged"
    ],
    "answer": 3,
    "cn": "暴風雨損壞了幾座房屋。",
    "vocabIndex": 17
  },
  {
    "q": "She is a professional ______.【舞者，舞蹈家】",
    "options": [
      "custom",
      "dancer",
      "crime",
      "danger"
    ],
    "answer": 1,
    "cn": "她是一名專業舞者。",
    "vocabIndex": 18
  },
  {
    "q": "He was in great ______ during the storm.【危險】",
    "options": [
      "danger",
      "custom",
      "curtain",
      "curve"
    ],
    "answer": 0,
    "cn": "他在暴風雨中處於極大的危險中。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "avoid": {
    "pos": "v.",
    "en_def": "to stay away from something; to try not to do something",
    "cn_def": "避免"
  },
  "commanded": {
    "pos": "v.",
    "en_def": "to tell someone that they must do something",
    "cn_def": "命令，指揮"
  },
  "cream": {
    "pos": "n.",
    "en_def": "the thick, white, fatty part of milk",
    "cn_def": "奶油，乳霜"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造"
  },
  "credit card": {
    "pos": "n.",
    "en_def": "a plastic card you use to buy things now and pay later",
    "cn_def": "信用卡"
  },
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
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "cruel": {
    "pos": "adj.",
    "en_def": "making people or animals suffer; very unkind",
    "cn_def": "殘酷的，無情的"
  },
  "cubs": {
    "pos": "n.",
    "en_def": "a baby lion, bear, or tiger",
    "cn_def": "幼獸，年輕人"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the way of life, art, and ideas of a group of people",
    "cn_def": "文化"
  },
  "cure": {
    "pos": "v.",
    "en_def": "to make a sick person well again; to make a sickness go away",
    "cn_def": "治癒"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "current": {
    "pos": "adj.",
    "en_def": "happening now",
    "cn_def": "當前的，現行的"
  },
  "curtain": {
    "pos": "n.",
    "en_def": "a piece of cloth that hangs in front of a window",
    "cn_def": "窗簾，幕"
  },
  "curve": {
    "pos": "n.",
    "en_def": "a line or shape that bends",
    "cn_def": "曲線，彎曲"
  },
  "custom": {
    "pos": "n.",
    "en_def": "something that people in a place have done for a long time",
    "cn_def": "風俗，習慣"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys something from a store",
    "cn_def": "顧客"
  },
  "daily": {
    "pos": "adj.",
    "en_def": "happening or coming out every day",
    "cn_def": "每日的，日常的"
  },
  "damaged": {
    "pos": "v.",
    "en_def": "to break or hurt something so it is not as good as before",
    "cn_def": "損害，破壞"
  },
  "dancer": {
    "pos": "n.",
    "en_def": "a person who dances",
    "cn_def": "舞者，舞蹈家"
  },
  "danger": {
    "pos": "n.",
    "en_def": "the chance that someone will be hurt or killed",
    "cn_def": "危險"
  },
  "skate": {
    "pos": "v.",
    "en_def": "to move on ice wearing special shoes",
    "cn_def": "滑冰，溜冰"
  }
};

const EXTRA_GLOSSES = {};
