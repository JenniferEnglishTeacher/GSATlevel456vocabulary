// Lesson 26 Quiz Data: Business, Employment & Commerce
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 26 - Business, Employment & Commerce",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "服務；供應；服役",
    "en_def": "to perform duties or services for an organization, customer, or country",
    "sentence": "The friendly family restaurant continues to {{BLANK}} traditional Taiwanese beef noodles, and long queues form outside every weekend.",
    "cn": "這家溫馨的家庭餐館繼續供應道地的台灣牛肉麵，每個週末外面都會排起長長的人龍。"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務；協助",
    "en_def": "the action of helping or doing work for someone; customer care",
    "sentence": "The hotel staff was praised by overseas travelers because the room {{BLANK}} was prompt, courteous, and exceptionally helpful.",
    "cn": "飯店員工受到海外旅客的讚賞，因為客房服務迅速、謙恭有禮且非常有幫助。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客；客戶",
    "en_def": "a person or organization that buys goods or services from a store or business",
    "sentence": "The supermarket manager politely greeted every loyal {{BLANK}} who walked through the front doors on Saturday morning.",
    "cn": "超市經理在週六早晨客氣地向走進大門的每一位忠實顧客打招呼。"
  },
  {
    "word": "trade",
    "pos": "n. / v.",
    "cn_def": "貿易；交易；商業",
    "en_def": "the buying and selling of goods and services between people or countries",
    "sentence": "International {{BLANK}} between Asian and European nations has expanded rapidly because shipping routes have become more efficient.",
    "cn": "亞洲和歐洲國家之間的國際貿易迅速擴張，因為航運路線變得更加高效。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "公司；同行；陪伴",
    "en_def": "a commercial business; the condition of being with someone",
    "sentence": "After working for ten years in finance, Jason and his college friends established an innovative tech {{BLANK}} in Taipei.",
    "cn": "在金融領域工作了十年之後，傑森和他的大學好友在台北成立了一家創新科技公司。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工；受僱者",
    "en_def": "a person employed for wages or salary, especially at non-executive level",
    "sentence": "The generous manufacturing firm offered every hardworking {{BLANK}} a generous year-end bonus and three weeks of paid leave.",
    "cn": "這家慷慨的製造業公司為每位辛勤工作的員工提供了優厚的年終獎金和三週的有薪假。"
  },
  {
    "word": "interview",
    "pos": "n. / v.",
    "cn_def": "面試；訪談；採訪",
    "en_def": "a formal meeting at which someone is questioned to assess suitability",
    "sentence": "David felt slightly nervous before his morning job {{BLANK}}, so he reviewed common questions while waiting in the reception hall.",
    "cn": "大衛在早晨的求職面試前感到有些緊張，所以他在接待大廳等待時複習了常見問題。"
  },
  {
    "word": "hire",
    "pos": "v. / n.",
    "cn_def": "僱用；聘請；租用",
    "en_def": "to employ someone for wages; to rent equipment for temporary use",
    "sentence": "Because the software department had several big projects, the board decided to {{BLANK}} ten experienced programmers immediately.",
    "cn": "因為軟體部門有幾個大專案，董事會決定立即聘請十位有經驗的程式設計師。"
  },
  {
    "word": "contract",
    "pos": "n. / v.",
    "cn_def": "合約；契約；縮小",
    "en_def": "a written or spoken agreement intended to be enforceable by law",
    "sentence": "Both corporate leaders read every clause in the legal {{BLANK}} carefully before signing their names at the bottom.",
    "cn": "兩位企業領導人在底部簽名之前，仔細閱讀了這份法律合約中的每一個條款。"
  },
  {
    "word": "quit",
    "pos": "v.",
    "cn_def": "辭職；放棄；停止",
    "en_def": "to leave a place usually permanently; to stop an action or employment",
    "sentence": "After working long overnight hours for three years, Sarah decided to {{BLANK}} her stressful job to pursue her passion for painting.",
    "cn": "在連續三年上夜班長時間工作之後，莎拉決定辭掉這份壓力很大的工作，去追求她對畫畫的熱情。"
  }
];

const MCQS = [
  {
    "q": "The cafeteria staff works hard from eleven to two every weekday to ______ fresh hot meals to hungry high school students.",
    "options": [
      "serve",
      "quit",
      "trade",
      "hire"
    ],
    "answer": 0,
    "cn": "自助餐廳員工每個工作日的十一點到兩點辛勤工作，為飢腸轆轆的高中生供應新鮮熱食。 【選項解析】(A) quit 辭職 (B) serve 供應 (C) trade 貿易 (D) hire 僱用。供應餐點用 serve meals。",
    "vocabIndex": 0
  },
  {
    "q": "The airline won an international award because their flight attendants offered outstanding customer ______ to passengers.",
    "options": [
      "company",
      "contract",
      "service",
      "interview"
    ],
    "answer": 2,
    "cn": "該航空公司榮獲國際大獎，因為其空服人員向乘客提供了卓越的顧客服務。 【選項解析】(A) service 服務 (B) contract 合約 (C) company 公司 (D) interview 面試。customer service 指客戶服務。",
    "vocabIndex": 1
  },
  {
    "q": "The store manager offered a ten percent discount voucher to any satisfied ______ who completed an online feedback survey.",
    "options": [
      "employee",
      "trade",
      "company",
      "customer"
    ],
    "answer": 3,
    "cn": "超市經理向任何完成線上反饋調查的滿意顧客提供九折優惠券。 【選項解析】(A) employee 員工 (B) trade 貿易 (C) customer 顧客 (D) company 公司。給予完成問卷的顧客優惠。",
    "vocabIndex": 2
  },
  {
    "q": "Maritime ______ agreements signed between the two neighboring countries lowered tariffs on agricultural exports.",
    "options": [
      "interview",
      "trade",
      "service",
      "contract"
    ],
    "answer": 1,
    "cn": "兩個鄰國之間簽署的海上貿易協定降低了農產品出口關稅。 【選項解析】(A) interview 面試 (B) trade 貿易 (C) service 服務 (D) contract 合約。maritime trade agreements（海上貿易協定）。",
    "vocabIndex": 3
  },
  {
    "q": "The multinational pharmaceutical ______ invested millions of dollars in developing affordable medicine for developing nations.",
    "options": [
      "employee",
      "customer",
      "company",
      "trade"
    ],
    "answer": 2,
    "cn": "這家跨國製藥公司斥資數百萬美元，為開發中國家開發價格合理的藥品。 【選項解析】(A) employee (B) customer (C) trade (D) company 公司。multinational pharmaceutical company（跨國製藥公司）。",
    "vocabIndex": 4
  },
  {
    "q": "Every full-time ______ in the factory receives comprehensive health insurance coverage and two weeks of paid vacation.",
    "options": [
      "service",
      "employee",
      "contract",
      "interview"
    ],
    "answer": 1,
    "cn": "工廠裡的每一位全職員工都享有全面的醫療保險保障和兩週的有薪假。 【選項解析】(A) employee 員工 (B) service (C) contract (D) interview。受僱享福利者為 full-time employee。",
    "vocabIndex": 5
  },
  {
    "q": "Maria practiced her self-introduction several times before attending the final round of her job ______ at the bank.",
    "options": [
      "trade",
      "service",
      "company",
      "interview"
    ],
    "answer": 3,
    "cn": "瑪麗亞在參加銀行最後一輪求職面試之前，多次練習了自己的自我介紹。 【選項解析】(A) trade (B) interview 面試 (C) company (D) service。job interview 指求職面試。",
    "vocabIndex": 6
  },
  {
    "q": "Because peak tourist season was approaching, the beachfront resort planned to ______ twenty temporary kitchen assistants.",
    "options": [
      "hire",
      "quit",
      "serve",
      "trade"
    ],
    "answer": 0,
    "cn": "由於旅遊旺季即將到來，這家海濱度假村計劃立即聘請二十名臨時廚房助手。 【選項解析】(A) serve (B) quit (C) hire 聘請 (D) trade。招募臨時工為 hire assistants。",
    "vocabIndex": 7
  },
  {
    "q": "Before buying the apartment, Mr. Lin asked his lawyer to inspect the property purchase ______ for hidden liabilities.",
    "options": [
      "employee",
      "contract",
      "service",
      "customer"
    ],
    "answer": 1,
    "cn": "在購買該公寓之前，林先生請他的律師仔細檢查房產購買合約以防暗藏債務。 【選項解析】(A) contract 合約 (B) employee (C) service (D) customer。property purchase contract（購屋合約）。",
    "vocabIndex": 8
  },
  {
    "q": "Mark was extremely exhausted from working eighty hours a week, so he finally gathered his courage to ______ his position.",
    "options": [
      "serve",
      "hire",
      "trade",
      "quit"
    ],
    "answer": 3,
    "cn": "馬克因每週工作八十小時而極度精疲力竭，因此他終於鼓起勇氣辭去了職位。 【選項解析】(A) serve (B) hire (C) quit 辭職 (D) trade。辭去職務用 quit his position。",
    "vocabIndex": 9
  },
  {
    "q": "Flight attendants smiled warmly as they began to ______ beverages and warm snacks to passengers on the long flight.",
    "options": [
      "serve",
      "quit",
      "hire",
      "trade"
    ],
    "answer": 0,
    "cn": "空服人員面帶溫暖的微笑，開始在長途飛行中為乘客供應飲料和溫熱小吃。 【選項解析】(A) trade (B) quit (C) hire (D) serve 供應。客艙供應餐飲用 serve beverages。",
    "vocabIndex": 0
  },
  {
    "q": "After ten years of dependable ______, the senior technician was rewarded with a gold watch at the annual company party.",
    "options": [
      "customer",
      "interview",
      "service",
      "contract"
    ],
    "answer": 2,
    "cn": "在長達十年的可靠服務奉獻之後，資深技術員在公司年度聚會上獲贈一只金錶。 【選項解析】(A) service 服務年資 (B) interview (C) customer (D) contract。ten years of dependable service。",
    "vocabIndex": 1
  },
  {
    "q": "The clothing boutique welcomed a wealthy ______ who purchased five silk dresses and three matching winter coats.",
    "options": [
      "trade",
      "employee",
      "company",
      "customer"
    ],
    "answer": 3,
    "cn": "這家服飾精品店迎來了一位富有的顧客，她買了五件絲綢洋裝和三件配套的冬衣。 【選項解析】(A) trade (B) customer 顧客 (C) company (D) employee。購買服飾者為 boutique customer。",
    "vocabIndex": 2
  },
  {
    "q": "Ancient merchants traveled along the Silk Road to ______ Chinese silk and porcelain for European glass and wine.",
    "options": [
      "quit",
      "trade",
      "serve",
      "hire"
    ],
    "answer": 1,
    "cn": "古代商人沿著絲綢之路跋涉，用中國的絲綢和瓷器換取歐洲的玻璃和葡萄酒。 【選項解析】(A) quit (B) serve (C) trade 交換/以物易物 (D) hire。trade silk for wine（以絲綢交換葡萄酒）。",
    "vocabIndex": 3
  },
  {
    "q": "The logistics ______ purchased fifty new electric delivery vans to reduce carbon emissions across the metropolitan area.",
    "options": [
      "company",
      "service",
      "customer",
      "contract"
    ],
    "answer": 0,
    "cn": "這家物流公司採購了五十輛全新電動貨車，以減少大都會區的碳排放量。 【選項解析】(A) company 公司 (B) service (C) customer (D) contract。logistics company（物流公司）。",
    "vocabIndex": 4
  },
  {
    "q": "An outstanding ______ who exceeded monthly sales targets by fifty percent was promoted to regional marketing director.",
    "options": [
      "service",
      "interview",
      "employee",
      "trade"
    ],
    "answer": 2,
    "cn": "一位月銷售額超出目標百分之五十的傑出員工，被拔擢為區域行銷總監。 【選項解析】(A) service (B) interview (C) employee 員工 (D) trade。工作表現優異受拔擢者為 employee。",
    "vocabIndex": 5
  },
  {
    "q": "The magazine reporter conducted an in-depth ______ with the famous film director regarding his cinematic inspirations.",
    "options": [
      "company",
      "interview",
      "contract",
      "customer"
    ],
    "answer": 1,
    "cn": "雜誌記者就其電影創作靈感對這位著名電影導演進行了深度訪談。 【選項解析】(A) company (B) contract (C) interview 專訪 (D) customer。conducted an in-depth interview。",
    "vocabIndex": 6
  },
  {
    "q": "The tech corporation announced plans to ______ two hundred skilled data analysts for their newly opened research center.",
    "options": [
      "quit",
      "trade",
      "hire",
      "serve"
    ],
    "answer": 2,
    "cn": "這家科技巨頭宣佈計劃為其新落成的研發中心招聘兩百名熟練的數據分析師。 【選項解析】(A) quit (B) trade (C) serve (D) hire 招聘。企業召募人才用 hire analysts。",
    "vocabIndex": 7
  },
  {
    "q": "Players who sign a professional athletic ______ must maintain rigorous physical fitness throughout the competitive season.",
    "options": [
      "customer",
      "service",
      "employee",
      "contract"
    ],
    "answer": 3,
    "cn": "簽署職業運動合約的選手必須在整個賽季期間維持嚴格的身材體能狀態。 【選項解析】(A) customer (B) contract 契約 (C) employee (D) service。athletic contract（運動員合約）。",
    "vocabIndex": 8
  },
  {
    "q": "The doctor warned the patient that he must ______ smoking cigarettes immediately to avoid permanent heart damage.",
    "options": [
      "quit",
      "serve",
      "trade",
      "hire"
    ],
    "answer": 0,
    "cn": "醫生警告該病患必須立即戒菸，以免造成永久性心臟損傷。 【選項解析】(A) quit 戒除 (B) serve (C) trade (D) hire。quit smoking 指戒菸。",
    "vocabIndex": 9
  },
  {
    "q": "The elegant restaurant strives to ______ authentic Italian cuisine using fresh imported olive oil and homemade cheese.",
    "options": [
      "hire",
      "quit",
      "trade",
      "serve"
    ],
    "answer": 3,
    "cn": "這家優雅的餐館力求使用新鮮進口橄欖油和自製乳酪，供應正宗義大利美食。 【選項解析】(A) hire (B) serve 供應 (C) trade (D) quit。餐館供應美食用 serve cuisine。",
    "vocabIndex": 0
  },
  {
    "q": "Fast and polite customer ______ is the primary reason why online shoppers remain loyal to this e-commerce platform.",
    "options": [
      "contract",
      "employee",
      "service",
      "company"
    ],
    "answer": 2,
    "cn": "迅速且有禮貌的客戶服務，是線上購物者對該電子商務平台保持忠誠的主要原因。 【選項解析】(A) contract (B) service 服務 (C) employee (D) company。customer service 指售後與客戶服務。",
    "vocabIndex": 1
  },
  {
    "q": "The banking clerk assisted an elderly ______ who needed help filling out an international wire transfer document.",
    "options": [
      "trade",
      "customer",
      "interview",
      "service"
    ],
    "answer": 1,
    "cn": "銀行行員協助了一位需要填寫國際電匯文件表格的老年客戶。 【選項解析】(A) trade (B) interview (C) customer 客戶 (D) service。至銀行臨櫃辦理業務者為 bank customer。",
    "vocabIndex": 2
  },
  {
    "q": "The export-oriented nation relies heavily on foreign ______ to import crude oil and export advanced semiconductors.",
    "options": [
      "trade",
      "contract",
      "company",
      "employee"
    ],
    "answer": 0,
    "cn": "這個以出口為導向的國家高度依賴對外貿易來進口原油並出口先進半導體。 【選項解析】(A) trade 貿易 (B) contract (C) company (D) employee。foreign trade 指對外貿易。",
    "vocabIndex": 3
  },
  {
    "q": "During the panel ______, candidates were evaluated on problem-solving abilities, communication skills, and team spirit.",
    "options": [
      "company",
      "service",
      "customer",
      "interview"
    ],
    "answer": 3,
    "cn": "在小組面試期間，評審依據問題解決能力、溝通技巧和團隊合作精神來評估應試者。 【選項解析】(A) company (B) service (C) customer (D) interview 面試。panel interview 指小組集體面試。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "serve": {
    "pos": "v.",
    "en_def": "to perform duties or services for an organization, customer, or country",
    "cn_def": "服務；供應；服役",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to perform duties or services for an organization, customer, or country",
        "cn_def": "服務；供應；服役"
      }
    ]
  },
  "service": {
    "pos": "n.",
    "en_def": "the action of helping or doing work for someone; customer care",
    "cn_def": "服務；協助",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of helping or doing work for someone; customer care",
        "cn_def": "服務；協助"
      }
    ]
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person or organization that buys goods or services from a store or business",
    "cn_def": "顧客；客戶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or organization that buys goods or services from a store or business",
        "cn_def": "顧客；客戶"
      }
    ]
  },
  "trade": {
    "pos": "n. / v.",
    "en_def": "the buying and selling of goods and services between people or countries",
    "cn_def": "貿易；交易；商業",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the buying and selling of goods and services between people or countries",
        "cn_def": "貿易；交易；商業"
      }
    ]
  },
  "company": {
    "pos": "n.",
    "en_def": "a commercial business; the condition of being with someone",
    "cn_def": "公司；同行；陪伴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a commercial business; the condition of being with someone",
        "cn_def": "公司；同行；陪伴"
      }
    ]
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person employed for wages or salary, especially at non-executive level",
    "cn_def": "員工；受僱者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed for wages or salary, especially at non-executive level",
        "cn_def": "員工；受僱者"
      }
    ]
  },
  "interview": {
    "pos": "n. / v.",
    "en_def": "a formal meeting at which someone is questioned to assess suitability",
    "cn_def": "面試；訪談；採訪",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a formal meeting at which someone is questioned to assess suitability",
        "cn_def": "面試；訪談；採訪"
      }
    ]
  },
  "hire": {
    "pos": "v. / n.",
    "en_def": "to employ someone for wages; to rent equipment for temporary use",
    "cn_def": "僱用；聘請；租用",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to employ someone for wages; to rent equipment for temporary use",
        "cn_def": "僱用；聘請；租用"
      }
    ]
  },
  "contract": {
    "pos": "n. / v.",
    "en_def": "a written or spoken agreement intended to be enforceable by law",
    "cn_def": "合約；契約；縮小",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a written or spoken agreement intended to be enforceable by law",
        "cn_def": "合約；契約；縮小"
      }
    ]
  },
  "quit": {
    "pos": "v.",
    "en_def": "to leave a place usually permanently; to stop an action or employment",
    "cn_def": "辭職；放棄；停止",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave a place usually permanently; to stop an action or employment",
        "cn_def": "辭職；放棄；停止"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
