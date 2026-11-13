// Lesson 59 Quiz Data: Higher Education, University Facilities & Academic Terms
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 59 - Higher Education, University Facilities & Academic Terms",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加；就讀",
    "en_def": "to be present at an event, meeting, or function; to go regularly",
    "sentence": "All international students must {{BLANK}} the orientation seminar on Monday morning to learn about campus safety rules.",
    "cn": "所有國際學生必須______星期一早上的新生說明會，以了解校園安全規定。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意；專注力；注意力",
    "en_def": "notice taken of someone or something; mental focus or awareness",
    "sentence": "The chemistry professor raised her voice to capture the {{BLANK}} of the noisy students sitting in the back row.",
    "cn": "化學教授提高了說話的音量，以吸引坐在後排吵鬧學生的______。"
  },
  {
    "word": "college",
    "pos": "n.",
    "cn_def": "學院；大學",
    "en_def": "an educational institution offering higher education or professional training",
    "sentence": "After graduating from high school, my older sister decided to attend a prestigious medical {{BLANK}} in Taipei.",
    "cn": "高中畢業之後，我的姊姊決定前往台北一所著名的醫科______就讀。"
  },
  {
    "word": "university",
    "pos": "n.",
    "cn_def": "大學；綜合大學",
    "en_def": "a high-level educational institution where students study for degrees",
    "sentence": "National Taiwan {{BLANK}} is renowned worldwide for its distinguished professors, advanced research, and historic library.",
    "cn": "國立台灣______以其傑出的教授、尖端的研究和歷史悠久的圖書館而聞名全球。"
  },
  {
    "word": "department",
    "pos": "n.",
    "cn_def": "學系；部門；科系",
    "en_def": "a specialized division of a large organization, university, or store",
    "sentence": "Professor Lin has served as the chairperson of the English {{BLANK}} for five years, designing creative literature courses.",
    "cn": "林教授擔任英國語文______主任已有五年之久，期間設計了許多富創意的文學課程。"
  },
  {
    "word": "semester",
    "pos": "n.",
    "cn_def": "學期",
    "en_def": "a half-year term in a school or college, typically lasting 15 to 18 weeks",
    "sentence": "During the spring {{BLANK}}, students take five academic courses and participate in several extracurricular clubs.",
    "cn": "在春季______期間，學生修讀五門學術課程，並參與數個課外社團。"
  },
  {
    "word": "term",
    "pos": "n.",
    "cn_def": "學期；任期；專門術語",
    "en_def": "a fixed or limited period for which something lasts; word or phrase",
    "sentence": "The mayor's four-year official {{BLANK}} will conclude next December, and citizens will elect a new city leader.",
    "cn": "市長為期四年的法定公職______將於明年十二月結束，市民屆時將選出新的城市領導人。"
  },
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園；校區",
    "en_def": "the grounds and buildings of a university, college, or school",
    "sentence": "Students love relaxing on the grassy lawns of the university {{BLANK}} between afternoon classes when the weather is sunny.",
    "cn": "天氣晴朗時，學生們喜歡在下午課堂空檔於大學______青翠的草坪上放鬆休息。"
  },
  {
    "word": "gym",
    "pos": "n.",
    "cn_def": "體育館；健身房",
    "en_def": "a gymnasium; a hall or building equipped for physical exercise and sports",
    "sentence": "Jason works out at the neighborhood fitness {{BLANK}} three times a week, lifting weights and running on the treadmill.",
    "cn": "傑森每週前往社區健身______運動三次，進行重量訓練並在跑步機上跑步。"
  },
  {
    "word": "hall",
    "pos": "n.",
    "cn_def": "大廳；禮堂；走廊",
    "en_def": "a large room used for public gatherings, lectures, or concerts; corridor",
    "sentence": "Hundreds of eager concertgoers filled the grand performance {{BLANK}} to enjoy the philharmonic orchestra's symphony.",
    "cn": "數百名熱切的音樂會觀眾擠滿了宏偉的演出______，欣賞愛樂樂團的交響樂。"
  }
];

const MCQS = [
  {
    "q": "All team members are required to ______ the weekly progress meeting every Tuesday afternoon.",
    "options": [
      "attend",
      "repair",
      "maintain",
      "produce"
    ],
    "answer": 0,
    "cn": "所有團隊成員都被要求在每週二下午出席每週的進度會議。 【選項解析】(A) attend 出席 (B) repair 修理 (C) maintain 維持 (D) produce 生產。參加會議為 attend the meeting。",
    "vocabIndex": 0
  },
  {
    "q": "Please pay close ______ to the flight attendant while she demonstrates the emergency oxygen mask procedures.",
    "options": [
      "semester",
      "attention",
      "college",
      "gym"
    ],
    "answer": 1,
    "cn": "當空服員示範緊急氧氣面罩操作步驟時，請密切注意其解說。 【選項解析】(A) semester 學期 (B) attention 注意 (C) college 學院 (D) gym 健身房。密切注意為 pay close attention。",
    "vocabIndex": 1
  },
  {
    "q": "After finishing secondary school, Mark enrolled in an engineering ______ to specialize in software programming.",
    "options": [
      "gym",
      "hall",
      "college",
      "term"
    ],
    "answer": 2,
    "cn": "中學畢業後，馬克報考了一所工程學院，專攻軟體程式設計領域。 【選項解析】(A) gym 體育館 (B) hall 大廳 (C) college 學院 (D) term 任期。工程學院為 engineering college。",
    "vocabIndex": 2
  },
  {
    "q": "Oxford is one of the oldest and most prestigious ______s in the world, with centuries of academic excellence.",
    "options": [
      "attention",
      "campus",
      "semester",
      "university"
    ],
    "answer": 3,
    "cn": "牛津大學是世界上最古老且最負盛名的大學之一，享有數百年的學術卓越聲譽。 【選項解析】(A) university 大學 (B) campus 校園 (C) semester 學期 (D) attention 注意。國際名牌綜合大學為 university。",
    "vocabIndex": 3
  },
  {
    "q": "The human resources ______ conducted interviews throughout the morning to hire three qualified accountants.",
    "options": [
      "gym",
      "department",
      "term",
      "hall"
    ],
    "answer": 1,
    "cn": "人力資源部門在整個上午進行了面試，以便聘請三位具備合格資歷的會計師。 【選項解析】(A) gym 健身房 (B) term 學期 (C) department 部門 (D) hall 走廊。人力資源部為 human resources department。",
    "vocabIndex": 4
  },
  {
    "q": "Final examination grades will be posted on the school website at the conclusion of the autumn ______.",
    "options": [
      "attention",
      "gym",
      "hall",
      "semester"
    ],
    "answer": 3,
    "cn": "期末考試成績將在秋季學期結束時公布在學校官方網站上。 【選項解析】(A) semester 學期 (B) gym 體育館 (C) hall 大廳 (D) attention 注意。秋季學期為 autumn semester。",
    "vocabIndex": 5
  },
  {
    "q": "The president of the republic is legally limited to serving a maximum of two four-year ______s in office.",
    "options": [
      "terms",
      "gyms",
      "campuses",
      "halls"
    ],
    "answer": 0,
    "cn": "共和國總統在法律上受到嚴格限制，公職任期最多只能連任兩屆四年。 【選項解析】(A) gyms 體育館 (B) terms 任期 (C) campuses 校區 (D) halls 大廳。法定任期為 four-year terms in office。",
    "vocabIndex": 6
  },
  {
    "q": "Bicycles are the most popular mode of student transportation across the sprawling suburban university ______.",
    "options": [
      "attention",
      "term",
      "campus",
      "semester"
    ],
    "answer": 2,
    "cn": "在腹地廣大的郊區大學校園裡，自行車是學生最受歡迎的交通工具。 【選項解析】(A) attention 注意 (B) term 任期 (C) campus 校園 (D) semester 學期。大學校園為 university campus。",
    "vocabIndex": 7
  },
  {
    "q": "Our high school basketball team practices shooting free throws inside the indoor ______ every afternoon.",
    "options": [
      "semester",
      "term",
      "attention",
      "gym"
    ],
    "answer": 3,
    "cn": "我們的高中籃球隊每天下午都在室內體育館內練習罰球投籃。 【選項解析】(A) semester 學期 (B) term 術語 (C) attention 注意 (D) gym 體育館。室內體育館為 indoor gym。",
    "vocabIndex": 8
  },
  {
    "q": "The awards banquet was held in the university's main dining ______, where students received their honors.",
    "options": [
      "hall",
      "semester",
      "term",
      "attention"
    ],
    "answer": 0,
    "cn": "頒獎晚宴在大學的大宴會廳舉行，學生們在那裡接受表揚榮譽。 【選項解析】(A) hall 禮堂大廳 (B) semester 學期 (C) term 任期 (D) attention 注意。大型宴會廳為 dining hall。",
    "vocabIndex": 9
  },
  {
    "q": "Will you ______ the charity fundraising dinner tonight, or do you have prior business engagements in Kaohsiung?",
    "options": [
      "produce",
      "attend",
      "maintain",
      "repair"
    ],
    "answer": 1,
    "cn": "你今晚會出席慈善募款晚宴嗎？還是你在高雄已有事先排定的商務行程？ 【選項解析】(A) produce 製造 (B) attend 出席 (C) maintain 保養 (D) repair 修理。出席晚宴為 attend the dinner。",
    "vocabIndex": 0
  },
  {
    "q": "The young boy had trouble focusing his mental ______ on long reading passages during the standardized exam.",
    "options": [
      "campus",
      "department",
      "attention",
      "gym"
    ],
    "answer": 2,
    "cn": "小男孩在標準化測驗中很難將心思專注力長時間集中在冗長閱讀篇章上。 【選項解析】(A) campus 校園 (B) attention 專注力 (C) department 部門 (D) gym 健身房。精神集中為 mental attention。",
    "vocabIndex": 1
  },
  {
    "q": "Community ______s offer practical vocational certificates and two-year associate degrees for working adults.",
    "options": [
      "college",
      "gym",
      "hall",
      "term"
    ],
    "answer": 0,
    "cn": "社區學院為在職成人提供實用的職業證照課程與兩年制副學士學位。 【選項解析】(A) college 學院 (B) gym 體育館 (C) hall 大廳 (D) term 術語。社區專科大學為 community colleges。",
    "vocabIndex": 2
  },
  {
    "q": "Several Nobel laureates conduct cutting-edge biomedical research at the state ______, training postgraduates.",
    "options": [
      "attention",
      "semester",
      "term",
      "university"
    ],
    "answer": 3,
    "cn": "數位諾貝爾獎得主在這所國立大學進行尖端生醫研究，培育研究生。 【選項解析】(A) university 大學 (B) semester 學期 (C) term 任期 (D) attention 注意。州立綜合大學為 state university。",
    "vocabIndex": 3
  },
  {
    "q": "If you want to exchange that sweater for a larger size, take your receipt to the customer service ______ on the first floor.",
    "options": [
      "gym",
      "department",
      "hall",
      "campus"
    ],
    "answer": 1,
    "cn": "如果你想將那件毛衣換成較大尺碼，請拿收據到一樓的顧客服務專櫃部門處理。 【選項解析】(A) gym 體育館 (B) hall 門廳 (C) department 部門 (D) campus 校園。顧客服務部門為 customer service department。",
    "vocabIndex": 4
  },
  {
    "q": "Students who earn a high grade point average throughout the ______ are placed on the dean's honor list.",
    "options": [
      "gym",
      "hall",
      "semester",
      "attention"
    ],
    "answer": 2,
    "cn": "整個學期GPA成績優異的學生，名字將會被列入教務長榮譽榜單上。 【選項解析】(A) semester 學期 (B) hall 大廳 (C) gym 體育館 (D) attention 注意。一學期期間為 throughout the semester。",
    "vocabIndex": 5
  },
  {
    "q": "In medical terminology, the ______ 'hypertension' simply refers to abnormally high arterial blood pressure.",
    "options": [
      "campus",
      "term",
      "gym",
      "hall"
    ],
    "answer": 1,
    "cn": "在醫學術語中，專有名詞「高血壓」僅是指動脈血壓異常偏高的生理狀態。 【選項解析】(A) campus 校園 (B) term 術語 (C) gym 體育館 (D) hall 走廊。專業名詞術語為 the term。",
    "vocabIndex": 6
  },
  {
    "q": "Security guards patrol the college ______ late at night to ensure the personal safety of all dormitory students.",
    "options": [
      "semester",
      "term",
      "attention",
      "campus"
    ],
    "answer": 3,
    "cn": "警衛在深夜於大學校園內巡邏，以確保所有住宿學生的人身安全。 【選項解析】(A) semester 學期 (B) term 詞彙 (C) campus 校園 (D) attention 注意。巡邏大學校區為 patrol the college campus。",
    "vocabIndex": 7
  },
  {
    "q": "Membership at the commercial ______ includes full access to free weights, rowing machines, and an indoor heated pool.",
    "options": [
      "attention",
      "term",
      "gym",
      "semester"
    ],
    "answer": 2,
    "cn": "商業健身房的會員資格享有自由重量器材、划船機及室內溫水泳池的完整使用權。 【選項解析】(A) attention 注意 (B) term 術語 (C) semester 學期 (D) gym 健身房。運動健身會籍為 commercial gym。",
    "vocabIndex": 8
  },
  {
    "q": "The grand lecture ______ in the humanities building can accommodate up to five hundred students simultaneously.",
    "options": [
      "hall",
      "semester",
      "term",
      "attention"
    ],
    "answer": 0,
    "cn": "人文大樓的宏偉大階梯講堂可同時容納多達五百名學生聽課。 【選項解析】(A) hall 講堂 (B) semester 學期 (C) term 任期 (D) attention 專注。大階梯教室演講廳為 grand lecture hall。",
    "vocabIndex": 9
  },
  {
    "q": "Over three hundred delegates traveled to Geneva to ______ the global peace and nuclear disarmament convention.",
    "options": [
      "produce",
      "repair",
      "attend",
      "maintain"
    ],
    "answer": 2,
    "cn": "三百多名代表前往日內瓦出席全球和平與核裁軍國際公約大會。 【選項解析】(A) attend 出席 (B) repair 修理 (C) produce 製造 (D) maintain 維護。出席公約大會為 attend convention。",
    "vocabIndex": 0
  },
  {
    "q": "The teacher clapped his hands loudly to regain the ______ of the distracted pupils playing near the window.",
    "options": [
      "campus",
      "gym",
      "department",
      "attention"
    ],
    "answer": 3,
    "cn": "老師大聲拍手，以重新吸引在窗戶旁分心玩耍的小學生的注意力。 【選項解析】(A) campus 校區 (B) attention 注意力 (C) department 科系 (D) gym 健身房。重新吸引注意為 regain attention。",
    "vocabIndex": 1
  },
  {
    "q": "Applying to an Ivy League ______ requires stellar high school grades, excellent recommendations, and leadership skills.",
    "options": [
      "gym",
      "college",
      "hall",
      "term"
    ],
    "answer": 1,
    "cn": "申請常春藤盟校大學需要亮眼的高中成績單、卓越的推薦信與領導能力。 【選項解析】(A) college 大學 (B) gym 體育館 (C) hall 大堂 (D) term 任期。常春藤盟校為 Ivy League college。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ hospital is famous for its advanced pediatric surgery department and compassionate nursing staff.",
    "options": [
      "university",
      "semester",
      "term",
      "attention"
    ],
    "answer": 0,
    "cn": "這家大學附設醫院以其先進的小兒外科與充滿愛心的護理團隊聞名遐邇。 【選項解析】(A) university 大學 (B) semester 學期 (C) term 術語 (D) attention 注意。大學附設醫院為 university hospital。",
    "vocabIndex": 3
  },
  {
    "q": "Please leave your wet umbrellas in the ceramic stand located in the entrance ______ before entering the art gallery.",
    "options": [
      "semester",
      "hall",
      "term",
      "attention"
    ],
    "answer": 1,
    "cn": "在進入美術館欣賞畫作前，請將濕雨傘放置在入口玄關大廳的陶瓷傘架內。 【選項解析】(A) hall 玄關大廳 (B) semester 學期 (C) term 術語 (D) attention 注意。入口大廳門廳為 entrance hall。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "attend": {
    "pos": "v.",
    "en_def": "to be present at an event, meeting, or function; to go regularly",
    "cn_def": "出席；參加；就讀",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be present at an event, meeting, or function; to go regularly",
        "cn_def": "出席；參加；就讀"
      }
    ]
  },
  "attention": {
    "pos": "n.",
    "en_def": "notice taken of someone or something; mental focus or awareness",
    "cn_def": "注意；專注力；注意力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "notice taken of someone or something; mental focus or awareness",
        "cn_def": "注意；專注力；注意力"
      }
    ]
  },
  "college": {
    "pos": "n.",
    "en_def": "an educational institution offering higher education or professional training",
    "cn_def": "學院；大學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an educational institution offering higher education or professional training",
        "cn_def": "學院；大學"
      }
    ]
  },
  "university": {
    "pos": "n.",
    "en_def": "a high-level educational institution where students study for degrees",
    "cn_def": "大學；綜合大學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a high-level educational institution where students study for degrees",
        "cn_def": "大學；綜合大學"
      }
    ]
  },
  "department": {
    "pos": "n.",
    "en_def": "a specialized division of a large organization, university, or store",
    "cn_def": "學系；部門；科系",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specialized division of a large organization, university, or store",
        "cn_def": "學系；部門；科系"
      }
    ]
  },
  "semester": {
    "pos": "n.",
    "en_def": "a half-year term in a school or college, typically lasting 15 to 18 weeks",
    "cn_def": "學期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a half-year term in a school or college, typically lasting 15 to 18 weeks",
        "cn_def": "學期"
      }
    ]
  },
  "term": {
    "pos": "n.",
    "en_def": "a fixed or limited period for which something lasts; word or phrase",
    "cn_def": "學期；任期；專門術語",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed or limited period for which something lasts; word or phrase",
        "cn_def": "學期；任期；專門術語"
      }
    ]
  },
  "campus": {
    "pos": "n.",
    "en_def": "the grounds and buildings of a university, college, or school",
    "cn_def": "校園；校區",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the grounds and buildings of a university, college, or school",
        "cn_def": "校園；校區"
      }
    ]
  },
  "gym": {
    "pos": "n.",
    "en_def": "a gymnasium; a hall or building equipped for physical exercise and sports",
    "cn_def": "體育館；健身房",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a gymnasium; a hall or building equipped for physical exercise and sports",
        "cn_def": "體育館；健身房"
      }
    ]
  },
  "hall": {
    "pos": "n.",
    "en_def": "a large room used for public gatherings, lectures, or concerts; corridor",
    "cn_def": "大廳；禮堂；走廊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large room used for public gatherings, lectures, or concerts; corridor",
        "cn_def": "大廳；禮堂；走廊"
      }
    ]
  },
  "repair": {
    "pos": "",
    "en_def": "",
    "cn_def": "修理",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "修理"
      }
    ]
  },
  "maintain": {
    "pos": "",
    "en_def": "",
    "cn_def": "維持",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "維持"
      }
    ]
  },
  "produce": {
    "pos": "",
    "en_def": "",
    "cn_def": "生產",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "生產"
      }
    ]
  },
  "terms": {
    "pos": "",
    "en_def": "",
    "cn_def": "任期",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "任期"
      }
    ]
  },
  "gyms": {
    "pos": "",
    "en_def": "",
    "cn_def": "體育館",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "體育館"
      }
    ]
  },
  "campuses": {
    "pos": "",
    "en_def": "",
    "cn_def": "校區",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "校區"
      }
    ]
  },
  "halls": {
    "pos": "",
    "en_def": "",
    "cn_def": "大廳",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "大廳"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
