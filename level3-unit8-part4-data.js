// Part 4 Quiz Data: parrot – blow off steam
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 8-4 - parrot – blow off steam",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "parrots",
    "pos": "n./v.",
    "cn_def": "鸚鵡；機械般盲目附和（名詞/動詞）",
    "en_def": "a brightly colored tropical bird capable of mimicking speech; to repeat mechanically without understanding",
    "sentence": "Colorful tropical {{BLANK}} living in South American rainforests are exceptionally talented at mimicking human speech.",
    "cn": "生活在南美洲熱帶雨林裡的色彩繽紛的鸚鵡，極擅長模仿人類說話。"
  },
  {
    "word": "pine",
    "pos": "n.",
    "cn_def": "松樹；松木",
    "en_def": "an evergreen coniferous tree with needle-shaped leaves and woody cones",
    "sentence": "One of our most cherished family Christmas traditions is gathering in the living room to decorate a fresh {{BLANK}} tree.",
    "cn": "我們家最珍視的聖誕節傳統之一，就是聚集在客廳裡裝飾一棵新鮮的松樹。"
  },
  {
    "word": "playful",
    "pos": "adj.",
    "cn_def": "愛玩的；頑皮嬉戲的；幽默開朗的",
    "en_def": "fond of games and amusement; cheerful, lively, and lighthearted",
    "sentence": "The golden retriever puppy is naturally energetic and {{BLANK}}, wagging its tail and chasing tennis balls across the yard.",
    "cn": "那隻黃金獵犬幼犬天性充滿活力且愛玩嬉戲，搖著尾巴在院子裡追逐網球。"
  },
  {
    "word": "poured",
    "pos": "v.",
    "cn_def": "倒（液體）；傾盆降雨；湧入",
    "en_def": "to flow rapidly in a steady stream; to rain heavily; to serve a drink",
    "sentence": "The polite flight attendant carefully {{BLANK}} hot black coffee into porcelain cups for all the passengers.",
    "cn": "禮貌的空服員小心翼翼地為所有乘客將熱黑咖啡倒入瓷杯中。"
  },
  {
    "word": "when it rains, it pours",
    "pos": "idiom",
    "cn_def": "禍不單行；屋漏偏逢連夜雨",
    "en_def": "proverb meaning that when bad things happen, they tend to happen all at once in large numbers",
    "sentence": "First my car broke down on the highway, and then I lost my wallet; truly, {{BLANK}}.",
    "cn": "先是我的車在高速公路上拋錨，接著我又丟了皮夾；真是屋漏偏逢連夜雨／禍不單行。"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "cn_def": "預防；防止；阻止",
    "en_def": "to keep something undesirable from happening; to stop someone from doing something",
    "sentence": "Public health doctors across the globe are working tirelessly to {{BLANK}} the rapid spread of the infectious virus.",
    "cn": "全球公共衛生醫師們不知疲倦地工作，以防止／阻止該傳染性病毒的快速蔓延。"
  },
  {
    "word": "roast",
    "pos": "v./n./adj.",
    "cn_def": "烤；烘烤；烤肉（動詞/名詞/形容詞）",
    "en_def": "to cook food by prolonged exposure to heat in an oven or over fire; roasted meat",
    "sentence": "The friendly waiter warmly recommended the delicious {{BLANK}} beef served with garlic mashed potatoes.",
    "cn": "熱情的服務生熱烈推薦搭配蒜香馬鈴薯泥的美味烤牛肉。"
  },
  {
    "word": "shiny",
    "pos": "adj.",
    "cn_def": "閃亮的；有光澤的；光潔的",
    "en_def": "reflecting light brightly; clean, polished, and lustrous",
    "sentence": "A special imported silk fabric was used to make this tuxedo, which is why it looks exceptionally smooth and {{BLANK}}.",
    "cn": "這件燕尾服採用特殊的進口絲綢布料製作，這正是它看起來格外平滑且閃亮發光的原因。"
  },
  {
    "word": "situation",
    "pos": "n.",
    "cn_def": "處境；情況；形勢（可數）",
    "en_def": "a set of circumstances in which someone finds themselves; a state of affairs",
    "sentence": "Because the two close colleagues were angry at each other, eating lunch together created an uncomfortable {{BLANK}}.",
    "cn": "因為兩位平時要好的同事正在互相生氣，一起吃午餐造成了一種令人尷尬難堪的處境。"
  },
  {
    "word": "steam",
    "pos": "n./v.",
    "cn_def": "蒸氣；水蒸氣；蒸煮（名詞/動詞）",
    "en_def": "the vapor into which water is converted when boiled; to cook or emit steam",
    "sentence": "The kitchen window was completely covered with warm {{BLANK}} rising from the large pot of boiling beef soup.",
    "cn": "廚房窗戶完全被一大鍋滾燙牛肉湯升騰起的溫暖水蒸氣覆蓋。"
  },
  {
    "word": "blow off steam",
    "pos": "v.phr.",
    "cn_def": "宣洩精力；發洩情緒；釋放壓力",
    "en_def": "to get rid of excess energy, anger, or stress through active physical exercise or recreation",
    "sentence": "After spending eight stressful hours resolving difficult customer complaints at the office, Allison went for a long run to {{BLANK}}.",
    "cn": "在辦公室度過了八個小時處理繁重客戶投訴的緊繃時光後，艾莉森去長跑來釋放壓力／宣洩情緒。"
  }
];

const MCQS = [
  {
    "q": "The colorful green ______ sat on the branch and repeated every word the girl said.",
    "options": [
      "pine",
      "situation",
      "steam",
      "parrot"
    ],
    "answer": 3,
    "cn": "那隻色彩鮮綠的鸚鵡坐在樹枝上，重複著小女孩說的每一句話。",
    "vocabIndex": 0
  },
  {
    "q": "We went into the woods to cut down a small green ______ tree for Christmas.",
    "options": [
      "pine",
      "parrot",
      "situation",
      "steam"
    ],
    "answer": 0,
    "cn": "我們走進樹林裡砍下一棵綠色的松樹來作為聖誕樹。",
    "vocabIndex": 1
  },
  {
    "q": "White hot ______ came rising out of the kettle when the water started to boil.",
    "options": [
      "parrot",
      "pine",
      "steam",
      "situation"
    ],
    "answer": 2,
    "cn": "當水開始沸騰時，滾燙的白色水蒸氣從水壺中冒了出來。",
    "vocabIndex": 9
  },
  {
    "q": "Losing your house keys at night is a very difficult and stressful ______.",
    "options": [
      "parrot",
      "situation",
      "steam",
      "pine"
    ],
    "answer": 1,
    "cn": "在夜間弄丟家門鑰匙是一個非常棘手且令人焦慮的處境／狀況。",
    "vocabIndex": 8
  },
  {
    "q": "The zoo has a talking ______ that can say 'good morning' clearly to visitors.",
    "options": [
      "parrot",
      "steam",
      "pine",
      "situation"
    ],
    "answer": 0,
    "cn": "這座動物園有一隻會說話的鸚鵡，能清晰地對訪客說「早安」。",
    "vocabIndex": 0
  },
  {
    "q": "The floor of the forest was covered with brown needles from the tall ______ trees.",
    "options": [
      "parrot",
      "steam",
      "pine",
      "situation"
    ],
    "answer": 2,
    "cn": "森林地面上鋪滿了高大松樹所掉落的褐色松針。",
    "vocabIndex": 1
  },
  {
    "q": "The bathroom mirror was completely fogged up by warm ______ from the shower.",
    "options": [
      "parrot",
      "pine",
      "situation",
      "steam"
    ],
    "answer": 3,
    "cn": "浴室鏡子完全被淋浴時產生的溫暖水蒸氣燻得霧濛濛的。",
    "vocabIndex": 9
  },
  {
    "q": "Talking calmly with each other is the best way to handle this tricky ______.",
    "options": [
      "parrot",
      "situation",
      "steam",
      "pine"
    ],
    "answer": 1,
    "cn": "彼此冷靜溝通是處理這個棘手處境／情況的最佳方式。",
    "vocabIndex": 8
  },
  {
    "q": "Please ______ some hot water into my cup so I can make a fresh cup of green tea.",
    "options": [
      "steam",
      "prevent",
      "roast",
      "pour"
    ],
    "answer": 3,
    "cn": "請幫我把熱水倒進我的杯子裡，這樣我才能泡一杯新鮮綠茶。",
    "vocabIndex": 3
  },
  {
    "q": "Wearing a warm mask and washing your hands can ______ you from catching a cold.",
    "options": [
      "pour",
      "roast",
      "prevent",
      "steam"
    ],
    "answer": 2,
    "cn": "配戴保暖口罩與勤洗手可以預防／防止你感冒。",
    "vocabIndex": 5
  },
  {
    "q": "Dad made a fire in the yard to ______ some sweet corn for our weekend dinner.",
    "options": [
      "pour",
      "roast",
      "prevent",
      "steam"
    ],
    "answer": 1,
    "cn": "爸爸在院子裡生火，為我們的週末晚餐烘烤香甜的玉米。",
    "vocabIndex": 6
  },
  {
    "q": "To cook these vegetables in a healthy way, you should ______ them over boiling water.",
    "options": [
      "steam",
      "prevent",
      "roast",
      "pour"
    ],
    "answer": 0,
    "cn": "若要以健康的方式烹調這些蔬菜，你應該把它們放在沸水上方清蒸。",
    "vocabIndex": 9
  },
  {
    "q": "Be careful when you ______ hot milk into the glass so you do not spill it.",
    "options": [
      "prevent",
      "roast",
      "pour",
      "steam"
    ],
    "answer": 2,
    "cn": "將熱牛奶倒進玻璃杯時要小心，別把它灑出來了。",
    "vocabIndex": 3
  },
  {
    "q": "The strong fence was built around the farm to ______ wild wolves from getting in.",
    "options": [
      "pour",
      "steam",
      "roast",
      "prevent"
    ],
    "answer": 3,
    "cn": "在農場周圍建造堅固的圍欄，是為了防止／阻止野狼進入。",
    "vocabIndex": 5
  },
  {
    "q": "The delicious smell of chicken ______ in the kitchen made all of us feel hungry.",
    "options": [
      "roasting",
      "preventing",
      "pouring",
      "steaming"
    ],
    "answer": 0,
    "cn": "廚房裡正在烘烤的烤雞散發出美味香氣，讓我們大家感到肚子餓了。",
    "vocabIndex": 6
  },
  {
    "q": "The waiter brought a basket of warm bread and ______ fish to our table.",
    "options": [
      "poured",
      "steamed",
      "roasted",
      "prevented"
    ],
    "answer": 1,
    "cn": "服務生端上了一籃熱麵包和一盤清蒸的魚到我們餐桌上。",
    "vocabIndex": 9
  },
  {
    "q": "The kitten is very ______ and loves running after toy mice across the rug.",
    "options": [
      "playful",
      "shiny",
      "roasted",
      "steamed"
    ],
    "answer": 0,
    "cn": "那隻小貓非常活潑愛玩，喜歡在地毯上追逐玩具老鼠。",
    "vocabIndex": 2
  },
  {
    "q": "After brushing her teeth with toothpaste, Amy had a bright and ______ smile.",
    "options": [
      "playful",
      "shiny",
      "roasted",
      "steamed"
    ],
    "answer": 1,
    "cn": "用牙膏刷完牙後，艾咪露出了明亮且潔白發光的微笑。",
    "vocabIndex": 7
  },
  {
    "q": "The baby puppy has a ______ nature and wags its tail whenever you call its name.",
    "options": [
      "shiny",
      "steamed",
      "roasted",
      "playful"
    ],
    "answer": 3,
    "cn": "幼犬天性活潑愛玩，只要你叫牠的名字牠就會搖尾巴。",
    "vocabIndex": 2
  },
  {
    "q": "Jack washed and polished his red car until it was completely ______ in the sun.",
    "options": [
      "playful",
      "roasted",
      "shiny",
      "steamed"
    ],
    "answer": 2,
    "cn": "傑克將他的紅色汽車洗淨打蠟，直到它在陽光下完全閃亮耀眼。",
    "vocabIndex": 7
  },
  {
    "q": "After working hard at the office all day, Peter went for a run to ______.",
    "options": [
      "blow off steam",
      "roast beef",
      "pine tree",
      "when it rains"
    ],
    "answer": 0,
    "cn": "在辦公室辛苦工作了一整天後，彼得去慢跑來發洩精力／釋放壓力。",
    "vocabIndex": 10
  },
  {
    "q": "For dinner at the restaurant, my father ordered a big plate of tender ______.",
    "options": [
      "blow off steam",
      "pine needle",
      "roast beef",
      "when it rains"
    ],
    "answer": 2,
    "cn": "在餐廳吃晚餐時，我父親點了一大盤鮮嫩的烤牛肉。",
    "vocabIndex": 6
  },
  {
    "q": "First my bike got a flat tire, and then I dropped my lunch; truly, ______.",
    "options": [
      "blow off steam",
      "when it rains, it pours",
      "roast beef",
      "pine tree"
    ],
    "answer": 1,
    "cn": "先是我的自行車爆胎，接著我又打翻了午餐；真是禍不單行／屋漏偏逢連夜雨。",
    "vocabIndex": 4
  },
  {
    "q": "The bird was singing cheerfully on top of the tall green ______ in our garden.",
    "options": [
      "blow off steam",
      "roast beef",
      "when it rains",
      "pine tree"
    ],
    "answer": 3,
    "cn": "那隻鳥在我們花園裡那棵高大翠綠的松樹頂端歡快地歌唱。",
    "vocabIndex": 1
  },
  {
    "q": "Playing soccer with his classmates helps Tommy ______ after a stressful week of tests.",
    "options": [
      "when it rains",
      "roast beef",
      "blow off steam",
      "pine cone"
    ],
    "answer": 2,
    "cn": "與同班同學踢足球幫助湯米在經歷了充滿壓力的考試週後釋放壓力／宣洩精力。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "parrots": {
    "pos": "n./v.",
    "en_def": "a brightly colored tropical bird capable of mimicking speech; to repeat mechanically without understanding",
    "cn_def": "鸚鵡；機械般盲目附和（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a brightly colored tropical bird capable of mimicking speech; to repeat mechanically without understanding",
        "cn_def": "鸚鵡；機械般盲目附和（名詞/動詞）"
      }
    ]
  },
  "parrot": {
    "pos": "n./v.",
    "en_def": "a brightly colored tropical bird capable of mimicking speech; to repeat mechanically without understanding",
    "cn_def": "鸚鵡；機械般盲目附和（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a brightly colored tropical bird capable of mimicking speech; to repeat mechanically without understanding",
        "cn_def": "鸚鵡；機械般盲目附和（名詞/動詞）"
      }
    ]
  },
  "pine": {
    "pos": "n.",
    "en_def": "an evergreen coniferous tree with needle-shaped leaves and woody cones",
    "cn_def": "松樹；松木",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an evergreen coniferous tree with needle-shaped leaves and woody cones",
        "cn_def": "松樹；松木"
      }
    ]
  },
  "playful": {
    "pos": "adj.",
    "en_def": "fond of games and amusement; cheerful, lively, and lighthearted",
    "cn_def": "愛玩的；頑皮嬉戲的；幽默開朗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fond of games and amusement; cheerful, lively, and lighthearted",
        "cn_def": "愛玩的；頑皮嬉戲的；幽默開朗的"
      }
    ]
  },
  "pour": {
    "pos": "v.",
    "en_def": "to flow rapidly in a steady stream; to rain heavily; to serve a drink",
    "cn_def": "倒（液體）；傾盆降雨；湧入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to flow rapidly in a steady stream; to rain heavily; to serve a drink",
        "cn_def": "倒（液體）；傾盆降雨；湧入"
      }
    ]
  },
  "poured": {
    "pos": "v.",
    "en_def": "to flow rapidly in a steady stream; to rain heavily; to serve a drink",
    "cn_def": "倒（液體）；傾盆降雨；湧入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to flow rapidly in a steady stream; to rain heavily; to serve a drink",
        "cn_def": "倒（液體）；傾盆降雨；湧入"
      }
    ]
  },
  "when it rains, it pours": {
    "pos": "idiom",
    "en_def": "proverb meaning that when bad things happen, they tend to happen all at once in large numbers",
    "cn_def": "禍不單行；屋漏偏逢連夜雨",
    "combined": [
      {
        "pos": "idiom",
        "en_def": "proverb meaning that when bad things happen, they tend to happen all at once in large numbers",
        "cn_def": "禍不單行；屋漏偏逢連夜雨"
      }
    ]
  },
  "prevent": {
    "pos": "v.",
    "en_def": "to keep something undesirable from happening; to stop someone from doing something",
    "cn_def": "預防；防止；阻止",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep something undesirable from happening; to stop someone from doing something",
        "cn_def": "預防；防止；阻止"
      }
    ]
  },
  "roast": {
    "pos": "v./n./adj.",
    "en_def": "to cook food by prolonged exposure to heat in an oven or over fire; roasted meat",
    "cn_def": "烤；烘烤；烤肉（動詞/名詞/形容詞）",
    "combined": [
      {
        "pos": "v./n./adj.",
        "en_def": "to cook food by prolonged exposure to heat in an oven or over fire; roasted meat",
        "cn_def": "烤；烘烤；烤肉（動詞/名詞/形容詞）"
      }
    ]
  },
  "shiny": {
    "pos": "adj.",
    "en_def": "reflecting light brightly; clean, polished, and lustrous",
    "cn_def": "閃亮的；有光澤的；光潔的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "reflecting light brightly; clean, polished, and lustrous",
        "cn_def": "閃亮的；有光澤的；光潔的"
      }
    ]
  },
  "situation": {
    "pos": "n.",
    "en_def": "a set of circumstances in which someone finds themselves; a state of affairs",
    "cn_def": "處境；情況；形勢（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of circumstances in which someone finds themselves; a state of affairs",
        "cn_def": "處境；情況；形勢（可數）"
      }
    ]
  },
  "steam": {
    "pos": "n./v.",
    "en_def": "the vapor into which water is converted when boiled; to cook or emit steam",
    "cn_def": "蒸氣；水蒸氣；蒸煮（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the vapor into which water is converted when boiled; to cook or emit steam",
        "cn_def": "蒸氣；水蒸氣；蒸煮（名詞/動詞）"
      }
    ]
  },
  "blow off steam": {
    "pos": "v.phr.",
    "en_def": "to get rid of excess energy, anger, or stress through active physical exercise or recreation",
    "cn_def": "宣洩精力；發洩情緒；釋放壓力",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to get rid of excess energy, anger, or stress through active physical exercise or recreation",
        "cn_def": "宣洩精力；發洩情緒；釋放壓力"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
