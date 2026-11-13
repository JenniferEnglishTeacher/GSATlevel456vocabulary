// Part 2 Quiz Data: familiar – gum
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 19-2 - familiar – gum",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "familiar",
    "pos": "adj.",
    "cn_def": "熟悉的；熟知的；常見的",
    "en_def": "well known from long or close association; easily recognized",
    "sentence": "Our new office manager is very {{BLANK}} with the complicated digital software used for tracking inventory.",
    "cn": "我們的新辦公室經理非常熟悉用於追蹤庫存的複雜數位軟體。"
  },
  {
    "word": "frank",
    "pos": "adj.",
    "cn_def": "坦白的；直率的；真誠的",
    "en_def": "open, honest, and direct in speech or writing",
    "sentence": "To be {{BLANK}}, I do not believe that their ambitious business plan will succeed without substantial outside investment.",
    "cn": "坦白說，如果沒有大量的外部投資，我不認為他們雄心勃勃的商業計劃會成功。"
  },
  {
    "word": "fright",
    "pos": "n.",
    "cn_def": "驚嚇；恐懼；驚恐（不可數/可數）",
    "en_def": "a sudden intense feeling of fear or shock",
    "sentence": "When the loud thunder roared right above the house, the sudden noise gave the sleeping baby a terrible {{BLANK}}.",
    "cn": "當響雷在房屋正上方轟鳴時，突如其來的巨響把熟睡中的嬰兒嚇了一大跳。"
  },
  {
    "word": "fuels",
    "pos": "n.",
    "cn_def": "燃料；提供力量的來源（不可數/可數）",
    "en_def": "material such as coal, gas, or oil burned to produce heat or power",
    "sentence": "Burning excessive amounts of fossil {{BLANK}} has significantly contributed to severe global warming and climate change worldwide.",
    "cn": "燃燒過量的化石燃料在全球範圍內顯著加劇了嚴重的全球暖化與氣候變遷。"
  },
  {
    "word": "fuel",
    "pos": "v.",
    "cn_def": "為…添加燃料；激起；刺激；推動（動詞）",
    "en_def": "to supply with fuel; to sustain or inflame an emotion or argument",
    "sentence": "Rapid advances in artificial intelligence and automation continue to {{BLANK}} strong economic growth across the tech sector.",
    "cn": "人工智慧與自動化的快速發展繼續推動整個科技領域強勁的經濟成長。"
  },
  {
    "word": "gambled",
    "pos": "v.",
    "cn_def": "賭博；冒險；孤注一擲（動詞）",
    "en_def": "to play games of chance for money; to take risky actions in hope of success",
    "sentence": "The foolish young man went to the casino and tragically {{BLANK}} away his entire monthly salary in one evening.",
    "cn": "那個愚蠢的年輕人去賭場，在一晚之內悲劇性地把他的全部月薪在賭博中輸光。"
  },
  {
    "word": "gamble",
    "pos": "n.",
    "cn_def": "賭博；投機；高風險的冒險嘗試（可數）",
    "en_def": "an act of gambling; a risky undertaking with an uncertain outcome",
    "sentence": "Leaving a secure corporate job to open a boutique bakery was a huge {{BLANK}}, but it paid off handsomely.",
    "cn": "離開一份穩定的企業工作去開一家精品烘焙坊是一個巨大的冒險嘗試，但它帶來了豐厚的回報。"
  },
  {
    "word": "greedy",
    "pos": "adj.",
    "cn_def": "貪婪的；貪心的；渴望更多的",
    "en_def": "having or showing an intense and selfish desire for wealth, power, or food",
    "sentence": "The corrupt corporation was so {{BLANK}} for profits that it completely ignored basic environmental safety regulations.",
    "cn": "這家腐敗的企業如此貪求利潤，以至於徹底無視基本的環境安全法規。"
  },
  {
    "word": "grocery",
    "pos": "n.",
    "cn_def": "雜貨店；食品雜貨（常用複數 groceries）（可數）",
    "en_def": "a grocer's store; food and household goods sold by a grocer (groceries)",
    "sentence": "Every Saturday morning, my parents drive to the local {{BLANK}} store to purchase fresh fruits and vegetables.",
    "cn": "每週六早晨，我的父母開車前往當地的食品雜貨店採買新鮮的水果與蔬菜。"
  },
  {
    "word": "gum",
    "pos": "n.",
    "cn_def": "口香糖（不可數）；牙齦；齒齦（常用複數 gums）",
    "en_def": "chewing gum; the firm pink flesh around the roots of the teeth",
    "sentence": "The polite school rule strictly forbids students from chewing sweet bubble {{BLANK}} during formal classroom lectures.",
    "cn": "校規禮貌而嚴格地禁止學生在正式課堂演講期間咀嚼甜甜的泡泡糖／口香糖。"
  }
];

const MCQS = [
  {
    "q": "The sudden loud sound of the fireworks gave the little sleeping puppy a terrible ______.",
    "options": [
      "fright",
      "fuel",
      "gamble",
      "gum"
    ],
    "answer": 0,
    "cn": "突如其來的煙火巨響把熟睡中的小狗嚇了一大跳。",
    "vocabIndex": 2
  },
  {
    "q": "Our car is running low on ______, so we must find a gas station immediately.",
    "options": [
      "grocery",
      "gum",
      "fright",
      "fuel"
    ],
    "answer": 3,
    "cn": "我們的汽車燃料／汽油快用完了，所以我們必須立即找到加油站。",
    "vocabIndex": 3
  },
  {
    "q": "Opening a new coffee shop without business experience is a very risky ______.",
    "options": [
      "fright",
      "gamble",
      "gum",
      "grocery"
    ],
    "answer": 1,
    "cn": "在毫無商業經驗的情況下開設一家新咖啡館是一個非常冒險的投機賭注。",
    "vocabIndex": 5
  },
  {
    "q": "Mom went to the neighborhood ______ to buy milk, eggs, and fresh bread.",
    "options": [
      "fright",
      "fuel",
      "grocery",
      "gamble"
    ],
    "answer": 2,
    "cn": "媽媽去社區的食品雜貨店買牛奶、雞蛋和新鮮麵包。",
    "vocabIndex": 8
  },
  {
    "q": "You should not chew ______ while the teacher is speaking to the class.",
    "options": [
      "gamble",
      "fuel",
      "fright",
      "gum"
    ],
    "answer": 3,
    "cn": "當老師正在對全班講話時，你不應該嚼口香糖。",
    "vocabIndex": 9
  },
  {
    "q": "The dentist checked my teeth and told me that my pink ______ look very healthy.",
    "options": [
      "frights",
      "gums",
      "fuels",
      "gambles"
    ],
    "answer": 1,
    "cn": "牙醫檢查了我的牙齒，並告訴我粉紅色的牙齦看起來非常健康。",
    "vocabIndex": 9
  },
  {
    "q": "Because of severe stage ______, the young boy was afraid to sing in front of people.",
    "options": [
      "fuel",
      "gum",
      "fright",
      "grocery"
    ],
    "answer": 2,
    "cn": "由於嚴重的怯場，那個小男孩不敢在大家面前唱歌。",
    "vocabIndex": 2
  },
  {
    "q": "The large truck consumes a great deal of diesel ______ when driving up steep hills.",
    "options": [
      "fuel",
      "gamble",
      "fright",
      "gum"
    ],
    "answer": 0,
    "cn": "這輛大卡車在開上陡峭的山坡時會消耗大量的柴油燃料。",
    "vocabIndex": 3
  },
  {
    "q": "Dad carried two heavy bags of ______ into the kitchen after shopping at the supermarket.",
    "options": [
      "gums",
      "frights",
      "gambles",
      "groceries"
    ],
    "answer": 3,
    "cn": "在超市採買之後，爸爸提著兩大袋食品雜貨進了廚房。",
    "vocabIndex": 8
  },
  {
    "q": "Taking out a huge bank loan to buy lottery tickets was a foolish ______.",
    "options": [
      "gamble",
      "fuel",
      "gum",
      "grocery"
    ],
    "answer": 0,
    "cn": "向銀行借大筆貸款去買彩券是一個愚蠢的冒險賭注。",
    "vocabIndex": 5
  },
  {
    "q": "The silly man went to the casino and ______ all his hard-earned money away.",
    "options": [
      "peeled",
      "gambled",
      "stirred",
      "drowned"
    ],
    "answer": 1,
    "cn": "那個愚蠢的男子去賭場，把他辛苦賺來的錢全都在賭博中輸光了。",
    "vocabIndex": 5
  },
  {
    "q": "The sudden discovery of oil will ______ economic development in the small town.",
    "options": [
      "peel",
      "stir",
      "fuel",
      "drown"
    ],
    "answer": 2,
    "cn": "突然發現石油將會推動／刺激這個小鎮的經濟發展。",
    "vocabIndex": 3
  },
  {
    "q": "You should never ______ with your safety by driving a car without wearing a seatbelt.",
    "options": [
      "gamble",
      "peel",
      "stir",
      "drown"
    ],
    "answer": 0,
    "cn": "開車時絕不應該不繫安全帶，拿自己的安全去冒險。",
    "vocabIndex": 5
  },
  {
    "q": "The movie star's mysterious post on the internet only served to ______ public curiosity.",
    "options": [
      "peel",
      "stir",
      "fuel",
      "drown"
    ],
    "answer": 2,
    "cn": "電影明星在網路上的神秘貼文只會進一步激起／助長大眾的好奇心。",
    "vocabIndex": 3
  },
  {
    "q": "The gambler decided to ______ on the black horse, hoping to win a fortune.",
    "options": [
      "stir",
      "peel",
      "fuel",
      "gamble"
    ],
    "answer": 3,
    "cn": "這名賭徒決定把錢押注在黑馬身上，希望能贏得一筆財富。",
    "vocabIndex": 5
  },
  {
    "q": "Continuous government investments in clean energy will ______ new job creation.",
    "options": [
      "stir",
      "fuel",
      "gamble",
      "peel"
    ],
    "answer": 1,
    "cn": "政府持續對乾淨能源的投資將會刺激推動新工作的創造。",
    "vocabIndex": 3
  },
  {
    "q": "That man's face looks very ______, but I cannot recall his name right now.",
    "options": [
      "familiar",
      "frank",
      "greedy",
      "stale"
    ],
    "answer": 0,
    "cn": "那個男人的臉看起來非常熟悉，但我現在想不起他的名字。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ dog ate all the food in its bowl and then tried to steal the cat's dinner.",
    "options": [
      "familiar",
      "frank",
      "stale",
      "greedy"
    ],
    "answer": 3,
    "cn": "那隻貪婪的狗吃光了自己碗裡所有的食物，然後試圖偷吃貓咪的晚餐。",
    "vocabIndex": 7
  },
  {
    "q": "My doctor was very ______ with me about the need to exercise and eat less sugar.",
    "options": [
      "familiar",
      "greedy",
      "frank",
      "bloody"
    ],
    "answer": 2,
    "cn": "我的醫生對我非常坦誠直率，說明了運動和少吃糖的必要性。",
    "vocabIndex": 1
  },
  {
    "q": "The melody of the song is ______ to most students because they hear it every day.",
    "options": [
      "greedy",
      "familiar",
      "frank",
      "stale"
    ],
    "answer": 1,
    "cn": "這首歌的旋律對大多數學生來說都很熟悉，因為他們每天都聽得到。",
    "vocabIndex": 0
  },
  {
    "q": "The famous pianist was sweating before the show because she was suffering from ______.",
    "options": [
      "a grocery store",
      "fossil fuels",
      "bubble gum",
      "stage fright"
    ],
    "answer": 3,
    "cn": "這位著名的鋼琴家在演出前直冒汗，因為她正遭受著怯場之苦。",
    "vocabIndex": 2
  },
  {
    "q": "Telling angry lies will only ______ and make the difficult problem much worse.",
    "options": [
      "add fuel to the fire",
      "chew sweet gum",
      "give sb. a fright",
      "take a gamble"
    ],
    "answer": 0,
    "cn": "憤怒地說謊只會火上加油，讓這個棘手的問題變得更糟糕。",
    "vocabIndex": 3
  },
  {
    "q": "______, I do not think our team practiced hard enough to win the trophy.",
    "options": [
      "Stage fright",
      "Add fuel to the fire",
      "To be frank",
      "Fossil fuels"
    ],
    "answer": 2,
    "cn": "坦白說，我不認為我們團隊有足夠的努力練習來贏得這座獎盃。",
    "vocabIndex": 1
  },
  {
    "q": "The new computer technician is very ______ our company's operating system.",
    "options": [
      "greedy for",
      "familiar with",
      "to be frank",
      "stage fright"
    ],
    "answer": 1,
    "cn": "新進的電腦技術人員非常熟悉我們公司的作業系統。",
    "vocabIndex": 0
  },
  {
    "q": "The selfish king was so ______ gold and land that he started unnecessary wars.",
    "options": [
      "familiar with",
      "to be frank",
      "add fuel to",
      "greedy for"
    ],
    "answer": 3,
    "cn": "那位自私的國王非常貪求黃金與土地，以至於發動了不必要的戰爭。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "familiar": {
    "pos": "adj.",
    "en_def": "well known from long or close association; easily recognized",
    "cn_def": "熟悉的；熟知的；常見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "well known from long or close association; easily recognized",
        "cn_def": "熟悉的；熟知的；常見的"
      }
    ]
  },
  "frank": {
    "pos": "adj.",
    "en_def": "open, honest, and direct in speech or writing",
    "cn_def": "坦白的；直率的；真誠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "open, honest, and direct in speech or writing",
        "cn_def": "坦白的；直率的；真誠的"
      }
    ]
  },
  "fright": {
    "pos": "n.",
    "en_def": "a sudden intense feeling of fear or shock",
    "cn_def": "驚嚇；恐懼；驚恐（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sudden intense feeling of fear or shock",
        "cn_def": "驚嚇；恐懼；驚恐（不可數/可數）"
      }
    ]
  },
  "fuel": {
    "pos": "n.",
    "en_def": "material such as coal, gas, or oil burned to produce heat or power",
    "cn_def": "燃料；提供力量的來源（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "material such as coal, gas, or oil burned to produce heat or power",
        "cn_def": "燃料；提供力量的來源（不可數/可數）"
      },
      {
        "pos": "v.",
        "en_def": "to supply with fuel; to sustain or inflame an emotion or argument",
        "cn_def": "為…添加燃料；激起；刺激；推動（動詞）"
      }
    ]
  },
  "fuels": {
    "pos": "n.",
    "en_def": "material such as coal, gas, or oil burned to produce heat or power",
    "cn_def": "燃料；提供力量的來源（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "material such as coal, gas, or oil burned to produce heat or power",
        "cn_def": "燃料；提供力量的來源（不可數/可數）"
      }
    ]
  },
  "gamble": {
    "pos": "v.",
    "en_def": "to play games of chance for money; to take risky actions in hope of success",
    "cn_def": "賭博；冒險；孤注一擲（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to play games of chance for money; to take risky actions in hope of success",
        "cn_def": "賭博；冒險；孤注一擲（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "an act of gambling; a risky undertaking with an uncertain outcome",
        "cn_def": "賭博；投機；高風險的冒險嘗試（可數）"
      }
    ]
  },
  "gambled": {
    "pos": "v.",
    "en_def": "to play games of chance for money; to take risky actions in hope of success",
    "cn_def": "賭博；冒險；孤注一擲（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to play games of chance for money; to take risky actions in hope of success",
        "cn_def": "賭博；冒險；孤注一擲（動詞）"
      }
    ]
  },
  "greedy": {
    "pos": "adj.",
    "en_def": "having or showing an intense and selfish desire for wealth, power, or food",
    "cn_def": "貪婪的；貪心的；渴望更多的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing an intense and selfish desire for wealth, power, or food",
        "cn_def": "貪婪的；貪心的；渴望更多的"
      }
    ]
  },
  "grocery": {
    "pos": "n.",
    "en_def": "a grocer's store; food and household goods sold by a grocer (groceries)",
    "cn_def": "雜貨店；食品雜貨（常用複數 groceries）（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a grocer's store; food and household goods sold by a grocer (groceries)",
        "cn_def": "雜貨店；食品雜貨（常用複數 groceries）（可數）"
      }
    ]
  },
  "gum": {
    "pos": "n.",
    "en_def": "chewing gum; the firm pink flesh around the roots of the teeth",
    "cn_def": "口香糖（不可數）；牙齦；齒齦（常用複數 gums）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "chewing gum; the firm pink flesh around the roots of the teeth",
        "cn_def": "口香糖（不可數）；牙齦；齒齦（常用複數 gums）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
