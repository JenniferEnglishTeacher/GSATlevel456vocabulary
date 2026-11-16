// Topic 3 Subunit 5 Quiz Data: Impacts on People & Nature 對人類與自然的影響
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S05 - Impacts on People & Nature 對人類與自然的影響",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "famine",
    "pos": "n.",
    "cn_def": "饑荒",
    "en_def": "a serious lack of food in a large area",
    "sentence": "Years without rain led to {{BLANK}} in parts of East Africa, so aid groups sent food and clean water.",
    "cn": "多年不下雨導致東非部分地區發生饑荒,所以援助團體送去了食物和乾淨的水。"
  },
  {
    "word": "scarcity",
    "pos": "n.",
    "cn_def": "缺乏;短缺",
    "en_def": "a situation in which there is not enough of something",
    "sentence": "Water {{BLANK}} is a growing problem in many cities, and some families can only use tap water on certain days.",
    "cn": "水資源短缺在許多城市是一個日益嚴重的問題,有些家庭只能在特定日子使用自來水。"
  },
  {
    "word": "water stress",
    "pos": "n.phr.",
    "cn_def": "缺水壓力;水資源壓力",
    "en_def": "when people need more water than is available",
    "sentence": "Regions under high {{BLANK}} must save every drop, so farmers there are switching to crops that need less water.",
    "cn": "處於高度缺水壓力的地區必須節約每一滴水,所以那裡的農夫正改種需水量較少的作物。"
  },
  {
    "word": "crop failure",
    "pos": "n.phr.",
    "cn_def": "作物歉收",
    "en_def": "when crops do not grow well enough to harvest",
    "sentence": "A {{BLANK}} can push food prices up quickly, and poor families then have to spend more on rice and vegetables.",
    "cn": "作物歉收可能讓食物價格迅速上漲,而貧窮家庭就得花更多錢在米和蔬菜上。"
  },
  {
    "word": "yield",
    "pos": "n.",
    "cn_def": "產量;收成",
    "en_def": "the amount of crops a farm produces",
    "sentence": "The rice {{BLANK}} fell sharply this year because of the heat, so the price of a bowl of rice went up.",
    "cn": "由於高溫,今年稻米的產量大幅下降,所以一碗飯的價格上漲了。"
  },
  {
    "word": "heat-related",
    "pos": "adj.",
    "cn_def": "與高溫相關的",
    "en_def": "caused by very hot weather",
    "sentence": "Doctors reported more {{BLANK}} illnesses this summer, and most of the patients were outdoor workers or elderly people.",
    "cn": "醫生回報今年夏天與高溫相關的疾病增加了,而大多數病人是戶外工作者或年長者。"
  },
  {
    "word": "malaria",
    "pos": "n.",
    "cn_def": "瘧疾",
    "en_def": "a serious disease spread by mosquitoes",
    "sentence": "{{BLANK}} used to be rare in the highlands of Kenya, but warmer weather now lets mosquitoes live there.",
    "cn": "瘧疾過去在肯亞高地很少見,但較暖的天氣現在讓蚊子能在那裡生存。"
  },
  {
    "word": "mosquito",
    "pos": "n.",
    "cn_def": "蚊子",
    "en_def": "a small flying insect that bites people",
    "sentence": "Every summer the city sprays areas where {{BLANK}} breed, because they can spread dengue fever.",
    "cn": "每年夏天市政府都會在蚊子繁殖的地方噴藥,因為牠們會傳播登革熱。"
  },
  {
    "word": "infectious",
    "pos": "adj.",
    "cn_def": "傳染性的",
    "en_def": "able to spread from one person to another",
    "sentence": "Floods can spread {{BLANK}} diseases quickly, so health workers handed out clean water and medicine after the storm.",
    "cn": "洪水可能讓傳染性疾病迅速擴散,所以暴風雨過後衛生人員發放了乾淨的水和藥品。"
  },
  {
    "word": "refugee",
    "pos": "n.",
    "cn_def": "難民",
    "en_def": "a person forced to leave their home or country",
    "sentence": "Some experts believe that climate {{BLANK}} will increase in the future, because rising seas and droughts make places unsafe.",
    "cn": "一些專家認為氣候難民未來會增加,因為上升的海平面和乾旱讓一些地方變得不安全。"
  },
  {
    "word": "displacement",
    "pos": "n.",
    "cn_def": "流離失所;被迫遷移",
    "en_def": "the forced movement of people from their homes",
    "sentence": "The floods caused the {{BLANK}} of thousands of families, and many of them still live in temporary camps.",
    "cn": "這場洪水造成數千個家庭流離失所,其中許多人至今仍住在臨時營地。"
  },
  {
    "word": "migrant",
    "pos": "n.",
    "cn_def": "移民;移工",
    "en_def": "a person who moves to another place to find work or safety",
    "sentence": "Many {{BLANK}} left their dry farms and moved to the city, but finding a job there was not easy.",
    "cn": "許多移民離開了他們乾旱的農地搬到城市,但在那裡找工作並不容易。"
  },
  {
    "word": "homeless",
    "pos": "adj.",
    "cn_def": "無家可歸的",
    "en_def": "having no place to live",
    "sentence": "The typhoon left hundreds of people {{BLANK}}, so local temples opened their doors and offered free meals.",
    "cn": "颱風讓數百人無家可歸,所以當地廟宇敞開大門並提供免費餐點。"
  },
  {
    "word": "property",
    "pos": "n.",
    "cn_def": "房地產;財產",
    "en_def": "buildings and land that someone owns",
    "sentence": "{{BLANK}} near the beach used to be very valuable, but buyers are now worried about flooding and rising seas.",
    "cn": "海灘附近的房地產過去非常值錢,但買家現在擔心淹水和海平面上升。"
  },
  {
    "word": "insurance",
    "pos": "n.",
    "cn_def": "保險",
    "en_def": "an agreement to pay money if something is damaged or lost",
    "sentence": "After three floods in five years, the company refused to sell {{BLANK}} to homeowners in that area.",
    "cn": "五年內發生三次水災之後,這家公司拒絕賣保險給那個地區的屋主。"
  },
  {
    "word": "premium",
    "pos": "n.",
    "cn_def": "保費",
    "en_def": "the amount paid regularly for insurance",
    "sentence": "Our home insurance {{BLANK}} doubled this year, because the company now sees our street as a high-risk area.",
    "cn": "我們的房屋保險保費今年翻倍了,因為保險公司現在把我們這條街視為高風險地區。"
  },
  {
    "word": "damage",
    "pos": "n.",
    "cn_def": "損害;損壞",
    "en_def": "physical harm that makes something less useful or valuable",
    "sentence": "The storm caused serious {{BLANK}} to the school roof, so classes moved to the library for two weeks.",
    "cn": "暴風雨對學校屋頂造成了嚴重的損害,所以上課地點移到圖書館兩週。"
  },
  {
    "word": "poverty",
    "pos": "n.",
    "cn_def": "貧窮",
    "en_def": "the state of being very poor",
    "sentence": "Climate change can push families into {{BLANK}}, because one bad harvest may take away a whole year's income.",
    "cn": "氣候變遷可能把家庭推向貧窮,因為一次歉收就可能奪走一整年的收入。"
  },
  {
    "word": "food security",
    "pos": "n.phr.",
    "cn_def": "糧食安全",
    "en_def": "having enough safe, healthy food to eat",
    "sentence": "Taiwan imports most of its wheat, so {{BLANK}} is an important topic when global harvests fail.",
    "cn": "台灣大部分的小麥都靠進口,所以當全球收成不佳時,糧食安全是一個重要的議題。"
  },
  {
    "word": "malnourished",
    "pos": "adj.",
    "cn_def": "營養不良的",
    "en_def": "weak or ill because of not eating enough healthy food",
    "sentence": "After two failed harvests, many children in the village were {{BLANK}}, so a charity started a free lunch programme.",
    "cn": "連續兩次歉收後,村裡許多孩子營養不良,所以一個慈善團體開始了免費午餐計畫。"
  },
  {
    "word": "wither",
    "pos": "v.",
    "cn_def": "枯萎",
    "en_def": "to become dry and weak and start to die",
    "sentence": "The vegetables in our garden began to {{BLANK}} in the heat, so my mother watered them twice a day.",
    "cn": "我們菜園裡的蔬菜在高溫中開始枯萎,所以我媽媽一天澆兩次水。"
  },
  {
    "word": "parched",
    "pos": "adj.",
    "cn_def": "乾裂的;焦乾的",
    "en_def": "very dry because of no rain",
    "sentence": "The fields were brown and {{BLANK}} after months without rain, and the cows had little grass to eat.",
    "cn": "幾個月沒下雨後,田地變得又黃又乾裂,牛群幾乎沒有草可吃。"
  },
  {
    "word": "desertification",
    "pos": "n.",
    "cn_def": "沙漠化",
    "en_def": "the process of land slowly becoming desert",
    "sentence": "{{BLANK}} is spreading in northern China, so millions of trees have been planted to stop the sand.",
    "cn": "沙漠化正在中國北方擴散,所以已經種了數百萬棵樹來阻擋沙子。"
  },
  {
    "word": "algae",
    "pos": "n.",
    "cn_def": "藻類",
    "en_def": "very simple plants that grow in water",
    "sentence": "Warm water caused {{BLANK}} to grow quickly in the lake, and the fish died because there was not enough oxygen.",
    "cn": "溫暖的水讓湖中的藻類迅速生長,魚群因為氧氣不足而死亡。"
  },
  {
    "word": "range",
    "pos": "n.",
    "cn_def": "分布範圍",
    "en_def": "the area where a plant or animal lives",
    "sentence": "The {{BLANK}} of this butterfly has moved two hundred kilometres north, because its old home has become too warm.",
    "cn": "這種蝴蝶的分布範圍已經向北移動了兩百公里,因為牠原本的家變得太熱了。"
  },
  {
    "word": "heat island",
    "pos": "n.phr.",
    "cn_def": "熱島",
    "en_def": "a city area much warmer than the countryside around it",
    "sentence": "The city centre is a {{BLANK}} in summer, because concrete and cars trap heat even at night.",
    "cn": "市中心在夏天是一個熱島,因為混凝土和汽車即使在夜間也會困住熱能。"
  },
  {
    "word": "hardship",
    "pos": "n.",
    "cn_def": "苦難;困境",
    "en_def": "a difficult situation, often without enough money or food",
    "sentence": "The drought brought great {{BLANK}} to farming families, but neighbours shared water and food to help each other.",
    "cn": "乾旱為務農家庭帶來極大的困境,但鄰居們分享水和食物互相幫助。"
  },
  {
    "word": "uninhabitable",
    "pos": "adj.",
    "cn_def": "不適合居住的",
    "en_def": "not safe or suitable for people to live in",
    "sentence": "Some scientists fear that parts of the Middle East could become {{BLANK}} in summer, because the heat will be too extreme.",
    "cn": "一些科學家擔心中東部分地區在夏天可能變得不適合居住,因為高溫將過於極端。"
  }
];

const MCQS = [
  {
    "q": "Years without rain led to _____ in parts of East Africa, so aid groups sent food and clean water.",
    "options": [
      "rainwater",
      "famine",
      "concession",
      "equity"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Water _____ is a growing problem in many cities, and some families can only use tap water on certain days.",
    "options": [
      "scarcity",
      "meltwater",
      "evaporation",
      "clarity"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Regions under high _____ must save every drop, so farmers there are switching to crops that need less water.",
    "options": [
      "extreme weather",
      "tipping point",
      "water stress",
      "carbon tax"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "A _____ can push food prices up quickly, and poor families then have to spend more on rice and vegetables.",
    "options": [
      "carbon tax",
      "dry spell",
      "a ticking time bomb",
      "crop failure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The rice _____ fell sharply this year because of the heat, so the price of a bowl of rice went up.",
    "options": [
      "moisture",
      "yield",
      "latitude",
      "hazard"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Doctors reported more _____ illnesses this summer, and most of the patients were outdoor workers or elderly people.",
    "options": [
      "heat-related",
      "binding",
      "novel",
      "conclusive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "_____ used to be rare in the highlands of Kenya, but warmer weather now lets mosquitoes live there.",
    "options": [
      "anomaly",
      "summit",
      "malaria",
      "attitude"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Every summer the city sprays areas where _____ breed, because they can spread dengue fever.",
    "options": [
      "attitude",
      "rationale",
      "seawall",
      "mosquito"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Floods can spread _____ diseases quickly, so health workers handed out clean water and medicine after the storm.",
    "options": [
      "cumulative",
      "ultraviolet",
      "infectious",
      "renewable"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Some experts believe that climate _____ will increase in the future, because rising seas and droughts make places unsafe.",
    "options": [
      "refugee",
      "trajectory",
      "meltwater",
      "threshold"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The floods caused the _____ of thousands of families, and many of them still live in temporary camps.",
    "options": [
      "dissent",
      "displacement",
      "availability",
      "nuance"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Many _____ left their dry farms and moved to the city, but finding a job there was not easy.",
    "options": [
      "avalanche",
      "drainage",
      "liability",
      "migrant"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The typhoon left hundreds of people _____, so local temples opened their doors and offered free meals.",
    "options": [
      "drastic",
      "erratic",
      "homeless",
      "ultraviolet"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "_____ near the beach used to be very valuable, but buyers are now worried about flooding and rising seas.",
    "options": [
      "property",
      "parameter",
      "temperature",
      "coal"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "After three floods in five years, the company refused to sell _____ to homeowners in that area.",
    "options": [
      "desalination",
      "insurance",
      "hurricane",
      "shade"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our home insurance _____ doubled this year, because the company now sees our street as a high-risk area.",
    "options": [
      "availability",
      "soot",
      "tornado",
      "premium"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The storm caused serious _____ to the school roof, so classes moved to the library for two weeks.",
    "options": [
      "emission",
      "reforestation",
      "damage",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Climate change can push families into _____, because one bad harvest may take away a whole year's income.",
    "options": [
      "poverty",
      "avalanche",
      "lightning",
      "reforestation"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Taiwan imports most of its wheat, so _____ is an important topic when global harvests fail.",
    "options": [
      "contingency plan",
      "solar panel",
      "carbon capture",
      "food security"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "After two failed harvests, many children in the village were _____, so a charity started a free lunch programme.",
    "options": [
      "sporadic",
      "malnourished",
      "stringent",
      "exponential"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The vegetables in our garden began to _____ in the heat, so my mother watered them twice a day.",
    "options": [
      "hinder",
      "thaw",
      "wither",
      "foster"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The fields were brown and _____ after months without rain, and the cows had little grass to eat.",
    "options": [
      "orthodox",
      "fragile",
      "aggregate",
      "parched"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "_____ is spreading in northern China, so millions of trees have been planted to stop the sand.",
    "options": [
      "desertification",
      "summit",
      "regime",
      "accord"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Warm water caused _____ to grow quickly in the lake, and the fish died because there was not enough oxygen.",
    "options": [
      "iceberg",
      "algae",
      "aerosol",
      "hurricane"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The _____ of this butterfly has moved two hundred kilometres north, because its old home has become too warm.",
    "options": [
      "dissent",
      "landslide",
      "range",
      "downpour"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The city centre is a _____ in summer, because concrete and cars trap heat even at night.",
    "options": [
      "a race against time",
      "heat island",
      "carbon footprint",
      "carbon dioxide"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The drought brought great _____ to farming families, but neighbours shared water and food to help each other.",
    "options": [
      "hardship",
      "accord",
      "paradigm",
      "petroleum"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Some scientists fear that parts of the Middle East could become _____ in summer, because the heat will be too extreme.",
    "options": [
      "renewable",
      "holistic",
      "forthcoming",
      "uninhabitable"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "famine": {
    "pos": "n.",
    "en_def": "a serious lack of food in a large area",
    "cn_def": "饑荒"
  },
  "scarcity": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough of something",
    "cn_def": "缺乏;短缺"
  },
  "water stress": {
    "pos": "n.phr.",
    "en_def": "when people need more water than is available",
    "cn_def": "缺水壓力;水資源壓力"
  },
  "crop failure": {
    "pos": "n.phr.",
    "en_def": "when crops do not grow well enough to harvest",
    "cn_def": "作物歉收"
  },
  "yield": {
    "pos": "n.",
    "en_def": "the amount of crops a farm produces",
    "cn_def": "產量;收成"
  },
  "heat-related": {
    "pos": "adj.",
    "en_def": "caused by very hot weather",
    "cn_def": "與高溫相關的"
  },
  "malaria": {
    "pos": "n.",
    "en_def": "a serious disease spread by mosquitoes",
    "cn_def": "瘧疾"
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect that bites people",
    "cn_def": "蚊子"
  },
  "infectious": {
    "pos": "adj.",
    "en_def": "able to spread from one person to another",
    "cn_def": "傳染性的"
  },
  "refugee": {
    "pos": "n.",
    "en_def": "a person forced to leave their home or country",
    "cn_def": "難民"
  },
  "displacement": {
    "pos": "n.",
    "en_def": "the forced movement of people from their homes",
    "cn_def": "流離失所;被迫遷移"
  },
  "migrant": {
    "pos": "n.",
    "en_def": "a person who moves to another place to find work or safety",
    "cn_def": "移民;移工"
  },
  "homeless": {
    "pos": "adj.",
    "en_def": "having no place to live",
    "cn_def": "無家可歸的"
  },
  "property": {
    "pos": "n.",
    "en_def": "buildings and land that someone owns",
    "cn_def": "房地產;財產"
  },
  "insurance": {
    "pos": "n.",
    "en_def": "an agreement to pay money if something is damaged or lost",
    "cn_def": "保險"
  },
  "premium": {
    "pos": "n.",
    "en_def": "the amount paid regularly for insurance",
    "cn_def": "保費"
  },
  "damage": {
    "pos": "n.",
    "en_def": "physical harm that makes something less useful or valuable",
    "cn_def": "損害;損壞"
  },
  "poverty": {
    "pos": "n.",
    "en_def": "the state of being very poor",
    "cn_def": "貧窮"
  },
  "food security": {
    "pos": "n.phr.",
    "en_def": "having enough safe, healthy food to eat",
    "cn_def": "糧食安全"
  },
  "malnourished": {
    "pos": "adj.",
    "en_def": "weak or ill because of not eating enough healthy food",
    "cn_def": "營養不良的"
  },
  "wither": {
    "pos": "v.",
    "en_def": "to become dry and weak and start to die",
    "cn_def": "枯萎"
  },
  "parched": {
    "pos": "adj.",
    "en_def": "very dry because of no rain",
    "cn_def": "乾裂的;焦乾的"
  },
  "desertification": {
    "pos": "n.",
    "en_def": "the process of land slowly becoming desert",
    "cn_def": "沙漠化"
  },
  "algae": {
    "pos": "n.",
    "en_def": "very simple plants that grow in water",
    "cn_def": "藻類"
  },
  "range": {
    "pos": "n.",
    "en_def": "the area where a plant or animal lives",
    "cn_def": "分布範圍"
  },
  "heat island": {
    "pos": "n.phr.",
    "en_def": "a city area much warmer than the countryside around it",
    "cn_def": "熱島"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a difficult situation, often without enough money or food",
    "cn_def": "苦難;困境"
  },
  "uninhabitable": {
    "pos": "adj.",
    "en_def": "not safe or suitable for people to live in",
    "cn_def": "不適合居住的"
  },
  "rainwater": {
    "pos": "n.",
    "en_def": "water that has fallen as rain",
    "cn_def": "雨水"
  },
  "concession": {
    "pos": "n.",
    "en_def": "something you agree to give up in a discussion",
    "cn_def": "讓步"
  },
  "equity": {
    "pos": "n.",
    "en_def": "fairness and equal treatment",
    "cn_def": "公平;公正"
  },
  "meltwater": {
    "pos": "n.",
    "en_def": "water from melting snow or ice",
    "cn_def": "融水;雪水"
  },
  "evaporation": {
    "pos": "n.",
    "en_def": "the process of water turning into gas",
    "cn_def": "蒸發(作用)"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清楚;明確"
  },
  "extreme weather": {
    "pos": "n.phr.",
    "en_def": "very unusual and dangerous weather",
    "cn_def": "極端天氣"
  },
  "tipping point": {
    "pos": "n.phr.",
    "en_def": "the moment when a small change causes a big, sudden effect",
    "cn_def": "臨界點;轉捩點"
  },
  "carbon tax": {
    "pos": "n.phr.",
    "en_def": "a charge on fuels that produce carbon",
    "cn_def": "碳稅"
  },
  "dry spell": {
    "pos": "n.phr.",
    "en_def": "a period with no rain",
    "cn_def": "乾旱期;久旱"
  },
  "a ticking time bomb": {
    "pos": "n.phr.",
    "en_def": "a problem that will become very serious soon",
    "cn_def": "定時炸彈;隨時會爆發的問題"
  },
  "moisture": {
    "pos": "n.",
    "en_def": "a small amount of water in the air or in something",
    "cn_def": "濕氣;水分"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "hazard": {
    "pos": "n.",
    "en_def": "something that may be dangerous",
    "cn_def": "危險;危害"
  },
  "binding": {
    "pos": "adj.",
    "en_def": "that must be obeyed by law",
    "cn_def": "具有約束力的"
  },
  "novel": {
    "pos": "adj.",
    "en_def": "new and different",
    "cn_def": "新穎的"
  },
  "conclusive": {
    "pos": "adj.",
    "en_def": "proving something without doubt",
    "cn_def": "確鑿的;決定性的"
  },
  "anomaly": {
    "pos": "n.",
    "en_def": "something that is different from what is normal",
    "cn_def": "異常(現象)"
  },
  "summit": {
    "pos": "n.",
    "en_def": "an important meeting between leaders",
    "cn_def": "高峰會"
  },
  "attitude": {
    "pos": "n.",
    "en_def": "the way you think or feel about something",
    "cn_def": "態度"
  },
  "rationale": {
    "pos": "n.",
    "en_def": "the reasons for a decision",
    "cn_def": "基本原理;理由"
  },
  "seawall": {
    "pos": "n.",
    "en_def": "a strong wall built to stop the sea from flooding land",
    "cn_def": "海堤"
  },
  "cumulative": {
    "pos": "adj.",
    "en_def": "increasing by adding one thing after another",
    "cn_def": "累積的"
  },
  "ultraviolet": {
    "pos": "adj.",
    "en_def": "describing invisible light from the sun that can burn skin",
    "cn_def": "紫外線的"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "able to be replaced naturally, like sun and wind",
    "cn_def": "可再生的"
  },
  "trajectory": {
    "pos": "n.",
    "en_def": "the path or direction of development",
    "cn_def": "軌跡;發展趨勢"
  },
  "threshold": {
    "pos": "n.",
    "en_def": "the level at which something starts to happen",
    "cn_def": "門檻;臨界點"
  },
  "dissent": {
    "pos": "n.",
    "en_def": "strong disagreement with an official opinion",
    "cn_def": "異議;不同意見"
  },
  "availability": {
    "pos": "n.",
    "en_def": "how easy something is to get or use",
    "cn_def": "可取得性;供應"
  },
  "nuance": {
    "pos": "n.",
    "en_def": "a small but important difference in meaning",
    "cn_def": "細微差別"
  },
  "avalanche": {
    "pos": "n.",
    "en_def": "a large amount of snow falling down a mountain",
    "cn_def": "雪崩"
  },
  "drainage": {
    "pos": "n.",
    "en_def": "the system that carries away extra water",
    "cn_def": "排水(系統)"
  },
  "liability": {
    "pos": "n.",
    "en_def": "legal responsibility for something",
    "cn_def": "(法律)責任"
  },
  "drastic": {
    "pos": "adj.",
    "en_def": "extreme and having a strong effect",
    "cn_def": "激烈的;大幅的"
  },
  "erratic": {
    "pos": "adj.",
    "en_def": "changing often in a way that cannot be predicted",
    "cn_def": "不穩定的;無規律的"
  },
  "parameter": {
    "pos": "n.",
    "en_def": "a limit or rule that controls how something is done",
    "cn_def": "參數;界限"
  },
  "temperature": {
    "pos": "n.",
    "en_def": "how hot or cold something is",
    "cn_def": "溫度;氣溫"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black rock burned to make heat or electricity",
    "cn_def": "煤"
  },
  "desalination": {
    "pos": "n.",
    "en_def": "the process of removing salt from sea water",
    "cn_def": "海水淡化"
  },
  "hurricane": {
    "pos": "n.",
    "en_def": "a violent tropical storm in the Atlantic",
    "cn_def": "颶風"
  },
  "shade": {
    "pos": "n.",
    "en_def": "an area that is darker and cooler because the sun cannot reach it",
    "cn_def": "陰涼處;遮蔭"
  },
  "soot": {
    "pos": "n.",
    "en_def": "black powder made when something is burned",
    "cn_def": "煤灰;煙灰"
  },
  "tornado": {
    "pos": "n.",
    "en_def": "a narrow, spinning column of wind that destroys things",
    "cn_def": "龍捲風"
  },
  "emission": {
    "pos": "n.",
    "en_def": "gas or smoke that is sent into the air",
    "cn_def": "排放(物)"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "lightning": {
    "pos": "n.",
    "en_def": "a bright flash of electricity in the sky during a storm",
    "cn_def": "閃電"
  },
  "contingency plan": {
    "pos": "n.phr.",
    "en_def": "a plan for what to do if something goes wrong",
    "cn_def": "應變計畫"
  },
  "solar panel": {
    "pos": "n.phr.",
    "en_def": "a flat device that turns sunlight into electricity",
    "cn_def": "太陽能板"
  },
  "carbon capture": {
    "pos": "n.phr.",
    "en_def": "technology that catches carbon dioxide and stores it",
    "cn_def": "碳捕捉"
  },
  "sporadic": {
    "pos": "adj.",
    "en_def": "happening only sometimes",
    "cn_def": "零星的;偶發的"
  },
  "stringent": {
    "pos": "adj.",
    "en_def": "very strict",
    "cn_def": "嚴格的"
  },
  "exponential": {
    "pos": "adj.",
    "en_def": "increasing faster and faster",
    "cn_def": "指數型的;急遽增加的"
  },
  "hinder": {
    "pos": "v.",
    "en_def": "to make it difficult for something to happen",
    "cn_def": "阻礙"
  },
  "thaw": {
    "pos": "v.",
    "en_def": "to change from ice to water; to stop being frozen",
    "cn_def": "解凍;融化"
  },
  "foster": {
    "pos": "v.",
    "en_def": "to help something develop",
    "cn_def": "促進;培養"
  },
  "orthodox": {
    "pos": "adj.",
    "en_def": "generally accepted as correct",
    "cn_def": "正統的;傳統的"
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken or damaged",
    "cn_def": "脆弱的"
  },
  "aggregate": {
    "pos": "adj.",
    "en_def": "formed by adding together several amounts",
    "cn_def": "總計的;合計的"
  },
  "regime": {
    "pos": "n.",
    "en_def": "a system of rules or government",
    "cn_def": "體制;制度"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "iceberg": {
    "pos": "n.",
    "en_def": "a huge piece of ice floating in the sea",
    "cn_def": "冰山"
  },
  "aerosol": {
    "pos": "n.",
    "en_def": "tiny drops or bits floating in the air",
    "cn_def": "氣溶膠;懸浮微粒"
  },
  "landslide": {
    "pos": "n.",
    "en_def": "a mass of earth and rocks falling down a hill",
    "cn_def": "山崩;土石流"
  },
  "downpour": {
    "pos": "n.",
    "en_def": "a sudden heavy fall of rain",
    "cn_def": "傾盆大雨"
  },
  "a race against time": {
    "pos": "n.phr.",
    "en_def": "a situation where you must work very fast to finish before it is too late",
    "cn_def": "與時間賽跑"
  },
  "carbon footprint": {
    "pos": "n.phr.",
    "en_def": "the amount of carbon a person or activity produces",
    "cn_def": "碳足跡"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "the gas CO2, produced when fuel is burned",
    "cn_def": "二氧化碳"
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a typical model or way of thinking",
    "cn_def": "範式;模式"
  },
  "petroleum": {
    "pos": "n.",
    "en_def": "oil from under the ground used to make fuel and plastic",
    "cn_def": "石油"
  },
  "holistic": {
    "pos": "adj.",
    "en_def": "looking at the whole situation, not just parts",
    "cn_def": "全面的;整體的"
  },
  "forthcoming": {
    "pos": "adj.",
    "en_def": "going to happen soon",
    "cn_def": "即將到來的"
  }
};

const EXTRA_GLOSSES = {};
