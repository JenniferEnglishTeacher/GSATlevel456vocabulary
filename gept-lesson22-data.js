// Lesson 22 Quiz Data: Professions, Roles & Career Paths
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 22 - Professions, Roles & Career Paths",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "violin",
    "pos": "n.",
    "cn_def": "小提琴",
    "en_def": "a four-stringed wooden musical instrument played with a bow",
    "sentence": "The orchestra concert master tucked the wooden {{BLANK}} under her chin and played a beautiful solo that silenced the audience.",
    "cn": "管弦樂團首席將木製小提琴夾在下巴下，演奏了一段優美的獨奏，令全場觀眾屏息聆聽。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業；事業",
    "en_def": "a profession or occupation chosen as one's life's work",
    "sentence": "After graduating from college with honors, Kevin decided to pursue a professional {{BLANK}} in computer software development.",
    "cn": "在大學以優異成績畢業後，凱文決定在電腦軟體開發領域追求專業的事業生涯。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "男演員；演員",
    "en_def": "a person whose profession is acting on stage, in movies, or on television",
    "sentence": "The famous Hollywood {{BLANK}} practiced his lines repeatedly in the dressing room before stepping out in front of the cameras.",
    "cn": "這位著名好萊塢演員在走進鏡頭前，在更衣室裡反覆練習他的台詞。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman whose profession is acting on stage, in movies, or on television",
    "sentence": "The young {{BLANK}} received an international award for her brilliant performance as a brave doctor in the wartime film.",
    "cn": "這位年輕女演員因在戰爭電影中精彩詮釋一位勇敢的醫生而榮獲國際大獎。"
  },
  {
    "word": "artist",
    "pos": "n.",
    "cn_def": "藝術家；畫家",
    "en_def": "a person who produces paintings or drawings as a profession or hobby",
    "sentence": "The talented local {{BLANK}} displayed thirty colorful oil paintings in the gallery, and visitors admired her creative imagination.",
    "cn": "這位才華洋溢的在地藝術家在畫廊展出了三十幅色彩繽紛的油畫，參觀者對她的創意思維讚歎不已。"
  },
  {
    "word": "assistant",
    "pos": "n.",
    "cn_def": "助理；助手",
    "en_def": "a person who helps someone in a higher position with their work",
    "sentence": "The general manager hired a bilingual {{BLANK}} to organize business meetings, reply to client emails, and book flight tickets.",
    "cn": "總經理僱用了一位雙語助手來安排商務會議、回覆客戶電子郵件以及訂購機票。"
  },
  {
    "word": "banker",
    "pos": "n.",
    "cn_def": "銀行家；銀行主管",
    "en_def": "an officer or manager of a bank or financial institution",
    "sentence": "My uncle works as a senior {{BLANK}} in Taipei, and he helps local business owners obtain loans to expand their factories.",
    "cn": "我叔叔在台北擔任資深銀行主管，他協助當地企業主獲得貸款以擴大他們的工廠。"
  },
  {
    "word": "barber",
    "pos": "n.",
    "cn_def": "理髮師（男士）",
    "en_def": "a person whose business is cutting men's hair and shaving beards",
    "sentence": "Grandfather always visits the same traditional {{BLANK}} on the corner to have his hair trimmed and his beard neatly shaved.",
    "cn": "祖父總是去街角那家傳統理髮店剪頭髮，並請理髮師把他的鬍鬚刮得整整齊齊。"
  },
  {
    "word": "captain",
    "pos": "n.",
    "cn_def": "船長；機長；隊長",
    "en_def": "the person in command of a ship or aircraft; team leader",
    "sentence": "The experienced ship {{BLANK}} steered the large cargo vessel safely through the stormy sea into the deep harbor.",
    "cn": "這位經驗豐富的船長駕駛著大型貨輪安全穿過暴風雨肆虐的海洋，駛入深水港灣。"
  },
  {
    "word": "clerk",
    "pos": "n.",
    "cn_def": "辦事員；店員",
    "en_def": "a person employed in an office or bank to keep records; shop assistant",
    "sentence": "When the customer brought the winter jacket to the counter, the polite store {{BLANK}} scanned the price tag and accepted payment.",
    "cn": "當顧客將冬季夾克拿到櫃檯時，有禮貌的店員掃描了價格標籤並收取了款項。"
  }
];

const MCQS = [
  {
    "q": "During the symphony performance, the musician played a sad melody on her classical four-string ______.",
    "options": [
      "violin",
      "career",
      "captain",
      "clerk"
    ],
    "answer": 0,
    "cn": "在交響樂演出中，這位音樂家在她那把古典四弦小提琴上演奏了悲傷的旋律。 【選項解析】(A) violin 小提琴 (B) career 事業 (C) captain 船長 (D) clerk 職員。four-string instrument 指小提琴 violin。",
    "vocabIndex": 0
  },
  {
    "q": "Choosing a suitable lifelong ______ requires careful thought about personal interests, strengths, and market opportunities.",
    "options": [
      "barber",
      "career",
      "assistant",
      "actress"
    ],
    "answer": 1,
    "cn": "選擇合適的終身職業需要仔細思考個人興趣、優勢與市場機會。 【選項解析】(A) barber 理髮師 (B) career 事業 (C) assistant 助手 (D) actress 女演員。lifelong career（終身職業生涯）。",
    "vocabIndex": 1
  },
  {
    "q": "The handsome Hollywood ______ appeared on the red carpet to sign autographs for hundreds of cheering movie fans.",
    "options": [
      "clerk",
      "banker",
      "violin",
      "actor"
    ],
    "answer": 3,
    "cn": "這位英俊的好萊塢演員出現在紅地毯上，為數百名歡呼的影迷簽名。 【選項解析】(A) clerk 店員 (B) banker 銀行家 (C) actor 男演員 (D) violin 小提琴。Hollywood actor 在紅毯簽名。",
    "vocabIndex": 2
  },
  {
    "q": "She worked hard in theatrical plays for a decade before becoming a world-renowned ______ in dramatic feature films.",
    "options": [
      "career",
      "barber",
      "actress",
      "captain"
    ],
    "answer": 2,
    "cn": "她在舞台劇中努力了十年，才成為劇情長片中舉世聞名的女演員。 【選項解析】(A) career (B) actress 女演員 (C) barber 理髮師 (D) captain 機長。由 female role / renowned 可知指女演員 actress。",
    "vocabIndex": 3
  },
  {
    "q": "The creative ______ spent months in his studio mixing oil colors on canvas to complete a magnificent landscape portrait.",
    "options": [
      "clerk",
      "artist",
      "banker",
      "assistant"
    ],
    "answer": 1,
    "cn": "這位富有創意的藝術家在工作室花了數月在畫布上調配油畫顏料，完成了一幅壯麗的風景肖像畫。 【選項解析】(A) artist 藝術家 (B) clerk 職員 (C) banker 銀行家 (D) assistant 助理。油畫顏料與畫布對應 artist。",
    "vocabIndex": 4
  },
  {
    "q": "The professor asked his laboratory ______ to prepare test tubes and chemical solutions before the morning chemistry lecture.",
    "options": [
      "captain",
      "career",
      "violin",
      "assistant"
    ],
    "answer": 3,
    "cn": "教授請他的實驗室助手在早晨化學課之前準備好試管和化學溶液。 【選項解析】(A) captain 隊長 (B) career 事業 (C) violin (D) assistant 助理。laboratory assistant（實驗室助理）。",
    "vocabIndex": 5
  },
  {
    "q": "If you plan to borrow money to buy a new house, you should consult an experienced ______ at the local financial branch.",
    "options": [
      "actor",
      "artist",
      "banker",
      "barber"
    ],
    "answer": 2,
    "cn": "如果你打算借錢買新房子，你應該諮詢當地金融分行一位經驗豐富的銀行主管。 【選項解析】(A) actor 演員 (B) banker 銀行家 (C) artist 藝術家 (D) barber 理髮師。辦理房屋貸款洽詢 banker。",
    "vocabIndex": 6
  },
  {
    "q": "Every two months, my father visits his neighborhood ______ for a quick haircut and a relaxing warm towel shave.",
    "options": [
      "barber",
      "captain",
      "actress",
      "career"
    ],
    "answer": 0,
    "cn": "每隔兩個月，我父親都會去住家附近的理髮師那裡快速剪個頭髮並享受放鬆的熱毛巾刮鬍服務。 【選項解析】(A) barber 理髮師 (B) captain 船長 (C) actress 女演員 (D) career 事業。剪髮刮鬍為 barber 專業工作。",
    "vocabIndex": 7
  },
  {
    "q": "In the middle of the heavy thunderstorm, the airplane ______ calmly announced that landing would be delayed for safety.",
    "options": [
      "clerk",
      "artist",
      "captain",
      "assistant"
    ],
    "answer": 2,
    "cn": "在狂風暴雨中，飛機機長沉著地廣播通知為了安全起見將延後降落。 【選項解析】(A) clerk 職員 (B) artist 藝術家 (C) captain 機長 (D) assistant 助理。airplane captain（飛機機長）。",
    "vocabIndex": 8
  },
  {
    "q": "The hotel front desk ______ greeted incoming guests with a warm smile and handed them their room electronic key cards.",
    "options": [
      "violin",
      "clerk",
      "career",
      "actor"
    ],
    "answer": 1,
    "cn": "飯店櫃檯接待員帶著溫暖的微笑迎接抵達的客人，並遞給他們房間感應鑰匙卡。 【選項解析】(A) violin (B) clerk 櫃檯接待員 (C) career (D) actor。front desk clerk 指櫃檯接待員。",
    "vocabIndex": 9
  },
  {
    "q": "Practicing the ______ requires great hand coordination because you hold the instrument with the left hand and the bow with the right.",
    "options": [
      "career",
      "banker",
      "captain",
      "violin"
    ],
    "answer": 3,
    "cn": "練習小提琴需要極佳的雙手協調，因為你用左手拿琴、右手握弓。 【選項解析】(A) career (B) violin 小提琴 (C) captain (D) banker。手持弓拉奏之樂器為 violin。",
    "vocabIndex": 0
  },
  {
    "q": "After ten successful years in journalism, Maria changed her ______ and started teaching media studies at a university.",
    "options": [
      "career",
      "barber",
      "assistant",
      "artist"
    ],
    "answer": 0,
    "cn": "在新聞界成功工作十年後，瑪麗亞轉換了跑道，開始在大學教授媒體研究。 【選項解析】(A) assistant (B) barber (C) career 事業 (D) artist。changed her career 指轉換事業生涯。",
    "vocabIndex": 1
  },
  {
    "q": "The stage ______ forgot his line for a few seconds, but he improvised cleverly so the audience noticed nothing.",
    "options": [
      "banker",
      "clerk",
      "violin",
      "actor"
    ],
    "answer": 3,
    "cn": "這位舞台劇演員忘詞了幾秒鐘，但他巧妙地即興發揮，使觀眾完全沒有察覺。 【選項解析】(A) actor 演員 (B) clerk (C) violin (D) banker。stage actor（舞台劇演員）。",
    "vocabIndex": 2
  },
  {
    "q": "The talented ______ received praise from critics for her role as Queen Victoria in the historical television series.",
    "options": [
      "actress",
      "career",
      "captain",
      "barber"
    ],
    "answer": 0,
    "cn": "這位才華橫溢的女演員因在歷史電視劇中飾演維多利亞女王而獲得評論家的讚賞。 【選項解析】(A) captain (B) career (C) actress 女演員 (D) barber。飾演女角色的演員為 actress。",
    "vocabIndex": 3
  },
  {
    "q": "An exhibition of modern sculptures created by an Italian ______ opened at the city museum yesterday afternoon.",
    "options": [
      "clerk",
      "artist",
      "assistant",
      "banker"
    ],
    "answer": 1,
    "cn": "一位義大利藝術家創作的現代雕塑展昨天下午在市立博物館開幕。 【選項解析】(A) artist 藝術家 (B) clerk (C) assistant (D) banker。創作現代雕塑者為 artist。",
    "vocabIndex": 4
  },
  {
    "q": "Because the corporate executive had an extremely busy travel schedule, his personal ______ booked all hotel reservations.",
    "options": [
      "violin",
      "career",
      "assistant",
      "actor"
    ],
    "answer": 2,
    "cn": "由於這位企業高層的差旅日程極為緊湊，他的個人特助預訂了所有的飯店住宿。 【選項解析】(A) violin (B) career (C) actor (D) assistant 助理。personal assistant 指個人特助。",
    "vocabIndex": 5
  },
  {
    "q": "As an investment ______, Mr. Davis analyzes international stock markets and advises wealthy clients on financial decisions.",
    "options": [
      "artist",
      "barber",
      "captain",
      "banker"
    ],
    "answer": 3,
    "cn": "作為一名投資銀行家，戴維斯先生分析國際股票市場並為富有客戶提供財務決策建議。 【選項解析】(A) banker 銀行家 (B) barber (C) captain (D) artist。investment banker（投資銀行家）。",
    "vocabIndex": 6
  },
  {
    "q": "The vintage ______ shop on Baker Street still uses antique leather chairs and metal straight razors to trim beards.",
    "options": [
      "career",
      "barber",
      "actress",
      "violin"
    ],
    "answer": 1,
    "cn": "貝克街上的那家老式理髮店仍在使用復古皮椅和金屬直剃刀來修整鬍鬚。 【選項解析】(A) career (B) barber 理髮師 (C) actress (D) violin。vintage barber shop（老式理髮店）。",
    "vocabIndex": 7
  },
  {
    "q": "Before departing from the harbor, the ferry ______ checked the weather forecast and made sure all life vests were ready.",
    "options": [
      "clerk",
      "assistant",
      "captain",
      "actor"
    ],
    "answer": 2,
    "cn": "在從港口出發之前，渡輪船長檢查了天氣預報並確保所有救生衣均已就緒。 【選項解析】(A) clerk (B) assistant (C) captain 船長 (D) actor。ferry captain 指渡輪船長。",
    "vocabIndex": 8
  },
  {
    "q": "The supermarket checkout ______ scanned twenty groceries in just two minutes and kindly gave the shopper a paper receipt.",
    "options": [
      "clerk",
      "career",
      "violin",
      "artist"
    ],
    "answer": 0,
    "cn": "超市結帳店員僅用兩分鐘就掃描了二十件雜貨，並親切地遞給購物者一張紙本收據。 【選項解析】(A) career (B) clerk 店員 (C) violin (D) artist。checkout clerk（結帳店員）。",
    "vocabIndex": 9
  },
  {
    "q": "She was recognized as a child musical prodigy who could play complex concertos on the ______ at the age of seven.",
    "options": [
      "captain",
      "barber",
      "banker",
      "violin"
    ],
    "answer": 3,
    "cn": "她被公認為音樂神童，在七歲時就能在小提琴上演奏複雜的協奏曲。 【選項解析】(A) captain (B) violin 小提琴 (C) banker (D) barber。play complex concertos on the violin。",
    "vocabIndex": 0
  },
  {
    "q": "Dedicated students who wish to build a rewarding professional ______ in medicine must study hard for many years.",
    "options": [
      "career",
      "assistant",
      "clerk",
      "actress"
    ],
    "answer": 0,
    "cn": "立志在醫學領域建立有成就感專業事業的有志學生，必須苦讀多年。 【選項解析】(A) career 事業 (B) assistant (C) clerk (D) actress。build a rewarding professional career。",
    "vocabIndex": 1
  },
  {
    "q": "The film director gave clear instructions to the young ______ on how to express sadness during the final farewell scene.",
    "options": [
      "violin",
      "barber",
      "actor",
      "career"
    ],
    "answer": 2,
    "cn": "電影導演向這位年輕演員給予明確指示，教導如何在最後的告別場景中表達悲傷。 【選項解析】(A) violin (B) barber (C) actor 演員 (D) career。film director 給予 actor 指導。",
    "vocabIndex": 2
  },
  {
    "q": "The theater award for Best Leading ______ was presented to an inspiring performer who portrayed a courageous schoolteacher.",
    "options": [
      "captain",
      "actress",
      "banker",
      "clerk"
    ],
    "answer": 1,
    "cn": "最佳女主角劇院大獎頒發給了一位飾演勇敢女教師的激勵人心表演者。 【選項解析】(A) actress 女演員 (B) captain (C) banker (D) clerk。Best Leading Actress（最佳女主角獎）。",
    "vocabIndex": 3
  },
  {
    "q": "A gallery owner agreed to represent the aspiring ______ after seeing her stunning watercolor portraits of elderly villagers.",
    "options": [
      "career",
      "assistant",
      "violin",
      "artist"
    ],
    "answer": 3,
    "cn": "畫廊主人在看到這位有抱負的藝術家畫出老年村民令人驚艷的水彩肖像畫後，同意代理她的作品。 【選項解析】(A) career (B) assistant (C) violin (D) artist 藝術家。aspiring artist 指新進藝術家。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "violin": {
    "pos": "n.",
    "en_def": "a four-stringed wooden musical instrument played with a bow",
    "cn_def": "小提琴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a four-stringed wooden musical instrument played with a bow",
        "cn_def": "小提琴"
      }
    ]
  },
  "career": {
    "pos": "n.",
    "en_def": "a profession or occupation chosen as one's life's work",
    "cn_def": "職業；事業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a profession or occupation chosen as one's life's work",
        "cn_def": "職業；事業"
      }
    ]
  },
  "actor": {
    "pos": "n.",
    "en_def": "a person whose profession is acting on stage, in movies, or on television",
    "cn_def": "男演員；演員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose profession is acting on stage, in movies, or on television",
        "cn_def": "男演員；演員"
      }
    ]
  },
  "actress": {
    "pos": "n.",
    "en_def": "a woman whose profession is acting on stage, in movies, or on television",
    "cn_def": "女演員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a woman whose profession is acting on stage, in movies, or on television",
        "cn_def": "女演員"
      }
    ]
  },
  "artist": {
    "pos": "n.",
    "en_def": "a person who produces paintings or drawings as a profession or hobby",
    "cn_def": "藝術家；畫家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who produces paintings or drawings as a profession or hobby",
        "cn_def": "藝術家；畫家"
      }
    ]
  },
  "assistant": {
    "pos": "n.",
    "en_def": "a person who helps someone in a higher position with their work",
    "cn_def": "助理；助手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who helps someone in a higher position with their work",
        "cn_def": "助理；助手"
      }
    ]
  },
  "banker": {
    "pos": "n.",
    "en_def": "an officer or manager of a bank or financial institution",
    "cn_def": "銀行家；銀行主管",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an officer or manager of a bank or financial institution",
        "cn_def": "銀行家；銀行主管"
      }
    ]
  },
  "barber": {
    "pos": "n.",
    "en_def": "a person whose business is cutting men's hair and shaving beards",
    "cn_def": "理髮師（男士）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose business is cutting men's hair and shaving beards",
        "cn_def": "理髮師（男士）"
      }
    ]
  },
  "captain": {
    "pos": "n.",
    "en_def": "the person in command of a ship or aircraft; team leader",
    "cn_def": "船長；機長；隊長",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the person in command of a ship or aircraft; team leader",
        "cn_def": "船長；機長；隊長"
      }
    ]
  },
  "clerk": {
    "pos": "n.",
    "en_def": "a person employed in an office or bank to keep records; shop assistant",
    "cn_def": "辦事員；店員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed in an office or bank to keep records; shop assistant",
        "cn_def": "辦事員；店員"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
