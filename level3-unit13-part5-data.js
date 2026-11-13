// Part 5 Quiz Data: suburb – wipe
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 13-5 - suburb – wipe",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區；近郊住宅區（可數，常用複數 suburbs）",
    "en_def": "an outlying residential district of a city; the area outside a central city",
    "sentence": "Tired of noisy downtown traffic, the young married couple decided to buy a home in the peaceful {{BLANK}} to raise their children.",
    "cn": "厭倦了吵鬧的市中心交通，那對年輕夫婦決定在安寧的郊區買房來撫養孩子。"
  },
  {
    "word": "suburban",
    "pos": "adj.",
    "cn_def": "郊區的；近郊特有的",
    "en_def": "relating to, situated in, or characteristic of a suburb",
    "sentence": "Living a quiet {{BLANK}} lifestyle allows families to enjoy spacious private backyards and cleaner air away from factories.",
    "cn": "過著寧靜的郊區生活方式使家庭能夠享受寬敞的私人後院，以及遠離工廠的清新空氣。"
  },
  {
    "word": "suck",
    "pos": "v.",
    "cn_def": "吸；啜；（俚語）糟透了；差勁（動詞）",
    "en_def": "to draw into the mouth by creating a vacuum; (slang) to be very bad or unpleasant",
    "sentence": "I honestly admit that I {{BLANK}} at playing chess, but I still enjoy participating in friendly matches with friends.",
    "cn": "我坦誠承認自己下西洋棋爛透了／非常差勁，但我依然很享受與朋友進行友誼賽。"
  },
  {
    "word": "suck",
    "pos": "n.",
    "cn_def": "吮吸；一口（可數）",
    "en_def": "an act or instance of sucking liquid or food; (slang) an unpleasant condition",
    "sentence": "The tired toddler took a long soothing {{BLANK}} on his pacifier and slowly fell fast asleep in the crib.",
    "cn": "那個疲憊的幼童對著安撫奶嘴長長地吮吸了一口，接著在嬰兒床裡沉沉睡去。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦；才能；人才（不可數/可數）",
    "en_def": "natural aptitude, flair, or superior ability; people possessing such ability",
    "sentence": "From an early age, Mozart displayed an extraordinary natural {{BLANK}} for playing classical piano and composing music.",
    "cn": "莫札特從小就展現了演奏古典鋼琴與作曲的非凡自然天賦。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的；才華橫溢的",
    "en_def": "having a natural aptitude or skill for something",
    "sentence": "The school orchestra is fortunate to be led by an extraordinarily {{BLANK}} young violinist who won multiple international honors.",
    "cn": "學校管弦樂團非常幸運能由一位贏得多項國際榮譽、極具才華的年輕小提琴家所領導。"
  },
  {
    "word": "tide",
    "pos": "n.",
    "cn_def": "潮汐；浪潮；趨勢（不可數/可數）",
    "en_def": "the alternate rising and falling of the sea; a powerful surge or trend",
    "sentence": "Wise elders frequently remind young students that time and {{BLANK}} wait for no man, so opportunities must be seized.",
    "cn": "智慧長者經常提醒年輕學子「歲月潮汐不饒人」，因此務必及時把握良機。"
  },
  {
    "word": "tide me over",
    "pos": "v.phr.",
    "cn_def": "幫助某人度過難關（特別是金錢或食物）",
    "en_def": "to help someone through a difficult period, especially with food or money",
    "sentence": "Could you please lend me fifty dollars to {{BLANK}} until I receive my company salary on Friday?",
    "cn": "你能借我五十美元好幫我度過難關撐到星期五領取公司薪水嗎？"
  },
  {
    "word": "van",
    "pos": "n.",
    "cn_def": "客貨兩用箱型車；廂型貨車（可數）",
    "en_def": "a medium-sized motor vehicle used for transporting goods or passengers",
    "sentence": "A yellow postal delivery {{BLANK}} pulled up in front of our house and dropped off three packages from abroad.",
    "cn": "一輛黃色郵政快遞廂型車停在我們家門前，送來了三個海外包裹。"
  },
  {
    "word": "vest",
    "pos": "n.",
    "cn_def": "背心；防彈衣；防護背心（可數）",
    "en_def": "a sleeveless garment worn on the upper body, for warmth or protection",
    "sentence": "Thanks to the high-tech Kevlar bulletproof {{BLANK}} he wore beneath his uniform, the police officer survived the shooting unharmed.",
    "cn": "幸虧制服下穿著高科技凱夫勒防彈背心，那位警官在槍擊事件中毫髮無損地倖免於難。"
  },
  {
    "word": "wipe",
    "pos": "v.",
    "cn_def": "擦拭；抹去；徹底消滅（動詞）",
    "en_def": "to clean or dry by rubbing with a cloth or hand; to completely remove",
    "sentence": "The mother gently used a soft tissue to {{BLANK}} the tears from her little daughter's flushed cheeks.",
    "cn": "母親溫柔地用柔軟的面紙擦拭小女兒泛紅臉頰上的眼淚。"
  },
  {
    "word": "wipes",
    "pos": "n.",
    "cn_def": "擦拭；濕紙巾（可數）",
    "en_def": "an act of wiping; a piece of disposable cloth for cleaning",
    "sentence": "Always carry a small pack of antibacterial wet {{BLANK}} in your backpack to clean your hands before eating outdoors.",
    "cn": "背包裡隨時備有一小包抗菌濕紙巾，以便在戶外用餐前擦拭雙手。"
  }
];

const MCQS = [
  {
    "q": "The family left the noisy city center and moved to a quiet green ______ to raise their kids.",
    "options": [
      "tide",
      "talent",
      "suburb",
      "van"
    ],
    "answer": 2,
    "cn": "這家人離開了吵鬧的市中心，搬到一個寧靜綠意的郊區撫養孩子。",
    "vocabIndex": 0
  },
  {
    "q": "The young girl has an amazing natural ______ for playing classical piano without reading notes.",
    "options": [
      "suburb",
      "van",
      "tide",
      "talent"
    ],
    "answer": 3,
    "cn": "那個小女孩在不看樂譜的情況下彈奏古典鋼琴，擁有驚人的自然天賦。",
    "vocabIndex": 4
  },
  {
    "q": "The ocean water moved far up the beach when the high ______ came in during the storm.",
    "options": [
      "suburb",
      "tide",
      "talent",
      "van"
    ],
    "answer": 1,
    "cn": "暴風雨期間滿潮來臨時，海水湧上了海灘很遠的地方。",
    "vocabIndex": 6
  },
  {
    "q": "The delivery driver loaded ten heavy cardboard boxes into the back of his white ______.",
    "options": [
      "van",
      "talent",
      "tide",
      "suburb"
    ],
    "answer": 0,
    "cn": "快遞司機將十個沉重的紙箱裝入他的白色廂型車後座。",
    "vocabIndex": 8
  },
  {
    "q": "Police officers must wear a bulletproof ______ under their shirts for protection during dangerous duty.",
    "options": [
      "suburb",
      "van",
      "tide",
      "vest"
    ],
    "answer": 3,
    "cn": "警官在執行危險任務時，必須在襯衫下穿上防彈背心以求防護。",
    "vocabIndex": 9
  },
  {
    "q": "Please take a clean paper towel and give the messy dinner table a good ______.",
    "options": [
      "van",
      "tide",
      "wipe",
      "vest"
    ],
    "answer": 2,
    "cn": "請拿一張乾淨的紙巾，把凌亂的餐桌好好擦拭一下。",
    "vocabIndex": 10
  },
  {
    "q": "The little child took a sweet ______ on the lollipop and smiled happily.",
    "options": [
      "suck",
      "vest",
      "van",
      "suburb"
    ],
    "answer": 0,
    "cn": "小孩子對著棒棒糖甜甜地吸了一口，開心地笑了。",
    "vocabIndex": 2
  },
  {
    "q": "Living in a quiet ______ neighborhood means people have big backyards and less noise.",
    "options": [
      "talented",
      "suburban",
      "sucked",
      "tidal"
    ],
    "answer": 1,
    "cn": "居住在寧靜的郊區社區意味著人們擁有大後院且噪音較少。",
    "vocabIndex": 1
  },
  {
    "q": "The young artist is extraordinarily ______ and creates paintings that sell for thousands of dollars.",
    "options": [
      "tidal",
      "suburban",
      "talented",
      "sucked"
    ],
    "answer": 2,
    "cn": "那位年輕藝術家極具才華，創作出的畫作每幅售價數千美元。",
    "vocabIndex": 5
  },
  {
    "q": "Kids like to drink cold lemonade by ______ it up quickly through plastic straws.",
    "options": [
      "wiping",
      "sucking",
      "tiding",
      "vanning"
    ],
    "answer": 1,
    "cn": "孩子們喜歡透過塑膠吸管快速吸飲冰涼的檸檬水。",
    "vocabIndex": 2
  },
  {
    "q": "The mother gently used a clean tissue to ______ the milk off the baby's chin.",
    "options": [
      "suck",
      "tide",
      "van",
      "wipe"
    ],
    "answer": 3,
    "cn": "母親溫柔地用乾淨的面紙把小寶寶下巴上的牛奶擦拭掉。",
    "vocabIndex": 10
  },
  {
    "q": "A small snack between classes will help ______ you ______ until dinnertime.",
    "options": [
      "tide you over",
      "suck you in",
      "turn you over",
      "wipe you out"
    ],
    "answer": 0,
    "cn": "課間的一點小點心將有助於幫你充飢支撐到晚餐時間。",
    "vocabIndex": 7
  },
  {
    "q": "The terrible tsunami waves ______ out several coastal fishing villages in one hour.",
    "options": [
      "vanned",
      "sucked",
      "tided",
      "wiped"
    ],
    "answer": 3,
    "cn": "可怕的海嘯大浪在一個小時內徹底摧毀消滅了好幾座沿海漁村。",
    "vocabIndex": 10
  },
  {
    "q": "I bought a small box of wet ______ to clean my hands before having lunch outdoors.",
    "options": [
      "vans",
      "wipes",
      "vests",
      "tides"
    ],
    "answer": 1,
    "cn": "我買了一小盒濕紙巾，以便在戶外吃午餐前清潔雙手。",
    "vocabIndex": 10
  },
  {
    "q": "Every morning, thousands of commuters take the ______ train to travel into the city center.",
    "options": [
      "suburban",
      "wiped",
      "talented",
      "sucked"
    ],
    "answer": 0,
    "cn": "每天早晨，數以千計的通勤族搭乘郊區火車前往市中心。",
    "vocabIndex": 1
  },
  {
    "q": "The coach gave a wonderful halftime speech that completely turned the ______ of the game.",
    "options": [
      "suburb",
      "talent",
      "tide",
      "vest"
    ],
    "answer": 2,
    "cn": "教練在中場發表了精彩演說，徹底扭轉了比賽的局勢／潮流。",
    "vocabIndex": 6
  },
  {
    "q": "The police officer wore a heavy bulletproof ______ to stay safe during the emergency.",
    "options": [
      "vest",
      "van",
      "suburb",
      "tide"
    ],
    "answer": 0,
    "cn": "警官穿著厚實的防彈背心以在緊急狀況中保持安全。",
    "vocabIndex": 9
  },
  {
    "q": "My father rented a large moving ______ so we could carry our furniture to the new house.",
    "options": [
      "suburb",
      "tide",
      "vest",
      "van"
    ],
    "answer": 3,
    "cn": "我父親租了一輛大型搬家廂型貨車，讓我們能把家具運到新家。",
    "vocabIndex": 8
  },
  {
    "q": "The young girl has a remarkable ______ for languages and can speak four languages fluently.",
    "options": [
      "suburb",
      "talent",
      "vest",
      "van"
    ],
    "answer": 1,
    "cn": "那個年輕女孩在語言上極具天賦，能流利說四種語言。",
    "vocabIndex": 4
  },
  {
    "q": "The dog ran across the beach at low ______ when the ocean water had pulled far back.",
    "options": [
      "suburb",
      "vest",
      "tide",
      "van"
    ],
    "answer": 2,
    "cn": "在海水遠遠退去的乾潮時分，狗狗在沙灘上奔跑。",
    "vocabIndex": 6
  },
  {
    "q": "The police department gave every road safety officer a bright ______ to wear at night.",
    "options": [
      "wet wipe",
      "moving van",
      "delivery van",
      "safety vest"
    ],
    "answer": 3,
    "cn": "警察局發給每位道路安全警員一件在夜間穿著的鮮豔安全背心。",
    "vocabIndex": 9
  },
  {
    "q": "We packed all our clothes and desks into a large ______ to move to our new apartment.",
    "options": [
      "safety vest",
      "moving van",
      "wet wipe",
      "talent scout"
    ],
    "answer": 1,
    "cn": "我們把所有的衣服和書桌裝進一輛大搬家廂型車中，搬往新公寓。",
    "vocabIndex": 8
  },
  {
    "q": "The coach's inspiring words at halftime helped the team ______ and win the finals.",
    "options": [
      "suck at",
      "move to the suburbs",
      "turn the tide",
      "wipe out"
    ],
    "answer": 2,
    "cn": "教練在中場時激勵人心的話語幫助球隊扭轉局勢並贏得決賽。",
    "vocabIndex": 6
  },
  {
    "q": "The massive ocean storm completely ______ several small island villages overnight.",
    "options": [
      "wiped out",
      "moved to the suburbs",
      "turned the tide",
      "sucked through a straw"
    ],
    "answer": 0,
    "cn": "強大的海洋風暴在一夜之間徹底摧毀消滅了幾座小島嶼村落。",
    "vocabIndex": 10
  },
  {
    "q": "A professional ______ attended the high school basketball finals to find future stars.",
    "options": [
      "delivery van",
      "safety vest",
      "talent scout",
      "moving van"
    ],
    "answer": 2,
    "cn": "一位專業的星探觀看了高中籃球決賽，尋找未來的明日之星。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "suburb": {
    "pos": "n.",
    "en_def": "an outlying residential district of a city; the area outside a central city",
    "cn_def": "郊區；近郊住宅區（可數，常用複數 suburbs）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an outlying residential district of a city; the area outside a central city",
        "cn_def": "郊區；近郊住宅區（可數，常用複數 suburbs）"
      }
    ]
  },
  "suburban": {
    "pos": "adj.",
    "en_def": "relating to, situated in, or characteristic of a suburb",
    "cn_def": "郊區的；近郊特有的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, situated in, or characteristic of a suburb",
        "cn_def": "郊區的；近郊特有的"
      }
    ]
  },
  "suck": {
    "pos": "v.",
    "en_def": "to draw into the mouth by creating a vacuum; (slang) to be very bad or unpleasant",
    "cn_def": "吸；啜；（俚語）糟透了；差勁（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to draw into the mouth by creating a vacuum; (slang) to be very bad or unpleasant",
        "cn_def": "吸；啜；（俚語）糟透了；差勁（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "an act or instance of sucking liquid or food; (slang) an unpleasant condition",
        "cn_def": "吮吸；一口（可數）"
      }
    ]
  },
  "talent": {
    "pos": "n.",
    "en_def": "natural aptitude, flair, or superior ability; people possessing such ability",
    "cn_def": "天賦；才能；人才（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "natural aptitude, flair, or superior ability; people possessing such ability",
        "cn_def": "天賦；才能；人才（不可數/可數）"
      }
    ]
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural aptitude or skill for something",
    "cn_def": "有才華的；才華橫溢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a natural aptitude or skill for something",
        "cn_def": "有才華的；才華橫溢的"
      }
    ]
  },
  "tide": {
    "pos": "n.",
    "en_def": "the alternate rising and falling of the sea; a powerful surge or trend",
    "cn_def": "潮汐；浪潮；趨勢（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the alternate rising and falling of the sea; a powerful surge or trend",
        "cn_def": "潮汐；浪潮；趨勢（不可數/可數）"
      }
    ]
  },
  "tide me over": {
    "pos": "v.phr.",
    "en_def": "to help someone through a difficult period, especially with food or money",
    "cn_def": "幫助某人度過難關（特別是金錢或食物）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to help someone through a difficult period, especially with food or money",
        "cn_def": "幫助某人度過難關（特別是金錢或食物）"
      }
    ]
  },
  "tide sb. over": {
    "pos": "v.phr.",
    "en_def": "to help someone through a difficult period, especially with food or money",
    "cn_def": "幫助某人度過難關（特別是金錢或食物）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to help someone through a difficult period, especially with food or money",
        "cn_def": "幫助某人度過難關（特別是金錢或食物）"
      }
    ]
  },
  "van": {
    "pos": "n.",
    "en_def": "a medium-sized motor vehicle used for transporting goods or passengers",
    "cn_def": "客貨兩用箱型車；廂型貨車（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medium-sized motor vehicle used for transporting goods or passengers",
        "cn_def": "客貨兩用箱型車；廂型貨車（可數）"
      }
    ]
  },
  "vest": {
    "pos": "n.",
    "en_def": "a sleeveless garment worn on the upper body, for warmth or protection",
    "cn_def": "背心；防彈衣；防護背心（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sleeveless garment worn on the upper body, for warmth or protection",
        "cn_def": "背心；防彈衣；防護背心（可數）"
      }
    ]
  },
  "wipe": {
    "pos": "v.",
    "en_def": "to clean or dry by rubbing with a cloth or hand; to completely remove",
    "cn_def": "擦拭；抹去；徹底消滅（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to clean or dry by rubbing with a cloth or hand; to completely remove",
        "cn_def": "擦拭；抹去；徹底消滅（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "an act of wiping; a piece of disposable cloth for cleaning",
        "cn_def": "擦拭；濕紙巾（可數）"
      }
    ]
  },
  "wipes": {
    "pos": "n.",
    "en_def": "an act of wiping; a piece of disposable cloth for cleaning",
    "cn_def": "擦拭；濕紙巾（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of wiping; a piece of disposable cloth for cleaning",
        "cn_def": "擦拭；濕紙巾（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
