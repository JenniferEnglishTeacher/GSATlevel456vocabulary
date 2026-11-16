// Topic 11 Subunit 1 Quiz Data: Crops & Farming 作物與耕作
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T11 S01 - Crops & Farming 作物與耕作",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "arable",
    "pos": "adj.",
    "cn_def": "可耕種的",
    "en_def": "suitable for growing crops",
    "sentence": "Only a small part of Taiwan's land is {{BLANK}} because most of the island is covered by mountains, so farmers must use every flat field carefully.",
    "cn": "台灣只有一小部分土地是可耕種的，因為島上大部分被山脈覆蓋，所以農民必須小心利用每一塊平地。"
  },
  {
    "word": "wheat",
    "pos": "n.",
    "cn_def": "小麥",
    "en_def": "a grain plant used to make flour and bread",
    "sentence": "Most of the bread we eat is made from {{BLANK}}, but Taiwan imports almost all of it because the climate is too wet to grow it well.",
    "cn": "我們吃的大部分麵包是用小麥做的，但台灣幾乎全部仰賴進口，因為氣候太潮濕而不容易種植。"
  },
  {
    "word": "rice paddy",
    "pos": "n.",
    "cn_def": "稻田",
    "en_def": "a flooded field where rice is grown",
    "sentence": "When we took the train through Yilan in spring, every {{BLANK}} shone like a mirror, and my little brother kept taking photos of them.",
    "cn": "春天我們搭火車經過宜蘭時，每一片稻田都像鏡子一樣閃閃發亮，我弟弟一直不停地拍照。"
  },
  {
    "word": "maize",
    "pos": "n.",
    "cn_def": "玉米",
    "en_def": "a tall plant with yellow seeds; corn",
    "sentence": "Much of the {{BLANK}} grown in the United States is fed to animals, while only a small amount is eaten directly by people.",
    "cn": "美國種植的大部分玉米被拿來餵動物，而只有一小部分是直接供人食用。"
  },
  {
    "word": "barley",
    "pos": "n.",
    "cn_def": "大麥",
    "en_def": "a grain used for food, animal feed and making drinks",
    "sentence": "My grandmother often makes a warm {{BLANK}} tea in winter because she believes it is good for digestion, and the whole kitchen smells wonderful.",
    "cn": "我奶奶冬天常煮熱熱的大麥茶，因為她相信這對消化有好處，而且整個廚房都很香。"
  },
  {
    "word": "soybean",
    "pos": "n.",
    "cn_def": "黃豆；大豆",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "sentence": "Tofu and soy milk both come from the {{BLANK}}, so it is an important source of protein for many vegetarians in Asia.",
    "cn": "豆腐和豆漿都來自黃豆，所以它是亞洲許多素食者重要的蛋白質來源。"
  },
  {
    "word": "cash crop",
    "pos": "n.",
    "cn_def": "經濟作物",
    "en_def": "a crop grown to sell rather than to eat at home",
    "sentence": "Coffee is a popular {{BLANK}} in the mountains of Yunlin, and many young farmers have returned home because it brings a good income.",
    "cn": "咖啡是雲林山區很受歡迎的經濟作物，而且許多年輕農民因為它能帶來不錯的收入而返鄉。"
  },
  {
    "word": "crop rotation",
    "pos": "n.",
    "cn_def": "輪作",
    "en_def": "growing different crops in a field in different years",
    "sentence": "The farmer uses {{BLANK}} every year, so he plants beans after corn because the beans put goodness back into the soil.",
    "cn": "這位農夫每年都採用輪作，所以他在玉米之後種豆類，因為豆類能讓土壤恢復養分。"
  },
  {
    "word": "monoculture",
    "pos": "n.",
    "cn_def": "單一作物栽培",
    "en_def": "growing only one type of crop over a large area",
    "sentence": "Huge areas of {{BLANK}} look neat from the air, but one disease can destroy the whole farm because every plant is the same.",
    "cn": "大面積的單一作物栽培從空中看起來很整齊，但一種病害就能摧毀整片農場，因為每株植物都一樣。"
  },
  {
    "word": "orchard",
    "pos": "n.",
    "cn_def": "果園",
    "en_def": "a piece of land where fruit trees are grown",
    "sentence": "We visited a strawberry farm and an apple {{BLANK}} in Taichung, and the owner let us pick and eat fruit straight from the trees.",
    "cn": "我們參觀了台中的草莓園和蘋果果園，而且園主讓我們直接從樹上摘水果來吃。"
  },
  {
    "word": "vineyard",
    "pos": "n.",
    "cn_def": "葡萄園",
    "en_def": "a farm where grapes are grown",
    "sentence": "The family has run the {{BLANK}} for three generations, and they still pick the grapes by hand because machines might damage them.",
    "cn": "這個家族經營這座葡萄園已經三代了，而且他們仍然用手摘葡萄，因為機器可能會損傷葡萄。"
  },
  {
    "word": "greenhouse",
    "pos": "n.",
    "cn_def": "溫室",
    "en_def": "a glass building where plants are grown in warm conditions",
    "sentence": "Tomatoes grow well in the {{BLANK}} even in winter, because the glass keeps the heat in and protects the plants from heavy rain.",
    "cn": "即使在冬天，番茄在溫室裡也長得很好，因為玻璃能保住熱度並保護植物不受大雨侵襲。"
  },
  {
    "word": "seedling",
    "pos": "n.",
    "cn_def": "幼苗",
    "en_def": "a very young plant grown from a seed",
    "sentence": "We planted each {{BLANK}} in a small pot on the balcony, and after three weeks they were strong enough to move into the garden.",
    "cn": "我們把每一株幼苗種在陽台的小盆子裡，三個星期後它們就長得夠壯，可以移植到花園了。"
  },
  {
    "word": "germinate",
    "pos": "v.",
    "cn_def": "發芽",
    "en_def": "(of a seed) to start to grow",
    "sentence": "The beans will {{BLANK}} in about five days if you keep the cotton wet, but they will fail if the room is too cold.",
    "cn": "如果你讓棉花保持濕潤，豆子大約五天就會發芽，但如果房間太冷，它們就長不出來。"
  },
  {
    "word": "ripen",
    "pos": "v.",
    "cn_def": "成熟",
    "en_def": "to become ready to eat",
    "sentence": "Bananas {{BLANK}} faster in a paper bag, so my mother puts the green ones in a bag and waits a couple of days.",
    "cn": "香蕉放在紙袋裡會更快成熟，所以我媽媽把綠色的香蕉放進袋子裡，再等個兩三天。"
  },
  {
    "word": "weed",
    "pos": "n.",
    "cn_def": "雜草",
    "en_def": "a wild plant growing where it is not wanted",
    "sentence": "Every Saturday my grandfather pulls out the {{BLANK}} in his vegetable garden, because they steal water and sunlight from his cabbages.",
    "cn": "每個星期六我爺爺都會拔掉菜園裡的雜草，因為它們會搶走高麗菜的水分和陽光。"
  },
  {
    "word": "insecticide",
    "pos": "n.",
    "cn_def": "殺蟲劑",
    "en_def": "a chemical used to kill insects",
    "sentence": "The farmer stopped spraying {{BLANK}} on his fruit trees, and he now uses natural methods because he wants to protect the bees.",
    "cn": "這位農夫不再對果樹噴灑殺蟲劑，現在改用天然的方法，因為他想保護蜜蜂。"
  },
  {
    "word": "herbicide",
    "pos": "n.",
    "cn_def": "除草劑",
    "en_def": "a chemical used to kill unwanted plants",
    "sentence": "Some farmers spray {{BLANK}} to kill weeds quickly, but scientists worry that the chemicals can enter rivers and harm fish.",
    "cn": "有些農民噴灑除草劑來快速除草，但科學家擔心這些化學物質會流入河川並傷害魚類。"
  },
  {
    "word": "pollination",
    "pos": "n.",
    "cn_def": "授粉",
    "en_def": "moving pollen between flowers so that fruit can grow",
    "sentence": "Bees are essential for the {{BLANK}} of many fruit trees, so farmers often rent hives when their orchards are in flower.",
    "cn": "蜜蜂對許多果樹的授粉至關重要，所以農民常在果園開花時租用蜂箱。"
  },
  {
    "word": "bumper crop",
    "pos": "n.",
    "cn_def": "大豐收",
    "en_def": "an unusually large harvest",
    "sentence": "The weather was perfect this year, and the farmers enjoyed a {{BLANK}} of mangoes, but prices fell because there was so much fruit.",
    "cn": "今年天氣非常好，農民的芒果迎來大豐收，但因為水果太多，價格反而下跌了。"
  },
  {
    "word": "plantation",
    "pos": "n.",
    "cn_def": "大型農園；種植園",
    "en_def": "a large farm growing one crop such as tea or rubber",
    "sentence": "We visited a tea {{BLANK}} in Nantou, and the workers showed us how they pick only the youngest leaves by hand.",
    "cn": "我們參觀了南投的一座茶葉種植園，而且工人示範他們如何只用手摘下最嫩的葉子。"
  },
  {
    "word": "smallholder",
    "pos": "n.",
    "cn_def": "小農",
    "en_def": "a farmer who owns or rents a small piece of land",
    "sentence": "Most rice in Taiwan is grown by a {{BLANK}} with only a few fields, so these farmers often work together to buy machines.",
    "cn": "台灣大部分的稻米是由只有幾塊田的小農種植的，所以這些農民常合作購買機器。"
  },
  {
    "word": "agronomist",
    "pos": "n.",
    "cn_def": "農藝學家",
    "en_def": "a scientist who studies soil and crops",
    "sentence": "An {{BLANK}} visited the village to test the soil, and she advised the farmers to plant beans because the land lacked nitrogen.",
    "cn": "一位農藝學家來到村裡檢測土壤，她建議農民種豆類，因為土地缺乏氮。"
  },
  {
    "word": "horticulture",
    "pos": "n.",
    "cn_def": "園藝學",
    "en_def": "the study and practice of growing fruit, vegetables and flowers",
    "sentence": "My cousin is studying {{BLANK}} at university, and she hopes to open a flower farm because she loves working with plants.",
    "cn": "我表姊在大學攻讀園藝學，她希望開一間花卉農場，因為她很喜歡和植物一起工作。"
  },
  {
    "word": "fallow",
    "pos": "adj.",
    "cn_def": "休耕的",
    "en_def": "(of land) left without crops for a period to recover",
    "sentence": "The farmer leaves one field {{BLANK}} every few years, because the soil needs time to rest and recover its strength.",
    "cn": "這位農夫每隔幾年就讓一塊田休耕，因為土壤需要時間休息並恢復地力。"
  },
  {
    "word": "till",
    "pos": "v.",
    "cn_def": "耕（地）",
    "en_def": "to prepare and turn over soil for growing crops",
    "sentence": "In the past, farmers used water buffalo to {{BLANK}} the fields, but today most of them use small machines because they are faster.",
    "cn": "過去農民用水牛來耕田，但現在大多數人使用小型機器，因為速度比較快。"
  },
  {
    "word": "sugar cane",
    "pos": "n.",
    "cn_def": "甘蔗",
    "en_def": "a tall plant whose stems are used to make sugar",
    "sentence": "Southern Taiwan once had many fields of {{BLANK}}, and old sugar factories in Kaohsiung and Tainan have now become popular museums.",
    "cn": "南台灣過去有許多甘蔗田，而高雄和台南的老糖廠如今已成為熱門的博物館。"
  },
  {
    "word": "scarecrow",
    "pos": "n.",
    "cn_def": "稻草人",
    "en_def": "a figure dressed in old clothes to frighten birds away from crops",
    "sentence": "The children made a funny {{BLANK}} for the school garden, but the clever birds soon realised it was not a real person.",
    "cn": "孩子們為學校菜園做了一個好笑的稻草人，但聰明的鳥兒很快就發現它不是真人。"
  },
  {
    "word": "reap",
    "pos": "v.",
    "cn_def": "收割",
    "en_def": "to cut and collect a crop",
    "sentence": "The villagers work together to {{BLANK}} the rice in autumn, and afterwards they share a big meal to celebrate the end of the season.",
    "cn": "村民在秋天一起收割稻子，之後他們會共享一頓大餐來慶祝這一季的結束。"
  }
];

const MCQS = [
  {
    "q": "Only a small part of Taiwan's land is _____ because most of the island is covered by mountains, so farmers must use every flat field carefully.",
    "options": [
      "arable",
      "objectionable",
      "inedible",
      "auxiliary"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Most of the bread we eat is made from _____, but Taiwan imports almost all of it because the climate is too wet to grow it well.",
    "options": [
      "manure",
      "wheat",
      "nourishment",
      "scourge"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "When we took the train through Yilan in spring, every _____ shone like a mirror, and my little brother kept taking photos of them.",
    "options": [
      "food for thought",
      "meat substitute",
      "rice paddy",
      "growth hormone"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Much of the _____ grown in the United States is fed to animals, while only a small amount is eaten directly by people.",
    "options": [
      "nutritionist",
      "ranch",
      "reliance",
      "maize"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "My grandmother often makes a warm _____ tea in winter because she believes it is good for digestion, and the whole kitchen smells wonderful.",
    "options": [
      "butcher",
      "nutrition",
      "barley",
      "elasticity"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Tofu and soy milk both come from the _____, so it is an important source of protein for many vegetarians in Asia.",
    "options": [
      "antibiotic",
      "soybean",
      "sweetener",
      "frugality"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Coffee is a popular _____ in the mountains of Yunlin, and many young farmers have returned home because it brings a good income.",
    "options": [
      "crop insurance",
      "lab-grown meat",
      "food poisoning",
      "cash crop"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The farmer uses _____ every year, so he plants beans after corn because the beans put goodness back into the soil.",
    "options": [
      "crop rotation",
      "food bank",
      "animal welfare",
      "food safety"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Huge areas of _____ look neat from the air, but one disease can destroy the whole farm because every plant is the same.",
    "options": [
      "seasonality",
      "monoculture",
      "multitude",
      "bedrock"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "We visited a strawberry farm and an apple _____ in Taichung, and the owner let us pick and eat fruit straight from the trees.",
    "options": [
      "cholesterol",
      "delicacy",
      "beehive",
      "orchard"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The family has run the _____ for three generations, and they still pick the grapes by hand because machines might damage them.",
    "options": [
      "corollary",
      "barn",
      "vineyard",
      "vulnerability"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Tomatoes grow well in the _____ even in winter, because the glass keeps the heat in and protects the plants from heavy rain.",
    "options": [
      "greenhouse",
      "toxicity",
      "silage",
      "pasture"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "We planted each _____ in a small pot on the balcony, and after three weeks they were strong enough to move into the garden.",
    "options": [
      "biotechnology",
      "mismanagement",
      "potency",
      "seedling"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The beans will _____ in about five days if you keep the cotton wet, but they will fail if the room is too cold.",
    "options": [
      "germinate",
      "acclimatise",
      "cure",
      "overstate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Bananas _____ faster in a paper bag, so my mother puts the green ones in a bag and waits a couple of days.",
    "options": [
      "concoct",
      "ferment",
      "ripen",
      "defrost"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Every Saturday my grandfather pulls out the _____ in his vegetable garden, because they steal water and sunlight from his cabbages.",
    "options": [
      "contaminant",
      "weed",
      "dosage",
      "distributor"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The farmer stopped spraying _____ on his fruit trees, and he now uses natural methods because he wants to protect the bees.",
    "options": [
      "insecticide",
      "fruition",
      "corollary",
      "toxicity"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Some farmers spray _____ to kill weeds quickly, but scientists worry that the chemicals can enter rivers and harm fish.",
    "options": [
      "vegetarian",
      "wholesaler",
      "profusion",
      "herbicide"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Bees are essential for the _____ of many fruit trees, so farmers often rent hives when their orchards are in flower.",
    "options": [
      "dosage",
      "haul",
      "pollination",
      "broiler"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The weather was perfect this year, and the farmers enjoyed a _____ of mangoes, but prices fell because there was so much fruit.",
    "options": [
      "price hike",
      "bumper crop",
      "crop insurance",
      "farmers' market"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We visited a tea _____ in Nantou, and the workers showed us how they pick only the youngest leaves by hand.",
    "options": [
      "plantation",
      "slaughterhouse",
      "mulch",
      "fruition"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Most rice in Taiwan is grown by a _____ with only a few fields, so these farmers often work together to buy machines.",
    "options": [
      "intake",
      "smallholder",
      "vanguard",
      "sweetener"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "An _____ visited the village to test the soil, and she advised the farmers to plant beans because the land lacked nitrogen.",
    "options": [
      "reciprocity",
      "corollary",
      "agronomist",
      "profusion"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "My cousin is studying _____ at university, and she hopes to open a flower farm because she loves working with plants.",
    "options": [
      "corollary",
      "superfood",
      "beehive",
      "horticulture"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The farmer leaves one field _____ every few years, because the soil needs time to rest and recover its strength.",
    "options": [
      "wholegrain",
      "fallow",
      "stale",
      "inflationary"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "In the past, farmers used water buffalo to _____ the fields, but today most of them use small machines because they are faster.",
    "options": [
      "counterbalance",
      "wean",
      "till",
      "attenuate"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Southern Taiwan once had many fields of _____, and old sugar factories in Kaohsiung and Tainan have now become popular museums.",
    "options": [
      "grain reserve",
      "junk food",
      "bulk buying",
      "sugar cane"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The children made a funny _____ for the school garden, but the clever birds soon realised it was not a real person.",
    "options": [
      "scarecrow",
      "barn",
      "middleman",
      "impediment"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The villagers work together to _____ the rice in autumn, and afterwards they share a big meal to celebrate the end of the season.",
    "options": [
      "suffice",
      "recuperate",
      "reap",
      "spoil"
    ],
    "answer": 2,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "arable": {
    "pos": "adj.",
    "en_def": "suitable for growing crops",
    "cn_def": "可耕種的"
  },
  "wheat": {
    "pos": "n.",
    "en_def": "a grain plant used to make flour and bread",
    "cn_def": "小麥"
  },
  "rice paddy": {
    "pos": "n.",
    "en_def": "a flooded field where rice is grown",
    "cn_def": "稻田"
  },
  "maize": {
    "pos": "n.",
    "en_def": "a tall plant with yellow seeds; corn",
    "cn_def": "玉米"
  },
  "barley": {
    "pos": "n.",
    "en_def": "a grain used for food, animal feed and making drinks",
    "cn_def": "大麥"
  },
  "soybean": {
    "pos": "n.",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "cn_def": "黃豆；大豆"
  },
  "cash crop": {
    "pos": "n.",
    "en_def": "a crop grown to sell rather than to eat at home",
    "cn_def": "經濟作物"
  },
  "crop rotation": {
    "pos": "n.",
    "en_def": "growing different crops in a field in different years",
    "cn_def": "輪作"
  },
  "monoculture": {
    "pos": "n.",
    "en_def": "growing only one type of crop over a large area",
    "cn_def": "單一作物栽培"
  },
  "orchard": {
    "pos": "n.",
    "en_def": "a piece of land where fruit trees are grown",
    "cn_def": "果園"
  },
  "vineyard": {
    "pos": "n.",
    "en_def": "a farm where grapes are grown",
    "cn_def": "葡萄園"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building where plants are grown in warm conditions",
    "cn_def": "溫室"
  },
  "seedling": {
    "pos": "n.",
    "en_def": "a very young plant grown from a seed",
    "cn_def": "幼苗"
  },
  "germinate": {
    "pos": "v.",
    "en_def": "(of a seed) to start to grow",
    "cn_def": "發芽"
  },
  "ripen": {
    "pos": "v.",
    "en_def": "to become ready to eat",
    "cn_def": "成熟"
  },
  "weed": {
    "pos": "n.",
    "en_def": "a wild plant growing where it is not wanted",
    "cn_def": "雜草"
  },
  "insecticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects",
    "cn_def": "殺蟲劑"
  },
  "herbicide": {
    "pos": "n.",
    "en_def": "a chemical used to kill unwanted plants",
    "cn_def": "除草劑"
  },
  "pollination": {
    "pos": "n.",
    "en_def": "moving pollen between flowers so that fruit can grow",
    "cn_def": "授粉"
  },
  "bumper crop": {
    "pos": "n.",
    "en_def": "an unusually large harvest",
    "cn_def": "大豐收"
  },
  "plantation": {
    "pos": "n.",
    "en_def": "a large farm growing one crop such as tea or rubber",
    "cn_def": "大型農園；種植園"
  },
  "smallholder": {
    "pos": "n.",
    "en_def": "a farmer who owns or rents a small piece of land",
    "cn_def": "小農"
  },
  "agronomist": {
    "pos": "n.",
    "en_def": "a scientist who studies soil and crops",
    "cn_def": "農藝學家"
  },
  "horticulture": {
    "pos": "n.",
    "en_def": "the study and practice of growing fruit, vegetables and flowers",
    "cn_def": "園藝學"
  },
  "fallow": {
    "pos": "adj.",
    "en_def": "(of land) left without crops for a period to recover",
    "cn_def": "休耕的"
  },
  "till": {
    "pos": "v.",
    "en_def": "to prepare and turn over soil for growing crops",
    "cn_def": "耕（地）"
  },
  "sugar cane": {
    "pos": "n.",
    "en_def": "a tall plant whose stems are used to make sugar",
    "cn_def": "甘蔗"
  },
  "scarecrow": {
    "pos": "n.",
    "en_def": "a figure dressed in old clothes to frighten birds away from crops",
    "cn_def": "稻草人"
  },
  "reap": {
    "pos": "v.",
    "en_def": "to cut and collect a crop",
    "cn_def": "收割"
  },
  "objectionable": {
    "pos": "adj.",
    "en_def": "unpleasant and likely to offend",
    "cn_def": "令人反感的"
  },
  "inedible": {
    "pos": "adj.",
    "en_def": "not fit or safe to eat",
    "cn_def": "不能吃的"
  },
  "auxiliary": {
    "pos": "adj.",
    "en_def": "giving extra help or support",
    "cn_def": "輔助的；備用的"
  },
  "manure": {
    "pos": "n.",
    "en_def": "animal waste put on land to help crops grow",
    "cn_def": "糞肥"
  },
  "nourishment": {
    "pos": "n.",
    "en_def": "food needed to live and grow",
    "cn_def": "營養；食物"
  },
  "scourge": {
    "pos": "n.",
    "en_def": "something that causes great trouble or suffering",
    "cn_def": "禍害；災難"
  },
  "food for thought": {
    "pos": "n.phr.",
    "en_def": "an idea that makes you think seriously",
    "cn_def": "值得深思的事"
  },
  "meat substitute": {
    "pos": "n.",
    "en_def": "a food that is used instead of meat",
    "cn_def": "肉類替代品"
  },
  "growth hormone": {
    "pos": "n.",
    "en_def": "a chemical that makes animals grow bigger faster",
    "cn_def": "生長激素"
  },
  "nutritionist": {
    "pos": "n.",
    "en_def": "an expert on food and healthy eating",
    "cn_def": "營養師"
  },
  "ranch": {
    "pos": "n.",
    "en_def": "a very large farm for raising cattle, horses or sheep",
    "cn_def": "大牧場"
  },
  "reliance": {
    "pos": "n.",
    "en_def": "the state of depending on something",
    "cn_def": "依賴"
  },
  "butcher": {
    "pos": "n.",
    "en_def": "a person who cuts and sells meat",
    "cn_def": "肉販；屠夫"
  },
  "nutrition": {
    "pos": "n.",
    "en_def": "the food you eat and how it affects your health",
    "cn_def": "營養"
  },
  "elasticity": {
    "pos": "n.",
    "en_def": "how much demand changes when prices change",
    "cn_def": "彈性"
  },
  "antibiotic": {
    "pos": "n.",
    "en_def": "a medicine that kills bacteria",
    "cn_def": "抗生素"
  },
  "sweetener": {
    "pos": "n.",
    "en_def": "a substance used instead of sugar to make food sweet",
    "cn_def": "甜味劑"
  },
  "frugality": {
    "pos": "n.",
    "en_def": "the habit of not wasting money or food",
    "cn_def": "節儉"
  },
  "crop insurance": {
    "pos": "n.",
    "en_def": "insurance that pays farmers if their harvest is damaged",
    "cn_def": "農作物保險"
  },
  "lab-grown meat": {
    "pos": "n.",
    "en_def": "meat made from animal cells in a laboratory",
    "cn_def": "實驗室培育肉"
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
  "animal welfare": {
    "pos": "n.",
    "en_def": "the health and comfort of animals",
    "cn_def": "動物福利"
  },
  "food safety": {
    "pos": "n.",
    "en_def": "keeping food free from things that can make people ill",
    "cn_def": "食品安全"
  },
  "seasonality": {
    "pos": "n.",
    "en_def": "the way something changes with the seasons",
    "cn_def": "季節性"
  },
  "multitude": {
    "pos": "n.",
    "en_def": "a very large number of things or people",
    "cn_def": "大量；眾多"
  },
  "bedrock": {
    "pos": "n.",
    "en_def": "the basic idea or thing on which others are built",
    "cn_def": "基礎；根本"
  },
  "cholesterol": {
    "pos": "n.",
    "en_def": "a fatty substance in the blood that can block blood vessels",
    "cn_def": "膽固醇"
  },
  "delicacy": {
    "pos": "n.",
    "en_def": "a rare or expensive food that is special to eat",
    "cn_def": "佳餚；珍饈"
  },
  "beehive": {
    "pos": "n.",
    "en_def": "a box or structure where bees live and make honey",
    "cn_def": "蜂巢；蜂箱"
  },
  "corollary": {
    "pos": "n.",
    "en_def": "a natural result of something else",
    "cn_def": "必然結果"
  },
  "barn": {
    "pos": "n.",
    "en_def": "a large farm building for animals, crops or machines",
    "cn_def": "穀倉；畜舍"
  },
  "vulnerability": {
    "pos": "n.",
    "en_def": "the state of being easily hurt or damaged",
    "cn_def": "脆弱性"
  },
  "toxicity": {
    "pos": "n.",
    "en_def": "how poisonous something is",
    "cn_def": "毒性"
  },
  "silage": {
    "pos": "n.",
    "en_def": "green plants stored without air and used as animal food",
    "cn_def": "青貯飼料"
  },
  "pasture": {
    "pos": "n.",
    "en_def": "land covered with grass where animals feed",
    "cn_def": "牧場；牧草地"
  },
  "biotechnology": {
    "pos": "n.",
    "en_def": "using living cells and bacteria to make useful products",
    "cn_def": "生物科技"
  },
  "mismanagement": {
    "pos": "n.",
    "en_def": "bad or careless control of something",
    "cn_def": "管理不當"
  },
  "potency": {
    "pos": "n.",
    "en_def": "the strength of something, such as a drug or chemical",
    "cn_def": "效力；強度"
  },
  "acclimatise": {
    "pos": "v.",
    "en_def": "to get used to a new climate or situation",
    "cn_def": "適應（新環境）"
  },
  "cure": {
    "pos": "v.",
    "en_def": "to keep meat or fish by drying, salting or smoking it",
    "cn_def": "醃製；燻製"
  },
  "overstate": {
    "pos": "v.",
    "en_def": "to describe something as bigger or more important than it really is",
    "cn_def": "誇大"
  },
  "concoct": {
    "pos": "v.",
    "en_def": "to make something by mixing different things, often in a new way",
    "cn_def": "調製；調配"
  },
  "ferment": {
    "pos": "v.",
    "en_def": "to change chemically because of bacteria or yeast",
    "cn_def": "發酵"
  },
  "defrost": {
    "pos": "v.",
    "en_def": "to let frozen food become soft again",
    "cn_def": "解凍"
  },
  "contaminant": {
    "pos": "n.",
    "en_def": "a substance that makes something dirty or unsafe",
    "cn_def": "污染物"
  },
  "dosage": {
    "pos": "n.",
    "en_def": "the amount of a medicine or chemical given at one time",
    "cn_def": "劑量"
  },
  "distributor": {
    "pos": "n.",
    "en_def": "a company that delivers goods from producers to shops",
    "cn_def": "經銷商"
  },
  "fruition": {
    "pos": "n.",
    "en_def": "the point at which a plan becomes real",
    "cn_def": "實現；成果"
  },
  "vegetarian": {
    "pos": "n.",
    "en_def": "a person who does not eat meat or fish",
    "cn_def": "素食者"
  },
  "wholesaler": {
    "pos": "n.",
    "en_def": "a business that sells large amounts of goods to shops",
    "cn_def": "批發商"
  },
  "profusion": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "大量；豐富"
  },
  "haul": {
    "pos": "n.",
    "en_def": "an amount of something that has been caught or taken",
    "cn_def": "捕獲量；收穫"
  },
  "broiler": {
    "pos": "n.",
    "en_def": "a young chicken raised for its meat",
    "cn_def": "肉雞"
  },
  "price hike": {
    "pos": "n.",
    "en_def": "a sudden large increase in price",
    "cn_def": "漲價"
  },
  "farmers' market": {
    "pos": "n.",
    "en_def": "a market where farmers sell their own produce directly",
    "cn_def": "農夫市集"
  },
  "slaughterhouse": {
    "pos": "n.",
    "en_def": "a building where animals are killed for meat",
    "cn_def": "屠宰場"
  },
  "mulch": {
    "pos": "n.",
    "en_def": "material like leaves or straw spread over soil to keep it moist",
    "cn_def": "覆蓋物（護根）"
  },
  "intake": {
    "pos": "n.",
    "en_def": "the amount of food or drink you take into your body",
    "cn_def": "攝取量"
  },
  "vanguard": {
    "pos": "n.",
    "en_def": "the leading position in developing new ideas",
    "cn_def": "先鋒；前衛"
  },
  "reciprocity": {
    "pos": "n.",
    "en_def": "exchanging things with others for mutual benefit",
    "cn_def": "互惠"
  },
  "superfood": {
    "pos": "n.",
    "en_def": "a food said to be especially good for your health",
    "cn_def": "超級食物"
  },
  "wholegrain": {
    "pos": "adj.",
    "en_def": "made with the whole seed of the grain, including the outer layer",
    "cn_def": "全穀的"
  },
  "stale": {
    "pos": "adj.",
    "en_def": "(of bread or snacks) no longer fresh and becoming dry or hard",
    "cn_def": "不新鮮的；走味的"
  },
  "inflationary": {
    "pos": "adj.",
    "en_def": "causing prices to rise",
    "cn_def": "通貨膨脹的"
  },
  "counterbalance": {
    "pos": "v.",
    "en_def": "to have an equal but opposite effect on something",
    "cn_def": "抵銷；平衡"
  },
  "wean": {
    "pos": "v.",
    "en_def": "to make someone stop depending on something",
    "cn_def": "使戒除；使逐漸擺脫"
  },
  "attenuate": {
    "pos": "v.",
    "en_def": "to make something weaker or less strong",
    "cn_def": "減弱；削弱"
  },
  "grain reserve": {
    "pos": "n.",
    "en_def": "a store of grain kept for emergencies",
    "cn_def": "儲備糧"
  },
  "junk food": {
    "pos": "n.",
    "en_def": "food that is tasty but unhealthy",
    "cn_def": "垃圾食物"
  },
  "bulk buying": {
    "pos": "n.",
    "en_def": "buying large amounts at one time, usually at a lower price",
    "cn_def": "大量採購"
  },
  "middleman": {
    "pos": "n.",
    "en_def": "a person who buys from producers and sells to shops or customers",
    "cn_def": "中間商；中盤商"
  },
  "impediment": {
    "pos": "n.",
    "en_def": "something that makes progress difficult",
    "cn_def": "障礙；阻礙"
  },
  "suffice": {
    "pos": "v.",
    "en_def": "to be enough",
    "cn_def": "足夠"
  },
  "recuperate": {
    "pos": "v.",
    "en_def": "to recover after an illness or a difficult time",
    "cn_def": "恢復；復原"
  },
  "spoil": {
    "pos": "v.",
    "en_def": "(of food) to become bad and unsafe to eat",
    "cn_def": "（食物）變質；壞掉"
  }
};

const EXTRA_GLOSSES = {};
