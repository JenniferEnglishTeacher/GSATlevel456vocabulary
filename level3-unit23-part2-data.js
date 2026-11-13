// Part 2 Quiz Data: dessert – gallon
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 23-2 - dessert – gallon",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點；甜食",
    "en_def": "the sweet course eaten at the end of a meal",
    "sentence": "Even though we were completely stuffed after the savory dinner, we made sure to save room for {{BLANK}}.",
    "cn": "儘管吃完豐盛的鹹食正餐後我們已完全飽足，我們依然確保留點肚子吃甜點。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "充滿活力的；精力充沛的",
    "en_def": "showing or involving great activity, drive, or enthusiasm",
    "sentence": "The young pop singer captivated the stadium audience with her wildly {{BLANK}} dance routine and powerful vocals.",
    "cn": "這位年輕的流行歌手以其活力四射的動感舞蹈動作和震撼歌聲吸引了全場體育場觀眾。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "精力；能量；能源",
    "en_def": "the strength and vitality required for sustained activity; power",
    "sentence": "Governments worldwide are investing billions of dollars to transition from fossil fuels to clean renewable {{BLANK}}.",
    "cn": "全球各國政府正投資數十億美元，以從化石燃料過渡到潔淨的再生能源。"
  },
  {
    "word": "expectations",
    "pos": "n.",
    "cn_def": "期望；期待；預期",
    "en_def": "a strong belief that something will happen or be achieved in the future",
    "sentence": "The highly anticipated blockbuster sequel was so breathtaking that it easily lived up to the audience's high {{BLANK}}.",
    "cn": "這部備受期待的賣座續集精彩絕倫，輕鬆達到了觀眾的高度期望。"
  },
  {
    "word": "expect",
    "pos": "v.",
    "cn_def": "期待；預期；要求",
    "en_def": "to regard something as likely to happen; to anticipate",
    "sentence": "You cannot reasonably {{BLANK}} instant fluency in a foreign language after studying it for merely three weeks.",
    "cn": "僅僅學習三週之後，你無法合理地指望在一門外語上達到立即的流利度。"
  },
  {
    "word": "faint",
    "pos": "adj./v./n.",
    "cn_def": "微弱的；模糊的 (adj.)；昏倒 (v.)；暈厥 (n.)",
    "en_def": "barely perceptible; to lose consciousness temporarily from weakness",
    "sentence": "There was only a {{BLANK}} glimmer of light visible in the distance as we navigated the dark mountain pass.",
    "cn": "在黑暗的山路隘口前行時，遠處只有一抹微弱的光芒隱約可見。"
  },
  {
    "word": "fairy",
    "pos": "n.",
    "cn_def": "小仙子；小精靈",
    "en_def": "a mythical being of human form with magical powers and wings",
    "sentence": "In classic folklore, the benevolent {{BLANK}} godmother magically transformed a humble pumpkin into a golden royal carriage.",
    "cn": "在經典民間故事中，仁慈的仙女／神仙教母用魔法將一顆不起眼的南瓜變成了金色皇家馬車。"
  },
  {
    "word": "fairy tale",
    "pos": "n.phr.",
    "cn_def": "童話故事",
    "en_def": "a children's story about magical and imaginary beings and lands",
    "sentence": "The ancient castle perched high above the mist-covered lake looked like something straight out of a {{BLANK}}.",
    "cn": "聳立在雲霧繚繞湖泊上方的古老城堡，看起來就像是直接出自於童話故事一般。"
  },
  {
    "word": "fares",
    "pos": "n./v.",
    "cn_def": "車資；票價 (n.)；進展；應付 (v.)",
    "en_def": "the money paid for travel on public transport; to perform or progress",
    "sentence": "Commuters expressed strong dissatisfaction when the municipal transit authority announced another hike in subway {{BLANK}}.",
    "cn": "當市立大眾運輸局宣佈地鐵票價再次調漲時，通勤族表達了強烈不滿。"
  },
  {
    "word": "feather",
    "pos": "n.",
    "cn_def": "羽毛",
    "en_def": "one of the light horny structures that form the plumage of birds",
    "sentence": "The wise old saying states that birds of a {{BLANK}} flock together, as people naturally seek friends with similar values.",
    "cn": "有句古老諺語說「鳥以同羽相聚（物以類聚）」，因為人們自然會尋找價值觀相似的朋友。"
  },
  {
    "word": "gallon",
    "pos": "n.",
    "cn_def": "加侖 (液體容積單位)",
    "en_def": "a unit of liquid volume equal to 4 quarts (about 3.785 liters in the US)",
    "sentence": "Car buyers are increasingly choosing hybrid automobiles that deliver superior miles per {{BLANK}} on city highways.",
    "cn": "購車者日益偏好在城市公路上具有絕佳每加侖行駛里程數的油電混合車。"
  }
];

const MCQS = [
  {
    "q": "After finishing our delicious pasta, the waiter brought the menu so we could select a sweet ______.",
    "options": [
      "dessert",
      "gallon",
      "feather",
      "fare"
    ],
    "answer": 0,
    "cn": "吃完美味的義大利麵後，服務生送上菜單以便我們挑選一款香甜的甜點。",
    "vocabIndex": 0
  },
  {
    "q": "The fitness coach led an extremely ______ aerobics session that left everyone sweating and invigorated.",
    "options": [
      "fairy",
      "faint",
      "energetic",
      "cotton"
    ],
    "answer": 2,
    "cn": "健身教練帶領了一場極其活力充沛的有氧體操課，讓每個人汗流浹背且神清氣爽。",
    "vocabIndex": 1
  },
  {
    "q": "Transitioning from fossil fuels to clean renewable ______ is crucial for combating global climate change.",
    "options": [
      "feather",
      "energy",
      "dessert",
      "fare"
    ],
    "answer": 1,
    "cn": "從化石燃料轉型至潔淨的再生能源，對於對抗全球氣候變遷至關重要。",
    "vocabIndex": 2
  },
  {
    "q": "The new smartphone failed to live up to consumer ______ because of its frequent software glitches.",
    "options": [
      "dessert",
      "feather",
      "gallon",
      "expectation"
    ],
    "answer": 3,
    "cn": "這款新智慧型手機由於頻繁的軟體故障，未能達到消費者的期望。",
    "vocabIndex": 3
  },
  {
    "q": "Financial analysts ______ the housing market to stabilize once interest rates stop climbing.",
    "options": [
      "expect",
      "faint",
      "fare",
      "bet"
    ],
    "answer": 0,
    "cn": "金融分析師預期一旦利率停止攀升，房地產市場就會趨於穩定。",
    "vocabIndex": 4
  },
  {
    "q": "After working for eighteen hours without eating, the exhausted paramedic suddenly felt dizzy and ______.",
    "options": [
      "energetic",
      "faint",
      "colonial",
      "chatty"
    ],
    "answer": 1,
    "cn": "在未進食的情況下工作了十八個小時後，筋疲力竭的救護員突然感到頭暈且虛弱昏眩。",
    "vocabIndex": 5
  },
  {
    "q": "In the bedtime story, a magical ______ godmother appeared with a wand to grant Cinderella three wishes.",
    "options": [
      "dessert",
      "gallon",
      "feather",
      "fairy"
    ],
    "answer": 3,
    "cn": "在床邊故事中，一位具有魔法的神仙教母手持魔杖出現，賜予灰姑娘三個願望。",
    "vocabIndex": 6
  },
  {
    "q": "Because she was under ten years old, the conductor charged her half the standard train ______.",
    "options": [
      "dessert",
      "feather",
      "fare",
      "gallon"
    ],
    "answer": 2,
    "cn": "因為她未滿十歲，列車長只收取她標準火車票價的一半。",
    "vocabIndex": 8
  },
  {
    "q": "Winning the prestigious national journalism prize was another impressive ______ in her professional cap.",
    "options": [
      "gallon",
      "dessert",
      "fare",
      "feather"
    ],
    "answer": 3,
    "cn": "贏得負有盛名的國家新聞獎，是她職業生涯帽上另一根令人印象深刻的羽毛（引以為榮的成就）。",
    "vocabIndex": 9
  },
  {
    "q": "During our family road trip across Texas, we filled the camper's fuel tank with fifteen ______ of gasoline.",
    "options": [
      "desserts",
      "feathers",
      "gallons",
      "fares"
    ],
    "answer": 2,
    "cn": "在我們橫跨德州的家庭自駕旅行中，我們給露營車的油箱加了十五加侖汽油。",
    "vocabIndex": 10
  },
  {
    "q": "The kindergarten children were so ______ after recess that it took the teacher ten minutes to calm them down.",
    "options": [
      "faint",
      "energetic",
      "colonial",
      "cotton"
    ],
    "answer": 1,
    "cn": "下課休息後，幼兒園孩子們如此精力充沛，以致於老師花了十分鐘才讓他們安靜下來。",
    "vocabIndex": 1
  },
  {
    "q": "Drinking plenty of water and getting eight hours of sleep will restore your vitality and physical ______.",
    "options": [
      "energy",
      "feather",
      "dessert",
      "fare"
    ],
    "answer": 0,
    "cn": "多喝水並獲得八小時睡眠將能恢復你的活力與身體精力。",
    "vocabIndex": 2
  },
  {
    "q": "We did not ______ such harsh winter weather in early November, so we had not unpacked our heavy coats.",
    "options": [
      "fare",
      "faint",
      "expect",
      "bet"
    ],
    "answer": 2,
    "cn": "我們未曾預料到十一月初會有如此嚴寒的冬季天氣，因此還沒拆開我們厚大衣的包裝。",
    "vocabIndex": 4
  },
  {
    "q": "The patient saw black spots before his eyes and began to ______ due to sudden low blood pressure.",
    "options": [
      "fare",
      "faint",
      "expect",
      "bet"
    ],
    "answer": 1,
    "cn": "由於突發性低血壓，病患眼前發黑並開始昏倒／暈眩。",
    "vocabIndex": 5
  },
  {
    "q": "How did your younger brother ______ in his first semester at the prestigious medical university?",
    "options": [
      "fare",
      "expect",
      "faint",
      "bet"
    ],
    "answer": 0,
    "cn": "你弟弟在頂尖醫科大學的第一個學期過得如何／進展如何？",
    "vocabIndex": 8
  },
  {
    "q": "Down jackets filled with natural duck ______ provide exceptional warmth without adding excessive weight.",
    "options": [
      "fares",
      "gallons",
      "desserts",
      "feathers"
    ],
    "answer": 3,
    "cn": "填充天然鴨羽毛的羽絨外套能提供卓越的保暖效果，且不會增加多餘重量。",
    "vocabIndex": 9
  },
  {
    "q": "She ordered warm apple crumble topped with vanilla ice cream for ______ after eating her steak.",
    "options": [
      "gallon",
      "feather",
      "dessert",
      "fare"
    ],
    "answer": 2,
    "cn": "吃完牛排後，她點了頂部覆蓋香草冰淇淋的溫熱蘋果酥作為甜點。",
    "vocabIndex": 0
  },
  {
    "q": "Public transportation agencies voted unanimously to raise the adult bus ______ starting next month.",
    "options": [
      "fare",
      "feather",
      "gallon",
      "dessert"
    ],
    "answer": 0,
    "cn": "大眾運輸機構一致投票贊成從下個月開始提高成人公車票價。",
    "vocabIndex": 8
  },
  {
    "q": "Her outstanding performance in the national competition exceeded every teacher's wildest ______.",
    "options": [
      "gallon",
      "expectation",
      "feather",
      "dessert"
    ],
    "answer": 1,
    "cn": "她在全國比賽中的傑出表現超出了每位老師最高的期望。",
    "vocabIndex": 3
  },
  {
    "q": "Standing on the cliff at midnight, we could hear only the ______ murmur of distant waves below.",
    "options": [
      "energetic",
      "colonial",
      "chatty",
      "faint"
    ],
    "answer": 3,
    "cn": "午夜站在懸崖上，我們只能聽見下方遠處海浪微弱的低語聲。",
    "vocabIndex": 5
  },
  {
    "q": "The recipe specifies that you need exactly one ______ of fresh water to boil the large batch of noodles.",
    "options": [
      "dessert",
      "feather",
      "gallon",
      "fare"
    ],
    "answer": 2,
    "cn": "食譜註明你需要整整一加侖清水來煮這大批麵條。",
    "vocabIndex": 10
  },
  {
    "q": "The picturesque village surrounded by rolling green hills and stone cottages looked like a magical ______.",
    "options": [
      "dessert",
      "gallon",
      "fare",
      "fairy tale"
    ],
    "answer": 3,
    "cn": "被綿延起伏綠色丘陵與石造農舍環繞的風景如畫村莊，看起來就像一段魔幻的童話故事。",
    "vocabIndex": 7
  },
  {
    "q": "Solar panels convert direct sunlight into usable electrical ______ that can be stored in batteries.",
    "options": [
      "dessert",
      "energy",
      "fare",
      "feather"
    ],
    "answer": 1,
    "cn": "太陽能板將直射陽光轉化為可使用的電能，並可儲存在電池中。",
    "vocabIndex": 2
  },
  {
    "q": "It is completely unreasonable to ______ a beginner to master complicated violin techniques overnight.",
    "options": [
      "expect",
      "faint",
      "bet",
      "fare"
    ],
    "answer": 0,
    "cn": "指望初學者在一夜之間掌握複雜的小提琴技巧是完全不切實際的。",
    "vocabIndex": 4
  },
  {
    "q": "The bird ruffled its multicolored ______ to dry off after bathing in the garden fountain.",
    "options": [
      "desserts",
      "gallons",
      "feathers",
      "fares"
    ],
    "answer": 2,
    "cn": "那隻鳥在花園噴泉洗澡後抖動其五彩斑斕的羽毛以甩乾水分。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "dessert": {
    "pos": "n.",
    "en_def": "the sweet course eaten at the end of a meal",
    "cn_def": "甜點；甜食",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the sweet course eaten at the end of a meal",
        "cn_def": "甜點；甜食"
      }
    ]
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "showing or involving great activity, drive, or enthusiasm",
    "cn_def": "充滿活力的；精力充沛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing or involving great activity, drive, or enthusiasm",
        "cn_def": "充滿活力的；精力充沛的"
      }
    ]
  },
  "energy": {
    "pos": "n.",
    "en_def": "the strength and vitality required for sustained activity; power",
    "cn_def": "精力；能量；能源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the strength and vitality required for sustained activity; power",
        "cn_def": "精力；能量；能源"
      }
    ]
  },
  "expectations": {
    "pos": "n.",
    "en_def": "a strong belief that something will happen or be achieved in the future",
    "cn_def": "期望；期待；預期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong belief that something will happen or be achieved in the future",
        "cn_def": "期望；期待；預期"
      }
    ]
  },
  "expectation": {
    "pos": "n.",
    "en_def": "a strong belief that something will happen or be achieved in the future",
    "cn_def": "期望；期待；預期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong belief that something will happen or be achieved in the future",
        "cn_def": "期望；期待；預期"
      }
    ]
  },
  "expect": {
    "pos": "v.",
    "en_def": "to regard something as likely to happen; to anticipate",
    "cn_def": "期待；預期；要求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to regard something as likely to happen; to anticipate",
        "cn_def": "期待；預期；要求"
      }
    ]
  },
  "faint": {
    "pos": "adj./v./n.",
    "en_def": "barely perceptible; to lose consciousness temporarily from weakness",
    "cn_def": "微弱的；模糊的 (adj.)；昏倒 (v.)；暈厥 (n.)",
    "combined": [
      {
        "pos": "adj./v./n.",
        "en_def": "barely perceptible; to lose consciousness temporarily from weakness",
        "cn_def": "微弱的；模糊的 (adj.)；昏倒 (v.)；暈厥 (n.)"
      }
    ]
  },
  "fairy": {
    "pos": "n.",
    "en_def": "a mythical being of human form with magical powers and wings",
    "cn_def": "小仙子；小精靈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mythical being of human form with magical powers and wings",
        "cn_def": "小仙子；小精靈"
      }
    ]
  },
  "fairy tale": {
    "pos": "n.phr.",
    "en_def": "a children's story about magical and imaginary beings and lands",
    "cn_def": "童話故事",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a children's story about magical and imaginary beings and lands",
        "cn_def": "童話故事"
      }
    ]
  },
  "fares": {
    "pos": "n./v.",
    "en_def": "the money paid for travel on public transport; to perform or progress",
    "cn_def": "車資；票價 (n.)；進展；應付 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the money paid for travel on public transport; to perform or progress",
        "cn_def": "車資；票價 (n.)；進展；應付 (v.)"
      }
    ]
  },
  "fare": {
    "pos": "n./v.",
    "en_def": "the money paid for travel on public transport; to perform or progress",
    "cn_def": "車資；票價 (n.)；進展；應付 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the money paid for travel on public transport; to perform or progress",
        "cn_def": "車資；票價 (n.)；進展；應付 (v.)"
      }
    ]
  },
  "feather": {
    "pos": "n.",
    "en_def": "one of the light horny structures that form the plumage of birds",
    "cn_def": "羽毛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of the light horny structures that form the plumage of birds",
        "cn_def": "羽毛"
      }
    ]
  },
  "gallon": {
    "pos": "n.",
    "en_def": "a unit of liquid volume equal to 4 quarts (about 3.785 liters in the US)",
    "cn_def": "加侖 (液體容積單位)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit of liquid volume equal to 4 quarts (about 3.785 liters in the US)",
        "cn_def": "加侖 (液體容積單位)"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
