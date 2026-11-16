// Topic 20 Subunit 3 Quiz Data: Marketing & Advertising 行銷與廣告
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S03 - Marketing & Advertising 行銷與廣告",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "marketer",
    "pos": "n.",
    "cn_def": "行銷人員",
    "en_def": "a person whose job is to make people want a product",
    "sentence": "A good {{BLANK}} studies what young people watch online, and then she plans adverts that appear in the right places.",
    "cn": "一位好的行銷人員會研究年輕人在網路上看什麼，然後規劃出現在正確位置的廣告。"
  },
  {
    "word": "market research",
    "pos": "n.phr.",
    "cn_def": "市場調查",
    "en_def": "collecting information about what customers want",
    "sentence": "Before launching the drink, the company did {{BLANK}} in five cities, and it found that people wanted less sugar.",
    "cn": "在推出這款飲料前，公司在五個城市做了市場調查，而且發現人們想要少一點糖。"
  },
  {
    "word": "target market",
    "pos": "n.phr.",
    "cn_def": "目標市場",
    "en_def": "the group of people a product is made for",
    "sentence": "The {{BLANK}} for this game is teenagers, so the adverts appear on video sites rather than in newspapers.",
    "cn": "這款遊戲的目標市場是青少年，所以廣告出現在影音網站上而不是報紙上。"
  },
  {
    "word": "customer base",
    "pos": "n.phr.",
    "cn_def": "顧客群",
    "en_def": "all the regular customers of a business",
    "sentence": "The bakery has a loyal {{BLANK}} in the neighbourhood, but it wants to attract tourists as well.",
    "cn": "這家麵包店在社區裡有忠實的顧客群，但它也想吸引觀光客。"
  },
  {
    "word": "branding",
    "pos": "n.",
    "cn_def": "品牌塑造",
    "en_def": "creating a special image and name for a product",
    "sentence": "Clever {{BLANK}} made the cheap water bottle look stylish, so teenagers were happy to pay more for it.",
    "cn": "聰明的品牌塑造讓這個便宜的水壺看起來很時尚，所以青少年樂意花更多錢買它。"
  },
  {
    "word": "brand loyalty",
    "pos": "n.phr.",
    "cn_def": "品牌忠誠度",
    "en_def": "when customers keep buying the same brand",
    "sentence": "Many phone users show strong {{BLANK}}, so they buy the same brand again even when others are cheaper.",
    "cn": "許多手機使用者表現出強烈的品牌忠誠度，所以即使其他品牌更便宜，他們還是會再買同一個牌子。"
  },
  {
    "word": "brand awareness",
    "pos": "n.phr.",
    "cn_def": "品牌知名度",
    "en_def": "how many people know about a brand",
    "sentence": "The company sponsored a popular marathon to increase {{BLANK}}, and its logo appeared on every runner's shirt.",
    "cn": "這家公司贊助一場熱門馬拉松來提高品牌知名度，而且它的標誌出現在每位跑者的上衣上。"
  },
  {
    "word": "brand image",
    "pos": "n.phr.",
    "cn_def": "品牌形象",
    "en_def": "what people think and feel about a brand",
    "sentence": "The scandal damaged the company's {{BLANK}}, so it spent millions on adverts about protecting nature.",
    "cn": "這起醜聞損害了公司的品牌形象，所以它花了數百萬在保護自然的廣告上。"
  },
  {
    "word": "advert",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a picture, film or text that tries to sell something",
    "sentence": "I skipped the {{BLANK}} before the video, but I still remembered the song because it was so catchy.",
    "cn": "我跳過了影片前的廣告，但我還是記得那首歌，因為它太好記了。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "促銷",
    "en_def": "activities to make people buy a product",
    "sentence": "The supermarket is running a {{BLANK}} this week, so if you buy two bottles of shampoo, you get one free.",
    "cn": "超市這週正在舉辦促銷活動，所以如果你買兩瓶洗髮精，就送你一瓶。"
  },
  {
    "word": "promotional",
    "pos": "adj.",
    "cn_def": "宣傳的",
    "en_def": "made to advertise a product",
    "sentence": "The band handed out free {{BLANK}} T-shirts at the concert, and fans wore them on social media for weeks.",
    "cn": "樂團在演唱會上發送免費的宣傳T恤，而歌迷們好幾週都穿著它們出現在社群媒體上。"
  },
  {
    "word": "price cut",
    "pos": "n.phr.",
    "cn_def": "降價",
    "en_def": "a reduction in the price of something",
    "sentence": "The phone company announced a big {{BLANK}} after sales fell, and long queues formed outside its shops.",
    "cn": "手機公司在銷量下滑後宣布大幅降價，而它的門市外排起了長長的隊伍。"
  },
  {
    "word": "coupon",
    "pos": "n.",
    "cn_def": "優惠券",
    "en_def": "a piece of paper or code that lets you pay less",
    "sentence": "My mother always uses a {{BLANK}} when she orders pizza online, so we usually get a free drink as well.",
    "cn": "我媽媽在網路上訂披薩時總是使用優惠券，所以我們通常還會得到一杯免費飲料。"
  },
  {
    "word": "free sample",
    "pos": "n.phr.",
    "cn_def": "免費試用品",
    "en_def": "a small amount of a product given away to try",
    "sentence": "The shop gave out a {{BLANK}} of the new cookies, and many people bought a whole box after tasting one.",
    "cn": "那家店發送新餅乾的免費試用品，而許多人嘗過之後就買了一整盒。"
  },
  {
    "word": "ad campaign",
    "pos": "n.phr.",
    "cn_def": "廣告活動",
    "en_def": "a planned series of adverts for one product",
    "sentence": "The {{BLANK}} for the new sports shoes used famous athletes, but it was criticised for being too expensive.",
    "cn": "新款運動鞋的廣告活動請來知名運動員，但它因花費過高而受到批評。"
  },
  {
    "word": "celebrity endorsement",
    "pos": "n.phr.",
    "cn_def": "名人代言",
    "en_def": "when a famous person says they use and like a product",
    "sentence": "The skin cream sold out quickly after a {{BLANK}} by a popular singer, although experts doubted it worked.",
    "cn": "在一位當紅歌手的名人代言後，這款乳霜很快就賣光了，儘管專家懷疑它是否有效。"
  },
  {
    "word": "viral marketing",
    "pos": "n.phr.",
    "cn_def": "病毒式行銷",
    "en_def": "marketing that spreads fast as people share it online",
    "sentence": "The funny video was a clever piece of {{BLANK}}, because millions of people shared it without knowing it was an advert.",
    "cn": "這支好笑的影片是一個聰明的病毒式行銷，因為數百萬人在不知道它是廣告的情況下分享了它。"
  },
  {
    "word": "influencer marketing",
    "pos": "n.phr.",
    "cn_def": "網紅行銷",
    "en_def": "paying popular online people to show a product",
    "sentence": "Many beauty brands spend more on {{BLANK}} than on TV adverts, because young people trust online stars more.",
    "cn": "許多美妝品牌在網紅行銷上的花費比電視廣告還多，因為年輕人更信任網路明星。"
  },
  {
    "word": "email marketing",
    "pos": "n.phr.",
    "cn_def": "電子郵件行銷",
    "en_def": "sending adverts and offers to customers by email",
    "sentence": "The shop uses {{BLANK}} to tell customers about sales, but too many messages can make people unsubscribe.",
    "cn": "這家店用電子郵件行銷告訴顧客特價訊息，但太多訊息可能會讓人們取消訂閱。"
  },
  {
    "word": "SEO",
    "pos": "n.",
    "cn_def": "搜尋引擎最佳化",
    "en_def": "making a website appear higher in search results",
    "sentence": "The small hotel improved its {{BLANK}}, so now it appears near the top when tourists search for rooms in Tainan.",
    "cn": "這家小飯店改善了它的搜尋引擎最佳化，所以現在遊客搜尋台南的房間時它會出現在前面。"
  },
  {
    "word": "click-through rate",
    "pos": "n.phr.",
    "cn_def": "點擊率",
    "en_def": "the percentage of people who click on an online advert",
    "sentence": "The {{BLANK}} for the new banner was very low, so the designers changed the colours and the words.",
    "cn": "新橫幅廣告的點擊率非常低，所以設計師更改了顏色和文字。"
  },
  {
    "word": "market segment",
    "pos": "n.phr.",
    "cn_def": "市場區隔",
    "en_def": "one group of customers with similar needs",
    "sentence": "Electric bikes for older people are a growing {{BLANK}}, so several companies are designing lighter models.",
    "cn": "給年長者的電動自行車是一個成長中的市場區隔，所以好幾家公司正在設計更輕的車款。"
  },
  {
    "word": "positioning",
    "pos": "n.",
    "cn_def": "市場定位",
    "en_def": "how a company wants customers to see its product compared to others",
    "sentence": "The brand's {{BLANK}} as a luxury product means it never offers discounts, even when sales are slow.",
    "cn": "這個品牌作為奢侈品的市場定位意味著它從不打折，即使銷售緩慢也一樣。"
  },
  {
    "word": "unique selling point",
    "pos": "n.phr.",
    "cn_def": "獨特賣點",
    "en_def": "the special feature that makes a product different",
    "sentence": "The phone's {{BLANK}} is its long battery life, so the adverts show people using it on a three-day trip.",
    "cn": "這款手機的獨特賣點是電池續航力長，所以廣告呈現人們在三天旅行中使用它的情景。"
  },
  {
    "word": "focus group",
    "pos": "n.phr.",
    "cn_def": "焦點團體",
    "en_def": "a small group asked to give opinions on a product",
    "sentence": "The company showed the new snack to a {{BLANK}} of teenagers, and most of them said it was too salty.",
    "cn": "公司把新零食拿給一群青少年組成的焦點團體看，而他們大多數說太鹹了。"
  },
  {
    "word": "questionnaire",
    "pos": "n.",
    "cn_def": "問卷",
    "en_def": "a list of written questions to collect opinions",
    "sentence": "Customers who fill in the short {{BLANK}} get a free coffee, so many people are happy to give their opinions.",
    "cn": "填寫簡短問卷的顧客可以得到一杯免費咖啡，所以許多人樂意提供意見。"
  },
  {
    "word": "consumer behaviour",
    "pos": "n.phr.",
    "cn_def": "消費者行為",
    "en_def": "the way people choose and buy things",
    "sentence": "Studies of {{BLANK}} show that people buy more when music is slow, so many shops play calm songs.",
    "cn": "消費者行為的研究顯示，音樂緩慢時人們會買得更多，所以許多商店播放輕柔的歌曲。"
  },
  {
    "word": "marketing mix",
    "pos": "n.phr.",
    "cn_def": "行銷組合",
    "en_def": "the combination of product, price, place and promotion",
    "sentence": "The class learned that the {{BLANK}} includes price and place, and then each group planned one for a new drink.",
    "cn": "全班學到行銷組合包含價格與通路，然後每一組為一款新飲料做了規劃。"
  },
  {
    "word": "loyalty card",
    "pos": "n.phr.",
    "cn_def": "集點卡；會員卡",
    "en_def": "a card that gives regular customers rewards",
    "sentence": "I have a {{BLANK}} for the bubble tea shop, and after ten drinks I get one for free.",
    "cn": "我有那家珍奶店的集點卡，而且集滿十杯後我可以免費得到一杯。"
  },
  {
    "word": "sponsorship",
    "pos": "n.",
    "cn_def": "贊助",
    "en_def": "money a company gives to an event in return for advertising",
    "sentence": "The bank's {{BLANK}} of the school football team paid for new uniforms, and its name is printed on every shirt.",
    "cn": "銀行對校足球隊的贊助支付了新球衣的費用，而它的名字印在每件球衣上。"
  }
];

const MCQS = [
  {
    "q": "A good _____ studies what young people watch online, and then she plans adverts that appear in the right places.",
    "options": [
      "resourcefulness",
      "opportunity",
      "crowdsourcing",
      "marketer"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Before launching the drink, the company did _____ in five cities, and it found that people wanted less sugar.",
    "options": [
      "pay rise",
      "market research",
      "developing country",
      "free market"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ for this game is teenagers, so the adverts appear on video sites rather than in newspapers.",
    "options": [
      "track record",
      "impulse buying",
      "target market",
      "tax return"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The bakery has a loyal _____ in the neighbourhood, but it wants to attract tourists as well.",
    "options": [
      "customer base",
      "purchasing power",
      "online shopping",
      "job description"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Clever _____ made the cheap water bottle look stylish, so teenagers were happy to pay more for it.",
    "options": [
      "supplier",
      "iteration",
      "branding",
      "founder"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many phone users show strong _____, so they buy the same brand again even when others are cheaper.",
    "options": [
      "window shopping",
      "brand loyalty",
      "bull market",
      "free trade"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The company sponsored a popular marathon to increase _____, and its logo appeared on every runner's shirt.",
    "options": [
      "brand awareness",
      "job interview",
      "angel investor",
      "a win-win situation"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The scandal damaged the company's _____, so it spent millions on adverts about protecting nature.",
    "options": [
      "global market",
      "the bottom line",
      "middle manager",
      "brand image"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "I skipped the _____ before the video, but I still remembered the song because it was so catchy.",
    "options": [
      "advert",
      "complacency",
      "onboarding",
      "profitability"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The supermarket is running a _____ this week, so if you buy two bottles of shampoo, you get one free.",
    "options": [
      "SME",
      "ownership",
      "promotion",
      "pricing"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The band handed out free _____ T-shirts at the concert, and fans wore them on social media for weeks.",
    "options": [
      "solvent",
      "promotional",
      "overambitious",
      "cost-conscious"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The phone company announced a big _____ after sales fell, and long queues formed outside its shops.",
    "options": [
      "Silicon Valley",
      "developing country",
      "pay rise",
      "price cut"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "My mother always uses a _____ when she orders pizza online, so we usually get a free drink as well.",
    "options": [
      "cartel",
      "consultancy",
      "coupon",
      "redundancy"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The shop gave out a _____ of the new cookies, and many people bought a whole box after tasting one.",
    "options": [
      "online shopping",
      "free sample",
      "limited company",
      "shop assistant"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The _____ for the new sports shoes used famous athletes, but it was criticised for being too expensive.",
    "options": [
      "business plan",
      "balance sheet",
      "first-mover advantage",
      "ad campaign"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The skin cream sold out quickly after a _____ by a popular singer, although experts doubted it worked.",
    "options": [
      "celebrity endorsement",
      "sales target",
      "track record",
      "Silicon Valley"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The funny video was a clever piece of _____, because millions of people shared it without knowing it was an advert.",
    "options": [
      "design thinking",
      "product development",
      "minimum viable product",
      "viral marketing"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Many beauty brands spend more on _____ than on TV adverts, because young people trust online stars more.",
    "options": [
      "tech giant",
      "product development",
      "influencer marketing",
      "seed funding"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The shop uses _____ to tell customers about sales, but too many messages can make people unsubscribe.",
    "options": [
      "stock market",
      "email marketing",
      "track record",
      "bull market"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The small hotel improved its _____, so now it appears near the top when tourists search for rooms in Tainan.",
    "options": [
      "SEO",
      "minutes",
      "assertiveness",
      "unicorn"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The _____ for the new banner was very low, so the designers changed the colours and the words.",
    "options": [
      "sole trader",
      "economic growth",
      "click-through rate",
      "impulse buying"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Electric bikes for older people are a growing _____, so several companies are designing lighter models.",
    "options": [
      "benefits package",
      "economic growth",
      "product development",
      "market segment"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The brand's _____ as a luxury product means it never offers discounts, even when sales are slow.",
    "options": [
      "markup",
      "positioning",
      "unicorn",
      "GDP"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The phone's _____ is its long battery life, so the adverts show people using it on a three-day trip.",
    "options": [
      "unique selling point",
      "team leader",
      "business model",
      "bull market"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The company showed the new snack to a _____ of teenagers, and most of them said it was too salty.",
    "options": [
      "a win-win situation",
      "focus group",
      "business owner",
      "performance review"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Customers who fill in the short _____ get a free coffee, so many people are happy to give their opinions.",
    "options": [
      "department",
      "vendor",
      "profitability",
      "questionnaire"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Studies of _____ show that people buy more when music is slow, so many shops play calm songs.",
    "options": [
      "team leader",
      "trade deficit",
      "consumer behaviour",
      "bear market"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The class learned that the _____ includes price and place, and then each group planned one for a new drink.",
    "options": [
      "marketing mix",
      "sole trader",
      "research and development",
      "seed funding"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "I have a _____ for the bubble tea shop, and after ten drinks I get one for free.",
    "options": [
      "branch office",
      "team leader",
      "loyalty card",
      "price list"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The bank's _____ of the school football team paid for new uniforms, and its name is printed on every shirt.",
    "options": [
      "opportunity",
      "sponsorship",
      "iteration",
      "complacency"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "marketer": {
    "pos": "n.",
    "en_def": "a person whose job is to make people want a product",
    "cn_def": "行銷人員"
  },
  "market research": {
    "pos": "n.phr.",
    "en_def": "collecting information about what customers want",
    "cn_def": "市場調查"
  },
  "target market": {
    "pos": "n.phr.",
    "en_def": "the group of people a product is made for",
    "cn_def": "目標市場"
  },
  "customer base": {
    "pos": "n.phr.",
    "en_def": "all the regular customers of a business",
    "cn_def": "顧客群"
  },
  "branding": {
    "pos": "n.",
    "en_def": "creating a special image and name for a product",
    "cn_def": "品牌塑造"
  },
  "brand loyalty": {
    "pos": "n.phr.",
    "en_def": "when customers keep buying the same brand",
    "cn_def": "品牌忠誠度"
  },
  "brand awareness": {
    "pos": "n.phr.",
    "en_def": "how many people know about a brand",
    "cn_def": "品牌知名度"
  },
  "brand image": {
    "pos": "n.phr.",
    "en_def": "what people think and feel about a brand",
    "cn_def": "品牌形象"
  },
  "advert": {
    "pos": "n.",
    "en_def": "a picture, film or text that tries to sell something",
    "cn_def": "廣告"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "activities to make people buy a product",
    "cn_def": "促銷"
  },
  "promotional": {
    "pos": "adj.",
    "en_def": "made to advertise a product",
    "cn_def": "宣傳的"
  },
  "price cut": {
    "pos": "n.phr.",
    "en_def": "a reduction in the price of something",
    "cn_def": "降價"
  },
  "coupon": {
    "pos": "n.",
    "en_def": "a piece of paper or code that lets you pay less",
    "cn_def": "優惠券"
  },
  "free sample": {
    "pos": "n.phr.",
    "en_def": "a small amount of a product given away to try",
    "cn_def": "免費試用品"
  },
  "ad campaign": {
    "pos": "n.phr.",
    "en_def": "a planned series of adverts for one product",
    "cn_def": "廣告活動"
  },
  "celebrity endorsement": {
    "pos": "n.phr.",
    "en_def": "when a famous person says they use and like a product",
    "cn_def": "名人代言"
  },
  "viral marketing": {
    "pos": "n.phr.",
    "en_def": "marketing that spreads fast as people share it online",
    "cn_def": "病毒式行銷"
  },
  "influencer marketing": {
    "pos": "n.phr.",
    "en_def": "paying popular online people to show a product",
    "cn_def": "網紅行銷"
  },
  "email marketing": {
    "pos": "n.phr.",
    "en_def": "sending adverts and offers to customers by email",
    "cn_def": "電子郵件行銷"
  },
  "seo": {
    "pos": "n.",
    "en_def": "making a website appear higher in search results",
    "cn_def": "搜尋引擎最佳化"
  },
  "click-through rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who click on an online advert",
    "cn_def": "點擊率"
  },
  "market segment": {
    "pos": "n.phr.",
    "en_def": "one group of customers with similar needs",
    "cn_def": "市場區隔"
  },
  "positioning": {
    "pos": "n.",
    "en_def": "how a company wants customers to see its product compared to others",
    "cn_def": "市場定位"
  },
  "unique selling point": {
    "pos": "n.phr.",
    "en_def": "the special feature that makes a product different",
    "cn_def": "獨特賣點"
  },
  "focus group": {
    "pos": "n.phr.",
    "en_def": "a small group asked to give opinions on a product",
    "cn_def": "焦點團體"
  },
  "questionnaire": {
    "pos": "n.",
    "en_def": "a list of written questions to collect opinions",
    "cn_def": "問卷"
  },
  "consumer behaviour": {
    "pos": "n.phr.",
    "en_def": "the way people choose and buy things",
    "cn_def": "消費者行為"
  },
  "marketing mix": {
    "pos": "n.phr.",
    "en_def": "the combination of product, price, place and promotion",
    "cn_def": "行銷組合"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card that gives regular customers rewards",
    "cn_def": "集點卡；會員卡"
  },
  "sponsorship": {
    "pos": "n.",
    "en_def": "money a company gives to an event in return for advertising",
    "cn_def": "贊助"
  },
  "resourcefulness": {
    "pos": "n.",
    "en_def": "the ability to find clever ways to solve problems",
    "cn_def": "足智多謀；應變能力"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something good",
    "cn_def": "機會"
  },
  "crowdsourcing": {
    "pos": "n.",
    "en_def": "getting ideas or work from a large group of people online",
    "cn_def": "群眾外包"
  },
  "pay rise": {
    "pos": "n.phr.",
    "en_def": "an increase in the money you earn",
    "cn_def": "加薪"
  },
  "developing country": {
    "pos": "n.phr.",
    "en_def": "a poorer country that is building up its industry",
    "cn_def": "開發中國家"
  },
  "free market": {
    "pos": "n.phr.",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "cn_def": "自由市場"
  },
  "track record": {
    "pos": "n.phr.",
    "en_def": "past achievements that show how good someone is",
    "cn_def": "過往紀錄；績效"
  },
  "impulse buying": {
    "pos": "n.phr.",
    "en_def": "buying things suddenly without planning",
    "cn_def": "衝動購物"
  },
  "tax return": {
    "pos": "n.phr.",
    "en_def": "a form you send to the government about your income",
    "cn_def": "報稅單"
  },
  "purchasing power": {
    "pos": "n.phr.",
    "en_def": "how much you can buy with your money",
    "cn_def": "購買力"
  },
  "online shopping": {
    "pos": "n.phr.",
    "en_def": "buying things on the internet",
    "cn_def": "網路購物"
  },
  "job description": {
    "pos": "n.phr.",
    "en_def": "a written list of the duties of a job",
    "cn_def": "職務說明"
  },
  "supplier": {
    "pos": "n.",
    "en_def": "a company that provides goods to another company",
    "cn_def": "供應商"
  },
  "iteration": {
    "pos": "n.",
    "en_def": "one version in a series of improvements",
    "cn_def": "版本；迭代"
  },
  "founder": {
    "pos": "n.",
    "en_def": "the person who starts a company",
    "cn_def": "創辦人"
  },
  "window shopping": {
    "pos": "n.phr.",
    "en_def": "looking at goods in shops without buying",
    "cn_def": "逛街看櫥窗"
  },
  "bull market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are rising",
    "cn_def": "多頭市場"
  },
  "free trade": {
    "pos": "n.phr.",
    "en_def": "trade between countries without taxes or limits",
    "cn_def": "自由貿易"
  },
  "job interview": {
    "pos": "n.phr.",
    "en_def": "a meeting where an employer asks questions to choose a worker",
    "cn_def": "工作面試"
  },
  "angel investor": {
    "pos": "n.phr.",
    "en_def": "a rich person who gives money to a new business early",
    "cn_def": "天使投資人"
  },
  "a win-win situation": {
    "pos": "n.phr.",
    "en_def": "a result that is good for everyone involved",
    "cn_def": "雙贏局面"
  },
  "global market": {
    "pos": "n.phr.",
    "en_def": "buying and selling between countries all over the world",
    "cn_def": "全球市場"
  },
  "the bottom line": {
    "pos": "n.phr.",
    "en_def": "the most important fact; or the final profit",
    "cn_def": "底線；最重要的事"
  },
  "middle manager": {
    "pos": "n.phr.",
    "en_def": "a manager between top leaders and ordinary workers",
    "cn_def": "中階主管"
  },
  "complacency": {
    "pos": "n.",
    "en_def": "feeling too satisfied, so you stop trying hard",
    "cn_def": "自滿"
  },
  "onboarding": {
    "pos": "n.",
    "en_def": "helping new workers learn about their job and company",
    "cn_def": "新人到職訓練"
  },
  "profitability": {
    "pos": "n.",
    "en_def": "the ability to make a profit",
    "cn_def": "獲利能力"
  },
  "sme": {
    "pos": "n.",
    "en_def": "a small or medium-sized business",
    "cn_def": "中小企業"
  },
  "ownership": {
    "pos": "n.",
    "en_def": "the fact of owning something",
    "cn_def": "所有權"
  },
  "pricing": {
    "pos": "n.",
    "en_def": "deciding how much to charge for something",
    "cn_def": "定價"
  },
  "solvent": {
    "pos": "adj.",
    "en_def": "having enough money to pay all debts",
    "cn_def": "有償債能力的"
  },
  "overambitious": {
    "pos": "adj.",
    "en_def": "trying to do more than is possible",
    "cn_def": "野心過大的"
  },
  "cost-conscious": {
    "pos": "adj.",
    "en_def": "careful about spending money",
    "cn_def": "注重成本的"
  },
  "silicon valley": {
    "pos": "n.phr.",
    "en_def": "an area in California famous for tech companies",
    "cn_def": "矽谷"
  },
  "cartel": {
    "pos": "n.",
    "en_def": "a group of companies that agree to keep prices high",
    "cn_def": "卡特爾；聯合壟斷組織"
  },
  "consultancy": {
    "pos": "n.",
    "en_def": "a company that gives expert advice",
    "cn_def": "顧問公司"
  },
  "redundancy": {
    "pos": "n.",
    "en_def": "losing your job because it is no longer needed",
    "cn_def": "裁員；資遣"
  },
  "limited company": {
    "pos": "n.phr.",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "cn_def": "有限公司"
  },
  "shop assistant": {
    "pos": "n.phr.",
    "en_def": "a person who serves customers in a shop",
    "cn_def": "店員"
  },
  "business plan": {
    "pos": "n.phr.",
    "en_def": "a written plan of how a new business will work and make money",
    "cn_def": "營運計畫書"
  },
  "balance sheet": {
    "pos": "n.phr.",
    "en_def": "a report showing what a company owns and owes",
    "cn_def": "資產負債表"
  },
  "first-mover advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of being the first company in a new market",
    "cn_def": "先行者優勢"
  },
  "sales target": {
    "pos": "n.phr.",
    "en_def": "the amount a seller is expected to sell",
    "cn_def": "銷售目標"
  },
  "design thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems by focusing on users' real needs",
    "cn_def": "設計思考"
  },
  "product development": {
    "pos": "n.phr.",
    "en_def": "the process of creating a new product",
    "cn_def": "產品開發"
  },
  "minimum viable product": {
    "pos": "n.phr.",
    "en_def": "the simplest version of a product that people can test",
    "cn_def": "最小可行產品"
  },
  "tech giant": {
    "pos": "n.phr.",
    "en_def": "a very large and powerful technology company",
    "cn_def": "科技巨頭"
  },
  "seed funding": {
    "pos": "n.phr.",
    "en_def": "the first money a new company gets to start",
    "cn_def": "種子資金"
  },
  "stock market": {
    "pos": "n.phr.",
    "en_def": "the place where shares in companies are bought and sold",
    "cn_def": "股票市場"
  },
  "minutes": {
    "pos": "n.",
    "en_def": "a written record of what was said at a meeting",
    "cn_def": "會議紀錄"
  },
  "assertiveness": {
    "pos": "n.",
    "en_def": "speaking clearly and confidently about what you want",
    "cn_def": "自信果斷"
  },
  "unicorn": {
    "pos": "n.",
    "en_def": "a young company worth over one billion dollars",
    "cn_def": "獨角獸企業"
  },
  "sole trader": {
    "pos": "n.phr.",
    "en_def": "a person who owns and runs a business alone",
    "cn_def": "獨資經營者"
  },
  "economic growth": {
    "pos": "n.phr.",
    "en_def": "an increase in the amount of goods and services produced",
    "cn_def": "經濟成長"
  },
  "benefits package": {
    "pos": "n.phr.",
    "en_def": "all the extra things a job offers, like insurance and holidays",
    "cn_def": "福利方案"
  },
  "markup": {
    "pos": "n.",
    "en_def": "the amount added to the cost to make a profit",
    "cn_def": "加價；利潤加成"
  },
  "gdp": {
    "pos": "n.",
    "en_def": "the total value of goods and services a country produces in a year",
    "cn_def": "國內生產毛額"
  },
  "team leader": {
    "pos": "n.phr.",
    "en_def": "a person who guides a small group of workers",
    "cn_def": "組長"
  },
  "business model": {
    "pos": "n.phr.",
    "en_def": "the way a company plans to make money",
    "cn_def": "商業模式"
  },
  "business owner": {
    "pos": "n.phr.",
    "en_def": "a person who owns a company or shop",
    "cn_def": "企業主；老闆"
  },
  "performance review": {
    "pos": "n.phr.",
    "en_def": "a meeting to discuss how well someone works",
    "cn_def": "績效評估"
  },
  "department": {
    "pos": "n.",
    "en_def": "a section of a large organisation",
    "cn_def": "部門"
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person or company that sells something",
    "cn_def": "賣家；廠商"
  },
  "trade deficit": {
    "pos": "n.phr.",
    "en_def": "when a country imports more than it exports",
    "cn_def": "貿易逆差"
  },
  "bear market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are falling",
    "cn_def": "空頭市場"
  },
  "research and development": {
    "pos": "n.phr.",
    "en_def": "work to create new products and improve old ones",
    "cn_def": "研發"
  },
  "branch office": {
    "pos": "n.phr.",
    "en_def": "a smaller office of a company in another place",
    "cn_def": "分公司"
  },
  "price list": {
    "pos": "n.phr.",
    "en_def": "a list showing the prices of goods or services",
    "cn_def": "價目表"
  }
};

const EXTRA_GLOSSES = {};
