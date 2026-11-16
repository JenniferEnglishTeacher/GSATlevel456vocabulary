// Topic 9 Subunit 3 Quiz Data: Mining, Iron & Steel 採礦與鋼鐵
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S03 - Mining, Iron & Steel 採礦與鋼鐵",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "coal mine",
    "pos": "n.",
    "cn_def": "煤礦",
    "en_def": "a place underground where coal is dug out",
    "sentence": "My great-grandfather worked in a {{BLANK}} when he was only twelve, and he rarely saw the sun in winter.",
    "cn": "我曾祖父十二歲時就在煤礦工作,而他在冬天很少見到太陽。"
  },
  {
    "word": "colliery",
    "pos": "n.",
    "cn_def": "煤礦場",
    "en_def": "a coal mine and the buildings around it",
    "sentence": "The {{BLANK}} closed in 1985, and many families in the valley had to move away to find work.",
    "cn": "那座煤礦場在1985年關閉了,而山谷裡的許多家庭必須搬走去找工作。"
  },
  {
    "word": "miner",
    "pos": "n.",
    "cn_def": "礦工",
    "en_def": "a person who works under the ground digging coal or metal",
    "sentence": "The {{BLANK}} went down into the dark tunnels every morning, and their families waited nervously for them.",
    "cn": "礦工們每天早上下到黑暗的坑道裡,而他們的家人緊張地等著他們回來。"
  },
  {
    "word": "mine shaft",
    "pos": "n.",
    "cn_def": "礦井",
    "en_def": "a deep hole going down into a mine",
    "sentence": "The workers rode a small lift down the {{BLANK}}, and the air grew hotter as they went deeper.",
    "cn": "工人們乘坐小升降機沿著礦井下去,而越往深處空氣就越熱。"
  },
  {
    "word": "tunnel",
    "pos": "n.",
    "cn_def": "隧道;坑道",
    "en_def": "a long passage under the ground",
    "sentence": "The train went into a long {{BLANK}} under the mountain, and suddenly my phone lost its signal.",
    "cn": "火車開進山底下一條長長的隧道,而我的手機突然沒有訊號了。"
  },
  {
    "word": "ore",
    "pos": "n.",
    "cn_def": "礦石",
    "en_def": "rock from which metal can be taken",
    "sentence": "The rocks in this area contain copper {{BLANK}}, so a mining company wants to start digging here.",
    "cn": "這個地區的岩石含有銅礦石,所以一家礦業公司想在這裡開挖。"
  },
  {
    "word": "iron ore",
    "pos": "n.",
    "cn_def": "鐵礦石",
    "en_def": "rock that contains iron",
    "sentence": "Australia exports a lot of {{BLANK}} to Asia, and much of it is turned into steel for buildings.",
    "cn": "澳洲出口大量鐵礦石到亞洲,而其中很多被製成建築用的鋼材。"
  },
  {
    "word": "cast iron",
    "pos": "n.",
    "cn_def": "鑄鐵",
    "en_def": "hard iron that is shaped by pouring it into a mould",
    "sentence": "My mother cooks with a heavy {{BLANK}} pan, and she says it lasts much longer than modern ones.",
    "cn": "我媽媽用一個沉重的鑄鐵鍋煮飯,而她說它比現代的鍋子耐用得多。"
  },
  {
    "word": "wrought iron",
    "pos": "n.",
    "cn_def": "鍛鐵;熟鐵",
    "en_def": "iron that is heated and bent into shapes by hand",
    "sentence": "The old park has beautiful {{BLANK}} gates, and tourists often stop to take pictures of them.",
    "cn": "那座老公園有漂亮的鍛鐵大門,而遊客經常停下來拍照。"
  },
  {
    "word": "pig iron",
    "pos": "n.",
    "cn_def": "生鐵",
    "en_def": "rough iron that comes straight from a furnace",
    "sentence": "Workers poured the hot {{BLANK}} into sand moulds, and then it was sent away to be made into steel.",
    "cn": "工人們把熾熱的生鐵倒進沙模中,然後它被送去製成鋼。"
  },
  {
    "word": "blast furnace",
    "pos": "n.",
    "cn_def": "高爐;鼓風爐",
    "en_def": "a huge furnace where hot air helps melt iron from rock",
    "sentence": "The {{BLANK}} burned day and night, so the sky above the town glowed orange after dark.",
    "cn": "那座高爐日夜燃燒,所以天黑後鎮上的天空都閃著橘色的光。"
  },
  {
    "word": "ironworks",
    "pos": "n.",
    "cn_def": "鐵工廠;煉鐵廠",
    "en_def": "a factory where iron is made",
    "sentence": "The town grew quickly around the {{BLANK}}, and its population doubled in only twenty years.",
    "cn": "這個小鎮圍繞著煉鐵廠迅速發展,而它的人口在短短二十年間就翻倍了。"
  },
  {
    "word": "steelworks",
    "pos": "n.",
    "cn_def": "鋼鐵廠",
    "en_def": "a factory where steel is made",
    "sentence": "My uncle got a job at the {{BLANK}} after school, and he worked there for over thirty years.",
    "cn": "我舅舅畢業後在鋼鐵廠找到工作,而他在那裡工作了三十多年。"
  },
  {
    "word": "foundry",
    "pos": "n.",
    "cn_def": "鑄造廠",
    "en_def": "a factory where metal is melted and shaped",
    "sentence": "The bells for the church were made at a local {{BLANK}}, and each one weighed more than a car.",
    "cn": "教堂的鐘是在當地一家鑄造廠製作的,而每一個都比一輛車還重。"
  },
  {
    "word": "molten",
    "pos": "adj.",
    "cn_def": "熔化的",
    "en_def": "melted by very great heat",
    "sentence": "The workers wore thick gloves while they poured the {{BLANK}} metal, because one drop could burn through skin.",
    "cn": "工人們倒熔化的金屬時戴著厚手套,因為一滴就能燙穿皮膚。"
  },
  {
    "word": "mould",
    "pos": "n.",
    "cn_def": "模具;鑄模",
    "en_def": "a hollow shape into which hot liquid is poured",
    "sentence": "We poured melted chocolate into a heart-shaped {{BLANK}}, and then we put it in the fridge to set.",
    "cn": "我們把融化的巧克力倒進心形的模具裡,然後把它放進冰箱定型。"
  },
  {
    "word": "anvil",
    "pos": "n.",
    "cn_def": "鐵砧",
    "en_def": "a heavy iron block on which hot metal is hammered",
    "sentence": "The smith hammered the red-hot metal on the {{BLANK}}, and sparks flew across the dark room.",
    "cn": "鐵匠在鐵砧上敲打燒紅的金屬,而火花在昏暗的房間裡四處飛濺。"
  },
  {
    "word": "blacksmith",
    "pos": "n.",
    "cn_def": "鐵匠",
    "en_def": "a person who makes things from iron by heating and hammering",
    "sentence": "Every village once had a {{BLANK}} who made horseshoes, but few people learn this skill today.",
    "cn": "以前每個村莊都有一位做馬蹄鐵的鐵匠,但現在很少人學這項技藝了。"
  },
  {
    "word": "steel",
    "pos": "n.",
    "cn_def": "鋼",
    "en_def": "a strong metal made from iron and carbon",
    "sentence": "Modern skyscrapers have frames made of {{BLANK}}, so they can be much taller than old stone buildings.",
    "cn": "現代摩天大樓的骨架是用鋼做的,所以它們可以比古老的石造建築高得多。"
  },
  {
    "word": "Bessemer process",
    "pos": "n.phr.",
    "cn_def": "貝塞麥煉鋼法",
    "en_def": "a cheap way to make steel by blowing air through iron",
    "sentence": "The {{BLANK}} made steel cheap for the first time, so railways and bridges could use it everywhere.",
    "cn": "貝塞麥煉鋼法首次讓鋼變得便宜,所以鐵路和橋梁各處都能使用它。"
  },
  {
    "word": "impurity",
    "pos": "n.",
    "cn_def": "雜質",
    "en_def": "an unwanted substance mixed into something",
    "sentence": "Blowing air through the hot iron burned away each {{BLANK}}, and the metal became much stronger.",
    "cn": "讓空氣吹過熾熱的鐵會燒掉每一種雜質,而金屬變得堅固許多。"
  },
  {
    "word": "coal seam",
    "pos": "n.",
    "cn_def": "煤層",
    "en_def": "a layer of coal under the ground",
    "sentence": "The miners found a thick {{BLANK}} deep underground, but reaching it safely was very difficult.",
    "cn": "礦工們在地底深處發現一個厚厚的煤層,但要安全地挖到它非常困難。"
  },
  {
    "word": "pickaxe",
    "pos": "n.",
    "cn_def": "鶴嘴鋤;十字鎬",
    "en_def": "a heavy tool with a pointed metal head for breaking rock",
    "sentence": "Each miner carried a {{BLANK}} and a lamp, and they broke the hard rock by hand for hours.",
    "cn": "每位礦工都帶著一把十字鎬和一盞燈,而他們徒手敲碎堅硬的岩石好幾個小時。"
  },
  {
    "word": "explosion",
    "pos": "n.",
    "cn_def": "爆炸",
    "en_def": "a sudden violent burst with a loud noise",
    "sentence": "Gas in the mine caused a terrible {{BLANK}}, and the whole town gathered at the gate for news.",
    "cn": "礦坑裡的瓦斯引發了一場可怕的爆炸,而全鎮的人都聚集在大門口等消息。"
  },
  {
    "word": "safety lamp",
    "pos": "n.",
    "cn_def": "安全燈",
    "en_def": "a special lamp that will not light gas in a mine",
    "sentence": "The new {{BLANK}} protected miners from deadly gas explosions, so far fewer men died underground after 1816.",
    "cn": "新的安全燈保護礦工免於致命的瓦斯爆炸,所以1816年後在地下喪生的人少了很多。"
  },
  {
    "word": "metallurgy",
    "pos": "n.",
    "cn_def": "冶金學",
    "en_def": "the science of metals and how to use them",
    "sentence": "My cousin studies {{BLANK}} at university, and she hopes to design lighter metals for planes one day.",
    "cn": "我表姊在大學唸冶金學,而她希望有一天能為飛機設計更輕的金屬。"
  },
  {
    "word": "rivet",
    "pos": "n.",
    "cn_def": "鉚釘",
    "en_def": "a short metal pin used to join metal sheets together",
    "sentence": "The Eiffel Tower is held together by millions of {{BLANK}}, and workers put each one in by hand.",
    "cn": "艾菲爾鐵塔是由數百萬顆鉚釘固定起來的,而工人們是一顆一顆用手裝上去的。"
  },
  {
    "word": "girder",
    "pos": "n.",
    "cn_def": "大樑;鋼樑",
    "en_def": "a long strong metal beam that supports a building or bridge",
    "sentence": "A crane lifted the huge steel {{BLANK}} into place, while workers on the bridge guided it carefully.",
    "cn": "起重機把巨大的鋼樑吊到定位,而橋上的工人小心地引導它。"
  }
];

const MCQS = [
  {
    "q": "My great-grandfather worked in a _____ when he was only twelve, and he rarely saw the sun in winter.",
    "options": [
      "steam car",
      "tennis racket",
      "coal mine",
      "population growth"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ closed in 1985, and many families in the valley had to move away to find work.",
    "options": [
      "foreman",
      "engineering",
      "fraud",
      "colliery"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The _____ went down into the dark tunnels every morning, and their families waited nervously for them.",
    "options": [
      "miner",
      "shareholder",
      "conductor",
      "stethoscope"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The workers rode a small lift down the _____, and the air grew hotter as they went deeper.",
    "options": [
      "spark plug",
      "mine shaft",
      "finished goods",
      "factory worker"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The train went into a long _____ under the mountain, and suddenly my phone lost its signal.",
    "options": [
      "backer",
      "mill",
      "tunnel",
      "downside"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The rocks in this area contain copper _____, so a mining company wants to start digging here.",
    "options": [
      "phonograph",
      "role",
      "capitalism",
      "ore"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Australia exports a lot of _____ to Asia, and much of it is turned into steel for buildings.",
    "options": [
      "iron ore",
      "level crossing",
      "intellectual property",
      "minimum wage"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "My mother cooks with a heavy _____ pan, and she says it lasts much longer than modern ones.",
    "options": [
      "intellectual property",
      "cast iron",
      "child labour",
      "turning point"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The old park has beautiful _____ gates, and tourists often stop to take pictures of them.",
    "options": [
      "water wheel",
      "spinning wheel",
      "wrought iron",
      "middle class"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Workers poured the hot _____ into sand moulds, and then it was sent away to be made into steel.",
    "options": [
      "pig iron",
      "steam car",
      "the daily grind",
      "child labour"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The _____ burned day and night, so the sky above the town glowed orange after dark.",
    "options": [
      "tennis racket",
      "factory worker",
      "side effect",
      "blast furnace"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The town grew quickly around the _____, and its population doubled in only twenty years.",
    "options": [
      "fame",
      "ironworks",
      "spindle",
      "exhibition"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "My uncle got a job at the _____ after school, and he worked there for over thirty years.",
    "options": [
      "steelworks",
      "sanitation",
      "hygiene",
      "liberation"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The bells for the church were made at a local _____, and each one weighed more than a car.",
    "options": [
      "injustice",
      "hygiene",
      "foundry",
      "colony"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The workers wore thick gloves while they poured the _____ metal, because one drop could burn through skin.",
    "options": [
      "plentiful",
      "cultural",
      "noteworthy",
      "molten"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "We poured melted chocolate into a heart-shaped _____, and then we put it in the fridge to set.",
    "options": [
      "uptake",
      "mould",
      "fraud",
      "conglomerate"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The smith hammered the red-hot metal on the _____, and sparks flew across the dark room.",
    "options": [
      "access",
      "chemical",
      "chimney",
      "anvil"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Every village once had a _____ who made horseshoes, but few people learn this skill today.",
    "options": [
      "blacksmith",
      "retail",
      "viaduct",
      "horsepower"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Modern skyscrapers have frames made of _____, so they can be much taller than old stone buildings.",
    "options": [
      "reformer",
      "trial",
      "steel",
      "fraction"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The _____ made steel cheap for the first time, so railways and bridges could use it everywhere.",
    "options": [
      "raw material",
      "Bessemer process",
      "working class",
      "world's fair"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Blowing air through the hot iron burned away each _____, and the metal became much stronger.",
    "options": [
      "sweatshop",
      "colony",
      "epidemic",
      "impurity"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The miners found a thick _____ deep underground, but reaching it safely was very difficult.",
    "options": [
      "the brainchild of",
      "mill owner",
      "coal seam",
      "raw material"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Each miner carried a _____ and a lamp, and they broke the hard rock by hand for hours.",
    "options": [
      "pickaxe",
      "chemical",
      "rail",
      "generator"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Gas in the mine caused a terrible _____, and the whole town gathered at the gate for news.",
    "options": [
      "tycoon",
      "explosion",
      "revolution",
      "fraud"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The new _____ protected miners from deadly gas explosions, so far fewer men died underground after 1816.",
    "options": [
      "steam train",
      "steam engine",
      "safety lamp",
      "spinning jenny"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "My cousin studies _____ at university, and she hopes to design lighter metals for planes one day.",
    "options": [
      "furnace",
      "metallurgy",
      "barge",
      "virtue"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The Eiffel Tower is held together by millions of _____, and workers put each one in by hand.",
    "options": [
      "trade",
      "refrigerator",
      "phonograph",
      "rivet"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "A crane lifted the huge steel _____ into place, while workers on the bridge guided it carefully.",
    "options": [
      "girder",
      "factory",
      "conglomerate",
      "aid"
    ],
    "answer": 0,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "coal mine": {
    "pos": "n.",
    "en_def": "a place underground where coal is dug out",
    "cn_def": "煤礦"
  },
  "colliery": {
    "pos": "n.",
    "en_def": "a coal mine and the buildings around it",
    "cn_def": "煤礦場"
  },
  "miner": {
    "pos": "n.",
    "en_def": "a person who works under the ground digging coal or metal",
    "cn_def": "礦工"
  },
  "mine shaft": {
    "pos": "n.",
    "en_def": "a deep hole going down into a mine",
    "cn_def": "礦井"
  },
  "tunnel": {
    "pos": "n.",
    "en_def": "a long passage under the ground",
    "cn_def": "隧道;坑道"
  },
  "ore": {
    "pos": "n.",
    "en_def": "rock from which metal can be taken",
    "cn_def": "礦石"
  },
  "iron ore": {
    "pos": "n.",
    "en_def": "rock that contains iron",
    "cn_def": "鐵礦石"
  },
  "cast iron": {
    "pos": "n.",
    "en_def": "hard iron that is shaped by pouring it into a mould",
    "cn_def": "鑄鐵"
  },
  "wrought iron": {
    "pos": "n.",
    "en_def": "iron that is heated and bent into shapes by hand",
    "cn_def": "鍛鐵;熟鐵"
  },
  "pig iron": {
    "pos": "n.",
    "en_def": "rough iron that comes straight from a furnace",
    "cn_def": "生鐵"
  },
  "blast furnace": {
    "pos": "n.",
    "en_def": "a huge furnace where hot air helps melt iron from rock",
    "cn_def": "高爐;鼓風爐"
  },
  "ironworks": {
    "pos": "n.",
    "en_def": "a factory where iron is made",
    "cn_def": "鐵工廠;煉鐵廠"
  },
  "steelworks": {
    "pos": "n.",
    "en_def": "a factory where steel is made",
    "cn_def": "鋼鐵廠"
  },
  "foundry": {
    "pos": "n.",
    "en_def": "a factory where metal is melted and shaped",
    "cn_def": "鑄造廠"
  },
  "molten": {
    "pos": "adj.",
    "en_def": "melted by very great heat",
    "cn_def": "熔化的"
  },
  "mould": {
    "pos": "n.",
    "en_def": "a hollow shape into which hot liquid is poured",
    "cn_def": "模具;鑄模"
  },
  "anvil": {
    "pos": "n.",
    "en_def": "a heavy iron block on which hot metal is hammered",
    "cn_def": "鐵砧"
  },
  "blacksmith": {
    "pos": "n.",
    "en_def": "a person who makes things from iron by heating and hammering",
    "cn_def": "鐵匠"
  },
  "steel": {
    "pos": "n.",
    "en_def": "a strong metal made from iron and carbon",
    "cn_def": "鋼"
  },
  "bessemer process": {
    "pos": "n.phr.",
    "en_def": "a cheap way to make steel by blowing air through iron",
    "cn_def": "貝塞麥煉鋼法"
  },
  "impurity": {
    "pos": "n.",
    "en_def": "an unwanted substance mixed into something",
    "cn_def": "雜質"
  },
  "coal seam": {
    "pos": "n.",
    "en_def": "a layer of coal under the ground",
    "cn_def": "煤層"
  },
  "pickaxe": {
    "pos": "n.",
    "en_def": "a heavy tool with a pointed metal head for breaking rock",
    "cn_def": "鶴嘴鋤;十字鎬"
  },
  "explosion": {
    "pos": "n.",
    "en_def": "a sudden violent burst with a loud noise",
    "cn_def": "爆炸"
  },
  "safety lamp": {
    "pos": "n.",
    "en_def": "a special lamp that will not light gas in a mine",
    "cn_def": "安全燈"
  },
  "metallurgy": {
    "pos": "n.",
    "en_def": "the science of metals and how to use them",
    "cn_def": "冶金學"
  },
  "rivet": {
    "pos": "n.",
    "en_def": "a short metal pin used to join metal sheets together",
    "cn_def": "鉚釘"
  },
  "girder": {
    "pos": "n.",
    "en_def": "a long strong metal beam that supports a building or bridge",
    "cn_def": "大樑;鋼樑"
  },
  "steam car": {
    "pos": "n.",
    "en_def": "a car that uses a steam engine",
    "cn_def": "蒸汽汽車"
  },
  "tennis racket": {
    "pos": "n.",
    "en_def": "a bat with strings used to hit a tennis ball",
    "cn_def": "網球拍"
  },
  "population growth": {
    "pos": "n.",
    "en_def": "an increase in the number of people",
    "cn_def": "人口成長"
  },
  "foreman": {
    "pos": "n.",
    "en_def": "a worker who is in charge of a group of other workers",
    "cn_def": "工頭;領班"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "fraud": {
    "pos": "n.",
    "en_def": "the crime of tricking people to get money",
    "cn_def": "詐欺"
  },
  "shareholder": {
    "pos": "n.",
    "en_def": "a person who owns part of a company",
    "cn_def": "股東"
  },
  "conductor": {
    "pos": "n.",
    "en_def": "a person who checks tickets on a train or bus",
    "cn_def": "車掌;列車長"
  },
  "stethoscope": {
    "pos": "n.",
    "en_def": "a tool doctors use to listen to your heart and breathing",
    "cn_def": "聽診器"
  },
  "spark plug": {
    "pos": "n.",
    "en_def": "a small part that makes a spark to light fuel in an engine",
    "cn_def": "火星塞"
  },
  "finished goods": {
    "pos": "n.",
    "en_def": "products that are ready to be sold",
    "cn_def": "成品"
  },
  "factory worker": {
    "pos": "n.",
    "en_def": "a person who works in a factory",
    "cn_def": "工廠工人"
  },
  "backer": {
    "pos": "n.",
    "en_def": "someone who supports a project with money",
    "cn_def": "資助者;支持者"
  },
  "mill": {
    "pos": "n.",
    "en_def": "a building with machines for making cloth or flour",
    "cn_def": "磨坊;紡織廠"
  },
  "downside": {
    "pos": "n.",
    "en_def": "a disadvantage",
    "cn_def": "缺點;壞處"
  },
  "phonograph": {
    "pos": "n.",
    "en_def": "an early machine for recording and playing sound",
    "cn_def": "留聲機(早期)"
  },
  "role": {
    "pos": "n.",
    "en_def": "the job or purpose someone or something has",
    "cn_def": "角色;作用"
  },
  "capitalism": {
    "pos": "n.",
    "en_def": "an economic system based on private business and profit",
    "cn_def": "資本主義"
  },
  "level crossing": {
    "pos": "n.",
    "en_def": "a place where a road crosses a railway line",
    "cn_def": "平交道"
  },
  "intellectual property": {
    "pos": "n.phr.",
    "en_def": "ideas and inventions that legally belong to their creator",
    "cn_def": "智慧財產"
  },
  "minimum wage": {
    "pos": "n.",
    "en_def": "the lowest pay that the law allows",
    "cn_def": "最低工資"
  },
  "child labour": {
    "pos": "n.",
    "en_def": "the use of children as workers",
    "cn_def": "童工"
  },
  "turning point": {
    "pos": "n.phr.",
    "en_def": "a moment when a big change happens",
    "cn_def": "轉捩點"
  },
  "water wheel": {
    "pos": "n.",
    "en_def": "a large wheel turned by flowing water to power machines",
    "cn_def": "水車"
  },
  "spinning wheel": {
    "pos": "n.",
    "en_def": "a simple machine for making thread at home",
    "cn_def": "紡車"
  },
  "middle class": {
    "pos": "n.",
    "en_def": "people with average income, such as teachers and shopkeepers",
    "cn_def": "中產階級"
  },
  "the daily grind": {
    "pos": "n.phr.",
    "en_def": "boring and tiring work that you do every day",
    "cn_def": "日復一日的苦差事"
  },
  "side effect": {
    "pos": "n.",
    "en_def": "an extra and usually bad result of something",
    "cn_def": "副作用"
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名聲;名氣"
  },
  "spindle": {
    "pos": "n.",
    "en_def": "a thin rod on which thread is wound when it is spun",
    "cn_def": "紡錘;錠子"
  },
  "exhibition": {
    "pos": "n.",
    "en_def": "a public show of objects or works",
    "cn_def": "展覽"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "systems for clean water and removing waste",
    "cn_def": "衛生設施;公共衛生"
  },
  "hygiene": {
    "pos": "n.",
    "en_def": "keeping yourself and places clean to stay healthy",
    "cn_def": "衛生"
  },
  "liberation": {
    "pos": "n.",
    "en_def": "the act of freeing someone from control",
    "cn_def": "解放;解脫"
  },
  "injustice": {
    "pos": "n.",
    "en_def": "a situation that is unfair",
    "cn_def": "不公義;不公平"
  },
  "colony": {
    "pos": "n.",
    "en_def": "a country or area controlled by another country",
    "cn_def": "殖民地"
  },
  "plentiful": {
    "pos": "adj.",
    "en_def": "existing in large amounts",
    "cn_def": "充足的;豐富的"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "connected with the art, ideas and customs of a society",
    "cn_def": "文化的"
  },
  "noteworthy": {
    "pos": "adj.",
    "en_def": "interesting or important enough to be noticed",
    "cn_def": "值得注意的"
  },
  "uptake": {
    "pos": "n.",
    "en_def": "the rate at which people start using something",
    "cn_def": "採用率;接受程度"
  },
  "conglomerate": {
    "pos": "n.",
    "en_def": "a large company made of many different businesses",
    "cn_def": "企業集團"
  },
  "access": {
    "pos": "n.",
    "en_def": "the chance or right to use something",
    "cn_def": "使用權;取得機會"
  },
  "chemical": {
    "pos": "n.",
    "en_def": "a substance made by or used in chemistry",
    "cn_def": "化學物質;化學品"
  },
  "chimney": {
    "pos": "n.",
    "en_def": "a tall pipe that carries smoke up and out of a building",
    "cn_def": "煙囪"
  },
  "retail": {
    "pos": "n.",
    "en_def": "the sale of goods to the public in shops",
    "cn_def": "零售"
  },
  "viaduct": {
    "pos": "n.",
    "en_def": "a long high bridge that carries a road or railway across a valley",
    "cn_def": "高架橋"
  },
  "horsepower": {
    "pos": "n.",
    "en_def": "a unit for measuring the power of an engine",
    "cn_def": "馬力"
  },
  "reformer": {
    "pos": "n.",
    "en_def": "a person who works to improve society",
    "cn_def": "改革者"
  },
  "trial": {
    "pos": "n.",
    "en_def": "a test to see if something works well",
    "cn_def": "試驗;試用"
  },
  "fraction": {
    "pos": "n.",
    "en_def": "a small part of something",
    "cn_def": "一小部分"
  },
  "raw material": {
    "pos": "n.",
    "en_def": "a natural substance used to make products",
    "cn_def": "原料"
  },
  "working class": {
    "pos": "n.",
    "en_def": "people who do physical or factory work for wages",
    "cn_def": "勞工階級"
  },
  "world's fair": {
    "pos": "n.",
    "en_def": "a large international exhibition of new products and ideas",
    "cn_def": "世界博覽會"
  },
  "sweatshop": {
    "pos": "n.",
    "en_def": "a factory where people work long hours for very low pay",
    "cn_def": "血汗工廠"
  },
  "epidemic": {
    "pos": "n.",
    "en_def": "a disease that spreads to many people quickly",
    "cn_def": "流行病;疫情"
  },
  "the brainchild of": {
    "pos": "n.phr.",
    "en_def": "an idea or invention created by a particular person",
    "cn_def": "……的心血結晶"
  },
  "mill owner": {
    "pos": "n.",
    "en_def": "a person who owns a factory or mill",
    "cn_def": "工廠主;磨坊主"
  },
  "rail": {
    "pos": "n.",
    "en_def": "a train system; travel by train",
    "cn_def": "鐵路(運輸)"
  },
  "generator": {
    "pos": "n.",
    "en_def": "a machine that produces electricity",
    "cn_def": "發電機"
  },
  "tycoon": {
    "pos": "n.",
    "en_def": "a very rich and powerful businessperson",
    "cn_def": "大亨;巨頭"
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a huge change in the way people live or work",
    "cn_def": "革命;重大變革"
  },
  "steam train": {
    "pos": "n.",
    "en_def": "a train pulled by an engine that uses steam",
    "cn_def": "蒸汽火車"
  },
  "steam engine": {
    "pos": "n.",
    "en_def": "a machine that uses steam to make power",
    "cn_def": "蒸汽機"
  },
  "spinning jenny": {
    "pos": "n.",
    "en_def": "an early machine that spun many threads at once",
    "cn_def": "珍妮紡紗機"
  },
  "furnace": {
    "pos": "n.",
    "en_def": "a very hot enclosed fire used to heat or melt things",
    "cn_def": "熔爐;火爐"
  },
  "barge": {
    "pos": "n.",
    "en_def": "a long flat boat for carrying goods on rivers or canals",
    "cn_def": "駁船"
  },
  "virtue": {
    "pos": "n.",
    "en_def": "a good quality in a person's character",
    "cn_def": "美德"
  },
  "trade": {
    "pos": "n.",
    "en_def": "the buying and selling of goods",
    "cn_def": "貿易"
  },
  "refrigerator": {
    "pos": "n.",
    "en_def": "a machine that keeps food cold",
    "cn_def": "冰箱"
  },
  "factory": {
    "pos": "n.",
    "en_def": "a building where goods are made in large numbers by machines",
    "cn_def": "工廠"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help, especially money or food given to people in need",
    "cn_def": "援助;救助"
  }
};

const EXTRA_GLOSSES = {};
