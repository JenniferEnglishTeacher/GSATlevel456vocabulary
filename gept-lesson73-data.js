// Lesson 73 Quiz Data: Physical Actions, Travel, Tourism & Guidance
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 73 - Physical Actions, Travel, Tourism & Guidance",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lay",
    "pos": "v.",
    "cn_def": "放置；鋪設；產卵",
    "en_def": "to put something down gently or flat in a particular place",
    "sentence": "The caring mother gently began to {{BLANK}} the sleeping baby in the crib, and then she quietly closed the bedroom door.",
    "cn": "關懷備至的母親輕輕地開始將熟睡的嬰兒【放置】在嬰兒床上，然後她悄悄關上了臥室的門。"
  },
  {
    "word": "throw",
    "pos": "v.",
    "cn_def": "投擲；丟；扔",
    "en_def": "to send something through the air with force by the hand",
    "sentence": "When the baseball coach signaled from the bench, the young pitcher prepared to {{BLANK}} the ball across the plate.",
    "cn": "當棒球教練從長凳上給予信號時，年輕的投手準備將球【投擲】穿過本壘板。"
  },
  {
    "word": "slide",
    "pos": "v. / n.",
    "cn_def": "滑動；滑行；溜滑梯",
    "en_def": "to move smoothly along a surface; a playground apparatus",
    "sentence": "Because the mountain highway was covered with slippery ice, the red car began to {{BLANK}} dangerously toward the roadside.",
    "cn": "因為山區公路覆蓋著濕滑的冰，那輛紅色轎車開始危險地朝路邊【滑行】。"
  },
  {
    "word": "shut",
    "pos": "v. / adj.",
    "cn_def": "關閉；闔上；關閉的",
    "en_def": "to close something so that it is not open",
    "sentence": "Before the cold winter storm arrived, the farmer remembered to {{BLANK}} all the wooden barn windows securely.",
    "cn": "在寒冷的冬季暴風雨抵達之前，農夫記得將所有木質穀倉的窗戶牢牢【關閉】。"
  },
  {
    "word": "treat",
    "pos": "v. / n.",
    "cn_def": "對待；請客；款待",
    "en_def": "to behave towards someone; to buy food for someone; a pleasant event",
    "sentence": "Since it was Peter's twenty-first birthday, his generous uncle offered to {{BLANK}} the entire family to a luxurious seafood feast.",
    "cn": "因為今天是彼得的二十一歲生日，他慷慨的叔叔主動提出要【請客】招待全家人享用一頓豪華海鮮大餐。"
  },
  {
    "word": "travel",
    "pos": "v. / n.",
    "cn_def": "旅行；行進；遊歷",
    "en_def": "to make a journey, typically of some length",
    "sentence": "After graduating from college with honors, Lisa decided to {{BLANK}} across Europe for three months to experience new cultures.",
    "cn": "在以優異成績從大學畢業後，麗莎決定橫跨歐洲【旅行】三個月以體驗新的文化。"
  },
  {
    "word": "tour",
    "pos": "n. / v.",
    "cn_def": "導覽；巡迴；觀光",
    "en_def": "a journey for pleasure in which several places are visited",
    "sentence": "The friendly foreign student signed up for a guided walking {{BLANK}} of the historic district, and he took many photographs.",
    "cn": "那位友善的外國學生報名參加了歷史街區的有導遊步行的【導覽】，並且拍了許多照片。"
  },
  {
    "word": "sail",
    "pos": "v. / n.",
    "cn_def": "航行；揚帆行駛；帆",
    "en_def": "to travel in a boat or ship using wind power or an engine",
    "sentence": "The courageous captain prepared to {{BLANK}} across the wide ocean, although heavy storm warnings were announced on the radio.",
    "cn": "儘管廣播中發布了嚴重的暴風雨警報，英勇的船長依然準備好【航行】橫跨遼闊的海洋。"
  },
  {
    "word": "guide",
    "pos": "v. / n.",
    "cn_def": "引導；指引；導遊",
    "en_def": "to direct or show the way; a person who shows the way",
    "sentence": "The experienced mountain volunteer agreed to {{BLANK}} the foreign hikers safely through the foggy canyon trails.",
    "cn": "那位經驗豐富的登山志工同意【指引】外國登山客安全穿過多霧的峽谷步道。"
  },
  {
    "word": "chase",
    "pos": "v. / n.",
    "cn_def": "追逐；追趕；追捕",
    "en_def": "to pursue in order to catch or catch up with",
    "sentence": "The clever farm dog started to {{BLANK}} the stray fox away from the chicken coop, barking loudly across the orchard.",
    "cn": "那隻聰明的農場牧羊犬開始將流浪狐狸從雞舍旁【追趕】開來，在果園裡大聲吠叫。"
  }
];

const MCQS = [
  {
    "q": "The caring mother gently began to ______ the sleeping baby in the crib, and then she quietly closed the bedroom door.",
    "options": [
      "throw",
      "lay",
      "shut",
      "chase"
    ],
    "answer": 1,
    "cn": "關懷備至的母親輕輕地將熟睡的嬰兒放在嬰兒床上，然後悄悄關上臥室門。 【選項解析】(A) throw 丟  (B) lay 放置  (C) shut 關閉  (D) chase 追趕。lay the baby in the crib 指將嬰兒輕放在嬰兒床。",
    "vocabIndex": 0
  },
  {
    "q": "When the coach waved from the dugout, the star pitcher prepared to ______ a fast strike across the plate.",
    "options": [
      "throw",
      "shut",
      "slide",
      "sail"
    ],
    "answer": 0,
    "cn": "當教練從休息區揮手示意時，王牌投手準備投出一記快速好球穿過本壘板。 【選項解析】(A) slide 滑行  (B) shut 關閉  (C) throw 投擲  (D) sail 航行。投手投球用 throw。",
    "vocabIndex": 1
  },
  {
    "q": "Children love to visit the park on sunny afternoons so they can happily play on the tall playground ______.",
    "options": [
      "tour",
      "treat",
      "guide",
      "slide"
    ],
    "answer": 3,
    "cn": "孩子們喜歡在陽光明媚的下午造訪公園，這樣他們就能在操場的高溜滑梯上開心玩耍。 【選項解析】(A) tour 導覽  (B) treat 請客  (C) guide 導遊  (D) slide 溜滑梯。遊樂設施溜滑梯為 slide。",
    "vocabIndex": 2
  },
  {
    "q": "Before you leave the chemistry laboratory for the weekend, please make sure to ______ all windows firmly.",
    "options": [
      "sail",
      "lay",
      "shut",
      "travel"
    ],
    "answer": 2,
    "cn": "在週末離開化學實驗室之前，請務必把所有窗戶關牢。 【選項解析】(A) shut 關閉  (B) lay 放置  (C) sail 航行  (D) travel 旅行。shut windows securely 表關閉窗戶。",
    "vocabIndex": 3
  },
  {
    "q": "You do not need to take out your wallet at the restaurant today because dinner is my ______.",
    "options": [
      "slide",
      "treat",
      "tour",
      "guide"
    ],
    "answer": 1,
    "cn": "今天在餐廳你不需要拿出皮夾，因為這頓晚餐由我請客。 【選項解析】(A) slide 滑梯  (B) tour 導覽  (C) treat 請客  (D) guide 指南。It's my treat 為習慣用語「我請客」。",
    "vocabIndex": 4
  },
  {
    "q": "After saving money for two years, the young couple plans to ______ through Southeast Asia for their honeymoon.",
    "options": [
      "travel",
      "lay",
      "shut",
      "chase"
    ],
    "answer": 0,
    "cn": "存了兩年錢之後，這對年輕夫婦計畫在蜜月期間遊歷東南亞。 【選項解析】(A) shut 關閉  (B) lay 放置  (C) travel 旅行  (D) chase 追趕。travel through 表遊歷各地。",
    "vocabIndex": 5
  },
  {
    "q": "The museum offers an informative audio ______ that explains ancient Egyptian artifacts in five different languages.",
    "options": [
      "slide",
      "treat",
      "tour",
      "chase"
    ],
    "answer": 2,
    "cn": "博物館提供內容豐富的語音導覽，用五種不同語言解說古埃及文物。 【選項解析】(A) tour 導覽  (B) treat 請客  (C) slide 滑行  (D) chase 追捕。audio tour 表語音導覽。",
    "vocabIndex": 6
  },
  {
    "q": "During the breezy autumn afternoon, the sailors raised their white canvas to ______ across the peaceful lake.",
    "options": [
      "shut",
      "throw",
      "lay",
      "sail"
    ],
    "answer": 3,
    "cn": "在涼爽的秋日午後，水手們升起白帆在平靜的湖面上航行。 【選項解析】(A) shut 關閉  (B) sail 航行  (C) lay 放置  (D) throw 投擲。揚帆航行用 sail。",
    "vocabIndex": 7
  },
  {
    "q": "The experienced wilderness ranger volunteered to ______ the tourists through the dense tropical forest.",
    "options": [
      "chase",
      "guide",
      "shut",
      "slide"
    ],
    "answer": 1,
    "cn": "經驗豐富的荒野巡邏員志願帶領遊客穿過茂密的熱帶森林。 【選項解析】(A) chase 追趕  (B) slide 滑動  (C) shut 關閉  (D) guide 引導。帶領遊客穿過森林用 guide。",
    "vocabIndex": 8
  },
  {
    "q": "The hungry cat saw a small gray mouse in the kitchen and immediately began to ______ it under the stove.",
    "options": [
      "chase",
      "lay",
      "sail",
      "travel"
    ],
    "answer": 0,
    "cn": "飢餓的貓在廚房看到一隻灰色小老鼠，立刻開始在爐子底下追趕它。 【選項解析】(A) chase 追趕  (B) lay 放置  (C) sail 航行  (D) travel 旅行。貓抓老鼠為 chase。",
    "vocabIndex": 9
  },
  {
    "q": "When entering the library, please remember to ______ the door softly so you do not disturb studying students.",
    "options": [
      "sail",
      "throw",
      "shut",
      "travel"
    ],
    "answer": 2,
    "cn": "進入圖書館時，請記得輕輕關門，以免打擾正在用功的學生。 【選項解析】(A) sail 航行  (B) throw 丟  (C) shut 關閉  (D) travel 旅行。shut the door 表關門。",
    "vocabIndex": 3
  },
  {
    "q": "The tennis player was so angry with his mistakes that he wanted to ______ his racket against the court.",
    "options": [
      "tour",
      "lay",
      "guide",
      "throw"
    ],
    "answer": 3,
    "cn": "網球選手因自己的失誤非常憤怒，甚至想把球拍狠狠砸向球場地面。 【選項解析】(A) throw 扔擲  (B) lay 放置  (C) guide 引導  (D) tour 觀光。摔擲球拍用 throw。",
    "vocabIndex": 1
  },
  {
    "q": "Because the marble floor was wet from cleaning, several customers began to ______ and almost fell down.",
    "options": [
      "tour",
      "slide",
      "treat",
      "guide"
    ],
    "answer": 1,
    "cn": "因為大理石地板剛打掃完很濕，好幾位顧客腳底打滑差點摔倒。 【選項解析】(A) tour 觀光  (B) treat 請客  (C) slide 滑動  (D) guide 引導。濕滑地板打滑用 slide。",
    "vocabIndex": 2
  },
  {
    "q": "If you work hard throughout the week, you deserve to ______ yourself to a nice movie and dinner on Friday.",
    "options": [
      "chase",
      "lay",
      "sail",
      "treat"
    ],
    "answer": 3,
    "cn": "如果你一整週都辛苦工作，星期五理應犒賞自己看一場好電影並享用美食。 【選項解析】(A) chase 追逐  (B) treat 犒賞  (C) sail 航行  (D) lay 放置。treat oneself to 表犒賞自己。",
    "vocabIndex": 4
  },
  {
    "q": "The documentary team followed migratory birds as they ______ thousands of miles south for the winter.",
    "options": [
      "lay",
      "shut",
      "travel",
      "chase"
    ],
    "answer": 2,
    "cn": "紀錄片團隊追蹤候鳥，記錄牠們在冬季往南行進數千英里的過程。 【選項解析】(A) travel 行進  (B) shut 關閉  (C) lay 產卵  (D) chase 追捕。長途遷徙行進用 travel。",
    "vocabIndex": 5
  },
  {
    "q": "The historical walking ______ included visits to ancient temples, colonial buildings, and the old city harbor.",
    "options": [
      "tour",
      "treat",
      "slide",
      "guide"
    ],
    "answer": 0,
    "cn": "歷史步行導覽包含了參觀古老神廟、殖民時期建築與舊城碼頭。 【選項解析】(A) slide 滑梯  (B) treat 請客  (C) tour 導覽  (D) guide 指南。walking tour 表徒步導覽行程。",
    "vocabIndex": 6
  },
  {
    "q": "Explorers in ancient times used the stars in the night sky to ______ their wooden ships safely across the ocean.",
    "options": [
      "throw",
      "shut",
      "chase",
      "guide"
    ],
    "answer": 3,
    "cn": "古代探險家利用夜空中的星辰來指引木船安全橫渡大洋。 【選項解析】(A) throw 投擲  (B) shut 關閉  (C) guide 指引  (D) chase 追捕。指引船隻方向用 guide。",
    "vocabIndex": 8
  },
  {
    "q": "Two playful police dogs continued to ______ each other around the green training park during their morning exercise.",
    "options": [
      "shut",
      "lay",
      "chase",
      "sail"
    ],
    "answer": 2,
    "cn": "兩隻頑皮的警犬在晨練期間繼續在綠色訓練場上互相追逐玩耍。 【選項解析】(A) shut 關閉  (B) chase 追逐  (C) lay 放置  (D) sail 航行。犬隻追逐用 chase each other。",
    "vocabIndex": 9
  },
  {
    "q": "Before serving the delicate birthday cake, grandmother asked Tommy to ______ the clean plates on the dining table.",
    "options": [
      "throw",
      "lay",
      "shut",
      "chase"
    ],
    "answer": 1,
    "cn": "在端出精緻的生日蛋糕之前，祖母請湯米把乾淨的盤子擺放在餐桌上。 【選項解析】(A) lay 擺放  (B) throw 投擲  (C) shut 關閉  (D) chase 追逐。擺放碗盤用 lay the plates。",
    "vocabIndex": 0
  },
  {
    "q": "The wealthy businessman bought a luxury yacht so he could ______ around tropical islands during his retirement.",
    "options": [
      "sail",
      "throw",
      "lay",
      "shut"
    ],
    "answer": 0,
    "cn": "那位富商買了一艘豪華遊艇，以便在退休期間能駕船環遊熱帶島嶼。 【選項解析】(A) shut 關閉  (B) throw 投擲  (C) lay 放置  (D) sail 航行。乘遊艇航行用 sail。",
    "vocabIndex": 7
  },
  {
    "q": "Be careful when hiking down the steep muddy slope, or you might ______ and twist your ankle.",
    "options": [
      "shut",
      "slide",
      "tour",
      "sail"
    ],
    "answer": 1,
    "cn": "沿著陡峭泥濘的斜坡往下走時要小心，否則你可能會滑倒並扭傷腳踝。 【選項解析】(A) slide 滑倒  (B) shut 關閉  (C) tour 觀光  (D) sail 航行。泥濘地滑倒用 slide。",
    "vocabIndex": 2
  },
  {
    "q": "The kind doctor insisted on giving the wounded stray cat special medical ______ without asking for any payment.",
    "options": [
      "tour",
      "slide",
      "treat",
      "guide"
    ],
    "answer": 2,
    "cn": "善良的醫生堅持給受傷的流浪貓特別的醫療照料，而不收取任何費用。 【選項解析】(A) tour 導覽  (B) treat 照料/招待  (C) slide 滑行  (D) guide 指引。特意款待或照顧用 special treat。",
    "vocabIndex": 4
  },
  {
    "q": "The school handbook provides an excellent step-by-step ______ for new students navigating their first semester.",
    "options": [
      "treat",
      "slide",
      "tour",
      "guide"
    ],
    "answer": 3,
    "cn": "學校手冊為新生度過第一個學期提供了極佳的逐步指引指南。 【選項解析】(A) guide 指南  (B) slide 滑梯  (C) tour 導覽  (D) treat 請客。提供指導的文件為 guide。",
    "vocabIndex": 8
  },
  {
    "q": "The angry homeowner shouted at the noisy teenager to ______ his loud car engine and leave the street.",
    "options": [
      "shut",
      "sail",
      "lay",
      "travel"
    ],
    "answer": 0,
    "cn": "憤怒的屋主對著吵鬧的青少年大喊，叫他關掉吵鬧的汽車引擎並離開這條街。 【選項解析】(A) shut 關閉  (B) sail 航行  (C) lay 放置  (D) travel 旅行。shut engine 表關閉引擎。",
    "vocabIndex": 3
  },
  {
    "q": "Please do not ______ waste paper on the park lawn, but place it inside the green recycling bins.",
    "options": [
      "shut",
      "throw",
      "guide",
      "travel"
    ],
    "answer": 1,
    "cn": "請不要在公園草坪上亂扔廢紙，而應將其放入綠色回收桶內。 【選項解析】(A) throw 扔擲  (B) shut 關閉  (C) guide 指引  (D) travel 旅行。throw paper 表亂扔廢紙。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "lay": {
    "pos": "v.",
    "en_def": "to put something down gently or flat in a particular place",
    "cn_def": "放置；鋪設；產卵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put something down gently or flat in a particular place",
        "cn_def": "放置；鋪設；產卵"
      }
    ]
  },
  "throw": {
    "pos": "v.",
    "en_def": "to send something through the air with force by the hand",
    "cn_def": "投擲；丟；扔",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to send something through the air with force by the hand",
        "cn_def": "投擲；丟；扔"
      }
    ]
  },
  "slide": {
    "pos": "v. / n.",
    "en_def": "to move smoothly along a surface; a playground apparatus",
    "cn_def": "滑動；滑行；溜滑梯",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to move smoothly along a surface; a playground apparatus",
        "cn_def": "滑動；滑行；溜滑梯"
      }
    ]
  },
  "shut": {
    "pos": "v. / adj.",
    "en_def": "to close something so that it is not open",
    "cn_def": "關閉；闔上；關閉的",
    "combined": [
      {
        "pos": "v. / adj.",
        "en_def": "to close something so that it is not open",
        "cn_def": "關閉；闔上；關閉的"
      }
    ]
  },
  "treat": {
    "pos": "v. / n.",
    "en_def": "to behave towards someone; to buy food for someone; a pleasant event",
    "cn_def": "對待；請客；款待",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to behave towards someone; to buy food for someone; a pleasant event",
        "cn_def": "對待；請客；款待"
      }
    ]
  },
  "travel": {
    "pos": "v. / n.",
    "en_def": "to make a journey, typically of some length",
    "cn_def": "旅行；行進；遊歷",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to make a journey, typically of some length",
        "cn_def": "旅行；行進；遊歷"
      }
    ]
  },
  "tour": {
    "pos": "n. / v.",
    "en_def": "a journey for pleasure in which several places are visited",
    "cn_def": "導覽；巡迴；觀光",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a journey for pleasure in which several places are visited",
        "cn_def": "導覽；巡迴；觀光"
      }
    ]
  },
  "sail": {
    "pos": "v. / n.",
    "en_def": "to travel in a boat or ship using wind power or an engine",
    "cn_def": "航行；揚帆行駛；帆",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to travel in a boat or ship using wind power or an engine",
        "cn_def": "航行；揚帆行駛；帆"
      }
    ]
  },
  "guide": {
    "pos": "v. / n.",
    "en_def": "to direct or show the way; a person who shows the way",
    "cn_def": "引導；指引；導遊",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to direct or show the way; a person who shows the way",
        "cn_def": "引導；指引；導遊"
      }
    ]
  },
  "chase": {
    "pos": "v. / n.",
    "en_def": "to pursue in order to catch or catch up with",
    "cn_def": "追逐；追趕；追捕",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to pursue in order to catch or catch up with",
        "cn_def": "追逐；追趕；追捕"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
