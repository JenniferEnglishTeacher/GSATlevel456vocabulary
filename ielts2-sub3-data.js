// Topic 2 Subunit 3 Quiz Data: Threats to Wildlife 野生動物面臨的威脅
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S03 - Threats to Wildlife 野生動物面臨的威脅",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "threat",
    "pos": "n.",
    "cn_def": "威脅",
    "en_def": "something that may cause harm or danger",
    "sentence": "Stray dogs are a serious {{BLANK}} to wild birds in the park, because they often chase and attack birds that nest on the ground.",
    "cn": "流浪狗對公園裡的野鳥是嚴重的威脅，因為牠們常常追逐並攻擊在地面築巢的鳥。"
  },
  {
    "word": "threaten",
    "pos": "v.",
    "cn_def": "威脅；危及",
    "en_def": "to put something in danger",
    "sentence": "Rising sea levels {{BLANK}} the nesting beaches of sea turtles, and some beaches may disappear completely in the future.",
    "cn": "海平面上升威脅到海龜的築巢海灘，而有些海灘未來可能會完全消失。"
  },
  {
    "word": "deforestation",
    "pos": "n.",
    "cn_def": "森林砍伐",
    "en_def": "the cutting down of forests on a large scale",
    "sentence": "{{BLANK}} in Southeast Asia has destroyed the homes of orangutans, so their numbers have fallen sharply in the past thirty years.",
    "cn": "東南亞的森林砍伐摧毀了紅毛猩猩的家園，所以牠們的數量在過去三十年間急遽下降。"
  },
  {
    "word": "logging",
    "pos": "n.",
    "cn_def": "伐木",
    "en_def": "the business of cutting down trees for wood",
    "sentence": "Illegal {{BLANK}} continues in some national parks, because the wood is valuable and the forests are too large to guard.",
    "cn": "非法伐木在一些國家公園仍持續發生，因為木材很值錢，而森林又大到難以看守。"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "cn_def": "破壞；毀滅",
    "en_def": "the act of damaging something so badly it cannot be used",
    "sentence": "The {{BLANK}} of wetlands for new factories has left many birds with nowhere to rest during their long journey.",
    "cn": "為了蓋新工廠而破壞濕地，讓許多鳥類在漫長的旅程中無處歇息。"
  },
  {
    "word": "destroy",
    "pos": "v.",
    "cn_def": "摧毀；破壞",
    "en_def": "to damage something so badly that it cannot be used",
    "sentence": "The forest fire {{BLANK}} thousands of trees last summer, and many koalas lost their homes and food.",
    "cn": "去年夏天的森林大火摧毀了數千棵樹，許多無尾熊因此失去了家園和食物。"
  },
  {
    "word": "fragmentation",
    "pos": "n.",
    "cn_def": "破碎化；分割",
    "en_def": "the breaking of a large area into small separate parts",
    "sentence": "Habitat {{BLANK}} is a big problem for leopards, because new roads divide the forest into small pieces and the cats cannot meet each other.",
    "cn": "棲地破碎化對豹來說是個大問題，因為新道路把森林分割成小塊，使這些貓科動物無法彼此相遇。"
  },
  {
    "word": "encroach",
    "pos": "v.",
    "cn_def": "侵占；侵入",
    "en_def": "to slowly take over land that belongs to others",
    "sentence": "As cities grow, houses {{BLANK}} on the forest, so monkeys sometimes come into people's kitchens to look for food.",
    "cn": "隨著城市擴張，房屋侵占了森林，所以猴子有時候會跑進人們的廚房找食物。"
  },
  {
    "word": "urbanisation",
    "pos": "n.",
    "cn_def": "都市化",
    "en_def": "the growth of towns and cities",
    "sentence": "Rapid {{BLANK}} has replaced many rice fields with tall buildings, so frogs and egrets have fewer places to live.",
    "cn": "快速的都市化使許多稻田被高樓取代，所以青蛙和白鷺鷥能居住的地方變少了。"
  },
  {
    "word": "pesticide",
    "pos": "n.",
    "cn_def": "殺蟲劑；農藥",
    "en_def": "a chemical used to kill insects that harm crops",
    "sentence": "Farmers used too much {{BLANK}} on their vegetables, and as a result many bees and birds near the farm died.",
    "cn": "農夫們在蔬菜上使用了太多農藥，結果農場附近許多蜜蜂和鳥都死了。"
  },
  {
    "word": "poison",
    "pos": "v.",
    "cn_def": "毒害；下毒",
    "en_def": "to harm or kill with a dangerous substance",
    "sentence": "Some farmers {{BLANK}} rats in their fields, but owls and eagles then eat the dead rats and become sick.",
    "cn": "有些農夫在田裡毒殺老鼠，但貓頭鷹和老鷹接著吃了死老鼠就會生病。"
  },
  {
    "word": "contamination",
    "pos": "n.",
    "cn_def": "汙染",
    "en_def": "the process of making something dirty or harmful",
    "sentence": "Water {{BLANK}} from a nearby factory killed hundreds of fish in the river, so the villagers asked the government to take action.",
    "cn": "附近工廠造成的水質汙染害死了河裡數百條魚，所以村民們要求政府採取行動。"
  },
  {
    "word": "contaminate",
    "pos": "v.",
    "cn_def": "汙染",
    "en_def": "to make something dirty or poisonous",
    "sentence": "Oil from the broken ship began to {{BLANK}} the beach, and volunteers rushed to clean the feathers of the seabirds.",
    "cn": "破損船隻漏出的油開始汙染海灘，志工們趕緊去清洗海鳥的羽毛。"
  },
  {
    "word": "plastic",
    "pos": "n.",
    "cn_def": "塑膠",
    "en_def": "a light material made from chemicals, used for bags and bottles",
    "sentence": "Scientists found pieces of {{BLANK}} inside the stomach of a dead whale, so they asked people to stop using so many straws and bags.",
    "cn": "科學家在一隻死去的鯨魚胃裡發現了塑膠碎片，所以他們呼籲大家不要再使用那麼多吸管和塑膠袋。"
  },
  {
    "word": "debris",
    "pos": "n.",
    "cn_def": "碎片；殘骸；垃圾",
    "en_def": "broken pieces of rubbish that are left behind",
    "sentence": "After the typhoon, the beach was covered with {{BLANK}}, and a young turtle was found trapped in an old fishing net.",
    "cn": "颱風過後，海灘上布滿了垃圾碎片，還發現一隻小海龜被困在舊漁網裡。"
  },
  {
    "word": "invasive",
    "pos": "adj.",
    "cn_def": "入侵的；外來入侵的",
    "en_def": "spreading quickly and harming the local plants or animals",
    "sentence": "The green iguana is an {{BLANK}} species in southern Taiwan, because it eats farmers' crops and has no natural enemies here.",
    "cn": "綠鬣蜥在台灣南部是一種外來入侵物種，因為牠會吃農作物，而且在這裡沒有天敵。"
  },
  {
    "word": "outbreak",
    "pos": "n.",
    "cn_def": "爆發",
    "en_def": "the sudden start of a disease",
    "sentence": "An {{BLANK}} of bird flu forced the zoo to close for two weeks, while the vets tested all the birds.",
    "cn": "禽流感的爆發迫使動物園關閉兩週，同時獸醫們為所有鳥類進行檢測。"
  },
  {
    "word": "starvation",
    "pos": "n.",
    "cn_def": "飢餓；餓死",
    "en_def": "suffering or death caused by having no food",
    "sentence": "Many polar bears face {{BLANK}} because the sea ice melts earlier each year, so they cannot hunt seals for long enough.",
    "cn": "許多北極熊面臨餓死的危機，因為海冰每年都更早融化，所以牠們無法有足夠長的時間獵捕海豹。"
  },
  {
    "word": "starve",
    "pos": "v.",
    "cn_def": "挨餓；餓死",
    "en_def": "to suffer or die because there is no food",
    "sentence": "If the bamboo forests keep disappearing, the pandas will {{BLANK}}, because bamboo makes up almost all of their food.",
    "cn": "如果竹林持續消失，貓熊就會餓死，因為竹子幾乎是牠們全部的食物。"
  },
  {
    "word": "drought",
    "pos": "n.",
    "cn_def": "乾旱",
    "en_def": "a long period with little or no rain",
    "sentence": "The long {{BLANK}} dried up the rivers in Kenya, and hundreds of elephants died because they could not find water.",
    "cn": "漫長的乾旱使肯亞的河流乾涸，數百頭大象因為找不到水而死亡。"
  },
  {
    "word": "wildfire",
    "pos": "n.",
    "cn_def": "野火；森林大火",
    "en_def": "a large fire that spreads quickly in forests",
    "sentence": "The {{BLANK}} in Australia spread very fast because of the strong wind, and millions of animals could not escape in time.",
    "cn": "澳洲的野火因為強風而蔓延得非常快，數百萬隻動物來不及逃生。"
  },
  {
    "word": "overfishing",
    "pos": "n.",
    "cn_def": "過度捕撈",
    "en_def": "catching too many fish so their number falls",
    "sentence": "{{BLANK}} has made sharks much harder to find, because boats catch them faster than they can produce babies.",
    "cn": "過度捕撈讓鯊魚越來越難找到，因為漁船捕捉牠們的速度比牠們繁殖的速度還快。"
  },
  {
    "word": "bycatch",
    "pos": "n.",
    "cn_def": "混獲；意外捕獲的漁獲",
    "en_def": "sea animals caught by accident while fishing",
    "sentence": "Dolphins often become {{BLANK}} in large fishing nets, so some fishermen now use special nets that let them escape.",
    "cn": "海豚常常在大型漁網中成為混獲，所以有些漁民現在使用能讓牠們逃脫的特殊漁網。"
  },
  {
    "word": "collision",
    "pos": "n.",
    "cn_def": "碰撞；相撞",
    "en_def": "an accident when two things hit each other",
    "sentence": "A {{BLANK}} with a fast boat badly hurt the manatee, so the rescue team took it to an animal hospital.",
    "cn": "與快艇的碰撞讓那隻海牛受了重傷，所以救援團隊把牠送到動物醫院。"
  },
  {
    "word": "roadkill",
    "pos": "n.",
    "cn_def": "路殺",
    "en_def": "animals killed by cars on roads",
    "sentence": "{{BLANK}} is a big problem for leopard cats in Miaoli, so the government put up warning signs along the mountain roads.",
    "cn": "路殺對苗栗的石虎是一大問題，所以政府在山區道路沿線設置了警告標誌。"
  },
  {
    "word": "erosion",
    "pos": "n.",
    "cn_def": "侵蝕",
    "en_def": "the slow wearing away of land by water or wind",
    "sentence": "Beach {{BLANK}} is making the turtles' nesting areas smaller, and the eggs may be washed away by big waves.",
    "cn": "海灘侵蝕正使海龜的築巢區域變小，而且蛋可能會被大浪沖走。"
  },
  {
    "word": "dwindle",
    "pos": "v.",
    "cn_def": "逐漸減少",
    "en_def": "to become gradually smaller in number",
    "sentence": "The number of wild tigers has {{BLANK}} over the last century, but some countries are now working hard to protect them.",
    "cn": "野生老虎的數量在過去一個世紀逐漸減少，但有些國家現在正努力保護牠們。"
  },
  {
    "word": "drain",
    "pos": "v.",
    "cn_def": "排乾（水）",
    "en_def": "to remove the water from an area",
    "sentence": "The company wanted to {{BLANK}} the marsh to build a parking lot, but the birdwatchers protested because thousands of birds rest there.",
    "cn": "那家公司想排乾沼澤的水來蓋停車場，但賞鳥人士提出抗議，因為有成千上萬隻鳥在那裡休息。"
  },
  {
    "word": "pollutant",
    "pos": "n.",
    "cn_def": "汙染物",
    "en_def": "a substance that makes air, water or land dirty",
    "sentence": "The factory released a dangerous {{BLANK}} into the river, and soon the fish and frogs began to disappear.",
    "cn": "那家工廠把一種危險的汙染物排進河裡，不久之後魚和青蛙就開始消失了。"
  },
  {
    "word": "vanish",
    "pos": "v.",
    "cn_def": "消失",
    "en_def": "to disappear suddenly or completely",
    "sentence": "Many small birds have {{BLANK}} from the island since rats arrived on ships, because the rats eat their eggs.",
    "cn": "自從老鼠搭船來到島上後，許多小鳥就從島上消失了，因為老鼠會吃牠們的蛋。"
  }
];

const MCQS = [
  {
    "q": "Stray dogs are a serious _____ to wild birds in the park, because they often chase and attack birds that nest on the ground.",
    "options": [
      "threat",
      "treaty",
      "savannah",
      "hibernation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Rising sea levels _____ the nesting beaches of sea turtles, and some beaches may disappear completely in the future.",
    "options": [
      "dispose",
      "commit",
      "convince",
      "threaten"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "_____ in Southeast Asia has destroyed the homes of orangutans, so their numbers have fallen sharply in the past thirty years.",
    "options": [
      "litter",
      "deforestation",
      "crop",
      "protection"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Illegal _____ continues in some national parks, because the wood is valuable and the forests are too large to guard.",
    "options": [
      "ecotourism",
      "sequence",
      "logging",
      "camouflage"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The _____ of wetlands for new factories has left many birds with nowhere to rest during their long journey.",
    "options": [
      "priority",
      "destruction",
      "poacher",
      "wilderness"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The forest fire _____ thousands of trees last summer, and many koalas lost their homes and food.",
    "options": [
      "destroy",
      "commit",
      "precede",
      "deter"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Habitat _____ is a big problem for leopards, because new roads divide the forest into small pieces and the cats cannot meet each other.",
    "options": [
      "biodiversity",
      "feature",
      "fragmentation",
      "status"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "As cities grow, houses _____ on the forest, so monkeys sometimes come into people's kitchens to look for food.",
    "options": [
      "seek",
      "deter",
      "convert",
      "encroach"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Rapid _____ has replaced many rice fields with tall buildings, so frogs and egrets have fewer places to live.",
    "options": [
      "smuggler",
      "hibernation",
      "urbanisation",
      "priority"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Farmers used too much _____ on their vegetables, and as a result many bees and birds near the farm died.",
    "options": [
      "rehabilitation",
      "breeding",
      "omnivore",
      "pesticide"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Some farmers _____ rats in their fields, but owls and eagles then eat the dead rats and become sick.",
    "options": [
      "offset",
      "poison",
      "compile",
      "deny"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Water _____ from a nearby factory killed hundreds of fish in the river, so the villagers asked the government to take action.",
    "options": [
      "contamination",
      "formula",
      "poacher",
      "format"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Oil from the broken ship began to _____ the beach, and volunteers rushed to clean the feathers of the seabirds.",
    "options": [
      "vary",
      "violate",
      "reverse",
      "contaminate"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Scientists found pieces of _____ inside the stomach of a dead whale, so they asked people to stop using so many straws and bags.",
    "options": [
      "veterinarian",
      "plastic",
      "customs",
      "collapse"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "After the typhoon, the beach was covered with _____, and a young turtle was found trapped in an old fishing net.",
    "options": [
      "tusk",
      "core",
      "debris",
      "instinct"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The green iguana is an _____ species in southern Taiwan, because it eats farmers' crops and has no natural enemies here.",
    "options": [
      "invasive",
      "orphaned",
      "annual",
      "coherent"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "An _____ of bird flu forced the zoo to close for two weeks, while the vets tested all the birds.",
    "options": [
      "protocol",
      "outbreak",
      "cattle",
      "series"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Many polar bears face _____ because the sea ice melts earlier each year, so they cannot hunt seals for long enough.",
    "options": [
      "starvation",
      "prey",
      "shepherd",
      "margin"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "If the bamboo forests keep disappearing, the pandas will _____, because bamboo makes up almost all of their food.",
    "options": [
      "conform",
      "register",
      "amend",
      "starve"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The long _____ dried up the rivers in Kenya, and hundreds of elephants died because they could not find water.",
    "options": [
      "wilderness",
      "retaliation",
      "drought",
      "biodiversity"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ in Australia spread very fast because of the strong wind, and millions of animals could not escape in time.",
    "options": [
      "snare",
      "volunteer",
      "smuggler",
      "wildfire"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "_____ has made sharks much harder to find, because boats catch them faster than they can produce babies.",
    "options": [
      "overfishing",
      "target",
      "trophy",
      "invertebrate"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Dolphins often become _____ in large fishing nets, so some fishermen now use special nets that let them escape.",
    "options": [
      "pest",
      "ecology",
      "bycatch",
      "cattle"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "A _____ with a fast boat badly hurt the manatee, so the rescue team took it to an animal hospital.",
    "options": [
      "symbol",
      "collision",
      "flock",
      "rewilding"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "_____ is a big problem for leopard cats in Miaoli, so the government put up warning signs along the mountain roads.",
    "options": [
      "roadkill",
      "undergrowth",
      "target",
      "poaching"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Beach _____ is making the turtles' nesting areas smaller, and the eggs may be washed away by big waves.",
    "options": [
      "controversy",
      "decade",
      "erosion",
      "bulk"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The number of wild tigers has _____ over the last century, but some countries are now working hard to protect them.",
    "options": [
      "rely",
      "violate",
      "precede",
      "dwindle"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The company wanted to _____ the marsh to build a parking lot, but the birdwatchers protested because thousands of birds rest there.",
    "options": [
      "consult",
      "drain",
      "poach",
      "reinforce"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The factory released a dangerous _____ into the river, and soon the fish and frogs began to disappear.",
    "options": [
      "target",
      "villager",
      "welfare",
      "pollutant"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Many small birds have _____ from the island since rats arrived on ships, because the rats eat their eggs.",
    "options": [
      "vanish",
      "pursue",
      "reside",
      "fluctuate"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "threat": {
    "pos": "n.",
    "en_def": "something that may cause harm or danger",
    "cn_def": "威脅"
  },
  "threaten": {
    "pos": "v.",
    "en_def": "to put something in danger",
    "cn_def": "威脅；危及"
  },
  "deforestation": {
    "pos": "n.",
    "en_def": "the cutting down of forests on a large scale",
    "cn_def": "森林砍伐"
  },
  "logging": {
    "pos": "n.",
    "en_def": "the business of cutting down trees for wood",
    "cn_def": "伐木"
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the act of damaging something so badly it cannot be used",
    "cn_def": "破壞；毀滅"
  },
  "destroy": {
    "pos": "v.",
    "en_def": "to damage something so badly that it cannot be used",
    "cn_def": "摧毀；破壞"
  },
  "fragmentation": {
    "pos": "n.",
    "en_def": "the breaking of a large area into small separate parts",
    "cn_def": "破碎化；分割"
  },
  "encroach": {
    "pos": "v.",
    "en_def": "to slowly take over land that belongs to others",
    "cn_def": "侵占；侵入"
  },
  "urbanisation": {
    "pos": "n.",
    "en_def": "the growth of towns and cities",
    "cn_def": "都市化"
  },
  "pesticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects that harm crops",
    "cn_def": "殺蟲劑；農藥"
  },
  "poison": {
    "pos": "v.",
    "en_def": "to harm or kill with a dangerous substance",
    "cn_def": "毒害；下毒"
  },
  "contamination": {
    "pos": "n.",
    "en_def": "the process of making something dirty or harmful",
    "cn_def": "汙染"
  },
  "contaminate": {
    "pos": "v.",
    "en_def": "to make something dirty or poisonous",
    "cn_def": "汙染"
  },
  "plastic": {
    "pos": "n.",
    "en_def": "a light material made from chemicals, used for bags and bottles",
    "cn_def": "塑膠"
  },
  "debris": {
    "pos": "n.",
    "en_def": "broken pieces of rubbish that are left behind",
    "cn_def": "碎片；殘骸；垃圾"
  },
  "invasive": {
    "pos": "adj.",
    "en_def": "spreading quickly and harming the local plants or animals",
    "cn_def": "入侵的；外來入侵的"
  },
  "outbreak": {
    "pos": "n.",
    "en_def": "the sudden start of a disease",
    "cn_def": "爆發"
  },
  "starvation": {
    "pos": "n.",
    "en_def": "suffering or death caused by having no food",
    "cn_def": "飢餓；餓死"
  },
  "starve": {
    "pos": "v.",
    "en_def": "to suffer or die because there is no food",
    "cn_def": "挨餓；餓死"
  },
  "drought": {
    "pos": "n.",
    "en_def": "a long period with little or no rain",
    "cn_def": "乾旱"
  },
  "wildfire": {
    "pos": "n.",
    "en_def": "a large fire that spreads quickly in forests",
    "cn_def": "野火；森林大火"
  },
  "overfishing": {
    "pos": "n.",
    "en_def": "catching too many fish so their number falls",
    "cn_def": "過度捕撈"
  },
  "bycatch": {
    "pos": "n.",
    "en_def": "sea animals caught by accident while fishing",
    "cn_def": "混獲；意外捕獲的漁獲"
  },
  "collision": {
    "pos": "n.",
    "en_def": "an accident when two things hit each other",
    "cn_def": "碰撞；相撞"
  },
  "roadkill": {
    "pos": "n.",
    "en_def": "animals killed by cars on roads",
    "cn_def": "路殺"
  },
  "erosion": {
    "pos": "n.",
    "en_def": "the slow wearing away of land by water or wind",
    "cn_def": "侵蝕"
  },
  "dwindle": {
    "pos": "v.",
    "en_def": "to become gradually smaller in number",
    "cn_def": "逐漸減少"
  },
  "drain": {
    "pos": "v.",
    "en_def": "to remove the water from an area",
    "cn_def": "排乾（水）"
  },
  "pollutant": {
    "pos": "n.",
    "en_def": "a substance that makes air, water or land dirty",
    "cn_def": "汙染物"
  },
  "vanish": {
    "pos": "v.",
    "en_def": "to disappear suddenly or completely",
    "cn_def": "消失"
  },
  "treaty": {
    "pos": "n.",
    "en_def": "a formal written agreement between countries",
    "cn_def": "條約"
  },
  "savannah": {
    "pos": "n.",
    "en_def": "a flat grassy plain in a hot country with few trees",
    "cn_def": "熱帶大草原"
  },
  "hibernation": {
    "pos": "n.",
    "en_def": "a long sleep that some animals have in winter",
    "cn_def": "冬眠"
  },
  "dispose": {
    "pos": "v.",
    "en_def": "to get rid of something",
    "cn_def": "處理；丟棄"
  },
  "commit": {
    "pos": "v.",
    "en_def": "to promise to give time or money to something",
    "cn_def": "承諾；投入"
  },
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe or do something",
    "cn_def": "說服；使相信"
  },
  "litter": {
    "pos": "n.",
    "en_def": "a group of baby animals born at the same time",
    "cn_def": "一窩（幼崽）"
  },
  "crop": {
    "pos": "n.",
    "en_def": "a plant grown on a farm for food",
    "cn_def": "農作物"
  },
  "protection": {
    "pos": "n.",
    "en_def": "the act of keeping someone or something safe",
    "cn_def": "保護"
  },
  "ecotourism": {
    "pos": "n.",
    "en_def": "travel to natural areas that helps protect them",
    "cn_def": "生態旅遊"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "a series of events in a particular order",
    "cn_def": "順序；一連串"
  },
  "camouflage": {
    "pos": "n.",
    "en_def": "colours or patterns that help an animal hide",
    "cn_def": "偽裝；保護色"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things",
    "cn_def": "優先事項"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who hunts animals illegally",
    "cn_def": "盜獵者"
  },
  "wilderness": {
    "pos": "n.",
    "en_def": "a wild natural area where no people live",
    "cn_def": "荒野"
  },
  "precede": {
    "pos": "v.",
    "en_def": "to happen before something else",
    "cn_def": "在……之前發生"
  },
  "deter": {
    "pos": "v.",
    "en_def": "to stop something from happening by making it difficult",
    "cn_def": "嚇阻；阻止"
  },
  "biodiversity": {
    "pos": "n.",
    "en_def": "the variety of plants and animals in one place",
    "cn_def": "生物多樣性"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important part or quality of something",
    "cn_def": "特色；特徵"
  },
  "status": {
    "pos": "n.",
    "en_def": "official position or condition",
    "cn_def": "地位；狀態"
  },
  "seek": {
    "pos": "v.",
    "en_def": "to try to find or get something",
    "cn_def": "尋求；尋找"
  },
  "convert": {
    "pos": "v.",
    "en_def": "to change something into a different form or use",
    "cn_def": "轉換；改變用途"
  },
  "smuggler": {
    "pos": "n.",
    "en_def": "a person who smuggles goods illegally",
    "cn_def": "走私者"
  },
  "rehabilitation": {
    "pos": "n.",
    "en_def": "the process of helping an animal recover",
    "cn_def": "復健；康復治療"
  },
  "breeding": {
    "pos": "n.",
    "en_def": "the process of animals producing young",
    "cn_def": "繁殖；育種"
  },
  "omnivore": {
    "pos": "n.",
    "en_def": "an animal that eats both plants and meat",
    "cn_def": "雜食性動物"
  },
  "offset": {
    "pos": "v.",
    "en_def": "to balance one thing with another",
    "cn_def": "抵銷；彌補"
  },
  "compile": {
    "pos": "v.",
    "en_def": "to collect information and put it together",
    "cn_def": "彙編；收集整理"
  },
  "deny": {
    "pos": "v.",
    "en_def": "to say that something is not true",
    "cn_def": "否認"
  },
  "formula": {
    "pos": "n.",
    "en_def": "a special mix of ingredients",
    "cn_def": "配方"
  },
  "format": {
    "pos": "n.",
    "en_def": "the way something is arranged or presented",
    "cn_def": "格式；形式"
  },
  "vary": {
    "pos": "v.",
    "en_def": "to be different in different situations",
    "cn_def": "變化；不同"
  },
  "violate": {
    "pos": "v.",
    "en_def": "to break a law or rule",
    "cn_def": "違反；違背"
  },
  "reverse": {
    "pos": "v.",
    "en_def": "to change something back to how it was",
    "cn_def": "扭轉；逆轉"
  },
  "veterinarian": {
    "pos": "n.",
    "en_def": "an animal doctor",
    "cn_def": "獸醫"
  },
  "customs": {
    "pos": "n.",
    "en_def": "the place at a border where officers check goods",
    "cn_def": "海關"
  },
  "collapse": {
    "pos": "n.",
    "en_def": "a sudden failure or fall",
    "cn_def": "崩潰；瓦解"
  },
  "tusk": {
    "pos": "n.",
    "en_def": "a very long pointed tooth of an elephant",
    "cn_def": "（象等的）長牙"
  },
  "core": {
    "pos": "n.",
    "en_def": "the most central or important part",
    "cn_def": "核心；中心部分"
  },
  "instinct": {
    "pos": "n.",
    "en_def": "a natural behaviour an animal does without learning",
    "cn_def": "本能"
  },
  "orphaned": {
    "pos": "adj.",
    "en_def": "having lost its parents",
    "cn_def": "失去父母的；成為孤兒的"
  },
  "annual": {
    "pos": "adj.",
    "en_def": "happening once every year",
    "cn_def": "每年的；年度的"
  },
  "coherent": {
    "pos": "adj.",
    "en_def": "clear, logical and easy to understand",
    "cn_def": "條理清晰的；連貫的"
  },
  "protocol": {
    "pos": "n.",
    "en_def": "a set of rules for how to do something",
    "cn_def": "規範程序；協議"
  },
  "cattle": {
    "pos": "n.",
    "en_def": "cows and bulls kept on a farm",
    "cn_def": "牛（總稱）"
  },
  "series": {
    "pos": "n.",
    "en_def": "a number of similar things that come one after another",
    "cn_def": "系列；一連串"
  },
  "prey": {
    "pos": "n.",
    "en_def": "an animal that is hunted and eaten by another",
    "cn_def": "獵物"
  },
  "shepherd": {
    "pos": "n.",
    "en_def": "a person who looks after sheep",
    "cn_def": "牧羊人"
  },
  "margin": {
    "pos": "n.",
    "en_def": "the edge of an area",
    "cn_def": "邊緣"
  },
  "conform": {
    "pos": "v.",
    "en_def": "to follow rules or standards",
    "cn_def": "遵守；符合"
  },
  "register": {
    "pos": "v.",
    "en_def": "to put a name on an official list",
    "cn_def": "登記；註冊"
  },
  "amend": {
    "pos": "v.",
    "en_def": "to make small changes to a law or document",
    "cn_def": "修訂；修正"
  },
  "retaliation": {
    "pos": "n.",
    "en_def": "action taken to hurt someone who hurt you",
    "cn_def": "報復（行為）"
  },
  "snare": {
    "pos": "n.",
    "en_def": "a trap made of wire for catching animals",
    "cn_def": "（捕獸的）套索；陷阱"
  },
  "volunteer": {
    "pos": "n.",
    "en_def": "a person who works without being paid",
    "cn_def": "志工；義工"
  },
  "target": {
    "pos": "n.",
    "en_def": "a goal you want to achieve",
    "cn_def": "目標"
  },
  "trophy": {
    "pos": "n.",
    "en_def": "part of a dead animal kept to show hunting success",
    "cn_def": "（狩獵）戰利品"
  },
  "invertebrate": {
    "pos": "n.",
    "en_def": "an animal without a backbone",
    "cn_def": "無脊椎動物"
  },
  "pest": {
    "pos": "n.",
    "en_def": "an insect or animal that damages crops or food",
    "cn_def": "害蟲；有害動物"
  },
  "ecology": {
    "pos": "n.",
    "en_def": "the study of how living things relate to their environment",
    "cn_def": "生態學"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "something that represents an idea",
    "cn_def": "象徵；標誌"
  },
  "flock": {
    "pos": "n.",
    "en_def": "a group of birds or sheep",
    "cn_def": "（鳥或羊的）群"
  },
  "rewilding": {
    "pos": "n.",
    "en_def": "returning land to its natural wild state",
    "cn_def": "野化；再野化"
  },
  "undergrowth": {
    "pos": "n.",
    "en_def": "bushes and small plants growing under big trees",
    "cn_def": "矮樹叢；下層灌木"
  },
  "poaching": {
    "pos": "n.",
    "en_def": "the illegal hunting of animals",
    "cn_def": "盜獵（行為）"
  },
  "controversy": {
    "pos": "n.",
    "en_def": "a lot of public disagreement about something",
    "cn_def": "爭議"
  },
  "decade": {
    "pos": "n.",
    "en_def": "a period of ten years",
    "cn_def": "十年"
  },
  "bulk": {
    "pos": "n.",
    "en_def": "the main or largest part of something",
    "cn_def": "大部分；主體"
  },
  "rely": {
    "pos": "v.",
    "en_def": "to need or depend on someone or something",
    "cn_def": "依賴；仰賴"
  },
  "consult": {
    "pos": "v.",
    "en_def": "to ask an expert for advice or information",
    "cn_def": "諮詢；請教"
  },
  "poach": {
    "pos": "v.",
    "en_def": "to hunt or catch animals illegally",
    "cn_def": "盜獵"
  },
  "reinforce": {
    "pos": "v.",
    "en_def": "to make something stronger",
    "cn_def": "加強；強化"
  },
  "villager": {
    "pos": "n.",
    "en_def": "a person who lives in a village",
    "cn_def": "村民"
  },
  "welfare": {
    "pos": "n.",
    "en_def": "the health and happiness of people or animals",
    "cn_def": "福利；福祉"
  },
  "pursue": {
    "pos": "v.",
    "en_def": "to try to achieve something over a long time",
    "cn_def": "追求；從事"
  },
  "reside": {
    "pos": "v.",
    "en_def": "to live in a particular place",
    "cn_def": "居住"
  },
  "fluctuate": {
    "pos": "v.",
    "en_def": "to go up and down often",
    "cn_def": "波動；起伏"
  }
};

const EXTRA_GLOSSES = {};
