// Lesson 7 Quiz Data: Holidays, Cultural Festivals & Celebrations
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 7 - Holidays, Cultural Festivals & Celebrations",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Double Tenth Day",
    "pos": "n.phr.",
    "cn_def": "雙十節；國慶日",
    "en_def": "the national day of the Republic of China (Taiwan) celebrated on October 10",
    "sentence": "Thousands of citizens gathered in front of the Presidential Office Building on {{BLANK}} to watch the military parade and air show.",
    "cn": "數千名市民在雙十節聚集在總統府前，觀看盛大的閱兵典禮與飛行特技表演。"
  },
  {
    "word": "Dragon Boat Festival",
    "pos": "n.phr.",
    "cn_def": "端午節",
    "en_def": "a traditional Chinese holiday when people race dragon boats and eat rice dumplings",
    "sentence": "Every summer during the {{BLANK}}, our family eats delicious sticky rice dumplings and watches exciting boat races on the river.",
    "cn": "每年夏天的端午節期間，我們全家人都會吃美味的糯米粽子，並在河畔觀看精彩刺激的划龍舟比賽。"
  },
  {
    "word": "Easter",
    "pos": "n.",
    "cn_def": "復活節",
    "en_def": "a Christian festival celebrating the resurrection of Jesus, marked by decorated eggs",
    "sentence": "Children ran excitedly around the church lawn on {{BLANK}} Sunday morning searching for colorful chocolate eggs hidden in the bushes.",
    "cn": "在復活節週日早晨，孩子們興奮地在教堂草坪四周奔跑，尋找藏在灌木叢中的彩色巧克力蛋。"
  },
  {
    "word": "Halloween",
    "pos": "n.",
    "cn_def": "萬聖節前夕",
    "en_def": "the night of October 31 when children wear costumes and go trick-or-treating",
    "sentence": "Young kids dressed up as friendly ghosts and superheroes on {{BLANK}}, walking from house to house shouting 'trick or treat' for candy.",
    "cn": "年幼的孩子們在萬聖節前夕裝扮成友好的鬼魂和超級英雄，挨家挨戶走著並大喊「不給糖就搗蛋」以討取糖果。"
  },
  {
    "word": "Lantern Festival",
    "pos": "n.phr.",
    "cn_def": "元宵節",
    "en_def": "a Chinese festival celebrated on the 15th day of the first lunar month",
    "sentence": "People across Taiwan solve tricky riddles and admire magnificent glowing light displays during the annual {{BLANK}} in February.",
    "cn": "每年二月的元宵節期間，全台灣各地的人們都會猜有趣的燈謎，並欣賞壯麗璀璨的發光花燈展覽。"
  },
  {
    "word": "Mother's Day",
    "pos": "n.phr.",
    "cn_def": "母親節",
    "en_def": "a day honoring mothers, celebrated on the second Sunday of May",
    "sentence": "Kevin and his sister prepared breakfast in bed and bought pink carnations to celebrate {{BLANK}} with their loving mom.",
    "cn": "凱文和他的妹妹準備了床上早餐並買了粉紅康乃馨，與他們深愛的母親一同慶祝母親節。"
  },
  {
    "word": "Teacher's Day",
    "pos": "n.phr.",
    "cn_def": "教師節",
    "en_def": "a day honoring teachers, celebrated in Taiwan on September 28",
    "sentence": "Students across Taiwan write heartfelt greeting cards and present flowers to thank their dedicated educators on {{BLANK}}.",
    "cn": "全台灣的學生都會在教師節這一天寫下由衷的感謝賀卡並奉上鮮花，向盡職盡責的教育工作者表達感謝。"
  },
  {
    "word": "Thanksgiving Day",
    "pos": "n.phr.",
    "cn_def": "感恩節",
    "en_def": "a North American holiday of giving thanks, celebrated with a roast turkey dinner",
    "sentence": "American families reunite around the dining table on {{BLANK}} to enjoy roast turkey, cranberry sauce, and sweet pumpkin pie.",
    "cn": "美國家庭會在感恩節這一天團聚在餐桌旁，一同享用烤火雞、蔓越莓醬和香甜南瓜派。"
  },
  {
    "word": "Valentine's Day",
    "pos": "n.phr.",
    "cn_def": "情人節",
    "en_def": "February 14, celebrated by sending cards and gifts to sweethearts",
    "sentence": "Florists and chocolate shops are packed with excited customers buying romantic red roses and gift boxes on {{BLANK}}.",
    "cn": "在情人節這一天，花店和巧克力店擠滿了興奮的顧客，爭相購買浪漫的紅玫瑰與精緻禮物盒。"
  },
  {
    "word": "wedding",
    "pos": "n.",
    "cn_def": "婚禮；結婚典禮",
    "en_def": "a marriage ceremony, especially considered as including the associated celebrations",
    "sentence": "The bride looked breathtaking in her lace gown, and more than two hundred guests attended the outdoor church {{BLANK}}.",
    "cn": "新娘穿著蕾絲禮服顯得光彩照人，超過兩百位賓客出席了這場戶外教堂婚禮。"
  }
];

const MCQS = [
  {
    "q": "Spectators cheered wildly as colorful watercraft competed along the river during the annual ______.",
    "options": [
      "Lantern Festival",
      "Double Tenth Day",
      "Dragon Boat Festival",
      "Mother's Day"
    ],
    "answer": 2,
    "cn": "當色彩繽紛的船隻在一年一度的端午節沿河競渡時，觀眾們熱情地大聲歡呼。 【選項解析】(A) Dragon Boat Festival 端午節  (B) Double Tenth Day 雙十節  (C) Lantern Festival 元宵節  (D) Mother's Day 母親節。watercraft competing along river 為划龍舟。",
    "vocabIndex": 1
  },
  {
    "q": "Huge crowds gathered in the capital to witness the fighter jet flyover and fireworks marking ______.",
    "options": [
      "Lantern Festival",
      "Teacher's Day",
      "Easter",
      "Double Tenth Day"
    ],
    "answer": 3,
    "cn": "龐大人群聚集在首都，親眼見證慶祝雙十節的戰鬥機衝場與璀璨煙火表演。 【選項解析】(A) Lantern Festival 元宵節  (B) Double Tenth Day 雙十國慶  (C) Easter 復活節  (D) Teacher's Day 教師節。戰機衝場為雙十國慶特色。",
    "vocabIndex": 0
  },
  {
    "q": "On the second Sunday of May, restaurants across the city are fully booked as families celebrate ______.",
    "options": [
      "Valentine's Day",
      "Mother's Day",
      "Easter",
      "Halloween"
    ],
    "answer": 1,
    "cn": "在五月的第二個星期日，全市的餐館全部被訂滿，因為各個家庭都在慶祝母親節。 【選項解析】(A) Mother's Day 母親節  (B) Valentine's Day 情人節  (C) Easter 復活節  (D) Halloween 萬聖節。五月第二個星期日為 Mother's Day。",
    "vocabIndex": 5
  },
  {
    "q": "Children carry decorative battery-powered lights and eat sweet glutinous rice balls to celebrate the ______.",
    "options": [
      "Lantern Festival",
      "Easter",
      "Dragon Boat Festival",
      "Thanksgiving Day"
    ],
    "answer": 0,
    "cn": "孩子們提著裝有電池的造型花燈並品嚐甜湯圓，以慶祝元宵節。 【選項解析】(A) Dragon Boat Festival 端午節  (B) Easter 復活節  (C) Lantern Festival 元宵節  (D) Thanksgiving Day 感恩節。提燈籠吃湯圓為元宵節習俗。",
    "vocabIndex": 4
  },
  {
    "q": "On October thirty-first, young kids dress up in spooky monster outfits to celebrate ______ with their classmates.",
    "options": [
      "Easter",
      "Halloween",
      "wedding",
      "Mother's Day"
    ],
    "answer": 1,
    "cn": "十月三十一日這一天，年幼的小孩會穿上嚇人的怪物服裝，與同班同學一起慶祝萬聖節。 【選項解析】(A) Easter 復活節  (B) Halloween 萬聖節  (C) wedding 婚禮  (D) Mother's Day 母親節。十月三十一日穿戲服為 Halloween。",
    "vocabIndex": 3
  },
  {
    "q": "In Christian communities, children enjoy hunting for painted pastel eggs hidden in gardens on ______ morning.",
    "options": [
      "Halloween",
      "Thanksgiving Day",
      "wedding",
      "Easter"
    ],
    "answer": 3,
    "cn": "在基督教社區裡，孩子們在復活節早晨開心地在花園裡尋找隱藏的彩繪粉彩蛋。 【選項解析】(A) Halloween 萬聖節  (B) Easter 復活節  (C) wedding 婚禮  (D) Thanksgiving Day 感恩節。尋找彩蛋為 Easter 代表活動。",
    "vocabIndex": 2
  },
  {
    "q": "On September twenty-eighth, school pupils present flower bouquets and thank-you notes to celebrate ______.",
    "options": [
      "Mother's Day",
      "Valentine's Day",
      "Teacher's Day",
      "Lantern Festival"
    ],
    "answer": 2,
    "cn": "九月二十八日這一天，小學生們獻上花束和感謝卡片，慶祝教師節。 【選項解析】(A) Mother's Day 母親節  (B) Teacher's Day 教師節  (C) Valentine's Day 情人節  (D) Lantern Festival 元宵節。九月二十八日為台灣的教師節。",
    "vocabIndex": 6
  },
  {
    "q": "In the United States, eating roast turkey and giving thanks for family blessings are the core customs of ______.",
    "options": [
      "Thanksgiving Day",
      "Double Tenth Day",
      "Valentine's Day",
      "Halloween"
    ],
    "answer": 0,
    "cn": "在美國，吃烤火雞並為家庭幸福獻上感恩，是感恩節的核心傳統習俗。 【選項解析】(A) Thanksgiving Day 感恩節  (B) Double Tenth Day 雙十節  (C) Valentine's Day 情人節  (D) Halloween 萬聖節。吃火雞謝恩為 Thanksgiving Day。",
    "vocabIndex": 7
  },
  {
    "q": "Red roses and heart-shaped chocolate boxes are the most popular romantic gifts exchanged on ______.",
    "options": [
      "Teacher's Day",
      "Mother's Day",
      "Valentine's Day",
      "Easter"
    ],
    "answer": 2,
    "cn": "紅玫瑰和心形巧克力禮盒，是在情人節互相贈送的最受歡迎浪漫禮物。 【選項解析】(A) Teacher's Day 教師節  (B) Mother's Day 母親節  (C) Valentine's Day 情人節  (D) Easter 復活節。心形巧克力和紅玫瑰代表 Valentine's Day。",
    "vocabIndex": 8
  },
  {
    "q": "The cathedral bells rang joyfully across the town square as the newlyweds stepped outside after their romantic ______.",
    "options": [
      "Thanksgiving Day",
      "Halloween",
      "Easter",
      "wedding"
    ],
    "answer": 3,
    "cn": "當這對新人在浪漫的婚禮後步出大門時，大教堂的鐘聲在小鎮廣場上歡快響起。 【選項解析】(A) wedding 婚禮  (B) Halloween 萬聖節  (C) Easter 復活節  (D) Thanksgiving Day 感恩節。新婚夫妻步出教堂為 wedding。",
    "vocabIndex": 9
  },
  {
    "q": "Eating sticky bamboo-wrapped rice dumplings while watching competitive river rowing is typical of the ______.",
    "options": [
      "Lantern Festival",
      "Dragon Boat Festival",
      "Double Tenth Day",
      "Teacher's Day"
    ],
    "answer": 1,
    "cn": "吃竹葉包的糯米粽子並同時觀賞精彩的河上划船競賽，是端午節的典型特色。 【選項解析】(A) Lantern Festival 元宵節  (B) Dragon Boat Festival 端午節  (C) Double Tenth Day 雙十節  (D) Teacher's Day 教師節。包粽划船即為端午節。",
    "vocabIndex": 1
  },
  {
    "q": "High school marching bands and military guards delivered spectacular performances in front of the palace on ______.",
    "options": [
      "Double Tenth Day",
      "Lantern Festival",
      "Mother's Day",
      "Valentine's Day"
    ],
    "answer": 0,
    "cn": "高中樂旗儀隊與三軍儀隊在雙十節這一天，於總統府前呈現了精彩絕倫的演出。 【選項解析】(A) Double Tenth Day 雙十節  (B) Lantern Festival 元宵節  (C) Mother's Day 母親節  (D) Valentine's Day 情人節。府前儀隊表演為雙十國慶活動。",
    "vocabIndex": 0
  },
  {
    "q": "Buying pink carnations and taking mom out for a gourmet dinner are traditional ways to honor ______.",
    "options": [
      "Teacher's Day",
      "Mother's Day",
      "Easter",
      "Halloween"
    ],
    "answer": 1,
    "cn": "買粉紅色康乃馨並帶媽媽去享用精緻晚餐，是慶祝母親節的傳統方式。 【選項解析】(A) Teacher's Day 教師節  (B) Mother's Day 母親節  (C) Easter 復活節  (D) Halloween 萬聖節。康乃馨贈與母親代表 Mother's Day。",
    "vocabIndex": 5
  },
  {
    "q": "Tourists from around the world flock to Pingxi to release thousands of sky lanterns into the night sky for the ______.",
    "options": [
      "Lantern Festival",
      "Dragon Boat Festival",
      "Thanksgiving Day",
      "Double Tenth Day"
    ],
    "answer": 0,
    "cn": "來自世界各地的遊客湧入平溪，在元宵節將數千盞天燈釋放到夜空之中。 【選項解析】(A) Dragon Boat Festival 端午節  (B) Lantern Festival 元宵天燈節  (C) Thanksgiving Day 感恩節  (D) Double Tenth Day 雙十節。平溪放天燈在元宵節。",
    "vocabIndex": 4
  },
  {
    "q": "Little children carve grinning faces into orange pumpkins and place glowing candles inside to prepare for ______.",
    "options": [
      "Easter",
      "wedding",
      "Halloween",
      "Mother's Day"
    ],
    "answer": 2,
    "cn": "小孩子們在橘色南瓜上雕刻出露齒笑臉並在裡面放發光蠟燭，以迎接萬聖節的到來。 【選項解析】(A) Easter 復活節  (B) Halloween 萬聖節  (C) wedding 婚禮  (D) Mother's Day 母親節。雕刻南瓜燈為 Halloween 傳統。",
    "vocabIndex": 3
  },
  {
    "q": "Chocolate bunnies and colored hard-boiled eggs are traditional festive treats enjoyed by children during ______.",
    "options": [
      "Halloween",
      "Double Tenth Day",
      "wedding",
      "Easter"
    ],
    "answer": 3,
    "cn": "巧克力兔子和彩繪水煮蛋，是孩子們在復活節期間享用的傳統應景美味點心。 【選項解析】(A) Halloween 萬聖節  (B) Easter 復活節  (C) wedding 婚禮  (D) Double Tenth Day 雙十節。巧克力兔為 Easter 象徵。",
    "vocabIndex": 2
  },
  {
    "q": "Our former high school classmates met yesterday to organize a special alumni banquet honoring our instructors on ______.",
    "options": [
      "Mother's Day",
      "Valentine's Day",
      "Teacher's Day",
      "Lantern Festival"
    ],
    "answer": 2,
    "cn": "我們以前的高中同學昨天聚會，籌備在教師節舉辦特別的校友宴會向老師們致敬。 【選項解析】(A) Mother's Day 母親節  (B) Valentine's Day 情人節  (C) Teacher's Day 教師節  (D) Lantern Festival 元宵節。向老師致敬的節日為 Teacher's Day。",
    "vocabIndex": 6
  },
  {
    "q": "Airports and train stations in North America experience their busiest travel traffic of the entire year right before ______.",
    "options": [
      "Dragon Boat Festival",
      "Double Tenth Day",
      "Valentine's Day",
      "Thanksgiving Day"
    ],
    "answer": 3,
    "cn": "北美各地的機場與火車站，在感恩節前夕都會迎來全年度最繁忙的返鄉交通人潮。 【選項解析】(A) Thanksgiving Day 感恩節  (B) Double Tenth Day 雙十節  (C) Valentine's Day 情人節  (D) Dragon Boat Festival 端午節。北美返鄉團聚最大節日為 Thanksgiving Day。",
    "vocabIndex": 7
  },
  {
    "q": "Couples book romantic rooftop dinners overlooking the city skyline months in advance to celebrate ______ together.",
    "options": [
      "Teacher's Day",
      "Valentine's Day",
      "Mother's Day",
      "Easter"
    ],
    "answer": 1,
    "cn": "情侶們提前數月預訂俯瞰城市天際線的浪漫屋頂晚餐，共同慶祝情人節。 【選項解析】(A) Teacher's Day 教師節  (B) Valentine's Day 情人節  (C) Mother's Day 母親節  (D) Easter 復活節。情侶共度浪漫晚餐為 Valentine's Day。",
    "vocabIndex": 8
  },
  {
    "q": "The groom felt nervous before walking down the aisle, but seeing his beautiful bride smiled warmly made the ______ unforgettable.",
    "options": [
      "wedding",
      "Halloween",
      "Easter",
      "Thanksgiving Day"
    ],
    "answer": 0,
    "cn": "新郎在步上紅毯前感到很緊張，但看到美麗的新娘溫柔微笑，讓這場婚禮令人難忘。 【選項解析】(A) Halloween 萬聖節  (B) wedding 婚禮  (C) Easter 復活節  (D) Thanksgiving Day 感恩節。新郎新娘步入禮堂為 wedding。",
    "vocabIndex": 9
  },
  {
    "q": "Smelling the aroma of steamed meat dumplings cooked in bamboo leaves always reminds grandfather of the ______.",
    "options": [
      "Easter",
      "Lantern Festival",
      "Double Tenth Day",
      "Dragon Boat Festival"
    ],
    "answer": 3,
    "cn": "聞到竹葉包裹蒸熟肉粽的香氣，總是讓祖父回想起端午節的熱鬧景象。 【選項解析】(A) Dragon Boat Festival 端午節  (B) Lantern Festival 元宵節  (C) Double Tenth Day 雙十節  (D) Easter 復活節。竹葉肉粽為端午節應景食物。",
    "vocabIndex": 1
  },
  {
    "q": "Citizens waving red, blue, and white national flags gathered in Taipei City to commemorate the historical birth of the nation on ______.",
    "options": [
      "Double Tenth Day",
      "Teacher's Day",
      "Mother's Day",
      "Thanksgiving Day"
    ],
    "answer": 0,
    "cn": "揮舞著紅、藍、白三色國旗的市民聚集在台北市，在雙十節慶祝國家的歷史誕生。 【選項解析】(A) Double Tenth Day 雙十節  (B) Teacher's Day 教師節  (C) Mother's Day 母親節  (D) Thanksgiving Day 感恩節。雙十國慶揮舞國旗。",
    "vocabIndex": 0
  },
  {
    "q": "The florist stayed up all night arranging hundreds of red rose bouquets for rushed young lovers on ______.",
    "options": [
      "Mother's Day",
      "Teacher's Day",
      "Valentine's Day",
      "Easter"
    ],
    "answer": 2,
    "cn": "花店老闆徹夜未眠包裝數百束紅玫瑰，以應對在情人節急匆匆前來選購的年輕情侶。 【選項解析】(A) Valentine's Day 情人節  (B) Teacher's Day 教師節  (C) Mother's Day 母親節  (D) Easter 復活節。情人節搶購紅玫瑰。",
    "vocabIndex": 8
  },
  {
    "q": "Neighborhood streets were flooded with costumed children holding plastic pumpkin buckets and asking for candy on ______ evening.",
    "options": [
      "Easter",
      "Halloween",
      "wedding",
      "Thanksgiving Day"
    ],
    "answer": 1,
    "cn": "萬聖節當晚，街坊鄰里間擠滿了穿著各式戲服、手提塑膠南瓜桶討糖果的孩童。 【選項解析】(A) Halloween 萬聖節  (B) Easter 復活節  (C) wedding 婚禮  (D) Thanksgiving Day 感恩節。提南瓜桶討糖為 Halloween。",
    "vocabIndex": 3
  },
  {
    "q": "Delicious cranberry sauce, mashed potatoes, and roasted turkey were served to all invited relatives on ______.",
    "options": [
      "Thanksgiving Day",
      "Double Tenth Day",
      "Valentine's Day",
      "Mother's Day"
    ],
    "answer": 0,
    "cn": "美味的蔓越莓醬、馬鈴薯泥和烤火雞，在感恩節盛宴上端出來招待所有受邀的親戚。 【選項解析】(A) Thanksgiving Day 感恩節  (B) Double Tenth Day 雙十節  (C) Valentine's Day 情人節  (D) Mother's Day 母親節。火雞大餐配蔓越莓醬為 Thanksgiving Day。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "double tenth day": {
    "pos": "n.phr.",
    "en_def": "the national day of the Republic of China (Taiwan) celebrated on October 10",
    "cn_def": "雙十節；國慶日",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "the national day of the Republic of China (Taiwan) celebrated on October 10",
        "cn_def": "雙十節；國慶日"
      }
    ]
  },
  "dragon boat festival": {
    "pos": "n.phr.",
    "en_def": "a traditional Chinese holiday when people race dragon boats and eat rice dumplings",
    "cn_def": "端午節",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a traditional Chinese holiday when people race dragon boats and eat rice dumplings",
        "cn_def": "端午節"
      }
    ]
  },
  "easter": {
    "pos": "n.",
    "en_def": "a Christian festival celebrating the resurrection of Jesus, marked by decorated eggs",
    "cn_def": "復活節",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a Christian festival celebrating the resurrection of Jesus, marked by decorated eggs",
        "cn_def": "復活節"
      }
    ]
  },
  "halloween": {
    "pos": "n.",
    "en_def": "the night of October 31 when children wear costumes and go trick-or-treating",
    "cn_def": "萬聖節前夕",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the night of October 31 when children wear costumes and go trick-or-treating",
        "cn_def": "萬聖節前夕"
      }
    ]
  },
  "lantern festival": {
    "pos": "n.phr.",
    "en_def": "a Chinese festival celebrated on the 15th day of the first lunar month",
    "cn_def": "元宵節",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a Chinese festival celebrated on the 15th day of the first lunar month",
        "cn_def": "元宵節"
      }
    ]
  },
  "mother's day": {
    "pos": "n.phr.",
    "en_def": "a day honoring mothers, celebrated on the second Sunday of May",
    "cn_def": "母親節",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a day honoring mothers, celebrated on the second Sunday of May",
        "cn_def": "母親節"
      }
    ]
  },
  "teacher's day": {
    "pos": "n.phr.",
    "en_def": "a day honoring teachers, celebrated in Taiwan on September 28",
    "cn_def": "教師節",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a day honoring teachers, celebrated in Taiwan on September 28",
        "cn_def": "教師節"
      }
    ]
  },
  "thanksgiving day": {
    "pos": "n.phr.",
    "en_def": "a North American holiday of giving thanks, celebrated with a roast turkey dinner",
    "cn_def": "感恩節",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a North American holiday of giving thanks, celebrated with a roast turkey dinner",
        "cn_def": "感恩節"
      }
    ]
  },
  "valentine's day": {
    "pos": "n.phr.",
    "en_def": "February 14, celebrated by sending cards and gifts to sweethearts",
    "cn_def": "情人節",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "February 14, celebrated by sending cards and gifts to sweethearts",
        "cn_def": "情人節"
      }
    ]
  },
  "wedding": {
    "pos": "n.",
    "en_def": "a marriage ceremony, especially considered as including the associated celebrations",
    "cn_def": "婚禮；結婚典禮",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a marriage ceremony, especially considered as including the associated celebrations",
        "cn_def": "婚禮；結婚典禮"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
