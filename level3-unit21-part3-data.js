// Part 3 Quiz Data: litter – portrait
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 21-3 - litter – portrait",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "litter",
    "pos": "n./v.",
    "cn_def": "垃圾；廢棄物 (n.)；亂丟垃圾；散落 (v.)",
    "en_def": "trash left lying in an open place; to scatter garbage untidily",
    "sentence": "The public beach was heavily covered in {{BLANK}} because careless tourists failed to clean up.",
    "cn": "這座公共海灘滿地都是垃圾，因為粗心的遊客離開前沒有清理乾淨。"
  },
  {
    "word": "mess",
    "pos": "n./v.",
    "cn_def": "凌亂；混亂；困境 (n.)；弄亂；搞砸 (v.)",
    "en_def": "a dirty or untidy state; to make something untidy or disorganized",
    "sentence": "David took an entire afternoon to clean his apartment because the living room was in an awful {{BLANK}}.",
    "cn": "大衛花了整整一個下午打掃公寓，因為客廳實在是凌亂不堪／一團糟。"
  },
  {
    "word": "mosquito",
    "pos": "n.",
    "cn_def": "蚊子 (複數為 mosquitoes / mosquitos)",
    "en_def": "a small flying insect whose female bites humans and animals for blood",
    "sentence": "An itchy {{BLANK}} bite on my left ankle swelled up and bothered me throughout the humid evening.",
    "cn": "左腳踝上被蚊子叮咬的發癢腫塊腫了起來，整晚潮濕悶熱中困擾著我。"
  },
  {
    "word": "muscles",
    "pos": "n.",
    "cn_def": "肌肉；力量",
    "en_def": "a band of fibrous tissue that produces motion in animal bodies",
    "sentence": "My leg {{BLANK}} felt extremely sore after running uphill for an hour without proper stretching.",
    "cn": "在沒有做適當拉筋的情況下往上坡跑了一小時，我的腿部肌肉感到無比痠痛。"
  },
  {
    "word": "owes",
    "pos": "v.",
    "cn_def": "欠 (錢、情)；歸功於",
    "en_def": "to have an obligation to pay money or show gratitude to someone",
    "sentence": "Nathan has been avoiding me at work because he still {{BLANK}} me fifty dollars from last week.",
    "cn": "內森在公司一直躲著我，因為他上週跟我借的五十塊錢到現在還欠著沒還。"
  },
  {
    "word": "peas",
    "pos": "n.",
    "cn_def": "豌豆",
    "en_def": "a small, round green seed eaten as a vegetable",
    "sentence": "For dinner at the steakhouse, she ordered a grilled ribeye steak with a savory side of steamed {{BLANK}}.",
    "cn": "在牛排館享用晚餐時，她點了一份炭烤肋眼牛排搭配美味的清蒸豌豆佐菜。"
  },
  {
    "word": "pollute",
    "pos": "v.",
    "cn_def": "污染；弄髒",
    "en_def": "to contaminate the environment with harmful or poisonous substances",
    "sentence": "Smoky exhaust fumes from millions of motor vehicles continue to {{BLANK}} urban air quality.",
    "cn": "數百萬輛機動車排放的濃煙廢氣，持續惡化並污染城市的空氣品質。"
  },
  {
    "word": "portrait",
    "pos": "n.",
    "cn_def": "肖像；人像畫；生動描繪",
    "en_def": "a painting, drawing, or photograph of a person, especially the face",
    "sentence": "The historic museum displays a magnificent oil {{BLANK}} of the royal queen painted in the seventeenth century.",
    "cn": "這間歷史博物館陳列了一幅十七世紀繪製的皇家女王壯麗油畫肖像。"
  }
];

const MCQS = [
  {
    "q": "Volunteers spent their Saturday morning clearing plastic bottles and discarded ______ from the city park.",
    "options": [
      "pea",
      "muscle",
      "litter",
      "portrait"
    ],
    "answer": 2,
    "cn": "志工們在週六上午清理市區公園裡的塑膠瓶和隨意丟棄的垃圾。",
    "vocabIndex": 0
  },
  {
    "q": "Her room was in an unbelievable ______, with clothes and open books strewn all over the carpet.",
    "options": [
      "mosquito",
      "mess",
      "pea",
      "portrait"
    ],
    "answer": 1,
    "cn": "她的房間亂得難以置信，衣服和翻開的書本散落滿地。",
    "vocabIndex": 1
  },
  {
    "q": "Applying natural eucalyptus oil to your skin helps keep bothersome ______es from biting during hikes.",
    "options": [
      "pea",
      "muscle",
      "portrait",
      "mosquito"
    ],
    "answer": 3,
    "cn": "在皮膚上塗抹天然尤加利精油有助於防止健行時被討厭的蚊子叮咬。",
    "vocabIndex": 2
  },
  {
    "q": "Weightlifting exercises help athletes build lean ______ and increase their metabolic rate.",
    "options": [
      "muscle",
      "mess",
      "litter",
      "pea"
    ],
    "answer": 0,
    "cn": "舉重訓練有助於運動員鍛鍊精實的肌肉並提高新陳代謝率。",
    "vocabIndex": 3
  },
  {
    "q": "I still ______ my coworker ten dollars for the sandwiches he bought me during yesterday's meeting.",
    "options": [
      "pollute",
      "mess",
      "litter",
      "owe"
    ],
    "answer": 3,
    "cn": "我還欠同事十塊錢，那是他昨天會議期間幫我買三明治的錢。",
    "vocabIndex": 4
  },
  {
    "q": "The chef served a delicate portion of pan-seared salmon garnished with sweet tender green ______s.",
    "options": [
      "mess",
      "litter",
      "pea",
      "portrait"
    ],
    "answer": 2,
    "cn": "主廚端出了一份精緻的香煎鮭魚，佐以香甜鮮嫩的青豌豆為配菜。",
    "vocabIndex": 5
  },
  {
    "q": "Chemical plants must not ______ local water reservoirs with untreated industrial emissions.",
    "options": [
      "pollute",
      "litter",
      "owe",
      "mess"
    ],
    "answer": 0,
    "cn": "化工廠絕不能用未經處理的工業排放物污染當地的蓄水庫。",
    "vocabIndex": 6
  },
  {
    "q": "The gallery hung a stunning oil ______ of the famous diplomat right inside the grand entrance.",
    "options": [
      "pea",
      "portrait",
      "litter",
      "mosquito"
    ],
    "answer": 1,
    "cn": "畫廊在大門入口處懸掛了一幅那位著名外交官的精美油畫肖像。",
    "vocabIndex": 7
  },
  {
    "q": "Anyone caught dropping ______ on subway platforms will be subjected to a hefty municipal fine.",
    "options": [
      "litter",
      "muscle",
      "portrait",
      "pea"
    ],
    "answer": 0,
    "cn": "任何在捷運月台隨地亂丟垃圾的人都將面臨高額市政罰款。",
    "vocabIndex": 0
  },
  {
    "q": "Heavy rain and mud completely ______ed up the newly waxed floors of the community center.",
    "options": [
      "owed",
      "messed",
      "polluted",
      "littered"
    ],
    "answer": 1,
    "cn": "大雨和泥濘徹底弄髒了活動中心剛打好蠟的地板。",
    "vocabIndex": 1
  },
  {
    "q": "Standing water in old flowerpots provides an ideal breeding ground for dangerous ______es.",
    "options": [
      "pea",
      "portrait",
      "mosquito",
      "litter"
    ],
    "answer": 2,
    "cn": "舊花盆中的積水為危險的蚊子提供了理想的繁殖場所。",
    "vocabIndex": 2
  },
  {
    "q": "Stretching properly before running helps prevent severe ______ cramps and tendon injuries.",
    "options": [
      "litter",
      "portrait",
      "pea",
      "muscle"
    ],
    "answer": 3,
    "cn": "跑步前進行適當的伸展有助於預防嚴重的肌肉抽筋和肌腱受傷。",
    "vocabIndex": 3
  },
  {
    "q": "We truly ______ a debt of gratitude to all emergency healthcare workers who risked their lives.",
    "options": [
      "pollute",
      "owe",
      "mess",
      "litter"
    ],
    "answer": 1,
    "cn": "我們由衷感激所有冒著生命危險奮戰的急診醫護人員。",
    "vocabIndex": 4
  },
  {
    "q": "The classic bedtime fairy tale tells of a young princess who could feel a tiny ______ under twenty mattresses.",
    "options": [
      "pea",
      "portrait",
      "muscle",
      "mess"
    ],
    "answer": 0,
    "cn": "這則經典的睡前童話講述了一位年輕公主隔著二十層床墊仍能感覺到一顆小豌豆的故事。",
    "vocabIndex": 5
  },
  {
    "q": "Agricultural pesticide runoff can severely ______ groundwater supplies needed for drinking.",
    "options": [
      "owe",
      "litter",
      "mess",
      "pollute"
    ],
    "answer": 3,
    "cn": "農業農藥徑流會嚴重污染飲用水所需的地下水資源。",
    "vocabIndex": 6
  },
  {
    "q": "The artist spent three months creating a lifelike self-______ using watercolors and charcoal.",
    "options": [
      "pea",
      "litter",
      "portrait",
      "muscle"
    ],
    "answer": 2,
    "cn": "這位藝術家花了三個月的時間，用透明水彩和木炭創作了一幅栩栩如生的自畫像。",
    "vocabIndex": 7
  },
  {
    "q": "The campsite was ______ed with plastic wrappers and tin cans after the rowdy party dispersed.",
    "options": [
      "owed",
      "littered",
      "polluted",
      "messed"
    ],
    "answer": 1,
    "cn": "熱鬧的聚會散場後，露營地上散落著滿地的塑膠包裝紙和鐵罐。",
    "vocabIndex": 0
  },
  {
    "q": "If you don't follow the instructions carefully, you risk making a total ______ of the project.",
    "options": [
      "mess",
      "portrait",
      "pea",
      "muscle"
    ],
    "answer": 0,
    "cn": "如果你不仔細遵照指示，你可能會把整個專案搞得一團糟。",
    "vocabIndex": 1
  },
  {
    "q": "Using window screens effectively prevents itchy ______ bites inside bedrooms at night.",
    "options": [
      "litter",
      "muscle",
      "portrait",
      "mosquito"
    ],
    "answer": 3,
    "cn": "裝設紗窗能有效防止夜間臥室內被發癢的蚊子叮咬。",
    "vocabIndex": 2
  },
  {
    "q": "Regular resistance workouts help maintain healthy ______ tone and prevent bone density loss.",
    "options": [
      "litter",
      "pea",
      "muscle",
      "portrait"
    ],
    "answer": 2,
    "cn": "規律的阻力運動有助於維持健康的肌肉張力，並預防骨質流失。",
    "vocabIndex": 3
  },
  {
    "q": "She gratefully told her mentor, 'I ______ everything I have achieved in this industry to your guidance.'",
    "options": [
      "pollute",
      "owe",
      "litter",
      "mess"
    ],
    "answer": 1,
    "cn": "她感激地對導師說：「我在這個行業所取得的一切成就，全歸功於您的指導。」",
    "vocabIndex": 4
  },
  {
    "q": "A bowl of warm homemade split-______ soup served with crusty bread is pure comfort food.",
    "options": [
      "pea",
      "portrait",
      "muscle",
      "litter"
    ],
    "answer": 0,
    "cn": "一碗搭配酥脆麵包的溫熱自製豌豆濃湯，是道地的療癒美食。",
    "vocabIndex": 5
  },
  {
    "q": "Discarded plastic bags and non-biodegradable trash continuously ______ ocean habitats and harm wildlife.",
    "options": [
      "litter",
      "owe",
      "mess",
      "pollute"
    ],
    "answer": 3,
    "cn": "廢棄塑膠袋和無法被生物分解的垃圾不斷污染海洋棲息地並危害野生動物。",
    "vocabIndex": 6
  },
  {
    "q": "The distinguished professor had his official retirement ______ commissioned by a renowned artist.",
    "options": [
      "muscle",
      "pea",
      "portrait",
      "litter"
    ],
    "answer": 2,
    "cn": "這位傑出的教授委託一位著名藝術家為他繪製了正式的退休肖像畫。",
    "vocabIndex": 7
  },
  {
    "q": "The children promised their mother they wouldn't ______ up the living room while building a blanket fort.",
    "options": [
      "mess",
      "owe",
      "pollute",
      "litter"
    ],
    "answer": 0,
    "cn": "孩子們向媽媽保證，在用毯子搭城堡時不會把客廳搞得一團糟。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "litter": {
    "pos": "n./v.",
    "en_def": "trash left lying in an open place; to scatter garbage untidily",
    "cn_def": "垃圾；廢棄物 (n.)；亂丟垃圾；散落 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "trash left lying in an open place; to scatter garbage untidily",
        "cn_def": "垃圾；廢棄物 (n.)；亂丟垃圾；散落 (v.)"
      }
    ]
  },
  "mess": {
    "pos": "n./v.",
    "en_def": "a dirty or untidy state; to make something untidy or disorganized",
    "cn_def": "凌亂；混亂；困境 (n.)；弄亂；搞砸 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a dirty or untidy state; to make something untidy or disorganized",
        "cn_def": "凌亂；混亂；困境 (n.)；弄亂；搞砸 (v.)"
      }
    ]
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect whose female bites humans and animals for blood",
    "cn_def": "蚊子 (複數為 mosquitoes / mosquitos)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small flying insect whose female bites humans and animals for blood",
        "cn_def": "蚊子 (複數為 mosquitoes / mosquitos)"
      }
    ]
  },
  "muscle": {
    "pos": "n.",
    "en_def": "a band of fibrous tissue that produces motion in animal bodies",
    "cn_def": "肌肉；力量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a band of fibrous tissue that produces motion in animal bodies",
        "cn_def": "肌肉；力量"
      }
    ]
  },
  "muscles": {
    "pos": "n.",
    "en_def": "a band of fibrous tissue that produces motion in animal bodies",
    "cn_def": "肌肉；力量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a band of fibrous tissue that produces motion in animal bodies",
        "cn_def": "肌肉；力量"
      }
    ]
  },
  "owe": {
    "pos": "v.",
    "en_def": "to have an obligation to pay money or show gratitude to someone",
    "cn_def": "欠 (錢、情)；歸功於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have an obligation to pay money or show gratitude to someone",
        "cn_def": "欠 (錢、情)；歸功於"
      }
    ]
  },
  "owes": {
    "pos": "v.",
    "en_def": "to have an obligation to pay money or show gratitude to someone",
    "cn_def": "欠 (錢、情)；歸功於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have an obligation to pay money or show gratitude to someone",
        "cn_def": "欠 (錢、情)；歸功於"
      }
    ]
  },
  "pea": {
    "pos": "n.",
    "en_def": "a small, round green seed eaten as a vegetable",
    "cn_def": "豌豆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, round green seed eaten as a vegetable",
        "cn_def": "豌豆"
      }
    ]
  },
  "peas": {
    "pos": "n.",
    "en_def": "a small, round green seed eaten as a vegetable",
    "cn_def": "豌豆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, round green seed eaten as a vegetable",
        "cn_def": "豌豆"
      }
    ]
  },
  "pollute": {
    "pos": "v.",
    "en_def": "to contaminate the environment with harmful or poisonous substances",
    "cn_def": "污染；弄髒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to contaminate the environment with harmful or poisonous substances",
        "cn_def": "污染；弄髒"
      }
    ]
  },
  "portrait": {
    "pos": "n.",
    "en_def": "a painting, drawing, or photograph of a person, especially the face",
    "cn_def": "肖像；人像畫；生動描繪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a painting, drawing, or photograph of a person, especially the face",
        "cn_def": "肖像；人像畫；生動描繪"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
