// Topic 12 Subunit 1 Quiz Data: Earth's Structure & Plate Tectonics 地球結構與板塊構造
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S01 - Earth's Structure & Plate Tectonics 地球結構與板塊構造",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "crust",
    "pos": "n.",
    "cn_def": "地殼",
    "en_def": "the hard outer layer of the Earth",
    "sentence": "The Earth's {{BLANK}} is very thin compared with the rest of the planet, but it is the only layer that people can actually walk on.",
    "cn": "和地球的其他部分相比，地球的地殼非常薄，但它是人們唯一能夠真正行走的一層。"
  },
  {
    "word": "mantle",
    "pos": "n.",
    "cn_def": "地函",
    "en_def": "the thick hot layer between the crust and the core",
    "sentence": "Our geography teacher explained that rock in the {{BLANK}} moves very slowly, and this movement pushes the plates above it.",
    "cn": "我們的地理老師解釋說，地函中的岩石移動得非常緩慢，而這種移動推動了上方的板塊。"
  },
  {
    "word": "outer core",
    "pos": "n.phr.",
    "cn_def": "外核",
    "en_def": "the liquid metal layer around the Earth's centre",
    "sentence": "Scientists believe that the {{BLANK}} is made of liquid iron, and its movement creates the Earth's magnetic field.",
    "cn": "科學家相信外核是由液態鐵構成的，而它的流動產生了地球的磁場。"
  },
  {
    "word": "inner core",
    "pos": "n.phr.",
    "cn_def": "內核",
    "en_def": "the solid metal ball at the very centre of the Earth",
    "sentence": "The {{BLANK}} is hotter than the surface of the sun, but it stays solid because the pressure there is extremely high.",
    "cn": "內核比太陽表面還要熱，但因為那裡的壓力極高，所以它保持固態。"
  },
  {
    "word": "lithosphere",
    "pos": "n.",
    "cn_def": "岩石圈",
    "en_def": "the rigid outer shell made of crust and upper mantle",
    "sentence": "The {{BLANK}} is broken into large pieces, so the land we live on is always moving a few centimetres every year.",
    "cn": "岩石圈破裂成許多大塊，所以我們居住的陸地每年都在移動幾公分。"
  },
  {
    "word": "asthenosphere",
    "pos": "n.",
    "cn_def": "軟流圈",
    "en_def": "the soft, partly melted layer under the lithosphere",
    "sentence": "The plates slide over the {{BLANK}} because this layer is soft enough to flow, although it is still mostly solid rock.",
    "cn": "板塊在軟流圈上滑動，因為這一層軟到可以流動，雖然它大部分仍是固態岩石。"
  },
  {
    "word": "tectonic plate",
    "pos": "n.phr.",
    "cn_def": "構造板塊",
    "en_def": "a huge moving piece of the Earth's outer shell",
    "sentence": "Taiwan sits where two {{BLANK}} meet, so the island has many earthquakes and its mountains are still rising.",
    "cn": "臺灣位於兩個構造板塊交會的地方，所以這座島嶼地震頻繁，而且山脈仍在持續升高。"
  },
  {
    "word": "plate tectonics",
    "pos": "n.phr.",
    "cn_def": "板塊構造論",
    "en_def": "the theory that the Earth's surface is made of moving plates",
    "sentence": "{{BLANK}} explains why earthquakes happen in certain places, and it also helps us understand how mountains are formed.",
    "cn": "板塊構造論解釋了為什麼地震會發生在某些地方，而且它也幫助我們了解山脈是如何形成的。"
  },
  {
    "word": "continental drift",
    "pos": "n.phr.",
    "cn_def": "大陸漂移",
    "en_def": "the slow movement of continents across the Earth",
    "sentence": "Alfred Wegener first suggested the idea of {{BLANK}}, but many scientists laughed at him because he could not explain how it worked.",
    "cn": "韋格納首先提出大陸漂移的概念，但許多科學家嘲笑他，因為他無法解釋其運作方式。"
  },
  {
    "word": "supercontinent",
    "pos": "n.",
    "cn_def": "超大陸",
    "en_def": "one huge landmass made of many joined continents",
    "sentence": "Millions of years ago, all the land formed one {{BLANK}}, and dinosaurs could walk from today's Africa to South America.",
    "cn": "數百萬年前，所有陸地形成一個超大陸，而恐龍可以從今天的非洲走到南美洲。"
  },
  {
    "word": "Pangaea",
    "pos": "n.",
    "cn_def": "盤古大陸",
    "en_def": "the supercontinent that existed about 300 million years ago",
    "sentence": "The coastlines of Africa and South America fit together like puzzle pieces, so scientists think they were once joined in {{BLANK}}.",
    "cn": "非洲和南美洲的海岸線像拼圖一樣能拼在一起，所以科學家認為它們曾經在盤古大陸中相連。"
  },
  {
    "word": "fault line",
    "pos": "n.phr.",
    "cn_def": "斷層線",
    "en_def": "a long crack in the Earth's crust where rocks move",
    "sentence": "The new school was built far away from the {{BLANK}}, because the city wanted to keep students safe during earthquakes.",
    "cn": "新學校蓋在離斷層線很遠的地方，因為市政府希望在地震時保護學生的安全。"
  },
  {
    "word": "subduction",
    "pos": "n.",
    "cn_def": "隱沒作用",
    "en_def": "when one plate slides under another plate",
    "sentence": "{{BLANK}} happens when a heavy ocean plate sinks under a lighter plate, and this process often creates deep trenches and volcanoes.",
    "cn": "當沉重的海洋板塊沉入較輕的板塊之下時，就會發生隱沒作用，而這個過程常常形成深海溝和火山。"
  },
  {
    "word": "convection current",
    "pos": "n.phr.",
    "cn_def": "對流",
    "en_def": "a circular flow of heat in a liquid or soft solid",
    "sentence": "Hot rock rises and cool rock sinks in the mantle, so these {{BLANK}} slowly drag the plates across the planet.",
    "cn": "地函中熱的岩石上升、冷的岩石下沉，所以這些對流緩慢地拖動板塊在地球上移動。"
  },
  {
    "word": "magnetic field",
    "pos": "n.phr.",
    "cn_def": "磁場",
    "en_def": "the invisible area of magnetic force around the Earth",
    "sentence": "The Earth's {{BLANK}} protects us from harmful particles from the sun, and it also makes a compass needle point north.",
    "cn": "地球的磁場保護我們免於來自太陽的有害粒子，而且它也讓指南針的指針指向北方。"
  },
  {
    "word": "oceanic crust",
    "pos": "n.phr.",
    "cn_def": "海洋地殼",
    "en_def": "the thin, heavy crust under the oceans",
    "sentence": "{{BLANK}} is younger and heavier than the land beneath our cities, so it usually sinks when two plates collide.",
    "cn": "海洋地殼比我們城市底下的陸地更年輕也更重，所以當兩個板塊相撞時它通常會下沉。"
  },
  {
    "word": "continental crust",
    "pos": "n.phr.",
    "cn_def": "大陸地殼",
    "en_def": "the thick, lighter crust that forms the land",
    "sentence": "{{BLANK}} can be more than 50 kilometres thick under high mountains, while it is much thinner under flat plains.",
    "cn": "在高山底下，大陸地殼可以超過五十公里厚，而在平坦的平原底下則薄得多。"
  },
  {
    "word": "plate boundary",
    "pos": "n.phr.",
    "cn_def": "板塊邊界",
    "en_def": "the edge where two tectonic plates meet",
    "sentence": "Japan lies on an active {{BLANK}}, so children there practise earthquake safety at school several times a year.",
    "cn": "日本位於活躍的板塊邊界上，所以那裡的孩子每年在學校練習好幾次地震安全演練。"
  },
  {
    "word": "mid-ocean ridge",
    "pos": "n.phr.",
    "cn_def": "中洋脊",
    "en_def": "a long underwater mountain chain where new crust forms",
    "sentence": "The {{BLANK}} runs through the middle of the Atlantic Ocean, and new rock is created there as the plates move apart.",
    "cn": "中洋脊貫穿大西洋中央，而當板塊彼此分離時，新的岩石就在那裡生成。"
  },
  {
    "word": "rift valley",
    "pos": "n.phr.",
    "cn_def": "裂谷",
    "en_def": "a long valley formed when the land splits apart",
    "sentence": "East Africa has a huge {{BLANK}}, and some geologists think the continent may eventually split into two parts.",
    "cn": "東非有一條巨大的裂谷，有些地質學家認為這塊大陸最終可能會分裂成兩部分。"
  },
  {
    "word": "uplift",
    "pos": "n.",
    "cn_def": "抬升",
    "en_def": "the rising of land caused by forces inside the Earth",
    "sentence": "The Himalayas are still growing because of continuous {{BLANK}}, and the mountains rise a few millimetres higher every year.",
    "cn": "喜馬拉雅山脈仍在增高，因為持續的抬升作用，而山脈每年都會升高幾毫米。"
  },
  {
    "word": "fold",
    "pos": "n.",
    "cn_def": "褶皺",
    "en_def": "a bend in rock layers caused by pressure",
    "sentence": "You can see a huge {{BLANK}} in the rock beside the highway, and it shows how strong the pressure inside the Earth can be.",
    "cn": "你可以在公路旁的岩石上看到一個巨大的褶皺，而它顯示出地球內部的壓力有多強。"
  },
  {
    "word": "geology",
    "pos": "n.",
    "cn_def": "地質學",
    "en_def": "the study of rocks and the Earth's history",
    "sentence": "My cousin chose to study {{BLANK}} at university because she loves hiking, and she wants to understand how mountains were made.",
    "cn": "我表姊在大學選擇念地質學，因為她熱愛健行，而且她想了解山是怎麼形成的。"
  },
  {
    "word": "geophysicist",
    "pos": "n.",
    "cn_def": "地球物理學家",
    "en_def": "a scientist who studies the physical processes of the Earth",
    "sentence": "The {{BLANK}} used special sensors to study the ground under the city, and her report helped engineers design safer buildings.",
    "cn": "那位地球物理學家使用特殊感測器研究城市底下的地層，而她的報告幫助工程師設計出更安全的建築。"
  },
  {
    "word": "seafloor spreading",
    "pos": "n.phr.",
    "cn_def": "海底擴張",
    "en_def": "the process where new ocean floor forms and moves apart",
    "sentence": "{{BLANK}} slowly makes the Atlantic Ocean wider, so the distance between Europe and America grows every year.",
    "cn": "海底擴張慢慢讓大西洋變得更寬，所以歐洲和美洲之間的距離每年都在增加。"
  },
  {
    "word": "geological",
    "pos": "adj.",
    "cn_def": "地質的",
    "en_def": "related to rocks and the history of the Earth",
    "sentence": "The park has many interesting {{BLANK}} features, so geography teachers often bring their students there on field trips.",
    "cn": "這座公園有許多有趣的地質特徵，所以地理老師常常帶學生去那裡校外教學。"
  }
];

const MCQS = [
  {
    "q": "The Earth's _____ is very thin compared with the rest of the planet, but it is the only layer that people can actually walk on.",
    "options": [
      "finding",
      "stargazing",
      "canyon",
      "crust"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Our geography teacher explained that rock in the _____ moves very slowly, and this movement pushes the plates above it.",
    "options": [
      "landform",
      "countdown",
      "mantle",
      "meteor"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Scientists believe that the _____ is made of liquid iron, and its movement creates the Earth's magnetic field.",
    "options": [
      "space telescope",
      "outer core",
      "habitable zone",
      "the centre of the universe"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ is hotter than the surface of the sun, but it stays solid because the pressure there is extremely high.",
    "options": [
      "inner core",
      "Milky Way",
      "dark energy",
      "black hole"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The _____ is broken into large pieces, so the land we live on is always moving a few centimetres every year.",
    "options": [
      "supernova",
      "indication",
      "lithosphere",
      "indicator"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The plates slide over the _____ because this layer is soft enough to flow, although it is still mostly solid rock.",
    "options": [
      "exploitation",
      "asthenosphere",
      "magma",
      "basalt"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Taiwan sits where two _____ meet, so the island has many earthquakes and its mountains are still rising.",
    "options": [
      "geologic time scale",
      "space telescope",
      "pyroclastic flow",
      "tectonic plate"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "_____ explains why earthquakes happen in certain places, and it also helps us understand how mountains are formed.",
    "options": [
      "plate tectonics",
      "space telescope",
      "active volcano",
      "reusable rocket"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Alfred Wegener first suggested the idea of _____, but many scientists laughed at him because he could not explain how it worked.",
    "options": [
      "space tourism",
      "continental drift",
      "fault zone",
      "radio telescope"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Millions of years ago, all the land formed one _____, and dinosaurs could walk from today's Africa to South America.",
    "options": [
      "moraine",
      "calculation",
      "ravine",
      "supercontinent"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The coastlines of Africa and South America fit together like puzzle pieces, so scientists think they were once joined in _____.",
    "options": [
      "dispersal",
      "ravine",
      "Pangaea",
      "exoplanet"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The new school was built far away from the _____, because the city wanted to keep students safe during earthquakes.",
    "options": [
      "fault line",
      "metamorphic rock",
      "space race",
      "star cluster"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "_____ happens when a heavy ocean plate sinks under a lighter plate, and this process often creates deep trenches and volcanoes.",
    "options": [
      "persistence",
      "subduction",
      "volcanologist",
      "attraction"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Hot rock rises and cool rock sinks in the mantle, so these _____ slowly drag the plates across the planet.",
    "options": [
      "solar eclipse",
      "Ring of Fire",
      "space tourism",
      "convection current"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The Earth's _____ protects us from harmful particles from the sun, and it also makes a compass needle point north.",
    "options": [
      "magnetic field",
      "low Earth orbit",
      "Big Bang",
      "the calm before the storm"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "_____ is younger and heavier than the land beneath our cities, so it usually sinks when two plates collide.",
    "options": [
      "space probe",
      "Richter scale",
      "oceanic crust",
      "fault zone"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "_____ can be more than 50 kilometres thick under high mountains, while it is much thinner under flat plains.",
    "options": [
      "space race",
      "continental crust",
      "solar eclipse",
      "rock formation"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Japan lies on an active _____, so children there practise earthquake safety at school several times a year.",
    "options": [
      "mission control",
      "pyroclastic flow",
      "plate boundary",
      "zero gravity"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The _____ runs through the middle of the Atlantic Ocean, and new rock is created there as the plates move apart.",
    "options": [
      "mid-ocean ridge",
      "lunar eclipse",
      "red giant",
      "igneous rock"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "East Africa has a huge _____, and some geologists think the continent may eventually split into two parts.",
    "options": [
      "oxbow lake",
      "sedimentary rock",
      "evacuation drill",
      "rift valley"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The Himalayas are still growing because of continuous _____, and the mountains rise a few millimetres higher every year.",
    "options": [
      "light-year",
      "uplift",
      "Mars",
      "Neptune"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "You can see a huge _____ in the rock beside the highway, and it shows how strong the pressure inside the Earth can be.",
    "options": [
      "variation",
      "contradiction",
      "adjustment",
      "fold"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "My cousin chose to study _____ at university because she loves hiking, and she wants to understand how mountains were made.",
    "options": [
      "geology",
      "Mars",
      "alignment",
      "gemstone"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The _____ used special sensors to study the ground under the city, and her report helped engineers design safer buildings.",
    "options": [
      "magma",
      "modification",
      "geophysicist",
      "validation"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "_____ slowly makes the Atlantic Ocean wider, so the distance between Europe and America grows every year.",
    "options": [
      "seafloor spreading",
      "Milky Way",
      "water cycle",
      "Big Bang"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The park has many interesting _____ features, so geography teachers often bring their students there on field trips.",
    "options": [
      "inexplicable",
      "continuous",
      "notable",
      "geological"
    ],
    "answer": 3,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "crust": {
    "pos": "n.",
    "en_def": "the hard outer layer of the Earth",
    "cn_def": "地殼"
  },
  "mantle": {
    "pos": "n.",
    "en_def": "the thick hot layer between the crust and the core",
    "cn_def": "地函"
  },
  "outer core": {
    "pos": "n.phr.",
    "en_def": "the liquid metal layer around the Earth's centre",
    "cn_def": "外核"
  },
  "inner core": {
    "pos": "n.phr.",
    "en_def": "the solid metal ball at the very centre of the Earth",
    "cn_def": "內核"
  },
  "lithosphere": {
    "pos": "n.",
    "en_def": "the rigid outer shell made of crust and upper mantle",
    "cn_def": "岩石圈"
  },
  "asthenosphere": {
    "pos": "n.",
    "en_def": "the soft, partly melted layer under the lithosphere",
    "cn_def": "軟流圈"
  },
  "tectonic plate": {
    "pos": "n.phr.",
    "en_def": "a huge moving piece of the Earth's outer shell",
    "cn_def": "構造板塊"
  },
  "plate tectonics": {
    "pos": "n.phr.",
    "en_def": "the theory that the Earth's surface is made of moving plates",
    "cn_def": "板塊構造論"
  },
  "continental drift": {
    "pos": "n.phr.",
    "en_def": "the slow movement of continents across the Earth",
    "cn_def": "大陸漂移"
  },
  "supercontinent": {
    "pos": "n.",
    "en_def": "one huge landmass made of many joined continents",
    "cn_def": "超大陸"
  },
  "pangaea": {
    "pos": "n.",
    "en_def": "the supercontinent that existed about 300 million years ago",
    "cn_def": "盤古大陸"
  },
  "fault line": {
    "pos": "n.phr.",
    "en_def": "a long crack in the Earth's crust where rocks move",
    "cn_def": "斷層線"
  },
  "subduction": {
    "pos": "n.",
    "en_def": "when one plate slides under another plate",
    "cn_def": "隱沒作用"
  },
  "convection current": {
    "pos": "n.phr.",
    "en_def": "a circular flow of heat in a liquid or soft solid",
    "cn_def": "對流"
  },
  "magnetic field": {
    "pos": "n.phr.",
    "en_def": "the invisible area of magnetic force around the Earth",
    "cn_def": "磁場"
  },
  "oceanic crust": {
    "pos": "n.phr.",
    "en_def": "the thin, heavy crust under the oceans",
    "cn_def": "海洋地殼"
  },
  "continental crust": {
    "pos": "n.phr.",
    "en_def": "the thick, lighter crust that forms the land",
    "cn_def": "大陸地殼"
  },
  "plate boundary": {
    "pos": "n.phr.",
    "en_def": "the edge where two tectonic plates meet",
    "cn_def": "板塊邊界"
  },
  "mid-ocean ridge": {
    "pos": "n.phr.",
    "en_def": "a long underwater mountain chain where new crust forms",
    "cn_def": "中洋脊"
  },
  "rift valley": {
    "pos": "n.phr.",
    "en_def": "a long valley formed when the land splits apart",
    "cn_def": "裂谷"
  },
  "uplift": {
    "pos": "n.",
    "en_def": "the rising of land caused by forces inside the Earth",
    "cn_def": "抬升"
  },
  "fold": {
    "pos": "n.",
    "en_def": "a bend in rock layers caused by pressure",
    "cn_def": "褶皺"
  },
  "geology": {
    "pos": "n.",
    "en_def": "the study of rocks and the Earth's history",
    "cn_def": "地質學"
  },
  "geophysicist": {
    "pos": "n.",
    "en_def": "a scientist who studies the physical processes of the Earth",
    "cn_def": "地球物理學家"
  },
  "seafloor spreading": {
    "pos": "n.phr.",
    "en_def": "the process where new ocean floor forms and moves apart",
    "cn_def": "海底擴張"
  },
  "geological": {
    "pos": "adj.",
    "en_def": "related to rocks and the history of the Earth",
    "cn_def": "地質的"
  },
  "finding": {
    "pos": "n.",
    "en_def": "a piece of information discovered after research",
    "cn_def": "研究發現"
  },
  "stargazing": {
    "pos": "n.",
    "en_def": "the activity of looking at the stars",
    "cn_def": "觀星"
  },
  "canyon": {
    "pos": "n.",
    "en_def": "a deep valley with steep sides, usually cut by a river",
    "cn_def": "峽谷"
  },
  "landform": {
    "pos": "n.",
    "en_def": "a natural shape on the Earth's surface, such as a hill",
    "cn_def": "地形"
  },
  "countdown": {
    "pos": "n.",
    "en_def": "counting backwards to zero before something starts",
    "cn_def": "倒數計時"
  },
  "meteor": {
    "pos": "n.",
    "en_def": "a piece of space rock that burns up in the sky",
    "cn_def": "流星"
  },
  "space telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that orbits above the Earth's atmosphere",
    "cn_def": "太空望遠鏡"
  },
  "habitable zone": {
    "pos": "n.phr.",
    "en_def": "the area around a star where water can stay liquid",
    "cn_def": "適居帶"
  },
  "the centre of the universe": {
    "pos": "n.phr.",
    "en_def": "the most important person or thing (often used critically)",
    "cn_def": "宇宙的中心；自以為最重要"
  },
  "milky way": {
    "pos": "n.phr.",
    "en_def": "the galaxy that contains our solar system",
    "cn_def": "銀河"
  },
  "dark energy": {
    "pos": "n.phr.",
    "en_def": "a mysterious force that makes the universe expand faster",
    "cn_def": "暗能量"
  },
  "black hole": {
    "pos": "n.phr.",
    "en_def": "an area in space where gravity is so strong that light cannot escape",
    "cn_def": "黑洞"
  },
  "supernova": {
    "pos": "n.",
    "en_def": "the huge explosion of a dying star",
    "cn_def": "超新星"
  },
  "indication": {
    "pos": "n.",
    "en_def": "a sign that shows something is happening",
    "cn_def": "跡象"
  },
  "indicator": {
    "pos": "n.",
    "en_def": "a sign that shows the state of something",
    "cn_def": "指標"
  },
  "exploitation": {
    "pos": "n.",
    "en_def": "using something, sometimes unfairly, for profit",
    "cn_def": "開採；剝削"
  },
  "magma": {
    "pos": "n.",
    "en_def": "hot liquid rock under the Earth's surface",
    "cn_def": "岩漿"
  },
  "basalt": {
    "pos": "n.",
    "en_def": "a dark rock formed from cooled lava",
    "cn_def": "玄武岩"
  },
  "geologic time scale": {
    "pos": "n.phr.",
    "en_def": "a system that divides Earth's long history into periods",
    "cn_def": "地質年代表"
  },
  "pyroclastic flow": {
    "pos": "n.phr.",
    "en_def": "a fast, deadly cloud of hot gas and rock",
    "cn_def": "火山碎屑流"
  },
  "active volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "cn_def": "活火山"
  },
  "reusable rocket": {
    "pos": "n.phr.",
    "en_def": "a rocket that can be flown more than once",
    "cn_def": "可重複使用火箭"
  },
  "space tourism": {
    "pos": "n.phr.",
    "en_def": "travelling to space for fun as a paying passenger",
    "cn_def": "太空旅遊"
  },
  "fault zone": {
    "pos": "n.phr.",
    "en_def": "an area with many cracks where rocks move",
    "cn_def": "斷層帶"
  },
  "radio telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that collects radio waves from space",
    "cn_def": "電波望遠鏡"
  },
  "moraine": {
    "pos": "n.",
    "en_def": "a pile of rocks and soil left by a glacier",
    "cn_def": "冰磧"
  },
  "calculation": {
    "pos": "n.",
    "en_def": "the process of using numbers to find an answer",
    "cn_def": "計算"
  },
  "ravine": {
    "pos": "n.",
    "en_def": "a deep narrow valley with steep sides",
    "cn_def": "深谷；溝壑"
  },
  "dispersal": {
    "pos": "n.",
    "en_def": "the spreading of things over a wide area",
    "cn_def": "散布；擴散"
  },
  "exoplanet": {
    "pos": "n.",
    "en_def": "a planet that moves around a star other than the sun",
    "cn_def": "系外行星"
  },
  "metamorphic rock": {
    "pos": "n.phr.",
    "en_def": "rock changed by heat and pressure",
    "cn_def": "變質岩"
  },
  "space race": {
    "pos": "n.phr.",
    "en_def": "the competition between countries to explore space first",
    "cn_def": "太空競賽"
  },
  "star cluster": {
    "pos": "n.phr.",
    "en_def": "a group of stars that are close together",
    "cn_def": "星團"
  },
  "persistence": {
    "pos": "n.",
    "en_def": "continuing to try even when things are difficult",
    "cn_def": "堅持"
  },
  "volcanologist": {
    "pos": "n.",
    "en_def": "a scientist who studies volcanoes",
    "cn_def": "火山學家"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a force that pulls things toward each other",
    "cn_def": "吸引力"
  },
  "solar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the moon blocks the sun's light from Earth",
    "cn_def": "日蝕"
  },
  "ring of fire": {
    "pos": "n.phr.",
    "en_def": "the area around the Pacific Ocean with many volcanoes and earthquakes",
    "cn_def": "環太平洋火山帶"
  },
  "low earth orbit": {
    "pos": "n.phr.",
    "en_def": "the area of space close above the Earth's atmosphere",
    "cn_def": "低地球軌道"
  },
  "big bang": {
    "pos": "n.phr.",
    "en_def": "the event that most scientists think started the universe",
    "cn_def": "大霹靂"
  },
  "the calm before the storm": {
    "pos": "n.phr.",
    "en_def": "a quiet period before trouble or great activity",
    "cn_def": "暴風雨前的寧靜"
  },
  "space probe": {
    "pos": "n.phr.",
    "en_def": "a robot spacecraft sent to explore space",
    "cn_def": "太空探測器"
  },
  "richter scale": {
    "pos": "n.phr.",
    "en_def": "a scale that measures the strength of an earthquake",
    "cn_def": "芮氏規模"
  },
  "rock formation": {
    "pos": "n.phr.",
    "en_def": "a natural shape made of rock",
    "cn_def": "岩石地形；奇岩"
  },
  "mission control": {
    "pos": "n.phr.",
    "en_def": "the team on Earth that guides a space flight",
    "cn_def": "任務控制中心"
  },
  "zero gravity": {
    "pos": "n.phr.",
    "en_def": "a state where things float because they seem to have no weight",
    "cn_def": "零重力"
  },
  "lunar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the Earth's shadow falls on the moon",
    "cn_def": "月蝕"
  },
  "red giant": {
    "pos": "n.phr.",
    "en_def": "a large, old star that has grown cooler and redder",
    "cn_def": "紅巨星"
  },
  "igneous rock": {
    "pos": "n.phr.",
    "en_def": "rock formed when hot melted rock cools",
    "cn_def": "火成岩"
  },
  "oxbow lake": {
    "pos": "n.phr.",
    "en_def": "a curved lake formed when a river changes its course",
    "cn_def": "牛軛湖"
  },
  "sedimentary rock": {
    "pos": "n.phr.",
    "en_def": "rock made from layers of sand, mud or shells pressed together",
    "cn_def": "沉積岩"
  },
  "evacuation drill": {
    "pos": "n.phr.",
    "en_def": "a practice of leaving a building quickly in an emergency",
    "cn_def": "疏散演練"
  },
  "light-year": {
    "pos": "n.",
    "en_def": "the distance light travels in one year",
    "cn_def": "光年"
  },
  "mars": {
    "pos": "n.",
    "en_def": "the red planet, fourth from the sun",
    "cn_def": "火星"
  },
  "neptune": {
    "pos": "n.",
    "en_def": "the eighth and farthest planet from the sun",
    "cn_def": "海王星"
  },
  "variation": {
    "pos": "n.",
    "en_def": "a change or difference in amount or level",
    "cn_def": "變化；差異"
  },
  "contradiction": {
    "pos": "n.",
    "en_def": "a situation where two facts cannot both be true",
    "cn_def": "矛盾"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "調整"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the arrangement of things in a straight line",
    "cn_def": "排成一直線；對齊"
  },
  "gemstone": {
    "pos": "n.",
    "en_def": "a valuable stone used in jewellery",
    "cn_def": "寶石"
  },
  "modification": {
    "pos": "n.",
    "en_def": "a small change to improve something",
    "cn_def": "修改；改良"
  },
  "validation": {
    "pos": "n.",
    "en_def": "proof that something is correct or true",
    "cn_def": "驗證"
  },
  "water cycle": {
    "pos": "n.phr.",
    "en_def": "the movement of water between the sea, air and land",
    "cn_def": "水循環"
  },
  "inexplicable": {
    "pos": "adj.",
    "en_def": "impossible to explain",
    "cn_def": "無法解釋的"
  },
  "continuous": {
    "pos": "adj.",
    "en_def": "happening without stopping",
    "cn_def": "持續不斷的"
  },
  "notable": {
    "pos": "adj.",
    "en_def": "important or interesting enough to be noticed",
    "cn_def": "值得注意的"
  }
};

const EXTRA_GLOSSES = {};
