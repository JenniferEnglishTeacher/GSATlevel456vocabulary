// Topic 10 Subunit 4 Quiz Data: Transport & Getting Around 交通與移動
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S04 - Transport & Getting Around 交通與移動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars, buses and other vehicles on a road",
    "sentence": "The {{BLANK}} is always heavy near the school at 7:30, so many parents now let their children take the MRT instead.",
    "cn": "早上七點半學校附近的車流總是很多，所以許多家長現在讓孩子改搭捷運。"
  },
  {
    "word": "traffic jam",
    "pos": "n.phr.",
    "cn_def": "塞車；交通堵塞",
    "en_def": "a long line of vehicles that cannot move or move slowly",
    "sentence": "We were stuck in a {{BLANK}} for two hours on the way to Yilan, so we missed the start of the concert.",
    "cn": "我們在去宜蘭的路上塞車塞了兩個小時，所以錯過了音樂會的開場。"
  },
  {
    "word": "rush hour",
    "pos": "n.phr.",
    "cn_def": "尖峰時段",
    "en_def": "the busy time when most people travel to or from work",
    "sentence": "The trains are packed during {{BLANK}}, so I leave home thirty minutes earlier to get a seat.",
    "cn": "火車在尖峰時段擠滿了人，所以我提早三十分鐘出門好搶到座位。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work or school",
    "sentence": "My sister {{BLANK}} from Taoyuan to Taipei every day, and she uses the long train ride to read novels.",
    "cn": "我姊姊每天從桃園通勤到台北，而她利用漫長的火車車程閱讀小說。"
  },
  {
    "word": "pedestrian",
    "pos": "n.",
    "cn_def": "行人",
    "en_def": "a person who is walking in a street",
    "sentence": "Drivers must stop for every {{BLANK}} at a crossing, but some still drive through without slowing down.",
    "cn": "駕駛人必須在斑馬線前為每位行人停車，但有些人仍然沒有減速就開過去。"
  },
  {
    "word": "cyclist",
    "pos": "n.",
    "cn_def": "騎單車的人",
    "en_def": "a person who rides a bicycle",
    "sentence": "The new path keeps every {{BLANK}} away from the cars, so more students now ride their bikes to school.",
    "cn": "新的車道讓每位騎單車的人遠離汽車，所以現在有更多學生騎腳踏車上學。"
  },
  {
    "word": "bike lane",
    "pos": "n.phr.",
    "cn_def": "自行車道",
    "en_def": "a part of a road only for bicycles",
    "sentence": "The city painted a green {{BLANK}} along the main road, but delivery scooters often park on it, which is dangerous.",
    "cn": "市政府沿著主要道路畫了一條綠色自行車道，但外送機車常常停在上面，這很危險。"
  },
  {
    "word": "zebra crossing",
    "pos": "n.phr.",
    "cn_def": "斑馬線",
    "en_def": "black and white stripes on a road where people can cross",
    "sentence": "Always cross the street at a {{BLANK}}, because drivers expect people there and are more likely to stop.",
    "cn": "一定要走斑馬線過馬路，因為駕駛人預期那裡會有行人，所以更可能停車。"
  },
  {
    "word": "pavement",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "the path at the side of a road for people to walk on",
    "sentence": "In many old streets, scooters are parked on the {{BLANK}}, so people with prams or wheelchairs have to walk in the road.",
    "cn": "在許多老街上，機車停在人行道上，所以推嬰兒車或坐輪椅的人只好走在馬路上。"
  },
  {
    "word": "intersection",
    "pos": "n.",
    "cn_def": "十字路口；交叉口",
    "en_def": "a place where two or more roads cross",
    "sentence": "There are many accidents at this busy {{BLANK}}, so the police want to add more traffic cameras.",
    "cn": "這個繁忙的十字路口發生過許多事故，所以警方想加裝更多交通攝影機。"
  },
  {
    "word": "roundabout",
    "pos": "n.",
    "cn_def": "圓環",
    "en_def": "a circular place where roads meet and cars drive around",
    "sentence": "Drivers must give way to cars already on the {{BLANK}}, but many tourists are confused because they rarely use them at home.",
    "cn": "駕駛人必須禮讓已經在圓環上的車輛，但許多觀光客很困惑，因為他們在家鄉很少用到圓環。"
  },
  {
    "word": "traffic light",
    "pos": "n.phr.",
    "cn_def": "紅綠燈",
    "en_def": "a set of red, yellow and green lights that control traffic",
    "sentence": "The {{BLANK}} near our school stays red for a long time, so students often wait in the hot sun.",
    "cn": "我們學校附近的紅綠燈紅燈很久，所以學生們常常在大太陽下等待。"
  },
  {
    "word": "speed bump",
    "pos": "n.phr.",
    "cn_def": "減速丘",
    "en_def": "a raised part across a road that makes cars slow down",
    "sentence": "The residents asked for a {{BLANK}} outside the kindergarten, because some drivers were going far too fast.",
    "cn": "居民們要求在幼兒園外設置減速丘，因為有些駕駛人開得太快了。"
  },
  {
    "word": "motorway",
    "pos": "n.",
    "cn_def": "高速公路",
    "en_def": "a wide fast road for travelling long distances",
    "sentence": "It takes about four hours to drive down the {{BLANK}} to Kaohsiung, but the high-speed train takes only ninety minutes.",
    "cn": "沿著高速公路開車到高雄大約要四小時，但搭高鐵只需要九十分鐘。"
  },
  {
    "word": "ring road",
    "pos": "n.phr.",
    "cn_def": "環狀道路；外環道",
    "en_def": "a road that goes around a city so traffic can avoid the centre",
    "sentence": "Trucks now use the new {{BLANK}}, so the old town centre is much quieter and the air is cleaner.",
    "cn": "卡車現在改走新的環狀道路，所以舊市中心安靜多了，空氣也更乾淨。"
  },
  {
    "word": "flyover",
    "pos": "n.",
    "cn_def": "高架橋；天橋",
    "en_def": "a bridge that carries one road over another",
    "sentence": "The city removed the ugly concrete {{BLANK}} above the old market, and the street below suddenly became bright and pleasant.",
    "cn": "市政府拆除了舊市場上方醜陋的水泥高架橋，而下面的街道頓時變得明亮又宜人。"
  },
  {
    "word": "underpass",
    "pos": "n.",
    "cn_def": "地下道",
    "en_def": "a road or path that goes under another road",
    "sentence": "Pedestrians can use the {{BLANK}} to cross the busy road safely, although some people say it feels dark at night.",
    "cn": "行人可以利用地下道安全地穿越繁忙的馬路，雖然有些人說它晚上感覺很陰暗。"
  },
  {
    "word": "metro",
    "pos": "n.",
    "cn_def": "地鐵；捷運",
    "en_def": "an underground train system in a city",
    "sentence": "Taipei's {{BLANK}} is clean, cheap and fast, so many residents do not feel they need to own a car.",
    "cn": "台北的捷運乾淨、便宜又快速，所以許多居民覺得自己不需要擁有汽車。"
  },
  {
    "word": "tram",
    "pos": "n.",
    "cn_def": "路面電車",
    "en_def": "an electric vehicle that runs on rails along city streets",
    "sentence": "The old {{BLANK}} in Hong Kong is slow and noisy, but tourists love riding it because the tickets are cheap and the views are great.",
    "cn": "香港的老電車又慢又吵，但觀光客喜歡搭乘，因為票價便宜而且風景很棒。"
  },
  {
    "word": "light rail",
    "pos": "n.phr.",
    "cn_def": "輕軌",
    "en_def": "a modern electric train system that runs mainly on city streets",
    "sentence": "The new {{BLANK}} connects the station to the university, so students no longer need to wait for crowded buses.",
    "cn": "新的輕軌連接車站和大學，所以學生們不再需要等擁擠的公車。"
  },
  {
    "word": "bus lane",
    "pos": "n.phr.",
    "cn_def": "公車專用道",
    "en_def": "a part of the road that only buses can use",
    "sentence": "Buses are much faster since the city opened a {{BLANK}}, but car drivers complain that the other lanes are now slower.",
    "cn": "自從市政府開設公車專用道後，公車快多了，但汽車駕駛人抱怨其他車道現在變慢了。"
  },
  {
    "word": "park-and-ride",
    "pos": "n.",
    "cn_def": "停車轉乘",
    "en_def": "a system where you park outside a city and take a bus in",
    "sentence": "The {{BLANK}} near the motorway is popular with commuters, because parking downtown is very expensive.",
    "cn": "高速公路附近的停車轉乘很受通勤族歡迎，因為在市中心停車非常貴。"
  },
  {
    "word": "car-sharing",
    "pos": "n.",
    "cn_def": "汽車共享",
    "en_def": "a service where people rent cars for short periods",
    "sentence": "{{BLANK}} is becoming popular among young people, because they can use a car when they need one without paying for parking.",
    "cn": "汽車共享在年輕人之間越來越受歡迎，因為他們需要時就能用車，而且不必支付停車費。"
  },
  {
    "word": "carpool",
    "pos": "v.",
    "cn_def": "共乘；共乘汽車",
    "en_def": "to share a car journey with other people",
    "sentence": "Four teachers {{BLANK}} to school every morning, so they save money on petrol and there are fewer cars on the road.",
    "cn": "四位老師每天早上共乘一輛車到學校，所以他們省下了油錢，路上的車也更少。"
  },
  {
    "word": "ride-hailing",
    "pos": "adj.",
    "cn_def": "叫車（服務）的",
    "en_def": "booking a car and driver through a phone app",
    "sentence": "Many people use {{BLANK}} apps late at night, because buses stop running and taxis can be hard to find.",
    "cn": "許多人深夜時使用叫車應用程式，因為公車停駛，而且計程車可能很難叫到。"
  },
  {
    "word": "e-scooter",
    "pos": "n.",
    "cn_def": "電動滑板車",
    "en_def": "a small electric scooter that you stand on",
    "sentence": "Riding an {{BLANK}} on the pavement is now banned in some cities, because several walkers were hurt in accidents.",
    "cn": "在某些城市，在人行道上騎電動滑板車現在是被禁止的，因為有幾位行人在事故中受傷。"
  },
  {
    "word": "parking space",
    "pos": "n.phr.",
    "cn_def": "停車位",
    "en_def": "a place where one car can be parked",
    "sentence": "It took us thirty minutes to find a {{BLANK}} near the night market, so next time we will take the bus.",
    "cn": "我們花了三十分鐘才在夜市附近找到停車位，所以下次我們會搭公車。"
  },
  {
    "word": "parking meter",
    "pos": "n.phr.",
    "cn_def": "停車計時器；停車收費器",
    "en_def": "a machine on a street that you pay to park a car",
    "sentence": "My dad forgot to pay the {{BLANK}}, so he got a ticket while we were eating lunch.",
    "cn": "我爸忘了繳停車計時器的費用，所以我們在吃午餐時他就被開了罰單。"
  },
  {
    "word": "fare",
    "pos": "n.",
    "cn_def": "車資；票價",
    "en_def": "the money you pay to travel on a bus, train or taxi",
    "sentence": "The bus {{BLANK}} is very cheap for students, so most of my classmates use public buses after school.",
    "cn": "學生的公車票價很便宜，所以我大部分的同學放學後都搭公車。"
  },
  {
    "word": "walkable",
    "pos": "adj.",
    "cn_def": "適合步行的",
    "en_def": "safe and pleasant for walking around",
    "sentence": "Kyoto is a very {{BLANK}} city, because shops, temples and parks are close together and the streets are quiet.",
    "cn": "京都是一座非常適合步行的城市，因為商店、寺廟和公園彼此距離很近，而且街道很安靜。"
  },
  {
    "word": "car-free",
    "pos": "adj.",
    "cn_def": "無車的；禁止汽車的",
    "en_def": "where cars are not allowed",
    "sentence": "The city holds a {{BLANK}} day every September, and families ride bicycles on roads that are usually full of cars.",
    "cn": "這座城市每年九月舉辦無車日，而家庭們在平常塞滿汽車的道路上騎腳踏車。"
  },
  {
    "word": "gridlock",
    "pos": "n.",
    "cn_def": "交通癱瘓；完全堵塞",
    "en_def": "a situation where traffic cannot move at all",
    "sentence": "The parade caused {{BLANK}} in the city centre, and some people left their cars and walked home instead.",
    "cn": "遊行造成市中心交通完全癱瘓，而有些人乾脆把車丟下走路回家。"
  },
  {
    "word": "low-emission zone",
    "pos": "n.phr.",
    "cn_def": "低排放區",
    "en_def": "an area where old polluting vehicles must pay or cannot enter",
    "sentence": "London's {{BLANK}} charges old diesel cars a daily fee, so the air in the centre has become cleaner.",
    "cn": "倫敦的低排放區向老舊柴油車收取每日費用，所以市中心的空氣變得更乾淨了。"
  }
];

const MCQS = [
  {
    "q": "The _____ is always heavy near the school at 7:30, so many parents now let their children take the MRT instead.",
    "options": [
      "boundary",
      "outcry",
      "traffic",
      "rent"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "We were stuck in a _____ for two hours on the way to Yilan, so we missed the start of the concert.",
    "options": [
      "greenfield site",
      "green wall",
      "building code",
      "traffic jam"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The trains are packed during _____, so I leave home thirty minutes earlier to get a seat.",
    "options": [
      "rush hour",
      "concrete jungle",
      "community garden",
      "thermal mass"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "My sister _____ from Taoyuan to Taipei every day, and she uses the long train ride to read novels.",
    "options": [
      "appeal",
      "commute",
      "vie",
      "buttress"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Drivers must stop for every _____ at a crossing, but some still drive through without slowing down.",
    "options": [
      "graffiti",
      "mainstay",
      "swathe",
      "pedestrian"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The new path keeps every _____ away from the cars, so more students now ride their bikes to school.",
    "options": [
      "cyclist",
      "gradient",
      "bamboo",
      "boon"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The city painted a green _____ along the main road, but delivery scooters often park on it, which is dangerous.",
    "options": [
      "steel frame",
      "urban renewal",
      "bike lane",
      "master plan"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Always cross the street at a _____, because drivers expect people there and are more likely to stop.",
    "options": [
      "street art",
      "zebra crossing",
      "urban farming",
      "permeable surface"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "In many old streets, scooters are parked on the _____, so people with prams or wheelchairs have to walk in the road.",
    "options": [
      "pavement",
      "loft",
      "outskirts",
      "terrace"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "There are many accidents at this busy _____, so the police want to add more traffic cameras.",
    "options": [
      "district",
      "epicentre",
      "bamboo",
      "intersection"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Drivers must give way to cars already on the _____, but many tourists are confused because they rarely use them at home.",
    "options": [
      "cantilever",
      "cul-de-sac",
      "roundabout",
      "skyline"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ near our school stays red for a long time, so students often wait in the hot sun.",
    "options": [
      "urban forest",
      "traffic light",
      "planning permission",
      "green space"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The residents asked for a _____ outside the kindergarten, because some drivers were going far too fast.",
    "options": [
      "natural light",
      "urban planner",
      "passive house",
      "speed bump"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "It takes about four hours to drive down the _____ to Kaohsiung, but the high-speed train takes only ninety minutes.",
    "options": [
      "glass",
      "motorway",
      "crux",
      "tapestry"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Trucks now use the new _____, so the old town centre is much quieter and the air is cleaner.",
    "options": [
      "ring road",
      "a breath of fresh air",
      "housing estate",
      "urban renewal"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The city removed the ugly concrete _____ above the old market, and the street below suddenly became bright and pleasant.",
    "options": [
      "haven",
      "ceiling",
      "flyover",
      "cityscape"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Pedestrians can use the _____ to cross the busy road safely, although some people say it feels dark at night.",
    "options": [
      "forefront",
      "nightlife",
      "squatter",
      "underpass"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Taipei's _____ is clean, cheap and fast, so many residents do not feel they need to own a car.",
    "options": [
      "metro",
      "default",
      "rooftop",
      "constituency"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The old _____ in Hong Kong is slow and noisy, but tourists love riding it because the tickets are cheap and the views are great.",
    "options": [
      "throng",
      "tram",
      "detour",
      "homeowner"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new _____ connects the station to the university, so students no longer need to wait for crowded buses.",
    "options": [
      "community garden",
      "green wall",
      "light rail",
      "studio flat"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Buses are much faster since the city opened a _____, but car drivers complain that the other lanes are now slower.",
    "options": [
      "bus lane",
      "high street",
      "scale model",
      "brownfield site"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The _____ near the motorway is popular with commuters, because parking downtown is very expensive.",
    "options": [
      "bricklayer",
      "debacle",
      "precinct",
      "park-and-ride"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "_____ is becoming popular among young people, because they can use a car when they need one without paying for parking.",
    "options": [
      "plaster",
      "cityscape",
      "car-sharing",
      "boundary"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Four teachers _____ to school every morning, so they save money on petrol and there are fewer cars on the road.",
    "options": [
      "acquiesce",
      "carpool",
      "dampen",
      "forestall"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Many people use _____ apps late at night, because buses stop running and taxis can be hard to find.",
    "options": [
      "ride-hailing",
      "secluded",
      "interconnected",
      "ominous"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Riding an _____ on the pavement is now banned in some cities, because several walkers were hurt in accidents.",
    "options": [
      "culprit",
      "detour",
      "e-scooter",
      "rooftop"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "It took us thirty minutes to find a _____ near the night market, so next time we will take the bus.",
    "options": [
      "noise complaint",
      "building site",
      "street trees",
      "parking space"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "My dad forgot to pay the _____, so he got a ticket while we were eating lunch.",
    "options": [
      "permeable surface",
      "parking meter",
      "urban forest",
      "bricks and mortar"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The bus _____ is very cheap for students, so most of my classmates use public buses after school.",
    "options": [
      "facade",
      "cement",
      "fare",
      "skylight"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Kyoto is a very _____ city, because shops, temples and parks are close together and the streets are quiet.",
    "options": [
      "audacious",
      "run-down",
      "panoramic",
      "walkable"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The city holds a _____ day every September, and families ride bicycles on roads that are usually full of cars.",
    "options": [
      "residential",
      "car-free",
      "congenial",
      "3D-printed"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The parade caused _____ in the city centre, and some people left their cars and walked home instead.",
    "options": [
      "gridlock",
      "malaise",
      "detour",
      "solace"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "London's _____ charges old diesel cars a daily fee, so the air in the centre has become cleaner.",
    "options": [
      "rammed earth",
      "structural engineer",
      "public space",
      "low-emission zone"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses and other vehicles on a road",
    "cn_def": "交通；車流"
  },
  "traffic jam": {
    "pos": "n.phr.",
    "en_def": "a long line of vehicles that cannot move or move slowly",
    "cn_def": "塞車；交通堵塞"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busy time when most people travel to or from work",
    "cn_def": "尖峰時段"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work or school",
    "cn_def": "通勤"
  },
  "pedestrian": {
    "pos": "n.",
    "en_def": "a person who is walking in a street",
    "cn_def": "行人"
  },
  "cyclist": {
    "pos": "n.",
    "en_def": "a person who rides a bicycle",
    "cn_def": "騎單車的人"
  },
  "bike lane": {
    "pos": "n.phr.",
    "en_def": "a part of a road only for bicycles",
    "cn_def": "自行車道"
  },
  "zebra crossing": {
    "pos": "n.phr.",
    "en_def": "black and white stripes on a road where people can cross",
    "cn_def": "斑馬線"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "intersection": {
    "pos": "n.",
    "en_def": "a place where two or more roads cross",
    "cn_def": "十字路口；交叉口"
  },
  "roundabout": {
    "pos": "n.",
    "en_def": "a circular place where roads meet and cars drive around",
    "cn_def": "圓環"
  },
  "traffic light": {
    "pos": "n.phr.",
    "en_def": "a set of red, yellow and green lights that control traffic",
    "cn_def": "紅綠燈"
  },
  "speed bump": {
    "pos": "n.phr.",
    "en_def": "a raised part across a road that makes cars slow down",
    "cn_def": "減速丘"
  },
  "motorway": {
    "pos": "n.",
    "en_def": "a wide fast road for travelling long distances",
    "cn_def": "高速公路"
  },
  "ring road": {
    "pos": "n.phr.",
    "en_def": "a road that goes around a city so traffic can avoid the centre",
    "cn_def": "環狀道路；外環道"
  },
  "flyover": {
    "pos": "n.",
    "en_def": "a bridge that carries one road over another",
    "cn_def": "高架橋；天橋"
  },
  "underpass": {
    "pos": "n.",
    "en_def": "a road or path that goes under another road",
    "cn_def": "地下道"
  },
  "metro": {
    "pos": "n.",
    "en_def": "an underground train system in a city",
    "cn_def": "地鐵；捷運"
  },
  "tram": {
    "pos": "n.",
    "en_def": "an electric vehicle that runs on rails along city streets",
    "cn_def": "路面電車"
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
  "park-and-ride": {
    "pos": "n.",
    "en_def": "a system where you park outside a city and take a bus in",
    "cn_def": "停車轉乘"
  },
  "car-sharing": {
    "pos": "n.",
    "en_def": "a service where people rent cars for short periods",
    "cn_def": "汽車共享"
  },
  "carpool": {
    "pos": "v.",
    "en_def": "to share a car journey with other people",
    "cn_def": "共乘；共乘汽車"
  },
  "ride-hailing": {
    "pos": "adj.",
    "en_def": "booking a car and driver through a phone app",
    "cn_def": "叫車（服務）的"
  },
  "e-scooter": {
    "pos": "n.",
    "en_def": "a small electric scooter that you stand on",
    "cn_def": "電動滑板車"
  },
  "parking space": {
    "pos": "n.phr.",
    "en_def": "a place where one car can be parked",
    "cn_def": "停車位"
  },
  "parking meter": {
    "pos": "n.phr.",
    "en_def": "a machine on a street that you pay to park a car",
    "cn_def": "停車計時器；停車收費器"
  },
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel on a bus, train or taxi",
    "cn_def": "車資；票價"
  },
  "walkable": {
    "pos": "adj.",
    "en_def": "safe and pleasant for walking around",
    "cn_def": "適合步行的"
  },
  "car-free": {
    "pos": "adj.",
    "en_def": "where cars are not allowed",
    "cn_def": "無車的；禁止汽車的"
  },
  "gridlock": {
    "pos": "n.",
    "en_def": "a situation where traffic cannot move at all",
    "cn_def": "交通癱瘓；完全堵塞"
  },
  "low-emission zone": {
    "pos": "n.phr.",
    "en_def": "an area where old polluting vehicles must pay or cannot enter",
    "cn_def": "低排放區"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area",
    "cn_def": "邊界；界線"
  },
  "outcry": {
    "pos": "n.",
    "en_def": "a strong public protest",
    "cn_def": "強烈抗議；公眾的憤怒"
  },
  "rent": {
    "pos": "n.",
    "en_def": "money paid regularly to live in a place you do not own",
    "cn_def": "租金；房租"
  },
  "greenfield site": {
    "pos": "n.phr.",
    "en_def": "land that has never been built on before",
    "cn_def": "綠地（未開發用地）"
  },
  "green wall": {
    "pos": "n.phr.",
    "en_def": "a wall covered with living plants",
    "cn_def": "綠牆；植生牆"
  },
  "building code": {
    "pos": "n.phr.",
    "en_def": "the official rules about how buildings must be built",
    "cn_def": "建築法規"
  },
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city with many big grey buildings and few green areas",
    "cn_def": "水泥叢林"
  },
  "community garden": {
    "pos": "n.phr.",
    "en_def": "a shared piece of land where local people grow plants together",
    "cn_def": "社區花園"
  },
  "thermal mass": {
    "pos": "n.phr.",
    "en_def": "the ability of heavy materials to store heat and release it slowly",
    "cn_def": "蓄熱體；熱質量"
  },
  "appeal": {
    "pos": "v.",
    "en_def": "to be attractive or interesting to someone",
    "cn_def": "吸引；對……有吸引力"
  },
  "vie": {
    "pos": "v.",
    "en_def": "to compete strongly with others for something",
    "cn_def": "競爭；角逐"
  },
  "buttress": {
    "pos": "v.",
    "en_def": "to support or make something stronger",
    "cn_def": "支持；加強"
  },
  "graffiti": {
    "pos": "n.",
    "en_def": "words or pictures painted on walls without permission",
    "cn_def": "塗鴉"
  },
  "mainstay": {
    "pos": "n.",
    "en_def": "the most important part that everything depends on",
    "cn_def": "支柱；主要依靠"
  },
  "swathe": {
    "pos": "n.",
    "en_def": "a long wide area of land",
    "cn_def": "一大片（土地）"
  },
  "gradient": {
    "pos": "n.",
    "en_def": "how steep a slope is",
    "cn_def": "坡度"
  },
  "bamboo": {
    "pos": "n.",
    "en_def": "a fast-growing tall plant with hard hollow stems",
    "cn_def": "竹子"
  },
  "boon": {
    "pos": "n.",
    "en_def": "something very helpful",
    "cn_def": "恩惠；福音"
  },
  "steel frame": {
    "pos": "n.phr.",
    "en_def": "a skeleton of steel beams that holds up a building",
    "cn_def": "鋼構骨架"
  },
  "urban renewal": {
    "pos": "n.phr.",
    "en_def": "improving old parts of a city by repairing or rebuilding them",
    "cn_def": "都市更新"
  },
  "master plan": {
    "pos": "n.phr.",
    "en_def": "a detailed long-term plan for developing an area",
    "cn_def": "整體規劃；總體計畫"
  },
  "street art": {
    "pos": "n.phr.",
    "en_def": "paintings and pictures made on walls in public places",
    "cn_def": "街頭藝術"
  },
  "urban farming": {
    "pos": "n.phr.",
    "en_def": "growing food and raising animals in a city",
    "cn_def": "都市農業；都市農耕"
  },
  "permeable surface": {
    "pos": "n.phr.",
    "en_def": "ground covering that lets water soak through it",
    "cn_def": "透水鋪面"
  },
  "loft": {
    "pos": "n.",
    "en_def": "a room or flat in the top part of a building",
    "cn_def": "閣樓；（工廠改建的）挑高公寓"
  },
  "outskirts": {
    "pos": "n.",
    "en_def": "the outer areas of a town or city",
    "cn_def": "郊區；市郊"
  },
  "terrace": {
    "pos": "n.",
    "en_def": "a flat outdoor area next to a building or on a roof",
    "cn_def": "露台；平台"
  },
  "district": {
    "pos": "n.",
    "en_def": "an official area of a city",
    "cn_def": "區；行政區"
  },
  "epicentre": {
    "pos": "n.",
    "en_def": "the central point of an activity or event",
    "cn_def": "中心；震央"
  },
  "cantilever": {
    "pos": "n.",
    "en_def": "a long beam fixed at only one end that sticks out",
    "cn_def": "懸臂；懸臂樑"
  },
  "cul-de-sac": {
    "pos": "n.",
    "en_def": "a short street that is closed at one end",
    "cn_def": "死巷；死胡同"
  },
  "skyline": {
    "pos": "n.",
    "en_def": "the shape that tall buildings make against the sky",
    "cn_def": "天際線"
  },
  "urban forest": {
    "pos": "n.phr.",
    "en_def": "all the trees growing in a city",
    "cn_def": "都市森林"
  },
  "planning permission": {
    "pos": "n.phr.",
    "en_def": "official approval needed before you build something",
    "cn_def": "建築許可；規劃許可"
  },
  "green space": {
    "pos": "n.phr.",
    "en_def": "an area of grass, trees or plants in a town",
    "cn_def": "綠地；綠色空間"
  },
  "natural light": {
    "pos": "n.phr.",
    "en_def": "light from the sun rather than from lamps",
    "cn_def": "自然光"
  },
  "urban planner": {
    "pos": "n.",
    "en_def": "a person who designs how a city grows and is used",
    "cn_def": "都市規劃師"
  },
  "passive house": {
    "pos": "n.phr.",
    "en_def": "a very well-sealed home that needs almost no heating or cooling",
    "cn_def": "被動式節能屋"
  },
  "glass": {
    "pos": "n.",
    "en_def": "a hard clear material used for windows",
    "cn_def": "玻璃"
  },
  "crux": {
    "pos": "n.",
    "en_def": "the most important point of a problem",
    "cn_def": "關鍵；癥結"
  },
  "tapestry": {
    "pos": "n.",
    "en_def": "a rich mixture of different things",
    "cn_def": "豐富多彩的組合"
  },
  "a breath of fresh air": {
    "pos": "n.phr.",
    "en_def": "something new and different that is very welcome",
    "cn_def": "令人耳目一新的人或事物"
  },
  "housing estate": {
    "pos": "n.phr.",
    "en_def": "a large group of houses or flats built at the same time",
    "cn_def": "住宅區；社區"
  },
  "haven": {
    "pos": "n.",
    "en_def": "a safe and peaceful place",
    "cn_def": "避風港；安全的地方"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "the inside surface at the top of a room",
    "cn_def": "天花板"
  },
  "cityscape": {
    "pos": "n.",
    "en_def": "the view of a city's buildings and streets",
    "cn_def": "城市景觀"
  },
  "forefront": {
    "pos": "n.",
    "en_def": "the leading position in an area of activity",
    "cn_def": "最前線；最前沿"
  },
  "nightlife": {
    "pos": "n.",
    "en_def": "entertainment such as bars and clubs that is open at night",
    "cn_def": "夜生活"
  },
  "squatter": {
    "pos": "n.",
    "en_def": "a person who lives in an empty building without permission",
    "cn_def": "違法佔住者"
  },
  "default": {
    "pos": "n.",
    "en_def": "what happens or is chosen if no other choice is made",
    "cn_def": "預設（值）；預設選項"
  },
  "rooftop": {
    "pos": "n.",
    "en_def": "the outside top surface of a building",
    "cn_def": "屋頂"
  },
  "constituency": {
    "pos": "n.",
    "en_def": "the people who vote for a particular politician in an area",
    "cn_def": "選區；選民"
  },
  "throng": {
    "pos": "n.",
    "en_def": "a large crowd of people",
    "cn_def": "人群；群眾"
  },
  "detour": {
    "pos": "n.",
    "en_def": "a longer route taken to avoid a problem",
    "cn_def": "繞道；繞行路線"
  },
  "homeowner": {
    "pos": "n.",
    "en_def": "a person who owns the home they live in",
    "cn_def": "屋主；房屋所有權人"
  },
  "studio flat": {
    "pos": "n.phr.",
    "en_def": "a small flat with one main room for living and sleeping",
    "cn_def": "套房；單間公寓"
  },
  "high street": {
    "pos": "n.phr.",
    "en_def": "the main shopping street in a town",
    "cn_def": "主要商店街；大街"
  },
  "scale model": {
    "pos": "n.phr.",
    "en_def": "a small copy of a building with the same proportions",
    "cn_def": "比例模型"
  },
  "brownfield site": {
    "pos": "n.phr.",
    "en_def": "land that was used for industry and can be built on again",
    "cn_def": "棕地（舊工業用地）"
  },
  "bricklayer": {
    "pos": "n.",
    "en_def": "a worker who builds walls with bricks",
    "cn_def": "砌磚工人"
  },
  "debacle": {
    "pos": "n.",
    "en_def": "a complete and embarrassing failure",
    "cn_def": "徹底的失敗；大挫敗"
  },
  "precinct": {
    "pos": "n.",
    "en_def": "an area of a town used for a special purpose, often closed to cars",
    "cn_def": "（城市中的）特定區域；徒步區"
  },
  "plaster": {
    "pos": "n.",
    "en_def": "a paste that becomes hard and smooth when it dries on walls",
    "cn_def": "灰泥；石膏"
  },
  "acquiesce": {
    "pos": "v.",
    "en_def": "to agree to something without arguing, often unwillingly",
    "cn_def": "默許；勉強同意"
  },
  "dampen": {
    "pos": "v.",
    "en_def": "to make a feeling or sound weaker",
    "cn_def": "減弱；降低"
  },
  "forestall": {
    "pos": "v.",
    "en_def": "to prevent something by acting first",
    "cn_def": "預先阻止；搶先防止"
  },
  "secluded": {
    "pos": "adj.",
    "en_def": "quiet and far from other people",
    "cn_def": "僻靜的；隱蔽的"
  },
  "interconnected": {
    "pos": "adj.",
    "en_def": "joined to each other so that each affects the others",
    "cn_def": "相互連結的"
  },
  "ominous": {
    "pos": "adj.",
    "en_def": "suggesting that something bad will happen",
    "cn_def": "不祥的；預示凶兆的"
  },
  "culprit": {
    "pos": "n.",
    "en_def": "the person or thing that causes a problem",
    "cn_def": "罪魁禍首；元凶"
  },
  "noise complaint": {
    "pos": "n.phr.",
    "en_def": "a report to the police or building managers about loud noise",
    "cn_def": "噪音投訴"
  },
  "building site": {
    "pos": "n.phr.",
    "en_def": "a place where a building is being built",
    "cn_def": "建築工地"
  },
  "street trees": {
    "pos": "n.phr.",
    "en_def": "trees planted along the sides of roads",
    "cn_def": "行道樹"
  },
  "bricks and mortar": {
    "pos": "n.phr.",
    "en_def": "real buildings, especially shops, rather than online businesses",
    "cn_def": "實體店面；實體建築"
  },
  "facade": {
    "pos": "n.",
    "en_def": "the front outside wall of a building",
    "cn_def": "（建築物的）正面；外牆"
  },
  "cement": {
    "pos": "n.",
    "en_def": "a grey powder mixed with water and sand to make concrete",
    "cn_def": "水泥"
  },
  "skylight": {
    "pos": "n.",
    "en_def": "a window in a roof that lets in light",
    "cn_def": "天窗"
  },
  "audacious": {
    "pos": "adj.",
    "en_def": "very bold and willing to take risks",
    "cn_def": "大膽的；有魄力的"
  },
  "run-down": {
    "pos": "adj.",
    "en_def": "in bad condition because nobody has looked after it",
    "cn_def": "破敗的；年久失修的"
  },
  "panoramic": {
    "pos": "adj.",
    "en_def": "showing a wide view of a whole area",
    "cn_def": "全景的"
  },
  "residential": {
    "pos": "adj.",
    "en_def": "used for homes rather than offices or factories",
    "cn_def": "住宅的"
  },
  "congenial": {
    "pos": "adj.",
    "en_def": "pleasant and friendly",
    "cn_def": "宜人的；投緣的"
  },
  "3d-printed": {
    "pos": "adj.",
    "en_def": "made layer by layer by a machine that prints materials",
    "cn_def": "3D列印的"
  },
  "malaise": {
    "pos": "n.",
    "en_def": "a general feeling that something is wrong or weak",
    "cn_def": "萎靡不振；（社會、經濟的）低迷"
  },
  "solace": {
    "pos": "n.",
    "en_def": "comfort when you are sad or worried",
    "cn_def": "安慰；慰藉"
  },
  "rammed earth": {
    "pos": "n.phr.",
    "en_def": "soil pressed hard into walls as a building material",
    "cn_def": "夯土"
  },
  "structural engineer": {
    "pos": "n.phr.",
    "en_def": "an expert who makes sure buildings are strong and safe",
    "cn_def": "結構工程師"
  },
  "public space": {
    "pos": "n.phr.",
    "en_def": "an area such as a park or square that everyone can use",
    "cn_def": "公共空間"
  }
};

const EXTRA_GLOSSES = {};
