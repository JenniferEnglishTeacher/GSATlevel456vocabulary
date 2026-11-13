// Lesson 93 Quiz Data: Logical Connectors, Negations, Spatial Prepositions & Time Extent
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 93 - Logical Connectors, Negations, Spatial Prepositions & Time Extent",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "probably",
    "pos": "adv.",
    "cn_def": "可能；大概",
    "en_def": "used to mean that something is very likely to happen or be true",
    "sentence": "Because dark storm clouds are gathering in the afternoon sky, it will {{BLANK}} rain within an hour.",
    "cn": "因為午後天空烏雲密布，一小時之內大概會下雨。"
  },
  {
    "word": "such",
    "pos": "adj. / pron.",
    "cn_def": "如此的；這樣的",
    "en_def": "of the type previously mentioned; to an extreme degree",
    "sentence": "The charity concert was {{BLANK}} a tremendous success that all the tickets were sold out in minutes.",
    "cn": "這場慈善音樂會是如此巨大的成功，以致於所有門票在幾分鐘之內便售罄。"
  },
  {
    "word": "neither",
    "pos": "adv. / conj. / pron.",
    "cn_def": "兩者皆不",
    "en_def": "not either of two things or people",
    "sentence": "My brother does not eat raw seafood, and {{BLANK}} do I, so we ordered cooked pasta instead.",
    "cn": "我哥哥不吃生海鮮，我也不吃，所以我們改點了煮熟的義大利麵。"
  },
  {
    "word": "nor",
    "pos": "conj.",
    "cn_def": "也不；亦不",
    "en_def": "used before the second of two negative possibilities",
    "sentence": "The elderly man could not read the tiny letters, {{BLANK}} could he find his reading glasses in the dark.",
    "cn": "那位年長男士看不懂微小的字母，在黑暗中他也找不到老花眼鏡。"
  },
  {
    "word": "none",
    "pos": "pron.",
    "cn_def": "毫無；全無；沒有一個",
    "en_def": "not one of a group of people or things",
    "sentence": "The math teacher asked five challenging questions, but {{BLANK}} of the students could solve the last one.",
    "cn": "數學老師問了五道挑戰性題目，但沒有一個學生能解出最後一題。"
  },
  {
    "word": "across",
    "pos": "prep. / adv.",
    "cn_def": "穿過；橫越",
    "en_def": "from one side to the other of something",
    "sentence": "The government built a modern suspension bridge {{BLANK}} the broad river to reduce morning traffic congestion.",
    "cn": "政府在這條寬闊河流上方建造了一座現代吊橋，以紓解早晨的交通壅塞。"
  },
  {
    "word": "against",
    "pos": "prep.",
    "cn_def": "反對；倚靠；碰撞",
    "en_def": "opposing or disagreeing with; touching or hitting",
    "sentence": "Environmental groups voted strongly {{BLANK}} the new factory proposal to protect the natural forest wetlands.",
    "cn": "環保團體強烈投票反對新工廠提案，以保護天然森林濕地。"
  },
  {
    "word": "among",
    "pos": "prep.",
    "cn_def": "在…之中；在…之間",
    "en_def": "in the middle of or surrounded by other things or people",
    "sentence": "The traditional tea house was hidden peacefully {{BLANK}} towering bamboo trees at the mountain base.",
    "cn": "那間傳統茶館寧靜地隱匿在山腳下高聳的竹林之中。"
  },
  {
    "word": "through",
    "pos": "prep. / adv.",
    "cn_def": "穿過；通過；歷經",
    "en_def": "from one end or side of something to the other",
    "sentence": "The high-speed bullet train travels swiftly {{BLANK}} several mountain tunnels to reach the southern city.",
    "cn": "高速子彈列車飛快穿過幾座山間隧道以抵達南部城市。"
  },
  {
    "word": "till",
    "pos": "prep. / conj.",
    "cn_def": "直到…為止",
    "en_def": "up to the time of; until",
    "sentence": "The devoted university students stayed in the library {{BLANK}} midnight to prepare for their final exams.",
    "cn": "那些用功的大學生在圖書館待到午夜，為期末考做準備。"
  }
];

const MCQS = [
  {
    "q": "If temperatures continue to drop rapidly tonight, frost will ______ form on the mountain farm vegetables.",
    "options": [
      "probably",
      "against",
      "across",
      "among"
    ],
    "answer": 0,
    "cn": "如果今晚氣溫持續迅速下降，高山農場的蔬菜上很可能會結霜。 【選項解析】(A) against 反對  (B) probably 大概  (C) across 穿過  (D) among 在…之中。副詞 probably 修飾 will form。",
    "vocabIndex": 0
  },
  {
    "q": "It was ______ a thrilling detective movie that the audience sat silently on the edge of their seats.",
    "options": [
      "nor",
      "such",
      "till",
      "none"
    ],
    "answer": 1,
    "cn": "那是一部如此扣人心弦的偵探電影，以致於觀眾屏息靜坐在座位邊緣。 【選項解析】(A) such 如此的  (B) nor 亦不  (C) till 直到  (D) none 沒有一個。such a + adj. + n. + that 表「如此…以致於」。",
    "vocabIndex": 1
  },
  {
    "q": "Jack does not know how to swim, and ______ does his younger cousin, so they stayed in the shallow pool.",
    "options": [
      "across",
      "among",
      "through",
      "neither"
    ],
    "answer": 3,
    "cn": "傑克不會游泳，他的小表弟也不會，所以他們待在淺水池裡。 【選項解析】(A) across 穿過  (B) neither 也不  (C) through 穿過  (D) among 在…之中。and neither does... 表「也不…」。",
    "vocabIndex": 2
  },
  {
    "q": "The frightened child would not speak to the strange visitors, ______ would she let go of her mother's hand.",
    "options": [
      "such",
      "none",
      "nor",
      "across"
    ],
    "answer": 2,
    "cn": "受驚嚇的孩子不肯對陌生的訪客說話，也不肯鬆開母親的手。 【選項解析】(A) such 如此的  (B) none 全無  (C) nor 亦不  (D) across 穿過。nor could she 表否定倒裝「也不…」。",
    "vocabIndex": 3
  },
  {
    "q": "The police officer interviewed ten witnesses on the street, but ______ of them had noticed the thief's license plate.",
    "options": [
      "such",
      "none",
      "nor",
      "till"
    ],
    "answer": 1,
    "cn": "警官在街上詢問了十位目擊者，但沒有一個人注意到小偷的車牌。 【選項解析】(A) none 沒有一個  (B) such 如此的  (C) nor 亦不  (D) till 直到。none of them 表「他們當中沒有一人」。",
    "vocabIndex": 4
  },
  {
    "q": "A flock of wild geese flew gracefully ______ the autumn sky as the sunset painted the horizon in orange.",
    "options": [
      "against",
      "among",
      "till",
      "across"
    ],
    "answer": 3,
    "cn": "當夕陽將地平線染成橘色時，一群野雁優雅地橫越秋季的天空飛翔。 【選項解析】(A) against 反對  (B) among 在…之中  (C) across 橫越  (D) till 直到。flew across the sky 表「飛越天空」。",
    "vocabIndex": 5
  },
  {
    "q": "The heavy wooden ladder was leaning securely ______ the brick wall while the worker painted the upper window.",
    "options": [
      "among",
      "through",
      "against",
      "across"
    ],
    "answer": 2,
    "cn": "當工人粉刷上方窗戶時，沉重的木梯穩穩地倚靠在磚牆上。 【選項解析】(A) against 倚靠著  (B) through 穿過  (C) among 在…之中  (D) across 橫越。leaning against 表「倚靠在…上」。",
    "vocabIndex": 6
  },
  {
    "q": "The talented young violinist was chosen from ______ hundreds of eager competitors from across the country.",
    "options": [
      "among",
      "through",
      "against",
      "across"
    ],
    "answer": 0,
    "cn": "那位才華洋溢的年輕小提琴手是從來自全國的數百名熱切競爭者中挑選出來的。 【選項解析】(A) across 穿過  (B) through 穿過  (C) against 反對  (D) among 在…之中。chosen from among... 表「從…之中選出」。",
    "vocabIndex": 7
  },
  {
    "q": "Sunlight streamed brightly ______ the stained glass windows of the cathedral, filling the hall with colorful light.",
    "options": [
      "against",
      "among",
      "through",
      "across"
    ],
    "answer": 2,
    "cn": "陽光穿透大教堂的彩色玻璃窗明亮地灑落，使大廳充滿了繽紛的光彩。 【選項解析】(A) against 倚靠  (B) through 穿透  (C) among 在…之中  (D) across 橫越。streamed through 表「穿透灑入」。",
    "vocabIndex": 8
  },
  {
    "q": "We decided to postpone our beach barbecue party and wait ______ the torrential morning downpour finally ceased.",
    "options": [
      "such",
      "till",
      "nor",
      "none"
    ],
    "answer": 1,
    "cn": "我們決定延後海灘烤肉派對，直到早晨的傾盆大雨終於停止為止。 【選項解析】(A) till 直到  (B) such 如此的  (C) nor 亦不  (D) none 沒有一個。wait till 表「等到…為止」。",
    "vocabIndex": 9
  },
  {
    "q": "Because the factory machinery broke down, the production manager said shipments will ______ be delayed by two days.",
    "options": [
      "probably",
      "against",
      "across",
      "among"
    ],
    "answer": 0,
    "cn": "因為工廠機械故障，生產經理表示出貨大概會延遲兩天。 【選項解析】(A) across 穿過  (B) against 反對  (C) probably 大概  (D) among 在…之中。will probably be delayed 表「大概會延遲」。",
    "vocabIndex": 0
  },
  {
    "q": "She showed ______ extraordinary patience while explaining the difficult math formula that every student understood it.",
    "options": [
      "till",
      "nor",
      "none",
      "such"
    ],
    "answer": 3,
    "cn": "她在解釋困難的數學公式時展現了如此非凡的耐心，以致於每位學生都聽懂了。 【選項解析】(A) such 如此的  (B) nor 亦不  (C) none 全無  (D) till 直到。such + adj. + n. + that 表「如此…以致於」。",
    "vocabIndex": 1
  },
  {
    "q": "The museum is not open on Mondays, and ______ is the local public art gallery next door.",
    "options": [
      "neither",
      "across",
      "through",
      "among"
    ],
    "answer": 0,
    "cn": "這家博物館星期一不開放，隔壁的當地公立市立美術館也是如此。 【選項解析】(A) across 穿過  (B) neither 也不  (C) through 穿過  (D) among 在…之中。and neither is... 表「…也不開放」。",
    "vocabIndex": 2
  },
  {
    "q": "Mr. White has no interest in modern jazz music, ______ does he enjoy attending crowded outdoor pop concerts.",
    "options": [
      "such",
      "none",
      "nor",
      "across"
    ],
    "answer": 2,
    "cn": "懷特先生對現代爵士樂毫無興趣，他也不喜歡參加擁擠的戶外流行音樂會。 【選項解析】(A) such 如此的  (B) none 沒有一個  (C) nor 也不  (D) across 穿過。nor does he enjoy... 表否定對等「也不喜歡」。",
    "vocabIndex": 3
  },
  {
    "q": "Many applicants submitted resumes for the manager position, but ______ had the required five years of leadership experience.",
    "options": [
      "such",
      "till",
      "nor",
      "none"
    ],
    "answer": 3,
    "cn": "許多應徵者提交了經理職位的履歷，但沒有一人具備規定的五年領導經驗。 【選項解析】(A) such 如此的  (B) none 沒有一個  (C) nor 也不  (D) till 直到。none had required experience 表「無人具備資格」。",
    "vocabIndex": 4
  },
  {
    "q": "The marathon runners sprinted eagerly ______ the wide suspension bridge toward the bustling city center.",
    "options": [
      "against",
      "across",
      "among",
      "till"
    ],
    "answer": 1,
    "cn": "馬拉松跑者們奮力跑過寬闊的吊橋，朝著繁華的市中心前進。 【選項解析】(A) against 反對  (B) among 在…之中  (C) across 橫越  (D) till 直到。sprinted across the bridge 表「跑過橋樑」。",
    "vocabIndex": 5
  },
  {
    "q": "Citizens organized a peaceful protest on Sunday to speak out ______ the construction of a chemical waste facility.",
    "options": [
      "across",
      "through",
      "among",
      "against"
    ],
    "answer": 3,
    "cn": "市民們在星期日組織了和平抗議，發聲反對興建化學廢料處理設施。 【選項解析】(A) against 反對  (B) through 穿過  (C) among 在…之中  (D) across 橫越。speak out against 表「挺身反對」。",
    "vocabIndex": 6
  },
  {
    "q": "The lost hiker was delighted to spot a small campfire glowing ______ the dense pine trees in the valley.",
    "options": [
      "among",
      "through",
      "across",
      "against"
    ],
    "answer": 0,
    "cn": "迷路的登山客非常高興在山谷茂密的松樹叢中發現了一處營火微光。 【選項解析】(A) across 穿過  (B) through 穿過  (C) among 在…之中  (D) against 倚靠。glowing among the trees 表「在樹叢間閃耀」。",
    "vocabIndex": 7
  },
  {
    "q": "Water was leaking continuously ______ a narrow crack in the old pipe, causing dampness across the kitchen floor.",
    "options": [
      "against",
      "among",
      "through",
      "across"
    ],
    "answer": 2,
    "cn": "水不斷從老水管的一道狹窄裂縫中滲漏出來，導致廚房地板一片潮濕。 【選項解析】(A) against 倚靠  (B) through 穿過  (C) among 在…之中  (D) across 橫越。leaking through a crack 表「從裂縫穿透滲出」。",
    "vocabIndex": 8
  },
  {
    "q": "The hardworking store owner kept his grocery shop open ______ eleven o'clock every night to serve neighborhood residents.",
    "options": [
      "such",
      "till",
      "nor",
      "none"
    ],
    "answer": 1,
    "cn": "勤奮的店主每晚都把雜貨店開到十一點，以便服務社區居民。 【選項解析】(A) till 直到  (B) such 如此的  (C) nor 也不  (D) none 全無。open till eleven o'clock 表「營業直到十一點」。",
    "vocabIndex": 9
  },
  {
    "q": "Our flight will ______ land thirty minutes earlier than scheduled because strong tailwinds pushed the aircraft forward.",
    "options": [
      "probably",
      "among",
      "across",
      "against"
    ],
    "answer": 0,
    "cn": "我們的班機很可能會比預定時間提前三十分鐘降落，因為強烈順風推動了飛機前行。 【選項解析】(A) against 反對  (B) among 在…之中  (C) across 橫越  (D) probably 很可能。will probably land 表「很有可能會降落」。",
    "vocabIndex": 0
  },
  {
    "q": "Having ______ loyal and caring friends in times of personal crisis is truly one of life's greatest blessings.",
    "options": [
      "nor",
      "such",
      "none",
      "till"
    ],
    "answer": 1,
    "cn": "在個人面臨危機時擁有這樣忠誠體貼的朋友，確實是人生最大的恩賜之一。 【選項解析】(A) such 這樣的  (B) nor 也不  (C) none 沒有一個  (D) till 直到。such + adj. + n. 表「如此忠實的朋友」。",
    "vocabIndex": 1
  },
  {
    "q": "The restaurant did not accept credit cards, and ______ did the small bakery down the street.",
    "options": [
      "across",
      "through",
      "neither",
      "among"
    ],
    "answer": 2,
    "cn": "這家餐廳不接受信用卡，街角的那家小麵包店也是如此。 【選項解析】(A) across 穿過  (B) neither 也不  (C) through 穿過  (D) among 在…之中。and neither did the bakery 表「麵包店也不收」。",
    "vocabIndex": 2
  },
  {
    "q": "The lost tourist could speak no English, ______ could he understand the handwritten directions on the tourist map.",
    "options": [
      "such",
      "none",
      "across",
      "nor"
    ],
    "answer": 3,
    "cn": "迷路的觀光客不會說英語，他也看不懂觀光地圖上手寫的方向指引。 【選項解析】(A) such 如此的  (B) none 沒有一個  (C) nor 亦不  (D) across 橫越。nor could he understand 表「也無法理解」。",
    "vocabIndex": 3
  },
  {
    "q": "Several laptops were stolen from the office over the weekend, but ______ of the locked doors showed signs of damage.",
    "options": [
      "none",
      "such",
      "nor",
      "till"
    ],
    "answer": 0,
    "cn": "週末期間辦公室被偷了幾台筆記型電腦，但上鎖的門沒有一道出現破損跡象。 【選項解析】(A) none 沒有一個  (B) such 如此的  (C) nor 也不  (D) till 直到。none of the locked doors 表「上鎖的門沒有一道受損」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "probably": {
    "pos": "adv.",
    "en_def": "used to mean that something is very likely to happen or be true",
    "cn_def": "可能；大概",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "used to mean that something is very likely to happen or be true",
        "cn_def": "可能；大概"
      }
    ]
  },
  "such": {
    "pos": "adj. / pron.",
    "en_def": "of the type previously mentioned; to an extreme degree",
    "cn_def": "如此的；這樣的",
    "combined": [
      {
        "pos": "adj. / pron.",
        "en_def": "of the type previously mentioned; to an extreme degree",
        "cn_def": "如此的；這樣的"
      }
    ]
  },
  "neither": {
    "pos": "adv. / conj. / pron.",
    "en_def": "not either of two things or people",
    "cn_def": "兩者皆不",
    "combined": [
      {
        "pos": "adv. / conj. / pron.",
        "en_def": "not either of two things or people",
        "cn_def": "兩者皆不"
      }
    ]
  },
  "nor": {
    "pos": "conj.",
    "en_def": "used before the second of two negative possibilities",
    "cn_def": "也不；亦不",
    "combined": [
      {
        "pos": "conj.",
        "en_def": "used before the second of two negative possibilities",
        "cn_def": "也不；亦不"
      }
    ]
  },
  "none": {
    "pos": "pron.",
    "en_def": "not one of a group of people or things",
    "cn_def": "毫無；全無；沒有一個",
    "combined": [
      {
        "pos": "pron.",
        "en_def": "not one of a group of people or things",
        "cn_def": "毫無；全無；沒有一個"
      }
    ]
  },
  "across": {
    "pos": "prep. / adv.",
    "en_def": "from one side to the other of something",
    "cn_def": "穿過；橫越",
    "combined": [
      {
        "pos": "prep. / adv.",
        "en_def": "from one side to the other of something",
        "cn_def": "穿過；橫越"
      }
    ]
  },
  "against": {
    "pos": "prep.",
    "en_def": "opposing or disagreeing with; touching or hitting",
    "cn_def": "反對；倚靠；碰撞",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "opposing or disagreeing with; touching or hitting",
        "cn_def": "反對；倚靠；碰撞"
      }
    ]
  },
  "among": {
    "pos": "prep.",
    "en_def": "in the middle of or surrounded by other things or people",
    "cn_def": "在…之中；在…之間",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "in the middle of or surrounded by other things or people",
        "cn_def": "在…之中；在…之間"
      }
    ]
  },
  "through": {
    "pos": "prep. / adv.",
    "en_def": "from one end or side of something to the other",
    "cn_def": "穿過；通過；歷經",
    "combined": [
      {
        "pos": "prep. / adv.",
        "en_def": "from one end or side of something to the other",
        "cn_def": "穿過；通過；歷經"
      }
    ]
  },
  "till": {
    "pos": "prep. / conj.",
    "en_def": "up to the time of; until",
    "cn_def": "直到…為止",
    "combined": [
      {
        "pos": "prep. / conj.",
        "en_def": "up to the time of; until",
        "cn_def": "直到…為止"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
