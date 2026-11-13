// Lesson 55 Quiz Data: Academic Disciplines, Languages, Linguistics & Literary Forms
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 55 - Academic Disciplines, Languages, Linguistics & Literary Forms",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "biology",
    "pos": "n.",
    "cn_def": "生物學",
    "en_def": "the scientific study of living organisms and life processes",
    "sentence": "Students in the advanced {{BLANK}} class dissected a frog yesterday to examine how its internal organs function.",
    "cn": "進階______課的學生昨天解剖了一隻青蛙，以檢視其內部器官如何運作。"
  },
  {
    "word": "geography",
    "pos": "n.",
    "cn_def": "地理學",
    "en_def": "the study of the physical features of the earth and its atmosphere",
    "sentence": "Our teacher used a colorful globe during our {{BLANK}} lesson to explain how ocean currents affect global weather patterns.",
    "cn": "我們的老師在______課上使用彩色地球儀，向大家解釋洋流如何影響全球天氣型態。"
  },
  {
    "word": "physics",
    "pos": "n.",
    "cn_def": "物理學",
    "en_def": "the scientific study of matter, energy, motion, and force",
    "sentence": "Albert Einstein made revolutionary contributions to modern {{BLANK}}, altering how scientists understand time and gravity.",
    "cn": "愛因斯坦對現代______做出了革命性的貢獻，改變了科學家對時間和引力的理解。"
  },
  {
    "word": "PE",
    "pos": "n.",
    "cn_def": "體育；體育課",
    "en_def": "physical education; instruction in physical exercise and sports at school",
    "sentence": "The boys played basketball during their afternoon {{BLANK}} class, while the girls practiced volleyball on the court.",
    "cn": "男生們在下午的______課上打籃球，而女生們則在球場上練習排球。"
  },
  {
    "word": "science",
    "pos": "n.",
    "cn_def": "科學",
    "en_def": "the systematic study of the physical and natural world through observation",
    "sentence": "Medical {{BLANK}} has developed effective vaccines that protect millions of children from dangerous infectious diseases.",
    "cn": "醫學______已經研發出有效的疫苗，保護數百萬兒童免受危險傳染病的侵害。"
  },
  {
    "word": "Mandarin",
    "pos": "n.",
    "cn_def": "國語；華語；普通話",
    "en_def": "the official standard form of Chinese spoken across Taiwan and China",
    "sentence": "The foreign exchange student practiced speaking {{BLANK}} every day, and she can now order food fluently at night markets.",
    "cn": "那位外籍交換學生每天練習講______，她現在在夜市點餐已經非常流利了。"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "cn_def": "字母表",
    "en_def": "a set of letters used for writing a language",
    "sentence": "Kindergarten children sing a cheerful song to memorize the twenty-six letters of the English {{BLANK}}.",
    "cn": "幼兒園的孩子們唱著歡快的歌曲，以背熟英語______的二十六個字母。"
  },
  {
    "word": "vocabulary",
    "pos": "n.",
    "cn_def": "字彙；單字",
    "en_def": "the body of words known and used by a particular person or group",
    "sentence": "Reading English novels every week helps students expand their active {{BLANK}}, making writing essays much easier.",
    "cn": "每週閱讀英文小說有助於學生擴充他們的積極______，讓撰寫作文變得容易許多。"
  },
  {
    "word": "poem",
    "pos": "n.",
    "cn_def": "詩歌；韻文",
    "en_def": "a piece of writing that expresses feelings and ideas using rhythm and metaphor",
    "sentence": "Emily wrote a romantic {{BLANK}} about the golden autumn sunset and recited it aloud in front of her classmates.",
    "cn": "艾蜜莉寫了一首關於金黃秋日落日的浪漫______，並在同學們面前大聲朗誦出來。"
  },
  {
    "word": "novel",
    "pos": "n.",
    "cn_def": "小說",
    "en_def": "a fictitious prose narrative of book length, typically representing characters",
    "sentence": "The young writer spent two years writing an exciting mystery {{BLANK}}, which quickly became a national bestseller.",
    "cn": "這位年輕作家花了兩年時間撰寫了一本刺激的懸疑______，該書很快便成為全國暢銷書。"
  }
];

const MCQS = [
  {
    "q": "In high school ______, we examined plant cells under a microscope to observe their green chloroplasts.",
    "options": [
      "biology",
      "poem",
      "alphabet",
      "Mandarin"
    ],
    "answer": 0,
    "cn": "在高中生物課上，我們在顯微鏡下觀察植物細胞，以觀察其綠色的葉綠體。 【選項解析】(A) biology 生物學 (B) poem 詩歌 (C) alphabet 字母 (D) Mandarin 華語。觀察植物細胞屬 biology。",
    "vocabIndex": 0
  },
  {
    "q": "The teacher asked the class to identify the capital cities of South American nations on the ______ map.",
    "options": [
      "physics",
      "geography",
      "novel",
      "PE"
    ],
    "answer": 1,
    "cn": "老師請全班在地理地圖上指認出南美洲國家的首都名稱。 【選項解析】(A) physics 物理 (B) geography 地理 (C) novel 小說 (D) PE 體育。地圖與首都屬於 geography。",
    "vocabIndex": 1
  },
  {
    "q": "Understanding Isaac Newton's laws of motion is fundamental to mastering high school ______.",
    "options": [
      "Mandarin",
      "geography",
      "physics",
      "poem"
    ],
    "answer": 2,
    "cn": "理解牛頓運動定律是掌握高中物理學的基礎基石。 【選項解析】(A) Mandarin 華語 (B) geography 地理 (C) physics 物理 (D) poem 詩歌。牛頓運動定律屬於 physics。",
    "vocabIndex": 2
  },
  {
    "q": "All students changed into their tracksuits before heading out to the playground for ______ class.",
    "options": [
      "alphabet",
      "novel",
      "biology",
      "PE"
    ],
    "answer": 3,
    "cn": "所有學生在前往操場上體育課之前，都換上了運動服裝。 【選項解析】(A) alphabet 字母 (B) novel 小說 (C) biology 生物 (D) PE 體育。換運動服上操場為 PE class。",
    "vocabIndex": 3
  },
  {
    "q": "Modern environmental ______ uses satellite data to monitor the melting of polar glaciers.",
    "options": [
      "Mandarin",
      "poem",
      "science",
      "alphabet"
    ],
    "answer": 2,
    "cn": "現代環境科學利用衛星數據來監測極地冰川的融化情形。 【選項解析】(A) science 科學 (B) poem 詩歌 (C) Mandarin 華語 (D) alphabet 字母。環境科學為 environmental science。",
    "vocabIndex": 4
  },
  {
    "q": "Many international business executives take evening lessons to learn spoken ______ for trade in Asia.",
    "options": [
      "biology",
      "Mandarin",
      "physics",
      "geography"
    ],
    "answer": 1,
    "cn": "許多國際商務主管在晚間上課學習中文口語，以便在亞洲進行商業貿易。 【選項解析】(A) biology 生物 (B) Mandarin 華語 (C) physics 物理 (D) geography 地理。學習語言進行貿易為 learn spoken Mandarin。",
    "vocabIndex": 5
  },
  {
    "q": "Greek letters are arranged in a distinct ______ that differs from the Latin letters used in English.",
    "options": [
      "novel",
      "poem",
      "vocabulary",
      "alphabet"
    ],
    "answer": 3,
    "cn": "希臘字母排列成獨特的字母表，與英語中使用的拉丁字母有所不同。 【選項解析】(A) novel 小說 (B) poem 詩歌 (C) alphabet 字母表 (D) vocabulary 字彙。Greek alphabet 指希臘字母系統。",
    "vocabIndex": 6
  },
  {
    "q": "Memorizing flashcards is an effective strategy to build your English ______ before taking the GEPT exam.",
    "options": [
      "vocabulary",
      "geography",
      "physics",
      "Mandarin"
    ],
    "answer": 0,
    "cn": "背誦單字卡是在參加全民英檢之前累積英語詞彙的有效策略。 【選項解析】(A) geography 地理 (B) vocabulary 字彙 (C) physics 物理 (D) Mandarin 華語。build English vocabulary 累積詞彙。",
    "vocabIndex": 7
  },
  {
    "q": "The literature teacher read a classic ______ by Robert Frost that explored choices in human life.",
    "options": [
      "alphabet",
      "PE",
      "poem",
      "biology"
    ],
    "answer": 2,
    "cn": "文學老師朗讀了羅伯特·佛洛斯特的一首經典詩作，該詩探討了人生的抉擇。 【選項解析】(A) poem 詩歌 (B) PE 體育 (C) alphabet 字母 (D) biology 生物。經典詩篇為 classic poem。",
    "vocabIndex": 8
  },
  {
    "q": "J.K. Rowling gained worldwide fame after publishing her fantasy ______ about a boy wizard.",
    "options": [
      "alphabet",
      "science",
      "geography",
      "novel"
    ],
    "answer": 3,
    "cn": "J.K.羅琳在出版了關於一名小巫師的奇幻小說後，贏得了世界級的聲譽。 【選項解析】(A) alphabet 字母 (B) science 科學 (C) novel 小說 (D) geography 地理。長篇奇幻小說為 fantasy novel。",
    "vocabIndex": 9
  },
  {
    "q": "Marine ______ researchers dive deep into coral reefs to study the feeding behaviors of tropical fish.",
    "options": [
      "alphabet",
      "biology",
      "poem",
      "Mandarin"
    ],
    "answer": 1,
    "cn": "海洋生物學研究人員潛入珊瑚礁深處，研究熱帶魚類的覓食行為。 【選項解析】(A) biology 生物學 (B) alphabet 字母 (C) poem 詩歌 (D) Mandarin 華語。海洋生物學為 marine biology。",
    "vocabIndex": 0
  },
  {
    "q": "Learning about volcanic mountains and tectonic plates is an essential unit in our physical ______ syllabus.",
    "options": [
      "geography",
      "PE",
      "physics",
      "novel"
    ],
    "answer": 0,
    "cn": "了解火山與構造板塊是我們自然地理學教學大綱中不可或缺的單元。 【選項解析】(A) physics 物理 (B) PE 體育 (C) geography 地理 (D) novel 小說。火山板塊屬 physical geography。",
    "vocabIndex": 1
  },
  {
    "q": "Mechanics, thermodynamics, and electromagnetism are the three primary branches of classical ______.",
    "options": [
      "poem",
      "physics",
      "Mandarin",
      "alphabet"
    ],
    "answer": 1,
    "cn": "力學、熱力學與電磁學是古典物理學的三大主要分支學科。 【選項解析】(A) poem 詩歌 (B) physics 物理 (C) Mandarin 華語 (D) alphabet 字母。力學熱學屬 physics。",
    "vocabIndex": 2
  },
  {
    "q": "Our coach made us run five laps around the athletics track during yesterday's rigorous ______ lesson.",
    "options": [
      "biology",
      "novel",
      "science",
      "PE"
    ],
    "answer": 3,
    "cn": "在昨天嚴格的體育課上，我們的教練要求我們繞著田徑跑道跑五圈。 【選項解析】(A) PE 體育 (B) novel 小說 (C) science 科學 (D) biology 生物。跑步訓練為 PE lesson。",
    "vocabIndex": 3
  },
  {
    "q": "Forensic ______ specialists analyze fingerprints and DNA samples found at crime scenes to assist the police.",
    "options": [
      "poem",
      "alphabet",
      "science",
      "Mandarin"
    ],
    "answer": 2,
    "cn": "鑑識科學專家分析在犯罪現場發現的指紋與DNA樣本，以協助警方辦案。 【選項解析】(A) poem 詩歌 (B) science 科學 (C) alphabet 字母 (D) Mandarin 華語。鑑識科學為 forensic science。",
    "vocabIndex": 4
  },
  {
    "q": "Although my roommate grew up in Canada, his parents spoke fluent ______ at home, so he is bilingual.",
    "options": [
      "Mandarin",
      "physics",
      "geography",
      "novel"
    ],
    "answer": 0,
    "cn": "雖然我的室友在加拿大長大，但他父母在家說一口流利的國語，因此他是雙語人士。 【選項解析】(A) geography 地理 (B) physics 物理 (C) Mandarin 華語 (D) novel 小說。在家講中文為 spoke fluent Mandarin。",
    "vocabIndex": 5
  },
  {
    "q": "Young children first learn to recognize the capital letters of the ______ before they practice lowercase letters.",
    "options": [
      "novel",
      "poem",
      "alphabet",
      "biology"
    ],
    "answer": 2,
    "cn": "幼童在練習小寫字母之前，會先學習辨認英文字母表中的大寫字母。 【選項解析】(A) alphabet 字母表 (B) poem 詩歌 (C) novel 小說 (D) biology 生物。letters of the alphabet 字母表。",
    "vocabIndex": 6
  },
  {
    "q": "Having a rich descriptive ______ allows novelists to paint vivid pictures in the minds of their readers.",
    "options": [
      "vocabulary",
      "physics",
      "geography",
      "PE"
    ],
    "answer": 0,
    "cn": "擁有豐富的描繪性詞彙，能讓小說家在讀者的腦海中描繪出栩栩如生的畫面。 【選項解析】(A) PE 體育 (B) physics 物理 (C) geography 地理 (D) vocabulary 詞彙。descriptive vocabulary 描述性詞彙。",
    "vocabIndex": 7
  },
  {
    "q": "The romantic poet expressed his profound sorrow in an emotional ______ dedicated to his departed love.",
    "options": [
      "alphabet",
      "poem",
      "science",
      "Mandarin"
    ],
    "answer": 1,
    "cn": "這位浪漫派詩人在一首獻給已故愛人的感人詩作中，表達了他深切的悲傷。 【選項解析】(A) poem 詩歌 (B) alphabet 字母 (C) science 科學 (D) Mandarin 華語。抒情詩為 emotional poem。",
    "vocabIndex": 8
  },
  {
    "q": "He sat by the warm fireplace every evening, reading a thrilling historical ______ set in medieval England.",
    "options": [
      "PE",
      "geography",
      "biology",
      "novel"
    ],
    "answer": 3,
    "cn": "他每天傍晚坐在溫暖的壁爐旁，閱讀一本以中世紀英格蘭為背景的驚險歷史小說。 【選項解析】(A) PE 體育 (B) geography 地理 (C) novel 小說 (D) biology 生物。歷史小說為 historical novel。",
    "vocabIndex": 9
  },
  {
    "q": "The university ______ laboratory is equipped with incubators for cultivating bacterial cell cultures.",
    "options": [
      "biology",
      "poem",
      "alphabet",
      "Mandarin"
    ],
    "answer": 0,
    "cn": "大學的生物實驗室配備了培養箱，用於培養細菌細胞菌落。 【選項解析】(A) biology 生物 (B) poem 詩歌 (C) alphabet 字母 (D) Mandarin 華語。生物實驗室為 biology laboratory。",
    "vocabIndex": 0
  },
  {
    "q": "Travelers who understand world ______ can easily appreciate the cultural and environmental diversity of different continents.",
    "options": [
      "physics",
      "novel",
      "PE",
      "geography"
    ],
    "answer": 3,
    "cn": "懂得世界地理的旅行者能輕易欣賞不同大洲的文化與環境多樣性。 【選項解析】(A) physics 物理 (B) geography 地理 (C) PE 體育 (D) novel 小說。world geography 世界地理。",
    "vocabIndex": 1
  },
  {
    "q": "The law of conservation of energy states that energy cannot be created or destroyed in ______.",
    "options": [
      "Mandarin",
      "physics",
      "poem",
      "alphabet"
    ],
    "answer": 1,
    "cn": "能量守恆定律指出，在物理學中，能量既不能被創造也不能被消滅。 【選項解析】(A) Mandarin 華語 (B) poem 詩歌 (C) physics 物理 (D) alphabet 字母。能量守恆是 physics 的基本定律。",
    "vocabIndex": 2
  },
  {
    "q": "Daily practice and wide reading will naturally increase the breadth of your active written ______.",
    "options": [
      "biology",
      "PE",
      "vocabulary",
      "geography"
    ],
    "answer": 2,
    "cn": "每日的練習與廣泛的閱讀將自然而然地擴展你主動寫作詞彙的廣度。 【選項解析】(A) vocabulary 字彙 (B) PE 體育 (C) biology 生物 (D) geography 地理。active vocabulary 主動詞彙。",
    "vocabIndex": 7
  },
  {
    "q": "Writing a thoughtful ______ requires careful attention to word choice, imagery, and rhythmic cadence.",
    "options": [
      "alphabet",
      "poem",
      "novel",
      "science"
    ],
    "answer": 1,
    "cn": "創作一首意境深遠的詩歌，需要對選詞、意象與節奏韻律有著細緻的推敲。 【選項解析】(A) alphabet 字母 (B) novel 小說 (C) poem 詩歌 (D) science 科學。重視意象與節奏者為 poem。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "biology": {
    "pos": "n.",
    "en_def": "the scientific study of living organisms and life processes",
    "cn_def": "生物學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the scientific study of living organisms and life processes",
        "cn_def": "生物學"
      }
    ]
  },
  "geography": {
    "pos": "n.",
    "en_def": "the study of the physical features of the earth and its atmosphere",
    "cn_def": "地理學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the study of the physical features of the earth and its atmosphere",
        "cn_def": "地理學"
      }
    ]
  },
  "physics": {
    "pos": "n.",
    "en_def": "the scientific study of matter, energy, motion, and force",
    "cn_def": "物理學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the scientific study of matter, energy, motion, and force",
        "cn_def": "物理學"
      }
    ]
  },
  "pe": {
    "pos": "n.",
    "en_def": "physical education; instruction in physical exercise and sports at school",
    "cn_def": "體育；體育課",
    "combined": [
      {
        "pos": "n.",
        "en_def": "physical education; instruction in physical exercise and sports at school",
        "cn_def": "體育；體育課"
      }
    ]
  },
  "science": {
    "pos": "n.",
    "en_def": "the systematic study of the physical and natural world through observation",
    "cn_def": "科學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the systematic study of the physical and natural world through observation",
        "cn_def": "科學"
      }
    ]
  },
  "mandarin": {
    "pos": "n.",
    "en_def": "the official standard form of Chinese spoken across Taiwan and China",
    "cn_def": "國語；華語；普通話",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the official standard form of Chinese spoken across Taiwan and China",
        "cn_def": "國語；華語；普通話"
      }
    ]
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "a set of letters used for writing a language",
    "cn_def": "字母表",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of letters used for writing a language",
        "cn_def": "字母表"
      }
    ]
  },
  "vocabulary": {
    "pos": "n.",
    "en_def": "the body of words known and used by a particular person or group",
    "cn_def": "字彙；單字",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the body of words known and used by a particular person or group",
        "cn_def": "字彙；單字"
      }
    ]
  },
  "poem": {
    "pos": "n.",
    "en_def": "a piece of writing that expresses feelings and ideas using rhythm and metaphor",
    "cn_def": "詩歌；韻文",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of writing that expresses feelings and ideas using rhythm and metaphor",
        "cn_def": "詩歌；韻文"
      }
    ]
  },
  "novel": {
    "pos": "n.",
    "en_def": "a fictitious prose narrative of book length, typically representing characters",
    "cn_def": "小說",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fictitious prose narrative of book length, typically representing characters",
        "cn_def": "小說"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
