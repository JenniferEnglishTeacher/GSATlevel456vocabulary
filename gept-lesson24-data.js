// Lesson 24 Quiz Data: Public Service, Academia & Cultural Professions
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 24 - Public Service, Academia & Cultural Professions",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "musician",
    "pos": "n.",
    "cn_def": "音樂家",
    "en_def": "a person who plays a musical instrument or writes music",
    "sentence": "The talented classical {{BLANK}} composed an original piano sonata, and she performed it with great passion at the national theater.",
    "cn": "這位才華洋溢的古典音樂家創作了一首原創鋼琴奏鳴曲，她在國家劇院充滿激情地演奏了這首曲子。"
  },
  {
    "word": "priest",
    "pos": "n.",
    "cn_def": "神父；牧師",
    "en_def": "an ordained minister of the Christian Church having religious authority",
    "sentence": "Every Sunday morning, the elderly Catholic {{BLANK}} gave an inspiring sermon about compassion to all believers in the church.",
    "cn": "每逢週日早晨，這位年邁的天主教神父都會在教堂向全體信徒發表關於慈悲的激勵人心講道。"
  },
  {
    "word": "painter",
    "pos": "n.",
    "cn_def": "畫家；油漆匠",
    "en_def": "an artist who paints pictures; a person who paints buildings",
    "sentence": "The French Impressionist {{BLANK}} set up his easel in the flower garden to capture the morning sunlight on his canvas.",
    "cn": "這位法國印象派畫家在花園中架起畫架，試圖在畫布上捕捉晨曦的光影變化。"
  },
  {
    "word": "photographer",
    "pos": "n.",
    "cn_def": "攝影師",
    "en_def": "a person who takes photographs, either as a job or hobby",
    "sentence": "The wildlife {{BLANK}} waited patiently behind camouflage netting for six hours to take pictures of rare mountain eagles.",
    "cn": "這位野生動物攝影師在偽裝網後耐心等待了六個小時，只為拍攝稀有山雕的照片。"
  },
  {
    "word": "policeman",
    "pos": "n.",
    "cn_def": "警察；警員",
    "en_def": "a male member of a police force",
    "sentence": "The brave traffic {{BLANK}} stood at the busy downtown intersection directing vehicles after the traffic lights broke down.",
    "cn": "在紅綠燈故障後，英勇的交通警察站在繁忙的市中心十字路口指揮車輛行進。"
  },
  {
    "word": "president",
    "pos": "n.",
    "cn_def": "總統；總裁；理事長",
    "en_def": "the elected head of a republican state; leader of an organization",
    "sentence": "The newly elected national {{BLANK}} delivered a hopeful inaugural address promising to improve education and reduce unemployment.",
    "cn": "新當選的國家總統發表了充滿希望的就職演說，承諾改善教育並降低失業率。"
  },
  {
    "word": "principal",
    "pos": "n. / adj.",
    "cn_def": "校長；主要的",
    "en_def": "the head of a school; first in order of importance",
    "sentence": "During the morning assembly, the school {{BLANK}} awarded medals to outstanding students who won the regional science contest.",
    "cn": "在晨會期間，學校校長向贏得區域科學競賽的優秀學生頒發了獎牌。"
  },
  {
    "word": "professor",
    "pos": "n.",
    "cn_def": "教授",
    "en_def": "a university teacher of the highest academic rank",
    "sentence": "The history {{BLANK}} delivered an engaging lecture on ancient Egyptian pyramids and answered questions from curious students.",
    "cn": "歷史系教授發表了一場關於古埃及金字塔的生動演講，並回答了好奇學生的提問。"
  },
  {
    "word": "reporter",
    "pos": "n.",
    "cn_def": "記者；通訊員",
    "en_def": "a person who reports news or conducts interviews for television or press",
    "sentence": "The television news {{BLANK}} held a microphone in the pouring rain, broadcasting live updates about the approaching typhoon.",
    "cn": "電視新聞記者在傾盆大雨中手持麥克風，現場直播關於颱風逼近的最新動態。"
  },
  {
    "word": "sailor",
    "pos": "n.",
    "cn_def": "水手；海員",
    "en_def": "a person who works as a member of the crew of a ship or boat",
    "sentence": "The young naval {{BLANK}} tightened the thick ropes on deck and looked out across the boundless ocean toward the horizon.",
    "cn": "年輕的海軍水手緊緊拉繫甲板上的粗繩，放眼望向地平線對面的無垠大洋。"
  }
];

const MCQS = [
  {
    "q": "The orchestra invited a renowned guest ______ to perform a stunning violin solo during their anniversary concert.",
    "options": [
      "sailor",
      "policeman",
      "musician",
      "priest"
    ],
    "answer": 2,
    "cn": "管弦樂團邀請了一位著名客座音樂家，在他們的週年音樂會上演奏了精彩的小提琴獨奏。 【選項解析】(A) sailor 水手 (B) musician 音樂家 (C) policeman 警察 (D) priest 神父。演奏小提琴者為 musician。",
    "vocabIndex": 0
  },
  {
    "q": "The village gathered inside the historic stone chapel where the local ______ offered comforting prayers for the sick.",
    "options": [
      "photographer",
      "priest",
      "president",
      "painter"
    ],
    "answer": 1,
    "cn": "村民聚集在歷史悠久的石造小教堂內，當地的神父為病患獻上撫慰人心的祈禱。 【選項解析】(A) priest 神父 (B) photographer 攝影師 (C) president 總統 (D) painter 畫家。在教堂帶領祈禱者為 priest。",
    "vocabIndex": 1
  },
  {
    "q": "The renowned landscape ______ dipped his fine brush into watercolor and painted green hills overlooking the river.",
    "options": [
      "principal",
      "policeman",
      "professor",
      "painter"
    ],
    "answer": 3,
    "cn": "著名的風景畫家將細毛畫筆浸入水彩中，畫出了俯瞰河流的青山綠水。 【選項解析】(A) principal 校長 (B) policeman (C) painter 畫家 (D) professor。以水彩揮毫畫畫者為 painter。",
    "vocabIndex": 2
  },
  {
    "q": "A professional fashion ______ adjusted the studio lighting to capture high-resolution portraits for the magazine cover.",
    "options": [
      "photographer",
      "reporter",
      "priest",
      "sailor"
    ],
    "answer": 0,
    "cn": "專業時尚攝影師調整了攝影棚燈光，為雜誌封面拍攝高解析度的肖像照。 【選項解析】(A) sailor (B) reporter (C) priest (D) photographer 攝影師。調整燈光拍攝雜誌封面照者為 photographer。",
    "vocabIndex": 3
  },
  {
    "q": "When a pedestrian lost her purse on the street, an alert ______ helped her track down the suspect immediately.",
    "options": [
      "musician",
      "painter",
      "professor",
      "policeman"
    ],
    "answer": 3,
    "cn": "當一名行人在街上遺失錢包時，一名警覺的警員立即幫助她追查嫌疑人。 【選項解析】(A) musician (B) policeman 警察 (C) professor (D) painter。維持治安、追查嫌犯者為 policeman。",
    "vocabIndex": 4
  },
  {
    "q": "Citizens crowded around their television sets to watch the state ______ announce the signing of the peace treaty.",
    "options": [
      "president",
      "sailor",
      "photographer",
      "priest"
    ],
    "answer": 0,
    "cn": "民眾擠在電視機前，觀看國家總統宣布簽署和平條約。 【選項解析】(A) president 總統 (B) sailor (C) photographer (D) priest。簽署國家和約者為 state president。",
    "vocabIndex": 5
  },
  {
    "q": "At the beginning of the new academic year, the elementary school ______ welcomed new first graders at the school gate.",
    "options": [
      "painter",
      "musician",
      "principal",
      "reporter"
    ],
    "answer": 2,
    "cn": "在新學年開始時，小學校長在校門口迎接新入學的一年級新生。 【選項解析】(A) painter (B) musician (C) principal 校長 (D) reporter。迎接入學校園之長官為 school principal。",
    "vocabIndex": 6
  },
  {
    "q": "The university ______ published a groundbreaking academic paper on renewable solar energy in a prestigious scientific journal.",
    "options": [
      "sailor",
      "professor",
      "policeman",
      "priest"
    ],
    "answer": 1,
    "cn": "這位大學教授在頂尖科學期刊上發表了一篇關於可再生太陽能的開創性學術論文。 【選項解析】(A) professor 教授 (B) sailor (C) policeman (D) priest。發表科學論文的大學教員為 professor。",
    "vocabIndex": 7
  },
  {
    "q": "The sports news ______ interviewed the marathon champion immediately after he crossed the finish line in record time.",
    "options": [
      "painter",
      "principal",
      "reporter",
      "president"
    ],
    "answer": 2,
    "cn": "體育新聞記者在馬拉松冠軍以破紀錄時間衝過終點線後立即對他進行了採訪。 【選項解析】(A) painter (B) reporter 記者 (C) principal (D) president。新聞採訪者為 reporter。",
    "vocabIndex": 8
  },
  {
    "q": "During the fierce ocean storm, every experienced ______ wore a safety harness while securing loose cargo on deck.",
    "options": [
      "sailor",
      "photographer",
      "professor",
      "musician"
    ],
    "answer": 0,
    "cn": "在猛烈的海洋風暴中，每位經驗豐富的水手在甲板上固定鬆動貨物時都繫著安全帶。 【選項解析】(A) musician (B) photographer (C) professor (D) sailor 水手。船艦甲板工作人員為 sailor。",
    "vocabIndex": 9
  },
  {
    "q": "Jazz and classical ______ spend years mastering their instruments and practicing complex musical scales every day.",
    "options": [
      "policemen",
      "musicians",
      "priests",
      "sailors"
    ],
    "answer": 1,
    "cn": "爵士與古典音樂家耗費數年時間精通樂器，每天練習複雜的音樂音階。 【選項解析】(A) musicians 音樂家 (B) policemen (C) priests (D) sailors。精通樂器音階者為 musicians。",
    "vocabIndex": 0
  },
  {
    "q": "The parish ______ conducted wedding vows for the young couple in front of their tearful relatives and close friends.",
    "options": [
      "painter",
      "president",
      "photographer",
      "priest"
    ],
    "answer": 3,
    "cn": "教區神父在新人熱淚盈眶的親戚和摯友面前主持了他們的結婚誓詞。 【選項解析】(A) painter (B) priest 神父 (C) photographer (D) president。主持教會婚禮者為 parish priest。",
    "vocabIndex": 1
  },
  {
    "q": "Before remodeling the living room, we hired an interior ______ to paint all the walls with warm pastel tones.",
    "options": [
      "professor",
      "painter",
      "sailor",
      "principal"
    ],
    "answer": 1,
    "cn": "在改造客廳之前，我們僱用了一位室內油漆工用溫暖的粉彩色調粉刷所有牆壁。 【選項解析】(A) professor (B) sailor (C) painter 油漆工 (D) principal。粉刷牆壁者為 painter。",
    "vocabIndex": 2
  },
  {
    "q": "An aerial ______ flew in a small helicopter above the grand canyon to capture panoramic sunrise photographs.",
    "options": [
      "priest",
      "policeman",
      "musician",
      "photographer"
    ],
    "answer": 3,
    "cn": "一位空拍攝影師乘坐小型直升機飛越大峽谷，捕捉日出的全景照片。 【選項解析】(A) photographer 攝影師 (B) policeman (C) musician (D) priest。拍攝日出照片者為 photographer。",
    "vocabIndex": 3
  },
  {
    "q": "An undercover ______ arrested two car thieves who had broken into vehicles parked outside the shopping mall.",
    "options": [
      "policeman",
      "professor",
      "reporter",
      "painter"
    ],
    "answer": 0,
    "cn": "一名便衣警察逮捕了兩名闖入商場外停放車輛行竊的汽車竊賊。 【選項解析】(A) reporter (B) professor (C) policeman 警察 (D) painter。undercover policeman（便衣警察）。",
    "vocabIndex": 4
  },
  {
    "q": "The company ______ delivered a strategic speech to shareholders, explaining plans to expand operations into Southeast Asia.",
    "options": [
      "sailor",
      "principal",
      "president",
      "musician"
    ],
    "answer": 2,
    "cn": "公司總裁向股東發表了戰略演講，解釋進軍東南亞市場的業務拓展計畫。 【選項解析】(A) sailor (B) president 總裁 (C) principal (D) musician。company president（公司總裁/董事長）。",
    "vocabIndex": 5
  },
  {
    "q": "Parents scheduled an appointment with the high school ______ to discuss the school's new anti-bullying policy.",
    "options": [
      "principal",
      "photographer",
      "priest",
      "painter"
    ],
    "answer": 0,
    "cn": "家長與高中校長約定面談時間，以討論學校最新的反霸凌政策。 【選項解析】(A) painter (B) photographer (C) priest (D) principal 校長。掌管學校政策之代表為 principal。",
    "vocabIndex": 6
  },
  {
    "q": "The chemistry ______ spent office hours guiding graduate students through their laboratory experiments and thesis research.",
    "options": [
      "reporter",
      "policeman",
      "sailor",
      "professor"
    ],
    "answer": 3,
    "cn": "化學教授利用課餘諮詢時間指導研究生的實驗室實驗和學位論文研究。 【選項解析】(A) professor 教授 (B) policeman (C) sailor (D) reporter。指導研究生論文者為 professor。",
    "vocabIndex": 7
  },
  {
    "q": "An investigative ______ uncovered secret financial records showing that factory owners had hidden environmental damages.",
    "options": [
      "musician",
      "priest",
      "reporter",
      "painter"
    ],
    "answer": 2,
    "cn": "一位調查記者揭露了秘密財務記錄，顯示工廠負責人隱瞞了環境損害真相。 【選項解析】(A) musician (B) reporter 記者 (C) priest (D) painter。investigative reporter（調查記者）。",
    "vocabIndex": 8
  },
  {
    "q": "The merchant vessel employed thirty crew members, and each seasoned ______ took turns keeping watch on the bridge.",
    "options": [
      "photographer",
      "sailor",
      "principal",
      "president"
    ],
    "answer": 1,
    "cn": "這艘商船僱用了三十名船員，每位經驗豐富的水手輪流在艦橋上值勤望遠。 【選項解析】(A) photographer (B) principal (C) sailor 水手 (D) president。商船船員為 sailor。",
    "vocabIndex": 9
  },
  {
    "q": "Street ______ played lively acoustic tunes in the public square, and passing tourists dropped coins into their guitar cases.",
    "options": [
      "policemen",
      "professors",
      "priests",
      "musicians"
    ],
    "answer": 3,
    "cn": "街頭音樂家在公共廣場演奏輕快的民謠曲調，路過的遊客紛紛將硬幣投進他們的吉他琴盒中。 【選項解析】(A) musicians 音樂家 (B) professors (C) priests (D) policemen。street musicians 指街頭街頭藝人/音樂家。",
    "vocabIndex": 0
  },
  {
    "q": "The kind ______ visited elderly residents in the nursing home every Friday, offering blessings and cheerful company.",
    "options": [
      "sailor",
      "painter",
      "priest",
      "reporter"
    ],
    "answer": 2,
    "cn": "慈祥的神父每週五探訪安養院的年長居民，為他們獻上祝福與歡樂的陪伴。 【選項解析】(A) sailor (B) painter (C) reporter (D) priest 神父。給予宗教祝福者為 priest。",
    "vocabIndex": 1
  },
  {
    "q": "The famous oil ______ spent forty years creating realistic portraits of common working people in rural villages.",
    "options": [
      "painter",
      "photographer",
      "policeman",
      "principal"
    ],
    "answer": 0,
    "cn": "這位著名的油畫家花了四十年時間創作鄉村普通勞動人民的寫實肖像畫。 【選項解析】(A) photographer (B) painter 畫家 (C) policeman (D) principal。oil painter（油畫家）。",
    "vocabIndex": 2
  },
  {
    "q": "The sports ______ stood near the sidelines taking rapid burst shots of the gymnasts performing aerial flips.",
    "options": [
      "president",
      "photographer",
      "professor",
      "priest"
    ],
    "answer": 1,
    "cn": "體育攝影師站在場邊連續高速快門連拍體操運動員做空中翻滾的畫面。 【選項解析】(A) photographer 攝影師 (B) president (C) professor (D) priest。高速快門拍攝運動員者為 photographer。",
    "vocabIndex": 3
  },
  {
    "q": "A bicycle ______ patrolled the park paths each afternoon to ensure visitors obeyed safety regulations.",
    "options": [
      "sailor",
      "musician",
      "policeman",
      "reporter"
    ],
    "answer": 2,
    "cn": "一名騎單車的巡警每天下午在公園小徑上巡邏，以確保遊客遵守安全規定。 【選項解析】(A) sailor (B) musician (C) policeman 警察 (D) reporter。bicycle policeman（自行車巡警）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "musician": {
    "pos": "n.",
    "en_def": "a person who plays a musical instrument or writes music",
    "cn_def": "音樂家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who plays a musical instrument or writes music",
        "cn_def": "音樂家"
      }
    ]
  },
  "priest": {
    "pos": "n.",
    "en_def": "an ordained minister of the Christian Church having religious authority",
    "cn_def": "神父；牧師",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ordained minister of the Christian Church having religious authority",
        "cn_def": "神父；牧師"
      }
    ]
  },
  "painter": {
    "pos": "n.",
    "en_def": "an artist who paints pictures; a person who paints buildings",
    "cn_def": "畫家；油漆匠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an artist who paints pictures; a person who paints buildings",
        "cn_def": "畫家；油漆匠"
      }
    ]
  },
  "photographer": {
    "pos": "n.",
    "en_def": "a person who takes photographs, either as a job or hobby",
    "cn_def": "攝影師",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes photographs, either as a job or hobby",
        "cn_def": "攝影師"
      }
    ]
  },
  "policeman": {
    "pos": "n.",
    "en_def": "a male member of a police force",
    "cn_def": "警察；警員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a male member of a police force",
        "cn_def": "警察；警員"
      }
    ]
  },
  "president": {
    "pos": "n.",
    "en_def": "the elected head of a republican state; leader of an organization",
    "cn_def": "總統；總裁；理事長",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the elected head of a republican state; leader of an organization",
        "cn_def": "總統；總裁；理事長"
      }
    ]
  },
  "principal": {
    "pos": "n. / adj.",
    "en_def": "the head of a school; first in order of importance",
    "cn_def": "校長；主要的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "the head of a school; first in order of importance",
        "cn_def": "校長；主要的"
      }
    ]
  },
  "professor": {
    "pos": "n.",
    "en_def": "a university teacher of the highest academic rank",
    "cn_def": "教授",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a university teacher of the highest academic rank",
        "cn_def": "教授"
      }
    ]
  },
  "reporter": {
    "pos": "n.",
    "en_def": "a person who reports news or conducts interviews for television or press",
    "cn_def": "記者；通訊員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who reports news or conducts interviews for television or press",
        "cn_def": "記者；通訊員"
      }
    ]
  },
  "sailor": {
    "pos": "n.",
    "en_def": "a person who works as a member of the crew of a ship or boat",
    "cn_def": "水手；海員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who works as a member of the crew of a ship or boat",
        "cn_def": "水手；海員"
      }
    ]
  },
  "musicians": {
    "pos": "",
    "en_def": "",
    "cn_def": "音樂家",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "音樂家"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
