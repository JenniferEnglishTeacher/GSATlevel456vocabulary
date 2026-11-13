// Part 1 Quiz Data: almond – bold
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 18-1 - almond – bold",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "almond",
    "pos": "n.",
    "cn_def": "杏仁（可數/不可數）",
    "en_def": "the oval edible nutlike seed of the almond tree, used in cooking or sweets",
    "sentence": "My grandmother baked a batch of delicious {{BLANK}} cookies for the festive family gathering.",
    "cn": "我祖母為節日家庭聚會烤了一批美味的杏仁餅乾。"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "cn_def": "字母系統；字母表（可數）",
    "en_def": "a set of letters or symbols in a fixed order used for writing a language",
    "sentence": "The kindergarten teacher patiently taught the young children to recite the {{BLANK}} from A to Z.",
    "cn": "幼兒園老師耐心地教導幼童從 A 到 Z 背誦字母表。"
  },
  {
    "word": "apart",
    "pos": "adv.",
    "cn_def": "分開地；相距；成碎片",
    "en_def": "separated by a distance; into pieces or parts",
    "sentence": "The loving couple felt lonely when they had to live {{BLANK}} in different countries for their careers.",
    "cn": "這對相愛的情侶因各自的職業必須在不同國家分隔兩地生活時感到孤單。"
  },
  {
    "word": "set her apart from",
    "pos": "v.phr.",
    "cn_def": "使…與眾不同；使脫穎而出",
    "en_def": "to distinguish or make someone or something noticeably different from others",
    "sentence": "Her exceptional dedication and creative thinking truly {{BLANK}} other applicants during the interview.",
    "cn": "她非凡的專注力與創造性思維在面試期間確實讓她脫穎而出／與眾不同。"
  },
  {
    "word": "bait",
    "pos": "n./v.",
    "cn_def": "餌；誘餌；裝餌誘惑（名詞/動詞）",
    "en_def": "food used to entice fish or other animals into a trap; to entice or lure",
    "sentence": "The cunning detective laid a clever trap, and the arrogant thief foolishly took the {{BLANK}}.",
    "cn": "那位狡猾的偵探設下了一個巧妙陷阱，而自大的竊賊愚蠢地上鉤中計了。"
  },
  {
    "word": "bare",
    "pos": "adj.",
    "cn_def": "赤裸的；光禿的；勉強的",
    "en_def": "not clothed or covered; basic or simple; without extras",
    "sentence": "Walking along the cool sandy beach with {{BLANK}} feet brought a pleasant feeling of total relaxation.",
    "cn": "赤著雙腳在涼爽的沙灘上漫步帶來了一種徹底放鬆的愉悅感受。"
  },
  {
    "word": "bared its teeth",
    "pos": "v.phr.",
    "cn_def": "露出牙齒（露出凶相）",
    "en_def": "to uncover one's teeth, especially in anger or hostility",
    "sentence": "When the wandering stranger stepped into the yard, the guard dog angrily {{BLANK}} and growled loudly.",
    "cn": "當那名徘徊的陌生人走進院子時，看門狗憤怒地露出牙齒並大聲低吼。"
  },
  {
    "word": "barn",
    "pos": "n.",
    "cn_def": "穀倉；牲口棚（可數）",
    "en_def": "a large farm building used for storing grain or housing livestock",
    "sentence": "The busy farmers worked together to move all the farm animals into the sturdy {{BLANK}} before the winter blizzard arrived.",
    "cn": "勤勞的農民們合力在冬季暴風雪來臨前將所有農場牲畜趕進堅固的牲口棚／穀倉內。"
  },
  {
    "word": "barrels",
    "pos": "n.",
    "cn_def": "木桶；一桶之量；槍管（可數）",
    "en_def": "a large cylindrical container, traditionally made of wooden staves and hoops",
    "sentence": "Premium red wine is carefully aged in charred French oak {{BLANK}} for several years to develop its rich flavor.",
    "cn": "頂級紅酒在燒烤過的法國橡木桶中悉心陳釀數年，以發展出濃郁風味。"
  },
  {
    "word": "bold",
    "pos": "adj.",
    "cn_def": "大膽勇敢的；醒目的；粗體的",
    "en_def": "showing an ability to take risks; confident and courageous; distinct",
    "sentence": "The ambitious young entrepreneur made a {{BLANK}} decision to invest all her savings into renewable energy technology.",
    "cn": "那位雄心勃勃的年輕創業家做了一個大膽的決定，將所有積蓄投資於再生能源科技。"
  }
];

const MCQS = [
  {
    "q": "Mom baked delicious cookies filled with crunchy roasted ______ for our snack.",
    "options": [
      "alphabets",
      "barns",
      "almonds",
      "barrels"
    ],
    "answer": 2,
    "cn": "媽媽烤了香脆烤杏仁的美味餅乾當作我們的點心。"
  },
  {
    "q": "The first-grade students sang a song to learn all twenty-six letters of the ______.",
    "options": [
      "alphabet",
      "barrel",
      "barn",
      "bait"
    ],
    "answer": 0,
    "cn": "一年級小學生唱了一首歌來學習字母表裡的二十六個字母。",
    "vocabIndex": 1
  },
  {
    "q": "The fisherman put a piece of bread on his hook as ______ to catch small fish.",
    "options": [
      "barrel",
      "barn",
      "alphabet",
      "bait"
    ],
    "answer": 3,
    "cn": "漁夫在魚鉤上放了一塊麵包當作釣小魚的魚餌。",
    "vocabIndex": 4
  },
  {
    "q": "The farmer kept all the cows and dry grass inside the big red ______.",
    "options": [
      "almond",
      "barn",
      "barrel",
      "bait"
    ],
    "answer": 1,
    "cn": "農夫把所有的牛和乾草存放在那座紅色大穀倉／牲口棚裡。",
    "vocabIndex": 7
  },
  {
    "q": "Workers rolled a heavy wooden ______ filled with sweet grape wine into the cellar.",
    "options": [
      "almond",
      "alphabet",
      "barn",
      "barrel"
    ],
    "answer": 3,
    "cn": "工人們將一個裝滿甜葡萄汁的沉重木桶滾進了地窖。",
    "vocabIndex": 8
  },
  {
    "q": "My brother loves drinking ______ milk every morning because he cannot drink dairy.",
    "options": [
      "almond",
      "barn",
      "barrel",
      "bait"
    ],
    "answer": 0,
    "cn": "我弟弟每天早晨喜歡喝杏仁奶，因為他無法喝乳製品。",
    "vocabIndex": 0
  },
  {
    "q": "Books in our local public library are arranged in ______ order by author name.",
    "options": [
      "bare",
      "alphabetical",
      "apart",
      "bold"
    ],
    "answer": 1,
    "cn": "我們當地公共圖書館裡的書籍是依作者姓名的字母順序排列的。"
  },
  {
    "q": "The brave firefighter made a ______ move into the burning room to save the crying baby.",
    "options": [
      "apart",
      "bare",
      "bold",
      "bait"
    ],
    "answer": 2,
    "cn": "勇敢的消防員採取了大膽果斷的行動衝進燃燒的房間拯救哭泣的嬰兒。",
    "vocabIndex": 9
  },
  {
    "q": "In winter, the trees outside my bedroom window have ______ branches without any leaves.",
    "options": [
      "bold",
      "almond",
      "apart",
      "bare"
    ],
    "answer": 3,
    "cn": "冬天時，我臥室窗外的樹木有著沒有任何樹葉的光禿枝枒。",
    "vocabIndex": 5
  },
  {
    "q": "Children like to take off their shoes and run across the cool green grass with ______ feet.",
    "options": [
      "bare",
      "bold",
      "apart",
      "barn"
    ],
    "answer": 0,
    "cn": "孩子們喜歡脫掉鞋子，赤著雙腳跑過涼爽的綠草地。",
    "vocabIndex": 5
  },
  {
    "q": "Important titles on the school notice board are printed in ______ letters so everyone sees them.",
    "options": [
      "bare",
      "apart",
      "bold",
      "barrel"
    ],
    "answer": 2,
    "cn": "學校公告欄上的重要標題以粗體字母印刷，讓大家都能看到。",
    "vocabIndex": 9
  },
  {
    "q": "The poor traveler only had enough money for ______ necessities like bread and clean water.",
    "options": [
      "bold",
      "bare",
      "apart",
      "almond"
    ],
    "answer": 1,
    "cn": "那名可憐的旅人身上只有足夠買麵包與淨水等最基本生活必需品的錢。",
    "vocabIndex": 5
  },
  {
    "q": "When her brother went to college in another city, they lived ______ for the very first time.",
    "options": [
      "bold",
      "bare",
      "apart",
      "barn"
    ],
    "answer": 2,
    "cn": "當她哥哥去另一個城市上大學時，他們生平第一次分開生活。",
    "vocabIndex": 2
  },
  {
    "q": "The two houses stand twenty meters ______ from each other on the quiet hill.",
    "options": [
      "bold",
      "apart",
      "bare",
      "barrel"
    ],
    "answer": 1,
    "cn": "這兩棟房子在安靜的山丘上彼此相距二十公尺。",
    "vocabIndex": 2
  },
  {
    "q": "The boy ______ the hook with a small worm and threw the line into the lake.",
    "options": [
      "barreled",
      "bared",
      "barned",
      "baited"
    ],
    "answer": 3,
    "cn": "小男孩在魚鉤上裝上了誘餌（一條小蟲），並將釣線扔進湖中。",
    "vocabIndex": 4
  },
  {
    "q": "When the angry guard dog saw the stranger, it ______ its sharp teeth and growled.",
    "options": [
      "bared",
      "baited",
      "bolded",
      "barned"
    ],
    "answer": 0,
    "cn": "當那隻憤怒的看門狗看見陌生人時，它露出了鋒利的牙齒並低吼。",
    "vocabIndex": 5
  },
  {
    "q": "The old wooden chair was so weak that it began to ______ when the heavy man sat down.",
    "options": [
      "bare its teeth",
      "take the bait",
      "recite the alphabet",
      "fall apart"
    ],
    "answer": 3,
    "cn": "那把老舊木椅太脆弱了，以至於那個沉重的男人坐下時它就開始散架損壞。",
    "vocabIndex": 2
  },
  {
    "q": "The twin sisters wear the same dress and hairstyle, so nobody can ______.",
    "options": [
      "tell them apart",
      "bare their teeth",
      "fall apart",
      "take the bait"
    ],
    "answer": 0,
    "cn": "這對雙胞胎姐妹穿著同樣的洋裝和髮型，因此沒有人能夠將她們分辨出來。",
    "vocabIndex": 2
  },
  {
    "q": "Her great speaking skills and funny jokes really ______ other students in the speech contest.",
    "options": [
      "took her bait",
      "bared her teeth to",
      "set her apart from",
      "fell apart from"
    ],
    "answer": 2,
    "cn": "她絕佳的口才與幽默的笑話在演講比賽中真正讓她脫穎而出／有別於其他學生。",
    "vocabIndex": 3
  },
  {
    "q": "The clever police officer set a trap, and the greedy robber quickly ______.",
    "options": [
      "fell apart",
      "took the bait",
      "told them apart",
      "bared his teeth"
    ],
    "answer": 1,
    "cn": "聰明的警官設下了陷阱，而貪婪的搶匪很快就中計上鉤了。",
    "vocabIndex": 4
  },
  {
    "q": "The little girl was very proud because she could ______ without making any mistakes.",
    "options": [
      "take the bait",
      "live apart",
      "recite the alphabet",
      "fall apart"
    ],
    "answer": 2,
    "cn": "小女孩非常自豪，因為她能夠毫無差錯地背誦字母表。",
    "vocabIndex": 1
  },
  {
    "q": "After talking for hours by the campfire, the two lifelong friends finally ______.",
    "options": [
      "bared their souls",
      "fell apart",
      "took the bait",
      "lived apart"
    ],
    "answer": 0,
    "cn": "在營火旁暢談數小時後，這兩位終生好友終於敞開心扉／吐露心聲。",
    "vocabIndex": 5
  },
  {
    "q": "In the wine cellar, the delicious French grape wine was ______ for three years.",
    "options": [
      "taken the bait",
      "aged in oak barrels",
      "told apart",
      "fallen apart"
    ],
    "answer": 1,
    "cn": "在酒窖中，這款美味的法國葡萄美酒在橡木桶中陳釀了三年。",
    "vocabIndex": 8
  },
  {
    "q": "Starting a new business in another country was a very ______ for the young baker.",
    "options": [
      "red barn",
      "bare necessity",
      "live bait",
      "bold decision"
    ],
    "answer": 3,
    "cn": "在另一個國家創辦新事業對那位年輕麵包師而言是一個極為大膽的決定。",
    "vocabIndex": 9
  },
  {
    "q": "The poor village only had the ______ of life, such as clean water and simple bread.",
    "options": [
      "bare necessities",
      "oak barrels",
      "bold letters",
      "alphabet songs"
    ],
    "answer": 0,
    "cn": "那個貧困的村莊只有像是乾淨的水與簡單麵包等生活的最基本必需品。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "almond": {
    "pos": "n.",
    "en_def": "the oval edible nutlike seed of the almond tree, used in cooking or sweets",
    "cn_def": "杏仁（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the oval edible nutlike seed of the almond tree, used in cooking or sweets",
        "cn_def": "杏仁（可數/不可數）"
      }
    ]
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "a set of letters or symbols in a fixed order used for writing a language",
    "cn_def": "字母系統；字母表（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of letters or symbols in a fixed order used for writing a language",
        "cn_def": "字母系統；字母表（可數）"
      }
    ]
  },
  "apart": {
    "pos": "adv.",
    "en_def": "separated by a distance; into pieces or parts",
    "cn_def": "分開地；相距；成碎片",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "separated by a distance; into pieces or parts",
        "cn_def": "分開地；相距；成碎片"
      }
    ]
  },
  "set apart from": {
    "pos": "v.phr.",
    "en_def": "to distinguish or make someone or something noticeably different from others",
    "cn_def": "使…與眾不同；使脫穎而出",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to distinguish or make someone or something noticeably different from others",
        "cn_def": "使…與眾不同；使脫穎而出"
      }
    ]
  },
  "set her apart from": {
    "pos": "v.phr.",
    "en_def": "to distinguish or make someone or something noticeably different from others",
    "cn_def": "使…與眾不同；使脫穎而出",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to distinguish or make someone or something noticeably different from others",
        "cn_def": "使…與眾不同；使脫穎而出"
      }
    ]
  },
  "bait": {
    "pos": "n./v.",
    "en_def": "food used to entice fish or other animals into a trap; to entice or lure",
    "cn_def": "餌；誘餌；裝餌誘惑（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "food used to entice fish or other animals into a trap; to entice or lure",
        "cn_def": "餌；誘餌；裝餌誘惑（名詞/動詞）"
      }
    ]
  },
  "bare": {
    "pos": "adj.",
    "en_def": "not clothed or covered; basic or simple; without extras",
    "cn_def": "赤裸的；光禿的；勉強的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not clothed or covered; basic or simple; without extras",
        "cn_def": "赤裸的；光禿的；勉強的"
      }
    ]
  },
  "bare one's teeth": {
    "pos": "v.phr.",
    "en_def": "to uncover one's teeth, especially in anger or hostility",
    "cn_def": "露出牙齒（露出凶相）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to uncover one's teeth, especially in anger or hostility",
        "cn_def": "露出牙齒（露出凶相）"
      }
    ]
  },
  "bared its teeth": {
    "pos": "v.phr.",
    "en_def": "to uncover one's teeth, especially in anger or hostility",
    "cn_def": "露出牙齒（露出凶相）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to uncover one's teeth, especially in anger or hostility",
        "cn_def": "露出牙齒（露出凶相）"
      }
    ]
  },
  "barn": {
    "pos": "n.",
    "en_def": "a large farm building used for storing grain or housing livestock",
    "cn_def": "穀倉；牲口棚（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large farm building used for storing grain or housing livestock",
        "cn_def": "穀倉；牲口棚（可數）"
      }
    ]
  },
  "barrel": {
    "pos": "n.",
    "en_def": "a large cylindrical container, traditionally made of wooden staves and hoops",
    "cn_def": "木桶；一桶之量；槍管（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large cylindrical container, traditionally made of wooden staves and hoops",
        "cn_def": "木桶；一桶之量；槍管（可數）"
      }
    ]
  },
  "barrels": {
    "pos": "n.",
    "en_def": "a large cylindrical container, traditionally made of wooden staves and hoops",
    "cn_def": "木桶；一桶之量；槍管（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large cylindrical container, traditionally made of wooden staves and hoops",
        "cn_def": "木桶；一桶之量；槍管（可數）"
      }
    ]
  },
  "bold": {
    "pos": "adj.",
    "en_def": "showing an ability to take risks; confident and courageous; distinct",
    "cn_def": "大膽勇敢的；醒目的；粗體的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing an ability to take risks; confident and courageous; distinct",
        "cn_def": "大膽勇敢的；醒目的；粗體的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
