// Part 3 Quiz Data: dust – marvel
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 18-3 - dust – marvel",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dust",
    "pos": "n./v.",
    "cn_def": "灰塵；塵土；除塵擦拭（名詞/動詞）",
    "en_def": "fine, dry powder consisting of tiny particles of earth or waste; to clean dust off",
    "sentence": "The old library books had been left on the top shelf for years under a thick layer of {{BLANK}}.",
    "cn": "那些老舊的圖書館書籍在頂層書架上放置了多年，覆蓋著厚厚的一層灰塵。"
  },
  {
    "word": "fence",
    "pos": "n./v.",
    "cn_def": "柵欄；圍欄；擊劍（名詞/動詞）",
    "en_def": "a barrier enclosing an area of ground; to enclose with a fence; to practice swordplay",
    "sentence": "The farmer built a sturdy wooden {{BLANK}} around the apple orchard to keep wild rabbits and deer away.",
    "cn": "農夫在蘋果園周圍建造了一道堅固的木柵欄，以防止野兔和鹿靠近。"
  },
  {
    "word": "fighter",
    "pos": "n.",
    "cn_def": "戰士；鬥士；戰鬥機（可數）",
    "en_def": "a person who fights; a boxer; a fast military aircraft",
    "sentence": "The courageous young cancer patient remained a brave {{BLANK}} throughout her long and difficult medical treatment.",
    "cn": "那位勇敢的年輕癌症病患在漫長而艱難的醫療過程中始終是一位堅強的鬥士。"
  },
  {
    "word": "fireworks",
    "pos": "n.",
    "cn_def": "煙火；煙花（通常複數 fireworks）",
    "en_def": "a device containing gunpowder and other chemicals that explodes to produce lights and smoke",
    "sentence": "Thousands of excited citizens gathered along the city harbor to watch the spectacular New Year {{BLANK}} display.",
    "cn": "數以千計興奮的市民聚集在城市港口，觀看壯麗的新年煙火表演。"
  },
  {
    "word": "helmet",
    "pos": "n.",
    "cn_def": "安全帽；頭盔（可數）",
    "en_def": "a hard or padded protective hat, worn by motorcyclists, soldiers, or sports players",
    "sentence": "Traffic laws strictly require all motorcycle riders to wear a protective {{BLANK}} whenever traveling on public roads.",
    "cn": "交通法規嚴格要求所有機車騎士在行駛於公路上時必須佩戴防護性安全帽。"
  },
  {
    "word": "kilometers",
    "pos": "n.",
    "cn_def": "公里；千米（可數，縮寫 km）",
    "en_def": "a metric unit of measurement equal to 1,000 meters (approx. 0.62 miles)",
    "sentence": "The long-distance highway was completely clear, allowing cars to travel safely at one hundred {{BLANK}} per hour.",
    "cn": "長途公路上完全沒有堵車，允許汽車以每小時一百公里的速度安全行駛。"
  },
  {
    "word": "loose",
    "pos": "adj.",
    "cn_def": "鬆動的；寬鬆的；散漫的",
    "en_def": "not firmly or tightly fixed in place; not fitting tightly",
    "sentence": "The little boy was very excited because his front baby tooth became {{BLANK}} and was ready to fall out.",
    "cn": "那個小男孩非常興奮，因為他前面的乳牙變得鬆動了，隨時準備掉下來。"
  },
  {
    "word": "loosen",
    "pos": "v.",
    "cn_def": "放鬆；鬆開；解開（動詞）",
    "en_def": "to make or become less tight or firm; to relax one's grip or rules",
    "sentence": "Gentle stretching exercises before bed can effectively {{BLANK}} up tight muscles and reduce physical stress.",
    "cn": "睡前做一些溫和的伸展運動可以有效放鬆緊繃的肌肉並減輕身體壓力。"
  },
  {
    "word": "marvelous",
    "pos": "adj.",
    "cn_def": "絕妙的；令人驚嘆的；極好的",
    "en_def": "causing great wonder; extraordinary; extremely good",
    "sentence": "The international orchestra delivered a truly {{BLANK}} performance that earned a standing ovation from everyone in the auditorium.",
    "cn": "這支國際交響樂團帶來了一場真正絕妙精彩的演出，贏得了音樂廳內全場觀眾的起立鼓掌。"
  },
  {
    "word": "marvel",
    "pos": "v./n.",
    "cn_def": "感到驚嘆；奇蹟；奇觀（動詞/名詞）",
    "en_def": "to be filled with wonder or astonishment; a wonderful or astonishing thing",
    "sentence": "Tourists from around the globe {{BLANK}} at the breathtaking natural beauty and immense size of the Grand Canyon.",
    "cn": "來自全球各地的遊客無不對大峽谷令人屏息的自然之美與巨大規模驚嘆不已。"
  }
];

const MCQS = [
  {
    "q": "The old wooden table was covered in gray ______ because nobody had cleaned it for months.",
    "options": [
      "fence",
      "helmet",
      "dust",
      "kilometer"
    ],
    "answer": 2,
    "cn": "那張老木桌上覆蓋著灰色灰塵，因為好幾個月都沒有人打掃了。",
    "vocabIndex": 0
  },
  {
    "q": "Dad built a white wooden ______ around our garden to stop wild rabbits from eating our carrots.",
    "options": [
      "dust",
      "fence",
      "kilometer",
      "firework"
    ],
    "answer": 1,
    "cn": "爸爸在我們花園周圍建造了一道白色木柵欄／圍欄，以阻止野兔吃我們的胡蘿蔔。",
    "vocabIndex": 1
  },
  {
    "q": "The brave ______ rushed into the burning house and saved the crying kitten.",
    "options": [
      "firefighter",
      "fence",
      "dust",
      "kilometer"
    ],
    "answer": 0,
    "cn": "勇敢的消防員衝進燃燒的房子拯救了哭叫的小貓。"
  },
  {
    "q": "On New Year's Eve, we stood in the park and watched colorful ______ light up the dark sky.",
    "options": [
      "helmets",
      "fences",
      "kilometers",
      "fireworks"
    ],
    "answer": 3,
    "cn": "在跨年夜，我們站在公園裡看著五顏六色的煙火照亮黑夜。",
    "vocabIndex": 3
  },
  {
    "q": "You must always wear a hard protective ______ on your head when you ride a scooter.",
    "options": [
      "helmet",
      "fence",
      "dust",
      "firework"
    ],
    "answer": 0,
    "cn": "當你騎機車時，頭上必須始終佩戴堅固的防護安全帽。",
    "vocabIndex": 4
  },
  {
    "q": "The distance from my house to the city library is exactly two ______.",
    "options": [
      "helmets",
      "dusts",
      "fences",
      "kilometers"
    ],
    "answer": 3,
    "cn": "從我家到市立圖書館的距離正好是兩公里。",
    "vocabIndex": 5
  },
  {
    "q": "This magnificent new skyscraper is a true modern engineering ______.",
    "options": [
      "fence",
      "helmet",
      "marvel",
      "dust"
    ],
    "answer": 2,
    "cn": "這座壯麗的新摩天大樓是一項真正的現代工程奇蹟。",
    "vocabIndex": 9
  },
  {
    "q": "The fighter pilot locked onto the target and fired two missiles at the enemy ______.",
    "options": [
      "fence",
      "jet",
      "helmet",
      "dust"
    ],
    "answer": 1,
    "cn": "戰鬥機飛行員鎖定目標，向敵方噴射機發射了兩枚飛彈。"
  },
  {
    "q": "These pants are too ______ around my waist, so I need to wear a belt to hold them up.",
    "options": [
      "loose",
      "marvelous",
      "dusty",
      "fenced"
    ],
    "answer": 0,
    "cn": "這件褲子腰圍太寬鬆了，所以我需要繫皮帶才能固定住。",
    "vocabIndex": 6
  },
  {
    "q": "The room had not been cleaned for years, so all the old books on the shelf were ______.",
    "options": [
      "loose",
      "marvelous",
      "dusty",
      "kilometers"
    ],
    "answer": 2,
    "cn": "這間房間很多年沒打掃了，所以架子上的所有舊書都滿是灰塵。",
    "vocabIndex": 0
  },
  {
    "q": "We had a ______ vacation in Hawaii and swam with colorful tropical fish every day.",
    "options": [
      "loose",
      "marvelous",
      "dusty",
      "fenced"
    ],
    "answer": 1,
    "cn": "我們在夏威夷度過了一個極好美妙的假期，每天都和五顏六色的熱帶魚一起游泳。",
    "vocabIndex": 8
  },
  {
    "q": "The front tooth of the little girl became ______ and was ready to fall out naturally.",
    "options": [
      "bold",
      "marvelous",
      "dusty",
      "loose"
    ],
    "answer": 3,
    "cn": "那個小女孩的前門牙變鬆動了，準備自然脫落。",
    "vocabIndex": 6
  },
  {
    "q": "Grandma asked me to help ______ the wooden shelves before placing the new cups there.",
    "options": [
      "loosen",
      "dust",
      "marvel",
      "fence"
    ],
    "answer": 1,
    "cn": "祖母叫我幫忙把木架子除塵擦乾淨，然後再放上新杯子。",
    "vocabIndex": 0
  },
  {
    "q": "The farmer ______ the vegetable field with strong wire so goats could not enter.",
    "options": [
      "fenced",
      "dusted",
      "loosened",
      "marveled"
    ],
    "answer": 0,
    "cn": "農夫用結實的鐵絲把菜園圍上了柵欄，讓山羊進不去。",
    "vocabIndex": 1
  },
  {
    "q": "Dad ______ his necktie after arriving home from a long day at the office.",
    "options": [
      "dusted",
      "fenced",
      "loosened",
      "marveled"
    ],
    "answer": 2,
    "cn": "在辦公室度過漫長的一天回家後，爸爸解開／放鬆了他的領帶。",
    "vocabIndex": 7
  },
  {
    "q": "Tourists around the world ______ at the breathtaking beauty of the snow-capped mountains.",
    "options": [
      "dust",
      "fence",
      "loosen",
      "marvel"
    ],
    "answer": 3,
    "cn": "世界各地的遊客無不對白雪皚皚的山脈之美驚嘆不已。",
    "vocabIndex": 9
  },
  {
    "q": "Before running in the race, you should stretch to ______ up your tight muscles.",
    "options": [
      "dust",
      "loosen",
      "fence",
      "marvel"
    ],
    "answer": 1,
    "cn": "在賽跑之前，你應該做伸展運動來放鬆緊繃的肌肉。",
    "vocabIndex": 7
  },
  {
    "q": "The dangerous construction site was securely ______ to prevent children from getting hurt.",
    "options": [
      "bitten the dust",
      "set off fireworks",
      "fenced off",
      "on the fence"
    ],
    "answer": 2,
    "cn": "危險的建築工地被牢固地用圍欄隔離起來，以防止孩童受傷。",
    "vocabIndex": 1
  },
  {
    "q": "Jack is still ______ about which university to attend and cannot make up his mind.",
    "options": [
      "fenced off",
      "bitten the dust",
      "set off",
      "on the fence"
    ],
    "answer": 3,
    "cn": "傑克對於要就讀哪所大學仍然猶豫不決／持觀望態度，無法下定決心。",
    "vocabIndex": 1
  },
  {
    "q": "During the festival, neighbors like to gather in the town square and ______ into the sky.",
    "options": [
      "set off fireworks",
      "bite the dust",
      "fence off",
      "loosen ties"
    ],
    "answer": 0,
    "cn": "在節日期間，鄰居們喜歡聚集在城鎮廣場，向天空燃放煙火。",
    "vocabIndex": 3
  },
  {
    "q": "Motorcycle laws strictly say that you must ______ on every trip for your safety.",
    "options": [
      "set off fireworks",
      "fence off",
      "wear a helmet",
      "marvel at"
    ],
    "answer": 2,
    "cn": "機車法規嚴格規定，為了安全起見，每次騎乘時你都必須佩戴安全帽。",
    "vocabIndex": 4
  },
  {
    "q": "In the hot tropical summer weather, it is very comfortable to wear light and ______.",
    "options": [
      "loose clothing",
      "thick layers of dust",
      "fighter jets",
      "fireworks displays"
    ],
    "answer": 0,
    "cn": "在炎熱的熱帶夏日氣候裡，穿著輕便且寬鬆的衣服非常舒適。",
    "vocabIndex": 6
  },
  {
    "q": "The pianist gave a ______ that received standing applause from everyone in the hall.",
    "options": [
      "marvel at",
      "wooden fence",
      "thick dust",
      "marvelous performance"
    ],
    "answer": 3,
    "cn": "那位鋼琴家帶來了一場絕妙的精彩演奏，獲得了大廳裡全場觀眾的起立鼓掌。",
    "vocabIndex": 8
  },
  {
    "q": "Visitors from many countries ______ the massive stone pyramids when they visit Egypt.",
    "options": [
      "fence off",
      "marvel at",
      "bite the dust",
      "loosen up"
    ],
    "answer": 1,
    "cn": "來自許多國家的遊客在訪問埃及時，對巨大的石頭金字塔驚嘆不已。",
    "vocabIndex": 9
  },
  {
    "q": "All cars on the city expressway must travel under the speed limit of ninety ______.",
    "options": [
      "layers of dust",
      "marvelous times",
      "kilometers per hour",
      "safety helmets"
    ],
    "answer": 2,
    "cn": "市區快速道路上的所有汽車行駛速度都必須低於每小時九十公里的速限。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "dust": {
    "pos": "n./v.",
    "en_def": "fine, dry powder consisting of tiny particles of earth or waste; to clean dust off",
    "cn_def": "灰塵；塵土；除塵擦拭（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "fine, dry powder consisting of tiny particles of earth or waste; to clean dust off",
        "cn_def": "灰塵；塵土；除塵擦拭（名詞/動詞）"
      }
    ]
  },
  "fence": {
    "pos": "n./v.",
    "en_def": "a barrier enclosing an area of ground; to enclose with a fence; to practice swordplay",
    "cn_def": "柵欄；圍欄；擊劍（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a barrier enclosing an area of ground; to enclose with a fence; to practice swordplay",
        "cn_def": "柵欄；圍欄；擊劍（名詞/動詞）"
      }
    ]
  },
  "fighter": {
    "pos": "n.",
    "en_def": "a person who fights; a boxer; a fast military aircraft",
    "cn_def": "戰士；鬥士；戰鬥機（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who fights; a boxer; a fast military aircraft",
        "cn_def": "戰士；鬥士；戰鬥機（可數）"
      }
    ]
  },
  "firework": {
    "pos": "n.",
    "en_def": "a device containing gunpowder and other chemicals that explodes to produce lights and smoke",
    "cn_def": "煙火；煙花（通常複數 fireworks）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device containing gunpowder and other chemicals that explodes to produce lights and smoke",
        "cn_def": "煙火；煙花（通常複數 fireworks）"
      }
    ]
  },
  "fireworks": {
    "pos": "n.",
    "en_def": "a device containing gunpowder and other chemicals that explodes to produce lights and smoke",
    "cn_def": "煙火；煙花（通常複數 fireworks）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device containing gunpowder and other chemicals that explodes to produce lights and smoke",
        "cn_def": "煙火；煙花（通常複數 fireworks）"
      }
    ]
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard or padded protective hat, worn by motorcyclists, soldiers, or sports players",
    "cn_def": "安全帽；頭盔（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard or padded protective hat, worn by motorcyclists, soldiers, or sports players",
        "cn_def": "安全帽；頭盔（可數）"
      }
    ]
  },
  "kilometer": {
    "pos": "n.",
    "en_def": "a metric unit of measurement equal to 1,000 meters (approx. 0.62 miles)",
    "cn_def": "公里；千米（可數，縮寫 km）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of measurement equal to 1,000 meters (approx. 0.62 miles)",
        "cn_def": "公里；千米（可數，縮寫 km）"
      }
    ]
  },
  "kilometers": {
    "pos": "n.",
    "en_def": "a metric unit of measurement equal to 1,000 meters (approx. 0.62 miles)",
    "cn_def": "公里；千米（可數，縮寫 km）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of measurement equal to 1,000 meters (approx. 0.62 miles)",
        "cn_def": "公里；千米（可數，縮寫 km）"
      }
    ]
  },
  "loose": {
    "pos": "adj.",
    "en_def": "not firmly or tightly fixed in place; not fitting tightly",
    "cn_def": "鬆動的；寬鬆的；散漫的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not firmly or tightly fixed in place; not fitting tightly",
        "cn_def": "鬆動的；寬鬆的；散漫的"
      }
    ]
  },
  "loosen": {
    "pos": "v.",
    "en_def": "to make or become less tight or firm; to relax one's grip or rules",
    "cn_def": "放鬆；鬆開；解開（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become less tight or firm; to relax one's grip or rules",
        "cn_def": "放鬆；鬆開；解開（動詞）"
      }
    ]
  },
  "marvelous": {
    "pos": "adj.",
    "en_def": "causing great wonder; extraordinary; extremely good",
    "cn_def": "絕妙的；令人驚嘆的；極好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing great wonder; extraordinary; extremely good",
        "cn_def": "絕妙的；令人驚嘆的；極好的"
      }
    ]
  },
  "marvel": {
    "pos": "v./n.",
    "en_def": "to be filled with wonder or astonishment; a wonderful or astonishing thing",
    "cn_def": "感到驚嘆；奇蹟；奇觀（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to be filled with wonder or astonishment; a wonderful or astonishing thing",
        "cn_def": "感到驚嘆；奇蹟；奇觀（動詞/名詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
