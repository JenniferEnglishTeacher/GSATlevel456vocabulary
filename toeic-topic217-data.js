// Topic 217 Quiz Data: Leisure 休閒
// Source word list: https://www.examword.com/group-topic/leisure — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T217 - Leisure 休閒",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "seldom",
    "pos": "adv.",
    "cn_def": "很少；不常",
    "en_def": "rarely; not often",
    "sentence": "A: You work late almost every night, so how often do you actually get to go hiking or swimming with your family on weekends? B: To be honest, I {{BLANK}} have free time these days, because our team is preparing for a big product launch, but I hope things will calm down next month.",
    "cn": "A：你幾乎每晚都加班，那你週末到底多久能和家人去健行或游泳一次？ B：老實說，我最近【很少】有空閒時間，因為我們團隊正在準備一場大型產品發表會，但我希望下個月情況會緩和下來。"
  },
  {
    "word": "day off",
    "pos": "n.phr.",
    "cn_def": "休假日；休息日",
    "en_def": "a day when you do not have to go to work",
    "sentence": "A: You look really tired after working through the whole weekend on the sales report, so why don't you ask the manager for some rest? B: I already did, and she kindly gave me a {{BLANK}} on Friday, so I plan to sleep late, visit my parents, and watch a movie in the evening.",
    "cn": "A：你整個週末都在趕銷售報告，看起來真的很累，為什麼不跟經理請求休息一下呢？ B：我已經問過了，她很好心地讓我週五【休假】一天，所以我打算睡晚一點、去探望父母，晚上再看場電影。"
  },
  {
    "word": "at once",
    "pos": "phr.",
    "cn_def": "立刻；馬上",
    "en_def": "immediately; right now",
    "sentence": "A: The hotel receptionist just called to say that the last two seats on the sunset boat tour are still available, but only until noon today. B: Then let's book them {{BLANK}}, because we have been talking about this trip for months, and I don't want to miss the chance to relax on the water.",
    "cn": "A：飯店櫃檯人員剛打電話來說，夕陽遊船行程還剩最後兩個位子，但只保留到今天中午。 B：那我們【馬上】訂吧，因為這趟行程我們已經討論好幾個月了，我不想錯過在水上放鬆的機會。"
  },
  {
    "word": "make the most of",
    "pos": "v.phr.",
    "cn_def": "充分利用",
    "en_def": "use something as well as possible",
    "sentence": "A: The conference finishes at three on Thursday, and our flight back home doesn't leave until Saturday morning, so what should we do with the extra time? B: Let's {{BLANK}} our short stay in the city by visiting the famous art museum, trying some local food, and walking along the river at night.",
    "cn": "A：研討會週四下午三點結束，而我們回程的班機要到週六早上才起飛，多出來的時間該做什麼呢？ B：我們就【充分利用】在這座城市的短暫停留，去參觀那間有名的美術館、品嚐當地美食，晚上再沿著河邊散步吧。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "精神上；心理上",
    "en_def": "in a way that is related to the mind",
    "sentence": "A: Why do you go to the yoga class every Wednesday evening, even when you have so many emails to answer after a long day at the office? B: It helps me relax both physically and {{BLANK}}, because after an hour of slow breathing and stretching, I can stop worrying about work and sleep much better.",
    "cn": "A：為什麼即使在辦公室忙了一整天、還有一大堆電子郵件要回，你每週三晚上還是去上瑜伽課？ B：因為它能讓我在身體上和【精神上】都放鬆，經過一小時緩慢的呼吸和伸展後，我就能不再擔心工作，也睡得好多了。"
  },
  {
    "word": "physically",
    "pos": "adv.",
    "cn_def": "身體上",
    "en_def": "in a way that is related to the body",
    "sentence": "A: Our department is planning a team-building weekend in the mountains next month, but I'm not sure whether everyone will be able to join the long hike. B: The trail is quite steep, so only people who are {{BLANK}} fit should do the full route, while the others can enjoy a shorter walk around the lake.",
    "cn": "A：我們部門下個月計畫在山上舉辦團隊建立週末，但我不確定是否每個人都能參加長程健行。 B：那條步道相當陡，所以只有【身體】狀況好的人才應該走完全程，其他人可以在湖邊享受較短的散步。"
  },
  {
    "word": "backbreaking",
    "pos": "adj.",
    "cn_def": "極其繁重的；累死人的",
    "en_def": "(of physical work) very hard and tiring",
    "sentence": "A: How was your weekend at your uncle's farm, and did you get a chance to relax in the countryside as you had planned? B: Not really, because he asked me to help carry heavy bags of rice and dig in the garden all day, so it was {{BLANK}} work instead of a peaceful holiday.",
    "cn": "A：你在叔叔農場的週末過得如何？有像你計畫的那樣在鄉下好好放鬆嗎？ B：並沒有，因為他整天叫我幫忙搬沉重的米袋、在菜園裡挖土，所以那根本是【極其繁重的】工作，而不是寧靜的假期。"
  },
  {
    "word": "recharge your batteries",
    "pos": "v.phr.",
    "cn_def": "養精蓄銳；恢復精力",
    "en_def": "rest and relax so that you have energy again",
    "sentence": "A: You have been working on the new client project for six weeks without a break, so are you planning to take some time off soon? B: Yes, I'm going to spend three quiet days at a hot spring resort to {{BLANK}} before the next busy season starts in December.",
    "cn": "A：你已經連續六週不休息地處理新客戶的專案，最近有打算請幾天假嗎？ B：有，我要去溫泉度假村安靜地待三天來【養精蓄銳】，迎接十二月開始的下一個旺季。"
  },
  {
    "word": "hit the road",
    "pos": "v.phr.",
    "cn_def": "上路；出發",
    "en_def": "start a journey; leave",
    "sentence": "A: The weather report says there will be heavy traffic on the highway tomorrow because of the long holiday weekend, so when should we leave for the beach? B: I think we should {{BLANK}} at six in the morning, before most families wake up, so that we can arrive early and find a good parking spot.",
    "cn": "A：氣象報告說明天因為連假，高速公路會大塞車，那我們應該什麼時候出發去海邊？ B：我想我們應該早上六點就【上路】，趁大多數家庭還沒起床，這樣就能早點到，找到好的停車位。"
  },
  {
    "word": "buckle",
    "pos": "v.",
    "cn_def": "扣上（扣環）；繫緊",
    "en_def": "fasten something with a metal or plastic clip",
    "sentence": "A: The amusement park ride is about to start, and the staff member is checking every seat, but my belt feels a little loose. B: Please {{BLANK}} your safety belt tightly and pull it once to make sure it is secure, because the roller coaster goes very fast and turns upside down twice.",
    "cn": "A：遊樂園的設施快要開始了，工作人員正在檢查每個座位，但我的安全帶感覺有點鬆。 B：請把安全帶【扣】緊，再拉一下確認牢固，因為雲霄飛車速度很快，而且會倒轉兩次。"
  },
  {
    "word": "thrilled",
    "pos": "adj.",
    "cn_def": "非常興奮的；極為高興的",
    "en_def": "very happy and excited",
    "sentence": "A: Did your team hear the news that the company is giving everyone a free weekend trip to a seaside resort as a reward for the record sales? B: Yes, we were all {{BLANK}} when the manager announced it at the meeting, and some people immediately started planning which restaurants and beaches they want to visit.",
    "cn": "A：你們團隊聽說了嗎？公司要招待每個人到海濱度假村免費度週末，作為創下銷售紀錄的獎勵。 B：聽說了，經理在會議上宣布時我們都【非常興奮】，有些人馬上就開始計畫要去哪些餐廳和海灘。"
  },
  {
    "word": "concrete",
    "pos": "adj.",
    "cn_def": "具體的；明確的",
    "en_def": "definite and clear, not general",
    "sentence": "A: Everyone in the office keeps saying we should organize a staff picnic this spring, but nobody has actually done anything about it yet. B: You're right, so let's make a {{BLANK}} plan today with a date, a park, a budget, and a list of people who will bring food and games.",
    "cn": "A：辦公室裡每個人都一直說今年春天應該辦員工野餐，但到現在還沒有人真正採取行動。 B：你說得對，那我們今天就訂出一個【具體的】計畫，包含日期、公園、預算，以及負責帶食物和遊戲的人員名單。"
  },
  {
    "word": "countryman",
    "pos": "n.",
    "cn_def": "同胞；同鄉",
    "en_def": "a person from the same country as you",
    "sentence": "A: While you were traveling alone in Spain last summer, did you ever feel lonely or have trouble ordering food in restaurants? B: Sometimes, but on the third day I met a friendly {{BLANK}} from Taipei at a café, and we spent the afternoon exploring old churches and chatting in Chinese.",
    "cn": "A：你去年夏天獨自在西班牙旅行時，有沒有覺得寂寞，或在餐廳點餐遇到困難？ B：有時候會，但第三天我在一家咖啡館遇到一位來自台北、很友善的【同胞】，我們一起花了一個下午參觀古老的教堂，還用中文聊天。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假定；以為",
    "en_def": "think that something is true without proof",
    "sentence": "A: Why didn't you bring your swimsuit to the hotel, even though the brochure clearly shows a large outdoor pool next to the garden? B: Well, I {{BLANK}} that most outdoor pools close in winter because the weather is quite cold, but the receptionist just told me the water here is heated and open until ten.",
    "cn": "A：手冊上明明有一座位於花園旁的大型戶外泳池，你為什麼沒帶泳衣來飯店？ B：嗯，我【以為】大多數戶外泳池冬天會因為天氣很冷而關閉，但櫃檯人員剛告訴我這裡的水有加溫，而且開放到十點。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假設；設想",
    "en_def": "something you believe is true without proof",
    "sentence": "A: Many of our customers book the cheapest holiday package because they think it includes meals, so why do they get upset when they arrive? B: Their {{BLANK}} is wrong, because the basic package only covers the flight and the hotel room, so we should explain this more clearly on our website.",
    "cn": "A：很多客戶訂最便宜的假期套裝行程，因為他們以為有含餐，那為什麼他們抵達後會不高興呢？ B：他們的【假設】是錯的，因為基本套裝行程只包含機票和飯店房間，所以我們應該在網站上說明得更清楚。"
  },
  {
    "word": "eat out",
    "pos": "v.phr.",
    "cn_def": "外出用餐；上館子",
    "en_def": "eat in a restaurant instead of at home",
    "sentence": "A: Since both of us are too tired to cook after this long week of meetings and deadlines, what would you like to do for dinner tonight? B: Let's {{BLANK}} at that new Italian place near the station, because my coworker said the pasta is excellent and the prices are quite reasonable.",
    "cn": "A：既然我們經過這漫長一週的會議和截止期限後都累得不想煮飯，今晚晚餐你想怎麼解決？ B：我們去車站附近那家新開的義大利餐廳【外出用餐】吧，我同事說那裡的義大利麵很棒，價格也很合理。"
  },
  {
    "word": "indulge",
    "pos": "v.",
    "cn_def": "盡情享受；縱容（自己）",
    "en_def": "allow yourself to enjoy something special",
    "sentence": "A: You have been saving money for months and finally finished that difficult project, so how are you going to celebrate this weekend? B: I'm going to {{BLANK}} myself with a full spa day at the hotel downtown, including a massage, a facial, and a long afternoon tea in the garden.",
    "cn": "A：你已經存了好幾個月的錢，終於也完成了那個困難的專案，這個週末打算怎麼慶祝？ B：我要在市中心的飯店【盡情享受】一整天的水療，包括按摩、做臉，還有在花園裡悠閒地喝下午茶。"
  },
  {
    "word": "impose",
    "pos": "v.",
    "cn_def": "強制實行；施加",
    "en_def": "force people to accept a rule, cost, or limit",
    "sentence": "A: Why are there fewer tourists at the national park this year, even though the scenery is still as beautiful as before? B: The government decided to {{BLANK}} a daily limit on visitors and a new entrance fee to protect the forest, so people now have to book tickets online in advance.",
    "cn": "A：為什麼今年國家公園的遊客變少了，明明風景還是和以前一樣美？ B：政府決定【實施】每日遊客人數上限並收取新的入園費以保護森林，所以現在大家必須事先上網訂票。"
  },
  {
    "word": "role",
    "pos": "n.",
    "cn_def": "角色；作用",
    "en_def": "the job or part someone has in a situation",
    "sentence": "A: Our company is starting a weekend volunteer program at the local community center, and I heard you signed up to help with the activities. B: Yes, my {{BLANK}} is to organize the board games and arts and crafts for the children, while other colleagues will cook lunch and clean the garden.",
    "cn": "A：我們公司要在當地社區中心開辦週末志工計畫，我聽說你報名協助活動了。 B：對，我的【角色】是為孩子們安排桌遊和美勞活動，其他同事則負責煮午餐和清理花園。"
  },
  {
    "word": "interfere",
    "pos": "v.",
    "cn_def": "干擾；妨礙",
    "en_def": "get involved in something in a way that causes problems",
    "sentence": "A: You used to play tennis three evenings a week, so why did you suddenly stop going to the sports club last month? B: My new job requires a lot of overtime, and I don't want my hobbies to {{BLANK}} with my work, so I only play on Sunday mornings now.",
    "cn": "A：你以前每週有三個晚上打網球，為什麼上個月突然不去運動俱樂部了？ B：我的新工作需要常常加班，我不希望我的嗜好【干擾】到工作，所以現在只在週日早上打球。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力；可能性",
    "en_def": "the possibility of developing or being successful in the future",
    "sentence": "A: Why is the city council spending so much money to build a new bike path and outdoor market along the old harbor? B: They believe the area has great {{BLANK}} for tourism and leisure, and they hope it will attract more visitors, create jobs, and give local families a nice place to relax.",
    "cn": "A：為什麼市議會要花這麼多錢沿著舊港口興建新的自行車道和戶外市集？ B：他們認為這個區域在觀光和休閒方面有很大的【潛力】，希望能吸引更多遊客、創造工作機會，並讓當地家庭有個放鬆的好地方。"
  },
  {
    "word": "distracted",
    "pos": "adj.",
    "cn_def": "分心的",
    "en_def": "unable to focus because something else takes your attention",
    "sentence": "A: Why did you stop reading in the café near our office and decide to go to the quiet library instead? B: I kept getting {{BLANK}} by the loud music and the people talking on their phones next to me, so I couldn't enjoy my novel at all during my lunch break.",
    "cn": "A：你為什麼不再到我們辦公室附近的咖啡館看書，改去安靜的圖書館了？ B：因為大聲的音樂和旁邊講電話的人一直讓我【分心】，所以午休時我根本沒辦法好好享受我的小說。"
  },
  {
    "word": "digital revolution",
    "pos": "n.phr.",
    "cn_def": "數位革命",
    "en_def": "the big change in daily life caused by computers and the internet",
    "sentence": "A: Why do so many young people spend their free time watching videos and playing online games instead of going to the cinema like we used to? B: The {{BLANK}} has completely changed how we spend our leisure time, because now everyone can watch movies, chat with friends, and shop online with just a smartphone.",
    "cn": "A：為什麼這麼多年輕人把空閒時間花在看影片和玩線上遊戲，而不是像我們以前那樣去電影院？ B：【數位革命】徹底改變了我們度過休閒時光的方式，因為現在每個人只要一支智慧型手機就能看電影、和朋友聊天、上網購物。"
  },
  {
    "word": "absorbed",
    "pos": "adj.",
    "cn_def": "全神貫注的；專心的",
    "en_def": "giving all your attention to something",
    "sentence": "A: I called you three times last night to ask about the meeting schedule, but you didn't answer, so was everything all right? B: Sorry, I was so {{BLANK}} in a new mystery novel that I didn't hear my phone ringing, and when I finally looked up, it was already midnight.",
    "cn": "A：我昨晚打了三次電話問你會議時程，但你都沒接，一切都還好嗎？ B：抱歉，我太【專心】看一本新的推理小說，沒聽到手機響，等我終於抬起頭時，已經是半夜了。"
  },
  {
    "word": "tremendous",
    "pos": "adj.",
    "cn_def": "巨大的；極大的",
    "en_def": "very great in amount, size, or level",
    "sentence": "A: How was the outdoor music festival that our company sponsored in the city park last weekend, and did many people come? B: It was a {{BLANK}} success, because more than twenty thousand visitors attended over two days, and many local restaurants said their sales doubled during the event.",
    "cn": "A：上週末我們公司在市立公園贊助的戶外音樂節辦得如何？有很多人來嗎？ B：那是一次【巨大的】成功，兩天內有超過兩萬名遊客參加，許多當地餐廳都說活動期間營業額翻倍。"
  },
  {
    "word": "precious",
    "pos": "adj.",
    "cn_def": "珍貴的；寶貴的",
    "en_def": "very valuable and important",
    "sentence": "A: Why did you turn down the offer to work overtime on weekends, even though the extra pay would help you save for a new car? B: My free time with my children is too {{BLANK}} to give up, because they are growing so fast, and I want to take them to the park and the zoo while they are young.",
    "cn": "A：即使額外的加班費可以幫你存錢買新車，你為什麼還是拒絕週末加班？ B：和孩子相處的空閒時間太【珍貴】了，不能放棄，因為他們長得好快，我想趁他們還小的時候帶他們去公園和動物園。"
  },
  {
    "word": "bookworm",
    "pos": "n.",
    "cn_def": "書蟲；愛讀書的人",
    "en_def": "a person who loves reading books",
    "sentence": "A: What kind of gift should we buy for Linda, since she is retiring next month after working in the accounting department for twenty years? B: She's a real {{BLANK}} who spends every weekend at the library, so a gift card for the big bookstore downtown would be a perfect choice.",
    "cn": "A：琳達在會計部工作了二十年，下個月就要退休了，我們應該買什麼禮物給她？ B：她是個十足的【書蟲】，每個週末都待在圖書館，所以市中心那家大書店的禮物卡會是完美的選擇。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；緩解",
    "en_def": "make pain, worry, or stress less",
    "sentence": "A: You seem much calmer these days, even though the office has been extremely busy since the new manager arrived in September. B: I started swimming at the gym before work, and it really helps {{BLANK}} my stress, so I feel more relaxed when I sit down at my desk in the morning.",
    "cn": "A：雖然自從新經理九月上任後辦公室變得非常忙碌，你最近看起來卻平靜多了。 B：我開始在上班前去健身房游泳，這真的有助於【減輕】我的壓力，所以早上坐到辦公桌前時感覺放鬆多了。"
  },
  {
    "word": "expand",
    "pos": "v.",
    "cn_def": "擴大；擴展",
    "en_def": "become bigger or make something bigger",
    "sentence": "A: The fitness center on the first floor of our building is always crowded after work, so is the management planning to do anything about it? B: Yes, they plan to {{BLANK}} the gym next year by adding a yoga room and a small swimming pool, so employees will have more space to exercise.",
    "cn": "A：我們大樓一樓的健身中心下班後總是很擁擠，管理處有打算處理嗎？ B：有，他們計畫明年【擴建】健身房，增加一間瑜伽教室和一座小型游泳池，讓員工有更多空間運動。"
  },
  {
    "word": "numerous",
    "pos": "adj.",
    "cn_def": "許多的；眾多的",
    "en_def": "very many",
    "sentence": "A: Why did you choose this small town by the lake for your summer vacation instead of a big city with famous shopping malls? B: There are {{BLANK}} outdoor activities here, such as kayaking, fishing, cycling, and camping, so my family never gets bored, even if we stay for two whole weeks.",
    "cn": "A：你為什麼選擇湖邊這個小鎮度暑假，而不是去有知名購物中心的大城市？ B：這裡有【許多】戶外活動，像是划獨木舟、釣魚、騎自行車和露營，所以即使我們整整待兩週，我的家人也從不覺得無聊。"
  },
  {
    "word": "accurately",
    "pos": "adv.",
    "cn_def": "準確地；精確地",
    "en_def": "in a correct and exact way",
    "sentence": "A: Our travel agency received many complaints last month because customers said the hotel photos on our website looked much better than the real rooms. B: From now on, we must describe every hotel {{BLANK}}, with real photos and honest information, so that travelers know exactly what they will get when they arrive.",
    "cn": "A：我們旅行社上個月收到很多客訴，因為客戶說網站上的飯店照片看起來比實際房間好得多。 B：從現在起，我們必須【準確地】描述每一家飯店，附上真實照片和誠實的資訊，讓旅客確切知道抵達時會得到什麼。"
  }
];

const MCQS = [
  {
    "q": "Our sales manager is extremely busy with overseas clients. She _____ takes a vacation longer than three days.",
    "options": [
      "seldom",
      "accurately",
      "mentally",
      "physically"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Employees who work on the national holiday will receive an extra _____ next month. They can choose any weekday that suits them.",
    "options": [
      "role",
      "assumption",
      "day off",
      "bookworm"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The hotel manager heard that the air conditioner in Room 305 was broken. He sent a technician _____ to fix it.",
    "options": [
      "physically",
      "at once",
      "mentally",
      "seldom"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The ski resort will close at the end of March. Visitors should _____ the last few weeks of the snow season.",
    "options": [
      "hit the road",
      "eat out",
      "recharge your batteries",
      "make the most of"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Chess and puzzle games keep older adults _____ active. Experts say these hobbies improve memory and concentration.",
    "options": [
      "mentally",
      "seldom",
      "accurately",
      "at once"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Warehouse staff must lift heavy boxes all day. Applicants for this position should be _____ strong and healthy.",
    "options": [
      "accurately",
      "seldom",
      "physically",
      "at once"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Moving all the office furniture to the new building by hand was _____ work. The staff were exhausted by the end of the day.",
    "options": [
      "precious",
      "backbreaking",
      "numerous",
      "distracted"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The accountant has worked every weekend since June. She plans to spend a quiet week at the beach to _____.",
    "options": [
      "hit the road",
      "make the most of",
      "eat out",
      "recharge your batteries"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The tour bus will leave the hotel at seven sharp tomorrow. Please finish breakfast early so we can _____ on time.",
    "options": [
      "hit the road",
      "eat out",
      "make the most of",
      "recharge your batteries"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "For your safety, please _____ your seat belt before the shuttle bus leaves the airport. The driver will check every passenger.",
    "options": [
      "impose",
      "expand",
      "buckle",
      "relieve"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The marketing team was _____ to hear that they had won a free trip to Bali. They celebrated with cake in the meeting room.",
    "options": [
      "backbreaking",
      "thrilled",
      "numerous",
      "precious"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The committee has discussed a staff sports day for months. However, no _____ plans have been made about the date or location.",
    "options": [
      "thrilled",
      "distracted",
      "backbreaking",
      "concrete"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The Taiwanese engineer was traveling alone in Peru. At a hostel, she met a fellow _____ from Taipei and felt less homesick.",
    "options": [
      "countryman",
      "assumption",
      "role",
      "potential"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Please do not _____ that every guest eats meat. Ask about special diets when people register for the company dinner.",
    "options": [
      "impose",
      "expand",
      "assume",
      "buckle"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The travel agency made the wrong _____ that all tourists wanted a busy schedule. Many customers actually preferred more free time.",
    "options": [
      "role",
      "assumption",
      "potential",
      "countryman"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many office workers in the city _____ at least three times a week. Restaurants near business districts are therefore very busy at lunchtime.",
    "options": [
      "hit the road",
      "recharge your batteries",
      "make the most of",
      "eat out"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "After finishing the annual audit, the accountants decided to _____ themselves with a luxury dinner. They had worked late for three weeks.",
    "options": [
      "indulge",
      "interfere",
      "impose",
      "expand"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The museum will _____ a limit of fifty visitors per hour during the holidays. This rule will help reduce crowds in the galleries.",
    "options": [
      "indulge",
      "relieve",
      "impose",
      "buckle"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Volunteers play an important _____ in running the annual city marathon. They hand out water and guide runners along the route.",
    "options": [
      "assumption",
      "role",
      "countryman",
      "bookworm"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The manager encourages staff to enjoy their hobbies. However, these activities should never _____ with their work duties.",
    "options": [
      "indulge",
      "expand",
      "assume",
      "interfere"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Investors believe the empty lakeside land has great _____ for a new resort. Construction could start as early as next spring.",
    "options": [
      "potential",
      "role",
      "assumption",
      "bookworm"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Drivers who use their phones are easily _____ on the road. Please put your phone away before you start the car.",
    "options": [
      "thrilled",
      "precious",
      "distracted",
      "tremendous"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The young designer was completely _____ in her painting class. She did not notice that the other students had already left.",
    "options": [
      "numerous",
      "absorbed",
      "backbreaking",
      "concrete"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The new water park attracted a _____ number of visitors in its first month. Over one hundred thousand tickets were sold.",
    "options": [
      "distracted",
      "absorbed",
      "backbreaking",
      "tremendous"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "For busy working parents, weekends are _____ family time. Many of them avoid checking work emails on Saturdays and Sundays.",
    "options": [
      "precious",
      "distracted",
      "backbreaking",
      "absorbed"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Our receptionist is a true _____ who reads two novels every week. She often recommends good books to her coworkers.",
    "options": [
      "countryman",
      "assumption",
      "bookworm",
      "potential"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Walking in the park during lunch can help _____ stress after a busy morning. Many companies now encourage short outdoor breaks.",
    "options": [
      "impose",
      "relieve",
      "interfere",
      "buckle"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The hotel plans to _____ its fitness center next year. A new swimming pool and a yoga studio will be added.",
    "options": [
      "assume",
      "interfere",
      "indulge",
      "expand"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The city offers _____ leisure activities for visitors, such as boat tours and night markets. Tourists rarely feel bored here.",
    "options": [
      "numerous",
      "absorbed",
      "distracted",
      "thrilled"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Hotel websites must describe their rooms _____. Misleading photos and information can lead to complaints and bad online reviews.",
    "options": [
      "seldom",
      "physically",
      "accurately",
      "mentally"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "seldom": {
    "pos": "adv.",
    "en_def": "rarely; not often",
    "cn_def": "很少；不常"
  },
  "day off": {
    "pos": "n.phr.",
    "en_def": "a day when you do not have to go to work",
    "cn_def": "休假日；休息日"
  },
  "at once": {
    "pos": "phr.",
    "en_def": "immediately; right now",
    "cn_def": "立刻；馬上"
  },
  "make the most of": {
    "pos": "v.phr.",
    "en_def": "use something as well as possible",
    "cn_def": "充分利用"
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in a way that is related to the mind",
    "cn_def": "精神上；心理上"
  },
  "physically": {
    "pos": "adv.",
    "en_def": "in a way that is related to the body",
    "cn_def": "身體上"
  },
  "backbreaking": {
    "pos": "adj.",
    "en_def": "(of physical work) very hard and tiring",
    "cn_def": "極其繁重的；累死人的"
  },
  "recharge your batteries": {
    "pos": "v.phr.",
    "en_def": "rest and relax so that you have energy again",
    "cn_def": "養精蓄銳；恢復精力"
  },
  "hit the road": {
    "pos": "v.phr.",
    "en_def": "start a journey; leave",
    "cn_def": "上路；出發"
  },
  "buckle": {
    "pos": "v.",
    "en_def": "fasten something with a metal or plastic clip",
    "cn_def": "扣上（扣環）；繫緊"
  },
  "thrilled": {
    "pos": "adj.",
    "en_def": "very happy and excited",
    "cn_def": "非常興奮的；極為高興的"
  },
  "concrete": {
    "pos": "adj.",
    "en_def": "definite and clear, not general",
    "cn_def": "具體的；明確的"
  },
  "countryman": {
    "pos": "n.",
    "en_def": "a person from the same country as you",
    "cn_def": "同胞；同鄉"
  },
  "assume": {
    "pos": "v.",
    "en_def": "think that something is true without proof",
    "cn_def": "假定；以為"
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you believe is true without proof",
    "cn_def": "假設；設想"
  },
  "eat out": {
    "pos": "v.phr.",
    "en_def": "eat in a restaurant instead of at home",
    "cn_def": "外出用餐；上館子"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "allow yourself to enjoy something special",
    "cn_def": "盡情享受；縱容（自己）"
  },
  "impose": {
    "pos": "v.",
    "en_def": "force people to accept a rule, cost, or limit",
    "cn_def": "強制實行；施加"
  },
  "role": {
    "pos": "n.",
    "en_def": "the job or part someone has in a situation",
    "cn_def": "角色；作用"
  },
  "interfere": {
    "pos": "v.",
    "en_def": "get involved in something in a way that causes problems",
    "cn_def": "干擾；妨礙"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being successful in the future",
    "cn_def": "潛力；可能性"
  },
  "distracted": {
    "pos": "adj.",
    "en_def": "unable to focus because something else takes your attention",
    "cn_def": "分心的"
  },
  "digital revolution": {
    "pos": "n.phr.",
    "en_def": "the big change in daily life caused by computers and the internet",
    "cn_def": "數位革命"
  },
  "absorbed": {
    "pos": "adj.",
    "en_def": "giving all your attention to something",
    "cn_def": "全神貫注的；專心的"
  },
  "tremendous": {
    "pos": "adj.",
    "en_def": "very great in amount, size, or level",
    "cn_def": "巨大的；極大的"
  },
  "precious": {
    "pos": "adj.",
    "en_def": "very valuable and important",
    "cn_def": "珍貴的；寶貴的"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading books",
    "cn_def": "書蟲；愛讀書的人"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "make pain, worry, or stress less",
    "cn_def": "減輕；緩解"
  },
  "expand": {
    "pos": "v.",
    "en_def": "become bigger or make something bigger",
    "cn_def": "擴大；擴展"
  },
  "numerous": {
    "pos": "adj.",
    "en_def": "very many",
    "cn_def": "許多的；眾多的"
  },
  "accurately": {
    "pos": "adv.",
    "en_def": "in a correct and exact way",
    "cn_def": "準確地；精確地"
  }
};

const EXTRA_GLOSSES = {};
