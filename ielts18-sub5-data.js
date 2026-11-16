// Topic 18 Subunit 5 Quiz Data: Wetlands, Rivers & Bogs 濕地、河流與沼澤
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S05 - Wetlands, Rivers & Bogs 濕地、河流與沼澤",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "marsh",
    "pos": "n.",
    "cn_def": "沼澤;濕地",
    "en_def": "soft wet land with grass and reeds",
    "sentence": "Many birds stop at the {{BLANK}} near the river mouth in winter, because it gives them food and a safe place to rest.",
    "cn": "冬天時許多鳥會停留在河口附近的沼澤,因為那裡提供牠們食物和安全的休息處。"
  },
  {
    "word": "swamp",
    "pos": "n.",
    "cn_def": "沼澤(有樹)",
    "en_def": "wet land with trees, often covered with water",
    "sentence": "Alligators live in the {{BLANK}}, so visitors must stay on the wooden path and never put their hands in the water.",
    "cn": "鱷魚住在沼澤裡,所以遊客必須待在木棧道上,絕對不能把手伸進水裡。"
  },
  {
    "word": "bog",
    "pos": "n.",
    "cn_def": "泥炭沼",
    "en_def": "soft wet ground made of dead plants",
    "sentence": "The hikers walked into a {{BLANK}} by mistake, and their boots sank deep into the wet ground.",
    "cn": "登山客不小心走進了泥炭沼,他們的靴子深深陷進濕軟的地面。"
  },
  {
    "word": "fen",
    "pos": "n.",
    "cn_def": "鹼沼;低地沼澤",
    "en_def": "low wet land fed by groundwater",
    "sentence": "Farmers once drained the {{BLANK}} to grow crops, but now some of the land is being returned to nature.",
    "cn": "農夫曾經把低地沼澤的水排乾來種植作物,但現在部分土地正被歸還給自然。"
  },
  {
    "word": "peat",
    "pos": "n.",
    "cn_def": "泥炭",
    "en_def": "dark soil made of dead plants that stores carbon",
    "sentence": "In the past people burned {{BLANK}} for heat, but now we know it stores huge amounts of carbon.",
    "cn": "過去人們燃燒泥炭取暖,但現在我們知道它儲存了大量的碳。"
  },
  {
    "word": "peatland",
    "pos": "n.",
    "cn_def": "泥炭地",
    "en_def": "an area of land covered with peat",
    "sentence": "Damaged {{BLANK}} can release carbon into the air, so countries are now trying to make them wet again.",
    "cn": "受損的泥炭地會把碳釋放到空氣中,所以各國現在正努力讓它們重新變濕。"
  },
  {
    "word": "reed",
    "pos": "n.",
    "cn_def": "蘆葦",
    "en_def": "a tall grass that grows in or near water",
    "sentence": "Tall {{BLANK}} grow along the edge of the lake, and small birds build their nests among them.",
    "cn": "高高的蘆葦沿著湖邊生長,小鳥在其中築巢。"
  },
  {
    "word": "reed bed",
    "pos": "n.phr.",
    "cn_def": "蘆葦床;蘆葦叢",
    "en_def": "an area of water full of reeds",
    "sentence": "The town built a {{BLANK}} to clean its waste water, so the river is now much cleaner than before.",
    "cn": "鎮上建造了一片蘆葦床來淨化廢水,所以現在河水比以前乾淨得多。"
  },
  {
    "word": "water lily",
    "pos": "n.phr.",
    "cn_def": "睡蓮",
    "en_def": "a plant with large flat leaves that float on water",
    "sentence": "A frog was sitting on a {{BLANK}} in the pond, and it jumped into the water when we came closer.",
    "cn": "一隻青蛙坐在池塘裡的睡蓮葉上,我們走近時牠就跳進水裡。"
  },
  {
    "word": "lotus",
    "pos": "n.",
    "cn_def": "蓮花",
    "en_def": "a water plant with large pink or white flowers",
    "sentence": "Every summer the {{BLANK}} pond in Baihe is full of pink flowers, and many families visit to take photos.",
    "cn": "每年夏天白河的蓮花池開滿粉紅色的花,許多家庭前去拍照。"
  },
  {
    "word": "duckweed",
    "pos": "n.",
    "cn_def": "浮萍",
    "en_def": "a tiny green plant that floats on still water",
    "sentence": "The pond was covered in {{BLANK}}, so it looked like a green carpet, but the fish underneath had less light.",
    "cn": "池塘被浮萍覆蓋,看起來像一張綠色的地毯,但下面的魚得到的光線變少了。"
  },
  {
    "word": "riverbank",
    "pos": "n.",
    "cn_def": "河岸",
    "en_def": "the land along the side of a river",
    "sentence": "We had a picnic on the {{BLANK}}, and the children watched the ducks swimming past.",
    "cn": "我們在河岸上野餐,孩子們看著鴨子游過。"
  },
  {
    "word": "stream",
    "pos": "n.",
    "cn_def": "小溪",
    "en_def": "a small narrow river",
    "sentence": "A clear {{BLANK}} runs through the valley, and the villagers use its water for their tea gardens.",
    "cn": "一條清澈的小溪流過山谷,村民用它的水灌溉茶園。"
  },
  {
    "word": "creek",
    "pos": "n.",
    "cn_def": "溪流;小河",
    "en_def": "a small river or stream",
    "sentence": "The children like to catch small fish in the {{BLANK}} behind their grandparents' farm, but they always put them back.",
    "cn": "孩子們喜歡在祖父母農場後面的小溪抓小魚,但他們總是把魚放回去。"
  },
  {
    "word": "pond",
    "pos": "n.",
    "cn_def": "池塘",
    "en_def": "a small area of still water",
    "sentence": "The school dug a small {{BLANK}} in the garden, and soon frogs and dragonflies came to live there.",
    "cn": "學校在花園裡挖了一個小池塘,很快青蛙和蜻蜓就來這裡定居了。"
  },
  {
    "word": "mudflat",
    "pos": "n.",
    "cn_def": "泥灘;潮間灘地",
    "en_def": "flat muddy land covered by the sea at high tide",
    "sentence": "When the tide goes out, the {{BLANK}} appear, and crabs come out to feed on the wet mud.",
    "cn": "退潮時泥灘便露出來,螃蟹會出來在濕泥上覓食。"
  },
  {
    "word": "waterfowl",
    "pos": "n.",
    "cn_def": "水禽",
    "en_def": "birds such as ducks and geese that live on water",
    "sentence": "Thousands of {{BLANK}} spend the winter at the wetland, so birdwatchers come from all over the country.",
    "cn": "數千隻水禽在這片濕地過冬,所以賞鳥人士從全國各地前來。"
  },
  {
    "word": "heron",
    "pos": "n.",
    "cn_def": "鷺;蒼鷺",
    "en_def": "a tall grey bird with long legs that catches fish",
    "sentence": "A grey {{BLANK}} stood very still in the shallow water, and suddenly it caught a fish with its long beak.",
    "cn": "一隻灰色的蒼鷺靜靜地站在淺水中,突然用牠長長的嘴抓到一條魚。"
  },
  {
    "word": "egret",
    "pos": "n.",
    "cn_def": "白鷺",
    "en_def": "a white bird with long legs that lives near water",
    "sentence": "White {{BLANK}} often follow farmers in the rice fields, because the tractors disturb insects that the birds can eat.",
    "cn": "白鷺常跟著稻田裡的農夫,因為拖拉機會驚擾昆蟲,鳥兒就能吃到牠們。"
  },
  {
    "word": "frog",
    "pos": "n.",
    "cn_def": "青蛙",
    "en_def": "a small green animal with long back legs that jumps",
    "sentence": "After the heavy rain, hundreds of {{BLANK}} started calling in the rice fields, so it was hard to fall asleep.",
    "cn": "大雨過後,數百隻青蛙在稻田裡鳴叫,所以很難入睡。"
  },
  {
    "word": "dragonfly",
    "pos": "n.",
    "cn_def": "蜻蜓",
    "en_def": "an insect with a long body and four thin wings",
    "sentence": "A blue {{BLANK}} flew over the pond, and my little sister tried to catch it with her net.",
    "cn": "一隻藍色的蜻蜓飛過池塘,我妹妹想用網子抓住牠。"
  },
  {
    "word": "eel",
    "pos": "n.",
    "cn_def": "鰻魚",
    "en_def": "a long thin fish that looks like a snake",
    "sentence": "Young {{BLANK}} swim up the river from the sea, but dams make it difficult for them to reach the upper streams.",
    "cn": "幼鰻從海洋游上河流,但水壩讓牠們難以到達上游的溪流。"
  },
  {
    "word": "otter",
    "pos": "n.",
    "cn_def": "水獺",
    "en_def": "a small animal with brown fur that swims and eats fish",
    "sentence": "Kinmen is one of the few places where wild {{BLANK}} still live, so local people are working hard to protect the ponds.",
    "cn": "金門是少數仍有野生水獺生存的地方之一,所以當地居民正努力保護池塘。"
  },
  {
    "word": "beaver",
    "pos": "n.",
    "cn_def": "河狸",
    "en_def": "an animal with a flat tail that builds dams in rivers",
    "sentence": "{{BLANK}} were brought back to some rivers in Britain, and their dams have helped to reduce flooding in nearby towns.",
    "cn": "英國有些河流重新引入了河狸,而牠們築的水壩已幫助減少附近城鎮的洪水。"
  },
  {
    "word": "wading bird",
    "pos": "n.phr.",
    "cn_def": "涉禽",
    "en_def": "a bird with long legs that walks in shallow water",
    "sentence": "Many {{BLANK}} feed on the mudflats, and their long legs keep their bodies dry while they search for food.",
    "cn": "許多涉禽在泥灘上覓食,牠們的長腿讓身體在找食物時保持乾燥。"
  },
  {
    "word": "water purification",
    "pos": "n.phr.",
    "cn_def": "水質淨化",
    "en_def": "the process of making water clean",
    "sentence": "Wetland plants help with {{BLANK}}, because their roots trap dirt and take in harmful chemicals.",
    "cn": "濕地植物有助於水質淨化,因為它們的根會攔住髒污並吸收有害化學物質。"
  },
  {
    "word": "natural filter",
    "pos": "n.phr.",
    "cn_def": "天然過濾器",
    "en_def": "something in nature that removes dirt from water or air",
    "sentence": "A wetland works like a {{BLANK}}, so the water that leaves it is cleaner than the water that enters.",
    "cn": "濕地就像一個天然過濾器,所以流出的水比流進的水更乾淨。"
  },
  {
    "word": "flood control",
    "pos": "n.phr.",
    "cn_def": "防洪",
    "en_def": "ways of preventing or reducing floods",
    "sentence": "Wetlands are useful for {{BLANK}}, because they soak up rainwater like a sponge and release it slowly.",
    "cn": "濕地對防洪很有用,因為它們像海綿一樣吸收雨水,再慢慢釋放出來。"
  },
  {
    "word": "Ramsar Convention",
    "pos": "n.phr.",
    "cn_def": "拉姆薩公約(國際濕地公約)",
    "en_def": "an international agreement to protect important wetlands",
    "sentence": "The {{BLANK}} was signed in 1971, and more than one hundred and seventy countries have now joined it.",
    "cn": "拉姆薩公約於1971年簽署,現在已有一百七十多個國家加入。"
  },
  {
    "word": "land reclamation",
    "pos": "n.phr.",
    "cn_def": "填海造地;土地開墾",
    "en_def": "making new land from sea or wetland",
    "sentence": "Large areas of coastal wetland were lost because of {{BLANK}}, and the new land was used for factories.",
    "cn": "大片沿海濕地因為填海造地而消失,新的土地被用來蓋工廠。"
  },
  {
    "word": "silt",
    "pos": "n.",
    "cn_def": "淤泥",
    "en_def": "fine sand and mud carried by a river",
    "sentence": "The river carries {{BLANK}} down from the mountains, and it slowly builds up new land at the river mouth.",
    "cn": "河流把淤泥從山上帶下來,並在河口慢慢堆積出新的土地。"
  },
  {
    "word": "mud",
    "pos": "n.",
    "cn_def": "泥巴",
    "en_def": "wet, soft earth",
    "sentence": "The children played in the {{BLANK}} at the wetland park, so their parents had to wash their clothes twice.",
    "cn": "孩子們在濕地公園玩泥巴,所以爸媽得把他們的衣服洗兩次。"
  },
  {
    "word": "murky",
    "pos": "adj.",
    "cn_def": "混濁的",
    "en_def": "dark and dirty, not clear",
    "sentence": "The water in the pond became {{BLANK}} after the storm, so we could not see the fish any more.",
    "cn": "暴風雨後池塘的水變得混濁,所以我們再也看不到魚了。"
  },
  {
    "word": "brackish",
    "pos": "adj.",
    "cn_def": "半鹹的;鹹淡水的",
    "en_def": "slightly salty, a mix of river water and sea water",
    "sentence": "Mangroves grow in {{BLANK}} water near the coast, and they can survive where most other trees would die.",
    "cn": "紅樹林生長在海岸附近的鹹淡水中,它們能在大多數其他樹會死亡的地方存活。"
  },
  {
    "word": "freshwater",
    "pos": "adj.",
    "cn_def": "淡水的",
    "en_def": "living in or relating to water that is not salty",
    "sentence": "Many {{BLANK}} fish are in danger because rivers are polluted and dams block their way.",
    "cn": "許多淡水魚處於危險中,因為河流受到污染,水壩又擋住了牠們的去路。"
  },
  {
    "word": "water level",
    "pos": "n.phr.",
    "cn_def": "水位",
    "en_def": "the height of the surface of water",
    "sentence": "The {{BLANK}} in the lake dropped during the dry season, so the boats could not reach the old pier.",
    "cn": "乾季時湖的水位下降,所以船隻無法到達舊碼頭。"
  },
  {
    "word": "boardwalk",
    "pos": "n.",
    "cn_def": "木棧道",
    "en_def": "a path made of wooden boards above wet ground",
    "sentence": "Visitors walk along a wooden {{BLANK}} through the mangroves, so they can see the crabs without damaging the mud.",
    "cn": "遊客沿著穿越紅樹林的木棧道行走,所以他們能看到螃蟹而不會破壞泥灘。"
  },
  {
    "word": "birdwatching",
    "pos": "n.",
    "cn_def": "賞鳥",
    "en_def": "the hobby of watching wild birds",
    "sentence": "My father took up {{BLANK}} after he retired, and now he gets up at five o'clock to visit the wetland.",
    "cn": "我爸爸退休後開始賞鳥,現在他早上五點就起床去濕地。"
  },
  {
    "word": "binoculars",
    "pos": "n.",
    "cn_def": "雙筒望遠鏡",
    "en_def": "a device with two lenses for seeing things far away",
    "sentence": "I forgot my {{BLANK}} at home, so I could not see the rare birds on the other side of the lake.",
    "cn": "我把雙筒望遠鏡忘在家裡了,所以看不到湖對岸的稀有鳥類。"
  },
  {
    "word": "bird hide",
    "pos": "n.phr.",
    "cn_def": "賞鳥屋",
    "en_def": "a small hut where people watch birds without being seen",
    "sentence": "We sat quietly in the {{BLANK}} for an hour, and finally a group of spoonbills landed in front of us.",
    "cn": "我們在賞鳥屋裡安靜地坐了一個小時,終於有一群琵鷺降落在我們面前。"
  }
];

const MCQS = [
  {
    "q": "Many birds stop at the _____ near the river mouth in winter, because it gives them food and a safe place to rest.",
    "options": [
      "overgrazing",
      "marsh",
      "predation",
      "photosynthesis"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Alligators live in the _____, so visitors must stay on the wooden path and never put their hands in the water.",
    "options": [
      "agroforestry",
      "firebreak",
      "redistribution",
      "swamp"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The hikers walked into a _____ by mistake, and their boots sank deep into the wet ground.",
    "options": [
      "twig",
      "assemblage",
      "bog",
      "reconciliation"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Farmers once drained the _____ to grow crops, but now some of the land is being returned to nature.",
    "options": [
      "fen",
      "maturity",
      "inhibitor",
      "redwood"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "In the past people burned _____ for heat, but now we know it stores huge amounts of carbon.",
    "options": [
      "redistribution",
      "aeration",
      "peat",
      "foliage"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Damaged _____ can release carbon into the air, so countries are now trying to make them wet again.",
    "options": [
      "herbarium",
      "lumber",
      "softwood",
      "peatland"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Tall _____ grow along the edge of the lake, and small birds build their nests among them.",
    "options": [
      "contraction",
      "reed",
      "treeline",
      "endangerment"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The town built a _____ to clean its waste water, so the river is now much cleaner than before.",
    "options": [
      "reed bed",
      "old-growth forest",
      "nutrient cycle",
      "botanical garden"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "A frog was sitting on a _____ in the pond, and it jumped into the water when we came closer.",
    "options": [
      "cloud forest",
      "flowering plant",
      "Dutch elm disease",
      "water lily"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Every summer the _____ pond in Baihe is full of pink flowers, and many families visit to take photos.",
    "options": [
      "characterisation",
      "jungle",
      "lotus",
      "lumber"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The pond was covered in _____, so it looked like a green carpet, but the fish underneath had less light.",
    "options": [
      "pistil",
      "duckweed",
      "pertinence",
      "leaf"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "We had a picnic on the _____, and the children watched the ducks swimming past.",
    "options": [
      "riverbank",
      "leaf",
      "forestry",
      "multiplicity"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "A clear _____ runs through the valley, and the villagers use its water for their tea gardens.",
    "options": [
      "insistence",
      "elm",
      "endangerment",
      "stream"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The children like to catch small fish in the _____ behind their grandparents' farm, but they always put them back.",
    "options": [
      "maple",
      "quarantine",
      "creek",
      "grove"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The school dug a small _____ in the garden, and soon frogs and dragonflies came to live there.",
    "options": [
      "ember",
      "pond",
      "parasite",
      "grove"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "When the tide goes out, the _____ appear, and crabs come out to feed on the wet mud.",
    "options": [
      "mudflat",
      "quantification",
      "grove",
      "alleviation"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Thousands of _____ spend the winter at the wetland, so birdwatchers come from all over the country.",
    "options": [
      "bud",
      "multiplicity",
      "waterfowl",
      "compartment"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "A grey _____ stood very still in the shallow water, and suddenly it caught a fish with its long beak.",
    "options": [
      "distinctiveness",
      "demarcation",
      "articulation",
      "heron"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "White _____ often follow farmers in the rice fields, because the tractors disturb insects that the birds can eat.",
    "options": [
      "willow",
      "egret",
      "twig",
      "multiplicity"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "After the heavy rain, hundreds of _____ started calling in the rice fields, so it was hard to fall asleep.",
    "options": [
      "frog",
      "owl",
      "stalk",
      "treeline"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "A blue _____ flew over the pond, and my little sister tried to catch it with her net.",
    "options": [
      "prioritisation",
      "dragonfly",
      "phototropism",
      "colonisation"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Young _____ swim up the river from the sea, but dams make it difficult for them to reach the upper streams.",
    "options": [
      "sawmill",
      "subsidiary",
      "leaf",
      "eel"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Kinmen is one of the few places where wild _____ still live, so local people are working hard to protect the ponds.",
    "options": [
      "otter",
      "articulation",
      "petal",
      "deadwood"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "_____ were brought back to some rivers in Britain, and their dams have helped to reduce flooding in nearby towns.",
    "options": [
      "understorey",
      "insistence",
      "beaver",
      "redistribution"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Many _____ feed on the mudflats, and their long legs keep their bodies dry while they search for food.",
    "options": [
      "canopy gap",
      "a thorn in one's side",
      "habitat corridor",
      "wading bird"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Wetland plants help with _____, because their roots trap dirt and take in harmful chemicals.",
    "options": [
      "ecological succession",
      "wood pulp",
      "water purification",
      "carbon sequestration"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "A wetland works like a _____, so the water that leaves it is cleaner than the water that enters.",
    "options": [
      "natural filter",
      "nutrient cycle",
      "carbon sequestration",
      "old-growth forest"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Wetlands are useful for _____, because they soak up rainwater like a sponge and release it slowly.",
    "options": [
      "palm tree",
      "flood control",
      "a thorn in one's side",
      "root hair"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The _____ was signed in 1971, and more than one hundred and seventy countries have now joined it.",
    "options": [
      "protected area",
      "tree planting",
      "wood pulp",
      "Ramsar Convention"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Large areas of coastal wetland were lost because of _____, and the new land was used for factories.",
    "options": [
      "canopy gap",
      "nutrient cycle",
      "land reclamation",
      "the root cause"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The river carries _____ down from the mountains, and it slowly builds up new land at the river mouth.",
    "options": [
      "biomass",
      "silt",
      "chloroplast",
      "homogeneity"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The children played in the _____ at the wetland park, so their parents had to wash their clothes twice.",
    "options": [
      "mud",
      "mediator",
      "ivy",
      "subdivision"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The water in the pond became _____ after the storm, so we could not see the fish any more.",
    "options": [
      "dissimilar",
      "hydrological",
      "enforceable",
      "murky"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Mangroves grow in _____ water near the coast, and they can survive where most other trees would die.",
    "options": [
      "divergent",
      "brackish",
      "elemental",
      "evergreen"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Many _____ fish are in danger because rivers are polluted and dams block their way.",
    "options": [
      "differential",
      "perceptible",
      "freshwater",
      "hierarchical"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The _____ in the lake dropped during the dry season, so the boats could not reach the old pier.",
    "options": [
      "water level",
      "growth ring",
      "bark beetle",
      "protected area"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "Visitors walk along a wooden _____ through the mangroves, so they can see the crabs without damaging the mud.",
    "options": [
      "eligibility",
      "assemblage",
      "sparsity",
      "boardwalk"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "My father took up _____ after he retired, and now he gets up at five o'clock to visit the wetland.",
    "options": [
      "birdwatching",
      "aphid",
      "plausibility",
      "predation"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "I forgot my _____ at home, so I could not see the rare birds on the other side of the lake.",
    "options": [
      "contributor",
      "binoculars",
      "unanimity",
      "mildew"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "We sat quietly in the _____ for an hour, and finally a group of spoonbills landed in front of us.",
    "options": [
      "the root cause",
      "ash dieback",
      "bird hide",
      "habitat corridor"
    ],
    "answer": 2,
    "vocabIndex": 39
  }
];

const LOOKUP = {
  "marsh": {
    "pos": "n.",
    "en_def": "soft wet land with grass and reeds",
    "cn_def": "沼澤;濕地"
  },
  "swamp": {
    "pos": "n.",
    "en_def": "wet land with trees, often covered with water",
    "cn_def": "沼澤(有樹)"
  },
  "bog": {
    "pos": "n.",
    "en_def": "soft wet ground made of dead plants",
    "cn_def": "泥炭沼"
  },
  "fen": {
    "pos": "n.",
    "en_def": "low wet land fed by groundwater",
    "cn_def": "鹼沼;低地沼澤"
  },
  "peat": {
    "pos": "n.",
    "en_def": "dark soil made of dead plants that stores carbon",
    "cn_def": "泥炭"
  },
  "peatland": {
    "pos": "n.",
    "en_def": "an area of land covered with peat",
    "cn_def": "泥炭地"
  },
  "reed": {
    "pos": "n.",
    "en_def": "a tall grass that grows in or near water",
    "cn_def": "蘆葦"
  },
  "reed bed": {
    "pos": "n.phr.",
    "en_def": "an area of water full of reeds",
    "cn_def": "蘆葦床;蘆葦叢"
  },
  "water lily": {
    "pos": "n.phr.",
    "en_def": "a plant with large flat leaves that float on water",
    "cn_def": "睡蓮"
  },
  "lotus": {
    "pos": "n.",
    "en_def": "a water plant with large pink or white flowers",
    "cn_def": "蓮花"
  },
  "duckweed": {
    "pos": "n.",
    "en_def": "a tiny green plant that floats on still water",
    "cn_def": "浮萍"
  },
  "riverbank": {
    "pos": "n.",
    "en_def": "the land along the side of a river",
    "cn_def": "河岸"
  },
  "stream": {
    "pos": "n.",
    "en_def": "a small narrow river",
    "cn_def": "小溪"
  },
  "creek": {
    "pos": "n.",
    "en_def": "a small river or stream",
    "cn_def": "溪流;小河"
  },
  "pond": {
    "pos": "n.",
    "en_def": "a small area of still water",
    "cn_def": "池塘"
  },
  "mudflat": {
    "pos": "n.",
    "en_def": "flat muddy land covered by the sea at high tide",
    "cn_def": "泥灘;潮間灘地"
  },
  "waterfowl": {
    "pos": "n.",
    "en_def": "birds such as ducks and geese that live on water",
    "cn_def": "水禽"
  },
  "heron": {
    "pos": "n.",
    "en_def": "a tall grey bird with long legs that catches fish",
    "cn_def": "鷺;蒼鷺"
  },
  "egret": {
    "pos": "n.",
    "en_def": "a white bird with long legs that lives near water",
    "cn_def": "白鷺"
  },
  "frog": {
    "pos": "n.",
    "en_def": "a small green animal with long back legs that jumps",
    "cn_def": "青蛙"
  },
  "dragonfly": {
    "pos": "n.",
    "en_def": "an insect with a long body and four thin wings",
    "cn_def": "蜻蜓"
  },
  "eel": {
    "pos": "n.",
    "en_def": "a long thin fish that looks like a snake",
    "cn_def": "鰻魚"
  },
  "otter": {
    "pos": "n.",
    "en_def": "a small animal with brown fur that swims and eats fish",
    "cn_def": "水獺"
  },
  "beaver": {
    "pos": "n.",
    "en_def": "an animal with a flat tail that builds dams in rivers",
    "cn_def": "河狸"
  },
  "wading bird": {
    "pos": "n.phr.",
    "en_def": "a bird with long legs that walks in shallow water",
    "cn_def": "涉禽"
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
  "flood control": {
    "pos": "n.phr.",
    "en_def": "ways of preventing or reducing floods",
    "cn_def": "防洪"
  },
  "ramsar convention": {
    "pos": "n.phr.",
    "en_def": "an international agreement to protect important wetlands",
    "cn_def": "拉姆薩公約(國際濕地公約)"
  },
  "land reclamation": {
    "pos": "n.phr.",
    "en_def": "making new land from sea or wetland",
    "cn_def": "填海造地;土地開墾"
  },
  "silt": {
    "pos": "n.",
    "en_def": "fine sand and mud carried by a river",
    "cn_def": "淤泥"
  },
  "mud": {
    "pos": "n.",
    "en_def": "wet, soft earth",
    "cn_def": "泥巴"
  },
  "murky": {
    "pos": "adj.",
    "en_def": "dark and dirty, not clear",
    "cn_def": "混濁的"
  },
  "brackish": {
    "pos": "adj.",
    "en_def": "slightly salty, a mix of river water and sea water",
    "cn_def": "半鹹的;鹹淡水的"
  },
  "freshwater": {
    "pos": "adj.",
    "en_def": "living in or relating to water that is not salty",
    "cn_def": "淡水的"
  },
  "water level": {
    "pos": "n.phr.",
    "en_def": "the height of the surface of water",
    "cn_def": "水位"
  },
  "boardwalk": {
    "pos": "n.",
    "en_def": "a path made of wooden boards above wet ground",
    "cn_def": "木棧道"
  },
  "birdwatching": {
    "pos": "n.",
    "en_def": "the hobby of watching wild birds",
    "cn_def": "賞鳥"
  },
  "binoculars": {
    "pos": "n.",
    "en_def": "a device with two lenses for seeing things far away",
    "cn_def": "雙筒望遠鏡"
  },
  "bird hide": {
    "pos": "n.phr.",
    "en_def": "a small hut where people watch birds without being seen",
    "cn_def": "賞鳥屋"
  },
  "overgrazing": {
    "pos": "n.",
    "en_def": "when too many animals eat the plants in an area",
    "cn_def": "過度放牧"
  },
  "predation": {
    "pos": "n.",
    "en_def": "when animals kill and eat other animals",
    "cn_def": "捕食"
  },
  "photosynthesis": {
    "pos": "n.",
    "en_def": "how plants use sunlight to make food from air and water",
    "cn_def": "光合作用"
  },
  "agroforestry": {
    "pos": "n.",
    "en_def": "growing trees and crops together on the same farm",
    "cn_def": "農林混作"
  },
  "firebreak": {
    "pos": "n.",
    "en_def": "a strip of cleared land that stops a fire from spreading",
    "cn_def": "防火線"
  },
  "redistribution": {
    "pos": "n.",
    "en_def": "sharing something out again in a different way",
    "cn_def": "重新分配"
  },
  "twig": {
    "pos": "n.",
    "en_def": "a very small thin branch",
    "cn_def": "細枝"
  },
  "assemblage": {
    "pos": "n.",
    "en_def": "a group of things or living things found together",
    "cn_def": "集合;群集"
  },
  "reconciliation": {
    "pos": "n.",
    "en_def": "finding a way for two different needs to exist together",
    "cn_def": "調和;和解"
  },
  "maturity": {
    "pos": "n.",
    "en_def": "the state of being fully grown",
    "cn_def": "成熟"
  },
  "inhibitor": {
    "pos": "n.",
    "en_def": "something that slows down or stops a process",
    "cn_def": "抑制物;抑制劑"
  },
  "redwood": {
    "pos": "n.",
    "en_def": "a very tall tree that grows in California",
    "cn_def": "紅杉"
  },
  "aeration": {
    "pos": "n.",
    "en_def": "letting air into soil or water",
    "cn_def": "通氣;曝氣"
  },
  "foliage": {
    "pos": "n.",
    "en_def": "all the leaves of a plant or tree",
    "cn_def": "枝葉;葉子(總稱)"
  },
  "herbarium": {
    "pos": "n.",
    "en_def": "a collection of dried plants kept for study",
    "cn_def": "植物標本館"
  },
  "lumber": {
    "pos": "n.",
    "en_def": "wood that has been cut into boards",
    "cn_def": "木材;木料"
  },
  "softwood": {
    "pos": "n.",
    "en_def": "lighter wood from trees like pine",
    "cn_def": "軟木;針葉木材"
  },
  "contraction": {
    "pos": "n.",
    "en_def": "the process of becoming smaller",
    "cn_def": "縮小;收縮"
  },
  "treeline": {
    "pos": "n.",
    "en_def": "the height on a mountain above which trees cannot grow",
    "cn_def": "林木線"
  },
  "endangerment": {
    "pos": "n.",
    "en_def": "putting something in danger",
    "cn_def": "危害;瀕危狀態"
  },
  "old-growth forest": {
    "pos": "n.phr.",
    "en_def": "a very old forest that has never been cut down",
    "cn_def": "原始林;老齡林"
  },
  "nutrient cycle": {
    "pos": "n.phr.",
    "en_def": "the way nutrients move between soil, plants and animals",
    "cn_def": "養分循環"
  },
  "botanical garden": {
    "pos": "n.phr.",
    "en_def": "a park where many kinds of plants are grown for study",
    "cn_def": "植物園"
  },
  "cloud forest": {
    "pos": "n.phr.",
    "en_def": "a wet mountain forest often covered in cloud",
    "cn_def": "雲霧林"
  },
  "flowering plant": {
    "pos": "n.phr.",
    "en_def": "a plant that produces flowers and seeds",
    "cn_def": "開花植物"
  },
  "dutch elm disease": {
    "pos": "n.phr.",
    "en_def": "a deadly tree disease spread by beetles",
    "cn_def": "荷蘭榆樹病"
  },
  "characterisation": {
    "pos": "n.",
    "en_def": "describing the typical features of something",
    "cn_def": "特徵描述;特性分析"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest",
    "cn_def": "叢林"
  },
  "pistil": {
    "pos": "n.",
    "en_def": "the female part of a flower that receives pollen",
    "cn_def": "雌蕊"
  },
  "pertinence": {
    "pos": "n.",
    "en_def": "the quality of being relevant",
    "cn_def": "相關性;切題"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "a flat green part that grows from a stem or branch",
    "cn_def": "葉子"
  },
  "forestry": {
    "pos": "n.",
    "en_def": "the science and work of looking after forests",
    "cn_def": "林業"
  },
  "multiplicity": {
    "pos": "n.",
    "en_def": "a large number and variety",
    "cn_def": "多樣性;繁多"
  },
  "insistence": {
    "pos": "n.",
    "en_def": "demanding something firmly",
    "cn_def": "堅持"
  },
  "elm": {
    "pos": "n.",
    "en_def": "a tall tree once common in Europe",
    "cn_def": "榆樹"
  },
  "maple": {
    "pos": "n.",
    "en_def": "a tree whose leaves turn red in autumn",
    "cn_def": "楓樹"
  },
  "quarantine": {
    "pos": "n.",
    "en_def": "a period when plants or animals are kept apart to stop disease",
    "cn_def": "檢疫;隔離"
  },
  "grove": {
    "pos": "n.",
    "en_def": "a small group of trees",
    "cn_def": "小樹林"
  },
  "ember": {
    "pos": "n.",
    "en_def": "a small piece of burning wood from a fire",
    "cn_def": "餘燼;火星"
  },
  "parasite": {
    "pos": "n.",
    "en_def": "a living thing that lives on another and takes its food",
    "cn_def": "寄生物"
  },
  "quantification": {
    "pos": "n.",
    "en_def": "measuring something as a number",
    "cn_def": "量化"
  },
  "alleviation": {
    "pos": "n.",
    "en_def": "making a problem or pain less severe",
    "cn_def": "緩解;減輕"
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small part on a plant that will open into a leaf or flower",
    "cn_def": "芽;花苞"
  },
  "compartment": {
    "pos": "n.",
    "en_def": "one of the separate parts that something is divided into",
    "cn_def": "隔間;區塊"
  },
  "distinctiveness": {
    "pos": "n.",
    "en_def": "the quality of being special and different",
    "cn_def": "獨特性"
  },
  "demarcation": {
    "pos": "n.",
    "en_def": "a line or border that separates two areas",
    "cn_def": "劃界;分界"
  },
  "articulation": {
    "pos": "n.",
    "en_def": "the clear expression of an idea",
    "cn_def": "闡述;明確表達"
  },
  "willow": {
    "pos": "n.",
    "en_def": "a tree with long thin branches that often grows near water",
    "cn_def": "柳樹"
  },
  "owl": {
    "pos": "n.",
    "en_def": "a bird with large eyes that hunts at night",
    "cn_def": "貓頭鷹"
  },
  "stalk": {
    "pos": "n.",
    "en_def": "the main stem of a plant, or a thin stem holding a leaf or flower",
    "cn_def": "莖;梗"
  },
  "prioritisation": {
    "pos": "n.",
    "en_def": "deciding which things are most important",
    "cn_def": "排定優先順序"
  },
  "phototropism": {
    "pos": "n.",
    "en_def": "when a plant grows towards light",
    "cn_def": "向光性"
  },
  "colonisation": {
    "pos": "n.",
    "en_def": "when plants or animals move into and spread in a new area",
    "cn_def": "拓殖;移殖"
  },
  "sawmill": {
    "pos": "n.",
    "en_def": "a factory where logs are cut into boards",
    "cn_def": "鋸木廠"
  },
  "subsidiary": {
    "pos": "n.",
    "en_def": "a company owned by a larger company",
    "cn_def": "子公司"
  },
  "petal": {
    "pos": "n.",
    "en_def": "one of the coloured parts of a flower",
    "cn_def": "花瓣"
  },
  "deadwood": {
    "pos": "n.",
    "en_def": "dead trees and branches in a forest",
    "cn_def": "枯木"
  },
  "understorey": {
    "pos": "n.",
    "en_def": "the layer of small trees and plants under the tallest trees",
    "cn_def": "林下層"
  },
  "canopy gap": {
    "pos": "n.phr.",
    "en_def": "an opening in the top layer of a forest",
    "cn_def": "林冠孔隙"
  },
  "a thorn in one's side": {
    "pos": "n.phr.",
    "en_def": "a person or thing that keeps causing trouble",
    "cn_def": "眼中釘;心頭之患"
  },
  "habitat corridor": {
    "pos": "n.phr.",
    "en_def": "a strip of natural land that links two habitats",
    "cn_def": "棲地廊道"
  },
  "ecological succession": {
    "pos": "n.phr.",
    "en_def": "the slow change in plants and animals in a place over time",
    "cn_def": "生態演替"
  },
  "wood pulp": {
    "pos": "n.phr.",
    "en_def": "soft wet wood fibres used to make paper",
    "cn_def": "木漿"
  },
  "carbon sequestration": {
    "pos": "n.phr.",
    "en_def": "storing carbon from the air in plants, soil or rocks",
    "cn_def": "碳封存;固碳"
  },
  "palm tree": {
    "pos": "n.phr.",
    "en_def": "a tall tree with large leaves at the top and no branches",
    "cn_def": "棕櫚樹"
  },
  "root hair": {
    "pos": "n.phr.",
    "en_def": "very thin hairs on a root that take in water",
    "cn_def": "根毛"
  },
  "protected area": {
    "pos": "n.phr.",
    "en_def": "a place where nature is protected by law",
    "cn_def": "保護區"
  },
  "tree planting": {
    "pos": "n.phr.",
    "en_def": "the activity of putting young trees into the ground",
    "cn_def": "植樹"
  },
  "the root cause": {
    "pos": "n.phr.",
    "en_def": "the main reason behind a problem",
    "cn_def": "根本原因"
  },
  "biomass": {
    "pos": "n.",
    "en_def": "the total amount of living material in an area",
    "cn_def": "生物量"
  },
  "chloroplast": {
    "pos": "n.",
    "en_def": "a tiny part of a plant cell where photosynthesis happens",
    "cn_def": "葉綠體"
  },
  "homogeneity": {
    "pos": "n.",
    "en_def": "the quality of being all the same",
    "cn_def": "同質性;均一性"
  },
  "mediator": {
    "pos": "n.",
    "en_def": "a person who helps two sides reach an agreement",
    "cn_def": "調解人"
  },
  "ivy": {
    "pos": "n.",
    "en_def": "a climbing evergreen plant with dark shiny leaves",
    "cn_def": "常春藤"
  },
  "subdivision": {
    "pos": "n.",
    "en_def": "dividing something into smaller parts",
    "cn_def": "再劃分;細分"
  },
  "dissimilar": {
    "pos": "adj.",
    "en_def": "not the same; different",
    "cn_def": "不同的;不相似的"
  },
  "hydrological": {
    "pos": "adj.",
    "en_def": "relating to the movement of water on and under the land",
    "cn_def": "水文的"
  },
  "enforceable": {
    "pos": "adj.",
    "en_def": "able to be made to be obeyed",
    "cn_def": "可強制執行的"
  },
  "divergent": {
    "pos": "adj.",
    "en_def": "different and moving apart",
    "cn_def": "分歧的;相異的"
  },
  "elemental": {
    "pos": "adj.",
    "en_def": "basic and powerful, like the forces of nature",
    "cn_def": "基本的;自然力的"
  },
  "evergreen": {
    "pos": "adj.",
    "en_def": "keeping green leaves all year",
    "cn_def": "常綠的"
  },
  "differential": {
    "pos": "adj.",
    "en_def": "showing a difference between things",
    "cn_def": "差別的;不同的"
  },
  "perceptible": {
    "pos": "adj.",
    "en_def": "able to be noticed",
    "cn_def": "可察覺的"
  },
  "hierarchical": {
    "pos": "adj.",
    "en_def": "arranged in levels from high to low",
    "cn_def": "階層式的"
  },
  "growth ring": {
    "pos": "n.phr.",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "cn_def": "年輪"
  },
  "bark beetle": {
    "pos": "n.phr.",
    "en_def": "a small insect that lives under tree bark and can kill trees",
    "cn_def": "小蠹蟲;樹皮甲蟲"
  },
  "eligibility": {
    "pos": "n.",
    "en_def": "the right to do or receive something",
    "cn_def": "資格"
  },
  "sparsity": {
    "pos": "n.",
    "en_def": "the state of being thinly spread",
    "cn_def": "稀疏;稀少"
  },
  "aphid": {
    "pos": "n.",
    "en_def": "a very small insect that sucks juice from plants",
    "cn_def": "蚜蟲"
  },
  "plausibility": {
    "pos": "n.",
    "en_def": "how likely something is to be true",
    "cn_def": "合理性;可信度"
  },
  "contributor": {
    "pos": "n.",
    "en_def": "someone or something that helps cause something",
    "cn_def": "促成因素;貢獻者"
  },
  "unanimity": {
    "pos": "n.",
    "en_def": "complete agreement among everyone",
    "cn_def": "全體一致"
  },
  "mildew": {
    "pos": "n.",
    "en_def": "a thin white fungus on plants or damp things",
    "cn_def": "白粉病;黴"
  },
  "ash dieback": {
    "pos": "n.phr.",
    "en_def": "a fungal disease that kills ash trees",
    "cn_def": "白蠟樹枯梢病"
  }
};

const EXTRA_GLOSSES = {};
