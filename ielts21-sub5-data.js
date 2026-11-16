// Topic 21 Subunit 5 Quiz Data: Mining & Minerals 採礦與礦物
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S05 - Mining & Minerals 採礦與礦物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mining",
    "pos": "n.",
    "cn_def": "採礦",
    "en_def": "the work of digging minerals out of the ground",
    "sentence": "{{BLANK}} is the main industry in this region, so many families depend on it for their income.",
    "cn": "採礦是這個地區的主要產業，所以許多家庭仰賴它維持收入。"
  },
  {
    "word": "mine",
    "pos": "n.",
    "cn_def": "礦坑",
    "en_def": "a deep hole or tunnels where minerals are dug out",
    "sentence": "My great-grandfather worked in a gold {{BLANK}} for thirty years, and he often told stories about the dark tunnels.",
    "cn": "我曾祖父在金礦坑工作了三十年，他常常講那些黑暗坑道的故事。"
  },
  {
    "word": "open-pit mine",
    "pos": "n.phr.",
    "cn_def": "露天礦",
    "en_def": "a mine dug as a huge hole from the surface",
    "sentence": "The {{BLANK}} is so big that you can see it from space, and the trucks inside look like tiny toys.",
    "cn": "這座露天礦大到從太空就看得見，裡面的卡車看起來就像小玩具。"
  },
  {
    "word": "strip mining",
    "pos": "n.phr.",
    "cn_def": "露天剝採",
    "en_def": "removing the top layer of land to reach coal",
    "sentence": "{{BLANK}} destroyed the forests on the hills, so the company now has to plant new trees and restore the soil.",
    "cn": "露天剝採摧毀了山丘上的森林，所以公司現在必須種新樹並恢復土壤。"
  },
  {
    "word": "deep-sea mining",
    "pos": "n.phr.",
    "cn_def": "深海採礦",
    "en_def": "taking metals from the bottom of the ocean",
    "sentence": "Scientists warn that {{BLANK}} could harm creatures we have not discovered yet, but companies say the metals are needed.",
    "cn": "科學家警告深海採礦可能傷害我們尚未發現的生物，但公司表示這些金屬是必需的。"
  },
  {
    "word": "mining town",
    "pos": "n.phr.",
    "cn_def": "礦業小鎮",
    "en_def": "a town built around a mine",
    "sentence": "Jiufen was once a busy {{BLANK}}, but now it is famous for its tea houses and beautiful views.",
    "cn": "九份曾經是繁忙的礦業小鎮，但現在它以茶館和美麗景色聞名。"
  },
  {
    "word": "ore deposit",
    "pos": "n.phr.",
    "cn_def": "礦床",
    "en_def": "a natural collection of rock containing useful metal",
    "sentence": "Geologists found a rich {{BLANK}} in the mountains, and a company soon asked for permission to start digging.",
    "cn": "地質學家在山中發現了一處豐富的礦床，一家公司很快就申請開挖許可。"
  },
  {
    "word": "rare earth elements",
    "pos": "n.phr.",
    "cn_def": "稀土元素",
    "en_def": "special metals used in phones, magnets and electric cars",
    "sentence": "Your smartphone contains several {{BLANK}}, and most of them come from mines in just a few countries.",
    "cn": "你的智慧型手機含有好幾種稀土元素，而其中大多數來自少數幾個國家的礦場。"
  },
  {
    "word": "lithium",
    "pos": "n.",
    "cn_def": "鋰",
    "en_def": "a light metal used in rechargeable batteries",
    "sentence": "Demand for {{BLANK}} has grown quickly because electric cars need it for their batteries, so its price has gone up.",
    "cn": "對鋰的需求快速成長，因為電動車的電池需要它，所以它的價格上漲了。"
  },
  {
    "word": "cobalt",
    "pos": "n.",
    "cn_def": "鈷",
    "en_def": "a hard metal used in batteries and blue colours",
    "sentence": "Much of the world's {{BLANK}} comes from Central Africa, and some mines there have been criticised for using child workers.",
    "cn": "世界上大部分的鈷來自中非，而那裡有些礦場因使用童工而遭受批評。"
  },
  {
    "word": "nickel",
    "pos": "n.",
    "cn_def": "鎳",
    "en_def": "a silver-coloured metal used in batteries and coins",
    "sentence": "Indonesia produces a lot of {{BLANK}}, and it wants to build battery factories instead of only selling the raw metal.",
    "cn": "印尼生產大量的鎳，它想要建造電池工廠，而不只是出售原料金屬。"
  },
  {
    "word": "gold",
    "pos": "n.",
    "cn_def": "黃金",
    "en_def": "a valuable yellow metal",
    "sentence": "People often buy {{BLANK}} when the economy is uncertain, because they believe its value will stay high.",
    "cn": "經濟不確定時人們常購買黃金，因為他們相信它的價值會維持在高點。"
  },
  {
    "word": "silver",
    "pos": "n.",
    "cn_def": "銀",
    "en_def": "a valuable shiny grey metal",
    "sentence": "{{BLANK}} is used in solar panels as well as jewellery, so the growing solar industry has increased its price.",
    "cn": "銀除了用在珠寶，也用在太陽能板上，所以成長中的太陽能產業推升了它的價格。"
  },
  {
    "word": "platinum",
    "pos": "n.",
    "cn_def": "鉑；白金",
    "en_def": "a rare and valuable silver-white metal",
    "sentence": "Car makers use {{BLANK}} to clean exhaust gases, and it is also used in hydrogen fuel cells.",
    "cn": "汽車製造商使用白金來淨化廢氣，它也被用在氫燃料電池中。"
  },
  {
    "word": "aluminium",
    "pos": "n.",
    "cn_def": "鋁",
    "en_def": "a light silver metal used for cans and planes",
    "sentence": "Recycling one {{BLANK}} can saves enough energy to run a television for three hours, so please do not throw cans away.",
    "cn": "回收一個鋁罐所節省的能源足以讓電視運轉三小時，所以請不要把罐子丟掉。"
  },
  {
    "word": "bauxite",
    "pos": "n.",
    "cn_def": "鋁土礦",
    "en_def": "the rock from which aluminium is made",
    "sentence": "Australia exports huge amounts of {{BLANK}}, and factories in other countries turn it into aluminium for cans and cars.",
    "cn": "澳洲出口大量的鋁土礦，其他國家的工廠把它製成用於罐子和汽車的鋁。"
  },
  {
    "word": "zinc",
    "pos": "n.",
    "cn_def": "鋅",
    "en_def": "a blue-white metal used to protect steel from rust",
    "sentence": "The steel roof is covered with a thin layer of {{BLANK}}, so it does not rust even in the wet coastal weather.",
    "cn": "鋼製屋頂覆蓋著一層薄薄的鋅，所以即使在潮濕的海邊氣候中也不會生鏽。"
  },
  {
    "word": "tin",
    "pos": "n.",
    "cn_def": "錫",
    "en_def": "a soft silver metal often used to coat other metals",
    "sentence": "Electronic parts are joined with a mix that contains {{BLANK}}, so this metal is important for the phone industry.",
    "cn": "電子零件是用含有錫的焊料連接的，所以這種金屬對手機產業很重要。"
  },
  {
    "word": "diamond",
    "pos": "n.",
    "cn_def": "鑽石",
    "en_def": "a very hard, clear and valuable stone",
    "sentence": "Some {{BLANK}} are mined in war zones, so many buyers now ask for proof that their stones were mined fairly.",
    "cn": "有些鑽石是在戰區開採的，所以許多買家現在要求證明他們的寶石是以公平方式開採的。"
  },
  {
    "word": "precious metal",
    "pos": "n.phr.",
    "cn_def": "貴金屬",
    "en_def": "a rare metal of high value, such as gold",
    "sentence": "Old phones contain small amounts of {{BLANK}}, so recycling them can be more profitable than mining new ore.",
    "cn": "舊手機含有少量的貴金屬，所以回收它們可能比開採新礦更有利可圖。"
  },
  {
    "word": "prospector",
    "pos": "n.",
    "cn_def": "探礦者",
    "en_def": "a person who searches for gold or minerals",
    "sentence": "In the 1800s, a lucky {{BLANK}} could become rich overnight, but most people who searched for gold found nothing.",
    "cn": "在十九世紀，一位幸運的探礦者可能一夜致富，但大多數尋找黃金的人一無所獲。"
  },
  {
    "word": "gold rush",
    "pos": "n.phr.",
    "cn_def": "淘金熱",
    "en_def": "a time when many people rush to a place to find gold",
    "sentence": "The California {{BLANK}} brought thousands of people to the west, and small villages quickly grew into busy cities.",
    "cn": "加州淘金熱吸引了數千人前往西部，小村莊很快發展成繁忙的城市。"
  },
  {
    "word": "excavator",
    "pos": "n.",
    "cn_def": "挖土機",
    "en_def": "a large machine used for digging",
    "sentence": "A huge {{BLANK}} was digging up the hillside, so the road was closed and we had to take a longer way home.",
    "cn": "一台巨大的挖土機正在挖山坡，所以道路封閉，我們只好繞遠路回家。"
  },
  {
    "word": "tailings",
    "pos": "n.",
    "cn_def": "尾礦",
    "en_def": "waste rock and mud left after mining",
    "sentence": "The dam holding the mine's {{BLANK}} broke after heavy rain, and toxic mud flowed into the river and killed the fish.",
    "cn": "圍住礦場尾礦的壩在豪雨後潰堤，有毒的泥漿流入河中，毒死了魚。"
  },
  {
    "word": "slag",
    "pos": "n.",
    "cn_def": "爐渣",
    "en_def": "waste material left after metal is taken from rock",
    "sentence": "The steel factory used to dump its {{BLANK}} near the beach, but now it turns this waste into material for roads.",
    "cn": "這家鋼鐵廠過去把爐渣倒在海灘附近，但現在把這種廢料變成鋪路材料。"
  },
  {
    "word": "mineral rights",
    "pos": "n.phr.",
    "cn_def": "礦業權",
    "en_def": "the legal right to take minerals from a piece of land",
    "sentence": "The farmer owns the land, but a company bought the {{BLANK}}, so it can dig under his fields.",
    "cn": "這位農夫擁有這塊地，但一家公司買下了礦業權，所以它可以在他的田地底下開挖。"
  },
  {
    "word": "conflict minerals",
    "pos": "n.phr.",
    "cn_def": "衝突礦產",
    "en_def": "minerals mined in war areas that help pay for fighting",
    "sentence": "Tech companies promise not to use {{BLANK}}, because they do not want their products to support violence.",
    "cn": "科技公司承諾不使用衝突礦產，因為他們不希望自己的產品支持暴力。"
  },
  {
    "word": "sand mining",
    "pos": "n.phr.",
    "cn_def": "採砂",
    "en_def": "taking sand from rivers and beaches for building",
    "sentence": "Illegal {{BLANK}} has made the river much deeper, so the bridge is now in danger of falling down.",
    "cn": "非法採砂讓河道變得深很多，所以那座橋現在有倒塌的危險。"
  },
  {
    "word": "smelter",
    "pos": "n.",
    "cn_def": "冶煉廠",
    "en_def": "a factory where metal is taken out of rock by heating",
    "sentence": "The copper {{BLANK}} near the river closed down, so hundreds of workers lost their jobs but the air became cleaner.",
    "cn": "河邊的銅冶煉廠關閉了，所以數百名工人失業，但空氣變乾淨了。"
  },
  {
    "word": "scrap metal",
    "pos": "n.phr.",
    "cn_def": "廢金屬",
    "en_def": "old metal that can be melted and used again",
    "sentence": "My neighbour collects {{BLANK}} from old cars and machines, and he sells it to a recycling factory every week.",
    "cn": "我鄰居從舊車和機器收集廢金屬，每週把它賣給回收工廠。"
  },
  {
    "word": "seismic survey",
    "pos": "n.phr.",
    "cn_def": "震測調查",
    "en_def": "a study that uses sound waves to look under the ground",
    "sentence": "The company carried out a {{BLANK}} in the bay, but environmental groups said the loud noise could hurt whales.",
    "cn": "這家公司在海灣進行了震測調查，但環保團體說巨大的噪音可能傷害鯨魚。"
  },
  {
    "word": "iron",
    "pos": "n.",
    "cn_def": "鐵",
    "en_def": "a strong grey metal used to make steel",
    "sentence": "{{BLANK}} is mixed with a little carbon to make steel, so it is one of the most important metals in the world.",
    "cn": "鐵加入少量的碳就能製成鋼，所以它是世界上最重要的金屬之一。"
  }
];

const MCQS = [
  {
    "q": "_____ is the main industry in this region, so many families depend on it for their income.",
    "options": [
      "brink",
      "mining",
      "outsourcing",
      "aridity"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "My great-grandfather worked in a gold _____ for thirty years, and he often told stories about the dark tunnels.",
    "options": [
      "footprint",
      "lifetime",
      "mine",
      "insecurity"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The _____ is so big that you can see it from space, and the trucks inside look like tiny toys.",
    "options": [
      "natural resources",
      "energy demand",
      "charging station",
      "open-pit mine"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "_____ destroyed the forests on the hills, so the company now has to plant new trees and restore the soil.",
    "options": [
      "strip mining",
      "natural gas",
      "lead time",
      "charging station"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Scientists warn that _____ could harm creatures we have not discovered yet, but companies say the metals are needed.",
    "options": [
      "oil crisis",
      "deep-sea mining",
      "wave energy",
      "circular economy"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Jiufen was once a busy _____, but now it is famous for its tea houses and beautiful views.",
    "options": [
      "water supply",
      "shale gas",
      "circular economy",
      "mining town"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Geologists found a rich _____ in the mountains, and a company soon asked for permission to start digging.",
    "options": [
      "liquefied natural gas",
      "power plant",
      "ore deposit",
      "peak oil"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Your smartphone contains several _____, and most of them come from mines in just a few countries.",
    "options": [
      "rare earth elements",
      "resource efficiency",
      "jet fuel",
      "nuclear reactor"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Demand for _____ has grown quickly because electric cars need it for their batteries, so its price has gone up.",
    "options": [
      "outage",
      "brink",
      "uranium",
      "lithium"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Much of the world's _____ comes from Central Africa, and some mines there have been criticised for using child workers.",
    "options": [
      "barrel",
      "cobalt",
      "e-waste",
      "biogas"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Indonesia produces a lot of _____, and it wants to build battery factories instead of only selling the raw metal.",
    "options": [
      "coolant",
      "transformer",
      "nickel",
      "payoff"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "People often buy _____ when the economy is uncertain, because they believe its value will stay high.",
    "options": [
      "gold",
      "asymmetry",
      "slowdown",
      "watt"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "_____ is used in solar panels as well as jewellery, so the growing solar industry has increased its price.",
    "options": [
      "fallback",
      "activism",
      "silver",
      "rotor"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Car makers use _____ to clean exhaust gases, and it is also used in hydrogen fuel cells.",
    "options": [
      "petrol",
      "discontinuation",
      "lifetime",
      "platinum"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Recycling one _____ can saves enough energy to run a television for three hours, so please do not throw cans away.",
    "options": [
      "footprint",
      "aluminium",
      "fundamentals",
      "minimisation"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Australia exports huge amounts of _____, and factories in other countries turn it into aluminium for cans and cars.",
    "options": [
      "bauxite",
      "diminution",
      "underinvestment",
      "coolant"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The steel roof is covered with a thin layer of _____, so it does not rust even in the wet coastal weather.",
    "options": [
      "estimation",
      "dilution",
      "zinc",
      "directive"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Electronic parts are joined with a mix that contains _____, so this metal is important for the phone industry.",
    "options": [
      "devolution",
      "tin",
      "phase-out",
      "megawatt"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Some _____ are mined in war zones, so many buyers now ask for proof that their stones were mined fairly.",
    "options": [
      "fission",
      "pylon",
      "prospecting",
      "diamond"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Old phones contain small amounts of _____, so recycling them can be more profitable than mining new ore.",
    "options": [
      "precious metal",
      "gas guzzler",
      "nuclear accident",
      "nuclear reactor"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "In the 1800s, a lucky _____ could become rich overnight, but most people who searched for gold found nothing.",
    "options": [
      "privatisation",
      "inflow",
      "prospector",
      "footprint"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The California _____ brought thousands of people to the west, and small villages quickly grew into busy cities.",
    "options": [
      "smart thermostat",
      "gold rush",
      "extension cord",
      "crude oil"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "A huge _____ was digging up the hillside, so the road was closed and we had to take a longer way home.",
    "options": [
      "excavator",
      "pipeline",
      "consumable",
      "plutonium"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The dam holding the mine's _____ broke after heavy rain, and toxic mud flowed into the river and killed the fish.",
    "options": [
      "kilowatt",
      "abolition",
      "independence",
      "tailings"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The steel factory used to dump its _____ near the beach, but now it turns this waste into material for roads.",
    "options": [
      "reclamation",
      "kerosene",
      "slag",
      "acceptability"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The farmer owns the land, but a company bought the _____, so it can dig under his fields.",
    "options": [
      "resource curse",
      "rebound effect",
      "power bank",
      "mineral rights"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Tech companies promise not to use _____, because they do not want their products to support violence.",
    "options": [
      "conflict minerals",
      "power plant",
      "electric car",
      "water rights"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Illegal _____ has made the river much deeper, so the bridge is now in danger of falling down.",
    "options": [
      "energy audit",
      "sand mining",
      "wind power",
      "heat loss"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The copper _____ near the river closed down, so hundreds of workers lost their jobs but the air became cleaner.",
    "options": [
      "smelter",
      "diesel",
      "neutrality",
      "relocation"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "My neighbour collects _____ from old cars and machines, and he sells it to a recycling factory every week.",
    "options": [
      "oil field",
      "alternating current",
      "scrap metal",
      "load shedding"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The company carried out a _____ in the bay, but environmental groups said the loud noise could hurt whales.",
    "options": [
      "water rights",
      "nuclear waste",
      "energy independence",
      "seismic survey"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "_____ is mixed with a little carbon to make steel, so it is one of the most important metals in the world.",
    "options": [
      "multiplier",
      "iron",
      "inflow",
      "cost-effectiveness"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "mining": {
    "pos": "n.",
    "en_def": "the work of digging minerals out of the ground",
    "cn_def": "採礦"
  },
  "mine": {
    "pos": "n.",
    "en_def": "a deep hole or tunnels where minerals are dug out",
    "cn_def": "礦坑"
  },
  "open-pit mine": {
    "pos": "n.phr.",
    "en_def": "a mine dug as a huge hole from the surface",
    "cn_def": "露天礦"
  },
  "strip mining": {
    "pos": "n.phr.",
    "en_def": "removing the top layer of land to reach coal",
    "cn_def": "露天剝採"
  },
  "deep-sea mining": {
    "pos": "n.phr.",
    "en_def": "taking metals from the bottom of the ocean",
    "cn_def": "深海採礦"
  },
  "mining town": {
    "pos": "n.phr.",
    "en_def": "a town built around a mine",
    "cn_def": "礦業小鎮"
  },
  "ore deposit": {
    "pos": "n.phr.",
    "en_def": "a natural collection of rock containing useful metal",
    "cn_def": "礦床"
  },
  "rare earth elements": {
    "pos": "n.phr.",
    "en_def": "special metals used in phones, magnets and electric cars",
    "cn_def": "稀土元素"
  },
  "lithium": {
    "pos": "n.",
    "en_def": "a light metal used in rechargeable batteries",
    "cn_def": "鋰"
  },
  "cobalt": {
    "pos": "n.",
    "en_def": "a hard metal used in batteries and blue colours",
    "cn_def": "鈷"
  },
  "nickel": {
    "pos": "n.",
    "en_def": "a silver-coloured metal used in batteries and coins",
    "cn_def": "鎳"
  },
  "gold": {
    "pos": "n.",
    "en_def": "a valuable yellow metal",
    "cn_def": "黃金"
  },
  "silver": {
    "pos": "n.",
    "en_def": "a valuable shiny grey metal",
    "cn_def": "銀"
  },
  "platinum": {
    "pos": "n.",
    "en_def": "a rare and valuable silver-white metal",
    "cn_def": "鉑；白金"
  },
  "aluminium": {
    "pos": "n.",
    "en_def": "a light silver metal used for cans and planes",
    "cn_def": "鋁"
  },
  "bauxite": {
    "pos": "n.",
    "en_def": "the rock from which aluminium is made",
    "cn_def": "鋁土礦"
  },
  "zinc": {
    "pos": "n.",
    "en_def": "a blue-white metal used to protect steel from rust",
    "cn_def": "鋅"
  },
  "tin": {
    "pos": "n.",
    "en_def": "a soft silver metal often used to coat other metals",
    "cn_def": "錫"
  },
  "diamond": {
    "pos": "n.",
    "en_def": "a very hard, clear and valuable stone",
    "cn_def": "鑽石"
  },
  "precious metal": {
    "pos": "n.phr.",
    "en_def": "a rare metal of high value, such as gold",
    "cn_def": "貴金屬"
  },
  "prospector": {
    "pos": "n.",
    "en_def": "a person who searches for gold or minerals",
    "cn_def": "探礦者"
  },
  "gold rush": {
    "pos": "n.phr.",
    "en_def": "a time when many people rush to a place to find gold",
    "cn_def": "淘金熱"
  },
  "excavator": {
    "pos": "n.",
    "en_def": "a large machine used for digging",
    "cn_def": "挖土機"
  },
  "tailings": {
    "pos": "n.",
    "en_def": "waste rock and mud left after mining",
    "cn_def": "尾礦"
  },
  "slag": {
    "pos": "n.",
    "en_def": "waste material left after metal is taken from rock",
    "cn_def": "爐渣"
  },
  "mineral rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to take minerals from a piece of land",
    "cn_def": "礦業權"
  },
  "conflict minerals": {
    "pos": "n.phr.",
    "en_def": "minerals mined in war areas that help pay for fighting",
    "cn_def": "衝突礦產"
  },
  "sand mining": {
    "pos": "n.phr.",
    "en_def": "taking sand from rivers and beaches for building",
    "cn_def": "採砂"
  },
  "smelter": {
    "pos": "n.",
    "en_def": "a factory where metal is taken out of rock by heating",
    "cn_def": "冶煉廠"
  },
  "scrap metal": {
    "pos": "n.phr.",
    "en_def": "old metal that can be melted and used again",
    "cn_def": "廢金屬"
  },
  "seismic survey": {
    "pos": "n.phr.",
    "en_def": "a study that uses sound waves to look under the ground",
    "cn_def": "震測調查"
  },
  "iron": {
    "pos": "n.",
    "en_def": "a strong grey metal used to make steel",
    "cn_def": "鐵"
  },
  "brink": {
    "pos": "n.",
    "en_def": "the point just before something bad happens",
    "cn_def": "邊緣"
  },
  "outsourcing": {
    "pos": "n.",
    "en_def": "paying another company to do work for you",
    "cn_def": "外包"
  },
  "aridity": {
    "pos": "n.",
    "en_def": "the state of being very dry",
    "cn_def": "乾燥；乾旱"
  },
  "footprint": {
    "pos": "n.",
    "en_def": "the amount of space or effect something has",
    "cn_def": "足跡；占用面積"
  },
  "lifetime": {
    "pos": "n.",
    "en_def": "the period of time something lasts",
    "cn_def": "壽命"
  },
  "insecurity": {
    "pos": "n.",
    "en_def": "a lack of safety or certainty",
    "cn_def": "不安全；不穩定"
  },
  "natural resources": {
    "pos": "n.phr.",
    "en_def": "things from nature that people use, like water and oil",
    "cn_def": "天然資源"
  },
  "energy demand": {
    "pos": "n.phr.",
    "en_def": "the amount of energy that people need",
    "cn_def": "能源需求"
  },
  "charging station": {
    "pos": "n.phr.",
    "en_def": "a place where electric cars can be charged",
    "cn_def": "充電站"
  },
  "natural gas": {
    "pos": "n.phr.",
    "en_def": "a gas from under the ground used for heating and cooking",
    "cn_def": "天然氣"
  },
  "lead time": {
    "pos": "n.phr.",
    "en_def": "the time between starting something and finishing it",
    "cn_def": "前置時間"
  },
  "oil crisis": {
    "pos": "n.phr.",
    "en_def": "a time when oil becomes very scarce and expensive",
    "cn_def": "石油危機"
  },
  "wave energy": {
    "pos": "n.phr.",
    "en_def": "power taken from the movement of ocean waves",
    "cn_def": "波浪能"
  },
  "circular economy": {
    "pos": "n.phr.",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "cn_def": "循環經濟"
  },
  "water supply": {
    "pos": "n.phr.",
    "en_def": "the water provided to an area for people to use",
    "cn_def": "供水"
  },
  "shale gas": {
    "pos": "n.phr.",
    "en_def": "natural gas trapped inside layers of soft rock",
    "cn_def": "頁岩氣"
  },
  "liquefied natural gas": {
    "pos": "n.phr.",
    "en_def": "natural gas cooled until it becomes liquid for shipping",
    "cn_def": "液化天然氣"
  },
  "power plant": {
    "pos": "n.phr.",
    "en_def": "a factory that produces electricity",
    "cn_def": "發電廠"
  },
  "peak oil": {
    "pos": "n.phr.",
    "en_def": "the time when world oil production reaches its highest point",
    "cn_def": "石油產量頂峰"
  },
  "resource efficiency": {
    "pos": "n.phr.",
    "en_def": "using fewer materials to make the same product",
    "cn_def": "資源效率"
  },
  "jet fuel": {
    "pos": "n.phr.",
    "en_def": "special fuel used by aeroplanes",
    "cn_def": "航空燃油"
  },
  "nuclear reactor": {
    "pos": "n.phr.",
    "en_def": "the machine in which nuclear energy is produced",
    "cn_def": "核子反應爐"
  },
  "outage": {
    "pos": "n.",
    "en_def": "a period when a service like electricity stops working",
    "cn_def": "停電；中斷"
  },
  "uranium": {
    "pos": "n.",
    "en_def": "a heavy metal used as fuel in nuclear power",
    "cn_def": "鈾"
  },
  "barrel": {
    "pos": "n.",
    "en_def": "a unit used to measure oil, about 159 litres",
    "cn_def": "桶（石油計量單位）"
  },
  "e-waste": {
    "pos": "n.",
    "en_def": "thrown-away electronic devices like phones and computers",
    "cn_def": "電子廢棄物"
  },
  "biogas": {
    "pos": "n.",
    "en_def": "gas made from rotting food, plants or animal waste",
    "cn_def": "沼氣"
  },
  "coolant": {
    "pos": "n.",
    "en_def": "a liquid used to stop a machine from getting too hot",
    "cn_def": "冷卻劑"
  },
  "transformer": {
    "pos": "n.",
    "en_def": "a device that changes the voltage of electricity",
    "cn_def": "變壓器"
  },
  "payoff": {
    "pos": "n.",
    "en_def": "a benefit you get from something you did",
    "cn_def": "回報；好處"
  },
  "asymmetry": {
    "pos": "n.",
    "en_def": "a lack of balance between two sides",
    "cn_def": "不對稱"
  },
  "slowdown": {
    "pos": "n.",
    "en_def": "a reduction in speed or activity",
    "cn_def": "減緩；放緩"
  },
  "watt": {
    "pos": "n.",
    "en_def": "a basic unit for measuring electric power",
    "cn_def": "瓦特"
  },
  "fallback": {
    "pos": "n.",
    "en_def": "a plan or option kept for when others fail",
    "cn_def": "備案"
  },
  "activism": {
    "pos": "n.",
    "en_def": "action taken to bring about social or political change",
    "cn_def": "社會運動；行動主義"
  },
  "rotor": {
    "pos": "n.",
    "en_def": "the turning part of a machine",
    "cn_def": "轉子；旋翼"
  },
  "petrol": {
    "pos": "n.",
    "en_def": "liquid fuel used in most cars",
    "cn_def": "汽油"
  },
  "discontinuation": {
    "pos": "n.",
    "en_def": "the act of stopping something",
    "cn_def": "停止；中止"
  },
  "fundamentals": {
    "pos": "n.",
    "en_def": "the basic and most important parts of something",
    "cn_def": "基本原理；基礎"
  },
  "minimisation": {
    "pos": "n.",
    "en_def": "the act of making something as small as possible",
    "cn_def": "最小化"
  },
  "diminution": {
    "pos": "n.",
    "en_def": "a reduction in size or importance",
    "cn_def": "減少；縮小"
  },
  "underinvestment": {
    "pos": "n.",
    "en_def": "not spending enough money on something",
    "cn_def": "投資不足"
  },
  "estimation": {
    "pos": "n.",
    "en_def": "a judgement of an amount without exact measuring",
    "cn_def": "估計"
  },
  "dilution": {
    "pos": "n.",
    "en_def": "making something weaker by adding something else",
    "cn_def": "稀釋；削弱"
  },
  "directive": {
    "pos": "n.",
    "en_def": "an official instruction",
    "cn_def": "指令；命令"
  },
  "devolution": {
    "pos": "n.",
    "en_def": "passing power from central government to local areas",
    "cn_def": "權力下放"
  },
  "phase-out": {
    "pos": "n.",
    "en_def": "the gradual ending of something",
    "cn_def": "逐步淘汰"
  },
  "megawatt": {
    "pos": "n.",
    "en_def": "a unit of power equal to one million watts",
    "cn_def": "百萬瓦；兆瓦"
  },
  "fission": {
    "pos": "n.",
    "en_def": "the splitting of an atom, which releases energy",
    "cn_def": "核分裂"
  },
  "pylon": {
    "pos": "n.",
    "en_def": "a tall metal tower that holds up power lines",
    "cn_def": "電塔"
  },
  "prospecting": {
    "pos": "n.",
    "en_def": "searching an area for gold, oil or minerals",
    "cn_def": "探勘"
  },
  "gas guzzler": {
    "pos": "n.phr.",
    "en_def": "a big car that uses a lot of fuel",
    "cn_def": "耗油車"
  },
  "nuclear accident": {
    "pos": "n.phr.",
    "en_def": "an event that releases harmful radiation by mistake",
    "cn_def": "核子事故"
  },
  "privatisation": {
    "pos": "n.",
    "en_def": "the selling of state-owned companies to private owners",
    "cn_def": "民營化"
  },
  "inflow": {
    "pos": "n.",
    "en_def": "movement of something into a place",
    "cn_def": "流入"
  },
  "smart thermostat": {
    "pos": "n.phr.",
    "en_def": "a device that controls heating and learns your habits",
    "cn_def": "智慧溫控器"
  },
  "extension cord": {
    "pos": "n.phr.",
    "en_def": "a long wire that lets you plug in things far from a socket",
    "cn_def": "延長線"
  },
  "crude oil": {
    "pos": "n.phr.",
    "en_def": "oil in its natural state before it is cleaned",
    "cn_def": "原油"
  },
  "pipeline": {
    "pos": "n.",
    "en_def": "a long pipe that carries oil, gas or water far away",
    "cn_def": "輸送管線"
  },
  "consumable": {
    "pos": "n.",
    "en_def": "a product that is used up and must be replaced",
    "cn_def": "消耗品"
  },
  "plutonium": {
    "pos": "n.",
    "en_def": "a dangerous metal made in nuclear reactors",
    "cn_def": "鈽"
  },
  "kilowatt": {
    "pos": "n.",
    "en_def": "a unit of power equal to 1,000 watts",
    "cn_def": "千瓦"
  },
  "abolition": {
    "pos": "n.",
    "en_def": "the official ending of a law or system",
    "cn_def": "廢除"
  },
  "independence": {
    "pos": "n.",
    "en_def": "freedom from control or help by others",
    "cn_def": "獨立；自主"
  },
  "reclamation": {
    "pos": "n.",
    "en_def": "making damaged land useful again",
    "cn_def": "復育；再利用"
  },
  "kerosene": {
    "pos": "n.",
    "en_def": "an oil burned in lamps and some heaters",
    "cn_def": "煤油"
  },
  "acceptability": {
    "pos": "n.",
    "en_def": "how far something is accepted by people",
    "cn_def": "可接受度"
  },
  "resource curse": {
    "pos": "n.phr.",
    "en_def": "when rich natural resources lead to poor development",
    "cn_def": "資源詛咒"
  },
  "rebound effect": {
    "pos": "n.phr.",
    "en_def": "when saving energy leads people to use more",
    "cn_def": "反彈效應"
  },
  "power bank": {
    "pos": "n.phr.",
    "en_def": "a small portable battery for charging phones",
    "cn_def": "行動電源"
  },
  "electric car": {
    "pos": "n.phr.",
    "en_def": "a car that runs only on electricity from batteries",
    "cn_def": "電動車"
  },
  "water rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to use water from a river or lake",
    "cn_def": "水權"
  },
  "energy audit": {
    "pos": "n.phr.",
    "en_def": "a check of how a building uses and wastes energy",
    "cn_def": "能源稽核"
  },
  "wind power": {
    "pos": "n.phr.",
    "en_def": "electricity made by the movement of wind",
    "cn_def": "風力發電"
  },
  "heat loss": {
    "pos": "n.phr.",
    "en_def": "heat escaping from a building",
    "cn_def": "熱能流失"
  },
  "diesel": {
    "pos": "n.",
    "en_def": "a heavy fuel used in trucks, buses and some cars",
    "cn_def": "柴油"
  },
  "neutrality": {
    "pos": "n.",
    "en_def": "the state of not causing a particular effect",
    "cn_def": "中和；中立"
  },
  "relocation": {
    "pos": "n.",
    "en_def": "moving to a new place",
    "cn_def": "遷移；搬遷"
  },
  "oil field": {
    "pos": "n.phr.",
    "en_def": "an area where a lot of oil is under the ground",
    "cn_def": "油田"
  },
  "alternating current": {
    "pos": "n.phr.",
    "en_def": "electricity that changes direction many times a second",
    "cn_def": "交流電"
  },
  "load shedding": {
    "pos": "n.phr.",
    "en_def": "cutting power to some areas so the system does not fail",
    "cn_def": "限電；分區停電"
  },
  "nuclear waste": {
    "pos": "n.phr.",
    "en_def": "dangerous material left after making nuclear power",
    "cn_def": "核廢料"
  },
  "energy independence": {
    "pos": "n.phr.",
    "en_def": "producing enough energy without relying on other countries",
    "cn_def": "能源自主"
  },
  "multiplier": {
    "pos": "n.",
    "en_def": "something that increases the effect of something else",
    "cn_def": "乘數；倍增因素"
  },
  "cost-effectiveness": {
    "pos": "n.",
    "en_def": "how much benefit you get for the money spent",
    "cn_def": "成本效益"
  }
};

const EXTRA_GLOSSES = {};
