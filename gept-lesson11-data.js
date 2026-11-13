// Lesson 11 Quiz Data: Beverages, Condiments & Seasonings
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 11 - Beverages, Condiments & Seasonings",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "beer",
    "pos": "n.",
    "cn_def": "啤酒",
    "en_def": "an alcoholic drink made from grain and hops",
    "sentence": "My father worked hard in the garden all Saturday afternoon, so he drank a cold glass of {{BLANK}} with dinner.",
    "cn": "我父親星期六整個下午都在花園裡辛勞工作，所以他晚餐時喝了一杯冰涼的啤酒。"
  },
  {
    "word": "soda",
    "pos": "n.",
    "cn_def": "汽水；碳酸飲料",
    "en_def": "a sweet, cold carbonated soft drink",
    "sentence": "The children played soccer under the burning hot sun, and they bought two large cans of cold {{BLANK}} at the convenience store.",
    "cn": "孩子們在炎熱的烈日下踢足球，他們在便利商店買了兩大罐冰涼的汽水。"
  },
  {
    "word": "honey",
    "pos": "n.",
    "cn_def": "蜂蜜",
    "en_def": "a sweet, sticky yellow liquid made by bees",
    "sentence": "Grandmother had a dry cough during the cold winter night, so my mother made her warm lemon tea with natural {{BLANK}}.",
    "cn": "祖母在寒冷的冬夜裡乾咳，所以我母親用天然蜂蜜為她泡了一杯溫熱的檸檬茶。"
  },
  {
    "word": "ketchup",
    "pos": "n.",
    "cn_def": "番茄醬",
    "en_def": "a thick red sauce made from tomatoes, vinegar, and sugar",
    "sentence": "The French fries tasted a little plain without seasoning, so David squeezed some tomato {{BLANK}} on his plate to dip them.",
    "cn": "炸薯條沒有調味料時味道有點淡，所以戴維在盤子裡擠了一些番茄醬來沾薯條。"
  },
  {
    "word": "pepper",
    "pos": "n.",
    "cn_def": "胡椒粉",
    "en_def": "a sharp-tasting black or white powder made from dried berries",
    "sentence": "The beef soup was very warm and rich, but my brother added a little black {{BLANK}} to give it an extra spicy flavor.",
    "cn": "牛肉湯非常溫暖濃郁，但我哥哥加了一點黑胡椒粉以增添額外的辛香風味。"
  },
  {
    "word": "soy sauce",
    "pos": "n.phr.",
    "cn_def": "醬油",
    "en_def": "a dark, salty liquid made from fermented soybeans",
    "sentence": "My aunt fried a large plate of pork dumplings for lunch, and we mixed some dark {{BLANK}} with vinegar for dipping.",
    "cn": "我姑姑午餐時煎了一大盤豬肉餃子，我們混合了一些深色醬油和醋當作沾醬。"
  },
  {
    "word": "sugar",
    "pos": "n.",
    "cn_def": "糖",
    "en_def": "a sweet white substance obtained from plants",
    "sentence": "The black coffee was too bitter for Mary to finish, so she added two small spoons of white {{BLANK}} into the cup.",
    "cn": "黑咖啡太苦了讓瑪麗喝不完，所以她在杯子裡加了兩小匙白糖。"
  },
  {
    "word": "vinegar",
    "pos": "n.",
    "cn_def": "醋",
    "en_def": "a sour liquid made from fermented wine, cider, or rice",
    "sentence": "The cook chopped some fresh cabbage and carrots finely, and he poured a spoonful of apple {{BLANK}} over the salad.",
    "cn": "廚師把新鮮的高麗菜和紅蘿蔔切得很細，並在沙拉上淋了一匙蘋果醋。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的；可口的",
    "en_def": "having a very pleasant and enjoyable taste or smell",
    "sentence": "Mrs. Lin baked an apple pie following her secret recipe, and everyone at the dinner table agreed that it was truly {{BLANK}}.",
    "cn": "林太太依照她的私房食譜烤了一個蘋果派，餐桌上的每個人都一致認為它非常美味。"
  },
  {
    "word": "yummy",
    "pos": "adj.",
    "cn_def": "好吃的；美味的（口語）",
    "en_def": "tasting very good (often used informally)",
    "sentence": "The bakery on the corner sells chocolate muffins every morning, and the little girl said they were the most {{BLANK}} treats she ever had.",
    "cn": "轉角的麵包店每天早上都賣巧克力馬芬蛋糕，小女孩說那是她吃過最好吃的點心。"
  }
];

const MCQS = [
  {
    "q": "After finishing a heavy plate of beef dumplings, uncle David ordered a cold bottle of ______ to relax with his colleagues.",
    "options": [
      "pepper",
      "beer",
      "ketchup",
      "vinegar"
    ],
    "answer": 1,
    "cn": "吃完一大盤牛肉水餃後，戴維叔叔點了一瓶冰啤酒和同事一起放鬆。 【選項解析】(A) beer 啤酒  (B) pepper 胡椒  (C) ketchup 番茄醬  (D) vinegar 醋。beer 為酒類飲品，符合語境。",
    "vocabIndex": 0
  },
  {
    "q": "The dentist warned Tommy that drinking too much sweet ______ would cause serious tooth decay over time.",
    "options": [
      "sugar",
      "beer",
      "soda",
      "pepper"
    ],
    "answer": 2,
    "cn": "牙醫警告湯米，長久下來喝太多含糖汽水會導致嚴重的蛀牙。 【選項解析】(A) sugar 糖  (B) soda 汽水  (C) beer 啤酒  (D) pepper 胡椒。drinking... sweet soda 指飲用汽水飲料。",
    "vocabIndex": 1
  },
  {
    "q": "Whenever grandfather suffers from a sore throat in winter, he drinks a cup of warm water mixed with pure ______.",
    "options": [
      "honey",
      "vinegar",
      "ketchup",
      "soda"
    ],
    "answer": 0,
    "cn": "每當祖父在冬天喉嚨痛時，他都會喝一杯混有純蜂蜜的溫開水。 【選項解析】(A) ketchup 番茄醬  (B) vinegar 醋  (C) honey 蜂蜜  (D) soda 汽水。溫水加蜂蜜潤喉為常見生活常識。",
    "vocabIndex": 2
  },
  {
    "q": "The waiter brought out a hot basket of French fries, and the kids immediately asked for a bottle of tomato ______.",
    "options": [
      "beer",
      "honey",
      "pepper",
      "ketchup"
    ],
    "answer": 3,
    "cn": "服務生端上一熱籃炸薯條，孩子們立刻要了一瓶番茄醬。 【選項解析】(A) beer 啤酒  (B) honey 蜂蜜  (C) pepper 胡椒  (D) ketchup 番茄醬。沾薯條必備 ketchup。",
    "vocabIndex": 3
  },
  {
    "q": "The vegetable soup tasted somewhat bland, so the chef sprinkled some ground black ______ into the pot.",
    "options": [
      "pepper",
      "soda",
      "beer",
      "honey"
    ],
    "answer": 0,
    "cn": "蔬菜湯嚐起來有點清淡，所以主廚在鍋裡灑了一些黑胡椒粉。 【選項解析】(A) pepper 胡椒  (B) soda 汽水  (C) beer 啤酒  (D) honey 蜂蜜。sprinkled ground black pepper（撒上黑胡椒粉）。",
    "vocabIndex": 4
  },
  {
    "q": "In traditional Taiwanese kitchens, cooks frequently use dark ______ to braise pork and marinate chicken.",
    "options": [
      "soda",
      "beer",
      "ketchup",
      "soy sauce"
    ],
    "answer": 3,
    "cn": "在傳統台灣廚房裡，廚師經常使用純黑醬油來滷肉和醃雞肉。 【選項解析】(A) soda 汽水  (B) soy sauce 醬油  (C) ketchup 番茄醬  (D) beer 啤酒。滷肉常用 soy sauce。",
    "vocabIndex": 5
  },
  {
    "q": "Drinking milk tea without any added ______ is healthier because it helps you control your daily calorie intake.",
    "options": [
      "beer",
      "pepper",
      "sugar",
      "vinegar"
    ],
    "answer": 2,
    "cn": "喝鮮奶茶時不加任何額外的糖比較健康，因為能幫你控制每日熱量。 【選項解析】(A) beer 啤酒  (B) pepper 胡椒  (C) sugar 糖  (D) vinegar 醋。without any added sugar 指無糖飲料。",
    "vocabIndex": 6
  },
  {
    "q": "To make the cabbage salad taste crisp and sour, mother poured two spoons of white ______ over the bowl.",
    "options": [
      "soda",
      "vinegar",
      "honey",
      "ketchup"
    ],
    "answer": 1,
    "cn": "為了讓高麗菜沙拉嚐起來酸脆爽口，媽媽在碗裡淋了兩匙白醋。 【選項解析】(A) soda 汽水  (B) ketchup 番茄醬  (C) honey 蜂蜜  (D) vinegar 醋。酸味來源為 vinegar。",
    "vocabIndex": 7
  },
  {
    "q": "The birthday cake was decorated with fresh strawberries, and all the guests praised how ______ it was.",
    "options": [
      "dumb",
      "pale",
      "delicious",
      "deaf"
    ],
    "answer": 2,
    "cn": "生日蛋糕以新鮮草莓裝飾，所有的賓客都盛讚它有多麼美味。 【選項解析】(A) delicious 美味的  (B) pale 蒼白的  (C) dumb 啞的  (D) deaf 聾的。修飾蛋糕美味選 delicious。",
    "vocabIndex": 8
  },
  {
    "q": "The young boy licked his fingers happily because the chocolate doughnut his mother baked was extremely ______.",
    "options": [
      "yummy",
      "ill",
      "dizzy",
      "blind"
    ],
    "answer": 0,
    "cn": "小男孩開心地舔著手指，因為媽媽烤的巧克力甜甜圈非常好吃。 【選項解析】(A) ill 生病的  (B) yummy 好吃的  (C) dizzy 頭暈的  (D) blind 盲的。兒童口語稱讚食物用 yummy。",
    "vocabIndex": 9
  },
  {
    "q": "Because father had to drive everyone home after the party, he drank fruit juice instead of alcoholic ______.",
    "options": [
      "vinegar",
      "ketchup",
      "sugar",
      "beer"
    ],
    "answer": 3,
    "cn": "因為父親在派對結束後要開車載大家回家，所以他喝果汁而非含酒精的啤酒。 【選項解析】(A) vinegar 醋  (B) ketchup 番茄醬  (C) beer 啤酒  (D) sugar 糖。alcoholic beer（含酒精啤酒）。",
    "vocabIndex": 0
  },
  {
    "q": "The summer afternoon was boiling hot, so the hikers stopped at a vending machine to buy a chilled can of ______.",
    "options": [
      "pepper",
      "soda",
      "soy sauce",
      "honey"
    ],
    "answer": 1,
    "cn": "夏日午後酷熱難耐，登山客在自動販賣機停下腳步買了一罐冰涼的汽水。 【選項解析】(A) pepper 胡椒  (B) soda 汽水  (C) soy sauce 醬油  (D) honey 蜂蜜。chilled can of soda（罐裝冰汽水）。",
    "vocabIndex": 1
  },
  {
    "q": "Bears in the wild often search hollow tree trunks because they love to eat sweet natural ______.",
    "options": [
      "vinegar",
      "beer",
      "ketchup",
      "honey"
    ],
    "answer": 3,
    "cn": "野外的熊經常搜尋空心樹幹，因為牠們喜愛食用香甜的天然蜂蜜。 【選項解析】(A) honey 蜂蜜  (B) beer 啤酒  (C) ketchup 番茄醬  (D) vinegar 醋。熊愛吃 honey 符合自然事實。",
    "vocabIndex": 2
  },
  {
    "q": "If you dip your hot dog into red ______ and mustard, it will taste much more flavorful.",
    "options": [
      "ketchup",
      "beer",
      "soda",
      "sugar"
    ],
    "answer": 0,
    "cn": "如果你把熱狗沾上紅色番茄醬和芥末醬，吃起來會更有風味。 【選項解析】(A) sugar 糖  (B) beer 啤酒  (C) soda 汽水  (D) ketchup 番茄醬。熱狗搭配 red ketchup。",
    "vocabIndex": 3
  },
  {
    "q": "When cooking scrambled eggs in the morning, a tiny pinch of salt and black ______ makes a big difference.",
    "options": [
      "beer",
      "pepper",
      "honey",
      "soda"
    ],
    "answer": 1,
    "cn": "早晨煎炒蛋時，加入微量鹽巴與黑胡椒粉會帶來極大風味提升。 【選項解析】(A) beer 啤酒  (B) pepper 胡椒  (C) honey 蜂蜜  (D) soda 汽水。salt and black pepper（鹽與黑胡椒）。",
    "vocabIndex": 4
  },
  {
    "q": "Steamed fish will taste fresh and savory if you pour a spoonful of seasoned ______ over it before serving.",
    "options": [
      "beer",
      "ketchup",
      "soy sauce",
      "honey"
    ],
    "answer": 2,
    "cn": "如果在端上桌前淋上一匙調味醬油，清蒸魚嚐起來會鮮甜可口。 【選項解析】(A) soy sauce 醬油  (B) ketchup 番茄醬  (C) beer 啤酒  (D) honey 蜂蜜。清蒸魚搭配 soy sauce。",
    "vocabIndex": 5
  },
  {
    "q": "Eating too many desserts that contain refined white ______ can lead to health problems like obesity.",
    "options": [
      "beer",
      "sugar",
      "vinegar",
      "pepper"
    ],
    "answer": 1,
    "cn": "吃太多含有精緻白糖的甜點，可能會導致如肥胖等健康問題。 【選項解析】(A) beer 啤酒  (B) vinegar 醋  (C) sugar 糖  (D) pepper 胡椒。refined white sugar（精製白糖）。",
    "vocabIndex": 6
  },
  {
    "q": "Pickled cucumbers require a mixture of water, salt, and rice ______ to develop their characteristic sour taste.",
    "options": [
      "vinegar",
      "honey",
      "soda",
      "ketchup"
    ],
    "answer": 0,
    "cn": "醃黃瓜需要水、鹽巴和米醋的混合液，以產生其招牌的酸味。 【選項解析】(A) ketchup 番茄醬  (B) honey 蜂蜜  (C) soda 汽水  (D) vinegar 醋。醃製酸物必備 rice vinegar。",
    "vocabIndex": 7
  },
  {
    "q": "My grandmother cooked a pot of chicken soup with ginseng, and the whole family agreed that it was exceptionally ______.",
    "options": [
      "painful",
      "deaf",
      "homesick",
      "delicious"
    ],
    "answer": 3,
    "cn": "我的祖母煮了一鍋人蔘雞湯，全家人都一致認為它格外美味。 【選項解析】(A) delicious 美味的  (B) deaf 聾的  (C) homesick 想家的  (D) painful 疼痛的。形容雞湯鮮美用 delicious。",
    "vocabIndex": 8
  },
  {
    "q": "The children cheered excitedly when aunt May arrived with a box of ______ fruit tarts from the downtown bakery.",
    "options": [
      "dizzy",
      "pale",
      "yummy",
      "ill"
    ],
    "answer": 2,
    "cn": "當梅姑姑帶著一盒從市中心麵包店買來的好吃水果塔抵達時，孩子們興奮歡呼。 【選項解析】(A) dizzy 頭暈的  (B) yummy 好吃的  (C) pale 蒼白的  (D) ill 生病的。修飾 fruit tarts 選 yummy。",
    "vocabIndex": 9
  },
  {
    "q": "The restaurant refused to sell cold draft ______ to teenagers because the legal drinking age is strictly eighteen.",
    "options": [
      "pepper",
      "honey",
      "vinegar",
      "beer"
    ],
    "answer": 3,
    "cn": "這家餐廳拒絕向青少年販售冰生啤酒，因為法定飲酒年齡嚴格定為十八歲。 【選項解析】(A) pepper 胡椒  (B) honey 蜂蜜  (C) beer 啤酒  (D) vinegar 醋。draft beer（生啤酒）。",
    "vocabIndex": 0
  },
  {
    "q": "Avoid leaving an open can of carbonated ______ on the desk, or it will lose all its bubbles and taste flat.",
    "options": [
      "beer",
      "sugar",
      "soda",
      "pepper"
    ],
    "answer": 2,
    "cn": "避免在書桌上放置開罐的碳酸汽水，否則它會流失氣泡且喝起來平淡無味。 【選項解析】(A) beer 啤酒  (B) soda 汽水  (C) sugar 糖  (D) pepper 胡椒。carbonated soda 指碳酸汽水。",
    "vocabIndex": 1
  },
  {
    "q": "Bees fly from flower to flower gathering nectar, which they carry back to their hive to produce golden ______.",
    "options": [
      "honey",
      "ketchup",
      "vinegar",
      "soda"
    ],
    "answer": 0,
    "cn": "蜜蜂穿梭在花朵間採集花蜜，並將其帶回蜂巢製造金黃色蜂蜜。 【選項解析】(A) honey 蜂蜜  (B) ketchup 番茄醬  (C) vinegar 醋  (D) soda 汽水。蜜蜂產物為 golden honey。",
    "vocabIndex": 2
  },
  {
    "q": "The toddler accidentally dropped his burger on the floor, and bright red ______ stained his yellow shirt.",
    "options": [
      "soda",
      "ketchup",
      "beer",
      "pepper"
    ],
    "answer": 1,
    "cn": "幼兒不小心把漢堡掉在地板上，鮮紅色的番茄醬沾污了他的黃色襯衫。 【選項解析】(A) soda 汽水  (B) pepper 胡椒  (C) beer 啤酒  (D) ketchup 番茄醬。漢堡內的醬料是 red ketchup。",
    "vocabIndex": 3
  },
  {
    "q": "People often place a salt shaker and a black ______ grinder on the dining table for guests to season their food.",
    "options": [
      "pepper",
      "sugar",
      "honey",
      "beer"
    ],
    "answer": 0,
    "cn": "人們常在餐桌上放置鹽罐和黑胡椒研磨罐，供賓客為食物調味。 【選項解析】(A) pepper 胡椒  (B) sugar 糖  (C) honey 蜂蜜  (D) beer 啤酒。black pepper grinder（黑胡椒研磨罐）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "beer": {
    "pos": "n.",
    "en_def": "an alcoholic drink made from grain and hops",
    "cn_def": "啤酒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an alcoholic drink made from grain and hops",
        "cn_def": "啤酒"
      }
    ]
  },
  "soda": {
    "pos": "n.",
    "en_def": "a sweet, cold carbonated soft drink",
    "cn_def": "汽水；碳酸飲料",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sweet, cold carbonated soft drink",
        "cn_def": "汽水；碳酸飲料"
      }
    ]
  },
  "honey": {
    "pos": "n.",
    "en_def": "a sweet, sticky yellow liquid made by bees",
    "cn_def": "蜂蜜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sweet, sticky yellow liquid made by bees",
        "cn_def": "蜂蜜"
      }
    ]
  },
  "ketchup": {
    "pos": "n.",
    "en_def": "a thick red sauce made from tomatoes, vinegar, and sugar",
    "cn_def": "番茄醬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thick red sauce made from tomatoes, vinegar, and sugar",
        "cn_def": "番茄醬"
      }
    ]
  },
  "pepper": {
    "pos": "n.",
    "en_def": "a sharp-tasting black or white powder made from dried berries",
    "cn_def": "胡椒粉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sharp-tasting black or white powder made from dried berries",
        "cn_def": "胡椒粉"
      }
    ]
  },
  "soy sauce": {
    "pos": "n.phr.",
    "en_def": "a dark, salty liquid made from fermented soybeans",
    "cn_def": "醬油",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a dark, salty liquid made from fermented soybeans",
        "cn_def": "醬油"
      }
    ]
  },
  "sugar": {
    "pos": "n.",
    "en_def": "a sweet white substance obtained from plants",
    "cn_def": "糖",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sweet white substance obtained from plants",
        "cn_def": "糖"
      }
    ]
  },
  "vinegar": {
    "pos": "n.",
    "en_def": "a sour liquid made from fermented wine, cider, or rice",
    "cn_def": "醋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sour liquid made from fermented wine, cider, or rice",
        "cn_def": "醋"
      }
    ]
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "having a very pleasant and enjoyable taste or smell",
    "cn_def": "美味的；可口的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a very pleasant and enjoyable taste or smell",
        "cn_def": "美味的；可口的"
      }
    ]
  },
  "yummy": {
    "pos": "adj.",
    "en_def": "tasting very good (often used informally)",
    "cn_def": "好吃的；美味的（口語）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "tasting very good (often used informally)",
        "cn_def": "好吃的；美味的（口語）"
      }
    ]
  },
  "dumb": {
    "pos": "",
    "en_def": "",
    "cn_def": "啞的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "啞的"
      }
    ]
  },
  "pale": {
    "pos": "",
    "en_def": "",
    "cn_def": "蒼白的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蒼白的"
      }
    ]
  },
  "deaf": {
    "pos": "",
    "en_def": "",
    "cn_def": "聾的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "聾的"
      }
    ]
  },
  "ill": {
    "pos": "",
    "en_def": "",
    "cn_def": "生病的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "生病的"
      }
    ]
  },
  "dizzy": {
    "pos": "",
    "en_def": "",
    "cn_def": "頭暈的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "頭暈的"
      }
    ]
  },
  "blind": {
    "pos": "",
    "en_def": "",
    "cn_def": "盲的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "盲的"
      }
    ]
  },
  "painful": {
    "pos": "",
    "en_def": "",
    "cn_def": "疼痛的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "疼痛的"
      }
    ]
  },
  "homesick": {
    "pos": "",
    "en_def": "",
    "cn_def": "想家的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "想家的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
