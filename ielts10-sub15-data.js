// Topic 10 Subunit 15 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S15 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "concrete jungle",
    "pos": "n.phr.",
    "cn_def": "水泥叢林",
    "en_def": "a city with many big grey buildings and few green areas",
    "sentence": "After living in the {{BLANK}} for ten years, my uncle moved to a farm, because he missed trees and fresh air.",
    "cn": "在水泥叢林裡住了十年後，我叔叔搬到一座農場，因為他想念樹木和新鮮空氣。"
  },
  {
    "word": "on the doorstep",
    "pos": "phr.",
    "cn_def": "就在家門口；近在咫尺",
    "en_def": "very near to where you live",
    "sentence": "We have a great night market right {{BLANK}}, so we often go there for dinner after work.",
    "cn": "我們家門口就有一個很棒的夜市，所以我們下班後常去那裡吃晚餐。"
  },
  {
    "word": "within walking distance of",
    "pos": "phr.",
    "cn_def": "在步行可到的距離內",
    "en_def": "close enough to walk to",
    "sentence": "Our new flat is {{BLANK}} the MRT station, so I no longer need to ride my scooter to work.",
    "cn": "我們的新公寓離捷運站走路就到，所以我不再需要騎機車去上班。"
  },
  {
    "word": "hustle and bustle",
    "pos": "n.phr.",
    "cn_def": "熙來攘往；喧囂忙碌",
    "en_def": "the noise and busy activity of a crowded place",
    "sentence": "Some people love the {{BLANK}} of Taipei, but my grandparents prefer the quiet life in their village.",
    "cn": "有些人喜歡台北的熙來攘往，但我的祖父母比較喜歡他們村子裡的寧靜生活。"
  },
  {
    "word": "bricks and mortar",
    "pos": "n.phr.",
    "cn_def": "實體店面；實體建築",
    "en_def": "real buildings, especially shops, rather than online businesses",
    "sentence": "Many shops are closing their {{BLANK}} stores, because more customers now buy clothes online.",
    "cn": "許多商店正在關閉它們的實體店面，因為現在有更多顧客在網路上買衣服。"
  },
  {
    "word": "off the beaten track",
    "pos": "adj.phr.",
    "cn_def": "人跡罕至的；偏僻的",
    "en_def": "far away from places that many people visit",
    "sentence": "The little café is {{BLANK}}, but people who find it say it serves the best coffee in town.",
    "cn": "那家小咖啡店位置偏僻，但找到它的人都說那裡的咖啡是鎮上最好喝的。"
  },
  {
    "word": "in the heart of",
    "pos": "phr.",
    "cn_def": "在……的中心",
    "en_def": "in the centre of a place",
    "sentence": "The hotel is {{BLANK}} the old town, so guests can walk to the temples and markets in minutes.",
    "cn": "這家飯店位於舊城區的中心，所以客人幾分鐘內就能走到廟宇和市場。"
  },
  {
    "word": "built-up area",
    "pos": "n.phr.",
    "cn_def": "建成區；房屋密集區",
    "en_def": "a place with many buildings and few open spaces",
    "sentence": "Drivers must slow down in a {{BLANK}}, because children and old people may suddenly cross the road.",
    "cn": "駕駛人在房屋密集區必須減速，因為小孩和老人可能會突然穿越馬路。"
  },
  {
    "word": "tear down",
    "pos": "v.phr.",
    "cn_def": "拆除；拆毀",
    "en_def": "to destroy a building completely (tear / tore / torn)",
    "sentence": "The company wanted to {{BLANK}} the old theatre, but local people protested, so it was saved and repaired.",
    "cn": "那家公司想拆除老劇院，但當地人提出抗議，所以它被保留並修復了。"
  },
  {
    "word": "make way for",
    "pos": "v.phr.",
    "cn_def": "讓路給；為……騰出空間",
    "en_def": "to be removed so that something new can replace it",
    "sentence": "The old houses were knocked down to {{BLANK}} a new park, and now children play where the buildings once stood.",
    "cn": "那些老房子被拆除以騰出空間給一座新公園，而現在孩子們在原本建築物所在的地方玩耍。"
  },
  {
    "word": "a breath of fresh air",
    "pos": "n.phr.",
    "cn_def": "令人耳目一新的人或事物",
    "en_def": "something new and different that is very welcome",
    "sentence": "The young architect's colourful design was {{BLANK}}, because most buildings in the town were plain and grey.",
    "cn": "那位年輕建築師色彩繽紛的設計令人耳目一新，因為這個城鎮大部分的建築都樸素又灰暗。"
  },
  {
    "word": "bumper-to-bumper",
    "pos": "adj.phr.",
    "cn_def": "車輛一輛接一輛的；大塞車的",
    "en_def": "with vehicles so close together that they can hardly move",
    "sentence": "The traffic was {{BLANK}} on the way to the beach, so we turned around and went to a park nearer home.",
    "cn": "往海邊的路上車子一輛接一輛大塞車，所以我們掉頭去了離家較近的公園。"
  },
  {
    "word": "green space",
    "pos": "n.phr.",
    "cn_def": "綠地；綠色空間",
    "en_def": "an area of grass, trees or plants in a town",
    "sentence": "Every child needs some {{BLANK}} to run and play in, so the city is turning car parks into small parks.",
    "cn": "每個孩子都需要一些可以奔跑玩耍的綠地，所以市政府正把停車場改建成小公園。"
  },
  {
    "word": "not in my back yard",
    "pos": "phr.",
    "cn_def": "別蓋在我家後院（鄰避心態）",
    "en_def": "said by people who support a project but not near their home (NIMBY)",
    "sentence": "Everyone agrees the city needs a new rubbish plant, but residents keep saying \"{{BLANK}}\" whenever a site is chosen.",
    "cn": "每個人都同意城市需要新的垃圾處理廠，但每當選定地點時，居民們總是說「別蓋在我家後院」。"
  },
  {
    "word": "get on the property ladder",
    "pos": "v.phr.",
    "cn_def": "買下第一間房子；踏入房市",
    "en_def": "to buy your first home (get / got / got)",
    "sentence": "Young couples find it hard to {{BLANK}}, because prices have risen much faster than salaries.",
    "cn": "年輕夫婦發現很難買下第一間房子，因為房價上漲的速度遠比薪水快。"
  },
  {
    "word": "rent out",
    "pos": "v.phr.",
    "cn_def": "出租",
    "en_def": "to let someone use your property in return for money",
    "sentence": "My aunt decided to {{BLANK}} her spare room to a university student, and the extra money helps pay her bills.",
    "cn": "我阿姨決定把她的空房間出租給一位大學生，而這筆額外的收入幫她支付帳單。"
  },
  {
    "word": "a far cry from",
    "pos": "n.phr.",
    "cn_def": "與……大不相同；相差甚遠",
    "en_def": "very different from",
    "sentence": "Today's busy harbour is {{BLANK}} the small fishing village it was a hundred years ago, but some old houses remain.",
    "cn": "今天繁忙的港口與一百年前那個小漁村大不相同，但仍有一些老房子保留了下來。"
  },
  {
    "word": "live off the grid",
    "pos": "v.phr.",
    "cn_def": "過著不依賴公共電網的生活",
    "en_def": "to live without public electricity or water supplies",
    "sentence": "The family decided to {{BLANK}} in the mountains, so they use solar panels and collect rainwater.",
    "cn": "這家人決定在山上過著不依賴公共電網的生活，所以他們使用太陽能板並收集雨水。"
  },
  {
    "word": "a sense of belonging",
    "pos": "n.phr.",
    "cn_def": "歸屬感",
    "en_def": "the feeling of being accepted as part of a group or place",
    "sentence": "Joining the community garden gave the new residents {{BLANK}}, and they quickly made friends with their neighbours.",
    "cn": "加入社區花園讓新住戶有了歸屬感，而且他們很快就和鄰居成為朋友。"
  },
  {
    "word": "stuck in traffic",
    "pos": "adj.phr.",
    "cn_def": "塞在車陣中",
    "en_def": "unable to move because the roads are full of vehicles",
    "sentence": "I was {{BLANK}} for an hour this morning, so I missed the first part of the meeting.",
    "cn": "我今天早上塞在車陣中一個小時，所以錯過了會議的第一部分。"
  }
];

const MCQS = [
  {
    "q": "After living in the _____ for ten years, my uncle moved to a farm, because he missed trees and fresh air.",
    "options": [
      "shanty town",
      "zebra crossing",
      "concrete jungle",
      "air quality"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "We have a great night market right _____, so we often go there for dinner after work.",
    "options": [
      "not in my back yard",
      "within walking distance of",
      "in the heart of",
      "on the doorstep"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Our new flat is _____ the MRT station, so I no longer need to ride my scooter to work.",
    "options": [
      "within walking distance of",
      "in the heart of",
      "on the doorstep",
      "not in my back yard"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Some people love the _____ of Taipei, but my grandparents prefer the quiet life in their village.",
    "options": [
      "street lighting",
      "hustle and bustle",
      "permeable surface",
      "cost of living"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Many shops are closing their _____ stores, because more customers now buy clothes online.",
    "options": [
      "natural light",
      "community garden",
      "bricks and mortar",
      "street vendor"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The little café is _____, but people who find it say it serves the best coffee in town.",
    "options": [
      "ring road",
      "off the beaten track",
      "urban farming",
      "floor plan"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The hotel is _____ the old town, so guests can walk to the temples and markets in minutes.",
    "options": [
      "in the heart of",
      "on the doorstep",
      "not in my back yard",
      "within walking distance of"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Drivers must slow down in a _____, because children and old people may suddenly cross the road.",
    "options": [
      "natural light",
      "inner city",
      "smart meter",
      "built-up area"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The company wanted to _____ the old theatre, but local people protested, so it was saved and repaired.",
    "options": [
      "get on the property ladder",
      "live off the grid",
      "tear down",
      "make way for"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The old houses were knocked down to _____ a new park, and now children play where the buildings once stood.",
    "options": [
      "rent out",
      "make way for",
      "get on the property ladder",
      "live off the grid"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The young architect's colourful design was _____, because most buildings in the town were plain and grey.",
    "options": [
      "a breath of fresh air",
      "smart meter",
      "street trees",
      "rain garden"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The traffic was _____ on the way to the beach, so we turned around and went to a park nearer home.",
    "options": [
      "glaring",
      "untapped",
      "run-down",
      "bumper-to-bumper"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Every child needs some _____ to run and play in, so the city is turning car parks into small parks.",
    "options": [
      "high street",
      "green space",
      "embodied carbon",
      "floor plan"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Everyone agrees the city needs a new rubbish plant, but residents keep saying \"_____\" whenever a site is chosen.",
    "options": [
      "not in my back yard",
      "in the heart of",
      "on the doorstep",
      "within walking distance of"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Young couples find it hard to _____, because prices have risen much faster than salaries.",
    "options": [
      "live off the grid",
      "rent out",
      "get on the property ladder",
      "tear down"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "My aunt decided to _____ her spare room to a university student, and the extra money helps pay her bills.",
    "options": [
      "get on the property ladder",
      "make way for",
      "tear down",
      "rent out"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Today's busy harbour is _____ the small fishing village it was a hundred years ago, but some old houses remain.",
    "options": [
      "studio flat",
      "a far cry from",
      "reinforced concrete",
      "ring road"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The family decided to _____ in the mountains, so they use solar panels and collect rainwater.",
    "options": [
      "rent out",
      "make way for",
      "live off the grid",
      "get on the property ladder"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Joining the community garden gave the new residents _____, and they quickly made friends with their neighbours.",
    "options": [
      "a sense of belonging",
      "street art",
      "bike lane",
      "vertical garden"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "I was _____ for an hour this morning, so I missed the first part of the meeting.",
    "options": [
      "pocket park",
      "passive house",
      "curtain wall",
      "stuck in traffic"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city with many big grey buildings and few green areas",
    "cn_def": "水泥叢林"
  },
  "on the doorstep": {
    "pos": "phr.",
    "en_def": "very near to where you live",
    "cn_def": "就在家門口；近在咫尺"
  },
  "within walking distance of": {
    "pos": "phr.",
    "en_def": "close enough to walk to",
    "cn_def": "在步行可到的距離內"
  },
  "hustle and bustle": {
    "pos": "n.phr.",
    "en_def": "the noise and busy activity of a crowded place",
    "cn_def": "熙來攘往；喧囂忙碌"
  },
  "bricks and mortar": {
    "pos": "n.phr.",
    "en_def": "real buildings, especially shops, rather than online businesses",
    "cn_def": "實體店面；實體建築"
  },
  "off the beaten track": {
    "pos": "adj.phr.",
    "en_def": "far away from places that many people visit",
    "cn_def": "人跡罕至的；偏僻的"
  },
  "in the heart of": {
    "pos": "phr.",
    "en_def": "in the centre of a place",
    "cn_def": "在……的中心"
  },
  "built-up area": {
    "pos": "n.phr.",
    "en_def": "a place with many buildings and few open spaces",
    "cn_def": "建成區；房屋密集區"
  },
  "tear down": {
    "pos": "v.phr.",
    "en_def": "to destroy a building completely (tear / tore / torn)",
    "cn_def": "拆除；拆毀"
  },
  "make way for": {
    "pos": "v.phr.",
    "en_def": "to be removed so that something new can replace it",
    "cn_def": "讓路給；為……騰出空間"
  },
  "a breath of fresh air": {
    "pos": "n.phr.",
    "en_def": "something new and different that is very welcome",
    "cn_def": "令人耳目一新的人或事物"
  },
  "bumper-to-bumper": {
    "pos": "adj.phr.",
    "en_def": "with vehicles so close together that they can hardly move",
    "cn_def": "車輛一輛接一輛的；大塞車的"
  },
  "green space": {
    "pos": "n.phr.",
    "en_def": "an area of grass, trees or plants in a town",
    "cn_def": "綠地；綠色空間"
  },
  "not in my back yard": {
    "pos": "phr.",
    "en_def": "said by people who support a project but not near their home (NIMBY)",
    "cn_def": "別蓋在我家後院（鄰避心態）"
  },
  "get on the property ladder": {
    "pos": "v.phr.",
    "en_def": "to buy your first home (get / got / got)",
    "cn_def": "買下第一間房子；踏入房市"
  },
  "rent out": {
    "pos": "v.phr.",
    "en_def": "to let someone use your property in return for money",
    "cn_def": "出租"
  },
  "a far cry from": {
    "pos": "n.phr.",
    "en_def": "very different from",
    "cn_def": "與……大不相同；相差甚遠"
  },
  "live off the grid": {
    "pos": "v.phr.",
    "en_def": "to live without public electricity or water supplies",
    "cn_def": "過著不依賴公共電網的生活"
  },
  "a sense of belonging": {
    "pos": "n.phr.",
    "en_def": "the feeling of being accepted as part of a group or place",
    "cn_def": "歸屬感"
  },
  "stuck in traffic": {
    "pos": "adj.phr.",
    "en_def": "unable to move because the roads are full of vehicles",
    "cn_def": "塞在車陣中"
  },
  "shanty town": {
    "pos": "n.phr.",
    "en_def": "an area of very poor homes made from cheap materials",
    "cn_def": "貧民窟；棚戶區"
  },
  "zebra crossing": {
    "pos": "n.phr.",
    "en_def": "black and white stripes on a road where people can cross",
    "cn_def": "斑馬線"
  },
  "air quality": {
    "pos": "n.phr.",
    "en_def": "how clean or polluted the air is",
    "cn_def": "空氣品質"
  },
  "street lighting": {
    "pos": "n.phr.",
    "en_def": "the lamps that light up roads at night",
    "cn_def": "路燈照明"
  },
  "permeable surface": {
    "pos": "n.phr.",
    "en_def": "ground covering that lets water soak through it",
    "cn_def": "透水鋪面"
  },
  "cost of living": {
    "pos": "n.phr.",
    "en_def": "the money needed to pay for basic things like food and housing",
    "cn_def": "生活費用；生活成本"
  },
  "natural light": {
    "pos": "n.phr.",
    "en_def": "light from the sun rather than from lamps",
    "cn_def": "自然光"
  },
  "community garden": {
    "pos": "n.phr.",
    "en_def": "a shared piece of land where local people grow plants together",
    "cn_def": "社區花園"
  },
  "street vendor": {
    "pos": "n.phr.",
    "en_def": "a person who sells food or goods from a stall in the street",
    "cn_def": "街頭攤販"
  },
  "ring road": {
    "pos": "n.phr.",
    "en_def": "a road that goes around a city so traffic can avoid the centre",
    "cn_def": "環狀道路；外環道"
  },
  "urban farming": {
    "pos": "n.phr.",
    "en_def": "growing food and raising animals in a city",
    "cn_def": "都市農業；都市農耕"
  },
  "floor plan": {
    "pos": "n.phr.",
    "en_def": "a drawing that shows the rooms of a building from above",
    "cn_def": "平面圖；格局圖"
  },
  "inner city": {
    "pos": "n.phr.",
    "en_def": "the older, central part of a city, often with social problems",
    "cn_def": "舊市區；內城區"
  },
  "smart meter": {
    "pos": "n.phr.",
    "en_def": "a device that shows how much energy you are using in real time",
    "cn_def": "智慧電表"
  },
  "street trees": {
    "pos": "n.phr.",
    "en_def": "trees planted along the sides of roads",
    "cn_def": "行道樹"
  },
  "rain garden": {
    "pos": "n.phr.",
    "en_def": "a low garden that collects rainwater from roofs and roads",
    "cn_def": "雨水花園"
  },
  "glaring": {
    "pos": "adj.",
    "en_def": "very obvious, usually about a mistake",
    "cn_def": "明顯的；刺眼的"
  },
  "untapped": {
    "pos": "adj.",
    "en_def": "not yet used, although it could be useful",
    "cn_def": "未開發的；未利用的"
  },
  "run-down": {
    "pos": "adj.",
    "en_def": "in bad condition because nobody has looked after it",
    "cn_def": "破敗的；年久失修的"
  },
  "high street": {
    "pos": "n.phr.",
    "en_def": "the main shopping street in a town",
    "cn_def": "主要商店街；大街"
  },
  "embodied carbon": {
    "pos": "n.phr.",
    "en_def": "the carbon released when making and transporting building materials",
    "cn_def": "隱含碳（建材的碳排放）"
  },
  "studio flat": {
    "pos": "n.phr.",
    "en_def": "a small flat with one main room for living and sleeping",
    "cn_def": "套房；單間公寓"
  },
  "reinforced concrete": {
    "pos": "n.phr.",
    "en_def": "concrete made stronger with steel bars inside it",
    "cn_def": "鋼筋混凝土"
  },
  "street art": {
    "pos": "n.phr.",
    "en_def": "paintings and pictures made on walls in public places",
    "cn_def": "街頭藝術"
  },
  "bike lane": {
    "pos": "n.phr.",
    "en_def": "a part of a road only for bicycles",
    "cn_def": "自行車道"
  },
  "vertical garden": {
    "pos": "n.phr.",
    "en_def": "plants grown up a wall or on shelves rather than on the ground",
    "cn_def": "垂直花園"
  },
  "pocket park": {
    "pos": "n.phr.",
    "en_def": "a very small public park in a gap between buildings",
    "cn_def": "口袋公園"
  },
  "passive house": {
    "pos": "n.phr.",
    "en_def": "a very well-sealed home that needs almost no heating or cooling",
    "cn_def": "被動式節能屋"
  },
  "curtain wall": {
    "pos": "n.phr.",
    "en_def": "an outer wall of glass that does not hold up the building",
    "cn_def": "帷幕牆"
  }
};

const EXTRA_GLOSSES = {};
