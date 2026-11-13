// Lesson 90 Quiz Data: Classical Music, Risk Perception, Leadership & Academic Majors
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 90 - Classical Music, Risk Perception, Leadership & Academic Majors",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "classical",
    "pos": "adj.",
    "cn_def": "古典的；傳統的",
    "en_def": "traditional in style or form; relating to serious orchestral music",
    "sentence": "Listening to soothing {{BLANK}} piano music by Mozart helps many students concentrate while preparing for exams.",
    "cn": "聆聽莫札特舒緩的古典鋼琴音樂有助於許多學生在準備考試時集中注意力。"
  },
  {
    "word": "danger",
    "pos": "n.",
    "cn_def": "危險；威脅",
    "en_def": "the possibility of suffering harm, injury, or death",
    "sentence": "Tourists were warned not to hike near the active volcano because of the severe {{BLANK}} of poisonous sulfur gas leaks.",
    "cn": "遊客被警告不要在活火山附近健行，因為存在有毒硫磺氣體洩漏的嚴重危險。"
  },
  {
    "word": "former",
    "pos": "adj. / n.",
    "cn_def": "從前的；前者的；前任的",
    "en_def": "having previously been a particular thing; the first mentioned",
    "sentence": "The {{BLANK}} prime minister delivered an inspiring speech on world peace at the international diplomatic summit yesterday.",
    "cn": "前首相昨天在國際外交峰會上就世界和平發表了激勵人心的演講。"
  },
  {
    "word": "impossible",
    "pos": "adj.",
    "cn_def": "不可能的；辦不到的",
    "en_def": "not able to occur, exist, or be done",
    "sentence": "Without modern satellite GPS navigation, finding a safe path across the vast snowy wilderness would be completely {{BLANK}}.",
    "cn": "如果沒有現代衛星 GPS 導航，要在廣袤的白雪荒原中找到安全的道路將是完全不可能的。"
  },
  {
    "word": "instant",
    "pos": "adj. / n.",
    "cn_def": "立即的；速食的；瞬間",
    "en_def": "happening immediately; prepared quickly; a moment",
    "sentence": "College dorm students often boil water to make {{BLANK}} noodles when they study late at night and feel hungry.",
    "cn": "大學宿舍學生深夜讀書感到飢餓時，經常燒開水煮泡麵吃。"
  },
  {
    "word": "mass",
    "pos": "n. / adj.",
    "cn_def": "大量；群眾；大眾的",
    "en_def": "a large amount of something; bulk; relating to large numbers",
    "sentence": "The metropolitan city launched a new {{BLANK}} rapid transit network to ease chronic traffic congestion on the roads.",
    "cn": "這座大都會城市啟動了新的大眾捷運系統網路，以緩解道路上長期的交通壅塞。"
  },
  {
    "word": "chief",
    "pos": "adj. / n.",
    "cn_def": "首要的；首領；長官",
    "en_def": "most important; the leader or head of an organization",
    "sentence": "Air pollution from industrial coal-burning plants is the {{BLANK}} cause of chronic respiratory diseases in the region.",
    "cn": "工業燃煤電廠排放的空氣污染是該地區慢性呼吸道疾病的首要病因。"
  },
  {
    "word": "main",
    "pos": "adj.",
    "cn_def": "主要的；最重要的",
    "en_def": "most important, largest, or most significant",
    "sentence": "The {{BLANK}} entrance of the national library was decorated with vibrant floral banners for the cultural festival.",
    "cn": "國家圖書館的正門入口處裝飾著充滿活力的花卉旗幟，迎接文化節的到來。"
  },
  {
    "word": "major",
    "pos": "adj. / n. / v.",
    "cn_def": "主要的；主修；主修學科",
    "en_def": "very large, serious, or important; academic focus; to specialize",
    "sentence": "David decided to {{BLANK}} in computer software engineering at National Taiwan University because of his love for coding.",
    "cn": "因為熱愛寫程式，戴維決定在國立台灣大學主修電腦軟體工程。"
  },
  {
    "word": "minor",
    "pos": "adj. / n.",
    "cn_def": "次要的；輕微的；未成年人",
    "en_def": "less important or serious; a person under legal age",
    "sentence": "The driver suffered only a few {{BLANK}} scratches on his elbow and was discharged from the hospital after thirty minutes.",
    "cn": "司機手肘僅受了幾處輕微擦傷，三十分鐘後便出院了。"
  }
];

const MCQS = [
  {
    "q": "She enjoys listening to ______ orchestra concerts on Saturday evenings because the violin melodies calm her mind.",
    "options": [
      "former",
      "classical",
      "impossible",
      "instant"
    ],
    "answer": 1,
    "cn": "她喜歡在星期六晚上聆聽古典管弦樂團音樂會，因為小提琴的旋律能讓她心情平靜。 【選項解析】(A) classical 古典的  (B) former 從前的  (C) impossible 不可能的  (D) instant 立即的。古典管弦樂為 classical orchestra。",
    "vocabIndex": 0
  },
  {
    "q": "Warning signs were placed along the steep mountain cliff to alert hikers to the serious ______ of falling rocks.",
    "options": [
      "major",
      "mass",
      "chief",
      "danger"
    ],
    "answer": 3,
    "cn": "陡峭的山崖沿線豎立了警告牌，提醒登山者落石的嚴重危險。 【選項解析】(A) danger 危險  (B) mass 大量  (C) chief 主要的  (D) major 重大的。嚴重的危險為 serious danger。",
    "vocabIndex": 1
  },
  {
    "q": "Mr. Harrison is a ______ high school chemistry teacher who now writes popular science books for children.",
    "options": [
      "classical",
      "impossible",
      "former",
      "instant"
    ],
    "answer": 2,
    "cn": "哈里森先生曾任高中化學老師，現在為兒童撰寫通俗科普讀物。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。前任高中老師為 former teacher。",
    "vocabIndex": 2
  },
  {
    "q": "Without carrying adequate drinking water in the desert heat, walking twenty miles in a single day is nearly ______.",
    "options": [
      "impossible",
      "former",
      "classical",
      "instant"
    ],
    "answer": 0,
    "cn": "在酷熱的沙漠中不帶足夠的飲用水，一天之內徒步二十英里幾乎是不可能的。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。不可能的為 nearly impossible。",
    "vocabIndex": 3
  },
  {
    "q": "When you send an email on the internet, the message is delivered to the recipient across the world in an ______.",
    "options": [
      "classical",
      "former",
      "impossible",
      "instant"
    ],
    "answer": 3,
    "cn": "當你在網際網路上發送電子郵件時，訊息會在瞬間傳遞給世界各地的收件人。 【選項解析】(A) instant 瞬間  (B) former 前者  (C) impossible 不可能的  (D) classical 古典的。in an instant 表示「瞬間；立刻」。",
    "vocabIndex": 4
  },
  {
    "q": "Investing in public ______ transit such as electric subways and city buses helps cut down carbon emissions effectively.",
    "options": [
      "danger",
      "chief",
      "mass",
      "major"
    ],
    "answer": 2,
    "cn": "投資興建大眾捷運系統（例如電聯地鐵和市區公車）有助於有效減少碳排放。 【選項解析】(A) danger 危險  (B) mass 大眾的  (C) chief 主要的  (D) major 重大的。大眾運輸捷運為 mass transit。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ engineer examined the suspension bridge blueprints carefully before construction crews began pouring concrete.",
    "options": [
      "chief",
      "mass",
      "danger",
      "minor"
    ],
    "answer": 0,
    "cn": "在施工人員開始澆築混凝土之前，總工程師仔細檢查了吊橋工程藍圖。 【選項解析】(A) danger 危險  (B) mass 大量  (C) chief 首席的/主管  (D) minor 次要的。總工程師為 chief engineer。",
    "vocabIndex": 6
  },
  {
    "q": "The ______ purpose of establishing the wildlife sanctuary was to protect endangered black bears from illegal hunting.",
    "options": [
      "former",
      "main",
      "impossible",
      "instant"
    ],
    "answer": 1,
    "cn": "建立野生動物保護區的主要目的是保護瀕臨滅絕的黑熊免遭非法捕獵。 【選項解析】(A) main 主要的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。主要目的為 main purpose。",
    "vocabIndex": 7
  },
  {
    "q": "In university, Angela chose to ______ in English literature, and she hopes to work as a professional literary translator.",
    "options": [
      "major",
      "mass",
      "danger",
      "minor"
    ],
    "answer": 0,
    "cn": "在大學裡，安琪拉選擇主修英國文學，她希望未來能成為一名專業的文學翻譯家。 【選項解析】(A) danger 危險  (B) mass 大眾  (C) major 主修  (D) minor 輔修/次要的。主修某學科為 major in sth。",
    "vocabIndex": 8
  },
  {
    "q": "Fortunately, the two cars collided at low speed in the parking lot, causing only ______ cosmetic damage to their bumpers.",
    "options": [
      "classical",
      "minor",
      "impossible",
      "former"
    ],
    "answer": 1,
    "cn": "幸運的是，兩輛車在停車場低速相撞，保險桿僅受到輕微的外觀刮損。 【選項解析】(A) classical 古典的  (B) former 前者的  (C) impossible 不可能的  (D) minor 輕微的。輕微損壞為 minor damage。",
    "vocabIndex": 9
  },
  {
    "q": "Beethoven and Mozart are two of the most celebrated composers in the history of European ______ music.",
    "options": [
      "instant",
      "former",
      "impossible",
      "classical"
    ],
    "answer": 3,
    "cn": "貝多芬和莫札特是歐洲古典音樂歷史上最著名的兩位作曲家。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。古典音樂為 classical music。",
    "vocabIndex": 0
  },
  {
    "q": "Swimming in the ocean during a typhoon is strictly forbidden because the gigantic waves pose an extreme ______ to human life.",
    "options": [
      "chief",
      "mass",
      "danger",
      "major"
    ],
    "answer": 2,
    "cn": "颱風期間嚴禁在海中游泳，因為滔天巨浪對人體生命構成了極大的危險。 【選項解析】(A) danger 危險  (B) mass 大量  (C) chief 主要的  (D) major 重大的。極端危險為 extreme danger。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ president of the university returned to campus as a guest lecturer to talk about international education policies.",
    "options": [
      "classical",
      "instant",
      "impossible",
      "former"
    ],
    "answer": 3,
    "cn": "該大學前校長重返校園擔任客座講師，探討國際教育政策方針。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。前任校長為 former president。",
    "vocabIndex": 2
  },
  {
    "q": "It is virtually ______ to master a foreign language without practicing speaking and listening regularly in real situations.",
    "options": [
      "impossible",
      "former",
      "classical",
      "instant"
    ],
    "answer": 0,
    "cn": "如果不在真實情境中定期練習說和聽，要精通一門外語實際上是不可能的。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。實質上不可能為 virtually impossible。",
    "vocabIndex": 3
  },
  {
    "q": "Many busy office workers prefer to drink ______ coffee in the morning because it takes only thirty seconds to prepare.",
    "options": [
      "former",
      "instant",
      "impossible",
      "classical"
    ],
    "answer": 1,
    "cn": "許多忙碌的上班族喜歡在早晨喝即溶咖啡，因為沖泡只需三十秒。 【選項解析】(A) instant 即溶的  (B) former 從前的  (C) impossible 不可能的  (D) classical 古典的。即溶咖啡為 instant coffee。",
    "vocabIndex": 4
  },
  {
    "q": "The sudden earthquake generated a huge ______ of falling mud and boulders that temporarily blocked the railway tracks.",
    "options": [
      "danger",
      "chief",
      "mass",
      "major"
    ],
    "answer": 2,
    "cn": "突發地震引發了大量泥石和巨石滾落，暫時阻斷了鐵路軌道。 【選項解析】(A) danger 危險  (B) mass 大量/大塊  (C) chief 主要的  (D) major 重大的。大批巨石泥土為 huge mass of mud。",
    "vocabIndex": 5
  },
  {
    "q": "Lack of regular physical exercise is considered the ______ contributing factor to obesity among urban teenagers today.",
    "options": [
      "chief",
      "mass",
      "danger",
      "minor"
    ],
    "answer": 0,
    "cn": "缺乏規律的體育鍛鍊被認為是當今都市青少年肥胖的首要誘因。 【選項解析】(A) danger 危險  (B) mass 大眾  (C) chief 首要的  (D) minor 次要的。主要促成因素為 chief contributing factor。",
    "vocabIndex": 6
  },
  {
    "q": "The ______ bedroom of the new house has a spacious balcony overlooking the peaceful community garden.",
    "options": [
      "instant",
      "former",
      "impossible",
      "main"
    ],
    "answer": 3,
    "cn": "新房子的主臥室設有一個寬敞的陽台，可以俯瞰寧靜的社區花園。 【選項解析】(A) main 主/主要的  (B) former 前者的  (C) impossible 不可能的  (D) instant 立即的。主臥室為 main bedroom。",
    "vocabIndex": 7
  },
  {
    "q": "Climate change is one of the most ______ challenges confronting human civilization in the twenty-first century.",
    "options": [
      "danger",
      "mass",
      "major",
      "minor"
    ],
    "answer": 2,
    "cn": "氣候變遷是二十一世紀人類文明所面臨的最重大的挑戰之一。 【選項解析】(A) danger 危險  (B) mass 大眾  (C) major 重大的  (D) minor 次要的。重大挑戰為 major challenge。",
    "vocabIndex": 8
  },
  {
    "q": "It is illegal in most countries to sell tobacco or alcoholic beverages to any ______ under eighteen years of age.",
    "options": [
      "classical",
      "minor",
      "impossible",
      "former"
    ],
    "answer": 1,
    "cn": "在大多數國家，向十八歲以下的未成年人出售菸草或酒精飲料都是違法的。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) minor 未成年人。十八歲以下未成年人為 minor。",
    "vocabIndex": 9
  },
  {
    "q": "The prestigious music academy offers intensive training programs in both ______ opera singing and modern pop performance.",
    "options": [
      "classical",
      "former",
      "impossible",
      "instant"
    ],
    "answer": 0,
    "cn": "這所負盛名的音樂學院提供古典歌劇演唱和現代流行表演的密集培訓課程。 【選項解析】(A) classical 古典的  (B) former 從前的  (C) impossible 不可能的  (D) instant 立即的。古典歌劇為 classical opera。",
    "vocabIndex": 0
  },
  {
    "q": "Firefighters bravely rushed into the burning apartment building, knowing that their lives were in immediate ______.",
    "options": [
      "major",
      "mass",
      "chief",
      "danger"
    ],
    "answer": 3,
    "cn": "消防隊員英勇地衝進燃燒的公寓大樓，深知他們的生命正處於直接的危險之中。 【選項解析】(A) danger 危險  (B) mass 大量  (C) chief 首席的  (D) major 重大的。處於危險中為 in immediate danger。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ champion returned to the boxing ring after three years of retirement to reclaim his heavyweight championship belt.",
    "options": [
      "classical",
      "former",
      "impossible",
      "instant"
    ],
    "answer": 1,
    "cn": "前任拳王在退役三年後重返拳擊擂台，奪回了他的重量級冠軍金腰帶。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) instant 立即的。前冠軍為 former champion。",
    "vocabIndex": 2
  },
  {
    "q": "Finishing this complex statistical report within thirty minutes is practically ______ without using computer spreadsheet software.",
    "options": [
      "classical",
      "former",
      "impossible",
      "instant"
    ],
    "answer": 2,
    "cn": "如果不用電腦試算表軟體，在三十分鐘內完成這份複雜的統計報告幾乎是不可能的。 【選項解析】(A) classical 古典的  (B) former 從前的  (C) impossible 不可能的  (D) instant 立即的。幾乎不可能為 practically impossible。",
    "vocabIndex": 3
  },
  {
    "q": "Fortunately, the electrical failure was only a ______ problem that our technician resolved in less than ten minutes.",
    "options": [
      "classical",
      "former",
      "impossible",
      "minor"
    ],
    "answer": 3,
    "cn": "幸運的是，電氣故障只是一個輕微的小問題，我們的技術人員在不到十分鐘內就修好了。 【選項解析】(A) classical 古典的  (B) former 前任的  (C) impossible 不可能的  (D) minor 輕微的。輕微問題為 minor problem。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "classical": {
    "pos": "adj.",
    "en_def": "traditional in style or form; relating to serious orchestral music",
    "cn_def": "古典的；傳統的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "traditional in style or form; relating to serious orchestral music",
        "cn_def": "古典的；傳統的"
      }
    ]
  },
  "danger": {
    "pos": "n.",
    "en_def": "the possibility of suffering harm, injury, or death",
    "cn_def": "危險；威脅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the possibility of suffering harm, injury, or death",
        "cn_def": "危險；威脅"
      }
    ]
  },
  "former": {
    "pos": "adj. / n.",
    "en_def": "having previously been a particular thing; the first mentioned",
    "cn_def": "從前的；前者的；前任的",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "having previously been a particular thing; the first mentioned",
        "cn_def": "從前的；前者的；前任的"
      }
    ]
  },
  "impossible": {
    "pos": "adj.",
    "en_def": "not able to occur, exist, or be done",
    "cn_def": "不可能的；辦不到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to occur, exist, or be done",
        "cn_def": "不可能的；辦不到的"
      }
    ]
  },
  "instant": {
    "pos": "adj. / n.",
    "en_def": "happening immediately; prepared quickly; a moment",
    "cn_def": "立即的；速食的；瞬間",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "happening immediately; prepared quickly; a moment",
        "cn_def": "立即的；速食的；瞬間"
      }
    ]
  },
  "mass": {
    "pos": "n. / adj.",
    "en_def": "a large amount of something; bulk; relating to large numbers",
    "cn_def": "大量；群眾；大眾的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a large amount of something; bulk; relating to large numbers",
        "cn_def": "大量；群眾；大眾的"
      }
    ]
  },
  "chief": {
    "pos": "adj. / n.",
    "en_def": "most important; the leader or head of an organization",
    "cn_def": "首要的；首領；長官",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "most important; the leader or head of an organization",
        "cn_def": "首要的；首領；長官"
      }
    ]
  },
  "main": {
    "pos": "adj.",
    "en_def": "most important, largest, or most significant",
    "cn_def": "主要的；最重要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "most important, largest, or most significant",
        "cn_def": "主要的；最重要的"
      }
    ]
  },
  "major": {
    "pos": "adj. / n. / v.",
    "en_def": "very large, serious, or important; academic focus; to specialize",
    "cn_def": "主要的；主修；主修學科",
    "combined": [
      {
        "pos": "adj. / n. / v.",
        "en_def": "very large, serious, or important; academic focus; to specialize",
        "cn_def": "主要的；主修；主修學科"
      }
    ]
  },
  "minor": {
    "pos": "adj. / n.",
    "en_def": "less important or serious; a person under legal age",
    "cn_def": "次要的；輕微的；未成年人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "less important or serious; a person under legal age",
        "cn_def": "次要的；輕微的；未成年人"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
