// Topic 9 Subunit 7 Quiz Data: Communication & Everyday Inventions 通訊與日常發明
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S07 - Communication & Everyday Inventions 通訊與日常發明",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "telegraph",
    "pos": "n.",
    "cn_def": "電報",
    "en_def": "an old system for sending messages along wires using signals",
    "sentence": "News of the battle came by {{BLANK}}, so people in London knew about it on the same day.",
    "cn": "戰役的消息透過電報傳來,所以倫敦的人們在同一天就知道了。"
  },
  {
    "word": "Morse code",
    "pos": "n.",
    "cn_def": "摩斯密碼",
    "en_def": "a code of short and long signals for letters",
    "sentence": "The soldiers sent short messages in {{BLANK}}, and only trained operators could understand them quickly.",
    "cn": "士兵們用摩斯密碼傳送簡短訊息,而只有受過訓練的操作員能迅速看懂。"
  },
  {
    "word": "telephone",
    "pos": "n.",
    "cn_def": "電話",
    "en_def": "a device for talking to someone far away",
    "sentence": "My grandparents had only one {{BLANK}} in the hall, and the whole family shared it.",
    "cn": "我祖父母家只有一支電話放在走廊,而全家人共用它。"
  },
  {
    "word": "phonograph",
    "pos": "n.",
    "cn_def": "留聲機(早期)",
    "en_def": "an early machine for recording and playing sound",
    "sentence": "Edison recorded his own voice on the {{BLANK}}, and people could hardly believe a machine could talk.",
    "cn": "愛迪生用留聲機錄下自己的聲音,而人們幾乎不敢相信機器會說話。"
  },
  {
    "word": "gramophone",
    "pos": "n.",
    "cn_def": "唱機;留聲機",
    "en_def": "an old machine that plays music from flat discs",
    "sentence": "My grandfather still plays old records on his {{BLANK}}, and the music sounds warm and a little scratchy.",
    "cn": "我祖父仍用他的唱機播放老唱片,而音樂聽起來溫暖又帶點沙沙聲。"
  },
  {
    "word": "camera",
    "pos": "n.",
    "cn_def": "相機",
    "en_def": "a device for taking photographs",
    "sentence": "I left my {{BLANK}} at home on our trip, but luckily my phone took clear pictures.",
    "cn": "旅行時我把相機留在家裡了,但幸好我的手機拍得很清楚。"
  },
  {
    "word": "photograph",
    "pos": "n.",
    "cn_def": "照片",
    "en_def": "a picture made with a camera",
    "sentence": "We found an old {{BLANK}} of our town from 1900, and the main street looked completely different.",
    "cn": "我們找到一張1900年我們小鎮的老照片,而主要街道看起來完全不一樣。"
  },
  {
    "word": "light bulb",
    "pos": "n.",
    "cn_def": "燈泡",
    "en_def": "a glass object that gives light when electricity passes through",
    "sentence": "The {{BLANK}} in my room burned out, so I did my homework in the kitchen last night.",
    "cn": "我房間的燈泡燒壞了,所以我昨晚在廚房寫功課。"
  },
  {
    "word": "filament",
    "pos": "n.",
    "cn_def": "燈絲",
    "en_def": "a very thin wire inside a light bulb that glows",
    "sentence": "Edison tested thousands of materials for the {{BLANK}}, and he finally found one that glowed for hours.",
    "cn": "愛迪生為燈絲測試了上千種材料,而他終於找到一種能發光好幾個小時的。"
  },
  {
    "word": "printing press",
    "pos": "n.",
    "cn_def": "印刷機",
    "en_def": "a machine for printing books and newspapers",
    "sentence": "The {{BLANK}} made books cheaper, so more people learned to read and share ideas.",
    "cn": "印刷機讓書變得更便宜,所以更多人學會閱讀和分享想法。"
  },
  {
    "word": "typewriter",
    "pos": "n.",
    "cn_def": "打字機",
    "en_def": "a machine with keys for printing letters onto paper",
    "sentence": "My mother learned to type on a {{BLANK}}, so she still presses the keys very hard on her laptop.",
    "cn": "我媽媽是用打字機學打字的,所以她在筆電上還是很用力地按鍵。"
  },
  {
    "word": "radio",
    "pos": "n.",
    "cn_def": "收音機;廣播",
    "en_def": "a device that receives sound broadcasts",
    "sentence": "We listen to the {{BLANK}} in the car every morning, and my dad always checks the traffic news.",
    "cn": "我們每天早上在車上聽廣播,而我爸總是會注意交通新聞。"
  },
  {
    "word": "transmitter",
    "pos": "n.",
    "cn_def": "發射器;發報機",
    "en_def": "equipment that sends out radio or TV signals",
    "sentence": "The station built a tall {{BLANK}} on the mountain, so people far away could hear the programmes.",
    "cn": "電台在山上蓋了一座高高的發射器,讓遠方的人也能收聽節目。"
  },
  {
    "word": "receiver",
    "pos": "n.",
    "cn_def": "聽筒;接收器",
    "en_def": "the part of a telephone you hold to your ear",
    "sentence": "She picked up the {{BLANK}} and heard a strange voice, but the caller hung up before she could answer.",
    "cn": "她拿起聽筒聽到一個陌生的聲音,但對方在她回答前就掛斷了。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "訊號;信號",
    "en_def": "a sound, light or wave that carries information",
    "sentence": "The guard waved a green flag as a {{BLANK}}, and the train slowly pulled out of the station.",
    "cn": "列車長揮動綠旗作為信號,而火車慢慢駛出車站。"
  },
  {
    "word": "refrigerator",
    "pos": "n.",
    "cn_def": "冰箱",
    "en_def": "a machine that keeps food cold",
    "sentence": "Before the {{BLANK}} was invented, people kept food in cool cellars, but it still went bad quickly.",
    "cn": "在冰箱發明之前,人們把食物放在陰涼的地窖裡,但它還是很快就壞了。"
  },
  {
    "word": "canned food",
    "pos": "n.",
    "cn_def": "罐頭食品",
    "en_def": "food kept in sealed metal containers",
    "sentence": "Sailors took {{BLANK}} on long voyages, because it stayed safe to eat for months.",
    "cn": "水手們長途航行時會帶罐頭食品,因為它可以安全食用好幾個月。"
  },
  {
    "word": "tin can",
    "pos": "n.",
    "cn_def": "鐵罐;罐頭",
    "en_def": "a metal container for keeping food",
    "sentence": "We made a simple phone from two {{BLANK}} and a string, and it actually worked across the garden.",
    "cn": "我們用兩個鐵罐和一條繩子做了一支簡單的電話,而它真的能隔著花園通話。"
  },
  {
    "word": "tennis racket",
    "pos": "n.",
    "cn_def": "網球拍",
    "en_def": "a bat with strings used to hit a tennis ball",
    "sentence": "My new {{BLANK}} is much lighter than my old wooden one, so I can swing it faster.",
    "cn": "我的新網球拍比舊的木頭球拍輕多了,所以我可以揮得更快。"
  },
  {
    "word": "graphite",
    "pos": "n.",
    "cn_def": "石墨",
    "en_def": "a soft black form of carbon used in pencils and sports equipment",
    "sentence": "Pencils contain {{BLANK}}, not lead, and it is also used to make strong but light rackets.",
    "cn": "鉛筆含有的是石墨而不是鉛,而它也被用來做堅固又輕巧的球拍。"
  },
  {
    "word": "carbon fibre",
    "pos": "n.",
    "cn_def": "碳纖維",
    "en_def": "a very strong light material made from thin threads of carbon",
    "sentence": "Racing bikes are made of {{BLANK}}, so they are light but still very strong.",
    "cn": "競賽用腳踏車是用碳纖維做的,所以它們很輕卻依然非常堅固。"
  },
  {
    "word": "elevator",
    "pos": "n.",
    "cn_def": "電梯",
    "en_def": "a machine that carries people up and down in a building",
    "sentence": "The {{BLANK}} made tall buildings possible, because nobody wanted to climb twenty floors every day.",
    "cn": "電梯讓高樓成為可能,因為沒有人想每天爬二十層樓。"
  },
  {
    "word": "escalator",
    "pos": "n.",
    "cn_def": "手扶梯",
    "en_def": "moving stairs",
    "sentence": "The {{BLANK}} at the station was broken, so we carried our heavy suitcases up the stairs.",
    "cn": "車站的手扶梯壞了,所以我們把沉重的行李箱扛上樓梯。"
  },
  {
    "word": "stethoscope",
    "pos": "n.",
    "cn_def": "聽診器",
    "en_def": "a tool doctors use to listen to your heart and breathing",
    "sentence": "The doctor put the cold {{BLANK}} on my chest, and she asked me to breathe in deeply.",
    "cn": "醫生把冰涼的聽診器放在我胸口,而她要我深呼吸。"
  },
  {
    "word": "vaccine",
    "pos": "n.",
    "cn_def": "疫苗",
    "en_def": "a substance that protects people from a disease",
    "sentence": "Edward Jenner made the first {{BLANK}} in 1796, and it protected millions of people from deadly smallpox.",
    "cn": "愛德華·詹納在1796年製成了第一支疫苗,而它保護了數百萬人免於致命的天花。"
  },
  {
    "word": "anaesthetic",
    "pos": "n.",
    "cn_def": "麻醉劑",
    "en_def": "a drug that stops you feeling pain during an operation",
    "sentence": "Before {{BLANK}} was used, operations were terribly painful, so surgeons had to work very fast.",
    "cn": "在使用麻醉劑之前,手術極度痛苦,所以外科醫生必須動作非常快。"
  },
  {
    "word": "penicillin",
    "pos": "n.",
    "cn_def": "盤尼西林;青黴素",
    "en_def": "a medicine that kills bacteria",
    "sentence": "Alexander Fleming discovered {{BLANK}} by accident, and it has saved millions of lives since then.",
    "cn": "亞歷山大·弗萊明意外發現了盤尼西林,而它從那時起已拯救了數百萬條生命。"
  },
  {
    "word": "plumbing",
    "pos": "n.",
    "cn_def": "水管系統",
    "en_def": "the pipes that carry water in a building",
    "sentence": "Modern {{BLANK}} brought clean water into homes, so people no longer had to carry buckets from the well.",
    "cn": "現代的水管系統把乾淨的水引進家中,所以人們不再需要從井裡提水。"
  }
];

const MCQS = [
  {
    "q": "News of the battle came by _____, so people in London knew about it on the same day.",
    "options": [
      "canal",
      "workhouse",
      "merchandise",
      "telegraph"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The soldiers sent short messages in _____, and only trained operators could understand them quickly.",
    "options": [
      "safety lamp",
      "chimney sweep",
      "Morse code",
      "iron ore"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "My grandparents had only one _____ in the hall, and the whole family shared it.",
    "options": [
      "telephone",
      "trial",
      "steamship",
      "injury"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Edison recorded his own voice on the _____, and people could hardly believe a machine could talk.",
    "options": [
      "ore",
      "phonograph",
      "capitalist",
      "brake"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "My grandfather still plays old records on his _____, and the music sounds warm and a little scratchy.",
    "options": [
      "flywheel",
      "engineering",
      "summary",
      "gramophone"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "I left my _____ at home on our trip, but luckily my phone took clear pictures.",
    "options": [
      "wagon",
      "camera",
      "automobile",
      "overheads"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "We found an old _____ of our town from 1900, and the main street looked completely different.",
    "options": [
      "photograph",
      "canal",
      "injustice",
      "steelworks"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The _____ in my room burned out, so I did my homework in the kitchen last night.",
    "options": [
      "side effect",
      "cotton gin",
      "light bulb",
      "spinning jenny"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Edison tested thousands of materials for the _____, and he finally found one that glowed for hours.",
    "options": [
      "cloth",
      "congestion",
      "counterargument",
      "filament"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ made books cheaper, so more people learned to read and share ideas.",
    "options": [
      "printing press",
      "coal seam",
      "the daily grind",
      "spinning jenny"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "My mother learned to type on a _____, so she still presses the keys very hard on her laptop.",
    "options": [
      "rebellion",
      "injury",
      "typewriter",
      "sketch"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We listen to the _____ in the car every morning, and my dad always checks the traffic news.",
    "options": [
      "watershed",
      "radio",
      "vapour",
      "stride"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The station built a tall _____ on the mountain, so people far away could hear the programmes.",
    "options": [
      "transmitter",
      "station",
      "colony",
      "injustice"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "She picked up the _____ and heard a strange voice, but the caller hung up before she could answer.",
    "options": [
      "role",
      "inflation",
      "backer",
      "receiver"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The guard waved a green flag as a _____, and the train slowly pulled out of the station.",
    "options": [
      "royalty",
      "tragedy",
      "signal",
      "velocity"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Before the _____ was invented, people kept food in cool cellars, but it still went bad quickly.",
    "options": [
      "lock",
      "refrigerator",
      "prosperity",
      "merchandise"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Sailors took _____ on long voyages, because it stayed safe to eat for months.",
    "options": [
      "canned food",
      "population growth",
      "power loom",
      "motor car"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "We made a simple phone from two _____ and a string, and it actually worked across the garden.",
    "options": [
      "cast iron",
      "tin can",
      "the brainchild of",
      "child labour"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "My new _____ is much lighter than my old wooden one, so I can swing it faster.",
    "options": [
      "mine shaft",
      "water wheel",
      "tennis racket",
      "standard of living"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Pencils contain _____, not lead, and it is also used to make strong but light rackets.",
    "options": [
      "conductor",
      "fame",
      "hygiene",
      "graphite"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Racing bikes are made of _____, so they are light but still very strong.",
    "options": [
      "trade union",
      "mine shaft",
      "carbon fibre",
      "child labour"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The _____ made tall buildings possible, because nobody wanted to climb twenty floors every day.",
    "options": [
      "conglomerate",
      "experiment",
      "statute",
      "elevator"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The _____ at the station was broken, so we carried our heavy suitcases up the stairs.",
    "options": [
      "recreation",
      "escalator",
      "railway",
      "imperialism"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The doctor put the cold _____ on my chest, and she asked me to breathe in deeply.",
    "options": [
      "stethoscope",
      "recession",
      "thread",
      "valve"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Edward Jenner made the first _____ in 1796, and it protected millions of people from deadly smallpox.",
    "options": [
      "mill",
      "reformer",
      "vaccine",
      "grievance"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Before _____ was used, operations were terribly painful, so surgeons had to work very fast.",
    "options": [
      "anaesthetic",
      "proof",
      "steel",
      "artisan"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Alexander Fleming discovered _____ by accident, and it has saved millions of lives since then.",
    "options": [
      "reputation",
      "sanitation",
      "riot",
      "penicillin"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Modern _____ brought clean water into homes, so people no longer had to carry buckets from the well.",
    "options": [
      "capitalist",
      "plumbing",
      "conglomerate",
      "metallurgy"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "telegraph": {
    "pos": "n.",
    "en_def": "an old system for sending messages along wires using signals",
    "cn_def": "電報"
  },
  "morse code": {
    "pos": "n.",
    "en_def": "a code of short and long signals for letters",
    "cn_def": "摩斯密碼"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "a device for talking to someone far away",
    "cn_def": "電話"
  },
  "phonograph": {
    "pos": "n.",
    "en_def": "an early machine for recording and playing sound",
    "cn_def": "留聲機(早期)"
  },
  "gramophone": {
    "pos": "n.",
    "en_def": "an old machine that plays music from flat discs",
    "cn_def": "唱機;留聲機"
  },
  "camera": {
    "pos": "n.",
    "en_def": "a device for taking photographs",
    "cn_def": "相機"
  },
  "photograph": {
    "pos": "n.",
    "en_def": "a picture made with a camera",
    "cn_def": "照片"
  },
  "light bulb": {
    "pos": "n.",
    "en_def": "a glass object that gives light when electricity passes through",
    "cn_def": "燈泡"
  },
  "filament": {
    "pos": "n.",
    "en_def": "a very thin wire inside a light bulb that glows",
    "cn_def": "燈絲"
  },
  "printing press": {
    "pos": "n.",
    "en_def": "a machine for printing books and newspapers",
    "cn_def": "印刷機"
  },
  "typewriter": {
    "pos": "n.",
    "en_def": "a machine with keys for printing letters onto paper",
    "cn_def": "打字機"
  },
  "radio": {
    "pos": "n.",
    "en_def": "a device that receives sound broadcasts",
    "cn_def": "收音機;廣播"
  },
  "transmitter": {
    "pos": "n.",
    "en_def": "equipment that sends out radio or TV signals",
    "cn_def": "發射器;發報機"
  },
  "receiver": {
    "pos": "n.",
    "en_def": "the part of a telephone you hold to your ear",
    "cn_def": "聽筒;接收器"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a sound, light or wave that carries information",
    "cn_def": "訊號;信號"
  },
  "refrigerator": {
    "pos": "n.",
    "en_def": "a machine that keeps food cold",
    "cn_def": "冰箱"
  },
  "canned food": {
    "pos": "n.",
    "en_def": "food kept in sealed metal containers",
    "cn_def": "罐頭食品"
  },
  "tin can": {
    "pos": "n.",
    "en_def": "a metal container for keeping food",
    "cn_def": "鐵罐;罐頭"
  },
  "tennis racket": {
    "pos": "n.",
    "en_def": "a bat with strings used to hit a tennis ball",
    "cn_def": "網球拍"
  },
  "graphite": {
    "pos": "n.",
    "en_def": "a soft black form of carbon used in pencils and sports equipment",
    "cn_def": "石墨"
  },
  "carbon fibre": {
    "pos": "n.",
    "en_def": "a very strong light material made from thin threads of carbon",
    "cn_def": "碳纖維"
  },
  "elevator": {
    "pos": "n.",
    "en_def": "a machine that carries people up and down in a building",
    "cn_def": "電梯"
  },
  "escalator": {
    "pos": "n.",
    "en_def": "moving stairs",
    "cn_def": "手扶梯"
  },
  "stethoscope": {
    "pos": "n.",
    "en_def": "a tool doctors use to listen to your heart and breathing",
    "cn_def": "聽診器"
  },
  "vaccine": {
    "pos": "n.",
    "en_def": "a substance that protects people from a disease",
    "cn_def": "疫苗"
  },
  "anaesthetic": {
    "pos": "n.",
    "en_def": "a drug that stops you feeling pain during an operation",
    "cn_def": "麻醉劑"
  },
  "penicillin": {
    "pos": "n.",
    "en_def": "a medicine that kills bacteria",
    "cn_def": "盤尼西林;青黴素"
  },
  "plumbing": {
    "pos": "n.",
    "en_def": "the pipes that carry water in a building",
    "cn_def": "水管系統"
  },
  "canal": {
    "pos": "n.",
    "en_def": "a man-made river for boats",
    "cn_def": "運河"
  },
  "workhouse": {
    "pos": "n.",
    "en_def": "a place where very poor people lived and worked in the past",
    "cn_def": "濟貧院;救濟院"
  },
  "merchandise": {
    "pos": "n.",
    "en_def": "goods that are bought and sold",
    "cn_def": "商品;貨品"
  },
  "safety lamp": {
    "pos": "n.",
    "en_def": "a special lamp that will not light gas in a mine",
    "cn_def": "安全燈"
  },
  "chimney sweep": {
    "pos": "n.",
    "en_def": "a person who cleans chimneys",
    "cn_def": "掃煙囪工人"
  },
  "iron ore": {
    "pos": "n.",
    "en_def": "rock that contains iron",
    "cn_def": "鐵礦石"
  },
  "trial": {
    "pos": "n.",
    "en_def": "a test to see if something works well",
    "cn_def": "試驗;試用"
  },
  "steamship": {
    "pos": "n.",
    "en_def": "a large ship driven by steam power",
    "cn_def": "蒸汽船;輪船"
  },
  "injury": {
    "pos": "n.",
    "en_def": "physical harm to the body",
    "cn_def": "傷害;受傷"
  },
  "ore": {
    "pos": "n.",
    "en_def": "rock from which metal can be taken",
    "cn_def": "礦石"
  },
  "capitalist": {
    "pos": "n.",
    "en_def": "a person who uses money to own businesses and make profit",
    "cn_def": "資本家"
  },
  "brake": {
    "pos": "n.",
    "en_def": "a part that makes a vehicle slow down or stop",
    "cn_def": "煞車"
  },
  "flywheel": {
    "pos": "n.",
    "en_def": "a heavy wheel that keeps a machine turning smoothly",
    "cn_def": "飛輪"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "summary": {
    "pos": "n.",
    "en_def": "a short statement of the main points",
    "cn_def": "摘要;總結"
  },
  "wagon": {
    "pos": "n.",
    "en_def": "a part of a train for carrying goods",
    "cn_def": "貨車車廂"
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a car",
    "cn_def": "汽車"
  },
  "overheads": {
    "pos": "n.",
    "en_def": "regular business costs such as rent and electricity",
    "cn_def": "經常性開支;營運費用"
  },
  "injustice": {
    "pos": "n.",
    "en_def": "a situation that is unfair",
    "cn_def": "不公義;不公平"
  },
  "steelworks": {
    "pos": "n.",
    "en_def": "a factory where steel is made",
    "cn_def": "鋼鐵廠"
  },
  "side effect": {
    "pos": "n.",
    "en_def": "an extra and usually bad result of something",
    "cn_def": "副作用"
  },
  "cotton gin": {
    "pos": "n.",
    "en_def": "a machine that separates cotton fibres from seeds",
    "cn_def": "軋棉機"
  },
  "spinning jenny": {
    "pos": "n.",
    "en_def": "an early machine that spun many threads at once",
    "cn_def": "珍妮紡紗機"
  },
  "cloth": {
    "pos": "n.",
    "en_def": "material made by weaving cotton, wool or other fibres",
    "cn_def": "布;布料"
  },
  "congestion": {
    "pos": "n.",
    "en_def": "too much traffic in one place",
    "cn_def": "擁擠;壅塞"
  },
  "counterargument": {
    "pos": "n.",
    "en_def": "an argument against another argument",
    "cn_def": "反論;反駁論點"
  },
  "coal seam": {
    "pos": "n.",
    "en_def": "a layer of coal under the ground",
    "cn_def": "煤層"
  },
  "the daily grind": {
    "pos": "n.phr.",
    "en_def": "boring and tiring work that you do every day",
    "cn_def": "日復一日的苦差事"
  },
  "rebellion": {
    "pos": "n.",
    "en_def": "an organised fight against people in power",
    "cn_def": "叛亂;反抗"
  },
  "sketch": {
    "pos": "n.",
    "en_def": "a quick simple drawing",
    "cn_def": "草圖;素描"
  },
  "watershed": {
    "pos": "n.",
    "en_def": "an event that marks a very important change",
    "cn_def": "分水嶺;轉折點"
  },
  "vapour": {
    "pos": "n.",
    "en_def": "tiny drops of water or other liquid in the air",
    "cn_def": "蒸氣;水氣"
  },
  "stride": {
    "pos": "n.",
    "en_def": "an important step forward in progress",
    "cn_def": "進展;大步"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains stop for passengers",
    "cn_def": "車站"
  },
  "colony": {
    "pos": "n.",
    "en_def": "a country or area controlled by another country",
    "cn_def": "殖民地"
  },
  "role": {
    "pos": "n.",
    "en_def": "the job or purpose someone or something has",
    "cn_def": "角色;作用"
  },
  "inflation": {
    "pos": "n.",
    "en_def": "a general rise in prices",
    "cn_def": "通貨膨脹"
  },
  "backer": {
    "pos": "n.",
    "en_def": "someone who supports a project with money",
    "cn_def": "資助者;支持者"
  },
  "royalty": {
    "pos": "n.",
    "en_def": "money paid to an inventor or writer each time their work is used",
    "cn_def": "權利金;版稅"
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "a very sad event, often with death",
    "cn_def": "悲劇;慘劇"
  },
  "velocity": {
    "pos": "n.",
    "en_def": "the speed of something in a particular direction",
    "cn_def": "速度"
  },
  "lock": {
    "pos": "n.",
    "en_def": "a section of a canal with gates to raise or lower boats",
    "cn_def": "(運河)水閘;船閘"
  },
  "prosperity": {
    "pos": "n.",
    "en_def": "the state of being rich and successful",
    "cn_def": "繁榮;興旺"
  },
  "population growth": {
    "pos": "n.",
    "en_def": "an increase in the number of people",
    "cn_def": "人口成長"
  },
  "power loom": {
    "pos": "n.",
    "en_def": "a machine driven by power for weaving cloth",
    "cn_def": "動力織布機"
  },
  "motor car": {
    "pos": "n.",
    "en_def": "an old-fashioned word for a car",
    "cn_def": "汽車(舊稱)"
  },
  "cast iron": {
    "pos": "n.",
    "en_def": "hard iron that is shaped by pouring it into a mould",
    "cn_def": "鑄鐵"
  },
  "the brainchild of": {
    "pos": "n.phr.",
    "en_def": "an idea or invention created by a particular person",
    "cn_def": "……的心血結晶"
  },
  "child labour": {
    "pos": "n.",
    "en_def": "the use of children as workers",
    "cn_def": "童工"
  },
  "mine shaft": {
    "pos": "n.",
    "en_def": "a deep hole going down into a mine",
    "cn_def": "礦井"
  },
  "water wheel": {
    "pos": "n.",
    "en_def": "a large wheel turned by flowing water to power machines",
    "cn_def": "水車"
  },
  "standard of living": {
    "pos": "n.phr.",
    "en_def": "how comfortable and wealthy people's lives are",
    "cn_def": "生活水準"
  },
  "conductor": {
    "pos": "n.",
    "en_def": "a person who checks tickets on a train or bus",
    "cn_def": "車掌;列車長"
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名聲;名氣"
  },
  "hygiene": {
    "pos": "n.",
    "en_def": "keeping yourself and places clean to stay healthy",
    "cn_def": "衛生"
  },
  "trade union": {
    "pos": "n.",
    "en_def": "an organisation of workers that protects their rights",
    "cn_def": "工會"
  },
  "conglomerate": {
    "pos": "n.",
    "en_def": "a large company made of many different businesses",
    "cn_def": "企業集團"
  },
  "experiment": {
    "pos": "n.",
    "en_def": "a scientific test to find out something",
    "cn_def": "實驗"
  },
  "statute": {
    "pos": "n.",
    "en_def": "a written law made by a government",
    "cn_def": "法令;法規"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities done for fun when you are not working",
    "cn_def": "娛樂;消遣"
  },
  "railway": {
    "pos": "n.",
    "en_def": "a system of tracks and trains for moving people and goods",
    "cn_def": "鐵路"
  },
  "imperialism": {
    "pos": "n.",
    "en_def": "a system in which a powerful country controls others",
    "cn_def": "帝國主義"
  },
  "recession": {
    "pos": "n.",
    "en_def": "a period when the economy is doing badly",
    "cn_def": "經濟衰退"
  },
  "thread": {
    "pos": "n.",
    "en_def": "a long thin string of cotton or other material used for sewing",
    "cn_def": "線"
  },
  "valve": {
    "pos": "n.",
    "en_def": "a part that opens and closes to control gas or liquid",
    "cn_def": "閥門"
  },
  "mill": {
    "pos": "n.",
    "en_def": "a building with machines for making cloth or flour",
    "cn_def": "磨坊;紡織廠"
  },
  "reformer": {
    "pos": "n.",
    "en_def": "a person who works to improve society",
    "cn_def": "改革者"
  },
  "grievance": {
    "pos": "n.",
    "en_def": "a reason to complain about unfair treatment",
    "cn_def": "不滿;怨言"
  },
  "proof": {
    "pos": "n.",
    "en_def": "facts that show something is true",
    "cn_def": "證據;證明"
  },
  "steel": {
    "pos": "n.",
    "en_def": "a strong metal made from iron and carbon",
    "cn_def": "鋼"
  },
  "artisan": {
    "pos": "n.",
    "en_def": "a skilled person who makes things by hand",
    "cn_def": "工匠;手藝人"
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the opinion people have about someone or something",
    "cn_def": "聲譽;名聲"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "systems for clean water and removing waste",
    "cn_def": "衛生設施;公共衛生"
  },
  "riot": {
    "pos": "n.",
    "en_def": "a violent protest by a crowd of people",
    "cn_def": "暴動"
  },
  "metallurgy": {
    "pos": "n.",
    "en_def": "the science of metals and how to use them",
    "cn_def": "冶金學"
  }
};

const EXTRA_GLOSSES = {};
