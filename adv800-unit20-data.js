// Unit 20 Quiz Data: kitten – liquid
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U20 - kitten – liquid",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "kitten",
    "pos": "n.",
    "cn_def": "小貓",
    "en_def": "a baby cat",
    "sentence": "The {{BLANK}} played with a ball of yarn.",
    "cn": "小貓玩了一個毛線球。"
  },
  {
    "word": "koala",
    "pos": "n.",
    "cn_def": "無尾熊",
    "en_def": "a gray animal from Australia that lives in trees and looks like a small bear",
    "sentence": "They saw a {{BLANK}} sleeping in a tree.",
    "cn": "他們看到一隻無尾熊在樹上睡覺。"
  },
  {
    "word": "lack",
    "pos": "v.",
    "cn_def": "缺乏，缺少",
    "en_def": "to not have something, or not have enough of it",
    "sentence": "They {{BLANK}} the resources to complete the project.",
    "cn": "他們缺乏完成這個專案的資源。"
  },
  {
    "word": "lady",
    "pos": "n.",
    "cn_def": "女士，小姐",
    "en_def": "a polite word for a woman",
    "sentence": "She is a kind and elegant {{BLANK}}.",
    "cn": "她是一位善良而優雅的女士。"
  },
  {
    "word": "lamb",
    "pos": "n.",
    "cn_def": "羔羊，羊肉",
    "en_def": "a baby sheep; meat from a young sheep",
    "sentence": "They had roast {{BLANK}} for dinner.",
    "cn": "他們晚餐吃了烤羊肉。"
  },
  {
    "word": "lantern",
    "pos": "n.",
    "cn_def": "燈籠，提燈",
    "en_def": "a light inside a paper or glass cover that you can carry",
    "sentence": "They carried a {{BLANK}} during the night walk.",
    "cn": "他們在夜間散步時提著燈籠。"
  },
  {
    "word": "latest",
    "pos": "adj.",
    "cn_def": "最新的，最近的",
    "en_def": "the newest",
    "sentence": "She is wearing the {{BLANK}} fashion.",
    "cn": "她穿著最新的時尚。"
  },
  {
    "word": "latter",
    "pos": "adj.",
    "cn_def": "後者的，較後的",
    "en_def": "nearer to the end; the second of two",
    "sentence": "The {{BLANK}} half of the year is usually busier.",
    "cn": "年後半部分通常比較忙。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律，法規",
    "en_def": "the rules of a country; the study of these rules",
    "sentence": "He studied {{BLANK}} at university.",
    "cn": "他在大學學習法律。"
  },
  {
    "word": "lay",
    "pos": "v.",
    "cn_def": "放置，躺下",
    "en_def": "to put something down carefully",
    "sentence": "She {{BLANK}} the book on the table.",
    "cn": "她把書放在桌子上。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "樹葉，葉子",
    "en_def": "one of the flat green parts of a tree or plant",
    "sentence": "The {{BLANK}} fell from the tree.",
    "cn": "樹葉從樹上掉下來。",
    "alts": [
      "leaves"
    ]
  },
  {
    "word": "lettuce",
    "pos": "n.",
    "cn_def": "生菜",
    "en_def": "a vegetable with big green leaves, used in salads",
    "sentence": "She added {{BLANK}} to her sandwich.",
    "cn": "她在三明治裡加了生菜。"
  },
  {
    "word": "lick",
    "pos": "v.",
    "cn_def": "舔",
    "en_def": "to move your tongue over something",
    "sentence": "The cat {{BLANK}} its paw.",
    "cn": "貓舔了舔爪子。"
  },
  {
    "word": "lid",
    "pos": "n.",
    "cn_def": "蓋子",
    "en_def": "a cover for a pot, cup, or box",
    "sentence": "She put the {{BLANK}} on the pot.",
    "cn": "她把蓋子蓋在鍋上。"
  },
  {
    "word": "lift",
    "pos": "v.",
    "cn_def": "舉起，抬起",
    "en_def": "to move something up",
    "sentence": "He {{BLANK}} the heavy box.",
    "cn": "他舉起了重箱子。"
  },
  {
    "word": "lightning",
    "pos": "n.",
    "cn_def": "閃電",
    "en_def": "a bright light in the sky during a storm",
    "sentence": "The {{BLANK}} lit up the sky.",
    "cn": "閃電照亮了天空。"
  },
  {
    "word": "likely",
    "pos": "adj.",
    "cn_def": "很可能的",
    "en_def": "expected to happen",
    "sentence": "It is {{BLANK}} to rain tomorrow.",
    "cn": "明天很可能會下雨。"
  },
  {
    "word": "limit",
    "pos": "n.",
    "cn_def": "限制，界限",
    "en_def": "the highest number or amount that is allowed",
    "sentence": "The speed {{BLANK}} is 60 mph.",
    "cn": "限速是每小時60英里。"
  },
  {
    "word": "link",
    "pos": "n.",
    "cn_def": "連接，聯繫",
    "en_def": "a connection between two things",
    "sentence": "There is a direct {{BLANK}} between diet and health.",
    "cn": "飲食和健康之間有直接聯繫。"
  },
  {
    "word": "liquid",
    "pos": "n.",
    "cn_def": "液體",
    "en_def": "something that flows, like water or milk",
    "sentence": "Water is a {{BLANK}} at room temperature.",
    "cn": "水在室溫下是液體。"
  }
];

const MCQS = [
  {
    "q": "The ______ played with a ball of yarn.【小貓】",
    "options": [
      "kitten",
      "lamb",
      "lady",
      "lantern"
    ],
    "answer": 0,
    "cn": "小貓玩了一個毛線球。",
    "vocabIndex": 0
  },
  {
    "q": "They saw a ______ sleeping in a tree.【無尾熊】",
    "options": [
      "law",
      "liquid",
      "koala",
      "leaf"
    ],
    "answer": 2,
    "cn": "他們看到一隻無尾熊在樹上睡覺。",
    "vocabIndex": 1
  },
  {
    "q": "They ______ the resources to complete the project.【缺乏，缺少】",
    "options": [
      "laid",
      "licked",
      "lifted",
      "lack"
    ],
    "answer": 3,
    "cn": "他們缺乏完成這個專案的資源。",
    "vocabIndex": 2
  },
  {
    "q": "She is a kind and elegant ______.【女士，小姐】",
    "options": [
      "law",
      "lady",
      "lettuce",
      "leaf"
    ],
    "answer": 1,
    "cn": "她是一位善良而優雅的女士。",
    "vocabIndex": 3
  },
  {
    "q": "They had roast ______ for dinner.【羔羊，羊肉】",
    "options": [
      "liquid",
      "koala",
      "lamb",
      "lid"
    ],
    "answer": 2,
    "cn": "他們晚餐吃了烤羊肉。",
    "vocabIndex": 4
  },
  {
    "q": "They carried a ______ during the night walk.【燈籠，提燈】",
    "options": [
      "liquid",
      "link",
      "limit",
      "lantern"
    ],
    "answer": 3,
    "cn": "他們在夜間散步時提著燈籠。",
    "vocabIndex": 5
  },
  {
    "q": "She is wearing the ______ fashion.【最新的，最近的】",
    "options": [
      "latest",
      "likely",
      "latter",
      "daily"
    ],
    "answer": 0,
    "cn": "她穿著最新的時尚。",
    "vocabIndex": 6
  },
  {
    "q": "The ______ half of the year is usually busier.【後者的，較後的】",
    "options": [
      "likely",
      "latter",
      "latest",
      "international"
    ],
    "answer": 1,
    "cn": "年後半部分通常比較忙。",
    "vocabIndex": 7
  },
  {
    "q": "He studied ______ at university.【法律，法規】",
    "options": [
      "law",
      "lid",
      "lamb",
      "liquid"
    ],
    "answer": 0,
    "cn": "他在大學學習法律。",
    "vocabIndex": 8
  },
  {
    "q": "She ______ the book on the table.【放置，躺下】",
    "options": [
      "lack",
      "licked",
      "lifted",
      "laid"
    ],
    "answer": 3,
    "cn": "她把書放在桌子上。",
    "vocabIndex": 9
  },
  {
    "q": "The ______ fell from the tree.【樹葉，葉子】",
    "options": [
      "kitten",
      "link",
      "leaf",
      "lady"
    ],
    "answer": 2,
    "cn": "樹葉從樹上掉下來。",
    "vocabIndex": 10
  },
  {
    "q": "She added ______ to her sandwich.【生菜】",
    "options": [
      "law",
      "lettuce",
      "leaf",
      "lamb"
    ],
    "answer": 1,
    "cn": "她在三明治裡加了生菜。",
    "vocabIndex": 11
  },
  {
    "q": "The cat ______ its paw.【舔】",
    "options": [
      "lifted",
      "laid",
      "licked",
      "lack"
    ],
    "answer": 2,
    "cn": "貓舔了舔爪子。",
    "vocabIndex": 12
  },
  {
    "q": "She put the ______ on the pot.【蓋子】",
    "options": [
      "lamb",
      "lid",
      "lettuce",
      "link"
    ],
    "answer": 1,
    "cn": "她把蓋子蓋在鍋上。",
    "vocabIndex": 13
  },
  {
    "q": "He ______ the heavy box.【舉起，抬起】",
    "options": [
      "licked",
      "laid",
      "lack",
      "lifted"
    ],
    "answer": 3,
    "cn": "他舉起了重箱子。",
    "vocabIndex": 14
  },
  {
    "q": "The ______ lit up the sky.【閃電】",
    "options": [
      "lightning",
      "lantern",
      "lid",
      "lady"
    ],
    "answer": 0,
    "cn": "閃電照亮了天空。",
    "vocabIndex": 15
  },
  {
    "q": "It is ______ to rain tomorrow.【很可能的】",
    "options": [
      "latter",
      "latest",
      "equal",
      "likely"
    ],
    "answer": 3,
    "cn": "明天很可能會下雨。",
    "vocabIndex": 16
  },
  {
    "q": "The speed ______ is 60 mph.【限制，界限】",
    "options": [
      "link",
      "limit",
      "law",
      "leaf"
    ],
    "answer": 1,
    "cn": "限速是每小時60英里。",
    "vocabIndex": 17
  },
  {
    "q": "There is a direct ______ between diet and health.【連接，聯繫】",
    "options": [
      "law",
      "lantern",
      "link",
      "lid"
    ],
    "answer": 2,
    "cn": "飲食和健康之間有直接聯繫。",
    "vocabIndex": 18
  },
  {
    "q": "Water is a ______ at room temperature.【液體】",
    "options": [
      "liquid",
      "law",
      "link",
      "lantern"
    ],
    "answer": 0,
    "cn": "水在室溫下是液體。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "daily": {
    "pos": "adj.",
    "en_def": "happening or coming out every day",
    "cn_def": "每日的，日常的"
  },
  "equal": {
    "pos": "adj.",
    "en_def": "the same in size, number, or value",
    "cn_def": "平等的，相等的"
  },
  "international": {
    "pos": "adj.",
    "en_def": "for or between many countries",
    "cn_def": "國際的"
  },
  "kitten": {
    "pos": "n.",
    "en_def": "a baby cat",
    "cn_def": "小貓"
  },
  "koala": {
    "pos": "n.",
    "en_def": "a gray animal from Australia that lives in trees and looks like a small bear",
    "cn_def": "無尾熊"
  },
  "lack": {
    "pos": "v.",
    "en_def": "to not have something, or not have enough of it",
    "cn_def": "缺乏，缺少"
  },
  "lady": {
    "pos": "n.",
    "en_def": "a polite word for a woman",
    "cn_def": "女士，小姐"
  },
  "lamb": {
    "pos": "n.",
    "en_def": "a baby sheep; meat from a young sheep",
    "cn_def": "羔羊，羊肉"
  },
  "lantern": {
    "pos": "n.",
    "en_def": "a light inside a paper or glass cover that you can carry",
    "cn_def": "燈籠，提燈"
  },
  "latest": {
    "pos": "adj.",
    "en_def": "the newest",
    "cn_def": "最新的，最近的"
  },
  "latter": {
    "pos": "adj.",
    "en_def": "nearer to the end; the second of two",
    "cn_def": "後者的，較後的"
  },
  "law": {
    "pos": "n.",
    "en_def": "the rules of a country; the study of these rules",
    "cn_def": "法律，法規"
  },
  "laid": {
    "pos": "v.",
    "en_def": "to put something down carefully",
    "cn_def": "放置，躺下"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "one of the flat green parts of a tree or plant",
    "cn_def": "樹葉，葉子"
  },
  "lettuce": {
    "pos": "n.",
    "en_def": "a vegetable with big green leaves, used in salads",
    "cn_def": "生菜"
  },
  "licked": {
    "pos": "v.",
    "en_def": "to move your tongue over something",
    "cn_def": "舔"
  },
  "lid": {
    "pos": "n.",
    "en_def": "a cover for a pot, cup, or box",
    "cn_def": "蓋子"
  },
  "lifted": {
    "pos": "v.",
    "en_def": "to move something up",
    "cn_def": "舉起，抬起"
  },
  "lightning": {
    "pos": "n.",
    "en_def": "a bright light in the sky during a storm",
    "cn_def": "閃電"
  },
  "likely": {
    "pos": "adj.",
    "en_def": "expected to happen",
    "cn_def": "很可能的"
  },
  "limit": {
    "pos": "n.",
    "en_def": "the highest number or amount that is allowed",
    "cn_def": "限制，界限"
  },
  "link": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "連接，聯繫"
  },
  "liquid": {
    "pos": "n.",
    "en_def": "something that flows, like water or milk",
    "cn_def": "液體"
  }
};

const EXTRA_GLOSSES = {};
