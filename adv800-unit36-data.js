// Unit 36 Quiz Data: therefore – track
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U36 - therefore – track",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "therefore",
    "pos": "adv.",
    "cn_def": "因此，所以",
    "en_def": "so; for that reason",
    "sentence": "She was tired; {{BLANK}}, she went to bed early.",
    "cn": "她很累，因此，她很早就上床睡覺了。"
  },
  {
    "word": "thief",
    "pos": "n.",
    "cn_def": "小偷",
    "en_def": "a person who steals things",
    "sentence": "The {{BLANK}} stole her purse.",
    "cn": "小偷偷了她的錢包。"
  },
  {
    "word": "thought",
    "pos": "n.",
    "cn_def": "思想，想法",
    "en_def": "an idea in your mind",
    "sentence": "His {{BLANK}} on the subject were very insightful.",
    "cn": "他對這個話題的想法非常深刻。"
  },
  {
    "word": "throat",
    "pos": "n.",
    "cn_def": "喉嚨，咽喉",
    "en_def": "the part inside your neck that food and air go down",
    "sentence": "He has a sore {{BLANK}}.",
    "cn": "他喉嚨痛。"
  },
  {
    "word": "thunder",
    "pos": "n.",
    "cn_def": "雷，雷聲",
    "en_def": "the loud sound in the sky during a storm",
    "sentence": "The {{BLANK}} scared the children.",
    "cn": "雷聲嚇到了孩子們。"
  },
  {
    "word": "tidy",
    "pos": "adj.",
    "cn_def": "整潔的，井井有條的",
    "en_def": "clean, with everything in the right place",
    "sentence": "Her room is always {{BLANK}}.",
    "cn": "她的房間總是很整潔。"
  },
  {
    "word": "tiger",
    "pos": "n.",
    "cn_def": "老虎",
    "en_def": "a big wild cat with orange fur and black stripes",
    "sentence": "The {{BLANK}} is an endangered species.",
    "cn": "老虎是一種瀕危物種。"
  },
  {
    "word": "title",
    "pos": "n.",
    "cn_def": "標題，稱號",
    "en_def": "the name of a book, movie, or song",
    "sentence": "The book's {{BLANK}} is \"Great Expectations.\"",
    "cn": "這本書的標題是《遠大前程》。"
  },
  {
    "word": "toast",
    "pos": "n.",
    "cn_def": "吐司，烤麵包片",
    "en_def": "a piece of bread heated until it is brown",
    "sentence": "She had {{BLANK}} for breakfast.",
    "cn": "她早餐吃了烤麵包片。"
  },
  {
    "word": "toffee",
    "pos": "n.",
    "cn_def": "太妃糖",
    "en_def": "a hard, sticky brown candy made from sugar and butter",
    "sentence": "She bought some {{BLANK}} at the candy store.",
    "cn": "她在糖果店買了一些太妃糖。"
  },
  {
    "word": "tongue",
    "pos": "n.",
    "cn_def": "舌頭，語言",
    "en_def": "the soft part inside your mouth that you taste and speak with",
    "sentence": "He burnt his {{BLANK}} on the hot soup.",
    "cn": "他舌頭被熱湯燙到了。"
  },
  {
    "word": "toothbrush",
    "pos": "n.",
    "cn_def": "牙刷",
    "en_def": "a small brush for cleaning your teeth",
    "sentence": "She forgot her {{BLANK}} at home.",
    "cn": "她忘了帶牙刷。"
  },
  {
    "word": "toothpaste",
    "pos": "n.",
    "cn_def": "牙膏",
    "en_def": "the soft cream you put on a toothbrush to clean your teeth",
    "sentence": "The {{BLANK}} is almost finished.",
    "cn": "牙膏快用完了。"
  },
  {
    "word": "total",
    "pos": "adj.",
    "cn_def": "總的，全部的",
    "en_def": "with everything added together",
    "sentence": "The {{BLANK}} cost is $50.",
    "cn": "總費用是50美元。"
  },
  {
    "word": "tour",
    "pos": "n.",
    "cn_def": "旅行，巡演",
    "en_def": "a trip to see many places",
    "sentence": "They went on a {{BLANK}} of Europe.",
    "cn": "他們去歐洲旅行。"
  },
  {
    "word": "tourist",
    "pos": "n.",
    "cn_def": "遊客",
    "en_def": "a person who visits a place for fun",
    "sentence": "The city is full of {{BLANK}}.",
    "cn": "這個城市充滿了遊客。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "比賽，錦標賽",
    "en_def": "a set of games to find the best player or team",
    "sentence": "He participated in a chess {{BLANK}}.",
    "cn": "他參加了一個西洋棋比賽。"
  },
  {
    "word": "towel",
    "pos": "n.",
    "cn_def": "毛巾",
    "en_def": "a piece of cloth that you use to dry yourself",
    "sentence": "She dried her hands with a {{BLANK}}.",
    "cn": "她用毛巾擦乾了手。"
  },
  {
    "word": "tower",
    "pos": "n.",
    "cn_def": "塔，塔樓",
    "en_def": "a very tall, thin building",
    "sentence": "The Eiffel {{BLANK}} is a famous landmark.",
    "cn": "艾菲爾鐵塔是一個著名的地標。"
  },
  {
    "word": "track",
    "pos": "n.",
    "cn_def": "軌道，跑道",
    "en_def": "a round path for running races",
    "sentence": "They ran around the {{BLANK}}.",
    "cn": "他們在跑道上跑步。"
  }
];

const MCQS = [
  {
    "q": "She was tired; ______, she went to bed early.【因此，所以】",
    "options": [
      "downtown",
      "therefore",
      "especially",
      "nearly"
    ],
    "answer": 1,
    "cn": "她很累，因此，她很早就上床睡覺了。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ stole her purse.【小偷】",
    "options": [
      "towel",
      "tour",
      "thief",
      "tower"
    ],
    "answer": 2,
    "cn": "小偷偷了她的錢包。",
    "vocabIndex": 1
  },
  {
    "q": "His ______ on the subject were very insightful.【思想，想法】",
    "options": [
      "thoughts",
      "tourists",
      "tournament",
      "towel"
    ],
    "answer": 0,
    "cn": "他對這個話題的想法非常深刻。",
    "vocabIndex": 2
  },
  {
    "q": "He has a sore ______.【喉嚨，咽喉】",
    "options": [
      "towel",
      "toothpaste",
      "tour",
      "throat"
    ],
    "answer": 3,
    "cn": "他喉嚨痛。",
    "vocabIndex": 3
  },
  {
    "q": "The ______ scared the children.【雷，雷聲】",
    "options": [
      "title",
      "thunder",
      "toothpaste",
      "thief"
    ],
    "answer": 1,
    "cn": "雷聲嚇到了孩子們。",
    "vocabIndex": 4
  },
  {
    "q": "Her room is always ______.【整潔的，井井有條的】",
    "options": [
      "total",
      "latest",
      "tidy",
      "perfect"
    ],
    "answer": 2,
    "cn": "她的房間總是很整潔。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ is an endangered species.【老虎】",
    "options": [
      "tour",
      "toothpaste",
      "track",
      "tiger"
    ],
    "answer": 3,
    "cn": "老虎是一種瀕危物種。",
    "vocabIndex": 6
  },
  {
    "q": "The book's ______ is \"Great Expectations.\"【標題，稱號】",
    "options": [
      "title",
      "tongue",
      "throat",
      "toothbrush"
    ],
    "answer": 0,
    "cn": "這本書的標題是《遠大前程》。",
    "vocabIndex": 7
  },
  {
    "q": "She had ______ for breakfast.【吐司，烤麵包片】",
    "options": [
      "tournament",
      "tour",
      "track",
      "toast"
    ],
    "answer": 3,
    "cn": "她早餐吃了烤麵包片。",
    "vocabIndex": 8
  },
  {
    "q": "She bought some ______ at the candy store.【太妃糖】",
    "options": [
      "toffee",
      "tiger",
      "tower",
      "towel"
    ],
    "answer": 0,
    "cn": "她在糖果店買了一些太妃糖。",
    "vocabIndex": 9
  },
  {
    "q": "He burnt his ______ on the hot soup.【舌頭，語言】",
    "options": [
      "track",
      "tongue",
      "towel",
      "toffee"
    ],
    "answer": 1,
    "cn": "他舌頭被熱湯燙到了。",
    "vocabIndex": 10
  },
  {
    "q": "She forgot her ______ at home.【牙刷】",
    "options": [
      "track",
      "toffee",
      "toothbrush",
      "tour"
    ],
    "answer": 2,
    "cn": "她忘了帶牙刷。",
    "vocabIndex": 11
  },
  {
    "q": "The ______ is almost finished.【牙膏】",
    "options": [
      "thief",
      "towel",
      "tiger",
      "toothpaste"
    ],
    "answer": 3,
    "cn": "牙膏快用完了。",
    "vocabIndex": 12
  },
  {
    "q": "The ______ cost is $50.【總的，全部的】",
    "options": [
      "tidy",
      "total",
      "pale",
      "tropical"
    ],
    "answer": 1,
    "cn": "總費用是50美元。",
    "vocabIndex": 13
  },
  {
    "q": "They went on a ______ of Europe.【旅行，巡演】",
    "options": [
      "toffee",
      "toothpaste",
      "tour",
      "throat"
    ],
    "answer": 2,
    "cn": "他們去歐洲旅行。",
    "vocabIndex": 14
  },
  {
    "q": "The city is full of ______.【遊客】",
    "options": [
      "tourists",
      "thoughts",
      "tongue",
      "tiger"
    ],
    "answer": 0,
    "cn": "這個城市充滿了遊客。",
    "vocabIndex": 15
  },
  {
    "q": "He participated in a chess ______.【比賽，錦標賽】",
    "options": [
      "throat",
      "towel",
      "title",
      "tournament"
    ],
    "answer": 3,
    "cn": "他參加了一個西洋棋比賽。",
    "vocabIndex": 16
  },
  {
    "q": "She dried her hands with a ______.【毛巾】",
    "options": [
      "toast",
      "toothpaste",
      "towel",
      "tour"
    ],
    "answer": 2,
    "cn": "她用毛巾擦乾了手。",
    "vocabIndex": 17
  },
  {
    "q": "The Eiffel ______ is a famous landmark.【塔，塔樓】",
    "options": [
      "tower",
      "track",
      "tournament",
      "toothbrush"
    ],
    "answer": 0,
    "cn": "艾菲爾鐵塔是一個著名的地標。",
    "vocabIndex": 18
  },
  {
    "q": "They ran around the ______.【軌道，跑道】",
    "options": [
      "tower",
      "track",
      "toffee",
      "towel"
    ],
    "answer": 1,
    "cn": "他們在跑道上跑步。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "downtown": {
    "pos": "adv.",
    "en_def": "in the center of a city",
    "cn_def": "市中心"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than others; more than usual",
    "cn_def": "特別地，尤其"
  },
  "latest": {
    "pos": "adj.",
    "en_def": "the newest",
    "cn_def": "最新的，最近的"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost",
    "cn_def": "幾乎，差不多"
  },
  "pale": {
    "pos": "adj.",
    "en_def": "having a light or white face, often because you are sick",
    "cn_def": "蒼白的，淡色的"
  },
  "perfect": {
    "pos": "adj.",
    "en_def": "so good that it cannot be better",
    "cn_def": "完美的，理想的"
  },
  "therefore": {
    "pos": "adv.",
    "en_def": "so; for that reason",
    "cn_def": "因此，所以"
  },
  "thief": {
    "pos": "n.",
    "en_def": "a person who steals things",
    "cn_def": "小偷"
  },
  "thoughts": {
    "pos": "n.",
    "en_def": "an idea in your mind",
    "cn_def": "思想，想法"
  },
  "throat": {
    "pos": "n.",
    "en_def": "the part inside your neck that food and air go down",
    "cn_def": "喉嚨，咽喉"
  },
  "thunder": {
    "pos": "n.",
    "en_def": "the loud sound in the sky during a storm",
    "cn_def": "雷，雷聲"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "clean, with everything in the right place",
    "cn_def": "整潔的，井井有條的"
  },
  "tiger": {
    "pos": "n.",
    "en_def": "a big wild cat with orange fur and black stripes",
    "cn_def": "老虎"
  },
  "title": {
    "pos": "n.",
    "en_def": "the name of a book, movie, or song",
    "cn_def": "標題，稱號"
  },
  "toast": {
    "pos": "n.",
    "en_def": "a piece of bread heated until it is brown",
    "cn_def": "吐司，烤麵包片"
  },
  "toffee": {
    "pos": "n.",
    "en_def": "a hard, sticky brown candy made from sugar and butter",
    "cn_def": "太妃糖"
  },
  "tongue": {
    "pos": "n.",
    "en_def": "the soft part inside your mouth that you taste and speak with",
    "cn_def": "舌頭，語言"
  },
  "toothbrush": {
    "pos": "n.",
    "en_def": "a small brush for cleaning your teeth",
    "cn_def": "牙刷"
  },
  "toothpaste": {
    "pos": "n.",
    "en_def": "the soft cream you put on a toothbrush to clean your teeth",
    "cn_def": "牙膏"
  },
  "total": {
    "pos": "adj.",
    "en_def": "with everything added together",
    "cn_def": "總的，全部的"
  },
  "tour": {
    "pos": "n.",
    "en_def": "a trip to see many places",
    "cn_def": "旅行，巡演"
  },
  "tourists": {
    "pos": "n.",
    "en_def": "a person who visits a place for fun",
    "cn_def": "遊客"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a set of games to find the best player or team",
    "cn_def": "比賽，錦標賽"
  },
  "towel": {
    "pos": "n.",
    "en_def": "a piece of cloth that you use to dry yourself",
    "cn_def": "毛巾"
  },
  "tower": {
    "pos": "n.",
    "en_def": "a very tall, thin building",
    "cn_def": "塔，塔樓"
  },
  "track": {
    "pos": "n.",
    "en_def": "a round path for running races",
    "cn_def": "軌道，跑道"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or in the hottest parts of the world",
    "cn_def": "熱帶的，炎熱的"
  }
};

const EXTRA_GLOSSES = {};
