// Topic 43 Quiz Data: Cancellation 取消
// Source word list: https://www.examword.com/group-topic/cancellation — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T43 - Cancellation 取消",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cancel",
    "pos": "v.",
    "cn_def": "取消",
    "en_def": "to decide that a planned event or booking will not happen",
    "sentence": "A: The airline just sent a message saying that heavy snow is expected in Chicago tomorrow morning, so what should we do about our sales trip? B: I think we should {{BLANK}} the flights today and book a video call with the clients instead, because the roads will probably be dangerous anyway.",
    "cn": "A：航空公司剛傳訊息說明天早上芝加哥預計會下大雪，那我們的業務出差該怎麼辦？ B：我覺得我們今天就應該【取消】航班，改和客戶約視訊會議，因為路況可能也會很危險。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延後；延期",
    "en_def": "to move an event to a later time",
    "sentence": "A: Half of the marketing team is still sick with the flu this week, so are we going to hold the product launch meeting on Thursday as planned? B: No, the manager decided to {{BLANK}} it until next Monday, when everyone should be back in the office and ready to share their ideas.",
    "cn": "A：行銷團隊有一半的人這週還在感冒生病，我們還要照原計畫在星期四開產品發表會議嗎？ B：不，經理決定把它【延後】到下週一，到時候大家應該都回到辦公室，準備好分享想法了。"
  },
  {
    "word": "delay",
    "pos": "v.",
    "cn_def": "延誤；耽擱",
    "en_def": "to make something happen later than planned",
    "sentence": "A: The new office furniture was supposed to arrive this morning, but the warehouse is still empty, so did the supplier explain what happened? B: Yes, they said a problem at the port will {{BLANK}} the shipment by about three days, so we will have to use the old desks until Friday.",
    "cn": "A：新的辦公家具原本應該今天早上送到，但倉庫還是空的，供應商有解釋發生什麼事嗎？ B：有，他們說港口的問題會使貨運【延誤】大約三天，所以我們得用舊桌子用到星期五。"
  },
  {
    "word": "reschedule",
    "pos": "v.",
    "cn_def": "重新安排時間",
    "en_def": "to change the time or date of a planned event",
    "sentence": "A: I just realized that my dentist appointment on Wednesday afternoon is at the same time as the budget review with the finance department, so what should I do? B: Just call the clinic and ask them to {{BLANK}} it for another day, because the budget review is much more important for your project.",
    "cn": "A：我剛發現我星期三下午的牙醫預約和財務部的預算審查撞期了，我該怎麼辦？ B：打電話給診所，請他們把預約【重新安排】到別天就好，因為預算審查對你的專案重要得多。"
  },
  {
    "word": "call off",
    "pos": "v.phr.",
    "cn_def": "取消（活動等）",
    "en_def": "to decide that a planned event will not take place",
    "sentence": "A: The weather report says a strong typhoon will hit the coast on Saturday, so is the company still having its annual beach picnic for employees and their families? B: Unfortunately, the organizers had to {{BLANK}} the whole event this afternoon, but they promised to choose a new date in November when the weather is better.",
    "cn": "A：氣象報告說週六會有強颱登陸沿海，公司還要為員工和家屬舉辦年度海灘野餐嗎？ B：很遺憾，主辦人今天下午不得不【取消】整個活動，但他們承諾會在天氣比較好的十一月另選日期。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "退出；撤回",
    "en_def": "to stop taking part in something; to take back an offer",
    "sentence": "A: I heard that one of the biggest companies in the city was planning to join our trade fair next month, so is that still true? B: Sadly, they decided to {{BLANK}} from the fair yesterday because their new products will not be ready in time, so we now have an empty booth near the entrance.",
    "cn": "A：我聽說市內一家大公司下個月打算參加我們的商展，現在還是這樣嗎？ B：很可惜，他們昨天決定【退出】商展，因為他們的新產品來不及準備好，所以入口附近現在空出一個攤位。"
  },
  {
    "word": "termination",
    "pos": "n.",
    "cn_def": "終止；結束",
    "en_def": "the act of ending something, such as a contract or a job",
    "sentence": "A: Our cleaning company has been missing several visits every month, and the office looks terrible, so can we simply stop working with them? B: Yes, but the contract says we must send a written letter of {{BLANK}} at least thirty days in advance, so I will prepare it and ask the director to sign it today.",
    "cn": "A：我們的清潔公司每個月都缺好幾次，辦公室看起來很糟，我們可以直接不跟他們合作嗎？ B：可以，但合約規定我們必須至少提前三十天寄出書面的【終止】合作通知信，所以我會準備好，今天請主任簽名。"
  },
  {
    "word": "suspension",
    "pos": "n.",
    "cn_def": "暫停；中止",
    "en_def": "a short stop of a service or activity",
    "sentence": "A: Why are so many passengers standing outside the train station looking at their phones and trying to find taxis this morning? B: There was a power failure on the main line, so the railway company announced a {{BLANK}} of all services until noon, and many people are worried about being late for work.",
    "cn": "A：為什麼今天早上這麼多乘客站在火車站外面看手機、想找計程車？ B：主線發生停電，所以鐵路公司宣布所有班次【暫停】到中午，很多人擔心上班會遲到。"
  },
  {
    "word": "abandon",
    "pos": "v.",
    "cn_def": "放棄；中止",
    "en_def": "to stop doing a plan or activity before it is finished",
    "sentence": "A: The research team spent almost two years developing that new smartphone app, so why did it never appear in the online store? B: After testing it with customers, the company found that very few people wanted it, so they decided to {{BLANK}} the project and spend the money on improving their popular products.",
    "cn": "A：研發團隊花了將近兩年開發那個新手機應用程式，為什麼它從來沒有出現在線上商店？ B：用客戶測試後，公司發現很少人想要它，所以他們決定【放棄】這個專案，把錢花在改進熱賣商品上。"
  },
  {
    "word": "revocation",
    "pos": "n.",
    "cn_def": "撤銷；吊銷",
    "en_def": "the official act of taking away a right or permit",
    "sentence": "A: I read in the newspaper that the restaurant near our office has suddenly closed, even though it was always busy at lunchtime, so what happened? B: Health inspectors found serious problems in the kitchen, which led to the {{BLANK}} of its business license, and the owner cannot reopen until everything is fixed.",
    "cn": "A：我在報紙上看到我們辦公室附近那家餐廳突然關門了，雖然它午餐時間總是客滿，發生什麼事了？ B：衛生稽查員在廚房發現嚴重問題，導致它的營業執照被【撤銷】，老闆在一切改善之前都不能重新開業。"
  },
  {
    "word": "annul",
    "pos": "v.",
    "cn_def": "宣告無效；廢除",
    "en_def": "to officially say that an agreement or marriage is not legal",
    "sentence": "A: The two companies signed an agreement last spring, but now they are arguing about it in court, so what does the smaller company want? B: Its lawyers are asking the judge to {{BLANK}} the agreement completely, because they believe the other side gave them false information about the sales numbers before they signed it.",
    "cn": "A：這兩家公司去年春天簽了協議，但現在他們在法庭上爭執，比較小的那家公司想要什麼？ B：它的律師要求法官將這份協議完全【宣告無效】，因為他們認為對方在簽約前提供了不實的銷售數據。"
  },
  {
    "word": "void",
    "pos": "adj.",
    "cn_def": "無效的",
    "en_def": "not legal or not valid any more",
    "sentence": "A: I bought a ticket for the concert from a stranger on the internet, but the staff at the gate would not let me enter last night, so why not? B: They said the ticket was {{BLANK}} because it had already been reported as stolen, so you should contact your bank and ask for help getting your money back.",
    "cn": "A：我在網路上跟陌生人買了一張演唱會門票，但昨晚門口的工作人員不讓我進去，為什麼？ B：他們說那張票是【無效的】，因為已經被通報為失竊票，所以你應該聯絡銀行，請他們幫忙把錢拿回來。"
  },
  {
    "word": "nullify",
    "pos": "v.",
    "cn_def": "使無效；抵銷",
    "en_def": "to make something have no effect or value",
    "sentence": "A: Our team worked very hard to reduce costs in the factory this year, so why are our total profits still lower than last year? B: The sharp rise in fuel prices this summer managed to {{BLANK}} most of our savings, so the management is now looking for cheaper energy suppliers for next year.",
    "cn": "A：我們團隊今年很努力降低工廠成本，為什麼總利潤還是比去年低？ B：今年夏天燃料價格急遽上漲，【抵銷】了我們大部分節省下來的錢，所以管理層正在為明年尋找比較便宜的能源供應商。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money that is paid back to a customer",
    "sentence": "A: The printer I ordered online for the office arrived with a broken screen, and it will not even turn on, so what should I do? B: Take some photos of the damage and send them to the store's customer service team, and they should give you a full {{BLANK}} within a week or send a new printer.",
    "cn": "A：我在網路上幫辦公室訂的印表機送來時螢幕是壞的，甚至開不了機，我該怎麼辦？ B：拍幾張損壞的照片寄給那家店的客服團隊，他們應該會在一週內給你全額【退款】或寄一台新的印表機。"
  },
  {
    "word": "charge",
    "pos": "n.",
    "cn_def": "費用；收費",
    "en_def": "the amount of money you must pay for something",
    "sentence": "A: I want to change my hotel booking from Friday to Saturday because my meeting in Tokyo was moved, so is that going to be a problem? B: The hotel allows changes, but there is an extra {{BLANK}} of twenty dollars if you do it less than forty-eight hours before arrival, so you should call them right away.",
    "cn": "A：我的東京會議改期了，我想把飯店訂房從星期五改到星期六，會有問題嗎？ B：飯店允許更改，但如果在抵達前四十八小時內更改，要額外收二十美元的【費用】，所以你應該馬上打電話給他們。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；規定",
    "en_def": "a set of rules that a company or group follows",
    "sentence": "A: A customer bought a jacket from our shop three months ago, and today she brought it back without a receipt, asking for her money, so can I accept it? B: I am sorry, but our store {{BLANK}} only allows returns within thirty days with a receipt, so please explain that politely and offer her a discount on something new.",
    "cn": "A：有位顧客三個月前在我們店裡買了一件外套，今天她沒帶收據拿回來要求退錢，我可以接受嗎？ B：很抱歉，我們店的【政策】只允許三十天內持收據退貨，所以請禮貌地向她解釋，並提供她購買新商品的折扣。"
  },
  {
    "word": "notice",
    "pos": "n.",
    "cn_def": "通知；預先通知",
    "en_def": "information or a warning given before something happens",
    "sentence": "A: The landlord told us yesterday that we have to move out of this office because he plans to sell the whole building, so how much time do we have? B: According to our rental agreement, he must give us at least two months' {{BLANK}}, so we have enough time to find a new place near the station.",
    "cn": "A：房東昨天告訴我們必須搬離這間辦公室，因為他打算賣掉整棟大樓，我們還有多少時間？ B：根據我們的租約，他必須至少提前兩個月【通知】我們，所以我們有足夠時間在車站附近找新地方。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be done",
    "sentence": "A: If our guests want to stay at the conference hotel but change their plans later, when do they need to tell the hotel so they do not lose money? B: The {{BLANK}} for free changes is next Friday at five o'clock, so please remind everyone in your department to check their travel plans before then.",
    "cn": "A：如果我們的客人想住會議飯店但之後改變計畫，他們需要什麼時候告訴飯店才不會損失金錢？ B：免費更改的【截止期限】是下週五五點，所以請提醒你部門的每個人在那之前確認行程。"
  },
  {
    "word": "penalty",
    "pos": "n.",
    "cn_def": "罰金；違約金",
    "en_def": "money you must pay for breaking a rule or agreement",
    "sentence": "A: I need to end my phone contract six months early because the company is giving me a new work phone with free service, so is that expensive? B: Yes, the phone company asks for a {{BLANK}} of about one hundred dollars for leaving early, but the free work phone will save you more than that by the end of the year.",
    "cn": "A：公司要給我一支免費通話的新公務手機，所以我得提前六個月終止手機合約，這樣會很貴嗎？ B：會，電信公司對提前解約會收大約一百美元的【違約金】，但到年底時，這支免費的公務手機幫你省下的錢會更多。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用",
    "en_def": "money paid for a service or to join something",
    "sentence": "A: Our department wants to join the international business conference in Singapore next spring, but we have not decided yet, so when should we register? B: If we sign up before the end of this month, the registration {{BLANK}} is only two hundred dollars per person, but it will double in January, so we should decide soon.",
    "cn": "A：我們部門想參加明年春天在新加坡舉辦的國際商務會議，但還沒決定，應該什麼時候報名？ B：如果在這個月底前報名，每人報名【費】只要兩百美元，但一月起會翻倍，所以我們應該盡快決定。"
  },
  {
    "word": "unexpected",
    "pos": "adj.",
    "cn_def": "意料之外的；意外的",
    "en_def": "not expected; surprising",
    "sentence": "A: The sales report looked great on Monday, so why did the manager call an emergency meeting this morning and look so worried? B: There was a completely {{BLANK}} problem with our biggest customer, who suddenly said they could not pay their bill this month, and nobody in the company had seen it coming.",
    "cn": "A：星期一的銷售報告看起來很好，為什麼經理今天早上召開緊急會議，而且看起來那麼擔心？ B：我們最大的客戶出了一個完全【意料之外的】問題，他們突然說這個月付不出帳款，公司裡沒有人預料到。"
  },
  {
    "word": "sudden",
    "pos": "adj.",
    "cn_def": "突然的",
    "en_def": "happening very quickly and without warning",
    "sentence": "A: Why did the outdoor concert in the city park end so early last night, when the band had only played three songs? B: A {{BLANK}} storm with strong wind and heavy rain arrived without any warning, so the organizers stopped the show and asked everyone to go to the nearby shopping mall for safety.",
    "cn": "A：昨晚市立公園的戶外音樂會為什麼那麼早就結束了，樂團才唱了三首歌？ B：一場夾帶強風豪雨的【突如其來的】暴風雨毫無預警地來襲，所以主辦單位停止演出，請大家到附近的購物中心避難。"
  },
  {
    "word": "official",
    "pos": "adj.",
    "cn_def": "正式的；官方的",
    "en_def": "approved by or coming from a government or organization",
    "sentence": "A: Everyone is saying that the summer music festival will not happen this year because of the new road construction, so is it really true? B: I have heard the same thing from friends, but we should wait for the {{BLANK}} announcement from the city government before we cancel our hotel rooms and train tickets.",
    "cn": "A：大家都在說今年的夏季音樂節因為新的道路工程不會舉辦，這是真的嗎？ B：我也從朋友那裡聽說了，但我們應該等市政府的【正式】公告，再取消飯店房間和火車票。"
  },
  {
    "word": "notify",
    "pos": "v.",
    "cn_def": "通知",
    "en_def": "to tell someone officially about something",
    "sentence": "A: The water company plans to repair the pipes in our building next Tuesday, and there will be no water from nine to three, so what should we do? B: Please send an email to {{BLANK}} all the staff today, so they can bring bottled water and plan their lunch breaks outside the office.",
    "cn": "A：自來水公司下週二要修理我們大樓的水管，九點到三點會停水，我們該怎麼做？ B：請今天寄電子郵件【通知】全體員工，這樣他們可以帶瓶裝水，並計畫到辦公室外面吃午餐。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say or show that a plan or booking is definite",
    "sentence": "A: I booked a table for twelve people at the Italian restaurant for our team dinner on Friday night, so is there anything else I need to do? B: Yes, the restaurant asked us to call on Thursday to {{BLANK}} the reservation, or they may give the table to other customers because Friday nights are very busy.",
    "cn": "A：我在義大利餐廳為週五晚上的團隊晚餐訂了十二人的位子，還有什麼需要做的嗎？ B：有，餐廳要求我們星期四打電話【確認】訂位，否則他們可能會把桌子給其他客人，因為週五晚上很忙。"
  },
  {
    "word": "disruption",
    "pos": "n.",
    "cn_def": "中斷；干擾",
    "en_def": "a problem that stops something from working normally",
    "sentence": "A: The city is going to repair the main bridge downtown for the next three weeks, so how will that affect our delivery drivers? B: There will be some {{BLANK}} to traffic during rush hour, so the drivers should leave earlier in the morning and take the highway to reach our customers on time.",
    "cn": "A：市政府接下來三週要修理市中心的主要橋梁，這會對我們的送貨司機有什麼影響？ B：尖峰時段交通會受到一些【干擾】，所以司機早上應該早點出發，走高速公路才能準時送達客戶。"
  },
  {
    "word": "alternative",
    "pos": "n.",
    "cn_def": "替代方案；其他選擇",
    "en_def": "another choice you can use instead",
    "sentence": "A: Our flight to Hong Kong was cancelled because of the typhoon, and the airline says the next available seats are on Thursday, so what can we do? B: One good {{BLANK}} is to take the high-speed train to another city and fly from there tomorrow, which means we can still attend the meeting.",
    "cn": "A：我們飛往香港的班機因颱風取消了，航空公司說下一個有位子的是星期四，我們能怎麼辦？ B：一個不錯的【替代方案】是搭高鐵到另一個城市，明天從那裡起飛，這樣我們還是能參加會議。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "賠償；補償",
    "en_def": "money paid to someone because of a loss or problem",
    "sentence": "A: The airline kept us waiting at the gate for more than seven hours without any food, and we missed an important business dinner, so can we ask for something? B: Yes, under the new travel rules you can apply for {{BLANK}} on their website, and they may pay you up to three hundred dollars for the long wait.",
    "cn": "A：航空公司讓我們在登機門等了七個多小時，而且沒有提供任何食物，我們也錯過了重要的商務晚餐，我們可以要求什麼嗎？ B：可以，根據新的旅遊規定，你可以在他們的網站上申請【賠償】，他們可能會因為長時間等候付你最多三百美元。"
  },
  {
    "word": "reinstate",
    "pos": "v.",
    "cn_def": "恢復；使復職",
    "en_def": "to bring back a service, rule or person to an earlier position",
    "sentence": "A: Many customers complained after the bus company stopped the late-night service from the airport last year, so has anything changed since then? B: Yes, the company has agreed to {{BLANK}} the service starting next month, so travelers arriving on evening flights will be able to get home cheaply again.",
    "cn": "A：去年公車公司停駛機場深夜班次後，很多乘客抱怨，從那之後有任何改變嗎？ B：有，公司已同意從下個月起【恢復】這項服務，所以搭晚班飛機抵達的旅客又能便宜地回家了。"
  }
];

const MCQS = [
  {
    "q": "Because of the heavy snow, the airline had to _____ all morning flights to Denver. Passengers were offered seats on later flights.",
    "options": [
      "notify",
      "cancel",
      "confirm",
      "reinstate"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The board decided to _____ the annual meeting until October. Several directors are traveling overseas in September and cannot attend.",
    "options": [
      "annul",
      "notify",
      "postpone",
      "nullify"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Bad weather may _____ the delivery of the new computers by several days. We will tell you the new arrival date soon.",
    "options": [
      "delay",
      "annul",
      "abandon",
      "confirm"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Ms. Lin is sick today, so she asked her assistant to _____ all of her appointments for another week. Her clients have been informed.",
    "options": [
      "nullify",
      "annul",
      "withdraw",
      "reschedule"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The union agreed to _____ the strike after the company offered better pay. Workers will return to the factory on Monday.",
    "options": [
      "call off",
      "notify",
      "confirm",
      "nullify"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Due to rising costs, the company decided to _____ from the competition to buy the hotel chain. The news surprised many investors.",
    "options": [
      "cancel",
      "confirm",
      "notify",
      "withdraw"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ of his contract came as a shock to the sales manager. He had worked at the firm for twelve years.",
    "options": [
      "refund",
      "termination",
      "fee",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "After the safety test failed, the city ordered a two-week _____ of the cable car service. Engineers will inspect every part.",
    "options": [
      "refund",
      "policy",
      "suspension",
      "compensation"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The hikers had to _____ their plan to reach the top because of the thick fog. They returned to the hotel before dark.",
    "options": [
      "notify",
      "confirm",
      "reinstate",
      "abandon"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The bank's failure to follow safety rules led to the _____ of its operating license. Customers were told to move their money.",
    "options": [
      "alternative",
      "revocation",
      "deadline",
      "refund"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The court agreed to _____ the sale of the land because the seller had lied. The buyer will get all of his money back.",
    "options": [
      "annul",
      "notify",
      "reschedule",
      "confirm"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "This coupon is _____ if it is copied or sold. Please bring the original to the store before the end of the month.",
    "options": [
      "sudden",
      "unexpected",
      "void",
      "official"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The new tax will _____ most of the savings we made by moving to a cheaper office. Our accountant is looking for other solutions.",
    "options": [
      "nullify",
      "confirm",
      "notify",
      "reschedule"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The concert was cancelled, so all ticket holders will receive a full _____. The money will return to their credit cards within ten days.",
    "options": [
      "deadline",
      "notice",
      "refund",
      "penalty"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Delivery is free for orders over fifty dollars. For smaller orders, there is a small _____ of five dollars for shipping.",
    "options": [
      "deadline",
      "charge",
      "notice",
      "disruption"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "According to the company's travel _____, employees must book economy class for flights under five hours. Managers may approve exceptions.",
    "options": [
      "penalty",
      "refund",
      "disruption",
      "policy"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The workers were told about the factory closing with only one week's _____. Many of them were angry and worried about their jobs.",
    "options": [
      "refund",
      "fee",
      "notice",
      "policy"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The _____ for submitting this year's sales reports is Friday at noon. Late reports will not be included in the review.",
    "options": [
      "refund",
      "compensation",
      "suspension",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Customers who return the rental car late must pay a _____ of thirty dollars per hour. Please check the return time carefully.",
    "options": [
      "penalty",
      "notice",
      "alternative",
      "policy"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The gym charges a monthly _____ of forty dollars. Members can use the pool and the sauna at no extra cost.",
    "options": [
      "notice",
      "fee",
      "deadline",
      "disruption"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The results of the customer survey were completely _____. Nobody on the research team had predicted that people would prefer the older design.",
    "options": [
      "unexpected",
      "void",
      "official",
      "sudden"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "All of a _____, the lights went out in the middle of the presentation. The speaker calmly continued by using a flashlight.",
    "options": [
      "official",
      "void",
      "sudden",
      "unexpected"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The company will make an _____ announcement about the merger on Monday. Until then, staff should not discuss it with reporters.",
    "options": [
      "void",
      "sudden",
      "unexpected",
      "official"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Please _____ the front desk at least one day in advance if you need a late checkout. Extra charges may apply.",
    "options": [
      "reinstate",
      "notify",
      "annul",
      "nullify"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Could you please _____ your attendance by replying to this email? We need the final number of guests by Wednesday.",
    "options": [
      "annul",
      "abandon",
      "confirm",
      "nullify"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The power failure caused major _____ to train services this morning. Thousands of commuters arrived late for work.",
    "options": [
      "refund",
      "disruption",
      "policy",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "If the main road is closed, drivers can take the coastal highway as an _____. It is longer but usually less crowded.",
    "options": [
      "alternative",
      "penalty",
      "refund",
      "termination"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Workers injured on the job are entitled to _____ for lost wages. The company's insurance covers the full amount.",
    "options": [
      "notice",
      "deadline",
      "suspension",
      "compensation"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "After the investigation proved he did nothing wrong, the company agreed to _____ the manager in his former position. He returns next week.",
    "options": [
      "notify",
      "annul",
      "reinstate",
      "postpone"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "If you _____ your hotel booking less than one day before arrival, you will be charged for one night. Please plan carefully.",
    "options": [
      "notify",
      "cancel",
      "nullify",
      "reinstate"
    ],
    "answer": 1,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "cancel": {
    "pos": "v.",
    "en_def": "to decide that a planned event or booking will not happen",
    "cn_def": "取消"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延後；延期"
  },
  "delay": {
    "pos": "v.",
    "en_def": "to make something happen later than planned",
    "cn_def": "延誤；耽擱"
  },
  "reschedule": {
    "pos": "v.",
    "en_def": "to change the time or date of a planned event",
    "cn_def": "重新安排時間"
  },
  "call off": {
    "pos": "v.phr.",
    "en_def": "to decide that a planned event will not take place",
    "cn_def": "取消（活動等）"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to stop taking part in something; to take back an offer",
    "cn_def": "退出；撤回"
  },
  "termination": {
    "pos": "n.",
    "en_def": "the act of ending something, such as a contract or a job",
    "cn_def": "終止；結束"
  },
  "suspension": {
    "pos": "n.",
    "en_def": "a short stop of a service or activity",
    "cn_def": "暫停；中止"
  },
  "abandon": {
    "pos": "v.",
    "en_def": "to stop doing a plan or activity before it is finished",
    "cn_def": "放棄；中止"
  },
  "revocation": {
    "pos": "n.",
    "en_def": "the official act of taking away a right or permit",
    "cn_def": "撤銷；吊銷"
  },
  "annul": {
    "pos": "v.",
    "en_def": "to officially say that an agreement or marriage is not legal",
    "cn_def": "宣告無效；廢除"
  },
  "void": {
    "pos": "adj.",
    "en_def": "not legal or not valid any more",
    "cn_def": "無效的"
  },
  "nullify": {
    "pos": "v.",
    "en_def": "to make something have no effect or value",
    "cn_def": "使無效；抵銷"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money that is paid back to a customer",
    "cn_def": "退款"
  },
  "charge": {
    "pos": "n.",
    "en_def": "the amount of money you must pay for something",
    "cn_def": "費用；收費"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a set of rules that a company or group follows",
    "cn_def": "政策；規定"
  },
  "notice": {
    "pos": "n.",
    "en_def": "information or a warning given before something happens",
    "cn_def": "通知；預先通知"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be done",
    "cn_def": "截止期限"
  },
  "penalty": {
    "pos": "n.",
    "en_def": "money you must pay for breaking a rule or agreement",
    "cn_def": "罰金；違約金"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money paid for a service or to join something",
    "cn_def": "費用"
  },
  "unexpected": {
    "pos": "adj.",
    "en_def": "not expected; surprising",
    "cn_def": "意料之外的；意外的"
  },
  "sudden": {
    "pos": "adj.",
    "en_def": "happening very quickly and without warning",
    "cn_def": "突然的"
  },
  "official": {
    "pos": "adj.",
    "en_def": "approved by or coming from a government or organization",
    "cn_def": "正式的；官方的"
  },
  "notify": {
    "pos": "v.",
    "en_def": "to tell someone officially about something",
    "cn_def": "通知"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or show that a plan or booking is definite",
    "cn_def": "確認"
  },
  "disruption": {
    "pos": "n.",
    "en_def": "a problem that stops something from working normally",
    "cn_def": "中斷；干擾"
  },
  "alternative": {
    "pos": "n.",
    "en_def": "another choice you can use instead",
    "cn_def": "替代方案；其他選擇"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone because of a loss or problem",
    "cn_def": "賠償；補償"
  },
  "reinstate": {
    "pos": "v.",
    "en_def": "to bring back a service, rule or person to an earlier position",
    "cn_def": "恢復；使復職"
  }
};

const EXTRA_GLOSSES = {};
