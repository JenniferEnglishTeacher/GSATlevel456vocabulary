// Topic 8 Subunit 2 Quiz Data: Artefacts & Materials 文物與材料
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S02 - Artefacts & Materials 文物與材料",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "artefact",
    "pos": "n.",
    "cn_def": "文物;手工藝品",
    "en_def": "an object made by people long ago",
    "sentence": "Every {{BLANK}} in the museum has a label, so visitors can learn where it was found and how old it is.",
    "cn": "博物館裡的每件文物都有標籤,所以參觀者能知道它是在哪裡被發現以及有多古老。"
  },
  {
    "word": "pottery",
    "pos": "n.",
    "cn_def": "陶器",
    "en_def": "pots and dishes made from baked clay",
    "sentence": "Ancient {{BLANK}} can tell us what people cooked, because scientists can test the food left inside the pots.",
    "cn": "古代陶器能告訴我們人們煮了什麼,因為科學家可以檢驗殘留在罐子裡的食物。"
  },
  {
    "word": "ceramic",
    "pos": "adj.",
    "cn_def": "陶瓷的",
    "en_def": "made of clay that has been baked hard",
    "sentence": "My grandmother collects old {{BLANK}} bowls, and she keeps the most valuable one in a glass cabinet.",
    "cn": "我奶奶收藏古老的陶瓷碗,她把最珍貴的那一個放在玻璃櫃裡。"
  },
  {
    "word": "clay",
    "pos": "n.",
    "cn_def": "黏土",
    "en_def": "soft, wet earth used to make pots",
    "sentence": "The children shaped little animals out of {{BLANK}}, and their teacher baked them in the school oven.",
    "cn": "孩子們用黏土捏出小動物,老師用學校的烤爐把它們烤硬。"
  },
  {
    "word": "kiln",
    "pos": "n.",
    "cn_def": "窯",
    "en_def": "a very hot oven for baking pottery or bricks",
    "sentence": "Archaeologists found an ancient {{BLANK}} near the river, so they believe the village made its own pots and bricks.",
    "cn": "考古學家在河邊發現了一座古窯,所以他們相信這個村莊自己製作陶罐和磚塊。"
  },
  {
    "word": "urn",
    "pos": "n.",
    "cn_def": "甕;骨灰罈",
    "en_def": "a large decorated pot, often used to hold ashes",
    "sentence": "The beautiful {{BLANK}} was found in a grave, and it still contained the ashes of a person who died long ago.",
    "cn": "這個美麗的甕是在墳墓裡發現的,裡面仍然裝著一位很久以前去世之人的骨灰。"
  },
  {
    "word": "bead",
    "pos": "n.",
    "cn_def": "珠子",
    "en_def": "a small ball with a hole, used to make jewellery",
    "sentence": "The necklace was made from hundreds of glass {{BLANK}}, and each one was coloured by hand.",
    "cn": "這條項鍊由數百顆玻璃珠子製成,每一顆都是手工上色的。"
  },
  {
    "word": "ornament",
    "pos": "n.",
    "cn_def": "裝飾品",
    "en_def": "an object used for decoration",
    "sentence": "The rich family decorated their home with gold {{BLANK}}, but poor families used simple wooden ones.",
    "cn": "富有的家庭用金色的裝飾品裝飾家裡,而貧窮的家庭則使用簡單的木製裝飾。"
  },
  {
    "word": "figurine",
    "pos": "n.",
    "cn_def": "小雕像",
    "en_def": "a small statue of a person or animal",
    "sentence": "The tiny {{BLANK}} of a horse is only five centimetres tall, but it is more than three thousand years old.",
    "cn": "這尊馬的小雕像只有五公分高,但它已有三千多年的歷史。"
  },
  {
    "word": "statue",
    "pos": "n.",
    "cn_def": "雕像",
    "en_def": "a large figure of a person or animal made of stone or metal",
    "sentence": "The {{BLANK}} of the king stood in the city square for centuries, until an earthquake knocked it over.",
    "cn": "國王的雕像在城市廣場上矗立了好幾個世紀,直到一場地震把它震倒了。"
  },
  {
    "word": "carving",
    "pos": "n.",
    "cn_def": "雕刻(品)",
    "en_def": "a shape or pattern cut into wood or stone",
    "sentence": "The walls of the cave are covered with {{BLANK}} of animals, and nobody knows exactly who made them.",
    "cn": "洞穴的牆上布滿了動物的雕刻,沒有人確切知道是誰刻的。"
  },
  {
    "word": "engrave",
    "pos": "v.",
    "cn_def": "雕刻;刻上",
    "en_def": "to cut words or pictures into a hard surface",
    "sentence": "The workers used to {{BLANK}} the king's name on every stone, so his power would be remembered forever.",
    "cn": "工人們過去會在每塊石頭上刻上國王的名字,這樣他的權力就會永遠被記住。"
  },
  {
    "word": "inscription",
    "pos": "n.",
    "cn_def": "銘文;碑文",
    "en_def": "words cut into stone or metal",
    "sentence": "The {{BLANK}} on the gravestone was hard to read, but the expert slowly worked out the name of the woman.",
    "cn": "墓碑上的銘文很難辨讀,但專家慢慢地解讀出了那名女子的名字。"
  },
  {
    "word": "papyrus",
    "pos": "n.",
    "cn_def": "莎草紙",
    "en_def": "paper made from a water plant by ancient Egyptians",
    "sentence": "Ancient Egyptians wrote on {{BLANK}} made from river plants, and some of these documents still survive today.",
    "cn": "古埃及人在用河邊植物製成的莎草紙上書寫,其中一些文件至今仍然留存。"
  },
  {
    "word": "parchment",
    "pos": "n.",
    "cn_def": "羊皮紙",
    "en_def": "writing material made from animal skin",
    "sentence": "Monks copied books by hand on {{BLANK}}, so a single book could take a whole year to finish.",
    "cn": "修道士用手在羊皮紙上抄寫書籍,所以一本書可能要花整整一年才能完成。"
  },
  {
    "word": "manuscript",
    "pos": "n.",
    "cn_def": "手抄本;手稿",
    "en_def": "a book or document written by hand",
    "sentence": "The old {{BLANK}} is kept in a dark room, because strong light could damage the ink on its pages.",
    "cn": "這份古老的手抄本被保存在一間暗室裡,因為強光可能會損壞書頁上的墨水。"
  },
  {
    "word": "bronze",
    "pos": "n.",
    "cn_def": "青銅",
    "en_def": "a hard brown metal made from copper and tin",
    "sentence": "The soldiers carried weapons made of {{BLANK}}, and these were much stronger than the stone tools used before.",
    "cn": "士兵們攜帶青銅製的武器,這些武器比之前使用的石器堅固得多。"
  },
  {
    "word": "copper",
    "pos": "n.",
    "cn_def": "銅",
    "en_def": "a soft reddish-brown metal",
    "sentence": "People first learned to melt {{BLANK}} about seven thousand years ago, and this changed how they made tools.",
    "cn": "人類大約在七千年前首次學會熔化銅,這改變了他們製作工具的方式。"
  },
  {
    "word": "flint",
    "pos": "n.",
    "cn_def": "燧石;打火石",
    "en_def": "a hard grey stone that breaks into sharp pieces",
    "sentence": "Early humans made knives from {{BLANK}}, because the stone could be shaped into a very sharp edge.",
    "cn": "早期人類用燧石製作刀子,因為這種石頭能被打製出非常鋒利的邊緣。"
  },
  {
    "word": "obsidian",
    "pos": "n.",
    "cn_def": "黑曜石",
    "en_def": "black glass formed from volcanic rock",
    "sentence": "Tools made of {{BLANK}} were traded over long distances, so scientists can trace ancient trade routes by studying them.",
    "cn": "黑曜石製的工具被交易到很遠的地方,所以科學家能透過研究它們來追溯古代的貿易路線。"
  },
  {
    "word": "antler",
    "pos": "n.",
    "cn_def": "鹿角",
    "en_def": "a branch-like horn on the head of a deer",
    "sentence": "Prehistoric people made needles and combs from deer {{BLANK}}, and some of them were beautifully decorated.",
    "cn": "史前人類用鹿角製作針和梳子,其中一些裝飾得很精美。"
  },
  {
    "word": "textile",
    "pos": "n.",
    "cn_def": "紡織品;布料",
    "en_def": "cloth or woven material",
    "sentence": "Ancient {{BLANK}} rarely survive because cloth rots easily, but dry deserts have kept some pieces in good condition.",
    "cn": "古代紡織品很少能保存下來,因為布料容易腐爛,但乾燥的沙漠讓一些布片保持在良好狀態。"
  },
  {
    "word": "loom",
    "pos": "n.",
    "cn_def": "織布機",
    "en_def": "a machine or frame for weaving cloth",
    "sentence": "The women in the village worked at a wooden {{BLANK}} every evening, and they made beautiful cloth for the market.",
    "cn": "村裡的婦女每天晚上都在木製織布機前工作,她們為市集織出美麗的布料。"
  },
  {
    "word": "weave",
    "pos": "v.",
    "cn_def": "編織;織",
    "en_def": "to make cloth by crossing threads over and under",
    "sentence": "Thousands of years ago, people {{BLANK}} baskets from grass, and some of these baskets were found in a dry cave.",
    "cn": "幾千年前,人們用草編織籃子,其中一些籃子在一個乾燥的洞穴裡被發現。",
    "answer": "wove",
    "alts": [
      "weave",
      "woven"
    ]
  },
  {
    "word": "dye",
    "pos": "n.",
    "cn_def": "染料",
    "en_def": "a substance used to change the colour of cloth",
    "sentence": "Purple {{BLANK}} was very expensive in ancient times, so only kings and rich people could wear purple clothes.",
    "cn": "紫色染料在古代非常昂貴,所以只有國王和富人才能穿紫色的衣服。"
  },
  {
    "word": "mosaic",
    "pos": "n.",
    "cn_def": "馬賽克;鑲嵌畫",
    "en_def": "a picture made from many small coloured stones",
    "sentence": "The floor of the Roman villa had a {{BLANK}} of dolphins, and it still looked bright after two thousand years.",
    "cn": "這座羅馬別墅的地板上有一幅海豚的鑲嵌畫,兩千年後它看起來仍然很鮮豔。"
  },
  {
    "word": "fresco",
    "pos": "n.",
    "cn_def": "濕壁畫",
    "en_def": "a painting made on wet plaster on a wall",
    "sentence": "The {{BLANK}} on the church wall shows a famous story, but parts of it have faded because of damp air.",
    "cn": "教堂牆上的濕壁畫描繪了一個著名的故事,但其中一些部分因為潮濕的空氣而褪色了。"
  },
  {
    "word": "pigment",
    "pos": "n.",
    "cn_def": "顏料;色素",
    "en_def": "a natural powder used to make colour",
    "sentence": "Cave artists mixed red {{BLANK}} from crushed rocks with animal fat, and they painted with their fingers.",
    "cn": "洞穴藝術家把壓碎的岩石製成的紅色顏料和動物油脂混合,然後用手指作畫。"
  },
  {
    "word": "amulet",
    "pos": "n.",
    "cn_def": "護身符",
    "en_def": "a small object worn to protect against bad luck",
    "sentence": "The child was buried with a small {{BLANK}} around her neck, because her parents believed it would keep her safe.",
    "cn": "那個孩子下葬時脖子上戴著一個小護身符,因為她的父母相信它能保佑她平安。"
  },
  {
    "word": "smelt",
    "pos": "v.",
    "cn_def": "冶煉;熔煉",
    "en_def": "to heat rock to get metal out of it",
    "sentence": "Ancient workers learned to {{BLANK}} iron in hot fires, and this allowed them to make stronger tools and weapons.",
    "cn": "古代工人學會在高溫的火中冶煉鐵,這讓他們能製造更堅固的工具和武器。"
  }
];

const MCQS = [
  {
    "q": "Every _____ in the museum has a label, so visitors can learn where it was found and how old it is.",
    "options": [
      "solstice",
      "faction",
      "boulder",
      "artefact"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Ancient _____ can tell us what people cooked, because scientists can test the food left inside the pots.",
    "options": [
      "grandeur",
      "pottery",
      "lineage",
      "residue"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My grandmother collects old _____ bowls, and she keeps the most valuable one in a glass cabinet.",
    "options": [
      "ceramic",
      "sprawling",
      "fabled",
      "secular"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The children shaped little animals out of _____, and their teacher baked them in the school oven.",
    "options": [
      "palace",
      "rubble",
      "clay",
      "calendar"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Archaeologists found an ancient _____ near the river, so they believe the village made its own pots and bricks.",
    "options": [
      "kiln",
      "pirate",
      "pyramid",
      "aqueduct"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The beautiful _____ was found in a grave, and it still contained the ashes of a person who died long ago.",
    "options": [
      "refuge",
      "urn",
      "geologist",
      "fabric"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The necklace was made from hundreds of glass _____, and each one was coloured by hand.",
    "options": [
      "bacteria",
      "feud",
      "bead",
      "spear"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The rich family decorated their home with gold _____, but poor families used simple wooden ones.",
    "options": [
      "juncture",
      "settlement",
      "dome",
      "ornament"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The tiny _____ of a horse is only five centimetres tall, but it is more than three thousand years old.",
    "options": [
      "artistry",
      "kingdom",
      "figurine",
      "palace"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The _____ of the king stood in the city square for centuries, until an earthquake knocked it over.",
    "options": [
      "remains",
      "custodian",
      "dome",
      "statue"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The walls of the cave are covered with _____ of animals, and nobody knows exactly who made them.",
    "options": [
      "carving",
      "posterity",
      "ancestry",
      "spice"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The workers used to _____ the king's name on every stone, so his power would be remembered forever.",
    "options": [
      "narrate",
      "engrave",
      "colonise",
      "lament"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The _____ on the gravestone was hard to read, but the expert slowly worked out the name of the woman.",
    "options": [
      "inscription",
      "habitation",
      "plough",
      "connotation"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Ancient Egyptians wrote on _____ made from river plants, and some of these documents still survive today.",
    "options": [
      "revolt",
      "papyrus",
      "priest",
      "fragment"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Monks copied books by hand on _____, so a single book could take a whole year to finish.",
    "options": [
      "palace",
      "continuity",
      "grave",
      "parchment"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The old _____ is kept in a dark room, because strong light could damage the ink on its pages.",
    "options": [
      "fortress",
      "stratum",
      "manuscript",
      "epoch"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The soldiers carried weapons made of _____, and these were much stronger than the stone tools used before.",
    "options": [
      "pollen",
      "bronze",
      "antiquity",
      "ancestry"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "People first learned to melt _____ about seven thousand years ago, and this changed how they made tools.",
    "options": [
      "myth",
      "burial",
      "residue",
      "copper"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Early humans made knives from _____, because the stone could be shaped into a very sharp edge.",
    "options": [
      "myth",
      "uprising",
      "flint",
      "masonry"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Tools made of _____ were traded over long distances, so scientists can trace ancient trade routes by studying them.",
    "options": [
      "obsidian",
      "pharaoh",
      "city-state",
      "microscope"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Prehistoric people made needles and combs from deer _____, and some of them were beautifully decorated.",
    "options": [
      "amphitheatre",
      "legend",
      "antler",
      "fortress"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Ancient _____ rarely survive because cloth rots easily, but dry deserts have kept some pieces in good condition.",
    "options": [
      "slab",
      "textile",
      "pillar",
      "plough"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The women in the village worked at a wooden _____ every evening, and they made beautiful cloth for the market.",
    "options": [
      "loom",
      "democracy",
      "feud",
      "spear"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Thousands of years ago, people _____ baskets from grass, and some of these baskets were found in a dry cave.",
    "options": [
      "oppress",
      "outlive",
      "mingle",
      "wove"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Purple _____ was very expensive in ancient times, so only kings and rich people could wear purple clothes.",
    "options": [
      "dye",
      "peril",
      "sanctity",
      "DNA"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The floor of the Roman villa had a _____ of dolphins, and it still looked bright after two thousand years.",
    "options": [
      "hearth",
      "mosaic",
      "patron",
      "juncture"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The _____ on the church wall shows a famous story, but parts of it have faded because of damp air.",
    "options": [
      "precursor",
      "pharaoh",
      "dominion",
      "fresco"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Cave artists mixed red _____ from crushed rocks with animal fat, and they painted with their fingers.",
    "options": [
      "heir",
      "X-ray",
      "pigment",
      "amphitheatre"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The child was buried with a small _____ around her neck, because her parents believed it would keep her safe.",
    "options": [
      "monarch",
      "amulet",
      "half-life",
      "monument"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Ancient workers learned to _____ iron in hot fires, and this allowed them to make stronger tools and weapons.",
    "options": [
      "surmise",
      "reinstate",
      "extinguish",
      "smelt"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "artefact": {
    "pos": "n.",
    "en_def": "an object made by people long ago",
    "cn_def": "文物;手工藝品"
  },
  "pottery": {
    "pos": "n.",
    "en_def": "pots and dishes made from baked clay",
    "cn_def": "陶器"
  },
  "ceramic": {
    "pos": "adj.",
    "en_def": "made of clay that has been baked hard",
    "cn_def": "陶瓷的"
  },
  "clay": {
    "pos": "n.",
    "en_def": "soft, wet earth used to make pots",
    "cn_def": "黏土"
  },
  "kiln": {
    "pos": "n.",
    "en_def": "a very hot oven for baking pottery or bricks",
    "cn_def": "窯"
  },
  "urn": {
    "pos": "n.",
    "en_def": "a large decorated pot, often used to hold ashes",
    "cn_def": "甕;骨灰罈"
  },
  "bead": {
    "pos": "n.",
    "en_def": "a small ball with a hole, used to make jewellery",
    "cn_def": "珠子"
  },
  "ornament": {
    "pos": "n.",
    "en_def": "an object used for decoration",
    "cn_def": "裝飾品"
  },
  "figurine": {
    "pos": "n.",
    "en_def": "a small statue of a person or animal",
    "cn_def": "小雕像"
  },
  "statue": {
    "pos": "n.",
    "en_def": "a large figure of a person or animal made of stone or metal",
    "cn_def": "雕像"
  },
  "carving": {
    "pos": "n.",
    "en_def": "a shape or pattern cut into wood or stone",
    "cn_def": "雕刻(品)"
  },
  "engrave": {
    "pos": "v.",
    "en_def": "to cut words or pictures into a hard surface",
    "cn_def": "雕刻;刻上"
  },
  "inscription": {
    "pos": "n.",
    "en_def": "words cut into stone or metal",
    "cn_def": "銘文;碑文"
  },
  "papyrus": {
    "pos": "n.",
    "en_def": "paper made from a water plant by ancient Egyptians",
    "cn_def": "莎草紙"
  },
  "parchment": {
    "pos": "n.",
    "en_def": "writing material made from animal skin",
    "cn_def": "羊皮紙"
  },
  "manuscript": {
    "pos": "n.",
    "en_def": "a book or document written by hand",
    "cn_def": "手抄本;手稿"
  },
  "bronze": {
    "pos": "n.",
    "en_def": "a hard brown metal made from copper and tin",
    "cn_def": "青銅"
  },
  "copper": {
    "pos": "n.",
    "en_def": "a soft reddish-brown metal",
    "cn_def": "銅"
  },
  "flint": {
    "pos": "n.",
    "en_def": "a hard grey stone that breaks into sharp pieces",
    "cn_def": "燧石;打火石"
  },
  "obsidian": {
    "pos": "n.",
    "en_def": "black glass formed from volcanic rock",
    "cn_def": "黑曜石"
  },
  "antler": {
    "pos": "n.",
    "en_def": "a branch-like horn on the head of a deer",
    "cn_def": "鹿角"
  },
  "textile": {
    "pos": "n.",
    "en_def": "cloth or woven material",
    "cn_def": "紡織品;布料"
  },
  "loom": {
    "pos": "n.",
    "en_def": "a machine or frame for weaving cloth",
    "cn_def": "織布機"
  },
  "wove": {
    "pos": "v.",
    "en_def": "to make cloth by crossing threads over and under",
    "cn_def": "編織;織"
  },
  "weave": {
    "pos": "v.",
    "en_def": "to make cloth by crossing threads over and under",
    "cn_def": "編織;織"
  },
  "dye": {
    "pos": "n.",
    "en_def": "a substance used to change the colour of cloth",
    "cn_def": "染料"
  },
  "mosaic": {
    "pos": "n.",
    "en_def": "a picture made from many small coloured stones",
    "cn_def": "馬賽克;鑲嵌畫"
  },
  "fresco": {
    "pos": "n.",
    "en_def": "a painting made on wet plaster on a wall",
    "cn_def": "濕壁畫"
  },
  "pigment": {
    "pos": "n.",
    "en_def": "a natural powder used to make colour",
    "cn_def": "顏料;色素"
  },
  "amulet": {
    "pos": "n.",
    "en_def": "a small object worn to protect against bad luck",
    "cn_def": "護身符"
  },
  "smelt": {
    "pos": "v.",
    "en_def": "to heat rock to get metal out of it",
    "cn_def": "冶煉;熔煉"
  },
  "solstice": {
    "pos": "n.",
    "en_def": "the longest or shortest day of the year",
    "cn_def": "至日(夏至或冬至)"
  },
  "faction": {
    "pos": "n.",
    "en_def": "a small group within a larger group, often in conflict",
    "cn_def": "派系;派別"
  },
  "boulder": {
    "pos": "n.",
    "en_def": "a very large rock",
    "cn_def": "巨石;大圓石"
  },
  "grandeur": {
    "pos": "n.",
    "en_def": "the quality of being very large and impressive",
    "cn_def": "宏偉;壯麗"
  },
  "lineage": {
    "pos": "n.",
    "en_def": "a line of family descent from an ancestor",
    "cn_def": "世系;血統"
  },
  "residue": {
    "pos": "n.",
    "en_def": "a small amount of something that remains after a process",
    "cn_def": "殘留物;殘渣"
  },
  "sprawling": {
    "pos": "adj.",
    "en_def": "spreading out over a large area",
    "cn_def": "延伸廣闊的;雜亂擴展的"
  },
  "fabled": {
    "pos": "adj.",
    "en_def": "famous and talked about in old stories",
    "cn_def": "傳說中的;著名的"
  },
  "secular": {
    "pos": "adj.",
    "en_def": "not connected with religion",
    "cn_def": "世俗的;非宗教的"
  },
  "palace": {
    "pos": "n.",
    "en_def": "a large, grand house of a king or queen",
    "cn_def": "宮殿"
  },
  "rubble": {
    "pos": "n.",
    "en_def": "broken stones and bricks from a fallen building",
    "cn_def": "瓦礫;碎石"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a system for dividing the year into days and months",
    "cn_def": "曆法;日曆"
  },
  "pirate": {
    "pos": "n.",
    "en_def": "a person who attacks and robs ships at sea",
    "cn_def": "海盜"
  },
  "pyramid": {
    "pos": "n.",
    "en_def": "a huge stone building with four sloping sides",
    "cn_def": "金字塔"
  },
  "aqueduct": {
    "pos": "n.",
    "en_def": "a bridge-like structure that carries water",
    "cn_def": "導水渠;高架渠"
  },
  "refuge": {
    "pos": "n.",
    "en_def": "a place that gives protection from danger",
    "cn_def": "避難所;庇護"
  },
  "geologist": {
    "pos": "n.",
    "en_def": "a scientist who studies rocks and the earth",
    "cn_def": "地質學家"
  },
  "fabric": {
    "pos": "n.",
    "en_def": "the basic structure of a society",
    "cn_def": "結構;構造"
  },
  "bacteria": {
    "pos": "n.",
    "en_def": "very small living things that can cause decay",
    "cn_def": "細菌"
  },
  "feud": {
    "pos": "n.",
    "en_def": "a long, bitter argument between families or groups",
    "cn_def": "世仇;長期爭執"
  },
  "spear": {
    "pos": "n.",
    "en_def": "a long stick with a sharp point used for hunting",
    "cn_def": "矛;長矛"
  },
  "juncture": {
    "pos": "n.",
    "en_def": "a particular point in time, especially an important one",
    "cn_def": "關頭;時刻"
  },
  "settlement": {
    "pos": "n.",
    "en_def": "a place where people have come to live",
    "cn_def": "聚落;定居點"
  },
  "dome": {
    "pos": "n.",
    "en_def": "a round roof shaped like half a ball",
    "cn_def": "圓頂"
  },
  "artistry": {
    "pos": "n.",
    "en_def": "great skill in creating something beautiful",
    "cn_def": "藝術技巧;藝術才能"
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country ruled by a king or queen",
    "cn_def": "王國"
  },
  "remains": {
    "pos": "n.",
    "en_def": "parts of something that are left after a long time",
    "cn_def": "遺骸;遺跡"
  },
  "custodian": {
    "pos": "n.",
    "en_def": "a person or group responsible for protecting something",
    "cn_def": "守護者;保管人"
  },
  "posterity": {
    "pos": "n.",
    "en_def": "all the people who will live in the future",
    "cn_def": "後代;後世"
  },
  "ancestry": {
    "pos": "n.",
    "en_def": "the people your family came from in the past",
    "cn_def": "祖先;血統"
  },
  "spice": {
    "pos": "n.",
    "en_def": "a dried plant part used to add flavour to food",
    "cn_def": "香料"
  },
  "narrate": {
    "pos": "v.",
    "en_def": "to tell a story or describe events",
    "cn_def": "敘述;講述"
  },
  "colonise": {
    "pos": "v.",
    "en_def": "to take control of a place and send people to live there",
    "cn_def": "殖民;移居"
  },
  "lament": {
    "pos": "v.",
    "en_def": "to feel or say that you are very sad about something",
    "cn_def": "哀悼;悲嘆"
  },
  "habitation": {
    "pos": "n.",
    "en_def": "the act of living in a place",
    "cn_def": "居住;住所"
  },
  "plough": {
    "pos": "n.",
    "en_def": "a farm tool used to turn over the soil",
    "cn_def": "犁"
  },
  "connotation": {
    "pos": "n.",
    "en_def": "an extra feeling or idea that a word suggests",
    "cn_def": "言外之意;含義"
  },
  "revolt": {
    "pos": "n.",
    "en_def": "an attempt by people to fight against their rulers",
    "cn_def": "叛亂;起義"
  },
  "priest": {
    "pos": "n.",
    "en_def": "a person who performs religious ceremonies",
    "cn_def": "祭司;神職人員"
  },
  "fragment": {
    "pos": "n.",
    "en_def": "a small broken piece of something",
    "cn_def": "碎片;片段"
  },
  "continuity": {
    "pos": "n.",
    "en_def": "the state of continuing without stopping or changing",
    "cn_def": "連續性;延續"
  },
  "grave": {
    "pos": "n.",
    "en_def": "a place in the ground where a dead person is buried",
    "cn_def": "墳墓"
  },
  "fortress": {
    "pos": "n.",
    "en_def": "a strong building used for military defence",
    "cn_def": "堡壘;要塞"
  },
  "stratum": {
    "pos": "n.",
    "en_def": "one layer of soil or rock (plural: strata)",
    "cn_def": "地層;層"
  },
  "epoch": {
    "pos": "n.",
    "en_def": "a period of time marked by special events",
    "cn_def": "時期;紀元"
  },
  "pollen": {
    "pos": "n.",
    "en_def": "fine powder from flowers",
    "cn_def": "花粉"
  },
  "antiquity": {
    "pos": "n.",
    "en_def": "the ancient past, especially before the Middle Ages",
    "cn_def": "古代;上古"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an ancient story about gods and heroes",
    "cn_def": "神話"
  },
  "burial": {
    "pos": "n.",
    "en_def": "the act of putting a dead body in the ground",
    "cn_def": "埋葬;葬禮"
  },
  "uprising": {
    "pos": "n.",
    "en_def": "a situation where people fight against those in power",
    "cn_def": "起義;暴動"
  },
  "masonry": {
    "pos": "n.",
    "en_def": "the stones or bricks that make up a building",
    "cn_def": "石造結構;磚石"
  },
  "pharaoh": {
    "pos": "n.",
    "en_def": "a king of ancient Egypt",
    "cn_def": "法老"
  },
  "city-state": {
    "pos": "n.",
    "en_def": "a city that governs itself like an independent country",
    "cn_def": "城邦"
  },
  "microscope": {
    "pos": "n.",
    "en_def": "an instrument that makes tiny things look bigger",
    "cn_def": "顯微鏡"
  },
  "amphitheatre": {
    "pos": "n.",
    "en_def": "a round open building with rows of seats",
    "cn_def": "圓形劇場"
  },
  "legend": {
    "pos": "n.",
    "en_def": "an old story that may be partly true",
    "cn_def": "傳說"
  },
  "slab": {
    "pos": "n.",
    "en_def": "a thick, flat piece of stone",
    "cn_def": "石板;厚板"
  },
  "pillar": {
    "pos": "n.",
    "en_def": "a tall column that supports a roof",
    "cn_def": "柱子"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system where people choose their leaders by voting",
    "cn_def": "民主(制度)"
  },
  "oppress": {
    "pos": "v.",
    "en_def": "to treat a group of people cruelly and unfairly",
    "cn_def": "壓迫"
  },
  "outlive": {
    "pos": "v.",
    "en_def": "to live longer than someone or something",
    "cn_def": "比…活得長;比…存在更久"
  },
  "mingle": {
    "pos": "v.",
    "en_def": "to mix together",
    "cn_def": "混合;交融"
  },
  "peril": {
    "pos": "n.",
    "en_def": "great danger",
    "cn_def": "危險;險境"
  },
  "sanctity": {
    "pos": "n.",
    "en_def": "the quality of being holy or very important",
    "cn_def": "神聖性"
  },
  "dna": {
    "pos": "n.",
    "en_def": "the material in cells that carries genetic information",
    "cn_def": "去氧核糖核酸;DNA"
  },
  "hearth": {
    "pos": "n.",
    "en_def": "the area around a fire in a home",
    "cn_def": "爐床;火爐邊"
  },
  "patron": {
    "pos": "n.",
    "en_def": "a person who gives money to support artists or projects",
    "cn_def": "資助者;贊助人"
  },
  "precursor": {
    "pos": "n.",
    "en_def": "something that comes before and leads to something else",
    "cn_def": "先驅;前兆"
  },
  "dominion": {
    "pos": "n.",
    "en_def": "the power to rule, or the land that someone rules",
    "cn_def": "統治權;領土"
  },
  "heir": {
    "pos": "n.",
    "en_def": "a person who will receive someone's property or position",
    "cn_def": "繼承人"
  },
  "x-ray": {
    "pos": "n.",
    "en_def": "a picture that shows the inside of an object",
    "cn_def": "X光(片)"
  },
  "monarch": {
    "pos": "n.",
    "en_def": "a king or queen",
    "cn_def": "君主"
  },
  "half-life": {
    "pos": "n.",
    "en_def": "the time it takes for half of a substance to disappear",
    "cn_def": "半衰期"
  },
  "monument": {
    "pos": "n.",
    "en_def": "a building or statue built to remember a person or event",
    "cn_def": "紀念碑;古蹟"
  },
  "surmise": {
    "pos": "v.",
    "en_def": "to guess something without much evidence",
    "cn_def": "推測;猜測"
  },
  "reinstate": {
    "pos": "v.",
    "en_def": "to put someone or something back in its old position",
    "cn_def": "恢復(原職或原狀)"
  },
  "extinguish": {
    "pos": "v.",
    "en_def": "to put out a fire or end something",
    "cn_def": "熄滅;撲滅"
  }
};

const EXTRA_GLOSSES = {};
