// Topic 21 Subunit 3 Quiz Data: Renewable Energy 再生能源
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S03 - Renewable Energy 再生能源",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "solar farm",
    "pos": "n.phr.",
    "cn_def": "太陽能發電場",
    "en_def": "a large area of land covered with solar panels",
    "sentence": "The old salt fields were turned into a {{BLANK}}, and now they produce clean electricity for nearby towns.",
    "cn": "舊鹽田被改建成太陽能發電場，現在為附近城鎮生產乾淨的電力。"
  },
  {
    "word": "solar power",
    "pos": "n.phr.",
    "cn_def": "太陽能發電",
    "en_def": "electricity made from sunlight",
    "sentence": "Our school has started using {{BLANK}} on its roof, and the electricity bill has dropped by almost a third.",
    "cn": "我們學校已經開始在屋頂使用太陽能發電，電費幾乎減少了三分之一。"
  },
  {
    "word": "solar cell",
    "pos": "n.phr.",
    "cn_def": "太陽能電池",
    "en_def": "a small device that changes sunlight into electricity",
    "sentence": "My calculator has a tiny {{BLANK}} above the screen, so I never need to change its battery.",
    "cn": "我的計算機螢幕上方有一個小小的太陽能電池，所以我從來不需要換電池。"
  },
  {
    "word": "solar water heater",
    "pos": "n.phr.",
    "cn_def": "太陽能熱水器",
    "en_def": "a system on a roof that uses the sun to heat water",
    "sentence": "My grandparents installed a {{BLANK}} on their roof, and now they can take hot showers without using gas.",
    "cn": "我祖父母在屋頂裝了太陽能熱水器，現在他們不用瓦斯就能洗熱水澡。"
  },
  {
    "word": "rooftop solar",
    "pos": "n.phr.",
    "cn_def": "屋頂型太陽能",
    "en_def": "solar panels placed on the roofs of buildings",
    "sentence": "More families are choosing {{BLANK}} because it lowers their bills, and they can sell extra power back to the grid.",
    "cn": "越來越多家庭選擇屋頂型太陽能，因為它能降低電費，而且他們可以把多餘的電賣回電網。"
  },
  {
    "word": "wind farm",
    "pos": "n.phr.",
    "cn_def": "風力發電場",
    "en_def": "a group of wind turbines that make electricity",
    "sentence": "We could see a {{BLANK}} from the beach, and the tall white turbines were turning slowly in the sea breeze.",
    "cn": "我們從海灘上可以看見一座風力發電場，高大的白色風機在海風中緩緩轉動。"
  },
  {
    "word": "offshore wind farm",
    "pos": "n.phr.",
    "cn_def": "離岸風場",
    "en_def": "a group of wind turbines built in the sea",
    "sentence": "Taiwan is building many {{BLANK}} in the Taiwan Strait, because the wind there is strong for most of the year.",
    "cn": "台灣正在台灣海峽興建許多離岸風場，因為那裡一年大部分時間風都很強。"
  },
  {
    "word": "wind power",
    "pos": "n.phr.",
    "cn_def": "風力發電",
    "en_def": "electricity made by the movement of wind",
    "sentence": "Denmark gets about half of its electricity from {{BLANK}}, so it is often used as a model for other countries.",
    "cn": "丹麥大約一半的電力來自風力發電，所以它經常被當作其他國家的典範。"
  },
  {
    "word": "blade",
    "pos": "n.",
    "cn_def": "葉片",
    "en_def": "one of the long flat parts of a turbine that turns",
    "sentence": "Each {{BLANK}} of the turbine is longer than a football field, so it must be carried to the coast on a special truck.",
    "cn": "風機的每一片葉片都比足球場還長，所以必須用特殊卡車運到海岸。"
  },
  {
    "word": "rotor",
    "pos": "n.",
    "cn_def": "轉子；旋翼",
    "en_def": "the turning part of a machine",
    "sentence": "The engineer stopped the {{BLANK}} because the wind was too strong, and he did not want the machine to be damaged.",
    "cn": "工程師讓轉子停下來，因為風太強了，他不希望機器受損。"
  },
  {
    "word": "hydroelectric",
    "pos": "adj.",
    "cn_def": "水力發電的",
    "en_def": "producing electricity from moving water",
    "sentence": "The {{BLANK}} station in the mountains uses water from the river, and it can quickly increase power when demand is high.",
    "cn": "山區的水力發電廠利用河水，當需求高時它能迅速增加發電量。"
  },
  {
    "word": "dam",
    "pos": "n.",
    "cn_def": "水壩",
    "en_def": "a wall built across a river to hold back water",
    "sentence": "The new {{BLANK}} will store water for farmers and produce electricity, but hundreds of families must move away from the valley.",
    "cn": "新水壩將為農民儲水並發電，但數百戶家庭必須搬離山谷。"
  },
  {
    "word": "tidal power",
    "pos": "n.phr.",
    "cn_def": "潮汐發電",
    "en_def": "electricity made from the rise and fall of the sea",
    "sentence": "{{BLANK}} is very predictable because tides come at fixed times, but building the machines in the sea is expensive.",
    "cn": "潮汐發電非常容易預測，因為潮汐在固定時間出現，但在海中建造機器很昂貴。"
  },
  {
    "word": "wave energy",
    "pos": "n.phr.",
    "cn_def": "波浪能",
    "en_def": "power taken from the movement of ocean waves",
    "sentence": "Scientists are testing machines that collect {{BLANK}} off the coast, and they hope the idea will work on a large scale.",
    "cn": "科學家正在海岸外測試收集波浪能的機器，他們希望這個構想能大規模運作。"
  },
  {
    "word": "biogas",
    "pos": "n.",
    "cn_def": "沼氣",
    "en_def": "gas made from rotting food, plants or animal waste",
    "sentence": "The pig farm turns animal waste into {{BLANK}}, so it can heat its own buildings and reduce bad smells at the same time.",
    "cn": "這座養豬場把動物排泄物轉變成沼氣，所以既能為自己的建築供暖，同時也能減少臭味。"
  },
  {
    "word": "ethanol",
    "pos": "n.",
    "cn_def": "乙醇",
    "en_def": "an alcohol made from plants that can be used as fuel",
    "sentence": "In Brazil many cars run on {{BLANK}} made from sugar cane, so the country needs less imported oil.",
    "cn": "在巴西，許多車使用由甘蔗製成的乙醇，所以這個國家需要進口的石油較少。"
  },
  {
    "word": "biodiesel",
    "pos": "n.",
    "cn_def": "生質柴油",
    "en_def": "a fuel made from vegetable oil or animal fat",
    "sentence": "Our city's rubbish trucks now use {{BLANK}} made from used cooking oil, and the air around the stations smells less of smoke.",
    "cn": "我們城市的垃圾車現在使用廢食用油製成的生質柴油，車站周圍的空氣也比較沒有煙味了。"
  },
  {
    "word": "green hydrogen",
    "pos": "n.phr.",
    "cn_def": "綠氫",
    "en_def": "hydrogen made using renewable electricity",
    "sentence": "Steel companies are interested in {{BLANK}}, because it could replace coal and cut a huge amount of pollution.",
    "cn": "鋼鐵公司對綠氫很感興趣，因為它可能取代煤炭並大幅減少污染。"
  },
  {
    "word": "fuel cell",
    "pos": "n.phr.",
    "cn_def": "燃料電池",
    "en_def": "a device that makes electricity from hydrogen and oxygen",
    "sentence": "This bus runs on a hydrogen {{BLANK}}, and the only thing that comes out of the back is clean water.",
    "cn": "這輛公車使用氫燃料電池，從車尾排出的唯一東西就是乾淨的水。"
  },
  {
    "word": "hydrogen",
    "pos": "n.",
    "cn_def": "氫",
    "en_def": "a very light gas that can be used as clean fuel",
    "sentence": "Japan wants to use more {{BLANK}} in the future, because burning it produces water instead of harmful gases.",
    "cn": "日本未來想使用更多氫，因為燃燒它產生的是水，而不是有害氣體。"
  },
  {
    "word": "clean energy",
    "pos": "n.phr.",
    "cn_def": "乾淨能源",
    "en_def": "power that causes little or no pollution",
    "sentence": "Many young people want to work in {{BLANK}}, because they believe it is good for the planet and has a bright future.",
    "cn": "許多年輕人想在乾淨能源領域工作，因為他們相信這對地球有益，而且前途光明。"
  },
  {
    "word": "alternative energy",
    "pos": "n.phr.",
    "cn_def": "替代能源",
    "en_def": "energy that does not come from fossil fuels",
    "sentence": "Our class did a project on {{BLANK}}, and each group built a small model powered by the sun or wind.",
    "cn": "我們班做了一個關於替代能源的專題，每一組都做了一個靠太陽或風驅動的小模型。"
  },
  {
    "word": "renewables",
    "pos": "n.",
    "cn_def": "再生能源",
    "en_def": "energy sources such as sun and wind that never run out",
    "sentence": "The share of electricity from {{BLANK}} has grown quickly, but coal and gas are still the main sources in many countries.",
    "cn": "來自再生能源的電力比例快速成長，但在許多國家煤和天然氣仍是主要來源。"
  },
  {
    "word": "intermittency",
    "pos": "n.",
    "cn_def": "間歇性",
    "en_def": "the problem of not producing power all the time",
    "sentence": "The biggest problem with solar power is {{BLANK}}, because panels produce nothing at night and very little on cloudy days.",
    "cn": "太陽能最大的問題是間歇性，因為太陽能板在夜間完全不發電，陰天也發電很少。"
  },
  {
    "word": "energy transition",
    "pos": "n.phr.",
    "cn_def": "能源轉型",
    "en_def": "the change from fossil fuels to clean energy",
    "sentence": "The {{BLANK}} will create many new jobs, but workers in coal towns are afraid that they will be left behind.",
    "cn": "能源轉型將創造許多新工作，但煤礦城鎮的工人擔心他們會被拋在後頭。"
  },
  {
    "word": "feed-in tariff",
    "pos": "n.phr.",
    "cn_def": "躉購費率",
    "en_def": "a fixed price paid for clean power sold to the grid",
    "sentence": "The government offers a generous {{BLANK}}, so farmers can earn money by putting solar panels on their fish ponds.",
    "cn": "政府提供優厚的躉購費率，所以農民可以在魚塭上裝設太陽能板來賺錢。"
  },
  {
    "word": "solar-powered",
    "pos": "adj.",
    "cn_def": "太陽能驅動的",
    "en_def": "using energy from the sun",
    "sentence": "We bought a {{BLANK}} lamp for the garden, and it charges during the day and turns on by itself at night.",
    "cn": "我們買了一盞太陽能花園燈，它白天充電，晚上會自己亮起來。"
  },
  {
    "word": "inverter",
    "pos": "n.",
    "cn_def": "逆變器",
    "en_def": "a device that changes direct current into alternating current",
    "sentence": "The solar panels on our roof stopped working because the {{BLANK}} was broken, so the technician came to replace it.",
    "cn": "我們屋頂的太陽能板停止運作，因為逆變器壞了，所以技術人員來更換。"
  },
  {
    "word": "sunlight",
    "pos": "n.",
    "cn_def": "陽光",
    "en_def": "the light that comes from the sun",
    "sentence": "Southern Taiwan gets plenty of {{BLANK}} all year round, so it is a good place to build large solar projects.",
    "cn": "台灣南部全年都有充足的陽光，所以是建造大型太陽能計畫的好地點。"
  },
  {
    "word": "wind speed",
    "pos": "n.phr.",
    "cn_def": "風速",
    "en_def": "how fast the wind is blowing",
    "sentence": "The turbines only start turning when the {{BLANK}} is high enough, so on calm days they produce no power at all.",
    "cn": "風機只有在風速夠高時才會開始轉動，所以在無風的日子完全不發電。"
  },
  {
    "word": "spillway",
    "pos": "n.",
    "cn_def": "溢洪道",
    "en_def": "a channel that lets extra water flow out of a dam",
    "sentence": "After days of heavy rain, the {{BLANK}} was opened to release water, and crowds gathered to watch the powerful flow.",
    "cn": "連續數日豪雨之後，溢洪道被打開洩洪，群眾聚集觀看強大的水流。"
  },
  {
    "word": "run-of-river",
    "pos": "adj.",
    "cn_def": "川流式的",
    "en_def": "using a river's natural flow without a big dam",
    "sentence": "A small {{BLANK}} power station was built on the stream, so the village gets electricity without flooding the valley.",
    "cn": "小溪上建了一座小型川流式發電站，所以村莊不必淹沒山谷就能取得電力。"
  },
  {
    "word": "installed capacity",
    "pos": "n.phr.",
    "cn_def": "裝置容量",
    "en_def": "the maximum power that all machines can produce",
    "sentence": "The country's {{BLANK}} for solar power has doubled in five years, but actual output depends on the weather.",
    "cn": "這個國家的太陽能裝置容量五年內增加了一倍，但實際發電量取決於天氣。"
  },
  {
    "word": "capacity factor",
    "pos": "n.phr.",
    "cn_def": "容量因數",
    "en_def": "how much power a plant really makes compared with its maximum",
    "sentence": "Offshore turbines have a higher {{BLANK}} than those on land, because the wind at sea is stronger and steadier.",
    "cn": "離岸風機的容量因數比陸上風機高，因為海上的風更強也更穩定。"
  }
];

const MCQS = [
  {
    "q": "The old salt fields were turned into a _____, and now they produce clean electricity for nearby towns.",
    "options": [
      "tar sands",
      "gas guzzler",
      "crude oil",
      "solar farm"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Our school has started using _____ on its roof, and the electricity bill has dropped by almost a third.",
    "options": [
      "solar power",
      "fuel rod",
      "charging station",
      "load shedding"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "My calculator has a tiny _____ above the screen, so I never need to change its battery.",
    "options": [
      "cooling tower",
      "solar cell",
      "oil platform",
      "stranded asset"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "My grandparents installed a _____ on their roof, and now they can take hot showers without using gas.",
    "options": [
      "water rights",
      "smart grid",
      "solar water heater",
      "natural gas"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "More families are choosing _____ because it lowers their bills, and they can sell extra power back to the grid.",
    "options": [
      "central heating",
      "rooftop solar",
      "scrap metal",
      "vested interest"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "We could see a _____ from the beach, and the tall white turbines were turning slowly in the sea breeze.",
    "options": [
      "wind farm",
      "cooling tower",
      "price ceiling",
      "extension cord"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Taiwan is building many _____ in the Taiwan Strait, because the wind there is strong for most of the year.",
    "options": [
      "circular economy",
      "peak demand",
      "energy crisis",
      "offshore wind farm"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Denmark gets about half of its electricity from _____, so it is often used as a model for other countries.",
    "options": [
      "a drain on",
      "oil crisis",
      "wind power",
      "natural gas"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Each _____ of the turbine is longer than a football field, so it must be carried to the coast on a special truck.",
    "options": [
      "substation",
      "blade",
      "megawatt",
      "immediacy"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The engineer stopped the _____ because the wind was too strong, and he did not want the machine to be damaged.",
    "options": [
      "predictability",
      "insufficiency",
      "rotor",
      "megawatt"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ station in the mountains uses water from the river, and it can quickly increase power when demand is high.",
    "options": [
      "analogue",
      "centralised",
      "downward",
      "hydroelectric"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The new _____ will store water for farmers and produce electricity, but hundreds of families must move away from the valley.",
    "options": [
      "dam",
      "privatisation",
      "baseload",
      "conductivity"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "_____ is very predictable because tides come at fixed times, but building the machines in the sea is expensive.",
    "options": [
      "rainwater harvesting",
      "power line",
      "water rights",
      "tidal power"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Scientists are testing machines that collect _____ off the coast, and they hope the idea will work on a large scale.",
    "options": [
      "wave energy",
      "gas flaring",
      "low-hanging fruit",
      "surge protector"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The pig farm turns animal waste into _____, so it can heat its own buildings and reduce bad smells at the same time.",
    "options": [
      "interconnection",
      "biogas",
      "acceptability",
      "socket"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "In Brazil many cars run on _____ made from sugar cane, so the country needs less imported oil.",
    "options": [
      "activism",
      "kilowatt-hour",
      "ethanol",
      "prospector"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our city's rubbish trucks now use _____ made from used cooking oil, and the air around the stations smells less of smoke.",
    "options": [
      "biodiesel",
      "tailings",
      "aluminium",
      "decarbonisation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Steel companies are interested in _____, because it could replace coal and cut a huge amount of pollution.",
    "options": [
      "oil reserves",
      "green hydrogen",
      "smart thermostat",
      "oil exploration"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "This bus runs on a hydrogen _____, and the only thing that comes out of the back is clean water.",
    "options": [
      "oil well",
      "eco mode",
      "a drain on",
      "fuel cell"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Japan wants to use more _____ in the future, because burning it produces water instead of harmful gases.",
    "options": [
      "diesel",
      "wastage",
      "hydrogen",
      "renegotiation"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Many young people want to work in _____, because they believe it is good for the planet and has a bright future.",
    "options": [
      "ore deposit",
      "water supply",
      "smart thermostat",
      "clean energy"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Our class did a project on _____, and each group built a small model powered by the sun or wind.",
    "options": [
      "alternative energy",
      "oil well",
      "jet fuel",
      "mineral rights"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The share of electricity from _____ has grown quickly, but coal and gas are still the main sources in many countries.",
    "options": [
      "electorate",
      "overextraction",
      "renewables",
      "amplification"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The biggest problem with solar power is _____, because panels produce nothing at night and very little on cloudy days.",
    "options": [
      "mine",
      "intermittency",
      "externality",
      "relocation"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ will create many new jobs, but workers in coal towns are afraid that they will be left behind.",
    "options": [
      "tar sands",
      "charging station",
      "smart plug",
      "energy transition"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The government offers a generous _____, so farmers can earn money by putting solar panels on their fish ponds.",
    "options": [
      "heating oil",
      "feed-in tariff",
      "energy demand",
      "power bank"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "We bought a _____ lamp for the garden, and it charges during the day and turns on by itself at night.",
    "options": [
      "declining",
      "dwindling",
      "solar-powered",
      "usable"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The solar panels on our roof stopped working because the _____ was broken, so the technician came to replace it.",
    "options": [
      "inverter",
      "aridity",
      "maximisation",
      "multiplier"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Southern Taiwan gets plenty of _____ all year round, so it is a good place to build large solar projects.",
    "options": [
      "rig",
      "pylon",
      "sunlight",
      "overdependence"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The turbines only start turning when the _____ is high enough, so on calm days they produce no power at all.",
    "options": [
      "stranded asset",
      "wind speed",
      "short circuit",
      "loft insulation"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "After days of heavy rain, the _____ was opened to release water, and crowds gathered to watch the powerful flow.",
    "options": [
      "watt",
      "prospector",
      "inflow",
      "spillway"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "A small _____ power station was built on the stream, so the village gets electricity without flooding the valley.",
    "options": [
      "run-of-river",
      "foreseeable",
      "nuclear-free",
      "petrochemical"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The country's _____ for solar power has doubled in five years, but actual output depends on the weather.",
    "options": [
      "energy security",
      "installed capacity",
      "transmission line",
      "stranded asset"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Offshore turbines have a higher _____ than those on land, because the wind at sea is stronger and steadier.",
    "options": [
      "crude oil",
      "smart grid",
      "capacity factor",
      "power plant"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "solar farm": {
    "pos": "n.phr.",
    "en_def": "a large area of land covered with solar panels",
    "cn_def": "太陽能發電場"
  },
  "solar power": {
    "pos": "n.phr.",
    "en_def": "electricity made from sunlight",
    "cn_def": "太陽能發電"
  },
  "solar cell": {
    "pos": "n.phr.",
    "en_def": "a small device that changes sunlight into electricity",
    "cn_def": "太陽能電池"
  },
  "solar water heater": {
    "pos": "n.phr.",
    "en_def": "a system on a roof that uses the sun to heat water",
    "cn_def": "太陽能熱水器"
  },
  "rooftop solar": {
    "pos": "n.phr.",
    "en_def": "solar panels placed on the roofs of buildings",
    "cn_def": "屋頂型太陽能"
  },
  "wind farm": {
    "pos": "n.phr.",
    "en_def": "a group of wind turbines that make electricity",
    "cn_def": "風力發電場"
  },
  "offshore wind farm": {
    "pos": "n.phr.",
    "en_def": "a group of wind turbines built in the sea",
    "cn_def": "離岸風場"
  },
  "wind power": {
    "pos": "n.phr.",
    "en_def": "electricity made by the movement of wind",
    "cn_def": "風力發電"
  },
  "blade": {
    "pos": "n.",
    "en_def": "one of the long flat parts of a turbine that turns",
    "cn_def": "葉片"
  },
  "rotor": {
    "pos": "n.",
    "en_def": "the turning part of a machine",
    "cn_def": "轉子；旋翼"
  },
  "hydroelectric": {
    "pos": "adj.",
    "en_def": "producing electricity from moving water",
    "cn_def": "水力發電的"
  },
  "dam": {
    "pos": "n.",
    "en_def": "a wall built across a river to hold back water",
    "cn_def": "水壩"
  },
  "tidal power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the rise and fall of the sea",
    "cn_def": "潮汐發電"
  },
  "wave energy": {
    "pos": "n.phr.",
    "en_def": "power taken from the movement of ocean waves",
    "cn_def": "波浪能"
  },
  "biogas": {
    "pos": "n.",
    "en_def": "gas made from rotting food, plants or animal waste",
    "cn_def": "沼氣"
  },
  "ethanol": {
    "pos": "n.",
    "en_def": "an alcohol made from plants that can be used as fuel",
    "cn_def": "乙醇"
  },
  "biodiesel": {
    "pos": "n.",
    "en_def": "a fuel made from vegetable oil or animal fat",
    "cn_def": "生質柴油"
  },
  "green hydrogen": {
    "pos": "n.phr.",
    "en_def": "hydrogen made using renewable electricity",
    "cn_def": "綠氫"
  },
  "fuel cell": {
    "pos": "n.phr.",
    "en_def": "a device that makes electricity from hydrogen and oxygen",
    "cn_def": "燃料電池"
  },
  "hydrogen": {
    "pos": "n.",
    "en_def": "a very light gas that can be used as clean fuel",
    "cn_def": "氫"
  },
  "clean energy": {
    "pos": "n.phr.",
    "en_def": "power that causes little or no pollution",
    "cn_def": "乾淨能源"
  },
  "alternative energy": {
    "pos": "n.phr.",
    "en_def": "energy that does not come from fossil fuels",
    "cn_def": "替代能源"
  },
  "renewables": {
    "pos": "n.",
    "en_def": "energy sources such as sun and wind that never run out",
    "cn_def": "再生能源"
  },
  "intermittency": {
    "pos": "n.",
    "en_def": "the problem of not producing power all the time",
    "cn_def": "間歇性"
  },
  "energy transition": {
    "pos": "n.phr.",
    "en_def": "the change from fossil fuels to clean energy",
    "cn_def": "能源轉型"
  },
  "feed-in tariff": {
    "pos": "n.phr.",
    "en_def": "a fixed price paid for clean power sold to the grid",
    "cn_def": "躉購費率"
  },
  "solar-powered": {
    "pos": "adj.",
    "en_def": "using energy from the sun",
    "cn_def": "太陽能驅動的"
  },
  "inverter": {
    "pos": "n.",
    "en_def": "a device that changes direct current into alternating current",
    "cn_def": "逆變器"
  },
  "sunlight": {
    "pos": "n.",
    "en_def": "the light that comes from the sun",
    "cn_def": "陽光"
  },
  "wind speed": {
    "pos": "n.phr.",
    "en_def": "how fast the wind is blowing",
    "cn_def": "風速"
  },
  "spillway": {
    "pos": "n.",
    "en_def": "a channel that lets extra water flow out of a dam",
    "cn_def": "溢洪道"
  },
  "run-of-river": {
    "pos": "adj.",
    "en_def": "using a river's natural flow without a big dam",
    "cn_def": "川流式的"
  },
  "installed capacity": {
    "pos": "n.phr.",
    "en_def": "the maximum power that all machines can produce",
    "cn_def": "裝置容量"
  },
  "capacity factor": {
    "pos": "n.phr.",
    "en_def": "how much power a plant really makes compared with its maximum",
    "cn_def": "容量因數"
  },
  "tar sands": {
    "pos": "n.phr.",
    "en_def": "sand mixed with thick, sticky oil",
    "cn_def": "油砂"
  },
  "gas guzzler": {
    "pos": "n.phr.",
    "en_def": "a big car that uses a lot of fuel",
    "cn_def": "耗油車"
  },
  "crude oil": {
    "pos": "n.phr.",
    "en_def": "oil in its natural state before it is cleaned",
    "cn_def": "原油"
  },
  "fuel rod": {
    "pos": "n.phr.",
    "en_def": "a long metal tube that holds nuclear fuel",
    "cn_def": "燃料棒"
  },
  "charging station": {
    "pos": "n.phr.",
    "en_def": "a place where electric cars can be charged",
    "cn_def": "充電站"
  },
  "load shedding": {
    "pos": "n.phr.",
    "en_def": "cutting power to some areas so the system does not fail",
    "cn_def": "限電；分區停電"
  },
  "cooling tower": {
    "pos": "n.phr.",
    "en_def": "a tall round tower that releases heat from a power plant",
    "cn_def": "冷卻塔"
  },
  "oil platform": {
    "pos": "n.phr.",
    "en_def": "a structure in the sea where oil is taken from the seabed",
    "cn_def": "海上採油平台"
  },
  "stranded asset": {
    "pos": "n.phr.",
    "en_def": "something valuable that loses its value early, like an unused coal plant",
    "cn_def": "擱淺資產"
  },
  "water rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to use water from a river or lake",
    "cn_def": "水權"
  },
  "smart grid": {
    "pos": "n.phr.",
    "en_def": "an electricity network that uses computers to manage power",
    "cn_def": "智慧電網"
  },
  "natural gas": {
    "pos": "n.phr.",
    "en_def": "a gas from under the ground used for heating and cooking",
    "cn_def": "天然氣"
  },
  "central heating": {
    "pos": "n.phr.",
    "en_def": "a system that heats a whole building from one place",
    "cn_def": "中央暖氣"
  },
  "scrap metal": {
    "pos": "n.phr.",
    "en_def": "old metal that can be melted and used again",
    "cn_def": "廢金屬"
  },
  "vested interest": {
    "pos": "n.phr.",
    "en_def": "a personal reason for wanting something to happen",
    "cn_def": "既得利益"
  },
  "price ceiling": {
    "pos": "n.phr.",
    "en_def": "the highest price allowed by law",
    "cn_def": "價格上限"
  },
  "extension cord": {
    "pos": "n.phr.",
    "en_def": "a long wire that lets you plug in things far from a socket",
    "cn_def": "延長線"
  },
  "circular economy": {
    "pos": "n.phr.",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "cn_def": "循環經濟"
  },
  "peak demand": {
    "pos": "n.phr.",
    "en_def": "the time when people use the most electricity",
    "cn_def": "尖峰用電需求"
  },
  "energy crisis": {
    "pos": "n.phr.",
    "en_def": "a serious shortage of energy and very high prices",
    "cn_def": "能源危機"
  },
  "a drain on": {
    "pos": "n.phr.",
    "en_def": "something that uses up money or resources",
    "cn_def": "消耗；負擔"
  },
  "oil crisis": {
    "pos": "n.phr.",
    "en_def": "a time when oil becomes very scarce and expensive",
    "cn_def": "石油危機"
  },
  "substation": {
    "pos": "n.",
    "en_def": "a place where electricity is changed before reaching homes",
    "cn_def": "變電所"
  },
  "megawatt": {
    "pos": "n.",
    "en_def": "a unit of power equal to one million watts",
    "cn_def": "百萬瓦；兆瓦"
  },
  "immediacy": {
    "pos": "n.",
    "en_def": "the quality of being urgent and happening now",
    "cn_def": "迫切性；即時性"
  },
  "predictability": {
    "pos": "n.",
    "en_def": "the quality of being expected or known in advance",
    "cn_def": "可預測性"
  },
  "insufficiency": {
    "pos": "n.",
    "en_def": "a lack of enough of something",
    "cn_def": "不足"
  },
  "analogue": {
    "pos": "adj.",
    "en_def": "using older, non-digital technology",
    "cn_def": "類比式的"
  },
  "centralised": {
    "pos": "adj.",
    "en_def": "controlled from one main place",
    "cn_def": "集中的"
  },
  "downward": {
    "pos": "adj.",
    "en_def": "moving towards a lower level",
    "cn_def": "向下的"
  },
  "privatisation": {
    "pos": "n.",
    "en_def": "the selling of state-owned companies to private owners",
    "cn_def": "民營化"
  },
  "baseload": {
    "pos": "n.",
    "en_def": "the minimum amount of power needed all the time",
    "cn_def": "基載電力"
  },
  "conductivity": {
    "pos": "n.",
    "en_def": "how easily electricity or heat moves through a material",
    "cn_def": "導電性；傳導率"
  },
  "rainwater harvesting": {
    "pos": "n.phr.",
    "en_def": "collecting rain so it can be used later",
    "cn_def": "雨水回收"
  },
  "power line": {
    "pos": "n.phr.",
    "en_def": "a wire that carries electricity over long distances",
    "cn_def": "電線；輸電線"
  },
  "gas flaring": {
    "pos": "n.phr.",
    "en_def": "burning off unwanted gas at an oil well",
    "cn_def": "天然氣燃除"
  },
  "low-hanging fruit": {
    "pos": "n.phr.",
    "en_def": "the easiest things to do or achieve first",
    "cn_def": "容易達成的目標"
  },
  "surge protector": {
    "pos": "n.phr.",
    "en_def": "a device that protects machines from sudden strong electricity",
    "cn_def": "突波保護器"
  },
  "interconnection": {
    "pos": "n.",
    "en_def": "a link between two or more things",
    "cn_def": "互聯；相互連接"
  },
  "acceptability": {
    "pos": "n.",
    "en_def": "how far something is accepted by people",
    "cn_def": "可接受度"
  },
  "socket": {
    "pos": "n.",
    "en_def": "the place in a wall where you plug things in",
    "cn_def": "插座"
  },
  "activism": {
    "pos": "n.",
    "en_def": "action taken to bring about social or political change",
    "cn_def": "社會運動；行動主義"
  },
  "kilowatt-hour": {
    "pos": "n.",
    "en_def": "a unit of electricity used, shown on your bill",
    "cn_def": "千瓦時；度"
  },
  "prospector": {
    "pos": "n.",
    "en_def": "a person who searches for gold or minerals",
    "cn_def": "探礦者"
  },
  "tailings": {
    "pos": "n.",
    "en_def": "waste rock and mud left after mining",
    "cn_def": "尾礦"
  },
  "aluminium": {
    "pos": "n.",
    "en_def": "a light silver metal used for cans and planes",
    "cn_def": "鋁"
  },
  "decarbonisation": {
    "pos": "n.",
    "en_def": "reducing the carbon dioxide produced by an activity",
    "cn_def": "去碳化；減碳"
  },
  "oil reserves": {
    "pos": "n.phr.",
    "en_def": "the amount of oil a country still has underground",
    "cn_def": "石油蘊藏量"
  },
  "smart thermostat": {
    "pos": "n.phr.",
    "en_def": "a device that controls heating and learns your habits",
    "cn_def": "智慧溫控器"
  },
  "oil exploration": {
    "pos": "n.phr.",
    "en_def": "searching for new places where oil can be found",
    "cn_def": "石油探勘"
  },
  "oil well": {
    "pos": "n.phr.",
    "en_def": "a deep hole made in the ground to get oil out",
    "cn_def": "油井"
  },
  "eco mode": {
    "pos": "n.phr.",
    "en_def": "a setting that makes a machine use less energy",
    "cn_def": "節能模式"
  },
  "diesel": {
    "pos": "n.",
    "en_def": "a heavy fuel used in trucks, buses and some cars",
    "cn_def": "柴油"
  },
  "wastage": {
    "pos": "n.",
    "en_def": "the amount of something that is wasted",
    "cn_def": "浪費量；損耗"
  },
  "renegotiation": {
    "pos": "n.",
    "en_def": "discussing an agreement again to change it",
    "cn_def": "重新談判"
  },
  "ore deposit": {
    "pos": "n.phr.",
    "en_def": "a natural collection of rock containing useful metal",
    "cn_def": "礦床"
  },
  "water supply": {
    "pos": "n.phr.",
    "en_def": "the water provided to an area for people to use",
    "cn_def": "供水"
  },
  "jet fuel": {
    "pos": "n.phr.",
    "en_def": "special fuel used by aeroplanes",
    "cn_def": "航空燃油"
  },
  "mineral rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to take minerals from a piece of land",
    "cn_def": "礦業權"
  },
  "electorate": {
    "pos": "n.",
    "en_def": "all the people allowed to vote",
    "cn_def": "選民"
  },
  "overextraction": {
    "pos": "n.",
    "en_def": "taking too much of a resource from the ground",
    "cn_def": "過度抽取"
  },
  "amplification": {
    "pos": "n.",
    "en_def": "the act of making something larger or stronger",
    "cn_def": "擴大；放大"
  },
  "mine": {
    "pos": "n.",
    "en_def": "a deep hole or tunnels where minerals are dug out",
    "cn_def": "礦坑"
  },
  "externality": {
    "pos": "n.",
    "en_def": "a cost or benefit that affects people outside a business",
    "cn_def": "外部性"
  },
  "relocation": {
    "pos": "n.",
    "en_def": "moving to a new place",
    "cn_def": "遷移；搬遷"
  },
  "smart plug": {
    "pos": "n.phr.",
    "en_def": "a plug you can control with your phone",
    "cn_def": "智慧插座"
  },
  "heating oil": {
    "pos": "n.phr.",
    "en_def": "oil burned to keep buildings warm",
    "cn_def": "暖氣用油"
  },
  "energy demand": {
    "pos": "n.phr.",
    "en_def": "the amount of energy that people need",
    "cn_def": "能源需求"
  },
  "power bank": {
    "pos": "n.phr.",
    "en_def": "a small portable battery for charging phones",
    "cn_def": "行動電源"
  },
  "declining": {
    "pos": "adj.",
    "en_def": "becoming less or smaller",
    "cn_def": "逐漸減少的"
  },
  "dwindling": {
    "pos": "adj.",
    "en_def": "becoming gradually smaller in amount",
    "cn_def": "日漸減少的"
  },
  "usable": {
    "pos": "adj.",
    "en_def": "able to be used",
    "cn_def": "可用的"
  },
  "aridity": {
    "pos": "n.",
    "en_def": "the state of being very dry",
    "cn_def": "乾燥；乾旱"
  },
  "maximisation": {
    "pos": "n.",
    "en_def": "the act of making something as large as possible",
    "cn_def": "最大化"
  },
  "multiplier": {
    "pos": "n.",
    "en_def": "something that increases the effect of something else",
    "cn_def": "乘數；倍增因素"
  },
  "rig": {
    "pos": "n.",
    "en_def": "a large structure used to drill for oil or gas",
    "cn_def": "鑽油平台；鑽井設備"
  },
  "pylon": {
    "pos": "n.",
    "en_def": "a tall metal tower that holds up power lines",
    "cn_def": "電塔"
  },
  "overdependence": {
    "pos": "n.",
    "en_def": "relying too much on one thing",
    "cn_def": "過度依賴"
  },
  "short circuit": {
    "pos": "n.phr.",
    "en_def": "a fault where electricity takes the wrong path",
    "cn_def": "短路"
  },
  "loft insulation": {
    "pos": "n.phr.",
    "en_def": "material in the roof space that keeps heat in",
    "cn_def": "閣樓隔熱層"
  },
  "watt": {
    "pos": "n.",
    "en_def": "a basic unit for measuring electric power",
    "cn_def": "瓦特"
  },
  "inflow": {
    "pos": "n.",
    "en_def": "movement of something into a place",
    "cn_def": "流入"
  },
  "foreseeable": {
    "pos": "adj.",
    "en_def": "able to be predicted",
    "cn_def": "可預見的"
  },
  "nuclear-free": {
    "pos": "adj.",
    "en_def": "having no nuclear power or weapons",
    "cn_def": "非核的"
  },
  "petrochemical": {
    "pos": "adj.",
    "en_def": "made from oil or natural gas",
    "cn_def": "石化的"
  },
  "energy security": {
    "pos": "n.phr.",
    "en_def": "having a reliable supply of energy at a fair price",
    "cn_def": "能源安全"
  },
  "transmission line": {
    "pos": "n.phr.",
    "en_def": "a high-voltage cable that carries power across a country",
    "cn_def": "輸電線路"
  },
  "power plant": {
    "pos": "n.phr.",
    "en_def": "a factory that produces electricity",
    "cn_def": "發電廠"
  }
};

const EXTRA_GLOSSES = {};
