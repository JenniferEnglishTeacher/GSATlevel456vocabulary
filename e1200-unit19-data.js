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
    "en_def": "",
    "sentence": "Q: What's your {{BLANK}}? — A: I'm 150 cm tall.",
    "cn": "你的身高是多少？ — 我身高一百五十公分。"
  },
  {
    "word": "centimeter (centimeters)",
    "pos": "n.",
    "cn_def": "公分",
    "en_def": "",
    "sentence": "Q: How tall is your brother? — A: He is 170 {{BLANK}} tall.",
    "cn": "你哥哥多高？ — 他一百七十公分高。"
  },
  {
    "word": "foot (feet)",
    "pos": "n.",
    "cn_def": "呎",
    "en_def": "",
    "sentence": "Q: How long is the snake? — A: It's about six {{BLANK}} long.",
    "cn": "那條蛇多長？ — 牠大約六呎長。"
  },
  {
    "word": "inch (inches)",
    "pos": "n.",
    "cn_def": "英吋",
    "en_def": "",
    "sentence": "Q: How long is your ruler? — A: It's twelve {{BLANK}} long. That's one foot.",
    "cn": "你的尺多長？ — 它十二英吋長，也就是一呎。"
  },
  {
    "word": "yard (yards)",
    "pos": "n.",
    "cn_def": "碼",
    "en_def": "",
    "sentence": "Q: How far do you walk to the store? — A: I walk about 100 {{BLANK}}. It's very near.",
    "cn": "你走多遠到商店？ — 我走大約一百碼，很近。"
  },
  {
    "word": "mile (miles)",
    "pos": "n.",
    "cn_def": "英里；哩",
    "en_def": "",
    "sentence": "Q: How far does your uncle run every morning? — A: He runs three {{BLANK}}.",
    "cn": "你叔叔每天早上跑多遠？ — 他跑三英里。"
  },
  {
    "word": "far",
    "pos": "adj.",
    "cn_def": "遠的",
    "en_def": "",
    "sentence": "Q: Does Ben live {{BLANK}} from school? — A: Yes, he does. He lives five miles from school, so he goes by bus.",
    "cn": "班住得離學校遠嗎？ — 是的，他住得遠。他住在離學校五英里的地方，所以他搭公車。"
  },
  {
    "word": "high",
    "pos": "adj.",
    "cn_def": "高的",
    "en_def": "",
    "sentence": "Q: How {{BLANK}} is Taipei 101? — A: It's about 1,670 feet.",
    "cn": "臺北101有多高？ — 它大約一千六百七十呎。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "",
    "sentence": "Q: How {{BLANK}} is the pool? — A: It's about five feet. Don't swim there alone.",
    "cn": "這座游泳池有多深？ — 大約五呎深，不要獨自在那裡游泳。"
  },
  {
    "word": "wide",
    "pos": "adj.",
    "cn_def": "寬的",
    "en_def": "",
    "sentence": "Q: How {{BLANK}} is the road? — A: It's about twenty feet.",
    "cn": "這條路有多寬？ — 它大約二十呎寬。"
  },
  {
    "word": "gram (grams)",
    "pos": "n.",
    "cn_def": "公克",
    "en_def": "",
    "sentence": "Q: How much sugar do you need for the cake? — A: I need 200 {{BLANK}} of sugar.",
    "cn": "做蛋糕你需要多少糖？ — 我需要兩百公克的糖。"
  },
  {
    "word": "kilogram (kilograms)",
    "pos": "n.",
    "cn_def": "公斤",
    "en_def": "",
    "sentence": "Q: How much does your dog weigh? — A: It weighs ten {{BLANK}}.",
    "cn": "你的狗多重？ — 牠十公斤重。"
  },
  {
    "word": "pound (pounds)",
    "pos": "n.",
    "cn_def": "磅",
    "en_def": "",
    "sentence": "Q: How much does the baby weigh? — A: She weighs seven {{BLANK}}.",
    "cn": "那個寶寶多重？ — 她七磅重。"
  },
  {
    "word": "shape",
    "pos": "n.",
    "cn_def": "形狀",
    "en_def": "",
    "sentence": "Q: What {{BLANK}} do you like? — A: I like stars and hearts.",
    "cn": "你喜歡什麼形狀？ — 我喜歡星形和心形。"
  },
  {
    "word": "round",
    "pos": "adj.",
    "cn_def": "圓形的",
    "en_def": "",
    "sentence": "Q: What shape is the moon tonight? — A: It's {{BLANK}} and bright.",
    "cn": "今晚的月亮是什麼形狀？ — 它又圓又亮。"
  },
  {
    "word": "circle",
    "pos": "n.",
    "cn_def": "圓圈",
    "en_def": "",
    "sentence": "Q: What does the teacher draw on the blackboard? — A: She draws a big {{BLANK}}.",
    "cn": "老師在黑板上畫什麼？ — 她畫一個大圓圈。"
  },
  {
    "word": "square",
    "pos": "adj.",
    "cn_def": "正方形的",
    "en_def": "",
    "sentence": "Q: What shape is the gift box? — A: It's {{BLANK}}. It has four sides.",
    "cn": "那個禮物盒是什麼形狀？ — 它是正方形的，有四個邊。"
  },
  {
    "word": "angle (angles)",
    "pos": "n.",
    "cn_def": "角；邊角",
    "en_def": "",
    "sentence": "Q: How many {{BLANK}} does a square have? — A: It has four.",
    "cn": "一個正方形有幾個角？ — 它有四個。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "線；行列",
    "en_def": "",
    "sentence": "Q: What do the students stand in at lunch time? — A: They stand in a {{BLANK}}.",
    "cn": "學生們午餐時間站成什麼？ — 他們排成一列（排隊）。"
  },
  {
    "word": "straight",
    "pos": "adj.",
    "cn_def": "直的",
    "en_def": "",
    "sentence": "Q: What does Amy draw with her ruler? — A: She draws a {{BLANK}} line.",
    "cn": "艾美用尺畫什麼？ — 她畫一條直線。"
  },
  {
    "word": "dot (dots)",
    "pos": "n.",
    "cn_def": "點",
    "en_def": "",
    "sentence": "Q: What do your new socks look like? — A: They're white with red {{BLANK}}.",
    "cn": "你的新襪子看起來怎麼樣？ — 它們是白色的，有紅色的點點。"
  },
  {
    "word": "point (points)",
    "pos": "n.",
    "cn_def": "分數；得分",
    "en_def": "",
    "sentence": "Q: How many {{BLANK}} does your team get? — A: We get twenty-five. We win the game!",
    "cn": "你們隊得幾分？ — 我們得二十五分，我們贏了比賽！"
  },
  {
    "word": "row",
    "pos": "n.",
    "cn_def": "一排",
    "en_def": "",
    "sentence": "Q: Where do you sit in class? — A: I sit in the first {{BLANK}}.",
    "cn": "你上課坐在哪裡？ — 我坐在第一排。"
  },
  {
    "word": "size",
    "pos": "n.",
    "cn_def": "尺寸",
    "en_def": "",
    "sentence": "Q: What {{BLANK}} do you wear? — A: I wear S. I'm not very tall.",
    "cn": "你穿什麼尺寸？ — 我穿 S 號，我不是很高。"
  },
  {
    "word": "medium",
    "pos": "adj.",
    "cn_def": "中等的",
    "en_def": "",
    "sentence": "Q: What size do you and your brother wear? — A: We wear {{BLANK}}.",
    "cn": "你和你弟弟穿什麼尺寸？ — 我們穿中號。"
  },
  {
    "word": "large",
    "pos": "adj.",
    "cn_def": "大的",
    "en_def": "",
    "sentence": "Q: What size Coke does Tom want? — A: He wants a {{BLANK}} Coke.",
    "cn": "湯姆想要什麼尺寸的可樂？ — 他想要一杯大杯可樂。"
  },
  {
    "word": "bottle",
    "pos": "n.",
    "cn_def": "瓶子",
    "en_def": "",
    "sentence": "Q: How much water do you want? — A: I want a {{BLANK}} of water, please.",
    "cn": "你想要多少水？ — 我想要一瓶水，謝謝。"
  },
  {
    "word": "cup",
    "pos": "n.",
    "cn_def": "茶杯；一杯",
    "en_def": "",
    "sentence": "Q: What does Grandpa drink every morning? — A: He drinks a {{BLANK}} of hot tea.",
    "cn": "爺爺每天早上喝什麼？ — 他喝一杯熱茶。"
  },
  {
    "word": "glass (glasses)",
    "pos": "n.",
    "cn_def": "玻璃杯；一杯",
    "en_def": "",
    "sentence": "Q: How much milk does Amy drink every day? — A: She drinks two {{BLANK}} of milk.",
    "cn": "艾美每天喝多少牛奶？ — 她喝兩杯牛奶。"
  },
  {
    "word": "piece",
    "pos": "n.",
    "cn_def": "片；塊",
    "en_def": "",
    "sentence": "Q: How much cake do you want? — A: I want a {{BLANK}} of cake.",
    "cn": "你想要多少蛋糕？ — 我想要一塊蛋糕。"
  },
  {
    "word": "pack",
    "pos": "n.",
    "cn_def": "包",
    "en_def": "",
    "sentence": "Q: What do the kids buy at the store? — A: They buy a {{BLANK}} of cookies.",
    "cn": "孩子們在商店買什麼？ — 他們買一包餅乾。"
  },
  {
    "word": "package",
    "pos": "n.",
    "cn_def": "包裹",
    "en_def": "",
    "sentence": "Q: What does Mom get from Grandma today? — A: She gets a big {{BLANK}}. There are cookies in it.",
    "cn": "媽媽今天收到奶奶寄來的什麼？ — 她收到一個大包裹，裡面有餅乾。"
  },
  {
    "word": "pair",
    "pos": "n.",
    "cn_def": "一雙；一對",
    "en_def": "",
    "sentence": "Q: What does Ben need for PE class? — A: He needs a new {{BLANK}} of shoes.",
    "cn": "班上體育課需要什麼？ — 他需要一雙新鞋子。"
  },
  {
    "word": "dozen",
    "pos": "n.",
    "cn_def": "（一）打",
    "en_def": "",
    "sentence": "Q: How many eggs do we need for the cake? — A: We need a {{BLANK}} eggs.",
    "cn": "做蛋糕我們需要幾顆蛋？ — 我們需要一打蛋。"
  },
  {
    "word": "kilo (kilos)",
    "pos": "n.",
    "cn_def": "公斤（簡稱）",
    "en_def": "",
    "sentence": "Q: How much rice do your parents buy? — A: They buy two {{BLANK}} of rice.",
    "cn": "你爸媽買多少米？ — 他們買兩公斤的米。"
  },
  {
    "word": "big (bigger)",
    "pos": "adj.",
    "cn_def": "大的",
    "en_def": "",
    "sentence": "Q: Is an elephant small? — A: No, it isn't. It's much {{BLANK}} than a horse.",
    "cn": "大象很小嗎？ — 不，牠不小。牠比馬大得多。"
  },
  {
    "word": "small (smaller)",
    "pos": "adj.",
    "cn_def": "小的",
    "en_def": "",
    "sentence": "Q: Is a mouse big? — A: No, it isn't. It's {{BLANK}} than a cat.",
    "cn": "老鼠很大嗎？ — 不，牠不大。牠比貓小。"
  },
  {
    "word": "little",
    "pos": "adj.",
    "cn_def": "小的",
    "en_def": "",
    "sentence": "Q: Do you have a big dog? — A: No, I don't. I have a {{BLANK}} dog. It's very cute.",
    "cn": "你有一隻大狗嗎？ — 不，我沒有。我有一隻小狗，牠很可愛。"
  },
  {
    "word": "long (longer)",
    "pos": "adj.",
    "cn_def": "長的",
    "en_def": "",
    "sentence": "Q: Does Amy have short hair? — A: No, she doesn't. Her hair is {{BLANK}} than mine.",
    "cn": "艾美是短頭髮嗎？ — 不，她不是。她的頭髮比我的長。"
  },
  {
    "word": "short (shorter)",
    "pos": "adj.",
    "cn_def": "短的",
    "en_def": "",
    "sentence": "Q: Is your pencil long? — A: No, it isn't. It's {{BLANK}} than my pen.",
    "cn": "你的鉛筆很長嗎？ — 不，它不長。它比我的原子筆短。"
  },
  {
    "word": "low (lower)",
    "pos": "adj.",
    "cn_def": "低的",
    "en_def": "",
    "sentence": "Q: Is this chair high? — A: No, it isn't. It's {{BLANK}} than that table.",
    "cn": "這張椅子很高嗎？ — 不，它不高。它比那張桌子低。"
  },
  {
    "word": "light (lighter)",
    "pos": "adj.",
    "cn_def": "輕的",
    "en_def": "",
    "sentence": "Q: Is your schoolbag heavy? — A: No, it isn't. It's {{BLANK}} than Ben's bag.",
    "cn": "你的書包很重嗎？ — 不，它不重。它比班的書包輕。"
  }
];

const MCQS = [
  {
    "q": "Q: What's your ______? — A: I'm 150 cm tall.【身高；高度】",
    "options": [
      "size",
      "bottle",
      "height",
      "shape"
    ],
    "answer": 2,
    "cn": "你的身高是多少？ — 我身高一百五十公分。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How tall is your brother? — A: He is 170 ______ tall.【公分】",
    "options": [
      "grams",
      "centimeters",
      "inches",
      "kilograms"
    ],
    "answer": 1,
    "cn": "你哥哥多高？ — 他一百七十公分高。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How long is the snake? — A: It's about six ______ long.【呎】",
    "options": [
      "feet",
      "line",
      "circle",
      "dozen"
    ],
    "answer": 0,
    "cn": "那條蛇多長？ — 牠大約六呎長。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How long is your ruler? — A: It's twelve ______ long. That's one foot.【英吋】",
    "options": [
      "centimeters",
      "glasses",
      "dots",
      "inches"
    ],
    "answer": 3,
    "cn": "你的尺多長？ — 它十二英吋長，也就是一呎。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How far do you walk to the store? — A: I walk about 100 ______. It's very near.【碼】",
    "options": [
      "kilos",
      "yards",
      "pounds",
      "centimeters"
    ],
    "answer": 1,
    "cn": "你走多遠到商店？ — 我走大約一百碼，很近。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How far does your uncle run every morning? — A: He runs three ______.【英里；哩】",
    "options": [
      "glasses",
      "centimeters",
      "miles",
      "points"
    ],
    "answer": 2,
    "cn": "你叔叔每天早上跑多遠？ — 他跑三英里。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Does Ben live ______ from school? — A: Yes, he does. He lives five miles from school, so he goes by bus.【遠的】",
    "options": [
      "straight",
      "little",
      "lighter",
      "far"
    ],
    "answer": 3,
    "cn": "班住得離學校遠嗎？ — 是的，他住得遠。他住在離學校五英里的地方，所以他搭公車。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How ______ is Taipei 101? — A: It's about 1,670 feet.【高的】",
    "options": [
      "high",
      "medium",
      "deep",
      "little"
    ],
    "answer": 0,
    "cn": "臺北101有多高？ — 它大約一千六百七十呎。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How ______ is the pool? — A: It's about five feet. Don't swim there alone.【深的】",
    "options": [
      "little",
      "lower",
      "deep",
      "bigger"
    ],
    "answer": 2,
    "cn": "這座游泳池有多深？ — 大約五呎深，不要獨自在那裡游泳。",
    "vocabIndex": 8
  },
  {
    "q": "Q: How ______ is the road? — A: It's about twenty feet.【寬的】",
    "options": [
      "longer",
      "shorter",
      "high",
      "wide"
    ],
    "answer": 3,
    "cn": "這條路有多寬？ — 它大約二十呎寬。",
    "vocabIndex": 9
  },
  {
    "q": "Q: How much sugar do you need for the cake? — A: I need 200 ______ of sugar.【公克】",
    "options": [
      "grams",
      "glasses",
      "pounds",
      "kilograms"
    ],
    "answer": 0,
    "cn": "做蛋糕你需要多少糖？ — 我需要兩百公克的糖。",
    "vocabIndex": 10
  },
  {
    "q": "Q: How much does your dog weigh? — A: It weighs ten ______.【公斤】",
    "options": [
      "points",
      "kilograms",
      "angles",
      "glasses"
    ],
    "answer": 1,
    "cn": "你的狗多重？ — 牠十公斤重。",
    "vocabIndex": 11
  },
  {
    "q": "Q: How much does the baby weigh? — A: She weighs seven ______.【磅】",
    "options": [
      "inches",
      "angles",
      "pounds",
      "glasses"
    ],
    "answer": 2,
    "cn": "那個寶寶多重？ — 她七磅重。",
    "vocabIndex": 12
  },
  {
    "q": "Q: What ______ do you like? — A: I like stars and hearts.【形狀】",
    "options": [
      "pack",
      "circle",
      "row",
      "shape"
    ],
    "answer": 3,
    "cn": "你喜歡什麼形狀？ — 我喜歡星形和心形。",
    "vocabIndex": 13
  },
  {
    "q": "Q: What shape is the moon tonight? — A: It's ______ and bright.【圓形的】",
    "options": [
      "round",
      "high",
      "lower",
      "straight"
    ],
    "answer": 0,
    "cn": "今晚的月亮是什麼形狀？ — 它又圓又亮。",
    "vocabIndex": 14
  },
  {
    "q": "Q: What does the teacher draw on the blackboard? — A: She draws a big ______.【圓圈】",
    "options": [
      "row",
      "circle",
      "size",
      "pack"
    ],
    "answer": 1,
    "cn": "老師在黑板上畫什麼？ — 她畫一個大圓圈。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What shape is the gift box? — A: It's ______. It has four sides.【正方形的】",
    "options": [
      "smaller",
      "large",
      "round",
      "square"
    ],
    "answer": 3,
    "cn": "那個禮物盒是什麼形狀？ — 它是正方形的，有四個邊。",
    "vocabIndex": 16
  },
  {
    "q": "Q: How many ______ does a square have? — A: It has four.【角；邊角】",
    "options": [
      "miles",
      "centimeters",
      "angles",
      "glasses"
    ],
    "answer": 2,
    "cn": "一個正方形有幾個角？ — 它有四個。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What do the students stand in at lunch time? — A: They stand in a ______.【線；行列】",
    "options": [
      "bottle",
      "line",
      "feet",
      "package"
    ],
    "answer": 1,
    "cn": "學生們午餐時間站成什麼？ — 他們排成一列（排隊）。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What does Amy draw with her ruler? — A: She draws a ______ line.【直的】",
    "options": [
      "straight",
      "shorter",
      "wide",
      "little"
    ],
    "answer": 0,
    "cn": "艾美用尺畫什麼？ — 她畫一條直線。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What do your new socks look like? — A: They're white with red ______.【點】",
    "options": [
      "miles",
      "grams",
      "inches",
      "dots"
    ],
    "answer": 3,
    "cn": "你的新襪子看起來怎麼樣？ — 它們是白色的，有紅色的點點。",
    "vocabIndex": 20
  },
  {
    "q": "Q: How many ______ does your team get? — A: We get twenty-five. We win the game!【分數；得分】",
    "options": [
      "inches",
      "points",
      "angles",
      "pounds"
    ],
    "answer": 1,
    "cn": "你們隊得幾分？ — 我們得二十五分，我們贏了比賽！",
    "vocabIndex": 21
  },
  {
    "q": "Q: Where do you sit in class? — A: I sit in the first ______.【一排】",
    "options": [
      "row",
      "dozen",
      "pair",
      "feet"
    ],
    "answer": 0,
    "cn": "你上課坐在哪裡？ — 我坐在第一排。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What ______ do you wear? — A: I wear S. I'm not very tall.【尺寸】",
    "options": [
      "pair",
      "height",
      "size",
      "feet"
    ],
    "answer": 2,
    "cn": "你穿什麼尺寸？ — 我穿 S 號，我不是很高。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What size do you and your brother wear? — A: We wear ______.【中等的】",
    "options": [
      "medium",
      "straight",
      "longer",
      "lighter"
    ],
    "answer": 0,
    "cn": "你和你弟弟穿什麼尺寸？ — 我們穿中號。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What size Coke does Tom want? — A: He wants a ______ Coke.【大的】",
    "options": [
      "lighter",
      "round",
      "large",
      "wide"
    ],
    "answer": 2,
    "cn": "湯姆想要什麼尺寸的可樂？ — 他想要一杯大杯可樂。",
    "vocabIndex": 25
  },
  {
    "q": "Q: How much water do you want? — A: I want a ______ of water, please.【瓶子】",
    "options": [
      "piece",
      "bottle",
      "cup",
      "dozen"
    ],
    "answer": 1,
    "cn": "你想要多少水？ — 我想要一瓶水，謝謝。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What does Grandpa drink every morning? — A: He drinks a ______ of hot tea.【茶杯；一杯】",
    "options": [
      "circle",
      "dozen",
      "feet",
      "cup"
    ],
    "answer": 3,
    "cn": "爺爺每天早上喝什麼？ — 他喝一杯熱茶。",
    "vocabIndex": 27
  },
  {
    "q": "Q: How much milk does Amy drink every day? — A: She drinks two ______ of milk.【玻璃杯；一杯】",
    "options": [
      "centimeters",
      "glasses",
      "kilos",
      "inches"
    ],
    "answer": 1,
    "cn": "艾美每天喝多少牛奶？ — 她喝兩杯牛奶。",
    "vocabIndex": 28
  },
  {
    "q": "Q: How much cake do you want? — A: I want a ______ of cake.【片；塊】",
    "options": [
      "feet",
      "shape",
      "piece",
      "line"
    ],
    "answer": 2,
    "cn": "你想要多少蛋糕？ — 我想要一塊蛋糕。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What do the kids buy at the store? — A: They buy a ______ of cookies.【包】",
    "options": [
      "pack",
      "shape",
      "row",
      "line"
    ],
    "answer": 0,
    "cn": "孩子們在商店買什麼？ — 他們買一包餅乾。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What does Mom get from Grandma today? — A: She gets a big ______. There are cookies in it.【包裹】",
    "options": [
      "cup",
      "size",
      "feet",
      "package"
    ],
    "answer": 3,
    "cn": "媽媽今天收到奶奶寄來的什麼？ — 她收到一個大包裹，裡面有餅乾。",
    "vocabIndex": 31
  },
  {
    "q": "Q: What does Ben need for PE class? — A: He needs a new ______ of shoes.【一雙；一對】",
    "options": [
      "circle",
      "shape",
      "pair",
      "dozen"
    ],
    "answer": 2,
    "cn": "班上體育課需要什麼？ — 他需要一雙新鞋子。",
    "vocabIndex": 32
  },
  {
    "q": "Q: How many eggs do we need for the cake? — A: We need a ______ eggs.【（一）打】",
    "options": [
      "shape",
      "dozen",
      "package",
      "bottle"
    ],
    "answer": 1,
    "cn": "做蛋糕我們需要幾顆蛋？ — 我們需要一打蛋。",
    "vocabIndex": 33
  },
  {
    "q": "Q: How much rice do your parents buy? — A: They buy two ______ of rice.【公斤（簡稱）】",
    "options": [
      "inches",
      "glasses",
      "kilograms",
      "kilos"
    ],
    "answer": 3,
    "cn": "你爸媽買多少米？ — 他們買兩公斤的米。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Is an elephant small? — A: No, it isn't. It's much ______ than a horse.【大的】",
    "options": [
      "bigger",
      "round",
      "deep",
      "lighter"
    ],
    "answer": 0,
    "cn": "大象很小嗎？ — 不，牠不小。牠比馬大得多。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Is a mouse big? — A: No, it isn't. It's ______ than a cat.【小的】",
    "options": [
      "large",
      "high",
      "smaller",
      "lighter"
    ],
    "answer": 2,
    "cn": "老鼠很大嗎？ — 不，牠不大。牠比貓小。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Do you have a big dog? — A: No, I don't. I have a ______ dog. It's very cute.【小的】",
    "options": [
      "lighter",
      "little",
      "straight",
      "round"
    ],
    "answer": 1,
    "cn": "你有一隻大狗嗎？ — 不，我沒有。我有一隻小狗，牠很可愛。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Does Amy have short hair? — A: No, she doesn't. Her hair is ______ than mine.【長的】",
    "options": [
      "longer",
      "deep",
      "smaller",
      "square"
    ],
    "answer": 0,
    "cn": "艾美是短頭髮嗎？ — 不，她不是。她的頭髮比我的長。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Is your pencil long? — A: No, it isn't. It's ______ than my pen.【短的】",
    "options": [
      "square",
      "large",
      "far",
      "shorter"
    ],
    "answer": 3,
    "cn": "你的鉛筆很長嗎？ — 不，它不長。它比我的原子筆短。",
    "vocabIndex": 39
  },
  {
    "q": "Q: Is this chair high? — A: No, it isn't. It's ______ than that table.【低的】",
    "options": [
      "medium",
      "smaller",
      "lower",
      "far"
    ],
    "answer": 2,
    "cn": "這張椅子很高嗎？ — 不，它不高。它比那張桌子低。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Is your schoolbag heavy? — A: No, it isn't. It's ______ than Ben's bag.【輕的】",
    "options": [
      "straight",
      "lighter",
      "large",
      "smaller"
    ],
    "answer": 1,
    "cn": "你的書包很重嗎？ — 不，它不重。它比班的書包輕。",
    "vocabIndex": 41
  }
];

const LOOKUP = {
  "shorter": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "矮的；短的"
  },
  "feet": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "腳"
  },
  "little": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "很少的（不可數）"
  },
  "cup": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "茶杯；杯子"
  },
  "glasses": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "眼鏡"
  },
  "height": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "身高；高度"
  },
  "centimeters": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "公分"
  },
  "inches": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "英吋"
  },
  "yards": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "碼"
  },
  "miles": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "英里；哩"
  },
  "far": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "遠的"
  },
  "high": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "高的"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "深的"
  },
  "wide": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "寬的"
  },
  "grams": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "公克"
  },
  "kilograms": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "公斤"
  },
  "pounds": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "磅"
  },
  "shape": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "形狀"
  },
  "round": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "圓形的"
  },
  "circle": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "圓圈"
  },
  "square": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "正方形的"
  },
  "angles": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "角；邊角"
  },
  "line": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "線；行列"
  },
  "straight": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "直的"
  },
  "dots": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "點"
  },
  "points": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "分數；得分"
  },
  "row": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "一排"
  },
  "size": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "尺寸"
  },
  "medium": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "中等的"
  },
  "large": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "大的"
  },
  "bottle": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "瓶子"
  },
  "piece": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "片；塊"
  },
  "pack": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "包"
  },
  "package": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "包裹"
  },
  "pair": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "一雙；一對"
  },
  "dozen": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "（一）打"
  },
  "kilos": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "公斤（簡稱）"
  },
  "bigger": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "大的"
  },
  "smaller": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "小的"
  },
  "longer": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "長的"
  },
  "lower": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "低的"
  },
  "lighter": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "輕的"
  }
};

const EXTRA_GLOSSES = {};
