// Topic 3 Subunit 2 Quiz Data: Greenhouse Gases & Emissions 溫室氣體與排放
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S02 - Greenhouse Gases & Emissions 溫室氣體與排放",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "greenhouse gas",
    "pos": "n.phr.",
    "cn_def": "溫室氣體",
    "en_def": "a gas that traps heat in the atmosphere",
    "sentence": "Carbon dioxide is the most common {{BLANK}}, but methane from farms is also a serious problem.",
    "cn": "二氧化碳是最常見的溫室氣體,但來自農場的甲烷也是一個嚴重的問題。"
  },
  {
    "word": "emission",
    "pos": "n.",
    "cn_def": "排放(物)",
    "en_def": "gas or smoke that is sent into the air",
    "sentence": "The city wants to cut its {{BLANK}} by half before 2035, so it is adding more bus lanes and bike paths.",
    "cn": "這座城市想在2035年前把排放量減半,所以正在增加更多公車專用道和自行車道。"
  },
  {
    "word": "emit",
    "pos": "v.",
    "cn_def": "排放;散發",
    "en_def": "to send out gas, heat, light or sound",
    "sentence": "Old motorcycles {{BLANK}} much more smoke than new electric scooters, so the government gives money to people who replace them.",
    "cn": "舊機車排放的廢氣比新的電動機車多得多,所以政府會補助汰換的民眾。"
  },
  {
    "word": "carbon",
    "pos": "n.",
    "cn_def": "碳",
    "en_def": "a chemical element found in coal, oil and living things",
    "sentence": "Trees store {{BLANK}} in their wood and leaves, so cutting down forests releases it back into the air.",
    "cn": "樹木把碳儲存在木材和葉子裡,所以砍伐森林會把它釋放回空氣中。"
  },
  {
    "word": "carbon dioxide",
    "pos": "n.phr.",
    "cn_def": "二氧化碳",
    "en_def": "the gas CO2, produced when fuel is burned",
    "sentence": "Every time we drive a petrol car, it releases {{BLANK}}, and this gas stays in the air for hundreds of years.",
    "cn": "每次我們開汽油車,它都會釋放二氧化碳,而這種氣體會在空氣中停留數百年。"
  },
  {
    "word": "methane",
    "pos": "n.",
    "cn_def": "甲烷",
    "en_def": "a strong greenhouse gas from farms, rubbish and gas fields",
    "sentence": "Cows produce a lot of {{BLANK}} when they digest grass, so some farmers are testing new kinds of animal food.",
    "cn": "牛在消化草時會產生大量甲烷,所以有些農夫正在測試新型的動物飼料。"
  },
  {
    "word": "fossil fuel",
    "pos": "n.phr.",
    "cn_def": "化石燃料",
    "en_def": "coal, oil or gas formed from ancient plants and animals",
    "sentence": "Most power plants still burn {{BLANK}}, but the share of clean energy is growing every year.",
    "cn": "大多數發電廠仍在燃燒化石燃料,但潔淨能源的比例每年都在成長。"
  },
  {
    "word": "coal",
    "pos": "n.",
    "cn_def": "煤",
    "en_def": "a hard black rock burned to make heat or electricity",
    "sentence": "The old power station burned {{BLANK}} for forty years, but it will close next year and become a museum.",
    "cn": "這座老舊發電廠燒煤燒了四十年,但它明年將關閉並改建為博物館。"
  },
  {
    "word": "petroleum",
    "pos": "n.",
    "cn_def": "石油",
    "en_def": "oil from under the ground used to make fuel and plastic",
    "sentence": "Many everyday products are made from {{BLANK}}, so reducing plastic also helps to reduce our use of oil.",
    "cn": "許多日常用品都是由石油製成的,所以減少塑膠也有助於減少我們對石油的使用。"
  },
  {
    "word": "exhaust",
    "pos": "n.",
    "cn_def": "(引擎)廢氣",
    "en_def": "waste gas that comes out of an engine",
    "sentence": "The {{BLANK}} from the buses made the air near the station dirty, so the city switched to electric buses last year.",
    "cn": "公車排出的廢氣讓車站附近的空氣很髒,所以市政府去年改用電動公車。"
  },
  {
    "word": "fumes",
    "pos": "n.",
    "cn_def": "(有害的)煙霧;廢氣",
    "en_def": "strong, unpleasant smoke or gas",
    "sentence": "The {{BLANK}} from the factory smelled terrible, so local parents asked the company to clean its chimneys.",
    "cn": "工廠排出的煙霧聞起來很可怕,所以當地家長要求公司清理煙囪。"
  },
  {
    "word": "smog",
    "pos": "n.",
    "cn_def": "霧霾;煙霧",
    "en_def": "dirty air that looks like fog over a city",
    "sentence": "Thick {{BLANK}} covered the city for three days, so schools cancelled outdoor sports and many people wore masks.",
    "cn": "濃厚的霧霾籠罩城市三天,所以學校取消了戶外運動,許多人也戴上口罩。"
  },
  {
    "word": "soot",
    "pos": "n.",
    "cn_def": "煤灰;煙灰",
    "en_def": "black powder made when something is burned",
    "sentence": "Black {{BLANK}} from wildfires lands on snow and ice, and the dark surface then melts faster in the sun.",
    "cn": "野火產生的黑色煙灰落在雪和冰上,而深色的表面在陽光下就會融化得更快。"
  },
  {
    "word": "combustion",
    "pos": "n.",
    "cn_def": "燃燒",
    "en_def": "the process of burning",
    "sentence": "Cars with {{BLANK}} engines burn fuel to move, but electric cars use batteries and produce no smoke on the road.",
    "cn": "使用燃燒式引擎的汽車靠燃燒燃料來行駛,但電動車使用電池,在路上不會產生廢氣。"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "cn_def": "吸收",
    "en_def": "to take in something such as liquid, heat or gas",
    "sentence": "The ocean can {{BLANK}} a lot of heat, but warmer water then causes problems for fish and other sea life.",
    "cn": "海洋能吸收大量的熱,但較暖的海水接著會為魚類和其他海洋生物帶來問題。"
  },
  {
    "word": "absorption",
    "pos": "n.",
    "cn_def": "吸收(作用)",
    "en_def": "the process of taking something in",
    "sentence": "Dark roofs increase the {{BLANK}} of heat, so painting them white can keep a building several degrees cooler.",
    "cn": "深色屋頂會增加熱的吸收,所以把它們漆成白色可以讓建築物涼爽好幾度。"
  },
  {
    "word": "heat-trapping",
    "pos": "adj.",
    "cn_def": "吸熱的;困住熱能的",
    "en_def": "keeping heat in and not letting it escape",
    "sentence": "These {{BLANK}} gases act like the glass of a car in summer, and the temperature inside keeps rising.",
    "cn": "這些困住熱能的氣體就像夏天汽車的玻璃,而裡面的溫度會不斷上升。"
  },
  {
    "word": "smokestack",
    "pos": "n.",
    "cn_def": "(工廠)煙囪",
    "en_def": "a tall chimney on a factory",
    "sentence": "Grey smoke rose from the tall {{BLANK}} all night, and the neighbours complained that their washing turned dirty.",
    "cn": "灰色煙霧整夜從高高的煙囪冒出,鄰居抱怨他們晾的衣服都變髒了。"
  },
  {
    "word": "tailpipe",
    "pos": "n.",
    "cn_def": "(汽車)排氣管",
    "en_def": "the pipe at the back of a car where exhaust comes out",
    "sentence": "Electric cars have no {{BLANK}}, but the electricity they use may still come from coal power stations.",
    "cn": "電動車沒有排氣管,但它們使用的電力可能仍來自燃煤發電廠。"
  },
  {
    "word": "landfill",
    "pos": "n.",
    "cn_def": "垃圾掩埋場",
    "en_def": "a place where rubbish is buried in the ground",
    "sentence": "Food waste in a {{BLANK}} produces methane as it rots, so our town now collects kitchen scraps separately.",
    "cn": "垃圾掩埋場裡的廚餘在腐爛時會產生甲烷,所以我們鎮上現在把廚餘分開收集。"
  },
  {
    "word": "fertiliser",
    "pos": "n.",
    "cn_def": "肥料",
    "en_def": "a substance added to soil to help plants grow",
    "sentence": "Too much {{BLANK}} washes into rivers when it rains, and it also releases a gas that warms the planet.",
    "cn": "下雨時過多的肥料會被沖進河川,而且它也會釋放一種使地球變暖的氣體。"
  },
  {
    "word": "refinery",
    "pos": "n.",
    "cn_def": "煉油廠",
    "en_def": "a factory where oil is made into fuel",
    "sentence": "The new {{BLANK}} will create many jobs, but environmental groups worry about the extra pollution it will bring.",
    "cn": "新的煉油廠將創造許多工作機會,但環保團體擔心它會帶來額外的污染。"
  },
  {
    "word": "pollute",
    "pos": "v.",
    "cn_def": "污染",
    "en_def": "to make air, water or land dirty",
    "sentence": "Factories that {{BLANK}} the river must now pay large fines, so many of them have started to clean their waste water.",
    "cn": "污染河川的工廠現在必須繳納高額罰款,所以其中許多已開始處理它們的廢水。"
  },
  {
    "word": "carbon sink",
    "pos": "n.phr.",
    "cn_def": "碳匯",
    "en_def": "a forest, ocean or soil that takes in more carbon than it gives out",
    "sentence": "The mangrove forest is an important {{BLANK}}, so the village protects it and plants new trees every spring.",
    "cn": "紅樹林是一個重要的碳匯,所以村民保護它,並在每年春天種植新樹。"
  },
  {
    "word": "decarbonise",
    "pos": "v.",
    "cn_def": "去碳化;減碳",
    "en_def": "to reduce the carbon a country or company produces",
    "sentence": "The steel company promised to {{BLANK}} its factories by 2050, but critics say the plan has no clear steps.",
    "cn": "這家鋼鐵公司承諾在2050年前讓工廠去碳化,但批評者說這個計畫沒有明確的步驟。"
  },
  {
    "word": "aerosol",
    "pos": "n.",
    "cn_def": "氣溶膠;懸浮微粒",
    "en_def": "tiny drops or bits floating in the air",
    "sentence": "Some {{BLANK}} from volcanoes can cool the planet for a short time, but they do not solve the problem of global warming.",
    "cn": "某些來自火山的懸浮微粒能讓地球短暫降溫,但它們無法解決全球暖化的問題。"
  },
  {
    "word": "incinerate",
    "pos": "v.",
    "cn_def": "焚化",
    "en_def": "to burn something completely, especially rubbish",
    "sentence": "Many cities {{BLANK}} their rubbish to save space, but burning plastic releases carbon and other harmful gases.",
    "cn": "許多城市焚化垃圾以節省空間,但燃燒塑膠會釋放碳和其他有害氣體。"
  },
  {
    "word": "industrialised",
    "pos": "adj.",
    "cn_def": "工業化的",
    "en_def": "having many factories and industries",
    "sentence": "{{BLANK}} countries have produced most of the carbon in the past, so poorer nations say the rich should pay more for solutions.",
    "cn": "工業化國家過去製造了大部分的碳,所以較貧窮的國家說富國應該為解決方案付出更多。"
  }
];

const MCQS = [
  {
    "q": "Carbon dioxide is the most common _____, but methane from farms is also a serious problem.",
    "options": [
      "ice sheet",
      "dry spell",
      "green roof",
      "greenhouse gas"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The city wants to cut its _____ by half before 2035, so it is adding more bus lanes and bike paths.",
    "options": [
      "premium",
      "atmosphere",
      "emission",
      "activist"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Old motorcycles _____ much more smoke than new electric scooters, so the government gives money to people who replace them.",
    "options": [
      "flood",
      "emit",
      "magnify",
      "exemplify"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Trees store _____ in their wood and leaves, so cutting down forests releases it back into the air.",
    "options": [
      "carbon",
      "latitude",
      "scale",
      "humidity"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Every time we drive a petrol car, it releases _____, and this gas stays in the air for hundreds of years.",
    "options": [
      "thermal expansion",
      "carbon dioxide",
      "heat island",
      "water stress"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Cows produce a lot of _____ when they digest grass, so some farmers are testing new kinds of animal food.",
    "options": [
      "sphere",
      "battery",
      "successor",
      "methane"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Most power plants still burn _____, but the share of clean energy is growing every year.",
    "options": [
      "electric vehicle",
      "the tip of the iceberg",
      "fossil fuel",
      "thermal expansion"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The old power station burned _____ for forty years, but it will close next year and become a museum.",
    "options": [
      "coal",
      "protest",
      "concession",
      "justice"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Many everyday products are made from _____, so reducing plastic also helps to reduce our use of oil.",
    "options": [
      "rainfall",
      "disaster",
      "mosquito",
      "petroleum"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ from the buses made the air near the station dirty, so the city switched to electric buses last year.",
    "options": [
      "seawall",
      "delta",
      "exhaust",
      "meltwater"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ from the factory smelled terrible, so local parents asked the company to clean its chimneys.",
    "options": [
      "fumes",
      "compromise",
      "casualty",
      "baseline"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Thick _____ covered the city for three days, so schools cancelled outdoor sports and many people wore masks.",
    "options": [
      "obligation",
      "smog",
      "scale",
      "reforestation"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Black _____ from wildfires lands on snow and ice, and the dark surface then melts faster in the sun.",
    "options": [
      "soot",
      "meteorologist",
      "Celsius",
      "shelter"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Cars with _____ engines burn fuel to move, but electric cars use batteries and produce no smoke on the road.",
    "options": [
      "insulation",
      "combustion",
      "condensation",
      "hazard"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The ocean can _____ a lot of heat, but warmer water then causes problems for fish and other sea life.",
    "options": [
      "abate",
      "thaw",
      "prioritise",
      "absorb"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Dark roofs increase the _____ of heat, so painting them white can keep a building several degrees cooler.",
    "options": [
      "coastline",
      "rainwater",
      "absorption",
      "obligation"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "These _____ gases act like the glass of a car in summer, and the temperature inside keeps rising.",
    "options": [
      "heat-trapping",
      "acidic",
      "uninhabitable",
      "carbon-neutral"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Grey smoke rose from the tall _____ all night, and the neighbours complained that their washing turned dirty.",
    "options": [
      "mandate",
      "smokestack",
      "shelter",
      "regime"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Electric cars have no _____, but the electricity they use may still come from coal power stations.",
    "options": [
      "concession",
      "surge",
      "tailpipe",
      "hardship"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Food waste in a _____ produces methane as it rots, so our town now collects kitchen scraps separately.",
    "options": [
      "rainwater",
      "tide",
      "refugee",
      "landfill"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Too much _____ washes into rivers when it rains, and it also releases a gas that warms the planet.",
    "options": [
      "baseline",
      "fertiliser",
      "mitigation",
      "threshold"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new _____ will create many jobs, but environmental groups worry about the extra pollution it will bring.",
    "options": [
      "insulation",
      "temperature",
      "refinery",
      "liability"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Factories that _____ the river must now pay large fines, so many of them have started to clean their waste water.",
    "options": [
      "tackle",
      "hinder",
      "prioritise",
      "pollute"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The mangrove forest is an important _____, so the village protects it and plants new trees every spring.",
    "options": [
      "carbon sink",
      "sea ice",
      "jet stream",
      "extreme weather"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The steel company promised to _____ its factories by 2050, but critics say the plan has no clear steps.",
    "options": [
      "prioritise",
      "portray",
      "decarbonise",
      "retrofit"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Some _____ from volcanoes can cool the planet for a short time, but they do not solve the problem of global warming.",
    "options": [
      "adaptation",
      "paradigm",
      "ventilation",
      "aerosol"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Many cities _____ their rubbish to save space, but burning plastic releases carbon and other harmful gases.",
    "options": [
      "incinerate",
      "stockpile",
      "retrofit",
      "corroborate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "_____ countries have produced most of the carbon in the past, so poorer nations say the rich should pay more for solutions.",
    "options": [
      "constant",
      "industrialised",
      "atmospheric",
      "unforeseen"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "greenhouse gas": {
    "pos": "n.phr.",
    "en_def": "a gas that traps heat in the atmosphere",
    "cn_def": "溫室氣體"
  },
  "emission": {
    "pos": "n.",
    "en_def": "gas or smoke that is sent into the air",
    "cn_def": "排放(物)"
  },
  "emit": {
    "pos": "v.",
    "en_def": "to send out gas, heat, light or sound",
    "cn_def": "排放;散發"
  },
  "carbon": {
    "pos": "n.",
    "en_def": "a chemical element found in coal, oil and living things",
    "cn_def": "碳"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "the gas CO2, produced when fuel is burned",
    "cn_def": "二氧化碳"
  },
  "methane": {
    "pos": "n.",
    "en_def": "a strong greenhouse gas from farms, rubbish and gas fields",
    "cn_def": "甲烷"
  },
  "fossil fuel": {
    "pos": "n.phr.",
    "en_def": "coal, oil or gas formed from ancient plants and animals",
    "cn_def": "化石燃料"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black rock burned to make heat or electricity",
    "cn_def": "煤"
  },
  "petroleum": {
    "pos": "n.",
    "en_def": "oil from under the ground used to make fuel and plastic",
    "cn_def": "石油"
  },
  "exhaust": {
    "pos": "n.",
    "en_def": "waste gas that comes out of an engine",
    "cn_def": "(引擎)廢氣"
  },
  "fumes": {
    "pos": "n.",
    "en_def": "strong, unpleasant smoke or gas",
    "cn_def": "(有害的)煙霧;廢氣"
  },
  "smog": {
    "pos": "n.",
    "en_def": "dirty air that looks like fog over a city",
    "cn_def": "霧霾;煙霧"
  },
  "soot": {
    "pos": "n.",
    "en_def": "black powder made when something is burned",
    "cn_def": "煤灰;煙灰"
  },
  "combustion": {
    "pos": "n.",
    "en_def": "the process of burning",
    "cn_def": "燃燒"
  },
  "absorb": {
    "pos": "v.",
    "en_def": "to take in something such as liquid, heat or gas",
    "cn_def": "吸收"
  },
  "absorption": {
    "pos": "n.",
    "en_def": "the process of taking something in",
    "cn_def": "吸收(作用)"
  },
  "heat-trapping": {
    "pos": "adj.",
    "en_def": "keeping heat in and not letting it escape",
    "cn_def": "吸熱的;困住熱能的"
  },
  "smokestack": {
    "pos": "n.",
    "en_def": "a tall chimney on a factory",
    "cn_def": "(工廠)煙囪"
  },
  "tailpipe": {
    "pos": "n.",
    "en_def": "the pipe at the back of a car where exhaust comes out",
    "cn_def": "(汽車)排氣管"
  },
  "landfill": {
    "pos": "n.",
    "en_def": "a place where rubbish is buried in the ground",
    "cn_def": "垃圾掩埋場"
  },
  "fertiliser": {
    "pos": "n.",
    "en_def": "a substance added to soil to help plants grow",
    "cn_def": "肥料"
  },
  "refinery": {
    "pos": "n.",
    "en_def": "a factory where oil is made into fuel",
    "cn_def": "煉油廠"
  },
  "pollute": {
    "pos": "v.",
    "en_def": "to make air, water or land dirty",
    "cn_def": "污染"
  },
  "carbon sink": {
    "pos": "n.phr.",
    "en_def": "a forest, ocean or soil that takes in more carbon than it gives out",
    "cn_def": "碳匯"
  },
  "decarbonise": {
    "pos": "v.",
    "en_def": "to reduce the carbon a country or company produces",
    "cn_def": "去碳化;減碳"
  },
  "aerosol": {
    "pos": "n.",
    "en_def": "tiny drops or bits floating in the air",
    "cn_def": "氣溶膠;懸浮微粒"
  },
  "incinerate": {
    "pos": "v.",
    "en_def": "to burn something completely, especially rubbish",
    "cn_def": "焚化"
  },
  "industrialised": {
    "pos": "adj.",
    "en_def": "having many factories and industries",
    "cn_def": "工業化的"
  },
  "ice sheet": {
    "pos": "n.phr.",
    "en_def": "a very large, thick layer of ice covering land",
    "cn_def": "冰原;冰蓋"
  },
  "dry spell": {
    "pos": "n.phr.",
    "en_def": "a period with no rain",
    "cn_def": "乾旱期;久旱"
  },
  "green roof": {
    "pos": "n.phr.",
    "en_def": "a roof covered with plants",
    "cn_def": "綠屋頂"
  },
  "premium": {
    "pos": "n.",
    "en_def": "the amount paid regularly for insurance",
    "cn_def": "保費"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the layer of gases around the Earth",
    "cn_def": "大氣層"
  },
  "activist": {
    "pos": "n.",
    "en_def": "a person who works to bring political or social change",
    "cn_def": "社運人士;行動者"
  },
  "flood": {
    "pos": "v.",
    "en_def": "to cover an area with water",
    "cn_def": "淹沒;淹水"
  },
  "magnify": {
    "pos": "v.",
    "en_def": "to make something seem or become bigger",
    "cn_def": "擴大;放大"
  },
  "exemplify": {
    "pos": "v.",
    "en_def": "to be a typical example of something",
    "cn_def": "作為…的典範"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the size or level of something",
    "cn_def": "規模"
  },
  "humidity": {
    "pos": "n.",
    "en_def": "the amount of water in the air",
    "cn_def": "濕度"
  },
  "thermal expansion": {
    "pos": "n.phr.",
    "en_def": "the way water takes up more space when it gets warmer",
    "cn_def": "熱膨脹"
  },
  "heat island": {
    "pos": "n.phr.",
    "en_def": "a city area much warmer than the countryside around it",
    "cn_def": "熱島"
  },
  "water stress": {
    "pos": "n.phr.",
    "en_def": "when people need more water than is available",
    "cn_def": "缺水壓力;水資源壓力"
  },
  "sphere": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範圍"
  },
  "battery": {
    "pos": "n.",
    "en_def": "a device that stores electricity",
    "cn_def": "電池"
  },
  "successor": {
    "pos": "n.",
    "en_def": "a person or thing that comes after another",
    "cn_def": "繼任者;後繼者"
  },
  "electric vehicle": {
    "pos": "n.phr.",
    "en_def": "a car or scooter that runs on a battery",
    "cn_def": "電動車"
  },
  "the tip of the iceberg": {
    "pos": "n.phr.",
    "en_def": "a small, visible part of a much bigger problem",
    "cn_def": "冰山一角"
  },
  "protest": {
    "pos": "n.",
    "en_def": "a public event where people show they disagree",
    "cn_def": "抗議(活動)"
  },
  "concession": {
    "pos": "n.",
    "en_def": "something you agree to give up in a discussion",
    "cn_def": "讓步"
  },
  "justice": {
    "pos": "n.",
    "en_def": "fair treatment for everyone",
    "cn_def": "正義;公正"
  },
  "rainfall": {
    "pos": "n.",
    "en_def": "the amount of rain that falls in a place",
    "cn_def": "降雨量"
  },
  "disaster": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "災難"
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect that bites people",
    "cn_def": "蚊子"
  },
  "seawall": {
    "pos": "n.",
    "en_def": "a strong wall built to stop the sea from flooding land",
    "cn_def": "海堤"
  },
  "delta": {
    "pos": "n.",
    "en_def": "flat land where a river divides before entering the sea",
    "cn_def": "三角洲"
  },
  "meltwater": {
    "pos": "n.",
    "en_def": "water from melting snow or ice",
    "cn_def": "融水;雪水"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement where each side gives up something",
    "cn_def": "妥協;折衷"
  },
  "casualty": {
    "pos": "n.",
    "en_def": "a person who is hurt or killed in an accident or disaster",
    "cn_def": "傷亡者"
  },
  "baseline": {
    "pos": "n.",
    "en_def": "a starting point used for comparison",
    "cn_def": "基準線"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law or promise",
    "cn_def": "義務;責任"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "meteorologist": {
    "pos": "n.",
    "en_def": "a scientist who studies and reports the weather",
    "cn_def": "氣象學家;氣象預報員"
  },
  "celsius": {
    "pos": "n.",
    "en_def": "a scale for measuring temperature where water freezes at 0",
    "cn_def": "攝氏"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place that protects people from danger or bad weather",
    "cn_def": "避難所"
  },
  "insulation": {
    "pos": "n.",
    "en_def": "material that stops heat from getting in or out",
    "cn_def": "隔熱(材料)"
  },
  "condensation": {
    "pos": "n.",
    "en_def": "water drops that form when warm air touches something cold",
    "cn_def": "凝結(水珠)"
  },
  "hazard": {
    "pos": "n.",
    "en_def": "something that may be dangerous",
    "cn_def": "危險;危害"
  },
  "abate": {
    "pos": "v.",
    "en_def": "to become less strong",
    "cn_def": "減弱;緩和"
  },
  "thaw": {
    "pos": "v.",
    "en_def": "to change from ice to water; to stop being frozen",
    "cn_def": "解凍;融化"
  },
  "prioritise": {
    "pos": "v.",
    "en_def": "to treat something as more important than other things",
    "cn_def": "優先處理"
  },
  "coastline": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea",
    "cn_def": "海岸線"
  },
  "rainwater": {
    "pos": "n.",
    "en_def": "water that has fallen as rain",
    "cn_def": "雨水"
  },
  "acidic": {
    "pos": "adj.",
    "en_def": "containing acid; sour",
    "cn_def": "酸性的"
  },
  "uninhabitable": {
    "pos": "adj.",
    "en_def": "not safe or suitable for people to live in",
    "cn_def": "不適合居住的"
  },
  "carbon-neutral": {
    "pos": "adj.",
    "en_def": "adding no extra carbon to the atmosphere overall",
    "cn_def": "碳中和的"
  },
  "mandate": {
    "pos": "n.",
    "en_def": "an official order to do something",
    "cn_def": "命令;授權;規定"
  },
  "regime": {
    "pos": "n.",
    "en_def": "a system of rules or government",
    "cn_def": "體制;制度"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden large increase",
    "cn_def": "激增;暴增"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a difficult situation, often without enough money or food",
    "cn_def": "苦難;困境"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea",
    "cn_def": "潮汐;潮水"
  },
  "refugee": {
    "pos": "n.",
    "en_def": "a person forced to leave their home or country",
    "cn_def": "難民"
  },
  "mitigation": {
    "pos": "n.",
    "en_def": "actions that reduce how bad something is",
    "cn_def": "減緩;緩解"
  },
  "threshold": {
    "pos": "n.",
    "en_def": "the level at which something starts to happen",
    "cn_def": "門檻;臨界點"
  },
  "temperature": {
    "pos": "n.",
    "en_def": "how hot or cold something is",
    "cn_def": "溫度;氣溫"
  },
  "liability": {
    "pos": "n.",
    "en_def": "legal responsibility for something",
    "cn_def": "(法律)責任"
  },
  "tackle": {
    "pos": "v.",
    "en_def": "to deal with a difficult problem",
    "cn_def": "處理;應對"
  },
  "hinder": {
    "pos": "v.",
    "en_def": "to make it difficult for something to happen",
    "cn_def": "阻礙"
  },
  "sea ice": {
    "pos": "n.phr.",
    "en_def": "frozen sea water floating on the ocean",
    "cn_def": "海冰"
  },
  "jet stream": {
    "pos": "n.phr.",
    "en_def": "a strong, fast wind high in the sky",
    "cn_def": "噴射氣流"
  },
  "extreme weather": {
    "pos": "n.phr.",
    "en_def": "very unusual and dangerous weather",
    "cn_def": "極端天氣"
  },
  "portray": {
    "pos": "v.",
    "en_def": "to describe or show someone or something in a certain way",
    "cn_def": "描寫;刻劃"
  },
  "retrofit": {
    "pos": "v.",
    "en_def": "to add new parts to an old building or machine",
    "cn_def": "翻修改裝;加裝"
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a change made to deal with new conditions",
    "cn_def": "調適;適應"
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a typical model or way of thinking",
    "cn_def": "範式;模式"
  },
  "ventilation": {
    "pos": "n.",
    "en_def": "the movement of fresh air through a room or building",
    "cn_def": "通風"
  },
  "stockpile": {
    "pos": "v.",
    "en_def": "to collect and store a large supply of something",
    "cn_def": "儲備;囤積"
  },
  "corroborate": {
    "pos": "v.",
    "en_def": "to support an idea with new evidence",
    "cn_def": "證實;佐證"
  },
  "constant": {
    "pos": "adj.",
    "en_def": "happening all the time",
    "cn_def": "持續不斷的"
  },
  "atmospheric": {
    "pos": "adj.",
    "en_def": "connected with the air around the Earth",
    "cn_def": "大氣的"
  },
  "unforeseen": {
    "pos": "adj.",
    "en_def": "not expected or predicted",
    "cn_def": "未預見的;意料之外的"
  }
};

const EXTRA_GLOSSES = {};
