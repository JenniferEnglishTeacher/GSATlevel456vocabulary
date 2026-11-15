// Topic 82 Quiz Data: Cooking 烹飪
// Source word list: https://www.examword.com/group-topic/cooking — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T82 - Cooking 烹飪",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "烹調；煮",
    "en_def": "to make food ready to eat by heating it",
    "sentence": "A: Who is going to prepare the food for the welcome party for our new interns on Friday afternoon? B: Our team leader offered to {{BLANK}} a big pot of curry at home on Thursday night, and two volunteers will bring salad, bread and drinks to the meeting room before three o'clock.",
    "cn": "A：誰要為週五下午歡迎新實習生的派對準備食物？ B：我們的組長願意週四晚上在家【煮】一大鍋咖哩，另外兩位志工會在三點前把沙拉、麵包和飲料帶到會議室。"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "cn_def": "食譜",
    "en_def": "a list of foods and steps for making a dish",
    "sentence": "A: The soup at the company cafeteria tasted completely different today, so did the kitchen hire a new cook? B: No, the same staff are working there, but the manager asked them to try a new {{BLANK}} from a famous Thai restaurant because many employees said the old soup was too salty.",
    "cn": "A：今天公司餐廳的湯味道完全不一樣，廚房是換了新廚師嗎？ B：沒有，還是同樣的員工，但經理請他們試做一家知名泰式餐廳的新【食譜】，因為很多員工說舊的湯太鹹了。"
  },
  {
    "word": "ingredient",
    "pos": "n.",
    "cn_def": "材料；食材",
    "en_def": "one of the foods used to make a dish",
    "sentence": "A: Why did the bakery near our office stop selling its famous strawberry cakes last month? B: The owner told me that the price of fresh strawberries went up sharply after the heavy rain, and she refuses to use a cheaper {{BLANK}} because she believes customers will notice the lower quality immediately.",
    "cn": "A：我們辦公室附近的麵包店上個月為什麼不再賣招牌草莓蛋糕了？ B：老闆告訴我，大雨過後新鮮草莓的價格大漲，而她拒絕使用較便宜的【食材】，因為她相信客人會馬上察覺品質變差。"
  },
  {
    "word": "kitchen",
    "pos": "n.",
    "cn_def": "廚房",
    "en_def": "a room where food is prepared and cooked",
    "sentence": "A: Is there anywhere on this floor where I can heat up my lunch, or do I have to go down to the cafeteria? B: There is a small staff {{BLANK}} next to the photocopy room with a microwave, a fridge and a kettle, but please wash your dishes afterward because everyone shares it.",
    "cn": "A：這層樓有地方可以加熱午餐嗎？還是我得下樓到員工餐廳？ B：影印室旁邊有一間小小的員工【廚房】，裡面有微波爐、冰箱和熱水壺，但用完請洗碗，因為大家共用。"
  },
  {
    "word": "chef",
    "pos": "n.",
    "cn_def": "廚師；主廚",
    "en_def": "a skilled cook who works in a restaurant or hotel",
    "sentence": "A: Why is the hotel restaurant so popular with business travelers even though its prices are quite high? B: The head {{BLANK}} trained in Paris for ten years, and he creates a new seasonal menu every month, so guests know they will always enjoy creative dishes made with local ingredients.",
    "cn": "A：為什麼那家飯店餐廳雖然價格很高，卻還是很受商務旅客歡迎？ B：那位【主廚】在巴黎受訓了十年，而且每個月都推出新的季節菜單，所以客人知道一定能吃到用在地食材做的創意料理。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘焙；烤",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: What are you planning to bring to the charity sale at the community center this weekend? B: My sister and I will {{BLANK}} about fifty chocolate muffins on Saturday morning, and all the money we raise will go to the children's hospital that is building a new playroom.",
    "cn": "A：這個週末你打算帶什麼去社區中心的義賣會？ B：我和我姊姊週六早上會【烤】大約五十個巧克力瑪芬，募到的錢會全部捐給正在蓋新遊戲室的兒童醫院。"
  },
  {
    "word": "boil",
    "pos": "v.",
    "cn_def": "煮沸；燒開",
    "en_def": "to heat a liquid until it bubbles",
    "sentence": "A: The water in this old office building tastes a little strange, so is it safe to drink from the tap? B: The building manager says it is clean, but she still suggests that we {{BLANK}} it in the kettle first until the new filters are installed in the pipes next week.",
    "cn": "A：這棟老舊辦公大樓的水喝起來有點怪，直接喝水龍頭的水安全嗎？ B：大樓管理員說水是乾淨的，但她還是建議我們先用熱水壺把水【煮沸】，等下週水管裝好新的濾水器再說。"
  },
  {
    "word": "fry",
    "pos": "v.",
    "cn_def": "油炸；煎",
    "en_def": "to cook food in hot oil",
    "sentence": "A: Why does the new fast-food restaurant near the station advertise that its chicken is healthier than other places? B: The manager explained that they {{BLANK}} the chicken in fresh vegetable oil that they change every day, and they also offer a baked version for customers who want fewer calories.",
    "cn": "A：車站附近新開的速食店為什麼宣傳他們的雞肉比別家健康？ B：經理解釋說，他們用每天更換的新鮮植物油來【炸】雞肉，而且也提供烤的版本給想少攝取熱量的客人。"
  },
  {
    "word": "grill",
    "pos": "v.",
    "cn_def": "燒烤",
    "en_def": "to cook food over or under direct strong heat",
    "sentence": "A: What kind of food will the catering company serve at our outdoor sales event in the park next Saturday? B: They will bring two large barbecues and {{BLANK}} burgers, sausages and corn for about two hundred guests, and they will also prepare vegetarian options for people who do not eat meat.",
    "cn": "A：下週六我們在公園舉辦的戶外銷售活動，外燴公司會提供什麼食物？ B：他們會帶兩台大型烤肉架，為大約兩百位客人【烤】漢堡、香腸和玉米，也會為不吃肉的人準備素食選擇。"
  },
  {
    "word": "roast",
    "pos": "v.",
    "cn_def": "烘烤",
    "en_def": "to cook meat or vegetables in an oven or over a fire",
    "sentence": "A: What is the special dish on the hotel's holiday menu for our department's year-end dinner? B: The chef will {{BLANK}} a whole turkey slowly in the oven for about five hours and serve it with potatoes, vegetables and a rich sauce that guests can add at their tables.",
    "cn": "A：我們部門尾牙飯店節慶菜單上的特色菜是什麼？ B：主廚會把一整隻火雞放進烤箱慢慢【烘烤】大約五個小時，搭配馬鈴薯、蔬菜和濃郁的醬汁，客人可以在桌上自行添加。"
  },
  {
    "word": "steam",
    "pos": "v.",
    "cn_def": "蒸",
    "en_def": "to cook food using the hot air from boiling water",
    "sentence": "A: Our new cafeteria menu offers fish twice a week, but how is it prepared, because I am trying to eat less oil? B: The cooks usually {{BLANK}} the fish with ginger and green onions instead of frying it, so it stays soft and healthy, and many office workers choose it for lunch.",
    "cn": "A：我們新的員工餐廳菜單每週提供兩次魚，但是怎麼料理的？因為我正在試著少吃油。 B：廚師通常會用薑和蔥來【蒸】魚，而不是油炸，所以魚肉保持軟嫩又健康，很多上班族午餐都選它。"
  },
  {
    "word": "simmer",
    "pos": "v.",
    "cn_def": "用小火慢燉",
    "en_def": "to cook something slowly just below boiling",
    "sentence": "A: How does the small noodle shop on Elm Street make its beef soup taste so rich and full? B: The owner told me that he lets the bones {{BLANK}} over low heat for twelve hours every night after the shop closes, so the soup is ready when the first customers arrive in the morning.",
    "cn": "A：榆樹街那家小麵店的牛肉湯為什麼喝起來這麼濃郁？ B：老闆告訴我，他每天晚上打烊後都讓骨頭用小火【慢燉】十二個小時，所以早上第一批客人到的時候，湯就準備好了。"
  },
  {
    "word": "saute",
    "pos": "v.",
    "cn_def": "嫩煎；快炒",
    "en_def": "to cook food quickly in a little hot oil or butter",
    "sentence": "A: The cooking class at the community center sounds fun, so what did you learn in the first lesson last night? B: The instructor showed us how to {{BLANK}} mushrooms and onions quickly in a little butter over high heat, and then we used them to make a simple pasta for dinner.",
    "cn": "A：社區中心的烹飪課聽起來很好玩，你昨晚第一堂課學了什麼？ B：老師教我們怎麼用少許奶油大火快速【嫩煎】蘑菇和洋蔥，然後我們用它們做了簡單的義大利麵當晚餐。"
  },
  {
    "word": "mix",
    "pos": "v.",
    "cn_def": "混合；攪拌",
    "en_def": "to put two or more things together and combine them",
    "sentence": "A: Can you help me prepare the drinks for the client meeting, because the guests will arrive in twenty minutes? B: Sure, I will {{BLANK}} the orange juice with sparkling water in these two large glass jugs, and then we can add some ice and fresh lemon slices just before they come in.",
    "cn": "A：你可以幫我準備客戶會議的飲料嗎？客人再二十分鐘就到了。 B：沒問題，我會在這兩個大玻璃壺裡把柳橙汁和氣泡水【混合】，然後在他們進來前加點冰塊和新鮮檸檬片。"
  },
  {
    "word": "stir",
    "pos": "v.",
    "cn_def": "攪拌",
    "en_def": "to move a spoon around in food or liquid",
    "sentence": "A: The tomato sauce for tonight's staff dinner smells wonderful, but is there anything I can do to help you in the kitchen? B: Could you {{BLANK}} the sauce slowly with this wooden spoon every few minutes, because it can burn easily at the bottom while I cut the vegetables for the salad?",
    "cn": "A：今晚員工晚餐的番茄醬聞起來好香，廚房裡有什麼我可以幫忙的嗎？ B：你可以每隔幾分鐘用這支木湯匙慢慢【攪拌】醬汁嗎？因為我切沙拉蔬菜的時候，醬汁底部很容易燒焦。"
  },
  {
    "word": "whisk",
    "pos": "v.",
    "cn_def": "攪打；打發",
    "en_def": "to beat eggs or cream very fast to add air",
    "sentence": "A: Why are the pancakes at the hotel breakfast buffet so light and soft compared with the ones I make at home? B: The cook told me that he uses fresh eggs and he will {{BLANK}} them for several minutes until they are full of air before he adds the flour and milk.",
    "cn": "A：飯店早餐自助吧的鬆餅為什麼比我在家做的鬆軟這麼多？ B：廚師告訴我，他用新鮮雞蛋，而且會把蛋【攪打】好幾分鐘，直到充滿空氣，才加入麵粉和牛奶。"
  },
  {
    "word": "slice",
    "pos": "v.",
    "cn_def": "切成薄片",
    "en_def": "to cut food into thin flat pieces",
    "sentence": "A: How should I prepare the bread for the sandwiches at tomorrow's training workshop for the new sales staff? B: Please {{BLANK}} the loaves thinly with the sharp knife in the top drawer, and then keep the bread in plastic bags overnight so it stays fresh until the lunch break starts.",
    "cn": "A：明天新業務人員的訓練工作坊要做三明治，麵包要怎麼準備？ B：請用最上層抽屜裡那把利刀把麵包【切成薄片】，然後整晚放在塑膠袋裡，讓麵包保持新鮮直到午休時間。"
  },
  {
    "word": "chop",
    "pos": "v.",
    "cn_def": "切碎；剁",
    "en_def": "to cut food into small pieces with a knife",
    "sentence": "A: The salad bar at the new restaurant downtown looks amazing, so how do they prepare so many vegetables every day? B: Three kitchen assistants arrive at six in the morning to wash and {{BLANK}} carrots, cabbage and peppers, so everything is fresh and ready before the lunch crowd arrives at noon.",
    "cn": "A：市中心新餐廳的沙拉吧看起來好棒，他們每天怎麼準備這麼多蔬菜？ B：三位廚房助理早上六點就到，清洗並【切碎】紅蘿蔔、高麗菜和甜椒，所以中午用餐人潮到之前，一切都新鮮備妥。"
  },
  {
    "word": "dice",
    "pos": "v.",
    "cn_def": "切丁",
    "en_def": "to cut food into small square pieces",
    "sentence": "A: What should I do with these potatoes and carrots for the beef stew we are making for the office potluck? B: Please peel them first and then {{BLANK}} them into small, even cubes about two centimeters wide, so they cook at the same speed and are easy for guests to eat.",
    "cn": "A：我們要為辦公室百樂餐做燉牛肉，這些馬鈴薯和紅蘿蔔要怎麼處理？ B：請先削皮，然後把它們【切丁】成大約兩公分寬、大小均勻的小塊，這樣熟的速度一樣，客人也方便吃。"
  },
  {
    "word": "peel",
    "pos": "v.",
    "cn_def": "剝皮；削皮",
    "en_def": "to take the skin off fruit or vegetables",
    "sentence": "A: Why does the fruit tray from the catering company cost more than buying the fruit at the supermarket ourselves? B: Their staff wash, {{BLANK}} and cut every orange, mango and kiwi by hand, so our guests can eat the fruit right away without making a mess in the meeting room.",
    "cn": "A：外燴公司的水果盤為什麼比我們自己去超市買水果還貴？ B：他們的員工會用手清洗、【剝皮】並切好每一顆柳橙、芒果和奇異果，所以客人可以馬上吃，不會把會議室弄得一團亂。"
  },
  {
    "word": "season",
    "pos": "v.",
    "cn_def": "調味",
    "en_def": "to add salt, pepper or spices to food",
    "sentence": "A: The grilled chicken at the company picnic last year was a little tasteless, so what will you do differently this time? B: I will {{BLANK}} the meat with salt, pepper, garlic and lemon the night before, so the flavor has time to go deep into the chicken before we cook it.",
    "cn": "A：去年公司野餐的烤雞有點沒味道，這次你會怎麼改進？ B：我會在前一晚用鹽、胡椒、大蒜和檸檬幫肉【調味】，讓味道在烹煮前有時間深入雞肉。"
  },
  {
    "word": "spice",
    "pos": "n.",
    "cn_def": "香料",
    "en_def": "a dried plant part used to give food a strong taste",
    "sentence": "A: Why are you buying so many small bags at the market when you are only cooking dinner for four colleagues tonight? B: The Indian curry I am making needs more than one kind of {{BLANK}}, such as cumin, turmeric and chili, and the shop near my home does not sell any of them.",
    "cn": "A：今晚你只為四位同事煮晚餐，為什麼要在市場買這麼多小包裝？ B：我要做的印度咖哩需要不只一種【香料】，例如孜然、薑黃和辣椒，而我家附近的店都沒有賣。"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "cn_def": "口味；風味",
    "en_def": "the particular taste of a food or drink",
    "sentence": "A: Which of the three new ice creams did the customers prefer during the product test at the shopping mall? B: Most people chose the green tea {{BLANK}} because it was not too sweet, so the marketing team plans to sell it in convenience stores across Asia starting next spring.",
    "cn": "A：在購物中心的產品試吃中，顧客比較喜歡三種新冰淇淋中的哪一種？ B：大多數人選了綠茶【口味】，因為它不會太甜，所以行銷團隊計畫從明年春天開始在亞洲各地的便利商店販售。"
  },
  {
    "word": "taste",
    "pos": "n.",
    "cn_def": "味道",
    "en_def": "the feeling food or drink gives in your mouth",
    "sentence": "A: Did you enjoy the lunch at the new Korean restaurant that the manager recommended for our team meeting? B: Yes, the beef soup had a wonderful {{BLANK}}, but it was a bit too hot for me, so next time I will ask the waiter for a milder version before I order.",
    "cn": "A：你喜歡經理推薦我們開團隊會議的那家新韓式餐廳的午餐嗎？ B：喜歡，牛肉湯的【味道】很棒，但對我來說有點太辣，所以下次點餐前我會請服務生做比較不辣的。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "（食物的）一份；份量",
    "en_def": "the amount of food served to one person",
    "sentence": "A: Why do so many customers leave food on their plates at the hotel restaurant during the conference lunch? B: The {{BLANK}} of rice that the kitchen serves is far too large for most office workers, so the manager plans to make it smaller and lower the price slightly next month.",
    "cn": "A：會議午餐時，為什麼飯店餐廳有那麼多客人把食物剩在盤子裡？ B：廚房供應的白飯【份量】對大多數上班族來說太多了，所以經理打算下個月減量，並稍微降價。"
  },
  {
    "word": "utensil",
    "pos": "n.",
    "cn_def": "器具；餐具",
    "en_def": "a tool used for cooking or eating, such as a spoon",
    "sentence": "A: What else do we need to buy for the new staff kitchen before the office opens on Monday morning? B: We already have plates and cups, but we still need a basic {{BLANK}} set with knives, forks, spoons and a few large serving spoons for the shared lunches on Fridays.",
    "cn": "A：辦公室週一早上開幕前，新的員工廚房還需要買什麼？ B：我們已經有盤子和杯子，但還需要一組基本的【餐具】，包括刀子、叉子、湯匙，以及週五共餐用的幾支大湯匙。"
  },
  {
    "word": "pan",
    "pos": "n.",
    "cn_def": "平底鍋；鍋",
    "en_def": "a flat metal container with a handle used for cooking",
    "sentence": "A: Why are you buying new cookware at the department store when your kitchen at home already has so much? B: My old frying {{BLANK}} has a broken handle, and the eggs always stick to the bottom, so I want a light, non-stick one that is easy to wash after breakfast.",
    "cn": "A：你家廚房已經有很多廚具了，為什麼還要在百貨公司買新的？ B：我那支舊的【平底鍋】把手壞了，雞蛋總是黏在鍋底，所以我想買一支輕巧、不沾、早餐後好洗的。"
  },
  {
    "word": "pot",
    "pos": "n.",
    "cn_def": "鍋子",
    "en_def": "a deep round container used for cooking soup or stew",
    "sentence": "A: How are we going to serve hot soup to all fifty volunteers at the beach cleanup event on Saturday? B: The restaurant owner next door will lend us a huge metal {{BLANK}}, and we can keep the soup warm on a gas burner under the tent until everyone finishes working.",
    "cn": "A：週六淨灘活動時，我們要怎麼為五十位志工提供熱湯？ B：隔壁餐廳老闆會借我們一個超大的金屬【鍋子】，我們可以把湯放在帳篷下的瓦斯爐上保溫，直到大家工作結束。"
  },
  {
    "word": "oven",
    "pos": "n.",
    "cn_def": "烤箱",
    "en_def": "a box-shaped machine that bakes or roasts food",
    "sentence": "A: Why did the bakery downtown close for two days last week, even though it was a busy holiday period? B: Its main {{BLANK}} broke down on Monday morning, so the bakers could not make any bread or cakes until a technician arrived from the factory with a replacement part.",
    "cn": "A：市中心那家麵包店為什麼上週在忙碌的假期關門兩天？ B：店裡的主要【烤箱】週一早上故障了，所以麵包師傅無法做任何麵包或蛋糕，直到技師從工廠帶來替換零件。"
  },
  {
    "word": "stove",
    "pos": "n.",
    "cn_def": "爐子；爐灶",
    "en_def": "a piece of kitchen equipment with burners for cooking",
    "sentence": "A: Is it safe to leave the soup cooking while we go to the meeting downstairs for an hour? B: No, please turn off the {{BLANK}} before you leave, because the building rules say nobody may leave a gas flame burning in the staff kitchen without someone there to watch it.",
    "cn": "A：我們去樓下開一小時的會時，把湯留著繼續煮安全嗎？ B：不安全，離開前請把【爐子】關掉，因為大樓規定沒有人看著的時候，任何人都不可以讓員工廚房的瓦斯火繼續燒。"
  },
  {
    "word": "apron",
    "pos": "n.",
    "cn_def": "圍裙",
    "en_def": "a piece of cloth worn over clothes to keep them clean",
    "sentence": "A: Do I need to bring anything special to the cooking class that the company is offering as a team-building activity? B: You should bring an old {{BLANK}} to keep your shirt clean, because we will be working with tomato sauce and oil, and the school does not provide one for every student.",
    "cn": "A：公司舉辦的團隊建立烹飪課，我需要帶什麼特別的東西嗎？ B：你應該帶一件舊【圍裙】保持襯衫乾淨，因為我們會用到番茄醬和油，而學校不會為每位學員提供。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的",
    "en_def": "having a very good taste",
    "sentence": "A: How was the dinner at the seafood restaurant where you took the visitors from the head office last night? B: The grilled fish was absolutely {{BLANK}}, and the visitors enjoyed it so much that they asked for the restaurant's address so they could return before flying home on Friday.",
    "cn": "A：昨晚你帶總公司來的訪客去那家海鮮餐廳，晚餐怎麼樣？ B：烤魚真的非常【美味】，訪客們吃得很開心，還問了餐廳地址，好在週五搭機回去前再來一次。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹味的；鹹香的",
    "en_def": "salty or spicy, not sweet",
    "sentence": "A: The client from Japan does not like sweet food, so what should we order for the afternoon break during the long meeting? B: Let's choose some {{BLANK}} snacks such as cheese crackers, mini sandwiches and chicken pies instead of cakes, and we can also offer green tea and coffee.",
    "cn": "A：那位日本客戶不喜歡甜食，長時間會議的下午休息時間我們該點什麼？ B：我們選一些【鹹味的】點心吧，像是起司餅乾、迷你三明治和雞肉派，而不是蛋糕，另外也可以提供綠茶和咖啡。"
  },
  {
    "word": "homemade",
    "pos": "adj.",
    "cn_def": "自製的；家常的",
    "en_def": "made at home, not bought from a shop or factory",
    "sentence": "A: Why is the little café across from our office always full of customers at lunchtime, even though it is quite small? B: The owner serves {{BLANK}} soup and bread that her mother prepares every morning, and office workers say it tastes much better than food from the chain restaurants nearby.",
    "cn": "A：我們辦公室對面那家小咖啡館雖然很小，為什麼午餐時間總是客滿？ B：老闆提供她媽媽每天早上準備的【自製】湯和麵包，上班族都說比附近連鎖餐廳的食物好吃多了。"
  }
];

const MCQS = [
  {
    "q": "The new cook followed his grandmother's _____ exactly. The soup tasted just like the one served in her small village restaurant.",
    "options": [
      "recipe",
      "apron",
      "stove",
      "utensil"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Before you cut the oranges for the fruit tray, please _____ them carefully. Customers do not like finding bits of skin in the bowl.",
    "options": [
      "boil",
      "peel",
      "whisk",
      "grill"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The bakery bought a larger _____ last month. Now it can bake three hundred loaves of bread every morning before opening.",
    "options": [
      "apron",
      "recipe",
      "oven",
      "spice"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please _____ the sauce every few minutes while it cooks. Otherwise, it will stick to the bottom of the pan and burn.",
    "options": [
      "peel",
      "slice",
      "dice",
      "stir"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The cooking school gives every student a white _____ on the first day. It protects their clothes from oil and sauce during class.",
    "options": [
      "oven",
      "apron",
      "portion",
      "flavor"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The hotel staff will _____ steaks and vegetables on the rooftop barbecue tonight. Guests can watch the cooks while they enjoy the city view.",
    "options": [
      "grill",
      "peel",
      "whisk",
      "dice"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The restaurant reduced the size of each _____ of pasta. Many customers had complained that the dishes were too large to finish.",
    "options": [
      "apron",
      "oven",
      "stove",
      "portion"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "To make the cream light and smooth, _____ it quickly for three minutes. Then gently spread it on top of the cooled cake.",
    "options": [
      "chop",
      "peel",
      "whisk",
      "roast"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The hotel hired a famous _____ from Italy to run its new restaurant. He will design a menu using fresh local ingredients.",
    "options": [
      "chef",
      "utensil",
      "pot",
      "stove"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please _____ the water for at least three minutes before drinking it. The pipes in the old building are being repaired this week.",
    "options": [
      "slice",
      "chop",
      "boil",
      "peel"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Fresh butter is the most important _____ in our cookies. We never replace it with cheaper oil, even when prices rise.",
    "options": [
      "oven",
      "ingredient",
      "apron",
      "pan"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Use the sharp knife to _____ the cheese thinly for the sandwiches. Thick pieces make them hard to eat during a short break.",
    "options": [
      "boil",
      "steam",
      "simmer",
      "slice"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The office has a small _____ on the third floor. Employees can heat their lunches there and make coffee during breaks.",
    "options": [
      "flavor",
      "spice",
      "kitchen",
      "portion"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "For the holiday dinner, the cook will _____ a large turkey in the oven. It needs about four hours to become golden and tender.",
    "options": [
      "whisk",
      "peel",
      "stir",
      "roast"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "This curry needs one more _____ to give it a warm, rich taste. The cook decided to add a little cinnamon.",
    "options": [
      "spice",
      "apron",
      "stove",
      "oven"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The healthy menu does not use oil, so the cooks _____ the vegetables instead. This keeps their bright colors and vitamins.",
    "options": [
      "whisk",
      "steam",
      "peel",
      "stir"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Our shop sells ice cream in six different kinds. Strawberry is the most popular _____ with children every summer.",
    "options": [
      "apron",
      "oven",
      "utensil",
      "flavor"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The street vendor uses fresh oil to _____ the fish until it is golden and crispy. Customers often wait twenty minutes for it.",
    "options": [
      "whisk",
      "fry",
      "peel",
      "slice"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The cafeteria now gives each customer a metal _____ instead of plastic forks. This change will reduce waste by thousands of items.",
    "options": [
      "flavor",
      "spice",
      "utensil",
      "recipe"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Let the beef soup _____ slowly over low heat for two hours. This long cooking time makes the meat very soft.",
    "options": [
      "simmer",
      "peel",
      "slice",
      "whisk"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Heat a little oil in a frying _____ before adding the eggs. Use medium heat so the eggs do not burn.",
    "options": [
      "apron",
      "pan",
      "recipe",
      "flavor"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "In a large bowl, _____ the flour, sugar and eggs together. Then pour the batter into a cake tin.",
    "options": [
      "peel",
      "grill",
      "roast",
      "mix"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Remember to turn off the gas _____ when you finish cooking. A small fire started in the staff kitchen last month.",
    "options": [
      "stove",
      "flavor",
      "portion",
      "recipe"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "For the soup, _____ the potatoes into small cubes. Small pieces cook faster and are easier for children to eat.",
    "options": [
      "whisk",
      "boil",
      "dice",
      "stir"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The new coffee has a strong, slightly bitter _____. Some customers love it, but others prefer the milder blend we used before.",
    "options": [
      "oven",
      "apron",
      "utensil",
      "taste"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The café will _____ fresh bread in its own oven every morning. Customers can smell it from the street as they walk by.",
    "options": [
      "bake",
      "peel",
      "whisk",
      "dice"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The cook made a large _____ of chicken soup for the volunteers. It was enough to feed forty people after the cleanup.",
    "options": [
      "apron",
      "flavor",
      "pot",
      "recipe"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Please _____ the onions and garlic finely before you start cooking. The sauce will be smoother if the pieces are very small.",
    "options": [
      "boil",
      "chop",
      "roast",
      "whisk"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Quickly _____ the mushrooms in a little butter over high heat. Then add them to the pasta with some fresh cream.",
    "options": [
      "saute",
      "peel",
      "whisk",
      "dice"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Before grilling the chicken, _____ it with salt, pepper and lemon. This simple step gives the meat much more flavor.",
    "options": [
      "peel",
      "whisk",
      "boil",
      "season"
    ],
    "answer": 3,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "烹調；煮"
  },
  "recipe": {
    "pos": "n.",
    "en_def": "a list of foods and steps for making a dish",
    "cn_def": "食譜"
  },
  "ingredient": {
    "pos": "n.",
    "en_def": "one of the foods used to make a dish",
    "cn_def": "材料；食材"
  },
  "kitchen": {
    "pos": "n.",
    "en_def": "a room where food is prepared and cooked",
    "cn_def": "廚房"
  },
  "chef": {
    "pos": "n.",
    "en_def": "a skilled cook who works in a restaurant or hotel",
    "cn_def": "廚師；主廚"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘焙；烤"
  },
  "boil": {
    "pos": "v.",
    "en_def": "to heat a liquid until it bubbles",
    "cn_def": "煮沸；燒開"
  },
  "fry": {
    "pos": "v.",
    "en_def": "to cook food in hot oil",
    "cn_def": "油炸；煎"
  },
  "grill": {
    "pos": "v.",
    "en_def": "to cook food over or under direct strong heat",
    "cn_def": "燒烤"
  },
  "roast": {
    "pos": "v.",
    "en_def": "to cook meat or vegetables in an oven or over a fire",
    "cn_def": "烘烤"
  },
  "steam": {
    "pos": "v.",
    "en_def": "to cook food using the hot air from boiling water",
    "cn_def": "蒸"
  },
  "simmer": {
    "pos": "v.",
    "en_def": "to cook something slowly just below boiling",
    "cn_def": "用小火慢燉"
  },
  "saute": {
    "pos": "v.",
    "en_def": "to cook food quickly in a little hot oil or butter",
    "cn_def": "嫩煎；快炒"
  },
  "mix": {
    "pos": "v.",
    "en_def": "to put two or more things together and combine them",
    "cn_def": "混合；攪拌"
  },
  "stir": {
    "pos": "v.",
    "en_def": "to move a spoon around in food or liquid",
    "cn_def": "攪拌"
  },
  "whisk": {
    "pos": "v.",
    "en_def": "to beat eggs or cream very fast to add air",
    "cn_def": "攪打；打發"
  },
  "slice": {
    "pos": "v.",
    "en_def": "to cut food into thin flat pieces",
    "cn_def": "切成薄片"
  },
  "chop": {
    "pos": "v.",
    "en_def": "to cut food into small pieces with a knife",
    "cn_def": "切碎；剁"
  },
  "dice": {
    "pos": "v.",
    "en_def": "to cut food into small square pieces",
    "cn_def": "切丁"
  },
  "peel": {
    "pos": "v.",
    "en_def": "to take the skin off fruit or vegetables",
    "cn_def": "剝皮；削皮"
  },
  "season": {
    "pos": "v.",
    "en_def": "to add salt, pepper or spices to food",
    "cn_def": "調味"
  },
  "spice": {
    "pos": "n.",
    "en_def": "a dried plant part used to give food a strong taste",
    "cn_def": "香料"
  },
  "flavor": {
    "pos": "n.",
    "en_def": "the particular taste of a food or drink",
    "cn_def": "口味；風味"
  },
  "taste": {
    "pos": "n.",
    "en_def": "the feeling food or drink gives in your mouth",
    "cn_def": "味道"
  },
  "portion": {
    "pos": "n.",
    "en_def": "the amount of food served to one person",
    "cn_def": "（食物的）一份；份量"
  },
  "utensil": {
    "pos": "n.",
    "en_def": "a tool used for cooking or eating, such as a spoon",
    "cn_def": "器具；餐具"
  },
  "pan": {
    "pos": "n.",
    "en_def": "a flat metal container with a handle used for cooking",
    "cn_def": "平底鍋；鍋"
  },
  "pot": {
    "pos": "n.",
    "en_def": "a deep round container used for cooking soup or stew",
    "cn_def": "鍋子"
  },
  "oven": {
    "pos": "n.",
    "en_def": "a box-shaped machine that bakes or roasts food",
    "cn_def": "烤箱"
  },
  "stove": {
    "pos": "n.",
    "en_def": "a piece of kitchen equipment with burners for cooking",
    "cn_def": "爐子；爐灶"
  },
  "apron": {
    "pos": "n.",
    "en_def": "a piece of cloth worn over clothes to keep them clean",
    "cn_def": "圍裙"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "having a very good taste",
    "cn_def": "美味的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy, not sweet",
    "cn_def": "鹹味的；鹹香的"
  },
  "homemade": {
    "pos": "adj.",
    "en_def": "made at home, not bought from a shop or factory",
    "cn_def": "自製的；家常的"
  }
};

const EXTRA_GLOSSES = {};
