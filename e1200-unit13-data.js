// Unit 13 Quiz Data: Colors 顏色（第13區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U13 - Colors",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "color",
    "pos": "n.",
    "cn_def": "顏色",
    "en_def": "red, blue, green, yellow, and so on",
    "sentence": "Q: What {{BLANK}} is your new jacket? — A: It's black and white. I like it a lot.",
    "cn": "你的新夾克是什麼顏色？ — 它是黑白相間的，我很喜歡。"
  },
  {
    "word": "black",
    "pos": "adj.",
    "cn_def": "黑色（的）",
    "en_def": "the color of the sky at night",
    "sentence": "Q: What color is your father's tie? — A: It's {{BLANK}}. He wears it to work.",
    "cn": "你爸爸的領帶是什麼顏色？ — 是黑色的，他打它去上班。"
  },
  {
    "word": "white",
    "pos": "adj.",
    "cn_def": "白色（的）",
    "en_def": "the color of snow and milk",
    "sentence": "Q: What color are your school socks? — A: They are {{BLANK}}.",
    "cn": "你們學校的襪子是什麼顏色？ — 它們是白色的。"
  },
  {
    "word": "gray",
    "pos": "adj.",
    "cn_def": "灰色（的）",
    "en_def": "the color between black and white",
    "sentence": "Q: What color are Grandpa's pants? — A: They are {{BLANK}}, like a cloudy sky.",
    "cn": "爺爺的長褲是什麼顏色？ — 它們是灰色的，像陰天的天空。"
  },
  {
    "word": "brown",
    "pos": "adj.",
    "cn_def": "棕色（的）",
    "en_def": "the color of chocolate and wood",
    "sentence": "Q: What color is your wallet? — A: It's {{BLANK}}. It's in my pocket.",
    "cn": "你的皮夾是什麼顏色？ — 是棕色的，在我的口袋裡。"
  },
  {
    "word": "red",
    "pos": "adj.",
    "cn_def": "紅色（的）",
    "en_def": "the color of blood and strawberries",
    "sentence": "Q: What does Mom want to buy? — A: She wants to buy a pair of {{BLANK}} shoes.",
    "cn": "媽媽想要買什麼？ — 她想要買一雙紅色的鞋子。"
  },
  {
    "word": "pink",
    "pos": "adj.",
    "cn_def": "粉紅色（的）",
    "en_def": "the color between red and white",
    "sentence": "Q: What do the girls want to buy? — A: They want to buy two {{BLANK}} skirts.",
    "cn": "女孩們想要買什麼？ — 她們想要買兩件粉紅色裙子。"
  },
  {
    "word": "orange",
    "pos": "adj.",
    "cn_def": "橘色（的）",
    "en_def": "the color between red and yellow",
    "sentence": "Q: Does Tom want to buy a black cap? — A: No, he doesn't. He wants to buy an {{BLANK}} cap.",
    "cn": "湯姆想要買一頂黑色棒球帽嗎？ — 不，他不想。他想要買一頂橘色的棒球帽。"
  },
  {
    "word": "yellow",
    "pos": "adj.",
    "cn_def": "黃色（的）",
    "en_def": "the color of bananas and the sun",
    "sentence": "Q: Do you and your sister want to buy umbrellas? — A: Yes, we do. We want to buy two {{BLANK}} umbrellas.",
    "cn": "你和你妹妹想要買雨傘嗎？ — 是的，我們想。我們想要買兩把黃色雨傘。"
  },
  {
    "word": "green",
    "pos": "adj.",
    "cn_def": "綠色（的）",
    "en_def": "the color of grass and leaves",
    "sentence": "Q: What's your favorite color? — A: My favorite color is {{BLANK}}. I love trees.",
    "cn": "你最喜歡的顏色是什麼？ — 我最喜歡的顏色是綠色，我喜愛樹木。"
  },
  {
    "word": "blue",
    "pos": "adj.",
    "cn_def": "藍色（的）",
    "en_def": "the color of the sky on a sunny day",
    "sentence": "Q: What's Ben's favorite color? — A: It's {{BLANK}}. He loves the sea and the sky.",
    "cn": "班最喜歡的顏色是什麼？ — 是藍色，他喜愛大海和天空。"
  },
  {
    "word": "purple",
    "pos": "adj.",
    "cn_def": "紫色（的）",
    "en_def": "the color between red and blue, like grapes",
    "sentence": "Q: What's your sister's favorite color? — A: Her favorite color is {{BLANK}}. She likes grapes.",
    "cn": "你妹妹最喜歡的顏色是什麼？ — 她最喜歡的顏色是紫色，她喜歡葡萄。"
  }
];

const MCQS = [
  {
    "q": "What ______ is your new bike? Is it red or blue?",
    "options": [
      "size",
      "price",
      "shape",
      "color"
    ],
    "answer": 3,
    "cn": "你的新夾克是什麼顏色？ — 它是黑白相間的，我很喜歡。",
    "vocabIndex": 0
  },
  {
    "q": "The sky is ______ at night. It is hard to see anything without a light.",
    "options": [
      "white",
      "yellow",
      "black",
      "pink"
    ],
    "answer": 2,
    "cn": "你爸爸的領帶是什麼顏色？ — 是黑色的，他打它去上班。",
    "vocabIndex": 1
  },
  {
    "q": "Snow is ______. Milk and rice are the same color, and so are doctors' coats.",
    "options": [
      "black",
      "white",
      "green",
      "purple"
    ],
    "answer": 1,
    "cn": "你們學校的襪子是什麼顏色？ — 它們是白色的。",
    "vocabIndex": 2
  },
  {
    "q": "When you mix black and white, you get ______. Elephants and mice are this color.",
    "options": [
      "gray",
      "brown",
      "pink",
      "green"
    ],
    "answer": 0,
    "cn": "爺爺的長褲是什麼顏色？ — 它們是灰色的，像陰天的天空。",
    "vocabIndex": 3
  },
  {
    "q": "Chocolate and coffee are ______. Wood is often this color, too.",
    "options": [
      "blue",
      "green",
      "brown",
      "pink"
    ],
    "answer": 2,
    "cn": "你的皮夾是什麼顏色？ — 是棕色的，在我的口袋裡。",
    "vocabIndex": 4
  },
  {
    "q": "Stop the car when the traffic light is ______. Blood and strawberries are this color, too.",
    "options": [
      "green",
      "red",
      "blue",
      "purple"
    ],
    "answer": 1,
    "cn": "媽媽想要買什麼？ — 她想要買一雙紅色的鞋子。",
    "vocabIndex": 5
  },
  {
    "q": "When you mix red and white, you get ______. Many little girls love this color.",
    "options": [
      "gray",
      "green",
      "purple",
      "pink"
    ],
    "answer": 3,
    "cn": "女孩們想要買什麼？ — 她們想要買兩件粉紅色裙子。",
    "vocabIndex": 6
  },
  {
    "q": "When you mix red and yellow, you get ______. Carrots and pumpkins are this color.",
    "options": [
      "orange",
      "green",
      "purple",
      "pink"
    ],
    "answer": 0,
    "cn": "湯姆想要買一頂黑色棒球帽嗎？ — 不，他不想。他想要買一頂橘色的棒球帽。",
    "vocabIndex": 7
  },
  {
    "q": "Bananas and lemons are ______. The sun in children's pictures is usually this color, too.",
    "options": [
      "blue",
      "purple",
      "yellow",
      "gray"
    ],
    "answer": 2,
    "cn": "你和你妹妹想要買雨傘嗎？ — 是的，我們想。我們想要買兩把黃色雨傘。",
    "vocabIndex": 8
  },
  {
    "q": "Grass and leaves are ______. You can cross the street when the traffic light turns this color.",
    "options": [
      "red",
      "green",
      "pink",
      "brown"
    ],
    "answer": 1,
    "cn": "你最喜歡的顏色是什麼？ — 我最喜歡的顏色是綠色，我喜愛樹木。",
    "vocabIndex": 9
  },
  {
    "q": "On a sunny day, the sky is ______. The sea looks this color, too.",
    "options": [
      "green",
      "pink",
      "brown",
      "blue"
    ],
    "answer": 3,
    "cn": "班最喜歡的顏色是什麼？ — 是藍色，他喜愛大海和天空。",
    "vocabIndex": 10
  },
  {
    "q": "When you mix red and blue, you get ______. Grapes are often this color.",
    "options": [
      "purple",
      "green",
      "orange",
      "brown"
    ],
    "answer": 0,
    "cn": "你妹妹最喜歡的顏色是什麼？ — 她最喜歡的顏色是紫色，她喜歡葡萄。",
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "size": {
    "pos": "n.",
    "en_def": "how big or small something is",
    "cn_def": "尺寸"
  },
  "price": {
    "pos": "n.",
    "en_def": "how much money you pay to buy something",
    "cn_def": "價格"
  },
  "shape": {
    "pos": "n.",
    "en_def": "the form of something, like a circle or a square",
    "cn_def": "形狀"
  },
  "color": {
    "pos": "n.",
    "en_def": "red, blue, green, yellow, and so on",
    "cn_def": "顏色"
  },
  "white": {
    "pos": "adj.",
    "en_def": "the color of snow and milk",
    "cn_def": "白色（的）"
  },
  "yellow": {
    "pos": "adj.",
    "en_def": "the color of bananas and the sun",
    "cn_def": "黃色（的）"
  },
  "black": {
    "pos": "adj.",
    "en_def": "the color of the sky at night",
    "cn_def": "黑色（的）"
  },
  "pink": {
    "pos": "adj.",
    "en_def": "the color between red and white",
    "cn_def": "粉紅色（的）"
  },
  "green": {
    "pos": "adj.",
    "en_def": "the color of grass and leaves",
    "cn_def": "綠色（的）"
  },
  "purple": {
    "pos": "adj.",
    "en_def": "the color between red and blue, like grapes",
    "cn_def": "紫色（的）"
  },
  "gray": {
    "pos": "adj.",
    "en_def": "the color between black and white",
    "cn_def": "灰色（的）"
  },
  "brown": {
    "pos": "adj.",
    "en_def": "the color of chocolate and wood",
    "cn_def": "棕色（的）"
  },
  "blue": {
    "pos": "adj.",
    "en_def": "the color of the sky on a sunny day",
    "cn_def": "藍色（的）"
  },
  "red": {
    "pos": "adj.",
    "en_def": "the color of blood and strawberries",
    "cn_def": "紅色（的）"
  },
  "orange": {
    "pos": "n.",
    "en_def": "a round, sweet fruit with a thick orange skin",
    "cn_def": "柳橙"
  }
};

const EXTRA_GLOSSES = {};
