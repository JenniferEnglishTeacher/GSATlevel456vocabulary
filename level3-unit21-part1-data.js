// Part 1 Quiz Data: apologize – emotional
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 21-1 - apologize – emotional",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "apologize",
    "pos": "v.",
    "cn_def": "道歉；認錯",
    "en_def": "to express regret or say sorry for doing something wrong",
    "sentence": "You really should {{BLANK}} to that man for stepping on his foot on the bus.",
    "cn": "你在公車上踩到了那位男士的腳，真的應該向他道歉。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能夠…的",
    "en_def": "having the ability, fitness, or quality necessary to do something",
    "sentence": "This company needs a {{BLANK}} person for the position as it requires strong leadership.",
    "cn": "這間公司需要一位有能力的人來擔任該職位，因為這需要堅強的領導力。"
  },
  {
    "word": "cheeks",
    "pos": "n.",
    "cn_def": "臉頰；面頰",
    "en_def": "either side of the face below the eye and above the jaw",
    "sentence": "Julie's nose and {{BLANK}} were bright red from being out in the freezing cold.",
    "cn": "茱莉因為在刺骨的嚴寒中待了太久，鼻子和臉頰都紅通通的。"
  },
  {
    "word": "Civil",
    "pos": "adj.",
    "cn_def": "公民的；民事的；有禮貌的",
    "en_def": "relating to ordinary citizens and their concerns; courteous and polite",
    "sentence": "{{BLANK}} servants are dedicated people who work for the government rather than the military.",
    "cn": "公務員是為政府而非軍方服務的盡責工作人員。"
  },
  {
    "word": "comfort",
    "pos": "n./v.",
    "cn_def": "舒適；安慰 (n.)；安慰 (v.)",
    "en_def": "a state of physical ease; to soothe someone in grief or distress",
    "sentence": "Guest {{BLANK}} is the top priority for all dedicated staff working at this luxury hotel.",
    "cn": "賓客的舒適感是這家豪華飯店所有盡責員工的最高準則。"
  },
  {
    "word": "countable",
    "pos": "adj.",
    "cn_def": "可數的",
    "en_def": "able to be counted, especially used of nouns in grammar",
    "sentence": "The English teacher asked students to point out all the {{BLANK}} nouns written on the board.",
    "cn": "英文老師要求學生指出黑板上寫的所有可數名詞。"
  },
  {
    "word": "dumped",
    "pos": "v./n.",
    "cn_def": "傾倒；丟下；拋棄 (v.)；垃圾場 (n.)",
    "en_def": "to deposit or discard carelessly; a site for depositing garbage",
    "sentence": "The careless children {{BLANK}} their heavy school bags and winter coats straight onto the living room floor.",
    "cn": "粗心大意的小孩一回到家就把沉重的書包和冬衣直接扔在客廳地板上。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "情緒的；情感的；激動的",
    "en_def": "relating to a person's feelings; expressing intense emotion",
    "sentence": "Brian demonstrated remarkable {{BLANK}} strength and patience when his beloved wife fell seriously ill.",
    "cn": "當心愛的妻子病重時，布萊恩展現了非凡的精神／情感力量與無比的耐心。"
  }
];

const MCQS = [
  {
    "q": "The store manager had to ______ to the angry shopper after an employee accidentally gave the wrong change.",
    "options": [
      "apologize",
      "comfort",
      "dump",
      "pity"
    ],
    "answer": 0,
    "cn": "在店員不小心找錯零錢後，店經理不得不向憤怒的顧客道歉。",
    "vocabIndex": 0
  },
  {
    "q": "She was so touched by the movie's tragic ending that warm tears began rolling down each ______.",
    "options": [
      "dump",
      "cheek",
      "comfort",
      "apology"
    ],
    "answer": 1,
    "cn": "她深受這部電影悲傷結局的感動，熱淚開始順著兩側臉頰滑落。",
    "vocabIndex": 2
  },
  {
    "q": "Despite facing severe financial hardships, Henry proved himself to be a highly ______ project leader.",
    "options": [
      "civil",
      "emotional",
      "capable",
      "countable"
    ],
    "answer": 2,
    "cn": "儘管面臨嚴峻的財務困境，亨利證明了自己是一位極具能力的專案領導人。",
    "vocabIndex": 1
  },
  {
    "q": "In times of deep grief and loneliness, she found spiritual ______ in volunteer work and prayer.",
    "options": [
      "cheek",
      "apology",
      "dump",
      "comfort"
    ],
    "answer": 3,
    "cn": "在深切的悲痛與孤獨之中，她在志工服務與祈禱中找到了心靈的慰藉。",
    "vocabIndex": 4
  },
  {
    "q": "After the destructive 19th-century ______ war, the divided nation slowly rebuilt its damaged infrastructure.",
    "options": [
      "civil",
      "capable",
      "emotional",
      "countable"
    ],
    "answer": 0,
    "cn": "在破壞性的19世紀內戰之後，這個分裂的國家緩慢地重建了受損的基礎設施。",
    "vocabIndex": 3
  },
  {
    "q": "English learners must recognize whether a noun like 'furniture' or 'water' is ______ or uncountable.",
    "options": [
      "emotional",
      "countable",
      "capable",
      "civil"
    ],
    "answer": 1,
    "cn": "英語學習者必須辨別像「家具」或「水」這樣的名詞是可數還是不可數。",
    "vocabIndex": 5
  },
  {
    "q": "It is illegal for factories to ______ hazardous chemical waste into public rivers and lakes.",
    "options": [
      "civilize",
      "apologize",
      "comfort",
      "dump"
    ],
    "answer": 3,
    "cn": "工廠將危險化學廢棄物傾倒至公共河流和湖泊中是違法的。",
    "vocabIndex": 6
  },
  {
    "q": "When speaking about her late grandparents, Julia became visibly ______ and had to pause briefly.",
    "options": [
      "civil",
      "countable",
      "emotional",
      "capable"
    ],
    "answer": 2,
    "cn": "當談起她過世的祖父母時，茱莉亞明顯變得情緒激動，不得不短暫停頓。",
    "vocabIndex": 7
  },
  {
    "q": "The candidate refused to ______ for his controversial remarks, claiming he spoke the absolute truth.",
    "options": [
      "comfort",
      "pity",
      "dump",
      "apologize"
    ],
    "answer": 3,
    "cn": "該候選人拒絕為其引發爭議的言論道歉，堅稱自己說的是絕對的事實。",
    "vocabIndex": 0
  },
  {
    "q": "The mother gently ______ed her frightened toddler after thunder shook the bedroom windows.",
    "options": [
      "comfort",
      "dump",
      "apologize",
      "injure"
    ],
    "answer": 0,
    "cn": "雷聲震動臥室窗戶後，母親溫柔地安撫了她受驚的小孩。",
    "vocabIndex": 4
  },
  {
    "q": "With years of rigorous training, the athlete is fully ______ of breaking the national marathon record.",
    "options": [
      "emotional",
      "civil",
      "capable",
      "countable"
    ],
    "answer": 2,
    "cn": "經過多年的嚴格訓練，這位運動員完全有能力打破全國馬拉松紀錄。",
    "vocabIndex": 1
  },
  {
    "q": "The harsh winter wind blew across the mountain pass, causing the hiker's ______s to sting painfully.",
    "options": [
      "dump",
      "cheek",
      "comfort",
      "apology"
    ],
    "answer": 1,
    "cn": "刺骨的冬風吹拂山隘，讓登山客的臉頰陣陣刺痛。",
    "vocabIndex": 2
  },
  {
    "q": "Even when discussing heated political topics, participants are expected to maintain ______ conduct.",
    "options": [
      "emotional",
      "capable",
      "civil",
      "countable"
    ],
    "answer": 2,
    "cn": "即使在討論激烈的政治話題時，與會者也被要求保持起碼的文明禮貌行為。",
    "vocabIndex": 3
  },
  {
    "q": "Old computers, toxic batteries, and plastic monitors were discarded at the regional electronic ______.",
    "options": [
      "dump",
      "comfort",
      "cheek",
      "apology"
    ],
    "answer": 0,
    "cn": "廢棄電腦、有毒電池和塑膠螢幕被丟棄在區域電子垃圾場。",
    "vocabIndex": 6
  },
  {
    "q": "Providing ______ support to victims of natural disasters is just as crucial as supplying physical aid.",
    "options": [
      "countable",
      "civil",
      "capable",
      "emotional"
    ],
    "answer": 3,
    "cn": "向自然災害的受害者提供情緒與心理支持，與提供物質援助同樣重要。",
    "vocabIndex": 7
  },
  {
    "q": "Teachers use colorful counters and picture cards to explain how ______ items can be grouped.",
    "options": [
      "capable",
      "countable",
      "emotional",
      "civil"
    ],
    "answer": 1,
    "cn": "老師們使用色彩繽紛的計數籌碼和圖片卡來說明可數物品如何進行分組。",
    "vocabIndex": 5
  },
  {
    "q": "He sent a handwritten letter of ______ along with fresh flowers to express his deepest regret.",
    "options": [
      "dump",
      "comfort",
      "cheek",
      "apology"
    ],
    "answer": 3,
    "cn": "他寄了一封手寫的道歉信並附上鮮花，以表達他最深切的歉意。"
  },
  {
    "q": "The baby had adorable chubby ______s that made everyone in the room smile warmly.",
    "options": [
      "comfort",
      "cheek",
      "dump",
      "civil"
    ],
    "answer": 1,
    "cn": "這嬰兒有著可愛圓滾滾的雙頰，讓房裡的每個人都露出了溫暖的笑容。",
    "vocabIndex": 2
  },
  {
    "q": "After years in the lab, she proved she was ______ of designing breakthrough renewable energy systems.",
    "options": [
      "civil",
      "countable",
      "capable",
      "emotional"
    ],
    "answer": 2,
    "cn": "在實驗室工作多年後，她證明了自己有能力設計突破性的再生能源系統。",
    "vocabIndex": 1
  },
  {
    "q": "A good mattress provides ergonomic support and unparalleled ______ for a restful night's sleep.",
    "options": [
      "comfort",
      "dump",
      "cheek",
      "apology"
    ],
    "answer": 0,
    "cn": "一張好床墊能提供符合人體工學的支撐以及無與倫比的舒適感，帶來寧靜的睡眠。",
    "vocabIndex": 4
  },
  {
    "q": "Passing the nationwide examination allows successful candidates to become lifetime ______ servants.",
    "options": [
      "emotional",
      "countable",
      "capable",
      "civil"
    ],
    "answer": 3,
    "cn": "通過全國性考試使成功的考生得以成為終身職公務員。",
    "vocabIndex": 3
  },
  {
    "q": "Tired of carrying the heavy load, the workers began to ______ the gravel onto the roadside.",
    "options": [
      "dump",
      "apologize",
      "comfort",
      "count"
    ],
    "answer": 0,
    "cn": "厭倦了搬運沉重負擔的工人們開始將碎石傾卸到路旁。",
    "vocabIndex": 6
  },
  {
    "q": "The documentary captured the intense ______ turmoil experienced by soldiers returning from battle.",
    "options": [
      "capable",
      "countable",
      "emotional",
      "civil"
    ],
    "answer": 2,
    "cn": "這部紀錄片捕捉了從戰場歸來的士兵所經歷的強烈內心情感混亂。",
    "vocabIndex": 7
  },
  {
    "q": "Unlike abstract ideas, physical objects like books, bottles, and tables are all ______ entities.",
    "options": [
      "civil",
      "countable",
      "capable",
      "emotional"
    ],
    "answer": 1,
    "cn": "與抽象概念不同，書籍、瓶子和桌子等實體物品全都是可計數的實體。",
    "vocabIndex": 5
  },
  {
    "q": "When greeted warmly by the host, the guest offered a gentle kiss on each ______.",
    "options": [
      "dump",
      "comfort",
      "cheek",
      "apology"
    ],
    "answer": 2,
    "cn": "受到主人熱情問候時，客人輕輕在對方的每側臉頰親了一下。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "apologize": {
    "pos": "v.",
    "en_def": "to express regret or say sorry for doing something wrong",
    "cn_def": "道歉；認錯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to express regret or say sorry for doing something wrong",
        "cn_def": "道歉；認錯"
      }
    ]
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability, fitness, or quality necessary to do something",
    "cn_def": "有能力的；能夠…的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having the ability, fitness, or quality necessary to do something",
        "cn_def": "有能力的；能夠…的"
      }
    ]
  },
  "cheek": {
    "pos": "n.",
    "en_def": "either side of the face below the eye and above the jaw",
    "cn_def": "臉頰；面頰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "either side of the face below the eye and above the jaw",
        "cn_def": "臉頰；面頰"
      }
    ]
  },
  "cheeks": {
    "pos": "n.",
    "en_def": "either side of the face below the eye and above the jaw",
    "cn_def": "臉頰；面頰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "either side of the face below the eye and above the jaw",
        "cn_def": "臉頰；面頰"
      }
    ]
  },
  "civil": {
    "pos": "adj.",
    "en_def": "relating to ordinary citizens and their concerns; courteous and polite",
    "cn_def": "公民的；民事的；有禮貌的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to ordinary citizens and their concerns; courteous and polite",
        "cn_def": "公民的；民事的；有禮貌的"
      }
    ]
  },
  "comfort": {
    "pos": "n./v.",
    "en_def": "a state of physical ease; to soothe someone in grief or distress",
    "cn_def": "舒適；安慰 (n.)；安慰 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a state of physical ease; to soothe someone in grief or distress",
        "cn_def": "舒適；安慰 (n.)；安慰 (v.)"
      }
    ]
  },
  "countable": {
    "pos": "adj.",
    "en_def": "able to be counted, especially used of nouns in grammar",
    "cn_def": "可數的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be counted, especially used of nouns in grammar",
        "cn_def": "可數的"
      }
    ]
  },
  "dumped": {
    "pos": "v./n.",
    "en_def": "to deposit or discard carelessly; a site for depositing garbage",
    "cn_def": "傾倒；丟下；拋棄 (v.)；垃圾場 (n.)",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to deposit or discard carelessly; a site for depositing garbage",
        "cn_def": "傾倒；丟下；拋棄 (v.)；垃圾場 (n.)"
      }
    ]
  },
  "dump": {
    "pos": "v./n.",
    "en_def": "to deposit or discard carelessly; a site for depositing garbage",
    "cn_def": "傾倒；丟下；拋棄 (v.)；垃圾場 (n.)",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to deposit or discard carelessly; a site for depositing garbage",
        "cn_def": "傾倒；丟下；拋棄 (v.)；垃圾場 (n.)"
      }
    ]
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "relating to a person's feelings; expressing intense emotion",
    "cn_def": "情緒的；情感的；激動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a person's feelings; expressing intense emotion",
        "cn_def": "情緒的；情感的；激動的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
