// Part 4 Quiz Data: pave – slice
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 12-4 - pave – slice",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pave",
    "pos": "v.",
    "cn_def": "鋪設；鋪（路）；為…鋪路（動詞）",
    "en_def": "to cover a piece of ground with asphalt, concrete, or stone to make a firm level surface",
    "sentence": "City construction crews worked throughout the night to {{BLANK}} the busy downtown avenue with smooth asphalt.",
    "cn": "市政工程隊整夜工作，用平整的瀝青鋪設繁忙的市中心大道。"
  },
  {
    "word": "pavement",
    "pos": "n.",
    "cn_def": "人行道；鋪過的路面（可數/不可數）",
    "en_def": "any paved area, especially a sidewalk for pedestrians or the surface of a road",
    "sentence": "Pedestrians are strictly advised to walk safely on the concrete {{BLANK}} and stay off the busy highway.",
    "cn": "當局強烈建議行人安全地走在混凝土人行道上，不要走上繁忙的高速公路。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的；可信賴的；真實可信的",
    "en_def": "consistently good in quality or performance, and able to be trusted",
    "sentence": "Reputable journalists must thoroughly verify their facts with multiple {{BLANK}} sources before publishing news stories.",
    "cn": "有聲譽的記者在發表新聞報導前，必須透過多個可靠的來源徹底核實事實。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表；象徵；代理（動詞）",
    "en_def": "to act or speak officially for someone; to stand for or symbolize something",
    "sentence": "Athletes wearing proud national team jerseys will {{BLANK}} their country at the forthcoming Summer Olympic Games.",
    "cn": "穿著榮耀國家隊球衣的運動員們將在即將舉行的夏季奧林匹克運動會上代表他們的國家。"
  },
  {
    "word": "representative",
    "pos": "n./adj.",
    "cn_def": "代表；代理人（名詞）；有代表性的；典型的（形容詞）",
    "en_def": "a person chosen or appointed to act or speak for another (n.); typical of a class (adj.)",
    "sentence": "If you have questions about commercial pricing, our friendly customer sales {{BLANK}} will assist you immediately.",
    "cn": "如果您對商業定價有任何疑問，我們親切的客戶業務代表將立即為您提供協助。"
  },
  {
    "word": "resources",
    "pos": "n.",
    "cn_def": "資源；財力；物力（可數，常用複數）",
    "en_def": "a stock or supply of money, materials, staff, and other assets drawn on by people",
    "sentence": "Industrial nations must balance economic development with the conservation of finite planetary natural {{BLANK}}.",
    "cn": "工業國家必須在經濟發展與保護有限的地球自然資源之間取得平衡。"
  },
  {
    "word": "resourceful",
    "pos": "adj.",
    "cn_def": "足智多謀的；機敏靈巧的",
    "en_def": "having the ability to find quick and clever ways to overcome difficulties",
    "sentence": "Stranded in the wilderness after the aircraft engine failed, the {{BLANK}} pilot built a sturdy rainproof shelter.",
    "cn": "飛機發動機故障後滯留在荒野中，那位足智多謀的飛行員搭建了一個堅固的防雨庇護所。"
  },
  {
    "word": "sack",
    "pos": "n.",
    "cn_def": "大麻袋；厚紙袋（可數）",
    "en_def": "a large bag made of a strong material used for storing or carrying goods",
    "sentence": "The strong farmer carried a heavy fifty-pound {{BLANK}} of brown rice into the pantry storage room.",
    "cn": "身強體壯的農夫扛著一袋沉重的五十磅糙米大麻袋，走進食品儲藏室。"
  },
  {
    "word": "sack",
    "pos": "v.",
    "cn_def": "解僱；開除（動詞）",
    "en_def": "to dismiss someone from employment suddenly",
    "sentence": "The company decided to {{BLANK}} three senior directors after auditors discovered massive unauthorized budget deficits.",
    "cn": "在審計人員發現巨額未經授權的預算虧損後，該公司決定解僱／開除三名資深主管。"
  },
  {
    "word": "scarce",
    "pos": "adj.",
    "cn_def": "稀少的；匱乏的；罕見的",
    "en_def": "insufficient for the demand; occurring in small numbers or quantities and difficult to find",
    "sentence": "During prolonged dry summer droughts in the desert, clean drinking water becomes dangerously {{BLANK}}.",
    "cn": "在沙漠中漫長乾旱的夏季，乾淨的飲用水變得極度危險地匱乏稀少。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "安全；安保；保障；保全（不可數）",
    "en_def": "the state of being free from danger or threat; safety precautions",
    "sentence": "International travelers must pass through rigorous airport {{BLANK}} checkpoints before boarding their overseas flights.",
    "cn": "國際旅客在登上海外航班前，必須通過嚴格的機場安全檢查／安檢關卡。"
  },
  {
    "word": "slice",
    "pos": "n.",
    "cn_def": "一片；薄片；部分（可數）",
    "en_def": "a thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion",
    "sentence": "Many ambitious technology startups are competing aggressively to get their {{BLANK}} of the profitable digital market.",
    "cn": "許多雄心勃勃的科技新創公司正在激烈競爭，以期在獲利豐厚的數位市場中分得一杯羹。"
  },
  {
    "word": "slice",
    "pos": "v.",
    "cn_def": "切成薄片；切開（動詞）",
    "en_def": "to cut something into slices with a sharp knife",
    "sentence": "The chef used an exceptionally sharp Japanese knife to {{BLANK}} the fresh raw salmon thinly.",
    "cn": "主廚使用一把異常鋒利的日本刀將新鮮的生鮭魚切成薄片。"
  }
];

const MCQS = [
  {
    "q": "The city spent three days repairing the cracked concrete ______ where pedestrians walk.",
    "options": [
      "sack",
      "representative",
      "pavement",
      "slice"
    ],
    "answer": 2,
    "cn": "市府花了三天時間修復行人行走的開裂混凝土人行道。",
    "vocabIndex": 1
  },
  {
    "q": "Our company sent a sales ______ to Paris to introduce our new products to European buyers.",
    "options": [
      "representative",
      "pavement",
      "sack",
      "security"
    ],
    "answer": 0,
    "cn": "我們公司派了一位業務代表前往巴黎，向歐洲買家介紹我們的新產品。",
    "vocabIndex": 4
  },
  {
    "q": "The farmer filled a big burlap ______ with brown potatoes to sell at the weekend market.",
    "options": [
      "slice",
      "sack",
      "pavement",
      "security"
    ],
    "answer": 1,
    "cn": "農夫在粗麻布大麻袋裡裝滿褐色馬鈴薯，準備在週末市集上販售。",
    "vocabIndex": 7
  },
  {
    "q": "Airport ______ guards checked everyone's bags and boarding passes before entering the gate.",
    "options": [
      "pavement",
      "sack",
      "slice",
      "security"
    ],
    "answer": 3,
    "cn": "機場安檢／保全人員在進入登機門之前檢查了每個人的隨身包和登機證。",
    "vocabIndex": 10
  },
  {
    "q": "Mom cut a fresh ______ of lemon and dropped it into my glass of iced tea.",
    "options": [
      "slice",
      "sack",
      "representative",
      "pavement"
    ],
    "answer": 0,
    "cn": "媽媽切了一新鮮薄片檸檬，並將它放入我的冰茶杯中。",
    "vocabIndex": 11
  },
  {
    "q": "Clean drinking water is an essential natural ______ that all humans must protect carefully.",
    "options": [
      "sack",
      "resource",
      "slice",
      "pavement"
    ],
    "answer": 1,
    "cn": "乾淨的飲用水是全人類都必須細心保護的不可或缺自然資源。",
    "vocabIndex": 5
  },
  {
    "q": "The student council elected two ______ to speak for all students at the meeting.",
    "options": [
      "resources",
      "pavements",
      "representatives",
      "sacks"
    ],
    "answer": 2,
    "cn": "學生會選出了兩位代表，在會議上為所有學生發言。",
    "vocabIndex": 4
  },
  {
    "q": "After the long and tiring journey, Tom could not wait to hit the ______ and go to sleep.",
    "options": [
      "security",
      "slice",
      "pavement",
      "sack"
    ],
    "answer": 3,
    "cn": "漫長且令人疲憊的旅程之後，湯姆迫不及待想要倒頭大睡／上床睡覺。",
    "vocabIndex": 7
  },
  {
    "q": "I bought a hot, cheesy ______ of pizza from the corner bakery for lunch.",
    "options": [
      "sack",
      "slice",
      "representative",
      "pavement"
    ],
    "answer": 1,
    "cn": "我從街角烘焙坊買了一片熱騰騰、起司濃郁的披薩當午餐。",
    "vocabIndex": 11
  },
  {
    "q": "The company hired extra guard dogs to ensure the night ______ of the warehouse.",
    "options": [
      "pavement",
      "sack",
      "security",
      "slice"
    ],
    "answer": 2,
    "cn": "公司增聘了警衛犬，以確保倉庫夜間的安全／保全。",
    "vocabIndex": 10
  },
  {
    "q": "Workers used black asphalt to ______ the bumpy dirt road in front of our school.",
    "options": [
      "represent",
      "sack",
      "slice",
      "pave"
    ],
    "answer": 3,
    "cn": "工人們用黑色瀝青鋪設我們學校門前崎嶇不平的泥土路。",
    "vocabIndex": 0
  },
  {
    "q": "The white dove on the flag is known to ______ peace and hope for all nations.",
    "options": [
      "represent",
      "sack",
      "pave",
      "slice"
    ],
    "answer": 0,
    "cn": "旗幟上的白鴿舉世皆知象徵／代表著萬國的和平與希望。",
    "vocabIndex": 3
  },
  {
    "q": "The bad boss threatened to ______ any worker who arrived late for the morning shift.",
    "options": [
      "represent",
      "slice",
      "pave",
      "sack"
    ],
    "answer": 3,
    "cn": "那個惡劣的老闆揚言要開除／解僱任何早班遲到的工人。",
    "vocabIndex": 7
  },
  {
    "q": "Dad used a long, sharp knife to ______ the sweet watermelon into equal halves.",
    "options": [
      "represent",
      "pave",
      "slice",
      "sack"
    ],
    "answer": 2,
    "cn": "爸爸用一把又長又鋒利的刀，把甜甜的西瓜切成兩半。",
    "vocabIndex": 11
  },
  {
    "q": "The invention of smart phones helped ______ the way for fast mobile communication.",
    "options": [
      "pave",
      "sack",
      "represent",
      "slice"
    ],
    "answer": 0,
    "cn": "智慧型手機的發明協助為快速的行動通訊鋪平了道路。",
    "vocabIndex": 0
  },
  {
    "q": "Peter was chosen by his classmates to ______ their school in the national speech contest.",
    "options": [
      "sack",
      "represent",
      "slice",
      "pave"
    ],
    "answer": 1,
    "cn": "彼得被全班同學選中，代表他們學校參加全國演講比賽。",
    "vocabIndex": 3
  },
  {
    "q": "The baker used a machine to ______ the loaf of bread into twelve thin pieces.",
    "options": [
      "pave",
      "represent",
      "slice",
      "sack"
    ],
    "answer": 2,
    "cn": "麵包師用機器將那條麵包切成十二片薄片。",
    "vocabIndex": 11
  },
  {
    "q": "My father drives a very ______ car that has never broken down in ten years.",
    "options": [
      "reliable",
      "representative",
      "resourceful",
      "scarce"
    ],
    "answer": 0,
    "cn": "我父親開著一輛非常可靠的汽車，十年來從未故障過。",
    "vocabIndex": 2
  },
  {
    "q": "In the cold desert winter, food and clean water become extremely ______.",
    "options": [
      "reliable",
      "scarce",
      "resourceful",
      "representative"
    ],
    "answer": 1,
    "cn": "在寒冷的沙漠冬季，食物和乾淨水源變得極度匱乏稀少。",
    "vocabIndex": 9
  },
  {
    "q": "The boys got lost in the woods, but their ______ friend used the stars to find the way home.",
    "options": [
      "scarce",
      "reliable",
      "representative",
      "resourceful"
    ],
    "answer": 3,
    "cn": "男孩們在樹林中迷了路，但他們那位足智多謀的朋友利用星光找到了回家的路。",
    "vocabIndex": 6
  },
  {
    "q": "Red lanterns hanging in streets are culturally ______ of Chinese New Year celebration.",
    "options": [
      "scarce",
      "representative",
      "reliable",
      "resourceful"
    ],
    "answer": 1,
    "cn": "街上懸掛的紅燈籠在文化上極具華人農曆新年慶祝活動的代表性／典型特徵。",
    "vocabIndex": 4
  },
  {
    "q": "Kelly is a ______ friend who always keeps her promises and arrives on time.",
    "options": [
      "scarce",
      "representative",
      "reliable",
      "resourceful"
    ],
    "answer": 2,
    "cn": "凱莉是一位可靠的朋友，總是信守承諾且準時抵達。",
    "vocabIndex": 2
  },
  {
    "q": "Hard work and daily reading will ______ for your future success in college.",
    "options": [
      "pave the way",
      "hit the sack",
      "get a slice of the pie",
      "make oneself scarce"
    ],
    "answer": 0,
    "cn": "勤奮努力與每天閱讀將為你未來在大學的成功鋪平道路。",
    "vocabIndex": 0
  },
  {
    "q": "I am so tired from running that I think I will ______ early tonight.",
    "options": [
      "pave the way",
      "get a slice of the pie",
      "make oneself scarce",
      "hit the sack"
    ],
    "answer": 3,
    "cn": "我跑步跑得好累，我想我今晚要早點上床睡覺（倒頭就睡）了。",
    "vocabIndex": 7
  },
  {
    "q": "When mom started asking who broke the vase, the naughty boy decided to ______.",
    "options": [
      "make himself scarce",
      "pave the way",
      "hit the sack",
      "get a slice of the pie"
    ],
    "answer": 0,
    "cn": "當媽媽開始詢問花瓶是誰打破的時候，那個頑皮的男孩決定識相溜開／避開。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "pave": {
    "pos": "v.",
    "en_def": "to cover a piece of ground with asphalt, concrete, or stone to make a firm level surface",
    "cn_def": "鋪設；鋪（路）；為…鋪路（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cover a piece of ground with asphalt, concrete, or stone to make a firm level surface",
        "cn_def": "鋪設；鋪（路）；為…鋪路（動詞）"
      }
    ]
  },
  "pavement": {
    "pos": "n.",
    "en_def": "any paved area, especially a sidewalk for pedestrians or the surface of a road",
    "cn_def": "人行道；鋪過的路面（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any paved area, especially a sidewalk for pedestrians or the surface of a road",
        "cn_def": "人行道；鋪過的路面（可數/不可數）"
      }
    ]
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "consistently good in quality or performance, and able to be trusted",
    "cn_def": "可靠的；可信賴的；真實可信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "consistently good in quality or performance, and able to be trusted",
        "cn_def": "可靠的；可信賴的；真實可信的"
      }
    ]
  },
  "represent": {
    "pos": "v.",
    "en_def": "to act or speak officially for someone; to stand for or symbolize something",
    "cn_def": "代表；象徵；代理（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to act or speak officially for someone; to stand for or symbolize something",
        "cn_def": "代表；象徵；代理（動詞）"
      }
    ]
  },
  "representative": {
    "pos": "n./adj.",
    "en_def": "a person chosen or appointed to act or speak for another (n.); typical of a class (adj.)",
    "cn_def": "代表；代理人（名詞）；有代表性的；典型的（形容詞）",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "a person chosen or appointed to act or speak for another (n.); typical of a class (adj.)",
        "cn_def": "代表；代理人（名詞）；有代表性的；典型的（形容詞）"
      }
    ]
  },
  "resource": {
    "pos": "n.",
    "en_def": "a stock or supply of money, materials, staff, and other assets drawn on by people",
    "cn_def": "資源；財力；物力（可數，常用複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a stock or supply of money, materials, staff, and other assets drawn on by people",
        "cn_def": "資源；財力；物力（可數，常用複數）"
      }
    ]
  },
  "resources": {
    "pos": "n.",
    "en_def": "a stock or supply of money, materials, staff, and other assets drawn on by people",
    "cn_def": "資源；財力；物力（可數，常用複數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a stock or supply of money, materials, staff, and other assets drawn on by people",
        "cn_def": "資源；財力；物力（可數，常用複數）"
      }
    ]
  },
  "resourceful": {
    "pos": "adj.",
    "en_def": "having the ability to find quick and clever ways to overcome difficulties",
    "cn_def": "足智多謀的；機敏靈巧的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having the ability to find quick and clever ways to overcome difficulties",
        "cn_def": "足智多謀的；機敏靈巧的"
      }
    ]
  },
  "sack": {
    "pos": "n.",
    "en_def": "a large bag made of a strong material used for storing or carrying goods",
    "cn_def": "大麻袋；厚紙袋（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large bag made of a strong material used for storing or carrying goods",
        "cn_def": "大麻袋；厚紙袋（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to dismiss someone from employment suddenly",
        "cn_def": "解僱；開除（動詞）"
      }
    ]
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "insufficient for the demand; occurring in small numbers or quantities and difficult to find",
    "cn_def": "稀少的；匱乏的；罕見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "insufficient for the demand; occurring in small numbers or quantities and difficult to find",
        "cn_def": "稀少的；匱乏的；罕見的"
      }
    ]
  },
  "security": {
    "pos": "n.",
    "en_def": "the state of being free from danger or threat; safety precautions",
    "cn_def": "安全；安保；保障；保全（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being free from danger or threat; safety precautions",
        "cn_def": "安全；安保；保障；保全（不可數）"
      }
    ]
  },
  "slice": {
    "pos": "n.",
    "en_def": "a thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion",
    "cn_def": "一片；薄片；部分（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion",
        "cn_def": "一片；薄片；部分（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to cut something into slices with a sharp knife",
        "cn_def": "切成薄片；切開（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
