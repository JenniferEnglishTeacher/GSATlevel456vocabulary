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
    "en_def": "a meal where you take food by yourself from a long table",
    "sentence": "The hotel offers a breakfast {{BLANK}}.",
    "cn": "這家飯店提供早餐自助餐。"
  },
  {
    "word": "bucket",
    "pos": "n.",
    "cn_def": "桶",
    "en_def": "a round open container with a handle, used for carrying water",
    "sentence": "He filled the {{BLANK}} with water.",
    "cn": "他把桶裝滿了水。"
  },
  {
    "word": "building",
    "pos": "n.",
    "cn_def": "建築物",
    "en_def": "a house, school, store, or other place with walls and a roof",
    "sentence": "The {{BLANK}} was designed by a famous architect.",
    "cn": "這棟建築是由一位著名建築師設計的。"
  },
  {
    "word": "bundle",
    "pos": "n.",
    "cn_def": "捆，束",
    "en_def": "many things tied together",
    "sentence": "He carried a {{BLANK}} of newspapers.",
    "cn": "他拿著一捆報紙。"
  },
  {
    "word": "burst",
    "pos": "v.",
    "cn_def": "爆炸，破裂",
    "en_def": "to break open suddenly",
    "sentence": "The balloon {{BLANK}} suddenly.",
    "cn": "氣球突然爆炸了。"
  },
  {
    "word": "cabbage",
    "pos": "n.",
    "cn_def": "高麗菜",
    "en_def": "a round vegetable with thick green leaves",
    "sentence": "She added some {{BLANK}} to the salad.",
    "cn": "她在沙拉裡加了一些高麗菜。"
  },
  {
    "word": "cable",
    "pos": "n.",
    "cn_def": "電纜，纜繩",
    "en_def": "a thick wire that carries electricity or signals",
    "sentence": "The internet {{BLANK}} needs to be replaced.",
    "cn": "網路線需要更換。"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "cn_def": "自助餐廳",
    "en_def": "a restaurant in a school or office where you carry your own food to the table",
    "sentence": "We had lunch in the school {{BLANK}}.",
    "cn": "我們在學校自助餐廳吃了午餐。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子",
    "en_def": "a box made of bars for keeping birds or animals in",
    "sentence": "The bird was singing in its {{BLANK}}.",
    "cn": "鳥在籠子裡唱歌。"
  },
  {
    "word": "calendar",
    "pos": "n.",
    "cn_def": "日曆",
    "en_def": "a list that shows the days, weeks, and months of a year",
    "sentence": "She marked the date on the {{BLANK}}.",
    "cn": "她在日曆上標記了日期。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的，平靜的",
    "en_def": "quiet and not worried or excited",
    "sentence": "He remained {{BLANK}} during the emergency.",
    "cn": "他在緊急情況下保持冷靜。"
  },
  {
    "word": "camel",
    "pos": "n.",
    "cn_def": "駱駝",
    "en_def": "a big animal with one or two humps that lives in the desert",
    "sentence": "They rode a {{BLANK}} in the desert.",
    "cn": "他們在沙漠裡騎駱駝。"
  },
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園",
    "en_def": "the land and buildings of a school or university",
    "sentence": "The university {{BLANK}} is very large.",
    "cn": "大學校園很大。"
  },
  {
    "word": "cancel",
    "pos": "v.",
    "cn_def": "取消",
    "en_def": "to say that something planned will not happen",
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
    "en_def": "a very serious sickness in which bad cells grow in the body",
    "sentence": "He was diagnosed with {{BLANK}}.",
    "cn": "他被診斷患有癌症。"
  },
  {
    "word": "captain",
    "pos": "n.",
    "cn_def": "隊長，船長",
    "en_def": "the leader of a ship or a team",
    "sentence": "The {{BLANK}} gave orders to the crew.",
    "cn": "隊長給船員下達了命令。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的",
    "en_def": "not thinking about what you are doing, so you make mistakes",
    "sentence": "He made a {{BLANK}} mistake.",
    "cn": "他犯了一個粗心的錯誤。"
  },
  {
    "word": "carpet",
    "pos": "n.",
    "cn_def": "地毯",
    "en_def": "a thick, soft cover for a floor",
    "sentence": "The {{BLANK}} in the living room is new.",
    "cn": "客廳的地毯是新的。"
  },
  {
    "word": "carrot",
    "pos": "n.",
    "cn_def": "紅蘿蔔",
    "en_def": "a long orange vegetable that grows under the ground",
    "sentence": "She cut the {{BLANK}} into small pieces.",
    "cn": "她把紅蘿蔔切成小塊。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "卡通，漫畫",
    "en_def": "a funny film made with drawings, not real people",
    "sentence": "The kids watched a {{BLANK}} on TV.",
    "cn": "孩子們在電視上看了一部卡通。"
  },
  {
    "word": "cash",
    "pos": "n.",
    "cn_def": "現金",
    "en_def": "money in coins and paper bills",
    "sentence": "She paid for the groceries with {{BLANK}}.",
    "cn": "她用現金支付了雜貨費。"
  }
];

const MCQS = [
  {
    "q": "The hotel has a breakfast ______ every morning. You can walk around the tables and take as much food as you want.",
    "options": [
      "bucket",
      "buffet",
      "bundle",
      "cable"
    ],
    "answer": 1,
    "cn": "這家飯店提供早餐自助餐。",
    "vocabIndex": 0
  },
  {
    "q": "Please fill the ______ with water. I need it to wash the car and clean the floor.",
    "options": [
      "bucket",
      "buffet",
      "cartoon",
      "calendar"
    ],
    "answer": 0,
    "cn": "他把桶裝滿了水。",
    "vocabIndex": 1
  },
  {
    "q": "The tall ______ next to the station has fifty floors. Thousands of people work in its offices every day.",
    "options": [
      "bundle",
      "bucket",
      "camel",
      "building"
    ],
    "answer": 3,
    "cn": "這棟建築是由一位著名建築師設計的。",
    "vocabIndex": 2
  },
  {
    "q": "The old man tied the newspapers into a ______ with a rope. Then he carried it on his back to sell.",
    "options": [
      "buffet",
      "building",
      "bundle",
      "cartoon"
    ],
    "answer": 2,
    "cn": "他拿著一捆報紙。",
    "vocabIndex": 3
  },
  {
    "q": "Don't blow too much air into the balloon, or it will ______. The loud noise will scare the baby.",
    "options": [
      "burst",
      "cancel",
      "bark",
      "bathe"
    ],
    "answer": 0,
    "cn": "氣球突然爆炸了。",
    "vocabIndex": 4
  },
  {
    "q": "Mom bought a ______ and some carrots at the market. She will cook the green vegetable with pork for dinner.",
    "options": [
      "cage",
      "cable",
      "cabbage",
      "camel"
    ],
    "answer": 2,
    "cn": "她在沙拉裡加了一些高麗菜。",
    "vocabIndex": 5
  },
  {
    "q": "The TV doesn't work because the ______ is broken. We need a new one to join the TV and the wall.",
    "options": [
      "carpet",
      "cable",
      "carrot",
      "cage"
    ],
    "answer": 1,
    "cn": "網路線需要更換。",
    "vocabIndex": 6
  },
  {
    "q": "Most students eat lunch in the school ______. The food there is cheap, and there are many tables and chairs.",
    "options": [
      "calendar",
      "cartoon",
      "bucket",
      "cafeteria"
    ],
    "answer": 3,
    "cn": "我們在學校自助餐廳吃了午餐。",
    "vocabIndex": 7
  },
  {
    "q": "The bird is not happy in its small ______. It wants to fly out and be free in the sky.",
    "options": [
      "cable",
      "cash",
      "cage",
      "carpet"
    ],
    "answer": 2,
    "cn": "鳥在籠子裡唱歌。",
    "vocabIndex": 8
  },
  {
    "q": "Let me look at the ______ on the wall. Oh, Christmas is on a Friday this year, so we have a long weekend!",
    "options": [
      "calendar",
      "carpet",
      "cable",
      "cage"
    ],
    "answer": 0,
    "cn": "她在日曆上標記了日期。",
    "vocabIndex": 9
  },
  {
    "q": "When the earthquake happened, the teacher stayed ______. She spoke slowly and led us out of the classroom safely.",
    "options": [
      "careless",
      "calm",
      "broad",
      "bitter"
    ],
    "answer": 1,
    "cn": "他在緊急情況下保持冷靜。",
    "vocabIndex": 10
  },
  {
    "q": "A ______ can walk in the desert for many days without water. People ride on its back to cross the sand.",
    "options": [
      "carrot",
      "cabbage",
      "captain",
      "camel"
    ],
    "answer": 3,
    "cn": "他們在沙漠裡騎駱駝。",
    "vocabIndex": 11
  },
  {
    "q": "Our school has a beautiful ______. There are many trees, a big playground, and a small lake inside the school gate.",
    "options": [
      "cancer",
      "campus",
      "carrot",
      "cash"
    ],
    "answer": 1,
    "cn": "大學校園很大。",
    "vocabIndex": 12
  },
  {
    "q": "The baseball game was ______ because of the heavy rain. The players and fans all went home.",
    "options": [
      "burst",
      "barked",
      "canceled",
      "blamed"
    ],
    "answer": 2,
    "cn": "由於天氣不好，活動被取消了。",
    "vocabIndex": 13
  },
  {
    "q": "My grandfather has lung ______, so he has to stay in the hospital. The doctors are trying their best to help him.",
    "options": [
      "campus",
      "cash",
      "cartoon",
      "cancer"
    ],
    "answer": 3,
    "cn": "他被診斷患有癌症。",
    "vocabIndex": 14
  },
  {
    "q": "Tom is the ______ of our basketball team. He leads the other players and tells them what to do in the game.",
    "options": [
      "captain",
      "camel",
      "cartoon",
      "carpet"
    ],
    "answer": 0,
    "cn": "隊長給船員下達了命令。",
    "vocabIndex": 15
  },
  {
    "q": "Ben was ______ and left his wallet on the bus. He often loses things because he doesn't pay attention.",
    "options": [
      "calm",
      "broad",
      "basic",
      "careless"
    ],
    "answer": 3,
    "cn": "他犯了一個粗心的錯誤。",
    "vocabIndex": 16
  },
  {
    "q": "There is a soft red ______ on the living room floor. The children like to sit and play on it.",
    "options": [
      "cable",
      "carpet",
      "calendar",
      "campus"
    ],
    "answer": 1,
    "cn": "客廳的地毯是新的。",
    "vocabIndex": 17
  },
  {
    "q": "Rabbits love to eat ______. These long orange vegetables are good for your eyes, too.",
    "options": [
      "cables",
      "cages",
      "carrots",
      "carpets"
    ],
    "answer": 2,
    "cn": "她把紅蘿蔔切成小塊。",
    "vocabIndex": 18
  },
  {
    "q": "My little brother watches a ______ on TV every evening. His favorite one is about a cat and a mouse.",
    "options": [
      "cartoon",
      "carpet",
      "bucket",
      "bundle"
    ],
    "answer": 0,
    "cn": "孩子們在電視上看了一部卡通。",
    "vocabIndex": 19
  },
  {
    "q": "I don't have a credit card with me, so I will pay in ______. Here is a one-thousand-dollar bill.",
    "options": [
      "cancer",
      "campus",
      "cash",
      "cage"
    ],
    "answer": 2,
    "cn": "她用現金支付了雜貨費。",
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "bucket": {
    "pos": "n.",
    "en_def": "a round open container with a handle, used for carrying water",
    "cn_def": "桶"
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where you take food by yourself from a long table",
    "cn_def": "自助餐"
  },
  "bundle": {
    "pos": "n.",
    "en_def": "many things tied together",
    "cn_def": "捆，束"
  },
  "cable": {
    "pos": "n.",
    "en_def": "a thick wire that carries electricity or signals",
    "cn_def": "電纜，纜繩"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a funny film made with drawings, not real people",
    "cn_def": "卡通，漫畫"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a list that shows the days, weeks, and months of a year",
    "cn_def": "日曆"
  },
  "camel": {
    "pos": "n.",
    "en_def": "a big animal with one or two humps that lives in the desert",
    "cn_def": "駱駝"
  },
  "building": {
    "pos": "n.",
    "en_def": "a house, school, store, or other place with walls and a roof",
    "cn_def": "建築物"
  },
  "burst": {
    "pos": "v.",
    "en_def": "to break open suddenly",
    "cn_def": "爆炸，破裂"
  },
  "cancel": {
    "pos": "v.",
    "en_def": "to say that something planned will not happen",
    "cn_def": "取消"
  },
  "bark": {
    "pos": "v.",
    "en_def": "(of a dog) to make a short loud sound",
    "cn_def": "吠叫"
  },
  "bathe": {
    "pos": "v.",
    "en_def": "to wash your body in a bath",
    "cn_def": "洗澡"
  },
  "cage": {
    "pos": "n.",
    "en_def": "a box made of bars for keeping birds or animals in",
    "cn_def": "籠子"
  },
  "cabbage": {
    "pos": "n.",
    "en_def": "a round vegetable with thick green leaves",
    "cn_def": "高麗菜"
  },
  "carpet": {
    "pos": "n.",
    "en_def": "a thick, soft cover for a floor",
    "cn_def": "地毯"
  },
  "carrot": {
    "pos": "n.",
    "en_def": "a long orange vegetable that grows under the ground",
    "cn_def": "紅蘿蔔"
  },
  "cafeteria": {
    "pos": "n.",
    "en_def": "a restaurant in a school or office where you carry your own food to the table",
    "cn_def": "自助餐廳"
  },
  "cash": {
    "pos": "n.",
    "en_def": "money in coins and paper bills",
    "cn_def": "現金"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not thinking about what you are doing, so you make mistakes",
    "cn_def": "粗心的"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "quiet and not worried or excited",
    "cn_def": "冷靜的，平靜的"
  },
  "broad": {
    "pos": "adj.",
    "en_def": "wide",
    "cn_def": "寬的，廣泛的"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong taste that is not sweet, like black coffee",
    "cn_def": "苦的，痛苦的"
  },
  "captain": {
    "pos": "n.",
    "en_def": "the leader of a ship or a team",
    "cn_def": "隊長，船長"
  },
  "cancer": {
    "pos": "n.",
    "en_def": "a very serious sickness in which bad cells grow in the body",
    "cn_def": "癌症"
  },
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a school or university",
    "cn_def": "校園"
  },
  "barked": {
    "pos": "v.",
    "en_def": "(of a dog) to make a short loud sound",
    "cn_def": "吠叫"
  },
  "canceled": {
    "pos": "v.",
    "en_def": "to say that something planned will not happen",
    "cn_def": "取消"
  },
  "blamed": {
    "pos": "v.",
    "en_def": "to say that someone did something wrong",
    "cn_def": "責備，責怪"
  },
  "basic": {
    "pos": "adj.",
    "en_def": "simple and needed before you can learn more",
    "cn_def": "基本的，基礎的"
  },
  "cables": {
    "pos": "n.",
    "en_def": "a thick wire that carries electricity or signals",
    "cn_def": "電纜，纜繩"
  },
  "cages": {
    "pos": "n.",
    "en_def": "a box made of bars for keeping birds or animals in",
    "cn_def": "籠子"
  },
  "carrots": {
    "pos": "n.",
    "en_def": "a long orange vegetable that grows under the ground",
    "cn_def": "紅蘿蔔"
  },
  "carpets": {
    "pos": "n.",
    "en_def": "a thick, soft cover for a floor",
    "cn_def": "地毯"
  }
};

const EXTRA_GLOSSES = {};
