// Topic 4 Subunit 1 Quiz Data: Ocean Zones & Geography 海洋分區與地理
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S01 - Ocean Zones & Geography 海洋分區與地理",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "seabed",
    "pos": "n.",
    "cn_def": "海床",
    "en_def": "the ground at the bottom of the sea",
    "sentence": "The divers found an old anchor lying on the sandy {{BLANK}}, and they carefully brought it up to the boat.",
    "cn": "潛水員在沙質的海床上發現一個老舊的錨,他們小心地把它帶上船。"
  },
  {
    "word": "trench",
    "pos": "n.",
    "cn_def": "海溝",
    "en_def": "a very deep, narrow valley in the ocean floor",
    "sentence": "The Mariana {{BLANK}} is deeper than Mount Everest is tall, so very few people have ever reached its bottom.",
    "cn": "馬里亞納海溝比聖母峰還要深,所以極少有人曾到達它的底部。"
  },
  {
    "word": "abyss",
    "pos": "n.",
    "cn_def": "深淵",
    "en_def": "a very deep place that seems to have no bottom",
    "sentence": "The documentary showed strange fish living in the dark {{BLANK}}, where sunlight never reaches and the water is freezing cold.",
    "cn": "這部紀錄片介紹了住在黑暗深淵裡的奇特魚類,那裡陽光永遠照不到,而且海水冰冷刺骨。"
  },
  {
    "word": "abyssal",
    "pos": "adj.",
    "cn_def": "深海底層的",
    "en_def": "found in the deepest parts of the ocean",
    "sentence": "Scientists know very little about {{BLANK}} animals because they live thousands of metres down, and their habitat is hard to reach.",
    "cn": "科學家對深海底層的動物所知甚少,因為牠們住在數千公尺深的地方,而且牠們的棲地很難抵達。"
  },
  {
    "word": "continental shelf",
    "pos": "n.phr.",
    "cn_def": "大陸棚",
    "en_def": "the shallow sea floor near the edge of a continent",
    "sentence": "Most fish are caught on the {{BLANK}} because the water there is shallow, and sunlight helps plants and plankton grow.",
    "cn": "大部分的魚是在大陸棚捕獲的,因為那裡的海水較淺,而且陽光能幫助植物和浮游生物生長。"
  },
  {
    "word": "ridge",
    "pos": "n.",
    "cn_def": "海脊;山脊",
    "en_def": "a long, narrow line of high land or mountains",
    "sentence": "A huge underwater {{BLANK}} runs through the middle of the Atlantic, and new sea floor slowly forms along it.",
    "cn": "一條巨大的海底海脊貫穿大西洋中部,新的海床沿著它慢慢形成。"
  },
  {
    "word": "basin",
    "pos": "n.",
    "cn_def": "盆地;海盆",
    "en_def": "a large, low area of land or sea floor shaped like a bowl",
    "sentence": "The Pacific Ocean {{BLANK}} is the largest on Earth, and it covers almost one third of the planet's surface.",
    "cn": "太平洋海盆是地球上最大的,它幾乎覆蓋了地球表面的三分之一。"
  },
  {
    "word": "seamount",
    "pos": "n.",
    "cn_def": "海底山",
    "en_def": "an underwater mountain that does not reach the surface",
    "sentence": "Sharks often gather around a {{BLANK}} because food is plentiful there, so fishermen like to visit these underwater mountains.",
    "cn": "鯊魚常常聚集在海底山附近,因為那裡食物豐富,所以漁民喜歡造訪這些海底山。"
  },
  {
    "word": "strait",
    "pos": "n.",
    "cn_def": "海峽",
    "en_def": "a narrow area of sea that joins two larger seas",
    "sentence": "Ferries cross the Taiwan {{BLANK}} every day, but the trip can be rough when strong winds blow in winter.",
    "cn": "渡輪每天橫越台灣海峽,但冬天颳強風時航程可能會很顛簸。"
  },
  {
    "word": "gulf",
    "pos": "n.",
    "cn_def": "海灣(大型)",
    "en_def": "a large area of sea mostly surrounded by land",
    "sentence": "Many oil platforms stand in the {{BLANK}} of Mexico, and they have caused serious pollution after accidents in the past.",
    "cn": "墨西哥灣有許多石油平台,而且它們過去在意外發生後造成了嚴重的污染。"
  },
  {
    "word": "bay",
    "pos": "n.",
    "cn_def": "海灣",
    "en_def": "a part of the sea that curves into the land",
    "sentence": "We rented kayaks and paddled around the quiet {{BLANK}}, while our parents relaxed on the beach and read their books.",
    "cn": "我們租了獨木舟在寧靜的海灣划船,而我們的父母則在海灘上放鬆看書。"
  },
  {
    "word": "lagoon",
    "pos": "n.",
    "cn_def": "潟湖",
    "en_def": "an area of calm sea water separated from the ocean by sand or reef",
    "sentence": "The water in the {{BLANK}} is calm and warm, so it is a safe place for children to swim and snorkel.",
    "cn": "潟湖裡的海水平靜又溫暖,所以對孩子來說是游泳和浮潛的安全地方。"
  },
  {
    "word": "inlet",
    "pos": "n.",
    "cn_def": "小海灣;水灣",
    "en_def": "a narrow area of water that goes into the land from the sea",
    "sentence": "Small fishing boats hide in the {{BLANK}} during typhoons, because the hills around it block the strongest winds.",
    "cn": "颱風期間小漁船會躲在小海灣裡,因為周圍的山丘能擋住最強的風。"
  },
  {
    "word": "peninsula",
    "pos": "n.",
    "cn_def": "半島",
    "en_def": "land almost surrounded by water but joined to a larger area",
    "sentence": "Hengchun is on a {{BLANK}} in southern Taiwan, so visitors can see the sea on three sides of the town.",
    "cn": "恆春位在台灣南部的一個半島上,所以遊客可以在小鎮的三面看見大海。"
  },
  {
    "word": "archipelago",
    "pos": "n.",
    "cn_def": "群島",
    "en_def": "a group of many islands",
    "sentence": "The Philippines is a large {{BLANK}} of over 7,000 islands, and many people travel between them by boat.",
    "cn": "菲律賓是一個由超過七千座島嶼組成的大群島,許多人搭船往返於島嶼之間。"
  },
  {
    "word": "atoll",
    "pos": "n.",
    "cn_def": "環礁",
    "en_def": "a ring-shaped coral island around a lagoon",
    "sentence": "The tiny {{BLANK}} is only two metres above the sea, so rising water is a serious danger for the people living there.",
    "cn": "這個小環礁只高出海面兩公尺,所以上升的海水對住在那裡的人是嚴重的危險。"
  },
  {
    "word": "shoreline",
    "pos": "n.",
    "cn_def": "海岸線",
    "en_def": "the edge of the sea where it meets the land",
    "sentence": "Volunteers walked along the {{BLANK}} for three hours, and they collected more than fifty bags of rubbish.",
    "cn": "志工們沿著海岸線走了三個小時,他們收集了超過五十袋垃圾。"
  },
  {
    "word": "shallows",
    "pos": "n.",
    "cn_def": "淺灘;淺水區",
    "en_def": "an area of shallow water",
    "sentence": "Young fish stay in the {{BLANK}} near the beach because big predators cannot easily follow them there.",
    "cn": "幼魚待在海灘附近的淺水區,因為大型掠食者不容易跟著牠們到那裡。"
  },
  {
    "word": "depth",
    "pos": "n.",
    "cn_def": "深度",
    "en_def": "how deep something is",
    "sentence": "The submarine reached a {{BLANK}} of 3,000 metres, but the crew had to return because the battery was getting low.",
    "cn": "潛水艇到達了三千公尺的深度,但組員必須返航,因為電池電量越來越低。"
  },
  {
    "word": "surface",
    "pos": "n.",
    "cn_def": "表面;水面",
    "en_def": "the top layer of water or land",
    "sentence": "The whale came up to the {{BLANK}} to breathe, and everyone on the boat cheered when they saw its huge tail.",
    "cn": "那頭鯨魚浮上水面呼吸,船上的每個人看到牠巨大的尾巴時都歡呼了起來。"
  },
  {
    "word": "sunlit",
    "pos": "adj.",
    "cn_def": "陽光照射的",
    "en_def": "receiving light from the sun",
    "sentence": "Most ocean life lives in the {{BLANK}} top layer of the sea, because plants there can use light to make food.",
    "cn": "大部分的海洋生物生活在海洋陽光照射的最上層,因為那裡的植物能利用光來製造食物。"
  },
  {
    "word": "twilight zone",
    "pos": "n.phr.",
    "cn_def": "中層帶;暮光帶",
    "en_def": "the dim ocean layer between about 200 and 1,000 metres deep",
    "sentence": "Very little light reaches the {{BLANK}}, so many fish there have huge eyes to help them see.",
    "cn": "極少光線能到達暮光帶,所以那裡的許多魚有巨大的眼睛幫助牠們看見東西。"
  },
  {
    "word": "hydrothermal vent",
    "pos": "n.phr.",
    "cn_def": "熱泉噴口",
    "en_def": "a crack in the sea floor that lets out very hot water",
    "sentence": "Scientists were surprised to find crabs and worms living near a {{BLANK}}, although the water there was extremely hot.",
    "cn": "科學家驚訝地發現螃蟹和蠕蟲生活在熱泉噴口附近,儘管那裡的水極度炙熱。"
  },
  {
    "word": "upwelling",
    "pos": "n.",
    "cn_def": "湧升流",
    "en_def": "the rising of cold, deep water to the surface",
    "sentence": "{{BLANK}} brings cold, nutrient-rich water to the surface, so the area becomes an excellent place for fishing.",
    "cn": "湧升流把寒冷、富含養分的海水帶到表面,所以這個區域成為絕佳的漁場。"
  },
  {
    "word": "gyre",
    "pos": "n.",
    "cn_def": "環流",
    "en_def": "a large system of circular ocean currents",
    "sentence": "Floating rubbish gets trapped in the North Pacific {{BLANK}}, and it slowly forms a huge area of plastic waste.",
    "cn": "漂浮的垃圾被困在北太平洋環流中,而且慢慢形成一大片塑膠垃圾區。"
  },
  {
    "word": "swell",
    "pos": "n.",
    "cn_def": "湧浪",
    "en_def": "long, smooth waves caused by distant winds",
    "sentence": "Surfers were excited about the big {{BLANK}} that arrived after the storm, but the lifeguards warned beginners to stay out.",
    "cn": "衝浪者對暴風雨過後來的大湧浪感到興奮,但救生員警告初學者不要下水。"
  },
  {
    "word": "undertow",
    "pos": "n.",
    "cn_def": "退浪;底流",
    "en_def": "a strong current under the surface that pulls water away from the shore",
    "sentence": "The beach looked calm, but a dangerous {{BLANK}} pulled the swimmer away from the shore, so a lifeguard had to rescue him.",
    "cn": "海灘看起來很平靜,但危險的底流把泳客拉離岸邊,所以救生員必須救他。"
  },
  {
    "word": "tsunami",
    "pos": "n.",
    "cn_def": "海嘯",
    "en_def": "a very large wave caused by an earthquake under the sea",
    "sentence": "After the earthquake, a {{BLANK}} warning was sent to everyone's phones, and families quickly moved to higher ground.",
    "cn": "地震之後,海嘯警報發送到每個人的手機,家家戶戶迅速移往高處。"
  },
  {
    "word": "offshore",
    "pos": "adj.",
    "cn_def": "離岸的;近海的",
    "en_def": "located in the sea, away from the coast",
    "sentence": "The government plans to build more {{BLANK}} wind farms, because the wind at sea is stronger and more reliable.",
    "cn": "政府計畫興建更多離岸風場,因為海上的風更強、更穩定。"
  },
  {
    "word": "inshore",
    "pos": "adj.",
    "cn_def": "近岸的",
    "en_def": "in the sea but close to the land",
    "sentence": "{{BLANK}} fishing boats are small, so they usually stay close to the coast and return to the harbour every evening.",
    "cn": "近岸漁船很小,所以通常待在海岸附近,而且每天傍晚返回港口。"
  },
  {
    "word": "maritime",
    "pos": "adj.",
    "cn_def": "海事的;航海的",
    "en_def": "connected with the sea or ships",
    "sentence": "Taiwan has a long {{BLANK}} history, and the museum in Keelung shows how people traded by sea centuries ago.",
    "cn": "台灣有悠久的海洋歷史,而基隆的博物館展示了幾百年前人們如何透過海路貿易。"
  },
  {
    "word": "oceanic",
    "pos": "adj.",
    "cn_def": "海洋的",
    "en_def": "relating to the ocean",
    "sentence": "{{BLANK}} islands like Hawaii were formed by volcanoes, so their plants and animals arrived from far away.",
    "cn": "像夏威夷這樣的海洋島嶼是由火山形成的,所以島上的動植物是從遠方來的。"
  },
  {
    "word": "cove",
    "pos": "n.",
    "cn_def": "小海灣",
    "en_def": "a small, sheltered bay",
    "sentence": "We found a hidden {{BLANK}} with clear blue water, and we spent the whole afternoon swimming there without other tourists.",
    "cn": "我們發現了一個海水清澈湛藍的隱密小海灣,整個下午都在那裡游泳,沒有其他遊客。"
  },
  {
    "word": "high seas",
    "pos": "n.phr.",
    "cn_def": "公海",
    "en_def": "the open ocean that no country controls",
    "sentence": "Fishing on the {{BLANK}} is hard to control because no single country owns those waters.",
    "cn": "在公海捕魚很難管控,因為沒有任何單一國家擁有那片水域。"
  }
];

const MCQS = [
  {
    "q": "The divers found an old anchor lying on the sandy _____, and they carefully brought it up to the boat.",
    "options": [
      "clownfish",
      "starfish",
      "seabed",
      "shoal"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The Mariana _____ is deeper than Mount Everest is tall, so very few people have ever reached its bottom.",
    "options": [
      "incident",
      "eutrophication",
      "penguin",
      "trench"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The documentary showed strange fish living in the dark _____, where sunlight never reaches and the water is freezing cold.",
    "options": [
      "abyss",
      "fallacy",
      "momentum",
      "mercury"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Scientists know very little about _____ animals because they live thousands of metres down, and their habitat is hard to reach.",
    "options": [
      "deep-sea",
      "abyssal",
      "vast",
      "abrupt"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Most fish are caught on the _____ because the water there is shallow, and sunlight helps plants and plankton grow.",
    "options": [
      "sea cucumber",
      "food web",
      "continental shelf",
      "scuba diving"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "A huge underwater _____ runs through the middle of the Atlantic, and new sea floor slowly forms along it.",
    "options": [
      "lifeguard",
      "ridge",
      "medium",
      "momentum"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The Pacific Ocean _____ is the largest on Earth, and it covers almost one third of the planet's surface.",
    "options": [
      "basin",
      "mercury",
      "satellite",
      "microplastic"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Sharks often gather around a _____ because food is plentiful there, so fishermen like to visit these underwater mountains.",
    "options": [
      "proximity",
      "packaging",
      "tanker",
      "seamount"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Ferries cross the Taiwan _____ every day, but the trip can be rough when strong winds blow in winter.",
    "options": [
      "efficacy",
      "strait",
      "plankton",
      "symbiosis"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Many oil platforms stand in the _____ of Mexico, and they have caused serious pollution after accidents in the past.",
    "options": [
      "gulf",
      "symbiosis",
      "shell",
      "configuration"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "We rented kayaks and paddled around the quiet _____, while our parents relaxed on the beach and read their books.",
    "options": [
      "runoff",
      "krill",
      "bay",
      "freight"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The water in the _____ is calm and warm, so it is a safe place for children to swim and snorkel.",
    "options": [
      "seaweed",
      "advent",
      "lighthouse",
      "lagoon"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Small fishing boats hide in the _____ during typhoons, because the hills around it block the strongest winds.",
    "options": [
      "sponge",
      "inlet",
      "shoal",
      "whale"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Hengchun is on a _____ in southern Taiwan, so visitors can see the sea on three sides of the town.",
    "options": [
      "counterpart",
      "pier",
      "peninsula",
      "expedition"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The Philippines is a large _____ of over 7,000 islands, and many people travel between them by boat.",
    "options": [
      "whaling",
      "tanker",
      "larva",
      "archipelago"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The tiny _____ is only two metres above the sea, so rising water is a serious danger for the people living there.",
    "options": [
      "atoll",
      "diver",
      "navigation",
      "skeleton"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Volunteers walked along the _____ for three hours, and they collected more than fifty bags of rubbish.",
    "options": [
      "nodule",
      "seafood",
      "resurgence",
      "shoreline"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Young fish stay in the _____ near the beach because big predators cannot easily follow them there.",
    "options": [
      "diver",
      "shallows",
      "lobster",
      "shellfish"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The submarine reached a _____ of 3,000 metres, but the crew had to return because the battery was getting low.",
    "options": [
      "depth",
      "nursery",
      "straw",
      "harbour"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The whale came up to the _____ to breathe, and everyone on the boat cheered when they saw its huge tail.",
    "options": [
      "endeavour",
      "wetsuit",
      "surface",
      "shrimp"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Most ocean life lives in the _____ top layer of the sea, because plants there can use light to make food.",
    "options": [
      "sunlit",
      "vigilant",
      "frugal",
      "burgeoning"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Very little light reaches the _____, so many fish there have huge eyes to help them see.",
    "options": [
      "fish farm",
      "fish stock",
      "twilight zone",
      "water pressure"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Scientists were surprised to find crabs and worms living near a _____, although the water there was extremely hot.",
    "options": [
      "plastic pollution",
      "hydrothermal vent",
      "food web",
      "fish farm"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "_____ brings cold, nutrient-rich water to the surface, so the area becomes an excellent place for fishing.",
    "options": [
      "submarine",
      "diver",
      "polyp",
      "upwelling"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Floating rubbish gets trapped in the North Pacific _____, and it slowly forms a huge area of plastic waste.",
    "options": [
      "counterpart",
      "nursery",
      "gyre",
      "satellite"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Surfers were excited about the big _____ that arrived after the storm, but the lifeguards warned beginners to stay out.",
    "options": [
      "surplus",
      "krill",
      "harpoon",
      "swell"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The beach looked calm, but a dangerous _____ pulled the swimmer away from the shore, so a lifeguard had to rescue him.",
    "options": [
      "probe",
      "undertow",
      "sewage",
      "seabird"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "After the earthquake, a _____ warning was sent to everyone's phones, and families quickly moved to higher ground.",
    "options": [
      "tsunami",
      "dearth",
      "inventory",
      "seal"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The government plans to build more _____ wind farms, because the wind at sea is stronger and more reliable.",
    "options": [
      "subtle",
      "imperative",
      "offshore",
      "pristine"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "_____ fishing boats are small, so they usually stay close to the coast and return to the harbour every evening.",
    "options": [
      "inshore",
      "prudent",
      "obscure",
      "meagre"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Taiwan has a long _____ history, and the museum in Keelung shows how people traded by sea centuries ago.",
    "options": [
      "appreciable",
      "turbulent",
      "pertinent",
      "maritime"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "_____ islands like Hawaii were formed by volcanoes, so their plants and animals arrived from far away.",
    "options": [
      "burgeoning",
      "oceanic",
      "concise",
      "analogous"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "We found a hidden _____ with clear blue water, and we spent the whole afternoon swimming there without other tourists.",
    "options": [
      "shipwreck",
      "zooplankton",
      "mollusc",
      "cove"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Fishing on the _____ is hard to control because no single country owns those waters.",
    "options": [
      "high seas",
      "shipping lane",
      "oil spill",
      "fish farm"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "seabed": {
    "pos": "n.",
    "en_def": "the ground at the bottom of the sea",
    "cn_def": "海床"
  },
  "trench": {
    "pos": "n.",
    "en_def": "a very deep, narrow valley in the ocean floor",
    "cn_def": "海溝"
  },
  "abyss": {
    "pos": "n.",
    "en_def": "a very deep place that seems to have no bottom",
    "cn_def": "深淵"
  },
  "abyssal": {
    "pos": "adj.",
    "en_def": "found in the deepest parts of the ocean",
    "cn_def": "深海底層的"
  },
  "continental shelf": {
    "pos": "n.phr.",
    "en_def": "the shallow sea floor near the edge of a continent",
    "cn_def": "大陸棚"
  },
  "ridge": {
    "pos": "n.",
    "en_def": "a long, narrow line of high land or mountains",
    "cn_def": "海脊;山脊"
  },
  "basin": {
    "pos": "n.",
    "en_def": "a large, low area of land or sea floor shaped like a bowl",
    "cn_def": "盆地;海盆"
  },
  "seamount": {
    "pos": "n.",
    "en_def": "an underwater mountain that does not reach the surface",
    "cn_def": "海底山"
  },
  "strait": {
    "pos": "n.",
    "en_def": "a narrow area of sea that joins two larger seas",
    "cn_def": "海峽"
  },
  "gulf": {
    "pos": "n.",
    "en_def": "a large area of sea mostly surrounded by land",
    "cn_def": "海灣(大型)"
  },
  "bay": {
    "pos": "n.",
    "en_def": "a part of the sea that curves into the land",
    "cn_def": "海灣"
  },
  "lagoon": {
    "pos": "n.",
    "en_def": "an area of calm sea water separated from the ocean by sand or reef",
    "cn_def": "潟湖"
  },
  "inlet": {
    "pos": "n.",
    "en_def": "a narrow area of water that goes into the land from the sea",
    "cn_def": "小海灣;水灣"
  },
  "peninsula": {
    "pos": "n.",
    "en_def": "land almost surrounded by water but joined to a larger area",
    "cn_def": "半島"
  },
  "archipelago": {
    "pos": "n.",
    "en_def": "a group of many islands",
    "cn_def": "群島"
  },
  "atoll": {
    "pos": "n.",
    "en_def": "a ring-shaped coral island around a lagoon",
    "cn_def": "環礁"
  },
  "shoreline": {
    "pos": "n.",
    "en_def": "the edge of the sea where it meets the land",
    "cn_def": "海岸線"
  },
  "shallows": {
    "pos": "n.",
    "en_def": "an area of shallow water",
    "cn_def": "淺灘;淺水區"
  },
  "depth": {
    "pos": "n.",
    "en_def": "how deep something is",
    "cn_def": "深度"
  },
  "surface": {
    "pos": "n.",
    "en_def": "the top layer of water or land",
    "cn_def": "表面;水面"
  },
  "sunlit": {
    "pos": "adj.",
    "en_def": "receiving light from the sun",
    "cn_def": "陽光照射的"
  },
  "twilight zone": {
    "pos": "n.phr.",
    "en_def": "the dim ocean layer between about 200 and 1,000 metres deep",
    "cn_def": "中層帶;暮光帶"
  },
  "hydrothermal vent": {
    "pos": "n.phr.",
    "en_def": "a crack in the sea floor that lets out very hot water",
    "cn_def": "熱泉噴口"
  },
  "upwelling": {
    "pos": "n.",
    "en_def": "the rising of cold, deep water to the surface",
    "cn_def": "湧升流"
  },
  "gyre": {
    "pos": "n.",
    "en_def": "a large system of circular ocean currents",
    "cn_def": "環流"
  },
  "swell": {
    "pos": "n.",
    "en_def": "long, smooth waves caused by distant winds",
    "cn_def": "湧浪"
  },
  "undertow": {
    "pos": "n.",
    "en_def": "a strong current under the surface that pulls water away from the shore",
    "cn_def": "退浪;底流"
  },
  "tsunami": {
    "pos": "n.",
    "en_def": "a very large wave caused by an earthquake under the sea",
    "cn_def": "海嘯"
  },
  "offshore": {
    "pos": "adj.",
    "en_def": "located in the sea, away from the coast",
    "cn_def": "離岸的;近海的"
  },
  "inshore": {
    "pos": "adj.",
    "en_def": "in the sea but close to the land",
    "cn_def": "近岸的"
  },
  "maritime": {
    "pos": "adj.",
    "en_def": "connected with the sea or ships",
    "cn_def": "海事的;航海的"
  },
  "oceanic": {
    "pos": "adj.",
    "en_def": "relating to the ocean",
    "cn_def": "海洋的"
  },
  "cove": {
    "pos": "n.",
    "en_def": "a small, sheltered bay",
    "cn_def": "小海灣"
  },
  "high seas": {
    "pos": "n.phr.",
    "en_def": "the open ocean that no country controls",
    "cn_def": "公海"
  },
  "clownfish": {
    "pos": "n.",
    "en_def": "a small orange and white fish that lives in anemones",
    "cn_def": "小丑魚"
  },
  "starfish": {
    "pos": "n.",
    "en_def": "a flat sea animal shaped like a star",
    "cn_def": "海星"
  },
  "shoal": {
    "pos": "n.",
    "en_def": "a large group of fish swimming together",
    "cn_def": "魚群"
  },
  "incident": {
    "pos": "n.",
    "en_def": "an event, especially an unusual or unpleasant one",
    "cn_def": "事件;事故"
  },
  "eutrophication": {
    "pos": "n.",
    "en_def": "too many nutrients in water, which causes plants to grow too much",
    "cn_def": "優養化"
  },
  "penguin": {
    "pos": "n.",
    "en_def": "a black and white sea bird that cannot fly but swims well",
    "cn_def": "企鵝"
  },
  "fallacy": {
    "pos": "n.",
    "en_def": "a false idea that many people believe",
    "cn_def": "謬誤;錯誤觀念"
  },
  "momentum": {
    "pos": "n.",
    "en_def": "the force that keeps something moving or developing",
    "cn_def": "動力;氣勢"
  },
  "mercury": {
    "pos": "n.",
    "en_def": "a poisonous silver metal that can build up in fish",
    "cn_def": "汞;水銀"
  },
  "deep-sea": {
    "pos": "adj.",
    "en_def": "found or happening in the deepest parts of the ocean",
    "cn_def": "深海的"
  },
  "vast": {
    "pos": "adj.",
    "en_def": "extremely large",
    "cn_def": "廣大的;巨大的"
  },
  "abrupt": {
    "pos": "adj.",
    "en_def": "sudden and unexpected",
    "cn_def": "突然的"
  },
  "sea cucumber": {
    "pos": "n.phr.",
    "en_def": "a soft sea animal shaped like a cucumber that lives on the sea floor",
    "cn_def": "海參"
  },
  "food web": {
    "pos": "n.phr.",
    "en_def": "the network of who eats whom in an ecosystem",
    "cn_def": "食物網"
  },
  "scuba diving": {
    "pos": "n.phr.",
    "en_def": "swimming deep underwater with an air tank",
    "cn_def": "水肺潛水"
  },
  "lifeguard": {
    "pos": "n.",
    "en_def": "a person whose job is to watch and rescue swimmers",
    "cn_def": "救生員"
  },
  "medium": {
    "pos": "n.",
    "en_def": "a way of communicating or expressing something",
    "cn_def": "媒介;媒體"
  },
  "satellite": {
    "pos": "n.",
    "en_def": "a machine in space that sends information back to Earth",
    "cn_def": "衛星"
  },
  "microplastic": {
    "pos": "n.",
    "en_def": "a very small piece of plastic less than 5 mm long",
    "cn_def": "塑膠微粒"
  },
  "proximity": {
    "pos": "n.",
    "en_def": "the state of being near",
    "cn_def": "鄰近;接近"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the materials used to wrap or protect goods",
    "cn_def": "包裝"
  },
  "tanker": {
    "pos": "n.",
    "en_def": "a ship that carries oil or other liquids",
    "cn_def": "油輪"
  },
  "efficacy": {
    "pos": "n.",
    "en_def": "the ability to produce the result you want",
    "cn_def": "效力;功效"
  },
  "plankton": {
    "pos": "n.",
    "en_def": "tiny plants and animals that float in the sea",
    "cn_def": "浮游生物"
  },
  "symbiosis": {
    "pos": "n.",
    "en_def": "a close relationship between two living things that helps both",
    "cn_def": "共生"
  },
  "shell": {
    "pos": "n.",
    "en_def": "the hard outer cover of some animals",
    "cn_def": "殼;貝殼"
  },
  "configuration": {
    "pos": "n.",
    "en_def": "the way parts are arranged",
    "cn_def": "配置;結構"
  },
  "runoff": {
    "pos": "n.",
    "en_def": "rain water that flows from land into rivers and the sea, carrying dirt and chemicals",
    "cn_def": "地表逕流"
  },
  "krill": {
    "pos": "n.",
    "en_def": "small shrimp-like animals eaten by whales and penguins",
    "cn_def": "磷蝦"
  },
  "freight": {
    "pos": "n.",
    "en_def": "goods carried by ship, train or plane",
    "cn_def": "貨運;貨物"
  },
  "seaweed": {
    "pos": "n.",
    "en_def": "a plant that grows in the sea",
    "cn_def": "海草;海藻"
  },
  "advent": {
    "pos": "n.",
    "en_def": "the arrival or beginning of something important",
    "cn_def": "出現;到來"
  },
  "lighthouse": {
    "pos": "n.",
    "en_def": "a tower with a bright light that warns ships of danger",
    "cn_def": "燈塔"
  },
  "sponge": {
    "pos": "n.",
    "en_def": "a simple sea animal with a body full of holes",
    "cn_def": "海綿"
  },
  "whale": {
    "pos": "n.",
    "en_def": "a very large sea mammal",
    "cn_def": "鯨魚"
  },
  "counterpart": {
    "pos": "n.",
    "en_def": "a person or thing with the same role in a different place",
    "cn_def": "對應的人或物;同行"
  },
  "pier": {
    "pos": "n.",
    "en_def": "a long structure built from the land out over the sea",
    "cn_def": "碼頭;突堤"
  },
  "expedition": {
    "pos": "n.",
    "en_def": "an organised journey to explore or study something",
    "cn_def": "探險;考察"
  },
  "whaling": {
    "pos": "n.",
    "en_def": "the hunting of whales",
    "cn_def": "捕鯨"
  },
  "larva": {
    "pos": "n.",
    "en_def": "a very young form of an animal before it changes into an adult",
    "cn_def": "幼體;幼蟲"
  },
  "diver": {
    "pos": "n.",
    "en_def": "a person who swims underwater, often for work or sport",
    "cn_def": "潛水員"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the skill of planning and following a route",
    "cn_def": "導航;航海術"
  },
  "skeleton": {
    "pos": "n.",
    "en_def": "the hard structure that supports a body",
    "cn_def": "骨骼"
  },
  "nodule": {
    "pos": "n.",
    "en_def": "a small round lump of mineral found on the sea floor",
    "cn_def": "結核(礦物團塊)"
  },
  "seafood": {
    "pos": "n.",
    "en_def": "fish and shellfish eaten as food",
    "cn_def": "海鮮"
  },
  "resurgence": {
    "pos": "n.",
    "en_def": "a return of something after a period of decline",
    "cn_def": "復甦;再度興起"
  },
  "lobster": {
    "pos": "n.",
    "en_def": "a large shellfish with big claws that people eat",
    "cn_def": "龍蝦"
  },
  "shellfish": {
    "pos": "n.",
    "en_def": "sea animals with shells that people eat, like clams and shrimp",
    "cn_def": "貝類;有殼海鮮"
  },
  "nursery": {
    "pos": "n.",
    "en_def": "a place where young animals grow up safely",
    "cn_def": "育幼場"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube used for drinking",
    "cn_def": "吸管"
  },
  "harbour": {
    "pos": "n.",
    "en_def": "a sheltered area of water where ships can stay safely",
    "cn_def": "港口;港灣"
  },
  "endeavour": {
    "pos": "n.",
    "en_def": "a serious attempt to do something difficult",
    "cn_def": "努力;嘗試"
  },
  "wetsuit": {
    "pos": "n.",
    "en_def": "a tight rubber suit that keeps you warm in water",
    "cn_def": "潛水衣;防寒衣"
  },
  "shrimp": {
    "pos": "n.",
    "en_def": "a small sea animal with a shell that people eat",
    "cn_def": "蝦子"
  },
  "vigilant": {
    "pos": "adj.",
    "en_def": "watching carefully for danger",
    "cn_def": "警惕的;警覺的"
  },
  "frugal": {
    "pos": "adj.",
    "en_def": "careful not to waste money or resources",
    "cn_def": "節儉的"
  },
  "burgeoning": {
    "pos": "adj.",
    "en_def": "growing quickly",
    "cn_def": "迅速發展的"
  },
  "fish farm": {
    "pos": "n.phr.",
    "en_def": "a place where fish are raised for food",
    "cn_def": "養魚場"
  },
  "fish stock": {
    "pos": "n.phr.",
    "en_def": "the amount of fish of one kind in an area",
    "cn_def": "魚類資源;魚群存量"
  },
  "water pressure": {
    "pos": "n.phr.",
    "en_def": "the force of water pushing on something",
    "cn_def": "水壓"
  },
  "plastic pollution": {
    "pos": "n.phr.",
    "en_def": "harm to nature caused by plastic waste",
    "cn_def": "塑膠污染"
  },
  "submarine": {
    "pos": "n.",
    "en_def": "a ship that can travel underwater",
    "cn_def": "潛水艇"
  },
  "polyp": {
    "pos": "n.",
    "en_def": "a tiny soft animal that builds coral",
    "cn_def": "珊瑚蟲;水螅體"
  },
  "surplus": {
    "pos": "n.",
    "en_def": "an amount that is more than needed",
    "cn_def": "過剩;剩餘"
  },
  "harpoon": {
    "pos": "n.",
    "en_def": "a long spear used to hunt whales and large fish",
    "cn_def": "魚叉"
  },
  "probe": {
    "pos": "n.",
    "en_def": "a tool sent to collect information from a place that is hard to reach",
    "cn_def": "探測器"
  },
  "sewage": {
    "pos": "n.",
    "en_def": "dirty water and waste from toilets and drains",
    "cn_def": "污水"
  },
  "seabird": {
    "pos": "n.",
    "en_def": "a bird that lives near the sea and eats fish",
    "cn_def": "海鳥"
  },
  "dearth": {
    "pos": "n.",
    "en_def": "a lack of something",
    "cn_def": "缺乏;不足"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "a complete list of things in a place",
    "cn_def": "清單;盤點"
  },
  "seal": {
    "pos": "n.",
    "en_def": "a sea mammal with flippers that lives in cold places",
    "cn_def": "海豹"
  },
  "subtle": {
    "pos": "adj.",
    "en_def": "small and not easy to notice",
    "cn_def": "細微的;微妙的"
  },
  "imperative": {
    "pos": "adj.",
    "en_def": "extremely important and needing urgent action",
    "cn_def": "迫切的;必要的"
  },
  "pristine": {
    "pos": "adj.",
    "en_def": "completely clean and untouched",
    "cn_def": "原始的;未受污染的"
  },
  "prudent": {
    "pos": "adj.",
    "en_def": "careful and sensible",
    "cn_def": "謹慎的;明智的"
  },
  "obscure": {
    "pos": "adj.",
    "en_def": "not well known",
    "cn_def": "鮮為人知的"
  },
  "meagre": {
    "pos": "adj.",
    "en_def": "very small in amount",
    "cn_def": "微薄的;貧乏的"
  },
  "appreciable": {
    "pos": "adj.",
    "en_def": "large enough to be noticed",
    "cn_def": "可觀的;明顯的"
  },
  "turbulent": {
    "pos": "adj.",
    "en_def": "moving in a strong and uneven way",
    "cn_def": "洶湧的;動盪的"
  },
  "pertinent": {
    "pos": "adj.",
    "en_def": "directly connected to the subject",
    "cn_def": "相關的;切題的"
  },
  "concise": {
    "pos": "adj.",
    "en_def": "short and clear",
    "cn_def": "簡潔的"
  },
  "analogous": {
    "pos": "adj.",
    "en_def": "similar in some way",
    "cn_def": "類似的"
  },
  "shipwreck": {
    "pos": "n.",
    "en_def": "the remains of a ship that has sunk",
    "cn_def": "沉船;船骸"
  },
  "zooplankton": {
    "pos": "n.",
    "en_def": "tiny animals that float in the sea",
    "cn_def": "浮游動物"
  },
  "mollusc": {
    "pos": "n.",
    "en_def": "a soft animal often with a shell, like a snail or octopus",
    "cn_def": "軟體動物"
  },
  "shipping lane": {
    "pos": "n.phr.",
    "en_def": "a regular route used by ships at sea",
    "cn_def": "航道"
  },
  "oil spill": {
    "pos": "n.phr.",
    "en_def": "an accident in which oil escapes into the sea",
    "cn_def": "漏油;油污外洩"
  }
};

const EXTRA_GLOSSES = {};
