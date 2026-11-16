// Topic 18 Subunit 3 Quiz Data: Trees & Forest Types 樹木與森林類型
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S03 - Trees & Forest Types 樹木與森林類型",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "oak",
    "pos": "n.",
    "cn_def": "橡樹",
    "en_def": "a large tree with hard wood that produces acorns",
    "sentence": "The old {{BLANK}} in the village square is more than three hundred years old, so the town council has made it a protected tree.",
    "cn": "村子廣場上那棵老橡樹已經三百多歲了,所以鎮議會把它列為受保護的樹木。"
  },
  {
    "word": "pine",
    "pos": "n.",
    "cn_def": "松樹",
    "en_def": "an evergreen tree with needle-shaped leaves",
    "sentence": "The air in the mountains smells fresh because of the {{BLANK}} trees, and many people go there to relax at weekends.",
    "cn": "山上的空氣因為松樹而聞起來很清新,許多人週末會去那裡放鬆。"
  },
  {
    "word": "maple",
    "pos": "n.",
    "cn_def": "楓樹",
    "en_def": "a tree whose leaves turn red in autumn",
    "sentence": "In November the {{BLANK}} trees in Hsinchu turn bright red, so the forest park is full of photographers.",
    "cn": "十一月時新竹的楓樹會變成鮮紅色,所以森林公園裡擠滿了攝影師。"
  },
  {
    "word": "birch",
    "pos": "n.",
    "cn_def": "樺樹",
    "en_def": "a tree with thin white bark",
    "sentence": "The {{BLANK}} trees have white bark that looks like paper, and in the past people even wrote messages on it.",
    "cn": "樺樹的樹皮是白色的,看起來像紙,過去人們甚至在上面寫信息。"
  },
  {
    "word": "willow",
    "pos": "n.",
    "cn_def": "柳樹",
    "en_def": "a tree with long thin branches that often grows near water",
    "sentence": "A beautiful {{BLANK}} grows beside the pond, and its long branches hang down so low that they touch the water.",
    "cn": "池塘邊長著一棵美麗的柳樹,它長長的枝條垂得很低,甚至碰到水面。"
  },
  {
    "word": "elm",
    "pos": "n.",
    "cn_def": "榆樹",
    "en_def": "a tall tree once common in Europe",
    "sentence": "Millions of {{BLANK}} trees died in Britain in the 1970s, but scientists are now planting new trees that can resist the disease.",
    "cn": "1970年代英國有數百萬棵榆樹死亡,但科學家現在正在種植能抵抗這種疾病的新樹。"
  },
  {
    "word": "cedar",
    "pos": "n.",
    "cn_def": "雪松;檜木",
    "en_def": "a large evergreen tree with sweet-smelling wood",
    "sentence": "Taiwan's mountain forests are famous for their giant red {{BLANK}} trees, and some of them are over two thousand years old.",
    "cn": "台灣的山林以巨大的紅檜聞名,其中有些已經超過兩千歲了。"
  },
  {
    "word": "cypress",
    "pos": "n.",
    "cn_def": "柏樹",
    "en_def": "a tall dark evergreen tree",
    "sentence": "The temple is surrounded by tall {{BLANK}} trees, so the courtyard stays shady and quiet even in summer.",
    "cn": "寺廟被高大的柏樹環繞,所以即使在夏天庭院依然陰涼又安靜。"
  },
  {
    "word": "redwood",
    "pos": "n.",
    "cn_def": "紅杉",
    "en_def": "a very tall tree that grows in California",
    "sentence": "The tallest {{BLANK}} in California is over one hundred metres high, but its exact location is kept secret to protect it.",
    "cn": "加州最高的紅杉超過一百公尺高,但它的確切位置被保密以保護它。"
  },
  {
    "word": "eucalyptus",
    "pos": "n.",
    "cn_def": "尤加利樹",
    "en_def": "a tall Australian tree with oily, strong-smelling leaves",
    "sentence": "Koalas eat only {{BLANK}} leaves, so they cannot survive when bushfires destroy large areas of forest.",
    "cn": "無尾熊只吃尤加利樹的葉子,所以當森林大火燒毀大片森林時,牠們就無法生存。"
  },
  {
    "word": "spruce",
    "pos": "n.",
    "cn_def": "雲杉",
    "en_def": "an evergreen tree with short needles, often used as a Christmas tree",
    "sentence": "Many families buy a small {{BLANK}} as a Christmas tree, and after the holiday some cities collect the trees to make mulch.",
    "cn": "許多家庭買一棵小雲杉當聖誕樹,節日過後有些城市會回收這些樹來做覆蓋物。"
  },
  {
    "word": "fir",
    "pos": "n.",
    "cn_def": "冷杉",
    "en_def": "a straight evergreen tree with flat needles",
    "sentence": "High on Hehuanshan, the hillsides are covered with {{BLANK}} trees, and in winter their branches are often white with snow.",
    "cn": "在合歡山高處,山坡上覆蓋著冷杉,冬天時它們的枝條常常被雪染白。"
  },
  {
    "word": "beech",
    "pos": "n.",
    "cn_def": "山毛櫸",
    "en_def": "a large tree with smooth grey bark",
    "sentence": "Taiwan {{BLANK}} trees grow only on a few high mountains, and their leaves turn golden for just a few weeks each autumn.",
    "cn": "台灣山毛櫸只生長在少數幾座高山上,它們的葉子每年秋天只會變成金黃色短短幾週。"
  },
  {
    "word": "palm tree",
    "pos": "n.phr.",
    "cn_def": "棕櫚樹",
    "en_def": "a tall tree with large leaves at the top and no branches",
    "sentence": "The beach is lined with {{BLANK}}, so tourists can sit in the shade while they watch the waves.",
    "cn": "海灘上種滿了一排排棕櫚樹,所以遊客可以坐在樹蔭下看海浪。"
  },
  {
    "word": "coniferous",
    "pos": "adj.",
    "cn_def": "針葉的",
    "en_def": "having cones and needle-shaped leaves",
    "sentence": "Northern Canada is covered by {{BLANK}} forests, and these trees stay green even when the temperature falls far below zero.",
    "cn": "加拿大北部覆蓋著針葉林,即使氣溫降到遠低於零度,這些樹依然保持翠綠。"
  },
  {
    "word": "broadleaf",
    "pos": "adj.",
    "cn_def": "闊葉的",
    "en_def": "having wide flat leaves, not needles",
    "sentence": "The lower slopes of the mountain have {{BLANK}} trees, but higher up the forest changes to pine and fir.",
    "cn": "山的較低坡面是闊葉樹,但往高處森林就變成松樹和冷杉。"
  },
  {
    "word": "hardwood",
    "pos": "n.",
    "cn_def": "硬木",
    "en_def": "strong heavy wood from trees like oak",
    "sentence": "The new dining table is made of {{BLANK}}, so it was expensive, but it will probably last for fifty years.",
    "cn": "新的餐桌是用硬木做的,所以很貴,但它大概可以用五十年。"
  },
  {
    "word": "softwood",
    "pos": "n.",
    "cn_def": "軟木;針葉木材",
    "en_def": "lighter wood from trees like pine",
    "sentence": "Most houses in North America are built with {{BLANK}} because it grows quickly and is easy to cut.",
    "cn": "北美大多數房屋是用軟木建造的,因為它長得快又容易切割。"
  },
  {
    "word": "boreal forest",
    "pos": "n.phr.",
    "cn_def": "北方針葉林",
    "en_def": "the huge cold forest in the far north of the world",
    "sentence": "The {{BLANK}} stretches across Russia and Canada, and it stores a huge amount of carbon in its soil.",
    "cn": "北方針葉林橫跨俄羅斯和加拿大,它的土壤中儲存了大量的碳。"
  },
  {
    "word": "taiga",
    "pos": "n.",
    "cn_def": "針葉林帶;泰加林",
    "en_def": "another name for the cold northern forest",
    "sentence": "Few people live in the Siberian {{BLANK}}, but it is home to bears, wolves and the rare Siberian tiger.",
    "cn": "很少人住在西伯利亞的針葉林帶,但那裡是熊、狼和稀有的西伯利亞虎的家。"
  },
  {
    "word": "cloud forest",
    "pos": "n.phr.",
    "cn_def": "雲霧林",
    "en_def": "a wet mountain forest often covered in cloud",
    "sentence": "We hiked through a misty {{BLANK}}, and the trees were covered with moss because the air was always wet.",
    "cn": "我們徒步穿越一片霧氣瀰漫的雲霧林,樹上長滿了苔蘚,因為空氣總是很潮濕。"
  },
  {
    "word": "temperate forest",
    "pos": "n.phr.",
    "cn_def": "溫帶森林",
    "en_def": "a forest in a region with warm summers and cool winters",
    "sentence": "A {{BLANK}} has four clear seasons, so visitors can enjoy green leaves in summer and bright colours in autumn.",
    "cn": "溫帶森林有分明的四季,所以遊客夏天能欣賞綠葉,秋天能欣賞鮮豔的色彩。"
  },
  {
    "word": "old-growth forest",
    "pos": "n.phr.",
    "cn_def": "原始林;老齡林",
    "en_def": "a very old forest that has never been cut down",
    "sentence": "Only a small area of {{BLANK}} remains in the valley, so environmental groups are fighting to stop any new logging.",
    "cn": "山谷中只剩下一小片原始林,所以環保團體正在努力阻止任何新的伐木。"
  },
  {
    "word": "woodland",
    "pos": "n.",
    "cn_def": "林地",
    "en_def": "land covered with trees, smaller than a forest",
    "sentence": "There is a small {{BLANK}} behind our school, and students often go there to study insects and birds.",
    "cn": "我們學校後面有一片小林地,學生們常去那裡觀察昆蟲和鳥類。"
  },
  {
    "word": "grove",
    "pos": "n.",
    "cn_def": "小樹林",
    "en_def": "a small group of trees",
    "sentence": "The farmer planted an orange {{BLANK}} on the hillside, and now he sells the fruit at the local market.",
    "cn": "農夫在山坡上種了一片柑橘小樹林,現在他在當地市場賣這些水果。"
  },
  {
    "word": "forest floor",
    "pos": "n.phr.",
    "cn_def": "森林地面",
    "en_def": "the ground in a forest",
    "sentence": "Very little sunlight reaches the {{BLANK}}, so only plants that like shade can grow there.",
    "cn": "很少陽光能照到森林地面,所以只有喜歡陰涼的植物能在那裡生長。"
  },
  {
    "word": "understorey",
    "pos": "n.",
    "cn_def": "林下層",
    "en_def": "the layer of small trees and plants under the tallest trees",
    "sentence": "The {{BLANK}} of the rainforest is dark and damp, but it is full of insects, frogs and young trees.",
    "cn": "雨林的林下層陰暗潮濕,但充滿了昆蟲、青蛙和幼樹。"
  },
  {
    "word": "leaf litter",
    "pos": "n.phr.",
    "cn_def": "落葉層",
    "en_def": "dead leaves lying on the ground",
    "sentence": "The {{BLANK}} on the ground slowly breaks down, and it gives food to the soil and the creatures living in it.",
    "cn": "地上的落葉層慢慢分解,為土壤和住在其中的生物提供養分。"
  },
  {
    "word": "clearing",
    "pos": "n.",
    "cn_def": "林間空地",
    "en_def": "an open area in a forest with no trees",
    "sentence": "We found a sunny {{BLANK}} in the middle of the forest, so we stopped there to eat our lunch.",
    "cn": "我們在森林中間找到一塊陽光充足的林間空地,所以就在那裡停下來吃午餐。"
  },
  {
    "word": "treeline",
    "pos": "n.",
    "cn_def": "林木線",
    "en_def": "the height on a mountain above which trees cannot grow",
    "sentence": "Above the {{BLANK}}, the wind is too strong and cold for trees, so only grass and small bushes can survive.",
    "cn": "在林木線以上,風太強又太冷,樹木無法生長,所以只有草和小灌木能存活。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林",
    "en_def": "a thick tropical forest",
    "sentence": "The explorers walked through the {{BLANK}} for three days, and they had to cut a path with large knives.",
    "cn": "探險家們在叢林裡走了三天,他們必須用大刀開出一條路。"
  },
  {
    "word": "shrub",
    "pos": "n.",
    "cn_def": "灌木",
    "en_def": "a small bush with several woody stems",
    "sentence": "The city planted low {{BLANK}} along the road, because they reduce noise and do not block the drivers' view.",
    "cn": "市政府沿著道路種植矮灌木,因為它們能減少噪音,也不會擋住駕駛的視線。"
  },
  {
    "word": "hedge",
    "pos": "n.",
    "cn_def": "樹籬",
    "en_def": "a row of bushes growing close together",
    "sentence": "There is a tall {{BLANK}} between our garden and the road, so passers-by cannot see into our house.",
    "cn": "我們的花園和馬路之間有一道高高的樹籬,所以路人看不到我們家裡。"
  },
  {
    "word": "moss",
    "pos": "n.",
    "cn_def": "苔蘚",
    "en_def": "a very small soft green plant that grows on wet surfaces",
    "sentence": "The stones on the mountain path were covered with green {{BLANK}}, so they were very slippery after the rain.",
    "cn": "山路上的石頭覆蓋著綠色的苔蘚,所以雨後非常滑。"
  },
  {
    "word": "lichen",
    "pos": "n.",
    "cn_def": "地衣",
    "en_def": "a plant-like growth on rocks and trees, made of fungus and algae",
    "sentence": "Scientists study the {{BLANK}} on trees because it cannot grow where the air is dirty, so it shows how clean the air is.",
    "cn": "科學家研究樹上的地衣,因為它無法在空氣污濁的地方生長,所以它能顯示空氣有多乾淨。"
  },
  {
    "word": "mushroom",
    "pos": "n.",
    "cn_def": "蘑菇;菇類",
    "en_def": "a fungus with a stem and a round top",
    "sentence": "We saw many {{BLANK}} growing on a fallen log, but our guide warned us that some of them were poisonous.",
    "cn": "我們看到一根倒下的木頭上長了許多菇類,但嚮導警告我們其中有些是有毒的。"
  },
  {
    "word": "vine",
    "pos": "n.",
    "cn_def": "藤蔓",
    "en_def": "a plant that climbs up walls or trees",
    "sentence": "Green {{BLANK}} covered the walls of the old house, and in summer they kept the rooms cool.",
    "cn": "綠色的藤蔓爬滿了老房子的牆壁,夏天時它們讓房間保持涼爽。"
  },
  {
    "word": "ivy",
    "pos": "n.",
    "cn_def": "常春藤",
    "en_def": "a climbing evergreen plant with dark shiny leaves",
    "sentence": "The library building is covered in {{BLANK}}, and students say it looks like a university in an old film.",
    "cn": "圖書館大樓爬滿了常春藤,學生們說它看起來就像老電影裡的大學。"
  },
  {
    "word": "fern",
    "pos": "n.",
    "cn_def": "蕨類",
    "en_def": "a green plant with feathery leaves and no flowers",
    "sentence": "Tree {{BLANK}} grow along the stream in Wulai, and some of them are taller than a two-storey house.",
    "cn": "烏來的溪邊長著筆筒樹等樹蕨,其中有些比兩層樓的房子還高。"
  },
  {
    "word": "orchid",
    "pos": "n.",
    "cn_def": "蘭花",
    "en_def": "a plant with beautiful and unusual flowers",
    "sentence": "Taiwan exports millions of {{BLANK}} every year, and they are very popular gifts during Chinese New Year.",
    "cn": "台灣每年出口數百萬株蘭花,它們是農曆新年期間非常受歡迎的禮物。"
  },
  {
    "word": "cactus",
    "pos": "n.",
    "cn_def": "仙人掌",
    "en_def": "a desert plant with thick stems and sharp spines",
    "sentence": "A {{BLANK}} can store water in its thick stem, so it can survive for months without rain.",
    "cn": "仙人掌能把水儲存在厚厚的莖裡,所以它可以好幾個月不下雨也能存活。"
  }
];

const MCQS = [
  {
    "q": "The old _____ in the village square is more than three hundred years old, so the town council has made it a protected tree.",
    "options": [
      "afforestation",
      "oak",
      "oversimplification",
      "fungus"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The air in the mountains smells fresh because of the _____ trees, and many people go there to relax at weekends.",
    "options": [
      "arbitration",
      "ember",
      "pine",
      "clear-cutting"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "In November the _____ trees in Hsinchu turn bright red, so the forest park is full of photographers.",
    "options": [
      "crossover",
      "firebreak",
      "amalgamation",
      "maple"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The _____ trees have white bark that looks like paper, and in the past people even wrote messages on it.",
    "options": [
      "birch",
      "marsh",
      "initiation",
      "phloem"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "A beautiful _____ grows beside the pond, and its long branches hang down so low that they touch the water.",
    "options": [
      "overgrazing",
      "crossover",
      "willow",
      "subdivision"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Millions of _____ trees died in Britain in the 1970s, but scientists are now planting new trees that can resist the disease.",
    "options": [
      "subsidiary",
      "elm",
      "abatement",
      "inhibitor"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Taiwan's mountain forests are famous for their giant red _____ trees, and some of them are over two thousand years old.",
    "options": [
      "cedar",
      "gardener",
      "containment",
      "woodpecker"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The temple is surrounded by tall _____ trees, so the courtyard stays shady and quiet even in summer.",
    "options": [
      "bulb",
      "lumber",
      "sap",
      "cypress"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The tallest _____ in California is over one hundred metres high, but its exact location is kept secret to protect it.",
    "options": [
      "subsidiary",
      "redwood",
      "chlorophyll",
      "initiation"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Koalas eat only _____ leaves, so they cannot survive when bushfires destroy large areas of forest.",
    "options": [
      "birdwatching",
      "firebreak",
      "chlorophyll",
      "eucalyptus"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Many families buy a small _____ as a Christmas tree, and after the holiday some cities collect the trees to make mulch.",
    "options": [
      "stabilisation",
      "compartment",
      "spruce",
      "dispersion"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "High on Hehuanshan, the hillsides are covered with _____ trees, and in winter their branches are often white with snow.",
    "options": [
      "fir",
      "botany",
      "resin",
      "redistribution"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Taiwan _____ trees grow only on a few high mountains, and their leaves turn golden for just a few weeks each autumn.",
    "options": [
      "sap",
      "incompatibility",
      "beech",
      "quantification"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The beach is lined with _____, so tourists can sit in the shade while they watch the waves.",
    "options": [
      "palm tree",
      "seed dispersal",
      "Ramsar Convention",
      "nature reserve"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Northern Canada is covered by _____ forests, and these trees stay green even when the temperature falls far below zero.",
    "options": [
      "terrestrial",
      "brackish",
      "relational",
      "coniferous"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The lower slopes of the mountain have _____ trees, but higher up the forest changes to pine and fir.",
    "options": [
      "terrestrial",
      "broadleaf",
      "hydrological",
      "logistical"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new dining table is made of _____, so it was expensive, but it will probably last for fifty years.",
    "options": [
      "hardwood",
      "tuber",
      "colonisation",
      "containment"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Most houses in North America are built with _____ because it grows quickly and is easy to cut.",
    "options": [
      "sapling",
      "birdwatching",
      "softwood",
      "heron"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The _____ stretches across Russia and Canada, and it stores a huge amount of carbon in its soil.",
    "options": [
      "water level",
      "boreal forest",
      "carbon sequestration",
      "canopy gap"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Few people live in the Siberian _____, but it is home to bears, wolves and the rare Siberian tiger.",
    "options": [
      "reed",
      "humus",
      "specificity",
      "taiga"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "We hiked through a misty _____, and the trees were covered with moss because the air was always wet.",
    "options": [
      "cloud forest",
      "growth ring",
      "pioneer species",
      "selective logging"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "A _____ has four clear seasons, so visitors can enjoy green leaves in summer and bright colours in autumn.",
    "options": [
      "tree planting",
      "temperate forest",
      "water purification",
      "protected area"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Only a small area of _____ remains in the valley, so environmental groups are fighting to stop any new logging.",
    "options": [
      "controlled burn",
      "tree cover",
      "old-growth forest",
      "carbon sequestration"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "There is a small _____ behind our school, and students often go there to study insects and birds.",
    "options": [
      "waterfowl",
      "forestry",
      "beaver",
      "woodland"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The farmer planted an orange _____ on the hillside, and now he sells the fruit at the local market.",
    "options": [
      "cross-pollination",
      "grove",
      "mobilisation",
      "bark"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Very little sunlight reaches the _____, so only plants that like shade can grow there.",
    "options": [
      "forest floor",
      "tree nursery",
      "land reclamation",
      "controlled burn"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The _____ of the rainforest is dark and damp, but it is full of insects, frogs and young trees.",
    "options": [
      "firebreak",
      "mobilisation",
      "understorey",
      "demarcation"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The _____ on the ground slowly breaks down, and it gives food to the soil and the creatures living in it.",
    "options": [
      "Ramsar Convention",
      "canopy gap",
      "cell wall",
      "leaf litter"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "We found a sunny _____ in the middle of the forest, so we stopped there to eat our lunch.",
    "options": [
      "distinctiveness",
      "ignition",
      "clearing",
      "endangerment"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Above the _____, the wind is too strong and cold for trees, so only grass and small bushes can survive.",
    "options": [
      "biosecurity",
      "solidity",
      "firebreak",
      "treeline"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The explorers walked through the _____ for three days, and they had to cut a path with large knives.",
    "options": [
      "initiation",
      "jungle",
      "inaccuracy",
      "aggravation"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The city planted low _____ along the road, because they reduce noise and do not block the drivers' view.",
    "options": [
      "shrub",
      "quarantine",
      "marsh",
      "unanimity"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "There is a tall _____ between our garden and the road, so passers-by cannot see into our house.",
    "options": [
      "botanist",
      "demarcation",
      "hedge",
      "totality"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The stones on the mountain path were covered with green _____, so they were very slippery after the rain.",
    "options": [
      "botanist",
      "rhizome",
      "blossom",
      "moss"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "Scientists study the _____ on trees because it cannot grow where the air is dirty, so it shows how clean the air is.",
    "options": [
      "lichen",
      "boardwalk",
      "calibration",
      "duckweed"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "We saw many _____ growing on a fallen log, but our guide warned us that some of them were poisonous.",
    "options": [
      "tendril",
      "mushroom",
      "deadwood",
      "augmentation"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "Green _____ covered the walls of the old house, and in summer they kept the rooms cool.",
    "options": [
      "vine",
      "homogeneity",
      "distinctiveness",
      "petal"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "The library building is covered in _____, and students say it looks like a university in an old film.",
    "options": [
      "articulation",
      "ivy",
      "berry",
      "cross-pollination"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "Tree _____ grow along the stream in Wulai, and some of them are taller than a two-storey house.",
    "options": [
      "caterpillar",
      "descriptor",
      "fern",
      "biomass"
    ],
    "answer": 2,
    "vocabIndex": 38
  },
  {
    "q": "Taiwan exports millions of _____ every year, and they are very popular gifts during Chinese New Year.",
    "options": [
      "sparsity",
      "incompatibility",
      "nectar",
      "orchid"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "A _____ can store water in its thick stem, so it can survive for months without rain.",
    "options": [
      "misinterpretation",
      "trunk",
      "cactus",
      "reconciliation"
    ],
    "answer": 2,
    "vocabIndex": 40
  }
];

const LOOKUP = {
  "oak": {
    "pos": "n.",
    "en_def": "a large tree with hard wood that produces acorns",
    "cn_def": "橡樹"
  },
  "pine": {
    "pos": "n.",
    "en_def": "an evergreen tree with needle-shaped leaves",
    "cn_def": "松樹"
  },
  "maple": {
    "pos": "n.",
    "en_def": "a tree whose leaves turn red in autumn",
    "cn_def": "楓樹"
  },
  "birch": {
    "pos": "n.",
    "en_def": "a tree with thin white bark",
    "cn_def": "樺樹"
  },
  "willow": {
    "pos": "n.",
    "en_def": "a tree with long thin branches that often grows near water",
    "cn_def": "柳樹"
  },
  "elm": {
    "pos": "n.",
    "en_def": "a tall tree once common in Europe",
    "cn_def": "榆樹"
  },
  "cedar": {
    "pos": "n.",
    "en_def": "a large evergreen tree with sweet-smelling wood",
    "cn_def": "雪松;檜木"
  },
  "cypress": {
    "pos": "n.",
    "en_def": "a tall dark evergreen tree",
    "cn_def": "柏樹"
  },
  "redwood": {
    "pos": "n.",
    "en_def": "a very tall tree that grows in California",
    "cn_def": "紅杉"
  },
  "eucalyptus": {
    "pos": "n.",
    "en_def": "a tall Australian tree with oily, strong-smelling leaves",
    "cn_def": "尤加利樹"
  },
  "spruce": {
    "pos": "n.",
    "en_def": "an evergreen tree with short needles, often used as a Christmas tree",
    "cn_def": "雲杉"
  },
  "fir": {
    "pos": "n.",
    "en_def": "a straight evergreen tree with flat needles",
    "cn_def": "冷杉"
  },
  "beech": {
    "pos": "n.",
    "en_def": "a large tree with smooth grey bark",
    "cn_def": "山毛櫸"
  },
  "palm tree": {
    "pos": "n.phr.",
    "en_def": "a tall tree with large leaves at the top and no branches",
    "cn_def": "棕櫚樹"
  },
  "coniferous": {
    "pos": "adj.",
    "en_def": "having cones and needle-shaped leaves",
    "cn_def": "針葉的"
  },
  "broadleaf": {
    "pos": "adj.",
    "en_def": "having wide flat leaves, not needles",
    "cn_def": "闊葉的"
  },
  "hardwood": {
    "pos": "n.",
    "en_def": "strong heavy wood from trees like oak",
    "cn_def": "硬木"
  },
  "softwood": {
    "pos": "n.",
    "en_def": "lighter wood from trees like pine",
    "cn_def": "軟木;針葉木材"
  },
  "boreal forest": {
    "pos": "n.phr.",
    "en_def": "the huge cold forest in the far north of the world",
    "cn_def": "北方針葉林"
  },
  "taiga": {
    "pos": "n.",
    "en_def": "another name for the cold northern forest",
    "cn_def": "針葉林帶;泰加林"
  },
  "cloud forest": {
    "pos": "n.phr.",
    "en_def": "a wet mountain forest often covered in cloud",
    "cn_def": "雲霧林"
  },
  "temperate forest": {
    "pos": "n.phr.",
    "en_def": "a forest in a region with warm summers and cool winters",
    "cn_def": "溫帶森林"
  },
  "old-growth forest": {
    "pos": "n.phr.",
    "en_def": "a very old forest that has never been cut down",
    "cn_def": "原始林;老齡林"
  },
  "woodland": {
    "pos": "n.",
    "en_def": "land covered with trees, smaller than a forest",
    "cn_def": "林地"
  },
  "grove": {
    "pos": "n.",
    "en_def": "a small group of trees",
    "cn_def": "小樹林"
  },
  "forest floor": {
    "pos": "n.phr.",
    "en_def": "the ground in a forest",
    "cn_def": "森林地面"
  },
  "understorey": {
    "pos": "n.",
    "en_def": "the layer of small trees and plants under the tallest trees",
    "cn_def": "林下層"
  },
  "leaf litter": {
    "pos": "n.phr.",
    "en_def": "dead leaves lying on the ground",
    "cn_def": "落葉層"
  },
  "clearing": {
    "pos": "n.",
    "en_def": "an open area in a forest with no trees",
    "cn_def": "林間空地"
  },
  "treeline": {
    "pos": "n.",
    "en_def": "the height on a mountain above which trees cannot grow",
    "cn_def": "林木線"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest",
    "cn_def": "叢林"
  },
  "shrub": {
    "pos": "n.",
    "en_def": "a small bush with several woody stems",
    "cn_def": "灌木"
  },
  "hedge": {
    "pos": "n.",
    "en_def": "a row of bushes growing close together",
    "cn_def": "樹籬"
  },
  "moss": {
    "pos": "n.",
    "en_def": "a very small soft green plant that grows on wet surfaces",
    "cn_def": "苔蘚"
  },
  "lichen": {
    "pos": "n.",
    "en_def": "a plant-like growth on rocks and trees, made of fungus and algae",
    "cn_def": "地衣"
  },
  "mushroom": {
    "pos": "n.",
    "en_def": "a fungus with a stem and a round top",
    "cn_def": "蘑菇;菇類"
  },
  "vine": {
    "pos": "n.",
    "en_def": "a plant that climbs up walls or trees",
    "cn_def": "藤蔓"
  },
  "ivy": {
    "pos": "n.",
    "en_def": "a climbing evergreen plant with dark shiny leaves",
    "cn_def": "常春藤"
  },
  "fern": {
    "pos": "n.",
    "en_def": "a green plant with feathery leaves and no flowers",
    "cn_def": "蕨類"
  },
  "orchid": {
    "pos": "n.",
    "en_def": "a plant with beautiful and unusual flowers",
    "cn_def": "蘭花"
  },
  "cactus": {
    "pos": "n.",
    "en_def": "a desert plant with thick stems and sharp spines",
    "cn_def": "仙人掌"
  },
  "afforestation": {
    "pos": "n.",
    "en_def": "planting trees on land that had no forest before",
    "cn_def": "造林"
  },
  "oversimplification": {
    "pos": "n.",
    "en_def": "making something seem simpler than it really is",
    "cn_def": "過度簡化"
  },
  "fungus": {
    "pos": "n.",
    "en_def": "a living thing such as a mushroom or mould",
    "cn_def": "真菌"
  },
  "arbitration": {
    "pos": "n.",
    "en_def": "settling an argument by asking a neutral person to decide",
    "cn_def": "仲裁"
  },
  "ember": {
    "pos": "n.",
    "en_def": "a small piece of burning wood from a fire",
    "cn_def": "餘燼;火星"
  },
  "clear-cutting": {
    "pos": "n.",
    "en_def": "cutting down all the trees in an area at once",
    "cn_def": "皆伐"
  },
  "crossover": {
    "pos": "n.",
    "en_def": "a mix of two different areas or styles",
    "cn_def": "交叉;跨界"
  },
  "firebreak": {
    "pos": "n.",
    "en_def": "a strip of cleared land that stops a fire from spreading",
    "cn_def": "防火線"
  },
  "amalgamation": {
    "pos": "n.",
    "en_def": "the joining of two or more things into one",
    "cn_def": "合併;融合"
  },
  "marsh": {
    "pos": "n.",
    "en_def": "soft wet land with grass and reeds",
    "cn_def": "沼澤;濕地"
  },
  "initiation": {
    "pos": "n.",
    "en_def": "the start of something",
    "cn_def": "開始;啟動"
  },
  "phloem": {
    "pos": "n.",
    "en_def": "tubes in a plant that carry sugar from the leaves",
    "cn_def": "韌皮部"
  },
  "overgrazing": {
    "pos": "n.",
    "en_def": "when too many animals eat the plants in an area",
    "cn_def": "過度放牧"
  },
  "subdivision": {
    "pos": "n.",
    "en_def": "dividing something into smaller parts",
    "cn_def": "再劃分;細分"
  },
  "subsidiary": {
    "pos": "n.",
    "en_def": "a company owned by a larger company",
    "cn_def": "子公司"
  },
  "abatement": {
    "pos": "n.",
    "en_def": "the reduction of something bad, such as noise or pollution",
    "cn_def": "減少;減輕"
  },
  "inhibitor": {
    "pos": "n.",
    "en_def": "something that slows down or stops a process",
    "cn_def": "抑制物;抑制劑"
  },
  "gardener": {
    "pos": "n.",
    "en_def": "a person who looks after a garden",
    "cn_def": "園丁"
  },
  "containment": {
    "pos": "n.",
    "en_def": "keeping something harmful under control",
    "cn_def": "控制;圍堵"
  },
  "woodpecker": {
    "pos": "n.",
    "en_def": "a bird that makes holes in trees with its beak",
    "cn_def": "啄木鳥"
  },
  "bulb": {
    "pos": "n.",
    "en_def": "a round underground part from which some plants grow",
    "cn_def": "球莖"
  },
  "lumber": {
    "pos": "n.",
    "en_def": "wood that has been cut into boards",
    "cn_def": "木材;木料"
  },
  "sap": {
    "pos": "n.",
    "en_def": "the liquid that carries food inside a plant",
    "cn_def": "樹液"
  },
  "chlorophyll": {
    "pos": "n.",
    "en_def": "the green substance in plants that absorbs sunlight",
    "cn_def": "葉綠素"
  },
  "birdwatching": {
    "pos": "n.",
    "en_def": "the hobby of watching wild birds",
    "cn_def": "賞鳥"
  },
  "stabilisation": {
    "pos": "n.",
    "en_def": "making something steady and firm",
    "cn_def": "穩定化;穩固"
  },
  "compartment": {
    "pos": "n.",
    "en_def": "one of the separate parts that something is divided into",
    "cn_def": "隔間;區塊"
  },
  "dispersion": {
    "pos": "n.",
    "en_def": "the spreading of something over a wide area",
    "cn_def": "散布;擴散"
  },
  "botany": {
    "pos": "n.",
    "en_def": "the scientific study of plants",
    "cn_def": "植物學"
  },
  "resin": {
    "pos": "n.",
    "en_def": "a sticky substance made by some trees",
    "cn_def": "樹脂"
  },
  "redistribution": {
    "pos": "n.",
    "en_def": "sharing something out again in a different way",
    "cn_def": "重新分配"
  },
  "incompatibility": {
    "pos": "n.",
    "en_def": "being unable to exist together without problems",
    "cn_def": "不相容"
  },
  "quantification": {
    "pos": "n.",
    "en_def": "measuring something as a number",
    "cn_def": "量化"
  },
  "seed dispersal": {
    "pos": "n.phr.",
    "en_def": "the ways seeds are spread away from the parent plant",
    "cn_def": "種子傳播"
  },
  "ramsar convention": {
    "pos": "n.phr.",
    "en_def": "an international agreement to protect important wetlands",
    "cn_def": "拉姆薩公約(國際濕地公約)"
  },
  "nature reserve": {
    "pos": "n.phr.",
    "en_def": "an area where plants and animals are protected",
    "cn_def": "自然保護區"
  },
  "terrestrial": {
    "pos": "adj.",
    "en_def": "living on land, not in water",
    "cn_def": "陸生的"
  },
  "brackish": {
    "pos": "adj.",
    "en_def": "slightly salty, a mix of river water and sea water",
    "cn_def": "半鹹的;鹹淡水的"
  },
  "relational": {
    "pos": "adj.",
    "en_def": "relating to the connections between things",
    "cn_def": "關係的"
  },
  "hydrological": {
    "pos": "adj.",
    "en_def": "relating to the movement of water on and under the land",
    "cn_def": "水文的"
  },
  "logistical": {
    "pos": "adj.",
    "en_def": "relating to the planning of moving people and supplies",
    "cn_def": "後勤的"
  },
  "tuber": {
    "pos": "n.",
    "en_def": "a thick underground stem that stores food, like a potato",
    "cn_def": "塊莖"
  },
  "colonisation": {
    "pos": "n.",
    "en_def": "when plants or animals move into and spread in a new area",
    "cn_def": "拓殖;移殖"
  },
  "sapling": {
    "pos": "n.",
    "en_def": "a young tree",
    "cn_def": "小樹;幼樹"
  },
  "heron": {
    "pos": "n.",
    "en_def": "a tall grey bird with long legs that catches fish",
    "cn_def": "鷺;蒼鷺"
  },
  "water level": {
    "pos": "n.phr.",
    "en_def": "the height of the surface of water",
    "cn_def": "水位"
  },
  "carbon sequestration": {
    "pos": "n.phr.",
    "en_def": "storing carbon from the air in plants, soil or rocks",
    "cn_def": "碳封存;固碳"
  },
  "canopy gap": {
    "pos": "n.phr.",
    "en_def": "an opening in the top layer of a forest",
    "cn_def": "林冠孔隙"
  },
  "reed": {
    "pos": "n.",
    "en_def": "a tall grass that grows in or near water",
    "cn_def": "蘆葦"
  },
  "humus": {
    "pos": "n.",
    "en_def": "dark rich soil made from dead leaves and plants",
    "cn_def": "腐植質"
  },
  "specificity": {
    "pos": "n.",
    "en_def": "being exact and detailed",
    "cn_def": "明確性;特定性"
  },
  "growth ring": {
    "pos": "n.phr.",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "cn_def": "年輪"
  },
  "pioneer species": {
    "pos": "n.phr.",
    "en_def": "the first plants to grow on empty or damaged land",
    "cn_def": "先驅物種"
  },
  "selective logging": {
    "pos": "n.phr.",
    "en_def": "cutting down only some chosen trees in a forest",
    "cn_def": "擇伐"
  },
  "tree planting": {
    "pos": "n.phr.",
    "en_def": "the activity of putting young trees into the ground",
    "cn_def": "植樹"
  },
  "water purification": {
    "pos": "n.phr.",
    "en_def": "the process of making water clean",
    "cn_def": "水質淨化"
  },
  "protected area": {
    "pos": "n.phr.",
    "en_def": "a place where nature is protected by law",
    "cn_def": "保護區"
  },
  "controlled burn": {
    "pos": "n.phr.",
    "en_def": "a small fire started on purpose to remove dry plants",
    "cn_def": "計畫性燃燒;控制焚燒"
  },
  "tree cover": {
    "pos": "n.phr.",
    "en_def": "the area of land covered by trees",
    "cn_def": "樹木覆蓋"
  },
  "waterfowl": {
    "pos": "n.",
    "en_def": "birds such as ducks and geese that live on water",
    "cn_def": "水禽"
  },
  "forestry": {
    "pos": "n.",
    "en_def": "the science and work of looking after forests",
    "cn_def": "林業"
  },
  "beaver": {
    "pos": "n.",
    "en_def": "an animal with a flat tail that builds dams in rivers",
    "cn_def": "河狸"
  },
  "cross-pollination": {
    "pos": "n.",
    "en_def": "when pollen moves from one plant to another plant",
    "cn_def": "異花授粉"
  },
  "mobilisation": {
    "pos": "n.",
    "en_def": "organising people to take action",
    "cn_def": "動員"
  },
  "bark": {
    "pos": "n.",
    "en_def": "the hard outer covering of a tree",
    "cn_def": "樹皮"
  },
  "tree nursery": {
    "pos": "n.phr.",
    "en_def": "a place where young trees are grown before planting",
    "cn_def": "苗圃"
  },
  "land reclamation": {
    "pos": "n.phr.",
    "en_def": "making new land from sea or wetland",
    "cn_def": "填海造地;土地開墾"
  },
  "demarcation": {
    "pos": "n.",
    "en_def": "a line or border that separates two areas",
    "cn_def": "劃界;分界"
  },
  "cell wall": {
    "pos": "n.phr.",
    "en_def": "the strong outer layer around a plant cell",
    "cn_def": "細胞壁"
  },
  "distinctiveness": {
    "pos": "n.",
    "en_def": "the quality of being special and different",
    "cn_def": "獨特性"
  },
  "ignition": {
    "pos": "n.",
    "en_def": "the start of burning",
    "cn_def": "點燃;起火"
  },
  "endangerment": {
    "pos": "n.",
    "en_def": "putting something in danger",
    "cn_def": "危害;瀕危狀態"
  },
  "biosecurity": {
    "pos": "n.",
    "en_def": "rules and actions that stop harmful pests and diseases entering a place",
    "cn_def": "生物安全"
  },
  "solidity": {
    "pos": "n.",
    "en_def": "the quality of being strong and firm",
    "cn_def": "堅固;穩固"
  },
  "inaccuracy": {
    "pos": "n.",
    "en_def": "a mistake; not being exact",
    "cn_def": "不準確;錯誤"
  },
  "aggravation": {
    "pos": "n.",
    "en_def": "the act of making a problem worse",
    "cn_def": "惡化;加劇"
  },
  "quarantine": {
    "pos": "n.",
    "en_def": "a period when plants or animals are kept apart to stop disease",
    "cn_def": "檢疫;隔離"
  },
  "unanimity": {
    "pos": "n.",
    "en_def": "complete agreement among everyone",
    "cn_def": "全體一致"
  },
  "botanist": {
    "pos": "n.",
    "en_def": "a scientist who studies plants",
    "cn_def": "植物學家"
  },
  "totality": {
    "pos": "n.",
    "en_def": "the whole of something",
    "cn_def": "全部;整體"
  },
  "rhizome": {
    "pos": "n.",
    "en_def": "a stem that grows sideways under the ground",
    "cn_def": "根莖;地下莖"
  },
  "blossom": {
    "pos": "n.",
    "en_def": "flowers on a fruit tree or bush",
    "cn_def": "(果樹的)花"
  },
  "boardwalk": {
    "pos": "n.",
    "en_def": "a path made of wooden boards above wet ground",
    "cn_def": "木棧道"
  },
  "calibration": {
    "pos": "n.",
    "en_def": "adjusting an instrument so it measures correctly",
    "cn_def": "校準"
  },
  "duckweed": {
    "pos": "n.",
    "en_def": "a tiny green plant that floats on still water",
    "cn_def": "浮萍"
  },
  "tendril": {
    "pos": "n.",
    "en_def": "a thin curling part a climbing plant uses to hold on",
    "cn_def": "卷鬚"
  },
  "deadwood": {
    "pos": "n.",
    "en_def": "dead trees and branches in a forest",
    "cn_def": "枯木"
  },
  "augmentation": {
    "pos": "n.",
    "en_def": "an increase in size or amount",
    "cn_def": "增加;擴充"
  },
  "homogeneity": {
    "pos": "n.",
    "en_def": "the quality of being all the same",
    "cn_def": "同質性;均一性"
  },
  "petal": {
    "pos": "n.",
    "en_def": "one of the coloured parts of a flower",
    "cn_def": "花瓣"
  },
  "articulation": {
    "pos": "n.",
    "en_def": "the clear expression of an idea",
    "cn_def": "闡述;明確表達"
  },
  "berry": {
    "pos": "n.",
    "en_def": "a small soft fruit with seeds",
    "cn_def": "漿果"
  },
  "caterpillar": {
    "pos": "n.",
    "en_def": "a young butterfly or moth that looks like a small worm",
    "cn_def": "毛毛蟲"
  },
  "descriptor": {
    "pos": "n.",
    "en_def": "a word or feature used to describe something",
    "cn_def": "描述詞;描述指標"
  },
  "biomass": {
    "pos": "n.",
    "en_def": "the total amount of living material in an area",
    "cn_def": "生物量"
  },
  "sparsity": {
    "pos": "n.",
    "en_def": "the state of being thinly spread",
    "cn_def": "稀疏;稀少"
  },
  "nectar": {
    "pos": "n.",
    "en_def": "a sweet liquid in flowers that insects drink",
    "cn_def": "花蜜"
  },
  "misinterpretation": {
    "pos": "n.",
    "en_def": "understanding something wrongly",
    "cn_def": "誤解;曲解"
  },
  "trunk": {
    "pos": "n.",
    "en_def": "the thick main stem of a tree",
    "cn_def": "樹幹"
  },
  "reconciliation": {
    "pos": "n.",
    "en_def": "finding a way for two different needs to exist together",
    "cn_def": "調和;和解"
  }
};

const EXTRA_GLOSSES = {};
