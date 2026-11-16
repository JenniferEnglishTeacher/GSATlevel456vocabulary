// Topic 145 Quiz Data: Food 食物
// Source word list: https://www.examword.com/group-topic/food — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T145 - Food 食物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "flavor",
    "pos": "n.",
    "cn_def": "味道；風味",
    "en_def": "the special taste of a food or drink",
    "sentence": "A: The customers at our new café keep asking for something different, so what kind of muffin should we add to the menu next month? B: Let's try a lemon and ginger {{BLANK}}, because it is light and unusual, and we can offer free samples at the counter to see if people like it.",
    "cn": "A：我們新咖啡館的顧客一直要求點不一樣的東西，那下個月我們應該在菜單上加什麼樣的瑪芬？ B：我們試試檸檬薑的【口味】吧，因為它清爽又特別，而且我們可以在櫃檯提供免費試吃，看看大家喜不喜歡。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的；可口的",
    "en_def": "having a very good taste",
    "sentence": "A: How was the welcome dinner for the new clients last night, and did the restaurant near the station handle such a large group well? B: The service was fast and friendly, and everyone said the grilled salmon was {{BLANK}}, so I think we should book the same place for the year-end party.",
    "cn": "A：昨晚為新客戶舉辦的歡迎晚宴怎麼樣？車站附近那家餐廳能好好招待這麼大一群人嗎？ B：服務又快又親切，而且大家都說烤鮭魚很【美味】，所以我覺得年終派對我們應該訂同一家餐廳。"
  },
  {
    "word": "tasty",
    "pos": "adj.",
    "cn_def": "好吃的；有滋味的",
    "en_def": "having a pleasant, strong taste",
    "sentence": "A: I need to order lunch for the training session on Friday, but our budget is small this quarter, so do you know any good places nearby? B: The noodle shop across the street makes cheap but very {{BLANK}} lunch boxes, and they deliver to the office for free if we order more than twenty.",
    "cn": "A：我需要為星期五的培訓課程訂午餐，但這一季的預算很少，你知道附近有什麼好店家嗎？ B：對街那家麵店做的便當便宜又非常【好吃】，而且如果我們訂超過二十個，他們會免費送到辦公室。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "tasting like sugar or honey",
    "sentence": "A: Our manager is trying to eat more healthily these days, so should we still buy a big chocolate cake for her birthday celebration this afternoon? B: Maybe we should choose a fruit tart instead, because it is less {{BLANK}} than chocolate cake, and everyone in the office can still enjoy a small piece.",
    "cn": "A：我們經理最近努力想吃得更健康，那今天下午為她慶生，我們還要買一個大巧克力蛋糕嗎？ B：也許我們應該改選水果塔，因為它沒有巧克力蛋糕那麼【甜】，而且辦公室的每個人仍然可以享用一小塊。"
  },
  {
    "word": "sour",
    "pos": "adj.",
    "cn_def": "酸的",
    "en_def": "having a sharp taste like lemon or vinegar",
    "sentence": "A: Why did several guests leave their drinks on the tables after the opening ceremony at the hotel yesterday afternoon? B: The kitchen staff added too much lemon juice to the punch, so it tasted very {{BLANK}}, and most people only drank a little before they switched to water or coffee.",
    "cn": "A：為什麼昨天下午飯店開幕典禮結束後，好幾位賓客把飲料留在桌上？ B：廚房員工在水果酒裡加了太多檸檬汁，所以喝起來非常【酸】，大部分的人只喝了一點，就改喝水或咖啡了。"
  },
  {
    "word": "bitter",
    "pos": "adj.",
    "cn_def": "苦的",
    "en_def": "having a strong, sharp, unpleasant taste, like strong coffee",
    "sentence": "A: The coffee from the new machine in the break room tastes terrible, so should we call the supplier and ask them to check it? B: Yes, please call them today, because the coffee is so {{BLANK}} that many staff members now walk to the café downstairs and waste time during their short breaks.",
    "cn": "A：休息室新機器煮的咖啡很難喝，我們應該打電話給供應商請他們來檢查嗎？ B：好，請今天就打給他們，因為咖啡【苦】到很多員工現在都走到樓下的咖啡店，在短暫的休息時間裡浪費了不少時間。"
  },
  {
    "word": "spicy",
    "pos": "adj.",
    "cn_def": "辣的",
    "en_def": "having a hot, strong taste from chili or pepper",
    "sentence": "A: We are taking the visitors from Germany out for dinner on Thursday, so is the Sichuan restaurant on Fifth Avenue a good choice? B: It might be risky, because many of their dishes are very {{BLANK}}, so let's ask our guests first whether they enjoy hot food or prefer something milder.",
    "cn": "A：我們星期四要帶德國來的訪客出去吃晚餐，第五大道上那家川菜館是個好選擇嗎？ B：可能有點冒險，因為他們很多菜都非常【辣】，所以我們先問問客人是喜歡吃辣，還是比較喜歡溫和一點的食物。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹香的；可口的（非甜的）",
    "en_def": "salty or spicy rather than sweet",
    "sentence": "A: Most of the snacks at our afternoon meetings are cookies and cakes, but some people say they want something different, so what should I order? B: Why don't you get some {{BLANK}} pastries with cheese and ham, because not everyone likes sugar, and they will keep people full until dinner.",
    "cn": "A：我們下午會議的點心大多是餅乾和蛋糕，但有些人說想吃點不一樣的，我該訂什麼？ B：你何不訂一些夾起司和火腿的【鹹】酥皮點心，因為不是每個人都喜歡甜的，而且這些能讓大家撐到晚餐。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的",
    "en_def": "recently made, picked, or caught; not old",
    "sentence": "A: Why are the salads at the new restaurant downtown so much more expensive than the ones at the shopping mall food court? B: The owner buys {{BLANK}} vegetables from local farms every morning, so the quality is much better, and many office workers are happy to pay a little more for a healthy lunch.",
    "cn": "A：為什麼市中心那家新餐廳的沙拉比購物中心美食街的貴那麼多？ B：老闆每天早上都向當地農場購買【新鮮】蔬菜，所以品質好很多，許多上班族也很樂意多付一點錢吃一頓健康的午餐。"
  },
  {
    "word": "ripe",
    "pos": "adj.",
    "cn_def": "成熟的",
    "en_def": "fully grown and ready to eat",
    "sentence": "A: The bananas we bought for the staff kitchen on Monday are still hard and green, so can people eat them yet? B: Not yet, they won't be {{BLANK}} for another two or three days, so please put them in a paper bag on the counter and tell everyone to wait until Thursday.",
    "cn": "A：我們星期一為員工廚房買的香蕉還是硬的、綠的，大家現在可以吃了嗎？ B：還不行，它們還要再兩三天才會【成熟】，所以請把它們放進紙袋擺在流理台上，並告訴大家等到星期四再吃。"
  },
  {
    "word": "raw",
    "pos": "adj.",
    "cn_def": "生的；未煮過的",
    "en_def": "not cooked",
    "sentence": "A: Several employees felt sick after the company picnic on Saturday, so has anyone found out what caused the problem? B: The health inspector thinks the chicken was still {{BLANK}} in the middle because the grill was not hot enough, so next time we will hire a professional caterer to cook everything.",
    "cn": "A：星期六公司野餐後有好幾位員工身體不舒服，有人查出問題的原因了嗎？ B：衛生稽查員認為雞肉中間還是【生的】，因為烤架不夠熱，所以下次我們會請專業的外燴業者來烹煮所有食物。"
  },
  {
    "word": "cooked",
    "pos": "adj.",
    "cn_def": "煮熟的",
    "en_def": "heated and prepared so it is ready to eat",
    "sentence": "A: Is it safe to leave the leftover rice and chicken from the lunch meeting on the table until the afternoon cleaning staff arrive? B: No, {{BLANK}} food should go into the refrigerator within two hours, so please pack it in boxes now, and anyone can take some home after work.",
    "cn": "A：午餐會議剩下的飯和雞肉，放在桌上等下午清潔人員來可以嗎？ B：不行，【煮熟的】食物應該在兩小時內放進冰箱，所以請現在就把它們裝進盒子裡，下班後任何人都可以帶一些回家。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: The bakery on the corner always has a long line in the morning, so how do they manage to sell so many fresh rolls before nine o'clock? B: The owner told me that his staff start at four a.m. and {{BLANK}} about five hundred rolls every day, so the shelves are always full when the commuters arrive.",
    "cn": "A：轉角那家麵包店早上總是大排長龍，他們是怎麼在九點前賣出那麼多新鮮麵包捲的？ B：老闆告訴我，他的員工凌晨四點就開工，每天【烘烤】大約五百個麵包捲，所以通勤族到的時候，架上總是滿滿的。"
  },
  {
    "word": "boil",
    "pos": "v.",
    "cn_def": "煮沸；水煮",
    "en_def": "to cook something in very hot water",
    "sentence": "A: I'm preparing pasta for twenty people at the team-building event tomorrow, but I've never cooked for such a large group, so do you have any advice? B: Use the biggest pots in the kitchen and {{BLANK}} the pasta in two batches, because if you put too much in one pot, it will stick together.",
    "cn": "A：我明天要在團隊建立活動上為二十個人準備義大利麵，但我從沒為這麼多人煮過飯，你有什麼建議嗎？ B：用廚房裡最大的鍋子，分兩批【煮】義大利麵，因為如果你一次在一個鍋子裡放太多，麵會黏在一起。"
  },
  {
    "word": "fry",
    "pos": "v.",
    "cn_def": "油炸；煎",
    "en_def": "to cook food in hot oil",
    "sentence": "A: Our restaurant's kitchen gets very smoky during the lunch rush, so is there anything we can do before the health inspection next week? B: We should clean the fans over the stoves and {{BLANK}} smaller amounts of chicken at a time, because too much food in the oil makes a lot of smoke.",
    "cn": "A：我們餐廳的廚房在午餐尖峰時段煙很大，在下週衛生檢查前我們能做些什麼嗎？ B：我們應該清洗爐子上方的抽風機，並且每次少量【炸】雞肉，因為油裡放太多食物會產生大量油煙。"
  },
  {
    "word": "grill",
    "pos": "v.",
    "cn_def": "燒烤；烤",
    "en_def": "to cook food over or under direct strong heat",
    "sentence": "A: What are we serving at the outdoor party for our customers next Saturday, and do we need to hire extra staff to help? B: We plan to {{BLANK}} burgers and vegetables in the garden behind the shop, so we only need two more people to help with the cooking and cleaning.",
    "cn": "A：下週六為顧客舉辦的戶外派對我們要提供什麼？我們需要多請工作人員幫忙嗎？ B：我們打算在店後面的花園【烤】漢堡和蔬菜，所以只需要再多兩個人來幫忙料理和清潔就好。"
  },
  {
    "word": "roast",
    "pos": "v.",
    "cn_def": "烘烤（肉類或蔬菜）",
    "en_def": "to cook meat or vegetables in an oven or over a fire",
    "sentence": "A: The hotel wants a special main course for the holiday dinner in December, so what is the chef planning to serve this year? B: He wants to {{BLANK}} a whole turkey for each table with potatoes and carrots, because guests loved it last year, and it looks very impressive in photos.",
    "cn": "A：飯店希望十二月的節日晚宴有一道特別的主菜，主廚今年打算端出什麼？ B：他想為每一桌【烤】一整隻火雞，搭配馬鈴薯和紅蘿蔔，因為去年客人很喜歡，而且在照片裡看起來非常令人印象深刻。"
  },
  {
    "word": "steam",
    "pos": "v.",
    "cn_def": "蒸",
    "en_def": "to cook food using the hot air from boiling water",
    "sentence": "A: Many of our lunch customers are asking for healthier choices, so how can we change our vegetable side dishes without making them boring? B: We could {{BLANK}} the broccoli and carrots instead of frying them, and then add a little garlic and lemon, so they stay bright, crunchy and full of vitamins.",
    "cn": "A：很多午餐客人要求更健康的選擇，我們要怎麼改變蔬菜配菜，又不會讓它們變得無聊？ B：我們可以把花椰菜和紅蘿蔔改用【蒸】的而不是用炸的，然後加一點大蒜和檸檬，這樣它們就能保持顏色鮮亮、口感爽脆又充滿維生素。"
  },
  {
    "word": "ingredient",
    "pos": "n.",
    "cn_def": "食材；原料",
    "en_def": "one of the foods used to make a dish",
    "sentence": "A: Why did the factory stop producing our best-selling cookies for a whole week last month, even though customers wanted to buy them? B: One important {{BLANK}}, a special butter from New Zealand, was delayed at the port, so the production line had to wait until the next shipment arrived.",
    "cn": "A：為什麼上個月工廠停產我們最暢銷的餅乾整整一週，即使顧客想買？ B：有一樣重要的【原料】，一種來自紐西蘭的特殊奶油，在港口延誤了，所以生產線必須等到下一批貨送到。"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "cn_def": "食譜；配方",
    "en_def": "a set of instructions for cooking a dish",
    "sentence": "A: The soup at your café tastes exactly the same every day, even when different cooks are working, so how do you manage that? B: Every cook must follow the same {{BLANK}}, which lists the exact amounts and cooking times, and the head chef checks the taste before we serve it.",
    "cn": "A：你們咖啡館的湯每天喝起來都一模一樣，即使是不同的廚師在上班，你們是怎麼辦到的？ B：每位廚師都必須遵照同一份【食譜】，上面列出確切的份量和烹煮時間，而且主廚會在上菜前試味道。"
  },
  {
    "word": "dish",
    "pos": "n.",
    "cn_def": "一道菜；菜餚",
    "en_def": "food prepared in a particular way as part of a meal",
    "sentence": "A: Our restaurant's sales have been slow since the new place opened next door, so what can we do to bring customers back? B: We could create a new {{BLANK}} every month using seasonal vegetables, and then promote it online with photos, because people like to try something special.",
    "cn": "A：自從隔壁開了新餐廳後，我們餐廳的生意一直很冷清，我們能做些什麼把客人吸引回來？ B：我們可以每個月用當季蔬菜推出一道新【菜】，然後在網路上用照片宣傳，因為大家喜歡嘗試特別的東西。"
  },
  {
    "word": "meal",
    "pos": "n.",
    "cn_def": "一餐；餐點",
    "en_def": "the food eaten at one time, such as breakfast, lunch or dinner",
    "sentence": "A: The training day will last from eight in the morning until six in the evening, so will the company provide any food for the trainees? B: Yes, each trainee will get a free {{BLANK}} at lunchtime in the staff cafeteria, and there will be coffee and cookies during the afternoon break.",
    "cn": "A：培訓日從早上八點持續到晚上六點，公司會為受訓人員提供食物嗎？ B：會的，每位受訓人員午餐時間都可以在員工餐廳享用一份免費【餐點】，下午休息時間也會有咖啡和餅乾。"
  },
  {
    "word": "snack",
    "pos": "n.",
    "cn_def": "點心；零食",
    "en_def": "a small amount of food eaten between meals",
    "sentence": "A: Our team often works late during the busy season, and people get tired and hungry around four o'clock, so do you have any ideas? B: Let's keep a basket of fruit and nuts in the meeting room, so everyone can grab a quick {{BLANK}} and keep working without leaving the office.",
    "cn": "A：旺季時我們團隊常常加班，大家到了四點左右就又累又餓，你有什麼點子嗎？ B：我們在會議室放一籃水果和堅果，這樣每個人都可以很快拿個【點心】，不用離開辦公室就能繼續工作。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "（食物的）一份",
    "en_def": "the amount of food served to one person",
    "sentence": "A: Some customers complained that our lunch set is too small for the price, so should we raise the amount of food or lower the price? B: I think we should offer a larger {{BLANK}} for an extra two dollars, so hungry customers can choose it while others keep the regular size.",
    "cn": "A：有些客人抱怨我們的午間套餐以這個價格來說份量太少，我們應該增加食物量還是降低價格？ B：我認為我們應該提供加兩塊錢的大【份】選項，這樣餓的客人可以選它，其他人則維持一般份量。"
  },
  {
    "word": "nutrition",
    "pos": "n.",
    "cn_def": "營養",
    "en_def": "the healthy substances in food that the body needs",
    "sentence": "A: The school cafeteria wants to improve its lunches for students next year, so who is helping them plan the new menu? B: They have hired an expert in {{BLANK}} who will make sure every lunch has enough vegetables, protein and vitamins, while keeping the cost under three dollars per student.",
    "cn": "A：學校餐廳明年想改善學生的午餐，誰在幫他們規劃新菜單？ B：他們聘請了一位【營養】專家，她會確保每份午餐都有足夠的蔬菜、蛋白質和維生素，同時把每位學生的費用控制在三美元以下。"
  },
  {
    "word": "calorie",
    "pos": "n.",
    "cn_def": "卡路里；熱量",
    "en_def": "a unit that measures how much energy food gives you",
    "sentence": "A: A lot of our gym members ask how healthy the smoothies in our juice bar are, so what information should we give them? B: Let's print the {{BLANK}} count and the amount of sugar for each drink on the menu board, so members can choose the right one for their fitness goals.",
    "cn": "A：很多健身房會員詢問我們果汁吧的冰沙有多健康，我們應該提供什麼資訊給他們？ B：我們把每杯飲料的【卡路里】數和含糖量印在菜單板上，這樣會員就能依照自己的健身目標選擇適合的飲品。"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的",
    "en_def": "grown without chemicals",
    "sentence": "A: Why are the tomatoes at the farmers' market twice as expensive as the ones at the supermarket near our office? B: They are {{BLANK}}, which means the farmers don't use any chemicals, so it takes more work to grow them, but many customers think the better taste is worth the higher price.",
    "cn": "A：為什麼農夫市集的番茄比我們辦公室附近超市的貴兩倍？ B：它們是【有機的】，意思是農夫不使用任何化學藥劑，所以種植起來更費工，但很多顧客覺得更好的味道值得更高的價格。"
  },
  {
    "word": "processed",
    "pos": "adj.",
    "cn_def": "加工的",
    "en_def": "changed in a factory with added chemicals or preservatives",
    "sentence": "A: The doctor at our company health check told me that I need to change my diet, so what did she recommend? B: She said I should eat less {{BLANK}} food like sausages and instant noodles, and cook more meals at home with fresh vegetables and fish, especially on busy weekdays.",
    "cn": "A：公司健康檢查的醫生告訴我需要改變飲食，她建議了什麼？ B：她說我應該少吃香腸和泡麵這類【加工】食品，多在家用新鮮蔬菜和魚做飯，尤其是在忙碌的平日。"
  },
  {
    "word": "appetizing",
    "pos": "adj.",
    "cn_def": "令人有食慾的；誘人的",
    "en_def": "looking or smelling good, so you want to eat it",
    "sentence": "A: Our online food orders dropped last month, and the marketing team thinks the problem is our website, so what should we change first? B: We should take new photos of every item with better lighting, because the old pictures look dark and not very {{BLANK}}, so customers don't feel like ordering.",
    "cn": "A：我們上個月的網路訂餐量下滑，行銷團隊認為問題出在網站上，我們應該先改什麼？ B：我們應該用更好的燈光為每樣餐點重新拍照，因為舊照片看起來很暗、不太【誘人】，所以顧客沒有想點餐的衝動。"
  },
  {
    "word": "hungry",
    "pos": "adj.",
    "cn_def": "飢餓的",
    "en_def": "wanting or needing food",
    "sentence": "A: The client meeting went on for almost four hours without a break, so how did everyone feel when it finally ended? B: Everyone was tired and very {{BLANK}}, so we ordered pizza right away, and we agreed that next time we will plan a lunch break in the middle of long meetings.",
    "cn": "A：客戶會議幾乎連續開了四個小時都沒休息，終於結束時大家感覺怎麼樣？ B：每個人都很累而且非常【餓】，所以我們馬上訂了披薩，並且同意下次開長會時要在中間安排午餐休息。"
  },
  {
    "word": "full",
    "pos": "adj.",
    "cn_def": "吃飽的",
    "en_def": "having eaten so much that you do not want more",
    "sentence": "A: Would you like some dessert after the business lunch, because the chocolate cake at this restaurant is famous in the area? B: Thank you, but I'm already {{BLANK}} after that big plate of pasta, so I'll just have a cup of tea before we go back to the office for the afternoon meeting.",
    "cn": "A：商務午餐後你想來點甜點嗎？這家餐廳的巧克力蛋糕在這一帶很有名。 B：謝謝，但吃完那一大盤義大利麵我已經【飽了】，所以我們回辦公室開下午的會之前，我喝杯茶就好。"
  },
  {
    "word": "taste",
    "pos": "n.",
    "cn_def": "味道；口味",
    "en_def": "the flavor that food has in your mouth",
    "sentence": "A: We changed our coffee supplier last month to save money, but have any customers said anything about the new beans? B: A few regular customers said the {{BLANK}} is weaker than before, so we should compare the two kinds of beans carefully before we sign a long contract.",
    "cn": "A：我們上個月為了省錢換了咖啡供應商，有顧客對新的咖啡豆說了什麼嗎？ B：幾位常客說【味道】比以前淡，所以在簽長期合約前，我們應該仔細比較這兩種咖啡豆。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應；上（菜）",
    "en_def": "to give food or drinks to people at a meal",
    "sentence": "A: The conference starts at nine, and about two hundred guests will arrive early, so what time should the hotel start the breakfast? B: Let's ask them to {{BLANK}} breakfast from seven thirty in the main hall, so guests have plenty of time to eat and register before the opening speech.",
    "cn": "A：研討會九點開始，大約兩百位來賓會提早到，飯店應該幾點開始提供早餐？ B：我們請他們七點半起在主廳【供應】早餐，這樣來賓在開幕致詞前就有充裕的時間用餐和報到。"
  },
  {
    "word": "garnish",
    "pos": "v.",
    "cn_def": "裝飾（菜餚）；點綴",
    "en_def": "to decorate food with a small amount of another food",
    "sentence": "A: The plates at our restaurant look a little plain when the waiters bring them out, so how can we make them more attractive without spending much? B: The cooks can {{BLANK}} each plate with some fresh herbs or a slice of lemon, which costs very little but makes the food look much more colorful.",
    "cn": "A：服務生端出來的餐盤看起來有點單調，我們要怎麼在不花太多錢的情況下讓它們更吸引人？ B：廚師可以用一些新鮮香草或一片檸檬來【點綴】每個盤子，這花費很少，卻能讓食物看起來更加繽紛。"
  },
  {
    "word": "aroma",
    "pos": "n.",
    "cn_def": "香味；芳香",
    "en_def": "a pleasant smell, especially of food or coffee",
    "sentence": "A: Why do so many people walk into the bakery near the subway station every morning, even when they are in a hurry to get to work? B: The {{BLANK}} of fresh bread and coffee fills the whole street, so people can't resist stopping for a quick breakfast on their way to the office.",
    "cn": "A：為什麼每天早上有那麼多人走進地鐵站附近的麵包店，即使他們趕著上班？ B：新鮮麵包和咖啡的【香味】瀰漫整條街，所以大家在去辦公室的路上都忍不住停下來買份快速早餐。"
  }
];

const MCQS = [
  {
    "q": "Our new energy drink comes in a mango _____ and a berry one. Both will be available in stores from next Monday.",
    "options": [
      "flavor",
      "portion",
      "recipe",
      "calorie"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The reviewer said the chef's seafood soup was truly _____. As a result, reservations at the restaurant doubled within a week.",
    "options": [
      "hungry",
      "delicious",
      "raw",
      "processed"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Children often refuse vegetables because some of them taste _____. Mixing them with cheese can make them easier to accept.",
    "options": [
      "ripe",
      "organic",
      "bitter",
      "full"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The kitchen manager asked staff to keep _____ meat away from salads. This rule helps prevent food poisoning in the restaurant.",
    "options": [
      "hungry",
      "savory",
      "appetizing",
      "raw"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Please do not eat those mangoes yet because they are still green. They should be _____ by the end of the week.",
    "options": [
      "ripe",
      "spicy",
      "processed",
      "cooked"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Our café will _____ its own bread from next month. The new oven arrives on Tuesday and will be installed by Thursday.",
    "options": [
      "boil",
      "bake",
      "fry",
      "garnish"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Before you add the noodles, you need to _____ the water in a large pot. Then add a little salt for flavor.",
    "options": [
      "fry",
      "roast",
      "boil",
      "garnish"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The chef will _____ fresh steaks over an open fire during the summer party. Guests can choose how well done they want them.",
    "options": [
      "boil",
      "steam",
      "garnish",
      "grill"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Milk is the main _____ in this new dessert. Because of this, the product label must include a clear allergy warning.",
    "options": [
      "ingredient",
      "aroma",
      "snack",
      "nutrition"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Our head chef would not share the _____ for her famous sauce. She said it was a family secret from her grandmother.",
    "options": [
      "portion",
      "recipe",
      "snack",
      "aroma"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The hotel restaurant now offers a vegetarian _____ for every course. This change was made after many guests asked for more options.",
    "options": [
      "calorie",
      "nutrition",
      "dish",
      "taste"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Employees who work the night shift receive a free hot _____. It is served in the staff cafeteria at midnight.",
    "options": [
      "calorie",
      "ingredient",
      "aroma",
      "meal"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Airlines usually give passengers a light _____ on short flights. On longer flights, they serve a full dinner instead.",
    "options": [
      "snack",
      "recipe",
      "nutrition",
      "flavor"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The restaurant reduced the size of each _____ to cut food waste. However, customers can ask for a second serving at no extra cost.",
    "options": [
      "flavor",
      "portion",
      "aroma",
      "recipe"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Each drink on the menu shows its _____ count next to the price. This helps health-conscious customers make better choices.",
    "options": [
      "flavor",
      "aroma",
      "calorie",
      "dish"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The supermarket's _____ vegetables are grown without chemicals. They cost a little more, but sales have risen steadily this year.",
    "options": [
      "bitter",
      "hungry",
      "full",
      "organic"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Doctors advise people to avoid _____ meats such as ham and sausages. These foods often contain a lot of salt and fat.",
    "options": [
      "processed",
      "hungry",
      "ripe",
      "sweet"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The photos on the new menu make every dish look _____. Since the update, the average order has grown by fifteen percent.",
    "options": [
      "hungry",
      "appetizing",
      "raw",
      "sour"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Most workers are _____ by noon because they start early. That is why the cafeteria opens for lunch at eleven thirty.",
    "options": [
      "ripe",
      "bitter",
      "hungry",
      "savory"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The waiter will _____ the main course after the speeches. Please make sure every guest has a drink before then.",
    "options": [
      "bake",
      "boil",
      "fry",
      "serve"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Our coffee shop is known for the rich _____ of its roasted beans. Customers can smell it from the end of the block.",
    "options": [
      "aroma",
      "portion",
      "calorie",
      "snack"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Many customers prefer _____ snacks such as cheese crackers in the afternoon. Sweet cookies are more popular in the morning.",
    "options": [
      "ripe",
      "savory",
      "raw",
      "hungry"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The new lemon candy is too _____ for many young children. The company plans to add more sugar to the next batch.",
    "options": [
      "full",
      "raw",
      "sour",
      "cooked"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "This sauce is extremely _____ because it contains three kinds of chili. Please warn customers before they order it.",
    "options": [
      "ripe",
      "full",
      "organic",
      "spicy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ice cream shop received a health award last year. Its fruit is delivered _____ from local farms every morning.",
    "options": [
      "fresh",
      "hungry",
      "bitter",
      "processed"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our company offers a lunch course on healthy eating for staff. A local expert will explain basic _____ and how to plan balanced meals.",
    "options": [
      "flavor",
      "nutrition",
      "portion",
      "aroma"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "If you are not hungry yet, the meal can wait. The guests said they were still _____ from the large breakfast.",
    "options": [
      "ripe",
      "organic",
      "full",
      "savory"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The cooks _____ the fish over boiling water for ten minutes. This keeps the meat soft and uses no oil at all.",
    "options": [
      "serve",
      "garnish",
      "fry",
      "steam"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The cooks usually _____ the potatoes and chicken together in the oven. The dish takes about an hour to prepare.",
    "options": [
      "roast",
      "boil",
      "serve",
      "garnish"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Customers in the taste test preferred our new chips. They said the chips were crunchy and very _____, and the price was fair.",
    "options": [
      "hungry",
      "tasty",
      "raw",
      "full"
    ],
    "answer": 1,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "flavor": {
    "pos": "n.",
    "en_def": "the special taste of a food or drink",
    "cn_def": "味道；風味"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "having a very good taste",
    "cn_def": "美味的；可口的"
  },
  "tasty": {
    "pos": "adj.",
    "en_def": "having a pleasant, strong taste",
    "cn_def": "好吃的；有滋味的"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting like sugar or honey",
    "cn_def": "甜的"
  },
  "sour": {
    "pos": "adj.",
    "en_def": "having a sharp taste like lemon or vinegar",
    "cn_def": "酸的"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong, sharp, unpleasant taste, like strong coffee",
    "cn_def": "苦的"
  },
  "spicy": {
    "pos": "adj.",
    "en_def": "having a hot, strong taste from chili or pepper",
    "cn_def": "辣的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy rather than sweet",
    "cn_def": "鹹香的；可口的（非甜的）"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "recently made, picked, or caught; not old",
    "cn_def": "新鮮的"
  },
  "ripe": {
    "pos": "adj.",
    "en_def": "fully grown and ready to eat",
    "cn_def": "成熟的"
  },
  "raw": {
    "pos": "adj.",
    "en_def": "not cooked",
    "cn_def": "生的；未煮過的"
  },
  "cooked": {
    "pos": "adj.",
    "en_def": "heated and prepared so it is ready to eat",
    "cn_def": "煮熟的"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘烤"
  },
  "boil": {
    "pos": "v.",
    "en_def": "to cook something in very hot water",
    "cn_def": "煮沸；水煮"
  },
  "fry": {
    "pos": "v.",
    "en_def": "to cook food in hot oil",
    "cn_def": "油炸；煎"
  },
  "grill": {
    "pos": "v.",
    "en_def": "to cook food over or under direct strong heat",
    "cn_def": "燒烤；烤"
  },
  "roast": {
    "pos": "v.",
    "en_def": "to cook meat or vegetables in an oven or over a fire",
    "cn_def": "烘烤（肉類或蔬菜）"
  },
  "steam": {
    "pos": "v.",
    "en_def": "to cook food using the hot air from boiling water",
    "cn_def": "蒸"
  },
  "ingredient": {
    "pos": "n.",
    "en_def": "one of the foods used to make a dish",
    "cn_def": "食材；原料"
  },
  "recipe": {
    "pos": "n.",
    "en_def": "a set of instructions for cooking a dish",
    "cn_def": "食譜；配方"
  },
  "dish": {
    "pos": "n.",
    "en_def": "food prepared in a particular way as part of a meal",
    "cn_def": "一道菜；菜餚"
  },
  "meal": {
    "pos": "n.",
    "en_def": "the food eaten at one time, such as breakfast, lunch or dinner",
    "cn_def": "一餐；餐點"
  },
  "snack": {
    "pos": "n.",
    "en_def": "a small amount of food eaten between meals",
    "cn_def": "點心；零食"
  },
  "portion": {
    "pos": "n.",
    "en_def": "the amount of food served to one person",
    "cn_def": "（食物的）一份"
  },
  "nutrition": {
    "pos": "n.",
    "en_def": "the healthy substances in food that the body needs",
    "cn_def": "營養"
  },
  "calorie": {
    "pos": "n.",
    "en_def": "a unit that measures how much energy food gives you",
    "cn_def": "卡路里；熱量"
  },
  "organic": {
    "pos": "adj.",
    "en_def": "grown without chemicals",
    "cn_def": "有機的"
  },
  "processed": {
    "pos": "adj.",
    "en_def": "changed in a factory with added chemicals or preservatives",
    "cn_def": "加工的"
  },
  "appetizing": {
    "pos": "adj.",
    "en_def": "looking or smelling good, so you want to eat it",
    "cn_def": "令人有食慾的；誘人的"
  },
  "hungry": {
    "pos": "adj.",
    "en_def": "wanting or needing food",
    "cn_def": "飢餓的"
  },
  "full": {
    "pos": "adj.",
    "en_def": "having eaten so much that you do not want more",
    "cn_def": "吃飽的"
  },
  "taste": {
    "pos": "n.",
    "en_def": "the flavor that food has in your mouth",
    "cn_def": "味道；口味"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to people at a meal",
    "cn_def": "供應；上（菜）"
  },
  "garnish": {
    "pos": "v.",
    "en_def": "to decorate food with a small amount of another food",
    "cn_def": "裝飾（菜餚）；點綴"
  },
  "aroma": {
    "pos": "n.",
    "en_def": "a pleasant smell, especially of food or coffee",
    "cn_def": "香味；芳香"
  }
};

const EXTRA_GLOSSES = {};
