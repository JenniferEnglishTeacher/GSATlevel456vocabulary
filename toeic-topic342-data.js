// Topic 342 Quiz Data: Scenery 風景
// Source word list: https://www.examword.com/group-topic/scenery — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T342 - Scenery 風景",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "a place where someone is going on a trip",
    "sentence": "A: Our department has some money left in the budget this year, so where do you think we should go for the company trip in December? B: I think Kenting is the best {{BLANK}} because it is warm in winter, the hotels are affordable, and everyone can relax on the beach together.",
    "cn": "A：我們部門今年的預算還有剩，你覺得十二月的員工旅遊應該去哪裡？ B：我覺得墾丁是最好的【目的地】，因為那裡冬天很溫暖，飯店價格合理，而且大家可以一起在海灘上放鬆。"
  },
  {
    "word": "enthusiast",
    "pos": "n.",
    "cn_def": "熱衷者；愛好者",
    "en_def": "a person who likes an activity very much",
    "sentence": "A: Who should we ask to plan the weekend walking tour for our foreign clients, since none of us know the mountain trails very well? B: Ask Kevin from accounting, because he is a real outdoor {{BLANK}} who climbs a different mountain almost every weekend and knows all the safe routes.",
    "cn": "A：既然我們都不太熟悉山上的步道，週末要帶外國客戶走步道，應該請誰來規劃？ B：去問會計部的凱文吧，他是個真正的戶外活動【愛好者】，幾乎每個週末都去爬不同的山，而且知道所有安全的路線。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: The conference in Tainan finishes at three o'clock on Friday, so what are you planning to do before your train leaves on Saturday evening? B: I want to rent a bicycle and {{BLANK}} the old streets near the temple, because a coworker told me there are many small shops and delicious snacks there.",
    "cn": "A：台南的會議星期五下午三點結束，在你星期六晚上的火車出發前，你打算做什麼？ B：我想租一輛腳踏車去【探索】廟宇附近的老街，因為有同事告訴我那裡有很多小店和好吃的小吃。"
  },
  {
    "word": "soak up",
    "pos": "v.phr.",
    "cn_def": "盡情享受；沉浸於",
    "en_def": "to enjoy something fully by spending time in it",
    "sentence": "A: You look so relaxed today, so did you do anything special during your vacation after the busy product launch last month? B: Yes, I spent five days on a small island where I just sat by the water every afternoon to {{BLANK}} the sunshine and forget about all my emails.",
    "cn": "A：你今天看起來好放鬆，上個月忙碌的產品發表會之後，你的假期有做什麼特別的事嗎？ B：有啊，我在一個小島上待了五天，每天下午就坐在水邊【盡情享受】陽光，把所有的電子郵件都忘掉。"
  },
  {
    "word": "gorge",
    "pos": "n.",
    "cn_def": "峽谷",
    "en_def": "a deep, narrow valley with steep sides, often with a river",
    "sentence": "A: Our visitors from Japan asked what the most famous natural sight in Hualien is, so what should I recommend to them? B: You should take them to Taroko, where a river runs through a deep marble {{BLANK}} with high cliffs on both sides, but remind them to wear helmets because of falling rocks.",
    "cn": "A：我們的日本訪客問花蓮最有名的自然景觀是什麼，我應該推薦他們什麼？ B：你應該帶他們去太魯閣，那裡有一條河流穿過深深的大理石【峽谷】，兩側都是高聳的懸崖，但要提醒他們戴安全帽，因為會有落石。"
  },
  {
    "word": "scenic",
    "pos": "adj.",
    "cn_def": "風景優美的",
    "en_def": "having beautiful natural views",
    "sentence": "A: The highway to the conference center will be crowded on Friday morning, so is there another way we can drive there with the clients? B: We could take the {{BLANK}} coastal road instead, because it is a little slower, but the clients can enjoy the ocean views and we can stop for coffee along the way.",
    "cn": "A：星期五早上往會議中心的高速公路會很塞，我們有其他路線可以載客戶過去嗎？ B：我們可以改走【風景優美的】濱海公路，雖然會慢一點，但客戶可以欣賞海景，我們也可以沿途停下來喝杯咖啡。"
  },
  {
    "word": "comfy",
    "pos": "adj.",
    "cn_def": "舒服的；舒適的",
    "en_def": "comfortable (informal)",
    "sentence": "A: We will be traveling on the overnight bus to the mountain lodge after the sales meeting, so what should I bring for the long ride? B: Bring a warm jacket, a small pillow, and some {{BLANK}} clothes like a sweatshirt and soft pants, because the seats are narrow and the air conditioner is usually very cold.",
    "cn": "A：業務會議結束後我們要搭夜車去山上的旅館，這趟長途車程我應該帶什麼？ B：帶一件保暖外套、一個小枕頭和一些【舒服的】衣服，像是運動衫和柔軟的褲子，因為座位很窄，而且冷氣通常很冷。"
  },
  {
    "word": "jaw-dropping",
    "pos": "adj.",
    "cn_def": "令人瞠目結舌的；驚人的",
    "en_def": "so surprising or beautiful that it makes you very amazed",
    "sentence": "A: How was the view from the restaurant on the top floor of the new tower where you took the clients last night? B: It was {{BLANK}}, because we could see the whole city lit up below us, and even the managers who travel a lot stopped talking and just stared out of the windows.",
    "cn": "A：昨晚你帶客戶去的那棟新大樓頂樓餐廳，景色怎麼樣？ B：景色【令人瞠目結舌】，因為我們可以看到底下整座城市燈火通明，就連經常出差的經理們都停止交談，只是盯著窗外看。"
  },
  {
    "word": "trek",
    "pos": "n.",
    "cn_def": "長途跋涉；健行",
    "en_def": "a long, hard walk, usually in mountains or the countryside",
    "sentence": "A: I heard the leadership training this year includes an outdoor activity, so do you know what we will actually be doing in the mountains? B: We will go on a three-day {{BLANK}} through the forest with a local guide, carrying our own tents and food, so the company wants us to practice teamwork and solve problems together.",
    "cn": "A：我聽說今年的領導力訓練包含戶外活動，你知道我們在山上實際要做什麼嗎？ B：我們要跟著當地嚮導在森林裡進行為期三天的【長途健行】，自己背帳篷和食物，公司希望我們練習團隊合作並一起解決問題。"
  },
  {
    "word": "stunning",
    "pos": "adj.",
    "cn_def": "極美的；令人驚豔的",
    "en_def": "extremely beautiful or attractive",
    "sentence": "A: Why did the wedding planner recommend the hotel by the harbor even though it costs much more than the other places on our list? B: She said the garden has {{BLANK}} sunset views over the water, so the photos will look amazing, and the guests can enjoy the evening sky during the dinner.",
    "cn": "A：為什麼婚禮顧問推薦海港邊的那家飯店，雖然它比我們名單上其他地點貴很多？ B：她說花園可以看到水面上【極美的】夕陽景色，所以照片會很漂亮，而且賓客在晚宴時可以欣賞傍晚的天空。"
  },
  {
    "word": "fantasize",
    "pos": "v.",
    "cn_def": "幻想；夢想",
    "en_def": "to imagine pleasant things that you want to happen",
    "sentence": "A: You have been staring at that travel poster on the wall for ten minutes, so are you finished with the monthly report yet? B: Not yet, because whenever I feel tired of all these numbers, I start to {{BLANK}} about lying on a quiet beach in Bali with a cold drink and no phone.",
    "cn": "A：你已經盯著牆上那張旅遊海報看了十分鐘，月報做完了嗎？ B：還沒，因為每次我對這些數字感到厭煩時，就會開始【幻想】自己躺在峇里島安靜的海灘上，喝著冰涼的飲料，而且沒有手機。"
  },
  {
    "word": "fancy",
    "pos": "v.",
    "cn_def": "想要；喜歡",
    "en_def": "to want to have or do something (British informal)",
    "sentence": "A: The meeting with the British buyers ends early on Thursday, so what kind of activity should we plan for them in the afternoon? B: I will ask them first, but I think they might {{BLANK}} a short boat ride on the river, because they told me they love being near the water.",
    "cn": "A：星期四和英國買家的會議很早結束，下午我們應該幫他們安排什麼樣的活動？ B：我會先問問他們，但我想他們可能會【想要】在河上搭一小段船，因為他們告訴過我他們很喜歡待在水邊。"
  },
  {
    "word": "extraordinary",
    "pos": "adj.",
    "cn_def": "非凡的；驚人的",
    "en_def": "very unusual or special",
    "sentence": "A: Did you hear that the travel agency's new video about the lakes in Nantou has already been watched by three million people? B: Yes, it was an {{BLANK}} success for such a small company, and now they are getting so many bookings that they have to hire five more tour guides.",
    "cn": "A：你有聽說旅行社那支介紹南投湖泊的新影片已經有三百萬人看過了嗎？ B：有啊，對這麼小的公司來說，這是一次【非凡的】成功，現在他們接到非常多訂單，必須再多雇用五位導遊。"
  },
  {
    "word": "hiking",
    "pos": "n.",
    "cn_def": "健行；登山",
    "en_def": "the activity of going for long walks in the countryside or mountains",
    "sentence": "A: The human resources team is planning a weekend activity for new staff, so do you think people would enjoy a day at the shopping mall? B: I think {{BLANK}} on Yangmingshan would be better, because the trails are easy for beginners, the air is fresh, and people can talk and get to know each other.",
    "cn": "A：人資團隊正在為新進員工規劃週末活動，你覺得大家會喜歡去購物中心逛一天嗎？ B：我覺得去陽明山【健行】會比較好，因為步道對初學者來說很簡單，空氣也很清新，大家還可以聊天、彼此認識。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多樣性",
    "en_def": "a wide range of different types of things or people",
    "sentence": "A: Why are so many scientists from foreign universities visiting the national park this spring, and do they need our hotel to arrange special tours? B: They come because the park is famous for the {{BLANK}} of its plants and birds, so please arrange early morning tours when the animals are most active.",
    "cn": "A：為什麼今年春天有這麼多外國大學的科學家來參訪國家公園，他們需要我們飯店安排特別的導覽嗎？ B：他們來是因為這座公園以植物和鳥類的【多樣性】聞名，所以請安排清晨的導覽，那時動物最活躍。"
  },
  {
    "word": "concrete jungle",
    "pos": "n.phr.",
    "cn_def": "水泥叢林",
    "en_def": "a city area with many tall buildings and little nature",
    "sentence": "A: Why did your manager decide to move her family to a small town in Yilan after working in the Taipei office for twelve years? B: She said she was tired of living in a {{BLANK}} full of traffic and tall buildings, and she wanted her children to grow up near rice fields and mountains.",
    "cn": "A：為什麼你的經理在台北辦公室工作了十二年之後，決定把全家搬到宜蘭的小鎮？ B：她說她厭倦了住在充滿車流和高樓的【水泥叢林】裡，希望孩子能在稻田和山林旁長大。"
  },
  {
    "word": "picturesque",
    "pos": "adj.",
    "cn_def": "風景如畫的",
    "en_def": "pretty, like a painting",
    "sentence": "A: Where should we hold the photo shoot for the new summer clothing line, since the director wants something traditional and colorful? B: Let's go to that {{BLANK}} fishing village on the north coast, because it has small painted houses, old wooden boats, and narrow streets that will look wonderful in the catalog.",
    "cn": "A：新的夏季服裝系列要在哪裡拍照，因為導演想要傳統又多彩的感覺？ B：我們去北海岸那個【風景如畫的】漁村吧，那裡有彩繪的小房子、老舊的木船和狹窄的街道，放在型錄裡會很好看。"
  },
  {
    "word": "awe-inspiring",
    "pos": "adj.",
    "cn_def": "令人敬畏的；令人讚嘆的",
    "en_def": "so impressive that it makes you feel respect and wonder",
    "sentence": "A: What did the clients from Germany think about the visit to the giant waterfall that we arranged for them on Sunday afternoon? B: They said it was {{BLANK}}, because the water was so loud and powerful that everyone felt very small, and two of them now want to come back with their families.",
    "cn": "A：我們星期天下午幫德國客戶安排去看大瀑布，他們覺得怎麼樣？ B：他們說那真是【令人讚嘆】，因為水聲非常大、氣勢十分磅礡，讓每個人都覺得自己很渺小，其中兩位現在還想帶家人再來。"
  },
  {
    "word": "magnificent",
    "pos": "adj.",
    "cn_def": "壯麗的；宏偉的",
    "en_def": "very beautiful and impressive",
    "sentence": "A: Have you been to the new five-star hotel downtown where we will hold the annual awards dinner next month? B: Yes, I went there last week, and the lobby is {{BLANK}}, with a huge glass ceiling, marble floors, and a large garden, so our guests will definitely be impressed.",
    "cn": "A：你去過市中心那家新的五星級飯店了嗎？我們下個月要在那裡舉辦年度頒獎晚宴。 B：去過了，我上週去的，大廳非常【宏偉】，有巨大的玻璃天花板、大理石地板和一座大花園，我們的賓客一定會印象深刻。"
  },
  {
    "word": "rugged",
    "pos": "adj.",
    "cn_def": "崎嶇的；多岩石的",
    "en_def": "rough, rocky and uneven",
    "sentence": "A: I'm thinking of driving along the east coast to visit our new store in Taitung, so is the road easy to drive? B: The views are great, but the coastline is very {{BLANK}}, with sharp rocks and steep cliffs, so the road has many sharp turns and you should drive slowly.",
    "cn": "A：我在想要沿著東海岸開車去台東看我們的新門市，那條路好開嗎？ B：景色很棒，但海岸線非常【崎嶇】，有尖銳的岩石和陡峭的懸崖，所以路上有很多急轉彎，你應該慢慢開。"
  },
  {
    "word": "untouched",
    "pos": "adj.",
    "cn_def": "未受破壞的；原始的",
    "en_def": "not changed or damaged by people",
    "sentence": "A: Why is that small island so popular with nature photographers, even though it takes four hours to get there by boat? B: Because the beaches and forests there are still {{BLANK}}, with no hotels, roads, or shops, so the photographers can take pictures of nature as it was hundreds of years ago.",
    "cn": "A：為什麼那座小島這麼受自然攝影師歡迎，即使搭船要四個小時才到得了？ B：因為那裡的海灘和森林仍然【未受破壞】，沒有飯店、道路或商店，所以攝影師可以拍到數百年前原貌的大自然。"
  },
  {
    "word": "gorgeous",
    "pos": "adj.",
    "cn_def": "非常漂亮的；華麗的",
    "en_def": "very beautiful",
    "sentence": "A: What did people say about the product launch party last night, since you were helping at the front desk the whole evening? B: Many guests said the spokesperson looked {{BLANK}} in her long red dress, and several reporters asked which designer made it, so the fashion brand got a lot of free publicity.",
    "cn": "A：大家對昨晚的產品發表派對有什麼評價？你整晚都在接待處幫忙。 B：很多賓客說代言人穿著紅色長禮服看起來【非常漂亮】，還有幾位記者詢問是哪位設計師做的，所以那個時尚品牌得到了很多免費宣傳。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；巨大的；壯觀的",
    "en_def": "sudden and very noticeable; exciting to look at",
    "sentence": "A: Have the hotel bookings changed since the city started promoting the mountain views in its new online video campaign? B: Yes, there has been a {{BLANK}} increase in bookings, because we are now almost fully booked every weekend, while last year we usually had half of our rooms empty.",
    "cn": "A：自從市政府開始在新的網路影片宣傳中推廣山景之後，飯店的訂房有改變嗎？ B：有，訂房出現了【巨大的】成長，因為我們現在幾乎每個週末都客滿，而去年通常有一半的房間是空的。"
  },
  {
    "word": "peninsula",
    "pos": "n.",
    "cn_def": "半島",
    "en_def": "a long piece of land almost surrounded by water",
    "sentence": "A: The new resort that our company is investing in seems very far from the airport, so why did the board choose that location? B: It sits at the end of a narrow {{BLANK}} with water on three sides, so every guest room has a sea view, which allows us to charge higher prices.",
    "cn": "A：我們公司投資的新度假村好像離機場很遠，董事會為什麼選擇那個地點？ B：它位於一個狹長【半島】的末端，三面環水，所以每間客房都有海景，這讓我們可以收取較高的房價。"
  },
  {
    "word": "ultimate",
    "pos": "adj.",
    "cn_def": "終極的；最好的",
    "en_def": "the best or most extreme of its kind",
    "sentence": "A: How is the travel agency advertising its new twelve-day tour of the national parks in the United States? B: They are calling it the {{BLANK}} adventure for nature lovers, because it includes canyons, waterfalls, and helicopter rides, but it is also very expensive, so I'm not sure many people will buy it.",
    "cn": "A：旅行社是怎麼宣傳他們新的美國國家公園十二天行程的？ B：他們稱它為大自然愛好者的【終極】冒險，因為行程包含峽谷、瀑布和直升機之旅，但價格也非常昂貴，所以我不確定會有很多人買。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "worth remembering because it is special",
    "sentence": "A: What was your favorite part of the sales trip to Penghu last month, since the team visited so many places in only four days? B: The most {{BLANK}} moment was the farewell dinner on the beach, when we watched the sunset and the manager thanked everyone for reaching our sales target early.",
    "cn": "A：上個月去澎湖的業務旅遊中你最喜歡哪個部分？團隊在短短四天內去了好多地方。 B：最【難忘的】時刻是在海灘上的歡送晚餐，我們一起看夕陽，經理還感謝大家提早達成業績目標。"
  },
  {
    "word": "tranquility",
    "pos": "n.",
    "cn_def": "寧靜；安寧",
    "en_def": "a calm and peaceful state",
    "sentence": "A: Why are so many busy business people booking weekends at the small mountain lodge, even though it has no television or internet? B: They go there for the {{BLANK}} of the forest, because after weeks of meetings and phone calls, they just want to hear birds and enjoy some quiet time.",
    "cn": "A：為什麼這麼多忙碌的商務人士要預訂那間小山屋過週末，即使那裡沒有電視也沒有網路？ B：他們去那裡是為了森林的【寧靜】，因為經過好幾週的會議和電話之後，他們只想聽聽鳥叫，享受一些安靜的時光。"
  },
  {
    "word": "rejuvenate",
    "pos": "v.",
    "cn_def": "使恢復活力",
    "en_def": "to make someone feel fresh, young and full of energy again",
    "sentence": "A: You look full of energy this morning, so what did you do during your week off after finishing the big project? B: I stayed at a hot spring resort in Beitou, where the warm water, healthy food, and quiet gardens helped me {{BLANK}} my body and mind before the busy season starts.",
    "cn": "A：你今天早上看起來精神飽滿，完成那個大專案後的一週休假你做了什麼？ B：我住在北投的溫泉度假村，溫暖的泉水、健康的食物和安靜的花園讓我的身心在旺季開始前【恢復活力】。"
  },
  {
    "word": "picture-perfect",
    "pos": "adj.",
    "cn_def": "如畫般完美的",
    "en_def": "so beautiful that it looks like a photograph",
    "sentence": "A: Were you worried about the weather for the outdoor team photo at the lake, since it rained heavily the day before? B: Yes, but in the end the weather was {{BLANK}}, with a clear blue sky, calm water, and soft morning light, so the photographer finished everything in less than an hour.",
    "cn": "A：你之前有擔心在湖邊拍戶外團體照的天氣嗎？因為前一天下了大雨。 B：有啊，但結果天氣【完美得像一幅畫】，藍天晴朗、水面平靜、晨光柔和，所以攝影師不到一小時就全部拍完了。"
  },
  {
    "word": "nevertheless",
    "pos": "adv.",
    "cn_def": "儘管如此；然而",
    "en_def": "in spite of what has just been said; however",
    "sentence": "A: The weather report says it will be cloudy and cold on the mountain this weekend, so should we cancel the staff outing? B: The view from the top will not be very clear; {{BLANK}}, I think we should still go, because the bus and lunch are already paid for and everyone is excited.",
    "cn": "A：天氣預報說這個週末山上會是陰天而且很冷，我們應該取消員工出遊嗎？ B：山頂的景色不會很清楚；【儘管如此】，我覺得我們還是應該去，因為遊覽車和午餐都已經付錢了，而且大家都很期待。"
  },
  {
    "word": "capture",
    "pos": "v.",
    "cn_def": "捕捉（畫面）；拍攝",
    "en_def": "to show or record something in a photo, painting or words",
    "sentence": "A: Why did the hotel hire a professional photographer instead of using pictures taken by our own staff for the new brochure? B: The marketing director wanted someone who could really {{BLANK}} the beauty of the gardens and the lake at sunrise, because better photos will help us attract more guests online.",
    "cn": "A：為什麼飯店的新手冊要聘請專業攝影師，而不是用我們自己員工拍的照片？ B：行銷總監想要找一個真正能【捕捉】日出時花園和湖泊美景的人，因為更好的照片能幫助我們在網路上吸引更多客人。"
  },
  {
    "word": "de-stress",
    "pos": "v.",
    "cn_def": "紓壓；放鬆",
    "en_def": "to relax and stop feeling worried or under pressure",
    "sentence": "A: I noticed that many people from the sales team leave the office together at lunchtime every day, so where do they go? B: They walk to the riverside park nearby to {{BLANK}} after the long morning meetings, because a little fresh air and green scenery make them feel calm again.",
    "cn": "A：我注意到業務團隊很多人每天中午都一起離開辦公室，他們去哪裡？ B：他們走到附近的河濱公園，在漫長的早上會議之後【紓壓】一下，因為一點新鮮空氣和綠色景色能讓他們再次感到平靜。"
  },
  {
    "word": "spoil",
    "pos": "v.",
    "cn_def": "破壞；毀掉",
    "en_def": "to damage or ruin something so it is less good",
    "sentence": "A: Why are so many residents near the lake angry about the city council's plan to build a new factory there next year? B: They believe the tall buildings and smoke will {{BLANK}} the natural beauty of the area, and they worry that tourists will stop visiting the lakeside hotels and restaurants.",
    "cn": "A：為什麼湖邊這麼多居民對市議會明年要在那裡蓋新工廠的計畫感到憤怒？ B：他們認為高大的建築和煙霧會【破壞】這個地區的自然美景，而且擔心遊客會不再造訪湖畔的飯店和餐廳。"
  },
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "畫廊；藝廊",
    "en_def": "a room or building where art or photos are shown",
    "sentence": "A: Is there anything interesting near the convention center where our overseas guests can go after the trade show closes each day? B: There is a small photo {{BLANK}} across the street that is showing mountain and ocean landscapes by local artists, and it stays open until nine every evening.",
    "cn": "A：會展中心附近有沒有什麼有趣的地方，讓我們的海外賓客在每天展覽結束後可以去？ B：對街有一間小型攝影【藝廊】，正在展出本地藝術家拍攝的山海風景，每天晚上開到九點。"
  },
  {
    "word": "livable",
    "pos": "adj.",
    "cn_def": "適合居住的；宜居的",
    "en_def": "pleasant and suitable to live in",
    "sentence": "A: Why has our company decided to move its regional headquarters from the capital to that smaller city in the south? B: The city was ranked the most {{BLANK}} in the country this year, with clean air, many parks, and cheaper housing, so it will be easier to attract good employees.",
    "cn": "A：為什麼我們公司決定把區域總部從首都搬到南部那座比較小的城市？ B：這座城市今年被評為全國最【宜居的】城市，空氣清新、公園很多、房價較便宜，所以會更容易吸引優秀的員工。"
  }
];

const MCQS = [
  {
    "q": "Kenting has become a popular travel _____ for office workers in Taipei. Hotels there are often fully booked during long weekends.",
    "options": [
      "destination",
      "enthusiast",
      "gallery",
      "peninsula"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our new sales director is a keen outdoor _____ who climbs mountains every month. She often shares her travel photos with the team.",
    "options": [
      "destination",
      "enthusiast",
      "peninsula",
      "gorge"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "During the conference break, several guests decided to _____ the old town on foot. They found many small cafes and shops.",
    "options": [
      "fantasize",
      "rejuvenate",
      "explore",
      "de-stress"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The tour guide gave everyone thirty minutes at the lookout point. Visitors used the time to _____ the fresh air and peaceful views.",
    "options": [
      "spoil",
      "fantasize",
      "de-stress",
      "soak up"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hiking trail follows a narrow river through a deep _____ between two steep cliffs. Visitors should wear strong shoes because the path is slippery.",
    "options": [
      "gorge",
      "gallery",
      "peninsula",
      "destination"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The company bus took the _____ route along the coast instead of the highway. It added an hour, but everyone enjoyed the ocean views.",
    "options": [
      "comfy",
      "scenic",
      "livable",
      "petty"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The hotel's rooftop offers a _____ view of the city at night. Many guests say it is the best view they have ever seen.",
    "options": [
      "livable",
      "comfy",
      "jaw-dropping",
      "petty"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The team-building program includes a three-day _____ through the mountains with a local guide. Participants must carry their own backpacks and tents.",
    "options": [
      "gallery",
      "gorge",
      "peninsula",
      "trek"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The bride chose the venue because of its _____ sunset views over the harbor. Every photographer at the wedding was impressed.",
    "options": [
      "stunning",
      "petty",
      "comfy",
      "livable"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Stuck at his desk all week, Daniel likes to _____ about lying on a quiet beach in Bali. He has already started saving for the trip.",
    "options": [
      "explore",
      "fantasize",
      "capture",
      "spoil"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The marketing team did an _____ job on the tourism campaign. Bookings for the island resort doubled within two months.",
    "options": [
      "untouched",
      "upright",
      "extraordinary",
      "idle"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please bring proper _____ boots for Saturday's company outing to Yangmingshan. The trail is steep and can be muddy after rain.",
    "options": [
      "diversity",
      "tranquility",
      "gallery",
      "hiking"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The national park is famous for the _____ of its plant and animal life. Researchers have recorded more than two thousand species there.",
    "options": [
      "diversity",
      "tranquility",
      "gallery",
      "peninsula"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "After ten years of living in the _____ of Taipei, Grace moved to a small farm in Hualien. She now enjoys clean air and quiet mornings.",
    "options": [
      "peninsula",
      "concrete jungle",
      "gorge",
      "gallery"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The resort is located in a _____ fishing village with colorful houses and boats. It is a favorite spot for wedding photographers.",
    "options": [
      "lethargic",
      "petty",
      "picturesque",
      "knackered"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Standing beneath the giant waterfall was an _____ experience for the visiting clients. Several of them said they felt very small in front of nature.",
    "options": [
      "untouched",
      "edible",
      "overdue",
      "awe-inspiring"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The hotel lobby has a _____ glass ceiling that lets in plenty of sunlight. Guests often stop to take photos of it.",
    "options": [
      "magnificent",
      "rugged",
      "livable",
      "comfy"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The east coast has a _____ coastline with sharp rocks and steep cliffs. Drivers should take extra care on the narrow mountain roads.",
    "options": [
      "comfy",
      "rugged",
      "livable",
      "petty"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Everyone at the product launch admired the _____ dress the spokesperson wore on stage. Several guests asked which designer had made it.",
    "options": [
      "rugged",
      "scenic",
      "gorgeous",
      "livable"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Sales showed a _____ increase after the travel agency posted its videos online. Profits nearly tripled in just one quarter.",
    "options": [
      "scenic",
      "comfy",
      "picturesque",
      "dramatic"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new resort sits at the tip of a narrow _____ surrounded by water on three sides. Every room has a view of the sea.",
    "options": [
      "peninsula",
      "gorge",
      "gallery",
      "enthusiast"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The farewell dinner on the beach was the most _____ part of the sales trip. Many staff members still talk about it today.",
    "options": [
      "rugged",
      "memorable",
      "livable",
      "comfy"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The mountain retreat offers guests peace and _____ far from the noise of the city. There is no television or internet in the rooms.",
    "options": [
      "diversity",
      "gallery",
      "tranquility",
      "enthusiast"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "A week at the hot spring resort helped the tired manager _____ before the busy season. She came back to the office full of energy.",
    "options": [
      "capture",
      "spoil",
      "obstruct",
      "rejuvenate"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The weather was _____ on the day of the outdoor company photo. There was not a single cloud in the sky.",
    "options": [
      "picture-perfect",
      "petty",
      "camera-shy",
      "tone-deaf"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The photographer was hired to _____ the beauty of the hotel's gardens for its new brochure. The photos will also appear on the website.",
    "options": [
      "fantasize",
      "capture",
      "de-stress",
      "rejuvenate"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Many employees go walking in the park at lunch to _____ after long meetings. A short break outdoors helps them feel calm again.",
    "options": [
      "capture",
      "obstruct",
      "de-stress",
      "spoil"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The new factory near the lake will _____ the natural beauty of the area, residents say. They have asked the city to choose another site.",
    "options": [
      "fantasize",
      "de-stress",
      "rejuvenate",
      "spoil"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The museum's new photo _____ shows mountain landscapes taken by local artists. Admission is free for employees of partner companies.",
    "options": [
      "gallery",
      "gorge",
      "peninsula",
      "trek"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Thanks to its parks and clean air, the city was ranked the most _____ in Asia this year. Many companies are now moving their offices there.",
    "options": [
      "petty",
      "livable",
      "lethargic",
      "knackered"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "destination": {
    "pos": "n.",
    "en_def": "a place where someone is going on a trip",
    "cn_def": "目的地"
  },
  "enthusiast": {
    "pos": "n.",
    "en_def": "a person who likes an activity very much",
    "cn_def": "熱衷者；愛好者"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  },
  "soak up": {
    "pos": "v.phr.",
    "en_def": "to enjoy something fully by spending time in it",
    "cn_def": "盡情享受；沉浸於"
  },
  "gorge": {
    "pos": "n.",
    "en_def": "a deep, narrow valley with steep sides, often with a river",
    "cn_def": "峽谷"
  },
  "scenic": {
    "pos": "adj.",
    "en_def": "having beautiful natural views",
    "cn_def": "風景優美的"
  },
  "comfy": {
    "pos": "adj.",
    "en_def": "comfortable (informal)",
    "cn_def": "舒服的；舒適的"
  },
  "jaw-dropping": {
    "pos": "adj.",
    "en_def": "so surprising or beautiful that it makes you very amazed",
    "cn_def": "令人瞠目結舌的；驚人的"
  },
  "trek": {
    "pos": "n.",
    "en_def": "a long, hard walk, usually in mountains or the countryside",
    "cn_def": "長途跋涉；健行"
  },
  "stunning": {
    "pos": "adj.",
    "en_def": "extremely beautiful or attractive",
    "cn_def": "極美的；令人驚豔的"
  },
  "fantasize": {
    "pos": "v.",
    "en_def": "to imagine pleasant things that you want to happen",
    "cn_def": "幻想；夢想"
  },
  "fancy": {
    "pos": "v.",
    "en_def": "to want to have or do something (British informal)",
    "cn_def": "想要；喜歡"
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual or special",
    "cn_def": "非凡的；驚人的"
  },
  "hiking": {
    "pos": "n.",
    "en_def": "the activity of going for long walks in the countryside or mountains",
    "cn_def": "健行；登山"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a wide range of different types of things or people",
    "cn_def": "多樣性"
  },
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city area with many tall buildings and little nature",
    "cn_def": "水泥叢林"
  },
  "picturesque": {
    "pos": "adj.",
    "en_def": "pretty, like a painting",
    "cn_def": "風景如畫的"
  },
  "awe-inspiring": {
    "pos": "adj.",
    "en_def": "so impressive that it makes you feel respect and wonder",
    "cn_def": "令人敬畏的；令人讚嘆的"
  },
  "magnificent": {
    "pos": "adj.",
    "en_def": "very beautiful and impressive",
    "cn_def": "壯麗的；宏偉的"
  },
  "rugged": {
    "pos": "adj.",
    "en_def": "rough, rocky and uneven",
    "cn_def": "崎嶇的；多岩石的"
  },
  "untouched": {
    "pos": "adj.",
    "en_def": "not changed or damaged by people",
    "cn_def": "未受破壞的；原始的"
  },
  "gorgeous": {
    "pos": "adj.",
    "en_def": "very beautiful",
    "cn_def": "非常漂亮的；華麗的"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "sudden and very noticeable; exciting to look at",
    "cn_def": "戲劇性的；巨大的；壯觀的"
  },
  "peninsula": {
    "pos": "n.",
    "en_def": "a long piece of land almost surrounded by water",
    "cn_def": "半島"
  },
  "ultimate": {
    "pos": "adj.",
    "en_def": "the best or most extreme of its kind",
    "cn_def": "終極的；最好的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "worth remembering because it is special",
    "cn_def": "難忘的"
  },
  "tranquility": {
    "pos": "n.",
    "en_def": "a calm and peaceful state",
    "cn_def": "寧靜；安寧"
  },
  "rejuvenate": {
    "pos": "v.",
    "en_def": "to make someone feel fresh, young and full of energy again",
    "cn_def": "使恢復活力"
  },
  "picture-perfect": {
    "pos": "adj.",
    "en_def": "so beautiful that it looks like a photograph",
    "cn_def": "如畫般完美的"
  },
  "nevertheless": {
    "pos": "adv.",
    "en_def": "in spite of what has just been said; however",
    "cn_def": "儘管如此；然而"
  },
  "capture": {
    "pos": "v.",
    "en_def": "to show or record something in a photo, painting or words",
    "cn_def": "捕捉（畫面）；拍攝"
  },
  "de-stress": {
    "pos": "v.",
    "en_def": "to relax and stop feeling worried or under pressure",
    "cn_def": "紓壓；放鬆"
  },
  "spoil": {
    "pos": "v.",
    "en_def": "to damage or ruin something so it is less good",
    "cn_def": "破壞；毀掉"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art or photos are shown",
    "cn_def": "畫廊；藝廊"
  },
  "livable": {
    "pos": "adj.",
    "en_def": "pleasant and suitable to live in",
    "cn_def": "適合居住的；宜居的"
  }
};

const EXTRA_GLOSSES = {};
