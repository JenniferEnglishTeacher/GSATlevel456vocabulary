// Topic 21 Subunit 2 Quiz Data: Electricity & the Power Grid 電力與電網
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S02 - Electricity & the Power Grid 電力與電網",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "power plant",
    "pos": "n.phr.",
    "cn_def": "發電廠",
    "en_def": "a factory that produces electricity",
    "sentence": "The new {{BLANK}} will supply electricity to half a million homes, but people living nearby are worried about the noise.",
    "cn": "這座新發電廠將供電給五十萬戶家庭，但住在附近的人擔心噪音問題。"
  },
  {
    "word": "power line",
    "pos": "n.phr.",
    "cn_def": "電線；輸電線",
    "en_def": "a wire that carries electricity over long distances",
    "sentence": "A fallen tree broke a {{BLANK}} during the storm, so our whole street had no electricity until the next morning.",
    "cn": "暴風雨期間一棵倒下的樹弄斷了一條電線，所以我們整條街直到隔天早上都沒有電。"
  },
  {
    "word": "pylon",
    "pos": "n.",
    "cn_def": "電塔",
    "en_def": "a tall metal tower that holds up power lines",
    "sentence": "Workers are building a giant {{BLANK}} on the hill, and it will carry electricity from the wind farm to the city.",
    "cn": "工人們正在山丘上建造一座巨大的電塔，它將把風力發電場的電輸送到城市。"
  },
  {
    "word": "transformer",
    "pos": "n.",
    "cn_def": "變壓器",
    "en_def": "a device that changes the voltage of electricity",
    "sentence": "The {{BLANK}} outside our building exploded with a loud bang, so the lifts stopped and everyone had to use the stairs.",
    "cn": "我們大樓外的變壓器發出巨響爆炸了，所以電梯停了，大家只好走樓梯。"
  },
  {
    "word": "substation",
    "pos": "n.",
    "cn_def": "變電所",
    "en_def": "a place where electricity is changed before reaching homes",
    "sentence": "The power company is building a {{BLANK}} near our school, but parents want to know whether it is completely safe.",
    "cn": "電力公司正在我們學校附近興建一座變電所，但家長們想知道它是否完全安全。"
  },
  {
    "word": "power cut",
    "pos": "n.phr.",
    "cn_def": "停電",
    "en_def": "a time when the electricity supply stops",
    "sentence": "There was a {{BLANK}} in the middle of my online exam, so I had to explain the problem to my teacher by phone.",
    "cn": "我線上考試考到一半時停電了，所以我只好打電話向老師解釋問題。"
  },
  {
    "word": "blackout",
    "pos": "n.",
    "cn_def": "大停電",
    "en_def": "a time when a whole area loses electricity",
    "sentence": "The heatwave caused a huge {{BLANK}} across the city, and traffic lights stopped working during the busy evening rush hour.",
    "cn": "熱浪造成全市大停電，交通號誌在繁忙的傍晚尖峰時段都停止運作。"
  },
  {
    "word": "outage",
    "pos": "n.",
    "cn_def": "停電；中斷",
    "en_def": "a period when a service like electricity stops working",
    "sentence": "The company apologised for the two-hour {{BLANK}}, and it promised to give every customer a small discount on next month's bill.",
    "cn": "公司為長達兩小時的停電道歉，並承諾下個月的帳單給每位客戶小額折扣。"
  },
  {
    "word": "peak demand",
    "pos": "n.phr.",
    "cn_def": "尖峰用電需求",
    "en_def": "the time when people use the most electricity",
    "sentence": "{{BLANK}} usually happens on hot summer afternoons, because almost every office and home turns on the air conditioning.",
    "cn": "尖峰用電需求通常發生在炎熱的夏日午後，因為幾乎每間辦公室和住家都會開冷氣。"
  },
  {
    "word": "off-peak",
    "pos": "adj.",
    "cn_def": "離峰的",
    "en_def": "at a time when fewer people use something, so it is cheaper",
    "sentence": "We run the washing machine at night because {{BLANK}} electricity is cheaper, and it helps us save money every month.",
    "cn": "我們在晚上使用洗衣機，因為離峰電價比較便宜，這幫助我們每個月省錢。"
  },
  {
    "word": "baseload",
    "pos": "n.",
    "cn_def": "基載電力",
    "en_def": "the minimum amount of power needed all the time",
    "sentence": "Coal plants used to supply most of the {{BLANK}}, but now gas and nuclear plants provide more of this steady power.",
    "cn": "燃煤電廠過去提供大部分的基載電力，但現在燃氣和核能電廠提供更多這種穩定的電力。"
  },
  {
    "word": "kilowatt",
    "pos": "n.",
    "cn_def": "千瓦",
    "en_def": "a unit of power equal to 1,000 watts",
    "sentence": "This small heater uses about one {{BLANK}} of power, so it can warm a bedroom without making the bill too high.",
    "cn": "這台小型暖氣機大約耗電一千瓦，所以它可以讓臥室變暖又不會讓電費太高。"
  },
  {
    "word": "kilowatt-hour",
    "pos": "n.",
    "cn_def": "千瓦時；度",
    "en_def": "a unit of electricity used, shown on your bill",
    "sentence": "Electricity costs about four dollars per {{BLANK}} in summer, so my mum asks us to turn off lights we are not using.",
    "cn": "夏天每度電大約四元，所以媽媽要我們關掉沒在用的燈。"
  },
  {
    "word": "megawatt",
    "pos": "n.",
    "cn_def": "百萬瓦；兆瓦",
    "en_def": "a unit of power equal to one million watts",
    "sentence": "Each of the new wind turbines can produce eight {{BLANK}}, and together they will power thousands of homes on the coast.",
    "cn": "每一座新的風力發電機都能產生八百萬瓦的電力，合起來將供電給沿海的數千戶家庭。"
  },
  {
    "word": "watt",
    "pos": "n.",
    "cn_def": "瓦特",
    "en_def": "a basic unit for measuring electric power",
    "sentence": "This LED bulb uses only ten {{BLANK}}, but it gives as much light as an old bulb that used sixty.",
    "cn": "這顆LED燈泡只用十瓦，但它的亮度和舊的六十瓦燈泡一樣。"
  },
  {
    "word": "alternating current",
    "pos": "n.phr.",
    "cn_def": "交流電",
    "en_def": "electricity that changes direction many times a second",
    "sentence": "Homes are supplied with {{BLANK}}, but phones and laptops need an adapter because they run on direct current.",
    "cn": "家庭供應的是交流電，但手機和筆電需要變壓器，因為它們使用直流電。"
  },
  {
    "word": "socket",
    "pos": "n.",
    "cn_def": "插座",
    "en_def": "the place in a wall where you plug things in",
    "sentence": "There is only one {{BLANK}} next to my bed, so I use an extension cord to charge my phone and lamp.",
    "cn": "我床邊只有一個插座，所以我用延長線來替手機充電和接檯燈。"
  },
  {
    "word": "plug",
    "pos": "n.",
    "cn_def": "插頭",
    "en_def": "the part at the end of a wire that goes into a socket",
    "sentence": "British {{BLANK}} have three square pins, so we bought a travel adapter before our trip to London.",
    "cn": "英國的插頭有三根方形插腳，所以我們在去倫敦前買了一個旅行轉接頭。"
  },
  {
    "word": "extension cord",
    "pos": "n.phr.",
    "cn_def": "延長線",
    "en_def": "a long wire that lets you plug in things far from a socket",
    "sentence": "Never connect too many heaters to one {{BLANK}}, because it can get very hot and may even start a fire.",
    "cn": "千萬不要在一條延長線上接太多暖氣機，因為它會變得很燙，甚至可能引起火災。"
  },
  {
    "word": "power strip",
    "pos": "n.phr.",
    "cn_def": "排插",
    "en_def": "a row of sockets on a short cable",
    "sentence": "I plug my computer, printer and lamp into one {{BLANK}}, so I can switch them all off with one button.",
    "cn": "我把電腦、印表機和檯燈都插在一個排插上，這樣我只要按一個按鈕就能全部關掉。"
  },
  {
    "word": "circuit breaker",
    "pos": "n.phr.",
    "cn_def": "斷路器",
    "en_def": "a switch that stops electricity when there is a problem",
    "sentence": "When we used the oven and the heater together, the {{BLANK}} switched off, and the whole kitchen went dark.",
    "cn": "當我們同時使用烤箱和暖氣機時，斷路器跳掉了，整個廚房一片漆黑。"
  },
  {
    "word": "short circuit",
    "pos": "n.phr.",
    "cn_def": "短路",
    "en_def": "a fault where electricity takes the wrong path",
    "sentence": "Water got into the old hair dryer and caused a {{BLANK}}, so there was a spark and a smell of burning plastic.",
    "cn": "水跑進那台舊吹風機造成短路，所以冒出火花，還有塑膠燒焦的味道。"
  },
  {
    "word": "electrical",
    "pos": "adj.",
    "cn_def": "電的；電氣的",
    "en_def": "related to or using electricity",
    "sentence": "The fire was caused by an {{BLANK}} fault in the old building, so the owner has now replaced all the wiring.",
    "cn": "這場火災是舊大樓的電氣故障所引起的，所以屋主現在已經更換了所有電線。"
  },
  {
    "word": "utility company",
    "pos": "n.phr.",
    "cn_def": "公用事業公司",
    "en_def": "a company that supplies electricity, gas or water",
    "sentence": "The {{BLANK}} sent a letter about higher prices, but it also offered tips on how families can use less power.",
    "cn": "公用事業公司寄來一封關於漲價的信，但也提供了家庭如何少用電的小技巧。"
  },
  {
    "word": "transmission line",
    "pos": "n.phr.",
    "cn_def": "輸電線路",
    "en_def": "a high-voltage cable that carries power across a country",
    "sentence": "A new {{BLANK}} will carry solar power from the south to the north, because most factories are in the north.",
    "cn": "一條新的輸電線路將把太陽能電力從南部送到北部，因為大部分工廠都在北部。"
  },
  {
    "word": "power supply",
    "pos": "n.phr.",
    "cn_def": "電力供應",
    "en_def": "the electricity that is provided to a place",
    "sentence": "Hospitals need a steady {{BLANK}} all the time, so they keep large backup generators in case the main electricity fails.",
    "cn": "醫院隨時都需要穩定的電力供應，所以他們備有大型備用發電機，以防主電源中斷。"
  },
  {
    "word": "surge protector",
    "pos": "n.phr.",
    "cn_def": "突波保護器",
    "en_def": "a device that protects machines from sudden strong electricity",
    "sentence": "Lightning hit our neighbourhood last night, but my computer was fine because it was plugged into a {{BLANK}}.",
    "cn": "昨晚閃電打中我們社區，但我的電腦沒事，因為它插在突波保護器上。"
  },
  {
    "word": "smart grid",
    "pos": "n.phr.",
    "cn_def": "智慧電網",
    "en_def": "an electricity network that uses computers to manage power",
    "sentence": "A {{BLANK}} can send power where it is needed most, so it reduces waste and helps prevent sudden blackouts.",
    "cn": "智慧電網能把電力送到最需要的地方，所以它減少浪費，並幫助防止突然大停電。"
  },
  {
    "word": "microgrid",
    "pos": "n.",
    "cn_def": "微電網",
    "en_def": "a small local power network that can work alone",
    "sentence": "The island village built its own {{BLANK}} with solar panels and batteries, so it no longer depends on the main power network.",
    "cn": "這個島上的村莊用太陽能板和電池建造了自己的微電網，所以不再依賴主要電網。"
  },
  {
    "word": "rolling blackout",
    "pos": "n.phr.",
    "cn_def": "輪流停電",
    "en_def": "planned power cuts that move from area to area",
    "sentence": "During the energy shortage, the city used {{BLANK}} to save power, so each district lost electricity for two hours.",
    "cn": "能源短缺期間，城市實施輪流停電來節省電力，所以每個區域停電兩小時。"
  },
  {
    "word": "electrify",
    "pos": "v.",
    "cn_def": "使電氣化；供電給",
    "en_def": "to supply something with electricity",
    "sentence": "The government plans to {{BLANK}} all the railways by 2035, because electric trains are cleaner and quieter than diesel ones.",
    "cn": "政府計畫在2035年前將所有鐵路電氣化，因為電動火車比柴油火車更乾淨也更安靜。"
  },
  {
    "word": "load shedding",
    "pos": "n.phr.",
    "cn_def": "限電；分區停電",
    "en_def": "cutting power to some areas so the system does not fail",
    "sentence": "South Africa has suffered from {{BLANK}} for years, so many shops now keep their own generators to stay open.",
    "cn": "南非多年來一直受限電之苦，所以許多商店現在自備發電機以維持營業。"
  }
];

const MCQS = [
  {
    "q": "The new _____ will supply electricity to half a million homes, but people living nearby are worried about the noise.",
    "options": [
      "rainwater harvesting",
      "capacity factor",
      "power plant",
      "jet fuel"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "A fallen tree broke a _____ during the storm, so our whole street had no electricity until the next morning.",
    "options": [
      "power line",
      "wind speed",
      "water shortage",
      "water rights"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Workers are building a giant _____ on the hill, and it will carry electricity from the wind farm to the city.",
    "options": [
      "acceptability",
      "aluminium",
      "disadvantage",
      "pylon"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The _____ outside our building exploded with a loud bang, so the lifts stopped and everyone had to use the stairs.",
    "options": [
      "encroachment",
      "transformer",
      "rollout",
      "renegotiation"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The power company is building a _____ near our school, but parents want to know whether it is completely safe.",
    "options": [
      "diesel",
      "hydrogen",
      "substation",
      "inverter"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "There was a _____ in the middle of my online exam, so I had to explain the problem to my teacher by phone.",
    "options": [
      "mining town",
      "precious metal",
      "crude oil",
      "power cut"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The heatwave caused a huge _____ across the city, and traffic lights stopped working during the busy evening rush hour.",
    "options": [
      "blackout",
      "kerosene",
      "fundamentals",
      "rollout"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The company apologised for the two-hour _____, and it promised to give every customer a small discount on next month's bill.",
    "options": [
      "cost-effectiveness",
      "outage",
      "fallback",
      "overcapacity"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "_____ usually happens on hot summer afternoons, because almost every office and home turns on the air conditioning.",
    "options": [
      "green hydrogen",
      "water rights",
      "peak demand",
      "natural resources"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "We run the washing machine at night because _____ electricity is cheaper, and it helps us save money every month.",
    "options": [
      "storable",
      "off-peak",
      "dwindling",
      "protectionist"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Coal plants used to supply most of the _____, but now gas and nuclear plants provide more of this steady power.",
    "options": [
      "deflation",
      "overcapacity",
      "aridity",
      "baseload"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "This small heater uses about one _____ of power, so it can warm a bedroom without making the bill too high.",
    "options": [
      "kilowatt",
      "cobalt",
      "brink",
      "fundamentals"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Electricity costs about four dollars per _____ in summer, so my mum asks us to turn off lights we are not using.",
    "options": [
      "counterweight",
      "kilowatt-hour",
      "asymmetry",
      "refining"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Each of the new wind turbines can produce eight _____, and together they will power thousands of homes on the coast.",
    "options": [
      "megawatt",
      "slowdown",
      "renewables",
      "diminution"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "This LED bulb uses only ten _____, but it gives as much light as an old bulb that used sixty.",
    "options": [
      "self-reliance",
      "wastage",
      "zinc",
      "watt"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Homes are supplied with _____, but phones and laptops need an adapter because they run on direct current.",
    "options": [
      "motion sensor",
      "wave energy",
      "alternating current",
      "wind speed"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "There is only one _____ next to my bed, so I use an extension cord to charge my phone and lamp.",
    "options": [
      "lifetime",
      "socket",
      "interruption",
      "reassessment"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "British _____ have three square pins, so we bought a travel adapter before our trip to London.",
    "options": [
      "plug",
      "mine",
      "well",
      "wastage"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Never connect too many heaters to one _____, because it can get very hot and may even start a fire.",
    "options": [
      "ore deposit",
      "spent fuel",
      "extension cord",
      "energy demand"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "I plug my computer, printer and lamp into one _____, so I can switch them all off with one button.",
    "options": [
      "central heating",
      "strip mining",
      "oil tanker",
      "power strip"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "When we used the oven and the heater together, the _____ switched off, and the whole kitchen went dark.",
    "options": [
      "rainwater harvesting",
      "circuit breaker",
      "energy transition",
      "shale gas"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Water got into the old hair dryer and caused a _____, so there was a spark and a smell of burning plastic.",
    "options": [
      "solar farm",
      "rooftop solar",
      "circular economy",
      "short circuit"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The fire was caused by an _____ fault in the old building, so the owner has now replaced all the wiring.",
    "options": [
      "electrical",
      "encompassing",
      "uncertain",
      "resource-rich"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The _____ sent a letter about higher prices, but it also offered tips on how families can use less power.",
    "options": [
      "standby mode",
      "oil tanker",
      "utility company",
      "natural gas"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "A new _____ will carry solar power from the south to the north, because most factories are in the north.",
    "options": [
      "petrol station",
      "transmission line",
      "energy crisis",
      "loft insulation"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Hospitals need a steady _____ all the time, so they keep large backup generators in case the main electricity fails.",
    "options": [
      "vested interest",
      "rebound effect",
      "alternative energy",
      "power supply"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Lightning hit our neighbourhood last night, but my computer was fine because it was plugged into a _____.",
    "options": [
      "sand mining",
      "energy independence",
      "surge protector",
      "rainwater harvesting"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "A _____ can send power where it is needed most, so it reduces waste and helps prevent sudden blackouts.",
    "options": [
      "smart grid",
      "oil reserves",
      "central heating",
      "payback period"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The island village built its own _____ with solar panels and batteries, so it no longer depends on the main power network.",
    "options": [
      "abolition",
      "brink",
      "microgrid",
      "slag"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "During the energy shortage, the city used _____ to save power, so each district lost electricity for two hours.",
    "options": [
      "solar cell",
      "energy demand",
      "oil field",
      "rolling blackout"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The government plans to _____ all the railways by 2035, because electric trains are cleaner and quieter than diesel ones.",
    "options": [
      "electrify",
      "tighten",
      "downgrade",
      "widen"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "South Africa has suffered from _____ for years, so many shops now keep their own generators to stay open.",
    "options": [
      "charging station",
      "load shedding",
      "liquefied natural gas",
      "installed capacity"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "power plant": {
    "pos": "n.phr.",
    "en_def": "a factory that produces electricity",
    "cn_def": "發電廠"
  },
  "power line": {
    "pos": "n.phr.",
    "en_def": "a wire that carries electricity over long distances",
    "cn_def": "電線；輸電線"
  },
  "pylon": {
    "pos": "n.",
    "en_def": "a tall metal tower that holds up power lines",
    "cn_def": "電塔"
  },
  "transformer": {
    "pos": "n.",
    "en_def": "a device that changes the voltage of electricity",
    "cn_def": "變壓器"
  },
  "substation": {
    "pos": "n.",
    "en_def": "a place where electricity is changed before reaching homes",
    "cn_def": "變電所"
  },
  "power cut": {
    "pos": "n.phr.",
    "en_def": "a time when the electricity supply stops",
    "cn_def": "停電"
  },
  "blackout": {
    "pos": "n.",
    "en_def": "a time when a whole area loses electricity",
    "cn_def": "大停電"
  },
  "outage": {
    "pos": "n.",
    "en_def": "a period when a service like electricity stops working",
    "cn_def": "停電；中斷"
  },
  "peak demand": {
    "pos": "n.phr.",
    "en_def": "the time when people use the most electricity",
    "cn_def": "尖峰用電需求"
  },
  "off-peak": {
    "pos": "adj.",
    "en_def": "at a time when fewer people use something, so it is cheaper",
    "cn_def": "離峰的"
  },
  "baseload": {
    "pos": "n.",
    "en_def": "the minimum amount of power needed all the time",
    "cn_def": "基載電力"
  },
  "kilowatt": {
    "pos": "n.",
    "en_def": "a unit of power equal to 1,000 watts",
    "cn_def": "千瓦"
  },
  "kilowatt-hour": {
    "pos": "n.",
    "en_def": "a unit of electricity used, shown on your bill",
    "cn_def": "千瓦時；度"
  },
  "megawatt": {
    "pos": "n.",
    "en_def": "a unit of power equal to one million watts",
    "cn_def": "百萬瓦；兆瓦"
  },
  "watt": {
    "pos": "n.",
    "en_def": "a basic unit for measuring electric power",
    "cn_def": "瓦特"
  },
  "alternating current": {
    "pos": "n.phr.",
    "en_def": "electricity that changes direction many times a second",
    "cn_def": "交流電"
  },
  "socket": {
    "pos": "n.",
    "en_def": "the place in a wall where you plug things in",
    "cn_def": "插座"
  },
  "plug": {
    "pos": "n.",
    "en_def": "the part at the end of a wire that goes into a socket",
    "cn_def": "插頭"
  },
  "extension cord": {
    "pos": "n.phr.",
    "en_def": "a long wire that lets you plug in things far from a socket",
    "cn_def": "延長線"
  },
  "power strip": {
    "pos": "n.phr.",
    "en_def": "a row of sockets on a short cable",
    "cn_def": "排插"
  },
  "circuit breaker": {
    "pos": "n.phr.",
    "en_def": "a switch that stops electricity when there is a problem",
    "cn_def": "斷路器"
  },
  "short circuit": {
    "pos": "n.phr.",
    "en_def": "a fault where electricity takes the wrong path",
    "cn_def": "短路"
  },
  "electrical": {
    "pos": "adj.",
    "en_def": "related to or using electricity",
    "cn_def": "電的；電氣的"
  },
  "utility company": {
    "pos": "n.phr.",
    "en_def": "a company that supplies electricity, gas or water",
    "cn_def": "公用事業公司"
  },
  "transmission line": {
    "pos": "n.phr.",
    "en_def": "a high-voltage cable that carries power across a country",
    "cn_def": "輸電線路"
  },
  "power supply": {
    "pos": "n.phr.",
    "en_def": "the electricity that is provided to a place",
    "cn_def": "電力供應"
  },
  "surge protector": {
    "pos": "n.phr.",
    "en_def": "a device that protects machines from sudden strong electricity",
    "cn_def": "突波保護器"
  },
  "smart grid": {
    "pos": "n.phr.",
    "en_def": "an electricity network that uses computers to manage power",
    "cn_def": "智慧電網"
  },
  "microgrid": {
    "pos": "n.",
    "en_def": "a small local power network that can work alone",
    "cn_def": "微電網"
  },
  "rolling blackout": {
    "pos": "n.phr.",
    "en_def": "planned power cuts that move from area to area",
    "cn_def": "輪流停電"
  },
  "electrify": {
    "pos": "v.",
    "en_def": "to supply something with electricity",
    "cn_def": "使電氣化；供電給"
  },
  "load shedding": {
    "pos": "n.phr.",
    "en_def": "cutting power to some areas so the system does not fail",
    "cn_def": "限電；分區停電"
  },
  "rainwater harvesting": {
    "pos": "n.phr.",
    "en_def": "collecting rain so it can be used later",
    "cn_def": "雨水回收"
  },
  "capacity factor": {
    "pos": "n.phr.",
    "en_def": "how much power a plant really makes compared with its maximum",
    "cn_def": "容量因數"
  },
  "jet fuel": {
    "pos": "n.phr.",
    "en_def": "special fuel used by aeroplanes",
    "cn_def": "航空燃油"
  },
  "wind speed": {
    "pos": "n.phr.",
    "en_def": "how fast the wind is blowing",
    "cn_def": "風速"
  },
  "water shortage": {
    "pos": "n.phr.",
    "en_def": "a situation when there is not enough water",
    "cn_def": "缺水"
  },
  "water rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to use water from a river or lake",
    "cn_def": "水權"
  },
  "acceptability": {
    "pos": "n.",
    "en_def": "how far something is accepted by people",
    "cn_def": "可接受度"
  },
  "aluminium": {
    "pos": "n.",
    "en_def": "a light silver metal used for cans and planes",
    "cn_def": "鋁"
  },
  "disadvantage": {
    "pos": "n.",
    "en_def": "something that makes a situation less good",
    "cn_def": "缺點"
  },
  "encroachment": {
    "pos": "n.",
    "en_def": "slowly taking over land or rights",
    "cn_def": "侵占；侵蝕"
  },
  "rollout": {
    "pos": "n.",
    "en_def": "the introduction of a new product or service to many people",
    "cn_def": "推出；普及"
  },
  "renegotiation": {
    "pos": "n.",
    "en_def": "discussing an agreement again to change it",
    "cn_def": "重新談判"
  },
  "diesel": {
    "pos": "n.",
    "en_def": "a heavy fuel used in trucks, buses and some cars",
    "cn_def": "柴油"
  },
  "hydrogen": {
    "pos": "n.",
    "en_def": "a very light gas that can be used as clean fuel",
    "cn_def": "氫"
  },
  "inverter": {
    "pos": "n.",
    "en_def": "a device that changes direct current into alternating current",
    "cn_def": "逆變器"
  },
  "mining town": {
    "pos": "n.phr.",
    "en_def": "a town built around a mine",
    "cn_def": "礦業小鎮"
  },
  "precious metal": {
    "pos": "n.phr.",
    "en_def": "a rare metal of high value, such as gold",
    "cn_def": "貴金屬"
  },
  "crude oil": {
    "pos": "n.phr.",
    "en_def": "oil in its natural state before it is cleaned",
    "cn_def": "原油"
  },
  "kerosene": {
    "pos": "n.",
    "en_def": "an oil burned in lamps and some heaters",
    "cn_def": "煤油"
  },
  "fundamentals": {
    "pos": "n.",
    "en_def": "the basic and most important parts of something",
    "cn_def": "基本原理；基礎"
  },
  "cost-effectiveness": {
    "pos": "n.",
    "en_def": "how much benefit you get for the money spent",
    "cn_def": "成本效益"
  },
  "fallback": {
    "pos": "n.",
    "en_def": "a plan or option kept for when others fail",
    "cn_def": "備案"
  },
  "overcapacity": {
    "pos": "n.",
    "en_def": "having more ability to produce than is needed",
    "cn_def": "產能過剩"
  },
  "green hydrogen": {
    "pos": "n.phr.",
    "en_def": "hydrogen made using renewable electricity",
    "cn_def": "綠氫"
  },
  "natural resources": {
    "pos": "n.phr.",
    "en_def": "things from nature that people use, like water and oil",
    "cn_def": "天然資源"
  },
  "storable": {
    "pos": "adj.",
    "en_def": "able to be kept for later use",
    "cn_def": "可儲存的"
  },
  "dwindling": {
    "pos": "adj.",
    "en_def": "becoming gradually smaller in amount",
    "cn_def": "日漸減少的"
  },
  "protectionist": {
    "pos": "adj.",
    "en_def": "protecting local industry by limiting foreign goods",
    "cn_def": "保護主義的"
  },
  "deflation": {
    "pos": "n.",
    "en_def": "a general fall in prices in an economy",
    "cn_def": "通貨緊縮"
  },
  "aridity": {
    "pos": "n.",
    "en_def": "the state of being very dry",
    "cn_def": "乾燥；乾旱"
  },
  "cobalt": {
    "pos": "n.",
    "en_def": "a hard metal used in batteries and blue colours",
    "cn_def": "鈷"
  },
  "brink": {
    "pos": "n.",
    "en_def": "the point just before something bad happens",
    "cn_def": "邊緣"
  },
  "counterweight": {
    "pos": "n.",
    "en_def": "something that balances another force or influence",
    "cn_def": "制衡力量；平衡物"
  },
  "asymmetry": {
    "pos": "n.",
    "en_def": "a lack of balance between two sides",
    "cn_def": "不對稱"
  },
  "refining": {
    "pos": "n.",
    "en_def": "the process of making oil clean and useful",
    "cn_def": "精煉"
  },
  "slowdown": {
    "pos": "n.",
    "en_def": "a reduction in speed or activity",
    "cn_def": "減緩；放緩"
  },
  "renewables": {
    "pos": "n.",
    "en_def": "energy sources such as sun and wind that never run out",
    "cn_def": "再生能源"
  },
  "diminution": {
    "pos": "n.",
    "en_def": "a reduction in size or importance",
    "cn_def": "減少；縮小"
  },
  "self-reliance": {
    "pos": "n.",
    "en_def": "depending on your own abilities and resources",
    "cn_def": "自力更生"
  },
  "wastage": {
    "pos": "n.",
    "en_def": "the amount of something that is wasted",
    "cn_def": "浪費量；損耗"
  },
  "zinc": {
    "pos": "n.",
    "en_def": "a blue-white metal used to protect steel from rust",
    "cn_def": "鋅"
  },
  "motion sensor": {
    "pos": "n.phr.",
    "en_def": "a device that turns on when it notices movement",
    "cn_def": "動作感應器"
  },
  "wave energy": {
    "pos": "n.phr.",
    "en_def": "power taken from the movement of ocean waves",
    "cn_def": "波浪能"
  },
  "lifetime": {
    "pos": "n.",
    "en_def": "the period of time something lasts",
    "cn_def": "壽命"
  },
  "interruption": {
    "pos": "n.",
    "en_def": "a break in a service or activity",
    "cn_def": "中斷"
  },
  "reassessment": {
    "pos": "n.",
    "en_def": "the act of judging something again",
    "cn_def": "重新評估"
  },
  "mine": {
    "pos": "n.",
    "en_def": "a deep hole or tunnels where minerals are dug out",
    "cn_def": "礦坑"
  },
  "well": {
    "pos": "n.",
    "en_def": "a hole dug in the ground to get water",
    "cn_def": "井"
  },
  "ore deposit": {
    "pos": "n.phr.",
    "en_def": "a natural collection of rock containing useful metal",
    "cn_def": "礦床"
  },
  "spent fuel": {
    "pos": "n.phr.",
    "en_def": "used nuclear fuel that is still very dangerous",
    "cn_def": "用過核燃料"
  },
  "energy demand": {
    "pos": "n.phr.",
    "en_def": "the amount of energy that people need",
    "cn_def": "能源需求"
  },
  "central heating": {
    "pos": "n.phr.",
    "en_def": "a system that heats a whole building from one place",
    "cn_def": "中央暖氣"
  },
  "strip mining": {
    "pos": "n.phr.",
    "en_def": "removing the top layer of land to reach coal",
    "cn_def": "露天剝採"
  },
  "oil tanker": {
    "pos": "n.phr.",
    "en_def": "a large ship that carries oil",
    "cn_def": "油輪"
  },
  "energy transition": {
    "pos": "n.phr.",
    "en_def": "the change from fossil fuels to clean energy",
    "cn_def": "能源轉型"
  },
  "shale gas": {
    "pos": "n.phr.",
    "en_def": "natural gas trapped inside layers of soft rock",
    "cn_def": "頁岩氣"
  },
  "solar farm": {
    "pos": "n.phr.",
    "en_def": "a large area of land covered with solar panels",
    "cn_def": "太陽能發電場"
  },
  "rooftop solar": {
    "pos": "n.phr.",
    "en_def": "solar panels placed on the roofs of buildings",
    "cn_def": "屋頂型太陽能"
  },
  "circular economy": {
    "pos": "n.phr.",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "cn_def": "循環經濟"
  },
  "encompassing": {
    "pos": "adj.",
    "en_def": "including many different things",
    "cn_def": "涵蓋廣泛的"
  },
  "uncertain": {
    "pos": "adj.",
    "en_def": "not known or not sure",
    "cn_def": "不確定的"
  },
  "resource-rich": {
    "pos": "adj.",
    "en_def": "having a lot of natural resources",
    "cn_def": "資源豐富的"
  },
  "standby mode": {
    "pos": "n.phr.",
    "en_def": "when a machine is off but still uses a little power",
    "cn_def": "待機模式"
  },
  "natural gas": {
    "pos": "n.phr.",
    "en_def": "a gas from under the ground used for heating and cooking",
    "cn_def": "天然氣"
  },
  "petrol station": {
    "pos": "n.phr.",
    "en_def": "a place where you buy fuel for your car",
    "cn_def": "加油站"
  },
  "energy crisis": {
    "pos": "n.phr.",
    "en_def": "a serious shortage of energy and very high prices",
    "cn_def": "能源危機"
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
  "rebound effect": {
    "pos": "n.phr.",
    "en_def": "when saving energy leads people to use more",
    "cn_def": "反彈效應"
  },
  "alternative energy": {
    "pos": "n.phr.",
    "en_def": "energy that does not come from fossil fuels",
    "cn_def": "替代能源"
  },
  "sand mining": {
    "pos": "n.phr.",
    "en_def": "taking sand from rivers and beaches for building",
    "cn_def": "採砂"
  },
  "energy independence": {
    "pos": "n.phr.",
    "en_def": "producing enough energy without relying on other countries",
    "cn_def": "能源自主"
  },
  "oil reserves": {
    "pos": "n.phr.",
    "en_def": "the amount of oil a country still has underground",
    "cn_def": "石油蘊藏量"
  },
  "payback period": {
    "pos": "n.phr.",
    "en_def": "the time it takes for savings to repay the cost",
    "cn_def": "回收期"
  },
  "abolition": {
    "pos": "n.",
    "en_def": "the official ending of a law or system",
    "cn_def": "廢除"
  },
  "slag": {
    "pos": "n.",
    "en_def": "waste material left after metal is taken from rock",
    "cn_def": "爐渣"
  },
  "solar cell": {
    "pos": "n.phr.",
    "en_def": "a small device that changes sunlight into electricity",
    "cn_def": "太陽能電池"
  },
  "oil field": {
    "pos": "n.phr.",
    "en_def": "an area where a lot of oil is under the ground",
    "cn_def": "油田"
  },
  "tighten": {
    "pos": "v.",
    "en_def": "to make rules stricter",
    "cn_def": "收緊；加強"
  },
  "downgrade": {
    "pos": "v.",
    "en_def": "to lower the level or importance of something",
    "cn_def": "降低；下修"
  },
  "widen": {
    "pos": "v.",
    "en_def": "to become or make wider",
    "cn_def": "擴大"
  },
  "charging station": {
    "pos": "n.phr.",
    "en_def": "a place where electric cars can be charged",
    "cn_def": "充電站"
  },
  "liquefied natural gas": {
    "pos": "n.phr.",
    "en_def": "natural gas cooled until it becomes liquid for shipping",
    "cn_def": "液化天然氣"
  },
  "installed capacity": {
    "pos": "n.phr.",
    "en_def": "the maximum power that all machines can produce",
    "cn_def": "裝置容量"
  }
};

const EXTRA_GLOSSES = {};
