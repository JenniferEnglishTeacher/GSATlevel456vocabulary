// Part 4 Quiz Data: responsibility – skinny
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 22-4 - responsibility – skinny",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "the state of having a duty to deal with something or of having control",
    "sentence": "As a team manager, you must take full {{BLANK}} for both the successes and failures of the project.",
    "cn": "作為團隊經理，你必須對專案的成功與失敗承擔全部責任。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責任的；該承擔責任的",
    "en_def": "having an obligation to do something; accountable for something",
    "sentence": "Parents are legally and morally {{BLANK}} for ensuring their young children attend school regularly.",
    "cn": "父母在法律上和道德上都有責任確保年幼的孩子定期上學。"
  },
  {
    "word": "Rumor",
    "pos": "n./v.",
    "cn_def": "謠言；傳聞",
    "en_def": "a currently circulating story or report of uncertain or unverified truth",
    "sentence": "{{BLANK}} has it that the multinational corporation is planning to acquire its major competitor next month.",
    "cn": "傳聞說這家跨國企業正計劃在下個月收購其主要競爭對手。"
  },
  {
    "word": "scout",
    "pos": "n./v.",
    "cn_def": "童子軍；球探；星探；偵查",
    "en_def": "a person sent out to gather information; to look for talent or locations",
    "sentence": "A veteran baseball {{BLANK}} attended the regional high school tournament to evaluate promising young pitchers.",
    "cn": "一位資深棒球球探參加了地區高中聯賽，以評估有前途的年輕投手。"
  },
  {
    "word": "scream",
    "pos": "v./n.",
    "cn_def": "尖叫；尖叫聲",
    "en_def": "to give a long, loud, piercing cry or sound expressing intense emotion",
    "sentence": "The terrified passengers began to {{BLANK}} their heads off when the roller coaster plunged down the steep drop.",
    "cn": "當雲霄飛車從陡峭的坡度俯衝而下時，驚恐的乘客開始聲嘶力竭地尖叫。"
  },
  {
    "word": "sensible",
    "pos": "adj.",
    "cn_def": "明智的；合情理的；實用的",
    "en_def": "chosen in accordance with wisdom or good sense; practical and reasonable",
    "sentence": "Investing money in secure government bonds during an economic downturn is widely considered a {{BLANK}} decision.",
    "cn": "在經濟低迷時期將資金投資於安全的政府公債，被廣泛認為是一項明智的決定。"
  },
  {
    "word": "shampoo",
    "pos": "n./v.",
    "cn_def": "洗髮精；洗頭；清洗(地毯)",
    "en_def": "a liquid preparation for washing the hair; to wash with shampoo",
    "sentence": "The dermatologist recommended a gentle anti-dandruff {{BLANK}} to soothe her dry and itchy scalp.",
    "cn": "皮膚科醫生推薦了一款溫和的去屑洗髮精，以舒緩她乾燥發癢的頭皮。"
  },
  {
    "word": "sip",
    "pos": "v./n.",
    "cn_def": "啜飲；一小口",
    "en_def": "to drink by taking small mouthfuls; a small mouthful of liquid",
    "sentence": "He paused for a thoughtful moment to take a small {{BLANK}} of hot black tea from his ceramic cup.",
    "cn": "他若有所思地停頓了一下，從陶瓷杯中啜飲了一小口熱紅茶。"
  },
  {
    "word": "skinny",
    "pos": "adj.",
    "cn_def": "極瘦的；皮包骨的；緊身的",
    "en_def": "unattractively thin; tight-fitting (of clothes)",
    "sentence": "Fashion trends in the early 2000s heavily popularized wearing tight {{BLANK}} jeans paired with leather boots.",
    "cn": "2000年代初期的時尚潮流極大推廣了穿著緊身窄管牛仔褲搭配皮靴的風潮。"
  }
];

const MCQS = [
  {
    "q": "A mature citizen must learn to accept full ______ for their civic actions and ethical choices.",
    "options": [
      "scout",
      "rumor",
      "shampoo",
      "responsibility"
    ],
    "answer": 3,
    "cn": "成熟的公民必須學會對自己的公民行為與道德選擇承擔全部責任。",
    "vocabIndex": 0
  },
  {
    "q": "The factory manager was held directly ______ for the toxic chemical leak into the municipal reservoir.",
    "options": [
      "responsible",
      "cheerful",
      "skinny",
      "sensible"
    ],
    "answer": 0,
    "cn": "工廠經理對有毒化學物質洩漏到市政水庫中負有直接責任。",
    "vocabIndex": 1
  },
  {
    "q": "______ has it that the famous tech entrepreneur is considering running for mayor next spring.",
    "options": [
      "Sip",
      "Responsibility",
      "Rumor",
      "Scout"
    ],
    "answer": 2,
    "cn": "傳聞說這位著名的科技企業家正在考慮明年春天競選市長。",
    "vocabIndex": 2
  },
  {
    "q": "A talent ______ from the European modeling agency spotted the young woman at the airport terminal.",
    "options": [
      "sip",
      "scout",
      "rumor",
      "shampoo"
    ],
    "answer": 1,
    "cn": "歐洲模特兒經紀公司的星探在機場航廈發現了這位年輕女子。",
    "vocabIndex": 3
  },
  {
    "q": "When the ghost unexpectedly jumped out in the haunted maze, the girl ______ in terror.",
    "options": [
      "shampooed",
      "scouted",
      "sipped",
      "screamed"
    ],
    "answer": 3,
    "cn": "當鬼魂在鬼屋迷宮中意外跳出來時，女孩恐懼地尖叫起來。",
    "vocabIndex": 4
  },
  {
    "q": "Putting aside a portion of your monthly paycheck for an emergency fund is a very ______ choice.",
    "options": [
      "sensible",
      "skinny",
      "responsible",
      "hasty"
    ],
    "answer": 0,
    "cn": "將每月薪水的一部分存作應急基金是非常明智的選擇。",
    "vocabIndex": 5
  },
  {
    "q": "The salon stylist rinsed the customer's hair before applying a nourishing organic ______.",
    "options": [
      "scout",
      "shampoo",
      "rumor",
      "sip"
    ],
    "answer": 1,
    "cn": "美髮師在塗抹滋養型有機洗髮精之前先沖洗了顧客的頭髮。",
    "vocabIndex": 6
  },
  {
    "q": "She picked up her porcelain cup and took a delicate ______ of the fragrant jasmine tea.",
    "options": [
      "rumor",
      "scout",
      "sip",
      "shampoo"
    ],
    "answer": 2,
    "cn": "她拿起瓷杯，優雅地啜飲了一小口芳香的茉莉花茶。",
    "vocabIndex": 7
  },
  {
    "q": "The stray puppy looked terribly ______ and malnourished after wandering the streets for weeks.",
    "options": [
      "sensible",
      "cheerful",
      "responsible",
      "skinny"
    ],
    "answer": 3,
    "cn": "這隻流浪小狗在街上流浪數週後，顯得非常瘦弱且營養不良。",
    "vocabIndex": 8
  },
  {
    "q": "It is not your personal ______ to fix every single problem that your coworkers create.",
    "options": [
      "responsibility",
      "rumor",
      "scout",
      "sip"
    ],
    "answer": 0,
    "cn": "解決同事製造的每一個問題並不是你個人的責任。",
    "vocabIndex": 0
  },
  {
    "q": "Who is ______ for organizing the logistics and guest list for the annual charity banquet?",
    "options": [
      "sensible",
      "skinny",
      "responsible",
      "darling"
    ],
    "answer": 2,
    "cn": "誰負責組織年度慈善晚宴的後勤和嘉賓名單？",
    "vocabIndex": 1
  },
  {
    "q": "You should not believe every piece of unverified office ______ you hear near the water cooler.",
    "options": [
      "sip",
      "rumor",
      "scout",
      "shampoo"
    ],
    "answer": 1,
    "cn": "你不應該相信在飲水機旁聽到的每條未經證實的辦公室傳言。",
    "vocabIndex": 2
  },
  {
    "q": "The basketball team sent their head coach to ______ collegiate games across the Midwest.",
    "options": [
      "scream",
      "shampoo",
      "sip",
      "scout"
    ],
    "answer": 3,
    "cn": "籃球隊派主教練前往中西部各大學聯賽物色球員。",
    "vocabIndex": 3
  },
  {
    "q": "The loud ______ echoing down the corridor prompted the security guard to investigate immediately.",
    "options": [
      "shampoo",
      "sip",
      "scream",
      "scout"
    ],
    "answer": 2,
    "cn": "在走廊中迴盪的響亮尖叫聲促使保安立即展開調查。",
    "vocabIndex": 4
  },
  {
    "q": "Wearing sturdy boots and carrying waterproof gear is the only ______ approach to mountain hiking.",
    "options": [
      "cheerful",
      "sensible",
      "skinny",
      "responsible"
    ],
    "answer": 1,
    "cn": "穿著堅固的靴子並攜帶防水裝備是登山健行唯一明智的做法。",
    "vocabIndex": 5
  },
  {
    "q": "After swimming in the heavily chlorinated pool, you should ______ your hair immediately.",
    "options": [
      "shampoo",
      "scout",
      "scream",
      "sip"
    ],
    "answer": 0,
    "cn": "在含氯量高的泳池游泳後，你應該立即洗頭。",
    "vocabIndex": 6
  },
  {
    "q": "He took a small ______ of the red wine to sample its bouquet before agreeing to the bottle.",
    "options": [
      "shampoo",
      "sip",
      "rumor",
      "scout"
    ],
    "answer": 1,
    "cn": "他在同意開瓶前啜飲了一小口紅酒以品鑑其香氣。",
    "vocabIndex": 7
  },
  {
    "q": "She bought a stylish pair of dark blue ______ jeans from the department store downtown.",
    "options": [
      "responsible",
      "hateful",
      "sensible",
      "skinny"
    ],
    "answer": 3,
    "cn": "她從市中心的百貨公司買了一條時尚的深藍色緊身牛仔褲。",
    "vocabIndex": 8
  },
  {
    "q": "Parents must teach their children to be socially ______ citizens from an early age.",
    "options": [
      "responsible",
      "skinny",
      "sensible",
      "darling"
    ],
    "answer": 0,
    "cn": "父母必須從小教育孩子成為有社會責任感的公民。",
    "vocabIndex": 1
  },
  {
    "q": "The actress refused to comment on the sensational ______ regarding her upcoming divorce.",
    "options": [
      "scouts",
      "sips",
      "rumors",
      "shampoos"
    ],
    "answer": 2,
    "cn": "這位女演員拒絕就關於她即將離婚的聳動謠言發表評論。",
    "vocabIndex": 2
  },
  {
    "q": "Our club leader is looking for a qualified ______ master to organize the outdoor camping retreat.",
    "options": [
      "scout",
      "rumor",
      "shampoo",
      "sip"
    ],
    "answer": 0,
    "cn": "我們俱樂部領隊正在尋找一位合格的童軍團長來組織戶外露營聚會。",
    "vocabIndex": 3
  },
  {
    "q": "The audience ______ with excitement when the rock legend walked out onto the concert stage.",
    "options": [
      "scouted",
      "shampooed",
      "screamed",
      "sipped"
    ],
    "answer": 2,
    "cn": "當搖滾傳奇走上演唱會舞台時，觀眾興奮地尖叫起來。",
    "vocabIndex": 4
  },
  {
    "q": "It is ______ to save at least ten percent of your monthly income for unforeseen emergencies.",
    "options": [
      "charming",
      "responsible",
      "skinny",
      "sensible"
    ],
    "answer": 3,
    "cn": "每月將至少百分之十的收入存起來以備不時之需是明智的。",
    "vocabIndex": 5
  },
  {
    "q": "This specialized baby ______ is formulated to be gentle on infants' delicate scalps and eyes.",
    "options": [
      "rumor",
      "shampoo",
      "sip",
      "scout"
    ],
    "answer": 1,
    "cn": "這款專用嬰兒洗髮精配方溫和，不會刺激嬰兒嬌嫩的頭皮與眼睛。",
    "vocabIndex": 6
  },
  {
    "q": "He was so nervous before giving the speech that he could only ______ water through trembling lips.",
    "options": [
      "shampoo",
      "scout",
      "sip",
      "scream"
    ],
    "answer": 2,
    "cn": "在演講前他非常緊張，只能透過顫抖的嘴唇小口啜飲著水。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "responsibility": {
    "pos": "n.",
    "en_def": "the state of having a duty to deal with something or of having control",
    "cn_def": "責任；職責",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of having a duty to deal with something or of having control",
        "cn_def": "責任；職責"
      }
    ]
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having an obligation to do something; accountable for something",
    "cn_def": "負責任的；該承擔責任的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having an obligation to do something; accountable for something",
        "cn_def": "負責任的；該承擔責任的"
      }
    ]
  },
  "rumor": {
    "pos": "n./v.",
    "en_def": "a currently circulating story or report of uncertain or unverified truth",
    "cn_def": "謠言；傳聞",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a currently circulating story or report of uncertain or unverified truth",
        "cn_def": "謠言；傳聞"
      }
    ]
  },
  "scout": {
    "pos": "n./v.",
    "en_def": "a person sent out to gather information; to look for talent or locations",
    "cn_def": "童子軍；球探；星探；偵查",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a person sent out to gather information; to look for talent or locations",
        "cn_def": "童子軍；球探；星探；偵查"
      }
    ]
  },
  "scream": {
    "pos": "v./n.",
    "en_def": "to give a long, loud, piercing cry or sound expressing intense emotion",
    "cn_def": "尖叫；尖叫聲",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to give a long, loud, piercing cry or sound expressing intense emotion",
        "cn_def": "尖叫；尖叫聲"
      }
    ]
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "chosen in accordance with wisdom or good sense; practical and reasonable",
    "cn_def": "明智的；合情理的；實用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "chosen in accordance with wisdom or good sense; practical and reasonable",
        "cn_def": "明智的；合情理的；實用的"
      }
    ]
  },
  "shampoo": {
    "pos": "n./v.",
    "en_def": "a liquid preparation for washing the hair; to wash with shampoo",
    "cn_def": "洗髮精；洗頭；清洗(地毯)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a liquid preparation for washing the hair; to wash with shampoo",
        "cn_def": "洗髮精；洗頭；清洗(地毯)"
      }
    ]
  },
  "sip": {
    "pos": "v./n.",
    "en_def": "to drink by taking small mouthfuls; a small mouthful of liquid",
    "cn_def": "啜飲；一小口",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to drink by taking small mouthfuls; a small mouthful of liquid",
        "cn_def": "啜飲；一小口"
      }
    ]
  },
  "skinny": {
    "pos": "adj.",
    "en_def": "unattractively thin; tight-fitting (of clothes)",
    "cn_def": "極瘦的；皮包骨的；緊身的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unattractively thin; tight-fitting (of clothes)",
        "cn_def": "極瘦的；皮包骨的；緊身的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
