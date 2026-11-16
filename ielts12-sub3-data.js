// Topic 12 Subunit 3 Quiz Data: Rocks, Minerals & Landforms 岩石、礦物與地形
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S03 - Rocks, Minerals & Landforms 岩石、礦物與地形",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "igneous rock",
    "pos": "n.phr.",
    "cn_def": "火成岩",
    "en_def": "rock formed when hot melted rock cools",
    "sentence": "Basalt is a common {{BLANK}}, and it forms when lava cools quickly on the surface of the Earth.",
    "cn": "玄武岩是一種常見的火成岩，而它是在熔岩於地表迅速冷卻時形成的。"
  },
  {
    "word": "sedimentary rock",
    "pos": "n.phr.",
    "cn_def": "沉積岩",
    "en_def": "rock made from layers of sand, mud or shells pressed together",
    "sentence": "{{BLANK}} often contains fossils, so it is the best place to look for clues about ancient life.",
    "cn": "沉積岩經常含有化石，所以它是尋找古代生物線索的最佳地方。"
  },
  {
    "word": "metamorphic rock",
    "pos": "n.phr.",
    "cn_def": "變質岩",
    "en_def": "rock changed by heat and pressure",
    "sentence": "Marble is a {{BLANK}} that forms deep underground, and artists have used it for statues for thousands of years.",
    "cn": "大理石是一種在地底深處形成的變質岩，而藝術家數千年來一直用它來製作雕像。"
  },
  {
    "word": "granite",
    "pos": "n.",
    "cn_def": "花崗岩",
    "en_def": "a very hard grey or pink rock",
    "sentence": "The kitchen counter is made of {{BLANK}}, so it does not scratch easily, and it stays cool even in summer.",
    "cn": "廚房流理臺是花崗岩做的，所以它不容易刮傷，而且即使在夏天也保持涼爽。"
  },
  {
    "word": "basalt",
    "pos": "n.",
    "cn_def": "玄武岩",
    "en_def": "a dark rock formed from cooled lava",
    "sentence": "The islands of Penghu are famous for their {{BLANK}} columns, and many tourists take photos of these unusual rock shapes.",
    "cn": "澎湖群島以玄武岩柱聞名，而許多遊客會拍下這些奇特岩石形狀的照片。"
  },
  {
    "word": "marble",
    "pos": "n.",
    "cn_def": "大理石",
    "en_def": "a smooth hard stone often used in buildings and statues",
    "sentence": "Taroko Gorge has walls of white {{BLANK}}, and the river has cut through the stone for millions of years.",
    "cn": "太魯閣峽谷有白色大理石構成的峭壁，而河流已經切穿這些石頭數百萬年。"
  },
  {
    "word": "sandstone",
    "pos": "n.",
    "cn_def": "砂岩",
    "en_def": "rock made of sand pressed together",
    "sentence": "The cliffs along the coast are made of soft {{BLANK}}, so the wind and waves have carved them into strange shapes.",
    "cn": "海岸沿線的懸崖是由鬆軟的砂岩構成，所以風和海浪把它們雕刻成奇特的形狀。"
  },
  {
    "word": "quartz",
    "pos": "n.",
    "cn_def": "石英",
    "en_def": "a hard clear or white mineral",
    "sentence": "My little brother found a shiny piece of {{BLANK}} on the beach, and he keeps it in a box with his other treasures.",
    "cn": "我弟弟在海灘上發現一塊閃亮的石英，而他把它和其他寶物一起收在盒子裡。"
  },
  {
    "word": "crystal",
    "pos": "n.",
    "cn_def": "晶體；水晶",
    "en_def": "a solid with a regular shape and flat sides",
    "sentence": "Salt forms tiny {{BLANK}} when seawater dries, and you can see their square shapes with a simple magnifying glass.",
    "cn": "海水乾掉時鹽會形成微小的晶體，而你可以用簡單的放大鏡看到它們的方形結構。"
  },
  {
    "word": "gemstone",
    "pos": "n.",
    "cn_def": "寶石",
    "en_def": "a valuable stone used in jewellery",
    "sentence": "A ruby is a red {{BLANK}} that forms deep underground, but it becomes beautiful only after it is cut and polished.",
    "cn": "紅寶石是一種在地底深處形成的紅色寶石，但它要經過切割和拋光後才會變得美麗。"
  },
  {
    "word": "rock cycle",
    "pos": "n.phr.",
    "cn_def": "岩石循環",
    "en_def": "the slow process in which rocks change from one type to another",
    "sentence": "The {{BLANK}} never stops, because rocks are always being broken down, buried, heated and pushed up again.",
    "cn": "岩石循環從不停止，因為岩石總是不斷被分解、掩埋、加熱，然後再次被推升上來。"
  },
  {
    "word": "weathering",
    "pos": "n.",
    "cn_def": "風化作用",
    "en_def": "the breaking down of rock by weather, water or plants",
    "sentence": "Years of {{BLANK}} have made the old stone steps smooth, and some of the carvings are now hard to see.",
    "cn": "多年的風化作用讓那些古老的石階變得光滑，而有些雕刻現在已經很難看清楚了。"
  },
  {
    "word": "canyon",
    "pos": "n.",
    "cn_def": "峽谷",
    "en_def": "a deep valley with steep sides, usually cut by a river",
    "sentence": "The Grand {{BLANK}} is over a kilometre deep, and it took the Colorado River millions of years to carve it.",
    "cn": "大峽谷深達一公里以上，而科羅拉多河花了數百萬年才把它切割出來。"
  },
  {
    "word": "gorge",
    "pos": "n.",
    "cn_def": "峽谷；山峽",
    "en_def": "a narrow valley with steep rocky walls",
    "sentence": "We walked along the narrow {{BLANK}} all morning, but we had to wear helmets because small rocks sometimes fell from above.",
    "cn": "我們整個早上沿著狹窄的峽谷行走，但我們必須戴安全帽，因為有時會有小石頭從上方掉落。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷",
    "en_def": "low land between hills or mountains",
    "sentence": "The village lies in a green {{BLANK}} between two mountains, so it is cool in summer but very foggy in winter.",
    "cn": "那座村莊位於兩座山之間的翠綠山谷中，所以夏天涼爽，但冬天霧很濃。"
  },
  {
    "word": "mountain range",
    "pos": "n.phr.",
    "cn_def": "山脈",
    "en_def": "a long line of mountains",
    "sentence": "The Central {{BLANK}} divides Taiwan into east and west, and it has more than two hundred peaks over 3,000 metres.",
    "cn": "中央山脈把臺灣分成東西兩半，而且它有兩百多座超過三千公尺的山峰。"
  },
  {
    "word": "peak",
    "pos": "n.",
    "cn_def": "山峰",
    "en_def": "the pointed top of a mountain",
    "sentence": "We reached the {{BLANK}} just before sunrise, and the view of the sea of clouds made the hard climb worthwhile.",
    "cn": "我們在日出前抵達山峰，而雲海的景色讓艱辛的攀登變得值得。"
  },
  {
    "word": "slope",
    "pos": "n.",
    "cn_def": "斜坡",
    "en_def": "ground that goes up or down at an angle",
    "sentence": "Heavy rain made the {{BLANK}} above the road unstable, so workers built a strong wall to stop rocks from falling.",
    "cn": "大雨讓道路上方的斜坡變得不穩，所以工人建造了一道堅固的牆來阻止落石。"
  },
  {
    "word": "stalactite",
    "pos": "n.",
    "cn_def": "鐘乳石",
    "en_def": "a rock shape that hangs down from the roof of a cave",
    "sentence": "A single {{BLANK}} can take thousands of years to grow, so visitors are told never to touch the ones in the cave.",
    "cn": "一根鐘乳石可能需要數千年才能長成，所以遊客被告知絕對不要觸摸洞穴裡的鐘乳石。"
  },
  {
    "word": "stalagmite",
    "pos": "n.",
    "cn_def": "石筍",
    "en_def": "a rock shape that grows up from the floor of a cave",
    "sentence": "Water dripping from the ceiling slowly formed a tall {{BLANK}} on the floor, and it now looks like a stone tower.",
    "cn": "從洞頂滴下的水在地面上慢慢形成一根高高的石筍，而它現在看起來像一座石塔。"
  },
  {
    "word": "cavern",
    "pos": "n.",
    "cn_def": "大洞穴",
    "en_def": "a large cave",
    "sentence": "The guide led us into a huge underground {{BLANK}}, and our voices echoed loudly when we spoke.",
    "cn": "導遊帶領我們進入一個巨大的地下洞穴，而我們說話時聲音回響得很大聲。"
  },
  {
    "word": "outcrop",
    "pos": "n.",
    "cn_def": "露頭；突出的岩層",
    "en_def": "a large rock that sticks out of the ground",
    "sentence": "We stopped for lunch on a rocky {{BLANK}} above the river, and from there we could see the whole valley.",
    "cn": "我們在河流上方一塊突出的岩石上停下來吃午餐，而從那裡我們可以看到整個山谷。"
  },
  {
    "word": "landform",
    "pos": "n.",
    "cn_def": "地形",
    "en_def": "a natural shape on the Earth's surface, such as a hill",
    "sentence": "A delta is a {{BLANK}} that forms where a river meets the sea, and it often has very rich soil for farming.",
    "cn": "三角洲是一種在河流入海處形成的地形，而它通常擁有非常適合耕種的肥沃土壤。"
  },
  {
    "word": "glacial",
    "pos": "adj.",
    "cn_def": "冰河的",
    "en_def": "made or caused by glaciers",
    "sentence": "The lake was formed by {{BLANK}} ice thousands of years ago, so its water is very cold and clear even in summer.",
    "cn": "這座湖是在數千年前由冰河冰所形成的，所以即使在夏天湖水也非常冰冷清澈。"
  },
  {
    "word": "moraine",
    "pos": "n.",
    "cn_def": "冰磧",
    "en_def": "a pile of rocks and soil left by a glacier",
    "sentence": "The hikers crossed a long {{BLANK}} of loose stones, and the guide explained that a glacier had pushed them there long ago.",
    "cn": "健行者穿越一長片鬆散石頭構成的冰磧，而導遊解釋說很久以前是冰河把它們推到那裡的。"
  },
  {
    "word": "geode",
    "pos": "n.",
    "cn_def": "晶洞",
    "en_def": "a plain-looking rock with crystals inside",
    "sentence": "The {{BLANK}} looked like an ordinary grey stone, but when my dad cut it open, it was full of purple crystals.",
    "cn": "那顆晶洞看起來像一塊普通的灰色石頭，但當我爸爸把它切開時，裡面全是紫色的晶體。"
  },
  {
    "word": "ravine",
    "pos": "n.",
    "cn_def": "深谷；溝壑",
    "en_def": "a deep narrow valley with steep sides",
    "sentence": "The bridge crosses a deep {{BLANK}}, so some visitors feel nervous when they look down at the river below.",
    "cn": "這座橋橫跨一道很深的溝壑，所以有些遊客往下看到河流時會感到緊張。"
  },
  {
    "word": "rock formation",
    "pos": "n.phr.",
    "cn_def": "岩石地形；奇岩",
    "en_def": "a natural shape made of rock",
    "sentence": "The famous Queen's Head at Yehliu is a {{BLANK}}, but scientists worry that it may break because of weathering.",
    "cn": "野柳著名的女王頭是一個岩石地形，但科學家擔心它可能會因為風化而斷裂。"
  }
];

const MCQS = [
  {
    "q": "Basalt is a common _____, and it forms when lava cools quickly on the surface of the Earth.",
    "options": [
      "convection current",
      "igneous rock",
      "white dwarf",
      "extinct volcano"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "_____ often contains fossils, so it is the best place to look for clues about ancient life.",
    "options": [
      "solar eclipse",
      "oxbow lake",
      "sedimentary rock",
      "dark energy"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Marble is a _____ that forms deep underground, and artists have used it for statues for thousands of years.",
    "options": [
      "metamorphic rock",
      "convection current",
      "seafloor spreading",
      "heat shield"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The kitchen counter is made of _____, so it does not scratch easily, and it stays cool even in summer.",
    "options": [
      "seismologist",
      "Pangaea",
      "caldera",
      "granite"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The islands of Penghu are famous for their _____ columns, and many tourists take photos of these unusual rock shapes.",
    "options": [
      "visibility",
      "credibility",
      "basalt",
      "microgravity"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Taroko Gorge has walls of white _____, and the river has cut through the stone for millions of years.",
    "options": [
      "waterfall",
      "marble",
      "topography",
      "cosmos"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The cliffs along the coast are made of soft _____, so the wind and waves have carved them into strange shapes.",
    "options": [
      "sandstone",
      "asthenosphere",
      "particle",
      "disturbance"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "My little brother found a shiny piece of _____ on the beach, and he keeps it in a box with his other treasures.",
    "options": [
      "asteroid",
      "contingency",
      "fold",
      "quartz"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Salt forms tiny _____ when seawater dries, and you can see their square shapes with a simple magnifying glass.",
    "options": [
      "countdown",
      "crystal",
      "Saturn",
      "Pangaea"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "A ruby is a red _____ that forms deep underground, but it becomes beautiful only after it is cut and polished.",
    "options": [
      "void",
      "survival",
      "reliability",
      "gemstone"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The _____ never stops, because rocks are always being broken down, buried, heated and pushed up again.",
    "options": [
      "Ring of Fire",
      "magnetic field",
      "rock cycle",
      "plate tectonics"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Years of _____ have made the old stone steps smooth, and some of the carvings are now hard to see.",
    "options": [
      "weathering",
      "lithosphere",
      "hydrology",
      "crater"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The Grand _____ is over a kilometre deep, and it took the Colorado River millions of years to carve it.",
    "options": [
      "foreshock",
      "lander",
      "canyon",
      "consistency"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "We walked along the narrow _____ all morning, but we had to wear helmets because small rocks sometimes fell from above.",
    "options": [
      "gorge",
      "adjustment",
      "volcanologist",
      "presence"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The village lies in a green _____ between two mountains, so it is cool in summer but very foggy in winter.",
    "options": [
      "finding",
      "rapids",
      "confirmation",
      "valley"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The Central _____ divides Taiwan into east and west, and it has more than two hundred peaks over 3,000 metres.",
    "options": [
      "low Earth orbit",
      "mountain range",
      "shooting star",
      "neutron star"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "We reached the _____ just before sunrise, and the view of the sea of clouds made the hard climb worthwhile.",
    "options": [
      "equation",
      "star",
      "peak",
      "inference"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Heavy rain made the _____ above the road unstable, so workers built a strong wall to stop rocks from falling.",
    "options": [
      "alignment",
      "spacewalk",
      "quake",
      "slope"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "A single _____ can take thousands of years to grow, so visitors are told never to touch the ones in the cave.",
    "options": [
      "cosmos",
      "stalactite",
      "accumulation",
      "telescope"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Water dripping from the ceiling slowly formed a tall _____ on the floor, and it now looks like a stone tower.",
    "options": [
      "stalagmite",
      "volcano",
      "characteristic",
      "constellation"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The guide led us into a huge underground _____, and our voices echoed loudly when we spoke.",
    "options": [
      "geophysicist",
      "cavern",
      "amplitude",
      "Venus"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "We stopped for lunch on a rocky _____ above the river, and from there we could see the whole valley.",
    "options": [
      "planet",
      "identification",
      "astronaut",
      "outcrop"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "A delta is a _____ that forms where a river meets the sea, and it often has very rich soil for farming.",
    "options": [
      "landform",
      "axis",
      "geyser",
      "consistency"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The lake was formed by _____ ice thousands of years ago, so its water is very cold and clear even in summer.",
    "options": [
      "proportional",
      "stationary",
      "glacial",
      "elongated"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The hikers crossed a long _____ of loose stones, and the guide explained that a glacier had pushed them there long ago.",
    "options": [
      "resolution",
      "moraine",
      "foreshock",
      "galaxy"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The _____ looked like an ordinary grey stone, but when my dad cut it open, it was full of purple crystals.",
    "options": [
      "propulsion",
      "rapids",
      "geode",
      "exploitation"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The bridge crosses a deep _____, so some visitors feel nervous when they look down at the river below.",
    "options": [
      "ravine",
      "tributary",
      "aftershock",
      "tremor"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The famous Queen's Head at Yehliu is a _____, but scientists worry that it may break because of weathering.",
    "options": [
      "Ring of Fire",
      "pyroclastic flow",
      "dark energy",
      "rock formation"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "igneous rock": {
    "pos": "n.phr.",
    "en_def": "rock formed when hot melted rock cools",
    "cn_def": "火成岩"
  },
  "sedimentary rock": {
    "pos": "n.phr.",
    "en_def": "rock made from layers of sand, mud or shells pressed together",
    "cn_def": "沉積岩"
  },
  "metamorphic rock": {
    "pos": "n.phr.",
    "en_def": "rock changed by heat and pressure",
    "cn_def": "變質岩"
  },
  "granite": {
    "pos": "n.",
    "en_def": "a very hard grey or pink rock",
    "cn_def": "花崗岩"
  },
  "basalt": {
    "pos": "n.",
    "en_def": "a dark rock formed from cooled lava",
    "cn_def": "玄武岩"
  },
  "marble": {
    "pos": "n.",
    "en_def": "a smooth hard stone often used in buildings and statues",
    "cn_def": "大理石"
  },
  "sandstone": {
    "pos": "n.",
    "en_def": "rock made of sand pressed together",
    "cn_def": "砂岩"
  },
  "quartz": {
    "pos": "n.",
    "en_def": "a hard clear or white mineral",
    "cn_def": "石英"
  },
  "crystal": {
    "pos": "n.",
    "en_def": "a solid with a regular shape and flat sides",
    "cn_def": "晶體；水晶"
  },
  "gemstone": {
    "pos": "n.",
    "en_def": "a valuable stone used in jewellery",
    "cn_def": "寶石"
  },
  "rock cycle": {
    "pos": "n.phr.",
    "en_def": "the slow process in which rocks change from one type to another",
    "cn_def": "岩石循環"
  },
  "weathering": {
    "pos": "n.",
    "en_def": "the breaking down of rock by weather, water or plants",
    "cn_def": "風化作用"
  },
  "canyon": {
    "pos": "n.",
    "en_def": "a deep valley with steep sides, usually cut by a river",
    "cn_def": "峽谷"
  },
  "gorge": {
    "pos": "n.",
    "en_def": "a narrow valley with steep rocky walls",
    "cn_def": "峽谷；山峽"
  },
  "valley": {
    "pos": "n.",
    "en_def": "low land between hills or mountains",
    "cn_def": "山谷"
  },
  "mountain range": {
    "pos": "n.phr.",
    "en_def": "a long line of mountains",
    "cn_def": "山脈"
  },
  "peak": {
    "pos": "n.",
    "en_def": "the pointed top of a mountain",
    "cn_def": "山峰"
  },
  "slope": {
    "pos": "n.",
    "en_def": "ground that goes up or down at an angle",
    "cn_def": "斜坡"
  },
  "stalactite": {
    "pos": "n.",
    "en_def": "a rock shape that hangs down from the roof of a cave",
    "cn_def": "鐘乳石"
  },
  "stalagmite": {
    "pos": "n.",
    "en_def": "a rock shape that grows up from the floor of a cave",
    "cn_def": "石筍"
  },
  "cavern": {
    "pos": "n.",
    "en_def": "a large cave",
    "cn_def": "大洞穴"
  },
  "outcrop": {
    "pos": "n.",
    "en_def": "a large rock that sticks out of the ground",
    "cn_def": "露頭；突出的岩層"
  },
  "landform": {
    "pos": "n.",
    "en_def": "a natural shape on the Earth's surface, such as a hill",
    "cn_def": "地形"
  },
  "glacial": {
    "pos": "adj.",
    "en_def": "made or caused by glaciers",
    "cn_def": "冰河的"
  },
  "moraine": {
    "pos": "n.",
    "en_def": "a pile of rocks and soil left by a glacier",
    "cn_def": "冰磧"
  },
  "geode": {
    "pos": "n.",
    "en_def": "a plain-looking rock with crystals inside",
    "cn_def": "晶洞"
  },
  "ravine": {
    "pos": "n.",
    "en_def": "a deep narrow valley with steep sides",
    "cn_def": "深谷；溝壑"
  },
  "rock formation": {
    "pos": "n.phr.",
    "en_def": "a natural shape made of rock",
    "cn_def": "岩石地形；奇岩"
  },
  "convection current": {
    "pos": "n.phr.",
    "en_def": "a circular flow of heat in a liquid or soft solid",
    "cn_def": "對流"
  },
  "white dwarf": {
    "pos": "n.phr.",
    "en_def": "a small, hot, dense star near the end of its life",
    "cn_def": "白矮星"
  },
  "extinct volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that will never erupt again",
    "cn_def": "死火山"
  },
  "solar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the moon blocks the sun's light from Earth",
    "cn_def": "日蝕"
  },
  "oxbow lake": {
    "pos": "n.phr.",
    "en_def": "a curved lake formed when a river changes its course",
    "cn_def": "牛軛湖"
  },
  "dark energy": {
    "pos": "n.phr.",
    "en_def": "a mysterious force that makes the universe expand faster",
    "cn_def": "暗能量"
  },
  "seafloor spreading": {
    "pos": "n.phr.",
    "en_def": "the process where new ocean floor forms and moves apart",
    "cn_def": "海底擴張"
  },
  "heat shield": {
    "pos": "n.phr.",
    "en_def": "a cover that protects a spacecraft from extreme heat",
    "cn_def": "隔熱罩"
  },
  "seismologist": {
    "pos": "n.",
    "en_def": "a scientist who studies earthquakes",
    "cn_def": "地震學家"
  },
  "pangaea": {
    "pos": "n.",
    "en_def": "the supercontinent that existed about 300 million years ago",
    "cn_def": "盤古大陸"
  },
  "caldera": {
    "pos": "n.",
    "en_def": "a huge hollow formed when a volcano collapses",
    "cn_def": "破火山口"
  },
  "visibility": {
    "pos": "n.",
    "en_def": "how far or how well you can see",
    "cn_def": "能見度"
  },
  "credibility": {
    "pos": "n.",
    "en_def": "the quality of being trusted and believed",
    "cn_def": "可信度"
  },
  "microgravity": {
    "pos": "n.",
    "en_def": "very weak gravity, like inside an orbiting spacecraft",
    "cn_def": "微重力"
  },
  "waterfall": {
    "pos": "n.",
    "en_def": "water falling from a high place, such as a cliff",
    "cn_def": "瀑布"
  },
  "topography": {
    "pos": "n.",
    "en_def": "the shape and height of the land in an area",
    "cn_def": "地形（起伏）"
  },
  "cosmos": {
    "pos": "n.",
    "en_def": "the whole universe, seen as an ordered system",
    "cn_def": "宇宙"
  },
  "asthenosphere": {
    "pos": "n.",
    "en_def": "the soft, partly melted layer under the lithosphere",
    "cn_def": "軟流圈"
  },
  "particle": {
    "pos": "n.",
    "en_def": "a very small piece of something",
    "cn_def": "粒子；微粒"
  },
  "disturbance": {
    "pos": "n.",
    "en_def": "something that interrupts normal conditions",
    "cn_def": "干擾；擾動"
  },
  "asteroid": {
    "pos": "n.",
    "en_def": "a large rock that moves around the sun",
    "cn_def": "小行星"
  },
  "contingency": {
    "pos": "n.",
    "en_def": "a possible future event that you must plan for",
    "cn_def": "意外情況；應變"
  },
  "fold": {
    "pos": "n.",
    "en_def": "a bend in rock layers caused by pressure",
    "cn_def": "褶皺"
  },
  "countdown": {
    "pos": "n.",
    "en_def": "counting backwards to zero before something starts",
    "cn_def": "倒數計時"
  },
  "saturn": {
    "pos": "n.",
    "en_def": "the sixth planet, famous for its rings",
    "cn_def": "土星"
  },
  "void": {
    "pos": "n.",
    "en_def": "a large empty space",
    "cn_def": "空無；真空"
  },
  "survival": {
    "pos": "n.",
    "en_def": "the state of continuing to live",
    "cn_def": "生存"
  },
  "reliability": {
    "pos": "n.",
    "en_def": "the quality of being trustworthy or working well",
    "cn_def": "可靠性"
  },
  "ring of fire": {
    "pos": "n.phr.",
    "en_def": "the area around the Pacific Ocean with many volcanoes and earthquakes",
    "cn_def": "環太平洋火山帶"
  },
  "magnetic field": {
    "pos": "n.phr.",
    "en_def": "the invisible area of magnetic force around the Earth",
    "cn_def": "磁場"
  },
  "plate tectonics": {
    "pos": "n.phr.",
    "en_def": "the theory that the Earth's surface is made of moving plates",
    "cn_def": "板塊構造論"
  },
  "lithosphere": {
    "pos": "n.",
    "en_def": "the rigid outer shell made of crust and upper mantle",
    "cn_def": "岩石圈"
  },
  "hydrology": {
    "pos": "n.",
    "en_def": "the study of water on and under the Earth's surface",
    "cn_def": "水文學"
  },
  "crater": {
    "pos": "n.",
    "en_def": "a large bowl-shaped hole at the top of a volcano or made by an impact",
    "cn_def": "火山口；坑洞"
  },
  "foreshock": {
    "pos": "n.",
    "en_def": "a smaller earthquake that comes before a bigger one",
    "cn_def": "前震"
  },
  "lander": {
    "pos": "n.",
    "en_def": "a spacecraft designed to land on a planet or moon",
    "cn_def": "登陸器"
  },
  "consistency": {
    "pos": "n.",
    "en_def": "the quality of always behaving or performing in the same way",
    "cn_def": "一致性"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "調整"
  },
  "volcanologist": {
    "pos": "n.",
    "en_def": "a scientist who studies volcanoes",
    "cn_def": "火山學家"
  },
  "presence": {
    "pos": "n.",
    "en_def": "the fact of being in a place",
    "cn_def": "存在"
  },
  "finding": {
    "pos": "n.",
    "en_def": "a piece of information discovered after research",
    "cn_def": "研究發現"
  },
  "rapids": {
    "pos": "n.",
    "en_def": "part of a river where water flows fast over rocks",
    "cn_def": "急流"
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "a statement or proof that something is true",
    "cn_def": "證實"
  },
  "low earth orbit": {
    "pos": "n.phr.",
    "en_def": "the area of space close above the Earth's atmosphere",
    "cn_def": "低地球軌道"
  },
  "shooting star": {
    "pos": "n.phr.",
    "en_def": "an everyday name for a meteor",
    "cn_def": "流星（口語）"
  },
  "neutron star": {
    "pos": "n.phr.",
    "en_def": "a very small, very heavy dead star",
    "cn_def": "中子星"
  },
  "equation": {
    "pos": "n.",
    "en_def": "a mathematical statement that two things are equal",
    "cn_def": "方程式"
  },
  "star": {
    "pos": "n.",
    "en_def": "a huge ball of burning gas in space, like the sun",
    "cn_def": "恆星"
  },
  "inference": {
    "pos": "n.",
    "en_def": "a conclusion based on evidence",
    "cn_def": "推論；推斷"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the arrangement of things in a straight line",
    "cn_def": "排成一直線；對齊"
  },
  "spacewalk": {
    "pos": "n.",
    "en_def": "time an astronaut spends working outside a spacecraft",
    "cn_def": "太空漫步"
  },
  "quake": {
    "pos": "n.",
    "en_def": "an informal word for an earthquake",
    "cn_def": "地震（口語）"
  },
  "accumulation": {
    "pos": "n.",
    "en_def": "a gradual increase in amount",
    "cn_def": "累積"
  },
  "telescope": {
    "pos": "n.",
    "en_def": "a tool that makes faraway objects look closer",
    "cn_def": "望遠鏡"
  },
  "volcano": {
    "pos": "n.",
    "en_def": "a mountain that can send out hot rock, gas and ash",
    "cn_def": "火山"
  },
  "characteristic": {
    "pos": "n.",
    "en_def": "a typical feature or quality",
    "cn_def": "特徵"
  },
  "constellation": {
    "pos": "n.",
    "en_def": "a group of stars that forms a pattern",
    "cn_def": "星座"
  },
  "geophysicist": {
    "pos": "n.",
    "en_def": "a scientist who studies the physical processes of the Earth",
    "cn_def": "地球物理學家"
  },
  "amplitude": {
    "pos": "n.",
    "en_def": "the size of a wave from its middle to its top",
    "cn_def": "振幅"
  },
  "venus": {
    "pos": "n.",
    "en_def": "the second planet from the sun, very hot and cloudy",
    "cn_def": "金星"
  },
  "planet": {
    "pos": "n.",
    "en_def": "a large round object that moves around a star",
    "cn_def": "行星"
  },
  "identification": {
    "pos": "n.",
    "en_def": "the act of recognising who or what something is",
    "cn_def": "辨識；鑑定"
  },
  "astronaut": {
    "pos": "n.",
    "en_def": "a person trained to travel in space",
    "cn_def": "太空人"
  },
  "axis": {
    "pos": "n.",
    "en_def": "an imaginary line that a planet spins around",
    "cn_def": "地軸；軸"
  },
  "geyser": {
    "pos": "n.",
    "en_def": "a hot spring that shoots water and steam into the air",
    "cn_def": "間歇泉"
  },
  "proportional": {
    "pos": "adj.",
    "en_def": "changing in size in the same way as something else",
    "cn_def": "成比例的"
  },
  "stationary": {
    "pos": "adj.",
    "en_def": "not moving",
    "cn_def": "靜止的"
  },
  "elongated": {
    "pos": "adj.",
    "en_def": "longer than usual and thin",
    "cn_def": "拉長的；細長的"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "the amount of detail an image can show",
    "cn_def": "解析度"
  },
  "galaxy": {
    "pos": "n.",
    "en_def": "a huge group of billions of stars",
    "cn_def": "星系"
  },
  "propulsion": {
    "pos": "n.",
    "en_def": "the force that pushes something forward",
    "cn_def": "推進力；推進系統"
  },
  "exploitation": {
    "pos": "n.",
    "en_def": "using something, sometimes unfairly, for profit",
    "cn_def": "開採；剝削"
  },
  "tributary": {
    "pos": "n.",
    "en_def": "a small river that flows into a bigger river",
    "cn_def": "支流"
  },
  "aftershock": {
    "pos": "n.",
    "en_def": "a smaller earthquake that follows a big one",
    "cn_def": "餘震"
  },
  "tremor": {
    "pos": "n.",
    "en_def": "a small shaking of the ground",
    "cn_def": "輕微震動"
  },
  "pyroclastic flow": {
    "pos": "n.phr.",
    "en_def": "a fast, deadly cloud of hot gas and rock",
    "cn_def": "火山碎屑流"
  }
};

const EXTRA_GLOSSES = {};
