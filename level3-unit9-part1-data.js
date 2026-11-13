// Part 1 Quiz Data: adventure – deposit
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 9-1 - adventure – deposit",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adventure",
    "pos": "n.",
    "cn_def": "冒險；奇遇（可數/不可數）",
    "en_def": "an exciting, unusual, or daring experience",
    "sentence": "The brave young explorers packed their backpacks to go on an {{BLANK}} through the dense tropical jungle.",
    "cn": "勇敢的年輕探險家們收拾背包，去茂密的熱帶叢林進行一場冒險。"
  },
  {
    "word": "adventurous",
    "pos": "adj.",
    "cn_def": "愛冒險的；充滿刺激的",
    "en_def": "willing to take risks or try out new experiences",
    "sentence": "Henry has always had an {{BLANK}} spirit, so he loves climbing steep mountains and scuba diving in deep oceans.",
    "cn": "亨利一直擁有一種愛冒險的精神，所以他喜歡攀登陡峭的高山並在深海中潛水。"
  },
  {
    "word": "alley",
    "pos": "n.",
    "cn_def": "巷道；小巷；小徑（可數）",
    "en_def": "a narrow passageway between or behind buildings",
    "sentence": "The police warned pedestrians not to walk alone through the dark {{BLANK}} late at night.",
    "cn": "警方警告行人深夜不要獨自走過黑暗的小巷。"
  },
  {
    "word": "right up your alley",
    "pos": "phr.",
    "cn_def": "正合某人的胃口；正是某人的拿手絕活",
    "en_def": "ideally suited to one's interests or abilities",
    "sentence": "Since you love baking sweet desserts and designing pastries, this new pastry chef job is {{BLANK}}.",
    "cn": "既然你熱愛烘焙甜點與設計糕點，這份新西點師傅工作正合你的胃口。"
  },
  {
    "word": "appeal",
    "pos": "v.",
    "cn_def": "呼籲；懇求；吸引（動詞）",
    "en_def": "to make a serious or urgent request; to be attractive or interesting",
    "sentence": "The mayor appeared on television to {{BLANK}} to all citizens for donations after the terrible earthquake hit the city.",
    "cn": "在可怕的地震襲擊這座城市後，市長出現在電視上向所有市民呼籲捐款。"
  },
  {
    "word": "appeal",
    "pos": "n.",
    "cn_def": "呼籲；請求；吸引力；上訴（可數/不可數）",
    "en_def": "an urgent request for help; the quality of being attractive",
    "sentence": "The animal shelter made an urgent public {{BLANK}} for blankets and dog food before the freezing winter started.",
    "cn": "在嚴寒的冬季開始之前，動物收容所向公眾發出了需要毛毯和狗糧的緊急呼籲。"
  },
  {
    "word": "appealing",
    "pos": "adj.",
    "cn_def": "有吸引力的；動人的",
    "en_def": "attractive or interesting",
    "sentence": "Working from home two days every week sounds like a very {{BLANK}} option for modern office employees.",
    "cn": "每週在家工作兩天對現代辦公室員工來說聽起來是個非常吸引人的選擇。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助；幫助（動詞）",
    "en_def": "to help someone, typically by doing a share of the work",
    "sentence": "The friendly nurse stepped forward quickly to {{BLANK}} the elderly patient with walking down the long corridor.",
    "cn": "那位友善的護理師迅速上前，協助年長的病患走過長長的走廊。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助；援助（不可數）",
    "en_def": "the provision of money, resources, or information to help someone",
    "sentence": "Poor college students from rural villages may apply for government financial {{BLANK}} to pay their university tuition fees.",
    "cn": "來自農村的貧困大學生可以申請政府的財政援助來支付大學學費。"
  },
  {
    "word": "assistant",
    "pos": "n.",
    "cn_def": "助理；助手（可數）",
    "en_def": "a person who helps someone in their work",
    "sentence": "The busy company director asked his personal {{BLANK}} to schedule an urgent meeting with overseas investors tomorrow.",
    "cn": "繁忙的公司董事請他的個人特助安排明天與海外投資者的緊急會議。"
  },
  {
    "word": "breast",
    "pos": "n.",
    "cn_def": "乳房；胸部；雞胸肉（可數）",
    "en_def": "the chest or pectoral region; poultry breast meat",
    "sentence": "The detective reached inside his suit coat's {{BLANK}} pocket to take out his official police identification badge.",
    "cn": "偵探伸手探入西裝外套的胸前口袋，拿出他的正式警察證件徽章。"
  },
  {
    "word": "make a clean breast",
    "pos": "v.phr.",
    "cn_def": "全盤供認；全盤坦白",
    "en_def": "to confess fully about something one has done wrong",
    "sentence": "After hiding the broken vase for two days, Tommy decided to {{BLANK}} of his mistake to his mother.",
    "cn": "在把打破的花瓶藏了兩天之後，湯米決定向母親全盤坦白自己的過錯。"
  },
  {
    "word": "buffalo",
    "pos": "n.",
    "cn_def": "水牛；美洲野牛（可數，單複數同形或 buffaloes）",
    "en_def": "a heavily built wild ox with horns",
    "sentence": "While driving across the vast national park in Wyoming, tourists admired a massive herd of wild {{BLANK}} grazing peacefully.",
    "cn": "開車穿過懷俄明州遼闊的國家公園時，遊客們讚嘆一群悠閒吃草的野生美洲野牛。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐；歐式自助餐（可數，/bəˈfeɪ/ 或 /ˈbʊfeɪ/）",
    "en_def": "a meal consisting of several dishes from which guests serve themselves",
    "sentence": "The luxury resort hotel offers a lavish morning breakfast {{BLANK}} with fresh bakery items, eggs, and tropical fruits.",
    "cn": "這家豪華度假飯店提供豐盛的早晨自助餐，供應新鮮烘焙點心、雞蛋和熱帶水果。"
  },
  {
    "word": "bullet",
    "pos": "n.",
    "cn_def": "子彈；項目符號（可數）",
    "en_def": "a metal projectile for firing from a rifle or handgun",
    "sentence": "Traveling between Tokyo and Osaka on the Japanese {{BLANK}} train takes only about two and a half hours.",
    "cn": "搭乘日本子彈列車在東京和大阪之間往返只需要大約兩個半小時。"
  },
  {
    "word": "bite the bullet",
    "pos": "v.phr.",
    "cn_def": "咬緊牙關勇敢面對；硬著頭皮做",
    "en_def": "to face a difficult situation with courage and fortitude",
    "sentence": "Although going to the dentist causes him great fear, Gary must {{BLANK}} and have his rotten tooth pulled out.",
    "cn": "雖然看牙醫讓他感到非常害怕，蓋瑞必須咬緊牙關硬著頭皮去，把爛掉的牙齒拔掉。"
  },
  {
    "word": "cocktail",
    "pos": "n.",
    "cn_def": "雞尾酒；調酒；混合物（可數）",
    "en_def": "an alcoholic drink consisting of a spirit mixed with other ingredients",
    "sentence": "The bride and groom invited all their wedding guests to enjoy a sunset {{BLANK}} party beside the blue swimming pool.",
    "cn": "新郎新娘邀請所有婚禮賓客在藍色泳池旁享受日落雞尾酒派對。"
  },
  {
    "word": "comma",
    "pos": "n.",
    "cn_def": "逗號（可數）",
    "en_def": "a punctuation mark (,) indicating a pause between parts of a sentence",
    "sentence": "The English teacher gently reminded students to insert a {{BLANK}} before the coordinating conjunction when joining two complete sentences.",
    "cn": "英文老師親切地提醒學生，在連接兩個完整句子時，要在對等連接詞前面加上一個逗號。"
  },
  {
    "word": "deposit",
    "pos": "v.",
    "cn_def": "存（錢）；放置；沈澱（動詞）",
    "en_def": "to put or keep money in a bank account; to place something down carefully",
    "sentence": "Every month right after receiving his salary, Kevin visits the neighborhood ATM to {{BLANK}} some savings in his bank account.",
    "cn": "每個月領到薪水後，凱文都會造訪社區ATM將部分積蓄存入他的銀行帳戶。"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "cn_def": "存款；保證金；押金；沉積物（可數）",
    "en_def": "a sum of money placed in a bank; a sum paid as a guarantee or pledge",
    "sentence": "Before moving into the newly renovated apartment downtown, the tenant was required to pay two months' rent as a security {{BLANK}}.",
    "cn": "在搬進市中心這間新裝潢的公寓之前，房客被要求支付兩個月的租金作為安全押金。"
  }
];

const MCQS = [
  {
    "q": "The young hiker loved climbing high rocks and sleeping in the wild because of his sense of ______.",
    "options": [
      "alley",
      "comma",
      "adventure",
      "buffalo"
    ],
    "answer": 2,
    "cn": "這位年輕健行者因為熱愛冒險，喜歡攀爬高岩並睡在野外。",
    "vocabIndex": 0
  },
  {
    "q": "The little cat ran into a narrow, dark ______ between two tall brick houses.",
    "options": [
      "cocktail",
      "bullet",
      "deposit",
      "alley"
    ],
    "answer": 3,
    "cn": "小貓跑進了兩棟高大紅磚房之間一條狹窄黑暗的小巷中。",
    "vocabIndex": 2
  },
  {
    "q": "The city mayor made an urgent public ______ for drinking water after the storm hit.",
    "options": [
      "buffalo",
      "appeal",
      "comma",
      "assistant"
    ],
    "answer": 1,
    "cn": "暴風雨襲擊後，市長公開發出急需飲用水的呼籲。",
    "vocabIndex": 4
  },
  {
    "q": "The busy doctor asked her friendly ______ to call the next patient into the room.",
    "options": [
      "assistant",
      "alley",
      "deposit",
      "bullet"
    ],
    "answer": 0,
    "cn": "繁忙的醫生請她親切的助理／助手叫下一位病人進診間。",
    "vocabIndex": 9
  },
  {
    "q": "My father ordered a healthy grilled chicken ______ with green salad for dinner.",
    "options": [
      "adventure",
      "comma",
      "buffalo",
      "breast"
    ],
    "answer": 3,
    "cn": "我父親晚餐點了一份健康的烤雞胸肉配生菜沙拉。",
    "vocabIndex": 10
  },
  {
    "q": "A large grey water ______ was pulling the farmer's wooden cart through the mud.",
    "options": [
      "cocktail",
      "buffalo",
      "alley",
      "deposit"
    ],
    "answer": 1,
    "cn": "一隻巨大的灰色水牛正拉著農夫的木車穿過泥地。",
    "vocabIndex": 12
  },
  {
    "q": "The birthday party guests ate lots of cakes and noodles at the hotel's dinner ______.",
    "options": [
      "comma",
      "bullet",
      "buffet",
      "assistant"
    ],
    "answer": 2,
    "cn": "生日派對的客人們在飯店的晚餐歐式自助餐上吃了許多蛋糕和麵條。",
    "vocabIndex": 13
  },
  {
    "q": "The police officer found a small metal ______ on the ground near the broken window.",
    "options": [
      "bullet",
      "buffalo",
      "deposit",
      "alley"
    ],
    "answer": 0,
    "cn": "警察在破掉的窗戶附近的地面上發現了一顆小金屬子彈。",
    "vocabIndex": 14
  },
  {
    "q": "Mom drank a glass of sweet fruit ______ with ice on the warm beach.",
    "options": [
      "assistant",
      "comma",
      "cocktail",
      "buffalo"
    ],
    "answer": 2,
    "cn": "媽媽在溫暖的海灘上喝了一杯加冰的甜水果調酒／雞尾酒。",
    "vocabIndex": 16
  },
  {
    "q": "Remember to write a small mark called a ______ between items in a list.",
    "options": [
      "bullet",
      "breast",
      "deposit",
      "comma"
    ],
    "answer": 3,
    "cn": "記住在清單中的項目之間寫下一個名為逗號的小符號。",
    "vocabIndex": 17
  },
  {
    "q": "Before renting the house, you must pay two thousand dollars as a security ______.",
    "options": [
      "deposit",
      "buffalo",
      "alley",
      "assistant"
    ],
    "answer": 0,
    "cn": "在租房子之前，你必須支付兩千美元作為保證金押金。",
    "vocabIndex": 18
  },
  {
    "q": "The old woman needed government financial ______ to pay for her costly medicine.",
    "options": [
      "bullet",
      "assistance",
      "comma",
      "cocktail"
    ],
    "answer": 1,
    "cn": "那位老婦人需要政府的經濟援助／協助來支付她昂貴的藥費。",
    "vocabIndex": 8
  },
  {
    "q": "Brightly colored toy stores always ______ strongly to young children.",
    "options": [
      "bullet",
      "deposit",
      "assist",
      "appeal"
    ],
    "answer": 3,
    "cn": "色彩鮮豔的玩具店總是對年幼的孩子產生強烈的吸引力。",
    "vocabIndex": 4
  },
  {
    "q": "Could you please ______ me with carrying these heavy book boxes upstairs?",
    "options": [
      "deposit",
      "assist",
      "appeal",
      "buffalo"
    ],
    "answer": 1,
    "cn": "你可以協助我把這些沉重的書箱搬上樓嗎？",
    "vocabIndex": 7
  },
  {
    "q": "Grandpa goes to the post office bank every Friday to ______ his weekly pension money.",
    "options": [
      "deposit",
      "assist",
      "appeal",
      "alley"
    ],
    "answer": 0,
    "cn": "爺爺每週五都去郵局銀行存入他的每週退休金。",
    "vocabIndex": 18
  },
  {
    "q": "The injured dog ______ on the kind vet to cure its wounded leg.",
    "options": [
      "assisted",
      "deposited",
      "appealed",
      "adventured"
    ],
    "answer": 2,
    "cn": "受傷的狗向仁慈的獸醫懇求治好牠受傷的腿。",
    "vocabIndex": 6
  },
  {
    "q": "Lisa was happy to ______ her little brother in finishing his science project.",
    "options": [
      "appeal",
      "assist",
      "deposit",
      "bullet"
    ],
    "answer": 1,
    "cn": "麗莎很高興能協助她的小弟弟完成他的科學專案。",
    "vocabIndex": 7
  },
  {
    "q": "The hotel clerk said you can ______ your luggage in the safe room until check-in time.",
    "options": [
      "deposit",
      "appeal",
      "assist",
      "comma"
    ],
    "answer": 0,
    "cn": "飯店接待人員說你可以把行李寄放在安全室直到入住時間。",
    "vocabIndex": 18
  },
  {
    "q": "My cousin is very ______ and loves going camping in deep dark forests.",
    "options": [
      "appealing",
      "assisted",
      "adventurous",
      "bulleted"
    ],
    "answer": 2,
    "cn": "我的表弟非常愛冒險，熱愛在深邃黑暗的森林裡露營。",
    "vocabIndex": 1
  },
  {
    "q": "Having two days off every week sounds like a very ______ job offer to me.",
    "options": [
      "adventurous",
      "assisted",
      "bulleted",
      "appealing"
    ],
    "answer": 3,
    "cn": "每週休兩天對我來說聽起來是個非常吸引人的工作機會。",
    "vocabIndex": 6
  },
  {
    "q": "The brave travelers took an ______ journey across the desert on camels.",
    "options": [
      "adventurous",
      "appealing",
      "assisted",
      "bulleted"
    ],
    "answer": 0,
    "cn": "勇敢的旅客們騎著駱駝展開了一場穿越沙漠的冒險刺激的旅程。",
    "vocabIndex": 1
  },
  {
    "q": "The fresh strawberry ice cream looked so ______ that all the children wanted a bowl.",
    "options": [
      "adventurous",
      "appealing",
      "assisted",
      "bulleted"
    ],
    "answer": 1,
    "cn": "新鮮的草莓冰淇淋看起來如此誘人／吸引人，所有孩子都想要一碗。",
    "vocabIndex": 6
  },
  {
    "q": "Designing pretty computer game characters is ______ because he loves digital art.",
    "options": [
      "biting the bullet",
      "making a clean breast",
      "riding the bullet train",
      "right up his alley"
    ],
    "answer": 3,
    "cn": "設計漂亮的電玩角色正合他的胃口，因為他熱愛數位藝術。",
    "vocabIndex": 3
  },
  {
    "q": "The boy felt guilty about breaking the toy, so he decided to ______ to his mother.",
    "options": [
      "right up his alley",
      "ride a buffalo",
      "make a clean breast of it",
      "bite the bullet"
    ],
    "answer": 2,
    "cn": "那個男孩為打破玩具感到內疚，所以他決定向母親全盤坦白認錯。",
    "vocabIndex": 11
  },
  {
    "q": "The math exam is tomorrow, so Tommy must ______ and study all evening.",
    "options": [
      "right up his alley",
      "bite the bullet",
      "make a clean breast",
      "drink a cocktail"
    ],
    "answer": 1,
    "cn": "數學考試就在明天，所以湯米必須咬緊牙關整個晚上認真溫書。",
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "adventure": {
    "pos": "n.",
    "en_def": "an exciting, unusual, or daring experience",
    "cn_def": "冒險；奇遇（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an exciting, unusual, or daring experience",
        "cn_def": "冒險；奇遇（可數/不可數）"
      }
    ]
  },
  "adventurous": {
    "pos": "adj.",
    "en_def": "willing to take risks or try out new experiences",
    "cn_def": "愛冒險的；充滿刺激的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "willing to take risks or try out new experiences",
        "cn_def": "愛冒險的；充滿刺激的"
      }
    ]
  },
  "alley": {
    "pos": "n.",
    "en_def": "a narrow passageway between or behind buildings",
    "cn_def": "巷道；小巷；小徑（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a narrow passageway between or behind buildings",
        "cn_def": "巷道；小巷；小徑（可數）"
      }
    ]
  },
  "right up one's alley": {
    "pos": "phr.",
    "en_def": "ideally suited to one's interests or abilities",
    "cn_def": "正合某人的胃口；正是某人的拿手絕活",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "ideally suited to one's interests or abilities",
        "cn_def": "正合某人的胃口；正是某人的拿手絕活"
      }
    ]
  },
  "right up your alley": {
    "pos": "phr.",
    "en_def": "ideally suited to one's interests or abilities",
    "cn_def": "正合某人的胃口；正是某人的拿手絕活",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "ideally suited to one's interests or abilities",
        "cn_def": "正合某人的胃口；正是某人的拿手絕活"
      }
    ]
  },
  "appeal": {
    "pos": "v.",
    "en_def": "to make a serious or urgent request; to be attractive or interesting",
    "cn_def": "呼籲；懇求；吸引（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a serious or urgent request; to be attractive or interesting",
        "cn_def": "呼籲；懇求；吸引（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "an urgent request for help; the quality of being attractive",
        "cn_def": "呼籲；請求；吸引力；上訴（可數/不可數）"
      }
    ]
  },
  "appealing": {
    "pos": "adj.",
    "en_def": "attractive or interesting",
    "cn_def": "有吸引力的；動人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "attractive or interesting",
        "cn_def": "有吸引力的；動人的"
      }
    ]
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone, typically by doing a share of the work",
    "cn_def": "協助；幫助（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to help someone, typically by doing a share of the work",
        "cn_def": "協助；幫助（動詞）"
      }
    ]
  },
  "assistance": {
    "pos": "n.",
    "en_def": "the provision of money, resources, or information to help someone",
    "cn_def": "協助；援助（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the provision of money, resources, or information to help someone",
        "cn_def": "協助；援助（不可數）"
      }
    ]
  },
  "assistant": {
    "pos": "n.",
    "en_def": "a person who helps someone in their work",
    "cn_def": "助理；助手（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who helps someone in their work",
        "cn_def": "助理；助手（可數）"
      }
    ]
  },
  "breast": {
    "pos": "n.",
    "en_def": "the chest or pectoral region; poultry breast meat",
    "cn_def": "乳房；胸部；雞胸肉（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the chest or pectoral region; poultry breast meat",
        "cn_def": "乳房；胸部；雞胸肉（可數）"
      }
    ]
  },
  "make a clean breast": {
    "pos": "v.phr.",
    "en_def": "to confess fully about something one has done wrong",
    "cn_def": "全盤供認；全盤坦白",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to confess fully about something one has done wrong",
        "cn_def": "全盤供認；全盤坦白"
      }
    ]
  },
  "make a clean breast of": {
    "pos": "v.phr.",
    "en_def": "to confess fully about something one has done wrong",
    "cn_def": "全盤供認；全盤坦白",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to confess fully about something one has done wrong",
        "cn_def": "全盤供認；全盤坦白"
      }
    ]
  },
  "buffalo": {
    "pos": "n.",
    "en_def": "a heavily built wild ox with horns",
    "cn_def": "水牛；美洲野牛（可數，單複數同形或 buffaloes）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a heavily built wild ox with horns",
        "cn_def": "水牛；美洲野牛（可數，單複數同形或 buffaloes）"
      }
    ]
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal consisting of several dishes from which guests serve themselves",
    "cn_def": "自助餐；歐式自助餐（可數，/bəˈfeɪ/ 或 /ˈbʊfeɪ/）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meal consisting of several dishes from which guests serve themselves",
        "cn_def": "自助餐；歐式自助餐（可數，/bəˈfeɪ/ 或 /ˈbʊfeɪ/）"
      }
    ]
  },
  "bullet": {
    "pos": "n.",
    "en_def": "a metal projectile for firing from a rifle or handgun",
    "cn_def": "子彈；項目符號（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metal projectile for firing from a rifle or handgun",
        "cn_def": "子彈；項目符號（可數）"
      }
    ]
  },
  "bite the bullet": {
    "pos": "v.phr.",
    "en_def": "to face a difficult situation with courage and fortitude",
    "cn_def": "咬緊牙關勇敢面對；硬著頭皮做",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to face a difficult situation with courage and fortitude",
        "cn_def": "咬緊牙關勇敢面對；硬著頭皮做"
      }
    ]
  },
  "cocktail": {
    "pos": "n.",
    "en_def": "an alcoholic drink consisting of a spirit mixed with other ingredients",
    "cn_def": "雞尾酒；調酒；混合物（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an alcoholic drink consisting of a spirit mixed with other ingredients",
        "cn_def": "雞尾酒；調酒；混合物（可數）"
      }
    ]
  },
  "comma": {
    "pos": "n.",
    "en_def": "a punctuation mark (,) indicating a pause between parts of a sentence",
    "cn_def": "逗號（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a punctuation mark (,) indicating a pause between parts of a sentence",
        "cn_def": "逗號（可數）"
      }
    ]
  },
  "deposit": {
    "pos": "v.",
    "en_def": "to put or keep money in a bank account; to place something down carefully",
    "cn_def": "存（錢）；放置；沈澱（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put or keep money in a bank account; to place something down carefully",
        "cn_def": "存（錢）；放置；沈澱（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a sum of money placed in a bank; a sum paid as a guarantee or pledge",
        "cn_def": "存款；保證金；押金；沉積物（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
