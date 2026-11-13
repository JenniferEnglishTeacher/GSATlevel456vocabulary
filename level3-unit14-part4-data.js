// Part 4 Quiz Data: plug – stormy
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 14-4 - plug – stormy",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "plug",
    "pos": "n.",
    "cn_def": "插頭；塞子（可數）",
    "en_def": "an electrical connector inserted into a socket; a rubber stopper for a sink or bathtub",
    "sentence": "Be sure to hold the plastic base firmly rather than yanking the wire when pulling the {{BLANK}} from the wall.",
    "cn": "從牆上拔出插頭時，務必牢牢握住塑膠底座，而不是猛拉電線。"
  },
  {
    "word": "plug",
    "pos": "v.",
    "cn_def": "插入插頭；堵塞；推銷（動詞）",
    "en_def": "to insert an electrical plug into a socket; to block an opening",
    "sentence": "I need to find an empty electrical outlet to {{BLANK}} in my laptop before the battery completely dies.",
    "cn": "在電池完全沒電之前，我需要找到一個空的電源插座來插上我的筆記型電腦。"
  },
  {
    "word": "recognized",
    "pos": "v.",
    "cn_def": "認出；承認；表彰（動詞）",
    "en_def": "to identify someone or something from previous encounter or knowledge",
    "sentence": "Although thirty years had passed since graduation, David easily {{BLANK}} his high school classmate in the crowd.",
    "cn": "儘管畢業後已經過了三十年，大衛仍在人群中輕易認出了他的高中同學。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認出；認可；讚譽（不可數）",
    "en_def": "identification of a person or thing; appreciation or acclaim",
    "sentence": "After the massive storm swept through the town, the historic seaside streets were damaged beyond {{BLANK}}.",
    "cn": "在猛烈的暴風雨橫掃小鎮之後，歷史悠久的海濱街道受損嚴重至無法辨認／面目全非。"
  },
  {
    "word": "remain",
    "pos": "v.",
    "cn_def": "保持；依然存在；留下（動詞）",
    "en_def": "to continue to exist, or stay in the same condition or place",
    "sentence": "Flight attendants gently reminded all passengers to {{BLANK}} seated with their seatbelts fastened until the plane stopped.",
    "cn": "空服員親切地提醒所有乘客保持就坐並繫緊安全帶，直到飛機完全停穩。"
  },
  {
    "word": "robe",
    "pos": "n.",
    "cn_def": "長袍；浴袍；禮袍（可數）",
    "en_def": "a loose outer garment reaching to the ankles, worn for warmth or ceremonies",
    "sentence": "After stepping out of the steamy shower on a freezing winter evening, Martha put on a warm, fluffy {{BLANK}}.",
    "cn": "在寒冷的冬日夜晚走出冒著熱氣的淋浴間後，瑪莎穿上了一件保暖且柔軟的浴袍。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；由衷的",
    "en_def": "free from pretense or deceit; proceeding from genuine feelings",
    "sentence": "When the young clerk realized his clerical mistake, he offered a deeply {{BLANK}} apology to the customer.",
    "cn": "當那位年輕店員意識到自己的文書錯誤時，他向顧客表達了深深的真誠歉意。"
  },
  {
    "word": "snap",
    "pos": "v.",
    "cn_def": "突然折斷；拍照；猛咬（動詞）",
    "en_def": "to break suddenly with a sharp crack; to take a quick photo",
    "sentence": "The heavy weight of the winter snow caused several dry tree branches to {{BLANK}} loudly in half.",
    "cn": "冬雪的沉重重量導致幾根乾枯的樹枝發出清脆的聲響並折成兩半。"
  },
  {
    "word": "stomach",
    "pos": "n.",
    "cn_def": "胃；腹部（可數）",
    "en_def": "the internal organ in which the major part of food digestion occurs",
    "sentence": "Doctors advise that you should avoid drinking strong black coffee on an entirely empty {{BLANK}}.",
    "cn": "醫生建議你應該避免在完全空腹／胃的情況下飲用濃黑咖啡。"
  },
  {
    "word": "stormy",
    "pos": "adj.",
    "cn_def": "暴風雨的；激烈的；動盪的",
    "en_def": "characterized by violent weather with strong winds, rain, or thunder",
    "sentence": "The fishing harbor prohibited all small wooden boats from departing due to the dangerous {{BLANK}} weather.",
    "cn": "由於危險的暴風雨天氣，漁港禁止所有小型木船出海。"
  }
];

const MCQS = [
  {
    "q": "Before leaving the hotel room, make sure you unplug your phone charger from the wall ______.",
    "options": [
      "stomach",
      "robe",
      "plug",
      "snap"
    ],
    "answer": 2,
    "cn": "離開飯店房間之前，請確保將手機充電器從牆上的插座／插頭拔下。",
    "vocabIndex": 0
  },
  {
    "q": "After taking a warm shower, Grandma put on a soft and comfortable ______ to stay warm.",
    "options": [
      "plug",
      "robe",
      "stomach",
      "recognition"
    ],
    "answer": 1,
    "cn": "洗完溫水澡後，祖母穿上了一件柔軟舒適的浴袍以保持溫暖。",
    "vocabIndex": 5
  },
  {
    "q": "Running on an empty ______ in the morning made the student feel weak and tired.",
    "options": [
      "stomach",
      "robe",
      "plug",
      "snap"
    ],
    "answer": 0,
    "cn": "清晨空腹／肚子跑步讓這名學生感到虛弱與疲倦。",
    "vocabIndex": 8
  },
  {
    "q": "The scientist received national ______ for discovering a new cure for the disease.",
    "options": [
      "plug",
      "robe",
      "stomach",
      "recognition"
    ],
    "answer": 3,
    "cn": "那位科學家因發現該疾病的新療法而獲得了全國的認可與表彰。",
    "vocabIndex": 3
  },
  {
    "q": "I did not ______ my kindergarten teacher when I met her at the supermarket yesterday.",
    "options": [
      "recognize",
      "remain",
      "snap",
      "plug"
    ],
    "answer": 0,
    "cn": "昨天在超市遇見幼兒園老師時，我一開始沒有認出她。",
    "vocabIndex": 2
  },
  {
    "q": "Passengers must ______ seated with their seatbelts fastened while the bus is moving.",
    "options": [
      "snap",
      "plug",
      "recognize",
      "remain"
    ],
    "answer": 3,
    "cn": "當公車行駛時，乘客必須保持就坐並繫好安全帶。",
    "vocabIndex": 4
  },
  {
    "q": "The dry twig ______ in half with a loud crack when Jack stepped on it.",
    "options": [
      "recognized",
      "remained",
      "snapped",
      "plugged"
    ],
    "answer": 2,
    "cn": "當傑克踩在乾樹枝上時，它發出清脆的響聲並折斷成兩半。",
    "vocabIndex": 7
  },
  {
    "q": "Please remember to ______ in the computer cord so the battery can charge.",
    "options": [
      "recognize",
      "plug",
      "snap",
      "remain"
    ],
    "answer": 1,
    "cn": "請記得把電腦電線插進電源以便電池能夠充電。",
    "vocabIndex": 0
  },
  {
    "q": "David gave a ______ apology to his friend for accidentally breaking the toy.",
    "options": [
      "sincere",
      "stormy",
      "plugged",
      "snapped"
    ],
    "answer": 0,
    "cn": "大衛為不小心打破玩具向朋友作出了真誠的道歉。",
    "vocabIndex": 6
  },
  {
    "q": "We stayed inside our house all day because of the cold and ______ weather.",
    "options": [
      "sincere",
      "remaining",
      "recognized",
      "stormy"
    ],
    "answer": 3,
    "cn": "因為寒冷且暴風雨的天氣，我們一整天都待在屋子裡。",
    "vocabIndex": 9
  },
  {
    "q": "The tourist used his smartphone camera to ______ a lovely photo of the sunset.",
    "options": [
      "remain",
      "recognize",
      "snap",
      "plug"
    ],
    "answer": 2,
    "cn": "遊客用智慧型手機相機拍攝了一張夕陽的美照。",
    "vocabIndex": 7
  },
  {
    "q": "Even though everyone was shouting, the smart student ______ quiet and focused.",
    "options": [
      "plugged",
      "remained",
      "recognized",
      "snapped"
    ],
    "answer": 1,
    "cn": "儘管每個人都在大喊大叫，那位聰明的學生依然保持安靜與專注。",
    "vocabIndex": 4
  },
  {
    "q": "The puppy was so small that its face was easy to ______ among the group.",
    "options": [
      "snap",
      "remain",
      "recognize",
      "plug"
    ],
    "answer": 2,
    "cn": "那隻小狗體型非常嬌小，在狗群中很容易認出牠的臉。",
    "vocabIndex": 2
  },
  {
    "q": "Before leaving the kitchen, please ______ the toaster to save electricity.",
    "options": [
      "remain",
      "unplug",
      "snap",
      "recognize"
    ],
    "answer": 1,
    "cn": "離開廚房之前，請拔掉烤麵包機的插頭以節省電力。"
  },
  {
    "q": "A warm bath and a cup of mint tea can help settle an upset ______.",
    "options": [
      "stomach",
      "plug",
      "robe",
      "recognition"
    ],
    "answer": 0,
    "cn": "泡個熱水澡並喝杯薄荷茶可以幫助舒緩不舒服的胃／肚子。",
    "vocabIndex": 8
  },
  {
    "q": "The hotel bathroom provided a clean white ______ hanging on the door.",
    "options": [
      "plug",
      "recognition",
      "stomach",
      "robe"
    ],
    "answer": 3,
    "cn": "飯店浴室提供了一件掛在門上的乾淨白色浴袍。",
    "vocabIndex": 5
  },
  {
    "q": "His smile looked completely ______ when he thanked us for the surprise gift.",
    "options": [
      "stormy",
      "sincere",
      "plugged",
      "snapped"
    ],
    "answer": 1,
    "cn": "當他感謝我們送的驚喜禮物時，他的笑容看起來非常真誠由衷。",
    "vocabIndex": 6
  },
  {
    "q": "The fishing boats returned to the harbor quickly to escape the ______ waves.",
    "options": [
      "recognized",
      "sincere",
      "stormy",
      "plugged"
    ],
    "answer": 2,
    "cn": "漁船迅速返回海港，以逃避洶湧暴風雨的海浪。",
    "vocabIndex": 9
  },
  {
    "q": "Wearing soft ______ while flying on an airplane can help block noisy engine sounds.",
    "options": [
      "earplugs",
      "stomachs",
      "robes",
      "recognitions"
    ],
    "answer": 0,
    "cn": "在飛機飛行時佩戴柔軟的耳塞可以幫助隔絕嘈雜的引擎聲音。"
  },
  {
    "q": "The town changed so much over forty years that it was damaged ______.",
    "options": [
      "in stormy weather",
      "in a bathrobe",
      "on an empty stomach",
      "beyond recognition"
    ],
    "answer": 3,
    "cn": "四十年來這個小鎮變化太大了，以至於變得面目全非／無法辨認。",
    "vocabIndex": 3
  },
  {
    "q": "Shoppers rushed to the mall on Black Friday to ______ all the cheap television sets.",
    "options": [
      "remain calm",
      "plug in",
      "snap up",
      "recognize"
    ],
    "answer": 2,
    "cn": "在黑色星期五，購物者湧入購物中心去搶購所有便宜的電視機。",
    "vocabIndex": 7
  },
  {
    "q": "Just before stepping onto the stage for the big piano concert, Lisa had ______.",
    "options": [
      "beyond recognition",
      "a plugged cord",
      "a warm bathrobe",
      "butterflies in her stomach"
    ],
    "answer": 3,
    "cn": "就在登上大型鋼琴音樂會的舞台前一刻，麗莎感到非常緊張不安。",
    "vocabIndex": 8
  },
  {
    "q": "During the emergency earthquake drill, the principal told all teachers to ______.",
    "options": [
      "remain calm",
      "snap up bargains",
      "wear earplugs",
      "have a stomach ache"
    ],
    "answer": 0,
    "cn": "在防震演習期間，校長囑咐所有老師要保持冷靜。",
    "vocabIndex": 4
  },
  {
    "q": "Drinking cold iced milk on an ______ in the morning often gives Tim a stomach ache.",
    "options": [
      "earplug",
      "empty stomach",
      "bathrobe",
      "electric plug"
    ],
    "answer": 1,
    "cn": "早晨空腹喝冰牛奶經常讓提姆肚子痛。",
    "vocabIndex": 8
  },
  {
    "q": "The fire chief gave a ______ to thank all the brave neighbors who helped put out the fire.",
    "options": [
      "rubber plug",
      "stormy sea",
      "sincere speech",
      "dry twig snap"
    ],
    "answer": 2,
    "cn": "消防局長發表了一場真摯的演說，感謝所有協助撲滅火災的勇敢鄰居。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "plug": {
    "pos": "n.",
    "en_def": "an electrical connector inserted into a socket; a rubber stopper for a sink or bathtub",
    "cn_def": "插頭；塞子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an electrical connector inserted into a socket; a rubber stopper for a sink or bathtub",
        "cn_def": "插頭；塞子（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to insert an electrical plug into a socket; to block an opening",
        "cn_def": "插入插頭；堵塞；推銷（動詞）"
      }
    ]
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to identify someone or something from previous encounter or knowledge",
    "cn_def": "認出；承認；表彰（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to identify someone or something from previous encounter or knowledge",
        "cn_def": "認出；承認；表彰（動詞）"
      }
    ]
  },
  "recognized": {
    "pos": "v.",
    "en_def": "to identify someone or something from previous encounter or knowledge",
    "cn_def": "認出；承認；表彰（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to identify someone or something from previous encounter or knowledge",
        "cn_def": "認出；承認；表彰（動詞）"
      }
    ]
  },
  "recognition": {
    "pos": "n.",
    "en_def": "identification of a person or thing; appreciation or acclaim",
    "cn_def": "認出；認可；讚譽（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "identification of a person or thing; appreciation or acclaim",
        "cn_def": "認出；認可；讚譽（不可數）"
      }
    ]
  },
  "remain": {
    "pos": "v.",
    "en_def": "to continue to exist, or stay in the same condition or place",
    "cn_def": "保持；依然存在；留下（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to continue to exist, or stay in the same condition or place",
        "cn_def": "保持；依然存在；留下（動詞）"
      }
    ]
  },
  "robe": {
    "pos": "n.",
    "en_def": "a loose outer garment reaching to the ankles, worn for warmth or ceremonies",
    "cn_def": "長袍；浴袍；禮袍（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a loose outer garment reaching to the ankles, worn for warmth or ceremonies",
        "cn_def": "長袍；浴袍；禮袍（可數）"
      }
    ]
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "free from pretense or deceit; proceeding from genuine feelings",
    "cn_def": "真誠的；由衷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "free from pretense or deceit; proceeding from genuine feelings",
        "cn_def": "真誠的；由衷的"
      }
    ]
  },
  "snap": {
    "pos": "v.",
    "en_def": "to break suddenly with a sharp crack; to take a quick photo",
    "cn_def": "突然折斷；拍照；猛咬（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to break suddenly with a sharp crack; to take a quick photo",
        "cn_def": "突然折斷；拍照；猛咬（動詞）"
      }
    ]
  },
  "stomach": {
    "pos": "n.",
    "en_def": "the internal organ in which the major part of food digestion occurs",
    "cn_def": "胃；腹部（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the internal organ in which the major part of food digestion occurs",
        "cn_def": "胃；腹部（可數）"
      }
    ]
  },
  "stormy": {
    "pos": "adj.",
    "en_def": "characterized by violent weather with strong winds, rain, or thunder",
    "cn_def": "暴風雨的；激烈的；動盪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "characterized by violent weather with strong winds, rain, or thunder",
        "cn_def": "暴風雨的；激烈的；動盪的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
