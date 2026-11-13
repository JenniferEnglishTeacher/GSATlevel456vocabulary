// Group 30 Quiz Data: Places / Buildings, Part 1 (地方/建築物 一)
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "Group 30 - Places / Buildings, Part 1 (地方/建築物 一)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "place",
    "pos": "n.",
    "cn_def": "地方",
    "en_def": "a spot, building, or area",
    "sentence": "Is there a good {{BLANK}} to eat near here? Yes. There's a noodle shop next to the station.",
    "cn": "這附近有好吃東西的地方嗎？ 有。車站旁邊有一家麵店。"
  },
  {
    "word": "airport",
    "pos": "n.",
    "cn_def": "機場",
    "en_def": "a place where airplanes take off and land",
    "sentence": "Why is Dad going to the {{BLANK}}? He's going there to pick up Grandma.",
    "cn": "爸爸為什麼要去機場？ 他要去那裡接奶奶。"
  },
  {
    "word": "station",
    "pos": "n.",
    "cn_def": "車站",
    "en_def": "a place where trains or buses stop for people",
    "sentence": "Is there a train {{BLANK}} near your school? Yes. It's across from the park.",
    "cn": "你們學校附近有火車站嗎？ 有。在公園對面。"
  },
  {
    "word": "bank",
    "pos": "n.",
    "cn_def": "銀行",
    "en_def": "a place where people keep and get their money",
    "sentence": "Where are you going? I'm going to the {{BLANK}} to get some money.",
    "cn": "你要去哪裡？ 我要去銀行領一些錢。"
  },
  {
    "word": "post office",
    "pos": "n.",
    "cn_def": "郵局",
    "en_def": "a place where you send letters and packages",
    "sentence": "Why did you go to the {{BLANK}}? I went there to send a letter to my pen pal.",
    "cn": "你為什麼去郵局？ 我去寄信給我的筆友。"
  },
  {
    "word": "department store",
    "pos": "n.",
    "cn_def": "百貨公司",
    "en_def": "a very big store that sells many kinds of things",
    "sentence": "Where is the {{BLANK}}? It's between the bank and the movie theater.",
    "cn": "百貨公司在哪裡？ 在銀行和電影院之間。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "購物中心；商場",
    "en_def": "a big building with many shops inside",
    "sentence": "Why are you going to the {{BLANK}}? I'm going there to buy new shoes.",
    "cn": "你為什麼要去購物中心？ 我要去那裡買新鞋子。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場；市集",
    "en_def": "a place where people buy and sell food and other things",
    "sentence": "Why does Grandma go to the {{BLANK}} every morning? She goes there to buy fresh vegetables.",
    "cn": "奶奶為什麼每天早上去市場？ 她去那裡買新鮮的蔬菜。"
  },
  {
    "word": "supermarket",
    "pos": "n.",
    "cn_def": "超市",
    "en_def": "a big store that sells food and things for the home",
    "sentence": "Is there a {{BLANK}} near your home? Yes. There's one in front of my building.",
    "cn": "你家附近有超市嗎？ 有。我住的大樓前面就有一家。"
  },
  {
    "word": "store",
    "pos": "n.",
    "cn_def": "商店",
    "en_def": "a place where you can buy things",
    "sentence": "Is there a shoe {{BLANK}} near here? Yes. It's next to the bakery.",
    "cn": "這附近有鞋店嗎？ 有。在麵包店旁邊。"
  },
  {
    "word": "store",
    "pos": "v.",
    "cn_def": "貯存",
    "en_def": "to put something away and keep it to use later",
    "sentence": "Why are you going to the basement? I'm going there to store these old boxes. We {{BLANK}} things down there.",
    "cn": "你為什麼要去地下室？ 我要去那裡放這些舊箱子。我們把東西存放在那裡。"
  },
  {
    "word": "shop",
    "pos": "n.",
    "cn_def": "商店",
    "en_def": "a small place where you can buy things",
    "sentence": "Is there a flower {{BLANK}} near the hospital? Yes. It's across from the hospital.",
    "cn": "醫院附近有花店嗎？ 有。在醫院對面。"
  },
  {
    "word": "convenience store",
    "pos": "n.",
    "cn_def": "便利商店",
    "en_def": "a small store that is open for long hours and sells drinks, snacks, and daily things",
    "sentence": "Why did you go to the {{BLANK}}? I went there to buy a drink.",
    "cn": "你為什麼去便利商店？ 我去那裡買飲料。"
  },
  {
    "word": "bakery",
    "pos": "n.",
    "cn_def": "麵包店",
    "en_def": "a shop that makes and sells bread and cakes",
    "sentence": "Where are you going, Mom? I'm going to the {{BLANK}} to get some bread.",
    "cn": "媽，你要去哪裡？ 我要去麵包店買些麵包。"
  },
  {
    "word": "bookstore",
    "pos": "n.",
    "cn_def": "書店",
    "en_def": "a shop that sells books",
    "sentence": "Is there a {{BLANK}} near the MRT station? Yes. It's behind the station.",
    "cn": "捷運站附近有書店嗎？ 有。在車站後面。"
  },
  {
    "word": "drugstore",
    "pos": "n.",
    "cn_def": "藥妝店；藥房",
    "en_def": "a shop that sells medicine and things for your body",
    "sentence": "Why did you go to the {{BLANK}}? I went there to buy some cold medicine.",
    "cn": "你為什麼去藥妝店？ 我去那裡買感冒藥。"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "cn_def": "自助餐館",
    "en_def": "a place in a school or office where you get food and carry it to a table",
    "sentence": "Is there a {{BLANK}} in your school? Yes. It's next to the library.",
    "cn": "你們學校有自助餐廳嗎？ 有。在圖書館旁邊。"
  },
  {
    "word": "restaurant",
    "pos": "n.",
    "cn_def": "餐廳",
    "en_def": "a place where you pay to sit and eat a meal",
    "sentence": "Why did your family go to the {{BLANK}}? We went there to celebrate Dad's birthday.",
    "cn": "你們家為什麼去餐廳？ 我們去那裡慶祝爸爸的生日。"
  },
  {
    "word": "gym",
    "pos": "n.",
    "cn_def": "體育館；健身房",
    "en_def": "a room or building for exercise and sports",
    "sentence": "Why does Ben go to the {{BLANK}} every day? He goes there to exercise.",
    "cn": "班為什麼每天都去健身房？ 他去那裡運動。"
  }
];

const MCQS = [
  {
    "q": "Is there a good ______ to eat near here? Yes. There's a noodle shop next to the station.",
    "options": [
      "drugstore",
      "station",
      "place",
      "bank"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Why is Dad going to the ______? He's going there to pick up Grandma.",
    "options": [
      "airport",
      "bakery",
      "restaurant",
      "market"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Is there a train ______ near your school? Yes. It's across from the park.",
    "options": [
      "shop",
      "department store",
      "bookstore",
      "station"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Where are you going? I'm going to the ______ to get some money.",
    "options": [
      "supermarket",
      "bank",
      "restaurant",
      "store"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Why did you go to the ______? I went there to send a letter to my pen pal.",
    "options": [
      "post office",
      "airport",
      "convenience store",
      "mall"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Where is the ______? It's between the bank and the movie theater.",
    "options": [
      "post office",
      "department store",
      "market",
      "place"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Why are you going to the ______? I'm going there to buy new shoes.",
    "options": [
      "drugstore",
      "shop",
      "market",
      "mall"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Why does Grandma go to the ______ every morning? She goes there to buy fresh vegetables.",
    "options": [
      "bakery",
      "gym",
      "market",
      "convenience store"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Is there a ______ near your home? Yes. There's one in front of my building.",
    "options": [
      "bakery",
      "supermarket",
      "mall",
      "store"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Is there a shoe ______ near here? Yes. It's next to the bakery.",
    "options": [
      "department store",
      "station",
      "bakery",
      "store"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Why are you going to the basement? I'm going there to store these old boxes. We ______ things down there.",
    "options": [
      "store",
      "guide",
      "pronounce",
      "arrange"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Is there a flower ______ near the hospital? Yes. It's across from the hospital.",
    "options": [
      "bookstore",
      "department store",
      "shop",
      "supermarket"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Why did you go to the ______? I went there to buy a drink.",
    "options": [
      "convenience store",
      "post office",
      "restaurant",
      "drugstore"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Where are you going, Mom? I'm going to the ______ to get some bread.",
    "options": [
      "post office",
      "convenience store",
      "restaurant",
      "bakery"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Is there a ______ near the MRT station? Yes. It's behind the station.",
    "options": [
      "supermarket",
      "bookstore",
      "cafeteria",
      "gym"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Why did you go to the ______? I went there to buy some cold medicine.",
    "options": [
      "bank",
      "convenience store",
      "drugstore",
      "cafeteria"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Is there a ______ in your school? Yes. It's next to the library.",
    "options": [
      "restaurant",
      "cafeteria",
      "airport",
      "bank"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Why did your family go to the ______? We went there to celebrate Dad's birthday.",
    "options": [
      "market",
      "post office",
      "restaurant",
      "mall"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Why does Ben go to the ______ every day? He goes there to exercise.",
    "options": [
      "market",
      "bank",
      "bakery",
      "gym"
    ],
    "answer": 3,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "place": {
    "pos": "n.",
    "en_def": "a spot, building, or area",
    "cn_def": "地方",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a spot, building, or area",
        "cn_def": "地方"
      }
    ]
  },
  "airport": {
    "pos": "n.",
    "en_def": "a place where airplanes take off and land",
    "cn_def": "機場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where airplanes take off and land",
        "cn_def": "機場"
      }
    ]
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains or buses stop for people",
    "cn_def": "車站",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where trains or buses stop for people",
        "cn_def": "車站"
      }
    ]
  },
  "bank": {
    "pos": "n.",
    "en_def": "a place where people keep and get their money",
    "cn_def": "銀行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where people keep and get their money",
        "cn_def": "銀行"
      }
    ]
  },
  "post office": {
    "pos": "n.",
    "en_def": "a place where you send letters and packages",
    "cn_def": "郵局",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where you send letters and packages",
        "cn_def": "郵局"
      }
    ]
  },
  "department store": {
    "pos": "n.",
    "en_def": "a very big store that sells many kinds of things",
    "cn_def": "百貨公司",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very big store that sells many kinds of things",
        "cn_def": "百貨公司"
      }
    ]
  },
  "mall": {
    "pos": "n.",
    "en_def": "a big building with many shops inside",
    "cn_def": "購物中心；商場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big building with many shops inside",
        "cn_def": "購物中心；商場"
      }
    ]
  },
  "market": {
    "pos": "n.",
    "en_def": "a place where people buy and sell food and other things",
    "cn_def": "市場；市集",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where people buy and sell food and other things",
        "cn_def": "市場；市集"
      }
    ]
  },
  "supermarket": {
    "pos": "n.",
    "en_def": "a big store that sells food and things for the home",
    "cn_def": "超市",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a big store that sells food and things for the home",
        "cn_def": "超市"
      }
    ]
  },
  "store": {
    "pos": "n.",
    "en_def": "a place where you can buy things",
    "cn_def": "商店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where you can buy things",
        "cn_def": "商店"
      },
      {
        "pos": "v.",
        "en_def": "to put something away and keep it to use later",
        "cn_def": "貯存"
      }
    ]
  },
  "shop": {
    "pos": "n.",
    "en_def": "a small place where you can buy things",
    "cn_def": "商店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small place where you can buy things",
        "cn_def": "商店"
      }
    ]
  },
  "convenience store": {
    "pos": "n.",
    "en_def": "a small store that is open for long hours and sells drinks, snacks, and daily things",
    "cn_def": "便利商店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small store that is open for long hours and sells drinks, snacks, and daily things",
        "cn_def": "便利商店"
      }
    ]
  },
  "bakery": {
    "pos": "n.",
    "en_def": "a shop that makes and sells bread and cakes",
    "cn_def": "麵包店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a shop that makes and sells bread and cakes",
        "cn_def": "麵包店"
      }
    ]
  },
  "bookstore": {
    "pos": "n.",
    "en_def": "a shop that sells books",
    "cn_def": "書店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a shop that sells books",
        "cn_def": "書店"
      }
    ]
  },
  "drugstore": {
    "pos": "n.",
    "en_def": "a shop that sells medicine and things for your body",
    "cn_def": "藥妝店；藥房",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a shop that sells medicine and things for your body",
        "cn_def": "藥妝店；藥房"
      }
    ]
  },
  "cafeteria": {
    "pos": "n.",
    "en_def": "a place in a school or office where you get food and carry it to a table",
    "cn_def": "自助餐館",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place in a school or office where you get food and carry it to a table",
        "cn_def": "自助餐館"
      }
    ]
  },
  "restaurant": {
    "pos": "n.",
    "en_def": "a place where you pay to sit and eat a meal",
    "cn_def": "餐廳",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place where you pay to sit and eat a meal",
        "cn_def": "餐廳"
      }
    ]
  },
  "gym": {
    "pos": "n.",
    "en_def": "a room or building for exercise and sports",
    "cn_def": "體育館；健身房",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a room or building for exercise and sports",
        "cn_def": "體育館；健身房"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
