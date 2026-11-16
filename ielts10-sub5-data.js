// Topic 10 Subunit 5 Quiz Data: Green & Sustainable Design 綠色永續設計
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S05 - Green & Sustainable Design 綠色永續設計",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "green building",
    "pos": "n.phr.",
    "cn_def": "綠建築",
    "en_def": "a building designed to save energy and water and harm nature less",
    "sentence": "The new library is a {{BLANK}} with solar power and rain collection, so its electricity bills are very low.",
    "cn": "新圖書館是一棟有太陽能發電和集雨系統的綠建築，所以它的電費非常低。"
  },
  {
    "word": "passive house",
    "pos": "n.phr.",
    "cn_def": "被動式節能屋",
    "en_def": "a very well-sealed home that needs almost no heating or cooling",
    "sentence": "A {{BLANK}} keeps a steady temperature all year, so the family hardly ever turns on the heater or the air conditioner.",
    "cn": "被動式節能屋一年四季都保持穩定的溫度，所以這家人幾乎從不開暖氣或冷氣。"
  },
  {
    "word": "net-zero",
    "pos": "adj.",
    "cn_def": "淨零（排放）的",
    "en_def": "producing as much clean energy as it uses, or no extra carbon",
    "sentence": "The company wants all its offices to be {{BLANK}} by 2040, so it is putting solar panels on every roof.",
    "cn": "這家公司希望在2040年前讓所有辦公室都達到淨零，所以正在每個屋頂裝設太陽能板。"
  },
  {
    "word": "thermostat",
    "pos": "n.",
    "cn_def": "恆溫器；溫控器",
    "en_def": "a device that controls the temperature of a room",
    "sentence": "We set the {{BLANK}} to 26 degrees in summer, and our electricity bill dropped by almost twenty percent.",
    "cn": "我們夏天把溫控器設定在26度，而我們的電費下降了將近百分之二十。"
  },
  {
    "word": "photovoltaic",
    "pos": "adj.",
    "cn_def": "光電的；太陽光電的",
    "en_def": "changing sunlight directly into electricity",
    "sentence": "The school covered its sports hall with {{BLANK}} panels, and now they produce enough power for all the classroom lights.",
    "cn": "學校在體育館上鋪滿了光電板，而現在它們產生的電力足以供應所有教室的照明。"
  },
  {
    "word": "heat pump",
    "pos": "n.phr.",
    "cn_def": "熱泵",
    "en_def": "a machine that moves heat from outside air or ground into a building",
    "sentence": "Our old water heater broke, so we bought a {{BLANK}}, which uses much less electricity to make hot water.",
    "cn": "我們的舊熱水器壞了，所以我們買了一台熱泵，它製造熱水所用的電少得多。"
  },
  {
    "word": "double glazing",
    "pos": "n.phr.",
    "cn_def": "雙層玻璃窗",
    "en_def": "windows with two layers of glass to keep heat and noise out",
    "sentence": "Our flat is next to a busy road, but the {{BLANK}} keeps out most of the noise, so we can sleep well.",
    "cn": "我們的公寓緊鄰一條繁忙的道路，但雙層玻璃窗擋住了大部分噪音，所以我們能睡得很好。"
  },
  {
    "word": "natural light",
    "pos": "n.phr.",
    "cn_def": "自然光",
    "en_def": "light from the sun rather than from lamps",
    "sentence": "The classrooms have large windows that let in plenty of {{BLANK}}, so students feel more awake and focused.",
    "cn": "教室有大窗戶讓大量自然光照進來，所以學生們感覺更清醒、更專注。"
  },
  {
    "word": "thermal mass",
    "pos": "n.phr.",
    "cn_def": "蓄熱體；熱質量",
    "en_def": "the ability of heavy materials to store heat and release it slowly",
    "sentence": "Thick stone walls have high {{BLANK}}, so they absorb heat during the day and release it slowly at night.",
    "cn": "厚實的石牆有很高的蓄熱能力，所以它們白天吸收熱量，晚上再慢慢釋放出來。"
  },
  {
    "word": "green wall",
    "pos": "n.phr.",
    "cn_def": "綠牆；植生牆",
    "en_def": "a wall covered with living plants",
    "sentence": "The hotel built a huge {{BLANK}} beside the entrance, and the plants help clean the air and cool the building.",
    "cn": "那家飯店在入口旁建了一面巨大的植生牆，而這些植物有助於淨化空氣和替建築降溫。"
  },
  {
    "word": "vertical garden",
    "pos": "n.phr.",
    "cn_def": "垂直花園",
    "en_def": "plants grown up a wall or on shelves rather than on the ground",
    "sentence": "Our flat has no yard, so we made a small {{BLANK}} on the balcony with herbs, lettuce and strawberries.",
    "cn": "我們的公寓沒有院子，所以我們在陽台上用香草、萵苣和草莓做了一座小型垂直花園。"
  },
  {
    "word": "rain garden",
    "pos": "n.phr.",
    "cn_def": "雨水花園",
    "en_def": "a low garden that collects rainwater from roofs and roads",
    "sentence": "The school dug a {{BLANK}} near the car park, and now the playground no longer floods after heavy storms.",
    "cn": "學校在停車場附近挖了一座雨水花園，而現在操場在暴雨後不再淹水了。"
  },
  {
    "word": "permeable surface",
    "pos": "n.phr.",
    "cn_def": "透水鋪面",
    "en_def": "ground covering that lets water soak through it",
    "sentence": "The new car park has a {{BLANK}}, so rain can soak into the soil instead of running into the drains.",
    "cn": "新停車場鋪設了透水鋪面，所以雨水能滲入土壤，而不是流進排水溝。"
  },
  {
    "word": "greywater",
    "pos": "n.",
    "cn_def": "中水；灰水（可回收的生活廢水）",
    "en_def": "used water from sinks and showers that can be used again",
    "sentence": "The building collects {{BLANK}} from its showers, and it uses this water to flush the toilets and water the garden.",
    "cn": "這棟大樓收集淋浴產生的中水，並用這些水來沖馬桶和澆花園。"
  },
  {
    "word": "sponge city",
    "pos": "n.phr.",
    "cn_def": "海綿城市",
    "en_def": "a city designed to soak up and store rainwater like a sponge",
    "sentence": "Wuhan is trying to become a {{BLANK}}, so it has built wetlands and green roofs that hold water during storms.",
    "cn": "武漢正努力成為一座海綿城市，所以它建造了濕地和綠屋頂，在暴雨時把水留住。"
  },
  {
    "word": "urban farming",
    "pos": "n.phr.",
    "cn_def": "都市農業；都市農耕",
    "en_def": "growing food and raising animals in a city",
    "sentence": "{{BLANK}} is becoming popular in Taipei, because people want fresh vegetables and enjoy working with their neighbours.",
    "cn": "都市農業在台北越來越受歡迎，因為人們想要新鮮的蔬菜，也喜歡和鄰居一起勞動。"
  },
  {
    "word": "community garden",
    "pos": "n.phr.",
    "cn_def": "社區花園",
    "en_def": "a shared piece of land where local people grow plants together",
    "sentence": "Retired residents look after the {{BLANK}} every morning, and they share the tomatoes and beans with the whole street.",
    "cn": "退休的居民每天早上照顧社區花園，而他們把番茄和豆子分享給整條街的人。"
  },
  {
    "word": "street trees",
    "pos": "n.phr.",
    "cn_def": "行道樹",
    "en_def": "trees planted along the sides of roads",
    "sentence": "The {{BLANK}} on this road give shade in summer, so people prefer to walk here even though it takes longer.",
    "cn": "這條路上的行道樹在夏天提供遮蔭，所以人們寧願走這裡，即使要花更多時間。"
  },
  {
    "word": "pocket park",
    "pos": "n.phr.",
    "cn_def": "口袋公園",
    "en_def": "a very small public park in a gap between buildings",
    "sentence": "The empty lot between two shops became a {{BLANK}}, and now office workers eat their lunch there under the trees.",
    "cn": "兩家商店之間的空地變成了一座口袋公園，而現在上班族在那裡的樹下吃午餐。"
  },
  {
    "word": "biophilic design",
    "pos": "n.phr.",
    "cn_def": "親生物設計",
    "en_def": "designing buildings that bring people closer to nature",
    "sentence": "The hospital used {{BLANK}} with plants, water and wood, and patients said they felt calmer and recovered faster.",
    "cn": "這家醫院採用了有植物、水和木材的親生物設計，而病人們說他們感覺更平靜，康復得也更快。"
  },
  {
    "word": "smart meter",
    "pos": "n.phr.",
    "cn_def": "智慧電表",
    "en_def": "a device that shows how much energy you are using in real time",
    "sentence": "After we installed a {{BLANK}}, we saw how much power the old fridge used, so we finally replaced it.",
    "cn": "我們裝了智慧電表之後，看到舊冰箱有多耗電，所以我們終於把它換掉了。"
  },
  {
    "word": "energy rating",
    "pos": "n.phr.",
    "cn_def": "能源效率等級",
    "en_def": "a label that shows how efficiently something uses energy",
    "sentence": "Before buying an air conditioner, check its {{BLANK}}, because a better model can save you a lot of money over the years.",
    "cn": "在買冷氣之前，先看看它的能源效率等級，因為比較好的機型多年下來可以幫你省下很多錢。"
  },
  {
    "word": "zero-waste",
    "pos": "adj.",
    "cn_def": "零廢棄的",
    "en_def": "producing no rubbish that goes to landfill",
    "sentence": "The {{BLANK}} shop sells rice and soap without plastic packaging, so customers bring their own jars and bags.",
    "cn": "那家零廢棄商店販售沒有塑膠包裝的米和肥皂，所以顧客會自己帶罐子和袋子。"
  },
  {
    "word": "upcycle",
    "pos": "v.",
    "cn_def": "升級再造",
    "en_def": "to turn old things into something new and more useful",
    "sentence": "The students {{BLANK}} old wooden pallets into benches for the school garden, and they won a prize for their design.",
    "cn": "學生們把舊木棧板升級再造成學校花園的長椅，而他們的設計還得了獎。"
  },
  {
    "word": "reclaimed wood",
    "pos": "n.phr.",
    "cn_def": "回收木材",
    "en_def": "old wood taken from buildings and used again",
    "sentence": "The café's tables are made from {{BLANK}} from an old train station, so each one has a unique colour and history.",
    "cn": "這家咖啡店的桌子是用舊火車站的回收木材做的，所以每一張都有獨特的顏色和歷史。"
  },
  {
    "word": "LED lighting",
    "pos": "n.phr.",
    "cn_def": "LED照明",
    "en_def": "lights that use small electronic bulbs and very little power",
    "sentence": "The city changed all its street lamps to {{BLANK}}, and it now saves millions of dollars on electricity every year.",
    "cn": "市政府把所有路燈都換成LED照明，而現在每年節省數百萬元的電費。"
  },
  {
    "word": "district heating",
    "pos": "n.phr.",
    "cn_def": "區域供熱",
    "en_def": "a system that sends hot water from one plant to heat many buildings",
    "sentence": "In Copenhagen, most homes use {{BLANK}}, and the heat often comes from burning rubbish that cannot be recycled.",
    "cn": "在哥本哈根，大多數住家使用區域供熱，而熱能常常來自焚燒無法回收的垃圾。"
  },
  {
    "word": "urban forest",
    "pos": "n.phr.",
    "cn_def": "都市森林",
    "en_def": "all the trees growing in a city",
    "sentence": "Planting more trees will grow the city's {{BLANK}}, which provides shade and helps birds and insects survive.",
    "cn": "種植更多的樹會擴大城市的都市森林，它能提供遮蔭並幫助鳥類和昆蟲生存。"
  },
  {
    "word": "cool roof",
    "pos": "n.phr.",
    "cn_def": "涼屋頂；反射隔熱屋頂",
    "en_def": "a roof painted a light colour to reflect sunlight",
    "sentence": "The factory turned its dark roof into a white {{BLANK}}, and the temperature inside dropped by several degrees during the hot summer.",
    "cn": "那間工廠把深色屋頂改成白色的涼屋頂，而炎熱的夏天裡室內溫度降了好幾度。"
  },
  {
    "word": "overhang",
    "pos": "n.",
    "cn_def": "屋簷；突出部分",
    "en_def": "a part of a roof that sticks out beyond the walls",
    "sentence": "The wide roof {{BLANK}} keeps the summer sun off the windows, but it lets in the low winter sun, so the house stays comfortable.",
    "cn": "寬大的屋頂屋簷擋住了夏天照在窗上的陽光，但讓冬天低角度的陽光照進來，所以房子保持舒適。"
  },
  {
    "word": "light pollution",
    "pos": "n.phr.",
    "cn_def": "光害",
    "en_def": "too much artificial light at night that hides the stars",
    "sentence": "Because of {{BLANK}}, children in the city rarely see the Milky Way, so their teacher took them to the mountains.",
    "cn": "因為光害，城市裡的孩子很少看到銀河，所以他們的老師帶他們到山上去。"
  },
  {
    "word": "noise barrier",
    "pos": "n.phr.",
    "cn_def": "隔音牆",
    "en_def": "a high wall beside a road that blocks traffic noise",
    "sentence": "The government built a {{BLANK}} along the motorway, so people in nearby homes can finally open their windows.",
    "cn": "政府沿著高速公路建了一道隔音牆，所以附近住家的人終於可以打開窗戶了。"
  },
  {
    "word": "air quality",
    "pos": "n.phr.",
    "cn_def": "空氣品質",
    "en_def": "how clean or polluted the air is",
    "sentence": "The {{BLANK}} is poor today, so the school has cancelled outdoor sports and students will play indoors.",
    "cn": "今天的空氣品質很差，所以學校取消了戶外運動，學生們會在室內活動。"
  }
];

const MCQS = [
  {
    "q": "The new library is a _____ with solar power and rain collection, so its electricity bills are very low.",
    "options": [
      "embodied carbon",
      "green building",
      "tower block",
      "studio flat"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "A _____ keeps a steady temperature all year, so the family hardly ever turns on the heater or the air conditioner.",
    "options": [
      "parking meter",
      "building site",
      "passive house",
      "convenience store"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The company wants all its offices to be _____ by 2040, so it is putting solar panels on every roof.",
    "options": [
      "load-bearing",
      "prefabricated",
      "unparalleled",
      "net-zero"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "We set the _____ to 26 degrees in summer, and our electricity bill dropped by almost twenty percent.",
    "options": [
      "thermostat",
      "roundabout",
      "architecture",
      "mayor"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The school covered its sports hall with _____ panels, and now they produce enough power for all the classroom lights.",
    "options": [
      "derelict",
      "brittle",
      "substandard",
      "photovoltaic"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Our old water heater broke, so we bought a _____, which uses much less electricity to make hot water.",
    "options": [
      "a breath of fresh air",
      "heat pump",
      "zebra crossing",
      "built-up area"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Our flat is next to a busy road, but the _____ keeps out most of the noise, so we can sleep well.",
    "options": [
      "double glazing",
      "rush hour",
      "building code",
      "bus lane"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The classrooms have large windows that let in plenty of _____, so students feel more awake and focused.",
    "options": [
      "tower block",
      "urban renewal",
      "natural light",
      "zebra crossing"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Thick stone walls have high _____, so they absorb heat during the day and release it slowly at night.",
    "options": [
      "thermal mass",
      "traffic light",
      "traffic jam",
      "greenfield site"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel built a huge _____ beside the entrance, and the plants help clean the air and cool the building.",
    "options": [
      "street lighting",
      "green wall",
      "night market",
      "a sense of belonging"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our flat has no yard, so we made a small _____ on the balcony with herbs, lettuce and strawberries.",
    "options": [
      "land use",
      "light rail",
      "vertical garden",
      "studio flat"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The school dug a _____ near the car park, and now the playground no longer floods after heavy storms.",
    "options": [
      "town hall",
      "town planning",
      "street lighting",
      "rain garden"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The new car park has a _____, so rain can soak into the soil instead of running into the drains.",
    "options": [
      "traffic light",
      "quality of life",
      "permeable surface",
      "entrance hall"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The building collects _____ from its showers, and it uses this water to flush the toilets and water the garden.",
    "options": [
      "debacle",
      "greywater",
      "pavement",
      "downtown"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Wuhan is trying to become a _____, so it has built wetlands and green roofs that hold water during storms.",
    "options": [
      "traffic light",
      "night market",
      "embodied carbon",
      "sponge city"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "_____ is becoming popular in Taipei, because people want fresh vegetables and enjoy working with their neighbours.",
    "options": [
      "urban farming",
      "high street",
      "curtain wall",
      "town planning"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Retired residents look after the _____ every morning, and they share the tomatoes and beans with the whole street.",
    "options": [
      "listed building",
      "street art",
      "community garden",
      "urban renewal"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The _____ on this road give shade in summer, so people prefer to walk here even though it takes longer.",
    "options": [
      "street trees",
      "urban planner",
      "partition wall",
      "bus lane"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The empty lot between two shops became a _____, and now office workers eat their lunch there under the trees.",
    "options": [
      "brownfield site",
      "inner city",
      "entrance hall",
      "pocket park"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hospital used _____ with plants, water and wood, and patients said they felt calmer and recovered faster.",
    "options": [
      "city council",
      "biophilic design",
      "housing estate",
      "speed bump"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "After we installed a _____, we saw how much power the old fridge used, so we finally replaced it.",
    "options": [
      "smart meter",
      "light rail",
      "built-up area",
      "city council"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Before buying an air conditioner, check its _____, because a better model can save you a lot of money over the years.",
    "options": [
      "urban planner",
      "tower block",
      "energy rating",
      "light rail"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The _____ shop sells rice and soap without plastic packaging, so customers bring their own jars and bags.",
    "options": [
      "car-free",
      "zero-waste",
      "3D-printed",
      "sluggish"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The students _____ old wooden pallets into benches for the school garden, and they won a prize for their design.",
    "options": [
      "flaunt",
      "renovate",
      "appease",
      "upcycle"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The café's tables are made from _____ from an old train station, so each one has a unique colour and history.",
    "options": [
      "cross-laminated timber",
      "listed building",
      "reclaimed wood",
      "concrete jungle"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The city changed all its street lamps to _____, and it now saves millions of dollars on electricity every year.",
    "options": [
      "steel frame",
      "curtain wall",
      "reinforced concrete",
      "LED lighting"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "In Copenhagen, most homes use _____, and the heat often comes from burning rubbish that cannot be recycled.",
    "options": [
      "district heating",
      "green space",
      "land use",
      "reinforced concrete"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Planting more trees will grow the city's _____, which provides shade and helps birds and insects survive.",
    "options": [
      "urban planner",
      "urban forest",
      "public space",
      "zebra crossing"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The factory turned its dark roof into a white _____, and the temperature inside dropped by several degrees during the hot summer.",
    "options": [
      "cool roof",
      "studio flat",
      "noise complaint",
      "hustle and bustle"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The wide roof _____ keeps the summer sun off the windows, but it lets in the low winter sun, so the house stays comfortable.",
    "options": [
      "atrium",
      "gridlock",
      "overhang",
      "panacea"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Because of _____, children in the city rarely see the Milky Way, so their teacher took them to the mountains.",
    "options": [
      "social housing",
      "partition wall",
      "entrance hall",
      "light pollution"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The government built a _____ along the motorway, so people in nearby homes can finally open their windows.",
    "options": [
      "quality of life",
      "noise barrier",
      "green space",
      "steel frame"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The _____ is poor today, so the school has cancelled outdoor sports and students will play indoors.",
    "options": [
      "air quality",
      "hustle and bustle",
      "social housing",
      "green space"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "green building": {
    "pos": "n.phr.",
    "en_def": "a building designed to save energy and water and harm nature less",
    "cn_def": "綠建築"
  },
  "passive house": {
    "pos": "n.phr.",
    "en_def": "a very well-sealed home that needs almost no heating or cooling",
    "cn_def": "被動式節能屋"
  },
  "net-zero": {
    "pos": "adj.",
    "en_def": "producing as much clean energy as it uses, or no extra carbon",
    "cn_def": "淨零（排放）的"
  },
  "thermostat": {
    "pos": "n.",
    "en_def": "a device that controls the temperature of a room",
    "cn_def": "恆溫器；溫控器"
  },
  "photovoltaic": {
    "pos": "adj.",
    "en_def": "changing sunlight directly into electricity",
    "cn_def": "光電的；太陽光電的"
  },
  "heat pump": {
    "pos": "n.phr.",
    "en_def": "a machine that moves heat from outside air or ground into a building",
    "cn_def": "熱泵"
  },
  "double glazing": {
    "pos": "n.phr.",
    "en_def": "windows with two layers of glass to keep heat and noise out",
    "cn_def": "雙層玻璃窗"
  },
  "natural light": {
    "pos": "n.phr.",
    "en_def": "light from the sun rather than from lamps",
    "cn_def": "自然光"
  },
  "thermal mass": {
    "pos": "n.phr.",
    "en_def": "the ability of heavy materials to store heat and release it slowly",
    "cn_def": "蓄熱體；熱質量"
  },
  "green wall": {
    "pos": "n.phr.",
    "en_def": "a wall covered with living plants",
    "cn_def": "綠牆；植生牆"
  },
  "vertical garden": {
    "pos": "n.phr.",
    "en_def": "plants grown up a wall or on shelves rather than on the ground",
    "cn_def": "垂直花園"
  },
  "rain garden": {
    "pos": "n.phr.",
    "en_def": "a low garden that collects rainwater from roofs and roads",
    "cn_def": "雨水花園"
  },
  "permeable surface": {
    "pos": "n.phr.",
    "en_def": "ground covering that lets water soak through it",
    "cn_def": "透水鋪面"
  },
  "greywater": {
    "pos": "n.",
    "en_def": "used water from sinks and showers that can be used again",
    "cn_def": "中水；灰水（可回收的生活廢水）"
  },
  "sponge city": {
    "pos": "n.phr.",
    "en_def": "a city designed to soak up and store rainwater like a sponge",
    "cn_def": "海綿城市"
  },
  "urban farming": {
    "pos": "n.phr.",
    "en_def": "growing food and raising animals in a city",
    "cn_def": "都市農業；都市農耕"
  },
  "community garden": {
    "pos": "n.phr.",
    "en_def": "a shared piece of land where local people grow plants together",
    "cn_def": "社區花園"
  },
  "street trees": {
    "pos": "n.phr.",
    "en_def": "trees planted along the sides of roads",
    "cn_def": "行道樹"
  },
  "pocket park": {
    "pos": "n.phr.",
    "en_def": "a very small public park in a gap between buildings",
    "cn_def": "口袋公園"
  },
  "biophilic design": {
    "pos": "n.phr.",
    "en_def": "designing buildings that bring people closer to nature",
    "cn_def": "親生物設計"
  },
  "smart meter": {
    "pos": "n.phr.",
    "en_def": "a device that shows how much energy you are using in real time",
    "cn_def": "智慧電表"
  },
  "energy rating": {
    "pos": "n.phr.",
    "en_def": "a label that shows how efficiently something uses energy",
    "cn_def": "能源效率等級"
  },
  "zero-waste": {
    "pos": "adj.",
    "en_def": "producing no rubbish that goes to landfill",
    "cn_def": "零廢棄的"
  },
  "upcycle": {
    "pos": "v.",
    "en_def": "to turn old things into something new and more useful",
    "cn_def": "升級再造"
  },
  "reclaimed wood": {
    "pos": "n.phr.",
    "en_def": "old wood taken from buildings and used again",
    "cn_def": "回收木材"
  },
  "led lighting": {
    "pos": "n.phr.",
    "en_def": "lights that use small electronic bulbs and very little power",
    "cn_def": "LED照明"
  },
  "district heating": {
    "pos": "n.phr.",
    "en_def": "a system that sends hot water from one plant to heat many buildings",
    "cn_def": "區域供熱"
  },
  "urban forest": {
    "pos": "n.phr.",
    "en_def": "all the trees growing in a city",
    "cn_def": "都市森林"
  },
  "cool roof": {
    "pos": "n.phr.",
    "en_def": "a roof painted a light colour to reflect sunlight",
    "cn_def": "涼屋頂；反射隔熱屋頂"
  },
  "overhang": {
    "pos": "n.",
    "en_def": "a part of a roof that sticks out beyond the walls",
    "cn_def": "屋簷；突出部分"
  },
  "light pollution": {
    "pos": "n.phr.",
    "en_def": "too much artificial light at night that hides the stars",
    "cn_def": "光害"
  },
  "noise barrier": {
    "pos": "n.phr.",
    "en_def": "a high wall beside a road that blocks traffic noise",
    "cn_def": "隔音牆"
  },
  "air quality": {
    "pos": "n.phr.",
    "en_def": "how clean or polluted the air is",
    "cn_def": "空氣品質"
  },
  "embodied carbon": {
    "pos": "n.phr.",
    "en_def": "the carbon released when making and transporting building materials",
    "cn_def": "隱含碳（建材的碳排放）"
  },
  "tower block": {
    "pos": "n.phr.",
    "en_def": "a tall building with many flats or offices",
    "cn_def": "高層公寓大樓"
  },
  "studio flat": {
    "pos": "n.phr.",
    "en_def": "a small flat with one main room for living and sleeping",
    "cn_def": "套房；單間公寓"
  },
  "parking meter": {
    "pos": "n.phr.",
    "en_def": "a machine on a street that you pay to park a car",
    "cn_def": "停車計時器；停車收費器"
  },
  "building site": {
    "pos": "n.phr.",
    "en_def": "a place where a building is being built",
    "cn_def": "建築工地"
  },
  "convenience store": {
    "pos": "n.phr.",
    "en_def": "a small shop that is open long hours and sells everyday items",
    "cn_def": "便利商店"
  },
  "load-bearing": {
    "pos": "adj.",
    "en_def": "supporting the weight of the building above it",
    "cn_def": "承重的"
  },
  "prefabricated": {
    "pos": "adj.",
    "en_def": "made in parts in a factory and put together on site",
    "cn_def": "預製的；組合式的"
  },
  "unparalleled": {
    "pos": "adj.",
    "en_def": "better or greater than anything else",
    "cn_def": "無與倫比的"
  },
  "roundabout": {
    "pos": "n.",
    "en_def": "a circular place where roads meet and cars drive around",
    "cn_def": "圓環"
  },
  "architecture": {
    "pos": "n.",
    "en_def": "the style and design of buildings",
    "cn_def": "建築；建築風格"
  },
  "mayor": {
    "pos": "n.",
    "en_def": "the elected leader of a city or town",
    "cn_def": "市長"
  },
  "derelict": {
    "pos": "adj.",
    "en_def": "empty and falling apart because nobody uses it",
    "cn_def": "廢棄的；荒廢的"
  },
  "brittle": {
    "pos": "adj.",
    "en_def": "hard but easily broken",
    "cn_def": "易碎的；脆的"
  },
  "substandard": {
    "pos": "adj.",
    "en_def": "below the normal or acceptable level",
    "cn_def": "不合標準的"
  },
  "a breath of fresh air": {
    "pos": "n.phr.",
    "en_def": "something new and different that is very welcome",
    "cn_def": "令人耳目一新的人或事物"
  },
  "zebra crossing": {
    "pos": "n.phr.",
    "en_def": "black and white stripes on a road where people can cross",
    "cn_def": "斑馬線"
  },
  "built-up area": {
    "pos": "n.phr.",
    "en_def": "a place with many buildings and few open spaces",
    "cn_def": "建成區；房屋密集區"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busy time when most people travel to or from work",
    "cn_def": "尖峰時段"
  },
  "building code": {
    "pos": "n.phr.",
    "en_def": "the official rules about how buildings must be built",
    "cn_def": "建築法規"
  },
  "bus lane": {
    "pos": "n.phr.",
    "en_def": "a part of the road that only buses can use",
    "cn_def": "公車專用道"
  },
  "urban renewal": {
    "pos": "n.phr.",
    "en_def": "improving old parts of a city by repairing or rebuilding them",
    "cn_def": "都市更新"
  },
  "traffic light": {
    "pos": "n.phr.",
    "en_def": "a set of red, yellow and green lights that control traffic",
    "cn_def": "紅綠燈"
  },
  "traffic jam": {
    "pos": "n.phr.",
    "en_def": "a long line of vehicles that cannot move or move slowly",
    "cn_def": "塞車；交通堵塞"
  },
  "greenfield site": {
    "pos": "n.phr.",
    "en_def": "land that has never been built on before",
    "cn_def": "綠地（未開發用地）"
  },
  "street lighting": {
    "pos": "n.phr.",
    "en_def": "the lamps that light up roads at night",
    "cn_def": "路燈照明"
  },
  "night market": {
    "pos": "n.phr.",
    "en_def": "an outdoor market that opens in the evening, selling food and goods",
    "cn_def": "夜市"
  },
  "a sense of belonging": {
    "pos": "n.phr.",
    "en_def": "the feeling of being accepted as part of a group or place",
    "cn_def": "歸屬感"
  },
  "land use": {
    "pos": "n.phr.",
    "en_def": "the way an area of land is used, such as for homes or farms",
    "cn_def": "土地利用"
  },
  "light rail": {
    "pos": "n.phr.",
    "en_def": "a modern electric train system that runs mainly on city streets",
    "cn_def": "輕軌"
  },
  "town hall": {
    "pos": "n.phr.",
    "en_def": "the building where a town's local government works",
    "cn_def": "市政廳；鎮公所"
  },
  "town planning": {
    "pos": "n.phr.",
    "en_def": "the work of deciding how land in a town is used",
    "cn_def": "城鎮規劃"
  },
  "quality of life": {
    "pos": "n.phr.",
    "en_def": "how good and comfortable a person's life is",
    "cn_def": "生活品質"
  },
  "entrance hall": {
    "pos": "n.phr.",
    "en_def": "the first room or space you enter in a building",
    "cn_def": "門廳；入口大廳"
  },
  "debacle": {
    "pos": "n.",
    "en_def": "a complete and embarrassing failure",
    "cn_def": "徹底的失敗；大挫敗"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "downtown": {
    "pos": "n.",
    "en_def": "the main business area in the centre of a city",
    "cn_def": "市中心；商業區"
  },
  "high street": {
    "pos": "n.phr.",
    "en_def": "the main shopping street in a town",
    "cn_def": "主要商店街；大街"
  },
  "curtain wall": {
    "pos": "n.phr.",
    "en_def": "an outer wall of glass that does not hold up the building",
    "cn_def": "帷幕牆"
  },
  "listed building": {
    "pos": "n.phr.",
    "en_def": "an old building that is protected by law",
    "cn_def": "受保護的歷史建築"
  },
  "street art": {
    "pos": "n.phr.",
    "en_def": "paintings and pictures made on walls in public places",
    "cn_def": "街頭藝術"
  },
  "urban planner": {
    "pos": "n.",
    "en_def": "a person who designs how a city grows and is used",
    "cn_def": "都市規劃師"
  },
  "partition wall": {
    "pos": "n.phr.",
    "en_def": "a thin wall that divides a room into smaller spaces",
    "cn_def": "隔間牆"
  },
  "brownfield site": {
    "pos": "n.phr.",
    "en_def": "land that was used for industry and can be built on again",
    "cn_def": "棕地（舊工業用地）"
  },
  "inner city": {
    "pos": "n.phr.",
    "en_def": "the older, central part of a city, often with social problems",
    "cn_def": "舊市區；內城區"
  },
  "city council": {
    "pos": "n.phr.",
    "en_def": "the group of elected people who run a city",
    "cn_def": "市議會"
  },
  "housing estate": {
    "pos": "n.phr.",
    "en_def": "a large group of houses or flats built at the same time",
    "cn_def": "住宅區；社區"
  },
  "speed bump": {
    "pos": "n.phr.",
    "en_def": "a raised part across a road that makes cars slow down",
    "cn_def": "減速丘"
  },
  "car-free": {
    "pos": "adj.",
    "en_def": "where cars are not allowed",
    "cn_def": "無車的；禁止汽車的"
  },
  "3d-printed": {
    "pos": "adj.",
    "en_def": "made layer by layer by a machine that prints materials",
    "cn_def": "3D列印的"
  },
  "sluggish": {
    "pos": "adj.",
    "en_def": "moving or working more slowly than usual",
    "cn_def": "緩慢的；不景氣的"
  },
  "flaunt": {
    "pos": "v.",
    "en_def": "to show something off proudly to get attention",
    "cn_def": "炫耀；誇示"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building",
    "cn_def": "翻修；整修"
  },
  "appease": {
    "pos": "v.",
    "en_def": "to make someone calmer by giving them what they want",
    "cn_def": "安撫；平息（怒氣）"
  },
  "cross-laminated timber": {
    "pos": "n.phr.",
    "en_def": "strong panels made by gluing layers of wood crosswise",
    "cn_def": "交錯層壓木材（CLT）"
  },
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city with many big grey buildings and few green areas",
    "cn_def": "水泥叢林"
  },
  "steel frame": {
    "pos": "n.phr.",
    "en_def": "a skeleton of steel beams that holds up a building",
    "cn_def": "鋼構骨架"
  },
  "reinforced concrete": {
    "pos": "n.phr.",
    "en_def": "concrete made stronger with steel bars inside it",
    "cn_def": "鋼筋混凝土"
  },
  "green space": {
    "pos": "n.phr.",
    "en_def": "an area of grass, trees or plants in a town",
    "cn_def": "綠地；綠色空間"
  },
  "public space": {
    "pos": "n.phr.",
    "en_def": "an area such as a park or square that everyone can use",
    "cn_def": "公共空間"
  },
  "noise complaint": {
    "pos": "n.phr.",
    "en_def": "a report to the police or building managers about loud noise",
    "cn_def": "噪音投訴"
  },
  "hustle and bustle": {
    "pos": "n.phr.",
    "en_def": "the noise and busy activity of a crowded place",
    "cn_def": "熙來攘往；喧囂忙碌"
  },
  "atrium": {
    "pos": "n.",
    "en_def": "a large open space inside a building, often with a glass roof",
    "cn_def": "中庭；天井大廳"
  },
  "gridlock": {
    "pos": "n.",
    "en_def": "a situation where traffic cannot move at all",
    "cn_def": "交通癱瘓；完全堵塞"
  },
  "panacea": {
    "pos": "n.",
    "en_def": "something believed to solve all problems",
    "cn_def": "萬靈丹"
  },
  "social housing": {
    "pos": "n.phr.",
    "en_def": "homes provided by the government at a low rent",
    "cn_def": "社會住宅"
  }
};

const EXTRA_GLOSSES = {};
