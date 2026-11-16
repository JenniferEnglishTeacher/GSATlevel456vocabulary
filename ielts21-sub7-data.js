// Topic 21 Subunit 7 Quiz Data: Saving Energy at Home & on the Road 居家與交通節能
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S07 - Saving Energy at Home & on the Road 居家與交通節能",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "energy bill",
    "pos": "n.phr.",
    "cn_def": "能源帳單；電費",
    "en_def": "the amount you pay for gas and electricity",
    "sentence": "Our {{BLANK}} was very high in August, so we decided to use fans more often instead of the air conditioner.",
    "cn": "我們八月的電費非常高，所以我們決定多用電風扇而不是冷氣。"
  },
  {
    "word": "energy-saving",
    "pos": "adj.",
    "cn_def": "節能的",
    "en_def": "using less energy than usual",
    "sentence": "We replaced all our old light bulbs with {{BLANK}} ones, and our electricity bill dropped noticeably the next month.",
    "cn": "我們把所有舊燈泡都換成節能燈泡，隔月的電費明顯降低。"
  },
  {
    "word": "switch off",
    "pos": "v.phr.",
    "cn_def": "關掉",
    "en_def": "to turn off a machine or light",
    "sentence": "Please {{BLANK}} the projector after class, because leaving it on all night wastes electricity and shortens its life.",
    "cn": "下課後請關掉投影機，因為整夜開著會浪費電，也會縮短它的壽命。"
  },
  {
    "word": "unplug",
    "pos": "v.",
    "cn_def": "拔掉插頭",
    "en_def": "to take a plug out of a socket",
    "sentence": "Before we went on holiday, my mum told us to {{BLANK}} the TV and computer, so they would not use power while we were away.",
    "cn": "我們去度假之前，媽媽要我們拔掉電視和電腦的插頭，這樣我們不在家時它們就不會耗電。"
  },
  {
    "word": "standby mode",
    "pos": "n.phr.",
    "cn_def": "待機模式",
    "en_def": "when a machine is off but still uses a little power",
    "sentence": "Many TVs stay in {{BLANK}} all night, and together they waste a surprising amount of electricity every year.",
    "cn": "許多電視整夜維持在待機模式，加總起來每年浪費的電量驚人。"
  },
  {
    "word": "energy label",
    "pos": "n.phr.",
    "cn_def": "能源標章",
    "en_def": "a sticker showing how much energy a machine uses",
    "sentence": "Check the {{BLANK}} before buying a fridge, because a more efficient model will save you money for many years.",
    "cn": "買冰箱前要先看能源標章，因為較節能的機型能讓你省錢很多年。"
  },
  {
    "word": "energy efficiency",
    "pos": "n.phr.",
    "cn_def": "能源效率",
    "en_def": "using less energy to do the same job",
    "sentence": "Improving the {{BLANK}} of old buildings is one of the cheapest ways to reduce pollution, but many owners ignore it.",
    "cn": "提升舊建築的能源效率是減少污染最便宜的方法之一，但許多屋主卻忽略它。"
  },
  {
    "word": "energy consumption",
    "pos": "n.phr.",
    "cn_def": "能源消耗；耗能",
    "en_def": "the amount of energy used",
    "sentence": "Data centres have greatly increased the country's {{BLANK}}, so the government is asking them to use more renewable power.",
    "cn": "資料中心大幅增加了國家的能源消耗，所以政府要求它們使用更多再生能源。"
  },
  {
    "word": "central heating",
    "pos": "n.phr.",
    "cn_def": "中央暖氣",
    "en_def": "a system that heats a whole building from one place",
    "sentence": "Most houses in Britain have {{BLANK}}, so the rooms stay warm even when it is snowing outside.",
    "cn": "英國大多數房子都有中央暖氣，所以即使外面下雪，房間仍保持溫暖。"
  },
  {
    "word": "radiator",
    "pos": "n.",
    "cn_def": "暖氣片",
    "en_def": "a metal heater on a wall, filled with hot water",
    "sentence": "I put my wet gloves on the {{BLANK}} to dry, and they were warm and ready by the time I left for school.",
    "cn": "我把濕手套放在暖氣片上烘乾，到我出門上學時它們已經溫暖又乾了。"
  },
  {
    "word": "air conditioner",
    "pos": "n.phr.",
    "cn_def": "冷氣機",
    "en_def": "a machine that makes a room cool",
    "sentence": "Setting the {{BLANK}} to 26 degrees instead of 22 saves a lot of energy, and the room still feels comfortable.",
    "cn": "把冷氣機設定在26度而不是22度能省下很多能源，房間仍然感覺舒適。"
  },
  {
    "word": "electric fan",
    "pos": "n.phr.",
    "cn_def": "電風扇",
    "en_def": "a machine with blades that moves air to cool you",
    "sentence": "An {{BLANK}} uses much less power than air conditioning, so we use it on days that are warm but not too hot.",
    "cn": "電風扇比冷氣省電得多，所以在溫暖但不太熱的日子我們就用它。"
  },
  {
    "word": "dehumidifier",
    "pos": "n.",
    "cn_def": "除濕機",
    "en_def": "a machine that removes water from the air",
    "sentence": "Our flat gets very damp in spring, so we run a {{BLANK}} every day to stop our clothes from smelling bad.",
    "cn": "我們的公寓在春天非常潮濕，所以我們每天開除濕機，避免衣服產生異味。"
  },
  {
    "word": "space heater",
    "pos": "n.phr.",
    "cn_def": "電暖器",
    "en_def": "a small portable machine that heats one room",
    "sentence": "My grandmother uses a {{BLANK}} in her bedroom, but we remind her to keep it away from the curtains.",
    "cn": "奶奶在臥室使用電暖器，但我們提醒她要讓它遠離窗簾。"
  },
  {
    "word": "draught",
    "pos": "n.",
    "cn_def": "穿堂風；冷風",
    "en_def": "cold air coming into a room through a gap",
    "sentence": "There is a cold {{BLANK}} coming under the front door, so we put a long cushion there to keep the heat inside.",
    "cn": "有一股冷風從前門底下吹進來，所以我們在那裡放了一個長墊子把熱氣留在屋內。"
  },
  {
    "word": "draught-proof",
    "pos": "v.",
    "cn_def": "防風密封",
    "en_def": "to block gaps so cold air cannot come in",
    "sentence": "We decided to {{BLANK}} our old windows before winter, and the house now feels much warmer without extra heating.",
    "cn": "我們決定在冬天前為舊窗戶做防風密封，現在不用額外開暖氣房子就感覺溫暖許多。"
  },
  {
    "word": "loft insulation",
    "pos": "n.phr.",
    "cn_def": "閣樓隔熱層",
    "en_def": "material in the roof space that keeps heat in",
    "sentence": "Adding {{BLANK}} is cheap and quick, but it can cut a family's heating costs by a large amount each year.",
    "cn": "加裝閣樓隔熱層既便宜又快速，卻能每年大幅降低一個家庭的暖氣費用。"
  },
  {
    "word": "energy audit",
    "pos": "n.phr.",
    "cn_def": "能源稽核",
    "en_def": "a check of how a building uses and wastes energy",
    "sentence": "An expert did an {{BLANK}} of our school, and she found that old lights and computers were wasting a lot of power.",
    "cn": "一位專家為我們學校做了能源稽核，她發現舊燈具和電腦浪費了大量電力。"
  },
  {
    "word": "eco mode",
    "pos": "n.phr.",
    "cn_def": "節能模式",
    "en_def": "a setting that makes a machine use less energy",
    "sentence": "I always use {{BLANK}} on the washing machine, because it uses less water and power even though it takes longer.",
    "cn": "我洗衣服總是使用節能模式，因為雖然花比較久，但用水和用電都比較少。"
  },
  {
    "word": "hybrid car",
    "pos": "n.phr.",
    "cn_def": "油電混合車",
    "en_def": "a car with both a petrol engine and an electric motor",
    "sentence": "My uncle bought a {{BLANK}} last year, and he is happy because he now visits the petrol station much less often.",
    "cn": "我叔叔去年買了一輛油電混合車，他很開心，因為現在他去加油站的次數少很多。"
  },
  {
    "word": "electric car",
    "pos": "n.phr.",
    "cn_def": "電動車",
    "en_def": "a car that runs only on electricity from batteries",
    "sentence": "{{BLANK}} are quiet and produce no exhaust, but some drivers worry that the batteries will run out on long trips.",
    "cn": "電動車安靜且不排放廢氣，但有些駕駛擔心長途旅行時電池會沒電。"
  },
  {
    "word": "charging station",
    "pos": "n.phr.",
    "cn_def": "充電站",
    "en_def": "a place where electric cars can be charged",
    "sentence": "There are more {{BLANK}} in shopping centres now, so drivers can charge their cars while they buy groceries.",
    "cn": "現在購物中心有更多充電站，所以駕駛人可以一邊買菜一邊替車子充電。"
  },
  {
    "word": "power bank",
    "pos": "n.phr.",
    "cn_def": "行動電源",
    "en_def": "a small portable battery for charging phones",
    "sentence": "I always carry a {{BLANK}} on school trips, because my phone battery runs out quickly when I take lots of photos.",
    "cn": "我校外教學時總會帶著行動電源，因為拍很多照片時手機電量很快就用完。"
  },
  {
    "word": "fuel-efficient",
    "pos": "adj.",
    "cn_def": "省油的",
    "en_def": "using only a small amount of fuel",
    "sentence": "My parents chose a {{BLANK}} car because petrol prices keep rising, and they drive to work every day.",
    "cn": "我父母選了一輛省油的車，因為油價不斷上漲，而他們每天開車上班。"
  },
  {
    "word": "gas guzzler",
    "pos": "n.phr.",
    "cn_def": "耗油車",
    "en_def": "a big car that uses a lot of fuel",
    "sentence": "My neighbour finally sold his old {{BLANK}}, because filling its huge tank every week was costing him too much money.",
    "cn": "我鄰居終於賣掉了他那輛老耗油車，因為每週加滿它的大油箱讓他花太多錢。"
  },
  {
    "word": "smart plug",
    "pos": "n.phr.",
    "cn_def": "智慧插座",
    "en_def": "a plug you can control with your phone",
    "sentence": "I connected the heater to a {{BLANK}}, so I can turn it on from my phone before I get home.",
    "cn": "我把暖氣機接上智慧插座，所以我可以在到家前用手機打開它。"
  },
  {
    "word": "smart thermostat",
    "pos": "n.phr.",
    "cn_def": "智慧溫控器",
    "en_def": "a device that controls heating and learns your habits",
    "sentence": "Our {{BLANK}} lowers the heating when nobody is home, and it warms the house again just before we return.",
    "cn": "我們的智慧溫控器在沒人在家時會調低暖氣，並在我們回來之前讓房子再度變暖。"
  },
  {
    "word": "heat loss",
    "pos": "n.phr.",
    "cn_def": "熱能流失",
    "en_def": "heat escaping from a building",
    "sentence": "Most {{BLANK}} in old houses happens through the roof and windows, so these are the first places to improve.",
    "cn": "老房子大部分的熱能流失發生在屋頂和窗戶，所以這些是最先需要改善的地方。"
  },
  {
    "word": "motion sensor",
    "pos": "n.phr.",
    "cn_def": "動作感應器",
    "en_def": "a device that turns on when it notices movement",
    "sentence": "The lights in our school toilets have a {{BLANK}}, so they turn off automatically when nobody is inside.",
    "cn": "我們學校廁所的燈裝有動作感應器，所以沒人在裡面時會自動關燈。"
  },
  {
    "word": "kettle",
    "pos": "n.",
    "cn_def": "熱水壺",
    "en_def": "a container for boiling water",
    "sentence": "Only boil as much water as you need in the {{BLANK}}, because heating extra water wastes both time and electricity.",
    "cn": "用熱水壺只煮你需要的水量，因為加熱多餘的水既浪費時間也浪費電。"
  }
];

const MCQS = [
  {
    "q": "Our _____ was very high in August, so we decided to use fans more often instead of the air conditioner.",
    "options": [
      "natural resources",
      "energy bill",
      "heating oil",
      "payback period"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "We replaced all our old light bulbs with _____ ones, and our electricity bill dropped noticeably the next month.",
    "options": [
      "exhaustible",
      "exportable",
      "energy-saving",
      "usable"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Please _____ the projector after class, because leaving it on all night wastes electricity and shortens its life.",
    "options": [
      "burn the candle at both ends",
      "run dry",
      "run low on",
      "switch off"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Before we went on holiday, my mum told us to _____ the TV and computer, so they would not use power while we were away.",
    "options": [
      "unplug",
      "deregulate",
      "downgrade",
      "decommission"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Many TVs stay in _____ all night, and together they waste a surprising amount of electricity every year.",
    "options": [
      "green hydrogen",
      "oil field",
      "standby mode",
      "cooling tower"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Check the _____ before buying a fridge, because a more efficient model will save you money for many years.",
    "options": [
      "power supply",
      "energy label",
      "load shedding",
      "oil reserves"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Improving the _____ of old buildings is one of the cheapest ways to reduce pollution, but many owners ignore it.",
    "options": [
      "energy efficiency",
      "energy demand",
      "smart grid",
      "surge protector"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Data centres have greatly increased the country's _____, so the government is asking them to use more renewable power.",
    "options": [
      "nuclear accident",
      "water rights",
      "rare earth elements",
      "energy consumption"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Most houses in Britain have _____, so the rooms stay warm even when it is snowing outside.",
    "options": [
      "price ceiling",
      "solar power",
      "central heating",
      "fuel shortage"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "I put my wet gloves on the _____ to dry, and they were warm and ready by the time I left for school.",
    "options": [
      "overcapacity",
      "underinvestment",
      "desirability",
      "radiator"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Setting the _____ to 26 degrees instead of 22 saves a lot of energy, and the room still feels comfortable.",
    "options": [
      "offshore wind farm",
      "air conditioner",
      "fuel rod",
      "liquefied natural gas"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "An _____ uses much less power than air conditioning, so we use it on days that are warm but not too hot.",
    "options": [
      "electric fan",
      "finite resource",
      "power supply",
      "mining town"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our flat gets very damp in spring, so we run a _____ every day to stop our clothes from smelling bad.",
    "options": [
      "payoff",
      "desirability",
      "fracking",
      "dehumidifier"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "My grandmother uses a _____ in her bedroom, but we remind her to keep it away from the curtains.",
    "options": [
      "circular economy",
      "space heater",
      "open-pit mine",
      "seismic survey"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "There is a cold _____ coming under the front door, so we put a long cushion there to keep the heat inside.",
    "options": [
      "devastation",
      "e-waste",
      "draught",
      "insufficiency"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "We decided to _____ our old windows before winter, and the house now feels much warmer without extra heating.",
    "options": [
      "draught-proof",
      "industrialise",
      "deregulate",
      "tighten"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Adding _____ is cheap and quick, but it can cut a family's heating costs by a large amount each year.",
    "options": [
      "tidal power",
      "rebound effect",
      "shale gas",
      "loft insulation"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "An expert did an _____ of our school, and she found that old lights and computers were wasting a lot of power.",
    "options": [
      "energy audit",
      "natural resources",
      "energy security",
      "wind power"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "I always use _____ on the washing machine, because it uses less water and power even though it takes longer.",
    "options": [
      "nuclear reactor",
      "alternative energy",
      "eco mode",
      "mineral rights"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "My uncle bought a _____ last year, and he is happy because he now visits the petrol station much less often.",
    "options": [
      "rooftop solar",
      "hybrid car",
      "resource efficiency",
      "wind speed"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "_____ are quiet and produce no exhaust, but some drivers worry that the batteries will run out on long trips.",
    "options": [
      "electric car",
      "energy independence",
      "conflict minerals",
      "nuclear accident"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "There are more _____ in shopping centres now, so drivers can charge their cars while they buy groceries.",
    "options": [
      "rebound effect",
      "charging station",
      "oil reserves",
      "feed-in tariff"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "I always carry a _____ on school trips, because my phone battery runs out quickly when I take lots of photos.",
    "options": [
      "natural gas",
      "fuel cell",
      "strip mining",
      "power bank"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "My parents chose a _____ car because petrol prices keep rising, and they drive to work every day.",
    "options": [
      "inelastic",
      "convertible",
      "fuel-efficient",
      "foreseeable"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "My neighbour finally sold his old _____, because filling its huge tank every week was costing him too much money.",
    "options": [
      "rolling blackout",
      "gas guzzler",
      "wind speed",
      "petrol station"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "I connected the heater to a _____, so I can turn it on from my phone before I get home.",
    "options": [
      "gas flaring",
      "resource depletion",
      "smart plug",
      "solar farm"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our _____ lowers the heating when nobody is home, and it warms the house again just before we return.",
    "options": [
      "smart thermostat",
      "smart grid",
      "green hydrogen",
      "energy independence"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Most _____ in old houses happens through the roof and windows, so these are the first places to improve.",
    "options": [
      "feed-in tariff",
      "gas flaring",
      "deep-sea mining",
      "heat loss"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The lights in our school toilets have a _____, so they turn off automatically when nobody is inside.",
    "options": [
      "green hydrogen",
      "power strip",
      "motion sensor",
      "wind speed"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Only boil as much water as you need in the _____, because heating extra water wastes both time and electricity.",
    "options": [
      "kettle",
      "remediation",
      "insecurity",
      "amplification"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "energy bill": {
    "pos": "n.phr.",
    "en_def": "the amount you pay for gas and electricity",
    "cn_def": "能源帳單；電費"
  },
  "energy-saving": {
    "pos": "adj.",
    "en_def": "using less energy than usual",
    "cn_def": "節能的"
  },
  "switch off": {
    "pos": "v.phr.",
    "en_def": "to turn off a machine or light",
    "cn_def": "關掉"
  },
  "unplug": {
    "pos": "v.",
    "en_def": "to take a plug out of a socket",
    "cn_def": "拔掉插頭"
  },
  "standby mode": {
    "pos": "n.phr.",
    "en_def": "when a machine is off but still uses a little power",
    "cn_def": "待機模式"
  },
  "energy label": {
    "pos": "n.phr.",
    "en_def": "a sticker showing how much energy a machine uses",
    "cn_def": "能源標章"
  },
  "energy efficiency": {
    "pos": "n.phr.",
    "en_def": "using less energy to do the same job",
    "cn_def": "能源效率"
  },
  "energy consumption": {
    "pos": "n.phr.",
    "en_def": "the amount of energy used",
    "cn_def": "能源消耗；耗能"
  },
  "central heating": {
    "pos": "n.phr.",
    "en_def": "a system that heats a whole building from one place",
    "cn_def": "中央暖氣"
  },
  "radiator": {
    "pos": "n.",
    "en_def": "a metal heater on a wall, filled with hot water",
    "cn_def": "暖氣片"
  },
  "air conditioner": {
    "pos": "n.phr.",
    "en_def": "a machine that makes a room cool",
    "cn_def": "冷氣機"
  },
  "electric fan": {
    "pos": "n.phr.",
    "en_def": "a machine with blades that moves air to cool you",
    "cn_def": "電風扇"
  },
  "dehumidifier": {
    "pos": "n.",
    "en_def": "a machine that removes water from the air",
    "cn_def": "除濕機"
  },
  "space heater": {
    "pos": "n.phr.",
    "en_def": "a small portable machine that heats one room",
    "cn_def": "電暖器"
  },
  "draught": {
    "pos": "n.",
    "en_def": "cold air coming into a room through a gap",
    "cn_def": "穿堂風；冷風"
  },
  "draught-proof": {
    "pos": "v.",
    "en_def": "to block gaps so cold air cannot come in",
    "cn_def": "防風密封"
  },
  "loft insulation": {
    "pos": "n.phr.",
    "en_def": "material in the roof space that keeps heat in",
    "cn_def": "閣樓隔熱層"
  },
  "energy audit": {
    "pos": "n.phr.",
    "en_def": "a check of how a building uses and wastes energy",
    "cn_def": "能源稽核"
  },
  "eco mode": {
    "pos": "n.phr.",
    "en_def": "a setting that makes a machine use less energy",
    "cn_def": "節能模式"
  },
  "hybrid car": {
    "pos": "n.phr.",
    "en_def": "a car with both a petrol engine and an electric motor",
    "cn_def": "油電混合車"
  },
  "electric car": {
    "pos": "n.phr.",
    "en_def": "a car that runs only on electricity from batteries",
    "cn_def": "電動車"
  },
  "charging station": {
    "pos": "n.phr.",
    "en_def": "a place where electric cars can be charged",
    "cn_def": "充電站"
  },
  "power bank": {
    "pos": "n.phr.",
    "en_def": "a small portable battery for charging phones",
    "cn_def": "行動電源"
  },
  "fuel-efficient": {
    "pos": "adj.",
    "en_def": "using only a small amount of fuel",
    "cn_def": "省油的"
  },
  "gas guzzler": {
    "pos": "n.phr.",
    "en_def": "a big car that uses a lot of fuel",
    "cn_def": "耗油車"
  },
  "smart plug": {
    "pos": "n.phr.",
    "en_def": "a plug you can control with your phone",
    "cn_def": "智慧插座"
  },
  "smart thermostat": {
    "pos": "n.phr.",
    "en_def": "a device that controls heating and learns your habits",
    "cn_def": "智慧溫控器"
  },
  "heat loss": {
    "pos": "n.phr.",
    "en_def": "heat escaping from a building",
    "cn_def": "熱能流失"
  },
  "motion sensor": {
    "pos": "n.phr.",
    "en_def": "a device that turns on when it notices movement",
    "cn_def": "動作感應器"
  },
  "kettle": {
    "pos": "n.",
    "en_def": "a container for boiling water",
    "cn_def": "熱水壺"
  },
  "natural resources": {
    "pos": "n.phr.",
    "en_def": "things from nature that people use, like water and oil",
    "cn_def": "天然資源"
  },
  "heating oil": {
    "pos": "n.phr.",
    "en_def": "oil burned to keep buildings warm",
    "cn_def": "暖氣用油"
  },
  "payback period": {
    "pos": "n.phr.",
    "en_def": "the time it takes for savings to repay the cost",
    "cn_def": "回收期"
  },
  "exhaustible": {
    "pos": "adj.",
    "en_def": "able to be completely used up",
    "cn_def": "可耗盡的"
  },
  "exportable": {
    "pos": "adj.",
    "en_def": "suitable for selling to other countries",
    "cn_def": "可出口的"
  },
  "usable": {
    "pos": "adj.",
    "en_def": "able to be used",
    "cn_def": "可用的"
  },
  "burn the candle at both ends": {
    "pos": "v.phr.",
    "en_def": "to work very hard and sleep too little",
    "cn_def": "蠟燭兩頭燒"
  },
  "run dry": {
    "pos": "v.phr.",
    "en_def": "to have no water or supply left",
    "cn_def": "乾涸；耗盡"
  },
  "run low on": {
    "pos": "v.phr.",
    "en_def": "to have only a small amount of something left",
    "cn_def": "快用完"
  },
  "deregulate": {
    "pos": "v.",
    "en_def": "to remove government rules from an industry",
    "cn_def": "解除管制"
  },
  "downgrade": {
    "pos": "v.",
    "en_def": "to lower the level or importance of something",
    "cn_def": "降低；下修"
  },
  "decommission": {
    "pos": "v.",
    "en_def": "to officially stop using a large machine or plant",
    "cn_def": "除役"
  },
  "green hydrogen": {
    "pos": "n.phr.",
    "en_def": "hydrogen made using renewable electricity",
    "cn_def": "綠氫"
  },
  "oil field": {
    "pos": "n.phr.",
    "en_def": "an area where a lot of oil is under the ground",
    "cn_def": "油田"
  },
  "cooling tower": {
    "pos": "n.phr.",
    "en_def": "a tall round tower that releases heat from a power plant",
    "cn_def": "冷卻塔"
  },
  "power supply": {
    "pos": "n.phr.",
    "en_def": "the electricity that is provided to a place",
    "cn_def": "電力供應"
  },
  "load shedding": {
    "pos": "n.phr.",
    "en_def": "cutting power to some areas so the system does not fail",
    "cn_def": "限電；分區停電"
  },
  "oil reserves": {
    "pos": "n.phr.",
    "en_def": "the amount of oil a country still has underground",
    "cn_def": "石油蘊藏量"
  },
  "energy demand": {
    "pos": "n.phr.",
    "en_def": "the amount of energy that people need",
    "cn_def": "能源需求"
  },
  "smart grid": {
    "pos": "n.phr.",
    "en_def": "an electricity network that uses computers to manage power",
    "cn_def": "智慧電網"
  },
  "surge protector": {
    "pos": "n.phr.",
    "en_def": "a device that protects machines from sudden strong electricity",
    "cn_def": "突波保護器"
  },
  "nuclear accident": {
    "pos": "n.phr.",
    "en_def": "an event that releases harmful radiation by mistake",
    "cn_def": "核子事故"
  },
  "water rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to use water from a river or lake",
    "cn_def": "水權"
  },
  "rare earth elements": {
    "pos": "n.phr.",
    "en_def": "special metals used in phones, magnets and electric cars",
    "cn_def": "稀土元素"
  },
  "price ceiling": {
    "pos": "n.phr.",
    "en_def": "the highest price allowed by law",
    "cn_def": "價格上限"
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
  "overcapacity": {
    "pos": "n.",
    "en_def": "having more ability to produce than is needed",
    "cn_def": "產能過剩"
  },
  "underinvestment": {
    "pos": "n.",
    "en_def": "not spending enough money on something",
    "cn_def": "投資不足"
  },
  "desirability": {
    "pos": "n.",
    "en_def": "how much something is wanted or seen as good",
    "cn_def": "可取性；吸引力"
  },
  "offshore wind farm": {
    "pos": "n.phr.",
    "en_def": "a group of wind turbines built in the sea",
    "cn_def": "離岸風場"
  },
  "fuel rod": {
    "pos": "n.phr.",
    "en_def": "a long metal tube that holds nuclear fuel",
    "cn_def": "燃料棒"
  },
  "liquefied natural gas": {
    "pos": "n.phr.",
    "en_def": "natural gas cooled until it becomes liquid for shipping",
    "cn_def": "液化天然氣"
  },
  "finite resource": {
    "pos": "n.phr.",
    "en_def": "something that exists only in a limited amount",
    "cn_def": "有限資源"
  },
  "mining town": {
    "pos": "n.phr.",
    "en_def": "a town built around a mine",
    "cn_def": "礦業小鎮"
  },
  "payoff": {
    "pos": "n.",
    "en_def": "a benefit you get from something you did",
    "cn_def": "回報；好處"
  },
  "fracking": {
    "pos": "n.",
    "en_def": "pumping water into rocks to break them and release gas",
    "cn_def": "水力壓裂法"
  },
  "circular economy": {
    "pos": "n.phr.",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "cn_def": "循環經濟"
  },
  "open-pit mine": {
    "pos": "n.phr.",
    "en_def": "a mine dug as a huge hole from the surface",
    "cn_def": "露天礦"
  },
  "seismic survey": {
    "pos": "n.phr.",
    "en_def": "a study that uses sound waves to look under the ground",
    "cn_def": "震測調查"
  },
  "devastation": {
    "pos": "n.",
    "en_def": "very great damage",
    "cn_def": "嚴重破壞"
  },
  "e-waste": {
    "pos": "n.",
    "en_def": "thrown-away electronic devices like phones and computers",
    "cn_def": "電子廢棄物"
  },
  "insufficiency": {
    "pos": "n.",
    "en_def": "a lack of enough of something",
    "cn_def": "不足"
  },
  "industrialise": {
    "pos": "v.",
    "en_def": "to develop industries in a country or area",
    "cn_def": "工業化"
  },
  "tighten": {
    "pos": "v.",
    "en_def": "to make rules stricter",
    "cn_def": "收緊；加強"
  },
  "tidal power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the rise and fall of the sea",
    "cn_def": "潮汐發電"
  },
  "rebound effect": {
    "pos": "n.phr.",
    "en_def": "when saving energy leads people to use more",
    "cn_def": "反彈效應"
  },
  "shale gas": {
    "pos": "n.phr.",
    "en_def": "natural gas trapped inside layers of soft rock",
    "cn_def": "頁岩氣"
  },
  "energy security": {
    "pos": "n.phr.",
    "en_def": "having a reliable supply of energy at a fair price",
    "cn_def": "能源安全"
  },
  "wind power": {
    "pos": "n.phr.",
    "en_def": "electricity made by the movement of wind",
    "cn_def": "風力發電"
  },
  "nuclear reactor": {
    "pos": "n.phr.",
    "en_def": "the machine in which nuclear energy is produced",
    "cn_def": "核子反應爐"
  },
  "alternative energy": {
    "pos": "n.phr.",
    "en_def": "energy that does not come from fossil fuels",
    "cn_def": "替代能源"
  },
  "mineral rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to take minerals from a piece of land",
    "cn_def": "礦業權"
  },
  "rooftop solar": {
    "pos": "n.phr.",
    "en_def": "solar panels placed on the roofs of buildings",
    "cn_def": "屋頂型太陽能"
  },
  "resource efficiency": {
    "pos": "n.phr.",
    "en_def": "using fewer materials to make the same product",
    "cn_def": "資源效率"
  },
  "wind speed": {
    "pos": "n.phr.",
    "en_def": "how fast the wind is blowing",
    "cn_def": "風速"
  },
  "energy independence": {
    "pos": "n.phr.",
    "en_def": "producing enough energy without relying on other countries",
    "cn_def": "能源自主"
  },
  "conflict minerals": {
    "pos": "n.phr.",
    "en_def": "minerals mined in war areas that help pay for fighting",
    "cn_def": "衝突礦產"
  },
  "feed-in tariff": {
    "pos": "n.phr.",
    "en_def": "a fixed price paid for clean power sold to the grid",
    "cn_def": "躉購費率"
  },
  "natural gas": {
    "pos": "n.phr.",
    "en_def": "a gas from under the ground used for heating and cooking",
    "cn_def": "天然氣"
  },
  "fuel cell": {
    "pos": "n.phr.",
    "en_def": "a device that makes electricity from hydrogen and oxygen",
    "cn_def": "燃料電池"
  },
  "strip mining": {
    "pos": "n.phr.",
    "en_def": "removing the top layer of land to reach coal",
    "cn_def": "露天剝採"
  },
  "inelastic": {
    "pos": "adj.",
    "en_def": "not changing much when price changes",
    "cn_def": "缺乏彈性的"
  },
  "convertible": {
    "pos": "adj.",
    "en_def": "able to be changed into another form",
    "cn_def": "可轉換的"
  },
  "foreseeable": {
    "pos": "adj.",
    "en_def": "able to be predicted",
    "cn_def": "可預見的"
  },
  "rolling blackout": {
    "pos": "n.phr.",
    "en_def": "planned power cuts that move from area to area",
    "cn_def": "輪流停電"
  },
  "petrol station": {
    "pos": "n.phr.",
    "en_def": "a place where you buy fuel for your car",
    "cn_def": "加油站"
  },
  "gas flaring": {
    "pos": "n.phr.",
    "en_def": "burning off unwanted gas at an oil well",
    "cn_def": "天然氣燃除"
  },
  "resource depletion": {
    "pos": "n.phr.",
    "en_def": "using up natural resources faster than they return",
    "cn_def": "資源耗竭"
  },
  "solar farm": {
    "pos": "n.phr.",
    "en_def": "a large area of land covered with solar panels",
    "cn_def": "太陽能發電場"
  },
  "deep-sea mining": {
    "pos": "n.phr.",
    "en_def": "taking metals from the bottom of the ocean",
    "cn_def": "深海採礦"
  },
  "power strip": {
    "pos": "n.phr.",
    "en_def": "a row of sockets on a short cable",
    "cn_def": "排插"
  },
  "remediation": {
    "pos": "n.",
    "en_def": "the process of cleaning up polluted land or water",
    "cn_def": "整治；修復"
  },
  "insecurity": {
    "pos": "n.",
    "en_def": "a lack of safety or certainty",
    "cn_def": "不安全；不穩定"
  },
  "amplification": {
    "pos": "n.",
    "en_def": "the act of making something larger or stronger",
    "cn_def": "擴大；放大"
  }
};

const EXTRA_GLOSSES = {};
