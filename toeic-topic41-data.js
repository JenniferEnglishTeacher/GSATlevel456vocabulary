// Topic 41 Quiz Data: Cafe 咖啡館
// Source word list: https://www.examword.com/group-topic/cafe — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T41 - Cafe 咖啡館",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "coffeehouse",
    "pos": "n.",
    "cn_def": "咖啡館",
    "en_def": "a café where people drink coffee and meet",
    "sentence": "A: Our team needs a relaxed place to meet the new designer from Osaka on Friday morning, so do you have any suggestions near the office? B: There is a charming old {{BLANK}} on Maple Street that opened in the 1950s, and it has large wooden tables where we can spread out the drawings and talk for hours.",
    "cn": "A：週五早上我們團隊需要一個輕鬆的地方和來自大阪的新設計師見面，你在辦公室附近有什麼建議嗎？ B：楓樹街上有一家1950年代開業的迷人老【咖啡館】，裡面有大木桌，我們可以把圖稿攤開，聊上好幾個小時。"
  },
  {
    "word": "barista",
    "pos": "n.",
    "cn_def": "咖啡師",
    "en_def": "a person whose job is making coffee drinks in a café",
    "sentence": "A: The coffee at the new branch tastes much better than it did last month, so did the owner change suppliers or buy a new machine? B: Actually, she hired an experienced {{BLANK}} who won a national competition last year, and he has been training the other staff to prepare every drink more carefully.",
    "cn": "A：新分店的咖啡比上個月好喝多了，老闆是換了供應商還是買了新機器？ B：其實她聘請了一位去年贏得全國比賽的資深【咖啡師】，他一直在訓練其他員工更用心地準備每一杯飲料。"
  },
  {
    "word": "espresso",
    "pos": "n.",
    "cn_def": "濃縮咖啡",
    "en_def": "a small cup of very strong black coffee",
    "sentence": "A: You have to finish the quarterly report before the board meeting at nine tomorrow, so are you going to stay late at the office tonight? B: Yes, I probably will, so I'm going downstairs to get a double {{BLANK}} first, because I need something strong to keep me awake while I check all the figures.",
    "cn": "A：你必須在明天九點董事會前完成季報，所以你今晚要在辦公室待到很晚嗎？ B：是的，大概會，所以我要先下樓買一杯雙份【濃縮咖啡】，因為我需要喝點濃的東西，讓我在核對所有數字時保持清醒。"
  },
  {
    "word": "latte",
    "pos": "n.",
    "cn_def": "拿鐵咖啡",
    "en_def": "a coffee drink made with espresso and a lot of hot milk",
    "sentence": "A: I'm going to the café across the street to pick up drinks for the visitors from the head office, so what would you like? B: Please get me a large {{BLANK}} with oat milk, because normal milk upsets my stomach, and I'd like something warm and creamy on a cold, rainy afternoon like this.",
    "cn": "A：我要去對街的咖啡店幫總公司來的訪客買飲料，你想喝什麼？ B：請幫我買一杯加燕麥奶的大杯【拿鐵】，因為一般牛奶會讓我胃不舒服，而且在這樣寒冷下雨的下午，我想喝點溫暖又綿密的東西。"
  },
  {
    "word": "cappuccino",
    "pos": "n.",
    "cn_def": "卡布奇諾",
    "en_def": "a coffee drink made with espresso, hot milk and milk foam",
    "sentence": "A: The client from Milan will arrive at the office around ten, so what should we prepare for her while she waits for the director? B: Let's offer her a fresh {{BLANK}} with a little chocolate powder on top, since her assistant told me she drinks one every morning and doesn't like tea or juice at all.",
    "cn": "A：米蘭來的客戶大約十點會到辦公室，她等主任的時候我們該為她準備什麼？ B：我們給她一杯上面撒點巧克力粉的新鮮【卡布奇諾】吧，因為她的助理告訴我她每天早上都喝一杯，而且完全不喜歡茶或果汁。"
  },
  {
    "word": "menu",
    "pos": "n.",
    "cn_def": "菜單",
    "en_def": "a list of the food and drinks you can order and their prices",
    "sentence": "A: Sales at our café have dropped since the new bakery opened next door, so what do you think we should change first? B: I think we should update the {{BLANK}} with more healthy options like salads and fruit bowls, because many office workers nearby told us they want lighter lunches that don't cost too much.",
    "cn": "A：自從隔壁新麵包店開幕後，我們咖啡店的業績就下滑了，你認為我們應該先改變什麼？ B：我認為我們應該更新【菜單】，加入更多像沙拉和水果碗之類的健康選擇，因為附近很多上班族告訴我們，他們想要清淡又不會太貴的午餐。"
  },
  {
    "word": "counter",
    "pos": "n.",
    "cn_def": "櫃台",
    "en_def": "a long table in a shop or café where customers order and pay",
    "sentence": "A: I've been waiting for my sandwich for almost twenty minutes, and my lunch break ends soon, so should I ask a waiter about it? B: Here they don't bring food to the tables, so you need to pick it up at the {{BLANK}} near the entrance when the staff calls your number on the screen.",
    "cn": "A：我的三明治已經等了將近二十分鐘，我的午休快結束了，我應該問服務生嗎？ B：這裡不會把餐點送到桌上，所以當員工在螢幕上叫你的號碼時，你需要到入口附近的【櫃台】取餐。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "氣氛",
    "en_def": "the feeling or mood that a place gives you",
    "sentence": "A: Why do you always hold your team meetings at that little café on the corner instead of in the conference room upstairs? B: The {{BLANK}} there is relaxed and friendly, with soft lights and comfortable chairs, so my staff feel free to share new ideas without worrying about what the managers might think.",
    "cn": "A：你為什麼總是在轉角那間小咖啡店開團隊會議，而不是在樓上的會議室？ B：那裡的【氣氛】輕鬆友善，有柔和的燈光和舒服的椅子，所以我的員工可以自由地分享新點子，不用擔心主管會怎麼想。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "溫馨舒適的",
    "en_def": "warm, comfortable and pleasant, like a small home",
    "sentence": "A: We need a place to interview the two job candidates on Thursday afternoon, but the meeting rooms are all booked, so where should we go? B: There's a small, {{BLANK}} café behind the train station with soft sofas and a fireplace, so the candidates will feel comfortable and probably speak more naturally about their experience.",
    "cn": "A：週四下午我們需要找個地方面試兩位應徵者，但會議室都被預訂了，我們該去哪裡？ B：火車站後面有一間小而【溫馨舒適】的咖啡館，有柔軟的沙發和壁爐，所以應徵者會覺得自在，可能會更自然地談論他們的經驗。"
  },
  {
    "word": "aroma",
    "pos": "n.",
    "cn_def": "香氣",
    "en_def": "a strong, pleasant smell, especially of food or coffee",
    "sentence": "A: Why did the café owner decide to roast the coffee beans by the front window every morning instead of in the back kitchen? B: She noticed that the rich {{BLANK}} of fresh coffee spreads into the street, and it attracts many people on their way to work, so her morning sales have nearly doubled.",
    "cn": "A：咖啡店老闆為什麼決定每天早上在前窗邊烘咖啡豆，而不是在後面的廚房？ B：她發現新鮮咖啡濃郁的【香氣】會飄到街上，吸引許多上班途中的人，所以她早上的營業額幾乎翻倍了。"
  },
  {
    "word": "brew",
    "pos": "v.",
    "cn_def": "沖泡；釀造",
    "en_def": "to make a hot drink such as coffee or tea",
    "sentence": "A: The coffee machine in the staff kitchen broke again this morning, so what are we going to do for the clients' meeting at eleven? B: Don't worry, I brought a French press from home, so I can {{BLANK}} a large pot of coffee for everyone in about ten minutes before they arrive.",
    "cn": "A：員工廚房的咖啡機今天早上又壞了，那十一點的客戶會議我們要怎麼辦？ B：別擔心，我從家裡帶了一個法式濾壓壺，所以我可以在他們到之前，用大約十分鐘為大家【沖泡】一大壺咖啡。"
  },
  {
    "word": "pastry",
    "pos": "n.",
    "cn_def": "酥皮點心；糕點",
    "en_def": "a small sweet baked food made with butter and flour",
    "sentence": "A: The training session tomorrow starts at eight, and most of the new staff will come straight from the train station, so should we provide breakfast? B: Yes, let's order coffee and a fresh {{BLANK}} for each person from the bakery downstairs, because people learn better when they aren't hungry or tired.",
    "cn": "A：明天的訓練課程八點開始，大部分新員工會直接從火車站過來，我們應該提供早餐嗎？ B：好，我們從樓下的麵包店幫每個人訂咖啡和一份新鮮的【糕點】吧，因為人不餓也不累的時候學習效果比較好。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food you eat at the end of a meal",
    "sentence": "A: The dinner with our Japanese partners went very well, but should we order anything else before we ask for the bill? B: Let's ask the waiter to bring a {{BLANK}} for everyone, like the chocolate cake or the mango pudding, because sharing something sweet is a nice way to end a successful evening together.",
    "cn": "A：和日本夥伴的晚餐很順利，但我們在結帳前還要點些什麼嗎？ B：我們請服務生為大家送上一份【甜點】吧，像是巧克力蛋糕或芒果布丁，因為一起分享甜食是結束一個成功夜晚的好方式。"
  },
  {
    "word": "takeaway",
    "pos": "n.",
    "cn_def": "外帶餐點",
    "en_def": "food or a drink that you buy in a shop and take away to eat or drink",
    "sentence": "A: I have a conference call with the London office in fifteen minutes, so do you think I have enough time to eat lunch at the café downstairs? B: Probably not, so you should get a {{BLANK}} instead and eat it at your desk, because the café is always very busy and slow at this time of day.",
    "cn": "A：我十五分鐘後要和倫敦辦公室開電話會議，你覺得我有足夠時間在樓下咖啡店吃午餐嗎？ B：大概沒有，所以你應該改買【外帶餐點】在座位上吃，因為這個時段咖啡店總是很忙，出餐很慢。"
  },
  {
    "word": "dine",
    "pos": "v.",
    "cn_def": "用餐",
    "en_def": "to eat a meal, especially dinner, often at a restaurant",
    "sentence": "A: The visitors from our Singapore branch arrive on Friday evening, so where would be a good place to take them after the factory tour? B: I think we should {{BLANK}} at the Italian restaurant by the river, because it has a quiet private room and the chef can prepare vegetarian dishes for the manager.",
    "cn": "A：新加坡分公司的訪客週五晚上抵達，參觀工廠之後帶他們去哪裡好？ B：我想我們應該在河邊那家義大利餐廳【用餐】，因為它有安靜的包廂，而且主廚可以為經理準備素食料理。"
  },
  {
    "word": "serve",
    "pos": "v.",
    "cn_def": "供應；上（菜）",
    "en_def": "to give food or drinks to people",
    "sentence": "A: We expect over a hundred guests at the product launch on Saturday, so how many staff will the café need to send to help us? B: They will send six people, and they will {{BLANK}} coffee, tea and sandwiches in the lobby from two o'clock until the presentations finish around five.",
    "cn": "A：週六的產品發表會預計會有超過一百位賓客，咖啡店需要派多少員工來幫忙？ B：他們會派六個人，從兩點到大約五點簡報結束，他們會在大廳【供應】咖啡、茶和三明治。"
  },
  {
    "word": "seat",
    "pos": "n.",
    "cn_def": "座位",
    "en_def": "a place where you can sit, such as a chair",
    "sentence": "A: The café near the station is always crowded at lunchtime, so how can we make sure we have somewhere to sit with the client on Monday? B: I'll call them this afternoon and ask them to save a {{BLANK}} for each of us by the window, because they let regular customers book tables before noon.",
    "cn": "A：車站附近那家咖啡店午餐時間總是很擁擠，我們要怎麼確定週一和客戶有地方坐？ B：我今天下午會打電話給他們，請他們在窗邊為我們每人保留一個【座位】，因為他們讓常客在中午前訂位。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: Why did you leave the café so quickly this morning when you had planned to finish your sales report there before work? B: It was too {{BLANK}} because a tour group had just arrived, and there were people everywhere, so I couldn't find a table or think clearly about my numbers.",
    "cn": "A：你原本計畫上班前在咖啡店完成業務報告，為什麼今天早上那麼快就離開了？ B：因為有個旅行團剛到，裡面太【擁擠】了，到處都是人，所以我找不到桌子，也沒辦法好好思考我的數字。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making very little noise; peaceful",
    "sentence": "A: I need to prepare for an important phone interview with a bank this afternoon, but the office is noisy because of the renovation, so where should I go? B: You could use the small room upstairs, because it's usually {{BLANK}} after lunch and nobody will disturb you while you practice your answers.",
    "cn": "A：我今天下午要準備一場銀行的重要電話面試，但辦公室因為裝修很吵，我該去哪裡？ B：你可以用樓上的小房間，因為午餐後那裡通常很【安靜】，你練習回答時不會有人打擾。"
  },
  {
    "word": "wifi",
    "pos": "n.",
    "cn_def": "無線網路",
    "en_def": "a way of connecting to the internet without wires",
    "sentence": "A: I'm planning to work from the café near my apartment tomorrow because the office air conditioning is being repaired, but will I be able to join the video meeting? B: Yes, they offer free {{BLANK}} for customers, and the connection is fast enough for video calls, though you should ask the staff for the password first.",
    "cn": "A：明天因為辦公室冷氣在維修，我打算在我公寓附近的咖啡店工作，但我能參加視訊會議嗎？ B：可以，他們為顧客提供免費【無線網路】，連線速度足以進行視訊通話，不過你應該先向店員要密碼。"
  },
  {
    "word": "regular",
    "pos": "n.",
    "cn_def": "常客",
    "en_def": "a customer who often goes to the same shop, café or restaurant",
    "sentence": "A: The waiter at the corner café knew exactly what you wanted before you even said anything this morning, so how does he know you so well? B: I've been a {{BLANK}} there for almost three years, because I stop by every morning on my way to the office and always order the same thing.",
    "cn": "A：今天早上轉角咖啡店的服務生在你開口前就知道你要什麼，他怎麼會那麼了解你？ B：我在那裡當【常客】快三年了，因為我每天早上上班途中都會順道過去，而且總是點一樣的東西。"
  },
  {
    "word": "refreshment",
    "pos": "n.",
    "cn_def": "茶點；提神飲食",
    "en_def": "a small amount of food or drink that makes you feel less tired or thirsty",
    "sentence": "A: The workshop for the new sales team will last about four hours on Wednesday, so do you think the attendees will need a break in the middle? B: Yes, and the café downstairs can deliver juice, tea and cookies at three, which will be a welcome {{BLANK}} for everyone after hours of training.",
    "cn": "A：週三新業務團隊的研習大約會持續四個小時，你覺得參加者中間需要休息嗎？ B：需要，樓下的咖啡店可以在三點送果汁、茶和餅乾來，對受訓好幾個小時的大家來說會是很受歡迎的【茶點】。"
  },
  {
    "word": "specialty",
    "pos": "n.",
    "cn_def": "招牌菜；特色商品",
    "en_def": "a food or product that a place is famous for or does very well",
    "sentence": "A: We are taking the visitors from Korea to the café on the top floor of the shopping mall, so is there anything we must try there? B: Their {{BLANK}} is a honey cake made with fruit from local farms, and it has won several awards, so the visitors will probably enjoy it with their coffee.",
    "cn": "A：我們要帶韓國訪客去購物中心頂樓的咖啡店，那裡有什麼我們一定要嚐嚐的嗎？ B：他們的【招牌】是用當地農場水果做的蜂蜜蛋糕，得過好幾個獎，所以訪客們大概會很喜歡配著咖啡吃。"
  },
  {
    "word": "order",
    "pos": "v.",
    "cn_def": "點（餐）；訂購",
    "en_def": "to ask for food, drinks or goods that you want to buy",
    "sentence": "A: The meeting with the investors might go past lunchtime, and nobody wants to leave the room while we're discussing the contract, so what should we do? B: I'll {{BLANK}} sandwiches and salads from the café across the street at half past eleven, and they can deliver everything to the conference room by noon.",
    "cn": "A：和投資人的會議可能會超過午餐時間，而且討論合約時沒人想離開會議室，我們該怎麼辦？ B：我會在十一點半向對街的咖啡店【訂購】三明治和沙拉，他們可以在中午前把所有東西送到會議室。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows you have paid for something",
    "sentence": "A: I bought coffee and cakes for the whole team after the client meeting, so how can I get the money back from the company? B: Just give the {{BLANK}} to Linda in the accounting department before Friday, and she will add the amount to your salary at the end of the month.",
    "cn": "A：客戶會議之後我替整個團隊買了咖啡和蛋糕，我要怎麼向公司拿回這筆錢？ B：只要在週五前把【收據】交給會計部的琳達，她會在月底把金額加到你的薪水裡。"
  },
  {
    "word": "tip",
    "pos": "n.",
    "cn_def": "小費",
    "en_def": "extra money you give to a waiter or driver to thank them",
    "sentence": "A: The service at the restaurant last night was excellent, and the waiter even helped our guests call a taxi, so how much extra should we pay? B: In this country people usually leave a {{BLANK}} of about fifteen percent of the bill, but since he was so helpful, I think twenty percent would be fair.",
    "cn": "A：昨晚餐廳的服務非常好，服務生甚至幫我們的客人叫計程車，我們應該多付多少錢？ B：在這個國家，人們通常會留下帳單約百分之十五的【小費】，不過既然他那麼熱心幫忙，我想百分之二十比較合理。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds such as songs that people play or sing",
    "sentence": "A: Some customers have complained that it's hard to have a conversation in our café during the afternoon, so do you know what the problem is? B: I think the background {{BLANK}} is too loud, especially the rock songs the new staff like to play, so we should choose softer jazz and turn the volume down.",
    "cn": "A：有些顧客抱怨下午在我們咖啡店很難交談，你知道問題出在哪裡嗎？ B：我覺得背景【音樂】太大聲了，尤其是新員工喜歡放的搖滾歌曲，所以我們應該選擇比較柔和的爵士樂，並把音量調低。"
  },
  {
    "word": "interior",
    "pos": "n.",
    "cn_def": "內部；室內裝潢",
    "en_def": "the inside part of a building or room and its design",
    "sentence": "A: The new café on Park Road has become very popular on social media in just a few weeks, so what makes it so special? B: The {{BLANK}} was designed by a famous architect, with green plants, wooden walls and large windows, so customers love taking photos and sharing them online with their friends.",
    "cn": "A：公園路上那家新咖啡店短短幾週就在社群媒體上大受歡迎，它有什麼特別之處？ B：它的【室內裝潢】是由一位知名建築師設計的，有綠色植物、木頭牆面和大窗戶，所以顧客很喜歡拍照並上網分享給朋友。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "在地的；當地的",
    "en_def": "from or in the area near you",
    "sentence": "A: Our company wants to choose a coffee supplier for the new office kitchen, so should we use the big international brand we had before? B: I'd prefer a {{BLANK}} roaster from our own neighborhood, because the beans are fresher, the prices are similar, and we can support small businesses in our community.",
    "cn": "A：公司想為新辦公室的茶水間挑選咖啡供應商，我們應該用之前那個國際大品牌嗎？ B：我比較想選我們附近社區的【在地】烘豆商，因為咖啡豆比較新鮮、價格差不多，而且我們還能支持社區裡的小型企業。"
  }
];

const MCQS = [
  {
    "q": "The old _____ on Bridge Street was turned into a bookstore last year. Many writers used to meet there to drink coffee and talk.",
    "options": [
      "coffeehouse",
      "counter",
      "receipt",
      "dessert"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ carefully drew a heart in the milk foam before handing me my drink. She has made coffee professionally for ten years.",
    "options": [
      "aroma",
      "menu",
      "barista",
      "interior"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ken drinks a small, strong _____ every morning before he checks his email. He says the dark coffee helps him focus quickly.",
    "options": [
      "receipt",
      "espresso",
      "seat",
      "tip"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Because she dislikes bitter coffee, Mia ordered a _____ with extra steamed milk. The barista added a little vanilla syrup as well.",
    "options": [
      "counter",
      "wifi",
      "atmosphere",
      "latte"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A _____ has equal parts of espresso, hot milk and milk foam. Many Italians drink one only in the morning with breakfast.",
    "options": [
      "receipt",
      "regular",
      "cappuccino",
      "seat"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new _____ lists the price of every drink and sandwich. Customers can also scan a code to see photos of each dish.",
    "options": [
      "menu",
      "aroma",
      "tip",
      "regular"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please place your order at the _____ and wait for your number. Our staff will call you when your food is ready.",
    "options": [
      "dessert",
      "specialty",
      "refreshment",
      "counter"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Customers say the café has a warm and friendly _____. The soft lighting and gentle jazz make people want to stay longer.",
    "options": [
      "receipt",
      "atmosphere",
      "takeaway",
      "pastry"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "With its soft sofas, warm blankets and small fireplace, the café feels just like home. It is the most _____ café in town.",
    "options": [
      "crowded",
      "local",
      "quiet",
      "cozy"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The sweet _____ of fresh bread filled the whole street. Many people walked into the bakery just because of the lovely smell.",
    "options": [
      "receipt",
      "aroma",
      "seat",
      "menu"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The café uses a special machine to _____ coffee slowly for twelve hours. This method makes the drink smooth and less bitter.",
    "options": [
      "brew",
      "dine",
      "serve",
      "order"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Each morning the baker makes a buttery _____ filled with almond cream. It is light and flaky, and it sells out by nine.",
    "options": [
      "receipt",
      "counter",
      "pastry",
      "regular"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "After the main course, the waiter asked if we wanted any _____. We shared a slice of cheesecake and a bowl of ice cream.",
    "options": [
      "wifi",
      "dessert",
      "interior",
      "aroma"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "I don't have time to sit down today, so I'll get a _____. I will eat my noodles at my desk while I answer emails.",
    "options": [
      "seat",
      "tip",
      "aroma",
      "takeaway"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Our team will _____ at a French restaurant tonight to celebrate the successful launch. The manager has already booked a private room for eight.",
    "options": [
      "brew",
      "serve",
      "dine",
      "order"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The hotel café will _____ breakfast from seven to ten every morning. Guests can enjoy eggs, fruit and fresh coffee in the garden.",
    "options": [
      "serve",
      "dine",
      "brew",
      "order"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "There was only one empty _____ left near the window. I sat down quickly before someone else could take it.",
    "options": [
      "menu",
      "tip",
      "dessert",
      "seat"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The café was so _____ during lunch that we waited thirty minutes for a table. Every chair was taken by office workers.",
    "options": [
      "cozy",
      "quiet",
      "crowded",
      "local"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Please keep your voice down in the study area. This part of the café is kept _____ for people who are working or reading.",
    "options": [
      "quiet",
      "crowded",
      "local",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The café offers free _____ to customers who buy a drink. The password is printed at the bottom of your receipt.",
    "options": [
      "tip",
      "wifi",
      "pastry",
      "atmosphere"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Mr. Chen has visited this café every day for five years. As a _____, he gets a free cookie with his coffee on Fridays.",
    "options": [
      "barista",
      "menu",
      "regular",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "A cold drink was a welcome _____ after the long walk in the heat. We all felt much better and ready to continue.",
    "options": [
      "refreshment",
      "receipt",
      "counter",
      "interior"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Grilled salmon is the restaurant's _____. Almost every guest orders it, and the chef is famous for his secret lemon sauce.",
    "options": [
      "receipt",
      "seat",
      "wifi",
      "specialty"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "You can _____ your drinks online and pick them up later. This saves time when the line at the café is very long.",
    "options": [
      "dine",
      "order",
      "brew",
      "serve"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Keep your _____ if you want to return the coffee machine. The store will not give refunds without proof of purchase.",
    "options": [
      "receipt",
      "aroma",
      "dessert",
      "tip"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The waiter was very kind and helpful, so we left a large _____ on the table. He thanked us warmly as we left.",
    "options": [
      "atmosphere",
      "specialty",
      "tip",
      "interior"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The café plays soft jazz _____ in the background. Customers say it helps them relax while they read or chat with friends.",
    "options": [
      "aroma",
      "music",
      "refreshment",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The hotel's _____ was completely redesigned last spring. The lobby now has marble floors, modern lights and comfortable sofas.",
    "options": [
      "aroma",
      "tip",
      "espresso",
      "interior"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The café buys all its milk and eggs from _____ farms. This keeps the food fresh and supports small businesses nearby.",
    "options": [
      "local",
      "crowded",
      "cozy",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Bright colors and cheerful music create a lively _____ in the new office lounge. Employees enjoy spending their breaks there.",
    "options": [
      "counter",
      "latte",
      "atmosphere",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "coffeehouse": {
    "pos": "n.",
    "en_def": "a café where people drink coffee and meet",
    "cn_def": "咖啡館"
  },
  "barista": {
    "pos": "n.",
    "en_def": "a person whose job is making coffee drinks in a café",
    "cn_def": "咖啡師"
  },
  "espresso": {
    "pos": "n.",
    "en_def": "a small cup of very strong black coffee",
    "cn_def": "濃縮咖啡"
  },
  "latte": {
    "pos": "n.",
    "en_def": "a coffee drink made with espresso and a lot of hot milk",
    "cn_def": "拿鐵咖啡"
  },
  "cappuccino": {
    "pos": "n.",
    "en_def": "a coffee drink made with espresso, hot milk and milk foam",
    "cn_def": "卡布奇諾"
  },
  "menu": {
    "pos": "n.",
    "en_def": "a list of the food and drinks you can order and their prices",
    "cn_def": "菜單"
  },
  "counter": {
    "pos": "n.",
    "en_def": "a long table in a shop or café where customers order and pay",
    "cn_def": "櫃台"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the feeling or mood that a place gives you",
    "cn_def": "氣氛"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable and pleasant, like a small home",
    "cn_def": "溫馨舒適的"
  },
  "aroma": {
    "pos": "n.",
    "en_def": "a strong, pleasant smell, especially of food or coffee",
    "cn_def": "香氣"
  },
  "brew": {
    "pos": "v.",
    "en_def": "to make a hot drink such as coffee or tea",
    "cn_def": "沖泡；釀造"
  },
  "pastry": {
    "pos": "n.",
    "en_def": "a small sweet baked food made with butter and flour",
    "cn_def": "酥皮點心；糕點"
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food you eat at the end of a meal",
    "cn_def": "甜點"
  },
  "takeaway": {
    "pos": "n.",
    "en_def": "food or a drink that you buy in a shop and take away to eat or drink",
    "cn_def": "外帶餐點"
  },
  "dine": {
    "pos": "v.",
    "en_def": "to eat a meal, especially dinner, often at a restaurant",
    "cn_def": "用餐"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to people",
    "cn_def": "供應；上（菜）"
  },
  "seat": {
    "pos": "n.",
    "en_def": "a place where you can sit, such as a chair",
    "cn_def": "座位"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making very little noise; peaceful",
    "cn_def": "安靜的"
  },
  "wifi": {
    "pos": "n.",
    "en_def": "a way of connecting to the internet without wires",
    "cn_def": "無線網路"
  },
  "regular": {
    "pos": "n.",
    "en_def": "a customer who often goes to the same shop, café or restaurant",
    "cn_def": "常客"
  },
  "refreshment": {
    "pos": "n.",
    "en_def": "a small amount of food or drink that makes you feel less tired or thirsty",
    "cn_def": "茶點；提神飲食"
  },
  "specialty": {
    "pos": "n.",
    "en_def": "a food or product that a place is famous for or does very well",
    "cn_def": "招牌菜；特色商品"
  },
  "order": {
    "pos": "v.",
    "en_def": "to ask for food, drinks or goods that you want to buy",
    "cn_def": "點（餐）；訂購"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you have paid for something",
    "cn_def": "收據"
  },
  "tip": {
    "pos": "n.",
    "en_def": "extra money you give to a waiter or driver to thank them",
    "cn_def": "小費"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds such as songs that people play or sing",
    "cn_def": "音樂"
  },
  "interior": {
    "pos": "n.",
    "en_def": "the inside part of a building or room and its design",
    "cn_def": "內部；室內裝潢"
  },
  "local": {
    "pos": "adj.",
    "en_def": "from or in the area near you",
    "cn_def": "在地的；當地的"
  }
};

const EXTRA_GLOSSES = {};
