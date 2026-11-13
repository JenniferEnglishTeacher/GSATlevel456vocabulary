// Unit 19 Quiz Data: Sizes & Measurements 尺寸與度量（第19區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U19 - Sizes & Measurements",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "height",
    "pos": "n.",
    "cn_def": "身高；高度",
    "en_def": "how tall or high something is",
    "sentence": "Q: What's your {{BLANK}}? — A: I'm 150 cm tall.",
    "cn": "你的身高是多少？ — 我身高一百五十公分。"
  },
  {
    "word": "centimeter (centimeters)",
    "pos": "n.",
    "cn_def": "公分",
    "en_def": "a small unit of length; 100 of them make one meter",
    "sentence": "Q: How tall is your brother? — A: He is 170 {{BLANK}} tall.",
    "cn": "你哥哥多高？ — 他一百七十公分高。"
  },
  {
    "word": "foot (feet)",
    "pos": "n.",
    "cn_def": "呎",
    "en_def": "a unit of length; it is 12 inches, or about 30 centimeters",
    "sentence": "Q: How long is the snake? — A: It's about six {{BLANK}} long.",
    "cn": "那條蛇多長？ — 牠大約六呎長。"
  },
  {
    "word": "inch (inches)",
    "pos": "n.",
    "cn_def": "英吋",
    "en_def": "a small unit of length; about 2.5 centimeters",
    "sentence": "Q: How long is your ruler? — A: It's twelve {{BLANK}} long. That's one foot.",
    "cn": "你的尺多長？ — 它十二英吋長，也就是一呎。"
  },
  {
    "word": "yard (yards)",
    "pos": "n.",
    "cn_def": "碼",
    "en_def": "a unit of length; it is 3 feet, or about 91 centimeters",
    "sentence": "Q: How far do you walk to the store? — A: I walk about 100 {{BLANK}}. It's very near.",
    "cn": "你走多遠到商店？ — 我走大約一百碼，很近。"
  },
  {
    "word": "mile (miles)",
    "pos": "n.",
    "cn_def": "英里；哩",
    "en_def": "a unit of length for long distances; about 1.6 kilometers",
    "sentence": "Q: How far does your uncle run every morning? — A: He runs three {{BLANK}}.",
    "cn": "你叔叔每天早上跑多遠？ — 他跑三英里。"
  },
  {
    "word": "far",
    "pos": "adj.",
    "cn_def": "遠的",
    "en_def": "not near; a long way away",
    "sentence": "Q: Does Ben live {{BLANK}} from school? — A: Yes, he does. He lives five miles from school, so he goes by bus.",
    "cn": "班住得離學校遠嗎？ — 是的，他住得遠。他住在離學校五英里的地方，所以他搭公車。"
  },
  {
    "word": "high",
    "pos": "adj.",
    "cn_def": "高的",
    "en_def": "a long way up from the ground",
    "sentence": "Q: How {{BLANK}} is Taipei 101? — A: It's about 1,670 feet.",
    "cn": "臺北101有多高？ — 它大約一千六百七十呎。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "going a long way down, like the sea",
    "sentence": "Q: How {{BLANK}} is the pool? — A: It's about five feet. Don't swim there alone.",
    "cn": "這座游泳池有多深？ — 大約五呎深，不要獨自在那裡游泳。"
  },
  {
    "word": "wide",
    "pos": "adj.",
    "cn_def": "寬的",
    "en_def": "big from one side to the other",
    "sentence": "Q: How {{BLANK}} is the road? — A: It's about twenty feet.",
    "cn": "這條路有多寬？ — 它大約二十呎寬。"
  },
  {
    "word": "gram (grams)",
    "pos": "n.",
    "cn_def": "公克",
    "en_def": "a very small unit of weight",
    "sentence": "Q: How much sugar do you need for the cake? — A: I need 200 {{BLANK}} of sugar.",
    "cn": "做蛋糕你需要多少糖？ — 我需要兩百公克的糖。"
  },
  {
    "word": "kilogram (kilograms)",
    "pos": "n.",
    "cn_def": "公斤",
    "en_def": "a unit of weight; it is 1,000 grams",
    "sentence": "Q: How much does your dog weigh? — A: It weighs ten {{BLANK}}.",
    "cn": "你的狗多重？ — 牠十公斤重。"
  },
  {
    "word": "pound (pounds)",
    "pos": "n.",
    "cn_def": "磅",
    "en_def": "a unit of weight; a little less than half a kilogram",
    "sentence": "Q: How much does the baby weigh? — A: She weighs seven {{BLANK}}.",
    "cn": "那個寶寶多重？ — 她七磅重。"
  },
  {
    "word": "shape",
    "pos": "n.",
    "cn_def": "形狀",
    "en_def": "the form of something, like a circle or a square",
    "sentence": "Q: What {{BLANK}} do you like? — A: I like stars and hearts.",
    "cn": "你喜歡什麼形狀？ — 我喜歡星形和心形。"
  },
  {
    "word": "round",
    "pos": "adj.",
    "cn_def": "圓形的",
    "en_def": "having the shape of a ball or a circle",
    "sentence": "Q: What shape is the moon tonight? — A: It's {{BLANK}} and bright.",
    "cn": "今晚的月亮是什麼形狀？ — 它又圓又亮。"
  },
  {
    "word": "circle",
    "pos": "n.",
    "cn_def": "圓圈",
    "en_def": "a round shape like the letter O",
    "sentence": "Q: What does the teacher draw on the blackboard? — A: She draws a big {{BLANK}}.",
    "cn": "老師在黑板上畫什麼？ — 她畫一個大圓圈。"
  },
  {
    "word": "square",
    "pos": "adj.",
    "cn_def": "正方形的",
    "en_def": "having four sides of the same length",
    "sentence": "Q: What shape is the gift box? — A: It's {{BLANK}}. It has four sides.",
    "cn": "那個禮物盒是什麼形狀？ — 它是正方形的，有四個邊。"
  },
  {
    "word": "angle (angles)",
    "pos": "n.",
    "cn_def": "角；邊角",
    "en_def": "the corner where two lines meet",
    "sentence": "Q: How many {{BLANK}} does a square have? — A: It has four.",
    "cn": "一個正方形有幾個角？ — 它有四個。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "線；行列",
    "en_def": "a long thin mark; people or things standing one behind another",
    "sentence": "Q: What do the students stand in at lunch time? — A: They stand in a {{BLANK}}.",
    "cn": "學生們午餐時間站成什麼？ — 他們排成一列（排隊）。"
  },
  {
    "word": "straight",
    "pos": "adj.",
    "cn_def": "直的",
    "en_def": "not bending or turning",
    "sentence": "Q: What does Amy draw with her ruler? — A: She draws a {{BLANK}} line.",
    "cn": "艾美用尺畫什麼？ — 她畫一條直線。"
  },
  {
    "word": "dot (dots)",
    "pos": "n.",
    "cn_def": "點",
    "en_def": "a very small round mark",
    "sentence": "Q: What do your new socks look like? — A: They're white with red {{BLANK}}.",
    "cn": "你的新襪子看起來怎麼樣？ — 它們是白色的，有紅色的點點。"
  },
  {
    "word": "point (points)",
    "pos": "n.",
    "cn_def": "分數；得分",
    "en_def": "a number you get in a game or on a test",
    "sentence": "Q: How many {{BLANK}} does your team get? — A: We get twenty-five. We win the game!",
    "cn": "你們隊得幾分？ — 我們得二十五分，我們贏了比賽！"
  },
  {
    "word": "row",
    "pos": "n.",
    "cn_def": "一排",
    "en_def": "a line of people or things side by side",
    "sentence": "Q: Where do you sit in class? — A: I sit in the first {{BLANK}}.",
    "cn": "你上課坐在哪裡？ — 我坐在第一排。"
  },
  {
    "word": "size",
    "pos": "n.",
    "cn_def": "尺寸",
    "en_def": "how big or small something is",
    "sentence": "Q: What {{BLANK}} do you wear? — A: I wear S. I'm not very tall.",
    "cn": "你穿什麼尺寸？ — 我穿 S 號，我不是很高。"
  },
  {
    "word": "medium",
    "pos": "adj.",
    "cn_def": "中等的",
    "en_def": "not big and not small; in the middle",
    "sentence": "Q: What size do you and your brother wear? — A: We wear {{BLANK}}.",
    "cn": "你和你弟弟穿什麼尺寸？ — 我們穿中號。"
  },
  {
    "word": "large",
    "pos": "adj.",
    "cn_def": "大的",
    "en_def": "big",
    "sentence": "Q: What size Coke does Tom want? — A: He wants a {{BLANK}} Coke.",
    "cn": "湯姆想要什麼尺寸的可樂？ — 他想要一杯大杯可樂。"
  },
  {
    "word": "bottle",
    "pos": "n.",
    "cn_def": "瓶子",
    "en_def": "a tall container made of glass or plastic for drinks",
    "sentence": "Q: How much water do you want? — A: I want a {{BLANK}} of water, please.",
    "cn": "你想要多少水？ — 我想要一瓶水，謝謝。"
  },
  {
    "word": "cup",
    "pos": "n.",
    "cn_def": "茶杯；一杯",
    "en_def": "a small container for drinking; the amount in it",
    "sentence": "Q: What does Grandpa drink every morning? — A: He drinks a {{BLANK}} of hot tea.",
    "cn": "爺爺每天早上喝什麼？ — 他喝一杯熱茶。"
  },
  {
    "word": "glass (glasses)",
    "pos": "n.",
    "cn_def": "玻璃杯；一杯",
    "en_def": "a container made of glass for drinks; the amount in it",
    "sentence": "Q: How much milk does Amy drink every day? — A: She drinks two {{BLANK}} of milk.",
    "cn": "艾美每天喝多少牛奶？ — 她喝兩杯牛奶。"
  },
  {
    "word": "piece",
    "pos": "n.",
    "cn_def": "片；塊",
    "en_def": "one part of something",
    "sentence": "Q: How much cake do you want? — A: I want a {{BLANK}} of cake.",
    "cn": "你想要多少蛋糕？ — 我想要一塊蛋糕。"
  },
  {
    "word": "pack",
    "pos": "n.",
    "cn_def": "包",
    "en_def": "a small box or bag with many of the same things inside",
    "sentence": "Q: What do the kids buy at the store? — A: They buy a {{BLANK}} of cookies.",
    "cn": "孩子們在商店買什麼？ — 他們買一包餅乾。"
  },
  {
    "word": "package",
    "pos": "n.",
    "cn_def": "包裹",
    "en_def": "a box or bag that is sent by mail",
    "sentence": "Q: What does Mom get from Grandma today? — A: She gets a big {{BLANK}}. There are cookies in it.",
    "cn": "媽媽今天收到奶奶寄來的什麼？ — 她收到一個大包裹，裡面有餅乾。"
  },
  {
    "word": "pair",
    "pos": "n.",
    "cn_def": "一雙；一對",
    "en_def": "two things of the same kind that are used together, like shoes",
    "sentence": "Q: What does Ben need for PE class? — A: He needs a new {{BLANK}} of shoes.",
    "cn": "班上體育課需要什麼？ — 他需要一雙新鞋子。"
  },
  {
    "word": "dozen",
    "pos": "n.",
    "cn_def": "（一）打",
    "en_def": "a group of twelve",
    "sentence": "Q: How many eggs do we need for the cake? — A: We need a {{BLANK}} eggs.",
    "cn": "做蛋糕我們需要幾顆蛋？ — 我們需要一打蛋。"
  },
  {
    "word": "kilo (kilos)",
    "pos": "n.",
    "cn_def": "公斤（簡稱）",
    "en_def": "a short word for kilogram",
    "sentence": "Q: How much rice do your parents buy? — A: They buy two {{BLANK}} of rice.",
    "cn": "你爸媽買多少米？ — 他們買兩公斤的米。"
  },
  {
    "word": "big (bigger)",
    "pos": "adj.",
    "cn_def": "大的",
    "en_def": "large; not small",
    "sentence": "Q: Is an elephant small? — A: No, it isn't. It's much {{BLANK}} than a horse.",
    "cn": "大象很小嗎？ — 不，牠不小。牠比馬大得多。"
  },
  {
    "word": "small (smaller)",
    "pos": "adj.",
    "cn_def": "小的",
    "en_def": "not big; little",
    "sentence": "Q: Is a mouse big? — A: No, it isn't. It's {{BLANK}} than a cat.",
    "cn": "老鼠很大嗎？ — 不，牠不大。牠比貓小。"
  },
  {
    "word": "little",
    "pos": "adj.",
    "cn_def": "小的",
    "en_def": "small",
    "sentence": "Q: Do you have a big dog? — A: No, I don't. I have a {{BLANK}} dog. It's very cute.",
    "cn": "你有一隻大狗嗎？ — 不，我沒有。我有一隻小狗，牠很可愛。"
  },
  {
    "word": "long (longer)",
    "pos": "adj.",
    "cn_def": "長的",
    "en_def": "going far from one end to the other; not short",
    "sentence": "Q: Does Amy have short hair? — A: No, she doesn't. Her hair is {{BLANK}} than mine.",
    "cn": "艾美是短頭髮嗎？ — 不，她不是。她的頭髮比我的長。"
  },
  {
    "word": "short (shorter)",
    "pos": "adj.",
    "cn_def": "短的",
    "en_def": "not long",
    "sentence": "Q: Is your pencil long? — A: No, it isn't. It's {{BLANK}} than my pen.",
    "cn": "你的鉛筆很長嗎？ — 不，它不長。它比我的原子筆短。"
  },
  {
    "word": "low (lower)",
    "pos": "adj.",
    "cn_def": "低的",
    "en_def": "not high; near the ground",
    "sentence": "Q: Is this chair high? — A: No, it isn't. It's {{BLANK}} than that table.",
    "cn": "這張椅子很高嗎？ — 不，它不高。它比那張桌子低。"
  },
  {
    "word": "light (lighter)",
    "pos": "adj.",
    "cn_def": "輕的",
    "en_def": "not heavy; easy to carry",
    "sentence": "Q: Is your schoolbag heavy? — A: No, it isn't. It's {{BLANK}} than Ben's bag.",
    "cn": "你的書包很重嗎？ — 不，它不重。它比班的書包輕。"
  }
];

const MCQS = [
  {
    "q": "What is your ______? I am 160 centimeters tall.",
    "options": [
      "size",
      "shape",
      "height",
      "row"
    ],
    "answer": 2,
    "cn": "你的身高是多少？ — 我身高一百五十公分。",
    "vocabIndex": 0
  },
  {
    "q": "My brother is 175 ______ tall. He is the tallest boy in his class.",
    "options": [
      "grams",
      "kilograms",
      "pounds",
      "centimeters"
    ],
    "answer": 3,
    "cn": "你哥哥多高？ — 他一百七十公分高。",
    "vocabIndex": 1
  },
  {
    "q": "The basketball player is seven ______ tall. That is about 213 centimeters!",
    "options": [
      "feet",
      "miles",
      "grams",
      "pounds"
    ],
    "answer": 0,
    "cn": "那條蛇多長？ — 牠大約六呎長。",
    "vocabIndex": 2
  },
  {
    "q": "There are twelve ______ in a foot. One of them is about two and a half centimeters.",
    "options": [
      "miles",
      "inches",
      "yards",
      "pounds"
    ],
    "answer": 1,
    "cn": "你的尺多長？ — 它十二英吋長，也就是一呎。",
    "vocabIndex": 3
  },
  {
    "q": "In American football, the field is one hundred ______ long. Each one is three feet.",
    "options": [
      "yards",
      "miles",
      "grams",
      "pounds"
    ],
    "answer": 0,
    "cn": "你走多遠到商店？ — 我走大約一百碼，很近。",
    "vocabIndex": 4
  },
  {
    "q": "It is about 250 ______ from Taipei to Kaohsiung. Americans use this instead of kilometers.",
    "options": [
      "inches",
      "miles",
      "grams",
      "pounds"
    ],
    "answer": 1,
    "cn": "你叔叔每天早上跑多遠？ — 他跑三英里。",
    "vocabIndex": 5
  },
  {
    "q": "The station is too ______ to walk to. It is ten kilometers away, so let's take a bus.",
    "options": [
      "high",
      "deep",
      "wide",
      "far"
    ],
    "answer": 3,
    "cn": "班住得離學校遠嗎？ — 是的，他住得遠。他住在離學校五英里的地方，所以他搭公車。",
    "vocabIndex": 6
  },
  {
    "q": "Mt. Jade is very ______. It is almost 4,000 meters above the sea.",
    "options": [
      "deep",
      "wide",
      "high",
      "round"
    ],
    "answer": 2,
    "cn": "臺北101有多高？ — 它大約一千六百七十呎。",
    "vocabIndex": 7
  },
  {
    "q": "Don't swim in that part of the lake. The water there is very ______, and your feet can't touch the bottom.",
    "options": [
      "deep",
      "high",
      "wide",
      "round"
    ],
    "answer": 0,
    "cn": "這座游泳池有多深？ — 大約五呎深，不要獨自在那裡游泳。",
    "vocabIndex": 8
  },
  {
    "q": "The river is fifty meters ______. We need a boat to get to the other side.",
    "options": [
      "high",
      "wide",
      "round",
      "straight"
    ],
    "answer": 1,
    "cn": "這條路有多寬？ — 它大約二十呎寬。",
    "vocabIndex": 9
  },
  {
    "q": "I need 200 ______ of sugar to make this cake. That is not very heavy.",
    "options": [
      "miles",
      "inches",
      "yards",
      "grams"
    ],
    "answer": 3,
    "cn": "做蛋糕你需要多少糖？ — 我需要兩百公克的糖。",
    "vocabIndex": 10
  },
  {
    "q": "I weigh fifty ______. My little sister is lighter, so she weighs only thirty.",
    "options": [
      "centimeters",
      "miles",
      "kilograms",
      "inches"
    ],
    "answer": 2,
    "cn": "你的狗多重？ — 牠十公斤重。",
    "vocabIndex": 11
  },
  {
    "q": "In America, people buy meat in ______. One of them is a little less than half a kilogram.",
    "options": [
      "inches",
      "miles",
      "yards",
      "pounds"
    ],
    "answer": 3,
    "cn": "那個寶寶多重？ — 她七磅重。",
    "vocabIndex": 12
  },
  {
    "q": "What ______ is the moon tonight? It is round like a ball.",
    "options": [
      "shape",
      "size",
      "height",
      "row"
    ],
    "answer": 0,
    "cn": "你喜歡什麼形狀？ — 我喜歡星形和心形。",
    "vocabIndex": 13
  },
  {
    "q": "A ball is ______. The sun, the moon, and oranges have this shape, too.",
    "options": [
      "square",
      "round",
      "straight",
      "wide"
    ],
    "answer": 1,
    "cn": "今晚的月亮是什麼形狀？ — 它又圓又亮。",
    "vocabIndex": 14
  },
  {
    "q": "The teacher asked us to sit in a ______ on the floor. Then everyone could see each other.",
    "options": [
      "dot",
      "point",
      "circle",
      "angle"
    ],
    "answer": 2,
    "cn": "老師在黑板上畫什麼？ — 她畫一個大圓圈。",
    "vocabIndex": 15
  },
  {
    "q": "A ______ box has four sides of the same length. This one is ten centimeters on each side.",
    "options": [
      "round",
      "square",
      "straight",
      "deep"
    ],
    "answer": 1,
    "cn": "那個禮物盒是什麼形狀？ — 它是正方形的，有四個邊。",
    "vocabIndex": 16
  },
  {
    "q": "A triangle has three sides and three ______. A square has four of each.",
    "options": [
      "angles",
      "rows",
      "pairs",
      "bottles"
    ],
    "answer": 0,
    "cn": "一個正方形有幾個角？ — 它有四個。",
    "vocabIndex": 17
  },
  {
    "q": "Please stand in ______ and wait for the bus. Don't push the people in front of you.",
    "options": [
      "shape",
      "size",
      "line",
      "dot"
    ],
    "answer": 2,
    "cn": "學生們午餐時間站成什麼？ — 他們排成一列（排隊）。",
    "vocabIndex": 18
  },
  {
    "q": "Go ______ down this road for two blocks. Don't turn left or right.",
    "options": [
      "round",
      "wide",
      "deep",
      "straight"
    ],
    "answer": 3,
    "cn": "艾美用尺畫什麼？ — 她畫一條直線。",
    "vocabIndex": 19
  },
  {
    "q": "Her dress is white with small red ______. They look like little round candies.",
    "options": [
      "dots",
      "rows",
      "angles",
      "sizes"
    ],
    "answer": 0,
    "cn": "你的新襪子看起來怎麼樣？ — 它們是白色的，有紅色的點點。",
    "vocabIndex": 20
  },
  {
    "q": "Our team got ninety ______ in the basketball game, so we won.",
    "options": [
      "dots",
      "rows",
      "points",
      "lines"
    ],
    "answer": 2,
    "cn": "你們隊得幾分？ — 我們得二十五分，我們贏了比賽！",
    "vocabIndex": 21
  },
  {
    "q": "We sat in the front ______ at the theater. We were so close that we could see the actors' faces.",
    "options": [
      "dot",
      "size",
      "shape",
      "row"
    ],
    "answer": 3,
    "cn": "你上課坐在哪裡？ — 我坐在第一排。",
    "vocabIndex": 22
  },
  {
    "q": "These shoes are too small. Do you have them in a bigger ______?",
    "options": [
      "shape",
      "size",
      "height",
      "row"
    ],
    "answer": 1,
    "cn": "你穿什麼尺寸？ — 我穿 S 號，我不是很高。",
    "vocabIndex": 23
  },
  {
    "q": "I don't want a small or a large Coke. I'd like a ______ one, please.",
    "options": [
      "medium",
      "round",
      "straight",
      "deep"
    ],
    "answer": 0,
    "cn": "你和你弟弟穿什麼尺寸？ — 我們穿中號。",
    "vocabIndex": 24
  },
  {
    "q": "We are very hungry. Let's order a ______ pizza, not a small one.",
    "options": [
      "low",
      "light",
      "short",
      "large"
    ],
    "answer": 3,
    "cn": "湯姆想要什麼尺寸的可樂？ — 他想要一杯大杯可樂。",
    "vocabIndex": 25
  },
  {
    "q": "I bought a ______ of water at the convenience store. I drank it all after the game.",
    "options": [
      "pair",
      "dozen",
      "bottle",
      "row"
    ],
    "answer": 2,
    "cn": "你想要多少水？ — 我想要一瓶水，謝謝。",
    "vocabIndex": 26
  },
  {
    "q": "Would you like a ______ of coffee? I just made a fresh pot.",
    "options": [
      "pair",
      "cup",
      "piece",
      "dozen"
    ],
    "answer": 1,
    "cn": "爺爺每天早上喝什麼？ — 他喝一杯熱茶。",
    "vocabIndex": 27
  },
  {
    "q": "I drink eight ______ of water every day. The doctor says it is good for me.",
    "options": [
      "glasses",
      "pairs",
      "pieces",
      "rows"
    ],
    "answer": 0,
    "cn": "艾美每天喝多少牛奶？ — 她喝兩杯牛奶。",
    "vocabIndex": 28
  },
  {
    "q": "Would you like a ______ of cake? I cut it into eight.",
    "options": [
      "pair",
      "dozen",
      "piece",
      "bottle"
    ],
    "answer": 2,
    "cn": "你想要多少蛋糕？ — 我想要一塊蛋糕。",
    "vocabIndex": 29
  },
  {
    "q": "We need a ______ of cards to play this game. There are fifty-two in it.",
    "options": [
      "pair",
      "bottle",
      "piece",
      "pack"
    ],
    "answer": 3,
    "cn": "孩子們在商店買什麼？ — 他們買一包餅乾。",
    "vocabIndex": 30
  },
  {
    "q": "The mailman brought a big ______ for you. It is a box from Grandma, and it is very heavy.",
    "options": [
      "pair",
      "package",
      "dozen",
      "row"
    ],
    "answer": 1,
    "cn": "媽媽今天收到奶奶寄來的什麼？ — 她收到一個大包裹，裡面有餅乾。",
    "vocabIndex": 31
  },
  {
    "q": "I bought a new ______ of shoes yesterday. The left one fits, but the right one is a little small.",
    "options": [
      "piece",
      "bottle",
      "pair",
      "cup"
    ],
    "answer": 2,
    "cn": "班上體育課需要什麼？ — 他需要一雙新鞋子。",
    "vocabIndex": 32
  },
  {
    "q": "I bought a ______ eggs at the supermarket. We ate two this morning, so there are ten left.",
    "options": [
      "dozen",
      "piece",
      "bottle",
      "pack"
    ],
    "answer": 0,
    "cn": "做蛋糕我們需要幾顆蛋？ — 我們需要一打蛋。",
    "vocabIndex": 33
  },
  {
    "q": "Mom bought two ______ of pork at the market. It was heavy to carry home.",
    "options": [
      "pairs",
      "rows",
      "dots",
      "kilos"
    ],
    "answer": 3,
    "cn": "你爸媽買多少米？ — 他們買兩公斤的米。",
    "vocabIndex": 34
  },
  {
    "q": "An elephant is much ______ than a mouse. It is the largest animal on land.",
    "options": [
      "smaller",
      "bigger",
      "shorter",
      "lighter"
    ],
    "answer": 1,
    "cn": "大象很小嗎？ — 不，牠不小。牠比馬大得多。",
    "vocabIndex": 35
  },
  {
    "q": "A cat is ______ than a tiger. You can hold it in your arms.",
    "options": [
      "bigger",
      "longer",
      "smaller",
      "lower"
    ],
    "answer": 2,
    "cn": "老鼠很大嗎？ — 不，牠不大。牠比貓小。",
    "vocabIndex": 36
  },
  {
    "q": "Look at that ______ baby bird! It is so small that it can sit in my hand.",
    "options": [
      "large",
      "little",
      "long",
      "deep"
    ],
    "answer": 1,
    "cn": "你有一隻大狗嗎？ — 不，我沒有。我有一隻小狗，牠很可愛。",
    "vocabIndex": 37
  },
  {
    "q": "A snake is much ______ than a worm. Some are five meters from head to tail.",
    "options": [
      "shorter",
      "lighter",
      "smaller",
      "longer"
    ],
    "answer": 3,
    "cn": "艾美是短頭髮嗎？ — 不，她不是。她的頭髮比我的長。",
    "vocabIndex": 38
  },
  {
    "q": "My hair is ______ than yours. Mine only reaches my ears, but yours reaches your shoulders.",
    "options": [
      "shorter",
      "longer",
      "bigger",
      "lower"
    ],
    "answer": 0,
    "cn": "你的鉛筆很長嗎？ — 不，它不長。它比我的原子筆短。",
    "vocabIndex": 39
  },
  {
    "q": "This table is ______ than that one. It is only forty centimeters high.",
    "options": [
      "longer",
      "lower",
      "lighter",
      "bigger"
    ],
    "answer": 1,
    "cn": "這張椅子很高嗎？ — 不，它不高。它比那張桌子低。",
    "vocabIndex": 40
  },
  {
    "q": "This bag is ______ than that one. It has only one book in it, so it is easy to carry.",
    "options": [
      "longer",
      "lower",
      "shorter",
      "lighter"
    ],
    "answer": 3,
    "cn": "你的書包很重嗎？ — 不，它不重。它比班的書包輕。",
    "vocabIndex": 41
  }
];

const LOOKUP = {
  "size": {
    "pos": "n.",
    "en_def": "how big or small something is",
    "cn_def": "尺寸"
  },
  "shape": {
    "pos": "n.",
    "en_def": "the form of something, like a circle or a square",
    "cn_def": "形狀"
  },
  "height": {
    "pos": "n.",
    "en_def": "how tall or high something is",
    "cn_def": "身高；高度"
  },
  "row": {
    "pos": "n.",
    "en_def": "a line of people or things side by side",
    "cn_def": "一排"
  },
  "grams": {
    "pos": "n.",
    "en_def": "a very small unit of weight",
    "cn_def": "公克"
  },
  "kilograms": {
    "pos": "n.",
    "en_def": "a unit of weight; it is 1,000 grams",
    "cn_def": "公斤"
  },
  "pounds": {
    "pos": "n.",
    "en_def": "a unit of weight; a little less than half a kilogram",
    "cn_def": "磅"
  },
  "centimeters": {
    "pos": "n.",
    "en_def": "a small unit of length; 100 of them make one meter",
    "cn_def": "公分"
  },
  "feet": {
    "pos": "n.",
    "en_def": "the part at the end of your leg that you stand on",
    "cn_def": "腳"
  },
  "miles": {
    "pos": "n.",
    "en_def": "a unit of length for long distances; about 1.6 kilometers",
    "cn_def": "英里；哩"
  },
  "inches": {
    "pos": "n.",
    "en_def": "a small unit of length; about 2.5 centimeters",
    "cn_def": "英吋"
  },
  "yards": {
    "pos": "n.",
    "en_def": "a unit of length; it is 3 feet, or about 91 centimeters",
    "cn_def": "碼"
  },
  "high": {
    "pos": "adj.",
    "en_def": "a long way up from the ground",
    "cn_def": "高的"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "going a long way down, like the sea",
    "cn_def": "深的"
  },
  "wide": {
    "pos": "adj.",
    "en_def": "big from one side to the other",
    "cn_def": "寬的"
  },
  "far": {
    "pos": "adj.",
    "en_def": "not near; a long way away",
    "cn_def": "遠的"
  },
  "round": {
    "pos": "adj.",
    "en_def": "having the shape of a ball or a circle",
    "cn_def": "圓形的"
  },
  "straight": {
    "pos": "adj.",
    "en_def": "not bending or turning",
    "cn_def": "直的"
  },
  "square": {
    "pos": "adj.",
    "en_def": "having four sides of the same length",
    "cn_def": "正方形的"
  },
  "dot": {
    "pos": "n.",
    "en_def": "a very small round mark",
    "cn_def": "點"
  },
  "point": {
    "pos": "n.",
    "en_def": "a number you get in a game or on a test",
    "cn_def": "分數；得分"
  },
  "circle": {
    "pos": "n.",
    "en_def": "a round shape like the letter O",
    "cn_def": "圓圈"
  },
  "angle": {
    "pos": "n.",
    "en_def": "the corner where two lines meet",
    "cn_def": "角；邊角"
  },
  "angles": {
    "pos": "n.",
    "en_def": "the corner where two lines meet",
    "cn_def": "角；邊角"
  },
  "rows": {
    "pos": "n.",
    "en_def": "a line of people or things side by side",
    "cn_def": "一排"
  },
  "pairs": {
    "pos": "n.",
    "en_def": "two things of the same kind that are used together, like shoes",
    "cn_def": "一雙；一對"
  },
  "bottles": {
    "pos": "n.",
    "en_def": "a tall container made of glass or plastic for drinks",
    "cn_def": "瓶子"
  },
  "line": {
    "pos": "n.",
    "en_def": "a long thin mark; people or things standing one behind another",
    "cn_def": "線；行列"
  },
  "dots": {
    "pos": "n.",
    "en_def": "a very small round mark",
    "cn_def": "點"
  },
  "sizes": {
    "pos": "n.",
    "en_def": "how big or small something is",
    "cn_def": "尺寸"
  },
  "points": {
    "pos": "n.",
    "en_def": "a number you get in a game or on a test",
    "cn_def": "分數；得分"
  },
  "lines": {
    "pos": "n.",
    "en_def": "a long thin mark; people or things standing one behind another",
    "cn_def": "線；行列"
  },
  "medium": {
    "pos": "adj.",
    "en_def": "not big and not small; in the middle",
    "cn_def": "中等的"
  },
  "low": {
    "pos": "adj.",
    "en_def": "not high; near the ground",
    "cn_def": "低的"
  },
  "light": {
    "pos": "n.",
    "en_def": "a thing that makes a room bright",
    "cn_def": "燈；燈光"
  },
  "short": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "large": {
    "pos": "adj.",
    "en_def": "big",
    "cn_def": "大的"
  },
  "pair": {
    "pos": "n.",
    "en_def": "two things of the same kind that are used together, like shoes",
    "cn_def": "一雙；一對"
  },
  "dozen": {
    "pos": "n.",
    "en_def": "a group of twelve",
    "cn_def": "（一）打"
  },
  "bottle": {
    "pos": "n.",
    "en_def": "a tall container made of glass or plastic for drinks",
    "cn_def": "瓶子"
  },
  "cup": {
    "pos": "n.",
    "en_def": "a small container with a handle, used for drinking",
    "cn_def": "茶杯；杯子"
  },
  "piece": {
    "pos": "n.",
    "en_def": "one part of something",
    "cn_def": "片；塊"
  },
  "glasses": {
    "pos": "n.",
    "en_def": "two pieces of glass you wear in front of your eyes to see better",
    "cn_def": "眼鏡"
  },
  "pieces": {
    "pos": "n.",
    "en_def": "one part of something",
    "cn_def": "片；塊"
  },
  "pack": {
    "pos": "n.",
    "en_def": "a small box or bag with many of the same things inside",
    "cn_def": "包"
  },
  "package": {
    "pos": "n.",
    "en_def": "a box or bag that is sent by mail",
    "cn_def": "包裹"
  },
  "kilos": {
    "pos": "n.",
    "en_def": "a short word for kilogram",
    "cn_def": "公斤（簡稱）"
  },
  "smaller": {
    "pos": "adj.",
    "en_def": "not big; little",
    "cn_def": "小的"
  },
  "bigger": {
    "pos": "adj.",
    "en_def": "large; not small",
    "cn_def": "大的"
  },
  "shorter": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "lighter": {
    "pos": "adj.",
    "en_def": "not heavy; easy to carry",
    "cn_def": "輕的"
  },
  "longer": {
    "pos": "adj.",
    "en_def": "going far from one end to the other; not short",
    "cn_def": "長的"
  },
  "lower": {
    "pos": "adj.",
    "en_def": "not high; near the ground",
    "cn_def": "低的"
  },
  "little": {
    "pos": "adj.",
    "en_def": "not much",
    "cn_def": "很少的（不可數）"
  },
  "long": {
    "pos": "adj.",
    "en_def": "going far from one end to the other; not short",
    "cn_def": "長的"
  }
};

const EXTRA_GLOSSES = {};
