// Topic 436 Quiz Data: Watch 觀看
// Source word list: https://www.examword.com/group-topic/watch — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T436 - Watch 觀看",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋",
    "en_def": "the very large area of salt water that covers much of the earth",
    "sentence": "A: Our company is planning a team-building trip next month, so do you think we should rent cabins in the mountains or book a hotel somewhere warm? B: I would choose a hotel facing the {{BLANK}}, because everyone can watch the sunrise over the water and relax after such a busy year.",
    "cn": "A：我們公司計畫下個月舉辦團隊建立旅行，你覺得我們應該在山上租小木屋，還是在溫暖的地方訂飯店？ B：我會選擇面向【海洋】的飯店，因為大家可以觀看水面上的日出，並在忙碌了一整年之後放鬆一下。"
  },
  {
    "word": "sea",
    "pos": "n.",
    "cn_def": "海；大海",
    "en_def": "the salt water that covers a large part of the earth",
    "sentence": "A: The new marketing director wants to film our next advertisement outdoors, but where can we find a quiet place with beautiful views near the city? B: There is a small fishing village about an hour away, where you can watch the {{BLANK}} from the hills while the boats come back in the evening.",
    "cn": "A：新的行銷總監想在戶外拍攝我們的下一支廣告，但我們能在市區附近哪裡找到風景優美又安靜的地方？ B：大約一小時車程外有個小漁村，你可以從山丘上觀看【大海】，傍晚時還能看到漁船陸續返航。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河；河流",
    "en_def": "a long natural flow of water that moves across land to the sea",
    "sentence": "A: Where should we hold the welcome dinner for the visiting clients from Japan, since they said they would like to see something special about our city? B: Let's reserve a table at the restaurant next to the {{BLANK}}, because guests can watch the boats and the city lights reflected on the water.",
    "cn": "A：既然來訪的日本客戶說想看看我們城市的特別之處，我們該在哪裡舉辦歡迎晚宴？ B：我們訂【河】邊那家餐廳的位子吧，因為客人可以觀看船隻以及倒映在水面上的城市燈光。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖；湖泊",
    "en_def": "a large area of water surrounded by land",
    "sentence": "A: Our department finally finished the big project, so the manager wants to organize a relaxing weekend activity for everyone, but do you have any ideas? B: We could rent a cottage beside a quiet {{BLANK}} in the countryside, where people can go fishing, watch the birds, and enjoy a barbecue together.",
    "cn": "A：我們部門終於完成了大型專案，所以經理想為大家安排一個輕鬆的週末活動，你有什麼點子嗎？ B：我們可以在鄉間一座寧靜的【湖】邊租一間小屋，大家可以去釣魚、賞鳥，還能一起享受烤肉。"
  },
  {
    "word": "stream",
    "pos": "n.",
    "cn_def": "小溪；溪流",
    "en_def": "a small, narrow river",
    "sentence": "A: Why did the hiking group from the sales team arrive at the campsite two hours later than we expected yesterday afternoon? B: The bridge over a small {{BLANK}} in the forest had been damaged by the storm, so they had to walk a long way around before they could continue.",
    "cn": "A：業務團隊的健行小組昨天下午為什麼比我們預期的晚了兩小時才抵達營地？ B：森林裡一條小【溪流】上的橋被暴風雨損壞了，所以他們得繞一大段路才能繼續前進。"
  },
  {
    "word": "pond",
    "pos": "n.",
    "cn_def": "池塘",
    "en_def": "a small area of still water",
    "sentence": "A: The office building management sent an email about the new garden on the ground floor, but what exactly are they planning to build there? B: They are adding a small {{BLANK}} with fish and plants, so employees can sit on the benches during lunch and watch the water to reduce stress.",
    "cn": "A：辦公大樓管理處寄了一封關於一樓新花園的電子郵件，他們到底打算在那裡蓋什麼？ B：他們要增設一座有魚和植物的小【池塘】，讓員工午餐時可以坐在長椅上看著水面來紓解壓力。"
  },
  {
    "word": "wave",
    "pos": "n.",
    "cn_def": "波浪；一波（浪潮）",
    "en_def": "a line of raised water moving across the sea; a sudden increase of something",
    "sentence": "A: Is it safe for the children to swim at the beach during the company family day this Saturday, or should we plan other activities? B: The weather report says each {{BLANK}} could be over two meters high because of strong winds, so we should keep everyone on the sand and organize games instead.",
    "cn": "A：這週六公司家庭日時，孩子們在海灘游泳安全嗎？還是我們該安排其他活動？ B：氣象報告說由於強風，每道【浪】可能都會超過兩公尺高，所以我們應該讓大家待在沙灘上，改成舉辦遊戲。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "水流；洋流",
    "en_def": "a strong movement of water in one direction",
    "sentence": "A: The tour guide told our group not to go into the water near the rocks this afternoon, but the sea looks so calm, so why is she worried? B: She explained that a strong {{BLANK}} under the surface can pull even good swimmers far away from the shore very quickly.",
    "cn": "A：導遊叫我們團今天下午不要到岩石附近下水，但海看起來很平靜，她為什麼擔心？ B：她解釋說水面下強烈的【水流】，即使是游泳好手也會很快被拉離岸邊很遠。"
  },
  {
    "word": "tide",
    "pos": "n.",
    "cn_def": "潮汐；潮水",
    "en_def": "the regular rise and fall of the sea level",
    "sentence": "A: The photographer wants to take pictures of the new hotel from the beach early tomorrow morning, but what time should we arrive there? B: We should get there before six, because the {{BLANK}} comes in around seven and covers most of the sand where he wants to set up his equipment.",
    "cn": "A：攝影師想明天一早從海灘拍攝新飯店的照片，我們應該幾點到？ B：我們應該六點前到，因為大約七點會漲【潮】，潮水會淹沒他想架設器材的大部分沙灘。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸；岸邊",
    "en_def": "the land along the edge of a sea or lake",
    "sentence": "A: How did the passengers get off the ferry after the engine stopped working in the middle of the bay last night? B: Several small rescue boats came out from the harbor, and the crew carefully helped everyone move across and reach the {{BLANK}} safely within about an hour.",
    "cn": "A：昨晚渡輪在海灣中央引擎故障後，乘客是怎麼下船的？ B：幾艘小型救援船從港口駛出，船員小心地協助大家換船，大約一小時內就讓所有人安全抵達【岸邊】。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸；沿海地區",
    "en_def": "the land next to the sea",
    "sentence": "A: Our travel agency is designing a new three-day tour for international visitors, so which area do you think would attract the most customers? B: I suggest the east {{BLANK}}, because tourists can watch the sunrise over the Pacific, visit small fishing towns, and enjoy fresh seafood every evening.",
    "cn": "A：我們旅行社正在為國際旅客設計新的三天行程，你覺得哪個地區最能吸引顧客？ B：我建議東部【海岸】，因為遊客可以觀看太平洋上的日出、參觀小漁鎮，每晚還能享用新鮮海鮮。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘；沙灘",
    "en_def": "an area of sand or small stones next to the sea",
    "sentence": "A: The hotel receptionist said there is a free shuttle bus every morning, but where exactly does it take the guests? B: It goes to a quiet {{BLANK}} about ten minutes away, where you can rent chairs and umbrellas, lie on the sand, and watch people surfing all afternoon.",
    "cn": "A：飯店櫃台人員說每天早上都有免費接駁車，它到底載房客去哪裡？ B：它會開到大約十分鐘車程外的一處安靜【海灘】，你可以在那裡租椅子和陽傘、躺在沙灘上，整個下午觀看人們衝浪。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港口；港灣",
    "en_def": "an area of water near land where boats can stay safely",
    "sentence": "A: Where will the welcome party for the new branch manager be held, since the main conference room is being repainted this week? B: The company booked a seafood restaurant at the {{BLANK}}, so guests can watch the fishing boats come back while they enjoy dinner on the outdoor terrace.",
    "cn": "A：既然主會議室本週正在重新粉刷，新分行經理的歡迎派對要在哪裡舉辦？ B：公司訂了【港口】邊的一家海鮮餐廳，讓賓客在戶外露台享用晚餐時，可以觀看漁船返航。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or place where ships load and unload goods",
    "sentence": "A: Why hasn't the shipment of office furniture from Vietnam arrived at our warehouse yet, when it was supposed to be here last Friday? B: The container ship was delayed by a typhoon, and now it is waiting at the {{BLANK}} because the workers there are too busy to unload it.",
    "cn": "A：從越南運來的辦公家具為什麼還沒送到我們倉庫？它應該上週五就到了。 B：貨櫃船因颱風延誤，現在正在【港口】等待，因為那裡的工人太忙，沒辦法卸貨。"
  },
  {
    "word": "boat",
    "pos": "n.",
    "cn_def": "船；小船",
    "en_def": "a small vehicle for traveling on water",
    "sentence": "A: How are we going to get all the conference guests to the island resort, since there is no bridge and the airport is too far away? B: The organizers have rented a large {{BLANK}} that leaves the pier every two hours, and the trip only takes about forty minutes in good weather.",
    "cn": "A：既然沒有橋，機場又太遠，我們要怎麼把所有與會賓客送到島上的度假村？ B：主辦單位租了一艘大【船】，每兩小時從碼頭出發一次，天氣好時航程只要大約四十分鐘。"
  },
  {
    "word": "ship",
    "pos": "n.",
    "cn_def": "船；大船",
    "en_def": "a large boat that carries people or goods across the sea",
    "sentence": "A: Did you watch the news about the tourists who visited our city yesterday, because the downtown shops were extremely busy all afternoon? B: Yes, more than three thousand passengers got off a cruise {{BLANK}}, and many local stores stayed open late to sell souvenirs and food to them.",
    "cn": "A：你有看到昨天大量遊客來我們城市的新聞嗎？市中心的商店整個下午都非常忙。 B：有啊，超過三千名乘客從一艘郵輪【船】上下來，許多當地商店營業到很晚，賣紀念品和食物給他們。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "航行；揚帆",
    "en_def": "to travel on water in a boat or ship",
    "sentence": "A: The new client invited our sales team to join him on his yacht this weekend, but do you know what we are going to do there? B: He plans to {{BLANK}} along the coast to a small island, where we will have lunch, watch the dolphins, and discuss the contract in a relaxed way.",
    "cn": "A：新客戶邀請我們業務團隊這週末到他的遊艇上，你知道我們要在那裡做什麼嗎？ B：他打算沿著海岸【航行】到一座小島，我們會在那裡吃午餐、觀看海豚，並在輕鬆的氣氛中討論合約。"
  },
  {
    "word": "swim",
    "pos": "v.",
    "cn_def": "游泳",
    "en_def": "to move through water using your arms and legs",
    "sentence": "A: The hotel we booked for the training seminar has a large pool on the roof, but are we allowed to use it after the evening sessions? B: Yes, guests can {{BLANK}} there until ten o'clock at night, and the staff will provide free towels and drinks for everyone in our group.",
    "cn": "A：我們為訓練研討會訂的飯店頂樓有一座大泳池，晚上的課程結束後我們可以使用嗎？ B：可以，房客晚上十點前都可以在那裡【游泳】，工作人員也會為我們團隊的每個人提供免費毛巾和飲料。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "潛水；跳水",
    "en_def": "to go under water, often with special equipment",
    "sentence": "A: Our travel company wants to offer a new adventure package for young professionals, so what activity do you think would be the most popular? B: Many customers want to {{BLANK}} near the coral reefs and watch colorful fish, so we could include lessons with a certified instructor on the first day.",
    "cn": "A：我們旅遊公司想為年輕上班族推出新的冒險套裝行程，你覺得哪種活動最受歡迎？ B：很多顧客想在珊瑚礁附近【潛水】、觀看色彩繽紛的魚，所以我們可以在第一天安排合格教練的課程。"
  },
  {
    "word": "float",
    "pos": "v.",
    "cn_def": "漂浮",
    "en_def": "to stay on the surface of water without sinking",
    "sentence": "A: The children at the company picnic are worried about going into the lake because some of them cannot swim very well yet. B: Don't worry, the staff will give everyone a life jacket, which helps people {{BLANK}} on the water safely, and two lifeguards will watch them all the time.",
    "cn": "A：公司野餐中的孩子們擔心下湖，因為有些人還不太會游泳。 B：別擔心，工作人員會發給每個人救生衣，它能幫助大家安全地【漂浮】在水面上，而且兩名救生員會一直看著他們。"
  },
  {
    "word": "sink",
    "pos": "v.",
    "cn_def": "下沉；沉沒",
    "en_def": "to go down below the surface of water",
    "sentence": "A: Why was the old fishing boat in the harbor removed so suddenly last week, when the tourists liked taking pictures of it? B: The wooden bottom had become badly damaged, and the harbor manager was afraid it would {{BLANK}} during the next storm and block the other boats.",
    "cn": "A：港口裡那艘老漁船上週為什麼突然被移走？遊客很喜歡拍它。 B：它的木製船底嚴重損壞，港務經理擔心它在下一次暴風雨時會【沉沒】，擋住其他船隻。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "going a long way down from the top or surface",
    "sentence": "A: The new employees asked whether they can jump into the hotel pool during the welcome party tonight, so what should I tell them? B: Tell them the water at one end is very {{BLANK}}, so only strong swimmers should go there, and someone from the staff should watch them carefully.",
    "cn": "A：新員工問今晚歡迎派對時能不能跳進飯店泳池，我該怎麼告訴他們？ B：告訴他們泳池一端的水很【深】，所以只有游泳好手才能去那裡，而且應該有工作人員仔細看著他們。"
  },
  {
    "word": "shallow",
    "pos": "adj.",
    "cn_def": "淺的",
    "en_def": "not deep; with only a short distance to the bottom",
    "sentence": "A: Is the beach near the resort a good place for the staff to bring their young children during the company holiday next month? B: Yes, the water stays {{BLANK}} for almost fifty meters from the sand, so little kids can play safely while their parents watch them from the chairs.",
    "cn": "A：度假村附近的海灘適合員工在下個月的公司假期帶年幼的孩子去嗎？ B：適合，從沙灘往外將近五十公尺，水都很【淺】，所以小朋友可以安全地玩，父母則坐在椅子上看著他們。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清澈的",
    "en_def": "easy to see through; not dirty or cloudy",
    "sentence": "A: The diving shop owner said tomorrow morning would be the best time for our group to go out, but why not this afternoon? B: After the strong rain today, the water is full of sand, but by tomorrow it should be {{BLANK}} enough to see the fish and coral easily.",
    "cn": "A：潛水店老闆說明天早上是我們團出海的最佳時間，為什麼不是今天下午？ B：今天下過大雨後海水充滿沙子，但到明天應該就夠【清澈】，能輕鬆看到魚和珊瑚。"
  },
  {
    "word": "dirty",
    "pos": "adj.",
    "cn_def": "髒的；骯髒的",
    "en_def": "not clean",
    "sentence": "A: Why did the city government close the river park to visitors this week, even though the weather has been perfect for walking? B: A nearby factory accidentally let chemicals into the water, so the river became too {{BLANK}} and unsafe, and workers are now cleaning it.",
    "cn": "A：天氣這麼適合散步，市政府這週為什麼對遊客關閉河濱公園？ B：附近一間工廠不小心讓化學物質流入水中，所以河水變得太【髒】又不安全，工人們正在清理。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的；淡的（水）",
    "en_def": "recently made or caught; (of water) not salty",
    "sentence": "A: The restaurant manager complained that the fish delivered this morning didn't smell good, so what happened with our supplier? B: Their truck broke down on the highway for three hours, so the fish was no longer {{BLANK}} when it arrived, and they have promised to replace it today.",
    "cn": "A：餐廳經理抱怨今天早上送來的魚味道不好，我們的供應商出了什麼事？ B：他們的卡車在高速公路上拋錨了三個小時，所以魚送到時已經不【新鮮】了，他們承諾今天會換貨。"
  },
  {
    "word": "salt",
    "pos": "n.",
    "cn_def": "鹽；鹽分",
    "en_def": "a white substance found in sea water, used to flavor food",
    "sentence": "A: Why does the hotel ask guests to wash their swimsuits and diving equipment in the special sink outside before returning to their rooms? B: The seawater leaves {{BLANK}} on everything, and if people bring it inside, it can damage the carpets and the furniture in the rooms over time.",
    "cn": "A：飯店為什麼要求房客在回房前，先在外面的專用水槽清洗泳衣和潛水裝備？ B：海水會在所有東西上留下【鹽分】，如果大家把它帶進房間，久了會損壞房間裡的地毯和家具。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "平靜的",
    "en_def": "(of water or weather) still, without big waves or wind",
    "sentence": "A: The boat tour to the island was cancelled yesterday because of strong winds, so do you think we can go this morning instead? B: The captain checked the weather report and said the sea is {{BLANK}} today, so the boat will leave at nine and we can watch the dolphins on the way.",
    "cn": "A：昨天去島上的遊船行程因強風取消了，你覺得我們今天早上可以改去嗎？ B：船長查看了氣象報告，說今天海面很【平靜】，所以船九點會出發，我們在途中還能觀看海豚。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "波濤洶湧的；粗糙的",
    "en_def": "(of the sea) with big waves because of strong wind",
    "sentence": "A: Why did so many passengers feel sick on the ferry back from the trade fair on the island yesterday evening? B: A storm was coming, so the sea was very {{BLANK}}, and the boat moved up and down so much that even the crew had trouble standing.",
    "cn": "A：昨天傍晚從島上商展回來的渡輪上，為什麼那麼多乘客覺得不舒服？ B：暴風雨要來了，所以海面非常【洶湧】，船上下晃動得厲害，連船員都很難站穩。"
  },
  {
    "word": "flow",
    "pos": "v.",
    "cn_def": "流動；流",
    "en_def": "(of a liquid) to move along in a steady way",
    "sentence": "A: The engineers are building a new water park next to the hotel, but how will they keep the water in the pools clean every day? B: They will let water from the mountain river {{BLANK}} through special filters into the pools, and the dirty water will be cleaned before it goes back.",
    "cn": "A：工程師正在飯店旁邊蓋一座新的水上樂園，他們要怎麼每天保持泳池的水乾淨？ B：他們會讓山上河川的水經由特殊濾網【流】進泳池，而髒水在排回去之前會先經過淨化。"
  },
  {
    "word": "cross",
    "pos": "v.",
    "cn_def": "橫越；穿越",
    "en_def": "to go from one side of something to the other",
    "sentence": "A: How long does it take the delivery team to bring supplies from the mainland to our store on the island every week? B: The truck has to wait for the ferry, and it takes about two hours to {{BLANK}} the strait, so the goods usually arrive in the afternoon.",
    "cn": "A：送貨團隊每週從本島把補給品送到我們島上的店需要多久？ B：卡車得等渡輪，而【橫渡】海峽大約要兩個小時，所以貨物通常下午才到。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What activities has the event planner prepared for the international guests on the free afternoon after the conference ends on Friday? B: They can take a small boat to {{BLANK}} the caves along the coast, watch the sea birds, and then enjoy a seafood dinner at the harbor.",
    "cn": "A：活動企劃為國際賓客在週五會議結束後的自由午後準備了什麼活動？ B：他們可以搭小船去【探索】沿岸的洞穴、觀看海鳥，然後在港口享用海鮮晚餐。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from harm",
    "sentence": "A: Why has the local government decided to limit the number of tourist boats that can visit the bay each day starting next month? B: Too many boats were damaging the coral and scaring the fish, so officials want to {{BLANK}} the area and keep it beautiful for future visitors.",
    "cn": "A：當地政府為什麼決定從下個月開始限制每天能進入海灣的觀光船數量？ B：太多船隻正在破壞珊瑚、驚嚇魚群，所以官員想【保護】這個區域，讓它為未來的遊客保持美麗。"
  }
];

const MCQS = [
  {
    "q": "The new resort sits on a cliff above the Pacific _____. Every room has a large balcony with a wide view of the water.",
    "options": [
      "ocean",
      "pond",
      "stream",
      "harbor"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The company ships most of its heavy machinery by _____ because it is cheaper than air freight. Delivery to Europe takes about five weeks.",
    "options": [
      "beach",
      "sea",
      "shore",
      "pond"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The factory was built next to the _____ so that it could use the flowing water. Barges carry its products downstream to the port.",
    "options": [
      "pond",
      "beach",
      "river",
      "tide"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Hikers can rent kayaks at the dock and paddle across the _____. The water is surrounded by mountains and stays calm all summer.",
    "options": [
      "tide",
      "wave",
      "shore",
      "lake"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The marketing department received a _____ of complaints after the price increase. Customer service staff worked overtime to answer every email.",
    "options": [
      "pond",
      "wave",
      "harbor",
      "beach"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Swimmers are warned not to enter the water near the rocks. A strong _____ there can quickly pull people away from the beach.",
    "options": [
      "shore",
      "port",
      "lake",
      "current"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Visitors can walk to the small island only at low _____. When the water rises again in the evening, the path disappears completely.",
    "options": [
      "tide",
      "wave",
      "stream",
      "coast"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel guests enjoyed a long walk along the _____ at sunset. They collected shells and watched the waves come in.",
    "options": [
      "tide",
      "current",
      "shore",
      "pond"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The company is opening three new hotels along the east _____. Each one will be built near a sandy beach with ocean views.",
    "options": [
      "pond",
      "tide",
      "current",
      "coast"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The resort offers free umbrellas and chairs on its private _____. Guests can lie on the soft sand and listen to the waves.",
    "options": [
      "harbor",
      "beach",
      "port",
      "current"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Dozens of fishing boats were tied up in the _____ during the typhoon. The tall walls protected them from the huge waves outside.",
    "options": [
      "harbor",
      "beach",
      "coast",
      "tide"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The container ship will arrive at the _____ of Kaohsiung on Monday. Workers will then unload the goods and send them to our warehouse.",
    "options": [
      "beach",
      "lake",
      "port",
      "stream"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "We rented a small fishing _____ for the team outing on Saturday. The captain took us out to the bay and showed us how to fish.",
    "options": [
      "shore",
      "boat",
      "wave",
      "tide"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Over two thousand passengers stepped off the cruise _____ this morning. Local shops and restaurants near the pier quickly became crowded.",
    "options": [
      "ship",
      "wave",
      "lake",
      "coast"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The yacht will _____ from the marina at ten and return before sunset. Guests should bring sunscreen and a light jacket for the trip.",
    "options": [
      "sink",
      "dive",
      "protect",
      "sail"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The hotel pool is open from six in the morning until ten at night. Guests who want to _____ laps should use the left lanes.",
    "options": [
      "sink",
      "explore",
      "swim",
      "protect"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Experienced guests can _____ to a depth of twenty meters with a certified instructor. Beginners will stay near the surface and snorkel.",
    "options": [
      "dive",
      "float",
      "cross",
      "flow"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Each passenger must wear a life jacket on the ferry. The jacket helps people _____ on the water if there is an emergency.",
    "options": [
      "sink",
      "dive",
      "explore",
      "float"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The old cargo ship hit some rocks during the storm and began to _____. Rescue teams saved all twenty crew members within an hour.",
    "options": [
      "protect",
      "sink",
      "explore",
      "cross"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The lake is more than fifty meters _____ in the middle. Only trained divers are allowed to swim in that part of the water.",
    "options": [
      "clear",
      "calm",
      "deep",
      "fresh"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The water near the shore is very _____, so small children can stand safely. It only reaches the knees of most adults.",
    "options": [
      "shallow",
      "deep",
      "rough",
      "dirty"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "After the storm passed, the water became _____ again. Divers could easily see the colorful fish and coral below them.",
    "options": [
      "dirty",
      "clear",
      "rough",
      "deep"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The river became too _____ for swimming after the factory leaked oil into it. The city closed the beach until it could be cleaned.",
    "options": [
      "clear",
      "calm",
      "fresh",
      "dirty"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The restaurant buys _____ seafood from the fishing boats every morning. Nothing on the menu is frozen or more than a day old.",
    "options": [
      "fresh",
      "rough",
      "shallow",
      "dirty"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The sea was _____ and there was almost no wind this morning. The boat trip to the island left on time without any problems.",
    "options": [
      "rough",
      "dirty",
      "calm",
      "deep"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The ferry was cancelled because the sea was too _____ after the typhoon. Passengers were offered rooms at a nearby hotel for the night.",
    "options": [
      "calm",
      "clear",
      "shallow",
      "rough"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Several mountain streams _____ into the lake on the north side. The fresh water keeps the lake clean and full all year.",
    "options": [
      "sink",
      "flow",
      "protect",
      "explore"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "It takes about forty minutes to _____ the bay by ferry. Commuters often read or check emails during the short trip.",
    "options": [
      "sink",
      "float",
      "cross",
      "protect"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Tourists can rent a kayak to _____ the hidden caves along the coastline. A guide leads each group and explains the local history.",
    "options": [
      "sink",
      "flow",
      "float",
      "explore"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The government created a marine park to _____ the coral reefs from fishing boats. Visitors must now pay a small fee to enter.",
    "options": [
      "protect",
      "sink",
      "cross",
      "flow"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "ocean": {
    "pos": "n.",
    "en_def": "the very large area of salt water that covers much of the earth",
    "cn_def": "海洋"
  },
  "sea": {
    "pos": "n.",
    "en_def": "the salt water that covers a large part of the earth",
    "cn_def": "海；大海"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long natural flow of water that moves across land to the sea",
    "cn_def": "河；河流"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a large area of water surrounded by land",
    "cn_def": "湖；湖泊"
  },
  "stream": {
    "pos": "n.",
    "en_def": "a small, narrow river",
    "cn_def": "小溪；溪流"
  },
  "pond": {
    "pos": "n.",
    "en_def": "a small area of still water",
    "cn_def": "池塘"
  },
  "wave": {
    "pos": "n.",
    "en_def": "a line of raised water moving across the sea; a sudden increase of something",
    "cn_def": "波浪；一波（浪潮）"
  },
  "current": {
    "pos": "n.",
    "en_def": "a strong movement of water in one direction",
    "cn_def": "水流；洋流"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea level",
    "cn_def": "潮汐；潮水"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of a sea or lake",
    "cn_def": "岸；岸邊"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸；沿海地區"
  },
  "beach": {
    "pos": "n.",
    "en_def": "an area of sand or small stones next to the sea",
    "cn_def": "海灘；沙灘"
  },
  "harbor": {
    "pos": "n.",
    "en_def": "an area of water near land where boats can stay safely",
    "cn_def": "港口；港灣"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or place where ships load and unload goods",
    "cn_def": "港口；港市"
  },
  "boat": {
    "pos": "n.",
    "en_def": "a small vehicle for traveling on water",
    "cn_def": "船；小船"
  },
  "ship": {
    "pos": "n.",
    "en_def": "a large boat that carries people or goods across the sea",
    "cn_def": "船；大船"
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel on water in a boat or ship",
    "cn_def": "航行；揚帆"
  },
  "swim": {
    "pos": "v.",
    "en_def": "to move through water using your arms and legs",
    "cn_def": "游泳"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to go under water, often with special equipment",
    "cn_def": "潛水；跳水"
  },
  "float": {
    "pos": "v.",
    "en_def": "to stay on the surface of water without sinking",
    "cn_def": "漂浮"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉；沉沒"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "going a long way down from the top or surface",
    "cn_def": "深的"
  },
  "shallow": {
    "pos": "adj.",
    "en_def": "not deep; with only a short distance to the bottom",
    "cn_def": "淺的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "easy to see through; not dirty or cloudy",
    "cn_def": "清澈的"
  },
  "dirty": {
    "pos": "adj.",
    "en_def": "not clean",
    "cn_def": "髒的；骯髒的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "recently made or caught; (of water) not salty",
    "cn_def": "新鮮的；淡的（水）"
  },
  "salt": {
    "pos": "n.",
    "en_def": "a white substance found in sea water, used to flavor food",
    "cn_def": "鹽；鹽分"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "(of water or weather) still, without big waves or wind",
    "cn_def": "平靜的"
  },
  "rough": {
    "pos": "adj.",
    "en_def": "(of the sea) with big waves because of strong wind",
    "cn_def": "波濤洶湧的；粗糙的"
  },
  "flow": {
    "pos": "v.",
    "en_def": "(of a liquid) to move along in a steady way",
    "cn_def": "流動；流"
  },
  "cross": {
    "pos": "v.",
    "en_def": "to go from one side of something to the other",
    "cn_def": "橫越；穿越"
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
  }
};

const EXTRA_GLOSSES = {};
