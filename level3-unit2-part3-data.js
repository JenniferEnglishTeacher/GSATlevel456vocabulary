// Part 3 Quiz Data: jail – passage
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 2-3 - jail – passage",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "jail",
    "pos": "n.",
    "cn_def": "監獄；看守所（可數/不可數）",
    "en_def": "a place for the confinement of people convicted of or awaiting trial for a crime",
    "sentence": "The convicted bank robber was sentenced to spend five long years in {{BLANK}} for his violent crimes.",
    "cn": "那名被定罪的銀行搶犯因其暴力罪行被判處在監獄中度過漫長的五年。"
  },
  {
    "word": "jail",
    "pos": "v.",
    "cn_def": "監禁；關押；下獄（動詞）",
    "en_def": "to put someone in prison or jail as a legal punishment",
    "sentence": "If a corrupt official is found guilty of accepting massive bribes, the judge will certainly {{BLANK}} him.",
    "cn": "如果貪腐官員被判定收受巨額賄賂有罪，法官肯定會將他收押下獄。"
  },
  {
    "word": "jet",
    "pos": "n.",
    "cn_def": "噴射客機；噴射機；噴射氣流（可數）",
    "en_def": "a fast airplane powered by one or more jet engines; a rapid stream of liquid or gas",
    "sentence": "The wealthy international businessman travels across the world in his luxurious private {{BLANK}} for important meetings.",
    "cn": "那位富有的跨國商人搭乘他豪華的私人噴射客機飛往世界各地參加重要會議。"
  },
  {
    "word": "jet lag",
    "pos": "n.phr.",
    "cn_def": "時差綜合症；時差反應；時差疲勞（不可數）",
    "en_def": "extreme tiredness felt by a person after a long flight across multiple time zones",
    "sentence": "After flying for fourteen consecutive hours from Taipei to New York, Susan suffered from terrible {{BLANK}} for three days.",
    "cn": "從台北連續飛行十四個小時抵達紐約後，蘇珊飽受嚴重時差反應之苦長達三天。"
  },
  {
    "word": "jetted",
    "pos": "v.",
    "cn_def": "搭乘噴射機快速旅行；噴出（動詞）",
    "en_def": "to travel quickly by airplane, especially a jet",
    "sentence": "Immediately after the emergency summit concluded, the French president {{BLANK}} from New York back to Paris.",
    "cn": "緊急高峰會一結束，法國總統便立刻搭乘噴射專機從紐約飛回巴黎。"
  },
  {
    "word": "joyful",
    "pos": "adj.",
    "cn_def": "喜悅的；充滿歡樂的；令人高興的",
    "en_def": "feeling, causing, or expressing great happiness and delight",
    "sentence": "The proud parents shed {{BLANK}} tears when their eldest daughter walked across the stage to graduate.",
    "cn": "當大女兒走過講台畢業時，引以為傲的父母流下了喜悅的淚水。"
  },
  {
    "word": "joy",
    "pos": "n.",
    "cn_def": "喜悅；樂趣；歡樂（不可數/可數）",
    "en_def": "a feeling of great pleasure and happiness; a source of delight",
    "sentence": "Welcoming their healthy newborn baby into the loving home brought immense {{BLANK}} to the entire family.",
    "cn": "歡迎他們健康的初生寶寶進入這個充滿愛的家，為全家人帶來了莫大的喜悅。"
  },
  {
    "word": "leopard",
    "pos": "n.",
    "cn_def": "豹；花豹（可數）",
    "en_def": "a large solitary wild cat with a yellowish-fawn coat with black spots",
    "sentence": "The stealthy African {{BLANK}} hid quietly in the tall tree branches, waiting patiently for a gazelle to pass below.",
    "cn": "那隻隱密的非洲花豹安靜地躲在高高的樹枝上，耐心地等待下方的瞪羚經過。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "大型購物中心；購物商城（可數）",
    "en_def": "a large enclosed shopping area containing many diverse stores, eateries, and entertainment",
    "sentence": "On rainy weekend afternoons, teenagers in our neighborhood enjoy gathering at the modern indoor shopping {{BLANK}}.",
    "cn": "在下雨的週末午後，我們社區的青少年喜歡聚集在現代化的室內購物商場。"
  },
  {
    "word": "media",
    "pos": "n.",
    "cn_def": "大眾傳播媒體（複數名詞，單數為 medium）",
    "en_def": "the main means of mass communication regarded collectively (plural of medium)",
    "sentence": "The famous murder trial attracted intense global attention, resulting in massive and sensational {{BLANK}} coverage worldwide.",
    "cn": "那場著名的謀殺審判引起了全球高度關注，引發了全世界廣大且聳動的媒體報導。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "手術；營運；軍事／商業行動（可數/不可數）",
    "en_def": "a surgical procedure; the act of functioning; a large organized activity",
    "sentence": "The skilled neurosurgeon took four tense hours to successfully perform a delicate brain {{BLANK}} on the patient.",
    "cn": "那位技術精湛的腦神經外科醫師花了緊張的四個小時，成功為病人進行了精細的腦部手術。"
  },
  {
    "word": "operate",
    "pos": "v.",
    "cn_def": "操縱；運作；動手術（動詞）",
    "en_def": "to control the functioning of a machine; to perform a surgical procedure",
    "sentence": "Every new factory worker must undergo thorough safety training before being allowed to {{BLANK}} the heavy equipment.",
    "cn": "每位新工廠工人都必須接受徹底的安全培訓，才被允許操作重型設備。"
  },
  {
    "word": "operational",
    "pos": "adj.",
    "cn_def": "運作中的；操作上的；業務上的",
    "en_def": "in or ready for use; concerning the routine functioning of an organization",
    "sentence": "After months of rigorous safety testing, the city's new solar power plant is finally fully {{BLANK}}.",
    "cn": "經過數月嚴格的安全測試，該市的新太陽能發電廠終於完全投入運作。"
  },
  {
    "word": "Palace",
    "pos": "n.",
    "cn_def": "宮殿；皇宮（可數）",
    "en_def": "the official residence of a sovereign, archbishop, or other exalted person",
    "sentence": "Millions of curious tourists travel to London every summer to watch the changing of the guard at Buckingham {{BLANK}}.",
    "cn": "每年夏天數百萬好奇的遊客前往倫敦，在白金漢宮觀看衛兵交接儀式。"
  },
  {
    "word": "passage",
    "pos": "n.",
    "cn_def": "通道；走廊；篇章；流逝（可數/不可數）",
    "en_def": "a narrow way allowing access between buildings or rooms; an excerpt from a book; the passing of time",
    "sentence": "A brightly lit underground {{BLANK}} connects the busy subway station directly to the basement of the department store.",
    "cn": "一條燈光明亮的地下通道將繁忙的地鐵站直接連接至百貨公司的地下室。"
  }
];

const MCQS = [
  {
    "q": "The criminal was caught by the police and will spend three years in ______.",
    "options": [
      "leopard",
      "jail",
      "jet",
      "palace"
    ],
    "answer": 1,
    "cn": "那個罪犯被警方抓獲，將在監獄裡度過三年。",
    "vocabIndex": 0
  },
  {
    "q": "The private ______ landed at the airport and a famous singer walked down the stairs.",
    "options": [
      "passage",
      "mall",
      "jail",
      "jet"
    ],
    "answer": 3,
    "cn": "那架私人噴射客機降落在機場，一位著名歌手走下了樓梯。",
    "vocabIndex": 2
  },
  {
    "q": "The wild ______ has beautiful black spots on its fur and can climb trees very fast.",
    "options": [
      "leopard",
      "mall",
      "jail",
      "palace"
    ],
    "answer": 0,
    "cn": "野生花豹身上的毛皮有美麗的黑斑點，而且爬樹非常快。",
    "vocabIndex": 7
  },
  {
    "q": "On Saturday afternoon, my sister went to the shopping ______ to buy new clothes.",
    "options": [
      "leopard",
      "jet",
      "mall",
      "palace"
    ],
    "answer": 2,
    "cn": "在週六下午，我妹妹去了購物商場買新衣服。",
    "vocabIndex": 8
  },
  {
    "q": "Television, newspapers, and the internet are all important kinds of news ______.",
    "options": [
      "jet",
      "jail",
      "leopard",
      "media"
    ],
    "answer": 3,
    "cn": "電視、報紙和網路都是重要的大眾新聞媒體。",
    "vocabIndex": 9
  },
  {
    "q": "The doctor will perform an ______ on the sick woman's knee tomorrow morning.",
    "options": [
      "palace",
      "leopard",
      "operation",
      "jet"
    ],
    "answer": 2,
    "cn": "醫生明天早上將在那位生病婦女的膝蓋上進行一次手術。",
    "vocabIndex": 10
  },
  {
    "q": "The king and queen live in a magnificent stone ______ with hundreds of rooms.",
    "options": [
      "palace",
      "jet",
      "leopard",
      "mall"
    ],
    "answer": 0,
    "cn": "國王與王后住在一座擁有數百個房間的宏偉石頭宮殿／皇宮裡。",
    "vocabIndex": 13
  },
  {
    "q": "There is a narrow underground ______ connecting the train station to the hotel.",
    "options": [
      "leopard",
      "passage",
      "mall",
      "jet"
    ],
    "answer": 1,
    "cn": "有一條狹窄的地下通道將火車站連接到飯店。",
    "vocabIndex": 14
  },
  {
    "q": "Welcoming their cute baby girl brought tremendous ______ to the young parents.",
    "options": [
      "leopard",
      "jail",
      "joy",
      "jet"
    ],
    "answer": 2,
    "cn": "迎來他們可愛的初生女嬰給這對年輕父母帶來了巨大的喜悅。",
    "vocabIndex": 6
  },
  {
    "q": "The teacher asked Mark to read a short ______ from the history book aloud.",
    "options": [
      "mall",
      "palace",
      "leopard",
      "passage"
    ],
    "answer": 3,
    "cn": "老師請馬克大聲朗讀歷史書中的一小段文章篇章。",
    "vocabIndex": 14
  },
  {
    "q": "The court decided to ______ the thief for stealing expensive cars from the street.",
    "options": [
      "jail",
      "jet",
      "operate",
      "passage"
    ],
    "answer": 0,
    "cn": "法院決定將那個在街上偷昂貴車輛的竊賊關入監獄／監禁。",
    "vocabIndex": 0
  },
  {
    "q": "After the conference ended in London, the president ______ off to Paris for dinner.",
    "options": [
      "jailed",
      "jetted",
      "joyed",
      "operated"
    ],
    "answer": 1,
    "cn": "在倫敦的會議結束後，總統搭乘噴射機飛往巴黎共進晚餐。",
    "vocabIndex": 4
  },
  {
    "q": "You must learn how to ______ this machine safely before turning it on.",
    "options": [
      "jet",
      "jail",
      "operate",
      "passage"
    ],
    "answer": 2,
    "cn": "在啟動這台機器之前，你必須先學習如何安全地操作／操縱它。",
    "vocabIndex": 11
  },
  {
    "q": "The doctors had to ______ on the injured boy to save his broken arm.",
    "options": [
      "jail",
      "operate",
      "jet",
      "mall"
    ],
    "answer": 1,
    "cn": "醫生們不得不為受傷的男孩動手術開刀以挽救他骨折的手臂。",
    "vocabIndex": 11
  },
  {
    "q": "The police said they would ______ anyone who set fire to the forest trees.",
    "options": [
      "jet",
      "operate",
      "passage",
      "jail"
    ],
    "answer": 3,
    "cn": "警方表示他們會將任何在森林樹木縱火的人關入監獄。",
    "vocabIndex": 0
  },
  {
    "q": "The children sang a lively and ______ song to celebrate their teacher's birthday.",
    "options": [
      "joyful",
      "jetted",
      "operational",
      "jailed"
    ],
    "answer": 0,
    "cn": "孩子們唱了一首活潑且充滿歡樂喜悅的歌曲來慶祝老師的生日。",
    "vocabIndex": 5
  },
  {
    "q": "All the computers in the school library are fully ______ and ready for students to use.",
    "options": [
      "jetted",
      "joyful",
      "jailed",
      "operational"
    ],
    "answer": 3,
    "cn": "學校圖書館裡的所有電腦都完全正常運作中，可供學生使用。",
    "vocabIndex": 12
  },
  {
    "q": "Christmas morning is always a very ______ time for young kids opening presents.",
    "options": [
      "operational",
      "jailed",
      "joyful",
      "jetted"
    ],
    "answer": 2,
    "cn": "聖誕節早晨對於拆禮物的小朋友們來說總是一個非常令人歡欣喜悅的時光。",
    "vocabIndex": 5
  },
  {
    "q": "The airport will become fully ______ next month when all runways are completed.",
    "options": [
      "joyful",
      "operational",
      "jailed",
      "jetted"
    ],
    "answer": 1,
    "cn": "當所有跑道竣工後，這座機場將在下個月完全開始投入營運運作。",
    "vocabIndex": 12
  },
  {
    "q": "The wedding party was such a ______ event that everyone danced until midnight.",
    "options": [
      "joyful",
      "operational",
      "jailed",
      "jetted"
    ],
    "answer": 0,
    "cn": "這場婚禮派對是一個非常歡樂喜悅的盛事，每個人都跳舞直到午夜。",
    "vocabIndex": 5
  },
  {
    "q": "After flying from Taiwan to the United States, I felt very tired because of ______.",
    "options": [
      "shopping mall",
      "snow leopard",
      "social media",
      "jet lag"
    ],
    "answer": 3,
    "cn": "從台灣飛到美國後，因為時差疲勞反應，我感到非常疲倦。",
    "vocabIndex": 3
  },
  {
    "q": "The rare ______ lives high in the cold, rocky mountains of Central Asia.",
    "options": [
      "snow leopard",
      "jet lag",
      "social media",
      "Buckingham Palace"
    ],
    "answer": 0,
    "cn": "稀有的雪豹生活在中亞寒冷多石的高山之中。",
    "vocabIndex": 7
  },
  {
    "q": "Many young people like to share funny photos with their friends on ______.",
    "options": [
      "jet lag",
      "snow leopard",
      "social media",
      "Buckingham Palace"
    ],
    "answer": 2,
    "cn": "許多許多年輕人喜歡在社群媒體上與朋友分享搞笑照片。",
    "vocabIndex": 9
  },
  {
    "q": "The King of England officially lives and works in London at ______.",
    "options": [
      "jet lag",
      "Buckingham Palace",
      "snow leopard",
      "social media"
    ],
    "answer": 1,
    "cn": "英國國王在倫敦正式居住與辦公的地點是白金漢宮。",
    "vocabIndex": 13
  },
  {
    "q": "This new subway line has been ______ for five years and carries millions of people.",
    "options": [
      "in operation",
      "birds of a feather flock together",
      "sink or swim",
      "keep at bay"
    ],
    "answer": 0,
    "cn": "這條新地鐵線已經投入營運運作五年了，承載了數百萬名乘客。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "jail": {
    "pos": "n.",
    "en_def": "a place for the confinement of people convicted of or awaiting trial for a crime",
    "cn_def": "監獄；看守所（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place for the confinement of people convicted of or awaiting trial for a crime",
        "cn_def": "監獄；看守所（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to put someone in prison or jail as a legal punishment",
        "cn_def": "監禁；關押；下獄（動詞）"
      }
    ]
  },
  "jet": {
    "pos": "n.",
    "en_def": "a fast airplane powered by one or more jet engines; a rapid stream of liquid or gas",
    "cn_def": "噴射客機；噴射機；噴射氣流（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fast airplane powered by one or more jet engines; a rapid stream of liquid or gas",
        "cn_def": "噴射客機；噴射機；噴射氣流（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to travel quickly by airplane, especially a jet",
        "cn_def": "搭乘噴射機快速旅行；噴出（動詞）"
      }
    ]
  },
  "jet lag": {
    "pos": "n.phr.",
    "en_def": "extreme tiredness felt by a person after a long flight across multiple time zones",
    "cn_def": "時差綜合症；時差反應；時差疲勞（不可數）",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "extreme tiredness felt by a person after a long flight across multiple time zones",
        "cn_def": "時差綜合症；時差反應；時差疲勞（不可數）"
      }
    ]
  },
  "jetted": {
    "pos": "v.",
    "en_def": "to travel quickly by airplane, especially a jet",
    "cn_def": "搭乘噴射機快速旅行；噴出（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to travel quickly by airplane, especially a jet",
        "cn_def": "搭乘噴射機快速旅行；噴出（動詞）"
      }
    ]
  },
  "joyful": {
    "pos": "adj.",
    "en_def": "feeling, causing, or expressing great happiness and delight",
    "cn_def": "喜悅的；充滿歡樂的；令人高興的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling, causing, or expressing great happiness and delight",
        "cn_def": "喜悅的；充滿歡樂的；令人高興的"
      }
    ]
  },
  "joy": {
    "pos": "n.",
    "en_def": "a feeling of great pleasure and happiness; a source of delight",
    "cn_def": "喜悅；樂趣；歡樂（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of great pleasure and happiness; a source of delight",
        "cn_def": "喜悅；樂趣；歡樂（不可數/可數）"
      }
    ]
  },
  "leopard": {
    "pos": "n.",
    "en_def": "a large solitary wild cat with a yellowish-fawn coat with black spots",
    "cn_def": "豹；花豹（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large solitary wild cat with a yellowish-fawn coat with black spots",
        "cn_def": "豹；花豹（可數）"
      }
    ]
  },
  "mall": {
    "pos": "n.",
    "en_def": "a large enclosed shopping area containing many diverse stores, eateries, and entertainment",
    "cn_def": "大型購物中心；購物商城（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large enclosed shopping area containing many diverse stores, eateries, and entertainment",
        "cn_def": "大型購物中心；購物商城（可數）"
      }
    ]
  },
  "media": {
    "pos": "n.",
    "en_def": "the main means of mass communication regarded collectively (plural of medium)",
    "cn_def": "大眾傳播媒體（複數名詞，單數為 medium）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the main means of mass communication regarded collectively (plural of medium)",
        "cn_def": "大眾傳播媒體（複數名詞，單數為 medium）"
      }
    ]
  },
  "operation": {
    "pos": "n.",
    "en_def": "a surgical procedure; the act of functioning; a large organized activity",
    "cn_def": "手術；營運；軍事／商業行動（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a surgical procedure; the act of functioning; a large organized activity",
        "cn_def": "手術；營運；軍事／商業行動（可數/不可數）"
      }
    ]
  },
  "operate": {
    "pos": "v.",
    "en_def": "to control the functioning of a machine; to perform a surgical procedure",
    "cn_def": "操縱；運作；動手術（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to control the functioning of a machine; to perform a surgical procedure",
        "cn_def": "操縱；運作；動手術（動詞）"
      }
    ]
  },
  "operational": {
    "pos": "adj.",
    "en_def": "in or ready for use; concerning the routine functioning of an organization",
    "cn_def": "運作中的；操作上的；業務上的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "in or ready for use; concerning the routine functioning of an organization",
        "cn_def": "運作中的；操作上的；業務上的"
      }
    ]
  },
  "palace": {
    "pos": "n.",
    "en_def": "the official residence of a sovereign, archbishop, or other exalted person",
    "cn_def": "宮殿；皇宮（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the official residence of a sovereign, archbishop, or other exalted person",
        "cn_def": "宮殿；皇宮（可數）"
      }
    ]
  },
  "passage": {
    "pos": "n.",
    "en_def": "a narrow way allowing access between buildings or rooms; an excerpt from a book; the passing of time",
    "cn_def": "通道；走廊；篇章；流逝（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a narrow way allowing access between buildings or rooms; an excerpt from a book; the passing of time",
        "cn_def": "通道；走廊；篇章；流逝（可數/不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
