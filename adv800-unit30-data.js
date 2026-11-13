// Unit 30 Quiz Data: rubber – seek
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U30 - rubber – seek",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rubber",
    "pos": "n.",
    "cn_def": "橡膠，橡皮",
    "en_def": "",
    "sentence": "The ball is made of {{BLANK}}.",
    "cn": "這個球是橡膠做的。"
  },
  {
    "word": "rude",
    "pos": "adj.",
    "cn_def": "無禮的，粗魯的",
    "en_def": "",
    "sentence": "It is {{BLANK}} to interrupt someone while they are speaking.",
    "cn": "打斷別人說話是不禮貌的。"
  },
  {
    "word": "ruin",
    "pos": "v.",
    "cn_def": "毀壞，破壞",
    "en_def": "",
    "sentence": "The storm {{BLANK}} their picnic plans.",
    "cn": "暴風雨破壞了他們的野餐計劃。"
  },
  {
    "word": "rush",
    "pos": "v.",
    "cn_def": "衝，趕緊",
    "en_def": "",
    "sentence": "She had to {{BLANK}} to catch the bus.",
    "cn": "她不得不趕緊去趕公車。"
  },
  {
    "word": "sailor",
    "pos": "n.",
    "cn_def": "水手，海員",
    "en_def": "",
    "sentence": "The {{BLANK}} navigated the ship through the storm.",
    "cn": "水手駕船穿越暴風雨。"
  },
  {
    "word": "sample",
    "pos": "n.",
    "cn_def": "樣品，範例",
    "en_def": "",
    "sentence": "She gave me a {{BLANK}} of the product.",
    "cn": "她給了我一個產品樣品。"
  },
  {
    "word": "sand",
    "pos": "n.",
    "cn_def": "沙，沙灘",
    "en_def": "",
    "sentence": "The beach is covered with white {{BLANK}}.",
    "cn": "海灘上覆蓋著白色的沙。"
  },
  {
    "word": "satisfy",
    "pos": "v.",
    "cn_def": "滿足，使滿意",
    "en_def": "",
    "sentence": "The meal was enough to {{BLANK}} everyone's hunger.",
    "cn": "這頓飯足以滿足每個人的飢餓。"
  },
  {
    "word": "saucer",
    "pos": "n.",
    "cn_def": "茶碟，托盤",
    "en_def": "",
    "sentence": "She placed the cup on the {{BLANK}}.",
    "cn": "她把杯子放在茶碟上。"
  },
  {
    "word": "scarf",
    "pos": "n.",
    "cn_def": "圍巾",
    "en_def": "",
    "sentence": "She wrapped a warm {{BLANK}} around her neck.",
    "cn": "她把一條暖和的圍巾圍在脖子上。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "場景，景象",
    "en_def": "",
    "sentence": "The movie has a beautiful {{BLANK}}.",
    "cn": "這部電影有一個美麗的場景。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景",
    "en_def": "",
    "sentence": "The {{BLANK}} from the top of the hill is breathtaking.",
    "cn": "山頂的風景令人驚嘆。"
  },
  {
    "word": "scientist",
    "pos": "n.",
    "cn_def": "科學家",
    "en_def": "",
    "sentence": "She is a renowned {{BLANK}}.",
    "cn": "她是一位著名的科學家。"
  },
  {
    "word": "score",
    "pos": "n.",
    "cn_def": "分數，得分",
    "en_def": "",
    "sentence": "He got a high {{BLANK}} on the test.",
    "cn": "他在考試中得了高分。"
  },
  {
    "word": "seafood",
    "pos": "n.",
    "cn_def": "海鮮，海產品",
    "en_def": "",
    "sentence": "The restaurant is famous for its {{BLANK}}.",
    "cn": "這家餐廳以其海鮮著稱。"
  },
  {
    "word": "search",
    "pos": "v.",
    "cn_def": "搜索，尋找",
    "en_def": "",
    "sentence": "They are {{BLANK}} for a new manager.",
    "cn": "他們正在尋找一位新經理。"
  },
  {
    "word": "secondary",
    "pos": "adj.",
    "cn_def": "次要的，中等的",
    "en_def": "",
    "sentence": "He is a {{BLANK}} school teacher.",
    "cn": "他是一名中學教師。"
  },
  {
    "word": "secret",
    "pos": "n.",
    "cn_def": "秘密",
    "en_def": "",
    "sentence": "She told me a {{BLANK}}.",
    "cn": "她告訴了我一個秘密。"
  },
  {
    "word": "section",
    "pos": "n.",
    "cn_def": "部分，部門",
    "en_def": "",
    "sentence": "This {{BLANK}} of the book is very interesting.",
    "cn": "這本書的這部分非常有趣。"
  },
  {
    "word": "seek",
    "pos": "v.",
    "cn_def": "尋找，追求",
    "en_def": "",
    "sentence": "He is {{BLANK}} a new job.",
    "cn": "他正在尋找新工作。"
  }
];

const MCQS = [
  {
    "q": "The ball is made of ______.【橡膠，橡皮】",
    "options": [
      "sailor",
      "rubber",
      "scenery",
      "scene"
    ],
    "answer": 1,
    "cn": "這個球是橡膠做的。",
    "vocabIndex": 0
  },
  {
    "q": "It is ______ to interrupt someone while they are speaking.【無禮的，粗魯的】",
    "options": [
      "secondary",
      "violent",
      "female",
      "rude"
    ],
    "answer": 3,
    "cn": "打斷別人說話是不禮貌的。",
    "vocabIndex": 1
  },
  {
    "q": "The storm ______ their picnic plans.【毀壞，破壞】",
    "options": [
      "rush",
      "searching",
      "ruined",
      "satisfy"
    ],
    "answer": 2,
    "cn": "暴風雨破壞了他們的野餐計劃。",
    "vocabIndex": 2
  },
  {
    "q": "She had to ______ to catch the bus.【衝，趕緊】",
    "options": [
      "rush",
      "satisfy",
      "searching",
      "ruined"
    ],
    "answer": 0,
    "cn": "她不得不趕緊去趕公車。",
    "vocabIndex": 3
  },
  {
    "q": "The ______ navigated the ship through the storm.【水手，海員】",
    "options": [
      "sample",
      "sand",
      "saucer",
      "sailor"
    ],
    "answer": 3,
    "cn": "水手駕船穿越暴風雨。",
    "vocabIndex": 4
  },
  {
    "q": "She gave me a ______ of the product.【樣品，範例】",
    "options": [
      "saucer",
      "sample",
      "section",
      "sand"
    ],
    "answer": 1,
    "cn": "她給了我一個產品樣品。",
    "vocabIndex": 5
  },
  {
    "q": "The beach is covered with white ______.【沙，沙灘】",
    "options": [
      "rubber",
      "scenery",
      "sand",
      "seafood"
    ],
    "answer": 2,
    "cn": "海灘上覆蓋著白色的沙。",
    "vocabIndex": 6
  },
  {
    "q": "The meal was enough to ______ everyone's hunger.【滿足，使滿意】",
    "options": [
      "satisfy",
      "rush",
      "searching",
      "seeking"
    ],
    "answer": 0,
    "cn": "這頓飯足以滿足每個人的飢餓。",
    "vocabIndex": 7
  },
  {
    "q": "She placed the cup on the ______.【茶碟，托盤】",
    "options": [
      "rubber",
      "saucer",
      "score",
      "sample"
    ],
    "answer": 1,
    "cn": "她把杯子放在茶碟上。",
    "vocabIndex": 8
  },
  {
    "q": "She wrapped a warm ______ around her neck.【圍巾】",
    "options": [
      "scenery",
      "saucer",
      "seafood",
      "scarf"
    ],
    "answer": 3,
    "cn": "她把一條暖和的圍巾圍在脖子上。",
    "vocabIndex": 9
  },
  {
    "q": "The movie has a beautiful ______.【場景，景象】",
    "options": [
      "scenery",
      "score",
      "scene",
      "sample"
    ],
    "answer": 2,
    "cn": "這部電影有一個美麗的場景。",
    "vocabIndex": 10
  },
  {
    "q": "The ______ from the top of the hill is breathtaking.【風景】",
    "options": [
      "scenery",
      "scientist",
      "scarf",
      "secret"
    ],
    "answer": 0,
    "cn": "山頂的風景令人驚嘆。",
    "vocabIndex": 11
  },
  {
    "q": "She is a renowned ______.【科學家】",
    "options": [
      "rubber",
      "seafood",
      "scientist",
      "scenery"
    ],
    "answer": 2,
    "cn": "她是一位著名的科學家。",
    "vocabIndex": 12
  },
  {
    "q": "He got a high ______ on the test.【分數，得分】",
    "options": [
      "scene",
      "score",
      "sand",
      "section"
    ],
    "answer": 1,
    "cn": "他在考試中得了高分。",
    "vocabIndex": 13
  },
  {
    "q": "The restaurant is famous for its ______.【海鮮，海產品】",
    "options": [
      "seafood",
      "scene",
      "sand",
      "scenery"
    ],
    "answer": 0,
    "cn": "這家餐廳以其海鮮著稱。",
    "vocabIndex": 14
  },
  {
    "q": "They are ______ for a new manager.【搜索，尋找】",
    "options": [
      "seeking",
      "satisfy",
      "rush",
      "searching"
    ],
    "answer": 3,
    "cn": "他們正在尋找一位新經理。",
    "vocabIndex": 15
  },
  {
    "q": "He is a ______ school teacher.【次要的，中等的】",
    "options": [
      "rude",
      "impossible",
      "secondary",
      "golden"
    ],
    "answer": 2,
    "cn": "他是一名中學教師。",
    "vocabIndex": 16
  },
  {
    "q": "She told me a ______.【秘密】",
    "options": [
      "secret",
      "scientist",
      "seafood",
      "section"
    ],
    "answer": 0,
    "cn": "她告訴了我一個秘密。",
    "vocabIndex": 17
  },
  {
    "q": "This ______ of the book is very interesting.【部分，部門】",
    "options": [
      "saucer",
      "section",
      "seafood",
      "rubber"
    ],
    "answer": 1,
    "cn": "這本書的這部分非常有趣。",
    "vocabIndex": 18
  },
  {
    "q": "He is ______ a new job.【尋找，追求】",
    "options": [
      "searching",
      "ruined",
      "satisfy",
      "seeking"
    ],
    "answer": 3,
    "cn": "他正在尋找新工作。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "female": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "女性的"
  },
  "golden": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "金色的，極好的"
  },
  "impossible": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不可能的"
  },
  "rubber": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "橡膠，橡皮"
  },
  "rude": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "無禮的，粗魯的"
  },
  "ruined": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "毀壞，破壞"
  },
  "rush": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "衝，趕緊"
  },
  "sailor": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "水手，海員"
  },
  "sample": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "樣品，範例"
  },
  "sand": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "沙，沙灘"
  },
  "satisfy": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "滿足，使滿意"
  },
  "saucer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "茶碟，托盤"
  },
  "scarf": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "圍巾"
  },
  "scene": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "場景，景象"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "風景"
  },
  "scientist": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "科學家"
  },
  "score": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "分數，得分"
  },
  "seafood": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "海鮮，海產品"
  },
  "searching": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "搜索，尋找"
  },
  "secondary": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "次要的，中等的"
  },
  "secret": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "秘密"
  },
  "section": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "部分，部門"
  },
  "seeking": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "尋找，追求"
  },
  "violent": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "暴力的，猛烈的"
  }
};

const EXTRA_GLOSSES = {};
