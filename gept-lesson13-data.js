// Lesson 13 Quiz Data: Clothing, Formal Attire & Accessories
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 13 - Clothing, Formal Attire & Accessories",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "blouse",
    "pos": "n.",
    "cn_def": "女性襯衫；罩衫",
    "en_def": "a woman's shirt or upper garment",
    "sentence": "Helen wore a lightweight silk {{BLANK}} with dark blue trousers to her job interview yesterday morning.",
    "cn": "海倫昨天早上穿著一件輕盈的絲質女性襯衫搭配深藍色長褲去參加求職面試。"
  },
  {
    "word": "pajamas",
    "pos": "n.",
    "cn_def": "睡衣褲",
    "en_def": "soft loose clothing worn in bed",
    "sentence": "The little boy brushed his teeth, put on his warm cotton {{BLANK}}, and climbed into bed with a storybook.",
    "cn": "小男孩刷了牙，穿上他溫暖的純棉睡衣褲，拿著故事書爬上了床。"
  },
  {
    "word": "suit",
    "pos": "n. / v.",
    "cn_def": "套裝；西裝；適合",
    "en_def": "a jacket and matching trousers or skirt; to fit well",
    "sentence": "Mr. Anderson bought an elegant black {{BLANK}} for the annual corporate dinner, and it fit him perfectly.",
    "cn": "安德森先生為年度公司晚宴買了一套優雅的黑色西裝，而且穿在他身上非常合身。"
  },
  {
    "word": "trousers",
    "pos": "n.",
    "cn_def": "長褲",
    "en_def": "a piece of clothing covering the body from waist to ankle on each leg",
    "sentence": "My brother spilled tomato soup on his khaki {{BLANK}}, so he had to wash them before going to class.",
    "cn": "我哥哥把番茄湯灑在他的卡其長褲上，所以他去上課前必須先把褲子洗乾淨。"
  },
  {
    "word": "T-shirt",
    "pos": "n.",
    "cn_def": "短袖圓領汗衫；T恤",
    "en_def": "a simple short-sleeved cotton casual shirt with no collar",
    "sentence": "During the humid summer months, teenagers prefer wearing a loose white {{BLANK}} with casual shorts.",
    "cn": "在潮濕的夏季月份裡，青少年更喜歡穿著寬鬆的白色T恤搭配休閒短褲。"
  },
  {
    "word": "underwear",
    "pos": "n.",
    "cn_def": "內衣褲",
    "en_def": "clothes worn under other clothes next to the skin",
    "sentence": "Packing clean socks and {{BLANK}} is essential whenever you plan a three-day hiking trip in the mountains.",
    "cn": "每當你計畫去山裡進行為期三天的健行旅行時，打包乾淨的襪子和內衣褲是必不可少的。"
  },
  {
    "word": "vest",
    "pos": "n.",
    "cn_def": "背心",
    "en_def": "a sleeveless upper garment worn over a shirt",
    "sentence": "The police officer wore a bulletproof {{BLANK}} under his uniform to protect himself while on night patrol.",
    "cn": "警官在制服底下穿了一件防彈背心，以便在夜間巡邏時保護自己。"
  },
  {
    "word": "scarf",
    "pos": "n.",
    "cn_def": "圍巾",
    "en_def": "a length of fabric worn around the neck for warmth or style",
    "sentence": "Cold northern winds blew across the city streets, so Jessica wrapped a wool {{BLANK}} securely around her neck.",
    "cn": "冰冷的北風吹過城市街道，所以潔西卡把一條羊毛圍巾緊緊圍在脖子上。"
  },
  {
    "word": "tie",
    "pos": "n. / v.",
    "cn_def": "領帶；繫；綁",
    "en_def": "a narrow strip of material worn around the neck; to bind",
    "sentence": "The young salesman learned how to fasten his silk {{BLANK}} neatly before meeting important clients.",
    "cn": "這位年輕業務員在拜訪重要客戶之前，學會了如何把他的絲質領帶繫得整整齊齊。"
  },
  {
    "word": "necklace",
    "pos": "n.",
    "cn_def": "項鍊",
    "en_def": "an ornamental chain or string of beads worn around the neck",
    "sentence": "On their twentieth wedding anniversary, my father surprised my mother with an expensive pearl {{BLANK}}.",
    "cn": "在他們結婚二十週年紀念日，我父親送給我母親一條昂貴的珍珠項鍊作為驚喜。"
  }
];

const MCQS = [
  {
    "q": "For the formal business presentation, Emily wore a professional white silk ______ paired with a dark pencil skirt.",
    "options": [
      "trousers",
      "pajamas",
      "blouse",
      "underwear"
    ],
    "answer": 2,
    "cn": "為了正式的商務簡報，艾蜜莉穿著專業的白色絲質女襯衫搭配深色窄裙。 【選項解析】(A) blouse 女襯衫  (B) pajamas 睡衣  (C) trousers 長褲  (D) underwear 內衣。女性正式上衣用 blouse。",
    "vocabIndex": 0
  },
  {
    "q": "After taking a warm shower before bed, little Leo put on his striped cotton ______ and fell asleep quickly.",
    "options": [
      "blouse",
      "tie",
      "necklace",
      "pajamas"
    ],
    "answer": 3,
    "cn": "睡前沖完溫水澡後，小里歐穿上條紋純棉睡衣褲並很快進入夢鄉。 【選項解析】(A) blouse 女襯衫  (B) pajamas 睡衣  (C) necklace 項鍊  (D) tie 領帶。睡前穿著 pajamas。",
    "vocabIndex": 1
  },
  {
    "q": "The bank manager arrived at the international conference dressed in a well-tailored navy blue ______.",
    "options": [
      "suit",
      "pajamas",
      "blouse",
      "scarf"
    ],
    "answer": 0,
    "cn": "銀行經理穿著一套剪裁得體的海軍藍西裝抵達國際研討會現場。 【選項解析】(A) blouse 女襯衫  (B) pajamas 睡衣  (C) suit 西裝  (D) scarf 圍巾。商務正式西裝用 suit。",
    "vocabIndex": 2
  },
  {
    "q": "Jason accidentally ripped a hole in his school ______ when climbing over the rusty iron playground fence.",
    "options": [
      "blouse",
      "trousers",
      "tie",
      "suit"
    ],
    "answer": 1,
    "cn": "傑森在翻越操場生鏽的鐵圍欄時，不小心把學校長褲勾破了一個洞。 【選項解析】(A) blouse 女襯衫  (B) suit 套裝  (C) tie 領帶  (D) trousers 長褲。爬圍欄易撕破 trousers。",
    "vocabIndex": 3
  },
  {
    "q": "On hot July afternoons, college students enjoy wearing a light cotton ______ while walking around campus.",
    "options": [
      "T-shirt",
      "necklace",
      "suit",
      "tie"
    ],
    "answer": 0,
    "cn": "在炎熱的七月午後，大學生們在校園漫步時喜歡穿著輕便的棉質T恤。 【選項解析】(A) T-shirt T恤  (B) necklace 項鍊  (C) suit 西裝  (D) tie 領帶。夏季休閒短袖為 T-shirt。",
    "vocabIndex": 4
  },
  {
    "q": "For reasons of personal hygiene, doctors recommend changing your daily ______ every single morning.",
    "options": [
      "scarf",
      "underwear",
      "necklace",
      "suit"
    ],
    "answer": 1,
    "cn": "基於個人衛生考量，醫生建議每天早晨更換乾淨的貼身內衣褲。 【選項解析】(A) scarf 圍巾  (B) underwear 內衣褲  (C) necklace 項鍊  (D) suit 西裝。個人衛生更換 underwear。",
    "vocabIndex": 5
  },
  {
    "q": "The construction worker wore a bright yellow safety ______ so that passing drivers could easily see him.",
    "options": [
      "necklace",
      "pajamas",
      "blouse",
      "vest"
    ],
    "answer": 3,
    "cn": "建築工人穿著一件亮黃色的安全背心，讓過往車輛司機能輕易看見他。 【選項解析】(A) necklace 項鍊  (B) pajamas 睡衣  (C) vest 背心  (D) blouse 女襯衫。safety vest 為安全背心。",
    "vocabIndex": 6
  },
  {
    "q": "Because the winter wind was freezing, grandma knitted a thick wool ______ to keep her neck warm.",
    "options": [
      "blouse",
      "suit",
      "scarf",
      "trousers"
    ],
    "answer": 2,
    "cn": "因為冬天的風冷冽刺骨，祖母織了一條厚羊毛圍巾來為脖子保暖。 【選項解析】(A) blouse 女襯衫  (B) suit 西裝  (C) trousers 長褲  (D) scarf 圍巾。脖子保暖必備 wool scarf。",
    "vocabIndex": 7
  },
  {
    "q": "Men are usually required to wear a dark jacket and a matching silk ______ at formal diplomacy banquets.",
    "options": [
      "pajamas",
      "tie",
      "underwear",
      "blouse"
    ],
    "answer": 1,
    "cn": "在正式的外交宴會上，男士通常被要求穿著深色外套並繫上相襯的絲質領帶。 【選項解析】(A) tie 領帶  (B) pajamas 睡衣  (C) underwear 內衣  (D) blouse 女襯衫。搭配西裝外套繫 tie。",
    "vocabIndex": 8
  },
  {
    "q": "The museum exhibition featured an ancient gold ______ decorated with emeralds and shiny diamonds.",
    "options": [
      "trousers",
      "T-shirt",
      "necklace",
      "vest"
    ],
    "answer": 2,
    "cn": "博物館展覽展出了一條以祖母綠和閃亮鑽石點綴的古老金項鍊。 【選項解析】(A) trousers 長褲  (B) necklace 項鍊  (C) T-shirt T恤  (D) vest 背心。頸部首飾為 necklace。",
    "vocabIndex": 9
  },
  {
    "q": "Mother bought a lovely pink floral ______ to wear to my sister's graduation ceremony next weekend.",
    "options": [
      "blouse",
      "trousers",
      "pajamas",
      "underwear"
    ],
    "answer": 0,
    "cn": "媽媽買了一件優雅的粉紅碎花女性襯衫，準備下週末參加我姊姊的畢業典禮時穿。 【選項解析】(A) pajamas 睡衣  (B) trousers 長褲  (C) blouse 女襯衫  (D) underwear 內衣。粉紅碎花女襯衫為 blouse。",
    "vocabIndex": 0
  },
  {
    "q": "It is inappropriate to walk into a luxury hotel lobby wearing your bedroom slippers and ______.",
    "options": [
      "blouse",
      "suit",
      "necklace",
      "pajamas"
    ],
    "answer": 3,
    "cn": "穿著臥室拖鞋和睡衣走進豪華飯店大廳是相當不合適的舉動。 【選項解析】(A) blouse 女襯衫  (B) suit 西裝  (C) necklace 項鍊  (D) pajamas 睡衣。居家睡衣用 pajamas。",
    "vocabIndex": 1
  },
  {
    "q": "The groom looked very handsome in his custom-made wedding ______ as he waited for his bride.",
    "options": [
      "suit",
      "pajamas",
      "blouse",
      "scarf"
    ],
    "answer": 0,
    "cn": "新郎穿著他的量身訂製結婚西裝，在等待新娘時看起來非常英挺帥氣。 【選項解析】(A) suit 西裝  (B) pajamas 睡衣  (C) blouse 女襯衫  (D) scarf 圍巾。新郎穿著 wedding suit。",
    "vocabIndex": 2
  },
  {
    "q": "Mr. White sent his wrinkled wool ______ to the dry cleaner so they would look neat for the interview.",
    "options": [
      "blouse",
      "tie",
      "trousers",
      "necklace"
    ],
    "answer": 2,
    "cn": "懷特先生將起皺的羊毛長褲送到乾洗店，以便在面試時看起來端莊筆挺。 【選項解析】(A) blouse 女襯衫  (B) trousers 長褲  (C) tie 領帶  (D) necklace 項鍊。長褲為 trousers。",
    "vocabIndex": 3
  },
  {
    "q": "Peter bought a black rock band ______ at the concert and wore it proudly to school the following Monday.",
    "options": [
      "necklace",
      "T-shirt",
      "scarf",
      "suit"
    ],
    "answer": 1,
    "cn": "彼得在演唱會上買了一件黑色搖滾樂團T恤，並在下週一驕傲地穿去學校。 【選項解析】(A) necklace 項鍊  (B) scarf 圍巾  (C) T-shirt T恤  (D) suit 西裝。樂團紀念衫通常為 band T-shirt。",
    "vocabIndex": 4
  },
  {
    "q": "Travelers should always pack three extra sets of clean ______ when embarking on an overseas flight.",
    "options": [
      "blouse",
      "necklace",
      "tie",
      "underwear"
    ],
    "answer": 3,
    "cn": "搭機前往海外旅行時，旅客應隨時額外打包三套乾淨的換洗貼身內衣褲。 【選項解析】(A) blouse 女襯衫  (B) necklace 項鍊  (C) tie 領帶  (D) underwear 內衣褲。出國備用內衣褲為 underwear。",
    "vocabIndex": 5
  },
  {
    "q": "In autumn, grandfather likes to wear a knitted wool ______ over his shirt to keep his chest comfortable.",
    "options": [
      "vest",
      "pajamas",
      "blouse",
      "necklace"
    ],
    "answer": 0,
    "cn": "在秋天，祖父喜歡在襯衫外穿一件針織羊毛背心以保持胸部溫暖舒適。 【選項解析】(A) vest 背心  (B) pajamas 睡衣  (C) blouse 女襯衫  (D) necklace 項鍊。套在襯衫外的無袖衣物為 vest。",
    "vocabIndex": 6
  },
  {
    "q": "During the snowy evening walk, Sophia pulled her red cashmere ______ higher over her mouth and nose.",
    "options": [
      "blouse",
      "scarf",
      "suit",
      "trousers"
    ],
    "answer": 1,
    "cn": "在下雪的夜晚散步時，索菲亞將紅色羊絨圍巾拉高遮住口鼻以避寒。 【選項解析】(A) blouse 女襯衫  (B) scarf 圍巾  (C) suit 西裝  (D) trousers 長褲。圍在頸部防寒為 cashmere scarf。",
    "vocabIndex": 7
  },
  {
    "q": "Can you teach me how to ______ a proper knot on this school necktie before the morning assembly starts?",
    "options": [
      "boil",
      "skin",
      "tie",
      "tear"
    ],
    "answer": 2,
    "cn": "在朝會開始之前，你能教我如何在這條學校領帶上打出漂亮的結嗎？ 【選項解析】(A) boil 煮沸  (B) skin 擦破皮  (C) tie 繫/打結  (D) tear 撕破。tie a knot（打結）。",
    "vocabIndex": 8
  },
  {
    "q": "The thief snatched the diamond ______ from the lady's neck and disappeared quickly into the crowded alley.",
    "options": [
      "trousers",
      "pajamas",
      "blouse",
      "necklace"
    ],
    "answer": 3,
    "cn": "小偷從那位女士的脖子上扯下鑽石項鍊，迅速消失在擁擠的巷弄中。 【選項解析】(A) trousers 長褲  (B) pajamas 睡衣  (C) blouse 女襯衫  (D) necklace 項鍊。戴在脖子上的珠寶是 necklace。",
    "vocabIndex": 9
  },
  {
    "q": "The saleslady showed Mrs. Davis an elegant silk ______ with delicate lace around the round collar.",
    "options": [
      "trousers",
      "blouse",
      "pajamas",
      "underwear"
    ],
    "answer": 1,
    "cn": "女店員向戴維斯太太展示了一件圓領帶有精美蕾絲的優雅絲質女襯衫。 【選項解析】(A) blouse 女襯衫  (B) trousers 長褲  (C) pajamas 睡衣  (D) underwear 內衣。圓領女襯衫用 blouse。",
    "vocabIndex": 0
  },
  {
    "q": "Cozy flannel ______ are especially popular among children during freezing December nights.",
    "options": [
      "suits",
      "necklaces",
      "scarves",
      "pajamas"
    ],
    "answer": 3,
    "cn": "舒適的法蘭絨睡衣在寒冷的十二月夜晚特別受到孩子們的歡迎。 【選項解析】(A) suits 西裝  (B) pajamas 睡衣  (C) scarves 圍巾  (D) necklaces 項鍊。flannel pajamas（法蘭絨睡衣）。",
    "vocabIndex": 1
  },
  {
    "q": "Lawyers usually wear a sharp formal ______ in court to present a respectable and serious appearance.",
    "options": [
      "suit",
      "pajamas",
      "blouse",
      "necklace"
    ],
    "answer": 0,
    "cn": "律師通常在法庭穿著筆挺的正式西裝，以展現莊重嚴肅的專業形象。 【選項解析】(A) blouse 女襯衫  (B) pajamas 睡衣  (C) suit 西裝  (D) necklace 項鍊。法庭正式西裝為 sharp formal suit。",
    "vocabIndex": 2
  },
  {
    "q": "Because these blue denim ______ are too long, mother offered to shorten the cuffs on her sewing machine.",
    "options": [
      "blouses",
      "ties",
      "trousers",
      "scarves"
    ],
    "answer": 2,
    "cn": "因為這條藍色牛仔長褲太長了，母親主動提出要用裁縫機幫忙改短褲管。 【選項解析】(A) blouses 女襯衫  (B) ties 領帶  (C) scarves 圍巾  (D) trousers 長褲。牛仔長褲為 denim trousers。",
    "vocabIndex": 3
  },
  {
    "q": "Tom bought a simple white ______ and used fabric markers to draw his own cartoon design on the front.",
    "options": [
      "suit",
      "T-shirt",
      "necklace",
      "tie"
    ],
    "answer": 1,
    "cn": "湯姆買了一件純白T恤，並用布料彩繪筆在正面畫上了他自己的卡通設計。 【選項解析】(A) T-shirt T恤  (B) suit 西裝  (C) necklace 項鍊  (D) tie 領帶。白色素T為 white T-shirt。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "blouse": {
    "pos": "n.",
    "en_def": "a woman's shirt or upper garment",
    "cn_def": "女性襯衫；罩衫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a woman's shirt or upper garment",
        "cn_def": "女性襯衫；罩衫"
      }
    ]
  },
  "pajamas": {
    "pos": "n.",
    "en_def": "soft loose clothing worn in bed",
    "cn_def": "睡衣褲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "soft loose clothing worn in bed",
        "cn_def": "睡衣褲"
      }
    ]
  },
  "suit": {
    "pos": "n. / v.",
    "en_def": "a jacket and matching trousers or skirt; to fit well",
    "cn_def": "套裝；西裝；適合",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a jacket and matching trousers or skirt; to fit well",
        "cn_def": "套裝；西裝；適合"
      }
    ]
  },
  "trousers": {
    "pos": "n.",
    "en_def": "a piece of clothing covering the body from waist to ankle on each leg",
    "cn_def": "長褲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of clothing covering the body from waist to ankle on each leg",
        "cn_def": "長褲"
      }
    ]
  },
  "t-shirt": {
    "pos": "n.",
    "en_def": "a simple short-sleeved cotton casual shirt with no collar",
    "cn_def": "短袖圓領汗衫；T恤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a simple short-sleeved cotton casual shirt with no collar",
        "cn_def": "短袖圓領汗衫；T恤"
      }
    ]
  },
  "underwear": {
    "pos": "n.",
    "en_def": "clothes worn under other clothes next to the skin",
    "cn_def": "內衣褲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "clothes worn under other clothes next to the skin",
        "cn_def": "內衣褲"
      }
    ]
  },
  "vest": {
    "pos": "n.",
    "en_def": "a sleeveless upper garment worn over a shirt",
    "cn_def": "背心",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sleeveless upper garment worn over a shirt",
        "cn_def": "背心"
      }
    ]
  },
  "scarf": {
    "pos": "n.",
    "en_def": "a length of fabric worn around the neck for warmth or style",
    "cn_def": "圍巾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a length of fabric worn around the neck for warmth or style",
        "cn_def": "圍巾"
      }
    ]
  },
  "tie": {
    "pos": "n. / v.",
    "en_def": "a narrow strip of material worn around the neck; to bind",
    "cn_def": "領帶；繫；綁",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a narrow strip of material worn around the neck; to bind",
        "cn_def": "領帶；繫；綁"
      }
    ]
  },
  "necklace": {
    "pos": "n.",
    "en_def": "an ornamental chain or string of beads worn around the neck",
    "cn_def": "項鍊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ornamental chain or string of beads worn around the neck",
        "cn_def": "項鍊"
      }
    ]
  },
  "boil": {
    "pos": "",
    "en_def": "",
    "cn_def": "煮沸",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "煮沸"
      }
    ]
  },
  "skin": {
    "pos": "",
    "en_def": "",
    "cn_def": "擦破皮",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擦破皮"
      }
    ]
  },
  "tear": {
    "pos": "",
    "en_def": "",
    "cn_def": "撕破",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "撕破"
      }
    ]
  },
  "suits": {
    "pos": "",
    "en_def": "",
    "cn_def": "西裝",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "西裝"
      }
    ]
  },
  "necklaces": {
    "pos": "",
    "en_def": "",
    "cn_def": "項鍊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "項鍊"
      }
    ]
  },
  "scarves": {
    "pos": "",
    "en_def": "",
    "cn_def": "圍巾",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "圍巾"
      }
    ]
  },
  "blouses": {
    "pos": "",
    "en_def": "",
    "cn_def": "女襯衫",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "女襯衫"
      }
    ]
  },
  "ties": {
    "pos": "",
    "en_def": "",
    "cn_def": "領帶",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "領帶"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
