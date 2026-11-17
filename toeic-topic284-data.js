// Topic 284 Quiz Data: Picnic 野餐
// Source word list: https://www.examword.com/group-topic/picnic — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T284 - Picnic 野餐",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "basket",
    "pos": "n.",
    "cn_def": "籃子",
    "en_def": "a container made of woven material for carrying things",
    "sentence": "A: Our department is organizing a picnic for the new interns on Saturday, so what should I bring if I want to help without spending too much money? B: Could you pack a large {{BLANK}} with bread, cheese, and paper plates, because the HR manager said she would buy the drinks and desserts herself?",
    "cn": "A：我們部門星期六要為新實習生舉辦野餐，如果我想幫忙又不想花太多錢，我應該帶什麼？ B：你可以準備一個大【籃子】，裝麵包、起司和紙盤嗎？因為人資經理說她會自己買飲料和甜點。"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "cn_def": "毯子；墊布",
    "en_def": "a large piece of thick cloth to sit on or keep warm",
    "sentence": "A: The grass in the park is still wet from last night's rain, so where are the guests from the Tokyo office going to sit during the outdoor lunch? B: I bought a waterproof {{BLANK}} from the camping store yesterday, and it is big enough for eight people, so nobody will have to worry about getting their clothes dirty.",
    "cn": "A：公園的草地因為昨晚的雨還是濕的，那東京辦公室來的客人在戶外午餐時要坐哪裡？ B：我昨天在露營用品店買了一條防水【墊布】，大到可以坐八個人，所以沒有人需要擔心弄髒衣服。"
  },
  {
    "word": "park",
    "pos": "n.",
    "cn_def": "公園",
    "en_def": "a public area with grass and trees where people can relax",
    "sentence": "A: Since the weather forecast says it will be sunny and warm on Friday afternoon, where do you think we should hold the team lunch for the sales department? B: Let's reserve the picnic area at the {{BLANK}} across from our office building, because it has tables, clean restrooms, and plenty of shady trees for everyone.",
    "cn": "A：既然天氣預報說星期五下午會晴朗溫暖，你覺得業務部的團隊午餐應該在哪裡舉辦？ B：我們預約辦公大樓對面【公園】的野餐區吧，因為那裡有桌子、乾淨的廁所，還有很多遮陽的大樹給大家。"
  },
  {
    "word": "lawn",
    "pos": "n.",
    "cn_def": "草坪",
    "en_def": "an area of short, cut grass",
    "sentence": "A: Before the company family day begins on Sunday morning, is there anything the maintenance crew still needs to prepare in the garden behind the main building? B: Yes, they need to cut the {{BLANK}} early on Saturday so that the children can play games safely and the caterers can set up their tables on flat, even ground.",
    "cn": "A：在星期天早上公司家庭日開始之前，維修人員還需要在主大樓後方的花園準備什麼嗎？ B：有的，他們星期六一早需要修剪【草坪】，這樣孩子們才能安全地玩遊戲，外燴人員也能在平坦的地面上擺好桌子。"
  },
  {
    "word": "sandwich",
    "pos": "n.",
    "cn_def": "三明治",
    "en_def": "two pieces of bread with food between them",
    "sentence": "A: The client meeting will probably last until one o'clock, so will we have enough time to go to a restaurant for lunch before the afternoon training session? B: Probably not, so I ordered a chicken {{BLANK}} and a bottle of water for each participant from the café downstairs, and they will deliver everything to the meeting room at noon.",
    "cn": "A：客戶會議大概會開到一點，那我們在下午的訓練課程之前還有時間去餐廳吃午餐嗎？ B：大概沒有，所以我向樓下的咖啡店幫每位參加者訂了一份雞肉【三明治】和一瓶水，他們中午會把所有東西送到會議室。"
  },
  {
    "word": "fruit",
    "pos": "n.",
    "cn_def": "水果",
    "en_def": "the sweet part of a plant that you can eat, like apples or bananas",
    "sentence": "A: Several employees have asked for healthier food at the weekly picnic, so what changes should we make to the menu that the catering company sends us? B: We could replace some of the cakes and cookies with fresh seasonal {{BLANK}} such as watermelon and grapes, which are cheaper in summer and much better for everyone's health.",
    "cn": "A：有幾位員工希望每週的野餐能有更健康的食物，我們該對外燴公司提供的菜單做哪些改變？ B：我們可以把一些蛋糕和餅乾換成新鮮的當季【水果】，例如西瓜和葡萄，夏天比較便宜，對大家的健康也好得多。"
  },
  {
    "word": "snack",
    "pos": "n.",
    "cn_def": "點心；零食",
    "en_def": "a small amount of food eaten between meals",
    "sentence": "A: The bus ride to the lakeside resort will take nearly three hours, so do you think the passengers will get hungry before we arrive for lunch? B: Yes, so I asked the travel agency to give each person a small {{BLANK}} like crackers or a granola bar, and the driver will also stop at a rest area halfway.",
    "cn": "A：搭巴士到湖畔度假村要將近三個小時，你覺得乘客在我們抵達吃午餐前會餓嗎？ B：會，所以我請旅行社給每個人一份小【點心】，像是餅乾或燕麥棒，而且司機在半路也會在休息站停車。"
  },
  {
    "word": "refreshment",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "food and drinks provided at an event",
    "sentence": "A: After the long charity walk through the city center, what will the volunteers be able to eat or drink when they reach the finish line at the riverside? B: The organizers will provide light {{BLANK}} such as cold tea, cookies, and sliced oranges under a big tent, so everyone can rest and cool down before the award ceremony starts.",
    "cn": "A：在穿越市中心的長距離慈善健走之後，志工們抵達河濱終點時可以吃喝些什麼？ B：主辦單位會在大帳篷下提供簡單的【茶點】，像是冰茶、餅乾和切好的柳橙，讓大家在頒獎典禮開始前可以休息、降溫。"
  },
  {
    "word": "juice",
    "pos": "n.",
    "cn_def": "果汁",
    "en_def": "the liquid that comes from fruit or vegetables",
    "sentence": "A: Many of the guests at Saturday's picnic will be bringing young children, so what kind of drinks should we buy besides coffee and bottled water for the adults? B: I think we should get several large bottles of orange {{BLANK}} and apple tea, because kids usually prefer sweet drinks and they are easy to pour into paper cups.",
    "cn": "A：星期六野餐的許多客人會帶年幼的孩子來，除了給大人的咖啡和瓶裝水之外，我們還應該買什麼飲料？ B：我想我們應該買幾大瓶柳橙【汁】和蘋果茶，因為小孩通常比較喜歡甜的飲料，而且很容易倒進紙杯裡。"
  },
  {
    "word": "sunshine",
    "pos": "n.",
    "cn_def": "陽光",
    "en_def": "the light and heat from the sun",
    "sentence": "A: Why did the marketing team decide to move their monthly meeting from the conference room to the rooftop garden this afternoon? B: After a whole week of cold, rainy weather, the manager wanted everyone to enjoy some warm {{BLANK}} and fresh air while they discussed the new advertising campaign for next season.",
    "cn": "A：行銷團隊為什麼決定把今天下午的月會從會議室移到屋頂花園？ B：經過一整個星期又冷又多雨的天氣後，經理希望大家在討論下一季新廣告活動時，可以享受一些溫暖的【陽光】和新鮮空氣。"
  },
  {
    "word": "breeze",
    "pos": "n.",
    "cn_def": "微風",
    "en_def": "a light, gentle wind",
    "sentence": "A: It is going to be over thirty degrees on Sunday, so won't the guests feel too hot sitting outside during the company barbecue by the beach? B: Not really, because there is usually a cool {{BLANK}} coming from the ocean in the afternoon, and we have also rented several large umbrellas to protect people from the strong sun.",
    "cn": "A：星期天會超過三十度，客人在海邊參加公司烤肉時坐在外面不會太熱嗎？ B：不太會，因為下午通常會有從海上吹來的涼爽【微風】，而且我們也租了幾把大傘，幫大家遮擋強烈的陽光。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "陰涼處；樹蔭",
    "en_def": "an area that is darker and cooler because the sun is blocked",
    "sentence": "A: The older employees and the babies may get tired in the heat, so where should we put the chairs and the baby strollers during the outdoor party? B: Let's place them in the {{BLANK}} under the big oak trees near the parking lot, where it stays cool all afternoon and people can still watch the games on the field.",
    "cn": "A：年長的員工和嬰兒可能會因為炎熱而疲累，戶外派對時我們該把椅子和嬰兒推車放在哪裡？ B：我們把它們放在停車場附近大橡樹下的【樹蔭】裡吧，那裡整個下午都很涼爽，大家也還是能看到草地上的遊戲。"
  },
  {
    "word": "outdoor",
    "pos": "adj.",
    "cn_def": "戶外的",
    "en_def": "happening or used outside, not in a building",
    "sentence": "A: Our usual hotel ballroom is fully booked for the end-of-year celebration, so do you have any other ideas for where we could hold the event this time? B: We could rent an {{BLANK}} venue at the botanical garden, which has a large covered stage, beautiful flowers, and enough space for over two hundred guests even if it rains.",
    "cn": "A：我們平常用的飯店宴會廳在年終慶祝活動時已經被訂滿了，你對這次活動可以在哪裡舉辦有其他想法嗎？ B：我們可以租植物園的【戶外】場地，那裡有一個有頂棚的大舞台、美麗的花朵，即使下雨也有足夠空間容納兩百多位賓客。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm",
    "sentence": "A: The whole design team has been working overtime for weeks to finish the new product launch, so what is the purpose of next Friday's picnic in the park? B: The director simply wants everyone to {{BLANK}} and enjoy some good food together before the next big project begins, so there will be no speeches or work discussions at all.",
    "cn": "A：整個設計團隊為了完成新產品發表已經加班好幾個星期了，那下星期五在公園野餐的目的是什麼？ B：主管只是希望大家在下一個大案子開始之前能【放鬆】一下，一起享受美食，所以完全不會有演講或工作討論。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集；集合",
    "en_def": "to come together in one place",
    "sentence": "A: Where should the tour participants meet tomorrow morning before the bus leaves for the national park, and what time do they need to be there? B: Please ask everyone to {{BLANK}} in front of the hotel lobby by seven thirty, because the driver must leave on time to avoid the heavy traffic on the highway.",
    "cn": "A：明天早上巴士出發前往國家公園之前，旅遊團員應該在哪裡碰面，幾點要到？ B：請大家七點半以前在飯店大廳前【集合】，因為司機必須準時出發，才能避開高速公路上的塞車。"
  },
  {
    "word": "barbecue",
    "pos": "n.",
    "cn_def": "烤肉；戶外烤肉餐會",
    "en_def": "an outdoor meal where food is cooked over a fire",
    "sentence": "A: What kind of event is the company planning to welcome the new branch manager from Singapore next month? B: The HR department is organizing a {{BLANK}} in the garden behind the factory, with grilled chicken, sausages, and vegetables, so that everyone can meet her in a relaxed and friendly atmosphere after work.",
    "cn": "A：公司打算舉辦什麼樣的活動，來歡迎下個月從新加坡來的新任分公司經理？ B：人資部正在籌辦一場在工廠後方花園的【烤肉餐會】，有烤雞、香腸和蔬菜，讓大家下班後可以在輕鬆友善的氣氛中認識她。"
  },
  {
    "word": "grill",
    "pos": "v.",
    "cn_def": "燒烤；烤",
    "en_def": "to cook food over direct heat",
    "sentence": "A: The chef from the catering company called in sick this morning, so who is going to cook the meat for the staff picnic this afternoon? B: Our sales manager used to work in a restaurant, so he has offered to {{BLANK}} the steaks and corn himself while the rest of us set up the tables and prepare the salads.",
    "cn": "A：外燴公司的廚師今天早上請病假，那今天下午員工野餐的肉要由誰來煮？ B：我們的業務經理以前在餐廳工作過，所以他主動提議親自【烤】牛排和玉米，其他人則負責擺桌子和準備沙拉。"
  },
  {
    "word": "cooler",
    "pos": "n.",
    "cn_def": "冰桶；保冷箱",
    "en_def": "a box that keeps food and drinks cold",
    "sentence": "A: It will be very hot at the riverside picnic area on Saturday, so how are we going to keep the drinks and the seafood from going bad? B: I will bring a large {{BLANK}} filled with ice from home, and Tom has promised to buy two more bags of ice at the convenience store on the way.",
    "cn": "A：星期六河濱野餐區會非常熱，我們要怎麼讓飲料和海鮮不會壞掉？ B：我會從家裡帶一個裝滿冰塊的大【保冷箱】，而且湯姆答應在路上的便利商店再多買兩包冰。"
  },
  {
    "word": "napkin",
    "pos": "n.",
    "cn_def": "餐巾；紙巾",
    "en_def": "a piece of cloth or paper used to clean your mouth and hands",
    "sentence": "A: The fried chicken and barbecue ribs at the picnic will be quite messy, so is there anything else we need to buy before the guests arrive? B: Yes, we should get several packs of paper {{BLANK}} and some wet towels, so that people can keep their hands clean while they eat and shake hands with the clients.",
    "cn": "A：野餐的炸雞和烤肋排會吃得滿手油膩，客人到之前我們還需要買什麼嗎？ B：有，我們應該買幾包【紙巾】和一些濕毛巾，讓大家在吃東西和跟客戶握手時都能保持雙手乾淨。"
  },
  {
    "word": "plate",
    "pos": "n.",
    "cn_def": "盤子",
    "en_def": "a flat dish for food",
    "sentence": "A: The company has promised to reduce plastic waste at all its events, so what should we use at the picnic instead of disposable dishes? B: We could ask each employee to bring their own {{BLANK}} and fork from home, and the office will provide washable cups and a large bin for any food waste.",
    "cn": "A：公司承諾在所有活動中減少塑膠垃圾，那野餐時我們應該用什麼來取代免洗餐具？ B：我們可以請每位員工從家裡帶自己的【盤子】和叉子，辦公室則會提供可清洗的杯子和一個裝廚餘的大桶子。"
  },
  {
    "word": "cup",
    "pos": "n.",
    "cn_def": "杯子",
    "en_def": "a small container used for drinking",
    "sentence": "A: The coffee machine in the break room has been broken since Monday, so how can the guests at this afternoon's meeting get something hot to drink? B: I asked the café downstairs to deliver two large pots of tea, and each guest can take a paper {{BLANK}} from the table near the door when they arrive.",
    "cn": "A：休息室的咖啡機從星期一就壞了，那今天下午開會的客人要怎麼喝到熱飲？ B：我請樓下的咖啡店送兩大壺茶過來，每位客人抵達時可以從門邊的桌子拿一個紙【杯】。"
  },
  {
    "word": "ant",
    "pos": "n.",
    "cn_def": "螞蟻",
    "en_def": "a very small insect that lives in large groups",
    "sentence": "A: Why did the picnic organizers put all the cakes and sweet drinks inside plastic boxes instead of leaving them on the table? B: Last year, a single {{BLANK}} found the sugar, and within minutes hundreds more arrived and covered the desserts, so this time they want to keep all the food tightly closed.",
    "cn": "A：野餐主辦人為什麼把所有蛋糕和甜飲料都放進塑膠盒，而不是擺在桌上？ B：去年有一隻【螞蟻】發現了糖，幾分鐘內就有好幾百隻跑來爬滿甜點，所以這次他們想把所有食物都緊緊蓋好。"
  },
  {
    "word": "insect",
    "pos": "n.",
    "cn_def": "昆蟲",
    "en_def": "a small creature with six legs, such as a fly or a bee",
    "sentence": "A: The hiking trip for the new employees goes through a forest near a lake, so is there anything special they should bring besides water and comfortable shoes? B: They should bring some {{BLANK}} repellent, because there are many mosquitoes near the water in summer, and their bites can be very itchy for several days.",
    "cn": "A：新進員工的健行活動會經過湖邊的一片森林，除了水和舒適的鞋子之外，他們還需要帶什麼特別的東西嗎？ B：他們應該帶一些防【蟲】液，因為夏天水邊有很多蚊子，被叮到可能會癢好幾天。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural features of an area, such as mountains and fields",
    "sentence": "A: Why did the travel committee choose the mountain resort instead of the beach hotel for this year's employee trip? B: Most staff members voted for the resort because the {{BLANK}} there is amazing, with green hills, waterfalls, and quiet villages, and it is also much less crowded than the beach in August.",
    "cn": "A：旅遊委員會為什麼今年的員工旅遊選擇山上的度假村，而不是海邊飯店？ B：大部分員工投票選了度假村，因為那裡的【風景】很棒，有翠綠的山丘、瀑布和寧靜的村莊，而且比八月的海邊人少多了。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖",
    "en_def": "a large area of water surrounded by land",
    "sentence": "A: Where are we going to hold the team-building activities next month, and will there be anything fun to do besides the usual training workshops? B: We have booked a cabin beside a quiet {{BLANK}} in the mountains, where everyone can go boating or fishing in the afternoon after the morning sessions are finished.",
    "cn": "A：下個月的團隊建立活動要在哪裡舉辦？除了平常的訓練工作坊之外，還有什麼好玩的嗎？ B：我們訂了山中一座寧靜【湖泊】旁的小木屋，早上的課程結束後，大家下午可以去划船或釣魚。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河流",
    "en_def": "a long natural flow of water that goes into the sea or a lake",
    "sentence": "A: The picnic location you chose looks lovely in the photos, but is it easy for guests without cars to get there on Sunday morning? B: Yes, it is just a ten-minute walk from the subway station, along a wide bike path that follows the {{BLANK}} all the way to the park entrance.",
    "cn": "A：你選的野餐地點在照片裡看起來很漂亮，但沒有車的客人星期天早上容易到得了嗎？ B：容易，從捷運站走路只要十分鐘，沿著一條順著【河流】的寬敞自行車道就能一路走到公園入口。"
  },
  {
    "word": "trail",
    "pos": "n.",
    "cn_def": "步道；小徑",
    "en_def": "a path through the countryside or a forest",
    "sentence": "A: Some of the older guests are worried that the hike after lunch will be too difficult for them, so what should I tell them? B: Please tell them that the {{BLANK}} is flat and well marked, and it only takes about forty minutes to walk from the picnic area to the waterfall and back.",
    "cn": "A：有些年長的客人擔心午餐後的健行對他們來說太難，我該怎麼跟他們說？ B：請告訴他們那條【步道】很平坦，標示也很清楚，從野餐區走到瀑布再走回來只要大約四十分鐘。"
  },
  {
    "word": "hike",
    "pos": "v.",
    "cn_def": "健行；徒步旅行",
    "en_def": "to walk a long distance in the mountains or countryside",
    "sentence": "A: What do you usually do on weekends to reduce stress after a busy week of meetings and business trips? B: I often {{BLANK}} up the mountain behind my apartment with a few coworkers on Saturday mornings, and then we have a simple picnic at the top while we enjoy the view of the city.",
    "cn": "A：在忙碌了一星期的會議和出差之後，你週末通常做什麼來減輕壓力？ B：我星期六早上常常和幾位同事【健行】爬上我公寓後面的山，然後在山頂一邊欣賞市景，一邊簡單地野餐。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家人；家庭",
    "en_def": "parents, children, and other relatives",
    "sentence": "A: Is the company picnic next Saturday only for employees, or can we invite other people to join us at the park? B: Each employee is welcome to bring their {{BLANK}}, including husbands, wives, and children, and there will be special games and prizes for the kids so that everyone has a good time together.",
    "cn": "A：下星期六的公司野餐只限員工參加，還是我們可以邀請其他人一起到公園來？ B：歡迎每位員工帶【家人】來，包括先生、太太和孩子，而且會有專為小朋友準備的遊戲和獎品，讓大家一起度過愉快的時光。"
  },
  {
    "word": "friendship",
    "pos": "n.",
    "cn_def": "友誼",
    "en_def": "a relationship between friends",
    "sentence": "A: Why does our manager organize a picnic with the staff from our partner company every spring, even though it takes a lot of time and money? B: She believes that a strong {{BLANK}} between the two teams makes communication much easier, so people solve problems faster and feel more comfortable asking each other for help.",
    "cn": "A：我們經理為什麼每年春天都要和合作公司的員工辦野餐，即使那要花很多時間和金錢？ B：她相信兩個團隊之間深厚的【友誼】能讓溝通容易得多，所以大家解決問題更快，也更自在地互相求助。"
  },
  {
    "word": "laughter",
    "pos": "n.",
    "cn_def": "笑聲",
    "en_def": "the sound of people laughing",
    "sentence": "A: How did the new interns react to the funny games that the HR team planned for the welcome picnic last weekend? B: They loved them, and you could hear {{BLANK}} all over the park as people tried to carry eggs on spoons, which really helped the shy interns feel part of the team.",
    "cn": "A：新實習生對人資團隊上週末為迎新野餐安排的有趣遊戲有什麼反應？ B：他們非常喜歡，大家試著用湯匙運蛋時，整個公園都能聽到【笑聲】，這真的讓害羞的實習生感覺自己是團隊的一份子。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "special and easy to remember",
    "sentence": "A: The company's twentieth anniversary is coming up, so how does the president want to celebrate it with the employees and their families? B: He wants to make it a {{BLANK}} day for everyone, so he is planning a big picnic by the sea with live music, fireworks, and a special gift for every guest.",
    "cn": "A：公司二十週年快到了，總裁想怎麼和員工及他們的家人一起慶祝？ B：他想讓這一天成為每個人【難忘的】日子，所以正在籌劃一場海邊的大型野餐，有現場音樂、煙火，還有給每位來賓的特別禮物。"
  },
  {
    "word": "sunburn",
    "pos": "n.",
    "cn_def": "曬傷",
    "en_def": "red, painful skin caused by too much sun",
    "sentence": "A: Why are so many people in the accounting department wearing long sleeves today, even though it is so hot outside? B: They all got a bad {{BLANK}} at the beach picnic on Sunday because they forgot to bring sunscreen, and now their arms and necks are red and painful when anything touches them.",
    "cn": "A：外面這麼熱，為什麼會計部今天有這麼多人穿長袖？ B：他們星期天在海邊野餐時忘了帶防曬乳，全都嚴重【曬傷】了，現在手臂和脖子又紅又痛，碰到任何東西都會痛。"
  },
  {
    "word": "cleanup",
    "pos": "n.",
    "cn_def": "清理；打掃",
    "en_def": "the work of making a place clean after an event",
    "sentence": "A: The picnic ends at four o'clock, but the park staff said we must return the area in the same condition as we found it, so who will do this? B: Each department will send two volunteers to help with the {{BLANK}}, collecting trash, folding tables, and sorting bottles for recycling before we leave the park.",
    "cn": "A：野餐四點結束，但公園管理員說我們必須把場地恢復成原來的樣子，那這要由誰來做？ B：每個部門會派兩位志工幫忙【清理】，在我們離開公園前撿垃圾、摺桌子，並把瓶子分類回收。"
  }
];

const MCQS = [
  {
    "q": "Linda packed a large _____ with sandwiches and fruit for the client picnic. She carried it from the car to the lakeside table.",
    "options": [
      "basket",
      "napkin",
      "shade",
      "breeze"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The grass was still wet after the morning rain. We spread a thick _____ on the ground before the guests sat down.",
    "options": [
      "plate",
      "trail",
      "blanket",
      "cup"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The team lunch will be held at the city _____ next to our office. There are picnic tables under the trees for everyone.",
    "options": [
      "river",
      "park",
      "napkin",
      "sunburn"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The gardeners will mow the _____ on Friday afternoon. The guests need short grass for the outdoor games on Saturday.",
    "options": [
      "breeze",
      "laughter",
      "snack",
      "lawn"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The café delivered a tuna _____ and a bottle of water to each trainee. Lunch was eaten quickly in the meeting room.",
    "options": [
      "blanket",
      "trail",
      "sandwich",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new menu replaces some desserts with fresh seasonal _____. Watermelon and grapes are cheap and healthy in the summer.",
    "options": [
      "fruit",
      "napkin",
      "shade",
      "cleanup"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Each passenger received a small _____ before the long bus ride. Most people chose crackers or a granola bar.",
    "options": [
      "lawn",
      "breeze",
      "sunburn",
      "snack"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Light _____ will be served in the lobby after the presentation. Guests can enjoy tea, coffee, and cookies there.",
    "options": [
      "insect",
      "refreshment",
      "trail",
      "laughter"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The children at the company picnic preferred orange _____ to bottled water. We bought four more large bottles at the store.",
    "options": [
      "juice",
      "shade",
      "trail",
      "blanket"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "After a week of heavy rain, the staff were happy to see bright _____ on Friday. They moved the meeting to the rooftop garden.",
    "options": [
      "cleanup",
      "basket",
      "sunshine",
      "insect"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "A cool sea _____ kept the guests comfortable during the beach barbecue. Nobody complained about the heat that afternoon.",
    "options": [
      "plate",
      "breeze",
      "snack",
      "trail"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The older guests sat in the _____ of a large oak tree. It stayed cool there even in the hottest part of the day.",
    "options": [
      "cooler",
      "sandwich",
      "refreshment",
      "shade"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The hotel ballroom is fully booked for the holiday party. We will hold the event at an _____ venue in the botanical garden instead.",
    "options": [
      "memorable",
      "crowded",
      "outdoor",
      "tiny"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The director wants the tired staff to _____ and rest after weeks of overtime. There will be no speeches or work talk at the picnic.",
    "options": [
      "relax",
      "grill",
      "borrow",
      "deliver"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Please ask all tour members to _____ in the hotel lobby at seven thirty. The bus will leave for the mountains on time.",
    "options": [
      "grill",
      "hike",
      "borrow",
      "gather"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The company will hold a _____ in the factory garden on Friday evening. Grilled chicken and sausages will be served to all staff.",
    "options": [
      "breeze",
      "barbecue",
      "sunburn",
      "scenery"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Our sales manager offered to _____ the steaks and corn over the charcoal fire. The rest of us prepared the salads.",
    "options": [
      "grill",
      "hike",
      "gather",
      "relax"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Tom filled a large _____ with ice to keep the drinks cold. It stayed in the shade beside the picnic table all day.",
    "options": [
      "napkin",
      "trail",
      "cooler",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The ribs were very messy, so the waiter brought each guest a paper _____. People wiped their hands before shaking hands with the clients.",
    "options": [
      "lawn",
      "napkin",
      "breeze",
      "river"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "To reduce waste, every employee brought a reusable _____ for the picnic food. Paper dishes were not provided this year.",
    "options": [
      "trail",
      "breeze",
      "sunburn",
      "plate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Hikers should bring _____ repellent because mosquitoes are common near the lake in summer. Their bites can stay itchy for days.",
    "options": [
      "river",
      "plate",
      "insect",
      "laughter"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Staff chose the mountain resort because of its beautiful _____. Green hills and waterfalls surround the hotel on every side.",
    "options": [
      "scenery",
      "napkin",
      "sunburn",
      "cleanup"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The bike path follows the _____ all the way to the park entrance. Guests can enjoy the water view as they walk.",
    "options": [
      "napkin",
      "snack",
      "laughter",
      "river"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The hiking _____ to the waterfall is flat and well marked. Even older guests can walk it in about forty minutes.",
    "options": [
      "cooler",
      "trail",
      "juice",
      "sunburn"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "On Saturday mornings, Ken and his coworkers _____ up the mountain behind their office. They have a simple picnic at the top.",
    "options": [
      "hike",
      "grill",
      "relax",
      "gather"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The two partner companies have built a strong _____ over many years. Their staff often meet for picnics and sports days.",
    "options": [
      "sunburn",
      "napkin",
      "friendship",
      "scenery"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The egg-and-spoon race filled the park with _____. Even the shyest interns were smiling and cheering by the end.",
    "options": [
      "cooler",
      "laughter",
      "plate",
      "trail"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The anniversary picnic by the sea was a truly _____ day for everyone. Guests still talk about the fireworks and live music.",
    "options": [
      "outdoor",
      "empty",
      "broken",
      "memorable"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Several accountants got a bad _____ at the beach because they forgot sunscreen. Their arms were red and painful the next day.",
    "options": [
      "breeze",
      "basket",
      "sunburn",
      "cleanup"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Two volunteers from each department will help with the _____ after the picnic. They will collect trash and fold the tables.",
    "options": [
      "cleanup",
      "scenery",
      "breeze",
      "refreshment"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "basket": {
    "pos": "n.",
    "en_def": "a container made of woven material for carrying things",
    "cn_def": "籃子"
  },
  "blanket": {
    "pos": "n.",
    "en_def": "a large piece of thick cloth to sit on or keep warm",
    "cn_def": "毯子；墊布"
  },
  "park": {
    "pos": "n.",
    "en_def": "a public area with grass and trees where people can relax",
    "cn_def": "公園"
  },
  "lawn": {
    "pos": "n.",
    "en_def": "an area of short, cut grass",
    "cn_def": "草坪"
  },
  "sandwich": {
    "pos": "n.",
    "en_def": "two pieces of bread with food between them",
    "cn_def": "三明治"
  },
  "fruit": {
    "pos": "n.",
    "en_def": "the sweet part of a plant that you can eat, like apples or bananas",
    "cn_def": "水果"
  },
  "snack": {
    "pos": "n.",
    "en_def": "a small amount of food eaten between meals",
    "cn_def": "點心；零食"
  },
  "refreshment": {
    "pos": "n.",
    "en_def": "food and drinks provided at an event",
    "cn_def": "茶點；點心飲料"
  },
  "juice": {
    "pos": "n.",
    "en_def": "the liquid that comes from fruit or vegetables",
    "cn_def": "果汁"
  },
  "sunshine": {
    "pos": "n.",
    "en_def": "the light and heat from the sun",
    "cn_def": "陽光"
  },
  "breeze": {
    "pos": "n.",
    "en_def": "a light, gentle wind",
    "cn_def": "微風"
  },
  "shade": {
    "pos": "n.",
    "en_def": "an area that is darker and cooler because the sun is blocked",
    "cn_def": "陰涼處；樹蔭"
  },
  "outdoor": {
    "pos": "adj.",
    "en_def": "happening or used outside, not in a building",
    "cn_def": "戶外的"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm",
    "cn_def": "放鬆"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place",
    "cn_def": "聚集；集合"
  },
  "barbecue": {
    "pos": "n.",
    "en_def": "an outdoor meal where food is cooked over a fire",
    "cn_def": "烤肉；戶外烤肉餐會"
  },
  "grill": {
    "pos": "v.",
    "en_def": "to cook food over direct heat",
    "cn_def": "燒烤；烤"
  },
  "cooler": {
    "pos": "n.",
    "en_def": "a box that keeps food and drinks cold",
    "cn_def": "冰桶；保冷箱"
  },
  "napkin": {
    "pos": "n.",
    "en_def": "a piece of cloth or paper used to clean your mouth and hands",
    "cn_def": "餐巾；紙巾"
  },
  "plate": {
    "pos": "n.",
    "en_def": "a flat dish for food",
    "cn_def": "盤子"
  },
  "cup": {
    "pos": "n.",
    "en_def": "a small container used for drinking",
    "cn_def": "杯子"
  },
  "ant": {
    "pos": "n.",
    "en_def": "a very small insect that lives in large groups",
    "cn_def": "螞蟻"
  },
  "insect": {
    "pos": "n.",
    "en_def": "a small creature with six legs, such as a fly or a bee",
    "cn_def": "昆蟲"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural features of an area, such as mountains and fields",
    "cn_def": "風景；景色"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a large area of water surrounded by land",
    "cn_def": "湖"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long natural flow of water that goes into the sea or a lake",
    "cn_def": "河流"
  },
  "trail": {
    "pos": "n.",
    "en_def": "a path through the countryside or a forest",
    "cn_def": "步道；小徑"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to walk a long distance in the mountains or countryside",
    "cn_def": "健行；徒步旅行"
  },
  "family": {
    "pos": "n.",
    "en_def": "parents, children, and other relatives",
    "cn_def": "家人；家庭"
  },
  "friendship": {
    "pos": "n.",
    "en_def": "a relationship between friends",
    "cn_def": "友誼"
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the sound of people laughing",
    "cn_def": "笑聲"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special and easy to remember",
    "cn_def": "難忘的"
  },
  "sunburn": {
    "pos": "n.",
    "en_def": "red, painful skin caused by too much sun",
    "cn_def": "曬傷"
  },
  "cleanup": {
    "pos": "n.",
    "en_def": "the work of making a place clean after an event",
    "cn_def": "清理；打掃"
  }
};

const EXTRA_GLOSSES = {};
