// Topic 20 Subunit 7 Quiz Data: Global Trade & the Economy 全球貿易與經濟
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S07 - Global Trade & the Economy 全球貿易與經濟",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "exporter",
    "pos": "n.",
    "cn_def": "出口國；出口商",
    "en_def": "a country or company that sells goods abroad",
    "sentence": "Taiwan is a major {{BLANK}} of computer chips, so its economy depends on demand from other countries.",
    "cn": "台灣是電腦晶片的主要出口國，所以它的經濟依賴其他國家的需求。"
  },
  {
    "word": "importer",
    "pos": "n.",
    "cn_def": "進口國；進口商",
    "en_def": "a country or company that buys goods from abroad",
    "sentence": "Japan is a big {{BLANK}} of food, because it does not have enough farmland to feed everyone.",
    "cn": "日本是糧食的主要進口國，因為它沒有足夠的農地養活所有人。"
  },
  {
    "word": "free trade",
    "pos": "n.phr.",
    "cn_def": "自由貿易",
    "en_def": "trade between countries without taxes or limits",
    "sentence": "Supporters of {{BLANK}} say it makes goods cheaper, but some farmers fear they cannot compete.",
    "cn": "自由貿易的支持者說它讓商品更便宜，但有些農民擔心他們無法競爭。"
  },
  {
    "word": "trade deal",
    "pos": "n.phr.",
    "cn_def": "貿易協定",
    "en_def": "an agreement between countries about buying and selling goods",
    "sentence": "The two countries signed a {{BLANK}} last month, so fruit can now be exported without extra taxes.",
    "cn": "兩國上個月簽署了一項貿易協定，所以現在水果可以免額外關稅出口。"
  },
  {
    "word": "trade war",
    "pos": "n.phr.",
    "cn_def": "貿易戰",
    "en_def": "when countries keep raising taxes on each other's goods",
    "sentence": "During the {{BLANK}}, prices of phones and toys went up, and many factories moved to other countries.",
    "cn": "在貿易戰期間，手機和玩具的價格上漲，而且許多工廠遷往其他國家。"
  },
  {
    "word": "exchange rate",
    "pos": "n.phr.",
    "cn_def": "匯率",
    "en_def": "the value of one currency compared with another",
    "sentence": "The {{BLANK}} was good when we visited Japan, so our hotel and meals felt cheaper than usual.",
    "cn": "我們去日本時匯率很好，所以飯店和餐點感覺比平常便宜。"
  },
  {
    "word": "multinational",
    "pos": "n.",
    "cn_def": "跨國公司",
    "en_def": "a large company that works in many countries",
    "sentence": "She works for a {{BLANK}} with offices in twenty countries, so she often has meetings late at night.",
    "cn": "她在一家在二十個國家設有辦公室的跨國公司工作，所以她常在深夜開會。"
  },
  {
    "word": "GDP",
    "pos": "n.",
    "cn_def": "國內生產毛額",
    "en_def": "the total value of goods and services a country produces in a year",
    "sentence": "The country's {{BLANK}} grew by three percent last year, but many families said they did not feel richer.",
    "cn": "這個國家的國內生產毛額去年成長了百分之三，但許多家庭說他們並沒有覺得更富裕。"
  },
  {
    "word": "economic growth",
    "pos": "n.phr.",
    "cn_def": "經濟成長",
    "en_def": "an increase in the amount of goods and services produced",
    "sentence": "Fast {{BLANK}} created many new jobs, but it also caused traffic and pollution in the cities.",
    "cn": "快速的經濟成長創造了許多新工作，但它也在城市造成交通和污染問題。"
  },
  {
    "word": "economist",
    "pos": "n.",
    "cn_def": "經濟學家",
    "en_def": "an expert who studies how money and trade work",
    "sentence": "The {{BLANK}} warned that prices would keep rising, so she advised families to save more money.",
    "cn": "這位經濟學家警告物價會持續上漲，所以她建議家庭多存點錢。"
  },
  {
    "word": "purchasing power",
    "pos": "n.phr.",
    "cn_def": "購買力",
    "en_def": "how much you can buy with your money",
    "sentence": "When prices rise faster than wages, people lose {{BLANK}}, and they buy fewer things.",
    "cn": "當物價漲得比薪水快時，人們就會失去購買力，而且買的東西會變少。"
  },
  {
    "word": "price war",
    "pos": "n.phr.",
    "cn_def": "價格戰",
    "en_def": "when companies keep cutting prices to beat each other",
    "sentence": "The two bubble tea chains started a {{BLANK}}, and customers enjoyed cheap drinks for a whole month.",
    "cn": "兩家珍奶連鎖店展開了一場價格戰，而顧客享受了整整一個月的便宜飲料。"
  },
  {
    "word": "free market",
    "pos": "n.phr.",
    "cn_def": "自由市場",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "sentence": "In a {{BLANK}}, prices go up when goods are scarce, but this can hurt poor families.",
    "cn": "在自由市場中，商品稀少時價格會上漲，但這可能傷害貧困家庭。"
  },
  {
    "word": "emerging market",
    "pos": "n.phr.",
    "cn_def": "新興市場",
    "en_def": "a country whose economy is growing and developing fast",
    "sentence": "Vietnam is an {{BLANK}} with many young workers, so foreign companies are building factories there.",
    "cn": "越南是一個擁有許多年輕勞工的新興市場，所以外國公司正在那裡蓋工廠。"
  },
  {
    "word": "developing country",
    "pos": "n.phr.",
    "cn_def": "開發中國家",
    "en_def": "a poorer country that is building up its industry",
    "sentence": "Cheap mobile phones changed life in every {{BLANK}}, because farmers could check prices before selling crops.",
    "cn": "便宜的手機改變了每個開發中國家的生活，因為農民在賣作物前就能查詢價格。"
  },
  {
    "word": "trade deficit",
    "pos": "n.phr.",
    "cn_def": "貿易逆差",
    "en_def": "when a country imports more than it exports",
    "sentence": "The country has a large {{BLANK}} because it buys more cars and oil than it sells abroad.",
    "cn": "這個國家有很大的貿易逆差，因為它購買的汽車和石油比它出口的還多。"
  },
  {
    "word": "protectionism",
    "pos": "n.",
    "cn_def": "貿易保護主義",
    "en_def": "protecting home industries by taxing foreign goods",
    "sentence": "{{BLANK}} may save some local jobs, but it often makes goods more expensive for ordinary shoppers.",
    "cn": "貿易保護主義可能保住一些本地工作，但它常讓一般消費者的商品變得更貴。"
  },
  {
    "word": "economic crisis",
    "pos": "n.phr.",
    "cn_def": "經濟危機",
    "en_def": "a time when an economy suddenly becomes very weak",
    "sentence": "During the {{BLANK}}, many banks failed, and my parents worried that they would lose their savings.",
    "cn": "在經濟危機期間，許多銀行倒閉，而我爸媽擔心他們會失去積蓄。"
  },
  {
    "word": "market crash",
    "pos": "n.phr.",
    "cn_def": "股市崩盤",
    "en_def": "a sudden, large fall in share prices",
    "sentence": "Many people lost money in the {{BLANK}}, so they became afraid of buying shares for years.",
    "cn": "許多人在股市崩盤中賠了錢，所以他們好幾年都害怕買股票。"
  },
  {
    "word": "bailout",
    "pos": "n.",
    "cn_def": "紓困",
    "en_def": "money given to save a company or country from failing",
    "sentence": "The government gave the airline a {{BLANK}} to keep it flying, but taxpayers were angry about it.",
    "cn": "政府給予航空公司紓困讓它繼續營運，但納稅人對此很生氣。"
  },
  {
    "word": "cartel",
    "pos": "n.",
    "cn_def": "卡特爾；聯合壟斷組織",
    "en_def": "a group of companies that agree to keep prices high",
    "sentence": "The oil {{BLANK}} agreed to produce less oil, so petrol prices rose all over the world.",
    "cn": "石油卡特爾同意減產，所以全世界的汽油價格都上漲了。"
  },
  {
    "word": "bull market",
    "pos": "n.phr.",
    "cn_def": "多頭市場",
    "en_def": "a time when share prices are rising",
    "sentence": "In a {{BLANK}} almost everyone seems to make money, but wise investors still save some cash.",
    "cn": "在多頭市場中幾乎每個人似乎都在賺錢，但明智的投資人仍會保留一些現金。"
  },
  {
    "word": "bear market",
    "pos": "n.phr.",
    "cn_def": "空頭市場",
    "en_def": "a time when share prices are falling",
    "sentence": "The {{BLANK}} lasted almost two years, so my uncle waited patiently before selling his shares.",
    "cn": "那次空頭市場持續了將近兩年，所以我叔叔耐心等待才賣出他的股票。"
  },
  {
    "word": "devaluation",
    "pos": "n.",
    "cn_def": "貨幣貶值",
    "en_def": "a fall in the value of a country's money",
    "sentence": "After the {{BLANK}} of the currency, imported goods became much more expensive, but tourists found the country cheap.",
    "cn": "在貨幣貶值後，進口商品變得貴很多，但遊客發現這個國家很便宜。"
  },
  {
    "word": "trade route",
    "pos": "n.phr.",
    "cn_def": "貿易路線",
    "en_def": "a path used to move goods between places",
    "sentence": "The canal is an important {{BLANK}} between Asia and Europe, so a blockage there delays ships worldwide.",
    "cn": "這條運河是亞洲和歐洲之間重要的貿易路線，所以那裡一旦堵塞就會延誤全世界的船隻。"
  },
  {
    "word": "global market",
    "pos": "n.phr.",
    "cn_def": "全球市場",
    "en_def": "buying and selling between countries all over the world",
    "sentence": "Thanks to the internet, a small tea farm can sell to the {{BLANK}}, and customers in Canada now buy its oolong.",
    "cn": "多虧了網路，一座小茶園也能銷售到全球市場，而加拿大的顧客現在會買它的烏龍茶。"
  }
];

const MCQS = [
  {
    "q": "Taiwan is a major _____ of computer chips, so its economy depends on demand from other countries.",
    "options": [
      "pricing",
      "dedication",
      "onboarding",
      "exporter"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Japan is a big _____ of food, because it does not have enough farmland to feed everyone.",
    "options": [
      "resignation",
      "importer",
      "networking",
      "boss"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Supporters of _____ say it makes goods cheaper, but some farmers fear they cannot compete.",
    "options": [
      "down payment",
      "influencer marketing",
      "free trade",
      "shopping mall"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The two countries signed a _____ last month, so fruit can now be exported without extra taxes.",
    "options": [
      "trade deal",
      "middle manager",
      "net profit",
      "ad campaign"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "During the _____, prices of phones and toys went up, and many factories moved to other countries.",
    "options": [
      "first-mover advantage",
      "trade war",
      "sharing economy",
      "impulse buying"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The _____ was good when we visited Japan, so our hotel and meals felt cheaper than usual.",
    "options": [
      "free sample",
      "interest rate",
      "viral marketing",
      "exchange rate"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "She works for a _____ with offices in twenty countries, so she often has meetings late at night.",
    "options": [
      "stake",
      "invoice",
      "multinational",
      "savings"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The country's _____ grew by three percent last year, but many families said they did not feel richer.",
    "options": [
      "GDP",
      "workaholic",
      "delegation",
      "negotiation"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Fast _____ created many new jobs, but it also caused traffic and pollution in the cities.",
    "options": [
      "limited company",
      "chief executive",
      "loyalty card",
      "economic growth"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ warned that prices would keep rising, so she advised families to save more money.",
    "options": [
      "debtor",
      "refund",
      "economist",
      "merger"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "When prices rise faster than wages, people lose _____, and they buy fewer things.",
    "options": [
      "purchasing power",
      "business model",
      "benefits package",
      "share price"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The two bubble tea chains started a _____, and customers enjoyed cheap drinks for a whole month.",
    "options": [
      "shopping mall",
      "price war",
      "net profit",
      "chief executive"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "In a _____, prices go up when goods are scarce, but this can hurt poor families.",
    "options": [
      "celebrity endorsement",
      "sole trader",
      "free market",
      "mission statement"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Vietnam is an _____ with many young workers, so foreign companies are building factories there.",
    "options": [
      "free sample",
      "emerging market",
      "consumer behaviour",
      "online review"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Cheap mobile phones changed life in every _____, because farmers could check prices before selling crops.",
    "options": [
      "viral marketing",
      "venture capital",
      "profit margin",
      "developing country"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The country has a large _____ because it buys more cars and oil than it sells abroad.",
    "options": [
      "trade deficit",
      "team leader",
      "return policy",
      "clearance sale"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "_____ may save some local jobs, but it often makes goods more expensive for ordinary shoppers.",
    "options": [
      "arrangement",
      "dedication",
      "protectionism",
      "warranty"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "During the _____, many banks failed, and my parents worried that they would lose their savings.",
    "options": [
      "email marketing",
      "economic crisis",
      "stock market",
      "work-life balance"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Many people lost money in the _____, so they became afraid of buying shares for years.",
    "options": [
      "market crash",
      "seed funding",
      "return policy",
      "clearance sale"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The government gave the airline a _____ to keep it flying, but taxpayers were angry about it.",
    "options": [
      "shortcut",
      "fintech",
      "merger",
      "bailout"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The oil _____ agreed to produce less oil, so petrol prices rose all over the world.",
    "options": [
      "insolvency",
      "depreciation",
      "cartel",
      "confidence"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "In a _____ almost everyone seems to make money, but wise investors still save some cash.",
    "options": [
      "the bottom line",
      "bull market",
      "benefits package",
      "lump sum"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The _____ lasted almost two years, so my uncle waited patiently before selling his shares.",
    "options": [
      "sales pitch",
      "impulse buying",
      "shopping mall",
      "bear market"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "After the _____ of the currency, imported goods became much more expensive, but tourists found the country cheap.",
    "options": [
      "devaluation",
      "rebate",
      "backing",
      "creditor"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The canal is an important _____ between Asia and Europe, so a blockage there delays ships worldwide.",
    "options": [
      "Silicon Valley",
      "managing director",
      "profit margin",
      "trade route"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Thanks to the internet, a small tea farm can sell to the _____, and customers in Canada now buy its oolong.",
    "options": [
      "global market",
      "first-mover advantage",
      "market segment",
      "managing director"
    ],
    "answer": 0,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "exporter": {
    "pos": "n.",
    "en_def": "a country or company that sells goods abroad",
    "cn_def": "出口國；出口商"
  },
  "importer": {
    "pos": "n.",
    "en_def": "a country or company that buys goods from abroad",
    "cn_def": "進口國；進口商"
  },
  "free trade": {
    "pos": "n.phr.",
    "en_def": "trade between countries without taxes or limits",
    "cn_def": "自由貿易"
  },
  "trade deal": {
    "pos": "n.phr.",
    "en_def": "an agreement between countries about buying and selling goods",
    "cn_def": "貿易協定"
  },
  "trade war": {
    "pos": "n.phr.",
    "en_def": "when countries keep raising taxes on each other's goods",
    "cn_def": "貿易戰"
  },
  "exchange rate": {
    "pos": "n.phr.",
    "en_def": "the value of one currency compared with another",
    "cn_def": "匯率"
  },
  "multinational": {
    "pos": "n.",
    "en_def": "a large company that works in many countries",
    "cn_def": "跨國公司"
  },
  "gdp": {
    "pos": "n.",
    "en_def": "the total value of goods and services a country produces in a year",
    "cn_def": "國內生產毛額"
  },
  "economic growth": {
    "pos": "n.phr.",
    "en_def": "an increase in the amount of goods and services produced",
    "cn_def": "經濟成長"
  },
  "economist": {
    "pos": "n.",
    "en_def": "an expert who studies how money and trade work",
    "cn_def": "經濟學家"
  },
  "purchasing power": {
    "pos": "n.phr.",
    "en_def": "how much you can buy with your money",
    "cn_def": "購買力"
  },
  "price war": {
    "pos": "n.phr.",
    "en_def": "when companies keep cutting prices to beat each other",
    "cn_def": "價格戰"
  },
  "free market": {
    "pos": "n.phr.",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "cn_def": "自由市場"
  },
  "emerging market": {
    "pos": "n.phr.",
    "en_def": "a country whose economy is growing and developing fast",
    "cn_def": "新興市場"
  },
  "developing country": {
    "pos": "n.phr.",
    "en_def": "a poorer country that is building up its industry",
    "cn_def": "開發中國家"
  },
  "trade deficit": {
    "pos": "n.phr.",
    "en_def": "when a country imports more than it exports",
    "cn_def": "貿易逆差"
  },
  "protectionism": {
    "pos": "n.",
    "en_def": "protecting home industries by taxing foreign goods",
    "cn_def": "貿易保護主義"
  },
  "economic crisis": {
    "pos": "n.phr.",
    "en_def": "a time when an economy suddenly becomes very weak",
    "cn_def": "經濟危機"
  },
  "market crash": {
    "pos": "n.phr.",
    "en_def": "a sudden, large fall in share prices",
    "cn_def": "股市崩盤"
  },
  "bailout": {
    "pos": "n.",
    "en_def": "money given to save a company or country from failing",
    "cn_def": "紓困"
  },
  "cartel": {
    "pos": "n.",
    "en_def": "a group of companies that agree to keep prices high",
    "cn_def": "卡特爾；聯合壟斷組織"
  },
  "bull market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are rising",
    "cn_def": "多頭市場"
  },
  "bear market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are falling",
    "cn_def": "空頭市場"
  },
  "devaluation": {
    "pos": "n.",
    "en_def": "a fall in the value of a country's money",
    "cn_def": "貨幣貶值"
  },
  "trade route": {
    "pos": "n.phr.",
    "en_def": "a path used to move goods between places",
    "cn_def": "貿易路線"
  },
  "global market": {
    "pos": "n.phr.",
    "en_def": "buying and selling between countries all over the world",
    "cn_def": "全球市場"
  },
  "pricing": {
    "pos": "n.",
    "en_def": "deciding how much to charge for something",
    "cn_def": "定價"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment",
    "cn_def": "奉獻；專注投入"
  },
  "onboarding": {
    "pos": "n.",
    "en_def": "helping new workers learn about their job and company",
    "cn_def": "新人到職訓練"
  },
  "resignation": {
    "pos": "n.",
    "en_def": "the act of leaving a job",
    "cn_def": "辭職；辭呈"
  },
  "networking": {
    "pos": "n.",
    "en_def": "meeting people who may help your career",
    "cn_def": "建立人脈"
  },
  "boss": {
    "pos": "n.",
    "en_def": "the person who is in charge of you at work",
    "cn_def": "老闆；上司"
  },
  "down payment": {
    "pos": "n.phr.",
    "en_def": "the first part of the price paid when buying something big",
    "cn_def": "頭期款"
  },
  "influencer marketing": {
    "pos": "n.phr.",
    "en_def": "paying popular online people to show a product",
    "cn_def": "網紅行銷"
  },
  "shopping mall": {
    "pos": "n.phr.",
    "en_def": "a large building with many shops",
    "cn_def": "購物中心"
  },
  "middle manager": {
    "pos": "n.phr.",
    "en_def": "a manager between top leaders and ordinary workers",
    "cn_def": "中階主管"
  },
  "net profit": {
    "pos": "n.phr.",
    "en_def": "the money left after all costs are paid",
    "cn_def": "淨利"
  },
  "ad campaign": {
    "pos": "n.phr.",
    "en_def": "a planned series of adverts for one product",
    "cn_def": "廣告活動"
  },
  "first-mover advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of being the first company in a new market",
    "cn_def": "先行者優勢"
  },
  "sharing economy": {
    "pos": "n.phr.",
    "en_def": "a system where people rent or share things through apps",
    "cn_def": "共享經濟"
  },
  "impulse buying": {
    "pos": "n.phr.",
    "en_def": "buying things suddenly without planning",
    "cn_def": "衝動購物"
  },
  "free sample": {
    "pos": "n.phr.",
    "en_def": "a small amount of a product given away to try",
    "cn_def": "免費試用品"
  },
  "interest rate": {
    "pos": "n.phr.",
    "en_def": "the percentage paid for borrowing money",
    "cn_def": "利率"
  },
  "viral marketing": {
    "pos": "n.phr.",
    "en_def": "marketing that spreads fast as people share it online",
    "cn_def": "病毒式行銷"
  },
  "stake": {
    "pos": "n.",
    "en_def": "a share in a business",
    "cn_def": "股份"
  },
  "invoice": {
    "pos": "n.",
    "en_def": "a document asking a customer to pay for goods or work",
    "cn_def": "請款單；發票"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money you have kept and not spent",
    "cn_def": "存款；積蓄"
  },
  "workaholic": {
    "pos": "n.",
    "en_def": "a person who works too much and finds it hard to stop",
    "cn_def": "工作狂"
  },
  "delegation": {
    "pos": "n.",
    "en_def": "giving part of your work to someone else",
    "cn_def": "授權；分派工作"
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "discussion to reach an agreement",
    "cn_def": "協商"
  },
  "limited company": {
    "pos": "n.phr.",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "cn_def": "有限公司"
  },
  "chief executive": {
    "pos": "n.phr.",
    "en_def": "the person with the highest position in a company",
    "cn_def": "執行長"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card that gives regular customers rewards",
    "cn_def": "集點卡；會員卡"
  },
  "debtor": {
    "pos": "n.",
    "en_def": "a person who owes money",
    "cn_def": "債務人"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money returned to a customer",
    "cn_def": "退款"
  },
  "merger": {
    "pos": "n.",
    "en_def": "when two companies join to become one",
    "cn_def": "合併"
  },
  "business model": {
    "pos": "n.phr.",
    "en_def": "the way a company plans to make money",
    "cn_def": "商業模式"
  },
  "benefits package": {
    "pos": "n.phr.",
    "en_def": "all the extra things a job offers, like insurance and holidays",
    "cn_def": "福利方案"
  },
  "share price": {
    "pos": "n.phr.",
    "en_def": "the cost of one share in a company",
    "cn_def": "股價"
  },
  "celebrity endorsement": {
    "pos": "n.phr.",
    "en_def": "when a famous person says they use and like a product",
    "cn_def": "名人代言"
  },
  "sole trader": {
    "pos": "n.phr.",
    "en_def": "a person who owns and runs a business alone",
    "cn_def": "獨資經營者"
  },
  "mission statement": {
    "pos": "n.phr.",
    "en_def": "a short sentence about a company's main aims",
    "cn_def": "使命宣言"
  },
  "consumer behaviour": {
    "pos": "n.phr.",
    "en_def": "the way people choose and buy things",
    "cn_def": "消費者行為"
  },
  "online review": {
    "pos": "n.phr.",
    "en_def": "an opinion about a product or place posted on the internet",
    "cn_def": "網路評論"
  },
  "venture capital": {
    "pos": "n.phr.",
    "en_def": "money invested in new companies with high risk",
    "cn_def": "創業投資"
  },
  "profit margin": {
    "pos": "n.phr.",
    "en_def": "the difference between cost and selling price",
    "cn_def": "利潤率"
  },
  "team leader": {
    "pos": "n.phr.",
    "en_def": "a person who guides a small group of workers",
    "cn_def": "組長"
  },
  "return policy": {
    "pos": "n.phr.",
    "en_def": "a shop's rules about taking back goods",
    "cn_def": "退貨政策"
  },
  "clearance sale": {
    "pos": "n.phr.",
    "en_def": "a sale to get rid of old stock cheaply",
    "cn_def": "清倉拍賣"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "an agreement about how something will be done",
    "cn_def": "安排；協議"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product if it breaks",
    "cn_def": "保固"
  },
  "email marketing": {
    "pos": "n.phr.",
    "en_def": "sending adverts and offers to customers by email",
    "cn_def": "電子郵件行銷"
  },
  "stock market": {
    "pos": "n.phr.",
    "en_def": "the place where shares in companies are bought and sold",
    "cn_def": "股票市場"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "seed funding": {
    "pos": "n.phr.",
    "en_def": "the first money a new company gets to start",
    "cn_def": "種子資金"
  },
  "shortcut": {
    "pos": "n.",
    "en_def": "a quicker way of doing something",
    "cn_def": "捷徑"
  },
  "fintech": {
    "pos": "n.",
    "en_def": "technology used to provide financial services",
    "cn_def": "金融科技"
  },
  "insolvency": {
    "pos": "n.",
    "en_def": "being unable to pay what you owe",
    "cn_def": "無力償債"
  },
  "depreciation": {
    "pos": "n.",
    "en_def": "a fall in the value of something over time",
    "cn_def": "折舊"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "a feeling that you can trust someone or something",
    "cn_def": "信心"
  },
  "the bottom line": {
    "pos": "n.phr.",
    "en_def": "the most important fact; or the final profit",
    "cn_def": "底線；最重要的事"
  },
  "lump sum": {
    "pos": "n.phr.",
    "en_def": "a large amount of money paid at one time",
    "cn_def": "一次付清的款項"
  },
  "sales pitch": {
    "pos": "n.phr.",
    "en_def": "a talk that tries to persuade someone to buy",
    "cn_def": "推銷話術"
  },
  "rebate": {
    "pos": "n.",
    "en_def": "money given back to a buyer",
    "cn_def": "退款；回饋金"
  },
  "backing": {
    "pos": "n.",
    "en_def": "help or support, often money",
    "cn_def": "支持；資金援助"
  },
  "creditor": {
    "pos": "n.",
    "en_def": "a person or company that is owed money",
    "cn_def": "債權人"
  },
  "silicon valley": {
    "pos": "n.phr.",
    "en_def": "an area in California famous for tech companies",
    "cn_def": "矽谷"
  },
  "managing director": {
    "pos": "n.phr.",
    "en_def": "the person in charge of running a company each day",
    "cn_def": "總經理"
  },
  "market segment": {
    "pos": "n.phr.",
    "en_def": "one group of customers with similar needs",
    "cn_def": "市場區隔"
  }
};

const EXTRA_GLOSSES = {};
