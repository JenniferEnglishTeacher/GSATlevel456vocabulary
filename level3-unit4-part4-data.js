// Part 4 Quiz Data: passenger – romantic
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 4-4 - passenger – romantic",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "passenger",
    "pos": "n.",
    "cn_def": "乘客；旅客（可數）",
    "en_def": "a traveler on a public or private conveyance other than the driver or crew",
    "sentence": "The flight attendant kindly reminded each seated {{BLANK}} to fasten their seatbelts before takeoff.",
    "cn": "空服員親切地提醒每一位就座的乘客在起飛前繫緊安全帶。"
  },
  {
    "word": "pole",
    "pos": "n.",
    "cn_def": "桿子；柱子；極點（可數）",
    "en_def": "a long, slender, rounded piece of wood or metal; either of the earth's axis ends",
    "sentence": "Every Monday morning, the school principal raises the national flag to the top of the tall {{BLANK}}.",
    "cn": "每週一早晨，校長都會將國旗升到高大旗桿的頂端。"
  },
  {
    "word": "political",
    "pos": "adj.",
    "cn_def": "政治的；政黨的",
    "en_def": "relating to the government or the public affairs of a country",
    "sentence": "Tom and his father often disagree about national policies because they support completely different {{BLANK}} parties.",
    "cn": "湯姆和他父親經常對國家政策意見不合，因為他們支持完全不同的政黨。"
  },
  {
    "word": "politician",
    "pos": "n.",
    "cn_def": "從政者；政客；政治人物（可數）",
    "en_def": "a person who is professionally involved in politics, especially as an elected official",
    "sentence": "Voters were disappointed when the newly elected {{BLANK}} failed to fulfill his key campaign promises.",
    "cn": "當新當選的政客／政治人物未能兌現關鍵競選承諾時，選民們感到很失望。"
  },
  {
    "word": "politics",
    "pos": "n.",
    "cn_def": "政治；政治事務（不可數，常作單數）",
    "en_def": "the activities associated with the governance of a country or area",
    "sentence": "After practicing corporate law for fifteen years, Sarah decided to enter national {{BLANK}} to fight for civil rights.",
    "cn": "在從事公司法律業務十五年後，莎拉決定步入國家政壇／政治為公民權利而奮鬥。"
  },
  {
    "word": "rank",
    "pos": "n.",
    "cn_def": "軍階；階級；地位（可數/不可數）",
    "en_def": "a position in the hierarchy of the armed forces or an organization; high social standing",
    "sentence": "After serving bravely in the army for seven years, James rose in {{BLANK}} to become a respected captain.",
    "cn": "在軍隊英勇服役七年後，詹姆士晉升了軍階／階級成為一名備受尊敬的上尉。"
  },
  {
    "word": "ranked",
    "pos": "v.",
    "cn_def": "評定等級；名列；排列名次（動詞）",
    "en_def": "to give someone or something a rank or place in a graded hierarchy",
    "sentence": "Because Kelly studied exceptionally hard throughout the semester, she was {{BLANK}} first in her graduating class.",
    "cn": "因為凱莉整個學期都極為用功，她在畢業班中排名第一。"
  },
  {
    "word": "resist",
    "pos": "v.",
    "cn_def": "抵抗；耐（高溫/酸）；抵擋（誘惑）（動詞）",
    "en_def": "to withstand the action or effect of; to refrain from doing something tempting",
    "sentence": "This newly developed aerospace alloy is engineered to {{BLANK}} extreme heat during atmospheric reentry.",
    "cn": "這種新研發的航空合金經過專門設計，能夠在重返大氣層時承受／耐極端高溫。"
  },
  {
    "word": "resistance",
    "pos": "n.",
    "cn_def": "抵抗；抗拒；抗藥性；免疫力（不可數）",
    "en_def": "the refusal to accept or comply with something; the ability not to be affected by disease",
    "sentence": "Eating fresh fruits and exercising outdoors helps your body build up natural {{BLANK}} against common winter colds.",
    "cn": "食用新鮮水果和在戶外運動有助於你的身體建立對常見冬季感冒的天然抵抗力。"
  },
  {
    "word": "response",
    "pos": "n.",
    "cn_def": "回答；回應；反應（可數/不可數）",
    "en_def": "a verbal or written answer; a reaction to something",
    "sentence": "The university customer service team promised to send a detailed written {{BLANK}} to my email within twenty-four hours.",
    "cn": "該大學客戶服務團隊承諾在二十四小時內對我的電子郵件發送詳細的書面回覆。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回答；做出反應（動詞）",
    "en_def": "to say something in reply; to act in reaction to something",
    "sentence": "The company representative promised to {{BLANK}} to all customer inquiries before the end of the business day.",
    "cn": "公司代表承諾在營業日結束前回覆回答所有顧客的詢問。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "危險；風險（可數/不可數）",
    "en_def": "a situation involving exposure to danger, harm, or financial loss",
    "sentence": "Investing all your retirement savings into a single volatile technology stock involves a tremendous financial {{BLANK}}.",
    "cn": "將你所有的退休積蓄投資於單一波動較大的科技股票伴隨著巨大的財務風險。"
  },
  {
    "word": "risk",
    "pos": "v.",
    "cn_def": "冒著…的危險；以…做賭注（動詞）",
    "en_def": "to expose to danger or loss; to act in a hazardous way",
    "sentence": "You should never {{BLANK}} driving home after drinking alcohol because you could harm yourself and others.",
    "cn": "你絕不應該冒著…的危險酒後駕車回家，因為這會傷害你自己和他人。"
  },
  {
    "word": "risky",
    "pos": "adj.",
    "cn_def": "危險的；冒險的；充滿風險的",
    "en_def": "full of the possibility of danger, failure, or loss",
    "sentence": "Driving down the steep mountain highway during a torrential midnight rainstorm is an extremely {{BLANK}} journey.",
    "cn": "在傾盆豪雨的午夜開車下陡峭的山區公路是一趟極其危險冒險的旅程。"
  },
  {
    "word": "romantic",
    "pos": "adj.",
    "cn_def": "浪漫的；多情的",
    "en_def": "relating to, conducive to, or suggestive of love and romance",
    "sentence": "The loving couple celebrated their fifth wedding anniversary with a candlelit {{BLANK}} dinner beside the quiet beach.",
    "cn": "這對相愛的夫妻在幽靜的海灘旁享用了一頓燭光浪漫晚餐，以慶祝他們的五週年結婚紀念日。"
  }
];

const MCQS = [
  {
    "q": "The train conductor checked the ticket of each ______ before the train arrived in the capital.",
    "options": [
      "pole",
      "rank",
      "passenger",
      "risk"
    ],
    "answer": 2,
    "cn": "列車長在火車抵達首都前檢查了每位乘客的車票。",
    "vocabIndex": 0
  },
  {
    "q": "The national flag fluttered proudly at the top of the tall white ______ in front of the school.",
    "options": [
      "pole",
      "passenger",
      "response",
      "politician"
    ],
    "answer": 0,
    "cn": "國旗在學校前高聳的白色旗桿頂端驕傲地飄揚。",
    "vocabIndex": 1
  },
  {
    "q": "The city voters listened carefully to the speech given by the local ______ before the election.",
    "options": [
      "pole",
      "politician",
      "rank",
      "passenger"
    ],
    "answer": 1,
    "cn": "市民選民在選舉前仔細聆聽了當地政治人物發表的演說。",
    "vocabIndex": 3
  },
  {
    "q": "After serving bravely in the army for ten years, Henry reached the high ______ of captain.",
    "options": [
      "passenger",
      "pole",
      "politician",
      "rank"
    ],
    "answer": 3,
    "cn": "在軍隊英勇服役十年後，亨利達到了上尉的高軍階／階級。",
    "vocabIndex": 5
  },
  {
    "q": "I wrote an email to the hotel three days ago, but I have not received a ______ yet.",
    "options": [
      "passenger",
      "pole",
      "response",
      "rank"
    ],
    "answer": 2,
    "cn": "我三天前給飯店寫了電子郵件，但至今還沒有收到回覆／回應。",
    "vocabIndex": 9
  },
  {
    "q": "Walking alone in the dark forest without a flashlight involves a big ______ of falling down.",
    "options": [
      "pole",
      "risk",
      "passenger",
      "politician"
    ],
    "answer": 1,
    "cn": "在黑暗的森林裡沒帶手電筒獨自步行伴隨著跌倒的巨大風險／危險。",
    "vocabIndex": 11
  },
  {
    "q": "Eating fresh fruit and drinking clean water will build up your body's ______ against illness.",
    "options": [
      "resistance",
      "pole",
      "passenger",
      "politician"
    ],
    "answer": 0,
    "cn": "吃新鮮水果和喝乾淨水將會建立起你身體對抗疾病的抵抗力。",
    "vocabIndex": 8
  },
  {
    "q": "My older sister loves studying how governments make laws, so she chose to study ______.",
    "options": [
      "pole",
      "passenger",
      "rank",
      "politics"
    ],
    "answer": 3,
    "cn": "我姐姐熱愛研究政府如何制定法律，因此她選擇研讀政治學／政治。",
    "vocabIndex": 4
  },
  {
    "q": "Tom and his father belong to different ______ parties, so they often debate during dinner.",
    "options": [
      "political",
      "risky",
      "romantic",
      "resistant"
    ],
    "answer": 0,
    "cn": "湯姆和他父親屬於不同的政黨，所以他們晚餐時常進行辯論。",
    "vocabIndex": 2
  },
  {
    "q": "Climbing up that steep, icy rock without ropes is far too ______ for beginners.",
    "options": [
      "political",
      "resistant",
      "romantic",
      "risky"
    ],
    "answer": 3,
    "cn": "不用繩索攀爬那塊陡峭結冰的岩石對於初學者來說實在太危險／冒險了。",
    "vocabIndex": 13
  },
  {
    "q": "The young couple enjoyed a quiet, ______ dinner by candlelight beside the ocean.",
    "options": [
      "political",
      "risky",
      "romantic",
      "resistant"
    ],
    "answer": 2,
    "cn": "那對年輕夫妻在海邊享受了一頓寧靜浪漫的燭光晚餐。",
    "vocabIndex": 14
  },
  {
    "q": "This special watch is ______ to water, so you can wear it while swimming in the pool.",
    "options": [
      "political",
      "resistant",
      "romantic",
      "risky"
    ],
    "answer": 1,
    "cn": "這款特別的手錶具有耐／抗水性，因此你可以在泳池游泳時佩戴。"
  },
  {
    "q": "Because Amy studied hard every single day, she was ______ first in her English class.",
    "options": [
      "responded",
      "resisted",
      "ranked",
      "risked"
    ],
    "answer": 2,
    "cn": "因為艾米每一天都很用功讀書，她在英語班上名列／排名第一。",
    "vocabIndex": 5
  },
  {
    "q": "I tried to diet, but I could not ______ eating that delicious strawberry ice cream.",
    "options": [
      "rank",
      "risk",
      "respond",
      "resist"
    ],
    "answer": 3,
    "cn": "我試圖節食，但我實在無法抵擋吃那份美味草莓冰淇淋的誘惑。",
    "vocabIndex": 7
  },
  {
    "q": "The polite shopkeeper will ______ to your questions immediately with a warm smile.",
    "options": [
      "rank",
      "respond",
      "resist",
      "risk"
    ],
    "answer": 1,
    "cn": "有禮貌的店主會帶著熱情的微笑立即回覆／回答你的問題。",
    "vocabIndex": 10
  },
  {
    "q": "The brave swimmer ______ his life by jumping into the rapid river to save the dog.",
    "options": [
      "risked",
      "resisted",
      "responded",
      "ranked"
    ],
    "answer": 0,
    "cn": "那位勇敢的游泳者跳進湍急的河流中救狗，冒著生命危險。",
    "vocabIndex": 13
  },
  {
    "q": "Travelers brave freezing winds and thick snow to visit the icy South ______ in Antarctica.",
    "options": [
      "Response",
      "Rank",
      "Risk",
      "Pole"
    ],
    "answer": 3,
    "cn": "旅人們頂著刺骨寒風與厚雪，前往南極洲造訪冰天雪地的南極。",
    "vocabIndex": 1
  },
  {
    "q": "The hotel manager quickly ______ to the customer's request by providing extra clean towels.",
    "options": [
      "responded",
      "ranked",
      "resisted",
      "risked"
    ],
    "answer": 0,
    "cn": "飯店經理提供額外的乾淨毛巾，迅速回應了顧客的要求。",
    "vocabIndex": 10
  },
  {
    "q": "Special rubber coats are used by electric workers because rubber can ______ electric shocks.",
    "options": [
      "rank",
      "resist",
      "respond",
      "risk"
    ],
    "answer": 1,
    "cn": "電力工人使用特殊橡膠外衣，因為橡膠能夠抵擋／絕緣電擊。",
    "vocabIndex": 7
  },
  {
    "q": "You should not ______ losing your school scholarship by not studying for final exams.",
    "options": [
      "rank",
      "resist",
      "risk",
      "respond"
    ],
    "answer": 2,
    "cn": "你不應該因為不為期末考溫習而冒著失去學校獎學金的危險。",
    "vocabIndex": 11
  },
  {
    "q": "Starting a new company requires hard work and you often have to ______ to succeed.",
    "options": [
      "beat around the bush",
      "take a risk",
      "bundle up",
      "in exchange for"
    ],
    "answer": 1,
    "cn": "創立一家新公司需要辛勤努力，而且你通常必須承擔冒險才能成功。",
    "vocabIndex": 13
  },
  {
    "q": "Children who do not eat vegetables and fruits every day are ______ of getting sick easily.",
    "options": [
      "at risk",
      "in exchange for",
      "at first glance",
      "beating around the bush"
    ],
    "answer": 0,
    "cn": "每天不吃蔬菜和水果的孩子很容易處於…的危險中生病。",
    "vocabIndex": 13
  },
  {
    "q": "______ the loud emergency alarm, all office staff walked downstairs to the exit.",
    "options": [
      "In exchange for",
      "At first glance",
      "Beat around the bush",
      "In response to"
    ],
    "answer": 3,
    "cn": "為了回應／響應響亮的緊急警報，所有辦公室員工都走下樓梯前往出口。",
    "vocabIndex": 9
  },
  {
    "q": "My sister loves funny love stories, so she rented a popular ______ to watch with her friend.",
    "options": [
      "senior citizen",
      "laser beam",
      "romantic comedy",
      "melon seed"
    ],
    "answer": 2,
    "cn": "我妹妹喜愛有趣的愛情故事，所以她租了一部熱門的浪漫愛情喜劇和朋友一起看。",
    "vocabIndex": 14
  },
  {
    "q": "Brave explorers walked across the frozen ocean until they finally reached the cold ______.",
    "options": [
      "North Pole",
      "box office",
      "walk-in closet",
      "senior citizen"
    ],
    "answer": 0,
    "cn": "勇敢的探險家走過結冰的海洋，直到他們最終抵達了寒冷的北極。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "passenger": {
    "pos": "n.",
    "en_def": "a traveler on a public or private conveyance other than the driver or crew",
    "cn_def": "乘客；旅客（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a traveler on a public or private conveyance other than the driver or crew",
        "cn_def": "乘客；旅客（可數）"
      }
    ]
  },
  "pole": {
    "pos": "n.",
    "en_def": "a long, slender, rounded piece of wood or metal; either of the earth's axis ends",
    "cn_def": "桿子；柱子；極點（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long, slender, rounded piece of wood or metal; either of the earth's axis ends",
        "cn_def": "桿子；柱子；極點（可數）"
      }
    ]
  },
  "political": {
    "pos": "adj.",
    "en_def": "relating to the government or the public affairs of a country",
    "cn_def": "政治的；政黨的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the government or the public affairs of a country",
        "cn_def": "政治的；政黨的"
      }
    ]
  },
  "politician": {
    "pos": "n.",
    "en_def": "a person who is professionally involved in politics, especially as an elected official",
    "cn_def": "從政者；政客；政治人物（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is professionally involved in politics, especially as an elected official",
        "cn_def": "從政者；政客；政治人物（可數）"
      }
    ]
  },
  "politics": {
    "pos": "n.",
    "en_def": "the activities associated with the governance of a country or area",
    "cn_def": "政治；政治事務（不可數，常作單數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the activities associated with the governance of a country or area",
        "cn_def": "政治；政治事務（不可數，常作單數）"
      }
    ]
  },
  "rank": {
    "pos": "n.",
    "en_def": "a position in the hierarchy of the armed forces or an organization; high social standing",
    "cn_def": "軍階；階級；地位（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a position in the hierarchy of the armed forces or an organization; high social standing",
        "cn_def": "軍階；階級；地位（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to give someone or something a rank or place in a graded hierarchy",
        "cn_def": "評定等級；名列；排列名次（動詞）"
      }
    ]
  },
  "ranked": {
    "pos": "v.",
    "en_def": "to give someone or something a rank or place in a graded hierarchy",
    "cn_def": "評定等級；名列；排列名次（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone or something a rank or place in a graded hierarchy",
        "cn_def": "評定等級；名列；排列名次（動詞）"
      }
    ]
  },
  "resist": {
    "pos": "v.",
    "en_def": "to withstand the action or effect of; to refrain from doing something tempting",
    "cn_def": "抵抗；耐（高溫/酸）；抵擋（誘惑）（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to withstand the action or effect of; to refrain from doing something tempting",
        "cn_def": "抵抗；耐（高溫/酸）；抵擋（誘惑）（動詞）"
      }
    ]
  },
  "resistance": {
    "pos": "n.",
    "en_def": "the refusal to accept or comply with something; the ability not to be affected by disease",
    "cn_def": "抵抗；抗拒；抗藥性；免疫力（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the refusal to accept or comply with something; the ability not to be affected by disease",
        "cn_def": "抵抗；抗拒；抗藥性；免疫力（不可數）"
      }
    ]
  },
  "response": {
    "pos": "n.",
    "en_def": "a verbal or written answer; a reaction to something",
    "cn_def": "回答；回應；反應（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a verbal or written answer; a reaction to something",
        "cn_def": "回答；回應；反應（可數/不可數）"
      }
    ]
  },
  "respond": {
    "pos": "v.",
    "en_def": "to say something in reply; to act in reaction to something",
    "cn_def": "回答；做出反應（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say something in reply; to act in reaction to something",
        "cn_def": "回答；做出反應（動詞）"
      }
    ]
  },
  "risk": {
    "pos": "n.",
    "en_def": "a situation involving exposure to danger, harm, or financial loss",
    "cn_def": "危險；風險（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a situation involving exposure to danger, harm, or financial loss",
        "cn_def": "危險；風險（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to expose to danger or loss; to act in a hazardous way",
        "cn_def": "冒著…的危險；以…做賭注（動詞）"
      }
    ]
  },
  "risky": {
    "pos": "adj.",
    "en_def": "full of the possibility of danger, failure, or loss",
    "cn_def": "危險的；冒險的；充滿風險的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of the possibility of danger, failure, or loss",
        "cn_def": "危險的；冒險的；充滿風險的"
      }
    ]
  },
  "romantic": {
    "pos": "adj.",
    "en_def": "relating to, conducive to, or suggestive of love and romance",
    "cn_def": "浪漫的；多情的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, conducive to, or suggestive of love and romance",
        "cn_def": "浪漫的；多情的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
