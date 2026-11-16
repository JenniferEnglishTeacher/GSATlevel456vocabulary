// Topic 11 Subunit 12 Quiz Data: Academic Words 學術單字 5 (prohibitive – succulent)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S12 - Academic Words 學術單字 5 (prohibitive – succulent)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "prohibitive",
    "pos": "adj.",
    "cn_def": "高昂得令人卻步的",
    "en_def": "so expensive that people cannot afford it",
    "sentence": "The cost of a vertical farm is {{BLANK}} for most small farmers, so only large companies can build one.",
    "cn": "垂直農場的成本對大多數小農來說高得令人卻步，所以只有大公司蓋得起。"
  },
  {
    "word": "prominence",
    "pos": "n.",
    "cn_def": "顯著；重要地位",
    "en_def": "the state of being important or well known",
    "sentence": "Plant-based food has gained {{BLANK}} in recent years, and even fast-food chains now offer vegetarian burgers.",
    "cn": "近年來植物性食品逐漸取得重要地位，而且連速食連鎖店現在都提供素食漢堡。"
  },
  {
    "word": "proprietary",
    "pos": "adj.",
    "cn_def": "專利的；專有的",
    "en_def": "owned by a company and protected by law",
    "sentence": "The company keeps its sauce recipe {{BLANK}}, so only three people in the factory know all the ingredients.",
    "cn": "這家公司把醬料配方列為專有機密，所以工廠裡只有三個人知道全部的成分。"
  },
  {
    "word": "prudence",
    "pos": "n.",
    "cn_def": "審慎；謹慎",
    "en_def": "careful and sensible judgement",
    "sentence": "Farmers show {{BLANK}} by saving part of their seeds every year, so they can replant if a typhoon destroys the crop.",
    "cn": "農民每年保留一部分種子，展現了他們的審慎，這樣如果颱風摧毀作物，他們就能重新播種。"
  },
  {
    "word": "reallocate",
    "pos": "v.",
    "cn_def": "重新分配",
    "en_def": "to give something to a different person or purpose",
    "sentence": "The government decided to {{BLANK}} water from factories to farms during the drought, but factory owners were unhappy.",
    "cn": "政府決定在乾旱期間把工廠的用水重新分配給農場，但工廠老闆們很不高興。"
  },
  {
    "word": "reciprocity",
    "pos": "n.",
    "cn_def": "互惠",
    "en_def": "exchanging things with others for mutual benefit",
    "sentence": "Village life was based on {{BLANK}}, because neighbours helped each other at harvest time and shared food.",
    "cn": "鄉村生活建立在互惠的基礎上，因為鄰居們在收成時互相幫忙並分享食物。"
  },
  {
    "word": "recuperate",
    "pos": "v.",
    "cn_def": "恢復；復原",
    "en_def": "to recover after an illness or a difficult time",
    "sentence": "The land needs a few years to {{BLANK}} after the flood, so the farmers are growing grass there for now.",
    "cn": "洪水過後，這塊土地需要幾年時間來恢復，所以農民目前在那裡種草。"
  },
  {
    "word": "redistribute",
    "pos": "v.",
    "cn_def": "重新分配",
    "en_def": "to share something out again in a different way",
    "sentence": "The app helps shops {{BLANK}} unsold food to charities, so less bread and fruit end up in the bin.",
    "cn": "這款應用程式幫助商店把沒賣完的食物重新分配給慈善機構，所以較少的麵包和水果最後被丟進垃圾桶。"
  },
  {
    "word": "regress",
    "pos": "v.",
    "cn_def": "倒退；退步",
    "en_def": "to go back to an earlier, worse state",
    "sentence": "Without new young farmers, the village's farming could {{BLANK}}, and old fields could turn back into forest.",
    "cn": "如果沒有新的年輕農民，村裡的農業可能會倒退，而老田也可能重新變回森林。"
  },
  {
    "word": "reliance",
    "pos": "n.",
    "cn_def": "依賴",
    "en_def": "the state of depending on something",
    "sentence": "Taiwan's {{BLANK}} on imported wheat worries some experts, because a global crisis could suddenly cut supplies.",
    "cn": "台灣對進口小麥的依賴讓一些專家擔憂，因為全球危機可能突然切斷供應。"
  },
  {
    "word": "residual",
    "pos": "adj.",
    "cn_def": "殘留的",
    "en_def": "remaining after most of something has gone",
    "sentence": "The lab found {{BLANK}} pesticide on the vegetables, so the farmer was told to wait longer before harvesting.",
    "cn": "實驗室在蔬菜上發現殘留的農藥，所以農夫被告知要等更久才能採收。"
  },
  {
    "word": "satiate",
    "pos": "v.",
    "cn_def": "使飽足；使滿足",
    "en_def": "to satisfy hunger completely",
    "sentence": "A bowl of beef noodle soup can {{BLANK}} even a very hungry student, and it costs less than a fast-food meal.",
    "cn": "一碗牛肉麵就能讓即使非常餓的學生吃飽，而且比一份速食餐還便宜。"
  },
  {
    "word": "savour",
    "pos": "v.",
    "cn_def": "細細品嚐",
    "en_def": "to enjoy the taste of food slowly",
    "sentence": "My grandfather likes to {{BLANK}} his tea slowly, and he says that people today eat and drink far too quickly.",
    "cn": "我爺爺喜歡慢慢地品味他的茶，而且他說現在的人吃喝都太快了。"
  },
  {
    "word": "scourge",
    "pos": "n.",
    "cn_def": "禍害；災難",
    "en_def": "something that causes great trouble or suffering",
    "sentence": "Locusts have been a {{BLANK}} for farmers for thousands of years, and swarms still destroy crops in parts of Africa.",
    "cn": "數千年來蝗蟲一直是農民的禍害，而在非洲部分地區，蝗群至今仍在摧毀作物。"
  },
  {
    "word": "seasonality",
    "pos": "n.",
    "cn_def": "季節性",
    "en_def": "the way something changes with the seasons",
    "sentence": "The {{BLANK}} of fruit means that mangoes are cheap in summer, but you can hardly find them in winter.",
    "cn": "水果的季節性意味著芒果在夏天很便宜，但冬天幾乎買不到。"
  },
  {
    "word": "self-sufficiency",
    "pos": "n.",
    "cn_def": "自給自足",
    "en_def": "the ability to produce everything you need yourself",
    "sentence": "Taiwan's food {{BLANK}} rate is only about thirty percent, so the country imports most of its grain.",
    "cn": "台灣的糧食自給率只有大約百分之三十，所以國家大部分的穀物都仰賴進口。"
  },
  {
    "word": "sequester",
    "pos": "v.",
    "cn_def": "封存；隔離",
    "en_def": "to store or capture something, such as carbon, so it is kept away",
    "sentence": "Healthy soil can {{BLANK}} carbon from the air, so better farming could help fight climate change.",
    "cn": "健康的土壤能封存空氣中的碳，所以更好的耕作方式有助於對抗氣候變遷。"
  },
  {
    "word": "shrewd",
    "pos": "adj.",
    "cn_def": "精明的",
    "en_def": "clever at understanding situations and making good decisions",
    "sentence": "The {{BLANK}} farmer sold his crop before the price fell, and his neighbours wished they had done the same.",
    "cn": "這位精明的農夫在價格下跌前就賣掉了作物，而他的鄰居們都希望自己也這麼做了。"
  },
  {
    "word": "smother",
    "pos": "v.",
    "cn_def": "覆蓋；悶死",
    "en_def": "to cover something completely so it cannot breathe or grow",
    "sentence": "Thick weeds can {{BLANK}} young plants, so farmers remove them before the seedlings lose their sunlight.",
    "cn": "茂密的雜草會悶死幼小的植物，所以農民會在幼苗失去陽光前把它們清除。"
  },
  {
    "word": "sourcing",
    "pos": "n.",
    "cn_def": "採購來源；貨源管理",
    "en_def": "the process of finding where to get supplies",
    "sentence": "The restaurant is proud of its local {{BLANK}}, and every vegetable comes from farms less than fifty kilometres away.",
    "cn": "這家餐廳以在地採購為傲，而且每一種蔬菜都來自五十公里內的農場。"
  },
  {
    "word": "sparingly",
    "pos": "adv.",
    "cn_def": "節省地；少量地",
    "en_def": "in small amounts; not much",
    "sentence": "Use salt {{BLANK}} when you cook for elderly people, because too much can raise their blood pressure.",
    "cn": "為長者烹調時要少量使用鹽，因為太多可能會讓他們的血壓升高。"
  },
  {
    "word": "stagnation",
    "pos": "n.",
    "cn_def": "停滯",
    "en_def": "a state of no growth or change",
    "sentence": "Farm incomes have been in {{BLANK}} for years, so many young people choose office jobs in the city.",
    "cn": "農業收入多年來一直處於停滯，所以許多年輕人選擇到城市從事辦公室工作。"
  },
  {
    "word": "subsist",
    "pos": "v.",
    "cn_def": "勉強維生",
    "en_def": "to manage to stay alive with very little food or money",
    "sentence": "During the war, families had to {{BLANK}} on sweet potatoes, and rice was a luxury for special days.",
    "cn": "戰爭期間，家家戶戶只能靠地瓜勉強維生，而白米是特殊日子才吃得到的奢侈品。"
  },
  {
    "word": "substantive",
    "pos": "adj.",
    "cn_def": "實質的；重大的",
    "en_def": "real, important and serious",
    "sentence": "The new law brought {{BLANK}} changes to food labels, so shoppers can now see clearly where ingredients come from.",
    "cn": "新法為食品標示帶來了實質的改變，所以消費者現在能清楚看到成分的來源。"
  },
  {
    "word": "succulent",
    "pos": "adj.",
    "cn_def": "多汁的",
    "en_def": "juicy and delicious",
    "sentence": "The pineapples from Pingtung are sweet and {{BLANK}}, so they are sent as gifts to friends overseas.",
    "cn": "屏東的鳳梨又甜又多汁，所以人們把它們當作禮物寄給海外的朋友。"
  }
];

const MCQS = [
  {
    "q": "The cost of a vertical farm is _____ for most small farmers, so only large companies can build one.",
    "options": [
      "prohibitive",
      "clandestine",
      "astounding",
      "prodigious"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Plant-based food has gained _____ in recent years, and even fast-food chains now offer vegetarian burgers.",
    "options": [
      "nutritionist",
      "contaminant",
      "prominence",
      "authenticity"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The company keeps its sauce recipe _____, so only three people in the factory know all the ingredients.",
    "options": [
      "attainable",
      "tenable",
      "bottled",
      "proprietary"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Farmers show _____ by saving part of their seeds every year, so they can replant if a typhoon destroys the crop.",
    "options": [
      "procurement",
      "prudence",
      "authenticity",
      "polytunnel"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The government decided to _____ water from factories to farms during the drought, but factory owners were unhappy.",
    "options": [
      "confound",
      "wean",
      "annihilate",
      "reallocate"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Village life was based on _____, because neighbours helped each other at harvest time and shared food.",
    "options": [
      "susceptibility",
      "reciprocity",
      "vitamin",
      "lamb"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The land needs a few years to _____ after the flood, so the farmers are growing grass there for now.",
    "options": [
      "adulterate",
      "indulge",
      "recuperate",
      "homogenise"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The app helps shops _____ unsold food to charities, so less bread and fruit end up in the bin.",
    "options": [
      "redistribute",
      "contrive",
      "pertain",
      "defrost"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Without new young farmers, the village's farming could _____, and old fields could turn back into forest.",
    "options": [
      "sterilise",
      "overstate",
      "regress",
      "imperil"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Taiwan's _____ on imported wheat worries some experts, because a global crisis could suddenly cut supplies.",
    "options": [
      "reliance",
      "quick-freezing",
      "salmonella",
      "connoisseur"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The lab found _____ pesticide on the vegetables, so the farmer was told to wait longer before harvesting.",
    "options": [
      "irreparable",
      "discretionary",
      "high-yield",
      "residual"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "A bowl of beef noodle soup can _____ even a very hungry student, and it costs less than a fast-food meal.",
    "options": [
      "pertain",
      "satiate",
      "imperil",
      "counterbalance"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "My grandfather likes to _____ his tea slowly, and he says that people today eat and drink far too quickly.",
    "options": [
      "ferment",
      "slaughter",
      "savour",
      "withhold"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Locusts have been a _____ for farmers for thousands of years, and swarms still destroy crops in parts of Africa.",
    "options": [
      "entitlement",
      "lamb",
      "harbinger",
      "scourge"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The _____ of fruit means that mangoes are cheap in summer, but you can hardly find them in winter.",
    "options": [
      "hydroponics",
      "seasonality",
      "methodology",
      "leftovers"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Taiwan's food _____ rate is only about thirty percent, so the country imports most of its grain.",
    "options": [
      "self-sufficiency",
      "pollination",
      "consignment",
      "nourishment"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Healthy soil can _____ carbon from the air, so better farming could help fight climate change.",
    "options": [
      "overstate",
      "debase",
      "suffice",
      "sequester"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The _____ farmer sold his crop before the price fell, and his neighbours wished they had done the same.",
    "options": [
      "indicative",
      "shrewd",
      "discerning",
      "sugary"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Thick weeds can _____ young plants, so farmers remove them before the seedlings lose their sunlight.",
    "options": [
      "smother",
      "sterilise",
      "devour",
      "ripen"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The restaurant is proud of its local _____, and every vegetable comes from farms less than fifty kilometres away.",
    "options": [
      "soybean",
      "pitchfork",
      "sourcing",
      "salmonella"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Use salt _____ when you cook for elderly people, because too much can raise their blood pressure.",
    "options": [
      "ranch",
      "gluten-free",
      "misguided",
      "sparingly"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Farm incomes have been in _____ for years, so many young people choose office jobs in the city.",
    "options": [
      "freezer",
      "vitamin",
      "stagnation",
      "aspiration"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "During the war, families had to _____ on sweet potatoes, and rice was a luxury for special days.",
    "options": [
      "subsist",
      "wean",
      "assimilate",
      "devour"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new law brought _____ changes to food labels, so shoppers can now see clearly where ingredients come from.",
    "options": [
      "plant-based",
      "substantive",
      "gluten-free",
      "imperfect"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The pineapples from Pingtung are sweet and _____, so they are sent as gifts to friends overseas.",
    "options": [
      "attainable",
      "cyclical",
      "inedible",
      "succulent"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "prohibitive": {
    "pos": "adj.",
    "en_def": "so expensive that people cannot afford it",
    "cn_def": "高昂得令人卻步的"
  },
  "prominence": {
    "pos": "n.",
    "en_def": "the state of being important or well known",
    "cn_def": "顯著；重要地位"
  },
  "proprietary": {
    "pos": "adj.",
    "en_def": "owned by a company and protected by law",
    "cn_def": "專利的；專有的"
  },
  "prudence": {
    "pos": "n.",
    "en_def": "careful and sensible judgement",
    "cn_def": "審慎；謹慎"
  },
  "reallocate": {
    "pos": "v.",
    "en_def": "to give something to a different person or purpose",
    "cn_def": "重新分配"
  },
  "reciprocity": {
    "pos": "n.",
    "en_def": "exchanging things with others for mutual benefit",
    "cn_def": "互惠"
  },
  "recuperate": {
    "pos": "v.",
    "en_def": "to recover after an illness or a difficult time",
    "cn_def": "恢復；復原"
  },
  "redistribute": {
    "pos": "v.",
    "en_def": "to share something out again in a different way",
    "cn_def": "重新分配"
  },
  "regress": {
    "pos": "v.",
    "en_def": "to go back to an earlier, worse state",
    "cn_def": "倒退；退步"
  },
  "reliance": {
    "pos": "n.",
    "en_def": "the state of depending on something",
    "cn_def": "依賴"
  },
  "residual": {
    "pos": "adj.",
    "en_def": "remaining after most of something has gone",
    "cn_def": "殘留的"
  },
  "satiate": {
    "pos": "v.",
    "en_def": "to satisfy hunger completely",
    "cn_def": "使飽足；使滿足"
  },
  "savour": {
    "pos": "v.",
    "en_def": "to enjoy the taste of food slowly",
    "cn_def": "細細品嚐"
  },
  "scourge": {
    "pos": "n.",
    "en_def": "something that causes great trouble or suffering",
    "cn_def": "禍害；災難"
  },
  "seasonality": {
    "pos": "n.",
    "en_def": "the way something changes with the seasons",
    "cn_def": "季節性"
  },
  "self-sufficiency": {
    "pos": "n.",
    "en_def": "the ability to produce everything you need yourself",
    "cn_def": "自給自足"
  },
  "sequester": {
    "pos": "v.",
    "en_def": "to store or capture something, such as carbon, so it is kept away",
    "cn_def": "封存；隔離"
  },
  "shrewd": {
    "pos": "adj.",
    "en_def": "clever at understanding situations and making good decisions",
    "cn_def": "精明的"
  },
  "smother": {
    "pos": "v.",
    "en_def": "to cover something completely so it cannot breathe or grow",
    "cn_def": "覆蓋；悶死"
  },
  "sourcing": {
    "pos": "n.",
    "en_def": "the process of finding where to get supplies",
    "cn_def": "採購來源；貨源管理"
  },
  "sparingly": {
    "pos": "adv.",
    "en_def": "in small amounts; not much",
    "cn_def": "節省地；少量地"
  },
  "stagnation": {
    "pos": "n.",
    "en_def": "a state of no growth or change",
    "cn_def": "停滯"
  },
  "subsist": {
    "pos": "v.",
    "en_def": "to manage to stay alive with very little food or money",
    "cn_def": "勉強維生"
  },
  "substantive": {
    "pos": "adj.",
    "en_def": "real, important and serious",
    "cn_def": "實質的；重大的"
  },
  "succulent": {
    "pos": "adj.",
    "en_def": "juicy and delicious",
    "cn_def": "多汁的"
  },
  "clandestine": {
    "pos": "adj.",
    "en_def": "secret and often illegal",
    "cn_def": "祕密的；暗中的"
  },
  "astounding": {
    "pos": "adj.",
    "en_def": "very surprising or shocking",
    "cn_def": "令人震驚的；驚人的"
  },
  "prodigious": {
    "pos": "adj.",
    "en_def": "very large or impressive",
    "cn_def": "巨大的；驚人的"
  },
  "nutritionist": {
    "pos": "n.",
    "en_def": "an expert on food and healthy eating",
    "cn_def": "營養師"
  },
  "contaminant": {
    "pos": "n.",
    "en_def": "a substance that makes something dirty or unsafe",
    "cn_def": "污染物"
  },
  "authenticity": {
    "pos": "n.",
    "en_def": "the quality of being real or true",
    "cn_def": "真實性；道地"
  },
  "attainable": {
    "pos": "adj.",
    "en_def": "possible to achieve",
    "cn_def": "可達成的"
  },
  "tenable": {
    "pos": "adj.",
    "en_def": "able to be defended or kept going",
    "cn_def": "站得住腳的；可維持的"
  },
  "bottled": {
    "pos": "adj.",
    "en_def": "sold in bottles",
    "cn_def": "瓶裝的"
  },
  "procurement": {
    "pos": "n.",
    "en_def": "the process of buying supplies for an organisation",
    "cn_def": "採購"
  },
  "polytunnel": {
    "pos": "n.",
    "en_def": "a long plastic-covered tunnel for growing plants",
    "cn_def": "塑膠布棚（隧道式溫室）"
  },
  "confound": {
    "pos": "v.",
    "en_def": "to confuse or surprise someone because it is unexpected",
    "cn_def": "使困惑；使驚訝"
  },
  "wean": {
    "pos": "v.",
    "en_def": "to make someone stop depending on something",
    "cn_def": "使戒除；使逐漸擺脫"
  },
  "annihilate": {
    "pos": "v.",
    "en_def": "to destroy something completely",
    "cn_def": "徹底摧毀；殲滅"
  },
  "susceptibility": {
    "pos": "n.",
    "en_def": "how easily something is affected or harmed",
    "cn_def": "易感性；敏感度"
  },
  "vitamin": {
    "pos": "n.",
    "en_def": "a natural substance in food that the body needs to stay healthy",
    "cn_def": "維他命；維生素"
  },
  "lamb": {
    "pos": "n.",
    "en_def": "a young sheep, or its meat",
    "cn_def": "小羊；羊肉"
  },
  "adulterate": {
    "pos": "v.",
    "en_def": "to make food worse by adding cheaper or harmful things",
    "cn_def": "摻假；摻雜"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow yourself to enjoy something special",
    "cn_def": "沉溺；放縱享受"
  },
  "homogenise": {
    "pos": "v.",
    "en_def": "to make things the same or similar",
    "cn_def": "使同質化"
  },
  "contrive": {
    "pos": "v.",
    "en_def": "to manage to do something difficult, often by being clever",
    "cn_def": "設法做到"
  },
  "pertain": {
    "pos": "v.",
    "en_def": "to be connected with a particular subject",
    "cn_def": "與……有關"
  },
  "defrost": {
    "pos": "v.",
    "en_def": "to let frozen food become soft again",
    "cn_def": "解凍"
  },
  "sterilise": {
    "pos": "v.",
    "en_def": "to make something completely free from bacteria",
    "cn_def": "消毒；殺菌"
  },
  "overstate": {
    "pos": "v.",
    "en_def": "to describe something as bigger or more important than it really is",
    "cn_def": "誇大"
  },
  "imperil": {
    "pos": "v.",
    "en_def": "to put something in danger",
    "cn_def": "危及"
  },
  "quick-freezing": {
    "pos": "n.",
    "en_def": "freezing food very fast to keep its taste and texture",
    "cn_def": "急速冷凍"
  },
  "salmonella": {
    "pos": "n.",
    "en_def": "a type of bacteria that causes food poisoning",
    "cn_def": "沙門氏菌"
  },
  "connoisseur": {
    "pos": "n.",
    "en_def": "an expert who knows a lot about food, drink or art",
    "cn_def": "鑑賞家；行家"
  },
  "irreparable": {
    "pos": "adj.",
    "en_def": "too bad to be repaired or put right",
    "cn_def": "無法挽回的；不可修復的"
  },
  "discretionary": {
    "pos": "adj.",
    "en_def": "decided by a person's own choice",
    "cn_def": "可自由支配的"
  },
  "high-yield": {
    "pos": "adj.",
    "en_def": "producing a large amount of crops",
    "cn_def": "高產量的"
  },
  "counterbalance": {
    "pos": "v.",
    "en_def": "to have an equal but opposite effect on something",
    "cn_def": "抵銷；平衡"
  },
  "ferment": {
    "pos": "v.",
    "en_def": "to change chemically because of bacteria or yeast",
    "cn_def": "發酵"
  },
  "slaughter": {
    "pos": "v.",
    "en_def": "to kill animals for food",
    "cn_def": "屠宰"
  },
  "withhold": {
    "pos": "v.",
    "en_def": "to refuse to give something",
    "cn_def": "扣留；拒絕給予"
  },
  "entitlement": {
    "pos": "n.",
    "en_def": "the right to have or receive something",
    "cn_def": "應得的權利"
  },
  "harbinger": {
    "pos": "n.",
    "en_def": "a sign that something is going to happen",
    "cn_def": "預兆；先兆"
  },
  "hydroponics": {
    "pos": "n.",
    "en_def": "growing plants in water with nutrients instead of soil",
    "cn_def": "水耕栽培"
  },
  "methodology": {
    "pos": "n.",
    "en_def": "the methods used in a study or activity",
    "cn_def": "研究方法；方法論"
  },
  "leftovers": {
    "pos": "n.",
    "en_def": "food that remains after a meal",
    "cn_def": "剩菜"
  },
  "pollination": {
    "pos": "n.",
    "en_def": "moving pollen between flowers so that fruit can grow",
    "cn_def": "授粉"
  },
  "consignment": {
    "pos": "n.",
    "en_def": "a quantity of goods sent to someone",
    "cn_def": "一批貨物"
  },
  "nourishment": {
    "pos": "n.",
    "en_def": "food needed to live and grow",
    "cn_def": "營養；食物"
  },
  "debase": {
    "pos": "v.",
    "en_def": "to reduce the quality or value of something",
    "cn_def": "降低（品質或價值）"
  },
  "suffice": {
    "pos": "v.",
    "en_def": "to be enough",
    "cn_def": "足夠"
  },
  "indicative": {
    "pos": "adj.",
    "en_def": "showing or suggesting something",
    "cn_def": "表明的；暗示的"
  },
  "discerning": {
    "pos": "adj.",
    "en_def": "able to judge the quality of something well",
    "cn_def": "有眼光的；有辨別力的"
  },
  "sugary": {
    "pos": "adj.",
    "en_def": "containing a lot of sugar",
    "cn_def": "含糖量高的；含糖的"
  },
  "devour": {
    "pos": "v.",
    "en_def": "to eat something quickly and hungrily",
    "cn_def": "狼吞虎嚥；吞食"
  },
  "ripen": {
    "pos": "v.",
    "en_def": "to become ready to eat",
    "cn_def": "成熟"
  },
  "soybean": {
    "pos": "n.",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "cn_def": "黃豆；大豆"
  },
  "pitchfork": {
    "pos": "n.",
    "en_def": "a tool with long metal points used to lift hay",
    "cn_def": "乾草叉"
  },
  "ranch": {
    "pos": "n.",
    "en_def": "a very large farm for raising cattle, horses or sheep",
    "cn_def": "大牧場"
  },
  "gluten-free": {
    "pos": "adj.",
    "en_def": "not containing gluten, a protein found in wheat",
    "cn_def": "無麩質的"
  },
  "misguided": {
    "pos": "adj.",
    "en_def": "based on wrong ideas or judgement",
    "cn_def": "被誤導的；錯誤的"
  },
  "freezer": {
    "pos": "n.",
    "en_def": "a machine or part of a fridge that keeps food frozen",
    "cn_def": "冷凍庫"
  },
  "aspiration": {
    "pos": "n.",
    "en_def": "a strong hope to achieve something",
    "cn_def": "抱負；志向"
  },
  "assimilate": {
    "pos": "v.",
    "en_def": "to take in and fully understand information or ideas",
    "cn_def": "吸收；理解"
  },
  "plant-based": {
    "pos": "adj.",
    "en_def": "made from plants rather than animals",
    "cn_def": "植物性的；以植物為原料的"
  },
  "imperfect": {
    "pos": "adj.",
    "en_def": "(of fruit or vegetables) not perfect in shape or appearance",
    "cn_def": "不完美的；賣相不佳的"
  },
  "cyclical": {
    "pos": "adj.",
    "en_def": "happening in a repeated pattern",
    "cn_def": "週期性的"
  },
  "inedible": {
    "pos": "adj.",
    "en_def": "not fit or safe to eat",
    "cn_def": "不能吃的"
  }
};

const EXTRA_GLOSSES = {};
