// Topic 10 Subunit 1 Quiz Data: City Planning & Land Use 城市規劃與土地利用
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S01 - City Planning & Land Use 城市規劃與土地利用",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "urban planner",
    "pos": "n.",
    "cn_def": "都市規劃師",
    "en_def": "a person who designs how a city grows and is used",
    "sentence": "The {{BLANK}} suggested adding more parks near the old station, and the city council agreed because residents wanted more green areas.",
    "cn": "那位都市規劃師建議在舊車站附近增設更多公園，而市議會同意了，因為居民想要更多綠地。"
  },
  {
    "word": "town planning",
    "pos": "n.phr.",
    "cn_def": "城鎮規劃",
    "en_def": "the work of deciding how land in a town is used",
    "sentence": "Good {{BLANK}} can reduce traffic and noise, but poor decisions can leave a neighbourhood without schools or shops for many years.",
    "cn": "良好的城鎮規劃可以減少交通與噪音，但錯誤的決策可能讓一個社區多年沒有學校或商店。"
  },
  {
    "word": "cityscape",
    "pos": "n.",
    "cn_def": "城市景觀",
    "en_def": "the view of a city's buildings and streets",
    "sentence": "From the top of the hill we could see the whole {{BLANK}} of Taipei, and the lights looked beautiful after the sun went down.",
    "cn": "從山頂上我們可以看到台北的整片城市景觀，而太陽下山後燈光看起來非常美麗。"
  },
  {
    "word": "skyline",
    "pos": "n.",
    "cn_def": "天際線",
    "en_def": "the shape that tall buildings make against the sky",
    "sentence": "Taipei 101 still stands out on the city's {{BLANK}}, although several new towers have been built around it in recent years.",
    "cn": "台北101在這座城市的天際線上依然很突出，儘管近年來它周圍已經蓋了好幾棟新大樓。"
  },
  {
    "word": "downtown",
    "pos": "n.",
    "cn_def": "市中心；商業區",
    "en_def": "the main business area in the centre of a city",
    "sentence": "Many offices are located in the {{BLANK}} area, so the streets are crowded on weekdays but quiet on Sunday mornings.",
    "cn": "許多辦公室都位於市中心地區，所以街道在平日很擁擠，但在星期天早上卻很安靜。"
  },
  {
    "word": "outskirts",
    "pos": "n.",
    "cn_def": "郊區；市郊",
    "en_def": "the outer areas of a town or city",
    "sentence": "My uncle lives on the {{BLANK}} of the city, so the rent is cheaper, but he has to drive for an hour to get to work.",
    "cn": "我叔叔住在城市的郊區，所以房租比較便宜，但他得開一小時的車去上班。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區住宅區",
    "en_def": "a living area at the edge of a large city",
    "sentence": "After their second child was born, the couple moved to a quiet {{BLANK}} because they wanted a garden and a bigger home.",
    "cn": "第二個孩子出生後，這對夫妻搬到一個安靜的郊區住宅區，因為他們想要有花園和更大的房子。"
  },
  {
    "word": "neighbourhood",
    "pos": "n.",
    "cn_def": "社區；街坊",
    "en_def": "an area of a town and the people who live there",
    "sentence": "Our {{BLANK}} has a small park, a bakery and a night market, so we rarely need to drive anywhere at the weekend.",
    "cn": "我們的社區有一座小公園、一家麵包店和一個夜市，所以週末我們很少需要開車去任何地方。"
  },
  {
    "word": "district",
    "pos": "n.",
    "cn_def": "區；行政區",
    "en_def": "an official area of a city",
    "sentence": "Xinyi {{BLANK}} is famous for its shopping malls and offices, while Wanhua is known for its temples and old streets.",
    "cn": "信義區以購物中心和辦公大樓聞名，而萬華則以廟宇和老街著稱。"
  },
  {
    "word": "land use",
    "pos": "n.phr.",
    "cn_def": "土地利用",
    "en_def": "the way an area of land is used, such as for homes or farms",
    "sentence": "The government studied {{BLANK}} in the region carefully, because farmers and builders both wanted the same flat area near the river.",
    "cn": "政府仔細研究了該地區的土地利用，因為農民和建商都想要河邊同一塊平坦的土地。"
  },
  {
    "word": "master plan",
    "pos": "n.phr.",
    "cn_def": "整體規劃；總體計畫",
    "en_def": "a detailed long-term plan for developing an area",
    "sentence": "The city published a ten-year {{BLANK}} for the harbour area, and it includes new homes, a museum and a long cycling path.",
    "cn": "市政府公布了港區的十年整體規劃，而其中包括新住宅、一座博物館和一條很長的自行車道。"
  },
  {
    "word": "urban sprawl",
    "pos": "n.phr.",
    "cn_def": "都市擴張；城市蔓延",
    "en_def": "the uncontrolled spread of a city into the countryside",
    "sentence": "{{BLANK}} has covered many farms with houses and car parks, so people now have to drive further to reach the countryside.",
    "cn": "都市擴張已經讓許多農田被房屋和停車場覆蓋，因此人們現在得開更遠的車才能到鄉間。"
  },
  {
    "word": "greenbelt",
    "pos": "n.",
    "cn_def": "綠帶（城市周圍的保護綠地）",
    "en_def": "a protected area of fields and woods around a city",
    "sentence": "Builders are not allowed to put houses on the {{BLANK}} around the city, so the farmland and forests there are still protected.",
    "cn": "建商不被允許在城市周圍的綠帶上蓋房子，所以那裡的農田和森林仍受到保護。"
  },
  {
    "word": "brownfield site",
    "pos": "n.phr.",
    "cn_def": "棕地（舊工業用地）",
    "en_def": "land that was used for industry and can be built on again",
    "sentence": "The old sugar factory became a {{BLANK}} after it closed, and now the city wants to turn it into an arts centre.",
    "cn": "那座舊糖廠關閉後成為一塊棕地，而現在市政府想把它改造成藝術中心。"
  },
  {
    "word": "greenfield site",
    "pos": "n.phr.",
    "cn_def": "綠地（未開發用地）",
    "en_def": "land that has never been built on before",
    "sentence": "Building on a {{BLANK}} is often cheaper, but environmental groups say it destroys farmland and wildlife habitats.",
    "cn": "在未開發的綠地上興建通常比較便宜，但環保團體表示這會破壞農地和野生動物的棲地。"
  },
  {
    "word": "redevelopment",
    "pos": "n.",
    "cn_def": "重建；再開發",
    "en_def": "the process of rebuilding an old area with new buildings",
    "sentence": "The {{BLANK}} of the old harbour brought new cafés and apartments, but some long-time residents could no longer afford to live there.",
    "cn": "舊港口的重建帶來了新的咖啡店和公寓，但一些長期居民再也負擔不起住在那裡的費用。"
  },
  {
    "word": "urban renewal",
    "pos": "n.phr.",
    "cn_def": "都市更新",
    "en_def": "improving old parts of a city by repairing or rebuilding them",
    "sentence": "Many old apartment buildings in Taipei need {{BLANK}}, but owners often argue for years before they agree on a plan.",
    "cn": "台北許多老舊公寓需要都市更新，但屋主們往往要爭論好幾年才會對計畫達成共識。"
  },
  {
    "word": "gentrification",
    "pos": "n.",
    "cn_def": "仕紳化；中產階級化",
    "en_def": "when richer people move into a poor area and prices rise",
    "sentence": "{{BLANK}} has made the old street more stylish with new coffee shops, yet many local families have been forced to move away.",
    "cn": "仕紳化讓這條老街因新咖啡店而變得更時髦，然而許多當地家庭卻被迫搬離。"
  },
  {
    "word": "new town",
    "pos": "n.phr.",
    "cn_def": "新市鎮",
    "en_def": "a town planned and built all at once",
    "sentence": "Linkou was developed as a {{BLANK}} for people working in Taipei, and it now has its own shopping malls and hospitals.",
    "cn": "林口被開發成一個為在台北工作的人規劃的新市鎮，而現在它擁有自己的購物中心和醫院。"
  },
  {
    "word": "planning permission",
    "pos": "n.phr.",
    "cn_def": "建築許可；規劃許可",
    "en_def": "official approval needed before you build something",
    "sentence": "The family wanted to add a third floor to their house, but they had to wait six months for {{BLANK}} from the council.",
    "cn": "那家人想在房子上加蓋第三層樓，但他們必須等六個月才拿到市議會的建築許可。"
  },
  {
    "word": "city council",
    "pos": "n.phr.",
    "cn_def": "市議會",
    "en_def": "the group of elected people who run a city",
    "sentence": "The {{BLANK}} voted to close the road to cars on Sundays, and most shop owners were happy because more walkers came by.",
    "cn": "市議會投票決定週日禁止汽車進入這條道路，而大多數店家都很高興，因為有更多行人經過。"
  },
  {
    "word": "mayor",
    "pos": "n.",
    "cn_def": "市長",
    "en_def": "the elected leader of a city or town",
    "sentence": "The {{BLANK}} promised to build three new libraries before the next election, but some citizens doubted there was enough money.",
    "cn": "市長承諾在下次選舉前興建三座新圖書館，但有些市民懷疑經費是否足夠。"
  },
  {
    "word": "town hall",
    "pos": "n.phr.",
    "cn_def": "市政廳；鎮公所",
    "en_def": "the building where a town's local government works",
    "sentence": "Residents gathered outside the {{BLANK}} to protest against the new highway, and the meeting lasted until late at night.",
    "cn": "居民們聚集在市政廳外抗議新的高速公路，而那場會議一直持續到深夜。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "佈局；配置",
    "en_def": "the way the parts of a place are arranged",
    "sentence": "The {{BLANK}} of the old town is confusing, because the narrow streets twist and turn, so tourists often get lost.",
    "cn": "這座古城的佈局很令人困惑，因為狹窄的街道彎來彎去，所以觀光客常常迷路。"
  },
  {
    "word": "plaza",
    "pos": "n.",
    "cn_def": "廣場",
    "en_def": "an open public square in a city",
    "sentence": "On summer evenings, families fill the {{BLANK}} in front of the station, and children play while street musicians perform.",
    "cn": "在夏天的傍晚，家庭們擠滿了車站前的廣場，孩子們在玩耍，而街頭音樂家在表演。"
  },
  {
    "word": "public space",
    "pos": "n.phr.",
    "cn_def": "公共空間",
    "en_def": "an area such as a park or square that everyone can use",
    "sentence": "Good {{BLANK}} helps people meet their neighbours, so planners now design more benches, parks and wide pavements.",
    "cn": "良好的公共空間能幫助人們認識鄰居，因此規劃者現在設計了更多長椅、公園和寬人行道。"
  },
  {
    "word": "pedestrianise",
    "pos": "v.",
    "cn_def": "將（街道）改為行人徒步區",
    "en_def": "to close a street to cars so only people can walk there",
    "sentence": "The city decided to {{BLANK}} the busy shopping street, and although drivers complained, the shops soon had more customers.",
    "cn": "市政府決定把那條繁忙的購物街改為行人徒步區，雖然駕駛人抱怨，但商店很快就有了更多顧客。"
  },
  {
    "word": "cul-de-sac",
    "pos": "n.",
    "cn_def": "死巷；死胡同",
    "en_def": "a short street that is closed at one end",
    "sentence": "We live at the end of a quiet {{BLANK}}, so there is very little traffic and the children can ride their bikes safely.",
    "cn": "我們住在一條安靜死巷的盡頭，所以車流非常少，孩子們可以安全地騎腳踏車。"
  },
  {
    "word": "high street",
    "pos": "n.phr.",
    "cn_def": "主要商店街；大街",
    "en_def": "the main shopping street in a town",
    "sentence": "Many small shops on the {{BLANK}} have closed because people now shop online, but the cafés are still busy.",
    "cn": "主要商店街上許多小店已經關門，因為人們現在都在網路上購物，但咖啡店仍然生意興隆。"
  },
  {
    "word": "waterfront",
    "pos": "n.",
    "cn_def": "濱水區；水岸",
    "en_def": "the part of a city next to a river, lake or sea",
    "sentence": "The {{BLANK}} in Tamsui is crowded at sunset, because people love to walk by the river and eat snacks from the stalls.",
    "cn": "淡水的水岸在日落時分很擁擠，因為人們喜歡沿著河邊散步並吃攤販的小吃。"
  },
  {
    "word": "inner city",
    "pos": "n.phr.",
    "cn_def": "舊市區；內城區",
    "en_def": "the older, central part of a city, often with social problems",
    "sentence": "Some {{BLANK}} areas have old buildings and few jobs, so the government is offering money to help small businesses open there.",
    "cn": "一些舊市區地區建築老舊且工作機會稀少，所以政府提供資金幫助小型企業在那裡開業。"
  },
  {
    "word": "mixed-use",
    "pos": "adj.",
    "cn_def": "混合使用的；住商混合的",
    "en_def": "used for both homes and businesses",
    "sentence": "The new {{BLANK}} building has shops on the ground floor and flats above, so residents can buy groceries without leaving home.",
    "cn": "這棟新的住商混合大樓一樓是商店、樓上是公寓，所以居民不用出門就能買到日用品。"
  },
  {
    "word": "megacity",
    "pos": "n.",
    "cn_def": "超大城市",
    "en_def": "a very large city with over ten million people",
    "sentence": "Tokyo is a {{BLANK}} with more than thirty million people in its wider area, yet its trains are famous for being clean and on time.",
    "cn": "東京是一座大都會區人口超過三千萬的超大城市，然而它的火車以乾淨準時聞名。"
  },
  {
    "word": "conurbation",
    "pos": "n.",
    "cn_def": "大都會區；集合城市",
    "en_def": "a large area where several towns have grown together",
    "sentence": "Taipei and New Taipei form one huge {{BLANK}}, so many people live in one city but work in the other every day.",
    "cn": "台北和新北形成了一個巨大的大都會區，所以許多人住在一個城市，但每天在另一個城市工作。"
  }
];

const MCQS = [
  {
    "q": "The _____ suggested adding more parks near the old station, and the city council agreed because residents wanted more green areas.",
    "options": [
      "community garden",
      "urban planner",
      "green building",
      "bricks and mortar"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Good _____ can reduce traffic and noise, but poor decisions can leave a neighbourhood without schools or shops for many years.",
    "options": [
      "community garden",
      "green building",
      "rain garden",
      "town planning"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "From the top of the hill we could see the whole _____ of Taipei, and the lights looked beautiful after the sun went down.",
    "options": [
      "cityscape",
      "car-sharing",
      "asphalt",
      "quandary"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Taipei 101 still stands out on the city's _____, although several new towers have been built around it in recent years.",
    "options": [
      "motorway",
      "detour",
      "skyline",
      "terrace"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Many offices are located in the _____ area, so the streets are crowded on weekdays but quiet on Sunday mornings.",
    "options": [
      "throng",
      "downtown",
      "swathe",
      "resident"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "My uncle lives on the _____ of the city, so the rent is cheaper, but he has to drive for an hour to get to work.",
    "options": [
      "footfall",
      "graffiti",
      "outskirts",
      "atrium"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "After their second child was born, the couple moved to a quiet _____ because they wanted a garden and a bigger home.",
    "options": [
      "apartment",
      "enclave",
      "fee",
      "suburb"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our _____ has a small park, a bakery and a night market, so we rarely need to drive anywhere at the weekend.",
    "options": [
      "neighbourhood",
      "car-sharing",
      "default",
      "patchwork"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Xinyi _____ is famous for its shopping malls and offices, while Wanhua is known for its temples and old streets.",
    "options": [
      "confluence",
      "district",
      "solace",
      "cross-section"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The government studied _____ in the region carefully, because farmers and builders both wanted the same flat area near the river.",
    "options": [
      "vertical garden",
      "green building",
      "land use",
      "light rail"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The city published a ten-year _____ for the harbour area, and it includes new homes, a museum and a long cycling path.",
    "options": [
      "rammed earth",
      "listed building",
      "traffic jam",
      "master plan"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "_____ has covered many farms with houses and car parks, so people now have to drive further to reach the countryside.",
    "options": [
      "urban sprawl",
      "scale model",
      "LED lighting",
      "natural light"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Builders are not allowed to put houses on the _____ around the city, so the farmland and forests there are still protected.",
    "options": [
      "wasteland",
      "bulldozer",
      "homeowner",
      "greenbelt"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The old sugar factory became a _____ after it closed, and now the city wants to turn it into an arts centre.",
    "options": [
      "parking space",
      "brownfield site",
      "concrete jungle",
      "traffic light"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Building on a _____ is often cheaper, but environmental groups say it destroys farmland and wildlife habitats.",
    "options": [
      "greenfield site",
      "light rail",
      "concrete jungle",
      "housing market"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The _____ of the old harbour brought new cafés and apartments, but some long-time residents could no longer afford to live there.",
    "options": [
      "recourse",
      "staircase",
      "redevelopment",
      "enclave"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Many old apartment buildings in Taipei need _____, but owners often argue for years before they agree on a plan.",
    "options": [
      "hustle and bustle",
      "urban renewal",
      "low-emission zone",
      "traffic light"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "_____ has made the old street more stylish with new coffee shops, yet many local families have been forced to move away.",
    "options": [
      "architect",
      "fixture",
      "gentrification",
      "cacophony"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Linkou was developed as a _____ for people working in Taipei, and it now has its own shopping malls and hospitals.",
    "options": [
      "new town",
      "green space",
      "hustle and bustle",
      "bike lane"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The family wanted to add a third floor to their house, but they had to wait six months for _____ from the council.",
    "options": [
      "listed building",
      "building site",
      "heat pump",
      "planning permission"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The _____ voted to close the road to cars on Sundays, and most shop owners were happy because more walkers came by.",
    "options": [
      "a far cry from",
      "city council",
      "street art",
      "LED lighting"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The _____ promised to build three new libraries before the next election, but some citizens doubted there was enough money.",
    "options": [
      "pretext",
      "radius",
      "staircase",
      "mayor"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Residents gathered outside the _____ to protest against the new highway, and the meeting lasted until late at night.",
    "options": [
      "reinforced concrete",
      "structural engineer",
      "town hall",
      "steel frame"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The _____ of the old town is confusing, because the narrow streets twist and turn, so tourists often get lost.",
    "options": [
      "layout",
      "breadth",
      "hub",
      "tenant"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "On summer evenings, families fill the _____ in front of the station, and children play while street musicians perform.",
    "options": [
      "clientele",
      "rent",
      "plaza",
      "detour"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Good _____ helps people meet their neighbours, so planners now design more benches, parks and wide pavements.",
    "options": [
      "housing market",
      "zebra crossing",
      "convenience store",
      "public space"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The city decided to _____ the busy shopping street, and although drivers complained, the shops soon had more customers.",
    "options": [
      "acquiesce",
      "pedestrianise",
      "congregate",
      "reinvigorate"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "We live at the end of a quiet _____, so there is very little traffic and the children can ride their bikes safely.",
    "options": [
      "cul-de-sac",
      "leeway",
      "boon",
      "plaster"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Many small shops on the _____ have closed because people now shop online, but the cafés are still busy.",
    "options": [
      "natural light",
      "sponge city",
      "quality of life",
      "high street"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The _____ in Tamsui is crowded at sunset, because people love to walk by the river and eat snacks from the stalls.",
    "options": [
      "tapestry",
      "waterfront",
      "recourse",
      "pretext"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Some _____ areas have old buildings and few jobs, so the government is offering money to help small businesses open there.",
    "options": [
      "biophilic design",
      "green space",
      "inner city",
      "sponge city"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The new _____ building has shops on the ground floor and flats above, so residents can buy groceries without leaving home.",
    "options": [
      "mixed-use",
      "multicultural",
      "sterile",
      "nondescript"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Tokyo is a _____ with more than thirty million people in its wider area, yet its trains are famous for being clean and on time.",
    "options": [
      "haven",
      "nightlife",
      "terrace",
      "megacity"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Taipei and New Taipei form one huge _____, so many people live in one city but work in the other every day.",
    "options": [
      "flyover",
      "conurbation",
      "enclave",
      "gridlock"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "urban planner": {
    "pos": "n.",
    "en_def": "a person who designs how a city grows and is used",
    "cn_def": "都市規劃師"
  },
  "town planning": {
    "pos": "n.phr.",
    "en_def": "the work of deciding how land in a town is used",
    "cn_def": "城鎮規劃"
  },
  "cityscape": {
    "pos": "n.",
    "en_def": "the view of a city's buildings and streets",
    "cn_def": "城市景觀"
  },
  "skyline": {
    "pos": "n.",
    "en_def": "the shape that tall buildings make against the sky",
    "cn_def": "天際線"
  },
  "downtown": {
    "pos": "n.",
    "en_def": "the main business area in the centre of a city",
    "cn_def": "市中心；商業區"
  },
  "outskirts": {
    "pos": "n.",
    "en_def": "the outer areas of a town or city",
    "cn_def": "郊區；市郊"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "a living area at the edge of a large city",
    "cn_def": "郊區住宅區"
  },
  "neighbourhood": {
    "pos": "n.",
    "en_def": "an area of a town and the people who live there",
    "cn_def": "社區；街坊"
  },
  "district": {
    "pos": "n.",
    "en_def": "an official area of a city",
    "cn_def": "區；行政區"
  },
  "land use": {
    "pos": "n.phr.",
    "en_def": "the way an area of land is used, such as for homes or farms",
    "cn_def": "土地利用"
  },
  "master plan": {
    "pos": "n.phr.",
    "en_def": "a detailed long-term plan for developing an area",
    "cn_def": "整體規劃；總體計畫"
  },
  "urban sprawl": {
    "pos": "n.phr.",
    "en_def": "the uncontrolled spread of a city into the countryside",
    "cn_def": "都市擴張；城市蔓延"
  },
  "greenbelt": {
    "pos": "n.",
    "en_def": "a protected area of fields and woods around a city",
    "cn_def": "綠帶（城市周圍的保護綠地）"
  },
  "brownfield site": {
    "pos": "n.phr.",
    "en_def": "land that was used for industry and can be built on again",
    "cn_def": "棕地（舊工業用地）"
  },
  "greenfield site": {
    "pos": "n.phr.",
    "en_def": "land that has never been built on before",
    "cn_def": "綠地（未開發用地）"
  },
  "redevelopment": {
    "pos": "n.",
    "en_def": "the process of rebuilding an old area with new buildings",
    "cn_def": "重建；再開發"
  },
  "urban renewal": {
    "pos": "n.phr.",
    "en_def": "improving old parts of a city by repairing or rebuilding them",
    "cn_def": "都市更新"
  },
  "gentrification": {
    "pos": "n.",
    "en_def": "when richer people move into a poor area and prices rise",
    "cn_def": "仕紳化；中產階級化"
  },
  "new town": {
    "pos": "n.phr.",
    "en_def": "a town planned and built all at once",
    "cn_def": "新市鎮"
  },
  "planning permission": {
    "pos": "n.phr.",
    "en_def": "official approval needed before you build something",
    "cn_def": "建築許可；規劃許可"
  },
  "city council": {
    "pos": "n.phr.",
    "en_def": "the group of elected people who run a city",
    "cn_def": "市議會"
  },
  "mayor": {
    "pos": "n.",
    "en_def": "the elected leader of a city or town",
    "cn_def": "市長"
  },
  "town hall": {
    "pos": "n.phr.",
    "en_def": "the building where a town's local government works",
    "cn_def": "市政廳；鎮公所"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way the parts of a place are arranged",
    "cn_def": "佈局；配置"
  },
  "plaza": {
    "pos": "n.",
    "en_def": "an open public square in a city",
    "cn_def": "廣場"
  },
  "public space": {
    "pos": "n.phr.",
    "en_def": "an area such as a park or square that everyone can use",
    "cn_def": "公共空間"
  },
  "pedestrianise": {
    "pos": "v.",
    "en_def": "to close a street to cars so only people can walk there",
    "cn_def": "將（街道）改為行人徒步區"
  },
  "cul-de-sac": {
    "pos": "n.",
    "en_def": "a short street that is closed at one end",
    "cn_def": "死巷；死胡同"
  },
  "high street": {
    "pos": "n.phr.",
    "en_def": "the main shopping street in a town",
    "cn_def": "主要商店街；大街"
  },
  "waterfront": {
    "pos": "n.",
    "en_def": "the part of a city next to a river, lake or sea",
    "cn_def": "濱水區；水岸"
  },
  "inner city": {
    "pos": "n.phr.",
    "en_def": "the older, central part of a city, often with social problems",
    "cn_def": "舊市區；內城區"
  },
  "mixed-use": {
    "pos": "adj.",
    "en_def": "used for both homes and businesses",
    "cn_def": "混合使用的；住商混合的"
  },
  "megacity": {
    "pos": "n.",
    "en_def": "a very large city with over ten million people",
    "cn_def": "超大城市"
  },
  "conurbation": {
    "pos": "n.",
    "en_def": "a large area where several towns have grown together",
    "cn_def": "大都會區；集合城市"
  },
  "community garden": {
    "pos": "n.phr.",
    "en_def": "a shared piece of land where local people grow plants together",
    "cn_def": "社區花園"
  },
  "green building": {
    "pos": "n.phr.",
    "en_def": "a building designed to save energy and water and harm nature less",
    "cn_def": "綠建築"
  },
  "bricks and mortar": {
    "pos": "n.phr.",
    "en_def": "real buildings, especially shops, rather than online businesses",
    "cn_def": "實體店面；實體建築"
  },
  "rain garden": {
    "pos": "n.phr.",
    "en_def": "a low garden that collects rainwater from roofs and roads",
    "cn_def": "雨水花園"
  },
  "car-sharing": {
    "pos": "n.",
    "en_def": "a service where people rent cars for short periods",
    "cn_def": "汽車共享"
  },
  "asphalt": {
    "pos": "n.",
    "en_def": "a black sticky material used to cover roads",
    "cn_def": "柏油；瀝青"
  },
  "quandary": {
    "pos": "n.",
    "en_def": "a situation where it is hard to decide what to do",
    "cn_def": "困惑；左右為難"
  },
  "motorway": {
    "pos": "n.",
    "en_def": "a wide fast road for travelling long distances",
    "cn_def": "高速公路"
  },
  "detour": {
    "pos": "n.",
    "en_def": "a longer route taken to avoid a problem",
    "cn_def": "繞道；繞行路線"
  },
  "terrace": {
    "pos": "n.",
    "en_def": "a flat outdoor area next to a building or on a roof",
    "cn_def": "露台；平台"
  },
  "throng": {
    "pos": "n.",
    "en_def": "a large crowd of people",
    "cn_def": "人群；群眾"
  },
  "swathe": {
    "pos": "n.",
    "en_def": "a long wide area of land",
    "cn_def": "一大片（土地）"
  },
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民；住戶"
  },
  "footfall": {
    "pos": "n.",
    "en_def": "the number of people who visit a shop or area",
    "cn_def": "人流量；來客數"
  },
  "graffiti": {
    "pos": "n.",
    "en_def": "words or pictures painted on walls without permission",
    "cn_def": "塗鴉"
  },
  "atrium": {
    "pos": "n.",
    "en_def": "a large open space inside a building, often with a glass roof",
    "cn_def": "中庭；天井大廳"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in on one floor of a building",
    "cn_def": "公寓"
  },
  "enclave": {
    "pos": "n.",
    "en_def": "an area where a particular group of people lives",
    "cn_def": "飛地；（特定族群的）聚居地"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money you pay for a service or to enter a place",
    "cn_def": "費用"
  },
  "default": {
    "pos": "n.",
    "en_def": "what happens or is chosen if no other choice is made",
    "cn_def": "預設（值）；預設選項"
  },
  "patchwork": {
    "pos": "n.",
    "en_def": "something made of many different parts that do not match",
    "cn_def": "拼湊物；大雜燴"
  },
  "confluence": {
    "pos": "n.",
    "en_def": "the place where two rivers join",
    "cn_def": "（河流的）匯流處"
  },
  "solace": {
    "pos": "n.",
    "en_def": "comfort when you are sad or worried",
    "cn_def": "安慰；慰藉"
  },
  "cross-section": {
    "pos": "n.",
    "en_def": "a group that includes many different types of people",
    "cn_def": "橫斷面；具代表性的一群人"
  },
  "vertical garden": {
    "pos": "n.phr.",
    "en_def": "plants grown up a wall or on shelves rather than on the ground",
    "cn_def": "垂直花園"
  },
  "light rail": {
    "pos": "n.phr.",
    "en_def": "a modern electric train system that runs mainly on city streets",
    "cn_def": "輕軌"
  },
  "rammed earth": {
    "pos": "n.phr.",
    "en_def": "soil pressed hard into walls as a building material",
    "cn_def": "夯土"
  },
  "listed building": {
    "pos": "n.phr.",
    "en_def": "an old building that is protected by law",
    "cn_def": "受保護的歷史建築"
  },
  "traffic jam": {
    "pos": "n.phr.",
    "en_def": "a long line of vehicles that cannot move or move slowly",
    "cn_def": "塞車；交通堵塞"
  },
  "scale model": {
    "pos": "n.phr.",
    "en_def": "a small copy of a building with the same proportions",
    "cn_def": "比例模型"
  },
  "led lighting": {
    "pos": "n.phr.",
    "en_def": "lights that use small electronic bulbs and very little power",
    "cn_def": "LED照明"
  },
  "natural light": {
    "pos": "n.phr.",
    "en_def": "light from the sun rather than from lamps",
    "cn_def": "自然光"
  },
  "wasteland": {
    "pos": "n.",
    "en_def": "an empty area of land that is not used or cared for",
    "cn_def": "荒地；廢地"
  },
  "bulldozer": {
    "pos": "n.",
    "en_def": "a powerful machine that pushes earth and knocks down buildings",
    "cn_def": "推土機"
  },
  "homeowner": {
    "pos": "n.",
    "en_def": "a person who owns the home they live in",
    "cn_def": "屋主；房屋所有權人"
  },
  "parking space": {
    "pos": "n.phr.",
    "en_def": "a place where one car can be parked",
    "cn_def": "停車位"
  },
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city with many big grey buildings and few green areas",
    "cn_def": "水泥叢林"
  },
  "traffic light": {
    "pos": "n.phr.",
    "en_def": "a set of red, yellow and green lights that control traffic",
    "cn_def": "紅綠燈"
  },
  "housing market": {
    "pos": "n.phr.",
    "en_def": "the buying and selling of homes and their prices",
    "cn_def": "房地產市場；房市"
  },
  "recourse": {
    "pos": "n.",
    "en_def": "a possible way to get help in a difficult situation",
    "cn_def": "求助的途徑；依靠"
  },
  "staircase": {
    "pos": "n.",
    "en_def": "a set of stairs inside a building",
    "cn_def": "樓梯"
  },
  "hustle and bustle": {
    "pos": "n.phr.",
    "en_def": "the noise and busy activity of a crowded place",
    "cn_def": "熙來攘往；喧囂忙碌"
  },
  "low-emission zone": {
    "pos": "n.phr.",
    "en_def": "an area where old polluting vehicles must pay or cannot enter",
    "cn_def": "低排放區"
  },
  "architect": {
    "pos": "n.",
    "en_def": "a person whose job is to design buildings",
    "cn_def": "建築師"
  },
  "fixture": {
    "pos": "n.",
    "en_def": "a person or thing that is always present in a place",
    "cn_def": "固定存在的人或事物；常客"
  },
  "cacophony": {
    "pos": "n.",
    "en_def": "a loud, unpleasant mixture of sounds",
    "cn_def": "嘈雜聲；刺耳的雜音"
  },
  "green space": {
    "pos": "n.phr.",
    "en_def": "an area of grass, trees or plants in a town",
    "cn_def": "綠地；綠色空間"
  },
  "bike lane": {
    "pos": "n.phr.",
    "en_def": "a part of a road only for bicycles",
    "cn_def": "自行車道"
  },
  "building site": {
    "pos": "n.phr.",
    "en_def": "a place where a building is being built",
    "cn_def": "建築工地"
  },
  "heat pump": {
    "pos": "n.phr.",
    "en_def": "a machine that moves heat from outside air or ground into a building",
    "cn_def": "熱泵"
  },
  "a far cry from": {
    "pos": "n.phr.",
    "en_def": "very different from",
    "cn_def": "與……大不相同；相差甚遠"
  },
  "street art": {
    "pos": "n.phr.",
    "en_def": "paintings and pictures made on walls in public places",
    "cn_def": "街頭藝術"
  },
  "pretext": {
    "pos": "n.",
    "en_def": "a false reason given to hide the real one",
    "cn_def": "藉口；托辭"
  },
  "radius": {
    "pos": "n.",
    "en_def": "the distance from the centre of a circle to its edge; an area around a point",
    "cn_def": "半徑；（某點周圍的）範圍"
  },
  "reinforced concrete": {
    "pos": "n.phr.",
    "en_def": "concrete made stronger with steel bars inside it",
    "cn_def": "鋼筋混凝土"
  },
  "structural engineer": {
    "pos": "n.phr.",
    "en_def": "an expert who makes sure buildings are strong and safe",
    "cn_def": "結構工程師"
  },
  "steel frame": {
    "pos": "n.phr.",
    "en_def": "a skeleton of steel beams that holds up a building",
    "cn_def": "鋼構骨架"
  },
  "breadth": {
    "pos": "n.",
    "en_def": "the distance from one side to the other; wide range",
    "cn_def": "寬度；廣度"
  },
  "hub": {
    "pos": "n.",
    "en_def": "the central or most important place for an activity",
    "cn_def": "中心；樞紐"
  },
  "tenant": {
    "pos": "n.",
    "en_def": "a person who pays rent to live in a place",
    "cn_def": "房客；租戶"
  },
  "clientele": {
    "pos": "n.",
    "en_def": "all the customers of a shop or business",
    "cn_def": "（全體）顧客；客群"
  },
  "rent": {
    "pos": "n.",
    "en_def": "money paid regularly to live in a place you do not own",
    "cn_def": "租金；房租"
  },
  "zebra crossing": {
    "pos": "n.phr.",
    "en_def": "black and white stripes on a road where people can cross",
    "cn_def": "斑馬線"
  },
  "convenience store": {
    "pos": "n.phr.",
    "en_def": "a small shop that is open long hours and sells everyday items",
    "cn_def": "便利商店"
  },
  "acquiesce": {
    "pos": "v.",
    "en_def": "to agree to something without arguing, often unwillingly",
    "cn_def": "默許；勉強同意"
  },
  "congregate": {
    "pos": "v.",
    "en_def": "to gather together in a group",
    "cn_def": "聚集"
  },
  "reinvigorate": {
    "pos": "v.",
    "en_def": "to give new energy and strength to something",
    "cn_def": "使重新振作；重新注入活力"
  },
  "leeway": {
    "pos": "n.",
    "en_def": "freedom to decide or act as you want",
    "cn_def": "迴旋餘地；自由空間"
  },
  "boon": {
    "pos": "n.",
    "en_def": "something very helpful",
    "cn_def": "恩惠；福音"
  },
  "plaster": {
    "pos": "n.",
    "en_def": "a paste that becomes hard and smooth when it dries on walls",
    "cn_def": "灰泥；石膏"
  },
  "sponge city": {
    "pos": "n.phr.",
    "en_def": "a city designed to soak up and store rainwater like a sponge",
    "cn_def": "海綿城市"
  },
  "quality of life": {
    "pos": "n.phr.",
    "en_def": "how good and comfortable a person's life is",
    "cn_def": "生活品質"
  },
  "tapestry": {
    "pos": "n.",
    "en_def": "a rich mixture of different things",
    "cn_def": "豐富多彩的組合"
  },
  "biophilic design": {
    "pos": "n.phr.",
    "en_def": "designing buildings that bring people closer to nature",
    "cn_def": "親生物設計"
  },
  "multicultural": {
    "pos": "adj.",
    "en_def": "including people of many different cultures",
    "cn_def": "多元文化的"
  },
  "sterile": {
    "pos": "adj.",
    "en_def": "without life, warmth or character",
    "cn_def": "缺乏生氣的；了無生趣的"
  },
  "nondescript": {
    "pos": "adj.",
    "en_def": "very ordinary, with no interesting features",
    "cn_def": "毫無特色的；平凡的"
  },
  "haven": {
    "pos": "n.",
    "en_def": "a safe and peaceful place",
    "cn_def": "避風港；安全的地方"
  },
  "nightlife": {
    "pos": "n.",
    "en_def": "entertainment such as bars and clubs that is open at night",
    "cn_def": "夜生活"
  },
  "flyover": {
    "pos": "n.",
    "en_def": "a bridge that carries one road over another",
    "cn_def": "高架橋；天橋"
  },
  "gridlock": {
    "pos": "n.",
    "en_def": "a situation where traffic cannot move at all",
    "cn_def": "交通癱瘓；完全堵塞"
  }
};

const EXTRA_GLOSSES = {};
