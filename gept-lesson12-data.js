// Lesson 12 Quiz Data: Dining Out, Kitchen Utensils & Cooking
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 12 - Dining Out, Kitchen Utensils & Cooking",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "brunch",
    "pos": "n.",
    "cn_def": "早午餐",
    "en_def": "a meal eaten late in the morning that combines breakfast and lunch",
    "sentence": "On Sunday mornings, our family likes to sleep late and go to a cozy cafe for {{BLANK}}.",
    "cn": "在星期天早晨，我們全家喜歡睡到自然醒，然後去一家溫馨的咖啡館享用早午餐。"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "cn_def": "自助餐廳；學校/公司員工餐廳",
    "en_def": "a restaurant where customers collect food on trays and pay at a register",
    "sentence": "High school students lined up with their plastic trays in the school {{BLANK}} to buy hot noodles.",
    "cn": "高中生們端著塑膠托盤在學校員工餐廳（自助餐廳）排隊購買熱麵。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "歐式自助餐；吃到飽餐飲",
    "en_def": "a meal where people serve themselves from a table of different dishes",
    "sentence": "The luxury hotel offered an amazing seafood {{BLANK}} with fresh crabs, prawns, and grilled fish.",
    "cn": "這家豪華飯店提供了令人驚嘆的海鮮自助餐，備有新鮮螃蟹、明蝦與烤魚。"
  },
  {
    "word": "pan",
    "pos": "n.",
    "cn_def": "平底鍋",
    "en_def": "a wide, shallow metal container used for frying or cooking food",
    "sentence": "Mother heated some olive oil in the frying {{BLANK}} before adding the diced garlic and onions.",
    "cn": "母親在平底鍋裡加熱了一些橄欖油，然後加入切碎的大蒜與洋蔥。"
  },
  {
    "word": "plate",
    "pos": "n.",
    "cn_def": "盤子",
    "en_def": "a flat, usually round dish from which food is eaten",
    "sentence": "The waiter carried a large white ceramic {{BLANK}} with grilled steak and roasted vegetables.",
    "cn": "服務生端著一個裝有烤牛排和烤蔬菜的白色大陶瓷盤子。"
  },
  {
    "word": "pot",
    "pos": "n.",
    "cn_def": "深鍋；湯鍋",
    "en_def": "a deep round container used for cooking stews, soups, or boiling water",
    "sentence": "Father placed a heavy metal {{BLANK}} of vegetable soup on the kitchen counter to cool.",
    "cn": "父親將一重金屬蔬菜湯鍋放在廚房流理台上使其冷卻。"
  },
  {
    "word": "saucer",
    "pos": "n.",
    "cn_def": "茶碟；茶托",
    "en_def": "a small, shallow curved dish placed under a teacup",
    "sentence": "The graceful lady picked up the delicate teacup and rested it gently on its matching {{BLANK}}.",
    "cn": "那位優雅的女士端起精緻的茶杯，並將它輕輕放在配套的茶碟上。"
  },
  {
    "word": "teapot",
    "pos": "n.",
    "cn_def": "茶壺",
    "en_def": "a container with a handle and spout used for making and serving tea",
    "sentence": "Grandpa poured steaming oolong tea from the purple clay {{BLANK}} into our tiny porcelain cups.",
    "cn": "爺爺從紫砂茶壺中倒出熱氣騰騰的烏龍茶到我們的細瓷小杯子裡。"
  },
  {
    "word": "wok",
    "pos": "n.",
    "cn_def": "炒鍋；中華炒鍋",
    "en_def": "a large, bowl-shaped pan used especially in Chinese cooking",
    "sentence": "The experienced chef stirred the sliced beef rapidly inside the hot iron {{BLANK}} over high heat.",
    "cn": "經驗豐富的主廚在大火上的熱鐵炒鍋內迅速翻炒牛肉片。"
  },
  {
    "word": "boil",
    "pos": "v.",
    "cn_def": "煮沸；水滾",
    "en_def": "to heat a liquid until bubbles rise to the surface",
    "sentence": "You should let the clean water {{BLANK}} completely before using it to prepare baby formula.",
    "cn": "你在用乾淨的水沖泡嬰兒奶粉之前，應該讓水完全煮沸。"
  }
];

const MCQS = [
  {
    "q": "Sleeping late on weekends is pleasant, so Susan often meets her college friends at 11 a.m. for ______.",
    "options": [
      "wok",
      "plate",
      "saucer",
      "brunch"
    ],
    "answer": 3,
    "cn": "週末睡晚很享受，所以蘇珊常在上午11點和大學朋友相約吃早午餐。 【選項解析】(A) brunch 早午餐  (B) plate 盤子  (C) saucer 茶碟  (D) wok 炒鍋。上午11點結合早餐與午餐為 brunch。",
    "vocabIndex": 0
  },
  {
    "q": "Every day at noon, hundreds of factory workers eat their lunch together in the company ______.",
    "options": [
      "cafeteria",
      "pan",
      "teapot",
      "pot"
    ],
    "answer": 0,
    "cn": "每天中午，數百名工廠作業員在公司自助餐廳一起吃午餐。 【選項解析】(A) pan 平底鍋  (B) cafeteria 員工/學生餐廳  (C) teapot 茶壺  (D) pot 鍋子。員工集體用餐場所為 cafeteria。",
    "vocabIndex": 1
  },
  {
    "q": "Because this restaurant serves an all-you-can-eat ______, customers can choose whatever dishes they prefer.",
    "options": [
      "plate",
      "saucer",
      "buffet",
      "wok"
    ],
    "answer": 2,
    "cn": "因為這家餐廳提供吃到飽自助餐，顧客可以自由挑選喜歡的菜餚。 【選項解析】(A) plate 盤子  (B) saucer 茶碟  (C) buffet 自助餐  (D) wok 炒鍋。all-you-can-eat buffet（吃到飽自助餐）。",
    "vocabIndex": 2
  },
  {
    "q": "Dad heated some butter in the flat frying ______ and cooked delicious sunny-side-up eggs for everyone.",
    "options": [
      "saucer",
      "pan",
      "teapot",
      "brunch"
    ],
    "answer": 1,
    "cn": "爸爸在平底煎鍋中加熱了一些奶油，為大家煎了美味的太陽蛋。 【選項解析】(A) saucer 茶碟  (B) brunch 早午餐  (C) teapot 茶壺  (D) pan 平底鍋。frying pan 為平底煎鍋。",
    "vocabIndex": 3
  },
  {
    "q": "The waiter accidentally dropped the porcelain ______ on the floor, and it broke into three sharp pieces.",
    "options": [
      "buffet",
      "cafeteria",
      "brunch",
      "plate"
    ],
    "answer": 3,
    "cn": "服務生不小心把瓷盤掉在地板上，碎成了三塊鋒利的碎片。 【選項解析】(A) plate 盤子  (B) cafeteria 餐廳  (C) brunch 早午餐  (D) buffet 自助餐。porcelain plate（瓷盤）。",
    "vocabIndex": 4
  },
  {
    "q": "Grandmother cooked a fragrant beef stew inside a large stainless steel ______ for over three hours.",
    "options": [
      "saucer",
      "pot",
      "plate",
      "buffet"
    ],
    "answer": 1,
    "cn": "祖母在大不鏽鋼湯鍋中燉煮香濃的燉牛肉超過三個小時。 【選項解析】(A) saucer 茶碟  (B) pot 湯鍋  (C) plate 盤子  (D) buffet 自助餐。燉湯用深鍋 pot。",
    "vocabIndex": 5
  },
  {
    "q": "The tea spilled slightly over the rim of the cup, but luckily it fell onto the ceramic ______ underneath.",
    "options": [
      "wok",
      "cafeteria",
      "saucer",
      "pan"
    ],
    "answer": 2,
    "cn": "茶水從杯緣稍微溢出，但幸好落在了下方的陶瓷茶碟上。 【選項解析】(A) wok 炒鍋  (B) cafeteria 餐廳  (C) saucer 茶碟  (D) pan 平底鍋。茶杯下方的托盤為 saucer。",
    "vocabIndex": 6
  },
  {
    "q": "Mother filled the ceramic ______ with dried green tea leaves and poured boiling spring water into it.",
    "options": [
      "teapot",
      "plate",
      "pan",
      "buffet"
    ],
    "answer": 0,
    "cn": "媽媽將乾燥綠茶葉放進陶瓷茶壺中，並倒入沸騰的泉水。 【選項解析】(A) teapot 茶壺  (B) plate 盤子  (C) pan 平底鍋  (D) buffet 自助餐。泡茶容器為 teapot。",
    "vocabIndex": 7
  },
  {
    "q": "In traditional Chinese cuisine, fried rice tastes much better when tossed skillfully inside a round iron ______.",
    "options": [
      "saucer",
      "wok",
      "brunch",
      "cafeteria"
    ],
    "answer": 1,
    "cn": "在傳統中式料理中，炒飯在圓形鐵炒鍋中熟練翻炒會更美味。 【選項解析】(A) saucer 茶碟  (B) cafeteria 餐廳  (C) brunch 早午餐  (D) wok 中式炒鍋。中式熱鍋翻炒為 iron wok。",
    "vocabIndex": 8
  },
  {
    "q": "Before dropping the dry noodles into the soup, make sure the seasoned broth begins to ______.",
    "options": [
      "skin",
      "tear",
      "boil",
      "cough"
    ],
    "answer": 2,
    "cn": "在將乾麵條放入湯裡之前，確保調味過的高湯已經開始沸騰。 【選項解析】(A) skin 擦破皮  (B) boil 煮沸  (C) tear 撕開  (D) cough 咳嗽。高湯沸騰用 boil。",
    "vocabIndex": 9
  },
  {
    "q": "We were not hungry at 8 a.m., so we decided to skip breakfast and enjoy a relaxing weekend ______.",
    "options": [
      "plate",
      "saucer",
      "pan",
      "brunch"
    ],
    "answer": 3,
    "cn": "我們早上八點還不餓，所以決定省略早餐，享受放鬆的週末早午餐。 【選項解析】(A) plate 盤子  (B) saucer 茶碟  (C) brunch 早午餐  (D) pan 平底鍋。跳過早餐直接吃 brunch。",
    "vocabIndex": 0
  },
  {
    "q": "Students can buy sandwiches, fruit, and bottled milk at reasonable prices inside the university ______.",
    "options": [
      "cafeteria",
      "wok",
      "teapot",
      "pot"
    ],
    "answer": 0,
    "cn": "學生可以在大學學生餐廳內以合理價格買到三明治、水果與瓶裝牛奶。 【選項解析】(A) wok 炒鍋  (B) cafeteria 學校餐廳  (C) teapot 茶壺  (D) pot 鍋子。大學校園餐廳用 university cafeteria。",
    "vocabIndex": 1
  },
  {
    "q": "The wedding reception featured an enormous international ______ with dishes from Japan, Italy, and France.",
    "options": [
      "saucer",
      "plate",
      "buffet",
      "pan"
    ],
    "answer": 2,
    "cn": "這場婚宴備有盛大的國際自助餐，供應來自日本、義大利與法國的菜餚。 【選項解析】(A) buffet 自助餐  (B) plate 盤子  (C) saucer 茶碟  (D) pan 平底鍋。international buffet（國際自助餐）。",
    "vocabIndex": 2
  },
  {
    "q": "Be careful not to touch the hot handle of the frying ______ with your bare hand while cooking.",
    "options": [
      "pan",
      "saucer",
      "plate",
      "brunch"
    ],
    "answer": 0,
    "cn": "烹飪時請小心不要用徒手去碰平底煎鍋發燙的手把。 【選項解析】(A) brunch 早午餐  (B) saucer 茶碟  (C) plate 盤子  (D) pan 平底鍋。frying pan handle（平底鍋手把）。",
    "vocabIndex": 3
  },
  {
    "q": "Uncle George piled grilled chicken and sweet corn onto his ceramic ______ during the backyard party.",
    "options": [
      "teapot",
      "plate",
      "wok",
      "saucer"
    ],
    "answer": 1,
    "cn": "後院派對期間，喬治叔叔在他的瓷盤上堆滿了烤雞與甜玉米。 【選項解析】(A) plate 盤子  (B) teapot 茶壺  (C) wok 炒鍋  (D) saucer 茶碟。盛裝食物於 plate 上。",
    "vocabIndex": 4
  },
  {
    "q": "Put the dirty soup ______ into the kitchen sink and soak it in warm soapy water for an hour.",
    "options": [
      "brunch",
      "saucer",
      "buffet",
      "pot"
    ],
    "answer": 3,
    "cn": "把油膩的湯鍋放進廚房水槽，浸泡在溫肥皂水裡一小時。 【選項解析】(A) brunch 早午餐  (B) pot 湯鍋  (C) buffet 自助餐  (D) saucer 茶碟。soup pot（湯鍋）。",
    "vocabIndex": 5
  },
  {
    "q": "A small decorative spoon was placed neatly beside the coffee cup on top of the small ______.",
    "options": [
      "wok",
      "saucer",
      "plate",
      "pan"
    ],
    "answer": 1,
    "cn": "一把小裝飾匙整齊地擺放在咖啡杯旁的小茶碟上。 【選項解析】(A) wok 炒鍋  (B) plate 盤子  (C) saucer 茶碟  (D) pan 平底鍋。杯子下方的碟子為 saucer。",
    "vocabIndex": 6
  },
  {
    "q": "The tourist bought a beautiful antique purple clay ______ as a souvenir during his trip to Yingge.",
    "options": [
      "plate",
      "cafeteria",
      "teapot",
      "buffet"
    ],
    "answer": 2,
    "cn": "這位觀光客在鶯歌之旅中買了一件漂亮的仿古紫砂茶壺作為紀念品。 【選項解析】(A) plate 盤子  (B) teapot 茶壺  (C) cafeteria 餐廳  (D) buffet 自助餐。purple clay teapot（紫砂茶壺）。",
    "vocabIndex": 7
  },
  {
    "q": "Street food vendors in the night market stir-fry fresh vegetables vigorously using a very hot ______.",
    "options": [
      "wok",
      "brunch",
      "teapot",
      "saucer"
    ],
    "answer": 0,
    "cn": "夜市街頭攤販使用高溫的中華炒鍋奮力翻炒新鮮蔬菜。 【選項解析】(A) saucer 茶碟  (B) brunch 早午餐  (C) teapot 茶壺  (D) wok 炒鍋。熱鍋熱炒用 hot wok。",
    "vocabIndex": 8
  },
  {
    "q": "You must ______ the fresh chicken eggs in hot water for six minutes to make soft-boiled yolks.",
    "options": [
      "quit",
      "pray",
      "praise",
      "boil"
    ],
    "answer": 3,
    "cn": "你必須把新鮮雞蛋放在熱水中煮六分鐘，才能做出半熟蛋黃。 【選項解析】(A) boil 煮沸  (B) pray 祈禱  (C) praise 讚揚  (D) quit 放棄。水煮蛋用 boil。",
    "vocabIndex": 9
  },
  {
    "q": "Many trendy restaurants in Taipei are crowded on Sunday mornings because young people love meeting for ______.",
    "options": [
      "wok",
      "brunch",
      "plate",
      "saucer"
    ],
    "answer": 1,
    "cn": "台北很多時髦餐廳在週日早晨客滿，因為年輕人喜歡相約吃早午餐。 【選項解析】(A) wok 炒鍋  (B) plate 盤子  (C) brunch 早午餐  (D) saucer 茶碟。Sunday morning brunch（週日早午餐）。",
    "vocabIndex": 0
  },
  {
    "q": "During the lunch break, hospital nurses and doctors usually gather to eat nutritious meals in the staff ______.",
    "options": [
      "cafeteria",
      "pan",
      "teapot",
      "saucer"
    ],
    "answer": 0,
    "cn": "午休時間，醫院的護理師和醫師通常聚集在員工餐廳享用營養餐點。 【選項解析】(A) pan 平底鍋  (B) cafeteria 員工餐廳  (C) teapot 茶壺  (D) saucer 茶碟。staff cafeteria（員工餐廳）。",
    "vocabIndex": 1
  },
  {
    "q": "Eating at a hotel dinner ______ allows guests to sample twenty different desserts in one evening.",
    "options": [
      "wok",
      "pot",
      "buffet",
      "plate"
    ],
    "answer": 2,
    "cn": "在飯店享用自助晚餐讓賓客能在一個晚上品嚐二十種不同甜點。 【選項解析】(A) buffet 自助餐  (B) pot 鍋子  (C) wok 炒鍋  (D) plate 盤子。hotel dinner buffet（飯店自助晚餐）。",
    "vocabIndex": 2
  },
  {
    "q": "Use a wooden spatula when cooking fish in a non-stick ______ so that you do not scratch the surface.",
    "options": [
      "brunch",
      "saucer",
      "teapot",
      "pan"
    ],
    "answer": 3,
    "cn": "在不沾平底鍋裡煎魚時請使用木鏟，這樣才不會刮傷鍋面。 【選項解析】(A) brunch 早午餐  (B) saucer 茶碟  (C) teapot 茶壺  (D) pan 平底鍋。non-stick pan（不沾平底鍋）。",
    "vocabIndex": 3
  },
  {
    "q": "When the kettle whistle sounds, it indicates that the clean water inside has reached a vigorous ______.",
    "options": [
      "serve",
      "hire",
      "boil",
      "cough"
    ],
    "answer": 2,
    "cn": "當水壺鳴笛聲響起時，代表裡面的水已經達到劇烈沸騰狀態。 【選項解析】(A) boil 沸騰  (B) hire 僱用  (C) serve 服務  (D) cough 咳嗽。reached a vigorous boil（達到劇烈沸騰）。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "brunch": {
    "pos": "n.",
    "en_def": "a meal eaten late in the morning that combines breakfast and lunch",
    "cn_def": "早午餐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meal eaten late in the morning that combines breakfast and lunch",
        "cn_def": "早午餐"
      }
    ]
  },
  "cafeteria": {
    "pos": "n.",
    "en_def": "a restaurant where customers collect food on trays and pay at a register",
    "cn_def": "自助餐廳；學校/公司員工餐廳",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a restaurant where customers collect food on trays and pay at a register",
        "cn_def": "自助餐廳；學校/公司員工餐廳"
      }
    ]
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where people serve themselves from a table of different dishes",
    "cn_def": "歐式自助餐；吃到飽餐飲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meal where people serve themselves from a table of different dishes",
        "cn_def": "歐式自助餐；吃到飽餐飲"
      }
    ]
  },
  "pan": {
    "pos": "n.",
    "en_def": "a wide, shallow metal container used for frying or cooking food",
    "cn_def": "平底鍋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a wide, shallow metal container used for frying or cooking food",
        "cn_def": "平底鍋"
      }
    ]
  },
  "plate": {
    "pos": "n.",
    "en_def": "a flat, usually round dish from which food is eaten",
    "cn_def": "盤子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat, usually round dish from which food is eaten",
        "cn_def": "盤子"
      }
    ]
  },
  "pot": {
    "pos": "n.",
    "en_def": "a deep round container used for cooking stews, soups, or boiling water",
    "cn_def": "深鍋；湯鍋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a deep round container used for cooking stews, soups, or boiling water",
        "cn_def": "深鍋；湯鍋"
      }
    ]
  },
  "saucer": {
    "pos": "n.",
    "en_def": "a small, shallow curved dish placed under a teacup",
    "cn_def": "茶碟；茶托",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, shallow curved dish placed under a teacup",
        "cn_def": "茶碟；茶托"
      }
    ]
  },
  "teapot": {
    "pos": "n.",
    "en_def": "a container with a handle and spout used for making and serving tea",
    "cn_def": "茶壺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a container with a handle and spout used for making and serving tea",
        "cn_def": "茶壺"
      }
    ]
  },
  "wok": {
    "pos": "n.",
    "en_def": "a large, bowl-shaped pan used especially in Chinese cooking",
    "cn_def": "炒鍋；中華炒鍋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, bowl-shaped pan used especially in Chinese cooking",
        "cn_def": "炒鍋；中華炒鍋"
      }
    ]
  },
  "boil": {
    "pos": "v.",
    "en_def": "to heat a liquid until bubbles rise to the surface",
    "cn_def": "煮沸；水滾",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to heat a liquid until bubbles rise to the surface",
        "cn_def": "煮沸；水滾"
      }
    ]
  },
  "skin": {
    "pos": "",
    "en_def": "",
    "cn_def": "擦破皮",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擦破皮"
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
  "quit": {
    "pos": "",
    "en_def": "",
    "cn_def": "放棄",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "放棄"
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
  "praise": {
    "pos": "",
    "en_def": "",
    "cn_def": "讚揚",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "讚揚"
      }
    ]
  },
  "serve": {
    "pos": "",
    "en_def": "",
    "cn_def": "服務",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "服務"
      }
    ]
  },
  "hire": {
    "pos": "",
    "en_def": "",
    "cn_def": "僱用",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "僱用"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
