// Topic 2 Subunit 4 Quiz Data: Poaching & Illegal Wildlife Trade 盜獵與非法野生動物交易
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S04 - Poaching & Illegal Wildlife Trade 盜獵與非法野生動物交易",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "poach",
    "pos": "v.",
    "cn_def": "盜獵",
    "en_def": "to hunt or catch animals illegally",
    "sentence": "Criminals {{BLANK}} elephants for their tusks, and they sell the ivory for a lot of money in other countries.",
    "cn": "犯罪分子為了象牙盜獵大象，並將象牙在其他國家以高價賣出。"
  },
  {
    "word": "poacher",
    "pos": "n.",
    "cn_def": "盜獵者",
    "en_def": "a person who hunts animals illegally",
    "sentence": "The rangers caught a {{BLANK}} in the national park last night, and they found three dead birds in his bag.",
    "cn": "巡山員昨晚在國家公園裡抓到一名盜獵者，並在他的袋子裡發現了三隻死鳥。"
  },
  {
    "word": "poaching",
    "pos": "n.",
    "cn_def": "盜獵（行為）",
    "en_def": "the illegal hunting of animals",
    "sentence": "{{BLANK}} is the main reason why rhinos are in danger, because some people still believe their horns can cure illness.",
    "cn": "盜獵是犀牛陷入危險的主要原因，因為有些人仍然相信犀牛角能治病。"
  },
  {
    "word": "ivory",
    "pos": "n.",
    "cn_def": "象牙",
    "en_def": "the hard white material from elephant tusks",
    "sentence": "Many countries have stopped the sale of {{BLANK}}, but some people still buy it secretly as jewellery or art.",
    "cn": "許多國家已經禁止販售象牙，但仍有一些人偷偷購買它作為珠寶或藝術品。"
  },
  {
    "word": "tusk",
    "pos": "n.",
    "cn_def": "（象等的）長牙",
    "en_def": "a very long pointed tooth of an elephant",
    "sentence": "An elephant uses its {{BLANK}} to dig for water and remove tree bark, so losing them makes its life much harder.",
    "cn": "大象用牠的長牙挖水和剝樹皮，所以失去長牙會讓牠的生活困難許多。"
  },
  {
    "word": "horn",
    "pos": "n.",
    "cn_def": "角",
    "en_def": "a hard pointed part growing on an animal's head",
    "sentence": "A rhino's {{BLANK}} is made of the same material as our fingernails, but criminals still sell it at a very high price.",
    "cn": "犀牛的角是由和我們指甲一樣的物質組成，但犯罪分子仍以極高的價格販售它。"
  },
  {
    "word": "rhino",
    "pos": "n.",
    "cn_def": "犀牛",
    "en_def": "a large heavy animal with one or two horns on its nose",
    "sentence": "Only a few northern white {{BLANK}} are left in the world, so scientists are trying to save them with new technology.",
    "cn": "全世界只剩下幾頭北方白犀牛，所以科學家們正嘗試用新科技拯救牠們。"
  },
  {
    "word": "pangolin",
    "pos": "n.",
    "cn_def": "穿山甲",
    "en_def": "a small animal covered in hard scales that eats ants",
    "sentence": "The {{BLANK}} rolls into a ball when it is scared, but this does not protect it from poachers who simply pick it up.",
    "cn": "穿山甲受到驚嚇時會捲成一顆球，但這無法保護牠免於盜獵者，因為他們直接就能把牠撿起來。"
  },
  {
    "word": "smuggle",
    "pos": "v.",
    "cn_def": "走私",
    "en_def": "to take things secretly and illegally into a country",
    "sentence": "The man tried to {{BLANK}} rare turtles through the airport in his suitcase, but the security officers found them on the X-ray screen.",
    "cn": "那名男子試圖把稀有的烏龜藏在行李箱裡走私通過機場，但安檢人員在X光螢幕上發現了牠們。"
  },
  {
    "word": "smuggler",
    "pos": "n.",
    "cn_def": "走私者",
    "en_def": "a person who smuggles goods illegally",
    "sentence": "The police arrested a {{BLANK}} at the harbour, because he was hiding hundreds of parrots in small plastic tubes.",
    "cn": "警方在港口逮捕了一名走私者，因為他把數百隻鸚鵡藏在小塑膠管裡。"
  },
  {
    "word": "trafficking",
    "pos": "n.",
    "cn_def": "非法交易；販運",
    "en_def": "the illegal buying and selling of goods or animals",
    "sentence": "Wildlife {{BLANK}} is a huge business around the world, so governments must work together to stop it.",
    "cn": "野生動物非法交易是全球性的大生意，所以各國政府必須合作阻止它。"
  },
  {
    "word": "trafficker",
    "pos": "n.",
    "cn_def": "非法販運者",
    "en_def": "a person who buys and sells illegal goods",
    "sentence": "The {{BLANK}} sold baby monkeys online as pets, but the police tracked him down after a buyer reported the website.",
    "cn": "那名非法販運者在網路上把小猴子當寵物販售，但在一位買家檢舉該網站後，警方追查到了他。"
  },
  {
    "word": "illegal",
    "pos": "adj.",
    "cn_def": "非法的；違法的",
    "en_def": "not allowed by law",
    "sentence": "It is {{BLANK}} to keep a Formosan black bear as a pet in Taiwan, and anyone who does so may face a heavy fine.",
    "cn": "在台灣把台灣黑熊當寵物飼養是違法的，任何這麼做的人都可能面臨重罰。"
  },
  {
    "word": "confiscate",
    "pos": "v.",
    "cn_def": "沒收",
    "en_def": "to officially take something away from someone",
    "sentence": "Customs officers {{BLANK}} two hundred kilograms of shark fins, and they plan to destroy them in public next month.",
    "cn": "海關人員沒收了兩百公斤的魚翅，並計畫下個月公開銷毀。"
  },
  {
    "word": "seizure",
    "pos": "n.",
    "cn_def": "查獲；扣押",
    "en_def": "the act of taking illegal goods by force or law",
    "sentence": "The {{BLANK}} of ten tonnes of pangolin scales was the largest ever in the country, and it shocked many animal lovers.",
    "cn": "查獲十公噸穿山甲鱗片是該國有史以來最大規模的查獲，讓許多愛護動物的人士大為震驚。"
  },
  {
    "word": "customs",
    "pos": "n.",
    "cn_def": "海關",
    "en_def": "the place at a border where officers check goods",
    "sentence": "The traveller was stopped at {{BLANK}} because his bag smelled strange, and the officers found live lizards inside.",
    "cn": "那名旅客在海關被攔下，因為他的包包有股奇怪的味道，而官員在裡面發現了活的蜥蜴。"
  },
  {
    "word": "ranger",
    "pos": "n.",
    "cn_def": "巡山員；保育巡查員",
    "en_def": "a person whose job is to protect a park or forest",
    "sentence": "The {{BLANK}} walks through the forest every day to check the camera traps, and he also looks for signs of poachers.",
    "cn": "那位巡山員每天走過森林檢查自動相機，同時也尋找盜獵者的蹤跡。"
  },
  {
    "word": "patrol",
    "pos": "v.",
    "cn_def": "巡邏",
    "en_def": "to walk or drive around an area to protect it",
    "sentence": "Soldiers and rangers {{BLANK}} the park at night, because most poachers come in the dark when they think no one is watching.",
    "cn": "士兵和巡山員晚上會在公園裡巡邏，因為大多數盜獵者會在他們以為沒人注意的夜裡前來。"
  },
  {
    "word": "trophy",
    "pos": "n.",
    "cn_def": "（狩獵）戰利品",
    "en_def": "part of a dead animal kept to show hunting success",
    "sentence": "Some rich tourists pay to shoot lions and take their heads home as a {{BLANK}}, but many people think this is cruel.",
    "cn": "有些有錢的觀光客付錢射殺獅子，並把獅子頭帶回家當作戰利品，但許多人認為這很殘忍。"
  },
  {
    "word": "fur",
    "pos": "n.",
    "cn_def": "毛皮",
    "en_def": "the thick soft hair of an animal",
    "sentence": "Many fashion brands no longer use real {{BLANK}} in their coats, because customers do not want animals to suffer for clothes.",
    "cn": "許多時尚品牌不再在大衣中使用真的毛皮，因為顧客不希望動物為了衣服而受苦。"
  },
  {
    "word": "souvenir",
    "pos": "n.",
    "cn_def": "紀念品",
    "en_def": "something you buy to remember a trip",
    "sentence": "Never buy a {{BLANK}} made from coral or turtle shell on holiday, because it may be illegal and it harms sea life.",
    "cn": "度假時千萬不要購買用珊瑚或龜殼做的紀念品，因為那可能是違法的，而且會傷害海洋生物。"
  },
  {
    "word": "exotic",
    "pos": "adj.",
    "cn_def": "外來的；奇特的",
    "en_def": "from a faraway country; unusual and interesting",
    "sentence": "Some people keep {{BLANK}} pets like snakes and parrots, but many of these animals were caught illegally in the wild.",
    "cn": "有些人飼養蛇和鸚鵡等奇特的寵物，但這些動物中有許多是從野外非法捕捉來的。"
  },
  {
    "word": "crackdown",
    "pos": "n.",
    "cn_def": "嚴厲打擊；取締",
    "en_def": "strong official action to stop illegal activity",
    "sentence": "The government started a {{BLANK}} on illegal pet shops, and dozens of rare birds were rescued in just one week.",
    "cn": "政府展開了對非法寵物店的嚴厲取締，短短一週內就救出了數十隻稀有鳥類。"
  },
  {
    "word": "penalty",
    "pos": "n.",
    "cn_def": "處罰；刑罰",
    "en_def": "a punishment for breaking a law",
    "sentence": "The {{BLANK}} for killing a protected animal in Taiwan is very serious, and the criminal may even go to prison.",
    "cn": "在台灣殺害保育類動物的刑罰非常重，犯人甚至可能入獄。"
  },
  {
    "word": "snare",
    "pos": "n.",
    "cn_def": "（捕獸的）套索；陷阱",
    "en_def": "a trap made of wire for catching animals",
    "sentence": "A young bear lost part of its paw in a {{BLANK}}, so the vet had to perform an operation to save its life.",
    "cn": "一隻小熊的腳掌因捕獸套索失去了一部分，所以獸醫必須動手術救牠一命。"
  }
];

const MCQS = [
  {
    "q": "Criminals _____ elephants for their tusks, and they sell the ivory for a lot of money in other countries.",
    "options": [
      "incubate",
      "poach",
      "intensify",
      "conceive"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The rangers caught a _____ in the national park last night, and they found three dead birds in his bag.",
    "options": [
      "poacher",
      "fragmentation",
      "buffer",
      "option"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "_____ is the main reason why rhinos are in danger, because some people still believe their horns can cure illness.",
    "options": [
      "fauna",
      "ecotourism",
      "poaching",
      "conservationist"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Many countries have stopped the sale of _____, but some people still buy it secretly as jewellery or art.",
    "options": [
      "insight",
      "scope",
      "foundation",
      "ivory"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "An elephant uses its _____ to dig for water and remove tree bark, so losing them makes its life much harder.",
    "options": [
      "tusk",
      "criteria",
      "compensation",
      "cattle"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "A rhino's _____ is made of the same material as our fingernails, but criminals still sell it at a very high price.",
    "options": [
      "litter",
      "horn",
      "carnivore",
      "fragmentation"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Only a few northern white _____ are left in the world, so scientists are trying to save them with new technology.",
    "options": [
      "aquarium",
      "prospect",
      "organism",
      "rhino"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ rolls into a ball when it is scared, but this does not protect it from poachers who simply pick it up.",
    "options": [
      "rehabilitation",
      "cattle",
      "pangolin",
      "scope"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The man tried to _____ rare turtles through the airport in his suitcase, but the security officers found them on the X-ray screen.",
    "options": [
      "reject",
      "smuggle",
      "assign",
      "proceed"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The police arrested a _____ at the harbour, because he was hiding hundreds of parrots in small plastic tubes.",
    "options": [
      "undergrowth",
      "exhibit",
      "smuggler",
      "pest"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Wildlife _____ is a huge business around the world, so governments must work together to stop it.",
    "options": [
      "rancher",
      "fauna",
      "overfishing",
      "trafficking"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The _____ sold baby monkeys online as pets, but the police tracked him down after a buyer reported the website.",
    "options": [
      "trafficker",
      "shepherd",
      "biodiversity",
      "core"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "It is _____ to keep a Formosan black bear as a pet in Taiwan, and anyone who does so may face a heavy fine.",
    "options": [
      "ongoing",
      "intense",
      "illegal",
      "hostile"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Customs officers _____ two hundred kilograms of shark fins, and they plan to destroy them in public next month.",
    "options": [
      "register",
      "confiscate",
      "detect",
      "breed"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The _____ of ten tonnes of pangolin scales was the largest ever in the country, and it shocked many animal lovers.",
    "options": [
      "seizure",
      "carnivore",
      "substitute",
      "extinction"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The traveller was stopped at _____ because his bag smelled strange, and the officers found live lizards inside.",
    "options": [
      "flora",
      "territory",
      "foundation",
      "customs"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ walks through the forest every day to check the camera traps, and he also looks for signs of poachers.",
    "options": [
      "carnivore",
      "ranger",
      "charity",
      "welfare"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Soldiers and rangers _____ the park at night, because most poachers come in the dark when they think no one is watching.",
    "options": [
      "assign",
      "attain",
      "correspond",
      "patrol"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Some rich tourists pay to shoot lions and take their heads home as a _____, but many people think this is cruel.",
    "options": [
      "collision",
      "scavenger",
      "trophy",
      "region"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Many fashion brands no longer use real _____ in their coats, because customers do not want animals to suffer for clothes.",
    "options": [
      "fur",
      "organism",
      "scavenger",
      "ecologist"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Never buy a _____ made from coral or turtle shell on holiday, because it may be illegal and it harms sea life.",
    "options": [
      "invertebrate",
      "carnivore",
      "souvenir",
      "commodity"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Some people keep _____ pets like snakes and parrots, but many of these animals were caught illegally in the wild.",
    "options": [
      "exotic",
      "arbitrary",
      "contrary",
      "obvious"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The government started a _____ on illegal pet shops, and dozens of rare birds were rescued in just one week.",
    "options": [
      "donation",
      "layer",
      "erosion",
      "crackdown"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The _____ for killing a protected animal in Taiwan is very serious, and the criminal may even go to prison.",
    "options": [
      "link",
      "penalty",
      "shepherd",
      "protection"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "A young bear lost part of its paw in a _____, so the vet had to perform an operation to save its life.",
    "options": [
      "calf",
      "flora",
      "waterhole",
      "snare"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "poach": {
    "pos": "v.",
    "en_def": "to hunt or catch animals illegally",
    "cn_def": "盜獵"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who hunts animals illegally",
    "cn_def": "盜獵者"
  },
  "poaching": {
    "pos": "n.",
    "en_def": "the illegal hunting of animals",
    "cn_def": "盜獵（行為）"
  },
  "ivory": {
    "pos": "n.",
    "en_def": "the hard white material from elephant tusks",
    "cn_def": "象牙"
  },
  "tusk": {
    "pos": "n.",
    "en_def": "a very long pointed tooth of an elephant",
    "cn_def": "（象等的）長牙"
  },
  "horn": {
    "pos": "n.",
    "en_def": "a hard pointed part growing on an animal's head",
    "cn_def": "角"
  },
  "rhino": {
    "pos": "n.",
    "en_def": "a large heavy animal with one or two horns on its nose",
    "cn_def": "犀牛"
  },
  "pangolin": {
    "pos": "n.",
    "en_def": "a small animal covered in hard scales that eats ants",
    "cn_def": "穿山甲"
  },
  "smuggle": {
    "pos": "v.",
    "en_def": "to take things secretly and illegally into a country",
    "cn_def": "走私"
  },
  "smuggler": {
    "pos": "n.",
    "en_def": "a person who smuggles goods illegally",
    "cn_def": "走私者"
  },
  "trafficking": {
    "pos": "n.",
    "en_def": "the illegal buying and selling of goods or animals",
    "cn_def": "非法交易；販運"
  },
  "trafficker": {
    "pos": "n.",
    "en_def": "a person who buys and sells illegal goods",
    "cn_def": "非法販運者"
  },
  "illegal": {
    "pos": "adj.",
    "en_def": "not allowed by law",
    "cn_def": "非法的；違法的"
  },
  "confiscate": {
    "pos": "v.",
    "en_def": "to officially take something away from someone",
    "cn_def": "沒收"
  },
  "seizure": {
    "pos": "n.",
    "en_def": "the act of taking illegal goods by force or law",
    "cn_def": "查獲；扣押"
  },
  "customs": {
    "pos": "n.",
    "en_def": "the place at a border where officers check goods",
    "cn_def": "海關"
  },
  "ranger": {
    "pos": "n.",
    "en_def": "a person whose job is to protect a park or forest",
    "cn_def": "巡山員；保育巡查員"
  },
  "patrol": {
    "pos": "v.",
    "en_def": "to walk or drive around an area to protect it",
    "cn_def": "巡邏"
  },
  "trophy": {
    "pos": "n.",
    "en_def": "part of a dead animal kept to show hunting success",
    "cn_def": "（狩獵）戰利品"
  },
  "fur": {
    "pos": "n.",
    "en_def": "the thick soft hair of an animal",
    "cn_def": "毛皮"
  },
  "souvenir": {
    "pos": "n.",
    "en_def": "something you buy to remember a trip",
    "cn_def": "紀念品"
  },
  "exotic": {
    "pos": "adj.",
    "en_def": "from a faraway country; unusual and interesting",
    "cn_def": "外來的；奇特的"
  },
  "crackdown": {
    "pos": "n.",
    "en_def": "strong official action to stop illegal activity",
    "cn_def": "嚴厲打擊；取締"
  },
  "penalty": {
    "pos": "n.",
    "en_def": "a punishment for breaking a law",
    "cn_def": "處罰；刑罰"
  },
  "snare": {
    "pos": "n.",
    "en_def": "a trap made of wire for catching animals",
    "cn_def": "（捕獸的）套索；陷阱"
  },
  "incubate": {
    "pos": "v.",
    "en_def": "to keep eggs warm until they hatch",
    "cn_def": "孵（蛋）"
  },
  "intensify": {
    "pos": "v.",
    "en_def": "to become stronger or more serious",
    "cn_def": "加強；加劇"
  },
  "conceive": {
    "pos": "v.",
    "en_def": "to think of a new idea or plan",
    "cn_def": "構想出；想出"
  },
  "fragmentation": {
    "pos": "n.",
    "en_def": "the breaking of a large area into small separate parts",
    "cn_def": "破碎化；分割"
  },
  "buffer": {
    "pos": "n.",
    "en_def": "an area that protects something from harm",
    "cn_def": "緩衝區"
  },
  "option": {
    "pos": "n.",
    "en_def": "a choice you can make",
    "cn_def": "選擇；選項"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals living in a particular area",
    "cn_def": "動物群；某地區的動物"
  },
  "ecotourism": {
    "pos": "n.",
    "en_def": "travel to natural areas that helps protect them",
    "cn_def": "生態旅遊"
  },
  "conservationist": {
    "pos": "n.",
    "en_def": "a person who works to protect nature",
    "cn_def": "保育人士"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a deep and clear understanding of something",
    "cn_def": "洞察；深刻見解"
  },
  "scope": {
    "pos": "n.",
    "en_def": "the range of things that something covers",
    "cn_def": "範圍"
  },
  "foundation": {
    "pos": "n.",
    "en_def": "an organisation that gives money to good causes",
    "cn_def": "基金會"
  },
  "criteria": {
    "pos": "n.",
    "en_def": "standards used to judge something",
    "cn_def": "標準；準則（複數）"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone for a loss",
    "cn_def": "補償；賠償金"
  },
  "cattle": {
    "pos": "n.",
    "en_def": "cows and bulls kept on a farm",
    "cn_def": "牛（總稱）"
  },
  "litter": {
    "pos": "n.",
    "en_def": "a group of baby animals born at the same time",
    "cn_def": "一窩（幼崽）"
  },
  "carnivore": {
    "pos": "n.",
    "en_def": "an animal that eats meat",
    "cn_def": "肉食性動物"
  },
  "aquarium": {
    "pos": "n.",
    "en_def": "a building where people can see fish and sea animals",
    "cn_def": "水族館"
  },
  "prospect": {
    "pos": "n.",
    "en_def": "the possibility that something will happen",
    "cn_def": "前景；可能性"
  },
  "organism": {
    "pos": "n.",
    "en_def": "a living thing, such as a plant or animal",
    "cn_def": "生物；有機體"
  },
  "rehabilitation": {
    "pos": "n.",
    "en_def": "the process of helping an animal recover",
    "cn_def": "復健；康復治療"
  },
  "reject": {
    "pos": "v.",
    "en_def": "to refuse to accept something",
    "cn_def": "拒絕；否決"
  },
  "assign": {
    "pos": "v.",
    "en_def": "to give someone a job or task",
    "cn_def": "分配；指派"
  },
  "proceed": {
    "pos": "v.",
    "en_def": "to continue doing something",
    "cn_def": "繼續進行"
  },
  "undergrowth": {
    "pos": "n.",
    "en_def": "bushes and small plants growing under big trees",
    "cn_def": "矮樹叢；下層灌木"
  },
  "exhibit": {
    "pos": "n.",
    "en_def": "an object or display shown in a museum or zoo",
    "cn_def": "展覽品；展示"
  },
  "pest": {
    "pos": "n.",
    "en_def": "an insect or animal that damages crops or food",
    "cn_def": "害蟲；有害動物"
  },
  "rancher": {
    "pos": "n.",
    "en_def": "a person who owns or runs a large cattle farm",
    "cn_def": "牧場主人"
  },
  "overfishing": {
    "pos": "n.",
    "en_def": "catching too many fish so their number falls",
    "cn_def": "過度捕撈"
  },
  "shepherd": {
    "pos": "n.",
    "en_def": "a person who looks after sheep",
    "cn_def": "牧羊人"
  },
  "biodiversity": {
    "pos": "n.",
    "en_def": "the variety of plants and animals in one place",
    "cn_def": "生物多樣性"
  },
  "core": {
    "pos": "n.",
    "en_def": "the most central or important part",
    "cn_def": "核心；中心部分"
  },
  "ongoing": {
    "pos": "adj.",
    "en_def": "still happening; continuing",
    "cn_def": "進行中的；持續的"
  },
  "intense": {
    "pos": "adj.",
    "en_def": "very strong or extreme",
    "cn_def": "強烈的；劇烈的"
  },
  "hostile": {
    "pos": "adj.",
    "en_def": "unfriendly and ready to fight",
    "cn_def": "敵對的；不友善的"
  },
  "register": {
    "pos": "v.",
    "en_def": "to put a name on an official list",
    "cn_def": "登記；註冊"
  },
  "detect": {
    "pos": "v.",
    "en_def": "to notice or discover something",
    "cn_def": "偵測；察覺"
  },
  "breed": {
    "pos": "v.",
    "en_def": "to keep animals so that they produce babies",
    "cn_def": "繁殖；培育"
  },
  "substitute": {
    "pos": "n.",
    "en_def": "something used instead of another thing",
    "cn_def": "替代品"
  },
  "extinction": {
    "pos": "n.",
    "en_def": "the situation when a species no longer exists",
    "cn_def": "滅絕"
  },
  "flora": {
    "pos": "n.",
    "en_def": "all the plants growing in a particular area",
    "cn_def": "植物群；某地區的植物"
  },
  "territory": {
    "pos": "n.",
    "en_def": "an area that an animal treats as its own",
    "cn_def": "領域；地盤"
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organisation that helps people or animals in need",
    "cn_def": "慈善機構"
  },
  "welfare": {
    "pos": "n.",
    "en_def": "the health and happiness of people or animals",
    "cn_def": "福利；福祉"
  },
  "attain": {
    "pos": "v.",
    "en_def": "to reach a goal after a lot of effort",
    "cn_def": "達到；獲得"
  },
  "correspond": {
    "pos": "v.",
    "en_def": "to match or be similar to something",
    "cn_def": "符合；相對應"
  },
  "collision": {
    "pos": "n.",
    "en_def": "an accident when two things hit each other",
    "cn_def": "碰撞；相撞"
  },
  "scavenger": {
    "pos": "n.",
    "en_def": "an animal that eats dead animals it did not kill",
    "cn_def": "食腐動物"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large area of a country or the world",
    "cn_def": "地區；區域"
  },
  "ecologist": {
    "pos": "n.",
    "en_def": "a scientist who studies living things and their environment",
    "cn_def": "生態學家"
  },
  "invertebrate": {
    "pos": "n.",
    "en_def": "an animal without a backbone",
    "cn_def": "無脊椎動物"
  },
  "commodity": {
    "pos": "n.",
    "en_def": "a product that can be bought and sold",
    "cn_def": "商品；貨物"
  },
  "arbitrary": {
    "pos": "adj.",
    "en_def": "chosen by chance, not based on reason",
    "cn_def": "任意的；武斷的"
  },
  "contrary": {
    "pos": "adj.",
    "en_def": "completely different or opposite",
    "cn_def": "相反的"
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的"
  },
  "donation": {
    "pos": "n.",
    "en_def": "money or goods given to help a group",
    "cn_def": "捐款；捐贈"
  },
  "layer": {
    "pos": "n.",
    "en_def": "a level of something that lies over or under another",
    "cn_def": "層"
  },
  "erosion": {
    "pos": "n.",
    "en_def": "the slow wearing away of land by water or wind",
    "cn_def": "侵蝕"
  },
  "link": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯；連結"
  },
  "protection": {
    "pos": "n.",
    "en_def": "the act of keeping someone or something safe",
    "cn_def": "保護"
  },
  "calf": {
    "pos": "n.",
    "en_def": "a young cow, elephant or whale",
    "cn_def": "幼崽（牛、象、鯨等）"
  },
  "waterhole": {
    "pos": "n.",
    "en_def": "a pool of water where wild animals go to drink",
    "cn_def": "水坑；飲水處"
  }
};

const EXTRA_GLOSSES = {};
