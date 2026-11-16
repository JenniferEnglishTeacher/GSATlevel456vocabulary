// Topic 13 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "survival of the fittest",
    "pos": "n.phr.",
    "cn_def": "適者生存",
    "en_def": "the idea that the best-suited living things survive",
    "sentence": "Some people use \"{{BLANK}}\" to describe business, but Darwin meant fitting the environment, not being the strongest.",
    "cn": "有些人用「適者生存」來形容商業競爭，但達爾文的意思是適應環境，而不是最強壯。"
  },
  {
    "word": "run in the family",
    "pos": "v.phr.",
    "cn_def": "家族遺傳",
    "en_def": "to be common among members of one family",
    "sentence": "Musical talent seems to {{BLANK}}, because my grandfather, my mother and my brother all play the piano.",
    "cn": "音樂天分似乎是家族遺傳，因為我的外公、我媽媽和我哥哥都會彈鋼琴。"
  },
  {
    "word": "birds of a feather flock together",
    "pos": "phr.",
    "cn_def": "物以類聚",
    "en_def": "people who are alike spend time together",
    "sentence": "Tom and his friends all love insects and spend weekends looking for beetles, so {{BLANK}}.",
    "cn": "湯姆和他的朋友們都熱愛昆蟲，週末都在找甲蟲，所以真是物以類聚。"
  },
  {
    "word": "like father, like son",
    "pos": "phr.",
    "cn_def": "有其父必有其子",
    "en_def": "a son is often similar to his father",
    "sentence": "My dad laughs exactly the way my brother does, and my grandmother always smiles and says, \"{{BLANK}}.\"",
    "cn": "我爸爸笑起來跟我哥哥一模一樣，而我奶奶總是微笑著說：「有其父必有其子。」"
  },
  {
    "word": "the apple doesn't fall far from the tree",
    "pos": "phr.",
    "cn_def": "有其父母必有其子女",
    "en_def": "children are often like their parents",
    "sentence": "Her mother was a famous scientist, and now she is studying genes too, so {{BLANK}}.",
    "cn": "她的母親是一位著名的科學家，而現在她也在研究基因，所以真是有其父母必有其子女。"
  },
  {
    "word": "a chip off the old block",
    "pos": "n.phr.",
    "cn_def": "酷似父母的孩子",
    "en_def": "a person who is very similar to a parent",
    "sentence": "Kevin is as funny and talkative as his father, and everyone at the party said he was {{BLANK}}.",
    "cn": "凱文和他爸爸一樣風趣又健談，而派對上每個人都說他酷似他爸爸。"
  },
  {
    "word": "in one's genes",
    "pos": "adj.phr.",
    "cn_def": "天生的；與生俱來的",
    "en_def": "natural to someone because of their family",
    "sentence": "Running seems to be {{BLANK}}, because her parents were both Olympic athletes and she won her first race at six.",
    "cn": "跑步似乎是她與生俱來的能力，因為她的父母都是奧運選手，而她六歲就贏得了第一場比賽。"
  },
  {
    "word": "pass on",
    "pos": "v.phr.",
    "cn_def": "傳給；遺傳給",
    "en_def": "to give something to children or the next generation",
    "sentence": "Parents can {{BLANK}} certain illnesses to their children, so doctors sometimes suggest a gene test before pregnancy.",
    "cn": "父母可能會把某些疾病遺傳給孩子，所以醫生有時會建議在懷孕前做基因檢測。"
  },
  {
    "word": "take after",
    "pos": "v.phr.",
    "cn_def": "長得像；性格像（長輩）",
    "en_def": "to look or behave like an older family member",
    "sentence": "I {{BLANK}} my grandmother, because we both have green eyes and we both love gardening.",
    "cn": "我長得像我奶奶，因為我們都有綠色的眼睛，而且都熱愛園藝。"
  },
  {
    "word": "the early bird catches the worm",
    "pos": "phr.",
    "cn_def": "早起的鳥兒有蟲吃",
    "en_def": "people who start early will succeed",
    "sentence": "My mum always wakes me at six before exams, because she believes {{BLANK}}.",
    "cn": "考試前我媽媽總是六點叫我起床，因為她相信早起的鳥兒有蟲吃。"
  },
  {
    "word": "a leopard can't change its spots",
    "pos": "phr.",
    "cn_def": "本性難移",
    "en_def": "people cannot change their basic character",
    "sentence": "He promised to stop being late, but he was late again the next day, so {{BLANK}}.",
    "cn": "他答應不再遲到，但隔天又遲到了，所以真是本性難移。"
  },
  {
    "word": "cry wolf",
    "pos": "v.phr.",
    "cn_def": "謊報危險；放羊的孩子",
    "en_def": "to give a false warning so people stop believing you",
    "sentence": "If you {{BLANK}} too often about being sick, your teacher may not believe you when you really feel ill.",
    "cn": "如果你太常謊報生病，當你真的不舒服時老師可能不會相信你。"
  },
  {
    "word": "let the cat out of the bag",
    "pos": "v.phr.",
    "cn_def": "洩露祕密",
    "en_def": "to tell a secret by mistake",
    "sentence": "We planned a surprise party for Mum, but my little sister {{BLANK}}, so the surprise was ruined.",
    "cn": "我們為媽媽計畫了一場驚喜派對，但我妹妹洩露了祕密，所以驚喜就泡湯了。"
  },
  {
    "word": "the black sheep of the family",
    "pos": "n.phr.",
    "cn_def": "家族中的害群之馬；異類",
    "en_def": "a family member who is different or disapproved of",
    "sentence": "Everyone in my family became a doctor, but my uncle became a rock singer, so he calls himself {{BLANK}}.",
    "cn": "我家每個人都成了醫生，但我叔叔成了搖滾歌手，所以他自稱是家族中的異類。"
  },
  {
    "word": "the lion's share",
    "pos": "n.phr.",
    "cn_def": "最大的一份",
    "en_def": "the largest part of something",
    "sentence": "The dominant wolf usually takes {{BLANK}} of the food, while the younger wolves wait for what is left.",
    "cn": "地位最高的狼通常拿走食物中最大的一份，而年輕的狼則等著吃剩下的。"
  },
  {
    "word": "you can't teach an old dog new tricks",
    "pos": "phr.",
    "cn_def": "老狗學不會新把戲；積習難改",
    "en_def": "it is hard to change old habits",
    "sentence": "My grandfather refuses to use a smartphone and says {{BLANK}}, but I am still trying to teach him.",
    "cn": "我爺爺拒絕使用智慧型手機，還說老狗學不會新把戲，但我仍在努力教他。"
  },
  {
    "word": "monkey see, monkey do",
    "pos": "phr.",
    "cn_def": "有樣學樣",
    "en_def": "people copy what others do without thinking",
    "sentence": "My little brother copies everything I do, so when I started eating vegetables, he did too—{{BLANK}}.",
    "cn": "我弟弟什麼都學我，所以當我開始吃蔬菜時，他也跟著吃——真是有樣學樣。"
  },
  {
    "word": "dog-eat-dog",
    "pos": "adj.",
    "cn_def": "殘酷競爭的；弱肉強食的",
    "en_def": "very competitive, where people harm others to succeed",
    "sentence": "Life in the wild is a {{BLANK}} world, and only the animals that find enough food survive the winter.",
    "cn": "野外的生活是一個弱肉強食的世界，而只有找到足夠食物的動物才能熬過冬天。"
  },
  {
    "word": "give rise to",
    "pos": "v.phr.",
    "cn_def": "引起；導致",
    "en_def": "to cause something to happen or exist",
    "sentence": "A small change in one gene can {{BLANK}} a new feature, and over time that feature may spread through the species.",
    "cn": "一個基因的小改變就能導致一個新特徵的出現，而隨著時間推移，這個特徵可能會擴散到整個物種。"
  },
  {
    "word": "ruffle someone's feathers",
    "pos": "v.phr.",
    "cn_def": "惹惱某人",
    "en_def": "to annoy or upset someone",
    "sentence": "My classmate's rude joke about my drawing {{BLANK}}, but I tried to stay calm and smiled at him.",
    "cn": "我同學對我畫作的無禮玩笑惹惱了我，但我試著保持冷靜並對他微笑。"
  }
];

const MCQS = [
  {
    "q": "Some people use \"_____\" to describe business, but Darwin meant fitting the environment, not being the strongest.",
    "options": [
      "survival of the fittest",
      "learned behaviour",
      "warning colours",
      "threat display"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Musical talent seems to _____, because my grandfather, my mother and my brother all play the piano.",
    "options": [
      "pass on",
      "ruffle someone's feathers",
      "run in the family",
      "take after"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Tom and his friends all love insects and spend weekends looking for beetles, so _____.",
    "options": [
      "like father, like son",
      "birds of a feather flock together",
      "the apple doesn't fall far from the tree",
      "a leopard can't change its spots"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "My dad laughs exactly the way my brother does, and my grandmother always smiles and says, \"_____.\"",
    "options": [
      "the apple doesn't fall far from the tree",
      "you can't teach an old dog new tricks",
      "birds of a feather flock together",
      "like father, like son"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Her mother was a famous scientist, and now she is studying genes too, so _____.",
    "options": [
      "birds of a feather flock together",
      "like father, like son",
      "the apple doesn't fall far from the tree",
      "the early bird catches the worm"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Kevin is as funny and talkative as his father, and everyone at the party said he was _____.",
    "options": [
      "a chip off the old block",
      "missing link",
      "body hair",
      "tree of life"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Running seems to be _____, because her parents were both Olympic athletes and she won her first race at six.",
    "options": [
      "fruit fly",
      "in one's genes",
      "pecking order",
      "the black sheep of the family"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Parents can _____ certain illnesses to their children, so doctors sometimes suggest a gene test before pregnancy.",
    "options": [
      "play dead",
      "run in the family",
      "give rise to",
      "pass on"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "I _____ my grandmother, because we both have green eyes and we both love gardening.",
    "options": [
      "take after",
      "pass on",
      "run in the family",
      "play dead"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "My mum always wakes me at six before exams, because she believes _____.",
    "options": [
      "like father, like son",
      "you can't teach an old dog new tricks",
      "the apple doesn't fall far from the tree",
      "the early bird catches the worm"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "He promised to stop being late, but he was late again the next day, so _____.",
    "options": [
      "monkey see, monkey do",
      "like father, like son",
      "a leopard can't change its spots",
      "birds of a feather flock together"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "If you _____ too often about being sick, your teacher may not believe you when you really feel ill.",
    "options": [
      "play dead",
      "cry wolf",
      "let the cat out of the bag",
      "take after"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "We planned a surprise party for Mum, but my little sister _____, so the surprise was ruined.",
    "options": [
      "cry wolf",
      "play dead",
      "run in the family",
      "let the cat out of the bag"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Everyone in my family became a doctor, but my uncle became a rock singer, so he calls himself _____.",
    "options": [
      "early humans",
      "the black sheep of the family",
      "arms race",
      "petri dish"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The dominant wolf usually takes _____ of the food, while the younger wolves wait for what is left.",
    "options": [
      "double helix",
      "natural selection",
      "the lion's share",
      "vampire bat"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "My grandfather refuses to use a smartphone and says _____, but I am still trying to teach him.",
    "options": [
      "you can't teach an old dog new tricks",
      "like father, like son",
      "birds of a feather flock together",
      "monkey see, monkey do"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "My little brother copies everything I do, so when I started eating vegetables, he did too—_____.",
    "options": [
      "the apple doesn't fall far from the tree",
      "monkey see, monkey do",
      "the early bird catches the worm",
      "you can't teach an old dog new tricks"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Life in the wild is a _____ world, and only the animals that find enough food survive the winter.",
    "options": [
      "dog-eat-dog",
      "well-documented",
      "restrictive",
      "biomedical"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "A small change in one gene can _____ a new feature, and over time that feature may spread through the species.",
    "options": [
      "pass on",
      "run in the family",
      "let the cat out of the bag",
      "give rise to"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "My classmate's rude joke about my drawing _____, but I tried to stay calm and smiled at him.",
    "options": [
      "give rise to",
      "play dead",
      "ruffle someone's feathers",
      "let the cat out of the bag"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "survival of the fittest": {
    "pos": "n.phr.",
    "en_def": "the idea that the best-suited living things survive",
    "cn_def": "適者生存"
  },
  "run in the family": {
    "pos": "v.phr.",
    "en_def": "to be common among members of one family",
    "cn_def": "家族遺傳"
  },
  "birds of a feather flock together": {
    "pos": "phr.",
    "en_def": "people who are alike spend time together",
    "cn_def": "物以類聚"
  },
  "like father, like son": {
    "pos": "phr.",
    "en_def": "a son is often similar to his father",
    "cn_def": "有其父必有其子"
  },
  "the apple doesn't fall far from the tree": {
    "pos": "phr.",
    "en_def": "children are often like their parents",
    "cn_def": "有其父母必有其子女"
  },
  "a chip off the old block": {
    "pos": "n.phr.",
    "en_def": "a person who is very similar to a parent",
    "cn_def": "酷似父母的孩子"
  },
  "in one's genes": {
    "pos": "adj.phr.",
    "en_def": "natural to someone because of their family",
    "cn_def": "天生的；與生俱來的"
  },
  "pass on": {
    "pos": "v.phr.",
    "en_def": "to give something to children or the next generation",
    "cn_def": "傳給；遺傳給"
  },
  "take after": {
    "pos": "v.phr.",
    "en_def": "to look or behave like an older family member",
    "cn_def": "長得像；性格像（長輩）"
  },
  "the early bird catches the worm": {
    "pos": "phr.",
    "en_def": "people who start early will succeed",
    "cn_def": "早起的鳥兒有蟲吃"
  },
  "a leopard can't change its spots": {
    "pos": "phr.",
    "en_def": "people cannot change their basic character",
    "cn_def": "本性難移"
  },
  "cry wolf": {
    "pos": "v.phr.",
    "en_def": "to give a false warning so people stop believing you",
    "cn_def": "謊報危險；放羊的孩子"
  },
  "let the cat out of the bag": {
    "pos": "v.phr.",
    "en_def": "to tell a secret by mistake",
    "cn_def": "洩露祕密"
  },
  "the black sheep of the family": {
    "pos": "n.phr.",
    "en_def": "a family member who is different or disapproved of",
    "cn_def": "家族中的害群之馬；異類"
  },
  "the lion's share": {
    "pos": "n.phr.",
    "en_def": "the largest part of something",
    "cn_def": "最大的一份"
  },
  "you can't teach an old dog new tricks": {
    "pos": "phr.",
    "en_def": "it is hard to change old habits",
    "cn_def": "老狗學不會新把戲；積習難改"
  },
  "monkey see, monkey do": {
    "pos": "phr.",
    "en_def": "people copy what others do without thinking",
    "cn_def": "有樣學樣"
  },
  "dog-eat-dog": {
    "pos": "adj.",
    "en_def": "very competitive, where people harm others to succeed",
    "cn_def": "殘酷競爭的；弱肉強食的"
  },
  "give rise to": {
    "pos": "v.phr.",
    "en_def": "to cause something to happen or exist",
    "cn_def": "引起；導致"
  },
  "ruffle someone's feathers": {
    "pos": "v.phr.",
    "en_def": "to annoy or upset someone",
    "cn_def": "惹惱某人"
  },
  "learned behaviour": {
    "pos": "n.phr.",
    "en_def": "an action an animal learns rather than is born with",
    "cn_def": "學習行為"
  },
  "warning colours": {
    "pos": "n.phr.",
    "en_def": "bright colours that tell enemies an animal is dangerous",
    "cn_def": "警戒色"
  },
  "threat display": {
    "pos": "n.phr.",
    "en_def": "actions an animal uses to scare an enemy",
    "cn_def": "威嚇展示"
  },
  "missing link": {
    "pos": "n.phr.",
    "en_def": "a fossil that connects two groups of living things",
    "cn_def": "缺失的環節"
  },
  "body hair": {
    "pos": "n.phr.",
    "en_def": "the hair that grows on the body",
    "cn_def": "體毛"
  },
  "tree of life": {
    "pos": "n.phr.",
    "en_def": "a diagram showing how all living things are related",
    "cn_def": "生命之樹"
  },
  "fruit fly": {
    "pos": "n.phr.",
    "en_def": "a tiny fly often used in genetics experiments",
    "cn_def": "果蠅"
  },
  "pecking order": {
    "pos": "n.phr.",
    "en_def": "the order of rank within a group",
    "cn_def": "啄序；等級次序"
  },
  "play dead": {
    "pos": "v.phr.",
    "en_def": "to lie still and pretend to be dead",
    "cn_def": "裝死"
  },
  "early humans": {
    "pos": "n.phr.",
    "en_def": "people who lived very long ago",
    "cn_def": "早期人類"
  },
  "arms race": {
    "pos": "n.phr.",
    "en_def": "a contest where each side keeps improving to beat the other",
    "cn_def": "軍備競賽"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "double helix": {
    "pos": "n.phr.",
    "en_def": "the twisted ladder shape of DNA",
    "cn_def": "雙螺旋"
  },
  "natural selection": {
    "pos": "n.phr.",
    "en_def": "process where living things best suited to their surroundings survive",
    "cn_def": "天擇"
  },
  "vampire bat": {
    "pos": "n.phr.",
    "en_def": "a bat that feeds on the blood of animals",
    "cn_def": "吸血蝙蝠"
  },
  "well-documented": {
    "pos": "adj.",
    "en_def": "recorded clearly in many reports",
    "cn_def": "有充分記錄的"
  },
  "restrictive": {
    "pos": "adj.",
    "en_def": "limiting what people can do",
    "cn_def": "限制性的"
  },
  "biomedical": {
    "pos": "adj.",
    "en_def": "relating to biology and medicine",
    "cn_def": "生物醫學的"
  }
};

const EXTRA_GLOSSES = {};
