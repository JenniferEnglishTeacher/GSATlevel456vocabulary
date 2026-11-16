// Topic 2 Subunit 6 Quiz Data: Animal Behaviour, Breeding & Rescue 動物行為、繁殖與救援
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S06 - Animal Behaviour, Breeding & Rescue 動物行為、繁殖與救援",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "breed",
    "pos": "v.",
    "cn_def": "繁殖；培育",
    "en_def": "to keep animals so that they produce babies",
    "sentence": "The zoo has {{BLANK}} several baby pandas over the years, and some of them were later sent back to China.",
    "cn": "動物園多年來已經繁殖了好幾隻貓熊寶寶，其中有些後來被送回中國。",
    "answer": "bred",
    "alts": [
      "breed"
    ]
  },
  {
    "word": "breeding",
    "pos": "n.",
    "cn_def": "繁殖；育種",
    "en_def": "the process of animals producing young",
    "sentence": "The {{BLANK}} season for sea turtles starts in May, so the beaches are closed to visitors at night.",
    "cn": "海龜的繁殖季從五月開始，所以海灘晚上不開放遊客進入。"
  },
  {
    "word": "captive",
    "pos": "adj.",
    "cn_def": "圈養的；被捕獲的",
    "en_def": "kept in a cage or enclosed area; not free",
    "sentence": "The {{BLANK}} kakapos are watched closely by scientists, and each egg is carefully protected until it hatches.",
    "cn": "圈養的鴞鸚鵡受到科學家密切觀察，每一顆蛋都受到細心保護直到孵化。"
  },
  {
    "word": "captivity",
    "pos": "n.",
    "cn_def": "圈養；囚禁",
    "en_def": "the state of being kept in a cage or zoo",
    "sentence": "Dolphins in {{BLANK}} often show signs of boredom, because a small pool is very different from the open ocean.",
    "cn": "圈養中的海豚常常出現無聊的跡象，因為小水池和廣闊的海洋非常不同。"
  },
  {
    "word": "offspring",
    "pos": "n.",
    "cn_def": "後代；幼崽",
    "en_def": "the baby or babies of an animal",
    "sentence": "An elephant usually has only one {{BLANK}} every four or five years, so it takes a long time for their numbers to grow.",
    "cn": "大象通常每四到五年才生一隻後代，所以牠們的數量需要很長時間才能增加。"
  },
  {
    "word": "mate",
    "pos": "v.",
    "cn_def": "交配",
    "en_def": "to come together to produce babies",
    "sentence": "Male peacocks show their beautiful tails to attract females, and the females choose the best male to {{BLANK}} with.",
    "cn": "雄孔雀展示牠們美麗的尾羽來吸引雌孔雀，而雌孔雀會選擇最好的雄孔雀來交配。"
  },
  {
    "word": "hatch",
    "pos": "v.",
    "cn_def": "孵化",
    "en_def": "to break out of an egg",
    "sentence": "The baby turtles {{BLANK}} at night when the sand is cool, and then they follow the moonlight to the sea.",
    "cn": "小海龜在沙子涼爽的夜晚孵化，然後牠們跟著月光爬向大海。"
  },
  {
    "word": "hatchling",
    "pos": "n.",
    "cn_def": "剛孵化的幼體",
    "en_def": "a baby animal that has just come out of its egg",
    "sentence": "Only one {{BLANK}} out of a thousand turtles grows into an adult, because birds and fish eat most of them.",
    "cn": "一千隻剛孵化的小海龜中只有一隻能長大為成龜，因為大部分都被鳥和魚吃掉了。"
  },
  {
    "word": "cub",
    "pos": "n.",
    "cn_def": "幼獸（熊、獅、虎等）",
    "en_def": "a young bear, lion, tiger or fox",
    "sentence": "The bear {{BLANK}} stays with its mother for about two years, and it learns how to find food and climb trees.",
    "cn": "小熊會和媽媽待在一起大約兩年，學習如何找食物和爬樹。"
  },
  {
    "word": "calf",
    "pos": "n.",
    "cn_def": "幼崽（牛、象、鯨等）",
    "en_def": "a young cow, elephant or whale",
    "sentence": "The baby elephant is called a {{BLANK}}, and the whole herd protects it when lions come close.",
    "cn": "小象被稱為幼象，當獅子靠近時，整個象群都會保護牠。"
  },
  {
    "word": "litter",
    "pos": "n.",
    "cn_def": "一窩（幼崽）",
    "en_def": "a group of baby animals born at the same time",
    "sentence": "Our neighbour's cat gave birth to a {{BLANK}} of five kittens, so she is looking for kind families to adopt them.",
    "cn": "鄰居的貓生了一窩五隻小貓，所以她正在尋找有愛心的家庭來領養牠們。"
  },
  {
    "word": "lay",
    "pos": "v.",
    "cn_def": "產（卵）；下（蛋）",
    "en_def": "to produce an egg from the body",
    "sentence": "The mother turtle {{BLANK}} about one hundred eggs in the sand, and then she slowly crawled back to the sea.",
    "cn": "海龜媽媽在沙裡產下大約一百顆蛋，然後慢慢地爬回大海。",
    "answer": "laid",
    "alts": [
      "lay"
    ]
  },
  {
    "word": "incubate",
    "pos": "v.",
    "cn_def": "孵（蛋）",
    "en_def": "to keep eggs warm until they hatch",
    "sentence": "Because the parents had left the nest, the rescue centre had to {{BLANK}} the eggs in a warm machine.",
    "cn": "因為鳥爸媽離開了鳥巢，救援中心只好用保溫機器來孵這些蛋。"
  },
  {
    "word": "forage",
    "pos": "v.",
    "cn_def": "覓食",
    "en_def": "to search for food",
    "sentence": "Wild boars {{BLANK}} in the forest at night, but sometimes they come into villages and dig up farmers' sweet potatoes.",
    "cn": "山豬在夜晚於森林中覓食，但有時牠們會跑進村莊挖農夫的地瓜。"
  },
  {
    "word": "graze",
    "pos": "v.",
    "cn_def": "吃草；放牧",
    "en_def": "to eat grass in a field",
    "sentence": "The deer {{BLANK}} quietly in the field every evening, but they run away as soon as they smell a human.",
    "cn": "鹿每天傍晚都在田野裡安靜地吃草，但一聞到人類的氣味就會立刻逃跑。"
  },
  {
    "word": "camouflage",
    "pos": "n.",
    "cn_def": "偽裝；保護色",
    "en_def": "colours or patterns that help an animal hide",
    "sentence": "The leaf insect has perfect {{BLANK}}, so birds fly right past it without noticing it on the branch.",
    "cn": "葉䗛有完美的偽裝，所以鳥從牠旁邊飛過也不會注意到樹枝上的牠。"
  },
  {
    "word": "instinct",
    "pos": "n.",
    "cn_def": "本能",
    "en_def": "a natural behaviour an animal does without learning",
    "sentence": "Baby turtles move towards the sea by {{BLANK}}, even though no one has ever shown them the way.",
    "cn": "小海龜靠著本能朝大海前進，即使從來沒有人教過牠們怎麼走。"
  },
  {
    "word": "flock",
    "pos": "n.",
    "cn_def": "（鳥或羊的）群",
    "en_def": "a group of birds or sheep",
    "sentence": "A {{BLANK}} of spoonbills landed in the wetland at sunset, and the birdwatchers quickly lifted their cameras.",
    "cn": "一群黑面琵鷺在日落時降落在濕地上，賞鳥人士迅速舉起了相機。"
  },
  {
    "word": "herd",
    "pos": "n.",
    "cn_def": "（動物的）群",
    "en_def": "a large group of animals such as cows or elephants",
    "sentence": "A {{BLANK}} of buffalo crossed the road slowly, so all the cars had to stop and wait for several minutes.",
    "cn": "一群水牛緩緩地穿越馬路，所以所有車輛都必須停下來等好幾分鐘。"
  },
  {
    "word": "solitary",
    "pos": "adj.",
    "cn_def": "獨居的",
    "en_def": "living or spending time alone",
    "sentence": "Leopards are {{BLANK}} animals that hunt alone, while lions live and hunt together in big family groups.",
    "cn": "豹是單獨狩獵的獨居動物，而獅子則以大家庭群體一起生活和狩獵。"
  },
  {
    "word": "rescue",
    "pos": "v.",
    "cn_def": "救援；拯救",
    "en_def": "to save someone or something from danger",
    "sentence": "Fishermen {{BLANK}} a baby dolphin that was trapped in a net, and they carefully returned it to the sea.",
    "cn": "漁民們救出了一隻被困在網中的小海豚，並小心地把牠送回海裡。"
  },
  {
    "word": "rehabilitate",
    "pos": "v.",
    "cn_def": "使康復；使復原",
    "en_def": "to help an injured animal become healthy again",
    "sentence": "The centre {{BLANK}} injured eagles for several months, and then it releases them back into the mountains.",
    "cn": "中心會花好幾個月幫助受傷的老鷹康復，然後把牠們野放回山林。"
  },
  {
    "word": "rehabilitation",
    "pos": "n.",
    "cn_def": "復健；康復治療",
    "en_def": "the process of helping an animal recover",
    "sentence": "After three months of {{BLANK}}, the sea turtle could swim well again, so the vets returned it to the ocean.",
    "cn": "經過三個月的復健，那隻海龜又能好好游泳了，所以獸醫們把牠放回海洋。"
  },
  {
    "word": "veterinarian",
    "pos": "n.",
    "cn_def": "獸醫",
    "en_def": "an animal doctor",
    "sentence": "The {{BLANK}} removed a fishing hook from the bird's throat, and the bird was able to eat again the next day.",
    "cn": "獸醫從那隻鳥的喉嚨裡取出了一個魚鉤，隔天那隻鳥就能再次進食了。"
  },
  {
    "word": "orphaned",
    "pos": "adj.",
    "cn_def": "失去父母的；成為孤兒的",
    "en_def": "having lost its parents",
    "sentence": "The {{BLANK}} baby monkey was found alone by the road, so volunteers fed it milk every three hours.",
    "cn": "那隻失去父母的小猴子被發現獨自待在路邊，所以志工們每三個小時就餵牠喝一次奶。"
  },
  {
    "word": "injured",
    "pos": "adj.",
    "cn_def": "受傷的",
    "en_def": "hurt or harmed",
    "sentence": "We found an {{BLANK}} owl in the school garden, and we called the animal rescue centre right away.",
    "cn": "我們在學校的花園裡發現了一隻受傷的貓頭鷹，於是馬上打電話給動物救援中心。"
  },
  {
    "word": "zookeeper",
    "pos": "n.",
    "cn_def": "動物園管理員；保育員",
    "en_def": "a person who looks after animals in a zoo",
    "sentence": "The {{BLANK}} prepares fresh bamboo for the pandas every morning, and she also checks whether they are healthy.",
    "cn": "那位保育員每天早上都為貓熊準備新鮮的竹子，也會檢查牠們是否健康。"
  },
  {
    "word": "enclosure",
    "pos": "n.",
    "cn_def": "圍欄；圈養區",
    "en_def": "an area with a fence or wall where animals are kept",
    "sentence": "The new {{BLANK}} for the tigers has trees, rocks and a pool, so the animals can behave more naturally.",
    "cn": "老虎的新圈養區有樹木、岩石和水池，所以動物們能表現得更自然。"
  },
  {
    "word": "aquarium",
    "pos": "n.",
    "cn_def": "水族館",
    "en_def": "a building where people can see fish and sea animals",
    "sentence": "We visited the {{BLANK}} in Pingtung last summer, and the children loved watching the penguins and sharks.",
    "cn": "我們去年夏天參觀了屏東的水族館，孩子們很喜歡看企鵝和鯊魚。"
  },
  {
    "word": "zoo",
    "pos": "n.",
    "cn_def": "動物園",
    "en_def": "a place where wild animals are kept for people to see",
    "sentence": "The Taipei {{BLANK}} is very popular with families, and it also runs programmes to protect the Formosan pangolin.",
    "cn": "台北市立動物園很受家庭歡迎，而且它也推行保護台灣穿山甲的計畫。"
  }
];

const MCQS = [
  {
    "q": "The zoo has _____ several baby pandas over the years, and some of them were later sent back to China.",
    "options": [
      "assess",
      "bred",
      "inspect",
      "undergo"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The _____ season for sea turtles starts in May, so the beaches are closed to visitors at night.",
    "options": [
      "breeding",
      "horn",
      "scope",
      "burrow"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ kakapos are watched closely by scientists, and each egg is carefully protected until it hatches.",
    "options": [
      "eco-friendly",
      "voluntary",
      "marine",
      "captive"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Dolphins in _____ often show signs of boredom, because a small pool is very different from the open ocean.",
    "options": [
      "crackdown",
      "trafficking",
      "captivity",
      "bulk"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "An elephant usually has only one _____ every four or five years, so it takes a long time for their numbers to grow.",
    "options": [
      "commodity",
      "offspring",
      "petition",
      "herder"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Male peacocks show their beautiful tails to attract females, and the females choose the best male to _____ with.",
    "options": [
      "mate",
      "inhibit",
      "generate",
      "tolerate"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The baby turtles _____ at night when the sand is cool, and then they follow the moonlight to the sea.",
    "options": [
      "dispose",
      "accelerate",
      "hatch",
      "reside"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Only one _____ out of a thousand turtles grows into an adult, because birds and fish eat most of them.",
    "options": [
      "rewilding",
      "wetland",
      "roadkill",
      "hatchling"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The bear _____ stays with its mother for about two years, and it learns how to find food and climb trees.",
    "options": [
      "buffer",
      "cub",
      "niche",
      "trafficker"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The baby elephant is called a _____, and the whole herd protects it when lions come close.",
    "options": [
      "compensation",
      "bond",
      "calf",
      "restoration"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Our neighbour's cat gave birth to a _____ of five kittens, so she is looking for kind families to adopt them.",
    "options": [
      "litter",
      "collar",
      "emphasis",
      "villager"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The mother turtle _____ about one hundred eggs in the sand, and then she slowly crawled back to the sea.",
    "options": [
      "amend",
      "reside",
      "reveal",
      "laid"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Because the parents had left the nest, the rescue centre had to _____ the eggs in a warm machine.",
    "options": [
      "incubate",
      "require",
      "accompany",
      "reject"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Wild boars _____ in the forest at night, but sometimes they come into villages and dig up farmers' sweet potatoes.",
    "options": [
      "terminate",
      "deplete",
      "poach",
      "forage"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The deer _____ quietly in the field every evening, but they run away as soon as they smell a human.",
    "options": [
      "reintroduce",
      "cite",
      "graze",
      "confine"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The leaf insect has perfect _____, so birds fly right past it without noticing it on the branch.",
    "options": [
      "policy",
      "camouflage",
      "poacher",
      "ecosystem"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Baby turtles move towards the sea by _____, even though no one has ever shown them the way.",
    "options": [
      "instinct",
      "ecosystem",
      "wildlife",
      "ecotourism"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "A _____ of spoonbills landed in the wetland at sunset, and the birdwatchers quickly lifted their cameras.",
    "options": [
      "poaching",
      "wetland",
      "subspecies",
      "flock"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "A _____ of buffalo crossed the road slowly, so all the cars had to stop and wait for several minutes.",
    "options": [
      "scheme",
      "herd",
      "roadkill",
      "bond"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Leopards are _____ animals that hunt alone, while lions live and hunt together in big family groups.",
    "options": [
      "radical",
      "unique",
      "solitary",
      "capable"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Fishermen _____ a baby dolphin that was trapped in a net, and they carefully returned it to the sea.",
    "options": [
      "advocate",
      "rescue",
      "extract",
      "abandon"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The centre _____ injured eagles for several months, and then it releases them back into the mountains.",
    "options": [
      "suspend",
      "contaminate",
      "rehabilitate",
      "reintroduce"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "After three months of _____, the sea turtle could swim well again, so the vets returned it to the ocean.",
    "options": [
      "rehabilitation",
      "scenario",
      "notion",
      "nest"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The _____ removed a fishing hook from the bird's throat, and the bird was able to eat again the next day.",
    "options": [
      "pesticide",
      "instance",
      "herbivore",
      "veterinarian"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The _____ baby monkey was found alone by the road, so volunteers fed it milk every three hours.",
    "options": [
      "compatible",
      "capable",
      "orphaned",
      "corporate"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "We found an _____ owl in the school garden, and we called the animal rescue centre right away.",
    "options": [
      "dynamic",
      "compatible",
      "flightless",
      "injured"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The _____ prepares fresh bamboo for the pandas every morning, and she also checks whether they are healthy.",
    "options": [
      "zookeeper",
      "cattle",
      "charity",
      "substitute"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new _____ for the tigers has trees, rocks and a pool, so the animals can behave more naturally.",
    "options": [
      "poultry",
      "enclosure",
      "preservation",
      "symbol"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "We visited the _____ in Pingtung last summer, and the children loved watching the penguins and sharks.",
    "options": [
      "aquarium",
      "marsupial",
      "rainforest",
      "motive"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The Taipei _____ is very popular with families, and it also runs programmes to protect the Formosan pangolin.",
    "options": [
      "prospect",
      "controversy",
      "campaign",
      "zoo"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "breed": {
    "pos": "v.",
    "en_def": "to keep animals so that they produce babies",
    "cn_def": "繁殖；培育"
  },
  "bred": {
    "pos": "v.",
    "en_def": "to keep animals so that they produce babies",
    "cn_def": "繁殖；培育"
  },
  "breeding": {
    "pos": "n.",
    "en_def": "the process of animals producing young",
    "cn_def": "繁殖；育種"
  },
  "captive": {
    "pos": "adj.",
    "en_def": "kept in a cage or enclosed area; not free",
    "cn_def": "圈養的；被捕獲的"
  },
  "captivity": {
    "pos": "n.",
    "en_def": "the state of being kept in a cage or zoo",
    "cn_def": "圈養；囚禁"
  },
  "offspring": {
    "pos": "n.",
    "en_def": "the baby or babies of an animal",
    "cn_def": "後代；幼崽"
  },
  "mate": {
    "pos": "v.",
    "en_def": "to come together to produce babies",
    "cn_def": "交配"
  },
  "hatch": {
    "pos": "v.",
    "en_def": "to break out of an egg",
    "cn_def": "孵化"
  },
  "hatchling": {
    "pos": "n.",
    "en_def": "a baby animal that has just come out of its egg",
    "cn_def": "剛孵化的幼體"
  },
  "cub": {
    "pos": "n.",
    "en_def": "a young bear, lion, tiger or fox",
    "cn_def": "幼獸（熊、獅、虎等）"
  },
  "calf": {
    "pos": "n.",
    "en_def": "a young cow, elephant or whale",
    "cn_def": "幼崽（牛、象、鯨等）"
  },
  "litter": {
    "pos": "n.",
    "en_def": "a group of baby animals born at the same time",
    "cn_def": "一窩（幼崽）"
  },
  "lay": {
    "pos": "v.",
    "en_def": "to produce an egg from the body",
    "cn_def": "產（卵）；下（蛋）"
  },
  "laid": {
    "pos": "v.",
    "en_def": "to produce an egg from the body",
    "cn_def": "產（卵）；下（蛋）"
  },
  "incubate": {
    "pos": "v.",
    "en_def": "to keep eggs warm until they hatch",
    "cn_def": "孵（蛋）"
  },
  "forage": {
    "pos": "v.",
    "en_def": "to search for food",
    "cn_def": "覓食"
  },
  "graze": {
    "pos": "v.",
    "en_def": "to eat grass in a field",
    "cn_def": "吃草；放牧"
  },
  "camouflage": {
    "pos": "n.",
    "en_def": "colours or patterns that help an animal hide",
    "cn_def": "偽裝；保護色"
  },
  "instinct": {
    "pos": "n.",
    "en_def": "a natural behaviour an animal does without learning",
    "cn_def": "本能"
  },
  "flock": {
    "pos": "n.",
    "en_def": "a group of birds or sheep",
    "cn_def": "（鳥或羊的）群"
  },
  "herd": {
    "pos": "n.",
    "en_def": "a large group of animals such as cows or elephants",
    "cn_def": "（動物的）群"
  },
  "solitary": {
    "pos": "adj.",
    "en_def": "living or spending time alone",
    "cn_def": "獨居的"
  },
  "rescue": {
    "pos": "v.",
    "en_def": "to save someone or something from danger",
    "cn_def": "救援；拯救"
  },
  "rehabilitate": {
    "pos": "v.",
    "en_def": "to help an injured animal become healthy again",
    "cn_def": "使康復；使復原"
  },
  "rehabilitation": {
    "pos": "n.",
    "en_def": "the process of helping an animal recover",
    "cn_def": "復健；康復治療"
  },
  "veterinarian": {
    "pos": "n.",
    "en_def": "an animal doctor",
    "cn_def": "獸醫"
  },
  "orphaned": {
    "pos": "adj.",
    "en_def": "having lost its parents",
    "cn_def": "失去父母的；成為孤兒的"
  },
  "injured": {
    "pos": "adj.",
    "en_def": "hurt or harmed",
    "cn_def": "受傷的"
  },
  "zookeeper": {
    "pos": "n.",
    "en_def": "a person who looks after animals in a zoo",
    "cn_def": "動物園管理員；保育員"
  },
  "enclosure": {
    "pos": "n.",
    "en_def": "an area with a fence or wall where animals are kept",
    "cn_def": "圍欄；圈養區"
  },
  "aquarium": {
    "pos": "n.",
    "en_def": "a building where people can see fish and sea animals",
    "cn_def": "水族館"
  },
  "zoo": {
    "pos": "n.",
    "en_def": "a place where wild animals are kept for people to see",
    "cn_def": "動物園"
  },
  "assess": {
    "pos": "v.",
    "en_def": "to judge how good, bad or serious something is",
    "cn_def": "評估"
  },
  "inspect": {
    "pos": "v.",
    "en_def": "to look at something carefully to check it",
    "cn_def": "檢查；視察"
  },
  "undergo": {
    "pos": "v.",
    "en_def": "to experience a process or change",
    "cn_def": "經歷；接受（治療等）"
  },
  "horn": {
    "pos": "n.",
    "en_def": "a hard pointed part growing on an animal's head",
    "cn_def": "角"
  },
  "scope": {
    "pos": "n.",
    "en_def": "the range of things that something covers",
    "cn_def": "範圍"
  },
  "burrow": {
    "pos": "n.",
    "en_def": "a hole in the ground that an animal digs to live in",
    "cn_def": "地洞；洞穴"
  },
  "eco-friendly": {
    "pos": "adj.",
    "en_def": "not harmful to the environment",
    "cn_def": "環保的；對環境友善的"
  },
  "voluntary": {
    "pos": "adj.",
    "en_def": "done because you choose to, not because you must",
    "cn_def": "自願的"
  },
  "marine": {
    "pos": "adj.",
    "en_def": "related to the sea and the animals in it",
    "cn_def": "海洋的"
  },
  "crackdown": {
    "pos": "n.",
    "en_def": "strong official action to stop illegal activity",
    "cn_def": "嚴厲打擊；取締"
  },
  "trafficking": {
    "pos": "n.",
    "en_def": "the illegal buying and selling of goods or animals",
    "cn_def": "非法交易；販運"
  },
  "bulk": {
    "pos": "n.",
    "en_def": "the main or largest part of something",
    "cn_def": "大部分；主體"
  },
  "commodity": {
    "pos": "n.",
    "en_def": "a product that can be bought and sold",
    "cn_def": "商品；貨物"
  },
  "petition": {
    "pos": "n.",
    "en_def": "a written request signed by many people",
    "cn_def": "請願書；連署"
  },
  "herder": {
    "pos": "n.",
    "en_def": "a person who looks after a group of animals",
    "cn_def": "牧民；牧人"
  },
  "inhibit": {
    "pos": "v.",
    "en_def": "to slow down or stop something",
    "cn_def": "抑制；阻礙"
  },
  "generate": {
    "pos": "v.",
    "en_def": "to produce or create something",
    "cn_def": "產生；創造"
  },
  "tolerate": {
    "pos": "v.",
    "en_def": "to accept something you do not like",
    "cn_def": "容忍；忍受"
  },
  "dispose": {
    "pos": "v.",
    "en_def": "to get rid of something",
    "cn_def": "處理；丟棄"
  },
  "accelerate": {
    "pos": "v.",
    "en_def": "to happen or make happen faster",
    "cn_def": "加速"
  },
  "reside": {
    "pos": "v.",
    "en_def": "to live in a particular place",
    "cn_def": "居住"
  },
  "rewilding": {
    "pos": "n.",
    "en_def": "returning land to its natural wild state",
    "cn_def": "野化；再野化"
  },
  "wetland": {
    "pos": "n.",
    "en_def": "land that is wet, such as a marsh or swamp",
    "cn_def": "濕地"
  },
  "roadkill": {
    "pos": "n.",
    "en_def": "animals killed by cars on roads",
    "cn_def": "路殺"
  },
  "buffer": {
    "pos": "n.",
    "en_def": "an area that protects something from harm",
    "cn_def": "緩衝區"
  },
  "niche": {
    "pos": "n.",
    "en_def": "the special role of a species in its environment",
    "cn_def": "生態棲位"
  },
  "trafficker": {
    "pos": "n.",
    "en_def": "a person who buys and sells illegal goods",
    "cn_def": "非法販運者"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone for a loss",
    "cn_def": "補償；賠償金"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close connection between people or animals",
    "cn_def": "聯繫；情感連結"
  },
  "restoration": {
    "pos": "n.",
    "en_def": "the act of returning something to its earlier good condition",
    "cn_def": "復育；修復"
  },
  "collar": {
    "pos": "n.",
    "en_def": "a band put around an animal's neck",
    "cn_def": "項圈"
  },
  "emphasis": {
    "pos": "n.",
    "en_def": "special importance given to something",
    "cn_def": "強調；重點"
  },
  "villager": {
    "pos": "n.",
    "en_def": "a person who lives in a village",
    "cn_def": "村民"
  },
  "amend": {
    "pos": "v.",
    "en_def": "to make small changes to a law or document",
    "cn_def": "修訂；修正"
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show something that was hidden",
    "cn_def": "揭露；顯示"
  },
  "require": {
    "pos": "v.",
    "en_def": "to need something",
    "cn_def": "需要；要求"
  },
  "accompany": {
    "pos": "v.",
    "en_def": "to go somewhere with someone",
    "cn_def": "陪同；伴隨"
  },
  "reject": {
    "pos": "v.",
    "en_def": "to refuse to accept something",
    "cn_def": "拒絕；否決"
  },
  "terminate": {
    "pos": "v.",
    "en_def": "to end something",
    "cn_def": "終止；結束"
  },
  "deplete": {
    "pos": "v.",
    "en_def": "to use up or greatly reduce the amount of something",
    "cn_def": "耗盡；大量減少"
  },
  "poach": {
    "pos": "v.",
    "en_def": "to hunt or catch animals illegally",
    "cn_def": "盜獵"
  },
  "reintroduce": {
    "pos": "v.",
    "en_def": "to bring an animal back to an area where it once lived",
    "cn_def": "重新引入；野放回原棲地"
  },
  "cite": {
    "pos": "v.",
    "en_def": "to mention something as proof or an example",
    "cn_def": "引用；舉出"
  },
  "confine": {
    "pos": "v.",
    "en_def": "to keep someone or something within a small area",
    "cn_def": "限制；侷限"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a plan of action agreed by a government or group",
    "cn_def": "政策"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who hunts animals illegally",
    "cn_def": "盜獵者"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the living things in an area and how they connect",
    "cn_def": "生態系統"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "animals and plants that live in nature",
    "cn_def": "野生動植物"
  },
  "ecotourism": {
    "pos": "n.",
    "en_def": "travel to natural areas that helps protect them",
    "cn_def": "生態旅遊"
  },
  "poaching": {
    "pos": "n.",
    "en_def": "the illegal hunting of animals",
    "cn_def": "盜獵（行為）"
  },
  "subspecies": {
    "pos": "n.",
    "en_def": "a smaller group within a species",
    "cn_def": "亞種"
  },
  "scheme": {
    "pos": "n.",
    "en_def": "an official plan or programme",
    "cn_def": "計畫；方案"
  },
  "radical": {
    "pos": "adj.",
    "en_def": "very new and different; extreme",
    "cn_def": "激進的；徹底的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的；能夠的"
  },
  "advocate": {
    "pos": "v.",
    "en_def": "to publicly support an idea or plan",
    "cn_def": "提倡；擁護"
  },
  "extract": {
    "pos": "v.",
    "en_def": "to take something out, often with effort",
    "cn_def": "提取；開採"
  },
  "abandon": {
    "pos": "v.",
    "en_def": "to leave something or someone and not come back",
    "cn_def": "拋棄；放棄"
  },
  "suspend": {
    "pos": "v.",
    "en_def": "to stop something for a period of time",
    "cn_def": "暫停；中止"
  },
  "contaminate": {
    "pos": "v.",
    "en_def": "to make something dirty or poisonous",
    "cn_def": "汙染"
  },
  "scenario": {
    "pos": "n.",
    "en_def": "a possible situation in the future",
    "cn_def": "情境；可能的情況"
  },
  "notion": {
    "pos": "n.",
    "en_def": "an idea or belief",
    "cn_def": "觀念；概念"
  },
  "nest": {
    "pos": "n.",
    "en_def": "a home that birds build for their eggs",
    "cn_def": "巢；鳥巢"
  },
  "pesticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects that harm crops",
    "cn_def": "殺蟲劑；農藥"
  },
  "instance": {
    "pos": "n.",
    "en_def": "an example of something",
    "cn_def": "例子；實例"
  },
  "herbivore": {
    "pos": "n.",
    "en_def": "an animal that eats only plants",
    "cn_def": "草食性動物"
  },
  "compatible": {
    "pos": "adj.",
    "en_def": "able to exist together without problems",
    "cn_def": "相容的；可共存的"
  },
  "corporate": {
    "pos": "adj.",
    "en_def": "related to large companies",
    "cn_def": "企業的；公司的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "always changing and full of energy",
    "cn_def": "動態的；充滿活力的"
  },
  "flightless": {
    "pos": "adj.",
    "en_def": "not able to fly",
    "cn_def": "不會飛的"
  },
  "cattle": {
    "pos": "n.",
    "en_def": "cows and bulls kept on a farm",
    "cn_def": "牛（總稱）"
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organisation that helps people or animals in need",
    "cn_def": "慈善機構"
  },
  "substitute": {
    "pos": "n.",
    "en_def": "something used instead of another thing",
    "cn_def": "替代品"
  },
  "poultry": {
    "pos": "n.",
    "en_def": "chickens, ducks and other farm birds",
    "cn_def": "家禽"
  },
  "preservation": {
    "pos": "n.",
    "en_def": "the act of keeping something safe from harm",
    "cn_def": "保存；保護"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "something that represents an idea",
    "cn_def": "象徵；標誌"
  },
  "marsupial": {
    "pos": "n.",
    "en_def": "an animal that carries its baby in a pouch",
    "cn_def": "有袋動物"
  },
  "rainforest": {
    "pos": "n.",
    "en_def": "a thick tropical forest with heavy rain all year",
    "cn_def": "雨林"
  },
  "motive": {
    "pos": "n.",
    "en_def": "the reason why someone does something",
    "cn_def": "動機"
  },
  "prospect": {
    "pos": "n.",
    "en_def": "the possibility that something will happen",
    "cn_def": "前景；可能性"
  },
  "controversy": {
    "pos": "n.",
    "en_def": "a lot of public disagreement about something",
    "cn_def": "爭議"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned series of actions to achieve a goal",
    "cn_def": "運動；宣傳活動"
  }
};

const EXTRA_GLOSSES = {};
