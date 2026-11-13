// Part 4 Quiz Data: normal – purify
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 6-4 - normal – purify",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "normal",
    "pos": "adj.",
    "cn_def": "正常的；一般的；標準的",
    "en_def": "conforming to a standard; usual, typical, or expected",
    "sentence": "On a {{BLANK}} weekday, Mr. Peterson leaves for the office at seven in the morning and returns home at six.",
    "cn": "在平常正常的工作日，彼得森先生早晨七點出門去辦公室，晚上六點返家。"
  },
  {
    "word": "abnormal",
    "pos": "adj.",
    "cn_def": "不正常的；反常的；異常的",
    "en_def": "deviating from what is normal or usual, typically in a way that is undesirable",
    "sentence": "The alert doctor ordered further blood tests after noticing an {{BLANK}} increase in the patient's white cell count.",
    "cn": "機警的醫生在注意到該病患的白血球數量異常增加後，安排了進一步的血液檢查。"
  },
  {
    "word": "onion",
    "pos": "n.",
    "cn_def": "洋蔥（可數）",
    "en_def": "a swollen edible bulb with a pungent taste and smell, composed of several layers",
    "sentence": "Whenever Vincent chops an {{BLANK}} into tiny pieces on the kitchen cutting board, his eyes begin to tear up.",
    "cn": "每當文森在廚房砧板上將洋蔥切碎時，他的眼睛就會開始流淚。"
  },
  {
    "word": "ox",
    "pos": "n.",
    "cn_def": "牛；閹公牛（複數為 oxen）",
    "en_def": "a castrated bull used as a draft animal; plural form is oxen",
    "sentence": "In traditional agricultural villages, hardworking farmers relied heavily on a sturdy {{BLANK}} to pull heavy wooden plows.",
    "cn": "在傳統農業村落中，勤勞的農民極度依賴一頭強壯的牛／閹牛來拉動沉重的木犁。"
  },
  {
    "word": "pal",
    "pos": "n.",
    "cn_def": "朋友；夥伴；哥們（可數）",
    "en_def": "a close friend or companion; a buddy",
    "sentence": "During her elementary school years, Emily regularly exchanged handwritten letters and stamps with her Canadian pen {{BLANK}}.",
    "cn": "在小學時期，艾美經常與她的加拿大筆友互相寄送手寫信件與郵票。"
  },
  {
    "word": "pancakes",
    "pos": "n.",
    "cn_def": "煎餅；薄煎餅；美式鬆餅（可數）",
    "en_def": "a thin, flat cake of batter, fried on both sides on a griddle or in a frying pan",
    "sentence": "On relaxed Sunday mornings, my mother loves to cook a tall stack of warm fluffy {{BLANK}} topped with maple syrup.",
    "cn": "在輕鬆的星期天早晨，我母親喜歡煎一整疊淋上楓糖漿的熱騰騰鬆軟薄煎餅／鬆餅。"
  },
  {
    "word": "peel",
    "pos": "v.",
    "cn_def": "削皮；剝皮；脫皮（動詞）",
    "en_def": "to remove the outer covering or skin from a fruit, vegetable, or object",
    "sentence": "The chef asked the kitchen assistant to {{BLANK}} ten large potatoes before placing them in the boiling water.",
    "cn": "主廚要求廚房助手在將馬鈴薯放入滾水中之前，先削去十顆大馬鈴薯的皮。"
  },
  {
    "word": "peel",
    "pos": "n.",
    "cn_def": "果皮；蔬菜外皮（可數/不可數）",
    "en_def": "the outer skin of certain fruits and vegetables, especially citrus",
    "sentence": "The pastry baker added finely grated lemon {{BLANK}} to the cake batter to give it a refreshing citrus aroma.",
    "cn": "西點烘焙師在蛋糕麵糊中加入磨碎的檸檬皮，使其帶有清爽的柑橘香氣。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延期；推遲；延緩（動詞）",
    "en_def": "to arrange for something to take place at a time later than originally scheduled",
    "sentence": "Because a massive tropical typhoon was approaching the coast, tournament organizers decided to {{BLANK}} the outdoor marathon until next month.",
    "cn": "由於一場強大的熱帶颱風逼近海岸，賽事主辦單位決定將戶外馬拉松延期到下個月。"
  },
  {
    "word": "postponement",
    "pos": "n.",
    "cn_def": "延期；推遲；延緩措施（可數/不可數）",
    "en_def": "the action of postponing something; an act of rescheduling to a later date",
    "sentence": "The CEO's sudden illness unfortunately led to the indefinite {{BLANK}} of the crucial international trade negotiations.",
    "cn": "執行長突發的重病遺憾地導致了這場關鍵國際貿易談判的無限期延期。"
  },
  {
    "word": "pure",
    "pos": "adj.",
    "cn_def": "純淨的；純粹的；純真的",
    "en_def": "not mixed or adulterated with any other substance or material; innocent",
    "sentence": "Natural spring water originating high in the snowy mountains is completely {{BLANK}} and perfectly safe to drink.",
    "cn": "源自高聳雪山的天然山泉水完全純淨，可以直接安全飲用。"
  },
  {
    "word": "purify",
    "pos": "v.",
    "cn_def": "淨化；提純；使純潔（動詞）",
    "en_def": "to remove contaminants from; to make ceremonially or spiritually clean",
    "sentence": "The modern filtration plant uses advanced ultraviolet technology to {{BLANK}} river water before pumping it to homes.",
    "cn": "這座現代化濾水廠在將河水輸送到住戶前，利用先進的紫外線技術淨化水質。"
  }
];

const MCQS = [
  {
    "q": "Dad cut a large red ______ into small pieces, and his eyes started to tear up.",
    "options": [
      "pancake",
      "ox",
      "onion",
      "pal"
    ],
    "answer": 2,
    "cn": "爸爸把一顆大紅洋蔥切成小塊，他的眼睛開始流下眼淚。",
    "vocabIndex": 2
  },
  {
    "q": "The farmer used a strong ______ to help him pull the heavy plow across the farm.",
    "options": [
      "pancake",
      "pal",
      "onion",
      "ox"
    ],
    "answer": 3,
    "cn": "農夫使用一頭強壯的牛／公牛來幫他在農場上拉動沉重的犁具。",
    "vocabIndex": 3
  },
  {
    "q": "Tom and his best ______ like to ride their bicycles together in the park every weekend.",
    "options": [
      "pal",
      "ox",
      "onion",
      "pancake"
    ],
    "answer": 0,
    "cn": "湯姆和他最好的哥們／朋友每個週末都喜歡在公園裡一起騎自行車。",
    "vocabIndex": 4
  },
  {
    "q": "Mom baked delicious ______ on the pan and served them with sweet honey for breakfast.",
    "options": [
      "oxen",
      "pancakes",
      "onions",
      "pals"
    ],
    "answer": 1,
    "cn": "媽媽在平底鍋上煎了美味的薄煎餅／鬆餅，淋上甜蜂蜜當作早餐。",
    "vocabIndex": 5
  },
  {
    "q": "Be careful not to step on the yellow banana ______ lying on the kitchen floor.",
    "options": [
      "peel",
      "pal",
      "ox",
      "onion"
    ],
    "answer": 0,
    "cn": "小心不要踩到躺在廚房地板上的黃色香蕉皮。",
    "vocabIndex": 6
  },
  {
    "q": "Due to the typhoon, the manager announced the ______ of the outdoor concert.",
    "options": [
      "ox",
      "pancake",
      "pal",
      "postponement"
    ],
    "answer": 3,
    "cn": "由於颱風來襲，經理宣布了戶外音樂會的延期／順延。",
    "vocabIndex": 9
  },
  {
    "q": "Please use a sharp knife to ______ the skin off this red apple for the baby.",
    "options": [
      "postpone",
      "purify",
      "peel",
      "pal"
    ],
    "answer": 2,
    "cn": "請用一把鋒利的小刀為小寶寶削去這顆紅蘋果的皮。",
    "vocabIndex": 6
  },
  {
    "q": "Because it rained heavily, the school decided to ______ the sports day until Friday.",
    "options": [
      "peel",
      "postpone",
      "purify",
      "pal"
    ],
    "answer": 1,
    "cn": "因為下大雨，學校決定將運動會延期／順延至週五舉行。",
    "vocabIndex": 8
  },
  {
    "q": "Special filters in the machine help to ______ the dirty water and make it drinkable.",
    "options": [
      "purify",
      "postpone",
      "peel",
      "pal"
    ],
    "answer": 0,
    "cn": "機器內部的特殊濾芯有助於淨化髒水，使其變得可飲用。",
    "vocabIndex": 11
  },
  {
    "q": "Mom asked my sister to ______ the oranges so we could put the fruit in a bowl.",
    "options": [
      "purify",
      "pal",
      "postpone",
      "peel"
    ],
    "answer": 3,
    "cn": "媽媽叫我妹妹剝開橘子皮，這樣我們就可以把果肉放到碗裡。",
    "vocabIndex": 6
  },
  {
    "q": "The committee had to ______ the meeting because the chairman was sick in bed.",
    "options": [
      "peel",
      "purify",
      "postpone",
      "pal"
    ],
    "answer": 2,
    "cn": "委員會不得不推遲／延期會議，因為主席生病臥床。",
    "vocabIndex": 8
  },
  {
    "q": "After resting at home for three days, my body temperature is now back to ______.",
    "options": [
      "pure",
      "normal",
      "abnormal",
      "peeled"
    ],
    "answer": 1,
    "cn": "在家休息三天後，我的體溫現在已經恢復到正常了。",
    "vocabIndex": 0
  },
  {
    "q": "The weather in winter was very ______; it was hot like summer for two whole weeks.",
    "options": [
      "abnormal",
      "pure",
      "normal",
      "peeled"
    ],
    "answer": 0,
    "cn": "冬天的天氣非常反常異常；整整兩個星期都像夏天一樣炎熱。",
    "vocabIndex": 1
  },
  {
    "q": "The mountain stream water is clean and ______, so hikers can drink it directly.",
    "options": [
      "abnormal",
      "pure",
      "normal",
      "postponed"
    ],
    "answer": 1,
    "cn": "這座高山小溪的水乾淨且純淨，因此登山者可以直接飲用。",
    "vocabIndex": 10
  },
  {
    "q": "On a ______ Sunday, Peter likes to wake up late and read books on his couch.",
    "options": [
      "abnormal",
      "pure",
      "normal",
      "peeled"
    ],
    "answer": 2,
    "cn": "在一個普通的／平常的星期天，彼得喜歡睡晚一點並在沙發上看書。",
    "vocabIndex": 0
  },
  {
    "q": "The high fever was an ______ sign that showed the child had a serious throat infection.",
    "options": [
      "normal",
      "pure",
      "postponed",
      "abnormal"
    ],
    "answer": 3,
    "cn": "持續高燒是一個異常反常的跡象，顯示該孩童喉嚨嚴重感染。",
    "vocabIndex": 1
  },
  {
    "q": "This ring is made of ______ gold and will not change color even after many years.",
    "options": [
      "abnormal",
      "normal",
      "pure",
      "peeled"
    ],
    "answer": 2,
    "cn": "這枚戒指是由純金製成，即使經過許多年也不會變色。",
    "vocabIndex": 10
  },
  {
    "q": "Linda has a ______ in America, and they write letters to each other every month.",
    "options": [
      "pen pal",
      "banana peel",
      "onion ring",
      "ox cart"
    ],
    "answer": 0,
    "cn": "琳達在美國有一位筆友，她們每個月都寫信給彼此。",
    "vocabIndex": 4
  },
  {
    "q": "My brother can lift that heavy table easily because he is as ______.",
    "options": [
      "flat as a pancake",
      "banana peel",
      "pen pal",
      "strong as an ox"
    ],
    "answer": 3,
    "cn": "我哥哥能輕鬆抬起那張重桌子，因為他力大如牛。",
    "vocabIndex": 3
  },
  {
    "q": "After the machine rolled over the ground, the road was as ______.",
    "options": [
      "strong as an ox",
      "flat as a pancake",
      "pen pal",
      "banana peel"
    ],
    "answer": 1,
    "cn": "在機器壓過地面之後，整條道路變得平坦得像薄煎餅一樣。",
    "vocabIndex": 5
  },
  {
    "q": "The funny man in the comedy movie slipped on a ______ and fell backward onto the floor.",
    "options": [
      "flat as a pancake",
      "pen pal",
      "banana peel",
      "strong as an ox"
    ],
    "answer": 2,
    "cn": "喜劇電影裡的滑稽男子踩到香蕉皮滑倒，整個人朝後跌在地上。",
    "vocabIndex": 6
  },
  {
    "q": "Meeting my old friend at a small bookstore in London was a matter of ______.",
    "options": [
      "ox cart",
      "pen pal",
      "banana peel",
      "pure coincidence"
    ],
    "answer": 3,
    "cn": "在倫敦的一家小書店遇見我的老朋友，純粹是一件完全巧合的事。",
    "vocabIndex": 10
  },
  {
    "q": "When eating hamburgers, Tom loves to have a side of crispy fried ______.",
    "options": [
      "onion rings",
      "pen pals",
      "ox carts",
      "pure golds"
    ],
    "answer": 0,
    "cn": "吃漢堡時，湯姆喜歡搭配一份酥脆的炸洋蔥圈當配菜。",
    "vocabIndex": 2
  },
  {
    "q": "After the flood waters went away, daily business in the town slowly ______.",
    "options": [
      "strong as an ox",
      "returned to normal",
      "flat as a pancake",
      "pure coincidence"
    ],
    "answer": 1,
    "cn": "洪水退去之後，全鎮的日常商業活動慢慢恢復正常。",
    "vocabIndex": 0
  },
  {
    "q": "In the old days before cars, goods were carried across hills by an ______.",
    "options": [
      "pen pal",
      "banana peel",
      "onion ring",
      "ox cart"
    ],
    "answer": 3,
    "cn": "在還沒有汽車的舊時代，貨物是由牛車載運穿越山丘的。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "normal": {
    "pos": "adj.",
    "en_def": "conforming to a standard; usual, typical, or expected",
    "cn_def": "正常的；一般的；標準的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "conforming to a standard; usual, typical, or expected",
        "cn_def": "正常的；一般的；標準的"
      }
    ]
  },
  "abnormal": {
    "pos": "adj.",
    "en_def": "deviating from what is normal or usual, typically in a way that is undesirable",
    "cn_def": "不正常的；反常的；異常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deviating from what is normal or usual, typically in a way that is undesirable",
        "cn_def": "不正常的；反常的；異常的"
      }
    ]
  },
  "onion": {
    "pos": "n.",
    "en_def": "a swollen edible bulb with a pungent taste and smell, composed of several layers",
    "cn_def": "洋蔥（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a swollen edible bulb with a pungent taste and smell, composed of several layers",
        "cn_def": "洋蔥（可數）"
      }
    ]
  },
  "ox": {
    "pos": "n.",
    "en_def": "a castrated bull used as a draft animal; plural form is oxen",
    "cn_def": "牛；閹公牛（複數為 oxen）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a castrated bull used as a draft animal; plural form is oxen",
        "cn_def": "牛；閹公牛（複數為 oxen）"
      }
    ]
  },
  "pal": {
    "pos": "n.",
    "en_def": "a close friend or companion; a buddy",
    "cn_def": "朋友；夥伴；哥們（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a close friend or companion; a buddy",
        "cn_def": "朋友；夥伴；哥們（可數）"
      }
    ]
  },
  "pancakes": {
    "pos": "n.",
    "en_def": "a thin, flat cake of batter, fried on both sides on a griddle or in a frying pan",
    "cn_def": "煎餅；薄煎餅；美式鬆餅（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thin, flat cake of batter, fried on both sides on a griddle or in a frying pan",
        "cn_def": "煎餅；薄煎餅；美式鬆餅（可數）"
      }
    ]
  },
  "pancake": {
    "pos": "n.",
    "en_def": "a thin, flat cake of batter, fried on both sides on a griddle or in a frying pan",
    "cn_def": "煎餅；薄煎餅；美式鬆餅（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thin, flat cake of batter, fried on both sides on a griddle or in a frying pan",
        "cn_def": "煎餅；薄煎餅；美式鬆餅（可數）"
      }
    ]
  },
  "peel": {
    "pos": "v.",
    "en_def": "to remove the outer covering or skin from a fruit, vegetable, or object",
    "cn_def": "削皮；剝皮；脫皮（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to remove the outer covering or skin from a fruit, vegetable, or object",
        "cn_def": "削皮；剝皮；脫皮（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "the outer skin of certain fruits and vegetables, especially citrus",
        "cn_def": "果皮；蔬菜外皮（可數/不可數）"
      }
    ]
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to arrange for something to take place at a time later than originally scheduled",
    "cn_def": "延期；推遲；延緩（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to arrange for something to take place at a time later than originally scheduled",
        "cn_def": "延期；推遲；延緩（動詞）"
      }
    ]
  },
  "postponement": {
    "pos": "n.",
    "en_def": "the action of postponing something; an act of rescheduling to a later date",
    "cn_def": "延期；推遲；延緩措施（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of postponing something; an act of rescheduling to a later date",
        "cn_def": "延期；推遲；延緩措施（可數/不可數）"
      }
    ]
  },
  "pure": {
    "pos": "adj.",
    "en_def": "not mixed or adulterated with any other substance or material; innocent",
    "cn_def": "純淨的；純粹的；純真的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not mixed or adulterated with any other substance or material; innocent",
        "cn_def": "純淨的；純粹的；純真的"
      }
    ]
  },
  "purify": {
    "pos": "v.",
    "en_def": "to remove contaminants from; to make ceremonially or spiritually clean",
    "cn_def": "淨化；提純；使純潔（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to remove contaminants from; to make ceremonially or spiritually clean",
        "cn_def": "淨化；提純；使純潔（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
