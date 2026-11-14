// Topic 7 Quiz Data: Adventure 冒險
// Source word list: https://www.examword.com/group-topic/adventure — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T07 - Adventure 冒險",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險；考察",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: We have a free afternoon after the sales conference in Lisbon, so what would you like to do before our flight leaves tomorrow morning? B: I'd love to {{BLANK}} the old part of the city on foot, because the hotel receptionist said there are small cafés, markets, and museums hidden in every narrow street.",
    "cn": "A：我們在里斯本的業務研討會結束後有一個空閒的下午，所以在明天早上班機起飛前你想做什麼？ B：我很想步行【探索】這座城市的舊城區，因為飯店櫃檯人員說每條窄巷裡都藏著小咖啡館、市場和博物館。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探索；探勘；考察",
    "en_def": "the act of traveling through a place to find out about it",
    "sentence": "A: Why did the travel company decide to add a new tour to its catalog this year, even though most of its customers prefer beach holidays? B: More young professionals are asking for trips that include {{BLANK}} of caves and mountain villages, so the managers believe this kind of tour will sell well next summer.",
    "cn": "A：為什麼這家旅行社今年決定在型錄裡增加新的行程，雖然大部分客人比較喜歡海灘度假？ B：越來越多年輕上班族要求包含洞穴和山村【探索】的旅程，所以經理們相信這類行程明年夏天會賣得很好。"
  },
  {
    "word": "journey",
    "pos": "n.",
    "cn_def": "旅程；旅行",
    "en_def": "a trip from one place to another, often a long one",
    "sentence": "A: How was your trip to the factory in the north last week, and did you manage to finish the safety inspection before the weekend? B: The {{BLANK}} took nearly nine hours by train and bus because of heavy snow, but I arrived in time and finished the inspection on Friday afternoon.",
    "cn": "A：你上週去北部工廠的行程怎麼樣，有在週末前完成安全檢查嗎？ B：因為大雪，這趟【旅程】搭火車和巴士花了將近九個小時，不過我及時抵達，並在週五下午完成了檢查。"
  },
  {
    "word": "expedition",
    "pos": "n.",
    "cn_def": "遠征；探險；考察旅行",
    "en_def": "an organized trip made for a special purpose, such as science or exploring",
    "sentence": "A: I heard our outdoor equipment company is sponsoring a group of climbers this spring, so where exactly are they planning to go? B: They are joining an {{BLANK}} to the Himalayas for six weeks, and they will test our new tents and jackets in very cold and windy conditions.",
    "cn": "A：我聽說我們戶外用品公司今年春天要贊助一群登山客，他們究竟打算去哪裡？ B：他們要參加為期六週的喜馬拉雅山【遠征】，並會在非常寒冷且強風的環境中測試我們的新帳篷和外套。"
  },
  {
    "word": "quest",
    "pos": "n.",
    "cn_def": "追求；探索；尋找",
    "en_def": "a long search for something important or difficult to find",
    "sentence": "A: Why has the hotel group sent its chef to visit small farms in three different countries during the past two months? B: The chef is on a {{BLANK}} for the freshest local ingredients, because the company wants every restaurant menu to feature special dishes that guests cannot find anywhere else.",
    "cn": "A：為什麼這家飯店集團在過去兩個月內派主廚去拜訪三個不同國家的小農場？ B：主廚正在【尋找】最新鮮的在地食材，因為公司希望每間餐廳的菜單都能推出客人在其他地方吃不到的特色料理。"
  },
  {
    "word": "venture",
    "pos": "n.",
    "cn_def": "（有風險的）事業；冒險",
    "en_def": "a new business or activity that involves some risk",
    "sentence": "A: Is it true that Mr. Tanaka is leaving the bank next month after working there for more than fifteen years? B: Yes, he and his sister are starting a new business {{BLANK}} together, a small travel agency that plans hiking and camping trips for families who live in big cities.",
    "cn": "A：田中先生在銀行工作了十五年以上，下個月要離職是真的嗎？ B：是的，他和他姊姊要一起展開一項新的商業【冒險事業】，開一間小型旅行社，為住在大城市的家庭規劃健行和露營旅程。"
  },
  {
    "word": "discovery",
    "pos": "n.",
    "cn_def": "發現；發現的事物",
    "en_def": "the act of finding something that was not known before",
    "sentence": "A: Why are so many reporters waiting outside the museum this morning, and why has the director canceled all of her afternoon meetings? B: A team of researchers made an exciting {{BLANK}} of ancient coins near the river last week, and the director will present them to the public at noon today.",
    "cn": "A：為什麼今天早上有這麼多記者在博物館外面等候，館長又為什麼取消了她下午所有的會議？ B：一組研究人員上週在河邊有了令人振奮的古錢幣【發現】，館長今天中午將向大眾展示這些錢幣。"
  },
  {
    "word": "trail",
    "pos": "n.",
    "cn_def": "小徑；步道",
    "en_def": "a path through the countryside, forest, or mountains",
    "sentence": "A: Our team-building weekend is next month, so do you know a good place where twenty employees can walk together safely? B: The national park has a wide forest {{BLANK}} that takes about three hours to complete, and there are rest areas, clean toilets, and a small café near the end.",
    "cn": "A：我們的團隊建立週末活動在下個月，你知道哪裡有適合二十名員工安全地一起健行的好地方嗎？ B：國家公園有一條寬敞的森林【步道】，大約三個小時可以走完，沿途有休息區、乾淨的廁所，終點附近還有一間小咖啡館。"
  },
  {
    "word": "voyage",
    "pos": "n.",
    "cn_def": "航行；航程",
    "en_def": "a long trip, especially by sea or in space",
    "sentence": "A: Why did the cruise company hire so many extra kitchen staff and entertainers for the trip that starts next Monday? B: It is a three-week {{BLANK}} across the Pacific Ocean with more than two thousand passengers, so the ship needs extra workers to prepare meals and keep guests busy every evening.",
    "cn": "A：為什麼郵輪公司為下週一出發的旅程額外雇用了這麼多廚房人員和表演者？ B：那是一趟橫越太平洋、為期三週的【航行】，船上有兩千多名乘客，所以需要更多員工來準備餐點，並讓客人每晚都有活動可以參加。"
  },
  {
    "word": "escape",
    "pos": "n.",
    "cn_def": "逃離；逃避；解脫",
    "en_def": "a way of forgetting about daily problems or a stressful situation for a short time",
    "sentence": "A: You always look so relaxed when you come back to the office on Monday, so what do you usually do on weekends? B: My husband and I drive to a quiet cabin in the mountains, and it is the perfect {{BLANK}} from the noise of the city and the pressure of our busy jobs.",
    "cn": "A：你每週一回到辦公室時看起來總是很放鬆，你週末通常都做些什麼？ B：我和我先生會開車到山上一間安靜的小木屋，那是【逃離】城市喧囂和繁忙工作壓力的完美去處。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險；危險",
    "en_def": "the possibility that something bad or dangerous may happen",
    "sentence": "A: Should we let our guests go kayaking on the lake tomorrow afternoon if the weather report says there might be strong winds? B: I don't think so, because there is a serious {{BLANK}} that the boats could turn over, and our insurance does not cover water activities in bad weather.",
    "cn": "A：如果氣象預報說明天下午可能有強風，我們還應該讓客人去湖上划獨木舟嗎？ B：我認為不應該，因為船有翻覆的嚴重【風險】，而且我們的保險不涵蓋惡劣天氣下的水上活動。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰；難題",
    "en_def": "something new and difficult that tests your skill or ability",
    "sentence": "A: Why did you accept the job in Singapore when you already had a good position and a comfortable life here in Taipei? B: I wanted a new {{BLANK}}, and managing a team of people from five different countries will help me improve my leadership and communication skills much faster.",
    "cn": "A：你在台北已經有不錯的職位和舒適的生活，為什麼還接受新加坡的工作？ B：我想要一個新的【挑戰】，管理來自五個不同國家的團隊會幫助我更快提升領導和溝通能力。"
  },
  {
    "word": "thrill",
    "pos": "n.",
    "cn_def": "興奮；激動；刺激",
    "en_def": "a sudden strong feeling of excitement and pleasure",
    "sentence": "A: Why do you think the zip-line tour is the most popular activity at the resort, even though the ticket is quite expensive? B: Most guests love the {{BLANK}} of flying over the jungle at high speed, and they also enjoy the beautiful view of the waterfalls and the ocean from above.",
    "cn": "A：雖然票價相當貴，你為什麼認為高空滑索行程是度假村最受歡迎的活動？ B：大部分客人都喜歡在叢林上空高速飛越的【刺激】感，也很享受從上方看到瀑布和海洋的美麗景色。"
  },
  {
    "word": "excitement",
    "pos": "n.",
    "cn_def": "興奮；激動",
    "en_def": "a feeling of being very happy and eager about something",
    "sentence": "A: Why is everyone in the marketing department talking so loudly and smiling so much this morning? B: There is a lot of {{BLANK}} because the manager just told us that our team won the annual sales award, and the prize is a four-day trip to Bali for everyone in the department.",
    "cn": "A：為什麼今天早上行銷部的每個人都說話這麼大聲、笑得這麼開心？ B：大家都很【興奮】，因為經理剛告訴我們，我們團隊贏得了年度業績獎，獎品是全部門同仁四天的峇里島之旅。"
  },
  {
    "word": "wilderness",
    "pos": "n.",
    "cn_def": "荒野；未開發地區",
    "en_def": "a large natural area where nobody lives and nature has not been changed",
    "sentence": "A: Should I bring my laptop and phone charger on the company's survival training trip next week? B: You can bring them, but they won't be very useful, because we will spend three days in the {{BLANK}}, far from any towns, roads, or electricity, and there is no phone signal there.",
    "cn": "A：下週公司的野外求生訓練之旅，我應該帶筆電和手機充電器嗎？ B：你可以帶，但用處不大，因為我們會在【荒野】中待三天，遠離任何城鎮、道路和電力，那裡也沒有手機訊號。"
  },
  {
    "word": "survival",
    "pos": "n.",
    "cn_def": "生存；存活",
    "en_def": "the state of continuing to live or exist, especially after danger or difficulty",
    "sentence": "A: Why did the hiking club ask every new member to attend a two-day training course before joining the mountain trips? B: The course teaches basic {{BLANK}} skills, such as how to find clean water, build a simple shelter, and stay warm if someone gets lost in bad weather.",
    "cn": "A：為什麼登山社要求每位新成員在參加登山活動前，先上兩天的訓練課程？ B：這門課教基本的【求生】技巧，例如如何找到乾淨的水、搭建簡單的避難所，以及有人在惡劣天氣中迷路時如何保暖。"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "cn_def": "勇敢的",
    "en_def": "willing to do things that are dangerous or difficult without showing fear",
    "sentence": "A: Did you hear what happened at the hotel pool yesterday afternoon when a small child fell into the deep water? B: Yes, a {{BLANK}} young lifeguard jumped in immediately and pulled the child out, and the hotel manager has decided to give him a special award at next week's staff meeting.",
    "cn": "A：你有聽說昨天下午飯店泳池發生的事嗎？有個小孩掉進了深水區。 B：有，一位【勇敢的】年輕救生員立刻跳下水把孩子救上來，飯店經理決定在下週的員工會議上頒給他特別獎。"
  },
  {
    "word": "daring",
    "pos": "adj.",
    "cn_def": "大膽的；勇於冒險的",
    "en_def": "brave enough to do something dangerous, new, or unusual",
    "sentence": "A: What did the investors think about the plan to open our first restaurant on a boat that travels along the river every evening? B: They said it was a {{BLANK}} idea that nobody in the city had tried before, but they agreed to fund it because tourists would probably love the experience.",
    "cn": "A：投資人對於我們把第一間餐廳開在每晚沿河航行的船上這個計畫有什麼看法？ B：他們說這是一個城裡從未有人嘗試過的【大膽的】構想，但他們同意出資，因為觀光客很可能會喜愛這種體驗。"
  },
  {
    "word": "fearless",
    "pos": "adj.",
    "cn_def": "無畏的；大無畏的",
    "en_def": "not afraid of anything",
    "sentence": "A: Who do you think should guide the group of guests on the rock-climbing tour this Saturday morning? B: Maria would be perfect, because she is {{BLANK}} on steep cliffs, she has ten years of experience, and she always explains the safety rules clearly so that nervous beginners feel calm.",
    "cn": "A：你認為這週六早上應該由誰帶領客人參加攀岩行程？ B：瑪麗亞再適合不過了，因為她在陡峭的懸崖上【毫無畏懼】，有十年的經驗，而且總是把安全規則解釋得很清楚，讓緊張的初學者感到安心。"
  },
  {
    "word": "wild",
    "pos": "adj.",
    "cn_def": "野生的；未經馴化的",
    "en_def": "living or growing in nature, not kept or controlled by people",
    "sentence": "A: Is it safe for our tour group to leave food outside the tents at the campsite tonight after dinner? B: No, the park ranger warned us that {{BLANK}} animals such as bears and foxes often come close to the camp at night, so we must lock all the food in the cars.",
    "cn": "A：今晚晚餐後，我們旅行團把食物留在營地帳篷外面安全嗎？ B：不安全，公園管理員警告我們，熊和狐狸等【野生】動物晚上常會靠近營地，所以我們必須把所有食物鎖在車裡。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的；遙遠的",
    "en_def": "far away from towns, cities, and other people",
    "sentence": "A: Why does it take so long to deliver our products to the new customer in the mountains, even when we use express shipping? B: The village is in a very {{BLANK}} area with only one narrow road, so the delivery trucks can go there just twice a week when the weather is good.",
    "cn": "A：為什麼即使用快遞，把產品送到山區的新客戶那裡還是要花這麼久？ B：那個村莊位於非常【偏遠的】地區，只有一條狹窄的道路，所以貨車只有在天氣好的時候，每週才能去兩次。"
  },
  {
    "word": "unpredictable",
    "pos": "adj.",
    "cn_def": "無法預測的；難以預料的",
    "en_def": "changing so often that you cannot know what will happen",
    "sentence": "A: Should we hold the company picnic by the sea in early October, or is it better to plan an indoor event this year? B: I prefer an indoor event, because the weather near the coast is very {{BLANK}} in autumn, and a sudden storm could ruin all the food and games we prepare.",
    "cn": "A：我們應該在十月初到海邊辦公司野餐，還是今年最好規劃室內活動？ B：我比較喜歡室內活動，因為秋天海岸附近的天氣非常【難以預測】，一場突來的暴風雨可能會毀了我們準備的所有食物和遊戲。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "able to hurt or harm people",
    "sentence": "A: Why did the tour company cancel the boat trip to the small island this afternoon, even though most passengers had already paid? B: The captain said the waves were too high and it was {{BLANK}} to sail, so the company is offering everyone a full refund or a free ticket for another day.",
    "cn": "A：為什麼旅行社今天下午取消了去小島的船程，即使大部分乘客都已經付款了？ B：船長說浪太高，出航很【危險】，所以公司提供每個人全額退款，或改天使用的免費船票。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經歷；體驗",
    "en_def": "something that happens to you and affects how you feel",
    "sentence": "A: How was your weekend trip to the desert with the new clients from Dubai, and did they enjoy the activities you planned? B: It was an amazing {{BLANK}} for all of us, because we rode camels, watched the sunset from the sand dunes, and ate a traditional dinner under the stars.",
    "cn": "A：你和杜拜的新客戶去沙漠的週末之旅怎麼樣？他們喜歡你安排的活動嗎？ B：對我們所有人來說都是一次很棒的【經歷】，因為我們騎了駱駝、在沙丘上看日落，還在星空下吃了傳統晚餐。"
  },
  {
    "word": "wander",
    "pos": "v.",
    "cn_def": "閒逛；漫步",
    "en_def": "to walk slowly around a place without a clear direction or purpose",
    "sentence": "A: What did you do during the long break between your two meetings in Kyoto yesterday? B: I decided to {{BLANK}} through the quiet streets near the old temples for about two hours, and I found a lovely tea shop where I bought some gifts for my coworkers back home.",
    "cn": "A：昨天你在京都兩場會議之間的長時間空檔做了什麼？ B：我決定在古寺附近安靜的街道上【漫步】大約兩個小時，還發現了一間很棒的茶舖，在那裡幫家鄉的同事買了一些禮物。"
  },
  {
    "word": "roam",
    "pos": "v.",
    "cn_def": "漫遊；閒逛；徜徉",
    "en_def": "to move or travel freely around a large area",
    "sentence": "A: What makes the safari park different from an ordinary zoo, and why are the tickets so popular with families? B: In the safari park, the animals can {{BLANK}} across large open fields instead of living in small cages, and visitors watch them safely from special buses with big windows.",
    "cn": "A：野生動物園和一般動物園有什麼不同？為什麼門票這麼受家庭歡迎？ B：在野生動物園裡，動物可以在廣大的開放草原上自由【漫遊】，而不是住在小籠子裡，遊客則從有大窗戶的特殊巴士上安全地觀賞牠們。"
  },
  {
    "word": "navigate",
    "pos": "v.",
    "cn_def": "導航；找路；駕駛（船、飛機等）",
    "en_def": "to find the right way to go from one place to another",
    "sentence": "A: How will we find the hotel if our phones lose signal while we are driving through the mountains tonight? B: Don't worry, Ken brought a paper map and a compass, and he learned how to {{BLANK}} without GPS when he worked as a tour guide in Canada for five years.",
    "cn": "A：如果今晚我們開車穿越山區時手機沒有訊號，要怎麼找到飯店？ B：別擔心，肯帶了紙本地圖和指南針，他在加拿大當了五年導遊，學會了如何在沒有衛星導航的情況下【找路】。"
  },
  {
    "word": "trek",
    "pos": "v.",
    "cn_def": "長途跋涉；徒步旅行",
    "en_def": "to make a long, difficult journey, usually on foot",
    "sentence": "A: Why are the new hiking boots selling so quickly in our store this month, even though they cost more than the old model? B: Many customers plan to {{BLANK}} across the mountains during the holiday season, and they want strong, waterproof boots that will keep their feet dry and comfortable.",
    "cn": "A：為什麼新款登山靴這個月在我們店裡賣得這麼快，雖然它比舊款貴？ B：許多顧客計畫在假期期間徒步【長途跋涉】穿越山區，他們想要堅固又防水的靴子，讓雙腳保持乾燥舒適。"
  },
  {
    "word": "boldly",
    "pos": "adv.",
    "cn_def": "大膽地；勇敢地",
    "en_def": "in a brave and confident way, without fear",
    "sentence": "A: How did our small company manage to win the contract when three much larger firms were also competing for it? B: Our director spoke {{BLANK}} at the final meeting, promised a faster delivery schedule, and showed the clients a creative plan that none of the other companies had thought of.",
    "cn": "A：當另外三家大得多的公司也在競爭時，我們這家小公司是怎麼贏得合約的？ B：我們的總監在最後一次會議上【大膽地】發言，承諾更快的交貨時程，還向客戶展示了其他公司都沒想到的創意企畫。"
  },
  {
    "word": "freely",
    "pos": "adv.",
    "cn_def": "自由地；無拘束地",
    "en_def": "without being controlled or limited",
    "sentence": "A: Do the guests on the island tour have to stay with the guide all day, or can they choose their own activities? B: After lunch, they can move around the island {{BLANK}}, so some people go swimming, others visit the local market, and a few just relax on the beach until the boat leaves.",
    "cn": "A：參加島嶼行程的客人必須整天跟著導遊，還是可以自己選擇活動？ B：午餐後他們可以在島上【自由地】活動，所以有些人去游泳，有些人逛當地市場，還有幾個人就在沙灘上放鬆到船開為止。"
  },
  {
    "word": "unexpectedly",
    "pos": "adv.",
    "cn_def": "出乎意料地；意外地",
    "en_def": "in a way that surprises you because you did not think it would happen",
    "sentence": "A: Why didn't the hiking group reach the top of the mountain on Saturday, when they had planned the trip for months? B: The weather changed {{BLANK}} in the early afternoon, and the guide decided to turn back because thick clouds and strong rain made the path too slippery to continue.",
    "cn": "A：為什麼登山隊週六沒有登上山頂？他們可是計畫了好幾個月。 B：天氣在午後【出乎意料地】變了，因為濃厚的雲層和大雨讓山路太滑無法繼續，嚮導決定折返。"
  }
];

const MCQS = [
  {
    "q": "The new manager wants to visit every branch in her first month. She hopes to _____ ways to reduce costs without cutting staff.",
    "options": [
      "wander",
      "roam",
      "trek",
      "explore"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The mining company has received permission to search the northern hills. Oil _____ will begin there as soon as the snow melts.",
    "options": [
      "excitement",
      "voyage",
      "exploration",
      "survival"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Passengers should bring snacks and water for the bus ride. The _____ from the airport to the resort takes about four hours.",
    "options": [
      "thrill",
      "journey",
      "risk",
      "quest"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The university is sending twelve scientists to study ice near the South Pole. The _____ will last for three months.",
    "options": [
      "expedition",
      "escape",
      "discovery",
      "excitement"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The company has spent years improving its coffee beans. Its _____ for the perfect flavor has made it famous worldwide.",
    "options": [
      "trail",
      "wilderness",
      "quest",
      "journey"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Two former coworkers have opened a small bicycle tour company together. The new _____ has already attracted many foreign visitors.",
    "options": [
      "thrill",
      "survival",
      "trail",
      "venture"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Workers building the new subway line found old pottery under the street. The city has stopped construction to study the _____.",
    "options": [
      "challenge",
      "discovery",
      "voyage",
      "risk"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Hikers are asked to stay on the marked path at all times. Leaving the _____ can damage plants and cause people to get lost.",
    "options": [
      "trail",
      "quest",
      "exploration",
      "excitement"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The cargo ship left the port of Kaohsiung on Monday. Its _____ to Rotterdam will take about thirty days.",
    "options": [
      "wilderness",
      "risk",
      "challenge",
      "voyage"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Many office workers visit the rooftop garden at lunchtime. It offers a quiet _____ from crowded desks and ringing phones.",
    "options": [
      "discovery",
      "escape",
      "expedition",
      "survival"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Investing all of your savings in one company is not wise. Spreading your money across several funds reduces the _____.",
    "options": [
      "trail",
      "voyage",
      "risk",
      "quest"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Opening ten stores in one year will not be easy. Finding enough trained staff is the biggest _____ for the company.",
    "options": [
      "challenge",
      "escape",
      "exploration",
      "journey"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Visitors at the theme park waited two hours for the new roller coaster. Many said the _____ of the ride was worth it.",
    "options": [
      "trail",
      "venture",
      "thrill",
      "wilderness"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Fans waited outside the store all night for the new phone. Their _____ grew as the opening time came closer.",
    "options": [
      "excitement",
      "risk",
      "expedition",
      "discovery"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The tour takes guests far from any roads or buildings. They will camp in the _____ for five nights.",
    "options": [
      "excitement",
      "challenge",
      "venture",
      "wilderness"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Sales have dropped sharply for three years in a row. The new owner says lower costs are necessary for the store's _____.",
    "options": [
      "voyage",
      "survival",
      "thrill",
      "trail"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The firefighter carried two workers out of the burning warehouse. The mayor praised him for his _____ actions.",
    "options": [
      "brave",
      "remote",
      "wild",
      "unpredictable"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The young designer shocked everyone with bright, unusual colors. Her _____ style helped the brand attract younger customers.",
    "options": [
      "remote",
      "dangerous",
      "wild",
      "daring"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The reporter has covered wars and natural disasters around the world. Her _____ attitude has earned her many awards.",
    "options": [
      "remote",
      "unpredictable",
      "fearless",
      "wild"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Guests at the lodge often see deer near the river in the morning. Please do not feed any _____ animals.",
    "options": [
      "brave",
      "wild",
      "fearless",
      "daring"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The clinic serves farmers who live far from the city. Doctors fly there because the area is too _____ to reach by car.",
    "options": [
      "brave",
      "daring",
      "fearless",
      "remote"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Prices for fresh fruit change almost every week. Because the market is so _____, the restaurant updates its menu often.",
    "options": [
      "unpredictable",
      "brave",
      "fearless",
      "daring"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The factory floor is wet after the pipe broke. Walking there without safety boots is _____, so please use the side door.",
    "options": [
      "brave",
      "dangerous",
      "daring",
      "fearless"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The guide gave the group an hour of free time. Many visitors chose to _____ around the market and taste local food.",
    "options": [
      "navigate",
      "explore",
      "wander",
      "trek"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The farm keeps its chickens outside instead of in cages. The birds _____ freely across the green fields all day.",
    "options": [
      "navigate",
      "explore",
      "trek",
      "roam"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The new app shows every shop and restaurant inside the mall. It helps shoppers _____ the large building easily.",
    "options": [
      "navigate",
      "roam",
      "wander",
      "trek"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The charity event raises money for local schools. Volunteers will _____ forty kilometers through the hills in two days.",
    "options": [
      "navigate",
      "roam",
      "trek",
      "explore"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The small company entered the crowded market with a cheaper product and no fear. It _____ challenged the two biggest brands in the country.",
    "options": [
      "freely",
      "boldly",
      "unexpectedly",
      "carefully"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Employees can now choose their own working hours. They move _____ between home and the office as long as projects are finished.",
    "options": [
      "boldly",
      "unexpectedly",
      "quietly",
      "freely"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The airline canceled the evening flight at the last minute. Hundreds of travelers were _____ forced to stay overnight.",
    "options": [
      "boldly",
      "freely",
      "unexpectedly",
      "quietly"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險；考察"
  },
  "exploration": {
    "pos": "n.",
    "en_def": "the act of traveling through a place to find out about it",
    "cn_def": "探索；探勘；考察"
  },
  "journey": {
    "pos": "n.",
    "en_def": "a trip from one place to another, often a long one",
    "cn_def": "旅程；旅行"
  },
  "expedition": {
    "pos": "n.",
    "en_def": "an organized trip made for a special purpose, such as science or exploring",
    "cn_def": "遠征；探險；考察旅行"
  },
  "quest": {
    "pos": "n.",
    "en_def": "a long search for something important or difficult to find",
    "cn_def": "追求；探索；尋找"
  },
  "venture": {
    "pos": "n.",
    "en_def": "a new business or activity that involves some risk",
    "cn_def": "（有風險的）事業；冒險"
  },
  "discovery": {
    "pos": "n.",
    "en_def": "the act of finding something that was not known before",
    "cn_def": "發現；發現的事物"
  },
  "trail": {
    "pos": "n.",
    "en_def": "a path through the countryside, forest, or mountains",
    "cn_def": "小徑；步道"
  },
  "voyage": {
    "pos": "n.",
    "en_def": "a long trip, especially by sea or in space",
    "cn_def": "航行；航程"
  },
  "escape": {
    "pos": "n.",
    "en_def": "a way of forgetting about daily problems or a stressful situation for a short time",
    "cn_def": "逃離；逃避；解脫"
  },
  "risk": {
    "pos": "n.",
    "en_def": "the possibility that something bad or dangerous may happen",
    "cn_def": "風險；危險"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something new and difficult that tests your skill or ability",
    "cn_def": "挑戰；難題"
  },
  "thrill": {
    "pos": "n.",
    "en_def": "a sudden strong feeling of excitement and pleasure",
    "cn_def": "興奮；激動；刺激"
  },
  "excitement": {
    "pos": "n.",
    "en_def": "a feeling of being very happy and eager about something",
    "cn_def": "興奮；激動"
  },
  "wilderness": {
    "pos": "n.",
    "en_def": "a large natural area where nobody lives and nature has not been changed",
    "cn_def": "荒野；未開發地區"
  },
  "survival": {
    "pos": "n.",
    "en_def": "the state of continuing to live or exist, especially after danger or difficulty",
    "cn_def": "生存；存活"
  },
  "brave": {
    "pos": "adj.",
    "en_def": "willing to do things that are dangerous or difficult without showing fear",
    "cn_def": "勇敢的"
  },
  "daring": {
    "pos": "adj.",
    "en_def": "brave enough to do something dangerous, new, or unusual",
    "cn_def": "大膽的；勇於冒險的"
  },
  "fearless": {
    "pos": "adj.",
    "en_def": "not afraid of anything",
    "cn_def": "無畏的；大無畏的"
  },
  "wild": {
    "pos": "adj.",
    "en_def": "living or growing in nature, not kept or controlled by people",
    "cn_def": "野生的；未經馴化的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns, cities, and other people",
    "cn_def": "偏遠的；遙遠的"
  },
  "unpredictable": {
    "pos": "adj.",
    "en_def": "changing so often that you cannot know what will happen",
    "cn_def": "無法預測的；難以預料的"
  },
  "dangerous": {
    "pos": "adj.",
    "en_def": "able to hurt or harm people",
    "cn_def": "危險的"
  },
  "experience": {
    "pos": "n.",
    "en_def": "something that happens to you and affects how you feel",
    "cn_def": "經歷；體驗"
  },
  "wander": {
    "pos": "v.",
    "en_def": "to walk slowly around a place without a clear direction or purpose",
    "cn_def": "閒逛；漫步"
  },
  "roam": {
    "pos": "v.",
    "en_def": "to move or travel freely around a large area",
    "cn_def": "漫遊；閒逛；徜徉"
  },
  "navigate": {
    "pos": "v.",
    "en_def": "to find the right way to go from one place to another",
    "cn_def": "導航；找路；駕駛（船、飛機等）"
  },
  "trek": {
    "pos": "v.",
    "en_def": "to make a long, difficult journey, usually on foot",
    "cn_def": "長途跋涉；徒步旅行"
  },
  "boldly": {
    "pos": "adv.",
    "en_def": "in a brave and confident way, without fear",
    "cn_def": "大膽地；勇敢地"
  },
  "freely": {
    "pos": "adv.",
    "en_def": "without being controlled or limited",
    "cn_def": "自由地；無拘束地"
  },
  "unexpectedly": {
    "pos": "adv.",
    "en_def": "in a way that surprises you because you did not think it would happen",
    "cn_def": "出乎意料地；意外地"
  }
};

const EXTRA_GLOSSES = {};
