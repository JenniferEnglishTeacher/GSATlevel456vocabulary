// Unit 9 Quiz Data: Money 金錢（第09區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U09 - Money",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dollar (dollars)",
    "pos": "n.",
    "cn_def": "元",
    "en_def": "the money used in Taiwan, the U.S.A., and some other countries",
    "sentence": "Q: How much is this pen? — A: It's twenty {{BLANK}}.",
    "cn": "這支筆多少錢？ — 它二十元。"
  },
  {
    "word": "cent (cents)",
    "pos": "n.",
    "cn_def": "（一）分錢",
    "en_def": "a small coin; one hundred of them make one dollar",
    "sentence": "Q: How much is this candy? — A: It's only fifty {{BLANK}}.",
    "cn": "這顆糖果多少錢？ — 它只要五十分錢。"
  },
  {
    "word": "price",
    "pos": "n.",
    "cn_def": "價格",
    "en_def": "how much money you pay to buy something",
    "sentence": "Q: How much is the new bike? — A: The {{BLANK}} is three thousand dollars.",
    "cn": "這輛新腳踏車多少錢？ — 價格是三千元。"
  },
  {
    "word": "change",
    "pos": "n.",
    "cn_def": "零錢；找的錢",
    "en_def": "the money you get back when you pay too much; coins",
    "sentence": "Q: How much is it? — A: It's eighty dollars. Here is your {{BLANK}}, twenty dollars.",
    "cn": "這個多少錢？ — 八十元。這是找你的零錢，二十元。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "not costing much money",
    "sentence": "Q: How much are these socks? — A: They're fifty dollars. They're very {{BLANK}}.",
    "cn": "這些襪子多少錢？ — 它們五十元，很便宜。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "Q: How much are those shoes? — A: They're five thousand dollars. They're too {{BLANK}}!",
    "cn": "那雙鞋子多少錢？ — 它們五千元，太貴了！"
  },
  {
    "word": "buy",
    "pos": "v.",
    "cn_def": "買",
    "en_def": "to get something by paying money for it",
    "sentence": "Q: How much are the apples? — A: They're ten dollars each. I want to {{BLANK}} six.",
    "cn": "這些蘋果多少錢？ — 一個十元，我想買六個。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "（人）花（錢）",
    "en_def": "to use money to buy things",
    "sentence": "Q: How much do you spend on lunch every day? — A: I {{BLANK}} sixty dollars on lunch.",
    "cn": "你每天午餐花多少錢？ — 我午餐花六十元。"
  },
  {
    "word": "money",
    "pos": "n.",
    "cn_def": "錢",
    "en_def": "coins and paper bills that you use to buy things",
    "sentence": "Q: How much do your parents spend on books? — A: They spend a lot of {{BLANK}} on books. They love reading.",
    "cn": "你爸媽花多少錢買書？ — 他們花很多錢在書上，他們很愛閱讀。"
  },
  {
    "word": "cost (costs)",
    "pos": "v.",
    "cn_def": "（物品）價錢為",
    "en_def": "to have a price of",
    "sentence": "Q: How much does this T-shirt cost? — A: It {{BLANK}} three hundred dollars.",
    "cn": "這件T恤要多少錢？ — 它要三百元。"
  },
  {
    "word": "pay (pays)",
    "pos": "v.",
    "cn_def": "付錢",
    "en_def": "to give money for something you buy",
    "sentence": "Q: Does your dad pay for dinner? — A: Yes, he does. He always {{BLANK}} for dinner.",
    "cn": "你爸爸付晚餐的錢嗎？ — 是的，他會。他總是付晚餐的錢。"
  },
  {
    "word": "borrow",
    "pos": "v.",
    "cn_def": "借入",
    "en_def": "to take and use something that you will give back later",
    "sentence": "Q: Do you have money for the bus? — A: No, I don't. Can I {{BLANK}} twenty dollars from you?",
    "cn": "你有搭公車的錢嗎？ — 不，我沒有。我可以跟你借二十元嗎？"
  },
  {
    "word": "lend (lends)",
    "pos": "v.",
    "cn_def": "借出",
    "en_def": "to let someone use something that they will give back later",
    "sentence": "Q: Does your sister lend you money? — A: Yes, she does. She often {{BLANK}} me fifty dollars.",
    "cn": "你姊姊會借你錢嗎？ — 是的，她會。她常常借我五十元。"
  }
];

const MCQS = [
  {
    "q": "This pen is only ten ______. It is so cheap that I want to buy two.",
    "options": [
      "minutes",
      "hours",
      "weeks",
      "dollars"
    ],
    "answer": 3,
    "cn": "這支筆多少錢？ — 它二十元。",
    "vocabIndex": 0
  },
  {
    "q": "One dollar is one hundred ______. These small coins are not used very often now.",
    "options": [
      "cents",
      "dollars",
      "prices",
      "hours"
    ],
    "answer": 0,
    "cn": "這顆糖果多少錢？ — 它只要五十分錢。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ of this bike is too high. I can't buy it with only two thousand dollars.",
    "options": [
      "dollar",
      "price",
      "change",
      "cent"
    ],
    "answer": 1,
    "cn": "這輛新腳踏車多少錢？ — 價格是三千元。",
    "vocabIndex": 2
  },
  {
    "q": "The pen was eight dollars, and I gave the clerk ten. He gave me two dollars in ______.",
    "options": [
      "price",
      "dollar",
      "change",
      "week"
    ],
    "answer": 2,
    "cn": "這個多少錢？ — 八十元。這是找你的零錢，二十元。",
    "vocabIndex": 3
  },
  {
    "q": "These shoes are very ______. They are only one hundred dollars, so I will buy two pairs.",
    "options": [
      "expensive",
      "cheap",
      "tall",
      "young"
    ],
    "answer": 1,
    "cn": "這些襪子多少錢？ — 它們五十元，很便宜。",
    "vocabIndex": 4
  },
  {
    "q": "This watch is too ______ for me. It is fifty thousand dollars, and I only have five hundred.",
    "options": [
      "cheap",
      "short",
      "expensive",
      "young"
    ],
    "answer": 2,
    "cn": "那雙鞋子多少錢？ — 它們五千元，太貴了！",
    "vocabIndex": 5
  },
  {
    "q": "I want to ______ a birthday present for my mom, so I am going to the department store this afternoon.",
    "options": [
      "buy",
      "lend",
      "cost",
      "spend"
    ],
    "answer": 0,
    "cn": "這些蘋果多少錢？ — 一個十元，我想買六個。",
    "vocabIndex": 6
  },
  {
    "q": "I ______ two hundred dollars on lunch every week. My mom thinks it is too much.",
    "options": [
      "cost",
      "lend",
      "buy",
      "spend"
    ],
    "answer": 3,
    "cn": "你每天午餐花多少錢？ — 我午餐花六十元。",
    "vocabIndex": 7
  },
  {
    "q": "I have no ______ in my wallet. Can you lend me one hundred dollars?",
    "options": [
      "price",
      "money",
      "week",
      "hour"
    ],
    "answer": 1,
    "cn": "你爸媽花多少錢買書？ — 他們花很多錢在書上，他們很愛閱讀。",
    "vocabIndex": 8
  },
  {
    "q": "This T-shirt ______ three hundred dollars. It is not expensive, so I will take it.",
    "options": [
      "costs",
      "pays",
      "spends",
      "buys"
    ],
    "answer": 0,
    "cn": "這件T恤要多少錢？ — 它要三百元。",
    "vocabIndex": 9
  },
  {
    "q": "Dad always ______ for dinner when our family eats at a restaurant. He never lets us use our own money.",
    "options": [
      "costs",
      "lends",
      "pays",
      "borrows"
    ],
    "answer": 2,
    "cn": "你爸爸付晚餐的錢嗎？ — 是的，他會。他總是付晚餐的錢。",
    "vocabIndex": 10
  },
  {
    "q": "I forgot my pen. May I ______ yours? I will give it back after class.",
    "options": [
      "lend",
      "pay",
      "cost",
      "borrow"
    ],
    "answer": 3,
    "cn": "你有搭公車的錢嗎？ — 不，我沒有。我可以跟你借二十元嗎？",
    "vocabIndex": 11
  },
  {
    "q": "My sister often ______ me her bike. I always give it back to her the next day.",
    "options": [
      "borrows",
      "costs",
      "lends",
      "pays"
    ],
    "answer": 2,
    "cn": "你姊姊會借你錢嗎？ — 是的，她會。她常常借我五十元。",
    "vocabIndex": 12
  }
];

const LOOKUP = {
  "minutes": {
    "pos": "n.",
    "en_def": "sixty seconds",
    "cn_def": "分鐘"
  },
  "hours": {
    "pos": "n.",
    "en_def": "sixty minutes",
    "cn_def": "小時"
  },
  "weeks": {
    "pos": "n.",
    "en_def": "seven days",
    "cn_def": "星期；週"
  },
  "dollars": {
    "pos": "n.",
    "en_def": "the money used in Taiwan, the U.S.A., and some other countries",
    "cn_def": "元"
  },
  "cents": {
    "pos": "n.",
    "en_def": "a small coin; one hundred of them make one dollar",
    "cn_def": "（一）分錢"
  },
  "prices": {
    "pos": "n.",
    "en_def": "how much money you pay to buy something",
    "cn_def": "價格"
  },
  "dollar": {
    "pos": "n.",
    "en_def": "the money used in Taiwan, the U.S.A., and some other countries",
    "cn_def": "元"
  },
  "price": {
    "pos": "n.",
    "en_def": "how much money you pay to buy something",
    "cn_def": "價格"
  },
  "change": {
    "pos": "n.",
    "en_def": "the money you get back when you pay too much; coins",
    "cn_def": "零錢；找的錢"
  },
  "cent": {
    "pos": "n.",
    "en_def": "a small coin; one hundred of them make one dollar",
    "cn_def": "（一）分錢"
  },
  "week": {
    "pos": "n.",
    "en_def": "seven days",
    "cn_def": "星期；週"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "not costing much money",
    "cn_def": "便宜的"
  },
  "tall": {
    "pos": "adj.",
    "en_def": "high from head to foot",
    "cn_def": "高的"
  },
  "young": {
    "pos": "adj.",
    "en_def": "having lived for only a few years; not old",
    "cn_def": "年輕的"
  },
  "short": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "buy": {
    "pos": "v.",
    "en_def": "to get something by paying money for it",
    "cn_def": "買"
  },
  "lend": {
    "pos": "v.",
    "en_def": "to let someone use something that they will give back later",
    "cn_def": "借出"
  },
  "cost": {
    "pos": "v.",
    "en_def": "to have a price of",
    "cn_def": "（物品）價錢為"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use money to buy things",
    "cn_def": "（人）花（錢）"
  },
  "money": {
    "pos": "n.",
    "en_def": "coins and paper bills that you use to buy things",
    "cn_def": "錢"
  },
  "hour": {
    "pos": "n.",
    "en_def": "sixty minutes",
    "cn_def": "小時"
  },
  "costs": {
    "pos": "v.",
    "en_def": "to have a price of",
    "cn_def": "（物品）價錢為"
  },
  "pays": {
    "pos": "v.",
    "en_def": "to give money for something you buy",
    "cn_def": "付錢"
  },
  "spends": {
    "pos": "v.",
    "en_def": "to use money to buy things",
    "cn_def": "（人）花（錢）"
  },
  "buys": {
    "pos": "v.",
    "en_def": "to get something by paying money for it",
    "cn_def": "買"
  },
  "lends": {
    "pos": "v.",
    "en_def": "to let someone use something that they will give back later",
    "cn_def": "借出"
  },
  "borrows": {
    "pos": "v.",
    "en_def": "to take and use something that you will give back later",
    "cn_def": "借入"
  },
  "pay": {
    "pos": "v.",
    "en_def": "to give money for something you buy",
    "cn_def": "付錢"
  },
  "borrow": {
    "pos": "v.",
    "en_def": "to take and use something that you will give back later",
    "cn_def": "借入"
  }
};

const EXTRA_GLOSSES = {};
