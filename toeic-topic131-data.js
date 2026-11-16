// Topic 131 Quiz Data: Extreme Sports 極限運動
// Source word list: https://www.examword.com/group-topic/extreme-sports — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T131 - Extreme Sports 極限運動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adrenaline",
    "pos": "n.",
    "cn_def": "腎上腺素",
    "en_def": "a chemical your body makes when you feel excited or afraid",
    "sentence": "A: Why did the marketing team look so excited when they came back from the company outing on Saturday afternoon? B: They spent the whole morning on the giant zip line over the valley, and the rush of {{BLANK}} kept them laughing and talking about it all the way home on the bus.",
    "cn": "A：行銷團隊星期六下午從公司出遊回來時，為什麼看起來那麼興奮？ B：他們整個早上都在山谷上方的巨型滑索上，那股【腎上腺素】帶來的快感讓他們在回程的巴士上一路笑著談論這件事。"
  },
  {
    "word": "thrill",
    "pos": "n.",
    "cn_def": "興奮；刺激感",
    "en_def": "a strong feeling of excitement and pleasure",
    "sentence": "A: Our travel agency wants to add a new tour package for younger customers next summer, but what kind of activity should we offer them? B: Many young travelers are looking for the {{BLANK}} of trying something new, so a guided river trip or a hot-air balloon ride would probably sell very well.",
    "cn": "A：我們旅行社明年夏天想為年輕客戶增加一個新的旅遊套裝行程，但我們應該提供什麼樣的活動呢？ B：許多年輕旅客都在尋找嘗試新事物的【刺激感】，所以有導遊帶領的河上之旅或熱氣球之旅應該會賣得很好。"
  },
  {
    "word": "adventure",
    "pos": "n.",
    "cn_def": "冒險；冒險經歷",
    "en_def": "an exciting and unusual experience",
    "sentence": "A: Have you finished the new brochure for the mountain resort, and did the manager approve the main photo on the front cover? B: Yes, she loved the picture of the hikers on the cliff, and she wants the headline to promise a real {{BLANK}} for families who are tired of ordinary beach holidays.",
    "cn": "A：你完成山區度假村的新宣傳手冊了嗎？經理有核准封面的主要照片嗎？ B：有，她很喜歡登山客站在懸崖上的那張照片，她希望標題能向厭倦了一般海灘假期的家庭保證一場真正的【冒險】。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險；危險",
    "en_def": "the chance that something bad will happen",
    "sentence": "A: Why did the insurance company raise the price of our group policy for the employees who joined the outdoor sports club this year? B: The agent explained that activities like cliff jumping carry a higher {{BLANK}} of serious accidents, so the company has to charge more to cover possible hospital costs.",
    "cn": "A：保險公司為什麼調高了我們今年加入戶外運動社團員工的團體保單價格？ B：業務員解釋說，像懸崖跳水這樣的活動發生嚴重意外的【風險】較高，所以公司必須收取更多費用來支付可能的醫療費用。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "likely to hurt or harm someone",
    "sentence": "A: Should we still hold the team-building hike on Friday, even though the weather report says there will be heavy rain all afternoon? B: I think we should cancel it, because the trail along the river becomes very {{BLANK}} when the rocks are wet, and nobody wants to see a colleague get hurt.",
    "cn": "A：即使氣象報告說整個下午都會下大雨，我們星期五還要舉辦團隊健行嗎？ B：我覺得應該取消，因為岩石濕滑時沿河的步道會變得非常【危險】，沒有人想看到同事受傷。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something difficult that tests your ability",
    "sentence": "A: Are you really going to join the twenty-kilometer mountain race that the sports company is sponsoring next month? B: Yes, I know it will be a huge {{BLANK}} for someone who only started running in the spring, but my coach believes I can finish it if I prepare carefully.",
    "cn": "A：你真的要參加運動用品公司下個月贊助的二十公里山地賽跑嗎？ B：是的，我知道這對一個春天才開始跑步的人來說是很大的【挑戰】，但我的教練相信只要我仔細準備就能跑完。"
  },
  {
    "word": "daring",
    "pos": "adj.",
    "cn_def": "大膽的；勇敢的",
    "en_def": "brave enough to do risky or surprising things",
    "sentence": "A: Did you see the video that our new sales director posted on the company website about her weekend activities? B: Yes, it showed her jumping from a small plane over the coast, and everyone in the office agrees that it was a very {{BLANK}} thing to do for someone who is afraid of flying.",
    "cn": "A：你有看到我們新任業務總監在公司網站上發布的週末活動影片嗎？ B：有，影片中她從一架小飛機上跳下飛越海岸，辦公室裡每個人都同意，對一個怕坐飛機的人來說，那是一件非常【大膽的】事。"
  },
  {
    "word": "fearless",
    "pos": "adj.",
    "cn_def": "無所畏懼的",
    "en_def": "not afraid of anything",
    "sentence": "A: Why did the film company choose that young actor for the lead role in their new action movie about mountain rescue teams? B: The director said he looked completely {{BLANK}} during the screen test on the high bridge, and he did most of the difficult scenes himself without asking for help.",
    "cn": "A：電影公司為什麼選那位年輕演員擔任他們新的山難救援隊動作片主角？ B：導演說他在高橋上試鏡時看起來完全【無所畏懼】，而且大部分困難的場景都是他自己完成，沒有要求協助。"
  },
  {
    "word": "helmet",
    "pos": "n.",
    "cn_def": "安全帽；頭盔",
    "en_def": "a hard hat that protects your head",
    "sentence": "A: Excuse me, can I rent one of these mountain bikes for the afternoon, or do I need to make a reservation in advance? B: You can take one now, but for safety reasons you must wear a {{BLANK}} at all times on the trail, and you need to sign this form before you leave the shop.",
    "cn": "A：不好意思，我可以租一台登山車用一個下午嗎？還是需要事先預約？ B：您現在就可以租，但為了安全起見，在步道上必須全程戴著【安全帽】，而且離開店前需要簽這份表格。"
  },
  {
    "word": "protective gear",
    "pos": "n.phr.",
    "cn_def": "防護裝備",
    "en_def": "special clothes and equipment that keep your body safe",
    "sentence": "A: What should I bring to the motorcycle training course that the delivery company is organizing for new drivers next week? B: You only need comfortable clothes and a valid license, because the school will provide all the {{BLANK}}, including gloves, knee pads, and a strong jacket for every student.",
    "cn": "A：外送公司下週為新進司機舉辦的機車訓練課程，我應該帶什麼？ B：你只需要穿舒適的衣服並帶有效的駕照，因為學校會提供所有的【防護裝備】，包括每位學員的手套、護膝和堅固的外套。"
  },
  {
    "word": "skydiving",
    "pos": "n.",
    "cn_def": "高空跳傘",
    "en_def": "the sport of jumping from a plane and falling before opening a parachute",
    "sentence": "A: What did the employees choose as the special reward activity after the team reached its sales target last quarter? B: Most of them voted for {{BLANK}} at the airfield outside the city, so next Saturday they will jump from a plane with experienced instructors and then celebrate together at dinner.",
    "cn": "A：團隊上一季達成業績目標後，員工選了什麼作為特別的獎勵活動？ B：他們大多數人投票選擇在市郊的機場玩【高空跳傘】，所以下週六他們會跟著經驗豐富的教練從飛機上跳下來，然後一起吃晚餐慶祝。"
  },
  {
    "word": "parachute",
    "pos": "n.",
    "cn_def": "降落傘",
    "en_def": "a large piece of cloth that helps a person or object fall slowly from the sky",
    "sentence": "A: How does the new delivery company send medical supplies to the small villages in the mountains when the roads are closed by snow? B: They fly over the villages in a light plane and drop the boxes with a {{BLANK}}, so the packages land safely and the local clinics receive them within a few hours.",
    "cn": "A：當道路因下雪而封閉時，那家新的物流公司要如何把醫療用品送到山區的小村莊？ B：他們用輕型飛機飛越村莊上空，用【降落傘】投下箱子，讓包裹安全著陸，當地診所在幾小時內就能收到。"
  },
  {
    "word": "bungee jumping",
    "pos": "n.phr.",
    "cn_def": "高空彈跳",
    "en_def": "jumping from a high place while tied to a long elastic rope",
    "sentence": "A: What is the most popular activity for tourists who visit the bridge near the waterfall during the summer holiday season? B: It is definitely {{BLANK}}, because visitors can fall more than fifty meters toward the river before the rope pulls them back, and the tour company is fully booked every weekend.",
    "cn": "A：暑假期間造訪瀑布附近那座橋的遊客最喜歡的活動是什麼？ B：絕對是【高空彈跳】，因為遊客可以朝河面下墜超過五十公尺，然後繩索才把他們拉回來，而且旅行社每個週末都被訂滿了。"
  },
  {
    "word": "snowboarding",
    "pos": "n.",
    "cn_def": "單板滑雪",
    "en_def": "the sport of moving down snowy hills on one wide board",
    "sentence": "A: Are you taking any time off work in January, or will you stay in the office to finish the annual report? B: I am going to Hokkaido for a week with my cousins, and we have already signed up for {{BLANK}} lessons because none of us knows how to stand on the board yet.",
    "cn": "A：你一月會請假嗎？還是會留在辦公室完成年度報告？ B：我要和表兄弟姊妹去北海道一個星期，我們已經報名了【單板滑雪】課程，因為我們都還不知道怎麼站在滑雪板上。"
  },
  {
    "word": "skateboarding",
    "pos": "n.",
    "cn_def": "滑板運動",
    "en_def": "the sport of riding and doing tricks on a board with small wheels",
    "sentence": "A: Why is the city government building a new concrete park next to the shopping mall instead of more parking spaces? B: Many teenagers were practicing {{BLANK}} on the sidewalks and stairs, which was unsafe for shoppers, so the city decided to give them a proper place with ramps and rails.",
    "cn": "A：市政府為什麼要在購物中心旁邊蓋一座新的水泥公園，而不是增加停車位？ B：許多青少年在人行道和樓梯上練習【滑板】，這對購物的民眾來說很不安全，所以市政府決定給他們一個有斜坡和欄杆的合適場地。"
  },
  {
    "word": "rock climbing",
    "pos": "n.phr.",
    "cn_def": "攀岩",
    "en_def": "the sport of climbing steep rock walls",
    "sentence": "A: Do you know why the human resources department booked the indoor sports center for our training day next Thursday? B: They want us to try {{BLANK}} on the big wall there, because reaching the top together teaches teams to trust each other and communicate clearly under pressure.",
    "cn": "A：你知道人資部門為什麼預訂了室內運動中心作為我們下週四的訓練日嗎？ B：他們想讓我們在那裡的大型岩壁上嘗試【攀岩】，因為一起爬到頂端能教會團隊彼此信任，並在壓力下清楚溝通。"
  },
  {
    "word": "mountaineering",
    "pos": "n.",
    "cn_def": "登山運動",
    "en_def": "the sport of climbing high mountains",
    "sentence": "A: How did the new CEO become such a calm and patient leader when the company faces difficult problems? B: She spent ten years doing {{BLANK}} in the Himalayas before she joined the business world, and she says that climbing high peaks taught her to plan carefully and never panic.",
    "cn": "A：新任執行長是如何成為一位在公司面臨難題時如此冷靜又有耐心的領導者？ B：她在進入商界之前，花了十年在喜馬拉雅山從事【登山運動】，她說攀登高峰教會她仔細規劃、永不驚慌。"
  },
  {
    "word": "surfing",
    "pos": "n.",
    "cn_def": "衝浪",
    "en_def": "the sport of riding ocean waves on a board",
    "sentence": "A: Why is the beach hotel offering such large discounts for guests who stay during the autumn months this year? B: The waves are much bigger in October, so the manager wants to attract young travelers who enjoy {{BLANK}}, and the hotel has even hired two instructors to teach beginners.",
    "cn": "A：海灘飯店今年為什麼要給秋季入住的客人這麼大的折扣？ B：十月的海浪大得多，所以經理想吸引喜歡【衝浪】的年輕旅客，飯店甚至請了兩位教練來教初學者。"
  },
  {
    "word": "windsurfing",
    "pos": "n.",
    "cn_def": "風帆衝浪",
    "en_def": "the sport of moving across water on a board with a sail",
    "sentence": "A: What equipment does the water sports shop by the lake need to order before the summer season starts next month? B: They need at least ten new boards with sails for {{BLANK}}, because the strong afternoon wind on the lake attracts many visitors who want to rent them by the hour.",
    "cn": "A：湖邊的水上運動用品店在下個月夏季開始前需要訂購什麼設備？ B：他們至少需要十塊新的附帆板子來玩【風帆衝浪】，因為湖上下午的強風吸引了許多想按小時租用的遊客。"
  },
  {
    "word": "rafting",
    "pos": "n.",
    "cn_def": "泛舟",
    "en_def": "traveling down a river in a rubber boat",
    "sentence": "A: How was the company trip to Hualien last weekend, and did everyone enjoy the activities that the organizers planned? B: It was great, especially the river {{BLANK}} on Saturday morning, when twelve of us paddled a rubber boat through fast water and got completely wet but laughed the whole time.",
    "cn": "A：上週末公司去花蓮的旅遊怎麼樣？大家都喜歡主辦人規劃的活動嗎？ B：很棒，尤其是星期六早上的河上【泛舟】，我們十二個人划著橡皮艇穿過湍急的水流，全身都濕透了，但一路笑個不停。"
  },
  {
    "word": "kayaking",
    "pos": "n.",
    "cn_def": "划獨木舟",
    "en_def": "moving through water in a small narrow boat with a paddle",
    "sentence": "A: Could you recommend a relaxing activity for the visiting clients who will have a free afternoon after the meeting on Friday? B: I suggest {{BLANK}} around the quiet bay near the hotel, because each person paddles a small boat slowly along the coast and can enjoy the beautiful view of the islands.",
    "cn": "A：星期五會議結束後，來訪的客戶有一個空閒的下午，你能推薦一個放鬆的活動嗎？ B：我建議在飯店附近寧靜的海灣【划獨木舟】，因為每個人可以划著小船沿著海岸慢慢前進，欣賞島嶼的美麗景色。"
  },
  {
    "word": "motocross",
    "pos": "n.",
    "cn_def": "越野機車賽",
    "en_def": "motorcycle racing on rough, muddy tracks",
    "sentence": "A: Why does the motorcycle company want to sponsor that dirt-track event in the countryside instead of a normal road race? B: Young riders love watching {{BLANK}}, and when they see racers jump over muddy hills on our bikes, they are much more likely to visit our stores and buy one.",
    "cn": "A：那家機車公司為什麼想贊助鄉下的泥地賽道活動，而不是一般的公路賽？ B：年輕騎士很喜歡觀看【越野機車賽】，當他們看到賽車手騎著我們的機車飛越泥濘的山丘時，就更有可能到我們的門市購買。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "how fast something moves",
    "sentence": "A: Why did the delivery company install new cameras and tracking systems in all of its trucks last month? B: Several drivers were caught going too fast on the highway, so the managers now check the {{BLANK}} of every vehicle and send a warning when someone drives over the limit.",
    "cn": "A：物流公司上個月為什麼在所有貨車上安裝了新的攝影機和追蹤系統？ B：有幾位司機被發現在高速公路上開太快，所以主管們現在會檢查每輛車的【速度】，有人超速時就會發出警告。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡；平衡感",
    "en_def": "the ability to stay steady without falling",
    "sentence": "A: How are your yoga classes going, and do you think they are helping you with the back pain from sitting at your desk all day? B: Yes, my back feels much better, and the teacher says my {{BLANK}} has improved a lot, because I can now stand on one leg for a full minute without falling.",
    "cn": "A：你的瑜伽課上得怎麼樣？你覺得對你整天坐在辦公桌前造成的背痛有幫助嗎？ B：有，我的背感覺好多了，老師說我的【平衡感】進步很多，因為我現在可以單腳站立整整一分鐘而不會跌倒。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well, learned through practice",
    "sentence": "A: Why did the outdoor tour company ask all of its new guides to take a two-week course before the busy season begins? B: Leading groups in the mountains requires a lot of {{BLANK}}, such as reading maps, giving first aid, and making quick decisions when the weather suddenly changes.",
    "cn": "A：戶外旅遊公司為什麼要求所有新導遊在旺季開始前上兩週的課程？ B：在山區帶團需要很多【技能】，例如看地圖、急救，以及在天氣突然變化時迅速做出決定。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "訓練；培訓",
    "en_def": "the process of learning and practicing skills for a job or sport",
    "sentence": "A: Is it true that the new diving instructors at the resort will not start working with guests until next month? B: Yes, they must complete three weeks of safety {{BLANK}} first, which includes rescue practice in the pool and several long swims in the open sea with a senior instructor.",
    "cn": "A：度假村新來的潛水教練真的要到下個月才會開始帶客人嗎？ B：是的，他們必須先完成三週的安全【訓練】，包括在泳池裡練習救援，以及跟著資深教練在開放海域長距離游泳數次。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的；職業的",
    "en_def": "having the training and qualifications for a job; doing something as a paid job",
    "sentence": "A: Do you think the hotel should hire a local guide for the climbing tours, or can our own staff lead the guests? B: We should definitely hire a {{BLANK}} guide with official certificates, because our insurance will not cover any accidents if the person in charge has no proper qualifications.",
    "cn": "A：你覺得飯店應該為攀岩行程聘請當地嚮導，還是我們自己的員工就可以帶客人？ B：我們絕對應該聘請一位持有正式證照的【專業】嚮導，因為如果負責人沒有適當的資格，我們的保險將不會理賠任何意外。"
  },
  {
    "word": "amateur",
    "pos": "adj.",
    "cn_def": "業餘的",
    "en_def": "doing something for fun, not as a paid job",
    "sentence": "A: Is the cycling race this weekend only for famous athletes, or can ordinary people from our office sign up too? B: Anyone can join, because it is an {{BLANK}} event for people who ride as a hobby, and the organizers just want everyone to have fun and raise money for charity.",
    "cn": "A：這個週末的自行車賽只限知名運動員參加嗎？還是我們辦公室的一般人也可以報名？ B：任何人都可以參加，因為那是一場為把騎車當作嗜好的人舉辦的【業餘】活動，主辦單位只是希望大家玩得開心並為慈善機構募款。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "競爭激烈的；好勝的",
    "en_def": "involving strong competition; wanting very much to win",
    "sentence": "A: Why did the sporting goods store lower the prices of its helmets and gloves so much this month? B: The market has become very {{BLANK}} since two large online shops opened last year, so the store must offer better deals and faster service to keep its regular customers.",
    "cn": "A：體育用品店這個月為什麼把安全帽和手套的價格降這麼多？ B：自從去年兩家大型網路商店開業以來，市場變得非常【競爭激烈】，所以這家店必須提供更好的優惠和更快的服務來留住老顧客。"
  },
  {
    "word": "intense",
    "pos": "adj.",
    "cn_def": "強烈的；激烈的",
    "en_def": "very strong or extreme",
    "sentence": "A: How did you feel after the first day of the survival course that the company sent you to in the mountains? B: It was really {{BLANK}}, because we hiked for nine hours with heavy bags, built our own shelter before dark, and only had a few hours of sleep in the cold.",
    "cn": "A：公司派你去參加的山區求生課程，第一天結束後你感覺如何？ B：真的很【激烈】，因為我們背著沉重的背包健行了九個小時，在天黑前自己搭好避難所，而且只在寒冷中睡了幾個小時。"
  },
  {
    "word": "physically",
    "pos": "adv.",
    "cn_def": "身體上地",
    "en_def": "in a way that is related to the body",
    "sentence": "A: Why does the adventure travel agency ask every customer to fill out a health form before booking the glacier hiking tour? B: The tour lasts six hours on ice and steep paths, so guests must be {{BLANK}} fit and able to walk long distances without needing to stop and rest very often.",
    "cn": "A：探險旅行社為什麼要求每位顧客在預訂冰河健行行程前填寫健康表格？ B：這趟行程要在冰上和陡峭的小路上走六個小時，所以客人必須【身體上】健康，能夠走長距離而不需要經常停下來休息。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "心理上地；精神上地",
    "en_def": "in a way that is related to the mind",
    "sentence": "A: What advice did the coach give the young climbers before the final stage of the competition yesterday afternoon? B: He told them that staying {{BLANK}} strong is just as important as having powerful arms, because fear and panic can cause mistakes even when the body still has plenty of energy.",
    "cn": "A：昨天下午比賽最後階段前，教練給了年輕攀岩選手什麼建議？ B：他告訴他們，保持【心理上】的堅強和擁有強壯的手臂一樣重要，因為即使身體還有充足的體力，恐懼和驚慌也可能導致失誤。"
  },
  {
    "word": "courage",
    "pos": "n.",
    "cn_def": "勇氣",
    "en_def": "the ability to do something that frightens you",
    "sentence": "A: Did our manager really give the opening speech at the international conference even though she is usually so shy? B: Yes, it took a lot of {{BLANK}} for her to stand in front of five hundred people, but she practiced every evening for a month and the audience loved her talk.",
    "cn": "A：我們經理平常那麼害羞，她真的在國際研討會上發表了開幕演說嗎？ B：是的，要站在五百人面前需要很大的【勇氣】，但她整整一個月每天晚上都在練習，觀眾都很喜歡她的演講。"
  },
  {
    "word": "stamina",
    "pos": "n.",
    "cn_def": "耐力；體力",
    "en_def": "the energy to keep doing something for a long time",
    "sentence": "A: Why are the new warehouse workers taking a fitness class every morning before their shifts start this month? B: The job requires carrying heavy boxes for eight hours a day, so the manager wants them to build enough {{BLANK}} to work long hours without getting tired or hurting themselves.",
    "cn": "A：新的倉庫員工這個月為什麼每天早上上班前都要上體能課？ B：這份工作需要每天搬重箱子八個小時，所以經理希望他們培養足夠的【耐力】，能長時間工作而不會疲累或受傷。"
  },
  {
    "word": "injury",
    "pos": "n.",
    "cn_def": "傷害；受傷",
    "en_def": "physical harm to the body",
    "sentence": "A: Why wasn't Kevin at the sales meeting this morning, and who is going to meet his clients from Japan this afternoon? B: He hurt his knee while skiing last weekend, and the doctor said the {{BLANK}} needs two weeks of rest, so Lisa will take care of his clients until he returns.",
    "cn": "A：凱文今天早上為什麼沒來參加業務會議？今天下午誰要去見他的日本客戶？ B：他上週末滑雪時傷了膝蓋，醫生說這個【傷勢】需要休息兩週，所以麗莎會負責照顧他的客戶直到他回來。"
  }
];

const MCQS = [
  {
    "q": "The roller coaster at the new theme park drops eighty meters in three seconds. Riders feel a huge rush of _____ during the fall.",
    "options": [
      "adrenaline",
      "helmet",
      "balance",
      "training"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many customers book our hot-air balloon tour for the _____ of flying above the city at sunrise. The tour sells out every weekend.",
    "options": [
      "injury",
      "helmet",
      "thrill",
      "stamina"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The travel agency is launching a new _____ package for active families this summer. It includes cave tours, river trips, and camping.",
    "options": [
      "injury",
      "adventure",
      "helmet",
      "parachute"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Before the trip, every participant must sign a form. It says they understand the _____ of injury involved in white-water activities.",
    "options": [
      "courage",
      "speed",
      "thrill",
      "risk"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The park closed the cliff trail after last night's storm. Officials said the loose rocks made the path too _____ for hikers.",
    "options": [
      "competitive",
      "amateur",
      "dangerous",
      "fearless"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Finishing the marathon in under four hours was a real _____ for the new runner. She trained every morning for six months to do it.",
    "options": [
      "challenge",
      "parachute",
      "helmet",
      "adrenaline"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Two firefighters risked their lives in a _____ rescue on the frozen lake. Everyone praised their brave actions on the evening news.",
    "options": [
      "competitive",
      "amateur",
      "sedentary",
      "daring"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The young reporter was completely _____ when she interviewed the angry protesters. She asked difficult questions without showing any sign of worry.",
    "options": [
      "dangerous",
      "fearless",
      "amateur",
      "intense"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Workers on the construction site must wear a hard _____ at all times. Anyone without one will not be allowed past the gate.",
    "options": [
      "helmet",
      "parachute",
      "balance",
      "courage"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "All visitors to the chemical factory receive _____ at the entrance. This includes gloves, goggles, and a long coat.",
    "options": [
      "adrenaline",
      "stamina",
      "courage",
      "protective gear"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The sales team celebrated its record year by going _____ together. They jumped from a plane at four thousand meters with trained instructors.",
    "options": [
      "kayaking",
      "skydiving",
      "surfing",
      "skateboarding"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The rescue team dropped food supplies by _____ to the flooded village. The boxes floated down slowly and landed near the school.",
    "options": [
      "helmet",
      "motocross",
      "parachute",
      "balance"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The tourists tied a long elastic rope to their ankles before _____ from the bridge. They screamed as they fell toward the river.",
    "options": [
      "rock climbing",
      "windsurfing",
      "kayaking",
      "bungee jumping"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The ski resort now rents boards and boots for _____ at half price on weekdays. Beginners can also take a free lesson on the gentle slopes.",
    "options": [
      "surfing",
      "snowboarding",
      "rafting",
      "motocross"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The city built ramps and rails in the park for _____. Teenagers no longer need to practice their tricks on the shopping mall stairs.",
    "options": [
      "skateboarding",
      "kayaking",
      "mountaineering",
      "windsurfing"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The gym's new wall is twelve meters high and perfect for indoor _____. Climbers wear harnesses and work with a partner who holds the rope.",
    "options": [
      "bungee jumping",
      "surfing",
      "rock climbing",
      "rafting"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our CEO spent years _____ in the Alps before starting the company. She says reaching high peaks taught her patience and careful planning.",
    "options": [
      "surfing",
      "mountaineering",
      "skateboarding",
      "kayaking"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The beach hotel offers free _____ lessons when the ocean waves are big enough. Guests can borrow boards from the front desk.",
    "options": [
      "mountaineering",
      "rock climbing",
      "skydiving",
      "surfing"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Twelve employees paddled a rubber boat down the fast river during the company trip. The _____ trip was the highlight of the weekend.",
    "options": [
      "rafting",
      "skydiving",
      "snowboarding",
      "motocross"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Each guest paddled a small narrow boat around the quiet bay. The _____ tour lasted two hours and ended with a picnic on the beach.",
    "options": [
      "skydiving",
      "motocross",
      "kayaking",
      "snowboarding"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The motorcycle company sponsors a _____ race on a muddy dirt track every spring. Riders jump over small hills at high speed.",
    "options": [
      "windsurfing",
      "surfing",
      "kayaking",
      "motocross"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Drivers must reduce their _____ when they enter the school zone. Cameras on the street will record any car going over thirty kilometers per hour.",
    "options": [
      "speed",
      "balance",
      "courage",
      "stamina"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Standing on one leg for a minute is a simple way to test your _____. Older adults who practice it are less likely to fall.",
    "options": [
      "adrenaline",
      "balance",
      "parachute",
      "speed"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Repairing old watches requires great _____ and a lot of patience. The shop owner trained for ten years before opening his own business.",
    "options": [
      "thrill",
      "injury",
      "skill",
      "risk"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "All new employees must complete two weeks of safety _____ before they operate the machines. The course includes both classroom lessons and practice.",
    "options": [
      "training",
      "adventure",
      "thrill",
      "injury"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The company hired a _____ photographer with fifteen years of paid experience for the catalog. Her work appears in many international magazines.",
    "options": [
      "amateur",
      "professional",
      "dangerous",
      "intense"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The charity race is an _____ event open to anyone who enjoys running. No prize money is offered, and most runners just want to have fun.",
    "options": [
      "professional",
      "dangerous",
      "competitive",
      "amateur"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The smartphone market is highly _____, with dozens of brands fighting for customers. Prices keep dropping as each company tries to win more sales.",
    "options": [
      "fearless",
      "amateur",
      "competitive",
      "daring"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "It took great _____ for the new intern to point out a mistake in the director's report. Everyone admired her honesty during the meeting.",
    "options": [
      "speed",
      "courage",
      "stamina",
      "balance"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Truck drivers need a lot of _____ to stay alert on twelve-hour trips. Many exercise regularly to keep their energy up.",
    "options": [
      "courage",
      "balance",
      "adrenaline",
      "stamina"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "adrenaline": {
    "pos": "n.",
    "en_def": "a chemical your body makes when you feel excited or afraid",
    "cn_def": "腎上腺素"
  },
  "thrill": {
    "pos": "n.",
    "en_def": "a strong feeling of excitement and pleasure",
    "cn_def": "興奮；刺激感"
  },
  "adventure": {
    "pos": "n.",
    "en_def": "an exciting and unusual experience",
    "cn_def": "冒險；冒險經歷"
  },
  "risk": {
    "pos": "n.",
    "en_def": "the chance that something bad will happen",
    "cn_def": "風險；危險"
  },
  "dangerous": {
    "pos": "adj.",
    "en_def": "likely to hurt or harm someone",
    "cn_def": "危險的"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "daring": {
    "pos": "adj.",
    "en_def": "brave enough to do risky or surprising things",
    "cn_def": "大膽的；勇敢的"
  },
  "fearless": {
    "pos": "adj.",
    "en_def": "not afraid of anything",
    "cn_def": "無所畏懼的"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects your head",
    "cn_def": "安全帽；頭盔"
  },
  "protective gear": {
    "pos": "n.phr.",
    "en_def": "special clothes and equipment that keep your body safe",
    "cn_def": "防護裝備"
  },
  "skydiving": {
    "pos": "n.",
    "en_def": "the sport of jumping from a plane and falling before opening a parachute",
    "cn_def": "高空跳傘"
  },
  "parachute": {
    "pos": "n.",
    "en_def": "a large piece of cloth that helps a person or object fall slowly from the sky",
    "cn_def": "降落傘"
  },
  "bungee jumping": {
    "pos": "n.phr.",
    "en_def": "jumping from a high place while tied to a long elastic rope",
    "cn_def": "高空彈跳"
  },
  "snowboarding": {
    "pos": "n.",
    "en_def": "the sport of moving down snowy hills on one wide board",
    "cn_def": "單板滑雪"
  },
  "skateboarding": {
    "pos": "n.",
    "en_def": "the sport of riding and doing tricks on a board with small wheels",
    "cn_def": "滑板運動"
  },
  "rock climbing": {
    "pos": "n.phr.",
    "en_def": "the sport of climbing steep rock walls",
    "cn_def": "攀岩"
  },
  "mountaineering": {
    "pos": "n.",
    "en_def": "the sport of climbing high mountains",
    "cn_def": "登山運動"
  },
  "surfing": {
    "pos": "n.",
    "en_def": "the sport of riding ocean waves on a board",
    "cn_def": "衝浪"
  },
  "windsurfing": {
    "pos": "n.",
    "en_def": "the sport of moving across water on a board with a sail",
    "cn_def": "風帆衝浪"
  },
  "rafting": {
    "pos": "n.",
    "en_def": "traveling down a river in a rubber boat",
    "cn_def": "泛舟"
  },
  "kayaking": {
    "pos": "n.",
    "en_def": "moving through water in a small narrow boat with a paddle",
    "cn_def": "划獨木舟"
  },
  "motocross": {
    "pos": "n.",
    "en_def": "motorcycle racing on rough, muddy tracks",
    "cn_def": "越野機車賽"
  },
  "speed": {
    "pos": "n.",
    "en_def": "how fast something moves",
    "cn_def": "速度"
  },
  "balance": {
    "pos": "n.",
    "en_def": "the ability to stay steady without falling",
    "cn_def": "平衡；平衡感"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well, learned through practice",
    "cn_def": "技能；技巧"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of learning and practicing skills for a job or sport",
    "cn_def": "訓練；培訓"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "having the training and qualifications for a job; doing something as a paid job",
    "cn_def": "專業的；職業的"
  },
  "amateur": {
    "pos": "adj.",
    "en_def": "doing something for fun, not as a paid job",
    "cn_def": "業餘的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "involving strong competition; wanting very much to win",
    "cn_def": "競爭激烈的；好勝的"
  },
  "intense": {
    "pos": "adj.",
    "en_def": "very strong or extreme",
    "cn_def": "強烈的；激烈的"
  },
  "physically": {
    "pos": "adv.",
    "en_def": "in a way that is related to the body",
    "cn_def": "身體上地"
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in a way that is related to the mind",
    "cn_def": "心理上地；精神上地"
  },
  "courage": {
    "pos": "n.",
    "en_def": "the ability to do something that frightens you",
    "cn_def": "勇氣"
  },
  "stamina": {
    "pos": "n.",
    "en_def": "the energy to keep doing something for a long time",
    "cn_def": "耐力；體力"
  },
  "injury": {
    "pos": "n.",
    "en_def": "physical harm to the body",
    "cn_def": "傷害；受傷"
  }
};

const EXTRA_GLOSSES = {};
