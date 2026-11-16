// Topic 8 Subunit 7 Quiz Data: Trade, Seafaring & Conflict 貿易、航海與衝突
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S07 - Trade, Seafaring & Conflict 貿易、航海與衝突",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "merchant",
    "pos": "n.",
    "cn_def": "商人",
    "en_def": "a person who buys and sells goods, often abroad",
    "sentence": "The {{BLANK}} travelled for months to sell his cloth, and he came home with spices, gold and stories.",
    "cn": "那位商人旅行了好幾個月去賣他的布料,回家時帶著香料、黃金和許多故事。"
  },
  {
    "word": "barter",
    "pos": "v.",
    "cn_def": "以物易物",
    "en_def": "to exchange goods without using money",
    "sentence": "Before coins existed, people would {{BLANK}} grain for tools, so a farmer could get an axe for a bag of wheat.",
    "cn": "在錢幣出現之前,人們會用穀物交換工具,所以農夫可以用一袋小麥換一把斧頭。"
  },
  {
    "word": "coin",
    "pos": "n.",
    "cn_def": "硬幣;錢幣",
    "en_def": "a small round piece of metal used as money",
    "sentence": "The {{BLANK}} shows the face of an emperor, so experts know exactly when it was made.",
    "cn": "這枚錢幣上有一位皇帝的頭像,所以專家確切知道它是何時鑄造的。"
  },
  {
    "word": "caravan",
    "pos": "n.",
    "cn_def": "商隊;駝隊",
    "en_def": "a group of traders travelling together, often with camels",
    "sentence": "A long {{BLANK}} of camels crossed the desert, and it carried silk, spices and glass to distant markets.",
    "cn": "一支長長的駱駝商隊穿越沙漠,運送絲綢、香料和玻璃到遙遠的市場。"
  },
  {
    "word": "Silk Road",
    "pos": "n.phr.",
    "cn_def": "絲路",
    "en_def": "ancient trade routes linking China and Europe",
    "sentence": "The {{BLANK}} connected China with Europe, so ideas and inventions spread along with goods.",
    "cn": "絲路連接了中國和歐洲,所以思想和發明隨著商品一起傳播。"
  },
  {
    "word": "spice",
    "pos": "n.",
    "cn_def": "香料",
    "en_def": "a dried plant part used to add flavour to food",
    "sentence": "Pepper was once a very expensive {{BLANK}}, and sailors risked their lives to bring it from Asia.",
    "cn": "胡椒曾經是一種非常昂貴的香料,水手們冒著生命危險從亞洲把它運回來。"
  },
  {
    "word": "amber",
    "pos": "n.",
    "cn_def": "琥珀",
    "en_def": "hard yellow stone made from old tree resin",
    "sentence": "Beads made of {{BLANK}} were traded across Europe, and some pieces even contain tiny insects from millions of years ago.",
    "cn": "琥珀製的珠子在歐洲各地交易,有些甚至含有數百萬年前的小昆蟲。"
  },
  {
    "word": "pirate",
    "pos": "n.",
    "cn_def": "海盜",
    "en_def": "a person who attacks and robs ships at sea",
    "sentence": "Mediterranean {{BLANK}} often attacked trading ships near the islands, so merchants usually travelled in groups for safety.",
    "cn": "地中海海盜常在島嶼附近攻擊貿易船隻,所以商人們通常結伴航行以策安全。"
  },
  {
    "word": "galley",
    "pos": "n.",
    "cn_def": "划槳帆船;槳帆船",
    "en_def": "an ancient ship moved by oars and sails",
    "sentence": "The {{BLANK}} had more than a hundred rowers, and it could move fast even when there was no wind.",
    "cn": "這艘槳帆船有一百多名划槳手,即使沒有風也能快速前進。"
  },
  {
    "word": "oar",
    "pos": "n.",
    "cn_def": "槳",
    "en_def": "a long pole with a flat end used to row a boat",
    "sentence": "Each rower held a heavy {{BLANK}}, and they moved together to the beat of a drum.",
    "cn": "每位划槳手握著一支沉重的槳,他們隨著鼓聲一起划動。"
  },
  {
    "word": "sail",
    "pos": "n.",
    "cn_def": "帆",
    "en_def": "a large cloth that catches the wind to move a ship",
    "sentence": "The ship raised its {{BLANK}} when the wind became strong, so the tired rowers could finally rest.",
    "cn": "風變強時船升起了帆,所以疲憊的划槳手終於可以休息了。"
  },
  {
    "word": "seafaring",
    "pos": "adj.",
    "cn_def": "航海的",
    "en_def": "travelling regularly by sea",
    "sentence": "The Phoenicians were a {{BLANK}} people, and they set up trading ports all around the Mediterranean Sea.",
    "cn": "腓尼基人是一個航海民族,他們在地中海沿岸各地建立了貿易港口。"
  },
  {
    "word": "shipbuilding",
    "pos": "n.",
    "cn_def": "造船(業)",
    "en_def": "the work of building ships",
    "sentence": "The town was famous for {{BLANK}}, so wood was brought from distant forests to make strong boats.",
    "cn": "這個城鎮以造船業聞名,所以人們從遙遠的森林運來木材製造堅固的船隻。"
  },
  {
    "word": "colonise",
    "pos": "v.",
    "cn_def": "殖民;移居",
    "en_def": "to take control of a place and send people to live there",
    "sentence": "The Greeks began to {{BLANK}} islands across the sea, because there was not enough farmland at home.",
    "cn": "希臘人開始在海上各島殖民,因為本土沒有足夠的農地。"
  },
  {
    "word": "invade",
    "pos": "v.",
    "cn_def": "入侵;侵略",
    "en_def": "to enter a country with an army to take control",
    "sentence": "The enemy decided to {{BLANK}} in winter, because they knew the river would be frozen and easy to cross.",
    "cn": "敵人決定在冬天入侵,因為他們知道河流會結冰而容易渡過。"
  },
  {
    "word": "conquer",
    "pos": "v.",
    "cn_def": "征服",
    "en_def": "to take control of a place by force",
    "sentence": "Alexander the Great managed to {{BLANK}} a huge area, but his empire broke apart soon after he died.",
    "cn": "亞歷山大大帝成功征服了廣大的地區,但他死後不久帝國就分裂了。"
  },
  {
    "word": "siege",
    "pos": "n.",
    "cn_def": "圍城;圍攻",
    "en_def": "surrounding a city to force it to give up",
    "sentence": "The {{BLANK}} lasted for ten months, and the people inside the walls had to eat rats to survive.",
    "cn": "這場圍城持續了十個月,城牆內的人們必須吃老鼠才能活下去。"
  },
  {
    "word": "fortress",
    "pos": "n.",
    "cn_def": "堡壘;要塞",
    "en_def": "a strong building used for military defence",
    "sentence": "The {{BLANK}} was built on a cliff above the sea, so attackers could not reach it easily.",
    "cn": "這座堡壘建在海上的懸崖上,所以攻擊者無法輕易接近它。"
  },
  {
    "word": "armour",
    "pos": "n.",
    "cn_def": "盔甲",
    "en_def": "metal clothing worn to protect the body in battle",
    "sentence": "The knight's {{BLANK}} was so heavy that he needed help to climb onto his horse.",
    "cn": "那位騎士的盔甲非常沉重,所以他需要別人幫忙才能爬上馬。"
  },
  {
    "word": "sword",
    "pos": "n.",
    "cn_def": "劍",
    "en_def": "a weapon with a long metal blade",
    "sentence": "The {{BLANK}} was found in a river, and experts believe it was thrown there as a gift to the gods.",
    "cn": "這把劍是在河裡發現的,專家相信它是被當作獻給神明的禮物丟進去的。"
  },
  {
    "word": "warrior",
    "pos": "n.",
    "cn_def": "戰士;勇士",
    "en_def": "a brave fighter, especially in ancient times",
    "sentence": "The {{BLANK}} was buried with his sword and shield, so archaeologists knew he was an important fighter.",
    "cn": "這名戰士與他的劍和盾牌一起下葬,所以考古學家知道他是一位重要的戰士。"
  },
  {
    "word": "battlefield",
    "pos": "n.",
    "cn_def": "戰場",
    "en_def": "the place where a battle is fought",
    "sentence": "Metal arrowheads were found all over the {{BLANK}}, and they helped historians understand how the battle took place.",
    "cn": "在整個戰場上都發現了金屬箭頭,它們幫助歷史學家了解這場戰役是如何進行的。"
  },
  {
    "word": "plunder",
    "pos": "v.",
    "cn_def": "掠奪;搶劫",
    "en_def": "to steal goods by force, especially in war",
    "sentence": "The invaders tried to {{BLANK}} the temple's gold, but the priests had hidden it in a secret room.",
    "cn": "入侵者試圖掠奪神廟的黃金,但祭司們已經把它藏在一間密室裡。"
  },
  {
    "word": "revolt",
    "pos": "n.",
    "cn_def": "叛亂;起義",
    "en_def": "an attempt by people to fight against their rulers",
    "sentence": "The peasants started a {{BLANK}} because taxes were too high, but the army stopped it within a month.",
    "cn": "農民們因為稅太重而發動起義,但軍隊在一個月內就鎮壓了。"
  },
  {
    "word": "alliance",
    "pos": "n.",
    "cn_def": "聯盟;同盟",
    "en_def": "an agreement between groups to support each other",
    "sentence": "The two cities formed an {{BLANK}} against their common enemy, and together they won the war.",
    "cn": "這兩座城市結成聯盟對抗共同的敵人,並一起贏得了戰爭。"
  },
  {
    "word": "downfall",
    "pos": "n.",
    "cn_def": "垮台;衰敗",
    "en_def": "the loss of power or success",
    "sentence": "Bad harvests and endless wars led to the {{BLANK}} of the empire, so its great cities slowly became empty.",
    "cn": "歉收和無休止的戰爭導致帝國的衰敗,所以它的偉大城市漸漸變得空蕩。"
  }
];

const MCQS = [
  {
    "q": "The _____ travelled for months to sell his cloth, and he came home with spices, gold and stories.",
    "options": [
      "ascendancy",
      "peasant",
      "merchant",
      "pillar"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Before coins existed, people would _____ grain for tools, so a farmer could get an axe for a bag of wheat.",
    "options": [
      "barter",
      "unearth",
      "abound",
      "worship"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ shows the face of an emperor, so experts know exactly when it was made.",
    "options": [
      "clay",
      "coin",
      "copper",
      "philosopher"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "A long _____ of camels crossed the desert, and it carried silk, spices and glass to distant markets.",
    "options": [
      "fusion",
      "bacteria",
      "masonry",
      "caravan"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The _____ connected China with Europe, so ideas and inventions spread along with goods.",
    "options": [
      "Silk Road",
      "Ice Age",
      "radiocarbon dating",
      "ground-penetrating radar"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Pepper was once a very expensive _____, and sailors risked their lives to bring it from Asia.",
    "options": [
      "turmoil",
      "spice",
      "patron",
      "dynasty"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Beads made of _____ were traded across Europe, and some pieces even contain tiny insects from millions of years ago.",
    "options": [
      "posterity",
      "excavation",
      "dwelling",
      "amber"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Mediterranean _____ often attacked trading ships near the islands, so merchants usually travelled in groups for safety.",
    "options": [
      "ritual",
      "solstice",
      "pirate",
      "alphabet"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The _____ had more than a hundred rowers, and it could move fast even when there was no wind.",
    "options": [
      "galley",
      "exodus",
      "offering",
      "megalith"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Each rower held a heavy _____, and they moved together to the beat of a drum.",
    "options": [
      "hut",
      "oar",
      "coffin",
      "habitation"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The ship raised its _____ when the wind became strong, so the tired rowers could finally rest.",
    "options": [
      "carving",
      "bacteria",
      "sail",
      "artistry"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The Phoenicians were a _____ people, and they set up trading ports all around the Mediterranean Sea.",
    "options": [
      "arcane",
      "strategic",
      "ancient",
      "seafaring"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The town was famous for _____, so wood was brought from distant forests to make strong boats.",
    "options": [
      "subsistence",
      "calendar",
      "shipbuilding",
      "commonality"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The Greeks began to _____ islands across the sea, because there was not enough farmland at home.",
    "options": [
      "colonise",
      "annex",
      "idealise",
      "deface"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The enemy decided to _____ in winter, because they knew the river would be frozen and easy to cross.",
    "options": [
      "excavate",
      "invade",
      "weave",
      "extinguish"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Alexander the Great managed to _____ a huge area, but his empire broke apart soon after he died.",
    "options": [
      "unearth",
      "embalm",
      "lament",
      "conquer"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ lasted for ten months, and the people inside the walls had to eat rats to survive.",
    "options": [
      "siege",
      "antecedent",
      "lineage",
      "carving"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The _____ was built on a cliff above the sea, so attackers could not reach it easily.",
    "options": [
      "testament",
      "fortress",
      "descendant",
      "kiln"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The knight's _____ was so heavy that he needed help to climb onto his horse.",
    "options": [
      "deity",
      "splendour",
      "turmoil",
      "armour"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ was found in a river, and experts believe it was thrown there as a gift to the gods.",
    "options": [
      "tribute",
      "edifice",
      "sword",
      "monument"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ was buried with his sword and shield, so archaeologists knew he was an important fighter.",
    "options": [
      "ornament",
      "warrior",
      "bronze",
      "treasure"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Metal arrowheads were found all over the _____, and they helped historians understand how the battle took place.",
    "options": [
      "battlefield",
      "trowel",
      "tenure",
      "epoch"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The invaders tried to _____ the temple's gold, but the priests had hidden it in a secret room.",
    "options": [
      "thwart",
      "bequeath",
      "erect",
      "plunder"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The peasants started a _____ because taxes were too high, but the army stopped it within a month.",
    "options": [
      "repository",
      "obsidian",
      "revolt",
      "democracy"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The two cities formed an _____ against their common enemy, and together they won the war.",
    "options": [
      "alliance",
      "residue",
      "custodian",
      "remains"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Bad harvests and endless wars led to the _____ of the empire, so its great cities slowly became empty.",
    "options": [
      "dynasty",
      "downfall",
      "isotope",
      "imprint"
    ],
    "answer": 1,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "merchant": {
    "pos": "n.",
    "en_def": "a person who buys and sells goods, often abroad",
    "cn_def": "商人"
  },
  "barter": {
    "pos": "v.",
    "en_def": "to exchange goods without using money",
    "cn_def": "以物易物"
  },
  "coin": {
    "pos": "n.",
    "en_def": "a small round piece of metal used as money",
    "cn_def": "硬幣;錢幣"
  },
  "caravan": {
    "pos": "n.",
    "en_def": "a group of traders travelling together, often with camels",
    "cn_def": "商隊;駝隊"
  },
  "silk road": {
    "pos": "n.phr.",
    "en_def": "ancient trade routes linking China and Europe",
    "cn_def": "絲路"
  },
  "spice": {
    "pos": "n.",
    "en_def": "a dried plant part used to add flavour to food",
    "cn_def": "香料"
  },
  "amber": {
    "pos": "n.",
    "en_def": "hard yellow stone made from old tree resin",
    "cn_def": "琥珀"
  },
  "pirate": {
    "pos": "n.",
    "en_def": "a person who attacks and robs ships at sea",
    "cn_def": "海盜"
  },
  "galley": {
    "pos": "n.",
    "en_def": "an ancient ship moved by oars and sails",
    "cn_def": "划槳帆船;槳帆船"
  },
  "oar": {
    "pos": "n.",
    "en_def": "a long pole with a flat end used to row a boat",
    "cn_def": "槳"
  },
  "sail": {
    "pos": "n.",
    "en_def": "a large cloth that catches the wind to move a ship",
    "cn_def": "帆"
  },
  "seafaring": {
    "pos": "adj.",
    "en_def": "travelling regularly by sea",
    "cn_def": "航海的"
  },
  "shipbuilding": {
    "pos": "n.",
    "en_def": "the work of building ships",
    "cn_def": "造船(業)"
  },
  "colonise": {
    "pos": "v.",
    "en_def": "to take control of a place and send people to live there",
    "cn_def": "殖民;移居"
  },
  "invade": {
    "pos": "v.",
    "en_def": "to enter a country with an army to take control",
    "cn_def": "入侵;侵略"
  },
  "conquer": {
    "pos": "v.",
    "en_def": "to take control of a place by force",
    "cn_def": "征服"
  },
  "siege": {
    "pos": "n.",
    "en_def": "surrounding a city to force it to give up",
    "cn_def": "圍城;圍攻"
  },
  "fortress": {
    "pos": "n.",
    "en_def": "a strong building used for military defence",
    "cn_def": "堡壘;要塞"
  },
  "armour": {
    "pos": "n.",
    "en_def": "metal clothing worn to protect the body in battle",
    "cn_def": "盔甲"
  },
  "sword": {
    "pos": "n.",
    "en_def": "a weapon with a long metal blade",
    "cn_def": "劍"
  },
  "warrior": {
    "pos": "n.",
    "en_def": "a brave fighter, especially in ancient times",
    "cn_def": "戰士;勇士"
  },
  "battlefield": {
    "pos": "n.",
    "en_def": "the place where a battle is fought",
    "cn_def": "戰場"
  },
  "plunder": {
    "pos": "v.",
    "en_def": "to steal goods by force, especially in war",
    "cn_def": "掠奪;搶劫"
  },
  "revolt": {
    "pos": "n.",
    "en_def": "an attempt by people to fight against their rulers",
    "cn_def": "叛亂;起義"
  },
  "alliance": {
    "pos": "n.",
    "en_def": "an agreement between groups to support each other",
    "cn_def": "聯盟;同盟"
  },
  "downfall": {
    "pos": "n.",
    "en_def": "the loss of power or success",
    "cn_def": "垮台;衰敗"
  },
  "ascendancy": {
    "pos": "n.",
    "en_def": "a position of power or control",
    "cn_def": "優勢;支配地位"
  },
  "peasant": {
    "pos": "n.",
    "en_def": "a poor farmer in the past",
    "cn_def": "農民;佃農"
  },
  "pillar": {
    "pos": "n.",
    "en_def": "a tall column that supports a roof",
    "cn_def": "柱子"
  },
  "unearth": {
    "pos": "v.",
    "en_def": "to find something by digging it out of the ground",
    "cn_def": "發掘出;出土"
  },
  "abound": {
    "pos": "v.",
    "en_def": "to exist in large numbers",
    "cn_def": "大量存在;充滿"
  },
  "worship": {
    "pos": "v.",
    "en_def": "to show respect and love to a god",
    "cn_def": "崇拜;敬拜"
  },
  "clay": {
    "pos": "n.",
    "en_def": "soft, wet earth used to make pots",
    "cn_def": "黏土"
  },
  "copper": {
    "pos": "n.",
    "en_def": "a soft reddish-brown metal",
    "cn_def": "銅"
  },
  "philosopher": {
    "pos": "n.",
    "en_def": "a person who thinks deeply about life and truth",
    "cn_def": "哲學家"
  },
  "fusion": {
    "pos": "n.",
    "en_def": "a mixture of different things joined together",
    "cn_def": "融合"
  },
  "bacteria": {
    "pos": "n.",
    "en_def": "very small living things that can cause decay",
    "cn_def": "細菌"
  },
  "masonry": {
    "pos": "n.",
    "en_def": "the stones or bricks that make up a building",
    "cn_def": "石造結構;磚石"
  },
  "ice age": {
    "pos": "n.phr.",
    "en_def": "a long period when ice covered much of the Earth",
    "cn_def": "冰河時期"
  },
  "radiocarbon dating": {
    "pos": "n.phr.",
    "en_def": "a method of finding the age of old organic material",
    "cn_def": "放射性碳定年法"
  },
  "ground-penetrating radar": {
    "pos": "n.phr.",
    "en_def": "a machine that uses radio waves to see under the ground",
    "cn_def": "透地雷達"
  },
  "turmoil": {
    "pos": "n.",
    "en_def": "a state of great confusion or disorder",
    "cn_def": "混亂;動盪"
  },
  "patron": {
    "pos": "n.",
    "en_def": "a person who gives money to support artists or projects",
    "cn_def": "資助者;贊助人"
  },
  "dynasty": {
    "pos": "n.",
    "en_def": "a series of rulers from the same family",
    "cn_def": "王朝;朝代"
  },
  "posterity": {
    "pos": "n.",
    "en_def": "all the people who will live in the future",
    "cn_def": "後代;後世"
  },
  "excavation": {
    "pos": "n.",
    "en_def": "the careful digging up of an old site",
    "cn_def": "發掘(工作);挖掘"
  },
  "dwelling": {
    "pos": "n.",
    "en_def": "a house or place where someone lives",
    "cn_def": "住所;住處"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a ceremony that is always done in the same way",
    "cn_def": "儀式"
  },
  "solstice": {
    "pos": "n.",
    "en_def": "the longest or shortest day of the year",
    "cn_def": "至日(夏至或冬至)"
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "a set of letters used to write a language",
    "cn_def": "字母(表)"
  },
  "exodus": {
    "pos": "n.",
    "en_def": "a situation where many people leave a place at the same time",
    "cn_def": "大批離開;出走"
  },
  "offering": {
    "pos": "n.",
    "en_def": "a gift given to a god",
    "cn_def": "祭品;供品"
  },
  "megalith": {
    "pos": "n.",
    "en_def": "a very large stone used in ancient monuments",
    "cn_def": "巨石"
  },
  "hut": {
    "pos": "n.",
    "en_def": "a small simple house",
    "cn_def": "小屋;茅屋"
  },
  "coffin": {
    "pos": "n.",
    "en_def": "a box in which a dead body is buried",
    "cn_def": "棺材"
  },
  "habitation": {
    "pos": "n.",
    "en_def": "the act of living in a place",
    "cn_def": "居住;住所"
  },
  "carving": {
    "pos": "n.",
    "en_def": "a shape or pattern cut into wood or stone",
    "cn_def": "雕刻(品)"
  },
  "artistry": {
    "pos": "n.",
    "en_def": "great skill in creating something beautiful",
    "cn_def": "藝術技巧;藝術才能"
  },
  "arcane": {
    "pos": "adj.",
    "en_def": "secret and understood by only a few people",
    "cn_def": "神秘的;深奧難懂的"
  },
  "strategic": {
    "pos": "adj.",
    "en_def": "important for achieving a military or political aim",
    "cn_def": "戰略的;戰略上重要的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古代的;古老的"
  },
  "subsistence": {
    "pos": "n.",
    "en_def": "the ability to survive with just enough food",
    "cn_def": "勉強維生;生存"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a system for dividing the year into days and months",
    "cn_def": "曆法;日曆"
  },
  "commonality": {
    "pos": "n.",
    "en_def": "a shared feature or interest",
    "cn_def": "共同點"
  },
  "annex": {
    "pos": "v.",
    "en_def": "to take control of a country or area and add it to your own",
    "cn_def": "併吞;吞併"
  },
  "idealise": {
    "pos": "v.",
    "en_def": "to think that something is better than it really is",
    "cn_def": "理想化"
  },
  "deface": {
    "pos": "v.",
    "en_def": "to damage the surface of something, especially by writing on it",
    "cn_def": "塗污;損毀(外觀)"
  },
  "excavate": {
    "pos": "v.",
    "en_def": "to dig carefully to find buried objects",
    "cn_def": "發掘;挖掘"
  },
  "weave": {
    "pos": "v.",
    "en_def": "to make cloth by crossing threads over and under",
    "cn_def": "編織;織"
  },
  "extinguish": {
    "pos": "v.",
    "en_def": "to put out a fire or end something",
    "cn_def": "熄滅;撲滅"
  },
  "embalm": {
    "pos": "v.",
    "en_def": "to treat a dead body with chemicals to stop it decaying",
    "cn_def": "(用防腐劑)保存屍體"
  },
  "lament": {
    "pos": "v.",
    "en_def": "to feel or say that you are very sad about something",
    "cn_def": "哀悼;悲嘆"
  },
  "antecedent": {
    "pos": "n.",
    "en_def": "something that existed before and influenced something later",
    "cn_def": "前身;先例"
  },
  "lineage": {
    "pos": "n.",
    "en_def": "a line of family descent from an ancestor",
    "cn_def": "世系;血統"
  },
  "testament": {
    "pos": "n.",
    "en_def": "something that clearly shows that something is true",
    "cn_def": "證明;證據"
  },
  "descendant": {
    "pos": "n.",
    "en_def": "a person related to someone who lived long ago",
    "cn_def": "後裔;子孫"
  },
  "kiln": {
    "pos": "n.",
    "en_def": "a very hot oven for baking pottery or bricks",
    "cn_def": "窯"
  },
  "deity": {
    "pos": "n.",
    "en_def": "a god or goddess",
    "cn_def": "神;神祇"
  },
  "splendour": {
    "pos": "n.",
    "en_def": "great beauty and impressive appearance",
    "cn_def": "壯麗;輝煌"
  },
  "tribute": {
    "pos": "n.",
    "en_def": "payment given by a weaker ruler to a stronger one",
    "cn_def": "貢品;進貢"
  },
  "edifice": {
    "pos": "n.",
    "en_def": "a large, impressive building",
    "cn_def": "宏偉建築;大廈"
  },
  "monument": {
    "pos": "n.",
    "en_def": "a building or statue built to remember a person or event",
    "cn_def": "紀念碑;古蹟"
  },
  "ornament": {
    "pos": "n.",
    "en_def": "an object used for decoration",
    "cn_def": "裝飾品"
  },
  "bronze": {
    "pos": "n.",
    "en_def": "a hard brown metal made from copper and tin",
    "cn_def": "青銅"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "a collection of gold, jewels or valuable objects",
    "cn_def": "寶藏;財寶"
  },
  "trowel": {
    "pos": "n.",
    "en_def": "a small hand tool with a flat blade for digging",
    "cn_def": "小鏟子(考古用手鏟)"
  },
  "tenure": {
    "pos": "n.",
    "en_def": "the period when someone holds an important position",
    "cn_def": "任期;在職期間"
  },
  "epoch": {
    "pos": "n.",
    "en_def": "a period of time marked by special events",
    "cn_def": "時期;紀元"
  },
  "thwart": {
    "pos": "v.",
    "en_def": "to stop someone from doing what they planned",
    "cn_def": "阻撓;挫敗"
  },
  "bequeath": {
    "pos": "v.",
    "en_def": "to leave something to someone after you die",
    "cn_def": "遺贈;遺留給"
  },
  "erect": {
    "pos": "v.",
    "en_def": "to build or put up something tall",
    "cn_def": "豎立;建造"
  },
  "repository": {
    "pos": "n.",
    "en_def": "a place where things are stored",
    "cn_def": "儲藏處;寶庫"
  },
  "obsidian": {
    "pos": "n.",
    "en_def": "black glass formed from volcanic rock",
    "cn_def": "黑曜石"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system where people choose their leaders by voting",
    "cn_def": "民主(制度)"
  },
  "residue": {
    "pos": "n.",
    "en_def": "a small amount of something that remains after a process",
    "cn_def": "殘留物;殘渣"
  },
  "custodian": {
    "pos": "n.",
    "en_def": "a person or group responsible for protecting something",
    "cn_def": "守護者;保管人"
  },
  "remains": {
    "pos": "n.",
    "en_def": "parts of something that are left after a long time",
    "cn_def": "遺骸;遺跡"
  },
  "isotope": {
    "pos": "n.",
    "en_def": "a form of a chemical element with a different weight",
    "cn_def": "同位素"
  },
  "imprint": {
    "pos": "n.",
    "en_def": "a mark or lasting effect left by something",
    "cn_def": "印記;痕跡"
  }
};

const EXTRA_GLOSSES = {};
