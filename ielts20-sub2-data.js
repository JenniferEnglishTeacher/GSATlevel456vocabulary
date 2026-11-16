// Topic 20 Subunit 2 Quiz Data: Money, Finance & Accounting 金錢、財務與會計
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S02 - Money, Finance & Accounting 金錢、財務與會計",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accountant",
    "pos": "n.",
    "cn_def": "會計師",
    "en_def": "a person whose job is to keep or check money records",
    "sentence": "Our {{BLANK}} checks the shop's records every month, and she told us we were spending too much on packaging.",
    "cn": "我們的會計師每個月檢查店裡的帳目，而且她告訴我們包裝花費太多了。"
  },
  {
    "word": "accounting",
    "pos": "n.",
    "cn_def": "會計",
    "en_def": "the job of keeping and checking money records",
    "sentence": "She studied {{BLANK}} at university because she is good with numbers, and now she works for a big bank.",
    "cn": "她在大學主修會計，因為她擅長數字，而現在她在一家大銀行工作。"
  },
  {
    "word": "bookkeeping",
    "pos": "n.",
    "cn_def": "記帳",
    "en_def": "recording the money a business receives and spends",
    "sentence": "Simple {{BLANK}} software helps small shop owners record every sale, so they know exactly how much money they have.",
    "cn": "簡單的記帳軟體幫助小店主記錄每一筆銷售，所以他們清楚知道自己有多少錢。"
  },
  {
    "word": "balance sheet",
    "pos": "n.phr.",
    "cn_def": "資產負債表",
    "en_def": "a report showing what a company owns and owes",
    "sentence": "The {{BLANK}} showed that the company owed more than it owned, so the investors became very worried.",
    "cn": "資產負債表顯示這家公司負債多於資產，所以投資人變得非常擔心。"
  },
  {
    "word": "cash flow",
    "pos": "n.phr.",
    "cn_def": "現金流",
    "en_def": "money moving into and out of a business",
    "sentence": "The shop sells a lot in December, but its {{BLANK}} is weak in summer, so the owner saves money in advance.",
    "cn": "這家店在十二月賣得很多，但夏天的現金流很弱，所以老闆會預先存錢。"
  },
  {
    "word": "down payment",
    "pos": "n.phr.",
    "cn_def": "頭期款",
    "en_def": "the first part of the price paid when buying something big",
    "sentence": "My parents saved for ten years to make a {{BLANK}} on a flat, and they will pay the rest over twenty years.",
    "cn": "我爸媽存了十年的錢來支付一間公寓的頭期款，而剩下的款項他們會在二十年內付清。"
  },
  {
    "word": "interest rate",
    "pos": "n.phr.",
    "cn_def": "利率",
    "en_def": "the percentage paid for borrowing money",
    "sentence": "When the bank raised its {{BLANK}}, many families paid more for their homes, so they cut down on eating out.",
    "cn": "當銀行調高利率時，許多家庭的房貸支出變多，所以他們減少外食。"
  },
  {
    "word": "debt",
    "pos": "n.",
    "cn_def": "債務",
    "en_def": "money that you owe to someone",
    "sentence": "He used three credit cards at the same time, and soon he was in serious {{BLANK}} that took years to pay back.",
    "cn": "他同時使用三張信用卡，很快他就陷入了花好幾年才還清的嚴重債務中。"
  },
  {
    "word": "credit card",
    "pos": "n.phr.",
    "cn_def": "信用卡",
    "en_def": "a plastic card used to buy things and pay later",
    "sentence": "Paying with a {{BLANK}} is convenient, but you should pay the full bill each month or the bank charges extra.",
    "cn": "用信用卡付款很方便，但你應該每個月付清全額帳單，否則銀行會額外收費。"
  },
  {
    "word": "invoice",
    "pos": "n.",
    "cn_def": "請款單；發票",
    "en_def": "a document asking a customer to pay for goods or work",
    "sentence": "The designer sent the client an {{BLANK}} after finishing the logo, but she still had not been paid two months later.",
    "cn": "設計師完成標誌後寄給客戶一張請款單，但兩個月後她仍然沒有收到款項。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a paper showing that you have paid for something",
    "sentence": "Please keep your {{BLANK}} in case the shoes do not fit, because the shop will not return your money without it.",
    "cn": "請保留你的收據以防鞋子不合腳，因為沒有收據店家不會退款。"
  },
  {
    "word": "tax return",
    "pos": "n.phr.",
    "cn_def": "報稅單",
    "en_def": "a form you send to the government about your income",
    "sentence": "Every May my father fills in his {{BLANK}} online, and he is always happy when he gets some money back.",
    "cn": "每年五月我爸爸都在網路上填寫他的報稅單，而且他拿到退稅時總是很開心。"
  },
  {
    "word": "auditor",
    "pos": "n.",
    "cn_def": "稽核員；審計師",
    "en_def": "a person who officially checks a company's accounts",
    "sentence": "The {{BLANK}} found several mistakes in the company's records, so the managers had to explain where the money went.",
    "cn": "稽核員在公司的紀錄中發現了好幾個錯誤，所以經理們必須解釋錢的去向。"
  },
  {
    "word": "net profit",
    "pos": "n.phr.",
    "cn_def": "淨利",
    "en_def": "the money left after all costs are paid",
    "sentence": "The café sold a lot of drinks this year, but its {{BLANK}} was small because rent and wages were so high.",
    "cn": "這家咖啡店今年賣出很多飲料，但它的淨利很少，因為租金和薪資太高了。"
  },
  {
    "word": "earnings",
    "pos": "n.",
    "cn_def": "收入；盈餘",
    "en_def": "money that a person or company earns",
    "sentence": "The company's {{BLANK}} rose by ten percent this year, so every worker received a small extra payment.",
    "cn": "這家公司今年的盈餘成長了百分之十，所以每位員工都得到一筆小額的額外款項。"
  },
  {
    "word": "financial year",
    "pos": "n.phr.",
    "cn_def": "會計年度",
    "en_def": "the twelve months a company uses for its accounts",
    "sentence": "At the end of the {{BLANK}}, the team counts every sale, and then the boss decides next year's budget.",
    "cn": "在會計年度結束時，團隊會統計每一筆銷售，然後老闆決定明年的預算。"
  },
  {
    "word": "quarter",
    "pos": "n.",
    "cn_def": "季度",
    "en_def": "a period of three months in a business year",
    "sentence": "Sales were poor in the first {{BLANK}}, but they improved after the summer campaign, so the year ended well.",
    "cn": "第一季度的銷售很差，但在夏季活動後有所改善，所以這一年結束得很好。"
  },
  {
    "word": "stock market",
    "pos": "n.phr.",
    "cn_def": "股票市場",
    "en_def": "the place where shares in companies are bought and sold",
    "sentence": "My grandfather has put money into the {{BLANK}} for thirty years, but he never buys shares he does not understand.",
    "cn": "我爺爺把錢投入股票市場已經三十年了，但他從不買自己不了解的股票。"
  },
  {
    "word": "share price",
    "pos": "n.phr.",
    "cn_def": "股價",
    "en_def": "the cost of one share in a company",
    "sentence": "The {{BLANK}} fell sharply after the phone caught fire, and investors lost a lot of money that week.",
    "cn": "在那款手機起火後股價大跌，投資人那週損失了很多錢。"
  },
  {
    "word": "stock exchange",
    "pos": "n.phr.",
    "cn_def": "證券交易所",
    "en_def": "an organisation where company shares are traded",
    "sentence": "The company joined the {{BLANK}} last year, so now anyone can buy a small part of it.",
    "cn": "這家公司去年在證券交易所上市，所以現在任何人都可以買下它的一小部分。"
  },
  {
    "word": "stockbroker",
    "pos": "n.",
    "cn_def": "股票經紀人",
    "en_def": "a person who buys and sells shares for other people",
    "sentence": "Instead of paying a {{BLANK}}, many young people now use apps to buy shares, but some lose money quickly.",
    "cn": "許多年輕人現在不付錢給股票經紀人，而是用應用程式買股票，但有些人很快就賠錢。"
  },
  {
    "word": "crowdfunding",
    "pos": "n.",
    "cn_def": "群眾募資",
    "en_def": "raising money from many people, usually online",
    "sentence": "The students used {{BLANK}} to pay for their robot, and more than three hundred strangers gave small amounts online.",
    "cn": "學生們利用群眾募資來支付機器人的費用，而且有超過三百位陌生人在網路上捐了小額款項。"
  },
  {
    "word": "venture capital",
    "pos": "n.phr.",
    "cn_def": "創業投資",
    "en_def": "money invested in new companies with high risk",
    "sentence": "The start-up received {{BLANK}} from a big fund, so it could hire twenty engineers in one year.",
    "cn": "這家新創公司獲得了一筆大型基金的創業投資，所以一年內就能雇用二十名工程師。"
  },
  {
    "word": "angel investor",
    "pos": "n.phr.",
    "cn_def": "天使投資人",
    "en_def": "a rich person who gives money to a new business early",
    "sentence": "An {{BLANK}} gave them their first million dollars, and she also helped them find good staff.",
    "cn": "一位天使投資人給了他們第一筆一百萬美元，而且她也幫助他們找到好員工。"
  },
  {
    "word": "overdraft",
    "pos": "n.",
    "cn_def": "透支",
    "en_def": "money you take out of a bank beyond what is in your account",
    "sentence": "The shop used its {{BLANK}} to pay suppliers in a bad month, but the bank charged high fees for it.",
    "cn": "這家店在生意差的月份用透支付款給供應商，但銀行為此收取高額費用。"
  },
  {
    "word": "cryptocurrency",
    "pos": "n.",
    "cn_def": "加密貨幣",
    "en_def": "digital money that is not controlled by a bank",
    "sentence": "Some shops now accept {{BLANK}} as payment, but its value changes so fast that many owners still prefer cash.",
    "cn": "有些商店現在接受用加密貨幣付款，但它的價值變化太快，所以許多店主仍偏好現金。"
  },
  {
    "word": "lender",
    "pos": "n.",
    "cn_def": "放款人；貸方",
    "en_def": "a person or bank that lends money",
    "sentence": "The {{BLANK}} refused to give him more money because he had not paid back his last loan on time.",
    "cn": "放款人拒絕再借他錢，因為他沒有準時還清上一筆貸款。"
  },
  {
    "word": "repay",
    "pos": "v.",
    "cn_def": "償還",
    "en_def": "to pay back money you borrowed",
    "sentence": "She promised to {{BLANK}} the money within a year, and she worked weekends at a café so she could keep her promise.",
    "cn": "她承諾在一年內償還這筆錢，而且她週末在咖啡店打工以便信守承諾。"
  },
  {
    "word": "expense",
    "pos": "n.",
    "cn_def": "費用；開支",
    "en_def": "money spent on something",
    "sentence": "Travel is the biggest {{BLANK}} for our sales team, so the company now holds more meetings online.",
    "cn": "交通是我們業務團隊最大的開支，所以公司現在更多會議改在線上舉行。"
  },
  {
    "word": "fundraising",
    "pos": "n.",
    "cn_def": "募款",
    "en_def": "collecting money for a cause or project",
    "sentence": "The school's {{BLANK}} event raised enough money for a new library, and parents baked cakes to sell.",
    "cn": "學校的募款活動籌到足夠的錢蓋新圖書館，而且家長們烤了蛋糕來義賣。"
  }
];

const MCQS = [
  {
    "q": "Our _____ checks the shop's records every month, and she told us we were spending too much on packaging.",
    "options": [
      "delegation",
      "multinational",
      "creditor",
      "accountant"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "She studied _____ at university because she is good with numbers, and now she works for a big bank.",
    "options": [
      "upstart",
      "accounting",
      "cartel",
      "cutback"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Simple _____ software helps small shop owners record every sale, so they know exactly how much money they have.",
    "options": [
      "bookkeeping",
      "fintech",
      "oversupply",
      "proceeds"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The _____ showed that the company owed more than it owned, so the investors became very worried.",
    "options": [
      "job description",
      "free shipping",
      "balance sheet",
      "unique selling point"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The shop sells a lot in December, but its _____ is weak in summer, so the owner saves money in advance.",
    "options": [
      "exchange rate",
      "product development",
      "sales pitch",
      "cash flow"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "My parents saved for ten years to make a _____ on a flat, and they will pay the rest over twenty years.",
    "options": [
      "bull market",
      "online shopping",
      "down payment",
      "customer service"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "When the bank raised its _____, many families paid more for their homes, so they cut down on eating out.",
    "options": [
      "Silicon Valley",
      "interest rate",
      "economic growth",
      "minimum viable product"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "He used three credit cards at the same time, and soon he was in serious _____ that took years to pay back.",
    "options": [
      "debt",
      "confidence",
      "know-how",
      "bargaining"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Paying with a _____ is convenient, but you should pay the full bill each month or the bank charges extra.",
    "options": [
      "product development",
      "work-life balance",
      "credit card",
      "free shipping"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The designer sent the client an _____ after finishing the logo, but she still had not been paid two months later.",
    "options": [
      "confidence",
      "invoice",
      "franchise",
      "arrears"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Please keep your _____ in case the shoes do not fit, because the shop will not return your money without it.",
    "options": [
      "receipt",
      "dynamism",
      "upstart",
      "occupation"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Every May my father fills in his _____ online, and he is always happy when he gets some money back.",
    "options": [
      "track record",
      "after-sales service",
      "limited company",
      "tax return"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The _____ found several mistakes in the company's records, so the managers had to explain where the money went.",
    "options": [
      "auditor",
      "creditor",
      "dedication",
      "punctuality"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The café sold a lot of drinks this year, but its _____ was small because rent and wages were so high.",
    "options": [
      "middle manager",
      "economic crisis",
      "net profit",
      "product development"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The company's _____ rose by ten percent this year, so every worker received a small extra payment.",
    "options": [
      "financier",
      "oversupply",
      "headquarters",
      "earnings"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "At the end of the _____, the team counts every sale, and then the boss decides next year's budget.",
    "options": [
      "trade deal",
      "financial year",
      "price cut",
      "lump sum"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Sales were poor in the first _____, but they improved after the summer campaign, so the year ended well.",
    "options": [
      "cartel",
      "supplier",
      "resourcefulness",
      "quarter"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "My grandfather has put money into the _____ for thirty years, but he never buys shares he does not understand.",
    "options": [
      "free market",
      "Silicon Valley",
      "stock market",
      "bear market"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The _____ fell sharply after the phone caught fire, and investors lost a lot of money that week.",
    "options": [
      "share price",
      "performance review",
      "online review",
      "target market"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The company joined the _____ last year, so now anyone can buy a small part of it.",
    "options": [
      "pitch deck",
      "stock exchange",
      "trade deficit",
      "business model"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Instead of paying a _____, many young people now use apps to buy shares, but some lose money quickly.",
    "options": [
      "firm",
      "proceeds",
      "oversupply",
      "stockbroker"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The students used _____ to pay for their robot, and more than three hundred strangers gave small amounts online.",
    "options": [
      "crowdfunding",
      "arrangement",
      "profiteering",
      "adaptability"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The start-up received _____ from a big fund, so it could hire twenty engineers in one year.",
    "options": [
      "branch office",
      "click-through rate",
      "venture capital",
      "trade route"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "An _____ gave them their first million dollars, and she also helped them find good staff.",
    "options": [
      "price war",
      "angel investor",
      "consumer behaviour",
      "exchange rate"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The shop used its _____ to pay suppliers in a bad month, but the bank charged high fees for it.",
    "options": [
      "punctuality",
      "iteration",
      "surcharge",
      "overdraft"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Some shops now accept _____ as payment, but its value changes so fast that many owners still prefer cash.",
    "options": [
      "cryptocurrency",
      "merger",
      "oversupply",
      "boss"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The _____ refused to give him more money because he had not paid back his last loan on time.",
    "options": [
      "upturn",
      "lender",
      "client",
      "protectionism"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "She promised to _____ the money within a year, and she worked weekends at a café so she could keep her promise.",
    "options": [
      "hike",
      "deduct",
      "repay",
      "inflate"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Travel is the biggest _____ for our sales team, so the company now holds more meetings online.",
    "options": [
      "expense",
      "copycat",
      "franchise",
      "affiliation"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The school's _____ event raised enough money for a new library, and parents baked cakes to sell.",
    "options": [
      "professionalism",
      "fundraising",
      "turnaround",
      "vendor"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "accountant": {
    "pos": "n.",
    "en_def": "a person whose job is to keep or check money records",
    "cn_def": "會計師"
  },
  "accounting": {
    "pos": "n.",
    "en_def": "the job of keeping and checking money records",
    "cn_def": "會計"
  },
  "bookkeeping": {
    "pos": "n.",
    "en_def": "recording the money a business receives and spends",
    "cn_def": "記帳"
  },
  "balance sheet": {
    "pos": "n.phr.",
    "en_def": "a report showing what a company owns and owes",
    "cn_def": "資產負債表"
  },
  "cash flow": {
    "pos": "n.phr.",
    "en_def": "money moving into and out of a business",
    "cn_def": "現金流"
  },
  "down payment": {
    "pos": "n.phr.",
    "en_def": "the first part of the price paid when buying something big",
    "cn_def": "頭期款"
  },
  "interest rate": {
    "pos": "n.phr.",
    "en_def": "the percentage paid for borrowing money",
    "cn_def": "利率"
  },
  "debt": {
    "pos": "n.",
    "en_def": "money that you owe to someone",
    "cn_def": "債務"
  },
  "credit card": {
    "pos": "n.phr.",
    "en_def": "a plastic card used to buy things and pay later",
    "cn_def": "信用卡"
  },
  "invoice": {
    "pos": "n.",
    "en_def": "a document asking a customer to pay for goods or work",
    "cn_def": "請款單；發票"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a paper showing that you have paid for something",
    "cn_def": "收據"
  },
  "tax return": {
    "pos": "n.phr.",
    "en_def": "a form you send to the government about your income",
    "cn_def": "報稅單"
  },
  "auditor": {
    "pos": "n.",
    "en_def": "a person who officially checks a company's accounts",
    "cn_def": "稽核員；審計師"
  },
  "net profit": {
    "pos": "n.phr.",
    "en_def": "the money left after all costs are paid",
    "cn_def": "淨利"
  },
  "earnings": {
    "pos": "n.",
    "en_def": "money that a person or company earns",
    "cn_def": "收入；盈餘"
  },
  "financial year": {
    "pos": "n.phr.",
    "en_def": "the twelve months a company uses for its accounts",
    "cn_def": "會計年度"
  },
  "quarter": {
    "pos": "n.",
    "en_def": "a period of three months in a business year",
    "cn_def": "季度"
  },
  "stock market": {
    "pos": "n.phr.",
    "en_def": "the place where shares in companies are bought and sold",
    "cn_def": "股票市場"
  },
  "share price": {
    "pos": "n.phr.",
    "en_def": "the cost of one share in a company",
    "cn_def": "股價"
  },
  "stock exchange": {
    "pos": "n.phr.",
    "en_def": "an organisation where company shares are traded",
    "cn_def": "證券交易所"
  },
  "stockbroker": {
    "pos": "n.",
    "en_def": "a person who buys and sells shares for other people",
    "cn_def": "股票經紀人"
  },
  "crowdfunding": {
    "pos": "n.",
    "en_def": "raising money from many people, usually online",
    "cn_def": "群眾募資"
  },
  "venture capital": {
    "pos": "n.phr.",
    "en_def": "money invested in new companies with high risk",
    "cn_def": "創業投資"
  },
  "angel investor": {
    "pos": "n.phr.",
    "en_def": "a rich person who gives money to a new business early",
    "cn_def": "天使投資人"
  },
  "overdraft": {
    "pos": "n.",
    "en_def": "money you take out of a bank beyond what is in your account",
    "cn_def": "透支"
  },
  "cryptocurrency": {
    "pos": "n.",
    "en_def": "digital money that is not controlled by a bank",
    "cn_def": "加密貨幣"
  },
  "lender": {
    "pos": "n.",
    "en_def": "a person or bank that lends money",
    "cn_def": "放款人；貸方"
  },
  "repay": {
    "pos": "v.",
    "en_def": "to pay back money you borrowed",
    "cn_def": "償還"
  },
  "expense": {
    "pos": "n.",
    "en_def": "money spent on something",
    "cn_def": "費用；開支"
  },
  "fundraising": {
    "pos": "n.",
    "en_def": "collecting money for a cause or project",
    "cn_def": "募款"
  },
  "delegation": {
    "pos": "n.",
    "en_def": "giving part of your work to someone else",
    "cn_def": "授權；分派工作"
  },
  "multinational": {
    "pos": "n.",
    "en_def": "a large company that works in many countries",
    "cn_def": "跨國公司"
  },
  "creditor": {
    "pos": "n.",
    "en_def": "a person or company that is owed money",
    "cn_def": "債權人"
  },
  "upstart": {
    "pos": "n.",
    "en_def": "a new and confident company that challenges older ones",
    "cn_def": "新貴；後起之秀"
  },
  "cartel": {
    "pos": "n.",
    "en_def": "a group of companies that agree to keep prices high",
    "cn_def": "卡特爾；聯合壟斷組織"
  },
  "cutback": {
    "pos": "n.",
    "en_def": "a reduction in spending or staff",
    "cn_def": "削減"
  },
  "fintech": {
    "pos": "n.",
    "en_def": "technology used to provide financial services",
    "cn_def": "金融科技"
  },
  "oversupply": {
    "pos": "n.",
    "en_def": "too much of something for the demand",
    "cn_def": "供過於求"
  },
  "proceeds": {
    "pos": "n.",
    "en_def": "money received from selling something or an event",
    "cn_def": "收益"
  },
  "job description": {
    "pos": "n.phr.",
    "en_def": "a written list of the duties of a job",
    "cn_def": "職務說明"
  },
  "free shipping": {
    "pos": "n.phr.",
    "en_def": "delivery without any charge",
    "cn_def": "免運費"
  },
  "unique selling point": {
    "pos": "n.phr.",
    "en_def": "the special feature that makes a product different",
    "cn_def": "獨特賣點"
  },
  "exchange rate": {
    "pos": "n.phr.",
    "en_def": "the value of one currency compared with another",
    "cn_def": "匯率"
  },
  "product development": {
    "pos": "n.phr.",
    "en_def": "the process of creating a new product",
    "cn_def": "產品開發"
  },
  "sales pitch": {
    "pos": "n.phr.",
    "en_def": "a talk that tries to persuade someone to buy",
    "cn_def": "推銷話術"
  },
  "bull market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are rising",
    "cn_def": "多頭市場"
  },
  "online shopping": {
    "pos": "n.phr.",
    "en_def": "buying things on the internet",
    "cn_def": "網路購物"
  },
  "customer service": {
    "pos": "n.phr.",
    "en_def": "help that a company gives to its customers",
    "cn_def": "客戶服務"
  },
  "silicon valley": {
    "pos": "n.phr.",
    "en_def": "an area in California famous for tech companies",
    "cn_def": "矽谷"
  },
  "economic growth": {
    "pos": "n.phr.",
    "en_def": "an increase in the amount of goods and services produced",
    "cn_def": "經濟成長"
  },
  "minimum viable product": {
    "pos": "n.phr.",
    "en_def": "the simplest version of a product that people can test",
    "cn_def": "最小可行產品"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "a feeling that you can trust someone or something",
    "cn_def": "信心"
  },
  "know-how": {
    "pos": "n.",
    "en_def": "practical knowledge and skill",
    "cn_def": "專業技術；訣竅"
  },
  "bargaining": {
    "pos": "n.",
    "en_def": "discussing to reach an agreement about price or pay",
    "cn_def": "談判；議價"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "franchise": {
    "pos": "n.",
    "en_def": "the right to sell a company's products under its name",
    "cn_def": "加盟經營權"
  },
  "arrears": {
    "pos": "n.",
    "en_def": "money that should already have been paid",
    "cn_def": "欠款"
  },
  "dynamism": {
    "pos": "n.",
    "en_def": "energy and new ideas",
    "cn_def": "活力；動力"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "a person's job",
    "cn_def": "職業"
  },
  "track record": {
    "pos": "n.phr.",
    "en_def": "past achievements that show how good someone is",
    "cn_def": "過往紀錄；績效"
  },
  "after-sales service": {
    "pos": "n.phr.",
    "en_def": "help a company gives after you buy something",
    "cn_def": "售後服務"
  },
  "limited company": {
    "pos": "n.phr.",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "cn_def": "有限公司"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment",
    "cn_def": "奉獻；專注投入"
  },
  "punctuality": {
    "pos": "n.",
    "en_def": "being on time",
    "cn_def": "準時"
  },
  "middle manager": {
    "pos": "n.phr.",
    "en_def": "a manager between top leaders and ordinary workers",
    "cn_def": "中階主管"
  },
  "economic crisis": {
    "pos": "n.phr.",
    "en_def": "a time when an economy suddenly becomes very weak",
    "cn_def": "經濟危機"
  },
  "financier": {
    "pos": "n.",
    "en_def": "a person who provides large amounts of money for business",
    "cn_def": "金融家"
  },
  "headquarters": {
    "pos": "n.",
    "en_def": "the main office of a large company",
    "cn_def": "總部"
  },
  "trade deal": {
    "pos": "n.phr.",
    "en_def": "an agreement between countries about buying and selling goods",
    "cn_def": "貿易協定"
  },
  "price cut": {
    "pos": "n.phr.",
    "en_def": "a reduction in the price of something",
    "cn_def": "降價"
  },
  "lump sum": {
    "pos": "n.phr.",
    "en_def": "a large amount of money paid at one time",
    "cn_def": "一次付清的款項"
  },
  "supplier": {
    "pos": "n.",
    "en_def": "a company that provides goods to another company",
    "cn_def": "供應商"
  },
  "resourcefulness": {
    "pos": "n.",
    "en_def": "the ability to find clever ways to solve problems",
    "cn_def": "足智多謀；應變能力"
  },
  "free market": {
    "pos": "n.phr.",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "cn_def": "自由市場"
  },
  "bear market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are falling",
    "cn_def": "空頭市場"
  },
  "performance review": {
    "pos": "n.phr.",
    "en_def": "a meeting to discuss how well someone works",
    "cn_def": "績效評估"
  },
  "online review": {
    "pos": "n.phr.",
    "en_def": "an opinion about a product or place posted on the internet",
    "cn_def": "網路評論"
  },
  "target market": {
    "pos": "n.phr.",
    "en_def": "the group of people a product is made for",
    "cn_def": "目標市場"
  },
  "pitch deck": {
    "pos": "n.phr.",
    "en_def": "a set of slides used to present a business idea",
    "cn_def": "募資簡報"
  },
  "trade deficit": {
    "pos": "n.phr.",
    "en_def": "when a country imports more than it exports",
    "cn_def": "貿易逆差"
  },
  "business model": {
    "pos": "n.phr.",
    "en_def": "the way a company plans to make money",
    "cn_def": "商業模式"
  },
  "firm": {
    "pos": "n.",
    "en_def": "a company, especially a small or professional one",
    "cn_def": "公司；事務所"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "an agreement about how something will be done",
    "cn_def": "安排；協議"
  },
  "profiteering": {
    "pos": "n.",
    "en_def": "making unfair profits, especially in hard times",
    "cn_def": "牟取暴利"
  },
  "adaptability": {
    "pos": "n.",
    "en_def": "the ability to change to suit new situations",
    "cn_def": "適應力"
  },
  "branch office": {
    "pos": "n.phr.",
    "en_def": "a smaller office of a company in another place",
    "cn_def": "分公司"
  },
  "click-through rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who click on an online advert",
    "cn_def": "點擊率"
  },
  "trade route": {
    "pos": "n.phr.",
    "en_def": "a path used to move goods between places",
    "cn_def": "貿易路線"
  },
  "price war": {
    "pos": "n.phr.",
    "en_def": "when companies keep cutting prices to beat each other",
    "cn_def": "價格戰"
  },
  "consumer behaviour": {
    "pos": "n.phr.",
    "en_def": "the way people choose and buy things",
    "cn_def": "消費者行為"
  },
  "iteration": {
    "pos": "n.",
    "en_def": "one version in a series of improvements",
    "cn_def": "版本；迭代"
  },
  "surcharge": {
    "pos": "n.",
    "en_def": "an extra amount added to the usual price",
    "cn_def": "附加費"
  },
  "merger": {
    "pos": "n.",
    "en_def": "when two companies join to become one",
    "cn_def": "合併"
  },
  "boss": {
    "pos": "n.",
    "en_def": "the person who is in charge of you at work",
    "cn_def": "老闆；上司"
  },
  "upturn": {
    "pos": "n.",
    "en_def": "an improvement in business or the economy",
    "cn_def": "好轉；上揚"
  },
  "client": {
    "pos": "n.",
    "en_def": "a person or company that pays for professional services",
    "cn_def": "客戶"
  },
  "protectionism": {
    "pos": "n.",
    "en_def": "protecting home industries by taxing foreign goods",
    "cn_def": "貿易保護主義"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to increase prices or taxes suddenly",
    "cn_def": "調漲；大幅提高"
  },
  "deduct": {
    "pos": "v.",
    "en_def": "to take an amount away from a total",
    "cn_def": "扣除"
  },
  "inflate": {
    "pos": "v.",
    "en_def": "to make prices or numbers higher than they should be",
    "cn_def": "抬高；灌水"
  },
  "copycat": {
    "pos": "n.",
    "en_def": "a person or company that copies another's idea",
    "cn_def": "模仿者"
  },
  "affiliation": {
    "pos": "n.",
    "en_def": "an official connection with a group or company",
    "cn_def": "隸屬關係"
  },
  "professionalism": {
    "pos": "n.",
    "en_def": "the skill and good behaviour expected at work",
    "cn_def": "專業素養"
  },
  "turnaround": {
    "pos": "n.",
    "en_def": "a big improvement after a bad period",
    "cn_def": "好轉；轉虧為盈"
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person or company that sells something",
    "cn_def": "賣家；廠商"
  }
};

const EXTRA_GLOSSES = {};
