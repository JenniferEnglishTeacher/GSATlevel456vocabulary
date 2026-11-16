// Topic 18 Subunit 1 Quiz Data: Plant Structure & Biology 植物構造與生物學
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S01 - Plant Structure & Biology 植物構造與生物學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "photosynthesis",
    "pos": "n.",
    "cn_def": "光合作用",
    "en_def": "how plants use sunlight to make food from air and water",
    "sentence": "Green leaves need plenty of sunlight for {{BLANK}}, so the plants on our dark balcony grow slowly and look pale.",
    "cn": "綠葉需要充足的陽光來進行光合作用,所以我們陰暗陽台上的植物長得很慢,看起來也很蒼白。"
  },
  {
    "word": "chlorophyll",
    "pos": "n.",
    "cn_def": "葉綠素",
    "en_def": "the green substance in plants that absorbs sunlight",
    "sentence": "In autumn the trees stop making {{BLANK}}, so the green colour fades and the red and yellow colours finally appear.",
    "cn": "秋天時樹木停止製造葉綠素,所以綠色逐漸褪去,紅色和黃色終於顯現出來。"
  },
  {
    "word": "chloroplast",
    "pos": "n.",
    "cn_def": "葉綠體",
    "en_def": "a tiny part of a plant cell where photosynthesis happens",
    "sentence": "Our biology teacher showed us a leaf under the microscope, and we could see hundreds of green {{BLANK}} inside each cell.",
    "cn": "生物老師讓我們在顯微鏡下看一片葉子,我們可以看到每個細胞裡有數百個綠色的葉綠體。"
  },
  {
    "word": "root",
    "pos": "n.",
    "cn_def": "根",
    "en_def": "the part of a plant that grows under the ground",
    "sentence": "The old tree survived the typhoon because its {{BLANK}} went deep into the ground, but the young trees nearby fell over.",
    "cn": "那棵老樹撐過了颱風,因為它的根深深扎入地下,但附近的小樹都倒了。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "葉子",
    "en_def": "a flat green part that grows from a stem or branch",
    "sentence": "My grandmother collects fallen {{BLANK}} in the park every autumn, and she presses them inside heavy books to make bookmarks.",
    "cn": "我奶奶每年秋天都會在公園收集落下的葉子,並把它們壓在厚重的書裡做成書籤。",
    "answer": "leaves",
    "alts": [
      "leaf"
    ]
  },
  {
    "word": "petal",
    "pos": "n.",
    "cn_def": "花瓣",
    "en_def": "one of the coloured parts of a flower",
    "sentence": "The wind blew the cherry blossoms off the trees, so the path was covered with soft pink {{BLANK}} for the whole week.",
    "cn": "風把櫻花從樹上吹落,所以整個星期小路上都鋪滿了柔軟的粉紅色花瓣。"
  },
  {
    "word": "stamen",
    "pos": "n.",
    "cn_def": "雄蕊",
    "en_def": "the male part of a flower that produces pollen",
    "sentence": "If you look closely at a lily, you can see the long {{BLANK}} in the centre, and their yellow pollen can stain your clothes.",
    "cn": "如果你仔細看百合花,會看到中間長長的雄蕊,而它們的黃色花粉會弄髒你的衣服。"
  },
  {
    "word": "pistil",
    "pos": "n.",
    "cn_def": "雌蕊",
    "en_def": "the female part of a flower that receives pollen",
    "sentence": "The bee landed on the flower and touched the {{BLANK}}, so the pollen on its legs helped the plant produce seeds.",
    "cn": "蜜蜂停在花上並碰觸了雌蕊,所以牠腳上的花粉幫助植物結出種子。"
  },
  {
    "word": "bud",
    "pos": "n.",
    "cn_def": "芽;花苞",
    "en_def": "a small part on a plant that will open into a leaf or flower",
    "sentence": "The rose bush is covered with tiny {{BLANK}} this week, and my mother expects the first flowers to open by Sunday.",
    "cn": "這週玫瑰叢上長滿了小小的花苞,我媽媽預計第一批花會在星期天前開放。"
  },
  {
    "word": "thorn",
    "pos": "n.",
    "cn_def": "刺",
    "en_def": "a sharp point on the stem of a plant",
    "sentence": "I was picking roses for the table, but a sharp {{BLANK}} cut my finger, so I had to put on a plaster.",
    "cn": "我在摘玫瑰放在桌上,但一根尖銳的刺割傷了我的手指,所以我得貼上OK繃。"
  },
  {
    "word": "bark",
    "pos": "n.",
    "cn_def": "樹皮",
    "en_def": "the hard outer covering of a tree",
    "sentence": "Deer often eat the {{BLANK}} of young trees in winter, so the park rangers wrap the trunks in plastic to protect them.",
    "cn": "鹿在冬天常常吃小樹的樹皮,所以公園管理員會用塑膠把樹幹包起來保護它們。"
  },
  {
    "word": "trunk",
    "pos": "n.",
    "cn_def": "樹幹",
    "en_def": "the thick main stem of a tree",
    "sentence": "The {{BLANK}} of the old camphor tree is so wide that five students had to hold hands to reach around it.",
    "cn": "那棵老樟樹的樹幹非常粗,五個學生必須手牽手才能把它圍起來。"
  },
  {
    "word": "branch",
    "pos": "n.",
    "cn_def": "樹枝",
    "en_def": "a part of a tree that grows out from the trunk",
    "sentence": "A heavy {{BLANK}} fell onto the road during the storm, and traffic stopped until workers cut it into pieces.",
    "cn": "暴風雨期間一根沉重的樹枝掉到路上,交通因此停頓,直到工人把它鋸成幾段。"
  },
  {
    "word": "twig",
    "pos": "n.",
    "cn_def": "細枝",
    "en_def": "a very small thin branch",
    "sentence": "The birds collected dry {{BLANK}} and grass from the garden, and within three days they had built a neat nest.",
    "cn": "鳥兒從花園收集乾的細枝和草,三天內就築好了一個整齊的巢。"
  },
  {
    "word": "sap",
    "pos": "n.",
    "cn_def": "樹液",
    "en_def": "the liquid that carries food inside a plant",
    "sentence": "When you cut the stem of this plant, a sticky white {{BLANK}} comes out, so you should wear gloves when you prune it.",
    "cn": "當你切開這種植物的莖時,會流出一種黏稠的白色樹液,所以修剪時你應該戴手套。"
  },
  {
    "word": "xylem",
    "pos": "n.",
    "cn_def": "木質部",
    "en_def": "tubes in a plant that carry water up from the roots",
    "sentence": "Water travels up through the {{BLANK}} from the roots to the leaves, and this is why a cut flower can drink from a vase.",
    "cn": "水分經由木質部從根部往上輸送到葉子,這就是剪下的花能從花瓶吸水的原因。"
  },
  {
    "word": "phloem",
    "pos": "n.",
    "cn_def": "韌皮部",
    "en_def": "tubes in a plant that carry sugar from the leaves",
    "sentence": "The {{BLANK}} carries sugar from the leaves to other parts of the plant, but it can be damaged if animals strip off the bark.",
    "cn": "韌皮部把糖分從葉子運送到植物的其他部位,但如果動物剝掉樹皮,它就可能受損。"
  },
  {
    "word": "stomata",
    "pos": "n.",
    "cn_def": "氣孔",
    "en_def": "tiny holes on a leaf that let gases in and out",
    "sentence": "On hot afternoons many plants close their {{BLANK}} to save water, so they take in less carbon dioxide and grow more slowly.",
    "cn": "在炎熱的午後,許多植物會關閉氣孔以保存水分,所以吸收的二氧化碳變少,生長也變慢。"
  },
  {
    "word": "root hair",
    "pos": "n.phr.",
    "cn_def": "根毛",
    "en_def": "very thin hairs on a root that take in water",
    "sentence": "Tiny {{BLANK}} cover the end of each root, and they help the plant absorb water and minerals from the soil.",
    "cn": "微小的根毛覆蓋在每條根的末端,它們幫助植物從土壤中吸收水分和礦物質。"
  },
  {
    "word": "taproot",
    "pos": "n.",
    "cn_def": "主根",
    "en_def": "one large main root that grows straight down",
    "sentence": "A carrot is actually a thick orange {{BLANK}}, so when we eat it we are eating the part that grew under the ground.",
    "cn": "紅蘿蔔其實是一條粗大的橘色主根,所以我們吃它時,吃的是長在地下的部分。"
  },
  {
    "word": "bulb",
    "pos": "n.",
    "cn_def": "球莖",
    "en_def": "a round underground part from which some plants grow",
    "sentence": "We planted tulip {{BLANK}} in the school garden in November, and they turned into colourful flowers in early spring.",
    "cn": "我們在十一月把鬱金香球莖種在學校花園裡,它們在早春長成了色彩繽紛的花朵。"
  },
  {
    "word": "tuber",
    "pos": "n.",
    "cn_def": "塊莖",
    "en_def": "a thick underground stem that stores food, like a potato",
    "sentence": "A potato is a {{BLANK}} that stores food under the ground, so farmers must dig carefully when they harvest the crop.",
    "cn": "馬鈴薯是一種在地下儲存養分的塊莖,所以農夫收成時必須小心挖掘。"
  },
  {
    "word": "rhizome",
    "pos": "n.",
    "cn_def": "根莖;地下莖",
    "en_def": "a stem that grows sideways under the ground",
    "sentence": "Ginger grows from a {{BLANK}} that spreads under the soil, and cooks use this part to add a warm taste to soup.",
    "cn": "薑是從一段在土壤下蔓延的根莖長出來的,廚師會用這個部分為湯增添溫暖的味道。"
  },
  {
    "word": "tendril",
    "pos": "n.",
    "cn_def": "卷鬚",
    "en_def": "a thin curling part a climbing plant uses to hold on",
    "sentence": "The cucumber plant wrapped its {{BLANK}} around the fence, so it could climb higher and reach more sunlight.",
    "cn": "小黃瓜植株把它的卷鬚纏繞在圍籬上,所以它能爬得更高,照到更多陽光。"
  },
  {
    "word": "foliage",
    "pos": "n.",
    "cn_def": "枝葉;葉子(總稱)",
    "en_def": "all the leaves of a plant or tree",
    "sentence": "The thick {{BLANK}} of the forest blocked most of the sunlight, so it felt cool and dark even at noon.",
    "cn": "森林茂密的枝葉擋住了大部分陽光,所以即使在中午也感覺涼爽而陰暗。"
  },
  {
    "word": "blossom",
    "pos": "n.",
    "cn_def": "(果樹的)花",
    "en_def": "flowers on a fruit tree or bush",
    "sentence": "Thousands of tourists visit Yangmingshan in spring because the cherry {{BLANK}} turns the hills pink and white.",
    "cn": "每年春天數千名遊客造訪陽明山,因為櫻花把山丘染成粉紅色和白色。"
  },
  {
    "word": "cell wall",
    "pos": "n.phr.",
    "cn_def": "細胞壁",
    "en_def": "the strong outer layer around a plant cell",
    "sentence": "Plant cells have a strong {{BLANK}} around them, but animal cells do not, so plants can stand upright without bones.",
    "cn": "植物細胞外圍有一層堅固的細胞壁,但動物細胞沒有,所以植物不需要骨頭也能直立。"
  },
  {
    "word": "transpiration",
    "pos": "n.",
    "cn_def": "蒸散作用",
    "en_def": "the loss of water from a plant's leaves into the air",
    "sentence": "On a hot, windy day {{BLANK}} happens much faster, so the farmer has to water the young plants twice.",
    "cn": "在炎熱又多風的日子裡,蒸散作用發生得快得多,所以農夫必須替幼苗澆兩次水。"
  },
  {
    "word": "stalk",
    "pos": "n.",
    "cn_def": "莖;梗",
    "en_def": "the main stem of a plant, or a thin stem holding a leaf or flower",
    "sentence": "The sunflower grew so tall that its {{BLANK}} bent under the heavy flower, so we tied it to a bamboo stick.",
    "cn": "向日葵長得太高了,它的莖被沉重的花壓彎,所以我們把它綁在竹竿上。"
  },
  {
    "word": "shoot",
    "pos": "n.",
    "cn_def": "嫩芽;新枝",
    "en_def": "a new part that grows from a plant",
    "sentence": "After the spring rain, green {{BLANK}} appeared all over the burnt hillside, and the villagers were glad to see new life.",
    "cn": "春雨過後,燒焦的山坡上到處冒出綠色的嫩芽,村民們很高興看到新生命。"
  },
  {
    "word": "evergreen",
    "pos": "adj.",
    "cn_def": "常綠的",
    "en_def": "keeping green leaves all year",
    "sentence": "Pine trees are {{BLANK}}, so they stay green in winter while the other trees in the park lose all their leaves.",
    "cn": "松樹是常綠的,所以冬天時它們依然翠綠,而公園裡其他的樹則掉光了葉子。"
  },
  {
    "word": "deciduous",
    "pos": "adj.",
    "cn_def": "落葉的",
    "en_def": "losing all its leaves every autumn",
    "sentence": "Maple trees are {{BLANK}}, so they drop their leaves every autumn, but they grow new ones again in spring.",
    "cn": "楓樹是落葉樹,所以每年秋天都會掉葉子,但到了春天又會長出新葉。"
  }
];

const MCQS = [
  {
    "q": "Green leaves need plenty of sunlight for _____, so the plants on our dark balcony grow slowly and look pale.",
    "options": [
      "instrumentation",
      "ember",
      "photosynthesis",
      "solidity"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "In autumn the trees stop making _____, so the green colour fades and the red and yellow colours finally appear.",
    "options": [
      "redistribution",
      "chlorophyll",
      "fungus",
      "willow"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our biology teacher showed us a leaf under the microscope, and we could see hundreds of green _____ inside each cell.",
    "options": [
      "chloroplast",
      "willow",
      "illumination",
      "overexploitation"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The old tree survived the typhoon because its _____ went deep into the ground, but the young trees nearby fell over.",
    "options": [
      "moss",
      "demarcation",
      "catchment",
      "root"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "My grandmother collects fallen _____ in the park every autumn, and she presses them inside heavy books to make bookmarks.",
    "options": [
      "contraction",
      "leaves",
      "fluidity",
      "chronology"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The wind blew the cherry blossoms off the trees, so the path was covered with soft pink _____ for the whole week.",
    "options": [
      "orchid",
      "unanimity",
      "elaboration",
      "petal"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "If you look closely at a lily, you can see the long _____ in the centre, and their yellow pollen can stain your clothes.",
    "options": [
      "agroforestry",
      "spruce",
      "stamen",
      "duckweed"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The bee landed on the flower and touched the _____, so the pollen on its legs helped the plant produce seeds.",
    "options": [
      "pistil",
      "alleviation",
      "woodpecker",
      "reed"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The rose bush is covered with tiny _____ this week, and my mother expects the first flowers to open by Sunday.",
    "options": [
      "otter",
      "bud",
      "bushfire",
      "sedimentation"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "I was picking roses for the table, but a sharp _____ cut my finger, so I had to put on a plaster.",
    "options": [
      "distinctiveness",
      "assemblage",
      "discontinuity",
      "thorn"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Deer often eat the _____ of young trees in winter, so the park rangers wrap the trunks in plastic to protect them.",
    "options": [
      "colonisation",
      "taiga",
      "bark",
      "grove"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of the old camphor tree is so wide that five students had to hold hands to reach around it.",
    "options": [
      "trunk",
      "augmentation",
      "misinterpretation",
      "beech"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "A heavy _____ fell onto the road during the storm, and traffic stopped until workers cut it into pieces.",
    "options": [
      "illumination",
      "moss",
      "forester",
      "branch"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The birds collected dry _____ and grass from the garden, and within three days they had built a neat nest.",
    "options": [
      "heron",
      "silt",
      "twig",
      "redwood"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "When you cut the stem of this plant, a sticky white _____ comes out, so you should wear gloves when you prune it.",
    "options": [
      "subdivision",
      "sap",
      "redwood",
      "articulation"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Water travels up through the _____ from the roots to the leaves, and this is why a cut flower can drink from a vase.",
    "options": [
      "xylem",
      "elm",
      "sensitivity",
      "acorn"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The _____ carries sugar from the leaves to other parts of the plant, but it can be damaged if animals strip off the bark.",
    "options": [
      "forester",
      "transmission",
      "lichen",
      "phloem"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "On hot afternoons many plants close their _____ to save water, so they take in less carbon dioxide and grow more slowly.",
    "options": [
      "stabilisation",
      "inundation",
      "stomata",
      "mudflat"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Tiny _____ cover the end of each root, and they help the plant absorb water and minerals from the soil.",
    "options": [
      "root hair",
      "mycorrhizal network",
      "alien species",
      "wood pulp"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "A carrot is actually a thick orange _____, so when we eat it we are eating the part that grew under the ground.",
    "options": [
      "sedimentation",
      "taproot",
      "suitability",
      "endangerment"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We planted tulip _____ in the school garden in November, and they turned into colourful flowers in early spring.",
    "options": [
      "swamp",
      "sawmill",
      "bulb",
      "pine"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "A potato is a _____ that stores food under the ground, so farmers must dig carefully when they harvest the crop.",
    "options": [
      "firewood",
      "tuber",
      "catchment",
      "duckweed"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Ginger grows from a _____ that spreads under the soil, and cooks use this part to add a warm taste to soup.",
    "options": [
      "cork",
      "botany",
      "inundation",
      "rhizome"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The cucumber plant wrapped its _____ around the fence, so it could climb higher and reach more sunlight.",
    "options": [
      "tendril",
      "deer",
      "linkage",
      "microclimate"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The thick _____ of the forest blocked most of the sunlight, so it felt cool and dark even at noon.",
    "options": [
      "deadwood",
      "foliage",
      "forester",
      "standardisation"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Thousands of tourists visit Yangmingshan in spring because the cherry _____ turns the hills pink and white.",
    "options": [
      "microclimate",
      "riverbank",
      "blossom",
      "jungle"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Plant cells have a strong _____ around them, but animal cells do not, so plants can stand upright without bones.",
    "options": [
      "cell wall",
      "temperate forest",
      "a thorn in one's side",
      "acid rain"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "On a hot, windy day _____ happens much faster, so the farmer has to water the young plants twice.",
    "options": [
      "creek",
      "biomass",
      "inundation",
      "transpiration"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The sunflower grew so tall that its _____ bent under the heavy flower, so we tied it to a bamboo stick.",
    "options": [
      "inaccuracy",
      "stalk",
      "locust",
      "mildew"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "After the spring rain, green _____ appeared all over the burnt hillside, and the villagers were glad to see new life.",
    "options": [
      "shoot",
      "redwood",
      "specificity",
      "owl"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Pine trees are _____, so they stay green in winter while the other trees in the park lose all their leaves.",
    "options": [
      "defensible",
      "coniferous",
      "evergreen",
      "warranted"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Maple trees are _____, so they drop their leaves every autumn, but they grow new ones again in spring.",
    "options": [
      "falsifiable",
      "retrospective",
      "corrective",
      "deciduous"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "photosynthesis": {
    "pos": "n.",
    "en_def": "how plants use sunlight to make food from air and water",
    "cn_def": "光合作用"
  },
  "chlorophyll": {
    "pos": "n.",
    "en_def": "the green substance in plants that absorbs sunlight",
    "cn_def": "葉綠素"
  },
  "chloroplast": {
    "pos": "n.",
    "en_def": "a tiny part of a plant cell where photosynthesis happens",
    "cn_def": "葉綠體"
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground",
    "cn_def": "根"
  },
  "leaves": {
    "pos": "n.",
    "en_def": "a flat green part that grows from a stem or branch",
    "cn_def": "葉子"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "a flat green part that grows from a stem or branch",
    "cn_def": "葉子"
  },
  "petal": {
    "pos": "n.",
    "en_def": "one of the coloured parts of a flower",
    "cn_def": "花瓣"
  },
  "stamen": {
    "pos": "n.",
    "en_def": "the male part of a flower that produces pollen",
    "cn_def": "雄蕊"
  },
  "pistil": {
    "pos": "n.",
    "en_def": "the female part of a flower that receives pollen",
    "cn_def": "雌蕊"
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small part on a plant that will open into a leaf or flower",
    "cn_def": "芽;花苞"
  },
  "thorn": {
    "pos": "n.",
    "en_def": "a sharp point on the stem of a plant",
    "cn_def": "刺"
  },
  "bark": {
    "pos": "n.",
    "en_def": "the hard outer covering of a tree",
    "cn_def": "樹皮"
  },
  "trunk": {
    "pos": "n.",
    "en_def": "the thick main stem of a tree",
    "cn_def": "樹幹"
  },
  "branch": {
    "pos": "n.",
    "en_def": "a part of a tree that grows out from the trunk",
    "cn_def": "樹枝"
  },
  "twig": {
    "pos": "n.",
    "en_def": "a very small thin branch",
    "cn_def": "細枝"
  },
  "sap": {
    "pos": "n.",
    "en_def": "the liquid that carries food inside a plant",
    "cn_def": "樹液"
  },
  "xylem": {
    "pos": "n.",
    "en_def": "tubes in a plant that carry water up from the roots",
    "cn_def": "木質部"
  },
  "phloem": {
    "pos": "n.",
    "en_def": "tubes in a plant that carry sugar from the leaves",
    "cn_def": "韌皮部"
  },
  "stomata": {
    "pos": "n.",
    "en_def": "tiny holes on a leaf that let gases in and out",
    "cn_def": "氣孔"
  },
  "root hair": {
    "pos": "n.phr.",
    "en_def": "very thin hairs on a root that take in water",
    "cn_def": "根毛"
  },
  "taproot": {
    "pos": "n.",
    "en_def": "one large main root that grows straight down",
    "cn_def": "主根"
  },
  "bulb": {
    "pos": "n.",
    "en_def": "a round underground part from which some plants grow",
    "cn_def": "球莖"
  },
  "tuber": {
    "pos": "n.",
    "en_def": "a thick underground stem that stores food, like a potato",
    "cn_def": "塊莖"
  },
  "rhizome": {
    "pos": "n.",
    "en_def": "a stem that grows sideways under the ground",
    "cn_def": "根莖;地下莖"
  },
  "tendril": {
    "pos": "n.",
    "en_def": "a thin curling part a climbing plant uses to hold on",
    "cn_def": "卷鬚"
  },
  "foliage": {
    "pos": "n.",
    "en_def": "all the leaves of a plant or tree",
    "cn_def": "枝葉;葉子(總稱)"
  },
  "blossom": {
    "pos": "n.",
    "en_def": "flowers on a fruit tree or bush",
    "cn_def": "(果樹的)花"
  },
  "cell wall": {
    "pos": "n.phr.",
    "en_def": "the strong outer layer around a plant cell",
    "cn_def": "細胞壁"
  },
  "transpiration": {
    "pos": "n.",
    "en_def": "the loss of water from a plant's leaves into the air",
    "cn_def": "蒸散作用"
  },
  "stalk": {
    "pos": "n.",
    "en_def": "the main stem of a plant, or a thin stem holding a leaf or flower",
    "cn_def": "莖;梗"
  },
  "shoot": {
    "pos": "n.",
    "en_def": "a new part that grows from a plant",
    "cn_def": "嫩芽;新枝"
  },
  "evergreen": {
    "pos": "adj.",
    "en_def": "keeping green leaves all year",
    "cn_def": "常綠的"
  },
  "deciduous": {
    "pos": "adj.",
    "en_def": "losing all its leaves every autumn",
    "cn_def": "落葉的"
  },
  "instrumentation": {
    "pos": "n.",
    "en_def": "the instruments used to measure something",
    "cn_def": "儀器設備"
  },
  "ember": {
    "pos": "n.",
    "en_def": "a small piece of burning wood from a fire",
    "cn_def": "餘燼;火星"
  },
  "solidity": {
    "pos": "n.",
    "en_def": "the quality of being strong and firm",
    "cn_def": "堅固;穩固"
  },
  "redistribution": {
    "pos": "n.",
    "en_def": "sharing something out again in a different way",
    "cn_def": "重新分配"
  },
  "fungus": {
    "pos": "n.",
    "en_def": "a living thing such as a mushroom or mould",
    "cn_def": "真菌"
  },
  "willow": {
    "pos": "n.",
    "en_def": "a tree with long thin branches that often grows near water",
    "cn_def": "柳樹"
  },
  "illumination": {
    "pos": "n.",
    "en_def": "light, or the act of giving light",
    "cn_def": "照明;光照"
  },
  "overexploitation": {
    "pos": "n.",
    "en_def": "using a resource too much so that it runs out",
    "cn_def": "過度開發;過度利用"
  },
  "moss": {
    "pos": "n.",
    "en_def": "a very small soft green plant that grows on wet surfaces",
    "cn_def": "苔蘚"
  },
  "demarcation": {
    "pos": "n.",
    "en_def": "a line or border that separates two areas",
    "cn_def": "劃界;分界"
  },
  "catchment": {
    "pos": "n.",
    "en_def": "the area from which rain flows into a river or lake",
    "cn_def": "集水區"
  },
  "contraction": {
    "pos": "n.",
    "en_def": "the process of becoming smaller",
    "cn_def": "縮小;收縮"
  },
  "fluidity": {
    "pos": "n.",
    "en_def": "the ability to change easily",
    "cn_def": "流動性;易變性"
  },
  "chronology": {
    "pos": "n.",
    "en_def": "the order in which events happened",
    "cn_def": "年表;時間順序"
  },
  "orchid": {
    "pos": "n.",
    "en_def": "a plant with beautiful and unusual flowers",
    "cn_def": "蘭花"
  },
  "unanimity": {
    "pos": "n.",
    "en_def": "complete agreement among everyone",
    "cn_def": "全體一致"
  },
  "elaboration": {
    "pos": "n.",
    "en_def": "adding more detail to explain something",
    "cn_def": "詳細說明;闡述"
  },
  "agroforestry": {
    "pos": "n.",
    "en_def": "growing trees and crops together on the same farm",
    "cn_def": "農林混作"
  },
  "spruce": {
    "pos": "n.",
    "en_def": "an evergreen tree with short needles, often used as a Christmas tree",
    "cn_def": "雲杉"
  },
  "duckweed": {
    "pos": "n.",
    "en_def": "a tiny green plant that floats on still water",
    "cn_def": "浮萍"
  },
  "alleviation": {
    "pos": "n.",
    "en_def": "making a problem or pain less severe",
    "cn_def": "緩解;減輕"
  },
  "woodpecker": {
    "pos": "n.",
    "en_def": "a bird that makes holes in trees with its beak",
    "cn_def": "啄木鳥"
  },
  "reed": {
    "pos": "n.",
    "en_def": "a tall grass that grows in or near water",
    "cn_def": "蘆葦"
  },
  "otter": {
    "pos": "n.",
    "en_def": "a small animal with brown fur that swims and eats fish",
    "cn_def": "水獺"
  },
  "bushfire": {
    "pos": "n.",
    "en_def": "a large fire in wild land, especially in Australia",
    "cn_def": "叢林大火"
  },
  "sedimentation": {
    "pos": "n.",
    "en_def": "the process of sand and mud settling at the bottom of water",
    "cn_def": "沉積作用"
  },
  "distinctiveness": {
    "pos": "n.",
    "en_def": "the quality of being special and different",
    "cn_def": "獨特性"
  },
  "assemblage": {
    "pos": "n.",
    "en_def": "a group of things or living things found together",
    "cn_def": "集合;群集"
  },
  "discontinuity": {
    "pos": "n.",
    "en_def": "a break or gap in something that should be continuous",
    "cn_def": "中斷;不連續"
  },
  "colonisation": {
    "pos": "n.",
    "en_def": "when plants or animals move into and spread in a new area",
    "cn_def": "拓殖;移殖"
  },
  "taiga": {
    "pos": "n.",
    "en_def": "another name for the cold northern forest",
    "cn_def": "針葉林帶;泰加林"
  },
  "grove": {
    "pos": "n.",
    "en_def": "a small group of trees",
    "cn_def": "小樹林"
  },
  "augmentation": {
    "pos": "n.",
    "en_def": "an increase in size or amount",
    "cn_def": "增加;擴充"
  },
  "misinterpretation": {
    "pos": "n.",
    "en_def": "understanding something wrongly",
    "cn_def": "誤解;曲解"
  },
  "beech": {
    "pos": "n.",
    "en_def": "a large tree with smooth grey bark",
    "cn_def": "山毛櫸"
  },
  "forester": {
    "pos": "n.",
    "en_def": "a person whose job is to look after a forest",
    "cn_def": "林務員"
  },
  "heron": {
    "pos": "n.",
    "en_def": "a tall grey bird with long legs that catches fish",
    "cn_def": "鷺;蒼鷺"
  },
  "silt": {
    "pos": "n.",
    "en_def": "fine sand and mud carried by a river",
    "cn_def": "淤泥"
  },
  "redwood": {
    "pos": "n.",
    "en_def": "a very tall tree that grows in California",
    "cn_def": "紅杉"
  },
  "subdivision": {
    "pos": "n.",
    "en_def": "dividing something into smaller parts",
    "cn_def": "再劃分;細分"
  },
  "articulation": {
    "pos": "n.",
    "en_def": "the clear expression of an idea",
    "cn_def": "闡述;明確表達"
  },
  "elm": {
    "pos": "n.",
    "en_def": "a tall tree once common in Europe",
    "cn_def": "榆樹"
  },
  "sensitivity": {
    "pos": "n.",
    "en_def": "how easily something is affected by changes",
    "cn_def": "敏感度;敏感性"
  },
  "acorn": {
    "pos": "n.",
    "en_def": "the nut of an oak tree",
    "cn_def": "橡實"
  },
  "transmission": {
    "pos": "n.",
    "en_def": "the passing of something from one thing to another",
    "cn_def": "傳播;傳遞"
  },
  "lichen": {
    "pos": "n.",
    "en_def": "a plant-like growth on rocks and trees, made of fungus and algae",
    "cn_def": "地衣"
  },
  "stabilisation": {
    "pos": "n.",
    "en_def": "making something steady and firm",
    "cn_def": "穩定化;穩固"
  },
  "inundation": {
    "pos": "n.",
    "en_def": "a flood of water over land",
    "cn_def": "淹沒;洪水氾濫"
  },
  "mudflat": {
    "pos": "n.",
    "en_def": "flat muddy land covered by the sea at high tide",
    "cn_def": "泥灘;潮間灘地"
  },
  "mycorrhizal network": {
    "pos": "n.phr.",
    "en_def": "underground fungi that connect the roots of trees",
    "cn_def": "菌根網絡"
  },
  "alien species": {
    "pos": "n.phr.",
    "en_def": "a plant or animal brought from another place",
    "cn_def": "外來種"
  },
  "wood pulp": {
    "pos": "n.phr.",
    "en_def": "soft wet wood fibres used to make paper",
    "cn_def": "木漿"
  },
  "suitability": {
    "pos": "n.",
    "en_def": "how right or appropriate something is",
    "cn_def": "適合性"
  },
  "endangerment": {
    "pos": "n.",
    "en_def": "putting something in danger",
    "cn_def": "危害;瀕危狀態"
  },
  "swamp": {
    "pos": "n.",
    "en_def": "wet land with trees, often covered with water",
    "cn_def": "沼澤(有樹)"
  },
  "sawmill": {
    "pos": "n.",
    "en_def": "a factory where logs are cut into boards",
    "cn_def": "鋸木廠"
  },
  "pine": {
    "pos": "n.",
    "en_def": "an evergreen tree with needle-shaped leaves",
    "cn_def": "松樹"
  },
  "firewood": {
    "pos": "n.",
    "en_def": "wood that is cut and burned for heat or cooking",
    "cn_def": "柴火;木柴"
  },
  "cork": {
    "pos": "n.",
    "en_def": "light bark from a special oak tree",
    "cn_def": "軟木"
  },
  "botany": {
    "pos": "n.",
    "en_def": "the scientific study of plants",
    "cn_def": "植物學"
  },
  "deer": {
    "pos": "n.",
    "en_def": "a large animal with long legs; the males have antlers",
    "cn_def": "鹿"
  },
  "linkage": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯;連結"
  },
  "microclimate": {
    "pos": "n.",
    "en_def": "the weather conditions in a small area",
    "cn_def": "微氣候"
  },
  "deadwood": {
    "pos": "n.",
    "en_def": "dead trees and branches in a forest",
    "cn_def": "枯木"
  },
  "standardisation": {
    "pos": "n.",
    "en_def": "making things follow the same rules or methods",
    "cn_def": "標準化"
  },
  "riverbank": {
    "pos": "n.",
    "en_def": "the land along the side of a river",
    "cn_def": "河岸"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest",
    "cn_def": "叢林"
  },
  "temperate forest": {
    "pos": "n.phr.",
    "en_def": "a forest in a region with warm summers and cool winters",
    "cn_def": "溫帶森林"
  },
  "a thorn in one's side": {
    "pos": "n.phr.",
    "en_def": "a person or thing that keeps causing trouble",
    "cn_def": "眼中釘;心頭之患"
  },
  "acid rain": {
    "pos": "n.phr.",
    "en_def": "rain made harmful by pollution in the air",
    "cn_def": "酸雨"
  },
  "creek": {
    "pos": "n.",
    "en_def": "a small river or stream",
    "cn_def": "溪流;小河"
  },
  "biomass": {
    "pos": "n.",
    "en_def": "the total amount of living material in an area",
    "cn_def": "生物量"
  },
  "inaccuracy": {
    "pos": "n.",
    "en_def": "a mistake; not being exact",
    "cn_def": "不準確;錯誤"
  },
  "locust": {
    "pos": "n.",
    "en_def": "an insect that flies in huge groups and eats crops",
    "cn_def": "蝗蟲"
  },
  "mildew": {
    "pos": "n.",
    "en_def": "a thin white fungus on plants or damp things",
    "cn_def": "白粉病;黴"
  },
  "specificity": {
    "pos": "n.",
    "en_def": "being exact and detailed",
    "cn_def": "明確性;特定性"
  },
  "owl": {
    "pos": "n.",
    "en_def": "a bird with large eyes that hunts at night",
    "cn_def": "貓頭鷹"
  },
  "defensible": {
    "pos": "adj.",
    "en_def": "able to be supported with good reasons",
    "cn_def": "站得住腳的;可辯護的"
  },
  "coniferous": {
    "pos": "adj.",
    "en_def": "having cones and needle-shaped leaves",
    "cn_def": "針葉的"
  },
  "warranted": {
    "pos": "adj.",
    "en_def": "necessary or reasonable because of the situation",
    "cn_def": "有正當理由的;必要的"
  },
  "falsifiable": {
    "pos": "adj.",
    "en_def": "able to be proved wrong by testing",
    "cn_def": "可證偽的"
  },
  "retrospective": {
    "pos": "adj.",
    "en_def": "looking back at past events",
    "cn_def": "回顧的"
  },
  "corrective": {
    "pos": "adj.",
    "en_def": "designed to fix a problem",
    "cn_def": "矯正的;糾正的"
  }
};

const EXTRA_GLOSSES = {};
