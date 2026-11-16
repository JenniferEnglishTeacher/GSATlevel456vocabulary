// Topic 21 Subunit 1 Quiz Data: Fossil Fuels & Extraction 化石燃料與開採
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S01 - Fossil Fuels & Extraction 化石燃料與開採",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "crude oil",
    "pos": "n.phr.",
    "cn_def": "原油",
    "en_def": "oil in its natural state before it is cleaned",
    "sentence": "The price of {{BLANK}} went up sharply last month, so many airlines raised their ticket prices for the summer holidays.",
    "cn": "上個月原油價格急劇上漲，所以許多航空公司調高了暑假的機票價格。"
  },
  {
    "word": "natural gas",
    "pos": "n.phr.",
    "cn_def": "天然氣",
    "en_def": "a gas from under the ground used for heating and cooking",
    "sentence": "Most homes in our city cook with {{BLANK}}, but some older buildings still use heavy gas bottles instead.",
    "cn": "我們城市大多數家庭用天然氣煮飯，但有些舊大樓仍然使用笨重的瓦斯桶。"
  },
  {
    "word": "oil field",
    "pos": "n.phr.",
    "cn_def": "油田",
    "en_def": "an area where a lot of oil is under the ground",
    "sentence": "Thousands of workers moved to the desert after a huge {{BLANK}} was discovered, and a new town quickly grew there.",
    "cn": "在發現一座巨大的油田之後，數千名工人搬到沙漠，一座新城鎮很快就在那裡發展起來。"
  },
  {
    "word": "oil well",
    "pos": "n.phr.",
    "cn_def": "油井",
    "en_def": "a deep hole made in the ground to get oil out",
    "sentence": "The company drilled a new {{BLANK}} near the coast, but local fishermen worried that a leak could harm the sea.",
    "cn": "這家公司在海岸附近鑽了一口新油井，但當地漁民擔心外洩可能會傷害海洋。"
  },
  {
    "word": "pipeline",
    "pos": "n.",
    "cn_def": "輸送管線",
    "en_def": "a long pipe that carries oil, gas or water far away",
    "sentence": "A new gas {{BLANK}} will run under the sea to our island, so we will no longer need to ship gas by boat.",
    "cn": "一條新的天然氣管線將從海底通到我們的島，所以我們將不再需要用船運送天然氣。"
  },
  {
    "word": "fracking",
    "pos": "n.",
    "cn_def": "水力壓裂法",
    "en_def": "pumping water into rocks to break them and release gas",
    "sentence": "Some countries have banned {{BLANK}} because it uses huge amounts of water and may cause small earthquakes in nearby towns.",
    "cn": "有些國家已經禁止水力壓裂法，因為它使用大量的水，而且可能在附近城鎮引發小地震。"
  },
  {
    "word": "shale gas",
    "pos": "n.phr.",
    "cn_def": "頁岩氣",
    "en_def": "natural gas trapped inside layers of soft rock",
    "sentence": "The USA produces a lot of {{BLANK}} today, and this has made gas much cheaper for American factories and homes.",
    "cn": "美國現在生產大量的頁岩氣，這讓美國工廠和家庭的天然氣變得便宜許多。"
  },
  {
    "word": "tar sands",
    "pos": "n.phr.",
    "cn_def": "油砂",
    "en_def": "sand mixed with thick, sticky oil",
    "sentence": "Getting oil out of {{BLANK}} uses a lot of energy and water, so environmental groups say it is a very dirty process.",
    "cn": "從油砂中提煉石油會消耗大量能源和水，所以環保團體說這是非常骯髒的過程。"
  },
  {
    "word": "barrel",
    "pos": "n.",
    "cn_def": "桶（石油計量單位）",
    "en_def": "a unit used to measure oil, about 159 litres",
    "sentence": "The news reported that oil now costs over ninety dollars a {{BLANK}}, and drivers are worried about paying more for petrol.",
    "cn": "新聞報導石油現在每桶超過九十美元，駕駛人擔心要付更多油錢。"
  },
  {
    "word": "petrol",
    "pos": "n.",
    "cn_def": "汽油",
    "en_def": "liquid fuel used in most cars",
    "sentence": "My dad always fills the car with {{BLANK}} before a long trip, because there are few stations on the mountain road.",
    "cn": "我爸爸在長途旅行前總是先把車加滿汽油，因為山路上的加油站很少。"
  },
  {
    "word": "diesel",
    "pos": "n.",
    "cn_def": "柴油",
    "en_def": "a heavy fuel used in trucks, buses and some cars",
    "sentence": "Most big trucks run on {{BLANK}}, but the city plans to replace its old buses with quieter electric ones next year.",
    "cn": "大多數大卡車使用柴油，但市政府計畫明年用更安靜的電動公車取代舊公車。"
  },
  {
    "word": "kerosene",
    "pos": "n.",
    "cn_def": "煤油",
    "en_def": "an oil burned in lamps and some heaters",
    "sentence": "During the typhoon the electricity went off, so my grandmother lit an old {{BLANK}} lamp and we played cards together.",
    "cn": "颱風期間停電了，所以奶奶點了一盞舊的煤油燈，我們一起玩牌。"
  },
  {
    "word": "jet fuel",
    "pos": "n.phr.",
    "cn_def": "航空燃油",
    "en_def": "special fuel used by aeroplanes",
    "sentence": "Planes burn a huge amount of {{BLANK}} on long flights, so airlines are testing cleaner fuels made from used cooking oil.",
    "cn": "飛機在長途飛行中燃燒大量的航空燃油，所以航空公司正在測試用廢食用油製成的更乾淨燃料。"
  },
  {
    "word": "liquefied natural gas",
    "pos": "n.phr.",
    "cn_def": "液化天然氣",
    "en_def": "natural gas cooled until it becomes liquid for shipping",
    "sentence": "Taiwan imports most of its gas as {{BLANK}}, which arrives in special ships and is stored in cold tanks.",
    "cn": "台灣進口的天然氣大多是液化天然氣，它由特殊船隻運來，並儲存在低溫儲槽中。"
  },
  {
    "word": "propane",
    "pos": "n.",
    "cn_def": "丙烷",
    "en_def": "a gas sold in tanks for cooking and heating",
    "sentence": "We took a small {{BLANK}} stove on our camping trip, and it was easy to cook noodles even in the rain.",
    "cn": "我們露營時帶了一個小型丙烷爐，即使在下雨也很容易煮麵。"
  },
  {
    "word": "oil tanker",
    "pos": "n.phr.",
    "cn_def": "油輪",
    "en_def": "a large ship that carries oil",
    "sentence": "A huge {{BLANK}} got stuck in the canal for six days, and many other ships had to wait outside.",
    "cn": "一艘巨大的油輪在運河中卡了六天，許多其他船隻只好在外面等候。"
  },
  {
    "word": "oil reserves",
    "pos": "n.phr.",
    "cn_def": "石油蘊藏量",
    "en_def": "the amount of oil a country still has underground",
    "sentence": "Saudi Arabia has some of the largest {{BLANK}} in the world, so it has great power in the energy market.",
    "cn": "沙烏地阿拉伯擁有世界上最大的石油蘊藏量之一，所以它在能源市場上擁有很大的影響力。"
  },
  {
    "word": "lignite",
    "pos": "n.",
    "cn_def": "褐煤",
    "en_def": "soft brown coal that produces a lot of smoke",
    "sentence": "Burning {{BLANK}} creates more pollution than other types of coal, but some power plants still use it because it is cheap.",
    "cn": "燃燒褐煤比其他種類的煤產生更多污染，但有些電廠仍使用它，因為它很便宜。"
  },
  {
    "word": "peak oil",
    "pos": "n.phr.",
    "cn_def": "石油產量頂峰",
    "en_def": "the time when world oil production reaches its highest point",
    "sentence": "Some experts believe we have already reached {{BLANK}}, while others think new technology will let us find more oil.",
    "cn": "有些專家認為我們已經到達石油產量頂峰，而其他人則認為新技術將讓我們找到更多石油。"
  },
  {
    "word": "gas flaring",
    "pos": "n.phr.",
    "cn_def": "天然氣燃除",
    "en_def": "burning off unwanted gas at an oil well",
    "sentence": "You can see huge flames at night because of {{BLANK}}, and this wastes gas that could heat thousands of homes.",
    "cn": "由於天然氣燃除，你在夜晚可以看到巨大的火焰，而這浪費了足以供暖數千戶家庭的天然氣。"
  },
  {
    "word": "petrochemical",
    "pos": "adj.",
    "cn_def": "石化的",
    "en_def": "made from oil or natural gas",
    "sentence": "Many {{BLANK}} factories line the southern coast, and people living nearby often complain about the bad smell in the air.",
    "cn": "許多石化工廠沿著南部海岸設立，住在附近的居民常常抱怨空氣中的難聞氣味。"
  },
  {
    "word": "refining",
    "pos": "n.",
    "cn_def": "精煉",
    "en_def": "the process of making oil clean and useful",
    "sentence": "After {{BLANK}}, crude oil can be turned into petrol, diesel and plastics, so the process is very important for industry.",
    "cn": "經過精煉之後，原油可以轉變成汽油、柴油和塑膠，所以這個過程對工業非常重要。"
  },
  {
    "word": "rig",
    "pos": "n.",
    "cn_def": "鑽油平台；鑽井設備",
    "en_def": "a large structure used to drill for oil or gas",
    "sentence": "My uncle works on a {{BLANK}} in the North Sea for two weeks at a time, and then he flies home to rest.",
    "cn": "我叔叔在北海的一座鑽油平台上一次工作兩週，然後再搭飛機回家休息。"
  },
  {
    "word": "derrick",
    "pos": "n.",
    "cn_def": "井架",
    "en_def": "a tall metal tower built over an oil well",
    "sentence": "An old oil {{BLANK}} still stands in the town square, and tourists take photos of it to remember the town's history.",
    "cn": "一座舊的石油井架仍矗立在鎮上廣場，遊客會拍照留念這個城鎮的歷史。"
  },
  {
    "word": "oil platform",
    "pos": "n.phr.",
    "cn_def": "海上採油平台",
    "en_def": "a structure in the sea where oil is taken from the seabed",
    "sentence": "A storm hit the {{BLANK}} last night, so all the workers were flown back to land by helicopter.",
    "cn": "昨晚一場暴風雨襲擊了海上採油平台，所以所有工人都被直升機載回陸地。"
  },
  {
    "word": "petrol station",
    "pos": "n.phr.",
    "cn_def": "加油站",
    "en_def": "a place where you buy fuel for your car",
    "sentence": "We stopped at a {{BLANK}} to fill the tank, and my little brother bought some snacks from the shop there.",
    "cn": "我們在加油站停下來加滿油，我弟弟在那裡的商店買了一些零食。"
  },
  {
    "word": "heating oil",
    "pos": "n.phr.",
    "cn_def": "暖氣用油",
    "en_def": "oil burned to keep buildings warm",
    "sentence": "Many families in the countryside buy {{BLANK}} every autumn, because the winters there are long and very cold.",
    "cn": "許多鄉下家庭每年秋天都會購買暖氣用油，因為那裡的冬天又長又冷。"
  },
  {
    "word": "oil exploration",
    "pos": "n.phr.",
    "cn_def": "石油探勘",
    "en_def": "searching for new places where oil can be found",
    "sentence": "The government allowed {{BLANK}} near the national park, but many citizens protested because they wanted to protect the wildlife.",
    "cn": "政府允許在國家公園附近進行石油探勘，但許多市民抗議，因為他們想要保護野生動物。"
  },
  {
    "word": "gas leak",
    "pos": "n.phr.",
    "cn_def": "瓦斯外洩",
    "en_def": "gas escaping by accident from a pipe",
    "sentence": "We smelled something strange in the kitchen, so we opened all the windows and called the company to check for a {{BLANK}}.",
    "cn": "我們在廚房聞到奇怪的味道，所以打開所有窗戶，並打電話請公司來檢查是否有瓦斯外洩。"
  },
  {
    "word": "oil slick",
    "pos": "n.phr.",
    "cn_def": "浮油",
    "en_def": "a layer of oil floating on the sea",
    "sentence": "A large {{BLANK}} spread along the beach after the accident, and volunteers spent weeks cleaning oil off seabirds.",
    "cn": "事故發生後，一大片浮油沿著海灘擴散，志工們花了好幾週清理海鳥身上的油汙。"
  }
];

const MCQS = [
  {
    "q": "The price of _____ went up sharply last month, so many airlines raised their ticket prices for the summer holidays.",
    "options": [
      "crude oil",
      "smart grid",
      "alternative energy",
      "circular economy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Most homes in our city cook with _____, but some older buildings still use heavy gas bottles instead.",
    "options": [
      "extension cord",
      "oil crisis",
      "natural gas",
      "precious metal"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Thousands of workers moved to the desert after a huge _____ was discovered, and a new town quickly grew there.",
    "options": [
      "energy efficiency",
      "oil field",
      "smart grid",
      "solar farm"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The company drilled a new _____ near the coast, but local fishermen worried that a leak could harm the sea.",
    "options": [
      "conflict minerals",
      "power line",
      "mineral rights",
      "oil well"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A new gas _____ will run under the sea to our island, so we will no longer need to ship gas by boat.",
    "options": [
      "baseload",
      "pipeline",
      "penetration",
      "deflation"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Some countries have banned _____ because it uses huge amounts of water and may cause small earthquakes in nearby towns.",
    "options": [
      "socket",
      "absence",
      "maximisation",
      "fracking"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The USA produces a lot of _____ today, and this has made gas much cheaper for American factories and homes.",
    "options": [
      "shale gas",
      "solar farm",
      "conflict minerals",
      "smart thermostat"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Getting oil out of _____ uses a lot of energy and water, so environmental groups say it is a very dirty process.",
    "options": [
      "central heating",
      "nuclear waste",
      "tar sands",
      "smart grid"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The news reported that oil now costs over ninety dollars a _____, and drivers are worried about paying more for petrol.",
    "options": [
      "barrel",
      "absence",
      "recycling",
      "reallocation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "My dad always fills the car with _____ before a long trip, because there are few stations on the mountain road.",
    "options": [
      "neutrality",
      "petrol",
      "meltdown",
      "forecasting"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Most big trucks run on _____, but the city plans to replace its old buses with quieter electric ones next year.",
    "options": [
      "aridity",
      "standstill",
      "diesel",
      "mining"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "During the typhoon the electricity went off, so my grandmother lit an old _____ lamp and we played cards together.",
    "options": [
      "devastation",
      "renegotiation",
      "fission",
      "kerosene"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Planes burn a huge amount of _____ on long flights, so airlines are testing cleaner fuels made from used cooking oil.",
    "options": [
      "jet fuel",
      "feed-in tariff",
      "nuclear power plant",
      "finite resource"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Taiwan imports most of its gas as _____, which arrives in special ships and is stored in cold tanks.",
    "options": [
      "loft insulation",
      "liquefied natural gas",
      "vested interest",
      "power strip"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "We took a small _____ stove on our camping trip, and it was easy to cook noodles even in the rain.",
    "options": [
      "biogas",
      "jeopardy",
      "discontinuation",
      "propane"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "A huge _____ got stuck in the canal for six days, and many other ships had to wait outside.",
    "options": [
      "smart grid",
      "price ceiling",
      "oil tanker",
      "conflict minerals"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Saudi Arabia has some of the largest _____ in the world, so it has great power in the energy market.",
    "options": [
      "oil reserves",
      "a drain on",
      "fuel cell",
      "fuel rod"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Burning _____ creates more pollution than other types of coal, but some power plants still use it because it is cheap.",
    "options": [
      "acceptability",
      "amplification",
      "cost-effectiveness",
      "lignite"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Some experts believe we have already reached _____, while others think new technology will let us find more oil.",
    "options": [
      "nuclear accident",
      "capacity factor",
      "peak oil",
      "nuclear waste"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "You can see huge flames at night because of _____, and this wastes gas that could heat thousands of homes.",
    "options": [
      "green hydrogen",
      "gas flaring",
      "mineral rights",
      "power bank"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Many _____ factories line the southern coast, and people living nearby often complain about the bad smell in the air.",
    "options": [
      "unlimited",
      "authorised",
      "worsening",
      "petrochemical"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "After _____, crude oil can be turned into petrol, diesel and plastics, so the process is very important for industry.",
    "options": [
      "refining",
      "e-waste",
      "prospector",
      "policymaker"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "My uncle works on a _____ in the North Sea for two weeks at a time, and then he flies home to rest.",
    "options": [
      "immediacy",
      "moratorium",
      "rig",
      "tailings"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "An old oil _____ still stands in the town square, and tourists take photos of it to remember the town's history.",
    "options": [
      "bauxite",
      "derrick",
      "reallocation",
      "deflation"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "A storm hit the _____ last night, so all the workers were flown back to land by helicopter.",
    "options": [
      "stranded asset",
      "rainwater harvesting",
      "oil platform",
      "mineral rights"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "We stopped at a _____ to fill the tank, and my little brother bought some snacks from the shop there.",
    "options": [
      "petrol station",
      "tidal power",
      "solar power",
      "fuel shortage"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Many families in the countryside buy _____ every autumn, because the winters there are long and very cold.",
    "options": [
      "peak demand",
      "heating oil",
      "installed capacity",
      "a drain on"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The government allowed _____ near the national park, but many citizens protested because they wanted to protect the wildlife.",
    "options": [
      "conflict minerals",
      "power strip",
      "gold rush",
      "oil exploration"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "We smelled something strange in the kitchen, so we opened all the windows and called the company to check for a _____.",
    "options": [
      "gas leak",
      "water shortage",
      "wind farm",
      "open-pit mine"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "A large _____ spread along the beach after the accident, and volunteers spent weeks cleaning oil off seabirds.",
    "options": [
      "circular economy",
      "open-pit mine",
      "oil slick",
      "rooftop solar"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "crude oil": {
    "pos": "n.phr.",
    "en_def": "oil in its natural state before it is cleaned",
    "cn_def": "原油"
  },
  "natural gas": {
    "pos": "n.phr.",
    "en_def": "a gas from under the ground used for heating and cooking",
    "cn_def": "天然氣"
  },
  "oil field": {
    "pos": "n.phr.",
    "en_def": "an area where a lot of oil is under the ground",
    "cn_def": "油田"
  },
  "oil well": {
    "pos": "n.phr.",
    "en_def": "a deep hole made in the ground to get oil out",
    "cn_def": "油井"
  },
  "pipeline": {
    "pos": "n.",
    "en_def": "a long pipe that carries oil, gas or water far away",
    "cn_def": "輸送管線"
  },
  "fracking": {
    "pos": "n.",
    "en_def": "pumping water into rocks to break them and release gas",
    "cn_def": "水力壓裂法"
  },
  "shale gas": {
    "pos": "n.phr.",
    "en_def": "natural gas trapped inside layers of soft rock",
    "cn_def": "頁岩氣"
  },
  "tar sands": {
    "pos": "n.phr.",
    "en_def": "sand mixed with thick, sticky oil",
    "cn_def": "油砂"
  },
  "barrel": {
    "pos": "n.",
    "en_def": "a unit used to measure oil, about 159 litres",
    "cn_def": "桶（石油計量單位）"
  },
  "petrol": {
    "pos": "n.",
    "en_def": "liquid fuel used in most cars",
    "cn_def": "汽油"
  },
  "diesel": {
    "pos": "n.",
    "en_def": "a heavy fuel used in trucks, buses and some cars",
    "cn_def": "柴油"
  },
  "kerosene": {
    "pos": "n.",
    "en_def": "an oil burned in lamps and some heaters",
    "cn_def": "煤油"
  },
  "jet fuel": {
    "pos": "n.phr.",
    "en_def": "special fuel used by aeroplanes",
    "cn_def": "航空燃油"
  },
  "liquefied natural gas": {
    "pos": "n.phr.",
    "en_def": "natural gas cooled until it becomes liquid for shipping",
    "cn_def": "液化天然氣"
  },
  "propane": {
    "pos": "n.",
    "en_def": "a gas sold in tanks for cooking and heating",
    "cn_def": "丙烷"
  },
  "oil tanker": {
    "pos": "n.phr.",
    "en_def": "a large ship that carries oil",
    "cn_def": "油輪"
  },
  "oil reserves": {
    "pos": "n.phr.",
    "en_def": "the amount of oil a country still has underground",
    "cn_def": "石油蘊藏量"
  },
  "lignite": {
    "pos": "n.",
    "en_def": "soft brown coal that produces a lot of smoke",
    "cn_def": "褐煤"
  },
  "peak oil": {
    "pos": "n.phr.",
    "en_def": "the time when world oil production reaches its highest point",
    "cn_def": "石油產量頂峰"
  },
  "gas flaring": {
    "pos": "n.phr.",
    "en_def": "burning off unwanted gas at an oil well",
    "cn_def": "天然氣燃除"
  },
  "petrochemical": {
    "pos": "adj.",
    "en_def": "made from oil or natural gas",
    "cn_def": "石化的"
  },
  "refining": {
    "pos": "n.",
    "en_def": "the process of making oil clean and useful",
    "cn_def": "精煉"
  },
  "rig": {
    "pos": "n.",
    "en_def": "a large structure used to drill for oil or gas",
    "cn_def": "鑽油平台；鑽井設備"
  },
  "derrick": {
    "pos": "n.",
    "en_def": "a tall metal tower built over an oil well",
    "cn_def": "井架"
  },
  "oil platform": {
    "pos": "n.phr.",
    "en_def": "a structure in the sea where oil is taken from the seabed",
    "cn_def": "海上採油平台"
  },
  "petrol station": {
    "pos": "n.phr.",
    "en_def": "a place where you buy fuel for your car",
    "cn_def": "加油站"
  },
  "heating oil": {
    "pos": "n.phr.",
    "en_def": "oil burned to keep buildings warm",
    "cn_def": "暖氣用油"
  },
  "oil exploration": {
    "pos": "n.phr.",
    "en_def": "searching for new places where oil can be found",
    "cn_def": "石油探勘"
  },
  "gas leak": {
    "pos": "n.phr.",
    "en_def": "gas escaping by accident from a pipe",
    "cn_def": "瓦斯外洩"
  },
  "oil slick": {
    "pos": "n.phr.",
    "en_def": "a layer of oil floating on the sea",
    "cn_def": "浮油"
  },
  "smart grid": {
    "pos": "n.phr.",
    "en_def": "an electricity network that uses computers to manage power",
    "cn_def": "智慧電網"
  },
  "alternative energy": {
    "pos": "n.phr.",
    "en_def": "energy that does not come from fossil fuels",
    "cn_def": "替代能源"
  },
  "circular economy": {
    "pos": "n.phr.",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "cn_def": "循環經濟"
  },
  "extension cord": {
    "pos": "n.phr.",
    "en_def": "a long wire that lets you plug in things far from a socket",
    "cn_def": "延長線"
  },
  "oil crisis": {
    "pos": "n.phr.",
    "en_def": "a time when oil becomes very scarce and expensive",
    "cn_def": "石油危機"
  },
  "precious metal": {
    "pos": "n.phr.",
    "en_def": "a rare metal of high value, such as gold",
    "cn_def": "貴金屬"
  },
  "energy efficiency": {
    "pos": "n.phr.",
    "en_def": "using less energy to do the same job",
    "cn_def": "能源效率"
  },
  "solar farm": {
    "pos": "n.phr.",
    "en_def": "a large area of land covered with solar panels",
    "cn_def": "太陽能發電場"
  },
  "conflict minerals": {
    "pos": "n.phr.",
    "en_def": "minerals mined in war areas that help pay for fighting",
    "cn_def": "衝突礦產"
  },
  "power line": {
    "pos": "n.phr.",
    "en_def": "a wire that carries electricity over long distances",
    "cn_def": "電線；輸電線"
  },
  "mineral rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to take minerals from a piece of land",
    "cn_def": "礦業權"
  },
  "baseload": {
    "pos": "n.",
    "en_def": "the minimum amount of power needed all the time",
    "cn_def": "基載電力"
  },
  "penetration": {
    "pos": "n.",
    "en_def": "how far something has spread into a market",
    "cn_def": "普及率；滲透率"
  },
  "deflation": {
    "pos": "n.",
    "en_def": "a general fall in prices in an economy",
    "cn_def": "通貨緊縮"
  },
  "socket": {
    "pos": "n.",
    "en_def": "the place in a wall where you plug things in",
    "cn_def": "插座"
  },
  "absence": {
    "pos": "n.",
    "en_def": "the state of not being there",
    "cn_def": "缺乏；不在"
  },
  "maximisation": {
    "pos": "n.",
    "en_def": "the act of making something as large as possible",
    "cn_def": "最大化"
  },
  "smart thermostat": {
    "pos": "n.phr.",
    "en_def": "a device that controls heating and learns your habits",
    "cn_def": "智慧溫控器"
  },
  "central heating": {
    "pos": "n.phr.",
    "en_def": "a system that heats a whole building from one place",
    "cn_def": "中央暖氣"
  },
  "nuclear waste": {
    "pos": "n.phr.",
    "en_def": "dangerous material left after making nuclear power",
    "cn_def": "核廢料"
  },
  "recycling": {
    "pos": "n.",
    "en_def": "treating used things so they can be used again",
    "cn_def": "回收"
  },
  "reallocation": {
    "pos": "n.",
    "en_def": "moving resources to a different use",
    "cn_def": "重新分配"
  },
  "neutrality": {
    "pos": "n.",
    "en_def": "the state of not causing a particular effect",
    "cn_def": "中和；中立"
  },
  "meltdown": {
    "pos": "n.",
    "en_def": "a serious accident when a nuclear reactor overheats",
    "cn_def": "爐心熔毀"
  },
  "forecasting": {
    "pos": "n.",
    "en_def": "predicting what will happen in the future",
    "cn_def": "預測"
  },
  "aridity": {
    "pos": "n.",
    "en_def": "the state of being very dry",
    "cn_def": "乾燥；乾旱"
  },
  "standstill": {
    "pos": "n.",
    "en_def": "a situation with no movement or progress",
    "cn_def": "停頓；停滯"
  },
  "mining": {
    "pos": "n.",
    "en_def": "the work of digging minerals out of the ground",
    "cn_def": "採礦"
  },
  "devastation": {
    "pos": "n.",
    "en_def": "very great damage",
    "cn_def": "嚴重破壞"
  },
  "renegotiation": {
    "pos": "n.",
    "en_def": "discussing an agreement again to change it",
    "cn_def": "重新談判"
  },
  "fission": {
    "pos": "n.",
    "en_def": "the splitting of an atom, which releases energy",
    "cn_def": "核分裂"
  },
  "feed-in tariff": {
    "pos": "n.phr.",
    "en_def": "a fixed price paid for clean power sold to the grid",
    "cn_def": "躉購費率"
  },
  "nuclear power plant": {
    "pos": "n.phr.",
    "en_def": "a power station that uses nuclear reactions",
    "cn_def": "核能發電廠"
  },
  "finite resource": {
    "pos": "n.phr.",
    "en_def": "something that exists only in a limited amount",
    "cn_def": "有限資源"
  },
  "loft insulation": {
    "pos": "n.phr.",
    "en_def": "material in the roof space that keeps heat in",
    "cn_def": "閣樓隔熱層"
  },
  "vested interest": {
    "pos": "n.phr.",
    "en_def": "a personal reason for wanting something to happen",
    "cn_def": "既得利益"
  },
  "power strip": {
    "pos": "n.phr.",
    "en_def": "a row of sockets on a short cable",
    "cn_def": "排插"
  },
  "biogas": {
    "pos": "n.",
    "en_def": "gas made from rotting food, plants or animal waste",
    "cn_def": "沼氣"
  },
  "jeopardy": {
    "pos": "n.",
    "en_def": "danger of loss or harm",
    "cn_def": "危險；危難"
  },
  "discontinuation": {
    "pos": "n.",
    "en_def": "the act of stopping something",
    "cn_def": "停止；中止"
  },
  "price ceiling": {
    "pos": "n.phr.",
    "en_def": "the highest price allowed by law",
    "cn_def": "價格上限"
  },
  "a drain on": {
    "pos": "n.phr.",
    "en_def": "something that uses up money or resources",
    "cn_def": "消耗；負擔"
  },
  "fuel cell": {
    "pos": "n.phr.",
    "en_def": "a device that makes electricity from hydrogen and oxygen",
    "cn_def": "燃料電池"
  },
  "fuel rod": {
    "pos": "n.phr.",
    "en_def": "a long metal tube that holds nuclear fuel",
    "cn_def": "燃料棒"
  },
  "acceptability": {
    "pos": "n.",
    "en_def": "how far something is accepted by people",
    "cn_def": "可接受度"
  },
  "amplification": {
    "pos": "n.",
    "en_def": "the act of making something larger or stronger",
    "cn_def": "擴大；放大"
  },
  "cost-effectiveness": {
    "pos": "n.",
    "en_def": "how much benefit you get for the money spent",
    "cn_def": "成本效益"
  },
  "nuclear accident": {
    "pos": "n.phr.",
    "en_def": "an event that releases harmful radiation by mistake",
    "cn_def": "核子事故"
  },
  "capacity factor": {
    "pos": "n.phr.",
    "en_def": "how much power a plant really makes compared with its maximum",
    "cn_def": "容量因數"
  },
  "green hydrogen": {
    "pos": "n.phr.",
    "en_def": "hydrogen made using renewable electricity",
    "cn_def": "綠氫"
  },
  "power bank": {
    "pos": "n.phr.",
    "en_def": "a small portable battery for charging phones",
    "cn_def": "行動電源"
  },
  "unlimited": {
    "pos": "adj.",
    "en_def": "without any limit",
    "cn_def": "無限的"
  },
  "authorised": {
    "pos": "adj.",
    "en_def": "officially allowed",
    "cn_def": "經授權的"
  },
  "worsening": {
    "pos": "adj.",
    "en_def": "becoming worse",
    "cn_def": "日益惡化的"
  },
  "e-waste": {
    "pos": "n.",
    "en_def": "thrown-away electronic devices like phones and computers",
    "cn_def": "電子廢棄物"
  },
  "prospector": {
    "pos": "n.",
    "en_def": "a person who searches for gold or minerals",
    "cn_def": "探礦者"
  },
  "policymaker": {
    "pos": "n.",
    "en_def": "a person who makes government plans and rules",
    "cn_def": "政策制定者"
  },
  "immediacy": {
    "pos": "n.",
    "en_def": "the quality of being urgent and happening now",
    "cn_def": "迫切性；即時性"
  },
  "moratorium": {
    "pos": "n.",
    "en_def": "an official stop to an activity for a time",
    "cn_def": "暫停令"
  },
  "tailings": {
    "pos": "n.",
    "en_def": "waste rock and mud left after mining",
    "cn_def": "尾礦"
  },
  "bauxite": {
    "pos": "n.",
    "en_def": "the rock from which aluminium is made",
    "cn_def": "鋁土礦"
  },
  "stranded asset": {
    "pos": "n.phr.",
    "en_def": "something valuable that loses its value early, like an unused coal plant",
    "cn_def": "擱淺資產"
  },
  "rainwater harvesting": {
    "pos": "n.phr.",
    "en_def": "collecting rain so it can be used later",
    "cn_def": "雨水回收"
  },
  "tidal power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the rise and fall of the sea",
    "cn_def": "潮汐發電"
  },
  "solar power": {
    "pos": "n.phr.",
    "en_def": "electricity made from sunlight",
    "cn_def": "太陽能發電"
  },
  "fuel shortage": {
    "pos": "n.phr.",
    "en_def": "a situation when there is not enough fuel",
    "cn_def": "燃料短缺"
  },
  "peak demand": {
    "pos": "n.phr.",
    "en_def": "the time when people use the most electricity",
    "cn_def": "尖峰用電需求"
  },
  "installed capacity": {
    "pos": "n.phr.",
    "en_def": "the maximum power that all machines can produce",
    "cn_def": "裝置容量"
  },
  "gold rush": {
    "pos": "n.phr.",
    "en_def": "a time when many people rush to a place to find gold",
    "cn_def": "淘金熱"
  },
  "water shortage": {
    "pos": "n.phr.",
    "en_def": "a situation when there is not enough water",
    "cn_def": "缺水"
  },
  "wind farm": {
    "pos": "n.phr.",
    "en_def": "a group of wind turbines that make electricity",
    "cn_def": "風力發電場"
  },
  "open-pit mine": {
    "pos": "n.phr.",
    "en_def": "a mine dug as a huge hole from the surface",
    "cn_def": "露天礦"
  },
  "rooftop solar": {
    "pos": "n.phr.",
    "en_def": "solar panels placed on the roofs of buildings",
    "cn_def": "屋頂型太陽能"
  }
};

const EXTRA_GLOSSES = {};
