// Unit 4 Quiz Data: buffet – cash
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U04 - buffet – cash",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐",
    "en_def": "",
    "sentence": "The hotel offers a breakfast {{BLANK}}.",
    "cn": "這家飯店提供早餐自助餐。"
  },
  {
    "word": "bucket",
    "pos": "n.",
    "cn_def": "桶",
    "en_def": "",
    "sentence": "He filled the {{BLANK}} with water.",
    "cn": "他把桶裝滿了水。"
  },
  {
    "word": "building",
    "pos": "n.",
    "cn_def": "建築物",
    "en_def": "",
    "sentence": "The {{BLANK}} was designed by a famous architect.",
    "cn": "這棟建築是由一位著名建築師設計的。"
  },
  {
    "word": "bundle",
    "pos": "n.",
    "cn_def": "捆，束",
    "en_def": "",
    "sentence": "He carried a {{BLANK}} of newspapers.",
    "cn": "他拿著一捆報紙。"
  },
  {
    "word": "burst",
    "pos": "v.",
    "cn_def": "爆炸，破裂",
    "en_def": "",
    "sentence": "The balloon {{BLANK}} suddenly.",
    "cn": "氣球突然爆炸了。"
  },
  {
    "word": "cabbage",
    "pos": "n.",
    "cn_def": "高麗菜",
    "en_def": "",
    "sentence": "She added some {{BLANK}} to the salad.",
    "cn": "她在沙拉裡加了一些高麗菜。"
  },
  {
    "word": "cable",
    "pos": "n.",
    "cn_def": "電纜，纜繩",
    "en_def": "",
    "sentence": "The internet {{BLANK}} needs to be replaced.",
    "cn": "網路線需要更換。"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "cn_def": "自助餐廳",
    "en_def": "",
    "sentence": "We had lunch in the school {{BLANK}}.",
    "cn": "我們在學校自助餐廳吃了午餐。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子",
    "en_def": "",
    "sentence": "The bird was singing in its {{BLANK}}.",
    "cn": "鳥在籠子裡唱歌。"
  },
  {
    "word": "calendar",
    "pos": "n.",
    "cn_def": "日曆",
    "en_def": "",
    "sentence": "She marked the date on the {{BLANK}}.",
    "cn": "她在日曆上標記了日期。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的，平靜的",
    "en_def": "",
    "sentence": "He remained {{BLANK}} during the emergency.",
    "cn": "他在緊急情況下保持冷靜。"
  },
  {
    "word": "camel",
    "pos": "n.",
    "cn_def": "駱駝",
    "en_def": "",
    "sentence": "They rode a {{BLANK}} in the desert.",
    "cn": "他們在沙漠裡騎駱駝。"
  },
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園",
    "en_def": "",
    "sentence": "The university {{BLANK}} is very large.",
    "cn": "大學校園很大。"
  },
  {
    "word": "cancel",
    "pos": "v.",
    "cn_def": "取消",
    "en_def": "",
    "sentence": "The event was {{BLANK}} due to bad weather.",
    "cn": "由於天氣不好，活動被取消了。",
    "alts": [
      "cancelled"
    ]
  },
  {
    "word": "cancer",
    "pos": "n.",
    "cn_def": "癌症",
    "en_def": "",
    "sentence": "He was diagnosed with {{BLANK}}.",
    "cn": "他被診斷患有癌症。"
  },
  {
    "word": "captain",
    "pos": "n.",
    "cn_def": "隊長，船長",
    "en_def": "",
    "sentence": "The {{BLANK}} gave orders to the crew.",
    "cn": "隊長給船員下達了命令。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的",
    "en_def": "",
    "sentence": "He made a {{BLANK}} mistake.",
    "cn": "他犯了一個粗心的錯誤。"
  },
  {
    "word": "carpet",
    "pos": "n.",
    "cn_def": "地毯",
    "en_def": "",
    "sentence": "The {{BLANK}} in the living room is new.",
    "cn": "客廳的地毯是新的。"
  },
  {
    "word": "carrot",
    "pos": "n.",
    "cn_def": "紅蘿蔔",
    "en_def": "",
    "sentence": "She cut the {{BLANK}} into small pieces.",
    "cn": "她把紅蘿蔔切成小塊。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "卡通，漫畫",
    "en_def": "",
    "sentence": "The kids watched a {{BLANK}} on TV.",
    "cn": "孩子們在電視上看了一部卡通。"
  },
  {
    "word": "cash",
    "pos": "n.",
    "cn_def": "現金",
    "en_def": "",
    "sentence": "She paid for the groceries with {{BLANK}}.",
    "cn": "她用現金支付了雜貨費。"
  }
];

const MCQS = [
  {
    "q": "The hotel offers a breakfast ______.【自助餐】",
    "options": [
      "buffet",
      "carrot",
      "cage",
      "cafeteria"
    ],
    "answer": 0,
    "cn": "這家飯店提供早餐自助餐。",
    "vocabIndex": 0
  },
  {
    "q": "He filled the ______ with water.【桶】",
    "options": [
      "cable",
      "bucket",
      "calendar",
      "carrot"
    ],
    "answer": 1,
    "cn": "他把桶裝滿了水。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ was designed by a famous architect.【建築物】",
    "options": [
      "cable",
      "campus",
      "building",
      "carpet"
    ],
    "answer": 2,
    "cn": "這棟建築是由一位著名建築師設計的。",
    "vocabIndex": 2
  },
  {
    "q": "He carried a ______ of newspapers.【捆，束】",
    "options": [
      "cartoon",
      "cash",
      "cafeteria",
      "bundle"
    ],
    "answer": 3,
    "cn": "他拿著一捆報紙。",
    "vocabIndex": 3
  },
  {
    "q": "The balloon ______ suddenly.【爆炸，破裂】",
    "options": [
      "canceled",
      "develop",
      "burst",
      "envy"
    ],
    "answer": 2,
    "cn": "氣球突然爆炸了。",
    "vocabIndex": 4
  },
  {
    "q": "She added some ______ to the salad.【高麗菜】",
    "options": [
      "cage",
      "bucket",
      "cancer",
      "cabbage"
    ],
    "answer": 3,
    "cn": "她在沙拉裡加了一些高麗菜。",
    "vocabIndex": 5
  },
  {
    "q": "The internet ______ needs to be replaced.【電纜，纜繩】",
    "options": [
      "captain",
      "cable",
      "cash",
      "buffet"
    ],
    "answer": 1,
    "cn": "網路線需要更換。",
    "vocabIndex": 6
  },
  {
    "q": "We had lunch in the school ______.【自助餐廳】",
    "options": [
      "cafeteria",
      "camel",
      "captain",
      "cage"
    ],
    "answer": 0,
    "cn": "我們在學校自助餐廳吃了午餐。",
    "vocabIndex": 7
  },
  {
    "q": "The bird was singing in its ______.【籠子】",
    "options": [
      "cartoon",
      "cage",
      "cable",
      "bucket"
    ],
    "answer": 1,
    "cn": "鳥在籠子裡唱歌。",
    "vocabIndex": 8
  },
  {
    "q": "She marked the date on the ______.【日曆】",
    "options": [
      "cancer",
      "cafeteria",
      "calendar",
      "carrot"
    ],
    "answer": 2,
    "cn": "她在日曆上標記了日期。",
    "vocabIndex": 9
  },
  {
    "q": "He remained ______ during the emergency.【冷靜的，平靜的】",
    "options": [
      "careless",
      "impossible",
      "plain",
      "calm"
    ],
    "answer": 3,
    "cn": "他在緊急情況下保持冷靜。",
    "vocabIndex": 10
  },
  {
    "q": "They rode a ______ in the desert.【駱駝】",
    "options": [
      "camel",
      "cabbage",
      "calendar",
      "cafeteria"
    ],
    "answer": 0,
    "cn": "他們在沙漠裡騎駱駝。",
    "vocabIndex": 11
  },
  {
    "q": "The university ______ is very large.【校園】",
    "options": [
      "camel",
      "carrot",
      "cage",
      "campus"
    ],
    "answer": 3,
    "cn": "大學校園很大。",
    "vocabIndex": 12
  },
  {
    "q": "The event was ______ due to bad weather.【取消】",
    "options": [
      "burst",
      "canceled",
      "nodded",
      "directed"
    ],
    "answer": 1,
    "cn": "由於天氣不好，活動被取消了。",
    "vocabIndex": 13
  },
  {
    "q": "He was diagnosed with ______.【癌症】",
    "options": [
      "cancer",
      "camel",
      "captain",
      "bundle"
    ],
    "answer": 0,
    "cn": "他被診斷患有癌症。",
    "vocabIndex": 14
  },
  {
    "q": "The ______ gave orders to the crew.【隊長，船長】",
    "options": [
      "bundle",
      "cabbage",
      "captain",
      "cash"
    ],
    "answer": 2,
    "cn": "隊長給船員下達了命令。",
    "vocabIndex": 15
  },
  {
    "q": "He made a ______ mistake.【粗心的】",
    "options": [
      "calm",
      "careless",
      "jealous",
      "humorous"
    ],
    "answer": 1,
    "cn": "他犯了一個粗心的錯誤。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ in the living room is new.【地毯】",
    "options": [
      "cancer",
      "cafeteria",
      "cage",
      "carpet"
    ],
    "answer": 3,
    "cn": "客廳的地毯是新的。",
    "vocabIndex": 17
  },
  {
    "q": "She cut the ______ into small pieces.【紅蘿蔔】",
    "options": [
      "carrot",
      "camel",
      "bundle",
      "calendar"
    ],
    "answer": 0,
    "cn": "她把紅蘿蔔切成小塊。",
    "vocabIndex": 18
  },
  {
    "q": "The kids watched a ______ on TV.【卡通，漫畫】",
    "options": [
      "cafeteria",
      "cabbage",
      "cartoon",
      "camel"
    ],
    "answer": 2,
    "cn": "孩子們在電視上看了一部卡通。",
    "vocabIndex": 19
  },
  {
    "q": "She paid for the groceries with ______.【現金】",
    "options": [
      "bucket",
      "cash",
      "cancer",
      "cafeteria"
    ],
    "answer": 1,
    "cn": "她用現金支付了雜貨費。",
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "buffet": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "自助餐"
  },
  "bucket": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "桶"
  },
  "building": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "建築物"
  },
  "bundle": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "捆，束"
  },
  "burst": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "爆炸，破裂"
  },
  "cabbage": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "高麗菜"
  },
  "cable": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "電纜，纜繩"
  },
  "cafeteria": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "自助餐廳"
  },
  "cage": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "籠子"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "日曆"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "冷靜的，平靜的"
  },
  "camel": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "駱駝"
  },
  "campus": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "校園"
  },
  "canceled": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "取消"
  },
  "cancer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "癌症"
  },
  "captain": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "隊長，船長"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "粗心的"
  },
  "carpet": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地毯"
  },
  "carrot": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "紅蘿蔔"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "卡通，漫畫"
  },
  "cash": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "現金"
  },
  "develop": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "發展，開發"
  },
  "directed": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "指導，指揮"
  },
  "envy": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "嫉妒，羨慕"
  },
  "humorous": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "幽默的"
  },
  "impossible": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不可能的"
  },
  "jealous": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "嫉妒的"
  },
  "nodded": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "點頭，打瞌睡"
  },
  "plain": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "樸素的，平凡的"
  }
};

const EXTRA_GLOSSES = {};
