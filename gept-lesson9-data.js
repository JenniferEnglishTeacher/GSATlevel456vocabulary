// Lesson 9 Quiz Data: Fruits, Gourds & Dairy Condiments
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 9 - Fruits, Gourds & Dairy Condiments",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "papaya",
    "pos": "n.",
    "cn_def": "木瓜",
    "en_def": "a tropical fruit with orange flesh and small black seeds",
    "sentence": "The juice shop blenders were running nonstop as customers ordered thick, sweet {{BLANK}} milk throughout the warm afternoon.",
    "cn": "果汁店的果汁機運轉不停，因為整個溫暖午後顧客們不斷點選濃郁香甜的木瓜牛奶。"
  },
  {
    "word": "peach",
    "pos": "n.",
    "cn_def": "桃子；水蜜桃",
    "en_def": "a soft round fruit with pink-yellow fuzzy skin and a large stone",
    "sentence": "Lala Mountain in Taoyuan is famous for growing sweet, juicy {{BLANK}} that tourists love to buy during summer.",
    "cn": "桃園拉拉山以種植香甜多汁的水蜜桃聞名，遊客們非常喜歡在夏天購買品嚐。"
  },
  {
    "word": "pear",
    "pos": "n.",
    "cn_def": "梨子",
    "en_def": "a sweet fruit that is narrow near the stem and rounded at the bottom",
    "sentence": "Grandfather sliced a crisp, watery Asian {{BLANK}} into pieces and shared it with the children after dinner.",
    "cn": "晚飯後，祖父將一顆清脆多汁的亞洲水梨切成片，與孩子們一同分享。"
  },
  {
    "word": "pineapple",
    "pos": "n.",
    "cn_def": "鳳梨",
    "en_def": "a large tropical fruit with stiff leaves and sweet, yellow flesh",
    "sentence": "Tourists visiting Taiwan always buy several boxes of traditional {{BLANK}} cakes to take home as souvenirs for friends.",
    "cn": "造訪台灣的遊客總會買好幾盒傳統鳳梨酥帶回家，作為送給親友的伴手禮。"
  },
  {
    "word": "potato",
    "pos": "n.",
    "cn_def": "馬鈴薯；洋芋",
    "en_def": "a round root vegetable with brown or yellow skin that grows underground",
    "sentence": "The chef mashed boiled {{BLANK}} with fresh butter and warm milk to serve beside the roasted beef.",
    "cn": "大廚將煮熟的馬鈴薯與新鮮奶油及溫牛奶壓成泥，搭配烤牛肉端上桌。"
  },
  {
    "word": "pumpkin",
    "pos": "n.",
    "cn_def": "南瓜",
    "en_def": "a large round orange vegetable often used for pies or soups",
    "sentence": "During autumn festivals, farmers display giant orange {{BLANK}} and bake creamy pies flavored with cinnamon and nutmeg.",
    "cn": "秋季節日期間，農夫們展示巨大的橘色南瓜，並烘烤帶有肉桂與肉荳蔻風味的香濃南瓜派。"
  },
  {
    "word": "strawberry",
    "pos": "n.",
    "cn_def": "草莓",
    "en_def": "a small soft red fruit with tiny yellow seeds on its surface",
    "sentence": "Families enjoyed picking sweet red {{BLANK}} in the scenic mountain farms of Dahu on a sunny winter morning.",
    "cn": "在一個陽光明媚的冬日早晨，各個家庭在大湖風景秀麗的高山農場開心地採摘香甜紅草莓。"
  },
  {
    "word": "tangerine",
    "pos": "n.",
    "cn_def": "柑橘；小柑橘",
    "en_def": "a small sweet citrus fruit with loose, easily peeled skin",
    "sentence": "During Lunar New Year, people place bright orange {{BLANK}} on tables because their shape symbolizes good luck and wealth.",
    "cn": "農曆新年期間，人們會在桌上擺放鮮豔的橘子，因為其形狀與名稱象徵著吉祥與財富。"
  },
  {
    "word": "watermelon",
    "pos": "n.",
    "cn_def": "西瓜",
    "en_def": "a large heavy fruit with thick green skin and sweet red flesh with seeds",
    "sentence": "Nothing cools you down on a sweltering July afternoon like a huge, chilled slice of sweet red {{BLANK}}.",
    "cn": "在七月酷熱的午後，沒有什麼比一大片冰涼香甜的紅肉西瓜更能讓人消暑解渴了。"
  },
  {
    "word": "cream",
    "pos": "n.",
    "cn_def": "鮮奶油；奶油",
    "en_def": "the thick white liquid containing fat taken from milk",
    "sentence": "The pastry baker topped the freshly baked chocolate tart with a swirl of fluffy whipped {{BLANK}} and berries.",
    "cn": "糕點師傅在剛出爐的巧克力塔上擠上一圈蓬鬆細緻的打發鮮奶油和新鮮莓果。"
  }
];

const MCQS = [
  {
    "q": "Fresh sweet ______ milk is one of the most famous and beloved night market beverages in Taiwan.",
    "options": [
      "pumpkin",
      "potato",
      "papaya",
      "pear"
    ],
    "answer": 2,
    "cn": "新鮮香甜的木瓜牛奶是台灣最著名且備受喜愛的夜市飲品之一。 【選項解析】(A) papaya 木瓜  (B) potato 馬鈴薯  (C) pumpkin 南瓜  (D) pear 梨子。papaya milk 為知名木瓜牛奶。",
    "vocabIndex": 0
  },
  {
    "q": "Slicing an enormous chilled ______ into thick wedges brought instant refreshment to all the players after soccer practice.",
    "options": [
      "pear",
      "potato",
      "cream",
      "watermelon"
    ],
    "answer": 3,
    "cn": "在足球訓練結束後，將一顆巨大的冰鎮西瓜切成厚片，給所有球員帶來了即時的消暑清涼。 【選項解析】(A) watermelon 西瓜  (B) potato 馬鈴薯  (C) cream 奶油  (D) pear 水梨。消暑解渴的巨大水果為 watermelon。",
    "vocabIndex": 8
  },
  {
    "q": "During the winter picking season, thousands of travelers visit Dahu to gather sweet ripe red ______ in wicker baskets.",
    "options": [
      "pumpkins",
      "strawberries",
      "potatoes",
      "creams"
    ],
    "answer": 1,
    "cn": "在冬季採摘季節，數千名遊客造訪大湖，將成熟香甜的紅草莓裝入柳條籃中。 【選項解析】(A) pumpkins 南瓜  (B) potatoes 馬鈴薯  (C) strawberries 草莓  (D) creams 鮮奶油。大湖冬季採摘代表水果為 strawberries。",
    "vocabIndex": 6
  },
  {
    "q": "Slicing sweet juicy ______ from high mountain orchards is a luxurious treat during hot summer months.",
    "options": [
      "peaches",
      "potatoes",
      "creams",
      "pumpkins"
    ],
    "answer": 0,
    "cn": "在高山果園採摘香甜多汁的水蜜桃切片，是炎熱夏季裡的奢華享受。 【選項解析】(A) peaches 水蜜桃  (B) potatoes 馬鈴薯  (C) creams 奶油  (D) pumpkins 南瓜。high mountain orchards 出產甜美的 peaches。",
    "vocabIndex": 1
  },
  {
    "q": "Traditional bakeries in Taichung bake golden square cakes filled with sweet ______ paste that foreigners love.",
    "options": [
      "potato",
      "cream",
      "pineapple",
      "watermelon"
    ],
    "answer": 2,
    "cn": "台中傳統糕餅店烘焙填入香甜鳳梨餡的金黃方形酥餅，深受外國人喜愛。 【選項解析】(A) potato 馬鈴薯  (B) pineapple 鳳梨  (C) cream 鮮奶油  (D) watermelon 西瓜。pineapple cakes 指鳳梨酥。",
    "vocabIndex": 3
  },
  {
    "q": "The chef boiled several large brown ______ until soft and mashed them with butter, garlic, and fresh cream.",
    "options": [
      "papayas",
      "potatoes",
      "watermelons",
      "strawberries"
    ],
    "answer": 1,
    "cn": "大廚將幾顆大褐皮馬鈴薯煮至軟爛，並加入奶油、蒜頭與新鮮鮮奶油一起壓成馬鈴薯泥。 【選項解析】(A) potatoes 馬鈴薯  (B) papayas 木瓜  (C) watermelons 西瓜  (D) peaches 桃子。壓泥做成薯泥的蔬菜為 potatoes。",
    "vocabIndex": 4
  },
  {
    "q": "On Thanksgiving Day, families across America bake fragrant spiced pies filled with creamy orange ______ puree.",
    "options": [
      "pumpkin",
      "pear",
      "potato",
      "watermelon"
    ],
    "answer": 0,
    "cn": "在感恩節這一天，全美各個家庭都會烘烤填入綿密橘色南瓜泥的濃郁香料派。 【選項解析】(A) pear 水梨  (B) pumpkin 南瓜  (C) potato 馬鈴薯  (D) watermelon 西瓜。感恩節南瓜派使用 pumpkin puree。",
    "vocabIndex": 5
  },
  {
    "q": "The Asian variety of ______ has crisp, watery flesh and a delicate sweetness that tastes wonderful chilled.",
    "options": [
      "watermelon",
      "potato",
      "cream",
      "pear"
    ],
    "answer": 3,
    "cn": "亞洲水梨肉質清脆多汁、甜度清雅，冰鎮後食用口感極佳。 【選項解析】(A) pear 水梨  (B) potato 馬鈴薯  (C) cream 鮮奶油  (D) watermelon 西瓜。Asian pear 指亞洲水梨。",
    "vocabIndex": 2
  },
  {
    "q": "Peeling the loose orange skin of a sweet juicy ______ is easy and does not require a knife.",
    "options": [
      "watermelon",
      "tangerine",
      "potato",
      "cream"
    ],
    "answer": 1,
    "cn": "剝去香甜多汁小柑橘鬆軟的橘色外皮非常容易，完全不需要用到刀子。 【選項解析】(A) watermelon 西瓜  (B) tangerine 柑橘  (C) potato 馬鈴薯  (D) cream 奶油。外皮易剝的柑橘類為 tangerine。",
    "vocabIndex": 7
  },
  {
    "q": "The barista floated a rich spoonful of fresh dairy ______ on top of the dark roasted coffee.",
    "options": [
      "potato",
      "watermelon",
      "pumpkin",
      "cream"
    ],
    "answer": 3,
    "cn": "咖啡師在深焙黑咖啡頂端，輕輕浮上一大匙濃郁新鮮的乳脂鮮奶油。 【選項解析】(A) potato 馬鈴薯  (B) cream 鮮奶油  (C) pumpkin 南瓜  (D) watermelon 西瓜。加在咖啡上的乳製品為 dairy cream。",
    "vocabIndex": 9
  },
  {
    "q": "Blending ripe orange ______ with ice and cold milk creates a thick, creamy smoothie favored by locals.",
    "options": [
      "pumpkin",
      "potato",
      "papaya",
      "cream"
    ],
    "answer": 2,
    "cn": "將成熟橘紅的木瓜與冰塊及冷牛奶一起攪打，能調製出深受當地人喜愛的濃郁奶昔冰沙。 【選項解析】(A) papaya 木瓜  (B) potato 馬鈴薯  (C) pumpkin 南瓜  (D) cream 奶油。打成橘色牛奶冰沙為 papaya。",
    "vocabIndex": 0
  },
  {
    "q": "In the heat of midsummer, beachgoers love cutting open a sweet green ______ and sharing the cold red slices.",
    "options": [
      "watermelon",
      "potato",
      "pear",
      "pumpkin"
    ],
    "answer": 0,
    "cn": "在盛夏酷暑中，去海灘的人們最喜歡切開香甜的綠皮西瓜，分享冰涼的紅果肉切片。 【選項解析】(A) potato 馬鈴薯  (B) watermelon 西瓜  (C) pear 水梨  (D) pumpkin 南瓜。綠皮紅肉的水果為 watermelon。",
    "vocabIndex": 8
  },
  {
    "q": "Topping a slice of rich chocolate cake with fresh red ______ and powdered sugar makes an irresistible dessert.",
    "options": [
      "pumpkins",
      "potatoes",
      "strawberries",
      "creams"
    ],
    "answer": 2,
    "cn": "在一片濃郁巧克力蛋糕上點綴新鮮紅草莓並撒上糖粉，是令人難以抗拒的甜點。 【選項解析】(A) strawberries 草莓  (B) potatoes 馬鈴薯  (C) pumpkins 南瓜  (D) creams 奶油。搭配蛋糕的新鮮紅莓為 strawberries。",
    "vocabIndex": 6
  },
  {
    "q": "Farmers in Lala Mountain take extra care to protect tender white ______ from damaging wind and insects.",
    "options": [
      "potatoes",
      "peaches",
      "pumpkins",
      "creams"
    ],
    "answer": 1,
    "cn": "拉拉山的農民格外用心保護嬌嫩的白肉水蜜桃，使其免受強風與害蟲的傷害。 【選項解析】(A) peaches 水蜜桃  (B) potatoes 馬鈴薯  (C) pumpkins 南瓜  (D) creams 奶油。拉拉山嬌嫩特產為 white peaches。",
    "vocabIndex": 1
  },
  {
    "q": "Taiwan produces sweet golden ______ with spineless leaves that can be eaten fresh without burning the tongue.",
    "options": [
      "potato",
      "pumpkin",
      "pear",
      "pineapple"
    ],
    "answer": 3,
    "cn": "台灣生產無刺葉片的香甜金黃鳳梨，現切生食也不會刮傷舌頭。 【選項解析】(A) potato 馬鈴薯  (B) pineapple 鳳梨  (C) pear 水梨  (D) pumpkin 南瓜。台灣金鑽金黃水果為 pineapple。",
    "vocabIndex": 3
  },
  {
    "q": "Crispy French fries are made by cutting fresh ______ into thin strips and frying them in bubbling hot oil.",
    "options": [
      "potatoes",
      "papayas",
      "watermelons",
      "peaches"
    ],
    "answer": 0,
    "cn": "香脆的炸薯條是將新鮮馬鈴薯切成細條，再放入滾燙熱油中油炸而成。 【選項解析】(A) potatoes 馬鈴薯  (B) papayas 木瓜  (C) watermelons 西瓜  (D) peaches 桃子。炸薯條（French fries）原料為 potatoes。",
    "vocabIndex": 4
  },
  {
    "q": "Carving spooky faces into hollowed-out orange ______ is an ancient folk custom celebrated every October.",
    "options": [
      "creams",
      "potatoes",
      "pears",
      "pumpkins"
    ],
    "answer": 3,
    "cn": "在挖空的橘色大南瓜上雕刻搞怪的笑臉，是每年十月慶祝的古老民間習俗。 【選項解析】(A) pumpkins 南瓜  (B) potatoes 馬鈴薯  (C) pears 水梨  (D) creams 鮮奶油。萬聖節雕刻用的橘色瓜為 pumpkins。",
    "vocabIndex": 5
  },
  {
    "q": "Slicing a crisp green Asian ______ provides instant cool hydration during long afternoon hikes.",
    "options": [
      "cream",
      "potato",
      "pear",
      "pumpkin"
    ],
    "answer": 2,
    "cn": "在漫長的午後徒步健行中，切一片清脆的綠色亞洲水梨能提供即時的清涼與水分。 【選項解析】(A) pear 水梨  (B) potato 馬鈴薯  (C) cream 奶油  (D) pumpkin 南瓜。水分飽滿的清脆水果為 pear。",
    "vocabIndex": 2
  },
  {
    "q": "Placing bowls of bright orange ______ on the altar during spring festivals is believed to invite good fortune.",
    "options": [
      "potatoes",
      "tangerines",
      "watermelons",
      "creams"
    ],
    "answer": 1,
    "cn": "在春節祭拜神案上擺放幾碗鮮豔的橘子，被認為能夠招來吉祥與好運氣。 【選項解析】(A) tangerines 柑橘  (B) potatoes 馬鈴薯  (C) watermelons 西瓜  (D) creams 奶油。新年象徵吉利的水果為 tangerines。",
    "vocabIndex": 7
  },
  {
    "q": "The baker whisked heavy whipping ______ with vanilla extract and sugar until stiff peaks formed on the beaters.",
    "options": [
      "cream",
      "potato",
      "pumpkin",
      "watermelon"
    ],
    "answer": 0,
    "cn": "烘焙師將濃鮮奶油與香草精和糖一起攪打，直到打蛋器上形成堅挺的鮮奶油花。 【選項解析】(A) potato 馬鈴薯  (B) cream 鮮奶油  (C) pumpkin 南瓜  (D) watermelon 西瓜。打發製作擠花的是 heavy whipping cream。",
    "vocabIndex": 9
  },
  {
    "q": "Tropical fruit stands display large green ______ on ice beside ripe yellow mangoes and fresh coconuts.",
    "options": [
      "creams",
      "potatoes",
      "pumpkins",
      "papayas"
    ],
    "answer": 3,
    "cn": "熱帶水果攤在冰塊上展示著大顆綠皮木瓜，旁邊擺著成熟的黃芒果與新鮮椰子。 【選項解析】(A) papayas 木瓜  (B) potatoes 馬鈴薯  (C) pumpkins 南瓜  (D) creams 奶油。大型熱帶水果為 papayas。",
    "vocabIndex": 0
  },
  {
    "q": "Because this sweet red ______ contains more than ninety percent water, it is the best fruit for quenching summer thirst.",
    "options": [
      "potato",
      "watermelon",
      "cream",
      "pear"
    ],
    "answer": 1,
    "cn": "因為這種香甜的紅肉西瓜含水量超過百分之九十，所以是消解夏日乾渴的最佳水果。 【選項解析】(A) watermelon 西瓜  (B) potato 馬鈴薯  (C) cream 鮮奶油  (D) pear 水梨。含水量逾90%的消暑水果為 watermelon。",
    "vocabIndex": 8
  },
  {
    "q": "Children dipped freshly picked ripe ______ into bowls of melted chocolate at the farm workshop.",
    "options": [
      "pumpkins",
      "potatoes",
      "strawberries",
      "creams"
    ],
    "answer": 2,
    "cn": "孩子們在農場工坊裡，將剛採摘下來的成熟紅草莓浸入一碗碗融化的巧克力中。 【選項解析】(A) strawberries 草莓  (B) potatoes 馬鈴薯  (C) pumpkins 南瓜  (D) creams 奶油。沾巧克力的經典水果為 strawberries。",
    "vocabIndex": 6
  },
  {
    "q": "Sweet high-altitude mountain ______ are packed carefully in padded foam nets to prevent bruising during shipment.",
    "options": [
      "peaches",
      "potatoes",
      "pumpkins",
      "creams"
    ],
    "answer": 0,
    "cn": "香甜的高山水蜜桃被小心翼翼地包裝在厚厚的發泡網中，以防在運送過程中碰撞瘀傷。 【選項解析】(A) peaches 水蜜桃  (B) potatoes 馬鈴薯  (C) pumpkins 南瓜  (D) creams 奶油。高山脆弱的水果為 mountain peaches。",
    "vocabIndex": 1
  },
  {
    "q": "Adding chunks of fresh sweet ______ to savory sweet-and-sour pork gives the traditional dish a delightful citrus twist.",
    "options": [
      "pumpkin",
      "potato",
      "pear",
      "pineapple"
    ],
    "answer": 3,
    "cn": "在美味的糖醋排骨中加入香甜的新鮮鳳梨塊，為這道傳統佳餚帶來令人愉悅的果香風味。 【選項解析】(A) pineapple 鳳梨  (B) potato 馬鈴薯  (C) pear 水梨  (D) pumpkin 南瓜。糖醋料理常見配料為 pineapple。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "papaya": {
    "pos": "n.",
    "en_def": "a tropical fruit with orange flesh and small black seeds",
    "cn_def": "木瓜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tropical fruit with orange flesh and small black seeds",
        "cn_def": "木瓜"
      }
    ]
  },
  "peach": {
    "pos": "n.",
    "en_def": "a soft round fruit with pink-yellow fuzzy skin and a large stone",
    "cn_def": "桃子；水蜜桃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a soft round fruit with pink-yellow fuzzy skin and a large stone",
        "cn_def": "桃子；水蜜桃"
      }
    ]
  },
  "pear": {
    "pos": "n.",
    "en_def": "a sweet fruit that is narrow near the stem and rounded at the bottom",
    "cn_def": "梨子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sweet fruit that is narrow near the stem and rounded at the bottom",
        "cn_def": "梨子"
      }
    ]
  },
  "pineapple": {
    "pos": "n.",
    "en_def": "a large tropical fruit with stiff leaves and sweet, yellow flesh",
    "cn_def": "鳳梨",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large tropical fruit with stiff leaves and sweet, yellow flesh",
        "cn_def": "鳳梨"
      }
    ]
  },
  "potato": {
    "pos": "n.",
    "en_def": "a round root vegetable with brown or yellow skin that grows underground",
    "cn_def": "馬鈴薯；洋芋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a round root vegetable with brown or yellow skin that grows underground",
        "cn_def": "馬鈴薯；洋芋"
      }
    ]
  },
  "pumpkin": {
    "pos": "n.",
    "en_def": "a large round orange vegetable often used for pies or soups",
    "cn_def": "南瓜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large round orange vegetable often used for pies or soups",
        "cn_def": "南瓜"
      }
    ]
  },
  "strawberry": {
    "pos": "n.",
    "en_def": "a small soft red fruit with tiny yellow seeds on its surface",
    "cn_def": "草莓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small soft red fruit with tiny yellow seeds on its surface",
        "cn_def": "草莓"
      }
    ]
  },
  "tangerine": {
    "pos": "n.",
    "en_def": "a small sweet citrus fruit with loose, easily peeled skin",
    "cn_def": "柑橘；小柑橘",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small sweet citrus fruit with loose, easily peeled skin",
        "cn_def": "柑橘；小柑橘"
      }
    ]
  },
  "watermelon": {
    "pos": "n.",
    "en_def": "a large heavy fruit with thick green skin and sweet red flesh with seeds",
    "cn_def": "西瓜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large heavy fruit with thick green skin and sweet red flesh with seeds",
        "cn_def": "西瓜"
      }
    ]
  },
  "cream": {
    "pos": "n.",
    "en_def": "the thick white liquid containing fat taken from milk",
    "cn_def": "鮮奶油；奶油",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the thick white liquid containing fat taken from milk",
        "cn_def": "鮮奶油；奶油"
      }
    ]
  },
  "pumpkins": {
    "pos": "",
    "en_def": "",
    "cn_def": "南瓜",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "南瓜"
      }
    ]
  },
  "strawberries": {
    "pos": "",
    "en_def": "",
    "cn_def": "草莓",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "草莓"
      }
    ]
  },
  "potatoes": {
    "pos": "",
    "en_def": "",
    "cn_def": "馬鈴薯",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "馬鈴薯"
      }
    ]
  },
  "creams": {
    "pos": "",
    "en_def": "",
    "cn_def": "鮮奶油",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鮮奶油"
      }
    ]
  },
  "peaches": {
    "pos": "",
    "en_def": "",
    "cn_def": "水蜜桃",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "水蜜桃"
      }
    ]
  },
  "papayas": {
    "pos": "",
    "en_def": "",
    "cn_def": "木瓜",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "木瓜"
      }
    ]
  },
  "watermelons": {
    "pos": "",
    "en_def": "",
    "cn_def": "西瓜",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "西瓜"
      }
    ]
  },
  "pears": {
    "pos": "",
    "en_def": "",
    "cn_def": "水梨",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "水梨"
      }
    ]
  },
  "tangerines": {
    "pos": "",
    "en_def": "",
    "cn_def": "柑橘",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "柑橘"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
