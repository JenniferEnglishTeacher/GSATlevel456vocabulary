// Topic 8 Subunit 5 Quiz Data: Monuments, Architecture & Burial 古蹟、建築與墓葬
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S05 - Monuments, Architecture & Burial 古蹟、建築與墓葬",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "monument",
    "pos": "n.",
    "cn_def": "紀念碑;古蹟",
    "en_def": "a building or statue built to remember a person or event",
    "sentence": "Stonehenge is a famous {{BLANK}} in England, and thousands of visitors come to see the sunrise there in summer.",
    "cn": "巨石陣是英國一座著名的古蹟,夏天有數千名遊客來這裡看日出。"
  },
  {
    "word": "megalith",
    "pos": "n.",
    "cn_def": "巨石",
    "en_def": "a very large stone used in ancient monuments",
    "sentence": "Each {{BLANK}} weighs about twenty-five tons, so nobody is sure how ancient people moved them so far.",
    "cn": "每塊巨石重約二十五噸,所以沒有人確定古人是如何把它們搬運得那麼遠的。"
  },
  {
    "word": "pyramid",
    "pos": "n.",
    "cn_def": "金字塔",
    "en_def": "a huge stone building with four sloping sides",
    "sentence": "The Great {{BLANK}} took about twenty years to build, and it was the tallest building in the world for centuries.",
    "cn": "大金字塔花了大約二十年建造,並在好幾個世紀裡都是世界上最高的建築。"
  },
  {
    "word": "temple",
    "pos": "n.",
    "cn_def": "神廟;寺廟",
    "en_def": "a building used for religious worship",
    "sentence": "The {{BLANK}} stood on top of a hill, so the priests could see the whole valley from its steps.",
    "cn": "那座神廟矗立在山頂上,所以祭司們能從它的台階上看到整個山谷。"
  },
  {
    "word": "palace",
    "pos": "n.",
    "cn_def": "宮殿",
    "en_def": "a large, grand house of a king or queen",
    "sentence": "The king's {{BLANK}} had more than a thousand rooms, and some of them had beautiful paintings on the walls.",
    "cn": "國王的宮殿有一千多個房間,其中一些房間的牆上有美麗的壁畫。"
  },
  {
    "word": "citadel",
    "pos": "n.",
    "cn_def": "城堡;要塞",
    "en_def": "a strong fortress on high ground in or near a city",
    "sentence": "The people ran to the {{BLANK}} when the enemy arrived, because its thick walls could protect them.",
    "cn": "敵人來襲時,人們跑進要塞,因為它厚厚的城牆能保護他們。"
  },
  {
    "word": "rampart",
    "pos": "n.",
    "cn_def": "城牆;壁壘",
    "en_def": "a wide wall of earth or stone built for defence",
    "sentence": "The old town is surrounded by a stone {{BLANK}}, and today tourists can walk along the top of it.",
    "cn": "舊城區被一道石砌城牆環繞,今天遊客可以沿著城牆頂端散步。"
  },
  {
    "word": "amphitheatre",
    "pos": "n.",
    "cn_def": "圓形劇場",
    "en_def": "a round open building with rows of seats",
    "sentence": "The Roman {{BLANK}} could hold fifty thousand people, and they came to watch shows and contests.",
    "cn": "羅馬圓形劇場能容納五萬人,他們來這裡觀看表演和比賽。"
  },
  {
    "word": "aqueduct",
    "pos": "n.",
    "cn_def": "導水渠;高架渠",
    "en_def": "a bridge-like structure that carries water",
    "sentence": "The Romans built a long {{BLANK}} to bring fresh water into the city, and part of it still stands today.",
    "cn": "羅馬人建造了一條很長的導水渠把淡水引進城市,其中一部分至今仍然屹立。"
  },
  {
    "word": "pillar",
    "pos": "n.",
    "cn_def": "柱子",
    "en_def": "a tall column that supports a roof",
    "sentence": "Each {{BLANK}} in the temple is carved with flowers, and together they hold up the heavy stone roof.",
    "cn": "神廟裡的每根柱子都刻有花朵,它們一起支撐著沉重的石製屋頂。"
  },
  {
    "word": "arch",
    "pos": "n.",
    "cn_def": "拱門;拱形結構",
    "en_def": "a curved structure over an opening",
    "sentence": "The Romans used the {{BLANK}} to build strong bridges, because the curved shape spreads the weight evenly.",
    "cn": "羅馬人使用拱形結構建造堅固的橋樑,因為弧形能平均分散重量。"
  },
  {
    "word": "dome",
    "pos": "n.",
    "cn_def": "圓頂",
    "en_def": "a round roof shaped like half a ball",
    "sentence": "The huge {{BLANK}} of the building was the largest in the world for many years, and it still has no cracks.",
    "cn": "這棟建築巨大的圓頂多年來是世界上最大的,而且至今仍沒有裂縫。"
  },
  {
    "word": "masonry",
    "pos": "n.",
    "cn_def": "石造結構;磚石",
    "en_def": "the stones or bricks that make up a building",
    "sentence": "The {{BLANK}} of the old castle was so well made that the stones fit together without any cement.",
    "cn": "這座古城堡的石造結構做得非常好,石塊之間不用任何水泥就能緊密接合。"
  },
  {
    "word": "quarry",
    "pos": "n.",
    "cn_def": "採石場",
    "en_def": "a place where stone is dug out of the ground",
    "sentence": "The stones for the temple came from a {{BLANK}} twenty kilometres away, so workers had to drag them across the hills.",
    "cn": "建造神廟的石頭來自二十公里外的採石場,所以工人必須把它們拖過山丘。"
  },
  {
    "word": "boulder",
    "pos": "n.",
    "cn_def": "巨石;大圓石",
    "en_def": "a very large rock",
    "sentence": "A huge {{BLANK}} blocked the entrance to the cave, and it took ten men to roll it away.",
    "cn": "一塊巨大的大圓石擋住了洞穴的入口,需要十個人才能把它滾開。"
  },
  {
    "word": "slab",
    "pos": "n.",
    "cn_def": "石板;厚板",
    "en_def": "a thick, flat piece of stone",
    "sentence": "The tomb was covered by a heavy stone {{BLANK}}, so robbers could not open it easily.",
    "cn": "墳墓被一塊沉重的石板蓋住,所以盜墓者無法輕易打開它。"
  },
  {
    "word": "brick",
    "pos": "n.",
    "cn_def": "磚塊",
    "en_def": "a block of baked clay used for building",
    "sentence": "The ancient city was built with mud {{BLANK}}, and the workers dried them in the hot sun before using them.",
    "cn": "這座古城是用泥磚建造的,工人們在使用前先把磚塊放在烈日下曬乾。"
  },
  {
    "word": "mortar",
    "pos": "n.",
    "cn_def": "灰漿;砂漿",
    "en_def": "a mixture used to hold bricks or stones together",
    "sentence": "Roman {{BLANK}} was so strong that some of their walls are still standing after two thousand years.",
    "cn": "羅馬的灰漿非常堅固,所以他們的一些城牆在兩千年後仍然屹立。"
  },
  {
    "word": "tomb",
    "pos": "n.",
    "cn_def": "墳墓;陵墓",
    "en_def": "a large grave, often with a building over it",
    "sentence": "The {{BLANK}} of the king was hidden deep under the mountain, so it stayed safe from robbers for centuries.",
    "cn": "國王的陵墓深藏在山底下,所以好幾個世紀都沒有被盜墓者破壞。"
  },
  {
    "word": "burial",
    "pos": "n.",
    "cn_def": "埋葬;葬禮",
    "en_def": "the act of putting a dead body in the ground",
    "sentence": "The way a society handled {{BLANK}} tells us a lot, because it shows what people believed about death.",
    "cn": "一個社會處理埋葬的方式告訴我們很多事,因為它顯示了人們對死亡的看法。"
  },
  {
    "word": "grave",
    "pos": "n.",
    "cn_def": "墳墓",
    "en_def": "a place in the ground where a dead person is buried",
    "sentence": "Archaeologists found a {{BLANK}} containing a warrior and his horse, and both were buried with gold jewellery.",
    "cn": "考古學家發現了一座墳墓,裡面埋著一名戰士和他的馬,兩者都戴著金飾下葬。"
  },
  {
    "word": "coffin",
    "pos": "n.",
    "cn_def": "棺材",
    "en_def": "a box in which a dead body is buried",
    "sentence": "The wooden {{BLANK}} was painted with bright colours, and it still looked new when the team opened the tomb.",
    "cn": "那具木棺材漆著鮮豔的顏色,團隊打開墳墓時它看起來仍然像新的。"
  },
  {
    "word": "sarcophagus",
    "pos": "n.",
    "cn_def": "石棺",
    "en_def": "a stone coffin, often decorated",
    "sentence": "The heavy {{BLANK}} was carved with pictures of the dead man's life, and it took eight workers to lift its lid.",
    "cn": "那具沉重的石棺刻有死者生平的圖案,需要八名工人才能抬起它的蓋子。"
  },
  {
    "word": "mummify",
    "pos": "v.",
    "cn_def": "製成木乃伊",
    "en_def": "to preserve a dead body by drying and wrapping it",
    "sentence": "Ancient Egyptians used salt to {{BLANK}} their dead, because they believed the body was needed in the afterlife.",
    "cn": "古埃及人用鹽把死者製成木乃伊,因為他們相信來世需要這具身體。"
  },
  {
    "word": "embalm",
    "pos": "v.",
    "cn_def": "(用防腐劑)保存屍體",
    "en_def": "to treat a dead body with chemicals to stop it decaying",
    "sentence": "Priests would {{BLANK}} the body with oils and spices, and then they wrapped it in long strips of cloth.",
    "cn": "祭司們會用油和香料為屍體防腐,然後用長條布把它包裹起來。"
  },
  {
    "word": "cemetery",
    "pos": "n.",
    "cn_def": "墓地;公墓",
    "en_def": "a large area of land where people are buried",
    "sentence": "The old {{BLANK}} outside the town has graves from five hundred years ago, so historians often visit it.",
    "cn": "鎮外那座古老的墓地有五百年前的墳墓,所以歷史學家常常去那裡參訪。"
  },
  {
    "word": "chamber",
    "pos": "n.",
    "cn_def": "室;墓室",
    "en_def": "a room, especially one inside a tomb or palace",
    "sentence": "The secret {{BLANK}} inside the pyramid was discovered using special cameras, but nobody has entered it yet.",
    "cn": "金字塔內的秘密墓室是用特殊攝影機發現的,但還沒有人進去過。"
  },
  {
    "word": "afterlife",
    "pos": "n.",
    "cn_def": "來世",
    "en_def": "a life that some people believe begins after death",
    "sentence": "People were buried with food and tools, because they believed they would need them in the {{BLANK}}.",
    "cn": "人們下葬時會帶著食物和工具,因為他們相信在來世會需要這些東西。"
  },
  {
    "word": "grave goods",
    "pos": "n.phr.",
    "cn_def": "陪葬品",
    "en_def": "objects buried with a dead person",
    "sentence": "The {{BLANK}} in the tomb included gold cups and weapons, so experts believe the woman was a powerful leader.",
    "cn": "墳墓中的陪葬品包括金杯和武器,所以專家相信這名女子是一位有權勢的領袖。"
  },
  {
    "word": "solstice",
    "pos": "n.",
    "cn_def": "至日(夏至或冬至)",
    "en_def": "the longest or shortest day of the year",
    "sentence": "On the summer {{BLANK}}, the sun rises exactly between the two largest stones, and crowds gather to watch it.",
    "cn": "在夏至那天,太陽正好從兩塊最大的石頭之間升起,人群聚集觀看。"
  }
];

const MCQS = [
  {
    "q": "Stonehenge is a famous _____ in England, and thousands of visitors come to see the sunrise there in summer.",
    "options": [
      "monument",
      "era",
      "ritual",
      "custodian"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Each _____ weighs about twenty-five tons, so nobody is sure how ancient people moved them so far.",
    "options": [
      "rubble",
      "hunter-gatherer",
      "megalith",
      "emperor"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The Great _____ took about twenty years to build, and it was the tallest building in the world for centuries.",
    "options": [
      "monarch",
      "pyramid",
      "uprising",
      "statue"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ stood on top of a hill, so the priests could see the whole valley from its steps.",
    "options": [
      "expanse",
      "apex",
      "calendar",
      "temple"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The king's _____ had more than a thousand rooms, and some of them had beautiful paintings on the walls.",
    "options": [
      "X-ray",
      "grandeur",
      "palace",
      "loom"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The people ran to the _____ when the enemy arrived, because its thick walls could protect them.",
    "options": [
      "citadel",
      "dig",
      "alphabet",
      "merchant"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The old town is surrounded by a stone _____, and today tourists can walk along the top of it.",
    "options": [
      "axe",
      "fusion",
      "testament",
      "rampart"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The Roman _____ could hold fifty thousand people, and they came to watch shows and contests.",
    "options": [
      "ancestry",
      "amphitheatre",
      "shipbuilding",
      "stature"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The Romans built a long _____ to bring fresh water into the city, and part of it still stands today.",
    "options": [
      "aqueduct",
      "ancestor",
      "geologist",
      "hut"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Each _____ in the temple is carved with flowers, and together they hold up the heavy stone roof.",
    "options": [
      "deity",
      "pillar",
      "statue",
      "artefact"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The Romans used the _____ to build strong bridges, because the curved shape spreads the weight evenly.",
    "options": [
      "microscope",
      "artefact",
      "cave",
      "arch"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The huge _____ of the building was the largest in the world for many years, and it still has no cracks.",
    "options": [
      "microscope",
      "forerunner",
      "dome",
      "apex"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ of the old castle was so well made that the stones fit together without any cement.",
    "options": [
      "repository",
      "mound",
      "microscope",
      "masonry"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The stones for the temple came from a _____ twenty kilometres away, so workers had to drag them across the hills.",
    "options": [
      "coin",
      "quarry",
      "heir",
      "fossil"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "A huge _____ blocked the entrance to the cave, and it took ten men to roll it away.",
    "options": [
      "posterity",
      "stature",
      "boulder",
      "ancestry"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The tomb was covered by a heavy stone _____, so robbers could not open it easily.",
    "options": [
      "slab",
      "rubble",
      "pit",
      "vestige"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The ancient city was built with mud _____, and the workers dried them in the hot sun before using them.",
    "options": [
      "residue",
      "brick",
      "tribe",
      "democracy"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Roman _____ was so strong that some of their walls are still standing after two thousand years.",
    "options": [
      "mortar",
      "timeline",
      "archaeology",
      "skull"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The _____ of the king was hidden deep under the mountain, so it stayed safe from robbers for centuries.",
    "options": [
      "stature",
      "agriculture",
      "tomb",
      "bronze"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The way a society handled _____ tells us a lot, because it shows what people believed about death.",
    "options": [
      "expanse",
      "statue",
      "democracy",
      "burial"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Archaeologists found a _____ containing a warrior and his horse, and both were buried with gold jewellery.",
    "options": [
      "apex",
      "grave",
      "edifice",
      "patron"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The wooden _____ was painted with bright colours, and it still looked new when the team opened the tomb.",
    "options": [
      "arrowhead",
      "uprising",
      "ritual",
      "coffin"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The heavy _____ was carved with pictures of the dead man's life, and it took eight workers to lift its lid.",
    "options": [
      "sarcophagus",
      "sovereignty",
      "intermediary",
      "city-state"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Ancient Egyptians used salt to _____ their dead, because they believed the body was needed in the afterlife.",
    "options": [
      "catalogue",
      "ransack",
      "mummify",
      "outlive"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Priests would _____ the body with oils and spices, and then they wrapped it in long strips of cloth.",
    "options": [
      "amalgamate",
      "embalm",
      "rediscover",
      "govern"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The old _____ outside the town has graves from five hundred years ago, so historians often visit it.",
    "options": [
      "trowel",
      "heir",
      "tribe",
      "cemetery"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The secret _____ inside the pyramid was discovered using special cameras, but nobody has entered it yet.",
    "options": [
      "chamber",
      "antiquity",
      "hunter-gatherer",
      "warrior"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "People were buried with food and tools, because they believed they would need them in the _____.",
    "options": [
      "ascendancy",
      "repository",
      "afterlife",
      "bronze"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The _____ in the tomb included gold cups and weapons, so experts believe the woman was a powerful leader.",
    "options": [
      "Silk Road",
      "grave goods",
      "cave painting",
      "radiocarbon dating"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "On the summer _____, the sun rises exactly between the two largest stones, and crowds gather to watch it.",
    "options": [
      "kinship",
      "X-ray",
      "solstice",
      "dwelling"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "monument": {
    "pos": "n.",
    "en_def": "a building or statue built to remember a person or event",
    "cn_def": "紀念碑;古蹟"
  },
  "megalith": {
    "pos": "n.",
    "en_def": "a very large stone used in ancient monuments",
    "cn_def": "巨石"
  },
  "pyramid": {
    "pos": "n.",
    "en_def": "a huge stone building with four sloping sides",
    "cn_def": "金字塔"
  },
  "temple": {
    "pos": "n.",
    "en_def": "a building used for religious worship",
    "cn_def": "神廟;寺廟"
  },
  "palace": {
    "pos": "n.",
    "en_def": "a large, grand house of a king or queen",
    "cn_def": "宮殿"
  },
  "citadel": {
    "pos": "n.",
    "en_def": "a strong fortress on high ground in or near a city",
    "cn_def": "城堡;要塞"
  },
  "rampart": {
    "pos": "n.",
    "en_def": "a wide wall of earth or stone built for defence",
    "cn_def": "城牆;壁壘"
  },
  "amphitheatre": {
    "pos": "n.",
    "en_def": "a round open building with rows of seats",
    "cn_def": "圓形劇場"
  },
  "aqueduct": {
    "pos": "n.",
    "en_def": "a bridge-like structure that carries water",
    "cn_def": "導水渠;高架渠"
  },
  "pillar": {
    "pos": "n.",
    "en_def": "a tall column that supports a roof",
    "cn_def": "柱子"
  },
  "arch": {
    "pos": "n.",
    "en_def": "a curved structure over an opening",
    "cn_def": "拱門;拱形結構"
  },
  "dome": {
    "pos": "n.",
    "en_def": "a round roof shaped like half a ball",
    "cn_def": "圓頂"
  },
  "masonry": {
    "pos": "n.",
    "en_def": "the stones or bricks that make up a building",
    "cn_def": "石造結構;磚石"
  },
  "quarry": {
    "pos": "n.",
    "en_def": "a place where stone is dug out of the ground",
    "cn_def": "採石場"
  },
  "boulder": {
    "pos": "n.",
    "en_def": "a very large rock",
    "cn_def": "巨石;大圓石"
  },
  "slab": {
    "pos": "n.",
    "en_def": "a thick, flat piece of stone",
    "cn_def": "石板;厚板"
  },
  "brick": {
    "pos": "n.",
    "en_def": "a block of baked clay used for building",
    "cn_def": "磚塊"
  },
  "mortar": {
    "pos": "n.",
    "en_def": "a mixture used to hold bricks or stones together",
    "cn_def": "灰漿;砂漿"
  },
  "tomb": {
    "pos": "n.",
    "en_def": "a large grave, often with a building over it",
    "cn_def": "墳墓;陵墓"
  },
  "burial": {
    "pos": "n.",
    "en_def": "the act of putting a dead body in the ground",
    "cn_def": "埋葬;葬禮"
  },
  "grave": {
    "pos": "n.",
    "en_def": "a place in the ground where a dead person is buried",
    "cn_def": "墳墓"
  },
  "coffin": {
    "pos": "n.",
    "en_def": "a box in which a dead body is buried",
    "cn_def": "棺材"
  },
  "sarcophagus": {
    "pos": "n.",
    "en_def": "a stone coffin, often decorated",
    "cn_def": "石棺"
  },
  "mummify": {
    "pos": "v.",
    "en_def": "to preserve a dead body by drying and wrapping it",
    "cn_def": "製成木乃伊"
  },
  "embalm": {
    "pos": "v.",
    "en_def": "to treat a dead body with chemicals to stop it decaying",
    "cn_def": "(用防腐劑)保存屍體"
  },
  "cemetery": {
    "pos": "n.",
    "en_def": "a large area of land where people are buried",
    "cn_def": "墓地;公墓"
  },
  "chamber": {
    "pos": "n.",
    "en_def": "a room, especially one inside a tomb or palace",
    "cn_def": "室;墓室"
  },
  "afterlife": {
    "pos": "n.",
    "en_def": "a life that some people believe begins after death",
    "cn_def": "來世"
  },
  "grave goods": {
    "pos": "n.phr.",
    "en_def": "objects buried with a dead person",
    "cn_def": "陪葬品"
  },
  "solstice": {
    "pos": "n.",
    "en_def": "the longest or shortest day of the year",
    "cn_def": "至日(夏至或冬至)"
  },
  "era": {
    "pos": "n.",
    "en_def": "a long period of history",
    "cn_def": "時代;紀元"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a ceremony that is always done in the same way",
    "cn_def": "儀式"
  },
  "custodian": {
    "pos": "n.",
    "en_def": "a person or group responsible for protecting something",
    "cn_def": "守護者;保管人"
  },
  "rubble": {
    "pos": "n.",
    "en_def": "broken stones and bricks from a fallen building",
    "cn_def": "瓦礫;碎石"
  },
  "hunter-gatherer": {
    "pos": "n.",
    "en_def": "a person who lives by hunting animals and collecting plants",
    "cn_def": "狩獵採集者"
  },
  "emperor": {
    "pos": "n.",
    "en_def": "the male ruler of an empire",
    "cn_def": "皇帝"
  },
  "monarch": {
    "pos": "n.",
    "en_def": "a king or queen",
    "cn_def": "君主"
  },
  "uprising": {
    "pos": "n.",
    "en_def": "a situation where people fight against those in power",
    "cn_def": "起義;暴動"
  },
  "statue": {
    "pos": "n.",
    "en_def": "a large figure of a person or animal made of stone or metal",
    "cn_def": "雕像"
  },
  "expanse": {
    "pos": "n.",
    "en_def": "a wide, open area of land, sea or sky",
    "cn_def": "廣闊的區域"
  },
  "apex": {
    "pos": "n.",
    "en_def": "the highest point of something",
    "cn_def": "頂點;巔峰"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a system for dividing the year into days and months",
    "cn_def": "曆法;日曆"
  },
  "x-ray": {
    "pos": "n.",
    "en_def": "a picture that shows the inside of an object",
    "cn_def": "X光(片)"
  },
  "grandeur": {
    "pos": "n.",
    "en_def": "the quality of being very large and impressive",
    "cn_def": "宏偉;壯麗"
  },
  "loom": {
    "pos": "n.",
    "en_def": "a machine or frame for weaving cloth",
    "cn_def": "織布機"
  },
  "dig": {
    "pos": "n.",
    "en_def": "an organised archaeological excavation",
    "cn_def": "考古挖掘(活動)"
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "a set of letters used to write a language",
    "cn_def": "字母(表)"
  },
  "merchant": {
    "pos": "n.",
    "en_def": "a person who buys and sells goods, often abroad",
    "cn_def": "商人"
  },
  "axe": {
    "pos": "n.",
    "en_def": "a tool with a heavy blade for cutting wood",
    "cn_def": "斧頭"
  },
  "fusion": {
    "pos": "n.",
    "en_def": "a mixture of different things joined together",
    "cn_def": "融合"
  },
  "testament": {
    "pos": "n.",
    "en_def": "something that clearly shows that something is true",
    "cn_def": "證明;證據"
  },
  "ancestry": {
    "pos": "n.",
    "en_def": "the people your family came from in the past",
    "cn_def": "祖先;血統"
  },
  "shipbuilding": {
    "pos": "n.",
    "en_def": "the work of building ships",
    "cn_def": "造船(業)"
  },
  "stature": {
    "pos": "n.",
    "en_def": "the importance or reputation of someone",
    "cn_def": "聲望;地位"
  },
  "ancestor": {
    "pos": "n.",
    "en_def": "a family member who lived long before you",
    "cn_def": "祖先"
  },
  "geologist": {
    "pos": "n.",
    "en_def": "a scientist who studies rocks and the earth",
    "cn_def": "地質學家"
  },
  "hut": {
    "pos": "n.",
    "en_def": "a small simple house",
    "cn_def": "小屋;茅屋"
  },
  "deity": {
    "pos": "n.",
    "en_def": "a god or goddess",
    "cn_def": "神;神祇"
  },
  "artefact": {
    "pos": "n.",
    "en_def": "an object made by people long ago",
    "cn_def": "文物;手工藝品"
  },
  "microscope": {
    "pos": "n.",
    "en_def": "an instrument that makes tiny things look bigger",
    "cn_def": "顯微鏡"
  },
  "cave": {
    "pos": "n.",
    "en_def": "a large hole in a hill or under the ground",
    "cn_def": "洞穴"
  },
  "forerunner": {
    "pos": "n.",
    "en_def": "something that came before and led to something newer",
    "cn_def": "先驅;前身"
  },
  "repository": {
    "pos": "n.",
    "en_def": "a place where things are stored",
    "cn_def": "儲藏處;寶庫"
  },
  "mound": {
    "pos": "n.",
    "en_def": "a small hill made of earth or stones",
    "cn_def": "土墩;土丘"
  },
  "coin": {
    "pos": "n.",
    "en_def": "a small round piece of metal used as money",
    "cn_def": "硬幣;錢幣"
  },
  "heir": {
    "pos": "n.",
    "en_def": "a person who will receive someone's property or position",
    "cn_def": "繼承人"
  },
  "fossil": {
    "pos": "n.",
    "en_def": "the remains of an ancient plant or animal in rock",
    "cn_def": "化石"
  },
  "posterity": {
    "pos": "n.",
    "en_def": "all the people who will live in the future",
    "cn_def": "後代;後世"
  },
  "pit": {
    "pos": "n.",
    "en_def": "a hole dug in the ground",
    "cn_def": "坑;坑洞"
  },
  "vestige": {
    "pos": "n.",
    "en_def": "a small part or sign of something that once existed",
    "cn_def": "遺跡;殘跡"
  },
  "residue": {
    "pos": "n.",
    "en_def": "a small amount of something that remains after a process",
    "cn_def": "殘留物;殘渣"
  },
  "tribe": {
    "pos": "n.",
    "en_def": "a group of families with the same customs and leader",
    "cn_def": "部落"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system where people choose their leaders by voting",
    "cn_def": "民主(制度)"
  },
  "timeline": {
    "pos": "n.",
    "en_def": "a list of events in the order they happened",
    "cn_def": "時間軸;年表"
  },
  "archaeology": {
    "pos": "n.",
    "en_def": "the study of the past by digging up old objects and places",
    "cn_def": "考古學"
  },
  "skull": {
    "pos": "n.",
    "en_def": "the bones of the head",
    "cn_def": "頭骨;顱骨"
  },
  "agriculture": {
    "pos": "n.",
    "en_def": "farming; growing crops and raising animals",
    "cn_def": "農業"
  },
  "bronze": {
    "pos": "n.",
    "en_def": "a hard brown metal made from copper and tin",
    "cn_def": "青銅"
  },
  "edifice": {
    "pos": "n.",
    "en_def": "a large, impressive building",
    "cn_def": "宏偉建築;大廈"
  },
  "patron": {
    "pos": "n.",
    "en_def": "a person who gives money to support artists or projects",
    "cn_def": "資助者;贊助人"
  },
  "arrowhead": {
    "pos": "n.",
    "en_def": "the sharp stone or metal point of an arrow",
    "cn_def": "箭頭"
  },
  "sovereignty": {
    "pos": "n.",
    "en_def": "complete power to govern a country",
    "cn_def": "主權"
  },
  "intermediary": {
    "pos": "n.",
    "en_def": "a person who helps two sides communicate or trade",
    "cn_def": "中間人;仲介"
  },
  "city-state": {
    "pos": "n.",
    "en_def": "a city that governs itself like an independent country",
    "cn_def": "城邦"
  },
  "catalogue": {
    "pos": "v.",
    "en_def": "to make a detailed list of objects",
    "cn_def": "編目;登錄"
  },
  "ransack": {
    "pos": "v.",
    "en_def": "to search a place roughly and steal things",
    "cn_def": "洗劫;搜劫"
  },
  "outlive": {
    "pos": "v.",
    "en_def": "to live longer than someone or something",
    "cn_def": "比…活得長;比…存在更久"
  },
  "amalgamate": {
    "pos": "v.",
    "en_def": "to join two or more things together into one",
    "cn_def": "合併;融合"
  },
  "rediscover": {
    "pos": "v.",
    "en_def": "to find something again after it was lost or forgotten",
    "cn_def": "重新發現"
  },
  "govern": {
    "pos": "v.",
    "en_def": "to officially control a country or area",
    "cn_def": "統治;治理"
  },
  "trowel": {
    "pos": "n.",
    "en_def": "a small hand tool with a flat blade for digging",
    "cn_def": "小鏟子(考古用手鏟)"
  },
  "antiquity": {
    "pos": "n.",
    "en_def": "the ancient past, especially before the Middle Ages",
    "cn_def": "古代;上古"
  },
  "warrior": {
    "pos": "n.",
    "en_def": "a brave fighter, especially in ancient times",
    "cn_def": "戰士;勇士"
  },
  "ascendancy": {
    "pos": "n.",
    "en_def": "a position of power or control",
    "cn_def": "優勢;支配地位"
  },
  "silk road": {
    "pos": "n.phr.",
    "en_def": "ancient trade routes linking China and Europe",
    "cn_def": "絲路"
  },
  "cave painting": {
    "pos": "n.phr.",
    "en_def": "an ancient picture painted on the wall of a cave",
    "cn_def": "洞穴壁畫"
  },
  "radiocarbon dating": {
    "pos": "n.phr.",
    "en_def": "a method of finding the age of old organic material",
    "cn_def": "放射性碳定年法"
  },
  "kinship": {
    "pos": "n.",
    "en_def": "a family relationship between people",
    "cn_def": "親屬關係"
  },
  "dwelling": {
    "pos": "n.",
    "en_def": "a house or place where someone lives",
    "cn_def": "住所;住處"
  }
};

const EXTRA_GLOSSES = {};
