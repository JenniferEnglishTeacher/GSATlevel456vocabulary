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
    "q": "Q: How much is this pen? — A: It's twenty ______.【元】",
    "options": [
      "cents",
      "money",
      "change",
      "dollars"
    ],
    "answer": 3,
    "cn": "這支筆多少錢？ — 它二十元。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How much is this candy? — A: It's only fifty ______.【（一）分錢】",
    "options": [
      "dollars",
      "money",
      "cents",
      "change"
    ],
    "answer": 2,
    "cn": "這顆糖果多少錢？ — 它只要五十分錢。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How much is the new bike? — A: The ______ is three thousand dollars.【價格】",
    "options": [
      "change",
      "price",
      "money",
      "dollars"
    ],
    "answer": 1,
    "cn": "這輛新腳踏車多少錢？ — 價格是三千元。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How much is it? — A: It's eighty dollars. Here is your ______, twenty dollars.【零錢；找的錢】",
    "options": [
      "change",
      "money",
      "price",
      "cents"
    ],
    "answer": 0,
    "cn": "這個多少錢？ — 八十元。這是找你的零錢，二十元。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How much are these socks? — A: They're fifty dollars. They're very ______.【便宜的】",
    "options": [
      "expensive",
      "shorter",
      "cheap",
      "important"
    ],
    "answer": 2,
    "cn": "這些襪子多少錢？ — 它們五十元，很便宜。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How much are those shoes? — A: They're five thousand dollars. They're too ______!【昂貴的】",
    "options": [
      "expensive",
      "cheap",
      "richer",
      "tidy"
    ],
    "answer": 0,
    "cn": "那雙鞋子多少錢？ — 它們五千元，太貴了！",
    "vocabIndex": 5
  },
  {
    "q": "Q: How much are the apples? — A: They're ten dollars each. I want to ______ six.【買】",
    "options": [
      "borrow",
      "buy",
      "spend",
      "costs"
    ],
    "answer": 1,
    "cn": "這些蘋果多少錢？ — 一個十元，我想買六個。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How much do you spend on lunch every day? — A: I ______ sixty dollars on lunch.【（人）花（錢）】",
    "options": [
      "buy",
      "borrow",
      "costs",
      "spend"
    ],
    "answer": 3,
    "cn": "你每天午餐花多少錢？ — 我午餐花六十元。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How much do your parents spend on books? — A: They spend a lot of ______ on books. They love reading.【錢】",
    "options": [
      "change",
      "price",
      "money",
      "dollars"
    ],
    "answer": 2,
    "cn": "你爸媽花多少錢買書？ — 他們花很多錢在書上，他們很愛閱讀。",
    "vocabIndex": 8
  },
  {
    "q": "Q: How much does this T-shirt cost? — A: It ______ three hundred dollars.【（物品）價錢為】",
    "options": [
      "pays",
      "costs",
      "lends",
      "spend"
    ],
    "answer": 1,
    "cn": "這件T恤要多少錢？ — 它要三百元。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Does your dad pay for dinner? — A: Yes, he does. He always ______ for dinner.【付錢】",
    "options": [
      "pays",
      "costs",
      "lends",
      "buy"
    ],
    "answer": 0,
    "cn": "你爸爸付晚餐的錢嗎？ — 是的，他會。他總是付晚餐的錢。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Do you have money for the bus? — A: No, I don't. Can I ______ twenty dollars from you?【借入】",
    "options": [
      "buy",
      "spend",
      "pays",
      "borrow"
    ],
    "answer": 3,
    "cn": "你有搭公車的錢嗎？ — 不，我沒有。我可以跟你借二十元嗎？",
    "vocabIndex": 11
  },
  {
    "q": "Q: Does your sister lend you money? — A: Yes, she does. She often ______ me fifty dollars.【借出】",
    "options": [
      "costs",
      "lends",
      "pays",
      "spend"
    ],
    "answer": 1,
    "cn": "你姊姊會借你錢嗎？ — 是的，她會。她常常借我五十元。",
    "vocabIndex": 12
  }
];

const LOOKUP = {
  "shorter": {
    "pos": "adj.",
    "en_def": "not tall; not long",
    "cn_def": "矮的；短的"
  },
  "richer": {
    "pos": "adj.",
    "en_def": "having a lot of money",
    "cn_def": "有錢的"
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
  "cheap": {
    "pos": "adj.",
    "en_def": "not costing much money",
    "cn_def": "便宜的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "buy": {
    "pos": "v.",
    "en_def": "to get something by paying money for it",
    "cn_def": "買"
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
  "borrow": {
    "pos": "v.",
    "en_def": "to take and use something that you will give back later",
    "cn_def": "借入"
  },
  "lends": {
    "pos": "v.",
    "en_def": "to let someone use something that they will give back later",
    "cn_def": "借出"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "clean, with everything in the right place",
    "cn_def": "整潔的"
  },
  "important": {
    "pos": "adj.",
    "en_def": "having great meaning or value",
    "cn_def": "重要的"
  }
};

const EXTRA_GLOSSES = {};
