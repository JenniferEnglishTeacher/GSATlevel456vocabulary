// Topic 10 Subunit 6 Quiz Data: Housing & City Life 住宅與城市生活
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S06 - Housing & City Life 住宅與城市生活",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "housing",
    "pos": "n.",
    "cn_def": "住房；住宅",
    "en_def": "buildings that people live in",
    "sentence": "{{BLANK}} in big cities has become so expensive that many young workers share flats with friends or live with their parents.",
    "cn": "大城市的住房變得如此昂貴，以至於許多年輕上班族和朋友合租公寓或與父母同住。"
  },
  {
    "word": "social housing",
    "pos": "n.phr.",
    "cn_def": "社會住宅",
    "en_def": "homes provided by the government at a low rent",
    "sentence": "The city is building more {{BLANK}} for young families, and the rent will be about thirty percent below market prices.",
    "cn": "市政府正在為年輕家庭興建更多社會住宅，而租金將比市價低約百分之三十。"
  },
  {
    "word": "housing estate",
    "pos": "n.phr.",
    "cn_def": "住宅區；社區",
    "en_def": "a large group of houses or flats built at the same time",
    "sentence": "They grew up on a big {{BLANK}} with a playground in the middle, so they always had friends to play with after school.",
    "cn": "他們在一個中央有遊樂場的大型住宅區長大，所以放學後總有朋友可以一起玩。"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "a set of rooms for living in on one floor of a building",
    "sentence": "Their {{BLANK}} is on the tenth floor, so they have a great view, but they have to wait for the lift every morning.",
    "cn": "他們的公寓在十樓，所以視野很棒，但他們每天早上都得等電梯。"
  },
  {
    "word": "studio flat",
    "pos": "n.phr.",
    "cn_def": "套房；單間公寓",
    "en_def": "a small flat with one main room for living and sleeping",
    "sentence": "After graduating, I rented a tiny {{BLANK}} near my office, and although it was small, I loved having my own place.",
    "cn": "畢業後，我在辦公室附近租了一間小小的套房，雖然它很小，但我很喜歡擁有自己的地方。"
  },
  {
    "word": "condominium",
    "pos": "n.",
    "cn_def": "（產權獨立的）公寓大廈",
    "en_def": "a building of flats that are owned by the people living in them",
    "sentence": "Their {{BLANK}} has a swimming pool and a gym, but the monthly management fee is quite high.",
    "cn": "他們的公寓大廈有游泳池和健身房，但每月的管理費相當高。"
  },
  {
    "word": "tenant",
    "pos": "n.",
    "cn_def": "房客；租戶",
    "en_def": "a person who pays rent to live in a place",
    "sentence": "The new {{BLANK}} promised to keep the flat clean, so the landlord agreed to let her keep a small cat.",
    "cn": "新房客承諾會保持公寓整潔，所以房東同意讓她養一隻小貓。"
  },
  {
    "word": "rent",
    "pos": "n.",
    "cn_def": "租金；房租",
    "en_def": "money paid regularly to live in a place you do not own",
    "sentence": "The {{BLANK}} in this area went up again this year, so many students are looking for rooms further from the university.",
    "cn": "這一區的房租今年又上漲了，所以許多學生正在離大學更遠的地方找房間。"
  },
  {
    "word": "lease",
    "pos": "n.",
    "cn_def": "租約",
    "en_def": "a legal agreement to rent a home or building for a period",
    "sentence": "We signed a two-year {{BLANK}} for the shop, but we had to leave early because the owner sold the building.",
    "cn": "我們簽了這間店面的兩年租約，但因為屋主賣掉了大樓，我們不得不提早搬走。"
  },
  {
    "word": "mortgage",
    "pos": "n.",
    "cn_def": "房屋貸款；房貸",
    "en_def": "a loan from a bank to buy a home",
    "sentence": "My parents took out a twenty-year {{BLANK}} to buy our house, and they will finally pay it all back next year.",
    "cn": "我爸媽申請了二十年的房貸來買我們的房子，而他們明年終於要全部還清了。"
  },
  {
    "word": "homeowner",
    "pos": "n.",
    "cn_def": "屋主；房屋所有權人",
    "en_def": "a person who owns the home they live in",
    "sentence": "Every {{BLANK}} in the building must agree before the old lift can be replaced, so the decision has taken two years.",
    "cn": "大樓裡的每一位屋主都必須同意後才能更換舊電梯，所以這個決定已經拖了兩年。"
  },
  {
    "word": "housing market",
    "pos": "n.phr.",
    "cn_def": "房地產市場；房市",
    "en_def": "the buying and selling of homes and their prices",
    "sentence": "The {{BLANK}} slowed down after interest rates rose, so some sellers had to lower their prices.",
    "cn": "利率上升後房市放緩了，所以有些賣家不得不降價。"
  },
  {
    "word": "resident",
    "pos": "n.",
    "cn_def": "居民；住戶",
    "en_def": "a person who lives in a particular place",
    "sentence": "Every {{BLANK}} received a letter about the new recycling rules, but many people did not read it carefully.",
    "cn": "每一位居民都收到了一封關於新回收規定的信，但許多人並沒有仔細閱讀。"
  },
  {
    "word": "residential",
    "pos": "adj.",
    "cn_def": "住宅的",
    "en_def": "used for homes rather than offices or factories",
    "sentence": "Trucks are not allowed in this {{BLANK}} area at night, because people complained that the noise kept them awake.",
    "cn": "卡車晚上不准進入這個住宅區，因為人們抱怨噪音讓他們睡不著。"
  },
  {
    "word": "neighbour",
    "pos": "n.",
    "cn_def": "鄰居",
    "en_def": "a person who lives next to or near you",
    "sentence": "Our {{BLANK}} looked after our dog while we were on holiday, so we brought her a box of pineapple cakes.",
    "cn": "我們去度假時鄰居幫忙照顧我們的狗，所以我們帶了一盒鳳梨酥送她。"
  },
  {
    "word": "convenience store",
    "pos": "n.phr.",
    "cn_def": "便利商店",
    "en_def": "a small shop that is open long hours and sells everyday items",
    "sentence": "There is a {{BLANK}} on almost every corner in Taipei, so you can buy snacks or pay bills at any time of day.",
    "cn": "台北幾乎每個街角都有便利商店，所以你在一天中任何時間都能買零食或繳帳單。"
  },
  {
    "word": "street vendor",
    "pos": "n.phr.",
    "cn_def": "街頭攤販",
    "en_def": "a person who sells food or goods from a stall in the street",
    "sentence": "The {{BLANK}} outside our school sells hot sweet potatoes in winter, and students line up for them after class.",
    "cn": "我們學校外面的街頭攤販冬天賣熱騰騰的烤地瓜，而學生們下課後排隊購買。"
  },
  {
    "word": "night market",
    "pos": "n.phr.",
    "cn_def": "夜市",
    "en_def": "an outdoor market that opens in the evening, selling food and goods",
    "sentence": "We walked around the {{BLANK}} for two hours, and we tried stinky tofu, bubble tea and grilled squid.",
    "cn": "我們在夜市逛了兩個小時，並且嘗了臭豆腐、珍珠奶茶和烤魷魚。"
  },
  {
    "word": "nightlife",
    "pos": "n.",
    "cn_def": "夜生活",
    "en_def": "entertainment such as bars and clubs that is open at night",
    "sentence": "The city is famous for its lively {{BLANK}}, so the streets are still busy at two o'clock in the morning.",
    "cn": "這座城市以熱鬧的夜生活聞名，所以凌晨兩點街上仍然熱鬧。"
  },
  {
    "word": "street lighting",
    "pos": "n.phr.",
    "cn_def": "路燈照明",
    "en_def": "the lamps that light up roads at night",
    "sentence": "Better {{BLANK}} has made the park safer at night, so more women now feel comfortable jogging there after work.",
    "cn": "更好的路燈照明讓公園晚上更安全了，所以現在有更多女性下班後放心在那裡慢跑。"
  },
  {
    "word": "street art",
    "pos": "n.phr.",
    "cn_def": "街頭藝術",
    "en_def": "paintings and pictures made on walls in public places",
    "sentence": "The old alley is now covered in colourful {{BLANK}}, and young people come from all over the city to take photos.",
    "cn": "這條老巷子現在佈滿了色彩繽紛的街頭藝術，而年輕人從城市各地前來拍照。"
  },
  {
    "word": "graffiti",
    "pos": "n.",
    "cn_def": "塗鴉",
    "en_def": "words or pictures painted on walls without permission",
    "sentence": "Someone sprayed {{BLANK}} on the new bus shelter last night, so the city sent workers to clean it this morning.",
    "cn": "昨晚有人在新的公車候車亭上噴了塗鴉，所以市政府今天早上派工人去清除。"
  },
  {
    "word": "vacant",
    "pos": "adj.",
    "cn_def": "空著的；閒置的",
    "en_def": "empty; not being used or lived in",
    "sentence": "There are many {{BLANK}} flats in the old town, so the government wants to rent them cheaply to young artists.",
    "cn": "舊城區有許多閒置的公寓，所以政府想把它們便宜地租給年輕藝術家。"
  },
  {
    "word": "cramped",
    "pos": "adj.",
    "cn_def": "狹窄的；擁擠的",
    "en_def": "too small for the people or things inside",
    "sentence": "Five people live in the {{BLANK}} flat, so the children have to do their homework at the kitchen table.",
    "cn": "五個人住在那間狹窄的公寓裡，所以孩子們只好在廚房餐桌上寫功課。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space",
    "sentence": "The new library is bright and {{BLANK}}, so students can always find a quiet corner even during exam week.",
    "cn": "新圖書館明亮又寬敞，所以學生們即使在考試週也總能找到安靜的角落。"
  },
  {
    "word": "evict",
    "pos": "v.",
    "cn_def": "驅逐；（依法）逐出",
    "en_def": "to force someone to leave their home by law",
    "sentence": "The landlord tried to {{BLANK}} the family because they were late with the rent, but a lawyer helped them stay.",
    "cn": "房東因為那家人遲繳房租而試圖驅逐他們，但一位律師幫助他們留了下來。"
  },
  {
    "word": "squatter",
    "pos": "n.",
    "cn_def": "違法佔住者",
    "en_def": "a person who lives in an empty building without permission",
    "sentence": "A {{BLANK}} had been living in the empty factory for months, and the police only found him when the building was sold.",
    "cn": "一名違法佔住者已經在那間空工廠住了好幾個月，而警方直到大樓被賣掉時才發現他。"
  },
  {
    "word": "shanty town",
    "pos": "n.phr.",
    "cn_def": "貧民窟；棚戶區",
    "en_def": "an area of very poor homes made from cheap materials",
    "sentence": "Many workers moved from the countryside to the {{BLANK}} on the edge of the city, because they could not afford proper homes.",
    "cn": "許多工人從鄉下搬到城市邊緣的棚戶區，因為他們負擔不起像樣的住處。"
  },
  {
    "word": "quality of life",
    "pos": "n.phr.",
    "cn_def": "生活品質",
    "en_def": "how good and comfortable a person's life is",
    "sentence": "Moving to a smaller town improved their {{BLANK}}, because they spent less time in traffic and more time with their kids.",
    "cn": "搬到較小的城鎮提升了他們的生活品質，因為他們花在塞車上的時間變少，陪孩子的時間變多。"
  },
  {
    "word": "liveable",
    "pos": "adj.",
    "cn_def": "宜居的；適合居住的",
    "en_def": "pleasant and suitable for living in",
    "sentence": "Vienna is often named the most {{BLANK}} city in the world, because it has clean air, good transport and plenty of parks.",
    "cn": "維也納常被評為世界上最宜居的城市，因為它有乾淨的空氣、良好的交通和眾多公園。"
  },
  {
    "word": "cost of living",
    "pos": "n.phr.",
    "cn_def": "生活費用；生活成本",
    "en_def": "the money needed to pay for basic things like food and housing",
    "sentence": "The {{BLANK}} in big cities keeps rising, so many young people are moving to smaller towns to save money.",
    "cn": "大城市的生活成本不斷上升，所以許多年輕人正搬到較小的城鎮以存錢。"
  },
  {
    "word": "developer",
    "pos": "n.",
    "cn_def": "建商；開發商",
    "en_def": "a company that buys land and builds houses or offices on it",
    "sentence": "The {{BLANK}} promised to build a park next to the new flats, but five years later the land is still empty.",
    "cn": "建商承諾會在新公寓旁邊蓋一座公園，但五年後那塊地仍然是空的。"
  },
  {
    "word": "noise complaint",
    "pos": "n.phr.",
    "cn_def": "噪音投訴",
    "en_def": "a report to the police or building managers about loud noise",
    "sentence": "Our neighbours made a {{BLANK}} about the party, so we turned the music down and apologised the next day.",
    "cn": "我們的鄰居對派對提出了噪音投訴，所以我們把音樂關小聲，並在隔天道歉。"
  }
];

const MCQS = [
  {
    "q": "_____ in big cities has become so expensive that many young workers share flats with friends or live with their parents.",
    "options": [
      "housing",
      "coalition",
      "greenbelt",
      "locality"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The city is building more _____ for young families, and the rent will be about thirty percent below market prices.",
    "options": [
      "hustle and bustle",
      "noise barrier",
      "social housing",
      "green building"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "They grew up on a big _____ with a playground in the middle, so they always had friends to play with after school.",
    "options": [
      "structural engineer",
      "housing estate",
      "speed bump",
      "cross-laminated timber"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Their _____ is on the tenth floor, so they have a great view, but they have to wait for the lift every morning.",
    "options": [
      "conurbation",
      "cement",
      "maze",
      "apartment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After graduating, I rented a tiny _____ near my office, and although it was small, I loved having my own place.",
    "options": [
      "land use",
      "studio flat",
      "biophilic design",
      "curtain wall"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Their _____ has a swimming pool and a gym, but the monthly management fee is quite high.",
    "options": [
      "panacea",
      "pretext",
      "debacle",
      "condominium"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The new _____ promised to keep the flat clean, so the landlord agreed to let her keep a small cat.",
    "options": [
      "tenant",
      "carpenter",
      "pavement",
      "ambience"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The _____ in this area went up again this year, so many students are looking for rooms further from the university.",
    "options": [
      "neighbourhood",
      "downtown",
      "rent",
      "car-sharing"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "We signed a two-year _____ for the shop, but we had to leave early because the owner sold the building.",
    "options": [
      "mainstay",
      "gravel",
      "plaster",
      "lease"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "My parents took out a twenty-year _____ to buy our house, and they will finally pay it all back next year.",
    "options": [
      "backlog",
      "mortgage",
      "staircase",
      "recourse"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Every _____ in the building must agree before the old lift can be replaced, so the decision has taken two years.",
    "options": [
      "homeowner",
      "district",
      "tapestry",
      "exterior"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The _____ slowed down after interest rates rose, so some sellers had to lower their prices.",
    "options": [
      "reclaimed wood",
      "heat pump",
      "housing market",
      "new town"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Every _____ received a letter about the new recycling rules, but many people did not read it carefully.",
    "options": [
      "resident",
      "greywater",
      "terrace",
      "contractor"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Trucks are not allowed in this _____ area at night, because people complained that the noise kept them awake.",
    "options": [
      "scant",
      "long-standing",
      "unparalleled",
      "residential"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Our _____ looked after our dog while we were on holiday, so we brought her a box of pineapple cakes.",
    "options": [
      "storey",
      "fare",
      "neighbour",
      "traffic"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "There is a _____ on almost every corner in Taipei, so you can buy snacks or pay bills at any time of day.",
    "options": [
      "cross-laminated timber",
      "convenience store",
      "speed bump",
      "public space"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The _____ outside our school sells hot sweet potatoes in winter, and students line up for them after class.",
    "options": [
      "low-emission zone",
      "urban sprawl",
      "curtain wall",
      "street vendor"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "We walked around the _____ for two hours, and we tried stinky tofu, bubble tea and grilled squid.",
    "options": [
      "ring road",
      "night market",
      "reinforced concrete",
      "building code"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The city is famous for its lively _____, so the streets are still busy at two o'clock in the morning.",
    "options": [
      "nightlife",
      "forefront",
      "gradient",
      "hub"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Better _____ has made the park safer at night, so more women now feel comfortable jogging there after work.",
    "options": [
      "hustle and bustle",
      "vertical garden",
      "street lighting",
      "steel frame"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The old alley is now covered in colourful _____, and young people come from all over the city to take photos.",
    "options": [
      "urban forest",
      "street art",
      "reclaimed wood",
      "town hall"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Someone sprayed _____ on the new bus shelter last night, so the city sent workers to clean it this morning.",
    "options": [
      "quandary",
      "plywood",
      "intersection",
      "graffiti"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "There are many _____ flats in the old town, so the government wants to rent them cheaply to young artists.",
    "options": [
      "protracted",
      "considerate",
      "vacant",
      "open-plan"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Five people live in the _____ flat, so the children have to do their homework at the kitchen table.",
    "options": [
      "cramped",
      "open-plan",
      "protracted",
      "run-down"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new library is bright and _____, so students can always find a quiet corner even during exam week.",
    "options": [
      "zero-waste",
      "brisk",
      "spacious",
      "3D-printed"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The landlord tried to _____ the family because they were late with the rent, but a lawyer helped them stay.",
    "options": [
      "evict",
      "demarcate",
      "renovate",
      "contravene"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "A _____ had been living in the empty factory for months, and the police only found him when the building was sold.",
    "options": [
      "footfall",
      "squatter",
      "glass",
      "plumber"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Many workers moved from the countryside to the _____ on the edge of the city, because they could not afford proper homes.",
    "options": [
      "light rail",
      "bus lane",
      "air quality",
      "shanty town"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Moving to a smaller town improved their _____, because they spent less time in traffic and more time with their kids.",
    "options": [
      "hustle and bustle",
      "quality of life",
      "speed bump",
      "building code"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Vienna is often named the most _____ city in the world, because it has clean air, good transport and plenty of parks.",
    "options": [
      "fleeting",
      "extravagant",
      "secluded",
      "liveable"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The _____ in big cities keeps rising, so many young people are moving to smaller towns to save money.",
    "options": [
      "cost of living",
      "rush hour",
      "permeable surface",
      "tower block"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The _____ promised to build a park next to the new flats, but five years later the land is still empty.",
    "options": [
      "breadth",
      "solace",
      "developer",
      "plywood"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Our neighbours made a _____ about the party, so we turned the music down and apologised the next day.",
    "options": [
      "street trees",
      "permeable surface",
      "double glazing",
      "noise complaint"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "housing": {
    "pos": "n.",
    "en_def": "buildings that people live in",
    "cn_def": "住房；住宅"
  },
  "social housing": {
    "pos": "n.phr.",
    "en_def": "homes provided by the government at a low rent",
    "cn_def": "社會住宅"
  },
  "housing estate": {
    "pos": "n.phr.",
    "en_def": "a large group of houses or flats built at the same time",
    "cn_def": "住宅區；社區"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in on one floor of a building",
    "cn_def": "公寓"
  },
  "studio flat": {
    "pos": "n.phr.",
    "en_def": "a small flat with one main room for living and sleeping",
    "cn_def": "套房；單間公寓"
  },
  "condominium": {
    "pos": "n.",
    "en_def": "a building of flats that are owned by the people living in them",
    "cn_def": "（產權獨立的）公寓大廈"
  },
  "tenant": {
    "pos": "n.",
    "en_def": "a person who pays rent to live in a place",
    "cn_def": "房客；租戶"
  },
  "rent": {
    "pos": "n.",
    "en_def": "money paid regularly to live in a place you do not own",
    "cn_def": "租金；房租"
  },
  "lease": {
    "pos": "n.",
    "en_def": "a legal agreement to rent a home or building for a period",
    "cn_def": "租約"
  },
  "mortgage": {
    "pos": "n.",
    "en_def": "a loan from a bank to buy a home",
    "cn_def": "房屋貸款；房貸"
  },
  "homeowner": {
    "pos": "n.",
    "en_def": "a person who owns the home they live in",
    "cn_def": "屋主；房屋所有權人"
  },
  "housing market": {
    "pos": "n.phr.",
    "en_def": "the buying and selling of homes and their prices",
    "cn_def": "房地產市場；房市"
  },
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民；住戶"
  },
  "residential": {
    "pos": "adj.",
    "en_def": "used for homes rather than offices or factories",
    "cn_def": "住宅的"
  },
  "neighbour": {
    "pos": "n.",
    "en_def": "a person who lives next to or near you",
    "cn_def": "鄰居"
  },
  "convenience store": {
    "pos": "n.phr.",
    "en_def": "a small shop that is open long hours and sells everyday items",
    "cn_def": "便利商店"
  },
  "street vendor": {
    "pos": "n.phr.",
    "en_def": "a person who sells food or goods from a stall in the street",
    "cn_def": "街頭攤販"
  },
  "night market": {
    "pos": "n.phr.",
    "en_def": "an outdoor market that opens in the evening, selling food and goods",
    "cn_def": "夜市"
  },
  "nightlife": {
    "pos": "n.",
    "en_def": "entertainment such as bars and clubs that is open at night",
    "cn_def": "夜生活"
  },
  "street lighting": {
    "pos": "n.phr.",
    "en_def": "the lamps that light up roads at night",
    "cn_def": "路燈照明"
  },
  "street art": {
    "pos": "n.phr.",
    "en_def": "paintings and pictures made on walls in public places",
    "cn_def": "街頭藝術"
  },
  "graffiti": {
    "pos": "n.",
    "en_def": "words or pictures painted on walls without permission",
    "cn_def": "塗鴉"
  },
  "vacant": {
    "pos": "adj.",
    "en_def": "empty; not being used or lived in",
    "cn_def": "空著的；閒置的"
  },
  "cramped": {
    "pos": "adj.",
    "en_def": "too small for the people or things inside",
    "cn_def": "狹窄的；擁擠的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space",
    "cn_def": "寬敞的"
  },
  "evict": {
    "pos": "v.",
    "en_def": "to force someone to leave their home by law",
    "cn_def": "驅逐；（依法）逐出"
  },
  "squatter": {
    "pos": "n.",
    "en_def": "a person who lives in an empty building without permission",
    "cn_def": "違法佔住者"
  },
  "shanty town": {
    "pos": "n.phr.",
    "en_def": "an area of very poor homes made from cheap materials",
    "cn_def": "貧民窟；棚戶區"
  },
  "quality of life": {
    "pos": "n.phr.",
    "en_def": "how good and comfortable a person's life is",
    "cn_def": "生活品質"
  },
  "liveable": {
    "pos": "adj.",
    "en_def": "pleasant and suitable for living in",
    "cn_def": "宜居的；適合居住的"
  },
  "cost of living": {
    "pos": "n.phr.",
    "en_def": "the money needed to pay for basic things like food and housing",
    "cn_def": "生活費用；生活成本"
  },
  "developer": {
    "pos": "n.",
    "en_def": "a company that buys land and builds houses or offices on it",
    "cn_def": "建商；開發商"
  },
  "noise complaint": {
    "pos": "n.phr.",
    "en_def": "a report to the police or building managers about loud noise",
    "cn_def": "噪音投訴"
  },
  "coalition": {
    "pos": "n.",
    "en_def": "a group of people or organisations working together",
    "cn_def": "聯盟；同盟"
  },
  "greenbelt": {
    "pos": "n.",
    "en_def": "a protected area of fields and woods around a city",
    "cn_def": "綠帶（城市周圍的保護綠地）"
  },
  "locality": {
    "pos": "n.",
    "en_def": "a particular area or neighbourhood",
    "cn_def": "地區；所在地"
  },
  "hustle and bustle": {
    "pos": "n.phr.",
    "en_def": "the noise and busy activity of a crowded place",
    "cn_def": "熙來攘往；喧囂忙碌"
  },
  "noise barrier": {
    "pos": "n.phr.",
    "en_def": "a high wall beside a road that blocks traffic noise",
    "cn_def": "隔音牆"
  },
  "green building": {
    "pos": "n.phr.",
    "en_def": "a building designed to save energy and water and harm nature less",
    "cn_def": "綠建築"
  },
  "structural engineer": {
    "pos": "n.phr.",
    "en_def": "an expert who makes sure buildings are strong and safe",
    "cn_def": "結構工程師"
  },
  "speed bump": {
    "pos": "n.phr.",
    "en_def": "a raised part across a road that makes cars slow down",
    "cn_def": "減速丘"
  },
  "cross-laminated timber": {
    "pos": "n.phr.",
    "en_def": "strong panels made by gluing layers of wood crosswise",
    "cn_def": "交錯層壓木材（CLT）"
  },
  "conurbation": {
    "pos": "n.",
    "en_def": "a large area where several towns have grown together",
    "cn_def": "大都會區；集合城市"
  },
  "cement": {
    "pos": "n.",
    "en_def": "a grey powder mixed with water and sand to make concrete",
    "cn_def": "水泥"
  },
  "maze": {
    "pos": "n.",
    "en_def": "a confusing network of paths or streets",
    "cn_def": "迷宮"
  },
  "land use": {
    "pos": "n.phr.",
    "en_def": "the way an area of land is used, such as for homes or farms",
    "cn_def": "土地利用"
  },
  "biophilic design": {
    "pos": "n.phr.",
    "en_def": "designing buildings that bring people closer to nature",
    "cn_def": "親生物設計"
  },
  "curtain wall": {
    "pos": "n.phr.",
    "en_def": "an outer wall of glass that does not hold up the building",
    "cn_def": "帷幕牆"
  },
  "panacea": {
    "pos": "n.",
    "en_def": "something believed to solve all problems",
    "cn_def": "萬靈丹"
  },
  "pretext": {
    "pos": "n.",
    "en_def": "a false reason given to hide the real one",
    "cn_def": "藉口；托辭"
  },
  "debacle": {
    "pos": "n.",
    "en_def": "a complete and embarrassing failure",
    "cn_def": "徹底的失敗；大挫敗"
  },
  "carpenter": {
    "pos": "n.",
    "en_def": "a person who makes and repairs wooden things",
    "cn_def": "木匠"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "ambience": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；環境氛圍"
  },
  "neighbourhood": {
    "pos": "n.",
    "en_def": "an area of a town and the people who live there",
    "cn_def": "社區；街坊"
  },
  "downtown": {
    "pos": "n.",
    "en_def": "the main business area in the centre of a city",
    "cn_def": "市中心；商業區"
  },
  "car-sharing": {
    "pos": "n.",
    "en_def": "a service where people rent cars for short periods",
    "cn_def": "汽車共享"
  },
  "mainstay": {
    "pos": "n.",
    "en_def": "the most important part that everything depends on",
    "cn_def": "支柱；主要依靠"
  },
  "gravel": {
    "pos": "n.",
    "en_def": "small stones used to make paths and roads",
    "cn_def": "碎石；礫石"
  },
  "plaster": {
    "pos": "n.",
    "en_def": "a paste that becomes hard and smooth when it dries on walls",
    "cn_def": "灰泥；石膏"
  },
  "backlog": {
    "pos": "n.",
    "en_def": "a large amount of work waiting to be done",
    "cn_def": "積壓的工作；待辦的大量事項"
  },
  "staircase": {
    "pos": "n.",
    "en_def": "a set of stairs inside a building",
    "cn_def": "樓梯"
  },
  "recourse": {
    "pos": "n.",
    "en_def": "a possible way to get help in a difficult situation",
    "cn_def": "求助的途徑；依靠"
  },
  "district": {
    "pos": "n.",
    "en_def": "an official area of a city",
    "cn_def": "區；行政區"
  },
  "tapestry": {
    "pos": "n.",
    "en_def": "a rich mixture of different things",
    "cn_def": "豐富多彩的組合"
  },
  "exterior": {
    "pos": "n.",
    "en_def": "the outside of a building",
    "cn_def": "外部；外觀"
  },
  "reclaimed wood": {
    "pos": "n.phr.",
    "en_def": "old wood taken from buildings and used again",
    "cn_def": "回收木材"
  },
  "heat pump": {
    "pos": "n.phr.",
    "en_def": "a machine that moves heat from outside air or ground into a building",
    "cn_def": "熱泵"
  },
  "new town": {
    "pos": "n.phr.",
    "en_def": "a town planned and built all at once",
    "cn_def": "新市鎮"
  },
  "greywater": {
    "pos": "n.",
    "en_def": "used water from sinks and showers that can be used again",
    "cn_def": "中水；灰水（可回收的生活廢水）"
  },
  "terrace": {
    "pos": "n.",
    "en_def": "a flat outdoor area next to a building or on a roof",
    "cn_def": "露台；平台"
  },
  "contractor": {
    "pos": "n.",
    "en_def": "a person or company paid to do building work",
    "cn_def": "承包商"
  },
  "scant": {
    "pos": "adj.",
    "en_def": "very little; not enough",
    "cn_def": "不足的；極少的"
  },
  "long-standing": {
    "pos": "adj.",
    "en_def": "having existed for a long time",
    "cn_def": "長期存在的；由來已久的"
  },
  "unparalleled": {
    "pos": "adj.",
    "en_def": "better or greater than anything else",
    "cn_def": "無與倫比的"
  },
  "storey": {
    "pos": "n.",
    "en_def": "one level or floor of a building",
    "cn_def": "（樓房的）層"
  },
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel on a bus, train or taxi",
    "cn_def": "車資；票價"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses and other vehicles on a road",
    "cn_def": "交通；車流"
  },
  "public space": {
    "pos": "n.phr.",
    "en_def": "an area such as a park or square that everyone can use",
    "cn_def": "公共空間"
  },
  "low-emission zone": {
    "pos": "n.phr.",
    "en_def": "an area where old polluting vehicles must pay or cannot enter",
    "cn_def": "低排放區"
  },
  "urban sprawl": {
    "pos": "n.phr.",
    "en_def": "the uncontrolled spread of a city into the countryside",
    "cn_def": "都市擴張；城市蔓延"
  },
  "ring road": {
    "pos": "n.phr.",
    "en_def": "a road that goes around a city so traffic can avoid the centre",
    "cn_def": "環狀道路；外環道"
  },
  "reinforced concrete": {
    "pos": "n.phr.",
    "en_def": "concrete made stronger with steel bars inside it",
    "cn_def": "鋼筋混凝土"
  },
  "building code": {
    "pos": "n.phr.",
    "en_def": "the official rules about how buildings must be built",
    "cn_def": "建築法規"
  },
  "forefront": {
    "pos": "n.",
    "en_def": "the leading position in an area of activity",
    "cn_def": "最前線；最前沿"
  },
  "gradient": {
    "pos": "n.",
    "en_def": "how steep a slope is",
    "cn_def": "坡度"
  },
  "hub": {
    "pos": "n.",
    "en_def": "the central or most important place for an activity",
    "cn_def": "中心；樞紐"
  },
  "vertical garden": {
    "pos": "n.phr.",
    "en_def": "plants grown up a wall or on shelves rather than on the ground",
    "cn_def": "垂直花園"
  },
  "steel frame": {
    "pos": "n.phr.",
    "en_def": "a skeleton of steel beams that holds up a building",
    "cn_def": "鋼構骨架"
  },
  "urban forest": {
    "pos": "n.phr.",
    "en_def": "all the trees growing in a city",
    "cn_def": "都市森林"
  },
  "town hall": {
    "pos": "n.phr.",
    "en_def": "the building where a town's local government works",
    "cn_def": "市政廳；鎮公所"
  },
  "quandary": {
    "pos": "n.",
    "en_def": "a situation where it is hard to decide what to do",
    "cn_def": "困惑；左右為難"
  },
  "plywood": {
    "pos": "n.",
    "en_def": "thin layers of wood glued together into a board",
    "cn_def": "合板；夾板"
  },
  "intersection": {
    "pos": "n.",
    "en_def": "a place where two or more roads cross",
    "cn_def": "十字路口；交叉口"
  },
  "protracted": {
    "pos": "adj.",
    "en_def": "lasting longer than expected or than usual",
    "cn_def": "拖延的；曠日持久的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的；為他人著想的"
  },
  "open-plan": {
    "pos": "adj.",
    "en_def": "having few inside walls, with one large shared space",
    "cn_def": "開放式（格局）的"
  },
  "run-down": {
    "pos": "adj.",
    "en_def": "in bad condition because nobody has looked after it",
    "cn_def": "破敗的；年久失修的"
  },
  "zero-waste": {
    "pos": "adj.",
    "en_def": "producing no rubbish that goes to landfill",
    "cn_def": "零廢棄的"
  },
  "brisk": {
    "pos": "adj.",
    "en_def": "quick and active",
    "cn_def": "興旺的；輕快的"
  },
  "3d-printed": {
    "pos": "adj.",
    "en_def": "made layer by layer by a machine that prints materials",
    "cn_def": "3D列印的"
  },
  "demarcate": {
    "pos": "v.",
    "en_def": "to show clearly where an area begins and ends",
    "cn_def": "劃定（界線）"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building",
    "cn_def": "翻修；整修"
  },
  "contravene": {
    "pos": "v.",
    "en_def": "to break a law or rule",
    "cn_def": "違反（法規）"
  },
  "footfall": {
    "pos": "n.",
    "en_def": "the number of people who visit a shop or area",
    "cn_def": "人流量；來客數"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a hard clear material used for windows",
    "cn_def": "玻璃"
  },
  "plumber": {
    "pos": "n.",
    "en_def": "a person who fixes water pipes and toilets",
    "cn_def": "水管工人"
  },
  "light rail": {
    "pos": "n.phr.",
    "en_def": "a modern electric train system that runs mainly on city streets",
    "cn_def": "輕軌"
  },
  "bus lane": {
    "pos": "n.phr.",
    "en_def": "a part of the road that only buses can use",
    "cn_def": "公車專用道"
  },
  "air quality": {
    "pos": "n.phr.",
    "en_def": "how clean or polluted the air is",
    "cn_def": "空氣品質"
  },
  "fleeting": {
    "pos": "adj.",
    "en_def": "lasting only a very short time",
    "cn_def": "短暫的；稍縱即逝的"
  },
  "extravagant": {
    "pos": "adj.",
    "en_def": "spending or costing far too much money",
    "cn_def": "奢侈的；鋪張浪費的"
  },
  "secluded": {
    "pos": "adj.",
    "en_def": "quiet and far from other people",
    "cn_def": "僻靜的；隱蔽的"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busy time when most people travel to or from work",
    "cn_def": "尖峰時段"
  },
  "permeable surface": {
    "pos": "n.phr.",
    "en_def": "ground covering that lets water soak through it",
    "cn_def": "透水鋪面"
  },
  "tower block": {
    "pos": "n.phr.",
    "en_def": "a tall building with many flats or offices",
    "cn_def": "高層公寓大樓"
  },
  "breadth": {
    "pos": "n.",
    "en_def": "the distance from one side to the other; wide range",
    "cn_def": "寬度；廣度"
  },
  "solace": {
    "pos": "n.",
    "en_def": "comfort when you are sad or worried",
    "cn_def": "安慰；慰藉"
  },
  "street trees": {
    "pos": "n.phr.",
    "en_def": "trees planted along the sides of roads",
    "cn_def": "行道樹"
  },
  "double glazing": {
    "pos": "n.phr.",
    "en_def": "windows with two layers of glass to keep heat and noise out",
    "cn_def": "雙層玻璃窗"
  }
};

const EXTRA_GLOSSES = {};
