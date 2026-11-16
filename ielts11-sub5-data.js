// Topic 11 Subunit 5 Quiz Data: Food Technology & Innovation 食品科技與創新
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S05 - Food Technology & Innovation 食品科技與創新",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "food technology",
    "pos": "n.",
    "cn_def": "食品科技",
    "en_def": "the science of making, storing and improving food",
    "sentence": "Advances in {{BLANK}} have made food safer and cheaper, but some people prefer traditional cooking because it feels more natural.",
    "cn": "食品科技的進步讓食物更安全也更便宜，但有些人比較喜歡傳統烹調，因為感覺比較天然。"
  },
  {
    "word": "food scientist",
    "pos": "n.",
    "cn_def": "食品科學家",
    "en_def": "a person who studies how food is made and kept safe",
    "sentence": "A {{BLANK}} tested the new sauce for months, and she changed the recipe because the colour faded too quickly.",
    "cn": "一位食品科學家花了好幾個月測試這款新醬料，她更改了配方，因為顏色褪得太快。"
  },
  {
    "word": "lab-grown meat",
    "pos": "n.",
    "cn_def": "實驗室培育肉",
    "en_def": "meat made from animal cells in a laboratory",
    "sentence": "{{BLANK}} could reduce the number of animals that are killed, but it is still too expensive for most families to buy.",
    "cn": "實驗室培育肉可以減少被宰殺的動物數量，但對大多數家庭來說還是太貴了。"
  },
  {
    "word": "plant-based",
    "pos": "adj.",
    "cn_def": "植物性的；以植物為原料的",
    "en_def": "made from plants rather than animals",
    "sentence": "The burger shop now offers a {{BLANK}} burger, and many customers cannot tell the difference from beef.",
    "cn": "這家漢堡店現在提供植物性漢堡，而且許多顧客都吃不出它和牛肉的差別。"
  },
  {
    "word": "meat substitute",
    "pos": "n.",
    "cn_def": "肉類替代品",
    "en_def": "a food that is used instead of meat",
    "sentence": "Tofu has been a popular {{BLANK}} in Asia for centuries, so new plant-based products are not really a new idea here.",
    "cn": "豆腐在亞洲作為肉類替代品已經流行了好幾個世紀，所以新的植物性產品在這裡其實不算新點子。"
  },
  {
    "word": "alternative protein",
    "pos": "n.",
    "cn_def": "替代蛋白質",
    "en_def": "a source of protein other than traditional meat",
    "sentence": "Investors are spending billions on {{BLANK}} because the world's population is growing, and farms cannot produce enough meat for everyone.",
    "cn": "投資人在替代蛋白質上投入數十億元，因為世界人口持續成長，而農場無法生產足夠所有人吃的肉。"
  },
  {
    "word": "edible insect",
    "pos": "n.",
    "cn_def": "可食用昆蟲",
    "en_def": "an insect that is safe for people to eat",
    "sentence": "Crickets are an {{BLANK}} that is rich in protein, but many people in Taiwan still feel nervous about tasting them.",
    "cn": "蟋蟀是一種富含蛋白質的可食用昆蟲，但許多台灣人對品嘗牠們仍然感到緊張。"
  },
  {
    "word": "genetically modified",
    "pos": "adj.",
    "cn_def": "基因改造的",
    "en_def": "having genes changed by scientists",
    "sentence": "Most of the soybeans that Taiwan imports are {{BLANK}}, so tofu makers must label clearly which products use them.",
    "cn": "台灣進口的黃豆大多是基因改造的，所以豆腐業者必須清楚標示哪些產品有使用。"
  },
  {
    "word": "GMO",
    "pos": "n.",
    "cn_def": "基因改造生物",
    "en_def": "a living thing whose genes have been changed by science",
    "sentence": "School lunches in Taiwan cannot contain any {{BLANK}}, because parents asked the government to make this rule several years ago.",
    "cn": "台灣的學校午餐不能含有任何基因改造生物，因為家長幾年前要求政府訂定這項規定。"
  },
  {
    "word": "gene editing",
    "pos": "n.",
    "cn_def": "基因編輯",
    "en_def": "changing the DNA of a living thing in a precise way",
    "sentence": "Scientists are using {{BLANK}} to create rice that survives floods, and farmers in Asia hope it will protect their harvests.",
    "cn": "科學家正在運用基因編輯培育能在洪水中存活的稻米，而亞洲的農民希望它能保護他們的收成。"
  },
  {
    "word": "biotechnology",
    "pos": "n.",
    "cn_def": "生物科技",
    "en_def": "using living cells and bacteria to make useful products",
    "sentence": "My sister wants to study {{BLANK}} at university, because she believes it can help farmers grow food with fewer chemicals.",
    "cn": "我姊姊想在大學攻讀生物科技，因為她相信它能幫助農民用更少的化學物質種植糧食。"
  },
  {
    "word": "hydroponics",
    "pos": "n.",
    "cn_def": "水耕栽培",
    "en_def": "growing plants in water with nutrients instead of soil",
    "sentence": "The restaurant grows its own lettuce using {{BLANK}}, so it needs no soil, and the leaves are picked just before serving.",
    "cn": "這家餐廳用水耕栽培自己種萵苣，所以不需要土壤，而且葉子是上菜前才採下的。"
  },
  {
    "word": "aquaponics",
    "pos": "n.",
    "cn_def": "魚菜共生",
    "en_def": "a system where fish and plants are raised together in water",
    "sentence": "Our school built an {{BLANK}} system in the science lab, and the students feed the fish while the plants clean the water.",
    "cn": "我們學校在科學實驗室裡建造了一套魚菜共生系統，學生餵魚，而植物則負責淨化水質。"
  },
  {
    "word": "vertical farming",
    "pos": "n.",
    "cn_def": "垂直農法",
    "en_def": "growing crops in stacked layers, often inside buildings",
    "sentence": "{{BLANK}} allows cities to produce vegetables in tall buildings, but the lights use a lot of electricity, so costs remain high.",
    "cn": "垂直農法讓城市能在高樓裡生產蔬菜，但照明耗電量很大，所以成本仍然很高。"
  },
  {
    "word": "indoor farm",
    "pos": "n.",
    "cn_def": "室內農場",
    "en_def": "a farm inside a building with controlled light and temperature",
    "sentence": "The {{BLANK}} near the train station grows herbs all year round, and typhoons cannot damage the crops because they are inside.",
    "cn": "火車站附近的室內農場全年都在種植香草，而且颱風也無法破壞作物，因為它們都在室內。"
  },
  {
    "word": "precision agriculture",
    "pos": "n.",
    "cn_def": "精準農業",
    "en_def": "farming that uses data and technology to treat each part of a field correctly",
    "sentence": "With {{BLANK}}, farmers use drones and sensors to find dry areas, so they only water the plants that really need it.",
    "cn": "透過精準農業，農民使用無人機和感測器找出乾燥的區域，所以他們只澆灌真正需要水的植物。"
  },
  {
    "word": "agritech",
    "pos": "n.",
    "cn_def": "農業科技",
    "en_def": "technology used to improve farming",
    "sentence": "Young engineers are starting {{BLANK}} companies in Taiwan, and they hope their apps will help older farmers save time and water.",
    "cn": "年輕工程師在台灣創立農業科技公司，而他們希望自己的應用程式能幫助年長的農民節省時間和水。"
  },
  {
    "word": "smart farming",
    "pos": "n.",
    "cn_def": "智慧農業",
    "en_def": "farming with connected devices that collect and share data",
    "sentence": "{{BLANK}} lets my uncle check the temperature of his greenhouse on his phone, so he can relax even when he travels.",
    "cn": "智慧農業讓我叔叔能用手機查看溫室的溫度，所以他即使出門旅行也能放心。"
  },
  {
    "word": "high-yield",
    "pos": "adj.",
    "cn_def": "高產量的",
    "en_def": "producing a large amount of crops",
    "sentence": "Scientists developed {{BLANK}} rice in the 1960s, and it helped millions of people in Asia escape hunger.",
    "cn": "科學家在1960年代培育出高產量的稻米，而它幫助亞洲數百萬人擺脫飢餓。"
  },
  {
    "word": "hybrid",
    "pos": "n.",
    "cn_def": "雜交種；混種",
    "en_def": "a plant or animal produced from two different types",
    "sentence": "This papaya is a {{BLANK}} of two local types, so it is both sweet and strong enough to survive the windy season.",
    "cn": "這種木瓜是兩個本地品種的雜交種，所以它既甜又強壯，能撐過多風的季節。"
  },
  {
    "word": "seed bank",
    "pos": "n.",
    "cn_def": "種子庫",
    "en_def": "a place where seeds are stored to protect plant varieties",
    "sentence": "A {{BLANK}} in Norway keeps millions of seeds deep inside a mountain, so crops can be replanted if a disaster happens.",
    "cn": "挪威的一座種子庫將數百萬顆種子保存在山的深處，所以如果發生災難，作物就能重新種植。"
  },
  {
    "word": "Green Revolution",
    "pos": "n.",
    "cn_def": "綠色革命",
    "en_def": "the rapid rise in crop production in the 1960s using new seeds and chemicals",
    "sentence": "The {{BLANK}} doubled rice harvests in many countries, but it also increased the use of chemicals and water.",
    "cn": "綠色革命讓許多國家的稻米收成加倍，但它也增加了化學物質和水的使用量。"
  },
  {
    "word": "agrochemical",
    "pos": "n.",
    "cn_def": "農用化學品",
    "en_def": "a chemical used in farming, such as a fertiliser or pesticide",
    "sentence": "The company sells every kind of {{BLANK}} to farmers, but it is also developing natural products because customers want safer food.",
    "cn": "這家公司向農民銷售各種農用化學品，但它也在研發天然產品，因為消費者想要更安全的食物。"
  },
  {
    "word": "mycoprotein",
    "pos": "n.",
    "cn_def": "真菌蛋白",
    "en_def": "protein made from a type of fungus, used instead of meat",
    "sentence": "The vegetarian nuggets are made from {{BLANK}}, and they taste surprisingly like chicken, so even my meat-loving father enjoyed them.",
    "cn": "這款素雞塊是用真菌蛋白做的，而且吃起來出奇地像雞肉，所以連愛吃肉的爸爸都很喜歡。"
  },
  {
    "word": "superfood",
    "pos": "n.",
    "cn_def": "超級食物",
    "en_def": "a food said to be especially good for your health",
    "sentence": "Blueberries are often called a {{BLANK}}, but nutritionists say that a balanced diet matters more than any single fruit.",
    "cn": "藍莓常被稱為超級食物，但營養師說均衡飲食比任何單一水果都更重要。"
  },
  {
    "word": "3D food printing",
    "pos": "n.",
    "cn_def": "3D食物列印",
    "en_def": "making food in shapes using a machine that builds it in layers",
    "sentence": "The hotel used {{BLANK}} to make chocolate in the shape of Taipei 101, and the guests took photos before they ate it.",
    "cn": "這家飯店運用3D食物列印做出台北101形狀的巧克力，客人在吃之前都先拍了照。"
  },
  {
    "word": "meal kit",
    "pos": "n.",
    "cn_def": "料理包；食材組",
    "en_def": "a box of ingredients and a recipe delivered to your home",
    "sentence": "My parents order a {{BLANK}} every week because they are busy, and all the ingredients arrive already measured.",
    "cn": "我爸媽因為很忙，每週都會訂一盒食材組，而且所有食材送來時都已經量好了。"
  },
  {
    "word": "food delivery app",
    "pos": "n.",
    "cn_def": "外送應用程式",
    "en_def": "a phone app used to order meals to your home",
    "sentence": "Students often use a {{BLANK}} late at night, but the plastic boxes create a lot of rubbish.",
    "cn": "學生常在深夜使用外送應用程式，但塑膠餐盒製造了大量垃圾。"
  },
  {
    "word": "bioreactor",
    "pos": "n.",
    "cn_def": "生物反應器",
    "en_def": "a large tank where cells or bacteria are grown",
    "sentence": "The meat cells grow inside a steel {{BLANK}} for several weeks, and scientists control the temperature very carefully.",
    "cn": "肉類細胞在鋼製的生物反應器裡生長好幾個星期，而科學家會非常小心地控制溫度。"
  }
];

const MCQS = [
  {
    "q": "Advances in _____ have made food safer and cheaper, but some people prefer traditional cooking because it feels more natural.",
    "options": [
      "water table",
      "food technology",
      "cash crop",
      "a bad apple"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "A _____ tested the new sauce for months, and she changed the recipe because the colour faded too quickly.",
    "options": [
      "food scientist",
      "a piece of cake",
      "nutrition label",
      "food safety"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "_____ could reduce the number of animals that are killed, but it is still too expensive for most families to buy.",
    "options": [
      "food miles",
      "balanced diet",
      "sugar cane",
      "lab-grown meat"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The burger shop now offers a _____ burger, and many customers cannot tell the difference from beef.",
    "options": [
      "impervious",
      "indicative",
      "plant-based",
      "collateral"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Tofu has been a popular _____ in Asia for centuries, so new plant-based products are not really a new idea here.",
    "options": [
      "meat substitute",
      "food miles",
      "growth hormone",
      "food safety"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Investors are spending billions on _____ because the world's population is growing, and farms cannot produce enough meat for everyone.",
    "options": [
      "crop rotation",
      "sugar cane",
      "food inspector",
      "alternative protein"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Crickets are an _____ that is rich in protein, but many people in Taiwan still feel nervous about tasting them.",
    "options": [
      "food miles",
      "edible insect",
      "crop rotation",
      "animal welfare"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Most of the soybeans that Taiwan imports are _____, so tofu makers must label clearly which products use them.",
    "options": [
      "a bad apple",
      "in season",
      "genetically modified",
      "put all one's eggs in one basket"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "School lunches in Taiwan cannot contain any _____, because parents asked the government to make this rule several years ago.",
    "options": [
      "silage",
      "GMO",
      "weed",
      "tractor"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Scientists are using _____ to create rice that survives floods, and farmers in Asia hope it will protect their harvests.",
    "options": [
      "farmers' market",
      "cash crop",
      "gene editing",
      "cold chain"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My sister wants to study _____ at university, because she believes it can help farmers grow food with fewer chemicals.",
    "options": [
      "biotechnology",
      "beehive",
      "elasticity",
      "vegan"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The restaurant grows its own lettuce using _____, so it needs no soil, and the leaves are picked just before serving.",
    "options": [
      "nourishment",
      "sweetener",
      "overreliance",
      "hydroponics"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our school built an _____ system in the science lab, and the students feed the fish while the plants clean the water.",
    "options": [
      "aquaponics",
      "vegan",
      "broiler",
      "salinisation"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "_____ allows cities to produce vegetables in tall buildings, but the lights use a lot of electricity, so costs remain high.",
    "options": [
      "farmers' market",
      "combine harvester",
      "vertical farming",
      "nutrition label"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The _____ near the train station grows herbs all year round, and typhoons cannot damage the crops because they are inside.",
    "options": [
      "food handler",
      "indoor farm",
      "junk food",
      "food safety"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "With _____, farmers use drones and sensors to find dry areas, so they only water the plants that really need it.",
    "options": [
      "shelf life",
      "food bank",
      "crop rotation",
      "precision agriculture"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Young engineers are starting _____ companies in Taiwan, and they hope their apps will help older farmers save time and water.",
    "options": [
      "reliance",
      "agritech",
      "wholesaler",
      "dosage"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "_____ lets my uncle check the temperature of his greenhouse on his phone, so he can relax even when he travels.",
    "options": [
      "smart farming",
      "cold storage",
      "animal welfare",
      "bulk buying"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Scientists developed _____ rice in the 1960s, and it helped millions of people in Asia escape hunger.",
    "options": [
      "inordinate",
      "judicious",
      "tenable",
      "high-yield"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "This papaya is a _____ of two local types, so it is both sweet and strong enough to survive the windy season.",
    "options": [
      "embargo",
      "sourcing",
      "hybrid",
      "hay"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "A _____ in Norway keeps millions of seeds deep inside a mountain, so crops can be replanted if a disaster happens.",
    "options": [
      "shelf life",
      "seed bank",
      "cash crop",
      "food for thought"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The _____ doubled rice harvests in many countries, but it also increased the use of chemicals and water.",
    "options": [
      "Green Revolution",
      "crop rotation",
      "animal welfare",
      "growth hormone"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The company sells every kind of _____ to farmers, but it is also developing natural products because customers want safer food.",
    "options": [
      "barn",
      "adjunct",
      "agrochemical",
      "retailer"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The vegetarian nuggets are made from _____, and they taste surprisingly like chicken, so even my meat-loving father enjoyed them.",
    "options": [
      "cascade",
      "vigilance",
      "refinement",
      "mycoprotein"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Blueberries are often called a _____, but nutritionists say that a balanced diet matters more than any single fruit.",
    "options": [
      "refinement",
      "superfood",
      "reciprocity",
      "sickle"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The hotel used _____ to make chocolate in the shape of Taipei 101, and the guests took photos before they ate it.",
    "options": [
      "bread and butter",
      "food safety",
      "a piece of cake",
      "3D food printing"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "My parents order a _____ every week because they are busy, and all the ingredients arrive already measured.",
    "options": [
      "serving size",
      "battery cage",
      "meal kit",
      "milking machine"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Students often use a _____ late at night, but the plastic boxes create a lot of rubbish.",
    "options": [
      "food delivery app",
      "cash crop",
      "doggy bag",
      "milking machine"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The meat cells grow inside a steel _____ for several weeks, and scientists control the temperature very carefully.",
    "options": [
      "seasonality",
      "insecticide",
      "meadow",
      "bioreactor"
    ],
    "answer": 3,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "food technology": {
    "pos": "n.",
    "en_def": "the science of making, storing and improving food",
    "cn_def": "食品科技"
  },
  "food scientist": {
    "pos": "n.",
    "en_def": "a person who studies how food is made and kept safe",
    "cn_def": "食品科學家"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
  },
  "plant-based": {
    "pos": "adj.",
    "en_def": "made from plants rather than animals",
    "cn_def": "植物性的；以植物為原料的"
  },
  "meat substitute": {
    "pos": "n.",
    "en_def": "a food that is used instead of meat",
    "cn_def": "肉類替代品"
  },
  "alternative protein": {
    "pos": "n.",
    "en_def": "a source of protein other than traditional meat",
    "cn_def": "替代蛋白質"
  },
  "edible insect": {
    "pos": "n.",
    "en_def": "an insect that is safe for people to eat",
    "cn_def": "可食用昆蟲"
  },
  "genetically modified": {
    "pos": "adj.",
    "en_def": "having genes changed by scientists",
    "cn_def": "基因改造的"
  },
  "gmo": {
    "pos": "n.",
    "en_def": "a living thing whose genes have been changed by science",
    "cn_def": "基因改造生物"
  },
  "gene editing": {
    "pos": "n.",
    "en_def": "changing the DNA of a living thing in a precise way",
    "cn_def": "基因編輯"
  },
  "biotechnology": {
    "pos": "n.",
    "en_def": "using living cells and bacteria to make useful products",
    "cn_def": "生物科技"
  },
  "hydroponics": {
    "pos": "n.",
    "en_def": "growing plants in water with nutrients instead of soil",
    "cn_def": "水耕栽培"
  },
  "aquaponics": {
    "pos": "n.",
    "en_def": "a system where fish and plants are raised together in water",
    "cn_def": "魚菜共生"
  },
  "vertical farming": {
    "pos": "n.",
    "en_def": "growing crops in stacked layers, often inside buildings",
    "cn_def": "垂直農法"
  },
  "indoor farm": {
    "pos": "n.",
    "en_def": "a farm inside a building with controlled light and temperature",
    "cn_def": "室內農場"
  },
  "precision agriculture": {
    "pos": "n.",
    "en_def": "farming that uses data and technology to treat each part of a field correctly",
    "cn_def": "精準農業"
  },
  "agritech": {
    "pos": "n.",
    "en_def": "technology used to improve farming",
    "cn_def": "農業科技"
  },
  "smart farming": {
    "pos": "n.",
    "en_def": "farming with connected devices that collect and share data",
    "cn_def": "智慧農業"
  },
  "high-yield": {
    "pos": "adj.",
    "en_def": "producing a large amount of crops",
    "cn_def": "高產量的"
  },
  "hybrid": {
    "pos": "n.",
    "en_def": "a plant or animal produced from two different types",
    "cn_def": "雜交種；混種"
  },
  "seed bank": {
    "pos": "n.",
    "en_def": "a place where seeds are stored to protect plant varieties",
    "cn_def": "種子庫"
  },
  "green revolution": {
    "pos": "n.",
    "en_def": "the rapid rise in crop production in the 1960s using new seeds and chemicals",
    "cn_def": "綠色革命"
  },
  "agrochemical": {
    "pos": "n.",
    "en_def": "a chemical used in farming, such as a fertiliser or pesticide",
    "cn_def": "農用化學品"
  },
  "mycoprotein": {
    "pos": "n.",
    "en_def": "protein made from a type of fungus, used instead of meat",
    "cn_def": "真菌蛋白"
  },
  "superfood": {
    "pos": "n.",
    "en_def": "a food said to be especially good for your health",
    "cn_def": "超級食物"
  },
  "3d food printing": {
    "pos": "n.",
    "en_def": "making food in shapes using a machine that builds it in layers",
    "cn_def": "3D食物列印"
  },
  "meal kit": {
    "pos": "n.",
    "en_def": "a box of ingredients and a recipe delivered to your home",
    "cn_def": "料理包；食材組"
  },
  "food delivery app": {
    "pos": "n.",
    "en_def": "a phone app used to order meals to your home",
    "cn_def": "外送應用程式"
  },
  "bioreactor": {
    "pos": "n.",
    "en_def": "a large tank where cells or bacteria are grown",
    "cn_def": "生物反應器"
  },
  "water table": {
    "pos": "n.",
    "en_def": "the level below which the ground is full of water",
    "cn_def": "地下水位"
  },
  "cash crop": {
    "pos": "n.",
    "en_def": "a crop grown to sell rather than to eat at home",
    "cn_def": "經濟作物"
  },
  "a bad apple": {
    "pos": "n.phr.",
    "en_def": "one bad person who has a bad effect on others",
    "cn_def": "害群之馬"
  },
  "a piece of cake": {
    "pos": "n.phr.",
    "en_def": "something very easy to do",
    "cn_def": "小事一樁；易如反掌"
  },
  "nutrition label": {
    "pos": "n.",
    "en_def": "information on a food package about its nutrients",
    "cn_def": "營養標示"
  },
  "food safety": {
    "pos": "n.",
    "en_def": "keeping food free from things that can make people ill",
    "cn_def": "食品安全"
  },
  "food miles": {
    "pos": "n.",
    "en_def": "the distance food travels from where it is grown to where it is eaten",
    "cn_def": "食物里程"
  },
  "balanced diet": {
    "pos": "n.",
    "en_def": "eating the right amounts of different kinds of food",
    "cn_def": "均衡飲食"
  },
  "sugar cane": {
    "pos": "n.",
    "en_def": "a tall plant whose stems are used to make sugar",
    "cn_def": "甘蔗"
  },
  "impervious": {
    "pos": "adj.",
    "en_def": "not affected by something, or not letting water through",
    "cn_def": "不受影響的；不透水的"
  },
  "indicative": {
    "pos": "adj.",
    "en_def": "showing or suggesting something",
    "cn_def": "表明的；暗示的"
  },
  "collateral": {
    "pos": "adj.",
    "en_def": "happening as an extra, unplanned result of something",
    "cn_def": "附帶的；間接的"
  },
  "growth hormone": {
    "pos": "n.",
    "en_def": "a chemical that makes animals grow bigger faster",
    "cn_def": "生長激素"
  },
  "crop rotation": {
    "pos": "n.",
    "en_def": "growing different crops in a field in different years",
    "cn_def": "輪作"
  },
  "food inspector": {
    "pos": "n.",
    "en_def": "an official who checks that food and restaurants are safe",
    "cn_def": "食品稽查員"
  },
  "animal welfare": {
    "pos": "n.",
    "en_def": "the health and comfort of animals",
    "cn_def": "動物福利"
  },
  "in season": {
    "pos": "adj.phr.",
    "en_def": "(of fruit or vegetables) available and at their best now",
    "cn_def": "當季的"
  },
  "put all one's eggs in one basket": {
    "pos": "v.phr.",
    "en_def": "to depend on only one plan or thing",
    "cn_def": "孤注一擲"
  },
  "silage": {
    "pos": "n.",
    "en_def": "green plants stored without air and used as animal food",
    "cn_def": "青貯飼料"
  },
  "weed": {
    "pos": "n.",
    "en_def": "a wild plant growing where it is not wanted",
    "cn_def": "雜草"
  },
  "tractor": {
    "pos": "n.",
    "en_def": "a strong farm vehicle used to pull machines",
    "cn_def": "拖拉機；耕耘機"
  },
  "farmers' market": {
    "pos": "n.",
    "en_def": "a market where farmers sell their own produce directly",
    "cn_def": "農夫市集"
  },
  "cold chain": {
    "pos": "n.",
    "en_def": "a system that keeps food cold from farm to shop",
    "cn_def": "冷鏈"
  },
  "beehive": {
    "pos": "n.",
    "en_def": "a box or structure where bees live and make honey",
    "cn_def": "蜂巢；蜂箱"
  },
  "elasticity": {
    "pos": "n.",
    "en_def": "how much demand changes when prices change",
    "cn_def": "彈性"
  },
  "vegan": {
    "pos": "n.",
    "en_def": "a person who eats no animal products at all",
    "cn_def": "純素食者"
  },
  "nourishment": {
    "pos": "n.",
    "en_def": "food needed to live and grow",
    "cn_def": "營養；食物"
  },
  "sweetener": {
    "pos": "n.",
    "en_def": "a substance used instead of sugar to make food sweet",
    "cn_def": "甜味劑"
  },
  "overreliance": {
    "pos": "n.",
    "en_def": "depending too much on something",
    "cn_def": "過度依賴"
  },
  "broiler": {
    "pos": "n.",
    "en_def": "a young chicken raised for its meat",
    "cn_def": "肉雞"
  },
  "salinisation": {
    "pos": "n.",
    "en_def": "the process of soil becoming too salty",
    "cn_def": "鹽化"
  },
  "combine harvester": {
    "pos": "n.",
    "en_def": "a large machine that cuts and cleans grain in one go",
    "cn_def": "聯合收割機"
  },
  "food handler": {
    "pos": "n.",
    "en_def": "a person whose job involves preparing or serving food",
    "cn_def": "食品從業人員"
  },
  "junk food": {
    "pos": "n.",
    "en_def": "food that is tasty but unhealthy",
    "cn_def": "垃圾食物"
  },
  "shelf life": {
    "pos": "n.",
    "en_def": "how long a product can be kept before it goes bad",
    "cn_def": "保存期限；架售期"
  },
  "food bank": {
    "pos": "n.",
    "en_def": "a place that gives free food to people in need",
    "cn_def": "食物銀行"
  },
  "reliance": {
    "pos": "n.",
    "en_def": "the state of depending on something",
    "cn_def": "依賴"
  },
  "wholesaler": {
    "pos": "n.",
    "en_def": "a business that sells large amounts of goods to shops",
    "cn_def": "批發商"
  },
  "dosage": {
    "pos": "n.",
    "en_def": "the amount of a medicine or chemical given at one time",
    "cn_def": "劑量"
  },
  "cold storage": {
    "pos": "n.",
    "en_def": "keeping food in a cold place so it stays fresh",
    "cn_def": "冷藏庫；冷藏儲存"
  },
  "bulk buying": {
    "pos": "n.",
    "en_def": "buying large amounts at one time, usually at a lower price",
    "cn_def": "大量採購"
  },
  "inordinate": {
    "pos": "adj.",
    "en_def": "far more than is reasonable",
    "cn_def": "過度的"
  },
  "judicious": {
    "pos": "adj.",
    "en_def": "showing good judgement",
    "cn_def": "明智的；審慎的"
  },
  "tenable": {
    "pos": "adj.",
    "en_def": "able to be defended or kept going",
    "cn_def": "站得住腳的；可維持的"
  },
  "embargo": {
    "pos": "n.",
    "en_def": "an official ban on trade with another country",
    "cn_def": "禁運"
  },
  "sourcing": {
    "pos": "n.",
    "en_def": "the process of finding where to get supplies",
    "cn_def": "採購來源；貨源管理"
  },
  "hay": {
    "pos": "n.",
    "en_def": "grass that has been cut and dried to feed animals",
    "cn_def": "乾草"
  },
  "food for thought": {
    "pos": "n.phr.",
    "en_def": "an idea that makes you think seriously",
    "cn_def": "值得深思的事"
  },
  "barn": {
    "pos": "n.",
    "en_def": "a large farm building for animals, crops or machines",
    "cn_def": "穀倉；畜舍"
  },
  "adjunct": {
    "pos": "n.",
    "en_def": "something added to a more important thing",
    "cn_def": "附屬物；輔助"
  },
  "retailer": {
    "pos": "n.",
    "en_def": "a business that sells goods directly to the public",
    "cn_def": "零售商"
  },
  "cascade": {
    "pos": "n.",
    "en_def": "a series of things that happen one after another",
    "cn_def": "一連串；連鎖"
  },
  "vigilance": {
    "pos": "n.",
    "en_def": "careful attention to notice possible danger",
    "cn_def": "警覺；警惕"
  },
  "refinement": {
    "pos": "n.",
    "en_def": "a small change that improves something",
    "cn_def": "改良；精煉"
  },
  "reciprocity": {
    "pos": "n.",
    "en_def": "exchanging things with others for mutual benefit",
    "cn_def": "互惠"
  },
  "sickle": {
    "pos": "n.",
    "en_def": "a curved blade with a short handle used for cutting crops",
    "cn_def": "鐮刀"
  },
  "bread and butter": {
    "pos": "n.phr.",
    "en_def": "the main way someone earns money",
    "cn_def": "主要收入來源；生計"
  },
  "serving size": {
    "pos": "n.",
    "en_def": "the amount of food that counts as one portion on a label",
    "cn_def": "每份份量"
  },
  "battery cage": {
    "pos": "n.",
    "en_def": "a very small cage where egg-laying hens are kept",
    "cn_def": "層架式雞籠（格子籠）"
  },
  "milking machine": {
    "pos": "n.",
    "en_def": "a machine used to take milk from cows",
    "cn_def": "擠奶機"
  },
  "doggy bag": {
    "pos": "n.",
    "en_def": "a bag or box for taking home food you did not finish at a restaurant",
    "cn_def": "打包袋（剩菜外帶）"
  },
  "seasonality": {
    "pos": "n.",
    "en_def": "the way something changes with the seasons",
    "cn_def": "季節性"
  },
  "insecticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects",
    "cn_def": "殺蟲劑"
  },
  "meadow": {
    "pos": "n.",
    "en_def": "a field of grass and wild flowers",
    "cn_def": "草地；草原"
  }
};

const EXTRA_GLOSSES = {};
