// Lesson 8 Quiz Data: Vegetables, Grains & Common Produce
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 8 - Vegetables, Grains & Common Produce",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bean",
    "pos": "n.",
    "cn_def": "豆莢；豆子",
    "en_def": "an edible seed or pod of certain plants, especially used for food",
    "sentence": "Mom cooked a pot of hearty beef stew with green {{BLANK}} and potatoes, so our whole family enjoyed a warm dinner.",
    "cn": "媽媽用四季豆和馬鈴薯燉煮了一鍋熱氣騰騰的牛肉煲，所以我們全家人享受了一頓溫暖的晚餐。"
  },
  {
    "word": "cabbage",
    "pos": "n.",
    "cn_def": "高麗菜；包心菜",
    "en_def": "a large round vegetable with thick green or purple leaves",
    "sentence": "The chef chopped fresh green {{BLANK}} finely to make crispy vegetable dumplings and spicy pickled side dishes.",
    "cn": "主廚將新鮮翠綠的高麗菜切得碎碎的，以製作香脆蔬菜水餃與香辣醃漬小菜。"
  },
  {
    "word": "carrot",
    "pos": "n.",
    "cn_def": "胡蘿蔔",
    "en_def": "a long, thin, orange vegetable that grows underground",
    "sentence": "The little girl fed a sweet, crunchy {{BLANK}} to the hungry white rabbit in the kindergarten pet corner.",
    "cn": "小女孩在幼兒園的寵物角落，將一根香甜酥脆的胡蘿蔔餵給飢餓的白兔。"
  },
  {
    "word": "cereal",
    "pos": "n.",
    "cn_def": "穀類食品；麥片",
    "en_def": "a grain used for food, such as wheat or oats, often eaten with milk",
    "sentence": "Every morning before heading to school, Jason pours cold milk over a bowl of crunchy whole-grain {{BLANK}}.",
    "cn": "每天早晨上學前，傑森都會將冰牛奶倒進一碗香脆的全穀麥片中。"
  },
  {
    "word": "corn",
    "pos": "n.",
    "cn_def": "玉米",
    "en_def": "a tall plant that produces yellow grains on large ears",
    "sentence": "Night market vendors grill sweet yellow {{BLANK}} over charcoal and brush it with savory soy sauce for tourists.",
    "cn": "夜市攤販在炭火上碳烤香甜的黃玉米，並為遊客刷上鹹香的醬油醬汁。"
  },
  {
    "word": "grape",
    "pos": "n.",
    "cn_def": "葡萄",
    "en_def": "a small round green or purple fruit that grows in bunches",
    "sentence": "The French farmer harvested thousands of ripe purple {{BLANK}}s from the vineyard to produce award-winning wine.",
    "cn": "法國農夫從葡萄園裡採收了數千顆成熟的紫葡萄，以釀造屢獲殊榮的葡萄酒。"
  },
  {
    "word": "guava",
    "pos": "n.",
    "cn_def": "芭樂；番石榴",
    "en_def": "a tropical fruit with green skin, sweet pink or white flesh, and seeds",
    "sentence": "Taiwanese farmers grow delicious crisp {{BLANK}} in Changhua, and locals love to sprinkle plum powder over sliced pieces.",
    "cn": "台灣農民在彰化種植香脆可口的芭樂，當地人非常喜歡在切片上撒上甘梅粉食用。"
  },
  {
    "word": "lettuce",
    "pos": "n.",
    "cn_def": "萵苣；生菜",
    "en_def": "a leafy green vegetable used especially in raw salads or burgers",
    "sentence": "The waiter layered crisp green {{BLANK}} and ripe red tomatoes between the toasted bread to make a club sandwich.",
    "cn": "服務生在烘烤過的吐司之間夾入清脆綠萵苣與熟透紅番茄，製作了一份總匯三明治。"
  },
  {
    "word": "mango",
    "pos": "n.",
    "cn_def": "芒果",
    "en_def": "a tropical fruit with smooth yellow-red skin and sweet juicy yellow flesh",
    "sentence": "During hot summer afternoons, tourists line up outside dessert shops in Tainan to order shaved ice topped with fresh {{BLANK}}.",
    "cn": "在炎熱的夏日午後，遊客們在台南的甜品店外排隊，點選鋪滿新鮮芒果的芒果刨冰。"
  },
  {
    "word": "onion",
    "pos": "n.",
    "cn_def": "洋蔥",
    "en_def": "a round vegetable with many layers that has a strong smell and taste",
    "sentence": "When Samuel chopped the pungent white {{BLANK}} on the cutting board, his eyes watered so much that he had to wipe them.",
    "cn": "當塞繆爾在砧板上切嗆辣的白洋蔥時，他的眼睛流淚不止，不得不頻頻擦拭。"
  }
];

const MCQS = [
  {
    "q": "The market vendor recommended buying fresh sweet ______ from Tainan to make refreshing fruit shaved ice.",
    "options": [
      "bean",
      "onion",
      "mango",
      "cereal"
    ],
    "answer": 2,
    "cn": "市場攤商推薦購買來自台南的新鮮香甜芒果，以製作令人暑氣全消的水果刨冰。 【選項解析】(A) mango 芒果  (B) onion 洋蔥  (C) bean 豆子  (D) cereal 麥片。台南知名特產水果刨冰配料為 mango。",
    "vocabIndex": 8
  },
  {
    "q": "Whenever Linda chops a raw white ______ in the kitchen, its pungent sulfur scent makes her eyes water heavily.",
    "options": [
      "grape",
      "onion",
      "guava",
      "corn"
    ],
    "answer": 1,
    "cn": "每當琳達在廚房切生白洋蔥時，其辛辣的氣味總是讓她眼淚流個不停。 【選項解析】(A) grape 葡萄  (B) onion 洋蔥  (C) guava 芭樂  (D) corn 玉米。切時讓人流淚的蔬菜為 onion。",
    "vocabIndex": 9
  },
  {
    "q": "The farmer showed the kindergarten children how to pull sweet orange ______ out of the loose black soil.",
    "options": [
      "cabbages",
      "beans",
      "cereals",
      "carrots"
    ],
    "answer": 3,
    "cn": "農夫向幼兒園的孩子們展示如何從鬆軟的黑土中拔出甜甜的橘色胡蘿蔔。 【選項解析】(A) cabbages 高麗菜  (B) carrots 胡蘿蔔  (C) cereals 穀物  (D) beans 豆類。橘色生長在泥土裡的為 carrots。",
    "vocabIndex": 2
  },
  {
    "q": "Slicing crisp green ______ and sprinkling sweet plum powder on top is a popular snack across night markets in Taiwan.",
    "options": [
      "guava",
      "onion",
      "cereal",
      "carrot"
    ],
    "answer": 0,
    "cn": "切片清脆的綠芭樂並撒上甘甜梅子粉，是台灣夜市廣受歡迎的休閒零嘴。 【選項解析】(A) guava 芭樂  (B) onion 洋蔥  (C) cereal 麥片  (D) carrot 胡蘿蔔。搭配梅子粉食用的清脆水果為 guava。",
    "vocabIndex": 6
  },
  {
    "q": "The fast food worker placed grilled beef patties, melted cheese, and crisp green ______ inside the toasted burger bun.",
    "options": [
      "bean",
      "cereal",
      "grape",
      "lettuce"
    ],
    "answer": 3,
    "cn": "快餐店員工將烤牛肉餅、融化的起司與清脆綠生菜夾入烤過的漢堡麵包中。 【選項解析】(A) bean 豆子  (B) lettuce 生菜  (C) grape 葡萄  (D) cereal 麥片。漢堡內夾的清脆生菜為 lettuce。",
    "vocabIndex": 7
  },
  {
    "q": "In the vineyard, the owner showed visitors how bunches of ripe dark purple ______ are picked to make sweet juice.",
    "options": [
      "carrots",
      "grapes",
      "cabbages",
      "onions"
    ],
    "answer": 1,
    "cn": "在葡萄園裡，園主向遊客展示如何採摘成串成熟的深紫葡萄來製作甜果汁。 【選項解析】(A) carrots 胡蘿蔔  (B) grapes 葡萄  (C) cabbages 高麗菜  (D) onions 洋蔥。葡萄園（vineyard）生產的是 grapes。",
    "vocabIndex": 5
  },
  {
    "q": "Pouring warm milk over a bowl of honey-toasted ______ is Oliver's favorite quick breakfast before catching the morning train.",
    "options": [
      "cereal",
      "cabbage",
      "guava",
      "lettuce"
    ],
    "answer": 0,
    "cn": "將熱牛奶倒進一碗蜂蜜烤麥片中，是奧利佛趕早班火車前最喜歡的快速早餐。 【選項解析】(A) cabbage 高麗菜  (B) cereal 麥片  (C) guava 芭樂  (D) lettuce 萵苣。配牛奶吃的早餐穀物為 cereal。",
    "vocabIndex": 3
  },
  {
    "q": "The soup smelled wonderful because grandmother simmered pork ribs with sweet yellow ______ for over two hours.",
    "options": [
      "lettuce",
      "grape",
      "corn",
      "mango"
    ],
    "answer": 2,
    "cn": "這鍋湯聞起來棒極了，因為祖母將排骨與香甜黃玉米一起慢火燉煮了兩個多小時。 【選項解析】(A) corn 玉米  (B) grape 葡萄  (C) lettuce 生菜  (D) mango 芒果。煲排骨湯常見的黃色蔬菜為 corn。",
    "vocabIndex": 4
  },
  {
    "q": "The restaurant chef stir-fried shredded ______ with garlic and dried shrimp to serve as an authentic Taiwanese side dish.",
    "options": [
      "grape",
      "cabbage",
      "mango",
      "cereal"
    ],
    "answer": 1,
    "cn": "餐廳大廚用大蒜和蝦米熱炒切絲的高麗菜，作為一道道地的台灣家常菜。 【選項解析】(A) grape 葡萄  (B) cabbage 高麗菜  (C) mango 芒果  (D) cereal 麥片。炒蒜泥蝦米蔬菜為 cabbage。",
    "vocabIndex": 1
  },
  {
    "q": "Vegetarians often eat soy ______ and tofu to ensure they consume sufficient dietary protein every day.",
    "options": [
      "lettuces",
      "onions",
      "guavas",
      "beans"
    ],
    "answer": 3,
    "cn": "素食者常吃大豆和豆腐，以確保每天攝取足夠的膳食蛋白質。 【選項解析】(A) beans 豆類  (B) onions 洋蔥  (C) guavas 芭樂  (D) lettuces 萵苣。soy beans 指大豆/黃豆。",
    "vocabIndex": 0
  },
  {
    "q": "Juicy yellow slices of ripe ______ were served alongside vanilla ice cream as a special seasonal summer dessert.",
    "options": [
      "onion",
      "cabbage",
      "mango",
      "carrot"
    ],
    "answer": 2,
    "cn": "香甜多汁的熟黃芒果切片與香草冰淇淋一同端上桌，作為特別的季節性夏季甜點。 【選項解析】(A) mango 芒果  (B) cabbage 高麗菜  (C) onion 洋蔥  (D) carrot 胡蘿蔔。夏季黃色多汁水果為 mango。",
    "vocabIndex": 8
  },
  {
    "q": "Caramelizing sliced brown ______ in melted butter gives French soup its distinctive rich aroma and deep golden color.",
    "options": [
      "onions",
      "grapes",
      "cereals",
      "guavas"
    ],
    "answer": 0,
    "cn": "用融化奶油慢炒焦化切片棕洋蔥，賦予了法式洋蔥湯獨特的濃郁香氣與金黃色澤。 【選項解析】(A) grapes 葡萄  (B) onions 洋蔥  (C) cereals 麥片  (D) guavas 芭樂。法式濃湯的主角為 onions。",
    "vocabIndex": 9
  },
  {
    "q": "Rabbits and horses enjoy chewing on fresh crunchy orange ______ picked straight from the vegetable garden.",
    "options": [
      "beans",
      "lettuces",
      "guavas",
      "carrots"
    ],
    "answer": 3,
    "cn": "兔子和馬喜歡咀嚼直接從蔬菜園現拔出來的新鮮酥脆橘色胡蘿蔔。 【選項解析】(A) beans 豆子  (B) carrots 胡蘿蔔  (C) guavas 芭樂  (D) lettuces 生菜。兔子馬匹愛吃的橘色蔬菜為 carrots。",
    "vocabIndex": 2
  },
  {
    "q": "We bought a large basket of crispy white ______ at the farmers' market and shared it with our relatives during the picnic.",
    "options": [
      "cereal",
      "onion",
      "guava",
      "carrot"
    ],
    "answer": 2,
    "cn": "我們在農夫市集買了一大籃香脆白肉芭樂，並在野餐時與親戚們一同分享。 【選項解析】(A) cereal 麥片  (B) guava 芭樂  (C) onion 洋蔥  (D) carrot 胡蘿蔔。crispy white guava 指香脆白肉芭樂。",
    "vocabIndex": 6
  },
  {
    "q": "To make a healthy Mediterranean salad, toss chopped green ______ with olive oil, lemon juice, and feta cheese.",
    "options": [
      "grape",
      "lettuce",
      "corn",
      "cereal"
    ],
    "answer": 1,
    "cn": "製作健康的地中海沙拉時，將切碎的綠萵苣與橄欖油、檸檬汁及羊乳酪輕輕拌勻。 【選項解析】(A) grape 葡萄  (B) lettuce 生菜  (C) corn 玉米  (D) cereal 麥片。沙拉底層綠葉為 lettuce。",
    "vocabIndex": 7
  },
  {
    "q": "Wine makers in central Italy harvest tons of red ______ every September to produce world-class dry wines.",
    "options": [
      "grapes",
      "cabbages",
      "beans",
      "onions"
    ],
    "answer": 0,
    "cn": "義大利中部的釀酒業者每年九月採收數噸紅葡萄，以釀造世界頂級的乾紅葡萄酒。 【選項解析】(A) grapes 葡萄  (B) cabbages 高麗菜  (C) beans 豆類  (D) onions 洋蔥。釀造葡萄酒原料為 grapes。",
    "vocabIndex": 5
  },
  {
    "q": "Eating a nutritious whole-wheat ______ with sliced bananas gives young athletes steady energy throughout morning practice.",
    "options": [
      "guava",
      "cereal",
      "cabbage",
      "lettuce"
    ],
    "answer": 1,
    "cn": "食用營養豐富的全麥麥片搭配香蕉切片，能為年輕運動員在晨練期間提供穩定的能量。 【選項解析】(A) guava 芭樂  (B) cereal 麥片  (C) cabbage 高麗菜  (D) lettuce 萵苣。全麥早點為 whole-wheat cereal。",
    "vocabIndex": 3
  },
  {
    "q": "Moviegoers love to buy large buckets of freshly popped ______ coated with melted butter and sugar before entering the theater.",
    "options": [
      "mango",
      "carrot",
      "guava",
      "corn"
    ],
    "answer": 3,
    "cn": "進電影院前，影迷們最喜歡購買塗滿融化奶油和糖的大桶現爆爆米花。 【選項解析】(A) corn 玉米  (B) carrot 胡蘿蔔  (C) guava 芭樂  (D) mango 芒果。popped corn 即爆米花 popcorn。",
    "vocabIndex": 4
  },
  {
    "q": "Grandma chopped an entire head of green ______ to prepare traditional fermented kimchi for the upcoming winter season.",
    "options": [
      "grape",
      "cereal",
      "cabbage",
      "mango"
    ],
    "answer": 2,
    "cn": "祖母切了一整顆綠高麗菜，為即將到來的寒冷冬季醃製傳統發酵泡菜。 【選項解析】(A) grape 葡萄  (B) cabbage 高麗菜  (C) cereal 麥片  (D) mango 芒果。醃製泡菜常用 cabbage。",
    "vocabIndex": 1
  },
  {
    "q": "Green string ______ should be steamed gently with olive oil and seasoned with a pinch of sea salt.",
    "options": [
      "beans",
      "guavas",
      "onions",
      "carrots"
    ],
    "answer": 0,
    "cn": "綠四季豆應該用橄欖油輕輕清蒸，並撒上一小撮海鹽簡單調味即可。 【選項解析】(A) beans 豆類  (B) guavas 芭樂  (C) onions 洋蔥  (D) carrots 胡蘿蔔。green string beans 指四季豆。",
    "vocabIndex": 0
  },
  {
    "q": "Tropical fruit markets in southern Taiwan sell fresh ______ smoothies that attract long queues of thirsty tourists.",
    "options": [
      "cabbage",
      "onion",
      "mango",
      "cereal"
    ],
    "answer": 2,
    "cn": "南台灣的水果熱門攤位販售現打新鮮芒果冰沙，吸引了口渴遊客排起長長隊伍。 【選項解析】(A) mango 芒果  (B) onion 洋蔥  (C) cabbage 高麗菜  (D) cereal 麥片。現打冰沙特產為 mango smoothies。",
    "vocabIndex": 8
  },
  {
    "q": "Sautéing finely minced ______ and garlic is the essential first step in preparing delicious Italian tomato pasta sauce.",
    "options": [
      "grape",
      "corn",
      "guava",
      "onion"
    ],
    "answer": 3,
    "cn": "爆炒切碎的洋蔥末與蒜末，是烹調美味義大利番茄肉醬麵不可或缺的第一步。 【選項解析】(A) grape 葡萄  (B) onion 洋蔥  (C) guava 芭樂  (D) corn 玉米。義大利紅醬基底為 minced onion。",
    "vocabIndex": 9
  },
  {
    "q": "Drinking freshly squeezed juice made from sweet ______ and apples is known to provide high amounts of vitamin A.",
    "options": [
      "cabbages",
      "carrots",
      "onions",
      "beans"
    ],
    "answer": 1,
    "cn": "飲用香甜胡蘿蔔與蘋果現榨的新鮮蔬果汁，以富含極高的維生素A而聞名。 【選項解析】(A) cabbages 高麗菜  (B) carrots 胡蘿蔔  (C) onions 洋蔥  (D) beans 豆類。富含維生素A的橘色果汁原料為 carrots。",
    "vocabIndex": 2
  },
  {
    "q": "Rich in vitamin C and dietary fiber, crisp local ______ is one of the healthiest fruits you can eat on a daily basis.",
    "options": [
      "guava",
      "cereal",
      "onion",
      "cabbage"
    ],
    "answer": 0,
    "cn": "富含維生素C和膳食纖維的本土脆芭樂，是你可以天天食用的最健康水果之一。 【選項解析】(A) cereal 麥片  (B) guava 芭樂  (C) onion 洋蔥  (D) cabbage 高麗菜。維生素C極高的脆水果為 guava。",
    "vocabIndex": 6
  },
  {
    "q": "Fresh organic romaine ______ should be washed thoroughly under running water before being added to chicken wraps.",
    "options": [
      "bean",
      "grape",
      "lettuce",
      "cereal"
    ],
    "answer": 2,
    "cn": "新鮮的有機蘿蔓生菜在包入雞肉捲之前，應該先放在流動清水下徹底清洗乾淨。 【選項解析】(A) bean 豆子  (B) lettuce 生菜  (C) grape 葡萄  (D) cereal 麥片。romaine lettuce 指蘿蔓生菜。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "bean": {
    "pos": "n.",
    "en_def": "an edible seed or pod of certain plants, especially used for food",
    "cn_def": "豆莢；豆子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an edible seed or pod of certain plants, especially used for food",
        "cn_def": "豆莢；豆子"
      }
    ]
  },
  "cabbage": {
    "pos": "n.",
    "en_def": "a large round vegetable with thick green or purple leaves",
    "cn_def": "高麗菜；包心菜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large round vegetable with thick green or purple leaves",
        "cn_def": "高麗菜；包心菜"
      }
    ]
  },
  "carrot": {
    "pos": "n.",
    "en_def": "a long, thin, orange vegetable that grows underground",
    "cn_def": "胡蘿蔔",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long, thin, orange vegetable that grows underground",
        "cn_def": "胡蘿蔔"
      }
    ]
  },
  "cereal": {
    "pos": "n.",
    "en_def": "a grain used for food, such as wheat or oats, often eaten with milk",
    "cn_def": "穀類食品；麥片",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a grain used for food, such as wheat or oats, often eaten with milk",
        "cn_def": "穀類食品；麥片"
      }
    ]
  },
  "corn": {
    "pos": "n.",
    "en_def": "a tall plant that produces yellow grains on large ears",
    "cn_def": "玉米",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tall plant that produces yellow grains on large ears",
        "cn_def": "玉米"
      }
    ]
  },
  "grape": {
    "pos": "n.",
    "en_def": "a small round green or purple fruit that grows in bunches",
    "cn_def": "葡萄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small round green or purple fruit that grows in bunches",
        "cn_def": "葡萄"
      }
    ]
  },
  "guava": {
    "pos": "n.",
    "en_def": "a tropical fruit with green skin, sweet pink or white flesh, and seeds",
    "cn_def": "芭樂；番石榴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tropical fruit with green skin, sweet pink or white flesh, and seeds",
        "cn_def": "芭樂；番石榴"
      }
    ]
  },
  "lettuce": {
    "pos": "n.",
    "en_def": "a leafy green vegetable used especially in raw salads or burgers",
    "cn_def": "萵苣；生菜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a leafy green vegetable used especially in raw salads or burgers",
        "cn_def": "萵苣；生菜"
      }
    ]
  },
  "mango": {
    "pos": "n.",
    "en_def": "a tropical fruit with smooth yellow-red skin and sweet juicy yellow flesh",
    "cn_def": "芒果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tropical fruit with smooth yellow-red skin and sweet juicy yellow flesh",
        "cn_def": "芒果"
      }
    ]
  },
  "onion": {
    "pos": "n.",
    "en_def": "a round vegetable with many layers that has a strong smell and taste",
    "cn_def": "洋蔥",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a round vegetable with many layers that has a strong smell and taste",
        "cn_def": "洋蔥"
      }
    ]
  },
  "cabbages": {
    "pos": "",
    "en_def": "",
    "cn_def": "高麗菜",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "高麗菜"
      }
    ]
  },
  "beans": {
    "pos": "",
    "en_def": "",
    "cn_def": "豆類",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "豆類"
      }
    ]
  },
  "cereals": {
    "pos": "",
    "en_def": "",
    "cn_def": "穀物",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "穀物"
      }
    ]
  },
  "carrots": {
    "pos": "",
    "en_def": "",
    "cn_def": "胡蘿蔔",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "胡蘿蔔"
      }
    ]
  },
  "grapes": {
    "pos": "",
    "en_def": "",
    "cn_def": "葡萄",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "葡萄"
      }
    ]
  },
  "onions": {
    "pos": "",
    "en_def": "",
    "cn_def": "洋蔥",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "洋蔥"
      }
    ]
  },
  "lettuces": {
    "pos": "",
    "en_def": "",
    "cn_def": "萵苣",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "萵苣"
      }
    ]
  },
  "guavas": {
    "pos": "",
    "en_def": "",
    "cn_def": "芭樂",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "芭樂"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
