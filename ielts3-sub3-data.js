// Topic 3 Subunit 3 Quiz Data: Extreme Weather & Natural Hazards 極端天氣與自然災害
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S03 - Extreme Weather & Natural Hazards 極端天氣與自然災害",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sweltering",
    "pos": "adj.",
    "cn_def": "酷熱難耐的",
    "en_def": "extremely hot and uncomfortable",
    "sentence": "It was a {{BLANK}} afternoon at the bus stop, and an old man nearly fainted before the bus finally arrived.",
    "cn": "公車站那天下午酷熱難耐,一位老先生在公車終於到站前差點昏倒。"
  },
  {
    "word": "heatwave",
    "pos": "n.",
    "cn_def": "熱浪",
    "en_def": "a period of unusually hot weather",
    "sentence": "During the {{BLANK}} last August, hospitals were full of elderly patients, so the city opened cool rooms in libraries.",
    "cn": "去年八月的熱浪期間,醫院擠滿了年長的病人,所以市政府在圖書館開設了降溫室。"
  },
  {
    "word": "typhoon",
    "pos": "n.",
    "cn_def": "颱風",
    "en_def": "a violent tropical storm in the western Pacific",
    "sentence": "Schools were closed because a strong {{BLANK}} was approaching, but my little brother was disappointed that it only rained a little.",
    "cn": "因為一個強烈颱風正在接近,學校停課了,但我弟弟很失望因為只下了一點雨。"
  },
  {
    "word": "hurricane",
    "pos": "n.",
    "cn_def": "颶風",
    "en_def": "a violent tropical storm in the Atlantic",
    "sentence": "The {{BLANK}} destroyed hundreds of homes in Florida, and many families had to live in hotels for months.",
    "cn": "颶風摧毀了佛羅里達州數百棟房屋,許多家庭不得不在旅館住上好幾個月。"
  },
  {
    "word": "cyclone",
    "pos": "n.",
    "cn_def": "氣旋;熱帶風暴",
    "en_def": "a violent storm with strong circular winds",
    "sentence": "A powerful {{BLANK}} hit the coast of Bangladesh, but early warnings helped thousands of people reach safety in time.",
    "cn": "一個強大的氣旋襲擊了孟加拉沿岸,但及早的警報幫助數千人及時抵達安全處。"
  },
  {
    "word": "tornado",
    "pos": "n.",
    "cn_def": "龍捲風",
    "en_def": "a narrow, spinning column of wind that destroys things",
    "sentence": "The {{BLANK}} lifted cars into the air, yet the family survived because they hid in the basement.",
    "cn": "龍捲風把汽車捲到空中,但這家人因為躲在地下室而倖存。"
  },
  {
    "word": "storm surge",
    "pos": "n.phr.",
    "cn_def": "風暴潮",
    "en_def": "a sudden rise of sea water pushed by a storm",
    "sentence": "The {{BLANK}} pushed seawater two metres into the streets, so many ground-floor shops were completely ruined.",
    "cn": "風暴潮把海水推進街道達兩公尺高,所以許多一樓的店家完全被毀。"
  },
  {
    "word": "flood",
    "pos": "v.",
    "cn_def": "淹沒;淹水",
    "en_def": "to cover an area with water",
    "sentence": "Heavy rain {{BLANK}} the underground car park, and dozens of cars were stuck under the water until the next day.",
    "cn": "大雨淹沒了地下停車場,數十輛汽車被困在水下直到隔天。"
  },
  {
    "word": "downpour",
    "pos": "n.",
    "cn_def": "傾盆大雨",
    "en_def": "a sudden heavy fall of rain",
    "sentence": "We were caught in a sudden {{BLANK}} on the way home, and our school bags were completely soaked.",
    "cn": "我們在回家的路上遇到一場突如其來的傾盆大雨,書包全都濕透了。"
  },
  {
    "word": "torrential",
    "pos": "adj.",
    "cn_def": "(雨)傾盆的;猛烈的",
    "en_def": "used to describe very heavy rain",
    "sentence": "{{BLANK}} rain fell for twelve hours, so the river rose quickly and the bridge had to be closed.",
    "cn": "傾盆大雨下了十二個小時,所以河水迅速上漲,橋也不得不封閉。"
  },
  {
    "word": "landslide",
    "pos": "n.",
    "cn_def": "山崩;土石流",
    "en_def": "a mass of earth and rocks falling down a hill",
    "sentence": "A {{BLANK}} blocked the mountain road after the typhoon, and the villagers had no fresh food for a week.",
    "cn": "颱風過後一場山崩堵住了山路,村民們一週都沒有新鮮的食物。"
  },
  {
    "word": "mudslide",
    "pos": "n.",
    "cn_def": "泥流;土石流",
    "en_def": "a flow of wet mud down a hill",
    "sentence": "The hillside had lost its trees, so the heavy rain caused a {{BLANK}} that buried several houses.",
    "cn": "山坡的樹木已經沒了,所以大雨引發了一場土石流,掩埋了好幾棟房子。"
  },
  {
    "word": "avalanche",
    "pos": "n.",
    "cn_def": "雪崩",
    "en_def": "a large amount of snow falling down a mountain",
    "sentence": "Warmer winters make the snow less stable, so the risk of an {{BLANK}} is higher for skiers in spring.",
    "cn": "較暖的冬天讓積雪較不穩定,所以春季滑雪者遇到雪崩的風險更高。"
  },
  {
    "word": "blizzard",
    "pos": "n.",
    "cn_def": "暴風雪",
    "en_def": "a severe snowstorm with strong wind",
    "sentence": "The {{BLANK}} closed the airport for two days, and thousands of travellers slept on the floor of the terminal.",
    "cn": "暴風雪讓機場關閉了兩天,數千名旅客睡在航廈的地板上。"
  },
  {
    "word": "hailstorm",
    "pos": "n.",
    "cn_def": "冰雹暴",
    "en_def": "a storm in which balls of ice fall from the sky",
    "sentence": "A sudden {{BLANK}} damaged the fruit on the trees, so the farmer lost almost half of his apples.",
    "cn": "一場突如其來的冰雹打壞了樹上的果實,所以這位農夫損失了將近一半的蘋果。"
  },
  {
    "word": "lightning",
    "pos": "n.",
    "cn_def": "閃電",
    "en_def": "a bright flash of electricity in the sky during a storm",
    "sentence": "{{BLANK}} struck a tree near the playground, so the teacher told all the students to go inside at once.",
    "cn": "閃電擊中了遊樂場附近的一棵樹,所以老師叫所有學生立刻進到室內。"
  },
  {
    "word": "thunderstorm",
    "pos": "n.",
    "cn_def": "雷雨",
    "en_def": "a storm with thunder, lightning and heavy rain",
    "sentence": "Afternoon {{BLANK}} are common in Taipei in summer, so I always keep an umbrella in my backpack.",
    "cn": "夏天的台北常有午後雷雨,所以我總是在背包裡放一把傘。"
  },
  {
    "word": "gust",
    "pos": "n.",
    "cn_def": "一陣強風",
    "en_def": "a sudden strong rush of wind",
    "sentence": "A strong {{BLANK}} of wind turned my umbrella inside out, and everyone at the bus stop started laughing.",
    "cn": "一陣強風把我的傘吹得翻了過來,公車站的每個人都笑了起來。"
  },
  {
    "word": "evacuate",
    "pos": "v.",
    "cn_def": "撤離;疏散",
    "en_def": "to move people away from a dangerous place",
    "sentence": "Officials decided to {{BLANK}} the coastal village before the storm arrived, but some old fishermen refused to leave.",
    "cn": "官員決定在暴風雨來臨前撤離沿海村莊,但有些老漁夫拒絕離開。"
  },
  {
    "word": "evacuation",
    "pos": "n.",
    "cn_def": "撤離;疏散",
    "en_def": "the act of moving people to a safe place",
    "sentence": "The school practises an {{BLANK}} plan twice a year, so every student knows which exit to use in an emergency.",
    "cn": "學校每年演練兩次疏散計畫,所以每位學生都知道緊急時要走哪個出口。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "避難所",
    "en_def": "a place that protects people from danger or bad weather",
    "sentence": "The town turned the sports centre into a {{BLANK}}, and volunteers gave out blankets and hot meals all night.",
    "cn": "鎮上把運動中心改成避難所,志工們整晚發放毛毯和熱食。"
  },
  {
    "word": "casualty",
    "pos": "n.",
    "cn_def": "傷亡者",
    "en_def": "a person who is hurt or killed in an accident or disaster",
    "sentence": "The storm was very strong, but there were few {{BLANK}} because people had left the area in time.",
    "cn": "暴風雨非常強烈,但由於人們及時離開了該地區,傷亡人數很少。"
  },
  {
    "word": "disaster",
    "pos": "n.",
    "cn_def": "災難",
    "en_def": "a sudden event that causes great damage",
    "sentence": "The flood was the worst {{BLANK}} in the town's history, and it took three years to rebuild the main street.",
    "cn": "這場洪水是鎮上有史以來最嚴重的災難,重建主要街道花了三年時間。"
  },
  {
    "word": "catastrophic",
    "pos": "adj.",
    "cn_def": "災難性的",
    "en_def": "causing terrible damage",
    "sentence": "Scientists warn that warming of three degrees could have {{BLANK}} effects, so they want governments to act now.",
    "cn": "科學家警告升溫三度可能帶來災難性的影響,所以他們希望各國政府現在就採取行動。"
  },
  {
    "word": "devastate",
    "pos": "v.",
    "cn_def": "摧毀;使荒廢",
    "en_def": "to destroy or damage something very badly",
    "sentence": "The wildfire {{BLANK}} the small mountain town, but the residents promised to rebuild it together.",
    "cn": "野火摧毀了這座山中小鎮,但居民們承諾要一起重建它。"
  },
  {
    "word": "hazard",
    "pos": "n.",
    "cn_def": "危險;危害",
    "en_def": "something that may be dangerous",
    "sentence": "Fallen power lines are a serious {{BLANK}} after a typhoon, so children should never touch anything on the ground.",
    "cn": "颱風過後倒下的電線是嚴重的危險,所以孩子們絕不應該碰觸地上的任何東西。"
  },
  {
    "word": "frequency",
    "pos": "n.",
    "cn_def": "頻率",
    "en_def": "how often something happens",
    "sentence": "The {{BLANK}} of strong typhoons has increased in recent years, and insurance companies have raised their prices.",
    "cn": "近年來強烈颱風的頻率增加了,保險公司也提高了保費。"
  },
  {
    "word": "severity",
    "pos": "n.",
    "cn_def": "嚴重程度",
    "en_def": "how serious or bad something is",
    "sentence": "Nobody expected the {{BLANK}} of the flooding, so many families did not move their cars or furniture in time.",
    "cn": "沒有人預料到淹水的嚴重程度,所以許多家庭沒有及時移走他們的車子或家具。"
  },
  {
    "word": "heatstroke",
    "pos": "n.",
    "cn_def": "中暑",
    "en_def": "a dangerous illness caused by too much heat",
    "sentence": "Two runners suffered from {{BLANK}} during the summer race, so the organisers moved the next event to early morning.",
    "cn": "兩名跑者在夏季賽跑中中暑,所以主辦單位把下一場比賽改到清晨。"
  },
  {
    "word": "dry spell",
    "pos": "n.phr.",
    "cn_def": "乾旱期;久旱",
    "en_def": "a period with no rain",
    "sentence": "After a long {{BLANK}}, the farmers were happy to see rain, but the hard ground could not absorb it.",
    "cn": "經過長時間的乾旱期,農夫們很高興看到下雨,但乾硬的土地無法吸收雨水。"
  }
];

const MCQS = [
  {
    "q": "It was a _____ afternoon at the bus stop, and an old man nearly fainted before the bus finally arrived.",
    "options": [
      "exponential",
      "renewable",
      "sweltering",
      "feasible"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "During the _____ last August, hospitals were full of elderly patients, so the city opened cool rooms in libraries.",
    "options": [
      "greenwashing",
      "heatwave",
      "soot",
      "migrant"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Schools were closed because a strong _____ was approaching, but my little brother was disappointed that it only rained a little.",
    "options": [
      "typhoon",
      "surge",
      "precipitation",
      "Arctic"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The _____ destroyed hundreds of homes in Florida, and many families had to live in hotels for months.",
    "options": [
      "summit",
      "levee",
      "ventilation",
      "hurricane"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A powerful _____ hit the coast of Bangladesh, but early warnings helped thousands of people reach safety in time.",
    "options": [
      "cyclone",
      "mosquito",
      "humidity",
      "exhaust"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The _____ lifted cars into the air, yet the family survived because they hid in the basement.",
    "options": [
      "tide",
      "insulation",
      "tornado",
      "tailpipe"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The _____ pushed seawater two metres into the streets, so many ground-floor shops were completely ruined.",
    "options": [
      "thermal expansion",
      "storm surge",
      "a race against time",
      "contingency plan"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Heavy rain _____ the underground car park, and dozens of cars were stuck under the water until the next day.",
    "options": [
      "compost",
      "augment",
      "quantify",
      "flood"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "We were caught in a sudden _____ on the way home, and our school bags were completely soaked.",
    "options": [
      "magnitude",
      "shade",
      "downpour",
      "liability"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "_____ rain fell for twelve hours, so the river rose quickly and the bridge had to be closed.",
    "options": [
      "so-called",
      "Antarctic",
      "atmospheric",
      "torrential"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "A _____ blocked the mountain road after the typhoon, and the villagers had no fresh food for a week.",
    "options": [
      "justice",
      "landslide",
      "trajectory",
      "preparedness"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The hillside had lost its trees, so the heavy rain caused a _____ that buried several houses.",
    "options": [
      "mudslide",
      "shade",
      "rainwater",
      "humidity"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Warmer winters make the snow less stable, so the risk of an _____ is higher for skiers in spring.",
    "options": [
      "reservoir",
      "metric",
      "avalanche",
      "accord"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The _____ closed the airport for two days, and thousands of travellers slept on the floor of the terminal.",
    "options": [
      "rationale",
      "grid",
      "algae",
      "blizzard"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "A sudden _____ damaged the fruit on the trees, so the farmer lost almost half of his apples.",
    "options": [
      "hailstorm",
      "drainage",
      "grid",
      "trajectory"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "_____ struck a tree near the playground, so the teacher told all the students to go inside at once.",
    "options": [
      "latitude",
      "lightning",
      "range",
      "desalination"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Afternoon _____ are common in Taipei in summer, so I always keep an umbrella in my backpack.",
    "options": [
      "thunderstorm",
      "scale",
      "atmosphere",
      "insurance"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "A strong _____ of wind turned my umbrella inside out, and everyone at the bus stop started laughing.",
    "options": [
      "malaria",
      "gust",
      "acidification",
      "biofuel"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Officials decided to _____ the coastal village before the storm arrived, but some old fishermen refused to leave.",
    "options": [
      "exemplify",
      "elevate",
      "emit",
      "evacuate"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The school practises an _____ plan twice a year, so every student knows which exit to use in an emergency.",
    "options": [
      "ventilation",
      "convention",
      "evacuation",
      "condensation"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The town turned the sports centre into a _____, and volunteers gave out blankets and hot meals all night.",
    "options": [
      "insurance",
      "shelter",
      "paradigm",
      "evaporation"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The storm was very strong, but there were few _____ because people had left the area in time.",
    "options": [
      "protest",
      "acidification",
      "benchmark",
      "casualty"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The flood was the worst _____ in the town's history, and it took three years to rebuild the main street.",
    "options": [
      "benchmark",
      "embankment",
      "disaster",
      "activist"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Scientists warn that warming of three degrees could have _____ effects, so they want governments to act now.",
    "options": [
      "catastrophic",
      "tangible",
      "nuclear",
      "conventional"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The wildfire _____ the small mountain town, but the residents promised to rebuild it together.",
    "options": [
      "inundate",
      "devastate",
      "prevail",
      "soar"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Fallen power lines are a serious _____ after a typhoon, so children should never touch anything on the ground.",
    "options": [
      "levy",
      "rationale",
      "coastline",
      "hazard"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The _____ of strong typhoons has increased in recent years, and insurance companies have raised their prices.",
    "options": [
      "clarity",
      "soot",
      "frequency",
      "petroleum"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Nobody expected the _____ of the flooding, so many families did not move their cars or furniture in time.",
    "options": [
      "severity",
      "reforestation",
      "precipitation",
      "protest"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Two runners suffered from _____ during the summer race, so the organisers moved the next event to early morning.",
    "options": [
      "delegate",
      "heatstroke",
      "petroleum",
      "mosquito"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "After a long _____, the farmers were happy to see rain, but the hard ground could not absorb it.",
    "options": [
      "early warning system",
      "carbon footprint",
      "dry spell",
      "ice sheet"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "sweltering": {
    "pos": "adj.",
    "en_def": "extremely hot and uncomfortable",
    "cn_def": "酷熱難耐的"
  },
  "heatwave": {
    "pos": "n.",
    "en_def": "a period of unusually hot weather",
    "cn_def": "熱浪"
  },
  "typhoon": {
    "pos": "n.",
    "en_def": "a violent tropical storm in the western Pacific",
    "cn_def": "颱風"
  },
  "hurricane": {
    "pos": "n.",
    "en_def": "a violent tropical storm in the Atlantic",
    "cn_def": "颶風"
  },
  "cyclone": {
    "pos": "n.",
    "en_def": "a violent storm with strong circular winds",
    "cn_def": "氣旋;熱帶風暴"
  },
  "tornado": {
    "pos": "n.",
    "en_def": "a narrow, spinning column of wind that destroys things",
    "cn_def": "龍捲風"
  },
  "storm surge": {
    "pos": "n.phr.",
    "en_def": "a sudden rise of sea water pushed by a storm",
    "cn_def": "風暴潮"
  },
  "flood": {
    "pos": "v.",
    "en_def": "to cover an area with water",
    "cn_def": "淹沒;淹水"
  },
  "downpour": {
    "pos": "n.",
    "en_def": "a sudden heavy fall of rain",
    "cn_def": "傾盆大雨"
  },
  "torrential": {
    "pos": "adj.",
    "en_def": "used to describe very heavy rain",
    "cn_def": "(雨)傾盆的;猛烈的"
  },
  "landslide": {
    "pos": "n.",
    "en_def": "a mass of earth and rocks falling down a hill",
    "cn_def": "山崩;土石流"
  },
  "mudslide": {
    "pos": "n.",
    "en_def": "a flow of wet mud down a hill",
    "cn_def": "泥流;土石流"
  },
  "avalanche": {
    "pos": "n.",
    "en_def": "a large amount of snow falling down a mountain",
    "cn_def": "雪崩"
  },
  "blizzard": {
    "pos": "n.",
    "en_def": "a severe snowstorm with strong wind",
    "cn_def": "暴風雪"
  },
  "hailstorm": {
    "pos": "n.",
    "en_def": "a storm in which balls of ice fall from the sky",
    "cn_def": "冰雹暴"
  },
  "lightning": {
    "pos": "n.",
    "en_def": "a bright flash of electricity in the sky during a storm",
    "cn_def": "閃電"
  },
  "thunderstorm": {
    "pos": "n.",
    "en_def": "a storm with thunder, lightning and heavy rain",
    "cn_def": "雷雨"
  },
  "gust": {
    "pos": "n.",
    "en_def": "a sudden strong rush of wind",
    "cn_def": "一陣強風"
  },
  "evacuate": {
    "pos": "v.",
    "en_def": "to move people away from a dangerous place",
    "cn_def": "撤離;疏散"
  },
  "evacuation": {
    "pos": "n.",
    "en_def": "the act of moving people to a safe place",
    "cn_def": "撤離;疏散"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place that protects people from danger or bad weather",
    "cn_def": "避難所"
  },
  "casualty": {
    "pos": "n.",
    "en_def": "a person who is hurt or killed in an accident or disaster",
    "cn_def": "傷亡者"
  },
  "disaster": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "災難"
  },
  "catastrophic": {
    "pos": "adj.",
    "en_def": "causing terrible damage",
    "cn_def": "災難性的"
  },
  "devastate": {
    "pos": "v.",
    "en_def": "to destroy or damage something very badly",
    "cn_def": "摧毀;使荒廢"
  },
  "hazard": {
    "pos": "n.",
    "en_def": "something that may be dangerous",
    "cn_def": "危險;危害"
  },
  "frequency": {
    "pos": "n.",
    "en_def": "how often something happens",
    "cn_def": "頻率"
  },
  "severity": {
    "pos": "n.",
    "en_def": "how serious or bad something is",
    "cn_def": "嚴重程度"
  },
  "heatstroke": {
    "pos": "n.",
    "en_def": "a dangerous illness caused by too much heat",
    "cn_def": "中暑"
  },
  "dry spell": {
    "pos": "n.phr.",
    "en_def": "a period with no rain",
    "cn_def": "乾旱期;久旱"
  },
  "exponential": {
    "pos": "adj.",
    "en_def": "increasing faster and faster",
    "cn_def": "指數型的;急遽增加的"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "able to be replaced naturally, like sun and wind",
    "cn_def": "可再生的"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and practical to do",
    "cn_def": "可行的"
  },
  "greenwashing": {
    "pos": "n.",
    "en_def": "making a product seem better for nature than it really is",
    "cn_def": "漂綠"
  },
  "soot": {
    "pos": "n.",
    "en_def": "black powder made when something is burned",
    "cn_def": "煤灰;煙灰"
  },
  "migrant": {
    "pos": "n.",
    "en_def": "a person who moves to another place to find work or safety",
    "cn_def": "移民;移工"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden large increase",
    "cn_def": "激增;暴增"
  },
  "precipitation": {
    "pos": "n.",
    "en_def": "rain, snow or hail that falls from the sky",
    "cn_def": "降水(量)"
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
  "levee": {
    "pos": "n.",
    "en_def": "a raised bank built beside a river to stop flooding",
    "cn_def": "河堤;防洪堤"
  },
  "ventilation": {
    "pos": "n.",
    "en_def": "the movement of fresh air through a room or building",
    "cn_def": "通風"
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect that bites people",
    "cn_def": "蚊子"
  },
  "humidity": {
    "pos": "n.",
    "en_def": "the amount of water in the air",
    "cn_def": "濕度"
  },
  "exhaust": {
    "pos": "n.",
    "en_def": "waste gas that comes out of an engine",
    "cn_def": "(引擎)廢氣"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea",
    "cn_def": "潮汐;潮水"
  },
  "insulation": {
    "pos": "n.",
    "en_def": "material that stops heat from getting in or out",
    "cn_def": "隔熱(材料)"
  },
  "tailpipe": {
    "pos": "n.",
    "en_def": "the pipe at the back of a car where exhaust comes out",
    "cn_def": "(汽車)排氣管"
  },
  "thermal expansion": {
    "pos": "n.phr.",
    "en_def": "the way water takes up more space when it gets warmer",
    "cn_def": "熱膨脹"
  },
  "a race against time": {
    "pos": "n.phr.",
    "en_def": "a situation where you must work very fast to finish before it is too late",
    "cn_def": "與時間賽跑"
  },
  "contingency plan": {
    "pos": "n.phr.",
    "en_def": "a plan for what to do if something goes wrong",
    "cn_def": "應變計畫"
  },
  "compost": {
    "pos": "v.",
    "en_def": "to turn food and garden waste into natural fertiliser",
    "cn_def": "堆肥"
  },
  "augment": {
    "pos": "v.",
    "en_def": "to increase the size or value of something",
    "cn_def": "增加;擴大"
  },
  "quantify": {
    "pos": "v.",
    "en_def": "to measure something as a number",
    "cn_def": "量化"
  },
  "magnitude": {
    "pos": "n.",
    "en_def": "the great size or importance of something",
    "cn_def": "規模;重要性"
  },
  "shade": {
    "pos": "n.",
    "en_def": "an area that is darker and cooler because the sun cannot reach it",
    "cn_def": "陰涼處;遮蔭"
  },
  "liability": {
    "pos": "n.",
    "en_def": "legal responsibility for something",
    "cn_def": "(法律)責任"
  },
  "so-called": {
    "pos": "adj.",
    "en_def": "used to show that a name may not be accurate",
    "cn_def": "所謂的"
  },
  "antarctic": {
    "pos": "adj.",
    "en_def": "connected with the area around the South Pole",
    "cn_def": "南極的"
  },
  "atmospheric": {
    "pos": "adj.",
    "en_def": "connected with the air around the Earth",
    "cn_def": "大氣的"
  },
  "justice": {
    "pos": "n.",
    "en_def": "fair treatment for everyone",
    "cn_def": "正義;公正"
  },
  "trajectory": {
    "pos": "n.",
    "en_def": "the path or direction of development",
    "cn_def": "軌跡;發展趨勢"
  },
  "preparedness": {
    "pos": "n.",
    "en_def": "the state of being ready for an emergency",
    "cn_def": "準備就緒;防備"
  },
  "rainwater": {
    "pos": "n.",
    "en_def": "water that has fallen as rain",
    "cn_def": "雨水"
  },
  "reservoir": {
    "pos": "n.",
    "en_def": "a large lake used to store water",
    "cn_def": "水庫"
  },
  "metric": {
    "pos": "n.",
    "en_def": "a way of measuring something",
    "cn_def": "指標;衡量標準"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "rationale": {
    "pos": "n.",
    "en_def": "the reasons for a decision",
    "cn_def": "基本原理;理由"
  },
  "grid": {
    "pos": "n.",
    "en_def": "the network of power lines that delivers electricity",
    "cn_def": "電網"
  },
  "algae": {
    "pos": "n.",
    "en_def": "very simple plants that grow in water",
    "cn_def": "藻類"
  },
  "drainage": {
    "pos": "n.",
    "en_def": "the system that carries away extra water",
    "cn_def": "排水(系統)"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "range": {
    "pos": "n.",
    "en_def": "the area where a plant or animal lives",
    "cn_def": "分布範圍"
  },
  "desalination": {
    "pos": "n.",
    "en_def": "the process of removing salt from sea water",
    "cn_def": "海水淡化"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the size or level of something",
    "cn_def": "規模"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the layer of gases around the Earth",
    "cn_def": "大氣層"
  },
  "insurance": {
    "pos": "n.",
    "en_def": "an agreement to pay money if something is damaged or lost",
    "cn_def": "保險"
  },
  "malaria": {
    "pos": "n.",
    "en_def": "a serious disease spread by mosquitoes",
    "cn_def": "瘧疾"
  },
  "acidification": {
    "pos": "n.",
    "en_def": "the process of becoming more acidic",
    "cn_def": "酸化"
  },
  "biofuel": {
    "pos": "n.",
    "en_def": "fuel made from plants or animal waste",
    "cn_def": "生質燃料"
  },
  "exemplify": {
    "pos": "v.",
    "en_def": "to be a typical example of something",
    "cn_def": "作為…的典範"
  },
  "elevate": {
    "pos": "v.",
    "en_def": "to raise something to a higher position",
    "cn_def": "抬高;架高"
  },
  "emit": {
    "pos": "v.",
    "en_def": "to send out gas, heat, light or sound",
    "cn_def": "排放;散發"
  },
  "convention": {
    "pos": "n.",
    "en_def": "a formal agreement between countries",
    "cn_def": "公約"
  },
  "condensation": {
    "pos": "n.",
    "en_def": "water drops that form when warm air touches something cold",
    "cn_def": "凝結(水珠)"
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a typical model or way of thinking",
    "cn_def": "範式;模式"
  },
  "evaporation": {
    "pos": "n.",
    "en_def": "the process of water turning into gas",
    "cn_def": "蒸發(作用)"
  },
  "protest": {
    "pos": "n.",
    "en_def": "a public event where people show they disagree",
    "cn_def": "抗議(活動)"
  },
  "benchmark": {
    "pos": "n.",
    "en_def": "a standard used for comparison",
    "cn_def": "基準;標竿"
  },
  "embankment": {
    "pos": "n.",
    "en_def": "a wall of earth or stone that holds back water",
    "cn_def": "堤防;路堤"
  },
  "activist": {
    "pos": "n.",
    "en_def": "a person who works to bring political or social change",
    "cn_def": "社運人士;行動者"
  },
  "tangible": {
    "pos": "adj.",
    "en_def": "real and able to be seen or measured",
    "cn_def": "具體的;實質的"
  },
  "nuclear": {
    "pos": "adj.",
    "en_def": "using energy from splitting atoms",
    "cn_def": "核能的"
  },
  "conventional": {
    "pos": "adj.",
    "en_def": "normal and traditional",
    "cn_def": "傳統的;常規的"
  },
  "inundate": {
    "pos": "v.",
    "en_def": "to flood an area with water",
    "cn_def": "淹沒;泛濫"
  },
  "prevail": {
    "pos": "v.",
    "en_def": "to be common or most powerful at a certain time",
    "cn_def": "盛行;占上風"
  },
  "soar": {
    "pos": "v.",
    "en_def": "to rise very quickly to a high level",
    "cn_def": "飆升;猛增"
  },
  "levy": {
    "pos": "n.",
    "en_def": "an official charge or tax",
    "cn_def": "徵收的稅;稅款"
  },
  "coastline": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea",
    "cn_def": "海岸線"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清楚;明確"
  },
  "petroleum": {
    "pos": "n.",
    "en_def": "oil from under the ground used to make fuel and plastic",
    "cn_def": "石油"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "delegate": {
    "pos": "n.",
    "en_def": "a person sent to a meeting to represent others",
    "cn_def": "代表"
  },
  "early warning system": {
    "pos": "n.phr.",
    "en_def": "a system that tells people about danger before it arrives",
    "cn_def": "預警系統"
  },
  "carbon footprint": {
    "pos": "n.phr.",
    "en_def": "the amount of carbon a person or activity produces",
    "cn_def": "碳足跡"
  },
  "ice sheet": {
    "pos": "n.phr.",
    "en_def": "a very large, thick layer of ice covering land",
    "cn_def": "冰原;冰蓋"
  }
};

const EXTRA_GLOSSES = {};
