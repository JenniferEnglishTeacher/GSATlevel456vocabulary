// Lesson 10 Quiz Data: Baking, Staples & Traditional Dishes
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 10 - Baking, Staples & Traditional Dishes",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤；烘焙",
    "en_def": "to cook food such as bread, cakes, or pies in an oven",
    "sentence": "On Sunday mornings, grandma loves to {{BLANK}} sweet cinnamon rolls in the oven until their aroma fills the entire house.",
    "cn": "在星期天早晨，祖母喜歡在烤箱裡烘烤香甜肉桂捲，直到香氣瀰漫整座屋子。"
  },
  {
    "word": "bun",
    "pos": "n.",
    "cn_def": "小麵包；小圓包",
    "en_def": "a small round sweet bread roll, or bread containing meat/vegetables",
    "sentence": "The hungry student bought a warm steamed pork {{BLANK}} from the convenience store and ate it quickly on the train.",
    "cn": "飢餓的學生從便利商店買了一個熱騰騰的蒸肉包，並在火車上快速吃完。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點；甜食",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "After finishing our savory Italian pasta dinner, we ordered tiramisu and chocolate cake for {{BLANK}}.",
    "cn": "在享用完美味的義大利麵晚餐後，我們點了提拉米蘇和巧克力蛋糕作為餐後甜點。"
  },
  {
    "word": "donut",
    "pos": "n.",
    "cn_def": "甜甜圈",
    "en_def": "a small fried cake of sweetened dough, usually shaped like a ring",
    "sentence": "Oliver bought a box of colorful glazed {{BLANK}}s with rainbow sprinkles to share with his colleagues at the office.",
    "cn": "奧利佛買了一盒帶有彩虹糖碎的鮮豔糖霜甜甜圈，在辦公室與同事們一同分享。"
  },
  {
    "word": "dumpling",
    "pos": "n.",
    "cn_def": "水餃；餃子",
    "en_def": "a small piece of dough wrapped around minced meat or vegetables",
    "sentence": "During Chinese New Year celebrations, our entire family sits around the table wrapping hundreds of pork {{BLANK}}s.",
    "cn": "在農曆新年慶祝活動期間，我們全家人圍坐在桌旁包著數百顆香蔥豬肉水餃。"
  },
  {
    "word": "flour",
    "pos": "n.",
    "cn_def": "麵粉",
    "en_def": "powder obtained by grinding grain, used to make bread, cakes, and pastry",
    "sentence": "Before mixing the birthday cake batter, the baker sifted white wheat {{BLANK}} through a fine metal sieve.",
    "cn": "在攪拌生日蛋糕麵糊之前，烘焙師用細金屬篩網將白色小麥麵粉過篩。"
  },
  {
    "word": "loaf",
    "pos": "n.",
    "cn_def": "一條（麵包）",
    "en_def": "bread shaped and baked in one piece (plural: loaves)",
    "sentence": "Dad walked over to the neighborhood bakery and purchased a warm, freshly baked {{BLANK}} of whole-wheat bread.",
    "cn": "爸爸步行到附近的麵包店，購買了一條剛出爐溫熱的全麥土司麵包。"
  },
  {
    "word": "spaghetti",
    "pos": "n.",
    "cn_def": "義大利麵",
    "en_def": "pasta made in long, thin, solid strings, boiled and served with sauce",
    "sentence": "Mom cooked delicious homemade {{BLANK}} topped with rich tomato beef sauce and sprinkled with parmesan cheese.",
    "cn": "媽媽烹煮了美味的自製義大利細麵，淋上濃郁的番茄牛肉肉醬，並撒上帕瑪森起司粉。"
  },
  {
    "word": "toast",
    "pos": "n. / v.",
    "cn_def": "烤土司；吐司；祝酒",
    "en_def": "sliced bread made brown and crisp by heating; a drink to honor someone",
    "sentence": "For breakfast, Kevin usually spreads sweet strawberry jam over two slices of crunchy golden {{BLANK}}.",
    "cn": "早餐時，凱文通常會在兩片香脆的金黃烤土司上抹上香甜的草莓果醬。"
  },
  {
    "word": "tofu",
    "pos": "n.",
    "cn_def": "豆腐",
    "en_def": "a soft white food made from mashed soybeans, used in Asian cooking",
    "sentence": "Taiwanese night markets are world-famous for serving deep-fried stinky {{BLANK}} accompanied by sour pickled cabbage.",
    "cn": "台灣夜市以供應油炸臭豆腐聞名全球，通常會搭配酸脆的醃漬泡菜一同享用。"
  }
];

const MCQS = [
  {
    "q": "Mom preheated the oven to two hundred degrees so she could ______ chocolate chip cookies for the party.",
    "options": [
      "pray",
      "toast",
      "recover",
      "bake"
    ],
    "answer": 3,
    "cn": "媽媽將烤箱預熱到兩百度，以便能為派對烘烤巧克力脆片餅乾。 【選項解析】(A) bake 烘烤  (B) toast 烤土司/祝酒  (C) recover 康復  (D) pray 祈禱。preheated the oven to bake cookies 為典型烘焙搭配。",
    "vocabIndex": 0
  },
  {
    "q": "Night market stalls in Taipei draw brave foreign tourists eager to sample crispy deep-fried stinky ______.",
    "options": [
      "donut",
      "tofu",
      "loaf",
      "bun"
    ],
    "answer": 1,
    "cn": "台北的夜市攤位吸引了許多勇敢的外國遊客，爭相品嚐香脆油炸的臭豆腐。 【選項解析】(A) donut 甜甜圈  (B) tofu 豆腐  (C) loaf 一條  (D) bun 包子。stinky tofu 指臭豆腐。",
    "vocabIndex": 9
  },
  {
    "q": "For a hearty breakfast, grandfather popped two thick slices of white bread into the electric toaster to make ______.",
    "options": [
      "dumpling",
      "dessert",
      "toast",
      "spaghetti"
    ],
    "answer": 2,
    "cn": "為了享用豐盛的早餐，祖父把兩片厚白麵包放進電烤麵包機做成烤土司。 【選項解析】(A) dumpling 水餃  (B) toast 烤土司  (C) dessert 甜點  (D) spaghetti 義大利麵。放入烤麵包機烤出的為 toast。",
    "vocabIndex": 8
  },
  {
    "q": "Italian restaurants serve al dente ______ tossed with garlic, olive oil, fresh basil, and minced clams.",
    "options": [
      "spaghetti",
      "flour",
      "loaf",
      "bun"
    ],
    "answer": 0,
    "cn": "義大利餐廳供應拌入大蒜、橄欖油、新鮮羅勒和蛤蜊肉的彈牙義大利麵。 【選項解析】(A) flour 麵粉  (B) spaghetti 義大利麵  (C) loaf 一條  (D) bun 小麵包。義大利餐廳長條麵食為 spaghetti。",
    "vocabIndex": 7
  },
  {
    "q": "On New Year's Eve, the grandmother gathered her children around the kitchen counter to wrap savory pork ______.",
    "options": [
      "loaves",
      "desserts",
      "dumplings",
      "toasts"
    ],
    "answer": 2,
    "cn": "除夕夜這一天，祖母將孩子們召集在廚房料理台旁，一起包美味的豬肉水餃。 【選項解析】(A) dumplings 水餃  (B) desserts 甜點  (C) loaves 麵包條  (D) toasts 烤土司。wrap pork dumplings 指包豬肉水餃。",
    "vocabIndex": 4
  },
  {
    "q": "The artisan bakery sells fresh sourdough by the whole ______, and customers line up before opening hours.",
    "options": [
      "bun",
      "donut",
      "dessert",
      "loaf"
    ],
    "answer": 3,
    "cn": "這家手工麵包坊按整條出售新鮮酸種麵包，顧客在營業前就已排成長龍。 【選項解析】(A) bun 小圓麵包  (B) donut 甜甜圈  (C) loaf 一條麵包  (D) dessert 甜點。sell by the whole loaf 指按整條販售。",
    "vocabIndex": 6
  },
  {
    "q": "The children cheered excitedly when dad brought home a pink box containing six chocolate-frosted ring ______.",
    "options": [
      "donuts",
      "loaves",
      "flours",
      "tofus"
    ],
    "answer": 0,
    "cn": "當爸爸帶回一個裝著六個巧克力糖霜環形甜甜圈的粉紅盒子時，孩子們興奮歡呼。 【選項解析】(A) loaves 麵包條  (B) donuts 甜甜圈  (C) flours 麵粉  (D) tofus 豆腐。ring donuts 指圓環甜甜圈。",
    "vocabIndex": 3
  },
  {
    "q": "To make smooth pancake batter, whisk eggs and milk gradually into a large ceramic bowl of white wheat ______.",
    "options": [
      "toast",
      "flour",
      "spaghetti",
      "dessert"
    ],
    "answer": 1,
    "cn": "製作滑順的鬆餅麵糊時，將雞蛋和牛奶逐漸攪拌進裝滿白色小麥麵粉的大陶瓷碗中。 【選項解析】(A) flour 麵粉  (B) toast 吐司  (C) spaghetti 義大利麵  (D) dessert 甜點。調製麵糊的主要乾原料為 wheat flour。",
    "vocabIndex": 5
  },
  {
    "q": "The street vendor sells piping-hot steamed vegetable ______ filled with crunchy cabbage and mushrooms every morning.",
    "options": [
      "loaves",
      "toasts",
      "desserts",
      "buns"
    ],
    "answer": 3,
    "cn": "街頭攤販每天早晨販售熱氣騰騰的蒸蔬菜包子，裡面包滿了清脆的高麗菜與香菇。 【選項解析】(A) loaves 麵包條  (B) buns 包子  (C) desserts 甜點  (D) toasts 吐司。steamed vegetable buns 指蒸蔬菜包子。",
    "vocabIndex": 1
  },
  {
    "q": "After the lavish wedding banquet, guests enjoyed matcha ice cream and seasonal fruits served for ______.",
    "options": [
      "loaf",
      "flour",
      "dessert",
      "dumpling"
    ],
    "answer": 2,
    "cn": "在奢華的婚宴結束後，賓客們享用了作為餐後甜點端上桌的抹茶冰淇淋與時令水果。 【選項解析】(A) dessert 甜點  (B) flour 麵粉  (C) loaf 麵包條  (D) dumpling 水餃。餐後甜點為 dessert。",
    "vocabIndex": 2
  },
  {
    "q": "Every Christmas Eve, our mother loves to ______ festive gingerbread cookies shaped like stars and reindeer.",
    "options": [
      "bake",
      "toast",
      "wound",
      "cough"
    ],
    "answer": 0,
    "cn": "每年平安夜，我們的母親最喜歡烘烤形狀像星星和馴鹿的應景薑餅餅乾。 【選項解析】(A) bake 烘烤  (B) toast 祝酒/烤吐司  (C) wound 傷害  (D) cough 咳嗽。bake cookies 指烤餅乾。",
    "vocabIndex": 0
  },
  {
    "q": "Silken soft ______ simmered in spicy Sichuan chili oil is one of the most famous dishes in Chinese cuisine.",
    "options": [
      "donut",
      "tofu",
      "spaghetti",
      "loaf"
    ],
    "answer": 1,
    "cn": "在香辣四川辣油中慢煨的嫩豆腐，是中華料理中最著名的佳餚之一。 【選項解析】(A) donut 甜甜圈  (B) tofu 豆腐  (C) spaghetti 義大利麵  (D) loaf 麵包條。麻婆豆腐的主食材為 silken soft tofu。",
    "vocabIndex": 9
  },
  {
    "q": "Spreading creamy peanut butter over warm, crunchy slices of whole-wheat ______ is Samuel's favorite morning meal.",
    "options": [
      "toast",
      "dumpling",
      "dessert",
      "flour"
    ],
    "answer": 0,
    "cn": "在溫暖酥脆的全麥烤土司切片上塗抹香濃花生醬，是塞繆爾最喜歡的早晨餐點。 【選項解析】(A) dumpling 水餃  (B) toast 烤土司  (C) dessert 甜點  (D) flour 麵粉。塗花生醬食用的為 crunchy toast。",
    "vocabIndex": 8
  },
  {
    "q": "The chef simmered tomato meat sauce for three hours before pouring it over a steaming plate of fresh ______.",
    "options": [
      "flour",
      "spaghetti",
      "loaf",
      "bun"
    ],
    "answer": 1,
    "cn": "大廚將番茄肉醬燉煮了三個小時，然後淋在熱氣騰騰的新鮮義大利細麵盤上。 【選項解析】(A) flour 麵粉  (B) spaghetti 義大利麵  (C) loaf 麵包條  (D) bun 包子。淋肉醬的主食為 spaghetti。",
    "vocabIndex": 7
  },
  {
    "q": "Steamed soup ______ filled with rich hot broth and minced pork are world-renowned delicacies from Taiwan.",
    "options": [
      "toasts",
      "desserts",
      "loaves",
      "dumplings"
    ],
    "answer": 3,
    "cn": "充滿濃郁熱湯汁與豬肉餡的清蒸小籠包，是享譽國際的台灣道地美食。 【選項解析】(A) dumplings 湯包/水餃  (B) desserts 甜點  (C) loaves 麵包條  (D) toasts 吐司。steamed soup dumplings 指小籠湯包。",
    "vocabIndex": 4
  },
  {
    "q": "Dad sliced a freshly baked ______ of rye bread into even pieces and spread butter across each slice.",
    "options": [
      "bun",
      "donut",
      "loaf",
      "dessert"
    ],
    "answer": 2,
    "cn": "爸爸將剛出爐的一整條裸麥麵包切成均勻薄片，並在每片上面塗抹奶油。 【選項解析】(A) bun 小麵包  (B) donut 甜甜圈  (C) loaf 一條  (D) dessert 甜點。a loaf of rye bread 指一條黑麥麵包。",
    "vocabIndex": 6
  },
  {
    "q": "Police officers in American movies are frequently shown enjoying sweet glazed ring ______ with hot black coffee.",
    "options": [
      "loaves",
      "flours",
      "tofus",
      "donuts"
    ],
    "answer": 3,
    "cn": "在美國電影中，經常可以看到警察一邊享用熱黑咖啡，一邊品嚐甜糖霜環形甜甜圈。 【選項解析】(A) loaves 麵包條  (B) donuts 甜甜圈  (C) tofus 豆腐  (D) flours 麵粉。美劇警察經典食物為 glazed ring donuts。",
    "vocabIndex": 3
  },
  {
    "q": "You will need two cups of all-purpose ______ and three eggs to prepare the dough for homemade noodles.",
    "options": [
      "spaghetti",
      "toast",
      "flour",
      "dessert"
    ],
    "answer": 2,
    "cn": "你需要兩杯中筋麵粉和三顆雞蛋，來為自製手工麵條揉製麵糰。 【選項解析】(A) flour 麵粉  (B) toast 吐司  (C) spaghetti 義大利麵  (D) dessert 甜點。all-purpose flour 指中筋麵粉。",
    "vocabIndex": 5
  },
  {
    "q": "Walking past the traditional breakfast shop, the aroma of freshly steamed pork ______ made my mouth water.",
    "options": [
      "buns",
      "loaves",
      "desserts",
      "toasts"
    ],
    "answer": 0,
    "cn": "走過傳統早餐店，剛出爐蒸熟豬肉包子的誘人香氣讓我垂涎欲滴。 【選項解析】(A) loaves 麵包條  (B) buns 包子  (C) desserts 甜點  (D) toasts 吐司。steamed pork buns 指蒸肉包。",
    "vocabIndex": 1
  },
  {
    "q": "The restaurant offers a mouthwatering array of sweet chocolate brownies and berry tarts on its afternoon ______ menu.",
    "options": [
      "flour",
      "dessert",
      "loaf",
      "dumpling"
    ],
    "answer": 1,
    "cn": "這家餐廳在下午茶甜點菜單上，提供了令人垂涎欲滴的香濃巧克力布朗尼與莓果塔。 【選項解析】(A) dessert 甜點  (B) flour 麵粉  (C) loaf 麵包條  (D) dumpling 水餃。afternoon dessert menu 指下午茶甜點菜單。",
    "vocabIndex": 2
  },
  {
    "q": "The kitchen smelled wonderful because aunt Catherine was learning how to ______ traditional French bread at home.",
    "options": [
      "bake",
      "toast",
      "tear",
      "recover"
    ],
    "answer": 0,
    "cn": "廚房裡飄著撲鼻香氣，因為凱薩琳姑姑正在家學習如何烘焙傳統法式長棍麵包。 【選項解析】(A) bake 烘烤  (B) toast 烤土司  (C) tear 撕開  (D) recover 恢復。bake French bread 指烤法式麵包。",
    "vocabIndex": 0
  },
  {
    "q": "Healthy organic miso soup is traditionally garnished with tiny cubes of soft white ______ and green scallions.",
    "options": [
      "donut",
      "bun",
      "loaf",
      "tofu"
    ],
    "answer": 3,
    "cn": "健康的有機味噌湯傳統上會點綴切成微小方塊的柔軟白豆腐和翠綠蔥花。 【選項解析】(A) donut 甜甜圈  (B) tofu 豆腐  (C) loaf 麵包條  (D) bun 包子。味噌湯內的白色小方塊為 tofu。",
    "vocabIndex": 9
  },
  {
    "q": "When you make a hot sandwich, grilling the bread until it turns into golden crispy ______ improves the texture.",
    "options": [
      "dumpling",
      "toast",
      "dessert",
      "spaghetti"
    ],
    "answer": 1,
    "cn": "製作熱三明治時，將麵包烘烤至金黃酥脆的烤土司能顯著提升整體的口感層次。 【選項解析】(A) dumpling 水餃  (B) toast 烤土司  (C) dessert 甜點  (D) spaghetti 義大利麵。grilled into crispy toast 指烤成脆土司。",
    "vocabIndex": 8
  },
  {
    "q": "Twirling long strings of delicious boiled ______ with a fork and spoon requires a little practice for beginners.",
    "options": [
      "flour",
      "loaf",
      "spaghetti",
      "bun"
    ],
    "answer": 2,
    "cn": "用叉子和湯匙捲起長條煮熟的美味義大利細麵，對初學者來說需要一點練習。 【選項解析】(A) flour 麵粉  (B) spaghetti 義大利麵  (C) loaf 麵包條  (D) bun 包子。twirling long strings of spaghetti 指用叉子捲義大利麵。",
    "vocabIndex": 7
  },
  {
    "q": "Boil the frozen beef ______ in a large pot of water for seven minutes until they float to the surface.",
    "options": [
      "dumplings",
      "desserts",
      "loaves",
      "toasts"
    ],
    "answer": 0,
    "cn": "將冷凍牛肉水餃放入大鍋沸水中煮七分鐘，直到它們全部浮出水面即可撈起享用。 【選項解析】(A) dumplings 水餃  (B) desserts 甜點  (C) loaves 麵包條  (D) toasts 烤土司。boil frozen beef dumplings 指水煮冷凍牛肉水餃。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread, cakes, or pies in an oven",
    "cn_def": "烘烤；烘焙",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cook food such as bread, cakes, or pies in an oven",
        "cn_def": "烘烤；烘焙"
      }
    ]
  },
  "bun": {
    "pos": "n.",
    "en_def": "a small round sweet bread roll, or bread containing meat/vegetables",
    "cn_def": "小麵包；小圓包",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small round sweet bread roll, or bread containing meat/vegetables",
        "cn_def": "小麵包；小圓包"
      }
    ]
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food eaten at the end of a meal",
    "cn_def": "甜點；甜食",
    "combined": [
      {
        "pos": "n.",
        "en_def": "sweet food eaten at the end of a meal",
        "cn_def": "甜點；甜食"
      }
    ]
  },
  "donut": {
    "pos": "n.",
    "en_def": "a small fried cake of sweetened dough, usually shaped like a ring",
    "cn_def": "甜甜圈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small fried cake of sweetened dough, usually shaped like a ring",
        "cn_def": "甜甜圈"
      }
    ]
  },
  "dumpling": {
    "pos": "n.",
    "en_def": "a small piece of dough wrapped around minced meat or vegetables",
    "cn_def": "水餃；餃子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small piece of dough wrapped around minced meat or vegetables",
        "cn_def": "水餃；餃子"
      }
    ]
  },
  "flour": {
    "pos": "n.",
    "en_def": "powder obtained by grinding grain, used to make bread, cakes, and pastry",
    "cn_def": "麵粉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "powder obtained by grinding grain, used to make bread, cakes, and pastry",
        "cn_def": "麵粉"
      }
    ]
  },
  "loaf": {
    "pos": "n.",
    "en_def": "bread shaped and baked in one piece (plural: loaves)",
    "cn_def": "一條（麵包）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "bread shaped and baked in one piece (plural: loaves)",
        "cn_def": "一條（麵包）"
      }
    ]
  },
  "spaghetti": {
    "pos": "n.",
    "en_def": "pasta made in long, thin, solid strings, boiled and served with sauce",
    "cn_def": "義大利麵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "pasta made in long, thin, solid strings, boiled and served with sauce",
        "cn_def": "義大利麵"
      }
    ]
  },
  "toast": {
    "pos": "n. / v.",
    "en_def": "sliced bread made brown and crisp by heating; a drink to honor someone",
    "cn_def": "烤土司；吐司；祝酒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "sliced bread made brown and crisp by heating; a drink to honor someone",
        "cn_def": "烤土司；吐司；祝酒"
      }
    ]
  },
  "tofu": {
    "pos": "n.",
    "en_def": "a soft white food made from mashed soybeans, used in Asian cooking",
    "cn_def": "豆腐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a soft white food made from mashed soybeans, used in Asian cooking",
        "cn_def": "豆腐"
      }
    ]
  },
  "pray": {
    "pos": "",
    "en_def": "",
    "cn_def": "祈禱",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "祈禱"
      }
    ]
  },
  "recover": {
    "pos": "",
    "en_def": "",
    "cn_def": "康復",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "康復"
      }
    ]
  },
  "loaves": {
    "pos": "",
    "en_def": "",
    "cn_def": "麵包條",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "麵包條"
      }
    ]
  },
  "desserts": {
    "pos": "",
    "en_def": "",
    "cn_def": "甜點",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "甜點"
      }
    ]
  },
  "dumplings": {
    "pos": "",
    "en_def": "",
    "cn_def": "水餃",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "水餃"
      }
    ]
  },
  "toasts": {
    "pos": "",
    "en_def": "",
    "cn_def": "烤土司",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "烤土司"
      }
    ]
  },
  "donuts": {
    "pos": "",
    "en_def": "",
    "cn_def": "甜甜圈",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "甜甜圈"
      }
    ]
  },
  "flours": {
    "pos": "",
    "en_def": "",
    "cn_def": "麵粉",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "麵粉"
      }
    ]
  },
  "tofus": {
    "pos": "",
    "en_def": "",
    "cn_def": "豆腐",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "豆腐"
      }
    ]
  },
  "buns": {
    "pos": "",
    "en_def": "",
    "cn_def": "包子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "包子"
      }
    ]
  },
  "wound": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷害"
      }
    ]
  },
  "cough": {
    "pos": "",
    "en_def": "",
    "cn_def": "咳嗽",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "咳嗽"
      }
    ]
  },
  "tear": {
    "pos": "",
    "en_def": "",
    "cn_def": "撕開",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "撕開"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
