// Topic 331 Quiz Data: Restaurant 餐廳
// Source word list: https://www.examword.com/group-topic/restaurant — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T331 - Restaurant 餐廳",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "menu",
    "pos": "n.",
    "cn_def": "菜單",
    "en_def": "a list of the food and drinks that a restaurant serves",
    "sentence": "A: The new manager wants to attract more office workers at lunch, so what changes is the restaurant planning for next month? B: We are going to print a shorter {{BLANK}} with ten quick meals under fifteen dollars, and we will put a copy on our website so people can decide before they arrive.",
    "cn": "A：新經理想在午餐時段吸引更多上班族，所以餐廳下個月打算做哪些改變？ B：我們要印一份較簡短的【菜單】，上面有十道十五美元以內的快速餐點，我們也會在網站上放一份，讓大家在抵達前就能決定。"
  },
  {
    "word": "dish",
    "pos": "n.",
    "cn_def": "菜餚；一道菜",
    "en_def": "a particular kind of food prepared as part of a meal",
    "sentence": "A: Our clients from Japan are visiting the office on Friday, and I would like to take them somewhere special for dinner, so do you have any suggestions? B: The Italian place across from the train station is excellent, and their most famous {{BLANK}} is a seafood pasta that the chef prepares with fresh tomatoes and herbs.",
    "cn": "A：我們的日本客戶週五要來公司參訪，我想帶他們去特別的地方吃晚餐，你有什麼建議嗎？ B：火車站對面那家義大利餐廳很棒，他們最有名的【菜餚】是主廚用新鮮番茄和香草做的海鮮義大利麵。"
  },
  {
    "word": "cuisine",
    "pos": "n.",
    "cn_def": "菜餚；烹飪風格；料理",
    "en_def": "a style of cooking from a certain country or area",
    "sentence": "A: The marketing team is planning a welcome lunch for the new staff members, but several of them do not eat meat, so where should we go? B: Let's book a table at the Indian restaurant downtown, because their {{BLANK}} includes many vegetable curries, and the prices are reasonable for a large group of twenty people.",
    "cn": "A：行銷團隊正在為新進員工規劃一場歡迎午宴，但其中幾位不吃肉，我們該去哪裡？ B：我們去市中心那家印度餐廳訂位吧，因為他們的【料理】有很多蔬菜咖哩，而且對二十人的大團體來說價格也很合理。"
  },
  {
    "word": "chef",
    "pos": "n.",
    "cn_def": "主廚；廚師",
    "en_def": "a skilled cook, especially the main cook in a restaurant",
    "sentence": "A: Why did the hotel restaurant suddenly become so popular with business travelers over the past few months? B: They hired a new {{BLANK}} who used to work in Paris, and he changed the whole kitchen, so now every meal looks beautiful and tastes much better than before.",
    "cn": "A：為什麼飯店餐廳在過去幾個月突然在商務旅客間變得這麼受歡迎？ B：他們聘請了一位曾在巴黎工作的新【主廚】，他改造了整個廚房，所以現在每道餐點看起來都很漂亮，而且比以前好吃多了。"
  },
  {
    "word": "waiter",
    "pos": "n.",
    "cn_def": "（男）服務生",
    "en_def": "a man who brings food and drinks to tables in a restaurant",
    "sentence": "A: I left my umbrella at the café after our meeting with the suppliers yesterday afternoon, so do you think anyone found it? B: Yes, I called them this morning, and the {{BLANK}} who served our table said he put it behind the counter, so you can pick it up anytime before nine tonight.",
    "cn": "A：昨天下午和供應商開完會後，我把雨傘忘在咖啡廳了，你覺得有人撿到嗎？ B：有，我今天早上打電話問過了，幫我們那桌服務的【男服務生】說他把傘放在櫃台後面，所以你今晚九點前隨時都可以去拿。"
  },
  {
    "word": "waitress",
    "pos": "n.",
    "cn_def": "女服務生",
    "en_def": "a woman who brings food and drinks to tables in a restaurant",
    "sentence": "A: How was your dinner at the new seafood restaurant with the sales team last night, and would you go there again? B: The food was a little expensive, but our {{BLANK}} was very friendly and patient, and she explained every item on the list carefully, so I would definitely return with my family.",
    "cn": "A：你昨晚和業務團隊去那家新海鮮餐廳吃晚餐感覺如何？你會再去嗎？ B：食物有點貴，但我們的【女服務生】非常親切又有耐心，她仔細解說了清單上的每一道菜，所以我一定會帶家人再去。"
  },
  {
    "word": "server",
    "pos": "n.",
    "cn_def": "服務生；服務人員",
    "en_def": "a person who serves food and drinks to guests in a restaurant",
    "sentence": "A: The restaurant is getting much busier since the shopping mall opened next door, so what is the owner going to do about it? B: She plans to hire one more {{BLANK}} for the evening shift, because the guests are waiting too long for their food and drinks, and some of them have complained online.",
    "cn": "A：自從隔壁購物中心開幕後，餐廳變得忙碌許多，老闆打算怎麼處理？ B：她打算為晚班再聘請一位【服務生】，因為客人等餐點和飲料等太久了，有些人已經在網路上抱怨。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預訂；訂位",
    "en_def": "an arrangement to keep a table, room or seat for someone",
    "sentence": "A: Twelve people from the head office are joining us for dinner on Thursday night, so is there anything I should do today? B: Please call the steak house on Main Street and make a {{BLANK}} for seven o'clock, because they are usually full on weekdays and might not have a large table later in the week.",
    "cn": "A：總公司有十二個人週四晚上要和我們一起吃晚餐，我今天有什麼該做的嗎？ B：請打電話給大街上那家牛排館，【預訂】七點的位子，因為他們平日通常客滿，週間稍晚可能就沒有大桌了。"
  },
  {
    "word": "bill",
    "pos": "n.",
    "cn_def": "帳單",
    "en_def": "a piece of paper that shows how much you must pay for a meal",
    "sentence": "A: The lunch with our new partners went really well, but who is supposed to pay, since we invited them to the restaurant? B: The company will pay this time, so please ask the waiter for the {{BLANK}}, pay with the company credit card, and remember to keep the receipt for the accounting department.",
    "cn": "A：和新合作夥伴的午餐非常順利，不過是我們邀請他們來餐廳的，應該由誰付錢？ B：這次由公司支付，所以請向服務生要【帳單】，用公司信用卡付款，並記得把收據留給會計部。"
  },
  {
    "word": "tip",
    "pos": "n.",
    "cn_def": "小費",
    "en_def": "extra money you give to a waiter or worker to thank them",
    "sentence": "A: I am traveling to New York next week for a training course, and I am not sure about the customs in restaurants there, so can you help me? B: Of course, in most restaurants in America, people usually leave a {{BLANK}} of about fifteen to twenty percent for the staff, because their basic pay is quite low.",
    "cn": "A：我下週要去紐約參加訓練課程，我不太清楚那邊餐廳的習俗，你可以幫我嗎？ B：當然，在美國大多數餐廳，大家通常會留下大約百分之十五到二十的【小費】給員工，因為他們的基本工資相當低。"
  },
  {
    "word": "appetizer",
    "pos": "n.",
    "cn_def": "開胃菜；前菜",
    "en_def": "a small amount of food eaten before the main part of a meal",
    "sentence": "A: Our guests from the bank will probably arrive hungry after their long flight, but the main meal takes almost an hour to prepare, so what can we do? B: We can order a light {{BLANK}} such as garlic bread or a small salad as soon as they sit down, so they have something to eat while they wait.",
    "cn": "A：銀行來的客人長途飛行後抵達時應該會很餓，但主餐要將近一小時才能準備好，我們該怎麼辦？ B：他們一坐下我們就可以點一道清淡的【開胃菜】，像是蒜香麵包或小份沙拉，讓他們在等待時有東西吃。"
  },
  {
    "word": "main course",
    "pos": "n.phr.",
    "cn_def": "主菜",
    "en_def": "the largest and most important part of a meal",
    "sentence": "A: How long will the company's anniversary dinner last on Saturday evening, because I need to catch the last train home? B: The event starts at six, the speeches finish around seven, and the {{BLANK}} will be served at seven-thirty, so you should be able to leave before nine if you skip dessert.",
    "cn": "A：週六晚上公司週年晚宴會持續多久？因為我要趕最後一班火車回家。 B：活動六點開始，致詞大約七點結束，【主菜】會在七點半上桌，所以如果你不吃甜點，應該可以在九點前離開。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "A: The meal at the conference center was great, but did you notice that several people left before the end of the dinner? B: Yes, they had an early meeting the next day, so they missed the {{BLANK}}, which was a delicious chocolate cake with fresh strawberries and vanilla ice cream.",
    "cn": "A：會議中心的餐點很棒，但你有注意到有好幾個人在晚餐結束前就離開了嗎？ B：有，他們隔天一早要開會，所以錯過了【甜點】，那是搭配新鮮草莓和香草冰淇淋的美味巧克力蛋糕。"
  },
  {
    "word": "beverage",
    "pos": "n.",
    "cn_def": "飲料；飲品",
    "en_def": "any kind of drink, such as coffee, tea or juice",
    "sentence": "A: We are planning the menu for the training workshop next Tuesday, so what should we provide besides sandwiches and fruit? B: Please make sure there is at least one hot {{BLANK}}, like coffee or tea, for each person, because the meeting room is quite cold in the morning and the session lasts four hours.",
    "cn": "A：我們正在規劃下週二訓練工作坊的餐點，除了三明治和水果，還應該提供什麼？ B：請確保每個人至少有一杯熱【飲料】，像是咖啡或茶，因為會議室早上相當冷，而且課程要持續四個小時。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐",
    "en_def": "a meal where people serve themselves from many dishes on a table",
    "sentence": "A: The hotel is hosting our sales conference next month, and some guests have different eating habits, so what kind of lunch would work best? B: I think a {{BLANK}} is the best choice, because people can walk around, choose the food they like, and eat as much or as little as they want without waiting.",
    "cn": "A：飯店下個月要承辦我們的業務會議，有些客人的飲食習慣不同，哪種午餐最合適？ B：我認為【自助餐】是最好的選擇，因為大家可以四處走動、挑選自己喜歡的食物，想吃多少就吃多少，不必等待。"
  },
  {
    "word": "takeout",
    "pos": "n.",
    "cn_def": "外帶餐點；外賣",
    "en_def": "food you buy at a restaurant and eat somewhere else",
    "sentence": "A: We have to finish the budget report for the director before tomorrow morning, so I don't think we have time to go out for dinner tonight. B: Then let's get {{BLANK}} from the Chinese restaurant around the corner, because they deliver quickly, and we can eat at our desks while we check the numbers.",
    "cn": "A：我們必須在明天早上之前為主任完成預算報告，所以我想今晚沒時間出去吃晚餐了。 B：那我們從轉角那家中式餐館叫【外帶餐點】吧，他們送餐很快，我們可以一邊在座位上吃一邊核對數字。"
  },
  {
    "word": "dine",
    "pos": "v.",
    "cn_def": "用餐；進餐",
    "en_def": "to eat a meal, especially dinner",
    "sentence": "A: Where are the visiting engineers from Germany going to have dinner after they finish touring the factory this evening? B: The general manager has arranged for them to {{BLANK}} at the rooftop restaurant of their hotel, where they can enjoy a nice view of the city while they discuss the project.",
    "cn": "A：來訪的德國工程師今晚參觀完工廠後要在哪裡吃晚餐？ B：總經理已安排他們在下榻飯店的頂樓餐廳【用餐】，他們可以一邊討論專案一邊欣賞城市美景。"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務",
    "en_def": "the way staff help and serve guests in a restaurant or shop",
    "sentence": "A: Why did the restaurant near our office lose so many regular guests over the past year, even though the food is still good? B: Many people complained that the {{BLANK}} was too slow and the staff were often rude, so they decided to eat somewhere else where they felt more welcome.",
    "cn": "A：為什麼我們辦公室附近那家餐廳過去一年流失了這麼多常客，即使食物還是很好吃？ B：很多人抱怨【服務】太慢，員工又常常很沒禮貌，所以他們決定去其他讓他們覺得更受歡迎的地方用餐。"
  },
  {
    "word": "ambience",
    "pos": "n.",
    "cn_def": "氣氛；環境氛圍",
    "en_def": "the feeling or mood of a place",
    "sentence": "A: Why do you always choose that small French café for meetings with important clients, even though it is a bit far from the office? B: The {{BLANK}} there is perfect for business talks, with soft music, warm lighting, and comfortable chairs, so our clients feel relaxed and the conversation goes smoothly.",
    "cn": "A：為什麼你和重要客戶開會時總是選那家小法式咖啡館，即使它離辦公室有點遠？ B：那裡的【氣氛】非常適合商務洽談，有輕柔的音樂、溫暖的燈光和舒適的椅子，所以客戶感到放鬆，談話也進行得很順利。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "溫馨舒適的",
    "en_def": "warm, comfortable and pleasant",
    "sentence": "A: I am looking for a quiet place to celebrate my assistant's birthday with a few colleagues after work, so do you know anywhere nice? B: There is a {{BLANK}} little restaurant on Pine Street with only eight tables and a fireplace, so it feels warm and friendly, especially on cold winter evenings like this.",
    "cn": "A：我在找一個安靜的地方，下班後和幾位同事一起為我的助理慶生，你知道哪裡不錯嗎？ B：松樹街上有一家【溫馨舒適】的小餐廳，只有八張桌子和一個壁爐，所以感覺溫暖又友善，特別是在像這樣寒冷的冬夜。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: Should we have our team lunch at the noodle shop near the station today, or is there a better place nearby? B: Let's go somewhere else, because that shop is always {{BLANK}} at noon with office workers and students, and we would probably have to stand in line for at least thirty minutes.",
    "cn": "A：我們今天團隊午餐要在車站附近的麵店吃，還是附近有更好的地方？ B：我們去別的地方吧，因為那家店中午總是【擠滿】上班族和學生，我們大概至少要排隊三十分鐘。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space; large",
    "sentence": "A: We need a restaurant for the year-end party, and about eighty employees have already said they will attend, so which place did you choose? B: I booked the Grand Garden Restaurant, because its main hall is very {{BLANK}}, with enough room for a stage, a band, and ten large round tables.",
    "cn": "A：我們需要一家餐廳辦尾牙，大約已有八十位員工說會參加，你選了哪裡？ B：我訂了大花園餐廳，因為它的主廳非常【寬敞】，有足夠的空間容納一個舞台、一個樂團和十張大圓桌。"
  },
  {
    "word": "clean",
    "pos": "adj.",
    "cn_def": "乾淨的",
    "en_def": "not dirty",
    "sentence": "A: The health inspectors are visiting all the restaurants in this area next week, so what should our kitchen staff focus on? B: Everything must be completely {{BLANK}}, including the floors, the ovens, and the refrigerators, and every worker should wash their hands often and wear a hat while cooking.",
    "cn": "A：衛生稽查員下週要來檢查這一區所有的餐廳，我們的廚房員工應該注意什麼？ B：所有東西都必須完全【乾淨】，包括地板、烤箱和冰箱，而且每位員工都應該經常洗手，烹飪時要戴帽子。"
  },
  {
    "word": "delicious",
    "pos": "adj.",
    "cn_def": "美味的；好吃的",
    "en_def": "tasting very good",
    "sentence": "A: Did the visitors from the Singapore office enjoy the local food we ordered for them at the welcome lunch yesterday? B: They loved it, and they said the beef noodle soup was so {{BLANK}} that they asked for the restaurant's address, because they want to go back before they fly home.",
    "cn": "A：新加坡辦公室來的訪客喜歡我們昨天歡迎午宴替他們點的在地美食嗎？ B：他們很喜歡，還說牛肉麵非常【美味】，所以要了餐廳地址，因為他們想在搭機回國前再去一次。"
  },
  {
    "word": "tasty",
    "pos": "adj.",
    "cn_def": "好吃的；可口的",
    "en_def": "having a good, pleasant flavor",
    "sentence": "A: Our cafeteria has received many complaints about the food recently, so what is the company going to do to improve it? B: The new manager wants to offer healthy but {{BLANK}} meals, so she is hiring a cook with more experience and adding more fresh vegetables and sauces to the daily lunch.",
    "cn": "A：我們的員工餐廳最近收到很多對餐點的抱怨，公司打算怎麼改善？ B：新經理想提供健康又【好吃】的餐點，所以她正在聘請一位更有經驗的廚師，並在每日午餐中加入更多新鮮蔬菜和醬汁。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的",
    "en_def": "recently made, picked or caught; not frozen or old",
    "sentence": "A: Why are the salads at the restaurant next to our building so much more expensive than the ones at the supermarket? B: The owner buys {{BLANK}} vegetables from local farms every morning instead of using frozen ones, so the quality is much higher, and many guests think it is worth the extra money.",
    "cn": "A：為什麼我們大樓隔壁那家餐廳的沙拉比超市的貴那麼多？ B：老闆每天早上向在地農場購買【新鮮】蔬菜，而不是用冷凍的，所以品質高很多，很多客人覺得多花的錢很值得。"
  },
  {
    "word": "spicy",
    "pos": "adj.",
    "cn_def": "辣的；辛辣的",
    "en_def": "having a strong hot taste from pepper or chili",
    "sentence": "A: I would like to take our new colleague from London to a Sichuan restaurant on Friday, but is that a good idea for someone visiting Taiwan for the first time? B: You should ask her first, because many dishes there are very {{BLANK}}, and some visitors cannot handle so much hot pepper, although the waiters can usually make the food milder.",
    "cn": "A：我想週五帶倫敦來的新同事去四川餐廳，但對第一次來台灣的人來說這是好主意嗎？ B：你應該先問她，因為那裡很多菜都非常【辣】，有些訪客無法承受那麼多辣椒，不過服務生通常可以把菜做得比較溫和。"
  },
  {
    "word": "flavorful",
    "pos": "adj.",
    "cn_def": "風味十足的；美味的",
    "en_def": "having a lot of good, strong taste",
    "sentence": "A: The chef at our hotel wants to reduce the amount of salt in every meal, but won't the guests think the food has no taste? B: Not at all, because he plans to use more garlic, lemon, and fresh herbs, which keep the dishes {{BLANK}} while making them much healthier for everyone.",
    "cn": "A：我們飯店的主廚想減少每道餐點的鹽量，但客人不會覺得食物沒味道嗎？ B：完全不會，因為他打算使用更多大蒜、檸檬和新鮮香草，讓菜餚保持【風味十足】，同時對大家來說也健康許多。"
  },
  {
    "word": "specialty",
    "pos": "n.",
    "cn_def": "招牌菜；特色菜",
    "en_def": "a dish that a restaurant is famous for and does very well",
    "sentence": "A: I am meeting a potential investor at the seafood restaurant by the harbor tomorrow, and I have never been there, so what should I order? B: Their {{BLANK}} is grilled fish with lemon butter sauce, and almost every guest orders it, so you should try it and impress your investor with your choice.",
    "cn": "A：我明天要在港口邊那家海鮮餐廳和一位潛在投資人見面，我從沒去過，該點什麼？ B：他們的【招牌菜】是檸檬奶油醬烤魚，幾乎每位客人都會點，你應該試試看，用你的選擇讓投資人印象深刻。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客；客戶",
    "en_def": "a person who buys goods or services from a shop or restaurant",
    "sentence": "A: Why did the restaurant manager give the family at table six a free dessert and apologize to them so many times? B: The kitchen sent them the wrong food twice, and the manager wanted every {{BLANK}} to leave happy, so he tried hard to fix the problem and make the family smile before they went home.",
    "cn": "A：為什麼餐廳經理送了第六桌那家人免費甜點，還向他們道歉那麼多次？ B：廚房兩次送錯餐點，經理希望每位【顧客】都能開心離開，所以他努力解決問題，讓那家人在回家前露出笑容。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that something is good and suggest that someone try it",
    "sentence": "A: I am taking a group of clients to dinner tonight, but I don't know much about wine, so how should I choose a good bottle for the table? B: Just ask the waiter to {{BLANK}} a wine that goes well with your meal, because the staff at good restaurants are trained to help guests with this kind of choice.",
    "cn": "A：我今晚要帶一群客戶去吃晚餐，但我對葡萄酒不太了解，該怎麼為這桌選一瓶好酒？ B：只要請服務生【推薦】一款搭配你們餐點的酒就好，因為好餐廳的員工都受過訓練，可以協助客人做這類選擇。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；評價",
    "en_def": "a written opinion about how good a restaurant, book or product is",
    "sentence": "A: Business at our café has doubled since last month, so do you know what brought in so many new guests? B: A famous food blogger wrote a very positive {{BLANK}} of our breakfast menu, and thousands of people read it online, so now we have a long line every morning.",
    "cn": "A：我們咖啡館的生意從上個月起翻倍了，你知道是什麼吸引了這麼多新客人嗎？ B：一位知名美食部落客為我們的早餐菜單寫了一篇非常正面的【評論】，有成千上萬的人在網路上閱讀，所以現在每天早上都大排長龍。"
  },
  {
    "word": "host",
    "pos": "n.",
    "cn_def": "帶位人員；接待員",
    "en_def": "a person in a restaurant who greets guests and shows them to their table",
    "sentence": "A: When we arrive at the restaurant for the client dinner, should we just find an empty table and sit down? B: No, it is a formal place, so please wait at the entrance until the {{BLANK}} checks our booking and shows us to the private room that I reserved for ten people.",
    "cn": "A：我們抵達餐廳參加客戶晚宴時，應該直接找張空桌坐下嗎？ B：不，那是正式的場所，所以請在入口等候，直到【帶位人員】確認我們的訂位，並帶我們到我為十個人預訂的包廂。"
  },
  {
    "word": "order",
    "pos": "v.",
    "cn_def": "點（餐）；訂購",
    "en_def": "to ask for food or drinks in a restaurant or from a shop",
    "sentence": "A: The meeting with the overseas partners will probably continue until late afternoon, so how can we make sure everyone gets lunch? B: Let's {{BLANK}} sandwiches and salads from the café downstairs around eleven, and ask them to deliver the food to the conference room by twelve-thirty.",
    "cn": "A：和海外合作夥伴的會議可能會持續到下午稍晚，我們要怎麼確保每個人都吃到午餐？ B：我們十一點左右向樓下的咖啡廳【訂購】三明治和沙拉，並請他們在十二點半前送到會議室。"
  }
];

const MCQS = [
  {
    "q": "The restaurant updates its _____ every season to include local ingredients. Guests can also view the full list of dishes online.",
    "options": [
      "menu",
      "tip",
      "chef",
      "beverage"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our team ordered several plates to share at the client lunch. The most popular _____ was the grilled chicken with rice.",
    "options": [
      "tip",
      "dish",
      "host",
      "bill"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The hotel's new restaurant specializes in Thai _____. Its chefs trained in Bangkok for several years before moving to Taipei.",
    "options": [
      "service",
      "bill",
      "cuisine",
      "customer"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The head _____ designed a new seasonal menu for the hotel. She tested every recipe in the kitchen before serving it to guests.",
    "options": [
      "customer",
      "bill",
      "review",
      "chef"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please ask the _____ to bring another bottle of water to our table. The client mentioned that he was very thirsty.",
    "options": [
      "waiter",
      "menu",
      "cuisine",
      "dessert"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The restaurant hired a new _____ for the dinner shift. He takes orders, carries plates, and refills drinks for about ten tables.",
    "options": [
      "appetizer",
      "server",
      "beverage",
      "menu"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "We made a _____ for twelve people at seven o'clock. The restaurant will hold our table for fifteen minutes only.",
    "options": [
      "ambience",
      "cuisine",
      "reservation",
      "dessert"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "After the business lunch, the manager asked for the _____ and paid with the company card. The accountant needs the receipt by Friday.",
    "options": [
      "buffet",
      "cuisine",
      "ambience",
      "bill"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The service was excellent, so we left a generous _____ on the table. The waiter thanked us warmly as we left.",
    "options": [
      "tip",
      "dish",
      "chef",
      "menu"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "We shared a light _____ of spring rolls before the main meal arrived. It was a good way to start the evening.",
    "options": [
      "host",
      "appetizer",
      "review",
      "bill"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "For the _____, guests may choose between roast beef and grilled salmon. Soup and salad are served before it.",
    "options": [
      "ambience",
      "tip",
      "main course",
      "review"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Nobody had room for _____ after the large meal. Instead, we each ordered a cup of coffee and asked for the check.",
    "options": [
      "chef",
      "waiter",
      "reservation",
      "dessert"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Coffee, tea, and juice are included in the lunch price. Any other _____ such as wine or beer costs extra.",
    "options": [
      "beverage",
      "chef",
      "host",
      "bill"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The hotel offers a breakfast _____ from six to ten every morning. Guests can serve themselves from a wide selection of hot and cold food.",
    "options": [
      "tip",
      "buffet",
      "review",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many office workers prefer to _____ out on Friday evenings. Restaurants downtown are often fully booked by six o'clock.",
    "options": [
      "review",
      "recommend",
      "dine",
      "host"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The food was good, but the _____ was terribly slow. We waited forty minutes for our drinks to arrive.",
    "options": [
      "menu",
      "tip",
      "appetizer",
      "service"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "With candles and soft jazz music, the restaurant has a romantic _____. It is a popular place for anniversary dinners.",
    "options": [
      "ambience",
      "specialty",
      "beverage",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The café is small and _____, with soft chairs and a warm fireplace. Many guests stay for hours reading books.",
    "options": [
      "spicy",
      "cozy",
      "flavorful",
      "delicious"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The food court is always _____ at lunchtime because of the nearby offices. It is hard to find an empty seat after noon.",
    "options": [
      "spicy",
      "tasty",
      "crowded",
      "fresh"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The new dining hall is bright and _____. It can easily hold two hundred guests for the company's annual dinner.",
    "options": [
      "spicy",
      "flavorful",
      "tasty",
      "spacious"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The inspector checked whether the kitchen was _____ and safe. The restaurant passed with the highest score in the city.",
    "options": [
      "clean",
      "spicy",
      "tasty",
      "delicious"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Everyone said the seafood soup was _____. The chef was pleased and decided to add it to the regular menu.",
    "options": [
      "crowded",
      "delicious",
      "spacious",
      "clean"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The restaurant buys _____ fish from the harbor every morning. Nothing is frozen, so the quality is always excellent.",
    "options": [
      "crowded",
      "spacious",
      "fresh",
      "cozy"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "This curry is very _____, so please let the kitchen know if you prefer milder food. We can reduce the amount of chili.",
    "options": [
      "spacious",
      "crowded",
      "cozy",
      "spicy"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The chef adds herbs and garlic to keep the soup _____ without using too much salt. Health-conscious diners appreciate this approach.",
    "options": [
      "flavorful",
      "crowded",
      "spacious",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Grilled lamb is the house _____ at this restaurant. Almost every guest orders it on their first visit.",
    "options": [
      "tip",
      "specialty",
      "bill",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Every _____ who spends more than fifty dollars will receive a free dessert. The offer is valid until the end of the month.",
    "options": [
      "menu",
      "appetizer",
      "customer",
      "cuisine"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Could you _____ a good restaurant near the convention center? I need to take three clients to dinner tonight.",
    "options": [
      "dine",
      "host",
      "order",
      "recommend"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The food critic wrote a positive _____ of the new bistro in Sunday's newspaper. Reservations increased sharply the following week.",
    "options": [
      "review",
      "tip",
      "buffet",
      "chef"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Guests can _____ food online and pick it up at the counter. The restaurant also delivers within three kilometers.",
    "options": [
      "dine",
      "order",
      "recommend",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "menu": {
    "pos": "n.",
    "en_def": "a list of the food and drinks that a restaurant serves",
    "cn_def": "菜單"
  },
  "dish": {
    "pos": "n.",
    "en_def": "a particular kind of food prepared as part of a meal",
    "cn_def": "菜餚；一道菜"
  },
  "cuisine": {
    "pos": "n.",
    "en_def": "a style of cooking from a certain country or area",
    "cn_def": "菜餚；烹飪風格；料理"
  },
  "chef": {
    "pos": "n.",
    "en_def": "a skilled cook, especially the main cook in a restaurant",
    "cn_def": "主廚；廚師"
  },
  "waiter": {
    "pos": "n.",
    "en_def": "a man who brings food and drinks to tables in a restaurant",
    "cn_def": "（男）服務生"
  },
  "waitress": {
    "pos": "n.",
    "en_def": "a woman who brings food and drinks to tables in a restaurant",
    "cn_def": "女服務生"
  },
  "server": {
    "pos": "n.",
    "en_def": "a person who serves food and drinks to guests in a restaurant",
    "cn_def": "服務生；服務人員"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a table, room or seat for someone",
    "cn_def": "預訂；訂位"
  },
  "bill": {
    "pos": "n.",
    "en_def": "a piece of paper that shows how much you must pay for a meal",
    "cn_def": "帳單"
  },
  "tip": {
    "pos": "n.",
    "en_def": "extra money you give to a waiter or worker to thank them",
    "cn_def": "小費"
  },
  "appetizer": {
    "pos": "n.",
    "en_def": "a small amount of food eaten before the main part of a meal",
    "cn_def": "開胃菜；前菜"
  },
  "main course": {
    "pos": "n.phr.",
    "en_def": "the largest and most important part of a meal",
    "cn_def": "主菜"
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food eaten at the end of a meal",
    "cn_def": "甜點"
  },
  "beverage": {
    "pos": "n.",
    "en_def": "any kind of drink, such as coffee, tea or juice",
    "cn_def": "飲料；飲品"
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where people serve themselves from many dishes on a table",
    "cn_def": "自助餐"
  },
  "takeout": {
    "pos": "n.",
    "en_def": "food you buy at a restaurant and eat somewhere else",
    "cn_def": "外帶餐點；外賣"
  },
  "dine": {
    "pos": "v.",
    "en_def": "to eat a meal, especially dinner",
    "cn_def": "用餐；進餐"
  },
  "service": {
    "pos": "n.",
    "en_def": "the way staff help and serve guests in a restaurant or shop",
    "cn_def": "服務"
  },
  "ambience": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；環境氛圍"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable and pleasant",
    "cn_def": "溫馨舒適的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space; large",
    "cn_def": "寬敞的"
  },
  "clean": {
    "pos": "adj.",
    "en_def": "not dirty",
    "cn_def": "乾淨的"
  },
  "delicious": {
    "pos": "adj.",
    "en_def": "tasting very good",
    "cn_def": "美味的；好吃的"
  },
  "tasty": {
    "pos": "adj.",
    "en_def": "having a good, pleasant flavor",
    "cn_def": "好吃的；可口的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "recently made, picked or caught; not frozen or old",
    "cn_def": "新鮮的"
  },
  "spicy": {
    "pos": "adj.",
    "en_def": "having a strong hot taste from pepper or chili",
    "cn_def": "辣的；辛辣的"
  },
  "flavorful": {
    "pos": "adj.",
    "en_def": "having a lot of good, strong taste",
    "cn_def": "風味十足的；美味的"
  },
  "specialty": {
    "pos": "n.",
    "en_def": "a dish that a restaurant is famous for and does very well",
    "cn_def": "招牌菜；特色菜"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services from a shop or restaurant",
    "cn_def": "顧客；客戶"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that something is good and suggest that someone try it",
    "cn_def": "推薦；建議"
  },
  "review": {
    "pos": "n.",
    "en_def": "a written opinion about how good a restaurant, book or product is",
    "cn_def": "評論；評價"
  },
  "host": {
    "pos": "n.",
    "en_def": "a person in a restaurant who greets guests and shows them to their table",
    "cn_def": "帶位人員；接待員"
  },
  "order": {
    "pos": "v.",
    "en_def": "to ask for food or drinks in a restaurant or from a shop",
    "cn_def": "點（餐）；訂購"
  }
};

const EXTRA_GLOSSES = {};
