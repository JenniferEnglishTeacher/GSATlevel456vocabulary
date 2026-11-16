// Topic 253 Quiz Data: Natural Place 自然景點
// Source word list: https://www.examword.com/group-topic/natural-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T253 - Natural Place 自然景點",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "landscape",
    "pos": "n.",
    "cn_def": "風景；地貌",
    "en_def": "the view of an area of land, especially in the countryside",
    "sentence": "A: Why did the hotel chain decide to build its new resort in the countryside instead of near the airport, where it would be easier for business travelers to reach? B: The managers believe guests will pay more for rooms that look out over the green {{BLANK}}, and they also want to offer quiet weekend packages for city families.",
    "cn": "A：為什麼連鎖飯店決定把新度假村蓋在鄉間，而不是蓋在商務旅客比較容易到達的機場附近？ B：經理們認為客人會願意多付錢住能俯瞰綠色【風景】的房間，而且他們也想為城市家庭推出安靜的週末套裝行程。"
  },
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees",
    "sentence": "A: Where is the company holding this year's team-building retreat, and will we need to bring any special clothes or equipment for the activities? B: It will be at a camp in the middle of a pine {{BLANK}} about two hours from the office, so please bring hiking boots, a warm jacket, and insect spray for the evening walks.",
    "cn": "A：公司今年的團隊建立營在哪裡舉辦？活動需要帶什麼特別的衣物或裝備嗎？ B：地點在離辦公室約兩小時車程的一片松樹【森林】中央的營地，所以請帶登山靴、保暖外套和晚上散步用的防蚊液。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林",
    "en_def": "a thick tropical forest with many plants growing close together",
    "sentence": "A: Have you finished planning the photo shoot for the new outdoor clothing catalog, or are you still looking for the right location? B: We have chosen a hot, wet {{BLANK}} in Southeast Asia, because the thick green plants and colorful birds will make our rain jackets look exciting and adventurous to young customers.",
    "cn": "A：新戶外服飾型錄的拍攝計畫你完成了嗎？還是還在找合適的地點？ B：我們選了東南亞一片又熱又濕的【叢林】，因為茂密的綠色植物和色彩繽紛的鳥類會讓我們的雨衣在年輕顧客眼中看起來既刺激又充滿冒險感。"
  },
  {
    "word": "desert",
    "pos": "n.",
    "cn_def": "沙漠",
    "en_def": "a large dry area with very little rain and few plants",
    "sentence": "A: Why are the solar panels at our new factory producing so much more electricity than the ones we installed at the old site near the coast? B: The new factory is in a dry {{BLANK}} where it almost never rains, so the panels get strong sunshine for more than ten hours a day throughout the year.",
    "cn": "A：為什麼我們新工廠的太陽能板發電量比舊廠區靠海邊安裝的多那麼多？ B：新工廠位在一片幾乎從不下雨的乾燥【沙漠】中，所以太陽能板一年到頭每天都能接受十個小時以上的強烈日照。"
  },
  {
    "word": "mountain",
    "pos": "n.",
    "cn_def": "山；高山",
    "en_def": "a very high hill",
    "sentence": "A: Is the sales conference still going to be held at the ski resort next month, even though the roads were closed by snow last winter? B: Yes, but the organizers have hired buses with snow chains to carry everyone up the {{BLANK}}, and they will send a backup plan by email in case the weather becomes dangerous.",
    "cn": "A：雖然去年冬天道路因下雪而封閉，下個月的業務會議還是會在滑雪度假村舉行嗎？ B：是的，不過主辦單位已經租了裝有雪鏈的巴士載大家上【山】，而且他們會用電子郵件寄送備案，以防天氣變得危險。"
  },
  {
    "word": "hill",
    "pos": "n.",
    "cn_def": "小山；丘陵",
    "en_def": "an area of land higher than the land around it, but lower than a mountain",
    "sentence": "A: Why does the delivery driver say our new warehouse is difficult to reach, even though it is only fifteen minutes from the main highway? B: The building sits at the top of a steep {{BLANK}}, so heavy trucks must drive very slowly up the narrow road, especially on rainy days when it becomes slippery.",
    "cn": "A：為什麼送貨司機說我們的新倉庫很難到達，明明離主要公路只有十五分鐘？ B：那棟建築位在一座陡峭【小山】的頂端，所以重型卡車必須沿著狹窄的道路非常緩慢地往上開，尤其是在路面變滑的下雨天。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷；溪谷",
    "en_def": "low land between hills or mountains, often with a river",
    "sentence": "A: Where exactly is the winery that the marketing team wants to visit before they design the new wine labels for our restaurant chain? B: It is in a quiet green {{BLANK}} between two mountain ranges, where a small river runs through the vineyards and the warm afternoon sun helps the grapes grow sweet.",
    "cn": "A：行銷團隊在為我們的連鎖餐廳設計新酒標之前想參觀的那間酒莊，確切位置在哪裡？ B：它位在兩座山脈之間一個寧靜翠綠的【山谷】裡，一條小河流經葡萄園，溫暖的午後陽光讓葡萄長得香甜。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河；江",
    "en_def": "a long, natural flow of water that goes into the sea or a lake",
    "sentence": "A: Why did the city council reject the plan to build the new shopping mall on the empty land beside the old bridge? B: The land is right next to a wide {{BLANK}} that floods almost every summer after heavy rain, so the council decided the building would not be safe for shoppers or workers.",
    "cn": "A：為什麼市議會否決了在舊橋旁空地上興建新購物中心的計畫？ B：那塊地就在一條寬闊的【河】旁邊，幾乎每年夏天大雨後都會氾濫，所以議會認為那棟建築對購物者和員工都不安全。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖",
    "en_def": "a large area of water surrounded by land",
    "sentence": "A: Are the guests at our company's annual dinner going to eat inside the main hall, or will the event be held outdoors this year? B: The hotel has set up long tables on a wooden deck beside the {{BLANK}}, so everyone can enjoy the cool breeze and watch the sunset reflect on the calm water while they eat.",
    "cn": "A：我們公司年度晚宴的賓客會在主廳內用餐，還是今年活動會在戶外舉辦？ B：飯店已經在【湖】邊的木製平台上擺好長桌，讓大家用餐時可以享受涼爽的微風，欣賞夕陽倒映在平靜的水面上。"
  },
  {
    "word": "waterfall",
    "pos": "n.",
    "cn_def": "瀑布",
    "en_def": "water that falls from a high place, such as over rocks",
    "sentence": "A: What is the most popular stop on the half-day bus tour that our travel agency offers to international visitors in the national park? B: Most guests love the tall {{BLANK}}, where water drops about fifty meters into a clear pool, and they usually spend at least thirty minutes taking photos from the viewing platform.",
    "cn": "A：我們旅行社為國際遊客提供的國家公園半日巴士遊中，最受歡迎的停留點是哪裡？ B：大部分客人都很喜歡那座高聳的【瀑布】，水從約五十公尺高處落入清澈的水池，他們通常會在觀景台上拍照至少三十分鐘。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘",
    "en_def": "an area of sand or small stones next to the sea",
    "sentence": "A: Since the hotel is fully booked during the holiday weekend, where are we going to hold the welcome party for our overseas partners? B: The events team has rented a large tent on the sandy {{BLANK}} behind the hotel, so our guests can walk barefoot by the sea, enjoy grilled seafood, and listen to live music.",
    "cn": "A：既然飯店在連假週末全部客滿，我們要在哪裡為海外合作夥伴舉辦歡迎派對？ B：活動團隊已在飯店後方的【海灘】上租了一個大帳篷，讓賓客可以赤腳在海邊散步、享用燒烤海鮮並聆聽現場音樂。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸；沿海地區",
    "en_def": "the land next to the sea",
    "sentence": "A: Why is our seafood restaurant chain opening its next three branches in small towns instead of in the capital city downtown area? B: Those towns are along the east {{BLANK}}, where fishing boats bring in fresh catch every morning, so the chefs can buy high-quality fish at lower prices and serve it the same day.",
    "cn": "A：為什麼我們的海鮮連鎖餐廳接下來三家分店要開在小鎮，而不是首都的市中心？ B：那些小鎮位於東部【海岸】沿線，漁船每天早上都會帶回新鮮漁獲，所以主廚可以用較低價格買到高品質的魚並在當天供應。"
  },
  {
    "word": "island",
    "pos": "n.",
    "cn_def": "島；島嶼",
    "en_def": "a piece of land completely surrounded by water",
    "sentence": "A: How will the construction workers and building materials get to the new resort site, since there is no bridge from the mainland? B: Everything has to travel to the small {{BLANK}} by ferry, so the project manager has booked extra boats each week and added two days to the schedule in case of bad weather at sea.",
    "cn": "A：既然沒有橋通往本島，建築工人和建材要怎麼送到新度假村的工地？ B：所有東西都必須搭渡輪運到那座小【島】，所以專案經理每週都多預訂了船班，並在時程中多加了兩天，以防海上天氣不佳。"
  },
  {
    "word": "cave",
    "pos": "n.",
    "cn_def": "洞穴；山洞",
    "en_def": "a large natural hole in the side of a hill or under the ground",
    "sentence": "A: Why does the cheese factory store its most expensive products so far away from the main production building in town? B: The company ages its best cheese inside a natural {{BLANK}} in the hills, because the cool, damp air there stays at the same temperature all year and gives the cheese a rich flavor.",
    "cn": "A：為什麼起司工廠要把最昂貴的產品存放在離鎮上主要生產大樓那麼遠的地方？ B：公司把最好的起司放在山丘裡一個天然【洞穴】中熟成，因為那裡涼爽潮濕的空氣全年維持相同溫度，能讓起司風味濃郁。"
  },
  {
    "word": "cliff",
    "pos": "n.",
    "cn_def": "懸崖；峭壁",
    "en_def": "a high, steep rock face, often at the edge of the sea",
    "sentence": "A: Why did the tour company add new safety rules for the walking route near the lighthouse after last month's customer complaint? B: The path runs very close to the edge of a tall {{BLANK}} above the ocean, so guides must now keep groups behind the fence and cancel the walk when strong winds are expected.",
    "cn": "A：為什麼在上個月的客訴之後，旅遊公司為燈塔附近的步行路線增加了新的安全規定？ B：那條小路非常靠近海面上方一座高聳【懸崖】的邊緣，所以導遊現在必須讓團體待在圍欄後方，並在預計有強風時取消步行活動。"
  },
  {
    "word": "plain",
    "pos": "n.",
    "cn_def": "平原",
    "en_def": "a large area of flat land",
    "sentence": "A: Why did the logistics company choose that rural area for its huge new distribution center, even though it is far from most big cities? B: The site is on a wide, flat {{BLANK}} with cheap land and good highways in every direction, so trucks can reach customers in four different regions quickly and easily.",
    "cn": "A：為什麼物流公司選擇那個鄉間地區設立大型新配送中心，即使它離大多數大城市都很遠？ B：那個地點位在一片廣闊平坦的【平原】上，土地便宜且四面八方都有好的公路，所以卡車可以快速輕鬆地到達四個不同地區的客戶。"
  },
  {
    "word": "meadow",
    "pos": "n.",
    "cn_def": "草地；草原",
    "en_def": "a field of grass and wild flowers",
    "sentence": "A: Where should the photographers set up for the spring fashion shoot, since the garden behind the studio is too small for the whole team? B: There is a large {{BLANK}} full of wild flowers just outside town, and the farmer who owns it has agreed to let us use it for one afternoon for a small fee.",
    "cn": "A：既然攝影棚後面的花園對整個團隊來說太小，攝影師應該在哪裡布置春季時裝拍攝？ B：鎮外就有一大片長滿野花的【草地】，擁有它的農夫已同意收取少許費用讓我們使用一個下午。"
  },
  {
    "word": "swamp",
    "pos": "n.",
    "cn_def": "沼澤",
    "en_def": "an area of soft, wet land, often covered with water and plants",
    "sentence": "A: Why has the construction of the new highway been delayed for another six months, even though the budget was approved last spring? B: The engineers found that part of the route goes through a muddy {{BLANK}}, so they need extra time to drain the water and make the soft ground strong enough to support heavy traffic.",
    "cn": "A：為什麼新高速公路的建設又延後了六個月，明明預算在去年春天就核准了？ B：工程師發現部分路線會經過一片泥濘的【沼澤】，所以他們需要額外時間排水，並讓鬆軟的地面變得足以承受繁重的交通。"
  },
  {
    "word": "volcano",
    "pos": "n.",
    "cn_def": "火山",
    "en_def": "a mountain with a hole at the top that sometimes sends out hot rock and gas",
    "sentence": "A: Why were so many flights to the island canceled yesterday, and when do you think our business trip will be able to continue? B: A nearby {{BLANK}} started sending clouds of ash into the sky, so the airport closed for safety, but the airline says flights should start again tomorrow if the wind changes.",
    "cn": "A：為什麼昨天飛往那座島的班機取消了那麼多？你認為我們的出差什麼時候可以繼續？ B：附近一座【火山】開始向天空噴出灰雲，所以機場為了安全關閉了，不過航空公司說如果風向改變，明天應該就會恢復航班。"
  },
  {
    "word": "glacier",
    "pos": "n.",
    "cn_def": "冰河",
    "en_def": "a very large mass of ice that moves slowly",
    "sentence": "A: What makes the luxury cruise to the far north so expensive compared with the regular summer trips our travel agency usually sells? B: The ship sails close to a huge {{BLANK}}, so passengers can watch giant blocks of ice break off into the sea, and the trip also includes guided walks with experienced polar experts.",
    "cn": "A：和我們旅行社平常販售的一般夏季行程相比，前往極北地區的豪華郵輪之旅為什麼這麼昂貴？ B：船會駛近一座巨大的【冰河】，讓乘客看到巨大的冰塊崩落入海，而且行程還包括由經驗豐富的極地專家帶領的導覽步行。"
  },
  {
    "word": "reef",
    "pos": "n.",
    "cn_def": "礁；珊瑚礁",
    "en_def": "a line of rocks or coral near the surface of the sea",
    "sentence": "A: Why is the diving shop near our hotel offering such large discounts on its morning boat trips this month? B: The shop wants more customers to see the colorful coral {{BLANK}} before the rainy season starts, because the water is clearest now and visitors can easily spot turtles and tropical fish.",
    "cn": "A：為什麼我們飯店附近的潛水店這個月的早晨船遊行程提供這麼大的折扣？ B：店家希望在雨季開始前讓更多顧客看到色彩繽紛的珊瑚【礁】，因為現在海水最清澈，遊客可以輕易看到海龜和熱帶魚。"
  },
  {
    "word": "trail",
    "pos": "n.",
    "cn_def": "小徑；步道",
    "en_def": "a path through the countryside, often for walking",
    "sentence": "A: Do you have any suggestions for a weekend activity that our new interns can do together to get to know each other better? B: There is an easy hiking {{BLANK}} behind the science park that takes about two hours, and it ends at a small café where everyone can relax and chat over lunch.",
    "cn": "A：你有什麼週末活動的建議，讓我們的新實習生可以一起參加、彼此更加認識？ B：科學園區後面有一條簡單的健行【步道】，走完大約兩小時，終點是一間小咖啡館，大家可以在那裡放鬆並邊吃午餐邊聊天。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural features of an area, such as mountains and forests, especially when beautiful",
    "sentence": "A: Why do so many tourists choose the slow train instead of the express when they travel between the two cities on the weekend? B: The slow train goes along the coastline and through quiet farming villages, so passengers can enjoy the beautiful {{BLANK}} from large windows while they relax with snacks and coffee.",
    "cn": "A：為什麼週末在兩座城市間旅行時，那麼多遊客選擇慢車而不是快車？ B：慢車沿著海岸線行駛並穿過寧靜的農村，所以乘客可以一邊享用點心和咖啡放鬆，一邊從大窗戶欣賞美麗的【風景】。"
  },
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生動植物",
    "en_def": "animals, birds and plants that live in natural conditions",
    "sentence": "A: Why does the eco-tour company only allow small groups of eight people on each of its guided trips through the national park? B: Large groups make too much noise and scare away the local {{BLANK}}, so smaller groups give visitors a much better chance of seeing deer, rare birds, and even wild bears.",
    "cn": "A：為什麼生態旅遊公司在國家公園的每趟導覽行程只允許八人小團？ B：大團體太吵，會把當地的【野生動物】嚇跑，所以小團體能讓遊客有更好的機會看到鹿、稀有鳥類，甚至野生熊。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why did the government stop the plan to build a new golf course near the river, even though it would bring many jobs to the area? B: Experts showed that the land is an important {{BLANK}} for several kinds of rare birds, and losing it could cause those species to disappear from the region completely.",
    "cn": "A：為什麼政府叫停了在河邊興建新高爾夫球場的計畫，即使它能為當地帶來許多工作機會？ B：專家指出那片土地是好幾種稀有鳥類的重要【棲息地】，失去它可能導致這些物種從該地區完全消失。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的；遙遠的",
    "en_def": "far away from towns and other people",
    "sentence": "A: Why does it take so long for our online orders to reach customers who live in the northern villages? B: Those villages are in a {{BLANK}} area high in the mountains, so packages must be moved from big trucks to small vans, and in winter some roads are closed for days at a time.",
    "cn": "A：為什麼我們的網路訂單要那麼久才能送到住在北部村莊的顧客手上？ B：那些村莊位在高山上的【偏遠】地區，所以包裹必須從大卡車轉到小貨車，而且冬天有些道路一封就是好幾天。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "quiet and calm",
    "sentence": "A: What did the managers like most about the training center in the countryside where they spent the weekend working on next year's plan? B: They said the place was very {{BLANK}}, with no traffic noise or phone calls, so they could think clearly, walk beside the lake during breaks, and finish the plan a day early.",
    "cn": "A：經理們在鄉間訓練中心度週末擬定明年計畫，他們最喜歡那裡的什麼？ B：他們說那個地方非常【寧靜】，沒有交通噪音或電話打擾，所以他們能清楚地思考、休息時在湖邊散步，並提前一天完成了計畫。"
  },
  {
    "word": "breathtaking",
    "pos": "adj.",
    "cn_def": "令人驚嘆的；美得令人屏息的",
    "en_def": "extremely beautiful or surprising",
    "sentence": "A: Was the view from the top floor of the new mountain hotel as good as the advertisements promised when we booked the conference rooms? B: It was even better than expected, because the {{BLANK}} sight of snowy peaks and deep valleys made our guests stop talking and take out their phones to take pictures right away.",
    "cn": "A：當初我們預訂會議室時，新山區飯店頂樓的景色有廣告承諾的那麼好嗎？ B：比預期的還要好，雪峰和深谷那【美得令人屏息】的景象讓賓客們停止交談，立刻拿出手機拍照。"
  },
  {
    "word": "rugged",
    "pos": "adj.",
    "cn_def": "崎嶇的；高低不平的",
    "en_def": "rough, rocky and difficult to travel across",
    "sentence": "A: Why did the car company choose that northern area to film the television commercial for its new four-wheel-drive vehicle? B: The land there is very {{BLANK}}, with rocky hills, steep slopes and muddy roads, so it shows customers that the car can handle difficult conditions without any trouble at all.",
    "cn": "A：為什麼汽車公司選擇北部那個地區來拍攝新款四輪傳動車的電視廣告？ B：那裡的地形非常【崎嶇】，有多岩石的山丘、陡坡和泥濘的道路，所以能向顧客展示這輛車可以毫無問題地應付艱困的路況。"
  },
  {
    "word": "lush",
    "pos": "adj.",
    "cn_def": "青翠茂盛的",
    "en_def": "with lots of healthy green plants",
    "sentence": "A: Why does the resort advertise its spa as the perfect place to relax after a long and stressful week at the office? B: The spa is surrounded by {{BLANK}} green gardens with tall palm trees and bright flowers, so guests feel calm and close to nature as soon as they walk in from the parking lot.",
    "cn": "A：為什麼度假村把它的水療中心宣傳成辦公室忙碌一週後最完美的放鬆地點？ B：水療中心被【青翠茂盛】的綠色花園環繞，有高大的棕櫚樹和鮮豔的花朵，所以客人從停車場一走進來就感到平靜並親近大自然。"
  },
  {
    "word": "fertile",
    "pos": "adj.",
    "cn_def": "肥沃的",
    "en_def": "able to produce good crops or plants",
    "sentence": "A: Why are so many vegetable farms and food-processing companies located in the southern part of the country? B: The land there is very {{BLANK}} because the river leaves rich soil after each flood, so farmers can grow several crops a year and sell them to nearby factories at good prices.",
    "cn": "A：為什麼那麼多蔬菜農場和食品加工公司都位在國家的南部？ B：那裡的土地非常【肥沃】，因為河流每次氾濫後都會留下富含養分的土壤，所以農民一年可以種好幾期作物，並以好價格賣給附近的工廠。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What are the overseas guests planning to do on the free day between the trade show and their flight home? B: They want to rent bicycles and {{BLANK}} the hills and small fishing villages outside the city, because they are tired of hotels and want to see how local people really live.",
    "cn": "A：海外賓客在商展和搭機返國之間的空檔那天打算做什麼？ B：他們想租腳踏車去【探索】城外的丘陵和小漁村，因為他們已經住膩了飯店，想看看當地人真正的生活方式。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from harm",
    "sentence": "A: Why is the national park charging every visitor a new entrance fee starting next month, when it used to be free for everyone? B: The money will be used to {{BLANK}} the forests and rivers from damage, by hiring more rangers, repairing trails and cleaning up the rubbish that careless tourists leave behind.",
    "cn": "A：為什麼國家公園從下個月起向每位遊客收取新的入場費，以前不是對所有人都免費嗎？ B：這筆錢將用來【保護】森林和河流免受破壞，包括聘請更多巡山員、修復步道，以及清理粗心遊客留下的垃圾。"
  },
  {
    "word": "conserve",
    "pos": "v.",
    "cn_def": "節約；保育",
    "en_def": "to use something carefully so that it is not wasted; to keep nature safe",
    "sentence": "A: Why have the hotels in the island resort area asked all guests to take shorter showers during the summer months this year? B: There has been very little rain, so the hotels must {{BLANK}} water carefully until the reservoir fills up again, or the whole island could face serious shortages in August.",
    "cn": "A：為什麼島上度假區的飯店今年夏季月份要求所有客人縮短淋浴時間？ B：今年雨量非常少，所以飯店必須小心【節約】用水，直到水庫再度蓄滿，否則整座島嶼在八月可能面臨嚴重缺水。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；維護",
    "en_def": "to keep something in its original state, safe from damage or change",
    "sentence": "A: Why did the city refuse to sell the old forest on the edge of town to the developer who wanted to build luxury apartments there? B: The city council voted to {{BLANK}} the area as a natural park, so future generations can still enjoy its old trees, clean streams and quiet walking paths.",
    "cn": "A：為什麼市政府拒絕把鎮郊那片古老的森林賣給想在那裡蓋豪華公寓的開發商？ B：市議會投票決定把該地區【保存】為自然公園，讓後代子孫仍能享受那裡的老樹、清澈的溪流和寧靜的步道。"
  },
  {
    "word": "pollute",
    "pos": "v.",
    "cn_def": "汙染",
    "en_def": "to make air, water or land dirty and harmful",
    "sentence": "A: Why did the government fine the paper factory so heavily last week, and will the company be allowed to keep operating? B: Inspectors found that the factory was sending chemicals into the river and starting to {{BLANK}} the drinking water for nearby towns, so it must install new filters before it can open again.",
    "cn": "A：為什麼政府上週對造紙廠開出那麼重的罰款？公司還能繼續營運嗎？ B：稽查人員發現工廠將化學物質排入河中，並開始【汙染】附近城鎮的飲用水，所以它必須安裝新的過濾設備才能重新開工。"
  },
  {
    "word": "erosion",
    "pos": "n.",
    "cn_def": "侵蝕",
    "en_def": "the slow damage of land or rock by wind, water or ice",
    "sentence": "A: Why is the beach hotel spending so much money on building a stone wall along the shore this year? B: Strong waves and storms have caused serious {{BLANK}} of the sand in front of the hotel, and the managers are worried that the swimming pool area could slide into the sea within a few years.",
    "cn": "A：為什麼海灘飯店今年要花那麼多錢沿著海岸興建石牆？ B：強浪和暴風雨造成飯店前方沙灘嚴重的【侵蝕】，經理們擔心游泳池區域在幾年內可能會滑落海中。"
  }
];

const MCQS = [
  {
    "q": "The new hotel was designed with huge glass walls. Guests can admire the rolling green _____ from every room.",
    "options": [
      "landscape",
      "glacier",
      "habitat",
      "erosion"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The paper company plants new trees every year. It has promised to replace every _____ that it cuts down for its products.",
    "options": [
      "desert",
      "beach",
      "forest",
      "cliff"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The solar farm receives strong sunshine almost every day. It is located in a dry _____ where it rarely rains.",
    "options": [
      "lake",
      "desert",
      "reef",
      "glacier"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The ski resort will open earlier than usual this winter. Heavy snow has already covered the top of the _____.",
    "options": [
      "beach",
      "reef",
      "swamp",
      "mountain"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The farming village sits between two tall mountains. A small river runs through the middle of the green _____.",
    "options": [
      "cliff",
      "glacier",
      "valley",
      "volcano"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Cargo boats carry goods from the port to inland cities. They travel slowly up the _____ for about three days.",
    "options": [
      "river",
      "desert",
      "cliff",
      "meadow"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Employees often eat lunch on the benches outside the office. They enjoy watching ducks swim across the calm _____.",
    "options": [
      "cliff",
      "desert",
      "volcano",
      "lake"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The hiking group could hear the sound of rushing water. Soon they saw a tall _____ pouring down the rocks.",
    "options": [
      "desert",
      "waterfall",
      "meadow",
      "habitat"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The resort offers free umbrellas and chairs to all guests. Visitors can relax on the sandy _____ just steps from their rooms.",
    "options": [
      "beach",
      "glacier",
      "volcano",
      "forest"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The new highway will run along the eastern _____ of the country. Drivers will enjoy views of the ocean for most of the trip.",
    "options": [
      "cave",
      "volcano",
      "coast",
      "habitat"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "No bridge connects the small _____ to the mainland. Visitors must take a ferry that leaves the harbor twice a day.",
    "options": [
      "valley",
      "island",
      "desert",
      "cliff"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The lighthouse stands at the edge of a tall _____ above the sea. A strong fence keeps visitors from falling onto the rocks below.",
    "options": [
      "meadow",
      "lake",
      "valley",
      "cliff"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Flights were canceled after the _____ began sending ash high into the sky. Airport officials said the air was not safe for planes.",
    "options": [
      "glacier",
      "reef",
      "volcano",
      "meadow"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The cruise ship sailed close to a huge _____ in the far north. Passengers watched large blocks of ice break off into the sea.",
    "options": [
      "glacier",
      "desert",
      "swamp",
      "valley"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The park has marked a new hiking _____ for beginners. It takes about an hour and has signs every few hundred meters.",
    "options": [
      "habitat",
      "glacier",
      "erosion",
      "trail"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Many passengers choose the slow coastal train for their vacation. They enjoy the beautiful _____ through the large windows.",
    "options": [
      "erosion",
      "scenery",
      "habitat",
      "reef"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Visitors to the national park must keep their voices low. Loud noise can scare away the local _____, such as deer and rare birds.",
    "options": [
      "wildlife",
      "scenery",
      "landscape",
      "erosion"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The wetland is an important _____ for many kinds of birds. Building a factory there would force the birds to leave.",
    "options": [
      "erosion",
      "scenery",
      "habitat",
      "glacier"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The company delivers packages to _____ mountain villages only once a week. The roads there are long, narrow, and often closed in winter.",
    "options": [
      "fertile",
      "remote",
      "lush",
      "breathtaking"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The retreat center has no televisions and no traffic nearby. Guests say it is the most _____ place they have ever stayed.",
    "options": [
      "fertile",
      "rugged",
      "lush",
      "peaceful"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "From the top floor of the tower, visitors enjoy a _____ view of the whole city. Many people stay for an hour taking photos.",
    "options": [
      "fertile",
      "rugged",
      "breathtaking",
      "lush"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The new four-wheel-drive truck was tested on _____ mountain roads. It handled the rocks and steep slopes without any problems.",
    "options": [
      "rugged",
      "peaceful",
      "fertile",
      "lush"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "After the rainy season, the hills are covered with _____ green grass. Farmers let their cattle feed there all summer.",
    "options": [
      "remote",
      "rugged",
      "breathtaking",
      "lush"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The river leaves rich soil on the farmland every spring. As a result, the _____ land produces three crops a year.",
    "options": [
      "remote",
      "fertile",
      "peaceful",
      "breathtaking"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The tour gives guests a free afternoon in the old town. They can _____ its narrow streets and small shops on foot.",
    "options": [
      "explore",
      "pollute",
      "conserve",
      "protect"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The company gives every worker a hard hat and gloves. This equipment helps _____ them from injuries on the building site.",
    "options": [
      "explore",
      "pollute",
      "protect",
      "conserve"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Please turn off the lights when you leave the meeting room. We are trying to _____ energy and reduce our monthly bills.",
    "options": [
      "explore",
      "conserve",
      "pollute",
      "protect"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The museum keeps old letters in special glass cases. This helps _____ the paper so it will not turn yellow or fall apart.",
    "options": [
      "explore",
      "pollute",
      "abandon",
      "preserve"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The factory was fined for dumping chemicals into the river. Officials said the waste could _____ drinking water for thousands of people.",
    "options": [
      "explore",
      "conserve",
      "pollute",
      "preserve"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Strong waves have washed away much of the sand on the beach. The hotel built a stone wall to stop further _____.",
    "options": [
      "erosion",
      "habitat",
      "scenery",
      "wildlife"
    ],
    "answer": 0,
    "vocabIndex": 36
  }
];

const LOOKUP = {
  "landscape": {
    "pos": "n.",
    "en_def": "the view of an area of land, especially in the countryside",
    "cn_def": "風景；地貌"
  },
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees",
    "cn_def": "森林"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest with many plants growing close together",
    "cn_def": "叢林"
  },
  "desert": {
    "pos": "n.",
    "en_def": "a large dry area with very little rain and few plants",
    "cn_def": "沙漠"
  },
  "mountain": {
    "pos": "n.",
    "en_def": "a very high hill",
    "cn_def": "山；高山"
  },
  "hill": {
    "pos": "n.",
    "en_def": "an area of land higher than the land around it, but lower than a mountain",
    "cn_def": "小山；丘陵"
  },
  "valley": {
    "pos": "n.",
    "en_def": "low land between hills or mountains, often with a river",
    "cn_def": "山谷；溪谷"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long, natural flow of water that goes into the sea or a lake",
    "cn_def": "河；江"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a large area of water surrounded by land",
    "cn_def": "湖"
  },
  "waterfall": {
    "pos": "n.",
    "en_def": "water that falls from a high place, such as over rocks",
    "cn_def": "瀑布"
  },
  "beach": {
    "pos": "n.",
    "en_def": "an area of sand or small stones next to the sea",
    "cn_def": "海灘"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸；沿海地區"
  },
  "island": {
    "pos": "n.",
    "en_def": "a piece of land completely surrounded by water",
    "cn_def": "島；島嶼"
  },
  "cave": {
    "pos": "n.",
    "en_def": "a large natural hole in the side of a hill or under the ground",
    "cn_def": "洞穴；山洞"
  },
  "cliff": {
    "pos": "n.",
    "en_def": "a high, steep rock face, often at the edge of the sea",
    "cn_def": "懸崖；峭壁"
  },
  "plain": {
    "pos": "n.",
    "en_def": "a large area of flat land",
    "cn_def": "平原"
  },
  "meadow": {
    "pos": "n.",
    "en_def": "a field of grass and wild flowers",
    "cn_def": "草地；草原"
  },
  "swamp": {
    "pos": "n.",
    "en_def": "an area of soft, wet land, often covered with water and plants",
    "cn_def": "沼澤"
  },
  "volcano": {
    "pos": "n.",
    "en_def": "a mountain with a hole at the top that sometimes sends out hot rock and gas",
    "cn_def": "火山"
  },
  "glacier": {
    "pos": "n.",
    "en_def": "a very large mass of ice that moves slowly",
    "cn_def": "冰河"
  },
  "reef": {
    "pos": "n.",
    "en_def": "a line of rocks or coral near the surface of the sea",
    "cn_def": "礁；珊瑚礁"
  },
  "trail": {
    "pos": "n.",
    "en_def": "a path through the countryside, often for walking",
    "cn_def": "小徑；步道"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural features of an area, such as mountains and forests, especially when beautiful",
    "cn_def": "風景；景色"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "animals, birds and plants that live in natural conditions",
    "cn_def": "野生動植物"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns and other people",
    "cn_def": "偏遠的；遙遠的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "breathtaking": {
    "pos": "adj.",
    "en_def": "extremely beautiful or surprising",
    "cn_def": "令人驚嘆的；美得令人屏息的"
  },
  "rugged": {
    "pos": "adj.",
    "en_def": "rough, rocky and difficult to travel across",
    "cn_def": "崎嶇的；高低不平的"
  },
  "lush": {
    "pos": "adj.",
    "en_def": "with lots of healthy green plants",
    "cn_def": "青翠茂盛的"
  },
  "fertile": {
    "pos": "adj.",
    "en_def": "able to produce good crops or plants",
    "cn_def": "肥沃的"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe from harm",
    "cn_def": "保護"
  },
  "conserve": {
    "pos": "v.",
    "en_def": "to use something carefully so that it is not wasted; to keep nature safe",
    "cn_def": "節約；保育"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in its original state, safe from damage or change",
    "cn_def": "保存；維護"
  },
  "pollute": {
    "pos": "v.",
    "en_def": "to make air, water or land dirty and harmful",
    "cn_def": "汙染"
  },
  "erosion": {
    "pos": "n.",
    "en_def": "the slow damage of land or rock by wind, water or ice",
    "cn_def": "侵蝕"
  }
};

const EXTRA_GLOSSES = {};
