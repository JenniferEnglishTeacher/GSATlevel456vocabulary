// Part 5 Quiz Data: voter – zip
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 20-5 - voter – zip",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "voters",
    "pos": "n.",
    "cn_def": "選民；投票人（可數）",
    "en_def": "a person who has the legal right to vote or who votes in an election",
    "sentence": "The progressive presidential candidate held several public rallies to appeal to first-time young {{BLANK}}.",
    "cn": "這位進步派總統候選人舉行了數場公開造勢集會，以爭取首次投票的年輕選民。"
  },
  {
    "word": "vote",
    "pos": "v.",
    "cn_def": "投票；表決（動詞）",
    "en_def": "to give a vote; to express one's choice or opinion in an election",
    "sentence": "Every adult citizen living in a democratic society has the constitutional right to {{BLANK}} for government leaders.",
    "cn": "生活在民主社會中的每一位成年公民都擁有投票選出政府領導人的憲法權利。"
  },
  {
    "word": "vote",
    "pos": "n.",
    "cn_def": "選票；投票；表決權（可數/不可數）",
    "en_def": "a formal indication of a choice between two or more candidates or options",
    "sentence": "Citizens patiently stood in line for hours outside the local community school to cast their official {{BLANK}}.",
    "cn": "市民們耐心地在當地社區學校外排隊數小時，投下他們的正式選票。"
  },
  {
    "word": "weekly",
    "pos": "adj.",
    "cn_def": "每週的；每週一次的",
    "en_def": "done, produced, or occurring once a week or every week",
    "sentence": "All department managers must attend the regular {{BLANK}} conference every Monday morning at nine o'clock.",
    "cn": "所有部門經理都必須在每週一上午九點參加常規的每週會議。"
  },
  {
    "word": "weekly",
    "pos": "adv.",
    "cn_def": "每週地；每星期一次地",
    "en_def": "once a week; by the week",
    "sentence": "Part-time student workers at the university bookstore are very pleased to receive their paychecks {{BLANK}}.",
    "cn": "在大學書店打工的工讀生很高興能夠按週領取他們的薪水。"
  },
  {
    "word": "monthly",
    "pos": "adj./adv.",
    "cn_def": "每月的；按月地；每月一次的",
    "en_def": "done, produced, occurring, or payable once every month",
    "sentence": "Tenants living in the downtown apartment building are required to pay their fixed {{BLANK}} rent on the first day of each month.",
    "cn": "住在市中心公寓的房客必須在每個月的第一天繳納固定的每月房租。"
  },
  {
    "word": "yearly",
    "pos": "adj./adv.",
    "cn_def": "每年的；按年地；一年一度的",
    "en_def": "happening, done, or produced once a year or every year; annual",
    "sentence": "The board of directors held their {{BLANK}} shareholder meeting to review the company's financial performance.",
    "cn": "董事會舉行了一年一度的股東大會，審查公司的財務績效。"
  },
  {
    "word": "widen",
    "pos": "v.",
    "cn_def": "變寬；加寬；擴大；拓寬（動詞）",
    "en_def": "to make or become wider; to expand or broaden",
    "sentence": "The municipal city council decided to {{BLANK}} the narrow main road to reduce morning traffic congestion.",
    "cn": "市議會決定拓寬狹窄的幹道，以減緩早晨的交通擁塞。"
  },
  {
    "word": "zipper",
    "pos": "n.",
    "cn_def": "拉鍊（可數）",
    "en_def": "a device consisting of two flexible strips of metal or plastic with interlocking projections",
    "sentence": "The sturdy metal {{BLANK}} on my winter parka got stuck because a loose thread was caught inside it.",
    "cn": "我的冬季厚大衣上結實的金屬拉鍊卡住了，因為有一條鬆脫的線頭被夾在裡面。"
  },
  {
    "word": "zip",
    "pos": "v.",
    "cn_def": "拉上拉鍊；飛速疾行（動詞）",
    "en_def": "to fasten or unfasten with a zipper; to move at high speed",
    "sentence": "It was so freezing cold and windy outside that the mother told her little boy to {{BLANK}} up his jacket tightly.",
    "cn": "外面寒冷又颳風，母親叫她的小男孩把夾克拉鍊緊緊拉上。"
  }
];

const MCQS = [
  {
    "q": "The narrow coastal road was too dangerous, so the government decided to ______ it to two lanes.",
    "options": [
      "vote",
      "zip",
      "widen",
      "monthly"
    ],
    "answer": 2,
    "cn": "狹窄的沿海公路太過危險，因此政府決定將其拓寬為雙線道。",
    "vocabIndex": 7
  },
  {
    "q": "The metal ______ on his travel backpack broke, so he could not close the main compartment.",
    "options": [
      "voter",
      "zipper",
      "vote",
      "monthly"
    ],
    "answer": 1,
    "cn": "他旅行背包上的金屬拉鍊壞了，所以他無法關閉主隔層。",
    "vocabIndex": 8
  },
  {
    "q": "All registered ______ are encouraged to participate and cast their ballots in tomorrow's election.",
    "options": [
      "voters",
      "zippers",
      "votes",
      "monthlies"
    ],
    "answer": 0,
    "cn": "當局鼓勵所有登記選民參與並在明天的選舉中投下選票。",
    "vocabIndex": 0
  },
  {
    "q": "The new bill was successfully passed after winning a clear majority ______ in the national parliament.",
    "options": [
      "zipper",
      "voter",
      "monthly",
      "vote"
    ],
    "answer": 3,
    "cn": "該新法案在獲得國家議會明確的多數表決／贊成票後順利通過。",
    "vocabIndex": 1
  },
  {
    "q": "Our department holds a ______ staff meeting every Monday morning to review weekly progress.",
    "options": [
      "zipper",
      "widen",
      "weekly",
      "voter"
    ],
    "answer": 2,
    "cn": "我們部門每週一上午舉行一次每週的員工會議，檢討每週進度。",
    "vocabIndex": 3
  },
  {
    "q": "Tenants living in this residential community are required to pay their apartment rent ______.",
    "options": [
      "voter",
      "widen",
      "zipper",
      "monthly"
    ],
    "answer": 3,
    "cn": "住在這個住宅小區的房客被要求按月繳納公寓租金。",
    "vocabIndex": 5
  },
  {
    "q": "Adult citizens over the age of fifty are strongly advised to undergo a comprehensive ______ physical exam.",
    "options": [
      "yearly",
      "widen",
      "zipper",
      "voter"
    ],
    "answer": 0,
    "cn": "強烈建議五十歲以上的成年公民每年接受一次全面的年度／每年的體檢。",
    "vocabIndex": 6
  },
  {
    "q": "The icy wind was blowing hard, so Mom told her daughter to ______ up her warm coat tightly.",
    "options": [
      "widen",
      "zip",
      "vote",
      "monthly"
    ],
    "answer": 1,
    "cn": "寒風凜冽，媽媽叫女兒把保暖大衣緊緊拉上拉鍊。",
    "vocabIndex": 9
  },
  {
    "q": "Every adult citizen in a free country has the democratic right to ______ for their preferred leaders.",
    "options": [
      "zip",
      "widen",
      "vote",
      "yearly"
    ],
    "answer": 2,
    "cn": "自由國家中的每一位成年公民都有民主權利投票選出他們心儀的領導人。",
    "vocabIndex": 1
  },
  {
    "q": "Traveling to distant countries and experiencing new cultures can greatly ______ your horizons.",
    "options": [
      "vote",
      "widen",
      "zip",
      "weekly"
    ],
    "answer": 1,
    "cn": "去遙遠的國家旅行並體驗新文化，能大大開拓你的眼界。",
    "vocabIndex": 7
  },
  {
    "q": "The political candidate is working hard to win the trust and confidence of undecided ______.",
    "options": [
      "monthlies",
      "zippers",
      "votes",
      "voters"
    ],
    "answer": 3,
    "cn": "該政治候選人正在努力贏得尚未決定意向的選民的信任與信心。",
    "vocabIndex": 0
  },
  {
    "q": "Be careful when closing your luggage so that you don't break the plastic ______.",
    "options": [
      "zipper",
      "vote",
      "voter",
      "monthly"
    ],
    "answer": 0,
    "cn": "關閉行李箱時請小心，以免弄壞塑膠拉鍊。",
    "vocabIndex": 8
  },
  {
    "q": "Commuters in the capital can save significant money by buying an unlimited subway ______ pass.",
    "options": [
      "widen",
      "monthly",
      "voter",
      "zipper"
    ],
    "answer": 1,
    "cn": "首都的通勤族可以透過購買無限次搭乘的捷運月票節省大筆費用。",
    "vocabIndex": 5
  },
  {
    "q": "The popular entertainment magazine is published ______ and sold at newsstands every Friday morning.",
    "options": [
      "voter",
      "widen",
      "zip",
      "weekly"
    ],
    "answer": 3,
    "cn": "這本熱門娛樂雜誌每週發行一次，並於每週五早晨在書報攤販售。",
    "vocabIndex": 3
  },
  {
    "q": "The corporation reported a record-breaking ______ net profit during the annual stockholders' meeting.",
    "options": [
      "zipper",
      "widen",
      "yearly",
      "voter"
    ],
    "answer": 2,
    "cn": "該公司在年度股東大會上公佈了創紀錄的全年度淨利潤。",
    "vocabIndex": 6
  },
  {
    "q": "The sports car ______ down the open highway at an astonishing speed of 150 kilometers per hour.",
    "options": [
      "zipped",
      "voted",
      "widened",
      "monthlied"
    ],
    "answer": 0,
    "cn": "這輛跑車在開闊的公路上以每小時150公里的驚人速度飛馳。",
    "vocabIndex": 9
  },
  {
    "q": "The parliamentary members decided to ______ against the controversial tax increase bill.",
    "options": [
      "weekly",
      "widen",
      "zip",
      "vote"
    ],
    "answer": 3,
    "cn": "國會議員們決定投票反對這項具爭議的增稅法案。",
    "vocabIndex": 1
  },
  {
    "q": "As inflation persisted, the economic gap between the wealthy and the poor continued to ______.",
    "options": [
      "widen",
      "vote",
      "zip",
      "monthly"
    ],
    "answer": 0,
    "cn": "隨著通膨持續，貧富之間的經濟差距繼續擴大。",
    "vocabIndex": 7
  },
  {
    "q": "He reached into his pocket to retrieve his ballot before casting his official ______.",
    "options": [
      "zipper",
      "vote",
      "voter",
      "monthly"
    ],
    "answer": 1,
    "cn": "他在投下正式選票之前，伸手進口袋拿出他的投票單。",
    "vocabIndex": 1
  },
  {
    "q": "The leather jacket's front ______ was stuck because a loose thread was trapped in the teeth.",
    "options": [
      "voter",
      "vote",
      "zipper",
      "monthly"
    ],
    "answer": 2,
    "cn": "皮夾克前面的拉鍊卡住了，因為有一條鬆脫的線頭被夾在齒縫裡。",
    "vocabIndex": 8
  },
  {
    "q": "The company calculates its staff sales performances on a rigorous ______ basis every four weeks.",
    "options": [
      "voter",
      "widen",
      "zipper",
      "monthly"
    ],
    "answer": 3,
    "cn": "該公司每四周以嚴格的每月基準計算其員工的銷售業績。",
    "vocabIndex": 5
  },
  {
    "q": "Part-time assistants at the university library are paid ______ on Friday afternoons.",
    "options": [
      "weekly",
      "widen",
      "zipper",
      "voter"
    ],
    "answer": 0,
    "cn": "大學圖書館的兼職助理在週五下午按週領取薪水。",
    "vocabIndex": 3
  },
  {
    "q": "Our family holds a joyful ______ reunion during the spring holidays to celebrate together.",
    "options": [
      "widen",
      "yearly",
      "zipper",
      "voter"
    ],
    "answer": 1,
    "cn": "我們全家在春假期間舉行歡樂的年度／每年的家庭團聚以共同慶祝。",
    "vocabIndex": 6
  },
  {
    "q": "The young girl quickly ______ up her warm sweater as the temperature dropped sharply.",
    "options": [
      "voted",
      "widened",
      "zipped",
      "monthlied"
    ],
    "answer": 2,
    "cn": "隨著氣溫急劇下降，小女孩迅速拉上了她的保暖毛衣拉鍊。",
    "vocabIndex": 9
  },
  {
    "q": "To improve safety for pedestrians, the city engineer planned to ______ the sidewalks downtown.",
    "options": [
      "weekly",
      "vote",
      "zip",
      "widen"
    ],
    "answer": 3,
    "cn": "為了提高行人的安全，市府工程師計畫拓寬市中心的人行道。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "voters": {
    "pos": "n.",
    "en_def": "a person who has the legal right to vote or who votes in an election",
    "cn_def": "選民；投票人（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who has the legal right to vote or who votes in an election",
        "cn_def": "選民；投票人（可數）"
      }
    ]
  },
  "voter": {
    "pos": "n.",
    "en_def": "a person who has the legal right to vote or who votes in an election",
    "cn_def": "選民；投票人（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who has the legal right to vote or who votes in an election",
        "cn_def": "選民；投票人（可數）"
      }
    ]
  },
  "vote": {
    "pos": "v.",
    "en_def": "to give a vote; to express one's choice or opinion in an election",
    "cn_def": "投票；表決（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a vote; to express one's choice or opinion in an election",
        "cn_def": "投票；表決（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a formal indication of a choice between two or more candidates or options",
        "cn_def": "選票；投票；表決權（可數/不可數）"
      }
    ]
  },
  "weekly": {
    "pos": "adj.",
    "en_def": "done, produced, or occurring once a week or every week",
    "cn_def": "每週的；每週一次的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done, produced, or occurring once a week or every week",
        "cn_def": "每週的；每週一次的"
      },
      {
        "pos": "adv.",
        "en_def": "once a week; by the week",
        "cn_def": "每週地；每星期一次地"
      }
    ]
  },
  "monthly": {
    "pos": "adj./adv.",
    "en_def": "done, produced, occurring, or payable once every month",
    "cn_def": "每月的；按月地；每月一次的",
    "combined": [
      {
        "pos": "adj./adv.",
        "en_def": "done, produced, occurring, or payable once every month",
        "cn_def": "每月的；按月地；每月一次的"
      }
    ]
  },
  "yearly": {
    "pos": "adj./adv.",
    "en_def": "happening, done, or produced once a year or every year; annual",
    "cn_def": "每年的；按年地；一年一度的",
    "combined": [
      {
        "pos": "adj./adv.",
        "en_def": "happening, done, or produced once a year or every year; annual",
        "cn_def": "每年的；按年地；一年一度的"
      }
    ]
  },
  "widen": {
    "pos": "v.",
    "en_def": "to make or become wider; to expand or broaden",
    "cn_def": "變寬；加寬；擴大；拓寬（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become wider; to expand or broaden",
        "cn_def": "變寬；加寬；擴大；拓寬（動詞）"
      }
    ]
  },
  "zipper": {
    "pos": "n.",
    "en_def": "a device consisting of two flexible strips of metal or plastic with interlocking projections",
    "cn_def": "拉鍊（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device consisting of two flexible strips of metal or plastic with interlocking projections",
        "cn_def": "拉鍊（可數）"
      }
    ]
  },
  "zip": {
    "pos": "v.",
    "en_def": "to fasten or unfasten with a zipper; to move at high speed",
    "cn_def": "拉上拉鍊；飛速疾行（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to fasten or unfasten with a zipper; to move at high speed",
        "cn_def": "拉上拉鍊；飛速疾行（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
