// Part 2 Quiz Data: dine – frequent
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 16-2 - dine – frequent",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dine",
    "pos": "v.",
    "cn_def": "進餐；用餐（正式說法，動詞）",
    "en_def": "to eat dinner or have a formal meal",
    "sentence": "To celebrate their wedding anniversary, the happy couple decided to {{BLANK}} at a fine French restaurant downtown.",
    "cn": "為了慶祝他們的結婚紀念日，這對幸福的夫妻決定在市中心一家高級法國餐廳用餐。"
  },
  {
    "word": "diner",
    "pos": "n.",
    "cn_def": "用餐者；美式路邊簡餐館（可數）",
    "en_def": "a person who is eating, or a small informal roadside restaurant",
    "sentence": "After driving along the desert highway for five long hours, the tired truck driver stopped at a neon-lit roadside {{BLANK}} for a hot burger.",
    "cn": "在沙漠公路上行駛了漫長的五個小時後，疲倦的卡車司機停在一家有霓虹燈招牌的路邊簡餐館吃熱漢堡。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣；減價（可數）",
    "en_def": "a deduction from the usual cost of something, typically given for prompt or advance payment",
    "sentence": "Because the supermarket was closing down permanently, all remaining household items were sold at a deep {{BLANK}}.",
    "cn": "因為這家超市即將永久歇業，所有剩餘的家庭用品均以極大折扣出清。"
  },
  {
    "word": "discount",
    "pos": "v.",
    "cn_def": "打折；低估；對…不予採信（動詞）",
    "en_def": "to deduct an amount from the usual price; to regard a possibility as unlikely or untrue",
    "sentence": "Experienced detectives refused to {{BLANK}} the strange witness testimony until they had carefully examined all physical evidence.",
    "cn": "經驗豐富的偵探在仔細檢視所有實體證據之前，拒絕對那份奇怪的證人證詞不予採信／輕易低估。"
  },
  {
    "word": "elect",
    "pos": "v.",
    "cn_def": "選舉；推選（動詞）",
    "en_def": "to choose someone to hold public office or other position by voting",
    "sentence": "Citizens of the democratic nation went to local polling stations early on Tuesday morning to {{BLANK}} a new prime minister.",
    "cn": "這座民主國家的公民於週二清晨前往當地投票站選出一位新總理。"
  },
  {
    "word": "election",
    "pos": "n.",
    "cn_def": "選舉；當選（可數/不可數）",
    "en_def": "a formal and organized choice by vote of a person for a political office",
    "sentence": "Political candidates spent millions of dollars on television advertising campaigns ahead of the upcoming national presidential {{BLANK}}.",
    "cn": "在即將到來的全國總統大選之前，政治候選人在電視廣告活動上投入了數百萬美元。"
  },
  {
    "word": "emperor",
    "pos": "n.",
    "cn_def": "皇帝；君王（可數）",
    "en_def": "a sovereign ruler of great power and rank, especially one ruling an empire",
    "sentence": "Julius Caesar's adopted son Augustus became the first official {{BLANK}} to rule over the vast Roman territories.",
    "cn": "尤利烏斯·凱撒的養子奧古斯都成為統治遼闊羅馬疆域的第一位正式皇帝。"
  },
  {
    "word": "empire",
    "pos": "n.",
    "cn_def": "帝國；大企業王國（可數）",
    "en_def": "an extensive group of states or countries under a single supreme authority",
    "sentence": "Historians have written countless fascinating books analyzing the economic rise and dramatic fall of the mighty Roman {{BLANK}}.",
    "cn": "歷史學家撰寫了無數迷人的專著，分析強盛羅馬帝國的經濟崛起與戲劇性衰落。"
  },
  {
    "word": "enjoyable",
    "pos": "adj.",
    "cn_def": "令人愉快的；有趣的",
    "en_def": "giving delight, pleasure, or satisfaction",
    "sentence": "Taking a peaceful evening stroll along the lake with good friends is always a thoroughly {{BLANK}} and relaxing experience.",
    "cn": "與好友沿著湖畔進行寧靜的傍晚漫步，總是一段令人深感愉快的且放鬆的體驗。"
  },
  {
    "word": "entry",
    "pos": "n.",
    "cn_def": "進入；入口；詞條；參賽作品（可數/不可數）",
    "en_def": "an act of going or coming in; an item written in a diary or dictionary",
    "sentence": "Because his travel visa had unfortunately expired two days earlier, the tourist was formally denied {{BLANK}} into the country.",
    "cn": "由於他的旅行簽證不幸在兩天前過期，該遊客被正式拒絕入境。"
  },
  {
    "word": "freeze",
    "pos": "v.",
    "cn_def": "結冰；凍結；呆住不動（動詞）",
    "en_def": "to be turned into ice as a result of extreme cold; to stay completely motionless",
    "sentence": "During harsh Siberian winters, temperatures drop far below zero and rapid mountain rivers completely {{BLANK}} solid.",
    "cn": "在西伯利亞嚴酷的冬季，氣溫驟降至零下，湍急的高山河流徹底結凍成冰。"
  },
  {
    "word": "freezer",
    "pos": "n.",
    "cn_def": "冷凍庫；冷凍櫃（可數）",
    "en_def": "a refrigerated cabinet or room for preserving food at very low temperatures",
    "sentence": "Remember to put the leftover strawberry ice cream directly into the {{BLANK}} before it begins melting on the counter.",
    "cn": "記得把吃剩的草莓冰淇淋直接放進冷凍庫，以免它在流理台上開始融化。"
  },
  {
    "word": "frozen",
    "pos": "adj.",
    "cn_def": "結冰的；冷凍的；僵硬的",
    "en_def": "turned into ice or preserved by freezing; rigid with emotion",
    "sentence": "In cold northern Canadian regions, children enjoy playing outdoor ice hockey safely across the surface of the {{BLANK}} lake.",
    "cn": "在加拿大寒冷的北部地區，孩子們喜歡在結冰的湖面上安全地從事戶外冰上曲棍球運動。"
  },
  {
    "word": "frequent",
    "pos": "adj.",
    "cn_def": "頻繁的；常發生的",
    "en_def": "occurring or done on many occasions with short intervals",
    "sentence": "Airline companies award bonus miles and lounge access to loyal customers who enroll in their {{BLANK}} flyer programs.",
    "cn": "航空公司為加入其飛行常客計畫的忠實顧客提供紅利里程與貴賓室使用權。"
  },
  {
    "word": "frequent",
    "pos": "v.",
    "cn_def": "經常光顧；常去（動詞，/frɪˈkwent/）",
    "en_def": "to visit a place often or habitually",
    "sentence": "College students and young artists love to {{BLANK}} the quiet independent coffee shop tucked away inside the alley.",
    "cn": "大學生與青年藝術家喜愛經常光顧藏在巷弄內的這家安靜獨立咖啡館。"
  }
];

const MCQS = [
  {
    "q": "The hungry truck driver stopped at a bright roadside ______ to eat beef stew.",
    "options": [
      "discount",
      "diner",
      "emperor",
      "election"
    ],
    "answer": 1,
    "cn": "飢餓的卡車司機停在一家明亮的路邊簡餐館吃燉牛肉。",
    "vocabIndex": 1
  },
  {
    "q": "Students who show their school ID cards get a ten-percent ______ on movie tickets.",
    "options": [
      "discount",
      "emperor",
      "empire",
      "freezer"
    ],
    "answer": 0,
    "cn": "出示學生證的學生在購買電影票時享有九折折扣。",
    "vocabIndex": 2
  },
  {
    "q": "The citizens gathered to vote in the national ______ to pick their city mayor.",
    "options": [
      "freezer",
      "empire",
      "diner",
      "election"
    ],
    "answer": 3,
    "cn": "公民們聚集在全國選舉中投票以選出他們的市長。",
    "vocabIndex": 5
  },
  {
    "q": "The powerful Roman ______ ruled over millions of people and commanded great armies.",
    "options": [
      "diner",
      "discount",
      "emperor",
      "freezer"
    ],
    "answer": 2,
    "cn": "強大的羅馬皇帝統治著數百萬人並統領大軍。",
    "vocabIndex": 6
  },
  {
    "q": "The ancient Roman ______ was very large and covered many countries around the sea.",
    "options": [
      "empire",
      "diner",
      "discount",
      "freezer"
    ],
    "answer": 0,
    "cn": "古代羅馬帝國幅員遼闊，涵蓋了環海的許多國家。",
    "vocabIndex": 7
  },
  {
    "q": "Put the tub of vanilla ice cream into the ______ so it will stay cold and solid.",
    "options": [
      "emperor",
      "freezer",
      "election",
      "discount"
    ],
    "answer": 1,
    "cn": "把這盒香草冰淇淋放進冷凍庫，這樣它就能保持低溫與固體狀態。",
    "vocabIndex": 11
  },
  {
    "q": "Each dictionary ______ tells you the word's pronunciation, part of speech, and meaning.",
    "options": [
      "freezer",
      "diner",
      "emperor",
      "entry"
    ],
    "answer": 3,
    "cn": "每一個字典詞條都會告訴你這個單字的發音、詞性與意義。",
    "vocabIndex": 9
  },
  {
    "q": "On their wedding anniversary, mom and dad plan to ______ at an Italian restaurant.",
    "options": [
      "elect",
      "freeze",
      "dine",
      "discount"
    ],
    "answer": 2,
    "cn": "在結婚紀念日，爸爸媽媽打算在一間義大利餐廳進餐／用餐。",
    "vocabIndex": 0
  },
  {
    "q": "The shop owner will ______ these summer shirts by 30 percent because autumn is coming.",
    "options": [
      "dine",
      "discount",
      "freeze",
      "elect"
    ],
    "answer": 1,
    "cn": "因為秋天即將到來，店主將會把這些夏季襯衫打七折／減價 30%。",
    "vocabIndex": 2
  },
  {
    "q": "Our class voted yesterday to ______ Sally as our team leader.",
    "options": [
      "freeze",
      "dine",
      "elect",
      "discount"
    ],
    "answer": 2,
    "cn": "我們班昨天投票推選莎莉擔任我們的隊長。",
    "vocabIndex": 4
  },
  {
    "q": "When winter arrives in Canada, shallow lakes and outdoor puddles quickly ______ solid.",
    "options": [
      "dine",
      "elect",
      "discount",
      "freeze"
    ],
    "answer": 3,
    "cn": "當加拿大冬天到來時，淺湖與戶外水坑很快就結冰凍結成固體。",
    "vocabIndex": 10
  },
  {
    "q": "Young students love to ______ this cozy library cafe to study and drink bubble tea.",
    "options": [
      "freeze",
      "frequent",
      "elect",
      "dine"
    ],
    "answer": 0,
    "cn": "年輕學子們喜愛常去／經常光顧這家溫馨的圖書館咖啡館讀書並喝珍珠奶茶。",
    "vocabIndex": 10
  },
  {
    "q": "We had a very ______ afternoon playing fun board games with our family.",
    "options": [
      "frequent",
      "enjoyable",
      "frozen",
      "elected"
    ],
    "answer": 2,
    "cn": "我們與家人玩有趣的桌遊，度過了一個非常令人愉快的下午。",
    "vocabIndex": 12
  },
  {
    "q": "Children put on ice skates and skated safely across the thick ice of the ______ lake.",
    "options": [
      "frozen",
      "frequent",
      "enjoyable",
      "elective"
    ],
    "answer": 0,
    "cn": "孩子們穿上溜冰鞋，在結冰的湖泊厚冰上安全地溜冰。",
    "vocabIndex": 12
  },
  {
    "q": "Because of her ______ trips to London for work, Susan knows the city very well.",
    "options": [
      "elected",
      "enjoyable",
      "frozen",
      "frequent"
    ],
    "answer": 3,
    "cn": "因為頻繁地去倫敦出差，蘇珊非常熟悉這座城市。",
    "vocabIndex": 13
  },
  {
    "q": "Listening to cheerful pop songs while driving is an ______ way to pass time.",
    "options": [
      "frozen",
      "enjoyable",
      "elected",
      "frequent"
    ],
    "answer": 1,
    "cn": "開車時聽輕快活潑的流行歌曲是一種令人愉快的打發時間方式。",
    "vocabIndex": 8
  },
  {
    "q": "Mom defrosted a bag of ______ peas from the supermarket to add to the chicken rice.",
    "options": [
      "frequent",
      "enjoyable",
      "frozen",
      "elected"
    ],
    "answer": 2,
    "cn": "媽媽把從超市買來的一袋冷凍豌豆解凍，加入雞肉飯中。",
    "vocabIndex": 12
  },
  {
    "q": "The bus company added more buses because of ______ delays during rush hours.",
    "options": [
      "elected",
      "enjoyable",
      "frozen",
      "frequent"
    ],
    "answer": 3,
    "cn": "因為尖峰時間頻繁的誤點，公車公司增開了更多班次。",
    "vocabIndex": 13
  },
  {
    "q": "The girl was ______ with fear when she saw a hairy spider crawling on her leg.",
    "options": [
      "enjoyable",
      "frozen",
      "frequent",
      "elected"
    ],
    "answer": 1,
    "cn": "當小女孩看見一隻多毛的蜘蛛在她腿上爬行時，她嚇呆得僵住了。",
    "vocabIndex": 12
  },
  {
    "q": "The traveler ______ visits Japan during spring to take pictures of pink cherry blossoms.",
    "options": [
      "frequently",
      "frozenly",
      "brightly",
      "enjoyably"
    ],
    "answer": 0,
    "cn": "這位旅人春天經常／頻繁地造訪日本以拍攝粉紅櫻花。"
  },
  {
    "q": "The candidate gave speeches in many towns because she decided to ______ for mayor.",
    "options": [
      "freeze to death",
      "dine on",
      "run for election",
      "make an entry"
    ],
    "answer": 2,
    "cn": "候選人在許多城鎮發表演說，因為她決定競選市長。",
    "vocabIndex": 5
  },
  {
    "q": "Tourists love to ______ seafood pasta while enjoying the warm sea breeze on the terrace.",
    "options": [
      "dine on",
      "run for election",
      "freeze with fear",
      "offer a discount"
    ],
    "answer": 0,
    "cn": "遊客們喜歡在露台上享受溫暖海風的同時享用海鮮義大利麵進餐。",
    "vocabIndex": 0
  },
  {
    "q": "Without a valid passport or entry visa, travelers will be formally ______ into the country.",
    "options": [
      "run for election",
      "dined on",
      "frozen with fear",
      "denied entry"
    ],
    "answer": 3,
    "cn": "如果沒有有效護照或入境簽證，旅客將會被正式拒絕入境該國。",
    "vocabIndex": 9
  },
  {
    "q": "The traveler joined the airline's ______ club to earn free tickets for future trips.",
    "options": [
      "roadside diner",
      "frequent flyer",
      "dictionary entry",
      "deep discount"
    ],
    "answer": 1,
    "cn": "該名旅人加入了航空公司的飛行常客俱樂部，以賺取未來旅程的免費機票。",
    "vocabIndex": 13
  },
  {
    "q": "The old woman was ______ when she heard a sudden loud noise in the dark cellar.",
    "options": [
      "denied entry",
      "run for election",
      "frozen with fear",
      "offered a discount"
    ],
    "answer": 2,
    "cn": "老婦人在黑暗的地窖裡聽到突然的巨大聲響時，嚇得呆若木雞。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "dine": {
    "pos": "v.",
    "en_def": "to eat dinner or have a formal meal",
    "cn_def": "進餐；用餐（正式說法，動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to eat dinner or have a formal meal",
        "cn_def": "進餐；用餐（正式說法，動詞）"
      }
    ]
  },
  "diner": {
    "pos": "n.",
    "en_def": "a person who is eating, or a small informal roadside restaurant",
    "cn_def": "用餐者；美式路邊簡餐館（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is eating, or a small informal roadside restaurant",
        "cn_def": "用餐者；美式路邊簡餐館（可數）"
      }
    ]
  },
  "discount": {
    "pos": "n.",
    "en_def": "a deduction from the usual cost of something, typically given for prompt or advance payment",
    "cn_def": "折扣；減價（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a deduction from the usual cost of something, typically given for prompt or advance payment",
        "cn_def": "折扣；減價（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to deduct an amount from the usual price; to regard a possibility as unlikely or untrue",
        "cn_def": "打折；低估；對…不予採信（動詞）"
      }
    ]
  },
  "elect": {
    "pos": "v.",
    "en_def": "to choose someone to hold public office or other position by voting",
    "cn_def": "選舉；推選（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to choose someone to hold public office or other position by voting",
        "cn_def": "選舉；推選（動詞）"
      }
    ]
  },
  "election": {
    "pos": "n.",
    "en_def": "a formal and organized choice by vote of a person for a political office",
    "cn_def": "選舉；當選（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal and organized choice by vote of a person for a political office",
        "cn_def": "選舉；當選（可數/不可數）"
      }
    ]
  },
  "emperor": {
    "pos": "n.",
    "en_def": "a sovereign ruler of great power and rank, especially one ruling an empire",
    "cn_def": "皇帝；君王（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sovereign ruler of great power and rank, especially one ruling an empire",
        "cn_def": "皇帝；君王（可數）"
      }
    ]
  },
  "empire": {
    "pos": "n.",
    "en_def": "an extensive group of states or countries under a single supreme authority",
    "cn_def": "帝國；大企業王國（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extensive group of states or countries under a single supreme authority",
        "cn_def": "帝國；大企業王國（可數）"
      }
    ]
  },
  "enjoyable": {
    "pos": "adj.",
    "en_def": "giving delight, pleasure, or satisfaction",
    "cn_def": "令人愉快的；有趣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving delight, pleasure, or satisfaction",
        "cn_def": "令人愉快的；有趣的"
      }
    ]
  },
  "entry": {
    "pos": "n.",
    "en_def": "an act of going or coming in; an item written in a diary or dictionary",
    "cn_def": "進入；入口；詞條；參賽作品（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of going or coming in; an item written in a diary or dictionary",
        "cn_def": "進入；入口；詞條；參賽作品（可數/不可數）"
      }
    ]
  },
  "freeze": {
    "pos": "v.",
    "en_def": "to be turned into ice as a result of extreme cold; to stay completely motionless",
    "cn_def": "結冰；凍結；呆住不動（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be turned into ice as a result of extreme cold; to stay completely motionless",
        "cn_def": "結冰；凍結；呆住不動（動詞）"
      }
    ]
  },
  "freezer": {
    "pos": "n.",
    "en_def": "a refrigerated cabinet or room for preserving food at very low temperatures",
    "cn_def": "冷凍庫；冷凍櫃（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a refrigerated cabinet or room for preserving food at very low temperatures",
        "cn_def": "冷凍庫；冷凍櫃（可數）"
      }
    ]
  },
  "frozen": {
    "pos": "adj.",
    "en_def": "turned into ice or preserved by freezing; rigid with emotion",
    "cn_def": "結冰的；冷凍的；僵硬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "turned into ice or preserved by freezing; rigid with emotion",
        "cn_def": "結冰的；冷凍的；僵硬的"
      }
    ]
  },
  "frequent": {
    "pos": "adj.",
    "en_def": "occurring or done on many occasions with short intervals",
    "cn_def": "頻繁的；常發生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring or done on many occasions with short intervals",
        "cn_def": "頻繁的；常發生的"
      },
      {
        "pos": "v.",
        "en_def": "to visit a place often or habitually",
        "cn_def": "經常光顧；常去（動詞，/frɪˈkwent/）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
