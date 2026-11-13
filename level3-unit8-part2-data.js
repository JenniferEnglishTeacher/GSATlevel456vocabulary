// Part 2 Quiz Data: drag – kingdom
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 8-2 - drag – kingdom",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dragged",
    "pos": "v.",
    "cn_def": "拉；拖曳；拖沓緩慢進行",
    "en_def": "to pull someone or something along forcefully with effort; to pass very slowly",
    "sentence": "With great collective effort, the four police officers {{BLANK}} the angry and shouting man out onto the sidewalk.",
    "cn": "在四名警官合力奮戰下，他們將那個憤怒大叫的男子拖到了人行道上。"
  },
  {
    "word": "drag on",
    "pos": "v.phr.",
    "cn_def": "拖延；沒完沒了地持續",
    "en_def": "to continue for too long in a tedious or tiring way",
    "sentence": "The complicated legal dispute continued to {{BLANK}} for several months without reaching a fair resolution.",
    "cn": "這起複雜的法律糾紛拖延了好幾個月，卻依然沒有達成公平的解決方案。"
  },
  {
    "word": "dumplings",
    "pos": "n.",
    "cn_def": "水餃；小籠包；餃子",
    "en_def": "a small lump of dough wrapped around meat or vegetables and boiled or fried",
    "sentence": "These traditional Chinese steamed {{BLANK}} are generously filled with minced pork, fresh cabbage, and fragrant ginger.",
    "cn": "這些傳統的中國蒸水餃／餃子裡頭包滿了豐富的豬絞肉、新鮮高麗菜與香薑。"
  },
  {
    "word": "export",
    "pos": "v./n.",
    "cn_def": "出口；輸出（動詞/名詞）",
    "en_def": "to send goods to another country for sale; a commodity sent abroad",
    "sentence": "Many local fruit farmers {{BLANK}} sweet pineapples and mangoes to neighboring Asian countries every summer.",
    "cn": "每年夏天，許多當地果農將香甜的鳳梨與芒果出口／銷往鄰近的亞洲國家。"
  },
  {
    "word": "import",
    "pos": "v./n.",
    "cn_def": "進口；輸入（動詞/名詞）",
    "en_def": "to bring goods into a country from abroad for sale; a commodity brought in",
    "sentence": "Because the small island lacks natural resources, it has to {{BLANK}} oil and steel from overseas producers.",
    "cn": "因為這座小島缺乏自然資源，它必須從海外生產商進口石油與鋼鐵。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指引；指導；引導（不可數）",
    "en_def": "advice or information aimed at resolving a problem or difficulty",
    "sentence": "Under the patient and professional {{BLANK}} of her personal fitness trainer, Lisa managed to lose ten kilograms safely.",
    "cn": "在她個人健身教練耐心且專業的指導指引下，麗莎成功安全地減重了十公斤。"
  },
  {
    "word": "hourly",
    "pos": "adj./adv.",
    "cn_def": "每小時的；按鐘點計算的（形容詞/副詞）",
    "en_def": "done or occurring every hour; calculated per hour",
    "sentence": "The luxury airport hotel provides a reliable {{BLANK}} shuttle bus service to transport travelers directly to the departure terminal.",
    "cn": "這家豪華機場飯店提供可靠的每小時一班的接駁公車服務，將旅客直接送達出境航廈。"
  },
  {
    "word": "hum",
    "pos": "v./n.",
    "cn_def": "哼唱；發出嗡嗡低鳴聲（動詞/名詞）",
    "en_def": "to make a low, steady continuous sound; to sing with closed lips",
    "sentence": "The quiet library study room was disturbed only by the soft, continuous {{BLANK}} of the air conditioner overhead.",
    "cn": "安靜的圖書館自修室裡，唯一能聽見的只有頭頂空調柔和且持續不斷的嗡嗡低鳴聲。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕的；濕熱的",
    "en_def": "marked by a relatively high level of water vapor in the atmosphere",
    "sentence": "The summer weather in Taipei is exceptionally hot and {{BLANK}}, which makes outdoor walking feel sticky and exhausting.",
    "cn": "台北夏天的天氣格外炎熱且潮濕，這讓戶外步行感覺黏膩且令人疲憊。"
  },
  {
    "word": "injury",
    "pos": "n.",
    "cn_def": "傷；傷害；損傷（可數/不可數）",
    "en_def": "physical harm or damage suffered by a person or animal",
    "sentence": "The lucky driver was wearing his seatbelt and managed to escape the highway crash without any serious {{BLANK}}.",
    "cn": "幸運的駕駛當時繫著安全帶，並成功在高速公路撞車事故中逃生且未遭受任何嚴重傷害。"
  },
  {
    "word": "kingdom",
    "pos": "n.",
    "cn_def": "王國；界（生物分類）",
    "en_def": "a country, state, or territory ruled by a king or queen; a realm of nature",
    "sentence": "The mighty medieval {{BLANK}} was vast and powerful, stretching across fertile valleys and high rocky mountains.",
    "cn": "那個強大的中世紀王國幅員遼闊且實力雄厚，橫跨肥沃的山谷與高聳的多石山脈。"
  }
];

const MCQS = [
  {
    "q": "Mom cooked ten delicious pork and vegetable ______ for my lunch today.",
    "options": [
      "kingdoms",
      "injuries",
      "dumplings",
      "exports"
    ],
    "answer": 2,
    "cn": "媽媽今天煮了十顆美味的豬肉蔬菜水餃當作我的午餐。"
  },
  {
    "q": "Rice and bananas are two important ______ that the country sells to other nations.",
    "options": [
      "exports",
      "kingdoms",
      "dumplings",
      "injuries"
    ],
    "answer": 0,
    "cn": "稻米與香蕉是該國銷往其他國家的兩項重要出口產品。",
    "vocabIndex": 3
  },
  {
    "q": "Under the wise teacher's helpful ______, the students learned how to write good essays.",
    "options": [
      "dumpling",
      "kingdom",
      "export",
      "guidance"
    ],
    "answer": 3,
    "cn": "在那位睿智老師有益的指導指引下，學生們學會了如何寫好短文。",
    "vocabIndex": 5
  },
  {
    "q": "Dan fell off his bike and suffered a painful arm ______, so he went to the hospital.",
    "options": [
      "dumpling",
      "injury",
      "kingdom",
      "export"
    ],
    "answer": 1,
    "cn": "丹從自行車上摔下來，手臂遭受疼痛的傷害／受傷，因此他去了醫院。",
    "vocabIndex": 9
  },
  {
    "q": "In fairy tales, the wise old king lived in a golden castle and ruled a peaceful ______.",
    "options": [
      "kingdom",
      "dumpling",
      "guidance",
      "injury"
    ],
    "answer": 0,
    "cn": "在童話故事中，睿智的老國王住在黃金城堡中，統治著一個和平的王國。",
    "vocabIndex": 10
  },
  {
    "q": "This store sells cheap foreign ______ like chocolate and cheese from Europe.",
    "options": [
      "kingdoms",
      "guidances",
      "injuries",
      "imports"
    ],
    "answer": 3,
    "cn": "這家商店販賣廉價的外國進口商品，例如來自歐洲的巧克力與乳酪。",
    "vocabIndex": 4
  },
  {
    "q": "We heard a soft mechanical ______ coming from the refrigerator in the quiet kitchen.",
    "options": [
      "dumpling",
      "hum",
      "kingdom",
      "injury"
    ],
    "answer": 1,
    "cn": "在安靜的廚房裡，我們聽見冰箱傳來一陣柔和的機器運轉嗡嗡低鳴聲。",
    "vocabIndex": 7
  },
  {
    "q": "The lion is the strongest and most respected animal in the animal ______.",
    "options": [
      "dumpling",
      "export",
      "kingdom",
      "injury"
    ],
    "answer": 2,
    "cn": "獅子是動物界／王國中最強壯且最受尊敬的動物。",
    "vocabIndex": 10
  },
  {
    "q": "Because the box was very heavy, Tim had to ______ it slowly across the wooden floor.",
    "options": [
      "drag",
      "hum",
      "export",
      "import"
    ],
    "answer": 0,
    "cn": "因為箱子非常重，提姆不得不將它在木地板上緩慢拖拉穿過。",
    "vocabIndex": 0
  },
  {
    "q": "The happy girl was ______ a lovely song quietly while drawing a picture.",
    "options": [
      "dragging",
      "exporting",
      "humming",
      "importing"
    ],
    "answer": 2,
    "cn": "那個快樂的女孩在畫圖時，嘴裡輕輕哼唱著一首可愛的歌。",
    "vocabIndex": 7
  },
  {
    "q": "Farmers in Taiwan ______ sweet mangoes and guavas to Japan every summer.",
    "options": [
      "drag",
      "export",
      "hum",
      "injure"
    ],
    "answer": 1,
    "cn": "台灣的農民每年夏天將香甜的芒果與芭樂出口到日本。",
    "vocabIndex": 3
  },
  {
    "q": "Our company needs to ______ wood and iron from other countries to make tables.",
    "options": [
      "hum",
      "drag",
      "injure",
      "import"
    ],
    "answer": 3,
    "cn": "我們公司需要從其他國家進口木材與鐵來製作桌子。",
    "vocabIndex": 4
  },
  {
    "q": "Playing with sharp knives may easily ______ your fingers, so please be very careful.",
    "options": [
      "export",
      "injure",
      "import",
      "hum"
    ],
    "answer": 1,
    "cn": "拿鋒利的刀子玩耍很容易傷害／弄傷你的手指，所以請務必非常小心。",
    "vocabIndex": 9
  },
  {
    "q": "The tired boy ______ his heavy schoolbag behind him as he walked home.",
    "options": [
      "dragged",
      "exported",
      "imported",
      "hummed"
    ],
    "answer": 0,
    "cn": "疲憊的男孩在走路回家時，將他沉重的書包拖曳在身後。",
    "vocabIndex": 0
  },
  {
    "q": "The summer air in Taipei is very hot and ______, so people sweat easily outdoors.",
    "options": [
      "hourly",
      "considerable",
      "humid",
      "colorful"
    ],
    "answer": 2,
    "cn": "台北夏天的空氣非常炎熱且潮濕，因此人們在戶外很容易流汗。",
    "vocabIndex": 8
  },
  {
    "q": "The bus company offers an ______ service that leaves for the airport every sixty minutes.",
    "options": [
      "humid",
      "considerable",
      "colorful",
      "hourly"
    ],
    "answer": 3,
    "cn": "公車公司提供每小時一班的服務，每六十分鐘開往機場一班。",
    "vocabIndex": 6
  },
  {
    "q": "After the summer rainstorm, the forest was warm, green, and ______, with mist in the air.",
    "options": [
      "colorful",
      "hourly",
      "humid",
      "considerable"
    ],
    "answer": 2,
    "cn": "夏季暴風雨過後，森林溫暖、翠綠且潮濕，空氣中飄著薄霧。",
    "vocabIndex": 8
  },
  {
    "q": "The factory workers are paid an ______ wage of twenty dollars for each hour of work.",
    "options": [
      "humid",
      "hourly",
      "considerable",
      "colorful"
    ],
    "answer": 1,
    "cn": "工廠工人們每工作一小時可獲得二十美元的按時薪計算的／鐘點工資。",
    "vocabIndex": 6
  },
  {
    "q": "The doctor visits the hospital patient ______ to check his temperature every single hour.",
    "options": [
      "hourly",
      "drag",
      "hum",
      "humid"
    ],
    "answer": 0,
    "cn": "醫生每小時探視住院病人一次，檢查他的體溫。",
    "vocabIndex": 6
  },
  {
    "q": "The meeting was so boring that it seemed to ______ for three long hours.",
    "options": [
      "boot up",
      "aside from",
      "set aside",
      "drag on"
    ],
    "answer": 3,
    "cn": "那場會議太枯燥了，似乎沒完沒了地拖延了漫長的三個小時。",
    "vocabIndex": 1
  },
  {
    "q": "Don't let this argument ______; apologize to your friend and make peace today.",
    "options": [
      "drag on",
      "boot up",
      "set aside",
      "give the boot"
    ],
    "answer": 0,
    "cn": "別讓這場爭吵繼續拖延下去；今天就向你的朋友道歉並言歸於好。",
    "vocabIndex": 1
  },
  {
    "q": "The soccer game started late, causing the entire evening schedule to ______.",
    "options": [
      "set aside",
      "drag on",
      "boot up",
      "aside from"
    ],
    "answer": 1,
    "cn": "足球賽延遲開始，導致整個晚上的行程都跟著拖延延長了。",
    "vocabIndex": 1
  },
  {
    "q": "When eating Chinese meals, I love to dip hot ______ in spicy vinegar sauce.",
    "options": [
      "animal kingdoms",
      "hourly rates",
      "drag races",
      "fried dumplings"
    ],
    "answer": 3,
    "cn": "吃中餐時，我最喜歡將熱騰騰的煎餃／鍋貼沾上辣醋醬汁享用。"
  },
  {
    "q": "Dinosaurs were once the most powerful living creatures in the ______.",
    "options": [
      "soup dumpling",
      "hourly wage",
      "animal kingdom",
      "export market"
    ],
    "answer": 2,
    "cn": "恐龍曾經是動物界中最強大的生物。",
    "vocabIndex": 10
  },
  {
    "q": "The famous restaurant in Taipei is world-renowned for its delicious and juicy ______.",
    "options": [
      "export markets",
      "animal kingdoms",
      "hourly services",
      "soup dumplings"
    ],
    "answer": 3,
    "cn": "這家位於台北的知名餐廳以其美味多汁的小籠湯包聞名全球。"
  }
];

const LOOKUP = {
  "dragged": {
    "pos": "v.",
    "en_def": "to pull someone or something along forcefully with effort; to pass very slowly",
    "cn_def": "拉；拖曳；拖沓緩慢進行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pull someone or something along forcefully with effort; to pass very slowly",
        "cn_def": "拉；拖曳；拖沓緩慢進行"
      }
    ]
  },
  "drag": {
    "pos": "v.",
    "en_def": "to pull someone or something along forcefully with effort; to pass very slowly",
    "cn_def": "拉；拖曳；拖沓緩慢進行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to pull someone or something along forcefully with effort; to pass very slowly",
        "cn_def": "拉；拖曳；拖沓緩慢進行"
      }
    ]
  },
  "drag on": {
    "pos": "v.phr.",
    "en_def": "to continue for too long in a tedious or tiring way",
    "cn_def": "拖延；沒完沒了地持續",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to continue for too long in a tedious or tiring way",
        "cn_def": "拖延；沒完沒了地持續"
      }
    ]
  },
  "dumpling": {
    "pos": "n.",
    "en_def": "a small lump of dough wrapped around meat or vegetables and boiled or fried",
    "cn_def": "水餃；小籠包；餃子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small lump of dough wrapped around meat or vegetables and boiled or fried",
        "cn_def": "水餃；小籠包；餃子"
      }
    ]
  },
  "dumplings": {
    "pos": "n.",
    "en_def": "a small lump of dough wrapped around meat or vegetables and boiled or fried",
    "cn_def": "水餃；小籠包；餃子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small lump of dough wrapped around meat or vegetables and boiled or fried",
        "cn_def": "水餃；小籠包；餃子"
      }
    ]
  },
  "export": {
    "pos": "v./n.",
    "en_def": "to send goods to another country for sale; a commodity sent abroad",
    "cn_def": "出口；輸出（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to send goods to another country for sale; a commodity sent abroad",
        "cn_def": "出口；輸出（動詞/名詞）"
      }
    ]
  },
  "import": {
    "pos": "v./n.",
    "en_def": "to bring goods into a country from abroad for sale; a commodity brought in",
    "cn_def": "進口；輸入（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to bring goods into a country from abroad for sale; a commodity brought in",
        "cn_def": "進口；輸入（動詞/名詞）"
      }
    ]
  },
  "guidance": {
    "pos": "n.",
    "en_def": "advice or information aimed at resolving a problem or difficulty",
    "cn_def": "指引；指導；引導（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "advice or information aimed at resolving a problem or difficulty",
        "cn_def": "指引；指導；引導（不可數）"
      }
    ]
  },
  "hourly": {
    "pos": "adj./adv.",
    "en_def": "done or occurring every hour; calculated per hour",
    "cn_def": "每小時的；按鐘點計算的（形容詞/副詞）",
    "combined": [
      {
        "pos": "adj./adv.",
        "en_def": "done or occurring every hour; calculated per hour",
        "cn_def": "每小時的；按鐘點計算的（形容詞/副詞）"
      }
    ]
  },
  "hum": {
    "pos": "v./n.",
    "en_def": "to make a low, steady continuous sound; to sing with closed lips",
    "cn_def": "哼唱；發出嗡嗡低鳴聲（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to make a low, steady continuous sound; to sing with closed lips",
        "cn_def": "哼唱；發出嗡嗡低鳴聲（動詞/名詞）"
      }
    ]
  },
  "humid": {
    "pos": "adj.",
    "en_def": "marked by a relatively high level of water vapor in the atmosphere",
    "cn_def": "潮濕的；濕熱的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "marked by a relatively high level of water vapor in the atmosphere",
        "cn_def": "潮濕的；濕熱的"
      }
    ]
  },
  "injury": {
    "pos": "n.",
    "en_def": "physical harm or damage suffered by a person or animal",
    "cn_def": "傷；傷害；損傷（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "physical harm or damage suffered by a person or animal",
        "cn_def": "傷；傷害；損傷（可數/不可數）"
      }
    ]
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country, state, or territory ruled by a king or queen; a realm of nature",
    "cn_def": "王國；界（生物分類）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a country, state, or territory ruled by a king or queen; a realm of nature",
        "cn_def": "王國；界（生物分類）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
