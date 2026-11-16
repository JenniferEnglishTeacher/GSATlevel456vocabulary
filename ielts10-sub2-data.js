// Topic 10 Subunit 2 Quiz Data: Buildings & Architectural Design 建築物與建築設計
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S02 - Buildings & Architectural Design 建築物與建築設計",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "architect",
    "pos": "n.",
    "cn_def": "建築師",
    "en_def": "a person whose job is to design buildings",
    "sentence": "The {{BLANK}} designed the library with large windows, so readers can enjoy natural sunlight while they study.",
    "cn": "那位建築師把圖書館設計成有大窗戶，所以讀者在讀書時可以享受自然陽光。"
  },
  {
    "word": "architecture",
    "pos": "n.",
    "cn_def": "建築；建築風格",
    "en_def": "the style and design of buildings",
    "sentence": "Tainan is full of old temples and Japanese-era houses, so visitors who love {{BLANK}} can spend days exploring the city.",
    "cn": "台南到處都是古老廟宇和日治時期的房子，所以喜愛建築的遊客可以花好幾天探索這座城市。"
  },
  {
    "word": "skyscraper",
    "pos": "n.",
    "cn_def": "摩天大樓",
    "en_def": "a very tall modern building in a city",
    "sentence": "The new {{BLANK}} has more than eighty floors, and people on the top floor can see the ocean on a clear day.",
    "cn": "這棟新的摩天大樓有八十多層樓，而在頂樓的人天氣晴朗時可以看到海洋。"
  },
  {
    "word": "high-rise",
    "pos": "adj.",
    "cn_def": "高樓層的；高樓的",
    "en_def": "very tall, with many floors",
    "sentence": "Many families in Hong Kong live in {{BLANK}} apartments, so children often take the lift instead of playing in a garden.",
    "cn": "許多香港家庭住在高樓公寓裡，所以孩子們常常搭電梯，而不是在花園裡玩耍。"
  },
  {
    "word": "tower block",
    "pos": "n.phr.",
    "cn_def": "高層公寓大樓",
    "en_def": "a tall building with many flats or offices",
    "sentence": "The old {{BLANK}} was badly built in the 1970s, so the council decided to knock it down and build safer homes.",
    "cn": "那棟高層公寓大樓在1970年代蓋得很差，所以市議會決定拆掉它並興建更安全的住宅。"
  },
  {
    "word": "facade",
    "pos": "n.",
    "cn_def": "（建築物的）正面；外牆",
    "en_def": "the front outside wall of a building",
    "sentence": "The museum kept the old brick {{BLANK}} of the bank, but the inside was completely rebuilt with glass and steel.",
    "cn": "這座博物館保留了那間銀行的舊紅磚正面外牆，但內部完全用玻璃和鋼材重建。"
  },
  {
    "word": "storey",
    "pos": "n.",
    "cn_def": "（樓房的）層",
    "en_def": "one level or floor of a building",
    "sentence": "Our school's classroom building has five {{BLANK}}, and the science labs are on the top floor because of the good light.",
    "cn": "我們學校的教學大樓有五層樓，而自然實驗室位於頂樓，因為那裡光線良好。"
  },
  {
    "word": "floor plan",
    "pos": "n.phr.",
    "cn_def": "平面圖；格局圖",
    "en_def": "a drawing that shows the rooms of a building from above",
    "sentence": "Before we rented the flat, we studied the {{BLANK}} carefully, because we wanted each child to have a separate bedroom.",
    "cn": "在租這間公寓之前，我們仔細研究了平面圖，因為我們希望每個孩子都有獨立的臥室。"
  },
  {
    "word": "atrium",
    "pos": "n.",
    "cn_def": "中庭；天井大廳",
    "en_def": "a large open space inside a building, often with a glass roof",
    "sentence": "The hotel has a huge {{BLANK}} full of plants, and guests can see the sky through its glass roof while they eat breakfast.",
    "cn": "這家飯店有一個種滿植物的巨大中庭，而客人吃早餐時可以透過玻璃屋頂看到天空。"
  },
  {
    "word": "balcony",
    "pos": "n.",
    "cn_def": "陽台",
    "en_def": "a small platform outside an upper window of a building",
    "sentence": "My grandmother grows herbs and flowers on her {{BLANK}}, and she sits there every morning to drink her tea.",
    "cn": "我奶奶在她的陽台上種香草和花，而且她每天早上都坐在那裡喝茶。"
  },
  {
    "word": "courtyard",
    "pos": "n.",
    "cn_def": "庭院；中庭",
    "en_def": "an open space surrounded by walls or buildings",
    "sentence": "The traditional house is built around a quiet {{BLANK}}, so the family can enjoy fresh air while staying private.",
    "cn": "這棟傳統房屋圍繞著一個安靜的庭院而建，所以這家人既能享受新鮮空氣又能保有隱私。"
  },
  {
    "word": "terrace",
    "pos": "n.",
    "cn_def": "露台；平台",
    "en_def": "a flat outdoor area next to a building or on a roof",
    "sentence": "We ate dinner on the restaurant's {{BLANK}}, and we could watch the boats on the river while the sun went down.",
    "cn": "我們在餐廳的露台上吃晚餐，而且在太陽下山時可以看著河上的船隻。"
  },
  {
    "word": "rooftop",
    "pos": "n.",
    "cn_def": "屋頂",
    "en_def": "the outside top surface of a building",
    "sentence": "Several schools in Taipei have turned their {{BLANK}} into vegetable gardens, and students learn to grow food there.",
    "cn": "台北有幾所學校已經把它們的屋頂改造成菜園，而學生們在那裡學習種植食物。"
  },
  {
    "word": "basement",
    "pos": "n.",
    "cn_def": "地下室",
    "en_def": "the part of a building below the ground",
    "sentence": "The heavy rain flooded the {{BLANK}} of our building, so all the cars in the car park had to be moved.",
    "cn": "豪雨淹沒了我們大樓的地下室，所以停車場裡所有的車都必須移走。"
  },
  {
    "word": "entrance hall",
    "pos": "n.phr.",
    "cn_def": "門廳；入口大廳",
    "en_def": "the first room or space you enter in a building",
    "sentence": "Visitors wait in the bright {{BLANK}} while the receptionist checks their names, and they can read about the company's history there.",
    "cn": "訪客在明亮的入口大廳等候，同時接待員核對他們的名字，而他們可以在那裡閱讀公司的歷史。"
  },
  {
    "word": "staircase",
    "pos": "n.",
    "cn_def": "樓梯",
    "en_def": "a set of stairs inside a building",
    "sentence": "The old wooden {{BLANK}} makes a loud noise when people walk on it, so everyone can hear when someone comes home late.",
    "cn": "那座老舊的木製樓梯在人們走上去時會發出很大的聲響，所以有人晚歸時大家都聽得到。"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "the inside surface at the top of a room",
    "sentence": "The café has a very high {{BLANK}} with wooden fans, so it feels cool and spacious even in the summer.",
    "cn": "那家咖啡店有很高的天花板和木製吊扇，所以即使在夏天也感覺涼爽又寬敞。"
  },
  {
    "word": "beam",
    "pos": "n.",
    "cn_def": "樑；橫樑",
    "en_def": "a long thick piece of wood or metal that supports a roof",
    "sentence": "The workers found a crack in the main wooden {{BLANK}}, so they closed the old temple until it could be repaired.",
    "cn": "工人們發現主要的木頭橫樑上有一道裂縫，所以他們關閉了這座老廟直到可以修好為止。"
  },
  {
    "word": "partition wall",
    "pos": "n.phr.",
    "cn_def": "隔間牆",
    "en_def": "a thin wall that divides a room into smaller spaces",
    "sentence": "The landlord added a {{BLANK}} to turn the big room into two bedrooms, but now we can hear everything our roommate says.",
    "cn": "房東加了一道隔間牆把大房間變成兩間臥室，但現在我們聽得到室友說的每一句話。"
  },
  {
    "word": "cantilever",
    "pos": "n.",
    "cn_def": "懸臂；懸臂樑",
    "en_def": "a long beam fixed at only one end that sticks out",
    "sentence": "The famous balcony is supported by a steel {{BLANK}}, so it seems to float in the air above the valley.",
    "cn": "那座著名的陽台由一根鋼製懸臂樑支撐，所以它看起來像是飄浮在山谷上方的空中。"
  },
  {
    "word": "spire",
    "pos": "n.",
    "cn_def": "尖塔；尖頂",
    "en_def": "a tall pointed structure on top of a church or tower",
    "sentence": "You can see the church's white {{BLANK}} from far away, and travellers once used it to find their way to the village.",
    "cn": "你從很遠的地方就能看到教堂的白色尖塔，而以前旅人曾用它來找到前往村莊的路。"
  },
  {
    "word": "listed building",
    "pos": "n.phr.",
    "cn_def": "受保護的歷史建築",
    "en_def": "an old building that is protected by law",
    "sentence": "The cinema is a {{BLANK}}, so the owner cannot knock it down, although he is allowed to repair the inside.",
    "cn": "那間電影院是一棟受法律保護的歷史建築，所以業主不能拆除它，雖然他被允許修繕內部。"
  },
  {
    "word": "skylight",
    "pos": "n.",
    "cn_def": "天窗",
    "en_def": "a window in a roof that lets in light",
    "sentence": "We put a {{BLANK}} in the bathroom roof, so now we do not need to turn on the lights during the day.",
    "cn": "我們在浴室屋頂裝了一扇天窗，所以現在白天不需要開燈了。"
  },
  {
    "word": "open-plan",
    "pos": "adj.",
    "cn_def": "開放式（格局）的",
    "en_def": "having few inside walls, with one large shared space",
    "sentence": "Our company moved to an {{BLANK}} office, and although it is easier to talk to colleagues, it is also much noisier.",
    "cn": "我們公司搬到開放式辦公室，雖然和同事交談更方便，但也吵鬧得多。"
  },
  {
    "word": "minimalist",
    "pos": "adj.",
    "cn_def": "極簡風格的",
    "en_def": "using very few things or simple decoration",
    "sentence": "Their {{BLANK}} flat has white walls and very little furniture, so it looks clean but sometimes feels a little cold.",
    "cn": "他們的極簡風格公寓有白色牆壁和很少的家具，所以看起來很乾淨，但有時感覺有點冷清。"
  },
  {
    "word": "modernist",
    "pos": "adj.",
    "cn_def": "現代主義的",
    "en_def": "in the plain 20th-century style using concrete, steel and glass",
    "sentence": "The university's {{BLANK}} library was built in 1965, and its simple shapes and huge windows still look fresh today.",
    "cn": "這所大學的現代主義圖書館建於1965年，而它簡單的造型和巨大的窗戶至今看起來仍很新穎。"
  },
  {
    "word": "symmetry",
    "pos": "n.",
    "cn_def": "對稱",
    "en_def": "the quality of having two halves that match exactly",
    "sentence": "The temple was designed with perfect {{BLANK}}, so the left side of the building looks exactly like the right side.",
    "cn": "這座廟宇被設計成完美的對稱，所以建築物的左側看起來和右側一模一樣。"
  },
  {
    "word": "interior",
    "pos": "n.",
    "cn_def": "內部；室內",
    "en_def": "the inside of a building or room",
    "sentence": "The outside of the old house looks plain, but the {{BLANK}} is full of beautiful wooden furniture and colourful tiles.",
    "cn": "這棟老房子的外觀看起來很樸素，但它的內部卻滿是漂亮的木製家具和色彩繽紛的磁磚。"
  },
  {
    "word": "exterior",
    "pos": "n.",
    "cn_def": "外部；外觀",
    "en_def": "the outside of a building",
    "sentence": "The workers are painting the {{BLANK}} of the school light blue, and they will finish before the new term begins.",
    "cn": "工人們正在把學校的外觀漆成淡藍色，而他們會在新學期開始前完成。"
  },
  {
    "word": "renovate",
    "pos": "v.",
    "cn_def": "翻修；整修",
    "en_def": "to repair and improve an old building",
    "sentence": "My parents decided to {{BLANK}} the old kitchen, so we ate takeaway food every night for almost a month.",
    "cn": "我爸媽決定翻修舊廚房，所以我們有將近一個月每晚都吃外帶食物。"
  },
  {
    "word": "demolish",
    "pos": "v.",
    "cn_def": "拆除",
    "en_def": "to knock down a building completely",
    "sentence": "The city plans to {{BLANK}} the old market next year, but many shoppers have signed a petition to save it.",
    "cn": "市政府計畫明年拆除舊市場，但許多購物者已經連署請願要保留它。"
  },
  {
    "word": "scale model",
    "pos": "n.phr.",
    "cn_def": "比例模型",
    "en_def": "a small copy of a building with the same proportions",
    "sentence": "The architects showed a {{BLANK}} of the new stadium, and the children loved looking at the tiny seats and trees.",
    "cn": "建築師們展示了新體育館的比例模型，而孩子們很喜歡看那些小小的座位和樹木。"
  },
  {
    "word": "loft",
    "pos": "n.",
    "cn_def": "閣樓；（工廠改建的）挑高公寓",
    "en_def": "a room or flat in the top part of a building",
    "sentence": "The artist turned an old warehouse {{BLANK}} into a studio, because the high ceiling and big windows gave her plenty of light.",
    "cn": "那位藝術家把一間舊倉庫閣樓改造成工作室，因為挑高的天花板和大窗戶給了她充足的光線。"
  },
  {
    "word": "curtain wall",
    "pos": "n.phr.",
    "cn_def": "帷幕牆",
    "en_def": "an outer wall of glass that does not hold up the building",
    "sentence": "The office tower is covered with a glass {{BLANK}}, so it looks bright, but it can become very hot in summer.",
    "cn": "那棟辦公大樓覆蓋著玻璃帷幕牆，所以看起來很明亮，但在夏天可能會變得非常熱。"
  }
];

const MCQS = [
  {
    "q": "The _____ designed the library with large windows, so readers can enjoy natural sunlight while they study.",
    "options": [
      "architect",
      "assortment",
      "forefront",
      "lease"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Tainan is full of old temples and Japanese-era houses, so visitors who love _____ can spend days exploring the city.",
    "options": [
      "neighbour",
      "coalition",
      "architecture",
      "boundary"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new _____ has more than eighty floors, and people on the top floor can see the ocean on a clear day.",
    "options": [
      "glass",
      "tram",
      "haven",
      "skyscraper"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Many families in Hong Kong live in _____ apartments, so children often take the lift instead of playing in a garden.",
    "options": [
      "infamous",
      "high-rise",
      "brittle",
      "alluring"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The old _____ was badly built in the 1970s, so the council decided to knock it down and build safer homes.",
    "options": [
      "convenience store",
      "bricks and mortar",
      "tower block",
      "rammed earth"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The museum kept the old brick _____ of the bank, but the inside was completely rebuilt with glass and steel.",
    "options": [
      "hempcrete",
      "facade",
      "abode",
      "nuisance"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Our school's classroom building has five _____, and the science labs are on the top floor because of the good light.",
    "options": [
      "cross-section",
      "overhang",
      "tile",
      "storey"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Before we rented the flat, we studied the _____ carefully, because we wanted each child to have a separate bedroom.",
    "options": [
      "floor plan",
      "inner city",
      "greenfield site",
      "high street"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The hotel has a huge _____ full of plants, and guests can see the sky through its glass roof while they eat breakfast.",
    "options": [
      "mayor",
      "patchwork",
      "atrium",
      "cityscape"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "My grandmother grows herbs and flowers on her _____, and she sits there every morning to drink her tea.",
    "options": [
      "boundary",
      "balcony",
      "gentrification",
      "e-scooter"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The traditional house is built around a quiet _____, so the family can enjoy fresh air while staying private.",
    "options": [
      "courtyard",
      "traffic",
      "precinct",
      "epicentre"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "We ate dinner on the restaurant's _____, and we could watch the boats on the river while the sun went down.",
    "options": [
      "flyover",
      "condominium",
      "neighbourhood",
      "terrace"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Several schools in Taipei have turned their _____ into vegetable gardens, and students learn to grow food there.",
    "options": [
      "rooftop",
      "cacophony",
      "backdrop",
      "haven"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The heavy rain flooded the _____ of our building, so all the cars in the car park had to be moved.",
    "options": [
      "perk",
      "hempcrete",
      "resident",
      "basement"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Visitors wait in the bright _____ while the receptionist checks their names, and they can read about the company's history there.",
    "options": [
      "noise complaint",
      "energy rating",
      "entrance hall",
      "biophilic design"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The old wooden _____ makes a loud noise when people walk on it, so everyone can hear when someone comes home late.",
    "options": [
      "timber",
      "staircase",
      "pavement",
      "reprieve"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The café has a very high _____ with wooden fans, so it feels cool and spacious even in the summer.",
    "options": [
      "tenant",
      "lease",
      "ceiling",
      "homeowner"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The workers found a crack in the main wooden _____, so they closed the old temple until it could be repaired.",
    "options": [
      "neighbourhood",
      "recourse",
      "downtown",
      "beam"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The landlord added a _____ to turn the big room into two bedrooms, but now we can hear everything our roommate says.",
    "options": [
      "partition wall",
      "speed bump",
      "planning permission",
      "shanty town"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The famous balcony is supported by a steel _____, so it seems to float in the air above the valley.",
    "options": [
      "recourse",
      "cantilever",
      "tapestry",
      "traffic"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "You can see the church's white _____ from far away, and travellers once used it to find their way to the village.",
    "options": [
      "debacle",
      "greenbelt",
      "spire",
      "downtown"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The cinema is a _____, so the owner cannot knock it down, although he is allowed to repair the inside.",
    "options": [
      "urban renewal",
      "listed building",
      "a far cry from",
      "rammed earth"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "We put a _____ in the bathroom roof, so now we do not need to turn on the lights during the day.",
    "options": [
      "skylight",
      "reprieve",
      "backdrop",
      "fixture"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Our company moved to an _____ office, and although it is easier to talk to colleagues, it is also much noisier.",
    "options": [
      "coveted",
      "acceptable",
      "well-off",
      "open-plan"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Their _____ flat has white walls and very little furniture, so it looks clean but sometimes feels a little cold.",
    "options": [
      "cosmopolitan",
      "minimalist",
      "ever-increasing",
      "dismal"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The university's _____ library was built in 1965, and its simple shapes and huge windows still look fresh today.",
    "options": [
      "acceptable",
      "harmonious",
      "congenial",
      "modernist"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The temple was designed with perfect _____, so the left side of the building looks exactly like the right side.",
    "options": [
      "symmetry",
      "patchwork",
      "deluge",
      "coalition"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The outside of the old house looks plain, but the _____ is full of beautiful wooden furniture and colourful tiles.",
    "options": [
      "ambience",
      "lease",
      "interior",
      "traffic"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The workers are painting the _____ of the school light blue, and they will finish before the new term begins.",
    "options": [
      "gentrification",
      "exterior",
      "epicentre",
      "boon"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "My parents decided to _____ the old kitchen, so we ate takeaway food every night for almost a month.",
    "options": [
      "renovate",
      "waive",
      "subdivide",
      "vie"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The city plans to _____ the old market next year, but many shoppers have signed a petition to save it.",
    "options": [
      "vie",
      "pedestrianise",
      "tout",
      "demolish"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The architects showed a _____ of the new stadium, and the children loved looking at the tiny seats and trees.",
    "options": [
      "rain garden",
      "light pollution",
      "scale model",
      "land use"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The artist turned an old warehouse _____ into a studio, because the high ceiling and big windows gave her plenty of light.",
    "options": [
      "contractor",
      "district",
      "enclave",
      "loft"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The office tower is covered with a glass _____, so it looks bright, but it can become very hot in summer.",
    "options": [
      "curtain wall",
      "housing market",
      "noise complaint",
      "building site"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "architect": {
    "pos": "n.",
    "en_def": "a person whose job is to design buildings",
    "cn_def": "建築師"
  },
  "architecture": {
    "pos": "n.",
    "en_def": "the style and design of buildings",
    "cn_def": "建築；建築風格"
  },
  "skyscraper": {
    "pos": "n.",
    "en_def": "a very tall modern building in a city",
    "cn_def": "摩天大樓"
  },
  "high-rise": {
    "pos": "adj.",
    "en_def": "very tall, with many floors",
    "cn_def": "高樓層的；高樓的"
  },
  "tower block": {
    "pos": "n.phr.",
    "en_def": "a tall building with many flats or offices",
    "cn_def": "高層公寓大樓"
  },
  "facade": {
    "pos": "n.",
    "en_def": "the front outside wall of a building",
    "cn_def": "（建築物的）正面；外牆"
  },
  "storey": {
    "pos": "n.",
    "en_def": "one level or floor of a building",
    "cn_def": "（樓房的）層"
  },
  "floor plan": {
    "pos": "n.phr.",
    "en_def": "a drawing that shows the rooms of a building from above",
    "cn_def": "平面圖；格局圖"
  },
  "atrium": {
    "pos": "n.",
    "en_def": "a large open space inside a building, often with a glass roof",
    "cn_def": "中庭；天井大廳"
  },
  "balcony": {
    "pos": "n.",
    "en_def": "a small platform outside an upper window of a building",
    "cn_def": "陽台"
  },
  "courtyard": {
    "pos": "n.",
    "en_def": "an open space surrounded by walls or buildings",
    "cn_def": "庭院；中庭"
  },
  "terrace": {
    "pos": "n.",
    "en_def": "a flat outdoor area next to a building or on a roof",
    "cn_def": "露台；平台"
  },
  "rooftop": {
    "pos": "n.",
    "en_def": "the outside top surface of a building",
    "cn_def": "屋頂"
  },
  "basement": {
    "pos": "n.",
    "en_def": "the part of a building below the ground",
    "cn_def": "地下室"
  },
  "entrance hall": {
    "pos": "n.phr.",
    "en_def": "the first room or space you enter in a building",
    "cn_def": "門廳；入口大廳"
  },
  "staircase": {
    "pos": "n.",
    "en_def": "a set of stairs inside a building",
    "cn_def": "樓梯"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "the inside surface at the top of a room",
    "cn_def": "天花板"
  },
  "beam": {
    "pos": "n.",
    "en_def": "a long thick piece of wood or metal that supports a roof",
    "cn_def": "樑；橫樑"
  },
  "partition wall": {
    "pos": "n.phr.",
    "en_def": "a thin wall that divides a room into smaller spaces",
    "cn_def": "隔間牆"
  },
  "cantilever": {
    "pos": "n.",
    "en_def": "a long beam fixed at only one end that sticks out",
    "cn_def": "懸臂；懸臂樑"
  },
  "spire": {
    "pos": "n.",
    "en_def": "a tall pointed structure on top of a church or tower",
    "cn_def": "尖塔；尖頂"
  },
  "listed building": {
    "pos": "n.phr.",
    "en_def": "an old building that is protected by law",
    "cn_def": "受保護的歷史建築"
  },
  "skylight": {
    "pos": "n.",
    "en_def": "a window in a roof that lets in light",
    "cn_def": "天窗"
  },
  "open-plan": {
    "pos": "adj.",
    "en_def": "having few inside walls, with one large shared space",
    "cn_def": "開放式（格局）的"
  },
  "minimalist": {
    "pos": "adj.",
    "en_def": "using very few things or simple decoration",
    "cn_def": "極簡風格的"
  },
  "modernist": {
    "pos": "adj.",
    "en_def": "in the plain 20th-century style using concrete, steel and glass",
    "cn_def": "現代主義的"
  },
  "symmetry": {
    "pos": "n.",
    "en_def": "the quality of having two halves that match exactly",
    "cn_def": "對稱"
  },
  "interior": {
    "pos": "n.",
    "en_def": "the inside of a building or room",
    "cn_def": "內部；室內"
  },
  "exterior": {
    "pos": "n.",
    "en_def": "the outside of a building",
    "cn_def": "外部；外觀"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building",
    "cn_def": "翻修；整修"
  },
  "demolish": {
    "pos": "v.",
    "en_def": "to knock down a building completely",
    "cn_def": "拆除"
  },
  "scale model": {
    "pos": "n.phr.",
    "en_def": "a small copy of a building with the same proportions",
    "cn_def": "比例模型"
  },
  "loft": {
    "pos": "n.",
    "en_def": "a room or flat in the top part of a building",
    "cn_def": "閣樓；（工廠改建的）挑高公寓"
  },
  "curtain wall": {
    "pos": "n.phr.",
    "en_def": "an outer wall of glass that does not hold up the building",
    "cn_def": "帷幕牆"
  },
  "assortment": {
    "pos": "n.",
    "en_def": "a mixture of different kinds of things",
    "cn_def": "各式各樣；什錦"
  },
  "forefront": {
    "pos": "n.",
    "en_def": "the leading position in an area of activity",
    "cn_def": "最前線；最前沿"
  },
  "lease": {
    "pos": "n.",
    "en_def": "a legal agreement to rent a home or building for a period",
    "cn_def": "租約"
  },
  "neighbour": {
    "pos": "n.",
    "en_def": "a person who lives next to or near you",
    "cn_def": "鄰居"
  },
  "coalition": {
    "pos": "n.",
    "en_def": "a group of people or organisations working together",
    "cn_def": "聯盟；同盟"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area",
    "cn_def": "邊界；界線"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a hard clear material used for windows",
    "cn_def": "玻璃"
  },
  "tram": {
    "pos": "n.",
    "en_def": "an electric vehicle that runs on rails along city streets",
    "cn_def": "路面電車"
  },
  "haven": {
    "pos": "n.",
    "en_def": "a safe and peaceful place",
    "cn_def": "避風港；安全的地方"
  },
  "infamous": {
    "pos": "adj.",
    "en_def": "well known for something bad",
    "cn_def": "惡名昭彰的"
  },
  "brittle": {
    "pos": "adj.",
    "en_def": "hard but easily broken",
    "cn_def": "易碎的；脆的"
  },
  "alluring": {
    "pos": "adj.",
    "en_def": "attractive and exciting",
    "cn_def": "誘人的；迷人的"
  },
  "convenience store": {
    "pos": "n.phr.",
    "en_def": "a small shop that is open long hours and sells everyday items",
    "cn_def": "便利商店"
  },
  "bricks and mortar": {
    "pos": "n.phr.",
    "en_def": "real buildings, especially shops, rather than online businesses",
    "cn_def": "實體店面；實體建築"
  },
  "rammed earth": {
    "pos": "n.phr.",
    "en_def": "soil pressed hard into walls as a building material",
    "cn_def": "夯土"
  },
  "hempcrete": {
    "pos": "n.",
    "en_def": "a light building material made from hemp plants and lime",
    "cn_def": "大麻混凝土（麻纖維石灰建材）"
  },
  "abode": {
    "pos": "n.",
    "en_def": "the place where someone lives (formal)",
    "cn_def": "住所；居所"
  },
  "nuisance": {
    "pos": "n.",
    "en_def": "something annoying that causes problems",
    "cn_def": "討厭的事物；麻煩"
  },
  "cross-section": {
    "pos": "n.",
    "en_def": "a group that includes many different types of people",
    "cn_def": "橫斷面；具代表性的一群人"
  },
  "overhang": {
    "pos": "n.",
    "en_def": "a part of a roof that sticks out beyond the walls",
    "cn_def": "屋簷；突出部分"
  },
  "tile": {
    "pos": "n.",
    "en_def": "a thin flat square piece used to cover floors, walls or roofs",
    "cn_def": "磁磚；瓦片"
  },
  "inner city": {
    "pos": "n.phr.",
    "en_def": "the older, central part of a city, often with social problems",
    "cn_def": "舊市區；內城區"
  },
  "greenfield site": {
    "pos": "n.phr.",
    "en_def": "land that has never been built on before",
    "cn_def": "綠地（未開發用地）"
  },
  "high street": {
    "pos": "n.phr.",
    "en_def": "the main shopping street in a town",
    "cn_def": "主要商店街；大街"
  },
  "mayor": {
    "pos": "n.",
    "en_def": "the elected leader of a city or town",
    "cn_def": "市長"
  },
  "patchwork": {
    "pos": "n.",
    "en_def": "something made of many different parts that do not match",
    "cn_def": "拼湊物；大雜燴"
  },
  "cityscape": {
    "pos": "n.",
    "en_def": "the view of a city's buildings and streets",
    "cn_def": "城市景觀"
  },
  "gentrification": {
    "pos": "n.",
    "en_def": "when richer people move into a poor area and prices rise",
    "cn_def": "仕紳化；中產階級化"
  },
  "e-scooter": {
    "pos": "n.",
    "en_def": "a small electric scooter that you stand on",
    "cn_def": "電動滑板車"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses and other vehicles on a road",
    "cn_def": "交通；車流"
  },
  "precinct": {
    "pos": "n.",
    "en_def": "an area of a town used for a special purpose, often closed to cars",
    "cn_def": "（城市中的）特定區域；徒步區"
  },
  "epicentre": {
    "pos": "n.",
    "en_def": "the central point of an activity or event",
    "cn_def": "中心；震央"
  },
  "flyover": {
    "pos": "n.",
    "en_def": "a bridge that carries one road over another",
    "cn_def": "高架橋；天橋"
  },
  "condominium": {
    "pos": "n.",
    "en_def": "a building of flats that are owned by the people living in them",
    "cn_def": "（產權獨立的）公寓大廈"
  },
  "neighbourhood": {
    "pos": "n.",
    "en_def": "an area of a town and the people who live there",
    "cn_def": "社區；街坊"
  },
  "cacophony": {
    "pos": "n.",
    "en_def": "a loud, unpleasant mixture of sounds",
    "cn_def": "嘈雜聲；刺耳的雜音"
  },
  "backdrop": {
    "pos": "n.",
    "en_def": "the scenery behind something",
    "cn_def": "背景"
  },
  "perk": {
    "pos": "n.",
    "en_def": "an extra benefit you get from a job or situation",
    "cn_def": "額外的好處；福利"
  },
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民；住戶"
  },
  "noise complaint": {
    "pos": "n.phr.",
    "en_def": "a report to the police or building managers about loud noise",
    "cn_def": "噪音投訴"
  },
  "energy rating": {
    "pos": "n.phr.",
    "en_def": "a label that shows how efficiently something uses energy",
    "cn_def": "能源效率等級"
  },
  "biophilic design": {
    "pos": "n.phr.",
    "en_def": "designing buildings that bring people closer to nature",
    "cn_def": "親生物設計"
  },
  "timber": {
    "pos": "n.",
    "en_def": "wood used for building",
    "cn_def": "木材"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "reprieve": {
    "pos": "n.",
    "en_def": "a delay or cancellation of something bad",
    "cn_def": "暫緩；緩刑"
  },
  "tenant": {
    "pos": "n.",
    "en_def": "a person who pays rent to live in a place",
    "cn_def": "房客；租戶"
  },
  "homeowner": {
    "pos": "n.",
    "en_def": "a person who owns the home they live in",
    "cn_def": "屋主；房屋所有權人"
  },
  "recourse": {
    "pos": "n.",
    "en_def": "a possible way to get help in a difficult situation",
    "cn_def": "求助的途徑；依靠"
  },
  "downtown": {
    "pos": "n.",
    "en_def": "the main business area in the centre of a city",
    "cn_def": "市中心；商業區"
  },
  "speed bump": {
    "pos": "n.phr.",
    "en_def": "a raised part across a road that makes cars slow down",
    "cn_def": "減速丘"
  },
  "planning permission": {
    "pos": "n.phr.",
    "en_def": "official approval needed before you build something",
    "cn_def": "建築許可；規劃許可"
  },
  "shanty town": {
    "pos": "n.phr.",
    "en_def": "an area of very poor homes made from cheap materials",
    "cn_def": "貧民窟；棚戶區"
  },
  "tapestry": {
    "pos": "n.",
    "en_def": "a rich mixture of different things",
    "cn_def": "豐富多彩的組合"
  },
  "debacle": {
    "pos": "n.",
    "en_def": "a complete and embarrassing failure",
    "cn_def": "徹底的失敗；大挫敗"
  },
  "greenbelt": {
    "pos": "n.",
    "en_def": "a protected area of fields and woods around a city",
    "cn_def": "綠帶（城市周圍的保護綠地）"
  },
  "urban renewal": {
    "pos": "n.phr.",
    "en_def": "improving old parts of a city by repairing or rebuilding them",
    "cn_def": "都市更新"
  },
  "a far cry from": {
    "pos": "n.phr.",
    "en_def": "very different from",
    "cn_def": "與……大不相同；相差甚遠"
  },
  "fixture": {
    "pos": "n.",
    "en_def": "a person or thing that is always present in a place",
    "cn_def": "固定存在的人或事物；常客"
  },
  "coveted": {
    "pos": "adj.",
    "en_def": "wanted very much by many people",
    "cn_def": "令人垂涎的；眾所渴望的"
  },
  "acceptable": {
    "pos": "adj.",
    "en_def": "good enough to be allowed or agreed to",
    "cn_def": "可接受的"
  },
  "well-off": {
    "pos": "adj.",
    "en_def": "having plenty of money",
    "cn_def": "富裕的；有錢的"
  },
  "cosmopolitan": {
    "pos": "adj.",
    "en_def": "full of people and ideas from many different countries",
    "cn_def": "國際化的；多元文化的"
  },
  "ever-increasing": {
    "pos": "adj.",
    "en_def": "growing all the time",
    "cn_def": "不斷增加的"
  },
  "dismal": {
    "pos": "adj.",
    "en_def": "sad, dark and without hope",
    "cn_def": "陰鬱的；淒涼的"
  },
  "harmonious": {
    "pos": "adj.",
    "en_def": "fitting together well in a pleasant way",
    "cn_def": "和諧的；協調的"
  },
  "congenial": {
    "pos": "adj.",
    "en_def": "pleasant and friendly",
    "cn_def": "宜人的；投緣的"
  },
  "deluge": {
    "pos": "n.",
    "en_def": "a very large amount of rain or water; a huge amount of something",
    "cn_def": "豪雨；洪水般大量湧來的事物"
  },
  "ambience": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；環境氛圍"
  },
  "boon": {
    "pos": "n.",
    "en_def": "something very helpful",
    "cn_def": "恩惠；福音"
  },
  "waive": {
    "pos": "v.",
    "en_def": "to officially allow someone not to pay or follow a rule",
    "cn_def": "免除；放棄（權利、費用）"
  },
  "subdivide": {
    "pos": "v.",
    "en_def": "to divide something that is already divided into smaller parts",
    "cn_def": "細分；再分割"
  },
  "vie": {
    "pos": "v.",
    "en_def": "to compete strongly with others for something",
    "cn_def": "競爭；角逐"
  },
  "pedestrianise": {
    "pos": "v.",
    "en_def": "to close a street to cars so only people can walk there",
    "cn_def": "將（街道）改為行人徒步區"
  },
  "tout": {
    "pos": "v.",
    "en_def": "to praise something to persuade people it is good",
    "cn_def": "吹捧；大力宣傳"
  },
  "rain garden": {
    "pos": "n.phr.",
    "en_def": "a low garden that collects rainwater from roofs and roads",
    "cn_def": "雨水花園"
  },
  "light pollution": {
    "pos": "n.phr.",
    "en_def": "too much artificial light at night that hides the stars",
    "cn_def": "光害"
  },
  "land use": {
    "pos": "n.phr.",
    "en_def": "the way an area of land is used, such as for homes or farms",
    "cn_def": "土地利用"
  },
  "contractor": {
    "pos": "n.",
    "en_def": "a person or company paid to do building work",
    "cn_def": "承包商"
  },
  "district": {
    "pos": "n.",
    "en_def": "an official area of a city",
    "cn_def": "區；行政區"
  },
  "enclave": {
    "pos": "n.",
    "en_def": "an area where a particular group of people lives",
    "cn_def": "飛地；（特定族群的）聚居地"
  },
  "housing market": {
    "pos": "n.phr.",
    "en_def": "the buying and selling of homes and their prices",
    "cn_def": "房地產市場；房市"
  },
  "building site": {
    "pos": "n.phr.",
    "en_def": "a place where a building is being built",
    "cn_def": "建築工地"
  }
};

const EXTRA_GLOSSES = {};
