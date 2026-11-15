// Topic 58 Quiz Data: City 城市
// Source word list: https://www.examword.com/group-topic/city — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T58 - City 城市",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "城市的；都市的",
    "en_def": "relating to a city or town",
    "sentence": "A: Our company is planning to open three new fitness centers next year, so should we choose locations in small towns or in big cities? B: I think we should focus on {{BLANK}} areas first, because young office workers who live near the city center have more money and less free time to drive far away for exercise.",
    "cn": "A：我們公司計畫明年開三家新的健身中心，我們應該選在小鎮還是大城市？ B：我認為我們應該先把重點放在【都市】地區，因為住在市中心附近的年輕上班族比較有錢，也比較沒有空閒時間開車到遠處運動。"
  },
  {
    "word": "downtown",
    "pos": "n.",
    "cn_def": "市中心；商業區",
    "en_def": "the main business area in the center of a city",
    "sentence": "A: The client from Singapore wants to meet us on Thursday afternoon, but she is staying at a hotel near the airport, so where should we hold the meeting? B: Let's book a quiet meeting room near {{BLANK}}, because it is only twenty minutes away by train and there are many good restaurants nearby for lunch afterward.",
    "cn": "A：新加坡的客戶想在星期四下午和我們見面，但她住在機場附近的飯店，我們應該在哪裡開會？ B：我們在【市中心】附近訂一間安靜的會議室吧，因為搭火車只要二十分鐘，而且附近有很多不錯的餐廳可以在會後吃午餐。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區",
    "en_def": "an area where people live outside the center of a city",
    "sentence": "A: You used to live in a small apartment right next to the office, so why did you decide to move so far away last spring? B: After our second child was born, we bought a house with a garden in a quiet {{BLANK}}, and although my trip to work is longer now, my kids have much more space to play outside.",
    "cn": "A：你以前住在辦公室旁邊的小公寓，為什麼去年春天決定搬到那麼遠的地方？ B：我們第二個孩子出生後，在一個安靜的【郊區】買了一間有花園的房子，雖然我現在上班的路程比較長，但孩子們有更多空間可以在戶外玩。"
  },
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "社區；街坊",
    "en_def": "a small area of a town and the people who live there",
    "sentence": "A: The real estate agent showed me two apartments today, and they are almost the same price, so how should I decide between them? B: You should walk around each {{BLANK}} in the evening, because it will help you see whether the area feels safe, whether there are shops nearby, and how noisy it becomes at night.",
    "cn": "A：房仲今天帶我看了兩間公寓，價格幾乎一樣，我該怎麼在兩者之間做決定？ B：你應該在傍晚到每個【社區】附近走走，因為這能幫你看出那一帶是否讓人覺得安全、附近有沒有商店，以及晚上會變得多吵。"
  },
  {
    "word": "street",
    "pos": "n.",
    "cn_def": "街道",
    "en_def": "a public road in a city or town with buildings along it",
    "sentence": "A: I am driving to the new client's office for the first time this afternoon, but my GPS keeps showing two different addresses, so can you help me? B: Their building is on Elm {{BLANK}}, right across from the big department store, and you can park in the public lot behind the post office.",
    "cn": "A：我今天下午要第一次開車去新客戶的辦公室，但我的導航一直顯示兩個不同的地址，你可以幫我嗎？ B：他們的大樓在榆樹【街】上，就在那家大百貨公司正對面，你可以把車停在郵局後面的公共停車場。"
  },
  {
    "word": "avenue",
    "pos": "n.",
    "cn_def": "大街；大道",
    "en_def": "a wide street in a city, often with trees",
    "sentence": "A: The marketing team wants our new store to be seen by as many shoppers as possible, so which location do you prefer? B: I prefer the empty shop on Fifth {{BLANK}}, because the wide road is lined with famous brand stores and thousands of tourists walk past it every weekend, even though the rent is quite high.",
    "cn": "A：行銷團隊希望我們的新店能被越多購物者看到越好，你比較喜歡哪個地點？ B：我比較喜歡第五【大道】上那間空店面，因為那條寬闊的路兩旁都是知名品牌商店，每個週末有數千名觀光客經過，雖然租金相當高。"
  },
  {
    "word": "boulevard",
    "pos": "n.",
    "cn_def": "林蔭大道",
    "en_def": "a wide city road, often with trees on both sides",
    "sentence": "A: The city government plans to hold the international marathon next month, so which roads will be closed on the morning of the race? B: The main {{BLANK}} that runs from the train station to the river will be closed from five to eleven, so employees who drive to work should leave home early or take the subway.",
    "cn": "A：市政府計畫下個月舉辦國際馬拉松，比賽當天早上哪些道路會封閉？ B：從火車站延伸到河邊的那條主要【林蔭大道】會從五點封到十一點，所以開車上班的員工應該提早出門或改搭捷運。"
  },
  {
    "word": "district",
    "pos": "n.",
    "cn_def": "區；地區",
    "en_def": "a particular area of a city or country",
    "sentence": "A: Our bank is looking for a place to open a new branch for small business owners, so do you have any recommendations in the city? B: The financial {{BLANK}} near City Hall would be ideal, because many companies have their offices there and the area is easy to reach by both bus and train.",
    "cn": "A：我們銀行正在找地點，要為小型企業主開一家新分行，你對市區有什麼建議嗎？ B：市政府附近的金融【區】會很理想，因為很多公司的辦公室都在那裡，而且搭公車和火車都很容易到達。"
  },
  {
    "word": "skyscraper",
    "pos": "n.",
    "cn_def": "摩天大樓",
    "en_def": "a very tall modern building in a city",
    "sentence": "A: The architecture firm has invited us to visit their newest project downtown, so what exactly have they been building for the past three years? B: They have just finished a sixty-floor {{BLANK}} with offices, a hotel, and a shopping center inside, and visitors can enjoy an amazing view of the whole city from the top floor.",
    "cn": "A：那家建築事務所邀請我們去參觀他們在市中心的最新案子，他們過去三年到底在蓋什麼？ B：他們剛完成一棟六十層樓的【摩天大樓】，裡面有辦公室、飯店和購物中心，訪客可以從頂樓欣賞整座城市的壯觀景色。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a famous building or place that is easy to recognize",
    "sentence": "A: Our overseas guests will arrive on Saturday, and they only have one free afternoon before the conference starts, so where should we take them? B: We should take them to Taipei 101, because it is the city's most famous {{BLANK}}, and they can also visit the shopping mall and the food court on the lower floors.",
    "cn": "A：我們的海外貴賓星期六抵達，會議開始前他們只有一個空閒的下午，我們應該帶他們去哪裡？ B：我們應該帶他們去台北101，因為那是這座城市最有名的【地標】，他們還可以逛逛低樓層的購物中心和美食街。"
  },
  {
    "word": "square",
    "pos": "n.",
    "cn_def": "廣場",
    "en_def": "an open public area in a city with buildings around it",
    "sentence": "A: The company wants to hold a free outdoor concert to celebrate its twentieth anniversary, so where can thousands of people gather at once? B: The main {{BLANK}} in front of the old city hall is large enough, and the city government usually gives permission for public events there as long as we apply two months early.",
    "cn": "A：公司想舉辦一場免費戶外音樂會慶祝二十週年，哪裡可以一次容納數千人聚集？ B：舊市政廳前的主【廣場】夠大，而且只要我們提早兩個月申請，市政府通常會核准在那裡舉辦公開活動。"
  },
  {
    "word": "plaza",
    "pos": "n.",
    "cn_def": "廣場；購物廣場",
    "en_def": "an open public space, often with shops around it",
    "sentence": "A: The new office building has a large open space on the ground floor, so how is the management company planning to use it? B: They are turning it into a shopping {{BLANK}} with cafés, a bookstore, and benches under the trees, so that employees and local residents can relax there during lunch breaks and on weekends.",
    "cn": "A：新辦公大樓的一樓有一大片開放空間，管理公司打算怎麼使用它？ B：他們要把它改成一個購物【廣場】，裡面有咖啡館、書店和樹下的長椅，讓員工和當地居民可以在午休時間和週末在那裡放鬆。"
  },
  {
    "word": "park",
    "pos": "n.",
    "cn_def": "公園",
    "en_def": "a large public area with grass and trees",
    "sentence": "A: Many of our employees have said that they feel stressed and tired after sitting in front of their computers all day, so what can we do? B: We could organize a short walking group at lunchtime, because there is a beautiful {{BLANK}} with a lake and shady trees only five minutes from our office building.",
    "cn": "A：很多員工反映整天坐在電腦前讓他們覺得壓力大又疲累，我們能做些什麼？ B：我們可以在午餐時間組織一個簡短的健走小組，因為離我們辦公大樓只要五分鐘就有一座有湖和樹蔭的漂亮【公園】。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars and other vehicles moving on roads",
    "sentence": "A: You are usually the first person in the office every morning, so why did you arrive almost an hour late today? B: There was a serious accident on the highway near the bridge, and the {{BLANK}} was so heavy that my car barely moved for forty minutes, so next time I will probably take the train instead.",
    "cn": "A：你通常每天早上都是第一個到辦公室的人，今天為什麼遲到將近一個小時？ B：橋附近的高速公路發生嚴重車禍，【交通】非常壅塞，我的車有四十分鐘幾乎動不了，所以下次我可能會改搭火車。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: Since you moved to Taoyuan last year, how long does it take you to get to our Taipei office every morning? B: I {{BLANK}} by high-speed rail and then take the subway for two stops, so the whole trip takes about fifty minutes, which gives me enough time to read the news and answer emails.",
    "cn": "A：你去年搬到桃園之後，每天早上到我們台北辦公室要花多久時間？ B：我搭高鐵【通勤】，然後再坐兩站捷運，所以整趟路程大約五十分鐘，讓我有足夠的時間看新聞和回覆電子郵件。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: I need to buy a birthday present for my manager after work today, so do you think I should go to the night market or the department store? B: I would avoid the night market tonight, because it is always extremely {{BLANK}} on Friday evenings, and you will spend more time waiting in lines than actually shopping.",
    "cn": "A：我今天下班後需要幫經理買生日禮物，你覺得我該去夜市還是百貨公司？ B：我今晚會避開夜市，因為星期五晚上那裡總是非常【擁擠】，你排隊等候的時間會比真正逛街的時間還多。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "繁忙的；熱鬧的",
    "en_def": "full of people, vehicles or activity",
    "sentence": "A: The owner wants to move our small bakery to a new location next year, so what kind of place is she looking for? B: She wants a shop on a {{BLANK}} corner near the train station, because thousands of commuters walk past there every morning and many of them would happily buy fresh bread on the way to work.",
    "cn": "A：老闆想在明年把我們的小麵包店搬到新地點，她在找什麼樣的地方？ B：她想要一間在火車站附近【熱鬧】街角的店面，因為每天早上有數千名通勤族從那裡經過，很多人會很樂意在上班途中買新鮮麵包。"
  },
  {
    "word": "vibrant",
    "pos": "adj.",
    "cn_def": "充滿活力的",
    "en_def": "full of energy, life and excitement",
    "sentence": "A: Our travel agency is creating a new tour package for young travelers, so what kind of city do you think they would enjoy most? B: Young people usually love a {{BLANK}} city with colorful street art, live music, and lively night markets, so I suggest that we include Kaohsiung and Tainan in the trip.",
    "cn": "A：我們旅行社正在為年輕旅客設計新的套裝行程，你覺得他們最喜歡哪一種城市？ B：年輕人通常喜愛有繽紛街頭藝術、現場音樂和熱鬧夜市、【充滿活力】的城市，所以我建議把高雄和台南排進行程。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的",
    "en_def": "new and using the latest ideas or designs",
    "sentence": "A: The old train station looks very different from the photos I saw last year, so did the city government rebuild it? B: Yes, they kept the historic front wall but replaced the inside with a bright and {{BLANK}} hall that has glass roofs, digital signs, and comfortable waiting areas for passengers.",
    "cn": "A：舊火車站看起來和我去年看到的照片很不一樣，市政府重建了它嗎？ B：是的，他們保留了具歷史意義的正面牆，但把內部換成一個明亮又【現代】的大廳，有玻璃屋頂、數位看板和舒適的旅客候車區。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "有歷史意義的；歷史悠久的",
    "en_def": "important in history",
    "sentence": "A: The developer wants to tear down the old tea factory near the river and build apartments, so why are so many residents against the plan? B: The building is more than a hundred years old and is considered a {{BLANK}} site, so local people believe it should be protected and turned into a museum instead.",
    "cn": "A：開發商想拆除河邊的老茶廠蓋公寓，為什麼這麼多居民反對這項計畫？ B：那棟建築已經超過一百年，被視為【具歷史意義的】古蹟，所以當地人認為應該保護它，改建成博物館。"
  },
  {
    "word": "population",
    "pos": "n.",
    "cn_def": "人口",
    "en_def": "the number of people living in a place",
    "sentence": "A: The supermarket chain is thinking about opening a store in Hsinchu, so what information does the planning team need before making a final decision? B: They need to know how quickly the {{BLANK}} of the city is growing, because more people moving there for technology jobs means more families who will shop for groceries every week.",
    "cn": "A：那家連鎖超市正在考慮在新竹開店，規劃團隊在做最後決定之前需要哪些資訊？ B：他們需要知道這座城市的【人口】成長得有多快，因為越多人為了科技業工作搬到那裡，就代表每週會有越多家庭來採買食品雜貨。"
  },
  {
    "word": "resident",
    "pos": "n.",
    "cn_def": "居民",
    "en_def": "a person who lives in a particular place",
    "sentence": "A: The building manager sent an email saying that the elevator will be repaired next week, so what should people living on the top floors do? B: Every {{BLANK}} who has difficulty using the stairs can contact the front desk, and the staff will help carry their shopping bags and heavy packages up to their apartments.",
    "cn": "A：大樓管理員寄電子郵件說下週要修電梯，住在頂樓的人該怎麼辦？ B：每位爬樓梯有困難的【居民】都可以聯絡櫃檯，工作人員會幫忙把購物袋和重的包裹搬到他們的公寓。"
  },
  {
    "word": "tourist",
    "pos": "n.",
    "cn_def": "觀光客",
    "en_def": "a person who travels to a place for fun",
    "sentence": "A: Sales at our gift shop have increased by thirty percent this summer, so what do you think is the main reason for this success? B: Since the new airline started direct flights from Japan, many more {{BLANK}} groups visit the old street every day, and they love buying our handmade tea cups as souvenirs.",
    "cn": "A：我們禮品店今年夏天的業績成長了百分之三十，你覺得成功的主要原因是什麼？ B：自從新的航空公司開了從日本出發的直飛航班，每天有更多【觀光客】團體來逛老街，他們很喜歡買我們手工做的茶杯當紀念品。"
  },
  {
    "word": "transport",
    "pos": "n.",
    "cn_def": "交通運輸",
    "en_def": "a system for carrying people or goods from place to place",
    "sentence": "A: Many new employees have asked whether they really need to buy a car after moving to the city for this job, so what should we tell them? B: Tell them that public {{BLANK}} here is cheap and reliable, because buses and trains run every few minutes and can take them almost anywhere in the city.",
    "cn": "A：很多新員工問，為了這份工作搬到這座城市後，他們是否真的需要買車，我們該怎麼告訴他們？ B：告訴他們這裡的大眾【運輸】既便宜又可靠，因為公車和火車每幾分鐘就有一班，幾乎可以載他們到市區任何地方。"
  },
  {
    "word": "subway",
    "pos": "n.",
    "cn_def": "地鐵；捷運",
    "en_def": "an underground train system in a city",
    "sentence": "A: The conference center is on the other side of the city, and the taxi drivers say the roads will be very busy tomorrow morning, so how should we get there? B: Let's take the {{BLANK}}, because the underground trains are not affected by road traffic, and the station is right next to the main entrance of the center.",
    "cn": "A：會議中心在城市的另一邊，計程車司機說明天早上路上會很塞，我們該怎麼去？ B：我們搭【捷運】吧，因為地下列車不受道路交通影響，而且車站就在會議中心主要入口旁邊。"
  },
  {
    "word": "bus",
    "pos": "n.",
    "cn_def": "公車",
    "en_def": "a large vehicle that carries many passengers on a fixed route",
    "sentence": "A: The company is moving to a new office in the science park next month, and many employees are worried about how they will get there without a car, so what is the plan? B: Management has arranged a free shuttle {{BLANK}} that will leave the main train station every fifteen minutes during rush hour in the morning and evening.",
    "cn": "A：公司下個月要搬到科學園區的新辦公室，很多員工擔心沒有車要怎麼去，計畫是什麼？ B：管理階層安排了免費接駁【公車】，早晚尖峰時段每十五分鐘從火車總站發車一次。"
  },
  {
    "word": "intersection",
    "pos": "n.",
    "cn_def": "十字路口",
    "en_def": "a place where two or more roads cross",
    "sentence": "A: The delivery driver called again and said he cannot find our warehouse, even though he is very close, so how should I explain the way? B: Tell him to turn left at the next {{BLANK}} with the big traffic lights and the gas station, and our gray building will be the third one on the right side.",
    "cn": "A：送貨司機又打電話來說他找不到我們的倉庫，雖然他已經很近了，我該怎麼跟他說明路線？ B：告訴他在下一個有大紅綠燈和加油站的【十字路口】左轉，我們的灰色建築就是右手邊的第三棟。"
  },
  {
    "word": "crosswalk",
    "pos": "n.",
    "cn_def": "斑馬線；行人穿越道",
    "en_def": "a marked place where people can walk across a road",
    "sentence": "A: Parents at the school next to our office are worried about their children's safety in the morning, so what has the city decided to do? B: The city is painting a new {{BLANK}} in front of the school gate and adding a traffic light, so that students can cross the road safely when cars are coming.",
    "cn": "A：我們辦公室隔壁學校的家長擔心孩子早上的安全，市政府決定怎麼做？ B：市政府要在校門前漆一條新的【斑馬線】並增設紅綠燈，讓學生在有車來的時候也能安全過馬路。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path at the side of a road for people to walk on",
    "sentence": "A: The restaurant manager wants to put a few tables outside so that customers can enjoy the warm spring weather, so is that allowed in this area? B: Yes, but we must apply for a permit first, and we have to leave enough space on the {{BLANK}} so that people with strollers and wheelchairs can still pass by easily.",
    "cn": "A：餐廳經理想在外面擺幾張桌子，讓客人享受溫暖的春天天氣，這一區允許這樣做嗎？ B：可以，但我們必須先申請許可，而且要在【人行道】上留下足夠的空間，讓推嬰兒車和坐輪椅的人仍然可以輕鬆通過。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "a place where people buy and sell food and goods",
    "sentence": "A: The chef at our hotel restaurant always says that his vegetables taste much fresher than the ones in supermarkets, so where does he buy them? B: He goes to the traditional {{BLANK}} near the river at six o'clock every morning, where local farmers sell fruit, vegetables, and fish that were picked or caught only a few hours earlier.",
    "cn": "A：我們飯店餐廳的主廚總是說他的蔬菜比超市的新鮮多了，他都在哪裡買？ B：他每天早上六點去河邊的傳統【市場】，當地農民在那裡賣幾個小時前才摘下或捕到的水果、蔬菜和魚。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "購物中心",
    "en_def": "a large building with many shops inside",
    "sentence": "A: The weather forecast says it will rain all weekend, so where can we take the visiting sales team to relax after the training sessions finish? B: We could take them to the new shopping {{BLANK}} next to the station, because it has hundreds of stores, a cinema, and a large food court, so nobody will get wet.",
    "cn": "A：天氣預報說整個週末都會下雨，訓練課程結束後，我們可以帶來訪的業務團隊去哪裡放鬆？ B：我們可以帶他們去車站旁邊新開的【購物中心】，因為那裡有數百家店、一間電影院和一個大型美食街，沒有人會淋濕。"
  },
  {
    "word": "restaurant",
    "pos": "n.",
    "cn_def": "餐廳",
    "en_def": "a place where people pay to sit and eat meals",
    "sentence": "A: We need to take the visiting directors out for dinner after the board meeting on Wednesday, so have you made a reservation anywhere yet? B: I booked a private room at a seafood {{BLANK}} on the twentieth floor, because the food there is excellent and the guests can enjoy a wonderful night view of the river.",
    "cn": "A：星期三董事會開完後，我們需要帶來訪的董事們去吃晚餐，你已經在哪裡訂位了嗎？ B：我在二十樓的一家海鮮【餐廳】訂了包廂，因為那裡的菜很棒，客人還能欣賞美麗的河岸夜景。"
  },
  {
    "word": "cafe",
    "pos": "n.",
    "cn_def": "咖啡館",
    "en_def": "a small place that sells coffee, drinks and light meals",
    "sentence": "A: I have an online job interview at ten tomorrow morning, but the internet at my apartment has been very slow this week, so where can I go? B: There is a quiet {{BLANK}} around the corner with fast WiFi and private booths, so you can order a coffee and do the interview there without any noise.",
    "cn": "A：我明天早上十點有一場線上工作面試，但這週我公寓的網路一直很慢，我可以去哪裡？ B：轉角有一家安靜的【咖啡館】，有快速的無線網路和私人座位區，你可以點杯咖啡，在那裡安靜地面試。"
  },
  {
    "word": "nightlife",
    "pos": "n.",
    "cn_def": "夜生活",
    "en_def": "entertainment such as bars, music and clubs at night",
    "sentence": "A: Our company is sending three young engineers to work in Bangkok for six months, so what do you think they will enjoy most about living there? B: They will probably love the {{BLANK}}, because the city has rooftop bars, live music, and night markets that stay open until very late, even after a long day at work.",
    "cn": "A：我們公司要派三位年輕工程師到曼谷工作六個月，你覺得他們最喜歡那裡生活的哪一點？ B：他們大概會很愛那裡的【夜生活】，因為那座城市有屋頂酒吧、現場音樂和營業到很晚的夜市，即使上班一整天後也能去玩。"
  },
  {
    "word": "skyline",
    "pos": "n.",
    "cn_def": "天際線",
    "en_def": "the shape of buildings against the sky",
    "sentence": "A: The photographer for our company's annual report wants to take a picture that shows how much the city has grown, so where should he stand? B: He should go to the top of the hill behind the university at sunset, because from there he can capture the whole {{BLANK}} with all the tall office towers lit up.",
    "cn": "A：為公司年報拍照的攝影師想拍一張能呈現這座城市成長多少的照片，他應該站在哪裡？ B：他應該在日落時到大學後面的山頂，因為從那裡他可以拍到所有高聳辦公大樓都亮燈的整片【天際線】。"
  }
];

const MCQS = [
  {
    "q": "The government plans to build more parks in _____ areas rather than in the countryside. City residents need green space close to home.",
    "options": [
      "urban",
      "historic",
      "modern",
      "vibrant"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel is in the heart of _____, just steps from the main shopping streets. Guests can walk to most business meetings.",
    "options": [
      "suburb",
      "downtown",
      "crosswalk",
      "skyline"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The Lins moved to a quiet _____ outside the city last year. Mr. Lin now drives forty minutes to the office every day.",
    "options": [
      "plaza",
      "intersection",
      "suburb",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "This _____ has a strong community spirit. Neighbors often hold street parties and help each other with childcare.",
    "options": [
      "skyline",
      "crosswalk",
      "population",
      "neighborhood"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The parade will move slowly down the main _____ lined with palm trees. Spectators should arrive early to find good spots.",
    "options": [
      "suburb",
      "boulevard",
      "population",
      "nightlife"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Most banks and law firms have offices in the financial _____. Rents there are among the highest in the city.",
    "options": [
      "crosswalk",
      "skyline",
      "subway",
      "district"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The new eighty-floor _____ will be the tallest building in the country. Construction is expected to finish in 2028.",
    "options": [
      "skyscraper",
      "crosswalk",
      "market",
      "suburb"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The old clock tower is the town's best-known _____. Visitors often take photos in front of it.",
    "options": [
      "population",
      "traffic",
      "landmark",
      "sidewalk"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Thousands of people gathered in the town _____ to watch the New Year fireworks. The open space was filled with music and laughter.",
    "options": [
      "traffic",
      "resident",
      "crosswalk",
      "square"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The new shopping _____ has forty stores and a large outdoor fountain. It opens to the public next Saturday.",
    "options": [
      "plaza",
      "intersection",
      "population",
      "skyline"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Employees often eat lunch on the benches in the _____ across the street. The trees and grass offer a peaceful break from work.",
    "options": [
      "subway",
      "traffic",
      "park",
      "intersection"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Heavy _____ on the highway delayed the delivery by two hours. The driver apologized to the customer for the late arrival.",
    "options": [
      "population",
      "traffic",
      "nightlife",
      "skyline"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The train was so _____ that many passengers had to stand. The railway company plans to add more cars next month.",
    "options": [
      "modern",
      "historic",
      "crowded",
      "urban"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The intersection is very _____ during rush hour, with cars and buses everywhere. Drivers should take extra care there.",
    "options": [
      "historic",
      "busy",
      "urban",
      "modern"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The city is famous for its _____ arts scene, with street festivals and live music every weekend. Young travelers love its energy.",
    "options": [
      "crowded",
      "busy",
      "historic",
      "vibrant"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The company moved into a _____ office building with smart lighting and fast elevators. The old building had no air conditioning.",
    "options": [
      "modern",
      "historic",
      "crowded",
      "vibrant"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The city protects its _____ buildings, some of which are over three hundred years old. Owners cannot change their outside appearance.",
    "options": [
      "modern",
      "historic",
      "urban",
      "busy"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The city's _____ has doubled in the last twenty years. As a result, the government is building more schools and hospitals.",
    "options": [
      "population",
      "sidewalk",
      "landmark",
      "crosswalk"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Every _____ of the building received a letter about the new parking rules. The rules start on the first of next month.",
    "options": [
      "tourist",
      "landmark",
      "resident",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Every foreign _____ who buys a ticket receives a free city map. The service is popular with groups from Japan and Korea.",
    "options": [
      "landmark",
      "skyline",
      "population",
      "tourist"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The city is investing heavily in public _____ to reduce car use. New bus lines and train routes will open next year.",
    "options": [
      "transport",
      "population",
      "neighborhood",
      "nightlife"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new _____ line runs underground from the airport to the city center. The trip takes only twenty-five minutes.",
    "options": [
      "sidewalk",
      "landmark",
      "subway",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "A new traffic light was installed at the dangerous _____ near the school. Several accidents happened there last year.",
    "options": [
      "skyline",
      "population",
      "nightlife",
      "intersection"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Please cross the street only at the _____, where drivers must stop for pedestrians. Crossing elsewhere is dangerous and illegal.",
    "options": [
      "skyline",
      "crosswalk",
      "suburb",
      "population"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The café placed several tables on the _____ outside its front door. Pedestrians must now walk around them carefully.",
    "options": [
      "skyline",
      "population",
      "sidewalk",
      "traffic"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Farmers sell fresh vegetables at the outdoor _____ every Sunday morning. Prices are often lower than at supermarkets.",
    "options": [
      "market",
      "skyline",
      "population",
      "crosswalk"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The shopping _____ has more than two hundred stores under one roof. It also includes a cinema and an ice rink.",
    "options": [
      "crosswalk",
      "suburb",
      "population",
      "mall"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "We reserved a table for twelve at a Thai _____ near the office. The team dinner starts at seven o'clock.",
    "options": [
      "subway",
      "restaurant",
      "skyline",
      "suburb"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The area is known for its lively _____, with bars and clubs open until 3 a.m. It is very quiet during the day, however.",
    "options": [
      "nightlife",
      "population",
      "landmark",
      "crosswalk"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "From the hotel rooftop, guests can see the city _____ lit up at night. The view of the tall towers is amazing.",
    "options": [
      "population",
      "suburb",
      "skyline",
      "crosswalk"
    ],
    "answer": 2,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "城市的；都市的"
  },
  "downtown": {
    "pos": "n.",
    "en_def": "the main business area in the center of a city",
    "cn_def": "市中心；商業區"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "an area where people live outside the center of a city",
    "cn_def": "郊區"
  },
  "neighborhood": {
    "pos": "n.",
    "en_def": "a small area of a town and the people who live there",
    "cn_def": "社區；街坊"
  },
  "street": {
    "pos": "n.",
    "en_def": "a public road in a city or town with buildings along it",
    "cn_def": "街道"
  },
  "avenue": {
    "pos": "n.",
    "en_def": "a wide street in a city, often with trees",
    "cn_def": "大街；大道"
  },
  "boulevard": {
    "pos": "n.",
    "en_def": "a wide city road, often with trees on both sides",
    "cn_def": "林蔭大道"
  },
  "district": {
    "pos": "n.",
    "en_def": "a particular area of a city or country",
    "cn_def": "區；地區"
  },
  "skyscraper": {
    "pos": "n.",
    "en_def": "a very tall modern building in a city",
    "cn_def": "摩天大樓"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "a famous building or place that is easy to recognize",
    "cn_def": "地標"
  },
  "square": {
    "pos": "n.",
    "en_def": "an open public area in a city with buildings around it",
    "cn_def": "廣場"
  },
  "plaza": {
    "pos": "n.",
    "en_def": "an open public space, often with shops around it",
    "cn_def": "廣場；購物廣場"
  },
  "park": {
    "pos": "n.",
    "en_def": "a large public area with grass and trees",
    "cn_def": "公園"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars and other vehicles moving on roads",
    "cn_def": "交通；車流"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "full of people, vehicles or activity",
    "cn_def": "繁忙的；熱鬧的"
  },
  "vibrant": {
    "pos": "adj.",
    "en_def": "full of energy, life and excitement",
    "cn_def": "充滿活力的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or designs",
    "cn_def": "現代的"
  },
  "historic": {
    "pos": "adj.",
    "en_def": "important in history",
    "cn_def": "有歷史意義的；歷史悠久的"
  },
  "population": {
    "pos": "n.",
    "en_def": "the number of people living in a place",
    "cn_def": "人口"
  },
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民"
  },
  "tourist": {
    "pos": "n.",
    "en_def": "a person who travels to a place for fun",
    "cn_def": "觀光客"
  },
  "transport": {
    "pos": "n.",
    "en_def": "a system for carrying people or goods from place to place",
    "cn_def": "交通運輸"
  },
  "subway": {
    "pos": "n.",
    "en_def": "an underground train system in a city",
    "cn_def": "地鐵；捷運"
  },
  "bus": {
    "pos": "n.",
    "en_def": "a large vehicle that carries many passengers on a fixed route",
    "cn_def": "公車"
  },
  "intersection": {
    "pos": "n.",
    "en_def": "a place where two or more roads cross",
    "cn_def": "十字路口"
  },
  "crosswalk": {
    "pos": "n.",
    "en_def": "a marked place where people can walk across a road",
    "cn_def": "斑馬線；行人穿越道"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "market": {
    "pos": "n.",
    "en_def": "a place where people buy and sell food and goods",
    "cn_def": "市場"
  },
  "mall": {
    "pos": "n.",
    "en_def": "a large building with many shops inside",
    "cn_def": "購物中心"
  },
  "restaurant": {
    "pos": "n.",
    "en_def": "a place where people pay to sit and eat meals",
    "cn_def": "餐廳"
  },
  "cafe": {
    "pos": "n.",
    "en_def": "a small place that sells coffee, drinks and light meals",
    "cn_def": "咖啡館"
  },
  "nightlife": {
    "pos": "n.",
    "en_def": "entertainment such as bars, music and clubs at night",
    "cn_def": "夜生活"
  },
  "skyline": {
    "pos": "n.",
    "en_def": "the shape of buildings against the sky",
    "cn_def": "天際線"
  }
};

const EXTRA_GLOSSES = {};
