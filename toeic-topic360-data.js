// Topic 360 Quiz Data: Snacks 零食
// Source word list: https://www.examword.com/group-topic/snacks — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T360 - Snacks 零食",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "munch",
    "pos": "v.",
    "cn_def": "大聲咀嚼；津津有味地吃",
    "en_def": "to eat something noisily and steadily",
    "sentence": "A: Why did the manager look so annoyed during the client call this morning, and was there a problem with the sound system in the room? B: The system was fine, but one of the interns kept trying to {{BLANK}} on a bag of apples next to the microphone, so the clients could hear every bite clearly.",
    "cn": "A：今天早上和客戶通電話時，經理為什麼看起來那麼不高興？會議室的音響系統有問題嗎？ B：系統沒問題，但有一位實習生一直在麥克風旁邊【大聲嚼】著一袋蘋果，所以客戶把每一口都聽得清清楚楚。"
  },
  {
    "word": "nibble",
    "pos": "v.",
    "cn_def": "小口地吃；一點一點地咬",
    "en_def": "to eat something by taking very small bites",
    "sentence": "A: Did the new designer eat anything at the welcome lunch yesterday, or was she too nervous to enjoy the food that the team had ordered for her? B: She was a little nervous, so she only wanted to {{BLANK}} on some fruit and bread while she listened to everyone introduce themselves and explain their roles.",
    "cn": "A：新來的設計師昨天在歡迎午餐上有吃東西嗎？還是她太緊張，沒辦法享受團隊幫她訂的餐點？ B：她有點緊張，所以在聽大家自我介紹、說明各自職務時，她只想【小口吃】一點水果和麵包。"
  },
  {
    "word": "bite",
    "pos": "n.",
    "cn_def": "一口；咬一口",
    "en_def": "a small amount of food that you take into your mouth at one time",
    "sentence": "A: Have you tried the new sandwiches that the café on the first floor started selling this week, and are they worth the higher price? B: I only had one {{BLANK}} of my coworker's chicken sandwich before a meeting started, but it tasted fresh and delicious, so I plan to buy one for lunch tomorrow.",
    "cn": "A：你吃過一樓咖啡廳這週開始賣的新三明治了嗎？值得那個比較高的價錢嗎？ B：會議開始前我只吃了同事的雞肉三明治一【口】，但是吃起來很新鮮又好吃，所以我打算明天買一個當午餐。"
  },
  {
    "word": "crisps",
    "pos": "n.",
    "cn_def": "洋芋片（英式用法）",
    "en_def": "thin slices of potato fried until hard, sold in bags (British English)",
    "sentence": "A: What should we put in the snack baskets for the visitors from our London office, since they will arrive in the late afternoon after a long flight? B: Let's include some fruit, a few chocolate bars, and several bags of salted {{BLANK}}, because the British team always says that is their favorite snack during long meetings.",
    "cn": "A：倫敦辦公室的訪客會在長途飛行後於傍晚抵達，我們應該在給他們的點心籃裡放些什麼？ B：我們放一些水果、幾條巧克力棒，還有幾包鹹味【洋芋片】吧，因為英國團隊總說那是他們開長會時最愛的點心。"
  },
  {
    "word": "chips",
    "pos": "n.",
    "cn_def": "洋芋片（美式用法）",
    "en_def": "thin slices of potato fried until hard, sold in bags (American English)",
    "sentence": "A: Why is the vending machine on the third floor always empty by Friday, even though the company refills it every Monday morning? B: Most employees buy potato {{BLANK}} from it during their afternoon break, so the supplier said it will send larger boxes and refill the machine twice a week instead.",
    "cn": "A：公司每週一早上都會補貨，為什麼三樓的販賣機每到週五總是空的？ B：大部分員工在下午休息時都會從那裡買洋芋【片】，所以供應商說會送更大箱的貨，並改成每週補貨兩次。"
  },
  {
    "word": "popcorn",
    "pos": "n.",
    "cn_def": "爆米花",
    "en_def": "corn seeds that are heated until they burst open and become light and white",
    "sentence": "A: Are we going to serve any food at the company movie night on Friday, or should employees bring their own snacks from home? B: The event team rented a machine to make fresh {{BLANK}}, and they will also provide soft drinks, so people only need to bring a cushion if they want to sit comfortably.",
    "cn": "A：週五的公司電影之夜會提供食物嗎？還是員工應該自己從家裡帶零食？ B：活動小組租了一台機器現做【爆米花】，也會提供汽水，所以大家如果想坐得舒服一點，只需要帶個坐墊就好。"
  },
  {
    "word": "cracker",
    "pos": "n.",
    "cn_def": "蘇打餅；薄脆餅乾",
    "en_def": "a thin, dry, crisp biscuit, often eaten with cheese",
    "sentence": "A: What can I eat before the long training session this afternoon, since I missed lunch because the client meeting ran over by an hour? B: There is a box of cheese and {{BLANK}} packs in the kitchen cabinet, so take one of those, because the session lasts three hours and there will not be any break.",
    "cn": "A：今天下午的長時間訓練課開始前我可以吃些什麼？因為客戶會議超時一小時，我錯過了午餐。 B：廚房櫃子裡有一盒起司配【蘇打餅】的小包裝，拿一包吧，因為課程長達三小時，中間不會休息。"
  },
  {
    "word": "cookie",
    "pos": "n.",
    "cn_def": "餅乾（美式用法）",
    "en_def": "a small, flat, sweet cake that is baked until firm (American English)",
    "sentence": "A: Who brought the plate of desserts to the meeting room, and are they for everyone or only for the guests from the bank? B: Linda baked a chocolate chip {{BLANK}} for each person to celebrate the end of the project, so please take one before they are all gone this afternoon.",
    "cn": "A：是誰把那盤甜點帶到會議室的？是給大家吃的，還是只給銀行來的客人？ B：琳達為了慶祝專案結束，替每個人都烤了一塊巧克力碎片【餅乾】，所以請在今天下午被拿光之前去拿一塊。"
  },
  {
    "word": "biscuit",
    "pos": "n.",
    "cn_def": "餅乾（英式用法）",
    "en_def": "a small, flat, dry, sweet or plain cake (British English)",
    "sentence": "A: How do you usually welcome visitors at the London branch, and do you offer them anything while they wait for their appointment in the lobby? B: The receptionist always serves them a cup of tea with a {{BLANK}} on the side, which most guests appreciate, especially when the weather outside is cold and rainy.",
    "cn": "A：你們倫敦分公司通常怎麼招待訪客？他們在大廳等候會面時，你們會提供什麼嗎？ B：接待人員總是會端上一杯茶，旁邊附一塊【餅乾】，大部分客人都很喜歡，尤其是在外面天氣又冷又下雨的時候。"
  },
  {
    "word": "chocolate",
    "pos": "n.",
    "cn_def": "巧克力",
    "en_def": "a sweet brown food made from cocoa beans",
    "sentence": "A: What gift should we give to the clients who visited our factory last week, since we want to thank them for signing the new contract? B: I think a box of dark {{BLANK}} from the famous local shop is a good choice, because it is elegant, easy to send by mail, and almost everyone enjoys it.",
    "cn": "A：上週參觀我們工廠的客戶，我們該送什麼禮物？因為我們想感謝他們簽下新合約。 B：我覺得當地那家有名店鋪的一盒黑【巧克力】是不錯的選擇，因為它高雅、容易郵寄，而且幾乎每個人都喜歡。"
  },
  {
    "word": "candy",
    "pos": "n.",
    "cn_def": "糖果",
    "en_def": "sweet food made from sugar or chocolate",
    "sentence": "A: Why does the bank teller keep a small glass jar on the counter next to the window, and do customers ever take anything from it? B: She fills it with colorful {{BLANK}} every morning, because many parents bring their children to the branch, and the sweets keep the kids happy while their parents wait in line.",
    "cn": "A：銀行櫃員為什麼在窗口旁的櫃檯上放一個小玻璃罐？顧客會從裡面拿東西嗎？ B：她每天早上都會把彩色的【糖果】裝滿罐子，因為很多父母會帶小孩來分行，這些甜食能讓孩子在父母排隊時保持開心。"
  },
  {
    "word": "nuts",
    "pos": "n.",
    "cn_def": "堅果",
    "en_def": "dry fruits or seeds with a hard shell that can be eaten",
    "sentence": "A: Should we order the mixed snack trays for the conference, or are there any guests who cannot eat certain foods for health reasons? B: Two of the speakers asked us to avoid {{BLANK}}, so please tell the caterer to prepare separate trays with fruit and vegetables, and label every dish clearly.",
    "cn": "A：研討會要訂綜合點心盤嗎？還是有些來賓因健康因素不能吃某些食物？ B：有兩位講者要求我們避免【堅果】，所以請告訴外燴業者另外準備水果和蔬菜的餐盤，並把每道菜清楚標示。"
  },
  {
    "word": "almond",
    "pos": "n.",
    "cn_def": "杏仁",
    "en_def": "a flat, oval nut with a pale brown skin",
    "sentence": "A: What kind of healthy snack does the new coffee shop near the train station sell, since I want something light before my morning shift? B: They sell small bags of roasted {{BLANK}} pieces with a little sea salt, and the cashier told me that office workers buy them in large numbers every morning before seven.",
    "cn": "A：火車站附近那家新咖啡店賣什麼樣的健康點心？因為我上早班前想吃點清淡的東西。 B：他們賣小包裝的烤【杏仁】，撒了一點海鹽，收銀員告訴我，每天早上七點前上班族都會大量購買。"
  },
  {
    "word": "peanut",
    "pos": "n.",
    "cn_def": "花生",
    "en_def": "a small nut that grows underground in a thin shell",
    "sentence": "A: Why did the airline stop giving out free snacks on short flights, and what do passengers receive now instead during the trip? B: Some travelers had serious reactions to the {{BLANK}} packets they used to serve, so the company now offers pretzels and a cup of juice to make every flight safer.",
    "cn": "A：航空公司為什麼停止在短程航班上提供免費點心？現在旅途中乘客改拿到什麼？ B：有些旅客對他們以前提供的【花生】小包有嚴重反應，所以公司現在改提供蝴蝶餅和一杯果汁，讓每趟航班都更安全。"
  },
  {
    "word": "raisins",
    "pos": "n.",
    "cn_def": "葡萄乾",
    "en_def": "dried grapes, often used in baking or eaten as a snack",
    "sentence": "A: What did the nutrition expert recommend in yesterday's health workshop for employees who often feel tired in the afternoon at the office? B: She suggested keeping a small box of {{BLANK}} in our desk drawer, because dried fruit gives quick energy and is much healthier than the sugary drinks that many people buy.",
    "cn": "A：昨天的健康講座中，營養專家對下午在辦公室常感到疲倦的員工有什麼建議？ B：她建議在抽屜裡放一小盒【葡萄乾】，因為果乾能快速補充能量，而且比很多人買的含糖飲料健康得多。"
  },
  {
    "word": "yogurt",
    "pos": "n.",
    "cn_def": "優格；優酪乳",
    "en_def": "a thick, slightly sour food made from milk",
    "sentence": "A: Is there anything in the office refrigerator that I can eat for breakfast, since I had to leave home very early to catch the first train? B: The company stocks plain {{BLANK}} cups and fresh fruit every Monday, so help yourself, but please write your name on anything you put back inside.",
    "cn": "A：辦公室冰箱裡有什麼我可以當早餐吃的嗎？因為我得很早出門趕第一班火車。 B：公司每週一都會補充原味【優格】杯和新鮮水果，請自便，但如果你放東西回去，請在上面寫上名字。"
  },
  {
    "word": "granola",
    "pos": "n.",
    "cn_def": "燕麥穀片；格蘭諾拉麥片",
    "en_def": "a mixture of baked oats, nuts, and dried fruit, often eaten for breakfast",
    "sentence": "A: What should we serve at the early morning breakfast seminar, since most guests will come straight from home before eight o'clock? B: Let's set up a table with coffee, milk, fresh berries, and bowls of crunchy {{BLANK}}, because it is quick to eat and people can choose how much they want.",
    "cn": "A：清晨的早餐研討會我們該提供什麼？因為大部分來賓八點前會直接從家裡過來。 B：我們擺一張桌子，放咖啡、牛奶、新鮮莓果和幾碗酥脆的【燕麥穀片】吧，因為吃起來很快，大家也可以自己決定要拿多少。"
  },
  {
    "word": "sandwich",
    "pos": "n.",
    "cn_def": "三明治",
    "en_def": "two pieces of bread with food such as meat or cheese between them",
    "sentence": "A: Will there be time for lunch during the factory tour tomorrow, or should I eat something before the bus leaves the hotel at eleven? B: The tour guide will hand out a {{BLANK}} and a bottle of water to each visitor on the bus, so you can eat while we drive to the second building.",
    "cn": "A：明天參觀工廠時會有時間吃午餐嗎？還是我應該在巴士十一點離開飯店前先吃點東西？ B：導覽員會在巴士上發給每位訪客一個【三明治】和一瓶水，所以我們開車前往第二棟大樓時你就可以吃。"
  },
  {
    "word": "wrap",
    "pos": "n.",
    "cn_def": "捲餅",
    "en_def": "a thin, soft piece of bread rolled around a filling",
    "sentence": "A: What is the most popular item on the new lunch menu at the cafeteria, since I want to try something different from rice today? B: Many employees order the chicken and vegetable {{BLANK}}, because it is light, easy to carry back to their desks, and much cheaper than the hot meals.",
    "cn": "A：員工餐廳新午餐菜單上最受歡迎的是什麼？因為我今天想吃點白飯以外的東西。 B：很多員工都點雞肉蔬菜【捲餅】，因為它清爽、方便帶回座位，而且比熱食便宜很多。"
  },
  {
    "word": "pastry",
    "pos": "n.",
    "cn_def": "酥皮點心；糕點",
    "en_def": "a small sweet cake made with a light, buttery dough",
    "sentence": "A: Should I pick up anything for the morning meeting with the new partners, since it starts at eight and nobody will have time for breakfast? B: Please stop at the French bakery and buy a {{BLANK}} for each person along with a large box of coffee, and keep the receipt so finance can pay you back.",
    "cn": "A：和新合作夥伴的晨會我需要順便買些什麼嗎？因為會議八點開始，大家都沒時間吃早餐。 B：請在那家法式麵包店停一下，幫每個人買一個【酥皮點心】，再買一大盒咖啡，並把收據留著，讓財務部退錢給你。"
  },
  {
    "word": "cupcake",
    "pos": "n.",
    "cn_def": "杯子蛋糕",
    "en_def": "a small round cake for one person, often with sweet icing on top",
    "sentence": "A: How are we going to celebrate Kevin's birthday at the office on Thursday, since he does not like big parties or loud surprises? B: We decided to give him a single {{BLANK}} with one candle during the afternoon break, and then everyone will sign a card for him quietly at his desk.",
    "cn": "A：週四我們要怎麼在辦公室幫凱文慶生？因為他不喜歡盛大的派對或吵鬧的驚喜。 B：我們決定在下午休息時間給他一個插著一根蠟燭的【杯子蛋糕】，然後大家會在他座位旁安靜地幫他簽一張卡片。"
  },
  {
    "word": "energy bar",
    "pos": "n.phr.",
    "cn_def": "能量棒",
    "en_def": "a bar of food made of grains, nuts, and sugar that gives quick energy",
    "sentence": "A: What do you usually eat when you travel to visit customers all day, since you rarely have time to stop at a restaurant for lunch? B: I always carry an {{BLANK}} and a bottle of water in my bag, so I can eat something quickly in the car between appointments without losing any time.",
    "cn": "A：你整天出差拜訪客戶時通常吃什麼？因為你很少有時間停下來去餐廳吃午餐。 B：我包包裡總會帶一條【能量棒】和一瓶水，這樣就能在兩個約會之間於車上快速吃點東西，不浪費任何時間。"
  },
  {
    "word": "trail mix",
    "pos": "n.phr.",
    "cn_def": "綜合堅果果乾",
    "en_def": "a mixture of nuts, seeds, and dried fruit eaten as a snack",
    "sentence": "A: What should we pack for the team-building hike on Saturday, since we will walk for about five hours and there are no shops along the mountain path? B: Each person should bring plenty of water and a bag of {{BLANK}}, because the nuts and dried fruit are light to carry and give everyone energy during the climb.",
    "cn": "A：週六的團隊健行我們該帶什麼？因為要走大約五個小時，而且山路沿途沒有商店。 B：每個人都應該帶足夠的水和一包【綜合堅果果乾】，因為堅果和果乾攜帶輕便，能在爬山時讓大家保持體力。"
  },
  {
    "word": "chewy",
    "pos": "adj.",
    "cn_def": "有嚼勁的；耐嚼的",
    "en_def": "needing to be chewed a lot before you can swallow it",
    "sentence": "A: Why did the customers complain about the new fruit candies in the latest survey, even though the flavor received very high scores overall? B: Many people said the candies were too {{BLANK}} and stuck to their teeth, so the product team is changing the recipe to make them softer before the next shipment.",
    "cn": "A：在最新的調查中，雖然新款水果軟糖的口味整體得到很高的分數，為什麼顧客還是抱怨？ B：很多人說糖果太【有嚼勁】、會黏牙，所以產品團隊正在修改配方，讓下一批出貨的糖果更軟一些。"
  },
  {
    "word": "crispy",
    "pos": "adj.",
    "cn_def": "酥脆的",
    "en_def": "pleasantly hard and making a sound when you bite it",
    "sentence": "A: Why are the fried snacks from the new supplier so popular at our convenience stores, even though they cost a little more than the old brand? B: Customers say they stay {{BLANK}} for a long time after the bag is opened, and the special packaging keeps out air and moisture very well.",
    "cn": "A：新供應商的油炸零食價格比舊品牌貴一點，為什麼在我們的便利商店卻那麼受歡迎？ B：顧客說袋子打開後還能【酥脆】很久，而且特殊包裝能很有效地隔絕空氣和濕氣。"
  },
  {
    "word": "salty",
    "pos": "adj.",
    "cn_def": "鹹的",
    "en_def": "containing or tasting of a lot of salt",
    "sentence": "A: Did the clients enjoy the dinner at the seafood restaurant last night, or was there anything they did not like about the meal? B: They loved the fish and the service, but they thought the soup was far too {{BLANK}}, so they asked the waiter for extra water several times during dinner.",
    "cn": "A：客戶昨晚在海鮮餐廳的晚餐吃得開心嗎？還是餐點有什麼他們不喜歡的地方？ B：他們很喜歡魚和服務，但覺得湯太【鹹】了，所以晚餐時好幾次向服務生要了更多的水。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "tasting like sugar",
    "sentence": "A: Why did the café change the recipe for its iced tea last month, since it was one of the best-selling drinks in the shop? B: Several regular customers told the owner that the tea was too {{BLANK}}, so she now uses half the sugar and lets people add more if they want it.",
    "cn": "A：咖啡廳上個月為什麼更改了冰茶的配方？那可是店裡最暢銷的飲料之一。 B：好幾位常客告訴老闆茶太【甜】了，所以她現在只用一半的糖，想要更甜的人可以自己加。"
  },
  {
    "word": "spicy",
    "pos": "adj.",
    "cn_def": "辣的",
    "en_def": "having a strong, hot taste from spices such as chili",
    "sentence": "A: Which restaurant should we choose for lunch with the visitors from Germany, since we want them to try some local Taiwanese food? B: Let's avoid the Sichuan place, because their dishes are extremely {{BLANK}}, and choose the noodle shop on the corner, which has mild dishes and an English menu.",
    "cn": "A：和德國來的訪客吃午餐，我們該選哪家餐廳？因為我們想讓他們嚐嚐台灣在地美食。 B：我們避開那家四川菜館吧，因為他們的菜非常【辣】，改選轉角的麵店，那裡的菜口味溫和，還有英文菜單。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹味的；鹹香的",
    "en_def": "salty or spicy rather than sweet",
    "sentence": "A: Do you think we should serve only cakes and cookies at the afternoon reception, or will some guests want something different from desserts? B: We should add a few {{BLANK}} options like mini sausage rolls and cheese puffs, because not everyone likes sugar, and some people will come straight from work feeling hungry.",
    "cn": "A：你覺得下午的接待會我們只提供蛋糕和餅乾就好嗎？還是有些來賓會想吃甜點以外的東西？ B：我們應該加幾樣【鹹味】的選擇，像迷你香腸捲和起司泡芙，因為不是每個人都喜歡甜食，而且有些人會下班後直接過來，肚子很餓。"
  },
  {
    "word": "packaged",
    "pos": "adj.",
    "cn_def": "包裝好的；袋裝的",
    "en_def": "sold in a box, bag, or wrapper",
    "sentence": "A: Why did the school cafeteria decide to stop selling so many snacks from the big food companies this semester? B: The principal wants students to eat more fresh fruit and fewer {{BLANK}} foods, because they often contain a lot of sugar and salt, and the plastic wrappers create too much trash.",
    "cn": "A：學校餐廳這學期為什麼決定不再販售那麼多大型食品公司的零食？ B：校長希望學生多吃新鮮水果，少吃【包裝】食品，因為它們常含有大量的糖和鹽，而且塑膠包裝會製造太多垃圾。"
  },
  {
    "word": "homemade",
    "pos": "adj.",
    "cn_def": "自製的；家裡做的",
    "en_def": "made at home, not bought from a shop",
    "sentence": "A: Where did you buy the delicious cake that everyone was talking about at the team meeting this morning in the main conference room? B: I didn't buy it anywhere, because it is a {{BLANK}} recipe from my grandmother, and I baked it last night to thank the team for working so hard on the report.",
    "cn": "A：今天早上在大會議室開團隊會議時大家都在討論的那個好吃蛋糕，你是在哪裡買的？ B：我不是在哪裡買的，那是我祖母的【自製】食譜，我昨晚烤好它，感謝團隊為報告這麼努力。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "（食物的）一份",
    "en_def": "an amount of food for one person",
    "sentence": "A: Why are customers saying that the new lunch boxes at the train station are not good value for money, even though the price has stayed the same? B: The company made each {{BLANK}} smaller to save on costs, and many travelers noticed that the boxes now contain less rice and fewer vegetables than before.",
    "cn": "A：雖然價格沒變，為什麼顧客說火車站的新便當不划算？ B：公司為了節省成本，把每一【份】都做得更小，很多旅客注意到便當裡的飯和蔬菜比以前少了。"
  },
  {
    "word": "refreshment",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "a small amount of food or drink",
    "sentence": "A: Will the hotel provide anything to eat or drink during the half-day workshop, or should participants bring their own coffee and snacks? B: The hotel will serve light {{BLANK}} at ten-thirty, including tea, coffee, and fruit, so participants do not need to bring anything except a notebook and a pen.",
    "cn": "A：飯店在半天的工作坊期間會提供吃的或喝的嗎？還是學員應該自己帶咖啡和點心？ B：飯店十點半會提供簡單的【茶點】，包括茶、咖啡和水果，所以學員除了筆記本和筆以外不需要帶任何東西。"
  },
  {
    "word": "indulge",
    "pos": "v.",
    "cn_def": "盡情享受；放縱（自己）",
    "en_def": "to allow yourself to enjoy something special, especially food",
    "sentence": "A: What did you do to celebrate after the company finally reached its sales goal for the year, since the whole department worked so hard? B: Our manager took us to a fancy dessert café and told us to {{BLANK}} in anything we wanted, so I ordered a huge chocolate cake and a milkshake.",
    "cn": "A：公司終於達成年度業績目標後，你們做了什麼慶祝？因為整個部門都那麼辛苦。 B：經理帶我們去一家高級甜點咖啡廳，叫我們想吃什麼就【盡情享受】，所以我點了一大塊巧克力蛋糕和一杯奶昔。"
  }
];

const MCQS = [
  {
    "q": "The director kept talking while he ate an apple loudly. Nobody could hear him clearly because he continued to _____ during the presentation.",
    "options": [
      "munch",
      "slice",
      "peel",
      "boil"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "She was not very hungry before the interview. She decided to _____ on a few grapes while she reviewed her notes.",
    "options": [
      "swallow",
      "nibble",
      "digest",
      "feed"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our schedule is very busy today. Let's grab a quick _____ at the station café before the train to Kaohsiung leaves.",
    "options": [
      "sip",
      "drop",
      "bite",
      "taste"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The British clients asked for something salty with their drinks. The hotel bar served them small bowls of _____ and olives.",
    "options": [
      "yogurt",
      "raisins",
      "cupcake",
      "crisps"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The vending machine sells many salty snacks. Its best-selling item is a small bag of potato _____ that costs only thirty dollars.",
    "options": [
      "almond",
      "chips",
      "granola",
      "yogurt"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The cinema has lowered its snack prices this month. A large bucket of buttered _____ now comes free with every two tickets.",
    "options": [
      "popcorn",
      "sandwich",
      "biscuit",
      "pastry"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The caterer prepared a cheese plate for the wine tasting. Each guest received thin slices of cheese on a salted _____.",
    "options": [
      "candy",
      "nuts",
      "yogurt",
      "cracker"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The bakery near our office is famous for its desserts. Its chocolate chip _____ sells out every afternoon before three o'clock.",
    "options": [
      "wrap",
      "peanut",
      "cookie",
      "granola"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The London office always serves tea in the afternoon. Visitors usually dip a sweet _____ into their tea during the break.",
    "options": [
      "biscuit",
      "sandwich",
      "popcorn",
      "wrap"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The marketing team wants a gift for Valentine's Day. They have ordered heart-shaped boxes of dark _____ for their best customers.",
    "options": [
      "popcorn",
      "granola",
      "chocolate",
      "cracker"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The dentist gave the children a small toy after their checkup. She does not hand out _____ because sugar is bad for their teeth.",
    "options": [
      "salads",
      "candy",
      "rice",
      "water"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new snack bar contains seeds and fruit only. It is safe for people who cannot eat _____ such as almonds or cashews.",
    "options": [
      "candy",
      "chips",
      "pastry",
      "nuts"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The bakery uses ground _____ to make its famous French cookies. These nuts give the cookies a light and rich flavor.",
    "options": [
      "popcorn",
      "chip",
      "almond",
      "raisins"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The sandwich shop sells bread with peanut butter and jam. Customers with a _____ allergy are advised to choose another option.",
    "options": [
      "peanut",
      "yogurt",
      "granola",
      "salty"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The muffins have dried fruit inside them. The baker adds a handful of sweet _____ to every batch of dough in the morning.",
    "options": [
      "crisps",
      "raisins",
      "nuts",
      "chips"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The hotel breakfast offers many healthy choices. Guests can mix fresh fruit and honey into a bowl of plain _____ at the buffet.",
    "options": [
      "popcorn",
      "crisps",
      "candy",
      "yogurt"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Many runners eat oats, nuts, and honey before a race. The sports shop now sells _____ in small bags near the cash register.",
    "options": [
      "granola",
      "popcorn",
      "crisps",
      "pastry"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The manager was too busy to leave the office for lunch. He asked his assistant to buy a tuna _____ from the deli downstairs.",
    "options": [
      "candy",
      "biscuit",
      "sandwich",
      "raisins"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The food truck sells a healthy lunch option. Its chicken _____ is rolled with lettuce, tomato, and a light yogurt sauce.",
    "options": [
      "candy",
      "crisps",
      "popcorn",
      "wrap"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hotel serves a continental breakfast every morning. Guests can choose a croissant or a sweet _____ with their coffee.",
    "options": [
      "wrap",
      "pastry",
      "chips",
      "peanut"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The team celebrated the new office opening on Friday. Everyone received a small _____ decorated with the company logo in blue icing.",
    "options": [
      "cracker",
      "peanut",
      "cupcake",
      "raisin"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Long-distance cyclists need food that is light to carry. Many of them eat an _____ every two hours during a race.",
    "options": [
      "ice cream",
      "hot soup",
      "steak dinner",
      "energy bar"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Hikers should bring a light snack for the mountain trail. A bag of _____ with nuts and raisins provides quick energy.",
    "options": [
      "trail mix",
      "hot soup",
      "ice cream",
      "birthday cake"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new candy is soft and takes a long time to eat. Children love its _____ texture, but some parents worry about their teeth.",
    "options": [
      "liquid",
      "chewy",
      "frozen",
      "crunchy"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The restaurant fries its chicken twice for the best result. This method makes the skin golden and _____ on the outside.",
    "options": [
      "soggy",
      "raw",
      "melted",
      "crispy"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The doctor told him to reduce his sodium intake. He should avoid _____ snacks such as pretzels, chips, and salted nuts.",
    "options": [
      "sweet",
      "sour",
      "salty",
      "bitter"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The coffee shop now offers drinks with less sugar. Customers who prefer _____ drinks can still add syrup at the counter.",
    "options": [
      "salty",
      "sweet",
      "spicy",
      "bitter"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The Thai restaurant uses a lot of chili in its dishes. Guests who cannot eat _____ food should tell the waiter when they order.",
    "options": [
      "spicy",
      "sweet",
      "frozen",
      "plain"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Not every guest likes desserts at afternoon tea. The hotel also serves _____ snacks such as cheese tarts and small sandwiches.",
    "options": [
      "sugary",
      "frozen",
      "sticky",
      "savory"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The new bakery does not use plastic bags or boxes. All of its bread is fresh and _____ in paper, not plastic, to protect the environment.",
    "options": [
      "homemade",
      "packaged",
      "savory",
      "chewy"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "munch": {
    "pos": "v.",
    "en_def": "to eat something noisily and steadily",
    "cn_def": "大聲咀嚼；津津有味地吃"
  },
  "nibble": {
    "pos": "v.",
    "en_def": "to eat something by taking very small bites",
    "cn_def": "小口地吃；一點一點地咬"
  },
  "bite": {
    "pos": "n.",
    "en_def": "a small amount of food that you take into your mouth at one time",
    "cn_def": "一口；咬一口"
  },
  "crisps": {
    "pos": "n.",
    "en_def": "thin slices of potato fried until hard, sold in bags (British English)",
    "cn_def": "洋芋片（英式用法）"
  },
  "chips": {
    "pos": "n.",
    "en_def": "thin slices of potato fried until hard, sold in bags (American English)",
    "cn_def": "洋芋片（美式用法）"
  },
  "popcorn": {
    "pos": "n.",
    "en_def": "corn seeds that are heated until they burst open and become light and white",
    "cn_def": "爆米花"
  },
  "cracker": {
    "pos": "n.",
    "en_def": "a thin, dry, crisp biscuit, often eaten with cheese",
    "cn_def": "蘇打餅；薄脆餅乾"
  },
  "cookie": {
    "pos": "n.",
    "en_def": "a small, flat, sweet cake that is baked until firm (American English)",
    "cn_def": "餅乾（美式用法）"
  },
  "biscuit": {
    "pos": "n.",
    "en_def": "a small, flat, dry, sweet or plain cake (British English)",
    "cn_def": "餅乾（英式用法）"
  },
  "chocolate": {
    "pos": "n.",
    "en_def": "a sweet brown food made from cocoa beans",
    "cn_def": "巧克力"
  },
  "candy": {
    "pos": "n.",
    "en_def": "sweet food made from sugar or chocolate",
    "cn_def": "糖果"
  },
  "nuts": {
    "pos": "n.",
    "en_def": "dry fruits or seeds with a hard shell that can be eaten",
    "cn_def": "堅果"
  },
  "almond": {
    "pos": "n.",
    "en_def": "a flat, oval nut with a pale brown skin",
    "cn_def": "杏仁"
  },
  "peanut": {
    "pos": "n.",
    "en_def": "a small nut that grows underground in a thin shell",
    "cn_def": "花生"
  },
  "raisins": {
    "pos": "n.",
    "en_def": "dried grapes, often used in baking or eaten as a snack",
    "cn_def": "葡萄乾"
  },
  "yogurt": {
    "pos": "n.",
    "en_def": "a thick, slightly sour food made from milk",
    "cn_def": "優格；優酪乳"
  },
  "granola": {
    "pos": "n.",
    "en_def": "a mixture of baked oats, nuts, and dried fruit, often eaten for breakfast",
    "cn_def": "燕麥穀片；格蘭諾拉麥片"
  },
  "sandwich": {
    "pos": "n.",
    "en_def": "two pieces of bread with food such as meat or cheese between them",
    "cn_def": "三明治"
  },
  "wrap": {
    "pos": "n.",
    "en_def": "a thin, soft piece of bread rolled around a filling",
    "cn_def": "捲餅"
  },
  "pastry": {
    "pos": "n.",
    "en_def": "a small sweet cake made with a light, buttery dough",
    "cn_def": "酥皮點心；糕點"
  },
  "cupcake": {
    "pos": "n.",
    "en_def": "a small round cake for one person, often with sweet icing on top",
    "cn_def": "杯子蛋糕"
  },
  "energy bar": {
    "pos": "n.phr.",
    "en_def": "a bar of food made of grains, nuts, and sugar that gives quick energy",
    "cn_def": "能量棒"
  },
  "trail mix": {
    "pos": "n.phr.",
    "en_def": "a mixture of nuts, seeds, and dried fruit eaten as a snack",
    "cn_def": "綜合堅果果乾"
  },
  "chewy": {
    "pos": "adj.",
    "en_def": "needing to be chewed a lot before you can swallow it",
    "cn_def": "有嚼勁的；耐嚼的"
  },
  "crispy": {
    "pos": "adj.",
    "en_def": "pleasantly hard and making a sound when you bite it",
    "cn_def": "酥脆的"
  },
  "salty": {
    "pos": "adj.",
    "en_def": "containing or tasting of a lot of salt",
    "cn_def": "鹹的"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting like sugar",
    "cn_def": "甜的"
  },
  "spicy": {
    "pos": "adj.",
    "en_def": "having a strong, hot taste from spices such as chili",
    "cn_def": "辣的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy rather than sweet",
    "cn_def": "鹹味的；鹹香的"
  },
  "packaged": {
    "pos": "adj.",
    "en_def": "sold in a box, bag, or wrapper",
    "cn_def": "包裝好的；袋裝的"
  },
  "homemade": {
    "pos": "adj.",
    "en_def": "made at home, not bought from a shop",
    "cn_def": "自製的；家裡做的"
  },
  "portion": {
    "pos": "n.",
    "en_def": "an amount of food for one person",
    "cn_def": "（食物的）一份"
  },
  "refreshment": {
    "pos": "n.",
    "en_def": "a small amount of food or drink",
    "cn_def": "茶點；點心飲料"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow yourself to enjoy something special, especially food",
    "cn_def": "盡情享受；放縱（自己）"
  }
};

const EXTRA_GLOSSES = {};
