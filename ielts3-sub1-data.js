// Topic 3 Subunit 1 Quiz Data: Climate Science & the Atmosphere 氣候科學與大氣
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S01 - Climate Science & the Atmosphere 氣候科學與大氣",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather of a place over many years",
    "sentence": "Taiwan has a warm and wet {{BLANK}}, so many visitors from Europe find the summer months hard to handle at first.",
    "cn": "台灣擁有溫暖潮濕的氣候,所以許多來自歐洲的遊客一開始會覺得夏季幾個月很難適應。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "大氣層",
    "en_def": "the layer of gases around the Earth",
    "sentence": "Scientists explained that the {{BLANK}} works like a warm blanket around the Earth, but too much carbon makes the blanket thicker.",
    "cn": "科學家解釋說,大氣層就像包覆地球的一條溫暖毯子,但太多的碳會讓這條毯子變得更厚。"
  },
  {
    "word": "atmospheric",
    "pos": "adj.",
    "cn_def": "大氣的",
    "en_def": "connected with the air around the Earth",
    "sentence": "The research team measures {{BLANK}} pressure every hour, because sudden changes often tell them that a storm is coming.",
    "cn": "研究團隊每小時測量一次大氣壓力,因為突然的變化常常告訴他們暴風雨即將來臨。"
  },
  {
    "word": "temperature",
    "pos": "n.",
    "cn_def": "溫度;氣溫",
    "en_def": "how hot or cold something is",
    "sentence": "The average {{BLANK}} in Taipei has risen over the past fifty years, and many older residents say summers feel much longer now.",
    "cn": "台北的平均氣溫在過去五十年間上升了,許多年長居民說現在的夏天感覺長了許多。"
  },
  {
    "word": "humidity",
    "pos": "n.",
    "cn_def": "濕度",
    "en_def": "the amount of water in the air",
    "sentence": "The {{BLANK}} was over ninety percent this afternoon, so my clothes would not dry and the whole apartment felt sticky.",
    "cn": "今天下午的濕度超過百分之九十,所以我的衣服乾不了,整間公寓都感覺黏黏的。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕悶熱的",
    "en_def": "hot and wet in an uncomfortable way",
    "sentence": "July in southern Taiwan is extremely hot and {{BLANK}}, so we always carry a towel and plenty of water when we go out.",
    "cn": "南台灣的七月非常炎熱又潮濕悶熱,所以我們出門時總是帶著毛巾和充足的水。"
  },
  {
    "word": "precipitation",
    "pos": "n.",
    "cn_def": "降水(量)",
    "en_def": "rain, snow or hail that falls from the sky",
    "sentence": "Climate models show that {{BLANK}} will become less regular, so some months may be very dry while others bring heavy rain.",
    "cn": "氣候模型顯示降水將變得較不規律,因此有些月份可能非常乾燥,而另一些月份則會帶來大雨。"
  },
  {
    "word": "rainfall",
    "pos": "n.",
    "cn_def": "降雨量",
    "en_def": "the amount of rain that falls in a place",
    "sentence": "Farmers in the area depend on spring {{BLANK}} for their rice fields, but last year the rain arrived almost a month late.",
    "cn": "這地區的農夫依賴春季降雨量來灌溉稻田,但去年雨水幾乎晚了一個月才來。"
  },
  {
    "word": "evaporate",
    "pos": "v.",
    "cn_def": "蒸發",
    "en_def": "to change from liquid into gas",
    "sentence": "During the heatwave, the water in the small pond began to {{BLANK}} quickly, and the frogs had to look for a new home.",
    "cn": "熱浪期間,小池塘裡的水開始迅速蒸發,青蛙們只好去找新的家。"
  },
  {
    "word": "evaporation",
    "pos": "n.",
    "cn_def": "蒸發(作用)",
    "en_def": "the process of water turning into gas",
    "sentence": "Higher temperatures increase {{BLANK}} from lakes and soil, so reservoirs can lose water even when nobody is using it.",
    "cn": "較高的氣溫會增加湖泊和土壤的蒸發,因此即使沒有人使用,水庫也可能流失水量。"
  },
  {
    "word": "condensation",
    "pos": "n.",
    "cn_def": "凝結(水珠)",
    "en_def": "water drops that form when warm air touches something cold",
    "sentence": "There was a lot of {{BLANK}} on the bathroom window this morning, because the hot shower filled the cold room with steam.",
    "cn": "今天早上浴室窗戶上有很多凝結的水珠,因為熱水澡讓冰冷的房間充滿了蒸氣。"
  },
  {
    "word": "moisture",
    "pos": "n.",
    "cn_def": "濕氣;水分",
    "en_def": "a small amount of water in the air or in something",
    "sentence": "Warm air can hold more {{BLANK}} than cold air, which is one reason why storms are becoming heavier in a warmer world.",
    "cn": "暖空氣能比冷空氣容納更多水氣,這就是在更暖的世界裡暴風雨變得更猛烈的原因之一。"
  },
  {
    "word": "ozone",
    "pos": "n.",
    "cn_def": "臭氧",
    "en_def": "a gas high in the sky that blocks harmful sunlight",
    "sentence": "The layer of {{BLANK}} high above us protects our skin from strong sunlight, and countries worked together to repair the hole in it.",
    "cn": "我們頭頂高空中的臭氧層保護我們的皮膚免受強烈陽光傷害,各國也曾合作修補它的破洞。"
  },
  {
    "word": "ultraviolet",
    "pos": "adj.",
    "cn_def": "紫外線的",
    "en_def": "describing invisible light from the sun that can burn skin",
    "sentence": "The weather app warned that {{BLANK}} levels would be very high at noon, so the coach moved our practice to the evening.",
    "cn": "天氣應用程式警告中午的紫外線指數會非常高,所以教練把我們的練習改到傍晚。"
  },
  {
    "word": "radiation",
    "pos": "n.",
    "cn_def": "輻射",
    "en_def": "energy that travels as heat or light",
    "sentence": "The Earth receives {{BLANK}} from the sun every day, and some of this energy should escape back into space at night.",
    "cn": "地球每天接收來自太陽的輻射,而其中一部分能量應該在夜間散逸回太空。"
  },
  {
    "word": "solar",
    "pos": "adj.",
    "cn_def": "太陽的",
    "en_def": "connected with the sun",
    "sentence": "Our school installed {{BLANK}} lights along the path to the gym, and they charge during the day and shine all night.",
    "cn": "我們學校在通往體育館的小路旁裝了太陽能燈,它們白天充電,整晚都會發光。"
  },
  {
    "word": "meteorologist",
    "pos": "n.",
    "cn_def": "氣象學家;氣象預報員",
    "en_def": "a scientist who studies and reports the weather",
    "sentence": "The TV {{BLANK}} said the typhoon would turn north, but many people still bought extra food and water just in case.",
    "cn": "電視上的氣象預報員說颱風會轉向北方,但許多人還是買了額外的食物和水以防萬一。"
  },
  {
    "word": "climatologist",
    "pos": "n.",
    "cn_def": "氣候學家",
    "en_def": "a scientist who studies climate over long periods",
    "sentence": "A {{BLANK}} visited our class and showed us old temperature records, so we could see how much the island has warmed.",
    "cn": "一位氣候學家來到我們班上,給我們看舊的氣溫紀錄,讓我們看見這座島已經變暖了多少。"
  },
  {
    "word": "thermometer",
    "pos": "n.",
    "cn_def": "溫度計",
    "en_def": "a tool that measures temperature",
    "sentence": "The {{BLANK}} outside our classroom showed thirty-six degrees, so the principal let everyone stay inside during the break.",
    "cn": "我們教室外的溫度計顯示三十六度,所以校長讓大家下課時都待在室內。"
  },
  {
    "word": "Celsius",
    "pos": "n.",
    "cn_def": "攝氏",
    "en_def": "a scale for measuring temperature where water freezes at 0",
    "sentence": "World leaders hope to keep warming below 1.5 degrees {{BLANK}}, but many experts believe this goal is becoming very difficult.",
    "cn": "世界領袖希望把暖化控制在攝氏1.5度以下,但許多專家認為這個目標正變得非常困難。"
  },
  {
    "word": "anomaly",
    "pos": "n.",
    "cn_def": "異常(現象)",
    "en_def": "something that is different from what is normal",
    "sentence": "A warm winter used to be an {{BLANK}} in this region, but now it happens almost every year and nobody is surprised.",
    "cn": "暖冬過去在這個地區是一種異常現象,但現在幾乎每年都會發生,也沒有人感到驚訝了。"
  },
  {
    "word": "seasonal",
    "pos": "adj.",
    "cn_def": "季節性的",
    "en_def": "happening at a particular time of the year",
    "sentence": "Many farmers hire {{BLANK}} workers in the summer, but the harvest now starts earlier because the spring is warmer.",
    "cn": "許多農夫在夏天雇用季節性工人,但因為春天變得較暖,收成現在提早開始了。"
  },
  {
    "word": "monsoon",
    "pos": "n.",
    "cn_def": "季風(雨季)",
    "en_def": "the season of heavy rain in South and Southeast Asia",
    "sentence": "The {{BLANK}} brings most of the year's rain to India, so a weak season can hurt millions of farmers and their families.",
    "cn": "季風為印度帶來一年中大部分的雨量,所以雨季偏弱時可能會傷害數百萬農民和他們的家庭。"
  },
  {
    "word": "tropical",
    "pos": "adj.",
    "cn_def": "熱帶的",
    "en_def": "from the hot area near the equator",
    "sentence": "{{BLANK}} diseases such as dengue fever are spreading north, because mosquitoes can now survive in places that were once too cool.",
    "cn": "像登革熱這樣的熱帶疾病正向北擴散,因為蚊子現在能在曾經太涼爽的地方存活。"
  },
  {
    "word": "arid",
    "pos": "adj.",
    "cn_def": "乾旱的;乾燥的",
    "en_def": "very dry with little rain",
    "sentence": "The farm is in an {{BLANK}} part of the country, so the family collects every drop of rain and grows plants that need little water.",
    "cn": "這座農場位於國內乾旱的地區,所以這家人收集每一滴雨水,並種植需水量少的植物。"
  },
  {
    "word": "temperate",
    "pos": "adj.",
    "cn_def": "溫和的;溫帶的",
    "en_def": "not very hot and not very cold",
    "sentence": "Britain has a {{BLANK}} climate, but recent summers have been so hot that train tracks bent and some roads began to melt.",
    "cn": "英國屬於溫帶氣候,但最近幾個夏天熱到鐵軌彎曲,有些道路也開始融化。"
  },
  {
    "word": "polar",
    "pos": "adj.",
    "cn_def": "極地的",
    "en_def": "near the North or South Pole",
    "sentence": "{{BLANK}} regions are warming faster than the rest of the planet, and this change affects weather patterns far away.",
    "cn": "極地地區暖化的速度比地球其他地方更快,而這種變化會影響遠方的天氣型態。"
  },
  {
    "word": "latitude",
    "pos": "n.",
    "cn_def": "緯度",
    "en_def": "the distance of a place north or south of the equator",
    "sentence": "Some plants are moving to higher {{BLANK}} as the climate warms, but slow-growing trees often cannot move fast enough.",
    "cn": "隨著氣候變暖,有些植物正往較高緯度遷移,但生長緩慢的樹木往往移動得不夠快。"
  },
  {
    "word": "altitude",
    "pos": "n.",
    "cn_def": "海拔;高度",
    "en_def": "the height of a place above sea level",
    "sentence": "Tea farmers in Taiwan are planting at higher {{BLANK}} now, because the lower hills have become too warm for good leaves.",
    "cn": "台灣的茶農現在都種在更高的海拔,因為較低的山丘已經變得太熱,長不出好的茶葉。"
  },
  {
    "word": "jet stream",
    "pos": "n.phr.",
    "cn_def": "噴射氣流",
    "en_def": "a strong, fast wind high in the sky",
    "sentence": "When the {{BLANK}} gets weak and wavy, hot or cold weather can stay in one place for many days.",
    "cn": "當噴射氣流變弱並呈波浪狀時,炎熱或寒冷的天氣可能會在同一個地方停留許多天。"
  }
];

const MCQS = [
  {
    "q": "Taiwan has a warm and wet _____, so many visitors from Europe find the summer months hard to handle at first.",
    "options": [
      "heatstroke",
      "permafrost",
      "adaptation",
      "climate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Scientists explained that the _____ works like a warm blanket around the Earth, but too much carbon makes the blanket thicker.",
    "options": [
      "atmosphere",
      "ideology",
      "delta",
      "thunderstorm"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The research team measures _____ pressure every hour, because sudden changes often tell them that a storm is coming.",
    "options": [
      "impartial",
      "atmospheric",
      "constant",
      "binding"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The average _____ in Taipei has risen over the past fifty years, and many older residents say summers feel much longer now.",
    "options": [
      "parameter",
      "combustion",
      "temperature",
      "stilts"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The _____ was over ninety percent this afternoon, so my clothes would not dry and the whole apartment felt sticky.",
    "options": [
      "levy",
      "humidity",
      "poverty",
      "absorption"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "July in southern Taiwan is extremely hot and _____, so we always carry a towel and plenty of water when we go out.",
    "options": [
      "humid",
      "tentative",
      "negligible",
      "binding"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Climate models show that _____ will become less regular, so some months may be very dry while others bring heavy rain.",
    "options": [
      "property",
      "rainwater",
      "precipitation",
      "acidification"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Farmers in the area depend on spring _____ for their rice fields, but last year the rain arrived almost a month late.",
    "options": [
      "heatwave",
      "magnitude",
      "casualty",
      "rainfall"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "During the heatwave, the water in the small pond began to _____ quickly, and the frogs had to look for a new home.",
    "options": [
      "evacuate",
      "stockpile",
      "evaporate",
      "calculate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Higher temperatures increase _____ from lakes and soil, so reservoirs can lose water even when nobody is using it.",
    "options": [
      "evaporation",
      "successor",
      "trajectory",
      "expenditure"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "There was a lot of _____ on the bathroom window this morning, because the hot shower filled the cold room with steam.",
    "options": [
      "landslide",
      "clarity",
      "battery",
      "condensation"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Warm air can hold more _____ than cold air, which is one reason why storms are becoming heavier in a warmer world.",
    "options": [
      "accord",
      "moisture",
      "hardship",
      "delta"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The layer of _____ high above us protects our skin from strong sunlight, and countries worked together to repair the hole in it.",
    "options": [
      "ozone",
      "contrast",
      "rationale",
      "premium"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The weather app warned that _____ levels would be very high at noon, so the coach moved our practice to the evening.",
    "options": [
      "nuclear",
      "intermittent",
      "interim",
      "ultraviolet"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The Earth receives _____ from the sun every day, and some of this energy should escape back into space at night.",
    "options": [
      "scale",
      "radiation",
      "nuance",
      "activist"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our school installed _____ lights along the path to the gym, and they charge during the day and shine all night.",
    "options": [
      "viable",
      "robust",
      "solar",
      "exponential"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The TV _____ said the typhoon would turn north, but many people still bought extra food and water just in case.",
    "options": [
      "extent",
      "meteorologist",
      "severity",
      "grid"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "A _____ visited our class and showed us old temperature records, so we could see how much the island has warmed.",
    "options": [
      "absorption",
      "frequency",
      "activist",
      "climatologist"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ outside our classroom showed thirty-six degrees, so the principal let everyone stay inside during the break.",
    "options": [
      "thermometer",
      "hailstorm",
      "severity",
      "salinity"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "World leaders hope to keep warming below 1.5 degrees _____, but many experts believe this goal is becoming very difficult.",
    "options": [
      "hydropower",
      "desertification",
      "Celsius",
      "reforestation"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "A warm winter used to be an _____ in this region, but now it happens almost every year and nobody is surprised.",
    "options": [
      "anomaly",
      "salinity",
      "baseline",
      "scale"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Many farmers hire _____ workers in the summer, but the harvest now starts earlier because the spring is warmer.",
    "options": [
      "conclusive",
      "seasonal",
      "robust",
      "unanimous"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The _____ brings most of the year's rain to India, so a weak season can hurt millions of farmers and their families.",
    "options": [
      "thesis",
      "ideology",
      "fumes",
      "monsoon"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "_____ diseases such as dengue fever are spreading north, because mosquitoes can now survive in places that were once too cool.",
    "options": [
      "tidal",
      "parched",
      "tropical",
      "orthodox"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The farm is in an _____ part of the country, so the family collects every drop of rain and grows plants that need little water.",
    "options": [
      "meticulous",
      "marginal",
      "salient",
      "arid"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Britain has a _____ climate, but recent summers have been so hot that train tracks bent and some roads began to melt.",
    "options": [
      "geothermal",
      "unprecedented",
      "temperate",
      "prominent"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "_____ regions are warming faster than the rest of the planet, and this change affects weather patterns far away.",
    "options": [
      "comprehensive",
      "polar",
      "forthcoming",
      "acidic"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Some plants are moving to higher _____ as the climate warms, but slow-growing trees often cannot move fast enough.",
    "options": [
      "latitude",
      "current",
      "premium",
      "burden"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Tea farmers in Taiwan are planting at higher _____ now, because the lower hills have become too warm for good leaves.",
    "options": [
      "activist",
      "altitude",
      "zoning",
      "soot"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "When the _____ gets weak and wavy, hot or cold weather can stay in one place for many days.",
    "options": [
      "jet stream",
      "a race against time",
      "the tip of the iceberg",
      "thermal expansion"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather of a place over many years",
    "cn_def": "氣候"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the layer of gases around the Earth",
    "cn_def": "大氣層"
  },
  "atmospheric": {
    "pos": "adj.",
    "en_def": "connected with the air around the Earth",
    "cn_def": "大氣的"
  },
  "temperature": {
    "pos": "n.",
    "en_def": "how hot or cold something is",
    "cn_def": "溫度;氣溫"
  },
  "humidity": {
    "pos": "n.",
    "en_def": "the amount of water in the air",
    "cn_def": "濕度"
  },
  "humid": {
    "pos": "adj.",
    "en_def": "hot and wet in an uncomfortable way",
    "cn_def": "潮濕悶熱的"
  },
  "precipitation": {
    "pos": "n.",
    "en_def": "rain, snow or hail that falls from the sky",
    "cn_def": "降水(量)"
  },
  "rainfall": {
    "pos": "n.",
    "en_def": "the amount of rain that falls in a place",
    "cn_def": "降雨量"
  },
  "evaporate": {
    "pos": "v.",
    "en_def": "to change from liquid into gas",
    "cn_def": "蒸發"
  },
  "evaporation": {
    "pos": "n.",
    "en_def": "the process of water turning into gas",
    "cn_def": "蒸發(作用)"
  },
  "condensation": {
    "pos": "n.",
    "en_def": "water drops that form when warm air touches something cold",
    "cn_def": "凝結(水珠)"
  },
  "moisture": {
    "pos": "n.",
    "en_def": "a small amount of water in the air or in something",
    "cn_def": "濕氣;水分"
  },
  "ozone": {
    "pos": "n.",
    "en_def": "a gas high in the sky that blocks harmful sunlight",
    "cn_def": "臭氧"
  },
  "ultraviolet": {
    "pos": "adj.",
    "en_def": "describing invisible light from the sun that can burn skin",
    "cn_def": "紫外線的"
  },
  "radiation": {
    "pos": "n.",
    "en_def": "energy that travels as heat or light",
    "cn_def": "輻射"
  },
  "solar": {
    "pos": "adj.",
    "en_def": "connected with the sun",
    "cn_def": "太陽的"
  },
  "meteorologist": {
    "pos": "n.",
    "en_def": "a scientist who studies and reports the weather",
    "cn_def": "氣象學家;氣象預報員"
  },
  "climatologist": {
    "pos": "n.",
    "en_def": "a scientist who studies climate over long periods",
    "cn_def": "氣候學家"
  },
  "thermometer": {
    "pos": "n.",
    "en_def": "a tool that measures temperature",
    "cn_def": "溫度計"
  },
  "celsius": {
    "pos": "n.",
    "en_def": "a scale for measuring temperature where water freezes at 0",
    "cn_def": "攝氏"
  },
  "anomaly": {
    "pos": "n.",
    "en_def": "something that is different from what is normal",
    "cn_def": "異常(現象)"
  },
  "seasonal": {
    "pos": "adj.",
    "en_def": "happening at a particular time of the year",
    "cn_def": "季節性的"
  },
  "monsoon": {
    "pos": "n.",
    "en_def": "the season of heavy rain in South and Southeast Asia",
    "cn_def": "季風(雨季)"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from the hot area near the equator",
    "cn_def": "熱帶的"
  },
  "arid": {
    "pos": "adj.",
    "en_def": "very dry with little rain",
    "cn_def": "乾旱的;乾燥的"
  },
  "temperate": {
    "pos": "adj.",
    "en_def": "not very hot and not very cold",
    "cn_def": "溫和的;溫帶的"
  },
  "polar": {
    "pos": "adj.",
    "en_def": "near the North or South Pole",
    "cn_def": "極地的"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "altitude": {
    "pos": "n.",
    "en_def": "the height of a place above sea level",
    "cn_def": "海拔;高度"
  },
  "jet stream": {
    "pos": "n.phr.",
    "en_def": "a strong, fast wind high in the sky",
    "cn_def": "噴射氣流"
  },
  "heatstroke": {
    "pos": "n.",
    "en_def": "a dangerous illness caused by too much heat",
    "cn_def": "中暑"
  },
  "permafrost": {
    "pos": "n.",
    "en_def": "ground that stays frozen all year",
    "cn_def": "永凍土"
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a change made to deal with new conditions",
    "cn_def": "調適;適應"
  },
  "ideology": {
    "pos": "n.",
    "en_def": "a set of political ideas or beliefs",
    "cn_def": "意識形態"
  },
  "delta": {
    "pos": "n.",
    "en_def": "flat land where a river divides before entering the sea",
    "cn_def": "三角洲"
  },
  "thunderstorm": {
    "pos": "n.",
    "en_def": "a storm with thunder, lightning and heavy rain",
    "cn_def": "雷雨"
  },
  "impartial": {
    "pos": "adj.",
    "en_def": "not supporting one side more than another",
    "cn_def": "公正的;不偏袒的"
  },
  "constant": {
    "pos": "adj.",
    "en_def": "happening all the time",
    "cn_def": "持續不斷的"
  },
  "binding": {
    "pos": "adj.",
    "en_def": "that must be obeyed by law",
    "cn_def": "具有約束力的"
  },
  "parameter": {
    "pos": "n.",
    "en_def": "a limit or rule that controls how something is done",
    "cn_def": "參數;界限"
  },
  "combustion": {
    "pos": "n.",
    "en_def": "the process of burning",
    "cn_def": "燃燒"
  },
  "stilts": {
    "pos": "n.",
    "en_def": "tall posts that hold a building above the ground or water",
    "cn_def": "高腳柱;支柱"
  },
  "levy": {
    "pos": "n.",
    "en_def": "an official charge or tax",
    "cn_def": "徵收的稅;稅款"
  },
  "poverty": {
    "pos": "n.",
    "en_def": "the state of being very poor",
    "cn_def": "貧窮"
  },
  "absorption": {
    "pos": "n.",
    "en_def": "the process of taking something in",
    "cn_def": "吸收(作用)"
  },
  "tentative": {
    "pos": "adj.",
    "en_def": "not certain or final",
    "cn_def": "暫定的;試探性的"
  },
  "negligible": {
    "pos": "adj.",
    "en_def": "so small that it is not important",
    "cn_def": "微不足道的"
  },
  "property": {
    "pos": "n.",
    "en_def": "buildings and land that someone owns",
    "cn_def": "房地產;財產"
  },
  "rainwater": {
    "pos": "n.",
    "en_def": "water that has fallen as rain",
    "cn_def": "雨水"
  },
  "acidification": {
    "pos": "n.",
    "en_def": "the process of becoming more acidic",
    "cn_def": "酸化"
  },
  "heatwave": {
    "pos": "n.",
    "en_def": "a period of unusually hot weather",
    "cn_def": "熱浪"
  },
  "magnitude": {
    "pos": "n.",
    "en_def": "the great size or importance of something",
    "cn_def": "規模;重要性"
  },
  "casualty": {
    "pos": "n.",
    "en_def": "a person who is hurt or killed in an accident or disaster",
    "cn_def": "傷亡者"
  },
  "evacuate": {
    "pos": "v.",
    "en_def": "to move people away from a dangerous place",
    "cn_def": "撤離;疏散"
  },
  "stockpile": {
    "pos": "v.",
    "en_def": "to collect and store a large supply of something",
    "cn_def": "儲備;囤積"
  },
  "calculate": {
    "pos": "v.",
    "en_def": "to find an answer using numbers",
    "cn_def": "計算"
  },
  "successor": {
    "pos": "n.",
    "en_def": "a person or thing that comes after another",
    "cn_def": "繼任者;後繼者"
  },
  "trajectory": {
    "pos": "n.",
    "en_def": "the path or direction of development",
    "cn_def": "軌跡;發展趨勢"
  },
  "expenditure": {
    "pos": "n.",
    "en_def": "the amount of money spent",
    "cn_def": "支出;花費"
  },
  "landslide": {
    "pos": "n.",
    "en_def": "a mass of earth and rocks falling down a hill",
    "cn_def": "山崩;土石流"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清楚;明確"
  },
  "battery": {
    "pos": "n.",
    "en_def": "a device that stores electricity",
    "cn_def": "電池"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a difficult situation, often without enough money or food",
    "cn_def": "苦難;困境"
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference between two things",
    "cn_def": "對比;差異"
  },
  "rationale": {
    "pos": "n.",
    "en_def": "the reasons for a decision",
    "cn_def": "基本原理;理由"
  },
  "premium": {
    "pos": "n.",
    "en_def": "the amount paid regularly for insurance",
    "cn_def": "保費"
  },
  "nuclear": {
    "pos": "adj.",
    "en_def": "using energy from splitting atoms",
    "cn_def": "核能的"
  },
  "intermittent": {
    "pos": "adj.",
    "en_def": "stopping and starting again",
    "cn_def": "間歇性的"
  },
  "interim": {
    "pos": "adj.",
    "en_def": "temporary, until something permanent is ready",
    "cn_def": "臨時的;過渡期的"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the size or level of something",
    "cn_def": "規模"
  },
  "nuance": {
    "pos": "n.",
    "en_def": "a small but important difference in meaning",
    "cn_def": "細微差別"
  },
  "activist": {
    "pos": "n.",
    "en_def": "a person who works to bring political or social change",
    "cn_def": "社運人士;行動者"
  },
  "viable": {
    "pos": "adj.",
    "en_def": "able to work successfully",
    "cn_def": "可行的;能成功的"
  },
  "robust": {
    "pos": "adj.",
    "en_def": "strong and unlikely to fail",
    "cn_def": "強健的;穩固的"
  },
  "exponential": {
    "pos": "adj.",
    "en_def": "increasing faster and faster",
    "cn_def": "指數型的;急遽增加的"
  },
  "extent": {
    "pos": "n.",
    "en_def": "how large or serious something is",
    "cn_def": "程度;範圍"
  },
  "severity": {
    "pos": "n.",
    "en_def": "how serious or bad something is",
    "cn_def": "嚴重程度"
  },
  "grid": {
    "pos": "n.",
    "en_def": "the network of power lines that delivers electricity",
    "cn_def": "電網"
  },
  "frequency": {
    "pos": "n.",
    "en_def": "how often something happens",
    "cn_def": "頻率"
  },
  "hailstorm": {
    "pos": "n.",
    "en_def": "a storm in which balls of ice fall from the sky",
    "cn_def": "冰雹暴"
  },
  "salinity": {
    "pos": "n.",
    "en_def": "the amount of salt in water",
    "cn_def": "鹽度"
  },
  "hydropower": {
    "pos": "n.",
    "en_def": "electricity made from moving water",
    "cn_def": "水力發電"
  },
  "desertification": {
    "pos": "n.",
    "en_def": "the process of land slowly becoming desert",
    "cn_def": "沙漠化"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "baseline": {
    "pos": "n.",
    "en_def": "a starting point used for comparison",
    "cn_def": "基準線"
  },
  "conclusive": {
    "pos": "adj.",
    "en_def": "proving something without doubt",
    "cn_def": "確鑿的;決定性的"
  },
  "unanimous": {
    "pos": "adj.",
    "en_def": "agreed by everyone",
    "cn_def": "一致同意的"
  },
  "thesis": {
    "pos": "n.",
    "en_def": "a long piece of writing for a university degree",
    "cn_def": "論文"
  },
  "fumes": {
    "pos": "n.",
    "en_def": "strong, unpleasant smoke or gas",
    "cn_def": "(有害的)煙霧;廢氣"
  },
  "tidal": {
    "pos": "adj.",
    "en_def": "connected with the rise and fall of the sea",
    "cn_def": "潮汐的"
  },
  "parched": {
    "pos": "adj.",
    "en_def": "very dry because of no rain",
    "cn_def": "乾裂的;焦乾的"
  },
  "orthodox": {
    "pos": "adj.",
    "en_def": "generally accepted as correct",
    "cn_def": "正統的;傳統的"
  },
  "meticulous": {
    "pos": "adj.",
    "en_def": "very careful about details",
    "cn_def": "一絲不苟的;細心的"
  },
  "marginal": {
    "pos": "adj.",
    "en_def": "very small and not important",
    "cn_def": "微小的;邊際的"
  },
  "salient": {
    "pos": "adj.",
    "en_def": "most important or noticeable",
    "cn_def": "最顯著的;重要的"
  },
  "geothermal": {
    "pos": "adj.",
    "en_def": "using heat from inside the Earth",
    "cn_def": "地熱的"
  },
  "unprecedented": {
    "pos": "adj.",
    "en_def": "never happened before",
    "cn_def": "前所未有的"
  },
  "prominent": {
    "pos": "adj.",
    "en_def": "important and well known",
    "cn_def": "著名的;重要的"
  },
  "comprehensive": {
    "pos": "adj.",
    "en_def": "including everything that is needed",
    "cn_def": "全面的;綜合的"
  },
  "forthcoming": {
    "pos": "adj.",
    "en_def": "going to happen soon",
    "cn_def": "即將到來的"
  },
  "acidic": {
    "pos": "adj.",
    "en_def": "containing acid; sour",
    "cn_def": "酸性的"
  },
  "current": {
    "pos": "n.",
    "en_def": "a steady flow of water in one direction",
    "cn_def": "洋流;水流"
  },
  "burden": {
    "pos": "n.",
    "en_def": "a heavy duty or problem that someone must deal with",
    "cn_def": "負擔;重擔"
  },
  "zoning": {
    "pos": "n.",
    "en_def": "rules about how land in an area may be used",
    "cn_def": "土地分區管制"
  },
  "soot": {
    "pos": "n.",
    "en_def": "black powder made when something is burned",
    "cn_def": "煤灰;煙灰"
  },
  "a race against time": {
    "pos": "n.phr.",
    "en_def": "a situation where you must work very fast to finish before it is too late",
    "cn_def": "與時間賽跑"
  },
  "the tip of the iceberg": {
    "pos": "n.phr.",
    "en_def": "a small, visible part of a much bigger problem",
    "cn_def": "冰山一角"
  },
  "thermal expansion": {
    "pos": "n.phr.",
    "en_def": "the way water takes up more space when it gets warmer",
    "cn_def": "熱膨脹"
  }
};

const EXTRA_GLOSSES = {};
