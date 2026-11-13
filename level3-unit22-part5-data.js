// Part 5 Quiz Data: stadium – weave
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 22-5 - stadium – weave",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "stadium",
    "pos": "n.",
    "cn_def": "體育場；大型競技場",
    "en_def": "a sports arena with tiers of seats for spectators",
    "sentence": "Over eighty thousand passionate soccer fans gathered inside the national sports {{BLANK}} for the final match.",
    "cn": "超過八萬名熱情的足球迷聚集在國家體育場內觀看決賽。"
  },
  {
    "word": "subtract",
    "pos": "v.",
    "cn_def": "減去；扣除",
    "en_def": "to take away a number or amount from another to calculate the difference",
    "sentence": "Elementary school children learn how to add and {{BLANK}} basic numbers before moving on to multiplication.",
    "cn": "小學生在學習乘法之前，會先學習如何進行基本數字的加與減。"
  },
  {
    "word": "subtraction",
    "pos": "n.",
    "cn_def": "減法；扣除",
    "en_def": "the mathematical process of taking one number away from another",
    "sentence": "Mastering addition and {{BLANK}} provides a foundational mathematical skillset for young elementary students.",
    "cn": "掌握加減法為年輕小學生提供了基礎的數學技能。"
  },
  {
    "word": "terrific",
    "pos": "adj.",
    "cn_def": "極好的；絕佳的；極大的",
    "en_def": "of great size or intensity; extremely good; wonderful",
    "sentence": "The theatrical cast put on a {{BLANK}} performance that earned a five-minute standing ovation from the audience.",
    "cn": "劇團演員帶來了極佳的演出，贏得了觀眾長達五分鐘的起立鼓掌。"
  },
  {
    "word": "thirst",
    "pos": "n./v.",
    "cn_def": "口渴；渴望",
    "en_def": "a feeling of needing to drink; a strong desire for something",
    "sentence": "After completing the grueling twenty-mile marathon, he drank two large bottles of water to quench his {{BLANK}}.",
    "cn": "在完成了艱苦的二十英里馬拉松後，他喝了兩大瓶水來解渴。"
  },
  {
    "word": "threat",
    "pos": "n.",
    "cn_def": "威脅；恐嚇；凶兆",
    "en_def": "a statement of an intention to inflict harm; a menace or danger",
    "sentence": "The increasing discharge of untreated industrial waste poses a severe {{BLANK}} to local aquatic ecosystems.",
    "cn": "未經處理的工業廢水排放量增加，對當地水生生態系統構成了嚴重威脅。"
  },
  {
    "word": "threatened",
    "pos": "v.",
    "cn_def": "威脅；威嚇；危及",
    "en_def": "to state one's intention to take hostile action; to endanger",
    "sentence": "The disgruntled employee {{BLANK}} to reveal confidential commercial trade secrets unless he was given a promotion.",
    "cn": "這名不滿的員工威脅要透露機密的商業商業機密，除非他獲得晉升。"
  },
  {
    "word": "weaken",
    "pos": "v.",
    "cn_def": "削弱；變虛弱",
    "en_def": "to make or become less strong, powerful, or effective",
    "sentence": "Chronic sleep deprivation and poor nutrition will gradually {{BLANK}} the human body's natural immune system.",
    "cn": "長期睡眠不足與營養不良會逐漸削弱人體自然的免疫系統。"
  },
  {
    "word": "weave",
    "pos": "v./n.",
    "cn_def": "編織；編造(故事)；穿梭",
    "en_def": "to form fabric by interlacing threads; to twist in and out",
    "sentence": "The indigenous artisans carefully {{BLANK}} traditional bamboo baskets using techniques passed down across generations.",
    "cn": "原住民工匠運用代代相傳的技藝精心編織傳統竹籃。"
  }
];

const MCQS = [
  {
    "q": "The newly constructed soccer ______ can seat up to sixty thousand spectators during international tournaments.",
    "options": [
      "subtraction",
      "threat",
      "thirst",
      "stadium"
    ],
    "answer": 3,
    "cn": "這座新建的足球體育場在國際賽事期間可容納多達六萬名觀眾。",
    "vocabIndex": 0
  },
  {
    "q": "If you ______ the cost of production from total revenue, you will arrive at the gross profit.",
    "options": [
      "weave",
      "threaten",
      "subtract",
      "weaken"
    ],
    "answer": 2,
    "cn": "如果你從總收入中扣除生產成本，你就會得到毛利潤。",
    "vocabIndex": 1
  },
  {
    "q": "First-grade mathematics focuses heavily on mastering simple single-digit addition and ______.",
    "options": [
      "stadium",
      "subtraction",
      "thirst",
      "threat"
    ],
    "answer": 1,
    "cn": "一年級數學著重於掌握簡單的個位數加減法。",
    "vocabIndex": 2
  },
  {
    "q": "The restaurant critic praised the chef for serving a ______ five-course seafood tasting menu.",
    "options": [
      "terrific",
      "bitter",
      "hateful",
      "skinny"
    ],
    "answer": 0,
    "cn": "餐廳評論家稱讚主廚端出了一套極佳的五道菜海鮮品嚐菜單。",
    "vocabIndex": 3
  },
  {
    "q": "A cool glass of lemonade was just what the hiker needed to quench his intense ______.",
    "options": [
      "stadium",
      "thirst",
      "subtraction",
      "threat"
    ],
    "answer": 1,
    "cn": "一杯清涼的檸檬水正是健行者解渴所需要的。",
    "vocabIndex": 4
  },
  {
    "q": "Cybersecurity experts warn that ransomware attacks represent an existential ______ to modern hospitals.",
    "options": [
      "subtraction",
      "thirst",
      "threat",
      "stadium"
    ],
    "answer": 2,
    "cn": "網路安全專家警告，勒索軟體攻擊對現代醫院構成了生死攸關的威脅。",
    "vocabIndex": 5
  },
  {
    "q": "The aggressive neighborhood dog barked fiercely and seemed to ______ anyone passing by the gate.",
    "options": [
      "weaken",
      "subtract",
      "weave",
      "threaten"
    ],
    "answer": 3,
    "cn": "那隻好鬥的鄰居狗猛烈狂吠，似乎在威脅任何走過大門的人。",
    "vocabIndex": 6
  },
  {
    "q": "Severe malnutrition will rapidly ______ a patient's physical strength and cognitive abilities.",
    "options": [
      "weaken",
      "threaten",
      "weave",
      "subtract"
    ],
    "answer": 0,
    "cn": "嚴重的營養不良會迅速削弱患者的體力與認知能力。",
    "vocabIndex": 7
  },
  {
    "q": "The elderly village craftswoman showed the children how to ______ wool into colorful winter scarves.",
    "options": [
      "subtract",
      "weaken",
      "weave",
      "threaten"
    ],
    "answer": 2,
    "cn": "年邁的村莊女工匠向孩子們展示如何將羊毛編織成色彩繽紛的冬季圍巾。",
    "vocabIndex": 8
  },
  {
    "q": "The Olympic athletes marched proudly around the Olympic ______ during the opening ceremony.",
    "options": [
      "stadium",
      "threat",
      "subtraction",
      "thirst"
    ],
    "answer": 0,
    "cn": "在開幕式期間，奧運運動員自豪地繞著奧林匹克體育場遊行。",
    "vocabIndex": 0
  },
  {
    "q": "Remember to ______ any discount coupons you have before calculating the final invoice amount.",
    "options": [
      "threaten",
      "weaken",
      "weave",
      "subtract"
    ],
    "answer": 3,
    "cn": "在計算最終發票金額之前，切記要扣除你所有的任何折扣券。",
    "vocabIndex": 1
  },
  {
    "q": "The talented young pianist gave a ______ concert that left the entire theater spellbound.",
    "options": [
      "hasty",
      "terrific",
      "bitter",
      "skinny"
    ],
    "answer": 1,
    "cn": "這位才華橫溢的年輕鋼琴家舉行了一場極棒的音樂會，令整個劇場為之傾倒。",
    "vocabIndex": 3
  },
  {
    "q": "His insatiable ______ for knowledge led him to spend endless weekends reading in the public library.",
    "options": [
      "stadium",
      "subtraction",
      "threat",
      "thirst"
    ],
    "answer": 3,
    "cn": "他對知識難以遏制的渴望促使他在公共圖書館度過無數個週末閱讀。",
    "vocabIndex": 4
  },
  {
    "q": "The general refused to yield to the enemy's aggressive ______ of military intervention.",
    "options": [
      "subtractions",
      "thirsts",
      "threats",
      "stadiums"
    ],
    "answer": 2,
    "cn": "將軍拒絕向敵人軍事干預的侵略性威脅屈服。",
    "vocabIndex": 5
  },
  {
    "q": "Rising inflation continues to ______ the purchasing power of low-income families.",
    "options": [
      "subtract",
      "weaken",
      "weave",
      "threaten"
    ],
    "answer": 1,
    "cn": "不斷上升的通貨膨脹繼續削弱低收入家庭的購買力。",
    "vocabIndex": 7
  },
  {
    "q": "In literature class, the professor analyzed how Shakespeare managed to ______ multiple plot lines seamlessly.",
    "options": [
      "weave",
      "threaten",
      "subtract",
      "weaken"
    ],
    "answer": 0,
    "cn": "在文學課上，教授分析了莎士比亞如何無縫地編織多條情節線索。",
    "vocabIndex": 8
  },
  {
    "q": "The baseball championship game had to be relocated to an indoor ______ due to heavy thunderstorms.",
    "options": [
      "thirst",
      "threat",
      "stadium",
      "subtraction"
    ],
    "answer": 2,
    "cn": "由於嚴重的雷陣雨，棒球錦標賽不得不改到室內體育場舉行。",
    "vocabIndex": 0
  },
  {
    "q": "To find your net monthly income, you must ______ health insurance premiums and taxes from your base salary.",
    "options": [
      "weaken",
      "threaten",
      "weave",
      "subtract"
    ],
    "answer": 3,
    "cn": "要算出你每月的淨收入，你必須從基本工資中扣除健保費和稅金。",
    "vocabIndex": 1
  },
  {
    "q": "Everyone agreed that the keynote speaker did a ______ job delivering an inspiring graduation address.",
    "options": [
      "terrific",
      "bitter",
      "hateful",
      "skinny"
    ],
    "answer": 0,
    "cn": "大家都同意主題演講者在發表鼓舞人心的畢業演講方面表現得極為出色。",
    "vocabIndex": 3
  },
  {
    "q": "Desert travelers carry canteens of water to prevent dying from extreme dehydration and ______.",
    "options": [
      "stadium",
      "thirst",
      "subtraction",
      "threat"
    ],
    "answer": 1,
    "cn": "沙漠旅行者攜帶水壺以防因極度脫水和口渴而死亡。",
    "vocabIndex": 4
  },
  {
    "q": "The sudden collapse of the major regional bank posed a severe ______ to financial market stability.",
    "options": [
      "stadium",
      "subtraction",
      "threat",
      "thirst"
    ],
    "answer": 2,
    "cn": "該主要區域銀行的突然倒閉對金融市場穩定構成了嚴重威脅。",
    "vocabIndex": 5
  },
  {
    "q": "The storm clouds gathered on the horizon, ______ to ruin the outdoor music festival.",
    "options": [
      "subtracting",
      "weaving",
      "weakening",
      "threatening"
    ],
    "answer": 3,
    "cn": "烏雲在地平線上聚集，威脅著要毀掉這場戶外音樂節。",
    "vocabIndex": 6
  },
  {
    "q": "A lack of foundational trust between partners will inevitably ______ any commercial alliance.",
    "options": [
      "weaken",
      "threaten",
      "weave",
      "subtract"
    ],
    "answer": 0,
    "cn": "合作夥伴之間缺乏基本信任將不可避免地削弱任何商業聯盟。",
    "vocabIndex": 7
  },
  {
    "q": "Spiders use silk produced from specialized glands to ______ intricate and sticky webs.",
    "options": [
      "threaten",
      "weave",
      "subtract",
      "weaken"
    ],
    "answer": 1,
    "cn": "蜘蛛利用專門腺體產生的蛛絲來編織複雜且有黏性的網。",
    "vocabIndex": 8
  },
  {
    "q": "Tax deductions involve the legal ______ of qualifying expenses from gross taxable income.",
    "options": [
      "thirst",
      "threat",
      "stadium",
      "subtraction"
    ],
    "answer": 3,
    "cn": "稅額扣除涉及從應稅總收入中合法扣除合格開支。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "stadium": {
    "pos": "n.",
    "en_def": "a sports arena with tiers of seats for spectators",
    "cn_def": "體育場；大型競技場",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sports arena with tiers of seats for spectators",
        "cn_def": "體育場；大型競技場"
      }
    ]
  },
  "subtract": {
    "pos": "v.",
    "en_def": "to take away a number or amount from another to calculate the difference",
    "cn_def": "減去；扣除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take away a number or amount from another to calculate the difference",
        "cn_def": "減去；扣除"
      }
    ]
  },
  "subtraction": {
    "pos": "n.",
    "en_def": "the mathematical process of taking one number away from another",
    "cn_def": "減法；扣除",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the mathematical process of taking one number away from another",
        "cn_def": "減法；扣除"
      }
    ]
  },
  "terrific": {
    "pos": "adj.",
    "en_def": "of great size or intensity; extremely good; wonderful",
    "cn_def": "極好的；絕佳的；極大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of great size or intensity; extremely good; wonderful",
        "cn_def": "極好的；絕佳的；極大的"
      }
    ]
  },
  "thirst": {
    "pos": "n./v.",
    "en_def": "a feeling of needing to drink; a strong desire for something",
    "cn_def": "口渴；渴望",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a feeling of needing to drink; a strong desire for something",
        "cn_def": "口渴；渴望"
      }
    ]
  },
  "threat": {
    "pos": "n.",
    "en_def": "a statement of an intention to inflict harm; a menace or danger",
    "cn_def": "威脅；恐嚇；凶兆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement of an intention to inflict harm; a menace or danger",
        "cn_def": "威脅；恐嚇；凶兆"
      }
    ]
  },
  "threaten": {
    "pos": "v.",
    "en_def": "to state one's intention to take hostile action; to endanger",
    "cn_def": "威脅；威嚇；危及",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to state one's intention to take hostile action; to endanger",
        "cn_def": "威脅；威嚇；危及"
      }
    ]
  },
  "threatened": {
    "pos": "v.",
    "en_def": "to state one's intention to take hostile action; to endanger",
    "cn_def": "威脅；威嚇；危及",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to state one's intention to take hostile action; to endanger",
        "cn_def": "威脅；威嚇；危及"
      }
    ]
  },
  "weaken": {
    "pos": "v.",
    "en_def": "to make or become less strong, powerful, or effective",
    "cn_def": "削弱；變虛弱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become less strong, powerful, or effective",
        "cn_def": "削弱；變虛弱"
      }
    ]
  },
  "weave": {
    "pos": "v./n.",
    "en_def": "to form fabric by interlacing threads; to twist in and out",
    "cn_def": "編織；編造(故事)；穿梭",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to form fabric by interlacing threads; to twist in and out",
        "cn_def": "編織；編造(故事)；穿梭"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
