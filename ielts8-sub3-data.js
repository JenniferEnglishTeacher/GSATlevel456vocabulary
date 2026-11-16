// Topic 8 Subunit 3 Quiz Data: Dating & Scientific Methods 年代測定與科學方法
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S03 - Dating & Scientific Methods 年代測定與科學方法",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "radiocarbon dating",
    "pos": "n.phr.",
    "cn_def": "放射性碳定年法",
    "en_def": "a method of finding the age of old organic material",
    "sentence": "{{BLANK}} showed that the wooden boat was four thousand years old, so it is one of the oldest in Europe.",
    "cn": "放射性碳定年法顯示這艘木船已有四千年歷史,所以它是歐洲最古老的船之一。"
  },
  {
    "word": "isotope",
    "pos": "n.",
    "cn_def": "同位素",
    "en_def": "a form of a chemical element with a different weight",
    "sentence": "By testing the {{BLANK}} in a person's teeth, scientists can tell where that person grew up, even thousands of years later.",
    "cn": "透過檢測一個人牙齒中的同位素,科學家即使在數千年後也能知道那個人在哪裡長大。"
  },
  {
    "word": "half-life",
    "pos": "n.",
    "cn_def": "半衰期",
    "en_def": "the time it takes for half of a substance to disappear",
    "sentence": "Carbon-14 has a {{BLANK}} of about 5,730 years, so it is useful for dating objects that are not too old.",
    "cn": "碳十四的半衰期大約是五千七百三十年,所以它適合用來測定不太古老的物品年代。"
  },
  {
    "word": "dendrochronology",
    "pos": "n.",
    "cn_def": "樹輪年代學",
    "en_def": "dating wood by counting and comparing tree rings",
    "sentence": "Using {{BLANK}}, the team counted the rings in the old beams, and they found that the house was built in 1450.",
    "cn": "團隊運用樹輪年代學計算舊樑木的年輪,發現這棟房子建於1450年。"
  },
  {
    "word": "DNA",
    "pos": "n.",
    "cn_def": "去氧核糖核酸;DNA",
    "en_def": "the material in cells that carries genetic information",
    "sentence": "Scientists took {{BLANK}} from the ancient bones, and they discovered that the man was related to people living nearby today.",
    "cn": "科學家從古代骨骸中提取了DNA,發現這名男子與今天住在附近的人有親屬關係。"
  },
  {
    "word": "genome",
    "pos": "n.",
    "cn_def": "基因組",
    "en_def": "all the genetic information of a living thing",
    "sentence": "Researchers studied the {{BLANK}} of an ancient wolf, so they could learn when dogs first became pets.",
    "cn": "研究人員研究了一隻古代狼的基因組,以便了解狗最初是何時成為寵物的。"
  },
  {
    "word": "ancestry",
    "pos": "n.",
    "cn_def": "祖先;血統",
    "en_def": "the people your family came from in the past",
    "sentence": "Many people now test their {{BLANK}} with a simple kit, and some are surprised to find relatives in other countries.",
    "cn": "現在許多人用簡單的套組檢測自己的血統,有些人驚訝地發現自己在其他國家有親戚。"
  },
  {
    "word": "lineage",
    "pos": "n.",
    "cn_def": "世系;血統",
    "en_def": "a line of family descent from an ancestor",
    "sentence": "The noble family could trace its {{BLANK}} back to a famous king, so they were proud of their history.",
    "cn": "這個貴族家庭能把他們的世系追溯到一位著名的國王,所以他們以自己的歷史為傲。"
  },
  {
    "word": "microscope",
    "pos": "n.",
    "cn_def": "顯微鏡",
    "en_def": "an instrument that makes tiny things look bigger",
    "sentence": "Under the {{BLANK}}, the scientist saw tiny pieces of wheat on the stone tool, so she knew it was used for grinding grain.",
    "cn": "在顯微鏡下,科學家在石器上看到微小的小麥碎屑,所以她知道它是用來磨穀物的。"
  },
  {
    "word": "residue",
    "pos": "n.",
    "cn_def": "殘留物;殘渣",
    "en_def": "a small amount of something that remains after a process",
    "sentence": "Scientists tested the {{BLANK}} inside the old jar, and they found that it once held wine and honey.",
    "cn": "科學家檢驗了古罐內的殘留物,發現它曾經裝過葡萄酒和蜂蜜。"
  },
  {
    "word": "pollen",
    "pos": "n.",
    "cn_def": "花粉",
    "en_def": "fine powder from flowers",
    "sentence": "Ancient {{BLANK}} found in the mud showed which plants grew nearby, so experts could describe the landscape at that time.",
    "cn": "在泥土中發現的古代花粉顯示附近生長過哪些植物,所以專家能描述當時的地景。"
  },
  {
    "word": "timeline",
    "pos": "n.",
    "cn_def": "時間軸;年表",
    "en_def": "a list of events in the order they happened",
    "sentence": "Our teacher drew a {{BLANK}} on the board, and we added the dates of each ancient empire in different colours.",
    "cn": "老師在黑板上畫了一條時間軸,我們用不同顏色加上每個古代帝國的年代。"
  },
  {
    "word": "era",
    "pos": "n.",
    "cn_def": "時代;紀元",
    "en_def": "a long period of history",
    "sentence": "The Roman {{BLANK}} brought new roads to Britain, and many of those roads are still used today.",
    "cn": "羅馬時代為英國帶來了新的道路,其中許多道路至今仍在使用。"
  },
  {
    "word": "epoch",
    "pos": "n.",
    "cn_def": "時期;紀元",
    "en_def": "a period of time marked by special events",
    "sentence": "The invention of writing began a new {{BLANK}} in human history, because knowledge could finally be recorded.",
    "cn": "文字的發明開啟了人類歷史的新紀元,因為知識終於可以被記錄下來。"
  },
  {
    "word": "millennium",
    "pos": "n.",
    "cn_def": "一千年;千禧年",
    "en_def": "a period of one thousand years",
    "sentence": "The village has existed for more than a {{BLANK}}, and some of its families have lived there for forty generations.",
    "cn": "這個村莊已經存在超過一千年,其中一些家族已經在那裡住了四十代。"
  },
  {
    "word": "replica",
    "pos": "n.",
    "cn_def": "複製品",
    "en_def": "an exact copy of an object",
    "sentence": "The museum shows a {{BLANK}} of the golden mask, because the real one is too valuable to put on display.",
    "cn": "博物館展示的是黃金面具的複製品,因為真品太珍貴而無法公開展示。"
  },
  {
    "word": "reconstruct",
    "pos": "v.",
    "cn_def": "重建;重現",
    "en_def": "to build or create something again from pieces of evidence",
    "sentence": "Artists used the skull to {{BLANK}} the woman's face, and visitors could finally see what she might have looked like.",
    "cn": "藝術家利用頭骨重建了那名女子的臉孔,參觀者終於能看見她可能的樣貌。"
  },
  {
    "word": "forgery",
    "pos": "n.",
    "cn_def": "贗品;偽造品",
    "en_def": "a copy made to trick people into thinking it is real",
    "sentence": "The famous statue turned out to be a {{BLANK}}, because tests showed that the paint was only fifty years old.",
    "cn": "那座著名的雕像原來是贗品,因為檢測顯示顏料只有五十年的歷史。"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的",
    "en_def": "coming from living things such as plants or animals",
    "sentence": "{{BLANK}} materials like wood and leather usually rot away, but they can survive in very dry or very cold places.",
    "cn": "像木頭和皮革這樣的有機材料通常會腐爛,但它們能在非常乾燥或非常寒冷的地方保存下來。"
  },
  {
    "word": "decompose",
    "pos": "v.",
    "cn_def": "分解;腐爛",
    "en_def": "to break down slowly after death",
    "sentence": "Bodies usually {{BLANK}} quickly in warm soil, but the man found in the ice was almost perfectly preserved.",
    "cn": "屍體在溫暖的土壤中通常很快就會腐爛,但在冰中發現的那名男子幾乎被完整保存下來。"
  },
  {
    "word": "fossil",
    "pos": "n.",
    "cn_def": "化石",
    "en_def": "the remains of an ancient plant or animal in rock",
    "sentence": "My brother found a {{BLANK}} of a small sea creature on the beach, although the beach is now far from the sea.",
    "cn": "我弟弟在海灘上發現了一塊小型海洋生物的化石,雖然那片海灘現在離海很遠。"
  },
  {
    "word": "corrode",
    "pos": "v.",
    "cn_def": "腐蝕;鏽蝕",
    "en_def": "to be slowly damaged by water or chemicals",
    "sentence": "Iron objects {{BLANK}} quickly in wet soil, so ancient swords are often found as lumps of rust.",
    "cn": "鐵器在潮濕的土壤中很快就會腐蝕,所以古劍常常以一團鏽塊的樣子被發現。"
  },
  {
    "word": "geologist",
    "pos": "n.",
    "cn_def": "地質學家",
    "en_def": "a scientist who studies rocks and the earth",
    "sentence": "A {{BLANK}} helped the team understand the rock layers, so they could estimate when the river had flooded.",
    "cn": "一位地質學家幫助團隊了解岩層,所以他們能估計河流氾濫的時間。"
  },
  {
    "word": "X-ray",
    "pos": "n.",
    "cn_def": "X光(片)",
    "en_def": "a picture that shows the inside of an object",
    "sentence": "An {{BLANK}} of the mummy showed a broken leg, so experts think the man may have died after an accident.",
    "cn": "木乃伊的X光顯示一條斷腿,所以專家認為這名男子可能是在一場意外後去世的。"
  },
  {
    "word": "centuries-old",
    "pos": "adj.",
    "cn_def": "數百年歷史的",
    "en_def": "having existed for hundreds of years",
    "sentence": "The {{BLANK}} bridge is still used by cars today, although it was built for horses and carts.",
    "cn": "這座有數百年歷史的橋至今仍有汽車通行,雖然它當初是為馬和馬車而建的。"
  },
  {
    "word": "bacteria",
    "pos": "n.",
    "cn_def": "細菌",
    "en_def": "very small living things that can cause decay",
    "sentence": "In cold, dry places, {{BLANK}} cannot grow easily, so ancient bodies and clothes are often well preserved.",
    "cn": "在寒冷乾燥的地方細菌不容易生長,所以古代的遺體和衣物常常保存得很好。"
  }
];

const MCQS = [
  {
    "q": "_____ showed that the wooden boat was four thousand years old, so it is one of the oldest in Europe.",
    "options": [
      "radiocarbon dating",
      "a stone's throw",
      "ground-penetrating radar",
      "cave painting"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "By testing the _____ in a person's teeth, scientists can tell where that person grew up, even thousands of years later.",
    "options": [
      "faction",
      "isotope",
      "chamber",
      "amber"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Carbon-14 has a _____ of about 5,730 years, so it is useful for dating objects that are not too old.",
    "options": [
      "refuge",
      "cave",
      "half-life",
      "amulet"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Using _____, the team counted the rings in the old beams, and they found that the house was built in 1450.",
    "options": [
      "monarch",
      "refuge",
      "relic",
      "dendrochronology"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Scientists took _____ from the ancient bones, and they discovered that the man was related to people living nearby today.",
    "options": [
      "DNA",
      "astronomy",
      "sword",
      "excavation"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Researchers studied the _____ of an ancient wolf, so they could learn when dogs first became pets.",
    "options": [
      "posterity",
      "genome",
      "slab",
      "alliance"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Many people now test their _____ with a simple kit, and some are surprised to find relatives in other countries.",
    "options": [
      "galley",
      "amphitheatre",
      "ancestry",
      "brick"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The noble family could trace its _____ back to a famous king, so they were proud of their history.",
    "options": [
      "settlement",
      "sarcophagus",
      "battlefield",
      "lineage"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Under the _____, the scientist saw tiny pieces of wheat on the stone tool, so she knew it was used for grinding grain.",
    "options": [
      "microscope",
      "pyramid",
      "temple",
      "dynasty"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Scientists tested the _____ inside the old jar, and they found that it once held wine and honey.",
    "options": [
      "entirety",
      "residue",
      "artistry",
      "tomb"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Ancient _____ found in the mud showed which plants grew nearby, so experts could describe the landscape at that time.",
    "options": [
      "vestige",
      "refuge",
      "pollen",
      "relic"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Our teacher drew a _____ on the board, and we added the dates of each ancient empire in different colours.",
    "options": [
      "rampart",
      "renaissance",
      "antecedent",
      "timeline"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The Roman _____ brought new roads to Britain, and many of those roads are still used today.",
    "options": [
      "mammoth",
      "incursion",
      "era",
      "pillar"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The invention of writing began a new _____ in human history, because knowledge could finally be recorded.",
    "options": [
      "dynasty",
      "epoch",
      "sail",
      "chamber"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The village has existed for more than a _____, and some of its families have lived there for forty generations.",
    "options": [
      "millennium",
      "fabric",
      "pillar",
      "turmoil"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The museum shows a _____ of the golden mask, because the real one is too valuable to put on display.",
    "options": [
      "cornerstone",
      "spice",
      "merchant",
      "replica"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Artists used the skull to _____ the woman's face, and visitors could finally see what she might have looked like.",
    "options": [
      "reconstruct",
      "reclaim",
      "resurrect",
      "ransack"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The famous statue turned out to be a _____, because tests showed that the paint was only fifty years old.",
    "options": [
      "flint",
      "connotation",
      "forgery",
      "bead"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "_____ materials like wood and leather usually rot away, but they can survive in very dry or very cold places.",
    "options": [
      "weathered",
      "renowned",
      "prehistoric",
      "organic"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Bodies usually _____ quickly in warm soil, but the man found in the ice was almost perfectly preserved.",
    "options": [
      "barter",
      "decompose",
      "crumble",
      "lament"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "My brother found a _____ of a small sea creature on the beach, although the beach is now far from the sea.",
    "options": [
      "incursion",
      "plough",
      "fossil",
      "treasure"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Iron objects _____ quickly in wet soil, so ancient swords are often found as lumps of rust.",
    "options": [
      "ransack",
      "corrode",
      "catalogue",
      "barter"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "A _____ helped the team understand the rock layers, so they could estimate when the river had flooded.",
    "options": [
      "figurine",
      "apex",
      "monument",
      "geologist"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "An _____ of the mummy showed a broken leg, so experts think the man may have died after an accident.",
    "options": [
      "X-ray",
      "reign",
      "coffin",
      "incursion"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The _____ bridge is still used by cars today, although it was built for horses and carts.",
    "options": [
      "barren",
      "centuries-old",
      "renowned",
      "perennial"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "In cold, dry places, _____ cannot grow easily, so ancient bodies and clothes are often well preserved.",
    "options": [
      "sail",
      "tomb",
      "bacteria",
      "rubble"
    ],
    "answer": 2,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "radiocarbon dating": {
    "pos": "n.phr.",
    "en_def": "a method of finding the age of old organic material",
    "cn_def": "放射性碳定年法"
  },
  "isotope": {
    "pos": "n.",
    "en_def": "a form of a chemical element with a different weight",
    "cn_def": "同位素"
  },
  "half-life": {
    "pos": "n.",
    "en_def": "the time it takes for half of a substance to disappear",
    "cn_def": "半衰期"
  },
  "dendrochronology": {
    "pos": "n.",
    "en_def": "dating wood by counting and comparing tree rings",
    "cn_def": "樹輪年代學"
  },
  "dna": {
    "pos": "n.",
    "en_def": "the material in cells that carries genetic information",
    "cn_def": "去氧核糖核酸;DNA"
  },
  "genome": {
    "pos": "n.",
    "en_def": "all the genetic information of a living thing",
    "cn_def": "基因組"
  },
  "ancestry": {
    "pos": "n.",
    "en_def": "the people your family came from in the past",
    "cn_def": "祖先;血統"
  },
  "lineage": {
    "pos": "n.",
    "en_def": "a line of family descent from an ancestor",
    "cn_def": "世系;血統"
  },
  "microscope": {
    "pos": "n.",
    "en_def": "an instrument that makes tiny things look bigger",
    "cn_def": "顯微鏡"
  },
  "residue": {
    "pos": "n.",
    "en_def": "a small amount of something that remains after a process",
    "cn_def": "殘留物;殘渣"
  },
  "pollen": {
    "pos": "n.",
    "en_def": "fine powder from flowers",
    "cn_def": "花粉"
  },
  "timeline": {
    "pos": "n.",
    "en_def": "a list of events in the order they happened",
    "cn_def": "時間軸;年表"
  },
  "era": {
    "pos": "n.",
    "en_def": "a long period of history",
    "cn_def": "時代;紀元"
  },
  "epoch": {
    "pos": "n.",
    "en_def": "a period of time marked by special events",
    "cn_def": "時期;紀元"
  },
  "millennium": {
    "pos": "n.",
    "en_def": "a period of one thousand years",
    "cn_def": "一千年;千禧年"
  },
  "replica": {
    "pos": "n.",
    "en_def": "an exact copy of an object",
    "cn_def": "複製品"
  },
  "reconstruct": {
    "pos": "v.",
    "en_def": "to build or create something again from pieces of evidence",
    "cn_def": "重建;重現"
  },
  "forgery": {
    "pos": "n.",
    "en_def": "a copy made to trick people into thinking it is real",
    "cn_def": "贗品;偽造品"
  },
  "organic": {
    "pos": "adj.",
    "en_def": "coming from living things such as plants or animals",
    "cn_def": "有機的"
  },
  "decompose": {
    "pos": "v.",
    "en_def": "to break down slowly after death",
    "cn_def": "分解;腐爛"
  },
  "fossil": {
    "pos": "n.",
    "en_def": "the remains of an ancient plant or animal in rock",
    "cn_def": "化石"
  },
  "corrode": {
    "pos": "v.",
    "en_def": "to be slowly damaged by water or chemicals",
    "cn_def": "腐蝕;鏽蝕"
  },
  "geologist": {
    "pos": "n.",
    "en_def": "a scientist who studies rocks and the earth",
    "cn_def": "地質學家"
  },
  "x-ray": {
    "pos": "n.",
    "en_def": "a picture that shows the inside of an object",
    "cn_def": "X光(片)"
  },
  "centuries-old": {
    "pos": "adj.",
    "en_def": "having existed for hundreds of years",
    "cn_def": "數百年歷史的"
  },
  "bacteria": {
    "pos": "n.",
    "en_def": "very small living things that can cause decay",
    "cn_def": "細菌"
  },
  "a stone's throw": {
    "pos": "n.phr.",
    "en_def": "a very short distance",
    "cn_def": "一箭之遙;很近的距離"
  },
  "ground-penetrating radar": {
    "pos": "n.phr.",
    "en_def": "a machine that uses radio waves to see under the ground",
    "cn_def": "透地雷達"
  },
  "cave painting": {
    "pos": "n.phr.",
    "en_def": "an ancient picture painted on the wall of a cave",
    "cn_def": "洞穴壁畫"
  },
  "faction": {
    "pos": "n.",
    "en_def": "a small group within a larger group, often in conflict",
    "cn_def": "派系;派別"
  },
  "chamber": {
    "pos": "n.",
    "en_def": "a room, especially one inside a tomb or palace",
    "cn_def": "室;墓室"
  },
  "amber": {
    "pos": "n.",
    "en_def": "hard yellow stone made from old tree resin",
    "cn_def": "琥珀"
  },
  "refuge": {
    "pos": "n.",
    "en_def": "a place that gives protection from danger",
    "cn_def": "避難所;庇護"
  },
  "cave": {
    "pos": "n.",
    "en_def": "a large hole in a hill or under the ground",
    "cn_def": "洞穴"
  },
  "amulet": {
    "pos": "n.",
    "en_def": "a small object worn to protect against bad luck",
    "cn_def": "護身符"
  },
  "monarch": {
    "pos": "n.",
    "en_def": "a king or queen",
    "cn_def": "君主"
  },
  "relic": {
    "pos": "n.",
    "en_def": "an object that survives from the distant past",
    "cn_def": "遺物;古物"
  },
  "astronomy": {
    "pos": "n.",
    "en_def": "the scientific study of stars and planets",
    "cn_def": "天文學"
  },
  "sword": {
    "pos": "n.",
    "en_def": "a weapon with a long metal blade",
    "cn_def": "劍"
  },
  "excavation": {
    "pos": "n.",
    "en_def": "the careful digging up of an old site",
    "cn_def": "發掘(工作);挖掘"
  },
  "posterity": {
    "pos": "n.",
    "en_def": "all the people who will live in the future",
    "cn_def": "後代;後世"
  },
  "slab": {
    "pos": "n.",
    "en_def": "a thick, flat piece of stone",
    "cn_def": "石板;厚板"
  },
  "alliance": {
    "pos": "n.",
    "en_def": "an agreement between groups to support each other",
    "cn_def": "聯盟;同盟"
  },
  "galley": {
    "pos": "n.",
    "en_def": "an ancient ship moved by oars and sails",
    "cn_def": "划槳帆船;槳帆船"
  },
  "amphitheatre": {
    "pos": "n.",
    "en_def": "a round open building with rows of seats",
    "cn_def": "圓形劇場"
  },
  "brick": {
    "pos": "n.",
    "en_def": "a block of baked clay used for building",
    "cn_def": "磚塊"
  },
  "settlement": {
    "pos": "n.",
    "en_def": "a place where people have come to live",
    "cn_def": "聚落;定居點"
  },
  "sarcophagus": {
    "pos": "n.",
    "en_def": "a stone coffin, often decorated",
    "cn_def": "石棺"
  },
  "battlefield": {
    "pos": "n.",
    "en_def": "the place where a battle is fought",
    "cn_def": "戰場"
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
  "dynasty": {
    "pos": "n.",
    "en_def": "a series of rulers from the same family",
    "cn_def": "王朝;朝代"
  },
  "entirety": {
    "pos": "n.",
    "en_def": "the whole of something",
    "cn_def": "全部;整體"
  },
  "artistry": {
    "pos": "n.",
    "en_def": "great skill in creating something beautiful",
    "cn_def": "藝術技巧;藝術才能"
  },
  "tomb": {
    "pos": "n.",
    "en_def": "a large grave, often with a building over it",
    "cn_def": "墳墓;陵墓"
  },
  "vestige": {
    "pos": "n.",
    "en_def": "a small part or sign of something that once existed",
    "cn_def": "遺跡;殘跡"
  },
  "rampart": {
    "pos": "n.",
    "en_def": "a wide wall of earth or stone built for defence",
    "cn_def": "城牆;壁壘"
  },
  "renaissance": {
    "pos": "n.",
    "en_def": "a new period of interest and activity in something",
    "cn_def": "復興"
  },
  "antecedent": {
    "pos": "n.",
    "en_def": "something that existed before and influenced something later",
    "cn_def": "前身;先例"
  },
  "mammoth": {
    "pos": "n.",
    "en_def": "a large hairy elephant that lived long ago",
    "cn_def": "長毛象;猛獁象"
  },
  "incursion": {
    "pos": "n.",
    "en_def": "a sudden attack into another country's land",
    "cn_def": "入侵;侵襲"
  },
  "pillar": {
    "pos": "n.",
    "en_def": "a tall column that supports a roof",
    "cn_def": "柱子"
  },
  "sail": {
    "pos": "n.",
    "en_def": "a large cloth that catches the wind to move a ship",
    "cn_def": "帆"
  },
  "fabric": {
    "pos": "n.",
    "en_def": "the basic structure of a society",
    "cn_def": "結構;構造"
  },
  "turmoil": {
    "pos": "n.",
    "en_def": "a state of great confusion or disorder",
    "cn_def": "混亂;動盪"
  },
  "cornerstone": {
    "pos": "n.",
    "en_def": "the most important part on which something is based",
    "cn_def": "基石;基礎"
  },
  "spice": {
    "pos": "n.",
    "en_def": "a dried plant part used to add flavour to food",
    "cn_def": "香料"
  },
  "merchant": {
    "pos": "n.",
    "en_def": "a person who buys and sells goods, often abroad",
    "cn_def": "商人"
  },
  "reclaim": {
    "pos": "v.",
    "en_def": "to get back something that was taken from you",
    "cn_def": "收回;討回"
  },
  "resurrect": {
    "pos": "v.",
    "en_def": "to bring something back into use or existence",
    "cn_def": "復興;使復活"
  },
  "ransack": {
    "pos": "v.",
    "en_def": "to search a place roughly and steal things",
    "cn_def": "洗劫;搜劫"
  },
  "flint": {
    "pos": "n.",
    "en_def": "a hard grey stone that breaks into sharp pieces",
    "cn_def": "燧石;打火石"
  },
  "connotation": {
    "pos": "n.",
    "en_def": "an extra feeling or idea that a word suggests",
    "cn_def": "言外之意;含義"
  },
  "bead": {
    "pos": "n.",
    "en_def": "a small ball with a hole, used to make jewellery",
    "cn_def": "珠子"
  },
  "weathered": {
    "pos": "adj.",
    "en_def": "changed in colour or shape by wind and rain",
    "cn_def": "風化的;飽經風霜的"
  },
  "renowned": {
    "pos": "adj.",
    "en_def": "famous and respected",
    "cn_def": "著名的;享有盛譽的"
  },
  "prehistoric": {
    "pos": "adj.",
    "en_def": "from the time before writing was invented",
    "cn_def": "史前的"
  },
  "barter": {
    "pos": "v.",
    "en_def": "to exchange goods without using money",
    "cn_def": "以物易物"
  },
  "crumble": {
    "pos": "v.",
    "en_def": "to break into small pieces slowly",
    "cn_def": "崩塌;碎裂"
  },
  "lament": {
    "pos": "v.",
    "en_def": "to feel or say that you are very sad about something",
    "cn_def": "哀悼;悲嘆"
  },
  "plough": {
    "pos": "n.",
    "en_def": "a farm tool used to turn over the soil",
    "cn_def": "犁"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "a collection of gold, jewels or valuable objects",
    "cn_def": "寶藏;財寶"
  },
  "catalogue": {
    "pos": "v.",
    "en_def": "to make a detailed list of objects",
    "cn_def": "編目;登錄"
  },
  "figurine": {
    "pos": "n.",
    "en_def": "a small statue of a person or animal",
    "cn_def": "小雕像"
  },
  "apex": {
    "pos": "n.",
    "en_def": "the highest point of something",
    "cn_def": "頂點;巔峰"
  },
  "monument": {
    "pos": "n.",
    "en_def": "a building or statue built to remember a person or event",
    "cn_def": "紀念碑;古蹟"
  },
  "reign": {
    "pos": "n.",
    "en_def": "the period when a king or queen rules",
    "cn_def": "統治期間;在位期"
  },
  "coffin": {
    "pos": "n.",
    "en_def": "a box in which a dead body is buried",
    "cn_def": "棺材"
  },
  "barren": {
    "pos": "adj.",
    "en_def": "too dry or poor for plants to grow",
    "cn_def": "貧瘠的;荒蕪的"
  },
  "perennial": {
    "pos": "adj.",
    "en_def": "lasting for a very long time or happening again and again",
    "cn_def": "長期的;反覆出現的"
  },
  "rubble": {
    "pos": "n.",
    "en_def": "broken stones and bricks from a fallen building",
    "cn_def": "瓦礫;碎石"
  }
};

const EXTRA_GLOSSES = {};
