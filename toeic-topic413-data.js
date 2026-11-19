// Topic 413 Quiz Data: Traffic 交通
// Source word list: https://www.examword.com/group-topic/traffic — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T413 - Traffic 交通",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "vehicle",
    "pos": "n.",
    "cn_def": "車輛",
    "en_def": "a car, bus, truck, or other machine used to carry people or goods",
    "sentence": "A: Our sales team needs to visit five clients in the countryside next week, so should we rent a large van or take several small cars? B: I think one company {{BLANK}} is cheaper and easier to manage, and if we leave early, everyone can review the presentation together during the long drive.",
    "cn": "A：我們的業務團隊下週需要拜訪鄉下的五位客戶，所以我們應該租一台大型廂型車，還是開幾輛小車去？ B：我認為一輛公司【車輛】比較便宜也比較好管理，而且如果我們早點出發，大家可以在長途車程中一起檢視簡報內容。"
  },
  {
    "word": "road",
    "pos": "n.",
    "cn_def": "道路",
    "en_def": "a wide hard path for cars and other vehicles",
    "sentence": "A: The new branch office looks great on the map, but how do customers actually get there from the train station? B: There is only one narrow {{BLANK}} through the hills right now, but the city government has promised to widen it next year, which should make the trip much faster.",
    "cn": "A：新分公司在地圖上看起來很棒，但客戶實際上要怎麼從火車站到那裡？ B：目前只有一條穿過山丘的狹窄【道路】，不過市政府已經承諾明年會拓寬，這樣應該能讓路程快很多。"
  },
  {
    "word": "highway",
    "pos": "n.",
    "cn_def": "公路；高速公路",
    "en_def": "a main road for fast travel between cities",
    "sentence": "A: Should we take the train to the trade fair in Taichung, or is it better to drive the company car with all the product samples? B: Driving is probably better because the {{BLANK}} is usually clear on Saturday mornings, and we can carry the heavy boxes without paying extra shipping fees.",
    "cn": "A：我們應該搭火車去台中的商展，還是開公司車載著所有產品樣品去比較好？ B：開車可能比較好，因為星期六早上【高速公路】通常很順暢，而且我們可以載那些沉重的箱子，不用多付運費。"
  },
  {
    "word": "street",
    "pos": "n.",
    "cn_def": "街道",
    "en_def": "a public road in a town or city with buildings along it",
    "sentence": "A: I'm meeting a new client at the coffee shop near your office this afternoon, but I'm not sure exactly where it is. B: Walk out of the main entrance, turn left, and it's on the next {{BLANK}}, right between the bookstore and the bank, so you can't miss the big green sign.",
    "cn": "A：我今天下午要在你辦公室附近的咖啡店和一位新客戶見面，但我不太確定它確切在哪裡。 B：從正門走出去後左轉，它就在下一條【街道】上，正好在書店和銀行之間，所以你一定會看到那個綠色的大招牌。"
  },
  {
    "word": "intersection",
    "pos": "n.",
    "cn_def": "十字路口；交叉口",
    "en_def": "a place where two or more roads cross",
    "sentence": "A: Why did the delivery driver call to say he couldn't find our warehouse even though he had the address? B: The GPS sent him the wrong way at the busy {{BLANK}} near the hospital, so I told him to go back, follow the signs for the industrial park, and wait for me at the gate.",
    "cn": "A：為什麼送貨司機打電話說他找不到我們的倉庫，即使他有地址？ B：導航在醫院附近那個繁忙的【十字路口】讓他走錯方向，所以我告訴他往回走，跟著工業區的指標前進，然後在大門口等我。"
  },
  {
    "word": "lane",
    "pos": "n.",
    "cn_def": "車道",
    "en_def": "one of the parts of a road marked by lines for one line of cars",
    "sentence": "A: Do you have any advice for my first drive into the city center tomorrow morning for the meeting? B: Stay in the right {{BLANK}} after you leave the tunnel because the exit to our office comes up very quickly, and many visitors miss it and have to drive around for another twenty minutes.",
    "cn": "A：我明天早上第一次開車進市中心開會，你有什麼建議嗎？ B：出隧道後要待在右側【車道】，因為通往我們辦公室的出口很快就會出現，很多訪客都錯過了，結果得再繞二十分鐘。"
  },
  {
    "word": "traffic jam",
    "pos": "n.phr.",
    "cn_def": "交通堵塞；塞車",
    "en_def": "a long line of vehicles that cannot move or move very slowly",
    "sentence": "A: You look stressed this morning, and the meeting started fifteen minutes ago without you, so what happened on your way here? B: I was stuck in a terrible {{BLANK}} on the bridge for almost an hour because two trucks broke down, and my phone battery died, so I couldn't even call to tell you.",
    "cn": "A：你今天早上看起來壓力很大，而且會議十五分鐘前就在你缺席的情況下開始了，你來的路上發生了什麼事？ B：我在橋上被困在一場嚴重的【交通堵塞】中將近一個小時，因為有兩輛卡車拋錨，而且我的手機也沒電了，所以我甚至沒辦法打電話告訴你。"
  },
  {
    "word": "congestion",
    "pos": "n.",
    "cn_def": "擁塞；交通擁擠",
    "en_def": "a situation in which there are too many vehicles on the roads",
    "sentence": "A: Why is the city planning to charge drivers a fee for entering the downtown area during working hours? B: The officials say the heavy {{BLANK}} is causing long delays and air pollution, so they hope the fee will encourage more office workers to use buses, trains, and shared bicycles instead.",
    "cn": "A：為什麼市政府計畫在上班時間向進入市中心的駕駛人收費？ B：官員說嚴重的【交通擁塞】造成長時間延誤和空氣污染，所以他們希望這筆費用能鼓勵更多上班族改搭公車、火車和共享單車。"
  },
  {
    "word": "rush hour",
    "pos": "n.phr.",
    "cn_def": "尖峰時間",
    "en_def": "the busy time of day when most people travel to or from work",
    "sentence": "A: What time should I book the taxi to the airport if my flight to Singapore leaves at seven in the evening? B: Book it for three o'clock, because if you leave after four, you will be caught in the {{BLANK}} and it could take twice as long to get through the city center.",
    "cn": "A：如果我飛往新加坡的班機是晚上七點起飛，我應該預約幾點的計程車去機場？ B：訂三點的，因為如果你四點以後才出發，就會碰上【尖峰時間】，穿越市中心可能要花兩倍的時間。"
  },
  {
    "word": "commute",
    "pos": "n.",
    "cn_def": "通勤",
    "en_def": "the trip a person makes to work and back every day",
    "sentence": "A: Are you really thinking about accepting the job offer from the company on the other side of the city? B: The salary is better, but the daily {{BLANK}} would be almost ninety minutes each way by bus and train, so I'm asking them whether I could work from home two days a week.",
    "cn": "A：你真的在考慮接受城市另一頭那家公司的工作邀約嗎？ B：薪水比較好，但每天搭公車和火車【通勤】單程就要將近九十分鐘，所以我在詢問他們是否能讓我每週在家工作兩天。"
  },
  {
    "word": "driver",
    "pos": "n.",
    "cn_def": "司機；駕駛人",
    "en_def": "a person who drives a car, bus, or other vehicle",
    "sentence": "A: How will the guests from Japan get from the airport to the hotel when they arrive late on Thursday night? B: I've hired a professional {{BLANK}} from a local car service, and he will hold a sign with our company's name at the arrival gate, then take them straight to the hotel.",
    "cn": "A：日本來的客人星期四深夜抵達時，要怎麼從機場到飯店？ B：我已經向本地一家禮車公司雇用了一位專業【司機】，他會在入境大廳舉著寫有我們公司名稱的牌子，然後直接送他們到飯店。"
  },
  {
    "word": "pedestrian",
    "pos": "n.",
    "cn_def": "行人",
    "en_def": "a person who is walking on a street, not driving",
    "sentence": "A: Why has the shopping district closed the main road to cars every weekend since last month? B: The local business owners wanted to make the area safer and more pleasant for every {{BLANK}}, and so far, the shops say they have seen more customers stopping to look around and buy things.",
    "cn": "A：為什麼購物區從上個月開始每個週末都禁止汽車進入主要道路？ B：當地商家希望讓這一區對每位【行人】來說更安全也更舒適，到目前為止，店家表示看到更多顧客停下來逛逛和購物。"
  },
  {
    "word": "crosswalk",
    "pos": "n.",
    "cn_def": "斑馬線；行人穿越道",
    "en_def": "a marked place on a road where people can walk across",
    "sentence": "A: The new employees keep crossing the busy road in front of the factory, so what should we tell them during training? B: Remind them to use the {{BLANK}} near the bus stop and to wait for the green light, because trucks come out of the loading area very quickly and the drivers cannot always see people.",
    "cn": "A：新員工一直在工廠前那條繁忙的馬路上穿越，我們在訓練時應該告訴他們什麼？ B：提醒他們使用公車站附近的【斑馬線】並等綠燈，因為卡車從裝卸區開出來的速度很快，司機不一定看得到行人。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path at the side of a road for people to walk on",
    "sentence": "A: Is it easy to walk from the conference center to the restaurant where we're having dinner with the clients tonight? B: Yes, it only takes about ten minutes, and there is a wide {{BLANK}} with trees along the river, but bring an umbrella because the weather report says it might rain after six.",
    "cn": "A：從會議中心走到我們今晚要和客戶吃晚餐的餐廳方便嗎？ B：方便，大概只要十分鐘，而且沿著河邊有一條種滿樹的寬敞【人行道】，不過要帶把傘，因為氣象報告說六點以後可能會下雨。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "信號；號誌；方向燈",
    "en_def": "a light or sign that gives a message, such as a car light showing which way you will go",
    "sentence": "A: The driving instructor said I failed the test this morning, but I thought I drove carefully the whole time. B: He told me you forgot to give a {{BLANK}} before changing lanes on the main road twice, and that is a serious mistake because other drivers need to know where you are going.",
    "cn": "A：駕訓班教練說我今天早上考試沒通過，但我以為我全程都開得很小心。 B：他告訴我，你在主要道路上變換車道前兩次忘了打【方向燈】，這是很嚴重的錯誤，因為其他駕駛需要知道你要往哪裡開。"
  },
  {
    "word": "traffic light",
    "pos": "n.phr.",
    "cn_def": "紅綠燈",
    "en_def": "a set of red, yellow, and green lights that control traffic",
    "sentence": "A: The taxi driver dropped me off on the wrong side of the shopping mall, so how do I get to your office from here? B: Walk to the {{BLANK}} at the corner, cross when it turns green, and our building is the tall glass one right next to the post office with the blue sign.",
    "cn": "A：計程車司機把我放在購物中心的另一側，我要怎麼從這裡到你的辦公室？ B：走到轉角的【紅綠燈】，變綠燈時過馬路，我們的大樓就是郵局旁邊那棟有藍色招牌的高大玻璃大樓。"
  },
  {
    "word": "speed limit",
    "pos": "n.phr.",
    "cn_def": "速限",
    "en_def": "the fastest speed allowed by law on a road",
    "sentence": "A: Why did the company send an email to every sales representative who uses a company car this month? B: Several of them received tickets for driving over the {{BLANK}} near the school zone, so the manager wants to remind everyone that the company will no longer pay those fines for them.",
    "cn": "A：為什麼公司這個月寄電子郵件給每一位使用公司車的業務代表？ B：他們之中有幾個人在學區附近因為超過【速限】而收到罰單，所以經理想提醒大家，公司不會再替他們支付那些罰款了。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "how fast something moves",
    "sentence": "A: How did the new delivery company manage to cut our shipping times in half compared with our old supplier? B: They use smaller vans that can travel at a higher {{BLANK}} through the narrow streets downtown, and their computer system plans the shortest route for every driver before they leave.",
    "cn": "A：和我們以前的供應商相比，這家新的物流公司是怎麼把我們的運送時間縮短一半的？ B：他們使用比較小的廂型車，能以較快的【速度】穿越市中心的狹窄街道，而且他們的電腦系統會在每位司機出發前規劃最短路線。"
  },
  {
    "word": "brake",
    "pos": "v.",
    "cn_def": "煞車",
    "en_def": "to make a vehicle go slower or stop",
    "sentence": "A: Was anyone hurt when the delivery truck almost hit the bus outside our office building yesterday afternoon? B: Luckily, no one was injured, because the truck driver saw the bus pull out and was able to {{BLANK}} just in time, although a few boxes of glass bottles fell over and broke.",
    "cn": "A：昨天下午送貨卡車差點撞上我們辦公大樓外的公車時，有人受傷嗎？ B：幸好沒有人受傷，因為卡車司機看到公車駛出，及時【煞車】，雖然有幾箱玻璃瓶倒下摔破了。"
  },
  {
    "word": "accelerate",
    "pos": "v.",
    "cn_def": "加速",
    "en_def": "to make a vehicle go faster",
    "sentence": "A: I'm nervous about driving on the highway for the first time with my new company car next week. B: When you enter from the ramp, check your mirror and {{BLANK}} smoothly to match the speed of the other cars, because joining too slowly is actually more dangerous than most new drivers think.",
    "cn": "A：下週我要第一次開新的公司車上高速公路，我很緊張。 B：從匝道進入時，要看後照鏡並平穩地【加速】，以配合其他車輛的速度，因為切入時開得太慢其實比大多數新手駕駛想的還要危險。"
  },
  {
    "word": "turn",
    "pos": "v.",
    "cn_def": "轉彎；轉向",
    "en_def": "to change direction when you are moving",
    "sentence": "A: I've been driving around the business park for twenty minutes, and I still can't find your company's parking entrance. B: Go past the gas station, then {{BLANK}} left at the second corner, and you'll see our gray building with a security guard who will open the gate for you.",
    "cn": "A：我已經在商業園區繞了二十分鐘，還是找不到你們公司的停車場入口。 B：經過加油站後，在第二個轉角向左【轉】，你就會看到我們那棟灰色大樓，會有一位警衛幫你開門。"
  },
  {
    "word": "merge",
    "pos": "v.",
    "cn_def": "匯入；併入",
    "en_def": "(of roads or traffic) to join together into one",
    "sentence": "A: Why does traffic always slow down near the airport exit even when there are no accidents? B: Two busy roads {{BLANK}} into a single lane right before the bridge, so all the cars and trucks have to take turns, and a long line forms during busy travel periods every afternoon.",
    "cn": "A：為什麼即使沒有車禍，機場出口附近的車流總是變慢？ B：兩條繁忙的道路在橋前【匯入】同一條車道，所以所有汽車和卡車都得輪流通過，每天下午的旅遊繁忙時段就會排起長長的車陣。"
  },
  {
    "word": "overtake",
    "pos": "v.",
    "cn_def": "超車；超越",
    "en_def": "to go past a slower vehicle moving in the same direction",
    "sentence": "A: The bus to the factory was really slow this morning, so why didn't the driver go faster on the country road? B: The road is very narrow with sharp curves, and it is not safe to {{BLANK}} the farm trucks there, so the driver waited patiently until we reached the wider section near the village.",
    "cn": "A：今天早上往工廠的公車真的好慢，為什麼司機在鄉間道路上不開快一點？ B：那條路很窄又有急彎，在那裡【超越】農用卡車並不安全，所以司機耐心等到我們抵達村莊附近較寬的路段。"
  },
  {
    "word": "park",
    "pos": "v.",
    "cn_def": "停車",
    "en_def": "to leave a vehicle in a place for a period of time",
    "sentence": "A: Is there anywhere near the convention center where visitors can leave their cars during the three-day exhibition? B: Visitors can {{BLANK}} in the underground garage below the hotel next door, and if they show their exhibition badge at the counter, they will get a fifty percent discount on the daily fee.",
    "cn": "A：會展中心附近有地方可以讓訪客在三天的展覽期間停放車輛嗎？ B：訪客可以【停車】在隔壁飯店的地下停車場，而且如果他們在櫃檯出示展覽識別證，每日費用就能打五折。"
  },
  {
    "word": "parking lot",
    "pos": "n.phr.",
    "cn_def": "停車場",
    "en_def": "an outdoor area where cars can be left",
    "sentence": "A: Where should the guests leave their cars when they arrive for the company anniversary party on Friday evening? B: They can use the large {{BLANK}} behind the main building, and I've asked two security guards to stand at the entrance to help them find empty spaces and show them the way to the hall.",
    "cn": "A：客人星期五晚上來參加公司週年派對時，應該把車停在哪裡？ B：他們可以使用主建築後面的大型【停車場】，我已經請兩位警衛站在入口處，幫他們找空位並帶他們到會場。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "罰單",
    "en_def": "a paper that orders you to pay money for breaking a traffic rule",
    "sentence": "A: Why are you in such a bad mood today, and why did you come back from lunch so late? B: I left my car outside the restaurant for only ten minutes, but a police officer gave me a {{BLANK}} for stopping in a no-parking area, and now I have to pay it at the post office.",
    "cn": "A：你今天為什麼心情這麼差，午餐又為什麼這麼晚才回來？ B：我只把車停在餐廳外面十分鐘，但一位警察因為我停在禁止停車區而開了我一張【罰單】，現在我得去郵局繳費。"
  },
  {
    "word": "fine",
    "pos": "n.",
    "cn_def": "罰款",
    "en_def": "money you must pay as a punishment for breaking a rule",
    "sentence": "A: What happens if our delivery drivers use the bus lane downtown to save time during the morning rush? B: The city cameras record every car that does it, and the company will receive a {{BLANK}} of about three thousand dollars for each case, so please remind the drivers to follow the rules.",
    "cn": "A：如果我們的送貨司機在早上尖峰時段為了節省時間使用市中心的公車專用道，會怎麼樣？ B：市府的攝影機會拍下每一輛這樣做的車，公司每次都會收到大約三千元的【罰款】，所以請提醒司機們遵守規定。"
  },
  {
    "word": "accident",
    "pos": "n.",
    "cn_def": "意外；車禍",
    "en_def": "an event in which vehicles crash and people may be hurt",
    "sentence": "A: Why is the main road to the train station closed this morning, and how are the office workers getting to work? B: There was a serious {{BLANK}} involving a bus and two cars just after midnight, so the police closed the road, and the city is running free shuttle buses from the shopping mall instead.",
    "cn": "A：為什麼今天早上通往火車站的主要道路封閉了？上班族要怎麼去上班？ B：午夜剛過時發生了一起涉及一輛公車和兩輛汽車的嚴重【車禍】，所以警方封閉了道路，市政府改從購物中心提供免費接駁車。"
  },
  {
    "word": "collision",
    "pos": "n.",
    "cn_def": "碰撞；相撞",
    "en_def": "a crash when two vehicles hit each other",
    "sentence": "A: Why did the insurance company send someone to look at the delivery van this morning before we could use it again? B: There was a minor {{BLANK}} with a taxi in the hotel's parking area last night, and although nobody was hurt, the insurance company needs photos of the damage before it pays for repairs.",
    "cn": "A：為什麼保險公司今天早上派人來檢查送貨廂型車，我們才能再使用？ B：昨晚在飯店停車區和一輛計程車發生了輕微【碰撞】，雖然沒有人受傷，但保險公司在支付修理費用前需要損壞部位的照片。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤",
    "en_def": "a time when something is late or slower than planned",
    "sentence": "A: The shipment of printers was supposed to arrive at our store yesterday, so do you know where it is now? B: The shipping company said there was a two-day {{BLANK}} because of road repairs on the main highway, but the driver promised to deliver everything before noon tomorrow without any extra charge.",
    "cn": "A：那批印表機原本應該昨天送到我們店裡，你知道它現在在哪裡嗎？ B：貨運公司說因為主要高速公路在修路，所以有兩天的【延誤】，不過司機保證明天中午前會把所有東西送達，而且不額外收費。"
  },
  {
    "word": "detour",
    "pos": "n.",
    "cn_def": "繞道；改道",
    "en_def": "a longer way you must take because the usual road is closed",
    "sentence": "A: Will the bus to the conference still stop in front of the hotel even though the bridge is closed for repairs? B: No, the bus company has announced a {{BLANK}} through the industrial area for the next two weeks, so we should leave twenty minutes earlier and wait at the stop behind the hotel.",
    "cn": "A：即使橋梁因維修封閉，開往會議的公車還會停在飯店前面嗎？ B：不會，公車公司已宣布接下來兩週會經由工業區【繞道】行駛，所以我們應該提早二十分鐘出發，並在飯店後面的站牌等車。"
  },
  {
    "word": "construction",
    "pos": "n.",
    "cn_def": "施工；建造",
    "en_def": "the work of building roads, buildings, and other structures",
    "sentence": "A: Why does it take so much longer to drive to the airport these days than it did last year? B: There is major {{BLANK}} on the new subway line along the main road, so two lanes are closed, and the work is not expected to finish until the end of next spring.",
    "cn": "A：為什麼現在開車去機場比去年多花這麼多時間？ B：主要道路沿線的新地鐵線正在進行大規模【施工】，所以封閉了兩條車道，而且工程預計要到明年春天結束才會完工。"
  },
  {
    "word": "bus lane",
    "pos": "n.phr.",
    "cn_def": "公車專用道",
    "en_def": "a part of the road that only buses may use",
    "sentence": "A: How do the buses downtown arrive on time every morning when all the other cars are stuck in heavy traffic? B: The city built a special {{BLANK}} on the main avenue last year, so buses can move quickly past the long lines of cars, and private drivers who use it get a fine.",
    "cn": "A：其他車輛都塞在嚴重車陣中時，市中心的公車每天早上怎麼還能準時抵達？ B：市政府去年在主要大道上興建了一條特殊的【公車專用道】，所以公車可以快速通過長長的車陣，私家車駕駛如果使用就會被罰款。"
  },
  {
    "word": "roundabout",
    "pos": "n.",
    "cn_def": "圓環",
    "en_def": "a round place where several roads meet and cars drive in a circle",
    "sentence": "A: I'm driving to your new office for the first time tomorrow, so are there any tricky parts I should know about? B: When you reach the big {{BLANK}} with the fountain in the middle, take the third exit, then go straight for about two kilometers until you see our company's flag on the left.",
    "cn": "A：我明天要第一次開車去你們的新辦公室，有沒有什麼我應該知道的難走路段？ B：當你到達中間有噴水池的大【圓環】時，從第三個出口出去，然後直走大約兩公里，直到看見左邊我們公司的旗子。"
  },
  {
    "word": "gridlock",
    "pos": "n.",
    "cn_def": "交通癱瘓",
    "en_def": "a situation in which traffic cannot move at all in any direction",
    "sentence": "A: Did you hear why so many employees missed the morning meeting during the typhoon warning yesterday? B: Heavy rain flooded several underpasses downtown, and the whole city center was in {{BLANK}} for almost two hours, so even the buses and taxis could not move at all.",
    "cn": "A：你有聽說昨天颱風警報期間為什麼這麼多員工錯過晨會嗎？ B：大雨淹沒了市中心好幾個地下道，整個市中心【交通癱瘓】將近兩個小時，所以連公車和計程車都完全動不了。"
  }
];

const MCQS = [
  {
    "q": "Employees who use a company _____ must record their driving distance each day. Finance checks the records every month.",
    "options": [
      "vehicle",
      "lane",
      "pedestrian",
      "detour"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new _____ between the two cities will open next spring. It will cut the driving time from three hours to ninety minutes.",
    "options": [
      "sidewalk",
      "crosswalk",
      "highway",
      "roundabout"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Please wait for me at the busy _____ of Main Street and Park Avenue. I will be driving a white van with our logo.",
    "options": [
      "commute",
      "intersection",
      "delay",
      "signal"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Trucks must stay in the right _____ on this section of the highway. The left side is reserved for faster cars that are passing.",
    "options": [
      "crosswalk",
      "ticket",
      "construction",
      "lane"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Our manager was stuck in a long _____ on the bridge this morning. As a result, the budget meeting was moved to the afternoon.",
    "options": [
      "speed limit",
      "traffic light",
      "traffic jam",
      "bus lane"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The city hopes the new subway line will reduce _____ in the downtown area. Fewer cars on the roads should also mean cleaner air.",
    "options": [
      "congestion",
      "sidewalk",
      "detour",
      "intersection"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Delivery trucks are not allowed downtown during _____ on weekdays. They must finish their deliveries before seven in the morning.",
    "options": [
      "traffic jam",
      "parking lot",
      "speed limit",
      "rush hour"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Many staff members say their daily _____ to the office takes over an hour. The company is now considering a flexible work schedule.",
    "options": [
      "gridlock",
      "commute",
      "signal",
      "vehicle"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The bus _____ announced that the next stop would be the convention center. Most of the passengers got off there with their luggage.",
    "options": [
      "driver",
      "pedestrian",
      "crosswalk",
      "lane"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A new bridge for _____ use only will connect the train station to the shopping mall. Cars and motorcycles will not be permitted on it.",
    "options": [
      "vehicle",
      "driver",
      "pedestrian",
      "roundabout"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Students from the nearby school use the _____ in front of our office every morning. Please drive slowly and stop when they are crossing.",
    "options": [
      "highway",
      "crosswalk",
      "gridlock",
      "detour"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The café has placed several small tables on the _____ outside its front door. Customers enjoy drinking coffee there while watching people walk by.",
    "options": [
      "highway",
      "congestion",
      "signal",
      "sidewalk"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Drivers must use their turn _____ before changing lanes on the highway. Failing to do so is one of the most common causes of accidents.",
    "options": [
      "ticket",
      "commute",
      "signal",
      "fine"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Turn left at the second _____ after you leave the station. Our office is in the tall building next to the bank.",
    "options": [
      "traffic light",
      "speed limit",
      "rush hour",
      "traffic jam"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The _____ near the elementary school is thirty kilometers per hour. Drivers who go faster than that will receive a heavy fine.",
    "options": [
      "bus lane",
      "parking lot",
      "rush hour",
      "speed limit"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The driver had to _____ suddenly when a dog ran into the road. Fortunately, nobody on the bus was hurt.",
    "options": [
      "merge",
      "brake",
      "overtake",
      "park"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "This electric car can _____ from zero to one hundred kilometers per hour in just four seconds. Its sales have doubled since last year.",
    "options": [
      "accelerate",
      "brake",
      "park",
      "merge"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Near the airport, the two highways _____ into one wide road. Drivers should watch carefully for cars coming from the left.",
    "options": [
      "overtake",
      "brake",
      "merge",
      "accelerate"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "It is dangerous to _____ another vehicle on a narrow mountain road. You cannot see the cars coming around the next curve.",
    "options": [
      "park",
      "overtake",
      "merge",
      "brake"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Visitors may _____ in the spaces marked with a blue sign. All other spaces are reserved for employees of the company.",
    "options": [
      "overtake",
      "accelerate",
      "merge",
      "park"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The shopping mall is building a larger _____ because customers often cannot find a space on weekends. It will hold about five hundred cars.",
    "options": [
      "traffic light",
      "rush hour",
      "parking lot",
      "speed limit"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Kevin received a parking _____ because he left his car in front of a fire station. He paid it online the same day.",
    "options": [
      "ticket",
      "lane",
      "delay",
      "detour"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Companies that let their trucks drive in the city center during the day must pay a _____ of five thousand dollars. The rule starts next month.",
    "options": [
      "lane",
      "commute",
      "signal",
      "fine"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The police are asking anyone who saw the _____ on Highway 5 last night to call them. Two cars and a truck were badly damaged.",
    "options": [
      "crosswalk",
      "accident",
      "sidewalk",
      "commute"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "We apologize for the _____ in delivering your order. Heavy snow closed several mountain roads, and our trucks could not get through.",
    "options": [
      "delay",
      "roundabout",
      "signal",
      "vehicle"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Because the bridge is closed for repairs, drivers must take a _____ through the industrial park. The trip will take about fifteen minutes longer.",
    "options": [
      "sidewalk",
      "crosswalk",
      "detour",
      "congestion"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Road _____ on Fifth Avenue will continue until the end of July. Please allow extra time when traveling to our store.",
    "options": [
      "pedestrian",
      "construction",
      "driver",
      "roundabout"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Taxis are now allowed to use the _____ on Main Avenue during the morning rush. City officials hope this will help passengers reach work faster.",
    "options": [
      "speed limit",
      "traffic jam",
      "traffic light",
      "bus lane"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "At the _____, take the second exit and follow the signs to the airport. The terminal is about three kilometers from there.",
    "options": [
      "commute",
      "congestion",
      "roundabout",
      "fine"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The parade and a football game on the same afternoon caused complete _____ downtown. Some drivers waited over an hour without moving at all.",
    "options": [
      "gridlock",
      "vehicle",
      "pedestrian",
      "intersection"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "vehicle": {
    "pos": "n.",
    "en_def": "a car, bus, truck, or other machine used to carry people or goods",
    "cn_def": "車輛"
  },
  "road": {
    "pos": "n.",
    "en_def": "a wide hard path for cars and other vehicles",
    "cn_def": "道路"
  },
  "highway": {
    "pos": "n.",
    "en_def": "a main road for fast travel between cities",
    "cn_def": "公路；高速公路"
  },
  "street": {
    "pos": "n.",
    "en_def": "a public road in a town or city with buildings along it",
    "cn_def": "街道"
  },
  "intersection": {
    "pos": "n.",
    "en_def": "a place where two or more roads cross",
    "cn_def": "十字路口；交叉口"
  },
  "lane": {
    "pos": "n.",
    "en_def": "one of the parts of a road marked by lines for one line of cars",
    "cn_def": "車道"
  },
  "traffic jam": {
    "pos": "n.phr.",
    "en_def": "a long line of vehicles that cannot move or move very slowly",
    "cn_def": "交通堵塞；塞車"
  },
  "congestion": {
    "pos": "n.",
    "en_def": "a situation in which there are too many vehicles on the roads",
    "cn_def": "擁塞；交通擁擠"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busy time of day when most people travel to or from work",
    "cn_def": "尖峰時間"
  },
  "commute": {
    "pos": "n.",
    "en_def": "the trip a person makes to work and back every day",
    "cn_def": "通勤"
  },
  "driver": {
    "pos": "n.",
    "en_def": "a person who drives a car, bus, or other vehicle",
    "cn_def": "司機；駕駛人"
  },
  "pedestrian": {
    "pos": "n.",
    "en_def": "a person who is walking on a street, not driving",
    "cn_def": "行人"
  },
  "crosswalk": {
    "pos": "n.",
    "en_def": "a marked place on a road where people can walk across",
    "cn_def": "斑馬線；行人穿越道"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a light or sign that gives a message, such as a car light showing which way you will go",
    "cn_def": "信號；號誌；方向燈"
  },
  "traffic light": {
    "pos": "n.phr.",
    "en_def": "a set of red, yellow, and green lights that control traffic",
    "cn_def": "紅綠燈"
  },
  "speed limit": {
    "pos": "n.phr.",
    "en_def": "the fastest speed allowed by law on a road",
    "cn_def": "速限"
  },
  "speed": {
    "pos": "n.",
    "en_def": "how fast something moves",
    "cn_def": "速度"
  },
  "brake": {
    "pos": "v.",
    "en_def": "to make a vehicle go slower or stop",
    "cn_def": "煞車"
  },
  "accelerate": {
    "pos": "v.",
    "en_def": "to make a vehicle go faster",
    "cn_def": "加速"
  },
  "turn": {
    "pos": "v.",
    "en_def": "to change direction when you are moving",
    "cn_def": "轉彎；轉向"
  },
  "merge": {
    "pos": "v.",
    "en_def": "(of roads or traffic) to join together into one",
    "cn_def": "匯入；併入"
  },
  "overtake": {
    "pos": "v.",
    "en_def": "to go past a slower vehicle moving in the same direction",
    "cn_def": "超車；超越"
  },
  "park": {
    "pos": "v.",
    "en_def": "to leave a vehicle in a place for a period of time",
    "cn_def": "停車"
  },
  "parking lot": {
    "pos": "n.phr.",
    "en_def": "an outdoor area where cars can be left",
    "cn_def": "停車場"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a paper that orders you to pay money for breaking a traffic rule",
    "cn_def": "罰單"
  },
  "fine": {
    "pos": "n.",
    "en_def": "money you must pay as a punishment for breaking a rule",
    "cn_def": "罰款"
  },
  "accident": {
    "pos": "n.",
    "en_def": "an event in which vehicles crash and people may be hurt",
    "cn_def": "意外；車禍"
  },
  "collision": {
    "pos": "n.",
    "en_def": "a crash when two vehicles hit each other",
    "cn_def": "碰撞；相撞"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a time when something is late or slower than planned",
    "cn_def": "延誤"
  },
  "detour": {
    "pos": "n.",
    "en_def": "a longer way you must take because the usual road is closed",
    "cn_def": "繞道；改道"
  },
  "construction": {
    "pos": "n.",
    "en_def": "the work of building roads, buildings, and other structures",
    "cn_def": "施工；建造"
  },
  "bus lane": {
    "pos": "n.phr.",
    "en_def": "a part of the road that only buses may use",
    "cn_def": "公車專用道"
  },
  "roundabout": {
    "pos": "n.",
    "en_def": "a round place where several roads meet and cars drive in a circle",
    "cn_def": "圓環"
  },
  "gridlock": {
    "pos": "n.",
    "en_def": "a situation in which traffic cannot move at all in any direction",
    "cn_def": "交通癱瘓"
  }
};

const EXTRA_GLOSSES = {};
