// Lesson 83 Quiz Data: Architecture, Construction Materials, Scale & Mathematics
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 83 - Architecture, Construction Materials, Scale & Mathematics",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "style",
    "pos": "n.",
    "cn_def": "風格；式樣",
    "en_def": "a particular way in which something is done, created, or performed",
    "sentence": "The famous Taiwanese architect designed the library in a modern minimalist {{BLANK}}, with floor-to-ceiling glass windows and wooden walls.",
    "cn": "這位著名的台灣建築師以現代極簡風格設計了這座圖書館，配有落地玻璃窗和木質牆壁。"
  },
  {
    "word": "plus",
    "pos": "prep. / n.",
    "cn_def": "加；加上；優勢",
    "en_def": "added to; with the addition of; an advantage",
    "sentence": "The total price of the set lunch is two hundred dollars {{BLANK}} ten percent for the service charge, which is reasonable.",
    "cn": "這份套餐的總價是兩百元加上百分之十的服務費，價格十分合理。"
  },
  {
    "word": "minus",
    "pos": "prep. / n.",
    "cn_def": "減；減去；缺點",
    "en_def": "reduced by; subtracting; a disadvantage",
    "sentence": "During freezing winter nights in high mountains, the outside temperature often drops to {{BLANK}} five degrees Celsius.",
    "cn": "在寒冷的冬夜裡，高山上的室外氣溫經常降至零下五度。"
  },
  {
    "word": "straw",
    "pos": "n.",
    "cn_def": "稻草；吸管",
    "en_def": "dried yellow stems of wheat; a thin plastic tube for drinking",
    "sentence": "Because the young child could not hold the cold glass steadily, the friendly waitress kindly brought her a flexible drinking {{BLANK}}.",
    "cn": "因為那個幼童拿不穩冰涼的玻璃杯，和藹的女服務生好心地拿來了一根可彎曲的飲用吸管。"
  },
  {
    "word": "brick",
    "pos": "n.",
    "cn_def": "磚塊",
    "en_def": "a rectangular block of hard clay used for building walls",
    "sentence": "In the famous children's fairy tale, the third little pig worked hard and built a solid house made of red {{BLANK}}.",
    "cn": "在著名的童話故事中，第三隻小豬辛勤工作，建造了一座用紅磚砌成的堅固房屋。"
  },
  {
    "word": "tiny",
    "pos": "adj.",
    "cn_def": "極小的；微小的",
    "en_def": "extremely small in size or amount",
    "sentence": "When the newborn kitten opened its round eyes for the first time, it made a {{BLANK}} meow and snuggled next to its mother.",
    "cn": "當剛出生的小貓第一次睜開圓圓的眼睛時，牠發出了一聲微弱的喵叫，並依偎在母親身邊。"
  },
  {
    "word": "grand",
    "pos": "adj.",
    "cn_def": "雄偉的；宏大的",
    "en_def": "impressive and large or important; splendid",
    "sentence": "The foreign president and his wife attended the {{BLANK}} opening ceremony of the new national performing arts center last night.",
    "cn": "外國總統和他的妻子昨晚出席了國家表演藝術中心落成啟用的宏大開幕典禮。"
  },
  {
    "word": "giant",
    "pos": "adj. / n.",
    "cn_def": "巨大的；巨人；巨擘",
    "en_def": "extremely large; a huge person, animal, or corporation",
    "sentence": "Visitors can see two {{BLANK}} pandas eating fresh green bamboo leaves happily inside the spacious enclosure at Taipei Zoo.",
    "cn": "遊客可以在台北動物園寬敞的圍欄內看到兩隻大貓熊高興地吃著新鮮的綠色竹葉。"
  },
  {
    "word": "allow",
    "pos": "v.",
    "cn_def": "允許；准許",
    "en_def": "to give permission for someone to do something",
    "sentence": "Strict safety regulations in the chemical factory do not {{BLANK}} visitors to enter the testing area without safety goggles.",
    "cn": "化學工廠嚴格的安全規定不允許訪客在未佩戴護目鏡的情況下進入測試區域。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排；籌備；整理",
    "en_def": "to plan, prepare, or organize something in advance",
    "sentence": "Our school counselor will gladly {{BLANK}} a private face-to-face consultation for parents who need advice on university admissions.",
    "cn": "我們的學校輔導老師會很樂意為需要大學入學建議的家長安排私人的面對面諮詢。"
  }
];

const MCQS = [
  {
    "q": "The clothing designer is widely recognized for her elegant teaching ______, which inspires young students across the country.",
    "options": [
      "giant",
      "straw",
      "brick",
      "style"
    ],
    "answer": 3,
    "cn": "這位服裝設計師以其優雅的教學風格聞名遐邇，激勵了全國無數的年輕學子。 【選項解析】(A) style 風格  (B) straw 稻草  (C) brick 磚塊  (D) giant 巨人。優雅的教學風格為 elegant teaching style。",
    "vocabIndex": 0
  },
  {
    "q": "The cost of renting the private seminar room is five thousand dollars ______ a five-hundred-dollar cleaning deposit.",
    "options": [
      "plus",
      "tiny",
      "minus",
      "grand"
    ],
    "answer": 0,
    "cn": "租用私人研討室的費用是五千元加上五百元的清潔押金。 【選項解析】(A) minus 減去  (B) tiny 微小的  (C) plus 加上  (D) grand 宏大的。費用外再加上押金，選 plus。",
    "vocabIndex": 1
  },
  {
    "q": "Ten ______ three equals seven, which is one of the simplest subtraction problems taught in elementary school.",
    "options": [
      "plus",
      "tiny",
      "minus",
      "grand"
    ],
    "answer": 2,
    "cn": "十減三等於七，這是小學教授的最簡單的減法運算之一。 【選項解析】(A) plus 加上  (B) minus 減去  (C) tiny 微小的  (D) grand 宏大的。10 減 3 等於 7，選 minus。",
    "vocabIndex": 2
  },
  {
    "q": "The little girl ordered a glass of iced lemon tea and asked the waiter for a plastic ______ so she could drink easily.",
    "options": [
      "brick",
      "straw",
      "style",
      "giant"
    ],
    "answer": 1,
    "cn": "小女孩點了一杯冰檸檬茶，並向服務生要了一根塑膠吸管以便飲用。 【選項解析】(A) straw 吸管  (B) brick 磚塊  (C) style 風格  (D) giant 巨人。喝飲料用吸管 straw。",
    "vocabIndex": 3
  },
  {
    "q": "Construction workers laid each heavy red ______ carefully along the foundation to build a sturdy protective garden wall.",
    "options": [
      "brick",
      "style",
      "straw",
      "giant"
    ],
    "answer": 0,
    "cn": "建築工人們小心翼翼地沿著地基鋪設每塊沉重的紅磚，以砌成一堵堅固的花園防護牆。 【選項解析】(A) straw 稻草  (B) style 風格  (C) brick 磚塊  (D) giant 巨人。砌牆所用的紅磚為 red brick。",
    "vocabIndex": 4
  },
  {
    "q": "The baby sparrow was so ______ that it could rest comfortably inside the palm of grandfather's gentle hand.",
    "options": [
      "grand",
      "giant",
      "minus",
      "tiny"
    ],
    "answer": 3,
    "cn": "小麻雀非常幼小，以至於可以舒適地蜷縮在祖父溫柔的手掌心中。 【選項解析】(A) grand 宏偉的  (B) giant 巨大的  (C) tiny 極小的  (D) minus 減去。體型極小能放在手心，選 tiny。",
    "vocabIndex": 5
  },
  {
    "q": "The royal family hosted a ______ banquet in the palace ballroom to celebrate the wedding of the prince and princess.",
    "options": [
      "tiny",
      "grand",
      "minus",
      "straw"
    ],
    "answer": 1,
    "cn": "王室在宮殿宴會廳舉辦了一場盛大的國宴，以慶祝王子與公主的大婚。 【選項解析】(A) grand 盛大的  (B) tiny 微小的  (C) minus 減去  (D) straw 稻草。宮殿盛大宴會為 grand banquet。",
    "vocabIndex": 6
  },
  {
    "q": "A ______ crane was brought to the construction site this morning to lift heavy steel beams to the top floor of the skyscraper.",
    "options": [
      "tiny",
      "minus",
      "giant",
      "style"
    ],
    "answer": 2,
    "cn": "今天早上工地上開來了一台巨大的起重機，將沉重的鋼樑吊裝到摩天大樓的頂樓。 【選項解析】(A) tiny 微小的  (B) minus 減去  (C) giant 巨大的  (D) style 風格。巨大的起重機為 giant crane。",
    "vocabIndex": 7
  },
  {
    "q": "Because of strict hospital rules, doctors do not ______ more than two visitors to enter the intensive care unit at the same time.",
    "options": [
      "arrange",
      "allow",
      "style",
      "brick"
    ],
    "answer": 1,
    "cn": "由於醫院的嚴格規定，醫生不允許超過兩名訪客同時進入加護病房。 【選項解析】(A) allow 允許  (B) arrange 安排  (C) style 風格  (D) brick 磚塊。允許某人做某事 allow sb to do sth。",
    "vocabIndex": 8
  },
  {
    "q": "The company secretary will ______ hotel reservations and flight tickets for our general manager before his business trip to London.",
    "options": [
      "allow",
      "giant",
      "straw",
      "arrange"
    ],
    "answer": 3,
    "cn": "公司秘書會在我們總經理啟程前往倫敦出差前，為他安排飯店預訂和機票。 【選項解析】(A) allow 允許  (B) arrange 安排  (C) straw 稻草  (D) giant 巨人。安排訂房與機票用 arrange。",
    "vocabIndex": 9
  },
  {
    "q": "Japanese restaurants often feature a minimalist interior ______ that uses light wood, sliding paper doors, and soft lighting.",
    "options": [
      "style",
      "brick",
      "straw",
      "giant"
    ],
    "answer": 0,
    "cn": "日本餐廳通常具有極簡主義的室內風格，採用淺色木材、紙拉門和柔和照明。 【選項解析】(A) straw 稻草  (B) brick 磚塊  (C) style 風格  (D) giant 巨人。室內設計風格為 interior style。",
    "vocabIndex": 0
  },
  {
    "q": "Having prior work experience in foreign trade is a definite ______ when applying for this prestigious international sales position.",
    "options": [
      "minus",
      "tiny",
      "plus",
      "grand"
    ],
    "answer": 2,
    "cn": "在應聘這個著名的國際銷售職位時，具備外貿工作經驗絕對是一個加分優勢。 【選項解析】(A) minus 劣勢  (B) plus 優勢/加號  (C) tiny 微小的  (D) grand 宏偉的。優勢加分為 a definite plus。",
    "vocabIndex": 1
  },
  {
    "q": "If you take fifteen ______ seven, the mathematical remainder that you get is eight.",
    "options": [
      "minus",
      "tiny",
      "grand",
      "plus"
    ],
    "answer": 0,
    "cn": "如果你用十五減去七，你得到的數學餘數就是八。 【選項解析】(A) plus 加上  (B) tiny 微小的  (C) grand 宏偉的  (D) minus 減去。15 減 7 等於 8，選 minus。",
    "vocabIndex": 2
  },
  {
    "q": "Farmers in the countryside often stack bundles of dry golden ______ in the barn to feed their cattle during winter.",
    "options": [
      "giant",
      "brick",
      "style",
      "straw"
    ],
    "answer": 3,
    "cn": "鄉下的農夫經常在穀倉裡堆放捆紮好的乾燥金黃稻草，以便在冬天餵養牛群。 【選項解析】(A) straw 稻草  (B) brick 磚塊  (C) style 風格  (D) giant 巨人。農村曬乾之稻草為 straw。",
    "vocabIndex": 3
  },
  {
    "q": "The ancient fortress was constructed with thick gray ______ that successfully withstood attacks by enemy armies for centuries.",
    "options": [
      "style",
      "straw",
      "brick",
      "giant"
    ],
    "answer": 2,
    "cn": "這座古老的堡壘是用厚重的灰色磚塊砌成的，幾百年來成功抵禦了敵軍的攻擊。 【選項解析】(A) style 風格  (B) straw 稻草  (C) giant 巨人  (D) brick 磚塊。砌築古堡壘之磚塊為 brick。",
    "vocabIndex": 4
  },
  {
    "q": "A ______ insect crawled across the green cabbage leaf, and Billy used a magnifying glass to inspect its six tiny legs.",
    "options": [
      "grand",
      "tiny",
      "giant",
      "minus"
    ],
    "answer": 1,
    "cn": "一隻微小的昆蟲爬過綠色的甘藍菜葉，比利拿著放大鏡仔細端詳牠六隻細小的腿。 【選項解析】(A) tiny 微小的  (B) grand 宏大的  (C) giant 巨大的  (D) minus 負的。微小昆蟲為 tiny insect。",
    "vocabIndex": 5
  },
  {
    "q": "Tourists from all over the world gathered to admire the ______ view of the snow-capped mountain peaks at sunrise.",
    "options": [
      "grand",
      "tiny",
      "minus",
      "straw"
    ],
    "answer": 0,
    "cn": "來自世界各地的遊客聚集在一起，欣賞日出時白雪皚皚的山峰之壯麗景色。 【選項解析】(A) tiny 微小的  (B) grand 壯麗的  (C) minus 減去  (D) straw 稻草。壯觀景色為 grand view。",
    "vocabIndex": 6
  },
  {
    "q": "The tech company grew from a small garage startup into a multinational technology ______ with offices in forty countries.",
    "options": [
      "brick",
      "style",
      "straw",
      "giant"
    ],
    "answer": 3,
    "cn": "這家科技公司從車庫裡的初創企業發展成為在四十個國家設有辦事處的跨國科技巨擘。 【選項解析】(A) giant 巨擘  (B) style 風格  (C) straw 稻草  (D) brick 磚塊。商業巨頭跨國企業為 business giant。",
    "vocabIndex": 7
  },
  {
    "q": "Parents should not ______ their young teenagers to stay out past midnight without knowing who they are with.",
    "options": [
      "arrange",
      "allow",
      "style",
      "brick"
    ],
    "answer": 1,
    "cn": "父母不應該允許十幾歲的孩子在深夜未歸，除非清楚知道他們與誰在一起。 【選項解析】(A) allow 允許  (B) arrange 安排  (C) style 風格  (D) brick 磚塊。准許外出用 allow sb to stay out。",
    "vocabIndex": 8
  },
  {
    "q": "The travel agency helped us ______ an exciting five-day sightseeing tour around the scenic eastern coast of Taiwan.",
    "options": [
      "allow",
      "straw",
      "arrange",
      "giant"
    ],
    "answer": 2,
    "cn": "旅行社幫我們安排了一次為期五天、環繞台灣風景優美的東海岸的精彩觀光之旅。 【選項解析】(A) allow 准許  (B) arrange 安排  (C) straw 稻草  (D) giant 巨人。規劃安排旅遊行程為 arrange a tour。",
    "vocabIndex": 9
  },
  {
    "q": "His casual fashion ______ of wearing graphic T-shirts and worn jeans made him stand out among the suited businessmen.",
    "options": [
      "style",
      "straw",
      "brick",
      "giant"
    ],
    "answer": 0,
    "cn": "他穿著圖案T恤和舊牛仔褲的休閒穿搭風格，使他在西裝筆挺的商務人士中格外引人注目。 【選項解析】(A) style 風格  (B) straw 稻草  (C) brick 磚塊  (D) giant 巨人。休閒服飾風格為 fashion style。",
    "vocabIndex": 0
  },
  {
    "q": "The new apartment features two spacious bedrooms ______ a lovely balcony overlooking the tranquil botanical park.",
    "options": [
      "minus",
      "plus",
      "tiny",
      "grand"
    ],
    "answer": 1,
    "cn": "這間新公寓設有兩間寬敞的臥室，外加一個俯瞰寧靜植物公園的可愛陽台。 【選項解析】(A) minus 減去  (B) tiny 微小的  (C) plus 加上  (D) grand 宏大的。臥室外加陽台，選 plus。",
    "vocabIndex": 1
  },
  {
    "q": "The farmer wore a wide-brimmed ______ hat to protect his face and neck from the scorching afternoon sunlight in the field.",
    "options": [
      "brick",
      "style",
      "straw",
      "giant"
    ],
    "answer": 2,
    "cn": "農夫在田間戴了一頂寬邊草帽，以保護面部和頸部免受午後灼熱陽光的照射。 【選項解析】(A) brick 磚塊  (B) style 風格  (C) giant 巨人  (D) straw 稻草/草帽。遮陽草帽為 straw hat。",
    "vocabIndex": 3
  },
  {
    "q": "That old red ______ warehouse by the river harbor was recently renovated into a trendy art museum and coffee shop.",
    "options": [
      "straw",
      "giant",
      "style",
      "brick"
    ],
    "answer": 3,
    "cn": "河港邊的那座老舊紅磚倉庫最近被翻新成時尚的藝術博物館和咖啡館。 【選項解析】(A) straw 稻草  (B) brick 磚塊  (C) style 風格  (D) giant 巨人。紅磚倉庫為 red brick warehouse。",
    "vocabIndex": 4
  },
  {
    "q": "Even a ______ mistake in calculating the satellite trajectory could cause the billion-dollar space mission to fail completely.",
    "options": [
      "giant",
      "grand",
      "tiny",
      "minus"
    ],
    "answer": 2,
    "cn": "即使在計算衛星軌道時出現極其微小的錯誤，也可能導致耗資數十億美元的太空任務徹底失敗。 【選項解析】(A) tiny 微小的  (B) grand 宏偉的  (C) giant 巨大的  (D) minus 減去。微小錯誤為 tiny mistake。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "style": {
    "pos": "n.",
    "en_def": "a particular way in which something is done, created, or performed",
    "cn_def": "風格；式樣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular way in which something is done, created, or performed",
        "cn_def": "風格；式樣"
      }
    ]
  },
  "plus": {
    "pos": "prep. / n.",
    "en_def": "added to; with the addition of; an advantage",
    "cn_def": "加；加上；優勢",
    "combined": [
      {
        "pos": "prep. / n.",
        "en_def": "added to; with the addition of; an advantage",
        "cn_def": "加；加上；優勢"
      }
    ]
  },
  "minus": {
    "pos": "prep. / n.",
    "en_def": "reduced by; subtracting; a disadvantage",
    "cn_def": "減；減去；缺點",
    "combined": [
      {
        "pos": "prep. / n.",
        "en_def": "reduced by; subtracting; a disadvantage",
        "cn_def": "減；減去；缺點"
      }
    ]
  },
  "straw": {
    "pos": "n.",
    "en_def": "dried yellow stems of wheat; a thin plastic tube for drinking",
    "cn_def": "稻草；吸管",
    "combined": [
      {
        "pos": "n.",
        "en_def": "dried yellow stems of wheat; a thin plastic tube for drinking",
        "cn_def": "稻草；吸管"
      }
    ]
  },
  "brick": {
    "pos": "n.",
    "en_def": "a rectangular block of hard clay used for building walls",
    "cn_def": "磚塊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rectangular block of hard clay used for building walls",
        "cn_def": "磚塊"
      }
    ]
  },
  "tiny": {
    "pos": "adj.",
    "en_def": "extremely small in size or amount",
    "cn_def": "極小的；微小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely small in size or amount",
        "cn_def": "極小的；微小的"
      }
    ]
  },
  "grand": {
    "pos": "adj.",
    "en_def": "impressive and large or important; splendid",
    "cn_def": "雄偉的；宏大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "impressive and large or important; splendid",
        "cn_def": "雄偉的；宏大的"
      }
    ]
  },
  "giant": {
    "pos": "adj. / n.",
    "en_def": "extremely large; a huge person, animal, or corporation",
    "cn_def": "巨大的；巨人；巨擘",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "extremely large; a huge person, animal, or corporation",
        "cn_def": "巨大的；巨人；巨擘"
      }
    ]
  },
  "allow": {
    "pos": "v.",
    "en_def": "to give permission for someone to do something",
    "cn_def": "允許；准許",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give permission for someone to do something",
        "cn_def": "允許；准許"
      }
    ]
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan, prepare, or organize something in advance",
    "cn_def": "安排；籌備；整理",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to plan, prepare, or organize something in advance",
        "cn_def": "安排；籌備；整理"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
