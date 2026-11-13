// Lesson 88 Quiz Data: Depth, Totality, Safety Precautions, Differences & Book Fairs
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 88 - Depth, Totality, Safety Precautions, Differences & Book Fairs",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "deep",
    "pos": "adj. / adv.",
    "cn_def": "深的；深沉地",
    "en_def": "going far down from the top or surface; profound",
    "sentence": "The mountain river looks very calm on the surface, but it is actually ten meters {{BLANK}} and dangerous for young swimmers.",
    "cn": "這條山間河流表面看起來十分平靜，但實際上深達十公尺，對年幼的游泳者來說相當危險。"
  },
  {
    "word": "altogether",
    "pos": "adv.",
    "cn_def": "完全；總共；總而言之",
    "en_def": "completely; considering everything; in total",
    "sentence": "After adding up the cost of flight tickets, hotel rooms, and dining, our family vacation cost thirty thousand dollars {{BLANK}}.",
    "cn": "在合計機票、飯店房間和餐飲費用後，我們的家庭度假總共花費了三萬元。"
  },
  {
    "word": "extra",
    "pos": "adj. / n.",
    "cn_def": "額外的；額外的事物",
    "en_def": "more than is usual, expected, or needed",
    "sentence": "Because the temperature dropped suddenly last night, the hotel receptionist provided an {{BLANK}} woolen blanket for our bed.",
    "cn": "因為昨晚氣溫驟降，飯店接待人員為我們的床鋪提供了一條額外的羊毛毯。"
  },
  {
    "word": "final",
    "pos": "adj. / n.",
    "cn_def": "最後的；決賽；期末考",
    "en_def": "coming at the end of a series; the last exam or game",
    "sentence": "Senior high school students are studying diligently in the school library to prepare for their {{BLANK}} graduation exams next week.",
    "cn": "高中高年級學生正在學校圖書館裡勤奮讀書，為下週的畢業期末考試做準備。"
  },
  {
    "word": "lack",
    "pos": "n. / v.",
    "cn_def": "缺乏；缺少",
    "en_def": "the state of being without something; to not have enough",
    "sentence": "The young job applicant had great enthusiasm for graphic design, but his {{BLANK}} of practical experience made hiring difficult.",
    "cn": "這位年輕的求職者對平面設計充滿熱情，但他缺乏實務經驗使得錄取變得困難。"
  },
  {
    "word": "safety",
    "pos": "n.",
    "cn_def": "安全；平安",
    "en_def": "the state of being protected from danger or harm",
    "sentence": "Construction workers are strictly required to wear yellow hard hats to ensure their personal {{BLANK}} at the building site.",
    "cn": "建築工人被嚴格要求戴上黃色安全帽，以確保他們在建築工地的個人安全。"
  },
  {
    "word": "similar",
    "pos": "adj.",
    "cn_def": "相似的；類似的",
    "en_def": "looking or being almost, but not exactly, the same",
    "sentence": "Although the two twin sisters wore {{BLANK}} pink dresses to the party, their hairstyles and personalities were quite different.",
    "cn": "雖然這對雙胞胎姊妹穿著相似的粉色洋裝去參加派對，但她們的髮型和性格卻大不相同。"
  },
  {
    "word": "difference",
    "pos": "n.",
    "cn_def": "差異；不同處",
    "en_def": "the way in which two or more things are not like each other",
    "sentence": "Can you explain the main grammatical {{BLANK}} between the present perfect tense and the simple past tense in English?",
    "cn": "你能解釋一下英語中現在完成式與簡單過去式之間的主要文法差異嗎？"
  },
  {
    "word": "branch",
    "pos": "n. / v.",
    "cn_def": "樹枝；分行；分部",
    "en_def": "a part of a tree that grows out from the trunk; a local office",
    "sentence": "The international commercial bank decided to open a new customer service {{BLANK}} in the busy financial district of Taichung.",
    "cn": "這家國際商業銀行決定在台中繁華的金融區開設一家新的客戶服務分行。"
  },
  {
    "word": "fair",
    "pos": "adj. / n.",
    "cn_def": "公平的；展覽會；市集",
    "en_def": "treating people equally; a public event for trade or fun",
    "sentence": "Thousands of enthusiastic book lovers visited the Taipei International Book {{BLANK}} to purchase newly published novels at a discount.",
    "cn": "數千名熱情的愛書人參觀了台北國際書展，以折扣價格購買新出版的小說。"
  }
];

const MCQS = [
  {
    "q": "You must not jump into that mountain lake because the water is extremely ______ and full of hidden rocks.",
    "options": [
      "final",
      "extra",
      "deep",
      "similar"
    ],
    "answer": 2,
    "cn": "你絕不能跳進那個高山湖泊，因為湖水極深且布滿隱藏的暗礁。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) final 最後的  (D) similar 相似的。水深用 deep。",
    "vocabIndex": 0
  },
  {
    "q": "The heavy rainfall stopped ______, the clouds cleared away, and a bright rainbow appeared across the eastern sky.",
    "options": [
      "altogether",
      "deep",
      "extra",
      "similar"
    ],
    "answer": 0,
    "cn": "大雨完全停了，雲層消散，東方天空中出現了一道絢麗的彩虹。 【選項解析】(A) altogether 完全地  (B) deep 深地  (C) extra 額外地  (D) similar 相似地。完全停止為 stop altogether。",
    "vocabIndex": 1
  },
  {
    "q": "The airline allows passengers to check one piece of luggage for free, but any ______ bag will incur an additional fee.",
    "options": [
      "deep",
      "similar",
      "final",
      "extra"
    ],
    "answer": 3,
    "cn": "航空公司允許乘客免費託運一件行李，但任何額外的行李都將收取額外費用。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) final 最終的  (D) similar 相似的。額外行李為 extra bag。",
    "vocabIndex": 2
  },
  {
    "q": "Both teams played with great energy throughout the championship tournament, and our school team won the ______ match.",
    "options": [
      "extra",
      "final",
      "similar",
      "deep"
    ],
    "answer": 1,
    "cn": "兩支球隊在整個錦標賽中都表現得充滿活力，而我們學校的球隊贏得了最後的決賽。 【選項解析】(A) extra 額外的  (B) similar 相似的  (C) final 決賽/最後的  (D) deep 深的。決賽為 final match。",
    "vocabIndex": 3
  },
  {
    "q": "Due to a severe ______ of clean drinking water in the drought-affected village, water trucks were sent daily.",
    "options": [
      "lack",
      "safety",
      "difference",
      "branch"
    ],
    "answer": 0,
    "cn": "由於遭受乾旱影響的村莊嚴重缺乏潔淨飲用水，每天都派出送水車支援。 【選項解析】(A) lack 缺乏  (B) safety 安全  (C) difference 差異  (D) branch 分部。缺乏潔淨飲用水為 lack of clean water。",
    "vocabIndex": 4
  },
  {
    "q": "For your personal ______, please remain seated with your seatbelt fastened until the airplane comes to a complete stop.",
    "options": [
      "lack",
      "safety",
      "branch",
      "difference"
    ],
    "answer": 1,
    "cn": "為了您的個人安全，在飛機完全停穩之前，請留在座位上並繫好安全帶。 【選項解析】(A) lack 缺乏  (B) safety 安全  (C) branch 分行  (D) difference 差異。個人安全為 personal safety。",
    "vocabIndex": 5
  },
  {
    "q": "My classmate and I bought ______ backpack styles from the same store, but mine is navy blue while hers is dark green.",
    "options": [
      "deep",
      "final",
      "similar",
      "extra"
    ],
    "answer": 2,
    "cn": "我和同學在同一家店買了相似款式的背包，但我的是深藍色，而她的是深綠色。 【選項解析】(A) deep 深的  (B) final 最後的  (C) similar 相似的  (D) extra 額外的。相似款式為 similar styles。",
    "vocabIndex": 6
  },
  {
    "q": "Even though the two laptops look identical on the outside, there is a substantial price ______ between the two models.",
    "options": [
      "branch",
      "lack",
      "safety",
      "difference"
    ],
    "answer": 3,
    "cn": "儘管這兩台筆記型電腦外表看起來一模一樣，但兩種型號之間存在相當大的價格差異。 【選項解析】(A) difference 差異  (B) lack 缺乏  (C) safety 安全  (D) branch 分行。價格差異為 price difference。",
    "vocabIndex": 7
  },
  {
    "q": "The little squirrel ran swiftly along the wooden fence and leaped onto a tall pine ______ to hide its acorn.",
    "options": [
      "difference",
      "safety",
      "branch",
      "lack"
    ],
    "answer": 2,
    "cn": "小松鼠敏捷地沿著木柵欄奔跑，跳上高高的松樹樹枝去藏牠的橡子。 【選項解析】(A) difference 差異  (B) branch 樹枝  (C) safety 安全  (D) lack 缺乏。樹枝為 tree branch。",
    "vocabIndex": 8
  },
  {
    "q": "It is not ______ to blame John for the broken window when three other children were also playing baseball in the garden.",
    "options": [
      "deep",
      "fair",
      "extra",
      "similar"
    ],
    "answer": 1,
    "cn": "當花園裡還有其他三個孩子也在打棒球時，把打破窗戶的責任全推給約翰是不公平的。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) fair 公平的  (D) similar 相似的。不公平用 not fair。",
    "vocabIndex": 9
  },
  {
    "q": "Take a ______ breath of fresh country air, relax your shoulders, and enjoy the peaceful view of the green valley.",
    "options": [
      "deep",
      "extra",
      "similar",
      "final"
    ],
    "answer": 0,
    "cn": "深吸一口鄉村的新鮮空氣，放鬆肩膀，享受綠色山谷的寧靜景色。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) similar 相似的  (D) final 最終的。深呼吸為 take a deep breath。",
    "vocabIndex": 0
  },
  {
    "q": "In the mathematics exam, there were ten questions in Section A and fifteen in Section B, making twenty-five questions ______.",
    "options": [
      "similar",
      "deep",
      "extra",
      "altogether"
    ],
    "answer": 3,
    "cn": "在數學考試中，A部分有十題，B部分有十五題，總共有二十五題。 【選項解析】(A) altogether 總共  (B) deep 深地  (C) extra 額外地  (D) similar 相似地。合計總共用 altogether。",
    "vocabIndex": 1
  },
  {
    "q": "If you finish your homework early this evening, you will have ______ time to play video games before bedtime.",
    "options": [
      "extra",
      "deep",
      "final",
      "similar"
    ],
    "answer": 0,
    "cn": "如果你今天傍晚提早完成作業，在睡覺前你就會有額外的時間玩電玩。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) final 最後的  (D) similar 相似的。額外時間為 extra time。",
    "vocabIndex": 2
  },
  {
    "q": "The teacher announced that Friday would be the ______ day for students to hand in their term history papers.",
    "options": [
      "deep",
      "similar",
      "extra",
      "final"
    ],
    "answer": 3,
    "cn": "老師宣布星期五將是學生繳交學期歷史報告的最後截止日。 【選項解析】(A) deep 深的  (B) similar 相似的  (C) final 最後的  (D) extra 額外的。最後一天為 final day。",
    "vocabIndex": 3
  },
  {
    "q": "Many developing countries suffer from a serious ______ of qualified medical doctors in rural healthcare clinics.",
    "options": [
      "safety",
      "lack",
      "branch",
      "difference"
    ],
    "answer": 1,
    "cn": "許多發展中國家的鄉村醫療診所面臨著合格醫師嚴重短缺的問題。 【選項解析】(A) lack 缺乏  (B) safety 安全  (C) branch 分院  (D) difference 差異。嚴重匱乏為 serious lack of...。",
    "vocabIndex": 4
  },
  {
    "q": "The factory manager conducted a thorough workplace ______ inspection to prevent industrial injuries among machine operators.",
    "options": [
      "lack",
      "branch",
      "safety",
      "difference"
    ],
    "answer": 2,
    "cn": "工廠經理進行了徹底的工作場所安全檢查，以防止機器操作員發生工傷事故。 【選項解析】(A) lack 缺乏  (B) safety 安全  (C) branch 分行  (D) difference 差異。安全檢查為 safety inspection。",
    "vocabIndex": 5
  },
  {
    "q": "Indonesian and Malaysian languages have many ______ words because both nations share common historical and linguistic roots.",
    "options": [
      "deep",
      "similar",
      "extra",
      "final"
    ],
    "answer": 1,
    "cn": "印尼語和馬來語有許多相似的單字，因為兩國共享共同的歷史和語言淵源。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) similar 相似的  (D) final 最終的。相似字詞為 similar words。",
    "vocabIndex": 6
  },
  {
    "q": "Learning to respect cultural ______ is the first step toward building international harmony and global understanding.",
    "options": [
      "branches",
      "lacks",
      "safeties",
      "differences"
    ],
    "answer": 3,
    "cn": "學會尊重文化差異是建立國際和諧與全球相互理解的第一步。 【選項解析】(A) differences 差異  (B) lacks 缺乏  (C) safeties 安全  (D) branches 分行。文化差異為 cultural differences。",
    "vocabIndex": 7
  },
  {
    "q": "Our university opened a new overseas research ______ in Tokyo to promote joint technology development with Japanese scientists.",
    "options": [
      "branch",
      "lack",
      "safety",
      "difference"
    ],
    "answer": 0,
    "cn": "我們的大學在東京設立了一個新的海外研究分部，以促進與日本科學家的聯合技術研發。 【選項解析】(A) lack 缺乏  (B) branch 分部  (C) safety 安全  (D) difference 差異。海外分部為 overseas research branch。",
    "vocabIndex": 8
  },
  {
    "q": "The referee made a completely ______ decision by awarding a penalty kick when the defender tripped the forward in the box.",
    "options": [
      "deep",
      "extra",
      "fair",
      "similar"
    ],
    "answer": 2,
    "cn": "當防守球員在禁區內絆倒前鋒時，裁判判罰十二碼球，做出了一個完全公正的判決。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) fair 公正的  (D) similar 相似的。公正決定為 fair decision。",
    "vocabIndex": 9
  },
  {
    "q": "The ocean trench is over six thousand meters ______, where no sunlight can ever penetrate the cold black waters.",
    "options": [
      "similar",
      "extra",
      "final",
      "deep"
    ],
    "answer": 3,
    "cn": "這條海溝深達六千多公尺，在那裡任何陽光都無法穿透冰冷漆黑的海水。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) final 最終的  (D) similar 相似的。形容深達幾公尺用 ... meters deep。",
    "vocabIndex": 0
  },
  {
    "q": "The customer purchased a sandwich, an apple, and a soda, which came to two hundred dollars ______ at the counter.",
    "options": [
      "altogether",
      "deep",
      "extra",
      "similar"
    ],
    "answer": 0,
    "cn": "顧客買了一個三明治、一顆蘋果和一瓶汽水，在櫃台結帳時總計兩百元。 【選項解析】(A) altogether 總共  (B) deep 深地  (C) extra 額外地  (D) similar 相似地。總共金額為 ... dollars altogether。",
    "vocabIndex": 1
  },
  {
    "q": "We ordered an ______ portion of crispy French fries to share among four friends at the hamburger restaurant.",
    "options": [
      "deep",
      "extra",
      "similar",
      "final"
    ],
    "answer": 1,
    "cn": "我們在漢堡店加點了一份酥脆的炸薯條，讓四位朋友一起分享享用。 【選項解析】(A) deep 深的  (B) extra 額外的  (C) similar 相似的  (D) final 最後的。加點額外一份為 extra portion。",
    "vocabIndex": 2
  },
  {
    "q": "The referee blew the whistle to signal the ______ score of the soccer game: three goals to one in our favor.",
    "options": [
      "deep",
      "similar",
      "final",
      "extra"
    ],
    "answer": 2,
    "cn": "裁判吹響哨音示意足球賽的最終比分：三比一，由我們球隊獲勝。 【選項解析】(A) deep 深的  (B) similar 相似的  (C) final 最終的  (D) extra 額外的。最終比分為 final score。",
    "vocabIndex": 3
  },
  {
    "q": "A severe ______ of sleep can impair your concentration and memory when preparing for crucial school examinations.",
    "options": [
      "difference",
      "safety",
      "branch",
      "lack"
    ],
    "answer": 3,
    "cn": "在為重要的學校考試做準備時，嚴重睡眠不足會損害你的專注力和記憶力。 【選項解析】(A) lack 缺乏  (B) safety 安全  (C) branch 分行  (D) difference 差異。睡眠不足為 lack of sleep。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "deep": {
    "pos": "adj. / adv.",
    "en_def": "going far down from the top or surface; profound",
    "cn_def": "深的；深沉地",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "going far down from the top or surface; profound",
        "cn_def": "深的；深沉地"
      }
    ]
  },
  "altogether": {
    "pos": "adv.",
    "en_def": "completely; considering everything; in total",
    "cn_def": "完全；總共；總而言之",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "completely; considering everything; in total",
        "cn_def": "完全；總共；總而言之"
      }
    ]
  },
  "extra": {
    "pos": "adj. / n.",
    "en_def": "more than is usual, expected, or needed",
    "cn_def": "額外的；額外的事物",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "more than is usual, expected, or needed",
        "cn_def": "額外的；額外的事物"
      }
    ]
  },
  "final": {
    "pos": "adj. / n.",
    "en_def": "coming at the end of a series; the last exam or game",
    "cn_def": "最後的；決賽；期末考",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "coming at the end of a series; the last exam or game",
        "cn_def": "最後的；決賽；期末考"
      }
    ]
  },
  "lack": {
    "pos": "n. / v.",
    "en_def": "the state of being without something; to not have enough",
    "cn_def": "缺乏；缺少",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the state of being without something; to not have enough",
        "cn_def": "缺乏；缺少"
      }
    ]
  },
  "safety": {
    "pos": "n.",
    "en_def": "the state of being protected from danger or harm",
    "cn_def": "安全；平安",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being protected from danger or harm",
        "cn_def": "安全；平安"
      }
    ]
  },
  "similar": {
    "pos": "adj.",
    "en_def": "looking or being almost, but not exactly, the same",
    "cn_def": "相似的；類似的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "looking or being almost, but not exactly, the same",
        "cn_def": "相似的；類似的"
      }
    ]
  },
  "difference": {
    "pos": "n.",
    "en_def": "the way in which two or more things are not like each other",
    "cn_def": "差異；不同處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way in which two or more things are not like each other",
        "cn_def": "差異；不同處"
      }
    ]
  },
  "branch": {
    "pos": "n. / v.",
    "en_def": "a part of a tree that grows out from the trunk; a local office",
    "cn_def": "樹枝；分行；分部",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a part of a tree that grows out from the trunk; a local office",
        "cn_def": "樹枝；分行；分部"
      }
    ]
  },
  "fair": {
    "pos": "adj. / n.",
    "en_def": "treating people equally; a public event for trade or fun",
    "cn_def": "公平的；展覽會；市集",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "treating people equally; a public event for trade or fun",
        "cn_def": "公平的；展覽會；市集"
      }
    ]
  },
  "branches": {
    "pos": "",
    "en_def": "",
    "cn_def": "分行",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "分行"
      }
    ]
  },
  "lacks": {
    "pos": "",
    "en_def": "",
    "cn_def": "缺乏",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "缺乏"
      }
    ]
  },
  "safeties": {
    "pos": "",
    "en_def": "",
    "cn_def": "安全",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "安全"
      }
    ]
  },
  "differences": {
    "pos": "",
    "en_def": "",
    "cn_def": "差異",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "差異"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
