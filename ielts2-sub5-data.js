// Topic 2 Subunit 5 Quiz Data: Conservation Action & Protected Areas 保育行動與保護區
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S05 - Conservation Action & Protected Areas 保育行動與保護區",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "conserve",
    "pos": "v.",
    "cn_def": "保護；保存",
    "en_def": "to protect something from being damaged or lost",
    "sentence": "Local villagers work with scientists to {{BLANK}} the forest, because it gives them clean water as well as a home for animals.",
    "cn": "當地村民和科學家合作保護森林，因為森林不僅為動物提供家園，也為他們提供乾淨的水。"
  },
  {
    "word": "conservationist",
    "pos": "n.",
    "cn_def": "保育人士",
    "en_def": "a person who works to protect nature",
    "sentence": "The {{BLANK}} has spent twenty years saving sea turtles, and she teaches children how to keep the beaches clean.",
    "cn": "那位保育人士花了二十年拯救海龜，她也教孩子們如何保持海灘乾淨。"
  },
  {
    "word": "preservation",
    "pos": "n.",
    "cn_def": "保存；保護",
    "en_def": "the act of keeping something safe from harm",
    "sentence": "The {{BLANK}} of old forests is important, because many animals cannot survive in young forests that have just been planted.",
    "cn": "老森林的保護很重要，因為許多動物無法在剛種植的年輕森林中生存。"
  },
  {
    "word": "protection",
    "pos": "n.",
    "cn_def": "保護",
    "en_def": "the act of keeping someone or something safe",
    "sentence": "The black-faced spoonbill is under legal {{BLANK}} in Taiwan, so no one is allowed to hunt or disturb it.",
    "cn": "黑面琵鷺在台灣受到法律保護，所以任何人都不得獵捕或干擾牠。"
  },
  {
    "word": "sanctuary",
    "pos": "n.",
    "cn_def": "保護區；庇護所",
    "en_def": "a safe place where animals are protected",
    "sentence": "The elephants at the {{BLANK}} were rescued from circuses, and now they can walk freely and swim in the river.",
    "cn": "庇護所裡的大象是從馬戲團被救出來的，現在牠們可以自由行走並在河裡游泳。"
  },
  {
    "word": "wilderness",
    "pos": "n.",
    "cn_def": "荒野",
    "en_def": "a wild natural area where no people live",
    "sentence": "Alaska still has huge areas of {{BLANK}}, so bears and wolves can live there without being disturbed by people.",
    "cn": "阿拉斯加仍有大片的荒野，所以熊和狼可以生活在那裡而不受人類干擾。"
  },
  {
    "word": "reintroduce",
    "pos": "v.",
    "cn_def": "重新引入；野放回原棲地",
    "en_def": "to bring an animal back to an area where it once lived",
    "sentence": "Scientists plan to {{BLANK}} beavers to the river, because they believe the animals can help create new wetlands.",
    "cn": "科學家計畫把河狸重新引入那條河，因為他們相信這些動物能幫助創造新的濕地。"
  },
  {
    "word": "reintroduction",
    "pos": "n.",
    "cn_def": "重新引入",
    "en_def": "the act of bringing a species back to its old habitat",
    "sentence": "The {{BLANK}} of wolves to Yellowstone was a great success, and the whole ecosystem became healthier afterwards.",
    "cn": "狼群重新引入黃石公園非常成功，之後整個生態系統都變得更健康了。"
  },
  {
    "word": "restoration",
    "pos": "n.",
    "cn_def": "復育；修復",
    "en_def": "the act of returning something to its earlier good condition",
    "sentence": "The {{BLANK}} of the old rice fields brought back many frogs and fireflies, so families now visit the area at night.",
    "cn": "舊稻田的復育讓許多青蛙和螢火蟲回來了，所以現在家庭們都會在晚上造訪那個地區。"
  },
  {
    "word": "rewilding",
    "pos": "n.",
    "cn_def": "野化；再野化",
    "en_def": "returning land to its natural wild state",
    "sentence": "{{BLANK}} projects in Europe allow farmland to turn back into forest, and wild animals like bison have started to return.",
    "cn": "歐洲的再野化計畫讓農地恢復成森林，而像野牛這樣的野生動物已經開始回來了。"
  },
  {
    "word": "corridor",
    "pos": "n.",
    "cn_def": "（生態）廊道",
    "en_def": "a strip of land that connects two habitats",
    "sentence": "The government built a wildlife {{BLANK}} under the highway, so leopard cats can cross safely from one forest to another.",
    "cn": "政府在高速公路下方建造了一條野生動物廊道，讓石虎能安全地從一片森林穿越到另一片森林。"
  },
  {
    "word": "quota",
    "pos": "n.",
    "cn_def": "配額；限額",
    "en_def": "a fixed limit on the number of something allowed",
    "sentence": "Each fishing boat has a {{BLANK}} for tuna, so it must stop fishing when it reaches that number.",
    "cn": "每艘漁船都有鮪魚的捕撈配額，所以達到該數量時就必須停止捕撈。"
  },
  {
    "word": "census",
    "pos": "n.",
    "cn_def": "普查；數量調查",
    "en_def": "an official count of a population",
    "sentence": "Volunteers joined the annual bird {{BLANK}} last weekend, and they counted more spoonbills than ever before.",
    "cn": "志工們上週末參加了年度鳥類普查，他們數到的黑面琵鷺比以往任何時候都多。"
  },
  {
    "word": "tag",
    "pos": "v.",
    "cn_def": "為……加上標籤",
    "en_def": "to put a small label or device on an animal",
    "sentence": "Researchers {{BLANK}} young sharks with small electronic devices, so they can follow where the sharks swim around the world.",
    "cn": "研究人員為幼鯊加上小型電子標籤，這樣他們就能追蹤鯊魚在世界各地游到哪裡。"
  },
  {
    "word": "collar",
    "pos": "n.",
    "cn_def": "項圈",
    "en_def": "a band put around an animal's neck",
    "sentence": "The bear wears a GPS {{BLANK}} around its neck, and the scientists can see its location on their computer every hour.",
    "cn": "那隻熊的脖子上戴著一個GPS項圈，科學家每小時都能在電腦上看到牠的位置。"
  },
  {
    "word": "volunteer",
    "pos": "n.",
    "cn_def": "志工；義工",
    "en_def": "a person who works without being paid",
    "sentence": "As a {{BLANK}} at the animal rescue centre, I clean the cages every Saturday, and I also help feed the injured birds.",
    "cn": "身為動物救援中心的志工，我每個星期六都會清洗籠子，也會幫忙餵食受傷的鳥。"
  },
  {
    "word": "donation",
    "pos": "n.",
    "cn_def": "捐款；捐贈",
    "en_def": "money or goods given to help a group",
    "sentence": "Thanks to a large {{BLANK}} from a local company, the zoo was able to build a bigger home for its tigers.",
    "cn": "多虧一家本地公司的大筆捐款，動物園得以為老虎建造一個更大的家。"
  },
  {
    "word": "charity",
    "pos": "n.",
    "cn_def": "慈善機構",
    "en_def": "an organisation that helps people or animals in need",
    "sentence": "My class raised money for a wildlife {{BLANK}}, and the charity used it to buy medicine for injured turtles.",
    "cn": "我們班為一家野生動物慈善機構募款，而該機構用這筆錢購買受傷海龜的藥品。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "運動；宣傳活動",
    "en_def": "a planned series of actions to achieve a goal",
    "sentence": "The students started a {{BLANK}} to stop people from feeding wild monkeys, because human food makes the monkeys sick and aggressive.",
    "cn": "學生們發起了一項宣傳活動，勸阻人們餵食野生猴子，因為人類的食物會讓猴子生病並變得具攻擊性。"
  },
  {
    "word": "petition",
    "pos": "n.",
    "cn_def": "請願書；連署",
    "en_def": "a written request signed by many people",
    "sentence": "More than fifty thousand people signed a {{BLANK}} to save the wetland, so the city council finally cancelled the building plan.",
    "cn": "超過五萬人簽署了拯救濕地的連署，所以市議會最終取消了建設計畫。"
  },
  {
    "word": "ecotourism",
    "pos": "n.",
    "cn_def": "生態旅遊",
    "en_def": "travel to natural areas that helps protect them",
    "sentence": "{{BLANK}} brings money to local villages, so people there now see living whales as more valuable than dead ones.",
    "cn": "生態旅遊為當地村莊帶來收入，所以那裡的人們現在認為活的鯨魚比死的更有價值。"
  },
  {
    "word": "eco-friendly",
    "pos": "adj.",
    "cn_def": "環保的；對環境友善的",
    "en_def": "not harmful to the environment",
    "sentence": "Our hotel uses {{BLANK}} soap and shampoo, because the water from the rooms flows into a river full of fish.",
    "cn": "我們的飯店使用環保香皂和洗髮精，因為房間的排水會流入一條充滿魚的河流。"
  },
  {
    "word": "recovery",
    "pos": "n.",
    "cn_def": "恢復；復原",
    "en_def": "the process of returning to a healthy state",
    "sentence": "The humpback whale has made a strong {{BLANK}} since hunting was stopped, and now tourists can see them near Taiwan again.",
    "cn": "自從捕鯨被禁止後，大翅鯨的數量已大幅恢復，現在遊客又能在台灣附近看到牠們了。"
  },
  {
    "word": "rebound",
    "pos": "v.",
    "cn_def": "回升；反彈",
    "en_def": "to increase again after falling",
    "sentence": "The number of sea otters began to {{BLANK}} after hunting was banned, and today hundreds swim along the Californian coast.",
    "cn": "禁止獵捕後海獺的數量開始回升，如今已有數百隻在加州海岸游泳。"
  },
  {
    "word": "thrive",
    "pos": "v.",
    "cn_def": "茁壯成長；興盛",
    "en_def": "to grow strongly and successfully",
    "sentence": "Fireflies {{BLANK}} in clean, dark places, so they disappear quickly when bright lights and dirty water arrive.",
    "cn": "螢火蟲在乾淨又黑暗的地方茁壯繁衍，所以當明亮的燈光和髒水出現時，牠們很快就會消失。"
  },
  {
    "word": "flourish",
    "pos": "v.",
    "cn_def": "繁盛；蓬勃發展",
    "en_def": "to grow well and be healthy",
    "sentence": "After the factory closed, the river became clean again, and fish and water birds began to {{BLANK}} there.",
    "cn": "工廠關閉後，河水又變乾淨了，魚和水鳥開始在那裡繁盛起來。"
  },
  {
    "word": "treaty",
    "pos": "n.",
    "cn_def": "條約",
    "en_def": "a formal written agreement between countries",
    "sentence": "More than 180 countries have signed a {{BLANK}} that controls the trade in wild animals, but some still fail to follow it.",
    "cn": "超過一百八十個國家簽署了一項管制野生動物貿易的條約，但有些國家仍未遵守。"
  },
  {
    "word": "cull",
    "pos": "v.",
    "cn_def": "撲殺；選擇性宰殺",
    "en_def": "to kill some animals to reduce their number",
    "sentence": "The island decided to {{BLANK}} the wild goats, because they were eating all the plants that rare birds needed.",
    "cn": "那座島決定撲殺野山羊，因為牠們把稀有鳥類需要的植物都吃光了。"
  },
  {
    "word": "relocate",
    "pos": "v.",
    "cn_def": "遷移；移置",
    "en_def": "to move animals to a new place",
    "sentence": "The team had to {{BLANK}} the turtle eggs to a safer beach, because the old beach was going to flood during the typhoon.",
    "cn": "團隊必須把海龜蛋移置到較安全的海灘，因為原本的海灘在颱風期間將會淹水。"
  },
  {
    "word": "buffer",
    "pos": "n.",
    "cn_def": "緩衝區",
    "en_def": "an area that protects something from harm",
    "sentence": "Farmers left a {{BLANK}} of trees between their fields and the river, and it stops chemicals from flowing into the water.",
    "cn": "農夫們在農田和河流之間留下一片樹木作為緩衝區，它能阻止化學物質流入水中。"
  }
];

const MCQS = [
  {
    "q": "Local villagers work with scientists to _____ the forest, because it gives them clean water as well as a home for animals.",
    "options": [
      "rescue",
      "conserve",
      "sustain",
      "persist"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The _____ has spent twenty years saving sea turtles, and she teaches children how to keep the beaches clean.",
    "options": [
      "wildlife",
      "harvest",
      "undergrowth",
      "conservationist"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The _____ of old forests is important, because many animals cannot survive in young forests that have just been planted.",
    "options": [
      "pest",
      "initiative",
      "preservation",
      "bond"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The black-faced spoonbill is under legal _____ in Taiwan, so no one is allowed to hunt or disturb it.",
    "options": [
      "protection",
      "zoo",
      "formula",
      "livestock"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The elephants at the _____ were rescued from circuses, and now they can walk freely and swim in the river.",
    "options": [
      "offspring",
      "flock",
      "site",
      "sanctuary"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Alaska still has huge areas of _____, so bears and wolves can live there without being disturbed by people.",
    "options": [
      "insight",
      "wilderness",
      "starvation",
      "integrity"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Scientists plan to _____ beavers to the river, because they believe the animals can help create new wetlands.",
    "options": [
      "migrate",
      "hibernate",
      "reintroduce",
      "utilise"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The _____ of wolves to Yellowstone was a great success, and the whole ecosystem became healthier afterwards.",
    "options": [
      "reintroduction",
      "pesticide",
      "protocol",
      "fragmentation"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of the old rice fields brought back many frogs and fireflies, so families now visit the area at night.",
    "options": [
      "aquarium",
      "exhibit",
      "restoration",
      "notion"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "_____ projects in Europe allow farmland to turn back into forest, and wild animals like bison have started to return.",
    "options": [
      "seizure",
      "roadkill",
      "site",
      "rewilding"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The government built a wildlife _____ under the highway, so leopard cats can cross safely from one forest to another.",
    "options": [
      "snare",
      "corridor",
      "farmland",
      "rodent"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Each fishing boat has a _____ for tuna, so it must stop fishing when it reaches that number.",
    "options": [
      "quota",
      "priority",
      "overfishing",
      "threat"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Volunteers joined the annual bird _____ last weekend, and they counted more spoonbills than ever before.",
    "options": [
      "zoo",
      "census",
      "species",
      "vegetation"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Researchers _____ young sharks with small electronic devices, so they can follow where the sharks swim around the world.",
    "options": [
      "tag",
      "restore",
      "occupy",
      "coexist"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The bear wears a GPS _____ around its neck, and the scientists can see its location on their computer every hour.",
    "options": [
      "layer",
      "migration",
      "collar",
      "fauna"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "As a _____ at the animal rescue centre, I clean the cages every Saturday, and I also help feed the injured birds.",
    "options": [
      "invertebrate",
      "omnivore",
      "instance",
      "volunteer"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Thanks to a large _____ from a local company, the zoo was able to build a bigger home for its tigers.",
    "options": [
      "donation",
      "sequence",
      "commodity",
      "breeding"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "My class raised money for a wildlife _____, and the charity used it to buy medicine for injured turtles.",
    "options": [
      "logging",
      "charity",
      "zookeeper",
      "insight"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The students started a _____ to stop people from feeding wild monkeys, because human food makes the monkeys sick and aggressive.",
    "options": [
      "collision",
      "penalty",
      "scheme",
      "campaign"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "More than fifty thousand people signed a _____ to save the wetland, so the city council finally cancelled the building plan.",
    "options": [
      "burrow",
      "flock",
      "petition",
      "invertebrate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "_____ brings money to local villages, so people there now see living whales as more valuable than dead ones.",
    "options": [
      "poultry",
      "ecotourism",
      "bond",
      "plastic"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Our hotel uses _____ soap and shampoo, because the water from the rooms flows into a river full of fish.",
    "options": [
      "indigenous",
      "corporate",
      "ultimate",
      "eco-friendly"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The humpback whale has made a strong _____ since hunting was stopped, and now tourists can see them near Taiwan again.",
    "options": [
      "feature",
      "margin",
      "recovery",
      "pangolin"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The number of sea otters began to _____ after hunting was banned, and today hundreds swim along the Californian coast.",
    "options": [
      "rebound",
      "offset",
      "promote",
      "guarantee"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Fireflies _____ in clean, dark places, so they disappear quickly when bright lights and dirty water arrive.",
    "options": [
      "vary",
      "thrive",
      "fluctuate",
      "raid"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After the factory closed, the river became clean again, and fish and water birds began to _____ there.",
    "options": [
      "extract",
      "lay",
      "flourish",
      "assign"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "More than 180 countries have signed a _____ that controls the trade in wild animals, but some still fail to follow it.",
    "options": [
      "device",
      "savannah",
      "grassland",
      "treaty"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The island decided to _____ the wild goats, because they were eating all the plants that rare birds needed.",
    "options": [
      "cull",
      "conform",
      "exclude",
      "raid"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The team had to _____ the turtle eggs to a safer beach, because the old beach was going to flood during the typhoon.",
    "options": [
      "retaliate",
      "accelerate",
      "relocate",
      "assign"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Farmers left a _____ of trees between their fields and the river, and it stops chemicals from flowing into the water.",
    "options": [
      "customs",
      "buffer",
      "crackdown",
      "format"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "conserve": {
    "pos": "v.",
    "en_def": "to protect something from being damaged or lost",
    "cn_def": "保護；保存"
  },
  "conservationist": {
    "pos": "n.",
    "en_def": "a person who works to protect nature",
    "cn_def": "保育人士"
  },
  "preservation": {
    "pos": "n.",
    "en_def": "the act of keeping something safe from harm",
    "cn_def": "保存；保護"
  },
  "protection": {
    "pos": "n.",
    "en_def": "the act of keeping someone or something safe",
    "cn_def": "保護"
  },
  "sanctuary": {
    "pos": "n.",
    "en_def": "a safe place where animals are protected",
    "cn_def": "保護區；庇護所"
  },
  "wilderness": {
    "pos": "n.",
    "en_def": "a wild natural area where no people live",
    "cn_def": "荒野"
  },
  "reintroduce": {
    "pos": "v.",
    "en_def": "to bring an animal back to an area where it once lived",
    "cn_def": "重新引入；野放回原棲地"
  },
  "reintroduction": {
    "pos": "n.",
    "en_def": "the act of bringing a species back to its old habitat",
    "cn_def": "重新引入"
  },
  "restoration": {
    "pos": "n.",
    "en_def": "the act of returning something to its earlier good condition",
    "cn_def": "復育；修復"
  },
  "rewilding": {
    "pos": "n.",
    "en_def": "returning land to its natural wild state",
    "cn_def": "野化；再野化"
  },
  "corridor": {
    "pos": "n.",
    "en_def": "a strip of land that connects two habitats",
    "cn_def": "（生態）廊道"
  },
  "quota": {
    "pos": "n.",
    "en_def": "a fixed limit on the number of something allowed",
    "cn_def": "配額；限額"
  },
  "census": {
    "pos": "n.",
    "en_def": "an official count of a population",
    "cn_def": "普查；數量調查"
  },
  "tag": {
    "pos": "v.",
    "en_def": "to put a small label or device on an animal",
    "cn_def": "為……加上標籤"
  },
  "collar": {
    "pos": "n.",
    "en_def": "a band put around an animal's neck",
    "cn_def": "項圈"
  },
  "volunteer": {
    "pos": "n.",
    "en_def": "a person who works without being paid",
    "cn_def": "志工；義工"
  },
  "donation": {
    "pos": "n.",
    "en_def": "money or goods given to help a group",
    "cn_def": "捐款；捐贈"
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organisation that helps people or animals in need",
    "cn_def": "慈善機構"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned series of actions to achieve a goal",
    "cn_def": "運動；宣傳活動"
  },
  "petition": {
    "pos": "n.",
    "en_def": "a written request signed by many people",
    "cn_def": "請願書；連署"
  },
  "ecotourism": {
    "pos": "n.",
    "en_def": "travel to natural areas that helps protect them",
    "cn_def": "生態旅遊"
  },
  "eco-friendly": {
    "pos": "adj.",
    "en_def": "not harmful to the environment",
    "cn_def": "環保的；對環境友善的"
  },
  "recovery": {
    "pos": "n.",
    "en_def": "the process of returning to a healthy state",
    "cn_def": "恢復；復原"
  },
  "rebound": {
    "pos": "v.",
    "en_def": "to increase again after falling",
    "cn_def": "回升；反彈"
  },
  "thrive": {
    "pos": "v.",
    "en_def": "to grow strongly and successfully",
    "cn_def": "茁壯成長；興盛"
  },
  "flourish": {
    "pos": "v.",
    "en_def": "to grow well and be healthy",
    "cn_def": "繁盛；蓬勃發展"
  },
  "treaty": {
    "pos": "n.",
    "en_def": "a formal written agreement between countries",
    "cn_def": "條約"
  },
  "cull": {
    "pos": "v.",
    "en_def": "to kill some animals to reduce their number",
    "cn_def": "撲殺；選擇性宰殺"
  },
  "relocate": {
    "pos": "v.",
    "en_def": "to move animals to a new place",
    "cn_def": "遷移；移置"
  },
  "buffer": {
    "pos": "n.",
    "en_def": "an area that protects something from harm",
    "cn_def": "緩衝區"
  },
  "rescue": {
    "pos": "v.",
    "en_def": "to save someone or something from danger",
    "cn_def": "救援；拯救"
  },
  "sustain": {
    "pos": "v.",
    "en_def": "to keep something alive or continuing",
    "cn_def": "維持；支撐"
  },
  "persist": {
    "pos": "v.",
    "en_def": "to continue to exist for a long time",
    "cn_def": "持續存在"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "animals and plants that live in nature",
    "cn_def": "野生動植物"
  },
  "harvest": {
    "pos": "n.",
    "en_def": "the time when crops are collected",
    "cn_def": "收成；收穫"
  },
  "undergrowth": {
    "pos": "n.",
    "en_def": "bushes and small plants growing under big trees",
    "cn_def": "矮樹叢；下層灌木"
  },
  "pest": {
    "pos": "n.",
    "en_def": "an insect or animal that damages crops or food",
    "cn_def": "害蟲；有害動物"
  },
  "initiative": {
    "pos": "n.",
    "en_def": "a new plan to solve a problem",
    "cn_def": "倡議；新措施"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close connection between people or animals",
    "cn_def": "聯繫；情感連結"
  },
  "zoo": {
    "pos": "n.",
    "en_def": "a place where wild animals are kept for people to see",
    "cn_def": "動物園"
  },
  "formula": {
    "pos": "n.",
    "en_def": "a special mix of ingredients",
    "cn_def": "配方"
  },
  "livestock": {
    "pos": "n.",
    "en_def": "farm animals such as cows, sheep and goats",
    "cn_def": "家畜；牲畜"
  },
  "offspring": {
    "pos": "n.",
    "en_def": "the baby or babies of an animal",
    "cn_def": "後代；幼崽"
  },
  "flock": {
    "pos": "n.",
    "en_def": "a group of birds or sheep",
    "cn_def": "（鳥或羊的）群"
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is or happens",
    "cn_def": "地點；場所"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a deep and clear understanding of something",
    "cn_def": "洞察；深刻見解"
  },
  "starvation": {
    "pos": "n.",
    "en_def": "suffering or death caused by having no food",
    "cn_def": "飢餓；餓死"
  },
  "integrity": {
    "pos": "n.",
    "en_def": "the state of being whole and not damaged",
    "cn_def": "完整性"
  },
  "migrate": {
    "pos": "v.",
    "en_def": "to travel to another place when the season changes",
    "cn_def": "遷徙；遷移"
  },
  "hibernate": {
    "pos": "v.",
    "en_def": "to sleep through the whole winter",
    "cn_def": "冬眠"
  },
  "utilise": {
    "pos": "v.",
    "en_def": "to use something in an effective way",
    "cn_def": "利用；使用"
  },
  "pesticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects that harm crops",
    "cn_def": "殺蟲劑；農藥"
  },
  "protocol": {
    "pos": "n.",
    "en_def": "a set of rules for how to do something",
    "cn_def": "規範程序；協議"
  },
  "fragmentation": {
    "pos": "n.",
    "en_def": "the breaking of a large area into small separate parts",
    "cn_def": "破碎化；分割"
  },
  "aquarium": {
    "pos": "n.",
    "en_def": "a building where people can see fish and sea animals",
    "cn_def": "水族館"
  },
  "exhibit": {
    "pos": "n.",
    "en_def": "an object or display shown in a museum or zoo",
    "cn_def": "展覽品；展示"
  },
  "notion": {
    "pos": "n.",
    "en_def": "an idea or belief",
    "cn_def": "觀念；概念"
  },
  "seizure": {
    "pos": "n.",
    "en_def": "the act of taking illegal goods by force or law",
    "cn_def": "查獲；扣押"
  },
  "roadkill": {
    "pos": "n.",
    "en_def": "animals killed by cars on roads",
    "cn_def": "路殺"
  },
  "snare": {
    "pos": "n.",
    "en_def": "a trap made of wire for catching animals",
    "cn_def": "（捕獸的）套索；陷阱"
  },
  "farmland": {
    "pos": "n.",
    "en_def": "land used for growing crops or keeping animals",
    "cn_def": "農地；農田"
  },
  "rodent": {
    "pos": "n.",
    "en_def": "a small animal with sharp front teeth, like a mouse",
    "cn_def": "囓齒動物"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things",
    "cn_def": "優先事項"
  },
  "overfishing": {
    "pos": "n.",
    "en_def": "catching too many fish so their number falls",
    "cn_def": "過度捕撈"
  },
  "threat": {
    "pos": "n.",
    "en_def": "something that may cause harm or danger",
    "cn_def": "威脅"
  },
  "species": {
    "pos": "n.",
    "en_def": "a group of animals or plants of the same kind",
    "cn_def": "物種"
  },
  "vegetation": {
    "pos": "n.",
    "en_def": "plants in general, especially in one area",
    "cn_def": "植被；植物"
  },
  "restore": {
    "pos": "v.",
    "en_def": "to bring something back to a good condition",
    "cn_def": "恢復；修復"
  },
  "occupy": {
    "pos": "v.",
    "en_def": "to live in or use a place",
    "cn_def": "占據；居住於"
  },
  "coexist": {
    "pos": "v.",
    "en_def": "to live together peacefully in the same place",
    "cn_def": "共存"
  },
  "layer": {
    "pos": "n.",
    "en_def": "a level of something that lies over or under another",
    "cn_def": "層"
  },
  "migration": {
    "pos": "n.",
    "en_def": "the seasonal movement of animals to another place",
    "cn_def": "遷徙"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals living in a particular area",
    "cn_def": "動物群；某地區的動物"
  },
  "invertebrate": {
    "pos": "n.",
    "en_def": "an animal without a backbone",
    "cn_def": "無脊椎動物"
  },
  "omnivore": {
    "pos": "n.",
    "en_def": "an animal that eats both plants and meat",
    "cn_def": "雜食性動物"
  },
  "instance": {
    "pos": "n.",
    "en_def": "an example of something",
    "cn_def": "例子；實例"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "a series of events in a particular order",
    "cn_def": "順序；一連串"
  },
  "commodity": {
    "pos": "n.",
    "en_def": "a product that can be bought and sold",
    "cn_def": "商品；貨物"
  },
  "breeding": {
    "pos": "n.",
    "en_def": "the process of animals producing young",
    "cn_def": "繁殖；育種"
  },
  "logging": {
    "pos": "n.",
    "en_def": "the business of cutting down trees for wood",
    "cn_def": "伐木"
  },
  "zookeeper": {
    "pos": "n.",
    "en_def": "a person who looks after animals in a zoo",
    "cn_def": "動物園管理員；保育員"
  },
  "collision": {
    "pos": "n.",
    "en_def": "an accident when two things hit each other",
    "cn_def": "碰撞；相撞"
  },
  "penalty": {
    "pos": "n.",
    "en_def": "a punishment for breaking a law",
    "cn_def": "處罰；刑罰"
  },
  "scheme": {
    "pos": "n.",
    "en_def": "an official plan or programme",
    "cn_def": "計畫；方案"
  },
  "burrow": {
    "pos": "n.",
    "en_def": "a hole in the ground that an animal digs to live in",
    "cn_def": "地洞；洞穴"
  },
  "poultry": {
    "pos": "n.",
    "en_def": "chickens, ducks and other farm birds",
    "cn_def": "家禽"
  },
  "plastic": {
    "pos": "n.",
    "en_def": "a light material made from chemicals, used for bags and bottles",
    "cn_def": "塑膠"
  },
  "indigenous": {
    "pos": "adj.",
    "en_def": "belonging naturally to a place; original",
    "cn_def": "原生的；本土的"
  },
  "corporate": {
    "pos": "adj.",
    "en_def": "related to large companies",
    "cn_def": "企業的；公司的"
  },
  "ultimate": {
    "pos": "adj.",
    "en_def": "final and most important",
    "cn_def": "最終的；終極的"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important part or quality of something",
    "cn_def": "特色；特徵"
  },
  "margin": {
    "pos": "n.",
    "en_def": "the edge of an area",
    "cn_def": "邊緣"
  },
  "pangolin": {
    "pos": "n.",
    "en_def": "a small animal covered in hard scales that eats ants",
    "cn_def": "穿山甲"
  },
  "offset": {
    "pos": "v.",
    "en_def": "to balance one thing with another",
    "cn_def": "抵銷；彌補"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help something grow or become popular",
    "cn_def": "促進；推廣"
  },
  "guarantee": {
    "pos": "v.",
    "en_def": "to promise that something will happen",
    "cn_def": "保證；確保"
  },
  "vary": {
    "pos": "v.",
    "en_def": "to be different in different situations",
    "cn_def": "變化；不同"
  },
  "fluctuate": {
    "pos": "v.",
    "en_def": "to go up and down often",
    "cn_def": "波動；起伏"
  },
  "raid": {
    "pos": "v.",
    "en_def": "to attack a place suddenly to take things",
    "cn_def": "襲擊；搶奪"
  },
  "extract": {
    "pos": "v.",
    "en_def": "to take something out, often with effort",
    "cn_def": "提取；開採"
  },
  "lay": {
    "pos": "v.",
    "en_def": "to produce an egg from the body",
    "cn_def": "產（卵）；下（蛋）"
  },
  "assign": {
    "pos": "v.",
    "en_def": "to give someone a job or task",
    "cn_def": "分配；指派"
  },
  "device": {
    "pos": "n.",
    "en_def": "a small machine or tool made for a purpose",
    "cn_def": "裝置；設備"
  },
  "savannah": {
    "pos": "n.",
    "en_def": "a flat grassy plain in a hot country with few trees",
    "cn_def": "熱帶大草原"
  },
  "grassland": {
    "pos": "n.",
    "en_def": "a large area of land covered with grass",
    "cn_def": "草原"
  },
  "conform": {
    "pos": "v.",
    "en_def": "to follow rules or standards",
    "cn_def": "遵守；符合"
  },
  "exclude": {
    "pos": "v.",
    "en_def": "to keep out or not include",
    "cn_def": "排除；把……排除在外"
  },
  "retaliate": {
    "pos": "v.",
    "en_def": "to hurt someone because they hurt you",
    "cn_def": "報復"
  },
  "accelerate": {
    "pos": "v.",
    "en_def": "to happen or make happen faster",
    "cn_def": "加速"
  },
  "customs": {
    "pos": "n.",
    "en_def": "the place at a border where officers check goods",
    "cn_def": "海關"
  },
  "crackdown": {
    "pos": "n.",
    "en_def": "strong official action to stop illegal activity",
    "cn_def": "嚴厲打擊；取締"
  },
  "format": {
    "pos": "n.",
    "en_def": "the way something is arranged or presented",
    "cn_def": "格式；形式"
  }
};

const EXTRA_GLOSSES = {};
