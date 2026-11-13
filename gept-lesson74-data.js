// Lesson 74 Quiz Data: Pursuit, Movement, Physical Actions & Consequences
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 74 - Pursuit, Movement, Physical Actions & Consequences",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "trap",
    "pos": "v. / n.",
    "cn_def": "設陷阱捕捉；陷阱；使受困",
    "en_def": "to catch an animal in a trap; a device for catching animals",
    "sentence": "When the old apartment building caught fire, thick smoke began to {{BLANK}} several terrified residents on the top floor.",
    "cn": "當這棟老舊公寓大樓失火時，濃煙開始將幾名驚恐的住戶【受困】在頂樓。"
  },
  {
    "word": "hunt",
    "pos": "v. / n.",
    "cn_def": "打獵；搜尋；狩獵",
    "en_def": "to pursue and kill a wild animal for food or sport",
    "sentence": "In ancient times, forest tribes used handmade bows and arrows to {{BLANK}} wild deer and boars for winter survival.",
    "cn": "在古代，森林部落使用手工製作的弓箭【打獵】野鹿和野豬以在冬季生存。"
  },
  {
    "word": "search",
    "pos": "v. / n.",
    "cn_def": "搜尋；搜查；尋找",
    "en_def": "to look through carefully in order to find something or someone",
    "sentence": "Police officers and rescue volunteers organized a wide line to {{BLANK}} the snowy mountain slope for the missing climbers.",
    "cn": "警員與搜救志工排成寬闊的一字隊形，在白雪覆蓋的山坡上【搜尋】失蹤的登山客。"
  },
  {
    "word": "seek",
    "pos": "v.",
    "cn_def": "尋找；尋求；謀求",
    "en_def": "to attempt to find or obtain something",
    "sentence": "If high school students feel overwhelmed by academic stress, they should always {{BLANK}} advice from counselors or teachers.",
    "cn": "如果高中生感到學業壓力過大難以承受，他們應該隨時向輔導老師或教師【尋求】建議。"
  },
  {
    "word": "object",
    "pos": "n. / v.",
    "cn_def": "物體；物件；反對",
    "en_def": "a material thing that can be seen and touched; to express disapproval",
    "sentence": "The science teacher brought a mysterious metal {{BLANK}} into the classroom to demonstrate how magnetic forces work.",
    "cn": "理化老師把一個神秘的金屬【物件】帶進教室，以展示磁力是如何運作的。"
  },
  {
    "word": "hop",
    "pos": "v. / n.",
    "cn_def": "單腳跳；跳躍",
    "en_def": "to move by jumping on one foot or all feet together",
    "sentence": "The fluffy white rabbit began to {{BLANK}} across the vegetable garden, searching eagerly for fresh green lettuce.",
    "cn": "那隻毛茸茸的白兔開始在菜園裡一跳一跳地【跳躍】，急切地尋找新鮮翠綠的萵苣。"
  },
  {
    "word": "slip",
    "pos": "v. / n.",
    "cn_def": "滑倒；滑落；紙條",
    "en_def": "to slide accidentally, causing a fall; a small piece of paper",
    "sentence": "The elderly man happened to {{BLANK}} on the wet kitchen tiles this morning, and he unfortunately bruised his left knee.",
    "cn": "那位年邁的先生今天早上碰巧在濕滑的廚房磁磚上【滑倒】，不幸挫傷了他的左膝蓋。"
  },
  {
    "word": "surf",
    "pos": "v. / n.",
    "cn_def": "衝浪；在網路瀏覽",
    "en_def": "to ride on waves; to browse information on the internet",
    "sentence": "Young people who live near Kenting love to {{BLANK}} big waves on sunny summer weekends with their colorful boards.",
    "cn": "住在墾丁附近的年輕人喜歡在陽光明媚的夏季週末帶著鮮豔的衝浪板去大浪中【衝浪】。"
  },
  {
    "word": "beat",
    "pos": "v. / n.",
    "cn_def": "敲打；擊敗；心跳跳動",
    "en_def": "to strike repeatedly; to defeat someone; the rhythm of the heart",
    "sentence": "Our school basketball team played with tremendous determination and managed to {{BLANK}} their rivals in the final seconds.",
    "cn": "我們學校的籃球隊展現了無比的決心，並在最後幾秒鐘成功【擊敗】了他們的對手。"
  },
  {
    "word": "punish",
    "pos": "v.",
    "cn_def": "處罰；懲戒",
    "en_def": "to inflict a penalty or sanction on someone for an offense",
    "sentence": "Parents should teach their children with patience rather than {{BLANK}} them harshly whenever they make honest mistakes.",
    "cn": "每當孩子犯了無心之過時，父母應該耐心教導孩子，而不是嚴厲地【處罰】他們。"
  }
];

const MCQS = [
  {
    "q": "When the old apartment building caught fire, thick smoke began to ______ several terrified residents on the top floor.",
    "options": [
      "hunt",
      "hop",
      "surf",
      "trap"
    ],
    "answer": 3,
    "cn": "當老舊公寓失火時，濃煙開始將幾名驚恐的住戶困在頂樓。 【選項解析】(A) hunt 打獵  (B) trap 使困住  (C) surf 衝浪  (D) hop 跳躍。火災受困用 trap。",
    "vocabIndex": 0
  },
  {
    "q": "In ancient times, forest tribes used handmade bows and arrows to ______ wild animals for their winter survival.",
    "options": [
      "hop",
      "hunt",
      "slip",
      "punish"
    ],
    "answer": 1,
    "cn": "在古代，森林部落使用手工弓箭獵捕野生動物以供度過寒冬。 【選項解析】(A) hunt 獵捕  (B) hop 跳躍  (C) slip 滑倒  (D) punish 處罰。用弓箭打獵為 hunt wild animals。",
    "vocabIndex": 1
  },
  {
    "q": "Police officers and rescue dogs worked through the night to ______ the dense forest for the lost child.",
    "options": [
      "punish",
      "hop",
      "search",
      "surf"
    ],
    "answer": 2,
    "cn": "警員與搜救犬整夜工作，在茂密的森林中搜尋失蹤的孩童。 【選項解析】(A) punish 處罰  (B) hop 跳躍  (C) search 搜尋  (D) surf 衝浪。搜救失蹤兒童用 search the forest。",
    "vocabIndex": 2
  },
  {
    "q": "If you encounter difficult legal problems during business contracts, you should always ______ professional advice.",
    "options": [
      "seek",
      "hop",
      "hunt",
      "slip"
    ],
    "answer": 0,
    "cn": "如果你在商業合約中遇到困難的法律問題，應該隨時尋求專業建議。 【選項解析】(A) slip 滑落  (B) hop 單腳跳  (C) hunt 打獵  (D) seek 尋求。seek advice 為固定搭配「尋求建議」。",
    "vocabIndex": 3
  },
  {
    "q": "The teacher placed a strange wooden ______ on the table and asked the students to guess its historical function.",
    "options": [
      "search",
      "hunt",
      "object",
      "slip"
    ],
    "answer": 2,
    "cn": "老師在桌上放了一個奇怪的木製物件，並請學生猜測其歷史用途。 【選項解析】(A) object 物件  (B) hunt 狩獵  (C) search 搜尋  (D) slip 紙條。實體東西為 object。",
    "vocabIndex": 4
  },
  {
    "q": "A tiny brown frog managed to ______ across the garden stones and quickly disappeared into the cool pond water.",
    "options": [
      "punish",
      "hunt",
      "surf",
      "hop"
    ],
    "answer": 3,
    "cn": "一隻小褐蛙一跳一跳地跳過花園石塊，迅速消失在涼爽的池塘水中。 【選項解析】(A) punish 處罰  (B) hunt 打獵  (C) hop 跳躍  (D) surf 衝浪。青蛙跳躍用 hop。",
    "vocabIndex": 5
  },
  {
    "q": "Be extremely careful when walking down the icy stairs, or you might ______ and break your wrist.",
    "options": [
      "hunt",
      "slip",
      "seek",
      "beat"
    ],
    "answer": 1,
    "cn": "走在結冰的樓梯時要格外小心，否則你可能會滑倒並折斷手腕。 【選項解析】(A) hunt 打獵  (B) slip 滑倒  (C) seek 尋找  (D) beat 擊打。在結冰路面滑倒用 slip。",
    "vocabIndex": 6
  },
  {
    "q": "Many water sports enthusiasts travel to Taitung every autumn because coastal waves are perfect to ______ on.",
    "options": [
      "surf",
      "hunt",
      "hop",
      "punish"
    ],
    "answer": 0,
    "cn": "許多水上運動愛好者每年秋季都前往台東，因為沿海的海浪非常適合衝浪。 【選項解析】(A) punish 處罰  (B) hunt 狩獵  (C) hop 跳躍  (D) surf 衝浪。在海浪上衝浪為 surf on waves。",
    "vocabIndex": 7
  },
  {
    "q": "Our high school soccer team worked hard together and managed to ______ the defending champion in the finals.",
    "options": [
      "hunt",
      "beat",
      "hop",
      "slip"
    ],
    "answer": 1,
    "cn": "我們高中足球隊團結奮戰，成功在決賽中擊敗了衛冕冠軍隊。 【選項解析】(A) hunt 打獵  (B) hop 跳躍  (C) beat 擊敗  (D) slip 滑落。比賽擊敗對手用 beat。",
    "vocabIndex": 8
  },
  {
    "q": "School rules clearly state that teachers must not ______ students with physical violence under any circumstances.",
    "options": [
      "hop",
      "hunt",
      "punish",
      "surf"
    ],
    "answer": 2,
    "cn": "學校規定明確指出，任何情況下教師都不得以肢體暴力懲戒學生。 【選項解析】(A) punish 懲處  (B) hunt 打獵  (C) hop 跳躍  (D) surf 衝浪。處罰學生用 punish students。",
    "vocabIndex": 9
  },
  {
    "q": "Firefighters quickly arrived at the collapsed factory to rescue workers who were ______ inside the underground basement.",
    "options": [
      "trapped",
      "hopped",
      "surfed",
      "hunted"
    ],
    "answer": 0,
    "cn": "消防隊員迅速抵達倒塌的工廠，營救受困在地下室的工人。 【選項解析】(A) trapped 受困  (B) hopped 跳躍  (C) surfed 衝浪  (D) hunted 狩獵。工人受困用 were trapped。",
    "vocabIndex": 0
  },
  {
    "q": "During the cold winter months, wild wolves form packs to ______ for deer across the snowy plains.",
    "options": [
      "hop",
      "slip",
      "punish",
      "hunt"
    ],
    "answer": 3,
    "cn": "在寒冬月份，野狼會組成狼群在雪原上獵捕鹿隻。 【選項解析】(A) hop 跳躍  (B) slip 滑倒  (C) hunt 獵捕  (D) punish 處罰。動物獵捕為 hunt for deer。",
    "vocabIndex": 1
  },
  {
    "q": "Detectives obtained a legal warrant to ______ the suspect's apartment for stolen diamond jewelry.",
    "options": [
      "surf",
      "search",
      "hop",
      "punish"
    ],
    "answer": 1,
    "cn": "刑警取得合法搜查令，搜查嫌犯的公寓以尋找被盜的鑽石首飾。 【選項解析】(A) surf 瀏覽  (B) search 搜查  (C) hop 跳躍  (D) punish 處罰。搜查公寓用 search the apartment。",
    "vocabIndex": 2
  },
  {
    "q": "Young graduates who wish to start their own tech companies actively ______ financial funding from venture investors.",
    "options": [
      "beat",
      "slip",
      "hop",
      "seek"
    ],
    "answer": 3,
    "cn": "想創辦科技公司的年輕畢業生，積極向創業投資人尋求財務資金。 【選項解析】(A) seek 尋求  (B) slip 滑落  (C) hop 跳躍  (D) beat 敲打。seek funding 表尋求資金。",
    "vocabIndex": 3
  },
  {
    "q": "The astronomer observed a bright moving ______ through his telescope, which turned out to be a passing comet.",
    "options": [
      "object",
      "slip",
      "hunt",
      "search"
    ],
    "answer": 0,
    "cn": "天文學家透過望遠鏡觀察到一個明亮的移動天體，結果是一顆路過的彗星。 【選項解析】(A) object 物體/天體  (B) slip 紙條  (C) hunt 狩獵  (D) search 搜尋。moving object 表移動物體。",
    "vocabIndex": 4
  },
  {
    "q": "Because of his injured ankle, the little boy had to ______ on one foot all the way to the nurse's office.",
    "options": [
      "hunt",
      "surf",
      "hop",
      "punish"
    ],
    "answer": 2,
    "cn": "因為腳踝受傷，小男孩只得單腳一路跳向保健室。 【選項解析】(A) hunt 打獵  (B) surf 衝浪  (C) punish 處罰  (D) hop 單腳跳。hop on one foot 表單腳跳。",
    "vocabIndex": 5
  },
  {
    "q": "The waiter accidentally let the heavy tray ______ from his wet hands, and dishes smashed on the dining floor.",
    "options": [
      "hop",
      "hunt",
      "seek",
      "slip"
    ],
    "answer": 3,
    "cn": "服務生不小心讓沉重的托盤從濕潤的手中滑落，碗盤砸在餐廳地板上。 【選項解析】(A) slip 滑脫  (B) hunt 狩獵  (C) seek 尋求  (D) hop 跳躍。物品滑脫用 slip from hands。",
    "vocabIndex": 6
  },
  {
    "q": "During boring rainy afternoons at home, teenagers often prefer to ______ the internet and watch funny videos.",
    "options": [
      "hunt",
      "punish",
      "surf",
      "hop"
    ],
    "answer": 2,
    "cn": "在無聊的雨天午後待在家裡，青少年通常更喜歡上網瀏覽看搞笑影片。 【選項解析】(A) hunt 狩獵  (B) surf 瀏覽  (C) punish 處罰  (D) hop 跳躍。surf the internet 表上網瀏覽。",
    "vocabIndex": 7
  },
  {
    "q": "When you exercise intensely on a treadmill, your heart will naturally ______ faster to supply oxygen to muscles.",
    "options": [
      "beat",
      "slip",
      "hunt",
      "hop"
    ],
    "answer": 0,
    "cn": "在跑步機上進行劇烈運動時，你的心臟自然會跳動得更快以提供氧氣給肌肉。 【選項解析】(A) hunt 狩獵  (B) slip 滑倒  (C) beat 跳動  (D) hop 跳躍。heart beats 表心臟跳動。",
    "vocabIndex": 8
  },
  {
    "q": "The strict judge decided to ______ the reckless driver by revoking his driver's license for two full years.",
    "options": [
      "hop",
      "punish",
      "hunt",
      "surf"
    ],
    "answer": 1,
    "cn": "嚴厲的法官決定吊銷該魯莽駕駛的駕照整整兩年，以此予以懲戒。 【選項解析】(A) punish 懲處  (B) hop 跳躍  (C) hunt 狩獵  (D) surf 衝浪。法律懲處違法者用 punish。",
    "vocabIndex": 9
  },
  {
    "q": "The hunter set a steel ______ hidden beneath dried leaves, hoping to catch the wild boar that damaged crops.",
    "options": [
      "search",
      "object",
      "trap",
      "slip"
    ],
    "answer": 2,
    "cn": "獵人在落葉下設了一個隱蔽的鋼製捕獸夾，希望能捉到破壞農作物的野豬。 【選項解析】(A) trap 陷阱  (B) object 物件  (C) search 搜尋  (D) slip 紙條。鋼製陷阱為 steel trap。",
    "vocabIndex": 0
  },
  {
    "q": "Job hunters should carefully ______ out reputable recruitment agencies rather than responding to suspicious online ads.",
    "options": [
      "hop",
      "seek",
      "slip",
      "punish"
    ],
    "answer": 1,
    "cn": "求職者應該謹慎物色聲譽良好的招聘機構，而非隨意回應可疑的網路廣告。 【選項解析】(A) seek 尋找  (B) hop 跳躍  (C) slip 滑落  (D) punish 處罰。seek out 表物色尋找。",
    "vocabIndex": 3
  },
  {
    "q": "The doctor left a brief reminder note on a small ______ of paper before leaving the hospital ward.",
    "options": [
      "slip",
      "object",
      "search",
      "trap"
    ],
    "answer": 0,
    "cn": "醫生在離開病房前，在一張小紙條上寫下了簡短的提醒事項。 【選項解析】(A) slip 紙條  (B) object 物件  (C) search 搜尋  (D) trap 陷阱。a small slip of paper 表小紙條。",
    "vocabIndex": 6
  },
  {
    "q": "The rhythmic drumming began to ______ loudly in the stadium, pumping up the excitement of the spectators.",
    "options": [
      "hunt",
      "hop",
      "slip",
      "beat"
    ],
    "answer": 3,
    "cn": "有節奏的鼓聲在體育場內響亮地敲擊起來，激發了觀眾的興奮熱情。 【選項解析】(A) hunt 狩獵  (B) beat 敲擊  (C) slip 滑落  (D) hop 跳躍。drumming beats 表鼓點敲擊。",
    "vocabIndex": 8
  },
  {
    "q": "If students cheat on the final examination, the principal will severely ______ them according to school policy.",
    "options": [
      "punish",
      "surf",
      "hop",
      "hunt"
    ],
    "answer": 0,
    "cn": "如果學生在期末考作弊，校長將依照校規對他們進行嚴厲懲處。 【選項解析】(A) punish 懲處  (B) surf 衝浪  (C) hop 跳躍  (D) hunt 狩獵。處罰作弊學生用 punish them。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "trap": {
    "pos": "v. / n.",
    "en_def": "to catch an animal in a trap; a device for catching animals",
    "cn_def": "設陷阱捕捉；陷阱；使受困",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to catch an animal in a trap; a device for catching animals",
        "cn_def": "設陷阱捕捉；陷阱；使受困"
      }
    ]
  },
  "hunt": {
    "pos": "v. / n.",
    "en_def": "to pursue and kill a wild animal for food or sport",
    "cn_def": "打獵；搜尋；狩獵",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to pursue and kill a wild animal for food or sport",
        "cn_def": "打獵；搜尋；狩獵"
      }
    ]
  },
  "search": {
    "pos": "v. / n.",
    "en_def": "to look through carefully in order to find something or someone",
    "cn_def": "搜尋；搜查；尋找",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to look through carefully in order to find something or someone",
        "cn_def": "搜尋；搜查；尋找"
      }
    ]
  },
  "seek": {
    "pos": "v.",
    "en_def": "to attempt to find or obtain something",
    "cn_def": "尋找；尋求；謀求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to attempt to find or obtain something",
        "cn_def": "尋找；尋求；謀求"
      }
    ]
  },
  "object": {
    "pos": "n. / v.",
    "en_def": "a material thing that can be seen and touched; to express disapproval",
    "cn_def": "物體；物件；反對",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a material thing that can be seen and touched; to express disapproval",
        "cn_def": "物體；物件；反對"
      }
    ]
  },
  "hop": {
    "pos": "v. / n.",
    "en_def": "to move by jumping on one foot or all feet together",
    "cn_def": "單腳跳；跳躍",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to move by jumping on one foot or all feet together",
        "cn_def": "單腳跳；跳躍"
      }
    ]
  },
  "slip": {
    "pos": "v. / n.",
    "en_def": "to slide accidentally, causing a fall; a small piece of paper",
    "cn_def": "滑倒；滑落；紙條",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to slide accidentally, causing a fall; a small piece of paper",
        "cn_def": "滑倒；滑落；紙條"
      }
    ]
  },
  "surf": {
    "pos": "v. / n.",
    "en_def": "to ride on waves; to browse information on the internet",
    "cn_def": "衝浪；在網路瀏覽",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to ride on waves; to browse information on the internet",
        "cn_def": "衝浪；在網路瀏覽"
      }
    ]
  },
  "beat": {
    "pos": "v. / n.",
    "en_def": "to strike repeatedly; to defeat someone; the rhythm of the heart",
    "cn_def": "敲打；擊敗；心跳跳動",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to strike repeatedly; to defeat someone; the rhythm of the heart",
        "cn_def": "敲打；擊敗；心跳跳動"
      }
    ]
  },
  "punish": {
    "pos": "v.",
    "en_def": "to inflict a penalty or sanction on someone for an offense",
    "cn_def": "處罰；懲戒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to inflict a penalty or sanction on someone for an offense",
        "cn_def": "處罰；懲戒"
      }
    ]
  },
  "trapped": {
    "pos": "",
    "en_def": "",
    "cn_def": "受困",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "受困"
      }
    ]
  },
  "hopped": {
    "pos": "",
    "en_def": "",
    "cn_def": "跳躍",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "跳躍"
      }
    ]
  },
  "surfed": {
    "pos": "",
    "en_def": "",
    "cn_def": "衝浪",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "衝浪"
      }
    ]
  },
  "hunted": {
    "pos": "",
    "en_def": "",
    "cn_def": "狩獵",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狩獵"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
