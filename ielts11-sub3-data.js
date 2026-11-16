// Topic 11 Subunit 3 Quiz Data: Livestock & Animal Farming 畜牧與動物養殖
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S03 - Livestock & Animal Farming 畜牧與動物養殖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dairy",
    "pos": "adj.",
    "cn_def": "乳製品的；酪農的",
    "en_def": "made from milk, or connected with producing milk",
    "sentence": "Cheese, yoghurt and butter are all {{BLANK}} products, so people who cannot drink milk often have trouble eating them too.",
    "cn": "起司、優格和奶油都是乳製品，所以不能喝牛奶的人常常也很難吃這些東西。"
  },
  {
    "word": "pasture",
    "pos": "n.",
    "cn_def": "牧場；牧草地",
    "en_def": "land covered with grass where animals feed",
    "sentence": "The cows spend the day on the green {{BLANK}}, and in the evening the farmer leads them back to the barn for milking.",
    "cn": "乳牛整天待在綠色的牧草地上，到了傍晚農夫再帶牠們回到牛舍擠奶。"
  },
  {
    "word": "meadow",
    "pos": "n.",
    "cn_def": "草地；草原",
    "en_def": "a field of grass and wild flowers",
    "sentence": "We had a picnic in a {{BLANK}} full of wild flowers, but we had to leave quickly because a group of curious goats came over.",
    "cn": "我們在一片開滿野花的草地上野餐，但因為一群好奇的山羊跑了過來，我們只好趕快離開。"
  },
  {
    "word": "fodder",
    "pos": "n.",
    "cn_def": "（家畜）飼料；草料",
    "en_def": "food such as hay given to farm animals",
    "sentence": "The dry winter left little grass on the hills, so farmers had to buy {{BLANK}} to keep their sheep alive.",
    "cn": "乾燥的冬天讓山坡上幾乎沒有草，所以農民必須購買草料來讓羊存活。"
  },
  {
    "word": "hay",
    "pos": "n.",
    "cn_def": "乾草",
    "en_def": "grass that has been cut and dried to feed animals",
    "sentence": "The farmers cut the grass in summer and dry it into {{BLANK}}, so the horses have enough food during the cold months.",
    "cn": "農民在夏天割草並曬成乾草，所以馬匹在寒冷的月份有足夠的食物。"
  },
  {
    "word": "silage",
    "pos": "n.",
    "cn_def": "青貯飼料",
    "en_def": "green plants stored without air and used as animal food",
    "sentence": "The farmer wraps the fresh grass in plastic to make {{BLANK}}, and the cows eat it happily all winter.",
    "cn": "農夫把新鮮的牧草用塑膠包起來做成青貯飼料，而乳牛整個冬天都吃得很開心。"
  },
  {
    "word": "pigsty",
    "pos": "n.",
    "cn_def": "豬圈",
    "en_def": "a small building or area where pigs are kept",
    "sentence": "The old {{BLANK}} behind the farmhouse was cleaned every day, but the smell still reached the neighbours when the wind blew.",
    "cn": "農舍後面的舊豬圈每天都會清理，但風一吹，臭味還是會飄到鄰居家。"
  },
  {
    "word": "chicken coop",
    "pos": "n.",
    "cn_def": "雞舍；雞籠",
    "en_def": "a small house where chickens are kept",
    "sentence": "We built a {{BLANK}} in the backyard last year, and now we collect fresh eggs every morning before school.",
    "cn": "我們去年在後院蓋了一個雞舍，現在每天早上上學前都能撿到新鮮雞蛋。"
  },
  {
    "word": "battery cage",
    "pos": "n.",
    "cn_def": "層架式雞籠（格子籠）",
    "en_def": "a very small cage where egg-laying hens are kept",
    "sentence": "Hens in a {{BLANK}} cannot even spread their wings, so many shoppers now choose eggs from farms that let chickens walk around.",
    "cn": "關在格子籠裡的母雞連翅膀都無法張開，所以現在許多消費者選擇讓雞可以四處走動的農場所生產的雞蛋。"
  },
  {
    "word": "free-range",
    "pos": "adj.",
    "cn_def": "放養的；放牧的",
    "en_def": "(of farm animals) allowed to move around outside",
    "sentence": "{{BLANK}} eggs cost a little more at the supermarket, but my mother buys them because she believes the hens live happier lives.",
    "cn": "放養雞蛋在超市貴一點，但我媽媽還是會買，因為她相信那些母雞過得比較快樂。"
  },
  {
    "word": "slaughterhouse",
    "pos": "n.",
    "cn_def": "屠宰場",
    "en_def": "a building where animals are killed for meat",
    "sentence": "The town's old {{BLANK}} closed ten years ago, and it has now been turned into a cafe and art space.",
    "cn": "鎮上的舊屠宰場十年前關閉了，而它現在已經改建成咖啡廳和藝術空間。"
  },
  {
    "word": "slaughter",
    "pos": "v.",
    "cn_def": "屠宰",
    "en_def": "to kill animals for food",
    "sentence": "Farmers in the village used to {{BLANK}} a pig before Lunar New Year, and every family received some meat for the celebrations.",
    "cn": "村裡的農民以前會在農曆新年前屠宰一頭豬，而且每戶人家都能分到一些肉來過節。"
  },
  {
    "word": "butcher",
    "pos": "n.",
    "cn_def": "肉販；屠夫",
    "en_def": "a person who cuts and sells meat",
    "sentence": "The {{BLANK}} at the morning market cuts the pork exactly the way my grandmother likes it, so she never buys meat anywhere else.",
    "cn": "早市的肉販會完全照我奶奶喜歡的方式切豬肉，所以她從不在別的地方買肉。"
  },
  {
    "word": "rear",
    "pos": "v.",
    "cn_def": "飼養；養育",
    "en_def": "to look after animals until they are fully grown",
    "sentence": "Their family has {{BLANK}} ducks in Yilan for many years, and their duck meat is famous all over the county.",
    "cn": "他們家在宜蘭養鴨已經很多年了，而且他們的鴨肉在全縣都很有名。"
  },
  {
    "word": "fatten",
    "pos": "v.",
    "cn_def": "養肥",
    "en_def": "to make an animal fat before it is killed for food",
    "sentence": "Some farmers {{BLANK}} their cattle with corn for months, but grass-fed beef is becoming more popular because it is seen as healthier.",
    "cn": "有些農民用玉米把牛養肥好幾個月，但草飼牛肉越來越受歡迎，因為它被認為比較健康。"
  },
  {
    "word": "antibiotic",
    "pos": "n.",
    "cn_def": "抗生素",
    "en_def": "a medicine that kills bacteria",
    "sentence": "If farmers give animals an {{BLANK}} too often, bacteria may become stronger, and medicines may stop working for humans too.",
    "cn": "如果農民太常給動物使用抗生素，細菌可能會變得更強，而藥物對人類也可能失效。"
  },
  {
    "word": "growth hormone",
    "pos": "n.",
    "cn_def": "生長激素",
    "en_def": "a chemical that makes animals grow bigger faster",
    "sentence": "Some countries allow farmers to give cattle {{BLANK}}, but others have banned it because people worry about the effects on health.",
    "cn": "有些國家允許農民給牛使用生長激素，但其他國家已經禁止，因為人們擔心它對健康的影響。"
  },
  {
    "word": "animal welfare",
    "pos": "n.",
    "cn_def": "動物福利",
    "en_def": "the health and comfort of animals",
    "sentence": "The supermarket now sells eggs with an {{BLANK}} label, so customers can see that the hens were treated kindly.",
    "cn": "這間超市現在販售貼有動物福利標章的雞蛋，所以顧客可以知道母雞受到善待。"
  },
  {
    "word": "factory farming",
    "pos": "n.",
    "cn_def": "工廠化養殖",
    "en_def": "keeping large numbers of animals indoors to produce cheap food",
    "sentence": "{{BLANK}} produces cheap meat for millions of people, but critics say the animals suffer because they have so little space.",
    "cn": "工廠化養殖為數百萬人生產便宜的肉品，但批評者說動物因為空間太小而受苦。"
  },
  {
    "word": "shear",
    "pos": "v.",
    "cn_def": "剪（羊毛）",
    "en_def": "to cut the wool off a sheep",
    "sentence": "The farmers {{BLANK}} the sheep every spring, so the animals stay cool in summer and the wool can be sold.",
    "cn": "農民每年春天替羊剪毛，所以羊在夏天能保持涼爽，羊毛也可以拿去賣。",
    "alts": [
      "sheared",
      "shorn"
    ]
  },
  {
    "word": "fleece",
    "pos": "n.",
    "cn_def": "羊毛（整片）",
    "en_def": "the wool coat of a sheep",
    "sentence": "Each {{BLANK}} was washed and dried in the sun, and then the women spun it into thread for warm winter sweaters.",
    "cn": "每一片羊毛都經過清洗並在陽光下曬乾，然後婦女們把它紡成線，用來織保暖的冬季毛衣。"
  },
  {
    "word": "hatchery",
    "pos": "n.",
    "cn_def": "孵化場",
    "en_def": "a place where eggs are kept warm until young birds or fish come out",
    "sentence": "The {{BLANK}} produces thousands of baby chickens every day, and they are sent to farms all over the island by truck.",
    "cn": "這座孵化場每天生產數千隻小雞，然後用卡車送到全島各地的農場。"
  },
  {
    "word": "broiler",
    "pos": "n.",
    "cn_def": "肉雞",
    "en_def": "a young chicken raised for its meat",
    "sentence": "A modern {{BLANK}} grows so quickly that it is ready to sell in about six weeks, but some people think this is unnatural.",
    "cn": "現代的肉雞長得非常快，大約六週就可以出售，但有些人認為這很不自然。"
  },
  {
    "word": "beekeeping",
    "pos": "n.",
    "cn_def": "養蜂",
    "en_def": "the work of keeping bees for honey",
    "sentence": "My uncle took up {{BLANK}} after he retired, and now he gives jars of honey to all his friends at Mid-Autumn Festival.",
    "cn": "我舅舅退休後開始養蜂，現在每到中秋節他都會送朋友們一罐罐蜂蜜。"
  },
  {
    "word": "beehive",
    "pos": "n.",
    "cn_def": "蜂巢；蜂箱",
    "en_def": "a box or structure where bees live and make honey",
    "sentence": "The farmer placed a {{BLANK}} at the edge of the orchard, because the bees help the fruit trees and also produce honey.",
    "cn": "農夫在果園邊緣放了一個蜂箱，因為蜜蜂能幫助果樹授粉，也能生產蜂蜜。"
  },
  {
    "word": "milking machine",
    "pos": "n.",
    "cn_def": "擠奶機",
    "en_def": "a machine used to take milk from cows",
    "sentence": "The farm bought a {{BLANK}} last year, so the workers no longer get up at four o'clock to milk the cows by hand.",
    "cn": "這座農場去年買了一台擠奶機，所以工人不再需要凌晨四點起床用手擠牛奶。"
  },
  {
    "word": "ranch",
    "pos": "n.",
    "cn_def": "大牧場",
    "en_def": "a very large farm for raising cattle, horses or sheep",
    "sentence": "My cousin worked on a cattle {{BLANK}} in Australia for a year, and he learned to ride a horse and fix fences.",
    "cn": "我表哥在澳洲的養牛大牧場工作了一年，而且學會了騎馬和修理圍籬。"
  },
  {
    "word": "lamb",
    "pos": "n.",
    "cn_def": "小羊；羊肉",
    "en_def": "a young sheep, or its meat",
    "sentence": "The newborn {{BLANK}} could stand up within an hour, and the children watched quietly as it drank milk from its mother.",
    "cn": "這隻剛出生的小羊不到一小時就能站起來，孩子們靜靜地看著牠喝母羊的奶。"
  }
];

const MCQS = [
  {
    "q": "Cheese, yoghurt and butter are all _____ products, so people who cannot drink milk often have trouble eating them too.",
    "options": [
      "proprietary",
      "inert",
      "predatory",
      "dairy"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The cows spend the day on the green _____, and in the evening the farmer leads them back to the barn for milking.",
    "options": [
      "upsurge",
      "pasture",
      "vineyard",
      "connoisseur"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "We had a picnic in a _____ full of wild flowers, but we had to leave quickly because a group of curious goats came over.",
    "options": [
      "superfood",
      "overreliance",
      "meadow",
      "stagnation"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The dry winter left little grass on the hills, so farmers had to buy _____ to keep their sheep alive.",
    "options": [
      "fodder",
      "additive",
      "overproduction",
      "vineyard"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The farmers cut the grass in summer and dry it into _____, so the horses have enough food during the cold months.",
    "options": [
      "fibre",
      "connoisseur",
      "rigour",
      "hay"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The farmer wraps the fresh grass in plastic to make _____, and the cows eat it happily all winter.",
    "options": [
      "upsurge",
      "refinement",
      "silage",
      "nutrition"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The old _____ behind the farmhouse was cleaned every day, but the smell still reached the neighbours when the wind blew.",
    "options": [
      "allergen",
      "pigsty",
      "bedrock",
      "entitlement"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "We built a _____ in the backyard last year, and now we collect fresh eggs every morning before school.",
    "options": [
      "chicken coop",
      "soil degradation",
      "food handler",
      "food delivery app"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Hens in a _____ cannot even spread their wings, so many shoppers now choose eggs from farms that let chickens walk around.",
    "options": [
      "lab-grown meat",
      "nutrition label",
      "Green Revolution",
      "battery cage"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "_____ eggs cost a little more at the supermarket, but my mother buys them because she believes the hens live happier lives.",
    "options": [
      "free-range",
      "coarse",
      "residual",
      "misguided"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The town's old _____ closed ten years ago, and it has now been turned into a cafe and art space.",
    "options": [
      "sustenance",
      "slaughterhouse",
      "nutritionist",
      "reliance"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Farmers in the village used to _____ a pig before Lunar New Year, and every family received some meat for the celebrations.",
    "options": [
      "fathom",
      "smother",
      "slaughter",
      "till"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ at the morning market cuts the pork exactly the way my grandmother likes it, so she never buys meat anywhere else.",
    "options": [
      "smallholder",
      "infusion",
      "mycoprotein",
      "butcher"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Their family has _____ ducks in Yilan for many years, and their duck meat is famous all over the county.",
    "options": [
      "gratify",
      "devour",
      "rear",
      "pickle"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Some farmers _____ their cattle with corn for months, but grass-fed beef is becoming more popular because it is seen as healthier.",
    "options": [
      "fatten",
      "germinate",
      "savour",
      "indulge"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "If farmers give animals an _____ too often, bacteria may become stronger, and medicines may stop working for humans too.",
    "options": [
      "deregulation",
      "antibiotic",
      "self-sufficiency",
      "disincentive"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Some countries allow farmers to give cattle _____, but others have banned it because people worry about the effects on health.",
    "options": [
      "food waste",
      "water table",
      "edible insect",
      "growth hormone"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The supermarket now sells eggs with an _____ label, so customers can see that the hens were treated kindly.",
    "options": [
      "vertical farming",
      "a bad apple",
      "animal welfare",
      "serving size"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "_____ produces cheap meat for millions of people, but critics say the animals suffer because they have so little space.",
    "options": [
      "serving size",
      "factory farming",
      "food delivery app",
      "Green Revolution"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The farmers _____ the sheep every spring, so the animals stay cool in summer and the wool can be sold.",
    "options": [
      "shear",
      "savour",
      "smother",
      "germinate"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Each _____ was washed and dried in the sun, and then the women spun it into thread for warm winter sweaters.",
    "options": [
      "ditch",
      "fleece",
      "mismanagement",
      "pitchfork"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The _____ produces thousands of baby chickens every day, and they are sent to farms all over the island by truck.",
    "options": [
      "rationing",
      "methodology",
      "hatchery",
      "salinisation"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "A modern _____ grows so quickly that it is ready to sell in about six weeks, but some people think this is unnatural.",
    "options": [
      "nutritionist",
      "deposit",
      "overreliance",
      "broiler"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "My uncle took up _____ after he retired, and now he gives jars of honey to all his friends at Mid-Autumn Festival.",
    "options": [
      "beekeeping",
      "backbone",
      "salinisation",
      "hunger"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The farmer placed a _____ at the edge of the orchard, because the bees help the fruit trees and also produce honey.",
    "options": [
      "escalation",
      "precedence",
      "allergen",
      "beehive"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The farm bought a _____ last year, so the workers no longer get up at four o'clock to milk the cows by hand.",
    "options": [
      "cold chain",
      "milking machine",
      "food scraps",
      "lab-grown meat"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "My cousin worked on a cattle _____ in Australia for a year, and he learned to ride a horse and fix fences.",
    "options": [
      "vineyard",
      "aquaponics",
      "ranch",
      "silo"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The newborn _____ could stand up within an hour, and the children watched quietly as it drank milk from its mother.",
    "options": [
      "lamb",
      "disincentive",
      "recurrence",
      "barn"
    ],
    "answer": 0,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "dairy": {
    "pos": "adj.",
    "en_def": "made from milk, or connected with producing milk",
    "cn_def": "乳製品的；酪農的"
  },
  "pasture": {
    "pos": "n.",
    "en_def": "land covered with grass where animals feed",
    "cn_def": "牧場；牧草地"
  },
  "meadow": {
    "pos": "n.",
    "en_def": "a field of grass and wild flowers",
    "cn_def": "草地；草原"
  },
  "fodder": {
    "pos": "n.",
    "en_def": "food such as hay given to farm animals",
    "cn_def": "（家畜）飼料；草料"
  },
  "hay": {
    "pos": "n.",
    "en_def": "grass that has been cut and dried to feed animals",
    "cn_def": "乾草"
  },
  "silage": {
    "pos": "n.",
    "en_def": "green plants stored without air and used as animal food",
    "cn_def": "青貯飼料"
  },
  "pigsty": {
    "pos": "n.",
    "en_def": "a small building or area where pigs are kept",
    "cn_def": "豬圈"
  },
  "chicken coop": {
    "pos": "n.",
    "en_def": "a small house where chickens are kept",
    "cn_def": "雞舍；雞籠"
  },
  "battery cage": {
    "pos": "n.",
    "en_def": "a very small cage where egg-laying hens are kept",
    "cn_def": "層架式雞籠（格子籠）"
  },
  "free-range": {
    "pos": "adj.",
    "en_def": "(of farm animals) allowed to move around outside",
    "cn_def": "放養的；放牧的"
  },
  "slaughterhouse": {
    "pos": "n.",
    "en_def": "a building where animals are killed for meat",
    "cn_def": "屠宰場"
  },
  "slaughter": {
    "pos": "v.",
    "en_def": "to kill animals for food",
    "cn_def": "屠宰"
  },
  "butcher": {
    "pos": "n.",
    "en_def": "a person who cuts and sells meat",
    "cn_def": "肉販；屠夫"
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
  "antibiotic": {
    "pos": "n.",
    "en_def": "a medicine that kills bacteria",
    "cn_def": "抗生素"
  },
  "growth hormone": {
    "pos": "n.",
    "en_def": "a chemical that makes animals grow bigger faster",
    "cn_def": "生長激素"
  },
  "animal welfare": {
    "pos": "n.",
    "en_def": "the health and comfort of animals",
    "cn_def": "動物福利"
  },
  "factory farming": {
    "pos": "n.",
    "en_def": "keeping large numbers of animals indoors to produce cheap food",
    "cn_def": "工廠化養殖"
  },
  "shear": {
    "pos": "v.",
    "en_def": "to cut the wool off a sheep",
    "cn_def": "剪（羊毛）"
  },
  "fleece": {
    "pos": "n.",
    "en_def": "the wool coat of a sheep",
    "cn_def": "羊毛（整片）"
  },
  "hatchery": {
    "pos": "n.",
    "en_def": "a place where eggs are kept warm until young birds or fish come out",
    "cn_def": "孵化場"
  },
  "broiler": {
    "pos": "n.",
    "en_def": "a young chicken raised for its meat",
    "cn_def": "肉雞"
  },
  "beekeeping": {
    "pos": "n.",
    "en_def": "the work of keeping bees for honey",
    "cn_def": "養蜂"
  },
  "beehive": {
    "pos": "n.",
    "en_def": "a box or structure where bees live and make honey",
    "cn_def": "蜂巢；蜂箱"
  },
  "milking machine": {
    "pos": "n.",
    "en_def": "a machine used to take milk from cows",
    "cn_def": "擠奶機"
  },
  "ranch": {
    "pos": "n.",
    "en_def": "a very large farm for raising cattle, horses or sheep",
    "cn_def": "大牧場"
  },
  "lamb": {
    "pos": "n.",
    "en_def": "a young sheep, or its meat",
    "cn_def": "小羊；羊肉"
  },
  "proprietary": {
    "pos": "adj.",
    "en_def": "owned by a company and protected by law",
    "cn_def": "專利的；專有的"
  },
  "inert": {
    "pos": "adj.",
    "en_def": "not producing a chemical reaction",
    "cn_def": "惰性的；無作用的"
  },
  "predatory": {
    "pos": "adj.",
    "en_def": "trying to take advantage of weaker people",
    "cn_def": "掠奪性的；剝削的"
  },
  "upsurge": {
    "pos": "n.",
    "en_def": "a sudden increase",
    "cn_def": "激增"
  },
  "vineyard": {
    "pos": "n.",
    "en_def": "a farm where grapes are grown",
    "cn_def": "葡萄園"
  },
  "connoisseur": {
    "pos": "n.",
    "en_def": "an expert who knows a lot about food, drink or art",
    "cn_def": "鑑賞家；行家"
  },
  "superfood": {
    "pos": "n.",
    "en_def": "a food said to be especially good for your health",
    "cn_def": "超級食物"
  },
  "overreliance": {
    "pos": "n.",
    "en_def": "depending too much on something",
    "cn_def": "過度依賴"
  },
  "stagnation": {
    "pos": "n.",
    "en_def": "a state of no growth or change",
    "cn_def": "停滯"
  },
  "additive": {
    "pos": "n.",
    "en_def": "a substance added to food to improve its colour, taste or life",
    "cn_def": "添加物"
  },
  "overproduction": {
    "pos": "n.",
    "en_def": "producing more of something than people need",
    "cn_def": "生產過剩"
  },
  "fibre": {
    "pos": "n.",
    "en_def": "the part of plant food that helps digestion",
    "cn_def": "纖維"
  },
  "rigour": {
    "pos": "n.",
    "en_def": "great care and attention to detail",
    "cn_def": "嚴謹"
  },
  "refinement": {
    "pos": "n.",
    "en_def": "a small change that improves something",
    "cn_def": "改良；精煉"
  },
  "nutrition": {
    "pos": "n.",
    "en_def": "the food you eat and how it affects your health",
    "cn_def": "營養"
  },
  "allergen": {
    "pos": "n.",
    "en_def": "a substance that causes an allergic reaction",
    "cn_def": "過敏原"
  },
  "bedrock": {
    "pos": "n.",
    "en_def": "the basic idea or thing on which others are built",
    "cn_def": "基礎；根本"
  },
  "entitlement": {
    "pos": "n.",
    "en_def": "the right to have or receive something",
    "cn_def": "應得的權利"
  },
  "soil degradation": {
    "pos": "n.",
    "en_def": "the loss of soil quality and health",
    "cn_def": "土壤劣化"
  },
  "food handler": {
    "pos": "n.",
    "en_def": "a person whose job involves preparing or serving food",
    "cn_def": "食品從業人員"
  },
  "food delivery app": {
    "pos": "n.",
    "en_def": "a phone app used to order meals to your home",
    "cn_def": "外送應用程式"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
  },
  "nutrition label": {
    "pos": "n.",
    "en_def": "information on a food package about its nutrients",
    "cn_def": "營養標示"
  },
  "green revolution": {
    "pos": "n.",
    "en_def": "the rapid rise in crop production in the 1960s using new seeds and chemicals",
    "cn_def": "綠色革命"
  },
  "coarse": {
    "pos": "adj.",
    "en_def": "rough and not fine or smooth",
    "cn_def": "粗糙的；粗的"
  },
  "residual": {
    "pos": "adj.",
    "en_def": "remaining after most of something has gone",
    "cn_def": "殘留的"
  },
  "misguided": {
    "pos": "adj.",
    "en_def": "based on wrong ideas or judgement",
    "cn_def": "被誤導的；錯誤的"
  },
  "sustenance": {
    "pos": "n.",
    "en_def": "food and drink that keeps someone alive",
    "cn_def": "食物；營養來源"
  },
  "nutritionist": {
    "pos": "n.",
    "en_def": "an expert on food and healthy eating",
    "cn_def": "營養師"
  },
  "reliance": {
    "pos": "n.",
    "en_def": "the state of depending on something",
    "cn_def": "依賴"
  },
  "fathom": {
    "pos": "v.",
    "en_def": "to understand something difficult",
    "cn_def": "理解；看透"
  },
  "smother": {
    "pos": "v.",
    "en_def": "to cover something completely so it cannot breathe or grow",
    "cn_def": "覆蓋；悶死"
  },
  "till": {
    "pos": "v.",
    "en_def": "to prepare and turn over soil for growing crops",
    "cn_def": "耕（地）"
  },
  "smallholder": {
    "pos": "n.",
    "en_def": "a farmer who owns or rents a small piece of land",
    "cn_def": "小農"
  },
  "infusion": {
    "pos": "n.",
    "en_def": "a drink made by soaking leaves or fruit in hot water; or adding something new",
    "cn_def": "浸泡液；注入"
  },
  "mycoprotein": {
    "pos": "n.",
    "en_def": "protein made from a type of fungus, used instead of meat",
    "cn_def": "真菌蛋白"
  },
  "gratify": {
    "pos": "v.",
    "en_def": "to please someone or satisfy a desire",
    "cn_def": "使滿足；使高興"
  },
  "devour": {
    "pos": "v.",
    "en_def": "to eat something quickly and hungrily",
    "cn_def": "狼吞虎嚥；吞食"
  },
  "pickle": {
    "pos": "v.",
    "en_def": "to keep food in vinegar or salt water",
    "cn_def": "醃漬"
  },
  "germinate": {
    "pos": "v.",
    "en_def": "(of a seed) to start to grow",
    "cn_def": "發芽"
  },
  "savour": {
    "pos": "v.",
    "en_def": "to enjoy the taste of food slowly",
    "cn_def": "細細品嚐"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow yourself to enjoy something special",
    "cn_def": "沉溺；放縱享受"
  },
  "deregulation": {
    "pos": "n.",
    "en_def": "the removal of government rules from an industry",
    "cn_def": "解除管制；鬆綁"
  },
  "self-sufficiency": {
    "pos": "n.",
    "en_def": "the ability to produce everything you need yourself",
    "cn_def": "自給自足"
  },
  "disincentive": {
    "pos": "n.",
    "en_def": "something that makes people less willing to do something",
    "cn_def": "抑制因素；阻礙"
  },
  "food waste": {
    "pos": "n.",
    "en_def": "food that is thrown away instead of eaten",
    "cn_def": "食物浪費；廚餘"
  },
  "water table": {
    "pos": "n.",
    "en_def": "the level below which the ground is full of water",
    "cn_def": "地下水位"
  },
  "edible insect": {
    "pos": "n.",
    "en_def": "an insect that is safe for people to eat",
    "cn_def": "可食用昆蟲"
  },
  "vertical farming": {
    "pos": "n.",
    "en_def": "growing crops in stacked layers, often inside buildings",
    "cn_def": "垂直農法"
  },
  "a bad apple": {
    "pos": "n.phr.",
    "en_def": "one bad person who has a bad effect on others",
    "cn_def": "害群之馬"
  },
  "serving size": {
    "pos": "n.",
    "en_def": "the amount of food that counts as one portion on a label",
    "cn_def": "每份份量"
  },
  "ditch": {
    "pos": "n.",
    "en_def": "a long narrow channel dug to carry water away",
    "cn_def": "水溝；溝渠"
  },
  "mismanagement": {
    "pos": "n.",
    "en_def": "bad or careless control of something",
    "cn_def": "管理不當"
  },
  "pitchfork": {
    "pos": "n.",
    "en_def": "a tool with long metal points used to lift hay",
    "cn_def": "乾草叉"
  },
  "rationing": {
    "pos": "n.",
    "en_def": "limiting the amount of food each person may have",
    "cn_def": "配給（制度）"
  },
  "methodology": {
    "pos": "n.",
    "en_def": "the methods used in a study or activity",
    "cn_def": "研究方法；方法論"
  },
  "salinisation": {
    "pos": "n.",
    "en_def": "the process of soil becoming too salty",
    "cn_def": "鹽化"
  },
  "deposit": {
    "pos": "n.",
    "en_def": "a layer of something left by water or natural processes",
    "cn_def": "沉積物；沉積層"
  },
  "backbone": {
    "pos": "n.",
    "en_def": "the most important part that supports a system",
    "cn_def": "支柱；骨幹"
  },
  "hunger": {
    "pos": "n.",
    "en_def": "the state of not having enough food to eat",
    "cn_def": "飢餓"
  },
  "escalation": {
    "pos": "n.",
    "en_def": "a rapid increase in size or seriousness",
    "cn_def": "升級；加劇"
  },
  "precedence": {
    "pos": "n.",
    "en_def": "the right to be considered more important",
    "cn_def": "優先權"
  },
  "cold chain": {
    "pos": "n.",
    "en_def": "a system that keeps food cold from farm to shop",
    "cn_def": "冷鏈"
  },
  "food scraps": {
    "pos": "n.",
    "en_def": "small pieces of leftover food that are thrown away",
    "cn_def": "廚餘碎屑"
  },
  "aquaponics": {
    "pos": "n.",
    "en_def": "a system where fish and plants are raised together in water",
    "cn_def": "魚菜共生"
  },
  "silo": {
    "pos": "n.",
    "en_def": "a tall tower used for storing grain or animal food",
    "cn_def": "筒倉；穀倉塔"
  },
  "recurrence": {
    "pos": "n.",
    "en_def": "the act of happening again",
    "cn_def": "再次發生；復發"
  },
  "barn": {
    "pos": "n.",
    "en_def": "a large farm building for animals, crops or machines",
    "cn_def": "穀倉；畜舍"
  }
};

const EXTRA_GLOSSES = {};
