// Part 1 Quiz Data: ambition – creature
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 6-1 - ambition – creature",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "雄心；抱負；志向（可數/不可數）",
    "en_def": "a strong desire to do or achieve something significant; ambition",
    "sentence": "After ten years of hard work, George finally fulfilled his lifelong {{BLANK}} by opening his own international business.",
    "cn": "經過十年的辛勤奮鬥，喬治終於開辦了自己的跨國公司，實現了他畢生的抱負。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有雄心壯志的；野心勃勃的",
    "en_def": "having or showing a strong desire and determination to succeed",
    "sentence": "The technology company announced an {{BLANK}} plan to reduce carbon emissions across all its factories by half.",
    "cn": "這家科技公司宣布了一項宏大的／具雄心的計畫，要在所有工廠減少一半的碳排放。"
  },
  {
    "word": "announce",
    "pos": "v.",
    "cn_def": "宣布；公布；宣告（動詞）",
    "en_def": "to make a public or formal declaration about a fact, event, or intention",
    "sentence": "The school principal was very pleased to {{BLANK}} that our baseball team had won the national championship.",
    "cn": "校長非常高興地宣布，我們學校的棒球隊贏得了全國冠軍。"
  },
  {
    "word": "announcement",
    "pos": "n.",
    "cn_def": "公告；通告；宣告（可數/不可數）",
    "en_def": "a public or formal statement about a fact, occurrence, or intention",
    "sentence": "Passengers at the crowded train station listened carefully to the public {{BLANK}} about the delayed express train.",
    "cn": "擁擠火車站內的乘客們仔細聆聽有關特快列車延誤的公共廣播通告。"
  },
  {
    "word": "declare",
    "pos": "v.",
    "cn_def": "宣告；正式聲明；申報（動詞）",
    "en_def": "to say something in a solemn, emphatic, or official manner",
    "sentence": "Unable to pay his heavy mounting debts after losing his job, Gary was forced to {{BLANK}} bankruptcy in court.",
    "cn": "失業後無法償還日益增加的沉重債務，蓋瑞被迫在法庭上宣告破產。"
  },
  {
    "word": "brakes",
    "pos": "n.",
    "cn_def": "煞車；制動器（可數）",
    "en_def": "a device for slowing or stopping a moving vehicle, typically by friction",
    "sentence": "When a stray dog suddenly ran onto the road, the driver slammed on the {{BLANK}} to avoid hitting it.",
    "cn": "當一隻流浪狗突然跑上馬路時，駕駛猛踩煞車以避免撞上牠。"
  },
  {
    "word": "brake",
    "pos": "v.",
    "cn_def": "煞車；減速（動詞）",
    "en_def": "to slow down or stop a vehicle using a brake",
    "sentence": "Driving instructors advise students to {{BLANK}} slowly and steadily whenever a traffic light turns from green to yellow.",
    "cn": "駕訓班教練建議學生，每當交通號誌由綠燈轉為黃燈時都要緩緩煞車。"
  },
  {
    "word": "bubble",
    "pos": "n.",
    "cn_def": "氣泡；泡沫；泡泡（可數）",
    "en_def": "a thin sphere of liquid enclosing air or another gas",
    "sentence": "When housing prices dropped sharply, the long-predicted real estate {{BLANK}} finally burst with great impact.",
    "cn": "當房價大幅下跌時，長久以來被預測的房地產泡沫終於破裂，帶來巨大衝擊。"
  },
  {
    "word": "bubble",
    "pos": "v.",
    "cn_def": "冒泡；起泡；沸騰（動詞）",
    "en_def": "to form or produce bubbles; to rise to the surface",
    "sentence": "Nancy saw the fresh chicken soup begin to {{BLANK}} gently in the pot, so she added the noodles.",
    "cn": "南西看見鍋裡的新鮮雞湯開始緩緩冒泡沸騰，便把麵條放了進去。"
  },
  {
    "word": "bubbly",
    "pos": "adj.",
    "cn_def": "充滿氣泡的；活潑開朗的",
    "en_def": "full of bubbles; lively and cheerful in personality",
    "sentence": "Jessica is popular among her classmates because she has an energetic and {{BLANK}} personality that brightens the room.",
    "cn": "潔西卡在同學中很受歡迎，因為她擁有活力充沛且活潑開朗的性格，總能讓房間充滿歡樂。"
  },
  {
    "word": "clay",
    "pos": "n.",
    "cn_def": "黏土；陶土（不可數）",
    "en_def": "a stiff, sticky fine-grained earth that can be molded when wet and baked",
    "sentence": "Art students sat around the rotating wheel in the pottery studio to shape wet {{BLANK}} into beautiful vases.",
    "cn": "美術系學生圍坐在陶藝工作室的旋轉拉胚機旁，將濕陶土／黏土塑造成美麗的花瓶。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較；對照；比擬（可數/不可數）",
    "en_def": "a consideration or estimate of the similarities or dissimilarities between two things",
    "sentence": "The history teacher asked each student to make a thorough {{BLANK}} between the American and French revolutions.",
    "cn": "歷史老師要求每位學生在美國革命與法國革命之間進行深入的比較。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較；對照；比作（動詞）",
    "en_def": "to estimate, measure, or note the similarity or dissimilarity between",
    "sentence": "Smart consumers usually check online reviews to {{BLANK}} prices and quality before purchasing electronic devices.",
    "cn": "精明的消費者在購買電子產品前，通常會查看網路評價來比較價格與品質。"
  },
  {
    "word": "comparable",
    "pos": "adj.",
    "cn_def": "可比較的；比得上的；相當的",
    "en_def": "able to be likened to another; similar in quality or importance",
    "sentence": "The imported local olive oil is of {{BLANK}} quality to the expensive French brands but sells for half the price.",
    "cn": "這款進口的當地橄欖油品質與昂貴的法國品牌相當／比得上，但售價只有一半。"
  },
  {
    "word": "concert",
    "pos": "n.",
    "cn_def": "音樂會；演唱會（可數）",
    "en_def": "a musical performance given in public by several performers or of several works",
    "sentence": "Thousands of excited teenage fans screamed when their favorite rock band walked onto the stage at the {{BLANK}}.",
    "cn": "當最喜愛的搖滾樂團走上演唱會舞台時，數千名興奮的青少年粉絲發出尖叫。"
  },
  {
    "word": "creature",
    "pos": "n.",
    "cn_def": "生物；動物；生靈（可數）",
    "en_def": "an animal, as distinct from a human being; a living being",
    "sentence": "Uncle Robert is a true {{BLANK}} of habit who always eats the exact same breakfast at seven.",
    "cn": "羅伯特叔叔是一個道地的生活習慣固定者／依循習慣之人，總是在七點整吃一模一樣的早餐。"
  }
];

const MCQS = [
  {
    "q": "The young girl has a strong ______ to become a famous medical doctor in the future.",
    "options": [
      "ambition",
      "bubble",
      "clay",
      "brake"
    ],
    "answer": 0,
    "cn": "那個小女孩有著在未來成為著名醫生的強烈抱負／志向。",
    "vocabIndex": 0
  },
  {
    "q": "The driver pressed his foot hard on the car ______ to stop before hitting the red light.",
    "options": [
      "clay",
      "concert",
      "creature",
      "brake"
    ],
    "answer": 3,
    "cn": "司機猛踩汽車煞車，以便在闖紅燈之前停下來。",
    "vocabIndex": 5
  },
  {
    "q": "Children love blowing soap ______ in the park and watching them fly in the air.",
    "options": [
      "ambitions",
      "bubbles",
      "comparisons",
      "clays"
    ],
    "answer": 1,
    "cn": "孩子們喜歡在公園裡吹肥皂泡泡，看著它們在空中飛舞。",
    "vocabIndex": 7
  },
  {
    "q": "The artist used soft, wet ______ to make beautiful bowls and cups on the table.",
    "options": [
      "brake",
      "concert",
      "clay",
      "creature"
    ],
    "answer": 2,
    "cn": "藝術家在桌上使用柔軟濕潤的陶土／黏土製作美麗的碗與杯子。",
    "vocabIndex": 10
  },
  {
    "q": "The teacher made a careful ______ between the two story books to show how they were different.",
    "options": [
      "comparison",
      "bubble",
      "clay",
      "brake"
    ],
    "answer": 0,
    "cn": "老師對這兩本故事書做了仔細的比較，以指出它們的不同之處。",
    "vocabIndex": 11
  },
  {
    "q": "We bought two tickets to hear our favorite rock band play at the big outdoor ______.",
    "options": [
      "clay",
      "bubble",
      "concert",
      "brake"
    ],
    "answer": 2,
    "cn": "我們買了兩張票，去大型戶外音樂會／演唱會聽我們最喜愛的搖滾樂團演奏。",
    "vocabIndex": 14
  },
  {
    "q": "The whale is a very large ocean ______ that swims peacefully in deep blue waters.",
    "options": [
      "ambition",
      "creature",
      "brake",
      "clay"
    ],
    "answer": 1,
    "cn": "鯨魚是一種非常巨大的海洋生物，在深藍色的水域中平靜地游弋。",
    "vocabIndex": 15
  },
  {
    "q": "We heard an official ______ on the radio saying that schools would be closed tomorrow.",
    "options": [
      "creature",
      "clay",
      "bubble",
      "announcement"
    ],
    "answer": 3,
    "cn": "我們在廣播中聽到官方通告／公告，宣布明天學校停課。",
    "vocabIndex": 3
  },
  {
    "q": "Winning an Olympic gold medal is the lifelong ______ of many young athletes.",
    "options": [
      "ambition",
      "clay",
      "brake",
      "bubble"
    ],
    "answer": 0,
    "cn": "贏得奧運金牌是許多青年運動員畢生的抱負。",
    "vocabIndex": 0
  },
  {
    "q": "Be careful when you pull the bicycle hand ______ while going fast down the steep hill.",
    "options": [
      "creature",
      "clay",
      "brake",
      "ambition"
    ],
    "answer": 2,
    "cn": "在陡峭山坡上快速下坡時，拉動自行車手煞車要格外小心。",
    "vocabIndex": 5
  },
  {
    "q": "The school principal will ______ the names of the winning students in the hall this morning.",
    "options": [
      "compare",
      "announce",
      "declare",
      "brake"
    ],
    "answer": 1,
    "cn": "校長今天上午將在禮堂宣布／公布獲獎學生的名單。",
    "vocabIndex": 2
  },
  {
    "q": "The president decided to ______ in front of the nation that the war had finally ended.",
    "options": [
      "bubble",
      "brake",
      "compare",
      "declare"
    ],
    "answer": 3,
    "cn": "總統決定在全國人民面前宣告／正式聲明戰爭終於結束了。",
    "vocabIndex": 4
  },
  {
    "q": "You should ______ your car slowly when you see children playing near the road.",
    "options": [
      "announce",
      "brake",
      "declare",
      "compare"
    ],
    "answer": 1,
    "cn": "當看見有孩童在馬路邊玩耍時，你應該緩慢煞車／減速。",
    "vocabIndex": 5
  },
  {
    "q": "Hot water in the pot started to ______ and boil, so mom added some fresh salt.",
    "options": [
      "bubble",
      "announce",
      "declare",
      "brake"
    ],
    "answer": 0,
    "cn": "鍋中的熱水開始冒泡沸騰，於是媽媽加入了一些新鮮鹽巴。",
    "vocabIndex": 7
  },
  {
    "q": "Before buying a new phone, it is wise to ______ prices at different shops online.",
    "options": [
      "declare",
      "brake",
      "compare",
      "bubble"
    ],
    "answer": 2,
    "cn": "在買新手機前，上網比較各家商店的價格是明智的做法。",
    "vocabIndex": 12
  },
  {
    "q": "The young couple happily ______ their wedding date to all their family members.",
    "options": [
      "compared",
      "bubbled",
      "braked",
      "announced"
    ],
    "answer": 3,
    "cn": "那對年輕夫婦高興地向所有家庭成員宣布了他們的婚期。",
    "vocabIndex": 2
  },
  {
    "q": "After losing all his money in the failed shop, the sad merchant had to ______ bankruptcy.",
    "options": [
      "declare",
      "brake",
      "bubble",
      "compare"
    ],
    "answer": 0,
    "cn": "在經營失敗的商店裡賠光所有錢後，那位悲傷的商人不得不宣告破產。",
    "vocabIndex": 4
  },
  {
    "q": "Mark is an ______ student who studies very hard because he wants to enter a top college.",
    "options": [
      "comparable",
      "clayey",
      "bubbly",
      "ambitious"
    ],
    "answer": 3,
    "cn": "馬克是一位有雄心壯志的學生，他非常用功讀書因為他想進入頂尖大學。",
    "vocabIndex": 1
  },
  {
    "q": "Amy has a friendly, ______ personality, and her bright laughter always makes people smile.",
    "options": [
      "ambitious",
      "bubbly",
      "comparable",
      "announced"
    ],
    "answer": 1,
    "cn": "艾美性格友善且活潑開朗，她爽朗的笑聲總是能讓周遭的人微笑。",
    "vocabIndex": 9
  },
  {
    "q": "This small local hotel offers ______ comfort to large luxury hotels, but at a cheaper price.",
    "options": [
      "bubbly",
      "ambitious",
      "comparable",
      "declared"
    ],
    "answer": 2,
    "cn": "這家當地小旅館提供與大型豪華飯店相仿／可比擬的舒適度，但價格更便宜。",
    "vocabIndex": 13
  },
  {
    "q": "The young girl is very ______ and plans to start her own technology company before age thirty.",
    "options": [
      "bubbly",
      "comparable",
      "braked",
      "ambitious"
    ],
    "answer": 3,
    "cn": "那個年輕女孩非常有抱負野心，計畫在三十歲前創辦自己的科技公司。",
    "vocabIndex": 1
  },
  {
    "q": "Because of safety problems, the government decided to ______ on the building project.",
    "options": [
      "put the brakes on",
      "be pleased to announce",
      "in comparison with",
      "burst the bubble"
    ],
    "answer": 0,
    "cn": "由於安全問題，政府決定對這項建築專案踩煞車／予以遏阻。",
    "vocabIndex": 5
  },
  {
    "q": "The school director was ______ that all students passed the final language exam.",
    "options": [
      "in comparison with",
      "put the brakes on",
      "pleased to announce",
      "creatures of habit"
    ],
    "answer": 2,
    "cn": "學校主任很高興地宣布，所有學生都通過了期末語言考試。",
    "vocabIndex": 2
  },
  {
    "q": "Grandpa always wakes up at six and drinks hot tea; he is truly a ______.",
    "options": [
      "put the brakes on",
      "creature of habit",
      "pleased to announce",
      "in comparison with"
    ],
    "answer": 1,
    "cn": "爺爺總是六點起床喝熱茶；他真的是一個生活習慣固定之人。",
    "vocabIndex": 15
  },
  {
    "q": "______ last summer, this summer has been much cooler and has seen much more rain.",
    "options": [
      "Pleased to announce",
      "Put the brakes on",
      "Creature of habit",
      "In comparison with"
    ],
    "answer": 3,
    "cn": "與去年夏天相比，今年夏天涼爽得多且雨水豐沛。",
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "ambition": {
    "pos": "n.",
    "en_def": "a strong desire to do or achieve something significant; ambition",
    "cn_def": "雄心；抱負；志向（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong desire to do or achieve something significant; ambition",
        "cn_def": "雄心；抱負；志向（可數/不可數）"
      }
    ]
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "having or showing a strong desire and determination to succeed",
    "cn_def": "有雄心壯志的；野心勃勃的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing a strong desire and determination to succeed",
        "cn_def": "有雄心壯志的；野心勃勃的"
      }
    ]
  },
  "announce": {
    "pos": "v.",
    "en_def": "to make a public or formal declaration about a fact, event, or intention",
    "cn_def": "宣布；公布；宣告（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a public or formal declaration about a fact, event, or intention",
        "cn_def": "宣布；公布；宣告（動詞）"
      }
    ]
  },
  "announcement": {
    "pos": "n.",
    "en_def": "a public or formal statement about a fact, occurrence, or intention",
    "cn_def": "公告；通告；宣告（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public or formal statement about a fact, occurrence, or intention",
        "cn_def": "公告；通告；宣告（可數/不可數）"
      }
    ]
  },
  "declare": {
    "pos": "v.",
    "en_def": "to say something in a solemn, emphatic, or official manner",
    "cn_def": "宣告；正式聲明；申報（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say something in a solemn, emphatic, or official manner",
        "cn_def": "宣告；正式聲明；申報（動詞）"
      }
    ]
  },
  "brakes": {
    "pos": "n.",
    "en_def": "a device for slowing or stopping a moving vehicle, typically by friction",
    "cn_def": "煞車；制動器（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device for slowing or stopping a moving vehicle, typically by friction",
        "cn_def": "煞車；制動器（可數）"
      }
    ]
  },
  "brake": {
    "pos": "n.",
    "en_def": "a device for slowing or stopping a moving vehicle, typically by friction",
    "cn_def": "煞車；制動器（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device for slowing or stopping a moving vehicle, typically by friction",
        "cn_def": "煞車；制動器（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to slow down or stop a vehicle using a brake",
        "cn_def": "煞車；減速（動詞）"
      }
    ]
  },
  "bubble": {
    "pos": "n.",
    "en_def": "a thin sphere of liquid enclosing air or another gas",
    "cn_def": "氣泡；泡沫；泡泡（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thin sphere of liquid enclosing air or another gas",
        "cn_def": "氣泡；泡沫；泡泡（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to form or produce bubbles; to rise to the surface",
        "cn_def": "冒泡；起泡；沸騰（動詞）"
      }
    ]
  },
  "bubbly": {
    "pos": "adj.",
    "en_def": "full of bubbles; lively and cheerful in personality",
    "cn_def": "充滿氣泡的；活潑開朗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "full of bubbles; lively and cheerful in personality",
        "cn_def": "充滿氣泡的；活潑開朗的"
      }
    ]
  },
  "clay": {
    "pos": "n.",
    "en_def": "a stiff, sticky fine-grained earth that can be molded when wet and baked",
    "cn_def": "黏土；陶土（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a stiff, sticky fine-grained earth that can be molded when wet and baked",
        "cn_def": "黏土；陶土（不可數）"
      }
    ]
  },
  "comparison": {
    "pos": "n.",
    "en_def": "a consideration or estimate of the similarities or dissimilarities between two things",
    "cn_def": "比較；對照；比擬（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a consideration or estimate of the similarities or dissimilarities between two things",
        "cn_def": "比較；對照；比擬（可數/不可數）"
      }
    ]
  },
  "compare": {
    "pos": "v.",
    "en_def": "to estimate, measure, or note the similarity or dissimilarity between",
    "cn_def": "比較；對照；比作（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to estimate, measure, or note the similarity or dissimilarity between",
        "cn_def": "比較；對照；比作（動詞）"
      }
    ]
  },
  "comparable": {
    "pos": "adj.",
    "en_def": "able to be likened to another; similar in quality or importance",
    "cn_def": "可比較的；比得上的；相當的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be likened to another; similar in quality or importance",
        "cn_def": "可比較的；比得上的；相當的"
      }
    ]
  },
  "concert": {
    "pos": "n.",
    "en_def": "a musical performance given in public by several performers or of several works",
    "cn_def": "音樂會；演唱會（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a musical performance given in public by several performers or of several works",
        "cn_def": "音樂會；演唱會（可數）"
      }
    ]
  },
  "creature": {
    "pos": "n.",
    "en_def": "an animal, as distinct from a human being; a living being",
    "cn_def": "生物；動物；生靈（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an animal, as distinct from a human being; a living being",
        "cn_def": "生物；動物；生靈（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
