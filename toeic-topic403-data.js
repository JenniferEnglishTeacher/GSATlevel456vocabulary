// Topic 403 Quiz Data: Ticket 票券
// Source word list: https://www.examword.com/group-topic/ticket — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T403 - Ticket 票券",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fare",
    "pos": "n.",
    "cn_def": "車資；票價",
    "en_def": "the money you pay to travel on a bus, train, plane, or taxi",
    "sentence": "A: Do you know how much it costs to take the airport train from the main station to the convention center for our sales meeting tomorrow? B: The {{BLANK}} is about twelve dollars each way, but the company will pay you back if you keep the receipt and submit it with your travel expense report.",
    "cn": "A：你知道明天我們去開業務會議，從總站搭機場線到會議中心要多少錢嗎？ B：單程【車資】大約十二美元，不過只要你保留收據並和差旅費報告一起交，公司就會退錢給你。"
  },
  {
    "word": "admission",
    "pos": "n.",
    "cn_def": "入場費；入場許可",
    "en_def": "the money or permission needed to enter a place or event",
    "sentence": "A: Our clients from Japan want to visit the science museum on Saturday afternoon, so should I buy tickets for them online before they arrive at the hotel? B: Yes, please do, because {{BLANK}} is free for children but costs fifteen dollars for adults, and online buyers can skip the long line at the entrance.",
    "cn": "A：我們的日本客戶星期六下午想去科學博物館，我應該在他們抵達飯店前先上網幫他們買票嗎？ B：好，麻煩你了，因為兒童【入場費】免費，但成人要十五美元，而且網路購票的人可以不用在入口排長隊。"
  },
  {
    "word": "pass",
    "pos": "n.",
    "cn_def": "通行證；（可多次使用的）票卡",
    "en_def": "a ticket or card that lets you enter a place or travel many times",
    "sentence": "A: I'll be taking the subway to the new office every day next month while my car is being repaired, so what's the cheapest way to travel? B: You should buy a monthly {{BLANK}} at the station counter, because it lets you ride as many times as you want and saves you almost forty percent.",
    "cn": "A：下個月我的車在修理，我每天都要搭地鐵去新辦公室，最便宜的方式是什麼？ B：你應該在車站櫃台買一張【月票】，因為它可以讓你無限次搭乘，還能幫你省下將近四成的費用。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows you have paid for something",
    "sentence": "A: The accounting department says it cannot pay me back for the train tickets I bought last week for the trade show in Kaohsiung, so what's the problem? B: They probably need the original {{BLANK}} from the ticket machine, so check your wallet or email, because they never accept bank statements alone as proof.",
    "cn": "A：會計部說他們無法退還我上週去高雄參加商展所買的火車票錢，問題出在哪裡？ B：他們大概需要售票機印出的原始【收據】，所以檢查一下你的皮夾或電子郵件，因為他們從不只接受銀行對帳單作為證明。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預訂；預約",
    "en_def": "an arrangement to keep a seat, room, or table for you",
    "sentence": "A: The manager from our London office is flying in on Friday evening, so would that popular Italian restaurant near the station be a good place to take her? B: Yes, but you should make a {{BLANK}} today, because the restaurant is always full on weekends, and tables by the window are usually gone by Wednesday.",
    "cn": "A：倫敦辦公室的經理星期五晚上會搭機抵達，帶她去車站附近那家很受歡迎的義大利餐廳好嗎？ B：好，但你今天就應該先【訂位】，因為那家餐廳週末總是客滿，靠窗的位子通常星期三就被訂光了。"
  },
  {
    "word": "booking",
    "pos": "n.",
    "cn_def": "預訂",
    "en_def": "the act of arranging a ticket, seat, or room in advance",
    "sentence": "A: I tried to buy tickets for the company's concert night on the website, but the page kept showing an error after I entered my card number, so what should I do? B: Don't worry, I'll call the theater and make the {{BLANK}} by phone instead, and they can email the tickets to everyone in our department.",
    "cn": "A：我試著在網站上購買公司音樂會之夜的票，但輸入卡號後頁面一直顯示錯誤，我該怎麼辦？ B：別擔心，我會改打電話給劇院用電話完成【預訂】，他們可以把票用電子郵件寄給我們部門的每個人。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say or show that something is true or will happen",
    "sentence": "A: The travel agency booked our flights to Singapore for the conference, but why haven't I received any email about our seats or our hotel yet? B: You should call them this afternoon to {{BLANK}} everything, because last year a small mistake in their system left two of our engineers without rooms.",
    "cn": "A：旅行社已經幫我們訂好去新加坡參加會議的機票，但為什麼我還沒收到任何有關座位或飯店的電子郵件？ B：你今天下午應該打電話給他們【確認】所有事情，因為去年他們系統的一個小錯誤讓我們兩位工程師沒有房間住。"
  },
  {
    "word": "cancel",
    "pos": "v.",
    "cn_def": "取消",
    "en_def": "to say that something you arranged will not happen",
    "sentence": "A: The client just told me that the meeting in Taichung has been moved to next month, so what should I do with the high-speed rail tickets I bought? B: You can {{BLANK}} them on the railway app before the train leaves, and you'll get most of your money back after a small service charge.",
    "cn": "A：客戶剛告訴我台中的會議延到下個月了，那我買好的高鐵票該怎麼辦？ B：你可以在列車出發前用鐵路APP【取消】，扣掉一點手續費後大部分的錢都會退還給你。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money that is given back to you",
    "sentence": "A: The airline canceled my flight to Tokyo because of the typhoon, and now I have to take the train to the meeting in Osaka, so can I get my money back? B: Yes, you should ask the airline for a full {{BLANK}}, since the cancellation was their decision, and then use the money to pay for your new rail ticket.",
    "cn": "A：航空公司因為颱風取消了我飛往東京的班機，現在我只好改搭火車去大阪開會，我能拿回我的錢嗎？ B：可以，你應該向航空公司要求全額【退款】，因為取消是他們的決定，然後用那筆錢支付你新的火車票。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "更換；交換",
    "en_def": "to give something back and receive something else instead",
    "sentence": "A: I bought two tickets for Saturday's musical as a gift for my team leader, but she'll be visiting her parents that weekend, so are the tickets wasted? B: Not at all, you can probably {{BLANK}} them for Sunday evening tickets at the box office, as long as you go there at least two days before the show.",
    "cn": "A：我買了兩張星期六音樂劇的票送給我的組長，但她那個週末要回去看父母，這些票就浪費了嗎？ B：不會，你應該可以到售票處把它們【更換】成星期日晚上的票，只要你在演出至少兩天前去辦理就行。"
  },
  {
    "word": "upgrade",
    "pos": "n.",
    "cn_def": "升等",
    "en_def": "a change to a better seat, room, or service",
    "sentence": "A: My flight to New York for the sales conference is almost fourteen hours long, so is there any way I can sleep better than in economy class? B: Ask the agent at check-in about an {{BLANK}} to business class, because they sometimes offer cheap prices when the plane isn't full and you are a frequent flyer.",
    "cn": "A：我飛往紐約參加業務會議的班機將近十四個小時，有沒有辦法睡得比在經濟艙好一點？ B：報到時問問地勤人員能不能【升等】到商務艙，因為飛機沒坐滿而且你是常客時，他們有時會提供便宜的價格。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: Our department is planning a team trip to the amusement park next month, but aren't the tickets quite expensive for a group of thirty people? B: Call the park's sales office and ask for a group {{BLANK}}, because most parks lower the price by twenty percent for companies that buy more than twenty tickets.",
    "cn": "A：我們部門計畫下個月去遊樂園員工旅遊，但對三十個人的團體來說門票不是相當貴嗎？ B：打電話給樂園的業務部詢問團體【折扣】，因為大多數樂園對購買超過二十張票的公司會降價兩成。"
  },
  {
    "word": "voucher",
    "pos": "n.",
    "cn_def": "兌換券；禮券",
    "en_def": "a printed paper or code that you can use instead of money",
    "sentence": "A: You said the hotel was so noisy last night that you couldn't sleep, so did the front desk offer you anything when you checked out this morning? B: Yes, the manager apologized and gave me a {{BLANK}} for a free dinner at the hotel restaurant, which I can use any time before the end of the year.",
    "cn": "A：你說昨晚飯店吵到你睡不著，那今天早上退房時櫃台有給你什麼補償嗎？ B：有，經理向我道歉，還給了我一張飯店餐廳的免費晚餐【兌換券】，年底前隨時都可以使用。"
  },
  {
    "word": "barcode",
    "pos": "n.",
    "cn_def": "條碼",
    "en_def": "a pattern of black lines on a product or ticket that a machine can read",
    "sentence": "A: I printed my concert ticket at the office this morning, but the printer was running out of ink, so will the staff at the entrance still accept it? B: It should be fine as long as the {{BLANK}} at the bottom is clear, because the machine only needs to read those black lines to let you in.",
    "cn": "A：我今天早上在辦公室印了演唱會門票，但印表機快沒墨水了，入口的工作人員還會接受嗎？ B：只要底部的【條碼】清楚應該就沒問題，因為機器只需要讀取那些黑色線條就能讓你進場。"
  },
  {
    "word": "qr code",
    "pos": "n.phr.",
    "cn_def": "QR碼；二維條碼",
    "en_def": "a square pattern that a phone camera can read to open information",
    "sentence": "A: The museum doesn't sell paper tickets anymore, so how am I supposed to show my ticket when I take our visitors there on Friday? B: After you pay online, you'll receive a {{BLANK}} on your phone, and the staff at the entrance will simply scan it with a small machine before you walk in.",
    "cn": "A：博物館已經不賣紙本門票了，我星期五帶訪客去的時候要怎麼出示門票？ B：你在網路上付款後，手機會收到一個【QR碼】，入口的工作人員只要在你進去前用小機器掃描一下就可以了。"
  },
  {
    "word": "valid",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "able to be used officially; not out of date",
    "sentence": "A: I found an old train ticket in my desk drawer from the business trip I canceled in March, so can I still use it for my trip next week? B: Unfortunately, most rail tickets are only {{BLANK}} for three months after you buy them, so you'll probably need to buy a new one at the station.",
    "cn": "A：我在辦公桌抽屜裡找到一張三月取消出差時留下的舊火車票，下週出差還能用嗎？ B：很遺憾，大多數火車票在購買後只有三個月內【有效】，所以你可能需要在車站買一張新的。"
  },
  {
    "word": "expire",
    "pos": "v.",
    "cn_def": "到期；失效",
    "en_def": "to reach the end of the time when it can be used",
    "sentence": "A: My manager gave me two free cinema tickets as a reward for finishing the project early, but I've been too busy to use them, so is that a problem? B: You should check the date printed on the back, because those tickets usually {{BLANK}} after sixty days, and the cinema won't accept them after that.",
    "cn": "A：經理因為我提早完成專案送了我兩張免費電影票作為獎勵，但我一直太忙沒用，這會有問題嗎？ B：你應該看一下背面印的日期，因為那種票通常六十天後就會【到期】，過了之後電影院就不收了。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be done",
    "sentence": "A: Our team wants to attend the technology fair in Taipei next month, and I heard that early tickets are much cheaper, so when do we need to register? B: The {{BLANK}} for the early-bird price is this Friday at midnight, so please send me everyone's names by Thursday afternoon so I can buy them together.",
    "cn": "A：我們團隊想參加下個月在台北的科技展，我聽說早鳥票便宜很多，我們什麼時候要報名？ B：早鳥價的【截止期限】是這個星期五午夜，所以請在星期四下午前把大家的名字寄給我，我好一起購買。"
  },
  {
    "word": "seat",
    "pos": "n.",
    "cn_def": "座位",
    "en_def": "a place where you can sit, for example on a train or in a theater",
    "sentence": "A: The flight to Hong Kong is almost full, and I'd like to sit near my colleague so that we can review our presentation together, so what should I do? B: Check in online as early as possible and choose a {{BLANK}} next to hers, because the airline opens the online system exactly twenty-four hours before departure.",
    "cn": "A：飛往香港的班機幾乎客滿，我想坐在同事旁邊以便一起檢查簡報，我該怎麼辦？ B：盡早上網辦理報到，選一個她旁邊的【座位】，因為航空公司正好在起飛前二十四小時開放網路系統。"
  },
  {
    "word": "section",
    "pos": "n.",
    "cn_def": "區域；區",
    "en_def": "one of the parts that an area, such as a stadium, is divided into",
    "sentence": "A: We bought tickets for the whole sales team to watch the baseball game on Saturday, but how will everyone find one another inside the huge stadium? B: All our seats are in the same {{BLANK}} behind first base, so tell everyone to look for the big blue sign with the letter C on it.",
    "cn": "A：我們幫整個業務團隊買了星期六棒球賽的票，但在那麼大的球場裡大家要怎麼找到彼此？ B：我們所有的座位都在一壘後方的同一個【區域】，所以告訴大家找那個寫著字母C的藍色大招牌。"
  },
  {
    "word": "row",
    "pos": "n.",
    "cn_def": "（座位的）排",
    "en_def": "a line of seats next to each other",
    "sentence": "A: I'm taking our new client to the theater on Friday night, and he has trouble hearing, so where would be the best place for us to sit? B: I'd recommend the front {{BLANK}} near the center of the stage, because the sound is clearest there, and he'll also be able to see the actors' faces.",
    "cn": "A：我星期五晚上要帶新客戶去看戲，他聽力不太好，我們坐哪裡最好？ B：我建議坐靠近舞台中央的第一【排】，因為那裡的聲音最清楚，他也能看清楚演員的臉。"
  },
  {
    "word": "gate",
    "pos": "n.",
    "cn_def": "登機門",
    "en_def": "the place in an airport where passengers get on a plane",
    "sentence": "A: My flight to Seoul leaves in forty minutes, but the security line is very long, so do you think I'll still make it in time for the meeting? B: You should be fine, but go straight to the {{BLANK}} after security, because boarding usually starts thirty minutes before departure and the doors close ten minutes before.",
    "cn": "A：我飛往首爾的班機四十分鐘後起飛，但安檢隊伍很長，你覺得我還趕得上會議嗎？ B：應該沒問題，但過了安檢後要直接去【登機門】，因為通常起飛前三十分鐘開始登機，十分鐘前就會關門。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "月台",
    "en_def": "the raised area beside the track where people get on and off trains",
    "sentence": "A: I've never taken the express train to the airport before, and I'm meeting an important client at nine, so where exactly should I wait at the station? B: After you pass through the ticket machines, follow the orange signs down to {{BLANK}} three, where the express train leaves every fifteen minutes during the morning.",
    "cn": "A：我從沒搭過往機場的快車，九點又要見重要客戶，我到底該在車站哪裡等？ B：通過驗票閘門後，跟著橘色標示往下走到第三【月台】，早上快車每十五分鐘發一班。"
  },
  {
    "word": "one-way",
    "pos": "adj.",
    "cn_def": "單程的",
    "en_def": "for travel to a place but not back again",
    "sentence": "A: I'm moving to the Singapore branch next month for at least two years, so should I buy a return ticket or just a ticket for the flight there? B: Just buy a {{BLANK}} ticket for now, because you don't know when you'll come back, and the company will pay for your trip home later.",
    "cn": "A：我下個月要調到新加坡分公司至少兩年，我該買來回票還是只買去程的機票？ B：先買【單程】票就好，因為你不知道什麼時候回來，而且公司之後會負擔你回國的旅費。"
  },
  {
    "word": "round-trip",
    "pos": "adj.",
    "cn_def": "來回的",
    "en_def": "for travel to a place and back again",
    "sentence": "A: I need to visit our factory in Tainan on Monday and come back to Taipei the same evening, so what kind of train ticket should I buy? B: Buy a {{BLANK}} ticket on the high-speed rail website, because it's cheaper than buying two separate tickets and you can choose both train times at once.",
    "cn": "A：我星期一要去台南工廠，當天晚上再回台北，我該買哪種火車票？ B：在高鐵網站上買【來回】票，因為它比分開買兩張票便宜，而且可以一次選好兩班車的時間。"
  },
  {
    "word": "electronic",
    "pos": "adj.",
    "cn_def": "電子的",
    "en_def": "using computers or digital devices rather than paper",
    "sentence": "A: Our department wants to stop printing so much paper, so is there a better way to give train tickets to staff who travel for business? B: Yes, the travel agency can send {{BLANK}} tickets straight to everyone's phones, which saves paper and also makes it easier for the accounting team to check the costs.",
    "cn": "A：我們部門想減少大量印紙，有沒有更好的方式把火車票發給出差的員工？ B：有，旅行社可以把【電子】票直接傳到每個人的手機上，既省紙，也讓會計團隊更容易核對費用。"
  },
  {
    "word": "paper",
    "pos": "n.",
    "cn_def": "紙；紙本",
    "en_def": "thin material used for writing or printing; used to describe printed tickets",
    "sentence": "A: The new concert hall says most guests use their phones to enter, but my grandmother doesn't have a smartphone, so how can she get into the show with me? B: She can ask for a {{BLANK}} ticket at the box office, and the staff will print it for her when she shows her ID card before the performance.",
    "cn": "A：新音樂廳說大多數客人都用手機入場，但我奶奶沒有智慧型手機，她要怎麼跟我一起進場看表演？ B：她可以到售票處索取一張【紙本】票，工作人員會在演出前看過她的身分證後幫她印出來。"
  },
  {
    "word": "scanner",
    "pos": "n.",
    "cn_def": "掃描器",
    "en_def": "a machine that reads codes or copies pictures",
    "sentence": "A: Why is the line at the stadium entrance moving so slowly tonight, even though there are four staff members checking tickets? B: The {{BLANK}} at the second entrance stopped working ten minutes ago, so the staff are checking every ticket by hand, which takes much longer than letting a machine read the codes.",
    "cn": "A：為什麼今晚球場入口的隊伍移動得這麼慢，明明有四位工作人員在驗票？ B：第二入口的【掃描器】十分鐘前故障了，所以工作人員只能一張一張用手檢查，比讓機器讀碼慢多了。"
  },
  {
    "word": "counter",
    "pos": "n.",
    "cn_def": "櫃台",
    "en_def": "a long flat surface where customers are served",
    "sentence": "A: I just arrived at the train station, but the ticket machines only accept cash and I only have my company credit card, so what should I do? B: Go to the ticket {{BLANK}} next to the main entrance, where the staff can take credit cards and also print a receipt for your expense report.",
    "cn": "A：我剛到火車站，但售票機只收現金，我身上只有公司信用卡，該怎麼辦？ B：去大門旁邊的售票【櫃台】，那裡的人員可以刷信用卡，也能幫你印收據報帳。"
  },
  {
    "word": "queue",
    "pos": "n.",
    "cn_def": "排隊的隊伍",
    "en_def": "a line of people waiting for something",
    "sentence": "A: The new science exhibition opens on Saturday morning, and our whole team wants to go together, so what time do you think we should get there? B: Try to arrive before nine, because last weekend the {{BLANK}} for tickets was so long that some visitors waited outside in the rain for more than an hour.",
    "cn": "A：新的科學展覽星期六早上開幕，我們整個團隊想一起去，你覺得我們應該幾點到？ B：盡量九點前到，因為上週末買票的【隊伍】長到有些參觀者在雨中排了一個多小時。"
  },
  {
    "word": "fine",
    "pos": "n.",
    "cn_def": "罰款",
    "en_def": "money you must pay as a punishment for breaking a rule",
    "sentence": "A: I was in such a hurry to get to the client meeting that I jumped on the train without buying a ticket, so what happens if the staff check? B: You'll have to pay a {{BLANK}} of about fifty times the normal price, so next time, please buy your ticket first, even if it makes you a few minutes late.",
    "cn": "A：我急著去見客戶，沒買票就跳上火車了，如果站務人員查票會怎樣？ B：你得付大約正常票價五十倍的【罰款】，所以下次就算會晚幾分鐘，也請先買票。"
  },
  {
    "word": "inspect",
    "pos": "v.",
    "cn_def": "檢查；查驗",
    "en_def": "to look at something carefully to check it",
    "sentence": "A: Why did the train stop for so long at the last station before we arrived in the city center this morning? B: Two railway officers came on board to {{BLANK}} everyone's tickets, because the company is trying to stop people from riding without paying, especially during the busy morning hours.",
    "cn": "A：今天早上我們抵達市中心前，為什麼火車在上一站停了那麼久？ B：兩名鐵路站務人員上車【查驗】每個人的車票，因為公司正在設法阻止有人逃票，尤其是在早上尖峰時段。"
  },
  {
    "word": "farewell",
    "pos": "n.",
    "cn_def": "告別；送別",
    "en_def": "the act of saying goodbye, often at a special event",
    "sentence": "A: Our manager is retiring next month after thirty years with the company, so what are we planning to do for her before she leaves? B: We're holding a {{BLANK}} dinner at a hotel downtown, and everyone in the office will receive a ticket by email, so please let me know if you can come.",
    "cn": "A：我們經理在公司服務三十年後下個月要退休，她離開前我們打算為她做些什麼？ B：我們要在市中心的一家飯店舉辦【送別】晚宴，辦公室每個人都會收到電子郵件寄送的入場券，所以請告訴我你能不能來。"
  },
  {
    "word": "complimentary",
    "pos": "adj.",
    "cn_def": "免費贈送的",
    "en_def": "given free of charge",
    "sentence": "A: Our company is sponsoring the city's jazz festival this year, so do we get anything special for supporting the event with such a large amount of money? B: Yes, the organizers are giving us twenty {{BLANK}} tickets for the opening night, so we can invite our best clients without paying anything extra.",
    "cn": "A：我們公司今年贊助市立爵士音樂節，出了這麼一大筆錢支持這個活動，我們有什麼特別的回饋嗎？ B：有，主辦單位會送我們二十張開幕夜的【免費招待】票，所以我們可以邀請最好的客戶而不用多付任何錢。"
  },
  {
    "word": "sold out",
    "pos": "adj.phr.",
    "cn_def": "售罄的；賣完的",
    "en_def": "with all the tickets or items already sold",
    "sentence": "A: Were you able to get tickets for the famous musical so that we can take our visitors from Germany to see it next Saturday night after the factory tour? B: Sadly, the show is completely {{BLANK}} for the next three weeks, but the theater suggested checking its website every morning in case someone returns a ticket.",
    "cn": "A：你買到那齣知名音樂劇的票了嗎？我們想在參觀工廠後，下週六晚上帶德國訪客去看。 B：很可惜，接下來三週的演出全部【售罄】，不過劇院建議每天早上查看網站，以防有人退票。"
  },
  {
    "word": "availability",
    "pos": "n.",
    "cn_def": "可用性；（座位等的）空位情況",
    "en_def": "whether something can be bought, used, or reached",
    "sentence": "A: We need to send six engineers to the Hsinchu plant on Monday morning for an urgent repair, so can you book train tickets for all of them today? B: I'll check the {{BLANK}} of seats on the early trains first, because many commuters travel at that time, and we may need to split the group across two trains.",
    "cn": "A：我們星期一早上需要派六位工程師去新竹廠緊急維修，你今天能幫他們全部訂好火車票嗎？ B：我先查一下早班車座位的【空位情況】，因為很多通勤族在那個時段搭車，我們可能得把人分成兩班車。"
  }
];

const MCQS = [
  {
    "q": "Taxi drivers in the city raised their prices last month. The minimum _____ is now eighty-five dollars for the first kilometer.",
    "options": [
      "refund",
      "voucher",
      "fare",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "This week, _____ to the art gallery is free for visitors who arrive before ten. The offer ends on Sunday evening.",
    "options": [
      "admission",
      "platform",
      "deadline",
      "counter"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Employees who ride the bus to work can apply for a monthly _____. The company pays half of the cost every month.",
    "options": [
      "seat",
      "gate",
      "queue",
      "pass"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Please attach the original _____ to your expense form. The finance team cannot pay you back for tickets without proof of payment.",
    "options": [
      "platform",
      "receipt",
      "queue",
      "gate"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The restaurant near the convention center is very popular. Please make a _____ at least three days before your client dinner.",
    "options": [
      "refund",
      "platform",
      "barcode",
      "reservation"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The hotel has held your room until tonight, so please click the link to _____ your booking. Unconfirmed reservations are released at midnight.",
    "options": [
      "confirm",
      "expire",
      "inspect",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Because of the strong typhoon, the airline had to _____ all flights to Okinawa. Passengers can rebook for free on its website.",
    "options": [
      "confirm",
      "inspect",
      "cancel",
      "upgrade"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The concert was called off because the singer was sick. Ticket holders will receive a full _____ within seven working days.",
    "options": [
      "fare",
      "refund",
      "seat",
      "queue"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "If you cannot attend on Friday, you may _____ your ticket for another date. There is no extra charge if you do it early.",
    "options": [
      "exchange",
      "inspect",
      "expire",
      "confirm"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The airline gave me a free _____ to business class because economy was overbooked. I enjoyed a comfortable seat and better meals.",
    "options": [
      "fine",
      "receipt",
      "upgrade",
      "queue"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Students who show a valid ID card receive a twenty percent _____ on museum tickets. The offer does not apply to special exhibitions.",
    "options": [
      "fine",
      "discount",
      "gate",
      "platform"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The airline apologized for the six-hour delay. Each passenger received a meal _____ worth three hundred dollars to use at the airport.",
    "options": [
      "gate",
      "platform",
      "queue",
      "voucher"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The machine at the entrance could not read my ticket. The _____ was damaged when the paper got wet in the rain.",
    "options": [
      "fare",
      "barcode",
      "refund",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Visitors no longer need paper tickets at the zoo. They simply show the _____ on their phones to the staff at the entrance.",
    "options": [
      "fine",
      "refund",
      "deadline",
      "qr code"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Your train ticket is only _____ on the date printed on it. You cannot use it for a later trip without paying extra.",
    "options": [
      "valid",
      "complimentary",
      "electronic",
      "one-way"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Remember that these gift vouchers _____ at the end of December. After that date, the store will not accept them as payment.",
    "options": [
      "confirm",
      "inspect",
      "expire",
      "cancel"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The _____ for buying early-bird tickets is this Friday. After that, the price for each ticket will rise by thirty percent.",
    "options": [
      "platform",
      "gate",
      "voucher",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "I asked the airline for a window _____ on the long flight. I wanted to look at the mountains while we flew over them.",
    "options": [
      "queue",
      "seat",
      "fare",
      "refund"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Passengers flying to Bangkok should go to _____ 14 immediately. Boarding will close in ten minutes, and late passengers cannot get on.",
    "options": [
      "gate",
      "fare",
      "voucher",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The express train to the airport will leave from _____ 3 today. Passengers should take the escalator down and wait behind the yellow line.",
    "options": [
      "receipt",
      "voucher",
      "platform",
      "discount"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Our new manager is moving to Tokyo permanently. She only needs a _____ ticket because she is not planning to return.",
    "options": [
      "one-way",
      "round-trip",
      "electronic",
      "complimentary"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "I will fly to Seoul on Monday and return on Wednesday night. A _____ ticket is cheaper than buying two separate tickets.",
    "options": [
      "one-way",
      "valid",
      "electronic",
      "round-trip"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "If the ticket machine is out of order, please go to the service _____ on the first floor. The staff accept cash and cards.",
    "options": [
      "fare",
      "counter",
      "refund",
      "barcode"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Hundreds of fans waited in a long _____ outside the stadium all night. They wanted to buy tickets for the final game.",
    "options": [
      "counter",
      "gate",
      "queue",
      "seat"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Passengers who ride the subway without a ticket must pay a _____ of one thousand dollars. Officers check tickets on trains every day.",
    "options": [
      "refund",
      "fine",
      "discount",
      "voucher"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Security staff will _____ every bag at the entrance before the concert begins. Please arrive early to avoid waiting a long time.",
    "options": [
      "expire",
      "cancel",
      "exchange",
      "inspect"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The hotel offers a _____ breakfast to all guests staying more than two nights. Guests do not need to pay anything for it.",
    "options": [
      "one-way",
      "round-trip",
      "complimentary",
      "valid"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Tickets for the popular singer's concert were _____ within ten minutes. Many fans were disappointed because they could not buy any.",
    "options": [
      "sold out",
      "valid",
      "complimentary",
      "electronic"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Please check the seat _____ on our website before you call. The page shows which flights still have empty seats.",
    "options": [
      "deadline",
      "receipt",
      "voucher",
      "availability"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Travelers can now receive _____ tickets by email instead of printed ones. This change helps the airline save a lot of paper each year.",
    "options": [
      "one-way",
      "electronic",
      "round-trip",
      "valid"
    ],
    "answer": 1,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel on a bus, train, plane, or taxi",
    "cn_def": "車資；票價"
  },
  "admission": {
    "pos": "n.",
    "en_def": "the money or permission needed to enter a place or event",
    "cn_def": "入場費；入場許可"
  },
  "pass": {
    "pos": "n.",
    "en_def": "a ticket or card that lets you enter a place or travel many times",
    "cn_def": "通行證；（可多次使用的）票卡"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you have paid for something",
    "cn_def": "收據"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a seat, room, or table for you",
    "cn_def": "預訂；預約"
  },
  "booking": {
    "pos": "n.",
    "en_def": "the act of arranging a ticket, seat, or room in advance",
    "cn_def": "預訂"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or show that something is true or will happen",
    "cn_def": "確認"
  },
  "cancel": {
    "pos": "v.",
    "en_def": "to say that something you arranged will not happen",
    "cn_def": "取消"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money that is given back to you",
    "cn_def": "退款"
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give something back and receive something else instead",
    "cn_def": "更換；交換"
  },
  "upgrade": {
    "pos": "n.",
    "en_def": "a change to a better seat, room, or service",
    "cn_def": "升等"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "voucher": {
    "pos": "n.",
    "en_def": "a printed paper or code that you can use instead of money",
    "cn_def": "兌換券；禮券"
  },
  "barcode": {
    "pos": "n.",
    "en_def": "a pattern of black lines on a product or ticket that a machine can read",
    "cn_def": "條碼"
  },
  "qr code": {
    "pos": "n.phr.",
    "en_def": "a square pattern that a phone camera can read to open information",
    "cn_def": "QR碼；二維條碼"
  },
  "valid": {
    "pos": "adj.",
    "en_def": "able to be used officially; not out of date",
    "cn_def": "有效的"
  },
  "expire": {
    "pos": "v.",
    "en_def": "to reach the end of the time when it can be used",
    "cn_def": "到期；失效"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be done",
    "cn_def": "截止期限"
  },
  "seat": {
    "pos": "n.",
    "en_def": "a place where you can sit, for example on a train or in a theater",
    "cn_def": "座位"
  },
  "section": {
    "pos": "n.",
    "en_def": "one of the parts that an area, such as a stadium, is divided into",
    "cn_def": "區域；區"
  },
  "row": {
    "pos": "n.",
    "en_def": "a line of seats next to each other",
    "cn_def": "（座位的）排"
  },
  "gate": {
    "pos": "n.",
    "en_def": "the place in an airport where passengers get on a plane",
    "cn_def": "登機門"
  },
  "platform": {
    "pos": "n.",
    "en_def": "the raised area beside the track where people get on and off trains",
    "cn_def": "月台"
  },
  "one-way": {
    "pos": "adj.",
    "en_def": "for travel to a place but not back again",
    "cn_def": "單程的"
  },
  "round-trip": {
    "pos": "adj.",
    "en_def": "for travel to a place and back again",
    "cn_def": "來回的"
  },
  "electronic": {
    "pos": "adj.",
    "en_def": "using computers or digital devices rather than paper",
    "cn_def": "電子的"
  },
  "paper": {
    "pos": "n.",
    "en_def": "thin material used for writing or printing; used to describe printed tickets",
    "cn_def": "紙；紙本"
  },
  "scanner": {
    "pos": "n.",
    "en_def": "a machine that reads codes or copies pictures",
    "cn_def": "掃描器"
  },
  "counter": {
    "pos": "n.",
    "en_def": "a long flat surface where customers are served",
    "cn_def": "櫃台"
  },
  "queue": {
    "pos": "n.",
    "en_def": "a line of people waiting for something",
    "cn_def": "排隊的隊伍"
  },
  "fine": {
    "pos": "n.",
    "en_def": "money you must pay as a punishment for breaking a rule",
    "cn_def": "罰款"
  },
  "inspect": {
    "pos": "v.",
    "en_def": "to look at something carefully to check it",
    "cn_def": "檢查；查驗"
  },
  "farewell": {
    "pos": "n.",
    "en_def": "the act of saying goodbye, often at a special event",
    "cn_def": "告別；送別"
  },
  "complimentary": {
    "pos": "adj.",
    "en_def": "given free of charge",
    "cn_def": "免費贈送的"
  },
  "sold out": {
    "pos": "adj.phr.",
    "en_def": "with all the tickets or items already sold",
    "cn_def": "售罄的；賣完的"
  },
  "availability": {
    "pos": "n.",
    "en_def": "whether something can be bought, used, or reached",
    "cn_def": "可用性；（座位等的）空位情況"
  }
};

const EXTRA_GLOSSES = {};
