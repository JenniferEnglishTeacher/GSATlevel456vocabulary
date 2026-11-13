// Lesson 77 Quiz Data: Goals, Focus, Categories, Investigation & Realization
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 77 - Goals, Focus, Categories, Investigation & Realization",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "focus",
    "pos": "v. / n.",
    "cn_def": "集中；聚焦；焦點",
    "en_def": "to adapt to see clearly; the center of interest or activity",
    "sentence": "During final exam week, diligent students must {{BLANK}} their attention entirely on their textbooks and avoid social media distractions.",
    "cn": "在期末考週期間，勤奮的學生必須將注意力完全【集中】在課本上，並避開社交媒體的干擾。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標；球門；得分",
    "en_def": "the object of a person's ambition or effort; an aim or desired result",
    "sentence": "Setting a clear long-term {{BLANK}} at the beginning of the semester helps learners organize their daily study schedules effectively.",
    "cn": "在學期初設定明確的長期【目標】，有助於學習者有效地安排他們的日常讀書計畫。"
  },
  {
    "word": "aim",
    "pos": "v. / n.",
    "cn_def": "瞄準；旨在；目標；目的",
    "en_def": "to point or direct a weapon or effort; a purpose or intention",
    "sentence": "This community health program is designed to {{BLANK}} at improving physical fitness and dietary nutrition among local senior citizens.",
    "cn": "這項社區健康計畫旨在【致力於】提升當地年長者的身體體能與飲食營養。"
  },
  {
    "word": "target",
    "pos": "n. / v.",
    "cn_def": "靶子；目標；針對",
    "en_def": "a person or thing aimed at; an objective or result towards which efforts are directed",
    "sentence": "The experienced archer drew his wooden bow smoothly and released the arrow directly toward the center of the paper {{BLANK}}.",
    "cn": "經驗豐富的射手流暢地拉開木弓，將箭矢直接射向紙製【靶子】的中心。"
  },
  {
    "word": "type",
    "pos": "n. / v.",
    "cn_def": "類型；種類；打字",
    "en_def": "a category of people or things having common characteristics; to write with a keyboard",
    "sentence": "Our school library categorizes books according to their specific literary {{BLANK}}, making it easier for students to find research materials.",
    "cn": "我們學校的圖書館根據書籍特定的文學【類型】進行分類，使學生更容易找到研究資料。"
  },
  {
    "word": "case",
    "pos": "n.",
    "cn_def": "實例；案件；情況；箱子",
    "en_def": "an instance of a particular situation; a legal lawsuit; a container",
    "sentence": "The police detective reviewed every detail of the mysterious theft {{BLANK}}, searching for clues that previous officers had missed.",
    "cn": "刑警仔細審查了這起神秘竊盜【案件】的每個細節，尋找先前警官遺漏的線索。"
  },
  {
    "word": "dot",
    "pos": "n. / v.",
    "cn_def": "小圓點；點綴",
    "en_def": "a small round mark or spot; to mark with a small spot",
    "sentence": "Linda wore a fashionable vintage blue dress covered with tiny white {{BLANK}} patterns to her best friend's birthday party.",
    "cn": "琳達穿著一件點綴著微小白【點】圖案的時尚復古藍色連身裙，去參加她最好朋友的生日派對。"
  },
  {
    "word": "row",
    "pos": "n. / v.",
    "cn_def": "一排；一行；划船",
    "en_def": "a number of people or things in a straight line; to propel a boat with oars",
    "sentence": "The excited students stood quietly in a neat {{BLANK}} outside the museum entrance, waiting patiently for the doors to open.",
    "cn": "興奮的學生們在博物館門口安靜地排成整齊的【一排】，耐心等候大門開啟。"
  },
  {
    "word": "trace",
    "pos": "v. / n.",
    "cn_def": "追蹤；查出；微量；痕跡",
    "en_def": "to find or discover by investigation; a mark or sign left by something",
    "sentence": "Rescue officers used tracking dogs to {{BLANK}} the missing hikers through the snowy canyon, following footprints along the riverbank.",
    "cn": "搜救人員使用搜救犬沿著河岸的腳印，在白雪覆蓋的峽谷中【追蹤】失蹤登山客的行蹤。"
  },
  {
    "word": "realize",
    "pos": "v.",
    "cn_def": "意識到；發覺；實現（夢想）",
    "en_def": "to become fully aware of something as a fact; to fulfill a dream",
    "sentence": "After reviewing his monthly budget statement, Kevin began to {{BLANK}} how much unnecessary money he had spent on restaurant takeout.",
    "cn": "在審查了每月預算報表後，凱文開始【意識到】自己在餐廳外賣上花費了多少不必要的金錢。"
  }
];

const MCQS = [
  {
    "q": "During exam week, diligent students must ______ their attention entirely on study materials rather than smartphones.",
    "options": [
      "aim",
      "focus",
      "trace",
      "realize"
    ],
    "answer": 1,
    "cn": "在考試週期間，勤奮的學生必須將注意力完全集中在學習資料上，而非智慧型手機。 【選項解析】(A) aim 瞄準  (B) focus 集中  (C) trace 追蹤  (D) realize 意識到。focus attention on 為固定搭配「集中注意力於…」。",
    "vocabIndex": 0
  },
  {
    "q": "Setting a measurable academic ______ at the start of the year helps high school students track their progress.",
    "options": [
      "goal",
      "dot",
      "row",
      "case"
    ],
    "answer": 0,
    "cn": "在年初設定一個可衡量的學業目標，有助於高中生追蹤他們的進步情況。 【選項解析】(A) goal 目標  (B) dot 小圓點  (C) row 一排  (D) case 案件。academic goal 表學業目標。",
    "vocabIndex": 1
  },
  {
    "q": "The environmental campaign will ______ at reducing single-use plastic waste across all metropolitan subway stations.",
    "options": [
      "focus",
      "trace",
      "realize",
      "aim"
    ],
    "answer": 3,
    "cn": "這項環保活動旨在減少各大都會捷運站內一次性塑膠廢棄物的產生。 【選項解析】(A) focus 聚焦  (B) aim 旨在  (C) realize 實現  (D) trace 追蹤。aim at doing something 表「旨在做某事」。",
    "vocabIndex": 2
  },
  {
    "q": "The talented hunter fired his rifle with great precision and hit the bullseye of the distant wooden ______.",
    "options": [
      "dot",
      "case",
      "target",
      "row"
    ],
    "answer": 2,
    "cn": "才華洋溢的獵人精準開槍，擊中了遠處木靶的靶心中心。 【選項解析】(A) target 靶子  (B) case 箱子  (C) dot 圓點  (D) row 一排。hit the target 表擊中靶子。",
    "vocabIndex": 3
  },
  {
    "q": "What specific ______ of computer software does your design firm use to create three-dimensional architectural models?",
    "options": [
      "type",
      "row",
      "dot",
      "goal"
    ],
    "answer": 0,
    "cn": "你們的設計事務所使用哪種特定類型的電腦軟體來建立三維建築模型？ 【選項解析】(A) row 一行  (B) type 類型  (C) dot 點  (D) goal 目標。type of software 表軟體類型。",
    "vocabIndex": 4
  },
  {
    "q": "The experienced lawyer spent the entire weekend examining the criminal defense ______ before presenting it in court.",
    "options": [
      "dot",
      "goal",
      "row",
      "case"
    ],
    "answer": 3,
    "cn": "經驗豐富的律師在出庭陳述之前，花費了整個週末審閱這起刑事辯護案件。 【選項解析】(A) dot 圓點  (B) case 案件  (C) row 一排  (D) goal 目標。defense case 指辯護案件。",
    "vocabIndex": 5
  },
  {
    "q": "The map showed capital cities marked with a large red ______ surrounded by a thin circular border.",
    "options": [
      "case",
      "dot",
      "row",
      "goal"
    ],
    "answer": 1,
    "cn": "地圖上顯示首都城市均標記著一個被細圓圈包圍的大紅點。 【選項解析】(A) case 盒子  (B) row 一列  (C) dot 小圓點  (D) goal 目標。red dot 表紅色圓點。",
    "vocabIndex": 6
  },
  {
    "q": "The theater audience sat politely in the third ______ from the front stage to enjoy the opera performance.",
    "options": [
      "dot",
      "case",
      "row",
      "target"
    ],
    "answer": 2,
    "cn": "劇院觀眾有禮貌地坐在離前舞台第三排的座位上欣賞歌劇演出。 【選項解析】(A) dot 圓點  (B) row 一排  (C) case 案件  (D) target 目標。third row 表第三排。",
    "vocabIndex": 7
  },
  {
    "q": "Detectives worked with computer engineers to ______ the illegal email messages back to their foreign origin.",
    "options": [
      "realize",
      "focus",
      "aim",
      "trace"
    ],
    "answer": 3,
    "cn": "刑警與電腦工程師聯手合作，追查非法電子郵件的源頭回到其外國發源地。 【選項解析】(A) trace 追蹤  (B) focus 集中  (C) aim 瞄準  (D) realize 實現。trace emails back to 表追查郵件來源。",
    "vocabIndex": 8
  },
  {
    "q": "It took several painful months for the injured athlete to ______ that his professional playing career was over.",
    "options": [
      "realize",
      "aim",
      "focus",
      "trace"
    ],
    "answer": 0,
    "cn": "受傷的運動員經歷了幾個月痛苦的心理調適，才認清自己的職業選手生涯已經結束的事實。 【選項解析】(A) trace 追溯  (B) aim 瞄準  (C) focus 集中  (D) realize 意識到。realize the fact 表認清事實。",
    "vocabIndex": 9
  },
  {
    "q": "If you wish to take crisp photographs of flying birds, you must adjust the camera lens to ______ properly.",
    "options": [
      "realize",
      "trace",
      "focus",
      "aim"
    ],
    "answer": 2,
    "cn": "如果你想拍攝清晰的飛鳥照片，必須正確調節相機鏡頭以進行對焦。 【選項解析】(A) focus 對焦  (B) trace 追蹤  (C) realize 實現  (D) aim 瞄準。adjust lens to focus 表鏡頭對焦。",
    "vocabIndex": 0
  },
  {
    "q": "Scoring the winning ______ in the last thirty seconds of the soccer championship brought tears of joy to the coach.",
    "options": [
      "dot",
      "goal",
      "case",
      "row"
    ],
    "answer": 1,
    "cn": "在足球冠軍錦標賽最後三十秒攻入致勝一球，讓教練流下了喜悅的眼淚。 【選項解析】(A) goal 進球得分  (B) dot 圓點  (C) case 案件  (D) row 一排。winning goal 表致勝球。",
    "vocabIndex": 1
  },
  {
    "q": "The new government tax policy will directly ______ luxury goods imported from international fashion houses.",
    "options": [
      "case",
      "dot",
      "row",
      "target"
    ],
    "answer": 3,
    "cn": "政府的新稅收政策將直接鎖定針對從國際時尚精品店進口的奢華商品。 【選項解析】(A) target 鎖定/針對  (B) dot 點綴  (C) row 划船  (D) case 裝箱。target luxury goods 表鎖定奢華品徵稅。",
    "vocabIndex": 3
  },
  {
    "q": "Many elderly people prefer a traditional mechanical ______ of wristwatch over modern digital touchscreens.",
    "options": [
      "dot",
      "row",
      "type",
      "case"
    ],
    "answer": 2,
    "cn": "許多長者相較於現代數位觸控螢幕，更偏愛傳統機械款式的腕錶。 【選項解析】(A) type 類型/款式  (B) row 一排  (C) dot 小點  (D) case 外殼。type of wristwatch 表腕錶款式。",
    "vocabIndex": 4
  },
  {
    "q": "The medical doctor reported an unusual ______ of tropical fever that had never been documented in this country.",
    "options": [
      "dot",
      "case",
      "row",
      "goal"
    ],
    "answer": 1,
    "cn": "醫師報告了一起該國從未記載過的熱帶熱病罕見病例。 【選項解析】(A) case 病例  (B) dot 圓點  (C) row 一行  (D) goal 目標。unusual case of fever 表罕見發燒病例。",
    "vocabIndex": 5
  },
  {
    "q": "The ladybug displayed bright red wings adorned with several distinctive black ______ markings on its back.",
    "options": [
      "dots",
      "cases",
      "rows",
      "goals"
    ],
    "answer": 0,
    "cn": "瓢蟲展現出鮮紅色的翅膀，其背部點綴著幾顆醒目的黑色斑點斑紋。 【選項解析】(A) cases 箱子  (B) dots 斑點  (C) rows 排列  (D) goals 目標。black dot markings 表黑點斑紋。",
    "vocabIndex": 6
  },
  {
    "q": "Farmers planted corn in an orderly long ______ to allow modern harvesting tractors to navigate easily.",
    "options": [
      "case",
      "dot",
      "row",
      "target"
    ],
    "answer": 2,
    "cn": "農夫將玉米種植成整齊的長排，以便現代收割拖拉機輕鬆穿行。 【選項解析】(A) case 盒子  (B) row 一排/一壟  (C) dot 點  (D) target 靶子。orderly long row 表整齊長排。",
    "vocabIndex": 7
  },
  {
    "q": "Forensics experts were able to ______ tiny microscopic fibers on the broken window back to the thief's jacket.",
    "options": [
      "trace",
      "focus",
      "aim",
      "realize"
    ],
    "answer": 0,
    "cn": "鑑識專家能夠追溯破窗上的微量纖維，比對查出其來自於竊賊的夾克。 【選項解析】(A) trace 追溯/查出  (B) focus 集中  (C) aim 瞄準  (D) realize 領會。trace fibers back to 表追查纖維源頭。",
    "vocabIndex": 8
  },
  {
    "q": "Working tirelessly for a decade allowed the young entrepreneur to ______ her dream of building an animal shelter.",
    "options": [
      "aim",
      "trace",
      "focus",
      "realize"
    ],
    "answer": 3,
    "cn": "十年不懈的奮鬥，使這位年輕創業家得以實現建造動物庇護所的夢想。 【選項解析】(A) realize 實現  (B) trace 追蹤  (C) focus 聚焦  (D) aim 旨在。realize one's dream 表實現某人夢想。",
    "vocabIndex": 9
  },
  {
    "q": "The charity organization will ______ its fundraising efforts towards building clean water wells in remote villages.",
    "options": [
      "trace",
      "focus",
      "realize",
      "aim"
    ],
    "answer": 1,
    "cn": "該慈善組織將把募款工作聚焦於為偏遠村莊建造乾淨的水井。 【選項解析】(A) focus 聚焦  (B) trace 追蹤  (C) realize 實現  (D) aim 瞄準。focus efforts towards 表將努力聚焦於。",
    "vocabIndex": 0
  },
  {
    "q": "Having a clear personal ______ in life provides motivation during difficult moments and gives direction to our choices.",
    "options": [
      "goal",
      "dot",
      "row",
      "case"
    ],
    "answer": 0,
    "cn": "在人生中擁有明確的個人目標，能在艱難時刻給予我們前進的動力與抉擇的方向。 【選項解析】(A) dot 圓點  (B) goal 目標  (C) row 行列  (D) case 案件。personal goal 表個人目標。",
    "vocabIndex": 1
  },
  {
    "q": "Marketing surveys help companies identify which demographic ______ of consumers is most likely to buy their products.",
    "options": [
      "row",
      "type",
      "case",
      "dot"
    ],
    "answer": 1,
    "cn": "市場行銷調查協助企業找出哪種類型的消費者最有購買其產品的可能性。 【選項解析】(A) type 類型  (B) row 排列  (C) case 案例  (D) dot 點。demographic type of consumers 表消費者人口類型。",
    "vocabIndex": 4
  },
  {
    "q": "The judge ruled that the prosecutor had not presented enough evidence to prove the criminal ______ beyond reasonable doubt.",
    "options": [
      "dot",
      "row",
      "case",
      "target"
    ],
    "answer": 2,
    "cn": "法官裁定檢察官未能提出充分證據以排除合理懷疑來證明這起刑事案件。 【選項解析】(A) case 案件  (B) row 一列  (C) dot 圓點  (D) target 靶標。criminal case 表刑事案件。",
    "vocabIndex": 5
  },
  {
    "q": "On the printed music sheet, each musical note is represented by a small black ______ placed upon horizontal lines.",
    "options": [
      "goal",
      "row",
      "case",
      "dot"
    ],
    "answer": 3,
    "cn": "在印刷五線譜上，每個音符均以放置在水平線上的小黑點來表示。 【選項解析】(A) dot 圓點  (B) row 一排  (C) case 盒子  (D) goal 得分。small black dot 表小黑點。",
    "vocabIndex": 6
  },
  {
    "q": "On weekends, tourists love to rent wooden boats and ______ lazily across the scenic surface of Sun Moon Lake.",
    "options": [
      "trace",
      "row",
      "focus",
      "realize"
    ],
    "answer": 1,
    "cn": "週末時，遊客喜歡租借木舟，在風景優美的日月潭湖面上悠閒划船。 【選項解析】(A) row 划船  (B) trace 追蹤  (C) focus 集中  (D) realize 意識到。row across the lake 表在湖面上划船。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "focus": {
    "pos": "v. / n.",
    "en_def": "to adapt to see clearly; the center of interest or activity",
    "cn_def": "集中；聚焦；焦點",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to adapt to see clearly; the center of interest or activity",
        "cn_def": "集中；聚焦；焦點"
      }
    ]
  },
  "goal": {
    "pos": "n.",
    "en_def": "the object of a person's ambition or effort; an aim or desired result",
    "cn_def": "目標；球門；得分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the object of a person's ambition or effort; an aim or desired result",
        "cn_def": "目標；球門；得分"
      }
    ]
  },
  "aim": {
    "pos": "v. / n.",
    "en_def": "to point or direct a weapon or effort; a purpose or intention",
    "cn_def": "瞄準；旨在；目標；目的",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to point or direct a weapon or effort; a purpose or intention",
        "cn_def": "瞄準；旨在；目標；目的"
      }
    ]
  },
  "target": {
    "pos": "n. / v.",
    "en_def": "a person or thing aimed at; an objective or result towards which efforts are directed",
    "cn_def": "靶子；目標；針對",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a person or thing aimed at; an objective or result towards which efforts are directed",
        "cn_def": "靶子；目標；針對"
      }
    ]
  },
  "type": {
    "pos": "n. / v.",
    "en_def": "a category of people or things having common characteristics; to write with a keyboard",
    "cn_def": "類型；種類；打字",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a category of people or things having common characteristics; to write with a keyboard",
        "cn_def": "類型；種類；打字"
      }
    ]
  },
  "case": {
    "pos": "n.",
    "en_def": "an instance of a particular situation; a legal lawsuit; a container",
    "cn_def": "實例；案件；情況；箱子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an instance of a particular situation; a legal lawsuit; a container",
        "cn_def": "實例；案件；情況；箱子"
      }
    ]
  },
  "dot": {
    "pos": "n. / v.",
    "en_def": "a small round mark or spot; to mark with a small spot",
    "cn_def": "小圓點；點綴",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a small round mark or spot; to mark with a small spot",
        "cn_def": "小圓點；點綴"
      }
    ]
  },
  "row": {
    "pos": "n. / v.",
    "en_def": "a number of people or things in a straight line; to propel a boat with oars",
    "cn_def": "一排；一行；划船",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a number of people or things in a straight line; to propel a boat with oars",
        "cn_def": "一排；一行；划船"
      }
    ]
  },
  "trace": {
    "pos": "v. / n.",
    "en_def": "to find or discover by investigation; a mark or sign left by something",
    "cn_def": "追蹤；查出；微量；痕跡",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to find or discover by investigation; a mark or sign left by something",
        "cn_def": "追蹤；查出；微量；痕跡"
      }
    ]
  },
  "realize": {
    "pos": "v.",
    "en_def": "to become fully aware of something as a fact; to fulfill a dream",
    "cn_def": "意識到；發覺；實現（夢想）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become fully aware of something as a fact; to fulfill a dream",
        "cn_def": "意識到；發覺；實現（夢想）"
      }
    ]
  },
  "dots": {
    "pos": "",
    "en_def": "",
    "cn_def": "斑點",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "斑點"
      }
    ]
  },
  "cases": {
    "pos": "",
    "en_def": "",
    "cn_def": "箱子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "箱子"
      }
    ]
  },
  "rows": {
    "pos": "",
    "en_def": "",
    "cn_def": "排列",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "排列"
      }
    ]
  },
  "goals": {
    "pos": "",
    "en_def": "",
    "cn_def": "目標",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "目標"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
