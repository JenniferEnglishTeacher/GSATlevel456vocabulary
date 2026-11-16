// Topic 237 Quiz Data: Meeting Place 會面地點
// Source word list: https://www.examword.com/group-topic/meeting-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T237 - Meeting Place 會面地點",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "venue",
    "pos": "n.",
    "cn_def": "場地",
    "en_def": "a place where an event or meeting happens",
    "sentence": "A: The sales conference is only six weeks away, and we expect about two hundred guests from different branches, so have you found anywhere large enough yet? B: Yes, I booked a {{BLANK}} near the train station that has a big stage, free parking, and its own catering team, so everything should run smoothly.",
    "cn": "A：業務大會只剩六週，我們預計會有來自各分公司約兩百位賓客，你找到夠大的地方了嗎？ B：有，我在火車站附近訂了一個【場地】，那裡有大舞台、免費停車和自己的外燴團隊，所以一切應該會很順利。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "地點；位置",
    "en_def": "the place where something is",
    "sentence": "A: Several clients have complained that our showroom is hard to find because it is hidden behind a supermarket, so what do you think we should do about it? B: I think we should move to a new {{BLANK}} on the main street, where more people walk past every day and the bus stop is right outside.",
    "cn": "A：好幾位客戶抱怨我們的展示間很難找，因為它藏在一家超市後面，你覺得我們該怎麼辦？ B：我認為我們應該搬到大街上的新【地點】，那裡每天有更多人經過，而且公車站就在門外。"
  },
  {
    "word": "spot",
    "pos": "n.",
    "cn_def": "地點；場所",
    "en_def": "a particular place",
    "sentence": "A: My cousin is visiting Taipei next weekend and wants somewhere relaxing to chat over coffee after a long week of business meetings, so do you have any ideas? B: There is a lovely little {{BLANK}} by the river where you can sit under the trees, enjoy the view, and talk for hours without anyone rushing you.",
    "cn": "A：我表哥下週末要來台北，在忙了一整週的商務會議後，他想找個輕鬆的地方喝咖啡聊天，你有什麼建議嗎？ B：河邊有一個很棒的小【地點】，你們可以坐在樹下欣賞風景，聊上好幾個小時也沒有人會催你們。"
  },
  {
    "word": "site",
    "pos": "n.",
    "cn_def": "現場；地點",
    "en_def": "a place where something is built or happens",
    "sentence": "A: The engineers from Japan want to see how the new factory is progressing before they sign the final contract, so where should we meet them on Thursday? B: Let's meet them at the construction {{BLANK}} at nine o'clock, and remember to bring extra safety helmets and boots because the ground is still muddy after the rain.",
    "cn": "A：日本來的工程師想在簽最後合約前看看新工廠的進度，我們星期四該在哪裡和他們見面？ B：我們九點在施工【現場】和他們碰面吧，記得多帶一些安全帽和靴子，因為下過雨後地面還很泥濘。"
  },
  {
    "word": "place",
    "pos": "n.",
    "cn_def": "地方",
    "en_def": "an area or building used for a purpose",
    "sentence": "A: We need to hold a farewell dinner for Mr. Chen, who is retiring after thirty years with the company, but I don't know where to have it. B: How about the Italian {{BLANK}} on Zhongshan Road, which my team used last spring because the food was excellent and the private dining area was big enough?",
    "cn": "A：我們需要為在公司服務三十年後即將退休的陳先生辦一場歡送晚宴，但我不知道要在哪裡辦。 B：中山路上那家義大利【地方】怎麼樣？我的團隊去年春天去過，因為那裡的食物很棒，私人用餐區也夠大。"
  },
  {
    "word": "hall",
    "pos": "n.",
    "cn_def": "大廳；會堂",
    "en_def": "a large room or building for meetings or events",
    "sentence": "A: The annual awards ceremony usually has more than three hundred employees and their families, so is the hotel ballroom big enough this year? B: No, it isn't, so we have rented the city exhibition {{BLANK}}, which has high ceilings, comfortable seats, and a modern sound system for all the speeches.",
    "cn": "A：年度頒獎典禮通常有三百多位員工和家屬參加，今年飯店的宴會廳夠大嗎？ B：不夠，所以我們租了市立展覽【會堂】，那裡天花板很高、座椅舒適，還有供所有演講使用的現代音響系統。"
  },
  {
    "word": "room",
    "pos": "n.",
    "cn_def": "房間；室",
    "en_def": "a space inside a building with walls",
    "sentence": "A: The interview candidates will arrive at two o'clock this afternoon, but the main meeting area is being painted, so where should they wait? B: They can wait in the small {{BLANK}} next to the reception desk, where there are a few sofas, some magazines, and a water dispenser to keep them comfortable.",
    "cn": "A：面試的應徵者今天下午兩點會到，但主要的會議區正在油漆，他們該在哪裡等？ B：他們可以在接待櫃台旁的小【房間】等候，那裡有幾張沙發、一些雜誌和飲水機，可以讓他們待得舒服。"
  },
  {
    "word": "lobby",
    "pos": "n.",
    "cn_def": "大廳",
    "en_def": "the entrance area inside a hotel or office building",
    "sentence": "A: I have never visited your head office before, and I am worried I might get lost in such a tall building, so where should I go when I arrive? B: Just wait for me in the {{BLANK}} near the front desk, and I will come down to collect you and take you up to the tenth floor.",
    "cn": "A：我從來沒去過你們的總公司，我擔心在那麼高的大樓裡會迷路，我到的時候該去哪裡？ B：你就在櫃台附近的【大廳】等我，我會下樓接你，再帶你上十樓。"
  },
  {
    "word": "café",
    "pos": "n.",
    "cn_def": "咖啡館",
    "en_def": "a small restaurant that sells coffee, drinks and light meals",
    "sentence": "A: I would like to discuss the design changes with you before Friday, but our office is too noisy with all the renovation work going on, so do you have any suggestions? B: Let's meet at the quiet {{BLANK}} across the street, where we can order some coffee and sandwiches and spread the drawings out on a big table.",
    "cn": "A：我想在星期五前和你討論設計的修改，但我們辦公室正在裝修，太吵了，你有什麼建議嗎？ B：我們在對街那家安靜的【咖啡館】碰面吧，在那裡可以點些咖啡和三明治，把圖稿攤在大桌子上。"
  },
  {
    "word": "restaurant",
    "pos": "n.",
    "cn_def": "餐廳",
    "en_def": "a place where people pay to eat meals",
    "sentence": "A: Our Korean partners are landing at six this evening, and they will probably be very hungry after the long flight, so where should we take them? B: I have booked a table at a seafood {{BLANK}} near their hotel, because they told me last time that they really enjoy fresh fish and local dishes.",
    "cn": "A：我們的韓國夥伴今晚六點降落，長途飛行後他們應該會很餓，我們該帶他們去哪裡？ B：我在他們飯店附近的一家海鮮【餐廳】訂了位，因為他們上次告訴我，他們很喜歡新鮮的魚和在地料理。"
  },
  {
    "word": "park",
    "pos": "n.",
    "cn_def": "公園",
    "en_def": "a public green area in a town",
    "sentence": "A: The weather forecast says it will be sunny and warm on Saturday, so where do you think our department should hold the family picnic this year? B: The large {{BLANK}} beside the river would be perfect, because it has plenty of grass, shady trees, and a playground where the children can play safely.",
    "cn": "A：氣象預報說星期六會晴朗溫暖，你覺得我們部門今年的家庭野餐該在哪裡舉辦？ B：河邊那座大【公園】會很完美，因為那裡有很多草地、遮蔭的樹，還有孩子們可以安全玩耍的遊樂場。"
  },
  {
    "word": "office",
    "pos": "n.",
    "cn_def": "辦公室",
    "en_def": "a room or building where people do business work",
    "sentence": "A: The new supplier wants to show us samples of their packaging materials next Monday, but the showroom will be closed that day, so where can we meet? B: They can come to my {{BLANK}} on the fifth floor, since it has a large table where we can lay out all the boxes and compare them easily.",
    "cn": "A：新的供應商想在下週一給我們看包裝材料的樣品，但那天展示間不開放，我們可以在哪裡見面？ B：他們可以來我五樓的【辦公室】，因為那裡有一張大桌子，我們可以把所有盒子擺出來輕鬆比較。"
  },
  {
    "word": "conference room",
    "pos": "n.phr.",
    "cn_def": "會議室",
    "en_def": "a room for business meetings",
    "sentence": "A: The managers from all three branches are coming for the budget review tomorrow, and there will be about fifteen people, so where should we hold it? B: Let's use the big {{BLANK}} on the third floor, because it has a long table, a projector, and good video equipment for colleagues who join online.",
    "cn": "A：三間分公司的經理明天都會來參加預算檢討，大約有十五個人，我們該在哪裡開？ B：我們用三樓的大【會議室】吧，因為那裡有長桌、投影機，還有給線上參加的同事使用的良好視訊設備。"
  },
  {
    "word": "auditorium",
    "pos": "n.",
    "cn_def": "禮堂",
    "en_def": "a large building or room where people watch speeches or shows",
    "sentence": "A: The company has invited a famous speaker to talk about customer service, and nearly five hundred employees have signed up, so where will the talk take place? B: It will be held in the university {{BLANK}} downtown, which has rows of comfortable seats, a huge screen, and excellent sound for large audiences.",
    "cn": "A：公司邀請了一位知名講者來談客戶服務，將近五百名員工報名了，演講會在哪裡舉行？ B：會在市中心的大學【禮堂】舉行，那裡有一排排舒適的座椅、巨大的螢幕，以及適合大型觀眾的絕佳音響。"
  },
  {
    "word": "center",
    "pos": "n.",
    "cn_def": "中心",
    "en_def": "a building used for a particular activity",
    "sentence": "A: Our volunteer group wants a regular meeting space where we can plan charity events and store some boxes of donations, but we have very little money. B: The community {{BLANK}} near the library rents small rooms at a low price, and the staff there are very friendly and helpful to local groups.",
    "cn": "A：我們的志工團體想要一個固定的聚會空間，可以規劃慈善活動並存放幾箱捐贈物資，但我們的錢很少。 B：圖書館附近的社區活動【中心】以低價出租小房間，那裡的工作人員對在地團體也很友善、很樂於幫忙。"
  },
  {
    "word": "club",
    "pos": "n.",
    "cn_def": "俱樂部",
    "en_def": "a place where members meet for an activity",
    "sentence": "A: My boss loves playing golf and often talks about business deals on the weekend, so where do you think he usually meets important clients? B: He usually meets them at the private {{BLANK}} outside the city, where members can play golf, have lunch together, and relax in a quiet lounge afterward.",
    "cn": "A：我老闆很愛打高爾夫，常在週末談生意，你覺得他通常在哪裡和重要客戶見面？ B：他通常在城外的私人【俱樂部】和他們見面，會員在那裡可以打高爾夫、一起吃午餐，之後還能在安靜的休息室放鬆。"
  },
  {
    "word": "lounge",
    "pos": "n.",
    "cn_def": "休息室；貴賓室",
    "en_def": "a comfortable room where people can sit and relax",
    "sentence": "A: Our flight to Singapore has been delayed by three hours because of the storm, and the gate area is extremely crowded, so where can we wait more comfortably? B: Since we have business-class tickets, we can relax in the airline {{BLANK}}, where they serve free snacks and drinks and have quiet seats with power outlets.",
    "cn": "A：我們飛新加坡的班機因為暴風雨延誤三小時，登機門區又非常擁擠，我們可以在哪裡等得舒服一點？ B：既然我們是商務艙機票，就可以到航空公司的【貴賓室】休息，那裡提供免費點心和飲料，還有附插座的安靜座位。"
  },
  {
    "word": "plaza",
    "pos": "n.",
    "cn_def": "廣場",
    "en_def": "an open public square in a city",
    "sentence": "A: The marketing team wants to hand out free samples of our new energy drink to as many young people as possible this weekend, so where should we set up? B: We should set up our stand in the shopping {{BLANK}} outside the department store, because thousands of shoppers walk through there every Saturday afternoon.",
    "cn": "A：行銷團隊這週末想把新能量飲料的免費試喝品發給越多年輕人越好，我們該在哪裡設攤？ B：我們應該把攤位設在百貨公司外的購物【廣場】，因為每個星期六下午都有成千上萬的購物者經過那裡。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "街角",
    "en_def": "the place where two streets meet",
    "sentence": "A: I am driving to pick you up for the trade show tomorrow, but the street in front of your apartment is too narrow for my car, so where should I stop? B: Please wait for me at the {{BLANK}} of Main Street and Park Road, right outside the convenience store, because there is space to park there.",
    "cn": "A：我明天要開車載你去商展，但你公寓前的街道對我的車來說太窄了，我該停在哪裡？ B：請在大街和公園路的【街角】等我，就在便利商店外面，因為那裡有空間可以停車。"
  },
  {
    "word": "entrance",
    "pos": "n.",
    "cn_def": "入口",
    "en_def": "the door or gate where you go into a place",
    "sentence": "A: The hotel where the trade fair is held has several doors, and I am afraid our visitors from Vietnam will not know where to find us, so what should we tell them? B: Tell them to meet us at the main {{BLANK}} on the north side of the building, where we will hold a sign with the company logo.",
    "cn": "A：舉辦商展的飯店有好幾個門，我怕從越南來的訪客會不知道去哪裡找我們，我們該怎麼跟他們說？ B：告訴他們到大樓北側的主要【入口】和我們會合，我們會在那裡舉著印有公司標誌的牌子。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集；集合",
    "en_def": "to come together in one place",
    "sentence": "A: The fire alarm test will take place at ten o'clock this morning, and everyone has to leave the building, so where should our staff go after they exit? B: All employees should {{BLANK}} in the parking lot behind the warehouse, where the safety officer will count everyone and make sure nobody is missing.",
    "cn": "A：火災警報測試今天早上十點進行，每個人都得離開大樓，我們的員工出去後應該到哪裡？ B：所有員工都應該在倉庫後面的停車場【聚集】，安全主管會在那裡清點人數，確定沒有人失蹤。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "集合",
    "en_def": "to come together as a group for a purpose",
    "sentence": "A: Our company trip to Hualien starts early on Saturday morning, and the bus leaves at exactly seven o'clock, so where should everyone meet before departure? B: Please ask all the travelers to {{BLANK}} in front of the train station by six forty-five, because the driver cannot wait for anyone who is late.",
    "cn": "A：我們公司的花蓮旅遊星期六一早出發，巴士七點整開車，大家出發前應該在哪裡碰面？ B：請所有旅客在六點四十五分前到火車站前面【集合】，因為司機沒辦法等任何遲到的人。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；舉辦",
    "en_def": "to organize an event and invite people to it",
    "sentence": "A: Our company is celebrating its twentieth anniversary next month, and the CEO wants to invite our most important customers, so who will organize the party? B: We are going to {{BLANK}} the celebration ourselves at a hotel downtown, and the events team is already preparing the invitations, the menu, and the music.",
    "cn": "A：我們公司下個月要慶祝二十週年，執行長想邀請我們最重要的客戶，誰來籌辦派對？ B：我們打算自己在市中心的一家飯店【舉辦】慶祝活動，活動團隊已經在準備邀請函、菜單和音樂了。"
  },
  {
    "word": "reserve",
    "pos": "v.",
    "cn_def": "預訂",
    "en_def": "to arrange for something to be kept for you",
    "sentence": "A: The training workshop next Wednesday will have about twenty new employees, and the meeting areas are always fully booked in spring, so what should I do now? B: You should {{BLANK}} the training room on the second floor today, before another department takes it, and ask the IT team to set up laptops there.",
    "cn": "A：下週三的訓練工作坊大約有二十位新進員工，而會議空間在春天總是被訂滿，我現在該怎麼做？ B：你應該今天就【預訂】二樓的訓練教室，以免被其他部門搶走，並請資訊團隊在那裡架設筆電。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy to reach or use; suitable",
    "sentence": "A: Our clients are coming from both Taichung and Taipei for the product demonstration, so where do you think we should hold the meeting? B: The hotel next to the high-speed rail station in Taoyuan would be the most {{BLANK}} choice, because people from both cities can get there quickly without driving.",
    "cn": "A：我們的客戶會分別從台中和台北來參加產品展示，你覺得我們該在哪裡開會？ B：桃園高鐵站旁的飯店會是最【方便的】選擇，因為兩個城市的人都可以不用開車就很快到達。"
  },
  {
    "word": "central",
    "pos": "adj.",
    "cn_def": "位於中心的；中央的",
    "en_def": "in or near the middle of a city or area",
    "sentence": "A: We are looking for a new office for our design studio, and many of our staff take the MRT to work every day, so what kind of area should we choose? B: We should look for something in a {{BLANK}} area of the city, close to several MRT lines, so that nobody has a long or tiring journey.",
    "cn": "A：我們在替設計工作室找新辦公室，很多員工每天搭捷運上班，我們該選擇什麼樣的區域？ B：我們應該在市區【位於中心的】地段找，靠近好幾條捷運線，這樣就沒有人需要長途又累人的通勤。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "方便進出的；無障礙的",
    "en_def": "easy to reach or enter, including for people in wheelchairs",
    "sentence": "A: One of the speakers at our seminar uses a wheelchair, and several older guests have difficulty climbing stairs, so what should we check about the venue? B: We need to make sure the building is fully {{BLANK}}, with ramps at the entrance, wide doors, and a large elevator that goes to every floor.",
    "cn": "A：我們研討會的一位講者坐輪椅，還有幾位年長來賓爬樓梯有困難，我們該確認場地的哪些事情？ B：我們必須確定大樓完全【無障礙】，入口有坡道、門夠寬，還有一部能到每一層樓的大電梯。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space",
    "sentence": "A: The last workshop felt very crowded because forty people were packed into a tiny training room, so what kind of space are you hoping to find this time? B: I would like something much more {{BLANK}}, with room for small group tables, a coffee area, and enough space for people to walk around freely.",
    "cn": "A：上次的工作坊感覺很擁擠，因為四十個人擠在一間小小的訓練教室裡，這次你希望找什麼樣的空間？ B：我想要一個【寬敞】得多的地方，可以擺小組桌、設咖啡區，還有足夠的空間讓大家自由走動。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "with little noise",
    "sentence": "A: I need to have a serious conversation with a client about a payment problem, and I don't want other people to hear us, so where should I meet her? B: You should book a {{BLANK}} corner table at the hotel tea house, because it is usually calm in the afternoon and the tables are far apart.",
    "cn": "A：我需要和一位客戶認真談一個付款問題，我不想讓別人聽到，我該在哪裡和她見面？ B：你應該在飯店茶館訂一張【安靜的】角落座位，因為那裡下午通常很平靜，而且桌子之間的距離很遠。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公共的",
    "en_def": "open to everyone",
    "sentence": "A: I am meeting a buyer from an online marketplace to sell my old laptop, but I have never met this person before, so where should we make the exchange? B: For safety, you should meet in a busy {{BLANK}} area such as the train station hall, where there are security cameras and lots of people around.",
    "cn": "A：我要和網路市集上的買家見面賣我的舊筆電，但我從來沒見過這個人，我們該在哪裡交易？ B：為了安全，你應該約在人多的【公共】區域，例如火車站大廳，那裡有監視器，周圍也有很多人。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；包廂的",
    "en_def": "only for one person or group, not for everyone",
    "sentence": "A: The directors want to discuss the merger plan over dinner, but the information is confidential and must not be heard by other diners, so what should we book? B: We should book a {{BLANK}} dining room at the steakhouse, where the door closes and the waiters only come in when we ring the bell.",
    "cn": "A：董事們想在晚餐時討論合併計畫，但這些資訊是機密，絕不能被其他用餐客人聽到，我們該訂什麼？ B：我們應該訂牛排館的【私人】包廂，那裡的門可以關上，服務生只有在我們按鈴時才會進來。"
  },
  {
    "word": "indoors",
    "pos": "adv.",
    "cn_def": "在室內",
    "en_def": "inside a building",
    "sentence": "A: The outdoor team-building games were planned for Friday afternoon, but the weather report now says there will be a typhoon, so what should we do? B: Let's move all the activities {{BLANK}} to the gym on the ground floor, where we have enough space and nobody will get wet or hurt by the wind.",
    "cn": "A：戶外團隊建立遊戲原本排在星期五下午，但現在氣象報告說會有颱風，我們該怎麼辦？ B：我們把所有活動移到【室內】一樓的體育館吧，那裡空間足夠，也沒有人會淋濕或被強風吹傷。"
  },
  {
    "word": "outdoors",
    "pos": "adv.",
    "cn_def": "在戶外",
    "en_def": "outside, not in a building",
    "sentence": "A: The spring weather has been lovely this week, and everyone is tired of sitting in the office all day, so where would you like to hold our weekly team lunch? B: Why don't we eat {{BLANK}} on the rooftop garden, where we can enjoy the sunshine, get some fresh air, and still be back at our desks quickly?",
    "cn": "A：這週春天的天氣很宜人，大家都厭倦整天坐在辦公室裡了，你想在哪裡辦我們每週的團隊午餐？ B：我們何不在頂樓花園【戶外】用餐？在那裡可以享受陽光、呼吸新鮮空氣，還能很快回到座位。"
  },
  {
    "word": "nearby",
    "pos": "adv.",
    "cn_def": "在附近",
    "en_def": "not far away",
    "sentence": "A: I just landed at the airport for tomorrow's meeting, and I would like to have a quick dinner with you tonight if you are free. B: Sure, my apartment is very close to your hotel, and there is a nice noodle shop {{BLANK}}, so we can meet there at seven and walk back together afterward.",
    "cn": "A：我剛降落機場準備明天的會議，如果你有空，今晚想和你簡單吃個晚餐。 B：當然好，我的公寓離你的飯店很近，【附近】有一家不錯的麵店，我們七點在那裡碰面，吃完再一起走回去。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "with each other",
    "sentence": "A: The sales staff in our two offices rarely see each other in person, and some of them have never even met, so how can we improve teamwork? B: We could bring both teams {{BLANK}} for a planning day in Taichung every three months, with workshops in the morning and a shared dinner in the evening.",
    "cn": "A：我們兩間辦公室的業務人員很少面對面見到彼此，有些人甚至從沒見過，我們要怎麼改善團隊合作？ B：我們可以每三個月讓兩個團隊【一起】到台中參加規劃日，早上辦工作坊，晚上一起吃晚餐。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地",
    "en_def": "often, at fixed times",
    "sentence": "A: The project with our partner in Kaohsiung is getting more complicated, and emails alone are causing a lot of confusion, so what do you suggest we change? B: I think the two teams should meet {{BLANK}}, perhaps every Tuesday morning online and once a month in person, so problems are solved before they grow bigger.",
    "cn": "A：我們和高雄夥伴的專案越來越複雜，光靠電子郵件造成很多混亂，你建議我們改變什麼？ B：我認為兩個團隊應該【定期】開會，也許每週二早上線上開，每個月再面對面開一次，這樣問題就能在變大之前解決。"
  }
];

const MCQS = [
  {
    "q": "The organizers have chosen a riverside hotel as the _____ for this year's awards dinner. Invitations will be sent out on Monday.",
    "options": [
      "venue",
      "entrance",
      "corner",
      "lobby"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Because the bakery's new _____ is next to a busy MRT station, sales have doubled. The owner plans to hire three more staff.",
    "options": [
      "lobby",
      "auditorium",
      "location",
      "lounge"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors to the construction _____ must wear safety helmets at all times. Please collect one from the security office before entering.",
    "options": [
      "lounge",
      "site",
      "café",
      "lobby"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The wedding banquet will be held in the hotel's grand _____ on the first floor. It can seat up to five hundred guests.",
    "options": [
      "café",
      "park",
      "plaza",
      "hall"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Each hotel _____ has a large desk, free Wi-Fi, and a coffee machine for business travelers. Breakfast is served in the lobby.",
    "options": [
      "plaza",
      "park",
      "room",
      "entrance"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Please wait in the hotel _____ near the front desk until the driver arrives. He will be holding a sign with your name.",
    "options": [
      "lobby",
      "park",
      "plaza",
      "auditorium"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "We usually discuss new ideas over coffee at a small _____ around the corner from our office. Their cakes are also delicious.",
    "options": [
      "auditorium",
      "hall",
      "lobby",
      "café"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The seafood _____ on the harbor is fully booked every weekend. Guests should reserve a table at least three days ahead.",
    "options": [
      "auditorium",
      "restaurant",
      "lobby",
      "entrance"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "On sunny days, many office workers eat their lunch on the benches in the _____ across the street. It has a pond and tall trees.",
    "options": [
      "park",
      "lobby",
      "lounge",
      "auditorium"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Our manager works at the head _____ in Taipei, but she visits the factory in Tainan twice a month. Please email her directly.",
    "options": [
      "plaza",
      "park",
      "office",
      "lounge"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The board meeting has been moved to the large _____ on the eighth floor. A projector and microphones have already been set up.",
    "options": [
      "park",
      "conference room",
      "plaza",
      "café"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The new president will give her opening speech in the school _____ at nine o'clock. All five hundred students are required to attend.",
    "options": [
      "lobby",
      "café",
      "lounge",
      "auditorium"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The city's new convention _____ can hold three trade fairs at the same time. It opened next to the airport last year.",
    "options": [
      "corner",
      "entrance",
      "center",
      "lobby"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Business-class passengers may relax in the airport _____ before boarding. Free drinks, snacks, and showers are available there.",
    "options": [
      "lounge",
      "plaza",
      "park",
      "entrance"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Thousands of people gathered in the _____ in front of City Hall to watch the New Year fireworks. The square was packed by eight o'clock.",
    "options": [
      "lobby",
      "lounge",
      "café",
      "plaza"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Visitors should use the main _____ on Zhongshan Road because the side door is being repaired. Security staff will check every badge.",
    "options": [
      "lounge",
      "entrance",
      "auditorium",
      "café"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Fans began to _____ outside the stadium hours before the concert started. Police closed the nearby roads to traffic.",
    "options": [
      "gather",
      "reserve",
      "host",
      "rent"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "All passengers must _____ at the meeting point on deck three for the safety drill. Crew members will then explain the lifeboat rules.",
    "options": [
      "host",
      "reserve",
      "assemble",
      "rent"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Our firm will _____ an international trade conference in Kaohsiung next spring. Over sixty companies from Asia have already agreed to attend.",
    "options": [
      "gather",
      "host",
      "assemble",
      "wait"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "To make sure we have enough seats, please _____ a table for twelve at the restaurant by Thursday. The dinner starts at seven.",
    "options": [
      "gather",
      "assemble",
      "host",
      "reserve"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The hotel is very _____ for business travelers because it is only a five-minute walk from the main station. Rooms also include free breakfast.",
    "options": [
      "spacious",
      "private",
      "convenient",
      "public"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Our new branch is in a _____ part of Taichung, close to the city's main shopping streets. Customers can walk there from the bus terminal.",
    "options": [
      "central",
      "spacious",
      "private",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The new library is fully _____ to wheelchair users, with ramps and wide elevators on every floor. It opened last month.",
    "options": [
      "spacious",
      "central",
      "private",
      "accessible"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The new office is bright and _____, with enough room for forty desks and a large kitchen. Staff say they enjoy working there.",
    "options": [
      "central",
      "spacious",
      "public",
      "private"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The museum garden is a _____ space, so anyone can visit it free of charge. It is open from eight until six every day.",
    "options": [
      "public",
      "private",
      "spacious",
      "central"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The CEO asked to have lunch with the investors in a _____ dining room. She did not want other guests to hear their discussion.",
    "options": [
      "public",
      "central",
      "private",
      "accessible"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Because of the heavy rain, the company sports day will be held _____ in the gym. Please bring clean shoes for the wooden floor.",
    "options": [
      "outdoors",
      "indoors",
      "regularly",
      "nearby"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "When the weather is warm, our team likes to hold meetings _____ in the garden. The fresh air helps everyone think more clearly.",
    "options": [
      "indoors",
      "upstairs",
      "downstairs",
      "outdoors"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The two departments will work _____ on the new marketing campaign. They plan to share one large office until the project ends.",
    "options": [
      "indoors",
      "outdoors",
      "together",
      "abroad"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "Managers should meet _____ with their staff to discuss progress and problems. Most teams hold short meetings every Monday morning.",
    "options": [
      "regularly",
      "indoors",
      "outdoors",
      "abroad"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "venue": {
    "pos": "n.",
    "en_def": "a place where an event or meeting happens",
    "cn_def": "場地"
  },
  "location": {
    "pos": "n.",
    "en_def": "the place where something is",
    "cn_def": "地點；位置"
  },
  "spot": {
    "pos": "n.",
    "en_def": "a particular place",
    "cn_def": "地點；場所"
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is built or happens",
    "cn_def": "現場；地點"
  },
  "place": {
    "pos": "n.",
    "en_def": "an area or building used for a purpose",
    "cn_def": "地方"
  },
  "hall": {
    "pos": "n.",
    "en_def": "a large room or building for meetings or events",
    "cn_def": "大廳；會堂"
  },
  "room": {
    "pos": "n.",
    "en_def": "a space inside a building with walls",
    "cn_def": "房間；室"
  },
  "lobby": {
    "pos": "n.",
    "en_def": "the entrance area inside a hotel or office building",
    "cn_def": "大廳"
  },
  "café": {
    "pos": "n.",
    "en_def": "a small restaurant that sells coffee, drinks and light meals",
    "cn_def": "咖啡館"
  },
  "restaurant": {
    "pos": "n.",
    "en_def": "a place where people pay to eat meals",
    "cn_def": "餐廳"
  },
  "park": {
    "pos": "n.",
    "en_def": "a public green area in a town",
    "cn_def": "公園"
  },
  "office": {
    "pos": "n.",
    "en_def": "a room or building where people do business work",
    "cn_def": "辦公室"
  },
  "conference room": {
    "pos": "n.phr.",
    "en_def": "a room for business meetings",
    "cn_def": "會議室"
  },
  "auditorium": {
    "pos": "n.",
    "en_def": "a large building or room where people watch speeches or shows",
    "cn_def": "禮堂"
  },
  "center": {
    "pos": "n.",
    "en_def": "a building used for a particular activity",
    "cn_def": "中心"
  },
  "club": {
    "pos": "n.",
    "en_def": "a place where members meet for an activity",
    "cn_def": "俱樂部"
  },
  "lounge": {
    "pos": "n.",
    "en_def": "a comfortable room where people can sit and relax",
    "cn_def": "休息室；貴賓室"
  },
  "plaza": {
    "pos": "n.",
    "en_def": "an open public square in a city",
    "cn_def": "廣場"
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two streets meet",
    "cn_def": "街角"
  },
  "entrance": {
    "pos": "n.",
    "en_def": "the door or gate where you go into a place",
    "cn_def": "入口"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place",
    "cn_def": "聚集；集合"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to come together as a group for a purpose",
    "cn_def": "集合"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and invite people to it",
    "cn_def": "主辦；舉辦"
  },
  "reserve": {
    "pos": "v.",
    "en_def": "to arrange for something to be kept for you",
    "cn_def": "預訂"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to reach or use; suitable",
    "cn_def": "方便的"
  },
  "central": {
    "pos": "adj.",
    "en_def": "in or near the middle of a city or area",
    "cn_def": "位於中心的；中央的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach or enter, including for people in wheelchairs",
    "cn_def": "方便進出的；無障礙的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space",
    "cn_def": "寬敞的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "with little noise",
    "cn_def": "安靜的"
  },
  "public": {
    "pos": "adj.",
    "en_def": "open to everyone",
    "cn_def": "公共的"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or group, not for everyone",
    "cn_def": "私人的；包廂的"
  },
  "indoors": {
    "pos": "adv.",
    "en_def": "inside a building",
    "cn_def": "在室內"
  },
  "outdoors": {
    "pos": "adv.",
    "en_def": "outside, not in a building",
    "cn_def": "在戶外"
  },
  "nearby": {
    "pos": "adv.",
    "en_def": "not far away",
    "cn_def": "在附近"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other",
    "cn_def": "一起"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at fixed times",
    "cn_def": "定期地"
  }
};

const EXTRA_GLOSSES = {};
