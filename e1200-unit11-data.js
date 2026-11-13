// Unit 11 Quiz Data: Tableware 餐具（第11區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U11 - Tableware",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chopsticks",
    "pos": "n.",
    "cn_def": "筷子",
    "en_def": "two thin sticks used for eating",
    "sentence": "Q: What do you use to eat noodles? — A: I use {{BLANK}}. They are easy for me.",
    "cn": "你用什麼吃麵？ — 我用筷子，筷子對我來說很容易。"
  },
  {
    "word": "spoon",
    "pos": "n.",
    "cn_def": "湯匙",
    "en_def": "a thing with a small round end, used for eating soup",
    "sentence": "Q: What does your little brother use to eat soup? — A: He uses a {{BLANK}}.",
    "cn": "你弟弟用什麼喝湯？ — 他用湯匙。"
  },
  {
    "word": "fork (forks)",
    "pos": "n.",
    "cn_def": "叉子",
    "en_def": "a thing with three or four points, used for picking up food",
    "sentence": "Q: Do your American friends use chopsticks? — A: No, they don't. They use {{BLANK}}.",
    "cn": "你的美國朋友用筷子嗎？ — 不，他們不用，他們用叉子。"
  },
  {
    "word": "knife",
    "pos": "n.",
    "cn_def": "刀子",
    "en_def": "a sharp thing used for cutting",
    "sentence": "Q: Does your dad use chopsticks to eat steak? — A: No, he doesn't. He uses a {{BLANK}} and a fork.",
    "cn": "你爸爸用筷子吃牛排嗎？ — 不，他不用，他用刀子和叉子。"
  },
  {
    "word": "cup",
    "pos": "n.",
    "cn_def": "茶杯；杯子",
    "en_def": "a small container with a handle, used for drinking",
    "sentence": "Q: What does your mom use to drink coffee? — A: She uses a big {{BLANK}}.",
    "cn": "你媽媽用什麼喝咖啡？ — 她用一個大杯子。"
  },
  {
    "word": "glass",
    "pos": "n.",
    "cn_def": "玻璃杯",
    "en_def": "a container without a handle, used for drinking water or juice",
    "sentence": "Q: I'm thirsty. Can I have a {{BLANK}} of water, please? — A: Sure. Here you are.",
    "cn": "我口渴了，可以給我一杯水嗎？ — 當然，給你。"
  },
  {
    "word": "bowl",
    "pos": "n.",
    "cn_def": "碗",
    "en_def": "a deep round dish for soup or rice",
    "sentence": "Q: Mom, can I have a {{BLANK}} of rice, please? — A: Sure. Here you are. It's hot!",
    "cn": "媽，可以給我一碗飯嗎？ — 當然，給你，很燙喔！"
  },
  {
    "word": "plate",
    "pos": "n.",
    "cn_def": "盤子",
    "en_def": "a flat round dish that you put food on",
    "sentence": "Q: Can I have a {{BLANK}}, please? I want some cake. — A: Sure. Here's a clean one.",
    "cn": "可以給我一個盤子嗎？我想吃一些蛋糕。 — 當然，這裡有一個乾淨的。"
  },
  {
    "word": "dish",
    "pos": "n.",
    "cn_def": "菜餚；盤子",
    "en_def": "a plate or bowl; food cooked in one way",
    "sentence": "Q: Can I have this chicken {{BLANK}}, please? — A: Sure. Do you want rice with it?",
    "cn": "我可以點這道雞肉料理嗎？ — 好的，您要配飯嗎？"
  },
  {
    "word": "lid",
    "pos": "n.",
    "cn_def": "蓋子",
    "en_def": "a cover for a cup, pot, or box",
    "sentence": "Q: Can I have a {{BLANK}} for my cup, please? The tea is hot. — A: Of course. Put it on, and your tea stays hot.",
    "cn": "可以給我一個杯蓋嗎？茶很燙。 — 當然可以，蓋上去，你的茶就會保溫。"
  }
];

const MCQS = [
  {
    "q": "People in Taiwan and Japan eat rice and noodles with ______. You hold these two thin sticks in one hand.",
    "options": [
      "chopsticks",
      "spoons",
      "forks",
      "lids"
    ],
    "answer": 0,
    "cn": "你用什麼吃麵？ — 我用筷子，筷子對我來說很容易。",
    "vocabIndex": 0
  },
  {
    "q": "You need a ______ to eat soup. You can't eat it with a fork or chopsticks.",
    "options": [
      "knife",
      "spoon",
      "plate",
      "lid"
    ],
    "answer": 1,
    "cn": "你弟弟用什麼喝湯？ — 他用湯匙。",
    "vocabIndex": 1
  },
  {
    "q": "People in America usually eat with knives and ______. They don't use chopsticks very often.",
    "options": [
      "bowls",
      "cups",
      "forks",
      "lids"
    ],
    "answer": 2,
    "cn": "你的美國朋友用筷子嗎？ — 不，他們不用，他們用叉子。",
    "vocabIndex": 2
  },
  {
    "q": "Be careful with that ______! It is very sharp, and you may cut your finger.",
    "options": [
      "spoon",
      "bowl",
      "cup",
      "knife"
    ],
    "answer": 3,
    "cn": "你爸爸用筷子吃牛排嗎？ — 不，他不用，他用刀子和叉子。",
    "vocabIndex": 3
  },
  {
    "q": "Would you like a ______ of hot tea? I can make one for you right now.",
    "options": [
      "plate",
      "fork",
      "cup",
      "knife"
    ],
    "answer": 2,
    "cn": "你媽媽用什麼喝咖啡？ — 她用一個大杯子。",
    "vocabIndex": 4
  },
  {
    "q": "I drink a ______ of cold milk every morning. Be careful not to drop it, or it will break.",
    "options": [
      "glass",
      "fork",
      "knife",
      "lid"
    ],
    "answer": 0,
    "cn": "我口渴了，可以給我一杯水嗎？ — 當然，給你。",
    "vocabIndex": 5
  },
  {
    "q": "I ate a big ______ of beef noodles for lunch. I drank all the soup in it, too.",
    "options": [
      "fork",
      "bowl",
      "knife",
      "lid"
    ],
    "answer": 1,
    "cn": "媽，可以給我一碗飯嗎？ — 當然，給你，很燙喔！",
    "vocabIndex": 6
  },
  {
    "q": "The waiter put a steak on a big white ______ and brought it to our table.",
    "options": [
      "spoon",
      "fork",
      "cup",
      "plate"
    ],
    "answer": 3,
    "cn": "可以給我一個盤子嗎？我想吃一些蛋糕。 — 當然，這裡有一個乾淨的。",
    "vocabIndex": 7
  },
  {
    "q": "Mapo tofu is my favorite ______ at this restaurant. The cook makes it very hot, and it is great with rice.",
    "options": [
      "spoon",
      "dish",
      "cup",
      "lid"
    ],
    "answer": 1,
    "cn": "我可以點這道雞肉料理嗎？ — 好的，您要配飯嗎？",
    "vocabIndex": 8
  },
  {
    "q": "Put the ______ on the pot, and the water will boil faster. Take it off when the soup is ready.",
    "options": [
      "fork",
      "spoon",
      "knife",
      "lid"
    ],
    "answer": 3,
    "cn": "可以給我一個杯蓋嗎？茶很燙。 — 當然可以，蓋上去，你的茶就會保溫。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "chopsticks": {
    "pos": "n.",
    "en_def": "two thin sticks used for eating",
    "cn_def": "筷子"
  },
  "spoons": {
    "pos": "n.",
    "en_def": "a thing with a small round end, used for eating soup",
    "cn_def": "湯匙"
  },
  "forks": {
    "pos": "n.",
    "en_def": "a thing with three or four points, used for picking up food",
    "cn_def": "叉子"
  },
  "lids": {
    "pos": "n.",
    "en_def": "a cover for a cup, pot, or box",
    "cn_def": "蓋子"
  },
  "knife": {
    "pos": "n.",
    "en_def": "a sharp thing used for cutting",
    "cn_def": "刀子"
  },
  "spoon": {
    "pos": "n.",
    "en_def": "a thing with a small round end, used for eating soup",
    "cn_def": "湯匙"
  },
  "plate": {
    "pos": "n.",
    "en_def": "a flat round dish that you put food on",
    "cn_def": "盤子"
  },
  "lid": {
    "pos": "n.",
    "en_def": "a cover for a cup, pot, or box",
    "cn_def": "蓋子"
  },
  "bowls": {
    "pos": "n.",
    "en_def": "a deep round dish for soup or rice",
    "cn_def": "碗"
  },
  "cups": {
    "pos": "n.",
    "en_def": "a small container with a handle, used for drinking",
    "cn_def": "茶杯；杯子"
  },
  "bowl": {
    "pos": "n.",
    "en_def": "a deep round dish for soup or rice",
    "cn_def": "碗"
  },
  "cup": {
    "pos": "n.",
    "en_def": "a small container with a handle, used for drinking",
    "cn_def": "茶杯；杯子"
  },
  "fork": {
    "pos": "n.",
    "en_def": "a thing with three or four points, used for picking up food",
    "cn_def": "叉子"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a container without a handle, used for drinking water or juice",
    "cn_def": "玻璃杯"
  },
  "dish": {
    "pos": "n.",
    "en_def": "a plate or bowl; food cooked in one way",
    "cn_def": "菜餚；盤子"
  }
};

const EXTRA_GLOSSES = {};
