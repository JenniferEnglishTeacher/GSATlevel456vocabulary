// Topic 182 Quiz Data: Ice Cream 冰淇淋
// Source word list: https://www.examword.com/group-topic/ice-cream — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T182 - Ice Cream 冰淇淋",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "scoop",
    "pos": "n.",
    "cn_def": "一球；一勺",
    "en_def": "a round amount of ice cream taken with a special spoon",
    "sentence": "A: Our team finished the sales report early, so the manager wants to buy everyone a treat at the shop across the street; what should I order for you? B: Just get me one {{BLANK}} of mint ice cream in a small cup, because I still have a client lunch later and do not want to feel too full.",
    "cn": "A：我們團隊提早完成了銷售報告，所以經理想請大家去對街的店吃點心；我該幫你點什麼？ B：幫我點一【球】薄荷冰淇淋，裝小杯就好，因為我待會還有跟客戶的午餐，不想吃得太飽。"
  },
  {
    "word": "cone",
    "pos": "n.",
    "cn_def": "甜筒；錐形餅乾筒",
    "en_def": "a crisp, pointed biscuit that holds ice cream",
    "sentence": "A: The children's party at the office starts at three, and the parents have asked whether the ice cream will be served in bowls or something easier to hold. B: We ordered small portions in a waffle {{BLANK}} for each child, so they can walk around and play games without needing spoons or plates.",
    "cn": "A：公司的兒童派對三點開始，家長們問冰淇淋是用碗裝還是用比較好拿的東西裝。 B：我們幫每個孩子訂了小份量的鬆餅【甜筒】，這樣他們可以邊走邊玩遊戲，不需要湯匙或盤子。"
  },
  {
    "word": "cup",
    "pos": "n.",
    "cn_def": "杯；杯子",
    "en_def": "a small container used for serving food or drinks",
    "sentence": "A: The caterer asked how we want the dessert presented at tomorrow's training session, since some staff will be eating at their desks while they take notes. B: Please ask them to put each serving of ice cream in a paper {{BLANK}} with a lid, so nothing spills on the laptops or the training materials.",
    "cn": "A：外燴業者問明天訓練課程的甜點要怎麼呈現，因為有些員工會在座位上邊吃邊做筆記。 B：請他們把每一份冰淇淋裝在有蓋子的紙【杯】裡，這樣就不會灑到筆電或訓練資料上。"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "cn_def": "口味；味道",
    "en_def": "the particular taste of a food",
    "sentence": "A: Our new shop opens next Monday, and the owner wants to attract young office workers from the nearby business district during their lunch break. B: Then we should advertise a special {{BLANK}} such as green tea or mango, because those choices are popular with local customers and look great on social media.",
    "cn": "A：我們的新店下週一開幕，老闆想在午休時間吸引附近商業區的年輕上班族。 B：那我們應該宣傳一種特別的【口味】，例如抹茶或芒果，因為這些選擇很受當地顧客歡迎，而且在社群媒體上看起來很棒。"
  },
  {
    "word": "vanilla",
    "pos": "n.",
    "cn_def": "香草",
    "en_def": "a sweet flavor made from the seeds of a tropical plant",
    "sentence": "A: The hotel kitchen is preparing desserts for a wedding of two hundred guests, and the couple has not told us which ice cream they prefer. B: Let's choose classic {{BLANK}} as the main choice, because almost everyone enjoys its simple, gentle taste, and it goes well with the chocolate cake they ordered.",
    "cn": "A：飯店廚房正在為一場兩百位賓客的婚禮準備甜點，新人還沒告訴我們他們偏好哪種冰淇淋。 B：我們選經典的【香草】當主要選項吧，因為幾乎每個人都喜歡它簡單溫和的味道，而且和他們訂的巧克力蛋糕很搭。"
  },
  {
    "word": "chocolate",
    "pos": "n.",
    "cn_def": "巧克力",
    "en_def": "a sweet brown food made from cocoa beans",
    "sentence": "A: Our sales of plain ice cream have dropped this quarter, and the marketing director wants a new product that will attract more customers in winter. B: How about a hot {{BLANK}} sauce poured over a scoop of vanilla, since people enjoy something warm and sweet when the weather turns cold?",
    "cn": "A：我們這一季原味冰淇淋的銷量下降了，行銷總監想要一款能在冬天吸引更多顧客的新產品。 B：在一球香草冰淇淋上淋熱【巧克力】醬如何？因為天氣變冷時，人們喜歡吃溫暖又甜的東西。"
  },
  {
    "word": "strawberry",
    "pos": "n.",
    "cn_def": "草莓",
    "en_def": "a small, soft red fruit with tiny seeds on the outside",
    "sentence": "A: The farm near our factory has offered to sell us fresh fruit at a low price this spring, and the product team is looking for ideas. B: We could make a limited {{BLANK}} ice cream with real pieces of the red fruit, and promote it as a local, seasonal product for families.",
    "cn": "A：我們工廠附近的農場今年春天願意以低價賣新鮮水果給我們，產品團隊正在找點子。 B：我們可以推出限量的【草莓】冰淇淋，裡面加入真正的紅色果肉，並把它當作在地的季節性產品向家庭推廣。"
  },
  {
    "word": "topping",
    "pos": "n.",
    "cn_def": "配料；淋醬",
    "en_def": "food put on top of another food to add flavor or decoration",
    "sentence": "A: Customers keep asking whether they can make their desserts more special, but our menu only offers plain scoops in a few basic flavors. B: Let's add a {{BLANK}} station with nuts, fruit, and sauces, and charge a small extra fee, because it will increase both customer satisfaction and our profits.",
    "cn": "A：顧客一直問能不能讓他們的甜點更特別，但我們的菜單只有幾種基本口味的原味冰淇淋球。 B：我們來增設一個【配料】區，提供堅果、水果和醬汁，並收取少許額外費用，因為這樣能提高顧客滿意度和我們的利潤。"
  },
  {
    "word": "sprinkle",
    "pos": "v.",
    "cn_def": "撒（上）",
    "en_def": "to scatter small pieces of something over a surface",
    "sentence": "A: The children's birthday cake looks a little plain, and the party starts in twenty minutes, so I'm worried the kids will be disappointed. B: Don't worry; just {{BLANK}} some colorful sugar pieces over the ice cream and the frosting, and it will look bright and cheerful in all the photos.",
    "cn": "A：孩子的生日蛋糕看起來有點單調，派對二十分鐘後就開始了，我擔心孩子們會失望。 B：別擔心，只要在冰淇淋和糖霜上【撒】一些彩色糖粒，它在所有照片裡看起來就會鮮豔又歡樂。"
  },
  {
    "word": "syrup",
    "pos": "n.",
    "cn_def": "糖漿",
    "en_def": "a thick, sweet liquid made from sugar",
    "sentence": "A: Several customers complained that our pancakes and ice cream dessert tastes too dry, and the café manager wants to fix the problem before the weekend rush. B: We could pour a little maple {{BLANK}} over each plate, which will make the dish sweeter and softer without increasing our costs very much.",
    "cn": "A：有幾位顧客抱怨我們的鬆餅冰淇淋甜點吃起來太乾，咖啡館經理想在週末客流高峰前解決這個問題。 B：我們可以在每盤淋上一點楓【糖漿】，這樣會讓這道甜點更甜更軟，而且不會增加太多成本。"
  },
  {
    "word": "waffle",
    "pos": "n.",
    "cn_def": "鬆餅；格子鬆餅",
    "en_def": "a crisp, flat cake with a pattern of square holes",
    "sentence": "A: The breakfast buffet at our conference hotel always runs out of pancakes, and guests have started complaining to the front desk. B: Let's add a {{BLANK}} machine so guests can make their own crisp cakes and top them with ice cream, fruit, or cream while they wait for their meetings.",
    "cn": "A：我們會議飯店的早餐自助吧鬆餅總是不夠，客人已經開始向櫃台抱怨了。 B：我們來加一台【格子鬆餅】機，讓客人在等開會時可以自己做酥脆的鬆餅，再加上冰淇淋、水果或奶油。"
  },
  {
    "word": "gelato",
    "pos": "n.",
    "cn_def": "義式冰淇淋",
    "en_def": "an Italian-style ice cream that is dense and smooth",
    "sentence": "A: Our partners from Milan are visiting the office next week, and the director wants to take them somewhere special for dessert after the meeting. B: There is a small shop downtown run by an Italian chef that makes fresh {{BLANK}} every morning, so they might enjoy a taste of home.",
    "cn": "A：我們來自米蘭的合作夥伴下週要來參訪公司，總監想在會議後帶他們去個特別的地方吃甜點。 B：市中心有一家由義大利主廚經營的小店，每天早上都會現做【義式冰淇淋】，所以他們或許會喜歡嘗嘗家鄉的味道。"
  },
  {
    "word": "sorbet",
    "pos": "n.",
    "cn_def": "雪酪；冰沙",
    "en_def": "a frozen dessert made from fruit juice and sugar, with no milk",
    "sentence": "A: Some of the guests at the company dinner cannot eat dairy products, so I'm not sure what dessert we should offer them instead of ice cream. B: The restaurant can serve a lemon {{BLANK}}, which is made only from fruit juice, water, and sugar, so it is safe and still feels light and fresh.",
    "cn": "A：公司晚宴有些賓客不能吃乳製品，所以我不確定該提供什麼甜點來代替冰淇淋。 B：餐廳可以提供檸檬【雪酪】，它只用果汁、水和糖做成，所以很安全，吃起來也清爽新鮮。"
  },
  {
    "word": "frozen yogurt",
    "pos": "n.phr.",
    "cn_def": "優格冰淇淋；霜凍優格",
    "en_def": "a cold dessert like ice cream but made from yogurt",
    "sentence": "A: Many of our gym members want a healthy snack after their workout, but the café only sells cakes and sugary drinks right now. B: We should install a self-service {{BLANK}} machine with fresh fruit toppings, because it is lower in fat than ice cream and fits our healthy image.",
    "cn": "A：我們有很多健身房會員想在運動後吃健康的點心，但咖啡館目前只賣蛋糕和含糖飲料。 B：我們應該安裝一台自助式【優格冰淇淋】機，附上新鮮水果配料，因為它的脂肪比冰淇淋低，也符合我們的健康形象。"
  },
  {
    "word": "creamy",
    "pos": "adj.",
    "cn_def": "綿密的；奶油般的",
    "en_def": "thick and smooth, like cream",
    "sentence": "A: Customers have said our new low-fat ice cream feels icy and hard, and the sales figures for the last two months are very disappointing. B: The research team is adding more milk to the recipe, so the next version should feel much more {{BLANK}} and smooth while still keeping the calories low.",
    "cn": "A：顧客說我們新的低脂冰淇淋吃起來冰冰硬硬的，過去兩個月的銷售數字非常令人失望。 B：研發團隊正在配方中加入更多牛奶，所以下一個版本吃起來應該會更【綿密】順滑，同時仍保持低熱量。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "having a taste like sugar",
    "sentence": "A: The focus group tested our new mango dessert yesterday, and the product manager asked me to summarize their main comments for today's meeting. B: Most people liked the fresh fruit, but they said it was far too {{BLANK}}, so we should reduce the sugar before we start mass production next month.",
    "cn": "A：焦點團體昨天試吃了我們的新芒果甜點，產品經理要我為今天的會議整理他們的主要意見。 B：大部分人喜歡新鮮的水果，但他們說它太【甜】了，所以在下個月開始量產前，我們應該減少糖量。"
  },
  {
    "word": "cold",
    "pos": "adj.",
    "cn_def": "冰冷的；寒冷的",
    "en_def": "having a low temperature",
    "sentence": "A: Why are the ice cream bars in the delivery van soft today, even though the driver left the warehouse only thirty minutes ago? B: The cooling system broke down on the highway, so the inside of the van was not {{BLANK}} enough, and we will need to return the whole shipment.",
    "cn": "A：為什麼送貨車裡的冰棒今天是軟的，司機明明三十分鐘前才離開倉庫？ B：冷卻系統在高速公路上故障了，所以車廂內不夠【冷】，我們得把整批貨退回去。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "清涼的；提神的",
    "en_def": "making you feel cooler and less tired",
    "sentence": "A: It was over thirty-five degrees during the outdoor product launch, and many of the visitors looked tired and hot by the afternoon. B: That's why we handed out free lemon ice pops, which were very {{BLANK}}, and several people told me it was the best part of the whole event.",
    "cn": "A：戶外產品發表會時氣溫超過三十五度，到了下午很多來賓看起來又累又熱。 B：這就是為什麼我們發送了免費的檸檬冰棒，非常【清涼】，好幾個人跟我說那是整場活動最棒的部分。"
  },
  {
    "word": "rich",
    "pos": "adj.",
    "cn_def": "濃郁的；油膩的",
    "en_def": "containing a lot of cream, butter, sugar, or flavor",
    "sentence": "A: I had the triple chocolate dessert at the client dinner last night, but I couldn't finish it, even though it looked so wonderful. B: That one is very {{BLANK}}, because the chef uses heavy cream, dark chocolate, and butter, so most guests share one plate between two people.",
    "cn": "A：我昨晚在客戶晚宴上點了三重巧克力甜點，雖然看起來很棒，我卻吃不完。 B：那道非常【濃郁】，因為主廚用了濃奶油、黑巧克力和奶油，所以大部分客人都是兩個人分一盤。"
  },
  {
    "word": "smooth",
    "pos": "adj.",
    "cn_def": "滑順的；細滑的",
    "en_def": "having an even texture without lumps",
    "sentence": "A: The quality control team found small pieces of ice in yesterday's batch, and several stores have already returned the products to our factory. B: We need to check the mixing machine, because when it works correctly, the ice cream is perfectly {{BLANK}}, with no hard bits that customers can feel on their tongues.",
    "cn": "A：品管團隊在昨天那批產品中發現了小冰晶，幾家店已經把產品退回我們工廠了。 B：我們需要檢查攪拌機，因為它正常運作時，冰淇淋會非常【滑順】，顧客舌頭上不會感覺到任何硬顆粒。"
  },
  {
    "word": "melt",
    "pos": "v.",
    "cn_def": "融化",
    "en_def": "to change from solid to liquid because of heat",
    "sentence": "A: Why did the ice cream cake for the retirement party arrive looking so soft and out of shape this afternoon? B: The delivery driver got stuck in heavy traffic for an hour without a freezer bag, so it started to {{BLANK}} in the hot car before he reached our office building.",
    "cn": "A：為什麼今天下午退休派對的冰淇淋蛋糕送來時看起來又軟又變形？ B：送貨司機沒帶保冷袋，在車陣中塞了一個小時，所以蛋糕在抵達我們辦公大樓前，就在悶熱的車裡開始【融化】了。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應；端上",
    "en_def": "to give food or drinks to customers or guests",
    "sentence": "A: The restaurant is fully booked tonight for a company celebration, and the head chef is worried that the desserts will be ready too early. B: Keep the ice cream in the freezer and only {{BLANK}} it to the guests right after the main course, so it stays firm and looks perfect on the plate.",
    "cn": "A：餐廳今晚被一場公司慶功宴包場了，主廚擔心甜點會太早準備好。 B：把冰淇淋放在冷凍庫，等主菜一結束才【端上】給賓客，這樣它能保持硬度，盤中看起來也很完美。"
  },
  {
    "word": "freeze",
    "pos": "v.",
    "cn_def": "冷凍；結冰",
    "en_def": "to become hard and solid because of cold, or to make something do this",
    "sentence": "A: The new kitchen assistant asked how long the fruit mixture needs to stay in the cold room before we can sell it to customers. B: You should {{BLANK}} it for at least six hours, and check it carefully before opening, because if it is still soft, the texture will be wrong.",
    "cn": "A：新來的廚房助理問水果混合物要在冷藏室放多久才能賣給顧客。 B：你至少要【冷凍】六個小時，開店前要仔細檢查，因為如果它還是軟的，口感就會不對。"
  },
  {
    "word": "lick",
    "pos": "v.",
    "cn_def": "舔",
    "en_def": "to move your tongue across something",
    "sentence": "A: The photographer wants a natural picture for our summer advertising campaign, but the child models look nervous in front of the camera. B: Give each child a real ice cream and let them {{BLANK}} it slowly while they play in the park, so they relax and we can take some happy, natural photos.",
    "cn": "A：攝影師想為我們的夏季廣告活動拍一張自然的照片，但兒童模特兒在鏡頭前看起來很緊張。 B：給每個孩子一支真的冰淇淋，讓他們在公園玩的時候慢慢【舔】，這樣他們會放鬆，我們就能拍到一些開心又自然的照片。"
  },
  {
    "word": "taste",
    "pos": "v.",
    "cn_def": "品嚐；試吃",
    "en_def": "to try a small amount of food to find out its flavor",
    "sentence": "A: The supermarket buyer will visit our factory on Thursday to decide whether to stock our new line of desserts in all her stores. B: Let's prepare small samples so she can {{BLANK}} each product before the meeting, because she will trust her own opinion more than our sales figures.",
    "cn": "A：超市採購員週四會來我們工廠，決定是否要在她所有的分店上架我們的新系列甜點。 B：我們準備一些小樣品，讓她在會議前【品嚐】每一項產品，因為她會比較相信自己的意見，而不是我們的銷售數字。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "A: I'm planning the menu for the annual client dinner, and I have already chosen the soup, salad, and main course with the restaurant manager. B: For {{BLANK}}, let's offer a choice of ice cream or fruit cake, since some guests prefer something light after such a large and heavy meal.",
    "cn": "A：我正在規劃年度客戶晚宴的菜單，已經和餐廳經理選好了湯、沙拉和主菜。 B：【甜點】的部分，我們提供冰淇淋或水果蛋糕讓大家選擇吧，因為吃完這麼豐盛的一餐後，有些賓客會想吃清淡一點的東西。"
  },
  {
    "word": "treat",
    "pos": "n.",
    "cn_def": "款待；請客；特別的享受",
    "en_def": "something special and pleasant that you give someone or do for yourself",
    "sentence": "A: The whole department worked late every night this week to finish the project on time, and everyone looks exhausted this Friday afternoon. B: The manager is buying ice cream for all of us as a {{BLANK}}, so please tell the team to come to the break room at three o'clock.",
    "cn": "A：整個部門這週每晚都加班，才準時完成專案，大家在這個週五下午看起來都累壞了。 B：經理要買冰淇淋【請客】慰勞大家，所以請通知團隊三點到休息室集合。"
  },
  {
    "word": "parlor",
    "pos": "n.",
    "cn_def": "店；專賣店",
    "en_def": "a shop that sells a particular product or service, such as ice cream",
    "sentence": "A: Where should we hold the small farewell party for Linda, since she doesn't like noisy bars or expensive restaurants? B: There's a quiet ice cream {{BLANK}} around the corner with comfortable sofas and a private room, and it's the perfect place for a relaxed afternoon with the team.",
    "cn": "A：我們該在哪裡為琳達辦小型歡送會？因為她不喜歡吵鬧的酒吧或昂貴的餐廳。 B：轉角有一家安靜的冰淇淋【店】，有舒適的沙發和包廂，是和團隊度過輕鬆下午的完美地點。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a product name made by a particular company",
    "sentence": "A: Our supermarket has too many kinds of ice cream on the shelves, and the store manager wants to save space in the freezers. B: Let's keep the most popular {{BLANK}} from each price range and stop ordering the ones that sold fewer than fifty boxes last month.",
    "cn": "A：我們超市架上的冰淇淋種類太多了，店長想節省冷凍櫃的空間。 B：我們保留每個價位最受歡迎的【品牌】，並停止訂購上個月賣不到五十盒的那些。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "一份；份量",
    "en_def": "the amount of food served to one person",
    "sentence": "A: Some of our customers say the desserts here are too big, and many of them leave half of their ice cream on the plate. B: We could offer a smaller {{BLANK}} at a lower price, which would reduce food waste and attract people who are trying to eat less sugar.",
    "cn": "A：有些顧客說這裡的甜點太大份，很多人把一半的冰淇淋留在盤子上。 B：我們可以用較低的價格提供小一點的【份量】，這樣能減少食物浪費，也能吸引正在努力少吃糖的人。"
  },
  {
    "word": "calorie",
    "pos": "n.",
    "cn_def": "卡路里；熱量",
    "en_def": "a unit for measuring the energy in food",
    "sentence": "A: The new government rules require restaurants to show health information on their menus by next month, so what should we add for our desserts? B: We need to print the {{BLANK}} count next to each item, so customers can see how much energy is in every scoop before they order.",
    "cn": "A：新的政府規定要求餐廳在下個月前於菜單上標示健康資訊，那我們的甜點要加上什麼呢？ B：我們需要在每個品項旁印上【卡路里】數，讓顧客在點餐前就能知道每一球含有多少熱量。"
  },
  {
    "word": "occasionally",
    "pos": "adv.",
    "cn_def": "偶爾",
    "en_def": "sometimes, but not often",
    "sentence": "A: Do you eat ice cream every day now that you work right next to the famous dessert shop on the first floor of our building? B: No, I only buy it {{BLANK}}, maybe once or twice a month after a long meeting, because I'm trying to stay healthy and save money.",
    "cn": "A：既然你現在就在我們大樓一樓那家知名甜點店旁邊工作，你每天都吃冰淇淋嗎？ B：不，我只是【偶爾】買，大概一個月一兩次，在開完很長的會之後，因為我正努力保持健康和存錢。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "迅速地；很快地",
    "en_def": "fast; in a short time",
    "sentence": "A: Our ice cream truck will be parked at the outdoor music festival all afternoon, and the weather forecast says it will be extremely hot. B: Then the staff must work {{BLANK}} and close the freezer door after every order, because the products will turn soft in just a few minutes.",
    "cn": "A：我們的冰淇淋車整個下午都會停在戶外音樂節，天氣預報說會非常熱。 B：那員工必須【迅速地】工作，每次出餐後都要關上冷凍櫃門，因為產品幾分鐘內就會變軟。"
  },
  {
    "word": "deliciously",
    "pos": "adv.",
    "cn_def": "美味地；可口地",
    "en_def": "in a way that tastes very good",
    "sentence": "A: What did the food critic write about our new dessert in today's newspaper, and should we share the review with our customers? B: She said our coconut ice cream was {{BLANK}} creamy and full of real fruit, so we should definitely post her comments on our website and social media pages.",
    "cn": "A：美食評論家在今天的報紙上怎麼寫我們的新甜點？我們該把評論分享給顧客嗎？ B：她說我們的椰子冰淇淋【美味地】綿密，充滿真正的果肉，所以我們絕對應該把她的評論貼在網站和社群媒體上。"
  }
];

const MCQS = [
  {
    "q": "The new shop gives every child a free _____ of ice cream on Saturdays. Parents say it is a great way to start the weekend.",
    "options": [
      "scoop",
      "portion",
      "brand",
      "parlor"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Tourists at the beach line up for a crisp _____ filled with mango ice cream. The vendor sells over three hundred every afternoon.",
    "options": [
      "calorie",
      "cone",
      "syrup",
      "flavor"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Coffee shops now offer ice cream in a recyclable paper _____ with a lid. This change has reduced plastic waste across the city.",
    "options": [
      "brand",
      "topping",
      "cup",
      "treat"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our research team created a new _____ by mixing black sesame and honey. It became the best seller in Asian markets this summer.",
    "options": [
      "portion",
      "calorie",
      "parlor",
      "flavor"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many hotels serve plain _____ ice cream with apple pie at dinner. Its gentle taste matches almost any warm dessert on the menu.",
    "options": [
      "vanilla",
      "calorie",
      "parlor",
      "portion"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The bakery covers its cakes with melted dark _____ before adding fresh fruit. Customers love the rich brown color and bitter-sweet taste.",
    "options": [
      "portion",
      "chocolate",
      "calorie",
      "brand"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Local farmers sold fresh _____ fruit to our factory this spring. We used the red berries to make a pink seasonal ice cream.",
    "options": [
      "parlor",
      "calorie",
      "strawberry",
      "waffle"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Customers may choose one free _____ such as nuts or fruit with every order. Extra choices cost twenty dollars each at the counter.",
    "options": [
      "calorie",
      "portion",
      "parlor",
      "topping"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Staff should _____ colored sugar over each cupcake just before serving. This keeps the decorations bright and prevents them from melting.",
    "options": [
      "sprinkle",
      "lick",
      "melt",
      "freeze"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The café pours warm maple _____ over its pancakes and ice cream. Guests can ask for more if they want a sweeter dish.",
    "options": [
      "portion",
      "syrup",
      "brand",
      "calorie"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The hotel buffet now has a machine that makes a fresh _____ in two minutes. Guests often add ice cream and berries on top.",
    "options": [
      "calorie",
      "portion",
      "waffle",
      "brand"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Our partners from Italy recommended a shop downtown that makes authentic _____ daily. They said it tastes just like the desserts back home.",
    "options": [
      "calorie",
      "parlor",
      "portion",
      "gelato"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The restaurant offers a dairy-free lemon _____ for guests who cannot drink milk. It is made only from fruit juice, water, and sugar.",
    "options": [
      "sorbet",
      "parlor",
      "calorie",
      "brand"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Our new product is so _____ that customers think it contains extra cream. In fact, it uses a special low-fat milk recipe.",
    "options": [
      "cold",
      "creamy",
      "sweet",
      "refreshing"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many customers found the new cake too _____ and asked for less sugar. The chef will change the recipe before next month.",
    "options": [
      "refreshing",
      "smooth",
      "sweet",
      "creamy"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The warehouse must keep all frozen desserts _____ at minus eighteen degrees. Any rise in temperature can damage the products quickly.",
    "options": [
      "sweet",
      "rich",
      "creamy",
      "cold"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "On hot summer afternoons, a lemon ice pop is very _____ for outdoor workers. The company hands them out free every Friday.",
    "options": [
      "refreshing",
      "rich",
      "creamy",
      "smooth"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "This chocolate cake is extremely _____ because it contains lots of butter and cream. Most guests can only finish half a slice.",
    "options": [
      "refreshing",
      "rich",
      "cold",
      "smooth"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "A new mixing machine keeps the ice cream perfectly _____ with no ice crystals. Customers have noticed the improved texture immediately.",
    "options": [
      "refreshing",
      "sweet",
      "smooth",
      "rich"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Desserts left in a hot delivery van will begin to _____ within minutes. Drivers must always use the special freezer bags provided.",
    "options": [
      "serve",
      "lick",
      "taste",
      "melt"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The waiters will _____ the ice cream right after the main course tonight. Please keep it in the freezer until then.",
    "options": [
      "serve",
      "melt",
      "sprinkle",
      "lick"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Kitchen staff must _____ the fruit mixture for at least six hours before sale. Otherwise the dessert will be too soft to scoop.",
    "options": [
      "taste",
      "freeze",
      "lick",
      "serve"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The supermarket buyer wants to _____ every new product before placing an order. Please prepare small samples for her visit on Thursday.",
    "options": [
      "melt",
      "freeze",
      "taste",
      "sprinkle"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "For _____, the restaurant offers ice cream, fruit cake, or cheese. Most guests choose something light after the large dinner.",
    "options": [
      "brand",
      "calorie",
      "portion",
      "dessert"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The manager bought ice cream for the whole team as a special _____. Everyone had worked late every night to finish the project.",
    "options": [
      "treat",
      "brand",
      "calorie",
      "portion"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "An old ice cream _____ on Main Street has served the town for fifty years. Families still visit it every Sunday afternoon.",
    "options": [
      "calorie",
      "parlor",
      "portion",
      "topping"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The supermarket will stop ordering any ice cream _____ that sells poorly this quarter. Only the most popular products will stay on the shelves.",
    "options": [
      "topping",
      "calorie",
      "brand",
      "portion"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Many restaurants now offer a smaller _____ of dessert at a lower price. This helps reduce food waste and attracts health-conscious diners.",
    "options": [
      "brand",
      "parlor",
      "flavor",
      "portion"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The new law requires shops to print the _____ count next to each item. Customers can then see how much energy each scoop contains.",
    "options": [
      "calorie",
      "parlor",
      "brand",
      "topping"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "I only eat ice cream _____ because I am trying to stay healthy. Usually I have some once or twice a month after work.",
    "options": [
      "deliciously",
      "occasionally",
      "quickly",
      "smoothly"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "scoop": {
    "pos": "n.",
    "en_def": "a round amount of ice cream taken with a special spoon",
    "cn_def": "一球；一勺"
  },
  "cone": {
    "pos": "n.",
    "en_def": "a crisp, pointed biscuit that holds ice cream",
    "cn_def": "甜筒；錐形餅乾筒"
  },
  "cup": {
    "pos": "n.",
    "en_def": "a small container used for serving food or drinks",
    "cn_def": "杯；杯子"
  },
  "flavor": {
    "pos": "n.",
    "en_def": "the particular taste of a food",
    "cn_def": "口味；味道"
  },
  "vanilla": {
    "pos": "n.",
    "en_def": "a sweet flavor made from the seeds of a tropical plant",
    "cn_def": "香草"
  },
  "chocolate": {
    "pos": "n.",
    "en_def": "a sweet brown food made from cocoa beans",
    "cn_def": "巧克力"
  },
  "strawberry": {
    "pos": "n.",
    "en_def": "a small, soft red fruit with tiny seeds on the outside",
    "cn_def": "草莓"
  },
  "topping": {
    "pos": "n.",
    "en_def": "food put on top of another food to add flavor or decoration",
    "cn_def": "配料；淋醬"
  },
  "sprinkle": {
    "pos": "v.",
    "en_def": "to scatter small pieces of something over a surface",
    "cn_def": "撒（上）"
  },
  "syrup": {
    "pos": "n.",
    "en_def": "a thick, sweet liquid made from sugar",
    "cn_def": "糖漿"
  },
  "waffle": {
    "pos": "n.",
    "en_def": "a crisp, flat cake with a pattern of square holes",
    "cn_def": "鬆餅；格子鬆餅"
  },
  "gelato": {
    "pos": "n.",
    "en_def": "an Italian-style ice cream that is dense and smooth",
    "cn_def": "義式冰淇淋"
  },
  "sorbet": {
    "pos": "n.",
    "en_def": "a frozen dessert made from fruit juice and sugar, with no milk",
    "cn_def": "雪酪；冰沙"
  },
  "frozen yogurt": {
    "pos": "n.phr.",
    "en_def": "a cold dessert like ice cream but made from yogurt",
    "cn_def": "優格冰淇淋；霜凍優格"
  },
  "creamy": {
    "pos": "adj.",
    "en_def": "thick and smooth, like cream",
    "cn_def": "綿密的；奶油般的"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "having a taste like sugar",
    "cn_def": "甜的"
  },
  "cold": {
    "pos": "adj.",
    "en_def": "having a low temperature",
    "cn_def": "冰冷的；寒冷的"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel cooler and less tired",
    "cn_def": "清涼的；提神的"
  },
  "rich": {
    "pos": "adj.",
    "en_def": "containing a lot of cream, butter, sugar, or flavor",
    "cn_def": "濃郁的；油膩的"
  },
  "smooth": {
    "pos": "adj.",
    "en_def": "having an even texture without lumps",
    "cn_def": "滑順的；細滑的"
  },
  "melt": {
    "pos": "v.",
    "en_def": "to change from solid to liquid because of heat",
    "cn_def": "融化"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to customers or guests",
    "cn_def": "供應；端上"
  },
  "freeze": {
    "pos": "v.",
    "en_def": "to become hard and solid because of cold, or to make something do this",
    "cn_def": "冷凍；結冰"
  },
  "lick": {
    "pos": "v.",
    "en_def": "to move your tongue across something",
    "cn_def": "舔"
  },
  "taste": {
    "pos": "v.",
    "en_def": "to try a small amount of food to find out its flavor",
    "cn_def": "品嚐；試吃"
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food eaten at the end of a meal",
    "cn_def": "甜點"
  },
  "treat": {
    "pos": "n.",
    "en_def": "something special and pleasant that you give someone or do for yourself",
    "cn_def": "款待；請客；特別的享受"
  },
  "parlor": {
    "pos": "n.",
    "en_def": "a shop that sells a particular product or service, such as ice cream",
    "cn_def": "店；專賣店"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "portion": {
    "pos": "n.",
    "en_def": "the amount of food served to one person",
    "cn_def": "一份；份量"
  },
  "calorie": {
    "pos": "n.",
    "en_def": "a unit for measuring the energy in food",
    "cn_def": "卡路里；熱量"
  },
  "occasionally": {
    "pos": "adv.",
    "en_def": "sometimes, but not often",
    "cn_def": "偶爾"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "迅速地；很快地"
  },
  "deliciously": {
    "pos": "adv.",
    "en_def": "in a way that tastes very good",
    "cn_def": "美味地；可口地"
  }
};

const EXTRA_GLOSSES = {};
