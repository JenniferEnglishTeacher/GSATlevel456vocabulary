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
    "q": "Q: What do you use to eat noodles? — A: I use ______. They are easy for me.【筷子】",
    "options": [
      "chopsticks",
      "glass",
      "forks",
      "cup"
    ],
    "answer": 0,
    "cn": "你用什麼吃麵？ — 我用筷子，筷子對我來說很容易。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What does your little brother use to eat soup? — A: He uses a ______.【湯匙】",
    "options": [
      "plate",
      "spoon",
      "lid",
      "dish"
    ],
    "answer": 1,
    "cn": "你弟弟用什麼喝湯？ — 他用湯匙。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Do your American friends use chopsticks? — A: No, they don't. They use ______.【叉子】",
    "options": [
      "chopsticks",
      "glass",
      "bowl",
      "forks"
    ],
    "answer": 3,
    "cn": "你的美國朋友用筷子嗎？ — 不，他們不用，他們用叉子。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Does your dad use chopsticks to eat steak? — A: No, he doesn't. He uses a ______ and a fork.【刀子】",
    "options": [
      "bowl",
      "plate",
      "knife",
      "cup"
    ],
    "answer": 2,
    "cn": "你爸爸用筷子吃牛排嗎？ — 不，他不用，他用刀子和叉子。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What does your mom use to drink coffee? — A: She uses a big ______.【茶杯；杯子】",
    "options": [
      "cup",
      "spoon",
      "lid",
      "bowl"
    ],
    "answer": 0,
    "cn": "你媽媽用什麼喝咖啡？ — 她用一個大杯子。",
    "vocabIndex": 4
  },
  {
    "q": "Q: I'm thirsty. Can I have a ______ of water, please? — A: Sure. Here you are.【玻璃杯】",
    "options": [
      "forks",
      "glass",
      "chopsticks",
      "knife"
    ],
    "answer": 1,
    "cn": "我口渴了，可以給我一杯水嗎？ — 當然，給你。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Mom, can I have a ______ of rice, please? — A: Sure. Here you are. It's hot!【碗】",
    "options": [
      "plate",
      "knife",
      "bowl",
      "lid"
    ],
    "answer": 2,
    "cn": "媽，可以給我一碗飯嗎？ — 當然，給你，很燙喔！",
    "vocabIndex": 6
  },
  {
    "q": "Q: Can I have a ______, please? I want some cake. — A: Sure. Here's a clean one.【盤子】",
    "options": [
      "dish",
      "knife",
      "spoon",
      "plate"
    ],
    "answer": 3,
    "cn": "可以給我一個盤子嗎？我想吃一些蛋糕。 — 當然，這裡有一個乾淨的。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Can I have this chicken ______, please? — A: Sure. Do you want rice with it?【菜餚；盤子】",
    "options": [
      "lid",
      "dish",
      "spoon",
      "bowl"
    ],
    "answer": 1,
    "cn": "我可以點這道雞肉料理嗎？ — 好的，您要配飯嗎？",
    "vocabIndex": 8
  },
  {
    "q": "Q: Can I have a ______ for my cup, please? The tea is hot. — A: Of course. Put it on, and your tea stays hot.【蓋子】",
    "options": [
      "lid",
      "cup",
      "spoon",
      "bowl"
    ],
    "answer": 0,
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
  "spoon": {
    "pos": "n.",
    "en_def": "a thing with a small round end, used for eating soup",
    "cn_def": "湯匙"
  },
  "forks": {
    "pos": "n.",
    "en_def": "a thing with three or four points, used for picking up food",
    "cn_def": "叉子"
  },
  "knife": {
    "pos": "n.",
    "en_def": "a sharp thing used for cutting",
    "cn_def": "刀子"
  },
  "cup": {
    "pos": "n.",
    "en_def": "a small container with a handle, used for drinking",
    "cn_def": "茶杯；杯子"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a container without a handle, used for drinking water or juice",
    "cn_def": "玻璃杯"
  },
  "bowl": {
    "pos": "n.",
    "en_def": "a deep round dish for soup or rice",
    "cn_def": "碗"
  },
  "plate": {
    "pos": "n.",
    "en_def": "a flat round dish that you put food on",
    "cn_def": "盤子"
  },
  "dish": {
    "pos": "n.",
    "en_def": "a plate or bowl; food cooked in one way",
    "cn_def": "菜餚；盤子"
  },
  "lid": {
    "pos": "n.",
    "en_def": "a cover for a cup, pot, or box",
    "cn_def": "蓋子"
  }
};

const EXTRA_GLOSSES = {};
