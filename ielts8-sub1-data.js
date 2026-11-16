// Topic 8 Subunit 1 Quiz Data: Archaeology & Excavation 考古與發掘
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S01 - Archaeology & Excavation 考古與發掘",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "archaeology",
    "pos": "n.",
    "cn_def": "考古學",
    "en_def": "the study of the past by digging up old objects and places",
    "sentence": "My cousin chose to study {{BLANK}} at university, because she loves finding out how people lived thousands of years ago.",
    "cn": "我表姊選擇在大學念考古學,因為她很喜歡探究幾千年前的人們如何生活。"
  },
  {
    "word": "archaeologist",
    "pos": "n.",
    "cn_def": "考古學家",
    "en_def": "a person who studies the past by digging up old things",
    "sentence": "The {{BLANK}} carefully lifted the old pot out of the ground, and she smiled because it was still in one piece.",
    "cn": "那位考古學家小心地把古老的陶罐從地下取出,她笑了,因為它仍然完整無缺。"
  },
  {
    "word": "archaeological",
    "pos": "adj.",
    "cn_def": "考古的",
    "en_def": "connected with the study of ancient remains",
    "sentence": "Builders found an {{BLANK}} site under the new car park, so the work stopped while experts studied the area.",
    "cn": "工人在新停車場底下發現了一個考古遺址,所以工程在專家研究這個區域時暫停了。"
  },
  {
    "word": "excavate",
    "pos": "v.",
    "cn_def": "發掘;挖掘",
    "en_def": "to dig carefully to find buried objects",
    "sentence": "The team plans to {{BLANK}} the hill next summer, because local farmers have found old coins there for years.",
    "cn": "團隊計畫明年夏天發掘這座山丘,因為當地農夫多年來一直在那裡發現古錢幣。"
  },
  {
    "word": "excavation",
    "pos": "n.",
    "cn_def": "發掘(工作);挖掘",
    "en_def": "the careful digging up of an old site",
    "sentence": "The {{BLANK}} lasted three months, and students from five countries helped the experts remove the soil by hand.",
    "cn": "這次發掘工作持續了三個月,來自五個國家的學生協助專家們用手清除泥土。"
  },
  {
    "word": "dig",
    "pos": "n.",
    "cn_def": "考古挖掘(活動)",
    "en_def": "an organised archaeological excavation",
    "sentence": "I joined a summer {{BLANK}} in Greece last year, and I spent every morning brushing dirt off broken pottery.",
    "cn": "我去年參加了希臘的一個夏季考古挖掘,每天早上都在刷掉碎陶片上的泥土。"
  },
  {
    "word": "trowel",
    "pos": "n.",
    "cn_def": "小鏟子(考古用手鏟)",
    "en_def": "a small hand tool with a flat blade for digging",
    "sentence": "Each volunteer was given a {{BLANK}} and a bucket, and they started scraping the soil away very slowly.",
    "cn": "每位志工都拿到一把小鏟子和一個水桶,然後他們開始非常緩慢地刮去泥土。"
  },
  {
    "word": "sieve",
    "pos": "n.",
    "cn_def": "篩子",
    "en_def": "a tool with a net that separates small things from soil",
    "sentence": "We poured the soil through a {{BLANK}}, so even tiny beads and fish bones would not be thrown away.",
    "cn": "我們把泥土倒進篩子裡,這樣連小珠子和魚骨頭都不會被丟掉。"
  },
  {
    "word": "pit",
    "pos": "n.",
    "cn_def": "坑;坑洞",
    "en_def": "a hole dug in the ground",
    "sentence": "The workers found an ancient rubbish {{BLANK}} full of broken bowls, and it told them a lot about what people ate.",
    "cn": "工人們發現了一個裝滿破碗的古代垃圾坑,它透露了許多關於人們吃些什麼的資訊。"
  },
  {
    "word": "mound",
    "pos": "n.",
    "cn_def": "土墩;土丘",
    "en_def": "a small hill made of earth or stones",
    "sentence": "The grassy {{BLANK}} near the village looked natural, but scientists discovered that it was actually an ancient grave.",
    "cn": "村莊附近那座長滿草的土丘看起來像是天然的,但科學家發現它其實是一座古墓。"
  },
  {
    "word": "stratum",
    "pos": "n.",
    "cn_def": "地層;層",
    "en_def": "one layer of soil or rock (plural: strata)",
    "sentence": "Each {{BLANK}} of soil represents a different period, so the deepest objects are usually the oldest.",
    "cn": "每一地層的土壤代表一個不同的時期,所以最深處的物品通常是最古老的。"
  },
  {
    "word": "unearth",
    "pos": "v.",
    "cn_def": "發掘出;出土",
    "en_def": "to find something by digging it out of the ground",
    "sentence": "Farmers often {{BLANK}} old tools while ploughing their fields, and some of them are more than two thousand years old.",
    "cn": "農夫在犁田時常常挖出古老的工具,其中一些已有兩千多年的歷史。"
  },
  {
    "word": "ruin",
    "pos": "n.",
    "cn_def": "廢墟;遺跡",
    "en_def": "the broken parts left of an old building",
    "sentence": "We walked around the {{BLANK}} of an old castle, and our guide explained how the walls had once looked.",
    "cn": "我們在一座古城堡的廢墟周圍散步,導遊解釋了那些城牆以前的樣子。"
  },
  {
    "word": "remains",
    "pos": "n.",
    "cn_def": "遺骸;遺跡",
    "en_def": "parts of something that are left after a long time",
    "sentence": "The {{BLANK}} of a Roman house were found under the shopping centre, so the builders had to change their plans.",
    "cn": "在購物中心底下發現了羅馬房屋的遺跡,所以建商必須改變他們的計畫。"
  },
  {
    "word": "rubble",
    "pos": "n.",
    "cn_def": "瓦礫;碎石",
    "en_def": "broken stones and bricks from a fallen building",
    "sentence": "After the earthquake, the old temple was just a pile of {{BLANK}}, but archaeologists still found statues inside it.",
    "cn": "地震過後,那座古老的寺廟只剩一堆瓦礫,但考古學家仍然在裡面找到雕像。"
  },
  {
    "word": "buried",
    "pos": "adj.",
    "cn_def": "被埋藏的",
    "en_def": "hidden under the ground",
    "sentence": "The children dreamed of finding {{BLANK}} treasure on the beach, but they only found an old bottle cap.",
    "cn": "孩子們夢想在海灘上找到被埋藏的寶藏,但他們只找到一個舊瓶蓋。"
  },
  {
    "word": "brush",
    "pos": "v.",
    "cn_def": "刷;輕刷",
    "en_def": "to clean something gently with a brush",
    "sentence": "The students had to {{BLANK}} the dirt away very gently, because the old bones could break easily.",
    "cn": "學生們必須非常輕柔地刷掉泥土,因為那些古老的骨頭很容易斷裂。"
  },
  {
    "word": "fragment",
    "pos": "n.",
    "cn_def": "碎片;片段",
    "en_def": "a small broken piece of something",
    "sentence": "They found a {{BLANK}} of a painted wall, and experts used it to imagine the colours of the whole room.",
    "cn": "他們找到了一塊彩繪牆壁的碎片,專家用它來想像整個房間的顏色。"
  },
  {
    "word": "shard",
    "pos": "n.",
    "cn_def": "(陶瓷或玻璃)碎片",
    "en_def": "a sharp broken piece of pottery or glass",
    "sentence": "Thousands of pottery {{BLANK}} were collected from the site, and volunteers spent months trying to fit them together.",
    "cn": "從遺址收集了數千片陶器碎片,志工們花了好幾個月試著把它們拼湊起來。"
  },
  {
    "word": "hoard",
    "pos": "n.",
    "cn_def": "窖藏;藏寶",
    "en_def": "a hidden collection of valuable things",
    "sentence": "A man with a shovel discovered a {{BLANK}} of silver coins in his garden, and the local museum bought it for a large sum.",
    "cn": "一名拿著鏟子的男子在他的花園裡發現了一批銀幣窖藏,當地博物館以一大筆錢買下了它。"
  },
  {
    "word": "treasure",
    "pos": "n.",
    "cn_def": "寶藏;財寶",
    "en_def": "a collection of gold, jewels or valuable objects",
    "sentence": "The pirates in the story hid their {{BLANK}} on an island, but nobody has ever found it.",
    "cn": "故事中的海盜把他們的寶藏藏在一座島上,但從來沒有人找到過。"
  },
  {
    "word": "relic",
    "pos": "n.",
    "cn_def": "遺物;古物",
    "en_def": "an object that survives from the distant past",
    "sentence": "This old sword is a {{BLANK}} from a battle that happened eight hundred years ago, so the museum keeps it behind glass.",
    "cn": "這把古劍是八百年前一場戰役的遺物,所以博物館把它放在玻璃後面保存。"
  },
  {
    "word": "antiquity",
    "pos": "n.",
    "cn_def": "古代;上古",
    "en_def": "the ancient past, especially before the Middle Ages",
    "sentence": "The city has been an important trading centre since {{BLANK}}, and you can still see Greek columns in the old town.",
    "cn": "這座城市自古代以來就是重要的貿易中心,在舊城區裡仍然可以看到希臘式柱子。"
  },
  {
    "word": "loot",
    "pos": "v.",
    "cn_def": "盜掘;劫掠",
    "en_def": "to steal things, especially from ancient sites",
    "sentence": "Thieves came at night to {{BLANK}} the tombs, so the government sent guards to protect the site.",
    "cn": "小偷在夜裡來盜掘墳墓,所以政府派了警衛來保護遺址。"
  },
  {
    "word": "curator",
    "pos": "n.",
    "cn_def": "(博物館)館長;策展人",
    "en_def": "a person in charge of a museum collection",
    "sentence": "The {{BLANK}} explained the history of each object, and the students took notes for their school project.",
    "cn": "策展人解說了每件物品的歷史,學生們為他們的學校專題做筆記。"
  },
  {
    "word": "catalogue",
    "pos": "v.",
    "cn_def": "編目;登錄",
    "en_def": "to make a detailed list of objects",
    "sentence": "After each dig, the team must {{BLANK}} every object, so other researchers can find the information later.",
    "cn": "每次挖掘之後,團隊都必須把每件物品編目,這樣其他研究人員之後才能找到資料。"
  },
  {
    "word": "aerial",
    "pos": "adj.",
    "cn_def": "空中的;航空的",
    "en_def": "taken from or happening in the air",
    "sentence": "{{BLANK}} photos taken by a drone showed the outline of an old village, although nothing was visible from the ground.",
    "cn": "無人機拍攝的空中照片顯示出一座古老村莊的輪廓,雖然從地面上什麼也看不到。"
  },
  {
    "word": "ground-penetrating radar",
    "pos": "n.phr.",
    "cn_def": "透地雷達",
    "en_def": "a machine that uses radio waves to see under the ground",
    "sentence": "The team used {{BLANK}} to look under the field, so they knew where to dig before touching the soil.",
    "cn": "團隊使用透地雷達探查田地底下,所以他們在動土之前就知道該在哪裡挖。"
  },
  {
    "word": "topsoil",
    "pos": "n.",
    "cn_def": "表土",
    "en_def": "the top layer of soil",
    "sentence": "The workers removed the {{BLANK}} with a small machine, and then they continued digging slowly by hand.",
    "cn": "工人們用小型機器移除了表土,然後繼續用手慢慢挖掘。"
  },
  {
    "word": "waterlogged",
    "pos": "adj.",
    "cn_def": "浸水的;水浸的",
    "en_def": "completely full of water",
    "sentence": "Wood usually rots quickly, but in {{BLANK}} ground it can survive for thousands of years because there is no air.",
    "cn": "木頭通常很快就會腐爛,但在浸水的土地中它能保存數千年,因為那裡沒有空氣。"
  }
];

const MCQS = [
  {
    "q": "My cousin chose to study _____ at university, because she loves finding out how people lived thousands of years ago.",
    "options": [
      "fresco",
      "archaeology",
      "testament",
      "faction"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The _____ carefully lifted the old pot out of the ground, and she smiled because it was still in one piece.",
    "options": [
      "kinship",
      "cemetery",
      "archaeologist",
      "intermediary"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Builders found an _____ site under the new car park, so the work stopped while experts studied the area.",
    "options": [
      "archaeological",
      "fertile",
      "sprawling",
      "perennial"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The team plans to _____ the hill next summer, because local farmers have found old coins there for years.",
    "options": [
      "chronicle",
      "mar",
      "resemble",
      "excavate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The _____ lasted three months, and students from five countries helped the experts remove the soil by hand.",
    "options": [
      "excavation",
      "citadel",
      "monarch",
      "myth"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "I joined a summer _____ in Greece last year, and I spent every morning brushing dirt off broken pottery.",
    "options": [
      "peasant",
      "dig",
      "ritual",
      "burial"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Each volunteer was given a _____ and a bucket, and they started scraping the soil away very slowly.",
    "options": [
      "emperor",
      "clan",
      "heyday",
      "trowel"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "We poured the soil through a _____, so even tiny beads and fish bones would not be thrown away.",
    "options": [
      "timeline",
      "hunter-gatherer",
      "sieve",
      "rite"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The workers found an ancient rubbish _____ full of broken bowls, and it told them a lot about what people ate.",
    "options": [
      "microscope",
      "pit",
      "anarchy",
      "exodus"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The grassy _____ near the village looked natural, but scientists discovered that it was actually an ancient grave.",
    "options": [
      "mound",
      "uprising",
      "zenith",
      "axe"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Each _____ of soil represents a different period, so the deepest objects are usually the oldest.",
    "options": [
      "era",
      "spice",
      "stratum",
      "dome"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Farmers often _____ old tools while ploughing their fields, and some of them are more than two thousand years old.",
    "options": [
      "oppress",
      "subside",
      "perish",
      "unearth"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "We walked around the _____ of an old castle, and our guide explained how the walls had once looked.",
    "options": [
      "siege",
      "ruin",
      "genome",
      "city-state"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of a Roman house were found under the shopping centre, so the builders had to change their plans.",
    "options": [
      "tribe",
      "dome",
      "mammoth",
      "remains"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "After the earthquake, the old temple was just a pile of _____, but archaeologists still found statues inside it.",
    "options": [
      "rubble",
      "slab",
      "testament",
      "provenance"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The children dreamed of finding _____ treasure on the beach, but they only found an old bottle cap.",
    "options": [
      "agrarian",
      "timeless",
      "buried",
      "arcane"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The students had to _____ the dirt away very gently, because the old bones could break easily.",
    "options": [
      "brush",
      "erect",
      "revere",
      "ransack"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "They found a _____ of a painted wall, and experts used it to imagine the colours of the whole room.",
    "options": [
      "carving",
      "monarch",
      "juncture",
      "fragment"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Thousands of pottery _____ were collected from the site, and volunteers spent months trying to fit them together.",
    "options": [
      "pottery",
      "mammoth",
      "shard",
      "antler"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A man with a shovel discovered a _____ of silver coins in his garden, and the local museum bought it for a large sum.",
    "options": [
      "dome",
      "hoard",
      "caravan",
      "incursion"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The pirates in the story hid their _____ on an island, but nobody has ever found it.",
    "options": [
      "X-ray",
      "agriculture",
      "treasure",
      "fortress"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "This old sword is a _____ from a battle that happened eight hundred years ago, so the museum keeps it behind glass.",
    "options": [
      "supremacy",
      "relic",
      "civilisation",
      "pollen"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The city has been an important trading centre since _____, and you can still see Greek columns in the old town.",
    "options": [
      "antiquity",
      "homage",
      "legend",
      "genome"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Thieves came at night to _____ the tombs, so the government sent guards to protect the site.",
    "options": [
      "revere",
      "disintegrate",
      "surmise",
      "loot"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The _____ explained the history of each object, and the students took notes for their school project.",
    "options": [
      "folklore",
      "pharaoh",
      "curator",
      "galley"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "After each dig, the team must _____ every object, so other researchers can find the information later.",
    "options": [
      "revolve",
      "bequeath",
      "invade",
      "catalogue"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "_____ photos taken by a drone showed the outline of an old village, although nothing was visible from the ground.",
    "options": [
      "aerial",
      "classical",
      "colossal",
      "weathered"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The team used _____ to look under the field, so they knew where to dig before touching the soil.",
    "options": [
      "Stone Age",
      "ground-penetrating radar",
      "rise and fall",
      "the cradle of civilisation"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The workers removed the _____ with a small machine, and then they continued digging slowly by hand.",
    "options": [
      "arrowhead",
      "inscription",
      "pigment",
      "topsoil"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Wood usually rots quickly, but in _____ ground it can survive for thousands of years because there is no air.",
    "options": [
      "fertile",
      "waterlogged",
      "ceremonial",
      "classical"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "archaeology": {
    "pos": "n.",
    "en_def": "the study of the past by digging up old objects and places",
    "cn_def": "考古學"
  },
  "archaeologist": {
    "pos": "n.",
    "en_def": "a person who studies the past by digging up old things",
    "cn_def": "考古學家"
  },
  "archaeological": {
    "pos": "adj.",
    "en_def": "connected with the study of ancient remains",
    "cn_def": "考古的"
  },
  "excavate": {
    "pos": "v.",
    "en_def": "to dig carefully to find buried objects",
    "cn_def": "發掘;挖掘"
  },
  "excavation": {
    "pos": "n.",
    "en_def": "the careful digging up of an old site",
    "cn_def": "發掘(工作);挖掘"
  },
  "dig": {
    "pos": "n.",
    "en_def": "an organised archaeological excavation",
    "cn_def": "考古挖掘(活動)"
  },
  "trowel": {
    "pos": "n.",
    "en_def": "a small hand tool with a flat blade for digging",
    "cn_def": "小鏟子(考古用手鏟)"
  },
  "sieve": {
    "pos": "n.",
    "en_def": "a tool with a net that separates small things from soil",
    "cn_def": "篩子"
  },
  "pit": {
    "pos": "n.",
    "en_def": "a hole dug in the ground",
    "cn_def": "坑;坑洞"
  },
  "mound": {
    "pos": "n.",
    "en_def": "a small hill made of earth or stones",
    "cn_def": "土墩;土丘"
  },
  "stratum": {
    "pos": "n.",
    "en_def": "one layer of soil or rock (plural: strata)",
    "cn_def": "地層;層"
  },
  "unearth": {
    "pos": "v.",
    "en_def": "to find something by digging it out of the ground",
    "cn_def": "發掘出;出土"
  },
  "ruin": {
    "pos": "n.",
    "en_def": "the broken parts left of an old building",
    "cn_def": "廢墟;遺跡"
  },
  "remains": {
    "pos": "n.",
    "en_def": "parts of something that are left after a long time",
    "cn_def": "遺骸;遺跡"
  },
  "rubble": {
    "pos": "n.",
    "en_def": "broken stones and bricks from a fallen building",
    "cn_def": "瓦礫;碎石"
  },
  "buried": {
    "pos": "adj.",
    "en_def": "hidden under the ground",
    "cn_def": "被埋藏的"
  },
  "brush": {
    "pos": "v.",
    "en_def": "to clean something gently with a brush",
    "cn_def": "刷;輕刷"
  },
  "fragment": {
    "pos": "n.",
    "en_def": "a small broken piece of something",
    "cn_def": "碎片;片段"
  },
  "shard": {
    "pos": "n.",
    "en_def": "a sharp broken piece of pottery or glass",
    "cn_def": "(陶瓷或玻璃)碎片"
  },
  "hoard": {
    "pos": "n.",
    "en_def": "a hidden collection of valuable things",
    "cn_def": "窖藏;藏寶"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "a collection of gold, jewels or valuable objects",
    "cn_def": "寶藏;財寶"
  },
  "relic": {
    "pos": "n.",
    "en_def": "an object that survives from the distant past",
    "cn_def": "遺物;古物"
  },
  "antiquity": {
    "pos": "n.",
    "en_def": "the ancient past, especially before the Middle Ages",
    "cn_def": "古代;上古"
  },
  "loot": {
    "pos": "v.",
    "en_def": "to steal things, especially from ancient sites",
    "cn_def": "盜掘;劫掠"
  },
  "curator": {
    "pos": "n.",
    "en_def": "a person in charge of a museum collection",
    "cn_def": "(博物館)館長;策展人"
  },
  "catalogue": {
    "pos": "v.",
    "en_def": "to make a detailed list of objects",
    "cn_def": "編目;登錄"
  },
  "aerial": {
    "pos": "adj.",
    "en_def": "taken from or happening in the air",
    "cn_def": "空中的;航空的"
  },
  "ground-penetrating radar": {
    "pos": "n.phr.",
    "en_def": "a machine that uses radio waves to see under the ground",
    "cn_def": "透地雷達"
  },
  "topsoil": {
    "pos": "n.",
    "en_def": "the top layer of soil",
    "cn_def": "表土"
  },
  "waterlogged": {
    "pos": "adj.",
    "en_def": "completely full of water",
    "cn_def": "浸水的;水浸的"
  },
  "fresco": {
    "pos": "n.",
    "en_def": "a painting made on wet plaster on a wall",
    "cn_def": "濕壁畫"
  },
  "testament": {
    "pos": "n.",
    "en_def": "something that clearly shows that something is true",
    "cn_def": "證明;證據"
  },
  "faction": {
    "pos": "n.",
    "en_def": "a small group within a larger group, often in conflict",
    "cn_def": "派系;派別"
  },
  "kinship": {
    "pos": "n.",
    "en_def": "a family relationship between people",
    "cn_def": "親屬關係"
  },
  "cemetery": {
    "pos": "n.",
    "en_def": "a large area of land where people are buried",
    "cn_def": "墓地;公墓"
  },
  "intermediary": {
    "pos": "n.",
    "en_def": "a person who helps two sides communicate or trade",
    "cn_def": "中間人;仲介"
  },
  "fertile": {
    "pos": "adj.",
    "en_def": "able to produce good crops",
    "cn_def": "肥沃的"
  },
  "sprawling": {
    "pos": "adj.",
    "en_def": "spreading out over a large area",
    "cn_def": "延伸廣闊的;雜亂擴展的"
  },
  "perennial": {
    "pos": "adj.",
    "en_def": "lasting for a very long time or happening again and again",
    "cn_def": "長期的;反覆出現的"
  },
  "chronicle": {
    "pos": "v.",
    "en_def": "to record events in the order they happened",
    "cn_def": "記錄;編年記載"
  },
  "mar": {
    "pos": "v.",
    "en_def": "to spoil or damage something",
    "cn_def": "損壞;破壞"
  },
  "resemble": {
    "pos": "v.",
    "en_def": "to look like or be similar to something",
    "cn_def": "類似;像"
  },
  "citadel": {
    "pos": "n.",
    "en_def": "a strong fortress on high ground in or near a city",
    "cn_def": "城堡;要塞"
  },
  "monarch": {
    "pos": "n.",
    "en_def": "a king or queen",
    "cn_def": "君主"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an ancient story about gods and heroes",
    "cn_def": "神話"
  },
  "peasant": {
    "pos": "n.",
    "en_def": "a poor farmer in the past",
    "cn_def": "農民;佃農"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a ceremony that is always done in the same way",
    "cn_def": "儀式"
  },
  "burial": {
    "pos": "n.",
    "en_def": "the act of putting a dead body in the ground",
    "cn_def": "埋葬;葬禮"
  },
  "emperor": {
    "pos": "n.",
    "en_def": "the male ruler of an empire",
    "cn_def": "皇帝"
  },
  "clan": {
    "pos": "n.",
    "en_def": "a large group of related families",
    "cn_def": "氏族;宗族"
  },
  "heyday": {
    "pos": "n.",
    "en_def": "the time when something was most successful",
    "cn_def": "全盛時期"
  },
  "timeline": {
    "pos": "n.",
    "en_def": "a list of events in the order they happened",
    "cn_def": "時間軸;年表"
  },
  "hunter-gatherer": {
    "pos": "n.",
    "en_def": "a person who lives by hunting animals and collecting plants",
    "cn_def": "狩獵採集者"
  },
  "rite": {
    "pos": "n.",
    "en_def": "a traditional ceremony",
    "cn_def": "儀式;典禮"
  },
  "microscope": {
    "pos": "n.",
    "en_def": "an instrument that makes tiny things look bigger",
    "cn_def": "顯微鏡"
  },
  "anarchy": {
    "pos": "n.",
    "en_def": "a situation with no government or order",
    "cn_def": "無政府狀態;混亂"
  },
  "exodus": {
    "pos": "n.",
    "en_def": "a situation where many people leave a place at the same time",
    "cn_def": "大批離開;出走"
  },
  "uprising": {
    "pos": "n.",
    "en_def": "a situation where people fight against those in power",
    "cn_def": "起義;暴動"
  },
  "zenith": {
    "pos": "n.",
    "en_def": "the time when something is most powerful or successful",
    "cn_def": "頂峰;鼎盛時期"
  },
  "axe": {
    "pos": "n.",
    "en_def": "a tool with a heavy blade for cutting wood",
    "cn_def": "斧頭"
  },
  "era": {
    "pos": "n.",
    "en_def": "a long period of history",
    "cn_def": "時代;紀元"
  },
  "spice": {
    "pos": "n.",
    "en_def": "a dried plant part used to add flavour to food",
    "cn_def": "香料"
  },
  "dome": {
    "pos": "n.",
    "en_def": "a round roof shaped like half a ball",
    "cn_def": "圓頂"
  },
  "oppress": {
    "pos": "v.",
    "en_def": "to treat a group of people cruelly and unfairly",
    "cn_def": "壓迫"
  },
  "subside": {
    "pos": "v.",
    "en_def": "to become less strong or return to normal",
    "cn_def": "平息;消退"
  },
  "perish": {
    "pos": "v.",
    "en_def": "to die, especially in a terrible way",
    "cn_def": "死亡;喪生"
  },
  "siege": {
    "pos": "n.",
    "en_def": "surrounding a city to force it to give up",
    "cn_def": "圍城;圍攻"
  },
  "genome": {
    "pos": "n.",
    "en_def": "all the genetic information of a living thing",
    "cn_def": "基因組"
  },
  "city-state": {
    "pos": "n.",
    "en_def": "a city that governs itself like an independent country",
    "cn_def": "城邦"
  },
  "tribe": {
    "pos": "n.",
    "en_def": "a group of families with the same customs and leader",
    "cn_def": "部落"
  },
  "mammoth": {
    "pos": "n.",
    "en_def": "a large hairy elephant that lived long ago",
    "cn_def": "長毛象;猛獁象"
  },
  "slab": {
    "pos": "n.",
    "en_def": "a thick, flat piece of stone",
    "cn_def": "石板;厚板"
  },
  "provenance": {
    "pos": "n.",
    "en_def": "the place where something comes from and its history",
    "cn_def": "出處;來源"
  },
  "agrarian": {
    "pos": "adj.",
    "en_def": "connected with farming and farmland",
    "cn_def": "農業的;土地的"
  },
  "timeless": {
    "pos": "adj.",
    "en_def": "not affected by changes in time or fashion",
    "cn_def": "永恆的;不受時間影響的"
  },
  "arcane": {
    "pos": "adj.",
    "en_def": "secret and understood by only a few people",
    "cn_def": "神秘的;深奧難懂的"
  },
  "erect": {
    "pos": "v.",
    "en_def": "to build or put up something tall",
    "cn_def": "豎立;建造"
  },
  "revere": {
    "pos": "v.",
    "en_def": "to respect and admire someone or something deeply",
    "cn_def": "崇敬;尊崇"
  },
  "ransack": {
    "pos": "v.",
    "en_def": "to search a place roughly and steal things",
    "cn_def": "洗劫;搜劫"
  },
  "carving": {
    "pos": "n.",
    "en_def": "a shape or pattern cut into wood or stone",
    "cn_def": "雕刻(品)"
  },
  "juncture": {
    "pos": "n.",
    "en_def": "a particular point in time, especially an important one",
    "cn_def": "關頭;時刻"
  },
  "pottery": {
    "pos": "n.",
    "en_def": "pots and dishes made from baked clay",
    "cn_def": "陶器"
  },
  "antler": {
    "pos": "n.",
    "en_def": "a branch-like horn on the head of a deer",
    "cn_def": "鹿角"
  },
  "caravan": {
    "pos": "n.",
    "en_def": "a group of traders travelling together, often with camels",
    "cn_def": "商隊;駝隊"
  },
  "incursion": {
    "pos": "n.",
    "en_def": "a sudden attack into another country's land",
    "cn_def": "入侵;侵襲"
  },
  "x-ray": {
    "pos": "n.",
    "en_def": "a picture that shows the inside of an object",
    "cn_def": "X光(片)"
  },
  "agriculture": {
    "pos": "n.",
    "en_def": "farming; growing crops and raising animals",
    "cn_def": "農業"
  },
  "fortress": {
    "pos": "n.",
    "en_def": "a strong building used for military defence",
    "cn_def": "堡壘;要塞"
  },
  "supremacy": {
    "pos": "n.",
    "en_def": "the position of being the most powerful",
    "cn_def": "霸權;至高無上"
  },
  "civilisation": {
    "pos": "n.",
    "en_def": "a developed society with cities, laws and writing",
    "cn_def": "文明"
  },
  "pollen": {
    "pos": "n.",
    "en_def": "fine powder from flowers",
    "cn_def": "花粉"
  },
  "homage": {
    "pos": "n.",
    "en_def": "something done to show great respect",
    "cn_def": "敬意;致敬"
  },
  "legend": {
    "pos": "n.",
    "en_def": "an old story that may be partly true",
    "cn_def": "傳說"
  },
  "disintegrate": {
    "pos": "v.",
    "en_def": "to break into many small parts",
    "cn_def": "瓦解;碎裂"
  },
  "surmise": {
    "pos": "v.",
    "en_def": "to guess something without much evidence",
    "cn_def": "推測;猜測"
  },
  "folklore": {
    "pos": "n.",
    "en_def": "traditional stories and beliefs of a community",
    "cn_def": "民間傳說;民俗"
  },
  "pharaoh": {
    "pos": "n.",
    "en_def": "a king of ancient Egypt",
    "cn_def": "法老"
  },
  "galley": {
    "pos": "n.",
    "en_def": "an ancient ship moved by oars and sails",
    "cn_def": "划槳帆船;槳帆船"
  },
  "revolve": {
    "pos": "v.",
    "en_def": "to have something as the main subject or centre",
    "cn_def": "圍繞;以…為中心"
  },
  "bequeath": {
    "pos": "v.",
    "en_def": "to leave something to someone after you die",
    "cn_def": "遺贈;遺留給"
  },
  "invade": {
    "pos": "v.",
    "en_def": "to enter a country with an army to take control",
    "cn_def": "入侵;侵略"
  },
  "classical": {
    "pos": "adj.",
    "en_def": "connected with ancient Greece and Rome",
    "cn_def": "古典的;古希臘羅馬的"
  },
  "colossal": {
    "pos": "adj.",
    "en_def": "extremely large",
    "cn_def": "巨大的;龐大的"
  },
  "weathered": {
    "pos": "adj.",
    "en_def": "changed in colour or shape by wind and rain",
    "cn_def": "風化的;飽經風霜的"
  },
  "stone age": {
    "pos": "n.phr.",
    "en_def": "the early period when people used stone tools",
    "cn_def": "石器時代"
  },
  "rise and fall": {
    "pos": "n.phr.",
    "en_def": "the growth and later decline of something",
    "cn_def": "興衰;盛衰"
  },
  "the cradle of civilisation": {
    "pos": "n.phr.",
    "en_def": "the place where an early civilisation first developed",
    "cn_def": "文明的搖籃"
  },
  "arrowhead": {
    "pos": "n.",
    "en_def": "the sharp stone or metal point of an arrow",
    "cn_def": "箭頭"
  },
  "inscription": {
    "pos": "n.",
    "en_def": "words cut into stone or metal",
    "cn_def": "銘文;碑文"
  },
  "pigment": {
    "pos": "n.",
    "en_def": "a natural powder used to make colour",
    "cn_def": "顏料;色素"
  },
  "ceremonial": {
    "pos": "adj.",
    "en_def": "used in or connected with a formal ceremony",
    "cn_def": "儀式的;禮儀上的"
  }
};

const EXTRA_GLOSSES = {};
