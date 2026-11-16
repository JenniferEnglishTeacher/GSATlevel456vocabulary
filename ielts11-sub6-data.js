// Topic 11 Subunit 6 Quiz Data: Nutrition, Diet & Food Safety 營養、飲食與食品安全
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S06 - Nutrition, Diet & Food Safety 營養、飲食與食品安全",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "nutrition",
    "pos": "n.",
    "cn_def": "營養",
    "en_def": "the food you eat and how it affects your health",
    "sentence": "Good {{BLANK}} is important for teenagers because they are still growing, so schools try to serve balanced lunches.",
    "cn": "良好的營養對青少年很重要，因為他們還在成長，所以學校努力提供均衡的午餐。"
  },
  {
    "word": "nutritious",
    "pos": "adj.",
    "cn_def": "有營養的",
    "en_def": "full of things that are good for your body",
    "sentence": "Sweet potatoes are cheap and {{BLANK}}, so my grandmother says they helped many families survive during hard times.",
    "cn": "地瓜既便宜又有營養，所以我奶奶說它在艱困時期幫助許多家庭活了下來。"
  },
  {
    "word": "nutritionist",
    "pos": "n.",
    "cn_def": "營養師",
    "en_def": "an expert on food and healthy eating",
    "sentence": "The school {{BLANK}} plans the lunch menu every month, and she makes sure there are vegetables in every meal.",
    "cn": "學校的營養師每個月規劃午餐菜單，而且她確保每一餐都有蔬菜。"
  },
  {
    "word": "balanced diet",
    "pos": "n.",
    "cn_def": "均衡飲食",
    "en_def": "eating the right amounts of different kinds of food",
    "sentence": "A {{BLANK}} includes fruit, vegetables, grains and protein, so you should not live on fried chicken and bubble tea.",
    "cn": "均衡飲食包括水果、蔬菜、穀物和蛋白質，所以你不應該只靠炸雞和珍珠奶茶過活。"
  },
  {
    "word": "protein",
    "pos": "n.",
    "cn_def": "蛋白質",
    "en_def": "a nutrient in meat, eggs and beans that builds muscles",
    "sentence": "Athletes need plenty of {{BLANK}} to build muscle, so many of them eat eggs, chicken or tofu after training.",
    "cn": "運動員需要大量的蛋白質來增加肌肉，所以他們許多人在訓練後吃雞蛋、雞肉或豆腐。"
  },
  {
    "word": "carbohydrate",
    "pos": "n.",
    "cn_def": "碳水化合物",
    "en_def": "a nutrient in rice, bread and noodles that gives energy",
    "sentence": "Rice is the main {{BLANK}} in many Asian meals, and it gives students the energy they need for long school days.",
    "cn": "米飯是許多亞洲餐點中主要的碳水化合物，而且它提供學生漫長上學日所需的能量。"
  },
  {
    "word": "fibre",
    "pos": "n.",
    "cn_def": "纖維",
    "en_def": "the part of plant food that helps digestion",
    "sentence": "Brown rice contains more {{BLANK}} than white rice, so it keeps you full for longer and helps your stomach work well.",
    "cn": "糙米比白米含有更多纖維，所以能讓你飽得更久，也能幫助腸胃正常運作。"
  },
  {
    "word": "vitamin",
    "pos": "n.",
    "cn_def": "維他命；維生素",
    "en_def": "a natural substance in food that the body needs to stay healthy",
    "sentence": "Oranges are full of {{BLANK}} C, so my mother makes us eat one every day when it is flu season.",
    "cn": "柳橙富含維他命C，所以在流感季節我媽媽每天都要我們吃一顆。"
  },
  {
    "word": "calorie",
    "pos": "n.",
    "cn_def": "卡路里；熱量",
    "en_def": "a unit for measuring the energy in food",
    "sentence": "One cup of bubble tea can contain more than five hundred {{BLANK}}, so it is almost like eating a whole meal.",
    "cn": "一杯珍珠奶茶可能含有超過五百卡路里，所以幾乎就像吃了一整餐。"
  },
  {
    "word": "sodium",
    "pos": "n.",
    "cn_def": "鈉",
    "en_def": "a chemical in salt that can be unhealthy in large amounts",
    "sentence": "Instant noodles are very high in {{BLANK}}, so doctors warn that eating them often may raise your blood pressure.",
    "cn": "泡麵的鈉含量非常高，所以醫生警告常吃可能會讓血壓升高。"
  },
  {
    "word": "cholesterol",
    "pos": "n.",
    "cn_def": "膽固醇",
    "en_def": "a fatty substance in the blood that can block blood vessels",
    "sentence": "My father's {{BLANK}} was too high last year, so he stopped eating fried food and started jogging every morning.",
    "cn": "我爸爸去年膽固醇太高，所以他不再吃油炸食物，並開始每天早上慢跑。"
  },
  {
    "word": "obesity",
    "pos": "n.",
    "cn_def": "肥胖（症）",
    "en_def": "the state of being very overweight",
    "sentence": "Childhood {{BLANK}} is rising in many countries, and experts blame sugary drinks as well as too much time on screens.",
    "cn": "兒童肥胖在許多國家持續增加，而專家將原因歸咎於含糖飲料以及花太多時間在螢幕上。"
  },
  {
    "word": "food poisoning",
    "pos": "n.",
    "cn_def": "食物中毒",
    "en_def": "illness caused by eating food that contains harmful bacteria",
    "sentence": "Several students got {{BLANK}} after the school trip, and the health department later found that the lunch boxes had been left in the sun.",
    "cn": "好幾個學生在校外教學後食物中毒，而衛生局後來發現便當被放在太陽底下曬。"
  },
  {
    "word": "salmonella",
    "pos": "n.",
    "cn_def": "沙門氏菌",
    "en_def": "a type of bacteria that causes food poisoning",
    "sentence": "Raw eggs may carry {{BLANK}}, so you should cook them properly, especially when you serve them to children.",
    "cn": "生雞蛋可能帶有沙門氏菌，所以你應該把蛋煮熟，尤其是給小孩吃的時候。"
  },
  {
    "word": "food safety",
    "pos": "n.",
    "cn_def": "食品安全",
    "en_def": "keeping food free from things that can make people ill",
    "sentence": "After several scandals about cooking oil, {{BLANK}} became a major concern in Taiwan, and the government made stricter rules.",
    "cn": "在幾起食用油醜聞之後，食品安全成為台灣重大的關注議題，而政府也訂定了更嚴格的規定。"
  },
  {
    "word": "food inspector",
    "pos": "n.",
    "cn_def": "食品稽查員",
    "en_def": "an official who checks that food and restaurants are safe",
    "sentence": "A {{BLANK}} visited the night market last week, and two stalls were fined because their kitchens were dirty.",
    "cn": "上週一名食品稽查員到夜市檢查，而有兩個攤位因為廚房骯髒而被罰款。"
  },
  {
    "word": "nutrition label",
    "pos": "n.",
    "cn_def": "營養標示",
    "en_def": "information on a food package about its nutrients",
    "sentence": "Check the {{BLANK}} on the back of the box, and you will see how much sugar is hidden in this healthy-looking cereal.",
    "cn": "看看盒子背面的營養標示，你就會發現這款看起來很健康的穀片裡藏了多少糖。"
  },
  {
    "word": "allergen",
    "pos": "n.",
    "cn_def": "過敏原",
    "en_def": "a substance that causes an allergic reaction",
    "sentence": "Peanuts are a common {{BLANK}}, so restaurants must tell customers if any dish contains them.",
    "cn": "花生是常見的過敏原，所以餐廳必須告知顧客是否有任何菜餚含有花生。"
  },
  {
    "word": "gluten-free",
    "pos": "adj.",
    "cn_def": "無麩質的",
    "en_def": "not containing gluten, a protein found in wheat",
    "sentence": "The bakery started selling {{BLANK}} bread last year, and it quickly became popular with customers who cannot eat wheat.",
    "cn": "這家麵包店去年開始販售無麩質麵包，而且很快就受到不能吃小麥的顧客歡迎。"
  },
  {
    "word": "vegan",
    "pos": "n.",
    "cn_def": "純素食者",
    "en_def": "a person who eats no animal products at all",
    "sentence": "My cousin became a {{BLANK}} last year, so she no longer eats meat, eggs or milk, but she still loves cooking for her friends.",
    "cn": "我表妹去年成為純素食者，所以她不再吃肉、蛋或牛奶，但她仍然很喜歡為朋友下廚。"
  },
  {
    "word": "vegetarian",
    "pos": "n.",
    "cn_def": "素食者",
    "en_def": "a person who does not eat meat or fish",
    "sentence": "Taiwan is an easy place for a {{BLANK}} to travel, because there are vegetarian restaurants in almost every neighbourhood.",
    "cn": "台灣對素食者來說是很容易旅行的地方，因為幾乎每個社區都有素食餐廳。"
  },
  {
    "word": "wholegrain",
    "pos": "adj.",
    "cn_def": "全穀的",
    "en_def": "made with the whole seed of the grain, including the outer layer",
    "sentence": "{{BLANK}} bread is healthier than white bread, but my little brother refuses to eat it because he says it tastes like cardboard.",
    "cn": "全穀麵包比白麵包健康，但我弟弟拒絕吃，因為他說吃起來像紙板。"
  },
  {
    "word": "junk food",
    "pos": "n.",
    "cn_def": "垃圾食物",
    "en_def": "food that is tasty but unhealthy",
    "sentence": "I try not to eat {{BLANK}} before exams, but chips and chocolate are hard to resist when I study late.",
    "cn": "我考試前盡量不吃垃圾食物，但熬夜讀書時，洋芋片和巧克力實在很難抗拒。"
  },
  {
    "word": "serving size",
    "pos": "n.",
    "cn_def": "每份份量",
    "en_def": "the amount of food that counts as one portion on a label",
    "sentence": "The {{BLANK}} on the snack bag is only ten chips, but most people eat the whole bag in one go.",
    "cn": "零食袋上標示的每份份量只有十片洋芋片，但大多數人一口氣就吃掉整包。"
  },
  {
    "word": "undercooked",
    "pos": "adj.",
    "cn_def": "未煮熟的",
    "en_def": "not cooked long enough",
    "sentence": "The chicken was {{BLANK}} in the middle, so we sent it back to the kitchen because we did not want to get sick.",
    "cn": "雞肉中間沒有煮熟，所以我們把它退回廚房，因為我們不想生病。"
  },
  {
    "word": "food handler",
    "pos": "n.",
    "cn_def": "食品從業人員",
    "en_def": "a person whose job involves preparing or serving food",
    "sentence": "Every {{BLANK}} must wear gloves and a hat, and they need a health check before they start working in the kitchen.",
    "cn": "每位食品從業人員都必須戴手套和帽子，而且他們在進廚房工作前需要接受健康檢查。"
  },
  {
    "word": "digest",
    "pos": "v.",
    "cn_def": "消化",
    "en_def": "to break down food in the stomach so the body can use it",
    "sentence": "Some adults cannot {{BLANK}} milk easily, so they feel uncomfortable after drinking a latte, but they can still eat cheese.",
    "cn": "有些成人不容易消化牛奶，所以喝完拿鐵後會不舒服，但他們仍然可以吃起司。"
  },
  {
    "word": "sugary",
    "pos": "adj.",
    "cn_def": "含糖量高的；含糖的",
    "en_def": "containing a lot of sugar",
    "sentence": "The government wants to tax {{BLANK}} drinks, because they are a major cause of tooth decay and weight problems among children.",
    "cn": "政府想對含糖飲料課稅，因為它們是兒童蛀牙和體重問題的主要原因。"
  },
  {
    "word": "dietary",
    "pos": "adj.",
    "cn_def": "飲食的",
    "en_def": "connected with the food people eat",
    "sentence": "The hotel asks every guest about their {{BLANK}} needs, so the chef can prepare meals without nuts, meat or wheat.",
    "cn": "這家飯店會詢問每位客人的飲食需求，所以主廚可以準備不含堅果、肉或小麥的餐點。"
  }
];

const MCQS = [
  {
    "q": "Good _____ is important for teenagers because they are still growing, so schools try to serve balanced lunches.",
    "options": [
      "nutrition",
      "emulsifier",
      "upsurge",
      "zeal"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Sweet potatoes are cheap and _____, so my grandmother says they helped many families survive during hard times.",
    "options": [
      "counterfeit",
      "prevalent",
      "nutritious",
      "objectionable"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The school _____ plans the lunch menu every month, and she makes sure there are vegetables in every meal.",
    "options": [
      "trough",
      "ranch",
      "distributor",
      "nutritionist"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "A _____ includes fruit, vegetables, grains and protein, so you should not live on fried chicken and bubble tea.",
    "options": [
      "drip irrigation",
      "balanced diet",
      "lab-grown meat",
      "crop insurance"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Athletes need plenty of _____ to build muscle, so many of them eat eggs, chicken or tofu after training.",
    "options": [
      "protein",
      "pitchfork",
      "hay",
      "consignment"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Rice is the main _____ in many Asian meals, and it gives students the energy they need for long school days.",
    "options": [
      "stagnation",
      "beehive",
      "pitchfork",
      "carbohydrate"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Brown rice contains more _____ than white rice, so it keeps you full for longer and helps your stomach work well.",
    "options": [
      "compatibility",
      "fibre",
      "granary",
      "susceptibility"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Oranges are full of _____ C, so my mother makes us eat one every day when it is flu season.",
    "options": [
      "profusion",
      "vigilance",
      "vitamin",
      "biotechnology"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "One cup of bubble tea can contain more than five hundred _____, so it is almost like eating a whole meal.",
    "options": [
      "cascade",
      "calorie",
      "retailer",
      "soybean"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Instant noodles are very high in _____, so doctors warn that eating them often may raise your blood pressure.",
    "options": [
      "broiler",
      "aquifer",
      "sodium",
      "flavouring"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My father's _____ was too high last year, so he stopped eating fried food and started jogging every morning.",
    "options": [
      "retailer",
      "deposit",
      "impediment",
      "cholesterol"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Childhood _____ is rising in many countries, and experts blame sugary drinks as well as too much time on screens.",
    "options": [
      "obesity",
      "horticulture",
      "nutrient",
      "plantation"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Several students got _____ after the school trip, and the health department later found that the lunch boxes had been left in the sun.",
    "options": [
      "food supply",
      "chicken coop",
      "fair trade",
      "food poisoning"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Raw eggs may carry _____, so you should cook them properly, especially when you serve them to children.",
    "options": [
      "toxicity",
      "rationing",
      "salmonella",
      "fluctuation"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "After several scandals about cooking oil, _____ became a major concern in Taiwan, and the government made stricter rules.",
    "options": [
      "food safety",
      "water table",
      "food supply",
      "seed bank"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "A _____ visited the night market last week, and two stalls were fined because their kitchens were dirty.",
    "options": [
      "edible insect",
      "food inspector",
      "food miles",
      "cash crop"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Check the _____ on the back of the box, and you will see how much sugar is hidden in this healthy-looking cereal.",
    "options": [
      "nutrition label",
      "food scraps",
      "battery cage",
      "grain reserve"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Peanuts are a common _____, so restaurants must tell customers if any dish contains them.",
    "options": [
      "furrow",
      "allergen",
      "hay",
      "sickle"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The bakery started selling _____ bread last year, and it quickly became popular with customers who cannot eat wheat.",
    "options": [
      "manifold",
      "shrewd",
      "free-range",
      "gluten-free"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "My cousin became a _____ last year, so she no longer eats meat, eggs or milk, but she still loves cooking for her friends.",
    "options": [
      "beneficiary",
      "toxicity",
      "vegan",
      "retailer"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Taiwan is an easy place for a _____ to travel, because there are vegetarian restaurants in almost every neighbourhood.",
    "options": [
      "hybrid",
      "escalation",
      "tractor",
      "vegetarian"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "_____ bread is healthier than white bread, but my little brother refuses to eat it because he says it tastes like cardboard.",
    "options": [
      "wholegrain",
      "innumerable",
      "divisive",
      "incompatible"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "I try not to eat _____ before exams, but chips and chocolate are hard to resist when I study late.",
    "options": [
      "chicken coop",
      "junk food",
      "price hike",
      "cold chain"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ on the snack bag is only ten chips, but most people eat the whole bag in one go.",
    "options": [
      "grain reserve",
      "milking machine",
      "serving size",
      "a piece of cake"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The chicken was _____ in the middle, so we sent it back to the kitchen because we did not want to get sick.",
    "options": [
      "arable",
      "objectionable",
      "insolvent",
      "undercooked"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Every _____ must wear gloves and a hat, and they need a health check before they start working in the kitchen.",
    "options": [
      "bread and butter",
      "food handler",
      "edible insect",
      "drip irrigation"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Some adults cannot _____ milk easily, so they feel uncomfortable after drinking a latte, but they can still eat cheese.",
    "options": [
      "rear",
      "grind",
      "digest",
      "debase"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The government wants to tax _____ drinks, because they are a major cause of tooth decay and weight problems among children.",
    "options": [
      "sugary",
      "cyclical",
      "counterfeit",
      "opportune"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The hotel asks every guest about their _____ needs, so the chef can prepare meals without nuts, meat or wheat.",
    "options": [
      "speculative",
      "arable",
      "inedible",
      "dietary"
    ],
    "answer": 3,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "nutrition": {
    "pos": "n.",
    "en_def": "the food you eat and how it affects your health",
    "cn_def": "營養"
  },
  "nutritious": {
    "pos": "adj.",
    "en_def": "full of things that are good for your body",
    "cn_def": "有營養的"
  },
  "nutritionist": {
    "pos": "n.",
    "en_def": "an expert on food and healthy eating",
    "cn_def": "營養師"
  },
  "balanced diet": {
    "pos": "n.",
    "en_def": "eating the right amounts of different kinds of food",
    "cn_def": "均衡飲食"
  },
  "protein": {
    "pos": "n.",
    "en_def": "a nutrient in meat, eggs and beans that builds muscles",
    "cn_def": "蛋白質"
  },
  "carbohydrate": {
    "pos": "n.",
    "en_def": "a nutrient in rice, bread and noodles that gives energy",
    "cn_def": "碳水化合物"
  },
  "fibre": {
    "pos": "n.",
    "en_def": "the part of plant food that helps digestion",
    "cn_def": "纖維"
  },
  "vitamin": {
    "pos": "n.",
    "en_def": "a natural substance in food that the body needs to stay healthy",
    "cn_def": "維他命；維生素"
  },
  "calorie": {
    "pos": "n.",
    "en_def": "a unit for measuring the energy in food",
    "cn_def": "卡路里；熱量"
  },
  "sodium": {
    "pos": "n.",
    "en_def": "a chemical in salt that can be unhealthy in large amounts",
    "cn_def": "鈉"
  },
  "cholesterol": {
    "pos": "n.",
    "en_def": "a fatty substance in the blood that can block blood vessels",
    "cn_def": "膽固醇"
  },
  "obesity": {
    "pos": "n.",
    "en_def": "the state of being very overweight",
    "cn_def": "肥胖（症）"
  },
  "food poisoning": {
    "pos": "n.",
    "en_def": "illness caused by eating food that contains harmful bacteria",
    "cn_def": "食物中毒"
  },
  "salmonella": {
    "pos": "n.",
    "en_def": "a type of bacteria that causes food poisoning",
    "cn_def": "沙門氏菌"
  },
  "food safety": {
    "pos": "n.",
    "en_def": "keeping food free from things that can make people ill",
    "cn_def": "食品安全"
  },
  "food inspector": {
    "pos": "n.",
    "en_def": "an official who checks that food and restaurants are safe",
    "cn_def": "食品稽查員"
  },
  "nutrition label": {
    "pos": "n.",
    "en_def": "information on a food package about its nutrients",
    "cn_def": "營養標示"
  },
  "allergen": {
    "pos": "n.",
    "en_def": "a substance that causes an allergic reaction",
    "cn_def": "過敏原"
  },
  "gluten-free": {
    "pos": "adj.",
    "en_def": "not containing gluten, a protein found in wheat",
    "cn_def": "無麩質的"
  },
  "vegan": {
    "pos": "n.",
    "en_def": "a person who eats no animal products at all",
    "cn_def": "純素食者"
  },
  "vegetarian": {
    "pos": "n.",
    "en_def": "a person who does not eat meat or fish",
    "cn_def": "素食者"
  },
  "wholegrain": {
    "pos": "adj.",
    "en_def": "made with the whole seed of the grain, including the outer layer",
    "cn_def": "全穀的"
  },
  "junk food": {
    "pos": "n.",
    "en_def": "food that is tasty but unhealthy",
    "cn_def": "垃圾食物"
  },
  "serving size": {
    "pos": "n.",
    "en_def": "the amount of food that counts as one portion on a label",
    "cn_def": "每份份量"
  },
  "undercooked": {
    "pos": "adj.",
    "en_def": "not cooked long enough",
    "cn_def": "未煮熟的"
  },
  "food handler": {
    "pos": "n.",
    "en_def": "a person whose job involves preparing or serving food",
    "cn_def": "食品從業人員"
  },
  "digest": {
    "pos": "v.",
    "en_def": "to break down food in the stomach so the body can use it",
    "cn_def": "消化"
  },
  "sugary": {
    "pos": "adj.",
    "en_def": "containing a lot of sugar",
    "cn_def": "含糖量高的；含糖的"
  },
  "dietary": {
    "pos": "adj.",
    "en_def": "connected with the food people eat",
    "cn_def": "飲食的"
  },
  "emulsifier": {
    "pos": "n.",
    "en_def": "a substance that helps oil and water mix together",
    "cn_def": "乳化劑"
  },
  "upsurge": {
    "pos": "n.",
    "en_def": "a sudden increase",
    "cn_def": "激增"
  },
  "zeal": {
    "pos": "n.",
    "en_def": "great energy and enthusiasm",
    "cn_def": "熱忱；熱情"
  },
  "counterfeit": {
    "pos": "adj.",
    "en_def": "made to look real in order to trick people",
    "cn_def": "偽造的；仿冒的"
  },
  "prevalent": {
    "pos": "adj.",
    "en_def": "common or widespread at a particular time",
    "cn_def": "普遍的；盛行的"
  },
  "objectionable": {
    "pos": "adj.",
    "en_def": "unpleasant and likely to offend",
    "cn_def": "令人反感的"
  },
  "trough": {
    "pos": "n.",
    "en_def": "a long open container for animals' food or water",
    "cn_def": "飼料槽；水槽"
  },
  "ranch": {
    "pos": "n.",
    "en_def": "a very large farm for raising cattle, horses or sheep",
    "cn_def": "大牧場"
  },
  "distributor": {
    "pos": "n.",
    "en_def": "a company that delivers goods from producers to shops",
    "cn_def": "經銷商"
  },
  "drip irrigation": {
    "pos": "n.",
    "en_def": "watering plants slowly through small tubes near their roots",
    "cn_def": "滴灌"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
  },
  "crop insurance": {
    "pos": "n.",
    "en_def": "insurance that pays farmers if their harvest is damaged",
    "cn_def": "農作物保險"
  },
  "pitchfork": {
    "pos": "n.",
    "en_def": "a tool with long metal points used to lift hay",
    "cn_def": "乾草叉"
  },
  "hay": {
    "pos": "n.",
    "en_def": "grass that has been cut and dried to feed animals",
    "cn_def": "乾草"
  },
  "consignment": {
    "pos": "n.",
    "en_def": "a quantity of goods sent to someone",
    "cn_def": "一批貨物"
  },
  "stagnation": {
    "pos": "n.",
    "en_def": "a state of no growth or change",
    "cn_def": "停滯"
  },
  "beehive": {
    "pos": "n.",
    "en_def": "a box or structure where bees live and make honey",
    "cn_def": "蜂巢；蜂箱"
  },
  "compatibility": {
    "pos": "n.",
    "en_def": "the ability to exist or work together without problems",
    "cn_def": "相容性"
  },
  "granary": {
    "pos": "n.",
    "en_def": "a building for storing grain",
    "cn_def": "糧倉"
  },
  "susceptibility": {
    "pos": "n.",
    "en_def": "how easily something is affected or harmed",
    "cn_def": "易感性；敏感度"
  },
  "profusion": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "大量；豐富"
  },
  "vigilance": {
    "pos": "n.",
    "en_def": "careful attention to notice possible danger",
    "cn_def": "警覺；警惕"
  },
  "biotechnology": {
    "pos": "n.",
    "en_def": "using living cells and bacteria to make useful products",
    "cn_def": "生物科技"
  },
  "cascade": {
    "pos": "n.",
    "en_def": "a series of things that happen one after another",
    "cn_def": "一連串；連鎖"
  },
  "retailer": {
    "pos": "n.",
    "en_def": "a business that sells goods directly to the public",
    "cn_def": "零售商"
  },
  "soybean": {
    "pos": "n.",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "cn_def": "黃豆；大豆"
  },
  "broiler": {
    "pos": "n.",
    "en_def": "a young chicken raised for its meat",
    "cn_def": "肉雞"
  },
  "aquifer": {
    "pos": "n.",
    "en_def": "a layer of rock under the ground that holds water",
    "cn_def": "含水層"
  },
  "flavouring": {
    "pos": "n.",
    "en_def": "a substance added to food to give it a particular taste",
    "cn_def": "調味料；香料"
  },
  "deposit": {
    "pos": "n.",
    "en_def": "a layer of something left by water or natural processes",
    "cn_def": "沉積物；沉積層"
  },
  "impediment": {
    "pos": "n.",
    "en_def": "something that makes progress difficult",
    "cn_def": "障礙；阻礙"
  },
  "horticulture": {
    "pos": "n.",
    "en_def": "the study and practice of growing fruit, vegetables and flowers",
    "cn_def": "園藝學"
  },
  "nutrient": {
    "pos": "n.",
    "en_def": "a substance that helps plants, animals or people grow",
    "cn_def": "養分；營養素"
  },
  "plantation": {
    "pos": "n.",
    "en_def": "a large farm growing one crop such as tea or rubber",
    "cn_def": "大型農園；種植園"
  },
  "food supply": {
    "pos": "n.",
    "en_def": "the amount of food available to a population",
    "cn_def": "糧食供應"
  },
  "chicken coop": {
    "pos": "n.",
    "en_def": "a small house where chickens are kept",
    "cn_def": "雞舍；雞籠"
  },
  "fair trade": {
    "pos": "n.",
    "en_def": "a system that pays farmers in poor countries a fair price",
    "cn_def": "公平貿易"
  },
  "toxicity": {
    "pos": "n.",
    "en_def": "how poisonous something is",
    "cn_def": "毒性"
  },
  "rationing": {
    "pos": "n.",
    "en_def": "limiting the amount of food each person may have",
    "cn_def": "配給（制度）"
  },
  "fluctuation": {
    "pos": "n.",
    "en_def": "a change up and down in amount or level",
    "cn_def": "波動"
  },
  "water table": {
    "pos": "n.",
    "en_def": "the level below which the ground is full of water",
    "cn_def": "地下水位"
  },
  "seed bank": {
    "pos": "n.",
    "en_def": "a place where seeds are stored to protect plant varieties",
    "cn_def": "種子庫"
  },
  "edible insect": {
    "pos": "n.",
    "en_def": "an insect that is safe for people to eat",
    "cn_def": "可食用昆蟲"
  },
  "food miles": {
    "pos": "n.",
    "en_def": "the distance food travels from where it is grown to where it is eaten",
    "cn_def": "食物里程"
  },
  "cash crop": {
    "pos": "n.",
    "en_def": "a crop grown to sell rather than to eat at home",
    "cn_def": "經濟作物"
  },
  "food scraps": {
    "pos": "n.",
    "en_def": "small pieces of leftover food that are thrown away",
    "cn_def": "廚餘碎屑"
  },
  "battery cage": {
    "pos": "n.",
    "en_def": "a very small cage where egg-laying hens are kept",
    "cn_def": "層架式雞籠（格子籠）"
  },
  "grain reserve": {
    "pos": "n.",
    "en_def": "a store of grain kept for emergencies",
    "cn_def": "儲備糧"
  },
  "furrow": {
    "pos": "n.",
    "en_def": "a long narrow line cut into soil for planting seeds",
    "cn_def": "犁溝；田溝"
  },
  "sickle": {
    "pos": "n.",
    "en_def": "a curved blade with a short handle used for cutting crops",
    "cn_def": "鐮刀"
  },
  "manifold": {
    "pos": "adj.",
    "en_def": "many and of different kinds",
    "cn_def": "多種多樣的"
  },
  "shrewd": {
    "pos": "adj.",
    "en_def": "clever at understanding situations and making good decisions",
    "cn_def": "精明的"
  },
  "free-range": {
    "pos": "adj.",
    "en_def": "(of farm animals) allowed to move around outside",
    "cn_def": "放養的；放牧的"
  },
  "beneficiary": {
    "pos": "n.",
    "en_def": "a person who gets an advantage from something",
    "cn_def": "受益者"
  },
  "hybrid": {
    "pos": "n.",
    "en_def": "a plant or animal produced from two different types",
    "cn_def": "雜交種；混種"
  },
  "escalation": {
    "pos": "n.",
    "en_def": "a rapid increase in size or seriousness",
    "cn_def": "升級；加劇"
  },
  "tractor": {
    "pos": "n.",
    "en_def": "a strong farm vehicle used to pull machines",
    "cn_def": "拖拉機；耕耘機"
  },
  "innumerable": {
    "pos": "adj.",
    "en_def": "too many to be counted",
    "cn_def": "無數的"
  },
  "divisive": {
    "pos": "adj.",
    "en_def": "causing strong disagreement between people",
    "cn_def": "造成分歧的"
  },
  "incompatible": {
    "pos": "adj.",
    "en_def": "not able to exist or work together",
    "cn_def": "不相容的；互相抵觸的"
  },
  "price hike": {
    "pos": "n.",
    "en_def": "a sudden large increase in price",
    "cn_def": "漲價"
  },
  "cold chain": {
    "pos": "n.",
    "en_def": "a system that keeps food cold from farm to shop",
    "cn_def": "冷鏈"
  },
  "milking machine": {
    "pos": "n.",
    "en_def": "a machine used to take milk from cows",
    "cn_def": "擠奶機"
  },
  "a piece of cake": {
    "pos": "n.phr.",
    "en_def": "something very easy to do",
    "cn_def": "小事一樁；易如反掌"
  },
  "arable": {
    "pos": "adj.",
    "en_def": "suitable for growing crops",
    "cn_def": "可耕種的"
  },
  "insolvent": {
    "pos": "adj.",
    "en_def": "unable to pay debts",
    "cn_def": "無力償債的；破產的"
  },
  "bread and butter": {
    "pos": "n.phr.",
    "en_def": "the main way someone earns money",
    "cn_def": "主要收入來源；生計"
  },
  "rear": {
    "pos": "v.",
    "en_def": "to look after animals until they are fully grown",
    "cn_def": "飼養；養育"
  },
  "grind": {
    "pos": "v.",
    "en_def": "to crush something into small pieces or powder",
    "cn_def": "磨碎；研磨"
  },
  "debase": {
    "pos": "v.",
    "en_def": "to reduce the quality or value of something",
    "cn_def": "降低（品質或價值）"
  },
  "cyclical": {
    "pos": "adj.",
    "en_def": "happening in a repeated pattern",
    "cn_def": "週期性的"
  },
  "opportune": {
    "pos": "adj.",
    "en_def": "happening at a suitable time",
    "cn_def": "適時的；恰好的"
  },
  "speculative": {
    "pos": "adj.",
    "en_def": "based on guesses rather than facts",
    "cn_def": "推測的；投機的"
  },
  "inedible": {
    "pos": "adj.",
    "en_def": "not fit or safe to eat",
    "cn_def": "不能吃的"
  }
};

const EXTRA_GLOSSES = {};
