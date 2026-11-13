// Lesson 84 Quiz Data: Limits, Value, Treasured Memories & Overseas Studies
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 84 - Limits, Value, Treasured Memories & Overseas Studies",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "limit",
    "pos": "n. / v.",
    "cn_def": "界限；限制",
    "en_def": "the greatest amount, number, or speed allowed; to restrict",
    "sentence": "Drivers must strictly obey the posted speed {{BLANK}} when passing school zones, or they will be fined heavily by the traffic police.",
    "cn": "駕駛人行經學校區域時必須嚴格遵守公告的速限，否則將會受到交通警察的重罰。"
  },
  {
    "word": "thought",
    "pos": "n.",
    "cn_def": "想法；思維；沉思",
    "en_def": "an idea, opinion, or mental consideration",
    "sentence": "After giving careful {{BLANK}} to the job offer in Singapore, David decided to accept it to broaden his international horizons.",
    "cn": "在對新加坡的工作錄取進行慎重考慮之後，戴維決定接受它以拓展自己的國際視野。"
  },
  {
    "word": "treasure",
    "pos": "n. / v.",
    "cn_def": "寶藏；珍寶；珍視",
    "en_def": "valuable things such as gold or gems; to cherish something deeply",
    "sentence": "The pirate captain buried his iron chest full of gold {{BLANK}} on a remote desert island where no explorer could ever find it.",
    "cn": "海盜船長將裝滿黃金寶藏的鐵箱埋在一個沒有探險家能找到的偏僻荒島上。"
  },
  {
    "word": "prize",
    "pos": "n.",
    "cn_def": "獎品；獎項",
    "en_def": "an award given to a winner of a competition or race",
    "sentence": "The talented Taiwanese violin student practiced for six hours every day and won first {{BLANK}} in the international youth music contest.",
    "cn": "這位才華橫溢的台灣小提琴學生每天練習六小時，並在國際青年音樂大賽中獲得了一等獎。"
  },
  {
    "word": "value",
    "pos": "n. / v.",
    "cn_def": "價值；重視；估價",
    "en_def": "the worth of something in money or importance; to appreciate",
    "sentence": "Real estate experts predict that the market {{BLANK}} of commercial apartments near the new metro station will increase rapidly this year.",
    "cn": "房地產專家預測，新地鐵站附近的商務公寓的市場價值今年將會快速增長。"
  },
  {
    "word": "worth",
    "pos": "prep. / adj.",
    "cn_def": "值……錢；值得的",
    "en_def": "having a particular value in money or usefulness",
    "sentence": "This rare historical stamp collection is {{BLANK}} hundreds of thousands of dollars, but the elderly collector refuses to sell it.",
    "cn": "這套稀有的歷史郵票收藏價值數十萬美元，但這位年邁的收藏家拒絕將其出售。"
  },
  {
    "word": "precious",
    "pos": "adj.",
    "cn_def": "珍貴的；寶貴的",
    "en_def": "of great value because of being rare, expensive, or important",
    "sentence": "Clean drinking water is the most {{BLANK}} natural resource on earth, so everyone should avoid wasting water in daily life.",
    "cn": "乾淨的飲用水是地球上最寶貴的自然資源，因此每個人在日常生活中都應避免浪費水資源。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的；確信的",
    "en_def": "full of hope and confidence; certain; good",
    "sentence": "Maintaining an optimistic and {{BLANK}} attitude helps patients recover faster from serious illnesses, according to medical researchers.",
    "cn": "醫學研究人員指出，保持樂觀且積極的態度有助於病患更快地從嚴重疾病中康復。"
  },
  {
    "word": "negative",
    "pos": "adj.",
    "cn_def": "負面的；消極的；否定的",
    "en_def": "bad or harmful; expressing disagreement; pessimistic",
    "sentence": "Prolonged lack of proper sleep can have a very {{BLANK}} impact on teenagers' physical health and their academic performance at school.",
    "cn": "長期缺乏適當的睡眠會對青少年的身體健康和學校學業表現產生非常負面的影響。"
  },
  {
    "word": "abroad",
    "pos": "adv.",
    "cn_def": "在國外；到國外",
    "en_def": "in or to a foreign country",
    "sentence": "Many ambitious university graduates hope to study {{BLANK}} in Europe or America to acquire advanced degrees and improve their language skills.",
    "cn": "許多有抱負的大學畢業生希望去歐美留學，以取得進階學位並提升其外語能力。"
  }
];

const MCQS = [
  {
    "q": "The national highway has a maximum speed ______ of one hundred and ten kilometers per hour to ensure vehicular safety.",
    "options": [
      "prize",
      "thought",
      "limit",
      "treasure"
    ],
    "answer": 2,
    "cn": "國道設有每小時一百一十公里的最高速限，以確保車輛行駛安全。 【選項解析】(A) limit 限制  (B) thought 想法  (C) prize 獎品  (D) treasure 寶藏。speed limit 為固定用語「速限」。",
    "vocabIndex": 0
  },
  {
    "q": "The sudden ______ of moving to a completely new city frightened the young girl, but her parents assured her everything would be fine.",
    "options": [
      "limit",
      "value",
      "prize",
      "thought"
    ],
    "answer": 3,
    "cn": "搬到一個全新城市的念頭讓小女孩感到害怕，但她的父母向她保證一切都會好起來。 【選項解析】(A) limit 限制  (B) thought 想法  (C) prize 獎品  (D) value 價值。搬家的念頭為 the thought of moving。",
    "vocabIndex": 1
  },
  {
    "q": "The ancient underwater shipwreck was discovered by divers, and it contained chests of gold and silver ______ from the seventeenth century.",
    "options": [
      "treasure",
      "limit",
      "thought",
      "abroad"
    ],
    "answer": 0,
    "cn": "潛水員發現了這艘古老的水下沉船，裡面裝有十七世紀的金銀寶藏箱。 【選項解析】(A) treasure 寶藏  (B) limit 限制  (C) thought 想法  (D) abroad 國外。沉船裡的寶藏為 treasure。",
    "vocabIndex": 2
  },
  {
    "q": "Samuel was thrilled when the principal announced that he had won the grand ______ for the best science project in the high school.",
    "options": [
      "thought",
      "prize",
      "limit",
      "treasure"
    ],
    "answer": 1,
    "cn": "當校長宣布塞繆爾的高中最佳科學專題獲得大獎時，他興奮不已。 【選項解析】(A) thought 想法  (B) prize 獎項  (C) limit 限制  (D) treasure 寶藏。獲得科學比賽大獎為 grand prize。",
    "vocabIndex": 3
  },
  {
    "q": "The historical ______ of these ancient stone carvings cannot be measured in money, for they reveal how ancient civilizations lived.",
    "options": [
      "prize",
      "limit",
      "value",
      "thought"
    ],
    "answer": 2,
    "cn": "這些古代石刻的歷史價值無法用金錢衡量，因為它們揭示了古代文明的生活方式。 【選項解析】(A) prize 獎品  (B) limit 限制  (C) value 價值  (D) thought 想法。歷史價值為 historical value。",
    "vocabIndex": 4
  },
  {
    "q": "The antique gold pocket watch was appraised by the jeweler, and he confirmed that it was ______ at least five thousand dollars.",
    "options": [
      "negative",
      "precious",
      "positive",
      "worth"
    ],
    "answer": 3,
    "cn": "珠寶商對這只古董黃金懷錶進行了估價，證實它至少值五千美元。 【選項解析】(A) worth 值錢  (B) precious 珍貴的  (C) positive 正面的  (D) negative 負面的。be worth + 金額，表示值多少錢。",
    "vocabIndex": 5
  },
  {
    "q": "Time spent with loving family members is truly ______, and we should cherish every moment we share with our grandparents.",
    "options": [
      "negative",
      "precious",
      "worth",
      "abroad"
    ],
    "answer": 1,
    "cn": "與慈愛的家人共度的時光真正無比珍貴，我們應該珍惜與祖父母共處的每一刻。 【選項解析】(A) negative 負面的  (B) precious 珍貴的  (C) worth 值得的  (D) abroad 國外。寶貴的時光為 precious time。",
    "vocabIndex": 6
  },
  {
    "q": "Despite facing unexpected setbacks in the competition, the coach encouraged the team to remain ______ and never give up.",
    "options": [
      "positive",
      "worth",
      "negative",
      "precious"
    ],
    "answer": 0,
    "cn": "儘管在比賽中遇到了意想不到的挫折，教練依然鼓勵球隊保持積極心態，絕不放棄。 【選項解析】(A) negative 消極的  (B) worth 值得的  (C) positive 積極的  (D) precious 珍貴的。積極正向心態為 positive attitude。",
    "vocabIndex": 7
  },
  {
    "q": "Breathing polluted exhaust fumes every day can cause ______ health effects on children's respiratory systems and lung development.",
    "options": [
      "positive",
      "precious",
      "negative",
      "worth"
    ],
    "answer": 2,
    "cn": "每天吸入受污染的廢氣會對兒童的呼吸系統和肺部發育造成非常負面的健康影響。 【選項解析】(A) positive 正面的  (B) precious 珍貴的  (C) negative 負面的  (D) worth 值得的。不良影響為 negative impact。",
    "vocabIndex": 8
  },
  {
    "q": "After graduating from college next June, Linda plans to travel ______ for six months to experience diverse global cultures.",
    "options": [
      "positive",
      "abroad",
      "negative",
      "precious"
    ],
    "answer": 1,
    "cn": "明年六月大學畢業後，琳達計劃出國旅行六個月，體驗多樣的世界文化。 【選項解析】(A) abroad 到國外  (B) positive 正面的  (C) negative 負面的  (D) precious 珍貴的。出國旅行為 travel abroad。",
    "vocabIndex": 9
  },
  {
    "q": "You should set a strict spending ______ for your monthly shopping budget so that you can save enough money to buy an apartment.",
    "options": [
      "limit",
      "thought",
      "prize",
      "treasure"
    ],
    "answer": 0,
    "cn": "你應該為每月的購物預算設定嚴格的支出上限，這樣你才能存足夠的錢買公寓。 【選項解析】(A) limit 上限  (B) thought 想法  (C) prize 獎品  (D) treasure 寶藏。設定支出上限為 spending limit。",
    "vocabIndex": 0
  },
  {
    "q": "Deep in ______, the elderly scholar sat quietly by the window with a cup of hot tea and watched the autumn rain fall.",
    "options": [
      "treasure",
      "prize",
      "limit",
      "thought"
    ],
    "answer": 3,
    "cn": "年邁的學者陷入沉思，端著一杯熱茶靜靜地坐在窗前，看著秋雨落下。 【選項解析】(A) treasure 寶藏  (B) thought 沉思  (C) limit 限制  (D) prize 獎品。deep in thought 表示「陷入沉思」。",
    "vocabIndex": 1
  },
  {
    "q": "We should always ______ the genuine friendships that we built during our school days, for true friends are hard to find in adulthood.",
    "options": [
      "prize",
      "limit",
      "treasure",
      "thought"
    ],
    "answer": 2,
    "cn": "我們應該永遠珍惜學生時代建立的真摯友誼，因為在成年後很難找到真正的朋友。 【選項解析】(A) treasure 珍視  (B) limit 限制  (C) prize 獎項  (D) thought 想法。珍視友誼動詞為 treasure。",
    "vocabIndex": 2
  },
  {
    "q": "The lucky draw ticket holder walked up to the brightly lit stage to claim his first ______: a brand-new electric scooter.",
    "options": [
      "thought",
      "limit",
      "treasure",
      "prize"
    ],
    "answer": 3,
    "cn": "幸運抽獎券的持有人走上燈火輝煌的舞台，領取他的一等獎：一輛全新的電動機車。 【選項解析】(A) thought 想法  (B) limit 限制  (C) prize 獎品  (D) treasure 寶藏。抽獎一等獎為 first prize。",
    "vocabIndex": 3
  },
  {
    "q": "Many successful enterprises ______ integrity and customer satisfaction much more than short-term financial profits.",
    "options": [
      "prize",
      "value",
      "limit",
      "thought"
    ],
    "answer": 1,
    "cn": "許多成功的企業看重誠信與客戶滿意度遠甚於短期的經濟利益。 【選項解析】(A) prize 獎勵  (B) limit 限制  (C) value 重視  (D) thought 想法。重視某事物動詞為 value。",
    "vocabIndex": 4
  },
  {
    "q": "Visiting the world-famous Louvre Museum in Paris is definitely ______ the long flight, for the artwork is breathtaking.",
    "options": [
      "worth",
      "precious",
      "positive",
      "negative"
    ],
    "answer": 0,
    "cn": "參觀巴黎舉世聞名的羅浮宮絕對值得長途飛行，因為那裡的藝術品令人嘆為觀止。 【選項解析】(A) precious 珍貴的  (B) worth 值得的  (C) positive 正面的  (D) negative 負面的。be worth + 名詞/V-ing，表示「值得……」。",
    "vocabIndex": 5
  },
  {
    "q": "Clean fresh water and clean air are ______ natural treasures that human beings must protect for future generations.",
    "options": [
      "abroad",
      "negative",
      "worth",
      "precious"
    ],
    "answer": 3,
    "cn": "潔淨的新鮮水源和清新空氣是人類必須為後代子孫守護的珍貴自然資源。 【選項解析】(A) precious 珍貴的  (B) negative 負面的  (C) worth 值得的  (D) abroad 國外。珍貴自然資源為 precious resources。",
    "vocabIndex": 6
  },
  {
    "q": "The doctor received ______ test results confirming that the patient was completely free from the harmful viral infection.",
    "options": [
      "negative",
      "positive",
      "precious",
      "worth"
    ],
    "answer": 1,
    "cn": "醫生收到了良好的檢驗結果，證實該患者已完全擺脫有害的病毒感染。 【選項解析】(A) negative 陰性的  (B) positive 良好的/陽性的  (C) precious 珍貴的  (D) worth 值得的。此處 positive 指正面的好結果。",
    "vocabIndex": 7
  },
  {
    "q": "Constant criticism without helpful guidance can produce a ______ atmosphere in the classroom and discourage students from trying.",
    "options": [
      "negative",
      "precious",
      "positive",
      "worth"
    ],
    "answer": 0,
    "cn": "不斷的批評而缺乏有益的指導會在課堂上營造出一種負面氛圍，使學生不敢嘗試。 【選項解析】(A) positive 積極的  (B) precious 珍貴的  (C) negative 負面的  (D) worth 值得的。負面氛圍為 negative atmosphere。",
    "vocabIndex": 8
  },
  {
    "q": "My uncle has lived and worked ______ in Germany for over fifteen years, but he returns to Taiwan every year for Chinese New Year.",
    "options": [
      "negative",
      "positive",
      "abroad",
      "precious"
    ],
    "answer": 2,
    "cn": "我叔叔在德國工作和生活了十五年，但他每年農曆新年都會回台灣團聚。 【選項解析】(A) abroad 在國外  (B) positive 正面的  (C) negative 負面的  (D) precious 珍貴的。在國外居住為 live abroad。",
    "vocabIndex": 9
  },
  {
    "q": "The city government placed a weight ______ on the old wooden suspension bridge to prevent heavy trucks from crossing it.",
    "options": [
      "thought",
      "limit",
      "prize",
      "treasure"
    ],
    "answer": 1,
    "cn": "市政府在老舊木造吊橋上設定了重量限制，以防止重型卡車通行。 【選項解析】(A) limit 限制  (B) thought 想法  (C) prize 獎品  (D) treasure 寶藏。重量限制為 weight limit。",
    "vocabIndex": 0
  },
  {
    "q": "Without a second ______, the courageous lifeguard plunged straight into the rough ocean waves to rescue the drowning child.",
    "options": [
      "treasure",
      "limit",
      "thought",
      "prize"
    ],
    "answer": 2,
    "cn": "勇敢的救生員毫不猶豫，直接跳進洶湧的海浪中營救溺水兒童。 【選項解析】(A) treasure 寶藏  (B) thought 思索  (C) limit 限制  (D) prize 獎品。without a second thought 為常見片語「毫不猶豫」。",
    "vocabIndex": 1
  },
  {
    "q": "Deep in the underground tomb, archaeologists discovered a magnificent royal ______ of golden crowns and gemstone necklaces.",
    "options": [
      "prize",
      "limit",
      "thought",
      "treasure"
    ],
    "answer": 3,
    "cn": "在地下深處的陵墓裡，考古學家發現了宏偉的王室金冠與寶石項鍊寶藏。 【選項解析】(A) treasure 寶藏  (B) limit 限制  (C) thought 想法  (D) prize 獎項。王室寶藏為 royal treasure。",
    "vocabIndex": 2
  },
  {
    "q": "The outstanding young runner received a shiny gold medal and a cash ______ of ten thousand dollars for winning the marathon.",
    "options": [
      "prize",
      "thought",
      "limit",
      "treasure"
    ],
    "answer": 0,
    "cn": "這位優秀的年輕跑者贏得馬拉松比賽，獲得了一枚閃亮的金牌和一萬美元的現金獎金。 【選項解析】(A) limit 限制  (B) thought 想法  (C) prize 獎品/獎金  (D) treasure 寶藏。cash prize 為「現金獎金」。",
    "vocabIndex": 3
  },
  {
    "q": "Is that old painting really ______ so much money, or is the antique dealer exaggerating its historical rarity to the buyers?",
    "options": [
      "precious",
      "worth",
      "positive",
      "negative"
    ],
    "answer": 1,
    "cn": "那幅老畫真的值那麼多錢嗎，還是古董商在向買家誇大其歷史稀有性？ 【選項解析】(A) worth 值得/值錢  (B) precious 珍貴的  (C) positive 正面的  (D) negative 負面的。be worth so much money 表示「值那麼多錢」。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "limit": {
    "pos": "n. / v.",
    "en_def": "the greatest amount, number, or speed allowed; to restrict",
    "cn_def": "界限；限制",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the greatest amount, number, or speed allowed; to restrict",
        "cn_def": "界限；限制"
      }
    ]
  },
  "thought": {
    "pos": "n.",
    "en_def": "an idea, opinion, or mental consideration",
    "cn_def": "想法；思維；沉思",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea, opinion, or mental consideration",
        "cn_def": "想法；思維；沉思"
      }
    ]
  },
  "treasure": {
    "pos": "n. / v.",
    "en_def": "valuable things such as gold or gems; to cherish something deeply",
    "cn_def": "寶藏；珍寶；珍視",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "valuable things such as gold or gems; to cherish something deeply",
        "cn_def": "寶藏；珍寶；珍視"
      }
    ]
  },
  "prize": {
    "pos": "n.",
    "en_def": "an award given to a winner of a competition or race",
    "cn_def": "獎品；獎項",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an award given to a winner of a competition or race",
        "cn_def": "獎品；獎項"
      }
    ]
  },
  "value": {
    "pos": "n. / v.",
    "en_def": "the worth of something in money or importance; to appreciate",
    "cn_def": "價值；重視；估價",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the worth of something in money or importance; to appreciate",
        "cn_def": "價值；重視；估價"
      }
    ]
  },
  "worth": {
    "pos": "prep. / adj.",
    "en_def": "having a particular value in money or usefulness",
    "cn_def": "值……錢；值得的",
    "combined": [
      {
        "pos": "prep. / adj.",
        "en_def": "having a particular value in money or usefulness",
        "cn_def": "值……錢；值得的"
      }
    ]
  },
  "precious": {
    "pos": "adj.",
    "en_def": "of great value because of being rare, expensive, or important",
    "cn_def": "珍貴的；寶貴的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of great value because of being rare, expensive, or important",
        "cn_def": "珍貴的；寶貴的"
      }
    ]
  },
  "positive": {
    "pos": "adj.",
    "en_def": "full of hope and confidence; certain; good",
    "cn_def": "正面的；積極的；確信的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of hope and confidence; certain; good",
        "cn_def": "正面的；積極的；確信的"
      }
    ]
  },
  "negative": {
    "pos": "adj.",
    "en_def": "bad or harmful; expressing disagreement; pessimistic",
    "cn_def": "負面的；消極的；否定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "bad or harmful; expressing disagreement; pessimistic",
        "cn_def": "負面的；消極的；否定的"
      }
    ]
  },
  "abroad": {
    "pos": "adv.",
    "en_def": "in or to a foreign country",
    "cn_def": "在國外；到國外",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in or to a foreign country",
        "cn_def": "在國外；到國外"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
