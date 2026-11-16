// Topic 18 Subunit 2 Quiz Data: Plant Growth & Reproduction 植物生長與繁殖
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S02 - Plant Growth & Reproduction 植物生長與繁殖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "seed",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "a small hard part from which a new plant grows",
    "sentence": "My little brother planted a sunflower {{BLANK}} in a paper cup, and he watered it every morning before school.",
    "cn": "我弟弟把一顆向日葵種子種在紙杯裡,而且每天上學前都會替它澆水。"
  },
  {
    "word": "seed pod",
    "pos": "n.phr.",
    "cn_def": "種莢",
    "en_def": "a long case on a plant that holds seeds",
    "sentence": "When the {{BLANK}} dries in the sun, it splits open, and the seeds fall to the ground or blow away.",
    "cn": "當種莢在陽光下曬乾後,它會裂開,種子便掉落地面或被風吹走。"
  },
  {
    "word": "spore",
    "pos": "n.",
    "cn_def": "孢子",
    "en_def": "a tiny cell that ferns and fungi use to reproduce",
    "sentence": "Ferns do not have flowers or seeds, but they produce millions of tiny {{BLANK}} under their leaves instead.",
    "cn": "蕨類沒有花也沒有種子,但它們會在葉子下方產生數百萬個微小的孢子來代替。"
  },
  {
    "word": "cross-pollination",
    "pos": "n.",
    "cn_def": "異花授粉",
    "en_def": "when pollen moves from one plant to another plant",
    "sentence": "Farmers keep bees near their apple trees because {{BLANK}} produces more fruit, and the apples are often bigger too.",
    "cn": "農夫把蜜蜂養在蘋果樹附近,因為異花授粉能結出更多果實,而且蘋果通常也比較大。"
  },
  {
    "word": "nectar",
    "pos": "n.",
    "cn_def": "花蜜",
    "en_def": "a sweet liquid in flowers that insects drink",
    "sentence": "Butterflies visit the garden every morning to drink {{BLANK}} from the flowers, and they carry pollen from plant to plant.",
    "cn": "蝴蝶每天早上來花園吸食花朵的花蜜,並把花粉從一株植物帶到另一株。"
  },
  {
    "word": "berry",
    "pos": "n.",
    "cn_def": "漿果",
    "en_def": "a small soft fruit with seeds",
    "sentence": "Birds eat the red {{BLANK}} from the bushes in winter, and later they drop the seeds far away from the parent plant.",
    "cn": "鳥兒在冬天吃灌木上的紅色漿果,之後把種子散落在遠離母株的地方。"
  },
  {
    "word": "cone",
    "pos": "n.",
    "cn_def": "毬果",
    "en_def": "the hard brown fruit of a pine tree that holds seeds",
    "sentence": "The children collected pine {{BLANK}} in the forest, and their teacher helped them paint the cones for a Christmas display.",
    "cn": "孩子們在森林裡收集松毬果,老師幫他們把毬果上色做成聖誕節的裝飾。"
  },
  {
    "word": "acorn",
    "pos": "n.",
    "cn_def": "橡實",
    "en_def": "the nut of an oak tree",
    "sentence": "Squirrels bury hundreds of {{BLANK}} every autumn, but they forget many of them, so new oak trees grow in spring.",
    "cn": "松鼠每年秋天會埋下數百顆橡實,但牠們忘了很多,所以春天時就長出新的橡樹。"
  },
  {
    "word": "seed dispersal",
    "pos": "n.phr.",
    "cn_def": "種子傳播",
    "en_def": "the ways seeds are spread away from the parent plant",
    "sentence": "Wind, water and animals all help with {{BLANK}}, so plants can grow in new places far from where they started.",
    "cn": "風、水和動物都有助於種子傳播,所以植物能在遠離原生地的新地方生長。"
  },
  {
    "word": "dormancy",
    "pos": "n.",
    "cn_def": "休眠",
    "en_def": "a period when a seed or plant rests and does not grow",
    "sentence": "Many seeds stay in a state of {{BLANK}} during the cold winter, and they only begin to grow when the soil warms up.",
    "cn": "許多種子在寒冷的冬天保持休眠狀態,只有在土壤變暖時才開始生長。"
  },
  {
    "word": "sprout",
    "pos": "v.",
    "cn_def": "發芽",
    "en_def": "to start to grow and produce new leaves",
    "sentence": "We left the beans on wet cotton for three days, and they began to {{BLANK}} faster than we had expected.",
    "cn": "我們把豆子放在濕棉花上三天,它們發芽的速度比我們預期的還要快。"
  },
  {
    "word": "bloom",
    "pos": "v.",
    "cn_def": "開花",
    "en_def": "to produce flowers",
    "sentence": "The cherry trees usually {{BLANK}} in early spring, but this year they flowered late because the winter was so cold.",
    "cn": "櫻花樹通常在早春開花,但今年因為冬天太冷,所以花開得晚。"
  },
  {
    "word": "wilt",
    "pos": "v.",
    "cn_def": "枯萎;凋萎",
    "en_def": "to become weak and bend because of no water",
    "sentence": "I forgot to water my plants during the holiday, so they began to {{BLANK}} and their leaves turned brown.",
    "cn": "假期時我忘了替植物澆水,所以它們開始枯萎,葉子也變成褐色。"
  },
  {
    "word": "prune",
    "pos": "v.",
    "cn_def": "修剪",
    "en_def": "to cut off parts of a plant to help it grow better",
    "sentence": "The gardener {{BLANK}} the rose bushes every winter, and as a result they produce more flowers in the following spring.",
    "cn": "園丁每年冬天都會修剪玫瑰叢,因此它們隔年春天會開出更多花。"
  },
  {
    "word": "graft",
    "pos": "v.",
    "cn_def": "嫁接",
    "en_def": "to join part of one plant onto another plant",
    "sentence": "Fruit farmers often {{BLANK}} a branch from a sweet apple tree onto a strong young tree, and the new tree gives better fruit.",
    "cn": "果農常把甜蘋果樹的枝條嫁接到強壯的小樹上,這樣新樹就能結出更好的果實。"
  },
  {
    "word": "cutting",
    "pos": "n.",
    "cn_def": "插枝;扦插枝",
    "en_def": "a piece cut from a plant to grow a new plant",
    "sentence": "My neighbour gave me a {{BLANK}} from her mint plant, and after a week in water it had already grown small roots.",
    "cn": "鄰居給了我一段她薄荷的插枝,在水裡放了一星期後它已經長出了小根。"
  },
  {
    "word": "cultivar",
    "pos": "n.",
    "cn_def": "栽培品種",
    "en_def": "a type of plant developed by people for special qualities",
    "sentence": "Scientists created a new {{BLANK}} of rice that grows well in salty soil, so farmers near the coast are very interested.",
    "cn": "科學家培育出一種能在鹽分高的土壤中生長良好的新水稻栽培品種,所以沿海的農民非常感興趣。"
  },
  {
    "word": "botanist",
    "pos": "n.",
    "cn_def": "植物學家",
    "en_def": "a scientist who studies plants",
    "sentence": "The {{BLANK}} spent three months in the mountains, and she discovered a small orchid that nobody had recorded before.",
    "cn": "那位植物學家在山區待了三個月,並發現了一種從未有人記錄過的小型蘭花。"
  },
  {
    "word": "botany",
    "pos": "n.",
    "cn_def": "植物學",
    "en_def": "the scientific study of plants",
    "sentence": "My cousin studied {{BLANK}} at university because she loves plants, and now she works at a research centre in Pingtung.",
    "cn": "我表姊在大學主修植物學,因為她熱愛植物,現在她在屏東的一間研究中心工作。"
  },
  {
    "word": "botanical garden",
    "pos": "n.phr.",
    "cn_def": "植物園",
    "en_def": "a park where many kinds of plants are grown for study",
    "sentence": "Our class visited the Taipei {{BLANK}} last Friday, and we saw plants from rainforests, deserts and wetlands.",
    "cn": "上週五我們班參觀了台北植物園,看到了來自雨林、沙漠和濕地的植物。"
  },
  {
    "word": "herbarium",
    "pos": "n.",
    "cn_def": "植物標本館",
    "en_def": "a collection of dried plants kept for study",
    "sentence": "The university keeps more than fifty thousand dried plants in its {{BLANK}}, and researchers use them to compare species.",
    "cn": "這所大學的植物標本館收藏了五萬多件乾燥植物,研究人員用它們來比較不同物種。"
  },
  {
    "word": "growth ring",
    "pos": "n.phr.",
    "cn_def": "年輪",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "sentence": "We counted the {{BLANK}} on the cut tree trunk, and we found that the tree was more than eighty years old.",
    "cn": "我們數了被砍下的樹幹上的年輪,發現這棵樹已經超過八十歲了。"
  },
  {
    "word": "phototropism",
    "pos": "n.",
    "cn_def": "向光性",
    "en_def": "when a plant grows towards light",
    "sentence": "The plant on my windowsill leans towards the glass because of {{BLANK}}, so I turn the pot around every few days.",
    "cn": "我窗台上的植物因為向光性而朝玻璃傾斜,所以我每隔幾天就把花盆轉個方向。"
  },
  {
    "word": "sapling",
    "pos": "n.",
    "cn_def": "小樹;幼樹",
    "en_def": "a young tree",
    "sentence": "Every student planted a {{BLANK}} on Arbor Day, and the school hopes they will become a small forest in twenty years.",
    "cn": "植樹節時每個學生都種了一棵小樹,學校希望二十年後它們能成為一片小森林。"
  },
  {
    "word": "flowering plant",
    "pos": "n.phr.",
    "cn_def": "開花植物",
    "en_def": "a plant that produces flowers and seeds",
    "sentence": "Most {{BLANK}} need insects to carry their pollen, so a drop in bee numbers is a serious problem.",
    "cn": "大多數開花植物需要昆蟲傳播花粉,所以蜜蜂數量下降是一個嚴重的問題。"
  },
  {
    "word": "self-pollinate",
    "pos": "v.",
    "cn_def": "自花授粉",
    "en_def": "to fertilise itself with its own pollen",
    "sentence": "Some plants, like peas, can {{BLANK}}, so they still produce seeds even when there are no insects around.",
    "cn": "有些植物,例如豌豆,能夠自花授粉,所以即使周圍沒有昆蟲,它們仍能結出種子。"
  },
  {
    "word": "wildflower",
    "pos": "n.",
    "cn_def": "野花",
    "en_def": "a flower that grows naturally, not planted by people",
    "sentence": "The roadside is full of yellow {{BLANK}} in spring, and many hikers stop to take photos of them.",
    "cn": "春天時路邊開滿了黃色的野花,許多登山客停下來為它們拍照。"
  }
];

const MCQS = [
  {
    "q": "My little brother planted a sunflower _____ in a paper cup, and he watered it every morning before school.",
    "options": [
      "boardwalk",
      "seed",
      "peat",
      "biosecurity"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "When the _____ dries in the sun, it splits open, and the seeds fall to the ground or blow away.",
    "options": [
      "seed pod",
      "ecological succession",
      "a late bloomer",
      "acid rain"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Ferns do not have flowers or seeds, but they produce millions of tiny _____ under their leaves instead.",
    "options": [
      "eligibility",
      "stabilisation",
      "spore",
      "oak"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Farmers keep bees near their apple trees because _____ produces more fruit, and the apples are often bigger too.",
    "options": [
      "aggravation",
      "bushfire",
      "amalgamation",
      "cross-pollination"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Butterflies visit the garden every morning to drink _____ from the flowers, and they carry pollen from plant to plant.",
    "options": [
      "imbalance",
      "gardener",
      "nectar",
      "fluidity"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Birds eat the red _____ from the bushes in winter, and later they drop the seeds far away from the parent plant.",
    "options": [
      "transmission",
      "linkage",
      "circumference",
      "berry"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The children collected pine _____ in the forest, and their teacher helped them paint the cones for a Christmas display.",
    "options": [
      "cone",
      "hardwood",
      "bushfire",
      "resin"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Squirrels bury hundreds of _____ every autumn, but they forget many of them, so new oak trees grow in spring.",
    "options": [
      "bark",
      "acorn",
      "eucalyptus",
      "linkage"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Wind, water and animals all help with _____, so plants can grow in new places far from where they started.",
    "options": [
      "reed bed",
      "nature reserve",
      "seed dispersal",
      "mycorrhizal network"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Many seeds stay in a state of _____ during the cold winter, and they only begin to grow when the soil warms up.",
    "options": [
      "aggravation",
      "dormancy",
      "redistribution",
      "resin"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "We left the beans on wet cotton for three days, and they began to _____ faster than we had expected.",
    "options": [
      "sprout",
      "cohabit",
      "overshoot",
      "pervade"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The cherry trees usually _____ in early spring, but this year they flowered late because the winter was so cold.",
    "options": [
      "lengthen",
      "affiliate",
      "transplant",
      "bloom"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "I forgot to water my plants during the holiday, so they began to _____ and their leaves turned brown.",
    "options": [
      "affiliate",
      "wilt",
      "resurface",
      "entwine"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The gardener _____ the rose bushes every winter, and as a result they produce more flowers in the following spring.",
    "options": [
      "degenerate",
      "entwine",
      "prune",
      "burgeon"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Fruit farmers often _____ a branch from a sweet apple tree onto a strong young tree, and the new tree gives better fruit.",
    "options": [
      "graft",
      "overshoot",
      "entwine",
      "burgeon"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "My neighbour gave me a _____ from her mint plant, and after a week in water it had already grown small roots.",
    "options": [
      "contributor",
      "cedar",
      "filtration",
      "cutting"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Scientists created a new _____ of rice that grows well in salty soil, so farmers near the coast are very interested.",
    "options": [
      "gradation",
      "cultivar",
      "instrumentation",
      "circumference"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The _____ spent three months in the mountains, and she discovered a small orchid that nobody had recorded before.",
    "options": [
      "thorn",
      "intensification",
      "botanist",
      "contraction"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "My cousin studied _____ at university because she loves plants, and now she works at a research centre in Pingtung.",
    "options": [
      "articulation",
      "xylem",
      "oversimplification",
      "botany"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Our class visited the Taipei _____ last Friday, and we saw plants from rainforests, deserts and wetlands.",
    "options": [
      "botanical garden",
      "the root cause",
      "carbon sequestration",
      "selective logging"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The university keeps more than fifty thousand dried plants in its _____, and researchers use them to compare species.",
    "options": [
      "otter",
      "herbarium",
      "heron",
      "distinctiveness"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "We counted the _____ on the cut tree trunk, and we found that the tree was more than eighty years old.",
    "options": [
      "temperate forest",
      "ecological succession",
      "flood control",
      "growth ring"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The plant on my windowsill leans towards the glass because of _____, so I turn the pot around every few days.",
    "options": [
      "phototropism",
      "blossom",
      "augmentation",
      "beech"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Every student planted a _____ on Arbor Day, and the school hopes they will become a small forest in twenty years.",
    "options": [
      "descriptor",
      "solidity",
      "sapling",
      "quarantine"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Most _____ need insects to carry their pollen, so a drop in bee numbers is a serious problem.",
    "options": [
      "protected area",
      "flowering plant",
      "leaf litter",
      "carbon sequestration"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Some plants, like peas, can _____, so they still produce seeds even when there are no insects around.",
    "options": [
      "self-pollinate",
      "interlink",
      "readjust",
      "entwine"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The roadside is full of yellow _____ in spring, and many hikers stop to take photos of them.",
    "options": [
      "arborist",
      "birch",
      "inundation",
      "wildflower"
    ],
    "answer": 3,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "seed": {
    "pos": "n.",
    "en_def": "a small hard part from which a new plant grows",
    "cn_def": "種子"
  },
  "seed pod": {
    "pos": "n.phr.",
    "en_def": "a long case on a plant that holds seeds",
    "cn_def": "種莢"
  },
  "spore": {
    "pos": "n.",
    "en_def": "a tiny cell that ferns and fungi use to reproduce",
    "cn_def": "孢子"
  },
  "cross-pollination": {
    "pos": "n.",
    "en_def": "when pollen moves from one plant to another plant",
    "cn_def": "異花授粉"
  },
  "nectar": {
    "pos": "n.",
    "en_def": "a sweet liquid in flowers that insects drink",
    "cn_def": "花蜜"
  },
  "berry": {
    "pos": "n.",
    "en_def": "a small soft fruit with seeds",
    "cn_def": "漿果"
  },
  "cone": {
    "pos": "n.",
    "en_def": "the hard brown fruit of a pine tree that holds seeds",
    "cn_def": "毬果"
  },
  "acorn": {
    "pos": "n.",
    "en_def": "the nut of an oak tree",
    "cn_def": "橡實"
  },
  "seed dispersal": {
    "pos": "n.phr.",
    "en_def": "the ways seeds are spread away from the parent plant",
    "cn_def": "種子傳播"
  },
  "dormancy": {
    "pos": "n.",
    "en_def": "a period when a seed or plant rests and does not grow",
    "cn_def": "休眠"
  },
  "sprout": {
    "pos": "v.",
    "en_def": "to start to grow and produce new leaves",
    "cn_def": "發芽"
  },
  "bloom": {
    "pos": "v.",
    "en_def": "to produce flowers",
    "cn_def": "開花"
  },
  "wilt": {
    "pos": "v.",
    "en_def": "to become weak and bend because of no water",
    "cn_def": "枯萎;凋萎"
  },
  "prune": {
    "pos": "v.",
    "en_def": "to cut off parts of a plant to help it grow better",
    "cn_def": "修剪"
  },
  "graft": {
    "pos": "v.",
    "en_def": "to join part of one plant onto another plant",
    "cn_def": "嫁接"
  },
  "cutting": {
    "pos": "n.",
    "en_def": "a piece cut from a plant to grow a new plant",
    "cn_def": "插枝;扦插枝"
  },
  "cultivar": {
    "pos": "n.",
    "en_def": "a type of plant developed by people for special qualities",
    "cn_def": "栽培品種"
  },
  "botanist": {
    "pos": "n.",
    "en_def": "a scientist who studies plants",
    "cn_def": "植物學家"
  },
  "botany": {
    "pos": "n.",
    "en_def": "the scientific study of plants",
    "cn_def": "植物學"
  },
  "botanical garden": {
    "pos": "n.phr.",
    "en_def": "a park where many kinds of plants are grown for study",
    "cn_def": "植物園"
  },
  "herbarium": {
    "pos": "n.",
    "en_def": "a collection of dried plants kept for study",
    "cn_def": "植物標本館"
  },
  "growth ring": {
    "pos": "n.phr.",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "cn_def": "年輪"
  },
  "phototropism": {
    "pos": "n.",
    "en_def": "when a plant grows towards light",
    "cn_def": "向光性"
  },
  "sapling": {
    "pos": "n.",
    "en_def": "a young tree",
    "cn_def": "小樹;幼樹"
  },
  "flowering plant": {
    "pos": "n.phr.",
    "en_def": "a plant that produces flowers and seeds",
    "cn_def": "開花植物"
  },
  "self-pollinate": {
    "pos": "v.",
    "en_def": "to fertilise itself with its own pollen",
    "cn_def": "自花授粉"
  },
  "wildflower": {
    "pos": "n.",
    "en_def": "a flower that grows naturally, not planted by people",
    "cn_def": "野花"
  },
  "boardwalk": {
    "pos": "n.",
    "en_def": "a path made of wooden boards above wet ground",
    "cn_def": "木棧道"
  },
  "peat": {
    "pos": "n.",
    "en_def": "dark soil made of dead plants that stores carbon",
    "cn_def": "泥炭"
  },
  "biosecurity": {
    "pos": "n.",
    "en_def": "rules and actions that stop harmful pests and diseases entering a place",
    "cn_def": "生物安全"
  },
  "ecological succession": {
    "pos": "n.phr.",
    "en_def": "the slow change in plants and animals in a place over time",
    "cn_def": "生態演替"
  },
  "a late bloomer": {
    "pos": "n.phr.",
    "en_def": "a person who becomes successful later than others",
    "cn_def": "大器晚成的人"
  },
  "acid rain": {
    "pos": "n.phr.",
    "en_def": "rain made harmful by pollution in the air",
    "cn_def": "酸雨"
  },
  "eligibility": {
    "pos": "n.",
    "en_def": "the right to do or receive something",
    "cn_def": "資格"
  },
  "stabilisation": {
    "pos": "n.",
    "en_def": "making something steady and firm",
    "cn_def": "穩定化;穩固"
  },
  "oak": {
    "pos": "n.",
    "en_def": "a large tree with hard wood that produces acorns",
    "cn_def": "橡樹"
  },
  "aggravation": {
    "pos": "n.",
    "en_def": "the act of making a problem worse",
    "cn_def": "惡化;加劇"
  },
  "bushfire": {
    "pos": "n.",
    "en_def": "a large fire in wild land, especially in Australia",
    "cn_def": "叢林大火"
  },
  "amalgamation": {
    "pos": "n.",
    "en_def": "the joining of two or more things into one",
    "cn_def": "合併;融合"
  },
  "imbalance": {
    "pos": "n.",
    "en_def": "a situation where things are not equal or in balance",
    "cn_def": "失衡;不平衡"
  },
  "gardener": {
    "pos": "n.",
    "en_def": "a person who looks after a garden",
    "cn_def": "園丁"
  },
  "fluidity": {
    "pos": "n.",
    "en_def": "the ability to change easily",
    "cn_def": "流動性;易變性"
  },
  "transmission": {
    "pos": "n.",
    "en_def": "the passing of something from one thing to another",
    "cn_def": "傳播;傳遞"
  },
  "linkage": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯;連結"
  },
  "circumference": {
    "pos": "n.",
    "en_def": "the distance around something round",
    "cn_def": "周長"
  },
  "hardwood": {
    "pos": "n.",
    "en_def": "strong heavy wood from trees like oak",
    "cn_def": "硬木"
  },
  "resin": {
    "pos": "n.",
    "en_def": "a sticky substance made by some trees",
    "cn_def": "樹脂"
  },
  "bark": {
    "pos": "n.",
    "en_def": "the hard outer covering of a tree",
    "cn_def": "樹皮"
  },
  "eucalyptus": {
    "pos": "n.",
    "en_def": "a tall Australian tree with oily, strong-smelling leaves",
    "cn_def": "尤加利樹"
  },
  "reed bed": {
    "pos": "n.phr.",
    "en_def": "an area of water full of reeds",
    "cn_def": "蘆葦床;蘆葦叢"
  },
  "nature reserve": {
    "pos": "n.phr.",
    "en_def": "an area where plants and animals are protected",
    "cn_def": "自然保護區"
  },
  "mycorrhizal network": {
    "pos": "n.phr.",
    "en_def": "underground fungi that connect the roots of trees",
    "cn_def": "菌根網絡"
  },
  "redistribution": {
    "pos": "n.",
    "en_def": "sharing something out again in a different way",
    "cn_def": "重新分配"
  },
  "cohabit": {
    "pos": "v.",
    "en_def": "to live together in the same place",
    "cn_def": "共同生活;共存"
  },
  "overshoot": {
    "pos": "v.",
    "en_def": "to go further than intended",
    "cn_def": "超過;超出"
  },
  "pervade": {
    "pos": "v.",
    "en_def": "to spread through every part of something",
    "cn_def": "瀰漫;遍及"
  },
  "lengthen": {
    "pos": "v.",
    "en_def": "to become or make longer",
    "cn_def": "延長;變長"
  },
  "affiliate": {
    "pos": "v.",
    "en_def": "to officially connect a group with a larger organisation",
    "cn_def": "使隸屬;使加入"
  },
  "transplant": {
    "pos": "v.",
    "en_def": "to move a plant and plant it somewhere else",
    "cn_def": "移植"
  },
  "resurface": {
    "pos": "v.",
    "en_def": "to appear again after being hidden",
    "cn_def": "重新出現"
  },
  "entwine": {
    "pos": "v.",
    "en_def": "to twist two or more things together",
    "cn_def": "纏繞"
  },
  "degenerate": {
    "pos": "v.",
    "en_def": "to become worse in quality or condition",
    "cn_def": "退化;衰退"
  },
  "burgeon": {
    "pos": "v.",
    "en_def": "to grow or develop quickly",
    "cn_def": "迅速成長;蓬勃發展"
  },
  "contributor": {
    "pos": "n.",
    "en_def": "someone or something that helps cause something",
    "cn_def": "促成因素;貢獻者"
  },
  "cedar": {
    "pos": "n.",
    "en_def": "a large evergreen tree with sweet-smelling wood",
    "cn_def": "雪松;檜木"
  },
  "filtration": {
    "pos": "n.",
    "en_def": "the process of cleaning a liquid by passing it through something",
    "cn_def": "過濾"
  },
  "gradation": {
    "pos": "n.",
    "en_def": "a slow change from one thing to another in stages",
    "cn_def": "漸變;層次"
  },
  "instrumentation": {
    "pos": "n.",
    "en_def": "the instruments used to measure something",
    "cn_def": "儀器設備"
  },
  "thorn": {
    "pos": "n.",
    "en_def": "a sharp point on the stem of a plant",
    "cn_def": "刺"
  },
  "intensification": {
    "pos": "n.",
    "en_def": "becoming stronger or more extreme",
    "cn_def": "加劇;強化"
  },
  "contraction": {
    "pos": "n.",
    "en_def": "the process of becoming smaller",
    "cn_def": "縮小;收縮"
  },
  "articulation": {
    "pos": "n.",
    "en_def": "the clear expression of an idea",
    "cn_def": "闡述;明確表達"
  },
  "xylem": {
    "pos": "n.",
    "en_def": "tubes in a plant that carry water up from the roots",
    "cn_def": "木質部"
  },
  "oversimplification": {
    "pos": "n.",
    "en_def": "making something seem simpler than it really is",
    "cn_def": "過度簡化"
  },
  "the root cause": {
    "pos": "n.phr.",
    "en_def": "the main reason behind a problem",
    "cn_def": "根本原因"
  },
  "carbon sequestration": {
    "pos": "n.phr.",
    "en_def": "storing carbon from the air in plants, soil or rocks",
    "cn_def": "碳封存;固碳"
  },
  "selective logging": {
    "pos": "n.phr.",
    "en_def": "cutting down only some chosen trees in a forest",
    "cn_def": "擇伐"
  },
  "otter": {
    "pos": "n.",
    "en_def": "a small animal with brown fur that swims and eats fish",
    "cn_def": "水獺"
  },
  "heron": {
    "pos": "n.",
    "en_def": "a tall grey bird with long legs that catches fish",
    "cn_def": "鷺;蒼鷺"
  },
  "distinctiveness": {
    "pos": "n.",
    "en_def": "the quality of being special and different",
    "cn_def": "獨特性"
  },
  "temperate forest": {
    "pos": "n.phr.",
    "en_def": "a forest in a region with warm summers and cool winters",
    "cn_def": "溫帶森林"
  },
  "flood control": {
    "pos": "n.phr.",
    "en_def": "ways of preventing or reducing floods",
    "cn_def": "防洪"
  },
  "blossom": {
    "pos": "n.",
    "en_def": "flowers on a fruit tree or bush",
    "cn_def": "(果樹的)花"
  },
  "augmentation": {
    "pos": "n.",
    "en_def": "an increase in size or amount",
    "cn_def": "增加;擴充"
  },
  "beech": {
    "pos": "n.",
    "en_def": "a large tree with smooth grey bark",
    "cn_def": "山毛櫸"
  },
  "descriptor": {
    "pos": "n.",
    "en_def": "a word or feature used to describe something",
    "cn_def": "描述詞;描述指標"
  },
  "solidity": {
    "pos": "n.",
    "en_def": "the quality of being strong and firm",
    "cn_def": "堅固;穩固"
  },
  "quarantine": {
    "pos": "n.",
    "en_def": "a period when plants or animals are kept apart to stop disease",
    "cn_def": "檢疫;隔離"
  },
  "protected area": {
    "pos": "n.phr.",
    "en_def": "a place where nature is protected by law",
    "cn_def": "保護區"
  },
  "leaf litter": {
    "pos": "n.phr.",
    "en_def": "dead leaves lying on the ground",
    "cn_def": "落葉層"
  },
  "interlink": {
    "pos": "v.",
    "en_def": "to connect things with each other",
    "cn_def": "互相連結"
  },
  "readjust": {
    "pos": "v.",
    "en_def": "to change something slightly again to suit new conditions",
    "cn_def": "重新調整"
  },
  "arborist": {
    "pos": "n.",
    "en_def": "an expert who cares for trees",
    "cn_def": "樹藝師"
  },
  "birch": {
    "pos": "n.",
    "en_def": "a tree with thin white bark",
    "cn_def": "樺樹"
  },
  "inundation": {
    "pos": "n.",
    "en_def": "a flood of water over land",
    "cn_def": "淹沒;洪水氾濫"
  }
};

const EXTRA_GLOSSES = {};
