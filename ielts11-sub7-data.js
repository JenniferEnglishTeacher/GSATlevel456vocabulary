// Topic 11 Subunit 7 Quiz Data: Food Supply, Trade & Waste 糧食供應、貿易與浪費
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S07 - Food Supply, Trade & Waste 糧食供應、貿易與浪費",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "food supply",
    "pos": "n.",
    "cn_def": "糧食供應",
    "en_def": "the amount of food available to a population",
    "sentence": "The war cut off the city's {{BLANK}}, so prices rose quickly and many families could only afford one meal a day.",
    "cn": "戰爭切斷了這座城市的糧食供應，所以物價迅速上漲，許多家庭一天只吃得起一餐。"
  },
  {
    "word": "food shortage",
    "pos": "n.",
    "cn_def": "糧食短缺",
    "en_def": "a situation in which there is not enough food",
    "sentence": "The drought caused a serious {{BLANK}} in the region, and international groups sent rice and flour to help.",
    "cn": "乾旱在該地區造成嚴重的糧食短缺，而國際組織送來了稻米和麵粉協助。"
  },
  {
    "word": "hunger",
    "pos": "n.",
    "cn_def": "飢餓",
    "en_def": "the state of not having enough food to eat",
    "sentence": "Millions of people still suffer from {{BLANK}} every day, although the world produces enough food for everyone.",
    "cn": "每天仍有數百萬人遭受飢餓之苦，儘管全世界生產的糧食足夠每個人吃。"
  },
  {
    "word": "grocery",
    "pos": "n.",
    "cn_def": "食品雜貨",
    "en_def": "food and other goods sold in a shop",
    "sentence": "We do our {{BLANK}} shopping on Sunday mornings, because the market is less crowded and the vegetables are fresh.",
    "cn": "我們都在星期天早上採買食品雜貨，因為市場人比較少，而且蔬菜很新鮮。"
  },
  {
    "word": "supermarket",
    "pos": "n.",
    "cn_def": "超市",
    "en_def": "a large shop that sells food and household goods",
    "sentence": "The {{BLANK}} near my home sells vegetables from local farms, and the farmers' names and photos are printed on the packets.",
    "cn": "我家附近的超市販售本地農場的蔬菜，而且包裝上印著農民的名字和照片。"
  },
  {
    "word": "wholesaler",
    "pos": "n.",
    "cn_def": "批發商",
    "en_def": "a business that sells large amounts of goods to shops",
    "sentence": "Farmers sell their cabbages to a {{BLANK}}, and he then sells them to restaurants and markets around the city.",
    "cn": "農民把高麗菜賣給一位批發商，然後他再把它們賣給市區各地的餐廳和市場。"
  },
  {
    "word": "middleman",
    "pos": "n.",
    "cn_def": "中間商；中盤商",
    "en_def": "a person who buys from producers and sells to shops or customers",
    "sentence": "Farmers often earn very little because the {{BLANK}} takes a large share of the profit, so some now sell directly online.",
    "cn": "農民常常賺得很少，因為中間商拿走大部分利潤，所以現在有些人直接在網路上販售。"
  },
  {
    "word": "farmers' market",
    "pos": "n.",
    "cn_def": "農夫市集",
    "en_def": "a market where farmers sell their own produce directly",
    "sentence": "Every Saturday there is a {{BLANK}} near the park, and you can talk to the people who actually grew your vegetables.",
    "cn": "每週六公園附近都有農夫市集，而且你可以和親手種出你蔬菜的人聊天。"
  },
  {
    "word": "produce",
    "pos": "n.",
    "cn_def": "農產品",
    "en_def": "fruit and vegetables grown for sale",
    "sentence": "Fresh {{BLANK}} from the mountains arrives at the market early in the morning, so chefs go there before sunrise to choose the best.",
    "cn": "來自山區的新鮮農產品一大早就送到市場，所以廚師們在日出前就去挑選最好的。"
  },
  {
    "word": "food miles",
    "pos": "n.",
    "cn_def": "食物里程",
    "en_def": "the distance food travels from where it is grown to where it is eaten",
    "sentence": "Buying local fruit reduces {{BLANK}}, because it does not have to be flown across the world before it reaches your table.",
    "cn": "購買本地水果能減少食物里程，因為它不必飛越半個地球才送上你的餐桌。"
  },
  {
    "word": "fair trade",
    "pos": "n.",
    "cn_def": "公平貿易",
    "en_def": "a system that pays farmers in poor countries a fair price",
    "sentence": "This coffee is sold under {{BLANK}}, so the farmers in Africa receive a fair price and can send their children to school.",
    "cn": "這款咖啡以公平貿易方式販售，所以非洲的農民能得到合理的價格，並送孩子上學。"
  },
  {
    "word": "rationing",
    "pos": "n.",
    "cn_def": "配給（制度）",
    "en_def": "limiting the amount of food each person may have",
    "sentence": "During the war, food {{BLANK}} meant that each family could buy only a little sugar and meat each week.",
    "cn": "戰爭期間，糧食配給代表每個家庭每週只能買一點點糖和肉。"
  },
  {
    "word": "food bank",
    "pos": "n.",
    "cn_def": "食物銀行",
    "en_def": "a place that gives free food to people in need",
    "sentence": "Our class collected canned food for the local {{BLANK}}, and the volunteers gave it to families who could not afford groceries.",
    "cn": "我們班為當地的食物銀行收集罐頭食品，而志工把它們送給買不起食物的家庭。"
  },
  {
    "word": "food waste",
    "pos": "n.",
    "cn_def": "食物浪費；廚餘",
    "en_def": "food that is thrown away instead of eaten",
    "sentence": "Restaurants produce a lot of {{BLANK}} every night, so some now give unsold bread to charities instead of throwing it away.",
    "cn": "餐廳每晚都產生大量廚餘，所以現在有些餐廳把沒賣完的麵包捐給慈善機構，而不是丟掉。"
  },
  {
    "word": "leftovers",
    "pos": "n.",
    "cn_def": "剩菜",
    "en_def": "food that remains after a meal",
    "sentence": "We often eat the {{BLANK}} from Sunday dinner for lunch on Monday, so nothing goes to waste in our house.",
    "cn": "我們常把星期天晚餐的剩菜當作星期一的午餐，所以我們家沒有東西會浪費。"
  },
  {
    "word": "imperfect",
    "pos": "adj.",
    "cn_def": "不完美的；賣相不佳的",
    "en_def": "(of fruit or vegetables) not perfect in shape or appearance",
    "sentence": "The supermarket sells {{BLANK}} carrots at half price, and customers have discovered that they taste just as good.",
    "cn": "這家超市以半價販售賣相不佳的紅蘿蔔，而顧客們發現它們吃起來一樣美味。"
  },
  {
    "word": "food aid",
    "pos": "n.",
    "cn_def": "糧食援助",
    "en_def": "food given to countries or people in need",
    "sentence": "After the earthquake, {{BLANK}} arrived from many countries, but the broken roads made it hard to reach mountain villages.",
    "cn": "地震後，來自許多國家的糧食援助抵達了，但損毀的道路讓物資很難送到山區村莊。"
  },
  {
    "word": "grain reserve",
    "pos": "n.",
    "cn_def": "儲備糧",
    "en_def": "a store of grain kept for emergencies",
    "sentence": "The government keeps a large {{BLANK}} of rice, so prices stay stable even when typhoons destroy part of the harvest.",
    "cn": "政府保有大量的稻米儲備糧，所以即使颱風摧毀部分收成，價格也能保持穩定。"
  },
  {
    "word": "crop insurance",
    "pos": "n.",
    "cn_def": "農作物保險",
    "en_def": "insurance that pays farmers if their harvest is damaged",
    "sentence": "My uncle bought {{BLANK}} for his banana farm, and it paid for most of his losses when the typhoon hit.",
    "cn": "我叔叔為他的香蕉園買了農作物保險，而颱風來襲時，它賠償了他大部分的損失。"
  },
  {
    "word": "agribusiness",
    "pos": "n.",
    "cn_def": "農業企業；農產綜合企業",
    "en_def": "farming run as a large industry",
    "sentence": "Large {{BLANK}} companies control much of the world's seed market, so small farmers often worry about rising prices.",
    "cn": "大型農業企業控制了全球大部分的種子市場，所以小農常擔心價格上漲。"
  },
  {
    "word": "distributor",
    "pos": "n.",
    "cn_def": "經銷商",
    "en_def": "a company that delivers goods from producers to shops",
    "sentence": "The milk {{BLANK}} delivers to over two hundred stores every morning, so his trucks leave the factory before dawn.",
    "cn": "這家牛奶經銷商每天早上配送到兩百多家商店，所以他的貨車天亮前就離開工廠。"
  },
  {
    "word": "refrigerated truck",
    "pos": "n.",
    "cn_def": "冷藏車",
    "en_def": "a truck with a cooling system for carrying fresh food",
    "sentence": "The fish is carried in a {{BLANK}} from the port to Taipei, and the temperature inside is checked throughout the journey.",
    "cn": "魚貨用冷藏車從港口運到台北，而且一路上都會檢查車內的溫度。"
  },
  {
    "word": "cold storage",
    "pos": "n.",
    "cn_def": "冷藏庫；冷藏儲存",
    "en_def": "keeping food in a cold place so it stays fresh",
    "sentence": "Apples can be kept in {{BLANK}} for many months, so we can buy them all year, although they are picked only in autumn.",
    "cn": "蘋果可以在冷藏庫裡保存好幾個月，所以儘管只在秋天採收，我們卻能全年買到。"
  },
  {
    "word": "price hike",
    "pos": "n.",
    "cn_def": "漲價",
    "en_def": "a sudden large increase in price",
    "sentence": "After the typhoon there was a big {{BLANK}} for vegetables, so many families ate more tofu and eggs that week.",
    "cn": "颱風過後蔬菜大幅漲價，所以那週許多家庭都多吃豆腐和雞蛋。"
  },
  {
    "word": "bulk buying",
    "pos": "n.",
    "cn_def": "大量採購",
    "en_def": "buying large amounts at one time, usually at a lower price",
    "sentence": "{{BLANK}} can save money for big families, but food may go bad if you buy more than you can eat.",
    "cn": "大量採購可以為大家庭省錢，但如果你買的比吃得完的還多，食物就可能壞掉。"
  },
  {
    "word": "retailer",
    "pos": "n.",
    "cn_def": "零售商",
    "en_def": "a business that sells goods directly to the public",
    "sentence": "The {{BLANK}} promised to stop selling eggs from caged hens by 2030, and other shops soon made the same promise.",
    "cn": "這家零售商承諾在2030年前停止販售籠飼雞蛋，而其他商店很快也做出了同樣的承諾。"
  },
  {
    "word": "food scraps",
    "pos": "n.",
    "cn_def": "廚餘碎屑",
    "en_def": "small pieces of leftover food that are thrown away",
    "sentence": "In Taipei we put {{BLANK}} in a special bin, and the city turns them into pig feed or fertiliser.",
    "cn": "在台北我們把廚餘放進專用的桶子，而市政府會把它們變成豬飼料或肥料。"
  },
  {
    "word": "doggy bag",
    "pos": "n.",
    "cn_def": "打包袋（剩菜外帶）",
    "en_def": "a bag or box for taking home food you did not finish at a restaurant",
    "sentence": "We could not finish the huge pizza, so we asked the waiter for a {{BLANK}} and took the rest home for breakfast.",
    "cn": "我們吃不完那個超大披薩，所以我們跟服務生要了打包袋，把剩下的帶回家當早餐。"
  }
];

const MCQS = [
  {
    "q": "The war cut off the city's _____, so prices rose quickly and many families could only afford one meal a day.",
    "options": [
      "water table",
      "food supply",
      "crop rotation",
      "animal welfare"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The drought caused a serious _____ in the region, and international groups sent rice and flour to help.",
    "options": [
      "food shortage",
      "animal welfare",
      "water table",
      "food delivery app"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Millions of people still suffer from _____ every day, although the world produces enough food for everyone.",
    "options": [
      "greenhouse",
      "vigilance",
      "agrochemical",
      "hunger"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "We do our _____ shopping on Sunday mornings, because the market is less crowded and the vegetables are fresh.",
    "options": [
      "agronomist",
      "fluctuation",
      "grocery",
      "vulnerability"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The _____ near my home sells vegetables from local farms, and the farmers' names and photos are printed on the packets.",
    "options": [
      "lamb",
      "supermarket",
      "barn",
      "hay"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Farmers sell their cabbages to a _____, and he then sells them to restaurants and markets around the city.",
    "options": [
      "omission",
      "volatility",
      "wholesaler",
      "infusion"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Farmers often earn very little because the _____ takes a large share of the profit, so some now sell directly online.",
    "options": [
      "middleman",
      "maize",
      "antidote",
      "ambiguity"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Every Saturday there is a _____ near the park, and you can talk to the people who actually grew your vegetables.",
    "options": [
      "3D food printing",
      "battery cage",
      "rice paddy",
      "farmers' market"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Fresh _____ from the mountains arrives at the market early in the morning, so chefs go there before sunrise to choose the best.",
    "options": [
      "leniency",
      "furrow",
      "produce",
      "lamb"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Buying local fruit reduces _____, because it does not have to be flown across the world before it reaches your table.",
    "options": [
      "factory farming",
      "balanced diet",
      "best-before date",
      "food miles"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "This coffee is sold under _____, so the farmers in Africa receive a fair price and can send their children to school.",
    "options": [
      "fair trade",
      "drip irrigation",
      "combine harvester",
      "the cream of the crop"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "During the war, food _____ meant that each family could buy only a little sugar and meat each week.",
    "options": [
      "aquifer",
      "rationing",
      "connoisseur",
      "sodium"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Our class collected canned food for the local _____, and the volunteers gave it to families who could not afford groceries.",
    "options": [
      "food bank",
      "food delivery app",
      "cash crop",
      "sugar cane"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Restaurants produce a lot of _____ every night, so some now give unsold bread to charities instead of throwing it away.",
    "options": [
      "cash crop",
      "food waste",
      "Green Revolution",
      "seed bank"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "We often eat the _____ from Sunday dinner for lunch on Monday, so nothing goes to waste in our house.",
    "options": [
      "agronomist",
      "obsolescence",
      "leftovers",
      "flour"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The supermarket sells _____ carrots at half price, and customers have discovered that they taste just as good.",
    "options": [
      "imprudent",
      "opportune",
      "inconclusive",
      "imperfect"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "After the earthquake, _____ arrived from many countries, but the broken roads made it hard to reach mountain villages.",
    "options": [
      "bumper crop",
      "food aid",
      "balanced diet",
      "precision agriculture"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The government keeps a large _____ of rice, so prices stay stable even when typhoons destroy part of the harvest.",
    "options": [
      "alternative protein",
      "food poisoning",
      "grain reserve",
      "soil degradation"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "My uncle bought _____ for his banana farm, and it paid for most of his losses when the typhoon hit.",
    "options": [
      "a piece of cake",
      "meal kit",
      "indoor farm",
      "crop insurance"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Large _____ companies control much of the world's seed market, so small farmers often worry about rising prices.",
    "options": [
      "agribusiness",
      "catastrophe",
      "horticulture",
      "allergen"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The milk _____ delivers to over two hundred stores every morning, so his trucks leave the factory before dawn.",
    "options": [
      "soybean",
      "distributor",
      "barley",
      "toxicity"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The fish is carried in a _____ from the port to Taipei, and the temperature inside is checked throughout the journey.",
    "options": [
      "food for thought",
      "serving size",
      "refrigerated truck",
      "battery cage"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Apples can be kept in _____ for many months, so we can buy them all year, although they are picked only in autumn.",
    "options": [
      "cold storage",
      "bread and butter",
      "smart farming",
      "soil degradation"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "After the typhoon there was a big _____ for vegetables, so many families ate more tofu and eggs that week.",
    "options": [
      "crop rotation",
      "precision agriculture",
      "animal welfare",
      "price hike"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "_____ can save money for big families, but food may go bad if you buy more than you can eat.",
    "options": [
      "vertical farming",
      "bulk buying",
      "bread and butter",
      "food inspector"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The _____ promised to stop selling eggs from caged hens by 2030, and other shops soon made the same promise.",
    "options": [
      "retailer",
      "herbicide",
      "agritech",
      "elasticity"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "In Taipei we put _____ in a special bin, and the city turns them into pig feed or fertiliser.",
    "options": [
      "food inspector",
      "drip irrigation",
      "food scraps",
      "soil degradation"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "We could not finish the huge pizza, so we asked the waiter for a _____ and took the rest home for breakfast.",
    "options": [
      "precision agriculture",
      "food inspector",
      "a bad apple",
      "doggy bag"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "food supply": {
    "pos": "n.",
    "en_def": "the amount of food available to a population",
    "cn_def": "糧食供應"
  },
  "food shortage": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough food",
    "cn_def": "糧食短缺"
  },
  "hunger": {
    "pos": "n.",
    "en_def": "the state of not having enough food to eat",
    "cn_def": "飢餓"
  },
  "grocery": {
    "pos": "n.",
    "en_def": "food and other goods sold in a shop",
    "cn_def": "食品雜貨"
  },
  "supermarket": {
    "pos": "n.",
    "en_def": "a large shop that sells food and household goods",
    "cn_def": "超市"
  },
  "wholesaler": {
    "pos": "n.",
    "en_def": "a business that sells large amounts of goods to shops",
    "cn_def": "批發商"
  },
  "middleman": {
    "pos": "n.",
    "en_def": "a person who buys from producers and sells to shops or customers",
    "cn_def": "中間商；中盤商"
  },
  "farmers' market": {
    "pos": "n.",
    "en_def": "a market where farmers sell their own produce directly",
    "cn_def": "農夫市集"
  },
  "produce": {
    "pos": "n.",
    "en_def": "fruit and vegetables grown for sale",
    "cn_def": "農產品"
  },
  "food miles": {
    "pos": "n.",
    "en_def": "the distance food travels from where it is grown to where it is eaten",
    "cn_def": "食物里程"
  },
  "fair trade": {
    "pos": "n.",
    "en_def": "a system that pays farmers in poor countries a fair price",
    "cn_def": "公平貿易"
  },
  "rationing": {
    "pos": "n.",
    "en_def": "limiting the amount of food each person may have",
    "cn_def": "配給（制度）"
  },
  "food bank": {
    "pos": "n.",
    "en_def": "a place that gives free food to people in need",
    "cn_def": "食物銀行"
  },
  "food waste": {
    "pos": "n.",
    "en_def": "food that is thrown away instead of eaten",
    "cn_def": "食物浪費；廚餘"
  },
  "leftovers": {
    "pos": "n.",
    "en_def": "food that remains after a meal",
    "cn_def": "剩菜"
  },
  "imperfect": {
    "pos": "adj.",
    "en_def": "(of fruit or vegetables) not perfect in shape or appearance",
    "cn_def": "不完美的；賣相不佳的"
  },
  "food aid": {
    "pos": "n.",
    "en_def": "food given to countries or people in need",
    "cn_def": "糧食援助"
  },
  "grain reserve": {
    "pos": "n.",
    "en_def": "a store of grain kept for emergencies",
    "cn_def": "儲備糧"
  },
  "crop insurance": {
    "pos": "n.",
    "en_def": "insurance that pays farmers if their harvest is damaged",
    "cn_def": "農作物保險"
  },
  "agribusiness": {
    "pos": "n.",
    "en_def": "farming run as a large industry",
    "cn_def": "農業企業；農產綜合企業"
  },
  "distributor": {
    "pos": "n.",
    "en_def": "a company that delivers goods from producers to shops",
    "cn_def": "經銷商"
  },
  "refrigerated truck": {
    "pos": "n.",
    "en_def": "a truck with a cooling system for carrying fresh food",
    "cn_def": "冷藏車"
  },
  "cold storage": {
    "pos": "n.",
    "en_def": "keeping food in a cold place so it stays fresh",
    "cn_def": "冷藏庫；冷藏儲存"
  },
  "price hike": {
    "pos": "n.",
    "en_def": "a sudden large increase in price",
    "cn_def": "漲價"
  },
  "bulk buying": {
    "pos": "n.",
    "en_def": "buying large amounts at one time, usually at a lower price",
    "cn_def": "大量採購"
  },
  "retailer": {
    "pos": "n.",
    "en_def": "a business that sells goods directly to the public",
    "cn_def": "零售商"
  },
  "food scraps": {
    "pos": "n.",
    "en_def": "small pieces of leftover food that are thrown away",
    "cn_def": "廚餘碎屑"
  },
  "doggy bag": {
    "pos": "n.",
    "en_def": "a bag or box for taking home food you did not finish at a restaurant",
    "cn_def": "打包袋（剩菜外帶）"
  },
  "water table": {
    "pos": "n.",
    "en_def": "the level below which the ground is full of water",
    "cn_def": "地下水位"
  },
  "crop rotation": {
    "pos": "n.",
    "en_def": "growing different crops in a field in different years",
    "cn_def": "輪作"
  },
  "animal welfare": {
    "pos": "n.",
    "en_def": "the health and comfort of animals",
    "cn_def": "動物福利"
  },
  "food delivery app": {
    "pos": "n.",
    "en_def": "a phone app used to order meals to your home",
    "cn_def": "外送應用程式"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building where plants are grown in warm conditions",
    "cn_def": "溫室"
  },
  "vigilance": {
    "pos": "n.",
    "en_def": "careful attention to notice possible danger",
    "cn_def": "警覺；警惕"
  },
  "agrochemical": {
    "pos": "n.",
    "en_def": "a chemical used in farming, such as a fertiliser or pesticide",
    "cn_def": "農用化學品"
  },
  "agronomist": {
    "pos": "n.",
    "en_def": "a scientist who studies soil and crops",
    "cn_def": "農藝學家"
  },
  "fluctuation": {
    "pos": "n.",
    "en_def": "a change up and down in amount or level",
    "cn_def": "波動"
  },
  "vulnerability": {
    "pos": "n.",
    "en_def": "the state of being easily hurt or damaged",
    "cn_def": "脆弱性"
  },
  "lamb": {
    "pos": "n.",
    "en_def": "a young sheep, or its meat",
    "cn_def": "小羊；羊肉"
  },
  "barn": {
    "pos": "n.",
    "en_def": "a large farm building for animals, crops or machines",
    "cn_def": "穀倉；畜舍"
  },
  "hay": {
    "pos": "n.",
    "en_def": "grass that has been cut and dried to feed animals",
    "cn_def": "乾草"
  },
  "omission": {
    "pos": "n.",
    "en_def": "something that has been left out",
    "cn_def": "遺漏；省略"
  },
  "volatility": {
    "pos": "n.",
    "en_def": "the quality of changing suddenly and unpredictably",
    "cn_def": "不穩定；波動性"
  },
  "infusion": {
    "pos": "n.",
    "en_def": "a drink made by soaking leaves or fruit in hot water; or adding something new",
    "cn_def": "浸泡液；注入"
  },
  "maize": {
    "pos": "n.",
    "en_def": "a tall plant with yellow seeds; corn",
    "cn_def": "玉米"
  },
  "antidote": {
    "pos": "n.",
    "en_def": "something that reduces the bad effects of another thing",
    "cn_def": "解藥；矯正方法"
  },
  "ambiguity": {
    "pos": "n.",
    "en_def": "the state of having more than one possible meaning",
    "cn_def": "模稜兩可；含糊"
  },
  "3d food printing": {
    "pos": "n.",
    "en_def": "making food in shapes using a machine that builds it in layers",
    "cn_def": "3D食物列印"
  },
  "battery cage": {
    "pos": "n.",
    "en_def": "a very small cage where egg-laying hens are kept",
    "cn_def": "層架式雞籠（格子籠）"
  },
  "rice paddy": {
    "pos": "n.",
    "en_def": "a flooded field where rice is grown",
    "cn_def": "稻田"
  },
  "leniency": {
    "pos": "n.",
    "en_def": "the quality of being less strict than expected",
    "cn_def": "寬大；從輕"
  },
  "furrow": {
    "pos": "n.",
    "en_def": "a long narrow line cut into soil for planting seeds",
    "cn_def": "犁溝；田溝"
  },
  "factory farming": {
    "pos": "n.",
    "en_def": "keeping large numbers of animals indoors to produce cheap food",
    "cn_def": "工廠化養殖"
  },
  "balanced diet": {
    "pos": "n.",
    "en_def": "eating the right amounts of different kinds of food",
    "cn_def": "均衡飲食"
  },
  "best-before date": {
    "pos": "n.",
    "en_def": "the date until which food is at its best quality",
    "cn_def": "最佳賞味期限"
  },
  "drip irrigation": {
    "pos": "n.",
    "en_def": "watering plants slowly through small tubes near their roots",
    "cn_def": "滴灌"
  },
  "combine harvester": {
    "pos": "n.",
    "en_def": "a large machine that cuts and cleans grain in one go",
    "cn_def": "聯合收割機"
  },
  "the cream of the crop": {
    "pos": "n.phr.",
    "en_def": "the best people or things in a group",
    "cn_def": "精英；佼佼者"
  },
  "aquifer": {
    "pos": "n.",
    "en_def": "a layer of rock under the ground that holds water",
    "cn_def": "含水層"
  },
  "connoisseur": {
    "pos": "n.",
    "en_def": "an expert who knows a lot about food, drink or art",
    "cn_def": "鑑賞家；行家"
  },
  "sodium": {
    "pos": "n.",
    "en_def": "a chemical in salt that can be unhealthy in large amounts",
    "cn_def": "鈉"
  },
  "cash crop": {
    "pos": "n.",
    "en_def": "a crop grown to sell rather than to eat at home",
    "cn_def": "經濟作物"
  },
  "sugar cane": {
    "pos": "n.",
    "en_def": "a tall plant whose stems are used to make sugar",
    "cn_def": "甘蔗"
  },
  "green revolution": {
    "pos": "n.",
    "en_def": "the rapid rise in crop production in the 1960s using new seeds and chemicals",
    "cn_def": "綠色革命"
  },
  "seed bank": {
    "pos": "n.",
    "en_def": "a place where seeds are stored to protect plant varieties",
    "cn_def": "種子庫"
  },
  "obsolescence": {
    "pos": "n.",
    "en_def": "the state of becoming old-fashioned and no longer used",
    "cn_def": "過時；淘汰"
  },
  "flour": {
    "pos": "n.",
    "en_def": "powder made from grain and used for baking",
    "cn_def": "麵粉"
  },
  "imprudent": {
    "pos": "adj.",
    "en_def": "not wise or sensible",
    "cn_def": "不智的；輕率的"
  },
  "opportune": {
    "pos": "adj.",
    "en_def": "happening at a suitable time",
    "cn_def": "適時的；恰好的"
  },
  "inconclusive": {
    "pos": "adj.",
    "en_def": "not giving a clear result",
    "cn_def": "無定論的；不確定的"
  },
  "bumper crop": {
    "pos": "n.",
    "en_def": "an unusually large harvest",
    "cn_def": "大豐收"
  },
  "precision agriculture": {
    "pos": "n.",
    "en_def": "farming that uses data and technology to treat each part of a field correctly",
    "cn_def": "精準農業"
  },
  "alternative protein": {
    "pos": "n.",
    "en_def": "a source of protein other than traditional meat",
    "cn_def": "替代蛋白質"
  },
  "food poisoning": {
    "pos": "n.",
    "en_def": "illness caused by eating food that contains harmful bacteria",
    "cn_def": "食物中毒"
  },
  "soil degradation": {
    "pos": "n.",
    "en_def": "the loss of soil quality and health",
    "cn_def": "土壤劣化"
  },
  "a piece of cake": {
    "pos": "n.phr.",
    "en_def": "something very easy to do",
    "cn_def": "小事一樁；易如反掌"
  },
  "meal kit": {
    "pos": "n.",
    "en_def": "a box of ingredients and a recipe delivered to your home",
    "cn_def": "料理包；食材組"
  },
  "indoor farm": {
    "pos": "n.",
    "en_def": "a farm inside a building with controlled light and temperature",
    "cn_def": "室內農場"
  },
  "catastrophe": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "大災難"
  },
  "horticulture": {
    "pos": "n.",
    "en_def": "the study and practice of growing fruit, vegetables and flowers",
    "cn_def": "園藝學"
  },
  "allergen": {
    "pos": "n.",
    "en_def": "a substance that causes an allergic reaction",
    "cn_def": "過敏原"
  },
  "soybean": {
    "pos": "n.",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "cn_def": "黃豆；大豆"
  },
  "barley": {
    "pos": "n.",
    "en_def": "a grain used for food, animal feed and making drinks",
    "cn_def": "大麥"
  },
  "toxicity": {
    "pos": "n.",
    "en_def": "how poisonous something is",
    "cn_def": "毒性"
  },
  "food for thought": {
    "pos": "n.phr.",
    "en_def": "an idea that makes you think seriously",
    "cn_def": "值得深思的事"
  },
  "serving size": {
    "pos": "n.",
    "en_def": "the amount of food that counts as one portion on a label",
    "cn_def": "每份份量"
  },
  "bread and butter": {
    "pos": "n.phr.",
    "en_def": "the main way someone earns money",
    "cn_def": "主要收入來源；生計"
  },
  "smart farming": {
    "pos": "n.",
    "en_def": "farming with connected devices that collect and share data",
    "cn_def": "智慧農業"
  },
  "vertical farming": {
    "pos": "n.",
    "en_def": "growing crops in stacked layers, often inside buildings",
    "cn_def": "垂直農法"
  },
  "food inspector": {
    "pos": "n.",
    "en_def": "an official who checks that food and restaurants are safe",
    "cn_def": "食品稽查員"
  },
  "herbicide": {
    "pos": "n.",
    "en_def": "a chemical used to kill unwanted plants",
    "cn_def": "除草劑"
  },
  "agritech": {
    "pos": "n.",
    "en_def": "technology used to improve farming",
    "cn_def": "農業科技"
  },
  "elasticity": {
    "pos": "n.",
    "en_def": "how much demand changes when prices change",
    "cn_def": "彈性"
  },
  "a bad apple": {
    "pos": "n.phr.",
    "en_def": "one bad person who has a bad effect on others",
    "cn_def": "害群之馬"
  }
};

const EXTRA_GLOSSES = {};
