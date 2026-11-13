// Part 2 Quiz Data: chop – golfer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 7-2 - chop – golfer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chop",
    "pos": "v.",
    "cn_def": "剁碎；砍；大幅削減（動詞）",
    "en_def": "to cut into pieces with repeated sharp blows of an axe or knife",
    "sentence": "The film director decided to {{BLANK}} several unnecessary minutes off the final cut of the movie.",
    "cn": "電影導演決定從電影最終剪輯中剪掉削減幾分鐘不必要的畫面。"
  },
  {
    "word": "chops",
    "pos": "n.",
    "cn_def": "帶骨肉排；豬排；羊排（可數）",
    "en_def": "a thick slice of meat, especially pork or lamb, typically including a rib",
    "sentence": "My mother grilled four delicious lamb {{BLANK}} seasoned with rosemary and garlic for our family dinner.",
    "cn": "我母親烤了四塊用迷迭香和大蒜調味的美味羊排作為全家晚餐。"
  },
  {
    "word": "coconut",
    "pos": "n.",
    "cn_def": "椰子；椰肉（可數）",
    "en_def": "the large, oval, brown seed of a tropical palm tree with edible white flesh and liquid",
    "sentence": "Drinking refreshing and chilled {{BLANK}} juice on a hot summer afternoon can make you feel instantly cooler.",
    "cn": "在炎熱的夏日午後飲用清爽冰鎮的椰子汁，可以讓你瞬間感到涼爽。"
  },
  {
    "word": "continent",
    "pos": "n.",
    "cn_def": "大陸；洲（可數）",
    "en_def": "any of the world's main continuous expanses of land",
    "sentence": "Asia is scientifically recognized as the largest {{BLANK}} in the world, closely followed by Africa.",
    "cn": "亞洲在科學上被公認為世界上面積最大的大洲／大陸，非洲緊隨其後。"
  },
  {
    "word": "continental",
    "pos": "adj.",
    "cn_def": "大陸的；歐洲大陸風格的",
    "en_def": "forming or belonging to a continent; typical of mainland Europe",
    "sentence": "The boutique European hotel serves a light {{BLANK}} breakfast consisting of warm croissants, fruit, and coffee.",
    "cn": "這家歐洲精品飯店提供精緻的歐式（大陸風格）早餐，包含熱可頌麵包、水果和咖啡。"
  },
  {
    "word": "cradle",
    "pos": "n.",
    "cn_def": "搖籃；發源地（可數）",
    "en_def": "a small bed for a baby, especially one that rocks from side to side",
    "sentence": "The exhausted father fell asleep in the armchair while gently rocking his sleeping baby in the wooden {{BLANK}}.",
    "cn": "疲憊的父親在扶手椅上睡著了，手裡還輕輕搖著木製搖籃裡熟睡的嬰兒。"
  },
  {
    "word": "cradle to grave",
    "pos": "phr.",
    "cn_def": "從生到死；終生（片語）",
    "en_def": "from birth to death; throughout the entirety of one's life",
    "sentence": "The comprehensive national healthcare system was designed to provide medical care for all citizens from {{BLANK}}.",
    "cn": "這項全面的全民健保體系旨在為所有公民提供從生到死（終生）的醫療照護。"
  },
  {
    "word": "disc",
    "pos": "n.",
    "cn_def": "光碟；圓盤；磁盤（可數）",
    "en_def": "a flat, thin, circular object or electronic storage medium (also spelled disk)",
    "sentence": "Because modern slim laptops rarely include a built-in {{BLANK}} drive, I had to purchase an external one.",
    "cn": "因為現代超薄筆記型電腦很少內建光碟機，所以我不得不購買一台外接式光碟機。"
  },
  {
    "word": "donut",
    "pos": "n.",
    "cn_def": "甜甜圈（可數，亦拼作 doughnut）",
    "en_def": "a small fried cake of sweetened dough, typically in the shape of a ring or ball",
    "sentence": "I enjoyed a freshly glazed {{BLANK}} along with a cup of hot black tea for my afternoon office snack.",
    "cn": "我在辦公室下午茶時間享用了一個新鮮出爐的糖霜甜甜圈和一杯熱紅茶。"
  },
  {
    "word": "exploded",
    "pos": "v.",
    "cn_def": "爆炸；破裂；激增（動詞）",
    "en_def": "to burst or shatter violently from internal pressure; to increase suddenly",
    "sentence": "Online video gaming and esports have {{BLANK}} in popularity among young teenagers over the past decade.",
    "cn": "在過去十年間，線上電玩與電子競技在年輕青少年群體中的受歡迎程度激增／爆棚。"
  },
  {
    "word": "explosion",
    "pos": "n.",
    "cn_def": "爆炸；爆發；激增（可數）",
    "en_def": "a violent and destructive shattering or blowing apart of something",
    "sentence": "Residents living three miles away could still hear the terrifying sound of the chemical factory {{BLANK}}.",
    "cn": "住在三英里外的居民依然能聽見化工廠爆炸的可怕巨響。"
  },
  {
    "word": "golf",
    "pos": "n.",
    "cn_def": "高爾夫球運動（不可數）",
    "en_def": "an outdoor game played on a large open-air course with clubs and a small hard ball",
    "sentence": "Both physical stamina and intense mental concentration are essential if you wish to play {{BLANK}} professionally.",
    "cn": "如果你想以打高爾夫球為職業，充沛的體力與高度的心理專注力都是不可或缺的。"
  },
  {
    "word": "golfer",
    "pos": "n.",
    "cn_def": "高爾夫球手；打高爾夫球的人（可數）",
    "en_def": "a person who plays golf, especially professionally or enthusiastically",
    "sentence": "The young Taiwanese {{BLANK}} practiced hitting hundreds of golf balls every single day to prepare for tournaments.",
    "cn": "那位年輕的台灣高爾夫球手每天練習擊打數百顆球，為各項大賽做準備。"
  }
];

const MCQS = [
  {
    "q": "The chef placed a juicy pork ______ onto each guest's dinner plate.",
    "options": [
      "chop",
      "continent",
      "cradle",
      "disc"
    ],
    "answer": 0,
    "cn": "主廚在每位客人的餐盤上放了一塊多汁的豬排。",
    "vocabIndex": 0
  },
  {
    "q": "We sat under the tropical palm trees drinking sweet ______ water through straws.",
    "options": [
      "cradle",
      "continent",
      "golf",
      "coconut"
    ],
    "answer": 3,
    "cn": "我們坐在熱帶棕櫚樹下，用吸管喝著甘甜的椰子水。",
    "vocabIndex": 2
  },
  {
    "q": "Europe and Africa are both large areas of land called a ______.",
    "options": [
      "donut",
      "disc",
      "continent",
      "cradle"
    ],
    "answer": 2,
    "cn": "歐洲與非洲都是被稱為大洲／大陸的大片陸地。",
    "vocabIndex": 3
  },
  {
    "q": "The mother gently placed her sleeping baby inside the wooden ______.",
    "options": [
      "disc",
      "cradle",
      "continent",
      "donut"
    ],
    "answer": 1,
    "cn": "母親溫柔地將熟睡的嬰兒放進木製搖籃裡。",
    "vocabIndex": 5
  },
  {
    "q": "I put the music ______ into the player and listened to my favorite songs.",
    "options": [
      "disc",
      "coconut",
      "cradle",
      "donut"
    ],
    "answer": 0,
    "cn": "我將音樂光碟放進播放機中，聆聽我最喜愛的歌曲。",
    "vocabIndex": 7
  },
  {
    "q": "David bought a sweet chocolate ______ covered with sugar sprinkles for breakfast.",
    "options": [
      "continent",
      "disc",
      "donut",
      "cradle"
    ],
    "answer": 2,
    "cn": "大衛買了一個撒滿糖粒的香甜巧克力甜甜圈當早餐。",
    "vocabIndex": 8
  },
  {
    "q": "The loud ______ at the gas station broke windows in nearby homes.",
    "options": [
      "cradle",
      "explosion",
      "continent",
      "donut"
    ],
    "answer": 1,
    "cn": "加油站發生的巨大爆炸震碎了附近住宅的窗戶。",
    "vocabIndex": 10
  },
  {
    "q": "My uncle plays ______ every Saturday morning with his friends on the green course.",
    "options": [
      "cradle",
      "disc",
      "donut",
      "golf"
    ],
    "answer": 3,
    "cn": "我叔叔每週六早晨都和朋友們在綠色球場上打高爾夫球。",
    "vocabIndex": 11
  },
  {
    "q": "The professional ______ hit the ball straight into the tiny hole from far away.",
    "options": [
      "continent",
      "donut",
      "golfer",
      "cradle"
    ],
    "answer": 2,
    "cn": "那位職業高爾夫球手從遠處將球直接打進了微小的洞中。",
    "vocabIndex": 12
  },
  {
    "q": "Please help me ______ these carrots into small pieces for the rabbit.",
    "options": [
      "chop",
      "explode",
      "cradle",
      "golf"
    ],
    "answer": 0,
    "cn": "請幫我把這些胡蘿蔔切成小塊給兔子吃。",
    "vocabIndex": 0
  },
  {
    "q": "The big balloon will ______ with a loud sound if you touch it with a pin.",
    "options": [
      "chop",
      "explode",
      "cradle",
      "golf"
    ],
    "answer": 1,
    "cn": "如果你用大頭針碰那顆大氣球，它會發出巨響爆炸破裂。",
    "vocabIndex": 9
  },
  {
    "q": "The hotel provides a light ______ breakfast with bread, jam, and coffee.",
    "options": [
      "explosive",
      "craddled",
      "chopped",
      "continental"
    ],
    "answer": 3,
    "cn": "飯店提供附有麵包、果醬和咖啡的輕食歐式（大陸型）早餐。",
    "vocabIndex": 4
  },
  {
    "q": "Gasoline is an ______ liquid that must be kept away from fire and sparks.",
    "options": [
      "continental",
      "explosive",
      "chopped",
      "circular"
    ],
    "answer": 1,
    "cn": "汽油是一種具爆炸性的液體，必須遠離火源與火花。"
  },
  {
    "q": "The woodcutter used a sharp metal axe to ______ the fallen tree into firewood.",
    "options": [
      "explode",
      "golf",
      "chop",
      "disc"
    ],
    "answer": 2,
    "cn": "伐木工人用一把鋒利的金屬斧頭將倒下的樹木砍剁成柴火。",
    "vocabIndex": 0
  },
  {
    "q": "When water gets inside the heated rock, the steam can cause it to ______.",
    "options": [
      "golf",
      "chop",
      "cradle",
      "explode"
    ],
    "answer": 3,
    "cn": "當水分進入受熱的岩石內部時，水蒸氣可能導致其炸裂。",
    "vocabIndex": 9
  },
  {
    "q": "The loving mother ______ her sick baby in her arms and rocked her gently.",
    "options": [
      "cradled",
      "chopped",
      "exploded",
      "golfed"
    ],
    "answer": 0,
    "cn": "慈愛的母親將生病的嬰兒抱在（如搖籃般撫慰）懷中輕輕搖晃。",
    "vocabIndex": 5
  },
  {
    "q": "We walked around the green ______ course enjoying the sunny morning weather.",
    "options": [
      "continent",
      "donut",
      "golf",
      "cradle"
    ],
    "answer": 2,
    "cn": "我們漫步在綠色的高爾夫球場周圍，享受著晴朗的晨間天氣。",
    "vocabIndex": 11
  },
  {
    "q": "A hard brown ______ fell from the tall tree onto the sandy beach.",
    "options": [
      "cradle",
      "coconut",
      "continent",
      "donut"
    ],
    "answer": 1,
    "cn": "一顆堅硬的棕色椰子從高樹上掉落到了沙灘上。",
    "vocabIndex": 2
  },
  {
    "q": "The national healthcare plan protects every citizen ______.",
    "options": [
      "on the golf course",
      "in the disc drive",
      "with a loud bang",
      "from cradle to grave"
    ],
    "answer": 3,
    "cn": "這項全民健保計畫終生／從生到死保障每一位國民。",
    "vocabIndex": 6
  },
  {
    "q": "The baker made small round ______ that tasted delicious with warm cinnamon sugar.",
    "options": [
      "donut holes",
      "golf courses",
      "coconut palms",
      "disc drives"
    ],
    "answer": 0,
    "cn": "麵包師傅製作了配上肉桂糖粉非常美味的小圓甜甜圈球。",
    "vocabIndex": 8
  },
  {
    "q": "The bakery display window was filled with round sugar ______ of every color.",
    "options": [
      "continents",
      "discs",
      "donuts",
      "cradles"
    ],
    "answer": 2,
    "cn": "烘焙坊的櫥窗裡擺滿了各種顏色的圓形糖霜甜甜圈。",
    "vocabIndex": 8
  },
  {
    "q": "The spicy Thai soup is flavored with lemongrass and creamy ______.",
    "options": [
      "coconut milk",
      "donut hole",
      "golf course",
      "disc drive"
    ],
    "answer": 0,
    "cn": "這道辛香的泰式酸辣湯是用檸檬草與香濃椰奶調味的。",
    "vocabIndex": 2
  },
  {
    "q": "South America is a beautiful ______ with huge mountains and green rainforests.",
    "options": [
      "cradle",
      "continent",
      "disc",
      "donut"
    ],
    "answer": 1,
    "cn": "南美洲是一座擁有巍峨山脈與綠色雨林的美麗大洲／大陸。",
    "vocabIndex": 3
  },
  {
    "q": "Because of the danger, the factory stores all ______ materials in a separate room.",
    "options": [
      "continental",
      "circular",
      "chopped",
      "explosive"
    ],
    "answer": 3,
    "cn": "出於危險性考量，工廠將所有易爆材料存放於獨立的房間內。"
  },
  {
    "q": "The television video game has ______ in popularity among teenagers this year.",
    "options": [
      "cradled",
      "chopped",
      "exploded",
      "golfed"
    ],
    "answer": 2,
    "cn": "這款電視電玩遊戲今年在青少年間的受歡迎程度激增／爆棚。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "chop": {
    "pos": "v.",
    "en_def": "to cut into pieces with repeated sharp blows of an axe or knife",
    "cn_def": "剁碎；砍；大幅削減（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cut into pieces with repeated sharp blows of an axe or knife",
        "cn_def": "剁碎；砍；大幅削減（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a thick slice of meat, especially pork or lamb, typically including a rib",
        "cn_def": "帶骨肉排；豬排；羊排（可數）"
      }
    ]
  },
  "chops": {
    "pos": "n.",
    "en_def": "a thick slice of meat, especially pork or lamb, typically including a rib",
    "cn_def": "帶骨肉排；豬排；羊排（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thick slice of meat, especially pork or lamb, typically including a rib",
        "cn_def": "帶骨肉排；豬排；羊排（可數）"
      }
    ]
  },
  "coconut": {
    "pos": "n.",
    "en_def": "the large, oval, brown seed of a tropical palm tree with edible white flesh and liquid",
    "cn_def": "椰子；椰肉（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the large, oval, brown seed of a tropical palm tree with edible white flesh and liquid",
        "cn_def": "椰子；椰肉（可數）"
      }
    ]
  },
  "continent": {
    "pos": "n.",
    "en_def": "any of the world's main continuous expanses of land",
    "cn_def": "大陸；洲（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any of the world's main continuous expanses of land",
        "cn_def": "大陸；洲（可數）"
      }
    ]
  },
  "continental": {
    "pos": "adj.",
    "en_def": "forming or belonging to a continent; typical of mainland Europe",
    "cn_def": "大陸的；歐洲大陸風格的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "forming or belonging to a continent; typical of mainland Europe",
        "cn_def": "大陸的；歐洲大陸風格的"
      }
    ]
  },
  "cradle": {
    "pos": "n.",
    "en_def": "a small bed for a baby, especially one that rocks from side to side",
    "cn_def": "搖籃；發源地（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small bed for a baby, especially one that rocks from side to side",
        "cn_def": "搖籃；發源地（可數）"
      }
    ]
  },
  "from cradle to grave": {
    "pos": "phr.",
    "en_def": "from birth to death; throughout the entirety of one's life",
    "cn_def": "從生到死；終生（片語）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "from birth to death; throughout the entirety of one's life",
        "cn_def": "從生到死；終生（片語）"
      }
    ]
  },
  "cradle to grave": {
    "pos": "phr.",
    "en_def": "from birth to death; throughout the entirety of one's life",
    "cn_def": "從生到死；終生（片語）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "from birth to death; throughout the entirety of one's life",
        "cn_def": "從生到死；終生（片語）"
      }
    ]
  },
  "disc": {
    "pos": "n.",
    "en_def": "a flat, thin, circular object or electronic storage medium (also spelled disk)",
    "cn_def": "光碟；圓盤；磁盤（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat, thin, circular object or electronic storage medium (also spelled disk)",
        "cn_def": "光碟；圓盤；磁盤（可數）"
      }
    ]
  },
  "donut": {
    "pos": "n.",
    "en_def": "a small fried cake of sweetened dough, typically in the shape of a ring or ball",
    "cn_def": "甜甜圈（可數，亦拼作 doughnut）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small fried cake of sweetened dough, typically in the shape of a ring or ball",
        "cn_def": "甜甜圈（可數，亦拼作 doughnut）"
      }
    ]
  },
  "explode": {
    "pos": "v.",
    "en_def": "to burst or shatter violently from internal pressure; to increase suddenly",
    "cn_def": "爆炸；破裂；激增（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to burst or shatter violently from internal pressure; to increase suddenly",
        "cn_def": "爆炸；破裂；激增（動詞）"
      }
    ]
  },
  "exploded": {
    "pos": "v.",
    "en_def": "to burst or shatter violently from internal pressure; to increase suddenly",
    "cn_def": "爆炸；破裂；激增（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to burst or shatter violently from internal pressure; to increase suddenly",
        "cn_def": "爆炸；破裂；激增（動詞）"
      }
    ]
  },
  "explosion": {
    "pos": "n.",
    "en_def": "a violent and destructive shattering or blowing apart of something",
    "cn_def": "爆炸；爆發；激增（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a violent and destructive shattering or blowing apart of something",
        "cn_def": "爆炸；爆發；激增（可數）"
      }
    ]
  },
  "golf": {
    "pos": "n.",
    "en_def": "an outdoor game played on a large open-air course with clubs and a small hard ball",
    "cn_def": "高爾夫球運動（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an outdoor game played on a large open-air course with clubs and a small hard ball",
        "cn_def": "高爾夫球運動（不可數）"
      }
    ]
  },
  "golfer": {
    "pos": "n.",
    "en_def": "a person who plays golf, especially professionally or enthusiastically",
    "cn_def": "高爾夫球手；打高爾夫球的人（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who plays golf, especially professionally or enthusiastically",
        "cn_def": "高爾夫球手；打高爾夫球的人（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
