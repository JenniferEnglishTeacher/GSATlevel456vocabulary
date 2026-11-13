// Part 5 Quiz Data: remind – yell
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 2-5 - remind – yell",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "remind",
    "pos": "v.",
    "cn_def": "提醒；使想起；使記起（動詞）",
    "en_def": "to cause someone to remember someone or something",
    "sentence": "Please {{BLANK}} me to turn off all the classroom lights and lock the front door before we head home.",
    "cn": "在我們回家之前，請提醒我關掉教室裡所有的電燈並鎖上前門。"
  },
  {
    "word": "reminder",
    "pos": "n.",
    "cn_def": "提醒物；提示信；提示備忘錄（可數）",
    "en_def": "a thing that causes someone to remember something, such as a note or notice",
    "sentence": "The bank sent an email {{BLANK}} reminding customers to pay their credit card balances before the due date.",
    "cn": "銀行寄出了一封電子郵件提醒通知，提醒顧客在截止日前繳納信用卡餘額。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "磅秤；秤盤；規模；等級；比例尺（可數）",
    "en_def": "an instrument for weighing; the relative size, extent, or degree of something; a series of marks",
    "sentence": "Before checking your heavy travel baggage at the airport, weigh each suitcase carefully on the digital {{BLANK}}.",
    "cn": "在機場托運沉重的行李前，請先在電子磅秤上仔細秤量每個行李箱。"
  },
  {
    "word": "scale",
    "pos": "v.",
    "cn_def": "攀登；登上（險峰）；按比例縮放",
    "en_def": "to climb up or over something high and steep; to adjust in size or proportion",
    "sentence": "Equipped with strong climbing ropes and ice axes, the adventurous mountaineers hoped to {{BLANK}} the icy north peak.",
    "cn": "裝備了堅固的登山繩索和冰斧，那些勇於冒險的登山客希望能攀登登上冰封的北峰。"
  },
  {
    "word": "stale",
    "pos": "adj.",
    "cn_def": "不新鮮的；走味的；陳腐老套的",
    "en_def": "no longer fresh, pleasant, or edible; dull, unoriginal, and lacking new ideas",
    "sentence": "If you leave the sliced loaf of bread on the kitchen counter uncovered, it will quickly turn hard and {{BLANK}}.",
    "cn": "如果你把切片麵包隨意敞開放在廚房流理台上，它很快就會變硬且不新鮮。"
  },
  {
    "word": "trader",
    "pos": "n.",
    "cn_def": "商人；交易商；證券交易員（可數）",
    "en_def": "a person who buys and sells goods, currency, or stocks as a business",
    "sentence": "My experienced stock {{BLANK}} advised me to wait for a market dip before investing in technology shares.",
    "cn": "我那位經驗豐富的證券交易員／操盤手建議我等市場回檔後，再行投資科技股。"
  },
  {
    "word": "trade",
    "pos": "n.",
    "cn_def": "貿易；商業；行業（不可數/可數）",
    "en_def": "the action of buying and selling goods and services; a particular job requiring manual skills",
    "sentence": "Rapid growth in overseas shipping has greatly expanded international {{BLANK}} between Asian and European nations.",
    "cn": "遠洋海運的迅速發展極大拓展了亞洲與歐洲國家之間的國際貿易。"
  },
  {
    "word": "trade",
    "pos": "v.",
    "cn_def": "買賣；進行交易；互相交換（動詞）",
    "en_def": "to buy and sell goods or services; to exchange one thing for another",
    "sentence": "During lunchtime at school, the friendly boys often {{BLANK}} their fruit snacks and sandwiches with each other.",
    "cn": "在學校吃午餐時，那些友善的男孩子們常常彼此交換水果點心和三明治。"
  },
  {
    "word": "trademark",
    "pos": "n.",
    "cn_def": "商標；標誌；特徵（可數）",
    "en_def": "a symbol or word legally registered to represent a company; a distinctive characteristic",
    "sentence": "The world-famous beverage company has protected its distinctive golden bottle logo as a registered {{BLANK}}.",
    "cn": "這家世界著名的飲料公司已將其獨特的金色瓶身標誌保護為註冊商標。"
  },
  {
    "word": "yell",
    "pos": "v.",
    "cn_def": "大叫；吼叫；大喊（動詞）",
    "en_def": "to give a loud, sharp cry or scream, typically of pain, anger, or excitement",
    "sentence": "Even when you feel extremely frustrated during a workplace dispute, you should never {{BLANK}} at your coworkers.",
    "cn": "即使在職場爭議中感到極度沮喪，你也絕不應該對你的同事大聲吼叫。"
  },
  {
    "word": "yell",
    "pos": "n.",
    "cn_def": "叫喊聲；吶喊；吼叫（可數）",
    "en_def": "a loud, sharp cry or shout of excitement, terror, or pain",
    "sentence": "When the scary haunted house door suddenly banged shut, the terrified girl let out a loud {{BLANK}}.",
    "cn": "當恐怖鬼屋的門突然砰地關上時，受驚嚇的女孩發出了一聲響亮的尖叫喊聲。"
  }
];

const MCQS = [
  {
    "q": "Put the bag of apples on the kitchen ______ to see how heavy it is.",
    "options": [
      "scale",
      "trader",
      "reminder",
      "yell"
    ],
    "answer": 0,
    "cn": "把這袋蘋果放在廚房秤／磅秤上，看看有多重。",
    "vocabIndex": 2
  },
  {
    "q": "The stock ______ sat in front of three computer screens looking at company shares.",
    "options": [
      "yell",
      "scale",
      "trader",
      "reminder"
    ],
    "answer": 2,
    "cn": "那位股票交易員／操盤手坐在三台電腦螢幕前看著公司股票。",
    "vocabIndex": 5
  },
  {
    "q": "I received an email ______ about my dentist appointment tomorrow morning.",
    "options": [
      "yell",
      "reminder",
      "scale",
      "trader"
    ],
    "answer": 1,
    "cn": "我收到了一封關於明天早上牙醫預約的電子郵件提醒函。",
    "vocabIndex": 1
  },
  {
    "q": "When the boy dropped the heavy book on his foot, he let out a loud ______.",
    "options": [
      "trader",
      "scale",
      "reminder",
      "yell"
    ],
    "answer": 3,
    "cn": "當男孩把沉重的書掉在腳上時，他發出了一聲大大的叫喊聲。",
    "vocabIndex": 9
  },
  {
    "q": "The sports shoes company has a famous check-mark logo as its registered ______.",
    "options": [
      "trademark",
      "reminder",
      "yell",
      "scale"
    ],
    "answer": 0,
    "cn": "這家運動鞋公司有一個著名的打勾符號標誌作為其註冊商標。",
    "vocabIndex": 8
  },
  {
    "q": "International ______ between countries helps people buy goods from around the world.",
    "options": [
      "yell",
      "scale",
      "trade",
      "reminder"
    ],
    "answer": 2,
    "cn": "國家之間的國際貿易幫助人們購買來自世界各地的商品。",
    "vocabIndex": 6
  },
  {
    "q": "On a ______ of one to ten, how much do you like this new action movie?",
    "options": [
      "yell",
      "trader",
      "reminder",
      "scale"
    ],
    "answer": 3,
    "cn": "在一到十分的評分量表／等級上，你有多喜歡這部新動作電影？",
    "vocabIndex": 2
  },
  {
    "q": "The teacher gave us a helpful ______ to bring our art supplies tomorrow.",
    "options": [
      "yell",
      "reminder",
      "trader",
      "scale"
    ],
    "answer": 1,
    "cn": "老師給了我們一個有用的提示備忘／提醒，明天要帶美術用品。",
    "vocabIndex": 1
  },
  {
    "q": "The fruit ______ sells fresh watermelons and bananas at the morning market.",
    "options": [
      "trader",
      "yell",
      "scale",
      "reminder"
    ],
    "answer": 0,
    "cn": "那位水果商販／商人在早市販賣新鮮西瓜和香蕉。",
    "vocabIndex": 5
  },
  {
    "q": "We heard a sharp ______ from the playground when Tommy scored a goal.",
    "options": [
      "reminder",
      "scale",
      "trader",
      "yell"
    ],
    "answer": 3,
    "cn": "當湯姆進球得分時，我們聽見操場上傳來一聲清脆的歡呼大叫聲。",
    "vocabIndex": 9
  },
  {
    "q": "Please ______ me to turn off the fan before we leave the classroom.",
    "options": [
      "scale",
      "yell",
      "remind",
      "trade"
    ],
    "answer": 2,
    "cn": "在我們離開教室之前，請提醒我關掉電風扇。",
    "vocabIndex": 0
  },
  {
    "q": "Even when you are angry, it is not polite to ______ loudly at your little sister.",
    "options": [
      "trade",
      "yell",
      "scale",
      "remind"
    ],
    "answer": 1,
    "cn": "即使你在生氣，對你的小妹妹大聲吼叫也是不禮貌的。",
    "vocabIndex": 9
  },
  {
    "q": "The brave climbers hope to ______ the high, snowy mountain this weekend.",
    "options": [
      "scale",
      "yell",
      "remind",
      "trade"
    ],
    "answer": 0,
    "cn": "勇敢的登山者們希望在這個週末攀登登上這座白雪皚皚的高山。",
    "vocabIndex": 2
  },
  {
    "q": "During lunchtime, I often ______ my apple for my friend's orange.",
    "options": [
      "yell",
      "scale",
      "remind",
      "trade"
    ],
    "answer": 3,
    "cn": "在吃午餐時，我常常用我的蘋果交換我朋友的柳橙。",
    "vocabIndex": 6
  },
  {
    "q": "That sweet song always ______ my grandmother of her wedding day long ago.",
    "options": [
      "yells",
      "trades",
      "reminds",
      "scales"
    ],
    "answer": 2,
    "cn": "那首甜美的歌曲總是能使我想起／使我祖母想起她很久以前的婚禮那一天。",
    "vocabIndex": 0
  },
  {
    "q": "When Peter saw a snake in the garden, he began to ______ for his father to help.",
    "options": [
      "trade",
      "yell",
      "scale",
      "remind"
    ],
    "answer": 1,
    "cn": "當彼得看見花園裡有條蛇時，他開始大聲呼喊請父親過來幫忙。",
    "vocabIndex": 9
  },
  {
    "q": "The bakery decided to ______ down its menu and sell only three kinds of bread.",
    "options": [
      "remind",
      "trade",
      "scale",
      "yell"
    ],
    "answer": 2,
    "cn": "這家麵包店決定縮減其菜單規模，只販售三種麵包。",
    "vocabIndex": 2
  },
  {
    "q": "Do not eat that old bread because it has been on the counter for days and is ______.",
    "options": [
      "stale",
      "scaled",
      "yelled",
      "traded"
    ],
    "answer": 0,
    "cn": "不要吃那塊舊麵包，因為它已經在流理台上放了好幾天，而且不新鮮了。",
    "vocabIndex": 4
  },
  {
    "q": "The air inside the closed room smelled ______ because no window was open.",
    "options": [
      "traded",
      "stale",
      "scaled",
      "yelled"
    ],
    "answer": 1,
    "cn": "緊閉房間裡的空氣聞起來污濁不新鮮，因為沒有開窗戶。",
    "vocabIndex": 4
  },
  {
    "q": "These potato chips are not crispy anymore; they have gone completely ______.",
    "options": [
      "traded",
      "scaled",
      "yelled",
      "stale"
    ],
    "answer": 3,
    "cn": "這些洋芋片不再酥脆了；它們已經完全走味軟化／變不新鮮了。",
    "vocabIndex": 4
  },
  {
    "q": "My father works in Taipei as a smart ______ who helps people buy stocks.",
    "options": [
      "gentle reminder",
      "stale bread",
      "stock trader",
      "bathroom scale"
    ],
    "answer": 2,
    "cn": "我父親在台北擔任一名聰明的股票交易員，協助人們買賣股票。",
    "vocabIndex": 5
  },
  {
    "q": "This is just a ______ that tomorrow is a holiday and school will be closed.",
    "options": [
      "stock trader",
      "bathroom scale",
      "stale bread",
      "gentle reminder"
    ],
    "answer": 3,
    "cn": "這只是一個溫馨提示／提醒，明天是國定假日，學校將不上課。",
    "vocabIndex": 1
  },
  {
    "q": "Please step onto the ______ so the nurse can see how much you weigh.",
    "options": [
      "stock trader",
      "bathroom scale",
      "gentle reminder",
      "stale bread"
    ],
    "answer": 1,
    "cn": "請站上體重計，以便護理師能量測你的體重。",
    "vocabIndex": 2
  },
  {
    "q": "Throw away that hard piece of ______ and open a new bag of fresh toast.",
    "options": [
      "stale bread",
      "gentle reminder",
      "bathroom scale",
      "stock trader"
    ],
    "answer": 0,
    "cn": "扔掉那塊發硬的不新鮮麵包，打開一袋新的新鮮吐司。",
    "vocabIndex": 4
  },
  {
    "q": "The concert was performed ______ with more than two hundred singers on stage.",
    "options": [
      "hit a brick wall",
      "birds of a feather flock together",
      "in cold blood",
      "on a large scale"
    ],
    "answer": 3,
    "cn": "這場音樂會以大規模地形式演出，舞台上有兩百多名歌手。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "remind": {
    "pos": "v.",
    "en_def": "to cause someone to remember someone or something",
    "cn_def": "提醒；使想起；使記起（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to remember someone or something",
        "cn_def": "提醒；使想起；使記起（動詞）"
      }
    ]
  },
  "reminder": {
    "pos": "n.",
    "en_def": "a thing that causes someone to remember something, such as a note or notice",
    "cn_def": "提醒物；提示信；提示備忘錄（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that causes someone to remember something, such as a note or notice",
        "cn_def": "提醒物；提示信；提示備忘錄（可數）"
      }
    ]
  },
  "scale": {
    "pos": "n.",
    "en_def": "an instrument for weighing; the relative size, extent, or degree of something; a series of marks",
    "cn_def": "磅秤；秤盤；規模；等級；比例尺（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an instrument for weighing; the relative size, extent, or degree of something; a series of marks",
        "cn_def": "磅秤；秤盤；規模；等級；比例尺（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to climb up or over something high and steep; to adjust in size or proportion",
        "cn_def": "攀登；登上（險峰）；按比例縮放"
      }
    ]
  },
  "stale": {
    "pos": "adj.",
    "en_def": "no longer fresh, pleasant, or edible; dull, unoriginal, and lacking new ideas",
    "cn_def": "不新鮮的；走味的；陳腐老套的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "no longer fresh, pleasant, or edible; dull, unoriginal, and lacking new ideas",
        "cn_def": "不新鮮的；走味的；陳腐老套的"
      }
    ]
  },
  "trader": {
    "pos": "n.",
    "en_def": "a person who buys and sells goods, currency, or stocks as a business",
    "cn_def": "商人；交易商；證券交易員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who buys and sells goods, currency, or stocks as a business",
        "cn_def": "商人；交易商；證券交易員（可數）"
      }
    ]
  },
  "trade": {
    "pos": "n.",
    "en_def": "the action of buying and selling goods and services; a particular job requiring manual skills",
    "cn_def": "貿易；商業；行業（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of buying and selling goods and services; a particular job requiring manual skills",
        "cn_def": "貿易；商業；行業（不可數/可數）"
      },
      {
        "pos": "v.",
        "en_def": "to buy and sell goods or services; to exchange one thing for another",
        "cn_def": "買賣；進行交易；互相交換（動詞）"
      }
    ]
  },
  "trademark": {
    "pos": "n.",
    "en_def": "a symbol or word legally registered to represent a company; a distinctive characteristic",
    "cn_def": "商標；標誌；特徵（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a symbol or word legally registered to represent a company; a distinctive characteristic",
        "cn_def": "商標；標誌；特徵（可數）"
      }
    ]
  },
  "yell": {
    "pos": "v.",
    "en_def": "to give a loud, sharp cry or scream, typically of pain, anger, or excitement",
    "cn_def": "大叫；吼叫；大喊（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a loud, sharp cry or scream, typically of pain, anger, or excitement",
        "cn_def": "大叫；吼叫；大喊（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a loud, sharp cry or shout of excitement, terror, or pain",
        "cn_def": "叫喊聲；吶喊；吼叫（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
