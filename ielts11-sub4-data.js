// Topic 11 Subunit 4 Quiz Data: Food Processing & Preservation 食品加工與保存
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S04 - Food Processing & Preservation 食品加工與保存",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "processed food",
    "pos": "n.",
    "cn_def": "加工食品",
    "en_def": "food changed by factory methods, often with added chemicals",
    "sentence": "Instant noodles are a common {{BLANK}}, and they are cheap and quick, but they often contain a lot of salt.",
    "cn": "泡麵是常見的加工食品，它們既便宜又快速，但常常含有大量的鹽。"
  },
  {
    "word": "ultra-processed",
    "pos": "adj.",
    "cn_def": "超加工的",
    "en_def": "made mostly from factory ingredients rather than whole foods",
    "sentence": "Many snacks in convenience stores are {{BLANK}}, so doctors advise teenagers to eat fruit and nuts instead.",
    "cn": "便利商店的許多零食都是超加工的，所以醫生建議青少年改吃水果和堅果。"
  },
  {
    "word": "preservative",
    "pos": "n.",
    "cn_def": "防腐劑",
    "en_def": "a chemical added to food to stop it from going bad",
    "sentence": "This bread contains no {{BLANK}}, so it goes mouldy after three days, but my family thinks it tastes much fresher.",
    "cn": "這種麵包不含防腐劑，所以三天後就會發霉，但我們家覺得它吃起來新鮮多了。"
  },
  {
    "word": "additive",
    "pos": "n.",
    "cn_def": "添加物",
    "en_def": "a substance added to food to improve its colour, taste or life",
    "sentence": "The label lists every {{BLANK}} in the drink, but most customers do not read it because the words are very small.",
    "cn": "標籤上列出了飲料中的每一種添加物，但大多數顧客都不會去看，因為字實在太小了。"
  },
  {
    "word": "flavouring",
    "pos": "n.",
    "cn_def": "調味料；香料",
    "en_def": "a substance added to food to give it a particular taste",
    "sentence": "The strawberry milk contains no real fruit, only artificial {{BLANK}}, but children still love its sweet pink colour.",
    "cn": "這種草莓牛奶完全不含真的水果，只有人工香料，但孩子們還是很喜歡它甜甜的粉紅色。"
  },
  {
    "word": "sweetener",
    "pos": "n.",
    "cn_def": "甜味劑",
    "en_def": "a substance used instead of sugar to make food sweet",
    "sentence": "Diet cola uses an artificial {{BLANK}} instead of sugar, so it has almost no calories, but some people dislike the taste.",
    "cn": "無糖可樂使用人工甜味劑代替糖，所以幾乎沒有熱量，但有些人不喜歡它的味道。"
  },
  {
    "word": "emulsifier",
    "pos": "n.",
    "cn_def": "乳化劑",
    "en_def": "a substance that helps oil and water mix together",
    "sentence": "Ice cream often contains an {{BLANK}}, because without it the cream and water would separate and the texture would become icy.",
    "cn": "冰淇淋常含有乳化劑，因為如果沒有它，奶油和水會分離，口感也會變得像冰渣。"
  },
  {
    "word": "pasteurise",
    "pos": "v.",
    "cn_def": "巴氏殺菌",
    "en_def": "to heat milk or juice to kill harmful bacteria",
    "sentence": "Dairy farms {{BLANK}} milk before it goes to shops, because heating it kills bacteria that could make people sick.",
    "cn": "酪農場會在牛奶送到商店前先進行巴氏殺菌，因為加熱能殺死可能使人生病的細菌。"
  },
  {
    "word": "sterilise",
    "pos": "v.",
    "cn_def": "消毒；殺菌",
    "en_def": "to make something completely free from bacteria",
    "sentence": "My mother always {{BLANK}} the glass jars in boiling water before she makes jam, so the jam will not go bad.",
    "cn": "我媽媽做果醬前總會先把玻璃罐放進滾水中消毒，這樣果醬才不會壞掉。"
  },
  {
    "word": "freezer",
    "pos": "n.",
    "cn_def": "冷凍庫",
    "en_def": "a machine or part of a fridge that keeps food frozen",
    "sentence": "We keep dumplings in the {{BLANK}} for busy evenings, and we can cook a quick dinner in ten minutes.",
    "cn": "我們把水餃放在冷凍庫裡備著忙碌的晚上吃，而且十分鐘就能煮好一頓快速的晚餐。"
  },
  {
    "word": "defrost",
    "pos": "v.",
    "cn_def": "解凍",
    "en_def": "to let frozen food become soft again",
    "sentence": "You should {{BLANK}} the chicken in the fridge overnight, because leaving it on the table can allow bacteria to grow.",
    "cn": "你應該把雞肉放在冷藏室裡隔夜解凍，因為把它放在桌上可能會讓細菌滋生。"
  },
  {
    "word": "chilled",
    "pos": "adj.",
    "cn_def": "冷藏的；冰鎮的",
    "en_def": "kept cold but not frozen",
    "sentence": "{{BLANK}} salads must stay below five degrees, so the delivery driver checks the temperature in his van every hour.",
    "cn": "冷藏沙拉必須保持在五度以下，所以送貨司機每小時都會檢查貨車內的溫度。"
  },
  {
    "word": "cold chain",
    "pos": "n.",
    "cn_def": "冷鏈",
    "en_def": "a system that keeps food cold from farm to shop",
    "sentence": "Vaccines and fresh fish both depend on the {{BLANK}}, because even a short break in cooling can make them unsafe.",
    "cn": "疫苗和鮮魚都仰賴冷鏈，因為即使冷藏只中斷一下，也可能讓它們變得不安全。"
  },
  {
    "word": "vacuum-packed",
    "pos": "adj.",
    "cn_def": "真空包裝的",
    "en_def": "sealed in a pack with all the air removed",
    "sentence": "The {{BLANK}} meat stays fresh for weeks because no air can get in, so campers often take it on long trips.",
    "cn": "真空包裝的肉能保鮮好幾週，因為空氣進不去，所以露營者常帶著它去長途旅行。"
  },
  {
    "word": "airtight",
    "pos": "adj.",
    "cn_def": "密封的；不透氣的",
    "en_def": "not allowing air to get in or out",
    "sentence": "Keep the cookies in an {{BLANK}} box, or they will become soft because of the wet weather in Taipei.",
    "cn": "把餅乾放在密封的盒子裡，否則它們會因為台北潮濕的天氣而變軟。"
  },
  {
    "word": "dehydrate",
    "pos": "v.",
    "cn_def": "使脫水；乾燥",
    "en_def": "to remove water from food to keep it longer",
    "sentence": "Factories {{BLANK}} fruit to make healthy snacks, and the dried mango slices from Tainan are popular gifts for tourists.",
    "cn": "工廠將水果脫水製成健康的點心，而台南的芒果乾片是很受觀光客歡迎的伴手禮。"
  },
  {
    "word": "cure",
    "pos": "v.",
    "cn_def": "醃製；燻製",
    "en_def": "to keep meat or fish by drying, salting or smoking it",
    "sentence": "Families in the countryside {{BLANK}} pork with salt and spices before winter, so they have meat to eat during the holidays.",
    "cn": "鄉下的家庭會在冬天前用鹽和香料醃製豬肉，這樣過節時就有肉可吃。"
  },
  {
    "word": "pickle",
    "pos": "v.",
    "cn_def": "醃漬",
    "en_def": "to keep food in vinegar or salt water",
    "sentence": "My grandmother likes to {{BLANK}} cucumbers in summer, and she keeps the jars in a cool cupboard for months.",
    "cn": "我奶奶喜歡在夏天醃漬小黃瓜，而且她把罐子放在陰涼的櫥櫃裡好幾個月。"
  },
  {
    "word": "ferment",
    "pos": "v.",
    "cn_def": "發酵",
    "en_def": "to change chemically because of bacteria or yeast",
    "sentence": "Cabbage is left to {{BLANK}} for several days to make kimchi, and the bacteria give it a sour taste that many people love.",
    "cn": "高麗菜會放著發酵好幾天來做成泡菜，而細菌讓它產生許多人喜愛的酸味。"
  },
  {
    "word": "shelf life",
    "pos": "n.",
    "cn_def": "保存期限；架售期",
    "en_def": "how long a product can be kept before it goes bad",
    "sentence": "Canned soup has a long {{BLANK}}, so people often buy it before a typhoon, but fresh milk must be drunk within a week.",
    "cn": "罐頭湯的保存期限很長，所以人們常在颱風前購買，但鮮奶必須在一週內喝完。"
  },
  {
    "word": "best-before date",
    "pos": "n.",
    "cn_def": "最佳賞味期限",
    "en_def": "the date until which food is at its best quality",
    "sentence": "The yoghurt was two days past its {{BLANK}}, but it still smelled fine, so we decided to eat it.",
    "cn": "這罐優格已經過了最佳賞味期限兩天，但聞起來還是沒問題，所以我們決定把它吃掉。"
  },
  {
    "word": "spoil",
    "pos": "v.",
    "cn_def": "（食物）變質；壞掉",
    "en_def": "(of food) to become bad and unsafe to eat",
    "sentence": "Fresh fish can {{BLANK}} within hours in summer, so the fishermen pack it in ice as soon as it is caught.",
    "cn": "新鮮的魚在夏天幾小時內就可能壞掉，所以漁夫一捕到魚就立刻用冰塊包裝。"
  },
  {
    "word": "rotten",
    "pos": "adj.",
    "cn_def": "腐爛的",
    "en_def": "old and bad, and no longer fit to eat",
    "sentence": "We found a {{BLANK}} apple at the bottom of the bag, and it had already spoiled several others around it.",
    "cn": "我們在袋子底部發現了一顆腐爛的蘋果，而它已經把周圍好幾顆都弄壞了。"
  },
  {
    "word": "stale",
    "pos": "adj.",
    "cn_def": "不新鮮的；走味的",
    "en_def": "(of bread or snacks) no longer fresh and becoming dry or hard",
    "sentence": "The bread had gone {{BLANK}} because nobody closed the bag, so we fed it to the ducks in the park.",
    "cn": "因為沒有人把袋子封好，麵包變得不新鮮了，所以我們拿去公園餵鴨子。"
  },
  {
    "word": "perishable",
    "pos": "adj.",
    "cn_def": "易腐壞的",
    "en_def": "likely to go bad quickly",
    "sentence": "Strawberries are very {{BLANK}}, so farmers have to sell them within a few days, or they will lose their money.",
    "cn": "草莓非常容易腐壞，所以農民必須在幾天內賣掉，否則就會虧錢。"
  },
  {
    "word": "flour",
    "pos": "n.",
    "cn_def": "麵粉",
    "en_def": "powder made from grain and used for baking",
    "sentence": "We mixed {{BLANK}}, eggs and milk to make pancakes, but the kitchen was covered in white powder by the time we finished.",
    "cn": "我們把麵粉、雞蛋和牛奶混在一起做鬆餅，但等我們做完時，廚房已經滿是白色粉末。"
  },
  {
    "word": "grind",
    "pos": "v.",
    "cn_def": "磨碎；研磨",
    "en_def": "to crush something into small pieces or powder",
    "sentence": "The cafe owner {{BLANK}} the coffee beans just before he makes each cup, because he says it gives a much better smell.",
    "cn": "這位咖啡店老闆在沖每杯咖啡前才研磨咖啡豆，因為他說這樣香氣會好得多。",
    "answer": "grinds",
    "alts": [
      "grind",
      "ground"
    ]
  },
  {
    "word": "bottled",
    "pos": "adj.",
    "cn_def": "瓶裝的",
    "en_def": "sold in bottles",
    "sentence": "Many tourists buy {{BLANK}} water every day, but the city now provides free water stations to cut down on plastic waste.",
    "cn": "許多觀光客每天都買瓶裝水，但這座城市現在提供免費飲水站來減少塑膠垃圾。"
  },
  {
    "word": "quick-freezing",
    "pos": "n.",
    "cn_def": "急速冷凍",
    "en_def": "freezing food very fast to keep its taste and texture",
    "sentence": "{{BLANK}} keeps vegetables bright and crunchy, because the ice crystals stay tiny and do not damage the cells.",
    "cn": "急速冷凍能讓蔬菜保持鮮豔和爽脆，因為冰晶很小，不會破壞細胞。"
  }
];

const MCQS = [
  {
    "q": "Instant noodles are a common _____, and they are cheap and quick, but they often contain a lot of salt.",
    "options": [
      "bulk buying",
      "junk food",
      "3D food printing",
      "processed food"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Many snacks in convenience stores are _____, so doctors advise teenagers to eat fruit and nuts instead.",
    "options": [
      "unfettered",
      "ultra-processed",
      "arable",
      "judicious"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "This bread contains no _____, so it goes mouldy after three days, but my family thinks it tastes much fresher.",
    "options": [
      "fodder",
      "disincentive",
      "preservative",
      "feasibility"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The label lists every _____ in the drink, but most customers do not read it because the words are very small.",
    "options": [
      "additive",
      "hoe",
      "biotechnology",
      "omission"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The strawberry milk contains no real fruit, only artificial _____, but children still love its sweet pink colour.",
    "options": [
      "obesity",
      "soil",
      "fluctuation",
      "flavouring"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Diet cola uses an artificial _____ instead of sugar, so it has almost no calories, but some people dislike the taste.",
    "options": [
      "mismanagement",
      "retailer",
      "sweetener",
      "soil"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Ice cream often contains an _____, because without it the cream and water would separate and the texture would become icy.",
    "options": [
      "disincentive",
      "emulsifier",
      "plantation",
      "haul"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Dairy farms _____ milk before it goes to shops, because heating it kills bacteria that could make people sick.",
    "options": [
      "pasteurise",
      "counterbalance",
      "gratify",
      "debase"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "My mother always _____ the glass jars in boiling water before she makes jam, so the jam will not go bad.",
    "options": [
      "regress",
      "slaughter",
      "sterilise",
      "indulge"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "We keep dumplings in the _____ for busy evenings, and we can cook a quick dinner in ten minutes.",
    "options": [
      "sustenance",
      "enormity",
      "meadow",
      "freezer"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "You should _____ the chicken in the fridge overnight, because leaving it on the table can allow bacteria to grow.",
    "options": [
      "rear",
      "defrost",
      "fatten",
      "gratify"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "_____ salads must stay below five degrees, so the delivery driver checks the temperature in his van every hour.",
    "options": [
      "chilled",
      "fortuitous",
      "irreparable",
      "voracious"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Vaccines and fresh fish both depend on the _____, because even a short break in cooling can make them unsafe.",
    "options": [
      "lab-grown meat",
      "cold chain",
      "food inspector",
      "water table"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ meat stays fresh for weeks because no air can get in, so campers often take it on long trips.",
    "options": [
      "indicative",
      "coarse",
      "vacuum-packed",
      "succulent"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Keep the cookies in an _____ box, or they will become soft because of the wet weather in Taipei.",
    "options": [
      "airtight",
      "clandestine",
      "tantamount",
      "precipitous"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Factories _____ fruit to make healthy snacks, and the dried mango slices from Tainan are popular gifts for tourists.",
    "options": [
      "confound",
      "homogenise",
      "wean",
      "dehydrate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Families in the countryside _____ pork with salt and spices before winter, so they have meat to eat during the holidays.",
    "options": [
      "smother",
      "gratify",
      "cure",
      "overstate"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "My grandmother likes to _____ cucumbers in summer, and she keeps the jars in a cool cupboard for months.",
    "options": [
      "wean",
      "pickle",
      "sequester",
      "suffice"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Cabbage is left to _____ for several days to make kimchi, and the bacteria give it a sour taste that many people love.",
    "options": [
      "withhold",
      "debase",
      "fathom",
      "ferment"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Canned soup has a long _____, so people often buy it before a typhoon, but fresh milk must be drunk within a week.",
    "options": [
      "shelf life",
      "food shortage",
      "food safety",
      "water table"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The yoghurt was two days past its _____, but it still smelled fine, so we decided to eat it.",
    "options": [
      "a piece of cake",
      "bulk buying",
      "best-before date",
      "food miles"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Fresh fish can _____ within hours in summer, so the fishermen pack it in ice as soon as it is caught.",
    "options": [
      "wean",
      "recuperate",
      "debase",
      "spoil"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "We found a _____ apple at the bottom of the bag, and it had already spoiled several others around it.",
    "options": [
      "ancillary",
      "rotten",
      "sugary",
      "inflationary"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The bread had gone _____ because nobody closed the bag, so we fed it to the ducks in the park.",
    "options": [
      "stale",
      "imperfect",
      "substantive",
      "tenable"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Strawberries are very _____, so farmers have to sell them within a few days, or they will lose their money.",
    "options": [
      "inequitable",
      "composite",
      "cyclical",
      "perishable"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "We mixed _____, eggs and milk to make pancakes, but the kitchen was covered in white powder by the time we finished.",
    "options": [
      "prudence",
      "flour",
      "agronomist",
      "fleece"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The cafe owner _____ the coffee beans just before he makes each cup, because he says it gives a much better smell.",
    "options": [
      "grinds",
      "confound",
      "reap",
      "satiate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Many tourists buy _____ water every day, but the city now provides free water stations to cut down on plastic waste.",
    "options": [
      "innumerable",
      "imperfect",
      "bottled",
      "cyclical"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "_____ keeps vegetables bright and crunchy, because the ice crystals stay tiny and do not damage the cells.",
    "options": [
      "herbicide",
      "quick-freezing",
      "frugality",
      "fodder"
    ],
    "answer": 1,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "processed food": {
    "pos": "n.",
    "en_def": "food changed by factory methods, often with added chemicals",
    "cn_def": "加工食品"
  },
  "ultra-processed": {
    "pos": "adj.",
    "en_def": "made mostly from factory ingredients rather than whole foods",
    "cn_def": "超加工的"
  },
  "preservative": {
    "pos": "n.",
    "en_def": "a chemical added to food to stop it from going bad",
    "cn_def": "防腐劑"
  },
  "additive": {
    "pos": "n.",
    "en_def": "a substance added to food to improve its colour, taste or life",
    "cn_def": "添加物"
  },
  "flavouring": {
    "pos": "n.",
    "en_def": "a substance added to food to give it a particular taste",
    "cn_def": "調味料；香料"
  },
  "sweetener": {
    "pos": "n.",
    "en_def": "a substance used instead of sugar to make food sweet",
    "cn_def": "甜味劑"
  },
  "emulsifier": {
    "pos": "n.",
    "en_def": "a substance that helps oil and water mix together",
    "cn_def": "乳化劑"
  },
  "pasteurise": {
    "pos": "v.",
    "en_def": "to heat milk or juice to kill harmful bacteria",
    "cn_def": "巴氏殺菌"
  },
  "sterilise": {
    "pos": "v.",
    "en_def": "to make something completely free from bacteria",
    "cn_def": "消毒；殺菌"
  },
  "freezer": {
    "pos": "n.",
    "en_def": "a machine or part of a fridge that keeps food frozen",
    "cn_def": "冷凍庫"
  },
  "defrost": {
    "pos": "v.",
    "en_def": "to let frozen food become soft again",
    "cn_def": "解凍"
  },
  "chilled": {
    "pos": "adj.",
    "en_def": "kept cold but not frozen",
    "cn_def": "冷藏的；冰鎮的"
  },
  "cold chain": {
    "pos": "n.",
    "en_def": "a system that keeps food cold from farm to shop",
    "cn_def": "冷鏈"
  },
  "vacuum-packed": {
    "pos": "adj.",
    "en_def": "sealed in a pack with all the air removed",
    "cn_def": "真空包裝的"
  },
  "airtight": {
    "pos": "adj.",
    "en_def": "not allowing air to get in or out",
    "cn_def": "密封的；不透氣的"
  },
  "dehydrate": {
    "pos": "v.",
    "en_def": "to remove water from food to keep it longer",
    "cn_def": "使脫水；乾燥"
  },
  "cure": {
    "pos": "v.",
    "en_def": "to keep meat or fish by drying, salting or smoking it",
    "cn_def": "醃製；燻製"
  },
  "pickle": {
    "pos": "v.",
    "en_def": "to keep food in vinegar or salt water",
    "cn_def": "醃漬"
  },
  "ferment": {
    "pos": "v.",
    "en_def": "to change chemically because of bacteria or yeast",
    "cn_def": "發酵"
  },
  "shelf life": {
    "pos": "n.",
    "en_def": "how long a product can be kept before it goes bad",
    "cn_def": "保存期限；架售期"
  },
  "best-before date": {
    "pos": "n.",
    "en_def": "the date until which food is at its best quality",
    "cn_def": "最佳賞味期限"
  },
  "spoil": {
    "pos": "v.",
    "en_def": "(of food) to become bad and unsafe to eat",
    "cn_def": "（食物）變質；壞掉"
  },
  "rotten": {
    "pos": "adj.",
    "en_def": "old and bad, and no longer fit to eat",
    "cn_def": "腐爛的"
  },
  "stale": {
    "pos": "adj.",
    "en_def": "(of bread or snacks) no longer fresh and becoming dry or hard",
    "cn_def": "不新鮮的；走味的"
  },
  "perishable": {
    "pos": "adj.",
    "en_def": "likely to go bad quickly",
    "cn_def": "易腐壞的"
  },
  "flour": {
    "pos": "n.",
    "en_def": "powder made from grain and used for baking",
    "cn_def": "麵粉"
  },
  "grinds": {
    "pos": "v.",
    "en_def": "to crush something into small pieces or powder",
    "cn_def": "磨碎；研磨"
  },
  "grind": {
    "pos": "v.",
    "en_def": "to crush something into small pieces or powder",
    "cn_def": "磨碎；研磨"
  },
  "bottled": {
    "pos": "adj.",
    "en_def": "sold in bottles",
    "cn_def": "瓶裝的"
  },
  "quick-freezing": {
    "pos": "n.",
    "en_def": "freezing food very fast to keep its taste and texture",
    "cn_def": "急速冷凍"
  },
  "bulk buying": {
    "pos": "n.",
    "en_def": "buying large amounts at one time, usually at a lower price",
    "cn_def": "大量採購"
  },
  "junk food": {
    "pos": "n.",
    "en_def": "food that is tasty but unhealthy",
    "cn_def": "垃圾食物"
  },
  "3d food printing": {
    "pos": "n.",
    "en_def": "making food in shapes using a machine that builds it in layers",
    "cn_def": "3D食物列印"
  },
  "unfettered": {
    "pos": "adj.",
    "en_def": "not limited by rules",
    "cn_def": "不受限制的"
  },
  "arable": {
    "pos": "adj.",
    "en_def": "suitable for growing crops",
    "cn_def": "可耕種的"
  },
  "judicious": {
    "pos": "adj.",
    "en_def": "showing good judgement",
    "cn_def": "明智的；審慎的"
  },
  "fodder": {
    "pos": "n.",
    "en_def": "food such as hay given to farm animals",
    "cn_def": "（家畜）飼料；草料"
  },
  "disincentive": {
    "pos": "n.",
    "en_def": "something that makes people less willing to do something",
    "cn_def": "抑制因素；阻礙"
  },
  "feasibility": {
    "pos": "n.",
    "en_def": "how possible or practical something is",
    "cn_def": "可行性"
  },
  "hoe": {
    "pos": "n.",
    "en_def": "a garden tool with a long handle used to break up soil",
    "cn_def": "鋤頭"
  },
  "biotechnology": {
    "pos": "n.",
    "en_def": "using living cells and bacteria to make useful products",
    "cn_def": "生物科技"
  },
  "omission": {
    "pos": "n.",
    "en_def": "something that has been left out",
    "cn_def": "遺漏；省略"
  },
  "obesity": {
    "pos": "n.",
    "en_def": "the state of being very overweight",
    "cn_def": "肥胖（症）"
  },
  "soil": {
    "pos": "n.",
    "en_def": "the top layer of earth in which plants grow",
    "cn_def": "土壤"
  },
  "fluctuation": {
    "pos": "n.",
    "en_def": "a change up and down in amount or level",
    "cn_def": "波動"
  },
  "mismanagement": {
    "pos": "n.",
    "en_def": "bad or careless control of something",
    "cn_def": "管理不當"
  },
  "retailer": {
    "pos": "n.",
    "en_def": "a business that sells goods directly to the public",
    "cn_def": "零售商"
  },
  "plantation": {
    "pos": "n.",
    "en_def": "a large farm growing one crop such as tea or rubber",
    "cn_def": "大型農園；種植園"
  },
  "haul": {
    "pos": "n.",
    "en_def": "an amount of something that has been caught or taken",
    "cn_def": "捕獲量；收穫"
  },
  "counterbalance": {
    "pos": "v.",
    "en_def": "to have an equal but opposite effect on something",
    "cn_def": "抵銷；平衡"
  },
  "gratify": {
    "pos": "v.",
    "en_def": "to please someone or satisfy a desire",
    "cn_def": "使滿足；使高興"
  },
  "debase": {
    "pos": "v.",
    "en_def": "to reduce the quality or value of something",
    "cn_def": "降低（品質或價值）"
  },
  "regress": {
    "pos": "v.",
    "en_def": "to go back to an earlier, worse state",
    "cn_def": "倒退；退步"
  },
  "slaughter": {
    "pos": "v.",
    "en_def": "to kill animals for food",
    "cn_def": "屠宰"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow yourself to enjoy something special",
    "cn_def": "沉溺；放縱享受"
  },
  "sustenance": {
    "pos": "n.",
    "en_def": "food and drink that keeps someone alive",
    "cn_def": "食物；營養來源"
  },
  "enormity": {
    "pos": "n.",
    "en_def": "the great size or seriousness of a problem",
    "cn_def": "嚴重性；巨大"
  },
  "meadow": {
    "pos": "n.",
    "en_def": "a field of grass and wild flowers",
    "cn_def": "草地；草原"
  },
  "rear": {
    "pos": "v.",
    "en_def": "to look after animals until they are fully grown",
    "cn_def": "飼養；養育"
  },
  "fatten": {
    "pos": "v.",
    "en_def": "to make an animal fat before it is killed for food",
    "cn_def": "養肥"
  },
  "fortuitous": {
    "pos": "adj.",
    "en_def": "happening by lucky chance",
    "cn_def": "幸運的；偶然的"
  },
  "irreparable": {
    "pos": "adj.",
    "en_def": "too bad to be repaired or put right",
    "cn_def": "無法挽回的；不可修復的"
  },
  "voracious": {
    "pos": "adj.",
    "en_def": "eating or wanting a very large amount",
    "cn_def": "貪吃的；狼吞虎嚥的"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
  },
  "food inspector": {
    "pos": "n.",
    "en_def": "an official who checks that food and restaurants are safe",
    "cn_def": "食品稽查員"
  },
  "water table": {
    "pos": "n.",
    "en_def": "the level below which the ground is full of water",
    "cn_def": "地下水位"
  },
  "indicative": {
    "pos": "adj.",
    "en_def": "showing or suggesting something",
    "cn_def": "表明的；暗示的"
  },
  "coarse": {
    "pos": "adj.",
    "en_def": "rough and not fine or smooth",
    "cn_def": "粗糙的；粗的"
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
  "tantamount": {
    "pos": "adj.",
    "en_def": "equal in effect to something worse",
    "cn_def": "等同於"
  },
  "precipitous": {
    "pos": "adj.",
    "en_def": "sudden and very large (of a fall)",
    "cn_def": "急遽的；陡峭的"
  },
  "confound": {
    "pos": "v.",
    "en_def": "to confuse or surprise someone because it is unexpected",
    "cn_def": "使困惑；使驚訝"
  },
  "homogenise": {
    "pos": "v.",
    "en_def": "to make things the same or similar",
    "cn_def": "使同質化"
  },
  "wean": {
    "pos": "v.",
    "en_def": "to make someone stop depending on something",
    "cn_def": "使戒除；使逐漸擺脫"
  },
  "smother": {
    "pos": "v.",
    "en_def": "to cover something completely so it cannot breathe or grow",
    "cn_def": "覆蓋；悶死"
  },
  "overstate": {
    "pos": "v.",
    "en_def": "to describe something as bigger or more important than it really is",
    "cn_def": "誇大"
  },
  "sequester": {
    "pos": "v.",
    "en_def": "to store or capture something, such as carbon, so it is kept away",
    "cn_def": "封存；隔離"
  },
  "suffice": {
    "pos": "v.",
    "en_def": "to be enough",
    "cn_def": "足夠"
  },
  "withhold": {
    "pos": "v.",
    "en_def": "to refuse to give something",
    "cn_def": "扣留；拒絕給予"
  },
  "fathom": {
    "pos": "v.",
    "en_def": "to understand something difficult",
    "cn_def": "理解；看透"
  },
  "food shortage": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough food",
    "cn_def": "糧食短缺"
  },
  "food safety": {
    "pos": "n.",
    "en_def": "keeping food free from things that can make people ill",
    "cn_def": "食品安全"
  },
  "a piece of cake": {
    "pos": "n.phr.",
    "en_def": "something very easy to do",
    "cn_def": "小事一樁；易如反掌"
  },
  "food miles": {
    "pos": "n.",
    "en_def": "the distance food travels from where it is grown to where it is eaten",
    "cn_def": "食物里程"
  },
  "recuperate": {
    "pos": "v.",
    "en_def": "to recover after an illness or a difficult time",
    "cn_def": "恢復；復原"
  },
  "ancillary": {
    "pos": "adj.",
    "en_def": "providing extra help or support",
    "cn_def": "輔助的；附屬的"
  },
  "sugary": {
    "pos": "adj.",
    "en_def": "containing a lot of sugar",
    "cn_def": "含糖量高的；含糖的"
  },
  "inflationary": {
    "pos": "adj.",
    "en_def": "causing prices to rise",
    "cn_def": "通貨膨脹的"
  },
  "imperfect": {
    "pos": "adj.",
    "en_def": "(of fruit or vegetables) not perfect in shape or appearance",
    "cn_def": "不完美的；賣相不佳的"
  },
  "substantive": {
    "pos": "adj.",
    "en_def": "real, important and serious",
    "cn_def": "實質的；重大的"
  },
  "tenable": {
    "pos": "adj.",
    "en_def": "able to be defended or kept going",
    "cn_def": "站得住腳的；可維持的"
  },
  "inequitable": {
    "pos": "adj.",
    "en_def": "unfair because some people get more than others",
    "cn_def": "不公平的"
  },
  "composite": {
    "pos": "adj.",
    "en_def": "made of several different parts or materials",
    "cn_def": "合成的；綜合的"
  },
  "cyclical": {
    "pos": "adj.",
    "en_def": "happening in a repeated pattern",
    "cn_def": "週期性的"
  },
  "prudence": {
    "pos": "n.",
    "en_def": "careful and sensible judgement",
    "cn_def": "審慎；謹慎"
  },
  "agronomist": {
    "pos": "n.",
    "en_def": "a scientist who studies soil and crops",
    "cn_def": "農藝學家"
  },
  "fleece": {
    "pos": "n.",
    "en_def": "the wool coat of a sheep",
    "cn_def": "羊毛（整片）"
  },
  "reap": {
    "pos": "v.",
    "en_def": "to cut and collect a crop",
    "cn_def": "收割"
  },
  "satiate": {
    "pos": "v.",
    "en_def": "to satisfy hunger completely",
    "cn_def": "使飽足；使滿足"
  },
  "innumerable": {
    "pos": "adj.",
    "en_def": "too many to be counted",
    "cn_def": "無數的"
  },
  "herbicide": {
    "pos": "n.",
    "en_def": "a chemical used to kill unwanted plants",
    "cn_def": "除草劑"
  },
  "frugality": {
    "pos": "n.",
    "en_def": "the habit of not wasting money or food",
    "cn_def": "節儉"
  }
};

const EXTRA_GLOSSES = {};
