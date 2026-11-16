// Topic 11 Subunit 2 Quiz Data: Soil, Water & Farm Equipment 土壤、水與農具
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S02 - Soil, Water & Farm Equipment 土壤、水與農具",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "soil",
    "pos": "n.",
    "cn_def": "土壤",
    "en_def": "the top layer of earth in which plants grow",
    "sentence": "Healthy {{BLANK}} is full of tiny living things, and it can hold water much better than dry dust after a long drought.",
    "cn": "健康的土壤充滿微小的生物，而且在長期乾旱後，它比乾燥的塵土更能保住水分。"
  },
  {
    "word": "nutrient",
    "pos": "n.",
    "cn_def": "養分；營養素",
    "en_def": "a substance that helps plants, animals or people grow",
    "sentence": "Plants take in each {{BLANK}} they need through their roots, so farmers test the soil to see what is missing.",
    "cn": "植物透過根部吸收所需的每一種養分，所以農民會檢測土壤，看看缺少了什麼。"
  },
  {
    "word": "nitrogen",
    "pos": "n.",
    "cn_def": "氮",
    "en_def": "a gas that plants need to grow green leaves",
    "sentence": "Beans can add {{BLANK}} to the soil, so organic farmers plant them between other crops instead of buying chemical fertilisers.",
    "cn": "豆類能為土壤增加氮，所以有機農民把它們種在其他作物之間，而不是購買化學肥料。"
  },
  {
    "word": "manure",
    "pos": "n.",
    "cn_def": "糞肥",
    "en_def": "animal waste put on land to help crops grow",
    "sentence": "The farm smelled terrible after the workers spread {{BLANK}} on the fields, but the vegetables grew very well later that year.",
    "cn": "工人在田裡撒了糞肥之後農場臭氣沖天，但那年稍晚蔬菜長得非常好。"
  },
  {
    "word": "mulch",
    "pos": "n.",
    "cn_def": "覆蓋物（護根）",
    "en_def": "material like leaves or straw spread over soil to keep it moist",
    "sentence": "We put a thick layer of {{BLANK}} around the young trees, so the soil stays damp and weeds cannot grow easily.",
    "cn": "我們在小樹周圍鋪了一層厚厚的覆蓋物，所以土壤能保持濕潤，雜草也不容易生長。"
  },
  {
    "word": "soil degradation",
    "pos": "n.",
    "cn_def": "土壤劣化",
    "en_def": "the loss of soil quality and health",
    "sentence": "Too many chemicals and heavy machines can cause {{BLANK}}, and farmers then need even more fertiliser to grow the same amount of food.",
    "cn": "過多的化學物質和重型機具會造成土壤劣化，於是農民需要更多肥料才能種出同樣多的糧食。"
  },
  {
    "word": "salinisation",
    "pos": "n.",
    "cn_def": "鹽化",
    "en_def": "the process of soil becoming too salty",
    "sentence": "Near the coast, seawater has caused the {{BLANK}} of many fields, so rice no longer grows there and some farmers have left.",
    "cn": "在沿海地區，海水造成許多農田鹽化，所以那裡不再能種稻，有些農民也已經離開。"
  },
  {
    "word": "sprinkler",
    "pos": "n.",
    "cn_def": "灑水器",
    "en_def": "a device that sprays water over plants or grass",
    "sentence": "The {{BLANK}} turns on automatically at six every morning, so the vegetables get water before the sun becomes too hot.",
    "cn": "灑水器每天早上六點會自動開啟，所以蔬菜能在太陽變得太熱之前得到水分。"
  },
  {
    "word": "drip irrigation",
    "pos": "n.",
    "cn_def": "滴灌",
    "en_def": "watering plants slowly through small tubes near their roots",
    "sentence": "Farmers in dry areas often use {{BLANK}} because it sends water straight to the roots, and very little is lost to the sun.",
    "cn": "乾燥地區的農民常使用滴灌，因為它把水直接送到根部，而且很少因日曬而流失。"
  },
  {
    "word": "groundwater",
    "pos": "n.",
    "cn_def": "地下水",
    "en_def": "water held under the ground in soil or rocks",
    "sentence": "Some fish farmers pump too much {{BLANK}}, and as a result the land in parts of Pingtung has slowly sunk.",
    "cn": "有些養殖業者抽取過多地下水，結果屏東部分地區的地面慢慢下陷了。"
  },
  {
    "word": "aquifer",
    "pos": "n.",
    "cn_def": "含水層",
    "en_def": "a layer of rock under the ground that holds water",
    "sentence": "The town gets its drinking water from a deep {{BLANK}}, but scientists warn that it will run dry if farms keep using so much.",
    "cn": "這個小鎮的飲用水來自一個很深的含水層，但科學家警告，如果農場繼續大量用水，它就會枯竭。"
  },
  {
    "word": "water table",
    "pos": "n.",
    "cn_def": "地下水位",
    "en_def": "the level below which the ground is full of water",
    "sentence": "The {{BLANK}} has dropped by several metres in recent years, so farmers must dig deeper wells to reach water.",
    "cn": "近年來地下水位已下降了好幾公尺，所以農民必須挖更深的井才能取到水。"
  },
  {
    "word": "tractor",
    "pos": "n.",
    "cn_def": "拖拉機；耕耘機",
    "en_def": "a strong farm vehicle used to pull machines",
    "sentence": "My uncle drives a small {{BLANK}} to prepare his fields, and he lets the children ride on it when they visit the farm.",
    "cn": "我叔叔開一台小型耕耘機來整地，而且孩子們到農場玩時他會讓他們坐上去。"
  },
  {
    "word": "combine harvester",
    "pos": "n.",
    "cn_def": "聯合收割機",
    "en_def": "a large machine that cuts and cleans grain in one go",
    "sentence": "A single {{BLANK}} can do the work of dozens of people, so a rice field that once took a week is now finished in an afternoon.",
    "cn": "一台聯合收割機能完成好幾十個人的工作，所以以前要花一週的稻田，現在一個下午就收割完了。"
  },
  {
    "word": "seed drill",
    "pos": "n.",
    "cn_def": "播種機",
    "en_def": "a machine that plants seeds in neat rows",
    "sentence": "The farmer bought a new {{BLANK}} last spring, and now his seeds are planted at exactly the right depth in straight lines.",
    "cn": "這位農夫去年春天買了一台新的播種機，現在他的種子都能以剛好的深度種成整齊的直線。"
  },
  {
    "word": "hoe",
    "pos": "n.",
    "cn_def": "鋤頭",
    "en_def": "a garden tool with a long handle used to break up soil",
    "sentence": "My grandmother still uses an old {{BLANK}} in her garden, and she says it is better exercise than going to the gym.",
    "cn": "我奶奶仍然在菜園裡用一把舊鋤頭，而且她說這比去健身房還要好的運動。"
  },
  {
    "word": "rake",
    "pos": "n.",
    "cn_def": "耙子",
    "en_def": "a tool with a row of teeth used to gather leaves or smooth soil",
    "sentence": "After the leaves fell in autumn, we used a {{BLANK}} to collect them, and then we added them to the compost pile.",
    "cn": "秋天落葉之後，我們用耙子把它們集中起來，然後加進堆肥堆裡。"
  },
  {
    "word": "sickle",
    "pos": "n.",
    "cn_def": "鐮刀",
    "en_def": "a curved blade with a short handle used for cutting crops",
    "sentence": "Before machines arrived, villagers cut rice with a {{BLANK}}, and the work was so tiring that their backs ached for days.",
    "cn": "在機器出現之前，村民用鐮刀割稻，而且工作累到他們的背痛了好幾天。"
  },
  {
    "word": "silo",
    "pos": "n.",
    "cn_def": "筒倉；穀倉塔",
    "en_def": "a tall tower used for storing grain or animal food",
    "sentence": "The grain is kept in a huge {{BLANK}} next to the farm, because it stays dry there and rats cannot get inside.",
    "cn": "穀物存放在農場旁邊一座巨大的筒倉裡，因為那裡能保持乾燥，老鼠也進不去。"
  },
  {
    "word": "barn",
    "pos": "n.",
    "cn_def": "穀倉；畜舍",
    "en_def": "a large farm building for animals, crops or machines",
    "sentence": "The cows sleep in the {{BLANK}} during typhoons, and the farmer checks on them every few hours to make sure they are safe.",
    "cn": "颱風期間乳牛睡在畜舍裡，而且農夫每隔幾小時就去查看，確保牠們安全。"
  },
  {
    "word": "granary",
    "pos": "n.",
    "cn_def": "糧倉",
    "en_def": "a building for storing grain",
    "sentence": "In ancient times, every village had a {{BLANK}} for storing rice, so people would not starve if the next harvest failed.",
    "cn": "在古代，每個村莊都有一座糧倉來儲存稻米，所以即使下一次收成失敗，人們也不會挨餓。"
  },
  {
    "word": "furrow",
    "pos": "n.",
    "cn_def": "犁溝；田溝",
    "en_def": "a long narrow line cut into soil for planting seeds",
    "sentence": "The children dropped one seed into each {{BLANK}}, and then they gently covered them with soil and gave them some water.",
    "cn": "孩子們在每一條田溝裡放一顆種子，然後輕輕蓋上泥土並澆一些水。"
  },
  {
    "word": "ditch",
    "pos": "n.",
    "cn_def": "水溝；溝渠",
    "en_def": "a long narrow channel dug to carry water away",
    "sentence": "The farmer dug a {{BLANK}} along the edge of the field, so the heavy summer rain could drain away instead of flooding the crops.",
    "cn": "農夫沿著田邊挖了一條溝渠，所以夏天的大雨可以排掉，而不會淹沒作物。"
  },
  {
    "word": "hose",
    "pos": "n.",
    "cn_def": "水管",
    "en_def": "a long rubber tube used to carry water",
    "sentence": "I watered the vegetables with a {{BLANK}} this morning, but I forgot to turn it off, so the garden turned into a small lake.",
    "cn": "我今天早上用水管給蔬菜澆水，但我忘了關掉，所以菜園變成了一個小湖。"
  },
  {
    "word": "polytunnel",
    "pos": "n.",
    "cn_def": "塑膠布棚（隧道式溫室）",
    "en_def": "a long plastic-covered tunnel for growing plants",
    "sentence": "Many strawberry farms in Miaoli use a {{BLANK}} to protect the fruit from rain, so visitors can still pick berries on wet days.",
    "cn": "苗栗許多草莓園使用塑膠布棚來保護果實不被雨淋，所以遊客即使在雨天也能採草莓。"
  },
  {
    "word": "pitchfork",
    "pos": "n.",
    "cn_def": "乾草叉",
    "en_def": "a tool with long metal points used to lift hay",
    "sentence": "The farmer lifted the hay with a {{BLANK}} and threw it into the barn, while his dog ran around barking happily.",
    "cn": "農夫用乾草叉把乾草叉起來丟進穀倉，而他的狗在旁邊開心地跑來跑去吠叫。"
  },
  {
    "word": "trough",
    "pos": "n.",
    "cn_def": "飼料槽；水槽",
    "en_def": "a long open container for animals' food or water",
    "sentence": "Every morning the farmer fills the {{BLANK}} with fresh water, and the thirsty pigs push each other to drink first.",
    "cn": "每天早上農夫把水槽裝滿清水，而口渴的豬會互相推擠搶著先喝。"
  },
  {
    "word": "fertility",
    "pos": "n.",
    "cn_def": "肥沃度；地力",
    "en_def": "the ability of land to produce good crops",
    "sentence": "Volcanic ash can increase the {{BLANK}} of the land, which is why farmers still grow crops near active volcanoes despite the danger.",
    "cn": "火山灰能提高土地的肥沃度，這就是為什麼儘管有危險，農民仍在活火山附近種植作物。"
  }
];

const MCQS = [
  {
    "q": "Healthy _____ is full of tiny living things, and it can hold water much better than dry dust after a long drought.",
    "options": [
      "delicacy",
      "soil",
      "smallholder",
      "butcher"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Plants take in each _____ they need through their roots, so farmers test the soil to see what is missing.",
    "options": [
      "flavouring",
      "leftovers",
      "nutrient",
      "salmonella"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Beans can add _____ to the soil, so organic farmers plant them between other crops instead of buying chemical fertilisers.",
    "options": [
      "nitrogen",
      "ranch",
      "harbinger",
      "traceability"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The farm smelled terrible after the workers spread _____ on the fields, but the vegetables grew very well later that year.",
    "options": [
      "nutritionist",
      "ranch",
      "compatibility",
      "manure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "We put a thick layer of _____ around the young trees, so the soil stays damp and weeds cannot grow easily.",
    "options": [
      "haul",
      "mulch",
      "multitude",
      "mismanagement"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Too many chemicals and heavy machines can cause _____, and farmers then need even more fertiliser to grow the same amount of food.",
    "options": [
      "bulk buying",
      "food shortage",
      "soil degradation",
      "crop rotation"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Near the coast, seawater has caused the _____ of many fields, so rice no longer grows there and some farmers have left.",
    "options": [
      "salinisation",
      "wheat",
      "intake",
      "vegan"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The _____ turns on automatically at six every morning, so the vegetables get water before the sun becomes too hot.",
    "options": [
      "stagnation",
      "sweetener",
      "dosage",
      "sprinkler"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Farmers in dry areas often use _____ because it sends water straight to the roots, and very little is lost to the sun.",
    "options": [
      "precision agriculture",
      "cold storage",
      "drip irrigation",
      "processed food"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Some fish farmers pump too much _____, and as a result the land in parts of Pingtung has slowly sunk.",
    "options": [
      "delicacy",
      "groundwater",
      "middleman",
      "wheat"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The town gets its drinking water from a deep _____, but scientists warn that it will run dry if farms keep using so much.",
    "options": [
      "overconsumption",
      "bioreactor",
      "upsurge",
      "aquifer"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The _____ has dropped by several metres in recent years, so farmers must dig deeper wells to reach water.",
    "options": [
      "water table",
      "food inspector",
      "grain reserve",
      "shelf life"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "My uncle drives a small _____ to prepare his fields, and he lets the children ride on it when they visit the farm.",
    "options": [
      "greenhouse",
      "carbohydrate",
      "tractor",
      "additive"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "A single _____ can do the work of dozens of people, so a rice field that once took a week is now finished in an afternoon.",
    "options": [
      "combine harvester",
      "food poisoning",
      "food bank",
      "lab-grown meat"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The farmer bought a new _____ last spring, and now his seeds are planted at exactly the right depth in straight lines.",
    "options": [
      "crop rotation",
      "food handler",
      "cash crop",
      "seed drill"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "My grandmother still uses an old _____ in her garden, and she says it is better exercise than going to the gym.",
    "options": [
      "flavouring",
      "hoe",
      "hydroponics",
      "viability"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "After the leaves fell in autumn, we used a _____ to collect them, and then we added them to the compost pile.",
    "options": [
      "elasticity",
      "deposit",
      "rake",
      "obesity"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Before machines arrived, villagers cut rice with a _____, and the work was so tiring that their backs ached for days.",
    "options": [
      "malpractice",
      "agronomist",
      "protein",
      "sickle"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The grain is kept in a huge _____ next to the farm, because it stays dry there and rats cannot get inside.",
    "options": [
      "silo",
      "agronomist",
      "overreliance",
      "exclusion"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The cows sleep in the _____ during typhoons, and the farmer checks on them every few hours to make sure they are safe.",
    "options": [
      "catastrophe",
      "barn",
      "volatility",
      "affordability"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "In ancient times, every village had a _____ for storing rice, so people would not starve if the next harvest failed.",
    "options": [
      "compatibility",
      "traceability",
      "granary",
      "carbohydrate"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The children dropped one seed into each _____, and then they gently covered them with soil and gave them some water.",
    "options": [
      "pasture",
      "bedrock",
      "frugality",
      "furrow"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The farmer dug a _____ along the edge of the field, so the heavy summer rain could drain away instead of flooding the crops.",
    "options": [
      "methodology",
      "ditch",
      "ranch",
      "feasibility"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "I watered the vegetables with a _____ this morning, but I forgot to turn it off, so the garden turned into a small lake.",
    "options": [
      "hose",
      "methodology",
      "overconsumption",
      "profusion"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Many strawberry farms in Miaoli use a _____ to protect the fruit from rain, so visitors can still pick berries on wet days.",
    "options": [
      "nutrition",
      "GMO",
      "polytunnel",
      "leniency"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The farmer lifted the hay with a _____ and threw it into the barn, while his dog ran around barking happily.",
    "options": [
      "feasibility",
      "bioreactor",
      "connoisseur",
      "pitchfork"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Every morning the farmer fills the _____ with fresh water, and the thirsty pigs push each other to drink first.",
    "options": [
      "connoisseur",
      "trough",
      "compatibility",
      "aspiration"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Volcanic ash can increase the _____ of the land, which is why farmers still grow crops near active volcanoes despite the danger.",
    "options": [
      "fertility",
      "procurement",
      "connoisseur",
      "catastrophe"
    ],
    "answer": 0,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "soil": {
    "pos": "n.",
    "en_def": "the top layer of earth in which plants grow",
    "cn_def": "土壤"
  },
  "nutrient": {
    "pos": "n.",
    "en_def": "a substance that helps plants, animals or people grow",
    "cn_def": "養分；營養素"
  },
  "nitrogen": {
    "pos": "n.",
    "en_def": "a gas that plants need to grow green leaves",
    "cn_def": "氮"
  },
  "manure": {
    "pos": "n.",
    "en_def": "animal waste put on land to help crops grow",
    "cn_def": "糞肥"
  },
  "mulch": {
    "pos": "n.",
    "en_def": "material like leaves or straw spread over soil to keep it moist",
    "cn_def": "覆蓋物（護根）"
  },
  "soil degradation": {
    "pos": "n.",
    "en_def": "the loss of soil quality and health",
    "cn_def": "土壤劣化"
  },
  "salinisation": {
    "pos": "n.",
    "en_def": "the process of soil becoming too salty",
    "cn_def": "鹽化"
  },
  "sprinkler": {
    "pos": "n.",
    "en_def": "a device that sprays water over plants or grass",
    "cn_def": "灑水器"
  },
  "drip irrigation": {
    "pos": "n.",
    "en_def": "watering plants slowly through small tubes near their roots",
    "cn_def": "滴灌"
  },
  "groundwater": {
    "pos": "n.",
    "en_def": "water held under the ground in soil or rocks",
    "cn_def": "地下水"
  },
  "aquifer": {
    "pos": "n.",
    "en_def": "a layer of rock under the ground that holds water",
    "cn_def": "含水層"
  },
  "water table": {
    "pos": "n.",
    "en_def": "the level below which the ground is full of water",
    "cn_def": "地下水位"
  },
  "tractor": {
    "pos": "n.",
    "en_def": "a strong farm vehicle used to pull machines",
    "cn_def": "拖拉機；耕耘機"
  },
  "combine harvester": {
    "pos": "n.",
    "en_def": "a large machine that cuts and cleans grain in one go",
    "cn_def": "聯合收割機"
  },
  "seed drill": {
    "pos": "n.",
    "en_def": "a machine that plants seeds in neat rows",
    "cn_def": "播種機"
  },
  "hoe": {
    "pos": "n.",
    "en_def": "a garden tool with a long handle used to break up soil",
    "cn_def": "鋤頭"
  },
  "rake": {
    "pos": "n.",
    "en_def": "a tool with a row of teeth used to gather leaves or smooth soil",
    "cn_def": "耙子"
  },
  "sickle": {
    "pos": "n.",
    "en_def": "a curved blade with a short handle used for cutting crops",
    "cn_def": "鐮刀"
  },
  "silo": {
    "pos": "n.",
    "en_def": "a tall tower used for storing grain or animal food",
    "cn_def": "筒倉；穀倉塔"
  },
  "barn": {
    "pos": "n.",
    "en_def": "a large farm building for animals, crops or machines",
    "cn_def": "穀倉；畜舍"
  },
  "granary": {
    "pos": "n.",
    "en_def": "a building for storing grain",
    "cn_def": "糧倉"
  },
  "furrow": {
    "pos": "n.",
    "en_def": "a long narrow line cut into soil for planting seeds",
    "cn_def": "犁溝；田溝"
  },
  "ditch": {
    "pos": "n.",
    "en_def": "a long narrow channel dug to carry water away",
    "cn_def": "水溝；溝渠"
  },
  "hose": {
    "pos": "n.",
    "en_def": "a long rubber tube used to carry water",
    "cn_def": "水管"
  },
  "polytunnel": {
    "pos": "n.",
    "en_def": "a long plastic-covered tunnel for growing plants",
    "cn_def": "塑膠布棚（隧道式溫室）"
  },
  "pitchfork": {
    "pos": "n.",
    "en_def": "a tool with long metal points used to lift hay",
    "cn_def": "乾草叉"
  },
  "trough": {
    "pos": "n.",
    "en_def": "a long open container for animals' food or water",
    "cn_def": "飼料槽；水槽"
  },
  "fertility": {
    "pos": "n.",
    "en_def": "the ability of land to produce good crops",
    "cn_def": "肥沃度；地力"
  },
  "delicacy": {
    "pos": "n.",
    "en_def": "a rare or expensive food that is special to eat",
    "cn_def": "佳餚；珍饈"
  },
  "smallholder": {
    "pos": "n.",
    "en_def": "a farmer who owns or rents a small piece of land",
    "cn_def": "小農"
  },
  "butcher": {
    "pos": "n.",
    "en_def": "a person who cuts and sells meat",
    "cn_def": "肉販；屠夫"
  },
  "flavouring": {
    "pos": "n.",
    "en_def": "a substance added to food to give it a particular taste",
    "cn_def": "調味料；香料"
  },
  "leftovers": {
    "pos": "n.",
    "en_def": "food that remains after a meal",
    "cn_def": "剩菜"
  },
  "salmonella": {
    "pos": "n.",
    "en_def": "a type of bacteria that causes food poisoning",
    "cn_def": "沙門氏菌"
  },
  "ranch": {
    "pos": "n.",
    "en_def": "a very large farm for raising cattle, horses or sheep",
    "cn_def": "大牧場"
  },
  "harbinger": {
    "pos": "n.",
    "en_def": "a sign that something is going to happen",
    "cn_def": "預兆；先兆"
  },
  "traceability": {
    "pos": "n.",
    "en_def": "the ability to follow where a product came from",
    "cn_def": "可追溯性；產銷履歷"
  },
  "nutritionist": {
    "pos": "n.",
    "en_def": "an expert on food and healthy eating",
    "cn_def": "營養師"
  },
  "compatibility": {
    "pos": "n.",
    "en_def": "the ability to exist or work together without problems",
    "cn_def": "相容性"
  },
  "haul": {
    "pos": "n.",
    "en_def": "an amount of something that has been caught or taken",
    "cn_def": "捕獲量；收穫"
  },
  "multitude": {
    "pos": "n.",
    "en_def": "a very large number of things or people",
    "cn_def": "大量；眾多"
  },
  "mismanagement": {
    "pos": "n.",
    "en_def": "bad or careless control of something",
    "cn_def": "管理不當"
  },
  "bulk buying": {
    "pos": "n.",
    "en_def": "buying large amounts at one time, usually at a lower price",
    "cn_def": "大量採購"
  },
  "food shortage": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough food",
    "cn_def": "糧食短缺"
  },
  "crop rotation": {
    "pos": "n.",
    "en_def": "growing different crops in a field in different years",
    "cn_def": "輪作"
  },
  "wheat": {
    "pos": "n.",
    "en_def": "a grain plant used to make flour and bread",
    "cn_def": "小麥"
  },
  "intake": {
    "pos": "n.",
    "en_def": "the amount of food or drink you take into your body",
    "cn_def": "攝取量"
  },
  "vegan": {
    "pos": "n.",
    "en_def": "a person who eats no animal products at all",
    "cn_def": "純素食者"
  },
  "stagnation": {
    "pos": "n.",
    "en_def": "a state of no growth or change",
    "cn_def": "停滯"
  },
  "sweetener": {
    "pos": "n.",
    "en_def": "a substance used instead of sugar to make food sweet",
    "cn_def": "甜味劑"
  },
  "dosage": {
    "pos": "n.",
    "en_def": "the amount of a medicine or chemical given at one time",
    "cn_def": "劑量"
  },
  "precision agriculture": {
    "pos": "n.",
    "en_def": "farming that uses data and technology to treat each part of a field correctly",
    "cn_def": "精準農業"
  },
  "cold storage": {
    "pos": "n.",
    "en_def": "keeping food in a cold place so it stays fresh",
    "cn_def": "冷藏庫；冷藏儲存"
  },
  "processed food": {
    "pos": "n.",
    "en_def": "food changed by factory methods, often with added chemicals",
    "cn_def": "加工食品"
  },
  "middleman": {
    "pos": "n.",
    "en_def": "a person who buys from producers and sells to shops or customers",
    "cn_def": "中間商；中盤商"
  },
  "overconsumption": {
    "pos": "n.",
    "en_def": "using or eating too much of something",
    "cn_def": "過度消費；過量攝取"
  },
  "bioreactor": {
    "pos": "n.",
    "en_def": "a large tank where cells or bacteria are grown",
    "cn_def": "生物反應器"
  },
  "upsurge": {
    "pos": "n.",
    "en_def": "a sudden increase",
    "cn_def": "激增"
  },
  "food inspector": {
    "pos": "n.",
    "en_def": "an official who checks that food and restaurants are safe",
    "cn_def": "食品稽查員"
  },
  "grain reserve": {
    "pos": "n.",
    "en_def": "a store of grain kept for emergencies",
    "cn_def": "儲備糧"
  },
  "shelf life": {
    "pos": "n.",
    "en_def": "how long a product can be kept before it goes bad",
    "cn_def": "保存期限；架售期"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building where plants are grown in warm conditions",
    "cn_def": "溫室"
  },
  "carbohydrate": {
    "pos": "n.",
    "en_def": "a nutrient in rice, bread and noodles that gives energy",
    "cn_def": "碳水化合物"
  },
  "additive": {
    "pos": "n.",
    "en_def": "a substance added to food to improve its colour, taste or life",
    "cn_def": "添加物"
  },
  "food poisoning": {
    "pos": "n.",
    "en_def": "illness caused by eating food that contains harmful bacteria",
    "cn_def": "食物中毒"
  },
  "food bank": {
    "pos": "n.",
    "en_def": "a place that gives free food to people in need",
    "cn_def": "食物銀行"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
  },
  "food handler": {
    "pos": "n.",
    "en_def": "a person whose job involves preparing or serving food",
    "cn_def": "食品從業人員"
  },
  "cash crop": {
    "pos": "n.",
    "en_def": "a crop grown to sell rather than to eat at home",
    "cn_def": "經濟作物"
  },
  "hydroponics": {
    "pos": "n.",
    "en_def": "growing plants in water with nutrients instead of soil",
    "cn_def": "水耕栽培"
  },
  "viability": {
    "pos": "n.",
    "en_def": "the ability to work successfully",
    "cn_def": "可行性；生存能力"
  },
  "elasticity": {
    "pos": "n.",
    "en_def": "how much demand changes when prices change",
    "cn_def": "彈性"
  },
  "deposit": {
    "pos": "n.",
    "en_def": "a layer of something left by water or natural processes",
    "cn_def": "沉積物；沉積層"
  },
  "obesity": {
    "pos": "n.",
    "en_def": "the state of being very overweight",
    "cn_def": "肥胖（症）"
  },
  "malpractice": {
    "pos": "n.",
    "en_def": "careless or illegal behaviour by a professional",
    "cn_def": "不當行為；瀆職"
  },
  "agronomist": {
    "pos": "n.",
    "en_def": "a scientist who studies soil and crops",
    "cn_def": "農藝學家"
  },
  "protein": {
    "pos": "n.",
    "en_def": "a nutrient in meat, eggs and beans that builds muscles",
    "cn_def": "蛋白質"
  },
  "overreliance": {
    "pos": "n.",
    "en_def": "depending too much on something",
    "cn_def": "過度依賴"
  },
  "exclusion": {
    "pos": "n.",
    "en_def": "the act of not allowing someone or something to take part",
    "cn_def": "排除；排斥"
  },
  "catastrophe": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "大災難"
  },
  "volatility": {
    "pos": "n.",
    "en_def": "the quality of changing suddenly and unpredictably",
    "cn_def": "不穩定；波動性"
  },
  "affordability": {
    "pos": "n.",
    "en_def": "how cheap enough something is for people to buy",
    "cn_def": "可負擔性"
  },
  "pasture": {
    "pos": "n.",
    "en_def": "land covered with grass where animals feed",
    "cn_def": "牧場；牧草地"
  },
  "bedrock": {
    "pos": "n.",
    "en_def": "the basic idea or thing on which others are built",
    "cn_def": "基礎；根本"
  },
  "frugality": {
    "pos": "n.",
    "en_def": "the habit of not wasting money or food",
    "cn_def": "節儉"
  },
  "methodology": {
    "pos": "n.",
    "en_def": "the methods used in a study or activity",
    "cn_def": "研究方法；方法論"
  },
  "feasibility": {
    "pos": "n.",
    "en_def": "how possible or practical something is",
    "cn_def": "可行性"
  },
  "profusion": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "大量；豐富"
  },
  "nutrition": {
    "pos": "n.",
    "en_def": "the food you eat and how it affects your health",
    "cn_def": "營養"
  },
  "gmo": {
    "pos": "n.",
    "en_def": "a living thing whose genes have been changed by science",
    "cn_def": "基因改造生物"
  },
  "leniency": {
    "pos": "n.",
    "en_def": "the quality of being less strict than expected",
    "cn_def": "寬大；從輕"
  },
  "connoisseur": {
    "pos": "n.",
    "en_def": "an expert who knows a lot about food, drink or art",
    "cn_def": "鑑賞家；行家"
  },
  "aspiration": {
    "pos": "n.",
    "en_def": "a strong hope to achieve something",
    "cn_def": "抱負；志向"
  },
  "procurement": {
    "pos": "n.",
    "en_def": "the process of buying supplies for an organisation",
    "cn_def": "採購"
  }
};

const EXTRA_GLOSSES = {};
