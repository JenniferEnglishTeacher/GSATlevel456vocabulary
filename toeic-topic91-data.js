// Topic 91 Quiz Data: Crowded Place 擁擠的地方
// Source word list: https://www.examword.com/group-topic/crowded-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T91 - Crowded Place 擁擠的地方",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "A: Why did you leave the company's year-end party so early last Friday, when everyone else stayed until midnight? B: The restaurant was so {{BLANK}} that I could hardly move between the tables, and I also had to catch the last bus home because my car was at the repair shop.",
    "cn": "A：上週五公司尾牙，大家都待到午夜，你為什麼那麼早離開？ B：餐廳太【擁擠】了，我幾乎無法在桌子之間走動，而且我的車在修車廠，所以我還得趕最後一班公車回家。"
  },
  {
    "word": "packed",
    "pos": "adj.",
    "cn_def": "擠滿人的；爆滿的",
    "en_def": "completely full of people",
    "sentence": "A: Did you manage to find a seat at the product launch in the hotel ballroom yesterday afternoon? B: No, the room was {{BLANK}} with reporters, buyers and fans of the brand, so I stood near the back door for two hours and took notes on my phone instead.",
    "cn": "A：你昨天下午在飯店宴會廳的產品發表會有找到座位嗎？ B：沒有，會場【擠滿】了記者、採購和品牌粉絲，所以我在後門附近站了兩個小時，改用手機做筆記。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "繁忙的；熱鬧的",
    "en_def": "full of people or activity",
    "sentence": "A: Should we hold the client lunch at the café across from the train station or somewhere quieter? B: That café is always very {{BLANK}} at noon because office workers from the nearby towers go there, so I think the hotel restaurant would be better for a serious business talk.",
    "cn": "A：我們要在火車站對面的咖啡廳還是比較安靜的地方請客戶吃午餐？ B：那家咖啡廳中午總是非常【繁忙】，因為附近大樓的上班族都去那裡，所以我覺得飯店餐廳比較適合談正式的生意。"
  },
  {
    "word": "jammed",
    "pos": "adj.",
    "cn_def": "擠得水洩不通的；塞滿的",
    "en_def": "so full that people or cars cannot move",
    "sentence": "A: Why didn't the delivery van arrive at the warehouse by ten o'clock as the driver promised this morning? B: The roads near the stadium were completely {{BLANK}} with cars because of the football final, so the driver waited in the same spot for almost an hour before he could turn around.",
    "cn": "A：送貨車為什麼沒有像司機今天早上答應的那樣在十點前抵達倉庫？ B：因為足球決賽，體育場附近的道路完全被車子【擠得水洩不通】，司機在同一個地方等了將近一個小時才能掉頭。"
  },
  {
    "word": "congested",
    "pos": "adj.",
    "cn_def": "壅塞的；擁擠的",
    "en_def": "too full of traffic or people",
    "sentence": "A: Why is the city planning to build a new subway line to the industrial park in the north? B: The main highway to the park is heavily {{BLANK}} every morning and evening, so workers waste a lot of time in their cars, and many companies say they are losing good employees because of it.",
    "cn": "A：市政府為什麼計畫興建一條通往北部工業區的新捷運線？ B：通往工業區的主要公路每天早晚都嚴重【壅塞】，工人在車上浪費很多時間，許多公司說他們因此流失了優秀的員工。"
  },
  {
    "word": "overcrowded",
    "pos": "adj.",
    "cn_def": "過度擁擠的",
    "en_def": "having too many people inside",
    "sentence": "A: Why did the manager decide to rent a second floor in the building next door for the design team? B: Our office became {{BLANK}} after we hired twenty new staff this year, and people were sharing desks and fighting over meeting rooms, so it was hard for anyone to work properly.",
    "cn": "A：經理為什麼決定在隔壁大樓多租一層樓給設計團隊？ B：我們今年雇用了二十名新員工後，辦公室變得【過度擁擠】，大家共用桌子、搶會議室，所以任何人都很難好好工作。"
  },
  {
    "word": "bustling",
    "pos": "adj.",
    "cn_def": "熙熙攘攘的；熱鬧的",
    "en_def": "full of busy, noisy activity",
    "sentence": "A: What did the visiting buyers from Germany enjoy most during their business trip to Taipei last week? B: They loved walking through the {{BLANK}} night market near their hotel, where hundreds of people were buying snacks and clothes, and they said it was much more exciting than the quiet streets at home.",
    "cn": "A：上週來台北出差的德國買家最喜歡什麼？ B：他們很喜歡逛飯店附近【熙熙攘攘】的夜市，那裡有好幾百人在買小吃和衣服，他們說那比家鄉安靜的街道刺激多了。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "熱鬧的；充滿活力的",
    "en_def": "full of energy and activity",
    "sentence": "A: Which area would you recommend for our team dinner after the sales conference on Thursday evening? B: I'd suggest the old harbor district, because it has a {{BLANK}} atmosphere with street musicians and outdoor restaurants, and the staff will enjoy relaxing there after three long days of meetings.",
    "cn": "A：週四晚上業務大會結束後，你推薦哪個區域讓我們團隊聚餐？ B：我建議舊港區，因為那裡有街頭音樂家和露天餐廳，氣氛很【熱鬧】，員工開了三天的長會後會很喜歡在那裡放鬆。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "吵鬧的",
    "en_def": "making a lot of loud sound",
    "sentence": "A: Why did you ask the hotel to move you to a different room on your first night in Bangkok? B: My first room faced a {{BLANK}} street full of motorbikes, buses and food stalls, and I couldn't sleep at all, so I was worried I would be too tired for my meeting the next morning.",
    "cn": "A：你在曼谷第一晚為什麼要求飯店幫你換房間？ B：我第一間房間面對一條擠滿機車、公車和小吃攤的【吵鬧】街道，我完全睡不著，所以很擔心隔天早上開會時會太累。"
  },
  {
    "word": "queue",
    "pos": "n.",
    "cn_def": "排隊的隊伍；行列",
    "en_def": "a line of people waiting for something",
    "sentence": "A: How long did it take you to get through passport control at the airport after your flight from Seoul? B: There was a long {{BLANK}} of tourists at every counter because three international flights landed at the same time, so I waited almost forty minutes before an officer checked my documents.",
    "cn": "A：你從首爾搭機抵達後，在機場通過護照查驗花了多久？ B：因為三班國際航班同時降落，每個櫃台前都有遊客排成長長的【隊伍】，所以我等了將近四十分鐘，才有官員檢查我的證件。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群；群眾",
    "en_def": "a large group of people in one place",
    "sentence": "A: Why did the store open its doors thirty minutes earlier than usual on the first day of the holiday sale? B: A huge {{BLANK}} of shoppers was already waiting outside at seven o'clock, so the manager opened early to keep people safe and to stop the line from blocking the main road.",
    "cn": "A：假日特賣第一天，那家店為什麼比平常提早三十分鐘開門？ B：七點時外面已經有大批購物【人群】在等候，所以經理提早開門以確保民眾安全，也避免隊伍擋住大馬路。"
  },
  {
    "word": "throng",
    "pos": "n.",
    "cn_def": "一大群人；人潮",
    "en_def": "a very large crowd of people",
    "sentence": "A: Was it difficult to reach the company's booth at the international travel fair in the convention center? B: Yes, a {{BLANK}} of visitors filled the main hall all afternoon, so our sales staff had to guide clients through a side entrance near the loading area to reach our stand.",
    "cn": "A：要到國際旅展會場中的公司攤位困難嗎？ B：是的，整個下午大批【人潮】擠滿主展廳，所以我們的業務人員只好帶客戶從靠近卸貨區的側門進來到我們的攤位。"
  },
  {
    "word": "rush",
    "pos": "n.",
    "cn_def": "(人潮的)湧入；匆忙",
    "en_def": "a time when many people hurry to do the same thing",
    "sentence": "A: Why does the coffee shop on the ground floor hire two extra baristas every weekday morning? B: There is a big {{BLANK}} of office workers between eight and nine o'clock, when everyone wants a drink before work, and the owner doesn't want customers to wait too long and leave.",
    "cn": "A：一樓的咖啡店為什麼每個平日早上都多請兩名咖啡師？ B：八點到九點之間會有大批上班族【湧入】，大家都想在上班前買杯飲料，老闆不希望客人等太久而離開。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars and other vehicles moving on a road",
    "sentence": "A: Why are you leaving the office so early to meet the client at the airport this afternoon? B: The {{BLANK}} on the expressway is usually terrible on Friday afternoons, especially near the toll station, and I don't want our most important customer to wait alone in the arrival hall.",
    "cn": "A：你今天下午為什麼這麼早離開辦公室去機場接客戶？ B：週五下午快速道路上的【車流】通常很糟，尤其是收費站附近，我不想讓我們最重要的客戶獨自在入境大廳等待。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: How does your new assistant get to the office now that she has moved to a town outside the city? B: She has to {{BLANK}} by train for about ninety minutes each way, so we agreed that she can work from home on Fridays to save time and energy.",
    "cn": "A：你的新助理搬到市區外的小鎮後，現在怎麼來上班？ B：她每趟要搭大約九十分鐘的火車【通勤】，所以我們同意她週五可以在家工作，以節省時間和體力。"
  },
  {
    "word": "shoulder",
    "pos": "v.",
    "cn_def": "用肩膀擠開；擠過",
    "en_def": "to push through people using your shoulder",
    "sentence": "A: How did the reporter get close enough to ask the CEO a question after the press conference ended? B: She had to {{BLANK}} her way through dozens of photographers who were standing in front of the stage, and she finally reached him just before he got into his car.",
    "cn": "A：記者會結束後，那位記者是怎麼靠近到能向執行長提問的？ B：她必須【用肩膀擠】過站在舞台前的幾十位攝影師，終於在他上車前一刻追上他。"
  },
  {
    "word": "squeeze",
    "pos": "v.",
    "cn_def": "擠進；硬塞",
    "en_def": "to force yourself into a small space",
    "sentence": "A: Were you able to take the elevator up to the meeting on the twentieth floor this morning? B: Yes, but I had to {{BLANK}} into a tiny space next to a delivery man with a large box, because everyone in the building was trying to get to work before nine o'clock.",
    "cn": "A：你今天早上有搭到電梯上二十樓開會嗎？ B：有，但我得【擠進】一個抱著大箱子的送貨員旁邊的小小空間，因為大樓裡每個人都想在九點前趕到公司。"
  },
  {
    "word": "jostle",
    "pos": "v.",
    "cn_def": "推擠",
    "en_def": "to push against other people in a crowd",
    "sentence": "A: Why did the museum decide to sell tickets online for the new exhibition with fixed entry times? B: On the opening weekend, visitors started to {{BLANK}} each other in front of the famous paintings, and a few people almost fell, so the director wanted to control the number of guests.",
    "cn": "A：博物館為什麼決定新展覽改為網路售票並固定入場時間？ B：開幕週末時，參觀者在名畫前開始互相【推擠】，有幾個人差點跌倒，所以館長想控制參觀人數。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集",
    "en_def": "to come together in one place",
    "sentence": "A: Why are so many people standing outside the bank on Main Street this morning? B: Customers started to {{BLANK}} there before opening time because the bank is offering a special savings account with a high interest rate, but only to the first two hundred people.",
    "cn": "A：今天早上為什麼有那麼多人站在主街的銀行外面？ B：顧客在開門前就開始在那裡【聚集】，因為銀行推出一種高利率的特別儲蓄帳戶，但只限前兩百人。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "集合",
    "en_def": "to meet together as a group for a purpose",
    "sentence": "A: What should all employees do if the fire alarm goes off during the safety drill next Tuesday? B: Everyone must leave by the nearest stairs and {{BLANK}} in the parking lot behind the building, where each team leader will count their staff and report to the security manager.",
    "cn": "A：如果下週二安全演練時火災警報響了，所有員工應該怎麼做？ B：每個人都必須從最近的樓梯離開，並到大樓後面的停車場【集合】，各組組長會在那裡清點人數並向保全經理回報。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；藝術節；音樂節",
    "en_def": "a special event with music, food or celebrations",
    "sentence": "A: Why are all the hotels in the city fully booked for the second weekend of next month? B: A famous music {{BLANK}} takes place in the riverside park that weekend, and thousands of fans from all over Asia are coming, so you should book your business trip for a different date.",
    "cn": "A：為什麼市內所有飯店下個月第二個週末都客滿了？ B：那個週末河濱公園會舉辦一場知名的音樂【節】，成千上萬來自亞洲各地的樂迷都會來，所以你應該把出差安排在其他日期。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "a place where people buy and sell goods",
    "sentence": "A: Where does the restaurant buy such fresh fish and vegetables for its lunch menu every day? B: The chef goes to the local {{BLANK}} at five o'clock every morning, before it gets too crowded, so he can choose the best products and talk directly with the farmers and fishermen.",
    "cn": "A：那家餐廳每天的午餐菜單哪來這麼新鮮的魚和蔬菜？ B：主廚每天早上五點，趁還沒太擁擠前就去當地【市場】，這樣他可以挑選最好的產品，並直接和農夫及漁夫交談。"
  },
  {
    "word": "station",
    "pos": "n.",
    "cn_def": "車站",
    "en_def": "a place where trains or buses stop for passengers",
    "sentence": "A: How can our visitors from Japan get to the factory from the airport tomorrow without a car? B: They can take the express train to the central {{BLANK}}, and our driver will wait for them at the north exit with a sign showing the company name.",
    "cn": "A：我們的日本訪客明天沒有車，要怎麼從機場到工廠？ B：他們可以搭快車到中央【車站】，我們的司機會拿著寫有公司名稱的牌子在北出口等他們。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "購物中心；商場",
    "en_def": "a large building with many shops and restaurants",
    "sentence": "A: Where is the company planning to open its first clothing store in Kaohsiung next spring? B: We signed a contract for a space on the second floor of a new shopping {{BLANK}} near the harbor, which attracts thousands of families and tourists every weekend.",
    "cn": "A：公司明年春天計畫在高雄哪裡開第一家服飾店？ B：我們簽約租下港口附近一間新【購物中心】二樓的店面，那裡每個週末都吸引成千上萬的家庭和觀光客。"
  },
  {
    "word": "venue",
    "pos": "n.",
    "cn_def": "場地；會場",
    "en_def": "the place where an event happens",
    "sentence": "A: Have you found a place for the company's annual awards dinner in December yet? B: Yes, we booked a {{BLANK}} by the lake that can hold three hundred guests, and it has a large stage, a good sound system and plenty of parking spaces for our staff and partners.",
    "cn": "A：你找到公司十二月年度頒獎晚宴的地點了嗎？ B：找到了，我們訂了湖邊一個可容納三百位賓客的【場地】，那裡有大舞台、很好的音響系統，還有很多停車位給我們的員工和合作夥伴。"
  },
  {
    "word": "capacity",
    "pos": "n.",
    "cn_def": "容量；可容納人數",
    "en_def": "the largest number of people a place can hold",
    "sentence": "A: Why did the organizers stop selling tickets for the technology seminar two weeks early? B: The hall has a {{BLANK}} of only five hundred people because of fire safety rules, and all the seats were taken within a few days after the famous speaker was announced.",
    "cn": "A：主辦單位為什麼提早兩週停止販售科技研討會的門票？ B：因為消防安全規定，那個大廳的【可容納人數】只有五百人，而在宣布知名講者後幾天內所有座位就被訂光了。"
  },
  {
    "word": "density",
    "pos": "n.",
    "cn_def": "密度",
    "en_def": "how many people or things are in an area",
    "sentence": "A: Why does the company want to open its new branch in that part of the city instead of the suburbs? B: The population {{BLANK}} there is very high, with many apartment buildings and office towers close together, so a small shop can reach thousands of potential customers every day.",
    "cn": "A：公司為什麼想在市內那個區域而不是郊區開設新分店？ B：那裡的人口【密度】非常高，許多公寓大樓和辦公大樓緊鄰在一起，所以一家小店每天就能接觸到成千上萬的潛在顧客。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公共的；公眾的",
    "en_def": "open to or used by everyone",
    "sentence": "A: How do most of your employees travel to the new office in the science park? B: Most of them use {{BLANK}} transportation, such as the subway and city buses, because parking near the office is expensive, and the company gives everyone a monthly travel card as a benefit.",
    "cn": "A：你們大部分員工怎麼到科學園區的新辦公室？ B：他們大多搭乘【公共】交通工具，像是捷運和市公車，因為辦公室附近停車很貴，而且公司每個月都發給每個人一張交通卡作為福利。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "都市的；城市的",
    "en_def": "relating to a city or town",
    "sentence": "A: Why is the government giving money to companies that build small parks on top of office buildings? B: Many {{BLANK}} areas have very little green space because of crowded housing and busy roads, and the parks help keep buildings cool and give office workers a quiet place to relax.",
    "cn": "A：政府為什麼要補助在辦公大樓頂樓建造小公園的公司？ B：由於住宅擁擠、道路繁忙，許多【都市】地區的綠地很少，這些公園有助於讓建築物保持涼爽，也讓上班族有個安靜的地方放鬆。"
  },
  {
    "word": "downtown",
    "pos": "adv.",
    "cn_def": "往市中心；在市中心",
    "en_def": "to or in the center of a city",
    "sentence": "A: Are you driving to the client's office for the contract meeting this afternoon? B: No, I'll take the subway {{BLANK}} because there's almost no parking near their building, and the streets around the financial district are always full of taxis and delivery vans at that time.",
    "cn": "A：你今天下午要開車去客戶辦公室開合約會議嗎？ B：不，我會搭捷運【到市中心】，因為他們大樓附近幾乎沒有停車位，而且那個時段金融區周圍的街道總是擠滿計程車和送貨車。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path for people to walk on next to a road",
    "sentence": "A: Why did the city fine the restaurant owner on Garden Road last week? B: He put too many tables and chairs on the {{BLANK}} in front of his shop, so people walking by had to step into the road, which was dangerous because of the heavy traffic.",
    "cn": "A：市政府上週為什麼開罰花園路上的那位餐廳老闆？ B：他在店門前的【人行道】上擺了太多桌椅，路過的行人只好走到馬路上，因為車流量大，這樣很危險。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "月台",
    "en_def": "the area next to the tracks where people get on and off trains",
    "sentence": "A: Where should I meet the new sales representative when she arrives from Taichung tomorrow morning? B: Please wait for her on {{BLANK}} three, where the high-speed train stops, because the station is very crowded at that hour and it will be hard to find each other in the main hall.",
    "cn": "A：新的業務代表明天早上從台中抵達時，我應該在哪裡跟她碰面？ B：請在高鐵停靠的第三【月台】等她，因為那個時段車站非常擁擠，在大廳裡很難找到彼此。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動；盛事",
    "en_def": "a planned public or social occasion",
    "sentence": "A: How many people came to the charity run that our company sponsored along the river on Sunday? B: More than three thousand runners took part in the {{BLANK}}, and so many families came to watch that the organizers had to close two streets and add extra toilets near the finish line.",
    "cn": "A：我們公司週日在河邊贊助的慈善路跑有多少人參加？ B：超過三千名跑者參加了這場【活動】，而且來觀看的家庭非常多，主辦單位只好封閉兩條街並在終點線附近加設廁所。"
  },
  {
    "word": "parade",
    "pos": "n.",
    "cn_def": "遊行",
    "en_def": "a public celebration in which people march or ride through the streets",
    "sentence": "A: Why is the bus to the office taking a different route this Saturday morning? B: There's a big {{BLANK}} for the national holiday on the main avenue, with marching bands, dancers and colorful floats, so the city has closed several roads until two o'clock in the afternoon.",
    "cn": "A：這個週六早上到公司的公車為什麼要改走別的路線？ B：主要大道上有國慶日的大型【遊行】，有樂隊、舞者和色彩繽紛的花車，所以市政府封閉了幾條道路，直到下午兩點。"
  },
  {
    "word": "rush hour",
    "pos": "n.phr.",
    "cn_def": "尖峰時段",
    "en_def": "the busiest time of day when people travel to or from work",
    "sentence": "A: Why did you schedule the meeting with the suppliers at ten o'clock instead of eight thirty? B: If we meet any earlier, they'll be driving across the city during {{BLANK}}, when the roads are full of commuters, and they might arrive late and feel stressed before we even start.",
    "cn": "A：你為什麼把和供應商的會議排在十點，而不是八點半？ B：如果更早開會，他們得在【尖峰時段】開車穿越市區，那時道路上擠滿通勤者，他們可能會遲到，還沒開始開會就覺得很有壓力。"
  }
];

const MCQS = [
  {
    "q": "The waiting room at the clinic was very _____ this morning. I had to stand for twenty minutes before a seat became free.",
    "options": [
      "urban",
      "crowded",
      "public",
      "noisy"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Every seat in the theater was taken for the opening night. The hall was _____ to the doors, so staff turned late visitors away.",
    "options": [
      "urban",
      "noisy",
      "public",
      "packed"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "December is the _____ season for our online shop. We hire ten extra workers to pack and ship orders.",
    "options": [
      "urban",
      "congested",
      "busy",
      "public"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The roads near the airport are heavily _____ every Friday evening. Please leave the office early if you have a flight.",
    "options": [
      "congested",
      "lively",
      "public",
      "urban"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Early every morning, the fish market is _____ with activity. Buyers and sellers shout prices while workers carry boxes of ice.",
    "options": [
      "urban",
      "bustling",
      "public",
      "congested"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The new restaurant has a _____ atmosphere with live music every night. Young office workers love to relax there after work.",
    "options": [
      "congested",
      "urban",
      "public",
      "lively"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Please close the window during the video call. The construction work outside is very _____ and the client cannot hear us.",
    "options": [
      "noisy",
      "urban",
      "public",
      "packed"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Smoking is not allowed in any _____ building in the city. This rule includes libraries, hospitals and government offices.",
    "options": [
      "noisy",
      "lively",
      "public",
      "packed"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The company designs small electric cars for _____ drivers. These cars are perfect for short trips on narrow city streets.",
    "options": [
      "noisy",
      "packed",
      "lively",
      "urban"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Customers formed a long _____ outside the bakery before it opened. Everyone wanted to buy the new limited-edition cake.",
    "options": [
      "queue",
      "density",
      "venue",
      "capacity"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "A large _____ gathered outside the stadium to welcome the team home. Police officers were sent to keep everyone safe.",
    "options": [
      "sidewalk",
      "crowd",
      "capacity",
      "density"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The restaurant prepares extra sandwiches before the lunchtime _____. Hundreds of office workers arrive between twelve and one o'clock.",
    "options": [
      "platform",
      "venue",
      "rush",
      "density"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Heavy _____ on the bridge delayed the delivery trucks by an hour. The drivers reached the warehouse after the staff had gone home.",
    "options": [
      "capacity",
      "festival",
      "density",
      "traffic"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The city holds a lantern _____ every February. Visitors come from all over the world to see the colorful lights.",
    "options": [
      "sidewalk",
      "festival",
      "capacity",
      "queue"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Farmers sell fresh fruit and vegetables at the weekend _____ in the town square. Prices are usually lower than in supermarkets.",
    "options": [
      "density",
      "platform",
      "market",
      "capacity"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The new office is a five-minute walk from the subway _____. Most staff will not need to drive to work.",
    "options": [
      "station",
      "venue",
      "density",
      "parade"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The shopping _____ has more than two hundred stores and a cinema. It is especially crowded on weekends and holidays.",
    "options": [
      "density",
      "queue",
      "mall",
      "capacity"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The hotel ballroom is the perfect _____ for our product launch. It can hold four hundred guests and has a large stage.",
    "options": [
      "venue",
      "density",
      "rush",
      "sidewalk"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The concert hall has a seating _____ of two thousand people. All the tickets for Saturday's show were sold in one hour.",
    "options": [
      "density",
      "queue",
      "parade",
      "capacity"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Because of the high population _____, apartments in the city center are small and expensive. Many families live in tall buildings.",
    "options": [
      "venue",
      "density",
      "parade",
      "sidewalk"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The café put several tables on the _____ outside its door. People walking past had to step around them carefully.",
    "options": [
      "sidewalk",
      "capacity",
      "density",
      "rush"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Passengers for the express train to Kaohsiung should wait on _____ four. The train will arrive in about ten minutes.",
    "options": [
      "density",
      "platform",
      "queue",
      "venue"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The charity dinner was the most successful _____ our company has ever organized. We raised over two million dollars for local schools.",
    "options": [
      "sidewalk",
      "density",
      "event",
      "platform"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Thousands of people lined the streets to watch the holiday _____. Marching bands and colorful floats moved slowly down the main avenue.",
    "options": [
      "capacity",
      "density",
      "queue",
      "parade"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The subway is extremely crowded during _____. Many employees now start work at ten o'clock to avoid the busiest time.",
    "options": [
      "capacity",
      "density",
      "rush hour",
      "sidewalk"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "Many employees _____ from nearby cities by high-speed train. The company pays half of their monthly travel costs.",
    "options": [
      "commute",
      "jostle",
      "assemble",
      "squeeze"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The elevator was almost full, but I managed to _____ in next to the door. I did not want to be late for the meeting.",
    "options": [
      "commute",
      "assemble",
      "gather",
      "squeeze"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Fans began to _____ one another as the singer walked out of the hotel. Security guards asked everyone to stop pushing.",
    "options": [
      "commute",
      "jostle",
      "assemble",
      "gather"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Tourists usually _____ around the clock tower at noon to watch the bells ring. It is the most popular sight in the old town.",
    "options": [
      "commute",
      "shoulder",
      "squeeze",
      "gather"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "All tour members should _____ in the hotel lobby at seven o'clock. The bus to the airport will leave fifteen minutes later.",
    "options": [
      "commute",
      "jostle",
      "assemble",
      "shoulder"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "packed": {
    "pos": "adj.",
    "en_def": "completely full of people",
    "cn_def": "擠滿人的；爆滿的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "full of people or activity",
    "cn_def": "繁忙的；熱鬧的"
  },
  "jammed": {
    "pos": "adj.",
    "en_def": "so full that people or cars cannot move",
    "cn_def": "擠得水洩不通的；塞滿的"
  },
  "congested": {
    "pos": "adj.",
    "en_def": "too full of traffic or people",
    "cn_def": "壅塞的；擁擠的"
  },
  "overcrowded": {
    "pos": "adj.",
    "en_def": "having too many people inside",
    "cn_def": "過度擁擠的"
  },
  "bustling": {
    "pos": "adj.",
    "en_def": "full of busy, noisy activity",
    "cn_def": "熙熙攘攘的；熱鬧的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of energy and activity",
    "cn_def": "熱鬧的；充滿活力的"
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "making a lot of loud sound",
    "cn_def": "吵鬧的"
  },
  "queue": {
    "pos": "n.",
    "en_def": "a line of people waiting for something",
    "cn_def": "排隊的隊伍；行列"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "人群；群眾"
  },
  "throng": {
    "pos": "n.",
    "en_def": "a very large crowd of people",
    "cn_def": "一大群人；人潮"
  },
  "rush": {
    "pos": "n.",
    "en_def": "a time when many people hurry to do the same thing",
    "cn_def": "(人潮的)湧入；匆忙"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars and other vehicles moving on a road",
    "cn_def": "交通；車流"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "shoulder": {
    "pos": "v.",
    "en_def": "to push through people using your shoulder",
    "cn_def": "用肩膀擠開；擠過"
  },
  "squeeze": {
    "pos": "v.",
    "en_def": "to force yourself into a small space",
    "cn_def": "擠進；硬塞"
  },
  "jostle": {
    "pos": "v.",
    "en_def": "to push against other people in a crowd",
    "cn_def": "推擠"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place",
    "cn_def": "聚集"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to meet together as a group for a purpose",
    "cn_def": "集合"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special event with music, food or celebrations",
    "cn_def": "節慶；藝術節；音樂節"
  },
  "market": {
    "pos": "n.",
    "en_def": "a place where people buy and sell goods",
    "cn_def": "市場"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains or buses stop for passengers",
    "cn_def": "車站"
  },
  "mall": {
    "pos": "n.",
    "en_def": "a large building with many shops and restaurants",
    "cn_def": "購物中心；商場"
  },
  "venue": {
    "pos": "n.",
    "en_def": "the place where an event happens",
    "cn_def": "場地；會場"
  },
  "capacity": {
    "pos": "n.",
    "en_def": "the largest number of people a place can hold",
    "cn_def": "容量；可容納人數"
  },
  "density": {
    "pos": "n.",
    "en_def": "how many people or things are in an area",
    "cn_def": "密度"
  },
  "public": {
    "pos": "adj.",
    "en_def": "open to or used by everyone",
    "cn_def": "公共的；公眾的"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "都市的；城市的"
  },
  "downtown": {
    "pos": "adv.",
    "en_def": "to or in the center of a city",
    "cn_def": "往市中心；在市中心"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path for people to walk on next to a road",
    "cn_def": "人行道"
  },
  "platform": {
    "pos": "n.",
    "en_def": "the area next to the tracks where people get on and off trains",
    "cn_def": "月台"
  },
  "event": {
    "pos": "n.",
    "en_def": "a planned public or social occasion",
    "cn_def": "活動；盛事"
  },
  "parade": {
    "pos": "n.",
    "en_def": "a public celebration in which people march or ride through the streets",
    "cn_def": "遊行"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busiest time of day when people travel to or from work",
    "cn_def": "尖峰時段"
  }
};

const EXTRA_GLOSSES = {};
