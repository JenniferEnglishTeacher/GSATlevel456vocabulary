// Lesson 57 Quiz Data: Information Organization, Documents, Diagrams & Semantics
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 57 - Information Organization, Documents, Diagrams & Semantics",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量；卷；冊；容量",
    "en_def": "amount of sound; a single book in a set; quantity of space",
    "sentence": "The library was very quiet, so the librarian asked the student to turn down the {{BLANK}} on his headphones.",
    "cn": "圖書館裡非常安靜，因此圖書館員要求那位學生將耳機上的______調小。"
  },
  {
    "word": "chart",
    "pos": "n. / v.",
    "cn_def": "圖表；排行榜",
    "en_def": "a sheet of information in the form of a table, graph, or diagram",
    "sentence": "The economics teacher projected a detailed bar {{BLANK}} on the screen, showing the steady rise in inflation over ten years.",
    "cn": "經濟學老師在螢幕上投影了一張詳細的長條______，顯示過去十年來通貨膨脹的持續上升。"
  },
  {
    "word": "title",
    "pos": "n.",
    "cn_def": "標題；書名；頭銜",
    "en_def": "the name of a book, composition, or other artistic work; formal rank",
    "sentence": "The mystery novel had an intriguing book {{BLANK}}, which immediately caught my attention at the university bookstore.",
    "cn": "這本懸疑小說有一個引人入勝的書______，在大學書店裡立刻吸引了我的注意。"
  },
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題；話題",
    "en_def": "a matter dealt with in a text, discourse, or conversation; subject",
    "sentence": "Renewable solar energy was the chosen {{BLANK}} for our debate, and each student presented evidence regarding installation costs.",
    "cn": "可再生太陽能是我們這次辯論所選定的______，每位學生都提出了有關安裝成本的證據。"
  },
  {
    "word": "note",
    "pos": "n. / v.",
    "cn_def": "筆記；便條；注意",
    "en_def": "a brief record of points written down; a short informal letter",
    "sentence": "During the lecture, diligent students took careful {{BLANK}}s on key vocabulary, reviewing them thoroughly before the exam.",
    "cn": "在演講期間，勤奮的學生們認真記下了重點單字的______，並在考試前徹底複習。"
  },
  {
    "word": "document",
    "pos": "n. / v.",
    "cn_def": "文件；公文；證件",
    "en_def": "a piece of written, printed, or electronic matter providing information",
    "sentence": "The lawyer asked his client to sign the legal {{BLANK}} before submitting the property contract to the city court.",
    "cn": "律師要求其客戶在將不動產合約提交給地方法院之前，先簽署這份法律______。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵；符號",
    "en_def": "a mark or character used as a conventional representation of an object",
    "sentence": "The white dove is recognized worldwide as a gentle {{BLANK}} of peace, often released at international sporting events.",
    "cn": "白鴿在全世界都被公認為和平的溫柔______，經常在國際體育賽事中被放飛。"
  },
  {
    "word": "meaning",
    "pos": "n.",
    "cn_def": "意思；含義；意義",
    "en_def": "what is meant by a word, text, concept, or action; significance",
    "sentence": "When you encounter an unfamiliar English word while reading, you should look up its exact {{BLANK}} in a dictionary.",
    "cn": "當你在閱讀時遇到不熟悉的英文字詞時，你應該在字典裡查閱其確切的______。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法",
    "en_def": "a view or judgment formed about something, not necessarily based on fact",
    "sentence": "Everyone in the seminar was encouraged to express an honest {{BLANK}} about the new school dress code policy.",
    "cn": "研討會上的每個人都被鼓勵針對學校的新制服政策發表坦率的______。"
  },
  {
    "word": "information",
    "pos": "n.",
    "cn_def": "資訊；消息；資料",
    "en_def": "facts provided or learned about something or someone; data",
    "sentence": "The tourist visitor center provides travelers with free map brochures and useful {{BLANK}} about scenic local mountain trails.",
    "cn": "遊客服務中心為旅客提供免費的地圖手冊以及關於本地風景優美的山徑的實用______。"
  }
];

const MCQS = [
  {
    "q": "Please lower the speaker ______ on your television set, because our newborn baby is sleeping soundly in the adjacent room.",
    "options": [
      "topic",
      "chart",
      "volume",
      "title"
    ],
    "answer": 2,
    "cn": "請將電視機上的喇叭音量調小，因為我們的新生嬰兒正在隔壁房間熟睡。 【選項解析】(A) volume 音量 (B) chart 圖表 (C) topic 話題 (D) title 標題。調整聲音大小為 speaker volume。",
    "vocabIndex": 0
  },
  {
    "q": "The sales manager examined the monthly performance ______ to determine which branch sold the greatest number of cars.",
    "options": [
      "chart",
      "title",
      "volume",
      "symbol"
    ],
    "answer": 0,
    "cn": "業務經理檢視了每月業績圖表，以確定哪家分店銷售的汽車數量最多。 【選項解析】(A) title 標題 (B) chart 圖表 (C) volume 音量 (D) symbol 象徵。業績統計圖為 performance chart。",
    "vocabIndex": 1
  },
  {
    "q": "The author selected a memorable ______ for her autobiography that reflected her lifelong journey as an explorer.",
    "options": [
      "volume",
      "title",
      "topic",
      "symbol"
    ],
    "answer": 1,
    "cn": "這位作者為她的自傳挑選了一個令人難忘的書名，反映了她作為探險家的終身旅程。 【選項解析】(A) volume 冊數 (B) topic 主題 (C) title 標題 (D) symbol 符號。書籍名稱為 book title。",
    "vocabIndex": 2
  },
  {
    "q": "Global warming has become a heated ______ of discussion among international scientists and environmental policymakers.",
    "options": [
      "title",
      "volume",
      "chart",
      "topic"
    ],
    "answer": 3,
    "cn": "全球暖化已成為國際科學家與環境決策官員之間熱烈討論的話題。 【選項解析】(A) topic 話題 (B) volume 音量 (C) chart 圖表 (D) title 標題。討論題目為 topic of discussion。",
    "vocabIndex": 3
  },
  {
    "q": "Sarah wrote a brief reminder ______ and stuck it onto the kitchen refrigerator so she would not forget her appointment.",
    "options": [
      "chart",
      "volume",
      "note",
      "symbol"
    ],
    "answer": 2,
    "cn": "莎拉寫了一張簡短的提醒便條貼在廚房冰箱上，這樣她就不會忘記她的預約。 【選項解析】(A) chart 圖表 (B) note 便條 (C) volume 音量 (D) symbol 符號。備忘便條為 reminder note。",
    "vocabIndex": 4
  },
  {
    "q": "The immigration officer inspected every official ______ presented by the traveler before stamping his entrance visa.",
    "options": [
      "document",
      "volume",
      "topic",
      "chart"
    ],
    "answer": 0,
    "cn": "移民官員在蓋上入境簽證印章前，仔細檢查了旅客出示的每一份官方文件證件。 【選項解析】(A) document 文件 (B) volume 卷冊 (C) topic 話題 (D) chart 圖表。官方文件為 official document。",
    "vocabIndex": 5
  },
  {
    "q": "In ancient Egyptian hieroglyphics, each decorative carving served as a visual ______ representing an idea or sound.",
    "options": [
      "title",
      "symbol",
      "volume",
      "chart"
    ],
    "answer": 1,
    "cn": "在古埃及象形文字中，每件裝飾性雕刻都是代表某種概念或聲音的視覺符號。 【選項解析】(A) title 標題 (B) volume 容量 (C) symbol 符號 (D) chart 圖表。象徵性圖案為 visual symbol。",
    "vocabIndex": 6
  },
  {
    "q": "If you cannot deduce the true ______ of a phrase from the context, consulting a good bilingual dictionary is wise.",
    "options": [
      "chart",
      "title",
      "topic",
      "meaning"
    ],
    "answer": 3,
    "cn": "如果你無法從上下文中推斷出某個片語的真實含義，查閱一本優質雙語字典是明智的做法。 【選項解析】(A) chart 圖表 (B) title 標題 (C) topic 主題 (D) meaning 意思。字詞含義為 true meaning。",
    "vocabIndex": 7
  },
  {
    "q": "In my personal ______, investing in renewable wind power will bring greater long-term benefits to our island economy.",
    "options": [
      "chart",
      "opinion",
      "volume",
      "symbol"
    ],
    "answer": 1,
    "cn": "依我個人之見，投資可再生風力發電將為我們這座海島經濟帶來更大的長期效益。 【選項解析】(A) chart 圖表 (B) opinion 意見 (C) volume 音量 (D) symbol 象徵。依我之見為 in my personal opinion。",
    "vocabIndex": 8
  },
  {
    "q": "The internet enables researchers to access vast amounts of medical ______ within seconds of clicking a mouse.",
    "options": [
      "information",
      "symbol",
      "title",
      "volume"
    ],
    "answer": 0,
    "cn": "網際網路使研究人員在點擊滑鼠的數秒之內即可獲取海量的醫療資訊。 【選項解析】(A) information 資訊 (B) symbol 符號 (C) title 頭銜 (D) volume 卷冊。醫療資訊為 medical information。",
    "vocabIndex": 9
  },
  {
    "q": "When the fire alarm began ringing at maximum ______, all building occupants immediately evacuated toward the emergency stairs.",
    "options": [
      "chart",
      "topic",
      "volume",
      "note"
    ],
    "answer": 2,
    "cn": "當火災警報器以最大音量響起時，所有大樓人員立即朝著緊急逃生梯疏散。 【選項解析】(A) chart 圖表 (B) volume 音量 (C) topic 話題 (D) note 便條。最大音量為 maximum volume。",
    "vocabIndex": 0
  },
  {
    "q": "The doctor showed the patient an anatomical ______ illustrating how blood circulates through the human heart valves.",
    "options": [
      "title",
      "volume",
      "topic",
      "chart"
    ],
    "answer": 3,
    "cn": "醫生向病人展示了一張人體解剖圖表，說明血液如何流經人體心臟瓣膜。 【選項解析】(A) title 標題 (B) volume 卷冊 (C) chart 圖表 (D) topic 主題。醫用解剖圖為 anatomical chart。",
    "vocabIndex": 1
  },
  {
    "q": "The professor earned the academic ______ of department chair after publishing twenty acclaimed research papers.",
    "options": [
      "chart",
      "title",
      "volume",
      "symbol"
    ],
    "answer": 1,
    "cn": "該教授在發表了二十篇備受讚譽的研究論文後，獲得了系主任的學術頭銜職稱。 【選項解析】(A) title 頭銜 (B) chart 圖表 (C) volume 音量 (D) symbol 象徵。學術職稱頭銜為 academic title。",
    "vocabIndex": 2
  },
  {
    "q": "The teacher announced that the essay ______ for this semester would center on cultural traditions in modern Taiwan.",
    "options": [
      "symbol",
      "volume",
      "chart",
      "topic"
    ],
    "answer": 3,
    "cn": "老師宣布本學期的作文主題將聚焦在現代台灣的文化傳統上。 【選項解析】(A) symbol 象徵 (B) volume 音量 (C) chart 圖表 (D) topic 主題。論文作文題目為 essay topic。",
    "vocabIndex": 3
  },
  {
    "q": "The student left a thank-you ______ on the teacher's podium, expressing gratitude for her dedicated academic guidance.",
    "options": [
      "volume",
      "chart",
      "note",
      "topic"
    ],
    "answer": 2,
    "cn": "學生在老師講台上留了一張感謝小卡便條，對她悉心的學術指導表達謝意。 【選項解析】(A) note 便條 (B) chart 圖表 (C) volume 音量 (D) topic 主題。感謝短籤為 thank-you note。",
    "vocabIndex": 4
  },
  {
    "q": "Before securing a bank loan for your small business, you must assemble every financial ______ required by the lender.",
    "options": [
      "document",
      "symbol",
      "title",
      "volume"
    ],
    "answer": 0,
    "cn": "在為你的小型企業申請銀行貸款之前，你必須備齊貸方所要求的每一份財務文件。 【選項解析】(A) document 文件 (B) symbol 象徵 (C) title 標題 (D) volume 卷冊。財務資料文件為 financial document。",
    "vocabIndex": 5
  },
  {
    "q": "A red cross on a white background is an internationally protected ______ indicating medical assistance and neutrality.",
    "options": [
      "chart",
      "symbol",
      "title",
      "volume"
    ],
    "answer": 1,
    "cn": "白底紅十字是國際保護的標誌符號，代表著醫療援助與中立立場。 【選項解析】(A) chart 圖表 (B) symbol 標誌 (C) title 標題 (D) volume 卷冊。國際識別標誌為 protected symbol。",
    "vocabIndex": 6
  },
  {
    "q": "Poetry often carries multiple layers of philosophical ______, allowing each reader to interpret the verses uniquely.",
    "options": [
      "volume",
      "chart",
      "meaning",
      "symbol"
    ],
    "answer": 2,
    "cn": "詩歌往往承載著多層哲學意涵，讓每位讀者都能有獨特體悟與解讀。 【選項解析】(A) meaning 意涵 (B) chart 圖表 (C) volume 音量 (D) symbol 象徵。深層意義為 philosophical meaning。",
    "vocabIndex": 7
  },
  {
    "q": "Public ______ polls showed that most citizens favored increasing government subsidies for public electric transit.",
    "options": [
      "opinion",
      "title",
      "chart",
      "volume"
    ],
    "answer": 0,
    "cn": "民意民意調查顯示，大多數公民贊成政府增加對公共電動交通工具的補貼。 【選項解析】(A) chart 圖表 (B) title 標題 (C) opinion 意見 (D) volume 卷冊。民意民調為 public opinion polls。",
    "vocabIndex": 8
  },
  {
    "q": "The police detective gathered crucial ______ from nearby surveillance cameras to identify the getaway vehicle.",
    "options": [
      "chart",
      "title",
      "symbol",
      "information"
    ],
    "answer": 3,
    "cn": "刑警從附近的監視器中蒐集了關鍵情報資訊，以查明逃逸車輛的特徵。 【選項解析】(A) information 資訊 (B) title 頭銜 (C) symbol 符號 (D) chart 圖表。關鍵情報為 crucial information。",
    "vocabIndex": 9
  },
  {
    "q": "Turn up the radio ______, please, so that everyone in the backyard can hear the live broadcast of the baseball game.",
    "options": [
      "chart",
      "volume",
      "topic",
      "note"
    ],
    "answer": 1,
    "cn": "請把收音機的音量調大一點，這樣後院的每個人都能聽到棒球比賽的現場直播。 【選項解析】(A) chart 圖表 (B) volume 音量 (C) topic 主題 (D) note 便條。調大音量為 turn up volume。",
    "vocabIndex": 0
  },
  {
    "q": "The medical chart recorded the patient's daily temperature fluctuations throughout her weeklong hospital stay.",
    "options": [
      "title",
      "topic",
      "chart",
      "symbol"
    ],
    "answer": 2,
    "cn": "在病人住院一週期間，醫用病歷圖表記錄了她每日的體溫波動變化。 【選項解析】(A) title 標題 (B) topic 主題 (C) chart 圖表 (D) symbol 符號。病歷體溫表為 medical chart。",
    "vocabIndex": 1
  },
  {
    "q": "The official job ______ of the executive was Vice President of Global Operations, overseeing five foreign branch offices.",
    "options": [
      "chart",
      "volume",
      "symbol",
      "title"
    ],
    "answer": 3,
    "cn": "該高階主管的正式工作職稱是全球營運副總裁，負責監督五個海外分公司。 【選項解析】(A) title 職稱 (B) volume 卷冊 (C) symbol 象徵 (D) chart 圖表。正式職銜為 official job title。",
    "vocabIndex": 2
  },
  {
    "q": "The university seminar invited guest lecturers to debate the complex ______ of artificial intelligence ethics.",
    "options": [
      "topic",
      "chart",
      "volume",
      "symbol"
    ],
    "answer": 0,
    "cn": "大學研討會邀請客座講師深入辯論人工智慧倫理這一複雜課題。 【選項解析】(A) volume 音量 (B) chart 圖表 (C) topic 主題 (D) symbol 符號。探討複雜課題為 complex topic。",
    "vocabIndex": 3
  },
  {
    "q": "Keep your passport and confidential travel ______s securely locked inside the hotel safe whenever you explore the city.",
    "options": [
      "symbol",
      "document",
      "title",
      "chart"
    ],
    "answer": 1,
    "cn": "當你在市區觀光遊覽時，請將護照和機密旅行證件安全鎖在飯店保險箱內。 【選項解析】(A) documents 證件 (B) symbols 象徵 (C) titles 標題 (D) charts 圖表。旅行證件為 travel documents。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "volume": {
    "pos": "n.",
    "en_def": "amount of sound; a single book in a set; quantity of space",
    "cn_def": "音量；卷；冊；容量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "amount of sound; a single book in a set; quantity of space",
        "cn_def": "音量；卷；冊；容量"
      }
    ]
  },
  "chart": {
    "pos": "n. / v.",
    "en_def": "a sheet of information in the form of a table, graph, or diagram",
    "cn_def": "圖表；排行榜",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a sheet of information in the form of a table, graph, or diagram",
        "cn_def": "圖表；排行榜"
      }
    ]
  },
  "title": {
    "pos": "n.",
    "en_def": "the name of a book, composition, or other artistic work; formal rank",
    "cn_def": "標題；書名；頭銜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the name of a book, composition, or other artistic work; formal rank",
        "cn_def": "標題；書名；頭銜"
      }
    ]
  },
  "topic": {
    "pos": "n.",
    "en_def": "a matter dealt with in a text, discourse, or conversation; subject",
    "cn_def": "主題；話題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a matter dealt with in a text, discourse, or conversation; subject",
        "cn_def": "主題；話題"
      }
    ]
  },
  "note": {
    "pos": "n. / v.",
    "en_def": "a brief record of points written down; a short informal letter",
    "cn_def": "筆記；便條；注意",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a brief record of points written down; a short informal letter",
        "cn_def": "筆記；便條；注意"
      }
    ]
  },
  "document": {
    "pos": "n. / v.",
    "en_def": "a piece of written, printed, or electronic matter providing information",
    "cn_def": "文件；公文；證件",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a piece of written, printed, or electronic matter providing information",
        "cn_def": "文件；公文；證件"
      }
    ]
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a mark or character used as a conventional representation of an object",
    "cn_def": "象徵；符號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mark or character used as a conventional representation of an object",
        "cn_def": "象徵；符號"
      }
    ]
  },
  "meaning": {
    "pos": "n.",
    "en_def": "what is meant by a word, text, concept, or action; significance",
    "cn_def": "意思；含義；意義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "what is meant by a word, text, concept, or action; significance",
        "cn_def": "意思；含義；意義"
      }
    ]
  },
  "opinion": {
    "pos": "n.",
    "en_def": "a view or judgment formed about something, not necessarily based on fact",
    "cn_def": "意見；看法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a view or judgment formed about something, not necessarily based on fact",
        "cn_def": "意見；看法"
      }
    ]
  },
  "information": {
    "pos": "n.",
    "en_def": "facts provided or learned about something or someone; data",
    "cn_def": "資訊；消息；資料",
    "combined": [
      {
        "pos": "n.",
        "en_def": "facts provided or learned about something or someone; data",
        "cn_def": "資訊；消息；資料"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
