// Unit 10 Quiz Data: Food & Drinks 食物與飲料（第10區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U10 - Food & Drinks",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hungry",
    "pos": "adj.",
    "cn_def": "飢餓的",
    "en_def": "wanting to eat",
    "sentence": "Q: What would you like to eat? — A: I'm very {{BLANK}}. I'd like a big bowl of noodles.",
    "cn": "你想吃什麼？ — 我好餓，我想要一大碗麵。"
  },
  {
    "word": "thirsty",
    "pos": "adj.",
    "cn_def": "口渴的",
    "en_def": "wanting to drink",
    "sentence": "Q: What would you like to drink? — A: I'm {{BLANK}}. I'd like a glass of water.",
    "cn": "你想喝什麼？ — 我口渴了，我想要一杯水。"
  },
  {
    "word": "full",
    "pos": "adj.",
    "cn_def": "飽的；滿的",
    "en_def": "not able to eat more; having no more space inside",
    "sentence": "Q: Would you like some more cake? — A: No, thank you. I'm {{BLANK}}.",
    "cn": "你想再吃一些蛋糕嗎？ — 不用了，謝謝，我吃飽了。"
  },
  {
    "word": "menu",
    "pos": "n.",
    "cn_def": "菜單",
    "en_def": "a list of the food and drinks in a restaurant",
    "sentence": "Q: What would you like to eat, sir? — A: Can I see the {{BLANK}}, please?",
    "cn": "先生，您想吃什麼？ — 可以請你給我看一下菜單嗎？"
  },
  {
    "word": "order",
    "pos": "v.",
    "cn_def": "點餐",
    "en_def": "to ask for food or drinks in a restaurant",
    "sentence": "Q: Are you ready? What would you like? — A: I'd like to {{BLANK}} a pizza, please.",
    "cn": "您準備好了嗎？您想要什麼？ — 我想要點一個披薩，謝謝。"
  },
  {
    "word": "food",
    "pos": "n.",
    "cn_def": "食物",
    "en_def": "things that people and animals eat",
    "sentence": "Q: What would you like to eat tonight? — A: I'd like some Japanese {{BLANK}}.",
    "cn": "你今晚想吃什麼？ — 我想吃一些日本料理（食物）。"
  },
  {
    "word": "hamburger (burger)",
    "pos": "n.",
    "cn_def": "漢堡",
    "en_def": "a round piece of cooked meat inside a bun",
    "sentence": "Q: What would you like for lunch? — A: I'd like a {{BLANK}}, please.",
    "cn": "你午餐想吃什麼？ — 我想要一個漢堡，謝謝。",
    "alts": [
      "burger"
    ]
  },
  {
    "word": "fries (French fries)",
    "pos": "n.",
    "cn_def": "炸薯條",
    "en_def": "long thin pieces of potato cooked in hot oil",
    "sentence": "Q: What would you like with your hamburger? — A: I'd like some French {{BLANK}}.",
    "cn": "你的漢堡想配什麼？ — 我想要一些薯條。"
  },
  {
    "word": "hot dog",
    "pos": "n.",
    "cn_def": "熱狗",
    "en_def": "a long sausage inside a long bun",
    "sentence": "Q: What would Ben like to eat? — A: He'd like a {{BLANK}}.",
    "cn": "班想吃什麼？ — 他想要一個熱狗。",
    "nblanks": 2
  },
  {
    "word": "pizza",
    "pos": "n.",
    "cn_def": "披薩",
    "en_def": "a flat round bread with cheese, tomato, and meat on top",
    "sentence": "Q: What would you like for dinner? — A: I'd like a big {{BLANK}} with cheese.",
    "cn": "你晚餐想吃什麼？ — 我想要一個有起司的大披薩。"
  },
  {
    "word": "ice cream",
    "pos": "n.",
    "cn_def": "冰淇淋",
    "en_def": "a sweet, cold food made from milk",
    "sentence": "Q: What would you like after dinner? — A: I'd like some chocolate {{BLANK}}.",
    "cn": "晚餐後你想吃什麼？ — 我想要一些巧克力冰淇淋。",
    "nblanks": 2
  },
  {
    "word": "Coke",
    "pos": "n.",
    "cn_def": "可樂",
    "en_def": "a sweet brown drink with bubbles",
    "sentence": "Q: What would you like to drink? — A: I'd like a {{BLANK}}, please.",
    "cn": "你想喝什麼？ — 我想要一杯可樂，謝謝。"
  },
  {
    "word": "ice",
    "pos": "n.",
    "cn_def": "冰",
    "en_def": "water that is so cold it is hard",
    "sentence": "Q: Would you like some water? — A: Yes, please. I'd like it with {{BLANK}}.",
    "cn": "你想要一些水嗎？ — 好的，麻煩了。我想要加冰的。"
  },
  {
    "word": "juice",
    "pos": "n.",
    "cn_def": "果汁",
    "en_def": "a drink made from fruit",
    "sentence": "Q: What would your sister like to drink? — A: She'd like a glass of apple {{BLANK}}.",
    "cn": "你妹妹想喝什麼？ — 她想要一杯蘋果汁。"
  },
  {
    "word": "tea",
    "pos": "n.",
    "cn_def": "茶",
    "en_def": "a hot drink made with dried leaves and hot water",
    "sentence": "Q: What would Grandma like to drink? — A: She'd like a cup of green {{BLANK}}.",
    "cn": "奶奶想喝什麼？ — 她想要一杯綠茶。"
  },
  {
    "word": "coffee",
    "pos": "n.",
    "cn_def": "咖啡",
    "en_def": "a hot brown drink that helps people wake up",
    "sentence": "Q: What would your dad like to drink? — A: He'd like a cup of hot {{BLANK}}.",
    "cn": "你爸爸想喝什麼？ — 他想要一杯熱咖啡。"
  },
  {
    "word": "fruit",
    "pos": "n.",
    "cn_def": "水果",
    "en_def": "sweet food that grows on trees or plants, like apples and bananas",
    "sentence": "Q: Do you like apples and bananas? — A: Yes, I do. I like all kinds of {{BLANK}}.",
    "cn": "你喜歡蘋果和香蕉嗎？ — 是的，我喜歡。我喜歡各種水果。"
  },
  {
    "word": "apple",
    "pos": "n.",
    "cn_def": "蘋果",
    "en_def": "a round fruit that is red, green, or yellow",
    "sentence": "Q: Does Tom like fruit? — A: Yes, he does. He eats an {{BLANK}} every day.",
    "cn": "湯姆喜歡水果嗎？ — 是的，他喜歡。他每天吃一顆蘋果。"
  },
  {
    "word": "orange",
    "pos": "n.",
    "cn_def": "柳橙",
    "en_def": "a round, sweet fruit with a thick orange skin",
    "sentence": "Q: Do the kids like fruit juice? — A: Yes, they do. They like {{BLANK}} juice.",
    "cn": "孩子們喜歡果汁嗎？ — 是的，他們喜歡。他們喜歡柳橙汁。"
  },
  {
    "word": "banana (bananas)",
    "pos": "n.",
    "cn_def": "香蕉",
    "en_def": "a long yellow fruit",
    "sentence": "Q: Do monkeys like fruit? — A: Yes, they do. They love yellow {{BLANK}}.",
    "cn": "猴子喜歡水果嗎？ — 是的，牠們喜歡。牠們很愛黃色的香蕉。"
  },
  {
    "word": "grape (grapes)",
    "pos": "n.",
    "cn_def": "葡萄",
    "en_def": "a small round green or purple fruit that grows in bunches",
    "sentence": "Q: Does your sister like purple fruit? — A: Yes, she does. She likes {{BLANK}} very much.",
    "cn": "你妹妹喜歡紫色的水果嗎？ — 是的，她喜歡。她非常喜歡葡萄。"
  },
  {
    "word": "guava (guavas)",
    "pos": "n.",
    "cn_def": "芭樂",
    "en_def": "a green fruit with many small seeds inside",
    "sentence": "Q: Does Grandpa like Taiwanese fruit? — A: Yes, he does. He likes green {{BLANK}}.",
    "cn": "爺爺喜歡台灣的水果嗎？ — 是的，他喜歡。他喜歡綠色的芭樂。"
  },
  {
    "word": "papaya",
    "pos": "n.",
    "cn_def": "木瓜",
    "en_def": "a long fruit that is orange inside, with small black seeds",
    "sentence": "Q: Do your parents like fruit milk? — A: Yes, they do. They like {{BLANK}} milk.",
    "cn": "你爸媽喜歡水果牛奶嗎？ — 是的，他們喜歡。他們喜歡木瓜牛奶。"
  },
  {
    "word": "peach (peaches)",
    "pos": "n.",
    "cn_def": "桃子",
    "en_def": "a soft, sweet, pink and yellow fruit with one big seed",
    "sentence": "Q: Does Amy like soft and sweet fruit? — A: Yes, she does. She likes pink {{BLANK}}.",
    "cn": "艾美喜歡軟軟甜甜的水果嗎？ — 是的，她喜歡。她喜歡粉紅色的桃子。"
  },
  {
    "word": "pear (pears)",
    "pos": "n.",
    "cn_def": "梨子",
    "en_def": "a sweet fruit that is round at the bottom and thin at the top",
    "sentence": "Q: Does your mom like apples? — A: No, she doesn't. She likes {{BLANK}}.",
    "cn": "你媽媽喜歡蘋果嗎？ — 不，她不喜歡。她喜歡梨子。"
  },
  {
    "word": "lemon",
    "pos": "n.",
    "cn_def": "檸檬",
    "en_def": "a yellow fruit that tastes sour",
    "sentence": "Q: Does your dad like sweet tea? — A: No, he doesn't. He likes {{BLANK}} tea.",
    "cn": "你爸爸喜歡甜的茶嗎？ — 不，他不喜歡。他喜歡檸檬茶。"
  },
  {
    "word": "strawberry (strawberries)",
    "pos": "n.",
    "cn_def": "草莓",
    "en_def": "a small, soft red fruit with tiny seeds on it",
    "sentence": "Q: Do you like red fruit? — A: Yes, I do. I like {{BLANK}}.",
    "cn": "你喜歡紅色的水果嗎？ — 是的，我喜歡。我喜歡草莓。"
  },
  {
    "word": "watermelon",
    "pos": "n.",
    "cn_def": "西瓜",
    "en_def": "a big fruit that is green outside and red inside",
    "sentence": "Q: Does your brother like summer fruit? — A: Yes, he does. He likes {{BLANK}}. It's big and sweet.",
    "cn": "你哥哥喜歡夏天的水果嗎？ — 是的，他喜歡。他喜歡西瓜，它又大又甜。"
  },
  {
    "word": "tomato (tomatoes)",
    "pos": "n.",
    "cn_def": "番茄",
    "en_def": "a soft, round red fruit that people eat in salads",
    "sentence": "Q: Do you like red vegetables? — A: Yes, I do. I like {{BLANK}}.",
    "cn": "你喜歡紅色的蔬菜嗎？ — 是的，我喜歡。我喜歡番茄。"
  },
  {
    "word": "vegetable (vegetables)",
    "pos": "n.",
    "cn_def": "蔬菜",
    "en_def": "a plant that people eat, like carrots and cabbage",
    "sentence": "Q: Does your little brother like green food? — A: No, he doesn't. He doesn't like {{BLANK}}.",
    "cn": "你弟弟喜歡綠色的食物嗎？ — 不，他不喜歡。他不喜歡蔬菜。"
  },
  {
    "word": "lettuce",
    "pos": "n.",
    "cn_def": "萵苣；生菜",
    "en_def": "a vegetable with big green leaves, used in salads",
    "sentence": "Q: Do rabbits like vegetables? — A: Yes, they do. They like {{BLANK}}.",
    "cn": "兔子喜歡蔬菜嗎？ — 是的，牠們喜歡。牠們喜歡生菜。"
  },
  {
    "word": "bean",
    "pos": "n.",
    "cn_def": "豆子",
    "en_def": "a small seed that people eat as a vegetable",
    "sentence": "Q: Does your grandma like sweet soup? — A: Yes, she does. She likes red {{BLANK}} soup.",
    "cn": "你奶奶喜歡甜湯嗎？ — 是的，她喜歡。她喜歡紅豆湯。"
  },
  {
    "word": "pumpkin",
    "pos": "n.",
    "cn_def": "南瓜",
    "en_def": "a big round orange vegetable",
    "sentence": "Q: Do you like Halloween food? — A: Yes, I do. I like {{BLANK}} pie.",
    "cn": "你喜歡萬聖節的食物嗎？ — 是的，我喜歡。我喜歡南瓜派。"
  },
  {
    "word": "meat",
    "pos": "n.",
    "cn_def": "肉",
    "en_def": "food that comes from animals",
    "sentence": "Q: Does your sister like beef and pork? — A: No, she doesn't. She doesn't like {{BLANK}}.",
    "cn": "你姊姊喜歡牛肉和豬肉嗎？ — 不，她不喜歡。她不喜歡肉。"
  },
  {
    "word": "beef",
    "pos": "n.",
    "cn_def": "牛肉",
    "en_def": "meat from a cow",
    "sentence": "Q: Do you like noodles? — A: Yes, I do. I like {{BLANK}} noodles.",
    "cn": "你喜歡麵嗎？ — 是的，我喜歡。我喜歡牛肉麵。"
  },
  {
    "word": "pork",
    "pos": "n.",
    "cn_def": "豬肉",
    "en_def": "meat from a pig",
    "sentence": "Q: Does Grandpa like meat? — A: Yes, he does. He likes {{BLANK}} with rice.",
    "cn": "爺爺喜歡肉嗎？ — 是的，他喜歡。他喜歡豬肉配飯。"
  },
  {
    "word": "chicken",
    "pos": "n.",
    "cn_def": "雞肉",
    "en_def": "meat from a bird that lives on farms",
    "sentence": "Q: Do your kids like fried food? — A: Yes, they do. They like fried {{BLANK}}.",
    "cn": "你的孩子們喜歡炸的食物嗎？ — 是的，他們喜歡。他們喜歡炸雞。"
  },
  {
    "word": "fish",
    "pos": "n.",
    "cn_def": "魚；魚肉",
    "en_def": "an animal that lives in water; its meat",
    "sentence": "Q: Does your cat like meat? — A: Yes, it does. But it likes {{BLANK}} best.",
    "cn": "你的貓喜歡肉嗎？ — 是的，牠喜歡。但牠最喜歡魚。"
  },
  {
    "word": "ham",
    "pos": "n.",
    "cn_def": "火腿",
    "en_def": "salty meat from a pig's leg",
    "sentence": "Q: Do you like pizza? — A: Yes, I do. I like {{BLANK}} and cheese pizza.",
    "cn": "你喜歡披薩嗎？ — 是的，我喜歡。我喜歡火腿起司披薩。"
  },
  {
    "word": "cheese",
    "pos": "n.",
    "cn_def": "起司；乳酪",
    "en_def": "a yellow or white food made from milk",
    "sentence": "Q: Does the little mouse like milk? — A: No, it doesn't. It likes {{BLANK}}.",
    "cn": "那隻小老鼠喜歡牛奶嗎？ — 不，牠不喜歡。牠喜歡起司。"
  },
  {
    "word": "chocolate",
    "pos": "n.",
    "cn_def": "巧克力",
    "en_def": "a sweet brown food or candy",
    "sentence": "Q: Do your sisters like sweet food? — A: Yes, they do. They like {{BLANK}} very much.",
    "cn": "你的姊妹們喜歡甜食嗎？ — 是的，她們喜歡。她們非常喜歡巧克力。"
  },
  {
    "word": "candy",
    "pos": "n.",
    "cn_def": "糖果",
    "en_def": "a small sweet food made with sugar",
    "sentence": "Q: Does Ben like sweet food? — A: Yes, he does. He likes {{BLANK}}, but it's bad for his teeth.",
    "cn": "班喜歡甜食嗎？ — 是的，他喜歡。他喜歡糖果，但糖果對他的牙齒不好。"
  },
  {
    "word": "popcorn",
    "pos": "n.",
    "cn_def": "爆米花",
    "en_def": "a snack made from corn that people eat at the movies",
    "sentence": "Q: Do you like movies? — A: Yes, I do. I like eating {{BLANK}} at the movies.",
    "cn": "你喜歡電影嗎？ — 是的，我喜歡。我喜歡在看電影時吃爆米花。"
  },
  {
    "word": "cake",
    "pos": "n.",
    "cn_def": "蛋糕",
    "en_def": "a sweet food that you bake, often for birthdays",
    "sentence": "Q: Does your mom like chocolate? — A: Yes, she does. She likes chocolate {{BLANK}}.",
    "cn": "你媽媽喜歡巧克力嗎？ — 是的，她喜歡。她喜歡巧克力蛋糕。"
  },
  {
    "word": "pie",
    "pos": "n.",
    "cn_def": "派",
    "en_def": "a baked food with fruit or meat inside",
    "sentence": "Q: Do you like apples? — A: Yes, I do. I like apple {{BLANK}} best.",
    "cn": "你喜歡蘋果嗎？ — 是的，我喜歡。我最喜歡蘋果派。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤",
    "en_def": "to cook food like bread or cake in an oven",
    "sentence": "Q: Do your grandparents like to make bread? — A: Yes, they do. They like to {{BLANK}} bread and cakes.",
    "cn": "你的爺爺奶奶喜歡做麵包嗎？ — 是的，他們喜歡。他們喜歡烤麵包和蛋糕。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "煮飯；烹調",
    "en_def": "to make food ready to eat by heating it",
    "sentence": "Q: Does your dad like to work in the kitchen? — A: Yes, he does. He likes to {{BLANK}} dinner for us.",
    "cn": "你爸爸喜歡在廚房工作嗎？ — 是的，他喜歡。他喜歡煮晚餐給我們吃。"
  },
  {
    "word": "egg (eggs)",
    "pos": "n.",
    "cn_def": "蛋",
    "en_def": "a round or oval food that comes from a hen",
    "sentence": "Q: How many {{BLANK}} does Mom need for the cake? — A: She needs three. She doesn't need any milk.",
    "cn": "媽媽做蛋糕需要幾顆蛋？ — 她需要三顆，她不需要任何牛奶。"
  },
  {
    "word": "bun (buns)",
    "pos": "n.",
    "cn_def": "小圓麵包；包子",
    "en_def": "a small round bread",
    "sentence": "Q: How many {{BLANK}} do you want? — A: I want two. I'm very hungry.",
    "cn": "你想要幾個小圓麵包？ — 我想要兩個，我很餓。"
  },
  {
    "word": "dumpling (dumplings)",
    "pos": "n.",
    "cn_def": "水餃；湯圓",
    "en_def": "a small piece of dough with meat or vegetables inside",
    "sentence": "Q: How many {{BLANK}} does Dad want? — A: He wants twenty! He has them for dinner.",
    "cn": "爸爸想要幾顆水餃？ — 他想要二十顆！他晚餐要吃。"
  },
  {
    "word": "cookie (cookies)",
    "pos": "n.",
    "cn_def": "餅乾",
    "en_def": "a small, flat, sweet baked snack",
    "sentence": "Q: How many {{BLANK}} do the kids have? — A: They have ten. They want to share them.",
    "cn": "孩子們有幾片餅乾？ — 他們有十片，他們想要分享。"
  },
  {
    "word": "bread",
    "pos": "n.",
    "cn_def": "麵包",
    "en_def": "a food made from flour and baked in an oven",
    "sentence": "Q: How much {{BLANK}} do we have? — A: We don't have any. Let's buy some.",
    "cn": "我們有多少麵包？ — 我們一點都沒有了，我們去買一些吧。"
  },
  {
    "word": "rice",
    "pos": "n.",
    "cn_def": "米飯",
    "en_def": "small white grains that people cook and eat",
    "sentence": "Q: How much {{BLANK}} does your brother eat? — A: He eats three bowls every day.",
    "cn": "你哥哥吃多少飯？ — 他每天吃三碗。"
  },
  {
    "word": "salt",
    "pos": "n.",
    "cn_def": "鹽",
    "en_def": "a white powder that makes food taste salty",
    "sentence": "Q: How much {{BLANK}} does the soup need? — A: It needs a little.",
    "cn": "這湯需要多少鹽？ — 它需要一點點。"
  },
  {
    "word": "sugar",
    "pos": "n.",
    "cn_def": "糖",
    "en_def": "something white or brown that makes food sweet",
    "sentence": "Q: How much {{BLANK}} do you want in your coffee? — A: I don't want any, thanks.",
    "cn": "你的咖啡裡要加多少糖？ — 我一點都不要，謝謝。"
  },
  {
    "word": "oil",
    "pos": "n.",
    "cn_def": "油",
    "en_def": "a thick liquid used for cooking",
    "sentence": "Q: How much {{BLANK}} does Mom need? — A: She needs a little. She is cooking eggs.",
    "cn": "媽媽需要多少油？ — 她需要一點點，她正在煎蛋。"
  },
  {
    "word": "butter",
    "pos": "n.",
    "cn_def": "奶油",
    "en_def": "a soft yellow food made from milk that you put on bread",
    "sentence": "Q: Do we have any {{BLANK}}? — A: Yes, we have some. It's in the fridge.",
    "cn": "我們有奶油嗎？ — 有，我們有一些，在冰箱裡。"
  },
  {
    "word": "milk",
    "pos": "n.",
    "cn_def": "牛奶",
    "en_def": "a white drink that comes from cows",
    "sentence": "Q: How much {{BLANK}} does the baby drink? — A: She drinks three bottles a day.",
    "cn": "這個寶寶喝多少牛奶？ — 她一天喝三瓶。"
  },
  {
    "word": "water",
    "pos": "n.",
    "cn_def": "水",
    "en_def": "the clear liquid that we drink; it falls as rain",
    "sentence": "Q: How many glasses of {{BLANK}} do you drink every day? — A: I drink eight glasses.",
    "cn": "你每天喝幾杯水？ — 我喝八杯。"
  },
  {
    "word": "soup",
    "pos": "n.",
    "cn_def": "湯",
    "en_def": "a hot liquid food that you eat with a spoon",
    "sentence": "Q: How does the {{BLANK}} taste? — A: It's good, but it needs more salt.",
    "cn": "這湯嚐起來怎麼樣？ — 很好，但它需要多一點鹽。"
  },
  {
    "word": "steak",
    "pos": "n.",
    "cn_def": "牛排",
    "en_def": "a thick piece of meat, usually beef",
    "sentence": "Q: How does your {{BLANK}} taste? — A: It's great. I like beef.",
    "cn": "你的牛排嚐起來怎麼樣？ — 很棒，我喜歡牛肉。"
  },
  {
    "word": "salad",
    "pos": "n.",
    "cn_def": "沙拉",
    "en_def": "a cold dish of vegetables like lettuce and tomatoes",
    "sentence": "Q: How does the {{BLANK}} taste? — A: It's fresh. It has lettuce and tomatoes.",
    "cn": "這沙拉嚐起來怎麼樣？ — 很新鮮，裡面有生菜和番茄。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的",
    "en_def": "tasting very good",
    "sentence": "Q: How does Mom's beef soup taste? — A: It tastes {{BLANK}}.",
    "cn": "媽媽的牛肉湯嚐起來怎麼樣？ — 它嚐起來很美味。"
  },
  {
    "word": "yummy",
    "pos": "adj.",
    "cn_def": "好吃的",
    "en_def": "tasting very good",
    "sentence": "Q: How do the cookies taste? — A: They're {{BLANK}}! I want more.",
    "cn": "這些餅乾嚐起來怎麼樣？ — 它們好好吃！我還想要。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "tasting like sugar",
    "sentence": "Q: How does the watermelon taste? — A: It tastes very {{BLANK}}.",
    "cn": "這西瓜嚐起來怎麼樣？ — 它嚐起來很甜。"
  },
  {
    "word": "hot",
    "pos": "adj.",
    "cn_def": "熱的；燙的；辣的",
    "en_def": "having a high temperature; not cold; also spicy",
    "sentence": "Q: How do the noodles taste? — A: They're too {{BLANK}}. Wait a minute.",
    "cn": "這些麵嚐起來怎麼樣？ — 它們太燙了，等一下吧。"
  },
  {
    "word": "burn (burns)",
    "pos": "v.",
    "cn_def": "燒焦；燃燒",
    "en_def": "to be on fire; to hurt or spoil something with fire or heat",
    "sentence": "Q: How does the toast taste? — A: It tastes bad. Dad often {{BLANK}} it.",
    "cn": "這土司嚐起來怎麼樣？ — 嚐起來很糟，爸爸常常把它烤焦。"
  },
  {
    "word": "breakfast",
    "pos": "n.",
    "cn_def": "早餐",
    "en_def": "the first meal of the day, eaten in the morning",
    "sentence": "Q: What do you have for {{BLANK}}? — A: I have toast and milk every morning.",
    "cn": "你早餐吃什麼？ — 我每天早上吃土司和喝牛奶。"
  },
  {
    "word": "toast",
    "pos": "n.",
    "cn_def": "土司",
    "en_def": "a piece of bread heated until it is brown",
    "sentence": "Q: What does Dad have for breakfast? — A: He has {{BLANK}} and coffee for breakfast.",
    "cn": "爸爸早餐吃什麼？ — 他早餐吃土司、喝咖啡。"
  },
  {
    "word": "drink",
    "pos": "v.",
    "cn_def": "喝",
    "en_def": "to take water, milk, or juice into your mouth and body",
    "sentence": "Q: What do your kids have for breakfast? — A: They have bread, and they {{BLANK}} a glass of milk.",
    "cn": "你的孩子們早餐吃什麼？ — 他們吃麵包，而且喝一杯牛奶。"
  },
  {
    "word": "boil (boils)",
    "pos": "v.",
    "cn_def": "煮沸；水煮",
    "en_def": "to heat water until it is very hot; to cook food in very hot water",
    "sentence": "Q: What does Grandma have for breakfast? — A: She has two eggs. She {{BLANK}} them in water.",
    "cn": "奶奶早餐吃什麼？ — 她吃兩顆蛋，她用水把蛋煮熟。"
  },
  {
    "word": "lunch",
    "pos": "n.",
    "cn_def": "午餐",
    "en_def": "the meal you eat in the middle of the day",
    "sentence": "Q: What does Amy have for {{BLANK}}? — A: She has rice and fish at noon.",
    "cn": "艾美午餐吃什麼？ — 她中午吃飯和魚。"
  },
  {
    "word": "sandwich",
    "pos": "n.",
    "cn_def": "三明治",
    "en_def": "two pieces of bread with meat, egg, or cheese between them",
    "sentence": "Q: What do you have for lunch? — A: I have a ham {{BLANK}} for lunch.",
    "cn": "你午餐吃什麼？ — 我午餐吃火腿三明治。"
  },
  {
    "word": "noodles",
    "pos": "n.",
    "cn_def": "麵條",
    "en_def": "long thin pieces of food made from flour",
    "sentence": "Q: What does your dad have for lunch? — A: He has beef {{BLANK}} for lunch.",
    "cn": "你爸爸午餐吃什麼？ — 他午餐吃牛肉麵。"
  },
  {
    "word": "eat (eats)",
    "pos": "v.",
    "cn_def": "吃",
    "en_def": "to put food in your mouth and swallow it",
    "sentence": "Q: What does your brother have for dinner? — A: He {{BLANK}} rice and pork for dinner.",
    "cn": "你哥哥晚餐吃什麼？ — 他晚餐吃飯和豬肉。"
  },
  {
    "word": "dinner",
    "pos": "n.",
    "cn_def": "晚餐",
    "en_def": "the main meal of the day, usually eaten in the evening",
    "sentence": "Q: What do your parents have for {{BLANK}}? — A: They have soup and steak in the evening.",
    "cn": "你爸媽晚餐吃什麼？ — 他們晚上吃湯和牛排。"
  },
  {
    "word": "meal",
    "pos": "n.",
    "cn_def": "一餐",
    "en_def": "the food you eat at one time, like breakfast or dinner",
    "sentence": "Q: What does your family have for dinner on Sundays? — A: We have a big {{BLANK}} together.",
    "cn": "你們家星期天晚餐吃什麼？ — 我們一起吃一頓大餐。"
  },
  {
    "word": "barbecue",
    "pos": "n.",
    "cn_def": "烤肉",
    "en_def": "a meal or party where food is cooked outside over a fire",
    "sentence": "Q: What do you have for dinner on Moon Festival? — A: We have a {{BLANK}} with our neighbors.",
    "cn": "中秋節你們晚餐吃什麼？ — 我們和鄰居一起烤肉。"
  },
  {
    "word": "snack",
    "pos": "n.",
    "cn_def": "點心",
    "en_def": "a small amount of food you eat between meals",
    "sentence": "Q: What do you have after school? — A: I have a {{BLANK}}: some fruit and milk.",
    "cn": "你放學後吃什麼？ — 我吃點心：一些水果和牛奶。"
  }
];

const MCQS = [
  {
    "q": "I didn't eat breakfast or lunch today, so I am very ______ now. Let's find a restaurant right away.",
    "options": [
      "thirsty",
      "full",
      "sweet",
      "hungry"
    ],
    "answer": 3,
    "cn": "你想吃什麼？ — 我好餓，我想要一大碗麵。",
    "vocabIndex": 0
  },
  {
    "q": "It is hot, and I ran for an hour. I am so ______ that I can drink a whole bottle of water.",
    "options": [
      "hungry",
      "full",
      "thirsty",
      "yummy"
    ],
    "answer": 2,
    "cn": "你想喝什麼？ — 我口渴了，我想要一杯水。",
    "vocabIndex": 1
  },
  {
    "q": "I ate two bowls of rice and a big steak. I am too ______ to eat any cake now.",
    "options": [
      "hungry",
      "full",
      "thirsty",
      "sweet"
    ],
    "answer": 1,
    "cn": "你想再吃一些蛋糕嗎？ — 不用了，謝謝，我吃飽了。",
    "vocabIndex": 2
  },
  {
    "q": "The waiter gave us the ______. We read it and chose a pizza and two salads.",
    "options": [
      "menu",
      "meal",
      "snack",
      "fruit"
    ],
    "answer": 0,
    "cn": "先生，您想吃什麼？ — 可以請你給我看一下菜單嗎？",
    "vocabIndex": 3
  },
  {
    "q": "Are you ready to ______, sir? Today's special is beef noodles.",
    "options": [
      "bake",
      "boil",
      "order",
      "burn"
    ],
    "answer": 2,
    "cn": "您準備好了嗎？您想要什麼？ — 我想要點一個披薩，謝謝。",
    "vocabIndex": 4
  },
  {
    "q": "Pizza is my favorite ______. I can eat it for lunch and dinner every day.",
    "options": [
      "menu",
      "juice",
      "tea",
      "food"
    ],
    "answer": 3,
    "cn": "你今晚想吃什麼？ — 我想吃一些日本料理（食物）。",
    "vocabIndex": 5
  },
  {
    "q": "A ______ has a piece of beef between two round buns. Many people eat it with fries and a Coke.",
    "options": [
      "pizza",
      "hamburger",
      "pie",
      "salad"
    ],
    "answer": 1,
    "cn": "你午餐想吃什麼？ — 我想要一個漢堡，謝謝。",
    "vocabIndex": 6
  },
  {
    "q": "I'd like a hamburger and some ______, please. I love these long, thin pieces of potato.",
    "options": [
      "fries",
      "noodles",
      "beans",
      "grapes"
    ],
    "answer": 0,
    "cn": "你的漢堡想配什麼？ — 我想要一些薯條。",
    "vocabIndex": 7
  },
  {
    "q": "A ______ is a long sausage in a long bun. People often eat one at a baseball game.",
    "options": [
      "ice cream",
      "pizza",
      "hot dog",
      "salad"
    ],
    "answer": 2,
    "cn": "班想吃什麼？ — 他想要一個熱狗。",
    "vocabIndex": 8
  },
  {
    "q": "Let's order a large ______ with cheese and tomatoes on top. We can cut it into eight pieces and share it.",
    "options": [
      "soup",
      "pizza",
      "juice",
      "candy"
    ],
    "answer": 1,
    "cn": "你晚餐想吃什麼？ — 我想要一個有起司的大披薩。",
    "vocabIndex": 9
  },
  {
    "q": "On hot summer days, children love to eat ______. It is sweet and cold, and you must eat it fast.",
    "options": [
      "ice cream",
      "hot dog",
      "popcorn",
      "toast"
    ],
    "answer": 0,
    "cn": "晚餐後你想吃什麼？ — 我想要一些巧克力冰淇淋。",
    "vocabIndex": 10
  },
  {
    "q": "I'd like a hamburger and a large ______ with ice, please. I love this sweet brown drink.",
    "options": [
      "milk",
      "water",
      "soup",
      "Coke"
    ],
    "answer": 3,
    "cn": "你想喝什麼？ — 我想要一杯可樂，謝謝。",
    "vocabIndex": 11
  },
  {
    "q": "Please put some ______ in my juice. I want my drink to be very cold.",
    "options": [
      "salt",
      "ice",
      "oil",
      "butter"
    ],
    "answer": 1,
    "cn": "你想要一些水嗎？ — 好的，麻煩了。我想要加冰的。",
    "vocabIndex": 12
  },
  {
    "q": "Mom makes fresh orange ______ every morning. She uses five oranges to make one glass.",
    "options": [
      "juice",
      "soup",
      "salt",
      "rice"
    ],
    "answer": 0,
    "cn": "你妹妹想喝什麼？ — 她想要一杯蘋果汁。",
    "vocabIndex": 13
  },
  {
    "q": "People in Taiwan love to drink ______. They put the dried leaves in a pot and add hot water.",
    "options": [
      "milk",
      "juice",
      "Coke",
      "tea"
    ],
    "answer": 3,
    "cn": "奶奶想喝什麼？ — 她想要一杯綠茶。",
    "vocabIndex": 14
  },
  {
    "q": "Dad drinks a cup of black ______ every morning. He says he can't wake up without it.",
    "options": [
      "milk",
      "juice",
      "coffee",
      "water"
    ],
    "answer": 2,
    "cn": "你爸爸想喝什麼？ — 他想要一杯熱咖啡。",
    "vocabIndex": 15
  },
  {
    "q": "Apples, bananas, and grapes are all ______. Eating some every day is good for your health.",
    "options": [
      "fruit",
      "meat",
      "candy",
      "bread"
    ],
    "answer": 0,
    "cn": "你喜歡蘋果和香蕉嗎？ — 是的，我喜歡。我喜歡各種水果。",
    "vocabIndex": 16
  },
  {
    "q": "An ______ a day keeps the doctor away. This round red fruit is good for you.",
    "options": [
      "orange",
      "apple",
      "egg",
      "ice"
    ],
    "answer": 1,
    "cn": "湯姆喜歡水果嗎？ — 是的，他喜歡。他每天吃一顆蘋果。",
    "vocabIndex": 17
  },
  {
    "q": "An ______ is a round fruit with a thick skin. Its name is the same as its color.",
    "options": [
      "apple",
      "egg",
      "ice",
      "orange"
    ],
    "answer": 3,
    "cn": "孩子們喜歡果汁嗎？ — 是的，他們喜歡。他們喜歡柳橙汁。",
    "vocabIndex": 18
  },
  {
    "q": "Monkeys love to eat ______. These long yellow fruits are sweet and soft.",
    "options": [
      "lemons",
      "grapes",
      "bananas",
      "pears"
    ],
    "answer": 2,
    "cn": "猴子喜歡水果嗎？ — 是的，牠們喜歡。牠們很愛黃色的香蕉。",
    "vocabIndex": 19
  },
  {
    "q": "These small, round, purple fruits are ______. People also use them to make wine.",
    "options": [
      "bananas",
      "papayas",
      "watermelons",
      "grapes"
    ],
    "answer": 3,
    "cn": "你妹妹喜歡紫色的水果嗎？ — 是的，她喜歡。她非常喜歡葡萄。",
    "vocabIndex": 20
  },
  {
    "q": "______ are green fruits with many small hard seeds inside. They are very popular in Taiwan.",
    "options": [
      "Bananas",
      "guavas",
      "Strawberries",
      "Oranges"
    ],
    "answer": 1,
    "cn": "爺爺喜歡台灣的水果嗎？ — 是的，他喜歡。他喜歡綠色的芭樂。",
    "vocabIndex": 21
  },
  {
    "q": "A ______ is orange inside and has many small black seeds. People in Taiwan love to drink it with milk.",
    "options": [
      "papaya",
      "lemon",
      "pear",
      "peach"
    ],
    "answer": 0,
    "cn": "你爸媽喜歡水果牛奶嗎？ — 是的，他們喜歡。他們喜歡木瓜牛奶。",
    "vocabIndex": 22
  },
  {
    "q": "______ are soft, sweet fruits with pink skin and one big hard seed in the middle.",
    "options": [
      "Bananas",
      "Grapes",
      "peaches",
      "Lemons"
    ],
    "answer": 2,
    "cn": "艾美喜歡軟軟甜甜的水果嗎？ — 是的，她喜歡。她喜歡粉紅色的桃子。",
    "vocabIndex": 23
  },
  {
    "q": "______ are sweet fruits that are round at the bottom and thinner at the top. They are usually yellow or green.",
    "options": [
      "pears",
      "Bananas",
      "Grapes",
      "Strawberries"
    ],
    "answer": 0,
    "cn": "你媽媽喜歡蘋果嗎？ — 不，她不喜歡。她喜歡梨子。",
    "vocabIndex": 24
  },
  {
    "q": "A ______ is a yellow fruit, and it tastes very sour. People put it in tea or water.",
    "options": [
      "peach",
      "pear",
      "lemon",
      "papaya"
    ],
    "answer": 2,
    "cn": "你爸爸喜歡甜的茶嗎？ — 不，他不喜歡。他喜歡檸檬茶。",
    "vocabIndex": 25
  },
  {
    "q": "______ are small red fruits with tiny seeds on the outside. People often put them on cakes.",
    "options": [
      "Lemons",
      "strawberries",
      "Bananas",
      "Pears"
    ],
    "answer": 1,
    "cn": "你喜歡紅色的水果嗎？ — 是的，我喜歡。我喜歡草莓。",
    "vocabIndex": 26
  },
  {
    "q": "A ______ is a very big fruit. It is green outside and red inside, and it has a lot of water.",
    "options": [
      "lemon",
      "grape",
      "peach",
      "watermelon"
    ],
    "answer": 3,
    "cn": "你哥哥喜歡夏天的水果嗎？ — 是的，他喜歡。他喜歡西瓜，它又大又甜。",
    "vocabIndex": 27
  },
  {
    "q": "We use ______ to make ketchup. These round red vegetables are good in salads, too.",
    "options": [
      "beans",
      "pumpkins",
      "tomatoes",
      "lemons"
    ],
    "answer": 2,
    "cn": "你喜歡紅色的蔬菜嗎？ — 是的，我喜歡。我喜歡番茄。",
    "vocabIndex": 28
  },
  {
    "q": "Carrots, lettuce, and cabbage are all ______. You should eat more of them to stay healthy.",
    "options": [
      "fruits",
      "snacks",
      "meals",
      "vegetables"
    ],
    "answer": 3,
    "cn": "你弟弟喜歡綠色的食物嗎？ — 不，他不喜歡。他不喜歡蔬菜。",
    "vocabIndex": 29
  },
  {
    "q": "______ is a vegetable with big green leaves. People use it to make salads and sandwiches.",
    "options": [
      "Pumpkin",
      "lettuce",
      "Cheese",
      "Ham"
    ],
    "answer": 1,
    "cn": "兔子喜歡蔬菜嗎？ — 是的，牠們喜歡。牠們喜歡生菜。",
    "vocabIndex": 30
  },
  {
    "q": "Tofu and soy milk are made from ______. These small seeds are very good for you.",
    "options": [
      "beans",
      "eggs",
      "grapes",
      "noodles"
    ],
    "answer": 0,
    "cn": "你奶奶喜歡甜湯嗎？ — 是的，她喜歡。她喜歡紅豆湯。",
    "vocabIndex": 31
  },
  {
    "q": "A ______ is a big, round, orange vegetable. People cut a face in it on Halloween.",
    "options": [
      "tomato",
      "bean",
      "pumpkin",
      "lemon"
    ],
    "answer": 2,
    "cn": "你喜歡萬聖節的食物嗎？ — 是的，我喜歡。我喜歡南瓜派。",
    "vocabIndex": 32
  },
  {
    "q": "Beef, pork, and chicken are all kinds of ______. Some people don't eat it and only eat vegetables.",
    "options": [
      "meat",
      "fruit",
      "bread",
      "candy"
    ],
    "answer": 0,
    "cn": "你姊姊喜歡牛肉和豬肉嗎？ — 不，她不喜歡。她不喜歡肉。",
    "vocabIndex": 33
  },
  {
    "q": "______ is meat from a cow. People use it to make steak and hamburgers.",
    "options": [
      "Pork",
      "Chicken",
      "Ham",
      "beef"
    ],
    "answer": 3,
    "cn": "你喜歡麵嗎？ — 是的，我喜歡。我喜歡牛肉麵。",
    "vocabIndex": 34
  },
  {
    "q": "______ is meat from a pig. Ham is made from it, too.",
    "options": [
      "Beef",
      "pork",
      "Chicken",
      "Fish"
    ],
    "answer": 1,
    "cn": "爺爺喜歡肉嗎？ — 是的，他喜歡。他喜歡豬肉配飯。",
    "vocabIndex": 35
  },
  {
    "q": "I'd like some fried ______, please. I love the meat of this farm bird, and I like the legs best.",
    "options": [
      "beef",
      "pork",
      "fish",
      "chicken"
    ],
    "answer": 3,
    "cn": "你的孩子們喜歡炸的食物嗎？ — 是的，他們喜歡。他們喜歡炸雞。",
    "vocabIndex": 36
  },
  {
    "q": "We caught a big ______ in the river and cooked it for dinner. Be careful of the small bones when you eat it.",
    "options": [
      "ham",
      "fish",
      "steak",
      "bean"
    ],
    "answer": 1,
    "cn": "你的貓喜歡肉嗎？ — 是的，牠喜歡。但牠最喜歡魚。",
    "vocabIndex": 37
  },
  {
    "q": "I'd like a ______ and egg sandwich, please. I love this salty pink meat from a pig's leg.",
    "options": [
      "ham",
      "fish",
      "cheese",
      "butter"
    ],
    "answer": 0,
    "cn": "你喜歡披薩嗎？ — 是的，我喜歡。我喜歡火腿起司披薩。",
    "vocabIndex": 38
  },
  {
    "q": "Mice love to eat ______. This yellow food is made from milk, and people put it on pizza.",
    "options": [
      "ham",
      "salt",
      "cheese",
      "sugar"
    ],
    "answer": 2,
    "cn": "那隻小老鼠喜歡牛奶嗎？ — 不，牠不喜歡。牠喜歡起司。",
    "vocabIndex": 39
  },
  {
    "q": "______ is a sweet brown food. People give it to someone they love on Valentine's Day.",
    "options": [
      "Cheese",
      "Butter",
      "Popcorn",
      "chocolate"
    ],
    "answer": 3,
    "cn": "你的姊妹們喜歡甜食嗎？ — 是的，她們喜歡。她們非常喜歡巧克力。",
    "vocabIndex": 40
  },
  {
    "q": "Children love ______, but eating too much of this sweet food is bad for their teeth.",
    "options": [
      "salad",
      "soup",
      "candy",
      "salt"
    ],
    "answer": 2,
    "cn": "班喜歡甜食嗎？ — 是的，他喜歡。他喜歡糖果，但糖果對他的牙齒不好。",
    "vocabIndex": 41
  },
  {
    "q": "We always buy a big box of ______ when we watch a movie at the theater. It is made from corn.",
    "options": [
      "popcorn",
      "chocolate",
      "candy",
      "cheese"
    ],
    "answer": 0,
    "cn": "你喜歡電影嗎？ — 是的，我喜歡。我喜歡在看電影時吃爆米花。",
    "vocabIndex": 42
  },
  {
    "q": "Mom made a big birthday ______ for me. There were twelve candles on it, and I blew them all out.",
    "options": [
      "soup",
      "cake",
      "salad",
      "steak"
    ],
    "answer": 1,
    "cn": "你媽媽喜歡巧克力嗎？ — 是的，她喜歡。她喜歡巧克力蛋糕。",
    "vocabIndex": 43
  },
  {
    "q": "Grandma's apple ______ is the best. She puts a lot of fruit inside and bakes it for an hour.",
    "options": [
      "soup",
      "salad",
      "steak",
      "pie"
    ],
    "answer": 3,
    "cn": "你喜歡蘋果嗎？ — 是的，我喜歡。我最喜歡蘋果派。",
    "vocabIndex": 44
  },
  {
    "q": "I want to ______ a cake for Dad's birthday. I need flour, eggs, sugar, and an oven.",
    "options": [
      "boil",
      "drink",
      "bake",
      "order"
    ],
    "answer": 2,
    "cn": "你的爺爺奶奶喜歡做麵包嗎？ — 是的，他們喜歡。他們喜歡烤麵包和蛋糕。",
    "vocabIndex": 45
  },
  {
    "q": "Dad can't ______, so we eat out when Mom is not at home. He doesn't even know how to make an egg.",
    "options": [
      "eat",
      "cook",
      "drink",
      "order"
    ],
    "answer": 1,
    "cn": "你爸爸喜歡在廚房工作嗎？ — 是的，他喜歡。他喜歡煮晚餐給我們吃。",
    "vocabIndex": 46
  },
  {
    "q": "Hens lay ______. You can boil or fry them for breakfast.",
    "options": [
      "eggs",
      "buns",
      "cookies",
      "dumplings"
    ],
    "answer": 0,
    "cn": "媽媽做蛋糕需要幾顆蛋？ — 她需要三顆，她不需要任何牛奶。",
    "vocabIndex": 47
  },
  {
    "q": "A hamburger has two round ______ with meat between them. The bakery makes them fresh every morning.",
    "options": [
      "eggs",
      "cookies",
      "buns",
      "pies"
    ],
    "answer": 2,
    "cn": "你想要幾個小圓麵包？ — 我想要兩個，我很餓。",
    "vocabIndex": 48
  },
  {
    "q": "Mom is making ______ for dinner. She puts pork and vegetables inside each one and then boils them in water.",
    "options": [
      "cookies",
      "dumplings",
      "sandwiches",
      "salads"
    ],
    "answer": 1,
    "cn": "爸爸想要幾顆水餃？ — 他想要二十顆！他晚餐要吃。",
    "vocabIndex": 49
  },
  {
    "q": "Grandma baked some chocolate ______ for us. These small, flat, sweet snacks are great with milk.",
    "options": [
      "cookies",
      "dumplings",
      "eggs",
      "buns"
    ],
    "answer": 0,
    "cn": "孩子們有幾片餅乾？ — 他們有十片，他們想要分享。",
    "vocabIndex": 50
  },
  {
    "q": "Mom went to the bakery to buy some ______. We need it to make sandwiches for the picnic.",
    "options": [
      "rice",
      "soup",
      "salt",
      "bread"
    ],
    "answer": 3,
    "cn": "我們有多少麵包？ — 我們一點都沒有了，我們去買一些吧。",
    "vocabIndex": 51
  },
  {
    "q": "People in Taiwan eat ______ almost every day. They cook the small white grains and eat them with meat and vegetables.",
    "options": [
      "rice",
      "bread",
      "butter",
      "sugar"
    ],
    "answer": 0,
    "cn": "你哥哥吃多少飯？ — 他每天吃三碗。",
    "vocabIndex": 52
  },
  {
    "q": "The soup has no taste. Please add a little ______, but not too much, or it will be too salty.",
    "options": [
      "sugar",
      "salt",
      "butter",
      "milk"
    ],
    "answer": 1,
    "cn": "這湯需要多少鹽？ — 它需要一點點。",
    "vocabIndex": 53
  },
  {
    "q": "I like my coffee sweet, so I always put two spoons of ______ in it.",
    "options": [
      "salt",
      "oil",
      "sugar",
      "rice"
    ],
    "answer": 2,
    "cn": "你的咖啡裡要加多少糖？ — 我一點都不要，謝謝。",
    "vocabIndex": 54
  },
  {
    "q": "Put some ______ in the pan before you fry the eggs. Then the eggs won't stick to the pan.",
    "options": [
      "salt",
      "sugar",
      "milk",
      "oil"
    ],
    "answer": 3,
    "cn": "媽媽需要多少油？ — 她需要一點點，她正在煎蛋。",
    "vocabIndex": 55
  },
  {
    "q": "I like to put ______ on my toast. This soft yellow food is made from milk.",
    "options": [
      "butter",
      "oil",
      "salt",
      "sugar"
    ],
    "answer": 0,
    "cn": "我們有奶油嗎？ — 有，我們有一些，在冰箱裡。",
    "vocabIndex": 56
  },
  {
    "q": "Babies drink ______. This white drink comes from cows, and it helps children grow tall.",
    "options": [
      "tea",
      "milk",
      "coffee",
      "juice"
    ],
    "answer": 1,
    "cn": "這個寶寶喝多少牛奶？ — 她一天喝三瓶。",
    "vocabIndex": 57
  },
  {
    "q": "Plants and animals can't live without ______. You should drink eight glasses of it every day.",
    "options": [
      "salt",
      "sugar",
      "water",
      "oil"
    ],
    "answer": 2,
    "cn": "你每天喝幾杯水？ — 我喝八杯。",
    "vocabIndex": 58
  },
  {
    "q": "It is cold today. Let's have some hot chicken ______. You will need a spoon to eat it.",
    "options": [
      "salad",
      "steak",
      "pie",
      "soup"
    ],
    "answer": 3,
    "cn": "這湯嚐起來怎麼樣？ — 很好，但它需要多一點鹽。",
    "vocabIndex": 59
  },
  {
    "q": "I'd like a ______, please. I want the beef well cooked, and I'd like some fries with it.",
    "options": [
      "salad",
      "steak",
      "soup",
      "pie"
    ],
    "answer": 1,
    "cn": "你的牛排嚐起來怎麼樣？ — 很棒，我喜歡牛肉。",
    "vocabIndex": 60
  },
  {
    "q": "I'd like a ______ with lettuce, tomatoes, and eggs. I want to eat more fresh vegetables.",
    "options": [
      "steak",
      "pie",
      "cake",
      "salad"
    ],
    "answer": 3,
    "cn": "這沙拉嚐起來怎麼樣？ — 很新鮮，裡面有生菜和番茄。",
    "vocabIndex": 61
  },
  {
    "q": "The beef noodles here are ______. I come to this restaurant every week to eat them.",
    "options": [
      "hungry",
      "thirsty",
      "delicious",
      "full"
    ],
    "answer": 2,
    "cn": "媽媽的牛肉湯嚐起來怎麼樣？ — 它嚐起來很美味。",
    "vocabIndex": 62
  },
  {
    "q": "Mmm, this chocolate cake is ______! Can I have another piece, please?",
    "options": [
      "yummy",
      "hungry",
      "thirsty",
      "full"
    ],
    "answer": 0,
    "cn": "這些餅乾嚐起來怎麼樣？ — 它們好好吃！我還想要。",
    "vocabIndex": 63
  },
  {
    "q": "This cake is too ______ for me. I think you put too much sugar in it.",
    "options": [
      "hungry",
      "thirsty",
      "sweet",
      "full"
    ],
    "answer": 2,
    "cn": "這西瓜嚐起來怎麼樣？ — 它嚐起來很甜。",
    "vocabIndex": 64
  },
  {
    "q": "Be careful! The soup is very ______. Wait for a few minutes, or you will burn your mouth.",
    "options": [
      "sweet",
      "hot",
      "full",
      "hungry"
    ],
    "answer": 1,
    "cn": "這些麵嚐起來怎麼樣？ — 它們太燙了，等一下吧。",
    "vocabIndex": 65
  },
  {
    "q": "Dad is not a good cook. He often ______ the fish, so it turns black and tastes bad.",
    "options": [
      "drinks",
      "orders",
      "boils",
      "burns"
    ],
    "answer": 3,
    "cn": "這土司嚐起來怎麼樣？ — 嚐起來很糟，爸爸常常把它烤焦。",
    "vocabIndex": 66
  },
  {
    "q": "I have ______ at seven every morning. It is the first meal of the day.",
    "options": [
      "breakfast",
      "lunch",
      "dinner",
      "barbecue"
    ],
    "answer": 0,
    "cn": "你早餐吃什麼？ — 我每天早上吃土司和喝牛奶。",
    "vocabIndex": 67
  },
  {
    "q": "I had two pieces of ______ with butter this morning. I heated the bread until it was brown.",
    "options": [
      "soup",
      "toast",
      "salad",
      "steak"
    ],
    "answer": 1,
    "cn": "爸爸早餐吃什麼？ — 他早餐吃土司、喝咖啡。",
    "vocabIndex": 68
  },
  {
    "q": "It is good to ______ a glass of water after you get up in the morning.",
    "options": [
      "eat",
      "bake",
      "cook",
      "drink"
    ],
    "answer": 3,
    "cn": "你的孩子們早餐吃什麼？ — 他們吃麵包，而且喝一杯牛奶。",
    "vocabIndex": 69
  },
  {
    "q": "Mom ______ the eggs in water for ten minutes. Then we eat them with a little salt.",
    "options": [
      "bakes",
      "orders",
      "boils",
      "drinks"
    ],
    "answer": 2,
    "cn": "奶奶早餐吃什麼？ — 她吃兩顆蛋，她用水把蛋煮熟。",
    "vocabIndex": 70
  },
  {
    "q": "We have ______ at school at twelve o'clock. It is the meal in the middle of the day.",
    "options": [
      "lunch",
      "breakfast",
      "dinner",
      "barbecue"
    ],
    "answer": 0,
    "cn": "艾美午餐吃什麼？ — 她中午吃飯和魚。",
    "vocabIndex": 71
  },
  {
    "q": "I made a ______ with two pieces of bread, some ham, and an egg. I will eat it at the picnic.",
    "options": [
      "salad",
      "soup",
      "steak",
      "sandwich"
    ],
    "answer": 3,
    "cn": "你午餐吃什麼？ — 我午餐吃火腿三明治。",
    "vocabIndex": 72
  },
  {
    "q": "Beef ______ are famous in Taiwan. You eat these long, thin things with chopsticks.",
    "options": [
      "cookies",
      "noodles",
      "buns",
      "eggs"
    ],
    "answer": 1,
    "cn": "你爸爸午餐吃什麼？ — 他午餐吃牛肉麵。",
    "vocabIndex": 73
  },
  {
    "q": "My brother ______ three bowls of rice at every meal because he plays basketball for hours every day.",
    "options": [
      "drinks",
      "bakes",
      "eats",
      "burns"
    ],
    "answer": 2,
    "cn": "你哥哥晚餐吃什麼？ — 他晚餐吃飯和豬肉。",
    "vocabIndex": 74
  },
  {
    "q": "Our family has ______ together at seven every evening. It is the last meal of the day.",
    "options": [
      "dinner",
      "breakfast",
      "lunch",
      "toast"
    ],
    "answer": 0,
    "cn": "你爸媽晚餐吃什麼？ — 他們晚上吃湯和牛排。",
    "vocabIndex": 75
  },
  {
    "q": "Breakfast is the most important ______ of the day. Don't go to school without eating it.",
    "options": [
      "snack",
      "menu",
      "meal",
      "fruit"
    ],
    "answer": 2,
    "cn": "你們家星期天晚餐吃什麼？ — 我們一起吃一頓大餐。",
    "vocabIndex": 76
  },
  {
    "q": "We had a ______ in the yard last night. Dad cooked meat and corn over a fire.",
    "options": [
      "breakfast",
      "barbecue",
      "menu",
      "snack"
    ],
    "answer": 1,
    "cn": "中秋節你們晚餐吃什麼？ — 我們和鄰居一起烤肉。",
    "vocabIndex": 77
  },
  {
    "q": "I am a little hungry, but dinner is two hours away. Can I have a small ______, like a cookie or an apple?",
    "options": [
      "meal",
      "menu",
      "dinner",
      "snack"
    ],
    "answer": 3,
    "cn": "你放學後吃什麼？ — 我吃點心：一些水果和牛奶。",
    "vocabIndex": 78
  }
];

const LOOKUP = {
  "thirsty": {
    "pos": "adj.",
    "en_def": "wanting to drink",
    "cn_def": "口渴的"
  },
  "full": {
    "pos": "adj.",
    "en_def": "not able to eat more; having no more space inside",
    "cn_def": "飽的；滿的"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting like sugar",
    "cn_def": "甜的"
  },
  "hungry": {
    "pos": "adj.",
    "en_def": "wanting to eat",
    "cn_def": "飢餓的"
  },
  "yummy": {
    "pos": "adj.",
    "en_def": "tasting very good",
    "cn_def": "好吃的"
  },
  "menu": {
    "pos": "n.",
    "en_def": "a list of the food and drinks in a restaurant",
    "cn_def": "菜單"
  },
  "meal": {
    "pos": "n.",
    "en_def": "the food you eat at one time, like breakfast or dinner",
    "cn_def": "一餐"
  },
  "snack": {
    "pos": "n.",
    "en_def": "a small amount of food you eat between meals",
    "cn_def": "點心"
  },
  "fruit": {
    "pos": "n.",
    "en_def": "sweet food that grows on trees or plants, like apples and bananas",
    "cn_def": "水果"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food like bread or cake in an oven",
    "cn_def": "烘烤"
  },
  "boil": {
    "pos": "v.",
    "en_def": "to heat water until it is very hot; to cook food in very hot water",
    "cn_def": "煮沸；水煮"
  },
  "order": {
    "pos": "v.",
    "en_def": "to ask for food or drinks in a restaurant",
    "cn_def": "點餐"
  },
  "burn": {
    "pos": "v.",
    "en_def": "to be on fire; to hurt or spoil something with fire or heat",
    "cn_def": "燒焦；燃燒"
  },
  "juice": {
    "pos": "n.",
    "en_def": "a drink made from fruit",
    "cn_def": "果汁"
  },
  "tea": {
    "pos": "n.",
    "en_def": "a hot drink made with dried leaves and hot water",
    "cn_def": "茶"
  },
  "food": {
    "pos": "n.",
    "en_def": "things that people and animals eat",
    "cn_def": "食物"
  },
  "pizza": {
    "pos": "n.",
    "en_def": "a flat round bread with cheese, tomato, and meat on top",
    "cn_def": "披薩"
  },
  "hamburger": {
    "pos": "n.",
    "en_def": "a round piece of cooked meat inside a bun",
    "cn_def": "漢堡"
  },
  "pie": {
    "pos": "n.",
    "en_def": "a baked food with fruit or meat inside",
    "cn_def": "派"
  },
  "salad": {
    "pos": "n.",
    "en_def": "a cold dish of vegetables like lettuce and tomatoes",
    "cn_def": "沙拉"
  },
  "fries": {
    "pos": "n.",
    "en_def": "long thin pieces of potato cooked in hot oil",
    "cn_def": "炸薯條"
  },
  "noodles": {
    "pos": "n.",
    "en_def": "long thin pieces of food made from flour",
    "cn_def": "麵條"
  },
  "beans": {
    "pos": "n.",
    "en_def": "a small seed that people eat as a vegetable",
    "cn_def": "豆子"
  },
  "grapes": {
    "pos": "n.",
    "en_def": "a small round green or purple fruit that grows in bunches",
    "cn_def": "葡萄"
  },
  "ice cream": {
    "pos": "n.",
    "en_def": "a sweet, cold food made from milk",
    "cn_def": "冰淇淋"
  },
  "hot dog": {
    "pos": "n.",
    "en_def": "a long sausage inside a long bun",
    "cn_def": "熱狗"
  },
  "soup": {
    "pos": "n.",
    "en_def": "a hot liquid food that you eat with a spoon",
    "cn_def": "湯"
  },
  "candy": {
    "pos": "n.",
    "en_def": "a small sweet food made with sugar",
    "cn_def": "糖果"
  },
  "popcorn": {
    "pos": "n.",
    "en_def": "a snack made from corn that people eat at the movies",
    "cn_def": "爆米花"
  },
  "toast": {
    "pos": "n.",
    "en_def": "a piece of bread heated until it is brown",
    "cn_def": "土司"
  },
  "milk": {
    "pos": "n.",
    "en_def": "a white drink that comes from cows",
    "cn_def": "牛奶"
  },
  "water": {
    "pos": "n.",
    "en_def": "the clear liquid that we drink; it falls as rain",
    "cn_def": "水"
  },
  "coke": {
    "pos": "n.",
    "en_def": "a sweet brown drink with bubbles",
    "cn_def": "可樂"
  },
  "salt": {
    "pos": "n.",
    "en_def": "a white powder that makes food taste salty",
    "cn_def": "鹽"
  },
  "ice": {
    "pos": "n.",
    "en_def": "water that is so cold it is hard",
    "cn_def": "冰"
  },
  "oil": {
    "pos": "n.",
    "en_def": "a thick liquid used for cooking",
    "cn_def": "油"
  },
  "butter": {
    "pos": "n.",
    "en_def": "a soft yellow food made from milk that you put on bread",
    "cn_def": "奶油"
  },
  "rice": {
    "pos": "n.",
    "en_def": "small white grains that people cook and eat",
    "cn_def": "米飯"
  },
  "coffee": {
    "pos": "n.",
    "en_def": "a hot brown drink that helps people wake up",
    "cn_def": "咖啡"
  },
  "meat": {
    "pos": "n.",
    "en_def": "food that comes from animals",
    "cn_def": "肉"
  },
  "bread": {
    "pos": "n.",
    "en_def": "a food made from flour and baked in an oven",
    "cn_def": "麵包"
  },
  "orange": {
    "pos": "n.",
    "en_def": "a round, sweet fruit with a thick orange skin",
    "cn_def": "柳橙"
  },
  "apple": {
    "pos": "n.",
    "en_def": "a round fruit that is red, green, or yellow",
    "cn_def": "蘋果"
  },
  "egg": {
    "pos": "n.",
    "en_def": "a round or oval food that comes from a hen",
    "cn_def": "蛋"
  },
  "lemons": {
    "pos": "n.",
    "en_def": "a yellow fruit that tastes sour",
    "cn_def": "檸檬"
  },
  "bananas": {
    "pos": "n.",
    "en_def": "a long yellow fruit",
    "cn_def": "香蕉"
  },
  "pears": {
    "pos": "n.",
    "en_def": "a sweet fruit that is round at the bottom and thin at the top",
    "cn_def": "梨子"
  },
  "papayas": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "木瓜"
  },
  "watermelons": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "西瓜"
  },
  "guavas": {
    "pos": "n.",
    "en_def": "a green fruit with many small seeds inside",
    "cn_def": "芭樂"
  },
  "strawberries": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "草莓"
  },
  "oranges": {
    "pos": "n.",
    "en_def": "a round, sweet fruit with a thick orange skin",
    "cn_def": "柳橙"
  },
  "papaya": {
    "pos": "n.",
    "en_def": "a long fruit that is orange inside, with small black seeds",
    "cn_def": "木瓜"
  },
  "lemon": {
    "pos": "n.",
    "en_def": "a yellow fruit that tastes sour",
    "cn_def": "檸檬"
  },
  "pear": {
    "pos": "n.",
    "en_def": "a sweet fruit that is round at the bottom and thin at the top",
    "cn_def": "梨子"
  },
  "peach": {
    "pos": "n.",
    "en_def": "a soft, sweet, pink and yellow fruit with one big seed",
    "cn_def": "桃子"
  },
  "peaches": {
    "pos": "n.",
    "en_def": "a soft, sweet, pink and yellow fruit with one big seed",
    "cn_def": "桃子"
  },
  "grape": {
    "pos": "n.",
    "en_def": "a small round green or purple fruit that grows in bunches",
    "cn_def": "葡萄"
  },
  "watermelon": {
    "pos": "n.",
    "en_def": "a big fruit that is green outside and red inside",
    "cn_def": "西瓜"
  },
  "pumpkins": {
    "pos": "n.",
    "en_def": "a big round orange vegetable",
    "cn_def": "南瓜"
  },
  "tomatoes": {
    "pos": "n.",
    "en_def": "a soft, round red fruit that people eat in salads",
    "cn_def": "番茄"
  },
  "fruits": {
    "pos": "n.",
    "en_def": "sweet food that grows on trees or plants, like apples and bananas",
    "cn_def": "水果"
  },
  "snacks": {
    "pos": "n.",
    "en_def": "a small amount of food you eat between meals",
    "cn_def": "點心"
  },
  "meals": {
    "pos": "n.",
    "en_def": "the food you eat at one time, like breakfast or dinner",
    "cn_def": "一餐"
  },
  "vegetables": {
    "pos": "n.",
    "en_def": "a plant that people eat, like carrots and cabbage",
    "cn_def": "蔬菜"
  },
  "pumpkin": {
    "pos": "n.",
    "en_def": "a big round orange vegetable",
    "cn_def": "南瓜"
  },
  "lettuce": {
    "pos": "n.",
    "en_def": "a vegetable with big green leaves, used in salads",
    "cn_def": "萵苣；生菜"
  },
  "cheese": {
    "pos": "n.",
    "en_def": "a yellow or white food made from milk",
    "cn_def": "起司；乳酪"
  },
  "ham": {
    "pos": "n.",
    "en_def": "salty meat from a pig's leg",
    "cn_def": "火腿"
  },
  "eggs": {
    "pos": "n.",
    "en_def": "a round or oval food that comes from a hen",
    "cn_def": "蛋"
  },
  "tomato": {
    "pos": "n.",
    "en_def": "a soft, round red fruit that people eat in salads",
    "cn_def": "番茄"
  },
  "bean": {
    "pos": "n.",
    "en_def": "a small seed that people eat as a vegetable",
    "cn_def": "豆子"
  },
  "pork": {
    "pos": "n.",
    "en_def": "meat from a pig",
    "cn_def": "豬肉"
  },
  "chicken": {
    "pos": "n.",
    "en_def": "meat from a bird that lives on farms",
    "cn_def": "雞肉"
  },
  "beef": {
    "pos": "n.",
    "en_def": "meat from a cow",
    "cn_def": "牛肉"
  },
  "fish": {
    "pos": "n.",
    "en_def": "an animal that lives in water; its meat",
    "cn_def": "魚；魚肉"
  },
  "steak": {
    "pos": "n.",
    "en_def": "a thick piece of meat, usually beef",
    "cn_def": "牛排"
  },
  "sugar": {
    "pos": "n.",
    "en_def": "something white or brown that makes food sweet",
    "cn_def": "糖"
  },
  "chocolate": {
    "pos": "n.",
    "en_def": "a sweet brown food or candy",
    "cn_def": "巧克力"
  },
  "cake": {
    "pos": "n.",
    "en_def": "a sweet food that you bake, often for birthdays",
    "cn_def": "蛋糕"
  },
  "drink": {
    "pos": "v.",
    "en_def": "to take water, milk, or juice into your mouth and body",
    "cn_def": "喝"
  },
  "eat": {
    "pos": "v.",
    "en_def": "to put food in your mouth and swallow it",
    "cn_def": "吃"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "buns": {
    "pos": "n.",
    "en_def": "a small round bread",
    "cn_def": "小圓麵包；包子"
  },
  "cookies": {
    "pos": "n.",
    "en_def": "a small, flat, sweet baked snack",
    "cn_def": "餅乾"
  },
  "dumplings": {
    "pos": "n.",
    "en_def": "a small piece of dough with meat or vegetables inside",
    "cn_def": "水餃；湯圓"
  },
  "pies": {
    "pos": "n.",
    "en_def": "a baked food with fruit or meat inside",
    "cn_def": "派"
  },
  "sandwiches": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "三明治"
  },
  "salads": {
    "pos": "n.",
    "en_def": "a cold dish of vegetables like lettuce and tomatoes",
    "cn_def": "沙拉"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "tasting very good",
    "cn_def": "美味的"
  },
  "hot": {
    "pos": "adj.",
    "en_def": "having a high temperature; not cold; also spicy",
    "cn_def": "熱的；燙的；辣的"
  },
  "drinks": {
    "pos": "v.",
    "en_def": "to take water, milk, or juice into your mouth and body",
    "cn_def": "喝"
  },
  "orders": {
    "pos": "v.",
    "en_def": "to ask for food or drinks in a restaurant",
    "cn_def": "點餐"
  },
  "boils": {
    "pos": "v.",
    "en_def": "to heat water until it is very hot; to cook food in very hot water",
    "cn_def": "煮沸；水煮"
  },
  "burns": {
    "pos": "v.",
    "en_def": "to be on fire; to hurt or spoil something with fire or heat",
    "cn_def": "燒焦；燃燒"
  },
  "breakfast": {
    "pos": "n.",
    "en_def": "the first meal of the day, eaten in the morning",
    "cn_def": "早餐"
  },
  "lunch": {
    "pos": "n.",
    "en_def": "the meal you eat in the middle of the day",
    "cn_def": "午餐"
  },
  "dinner": {
    "pos": "n.",
    "en_def": "the main meal of the day, usually eaten in the evening",
    "cn_def": "晚餐"
  },
  "barbecue": {
    "pos": "n.",
    "en_def": "a meal or party where food is cooked outside over a fire",
    "cn_def": "烤肉"
  },
  "bakes": {
    "pos": "v.",
    "en_def": "to cook food like bread or cake in an oven",
    "cn_def": "烘烤"
  },
  "sandwich": {
    "pos": "n.",
    "en_def": "two pieces of bread with meat, egg, or cheese between them",
    "cn_def": "三明治"
  },
  "eats": {
    "pos": "v.",
    "en_def": "to put food in your mouth and swallow it",
    "cn_def": "吃"
  }
};

const EXTRA_GLOSSES = {};
