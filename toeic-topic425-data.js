// Topic 425 Quiz Data: Vacation 假期
// Source word list: https://www.examword.com/group-topic/vacation — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T425 - Vacation 假期",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日；假期",
    "en_def": "a day or period when people do not work or go to school",
    "sentence": "A: Our office will close for the national {{BLANK}} next Monday, so are you planning to visit your family in the south or stay in the city? B: I'm taking the high-speed train to Tainan on Friday evening because my parents want everyone at home for a big dinner and some time together.",
    "cn": "A：我們辦公室下週一會因國定【假日】休息，你打算去南部探望家人，還是留在城市裡？ B：我週五晚上要搭高鐵去台南，因為我爸媽希望大家都回家一起吃頓大餐、共度一些時光。"
  },
  {
    "word": "trip",
    "pos": "n.",
    "cn_def": "旅行；行程",
    "en_def": "a short journey to a place and back",
    "sentence": "A: How was your business {{BLANK}} to Singapore last week, and did you manage to meet the new supplier before the conference started? B: It went really well, because we signed the contract on the first day, and I even had a free afternoon to walk around the famous gardens by the bay.",
    "cn": "A：你上週去新加坡的出差【行程】如何？會議開始前你有見到新供應商嗎？ B：非常順利，因為我們第一天就簽了合約，我甚至還有一個空閒的下午可以去濱海灣著名的花園走走。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅行；出差",
    "en_def": "to go from one place to another, often far away",
    "sentence": "A: Do you often {{BLANK}} abroad for work, or does your company usually hold meetings with overseas clients online? B: I go to Japan about four times a year, because our biggest customers are in Osaka, and they prefer to discuss new product designs face to face in their office.",
    "cn": "A：你常常因工作出國【旅行】嗎？還是你們公司通常都跟海外客戶線上開會？ B：我一年大約去日本四次，因為我們最大的客戶在大阪，他們比較喜歡在辦公室當面討論新產品設計。"
  },
  {
    "word": "tour",
    "pos": "n.",
    "cn_def": "參觀；遊覽",
    "en_def": "a visit around a place to see different parts of it",
    "sentence": "A: The visitors from our German branch arrive tomorrow morning, so what should we show them after the meeting ends at noon? B: I've arranged a guided {{BLANK}} of the factory first, and then a driver will take them to the night market so they can try some local snacks.",
    "cn": "A：德國分公司的訪客明天早上到，中午會議結束後我們該帶他們看什麼？ B：我先安排了一趟有人導覽的工廠【參觀】，之後司機會載他們去夜市，讓他們嚐嚐當地小吃。"
  },
  {
    "word": "tourist",
    "pos": "n.",
    "cn_def": "觀光客；遊客",
    "en_def": "a person who visits a place for fun",
    "sentence": "A: Why is the hotel lobby so full of people with cameras this afternoon, even though it isn't a weekend? B: A cruise ship arrived this morning, and the front desk says almost every {{BLANK}} on board wants to join the city bus trip before dinner.",
    "cn": "A：今天下午又不是週末，為什麼飯店大廳擠滿了拿著相機的人？ B：今天早上有一艘郵輪抵達，櫃台說船上幾乎每位【觀光客】都想在晚餐前參加市區巴士之旅。"
  },
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place someone is traveling to",
    "sentence": "A: Our team has finished the sales target early this year, so where should we hold the company trip in December? B: Okinawa is a great {{BLANK}} for a short group trip, because the flight is only about ninety minutes, the weather is warm, and the hotels offer good group prices.",
    "cn": "A：我們團隊今年提早達成業績目標了，十二月的員工旅遊應該辦在哪裡？ B：沖繩是短程團體旅遊的絕佳【目的地】，因為航程只要大約九十分鐘、天氣溫暖，而且飯店有不錯的團體價。"
  },
  {
    "word": "resort",
    "pos": "n.",
    "cn_def": "度假村；度假勝地",
    "en_def": "a place where people go for a holiday, with hotels and activities",
    "sentence": "A: The management team wants a quiet place outside the city for the two-day planning meeting next month, so do you have any ideas? B: There's a hot spring {{BLANK}} in the mountains near Taipei with modern meeting rooms, and guests can relax in the pools after work every evening.",
    "cn": "A：管理團隊想在下個月找個城外安靜的地方開兩天的規劃會議，你有什麼點子嗎？ B：台北附近山區有一間溫泉【度假村】，有現代化的會議室，房客每天晚上工作結束後都能在池子裡放鬆。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘；沙灘",
    "en_def": "an area of sand or stones next to the sea",
    "sentence": "A: Is the hotel you booked for our sales conference far from the sea, or can we walk there after the meetings? B: It's right next to a long sandy {{BLANK}}, so we can enjoy the sunset after dinner, and the hotel also lends towels and chairs to its guests for free.",
    "cn": "A：你為業務會議訂的飯店離海很遠嗎？還是開完會我們可以走過去？ B：它就在一片長長的【沙灘】旁邊，所以晚餐後我們可以欣賞夕陽，而且飯店還免費借毛巾和椅子給房客。"
  },
  {
    "word": "sightseeing",
    "pos": "n.",
    "cn_def": "觀光；遊覽",
    "en_def": "visiting famous or interesting places as a tourist",
    "sentence": "A: After the trade show in Paris ends on Thursday, will you fly straight back to Taipei, or will you stay a little longer? B: I'm staying until Sunday to do some {{BLANK}}, because I've never seen the Eiffel Tower or the famous museums, and my manager said I deserve a short break.",
    "cn": "A：週四巴黎的商展結束後，你會直接飛回台北，還是多待一陣子？ B：我會待到週日去【觀光】，因為我從來沒看過艾菲爾鐵塔或那些有名的博物館，而且我的經理說我應該好好休息一下。"
  },
  {
    "word": "journey",
    "pos": "n.",
    "cn_def": "旅程；路程",
    "en_def": "the act of traveling from one place to another, often a long way",
    "sentence": "A: You look really tired this morning, so did something go wrong on your way back from the branch office in Kaohsiung? B: The {{BLANK}} took almost seven hours, because heavy rain stopped the trains for a while, and I had to wait at the station with hundreds of other passengers.",
    "cn": "A：你今天早上看起來很累，從高雄分公司回來的路上出了什麼問題嗎？ B：這趟【旅程】花了將近七個小時，因為大雨讓火車停駛了一段時間，我只好和幾百名乘客一起在車站等。"
  },
  {
    "word": "luggage",
    "pos": "n.",
    "cn_def": "行李",
    "en_def": "the bags and cases you take when you travel",
    "sentence": "A: Our flight to Bangkok leaves at seven tomorrow morning, so what time should we meet at the airport? B: Let's meet at five, because we need time to check in our {{BLANK}} and pass through security, and the lines are usually very long during the holiday season.",
    "cn": "A：我們明天早上七點飛往曼谷，我們應該幾點在機場碰面？ B：五點碰面吧，因為我們需要時間託運【行李】和通過安檢，而且假期期間排隊的人通常很多。"
  },
  {
    "word": "suitcase",
    "pos": "n.",
    "cn_def": "行李箱；手提箱",
    "en_def": "a large case with a handle for carrying clothes when you travel",
    "sentence": "A: Do you think I can take this bag onto the plane, or will I have to pay extra for it at the counter? B: Your {{BLANK}} looks too large for the cabin, so you should check it in, but you can keep your laptop and important documents in your backpack.",
    "cn": "A：你覺得我可以帶這個包上飛機嗎？還是我得在櫃台額外付錢？ B：你的【行李箱】看起來太大，不能帶進客艙，所以你應該託運，不過你可以把筆電和重要文件放在背包裡。"
  },
  {
    "word": "passport",
    "pos": "n.",
    "cn_def": "護照",
    "en_def": "an official document you need to travel to other countries",
    "sentence": "A: I'm going to the conference in Seoul next month, but is there anything I should check before I buy my plane ticket? B: Make sure your {{BLANK}} is valid for at least six more months, because the airline may refuse to let you board if it expires soon.",
    "cn": "A：我下個月要去首爾參加會議，買機票前有什麼需要確認的嗎？ B：確認你的【護照】至少還有六個月的效期，因為如果快要過期，航空公司可能會拒絕讓你登機。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "票；車票；入場券",
    "en_def": "a piece of paper or electronic record that lets you travel or enter a place",
    "sentence": "A: The concert our client invited us to starts at eight tonight, but how will we get in if we leave the office late? B: Don't worry, because I've already downloaded the electronic {{BLANK}} to my phone, so we just need to show the code at the entrance.",
    "cn": "A：客戶邀請我們去的演唱會今晚八點開始，但如果我們很晚才離開辦公室，要怎麼進場？ B：別擔心，我已經把電子【票】下載到手機裡了，我們只要在入口出示條碼就行。"
  },
  {
    "word": "flight",
    "pos": "n.",
    "cn_def": "班機；航班",
    "en_def": "a trip on a plane",
    "sentence": "A: Why did the meeting with the Hong Kong team start two hours late this afternoon? B: Their {{BLANK}} was delayed because of a storm over the sea, so they landed after lunch and came straight from the airport without even stopping at their hotel.",
    "cn": "A：今天下午和香港團隊的會議為什麼晚了兩個小時才開始？ B：他們的【班機】因為海上的暴風雨而延誤，所以午餐後才降落，他們一下飛機就直接從機場過來，連飯店都沒先去。"
  },
  {
    "word": "airport",
    "pos": "n.",
    "cn_def": "機場",
    "en_def": "a place where planes take off and land",
    "sentence": "A: Is there an easy way to get from the city center to the {{BLANK}} early in the morning, since my flight leaves at six? B: The express train starts running at about five, but you could also book a taxi the night before so you don't have to carry your bags far.",
    "cn": "A：因為我的班機六點起飛，清晨從市中心到【機場】有方便的方法嗎？ B：快捷列車大約五點開始營運，不過你也可以前一晚先預約計程車，這樣就不用提著行李走很遠。"
  },
  {
    "word": "hotel",
    "pos": "n.",
    "cn_def": "飯店；旅館",
    "en_def": "a building where people pay to sleep and eat when they travel",
    "sentence": "A: Where will our guests from Canada stay during the training workshop next week, and is it close to our office? B: I booked them rooms at a business {{BLANK}} just two blocks away, so they can walk here each morning, and breakfast is included in the price.",
    "cn": "A：下週培訓工作坊期間，加拿大來的客人會住在哪裡？離我們辦公室近嗎？ B：我幫他們訂了只隔兩個街區的商務【飯店】房間，所以他們每天早上可以走路過來，而且房價含早餐。"
  },
  {
    "word": "hostel",
    "pos": "n.",
    "cn_def": "青年旅舍；招待所",
    "en_def": "a cheap place to stay, often with shared rooms, for young travelers",
    "sentence": "A: My nephew wants to travel around Europe after graduation, but he doesn't have much money, so where should he stay? B: He could stay at a youth {{BLANK}}, because the beds are cheap, there's usually a shared kitchen, and he can meet other young travelers from around the world.",
    "cn": "A：我姪子畢業後想環遊歐洲，但他沒什麼錢，他應該住哪裡？ B：他可以住青年【旅舍】，因為床位便宜、通常有共用廚房，而且他還能認識來自世界各地的年輕旅客。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預約；訂位；預訂",
    "en_def": "an arrangement to keep a table, room, or seat for you",
    "sentence": "A: Ten clients are joining us for dinner after the product launch on Friday, so should we just go to the restaurant directly? B: No, I'll make a {{BLANK}} today, because that seafood restaurant is always busy on weekends, and we need a private room for such a large group.",
    "cn": "A：週五產品發表會後有十位客戶要和我們吃晚餐，我們直接去餐廳就好嗎？ B：不行，我今天就會【訂位】，因為那家海鮮餐廳週末總是很忙，而且這麼大的團體我們需要一間包廂。"
  },
  {
    "word": "itinerary",
    "pos": "n.",
    "cn_def": "行程表",
    "en_def": "a plan that shows the places and times of a trip",
    "sentence": "A: The Japanese buyers will be here for three days, but I'm not sure which factories and offices they want to visit. B: I'll email you the full {{BLANK}} this afternoon, which lists every meeting, meal, and train time, so you can plan your own schedule around it.",
    "cn": "A：日本買家會在這裡待三天，但我不確定他們想參觀哪些工廠和辦公室。 B：我今天下午會把完整的【行程表】寄給你，上面列出每場會議、每餐和火車時間，這樣你就能依此安排自己的時間。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "導遊；嚮導",
    "en_def": "a person whose job is to show a place to visitors",
    "sentence": "A: The old town has so many small streets and temples, so how will our visitors understand the history behind them? B: I've hired a professional {{BLANK}} who speaks excellent English, and she will lead the group for three hours and explain the story of each building.",
    "cn": "A：老城區有那麼多小巷和廟宇，我們的訪客要怎麼了解背後的歷史？ B：我請了一位英文很好的專業【導遊】，她會帶團三個小時，並解說每棟建築的故事。"
  },
  {
    "word": "map",
    "pos": "n.",
    "cn_def": "地圖",
    "en_def": "a drawing that shows roads, places, and buildings in an area",
    "sentence": "A: I've never been to the new exhibition center, and my phone battery is almost empty, so how will I find the right hall? B: There's a free paper {{BLANK}} at the information desk near the main entrance, and it shows every hall, restaurant, and restroom in the building.",
    "cn": "A：我從沒去過新的展覽中心，而且手機快沒電了，我要怎麼找到正確的展廳？ B：主入口附近的服務台有免費的紙本【地圖】，上面標示了館內每個展廳、餐廳和洗手間。"
  },
  {
    "word": "adventure",
    "pos": "n.",
    "cn_def": "冒險；奇遇",
    "en_def": "an exciting and unusual experience",
    "sentence": "A: Why did you choose a trip to the rainforest for your holiday instead of a relaxing week at the beach like last year? B: I wanted a real {{BLANK}}, so I signed up for a five-day program with river rafting, jungle walks, and nights in a camp far from any city.",
    "cn": "A：你這次假期為什麼選擇去雨林，而不是像去年一樣在海邊悠閒地待一週？ B：我想要一場真正的【冒險】，所以報名了一個五天的行程，有泛舟、叢林健行，還要在遠離城市的營地過夜。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: You arrive in Kyoto a day before the meeting with our partners starts, so what are you going to do with your free time? B: I want to {{BLANK}} the old neighborhoods on foot, because my coworker said the quiet streets and small tea shops are much nicer than the busy shopping areas.",
    "cn": "A：你比和合作夥伴的會議早一天抵達京都，你打算怎麼利用空閒時間？ B：我想步行去【探索】那些老街區，因為我同事說那些安靜的街道和小茶館比熱鬧的購物區好多了。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆；休息",
    "en_def": "to rest and feel calm",
    "sentence": "A: You've been working late every night to finish the annual report, so what are your plans for the long weekend? B: I just want to {{BLANK}} at home, read a novel, and sleep late, because I feel exhausted, and next month will be even busier with the audit.",
    "cn": "A：你每天晚上都加班趕年度報告，連假有什麼計畫？ B：我只想在家【放鬆】、看本小說、睡晚一點，因為我覺得筋疲力盡，而且下個月要查帳會更忙。"
  },
  {
    "word": "sunbathe",
    "pos": "v.",
    "cn_def": "做日光浴",
    "en_def": "to sit or lie in the sun to get warm or brown",
    "sentence": "A: The weather in Bali was perfect during your vacation, so did you spend most of your time visiting temples and markets? B: Not really, because I mostly wanted to {{BLANK}} by the hotel pool, read a book, and forget about emails, although I did wear plenty of sunscreen.",
    "cn": "A：你在峇里島度假時天氣很好，你大部分時間都在參觀廟宇和市場嗎？ B：其實沒有，我主要想在飯店泳池邊【做日光浴】、看書、忘掉電子郵件，不過我確實擦了很多防曬乳。"
  },
  {
    "word": "swim",
    "pos": "v.",
    "cn_def": "游泳",
    "en_def": "to move through water using your arms and legs",
    "sentence": "A: The hotel for our conference in Cebu has a large pool, so are you going to use it before the morning sessions? B: Yes, I plan to {{BLANK}} for half an hour every morning at six, because it wakes me up, and the pool is usually empty that early.",
    "cn": "A：我們宿霧會議的飯店有個大泳池，你在早上的議程前會去用嗎？ B：會，我打算每天早上六點【游泳】半小時，因為這能讓我清醒，而且那麼早泳池通常沒什麼人。"
  },
  {
    "word": "hiking",
    "pos": "n.",
    "cn_def": "健行；登山",
    "en_def": "the activity of taking long walks in the countryside or mountains",
    "sentence": "A: Some people in our department want to do something healthy together on Saturday, so do you have any suggestions? B: How about going {{BLANK}} on Yangmingshan, because the trails are easy for beginners, the views are beautiful, and we can enjoy a hot spring meal afterwards.",
    "cn": "A：我們部門有些人週六想一起做點健康的活動，你有什麼建議嗎？ B：去陽明山【健行】怎麼樣？那裡的步道對初學者來說很簡單，風景很美，之後還能享用溫泉餐。"
  },
  {
    "word": "camping",
    "pos": "n.",
    "cn_def": "露營",
    "en_def": "the activity of staying in a tent outdoors for fun",
    "sentence": "A: Our team-building event is usually held in a hotel, but some colleagues want to try something different this year. B: We could go {{BLANK}} by the lake in Taitung, because the campsite rents tents and cooking tools, and everyone can work together to make dinner over a fire.",
    "cn": "A：我們的團隊建立活動通常在飯店舉辦，但今年有些同事想嘗試不一樣的東西。 B：我們可以去台東湖邊【露營】，因為營地有出租帳篷和炊具，大家可以一起合作生火煮晚餐。"
  },
  {
    "word": "souvenir",
    "pos": "n.",
    "cn_def": "紀念品",
    "en_def": "something you buy to remember a place you visited",
    "sentence": "A: I'm flying back from Hokkaido tomorrow, and I'd like to bring something back for everyone in our office. B: A box of the famous white chocolate cookies would be a perfect {{BLANK}}, because they're easy to share, and you can buy them at the airport before your flight.",
    "cn": "A：我明天要從北海道飛回去，想帶點東西回來給辦公室的每個人。 B：一盒有名的白色巧克力餅乾會是完美的【紀念品】，因為很容易分享，而且你可以在登機前於機場購買。"
  },
  {
    "word": "photograph",
    "pos": "n.",
    "cn_def": "照片",
    "en_def": "a picture taken with a camera",
    "sentence": "A: The marketing team needs a picture of our new resort for the travel website, so who should take it? B: We should hire a professional, because a high-quality {{BLANK}} of the pool at sunset will attract many more guests than the simple pictures we took with our phones.",
    "cn": "A：行銷團隊需要一張我們新度假村的照片放在旅遊網站上，誰來拍比較好？ B：我們應該請專業攝影師，因為一張高品質的夕陽泳池【照片】會比我們用手機隨便拍的相片吸引更多客人。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural beauty of an area, such as mountains and the sea",
    "sentence": "A: Why do so many people take the slow train along the east coast instead of the faster bus when they travel? B: The {{BLANK}} is amazing, because the railway runs between green mountains and the blue ocean, and passengers can see small fishing villages from their windows.",
    "cn": "A：為什麼那麼多人旅行時會選擇搭東海岸的慢車，而不是更快的巴士？ B：因為【風景】很美，鐵路穿梭在綠色山脈與藍色海洋之間，乘客還能從窗戶看到小漁村。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的；本地的",
    "en_def": "from or in the area where you are",
    "sentence": "A: When our visitors from London arrive, should we take them to a fancy international restaurant for dinner? B: I think they'd prefer a {{BLANK}} restaurant, because they told me they want to try traditional Taiwanese dishes like beef noodles and oyster omelets instead of food they can get at home.",
    "cn": "A：倫敦的訪客抵達時，我們該帶他們去高級的國際餐廳吃晚餐嗎？ B：我覺得他們會比較喜歡【當地的】餐廳，因為他們跟我說想嚐嚐牛肉麵和蚵仔煎這類傳統台灣菜，而不是在家鄉就吃得到的食物。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "A: Should we visit the famous temple in the old town on Saturday afternoon after the client meeting? B: It will be very {{BLANK}} on the weekend, because tour buses arrive all day, so let's go early on Monday morning when it is quiet and easier to take pictures.",
    "cn": "A：週六下午和客戶開完會後，我們要去老城區那座有名的廟嗎？ B：週末會非常【擁擠】，因為遊覽車整天都會來，所以我們週一一早去吧，那時很安靜也比較好拍照。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "quiet and calm",
    "sentence": "A: You said you needed a break from the noise of the city, so where did you spend your three days off last week? B: I stayed at a small farm in Hualien, and it was so {{BLANK}} there, with only the sound of birds and wind, that I slept better than I had in months.",
    "cn": "A：你說你需要遠離城市的噪音休息一下，上週三天休假你去了哪裡？ B：我住在花蓮的一座小農場，那裡非常【寧靜】，只有鳥鳴和風聲，我睡得比這幾個月來都好。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的；值得紀念的",
    "en_def": "special or enjoyable and easy to remember",
    "sentence": "A: How was the company trip to Vietnam, and did the new employees enjoy getting to know everyone outside the office? B: It was a really {{BLANK}} experience, because we took a boat through Ha Long Bay, cooked dinner together, and everyone is still sharing the funny videos in our group chat.",
    "cn": "A：公司去越南的員工旅遊如何？新員工喜歡在辦公室外和大家認識嗎？ B：那真是一次【難忘的】經驗，因為我們搭船遊覽下龍灣、一起煮晚餐，大家到現在還在群組裡分享好笑的影片。"
  }
];

const MCQS = [
  {
    "q": "Our sales director will be away on a business _____ to Tokyo next week. Please send any urgent contracts to her assistant instead.",
    "options": [
      "trip",
      "scenery",
      "map",
      "souvenir"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Employees who _____ overseas for work must submit their receipts within two weeks. The finance department will then repay the costs.",
    "options": [
      "relax",
      "swim",
      "sunbathe",
      "travel"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "New staff members will take a short _____ of the factory on their first morning. A supervisor will explain each production line.",
    "options": [
      "tour",
      "passport",
      "souvenir",
      "beach"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The city has opened a new information center near the train station. Any _____ can get free maps and bus schedules there.",
    "options": [
      "itinerary",
      "scenery",
      "luggage",
      "tourist"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Thailand remains the most popular _____ for our customers in winter. Bookings for Bangkok and Phuket have doubled since last year.",
    "options": [
      "reservation",
      "destination",
      "ticket",
      "suitcase"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The seaside _____ offers guests a spa, three swimming pools, and a golf course. It also has meeting rooms for company retreats.",
    "options": [
      "journey",
      "map",
      "passport",
      "resort"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The hotel provides free towels and umbrellas for guests. Visitors can walk to the sandy _____ in less than five minutes.",
    "options": [
      "itinerary",
      "beach",
      "luggage",
      "ticket"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The conference ends at noon on Friday, so attendees will have the afternoon free for _____. Buses will leave the hotel at one o'clock.",
    "options": [
      "reservation",
      "luggage",
      "sightseeing",
      "passport"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The train _____ from Taipei to Hualien takes about two hours. Passengers can enjoy beautiful views of the coast along the way.",
    "options": [
      "guide",
      "resort",
      "souvenir",
      "journey"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Each passenger may bring one piece of carry-on _____ onto the plane. Larger bags must be checked in at the counter.",
    "options": [
      "sightseeing",
      "scenery",
      "luggage",
      "adventure"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Travelers must show a valid _____ at the immigration counter. Those without one will not be allowed to leave the country.",
    "options": [
      "souvenir",
      "beach",
      "resort",
      "passport"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Customers who buy a round-trip _____ online will receive a ten percent discount. The offer is valid until the end of March.",
    "options": [
      "hostel",
      "guide",
      "ticket",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Due to heavy snow in Seoul, our _____ has been delayed by three hours. Passengers may wait in the business lounge near Gate 12.",
    "options": [
      "map",
      "flight",
      "souvenir",
      "scenery"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "A free shuttle bus runs between the hotel and the _____ every thirty minutes. Guests should book a seat at the front desk.",
    "options": [
      "itinerary",
      "adventure",
      "airport",
      "souvenir"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Students on a tight budget often stay at a youth _____ in the city center. The rooms are simple, but the beds are clean.",
    "options": [
      "passport",
      "hostel",
      "ticket",
      "scenery"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Please call the restaurant to make a _____ for twelve people on Friday evening. It is usually fully booked on weekends.",
    "options": [
      "souvenir",
      "adventure",
      "reservation",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The travel agent has emailed us a detailed _____ for the sales trip. It lists every flight, hotel, and meeting time.",
    "options": [
      "itinerary",
      "scenery",
      "beach",
      "souvenir"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Our tour _____ speaks English, Japanese, and Korean fluently. She will explain the history of each temple during the visit.",
    "options": [
      "ticket",
      "luggage",
      "beach",
      "guide"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The visitors got lost in the old town because their phones had no signal. Luckily, the hotel had given them a paper _____.",
    "options": [
      "map",
      "resort",
      "flight",
      "beach"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The travel company sells exciting _____ trips, such as river rafting and jungle hiking. These tours are popular with young professionals.",
    "options": [
      "passport",
      "adventure",
      "airport",
      "luggage"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Guests who want to _____ the old town on foot can borrow a free walking map. The front desk also offers bicycles for rent.",
    "options": [
      "sunbathe",
      "swim",
      "explore",
      "relax"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "After the busy trade show, many staff members just wanted to _____ and do nothing at all. Some of them simply slept all weekend.",
    "options": [
      "travel",
      "relax",
      "swim",
      "explore"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Many visitors come to the island to lie on the sand and _____ all day. The resort reminds them to wear sunscreen and drink water.",
    "options": [
      "travel",
      "swim",
      "explore",
      "sunbathe"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The hotel pool is open from six in the morning until ten at night. Guests who want to _____ must wear a swimming cap.",
    "options": [
      "swim",
      "travel",
      "relax",
      "explore"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please wear strong shoes for the _____ trip on Saturday. The mountain trail is steep and can be slippery after rain.",
    "options": [
      "passport",
      "hiking",
      "luggage",
      "souvenir"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The gift shop in the museum sells postcards, mugs, and other _____ items. Many tourists buy something there before they leave.",
    "options": [
      "souvenir",
      "luggage",
      "hiking",
      "flight"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The mountain road is narrow, but the _____ along the way is breathtaking. Drivers often stop to take pictures of the valley.",
    "options": [
      "luggage",
      "passport",
      "scenery",
      "reservation"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The hotel restaurant buys fish from _____ fishermen in the nearby village. This supports the community and keeps the dishes fresh.",
    "options": [
      "local",
      "memorable",
      "peaceful",
      "crowded"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The train station is always _____ during the Lunar New Year holiday. Travelers should arrive early to avoid long lines.",
    "options": [
      "local",
      "peaceful",
      "memorable",
      "crowded"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The award dinner on the cruise ship was a truly _____ evening for all employees. Many of them say they will never forget it.",
    "options": [
      "memorable",
      "crowded",
      "foreign",
      "local"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "holiday": {
    "pos": "n.",
    "en_def": "a day or period when people do not work or go to school",
    "cn_def": "假日；假期"
  },
  "trip": {
    "pos": "n.",
    "en_def": "a short journey to a place and back",
    "cn_def": "旅行；行程"
  },
  "travel": {
    "pos": "v.",
    "en_def": "to go from one place to another, often far away",
    "cn_def": "旅行；出差"
  },
  "tour": {
    "pos": "n.",
    "en_def": "a visit around a place to see different parts of it",
    "cn_def": "參觀；遊覽"
  },
  "tourist": {
    "pos": "n.",
    "en_def": "a person who visits a place for fun",
    "cn_def": "觀光客；遊客"
  },
  "destination": {
    "pos": "n.",
    "en_def": "the place someone is traveling to",
    "cn_def": "目的地"
  },
  "resort": {
    "pos": "n.",
    "en_def": "a place where people go for a holiday, with hotels and activities",
    "cn_def": "度假村；度假勝地"
  },
  "beach": {
    "pos": "n.",
    "en_def": "an area of sand or stones next to the sea",
    "cn_def": "海灘；沙灘"
  },
  "sightseeing": {
    "pos": "n.",
    "en_def": "visiting famous or interesting places as a tourist",
    "cn_def": "觀光；遊覽"
  },
  "journey": {
    "pos": "n.",
    "en_def": "the act of traveling from one place to another, often a long way",
    "cn_def": "旅程；路程"
  },
  "luggage": {
    "pos": "n.",
    "en_def": "the bags and cases you take when you travel",
    "cn_def": "行李"
  },
  "suitcase": {
    "pos": "n.",
    "en_def": "a large case with a handle for carrying clothes when you travel",
    "cn_def": "行李箱；手提箱"
  },
  "passport": {
    "pos": "n.",
    "en_def": "an official document you need to travel to other countries",
    "cn_def": "護照"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper or electronic record that lets you travel or enter a place",
    "cn_def": "票；車票；入場券"
  },
  "flight": {
    "pos": "n.",
    "en_def": "a trip on a plane",
    "cn_def": "班機；航班"
  },
  "airport": {
    "pos": "n.",
    "en_def": "a place where planes take off and land",
    "cn_def": "機場"
  },
  "hotel": {
    "pos": "n.",
    "en_def": "a building where people pay to sleep and eat when they travel",
    "cn_def": "飯店；旅館"
  },
  "hostel": {
    "pos": "n.",
    "en_def": "a cheap place to stay, often with shared rooms, for young travelers",
    "cn_def": "青年旅舍；招待所"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a table, room, or seat for you",
    "cn_def": "預約；訂位；預訂"
  },
  "itinerary": {
    "pos": "n.",
    "en_def": "a plan that shows the places and times of a trip",
    "cn_def": "行程表"
  },
  "guide": {
    "pos": "n.",
    "en_def": "a person whose job is to show a place to visitors",
    "cn_def": "導遊；嚮導"
  },
  "map": {
    "pos": "n.",
    "en_def": "a drawing that shows roads, places, and buildings in an area",
    "cn_def": "地圖"
  },
  "adventure": {
    "pos": "n.",
    "en_def": "an exciting and unusual experience",
    "cn_def": "冒險；奇遇"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and feel calm",
    "cn_def": "放鬆；休息"
  },
  "sunbathe": {
    "pos": "v.",
    "en_def": "to sit or lie in the sun to get warm or brown",
    "cn_def": "做日光浴"
  },
  "swim": {
    "pos": "v.",
    "en_def": "to move through water using your arms and legs",
    "cn_def": "游泳"
  },
  "hiking": {
    "pos": "n.",
    "en_def": "the activity of taking long walks in the countryside or mountains",
    "cn_def": "健行；登山"
  },
  "camping": {
    "pos": "n.",
    "en_def": "the activity of staying in a tent outdoors for fun",
    "cn_def": "露營"
  },
  "souvenir": {
    "pos": "n.",
    "en_def": "something you buy to remember a place you visited",
    "cn_def": "紀念品"
  },
  "photograph": {
    "pos": "n.",
    "en_def": "a picture taken with a camera",
    "cn_def": "照片"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural beauty of an area, such as mountains and the sea",
    "cn_def": "風景；景色"
  },
  "local": {
    "pos": "adj.",
    "en_def": "from or in the area where you are",
    "cn_def": "當地的；本地的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special or enjoyable and easy to remember",
    "cn_def": "難忘的；值得紀念的"
  }
};

const EXTRA_GLOSSES = {};
