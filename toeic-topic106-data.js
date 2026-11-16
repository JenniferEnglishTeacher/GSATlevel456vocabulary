// Topic 106 Quiz Data: Dinner 晚餐
// Source word list: https://www.examword.com/group-topic/dinner — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T106 - Dinner 晚餐",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "supper",
    "pos": "n.",
    "cn_def": "晚餐；宵夜",
    "en_def": "a light meal eaten in the evening",
    "sentence": "A: The workshop with our partners in Osaka finishes very late on Friday, so where should the team eat after the final session ends? B: The hotel restaurant stays open until eleven, so I booked a simple {{BLANK}} there for everyone, and we can relax and talk about the results before we go back to our rooms.",
    "cn": "A：我們和大阪合作夥伴的研習會星期五很晚才結束，最後一場結束後團隊要去哪裡吃東西？ B：飯店餐廳營業到十一點，所以我幫大家在那裡訂了簡單的【晚餐】，我們可以在回房間之前放鬆一下，聊聊這次的成果。"
  },
  {
    "word": "meal",
    "pos": "n.",
    "cn_def": "一餐；餐點",
    "en_def": "food eaten at one time, such as breakfast, lunch or dinner",
    "sentence": "A: Our new clients from Germany are arriving at the airport at six this evening, and they will probably be tired and hungry after such a long flight. B: Then let's take them straight to the Italian restaurant near their hotel, so they can enjoy a good {{BLANK}} and get some rest before tomorrow's long meeting.",
    "cn": "A：我們德國的新客戶今晚六點抵達機場，經過這麼長的飛行，他們大概會又累又餓。 B：那我們就直接帶他們去飯店附近的義大利餐廳，讓他們好好享用一【餐】，在明天冗長的會議前休息一下。"
  },
  {
    "word": "feast",
    "pos": "n.",
    "cn_def": "盛宴；大餐",
    "en_def": "a large special meal for many people, often to celebrate",
    "sentence": "A: How did the company celebrate after the sales team broke its record for the whole year, and did the CEO attend the party? B: Yes, she came and gave a short speech, and then the hotel prepared a huge {{BLANK}} with roast meat, fresh seafood and many kinds of cakes, so everyone ate until midnight.",
    "cn": "A：業務團隊打破全年紀錄後，公司是怎麼慶祝的？執行長有出席派對嗎？ B：有，她來了並做了簡短致詞，然後飯店準備了一場豐盛的【盛宴】，有烤肉、新鮮海鮮和各式各樣的蛋糕，所以大家一直吃到半夜。"
  },
  {
    "word": "banquet",
    "pos": "n.",
    "cn_def": "宴會；正式宴席",
    "en_def": "a large formal dinner for many people, often with speeches",
    "sentence": "A: What should I wear to the annual awards dinner at the Grand Hotel next Saturday, since this is my first year at the company? B: It is a formal {{BLANK}} for over three hundred employees and their partners, so men usually wear dark suits and women wear evening dresses, and the president gives the awards after the main dishes.",
    "cn": "A：下週六在大飯店舉行的年度頒獎晚宴我該穿什麼？這是我在公司的第一年。 B：那是一場有三百多位員工及其伴侶參加的正式【宴會】，所以男士通常穿深色西裝，女士穿晚禮服，總裁會在主菜之後頒獎。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐",
    "en_def": "a meal where people take food themselves from a long table",
    "sentence": "A: There will be about eighty people at the training seminar on Monday, so how are we going to give everyone lunch without making them wait too long? B: I asked the hotel to set up a {{BLANK}} in the hall next to the meeting room, so people can choose their own food quickly and return to their seats before the afternoon session.",
    "cn": "A：星期一的訓練研討會大約有八十人參加，我們要怎麼讓每個人吃到午餐，又不讓他們等太久？ B：我請飯店在會議室旁邊的大廳擺設【自助餐】，這樣大家可以很快自己選餐，並在下午的課程開始前回到座位。"
  },
  {
    "word": "entrée",
    "pos": "n.",
    "cn_def": "主菜",
    "en_def": "the main dish of a meal",
    "sentence": "A: The menu for the client dinner lists soup, salad and three choices for the main dish, so what do you suggest for our visitors from Japan? B: I would recommend the salmon as the {{BLANK}}, because it is the chef's most popular dish, and it is lighter than the beef, which many visitors find too heavy at night.",
    "cn": "A：客戶晚宴的菜單上列了湯、沙拉和三種主菜選擇，你建議我們的日本訪客點什麼？ B：我會推薦鮭魚當【主菜】，因為那是主廚最受歡迎的料理，而且比牛肉清淡，很多訪客覺得牛肉晚上吃太膩。"
  },
  {
    "word": "main course",
    "pos": "n.phr.",
    "cn_def": "主菜；主餐",
    "en_def": "the largest and most important dish of a meal",
    "sentence": "A: The waiter just asked whether we are ready to order, but Mr. Lee is still outside on the phone with the head office in Seoul. B: Let's order the soup and salad first, and we can wait for him to come back before choosing the {{BLANK}}, since he wants to try either the steak or the roast chicken tonight.",
    "cn": "A：服務生剛問我們是否準備好點餐，但李先生還在外面和首爾總公司講電話。 B：我們先點湯和沙拉，等他回來再選【主菜】，因為他今晚想吃牛排或烤雞。"
  },
  {
    "word": "appetizer",
    "pos": "n.",
    "cn_def": "開胃菜",
    "en_def": "a small dish eaten before the main part of a meal",
    "sentence": "A: Our visitors from the bank will arrive at the restaurant around seven, but the manager is stuck in traffic and may be thirty minutes late. B: In that case, let's order an {{BLANK}} like spring rolls or a cheese plate for the table, so the visitors have something to eat while we wait for her.",
    "cn": "A：銀行的訪客大約七點會到餐廳，但經理塞在車陣中，可能會晚三十分鐘。 B：既然這樣，我們先幫這桌點個【開胃菜】，像是春捲或起司拼盤，讓訪客在等她的時候有東西吃。"
  },
  {
    "word": "starter",
    "pos": "n.",
    "cn_def": "前菜；開胃菜",
    "en_def": "the first small dish of a meal",
    "sentence": "A: I'm planning the menu for the London office's farewell dinner, and I'm not sure what to put before the main dishes, since some people are vegetarian. B: Tomato soup would be a good {{BLANK}}, because almost everyone likes it, it is easy for the kitchen to make, and it is safe for people who don't eat meat.",
    "cn": "A：我正在規劃倫敦辦公室的歡送晚宴菜單，不確定主菜前要放什麼，因為有些人吃素。 B：番茄湯會是很好的【前菜】，因為幾乎每個人都喜歡，廚房也容易做，而且不吃肉的人也可以吃。"
  },
  {
    "word": "side dish",
    "pos": "n.phr.",
    "cn_def": "配菜",
    "en_def": "a small amount of food served with the main dish",
    "sentence": "A: The steak at this restaurant looks really good, but does it come with anything else, or do we have to pay extra for vegetables and potatoes? B: Each main plate comes with one free {{BLANK}}, so you can choose mashed potatoes, a green salad or fried rice, and the waiter will bring it at the same time.",
    "cn": "A：這家餐廳的牛排看起來真不錯，但有附其他東西嗎？還是蔬菜和馬鈴薯要另外付費？ B：每份主餐都附一道免費的【配菜】，你可以選馬鈴薯泥、蔬菜沙拉或炒飯，服務生會同時送上。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "A: Everyone has finished the main dishes, and the clients seem very happy, but should we ask for the bill now or wait a little longer? B: Let's not rush, because the chef here is famous for his chocolate cake, so we should order some {{BLANK}} and coffee for the table before we finish the evening.",
    "cn": "A：大家都吃完主菜了，客戶看起來很開心，我們現在要結帳還是再等一下？ B：別急，這裡的主廚以巧克力蛋糕聞名，所以我們應該在結束今晚之前，幫這桌點些【甜點】和咖啡。"
  },
  {
    "word": "beverage",
    "pos": "n.",
    "cn_def": "飲料",
    "en_def": "a drink of any kind",
    "sentence": "A: The catering company sent the price list for Friday's product launch, but I'm not sure whether drinks are included in the price per person. B: Food is included, but every {{BLANK}} such as juice, soda and coffee costs extra, so please check how many people are coming before we place the order.",
    "cn": "A：外燴公司寄來了星期五產品發表會的價目表，但我不確定每人的價格有沒有包含飲料。 B：餐點有包含，但果汁、汽水和咖啡等每一種【飲料】都要另外收費，所以下訂單前請先確認有多少人會來。"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "cn_def": "食譜",
    "en_def": "instructions for making a dish",
    "sentence": "A: The soup at the staff party was so good that several people asked who made it, and they want to try making it at home this weekend. B: Our receptionist made it, and she is happy to share her grandmother's {{BLANK}}, so she will email the list of steps and the cooking time to everyone tomorrow.",
    "cn": "A：員工派對上的湯好喝到好幾個人問是誰做的，他們這個週末想在家試做。 B：是我們的櫃檯人員做的，她很樂意分享她祖母的【食譜】，所以她明天會把步驟和烹煮時間寄給大家。"
  },
  {
    "word": "ingredient",
    "pos": "n.",
    "cn_def": "材料；食材",
    "en_def": "one of the foods used to make a dish",
    "sentence": "A: Why did the new restaurant downtown suddenly raise the prices of all its pasta dishes by almost twenty percent this month? B: The owner said the cost of every important {{BLANK}}, especially cheese, tomatoes and olive oil, went up sharply after the bad weather in Europe last summer, so he had no other choice.",
    "cn": "A：市中心那家新餐廳為什麼這個月突然把所有義大利麵的價格調漲將近百分之二十？ B：老闆說每一樣重要【食材】的成本都大幅上漲，尤其是起司、番茄和橄欖油，因為去年夏天歐洲天氣不好，所以他別無選擇。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "烹調；煮",
    "en_def": "to make food ready to eat by heating it",
    "sentence": "A: Are we ordering food from a restaurant for the team's end-of-year party, or is someone in the office going to make the dinner? B: Our manager wants to {{BLANK}} the dinner himself at his house, so he is buying fish, vegetables and rice on Saturday morning, and we only need to bring drinks and some fruit.",
    "cn": "A：團隊的年終派對我們要跟餐廳訂餐，還是辦公室有人要負責做晚餐？ B：我們經理想在他家親自【煮】晚餐，所以他星期六早上會去買魚、蔬菜和米，我們只需要帶飲料和一些水果。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備；製作（餐點）",
    "en_def": "to make food ready to be eaten",
    "sentence": "A: The kitchen staff look very busy this afternoon, so is there a special event at the hotel tonight that I don't know about? B: Yes, a technology company booked the main hall for a dinner, so the chefs must {{BLANK}} food for two hundred people before seven, and they started washing vegetables at noon.",
    "cn": "A：廚房員工今天下午看起來非常忙，今晚飯店有我不知道的特別活動嗎？ B：有，一家科技公司預訂了主廳辦晚宴，所以廚師們必須在七點前【準備】兩百人份的餐點，他們中午就開始洗菜了。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應；上（菜）",
    "en_def": "to give food or drinks to people at a meal",
    "sentence": "A: The conference ends at five thirty, so what time should the hotel staff bring the food into the dining room for our international visitors? B: Please ask them to {{BLANK}} dinner at six thirty, because people will need about an hour to check in, change their clothes and make phone calls to their families.",
    "cn": "A：會議五點半結束，飯店員工應該幾點把餐點送進餐廳給我們的國際訪客？ B：請他們六點半【上】晚餐，因為大家需要大約一小時辦理入住、換衣服，並打電話給家人。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；賓客",
    "en_def": "a person you invite to a meal or event",
    "sentence": "A: How many chairs should I put in the private dining room for Mr. Chen's retirement dinner on Friday evening? B: Each department may bring one {{BLANK}}, such as a former coworker or a family member, so please prepare forty seats and tell the restaurant about any special food needs before Thursday.",
    "cn": "A：星期五晚上陳先生的退休晚宴，我應該在包廂放幾張椅子？ B：每個部門可以帶一位【客人】，例如前同事或家人，所以請準備四十個座位，並在星期四之前告知餐廳任何特殊的飲食需求。"
  },
  {
    "word": "homemade",
    "pos": "adj.",
    "cn_def": "自製的；家常的",
    "en_def": "made at home, not bought from a store or factory",
    "sentence": "A: Why is the small café across from our office always so crowded at lunchtime, even though it only has six tables? B: The owner bakes all the bread and pies herself every morning, so the food is fresh and {{BLANK}}, and many office workers are happy to wait in line for it.",
    "cn": "A：我們辦公室對面那家小咖啡館只有六張桌子，為什麼午餐時間總是那麼擠？ B：老闆每天早上親自烤所有的麵包和派，所以食物新鮮又是【自製的】，很多上班族都樂意排隊購買。"
  },
  {
    "word": "hearty",
    "pos": "adj.",
    "cn_def": "豐盛的；分量足的",
    "en_def": "large and filling",
    "sentence": "A: The volunteers will be cleaning the park from early morning until late afternoon on Saturday, so what kind of food should we give them? B: They will work hard outside in the cold, so we should give them a {{BLANK}} lunch with beef stew, bread and potatoes, which will keep them full and warm all afternoon.",
    "cn": "A：志工們星期六會從一大早清掃公園到傍晚，我們應該給他們準備什麼樣的食物？ B：他們會在寒冷的戶外辛苦工作，所以應該給他們一份【豐盛的】午餐，有燉牛肉、麵包和馬鈴薯，讓他們整個下午都吃得飽又暖和。"
  },
  {
    "word": "light",
    "pos": "adj.",
    "cn_def": "清淡的；分量少的",
    "en_def": "small in amount and easy to digest",
    "sentence": "A: I have a big presentation to the board of directors right after lunch, and I don't want to feel sleepy while I'm speaking. B: Then you should just have a {{BLANK}} lunch, like a salad or a small sandwich, because a big plate of rice or noodles will make you tired in the afternoon.",
    "cn": "A：午餐後我馬上要向董事會做一場重要簡報，我不想在講話時覺得想睡。 B：那你午餐應該吃得【清淡】一點，像沙拉或小三明治，因為一大盤飯或麵會讓你下午很累。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的",
    "en_def": "having a very good taste",
    "sentence": "A: Did the clients enjoy the seafood restaurant you chose last night, or should we try a different place when they visit again next month? B: They loved it, and the director said the crab was the most {{BLANK}} thing he had eaten in Taipei, so let's book the same restaurant for their next visit.",
    "cn": "A：客戶喜歡你昨晚選的海鮮餐廳嗎？還是他們下個月再來時我們該換個地方？ B：他們很喜歡，處長說那道螃蟹是他在台北吃過最【美味的】東西，所以他們下次來我們就訂同一家餐廳吧。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹的；鹹香的",
    "en_def": "salty or spicy, not sweet",
    "sentence": "A: The afternoon tea for the visiting managers will have lots of cakes and cookies, but is there anything for people who don't like sweet food? B: Yes, the bakery will also bring some {{BLANK}} snacks, such as cheese pastries, ham sandwiches and small meat pies, so everyone will find something they like.",
    "cn": "A：給來訪經理們的下午茶會有很多蛋糕和餅乾，但有沒有給不喜歡甜食的人吃的東西？ B：有，麵包店也會帶一些【鹹的】點心，像是起司酥皮、火腿三明治和小肉派，所以每個人都能找到喜歡的。"
  },
  {
    "word": "flavorful",
    "pos": "adj.",
    "cn_def": "味道濃郁的；有風味的",
    "en_def": "having a strong, pleasant taste",
    "sentence": "A: Why do so many of our foreign visitors ask to eat at that small Thai restaurant on the corner instead of the hotel restaurant? B: The chef uses fresh herbs, garlic and chili in every dish, so the food is much more {{BLANK}} than the plain hotel menu, and the prices are lower too.",
    "cn": "A：為什麼我們很多外國訪客要求去轉角那家小泰國餐廳吃，而不是飯店餐廳？ B：主廚在每道菜都用新鮮香草、大蒜和辣椒，所以食物比飯店平淡的菜單【味道濃郁】得多，而且價格也比較低。"
  },
  {
    "word": "grilled",
    "pos": "adj.",
    "cn_def": "炙烤的；烤的",
    "en_def": "cooked over direct heat on metal bars",
    "sentence": "A: The doctor told my manager to eat healthier food, so what should we order for him at the steakhouse during tonight's business dinner? B: He could have the {{BLANK}} chicken with vegetables, because it is cooked over a fire without much oil, and it is still very tasty and filling.",
    "cn": "A：醫生要我經理吃得健康一點，今晚商務晚餐在牛排館我們該幫他點什麼？ B：他可以點【炙烤】雞肉配蔬菜，因為那是用火烤的，不太用油，而且還是很好吃又有飽足感。"
  },
  {
    "word": "roasted",
    "pos": "adj.",
    "cn_def": "烘烤的；烤的",
    "en_def": "cooked in an oven or over a fire",
    "sentence": "A: What are the kitchen staff making for the Thanksgiving lunch for our American coworkers, since many of them miss their families at this time of year? B: They are making a big {{BLANK}} turkey in the oven with potatoes and carrots, so our American friends will feel a little more at home during the holiday.",
    "cn": "A：廚房員工要為美國同事的感恩節午餐做什麼？很多人每年這個時候都很想念家人。 B：他們正在用烤箱做一隻大【烤】火雞，配上馬鈴薯和紅蘿蔔，讓我們的美國朋友在節日期間更有家的感覺。"
  },
  {
    "word": "fried",
    "pos": "adj.",
    "cn_def": "油炸的；炒的",
    "en_def": "cooked in hot oil",
    "sentence": "A: The night market near our hotel has so many food stands, but I'm worried that some of the snacks might be too oily for me. B: Many of the {{BLANK}} snacks, like chicken and sweet potato balls, are cooked in a lot of hot oil, so you could try the soup or grilled corn instead.",
    "cn": "A：我們飯店附近的夜市有好多小吃攤，但我擔心有些小吃對我來說太油了。 B：很多【油炸的】小吃，像雞排和地瓜球，都是用大量熱油做的，所以你可以改試湯或烤玉米。"
  },
  {
    "word": "steamed",
    "pos": "adj.",
    "cn_def": "蒸的",
    "en_def": "cooked with hot water vapor",
    "sentence": "A: Our Hong Kong partners want to try a traditional Chinese breakfast before their factory tour, so where should we take them? B: There is a famous dim sum restaurant on the second floor of the mall, and they offer fresh {{BLANK}} dumplings and buns in small bamboo baskets, which visitors always love.",
    "cn": "A：我們的香港合作夥伴想在參觀工廠前嚐嚐傳統的中式早餐，我們該帶他們去哪裡？ B：商場二樓有一家很有名的港式點心餐廳，他們用小竹籠供應新鮮的【蒸】餃和包子，訪客總是很喜歡。"
  },
  {
    "word": "boiled",
    "pos": "adj.",
    "cn_def": "水煮的",
    "en_def": "cooked in very hot water",
    "sentence": "A: The hotel breakfast has many choices, but which dish would you recommend for someone who wants something simple and healthy before a long day of meetings? B: I usually take two {{BLANK}} eggs with some fruit and toast, because they are full of protein, they don't contain any oil, and they keep me full until lunch.",
    "cn": "A：飯店早餐有很多選擇，對想在一整天會議前吃點簡單健康東西的人，你會推薦哪道菜？ B：我通常拿兩顆【水煮】蛋配一些水果和吐司，因為蛋白質豐富、不含油，而且能讓我撐到午餐。"
  },
  {
    "word": "leftovers",
    "pos": "n.",
    "cn_def": "剩菜；吃剩的食物",
    "en_def": "food that remains after a meal",
    "sentence": "A: We ordered far too much food for the sales meeting today, and there are still three trays of sandwiches and pasta on the table. B: Let's put the {{BLANK}} in the office refrigerator, and anyone who works late tonight or comes in early tomorrow can take some for a free lunch.",
    "cn": "A：我們今天的業務會議訂太多食物了，桌上還有三盤三明治和義大利麵。 B：我們把【剩菜】放進辦公室冰箱，今晚加班或明天早到的人都可以拿一些當免費的午餐。"
  },
  {
    "word": "takeout",
    "pos": "n.",
    "cn_def": "外帶食物",
    "en_def": "food bought from a restaurant to eat somewhere else",
    "sentence": "A: We have to finish the budget report for the head office by nine o'clock tonight, so we probably won't have time to go out for dinner. B: Don't worry, I'll order Chinese {{BLANK}} from the restaurant downstairs, and we can eat at our desks while we check the last few pages.",
    "cn": "A：今晚九點前我們必須完成給總公司的預算報告，所以大概沒時間出去吃晚餐了。 B：別擔心，我會跟樓下的餐廳訂中式【外帶餐點】，我們可以邊在座位上吃邊檢查最後幾頁。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預訂；訂位",
    "en_def": "an arrangement to keep a table for you at a restaurant",
    "sentence": "A: The French restaurant near the train station is very popular on Friday nights, so do you think we can get a table for our clients without calling first? B: No, it's almost always full on weekends, so I'll call this afternoon and make a {{BLANK}} for six people at seven thirty, near the window if possible.",
    "cn": "A：火車站附近那家法國餐廳週五晚上很熱門，你覺得我們不先打電話也能幫客戶找到位子嗎？ B：不行，週末幾乎都客滿，所以我今天下午會打電話【訂位】，七點半六個人，可以的話靠窗。"
  },
  {
    "word": "tableware",
    "pos": "n.",
    "cn_def": "餐具",
    "en_def": "plates, bowls, cups, knives and forks used at meals",
    "sentence": "A: The caterer will bring the food for the garden party, but who is going to provide the plates, cups, knives and forks for two hundred people? B: The hotel will lend us all the {{BLANK}}, and their staff will collect and wash everything after the party, so we only need to pay a small cleaning fee.",
    "cn": "A：外燴業者會帶花園派對的食物，但兩百人用的盤子、杯子、刀叉由誰提供？ B：飯店會借我們所有的【餐具】，派對結束後他們的員工會收回並清洗，所以我們只需支付一小筆清潔費。"
  },
  {
    "word": "napkin",
    "pos": "n.",
    "cn_def": "餐巾；餐巾紙",
    "en_def": "a piece of cloth or paper used to clean your mouth and hands while eating",
    "sentence": "A: The chicken at the team picnic was great, but my hands are really oily now, and I don't want to touch my phone or my laptop. B: Here, take a {{BLANK}} from the box on the table next to the drinks, and there is also a sink with soap behind the tent if you want to wash your hands.",
    "cn": "A：團隊野餐的雞肉很好吃，但現在我的手好油，不想碰手機或筆電。 B：來，從飲料旁邊桌上的盒子拿一張【餐巾紙】，帳篷後面也有附肥皂的洗手台，如果你想洗手的話。"
  },
  {
    "word": "tablecloth",
    "pos": "n.",
    "cn_def": "桌布",
    "en_def": "a cloth that covers a table during a meal",
    "sentence": "A: The dining tables in the meeting hall look old and scratched, so how can we make the room look nicer for the welcome dinner tonight? B: We can put a clean white {{BLANK}} on each table and add some flowers and candles, so the visitors won't notice the scratches at all.",
    "cn": "A：會議廳的餐桌看起來又舊又有刮痕，今晚的歡迎晚宴我們要怎麼讓房間看起來好一點？ B：我們可以在每張桌子鋪上乾淨的白色【桌布】，再擺些花和蠟燭，這樣訪客就完全不會注意到刮痕了。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "一份（食物）；分量",
    "en_def": "the amount of food served to one person",
    "sentence": "A: The new staff restaurant gets a lot of complaints, so what is the main reason that so many employees prefer to eat lunch somewhere else? B: Many people say each {{BLANK}} is too small for the price, especially the rice and meat, so they still feel hungry in the afternoon and buy snacks later.",
    "cn": "A：新員工餐廳收到很多抱怨，為什麼這麼多員工寧可去別的地方吃午餐？ B：很多人說以這個價格來說每一【份】都太少了，尤其是飯和肉，所以他們下午還是會餓，之後又去買零食。"
  }
];

const MCQS = [
  {
    "q": "The flight to Singapore takes about five hours. Each passenger will receive a free hot _____ and a drink during the trip.",
    "options": [
      "meal",
      "recipe",
      "napkin",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The village holds a big _____ every autumn after the rice harvest. Families cook their best dishes and share them with neighbors.",
    "options": [
      "portion",
      "recipe",
      "feast",
      "napkin"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "More than five hundred people attended the company's formal _____ at the Grand Hotel. The chairman gave a speech after dinner.",
    "options": [
      "ingredient",
      "banquet",
      "napkin",
      "takeout"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Hotel visitors can choose from over fifty dishes at the breakfast _____. It is open from six to ten every morning.",
    "options": [
      "recipe",
      "portion",
      "reservation",
      "buffet"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "For the conference dinner, people could pick beef, fish or pasta as their _____. Each choice came with soup and bread.",
    "options": [
      "napkin",
      "ingredient",
      "entrée",
      "leftovers"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "We finished our salads quickly, but the _____ took forty minutes to arrive. The kitchen was very busy because of a large party.",
    "options": [
      "main course",
      "recipe",
      "tableware",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "While we waited for our steaks, the waiter brought a small _____ of fresh bread and olives. It was free for every table.",
    "options": [
      "beverage",
      "guest",
      "banquet",
      "appetizer"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The grilled fish comes with one _____, such as rice or salad. Extra vegetables cost two dollars more.",
    "options": [
      "entrée",
      "side dish",
      "guest",
      "feast"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "After the main dishes, the waiter brought ice cream and fruit for _____. Everyone was too full to finish it.",
    "options": [
      "dessert",
      "ingredient",
      "banquet",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Hot coffee and tea are free during the seminar. Any other _____, such as juice or soda, can be bought at the counter.",
    "options": [
      "napkin",
      "portion",
      "recipe",
      "beverage"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "My colleague brought a wonderful cake to the office party. She promised to email me the _____ so I can bake it at home.",
    "options": [
      "guest",
      "beverage",
      "recipe",
      "buffet"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The restaurant buys every _____ from local farms each morning. That is why its salads always taste so fresh.",
    "options": [
      "napkin",
      "ingredient",
      "banquet",
      "guest"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "My manager loves Italian food very much. He likes to _____ pasta for the whole team at his home on weekends.",
    "options": [
      "borrow",
      "decide",
      "explain",
      "cook"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The chefs need three hours to _____ dinner for two hundred people. They will start cutting vegetables at three o'clock.",
    "options": [
      "arrive",
      "prepare",
      "sleep",
      "agree"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The hotel staff will _____ lunch in the garden at noon. Please tell the manager if you need a vegetarian meal.",
    "options": [
      "serve",
      "wait",
      "complain",
      "belong"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Each employee may bring one _____ to the year-end party. Please write the person's name on the form by Friday.",
    "options": [
      "portion",
      "recipe",
      "guest",
      "buffet"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The café near the station sells _____ cookies every afternoon. The owner bakes them herself in the small kitchen behind the shop.",
    "options": [
      "boiled",
      "homemade",
      "steamed",
      "grilled"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The workers spent all day building the new warehouse in the cold. They were happy to eat a _____ meal of stew and bread.",
    "options": [
      "light",
      "steamed",
      "boiled",
      "hearty"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "I have an important interview at two o'clock. I will just eat a _____ lunch so that I don't feel sleepy.",
    "options": [
      "light",
      "hearty",
      "roasted",
      "fried"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The clients said the seafood at the restaurant was really _____. They asked us to take them there again next month.",
    "options": [
      "boiled",
      "fried",
      "delicious",
      "steamed"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The chef cooks the meat over an open fire for a few minutes. The _____ steak is the most popular dish here.",
    "options": [
      "grilled",
      "steamed",
      "boiled",
      "light"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The turkey stays in the oven for about four hours. The _____ turkey is then cut into slices and served with potatoes.",
    "options": [
      "steamed",
      "boiled",
      "roasted",
      "fried"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "This restaurant cooks its chicken in very hot oil until it is golden. Its _____ chicken is popular with office workers at lunchtime.",
    "options": [
      "steamed",
      "boiled",
      "roasted",
      "fried"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The cook places the dumplings in a bamboo basket over hot water. The _____ dumplings are soft, healthy and full of flavor.",
    "options": [
      "fried",
      "steamed",
      "grilled",
      "roasted"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "We ordered too much pizza for the meeting. Please put the _____ in the refrigerator so people can eat them tomorrow.",
    "options": [
      "reservation",
      "guest",
      "leftovers",
      "napkin"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "We are too busy to go out for lunch today. Let's order _____ from the noodle shop and eat at our desks.",
    "options": [
      "takeout",
      "banquet",
      "tableware",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The new steak house is always full on Friday nights. You should call early and make a _____ for your group.",
    "options": [
      "recipe",
      "reservation",
      "portion",
      "buffet"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The waiter noticed that I had spilled some sauce on the table. He kindly brought me a clean _____ to wipe it up.",
    "options": [
      "entrée",
      "ingredient",
      "beverage",
      "napkin"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The meals at the staff restaurant are cheap but small. Many workers say each _____ is not enough for a full afternoon of work.",
    "options": [
      "guest",
      "recipe",
      "portion",
      "banquet"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Not everyone at the tea party likes sweet cakes. The bakery will also bring some _____ snacks, such as cheese pies and ham rolls.",
    "options": [
      "boiled",
      "savory",
      "steamed",
      "roasted"
    ],
    "answer": 1,
    "vocabIndex": 22
  }
];

const LOOKUP = {
  "supper": {
    "pos": "n.",
    "en_def": "a light meal eaten in the evening",
    "cn_def": "晚餐；宵夜"
  },
  "meal": {
    "pos": "n.",
    "en_def": "food eaten at one time, such as breakfast, lunch or dinner",
    "cn_def": "一餐；餐點"
  },
  "feast": {
    "pos": "n.",
    "en_def": "a large special meal for many people, often to celebrate",
    "cn_def": "盛宴；大餐"
  },
  "banquet": {
    "pos": "n.",
    "en_def": "a large formal dinner for many people, often with speeches",
    "cn_def": "宴會；正式宴席"
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where people take food themselves from a long table",
    "cn_def": "自助餐"
  },
  "entrée": {
    "pos": "n.",
    "en_def": "the main dish of a meal",
    "cn_def": "主菜"
  },
  "main course": {
    "pos": "n.phr.",
    "en_def": "the largest and most important dish of a meal",
    "cn_def": "主菜；主餐"
  },
  "appetizer": {
    "pos": "n.",
    "en_def": "a small dish eaten before the main part of a meal",
    "cn_def": "開胃菜"
  },
  "starter": {
    "pos": "n.",
    "en_def": "the first small dish of a meal",
    "cn_def": "前菜；開胃菜"
  },
  "side dish": {
    "pos": "n.phr.",
    "en_def": "a small amount of food served with the main dish",
    "cn_def": "配菜"
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food eaten at the end of a meal",
    "cn_def": "甜點"
  },
  "beverage": {
    "pos": "n.",
    "en_def": "a drink of any kind",
    "cn_def": "飲料"
  },
  "recipe": {
    "pos": "n.",
    "en_def": "instructions for making a dish",
    "cn_def": "食譜"
  },
  "ingredient": {
    "pos": "n.",
    "en_def": "one of the foods used to make a dish",
    "cn_def": "材料；食材"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "烹調；煮"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make food ready to be eaten",
    "cn_def": "準備；製作（餐點）"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to people at a meal",
    "cn_def": "供應；上（菜）"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person you invite to a meal or event",
    "cn_def": "客人；賓客"
  },
  "homemade": {
    "pos": "adj.",
    "en_def": "made at home, not bought from a store or factory",
    "cn_def": "自製的；家常的"
  },
  "hearty": {
    "pos": "adj.",
    "en_def": "large and filling",
    "cn_def": "豐盛的；分量足的"
  },
  "light": {
    "pos": "adj.",
    "en_def": "small in amount and easy to digest",
    "cn_def": "清淡的；分量少的"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "having a very good taste",
    "cn_def": "美味的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy, not sweet",
    "cn_def": "鹹的；鹹香的"
  },
  "flavorful": {
    "pos": "adj.",
    "en_def": "having a strong, pleasant taste",
    "cn_def": "味道濃郁的；有風味的"
  },
  "grilled": {
    "pos": "adj.",
    "en_def": "cooked over direct heat on metal bars",
    "cn_def": "炙烤的；烤的"
  },
  "roasted": {
    "pos": "adj.",
    "en_def": "cooked in an oven or over a fire",
    "cn_def": "烘烤的；烤的"
  },
  "fried": {
    "pos": "adj.",
    "en_def": "cooked in hot oil",
    "cn_def": "油炸的；炒的"
  },
  "steamed": {
    "pos": "adj.",
    "en_def": "cooked with hot water vapor",
    "cn_def": "蒸的"
  },
  "boiled": {
    "pos": "adj.",
    "en_def": "cooked in very hot water",
    "cn_def": "水煮的"
  },
  "leftovers": {
    "pos": "n.",
    "en_def": "food that remains after a meal",
    "cn_def": "剩菜；吃剩的食物"
  },
  "takeout": {
    "pos": "n.",
    "en_def": "food bought from a restaurant to eat somewhere else",
    "cn_def": "外帶食物"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a table for you at a restaurant",
    "cn_def": "預訂；訂位"
  },
  "tableware": {
    "pos": "n.",
    "en_def": "plates, bowls, cups, knives and forks used at meals",
    "cn_def": "餐具"
  },
  "napkin": {
    "pos": "n.",
    "en_def": "a piece of cloth or paper used to clean your mouth and hands while eating",
    "cn_def": "餐巾；餐巾紙"
  },
  "tablecloth": {
    "pos": "n.",
    "en_def": "a cloth that covers a table during a meal",
    "cn_def": "桌布"
  },
  "portion": {
    "pos": "n.",
    "en_def": "the amount of food served to one person",
    "cn_def": "一份（食物）；分量"
  }
};

const EXTRA_GLOSSES = {};
