// Lesson 53 Quiz Data: Manufacturing, Operations, Technology Maintenance & Historical Periods
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 53 - Manufacturing, Operations, Technology Maintenance & Historical Periods",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "操作；運作；手術",
    "en_def": "the action of functioning; a medical surgery or organized process",
    "sentence": "The surgical team performed a difficult heart {{BLANK}} yesterday morning, and the patient is now resting quietly in the hospital.",
    "cn": "手術團隊昨天早上執行了一場難度很高的心臟______，病人現在正在醫院裡安靜休養。"
  },
  {
    "word": "robot",
    "pos": "n.",
    "cn_def": "機器人",
    "en_def": "a machine capable of carrying out a complex series of actions automatically",
    "sentence": "The modern electronics factory uses an intelligent industrial {{BLANK}} to assemble delicate computer parts with high precision.",
    "cn": "這座現代電子工廠使用一台智慧型工業______，以極高的精確度組裝精密的電腦零件。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維持；保養；維修",
    "en_def": "to cause or enable a condition or state of affairs to continue; service",
    "sentence": "Building owners must regularly {{BLANK}} their fire alarm systems, so everyone inside the high-rise can evacuate quickly in an emergency.",
    "cn": "大樓業主必須定期______他們的火警系統，以便高樓內的所有人在緊急情況下能迅速疏散。"
  },
  {
    "word": "produce",
    "pos": "v. / n.",
    "cn_def": "生產；製造；農產品",
    "en_def": "to make or manufacture from components or raw materials; fresh food",
    "sentence": "The fertile agricultural valley can {{BLANK}} tons of fresh sweet melons each summer, which are shipped to supermarkets nationwide.",
    "cn": "這座肥沃的農業山谷每年夏天都能______數噸新鮮甜瓜，並運往全國各地的超市。"
  },
  {
    "word": "production",
    "pos": "n.",
    "cn_def": "生產；製造；產量",
    "en_def": "the action of manufacturing from raw materials, or a theatrical work",
    "sentence": "The local car factory temporarily stopped automobile {{BLANK}} because of a severe worldwide shortage of essential computer chips.",
    "cn": "這家本地汽車工廠暫時停止了汽車______，因為全球嚴重短缺關鍵電腦晶片。"
  },
  {
    "word": "repair",
    "pos": "v. / n.",
    "cn_def": "修理；修復",
    "en_def": "to restore something damaged, faulty, or worn to a good condition",
    "sentence": "The experienced mechanic needed three hours to {{BLANK}} the cracked water pipe, and clean water flowed into our house again.",
    "cn": "經驗豐富的技工花了三個小時才______好破裂的水管，乾淨的水隨後又流進了我們家。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的；古老的",
    "en_def": "belonging to the very distant past and no longer in existence",
    "sentence": "Archaeologists discovered an {{BLANK}} stone tomb buried deep beneath the desert sand, which contained valuable gold artifacts.",
    "cn": "考古學家在沙漠深處發現了一座埋藏很深的______石墓，裡面藏有珍貴的黃金文物。"
  },
  {
    "word": "recent",
    "pos": "adj.",
    "cn_def": "最近的；近來的",
    "en_def": "having happened, begun, or been done not long ago or lately",
    "sentence": "A {{BLANK}} medical study indicates that walking for thirty minutes every day greatly reduces the risk of heart disease.",
    "cn": "一項______醫學研究指出，每天散步三十分鐘可顯著降低罹患心臟病的風險。"
  },
  {
    "word": "calendar",
    "pos": "n.",
    "cn_def": "日曆；行事曆",
    "en_def": "a chart or series of pages showing the days, weeks, and months of a year",
    "sentence": "Teacher Linda marked the upcoming school sports day on her desk {{BLANK}}, reminding all the students to practice running.",
    "cn": "琳達老師在她桌上的______上標記了即將到來的學校運動會，提醒所有學生練習跑步。"
  },
  {
    "word": "period",
    "pos": "n.",
    "cn_def": "期間；時代；句點",
    "en_def": "a length or portion of time; a punctuation mark",
    "sentence": "The famous artist lived in Paris for a brief {{BLANK}} during his youth, where he created his finest oil paintings.",
    "cn": "這位著名藝術家在青年時期曾在巴黎度過了一段短暫的______，在那裡他創作了他最好的油畫。"
  }
];

const MCQS = [
  {
    "q": "The doctor assured the anxious family that the surgical ______ had gone smoothly without any medical complications.",
    "options": [
      "calendar",
      "operation",
      "robot",
      "period"
    ],
    "answer": 1,
    "cn": "醫生向焦急的家屬保證，外科手術進行得很順利，沒有任何醫療併發症。 【選項解析】(A) operation 手術 (B) calendar 日曆 (C) robot 機器人 (D) period 期間。surgical operation 為外科手術。",
    "vocabIndex": 0
  },
  {
    "q": "In the automated car assembly plant, each robotic ______ welds metal sheets together faster than human workers.",
    "options": [
      "calendar",
      "period",
      "robot",
      "production"
    ],
    "answer": 2,
    "cn": "在自動化汽車裝配廠中，每個機械人手臂焊接金屬板的速度都比人類工人更快。 【選項解析】(A) calendar 日曆 (B) robot 機器人 (C) period 期間 (D) production 生產。robotic robot 指機器人。",
    "vocabIndex": 1
  },
  {
    "q": "Homeowners should hire a certified technician to ______ their air conditioning units before the hot summer arrives.",
    "options": [
      "repair",
      "quit",
      "produce",
      "maintain"
    ],
    "answer": 3,
    "cn": "屋主在炎熱的夏天到來前，應該聘請合格的技師來保養他們的冷氣機。 【選項解析】(A) repair 修理 (B) maintain 保養 (C) produce 製造 (D) quit 放棄。定期保養為 maintain。",
    "vocabIndex": 2
  },
  {
    "q": "Taiwan's warm climate and rich soil allow local farmers to ______ delicious tropical fruits throughout the entire year.",
    "options": [
      "produce",
      "quit",
      "maintain",
      "hire"
    ],
    "answer": 0,
    "cn": "台灣溫暖的氣候與肥沃的土壤使本地農民整年都能生產美味的熱帶水果。 【選項解析】(A) hire 雇用 (B) quit 停止 (C) maintain 維持 (D) produce 生產。出產農作物用 produce。",
    "vocabIndex": 3
  },
  {
    "q": "Due to an unexpected machinery breakdown, factory ______ was halted for two days while technicians inspected the assembly line.",
    "options": [
      "operation",
      "robot",
      "production",
      "calendar"
    ],
    "answer": 2,
    "cn": "由於突發的機械故障，工廠生產暫停了兩天，期間技術人員檢查了裝配線。 【選項解析】(A) operation 操作 (B) production 生產 (C) robot 機器人 (D) calendar 日曆。工廠產能暫停為 factory production halted。",
    "vocabIndex": 4
  },
  {
    "q": "After our old television screen suddenly turned black, grandfather called a local shop to ______ the broken circuit board.",
    "options": [
      "repair",
      "maintain",
      "produce",
      "trade"
    ],
    "answer": 0,
    "cn": "在我們的老電視螢幕突然變黑之後，祖父打電話給當地店家來修理損壞的電路板。 【選項解析】(A) maintain 保養 (B) repair 修理 (C) produce 生產 (D) trade 交易。修復壞掉的物品用 repair。",
    "vocabIndex": 5
  },
  {
    "q": "Historians study ______ Roman architecture to understand how those early builders constructed durable stone aqueducts.",
    "options": [
      "single",
      "recent",
      "daily",
      "ancient"
    ],
    "answer": 3,
    "cn": "歷史學家研究古代羅馬建築，以了解那些早期建築師如何建造耐用的石造引水道。 【選項解析】(A) ancient 古代的 (B) recent 最近的 (C) daily 每日的 (D) single 單一的。羅馬帝國時期屬 ancient。",
    "vocabIndex": 6
  },
  {
    "q": "According to a ______ consumer survey, more teenagers prefer shopping on online platforms rather than visiting department stores.",
    "options": [
      "daily",
      "recent",
      "silent",
      "violent"
    ],
    "answer": 1,
    "cn": "根據最近的一項消費者調查，更多青少年更喜歡在線上平台購物，而不是逛百貨公司。 【選項解析】(A) daily 每日的 (B) recent 最近的 (C) silent 沉默的 (D) violent 暴力的。近期的調查為 recent survey。",
    "vocabIndex": 7
  },
  {
    "q": "Mark wrote down the dates of his mid-term exams on the wall ______ hanging beside his bedroom study desk.",
    "options": [
      "robot",
      "period",
      "calendar",
      "operation"
    ],
    "answer": 2,
    "cn": "馬克將期中考的日期記在掛在臥室書桌旁的牆上日曆上。 【選項解析】(A) robot 機器人 (B) period 期間 (C) operation 手術 (D) calendar 日曆。記錄考試日期使用 calendar。",
    "vocabIndex": 8
  },
  {
    "q": "During the peaceful ______ following the war, the damaged economy recovered quickly and international trade flourished.",
    "options": [
      "calendar",
      "period",
      "robot",
      "operation"
    ],
    "answer": 1,
    "cn": "在戰後那段和平的時期裡，受損的經濟迅速復甦，國際貿易也蓬勃發展。 【選項解析】(A) calendar 日曆 (B) robot 機器人 (C) period 時期 (D) operation 運作。一段時期為 peaceful period。",
    "vocabIndex": 9
  },
  {
    "q": "The emergency search-and-rescue ______ continued throughout the stormy night until the lost hiker was found safe.",
    "options": [
      "operation",
      "period",
      "robot",
      "calendar"
    ],
    "answer": 0,
    "cn": "緊急搜救行動在暴風雨的夜裡持續進行，直到迷路的登山客安全獲救為止。 【選項解析】(A) operation 行動 (B) period 期間 (C) robot 機器人 (D) calendar 日曆。search-and-rescue operation 搜救行動。",
    "vocabIndex": 0
  },
  {
    "q": "Japanese engineers designed a humanoid ______ that can assist elderly nursing home residents with daily tasks.",
    "options": [
      "calendar",
      "period",
      "production",
      "robot"
    ],
    "answer": 3,
    "cn": "日本工程師設計了一款人形機器人，可以協助養老院的年長住民處理日常事務。 【選項解析】(A) calendar 日曆 (B) period 期間 (C) robot 機器人 (D) production 生產。人形機器人為 humanoid robot。",
    "vocabIndex": 1
  },
  {
    "q": "To ______ good physical health, young people should eat balanced meals and get at least eight hours of sleep.",
    "options": [
      "produce",
      "maintain",
      "repair",
      "hire"
    ],
    "answer": 1,
    "cn": "為了保持良好的身體健康，年輕人應當飲食均衡，並且至少睡滿八個小時。 【選項解析】(A) produce 生產 (B) maintain 維持 (C) repair 修理 (D) hire 雇用。維持健康為 maintain good health。",
    "vocabIndex": 2
  },
  {
    "q": "The textile factory can ______ hundreds of cotton shirts every hour using automated computerized knitting machines.",
    "options": [
      "repair",
      "trade",
      "maintain",
      "produce"
    ],
    "answer": 3,
    "cn": "這家紡織廠使用全自動電腦針織機，每小時能生產數百件純棉襯衫。 【選項解析】(A) repair 修理 (B) trade 交易 (C) produce 生產 (D) maintain 維持。工廠製造商品為 produce。",
    "vocabIndex": 3
  },
  {
    "q": "Increased grain ______ in eastern Europe helped prevent food shortages in several developing countries this past winter.",
    "options": [
      "production",
      "period",
      "robot",
      "calendar"
    ],
    "answer": 0,
    "cn": "東歐糧食產量的增加，幫助過去這個冬天幾個開發中國家避免了糧食短缺危機。 【選項解析】(A) period 期間 (B) production 產量 (C) robot 機器人 (D) calendar 日曆。糧食產量為 grain production。",
    "vocabIndex": 4
  },
  {
    "q": "The bicycle mechanic used a small wrench to ______ the slipped chain and tighten the loose pedals on my bike.",
    "options": [
      "maintain",
      "produce",
      "repair",
      "quit"
    ],
    "answer": 2,
    "cn": "自行車技工用一把小板手修理掉了的鏈條，並鎖緊了我車上鬆動的腳踏板。 【選項解析】(A) maintain 保養 (B) repair 修理 (C) produce 生產 (D) quit 放棄。修好脫落的鏈條為 repair slipped chain。",
    "vocabIndex": 5
  },
  {
    "q": "Tourists marvel at the ______ stone pyramids of Egypt, wondering how workers moved such enormous granite blocks.",
    "options": [
      "ancient",
      "recent",
      "normal",
      "weekly"
    ],
    "answer": 0,
    "cn": "遊客驚嘆於埃及古老的石金字塔，好奇當年的工人們是如何搬動如此巨大的花崗岩塊。 【選項解析】(A) ancient 古代的 (B) recent 最近的 (C) normal 正常的 (D) weekly 每週的。金字塔為 ancient pyramids。",
    "vocabIndex": 6
  },
  {
    "q": "In ______ years, electric scooters have become widely popular in cities because they produce zero harmful exhaust emissions.",
    "options": [
      "ancient",
      "rapid",
      "sudden",
      "recent"
    ],
    "answer": 3,
    "cn": "近年來，電動機車在城市中變得廣受歡迎，因為它們不會排放任何有害廢氣。 【選項解析】(A) ancient 古代的 (B) recent 近年的 (C) sudden 突然的 (D) rapid 快速的。in recent years 為常見時間片語「近年來」。",
    "vocabIndex": 7
  },
  {
    "q": "Please check your desk ______ and tell me if you are free for our quarterly marketing meeting on Friday.",
    "options": [
      "robot",
      "period",
      "calendar",
      "operation"
    ],
    "answer": 2,
    "cn": "請看一下你桌上的行事曆，告訴我你週五是否有空參加我們的季度行銷會議。 【選項解析】(A) robot 機器人 (B) calendar 行事曆 (C) period 期間 (D) operation 手術。查閱行程用 desk calendar。",
    "vocabIndex": 8
  },
  {
    "q": "Dinosaurs dominated the earth for a long geological ______ before a catastrophic asteroid impact led to their extinction.",
    "options": [
      "calendar",
      "period",
      "robot",
      "production"
    ],
    "answer": 1,
    "cn": "在災難性的小行星撞擊導致恐龍滅絕之前，恐龍曾在漫長的地質時期統治著地球。 【選項解析】(A) period 時期 (B) calendar 日曆 (C) robot 機器人 (D) production 生產。地質時期為 geological period。",
    "vocabIndex": 9
  },
  {
    "q": "The military launched a joint rescue ______ to deliver emergency medical supplies to isolated island villagers.",
    "options": [
      "robot",
      "calendar",
      "operation",
      "period"
    ],
    "answer": 2,
    "cn": "軍方展開了一場聯合救援行動，向與世隔絕的島嶼村民運送緊急醫療物資。 【選項解析】(A) robot 機器人 (B) operation 行動 (C) calendar 日曆 (D) period 期間。救援行動為 rescue operation。",
    "vocabIndex": 0
  },
  {
    "q": "The automated vacuum ______ navigates across the living room carpet, cleaning dust particles without any human supervision.",
    "options": [
      "operation",
      "period",
      "calendar",
      "robot"
    ],
    "answer": 3,
    "cn": "全自動掃地機器人在客廳地毯上自動導航，完全不需要任何人為監督即可清理灰塵。 【選項解析】(A) robot 機器人 (B) period 期間 (C) calendar 日曆 (D) operation 手術。自動吸塵機器人為 vacuum robot。",
    "vocabIndex": 1
  },
  {
    "q": "The school custodian works hard to ______ clean classrooms and well-trimmed lawns throughout the school campus.",
    "options": [
      "maintain",
      "repair",
      "produce",
      "quit"
    ],
    "answer": 0,
    "cn": "學校工友辛勤工作，在全校園內維持整潔的教室與修剪整齊的草坪。 【選項解析】(A) repair 修理 (B) maintain 維護 (C) produce 生產 (D) quit 放棄。維持整潔環境為 maintain clean classrooms。",
    "vocabIndex": 2
  },
  {
    "q": "Solar power stations ______ clean electricity by absorbing radiant sunlight with large fields of photovoltaic panels.",
    "options": [
      "repair",
      "produce",
      "maintain",
      "hire"
    ],
    "answer": 1,
    "cn": "太陽能發電廠利用廣大的太陽能光電板吸收輻射陽光，藉此產生乾淨的電力。 【選項解析】(A) produce 產生 (B) repair 修理 (C) maintain 維持 (D) hire 雇用。發電產能為 produce electricity。",
    "vocabIndex": 3
  },
  {
    "q": "After months of painstaking work, art restorers managed to ______ the water-damaged Renaissance painting to its former glory.",
    "options": [
      "maintain",
      "produce",
      "repair",
      "trade"
    ],
    "answer": 2,
    "cn": "經過數月艱苦的努力，藝術修復師成功修復了受水損壞的文藝復興時期畫作，重現其昔日光芒。 【選項解析】(A) maintain 保養 (B) produce 製造 (C) repair 修復 (D) trade 交易。修復受損畫作為 repair damaged painting。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "operation": {
    "pos": "n.",
    "en_def": "the action of functioning; a medical surgery or organized process",
    "cn_def": "操作；運作；手術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of functioning; a medical surgery or organized process",
        "cn_def": "操作；運作；手術"
      }
    ]
  },
  "robot": {
    "pos": "n.",
    "en_def": "a machine capable of carrying out a complex series of actions automatically",
    "cn_def": "機器人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a machine capable of carrying out a complex series of actions automatically",
        "cn_def": "機器人"
      }
    ]
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to cause or enable a condition or state of affairs to continue; service",
    "cn_def": "維持；保養；維修",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause or enable a condition or state of affairs to continue; service",
        "cn_def": "維持；保養；維修"
      }
    ]
  },
  "produce": {
    "pos": "v. / n.",
    "en_def": "to make or manufacture from components or raw materials; fresh food",
    "cn_def": "生產；製造；農產品",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to make or manufacture from components or raw materials; fresh food",
        "cn_def": "生產；製造；農產品"
      }
    ]
  },
  "production": {
    "pos": "n.",
    "en_def": "the action of manufacturing from raw materials, or a theatrical work",
    "cn_def": "生產；製造；產量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of manufacturing from raw materials, or a theatrical work",
        "cn_def": "生產；製造；產量"
      }
    ]
  },
  "repair": {
    "pos": "v. / n.",
    "en_def": "to restore something damaged, faulty, or worn to a good condition",
    "cn_def": "修理；修復",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to restore something damaged, faulty, or worn to a good condition",
        "cn_def": "修理；修復"
      }
    ]
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "belonging to the very distant past and no longer in existence",
    "cn_def": "古代的；古老的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging to the very distant past and no longer in existence",
        "cn_def": "古代的；古老的"
      }
    ]
  },
  "recent": {
    "pos": "adj.",
    "en_def": "having happened, begun, or been done not long ago or lately",
    "cn_def": "最近的；近來的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having happened, begun, or been done not long ago or lately",
        "cn_def": "最近的；近來的"
      }
    ]
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a chart or series of pages showing the days, weeks, and months of a year",
    "cn_def": "日曆；行事曆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a chart or series of pages showing the days, weeks, and months of a year",
        "cn_def": "日曆；行事曆"
      }
    ]
  },
  "period": {
    "pos": "n.",
    "en_def": "a length or portion of time; a punctuation mark",
    "cn_def": "期間；時代；句點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a length or portion of time; a punctuation mark",
        "cn_def": "期間；時代；句點"
      }
    ]
  },
  "quit": {
    "pos": "",
    "en_def": "",
    "cn_def": "放棄",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "放棄"
      }
    ]
  },
  "hire": {
    "pos": "",
    "en_def": "",
    "cn_def": "雇用",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "雇用"
      }
    ]
  },
  "trade": {
    "pos": "",
    "en_def": "",
    "cn_def": "交易",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "交易"
      }
    ]
  },
  "single": {
    "pos": "",
    "en_def": "",
    "cn_def": "單一的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "單一的"
      }
    ]
  },
  "daily": {
    "pos": "",
    "en_def": "",
    "cn_def": "每日的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "每日的"
      }
    ]
  },
  "silent": {
    "pos": "",
    "en_def": "",
    "cn_def": "沉默的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "沉默的"
      }
    ]
  },
  "violent": {
    "pos": "",
    "en_def": "",
    "cn_def": "暴力的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "暴力的"
      }
    ]
  },
  "normal": {
    "pos": "",
    "en_def": "",
    "cn_def": "正常的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "正常的"
      }
    ]
  },
  "weekly": {
    "pos": "",
    "en_def": "",
    "cn_def": "每週的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "每週的"
      }
    ]
  },
  "rapid": {
    "pos": "",
    "en_def": "",
    "cn_def": "快速的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "快速的"
      }
    ]
  },
  "sudden": {
    "pos": "",
    "en_def": "",
    "cn_def": "突然的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "突然的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
