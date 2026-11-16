// Topic 20 Subunit 4 Quiz Data: Sales, Customers & Retail 銷售、顧客與零售
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S04 - Sales, Customers & Retail 銷售、顧客與零售",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客",
    "en_def": "a person who buys goods or services",
    "sentence": "The shop owner greets every {{BLANK}} by name, so people feel welcome and keep coming back.",
    "cn": "店主會叫出每位顧客的名字打招呼，所以人們覺得受歡迎並且一再回來。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "客戶",
    "en_def": "a person or company that pays for professional services",
    "sentence": "The designer met her {{BLANK}} in a café to show the first drawings, and he asked for a few small changes.",
    "cn": "設計師在咖啡店與她的客戶見面展示初稿，而他要求做幾處小修改。"
  },
  {
    "word": "customer service",
    "pos": "n.phr.",
    "cn_def": "客戶服務",
    "en_def": "help that a company gives to its customers",
    "sentence": "The airline's {{BLANK}} was so slow that I waited forty minutes on the phone, but the staff were finally very kind.",
    "cn": "這家航空公司的客戶服務太慢了，我在電話上等了四十分鐘，但工作人員最後非常親切。"
  },
  {
    "word": "salesperson",
    "pos": "n.",
    "cn_def": "銷售員",
    "en_def": "a person whose job is selling things",
    "sentence": "The {{BLANK}} explained every feature of the laptop patiently, so my father decided to buy it that afternoon.",
    "cn": "銷售員耐心解說筆電的每項功能，所以我爸爸那天下午就決定買了。"
  },
  {
    "word": "sales target",
    "pos": "n.phr.",
    "cn_def": "銷售目標",
    "en_def": "the amount a seller is expected to sell",
    "sentence": "Our team reached its {{BLANK}} two weeks early, so the manager took everyone out for dinner.",
    "cn": "我們團隊提早兩週達成銷售目標，所以經理請大家出去吃晚餐。"
  },
  {
    "word": "shop assistant",
    "pos": "n.phr.",
    "cn_def": "店員",
    "en_def": "a person who serves customers in a shop",
    "sentence": "The {{BLANK}} helped me find a smaller size, and she even checked the other branch when it was sold out.",
    "cn": "店員幫我找了小一號的尺寸，而且在賣完時她甚至幫我查了另一家分店。"
  },
  {
    "word": "checkout",
    "pos": "n.",
    "cn_def": "結帳櫃檯",
    "en_def": "the place in a shop where you pay",
    "sentence": "There was a long queue at the {{BLANK}}, so I used the self-service machine and left the store quickly.",
    "cn": "結帳櫃檯排了很長的隊，所以我用了自助結帳機並很快離開商店。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money returned to a customer",
    "sentence": "The headphones stopped working after two days, so I took them back and asked for a full {{BLANK}}.",
    "cn": "耳機用了兩天就壞了，所以我拿回去要求全額退款。"
  },
  {
    "word": "return policy",
    "pos": "n.phr.",
    "cn_def": "退貨政策",
    "en_def": "a shop's rules about taking back goods",
    "sentence": "The store has a generous {{BLANK}}, so you can bring clothes back within thirty days if you keep the label.",
    "cn": "這家店有寬鬆的退貨政策，所以只要保留標籤，你可以在三十天內退回衣服。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固",
    "en_def": "a written promise to repair a product if it breaks",
    "sentence": "The washing machine has a two-year {{BLANK}}, so the company repaired it for free when it started leaking.",
    "cn": "這台洗衣機有兩年保固，所以它開始漏水時公司免費修好了。"
  },
  {
    "word": "after-sales service",
    "pos": "n.phr.",
    "cn_def": "售後服務",
    "en_def": "help a company gives after you buy something",
    "sentence": "Good {{BLANK}} is important for expensive products, because customers want help if something goes wrong.",
    "cn": "良好的售後服務對昂貴產品很重要，因為顧客希望出問題時能得到協助。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "投訴；抱怨",
    "en_def": "a statement that something is wrong or unfair",
    "sentence": "The hotel received a {{BLANK}} about noise from the bar, so the manager closed it earlier on weeknights.",
    "cn": "飯店接到關於酒吧噪音的投訴，所以經理讓它在平日提早打烊。"
  },
  {
    "word": "online review",
    "pos": "n.phr.",
    "cn_def": "網路評論",
    "en_def": "an opinion about a product or place posted on the internet",
    "sentence": "One bad {{BLANK}} can scare away customers, so many restaurants reply politely to every comment.",
    "cn": "一則負面的網路評論就可能嚇跑顧客，所以許多餐廳會禮貌回覆每一則留言。"
  },
  {
    "word": "bargain",
    "pos": "n.",
    "cn_def": "便宜貨；划算的東西",
    "en_def": "something bought for less than its usual price",
    "sentence": "The jacket was a real {{BLANK}} at half price, and I have worn it almost every day this winter.",
    "cn": "這件夾克半價買真是划算，而且我這個冬天幾乎每天都穿它。"
  },
  {
    "word": "haggle",
    "pos": "v.",
    "cn_def": "討價還價",
    "en_def": "to argue about the price of something",
    "sentence": "Tourists often {{BLANK}} with the sellers at the night market, but some stalls have fixed prices on signs.",
    "cn": "遊客常在夜市和攤販討價還價，但有些攤位在招牌上標有固定價格。"
  },
  {
    "word": "price list",
    "pos": "n.phr.",
    "cn_def": "價目表",
    "en_def": "a list showing the prices of goods or services",
    "sentence": "The hair salon put its {{BLANK}} on the window, so customers know the cost before they walk in.",
    "cn": "這家髮廊把價目表貼在窗戶上，所以顧客進門前就知道價格。"
  },
  {
    "word": "retail price",
    "pos": "n.phr.",
    "cn_def": "零售價",
    "en_def": "the price a shop charges customers",
    "sentence": "The {{BLANK}} of the game is two thousand dollars, but online stores often sell it for less.",
    "cn": "這款遊戲的零售價是兩千元，但網路商店常常賣得更便宜。"
  },
  {
    "word": "markup",
    "pos": "n.",
    "cn_def": "加價；利潤加成",
    "en_def": "the amount added to the cost to make a profit",
    "sentence": "Restaurants put a large {{BLANK}} on drinks, so a bottle of water can cost three times more than in a shop.",
    "cn": "餐廳對飲料有很高的加價，所以一瓶水可能比商店貴三倍。"
  },
  {
    "word": "clearance sale",
    "pos": "n.phr.",
    "cn_def": "清倉拍賣",
    "en_def": "a sale to get rid of old stock cheaply",
    "sentence": "The furniture shop is closing down, so it is holding a {{BLANK}} with everything at seventy percent off.",
    "cn": "這家家具店即將歇業，所以正在舉辦全面三折的清倉拍賣。"
  },
  {
    "word": "shopping mall",
    "pos": "n.phr.",
    "cn_def": "購物中心",
    "en_def": "a large building with many shops",
    "sentence": "On rainy weekends, families crowd into the {{BLANK}} because it has cinemas, restaurants and air-conditioning.",
    "cn": "在下雨的週末，家庭們擠進購物中心，因為那裡有電影院、餐廳和冷氣。"
  },
  {
    "word": "online shopping",
    "pos": "n.phr.",
    "cn_def": "網路購物",
    "en_def": "buying things on the internet",
    "sentence": "{{BLANK}} saves time, but my grandmother still prefers the market because she likes to touch the vegetables.",
    "cn": "網路購物節省時間，但我奶奶仍偏好市場，因為她喜歡摸摸蔬菜。"
  },
  {
    "word": "shopping cart",
    "pos": "n.phr.",
    "cn_def": "購物車",
    "en_def": "a list of items you plan to buy on a website",
    "sentence": "I left three books in my online {{BLANK}} for a week, and then the shop sent me a discount code.",
    "cn": "我把三本書放在網路購物車裡一個星期，然後商店寄給我一組折扣碼。"
  },
  {
    "word": "free shipping",
    "pos": "n.phr.",
    "cn_def": "免運費",
    "en_def": "delivery without any charge",
    "sentence": "The website offers {{BLANK}} on orders over one thousand dollars, so I added a few more items to my order.",
    "cn": "這個網站訂單滿一千元就免運費，所以我在訂單裡多加了幾樣東西。"
  },
  {
    "word": "out of stock",
    "pos": "adj.phr.",
    "cn_def": "缺貨的",
    "en_def": "not available because all have been sold",
    "sentence": "The new console was {{BLANK}} in every shop, so my brother had to wait three months for one.",
    "cn": "新款遊戲主機在每家店都缺貨，所以我哥哥必須等三個月才買到。"
  },
  {
    "word": "showroom",
    "pos": "n.",
    "cn_def": "展示間",
    "en_def": "a room where goods like cars are shown to buyers",
    "sentence": "We visited the car {{BLANK}} to test-drive an electric car, but the salesperson could not answer all our questions.",
    "cn": "我們去汽車展示間試駕電動車，但銷售員無法回答我們所有的問題。"
  },
  {
    "word": "window shopping",
    "pos": "n.phr.",
    "cn_def": "逛街看櫥窗",
    "en_def": "looking at goods in shops without buying",
    "sentence": "We had no money left, so we just went {{BLANK}} along the street and dreamed about the shoes.",
    "cn": "我們沒錢了，所以只是沿著街逛街看櫥窗，夢想著那些鞋子。"
  },
  {
    "word": "impulse buying",
    "pos": "n.phr.",
    "cn_def": "衝動購物",
    "en_def": "buying things suddenly without planning",
    "sentence": "Shops put sweets next to the checkout to encourage {{BLANK}}, and children often beg their parents for them.",
    "cn": "商店把糖果放在結帳櫃檯旁來鼓勵衝動購物，而小孩常會向父母討著要。"
  },
  {
    "word": "upsell",
    "pos": "v.",
    "cn_def": "追加銷售",
    "en_def": "to persuade a customer to buy a more expensive item",
    "sentence": "The waiter tried to {{BLANK}} us a large meal with dessert, but we only wanted a light lunch.",
    "cn": "服務生試圖向我們追加銷售含甜點的大份餐點，但我們只想吃頓簡單的午餐。"
  }
];

const MCQS = [
  {
    "q": "The shop owner greets every _____ by name, so people feel welcome and keep coming back.",
    "options": [
      "customer",
      "affiliation",
      "flexitime",
      "savings"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The designer met her _____ in a café to show the first drawings, and he asked for a few small changes.",
    "options": [
      "overdraft",
      "debtor",
      "client",
      "frontrunner"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The airline's _____ was so slow that I waited forty minutes on the phone, but the staff were finally very kind.",
    "options": [
      "mission statement",
      "customer service",
      "product development",
      "celebrity endorsement"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ explained every feature of the laptop patiently, so my father decided to buy it that afternoon.",
    "options": [
      "decision-making",
      "punctuality",
      "earnings",
      "salesperson"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our team reached its _____ two weeks early, so the manager took everyone out for dinner.",
    "options": [
      "developing country",
      "sole trader",
      "sales target",
      "performance review"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The _____ helped me find a smaller size, and she even checked the other branch when it was sold out.",
    "options": [
      "shop assistant",
      "product development",
      "chain of command",
      "middle manager"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "There was a long queue at the _____, so I used the self-service machine and left the store quickly.",
    "options": [
      "professionalism",
      "staff",
      "onboarding",
      "checkout"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The headphones stopped working after two days, so I took them back and asked for a full _____.",
    "options": [
      "oversupply",
      "refund",
      "positioning",
      "stake"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The store has a generous _____, so you can bring clothes back within thirty days if you keep the label.",
    "options": [
      "the bottom line",
      "credit card",
      "return policy",
      "celebrity endorsement"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The washing machine has a two-year _____, so the company repaired it for free when it started leaking.",
    "options": [
      "warranty",
      "acknowledgement",
      "upstart",
      "liquidation"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Good _____ is important for expensive products, because customers want help if something goes wrong.",
    "options": [
      "focus group",
      "after-sales service",
      "venture capital",
      "free trade"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The hotel received a _____ about noise from the bar, so the manager closed it earlier on weeknights.",
    "options": [
      "receipt",
      "sponsorship",
      "premises",
      "complaint"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "One bad _____ can scare away customers, so many restaurants reply politely to every comment.",
    "options": [
      "business model",
      "design thinking",
      "online review",
      "Silicon Valley"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The jacket was a real _____ at half price, and I have worn it almost every day this winter.",
    "options": [
      "bargain",
      "bonus",
      "dedication",
      "debt"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Tourists often _____ with the sellers at the night market, but some stalls have fixed prices on signs.",
    "options": [
      "clinch",
      "haggle",
      "motivate",
      "reinvest"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The hair salon put its _____ on the window, so customers know the cost before they walk in.",
    "options": [
      "economic crisis",
      "benefits package",
      "trade deal",
      "price list"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ of the game is two thousand dollars, but online stores often sell it for less.",
    "options": [
      "purchasing power",
      "price cut",
      "retail price",
      "bull market"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Restaurants put a large _____ on drinks, so a bottle of water can cost three times more than in a shop.",
    "options": [
      "department",
      "markup",
      "professionalism",
      "financier"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The furniture shop is closing down, so it is holding a _____ with everything at seventy percent off.",
    "options": [
      "clearance sale",
      "brand loyalty",
      "free market",
      "market research"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "On rainy weekends, families crowd into the _____ because it has cinemas, restaurants and air-conditioning.",
    "options": [
      "pay rise",
      "click-through rate",
      "middle manager",
      "shopping mall"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "_____ saves time, but my grandmother still prefers the market because she likes to touch the vegetables.",
    "options": [
      "online shopping",
      "market research",
      "credit card",
      "click-through rate"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "I left three books in my online _____ for a week, and then the shop sent me a discount code.",
    "options": [
      "brand image",
      "job description",
      "minimum viable product",
      "shopping cart"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The website offers _____ on orders over one thousand dollars, so I added a few more items to my order.",
    "options": [
      "limited company",
      "free shipping",
      "price war",
      "free trade"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The new console was _____ in every shop, so my brother had to wait three months for one.",
    "options": [
      "pitch deck",
      "influencer marketing",
      "out of stock",
      "user experience"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "We visited the car _____ to test-drive an electric car, but the salesperson could not answer all our questions.",
    "options": [
      "founder",
      "showroom",
      "bonus",
      "fintech"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "We had no money left, so we just went _____ along the street and dreamed about the shoes.",
    "options": [
      "window shopping",
      "work-life balance",
      "marketing mix",
      "chief executive"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Shops put sweets next to the checkout to encourage _____, and children often beg their parents for them.",
    "options": [
      "down payment",
      "business owner",
      "chain of command",
      "impulse buying"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The waiter tried to _____ us a large meal with dessert, but we only wanted a light lunch.",
    "options": [
      "renegotiate",
      "pivot",
      "upsell",
      "overspend"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "顧客"
  },
  "client": {
    "pos": "n.",
    "en_def": "a person or company that pays for professional services",
    "cn_def": "客戶"
  },
  "customer service": {
    "pos": "n.phr.",
    "en_def": "help that a company gives to its customers",
    "cn_def": "客戶服務"
  },
  "salesperson": {
    "pos": "n.",
    "en_def": "a person whose job is selling things",
    "cn_def": "銷售員"
  },
  "sales target": {
    "pos": "n.phr.",
    "en_def": "the amount a seller is expected to sell",
    "cn_def": "銷售目標"
  },
  "shop assistant": {
    "pos": "n.phr.",
    "en_def": "a person who serves customers in a shop",
    "cn_def": "店員"
  },
  "checkout": {
    "pos": "n.",
    "en_def": "the place in a shop where you pay",
    "cn_def": "結帳櫃檯"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money returned to a customer",
    "cn_def": "退款"
  },
  "return policy": {
    "pos": "n.phr.",
    "en_def": "a shop's rules about taking back goods",
    "cn_def": "退貨政策"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product if it breaks",
    "cn_def": "保固"
  },
  "after-sales service": {
    "pos": "n.phr.",
    "en_def": "help a company gives after you buy something",
    "cn_def": "售後服務"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is wrong or unfair",
    "cn_def": "投訴；抱怨"
  },
  "online review": {
    "pos": "n.phr.",
    "en_def": "an opinion about a product or place posted on the internet",
    "cn_def": "網路評論"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for less than its usual price",
    "cn_def": "便宜貨；划算的東西"
  },
  "haggle": {
    "pos": "v.",
    "en_def": "to argue about the price of something",
    "cn_def": "討價還價"
  },
  "price list": {
    "pos": "n.phr.",
    "en_def": "a list showing the prices of goods or services",
    "cn_def": "價目表"
  },
  "retail price": {
    "pos": "n.phr.",
    "en_def": "the price a shop charges customers",
    "cn_def": "零售價"
  },
  "markup": {
    "pos": "n.",
    "en_def": "the amount added to the cost to make a profit",
    "cn_def": "加價；利潤加成"
  },
  "clearance sale": {
    "pos": "n.phr.",
    "en_def": "a sale to get rid of old stock cheaply",
    "cn_def": "清倉拍賣"
  },
  "shopping mall": {
    "pos": "n.phr.",
    "en_def": "a large building with many shops",
    "cn_def": "購物中心"
  },
  "online shopping": {
    "pos": "n.phr.",
    "en_def": "buying things on the internet",
    "cn_def": "網路購物"
  },
  "shopping cart": {
    "pos": "n.phr.",
    "en_def": "a list of items you plan to buy on a website",
    "cn_def": "購物車"
  },
  "free shipping": {
    "pos": "n.phr.",
    "en_def": "delivery without any charge",
    "cn_def": "免運費"
  },
  "out of stock": {
    "pos": "adj.phr.",
    "en_def": "not available because all have been sold",
    "cn_def": "缺貨的"
  },
  "showroom": {
    "pos": "n.",
    "en_def": "a room where goods like cars are shown to buyers",
    "cn_def": "展示間"
  },
  "window shopping": {
    "pos": "n.phr.",
    "en_def": "looking at goods in shops without buying",
    "cn_def": "逛街看櫥窗"
  },
  "impulse buying": {
    "pos": "n.phr.",
    "en_def": "buying things suddenly without planning",
    "cn_def": "衝動購物"
  },
  "upsell": {
    "pos": "v.",
    "en_def": "to persuade a customer to buy a more expensive item",
    "cn_def": "追加銷售"
  },
  "affiliation": {
    "pos": "n.",
    "en_def": "an official connection with a group or company",
    "cn_def": "隸屬關係"
  },
  "flexitime": {
    "pos": "n.",
    "en_def": "a system where workers choose when to start and finish",
    "cn_def": "彈性工時"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money you have kept and not spent",
    "cn_def": "存款；積蓄"
  },
  "overdraft": {
    "pos": "n.",
    "en_def": "money you take out of a bank beyond what is in your account",
    "cn_def": "透支"
  },
  "debtor": {
    "pos": "n.",
    "en_def": "a person who owes money",
    "cn_def": "債務人"
  },
  "frontrunner": {
    "pos": "n.",
    "en_def": "the person or company most likely to win",
    "cn_def": "領先者"
  },
  "mission statement": {
    "pos": "n.phr.",
    "en_def": "a short sentence about a company's main aims",
    "cn_def": "使命宣言"
  },
  "product development": {
    "pos": "n.phr.",
    "en_def": "the process of creating a new product",
    "cn_def": "產品開發"
  },
  "celebrity endorsement": {
    "pos": "n.phr.",
    "en_def": "when a famous person says they use and like a product",
    "cn_def": "名人代言"
  },
  "decision-making": {
    "pos": "n.",
    "en_def": "the process of making choices",
    "cn_def": "決策"
  },
  "punctuality": {
    "pos": "n.",
    "en_def": "being on time",
    "cn_def": "準時"
  },
  "earnings": {
    "pos": "n.",
    "en_def": "money that a person or company earns",
    "cn_def": "收入；盈餘"
  },
  "developing country": {
    "pos": "n.phr.",
    "en_def": "a poorer country that is building up its industry",
    "cn_def": "開發中國家"
  },
  "sole trader": {
    "pos": "n.phr.",
    "en_def": "a person who owns and runs a business alone",
    "cn_def": "獨資經營者"
  },
  "performance review": {
    "pos": "n.phr.",
    "en_def": "a meeting to discuss how well someone works",
    "cn_def": "績效評估"
  },
  "chain of command": {
    "pos": "n.phr.",
    "en_def": "the order of power from the top to the bottom of a group",
    "cn_def": "指揮體系"
  },
  "middle manager": {
    "pos": "n.phr.",
    "en_def": "a manager between top leaders and ordinary workers",
    "cn_def": "中階主管"
  },
  "professionalism": {
    "pos": "n.",
    "en_def": "the skill and good behaviour expected at work",
    "cn_def": "專業素養"
  },
  "staff": {
    "pos": "n.",
    "en_def": "all the people who work for an organisation",
    "cn_def": "員工；全體職員"
  },
  "onboarding": {
    "pos": "n.",
    "en_def": "helping new workers learn about their job and company",
    "cn_def": "新人到職訓練"
  },
  "oversupply": {
    "pos": "n.",
    "en_def": "too much of something for the demand",
    "cn_def": "供過於求"
  },
  "positioning": {
    "pos": "n.",
    "en_def": "how a company wants customers to see its product compared to others",
    "cn_def": "市場定位"
  },
  "stake": {
    "pos": "n.",
    "en_def": "a share in a business",
    "cn_def": "股份"
  },
  "the bottom line": {
    "pos": "n.phr.",
    "en_def": "the most important fact; or the final profit",
    "cn_def": "底線；最重要的事"
  },
  "credit card": {
    "pos": "n.phr.",
    "en_def": "a plastic card used to buy things and pay later",
    "cn_def": "信用卡"
  },
  "acknowledgement": {
    "pos": "n.",
    "en_def": "a message saying you have received something",
    "cn_def": "回執；確認通知"
  },
  "upstart": {
    "pos": "n.",
    "en_def": "a new and confident company that challenges older ones",
    "cn_def": "新貴；後起之秀"
  },
  "liquidation": {
    "pos": "n.",
    "en_def": "closing a company and selling everything to pay debts",
    "cn_def": "清算"
  },
  "focus group": {
    "pos": "n.phr.",
    "en_def": "a small group asked to give opinions on a product",
    "cn_def": "焦點團體"
  },
  "venture capital": {
    "pos": "n.phr.",
    "en_def": "money invested in new companies with high risk",
    "cn_def": "創業投資"
  },
  "free trade": {
    "pos": "n.phr.",
    "en_def": "trade between countries without taxes or limits",
    "cn_def": "自由貿易"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a paper showing that you have paid for something",
    "cn_def": "收據"
  },
  "sponsorship": {
    "pos": "n.",
    "en_def": "money a company gives to an event in return for advertising",
    "cn_def": "贊助"
  },
  "premises": {
    "pos": "n.",
    "en_def": "the building and land a business uses",
    "cn_def": "營業場所"
  },
  "business model": {
    "pos": "n.phr.",
    "en_def": "the way a company plans to make money",
    "cn_def": "商業模式"
  },
  "design thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems by focusing on users' real needs",
    "cn_def": "設計思考"
  },
  "silicon valley": {
    "pos": "n.phr.",
    "en_def": "an area in California famous for tech companies",
    "cn_def": "矽谷"
  },
  "bonus": {
    "pos": "n.",
    "en_def": "extra money added to normal pay",
    "cn_def": "獎金"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment",
    "cn_def": "奉獻；專注投入"
  },
  "debt": {
    "pos": "n.",
    "en_def": "money that you owe to someone",
    "cn_def": "債務"
  },
  "clinch": {
    "pos": "v.",
    "en_def": "to finally win or agree on something",
    "cn_def": "敲定；贏得"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard",
    "cn_def": "激勵"
  },
  "reinvest": {
    "pos": "v.",
    "en_def": "to put profits back into a business",
    "cn_def": "再投資"
  },
  "economic crisis": {
    "pos": "n.phr.",
    "en_def": "a time when an economy suddenly becomes very weak",
    "cn_def": "經濟危機"
  },
  "benefits package": {
    "pos": "n.phr.",
    "en_def": "all the extra things a job offers, like insurance and holidays",
    "cn_def": "福利方案"
  },
  "trade deal": {
    "pos": "n.phr.",
    "en_def": "an agreement between countries about buying and selling goods",
    "cn_def": "貿易協定"
  },
  "purchasing power": {
    "pos": "n.phr.",
    "en_def": "how much you can buy with your money",
    "cn_def": "購買力"
  },
  "price cut": {
    "pos": "n.phr.",
    "en_def": "a reduction in the price of something",
    "cn_def": "降價"
  },
  "bull market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are rising",
    "cn_def": "多頭市場"
  },
  "department": {
    "pos": "n.",
    "en_def": "a section of a large organisation",
    "cn_def": "部門"
  },
  "financier": {
    "pos": "n.",
    "en_def": "a person who provides large amounts of money for business",
    "cn_def": "金融家"
  },
  "brand loyalty": {
    "pos": "n.phr.",
    "en_def": "when customers keep buying the same brand",
    "cn_def": "品牌忠誠度"
  },
  "free market": {
    "pos": "n.phr.",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "cn_def": "自由市場"
  },
  "market research": {
    "pos": "n.phr.",
    "en_def": "collecting information about what customers want",
    "cn_def": "市場調查"
  },
  "pay rise": {
    "pos": "n.phr.",
    "en_def": "an increase in the money you earn",
    "cn_def": "加薪"
  },
  "click-through rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who click on an online advert",
    "cn_def": "點擊率"
  },
  "brand image": {
    "pos": "n.phr.",
    "en_def": "what people think and feel about a brand",
    "cn_def": "品牌形象"
  },
  "job description": {
    "pos": "n.phr.",
    "en_def": "a written list of the duties of a job",
    "cn_def": "職務說明"
  },
  "minimum viable product": {
    "pos": "n.phr.",
    "en_def": "the simplest version of a product that people can test",
    "cn_def": "最小可行產品"
  },
  "limited company": {
    "pos": "n.phr.",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "cn_def": "有限公司"
  },
  "price war": {
    "pos": "n.phr.",
    "en_def": "when companies keep cutting prices to beat each other",
    "cn_def": "價格戰"
  },
  "pitch deck": {
    "pos": "n.phr.",
    "en_def": "a set of slides used to present a business idea",
    "cn_def": "募資簡報"
  },
  "influencer marketing": {
    "pos": "n.phr.",
    "en_def": "paying popular online people to show a product",
    "cn_def": "網紅行銷"
  },
  "user experience": {
    "pos": "n.phr.",
    "en_def": "how easy and pleasant something is to use",
    "cn_def": "使用者體驗"
  },
  "founder": {
    "pos": "n.",
    "en_def": "the person who starts a company",
    "cn_def": "創辦人"
  },
  "fintech": {
    "pos": "n.",
    "en_def": "technology used to provide financial services",
    "cn_def": "金融科技"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "marketing mix": {
    "pos": "n.phr.",
    "en_def": "the combination of product, price, place and promotion",
    "cn_def": "行銷組合"
  },
  "chief executive": {
    "pos": "n.phr.",
    "en_def": "the person with the highest position in a company",
    "cn_def": "執行長"
  },
  "down payment": {
    "pos": "n.phr.",
    "en_def": "the first part of the price paid when buying something big",
    "cn_def": "頭期款"
  },
  "business owner": {
    "pos": "n.phr.",
    "en_def": "a person who owns a company or shop",
    "cn_def": "企業主；老闆"
  },
  "renegotiate": {
    "pos": "v.",
    "en_def": "to discuss and change an agreement again",
    "cn_def": "重新協商"
  },
  "pivot": {
    "pos": "v.",
    "en_def": "to change a business plan in a new direction",
    "cn_def": "轉型"
  },
  "overspend": {
    "pos": "v.",
    "en_def": "to spend more money than planned",
    "cn_def": "超支"
  }
};

const EXTRA_GLOSSES = {};
