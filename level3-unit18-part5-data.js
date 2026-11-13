// Part 5 Quiz Data: starve – vehicle
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 18-5 - starve – vehicle",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "starve",
    "pos": "v.",
    "cn_def": "挨餓；餓死（動詞）",
    "en_def": "to suffer severely or die from hunger; to be extremely hungry",
    "sentence": "The trapped sailors survived on rainwater and biscuits so they would not {{BLANK}} on the desert island.",
    "cn": "受困的水手靠著雨水和餅乾存活，免於在荒島上挨餓／餓死。"
  },
  {
    "word": "sweat",
    "pos": "n./v.",
    "cn_def": "汗水；流汗；辛苦工作（名詞/動詞）",
    "en_def": "moisture exuded through the pores of the skin; to emit sweat",
    "sentence": "After completing a challenging five-kilometer run in the summer heat, Mark was completely covered in {{BLANK}}.",
    "cn": "在夏日高溫下完成具挑戰性的五公里慢跑後，馬克滿身大汗。"
  },
  {
    "word": "technical",
    "pos": "adj.",
    "cn_def": "技術的；專門性的；技術細節的",
    "en_def": "relating to a particular subject, art, or skill; requiring specialized knowledge",
    "sentence": "If your home computer suddenly freezes or stops working, please call our 24-hour {{BLANK}} support hotline for help.",
    "cn": "如果您的家用電腦突然凍結或停止運作，請致電我們的二十四小時技術支援熱線尋求協助。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術；手法（可數/不可數）",
    "en_def": "a way of carrying out a particular task, especially the execution of an artistic work",
    "sentence": "The professional yoga instructor taught her beginner students a calming breathing {{BLANK}} to relieve daily work stress.",
    "cn": "專業瑜珈教練向初學者傳授了一種平靜身心的呼吸技巧，以緩解日常工作壓力。"
  },
  {
    "word": "tough",
    "pos": "adj.",
    "cn_def": "艱難的；堅韌的；咬不動的",
    "en_def": "strong enough to withstand adverse conditions; difficult to do; difficult to chew",
    "sentence": "The school board of education had to make a very {{BLANK}} decision to cancel all outdoor sports events during the typhoon.",
    "cn": "教育委員會不得不做出一個非常艱難的決定，在颱風期間取消所有戶外體育賽事。"
  },
  {
    "word": "tug",
    "pos": "v./n.",
    "cn_def": "用力拉；拽；拖船（動詞/名詞）",
    "en_def": "to pull something hard or suddenly; a hard, sudden pull",
    "sentence": "Every year during the annual school sports day, students enthusiastically participate in a thrilling {{BLANK}} of war competition.",
    "cn": "每年學校校慶運動會期間，學生們都熱情地參加緊張刺激的拔河比賽。"
  },
  {
    "word": "twin",
    "pos": "n./adj.",
    "cn_def": "雙胞胎之一；成雙的；雙重的",
    "en_def": "one of two children born at the same birth; forming a matching pair",
    "sentence": "The hotel room was furnished with comfortable {{BLANK}} beds and an elegant desk for business travelers.",
    "cn": "飯店客房配有舒適的兩張單人床以及一張適合商務旅客的高雅辦公桌。"
  },
  {
    "word": "vehicles",
    "pos": "n.",
    "cn_def": "車輛；交通工具；傳播媒介（可數）",
    "en_def": "a thing used for transporting people or goods, especially on land",
    "sentence": "Drivers on the highway are legally required to pull over and yield to any flashing emergency {{BLANK}}.",
    "cn": "高速公路上的駕駛人依法必須靠邊停車，禮讓任何閃爍警示燈的緊急救援車輛。"
  }
];

const MCQS = [
  {
    "q": "The lost puppy had no food for three days and was beginning to ______ in the cold forest.",
    "options": [
      "sweat",
      "tug",
      "starve",
      "twin"
    ],
    "answer": 2,
    "cn": "走失的小狗三天沒吃東西，在寒冷的森林裡開始挨餓。",
    "vocabIndex": 0
  },
  {
    "q": "After running for thirty minutes in the hot afternoon sun, water and ______ ran down his face.",
    "options": [
      "twin",
      "vehicle",
      "technique",
      "sweat"
    ],
    "answer": 3,
    "cn": "在炎熱午後陽光下跑了三十分鐘後，水和汗水順著他的臉流了下來。",
    "vocabIndex": 1
  },
  {
    "q": "The swimming coach showed the young girl a special kicking ______ to help her swim faster.",
    "options": [
      "vehicle",
      "technique",
      "sweat",
      "twin"
    ],
    "answer": 1,
    "cn": "游泳教練向小女孩展示了一種特殊的踢水技巧，以幫助她游得更快。",
    "vocabIndex": 3
  },
  {
    "q": "Peter gave the rope a strong ______ and pulled his little brother up from the riverbank.",
    "options": [
      "tug",
      "twin",
      "sweat",
      "vehicle"
    ],
    "answer": 0,
    "cn": "彼得用力拉了一下繩子，把弟弟從小河岸邊拉了上來。",
    "vocabIndex": 5
  },
  {
    "q": "The hotel room has two small ______ beds that are perfect for two friends traveling together.",
    "options": [
      "tough",
      "twin",
      "technical",
      "vehicle"
    ],
    "answer": 1,
    "cn": "飯店房間有兩張單人床（成對的），非常適合結伴旅行的兩位朋友。",
    "vocabIndex": 6
  },
  {
    "q": "Cars, buses, and trucks are all types of ______ that carry people and goods on roads.",
    "options": [
      "techniques",
      "sweats",
      "twins",
      "vehicles"
    ],
    "answer": 3,
    "cn": "汽車、公車與卡車都是在道路上載運人員和貨物的車輛／交通工具。",
    "vocabIndex": 7
  },
  {
    "q": "This beef is very ______ and difficult to chew because the cook cooked it for too long.",
    "options": [
      "tough",
      "twin",
      "technical",
      "vehicle"
    ],
    "answer": 0,
    "cn": "這牛肉非常硬韌難嚼，因為廚師煮得太久了。",
    "vocabIndex": 4
  },
  {
    "q": "The math exam was so ______ that only three students in our class passed it.",
    "options": [
      "technical",
      "twin",
      "tough",
      "vehicle"
    ],
    "answer": 2,
    "cn": "這場數學考試非常困難棘手，我們班只有三名學生及格。",
    "vocabIndex": 4
  },
  {
    "q": "If your internet stops working, you can call the office for ______ support and advice.",
    "options": [
      "tough",
      "technical",
      "twin",
      "vehicle"
    ],
    "answer": 1,
    "cn": "如果你的網路停止運作，你可以打電話給辦公室尋求技術上的支援與建議。",
    "vocabIndex": 2
  },
  {
    "q": "The toddler began to ______ on his mother's skirt because he wanted to buy some candy.",
    "options": [
      "starve",
      "sweat",
      "twin",
      "tug"
    ],
    "answer": 3,
    "cn": "那個學步幼童開始拉扯／拽母親的裙子，因為他想買糖果。",
    "vocabIndex": 5
  },
  {
    "q": "During the hot summer afternoon, the workers ______ a lot while building the garden fence.",
    "options": [
      "sweated",
      "starved",
      "tugged",
      "twinned"
    ],
    "answer": 0,
    "cn": "在炎熱的夏日午後，工人們在建造花園柵欄時流了很多汗。",
    "vocabIndex": 1
  },
  {
    "q": "The mother was worried that her sick child would ______ if he did not eat any soup.",
    "options": [
      "tug",
      "sweat",
      "starve",
      "twin"
    ],
    "answer": 2,
    "cn": "母親擔心她生病的孩子如果不喝任何湯會挨餓。",
    "vocabIndex": 0
  },
  {
    "q": "Both of the ______ brothers love playing basketball and look exactly like their father.",
    "options": [
      "tough",
      "twin",
      "technical",
      "vehicle"
    ],
    "answer": 1,
    "cn": "這對雙胞胎兄弟都喜歡打籃球，而且長得和父親一模一樣。",
    "vocabIndex": 6
  },
  {
    "q": "The turtle has a hard and ______ shell that protects its soft body from enemies.",
    "options": [
      "technical",
      "vehicle",
      "twin",
      "tough"
    ],
    "answer": 3,
    "cn": "烏龜有著堅硬且堅韌頑強的外殼，保護其柔軟的身體不受敵人傷害。",
    "vocabIndex": 4
  },
  {
    "q": "The young girl gave her father's hand a gentle ______ to show him the cute puppy.",
    "options": [
      "tug",
      "twin",
      "sweat",
      "vehicle"
    ],
    "answer": 0,
    "cn": "小女孩輕輕拽了拽／拉了拉父親的手，給他看那隻可愛的小狗。",
    "vocabIndex": 5
  },
  {
    "q": "We skipped breakfast and walked all morning, so now everyone in the group is ______.",
    "options": [
      "technical",
      "sweaty",
      "starving",
      "tough"
    ],
    "answer": 2,
    "cn": "我們沒吃早餐且走了一整個上午，所以現在隊伍裡的每個人都快餓扁了。",
    "vocabIndex": 0
  },
  {
    "q": "After carrying the heavy boxes up the stairs, Ken's shirt was completely ______.",
    "options": [
      "starving",
      "tough",
      "technical",
      "sweaty"
    ],
    "answer": 3,
    "cn": "把沉重的箱子搬上樓梯後，肯恩的襯衫完全被汗水浸濕了。",
    "vocabIndex": 1
  },
  {
    "q": "When Jack asked for help with his homework, his clever sister smiled and said, \"______!\"",
    "options": [
      "Tug of war",
      "No sweat",
      "Electric vehicle",
      "Technical terms"
    ],
    "answer": 1,
    "cn": "當傑克請求作業協助時，他聰明的姐姐微笑著說：「小事一樁／沒問題！」",
    "vocabIndex": 1
  },
  {
    "q": "During the school sports meeting, the two strongest classes competed in a loud ______.",
    "options": [
      "no sweat",
      "technical term",
      "tug of war",
      "twin bed"
    ],
    "answer": 2,
    "cn": "在校園運動會期間，兩個實力最強的班級在喧鬧的拔河比賽中競爭。",
    "vocabIndex": 5
  },
  {
    "q": "The sad story about the sick dog really ______ of all the kind people in the audience.",
    "options": [
      "tugged at the heartstrings",
      "sweated like a pig",
      "starved to death",
      "drove a vehicle"
    ],
    "answer": 0,
    "cn": "那個關於生病小狗的悲傷故事深深觸動了在場所有善心人士的心弦。"
  },
  {
    "q": "More people today choose to drive an ______ to save gasoline and protect the environment.",
    "options": [
      "technical support",
      "identical twin",
      "emergency vehicle",
      "electric vehicle"
    ],
    "answer": 3,
    "cn": "現今有更多人選擇駕駛電動車，以節省汽油並保護環境。",
    "vocabIndex": 7
  },
  {
    "q": "When the ambulance sirens ring, drivers must move aside to let the ______ pass.",
    "options": [
      "identical twin",
      "emergency vehicle",
      "breathing technique",
      "tough decision"
    ],
    "answer": 1,
    "cn": "當救護車警笛響起時，駕駛人必須移到路旁讓緊急救援車輛通過。",
    "vocabIndex": 7
  },
  {
    "q": "The doctor taught the nervous patient a simple ______ to stay calm before the surgery.",
    "options": [
      "tough decision",
      "twin bed",
      "breathing technique",
      "motor vehicle"
    ],
    "answer": 2,
    "cn": "醫生教導緊張的病患一套簡單的呼吸技巧，以便在手術前保持鎮靜。",
    "vocabIndex": 3
  },
  {
    "q": "Leaving his hometown to study in another country was a very ______ for the young student.",
    "options": [
      "tough decision",
      "twin bed",
      "breathing technique",
      "technical support"
    ],
    "answer": 0,
    "cn": "離開家鄉去另一個國家留學，對那位年輕學生而言是一個非常艱難的抉擇。",
    "vocabIndex": 4
  },
  {
    "q": "Because it was thirty-five degrees outside, the runners were ______ after crossing the finish line.",
    "options": [
      "starving to death",
      "sweating like pigs",
      "tugging at heartstrings",
      "driving vehicles"
    ],
    "answer": 1,
    "cn": "因為外面氣溫高達三十五度，跑者們衝過終點線後個個汗如雨下／渾身是汗。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "starve": {
    "pos": "v.",
    "en_def": "to suffer severely or die from hunger; to be extremely hungry",
    "cn_def": "挨餓；餓死（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suffer severely or die from hunger; to be extremely hungry",
        "cn_def": "挨餓；餓死（動詞）"
      }
    ]
  },
  "sweat": {
    "pos": "n./v.",
    "en_def": "moisture exuded through the pores of the skin; to emit sweat",
    "cn_def": "汗水；流汗；辛苦工作（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "moisture exuded through the pores of the skin; to emit sweat",
        "cn_def": "汗水；流汗；辛苦工作（名詞/動詞）"
      }
    ]
  },
  "technical": {
    "pos": "adj.",
    "en_def": "relating to a particular subject, art, or skill; requiring specialized knowledge",
    "cn_def": "技術的；專門性的；技術細節的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a particular subject, art, or skill; requiring specialized knowledge",
        "cn_def": "技術的；專門性的；技術細節的"
      }
    ]
  },
  "technique": {
    "pos": "n.",
    "en_def": "a way of carrying out a particular task, especially the execution of an artistic work",
    "cn_def": "技巧；技術；手法（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of carrying out a particular task, especially the execution of an artistic work",
        "cn_def": "技巧；技術；手法（可數/不可數）"
      }
    ]
  },
  "tough": {
    "pos": "adj.",
    "en_def": "strong enough to withstand adverse conditions; difficult to do; difficult to chew",
    "cn_def": "艱難的；堅韌的；咬不動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strong enough to withstand adverse conditions; difficult to do; difficult to chew",
        "cn_def": "艱難的；堅韌的；咬不動的"
      }
    ]
  },
  "tug": {
    "pos": "v./n.",
    "en_def": "to pull something hard or suddenly; a hard, sudden pull",
    "cn_def": "用力拉；拽；拖船（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to pull something hard or suddenly; a hard, sudden pull",
        "cn_def": "用力拉；拽；拖船（動詞/名詞）"
      }
    ]
  },
  "twin": {
    "pos": "n./adj.",
    "en_def": "one of two children born at the same birth; forming a matching pair",
    "cn_def": "雙胞胎之一；成雙的；雙重的",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "one of two children born at the same birth; forming a matching pair",
        "cn_def": "雙胞胎之一；成雙的；雙重的"
      }
    ]
  },
  "vehicles": {
    "pos": "n.",
    "en_def": "a thing used for transporting people or goods, especially on land",
    "cn_def": "車輛；交通工具；傳播媒介（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing used for transporting people or goods, especially on land",
        "cn_def": "車輛；交通工具；傳播媒介（可數）"
      }
    ]
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a thing used for transporting people or goods, especially on land",
    "cn_def": "車輛；交通工具；傳播媒介（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing used for transporting people or goods, especially on land",
        "cn_def": "車輛；交通工具；傳播媒介（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
