// Topic 2 Subunit 2 Quiz Data: Habitats & Ecosystems 棲地與生態系
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S02 - Habitats & Ecosystems 棲地與生態系",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲地；棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "When a forest is cut down, many animals lose their {{BLANK}}, and they have to search for a new place to live.",
    "cn": "當森林被砍伐時，許多動物就失去了牠們的棲息地，而且必須尋找新的地方居住。"
  },
  {
    "word": "ecosystem",
    "pos": "n.",
    "cn_def": "生態系統",
    "en_def": "all the living things in an area and how they connect",
    "sentence": "If one animal disappears from an {{BLANK}}, other animals and plants may also be affected because they all depend on each other.",
    "cn": "如果一種動物從一個生態系統中消失，其他動植物也可能受到影響，因為牠們都互相依賴。"
  },
  {
    "word": "ecology",
    "pos": "n.",
    "cn_def": "生態學",
    "en_def": "the study of how living things relate to their environment",
    "sentence": "My sister studies {{BLANK}} at university, and she often goes to the wetlands to count birds and test the water.",
    "cn": "我姊姊在大學念生態學，她常常去濕地數鳥並檢測水質。"
  },
  {
    "word": "ecological",
    "pos": "adj.",
    "cn_def": "生態的",
    "en_def": "related to plants, animals and their environment",
    "sentence": "Building a new road through the forest could cause serious {{BLANK}} damage, so many local people are against the plan.",
    "cn": "在森林中蓋一條新道路可能造成嚴重的生態破壞，所以許多當地居民反對這項計畫。"
  },
  {
    "word": "rainforest",
    "pos": "n.",
    "cn_def": "雨林",
    "en_def": "a thick tropical forest with heavy rain all year",
    "sentence": "The Amazon {{BLANK}} is home to millions of insects and animals, but large areas of it are cut down every year.",
    "cn": "亞馬遜雨林是數百萬種昆蟲和動物的家園，但每年都有大片面積遭到砍伐。"
  },
  {
    "word": "wetland",
    "pos": "n.",
    "cn_def": "濕地",
    "en_def": "land that is wet, such as a marsh or swamp",
    "sentence": "The black-faced spoonbills spend the winter in the {{BLANK}} of Tainan, so many birdwatchers visit the area every year.",
    "cn": "黑面琵鷺在台南的濕地過冬，所以每年都有許多賞鳥人士造訪那個地區。"
  },
  {
    "word": "grassland",
    "pos": "n.",
    "cn_def": "草原",
    "en_def": "a large area of land covered with grass",
    "sentence": "Zebras and antelopes live on the African {{BLANK}}, and they travel long distances every year to find fresh grass and water.",
    "cn": "斑馬和羚羊生活在非洲的草原上，牠們每年都要長途跋涉尋找新鮮的草和水。"
  },
  {
    "word": "savannah",
    "pos": "n.",
    "cn_def": "熱帶大草原",
    "en_def": "a flat grassy plain in a hot country with few trees",
    "sentence": "Lions rest under the trees of the {{BLANK}} during the hot afternoon, and they usually hunt when the sun goes down.",
    "cn": "獅子在炎熱的午後於熱帶大草原的樹下休息，而牠們通常在太陽下山後才狩獵。"
  },
  {
    "word": "tundra",
    "pos": "n.",
    "cn_def": "凍原；苔原",
    "en_def": "a cold, flat area with no trees near the Arctic",
    "sentence": "The Arctic {{BLANK}} is frozen for most of the year, but in summer it becomes green and many birds fly there to lay eggs.",
    "cn": "北極凍原一年中大部分時間都是冰凍的，但到了夏天就會變綠，許多鳥會飛到那裡產卵。"
  },
  {
    "word": "coral",
    "pos": "n.",
    "cn_def": "珊瑚",
    "en_def": "a hard sea substance made by tiny sea animals",
    "sentence": "When the sea becomes too warm, {{BLANK}} turns white and may die, so divers are worried about the future of the reefs.",
    "cn": "當海水變得太暖時，珊瑚會變白甚至死亡，所以潛水員們很擔心珊瑚礁的未來。"
  },
  {
    "word": "reef",
    "pos": "n.",
    "cn_def": "礁；暗礁",
    "en_def": "a line of rock or coral near the surface of the sea",
    "sentence": "We went snorkelling near a {{BLANK}} in Green Island, and we saw colourful fish swimming between the rocks.",
    "cn": "我們在綠島的一處珊瑚礁附近浮潛，看到了色彩繽紛的魚在岩石之間游來游去。"
  },
  {
    "word": "mangrove",
    "pos": "n.",
    "cn_def": "紅樹林",
    "en_def": "a tree that grows in salty water along coasts",
    "sentence": "The {{BLANK}} along the coast protect the land from strong waves, and they also give young fish a safe place to grow.",
    "cn": "海岸邊的紅樹林保護陸地免受大浪侵襲，同時也提供小魚一個安全成長的地方。"
  },
  {
    "word": "estuary",
    "pos": "n.",
    "cn_def": "河口",
    "en_def": "the wide part of a river where it meets the sea",
    "sentence": "The Danshui River {{BLANK}} is full of crabs and birds, because fresh water and sea water mix there and bring plenty of food.",
    "cn": "淡水河河口充滿了螃蟹和鳥類，因為淡水和海水在那裡交會，帶來了豐富的食物。"
  },
  {
    "word": "canopy",
    "pos": "n.",
    "cn_def": "樹冠層",
    "en_def": "the top layer of branches and leaves in a forest",
    "sentence": "Many monkeys spend their whole lives in the forest {{BLANK}}, so they rarely come down to the ground.",
    "cn": "許多猴子一生都待在森林的樹冠層，所以牠們很少下到地面上。"
  },
  {
    "word": "undergrowth",
    "pos": "n.",
    "cn_def": "矮樹叢；下層灌木",
    "en_def": "bushes and small plants growing under big trees",
    "sentence": "The small deer hid in the thick {{BLANK}} when it heard our footsteps, so we could not take a photo of it.",
    "cn": "小鹿聽到我們的腳步聲就躲進了茂密的矮樹叢裡，所以我們沒辦法拍到牠的照片。"
  },
  {
    "word": "burrow",
    "pos": "n.",
    "cn_def": "地洞；洞穴",
    "en_def": "a hole in the ground that an animal digs to live in",
    "sentence": "The pangolin digs a deep {{BLANK}} under the ground, and it sleeps there during the day to stay cool and safe.",
    "cn": "穿山甲在地底下挖了一個很深的洞穴，白天牠就在那裡睡覺，以保持涼爽和安全。"
  },
  {
    "word": "nest",
    "pos": "n.",
    "cn_def": "巢；鳥巢",
    "en_def": "a home that birds build for their eggs",
    "sentence": "A pair of swallows built a {{BLANK}} under our balcony, and we watched the parents feed their babies every morning.",
    "cn": "一對燕子在我們的陽台下築了一個巢，我們每天早上都看著燕子爸媽餵食牠們的寶寶。"
  },
  {
    "word": "den",
    "pos": "n.",
    "cn_def": "獸穴；巢穴",
    "en_def": "the hidden home of a wild animal such as a bear",
    "sentence": "The mother bear stays in her {{BLANK}} all winter, and her cubs are born there while the snow covers the forest.",
    "cn": "熊媽媽整個冬天都待在她的巢穴裡，而當白雪覆蓋森林時，她的小熊就在那裡出生。"
  },
  {
    "word": "territory",
    "pos": "n.",
    "cn_def": "領域；地盤",
    "en_def": "an area that an animal treats as its own",
    "sentence": "A male tiger marks its {{BLANK}} with its smell, and it will fight any other tiger that tries to enter.",
    "cn": "公老虎會用氣味標示牠的地盤，而且會和任何試圖闖入的其他老虎打鬥。"
  },
  {
    "word": "niche",
    "pos": "n.",
    "cn_def": "生態棲位",
    "en_def": "the special role of a species in its environment",
    "sentence": "Each bird on the island has its own {{BLANK}}, because some eat seeds while others catch insects, so they do not compete for food.",
    "cn": "島上每種鳥都有自己的生態棲位，因為有些吃種子，有些捕捉昆蟲，所以牠們不會爭奪食物。"
  },
  {
    "word": "migration",
    "pos": "n.",
    "cn_def": "遷徙",
    "en_def": "the seasonal movement of animals to another place",
    "sentence": "The {{BLANK}} of the purple crow butterflies in Taiwan is famous, so the government closes some highway lanes to protect them every spring.",
    "cn": "台灣紫斑蝶的遷徙非常有名，所以政府每年春天都會封閉部分高速公路車道來保護牠們。"
  },
  {
    "word": "migrate",
    "pos": "v.",
    "cn_def": "遷徙；遷移",
    "en_def": "to travel to another place when the season changes",
    "sentence": "Gray-faced buzzards {{BLANK}} through Kenting every autumn, and thousands of birdwatchers gather there to watch them fly across the sky.",
    "cn": "每年秋天灰面鵟鷹會遷徙經過墾丁，成千上萬的賞鳥人士聚集在那裡觀看牠們飛越天空。"
  },
  {
    "word": "hibernate",
    "pos": "v.",
    "cn_def": "冬眠",
    "en_def": "to sleep through the whole winter",
    "sentence": "Some bears {{BLANK}} during the cold months because food is hard to find, and they live on the fat stored in their bodies.",
    "cn": "有些熊會在寒冷的月份冬眠，因為食物很難找到，牠們靠著儲存在體內的脂肪維生。"
  },
  {
    "word": "hibernation",
    "pos": "n.",
    "cn_def": "冬眠",
    "en_def": "a long sleep that some animals have in winter",
    "sentence": "After a long {{BLANK}}, the hedgehog woke up very hungry, so it searched the garden for insects and worms.",
    "cn": "經過漫長的冬眠後，刺蝟醒來時非常飢餓，所以牠在花園裡四處尋找昆蟲和蟲子。"
  },
  {
    "word": "ecologist",
    "pos": "n.",
    "cn_def": "生態學家",
    "en_def": "a scientist who studies living things and their environment",
    "sentence": "The {{BLANK}} spent three months in the mountains, and she recorded every type of bird she saw in her notebook.",
    "cn": "那位生態學家在山上待了三個月，她把看到的每一種鳥都記錄在筆記本上。"
  },
  {
    "word": "terrain",
    "pos": "n.",
    "cn_def": "地形；地勢",
    "en_def": "an area of land and its physical features",
    "sentence": "The rangers use horses instead of cars because the {{BLANK}} is rocky and steep, and there are no proper roads.",
    "cn": "巡山員們騎馬而不是開車，因為那裡的地形多岩石又陡峭，而且沒有像樣的道路。"
  },
  {
    "word": "vegetation",
    "pos": "n.",
    "cn_def": "植被；植物",
    "en_def": "plants in general, especially in one area",
    "sentence": "After the heavy rain, the {{BLANK}} on the hills grew quickly, so the deer had plenty of fresh leaves to eat.",
    "cn": "大雨過後，山坡上的植被迅速生長，所以鹿有大量新鮮的葉子可以吃。"
  },
  {
    "word": "waterhole",
    "pos": "n.",
    "cn_def": "水坑；飲水處",
    "en_def": "a pool of water where wild animals go to drink",
    "sentence": "During the dry season, elephants walk for hours to reach a {{BLANK}}, but lions often wait there to catch other animals.",
    "cn": "在乾季時，大象要走好幾個小時才能到達水坑，但獅子常常在那裡等著捕捉其他動物。"
  },
  {
    "word": "marine",
    "pos": "adj.",
    "cn_def": "海洋的",
    "en_def": "related to the sea and the animals in it",
    "sentence": "Plastic bags are a serious danger to {{BLANK}} animals, because turtles often think the bags are jellyfish and eat them.",
    "cn": "塑膠袋對海洋動物是嚴重的危害，因為海龜常常把塑膠袋誤認為水母而吃下去。"
  },
  {
    "word": "scavenger",
    "pos": "n.",
    "cn_def": "食腐動物",
    "en_def": "an animal that eats dead animals it did not kill",
    "sentence": "The vulture is a {{BLANK}} that eats dead animals, so it helps to keep the savannah clean and stops diseases from spreading.",
    "cn": "禿鷹是一種吃動物屍體的食腐動物，所以牠幫助維持草原的乾淨，並防止疾病擴散。"
  }
];

const MCQS = [
  {
    "q": "When a forest is cut down, many animals lose their _____, and they have to search for a new place to live.",
    "options": [
      "habitat",
      "rehabilitation",
      "zookeeper",
      "seizure"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "If one animal disappears from an _____, other animals and plants may also be affected because they all depend on each other.",
    "options": [
      "farmland",
      "ecosystem",
      "charity",
      "campaign"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My sister studies _____ at university, and she often goes to the wetlands to count birds and test the water.",
    "options": [
      "species",
      "roadkill",
      "site",
      "ecology"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Building a new road through the forest could cause serious _____ damage, so many local people are against the plan.",
    "options": [
      "invasive",
      "rare",
      "ecological",
      "coherent"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The Amazon _____ is home to millions of insects and animals, but large areas of it are cut down every year.",
    "options": [
      "rainforest",
      "layer",
      "sequence",
      "route"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The black-faced spoonbills spend the winter in the _____ of Tainan, so many birdwatchers visit the area every year.",
    "options": [
      "individual",
      "wetland",
      "retaliation",
      "grant"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Zebras and antelopes live on the African _____, and they travel long distances every year to find fresh grass and water.",
    "options": [
      "grant",
      "bulk",
      "option",
      "grassland"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Lions rest under the trees of the _____ during the hot afternoon, and they usually hunt when the sun goes down.",
    "options": [
      "compensation",
      "recovery",
      "savannah",
      "customs"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The Arctic _____ is frozen for most of the year, but in summer it becomes green and many birds fly there to lay eggs.",
    "options": [
      "tundra",
      "poaching",
      "wilderness",
      "pollutant"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "When the sea becomes too warm, _____ turns white and may die, so divers are worried about the future of the reefs.",
    "options": [
      "herder",
      "ignorance",
      "coral",
      "conservationist"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "We went snorkelling near a _____ in Green Island, and we saw colourful fish swimming between the rocks.",
    "options": [
      "poacher",
      "reef",
      "overfishing",
      "carnivore"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The _____ along the coast protect the land from strong waves, and they also give young fish a safe place to grow.",
    "options": [
      "contamination",
      "enclosure",
      "pollutant",
      "mangrove"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The Danshui River _____ is full of crabs and birds, because fresh water and sea water mix there and bring plenty of food.",
    "options": [
      "issue",
      "estuary",
      "rancher",
      "rhino"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Many monkeys spend their whole lives in the forest _____, so they rarely come down to the ground.",
    "options": [
      "fauna",
      "destruction",
      "issue",
      "canopy"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The small deer hid in the thick _____ when it heard our footsteps, so we could not take a photo of it.",
    "options": [
      "livelihood",
      "scheme",
      "undergrowth",
      "wildlife"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The pangolin digs a deep _____ under the ground, and it sleeps there during the day to stay cool and safe.",
    "options": [
      "burrow",
      "phase",
      "route",
      "subsidy"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A pair of swallows built a _____ under our balcony, and we watched the parents feed their babies every morning.",
    "options": [
      "penalty",
      "nest",
      "symbol",
      "logic"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The mother bear stays in her _____ all winter, and her cubs are born there while the snow covers the forest.",
    "options": [
      "erosion",
      "protection",
      "encounter",
      "den"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "A male tiger marks its _____ with its smell, and it will fight any other tiger that tries to enter.",
    "options": [
      "territory",
      "fragmentation",
      "treaty",
      "wildfire"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Each bird on the island has its own _____, because some eat seeds while others catch insects, so they do not compete for food.",
    "options": [
      "donation",
      "cub",
      "niche",
      "motive"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ of the purple crow butterflies in Taiwan is famous, so the government closes some highway lanes to protect them every spring.",
    "options": [
      "migration",
      "recovery",
      "wildfire",
      "grant"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Gray-faced buzzards _____ through Kenting every autumn, and thousands of birdwatchers gather there to watch them fly across the sky.",
    "options": [
      "construct",
      "inhibit",
      "migrate",
      "smuggle"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Some bears _____ during the cold months because food is hard to find, and they live on the fat stored in their bodies.",
    "options": [
      "rehabilitate",
      "hibernate",
      "forage",
      "conserve"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "After a long _____, the hedgehog woke up very hungry, so it searched the garden for insects and worms.",
    "options": [
      "penalty",
      "instinct",
      "trap",
      "hibernation"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The _____ spent three months in the mountains, and she recorded every type of bird she saw in her notebook.",
    "options": [
      "enclosure",
      "trafficking",
      "ecologist",
      "substitute"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The rangers use horses instead of cars because the _____ is rocky and steep, and there are no proper roads.",
    "options": [
      "notion",
      "terrain",
      "enclosure",
      "formula"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "After the heavy rain, the _____ on the hills grew quickly, so the deer had plenty of fresh leaves to eat.",
    "options": [
      "camouflage",
      "organism",
      "ivory",
      "vegetation"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "During the dry season, elephants walk for hours to reach a _____, but lions often wait there to catch other animals.",
    "options": [
      "waterhole",
      "seizure",
      "customs",
      "marsupial"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Plastic bags are a serious danger to _____ animals, because turtles often think the bags are jellyfish and eat them.",
    "options": [
      "dynamic",
      "marine",
      "capable",
      "adjacent"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The vulture is a _____ that eats dead animals, so it helps to keep the savannah clean and stops diseases from spreading.",
    "options": [
      "landowner",
      "livelihood",
      "scavenger",
      "rehabilitation"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲地；棲息地"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the living things in an area and how they connect",
    "cn_def": "生態系統"
  },
  "ecology": {
    "pos": "n.",
    "en_def": "the study of how living things relate to their environment",
    "cn_def": "生態學"
  },
  "ecological": {
    "pos": "adj.",
    "en_def": "related to plants, animals and their environment",
    "cn_def": "生態的"
  },
  "rainforest": {
    "pos": "n.",
    "en_def": "a thick tropical forest with heavy rain all year",
    "cn_def": "雨林"
  },
  "wetland": {
    "pos": "n.",
    "en_def": "land that is wet, such as a marsh or swamp",
    "cn_def": "濕地"
  },
  "grassland": {
    "pos": "n.",
    "en_def": "a large area of land covered with grass",
    "cn_def": "草原"
  },
  "savannah": {
    "pos": "n.",
    "en_def": "a flat grassy plain in a hot country with few trees",
    "cn_def": "熱帶大草原"
  },
  "tundra": {
    "pos": "n.",
    "en_def": "a cold, flat area with no trees near the Arctic",
    "cn_def": "凍原；苔原"
  },
  "coral": {
    "pos": "n.",
    "en_def": "a hard sea substance made by tiny sea animals",
    "cn_def": "珊瑚"
  },
  "reef": {
    "pos": "n.",
    "en_def": "a line of rock or coral near the surface of the sea",
    "cn_def": "礁；暗礁"
  },
  "mangrove": {
    "pos": "n.",
    "en_def": "a tree that grows in salty water along coasts",
    "cn_def": "紅樹林"
  },
  "estuary": {
    "pos": "n.",
    "en_def": "the wide part of a river where it meets the sea",
    "cn_def": "河口"
  },
  "canopy": {
    "pos": "n.",
    "en_def": "the top layer of branches and leaves in a forest",
    "cn_def": "樹冠層"
  },
  "undergrowth": {
    "pos": "n.",
    "en_def": "bushes and small plants growing under big trees",
    "cn_def": "矮樹叢；下層灌木"
  },
  "burrow": {
    "pos": "n.",
    "en_def": "a hole in the ground that an animal digs to live in",
    "cn_def": "地洞；洞穴"
  },
  "nest": {
    "pos": "n.",
    "en_def": "a home that birds build for their eggs",
    "cn_def": "巢；鳥巢"
  },
  "den": {
    "pos": "n.",
    "en_def": "the hidden home of a wild animal such as a bear",
    "cn_def": "獸穴；巢穴"
  },
  "territory": {
    "pos": "n.",
    "en_def": "an area that an animal treats as its own",
    "cn_def": "領域；地盤"
  },
  "niche": {
    "pos": "n.",
    "en_def": "the special role of a species in its environment",
    "cn_def": "生態棲位"
  },
  "migration": {
    "pos": "n.",
    "en_def": "the seasonal movement of animals to another place",
    "cn_def": "遷徙"
  },
  "migrate": {
    "pos": "v.",
    "en_def": "to travel to another place when the season changes",
    "cn_def": "遷徙；遷移"
  },
  "hibernate": {
    "pos": "v.",
    "en_def": "to sleep through the whole winter",
    "cn_def": "冬眠"
  },
  "hibernation": {
    "pos": "n.",
    "en_def": "a long sleep that some animals have in winter",
    "cn_def": "冬眠"
  },
  "ecologist": {
    "pos": "n.",
    "en_def": "a scientist who studies living things and their environment",
    "cn_def": "生態學家"
  },
  "terrain": {
    "pos": "n.",
    "en_def": "an area of land and its physical features",
    "cn_def": "地形；地勢"
  },
  "vegetation": {
    "pos": "n.",
    "en_def": "plants in general, especially in one area",
    "cn_def": "植被；植物"
  },
  "waterhole": {
    "pos": "n.",
    "en_def": "a pool of water where wild animals go to drink",
    "cn_def": "水坑；飲水處"
  },
  "marine": {
    "pos": "adj.",
    "en_def": "related to the sea and the animals in it",
    "cn_def": "海洋的"
  },
  "scavenger": {
    "pos": "n.",
    "en_def": "an animal that eats dead animals it did not kill",
    "cn_def": "食腐動物"
  },
  "rehabilitation": {
    "pos": "n.",
    "en_def": "the process of helping an animal recover",
    "cn_def": "復健；康復治療"
  },
  "zookeeper": {
    "pos": "n.",
    "en_def": "a person who looks after animals in a zoo",
    "cn_def": "動物園管理員；保育員"
  },
  "seizure": {
    "pos": "n.",
    "en_def": "the act of taking illegal goods by force or law",
    "cn_def": "查獲；扣押"
  },
  "farmland": {
    "pos": "n.",
    "en_def": "land used for growing crops or keeping animals",
    "cn_def": "農地；農田"
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organisation that helps people or animals in need",
    "cn_def": "慈善機構"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned series of actions to achieve a goal",
    "cn_def": "運動；宣傳活動"
  },
  "species": {
    "pos": "n.",
    "en_def": "a group of animals or plants of the same kind",
    "cn_def": "物種"
  },
  "roadkill": {
    "pos": "n.",
    "en_def": "animals killed by cars on roads",
    "cn_def": "路殺"
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is or happens",
    "cn_def": "地點；場所"
  },
  "invasive": {
    "pos": "adj.",
    "en_def": "spreading quickly and harming the local plants or animals",
    "cn_def": "入侵的；外來入侵的"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的"
  },
  "coherent": {
    "pos": "adj.",
    "en_def": "clear, logical and easy to understand",
    "cn_def": "條理清晰的；連貫的"
  },
  "layer": {
    "pos": "n.",
    "en_def": "a level of something that lies over or under another",
    "cn_def": "層"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "a series of events in a particular order",
    "cn_def": "順序；一連串"
  },
  "route": {
    "pos": "n.",
    "en_def": "the way from one place to another",
    "cn_def": "路線"
  },
  "individual": {
    "pos": "n.",
    "en_def": "a single person or animal",
    "cn_def": "個體；個人"
  },
  "retaliation": {
    "pos": "n.",
    "en_def": "action taken to hurt someone who hurt you",
    "cn_def": "報復（行為）"
  },
  "grant": {
    "pos": "n.",
    "en_def": "money given by a government or group for a purpose",
    "cn_def": "補助金；獎助金"
  },
  "bulk": {
    "pos": "n.",
    "en_def": "the main or largest part of something",
    "cn_def": "大部分；主體"
  },
  "option": {
    "pos": "n.",
    "en_def": "a choice you can make",
    "cn_def": "選擇；選項"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone for a loss",
    "cn_def": "補償；賠償金"
  },
  "recovery": {
    "pos": "n.",
    "en_def": "the process of returning to a healthy state",
    "cn_def": "恢復；復原"
  },
  "customs": {
    "pos": "n.",
    "en_def": "the place at a border where officers check goods",
    "cn_def": "海關"
  },
  "poaching": {
    "pos": "n.",
    "en_def": "the illegal hunting of animals",
    "cn_def": "盜獵（行為）"
  },
  "wilderness": {
    "pos": "n.",
    "en_def": "a wild natural area where no people live",
    "cn_def": "荒野"
  },
  "pollutant": {
    "pos": "n.",
    "en_def": "a substance that makes air, water or land dirty",
    "cn_def": "汙染物"
  },
  "herder": {
    "pos": "n.",
    "en_def": "a person who looks after a group of animals",
    "cn_def": "牧民；牧人"
  },
  "ignorance": {
    "pos": "n.",
    "en_def": "lack of knowledge about something",
    "cn_def": "無知；不了解"
  },
  "conservationist": {
    "pos": "n.",
    "en_def": "a person who works to protect nature",
    "cn_def": "保育人士"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who hunts animals illegally",
    "cn_def": "盜獵者"
  },
  "overfishing": {
    "pos": "n.",
    "en_def": "catching too many fish so their number falls",
    "cn_def": "過度捕撈"
  },
  "carnivore": {
    "pos": "n.",
    "en_def": "an animal that eats meat",
    "cn_def": "肉食性動物"
  },
  "contamination": {
    "pos": "n.",
    "en_def": "the process of making something dirty or harmful",
    "cn_def": "汙染"
  },
  "enclosure": {
    "pos": "n.",
    "en_def": "an area with a fence or wall where animals are kept",
    "cn_def": "圍欄；圈養區"
  },
  "issue": {
    "pos": "n.",
    "en_def": "an important problem that people discuss",
    "cn_def": "議題；問題"
  },
  "rancher": {
    "pos": "n.",
    "en_def": "a person who owns or runs a large cattle farm",
    "cn_def": "牧場主人"
  },
  "rhino": {
    "pos": "n.",
    "en_def": "a large heavy animal with one or two horns on its nose",
    "cn_def": "犀牛"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals living in a particular area",
    "cn_def": "動物群；某地區的動物"
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the act of damaging something so badly it cannot be used",
    "cn_def": "破壞；毀滅"
  },
  "livelihood": {
    "pos": "n.",
    "en_def": "the way someone earns money to live",
    "cn_def": "生計"
  },
  "scheme": {
    "pos": "n.",
    "en_def": "an official plan or programme",
    "cn_def": "計畫；方案"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "animals and plants that live in nature",
    "cn_def": "野生動植物"
  },
  "phase": {
    "pos": "n.",
    "en_def": "a stage in a process",
    "cn_def": "階段"
  },
  "subsidy": {
    "pos": "n.",
    "en_def": "money a government pays to help reduce costs",
    "cn_def": "補貼；津貼"
  },
  "penalty": {
    "pos": "n.",
    "en_def": "a punishment for breaking a law",
    "cn_def": "處罰；刑罰"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "something that represents an idea",
    "cn_def": "象徵；標誌"
  },
  "logic": {
    "pos": "n.",
    "en_def": "a sensible way of thinking",
    "cn_def": "邏輯；道理"
  },
  "erosion": {
    "pos": "n.",
    "en_def": "the slow wearing away of land by water or wind",
    "cn_def": "侵蝕"
  },
  "protection": {
    "pos": "n.",
    "en_def": "the act of keeping someone or something safe",
    "cn_def": "保護"
  },
  "encounter": {
    "pos": "n.",
    "en_def": "a meeting that is unexpected",
    "cn_def": "偶遇；邂逅"
  },
  "fragmentation": {
    "pos": "n.",
    "en_def": "the breaking of a large area into small separate parts",
    "cn_def": "破碎化；分割"
  },
  "treaty": {
    "pos": "n.",
    "en_def": "a formal written agreement between countries",
    "cn_def": "條約"
  },
  "wildfire": {
    "pos": "n.",
    "en_def": "a large fire that spreads quickly in forests",
    "cn_def": "野火；森林大火"
  },
  "donation": {
    "pos": "n.",
    "en_def": "money or goods given to help a group",
    "cn_def": "捐款；捐贈"
  },
  "cub": {
    "pos": "n.",
    "en_def": "a young bear, lion, tiger or fox",
    "cn_def": "幼獸（熊、獅、虎等）"
  },
  "motive": {
    "pos": "n.",
    "en_def": "the reason why someone does something",
    "cn_def": "動機"
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build something",
    "cn_def": "建造；建構"
  },
  "inhibit": {
    "pos": "v.",
    "en_def": "to slow down or stop something",
    "cn_def": "抑制；阻礙"
  },
  "smuggle": {
    "pos": "v.",
    "en_def": "to take things secretly and illegally into a country",
    "cn_def": "走私"
  },
  "rehabilitate": {
    "pos": "v.",
    "en_def": "to help an injured animal become healthy again",
    "cn_def": "使康復；使復原"
  },
  "forage": {
    "pos": "v.",
    "en_def": "to search for food",
    "cn_def": "覓食"
  },
  "conserve": {
    "pos": "v.",
    "en_def": "to protect something from being damaged or lost",
    "cn_def": "保護；保存"
  },
  "instinct": {
    "pos": "n.",
    "en_def": "a natural behaviour an animal does without learning",
    "cn_def": "本能"
  },
  "trap": {
    "pos": "n.",
    "en_def": "a device for catching animals",
    "cn_def": "陷阱；捕獸器"
  },
  "trafficking": {
    "pos": "n.",
    "en_def": "the illegal buying and selling of goods or animals",
    "cn_def": "非法交易；販運"
  },
  "substitute": {
    "pos": "n.",
    "en_def": "something used instead of another thing",
    "cn_def": "替代品"
  },
  "notion": {
    "pos": "n.",
    "en_def": "an idea or belief",
    "cn_def": "觀念；概念"
  },
  "formula": {
    "pos": "n.",
    "en_def": "a special mix of ingredients",
    "cn_def": "配方"
  },
  "camouflage": {
    "pos": "n.",
    "en_def": "colours or patterns that help an animal hide",
    "cn_def": "偽裝；保護色"
  },
  "organism": {
    "pos": "n.",
    "en_def": "a living thing, such as a plant or animal",
    "cn_def": "生物；有機體"
  },
  "ivory": {
    "pos": "n.",
    "en_def": "the hard white material from elephant tusks",
    "cn_def": "象牙"
  },
  "marsupial": {
    "pos": "n.",
    "en_def": "an animal that carries its baby in a pouch",
    "cn_def": "有袋動物"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "always changing and full of energy",
    "cn_def": "動態的；充滿活力的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的；能夠的"
  },
  "adjacent": {
    "pos": "adj.",
    "en_def": "next to or near something",
    "cn_def": "鄰近的；毗連的"
  },
  "landowner": {
    "pos": "n.",
    "en_def": "a person who owns land",
    "cn_def": "地主"
  }
};

const EXTRA_GLOSSES = {};
