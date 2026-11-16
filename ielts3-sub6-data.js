// Topic 3 Subunit 6 Quiz Data: Adaptation & Resilience 調適與韌性
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S06 - Adaptation & Resilience 調適與韌性",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adaptation",
    "pos": "n.",
    "cn_def": "調適;適應",
    "en_def": "a change made to deal with new conditions",
    "sentence": "Climate {{BLANK}} includes simple steps like planting trees for shade, so it is not only about expensive engineering.",
    "cn": "氣候調適包括像種樹遮蔭這樣簡單的步驟,所以它不只是關於昂貴的工程。"
  },
  {
    "word": "resilient",
    "pos": "adj.",
    "cn_def": "有韌性的;能迅速復原的",
    "en_def": "able to recover quickly after something bad happens",
    "sentence": "The new hospital was designed to be {{BLANK}}, so it can keep running even if the power goes out during a storm.",
    "cn": "新醫院被設計得很有韌性,所以即使暴風雨中停電也能持續運作。"
  },
  {
    "word": "seawall",
    "pos": "n.",
    "cn_def": "海堤",
    "en_def": "a strong wall built to stop the sea from flooding land",
    "sentence": "The town built a taller {{BLANK}} along the beach, but some people say it ruined the view of the ocean.",
    "cn": "鎮上沿著海灘建了一道更高的海堤,但有些人說它破壞了海景。"
  },
  {
    "word": "levee",
    "pos": "n.",
    "cn_def": "河堤;防洪堤",
    "en_def": "a raised bank built beside a river to stop flooding",
    "sentence": "The {{BLANK}} along the river held back the water, so the neighbourhood stayed dry during the heavy rain.",
    "cn": "沿著河邊的河堤擋住了河水,所以這個社區在大雨期間保持乾燥。"
  },
  {
    "word": "embankment",
    "pos": "n.",
    "cn_def": "堤防;路堤",
    "en_def": "a wall of earth or stone that holds back water",
    "sentence": "Volunteers filled sandbags to make the {{BLANK}} higher, and they worked through the night before the river peaked.",
    "cn": "志工們裝填沙包把堤防加高,他們在河水達到最高點前通宵工作。"
  },
  {
    "word": "floodgate",
    "pos": "n.",
    "cn_def": "水閘門",
    "en_def": "a gate that controls the flow of water",
    "sentence": "Workers closed the {{BLANK}} before the typhoon arrived, so the seawater could not flow into the canal.",
    "cn": "工人在颱風來臨前關閉了水閘門,所以海水無法流進運河。"
  },
  {
    "word": "drainage",
    "pos": "n.",
    "cn_def": "排水(系統)",
    "en_def": "the system that carries away extra water",
    "sentence": "The old {{BLANK}} system cannot handle today's heavy rain, so the city is digging wider pipes under the streets.",
    "cn": "舊的排水系統無法應付現今的大雨,所以市政府正在街道下方挖設更寬的管線。"
  },
  {
    "word": "reservoir",
    "pos": "n.",
    "cn_def": "水庫",
    "en_def": "a large lake used to store water",
    "sentence": "The water in the {{BLANK}} dropped to ten percent, so the government asked everyone to take shorter showers.",
    "cn": "水庫的水位降到百分之十,所以政府要求大家縮短淋浴時間。"
  },
  {
    "word": "irrigation",
    "pos": "n.",
    "cn_def": "灌溉",
    "en_def": "supplying water to land so crops can grow",
    "sentence": "Drip {{BLANK}} gives water directly to plant roots, so farmers can grow food while using much less water.",
    "cn": "滴水灌溉直接把水送到植物根部,所以農夫可以用少得多的水種出糧食。"
  },
  {
    "word": "irrigate",
    "pos": "v.",
    "cn_def": "灌溉",
    "en_def": "to supply water to land through pipes or channels",
    "sentence": "The farmers {{BLANK}} their fields at night now, because less water evaporates when the sun is down.",
    "cn": "農夫們現在在夜間灌溉田地,因為太陽下山後蒸發的水較少。"
  },
  {
    "word": "drought-resistant",
    "pos": "adj.",
    "cn_def": "耐旱的",
    "en_def": "able to grow well with little water",
    "sentence": "Scientists developed {{BLANK}} rice, so farmers can still get a harvest when the rains come late.",
    "cn": "科學家研發出耐旱稻米,所以即使雨水來得晚,農夫仍然可以有收成。"
  },
  {
    "word": "early warning system",
    "pos": "n.phr.",
    "cn_def": "預警系統",
    "en_def": "a system that tells people about danger before it arrives",
    "sentence": "The new {{BLANK}} sends text messages before floods, so families have time to move to higher ground.",
    "cn": "新的預警系統會在淹水前發送簡訊,讓家庭有時間移往地勢較高處。"
  },
  {
    "word": "elevate",
    "pos": "v.",
    "cn_def": "抬高;架高",
    "en_def": "to raise something to a higher position",
    "sentence": "Many families {{BLANK}} their houses on concrete posts, so floodwater can pass underneath without entering the rooms.",
    "cn": "許多家庭把房子架高在混凝土柱上,讓洪水可以從下方流過而不會進到房間。"
  },
  {
    "word": "stilts",
    "pos": "n.",
    "cn_def": "高腳柱;支柱",
    "en_def": "tall posts that hold a building above the ground or water",
    "sentence": "The fishermen's houses stand on {{BLANK}} above the water, so they stay safe when the tide is unusually high.",
    "cn": "漁民的房子立在水面上的高腳柱上,所以即使潮水異常高漲也能保持安全。"
  },
  {
    "word": "rainwater",
    "pos": "n.",
    "cn_def": "雨水",
    "en_def": "water that has fallen as rain",
    "sentence": "Our school collects {{BLANK}} from the roof in large tanks, and we use it to water the garden and flush toilets.",
    "cn": "我們學校用大水塔收集屋頂的雨水,用來澆花和沖馬桶。"
  },
  {
    "word": "desalination",
    "pos": "n.",
    "cn_def": "海水淡化",
    "en_def": "the process of removing salt from sea water",
    "sentence": "The island built a {{BLANK}} plant because its wells were drying up, but the drinking water is now more expensive.",
    "cn": "這座島建了一座海水淡化廠,因為島上的水井快要乾涸,但飲用水現在變得更貴了。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "陰涼處;遮蔭",
    "en_def": "an area that is darker and cooler because the sun cannot reach it",
    "sentence": "The city planted trees along the bus stops, so passengers can wait in the {{BLANK}} on hot afternoons.",
    "cn": "市政府在公車站旁種了樹,讓乘客在炎熱的下午可以在陰涼處等車。"
  },
  {
    "word": "reforestation",
    "pos": "n.",
    "cn_def": "重新造林",
    "en_def": "planting trees in an area where forests were cut down",
    "sentence": "The {{BLANK}} project has planted a million trees, and the hills now hold rainwater instead of sliding down.",
    "cn": "這項重新造林計畫已種下一百萬棵樹,現在山丘能留住雨水而不會崩塌。"
  },
  {
    "word": "replant",
    "pos": "v.",
    "cn_def": "重新種植;補種",
    "en_def": "to plant again",
    "sentence": "After the fire, students helped {{BLANK}} young trees on the hill, and they return every year to check them.",
    "cn": "火災之後,學生們幫忙在山坡上補種小樹,而且他們每年都會回去查看。"
  },
  {
    "word": "green roof",
    "pos": "n.phr.",
    "cn_def": "綠屋頂",
    "en_def": "a roof covered with plants",
    "sentence": "Our library has a {{BLANK}} full of plants, so the building stays cooler and absorbs heavy rain.",
    "cn": "我們的圖書館有一座長滿植物的綠屋頂,所以建築物保持較涼爽,也能吸收大雨。"
  },
  {
    "word": "ventilation",
    "pos": "n.",
    "cn_def": "通風",
    "en_def": "the movement of fresh air through a room or building",
    "sentence": "Good {{BLANK}} keeps classrooms cooler without air-conditioning, so the new school has large windows on both sides.",
    "cn": "良好的通風能讓教室在不開冷氣的情況下保持涼爽,所以新學校兩側都有大窗戶。"
  },
  {
    "word": "air-conditioning",
    "pos": "n.",
    "cn_def": "空調;冷氣",
    "en_def": "a system that keeps the air in a building cool",
    "sentence": "Many families cannot afford {{BLANK}}, so heatwaves are especially dangerous for poor and elderly people.",
    "cn": "許多家庭負擔不起冷氣,所以熱浪對貧窮和年長者特別危險。"
  },
  {
    "word": "cooling centre",
    "pos": "n.phr.",
    "cn_def": "避暑中心;降溫中心",
    "en_def": "a public place where people can escape extreme heat",
    "sentence": "The library became a {{BLANK}} during the heatwave, and older residents spent the afternoon there reading newspapers.",
    "cn": "熱浪期間圖書館成了避暑中心,年長居民在那裡看報紙度過下午。"
  },
  {
    "word": "preparedness",
    "pos": "n.",
    "cn_def": "準備就緒;防備",
    "en_def": "the state of being ready for an emergency",
    "sentence": "Disaster {{BLANK}} starts at home, so every family should have a bag with water, a torch and medicine.",
    "cn": "災害防備從家裡開始,所以每個家庭都應該準備一個裝有水、手電筒和藥品的包包。"
  },
  {
    "word": "contingency plan",
    "pos": "n.phr.",
    "cn_def": "應變計畫",
    "en_def": "a plan for what to do if something goes wrong",
    "sentence": "The festival organisers had a {{BLANK}} for bad weather, so the concert moved indoors when the storm came.",
    "cn": "活動主辦單位有針對惡劣天氣的應變計畫,所以暴風雨來時音樂會就移到室內舉行。"
  },
  {
    "word": "retrofit",
    "pos": "v.",
    "cn_def": "翻修改裝;加裝",
    "en_def": "to add new parts to an old building or machine",
    "sentence": "The city will {{BLANK}} old apartment buildings with better insulation, so residents can stay cool and pay less for electricity.",
    "cn": "市政府將為老舊公寓大樓加裝更好的隔熱設備,讓居民可以保持涼爽並少付電費。"
  },
  {
    "word": "flood-prone",
    "pos": "adj.",
    "cn_def": "易淹水的",
    "en_def": "likely to flood",
    "sentence": "New homes should not be built in {{BLANK}} areas, but land there is cheap, so developers keep building.",
    "cn": "新房子不應該蓋在易淹水的地區,但那裡的土地便宜,所以開發商一直在蓋。"
  },
  {
    "word": "zoning",
    "pos": "n.",
    "cn_def": "土地分區管制",
    "en_def": "rules about how land in an area may be used",
    "sentence": "The new {{BLANK}} rules stop building near the river, and the land will become a park that can safely flood.",
    "cn": "新的土地分區規定禁止在河邊建房,這塊地將變成一座可以安全淹水的公園。"
  },
  {
    "word": "managed retreat",
    "pos": "n.phr.",
    "cn_def": "有計畫的撤退(遷移)",
    "en_def": "a planned move of people away from dangerous coastal areas",
    "sentence": "The village chose {{BLANK}} instead of building a huge wall, so the families moved inland with government help.",
    "cn": "這個村莊選擇了有計畫的撤退,而不是建造巨大的牆,所以這些家庭在政府協助下遷往內陸。"
  },
  {
    "word": "stockpile",
    "pos": "v.",
    "cn_def": "儲備;囤積",
    "en_def": "to collect and store a large supply of something",
    "sentence": "Before the typhoon season, the town {{BLANK}} rice, water and medicine, so nobody went hungry when the roads closed.",
    "cn": "颱風季前,鎮上儲備了米、水和藥品,所以道路封閉時沒有人挨餓。"
  }
];

const MCQS = [
  {
    "q": "Climate _____ includes simple steps like planting trees for shade, so it is not only about expensive engineering.",
    "options": [
      "expenditure",
      "hailstorm",
      "displacement",
      "adaptation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The new hospital was designed to be _____, so it can keep running even if the power goes out during a storm.",
    "options": [
      "resilient",
      "feasible",
      "uninhabitable",
      "infectious"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The town built a taller _____ along the beach, but some people say it ruined the view of the ocean.",
    "options": [
      "salinity",
      "seawall",
      "thunderstorm",
      "malaria"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ along the river held back the water, so the neighbourhood stayed dry during the heavy rain.",
    "options": [
      "equity",
      "levy",
      "levee",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Volunteers filled sandbags to make the _____ higher, and they worked through the night before the river peaked.",
    "options": [
      "protest",
      "convention",
      "metric",
      "embankment"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Workers closed the _____ before the typhoon arrived, so the seawater could not flow into the canal.",
    "options": [
      "evacuation",
      "equity",
      "floodgate",
      "Arctic"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The old _____ system cannot handle today's heavy rain, so the city is digging wider pipes under the streets.",
    "options": [
      "drainage",
      "summit",
      "baseline",
      "altitude"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The water in the _____ dropped to ten percent, so the government asked everyone to take shorter showers.",
    "options": [
      "evaporation",
      "reservoir",
      "benchmark",
      "bleaching"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Drip _____ gives water directly to plant roots, so farmers can grow food while using much less water.",
    "options": [
      "mudslide",
      "mosquito",
      "hydropower",
      "irrigation"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The farmers _____ their fields at night now, because less water evaporates when the sun is down.",
    "options": [
      "irrigate",
      "quantify",
      "compost",
      "submerge"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Scientists developed _____ rice, so farmers can still get a harvest when the rains come late.",
    "options": [
      "constant",
      "drought-resistant",
      "polar",
      "coastal"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new _____ sends text messages before floods, so families have time to move to higher ground.",
    "options": [
      "extreme weather",
      "sea ice",
      "early warning system",
      "food security"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Many families _____ their houses on concrete posts, so floodwater can pass underneath without entering the rooms.",
    "options": [
      "jeopardise",
      "undertake",
      "flood",
      "elevate"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The fishermen's houses stand on _____ above the water, so they stay safe when the tide is unusually high.",
    "options": [
      "altitude",
      "stilts",
      "malaria",
      "magnitude"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our school collects _____ from the roof in large tanks, and we use it to water the garden and flush toilets.",
    "options": [
      "rainwater",
      "availability",
      "surge",
      "trajectory"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The island built a _____ plant because its wells were drying up, but the drinking water is now more expensive.",
    "options": [
      "disaster",
      "protest",
      "desalination",
      "greenwashing"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The city planted trees along the bus stops, so passengers can wait in the _____ on hot afternoons.",
    "options": [
      "shade",
      "trajectory",
      "evaporation",
      "surge"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The _____ project has planted a million trees, and the hills now hold rainwater instead of sliding down.",
    "options": [
      "clarity",
      "reforestation",
      "tailpipe",
      "gust"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After the fire, students helped _____ young trees on the hill, and they return every year to check them.",
    "options": [
      "enact",
      "curb",
      "replant",
      "escalate"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Our library has a _____ full of plants, so the building stays cooler and absorbs heavy rain.",
    "options": [
      "ice sheet",
      "water stress",
      "thermal expansion",
      "green roof"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Good _____ keeps classrooms cooler without air-conditioning, so the new school has large windows on both sides.",
    "options": [
      "landfill",
      "ventilation",
      "tornado",
      "tailpipe"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Many families cannot afford _____, so heatwaves are especially dangerous for poor and elderly people.",
    "options": [
      "air-conditioning",
      "hurricane",
      "biofuel",
      "mitigation"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The library became a _____ during the heatwave, and older residents spent the afternoon there reading newspapers.",
    "options": [
      "heat island",
      "food security",
      "cooling centre",
      "carbon dioxide"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Disaster _____ starts at home, so every family should have a bag with water, a torch and medicine.",
    "options": [
      "compromise",
      "landslide",
      "benchmark",
      "preparedness"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The festival organisers had a _____ for bad weather, so the concert moved indoors when the storm came.",
    "options": [
      "the tip of the iceberg",
      "crop failure",
      "contingency plan",
      "carbon footprint"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The city will _____ old apartment buildings with better insulation, so residents can stay cool and pay less for electricity.",
    "options": [
      "convey",
      "necessitate",
      "curb",
      "retrofit"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "New homes should not be built in _____ areas, but land there is cheap, so developers keep building.",
    "options": [
      "flood-prone",
      "credible",
      "impartial",
      "pervasive"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new _____ rules stop building near the river, and the land will become a park that can safely flood.",
    "options": [
      "meltwater",
      "zoning",
      "benchmark",
      "frequency"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The village chose _____ instead of building a huge wall, so the families moved inland with government help.",
    "options": [
      "managed retreat",
      "crop failure",
      "global warming",
      "storm surge"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Before the typhoon season, the town _____ rice, water and medicine, so nobody went hungry when the roads closed.",
    "options": [
      "devastate",
      "stockpile",
      "depict",
      "warrant"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "adaptation": {
    "pos": "n.",
    "en_def": "a change made to deal with new conditions",
    "cn_def": "調適;適應"
  },
  "resilient": {
    "pos": "adj.",
    "en_def": "able to recover quickly after something bad happens",
    "cn_def": "有韌性的;能迅速復原的"
  },
  "seawall": {
    "pos": "n.",
    "en_def": "a strong wall built to stop the sea from flooding land",
    "cn_def": "海堤"
  },
  "levee": {
    "pos": "n.",
    "en_def": "a raised bank built beside a river to stop flooding",
    "cn_def": "河堤;防洪堤"
  },
  "embankment": {
    "pos": "n.",
    "en_def": "a wall of earth or stone that holds back water",
    "cn_def": "堤防;路堤"
  },
  "floodgate": {
    "pos": "n.",
    "en_def": "a gate that controls the flow of water",
    "cn_def": "水閘門"
  },
  "drainage": {
    "pos": "n.",
    "en_def": "the system that carries away extra water",
    "cn_def": "排水(系統)"
  },
  "reservoir": {
    "pos": "n.",
    "en_def": "a large lake used to store water",
    "cn_def": "水庫"
  },
  "irrigation": {
    "pos": "n.",
    "en_def": "supplying water to land so crops can grow",
    "cn_def": "灌溉"
  },
  "irrigate": {
    "pos": "v.",
    "en_def": "to supply water to land through pipes or channels",
    "cn_def": "灌溉"
  },
  "drought-resistant": {
    "pos": "adj.",
    "en_def": "able to grow well with little water",
    "cn_def": "耐旱的"
  },
  "early warning system": {
    "pos": "n.phr.",
    "en_def": "a system that tells people about danger before it arrives",
    "cn_def": "預警系統"
  },
  "elevate": {
    "pos": "v.",
    "en_def": "to raise something to a higher position",
    "cn_def": "抬高;架高"
  },
  "stilts": {
    "pos": "n.",
    "en_def": "tall posts that hold a building above the ground or water",
    "cn_def": "高腳柱;支柱"
  },
  "rainwater": {
    "pos": "n.",
    "en_def": "water that has fallen as rain",
    "cn_def": "雨水"
  },
  "desalination": {
    "pos": "n.",
    "en_def": "the process of removing salt from sea water",
    "cn_def": "海水淡化"
  },
  "shade": {
    "pos": "n.",
    "en_def": "an area that is darker and cooler because the sun cannot reach it",
    "cn_def": "陰涼處;遮蔭"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "replant": {
    "pos": "v.",
    "en_def": "to plant again",
    "cn_def": "重新種植;補種"
  },
  "green roof": {
    "pos": "n.phr.",
    "en_def": "a roof covered with plants",
    "cn_def": "綠屋頂"
  },
  "ventilation": {
    "pos": "n.",
    "en_def": "the movement of fresh air through a room or building",
    "cn_def": "通風"
  },
  "air-conditioning": {
    "pos": "n.",
    "en_def": "a system that keeps the air in a building cool",
    "cn_def": "空調;冷氣"
  },
  "cooling centre": {
    "pos": "n.phr.",
    "en_def": "a public place where people can escape extreme heat",
    "cn_def": "避暑中心;降溫中心"
  },
  "preparedness": {
    "pos": "n.",
    "en_def": "the state of being ready for an emergency",
    "cn_def": "準備就緒;防備"
  },
  "contingency plan": {
    "pos": "n.phr.",
    "en_def": "a plan for what to do if something goes wrong",
    "cn_def": "應變計畫"
  },
  "retrofit": {
    "pos": "v.",
    "en_def": "to add new parts to an old building or machine",
    "cn_def": "翻修改裝;加裝"
  },
  "flood-prone": {
    "pos": "adj.",
    "en_def": "likely to flood",
    "cn_def": "易淹水的"
  },
  "zoning": {
    "pos": "n.",
    "en_def": "rules about how land in an area may be used",
    "cn_def": "土地分區管制"
  },
  "managed retreat": {
    "pos": "n.phr.",
    "en_def": "a planned move of people away from dangerous coastal areas",
    "cn_def": "有計畫的撤退(遷移)"
  },
  "stockpile": {
    "pos": "v.",
    "en_def": "to collect and store a large supply of something",
    "cn_def": "儲備;囤積"
  },
  "expenditure": {
    "pos": "n.",
    "en_def": "the amount of money spent",
    "cn_def": "支出;花費"
  },
  "hailstorm": {
    "pos": "n.",
    "en_def": "a storm in which balls of ice fall from the sky",
    "cn_def": "冰雹暴"
  },
  "displacement": {
    "pos": "n.",
    "en_def": "the forced movement of people from their homes",
    "cn_def": "流離失所;被迫遷移"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and practical to do",
    "cn_def": "可行的"
  },
  "uninhabitable": {
    "pos": "adj.",
    "en_def": "not safe or suitable for people to live in",
    "cn_def": "不適合居住的"
  },
  "infectious": {
    "pos": "adj.",
    "en_def": "able to spread from one person to another",
    "cn_def": "傳染性的"
  },
  "salinity": {
    "pos": "n.",
    "en_def": "the amount of salt in water",
    "cn_def": "鹽度"
  },
  "thunderstorm": {
    "pos": "n.",
    "en_def": "a storm with thunder, lightning and heavy rain",
    "cn_def": "雷雨"
  },
  "malaria": {
    "pos": "n.",
    "en_def": "a serious disease spread by mosquitoes",
    "cn_def": "瘧疾"
  },
  "equity": {
    "pos": "n.",
    "en_def": "fairness and equal treatment",
    "cn_def": "公平;公正"
  },
  "levy": {
    "pos": "n.",
    "en_def": "an official charge or tax",
    "cn_def": "徵收的稅;稅款"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清楚;明確"
  },
  "protest": {
    "pos": "n.",
    "en_def": "a public event where people show they disagree",
    "cn_def": "抗議(活動)"
  },
  "convention": {
    "pos": "n.",
    "en_def": "a formal agreement between countries",
    "cn_def": "公約"
  },
  "metric": {
    "pos": "n.",
    "en_def": "a way of measuring something",
    "cn_def": "指標;衡量標準"
  },
  "evacuation": {
    "pos": "n.",
    "en_def": "the act of moving people to a safe place",
    "cn_def": "撤離;疏散"
  },
  "arctic": {
    "pos": "n.",
    "en_def": "the area around the North Pole",
    "cn_def": "北極地區"
  },
  "summit": {
    "pos": "n.",
    "en_def": "an important meeting between leaders",
    "cn_def": "高峰會"
  },
  "baseline": {
    "pos": "n.",
    "en_def": "a starting point used for comparison",
    "cn_def": "基準線"
  },
  "altitude": {
    "pos": "n.",
    "en_def": "the height of a place above sea level",
    "cn_def": "海拔;高度"
  },
  "evaporation": {
    "pos": "n.",
    "en_def": "the process of water turning into gas",
    "cn_def": "蒸發(作用)"
  },
  "benchmark": {
    "pos": "n.",
    "en_def": "a standard used for comparison",
    "cn_def": "基準;標竿"
  },
  "bleaching": {
    "pos": "n.",
    "en_def": "the loss of colour in coral when the water is too warm",
    "cn_def": "(珊瑚)白化"
  },
  "mudslide": {
    "pos": "n.",
    "en_def": "a flow of wet mud down a hill",
    "cn_def": "泥流;土石流"
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect that bites people",
    "cn_def": "蚊子"
  },
  "hydropower": {
    "pos": "n.",
    "en_def": "electricity made from moving water",
    "cn_def": "水力發電"
  },
  "quantify": {
    "pos": "v.",
    "en_def": "to measure something as a number",
    "cn_def": "量化"
  },
  "compost": {
    "pos": "v.",
    "en_def": "to turn food and garden waste into natural fertiliser",
    "cn_def": "堆肥"
  },
  "submerge": {
    "pos": "v.",
    "en_def": "to go or put completely under water",
    "cn_def": "淹沒;沉入水中"
  },
  "constant": {
    "pos": "adj.",
    "en_def": "happening all the time",
    "cn_def": "持續不斷的"
  },
  "polar": {
    "pos": "adj.",
    "en_def": "near the North or South Pole",
    "cn_def": "極地的"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the sea coast",
    "cn_def": "沿海的"
  },
  "extreme weather": {
    "pos": "n.phr.",
    "en_def": "very unusual and dangerous weather",
    "cn_def": "極端天氣"
  },
  "sea ice": {
    "pos": "n.phr.",
    "en_def": "frozen sea water floating on the ocean",
    "cn_def": "海冰"
  },
  "food security": {
    "pos": "n.phr.",
    "en_def": "having enough safe, healthy food to eat",
    "cn_def": "糧食安全"
  },
  "jeopardise": {
    "pos": "v.",
    "en_def": "to put something in danger",
    "cn_def": "危及;使陷入危險"
  },
  "undertake": {
    "pos": "v.",
    "en_def": "to start doing a job or task",
    "cn_def": "承擔;進行"
  },
  "flood": {
    "pos": "v.",
    "en_def": "to cover an area with water",
    "cn_def": "淹沒;淹水"
  },
  "magnitude": {
    "pos": "n.",
    "en_def": "the great size or importance of something",
    "cn_def": "規模;重要性"
  },
  "availability": {
    "pos": "n.",
    "en_def": "how easy something is to get or use",
    "cn_def": "可取得性;供應"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden large increase",
    "cn_def": "激增;暴增"
  },
  "trajectory": {
    "pos": "n.",
    "en_def": "the path or direction of development",
    "cn_def": "軌跡;發展趨勢"
  },
  "disaster": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "災難"
  },
  "greenwashing": {
    "pos": "n.",
    "en_def": "making a product seem better for nature than it really is",
    "cn_def": "漂綠"
  },
  "tailpipe": {
    "pos": "n.",
    "en_def": "the pipe at the back of a car where exhaust comes out",
    "cn_def": "(汽車)排氣管"
  },
  "gust": {
    "pos": "n.",
    "en_def": "a sudden strong rush of wind",
    "cn_def": "一陣強風"
  },
  "enact": {
    "pos": "v.",
    "en_def": "to make a law",
    "cn_def": "制定(法律);頒布"
  },
  "curb": {
    "pos": "v.",
    "en_def": "to control or limit something bad",
    "cn_def": "抑制;控制"
  },
  "escalate": {
    "pos": "v.",
    "en_def": "to become more serious or bigger",
    "cn_def": "升級;加劇"
  },
  "ice sheet": {
    "pos": "n.phr.",
    "en_def": "a very large, thick layer of ice covering land",
    "cn_def": "冰原;冰蓋"
  },
  "water stress": {
    "pos": "n.phr.",
    "en_def": "when people need more water than is available",
    "cn_def": "缺水壓力;水資源壓力"
  },
  "thermal expansion": {
    "pos": "n.phr.",
    "en_def": "the way water takes up more space when it gets warmer",
    "cn_def": "熱膨脹"
  },
  "landfill": {
    "pos": "n.",
    "en_def": "a place where rubbish is buried in the ground",
    "cn_def": "垃圾掩埋場"
  },
  "tornado": {
    "pos": "n.",
    "en_def": "a narrow, spinning column of wind that destroys things",
    "cn_def": "龍捲風"
  },
  "hurricane": {
    "pos": "n.",
    "en_def": "a violent tropical storm in the Atlantic",
    "cn_def": "颶風"
  },
  "biofuel": {
    "pos": "n.",
    "en_def": "fuel made from plants or animal waste",
    "cn_def": "生質燃料"
  },
  "mitigation": {
    "pos": "n.",
    "en_def": "actions that reduce how bad something is",
    "cn_def": "減緩;緩解"
  },
  "heat island": {
    "pos": "n.phr.",
    "en_def": "a city area much warmer than the countryside around it",
    "cn_def": "熱島"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "the gas CO2, produced when fuel is burned",
    "cn_def": "二氧化碳"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement where each side gives up something",
    "cn_def": "妥協;折衷"
  },
  "landslide": {
    "pos": "n.",
    "en_def": "a mass of earth and rocks falling down a hill",
    "cn_def": "山崩;土石流"
  },
  "the tip of the iceberg": {
    "pos": "n.phr.",
    "en_def": "a small, visible part of a much bigger problem",
    "cn_def": "冰山一角"
  },
  "crop failure": {
    "pos": "n.phr.",
    "en_def": "when crops do not grow well enough to harvest",
    "cn_def": "作物歉收"
  },
  "carbon footprint": {
    "pos": "n.phr.",
    "en_def": "the amount of carbon a person or activity produces",
    "cn_def": "碳足跡"
  },
  "convey": {
    "pos": "v.",
    "en_def": "to communicate an idea or feeling",
    "cn_def": "傳達"
  },
  "necessitate": {
    "pos": "v.",
    "en_def": "to make something necessary",
    "cn_def": "使成為必要"
  },
  "credible": {
    "pos": "adj.",
    "en_def": "able to be believed or trusted",
    "cn_def": "可信的"
  },
  "impartial": {
    "pos": "adj.",
    "en_def": "not supporting one side more than another",
    "cn_def": "公正的;不偏袒的"
  },
  "pervasive": {
    "pos": "adj.",
    "en_def": "spreading widely through every part",
    "cn_def": "無所不在的;普遍的"
  },
  "meltwater": {
    "pos": "n.",
    "en_def": "water from melting snow or ice",
    "cn_def": "融水;雪水"
  },
  "frequency": {
    "pos": "n.",
    "en_def": "how often something happens",
    "cn_def": "頻率"
  },
  "global warming": {
    "pos": "n.phr.",
    "en_def": "the rise in the Earth's average temperature",
    "cn_def": "全球暖化"
  },
  "storm surge": {
    "pos": "n.phr.",
    "en_def": "a sudden rise of sea water pushed by a storm",
    "cn_def": "風暴潮"
  },
  "devastate": {
    "pos": "v.",
    "en_def": "to destroy or damage something very badly",
    "cn_def": "摧毀;使荒廢"
  },
  "depict": {
    "pos": "v.",
    "en_def": "to show something in a picture or story",
    "cn_def": "描繪"
  },
  "warrant": {
    "pos": "v.",
    "en_def": "to make an action seem right or necessary",
    "cn_def": "使…有必要;值得"
  }
};

const EXTRA_GLOSSES = {};
