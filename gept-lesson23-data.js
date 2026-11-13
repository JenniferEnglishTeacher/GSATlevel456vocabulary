// Lesson 23 Quiz Data: Specialized Occupations, Legal & Technical Experts
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 23 - Specialized Occupations, Legal & Technical Experts",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "coach",
    "pos": "n. / v.",
    "cn_def": "教練；長途巴士；指導",
    "en_def": "an athletic trainer; long-distance bus; to train someone",
    "sentence": "The high school basketball {{BLANK}} blew his whistle loudly to stop the practice and explained how to set a better defense.",
    "cn": "高中籃球教練大聲吹響哨子暫停練習，並解釋如何建立更好的防守陣型。"
  },
  {
    "word": "dentist",
    "pos": "n.",
    "cn_def": "牙醫",
    "en_def": "a doctor who specializes in treating teeth and gums",
    "sentence": "Because my younger brother ate too many candies without brushing his teeth, mother took him to the {{BLANK}} to check a cavity.",
    "cn": "因為我弟弟吃太多糖果且沒刷牙，母親帶他去看牙醫以檢查蛀牙。"
  },
  {
    "word": "engineer",
    "pos": "n.",
    "cn_def": "工程師",
    "en_def": "a person trained in designing or building machines, structures, or software",
    "sentence": "The senior mechanical {{BLANK}} inspected the blueprint carefully before the construction crew began assembling the new bridge.",
    "cn": "資深機械工程師在施工團隊開始組裝新橋樑之前，仔細檢查了設計藍圖。"
  },
  {
    "word": "expert",
    "pos": "n. / adj.",
    "cn_def": "專家；熟練的",
    "en_def": "a person with comprehensive and authoritative knowledge in a particular area",
    "sentence": "The financial news station invited a stock market {{BLANK}} to analyze global inflation trends and advise viewers on investments.",
    "cn": "財經新聞台邀請了一位股票市場專家來分析全球通貨膨脹趨勢，並為觀眾提供投資建議。"
  },
  {
    "word": "hunter",
    "pos": "n.",
    "cn_def": "獵人",
    "en_def": "a person or animal that pursues and kills wild animals for food or sport",
    "sentence": "In ancient times, the skilled forest {{BLANK}} tracked footprints in the snow for hours to find food for the hungry tribe.",
    "cn": "在古代，熟練的森林獵人在雪地中追蹤腳印數小時，為飢餓的部落尋找食物。"
  },
  {
    "word": "journalist",
    "pos": "n.",
    "cn_def": "新聞記者",
    "en_def": "a person who writes news stories for newspapers, magazines, or broadcasts",
    "sentence": "The courageous investigative {{BLANK}} traveled into remote areas to interview villagers and report on local water pollution.",
    "cn": "這位勇敢的調查新聞記者深入偏遠地區採訪村民，報導當地的水質污染問題。"
  },
  {
    "word": "judge",
    "pos": "n. / v.",
    "cn_def": "法官；裁判；評斷",
    "en_def": "a public officer appointed to decide cases in court; to form an opinion",
    "sentence": "After listening carefully to both lawyers in the courtroom, the impartial {{BLANK}} delivered a fair sentence to the defendant.",
    "cn": "在法庭上仔細聆聽兩位律師的陳述後，公正的法官對被告宣判了公平的判決。"
  },
  {
    "word": "lawyer",
    "pos": "n.",
    "cn_def": "律師",
    "en_def": "a person who practices or studies law; an attorney or legal counselor",
    "sentence": "Before signing the business partnership agreement, Mr. Lin consulted a corporate {{BLANK}} to ensure all contractual terms were legal.",
    "cn": "在簽署商業合夥協議之前，林先生諮詢了一位公司律師以確保所有合約條款皆合法。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理；主管",
    "en_def": "a person responsible for controlling or administering an organization or staff",
    "sentence": "The customer service {{BLANK}} resolved the client's complaint politely and offered a full refund for the defective product.",
    "cn": "客服部經理客氣地解決了顧客的投訴，並為該瑕疵產品提供了全額退款。"
  },
  {
    "word": "model",
    "pos": "n. / v.",
    "cn_def": "模特兒；模型；模範",
    "en_def": "a person employed to display clothes; a representation of an object",
    "sentence": "The international fashion {{BLANK}} walked gracefully down the catwalk in Paris, showcasing the designer's latest winter collection.",
    "cn": "這位國際時尚模特兒優雅地走在巴黎伸展台上，展示設計師最新的冬季時裝系列。"
  }
];

const MCQS = [
  {
    "q": "If you experience severe tooth pain when drinking cold water, you should book an appointment with a certified ______.",
    "options": [
      "engineer",
      "hunter",
      "journalist",
      "dentist"
    ],
    "answer": 3,
    "cn": "如果你喝冰水時感到嚴重的牙齒疼痛，你應該預約一名合格的牙醫看診。 【選項解析】(A) engineer 工程師 (B) dentist 牙醫 (C) journalist 記者 (D) hunter 獵人。tooth pain 由牙醫看診。",
    "vocabIndex": 1
  },
  {
    "q": "The football team was losing at halftime, but their enthusiastic ______ inspired them with an energetic motivational speech.",
    "options": [
      "coach",
      "judge",
      "lawyer",
      "model"
    ],
    "answer": 0,
    "cn": "足球隊在中場休息時處於落後，但他們熱情的教練用激勵人心的演說鼓舞了他們。 【選項解析】(A) coach 教練 (B) judge 法官 (C) lawyer 律師 (D) model 模特兒。球隊指導者為 coach。",
    "vocabIndex": 0
  },
  {
    "q": "The tech startup hired a talented software ______ to build an interactive mobile app for online grocery shopping.",
    "options": [
      "dentist",
      "hunter",
      "engineer",
      "coach"
    ],
    "answer": 2,
    "cn": "這家科技新創公司聘請了一位才華洋溢的軟體工程師，為線上雜貨購物建立互動式手機應用程式。 【選項解析】(A) dentist (B) hunter (C) engineer 工程師 (D) coach。software engineer（軟體工程師）。",
    "vocabIndex": 2
  },
  {
    "q": "The university invited an environmental ______ to deliver a lecture on the global effects of melting glaciers.",
    "options": [
      "model",
      "expert",
      "coach",
      "dentist"
    ],
    "answer": 1,
    "cn": "大學邀請了一位環境專家，就冰川融化對全球造成的影響發表演講。 【選項解析】(A) expert 專家 (B) model (C) coach (D) dentist。environmental expert（環境專家）。",
    "vocabIndex": 3
  },
  {
    "q": "The ancient tribe relied on an experienced ______ to track deer through the thick forest during harsh winter months.",
    "options": [
      "lawyer",
      "judge",
      "hunter",
      "manager"
    ],
    "answer": 2,
    "cn": "在嚴寒的冬季月份裡，古老的部落依靠經驗豐富的獵人穿越茂密的森林追蹤鹿群。 【選項解析】(A) lawyer (B) hunter 獵人 (C) judge (D) manager。track deer 表追蹤獵物，此為 hunter。",
    "vocabIndex": 4
  },
  {
    "q": "The brave ______ won a prestigious press award after exposing corrupt activities inside the regional government.",
    "options": [
      "dentist",
      "coach",
      "engineer",
      "journalist"
    ],
    "answer": 3,
    "cn": "這位勇敢的記者在揭露地方政府內部的腐敗活動後，榮獲了聲譽卓著的新聞大獎。 【選項解析】(A) dentist (B) coach (C) journalist 記者 (D) engineer。investigative journalist（調查記者）。",
    "vocabIndex": 5
  },
  {
    "q": "The courtroom was completely silent as the supreme ______ banged his wooden gavel and read the official verdict.",
    "options": [
      "judge",
      "model",
      "hunter",
      "expert"
    ],
    "answer": 0,
    "cn": "當最高法官敲響他的木槌並宣讀官方判決時，整個法庭一片肅靜。 【選項解析】(A) judge 法官 (B) model (C) hunter (D) expert。敲木槌宣判者為 judge。",
    "vocabIndex": 6
  },
  {
    "q": "The accused company hired a top defense ______ to present solid evidence and protect their intellectual property rights.",
    "options": [
      "coach",
      "lawyer",
      "dentist",
      "engineer"
    ],
    "answer": 1,
    "cn": "被指控的公司聘請了頂尖的辯護律師提供確鑿證據，以保護他們的智慧財產權。 【選項解析】(A) coach (B) dentist (C) lawyer 律師 (D) engineer。defense lawyer（辯護律師）。",
    "vocabIndex": 7
  },
  {
    "q": "The restaurant ______ walked from table to table asking guests whether they enjoyed their special holiday meals.",
    "options": [
      "hunter",
      "judge",
      "manager",
      "expert"
    ],
    "answer": 2,
    "cn": "餐廳經理在桌子間穿梭巡視，詢問客人是否喜歡特別的節日餐點。 【選項解析】(A) hunter (B) manager 經理 (C) judge (D) expert。restaurant manager（餐廳經理）。",
    "vocabIndex": 8
  },
  {
    "q": "Tall and elegant, the runway ______ wore an exquisite evening gown created by a prominent French fashion designer.",
    "options": [
      "journalist",
      "engineer",
      "dentist",
      "model"
    ],
    "answer": 3,
    "cn": "身材高挑優雅的伸展台模特兒穿著由法國知名服裝設計師創作的精美晚禮服。 【選項解析】(A) journalist (B) engineer (C) dentist (D) model 模特兒。runway model 指走伸展台之模特兒。",
    "vocabIndex": 9
  },
  {
    "q": "You must brush and floss your teeth every night, or your ______ will have to drill your cavities on your next visit.",
    "options": [
      "dentist",
      "coach",
      "lawyer",
      "judge"
    ],
    "answer": 0,
    "cn": "你每晚必須刷牙並使用牙線，否則牙醫在下次看診時就得幫你鑽牙補蛀牙了。 【選項解析】(A) dentist 牙醫 (B) coach (C) lawyer (D) judge。drill cavities（鑽補蛀牙）為牙醫之工作。",
    "vocabIndex": 1
  },
  {
    "q": "The track and field ______ instructed the sprinters to practice starting blocks repeatedly to shave off split seconds.",
    "options": [
      "hunter",
      "coach",
      "journalist",
      "model"
    ],
    "answer": 1,
    "cn": "田徑教練指示短跑運動員反覆練習起跑架，以縮短微秒時間。 【選項解析】(A) hunter (B) coach 教練 (C) journalist (D) model。track and field coach（田徑教練）。",
    "vocabIndex": 0
  },
  {
    "q": "Civil ______ from the national transport ministry conducted safety inspections on all suspension bridges after the earthquake.",
    "options": [
      "judges",
      "dentists",
      "engineers",
      "hunters"
    ],
    "answer": 2,
    "cn": "國家交通部的土木工程師在地震後對所有懸索橋進行了安全檢查。 【選項解析】(A) engineers 工程師 (B) dentists (C) judges (D) hunters。civil engineers（土木工程師）。",
    "vocabIndex": 2
  },
  {
    "q": "A medical ______ appeared on the breakfast television show to explain how daily aerobic exercise strengthens the heart.",
    "options": [
      "lawyer",
      "expert",
      "model",
      "manager"
    ],
    "answer": 1,
    "cn": "一位醫學專家出現在早安電視節目中，向觀眾解釋每日有氧運動如何增強心臟功能。 【選項解析】(A) lawyer (B) model (C) expert 專家 (D) manager。medical expert（醫學專家）。",
    "vocabIndex": 3
  },
  {
    "q": "Armed with a hunting rifle, the seasoned ______ walked quietly across the misty hills before sunrise.",
    "options": [
      "journalist",
      "dentist",
      "engineer",
      "hunter"
    ],
    "answer": 3,
    "cn": "帶著獵槍的老練獵人在日出前悄悄走過多霧的山丘。 【選項解析】(A) journalist (B) hunter 獵人 (C) engineer (D) dentist。armed with hunting rifle 指獵人 hunter。",
    "vocabIndex": 4
  },
  {
    "q": "The young newspaper ______ interviewed eyewitnesses at the traffic accident site and filed her story before deadline.",
    "options": [
      "journalist",
      "judge",
      "coach",
      "model"
    ],
    "answer": 0,
    "cn": "這位年輕的報社記者在車禍現場採訪了目擊者，並在截稿時間前發送了報導。 【選項解析】(A) coach (B) judge (C) journalist 記者 (D) model。interviewed eyewitnesses 表採訪目擊者。",
    "vocabIndex": 5
  },
  {
    "q": "In a criminal trial, the presiding ______ must remain neutral and guarantee that court rules are strictly followed.",
    "options": [
      "dentist",
      "judge",
      "engineer",
      "hunter"
    ],
    "answer": 1,
    "cn": "在刑事審判中，主審法官必須保持中立並確保法院規則得到嚴格執行。 【選項解析】(A) judge 法官 (B) dentist (C) engineer (D) hunter。presiding judge（主審法官）。",
    "vocabIndex": 6
  },
  {
    "q": "You should never sign any contract without having your trusted family ______ review the legal clauses carefully.",
    "options": [
      "coach",
      "model",
      "lawyer",
      "expert"
    ],
    "answer": 2,
    "cn": "在簽署任何合約之前，切勿未讓您信任的家庭律師仔細審閱法律條款。 【選項解析】(A) coach (B) model (C) lawyer 律師 (D) expert。review legal clauses 指律師審閱條款。",
    "vocabIndex": 7
  },
  {
    "q": "When sales dropped by fifteen percent, the branch ______ organized an emergency strategy meeting with all staff members.",
    "options": [
      "manager",
      "journalist",
      "dentist",
      "hunter"
    ],
    "answer": 0,
    "cn": "當銷售額下滑百分之十五時，分公司經理與所有員工組織了一次緊急策略會議。 【選項解析】(A) hunter (B) journalist (C) dentist (D) manager 經理。branch manager（分公司經理）。",
    "vocabIndex": 8
  },
  {
    "q": "The miniature wooden ______ of the ancient cathedral took the architecture student six months of meticulous work.",
    "options": [
      "lawyer",
      "judge",
      "coach",
      "model"
    ],
    "answer": 3,
    "cn": "這座古老大教堂的微型木製模型耗費了這位建築系學生六個月的精細心血。 【選項解析】(A) model 模型 (B) judge (C) coach (D) lawyer。miniature wooden model（微型木製模型）。",
    "vocabIndex": 9
  },
  {
    "q": "The pediatric ______ gave the crying toddler a cute sticker after painlessly cleaning his baby teeth.",
    "options": [
      "engineer",
      "hunter",
      "dentist",
      "journalist"
    ],
    "answer": 2,
    "cn": "小兒牙醫在無痛清理完幼兒的乳牙後，給了嚎啕大哭的小童一張可愛的貼紙。 【選項解析】(A) engineer (B) dentist 牙醫 (C) hunter (D) journalist。pediatric dentist（小兒牙醫）。",
    "vocabIndex": 1
  },
  {
    "q": "The swim team ______ timed each lap carefully and corrected the swimmers' arm strokes from the edge of the pool.",
    "options": [
      "lawyer",
      "judge",
      "model",
      "coach"
    ],
    "answer": 3,
    "cn": "游泳隊教練在池畔仔細為每一趟計時，並修正游泳選手的划水動作。 【選項解析】(A) lawyer (B) judge (C) coach 教練 (D) model。swim team coach（游泳隊教練）。",
    "vocabIndex": 0
  },
  {
    "q": "An electrical ______ was called to the manufacturing plant when the primary power generator suddenly overheated.",
    "options": [
      "expert",
      "engineer",
      "hunter",
      "manager"
    ],
    "answer": 1,
    "cn": "當主發電機突然過熱時，一位電機工程師被緊急召集到製造廠處置。 【選項解析】(A) engineer 工程師 (B) expert (C) hunter (D) manager。electrical engineer（電機工程師）。",
    "vocabIndex": 2
  },
  {
    "q": "The television host introduced a culinary ______ who demonstrated traditional pastry techniques to the studio audience.",
    "options": [
      "expert",
      "judge",
      "coach",
      "dentist"
    ],
    "answer": 0,
    "cn": "電視主持人介紹了一位烹飪專家，向攝影棚觀眾示範傳統糕點技藝。 【選項解析】(A) dentist (B) judge (C) coach (D) expert 專家。culinary expert（烹飪專家）。",
    "vocabIndex": 3
  },
  {
    "q": "The department store ______ supervised fifty employees and handled daily scheduling to maintain smooth operations.",
    "options": [
      "hunter",
      "manager",
      "model",
      "journalist"
    ],
    "answer": 1,
    "cn": "百貨公司經理監督五十名員工並處理日常排班，以維護業務順暢運作。 【選項解析】(A) hunter (B) manager 經理 (C) model (D) journalist。department store manager（百貨公司經理）。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "coach": {
    "pos": "n. / v.",
    "en_def": "an athletic trainer; long-distance bus; to train someone",
    "cn_def": "教練；長途巴士；指導",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an athletic trainer; long-distance bus; to train someone",
        "cn_def": "教練；長途巴士；指導"
      }
    ]
  },
  "dentist": {
    "pos": "n.",
    "en_def": "a doctor who specializes in treating teeth and gums",
    "cn_def": "牙醫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a doctor who specializes in treating teeth and gums",
        "cn_def": "牙醫"
      }
    ]
  },
  "engineer": {
    "pos": "n.",
    "en_def": "a person trained in designing or building machines, structures, or software",
    "cn_def": "工程師",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person trained in designing or building machines, structures, or software",
        "cn_def": "工程師"
      }
    ]
  },
  "expert": {
    "pos": "n. / adj.",
    "en_def": "a person with comprehensive and authoritative knowledge in a particular area",
    "cn_def": "專家；熟練的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a person with comprehensive and authoritative knowledge in a particular area",
        "cn_def": "專家；熟練的"
      }
    ]
  },
  "hunter": {
    "pos": "n.",
    "en_def": "a person or animal that pursues and kills wild animals for food or sport",
    "cn_def": "獵人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or animal that pursues and kills wild animals for food or sport",
        "cn_def": "獵人"
      }
    ]
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person who writes news stories for newspapers, magazines, or broadcasts",
    "cn_def": "新聞記者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who writes news stories for newspapers, magazines, or broadcasts",
        "cn_def": "新聞記者"
      }
    ]
  },
  "judge": {
    "pos": "n. / v.",
    "en_def": "a public officer appointed to decide cases in court; to form an opinion",
    "cn_def": "法官；裁判；評斷",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a public officer appointed to decide cases in court; to form an opinion",
        "cn_def": "法官；裁判；評斷"
      }
    ]
  },
  "lawyer": {
    "pos": "n.",
    "en_def": "a person who practices or studies law; an attorney or legal counselor",
    "cn_def": "律師",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who practices or studies law; an attorney or legal counselor",
        "cn_def": "律師"
      }
    ]
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person responsible for controlling or administering an organization or staff",
    "cn_def": "經理；主管",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person responsible for controlling or administering an organization or staff",
        "cn_def": "經理；主管"
      }
    ]
  },
  "model": {
    "pos": "n. / v.",
    "en_def": "a person employed to display clothes; a representation of an object",
    "cn_def": "模特兒；模型；模範",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a person employed to display clothes; a representation of an object",
        "cn_def": "模特兒；模型；模範"
      }
    ]
  },
  "engineers": {
    "pos": "",
    "en_def": "",
    "cn_def": "工程師",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "工程師"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
