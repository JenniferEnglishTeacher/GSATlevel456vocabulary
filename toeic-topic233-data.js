// Topic 233 Quiz Data: Meal 餐點
// Source word list: https://www.examword.com/group-topic/meal — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T233 - Meal 餐點",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "breakfast",
    "pos": "n.",
    "cn_def": "早餐",
    "en_def": "the first meal of the day",
    "sentence": "A: The training session for new staff starts at eight o'clock tomorrow, so will there be any food available before we begin the first workshop? B: Yes, the hotel will provide a simple {{BLANK}} with coffee, toast, and fresh fruit in the lobby at seven thirty, so please tell everyone to arrive a little early.",
    "cn": "A：新進員工的培訓課程明天八點開始，那在我們開始第一場研習前會有任何食物嗎？ B：有的，飯店七點半會在大廳提供簡單的【早餐】，有咖啡、吐司和新鮮水果，所以請告訴大家早一點到。"
  },
  {
    "word": "lunch",
    "pos": "n.",
    "cn_def": "午餐",
    "en_def": "the meal eaten in the middle of the day",
    "sentence": "A: Our clients from Singapore will be in the office from ten until three on Thursday, so where should we take them during the break in the middle of the day? B: Let's book a table for {{BLANK}} at the Italian restaurant across the street, because it is close, quiet, and the service is usually very fast.",
    "cn": "A：我們新加坡的客戶週四十點到三點會在辦公室，那中午休息時間我們該帶他們去哪裡？ B：我們在對街的義大利餐廳訂一桌吃【午餐】吧，因為那裡很近、很安靜，而且服務通常很快。"
  },
  {
    "word": "dinner",
    "pos": "n.",
    "cn_def": "晚餐",
    "en_def": "the main meal eaten in the evening",
    "sentence": "A: The company is celebrating its tenth anniversary next Friday evening, so have you decided how we will thank all the employees for their hard work? B: We are planning a formal {{BLANK}} at the Grand Hotel at seven o'clock, with speeches from the managers and a small gift for every staff member.",
    "cn": "A：公司下週五晚上要慶祝十週年，那你決定好我們要怎麼感謝所有員工的辛勞了嗎？ B：我們計畫七點在格蘭飯店舉辦一場正式的【晚餐】，會有主管致詞，並送每位員工一份小禮物。"
  },
  {
    "word": "supper",
    "pos": "n.",
    "cn_def": "晚餐；宵夜",
    "en_def": "a light meal eaten late in the evening",
    "sentence": "A: You worked in the warehouse until almost eleven last night to finish the big order, so did you have time to get anything to eat afterward? B: I only had a quick {{BLANK}} of instant noodles and a boiled egg at home, because I was too tired to cook a proper meal so late.",
    "cn": "A：你昨晚為了完成那筆大訂單在倉庫工作到快十一點，那之後你有時間吃點東西嗎？ B：我只在家隨便吃了泡麵和一顆水煮蛋當【宵夜】，因為太累了，那麼晚沒辦法好好煮一頓飯。"
  },
  {
    "word": "snack",
    "pos": "n.",
    "cn_def": "點心；零食",
    "en_def": "a small amount of food eaten between meals",
    "sentence": "A: The afternoon planning meeting usually lasts more than three hours, so do you think people will get hungry before it finishes? B: Probably, so I will put a tray of cookies and fruit on the table as a {{BLANK}}, and everyone can help themselves whenever they need a little energy.",
    "cn": "A：下午的規劃會議通常持續超過三小時，你覺得大家在結束前會餓嗎？ B：可能會，所以我會在桌上放一盤餅乾和水果當【點心】，大家需要補充一點體力時都可以自己拿。"
  },
  {
    "word": "dish",
    "pos": "n.",
    "cn_def": "菜餚",
    "en_def": "food prepared in a particular way as part of a meal",
    "sentence": "A: Our restaurant is getting fewer customers on weekdays, so what can we do to make people want to come back more often? B: The chef has created a new seafood {{BLANK}} with rice and local vegetables, and we could offer it at a special price at lunchtime for the next two weeks.",
    "cn": "A：我們餐廳平日的客人越來越少，我們能做什麼讓人想更常回來？ B：主廚設計了一道搭配米飯和在地蔬菜的新海鮮【菜餚】，我們可以在接下來兩週的午餐時段用特價推出。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "（一）道菜",
    "en_def": "one part of a meal served at one time",
    "sentence": "A: The banquet for our overseas partners is next month, so how many parts should the meal have, and what will be served first? B: The hotel suggested five courses in total, and the first {{BLANK}} will be a light vegetable soup, followed by salad, fish, beef, and finally a fruit plate.",
    "cn": "A：招待海外夥伴的宴會在下個月，那餐點應該有幾道，最先上的會是什麼？ B：飯店建議總共五道菜，第一【道菜】會是清淡的蔬菜湯，接著是沙拉、魚、牛肉，最後是水果盤。"
  },
  {
    "word": "appetizer",
    "pos": "n.",
    "cn_def": "開胃菜",
    "en_def": "a small dish eaten before the main part of a meal",
    "sentence": "A: Our guests will arrive at the restaurant around six thirty, but the main meal will not be ready until seven fifteen, so what should we do? B: Let's order a light {{BLANK}} such as garlic bread or a small salad, so that they have something to enjoy while they wait and chat.",
    "cn": "A：我們的客人大約六點半會到餐廳，但主餐要到七點十五分才會好，我們該怎麼辦？ B：我們點一些清淡的【開胃菜】吧，像是蒜香麵包或小份沙拉，讓他們在等待和聊天時有東西可以享用。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "A: The lunch with the sales team went very well, but do you think we should order something sweet before we go back to the office? B: Sure, the chocolate cake here is famous, so let's share one piece for {{BLANK}} and then ask for the bill, because our next meeting starts at two.",
    "cn": "A：和業務團隊的午餐進行得很順利，但你覺得我們回辦公室前要不要點些甜的？ B：好啊，這裡的巧克力蛋糕很有名，我們分一塊當【甜點】，然後再買單，因為我們下一場會議兩點開始。"
  },
  {
    "word": "beverage",
    "pos": "n.",
    "cn_def": "飲料",
    "en_def": "a drink of any kind",
    "sentence": "A: We are expecting about two hundred visitors at our booth during the trade show, so should we offer them anything besides product brochures? B: Yes, we should set up a small {{BLANK}} station with coffee, tea, and bottled water, because people often stop longer at a booth when they can get a free drink.",
    "cn": "A：商展期間我們的攤位預計會有大約兩百位訪客，除了產品手冊外，我們要提供他們其他東西嗎？ B：要，我們應該設一個小型【飲料】區，提供咖啡、茶和瓶裝水，因為有免費飲品時，人們通常會在攤位停留更久。"
  },
  {
    "word": "portion",
    "pos": "n.",
    "cn_def": "（食物的）一份",
    "en_def": "the amount of food for one person",
    "sentence": "A: Several customers have complained that our pasta plates are too small for the price, so should we change something on the menu? B: I think we should make each {{BLANK}} about twenty percent larger and add some bread on the side, because people expect to feel satisfied when they pay that much.",
    "cn": "A：好幾位顧客抱怨我們的義大利麵以價格來說太小盤，我們要調整菜單上的什麼嗎？ B：我覺得我們應該把每一【份】加大約百分之二十，並附上一些麵包，因為付那麼多錢時，人們會期待吃得滿足。"
  },
  {
    "word": "serving",
    "pos": "n.",
    "cn_def": "一人份",
    "en_def": "an amount of food for one person, often used on nutrition labels",
    "sentence": "A: I am preparing the nutrition labels for our new breakfast cereal, so how should I show the amount of sugar to customers? B: You should list the sugar for one {{BLANK}} of forty grams, because shoppers usually compare products by that standard amount instead of by the whole box.",
    "cn": "A：我在準備我們新早餐穀片的營養標示，要怎麼向顧客標示糖的含量？ B：你應該列出每四十公克一【人份】的含糖量，因為消費者通常是用那個標準份量比較產品，而不是用整盒來比。"
  },
  {
    "word": "menu",
    "pos": "n.",
    "cn_def": "菜單",
    "en_def": "a list of the food and drinks available in a restaurant",
    "sentence": "A: Our café has had the same food choices for almost three years, so do you think it is time to make some changes? B: Yes, let's update the {{BLANK}} this spring with a few lighter salads and seasonal soups, and we can ask regular customers which new items they like best.",
    "cn": "A：我們咖啡廳的餐點選擇已經快三年沒變了，你覺得是時候做些改變了嗎？ B：是的，我們今年春天來更新【菜單】吧，加入幾道較清爽的沙拉和季節湯品，然後問問常客最喜歡哪些新品項。"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "cn_def": "食譜",
    "en_def": "a set of instructions for cooking a dish",
    "sentence": "A: The customers love the chicken soup that our old chef used to make, but he retired last month, so how can the new cook make it the same way? B: Fortunately, he wrote down the whole {{BLANK}} before he left, including the exact amounts and cooking times, so the new cook just needs to follow it carefully.",
    "cn": "A：顧客很喜歡我們老主廚以前做的雞湯，但他上個月退休了，新廚師要怎麼做出一樣的味道？ B：幸好他離開前把整份【食譜】寫下來了，包括精確的份量和烹煮時間，所以新廚師只要仔細照著做就好。"
  },
  {
    "word": "ingredient",
    "pos": "n.",
    "cn_def": "食材；原料",
    "en_def": "one of the foods used to make a dish",
    "sentence": "A: The price of fresh vegetables has gone up a lot this season, so how is our kitchen going to keep costs under control? B: The chef is going to buy each main {{BLANK}} directly from local farms instead of from a wholesaler, which should save money and also keep the food fresher.",
    "cn": "A：這一季新鮮蔬菜的價格漲了很多，我們廚房要怎麼控制成本？ B：主廚打算直接向在地農場採購每一樣主要【食材】，而不是透過批發商，這樣應該能省錢，也能讓食物更新鮮。"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "cn_def": "味道；口味",
    "en_def": "the taste of food or drink",
    "sentence": "A: Our new line of potato chips will be launched in Japan next year, so what kind of taste do you think customers there will prefer? B: Our market research shows that a seaweed and salt {{BLANK}} is very popular there, so we should test that one first in a few convenience stores.",
    "cn": "A：我們新系列的洋芋片明年將在日本上市，你覺得那裡的顧客會偏好哪種味道？ B：我們的市場調查顯示海苔鹽【口味】在那裡很受歡迎，所以我們應該先在幾家便利商店測試這一款。"
  },
  {
    "word": "nutrition",
    "pos": "n.",
    "cn_def": "營養",
    "en_def": "the healthy substances in food that the body needs",
    "sentence": "A: The company cafeteria has received many complaints that the food is too oily, so what is human resources planning to do about it? B: They have hired an expert in {{BLANK}} to review the weekly menu and suggest healthier choices, such as more vegetables, whole grains, and less fried food.",
    "cn": "A：公司員工餐廳收到很多抱怨說食物太油，人資部打算怎麼處理？ B：他們聘請了一位【營養】專家來檢視每週菜單並建議更健康的選擇，例如更多蔬菜、全穀類，以及少一點油炸食物。"
  },
  {
    "word": "diet",
    "pos": "n.",
    "cn_def": "飲食",
    "en_def": "the kind of food a person usually eats",
    "sentence": "A: You look much more energetic these days, and you no longer seem tired in the afternoon meetings, so what have you changed? B: My doctor told me to improve my {{BLANK}}, so now I eat more fish, fruit, and vegetables, and I have stopped drinking sweet coffee drinks after lunch.",
    "cn": "A：你最近看起來精神好多了，下午開會時也不再顯得疲倦，你改變了什麼？ B：我的醫生叫我改善【飲食】，所以現在我吃更多魚、水果和蔬菜，也不再在午餐後喝甜的咖啡飲料了。"
  },
  {
    "word": "feast",
    "pos": "n.",
    "cn_def": "盛宴",
    "en_def": "a large special meal with a lot of food",
    "sentence": "A: Our team finally won the big contract after six months of hard work, so how are we going to celebrate with everyone this weekend? B: The manager has invited the whole department to her house on Saturday for a {{BLANK}} with roast chicken, grilled fish, and plenty of homemade cakes.",
    "cn": "A：我們團隊努力了六個月終於拿下這份大合約，這個週末我們要怎麼和大家慶祝？ B：經理邀請整個部門週六到她家參加一場【盛宴】，有烤雞、烤魚，還有很多自製蛋糕。"
  },
  {
    "word": "banquet",
    "pos": "n.",
    "cn_def": "宴會",
    "en_def": "a formal dinner for many people, often with speeches",
    "sentence": "A: The annual awards ceremony will bring together almost five hundred employees from all our branches, so where will the event take place? B: We have reserved the largest hall at the convention center for the {{BLANK}}, and each table will have its own server so the food arrives quickly.",
    "cn": "A：年度頒獎典禮將聚集各分公司將近五百位員工，活動會在哪裡舉辦？ B：我們已經為這場【宴會】預訂了會議中心最大的廳，而且每桌都有專屬服務生，讓餐點能很快上桌。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備（餐點）",
    "en_def": "to make food ready to eat",
    "sentence": "A: We have a group of thirty visitors from our partner company arriving at noon, so is the kitchen ready to handle such a big lunch order? B: The cooks started early this morning, and they will {{BLANK}} sandwiches, salads, and soup for everyone, so the food should be ready by eleven forty-five.",
    "cn": "A：合作公司有三十位訪客中午會到，廚房準備好應付這麼大的午餐訂單了嗎？ B：廚師們今天一大早就開始了，他們會為大家【準備】三明治、沙拉和湯，所以餐點應該在十一點四十五分前就會好。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "烹煮；做飯",
    "en_def": "to make food by heating it",
    "sentence": "A: Eating out every day has become quite expensive since prices went up, so how are you managing your monthly budget now? B: I {{BLANK}} a big pot of curry and rice on Sunday evenings and bring a box to work each day, which saves me almost three thousand dollars a month.",
    "cn": "A：物價上漲後每天外食變得很貴，你現在怎麼控制每月預算？ B：我週日晚上會【煮】一大鍋咖哩飯，每天帶一盒去上班，這樣每個月幫我省下將近三千元。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應；上（菜）",
    "en_def": "to give food or drinks to people",
    "sentence": "A: The new restaurant near our office is always crowded, so do you know why it has become so popular with office workers so quickly? B: They {{BLANK}} hot set lunches within five minutes of ordering, and the prices are reasonable, so busy people can eat well and get back to work on time.",
    "cn": "A：我們辦公室附近的新餐廳總是很擠，你知道它為什麼這麼快就受上班族歡迎嗎？ B：他們在點餐後五分鐘內就【供應】熱騰騰的套餐，價格又合理，所以忙碌的人可以吃得好又準時回去工作。"
  },
  {
    "word": "eat",
    "pos": "v.",
    "cn_def": "吃；用餐",
    "en_def": "to put food in your mouth and swallow it",
    "sentence": "A: The conference schedule is very full tomorrow, with talks from nine until five, so when will the participants have a chance to have lunch? B: There is a forty-minute break at twelve thirty, and people can {{BLANK}} in the hall next door, where the organizers will set up long tables and a buffet.",
    "cn": "A：明天的會議行程很滿，從九點到五點都有演講，與會者什麼時候有機會吃午餐？ B：十二點半有四十分鐘的休息，大家可以在隔壁的大廳【用餐】，主辦單位會在那裡擺長桌和自助餐。"
  },
  {
    "word": "taste",
    "pos": "v.",
    "cn_def": "品嚐",
    "en_def": "to try a small amount of food to see what it is like",
    "sentence": "A: The supermarket wants to promote our new range of frozen dumplings next month, so how can we encourage shoppers to try them? B: We could set up a small table near the entrance where customers can {{BLANK}} a few free samples, and staff can give them a discount coupon at the same time.",
    "cn": "A：超市下個月想推廣我們的新系列冷凍水餃，我們要怎麼鼓勵購物者試試看？ B：我們可以在入口附近擺一張小桌子，讓顧客【品嚐】幾個免費試吃品，員工也可以同時發給他們折價券。"
  },
  {
    "word": "hungry",
    "pos": "adj.",
    "cn_def": "飢餓的",
    "en_def": "wanting or needing food",
    "sentence": "A: The workshop ran over by almost an hour, and it is already one thirty, so should we continue with the last session now? B: I think most people are very {{BLANK}} because they skipped breakfast to come early, so let's stop for lunch first and finish the last part afterward.",
    "cn": "A：研習會延長了將近一小時，已經一點半了，我們要現在繼續最後一個時段嗎？ B：我想大部分人都很【餓】，因為他們為了早到沒吃早餐，所以我們先停下來吃午餐，之後再完成最後一部分吧。"
  },
  {
    "word": "full",
    "pos": "adj.",
    "cn_def": "吃飽的",
    "en_def": "having eaten so much that you do not want any more",
    "sentence": "A: The waiter just asked if we would like to see the dessert menu, so do you want to order the cheesecake that everyone recommends? B: No, thank you, I am already completely {{BLANK}} after that large plate of pasta and garlic bread, so I will just have a cup of green tea instead.",
    "cn": "A：服務生剛剛問我們要不要看甜點菜單，你想點大家都推薦的起司蛋糕嗎？ B：不用了，謝謝，吃完那一大盤義大利麵和蒜香麵包後我已經完全【吃飽】了，所以我喝一杯綠茶就好。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的",
    "en_def": "having a very good taste",
    "sentence": "A: You took our visitors from Germany to that new Taiwanese restaurant last night, so what did they think of the local food? B: They said the beef noodle soup was absolutely {{BLANK}}, and two of them even asked for the address so they could go back again before they fly home on Friday.",
    "cn": "A：你昨晚帶德國訪客去那家新的台灣餐廳，他們覺得在地食物怎麼樣？ B：他們說牛肉麵非常【美味】，其中兩位甚至要了地址，想在週五飛回國前再去一次。"
  },
  {
    "word": "savory",
    "pos": "adj.",
    "cn_def": "鹹味的；鹹香的",
    "en_def": "salty or spicy rather than sweet",
    "sentence": "A: We are planning the snacks for the morning coffee break, but many guests said last time that the cakes were too sweet, so what should we change? B: This time let's offer more {{BLANK}} choices, such as cheese rolls, small sandwiches, and mini meat pies, along with a few pieces of fresh fruit.",
    "cn": "A：我們在規劃上午咖啡休息時間的點心，但很多來賓上次說蛋糕太甜了，我們該改什麼？ B：這次我們多提供一些【鹹味的】選擇，例如起司捲、小三明治和迷你肉派，再搭配幾片新鮮水果。"
  },
  {
    "word": "nutritious",
    "pos": "adj.",
    "cn_def": "有營養的",
    "en_def": "containing many things the body needs to stay healthy",
    "sentence": "A: The school has asked our catering company to improve the lunches we provide for students, so what changes are we going to make? B: We will offer more {{BLANK}} meals with brown rice, fresh vegetables, and lean meat, and we will reduce fried foods and sugary drinks to only once a week.",
    "cn": "A：學校要求我們的餐飲公司改善提供給學生的午餐，我們要做哪些改變？ B：我們會提供更多【有營養的】餐點，有糙米、新鮮蔬菜和瘦肉，並把油炸食物和含糖飲料減少到一週只有一次。"
  },
  {
    "word": "balanced",
    "pos": "adj.",
    "cn_def": "均衡的",
    "en_def": "having the right amounts of different kinds of food",
    "sentence": "A: Many of our employees work long hours and often eat instant noodles at their desks, so how can the company help them stay healthy? B: The cafeteria could offer a {{BLANK}} meal box every day with rice, vegetables, protein, and fruit, and sell it at a low price so that everyone can afford it.",
    "cn": "A：我們很多員工工時很長，常在座位上吃泡麵，公司要怎麼幫助他們保持健康？ B：員工餐廳可以每天提供【均衡的】餐盒，有米飯、蔬菜、蛋白質和水果，並以低價販售讓每個人都買得起。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "迅速地",
    "en_def": "fast; in a short time",
    "sentence": "A: You only have twenty minutes between the client presentation and the board meeting this afternoon, so will you have time to get something to eat? B: I will grab a sandwich from the café downstairs and eat it {{BLANK}} in my office, because I still need to print the reports before the meeting starts.",
    "cn": "A：今天下午你在客戶簡報和董事會議之間只有二十分鐘，你有時間吃點東西嗎？ B：我會去樓下咖啡廳買個三明治，在辦公室【很快地】吃完，因為我還得在會議開始前把報告印出來。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "with each other",
    "sentence": "A: The new team members still seem a little shy and do not talk much with the others, so how can we help them feel more comfortable? B: Let's invite the whole team to have lunch {{BLANK}} every Friday at the noodle shop nearby, because sharing a meal is an easy way for people to get to know each other.",
    "cn": "A：新進的團隊成員似乎還有點害羞，不太和其他人說話，我們要怎麼幫他們更自在？ B：我們每週五邀整個團隊【一起】去附近的麵店吃午餐吧，因為共享一餐是讓大家互相認識的簡單方法。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "規律地；定期地",
    "en_def": "at the same times each day; often",
    "sentence": "A: You used to get headaches in the afternoon, but you seem fine these days, so did you see a doctor about the problem? B: The doctor said I often skipped lunch when I was busy, so now I make sure to eat {{BLANK}} at about the same time every day, and the headaches have mostly stopped.",
    "cn": "A：你以前下午常頭痛，但最近看起來還好，你有因為這個問題去看醫生嗎？ B：醫生說我忙的時候常常不吃午餐，所以現在我確保每天在差不多的時間【規律地】用餐，頭痛幾乎都沒了。"
  },
  {
    "word": "heartily",
    "pos": "adv.",
    "cn_def": "盡情地；開懷地",
    "en_def": "with great enjoyment and a big appetite",
    "sentence": "A: The construction workers spent the whole morning carrying heavy materials in the hot sun, so did they enjoy the lunch that the company provided? B: Yes, they ate {{BLANK}} and finished almost everything, and several of them thanked the manager for ordering such large boxes of rice, chicken, and vegetables.",
    "cn": "A：建築工人整個早上都在大太陽下搬運重物，他們喜歡公司提供的午餐嗎？ B：喜歡，他們【盡情地】吃，幾乎把所有東西都吃光了，好幾位還感謝經理訂了這麼大盒的飯、雞肉和蔬菜。"
  }
];

const MCQS = [
  {
    "q": "The hotel offers a free _____ buffet from 6:30 to 9:30 every morning. Guests should show their room key at the restaurant.",
    "options": [
      "breakfast",
      "dessert",
      "supper",
      "banquet"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Employees may take a one-hour _____ break between noon and two o'clock. Please record the time you leave on the sign-out sheet.",
    "options": [
      "feast",
      "lunch",
      "recipe",
      "flavor"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The sales director will host a _____ for the visiting buyers at seven this evening. Formal business clothing is expected at the restaurant.",
    "options": [
      "snack",
      "portion",
      "dinner",
      "beverage"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After the late shift ended at ten, the night staff shared a light _____ in the break room. Most then went straight home.",
    "options": [
      "breakfast",
      "appetizer",
      "ingredient",
      "supper"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Passengers on short flights receive a free drink and a small _____ such as nuts or crackers. Full meals are only served on longer routes.",
    "options": [
      "snack",
      "banquet",
      "course",
      "recipe"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Our chef's most popular _____ is grilled salmon with lemon sauce. It has been on the menu since the restaurant opened.",
    "options": [
      "diet",
      "dish",
      "nutrition",
      "feast"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The wedding meal will include a main _____ of roast beef or baked fish. Guests must choose one option when they reply to the invitation.",
    "options": [
      "beverage",
      "recipe",
      "course",
      "snack"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "We started with a shrimp _____ while we waited for the main dishes to arrive. It was small but full of flavor.",
    "options": [
      "dessert",
      "banquet",
      "diet",
      "appetizer"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "For _____, the restaurant offers ice cream, fruit tarts, and chocolate cake. Each sweet item costs an extra 120 dollars.",
    "options": [
      "dessert",
      "appetizer",
      "beverage",
      "ingredient"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Coffee, tea, and soft drinks are included in the conference fee. Any alcoholic _____ must be paid for separately at the bar.",
    "options": [
      "dish",
      "beverage",
      "portion",
      "recipe"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The restaurant now offers smaller _____ sizes at lower prices for lighter eaters. This change has attracted many office workers at lunchtime.",
    "options": [
      "menu",
      "recipe",
      "portion",
      "banquet"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Each _____ of this yogurt contains only ninety calories and five grams of protein. The information is printed on the side of the cup.",
    "options": [
      "banquet",
      "appetizer",
      "recipe",
      "serving"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Please look at the _____ and choose your meal before the waiter returns. Today's specials are written on the board by the door.",
    "options": [
      "menu",
      "feast",
      "portion",
      "diet"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The cooking class teaches students how to follow a _____ step by step. Each person will make their own pizza from fresh dough.",
    "options": [
      "banquet",
      "recipe",
      "beverage",
      "feast"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The bakery uses only one secret _____ in its famous bread. The owner refuses to tell anyone what it is.",
    "options": [
      "supper",
      "banquet",
      "ingredient",
      "beverage"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Our new ice cream comes in a mango _____ that is perfect for hot summer days. It will be sold in all stores from June.",
    "options": [
      "nutrition",
      "course",
      "diet",
      "flavor"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The label on the box gives full _____ information, including fat, sugar, and salt. Customers can compare products easily.",
    "options": [
      "nutrition",
      "banquet",
      "appetizer",
      "feast"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "After his health check, the manager decided to follow a low-salt _____. He now avoids instant noodles and fried food.",
    "options": [
      "banquet",
      "diet",
      "dessert",
      "portion"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The village holds a big harvest _____ every autumn with roast pork and rice cakes. Visitors are welcome to join the celebration.",
    "options": [
      "snack",
      "portion",
      "feast",
      "recipe"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "About four hundred guests attended the charity _____ at the Grand Hotel last night. The event raised over two million dollars.",
    "options": [
      "snack",
      "ingredient",
      "recipe",
      "banquet"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The catering team needs at least two days to _____ food for an event of this size. Please place your order by Wednesday.",
    "options": [
      "prepare",
      "taste",
      "eat",
      "swallow"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Our chef will _____ the steak for exactly four minutes on each side. This keeps the meat soft and juicy.",
    "options": [
      "eat",
      "cook",
      "taste",
      "serve"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The hotel restaurant will _____ breakfast to guests from 6:30 until 10:00 every day. Late guests can order room service instead.",
    "options": [
      "cook",
      "taste",
      "serve",
      "eat"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Staff are not allowed to _____ or drink near the computers in the server room. Please use the kitchen on the second floor.",
    "options": [
      "cook",
      "serve",
      "prepare",
      "eat"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Before each sauce is sent to the tables, the head chef will _____ it to check the salt. Nothing leaves the kitchen without his approval.",
    "options": [
      "taste",
      "serve",
      "eat",
      "cook"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Many students arrive at school _____ because they have no time for breakfast. The school now gives them free bread and milk.",
    "options": [
      "savory",
      "hungry",
      "delicious",
      "balanced"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "I am too _____ to have dessert after that huge steak. Could we just ask for the bill?",
    "options": [
      "hungry",
      "savory",
      "full",
      "nutritious"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Customers say the soup at this small shop is _____ and well worth the long wait. Reviews online give it five stars.",
    "options": [
      "hungry",
      "full",
      "balanced",
      "delicious"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The café offers both sweet and _____ crepes, such as ham and cheese. Customers can also add a salad for a small extra fee.",
    "options": [
      "savory",
      "hungry",
      "full",
      "balanced"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The new school lunch program aims to provide _____ meals that help children grow and stay healthy. Parents have welcomed the change.",
    "options": [
      "hungry",
      "nutritious",
      "full",
      "savory"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "breakfast": {
    "pos": "n.",
    "en_def": "the first meal of the day",
    "cn_def": "早餐"
  },
  "lunch": {
    "pos": "n.",
    "en_def": "the meal eaten in the middle of the day",
    "cn_def": "午餐"
  },
  "dinner": {
    "pos": "n.",
    "en_def": "the main meal eaten in the evening",
    "cn_def": "晚餐"
  },
  "supper": {
    "pos": "n.",
    "en_def": "a light meal eaten late in the evening",
    "cn_def": "晚餐；宵夜"
  },
  "snack": {
    "pos": "n.",
    "en_def": "a small amount of food eaten between meals",
    "cn_def": "點心；零食"
  },
  "dish": {
    "pos": "n.",
    "en_def": "food prepared in a particular way as part of a meal",
    "cn_def": "菜餚"
  },
  "course": {
    "pos": "n.",
    "en_def": "one part of a meal served at one time",
    "cn_def": "（一）道菜"
  },
  "appetizer": {
    "pos": "n.",
    "en_def": "a small dish eaten before the main part of a meal",
    "cn_def": "開胃菜"
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
  "portion": {
    "pos": "n.",
    "en_def": "the amount of food for one person",
    "cn_def": "（食物的）一份"
  },
  "serving": {
    "pos": "n.",
    "en_def": "an amount of food for one person, often used on nutrition labels",
    "cn_def": "一人份"
  },
  "menu": {
    "pos": "n.",
    "en_def": "a list of the food and drinks available in a restaurant",
    "cn_def": "菜單"
  },
  "recipe": {
    "pos": "n.",
    "en_def": "a set of instructions for cooking a dish",
    "cn_def": "食譜"
  },
  "ingredient": {
    "pos": "n.",
    "en_def": "one of the foods used to make a dish",
    "cn_def": "食材；原料"
  },
  "flavor": {
    "pos": "n.",
    "en_def": "the taste of food or drink",
    "cn_def": "味道；口味"
  },
  "nutrition": {
    "pos": "n.",
    "en_def": "the healthy substances in food that the body needs",
    "cn_def": "營養"
  },
  "diet": {
    "pos": "n.",
    "en_def": "the kind of food a person usually eats",
    "cn_def": "飲食"
  },
  "feast": {
    "pos": "n.",
    "en_def": "a large special meal with a lot of food",
    "cn_def": "盛宴"
  },
  "banquet": {
    "pos": "n.",
    "en_def": "a formal dinner for many people, often with speeches",
    "cn_def": "宴會"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make food ready to eat",
    "cn_def": "準備（餐點）"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food by heating it",
    "cn_def": "烹煮；做飯"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to people",
    "cn_def": "供應；上（菜）"
  },
  "eat": {
    "pos": "v.",
    "en_def": "to put food in your mouth and swallow it",
    "cn_def": "吃；用餐"
  },
  "taste": {
    "pos": "v.",
    "en_def": "to try a small amount of food to see what it is like",
    "cn_def": "品嚐"
  },
  "hungry": {
    "pos": "adj.",
    "en_def": "wanting or needing food",
    "cn_def": "飢餓的"
  },
  "full": {
    "pos": "adj.",
    "en_def": "having eaten so much that you do not want any more",
    "cn_def": "吃飽的"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "having a very good taste",
    "cn_def": "美味的"
  },
  "savory": {
    "pos": "adj.",
    "en_def": "salty or spicy rather than sweet",
    "cn_def": "鹹味的；鹹香的"
  },
  "nutritious": {
    "pos": "adj.",
    "en_def": "containing many things the body needs to stay healthy",
    "cn_def": "有營養的"
  },
  "balanced": {
    "pos": "adj.",
    "en_def": "having the right amounts of different kinds of food",
    "cn_def": "均衡的"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "迅速地"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other",
    "cn_def": "一起"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "at the same times each day; often",
    "cn_def": "規律地；定期地"
  },
  "heartily": {
    "pos": "adv.",
    "en_def": "with great enjoyment and a big appetite",
    "cn_def": "盡情地；開懷地"
  }
};

const EXTRA_GLOSSES = {};
