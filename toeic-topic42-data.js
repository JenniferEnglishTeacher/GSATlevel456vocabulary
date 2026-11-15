// Topic 42 Quiz Data: Cake 蛋糕
// Source word list: https://www.examword.com/group-topic/cake — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T42 - Cake 蛋糕",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "slice",
    "pos": "n.",
    "cn_def": "一片；一塊",
    "en_def": "a thin flat piece cut from something like cake or bread",
    "sentence": "A: The client meeting starts at three, and Mr. Lee asked for some light refreshments, so how much of the lemon cake should I bring to the conference room? B: Please cut it so that each of the twelve visitors can have one small {{BLANK}}, and put the rest in the staff kitchen for our team to enjoy later.",
    "cn": "A：客戶會議三點開始，李先生要求準備一些簡單的茶點，所以我該帶多少檸檬蛋糕到會議室？ B：請把它切好，讓十二位訪客每人都能拿到一小【片】，剩下的放到員工廚房，讓我們團隊晚點享用。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: Our café has received an order for fifty cupcakes for a company party on Saturday morning, so do you think we can finish them in time? B: If we start early on Friday afternoon and {{BLANK}} them in two batches, they will be ready, cooled, and packed before the delivery driver arrives.",
    "cn": "A：我們咖啡館接到一筆訂單，要為週六早上的公司派對準備五十個杯子蛋糕，你覺得我們來得及完成嗎？ B：如果我們週五下午早點開始，分兩批【烘烤】，它們就能在送貨司機抵達前烤好、放涼並包裝完成。"
  },
  {
    "word": "oven",
    "pos": "n.",
    "cn_def": "烤箱",
    "en_def": "a box-shaped machine that heats food so you can bake or cook it",
    "sentence": "A: The cakes in the bakery came out burned on one side again this morning, and two customers complained, so what do you think is causing the problem? B: I believe the old {{BLANK}} is not heating evenly anymore, so I have already asked the manager to call a technician and get a quote for a new one.",
    "cn": "A：今天早上麵包店的蛋糕又有一邊烤焦了，還有兩位客人抱怨，你覺得是什麼原因造成的？ B：我認為那台舊【烤箱】已經無法均勻加熱了，所以我已經請經理打電話找技師來，並請他們報價換一台新的。"
  },
  {
    "word": "flour",
    "pos": "n.",
    "cn_def": "麵粉",
    "en_def": "a white powder made from wheat, used to make bread and cakes",
    "sentence": "A: The supplier just called to say that our delivery of baking ingredients will be two days late because of the storm, so can we still make the wedding cake? B: We only have half a bag of {{BLANK}} left in the storeroom, so I will buy a few more kilograms from the supermarket on my way back from lunch.",
    "cn": "A：供應商剛打電話來說，因為暴風雨，我們的烘焙材料要晚兩天才會送到，那我們還能做婚禮蛋糕嗎？ B：儲藏室裡只剩下半袋【麵粉】了，所以我午餐回來的路上會去超市再多買幾公斤。"
  },
  {
    "word": "sugar",
    "pos": "n.",
    "cn_def": "糖",
    "en_def": "a sweet white or brown substance added to food and drinks",
    "sentence": "A: Several of our older customers have asked whether we could offer healthier desserts, so do you have any ideas for changing our popular carrot cake? B: We could use less {{BLANK}} and add more fresh fruit and nuts instead, which would keep the flavor pleasant while making the cake better for people who watch their diet.",
    "cn": "A：好幾位年長的顧客問我們能不能提供更健康的甜點，你對改良我們那款熱賣的胡蘿蔔蛋糕有什麼想法嗎？ B：我們可以少放一點【糖】，改加更多新鮮水果和堅果，這樣既能保持好吃的味道，也讓蛋糕更適合注重飲食的人。"
  },
  {
    "word": "butter",
    "pos": "n.",
    "cn_def": "奶油；牛油",
    "en_def": "a soft yellow food made from milk, used in cooking and baking",
    "sentence": "A: The head baker said the new pound cakes taste a little dry and plain compared with last month's, so did something change in the kitchen? B: Yes, the purchasing department switched to a cheaper brand of {{BLANK}} to save money, but I think we should go back to the old one because quality matters more to our customers.",
    "cn": "A：首席烘焙師說新的磅蛋糕吃起來比上個月的稍微乾又平淡，廚房裡有什麼改變嗎？ B：是的，採購部門為了省錢改用比較便宜的【奶油】品牌，但我認為我們應該換回原來的，因為品質對顧客來說更重要。"
  },
  {
    "word": "egg",
    "pos": "n.",
    "cn_def": "蛋；雞蛋",
    "en_def": "a round object laid by a hen, used as food and in baking",
    "sentence": "A: I am preparing the shopping list for tomorrow's baking class at the community center, so how many ingredients will each of the twenty students need? B: Every student needs one fresh {{BLANK}}, two cups of flour, and a small bowl of milk, so please buy a few extra in case someone drops something on the floor.",
    "cn": "A：我正在為明天社區中心的烘焙課準備購物清單，二十位學員每人需要多少材料？ B：每位學員需要一顆新鮮的【蛋】、兩杯麵粉和一小碗牛奶，所以請多買一些，以防有人把東西掉到地上。"
  },
  {
    "word": "icing",
    "pos": "n.",
    "cn_def": "糖霜",
    "en_def": "a sweet mixture of sugar and water or butter used to cover or decorate cakes",
    "sentence": "A: The marketing team wants the company logo to appear on top of the anniversary cake for Friday's event, so is that something your bakery can do? B: Certainly, our designer can draw the logo in blue and white {{BLANK}} on a smooth surface, but we need the image file by Wednesday so that we have time to practice.",
    "cn": "A：行銷團隊希望週五活動的週年蛋糕上能有公司標誌，你們麵包店做得到嗎？ B：當然可以，我們的設計師可以在平滑的表面上用藍白兩色的【糖霜】畫出標誌，不過我們需要在週三前拿到圖檔，才有時間練習。"
  },
  {
    "word": "frosting",
    "pos": "n.",
    "cn_def": "（蛋糕上的）糖霜；奶油霜",
    "en_def": "a thick, soft, sweet mixture spread on cakes and cupcakes",
    "sentence": "A: The children's hospital asked us to provide cupcakes for their holiday party next week, so what kind of decoration do you think the kids would like? B: I suggest a thick layer of pink and green {{BLANK}} with colorful sprinkles on top, because it looks cheerful and is easy for young children to eat with their hands.",
    "cn": "A：兒童醫院請我們為下週的節日派對提供杯子蛋糕，你覺得孩子們會喜歡什麼樣的裝飾？ B：我建議塗上一層厚厚的粉紅色和綠色【糖霜】，上面撒上彩色糖粒，因為看起來很歡樂，而且小孩用手拿著吃也很方便。"
  },
  {
    "word": "cream",
    "pos": "n.",
    "cn_def": "鮮奶油",
    "en_def": "the thick fatty part of milk, often whipped and put on desserts",
    "sentence": "A: The strawberry cakes we sent to the hotel yesterday were not as fresh as usual, and the event planner was quite unhappy, so what went wrong? B: The delivery van's cooling system broke down during the trip, so the whipped {{BLANK}} melted in the heat, and we have offered the hotel a full refund and a free replacement.",
    "cn": "A：我們昨天送到飯店的草莓蛋糕不像平常那麼新鮮，活動策劃人相當不滿，到底出了什麼問題？ B：送貨車的冷藏系統在途中故障了，所以打發的【鮮奶油】在高溫下融化了，我們已經向飯店提出全額退款並免費補送。"
  },
  {
    "word": "chocolate",
    "pos": "n.",
    "cn_def": "巧克力",
    "en_def": "a sweet brown food made from cocoa beans",
    "sentence": "A: We are choosing a cake for the sales department's farewell party for Ms. Chen, so do you know what flavor she likes best? B: Her assistant told me that she loves dark {{BLANK}} more than anything else, so let's order a rich, bitter cake with fresh berries from the bakery near the train station.",
    "cn": "A：我們正在為業務部替陳小姐舉辦的歡送會挑選蛋糕，你知道她最喜歡什麼口味嗎？ B：她的助理告訴我，她最愛黑【巧克力】，所以我們就向火車站附近的麵包店訂一個濃郁微苦、配上新鮮莓果的蛋糕吧。"
  },
  {
    "word": "vanilla",
    "pos": "n.",
    "cn_def": "香草",
    "en_def": "a sweet flavor that comes from the seeds of a tropical plant",
    "sentence": "A: A customer is planning a small office party for forty people and cannot decide which flavor will please everyone, so what should I recommend to her? B: Tell her that classic {{BLANK}} is the safest choice because almost everyone enjoys it, and she can add fresh fruit on top if she wants something more colorful.",
    "cn": "A：一位顧客正在籌劃一場四十人的小型辦公室派對，無法決定哪種口味能讓大家都滿意，我該推薦她什麼？ B：告訴她經典的【香草】口味是最保險的選擇，因為幾乎每個人都喜歡，如果她想要更繽紛一點，也可以在上面加些新鮮水果。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "A: The restaurant manager wants to attract more business lunch customers on weekdays, so do you have any suggestions for the new set menu? B: We could include a small {{BLANK}}, such as a piece of cheesecake or a fruit tart, with every main course, because office workers love having something sweet after a busy morning.",
    "cn": "A：餐廳經理想在平日吸引更多商務午餐客人，你對新的套餐菜單有什麼建議嗎？ B：我們可以在每份主餐附上一份小【甜點】，例如一塊起司蛋糕或水果塔，因為上班族在忙碌的早上之後很喜歡吃點甜的。"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "cn_def": "食譜",
    "en_def": "a set of instructions for cooking a dish, with a list of ingredients",
    "sentence": "A: Our new pastry chef from Paris will start next Monday, so should we ask her to follow the instructions we have always used for our famous apple cake? B: Yes, please give her a printed copy of the {{BLANK}} on her first day, because customers expect the taste to stay exactly the same as it has been for years.",
    "cn": "A：我們從巴黎來的新甜點師下週一開始上班，我們要請她照著我們一直以來做招牌蘋果蛋糕的做法嗎？ B：是的，請在她上班第一天給她一份印好的【食譜】，因為顧客期待味道和多年來完全一樣。"
  },
  {
    "word": "layer",
    "pos": "n.",
    "cn_def": "層",
    "en_def": "one level of something that lies on top of another",
    "sentence": "A: The bride and groom want a tall, impressive wedding cake for their reception at the hotel, so how big do you think it should be for two hundred guests? B: I recommend four round levels stacked on top of each other, and each {{BLANK}} can have a different flavor so that guests with different tastes will all find something they enjoy.",
    "cn": "A：新郎新娘想在飯店喜宴上擺一個高大氣派的結婚蛋糕，你覺得兩百位賓客需要多大的蛋糕？ B：我建議堆疊四層圓形蛋糕，每一【層】可以有不同口味，這樣口味不同的賓客都能找到喜歡的。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾",
    "en_def": "to add things to something to make it look more attractive",
    "sentence": "A: The office manager wants to surprise the team with a cake for reaching our sales target this quarter, so could your shop add something special to it? B: Of course, our staff can {{BLANK}} it with fresh flowers, gold letters, and small sugar stars, and we can deliver it to your building before the afternoon meeting starts.",
    "cn": "A：辦公室經理想用蛋糕給達成本季業績目標的團隊一個驚喜，你們店能在上面加點特別的東西嗎？ B：當然可以，我們的員工可以用鮮花、金色字母和小糖星星來【裝飾】它，還能在下午會議開始前送到你們大樓。"
  },
  {
    "word": "topping",
    "pos": "n.",
    "cn_def": "（食物上的）配料",
    "en_def": "food put on top of a dish, such as fruit, nuts or sauce",
    "sentence": "A: Our café is creating a new cheesecake for the summer menu, and the owner wants it to look bright and fresh in photos, so what do you suggest? B: We could add a {{BLANK}} of mango, kiwi, and blueberries, because the colorful fruit will look great on social media and taste refreshing on hot days.",
    "cn": "A：我們咖啡館正在為夏季菜單研發新的起司蛋糕，老闆希望它拍照時看起來明亮清新，你有什麼建議？ B：我們可以加上芒果、奇異果和藍莓的【配料】，因為色彩繽紛的水果在社群媒體上看起來很棒，而且在炎熱的日子吃起來也很清爽。"
  },
  {
    "word": "candle",
    "pos": "n.",
    "cn_def": "蠟燭",
    "en_def": "a stick of wax with a string in the middle that you burn for light",
    "sentence": "A: Everything is ready for Mr. Wang's retirement party in the meeting room, but the lights are still on, so when should we bring in the cake? B: Turn off the lights first, and then I will carry it in slowly with one tall {{BLANK}} burning in the middle while everyone starts to sing and clap.",
    "cn": "A：王先生退休派對在會議室都準備好了，但燈還亮著，我們應該什麼時候把蛋糕拿進來？ B：先把燈關掉，然後我會端著中間點著一根高【蠟燭】的蛋糕慢慢走進來，同時大家開始唱歌拍手。"
  },
  {
    "word": "birthday",
    "pos": "n.",
    "cn_def": "生日",
    "en_def": "the day each year when a person was born",
    "sentence": "A: I noticed that Ms. Park from the accounting department has been working late every night this month, so is there anything special happening next week? B: Yes, her {{BLANK}} is next Thursday, so the team is planning to order a small cake and have a short party in the break room during lunch.",
    "cn": "A：我注意到會計部的朴小姐這個月每晚都加班，下週有什麼特別的事嗎？ B：有啊，下週四是她的【生日】，所以團隊打算訂一個小蛋糕，午餐時間在休息室辦個簡短的派對。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "tasting of sugar or honey",
    "sentence": "A: Some guests at yesterday's conference said the chocolate cake was delicious, but a few others left most of it on their plates, so did they say why? B: They felt it was too {{BLANK}} for them after a heavy lunch, so next time we should choose a lighter dessert with less sugar and more fruit.",
    "cn": "A：昨天研討會上有些來賓說巧克力蛋糕很好吃，但也有幾位把大部分都剩在盤子裡，他們有說為什麼嗎？ B：他們覺得吃完豐盛的午餐後，那個蛋糕對他們來說太【甜】了，所以下次我們應該選擇少糖、多水果的清爽甜點。"
  },
  {
    "word": "moist",
    "pos": "adj.",
    "cn_def": "濕潤的",
    "en_def": "slightly wet in a pleasant way; not dry",
    "sentence": "A: Our online reviews have improved a lot since we hired the new baker in March, so what do customers say they like most about our cakes now? B: Many people write that the cakes are soft and {{BLANK}} inside, not dry like before, because she adds yogurt to the batter and never leaves them in the oven too long.",
    "cn": "A：自從三月聘請新烘焙師之後，我們的網路評價改善很多，顧客現在說他們最喜歡我們蛋糕的哪一點？ B：很多人寫說蛋糕裡面鬆軟又【濕潤】，不像以前那樣乾，因為她在麵糊裡加了優格，而且從不讓蛋糕在烤箱裡烤太久。"
  },
  {
    "word": "fluffy",
    "pos": "adj.",
    "cn_def": "蓬鬆的",
    "en_def": "soft and light, with a lot of air inside",
    "sentence": "A: The Japanese cheesecake we sell is one of our best products, and a reporter wants to know what makes it so popular, so what should I tell her? B: Tell her that the cake is light and {{BLANK}}, almost like a cloud, because our bakers beat the egg whites carefully by hand for more than ten minutes.",
    "cn": "A：我們賣的日式起司蛋糕是最暢銷的產品之一，有位記者想知道它為什麼這麼受歡迎，我該怎麼告訴她？ B：告訴她這款蛋糕輕盈又【蓬鬆】，幾乎像雲朵一樣，因為我們的烘焙師會用手仔細打發蛋白超過十分鐘。"
  },
  {
    "word": "rich",
    "pos": "adj.",
    "cn_def": "（食物）濃郁的",
    "en_def": "(of food) containing a lot of butter, cream, sugar or chocolate, with a strong taste",
    "sentence": "A: The hotel's head chef wants a dessert for the formal dinner that will impress the company directors, so which cake do you recommend? B: I recommend our dark chocolate cake because it has a deep, {{BLANK}} flavor, and a small piece is enough to satisfy guests after a large meal of several courses.",
    "cn": "A：飯店主廚想為正式晚宴準備一道能讓公司董事們印象深刻的甜點，你推薦哪款蛋糕？ B：我推薦我們的黑巧克力蛋糕，因為它的味道深沉又【濃郁】，在吃完好幾道菜的豐盛晚餐後，一小塊就足以讓客人滿足。"
  },
  {
    "word": "sponge",
    "pos": "n.",
    "cn_def": "海綿蛋糕",
    "en_def": "a light, soft cake made with eggs, sugar and flour",
    "sentence": "A: A customer would like a simple, light cake for her grandmother, who does not enjoy heavy cream or chocolate, so what can we offer her? B: We can make a plain {{BLANK}} with a little lemon juice and powdered sugar on top, which is soft, easy to eat, and not too heavy for older people.",
    "cn": "A：一位顧客想為不喜歡厚重鮮奶油或巧克力的奶奶買一個簡單清爽的蛋糕，我們可以提供什麼？ B：我們可以做一個原味【海綿蛋糕】，上面淋一點檸檬汁、撒上糖粉，口感柔軟、容易入口，對長輩來說也不會太膩。"
  },
  {
    "word": "fill",
    "pos": "v.",
    "cn_def": "填滿；填入",
    "en_def": "to put something inside until it is full",
    "sentence": "A: The new cream puffs on our menu look beautiful, but some customers said the inside was almost empty, so how can we fix this problem quickly? B: From now on, the kitchen staff should {{BLANK}} each one completely with custard before it goes on display, and a supervisor will check a few every morning.",
    "cn": "A：菜單上新推出的泡芙看起來很漂亮，但有些顧客說裡面幾乎是空的，我們要怎麼迅速解決這個問題？ B：從現在起，廚房員工應該在陳列前把每一個都用卡士達醬完全【填滿】，而且主管每天早上會抽查幾個。"
  },
  {
    "word": "mix",
    "pos": "v.",
    "cn_def": "混合；攪拌",
    "en_def": "to combine two or more things so they become one",
    "sentence": "A: This is my first week working in the bakery, and I want to make sure I do everything correctly, so what is the most important step for making the muffins? B: You should {{BLANK}} the dry ingredients and the wet ingredients gently for only about one minute, because if you stir too much, the muffins will become hard and heavy.",
    "cn": "A：這是我在麵包店工作的第一週，我想確保每件事都做對，做馬芬最重要的步驟是什麼？ B：你應該把乾性材料和濕性材料輕輕【混合】大約一分鐘就好，因為攪拌太久的話，馬芬會變得又硬又紮實。"
  },
  {
    "word": "batter",
    "pos": "n.",
    "cn_def": "麵糊",
    "en_def": "a liquid mixture of flour, eggs and milk used to make cakes",
    "sentence": "A: The cakes from this morning did not rise properly in the oven, and they look flat and heavy, so do you know what might have happened? B: I think the new assistant forgot to add baking powder when he prepared the {{BLANK}}, so I will show him the correct steps again before the lunch rush begins.",
    "cn": "A：今天早上的蛋糕在烤箱裡沒有好好膨脹，看起來又扁又紮實，你知道可能發生了什麼事嗎？ B：我想新來的助手在準備【麵糊】時忘了加泡打粉，所以我會在午餐尖峰時段開始前再教他一次正確步驟。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應；端上（食物）",
    "en_def": "to give food or drinks to people at a meal",
    "sentence": "A: The guests at the awards dinner have almost finished their main course, and the speeches will begin in twenty minutes, so when should the waiters bring out the cake? B: Please ask them to {{BLANK}} it right after the last speech, together with coffee and tea, so that people can relax and chat while they eat.",
    "cn": "A：頒獎晚宴的來賓主餐快吃完了，致詞將在二十分鐘後開始，服務生應該什麼時候把蛋糕端出來？ B：請他們在最後一位致詞結束後馬上【端上】蛋糕，搭配咖啡和茶，讓大家可以邊吃邊放鬆聊天。"
  },
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝；慶祝活動",
    "en_def": "a special event or party held because something good has happened",
    "sentence": "A: Our company has just won the biggest contract in its history, and the CEO wants to thank everyone who worked so hard on it, so what is the plan? B: She is organizing a big {{BLANK}} in the hotel ballroom next Friday evening, with a buffet dinner, live music, and a huge cake with the client's logo on it.",
    "cn": "A：我們公司剛贏得史上最大的合約，執行長想感謝所有為此努力的人，有什麼計畫？ B：她下週五晚上要在飯店宴會廳舉辦一場盛大的【慶祝活動】，有自助晚餐、現場音樂，還有一個印著客戶標誌的巨型蛋糕。"
  }
];

const MCQS = [
  {
    "q": "Each guest at the training session received a _____ of carrot cake with coffee. The rest was taken to the staff room.",
    "options": [
      "candle",
      "recipe",
      "slice",
      "layer"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Our kitchen staff _____ fresh bread and muffins every morning before six. The shop opens at seven, so everything is still warm.",
    "options": [
      "decorate",
      "bake",
      "mix",
      "fill"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Please turn on the _____ at least fifteen minutes before you put the cake inside. It needs to reach 180 degrees first.",
    "options": [
      "flour",
      "candle",
      "topping",
      "oven"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The bakery ran out of _____ on Tuesday, so it could not make any bread. A new delivery of fifty bags arrived the next morning.",
    "options": [
      "flour",
      "candle",
      "layer",
      "slice"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Doctors advise people to eat less _____ to protect their teeth and health. Our café now offers drinks and cakes with lower amounts.",
    "options": [
      "oven",
      "candle",
      "recipe",
      "sugar"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The pastry chef only uses fresh French _____ in her croissants. It gives them a soft texture and a rich, creamy taste.",
    "options": [
      "oven",
      "candle",
      "butter",
      "celebration"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Crack one _____ into the bowl and beat it with a fork. Then add the milk and stir slowly until smooth.",
    "options": [
      "egg",
      "candle",
      "oven",
      "celebration"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The baker wrote 'Happy Retirement' in white _____ on the chocolate cake. The letters looked neat and elegant to everyone.",
    "options": [
      "oven",
      "icing",
      "recipe",
      "birthday"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The cupcakes were covered with thick pink _____ and colorful sprinkles. The children at the party loved them very much.",
    "options": [
      "oven",
      "recipe",
      "candle",
      "frosting"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The strawberries were served with fresh whipped _____ on top. Guests at the hotel breakfast asked for second helpings.",
    "options": [
      "flour",
      "oven",
      "cream",
      "recipe"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Ms. Lin ordered a dark _____ cake for the board meeting. It is the favorite flavor of most of the directors.",
    "options": [
      "oven",
      "chocolate",
      "candle",
      "recipe"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new ice cream shop offers twelve flavors, but _____ remains the best seller. Many customers prefer its simple, classic taste.",
    "options": [
      "vanilla",
      "oven",
      "recipe",
      "candle"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After the main course, the waiter brought the _____ menu to our table. I ordered apple pie with ice cream.",
    "options": [
      "oven",
      "dessert",
      "flour",
      "candle"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "My grandmother wrote her famous cake _____ in a small notebook. She shared it with me before I opened my bakery.",
    "options": [
      "oven",
      "slice",
      "recipe",
      "candle"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Each _____ of the wedding cake had a different flavor, from lemon to strawberry. Guests could choose their favorite.",
    "options": [
      "oven",
      "flour",
      "candle",
      "layer"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The bakery staff will _____ the anniversary cake with gold letters and fresh roses. It will be delivered to the hotel on Friday.",
    "options": [
      "decorate",
      "mix",
      "serve",
      "bake"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "This frozen yogurt comes with your choice of one free _____, such as nuts or fresh berries. Extra choices cost fifty cents each.",
    "options": [
      "oven",
      "topping",
      "recipe",
      "birthday"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Before the lights were turned off, the manager lit the _____ on the cake. Then everyone sang for the new team leader.",
    "options": [
      "flour",
      "recipe",
      "dessert",
      "candle"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The staff gave Tom a card and a small gift for his thirtieth _____. He was surprised because he had not told anyone.",
    "options": [
      "oven",
      "recipe",
      "birthday",
      "flour"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Children usually prefer _____ snacks like candy and cookies. Adults, however, often choose something salty or sour instead.",
    "options": [
      "sweet",
      "fluffy",
      "moist",
      "rich"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The baker covers the cake with plastic wrap overnight to keep it _____. Otherwise, it would become dry and hard by morning.",
    "options": [
      "sweet",
      "fluffy",
      "moist",
      "rich"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The pancakes were light and _____ because the cook beat air into the eggs. They looked like small soft clouds on the plate.",
    "options": [
      "sweet",
      "fluffy",
      "moist",
      "rich"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The cake has a deep, _____ flavor because it contains plenty of butter and dark chocolate. A small piece is enough.",
    "options": [
      "rich",
      "sweet",
      "moist",
      "fluffy"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "A light lemon _____ cake is perfect for an afternoon tea party. It is soft and not too heavy for most guests.",
    "options": [
      "oven",
      "candle",
      "recipe",
      "sponge"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The bakers carefully _____ each cream puff with vanilla custard until it is full. Then they dust the puffs with powdered sugar.",
    "options": [
      "mix",
      "fill",
      "bake",
      "decorate"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "First, _____ the flour, sugar, and butter together in a large bowl. Then add two eggs and stir until smooth.",
    "options": [
      "serve",
      "decorate",
      "fill",
      "mix"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Pour the cake _____ into a round pan and bake it for forty minutes. Check it with a toothpick before removing it.",
    "options": [
      "batter",
      "candle",
      "recipe",
      "slice"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The hotel will _____ lunch in the main hall at noon. After that, coffee and cake will be offered in the lobby.",
    "options": [
      "bake",
      "mix",
      "serve",
      "decorate"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The company held a big _____ after winning the national design award. Every employee was invited to dinner at a hotel.",
    "options": [
      "celebration",
      "oven",
      "flour",
      "recipe"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Please follow the _____ carefully, especially the baking time and temperature. Small changes can ruin the whole cake.",
    "options": [
      "candle",
      "slice",
      "recipe",
      "birthday"
    ],
    "answer": 2,
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "slice": {
    "pos": "n.",
    "en_def": "a thin flat piece cut from something like cake or bread",
    "cn_def": "一片；一塊"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘烤"
  },
  "oven": {
    "pos": "n.",
    "en_def": "a box-shaped machine that heats food so you can bake or cook it",
    "cn_def": "烤箱"
  },
  "flour": {
    "pos": "n.",
    "en_def": "a white powder made from wheat, used to make bread and cakes",
    "cn_def": "麵粉"
  },
  "sugar": {
    "pos": "n.",
    "en_def": "a sweet white or brown substance added to food and drinks",
    "cn_def": "糖"
  },
  "butter": {
    "pos": "n.",
    "en_def": "a soft yellow food made from milk, used in cooking and baking",
    "cn_def": "奶油；牛油"
  },
  "egg": {
    "pos": "n.",
    "en_def": "a round object laid by a hen, used as food and in baking",
    "cn_def": "蛋；雞蛋"
  },
  "icing": {
    "pos": "n.",
    "en_def": "a sweet mixture of sugar and water or butter used to cover or decorate cakes",
    "cn_def": "糖霜"
  },
  "frosting": {
    "pos": "n.",
    "en_def": "a thick, soft, sweet mixture spread on cakes and cupcakes",
    "cn_def": "（蛋糕上的）糖霜；奶油霜"
  },
  "cream": {
    "pos": "n.",
    "en_def": "the thick fatty part of milk, often whipped and put on desserts",
    "cn_def": "鮮奶油"
  },
  "chocolate": {
    "pos": "n.",
    "en_def": "a sweet brown food made from cocoa beans",
    "cn_def": "巧克力"
  },
  "vanilla": {
    "pos": "n.",
    "en_def": "a sweet flavor that comes from the seeds of a tropical plant",
    "cn_def": "香草"
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food eaten at the end of a meal",
    "cn_def": "甜點"
  },
  "recipe": {
    "pos": "n.",
    "en_def": "a set of instructions for cooking a dish, with a list of ingredients",
    "cn_def": "食譜"
  },
  "layer": {
    "pos": "n.",
    "en_def": "one level of something that lies on top of another",
    "cn_def": "層"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to add things to something to make it look more attractive",
    "cn_def": "裝飾"
  },
  "topping": {
    "pos": "n.",
    "en_def": "food put on top of a dish, such as fruit, nuts or sauce",
    "cn_def": "（食物上的）配料"
  },
  "candle": {
    "pos": "n.",
    "en_def": "a stick of wax with a string in the middle that you burn for light",
    "cn_def": "蠟燭"
  },
  "birthday": {
    "pos": "n.",
    "en_def": "the day each year when a person was born",
    "cn_def": "生日"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting of sugar or honey",
    "cn_def": "甜的"
  },
  "moist": {
    "pos": "adj.",
    "en_def": "slightly wet in a pleasant way; not dry",
    "cn_def": "濕潤的"
  },
  "fluffy": {
    "pos": "adj.",
    "en_def": "soft and light, with a lot of air inside",
    "cn_def": "蓬鬆的"
  },
  "rich": {
    "pos": "adj.",
    "en_def": "(of food) containing a lot of butter, cream, sugar or chocolate, with a strong taste",
    "cn_def": "（食物）濃郁的"
  },
  "sponge": {
    "pos": "n.",
    "en_def": "a light, soft cake made with eggs, sugar and flour",
    "cn_def": "海綿蛋糕"
  },
  "fill": {
    "pos": "v.",
    "en_def": "to put something inside until it is full",
    "cn_def": "填滿；填入"
  },
  "mix": {
    "pos": "v.",
    "en_def": "to combine two or more things so they become one",
    "cn_def": "混合；攪拌"
  },
  "batter": {
    "pos": "n.",
    "en_def": "a liquid mixture of flour, eggs and milk used to make cakes",
    "cn_def": "麵糊"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to people at a meal",
    "cn_def": "供應；端上（食物）"
  },
  "celebration": {
    "pos": "n.",
    "en_def": "a special event or party held because something good has happened",
    "cn_def": "慶祝；慶祝活動"
  }
};

const EXTRA_GLOSSES = {};
