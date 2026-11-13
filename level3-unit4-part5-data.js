// Part 5 Quiz Data: scholar – territory
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 4-5 - scholar – territory",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "scholar",
    "pos": "n.",
    "cn_def": "學者；學術研究者（可數）",
    "en_def": "a specialist in a particular branch of study; a distinguished academic",
    "sentence": "The respected ancient {{BLANK}} Confucius taught profound lessons about moral honor, family filial piety, and civic virtue.",
    "cn": "受人尊敬的古代學者孔子講授了關於道德榮譽、家庭孝道與公民美德的深刻教誨。"
  },
  {
    "word": "scholarship",
    "pos": "n.",
    "cn_def": "獎學金；學術成就（可數/不可數）",
    "en_def": "a grant or payment made to support a student's education; academic study",
    "sentence": "Because of her exceptional performance in high school athletics, Ann was awarded a full college sports {{BLANK}}.",
    "cn": "由於她在高中體育競賽中的傑出表現，安獲頒了大學全額體育獎學金。"
  },
  {
    "word": "separation",
    "pos": "n.",
    "cn_def": "分開；分離；分居；隔離（可數/不可數）",
    "en_def": "the action or state of moving or being moved apart; division",
    "sentence": "The constitution guarantees a clear {{BLANK}} of powers among the legislative, executive, and judicial government branches.",
    "cn": "憲法保障立法、行政與司法政府部門之間明確的分立／分權。"
  },
  {
    "word": "separated",
    "pos": "v.",
    "cn_def": "分隔；分開；使分離（動詞）",
    "en_def": "to cause to move or be apart; to divide into constituent parts",
    "sentence": "The kindergarten teacher gently {{BLANK}} the two arguing children and asked them to play peacefully.",
    "cn": "幼兒園老師輕輕地把兩個爭吵的孩子分開，並要求他們和睦玩耍。"
  },
  {
    "word": "separate",
    "pos": "adj.",
    "cn_def": "分開的；各自的；獨立的",
    "en_def": "forming or viewed as a unit by itself; distinct",
    "sentence": "The twin brothers decided it was time to sleep in {{BLANK}} bedrooms as they grew into teenagers.",
    "cn": "這對雙胞胎兄弟隨著成長為青少年，決定是時候睡在各自獨立的臥室裡了。"
  },
  {
    "word": "spin",
    "pos": "v.",
    "cn_def": "旋轉；紡紗；紡織（動詞）",
    "en_def": "to turn or cause to turn around rapidly on an axis; to draw out and twist fibers into yarn",
    "sentence": "The graceful ice skater began to {{BLANK}} rapidly on one foot in the center of the rink.",
    "cn": "那位優雅的花式滑冰運動員開始在溜冰場中央單腳快速旋轉。"
  },
  {
    "word": "spin",
    "pos": "n.",
    "cn_def": "旋轉；兜風（可數）",
    "en_def": "a rapid turning movement; a brief drive in a motor vehicle for pleasure",
    "sentence": "George proudly invited his best friend to hop into his shiny convertible and take it for a {{BLANK}} down the coast.",
    "cn": "喬治自豪地邀請摯友跳上他閃亮的敞篷車，沿著海岸兜風一圈。"
  },
  {
    "word": "sufficient",
    "pos": "adj.",
    "cn_def": "充足的；足夠的",
    "en_def": "enough; adequate for the purpose or need",
    "sentence": "The emergency relief organization delivered {{BLANK}} food and clean bottled water to supply the refugee camp for months.",
    "cn": "緊急救援組織運送了充足的糧食與乾淨瓶裝水，足以供應難民營數月之久。"
  },
  {
    "word": "self-sufficient",
    "pos": "adj.",
    "cn_def": "自給自足的；獨立自主的",
    "en_def": "needing no outside help in satisfying one's basic needs",
    "sentence": "By installing rooftop solar panels and growing organic vegetables, the eco-friendly family became completely {{BLANK}} in energy and food.",
    "cn": "透過安裝屋頂太陽能板與種植有機蔬菜，這個環保家庭在能源與糧食上達到了完全自給自足。"
  },
  {
    "word": "tank",
    "pos": "n.",
    "cn_def": "大水槽；油箱；坦克車（可數）",
    "en_def": "a large container for holding liquid or gas; a heavy armored military combat vehicle",
    "sentence": "Before embarking on our long road trip across the desert, Dad pulled into the station to fill up the car's fuel {{BLANK}}.",
    "cn": "在踏上穿越沙漠的長途公路旅行之前，爸爸把車開進加油站把車子的油箱加滿。"
  },
  {
    "word": "temper",
    "pos": "n.",
    "cn_def": "脾氣；情緒（可數/不可數）",
    "en_def": "a person's state of mind seen in terms of their being angry or calm",
    "sentence": "Although Mr. Harris is usually patient, he completely lost his {{BLANK}} when the careless driver crashed into his mailbox.",
    "cn": "雖然哈里斯先生平時很有耐心，但當粗心的駕駛人撞壞他的信箱時，他完全發了脾氣／大發雷霆。"
  },
  {
    "word": "territory",
    "pos": "n.",
    "cn_def": "領土；領地；地盤；領域（可數/不可數）",
    "en_def": "an area of land under the jurisdiction of a ruler or state; an area defended by an animal",
    "sentence": "Fierce male wolves constantly patrol their forest boundaries and spray scent to mark their pack's {{BLANK}}.",
    "cn": "凶猛的公狼經常在森林邊界巡邏並噴灑氣味以標記狼群的領地／地盤。"
  }
];

const MCQS = [
  {
    "q": "The ancient Greek ______ wrote many famous books about mathematics, stars, and philosophy.",
    "options": [
      "tank",
      "scholar",
      "temper",
      "separation"
    ],
    "answer": 1,
    "cn": "古代希臘學者寫下了許多關於數學、星象與哲學的著名著作。",
    "vocabIndex": 0
  },
  {
    "q": "Because Amy got top scores on all her exams, the university gave her a college ______.",
    "options": [
      "tank",
      "territory",
      "temper",
      "scholarship"
    ],
    "answer": 3,
    "cn": "因為艾米在所有考試中都獲得最高分，大學給了她一筆大學獎學金。",
    "vocabIndex": 1
  },
  {
    "q": "The soldiers guarded the national border to protect their country's land and ______.",
    "options": [
      "temper",
      "tank",
      "territory",
      "scholar"
    ],
    "answer": 2,
    "cn": "士兵們守衛國家邊界，以保護他們的國土與領土／地盤。",
    "vocabIndex": 11
  },
  {
    "q": "The driver stopped at the gas station to fill up the car's fuel ______ before heading home.",
    "options": [
      "tank",
      "separation",
      "temper",
      "scholar"
    ],
    "answer": 0,
    "cn": "司機在回家前停在加油站把車子的燃油箱加滿。",
    "vocabIndex": 9
  },
  {
    "q": "Even when he is angry, my calm father never shouts or loses his ______.",
    "options": [
      "scholar",
      "territory",
      "temper",
      "tank"
    ],
    "answer": 2,
    "cn": "即使在生氣時，我沉著的父親也從不大喊大叫或發脾氣。",
    "vocabIndex": 10
  },
  {
    "q": "After months of traveling far from home, the sad soldier felt the pain of ______ from his family.",
    "options": [
      "separation",
      "tank",
      "scholar",
      "temper"
    ],
    "answer": 0,
    "cn": "離家遠行數月後，那位悲傷的士兵感受到了與家人分離的痛苦。",
    "vocabIndex": 2
  },
  {
    "q": "The little colorful fish swam happily inside the glass ______ on the table.",
    "options": [
      "scholar",
      "temper",
      "separation",
      "tank"
    ],
    "answer": 3,
    "cn": "那條色彩斑斕的小魚在桌上的玻璃水族箱裡快樂地游著。",
    "vocabIndex": 9
  },
  {
    "q": "Wolves leave their scent on trees to tell other wild animals not to enter their pack's ______.",
    "options": [
      "scholar",
      "territory",
      "tank",
      "temper"
    ],
    "answer": 1,
    "cn": "狼在樹上留下氣味，以告誡其他野生動物不要進入牠們狼群的領地／地盤。",
    "vocabIndex": 11
  },
  {
    "q": "The dancer did a fast, beautiful ______ on one foot before stopping gracefully on stage.",
    "options": [
      "tank",
      "scholar",
      "spin",
      "temper"
    ],
    "answer": 2,
    "cn": "舞者在舞台上優雅地停下之前，單腳完成了一次快速且美麗的旋轉。",
    "vocabIndex": 5
  },
  {
    "q": "We bought ______ food and juice so that every guest at the birthday party could eat well.",
    "options": [
      "sufficient",
      "separate",
      "spun",
      "odd"
    ],
    "answer": 0,
    "cn": "我們買了充足的食物和果汁，讓生日派對上的每位客人都能吃飽喝足。",
    "vocabIndex": 7
  },
  {
    "q": "The brothers decided to sleep in ______ beds so they would have more personal space.",
    "options": [
      "sufficient",
      "separate",
      "spun",
      "odd"
    ],
    "answer": 1,
    "cn": "兄弟倆決定睡在各自獨立分開的床上，這樣他們會有更多的個人空間。",
    "vocabIndex": 3
  },
  {
    "q": "By growing all their own vegetables and raising hens, the farm family was completely ______.",
    "options": [
      "separate",
      "spun",
      "odd",
      "self-sufficient"
    ],
    "answer": 3,
    "cn": "透過自己種植所有蔬菜和飼養母雞，這個農場家庭達到了完全自給自足。",
    "vocabIndex": 8
  },
  {
    "q": "There is ______ drinking water in our large bottle to last throughout the five-hour hike.",
    "options": [
      "spun",
      "separate",
      "sufficient",
      "odd"
    ],
    "answer": 2,
    "cn": "我們的大水壺裡有足夠的飲用水，足以支撐整個五小時的健行。",
    "vocabIndex": 7
  },
  {
    "q": "The children sat at ______ desks so they would not talk to each other during the quiet exam.",
    "options": [
      "separate",
      "spun",
      "odd",
      "sufficient"
    ],
    "answer": 0,
    "cn": "孩子們坐在分開的書桌前，這樣在安靜的考試期間他們就不會相互交談。",
    "vocabIndex": 3
  },
  {
    "q": "A strong high fence ______ our backyard from the neighbor's garden.",
    "options": [
      "risks",
      "spins",
      "ranks",
      "separates"
    ],
    "answer": 3,
    "cn": "一道堅固的高籬笆將我們的後院與鄰居的花園分隔開來。",
    "vocabIndex": 3
  },
  {
    "q": "The wind was blowing so fast that the toy pinwheel began to ______ around and around.",
    "options": [
      "separate",
      "spin",
      "resist",
      "rank"
    ],
    "answer": 1,
    "cn": "風吹得非常快，玩具風車開始轉啊轉地快速旋轉。",
    "vocabIndex": 5
  },
  {
    "q": "Old village women used a wooden wheel to ______ raw sheep wool into warm clothing yarn.",
    "options": [
      "spin",
      "resist",
      "separate",
      "rank"
    ],
    "answer": 0,
    "cn": "古老鄉村的婦女使用木製紡車將天然羊毛紡成保暖的衣物毛線。",
    "vocabIndex": 5
  },
  {
    "q": "The teacher had to ______ the two fighting boys and make them sit in different corners.",
    "options": [
      "spin",
      "resist",
      "rank",
      "separate"
    ],
    "answer": 3,
    "cn": "老師不得不將那兩個打架的男孩分開，並讓他們坐在不同的角落。",
    "vocabIndex": 3
  },
  {
    "q": "My uncle fixed my bicycle pedal, and now the back wheel ______ smoothly and quietly.",
    "options": [
      "ranks",
      "spins",
      "resists",
      "separates"
    ],
    "answer": 1,
    "cn": "我叔叔修好了我的自行車踏板，現在後輪旋轉得平穩且安靜。",
    "vocabIndex": 5
  },
  {
    "q": "Please ______ the red apples from the green ones and put them into different baskets.",
    "options": [
      "resist",
      "spin",
      "separate",
      "rank"
    ],
    "answer": 2,
    "cn": "請把紅蘋果和青蘋果分開，分別放進不同的籃子裡。",
    "vocabIndex": 3
  },
  {
    "q": "When Ken saw that his new bicycle had been stolen, he completely ______ and screamed.",
    "options": [
      "took a risk",
      "lost his temper",
      "bundled up",
      "beat around the bush"
    ],
    "answer": 1,
    "cn": "當肯恩看到他的新自行車被偷時，他徹底大發雷霆／發脾氣並大叫。",
    "vocabIndex": 10
  },
  {
    "q": "Dad bought a new sports car and asked if I wanted to take it ______ along the highway.",
    "options": [
      "for a spin",
      "in exchange for",
      "at first glance",
      "beat around the bush"
    ],
    "answer": 0,
    "cn": "爸爸買了一輛新跑車，問我想不想沿著公路兜風一趟。",
    "vocabIndex": 5
  },
  {
    "q": "Dealing with rainy days during summer camping trips simply ______.",
    "options": [
      "beats around the bush",
      "bundles up",
      "comes with the territory",
      "in exchange for"
    ],
    "answer": 2,
    "cn": "在夏季露營旅行中遇到下雨天純粹是在所難免／常有的事。",
    "vocabIndex": 11
  },
  {
    "q": "Try to stay calm and do not ______ even when other people disagree with you.",
    "options": [
      "come with the territory",
      "take a risk",
      "bundle up",
      "lose your temper"
    ],
    "answer": 3,
    "cn": "即使別人不同意你的看法，也請盡量保持冷靜，不要發脾氣。",
    "vocabIndex": 10
  },
  {
    "q": "Uncle George let me take his brand-new riding lawnmower ______ around the yard.",
    "options": [
      "in exchange for",
      "for a spin",
      "beat around the bush",
      "at first glance"
    ],
    "answer": 1,
    "cn": "喬治叔叔讓我開著他的全新座駕割草機在院子裡兜了一圈。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "scholar": {
    "pos": "n.",
    "en_def": "a specialist in a particular branch of study; a distinguished academic",
    "cn_def": "學者；學術研究者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specialist in a particular branch of study; a distinguished academic",
        "cn_def": "學者；學術研究者（可數）"
      }
    ]
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "a grant or payment made to support a student's education; academic study",
    "cn_def": "獎學金；學術成就（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a grant or payment made to support a student's education; academic study",
        "cn_def": "獎學金；學術成就（可數/不可數）"
      }
    ]
  },
  "separation": {
    "pos": "n.",
    "en_def": "the action or state of moving or being moved apart; division",
    "cn_def": "分開；分離；分居；隔離（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or state of moving or being moved apart; division",
        "cn_def": "分開；分離；分居；隔離（可數/不可數）"
      }
    ]
  },
  "separated": {
    "pos": "v.",
    "en_def": "to cause to move or be apart; to divide into constituent parts",
    "cn_def": "分隔；分開；使分離（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause to move or be apart; to divide into constituent parts",
        "cn_def": "分隔；分開；使分離（動詞）"
      }
    ]
  },
  "separate": {
    "pos": "v.",
    "en_def": "to cause to move or be apart; to divide into constituent parts",
    "cn_def": "分隔；分開；使分離（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause to move or be apart; to divide into constituent parts",
        "cn_def": "分隔；分開；使分離（動詞）"
      },
      {
        "pos": "adj.",
        "en_def": "forming or viewed as a unit by itself; distinct",
        "cn_def": "分開的；各自的；獨立的"
      }
    ]
  },
  "spin": {
    "pos": "v.",
    "en_def": "to turn or cause to turn around rapidly on an axis; to draw out and twist fibers into yarn",
    "cn_def": "旋轉；紡紗；紡織（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to turn or cause to turn around rapidly on an axis; to draw out and twist fibers into yarn",
        "cn_def": "旋轉；紡紗；紡織（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a rapid turning movement; a brief drive in a motor vehicle for pleasure",
        "cn_def": "旋轉；兜風（可數）"
      }
    ]
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough; adequate for the purpose or need",
    "cn_def": "充足的；足夠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "enough; adequate for the purpose or need",
        "cn_def": "充足的；足夠的"
      }
    ]
  },
  "self-sufficient": {
    "pos": "adj.",
    "en_def": "needing no outside help in satisfying one's basic needs",
    "cn_def": "自給自足的；獨立自主的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "needing no outside help in satisfying one's basic needs",
        "cn_def": "自給自足的；獨立自主的"
      }
    ]
  },
  "tank": {
    "pos": "n.",
    "en_def": "a large container for holding liquid or gas; a heavy armored military combat vehicle",
    "cn_def": "大水槽；油箱；坦克車（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large container for holding liquid or gas; a heavy armored military combat vehicle",
        "cn_def": "大水槽；油箱；坦克車（可數）"
      }
    ]
  },
  "temper": {
    "pos": "n.",
    "en_def": "a person's state of mind seen in terms of their being angry or calm",
    "cn_def": "脾氣；情緒（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person's state of mind seen in terms of their being angry or calm",
        "cn_def": "脾氣；情緒（可數/不可數）"
      }
    ]
  },
  "territory": {
    "pos": "n.",
    "en_def": "an area of land under the jurisdiction of a ruler or state; an area defended by an animal",
    "cn_def": "領土；領地；地盤；領域（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of land under the jurisdiction of a ruler or state; an area defended by an animal",
        "cn_def": "領土；領地；地盤；領域（可數/不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
