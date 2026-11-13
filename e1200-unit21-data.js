// Unit 21 Quiz Data: Holidays & Festivals 節日與慶典（第22區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U21 - Holidays & Festivals",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Easter",
    "pos": "n.",
    "cn_def": "復活節",
    "en_def": "a spring holiday when children look for colorful eggs",
    "sentence": "Q: When is {{BLANK}}? — A: It's in March or April. Children look for eggs on that day.",
    "cn": "復活節是什麼時候？ — 它在三月或四月，小孩們在那天找蛋。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶",
    "en_def": "a special day or time when people celebrate something",
    "sentence": "Q: When is the Moon {{BLANK}}? — A: It's in September or October. We look at the moon and eat moon cakes.",
    "cn": "中秋節是什麼時候？ — 它在九月或十月，我們賞月、吃月餅。"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "cn_def": "假期",
    "en_def": "a time when you do not go to school or work",
    "sentence": "Q: What do you do on summer {{BLANK}}? — A: I go to the beach and swim with my family.",
    "cn": "你暑假做什麼？ — 我和家人去海邊游泳。"
  },
  {
    "word": "holiday (holidays)",
    "pos": "n.",
    "cn_def": "假日",
    "en_def": "a day when people do not have to work or go to school",
    "sentence": "Q: What does your dad do on Sundays? — A: Sundays are {{BLANK}} for him, so he doesn't work. He stays home.",
    "cn": "你爸爸星期天做什麼？ — 星期天是他的假日，所以他不工作，他待在家裡。"
  },
  {
    "word": "lantern (lanterns)",
    "pos": "n.",
    "cn_def": "燈籠",
    "en_def": "a light inside a paper or glass cover that you can carry",
    "sentence": "Q: What do people do at the Lantern Festival? — A: They look at {{BLANK}} and eat sweet dumplings.",
    "cn": "人們在元宵節做什麼？ — 他們看燈籠、吃湯圓。"
  },
  {
    "word": "celebrate (celebrates)",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something fun on a special day",
    "sentence": "Q: What does Amy do on Christmas Day? — A: She {{BLANK}} it with her family. She gets many presents.",
    "cn": "艾美在聖誕節做什麼？ — 她和家人一起慶祝，她收到很多禮物。"
  },
  {
    "word": "Christmas",
    "pos": "n.",
    "cn_def": "聖誕節",
    "en_def": "a holiday on December 25",
    "sentence": "Q: What does Grandpa say to you on December 25th? — A: He says, \"Merry {{BLANK}}!\" Then he gives me a present.",
    "cn": "爺爺在十二月二十五日對你說什麼？ — 他說：「聖誕快樂！」然後他送我一份禮物。"
  },
  {
    "word": "Halloween",
    "pos": "n.",
    "cn_def": "萬聖節",
    "en_def": "a holiday on October 31 when children dress up and ask for candy",
    "sentence": "Q: It's October 31st. What do the children say at the door? — A: They say, \"Happy {{BLANK}}! Trick or treat!\"",
    "cn": "今天是十月三十一日，小孩們在門口說什麼？ — 他們說：「萬聖節快樂！不給糖就搗蛋！」"
  }
];

const MCQS = [
  {
    "q": "At ______, children look for colorful eggs in the garden. This holiday is in spring.",
    "options": [
      "Christmas",
      "Halloween",
      "Easter",
      "vacation"
    ],
    "answer": 2,
    "cn": "復活節是什麼時候？ — 它在三月或四月，小孩們在那天找蛋。",
    "vocabIndex": 0
  },
  {
    "q": "The Moon ______ is in fall. Families get together, eat moon cakes, and look at the full moon.",
    "options": [
      "Festival",
      "Vacation",
      "Lantern",
      "Christmas"
    ],
    "answer": 0,
    "cn": "中秋節是什麼時候？ — 它在九月或十月，我們賞月、吃月餅。",
    "vocabIndex": 1
  },
  {
    "q": "Students in Taiwan have a two-month summer ______. They don't have to go to school in July and August.",
    "options": [
      "festival",
      "lantern",
      "Easter",
      "vacation"
    ],
    "answer": 3,
    "cn": "你暑假做什麼？ — 我和家人去海邊游泳。",
    "vocabIndex": 2
  },
  {
    "q": "Chinese New Year and the Moon Festival are important ______ in Taiwan. People don't have to work on those days.",
    "options": [
      "lanterns",
      "holidays",
      "countries",
      "languages"
    ],
    "answer": 1,
    "cn": "你爸爸星期天做什麼？ — 星期天是他的假日，所以他不工作，他待在家裡。",
    "vocabIndex": 3
  },
  {
    "q": "On the fifteenth night of the new year, children carry paper ______ with lights inside and walk around the streets.",
    "options": [
      "holidays",
      "festivals",
      "vacations",
      "lanterns"
    ],
    "answer": 3,
    "cn": "人們在元宵節做什麼？ — 他們看燈籠、吃湯圓。",
    "vocabIndex": 4
  },
  {
    "q": "Our family ______ Grandma's birthday with a big dinner every year. We sing and eat cake together.",
    "options": [
      "celebrates",
      "studies",
      "washes",
      "borrows"
    ],
    "answer": 0,
    "cn": "艾美在聖誕節做什麼？ — 她和家人一起慶祝，她收到很多禮物。",
    "vocabIndex": 5
  },
  {
    "q": "______ is on December 25. Children get presents, and families put lights on a tree.",
    "options": [
      "Easter",
      "Christmas",
      "Halloween",
      "Vacation"
    ],
    "answer": 1,
    "cn": "爺爺在十二月二十五日對你說什麼？ — 他說：「聖誕快樂！」然後他送我一份禮物。",
    "vocabIndex": 6
  },
  {
    "q": "On ______, children dress up as ghosts and go from door to door asking for candy. It is on October 31.",
    "options": [
      "Easter",
      "Christmas",
      "Halloween",
      "vacation"
    ],
    "answer": 2,
    "cn": "今天是十月三十一日，小孩們在門口說什麼？ — 他們說：「萬聖節快樂！不給糖就搗蛋！」",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "christmas": {
    "pos": "n.",
    "en_def": "a holiday on December 25",
    "cn_def": "聖誕節"
  },
  "halloween": {
    "pos": "n.",
    "en_def": "a holiday on October 31 when children dress up and ask for candy",
    "cn_def": "萬聖節"
  },
  "easter": {
    "pos": "n.",
    "en_def": "a spring holiday when children look for colorful eggs",
    "cn_def": "復活節"
  },
  "vacation": {
    "pos": "n.",
    "en_def": "a time when you do not go to school or work",
    "cn_def": "假期"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special day or time when people celebrate something",
    "cn_def": "節慶"
  },
  "lantern": {
    "pos": "n.",
    "en_def": "a light inside a paper or glass cover that you can carry",
    "cn_def": "燈籠"
  },
  "lanterns": {
    "pos": "n.",
    "en_def": "a light inside a paper or glass cover that you can carry",
    "cn_def": "燈籠"
  },
  "holidays": {
    "pos": "n.",
    "en_def": "a day when people do not have to work or go to school",
    "cn_def": "假日"
  },
  "countries": {
    "pos": "n.",
    "en_def": "land outside cities, with farms and fields",
    "cn_def": "鄉村"
  },
  "languages": {
    "pos": "n.",
    "en_def": "the words people use to speak and write, like English or Chinese",
    "cn_def": "語言"
  },
  "festivals": {
    "pos": "n.",
    "en_def": "a special day or time when people celebrate something",
    "cn_def": "節慶"
  },
  "vacations": {
    "pos": "n.",
    "en_def": "a time when you do not go to school or work",
    "cn_def": "假期"
  },
  "celebrates": {
    "pos": "v.",
    "en_def": "to do something fun on a special day",
    "cn_def": "慶祝"
  },
  "studies": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "讀書；學習"
  },
  "washes": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "清洗"
  },
  "borrows": {
    "pos": "v.",
    "en_def": "to take and use something that you will give back later",
    "cn_def": "借入"
  }
};

const EXTRA_GLOSSES = {};
