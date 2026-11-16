// Topic 18 Subunit 6 Quiz Data: Plant Threats, Disease & Restoration 植物威脅、病害與復育
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S06 - Plant Threats, Disease & Restoration 植物威脅、病害與復育",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Dutch elm disease",
    "pos": "n.phr.",
    "cn_def": "荷蘭榆樹病",
    "en_def": "a deadly tree disease spread by beetles",
    "sentence": "{{BLANK}} killed most of the elm trees in Britain, so the countryside looked very different afterwards.",
    "cn": "荷蘭榆樹病害死了英國大部分的榆樹,所以之後鄉間的樣貌大不相同。"
  },
  {
    "word": "ash dieback",
    "pos": "n.phr.",
    "cn_def": "白蠟樹枯梢病",
    "en_def": "a fungal disease that kills ash trees",
    "sentence": "{{BLANK}} is spreading across Europe, and experts fear that most ash trees could be lost within a few decades.",
    "cn": "白蠟樹枯梢病正在歐洲蔓延,專家擔心大部分白蠟樹可能在幾十年內消失。"
  },
  {
    "word": "fungal",
    "pos": "adj.",
    "cn_def": "真菌的",
    "en_def": "caused by or relating to a fungus",
    "sentence": "The banana farm was hit by a {{BLANK}} disease, so the farmer had to destroy hundreds of sick plants.",
    "cn": "香蕉園遭受一種真菌疾病侵襲,所以農夫必須銷毀數百株生病的植物。"
  },
  {
    "word": "fungus",
    "pos": "n.",
    "cn_def": "真菌",
    "en_def": "a living thing such as a mushroom or mould",
    "sentence": "A {{BLANK}} was growing on the old log, and it slowly turned the hard wood soft and crumbly.",
    "cn": "一種真菌在老木頭上生長,慢慢把堅硬的木頭變得鬆軟易碎。",
    "alts": [
      "fungi"
    ]
  },
  {
    "word": "parasite",
    "pos": "n.",
    "cn_def": "寄生物",
    "en_def": "a living thing that lives on another and takes its food",
    "sentence": "Mistletoe is a {{BLANK}} that grows on trees, and it takes water and food from the branches it lives on.",
    "cn": "槲寄生是一種長在樹上的寄生植物,它從所依附的樹枝中吸取水分和養分。"
  },
  {
    "word": "parasitic",
    "pos": "adj.",
    "cn_def": "寄生的",
    "en_def": "living on another living thing and taking its food",
    "sentence": "The {{BLANK}} plant wrapped itself around the tree, and after a few years the tree became weak and sick.",
    "cn": "那株寄生植物纏繞在樹上,幾年後那棵樹變得虛弱生病。"
  },
  {
    "word": "aphid",
    "pos": "n.",
    "cn_def": "蚜蟲",
    "en_def": "a very small insect that sucks juice from plants",
    "sentence": "Tiny green {{BLANK}} covered the roses, so my mother sprayed them with soapy water instead of chemicals.",
    "cn": "小小的綠色蚜蟲佈滿了玫瑰,所以我媽媽用肥皂水而不是化學藥劑噴灑它們。"
  },
  {
    "word": "caterpillar",
    "pos": "n.",
    "cn_def": "毛毛蟲",
    "en_def": "a young butterfly or moth that looks like a small worm",
    "sentence": "A hungry {{BLANK}} ate holes in all the cabbage leaves, but my grandmother did not mind because it would become a butterfly.",
    "cn": "一隻飢餓的毛毛蟲把所有高麗菜葉都咬出洞來,但我奶奶不介意,因為牠會變成蝴蝶。"
  },
  {
    "word": "locust",
    "pos": "n.",
    "cn_def": "蝗蟲",
    "en_def": "an insect that flies in huge groups and eats crops",
    "sentence": "A huge cloud of {{BLANK}} arrived in East Africa, and within hours they had eaten the crops of entire villages.",
    "cn": "一大群蝗蟲飛抵東非,幾小時內就吃光了整個村莊的作物。"
  },
  {
    "word": "mildew",
    "pos": "n.",
    "cn_def": "白粉病;黴",
    "en_def": "a thin white fungus on plants or damp things",
    "sentence": "White {{BLANK}} appeared on the cucumber leaves during the rainy season, so the farmer removed the sick leaves quickly.",
    "cn": "雨季時小黃瓜葉上出現了白色的白粉病,所以農夫迅速摘除生病的葉子。"
  },
  {
    "word": "rot",
    "pos": "v.",
    "cn_def": "腐爛",
    "en_def": "to slowly break down and go bad",
    "sentence": "If you water a cactus too often, its roots will {{BLANK}}, so it is better to let the soil dry out.",
    "cn": "如果你太常替仙人掌澆水,它的根會腐爛,所以最好讓土壤乾透。"
  },
  {
    "word": "alien species",
    "pos": "n.phr.",
    "cn_def": "外來種",
    "en_def": "a plant or animal brought from another place",
    "sentence": "The mile-a-minute vine is an {{BLANK}} in Taiwan, and it grows so fast that it covers and kills native trees.",
    "cn": "小花蔓澤蘭是台灣的外來種,它長得非常快,會覆蓋並殺死原生樹木。"
  },
  {
    "word": "non-native",
    "pos": "adj.",
    "cn_def": "非原生的",
    "en_def": "not originally from the area where it now lives",
    "sentence": "Volunteers removed {{BLANK}} plants from the wetland, so the local plants had more space and light to grow.",
    "cn": "志工們清除了濕地中的非原生植物,所以本地植物有更多空間和光線生長。"
  },
  {
    "word": "slash-and-burn",
    "pos": "adj.",
    "cn_def": "刀耕火種的",
    "en_def": "cutting and burning forest to clear land for farming",
    "sentence": "{{BLANK}} farming clears land quickly, but the soil loses its nutrients after a few years, so farmers move on.",
    "cn": "刀耕火種農業能快速清出土地,但幾年後土壤就會失去養分,所以農民會轉移他處。"
  },
  {
    "word": "overgrazing",
    "pos": "n.",
    "cn_def": "過度放牧",
    "en_def": "when too many animals eat the plants in an area",
    "sentence": "{{BLANK}} by goats has destroyed the grass on the hills, and now the soil is washed away every time it rains.",
    "cn": "山羊的過度放牧破壞了山丘上的草,現在每次下雨土壤都會被沖走。"
  },
  {
    "word": "acid rain",
    "pos": "n.phr.",
    "cn_def": "酸雨",
    "en_def": "rain made harmful by pollution in the air",
    "sentence": "Factory smoke caused {{BLANK}} in the region, and many trees on the mountain lost their leaves and died.",
    "cn": "工廠的煙在該地區造成酸雨,山上許多樹都掉光了葉子而死去。"
  },
  {
    "word": "tree nursery",
    "pos": "n.phr.",
    "cn_def": "苗圃",
    "en_def": "a place where young trees are grown before planting",
    "sentence": "The {{BLANK}} grows ten thousand young trees every year, and volunteers plant them on the hills in winter.",
    "cn": "那個苗圃每年培育一萬棵小樹,志工們在冬天把它們種到山丘上。"
  },
  {
    "word": "regrowth",
    "pos": "n.",
    "cn_def": "再生;重新生長",
    "en_def": "new growth after something has been damaged or cut",
    "sentence": "The forest showed signs of {{BLANK}} only a year after the fire, and green leaves appeared on the burnt trees.",
    "cn": "火災後僅一年,森林就出現了重新生長的跡象,燒焦的樹上冒出了綠葉。"
  },
  {
    "word": "disease-resistant",
    "pos": "adj.",
    "cn_def": "抗病的",
    "en_def": "not easily affected by disease",
    "sentence": "Scientists developed a {{BLANK}} type of elm tree, so towns can plant elms again without fear of losing them.",
    "cn": "科學家培育出一種抗病的榆樹品種,所以城鎮可以再次種植榆樹而不必擔心失去它們。"
  },
  {
    "word": "quarantine",
    "pos": "n.",
    "cn_def": "檢疫;隔離",
    "en_def": "a period when plants or animals are kept apart to stop disease",
    "sentence": "Imported plants must stay in {{BLANK}} for several weeks, so inspectors can make sure they do not carry pests.",
    "cn": "進口植物必須檢疫數週,這樣檢查人員才能確定它們沒有帶著害蟲。"
  },
  {
    "word": "biosecurity",
    "pos": "n.",
    "cn_def": "生物安全",
    "en_def": "rules and actions that stop harmful pests and diseases entering a place",
    "sentence": "Australia has strict {{BLANK}} rules at its airports, so travellers cannot bring fresh fruit or seeds into the country.",
    "cn": "澳洲機場有嚴格的生物安全規定,所以旅客不能把新鮮水果或種子帶入境。"
  },
  {
    "word": "nature reserve",
    "pos": "n.phr.",
    "cn_def": "自然保護區",
    "en_def": "an area where plants and animals are protected",
    "sentence": "The wetland became a {{BLANK}} in 2010, and since then the number of birds has almost doubled.",
    "cn": "這片濕地在2010年成為自然保護區,從那之後鳥類數量幾乎增加了一倍。"
  },
  {
    "word": "national park",
    "pos": "n.phr.",
    "cn_def": "國家公園",
    "en_def": "a large area of land protected by the government",
    "sentence": "Taroko is a famous {{BLANK}} in Taiwan, and its forests and gorges attract visitors from all over the world.",
    "cn": "太魯閣是台灣著名的國家公園,它的森林和峽谷吸引世界各地的遊客。"
  },
  {
    "word": "protected area",
    "pos": "n.phr.",
    "cn_def": "保護區",
    "en_def": "a place where nature is protected by law",
    "sentence": "Hunting is not allowed in the {{BLANK}}, so wild animals can live there without being disturbed.",
    "cn": "保護區內禁止打獵,所以野生動物可以在那裡生活而不被打擾。"
  },
  {
    "word": "arborist",
    "pos": "n.",
    "cn_def": "樹藝師",
    "en_def": "an expert who cares for trees",
    "sentence": "The school called an {{BLANK}} to check the old banyan tree, because one large branch looked weak and dangerous.",
    "cn": "學校請了一位樹藝師來檢查那棵老榕樹,因為有一根大樹枝看起來很脆弱又危險。"
  },
  {
    "word": "gardener",
    "pos": "n.",
    "cn_def": "園丁",
    "en_def": "a person who looks after a garden",
    "sentence": "The {{BLANK}} waters the plants early in the morning, because less water is lost in the cool air.",
    "cn": "園丁一大早就替植物澆水,因為在涼爽的空氣中水分流失較少。"
  },
  {
    "word": "habitat corridor",
    "pos": "n.phr.",
    "cn_def": "棲地廊道",
    "en_def": "a strip of natural land that links two habitats",
    "sentence": "The city planted a {{BLANK}} of trees between two parks, so birds and insects can move safely between them.",
    "cn": "市政府在兩座公園之間種植了一條樹木棲地廊道,所以鳥類和昆蟲能在其間安全移動。"
  }
];

const MCQS = [
  {
    "q": "_____ killed most of the elm trees in Britain, so the countryside looked very different afterwards.",
    "options": [
      "Dutch elm disease",
      "temperate forest",
      "bird hide",
      "ecological succession"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "_____ is spreading across Europe, and experts fear that most ash trees could be lost within a few decades.",
    "options": [
      "pioneer species",
      "ecological succession",
      "mycorrhizal network",
      "ash dieback"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The banana farm was hit by a _____ disease, so the farmer had to destroy hundreds of sick plants.",
    "options": [
      "disjointed",
      "fungal",
      "scalable",
      "impermeable"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "A _____ was growing on the old log, and it slowly turned the hard wood soft and crumbly.",
    "options": [
      "elaboration",
      "riverbank",
      "fungus",
      "frog"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Mistletoe is a _____ that grows on trees, and it takes water and food from the branches it lives on.",
    "options": [
      "frog",
      "initiation",
      "rhizome",
      "parasite"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The _____ plant wrapped itself around the tree, and after a few years the tree became weak and sick.",
    "options": [
      "logistical",
      "parasitic",
      "verdant",
      "hierarchical"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Tiny green _____ covered the roses, so my mother sprayed them with soapy water instead of chemicals.",
    "options": [
      "cutting",
      "phloem",
      "aphid",
      "spore"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "A hungry _____ ate holes in all the cabbage leaves, but my grandmother did not mind because it would become a butterfly.",
    "options": [
      "caterpillar",
      "peculiarity",
      "berry",
      "sensitivity"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "A huge cloud of _____ arrived in East Africa, and within hours they had eaten the crops of entire villages.",
    "options": [
      "bud",
      "impartiality",
      "locust",
      "compartment"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "White _____ appeared on the cucumber leaves during the rainy season, so the farmer removed the sick leaves quickly.",
    "options": [
      "forester",
      "assemblage",
      "primacy",
      "mildew"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "If you water a cactus too often, its roots will _____, so it is better to let the soil dry out.",
    "options": [
      "cohabit",
      "rot",
      "bloom",
      "overshoot"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The mile-a-minute vine is an _____ in Taiwan, and it grows so fast that it covers and kills native trees.",
    "options": [
      "alien species",
      "carbon sequestration",
      "water lily",
      "reed bed"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Volunteers removed _____ plants from the wetland, so the local plants had more space and light to grow.",
    "options": [
      "unchecked",
      "fractional",
      "falsifiable",
      "non-native"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "_____ farming clears land quickly, but the soil loses its nutrients after a few years, so farmers move on.",
    "options": [
      "slash-and-burn",
      "murky",
      "maximal",
      "lateral"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "_____ by goats has destroyed the grass on the hills, and now the soil is washed away every time it rains.",
    "options": [
      "prioritisation",
      "overgrazing",
      "sedimentation",
      "aggregation"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Factory smoke caused _____ in the region, and many trees on the mountain lost their leaves and died.",
    "options": [
      "water purification",
      "pioneer species",
      "acid rain",
      "natural filter"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ grows ten thousand young trees every year, and volunteers plant them on the hills in winter.",
    "options": [
      "tree nursery",
      "growth ring",
      "botanical garden",
      "forest floor"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The forest showed signs of _____ only a year after the fire, and green leaves appeared on the burnt trees.",
    "options": [
      "birch",
      "taproot",
      "regrowth",
      "cross-pollination"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Scientists developed a _____ type of elm tree, so towns can plant elms again without fear of losing them.",
    "options": [
      "impermeable",
      "disease-resistant",
      "divergent",
      "inseparable"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Imported plants must stay in _____ for several weeks, so inspectors can make sure they do not carry pests.",
    "options": [
      "woodland",
      "colonisation",
      "spore",
      "quarantine"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Australia has strict _____ rules at its airports, so travellers cannot bring fresh fruit or seeds into the country.",
    "options": [
      "characterisation",
      "berry",
      "biosecurity",
      "chloroplast"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The wetland became a _____ in 2010, and since then the number of birds has almost doubled.",
    "options": [
      "nature reserve",
      "canopy gap",
      "forest floor",
      "flowering plant"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Taroko is a famous _____ in Taiwan, and its forests and gorges attract visitors from all over the world.",
    "options": [
      "forest floor",
      "national park",
      "seed pod",
      "carbon sequestration"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Hunting is not allowed in the _____, so wild animals can live there without being disturbed.",
    "options": [
      "bird hide",
      "land reclamation",
      "mycorrhizal network",
      "protected area"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The school called an _____ to check the old banyan tree, because one large branch looked weak and dangerous.",
    "options": [
      "subdivision",
      "eligibility",
      "arborist",
      "owl"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The _____ waters the plants early in the morning, because less water is lost in the cool air.",
    "options": [
      "interdependence",
      "gardener",
      "mudflat",
      "imbalance"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The city planted a _____ of trees between two parks, so birds and insects can move safely between them.",
    "options": [
      "pioneer species",
      "Ramsar Convention",
      "reed bed",
      "habitat corridor"
    ],
    "answer": 3,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "dutch elm disease": {
    "pos": "n.phr.",
    "en_def": "a deadly tree disease spread by beetles",
    "cn_def": "荷蘭榆樹病"
  },
  "ash dieback": {
    "pos": "n.phr.",
    "en_def": "a fungal disease that kills ash trees",
    "cn_def": "白蠟樹枯梢病"
  },
  "fungal": {
    "pos": "adj.",
    "en_def": "caused by or relating to a fungus",
    "cn_def": "真菌的"
  },
  "fungus": {
    "pos": "n.",
    "en_def": "a living thing such as a mushroom or mould",
    "cn_def": "真菌"
  },
  "parasite": {
    "pos": "n.",
    "en_def": "a living thing that lives on another and takes its food",
    "cn_def": "寄生物"
  },
  "parasitic": {
    "pos": "adj.",
    "en_def": "living on another living thing and taking its food",
    "cn_def": "寄生的"
  },
  "aphid": {
    "pos": "n.",
    "en_def": "a very small insect that sucks juice from plants",
    "cn_def": "蚜蟲"
  },
  "caterpillar": {
    "pos": "n.",
    "en_def": "a young butterfly or moth that looks like a small worm",
    "cn_def": "毛毛蟲"
  },
  "locust": {
    "pos": "n.",
    "en_def": "an insect that flies in huge groups and eats crops",
    "cn_def": "蝗蟲"
  },
  "mildew": {
    "pos": "n.",
    "en_def": "a thin white fungus on plants or damp things",
    "cn_def": "白粉病;黴"
  },
  "rot": {
    "pos": "v.",
    "en_def": "to slowly break down and go bad",
    "cn_def": "腐爛"
  },
  "alien species": {
    "pos": "n.phr.",
    "en_def": "a plant or animal brought from another place",
    "cn_def": "外來種"
  },
  "non-native": {
    "pos": "adj.",
    "en_def": "not originally from the area where it now lives",
    "cn_def": "非原生的"
  },
  "slash-and-burn": {
    "pos": "adj.",
    "en_def": "cutting and burning forest to clear land for farming",
    "cn_def": "刀耕火種的"
  },
  "overgrazing": {
    "pos": "n.",
    "en_def": "when too many animals eat the plants in an area",
    "cn_def": "過度放牧"
  },
  "acid rain": {
    "pos": "n.phr.",
    "en_def": "rain made harmful by pollution in the air",
    "cn_def": "酸雨"
  },
  "tree nursery": {
    "pos": "n.phr.",
    "en_def": "a place where young trees are grown before planting",
    "cn_def": "苗圃"
  },
  "regrowth": {
    "pos": "n.",
    "en_def": "new growth after something has been damaged or cut",
    "cn_def": "再生;重新生長"
  },
  "disease-resistant": {
    "pos": "adj.",
    "en_def": "not easily affected by disease",
    "cn_def": "抗病的"
  },
  "quarantine": {
    "pos": "n.",
    "en_def": "a period when plants or animals are kept apart to stop disease",
    "cn_def": "檢疫;隔離"
  },
  "biosecurity": {
    "pos": "n.",
    "en_def": "rules and actions that stop harmful pests and diseases entering a place",
    "cn_def": "生物安全"
  },
  "nature reserve": {
    "pos": "n.phr.",
    "en_def": "an area where plants and animals are protected",
    "cn_def": "自然保護區"
  },
  "national park": {
    "pos": "n.phr.",
    "en_def": "a large area of land protected by the government",
    "cn_def": "國家公園"
  },
  "protected area": {
    "pos": "n.phr.",
    "en_def": "a place where nature is protected by law",
    "cn_def": "保護區"
  },
  "arborist": {
    "pos": "n.",
    "en_def": "an expert who cares for trees",
    "cn_def": "樹藝師"
  },
  "gardener": {
    "pos": "n.",
    "en_def": "a person who looks after a garden",
    "cn_def": "園丁"
  },
  "habitat corridor": {
    "pos": "n.phr.",
    "en_def": "a strip of natural land that links two habitats",
    "cn_def": "棲地廊道"
  },
  "temperate forest": {
    "pos": "n.phr.",
    "en_def": "a forest in a region with warm summers and cool winters",
    "cn_def": "溫帶森林"
  },
  "bird hide": {
    "pos": "n.phr.",
    "en_def": "a small hut where people watch birds without being seen",
    "cn_def": "賞鳥屋"
  },
  "ecological succession": {
    "pos": "n.phr.",
    "en_def": "the slow change in plants and animals in a place over time",
    "cn_def": "生態演替"
  },
  "pioneer species": {
    "pos": "n.phr.",
    "en_def": "the first plants to grow on empty or damaged land",
    "cn_def": "先驅物種"
  },
  "mycorrhizal network": {
    "pos": "n.phr.",
    "en_def": "underground fungi that connect the roots of trees",
    "cn_def": "菌根網絡"
  },
  "disjointed": {
    "pos": "adj.",
    "en_def": "not connected; broken into parts",
    "cn_def": "不連貫的;支離破碎的"
  },
  "scalable": {
    "pos": "adj.",
    "en_def": "able to be made larger easily",
    "cn_def": "可擴展的"
  },
  "impermeable": {
    "pos": "adj.",
    "en_def": "not letting water pass through",
    "cn_def": "不透水的"
  },
  "elaboration": {
    "pos": "n.",
    "en_def": "adding more detail to explain something",
    "cn_def": "詳細說明;闡述"
  },
  "riverbank": {
    "pos": "n.",
    "en_def": "the land along the side of a river",
    "cn_def": "河岸"
  },
  "frog": {
    "pos": "n.",
    "en_def": "a small green animal with long back legs that jumps",
    "cn_def": "青蛙"
  },
  "initiation": {
    "pos": "n.",
    "en_def": "the start of something",
    "cn_def": "開始;啟動"
  },
  "rhizome": {
    "pos": "n.",
    "en_def": "a stem that grows sideways under the ground",
    "cn_def": "根莖;地下莖"
  },
  "logistical": {
    "pos": "adj.",
    "en_def": "relating to the planning of moving people and supplies",
    "cn_def": "後勤的"
  },
  "verdant": {
    "pos": "adj.",
    "en_def": "green and full of plants",
    "cn_def": "翠綠的;青蔥的"
  },
  "hierarchical": {
    "pos": "adj.",
    "en_def": "arranged in levels from high to low",
    "cn_def": "階層式的"
  },
  "cutting": {
    "pos": "n.",
    "en_def": "a piece cut from a plant to grow a new plant",
    "cn_def": "插枝;扦插枝"
  },
  "phloem": {
    "pos": "n.",
    "en_def": "tubes in a plant that carry sugar from the leaves",
    "cn_def": "韌皮部"
  },
  "spore": {
    "pos": "n.",
    "en_def": "a tiny cell that ferns and fungi use to reproduce",
    "cn_def": "孢子"
  },
  "peculiarity": {
    "pos": "n.",
    "en_def": "a strange or unusual feature",
    "cn_def": "特點;怪異之處"
  },
  "berry": {
    "pos": "n.",
    "en_def": "a small soft fruit with seeds",
    "cn_def": "漿果"
  },
  "sensitivity": {
    "pos": "n.",
    "en_def": "how easily something is affected by changes",
    "cn_def": "敏感度;敏感性"
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small part on a plant that will open into a leaf or flower",
    "cn_def": "芽;花苞"
  },
  "impartiality": {
    "pos": "n.",
    "en_def": "treating all sides fairly",
    "cn_def": "公正;不偏不倚"
  },
  "compartment": {
    "pos": "n.",
    "en_def": "one of the separate parts that something is divided into",
    "cn_def": "隔間;區塊"
  },
  "forester": {
    "pos": "n.",
    "en_def": "a person whose job is to look after a forest",
    "cn_def": "林務員"
  },
  "assemblage": {
    "pos": "n.",
    "en_def": "a group of things or living things found together",
    "cn_def": "集合;群集"
  },
  "primacy": {
    "pos": "n.",
    "en_def": "the state of being most important",
    "cn_def": "首要地位"
  },
  "cohabit": {
    "pos": "v.",
    "en_def": "to live together in the same place",
    "cn_def": "共同生活;共存"
  },
  "bloom": {
    "pos": "v.",
    "en_def": "to produce flowers",
    "cn_def": "開花"
  },
  "overshoot": {
    "pos": "v.",
    "en_def": "to go further than intended",
    "cn_def": "超過;超出"
  },
  "carbon sequestration": {
    "pos": "n.phr.",
    "en_def": "storing carbon from the air in plants, soil or rocks",
    "cn_def": "碳封存;固碳"
  },
  "water lily": {
    "pos": "n.phr.",
    "en_def": "a plant with large flat leaves that float on water",
    "cn_def": "睡蓮"
  },
  "reed bed": {
    "pos": "n.phr.",
    "en_def": "an area of water full of reeds",
    "cn_def": "蘆葦床;蘆葦叢"
  },
  "unchecked": {
    "pos": "adj.",
    "en_def": "not controlled or stopped",
    "cn_def": "未受控制的"
  },
  "fractional": {
    "pos": "adj.",
    "en_def": "very small; only a small part",
    "cn_def": "極小的;部分的"
  },
  "falsifiable": {
    "pos": "adj.",
    "en_def": "able to be proved wrong by testing",
    "cn_def": "可證偽的"
  },
  "murky": {
    "pos": "adj.",
    "en_def": "dark and dirty, not clear",
    "cn_def": "混濁的"
  },
  "maximal": {
    "pos": "adj.",
    "en_def": "as great or as large as possible",
    "cn_def": "最大的"
  },
  "lateral": {
    "pos": "adj.",
    "en_def": "growing or moving to the side",
    "cn_def": "側面的;橫向的"
  },
  "prioritisation": {
    "pos": "n.",
    "en_def": "deciding which things are most important",
    "cn_def": "排定優先順序"
  },
  "sedimentation": {
    "pos": "n.",
    "en_def": "the process of sand and mud settling at the bottom of water",
    "cn_def": "沉積作用"
  },
  "aggregation": {
    "pos": "n.",
    "en_def": "the act of gathering many things into a group",
    "cn_def": "聚集;匯集"
  },
  "water purification": {
    "pos": "n.phr.",
    "en_def": "the process of making water clean",
    "cn_def": "水質淨化"
  },
  "natural filter": {
    "pos": "n.phr.",
    "en_def": "something in nature that removes dirt from water or air",
    "cn_def": "天然過濾器"
  },
  "growth ring": {
    "pos": "n.phr.",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "cn_def": "年輪"
  },
  "botanical garden": {
    "pos": "n.phr.",
    "en_def": "a park where many kinds of plants are grown for study",
    "cn_def": "植物園"
  },
  "forest floor": {
    "pos": "n.phr.",
    "en_def": "the ground in a forest",
    "cn_def": "森林地面"
  },
  "birch": {
    "pos": "n.",
    "en_def": "a tree with thin white bark",
    "cn_def": "樺樹"
  },
  "taproot": {
    "pos": "n.",
    "en_def": "one large main root that grows straight down",
    "cn_def": "主根"
  },
  "cross-pollination": {
    "pos": "n.",
    "en_def": "when pollen moves from one plant to another plant",
    "cn_def": "異花授粉"
  },
  "divergent": {
    "pos": "adj.",
    "en_def": "different and moving apart",
    "cn_def": "分歧的;相異的"
  },
  "inseparable": {
    "pos": "adj.",
    "en_def": "impossible to separate",
    "cn_def": "不可分割的"
  },
  "woodland": {
    "pos": "n.",
    "en_def": "land covered with trees, smaller than a forest",
    "cn_def": "林地"
  },
  "colonisation": {
    "pos": "n.",
    "en_def": "when plants or animals move into and spread in a new area",
    "cn_def": "拓殖;移殖"
  },
  "characterisation": {
    "pos": "n.",
    "en_def": "describing the typical features of something",
    "cn_def": "特徵描述;特性分析"
  },
  "chloroplast": {
    "pos": "n.",
    "en_def": "a tiny part of a plant cell where photosynthesis happens",
    "cn_def": "葉綠體"
  },
  "canopy gap": {
    "pos": "n.phr.",
    "en_def": "an opening in the top layer of a forest",
    "cn_def": "林冠孔隙"
  },
  "flowering plant": {
    "pos": "n.phr.",
    "en_def": "a plant that produces flowers and seeds",
    "cn_def": "開花植物"
  },
  "seed pod": {
    "pos": "n.phr.",
    "en_def": "a long case on a plant that holds seeds",
    "cn_def": "種莢"
  },
  "land reclamation": {
    "pos": "n.phr.",
    "en_def": "making new land from sea or wetland",
    "cn_def": "填海造地;土地開墾"
  },
  "subdivision": {
    "pos": "n.",
    "en_def": "dividing something into smaller parts",
    "cn_def": "再劃分;細分"
  },
  "eligibility": {
    "pos": "n.",
    "en_def": "the right to do or receive something",
    "cn_def": "資格"
  },
  "owl": {
    "pos": "n.",
    "en_def": "a bird with large eyes that hunts at night",
    "cn_def": "貓頭鷹"
  },
  "interdependence": {
    "pos": "n.",
    "en_def": "when things depend on each other",
    "cn_def": "相互依存"
  },
  "mudflat": {
    "pos": "n.",
    "en_def": "flat muddy land covered by the sea at high tide",
    "cn_def": "泥灘;潮間灘地"
  },
  "imbalance": {
    "pos": "n.",
    "en_def": "a situation where things are not equal or in balance",
    "cn_def": "失衡;不平衡"
  },
  "ramsar convention": {
    "pos": "n.phr.",
    "en_def": "an international agreement to protect important wetlands",
    "cn_def": "拉姆薩公約(國際濕地公約)"
  }
};

const EXTRA_GLOSSES = {};
