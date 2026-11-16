// Topic 3 Subunit 4 Quiz Data: Oceans, Ice & Rising Seas 海洋、冰層與海平面上升
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S04 - Oceans, Ice & Rising Seas 海洋、冰層與海平面上升",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "glacier",
    "pos": "n.",
    "cn_def": "冰河",
    "en_def": "a large mass of ice that moves slowly down a mountain",
    "sentence": "My grandparents visited the {{BLANK}} forty years ago, and when we went there last summer it was much smaller.",
    "cn": "我的祖父母四十年前造訪過那座冰河,而我們去年夏天去的時候它已經小了很多。"
  },
  {
    "word": "ice sheet",
    "pos": "n.phr.",
    "cn_def": "冰原;冰蓋",
    "en_def": "a very large, thick layer of ice covering land",
    "sentence": "The {{BLANK}} in Greenland is losing billions of tonnes of ice each year, and this water raises the sea.",
    "cn": "格陵蘭的冰原每年流失數十億噸的冰,而這些水會使海平面上升。"
  },
  {
    "word": "iceberg",
    "pos": "n.",
    "cn_def": "冰山",
    "en_def": "a huge piece of ice floating in the sea",
    "sentence": "A giant {{BLANK}} broke away from Antarctica last year, and it was bigger than the city of Taipei.",
    "cn": "去年一座巨大的冰山從南極洲斷裂分離,它比台北市還要大。"
  },
  {
    "word": "permafrost",
    "pos": "n.",
    "cn_def": "永凍土",
    "en_def": "ground that stays frozen all year",
    "sentence": "As the {{BLANK}} melts, roads and houses in northern Russia are sinking, and old gases escape into the air.",
    "cn": "隨著永凍土融化,俄羅斯北部的道路和房屋正在下陷,古老的氣體也逸散到空氣中。"
  },
  {
    "word": "thaw",
    "pos": "v.",
    "cn_def": "解凍;融化",
    "en_def": "to change from ice to water; to stop being frozen",
    "sentence": "The lake used to stay frozen until April, but now it starts to {{BLANK}} in early March.",
    "cn": "這座湖過去會一直結冰到四月,但現在三月初就開始解凍了。"
  },
  {
    "word": "melt",
    "pos": "v.",
    "cn_def": "融化",
    "en_def": "to change from solid to liquid because of heat",
    "sentence": "The snow on the mountain {{BLANK}} earlier every year, so the river has less water in the dry summer months.",
    "cn": "山上的雪每年都更早融化,所以河川在乾燥的夏季月份水量變少了。"
  },
  {
    "word": "meltwater",
    "pos": "n.",
    "cn_def": "融水;雪水",
    "en_def": "water from melting snow or ice",
    "sentence": "Villages in the Himalayas depend on {{BLANK}} from glaciers, but this supply may disappear within a few decades.",
    "cn": "喜馬拉雅山區的村莊依賴冰河的融水,但這項水源可能在幾十年內消失。"
  },
  {
    "word": "sea level",
    "pos": "n.phr.",
    "cn_def": "海平面",
    "en_def": "the average height of the sea's surface",
    "sentence": "The {{BLANK}} around this island has risen by about twenty centimetres, and high tides now reach the main road.",
    "cn": "這座島周圍的海平面上升了約二十公分,現在漲潮時海水已經到達主要道路。"
  },
  {
    "word": "coastline",
    "pos": "n.",
    "cn_def": "海岸線",
    "en_def": "the land along the edge of the sea",
    "sentence": "Taiwan has a long and beautiful {{BLANK}}, but some beaches are disappearing because the sea is rising.",
    "cn": "台灣擁有漫長而美麗的海岸線,但有些海灘正因海平面上升而消失。"
  },
  {
    "word": "coastal",
    "pos": "adj.",
    "cn_def": "沿海的",
    "en_def": "on or near the sea coast",
    "sentence": "Many {{BLANK}} cities are building higher walls, because storms push seawater further inland than before.",
    "cn": "許多沿海城市正在建造更高的牆,因為暴風雨把海水推得比以前更深入內陸。"
  },
  {
    "word": "low-lying",
    "pos": "adj.",
    "cn_def": "地勢低窪的",
    "en_def": "close to sea level",
    "sentence": "The family sold their house in a {{BLANK}} area, because the street flooded every time there was a heavy storm.",
    "cn": "這家人賣掉了他們位在地勢低窪地區的房子,因為每次大暴雨街道都會淹水。"
  },
  {
    "word": "submerge",
    "pos": "v.",
    "cn_def": "淹沒;沉入水中",
    "en_def": "to go or put completely under water",
    "sentence": "Some Pacific islands may be {{BLANK}} by the end of the century, so their governments are already planning for the future.",
    "cn": "一些太平洋島嶼可能在本世紀末被淹沒,所以它們的政府已經在為未來做規劃。"
  },
  {
    "word": "inundate",
    "pos": "v.",
    "cn_def": "淹沒;泛濫",
    "en_def": "to flood an area with water",
    "sentence": "Seawater {{BLANK}} the rice fields during the storm, and the salt made the soil useless for several years.",
    "cn": "暴風雨期間海水淹沒了稻田,而鹽分讓土壤好幾年都無法使用。"
  },
  {
    "word": "tide",
    "pos": "n.",
    "cn_def": "潮汐;潮水",
    "en_def": "the regular rise and fall of the sea",
    "sentence": "When the {{BLANK}} is high and it rains heavily, the drains cannot empty, so the streets of the old town flood.",
    "cn": "當潮水很高又下大雨時,排水溝無法排空,所以老城區的街道就會淹水。"
  },
  {
    "word": "tidal",
    "pos": "adj.",
    "cn_def": "潮汐的",
    "en_def": "connected with the rise and fall of the sea",
    "sentence": "The {{BLANK}} flat near our town is full of crabs and birds, but rising water may cover it completely one day.",
    "cn": "我們鎮附近的潮間灘地充滿了螃蟹和鳥類,但上升的海水有一天可能會把它完全淹沒。"
  },
  {
    "word": "acidification",
    "pos": "n.",
    "cn_def": "酸化",
    "en_def": "the process of becoming more acidic",
    "sentence": "Ocean {{BLANK}} makes it harder for shellfish to build their shells, so oyster farmers are very worried.",
    "cn": "海洋酸化讓貝類更難形成外殼,所以牡蠣養殖戶非常擔心。"
  },
  {
    "word": "acidic",
    "pos": "adj.",
    "cn_def": "酸性的",
    "en_def": "containing acid; sour",
    "sentence": "The sea is becoming more {{BLANK}} because it absorbs carbon dioxide, and this change harms tiny sea creatures.",
    "cn": "海洋因為吸收二氧化碳而變得更酸,這種變化傷害了微小的海洋生物。"
  },
  {
    "word": "bleaching",
    "pos": "n.",
    "cn_def": "(珊瑚)白化",
    "en_def": "the loss of colour in coral when the water is too warm",
    "sentence": "Divers in Kenting saw serious coral {{BLANK}} last summer, because the sea temperature stayed high for weeks.",
    "cn": "去年夏天潛水員在墾丁看到嚴重的珊瑚白化,因為海水溫度連續好幾週居高不下。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "洋流;水流",
    "en_def": "a steady flow of water in one direction",
    "sentence": "Ocean {{BLANK}} carry warm water around the world, and if they slow down, the weather in Europe could change.",
    "cn": "洋流把溫暖的海水帶到世界各地,如果它們減緩,歐洲的天氣可能會改變。"
  },
  {
    "word": "Arctic",
    "pos": "n.",
    "cn_def": "北極地區",
    "en_def": "the area around the North Pole",
    "sentence": "The {{BLANK}} is warming almost four times faster than the rest of the world, so polar bears are losing their hunting grounds.",
    "cn": "北極地區暖化的速度幾乎是世界其他地方的四倍,所以北極熊正在失去牠們的獵食場。"
  },
  {
    "word": "Antarctic",
    "pos": "adj.",
    "cn_def": "南極的",
    "en_def": "connected with the area around the South Pole",
    "sentence": "Scientists live at {{BLANK}} research stations for months, and they study the ice to learn about past climates.",
    "cn": "科學家在南極研究站住上好幾個月,他們研究冰層以了解過去的氣候。"
  },
  {
    "word": "ice cap",
    "pos": "n.phr.",
    "cn_def": "冰帽;冰冠",
    "en_def": "a thick layer of ice covering a large area",
    "sentence": "The polar {{BLANK}} reflect sunlight back into space, but as they shrink, the dark sea absorbs more heat.",
    "cn": "極地冰帽會把陽光反射回太空,但當它們縮小時,深色的海洋就會吸收更多熱。"
  },
  {
    "word": "salinity",
    "pos": "n.",
    "cn_def": "鹽度",
    "en_def": "the amount of salt in water",
    "sentence": "Melting ice lowers the {{BLANK}} of the ocean, and this can change the way water moves around the planet.",
    "cn": "融化的冰會降低海洋的鹽度,而這可能改變海水在地球上流動的方式。"
  },
  {
    "word": "sea ice",
    "pos": "n.phr.",
    "cn_def": "海冰",
    "en_def": "frozen sea water floating on the ocean",
    "sentence": "Polar bears hunt seals on the {{BLANK}}, but it now melts earlier in spring and forms later in autumn.",
    "cn": "北極熊在海冰上獵捕海豹,但現在海冰春天融化得更早,秋天也更晚形成。"
  },
  {
    "word": "thermal expansion",
    "pos": "n.phr.",
    "cn_def": "熱膨脹",
    "en_def": "the way water takes up more space when it gets warmer",
    "sentence": "Part of sea level rise comes from {{BLANK}}, because warm water takes up more space than cold water.",
    "cn": "海平面上升有一部分來自熱膨脹,因為溫暖的水比冷水占據更多空間。"
  },
  {
    "word": "delta",
    "pos": "n.",
    "cn_def": "三角洲",
    "en_def": "flat land where a river divides before entering the sea",
    "sentence": "Millions of people farm in the Mekong {{BLANK}}, but salty seawater is now reaching their rice fields.",
    "cn": "數百萬人在湄公河三角洲務農,但鹹的海水現在已經流進他們的稻田。"
  }
];

const MCQS = [
  {
    "q": "My grandparents visited the _____ forty years ago, and when we went there last summer it was much smaller.",
    "options": [
      "glacier",
      "obligation",
      "Celsius",
      "regime"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ in Greenland is losing billions of tonnes of ice each year, and this water raises the sea.",
    "options": [
      "carbon dioxide",
      "ice sheet",
      "jet stream",
      "water stress"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "A giant _____ broke away from Antarctica last year, and it was bigger than the city of Taipei.",
    "options": [
      "variability",
      "adaptation",
      "metric",
      "iceberg"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "As the _____ melts, roads and houses in northern Russia are sinking, and old gases escape into the air.",
    "options": [
      "climatologist",
      "hazard",
      "permafrost",
      "liability"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The lake used to stay frozen until April, but now it starts to _____ in early March.",
    "options": [
      "evacuate",
      "thaw",
      "mobilise",
      "quantify"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The snow on the mountain _____ earlier every year, so the river has less water in the dry summer months.",
    "options": [
      "enact",
      "hinder",
      "amplify",
      "melt"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Villages in the Himalayas depend on _____ from glaciers, but this supply may disappear within a few decades.",
    "options": [
      "coal",
      "air-conditioning",
      "meltwater",
      "desertification"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The _____ around this island has risen by about twenty centimetres, and high tides now reach the main road.",
    "options": [
      "sea level",
      "carbon footprint",
      "a race against time",
      "carbon sink"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Taiwan has a long and beautiful _____, but some beaches are disappearing because the sea is rising.",
    "options": [
      "hydropower",
      "coastline",
      "altitude",
      "condensation"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Many _____ cities are building higher walls, because storms push seawater further inland than before.",
    "options": [
      "discrete",
      "affordable",
      "coastal",
      "novel"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The family sold their house in a _____ area, because the street flooded every time there was a heavy storm.",
    "options": [
      "conclusive",
      "definitive",
      "unforeseen",
      "low-lying"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Some Pacific islands may be _____ by the end of the century, so their governments are already planning for the future.",
    "options": [
      "submerge",
      "reiterate",
      "devastate",
      "enact"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Seawater _____ the rice fields during the storm, and the salt made the soil useless for several years.",
    "options": [
      "ratify",
      "inundate",
      "combat",
      "replant"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "When the _____ is high and it rains heavily, the drains cannot empty, so the streets of the old town flood.",
    "options": [
      "heatwave",
      "hardship",
      "tide",
      "tornado"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The _____ flat near our town is full of crabs and birds, but rising water may cover it completely one day.",
    "options": [
      "tidal",
      "geothermal",
      "outdated",
      "conclusive"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Ocean _____ makes it harder for shellfish to build their shells, so oyster farmers are very worried.",
    "options": [
      "liability",
      "soot",
      "fertiliser",
      "acidification"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The sea is becoming more _____ because it absorbs carbon dioxide, and this change harms tiny sea creatures.",
    "options": [
      "acidic",
      "homeless",
      "meticulous",
      "stringent"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Divers in Kenting saw serious coral _____ last summer, because the sea temperature stayed high for weeks.",
    "options": [
      "scale",
      "irrigation",
      "thesis",
      "bleaching"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Ocean _____ carry warm water around the world, and if they slow down, the weather in Europe could change.",
    "options": [
      "seawall",
      "latitude",
      "current",
      "successor"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The _____ is warming almost four times faster than the rest of the world, so polar bears are losing their hunting grounds.",
    "options": [
      "surge",
      "Arctic",
      "anomaly",
      "accord"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Scientists live at _____ research stations for months, and they study the ice to learn about past climates.",
    "options": [
      "ultraviolet",
      "simplistic",
      "renewable",
      "Antarctic"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The polar _____ reflect sunlight back into space, but as they shrink, the dark sea absorbs more heat.",
    "options": [
      "contingency plan",
      "ice cap",
      "cooling centre",
      "wind turbine"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Melting ice lowers the _____ of the ocean, and this can change the way water moves around the planet.",
    "options": [
      "salinity",
      "range",
      "disaster",
      "battery"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Polar bears hunt seals on the _____, but it now melts earlier in spring and forms later in autumn.",
    "options": [
      "greenhouse gas",
      "early warning system",
      "sea ice",
      "heat island"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Part of sea level rise comes from _____, because warm water takes up more space than cold water.",
    "options": [
      "thermal expansion",
      "electric vehicle",
      "tipping point",
      "cooling centre"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Millions of people farm in the Mekong _____, but salty seawater is now reaching their rice fields.",
    "options": [
      "anomaly",
      "delta",
      "coal",
      "typhoon"
    ],
    "answer": 1,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "glacier": {
    "pos": "n.",
    "en_def": "a large mass of ice that moves slowly down a mountain",
    "cn_def": "冰河"
  },
  "ice sheet": {
    "pos": "n.phr.",
    "en_def": "a very large, thick layer of ice covering land",
    "cn_def": "冰原;冰蓋"
  },
  "iceberg": {
    "pos": "n.",
    "en_def": "a huge piece of ice floating in the sea",
    "cn_def": "冰山"
  },
  "permafrost": {
    "pos": "n.",
    "en_def": "ground that stays frozen all year",
    "cn_def": "永凍土"
  },
  "thaw": {
    "pos": "v.",
    "en_def": "to change from ice to water; to stop being frozen",
    "cn_def": "解凍;融化"
  },
  "melt": {
    "pos": "v.",
    "en_def": "to change from solid to liquid because of heat",
    "cn_def": "融化"
  },
  "meltwater": {
    "pos": "n.",
    "en_def": "water from melting snow or ice",
    "cn_def": "融水;雪水"
  },
  "sea level": {
    "pos": "n.phr.",
    "en_def": "the average height of the sea's surface",
    "cn_def": "海平面"
  },
  "coastline": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea",
    "cn_def": "海岸線"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the sea coast",
    "cn_def": "沿海的"
  },
  "low-lying": {
    "pos": "adj.",
    "en_def": "close to sea level",
    "cn_def": "地勢低窪的"
  },
  "submerge": {
    "pos": "v.",
    "en_def": "to go or put completely under water",
    "cn_def": "淹沒;沉入水中"
  },
  "inundate": {
    "pos": "v.",
    "en_def": "to flood an area with water",
    "cn_def": "淹沒;泛濫"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea",
    "cn_def": "潮汐;潮水"
  },
  "tidal": {
    "pos": "adj.",
    "en_def": "connected with the rise and fall of the sea",
    "cn_def": "潮汐的"
  },
  "acidification": {
    "pos": "n.",
    "en_def": "the process of becoming more acidic",
    "cn_def": "酸化"
  },
  "acidic": {
    "pos": "adj.",
    "en_def": "containing acid; sour",
    "cn_def": "酸性的"
  },
  "bleaching": {
    "pos": "n.",
    "en_def": "the loss of colour in coral when the water is too warm",
    "cn_def": "(珊瑚)白化"
  },
  "current": {
    "pos": "n.",
    "en_def": "a steady flow of water in one direction",
    "cn_def": "洋流;水流"
  },
  "arctic": {
    "pos": "n.",
    "en_def": "the area around the North Pole",
    "cn_def": "北極地區"
  },
  "antarctic": {
    "pos": "adj.",
    "en_def": "connected with the area around the South Pole",
    "cn_def": "南極的"
  },
  "ice cap": {
    "pos": "n.phr.",
    "en_def": "a thick layer of ice covering a large area",
    "cn_def": "冰帽;冰冠"
  },
  "salinity": {
    "pos": "n.",
    "en_def": "the amount of salt in water",
    "cn_def": "鹽度"
  },
  "sea ice": {
    "pos": "n.phr.",
    "en_def": "frozen sea water floating on the ocean",
    "cn_def": "海冰"
  },
  "thermal expansion": {
    "pos": "n.phr.",
    "en_def": "the way water takes up more space when it gets warmer",
    "cn_def": "熱膨脹"
  },
  "delta": {
    "pos": "n.",
    "en_def": "flat land where a river divides before entering the sea",
    "cn_def": "三角洲"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law or promise",
    "cn_def": "義務;責任"
  },
  "celsius": {
    "pos": "n.",
    "en_def": "a scale for measuring temperature where water freezes at 0",
    "cn_def": "攝氏"
  },
  "regime": {
    "pos": "n.",
    "en_def": "a system of rules or government",
    "cn_def": "體制;制度"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "the gas CO2, produced when fuel is burned",
    "cn_def": "二氧化碳"
  },
  "jet stream": {
    "pos": "n.phr.",
    "en_def": "a strong, fast wind high in the sky",
    "cn_def": "噴射氣流"
  },
  "water stress": {
    "pos": "n.phr.",
    "en_def": "when people need more water than is available",
    "cn_def": "缺水壓力;水資源壓力"
  },
  "variability": {
    "pos": "n.",
    "en_def": "the quality of changing often",
    "cn_def": "變化性;變異性"
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a change made to deal with new conditions",
    "cn_def": "調適;適應"
  },
  "metric": {
    "pos": "n.",
    "en_def": "a way of measuring something",
    "cn_def": "指標;衡量標準"
  },
  "climatologist": {
    "pos": "n.",
    "en_def": "a scientist who studies climate over long periods",
    "cn_def": "氣候學家"
  },
  "hazard": {
    "pos": "n.",
    "en_def": "something that may be dangerous",
    "cn_def": "危險;危害"
  },
  "liability": {
    "pos": "n.",
    "en_def": "legal responsibility for something",
    "cn_def": "(法律)責任"
  },
  "evacuate": {
    "pos": "v.",
    "en_def": "to move people away from a dangerous place",
    "cn_def": "撤離;疏散"
  },
  "mobilise": {
    "pos": "v.",
    "en_def": "to organise people or resources for action",
    "cn_def": "動員"
  },
  "quantify": {
    "pos": "v.",
    "en_def": "to measure something as a number",
    "cn_def": "量化"
  },
  "enact": {
    "pos": "v.",
    "en_def": "to make a law",
    "cn_def": "制定(法律);頒布"
  },
  "hinder": {
    "pos": "v.",
    "en_def": "to make it difficult for something to happen",
    "cn_def": "阻礙"
  },
  "amplify": {
    "pos": "v.",
    "en_def": "to make something stronger or more serious",
    "cn_def": "放大;增強"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black rock burned to make heat or electricity",
    "cn_def": "煤"
  },
  "air-conditioning": {
    "pos": "n.",
    "en_def": "a system that keeps the air in a building cool",
    "cn_def": "空調;冷氣"
  },
  "desertification": {
    "pos": "n.",
    "en_def": "the process of land slowly becoming desert",
    "cn_def": "沙漠化"
  },
  "carbon footprint": {
    "pos": "n.phr.",
    "en_def": "the amount of carbon a person or activity produces",
    "cn_def": "碳足跡"
  },
  "a race against time": {
    "pos": "n.phr.",
    "en_def": "a situation where you must work very fast to finish before it is too late",
    "cn_def": "與時間賽跑"
  },
  "carbon sink": {
    "pos": "n.phr.",
    "en_def": "a forest, ocean or soil that takes in more carbon than it gives out",
    "cn_def": "碳匯"
  },
  "hydropower": {
    "pos": "n.",
    "en_def": "electricity made from moving water",
    "cn_def": "水力發電"
  },
  "altitude": {
    "pos": "n.",
    "en_def": "the height of a place above sea level",
    "cn_def": "海拔;高度"
  },
  "condensation": {
    "pos": "n.",
    "en_def": "water drops that form when warm air touches something cold",
    "cn_def": "凝結(水珠)"
  },
  "discrete": {
    "pos": "adj.",
    "en_def": "clearly separate",
    "cn_def": "分離的;個別的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "cheap enough for most people to buy",
    "cn_def": "負擔得起的"
  },
  "novel": {
    "pos": "adj.",
    "en_def": "new and different",
    "cn_def": "新穎的"
  },
  "conclusive": {
    "pos": "adj.",
    "en_def": "proving something without doubt",
    "cn_def": "確鑿的;決定性的"
  },
  "definitive": {
    "pos": "adj.",
    "en_def": "final and not able to be changed",
    "cn_def": "明確的;決定性的"
  },
  "unforeseen": {
    "pos": "adj.",
    "en_def": "not expected or predicted",
    "cn_def": "未預見的;意料之外的"
  },
  "reiterate": {
    "pos": "v.",
    "en_def": "to say something again for emphasis",
    "cn_def": "重申"
  },
  "devastate": {
    "pos": "v.",
    "en_def": "to destroy or damage something very badly",
    "cn_def": "摧毀;使荒廢"
  },
  "ratify": {
    "pos": "v.",
    "en_def": "to make an agreement official by signing or voting",
    "cn_def": "正式批准"
  },
  "combat": {
    "pos": "v.",
    "en_def": "to try to stop something harmful",
    "cn_def": "對抗;打擊"
  },
  "replant": {
    "pos": "v.",
    "en_def": "to plant again",
    "cn_def": "重新種植;補種"
  },
  "heatwave": {
    "pos": "n.",
    "en_def": "a period of unusually hot weather",
    "cn_def": "熱浪"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a difficult situation, often without enough money or food",
    "cn_def": "苦難;困境"
  },
  "tornado": {
    "pos": "n.",
    "en_def": "a narrow, spinning column of wind that destroys things",
    "cn_def": "龍捲風"
  },
  "geothermal": {
    "pos": "adj.",
    "en_def": "using heat from inside the Earth",
    "cn_def": "地熱的"
  },
  "outdated": {
    "pos": "adj.",
    "en_def": "old and no longer useful",
    "cn_def": "過時的"
  },
  "soot": {
    "pos": "n.",
    "en_def": "black powder made when something is burned",
    "cn_def": "煤灰;煙灰"
  },
  "fertiliser": {
    "pos": "n.",
    "en_def": "a substance added to soil to help plants grow",
    "cn_def": "肥料"
  },
  "homeless": {
    "pos": "adj.",
    "en_def": "having no place to live",
    "cn_def": "無家可歸的"
  },
  "meticulous": {
    "pos": "adj.",
    "en_def": "very careful about details",
    "cn_def": "一絲不苟的;細心的"
  },
  "stringent": {
    "pos": "adj.",
    "en_def": "very strict",
    "cn_def": "嚴格的"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the size or level of something",
    "cn_def": "規模"
  },
  "irrigation": {
    "pos": "n.",
    "en_def": "supplying water to land so crops can grow",
    "cn_def": "灌溉"
  },
  "thesis": {
    "pos": "n.",
    "en_def": "a long piece of writing for a university degree",
    "cn_def": "論文"
  },
  "seawall": {
    "pos": "n.",
    "en_def": "a strong wall built to stop the sea from flooding land",
    "cn_def": "海堤"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "successor": {
    "pos": "n.",
    "en_def": "a person or thing that comes after another",
    "cn_def": "繼任者;後繼者"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden large increase",
    "cn_def": "激增;暴增"
  },
  "anomaly": {
    "pos": "n.",
    "en_def": "something that is different from what is normal",
    "cn_def": "異常(現象)"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "ultraviolet": {
    "pos": "adj.",
    "en_def": "describing invisible light from the sun that can burn skin",
    "cn_def": "紫外線的"
  },
  "simplistic": {
    "pos": "adj.",
    "en_def": "treating a problem as simpler than it really is",
    "cn_def": "過度簡化的"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "able to be replaced naturally, like sun and wind",
    "cn_def": "可再生的"
  },
  "contingency plan": {
    "pos": "n.phr.",
    "en_def": "a plan for what to do if something goes wrong",
    "cn_def": "應變計畫"
  },
  "cooling centre": {
    "pos": "n.phr.",
    "en_def": "a public place where people can escape extreme heat",
    "cn_def": "避暑中心;降溫中心"
  },
  "wind turbine": {
    "pos": "n.phr.",
    "en_def": "a tall machine that uses wind to make electricity",
    "cn_def": "風力發電機"
  },
  "range": {
    "pos": "n.",
    "en_def": "the area where a plant or animal lives",
    "cn_def": "分布範圍"
  },
  "disaster": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "災難"
  },
  "battery": {
    "pos": "n.",
    "en_def": "a device that stores electricity",
    "cn_def": "電池"
  },
  "greenhouse gas": {
    "pos": "n.phr.",
    "en_def": "a gas that traps heat in the atmosphere",
    "cn_def": "溫室氣體"
  },
  "early warning system": {
    "pos": "n.phr.",
    "en_def": "a system that tells people about danger before it arrives",
    "cn_def": "預警系統"
  },
  "heat island": {
    "pos": "n.phr.",
    "en_def": "a city area much warmer than the countryside around it",
    "cn_def": "熱島"
  },
  "electric vehicle": {
    "pos": "n.phr.",
    "en_def": "a car or scooter that runs on a battery",
    "cn_def": "電動車"
  },
  "tipping point": {
    "pos": "n.phr.",
    "en_def": "the moment when a small change causes a big, sudden effect",
    "cn_def": "臨界點;轉捩點"
  },
  "typhoon": {
    "pos": "n.",
    "en_def": "a violent tropical storm in the western Pacific",
    "cn_def": "颱風"
  }
};

const EXTRA_GLOSSES = {};
