// Topic 20 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "break even",
    "pos": "v.phr.",
    "cn_def": "損益兩平",
    "en_def": "to earn just enough to cover costs, with no profit or loss",
    "sentence": "The new café lost money for six months, but it finally {{BLANK}} in the summer, so the owner felt hopeful.",
    "cn": "這家新咖啡店虧了六個月的錢，但終於在夏天達到損益兩平，所以老闆覺得很有希望。"
  },
  {
    "word": "cut costs",
    "pos": "v.phr.",
    "cn_def": "削減成本",
    "en_def": "to reduce the money a business spends",
    "sentence": "The factory had to {{BLANK}} after sales fell, so it turned off machines at night and used less packaging.",
    "cn": "銷售下滑後工廠必須削減成本，所以它晚上關掉機器並減少包裝。"
  },
  {
    "word": "the bottom line",
    "pos": "n.phr.",
    "cn_def": "底線；最重要的事",
    "en_def": "the most important fact; or the final profit",
    "sentence": "We can discuss colours all day, but {{BLANK}} is that customers will not pay more than five hundred dollars.",
    "cn": "我們可以整天討論顏色，但最重要的是顧客不會付超過五百元。"
  },
  {
    "word": "go out of business",
    "pos": "v.phr.",
    "cn_def": "倒閉；歇業",
    "en_def": "to stop trading because a company has failed",
    "sentence": "Many video shops {{BLANK}} when streaming became popular, and their buildings became cafés.",
    "cn": "串流普及後許多錄影帶店倒閉了，而它們的店面變成了咖啡店。"
  },
  {
    "word": "set up shop",
    "pos": "v.phr.",
    "cn_def": "開店；開業",
    "en_def": "to start a business in a place",
    "sentence": "The young chef decided to {{BLANK}} in her hometown, because rent was cheaper than in Taipei.",
    "cn": "這位年輕主廚決定在她的家鄉開店，因為租金比台北便宜。"
  },
  {
    "word": "corner the market",
    "pos": "v.phr.",
    "cn_def": "壟斷市場",
    "en_def": "to control most of the sales of a product",
    "sentence": "The company tried to {{BLANK}} in smart watches, but cheaper rivals soon appeared from abroad.",
    "cn": "這家公司試圖在智慧手錶領域壟斷市場，但較便宜的對手很快就從國外出現。"
  },
  {
    "word": "get off the ground",
    "pos": "v.phr.",
    "cn_def": "順利起步",
    "en_def": "to start successfully",
    "sentence": "The project never {{BLANK}}, because the team could not find enough money to build the first model.",
    "cn": "這個計畫始終沒能順利起步，因為團隊找不到足夠的錢來製作第一個模型。"
  },
  {
    "word": "a win-win situation",
    "pos": "n.phr.",
    "cn_def": "雙贏局面",
    "en_def": "a result that is good for everyone involved",
    "sentence": "The farmers sell fresh fruit to the school, and students eat healthy snacks, so it is {{BLANK}}.",
    "cn": "農民把新鮮水果賣給學校，而學生吃到健康點心，所以這是一個雙贏局面。"
  },
  {
    "word": "back to square one",
    "pos": "phr.",
    "cn_def": "回到原點",
    "en_def": "back to the beginning after failing",
    "sentence": "The investor pulled out at the last minute, so the founders were {{BLANK}} and had to start searching again.",
    "cn": "投資人在最後一刻退出，所以創辦人們回到原點，必須重新開始尋找。"
  },
  {
    "word": "a ballpark figure",
    "pos": "n.phr.",
    "cn_def": "大概的數字",
    "en_def": "a rough estimate of a number",
    "sentence": "I know you cannot give an exact price yet, but can you give me {{BLANK}} so I can plan my budget?",
    "cn": "我知道你還不能給確切的價格，但你可以給我一個大概的數字讓我規劃預算嗎？"
  },
  {
    "word": "in the red",
    "pos": "adj.phr.",
    "cn_def": "虧損；赤字",
    "en_def": "owing money or losing money",
    "sentence": "The bookshop has been {{BLANK}} for two years, but the owner keeps it open because she loves it.",
    "cn": "這家書店已經虧損兩年了，但老闆因為熱愛它而繼續營業。"
  },
  {
    "word": "in the black",
    "pos": "adj.phr.",
    "cn_def": "有盈餘；獲利",
    "en_def": "making a profit; not in debt",
    "sentence": "After many difficult years, the airline is finally {{BLANK}}, so it can pay back the government loan.",
    "cn": "經過多年的艱困期，這家航空公司終於有盈餘了，所以它可以償還政府的貸款。"
  },
  {
    "word": "on a shoestring",
    "pos": "phr.",
    "cn_def": "以極少的資金",
    "en_def": "with very little money",
    "sentence": "They started the company {{BLANK}}, working in a tiny room and using their own old laptops.",
    "cn": "他們以極少的資金創立了公司，在一間小房間工作並使用自己的舊筆電。"
  },
  {
    "word": "make a killing",
    "pos": "v.phr.",
    "cn_def": "大賺一筆",
    "en_def": "to make a lot of money quickly",
    "sentence": "Umbrella sellers {{BLANK}} during the sudden storm, because hundreds of tourists had not brought one.",
    "cn": "突如其來的暴風雨期間賣傘的小販大賺一筆，因為數百名遊客沒有帶傘。"
  },
  {
    "word": "the customer is always right",
    "pos": "phr.",
    "cn_def": "顧客永遠是對的",
    "en_def": "a rule that shops should try to satisfy customers",
    "sentence": "The owner believes that {{BLANK}}, but she will not let anyone be rude to her staff.",
    "cn": "老闆相信顧客永遠是對的，但她不會讓任何人對她的員工無禮。"
  },
  {
    "word": "climb the corporate ladder",
    "pos": "v.phr.",
    "cn_def": "在公司裡步步高升",
    "en_def": "to move up to higher positions in a company",
    "sentence": "He worked long hours to {{BLANK}}, but later he realised he wanted more time with his children.",
    "cn": "他長時間工作以在公司裡步步高升，但後來他意識到自己想多陪陪孩子。"
  },
  {
    "word": "get down to business",
    "pos": "v.phr.",
    "cn_def": "言歸正傳；開始辦正事",
    "en_def": "to start dealing with the important matter",
    "sentence": "After a few minutes of small talk, the manager said, \"Let's {{BLANK}},\" and she opened the sales report.",
    "cn": "閒聊幾分鐘後，經理說：「我們言歸正傳吧。」然後她打開了銷售報告。"
  },
  {
    "word": "seal the deal",
    "pos": "v.phr.",
    "cn_def": "拍板成交",
    "en_def": "to finally make an agreement certain",
    "sentence": "The two companies had talked for months, and they finally {{BLANK}} over dinner in Tokyo.",
    "cn": "兩家公司談了好幾個月，最後在東京的晚餐上拍板成交。"
  },
  {
    "word": "time is money",
    "pos": "phr.",
    "cn_def": "時間就是金錢",
    "en_def": "wasting time means wasting money",
    "sentence": "The delivery company believes that {{BLANK}}, so its drivers use apps to find the fastest routes.",
    "cn": "這家快遞公司相信時間就是金錢，所以司機們用應用程式尋找最快的路線。"
  },
  {
    "word": "take the plunge",
    "pos": "v.phr.",
    "cn_def": "毅然決然；放手一搏",
    "en_def": "to decide to do something risky after thinking about it",
    "sentence": "After years of dreaming, my aunt finally {{BLANK}} and quit her office job to open a bakery.",
    "cn": "夢想多年之後，我阿姨終於放手一搏，辭掉辦公室工作開了一家麵包店。"
  }
];

const MCQS = [
  {
    "q": "The new café lost money for six months, but it finally _____ in the summer, so the owner felt hopeful.",
    "options": [
      "climb the corporate ladder",
      "break even",
      "get down to business",
      "seal the deal"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The factory had to _____ after sales fell, so it turned off machines at night and used less packaging.",
    "options": [
      "make a killing",
      "climb the corporate ladder",
      "go out of business",
      "cut costs"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "We can discuss colours all day, but _____ is that customers will not pay more than five hundred dollars.",
    "options": [
      "loyalty card",
      "target market",
      "the bottom line",
      "market segment"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Many video shops _____ when streaming became popular, and their buildings became cafés.",
    "options": [
      "go out of business",
      "get down to business",
      "cut costs",
      "take the plunge"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The young chef decided to _____ in her hometown, because rent was cheaper than in Taipei.",
    "options": [
      "climb the corporate ladder",
      "get down to business",
      "break even",
      "set up shop"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The company tried to _____ in smart watches, but cheaper rivals soon appeared from abroad.",
    "options": [
      "corner the market",
      "seal the deal",
      "take the plunge",
      "climb the corporate ladder"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The project never _____, because the team could not find enough money to build the first model.",
    "options": [
      "go out of business",
      "get off the ground",
      "corner the market",
      "climb the corporate ladder"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The farmers sell fresh fruit to the school, and students eat healthy snacks, so it is _____.",
    "options": [
      "market research",
      "brand loyalty",
      "a win-win situation",
      "venture capital"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The investor pulled out at the last minute, so the founders were _____ and had to start searching again.",
    "options": [
      "time is money",
      "on a shoestring",
      "the customer is always right",
      "back to square one"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "I know you cannot give an exact price yet, but can you give me _____ so I can plan my budget?",
    "options": [
      "a ballpark figure",
      "operating costs",
      "bear market",
      "work-life balance"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The bookshop has been _____ for two years, but the owner keeps it open because she loves it.",
    "options": [
      "unique selling point",
      "tax return",
      "in the red",
      "seed funding"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "After many difficult years, the airline is finally _____, so it can pay back the government loan.",
    "options": [
      "customer service",
      "in the black",
      "tax return",
      "after-sales service"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "They started the company _____, working in a tiny room and using their own old laptops.",
    "options": [
      "back to square one",
      "the customer is always right",
      "time is money",
      "on a shoestring"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Umbrella sellers _____ during the sudden storm, because hundreds of tourists had not brought one.",
    "options": [
      "make a killing",
      "cut costs",
      "go out of business",
      "break even"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The owner believes that _____, but she will not let anyone be rude to her staff.",
    "options": [
      "back to square one",
      "the customer is always right",
      "on a shoestring",
      "time is money"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "He worked long hours to _____, but later he realised he wanted more time with his children.",
    "options": [
      "break even",
      "get down to business",
      "climb the corporate ladder",
      "get off the ground"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "After a few minutes of small talk, the manager said, \"Let's _____,\" and she opened the sales report.",
    "options": [
      "get down to business",
      "break even",
      "climb the corporate ladder",
      "set up shop"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The two companies had talked for months, and they finally _____ over dinner in Tokyo.",
    "options": [
      "break even",
      "seal the deal",
      "get down to business",
      "set up shop"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The delivery company believes that _____, so its drivers use apps to find the fastest routes.",
    "options": [
      "the customer is always right",
      "on a shoestring",
      "back to square one",
      "time is money"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "After years of dreaming, my aunt finally _____ and quit her office job to open a bakery.",
    "options": [
      "get off the ground",
      "go out of business",
      "take the plunge",
      "corner the market"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "break even": {
    "pos": "v.phr.",
    "en_def": "to earn just enough to cover costs, with no profit or loss",
    "cn_def": "損益兩平"
  },
  "cut costs": {
    "pos": "v.phr.",
    "en_def": "to reduce the money a business spends",
    "cn_def": "削減成本"
  },
  "the bottom line": {
    "pos": "n.phr.",
    "en_def": "the most important fact; or the final profit",
    "cn_def": "底線；最重要的事"
  },
  "go out of business": {
    "pos": "v.phr.",
    "en_def": "to stop trading because a company has failed",
    "cn_def": "倒閉；歇業"
  },
  "set up shop": {
    "pos": "v.phr.",
    "en_def": "to start a business in a place",
    "cn_def": "開店；開業"
  },
  "corner the market": {
    "pos": "v.phr.",
    "en_def": "to control most of the sales of a product",
    "cn_def": "壟斷市場"
  },
  "get off the ground": {
    "pos": "v.phr.",
    "en_def": "to start successfully",
    "cn_def": "順利起步"
  },
  "a win-win situation": {
    "pos": "n.phr.",
    "en_def": "a result that is good for everyone involved",
    "cn_def": "雙贏局面"
  },
  "back to square one": {
    "pos": "phr.",
    "en_def": "back to the beginning after failing",
    "cn_def": "回到原點"
  },
  "a ballpark figure": {
    "pos": "n.phr.",
    "en_def": "a rough estimate of a number",
    "cn_def": "大概的數字"
  },
  "in the red": {
    "pos": "adj.phr.",
    "en_def": "owing money or losing money",
    "cn_def": "虧損；赤字"
  },
  "in the black": {
    "pos": "adj.phr.",
    "en_def": "making a profit; not in debt",
    "cn_def": "有盈餘；獲利"
  },
  "on a shoestring": {
    "pos": "phr.",
    "en_def": "with very little money",
    "cn_def": "以極少的資金"
  },
  "make a killing": {
    "pos": "v.phr.",
    "en_def": "to make a lot of money quickly",
    "cn_def": "大賺一筆"
  },
  "the customer is always right": {
    "pos": "phr.",
    "en_def": "a rule that shops should try to satisfy customers",
    "cn_def": "顧客永遠是對的"
  },
  "climb the corporate ladder": {
    "pos": "v.phr.",
    "en_def": "to move up to higher positions in a company",
    "cn_def": "在公司裡步步高升"
  },
  "get down to business": {
    "pos": "v.phr.",
    "en_def": "to start dealing with the important matter",
    "cn_def": "言歸正傳；開始辦正事"
  },
  "seal the deal": {
    "pos": "v.phr.",
    "en_def": "to finally make an agreement certain",
    "cn_def": "拍板成交"
  },
  "time is money": {
    "pos": "phr.",
    "en_def": "wasting time means wasting money",
    "cn_def": "時間就是金錢"
  },
  "take the plunge": {
    "pos": "v.phr.",
    "en_def": "to decide to do something risky after thinking about it",
    "cn_def": "毅然決然；放手一搏"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card that gives regular customers rewards",
    "cn_def": "集點卡；會員卡"
  },
  "target market": {
    "pos": "n.phr.",
    "en_def": "the group of people a product is made for",
    "cn_def": "目標市場"
  },
  "market segment": {
    "pos": "n.phr.",
    "en_def": "one group of customers with similar needs",
    "cn_def": "市場區隔"
  },
  "market research": {
    "pos": "n.phr.",
    "en_def": "collecting information about what customers want",
    "cn_def": "市場調查"
  },
  "brand loyalty": {
    "pos": "n.phr.",
    "en_def": "when customers keep buying the same brand",
    "cn_def": "品牌忠誠度"
  },
  "venture capital": {
    "pos": "n.phr.",
    "en_def": "money invested in new companies with high risk",
    "cn_def": "創業投資"
  },
  "operating costs": {
    "pos": "n.phr.",
    "en_def": "the money needed to run a business every day",
    "cn_def": "營運成本"
  },
  "bear market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are falling",
    "cn_def": "空頭市場"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "unique selling point": {
    "pos": "n.phr.",
    "en_def": "the special feature that makes a product different",
    "cn_def": "獨特賣點"
  },
  "tax return": {
    "pos": "n.phr.",
    "en_def": "a form you send to the government about your income",
    "cn_def": "報稅單"
  },
  "seed funding": {
    "pos": "n.phr.",
    "en_def": "the first money a new company gets to start",
    "cn_def": "種子資金"
  },
  "customer service": {
    "pos": "n.phr.",
    "en_def": "help that a company gives to its customers",
    "cn_def": "客戶服務"
  },
  "after-sales service": {
    "pos": "n.phr.",
    "en_def": "help a company gives after you buy something",
    "cn_def": "售後服務"
  }
};

const EXTRA_GLOSSES = {};
