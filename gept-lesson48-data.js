// Lesson 48 Quiz Data: Settlements, Domestic Layout & East Asian Geography
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 48 - Settlements, Domestic Layout & East Asian Geography",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "village",
    "pos": "n.",
    "cn_def": "村莊；鄉村",
    "en_def": "a small community or group of houses in a rural area",
    "sentence": "My grandparents live in a peaceful fishing {{BLANK}} where fresh seafood is sold by the dock every morning.",
    "cn": "我的祖父母住在一個寧靜的漁村，每天早晨碼頭旁都會出售新鮮的海鮮。"
  },
  {
    "word": "stair",
    "pos": "n.",
    "cn_def": "樓梯的階梯；樓梯",
    "en_def": "one step in a flight of steps from one level to another",
    "sentence": "Be careful not to trip over the loose carpet on the wooden {{BLANK}}, especially when carrying heavy groceries.",
    "cn": "搬運沉重雜貨時要小心，別被木樓梯上鬆動的地毯絆倒。"
  },
  {
    "word": "downstairs",
    "pos": "adv. / adj. / n.",
    "cn_def": "樓下；在樓下",
    "en_def": "down the stairs; on a lower floor",
    "sentence": "The doorbell rang while she was reading in bed, so she quickly ran {{BLANK}} to see who was at the door.",
    "cn": "當她在床上看書時門鈴響了，所以她迅速跑到樓下看看是誰在門口。"
  },
  {
    "word": "upstairs",
    "pos": "adv. / adj. / n.",
    "cn_def": "樓上；在樓上",
    "en_def": "up the stairs; on an upper floor",
    "sentence": "All the quiet study bedrooms are located {{BLANK}}, while the kitchen and living room are on the ground floor.",
    "cn": "所有安靜的書房臥室都位於樓上，而廚房和客廳則位於一樓。"
  },
  {
    "word": "Asia",
    "pos": "n.",
    "cn_def": "亞洲",
    "en_def": "the largest continent in the world",
    "sentence": "Many diverse languages, cultures, and ancient civilizations have developed across the vast continent of {{BLANK}}.",
    "cn": "許多多元的語言、文化與古老文明在廣袤的亞洲大陸上孕育發展。"
  },
  {
    "word": "Asian",
    "pos": "adj. / n.",
    "cn_def": "亞洲的；亞洲人",
    "en_def": "belonging to Asia; a person of Asian descent",
    "sentence": "Students from various {{BLANK}} countries gathered at the university to celebrate Lunar New Year traditions.",
    "cn": "來自多個亞洲國家的學生齊聚大學，共同慶祝農曆新年的傳統習俗。"
  },
  {
    "word": "Japan",
    "pos": "n.",
    "cn_def": "日本",
    "en_def": "an island nation in East Asia famous for its culture and technology",
    "sentence": "Thousands of travelers visit {{BLANK}} every spring to admire the breathtaking pink cherry blossoms in Kyoto.",
    "cn": "每年春天，成千上萬的旅客造訪日本，欣賞京都令人屏息的粉紅櫻花。"
  },
  {
    "word": "Japanese",
    "pos": "adj. / n.",
    "cn_def": "日本的；日本人；日語",
    "en_def": "relating to Japan, its people, or its language",
    "sentence": "We enjoyed authentic {{BLANK}} ramen with tender pork slices and savory broth at the newly opened restaurant.",
    "cn": "我們在新開的餐廳享用了道地的日式拉麵，搭配鮮嫩的叉燒肉片與濃郁湯頭。"
  },
  {
    "word": "Korea",
    "pos": "n.",
    "cn_def": "韓國；朝鮮",
    "en_def": "a peninsula in East Asia divided into North and South",
    "sentence": "South {{BLANK}} has become internationally celebrated for its energetic pop music, television dramas, and cosmetics.",
    "cn": "韓國因其充滿活力的流行音樂、電視劇和化妝品而享譽國際。"
  },
  {
    "word": "Korean",
    "pos": "adj. / n.",
    "cn_def": "韓國的；韓國人；韓語",
    "en_def": "relating to Korea, its people, or its language",
    "sentence": "Many young Taiwanese students are actively learning the {{BLANK}} language so they can understand dramas without subtitles.",
    "cn": "許多台灣年輕學生正在積極學習韓語，以便能夠在沒有字幕的情況下看懂電視劇。"
  }
];

const MCQS = [
  {
    "q": "During our vacation in Kyoto, we visited historic wooden shrines and practiced speaking basic ______ phrases.",
    "options": [
      "Korean",
      "Japanese",
      "Asian",
      "gentle"
    ],
    "answer": 1,
    "cn": "在京都度假期間，我們參觀了歷史悠久的木造神社，並練習說基礎日語短語。 【選項解析】(A) Japanese 日本的  (B) Korean 韓國的  (C) Asian 亞洲的  (D) gentle 溫和的。Kyoto（京都）使用 Japanese。",
    "vocabIndex": 7
  },
  {
    "q": "The historic tea ceremony is an essential part of traditional culture practiced across ______ for centuries.",
    "options": [
      "village",
      "Asia",
      "Korea",
      "Japan"
    ],
    "answer": 3,
    "cn": "歷史悠久的茶道是日本數個世紀以來廣泛實踐的傳統文化重要組成部分。 【選項解析】(A) Japan 日本  (B) Asia 亞洲  (C) Korea 韓國  (D) village 村莊。以傳統茶道聞名的國家為 Japan。",
    "vocabIndex": 6
  },
  {
    "q": "The loud noise from the party on the floor below kept the residents living ______ awake all night.",
    "options": [
      "Asian",
      "downstairs",
      "upstairs",
      "Japanese"
    ],
    "answer": 2,
    "cn": "樓下派對傳來的巨大噪音讓住在樓上的居民整夜無法入眠。 【選項解析】(A) upstairs 樓上  (B) downstairs 樓下  (C) Asian 亞洲的  (D) Japanese 日本的。樓下的吵鬧影響樓上（upstairs）。",
    "vocabIndex": 3
  },
  {
    "q": "Grandmother slipped while walking down the slippery marble ______, but luckily she grabbed the handrail in time.",
    "options": [
      "stairs",
      "villages",
      "castles",
      "courts"
    ],
    "answer": 0,
    "cn": "祖母走下濕滑的大理石樓梯時滑倒了，但幸運的是她及時抓住了扶手。 【選項解析】(A) stairs 樓梯  (B) villages 村莊  (C) castles 城堡  (D) courts 法院。走下大理石階梯為 marble stairs。",
    "vocabIndex": 1
  },
  {
    "q": "The delicious fermented cabbage dish known as kimchi is an indispensable element of ______ cuisine.",
    "options": [
      "Asian",
      "Japanese",
      "Korean",
      "unique"
    ],
    "answer": 2,
    "cn": "被稱為泡菜（kimchi）的美味發酵白菜菜餚，是韓式料理不可或缺的元素。 【選項解析】(A) Korean 韓國的  (B) Japanese 日本的  (C) Asian 亞洲的  (D) unique 獨特的。kimchi 為韓式料理（Korean cuisine）。",
    "vocabIndex": 9
  },
  {
    "q": "After dinner, dad went ______ to the basement workshop to repair the broken wooden bicycle frame.",
    "options": [
      "upstairs",
      "downstairs",
      "Asian",
      "Korean"
    ],
    "answer": 1,
    "cn": "晚餐後，爸爸下樓去地下室工作間修理損壞的木製自行車車架。 【選項解析】(A) downstairs 到樓下  (B) upstairs 到樓上  (C) Asian 亞洲的  (D) Korean 韓國的。去地下室需 down stairs（走下樓）。",
    "vocabIndex": 2
  },
  {
    "q": "The sleepy mountain ______ was completely surrounded by misty green hills and fresh vegetable terraces.",
    "options": [
      "tower",
      "stair",
      "castle",
      "village"
    ],
    "answer": 3,
    "cn": "這座沉睡的山村完全被薄霧籠罩的青山和新鮮的蔬菜梯田所環繞。 【選項解析】(A) village 村莊  (B) stair 階梯  (C) castle 城堡  (D) tower 塔。被梯田與青山環繞之處為 mountain village。",
    "vocabIndex": 0
  },
  {
    "q": "Covering more than thirty percent of the Earth's total land area, ______ is the globe's largest continent.",
    "options": [
      "Asia",
      "Japan",
      "Korea",
      "village"
    ],
    "answer": 0,
    "cn": "亞洲佔地球陸地總面積的百分之三十以上，是全球最大的大陸。 【選項解析】(A) Asia 亞洲  (B) Japan 日本  (C) Korea 韓國  (D) village 村莊。全球最大大陸為 Asia。",
    "vocabIndex": 4
  },
  {
    "q": "International tourists love visiting Seoul in ______ to experience lively street markets and historic palaces.",
    "options": [
      "village",
      "Japan",
      "Asia",
      "Korea"
    ],
    "answer": 3,
    "cn": "國際旅客喜歡造訪韓國首爾，體驗熱鬧的街頭市場與歷史宮殿。 【選項解析】(A) Korea 韓國  (B) Japan 日本  (C) Asia 亞洲  (D) village 村莊。首爾（Seoul）位於 Korea。",
    "vocabIndex": 8
  },
  {
    "q": "Rice, noodles, and soy sauce are widely consumed dietary staples among many ______ populations.",
    "options": [
      "Korean",
      "Japanese",
      "Asian",
      "lovely"
    ],
    "answer": 2,
    "cn": "米飯、麵條和醬油是許多亞洲人口中廣泛消費的主食飲食原料。 【選項解析】(A) Asian 亞洲的  (B) Japanese 日本的  (C) Korean 韓國的  (D) lovely 可愛的。泛指亞洲族群飲食為 Asian populations。",
    "vocabIndex": 5
  },
  {
    "q": "We stayed in an authentic ______ ryokan inn where we slept on traditional tatami mats and enjoyed hot springs.",
    "options": [
      "Japanese",
      "Korean",
      "Asian",
      "gentle"
    ],
    "answer": 0,
    "cn": "我們住在一家道地的日式溫泉旅館，睡在傳統榻榻米上並享受溫泉。 【選項解析】(A) Japanese 日本的  (B) Korean 韓國的  (C) Asian 亞洲的  (D) gentle 溫柔的。日式榻榻米旅館為 Japanese ryokan。",
    "vocabIndex": 7
  },
  {
    "q": "Please wait here for a moment while I run ______ to my bedroom to grab my wallet and passport.",
    "options": [
      "downstairs",
      "upstairs",
      "Korean",
      "Japanese"
    ],
    "answer": 1,
    "cn": "請在這裡稍等片刻，我跑上樓回臥室去拿皮夾和護照。 【選項解析】(A) upstairs 樓上  (B) downstairs 樓下  (C) Korean 韓國的  (D) Japanese 日本的。上樓回臥室為 run upstairs。",
    "vocabIndex": 3
  },
  {
    "q": "Modern high-speed bullet trains connect major metropolitan cities across ______ with incredible punctuality.",
    "options": [
      "village",
      "Korea",
      "Asia",
      "Japan"
    ],
    "answer": 3,
    "cn": "現代高速子彈列車以令人難以置信的準點率連接日本各大都會城市。 【選項解析】(A) Japan 日本  (B) Korea 韓國  (C) Asia 亞洲  (D) village 村莊。新幹線子彈列車系統為 Japan 的特色。",
    "vocabIndex": 6
  },
  {
    "q": "The elderly man sat outside his cottage in the rural ______ and chatted warmly with passing neighbors.",
    "options": [
      "stair",
      "village",
      "castle",
      "court"
    ],
    "answer": 1,
    "cn": "老人坐在鄉村小屋外面，與路過的鄰居熱情攀談。 【選項解析】(A) village 村莊  (B) stair 樓梯  (C) castle 城堡  (D) court 法庭。鄉間村莊為 rural village。",
    "vocabIndex": 0
  },
  {
    "q": "Many popular pop idols and drama series produced in ______ enjoy massive followings across the globe.",
    "options": [
      "Asia",
      "Japan",
      "Korea",
      "village"
    ],
    "answer": 2,
    "cn": "韓國製作的許多流行偶像與電視影集在全球享有龐大的粉絲追隨。 【選項解析】(A) Korea 韓國  (B) Japan 日本  (C) Asia 亞洲  (D) village 村落。流行韓流產地為 Korea。",
    "vocabIndex": 8
  },
  {
    "q": "The kitchen is located ______, so delicious aromas of freshly baked bread drifted up to our bedrooms.",
    "options": [
      "downstairs",
      "upstairs",
      "Japanese",
      "Korean"
    ],
    "answer": 0,
    "cn": "廚房位於樓下，所以剛出爐麵包的美味香氣飄到了我們樓上的臥室。 【選項解析】(A) downstairs 在樓下  (B) upstairs 在樓上  (C) Japanese 日本的  (D) Korean 韓國的。由香氣往上飄可知廚房位於 downstairs。",
    "vocabIndex": 2
  },
  {
    "q": "He climbed forty wooden ______ to reach the observation platform at the top of the lighthouse.",
    "options": [
      "villages",
      "stairs",
      "towers",
      "castles"
    ],
    "answer": 1,
    "cn": "他攀爬了四十級木階梯，到達燈塔頂部的觀景平台。 【選項解析】(A) stairs 階梯  (B) villages 村莊  (C) towers 塔  (D) castles 城堡。攀爬的級數為 stairs。",
    "vocabIndex": 1
  },
  {
    "q": "Economic cooperation among ______ nations has fostered rapid trade expansion and technological innovation.",
    "options": [
      "unique",
      "Japanese",
      "Korean",
      "Asian"
    ],
    "answer": 3,
    "cn": "亞洲各國之間的經濟合作促進了貿易的迅速擴張與技術創新。 【選項解析】(A) Asian 亞洲的  (B) Japanese 日本的  (C) Korean 韓國的  (D) unique 獨特的。亞洲國家為 Asian nations。",
    "vocabIndex": 5
  },
  {
    "q": "Barbecue beef cooked over charcoal grills at the table is a hallmark of authentic ______ dining.",
    "options": [
      "Asian",
      "Japanese",
      "Korean",
      "lovely"
    ],
    "answer": 2,
    "cn": "在餐桌上的炭火烤爐上烹飪烤牛肉是道地韓式餐飲的標誌特徵。 【選項解析】(A) Korean 韓式的  (B) Japanese 日式的  (C) Asian 亞洲的  (D) lovely 美好的。桌邊炭火烤肉為 Korean dining。",
    "vocabIndex": 9
  },
  {
    "q": "The great silk trade route historically connected the markets of Europe with ancient civilizations across ______.",
    "options": [
      "Asia",
      "Japan",
      "Korea",
      "village"
    ],
    "answer": 0,
    "cn": "偉大的絲綢貿易之路在歷史上連接了歐洲市場與橫跨亞洲的古老文明。 【選項解析】(A) Asia 亞洲  (B) Japan 日本  (C) Korea 韓國  (D) village 村莊。絲路橫貫大陸為 Asia。",
    "vocabIndex": 4
  },
  {
    "q": "Mount Fuji is an internationally recognized natural symbol of ______, attracting millions of mountain hikers.",
    "options": [
      "village",
      "Korea",
      "Asia",
      "Japan"
    ],
    "answer": 3,
    "cn": "富士山是國際公認的日本自然象徵，吸引著數百萬登山者。 【選項解析】(A) Japan 日本  (B) Korea 韓國  (C) Asia 亞洲  (D) village 村莊。Mount Fuji 位於 Japan。",
    "vocabIndex": 6
  },
  {
    "q": "The family gathered in the living room ______ to watch the New Year countdown on television.",
    "options": [
      "upstairs",
      "downstairs",
      "Asian",
      "Korean"
    ],
    "answer": 1,
    "cn": "全家人聚集在樓下的客廳，透過電視觀看新年倒數計時。 【選項解析】(A) downstairs 樓下  (B) upstairs 樓上  (C) Asian 亞洲的  (D) Korean 韓國的。聚集於客廳為 living room downstairs。",
    "vocabIndex": 2
  },
  {
    "q": "Taking the ______ instead of the elevator every morning provides healthy physical exercise for office workers.",
    "options": [
      "castles",
      "villages",
      "stairs",
      "temples"
    ],
    "answer": 2,
    "cn": "每天早晨走樓梯而不是搭電梯，為上班族提供了健康的身體鍛鍊。 【選項解析】(A) stairs 樓梯  (B) villages 村落  (C) castles 城堡  (D) temples 寺廟。take the stairs（走樓梯）。",
    "vocabIndex": 1
  },
  {
    "q": "The traditional harvest festival celebrated in ______ brings extended families together to share rice cakes.",
    "options": [
      "Korea",
      "Japan",
      "Asia",
      "village"
    ],
    "answer": 0,
    "cn": "在韓國慶祝的傳統秋收節日（秋夕）讓大家庭團聚在一起分享年糕。 【選項解析】(A) Korea 韓國  (B) Japan 日本  (C) Asia 亞洲  (D) village 村莊。秋夕節慶於 Korea。",
    "vocabIndex": 8
  },
  {
    "q": "Traditional art forms from various ______ societies share a profound reverence for harmony with nature.",
    "options": [
      "Japanese",
      "Asian",
      "Korean",
      "lovely"
    ],
    "answer": 1,
    "cn": "來自各個亞洲社會的傳統藝術形式都對與自然和諧相處懷有深刻的敬畏。 【選項解析】(A) Asian 亞洲的  (B) Japanese 日本的  (C) Korean 韓國的  (D) lovely 討喜的。Asian societies（亞洲社會）。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "village": {
    "pos": "n.",
    "en_def": "a small community or group of houses in a rural area",
    "cn_def": "村莊；鄉村",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small community or group of houses in a rural area",
        "cn_def": "村莊；鄉村"
      }
    ]
  },
  "stair": {
    "pos": "n.",
    "en_def": "one step in a flight of steps from one level to another",
    "cn_def": "樓梯的階梯；樓梯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one step in a flight of steps from one level to another",
        "cn_def": "樓梯的階梯；樓梯"
      }
    ]
  },
  "downstairs": {
    "pos": "adv. / adj. / n.",
    "en_def": "down the stairs; on a lower floor",
    "cn_def": "樓下；在樓下",
    "combined": [
      {
        "pos": "adv. / adj. / n.",
        "en_def": "down the stairs; on a lower floor",
        "cn_def": "樓下；在樓下"
      }
    ]
  },
  "upstairs": {
    "pos": "adv. / adj. / n.",
    "en_def": "up the stairs; on an upper floor",
    "cn_def": "樓上；在樓上",
    "combined": [
      {
        "pos": "adv. / adj. / n.",
        "en_def": "up the stairs; on an upper floor",
        "cn_def": "樓上；在樓上"
      }
    ]
  },
  "asia": {
    "pos": "n.",
    "en_def": "the largest continent in the world",
    "cn_def": "亞洲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the largest continent in the world",
        "cn_def": "亞洲"
      }
    ]
  },
  "asian": {
    "pos": "adj. / n.",
    "en_def": "belonging to Asia; a person of Asian descent",
    "cn_def": "亞洲的；亞洲人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "belonging to Asia; a person of Asian descent",
        "cn_def": "亞洲的；亞洲人"
      }
    ]
  },
  "japan": {
    "pos": "n.",
    "en_def": "an island nation in East Asia famous for its culture and technology",
    "cn_def": "日本",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an island nation in East Asia famous for its culture and technology",
        "cn_def": "日本"
      }
    ]
  },
  "japanese": {
    "pos": "adj. / n.",
    "en_def": "relating to Japan, its people, or its language",
    "cn_def": "日本的；日本人；日語",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Japan, its people, or its language",
        "cn_def": "日本的；日本人；日語"
      }
    ]
  },
  "korea": {
    "pos": "n.",
    "en_def": "a peninsula in East Asia divided into North and South",
    "cn_def": "韓國；朝鮮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a peninsula in East Asia divided into North and South",
        "cn_def": "韓國；朝鮮"
      }
    ]
  },
  "korean": {
    "pos": "adj. / n.",
    "en_def": "relating to Korea, its people, or its language",
    "cn_def": "韓國的；韓國人；韓語",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to Korea, its people, or its language",
        "cn_def": "韓國的；韓國人；韓語"
      }
    ]
  },
  "gentle": {
    "pos": "",
    "en_def": "",
    "cn_def": "溫和的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "溫和的"
      }
    ]
  },
  "stairs": {
    "pos": "",
    "en_def": "",
    "cn_def": "樓梯",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "樓梯"
      }
    ]
  },
  "villages": {
    "pos": "",
    "en_def": "",
    "cn_def": "村莊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "村莊"
      }
    ]
  },
  "castles": {
    "pos": "",
    "en_def": "",
    "cn_def": "城堡",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "城堡"
      }
    ]
  },
  "courts": {
    "pos": "",
    "en_def": "",
    "cn_def": "法院",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "法院"
      }
    ]
  },
  "unique": {
    "pos": "",
    "en_def": "",
    "cn_def": "獨特的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "獨特的"
      }
    ]
  },
  "tower": {
    "pos": "",
    "en_def": "",
    "cn_def": "塔",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "塔"
      }
    ]
  },
  "castle": {
    "pos": "",
    "en_def": "",
    "cn_def": "城堡",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "城堡"
      }
    ]
  },
  "lovely": {
    "pos": "",
    "en_def": "",
    "cn_def": "可愛的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "可愛的"
      }
    ]
  },
  "court": {
    "pos": "",
    "en_def": "",
    "cn_def": "法庭",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "法庭"
      }
    ]
  },
  "towers": {
    "pos": "",
    "en_def": "",
    "cn_def": "塔",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "塔"
      }
    ]
  },
  "temples": {
    "pos": "",
    "en_def": "",
    "cn_def": "寺廟",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寺廟"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
