// Topic 12 Subunit 2 Quiz Data: Volcanoes & Earthquakes 火山與地震
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S02 - Volcanoes & Earthquakes 火山與地震",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "volcano",
    "pos": "n.",
    "cn_def": "火山",
    "en_def": "a mountain that can send out hot rock, gas and ash",
    "sentence": "Mount Fuji is actually a {{BLANK}}, but it has not erupted for over 300 years, so millions of tourists climb it safely.",
    "cn": "富士山其實是一座火山，但它已經超過三百年沒有噴發，所以數百萬名遊客能安全地攀登。"
  },
  {
    "word": "volcanic",
    "pos": "adj.",
    "cn_def": "火山的",
    "en_def": "produced by or related to a volcano",
    "sentence": "Yangmingshan has rich {{BLANK}} soil, so farmers grow excellent vegetables there, and visitors enjoy the hot springs too.",
    "cn": "陽明山有肥沃的火山土壤，所以農民在那裡種出優質蔬菜，而且遊客也很喜歡那裡的溫泉。"
  },
  {
    "word": "eruption",
    "pos": "n.",
    "cn_def": "噴發",
    "en_def": "when a volcano suddenly throws out lava, ash and gas",
    "sentence": "The {{BLANK}} sent ash high into the sky, so hundreds of flights across Europe were cancelled for almost a week.",
    "cn": "那次噴發把火山灰噴到高空中，所以歐洲各地數百個航班被取消將近一週。"
  },
  {
    "word": "erupt",
    "pos": "v.",
    "cn_def": "（火山）爆發",
    "en_def": "to suddenly throw out lava, ash or gas",
    "sentence": "Scientists cannot say exactly when the volcano will {{BLANK}} again, but they watch it closely every day to warn local people.",
    "cn": "科學家無法確切說出那座火山何時會再次爆發，但他們每天密切監測，以便警告當地居民。"
  },
  {
    "word": "magma",
    "pos": "n.",
    "cn_def": "岩漿",
    "en_def": "hot liquid rock under the Earth's surface",
    "sentence": "When {{BLANK}} rises toward the surface, the ground may swell slightly, and scientists use this sign to predict eruptions.",
    "cn": "當岩漿朝地表上升時，地面可能會稍微隆起，而科學家利用這個跡象來預測噴發。"
  },
  {
    "word": "lava",
    "pos": "n.",
    "cn_def": "熔岩",
    "en_def": "hot liquid rock that comes out of a volcano",
    "sentence": "The red {{BLANK}} flowed slowly down the mountain, but it destroyed several houses because nobody could stop it.",
    "cn": "紅色的熔岩緩緩流下山，但它摧毀了好幾棟房子，因為沒有人能阻擋它。"
  },
  {
    "word": "ash cloud",
    "pos": "n.phr.",
    "cn_def": "火山灰雲",
    "en_def": "a huge cloud of tiny rock pieces from a volcano",
    "sentence": "The airline cancelled our flight because a large {{BLANK}} was moving toward the airport, and the ash could damage engines.",
    "cn": "航空公司取消了我們的班機，因為一大片火山灰雲正往機場移動，而火山灰可能會損壞引擎。"
  },
  {
    "word": "crater",
    "pos": "n.",
    "cn_def": "火山口；坑洞",
    "en_def": "a large bowl-shaped hole at the top of a volcano or made by an impact",
    "sentence": "We hiked to the edge of the {{BLANK}} early in the morning, and we could see steam rising from the bottom.",
    "cn": "我們一大早健行到火山口邊緣，而且我們能看到蒸氣從底部冒出來。"
  },
  {
    "word": "caldera",
    "pos": "n.",
    "cn_def": "破火山口",
    "en_def": "a huge hollow formed when a volcano collapses",
    "sentence": "After the giant eruption, the top of the mountain fell in and formed a {{BLANK}}, which later filled with water and became a lake.",
    "cn": "那次巨大噴發後，山頂崩塌形成了一個破火山口，後來積水變成了一座湖。"
  },
  {
    "word": "pyroclastic flow",
    "pos": "n.phr.",
    "cn_def": "火山碎屑流",
    "en_def": "a fast, deadly cloud of hot gas and rock",
    "sentence": "A {{BLANK}} can move faster than a car, so people living near the volcano must leave as soon as officials warn them.",
    "cn": "火山碎屑流可以移動得比汽車還快，所以住在火山附近的人一接到官員警告就必須離開。"
  },
  {
    "word": "hot spring",
    "pos": "n.phr.",
    "cn_def": "溫泉",
    "en_def": "a natural pool of water heated underground",
    "sentence": "After a long day of hiking, we relaxed in a {{BLANK}}, and the warm water made our tired legs feel much better.",
    "cn": "經過一整天的健行後，我們在溫泉裡放鬆，而溫暖的泉水讓我們疲憊的雙腿舒服多了。"
  },
  {
    "word": "geyser",
    "pos": "n.",
    "cn_def": "間歇泉",
    "en_def": "a hot spring that shoots water and steam into the air",
    "sentence": "Tourists waited patiently for the {{BLANK}} to shoot water into the air, and everyone cheered when it finally happened.",
    "cn": "遊客耐心地等待間歇泉把水噴向空中，而當它終於噴發時，每個人都歡呼起來。"
  },
  {
    "word": "earthquake",
    "pos": "n.",
    "cn_def": "地震",
    "en_def": "a sudden shaking of the ground",
    "sentence": "The {{BLANK}} woke me up at three in the morning, so I hid under my desk until the shaking stopped.",
    "cn": "那場地震在凌晨三點把我搖醒，所以我躲在書桌底下直到搖晃停止。"
  },
  {
    "word": "tremor",
    "pos": "n.",
    "cn_def": "輕微震動",
    "en_def": "a small shaking of the ground",
    "sentence": "We felt a slight {{BLANK}} during dinner, but nobody panicked because small shakes are common in Taiwan.",
    "cn": "我們在晚餐時感覺到輕微的震動，但沒有人驚慌，因為小地震在臺灣很常見。"
  },
  {
    "word": "aftershock",
    "pos": "n.",
    "cn_def": "餘震",
    "en_def": "a smaller earthquake that follows a big one",
    "sentence": "Many families slept outside that night because they were afraid of another {{BLANK}}, and the shaking continued for days.",
    "cn": "那天晚上許多家庭睡在戶外，因為他們害怕再有餘震，而搖晃持續了好幾天。"
  },
  {
    "word": "foreshock",
    "pos": "n.",
    "cn_def": "前震",
    "en_def": "a smaller earthquake that comes before a bigger one",
    "sentence": "Nobody realised that the small shake was a {{BLANK}}, so people were shocked when a much stronger quake hit an hour later.",
    "cn": "沒有人意識到那次小搖晃是前震，所以一小時後更強的地震來襲時，大家都嚇壞了。"
  },
  {
    "word": "seismograph",
    "pos": "n.",
    "cn_def": "地震儀",
    "en_def": "a machine that measures and records earthquakes",
    "sentence": "The {{BLANK}} in the school lab recorded the earthquake clearly, and our science teacher showed us the zigzag lines the next day.",
    "cn": "學校實驗室裡的地震儀清楚地記錄了那場地震，而我們的自然老師隔天給我們看那些鋸齒狀的線條。"
  },
  {
    "word": "seismologist",
    "pos": "n.",
    "cn_def": "地震學家",
    "en_def": "a scientist who studies earthquakes",
    "sentence": "The {{BLANK}} explained on TV that the earthquake was not dangerous, but she reminded viewers to prepare emergency kits.",
    "cn": "那位地震學家在電視上解釋說這次地震並不危險，但她提醒觀眾準備緊急避難包。"
  },
  {
    "word": "Richter scale",
    "pos": "n.phr.",
    "cn_def": "芮氏規模",
    "en_def": "a scale that measures the strength of an earthquake",
    "sentence": "The earthquake measured 6.5 on the {{BLANK}}, so the government sent rescue teams to the area immediately.",
    "cn": "那場地震在芮氏規模上達到6.5級，所以政府立即派遣救援隊前往該地區。"
  },
  {
    "word": "fault zone",
    "pos": "n.phr.",
    "cn_def": "斷層帶",
    "en_def": "an area with many cracks where rocks move",
    "sentence": "The town lies inside an active {{BLANK}}, so all new buildings there must follow strict safety rules.",
    "cn": "這座城鎮位於一個活躍的斷層帶內，所以那裡所有新建築都必須遵守嚴格的安全規定。"
  },
  {
    "word": "shockwave",
    "pos": "n.",
    "cn_def": "震波",
    "en_def": "a strong wave of energy that travels through the ground or air",
    "sentence": "The {{BLANK}} from the earthquake travelled hundreds of kilometres, and people in the capital felt their buildings sway.",
    "cn": "地震產生的震波傳遞了數百公里，而首都的人們感覺到他們的建築物在搖晃。"
  },
  {
    "word": "liquefaction",
    "pos": "n.",
    "cn_def": "土壤液化",
    "en_def": "when shaken wet soil starts to behave like a liquid",
    "sentence": "{{BLANK}} made several buildings sink into the ground, because the soil near the river was full of water.",
    "cn": "土壤液化讓好幾棟建築物陷入地下，因為河邊的土壤充滿了水。"
  },
  {
    "word": "rupture",
    "pos": "v.",
    "cn_def": "破裂",
    "en_def": "to break or burst suddenly",
    "sentence": "When the rocks along the fault suddenly {{BLANK}}, huge amounts of energy are released, and the ground begins to shake.",
    "cn": "當斷層沿線的岩石突然破裂時，大量能量被釋放出來，地面就開始搖晃。"
  },
  {
    "word": "quake",
    "pos": "n.",
    "cn_def": "地震（口語）",
    "en_def": "an informal word for an earthquake",
    "sentence": "The {{BLANK}} was short, but it knocked books off the shelves, so the library closed early to clean up.",
    "cn": "那場地震很短暫，但它把書從書架上震落，所以圖書館提早關門整理。"
  },
  {
    "word": "volcanologist",
    "pos": "n.",
    "cn_def": "火山學家",
    "en_def": "a scientist who studies volcanoes",
    "sentence": "The {{BLANK}} wore a special suit near the lava, because the heat was strong enough to burn normal clothes.",
    "cn": "那位火山學家在熔岩附近穿著特殊防護衣，因為那裡的高溫足以燒毀一般衣物。"
  },
  {
    "word": "Ring of Fire",
    "pos": "n.phr.",
    "cn_def": "環太平洋火山帶",
    "en_def": "the area around the Pacific Ocean with many volcanoes and earthquakes",
    "sentence": "Taiwan is part of the {{BLANK}}, so we experience many earthquakes, and we also enjoy many hot springs.",
    "cn": "臺灣是環太平洋火山帶的一部分，所以我們經歷許多地震，而且我們也享有許多溫泉。"
  },
  {
    "word": "sinkhole",
    "pos": "n.",
    "cn_def": "天坑；地陷",
    "en_def": "a hole that suddenly opens in the ground",
    "sentence": "A huge {{BLANK}} opened in the middle of the road after heavy rain, so the police closed the street for several days.",
    "cn": "大雨過後，道路中央突然出現一個巨大的天坑，所以警方封閉了那條街好幾天。"
  },
  {
    "word": "evacuation drill",
    "pos": "n.phr.",
    "cn_def": "疏散演練",
    "en_def": "a practice of leaving a building quickly in an emergency",
    "sentence": "Our school holds an {{BLANK}} every September, and students learn to leave the building calmly in under three minutes.",
    "cn": "我們學校每年九月都會舉行疏散演練，而學生學習在三分鐘內冷靜地離開大樓。"
  },
  {
    "word": "active volcano",
    "pos": "n.phr.",
    "cn_def": "活火山",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "sentence": "Iceland has many {{BLANK}}, but tourists still visit them because the views are amazing and the guides are well trained.",
    "cn": "冰島有許多活火山，但遊客仍然去參觀，因為景色壯觀而且導遊訓練有素。"
  },
  {
    "word": "extinct volcano",
    "pos": "n.phr.",
    "cn_def": "死火山",
    "en_def": "a volcano that will never erupt again",
    "sentence": "Edinburgh Castle stands on an {{BLANK}}, so visitors can enjoy the view without worrying about an eruption.",
    "cn": "愛丁堡城堡矗立在一座死火山上，所以遊客可以欣賞美景而不必擔心火山噴發。"
  }
];

const MCQS = [
  {
    "q": "Mount Fuji is actually a _____, but it has not erupted for over 300 years, so millions of tourists climb it safely.",
    "options": [
      "accumulation",
      "volcano",
      "validation",
      "particle"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Yangmingshan has rich _____ soil, so farmers grow excellent vegetables there, and visitors enjoy the hot springs too.",
    "options": [
      "volcanic",
      "analytical",
      "proportional",
      "microscopic"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ sent ash high into the sky, so hundreds of flights across Europe were cancelled for almost a week.",
    "options": [
      "riverbed",
      "culmination",
      "compression",
      "eruption"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Scientists cannot say exactly when the volcano will _____ again, but they watch it closely every day to warn local people.",
    "options": [
      "oscillate",
      "marvel",
      "erupt",
      "radiate"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "When _____ rises toward the surface, the ground may swell slightly, and scientists use this sign to predict eruptions.",
    "options": [
      "magma",
      "sandstone",
      "propulsion",
      "speculation"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The red _____ flowed slowly down the mountain, but it destroyed several houses because nobody could stop it.",
    "options": [
      "disturbance",
      "supernova",
      "lava",
      "Mars"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The airline cancelled our flight because a large _____ was moving toward the airport, and the ash could damage engines.",
    "options": [
      "space agency",
      "ash cloud",
      "neutron star",
      "full moon"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "We hiked to the edge of the _____ early in the morning, and we could see steam rising from the bottom.",
    "options": [
      "axis",
      "Pangaea",
      "alignment",
      "crater"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "After the giant eruption, the top of the mountain fell in and formed a _____, which later filled with water and became a lake.",
    "options": [
      "stargazing",
      "similarity",
      "caldera",
      "variation"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "A _____ can move faster than a car, so people living near the volcano must leave as soon as officials warn them.",
    "options": [
      "dark energy",
      "the calm before the storm",
      "mission control",
      "pyroclastic flow"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "After a long day of hiking, we relaxed in a _____, and the warm water made our tired legs feel much better.",
    "options": [
      "hot spring",
      "asteroid belt",
      "river mouth",
      "water cycle"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Tourists waited patiently for the _____ to shoot water into the air, and everyone cheered when it finally happened.",
    "options": [
      "tributary",
      "geyser",
      "basalt",
      "subduction"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The _____ woke me up at three in the morning, so I hid under my desk until the shaking stopped.",
    "options": [
      "geophysicist",
      "incline",
      "rapids",
      "earthquake"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "We felt a slight _____ during dinner, but nobody panicked because small shakes are common in Taiwan.",
    "options": [
      "geophysicist",
      "tremor",
      "conjunction",
      "fold"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Many families slept outside that night because they were afraid of another _____, and the shaking continued for days.",
    "options": [
      "particle",
      "comet",
      "aftershock",
      "geophysicist"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Nobody realised that the small shake was a _____, so people were shocked when a much stronger quake hit an hour later.",
    "options": [
      "foreshock",
      "crystal",
      "geophysicist",
      "Neptune"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The _____ in the school lab recorded the earthquake clearly, and our science teacher showed us the zigzag lines the next day.",
    "options": [
      "billion",
      "slope",
      "irregularity",
      "seismograph"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The _____ explained on TV that the earthquake was not dangerous, but she reminded viewers to prepare emergency kits.",
    "options": [
      "geophysicist",
      "speculation",
      "seismologist",
      "Neptune"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The earthquake measured 6.5 on the _____, so the government sent rescue teams to the area immediately.",
    "options": [
      "Richter scale",
      "dwarf planet",
      "moon landing",
      "dark energy"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The town lies inside an active _____, so all new buildings there must follow strict safety rules.",
    "options": [
      "moon landing",
      "fault zone",
      "red giant",
      "solar system"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The _____ from the earthquake travelled hundreds of kilometres, and people in the capital felt their buildings sway.",
    "options": [
      "geophysicist",
      "spacesuit",
      "shockwave",
      "presence"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "_____ made several buildings sink into the ground, because the soil near the river was full of water.",
    "options": [
      "contour",
      "airlock",
      "rapids",
      "liquefaction"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "When the rocks along the fault suddenly _____, huge amounts of energy are released, and the ground begins to shake.",
    "options": [
      "rupture",
      "visualise",
      "integrate",
      "meander"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The _____ was short, but it knocked books off the shelves, so the library closed early to clean up.",
    "options": [
      "assertion",
      "quake",
      "meteorite",
      "gemstone"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ wore a special suit near the lava, because the heat was strong enough to burn normal clothes.",
    "options": [
      "divergence",
      "gorge",
      "spacewalk",
      "volcanologist"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Taiwan is part of the _____, so we experience many earthquakes, and we also enjoy many hot springs.",
    "options": [
      "dark energy",
      "Kuiper Belt",
      "Ring of Fire",
      "space tourism"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "A huge _____ opened in the middle of the road after heavy rain, so the police closed the street for several days.",
    "options": [
      "sinkhole",
      "glaciation",
      "galaxy",
      "persistence"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Our school holds an _____ every September, and students learn to leave the building calmly in under three minutes.",
    "options": [
      "space tourism",
      "evacuation drill",
      "solar flare",
      "dwarf planet"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Iceland has many _____, but tourists still visit them because the views are amazing and the guides are well trained.",
    "options": [
      "meteor shower",
      "the calm before the storm",
      "active volcano",
      "black hole"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Edinburgh Castle stands on an _____, so visitors can enjoy the view without worrying about an eruption.",
    "options": [
      "extinct volcano",
      "dark energy",
      "moon landing",
      "space station"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "volcano": {
    "pos": "n.",
    "en_def": "a mountain that can send out hot rock, gas and ash",
    "cn_def": "火山"
  },
  "volcanic": {
    "pos": "adj.",
    "en_def": "produced by or related to a volcano",
    "cn_def": "火山的"
  },
  "eruption": {
    "pos": "n.",
    "en_def": "when a volcano suddenly throws out lava, ash and gas",
    "cn_def": "噴發"
  },
  "erupt": {
    "pos": "v.",
    "en_def": "to suddenly throw out lava, ash or gas",
    "cn_def": "（火山）爆發"
  },
  "magma": {
    "pos": "n.",
    "en_def": "hot liquid rock under the Earth's surface",
    "cn_def": "岩漿"
  },
  "lava": {
    "pos": "n.",
    "en_def": "hot liquid rock that comes out of a volcano",
    "cn_def": "熔岩"
  },
  "ash cloud": {
    "pos": "n.phr.",
    "en_def": "a huge cloud of tiny rock pieces from a volcano",
    "cn_def": "火山灰雲"
  },
  "crater": {
    "pos": "n.",
    "en_def": "a large bowl-shaped hole at the top of a volcano or made by an impact",
    "cn_def": "火山口；坑洞"
  },
  "caldera": {
    "pos": "n.",
    "en_def": "a huge hollow formed when a volcano collapses",
    "cn_def": "破火山口"
  },
  "pyroclastic flow": {
    "pos": "n.phr.",
    "en_def": "a fast, deadly cloud of hot gas and rock",
    "cn_def": "火山碎屑流"
  },
  "hot spring": {
    "pos": "n.phr.",
    "en_def": "a natural pool of water heated underground",
    "cn_def": "溫泉"
  },
  "geyser": {
    "pos": "n.",
    "en_def": "a hot spring that shoots water and steam into the air",
    "cn_def": "間歇泉"
  },
  "earthquake": {
    "pos": "n.",
    "en_def": "a sudden shaking of the ground",
    "cn_def": "地震"
  },
  "tremor": {
    "pos": "n.",
    "en_def": "a small shaking of the ground",
    "cn_def": "輕微震動"
  },
  "aftershock": {
    "pos": "n.",
    "en_def": "a smaller earthquake that follows a big one",
    "cn_def": "餘震"
  },
  "foreshock": {
    "pos": "n.",
    "en_def": "a smaller earthquake that comes before a bigger one",
    "cn_def": "前震"
  },
  "seismograph": {
    "pos": "n.",
    "en_def": "a machine that measures and records earthquakes",
    "cn_def": "地震儀"
  },
  "seismologist": {
    "pos": "n.",
    "en_def": "a scientist who studies earthquakes",
    "cn_def": "地震學家"
  },
  "richter scale": {
    "pos": "n.phr.",
    "en_def": "a scale that measures the strength of an earthquake",
    "cn_def": "芮氏規模"
  },
  "fault zone": {
    "pos": "n.phr.",
    "en_def": "an area with many cracks where rocks move",
    "cn_def": "斷層帶"
  },
  "shockwave": {
    "pos": "n.",
    "en_def": "a strong wave of energy that travels through the ground or air",
    "cn_def": "震波"
  },
  "liquefaction": {
    "pos": "n.",
    "en_def": "when shaken wet soil starts to behave like a liquid",
    "cn_def": "土壤液化"
  },
  "rupture": {
    "pos": "v.",
    "en_def": "to break or burst suddenly",
    "cn_def": "破裂"
  },
  "quake": {
    "pos": "n.",
    "en_def": "an informal word for an earthquake",
    "cn_def": "地震（口語）"
  },
  "volcanologist": {
    "pos": "n.",
    "en_def": "a scientist who studies volcanoes",
    "cn_def": "火山學家"
  },
  "ring of fire": {
    "pos": "n.phr.",
    "en_def": "the area around the Pacific Ocean with many volcanoes and earthquakes",
    "cn_def": "環太平洋火山帶"
  },
  "sinkhole": {
    "pos": "n.",
    "en_def": "a hole that suddenly opens in the ground",
    "cn_def": "天坑；地陷"
  },
  "evacuation drill": {
    "pos": "n.phr.",
    "en_def": "a practice of leaving a building quickly in an emergency",
    "cn_def": "疏散演練"
  },
  "active volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "cn_def": "活火山"
  },
  "extinct volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that will never erupt again",
    "cn_def": "死火山"
  },
  "accumulation": {
    "pos": "n.",
    "en_def": "a gradual increase in amount",
    "cn_def": "累積"
  },
  "validation": {
    "pos": "n.",
    "en_def": "proof that something is correct or true",
    "cn_def": "驗證"
  },
  "particle": {
    "pos": "n.",
    "en_def": "a very small piece of something",
    "cn_def": "粒子；微粒"
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "using careful, logical thinking to examine things",
    "cn_def": "分析的"
  },
  "proportional": {
    "pos": "adj.",
    "en_def": "changing in size in the same way as something else",
    "cn_def": "成比例的"
  },
  "microscopic": {
    "pos": "adj.",
    "en_def": "so small that it can only be seen with a microscope",
    "cn_def": "微小的；顯微鏡才能看見的"
  },
  "riverbed": {
    "pos": "n.",
    "en_def": "the ground at the bottom of a river",
    "cn_def": "河床"
  },
  "culmination": {
    "pos": "n.",
    "en_def": "the final result of a long process",
    "cn_def": "頂點；成果"
  },
  "compression": {
    "pos": "n.",
    "en_def": "the act of pressing something into a smaller space",
    "cn_def": "壓縮"
  },
  "oscillate": {
    "pos": "v.",
    "en_def": "to move backwards and forwards regularly",
    "cn_def": "擺動；振盪"
  },
  "marvel": {
    "pos": "v.",
    "en_def": "to feel great surprise and admiration",
    "cn_def": "驚嘆"
  },
  "radiate": {
    "pos": "v.",
    "en_def": "to send out heat or light in all directions",
    "cn_def": "散發；輻射"
  },
  "sandstone": {
    "pos": "n.",
    "en_def": "rock made of sand pressed together",
    "cn_def": "砂岩"
  },
  "propulsion": {
    "pos": "n.",
    "en_def": "the force that pushes something forward",
    "cn_def": "推進力；推進系統"
  },
  "speculation": {
    "pos": "n.",
    "en_def": "guesses made without enough information",
    "cn_def": "推測；臆測"
  },
  "disturbance": {
    "pos": "n.",
    "en_def": "something that interrupts normal conditions",
    "cn_def": "干擾；擾動"
  },
  "supernova": {
    "pos": "n.",
    "en_def": "the huge explosion of a dying star",
    "cn_def": "超新星"
  },
  "mars": {
    "pos": "n.",
    "en_def": "the red planet, fourth from the sun",
    "cn_def": "火星"
  },
  "space agency": {
    "pos": "n.phr.",
    "en_def": "a government organisation that runs space programmes",
    "cn_def": "太空總署；太空機構"
  },
  "neutron star": {
    "pos": "n.phr.",
    "en_def": "a very small, very heavy dead star",
    "cn_def": "中子星"
  },
  "full moon": {
    "pos": "n.phr.",
    "en_def": "the moon when it looks completely round and bright",
    "cn_def": "滿月"
  },
  "axis": {
    "pos": "n.",
    "en_def": "an imaginary line that a planet spins around",
    "cn_def": "地軸；軸"
  },
  "pangaea": {
    "pos": "n.",
    "en_def": "the supercontinent that existed about 300 million years ago",
    "cn_def": "盤古大陸"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the arrangement of things in a straight line",
    "cn_def": "排成一直線；對齊"
  },
  "stargazing": {
    "pos": "n.",
    "en_def": "the activity of looking at the stars",
    "cn_def": "觀星"
  },
  "similarity": {
    "pos": "n.",
    "en_def": "the way in which things are alike",
    "cn_def": "相似之處"
  },
  "variation": {
    "pos": "n.",
    "en_def": "a change or difference in amount or level",
    "cn_def": "變化；差異"
  },
  "dark energy": {
    "pos": "n.phr.",
    "en_def": "a mysterious force that makes the universe expand faster",
    "cn_def": "暗能量"
  },
  "the calm before the storm": {
    "pos": "n.phr.",
    "en_def": "a quiet period before trouble or great activity",
    "cn_def": "暴風雨前的寧靜"
  },
  "mission control": {
    "pos": "n.phr.",
    "en_def": "the team on Earth that guides a space flight",
    "cn_def": "任務控制中心"
  },
  "asteroid belt": {
    "pos": "n.phr.",
    "en_def": "the area between Mars and Jupiter with many asteroids",
    "cn_def": "小行星帶"
  },
  "river mouth": {
    "pos": "n.phr.",
    "en_def": "the place where a river flows into the sea",
    "cn_def": "河口"
  },
  "water cycle": {
    "pos": "n.phr.",
    "en_def": "the movement of water between the sea, air and land",
    "cn_def": "水循環"
  },
  "tributary": {
    "pos": "n.",
    "en_def": "a small river that flows into a bigger river",
    "cn_def": "支流"
  },
  "basalt": {
    "pos": "n.",
    "en_def": "a dark rock formed from cooled lava",
    "cn_def": "玄武岩"
  },
  "subduction": {
    "pos": "n.",
    "en_def": "when one plate slides under another plate",
    "cn_def": "隱沒作用"
  },
  "geophysicist": {
    "pos": "n.",
    "en_def": "a scientist who studies the physical processes of the Earth",
    "cn_def": "地球物理學家"
  },
  "incline": {
    "pos": "n.",
    "en_def": "a slope",
    "cn_def": "斜坡"
  },
  "rapids": {
    "pos": "n.",
    "en_def": "part of a river where water flows fast over rocks",
    "cn_def": "急流"
  },
  "conjunction": {
    "pos": "n.",
    "en_def": "when two planets appear very close together in the sky",
    "cn_def": "（行星）合；結合"
  },
  "fold": {
    "pos": "n.",
    "en_def": "a bend in rock layers caused by pressure",
    "cn_def": "褶皺"
  },
  "comet": {
    "pos": "n.",
    "en_def": "an icy object with a bright tail that travels around the sun",
    "cn_def": "彗星"
  },
  "crystal": {
    "pos": "n.",
    "en_def": "a solid with a regular shape and flat sides",
    "cn_def": "晶體；水晶"
  },
  "neptune": {
    "pos": "n.",
    "en_def": "the eighth and farthest planet from the sun",
    "cn_def": "海王星"
  },
  "billion": {
    "pos": "n.",
    "en_def": "the number 1,000,000,000",
    "cn_def": "十億"
  },
  "slope": {
    "pos": "n.",
    "en_def": "ground that goes up or down at an angle",
    "cn_def": "斜坡"
  },
  "irregularity": {
    "pos": "n.",
    "en_def": "something that is not normal or regular",
    "cn_def": "不規則；異常"
  },
  "dwarf planet": {
    "pos": "n.phr.",
    "en_def": "a small round object that orbits the sun but is not a full planet",
    "cn_def": "矮行星"
  },
  "moon landing": {
    "pos": "n.phr.",
    "en_def": "the event of a spacecraft or people landing on the moon",
    "cn_def": "登月"
  },
  "red giant": {
    "pos": "n.phr.",
    "en_def": "a large, old star that has grown cooler and redder",
    "cn_def": "紅巨星"
  },
  "solar system": {
    "pos": "n.phr.",
    "en_def": "the sun and all the planets and objects that go around it",
    "cn_def": "太陽系"
  },
  "spacesuit": {
    "pos": "n.",
    "en_def": "special clothing that protects astronauts in space",
    "cn_def": "太空衣"
  },
  "presence": {
    "pos": "n.",
    "en_def": "the fact of being in a place",
    "cn_def": "存在"
  },
  "contour": {
    "pos": "n.",
    "en_def": "the outline or shape of something",
    "cn_def": "輪廓"
  },
  "airlock": {
    "pos": "n.",
    "en_def": "a small sealed room for moving between areas with different air pressure",
    "cn_def": "氣閘艙"
  },
  "visualise": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像；視覺化"
  },
  "integrate": {
    "pos": "v.",
    "en_def": "to combine things so they work together",
    "cn_def": "整合"
  },
  "meander": {
    "pos": "v.",
    "en_def": "to follow a slow, winding course",
    "cn_def": "蜿蜒流動"
  },
  "assertion": {
    "pos": "n.",
    "en_def": "a strong statement that something is true",
    "cn_def": "主張；斷言"
  },
  "meteorite": {
    "pos": "n.",
    "en_def": "a piece of rock from space that lands on Earth",
    "cn_def": "隕石"
  },
  "gemstone": {
    "pos": "n.",
    "en_def": "a valuable stone used in jewellery",
    "cn_def": "寶石"
  },
  "divergence": {
    "pos": "n.",
    "en_def": "the act of moving apart in different directions",
    "cn_def": "分離；分歧"
  },
  "gorge": {
    "pos": "n.",
    "en_def": "a narrow valley with steep rocky walls",
    "cn_def": "峽谷；山峽"
  },
  "spacewalk": {
    "pos": "n.",
    "en_def": "time an astronaut spends working outside a spacecraft",
    "cn_def": "太空漫步"
  },
  "kuiper belt": {
    "pos": "n.phr.",
    "en_def": "an area of icy objects beyond Neptune",
    "cn_def": "古柏帶"
  },
  "space tourism": {
    "pos": "n.phr.",
    "en_def": "travelling to space for fun as a paying passenger",
    "cn_def": "太空旅遊"
  },
  "glaciation": {
    "pos": "n.",
    "en_def": "a time when large areas are covered by ice",
    "cn_def": "冰河作用；冰川期"
  },
  "galaxy": {
    "pos": "n.",
    "en_def": "a huge group of billions of stars",
    "cn_def": "星系"
  },
  "persistence": {
    "pos": "n.",
    "en_def": "continuing to try even when things are difficult",
    "cn_def": "堅持"
  },
  "solar flare": {
    "pos": "n.phr.",
    "en_def": "a sudden burst of energy from the sun",
    "cn_def": "太陽閃焰"
  },
  "meteor shower": {
    "pos": "n.phr.",
    "en_def": "a time when many meteors can be seen in the sky",
    "cn_def": "流星雨"
  },
  "black hole": {
    "pos": "n.phr.",
    "en_def": "an area in space where gravity is so strong that light cannot escape",
    "cn_def": "黑洞"
  },
  "space station": {
    "pos": "n.phr.",
    "en_def": "a large spacecraft where people live and work in orbit",
    "cn_def": "太空站"
  }
};

const EXTRA_GLOSSES = {};
