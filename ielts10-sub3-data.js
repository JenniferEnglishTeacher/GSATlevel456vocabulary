// Topic 10 Subunit 3 Quiz Data: Construction Materials & Techniques 建材與營建技術
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S03 - Construction Materials & Techniques 建材與營建技術",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cement",
    "pos": "n.",
    "cn_def": "水泥",
    "en_def": "a grey powder mixed with water and sand to make concrete",
    "sentence": "Making {{BLANK}} releases a lot of carbon dioxide, so engineers are testing new materials that are kinder to the planet.",
    "cn": "製造水泥會釋放大量二氧化碳，所以工程師們正在測試對地球更友善的新材料。"
  },
  {
    "word": "reinforced concrete",
    "pos": "n.phr.",
    "cn_def": "鋼筋混凝土",
    "en_def": "concrete made stronger with steel bars inside it",
    "sentence": "Most apartment buildings in Taiwan are made of {{BLANK}}, because it can survive both typhoons and strong earthquakes.",
    "cn": "台灣大多數公寓大樓是用鋼筋混凝土建造的，因為它能抵擋颱風和強烈地震。"
  },
  {
    "word": "timber",
    "pos": "n.",
    "cn_def": "木材",
    "en_def": "wood used for building",
    "sentence": "The cabin is built entirely from local {{BLANK}}, so it blends into the forest and smells of fresh pine.",
    "cn": "這間小屋完全用當地的木材建造，所以它與森林融為一體，而且散發著新鮮松木的香氣。"
  },
  {
    "word": "cross-laminated timber",
    "pos": "n.phr.",
    "cn_def": "交錯層壓木材（CLT）",
    "en_def": "strong panels made by gluing layers of wood crosswise",
    "sentence": "The new school was built with {{BLANK}}, which is strong enough for tall buildings but stores carbon instead of releasing it.",
    "cn": "這所新學校是用交錯層壓木材建造的，它堅固到足以蓋高樓，而且會儲存碳而不是釋放碳。"
  },
  {
    "word": "bamboo",
    "pos": "n.",
    "cn_def": "竹子",
    "en_def": "a fast-growing tall plant with hard hollow stems",
    "sentence": "Builders in many Asian countries use {{BLANK}} for scaffolds and walls, because it grows quickly and is surprisingly strong.",
    "cn": "許多亞洲國家的建築工人用竹子搭鷹架和建牆，因為它長得快而且出奇地堅固。"
  },
  {
    "word": "rammed earth",
    "pos": "n.phr.",
    "cn_def": "夯土",
    "en_def": "soil pressed hard into walls as a building material",
    "sentence": "The walls of the visitor centre are made of {{BLANK}}, so the rooms stay cool in summer and warm in winter.",
    "cn": "遊客中心的牆是用夯土做成的，所以房間在夏天保持涼爽，在冬天保持溫暖。"
  },
  {
    "word": "plywood",
    "pos": "n.",
    "cn_def": "合板；夾板",
    "en_def": "thin layers of wood glued together into a board",
    "sentence": "Before the typhoon arrived, shop owners covered their windows with {{BLANK}}, and they took the boards down two days later.",
    "cn": "颱風來襲前，店家用合板蓋住窗戶，而他們兩天後才把木板拆下來。"
  },
  {
    "word": "glass",
    "pos": "n.",
    "cn_def": "玻璃",
    "en_def": "a hard clear material used for windows",
    "sentence": "The museum's walls are made almost entirely of {{BLANK}}, so visitors can look out at the mountains while they view the art.",
    "cn": "這座博物館的牆幾乎完全用玻璃做成，所以遊客在欣賞藝術時可以眺望群山。"
  },
  {
    "word": "asphalt",
    "pos": "n.",
    "cn_def": "柏油；瀝青",
    "en_def": "a black sticky material used to cover roads",
    "sentence": "Dark {{BLANK}} absorbs a lot of heat on sunny days, so the city is testing lighter road surfaces to keep streets cooler.",
    "cn": "深色柏油在晴天會吸收大量熱能，所以市政府正在測試顏色較淺的路面以保持街道涼爽。"
  },
  {
    "word": "gravel",
    "pos": "n.",
    "cn_def": "碎石；礫石",
    "en_def": "small stones used to make paths and roads",
    "sentence": "The park paths are covered with {{BLANK}} instead of concrete, so rainwater can soak into the ground and the trees stay healthy.",
    "cn": "公園的小徑鋪的是碎石而不是混凝土，所以雨水能滲入地面，樹木也能保持健康。"
  },
  {
    "word": "tile",
    "pos": "n.",
    "cn_def": "磁磚；瓦片",
    "en_def": "a thin flat square piece used to cover floors, walls or roofs",
    "sentence": "Many old houses in Taiwan have colourful {{BLANK}} on their walls, and collectors now pay a lot of money for them.",
    "cn": "台灣許多老房子的牆上有色彩繽紛的磁磚，而收藏家現在願意花大錢購買它們。"
  },
  {
    "word": "plaster",
    "pos": "n.",
    "cn_def": "灰泥；石膏",
    "en_def": "a paste that becomes hard and smooth when it dries on walls",
    "sentence": "The {{BLANK}} on the old walls was cracking, so the workers removed it and covered the bricks with a fresh layer.",
    "cn": "舊牆上的灰泥正在龜裂，所以工人們把它刮掉，並在磚塊上塗了一層新的。"
  },
  {
    "word": "cladding",
    "pos": "n.",
    "cn_def": "（建築）外牆覆層",
    "en_def": "a covering added to the outside walls of a building",
    "sentence": "After a terrible fire, the government banned some kinds of plastic {{BLANK}}, because it allowed flames to spread up the building.",
    "cn": "在一場可怕的火災之後，政府禁止了某些塑膠外牆覆層，因為它會讓火焰沿著大樓往上蔓延。"
  },
  {
    "word": "hempcrete",
    "pos": "n.",
    "cn_def": "大麻混凝土（麻纖維石灰建材）",
    "en_def": "a light building material made from hemp plants and lime",
    "sentence": "{{BLANK}} is lighter than concrete and keeps homes warm, but it is not strong enough to hold up a tall building alone.",
    "cn": "大麻混凝土比混凝土輕而且能讓房屋保暖，但它的強度不足以單獨支撐高樓。"
  },
  {
    "word": "building site",
    "pos": "n.phr.",
    "cn_def": "建築工地",
    "en_def": "a place where a building is being built",
    "sentence": "Children are not allowed to play near the {{BLANK}}, because heavy machines are moving around and things may fall from above.",
    "cn": "孩子們不准在建築工地附近玩耍，因為重型機具在四處移動，而且可能有東西從上方掉落。"
  },
  {
    "word": "contractor",
    "pos": "n.",
    "cn_def": "承包商",
    "en_def": "a person or company paid to do building work",
    "sentence": "We hired a {{BLANK}} to fix our roof, but he left after two days, so the rain still comes in when there is a storm.",
    "cn": "我們僱了一位承包商來修屋頂，但他兩天後就走了，所以暴風雨時雨水還是會漏進來。"
  },
  {
    "word": "bricklayer",
    "pos": "n.",
    "cn_def": "砌磚工人",
    "en_def": "a worker who builds walls with bricks",
    "sentence": "The {{BLANK}} worked carefully in the hot sun, and by evening he had finished the whole garden wall.",
    "cn": "那位砌磚工人在炎熱的陽光下仔細工作，而到了傍晚他已經完成了整道花園圍牆。"
  },
  {
    "word": "carpenter",
    "pos": "n.",
    "cn_def": "木匠",
    "en_def": "a person who makes and repairs wooden things",
    "sentence": "My grandfather was a {{BLANK}} for forty years, and he built most of the tables and chairs in our house.",
    "cn": "我爺爺當了四十年的木匠，而我們家大部分的桌椅都是他做的。"
  },
  {
    "word": "plumber",
    "pos": "n.",
    "cn_def": "水管工人",
    "en_def": "a person who fixes water pipes and toilets",
    "sentence": "Water was leaking from the kitchen pipe all night, so we called a {{BLANK}} early in the morning to repair it.",
    "cn": "廚房的水管漏了一整晚的水，所以我們一大早就打電話請水管工人來修理。"
  },
  {
    "word": "electrician",
    "pos": "n.",
    "cn_def": "電工",
    "en_def": "a person who puts in and repairs electrical wires",
    "sentence": "The lights kept turning off by themselves, so my father asked an {{BLANK}} to check the wiring in the old flat.",
    "cn": "燈一直自己熄滅，所以我爸爸請了一位電工來檢查這間老公寓的線路。"
  },
  {
    "word": "bulldozer",
    "pos": "n.",
    "cn_def": "推土機",
    "en_def": "a powerful machine that pushes earth and knocks down buildings",
    "sentence": "A huge {{BLANK}} knocked down the old factory walls in just one morning, and trucks carried the rubble away in the afternoon.",
    "cn": "一台巨大的推土機只花一個早上就推倒了舊工廠的牆，而卡車在下午把瓦礫載走。"
  },
  {
    "word": "load-bearing",
    "pos": "adj.",
    "cn_def": "承重的",
    "en_def": "supporting the weight of the building above it",
    "sentence": "You cannot remove a {{BLANK}} wall without adding a steel beam, because the floors above might fall down.",
    "cn": "你不能在沒有加裝鋼樑的情況下拆除承重牆，因為上面的樓層可能會倒塌。"
  },
  {
    "word": "prefabricated",
    "pos": "adj.",
    "cn_def": "預製的；組合式的",
    "en_def": "made in parts in a factory and put together on site",
    "sentence": "The {{BLANK}} homes were built in a factory in a few weeks, so families who lost their houses in the flood could move in quickly.",
    "cn": "這些預製房屋在工廠裡幾週內就建好了，所以在水災中失去家園的家庭能很快搬進去。"
  },
  {
    "word": "3D-printed",
    "pos": "adj.",
    "cn_def": "3D列印的",
    "en_def": "made layer by layer by a machine that prints materials",
    "sentence": "The company built a small {{BLANK}} house in just two days, and it cost much less than a normal home.",
    "cn": "那家公司只花兩天就蓋好一棟小型3D列印房屋，而且它的成本比一般住宅低得多。"
  },
  {
    "word": "earthquake-proof",
    "pos": "adj.",
    "cn_def": "防震的；耐震的",
    "en_def": "built so that it will not fall down in an earthquake",
    "sentence": "Taiwan has many {{BLANK}} buildings, but older homes still need checks because they were built before the safety rules changed.",
    "cn": "台灣有許多耐震建築，但較老的房屋仍需要檢查，因為它們是在安全規定修改之前建造的。"
  },
  {
    "word": "seismic",
    "pos": "adj.",
    "cn_def": "地震的",
    "en_def": "connected with earthquakes",
    "sentence": "Engineers added special {{BLANK}} dampers to Taipei 101, so the tower moves less during strong winds and earthquakes.",
    "cn": "工程師在台北101加裝了特殊的地震阻尼器，所以這座大樓在強風和地震時晃動得較少。"
  },
  {
    "word": "building code",
    "pos": "n.phr.",
    "cn_def": "建築法規",
    "en_def": "the official rules about how buildings must be built",
    "sentence": "The new {{BLANK}} requires better insulation, so new homes will use less energy, although they may cost a little more.",
    "cn": "新的建築法規要求更好的隔熱，所以新房屋會更節能，雖然價格可能會稍微高一點。"
  },
  {
    "word": "structural engineer",
    "pos": "n.phr.",
    "cn_def": "結構工程師",
    "en_def": "an expert who makes sure buildings are strong and safe",
    "sentence": "After the earthquake, a {{BLANK}} checked every school building, and two of them were closed because of serious cracks.",
    "cn": "地震過後，一位結構工程師檢查了每一棟校舍，而其中兩棟因為嚴重裂縫而被關閉。"
  },
  {
    "word": "surveyor",
    "pos": "n.",
    "cn_def": "測量師；房屋鑑定師",
    "en_def": "a person who measures land or checks the condition of buildings",
    "sentence": "Before buying the old house, we paid a {{BLANK}} to inspect it, and he found that the roof needed urgent repairs.",
    "cn": "在買下那棟老房子之前，我們花錢請了一位鑑定師來檢查，而他發現屋頂急需修繕。"
  },
  {
    "word": "steel frame",
    "pos": "n.phr.",
    "cn_def": "鋼構骨架",
    "en_def": "a skeleton of steel beams that holds up a building",
    "sentence": "The tower has a strong {{BLANK}}, so the walls can be made of light glass instead of heavy stone.",
    "cn": "這座大樓有堅固的鋼構骨架，所以牆面可以用輕巧的玻璃而不是沉重的石材來做。"
  },
  {
    "word": "waterproof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "not allowing water to go through",
    "sentence": "We painted the roof with a {{BLANK}} coating, so the ceiling no longer leaks when heavy rain falls in summer.",
    "cn": "我們在屋頂上漆了一層防水塗料，所以夏天下大雨時天花板不再漏水了。"
  },
  {
    "word": "fire-resistant",
    "pos": "adj.",
    "cn_def": "耐火的；防火的",
    "en_def": "not easily damaged or burned by fire",
    "sentence": "The doors in the hospital are made of {{BLANK}} materials, so patients have more time to escape if a fire starts.",
    "cn": "醫院的門是用防火材料做的，所以如果發生火災，病人會有更多時間逃生。"
  },
  {
    "word": "embodied carbon",
    "pos": "n.phr.",
    "cn_def": "隱含碳（建材的碳排放）",
    "en_def": "the carbon released when making and transporting building materials",
    "sentence": "Steel and cement have high {{BLANK}}, so architects now try to reuse old materials whenever they can.",
    "cn": "鋼材和水泥有很高的隱含碳，所以建築師現在只要可以就會盡量重複使用舊材料。"
  }
];

const MCQS = [
  {
    "q": "Making _____ releases a lot of carbon dioxide, so engineers are testing new materials that are kinder to the planet.",
    "options": [
      "conurbation",
      "clutter",
      "boundary",
      "cement"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Most apartment buildings in Taiwan are made of _____, because it can survive both typhoons and strong earthquakes.",
    "options": [
      "reinforced concrete",
      "traffic jam",
      "passive house",
      "urban planner"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The cabin is built entirely from local _____, so it blends into the forest and smells of fresh pine.",
    "options": [
      "malaise",
      "timber",
      "conurbation",
      "throng"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new school was built with _____, which is strong enough for tall buildings but stores carbon instead of releasing it.",
    "options": [
      "vertical garden",
      "hustle and bustle",
      "cross-laminated timber",
      "street vendor"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Builders in many Asian countries use _____ for scaffolds and walls, because it grows quickly and is surprisingly strong.",
    "options": [
      "flyover",
      "bamboo",
      "graffiti",
      "neighbour"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The walls of the visitor centre are made of _____, so the rooms stay cool in summer and warm in winter.",
    "options": [
      "natural light",
      "inner city",
      "rammed earth",
      "social housing"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Before the typhoon arrived, shop owners covered their windows with _____, and they took the boards down two days later.",
    "options": [
      "plywood",
      "exterior",
      "cohort",
      "culprit"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The museum's walls are made almost entirely of _____, so visitors can look out at the mountains while they view the art.",
    "options": [
      "balcony",
      "leeway",
      "coalition",
      "glass"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Dark _____ absorbs a lot of heat on sunny days, so the city is testing lighter road surfaces to keep streets cooler.",
    "options": [
      "intersection",
      "asphalt",
      "waterfront",
      "cyclist"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The park paths are covered with _____ instead of concrete, so rainwater can soak into the ground and the trees stay healthy.",
    "options": [
      "leeway",
      "throng",
      "skyscraper",
      "gravel"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Many old houses in Taiwan have colourful _____ on their walls, and collectors now pay a lot of money for them.",
    "options": [
      "tile",
      "locality",
      "caveat",
      "nightlife"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The _____ on the old walls was cracking, so the workers removed it and covered the bricks with a fresh layer.",
    "options": [
      "solace",
      "conurbation",
      "plaster",
      "mortgage"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "After a terrible fire, the government banned some kinds of plastic _____, because it allowed flames to spread up the building.",
    "options": [
      "gradient",
      "flyover",
      "apartment",
      "cladding"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "_____ is lighter than concrete and keeps homes warm, but it is not strong enough to hold up a tall building alone.",
    "options": [
      "underpass",
      "car-sharing",
      "hempcrete",
      "hub"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Children are not allowed to play near the _____, because heavy machines are moving around and things may fall from above.",
    "options": [
      "building site",
      "street art",
      "double glazing",
      "town planning"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "We hired a _____ to fix our roof, but he left after two days, so the rain still comes in when there is a storm.",
    "options": [
      "backdrop",
      "contractor",
      "beam",
      "coalition"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The _____ worked carefully in the hot sun, and by evening he had finished the whole garden wall.",
    "options": [
      "underpass",
      "thermostat",
      "quandary",
      "bricklayer"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "My grandfather was a _____ for forty years, and he built most of the tables and chairs in our house.",
    "options": [
      "waterfront",
      "carpenter",
      "courtyard",
      "metro"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Water was leaking from the kitchen pipe all night, so we called a _____ early in the morning to repair it.",
    "options": [
      "architect",
      "haven",
      "plumber",
      "fare"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The lights kept turning off by themselves, so my father asked an _____ to check the wiring in the old flat.",
    "options": [
      "electrician",
      "beam",
      "gradient",
      "squatter"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "A huge _____ knocked down the old factory walls in just one morning, and trucks carried the rubble away in the afternoon.",
    "options": [
      "layout",
      "bulldozer",
      "forefront",
      "outlier"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "You cannot remove a _____ wall without adding a steel beam, because the floors above might fall down.",
    "options": [
      "extravagant",
      "chaotic",
      "blatant",
      "load-bearing"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The _____ homes were built in a factory in a few weeks, so families who lost their houses in the flood could move in quickly.",
    "options": [
      "contiguous",
      "considerate",
      "prefabricated",
      "orderly"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The company built a small _____ house in just two days, and it cost much less than a normal home.",
    "options": [
      "3D-printed",
      "open-plan",
      "considerate",
      "acceptable"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Taiwan has many _____ buildings, but older homes still need checks because they were built before the safety rules changed.",
    "options": [
      "coveted",
      "earthquake-proof",
      "tranquil",
      "scant"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Engineers added special _____ dampers to Taipei 101, so the tower moves less during strong winds and earthquakes.",
    "options": [
      "alluring",
      "mixed-use",
      "fleeting",
      "seismic"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The new _____ requires better insulation, so new homes will use less energy, although they may cost a little more.",
    "options": [
      "building code",
      "night market",
      "built-up area",
      "rain garden"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "After the earthquake, a _____ checked every school building, and two of them were closed because of serious cracks.",
    "options": [
      "scale model",
      "built-up area",
      "structural engineer",
      "bus lane"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Before buying the old house, we paid a _____ to inspect it, and he found that the roof needed urgent repairs.",
    "options": [
      "pedestrian",
      "metro",
      "resident",
      "surveyor"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The tower has a strong _____, so the walls can be made of light glass instead of heavy stone.",
    "options": [
      "steel frame",
      "vertical garden",
      "energy rating",
      "cost of living"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "We painted the roof with a _____ coating, so the ceiling no longer leaks when heavy rain falls in summer.",
    "options": [
      "timely",
      "waterproof",
      "brisk",
      "bland"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The doors in the hospital are made of _____ materials, so patients have more time to escape if a fire starts.",
    "options": [
      "fraught",
      "timely",
      "fire-resistant",
      "panoramic"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Steel and cement have high _____, so architects now try to reuse old materials whenever they can.",
    "options": [
      "brownfield site",
      "embodied carbon",
      "greenfield site",
      "energy rating"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "cement": {
    "pos": "n.",
    "en_def": "a grey powder mixed with water and sand to make concrete",
    "cn_def": "水泥"
  },
  "reinforced concrete": {
    "pos": "n.phr.",
    "en_def": "concrete made stronger with steel bars inside it",
    "cn_def": "鋼筋混凝土"
  },
  "timber": {
    "pos": "n.",
    "en_def": "wood used for building",
    "cn_def": "木材"
  },
  "cross-laminated timber": {
    "pos": "n.phr.",
    "en_def": "strong panels made by gluing layers of wood crosswise",
    "cn_def": "交錯層壓木材（CLT）"
  },
  "bamboo": {
    "pos": "n.",
    "en_def": "a fast-growing tall plant with hard hollow stems",
    "cn_def": "竹子"
  },
  "rammed earth": {
    "pos": "n.phr.",
    "en_def": "soil pressed hard into walls as a building material",
    "cn_def": "夯土"
  },
  "plywood": {
    "pos": "n.",
    "en_def": "thin layers of wood glued together into a board",
    "cn_def": "合板；夾板"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a hard clear material used for windows",
    "cn_def": "玻璃"
  },
  "asphalt": {
    "pos": "n.",
    "en_def": "a black sticky material used to cover roads",
    "cn_def": "柏油；瀝青"
  },
  "gravel": {
    "pos": "n.",
    "en_def": "small stones used to make paths and roads",
    "cn_def": "碎石；礫石"
  },
  "tile": {
    "pos": "n.",
    "en_def": "a thin flat square piece used to cover floors, walls or roofs",
    "cn_def": "磁磚；瓦片"
  },
  "plaster": {
    "pos": "n.",
    "en_def": "a paste that becomes hard and smooth when it dries on walls",
    "cn_def": "灰泥；石膏"
  },
  "cladding": {
    "pos": "n.",
    "en_def": "a covering added to the outside walls of a building",
    "cn_def": "（建築）外牆覆層"
  },
  "hempcrete": {
    "pos": "n.",
    "en_def": "a light building material made from hemp plants and lime",
    "cn_def": "大麻混凝土（麻纖維石灰建材）"
  },
  "building site": {
    "pos": "n.phr.",
    "en_def": "a place where a building is being built",
    "cn_def": "建築工地"
  },
  "contractor": {
    "pos": "n.",
    "en_def": "a person or company paid to do building work",
    "cn_def": "承包商"
  },
  "bricklayer": {
    "pos": "n.",
    "en_def": "a worker who builds walls with bricks",
    "cn_def": "砌磚工人"
  },
  "carpenter": {
    "pos": "n.",
    "en_def": "a person who makes and repairs wooden things",
    "cn_def": "木匠"
  },
  "plumber": {
    "pos": "n.",
    "en_def": "a person who fixes water pipes and toilets",
    "cn_def": "水管工人"
  },
  "electrician": {
    "pos": "n.",
    "en_def": "a person who puts in and repairs electrical wires",
    "cn_def": "電工"
  },
  "bulldozer": {
    "pos": "n.",
    "en_def": "a powerful machine that pushes earth and knocks down buildings",
    "cn_def": "推土機"
  },
  "load-bearing": {
    "pos": "adj.",
    "en_def": "supporting the weight of the building above it",
    "cn_def": "承重的"
  },
  "prefabricated": {
    "pos": "adj.",
    "en_def": "made in parts in a factory and put together on site",
    "cn_def": "預製的；組合式的"
  },
  "3d-printed": {
    "pos": "adj.",
    "en_def": "made layer by layer by a machine that prints materials",
    "cn_def": "3D列印的"
  },
  "earthquake-proof": {
    "pos": "adj.",
    "en_def": "built so that it will not fall down in an earthquake",
    "cn_def": "防震的；耐震的"
  },
  "seismic": {
    "pos": "adj.",
    "en_def": "connected with earthquakes",
    "cn_def": "地震的"
  },
  "building code": {
    "pos": "n.phr.",
    "en_def": "the official rules about how buildings must be built",
    "cn_def": "建築法規"
  },
  "structural engineer": {
    "pos": "n.phr.",
    "en_def": "an expert who makes sure buildings are strong and safe",
    "cn_def": "結構工程師"
  },
  "surveyor": {
    "pos": "n.",
    "en_def": "a person who measures land or checks the condition of buildings",
    "cn_def": "測量師；房屋鑑定師"
  },
  "steel frame": {
    "pos": "n.phr.",
    "en_def": "a skeleton of steel beams that holds up a building",
    "cn_def": "鋼構骨架"
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "not allowing water to go through",
    "cn_def": "防水的"
  },
  "fire-resistant": {
    "pos": "adj.",
    "en_def": "not easily damaged or burned by fire",
    "cn_def": "耐火的；防火的"
  },
  "embodied carbon": {
    "pos": "n.phr.",
    "en_def": "the carbon released when making and transporting building materials",
    "cn_def": "隱含碳（建材的碳排放）"
  },
  "conurbation": {
    "pos": "n.",
    "en_def": "a large area where several towns have grown together",
    "cn_def": "大都會區；集合城市"
  },
  "clutter": {
    "pos": "n.",
    "en_def": "many things lying around in an untidy way",
    "cn_def": "雜亂的東西"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area",
    "cn_def": "邊界；界線"
  },
  "traffic jam": {
    "pos": "n.phr.",
    "en_def": "a long line of vehicles that cannot move or move slowly",
    "cn_def": "塞車；交通堵塞"
  },
  "passive house": {
    "pos": "n.phr.",
    "en_def": "a very well-sealed home that needs almost no heating or cooling",
    "cn_def": "被動式節能屋"
  },
  "urban planner": {
    "pos": "n.",
    "en_def": "a person who designs how a city grows and is used",
    "cn_def": "都市規劃師"
  },
  "malaise": {
    "pos": "n.",
    "en_def": "a general feeling that something is wrong or weak",
    "cn_def": "萎靡不振；（社會、經濟的）低迷"
  },
  "throng": {
    "pos": "n.",
    "en_def": "a large crowd of people",
    "cn_def": "人群；群眾"
  },
  "vertical garden": {
    "pos": "n.phr.",
    "en_def": "plants grown up a wall or on shelves rather than on the ground",
    "cn_def": "垂直花園"
  },
  "hustle and bustle": {
    "pos": "n.phr.",
    "en_def": "the noise and busy activity of a crowded place",
    "cn_def": "熙來攘往；喧囂忙碌"
  },
  "street vendor": {
    "pos": "n.phr.",
    "en_def": "a person who sells food or goods from a stall in the street",
    "cn_def": "街頭攤販"
  },
  "flyover": {
    "pos": "n.",
    "en_def": "a bridge that carries one road over another",
    "cn_def": "高架橋；天橋"
  },
  "graffiti": {
    "pos": "n.",
    "en_def": "words or pictures painted on walls without permission",
    "cn_def": "塗鴉"
  },
  "neighbour": {
    "pos": "n.",
    "en_def": "a person who lives next to or near you",
    "cn_def": "鄰居"
  },
  "natural light": {
    "pos": "n.phr.",
    "en_def": "light from the sun rather than from lamps",
    "cn_def": "自然光"
  },
  "inner city": {
    "pos": "n.phr.",
    "en_def": "the older, central part of a city, often with social problems",
    "cn_def": "舊市區；內城區"
  },
  "social housing": {
    "pos": "n.phr.",
    "en_def": "homes provided by the government at a low rent",
    "cn_def": "社會住宅"
  },
  "exterior": {
    "pos": "n.",
    "en_def": "the outside of a building",
    "cn_def": "外部；外觀"
  },
  "cohort": {
    "pos": "n.",
    "en_def": "a group of people of a similar age or in the same situation",
    "cn_def": "（同年齡或同處境的）一群人"
  },
  "culprit": {
    "pos": "n.",
    "en_def": "the person or thing that causes a problem",
    "cn_def": "罪魁禍首；元凶"
  },
  "balcony": {
    "pos": "n.",
    "en_def": "a small platform outside an upper window of a building",
    "cn_def": "陽台"
  },
  "leeway": {
    "pos": "n.",
    "en_def": "freedom to decide or act as you want",
    "cn_def": "迴旋餘地；自由空間"
  },
  "coalition": {
    "pos": "n.",
    "en_def": "a group of people or organisations working together",
    "cn_def": "聯盟；同盟"
  },
  "intersection": {
    "pos": "n.",
    "en_def": "a place where two or more roads cross",
    "cn_def": "十字路口；交叉口"
  },
  "waterfront": {
    "pos": "n.",
    "en_def": "the part of a city next to a river, lake or sea",
    "cn_def": "濱水區；水岸"
  },
  "cyclist": {
    "pos": "n.",
    "en_def": "a person who rides a bicycle",
    "cn_def": "騎單車的人"
  },
  "skyscraper": {
    "pos": "n.",
    "en_def": "a very tall modern building in a city",
    "cn_def": "摩天大樓"
  },
  "locality": {
    "pos": "n.",
    "en_def": "a particular area or neighbourhood",
    "cn_def": "地區；所在地"
  },
  "caveat": {
    "pos": "n.",
    "en_def": "a warning that something is true only in certain conditions",
    "cn_def": "但書；附加說明"
  },
  "nightlife": {
    "pos": "n.",
    "en_def": "entertainment such as bars and clubs that is open at night",
    "cn_def": "夜生活"
  },
  "solace": {
    "pos": "n.",
    "en_def": "comfort when you are sad or worried",
    "cn_def": "安慰；慰藉"
  },
  "mortgage": {
    "pos": "n.",
    "en_def": "a loan from a bank to buy a home",
    "cn_def": "房屋貸款；房貸"
  },
  "gradient": {
    "pos": "n.",
    "en_def": "how steep a slope is",
    "cn_def": "坡度"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in on one floor of a building",
    "cn_def": "公寓"
  },
  "underpass": {
    "pos": "n.",
    "en_def": "a road or path that goes under another road",
    "cn_def": "地下道"
  },
  "car-sharing": {
    "pos": "n.",
    "en_def": "a service where people rent cars for short periods",
    "cn_def": "汽車共享"
  },
  "hub": {
    "pos": "n.",
    "en_def": "the central or most important place for an activity",
    "cn_def": "中心；樞紐"
  },
  "street art": {
    "pos": "n.phr.",
    "en_def": "paintings and pictures made on walls in public places",
    "cn_def": "街頭藝術"
  },
  "double glazing": {
    "pos": "n.phr.",
    "en_def": "windows with two layers of glass to keep heat and noise out",
    "cn_def": "雙層玻璃窗"
  },
  "town planning": {
    "pos": "n.phr.",
    "en_def": "the work of deciding how land in a town is used",
    "cn_def": "城鎮規劃"
  },
  "backdrop": {
    "pos": "n.",
    "en_def": "the scenery behind something",
    "cn_def": "背景"
  },
  "beam": {
    "pos": "n.",
    "en_def": "a long thick piece of wood or metal that supports a roof",
    "cn_def": "樑；橫樑"
  },
  "thermostat": {
    "pos": "n.",
    "en_def": "a device that controls the temperature of a room",
    "cn_def": "恆溫器；溫控器"
  },
  "quandary": {
    "pos": "n.",
    "en_def": "a situation where it is hard to decide what to do",
    "cn_def": "困惑；左右為難"
  },
  "courtyard": {
    "pos": "n.",
    "en_def": "an open space surrounded by walls or buildings",
    "cn_def": "庭院；中庭"
  },
  "metro": {
    "pos": "n.",
    "en_def": "an underground train system in a city",
    "cn_def": "地鐵；捷運"
  },
  "architect": {
    "pos": "n.",
    "en_def": "a person whose job is to design buildings",
    "cn_def": "建築師"
  },
  "haven": {
    "pos": "n.",
    "en_def": "a safe and peaceful place",
    "cn_def": "避風港；安全的地方"
  },
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel on a bus, train or taxi",
    "cn_def": "車資；票價"
  },
  "squatter": {
    "pos": "n.",
    "en_def": "a person who lives in an empty building without permission",
    "cn_def": "違法佔住者"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way the parts of a place are arranged",
    "cn_def": "佈局；配置"
  },
  "forefront": {
    "pos": "n.",
    "en_def": "the leading position in an area of activity",
    "cn_def": "最前線；最前沿"
  },
  "outlier": {
    "pos": "n.",
    "en_def": "a person or thing very different from the rest of the group",
    "cn_def": "異常值；離群者"
  },
  "extravagant": {
    "pos": "adj.",
    "en_def": "spending or costing far too much money",
    "cn_def": "奢侈的；鋪張浪費的"
  },
  "chaotic": {
    "pos": "adj.",
    "en_def": "in a complete mess and without order",
    "cn_def": "混亂的"
  },
  "blatant": {
    "pos": "adj.",
    "en_def": "very obvious and done without shame",
    "cn_def": "公然的；明目張膽的"
  },
  "contiguous": {
    "pos": "adj.",
    "en_def": "touching or next to each other along one side",
    "cn_def": "相連的；鄰接的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的；為他人著想的"
  },
  "orderly": {
    "pos": "adj.",
    "en_def": "well arranged or behaving in a calm, organised way",
    "cn_def": "有秩序的；整齊的"
  },
  "open-plan": {
    "pos": "adj.",
    "en_def": "having few inside walls, with one large shared space",
    "cn_def": "開放式（格局）的"
  },
  "acceptable": {
    "pos": "adj.",
    "en_def": "good enough to be allowed or agreed to",
    "cn_def": "可接受的"
  },
  "coveted": {
    "pos": "adj.",
    "en_def": "wanted very much by many people",
    "cn_def": "令人垂涎的；眾所渴望的"
  },
  "tranquil": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "scant": {
    "pos": "adj.",
    "en_def": "very little; not enough",
    "cn_def": "不足的；極少的"
  },
  "alluring": {
    "pos": "adj.",
    "en_def": "attractive and exciting",
    "cn_def": "誘人的；迷人的"
  },
  "mixed-use": {
    "pos": "adj.",
    "en_def": "used for both homes and businesses",
    "cn_def": "混合使用的；住商混合的"
  },
  "fleeting": {
    "pos": "adj.",
    "en_def": "lasting only a very short time",
    "cn_def": "短暫的；稍縱即逝的"
  },
  "night market": {
    "pos": "n.phr.",
    "en_def": "an outdoor market that opens in the evening, selling food and goods",
    "cn_def": "夜市"
  },
  "built-up area": {
    "pos": "n.phr.",
    "en_def": "a place with many buildings and few open spaces",
    "cn_def": "建成區；房屋密集區"
  },
  "rain garden": {
    "pos": "n.phr.",
    "en_def": "a low garden that collects rainwater from roofs and roads",
    "cn_def": "雨水花園"
  },
  "scale model": {
    "pos": "n.phr.",
    "en_def": "a small copy of a building with the same proportions",
    "cn_def": "比例模型"
  },
  "bus lane": {
    "pos": "n.phr.",
    "en_def": "a part of the road that only buses can use",
    "cn_def": "公車專用道"
  },
  "pedestrian": {
    "pos": "n.",
    "en_def": "a person who is walking in a street",
    "cn_def": "行人"
  },
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民；住戶"
  },
  "energy rating": {
    "pos": "n.phr.",
    "en_def": "a label that shows how efficiently something uses energy",
    "cn_def": "能源效率等級"
  },
  "cost of living": {
    "pos": "n.phr.",
    "en_def": "the money needed to pay for basic things like food and housing",
    "cn_def": "生活費用；生活成本"
  },
  "timely": {
    "pos": "adj.",
    "en_def": "happening at the right time",
    "cn_def": "及時的；適時的"
  },
  "brisk": {
    "pos": "adj.",
    "en_def": "quick and active",
    "cn_def": "興旺的；輕快的"
  },
  "bland": {
    "pos": "adj.",
    "en_def": "without interesting features; dull",
    "cn_def": "平淡無奇的；乏味的"
  },
  "fraught": {
    "pos": "adj.",
    "en_def": "full of problems or worry",
    "cn_def": "充滿（問題、憂慮）的"
  },
  "panoramic": {
    "pos": "adj.",
    "en_def": "showing a wide view of a whole area",
    "cn_def": "全景的"
  },
  "brownfield site": {
    "pos": "n.phr.",
    "en_def": "land that was used for industry and can be built on again",
    "cn_def": "棕地（舊工業用地）"
  },
  "greenfield site": {
    "pos": "n.phr.",
    "en_def": "land that has never been built on before",
    "cn_def": "綠地（未開發用地）"
  }
};

const EXTRA_GLOSSES = {};
