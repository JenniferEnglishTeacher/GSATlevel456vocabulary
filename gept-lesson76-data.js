// Lesson 76 Quiz Data: Selection, Advice, Military Commands & Medical Care
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 76 - Selection, Advice, Military Commands & Medical Care",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "select",
    "pos": "v.",
    "cn_def": "挑選；選拔；精選",
    "en_def": "to carefully choose as being the best or most suitable",
    "sentence": "The panel of music professors convened yesterday morning to {{BLANK}} the three most talented pianists for the scholarship.",
    "cn": "音樂教授評審團昨天上午召開會議，以【選拔】三位最具才華的鋼琴家獲頒獎學金。"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "cn_def": "避開；避免；預防",
    "en_def": "to keep away from or stop oneself from doing something",
    "sentence": "Drivers should reduce their speed on icy roads to {{BLANK}} dangerous accidents during severe winter weather.",
    "cn": "駕駛在結冰路面上應降低車速，以【避免】在惡劣冬天天氣下發生危險事故。"
  },
  {
    "word": "omit",
    "pos": "v.",
    "cn_def": "省略；遺漏；略去",
    "en_def": "to leave out or exclude someone or something either intentionally or forgetfully",
    "sentence": "When filling out this formal visa application, be very careful not to {{BLANK}} any required personal information.",
    "cn": "填寫這份正式簽證申請表時，請格外小心，千萬不要【遺漏】任何必要的個人資訊。"
  },
  {
    "word": "command",
    "pos": "n. / v.",
    "cn_def": "命令；指揮；控制",
    "en_def": "an authoritative order; to give an authoritative order to",
    "sentence": "The brave military officer issued a clear {{BLANK}} to his soldiers to retreat to safe positions behind the hill.",
    "cn": "英勇的軍官向部下士兵下達了明確的【命令】，要求撤退到山丘後方的安全陣地。"
  },
  {
    "word": "comment",
    "pos": "n. / v.",
    "cn_def": "評論；意見；發表評論",
    "en_def": "a verbal or written remark expressing an opinion or reaction",
    "sentence": "The government spokesperson declined to make any official {{BLANK}} regarding ongoing sensitive diplomatic negotiations.",
    "cn": "政府發言人拒絕對正在進行中的敏感外交談判發表任何官方【評論】。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議；勸告；忠告",
    "en_def": "to offer suggestions about the best course of action to someone",
    "sentence": "Because of high cholesterol levels, the doctor had to {{BLANK}} my father to eat less red meat and exercise daily.",
    "cn": "因為膽固醇過高，醫生不得不【建議】我父親少吃紅肉並每天運動。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議；忠告；勸告",
    "en_def": "guidance or recommendations offered with regard to prudent future action",
    "sentence": "My experienced elder sister gave me valuable {{BLANK}} on how to prepare effectively for competitive university entrance exams.",
    "cn": "經驗豐富的姐姐給了我寶貴的【建議】，指導我如何有效準備具競爭力的大學入學考試。"
  },
  {
    "word": "truth",
    "pos": "n.",
    "cn_def": "真相；事實；真實",
    "en_def": "the quality or state of being in accordance with fact or reality",
    "sentence": "In a court of law, every witness is sworn to speak the honest {{BLANK}} before testifying about the crime.",
    "cn": "在法庭上，每位證人在就罪行作證之前，都必須宣誓陳述坦率的【真相】。"
  },
  {
    "word": "cure",
    "pos": "n. / v.",
    "cn_def": "治癒方法；特效藥；治癒",
    "en_def": "a substance or treatment that ends a disease; to relieve a person of symptoms",
    "sentence": "Medical researchers around the globe are working tirelessly to discover an effective {{BLANK}} for Alzheimer's disease.",
    "cn": "全球各地的醫學研究人員正不知疲倦地工作，希望能發現阿茲海默症的有效【治癒方法】。"
  },
  {
    "word": "treatment",
    "pos": "n.",
    "cn_def": "治療；療程；處置",
    "en_def": "medical care given to a patient for an illness or injury",
    "sentence": "The patient responded remarkably well to the physical therapy {{BLANK}}, and she was able to walk without crutches in a month.",
    "cn": "這位病患對物理治療【療程】反應極佳，不到一個月她就能不用拐杖行走了。"
  }
];

const MCQS = [
  {
    "q": "The panel of music professors convened yesterday morning to ______ the three most talented pianists for the scholarship.",
    "options": [
      "avoid",
      "select",
      "omit",
      "cure"
    ],
    "answer": 1,
    "cn": "音樂教授評審團昨天召開會議，以選拔三位最具才華的鋼琴家獲頒獎學金。 【選項解析】(A) avoid 避免  (B) select 選拔  (C) omit 省略  (D) cure 治癒。評選獲獎者用 select。",
    "vocabIndex": 0
  },
  {
    "q": "Drivers should slow down during heavy rainstorms to ______ dangerous skidding on the slippery highway.",
    "options": [
      "avoid",
      "select",
      "advise",
      "command"
    ],
    "answer": 0,
    "cn": "駕駛在暴風雨期間應減速，以避免在濕滑公路上發生危險打滑。 【選項解析】(A) avoid 避免  (B) select 選拔  (C) advise 建議  (D) command 命令。防止意外發生用 avoid accidents。",
    "vocabIndex": 1
  },
  {
    "q": "When you write your final academic essay, make sure not to ______ citations for borrowed research data.",
    "options": [
      "avoid",
      "select",
      "cure",
      "omit"
    ],
    "answer": 3,
    "cn": "撰寫學術論文時，請確保不要遺漏引用借鑑的研究數據。 【選項解析】(A) avoid 避免  (B) select 挑選  (C) omit 遺漏  (D) cure 治癒。遺漏引註用 omit citations。",
    "vocabIndex": 2
  },
  {
    "q": "The army general stood proudly before his troops and gave a strict ______ to hold the defensive line.",
    "options": [
      "advice",
      "truth",
      "command",
      "cure"
    ],
    "answer": 2,
    "cn": "陸軍將軍驕傲地站在部隊前，下達堅守防線的嚴格命令。 【選項解析】(A) advice 建議  (B) command 命令  (C) truth 真相  (D) cure 療法。下達軍事命令為 give a command。",
    "vocabIndex": 3
  },
  {
    "q": "The foreign minister refused to provide any public ______ on the controversial news article until investigations concluded.",
    "options": [
      "command",
      "advice",
      "truth",
      "comment"
    ],
    "answer": 3,
    "cn": "外交部長拒絕在調查結束前對爭議性新聞報導發表任何公開評論。 【選項解析】(A) command 命令  (B) advice 建議  (C) comment 評論  (D) truth 真相。發表評論用 make a comment。",
    "vocabIndex": 4
  },
  {
    "q": "Healthcare professionals strongly ______ elderly patients to receive influenza vaccinations before winter begins.",
    "options": [
      "avoid",
      "advise",
      "omit",
      "select"
    ],
    "answer": 1,
    "cn": "醫護專業人員強烈建議老年病患在入冬前接種流感疫苗。 【選項解析】(A) advise 建議  (B) avoid 避免  (C) omit 省略  (D) select 挑選。advise someone to do something 為「建議某人做某事」。",
    "vocabIndex": 5
  },
  {
    "q": "If you are having trouble budgeting your monthly expenses, financial experts can provide excellent ______.",
    "options": [
      "command",
      "truth",
      "advice",
      "cure"
    ],
    "answer": 2,
    "cn": "如果你在編列每月開銷預算時遇到困難，理財專家能提供極佳的建議。 【選項解析】(A) command 命令  (B) advice 建議  (C) truth 真相  (D) cure 療法。提供寶貴建議用 provide advice。",
    "vocabIndex": 6
  },
  {
    "q": "Although the facts were painful to hear, the loyal assistant chose to tell his boss the absolute ______.",
    "options": [
      "truth",
      "command",
      "comment",
      "advice"
    ],
    "answer": 0,
    "cn": "儘管事實聽起來令人難受，忠誠的特助仍選擇向老闆陳述絕對的事實真相。 【選項解析】(A) command 命令  (B) truth 真相  (C) comment 評論  (D) advice 建議。tell the truth 為固定搭配「說實話」。",
    "vocabIndex": 7
  },
  {
    "q": "Scientists have spent decades searching for a permanent ______ for common viral infections like the cold.",
    "options": [
      "command",
      "comment",
      "advice",
      "cure"
    ],
    "answer": 3,
    "cn": "科學家花了數十年尋找針對感冒等常見病毒感染的永久治癒法。 【選項解析】(A) command 命令  (B) comment 評論  (C) cure 治癒法  (D) advice 建議。a cure for a disease 表疾病的治癒法。",
    "vocabIndex": 8
  },
  {
    "q": "After suffering third-degree burns in the kitchen accident, Kevin was admitted to the hospital for intensive ______.",
    "options": [
      "command",
      "comment",
      "treatment",
      "advice"
    ],
    "answer": 2,
    "cn": "在廚房意外中遭受三度灼傷後，凱文被送入醫院接受加護治療。 【選項解析】(A) command 命令  (B) comment 評論  (C) advice 建議  (D) treatment 治療。intensive treatment 指加護治療。",
    "vocabIndex": 9
  },
  {
    "q": "The Olympic selection committee will ______ the top sixteen runners to represent our nation in the summer games.",
    "options": [
      "omit",
      "select",
      "avoid",
      "cure"
    ],
    "answer": 1,
    "cn": "奧運選拔委員會將選拔出前十六名跑者代表我國參加夏季奧運會。 【選項解析】(A) select 選拔  (B) omit 遺漏  (C) avoid 避免  (D) cure 治癒。挑選代表用 select runners。",
    "vocabIndex": 0
  },
  {
    "q": "People with sensitive skin should ______ using scented soaps that contain artificial coloring chemicals.",
    "options": [
      "avoid",
      "select",
      "advise",
      "command"
    ],
    "answer": 0,
    "cn": "皮膚敏感的人應避免使用含有化學人工色素的芳香肥皂。 【選項解析】(A) select 挑選  (B) avoid 避免  (C) advise 建議  (D) command 命令。avoid using 表避免使用。",
    "vocabIndex": 1
  },
  {
    "q": "In order to save space on the printed brochure, the editor decided to ______ several minor background details.",
    "options": [
      "avoid",
      "select",
      "omit",
      "cure"
    ],
    "answer": 2,
    "cn": "為了節省印刷手冊的版面，編輯決定略去幾項次要的背景細節。 【選項解析】(A) omit 略去  (B) select 挑選  (C) avoid 避免  (D) cure 治癒。刪略細節用 omit details。",
    "vocabIndex": 2
  },
  {
    "q": "The police dog was trained to obey every verbal ______ issued by its professional handler immediately.",
    "options": [
      "command",
      "comment",
      "advice",
      "truth"
    ],
    "answer": 0,
    "cn": "警犬受過專業訓練，能立即服從訓犬員發出的每一道口語指令。 【選項解析】(A) command 口令  (B) comment 評論  (C) advice 建議  (D) truth 真相。obey a command 表服從命令。",
    "vocabIndex": 3
  },
  {
    "q": "Many internet users left an encouraging ______ under the hospital's video praising hardworking medical nurses.",
    "options": [
      "command",
      "cure",
      "truth",
      "comment"
    ],
    "answer": 3,
    "cn": "許多網友在醫院讚揚辛苦護理師的影片下方留下了溫暖的鼓勵留言。 【選項解析】(A) command 命令  (B) comment 留言  (C) truth 真相  (D) cure 療法。leave a comment 表留言。",
    "vocabIndex": 4
  },
  {
    "q": "Career counselors ______ high school graduates to explore internships before making long-term career commitments.",
    "options": [
      "avoid",
      "advise",
      "select",
      "omit"
    ],
    "answer": 1,
    "cn": "生涯輔導員建議高中畢業生在做出長期職業承諾前多探索實習機會。 【選項解析】(A) advise 建議  (B) avoid 避免  (C) select 挑選  (D) omit 省略。輔導員給予忠告用 advise graduates。",
    "vocabIndex": 5
  },
  {
    "q": "A piece of good ______ passed down from grandfather is to save at least ten percent of every paycheck.",
    "options": [
      "advice",
      "command",
      "comment",
      "truth"
    ],
    "answer": 0,
    "cn": "祖父傳承下來的一條極佳忠告是：把每筆薪水的至少百分之十存起來。 【選項解析】(A) command 命令  (B) advice 忠告  (C) comment 評論  (D) truth 真相。a piece of advice 為不可數名詞 advice 的量詞。",
    "vocabIndex": 6
  },
  {
    "q": "During the police investigation, the detective demanded nothing less than the whole ______ from all witnesses.",
    "options": [
      "command",
      "truth",
      "comment",
      "cure"
    ],
    "answer": 1,
    "cn": "在警方調查期間，刑警要求所有目擊證人必須全盤托出完整事實真相。 【選項解析】(A) command 命令  (B) comment 評論  (C) truth 真相  (D) cure 療法。the whole truth 表完整真相。",
    "vocabIndex": 7
  },
  {
    "q": "Modern doctors believe that early medical diagnosis is the best way to ______ certain types of illnesses.",
    "options": [
      "select",
      "omit",
      "avoid",
      "cure"
    ],
    "answer": 3,
    "cn": "現代醫生相信早期醫療診斷是徹底治癒某些特定疾病的最佳方式。 【選項解析】(A) cure 治癒  (B) omit 略去  (C) avoid 避免  (D) select 挑選。治癒疾病動詞用 cure illnesses。",
    "vocabIndex": 8
  },
  {
    "q": "The specialized cancer clinic offers advanced radiation ______ that targets tumors without harming surrounding tissues.",
    "options": [
      "command",
      "comment",
      "treatment",
      "advice"
    ],
    "answer": 2,
    "cn": "該專門癌症診所提供先進的放射線治療，能在不傷及周邊組織下對抗腫瘤。 【選項解析】(A) command 命令  (B) comment 評論  (C) advice 建議  (D) treatment 治療。radiation treatment 表放射線治療。",
    "vocabIndex": 9
  },
  {
    "q": "The university admissions board will ______ applicants based on both academic grades and community service.",
    "options": [
      "select",
      "avoid",
      "omit",
      "cure"
    ],
    "answer": 0,
    "cn": "大學招生委員會將根據學業成績與社區服務兩方面來選拔錄取申請者。 【選項解析】(A) select 挑選  (B) avoid 避免  (C) omit 省略  (D) cure 治癒。挑選錄取者用 select applicants。",
    "vocabIndex": 0
  },
  {
    "q": "To maintain dental health, dentists remind teenagers to ______ drinking sugary soda drinks between meals.",
    "options": [
      "select",
      "command",
      "advise",
      "avoid"
    ],
    "answer": 3,
    "cn": "為了維護牙齒健康，牙醫提醒青少年在兩餐之間避免飲用含糖汽水。 【選項解析】(A) select 挑選  (B) avoid 避免  (C) advise 建議  (D) command 指揮。avoid drinking 表避免飲用。",
    "vocabIndex": 1
  },
  {
    "q": "If you accidentally ______ your signature on the official contract, the document will become completely invalid.",
    "options": [
      "avoid",
      "select",
      "omit",
      "cure"
    ],
    "answer": 2,
    "cn": "如果你不小心在正式合約上遺漏了簽名，這份文件將完全失去效力。 【選項解析】(A) omit 遺漏  (B) select 挑選  (C) avoid 避免  (D) cure 治癒。omit signature 表漏簽名。",
    "vocabIndex": 2
  },
  {
    "q": "The captain had full ______ of the naval vessel and guided it safely through treacherous stormy waters.",
    "options": [
      "comment",
      "command",
      "truth",
      "advice"
    ],
    "answer": 1,
    "cn": "船長擁有軍艦的完全指揮權，並帶領它安全穿過危險的暴風雨水域。 【選項解析】(A) command 指揮權  (B) comment 評論  (C) truth 真相  (D) advice 建議。have full command of 表完全掌控指揮。",
    "vocabIndex": 3
  },
  {
    "q": "Receiving prompt emergency ______ after a venomous snakebite is critical for saving a patient's life.",
    "options": [
      "command",
      "comment",
      "treatment",
      "advice"
    ],
    "answer": 2,
    "cn": "在被毒蛇咬傷後迅速獲得即時緊急救治，對挽救病患生命至關重要。 【選項解析】(A) treatment 治療  (B) comment 評論  (C) command 命令  (D) advice 建議。emergency treatment 表緊急醫療救治。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "select": {
    "pos": "v.",
    "en_def": "to carefully choose as being the best or most suitable",
    "cn_def": "挑選；選拔；精選",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to carefully choose as being the best or most suitable",
        "cn_def": "挑選；選拔；精選"
      }
    ]
  },
  "avoid": {
    "pos": "v.",
    "en_def": "to keep away from or stop oneself from doing something",
    "cn_def": "避開；避免；預防",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep away from or stop oneself from doing something",
        "cn_def": "避開；避免；預防"
      }
    ]
  },
  "omit": {
    "pos": "v.",
    "en_def": "to leave out or exclude someone or something either intentionally or forgetfully",
    "cn_def": "省略；遺漏；略去",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave out or exclude someone or something either intentionally or forgetfully",
        "cn_def": "省略；遺漏；略去"
      }
    ]
  },
  "command": {
    "pos": "n. / v.",
    "en_def": "an authoritative order; to give an authoritative order to",
    "cn_def": "命令；指揮；控制",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an authoritative order; to give an authoritative order to",
        "cn_def": "命令；指揮；控制"
      }
    ]
  },
  "comment": {
    "pos": "n. / v.",
    "en_def": "a verbal or written remark expressing an opinion or reaction",
    "cn_def": "評論；意見；發表評論",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a verbal or written remark expressing an opinion or reaction",
        "cn_def": "評論；意見；發表評論"
      }
    ]
  },
  "advise": {
    "pos": "v.",
    "en_def": "to offer suggestions about the best course of action to someone",
    "cn_def": "建議；勸告；忠告",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to offer suggestions about the best course of action to someone",
        "cn_def": "建議；勸告；忠告"
      }
    ]
  },
  "advice": {
    "pos": "n.",
    "en_def": "guidance or recommendations offered with regard to prudent future action",
    "cn_def": "建議；忠告；勸告",
    "combined": [
      {
        "pos": "n.",
        "en_def": "guidance or recommendations offered with regard to prudent future action",
        "cn_def": "建議；忠告；勸告"
      }
    ]
  },
  "truth": {
    "pos": "n.",
    "en_def": "the quality or state of being in accordance with fact or reality",
    "cn_def": "真相；事實；真實",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality or state of being in accordance with fact or reality",
        "cn_def": "真相；事實；真實"
      }
    ]
  },
  "cure": {
    "pos": "n. / v.",
    "en_def": "a substance or treatment that ends a disease; to relieve a person of symptoms",
    "cn_def": "治癒方法；特效藥；治癒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a substance or treatment that ends a disease; to relieve a person of symptoms",
        "cn_def": "治癒方法；特效藥；治癒"
      }
    ]
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care given to a patient for an illness or injury",
    "cn_def": "治療；療程；處置",
    "combined": [
      {
        "pos": "n.",
        "en_def": "medical care given to a patient for an illness or injury",
        "cn_def": "治療；療程；處置"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
