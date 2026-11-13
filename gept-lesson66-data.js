// Lesson 66 Quiz Data: Civic Duties, Elections, Demographics & Public Crowds
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 66 - Civic Duties, Elections, Demographics & Public Crowds",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "social",
    "pos": "adj.",
    "cn_def": "社會的；社交的",
    "en_def": "relating to society, its organization, or companionship",
    "sentence": "Spending all day alone indoors is not healthy, so teenagers should participate in more outdoor {{BLANK}} activities.",
    "cn": "整天獨自待在室內對健康無益，因此青少年應該多參加戶外社交活動。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律；法規",
    "en_def": "the system of rules which a particular country or community recognizes",
    "sentence": "Citizens must obey the traffic {{BLANK}} at all times, or they will face hefty fines and loss of driving licenses.",
    "cn": "公民必須始終遵守交通法律，否則他們將面臨高額罰款與吊銷駕照的處分。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；方針",
    "en_def": "a course or principle of action adopted by a government or business",
    "sentence": "The ministry of education introduced a new bilingual education {{BLANK}} to enhance high school students' global competence.",
    "cn": "教育部推出了一項新的雙語教育政策，以提升高中學生的全球競爭力。"
  },
  {
    "word": "vote",
    "pos": "v. / n.",
    "cn_def": "投票；選票",
    "en_def": "to express a choice in an election; a formal choice",
    "sentence": "Every eligible citizen over the age of twenty has the constitutional right to {{BLANK}} in national presidential elections.",
    "cn": "凡年滿二十歲的合格公民，均享有在國家總統大選中進行投票的憲法權利。"
  },
  {
    "word": "elect",
    "pos": "v.",
    "cn_def": "選舉；推選",
    "en_def": "to choose someone for public office by voting",
    "sentence": "The high school students will {{BLANK}} their new student council president during the school assembly this Friday.",
    "cn": "高中學生將於本週五的學校朝會上，推選出他們的新任學生會主席。"
  },
  {
    "word": "population",
    "pos": "n.",
    "cn_def": "人口",
    "en_def": "all the inhabitants of a particular town, area, or country",
    "sentence": "Tokyo has a massive metropolitan {{BLANK}} of over fourteen million residents living within its urban borders.",
    "cn": "東京擁有超過一千四百萬居民生活在其城市邊界內的龐大都市人口。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；市民",
    "en_def": "a legally recognized subject or national of a state or commonwealth",
    "sentence": "As a responsible and proactive {{BLANK}}, Mr. Lin volunteers at the neighborhood community center every Saturday morning.",
    "cn": "作為一名負責任且積極主動的公民，林先生每個星期六早晨都在鄰里社區中心擔任志工。"
  },
  {
    "word": "crowd",
    "pos": "n. / v.",
    "cn_def": "人群；聚集",
    "en_def": "a large number of people gathered together; to pack into",
    "sentence": "A cheering {{BLANK}} of thousands of enthusiastic music fans waited outside the concert stadium for their favorite band.",
    "cn": "數千名熱情歡呼的音樂迷人群聚集在演唱會體育場外，等候著他們最喜愛的樂團。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people, leaving little or no room for movement",
    "sentence": "The downtown night market gets extremely {{BLANK}} on holiday evenings, making it difficult to walk without bumping into people.",
    "cn": "市中心的夜市在假日夜晚變得極為擁擠，使人難以行走而不撞到其他人。"
  },
  {
    "word": "jam",
    "pos": "n. / v.",
    "cn_def": "交通堵塞；果醬；卡住",
    "en_def": "a traffic blockage; a sweet fruit spread; to squeeze tightly",
    "sentence": "We were stuck in a terrible highway traffic {{BLANK}} for more than two hours due to an overturned delivery truck.",
    "cn": "由於一輛翻覆的送貨卡車，我們在嚴重的高速公路交通堵塞中受困了兩個多小時。"
  }
];

const MCQS = [
  {
    "q": "Humans are naturally ______ animals that thrive when they share experiences with friends and families.",
    "options": [
      "crowded",
      "legal",
      "straight",
      "social"
    ],
    "answer": 3,
    "cn": "人類本質上是群居社交動物，當與朋友和家人分享經歷時便能茁壯成長。 【選項解析】(A) crowded 擁擠的  (B) social 社交的；群居的  (C) straight 筆直的  (D) legal 合法的。social animals 指「群居動物」。",
    "vocabIndex": 0
  },
  {
    "q": "In order to maintain public safety, everyone in the community must respect and follow the ______.",
    "options": [
      "law",
      "crowd",
      "jam",
      "vote"
    ],
    "answer": 0,
    "cn": "為了維護公共安全，社區中的每個人都必須尊重並遵守法律。 【選項解析】(A) law 法律  (B) crowd 人群  (C) jam 阻塞  (D) vote 選票。遵守規範為 follow the law。",
    "vocabIndex": 1
  },
  {
    "q": "The airline announced a strict baggage ______ that limits carry-on luggage to one small backpack per passenger.",
    "options": [
      "crowd",
      "policy",
      "citizen",
      "jam"
    ],
    "answer": 1,
    "cn": "該航空公司宣布了一項嚴格的行李規定，限制每位乘客只能攜帶一個小型隨身背包。 【選項解析】(A) crowd 人群  (B) policy 政策；規定  (C) citizen 公民  (D) jam 果醬。規範條例為 baggage policy。",
    "vocabIndex": 2
  },
  {
    "q": "Millions of enthusiastic voters went to polling stations across the nation to cast their ______.",
    "options": [
      "crowd",
      "population",
      "vote",
      "jam"
    ],
    "answer": 2,
    "cn": "全國數百萬熱情的選民前往各投票站投下他們的選票。 【選項解析】(A) crowd 人群  (B) vote 選票  (C) population 人口  (D) jam 阻塞。cast their vote 表示「投下選票」。",
    "vocabIndex": 3
  },
  {
    "q": "The club members gathered in the auditorium to ______ a new chairperson for the upcoming academic year.",
    "options": [
      "vote",
      "elect",
      "direct",
      "address"
    ],
    "answer": 1,
    "cn": "社團成員聚集在禮堂裡，為即將到來的新學年選出一名新主席。 【選項解析】(A) vote 投票  (B) direct 引導  (C) elect 推選出  (D) address 致詞。推選人員出任職位用 elect。",
    "vocabIndex": 4
  },
  {
    "q": "With over twenty million people, this bustling metropolis has the largest ______ in the region.",
    "options": [
      "population",
      "crowd",
      "jam",
      "law"
    ],
    "answer": 0,
    "cn": "這座繁華的大都市擁有超過兩千萬人口，是該地區人口最多的城市。 【選項解析】(A) crowd 人群  (B) population 人口  (C) jam 阻塞  (D) law 法律。居民總數為 population。",
    "vocabIndex": 5
  },
  {
    "q": "After passing the comprehensive naturalization exam, Maria proudly became an official ______ of the nation.",
    "options": [
      "policy",
      "crowd",
      "citizen",
      "jam"
    ],
    "answer": 2,
    "cn": "在通過全面的入籍考試後，瑪麗亞自豪地成為該國的正式公民。 【選項解析】(A) policy 政策  (B) crowd 人群  (C) citizen 公民  (D) jam 交通堵塞。具法律地位身分者為 citizen。",
    "vocabIndex": 6
  },
  {
    "q": "The lead singer stepped onto the stage, and the enthusiastic ______ erupted in loud cheers and applause.",
    "options": [
      "law",
      "policy",
      "jam",
      "crowd"
    ],
    "answer": 3,
    "cn": "主唱走上舞台，熱情的人群爆發出響亮的歡呼與掌聲。 【選項解析】(A) law 法律  (B) crowd 人群  (C) jam 果醬  (D) policy 政策。聚集的熱情觀眾群為 crowd。",
    "vocabIndex": 7
  },
  {
    "q": "The subway train was so ______ during rush hour that passengers could hardly find space to stand comfortably.",
    "options": [
      "broad",
      "crowded",
      "direct",
      "social"
    ],
    "answer": 1,
    "cn": "尖峰時間捷運列車非常擁擠，以至於乘客幾乎找不到可以舒適站立的空間。 【選項解析】(A) broad 寬廣的  (B) crowded 擁擠的  (C) direct 直達的  (D) social 社交的。車廂擠滿人為 crowded。",
    "vocabIndex": 8
  },
  {
    "q": "An unexpected construction project caused a massive traffic ______ along the main boulevard this morning.",
    "options": [
      "crowd",
      "citizen",
      "jam",
      "policy"
    ],
    "answer": 2,
    "cn": "今天早上，一項意外的施工工程在主要林蔭大道上造成了嚴重的交通堵塞。 【選項解析】(A) crowd 人群  (B) jam 阻塞  (C) citizen 公民  (D) policy 政策。traffic jam 指「交通堵塞」。",
    "vocabIndex": 9
  },
  {
    "q": "Participating in team sports helps teenagers develop essential interpersonal and ______ communication skills.",
    "options": [
      "social",
      "legal",
      "crowded",
      "narrow"
    ],
    "answer": 0,
    "cn": "參加團隊運動有助於青少年培養必要的人際關係與社交溝通技巧。 【選項解析】(A) crowded 擁擠的  (B) legal 法律的  (C) social 社交的  (D) narrow 狹窄的。人際往來為 social skills。",
    "vocabIndex": 0
  },
  {
    "q": "It is strictly against the ______ to park your vehicle in front of a fire hydrant at any time.",
    "options": [
      "vote",
      "crowd",
      "jam",
      "law"
    ],
    "answer": 3,
    "cn": "任何時候將車輛停在消防栓前都是嚴格違法的行為。 【選項解析】(A) law 法律  (B) crowd 人群  (C) jam 阻塞  (D) vote 選票。against the law 為「違法」。",
    "vocabIndex": 1
  },
  {
    "q": "The company introduced an environmentally friendly ______ aimed at reducing plastic waste across all branch offices.",
    "options": [
      "crowd",
      "policy",
      "citizen",
      "jam"
    ],
    "answer": 1,
    "cn": "該公司推出了一項環保政策，旨在減少所有分公司辦公室的塑膠垃圾。 【選項解析】(A) crowd 人群  (B) policy 政策  (C) citizen 公民  (D) jam 果醬。企業方針為 environmentally friendly policy。",
    "vocabIndex": 2
  },
  {
    "q": "If you don't ______ on election day, you lose your opportunity to voice your opinion regarding public issues.",
    "options": [
      "elect",
      "direct",
      "vote",
      "underline"
    ],
    "answer": 2,
    "cn": "如果你在選舉日不去投票，你就失去了就公共議題表達意見的機會。 【選項解析】(A) elect 推選  (B) vote 投票  (C) direct 引導  (D) underline 畫底線。行使表決權為 vote。",
    "vocabIndex": 3
  },
  {
    "q": "The citizens organized an assembly to ______ five community representatives to attend the town hall hearing.",
    "options": [
      "address",
      "vote",
      "broadcast",
      "elect"
    ],
    "answer": 3,
    "cn": "市民組織了一次集會，選出五位社區代表參加市政廳公聽會。 【選項解析】(A) elect 選出  (B) vote 投票  (C) broadcast 廣播  (D) address 致詞。選拔代表為 elect representatives。",
    "vocabIndex": 4
  },
  {
    "q": "Because of improved healthcare and sanitation, the island's total ______ has doubled over the past fifty years.",
    "options": [
      "population",
      "crowd",
      "policy",
      "jam"
    ],
    "answer": 0,
    "cn": "由於醫療保健和環境衛生的改善，該島的總人口在過去五十年中增加了一倍。 【選項解析】(A) crowd 人群  (B) population 人口  (C) policy 政策  (D) jam 阻塞。總住民數量為 total population。",
    "vocabIndex": 5
  },
  {
    "q": "Every law-abiding ______ should pay taxes honestly and contribute positively to local community welfare.",
    "options": [
      "jam",
      "policy",
      "citizen",
      "crowd"
    ],
    "answer": 2,
    "cn": "每位守法的公民都應誠實納稅，並對當地社區福祉做出積極貢獻。 【選項解析】(A) jam 阻塞  (B) policy 政策  (C) crowd 人群  (D) citizen 公民。守法國民為 law-abiding citizen。",
    "vocabIndex": 6
  },
  {
    "q": "Security staff stepped forward to prevent the eager ______ from rushing onto the soccer field after the match.",
    "options": [
      "crowd",
      "policy",
      "law",
      "jam"
    ],
    "answer": 0,
    "cn": "維安人員上前阻止急切的人群在賽後衝進足球場。 【選項解析】(A) law 法律  (B) policy 政策  (C) crowd 人群  (D) jam 交通堵塞。激動的群眾為 eager crowd。",
    "vocabIndex": 7
  },
  {
    "q": "On Saturday afternoon, the shopping mall was completely ______ with families buying back-to-school supplies.",
    "options": [
      "narrow",
      "crowded",
      "social",
      "legal"
    ],
    "answer": 1,
    "cn": "週六下午，購物中心裡擠滿了採買開學用品的家庭。 【選項解析】(A) narrow 狹窄的  (B) crowded 擁擠的  (C) social 社交的  (D) legal 合法的。crowded with families 指擠滿家庭。",
    "vocabIndex": 8
  },
  {
    "q": "My mother spread homemade strawberry ______ over toasted bread slices and served them with hot black tea.",
    "options": [
      "law",
      "crowd",
      "policy",
      "jam"
    ],
    "answer": 3,
    "cn": "我母親將自製草莓果醬塗在烤麵包片上，並配上熱紅茶端給我們享用。 【選項解析】(A) jam 果醬  (B) crowd 人群  (C) policy 政策  (D) law 法律。strawberry jam 指草莓果醬。",
    "vocabIndex": 9
  },
  {
    "q": "In sociology class, we discussed how modern digital networks have transformed traditional ______ relationships.",
    "options": [
      "crowded",
      "direct",
      "social",
      "equal"
    ],
    "answer": 2,
    "cn": "在社會學課上，我們討論了現代數位網路如何改變了傳統的社交關係。 【選項解析】(A) crowded 擁擠的  (B) social 社交的  (C) direct 直達的  (D) equal 平等的。人與人間關係為 social relationships。",
    "vocabIndex": 0
  },
  {
    "q": "Environmental protection ______ requires factories to install advanced filtration systems to clean toxic emissions.",
    "options": [
      "crowd",
      "jam",
      "citizen",
      "law"
    ],
    "answer": 3,
    "cn": "環境保護法要求工廠安裝先進的過濾系統，以淨化有毒排放物。 【選項解析】(A) crowd 人群  (B) jam 阻塞  (C) law 法律  (D) citizen 公民。法規為 environmental protection law。",
    "vocabIndex": 1
  },
  {
    "q": "The school board adopted a strict zero-tolerance ______ regarding bullying and harassment on campus.",
    "options": [
      "jam",
      "policy",
      "crowd",
      "citizen"
    ],
    "answer": 1,
    "cn": "學校董事會通過了一項針對校園霸凌和騷擾的嚴格零容忍政策。 【選項解析】(A) jam 阻塞  (B) crowd 人群  (C) policy 政策  (D) citizen 公民。零容忍規定為 zero-tolerance policy。",
    "vocabIndex": 2
  },
  {
    "q": "The legislative committee took a formal roll-call ______ before passing the historic healthcare reform bill.",
    "options": [
      "vote",
      "crowd",
      "jam",
      "population"
    ],
    "answer": 0,
    "cn": "立法委員會在通過具有歷史意義的醫療改革法案之前進行了正式唱名表決。 【選項解析】(A) crowd 人群  (B) vote 表決；投票  (C) jam 阻塞  (D) population 人口。唱名表決為 roll-call vote。",
    "vocabIndex": 3
  },
  {
    "q": "Rush hour commuting often turns the city center into a giant parking lot due to severe traffic ______.",
    "options": [
      "crowd",
      "jams",
      "policies",
      "laws"
    ],
    "answer": 1,
    "cn": "尖峰時段的通勤往往由於嚴重的交通堵塞，使市中心變成一個巨大的停車場。 【選項解析】(A) crowd 人群  (B) jams 阻塞  (C) policies 政策  (D) laws 法律。traffic jams 指交通塞車。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "social": {
    "pos": "adj.",
    "en_def": "relating to society, its organization, or companionship",
    "cn_def": "社會的；社交的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to society, its organization, or companionship",
        "cn_def": "社會的；社交的"
      }
    ]
  },
  "law": {
    "pos": "n.",
    "en_def": "the system of rules which a particular country or community recognizes",
    "cn_def": "法律；法規",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the system of rules which a particular country or community recognizes",
        "cn_def": "法律；法規"
      }
    ]
  },
  "policy": {
    "pos": "n.",
    "en_def": "a course or principle of action adopted by a government or business",
    "cn_def": "政策；方針",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a course or principle of action adopted by a government or business",
        "cn_def": "政策；方針"
      }
    ]
  },
  "vote": {
    "pos": "v. / n.",
    "en_def": "to express a choice in an election; a formal choice",
    "cn_def": "投票；選票",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to express a choice in an election; a formal choice",
        "cn_def": "投票；選票"
      }
    ]
  },
  "elect": {
    "pos": "v.",
    "en_def": "to choose someone for public office by voting",
    "cn_def": "選舉；推選",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to choose someone for public office by voting",
        "cn_def": "選舉；推選"
      }
    ]
  },
  "population": {
    "pos": "n.",
    "en_def": "all the inhabitants of a particular town, area, or country",
    "cn_def": "人口",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all the inhabitants of a particular town, area, or country",
        "cn_def": "人口"
      }
    ]
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a legally recognized subject or national of a state or commonwealth",
    "cn_def": "公民；市民",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a legally recognized subject or national of a state or commonwealth",
        "cn_def": "公民；市民"
      }
    ]
  },
  "crowd": {
    "pos": "n. / v.",
    "en_def": "a large number of people gathered together; to pack into",
    "cn_def": "人群；聚集",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a large number of people gathered together; to pack into",
        "cn_def": "人群；聚集"
      }
    ]
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people, leaving little or no room for movement",
    "cn_def": "擁擠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of people, leaving little or no room for movement",
        "cn_def": "擁擠的"
      }
    ]
  },
  "jam": {
    "pos": "n. / v.",
    "en_def": "a traffic blockage; a sweet fruit spread; to squeeze tightly",
    "cn_def": "交通堵塞；果醬；卡住",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a traffic blockage; a sweet fruit spread; to squeeze tightly",
        "cn_def": "交通堵塞；果醬；卡住"
      }
    ]
  },
  "legal": {
    "pos": "",
    "en_def": "",
    "cn_def": "合法的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "合法的"
      }
    ]
  },
  "straight": {
    "pos": "",
    "en_def": "",
    "cn_def": "筆直的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "筆直的"
      }
    ]
  },
  "direct": {
    "pos": "",
    "en_def": "",
    "cn_def": "引導",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "引導"
      }
    ]
  },
  "address": {
    "pos": "",
    "en_def": "",
    "cn_def": "致詞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "致詞"
      }
    ]
  },
  "broad": {
    "pos": "",
    "en_def": "",
    "cn_def": "寬廣的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寬廣的"
      }
    ]
  },
  "narrow": {
    "pos": "",
    "en_def": "",
    "cn_def": "狹窄的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狹窄的"
      }
    ]
  },
  "underline": {
    "pos": "",
    "en_def": "",
    "cn_def": "畫底線",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "畫底線"
      }
    ]
  },
  "broadcast": {
    "pos": "",
    "en_def": "",
    "cn_def": "廣播",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "廣播"
      }
    ]
  },
  "equal": {
    "pos": "",
    "en_def": "",
    "cn_def": "平等的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "平等的"
      }
    ]
  },
  "jams": {
    "pos": "",
    "en_def": "",
    "cn_def": "阻塞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "阻塞"
      }
    ]
  },
  "policies": {
    "pos": "",
    "en_def": "",
    "cn_def": "政策",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "政策"
      }
    ]
  },
  "laws": {
    "pos": "",
    "en_def": "",
    "cn_def": "法律",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "法律"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
