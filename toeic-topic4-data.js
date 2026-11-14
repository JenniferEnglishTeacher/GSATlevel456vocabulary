// Topic 4 Quiz Data: Activity 活動
// Source word list: https://www.examword.com/group-topic/activity — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T04 - Activity 活動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動；大型活動；事件",
    "en_def": "something important or special that happens, often planned",
    "sentence": "A: Why is the hotel lobby so crowded today, and why are there so many people in suits carrying name badges and brochures? B: A large technology company has rented the main hall for a special {{BLANK}} to celebrate its twentieth anniversary, so hundreds of guests, partners, and reporters have arrived from different cities this morning.",
    "cn": "A：為什麼今天飯店大廳這麼擁擠，而且有這麼多穿西裝的人拿著名牌和手冊？ B：一家大型科技公司租下了主廳舉辦一場特別的【活動】來慶祝二十週年，所以今天早上有數百位賓客、合作夥伴和記者從不同城市來到這裡。"
  },
  {
    "word": "occasion",
    "pos": "n.",
    "cn_def": "場合；特殊時刻",
    "en_def": "a special time or event",
    "sentence": "A: Should I wear my usual work clothes to the retirement dinner for Mr. Lin on Friday night, or do you think something more formal would be better? B: Since it is an important {{BLANK}} and the president will give a speech, most of the staff are planning to wear suits or nice dresses, so I would dress up a little.",
    "cn": "A：週五晚上林先生的退休晚宴，我應該穿平常的上班服裝，還是你覺得穿正式一點比較好？ B：因為這是一個重要的【場合】，而且總裁會致詞，大部分員工都打算穿西裝或漂亮的洋裝，所以我會稍微打扮一下。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會；集會",
    "en_def": "a meeting of people for a social or work purpose",
    "sentence": "A: Are you going to the small {{BLANK}} in the staff lounge after work today, or do you have to leave early to pick up your children from school? B: I will stay for about an hour because the team wants to say goodbye to Emma, who is moving to our Tokyo office next week, and I helped buy her gift.",
    "cn": "A：你今天下班後會去員工休息室的小型【聚會】嗎？還是你得早點離開去學校接小孩？ B：我會待大約一個小時，因為團隊想跟下週要調到東京辦公室的艾瑪道別，而且我有幫忙買她的禮物。"
  },
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝；慶祝活動",
    "en_def": "a party or special event to show you are happy about something",
    "sentence": "A: Why did the manager order so many cakes and balloons for the office this afternoon, and is it someone's birthday today? B: No, it is a {{BLANK}} for our sales team, because they reached their yearly target two months early, and the director wants to thank everyone for working so hard during the busy season.",
    "cn": "A：為什麼經理今天下午幫辦公室訂了這麼多蛋糕和氣球？今天是誰生日嗎？ B：不是，這是為我們業務團隊舉辦的【慶祝活動】，因為他們提早兩個月達成年度目標，主管想感謝大家在旺季這麼努力工作。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；（藝術、音樂等）節",
    "en_def": "a special time when people enjoy music, food, or culture, often for several days",
    "sentence": "A: Why are all the hotels near the river fully booked next weekend, and where should our visiting clients stay during their trip? B: The city is holding its yearly food and music {{BLANK}} by the river, so thousands of tourists are coming, and we should book rooms in a business hotel near the train station instead.",
    "cn": "A：為什麼下週末河邊附近的飯店都客滿了？來訪的客戶出差期間應該住在哪裡？ B：市政府要在河邊舉辦一年一度的美食音樂【節】，所以會有數千名遊客湧入，我們應該改訂火車站附近的商務旅館。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal public event with special traditions or actions",
    "sentence": "A: What time should the guests arrive at the new factory on Monday morning, and will there be enough chairs for the local reporters? B: The opening {{BLANK}} starts at ten o'clock, when the mayor will cut the ribbon, so guests should arrive by nine-thirty, and I have already asked the staff to set up fifty extra seats.",
    "cn": "A：週一早上賓客應該幾點到達新工廠？給當地記者的椅子夠嗎？ B：開幕【典禮】十點開始，屆時市長會剪綵，所以賓客應該在九點半前抵達，而且我已經請員工多擺五十個座位。"
  },
  {
    "word": "function",
    "pos": "n.",
    "cn_def": "宴會；正式聚會",
    "en_def": "a formal social event, such as a party or dinner",
    "sentence": "A: Is the large dining room on the top floor of the hotel available on Saturday evening, or has another company already reserved it? B: I'm sorry, but a bank is holding a private {{BLANK}} for its most important customers that night, so the room is closed to the public, but our garden restaurant still has space.",
    "cn": "A：飯店頂樓的大型餐廳週六晚上可以使用嗎？還是已經被其他公司預訂了？ B：很抱歉，那天晚上一家銀行要為最重要的客戶舉辦私人【宴會】，所以那個廳不對外開放，不過我們的花園餐廳還有位子。"
  },
  {
    "word": "program",
    "pos": "n.",
    "cn_def": "計畫；課程方案；節目",
    "en_def": "a planned series of activities or events",
    "sentence": "A: How can new employees learn about the company's products and safety rules before they start working in the warehouse next month? B: The human resources department has created a two-week training {{BLANK}} with short classes, factory tours, and practice tests, so every new worker will understand the main rules before their first real shift.",
    "cn": "A：新進員工下個月開始在倉庫工作前，要怎麼了解公司的產品和安全規定？ B：人資部門設計了一個為期兩週的訓練【計畫】，包括短期課程、工廠參觀和練習測驗，所以每位新員工在第一次正式上班前都會了解主要規定。"
  },
  {
    "word": "session",
    "pos": "n.",
    "cn_def": "（活動的）一段時間；場次；講習",
    "en_def": "a period of time used for a particular activity",
    "sentence": "A: I couldn't get to the conference until lunchtime because my flight was delayed, so did I miss anything really important this morning? B: You missed the first {{BLANK}} about online marketing, but the speaker uploaded her slides to the website, and the afternoon talks about customer service are probably more useful for your team anyway.",
    "cn": "A：我的班機延誤，所以到中午才趕到研討會，我今天早上有錯過什麼很重要的內容嗎？ B：你錯過了第一【場】關於網路行銷的講座，不過講者已經把投影片上傳到網站，而且下午關於客服的演講對你的團隊可能反而更有用。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event when people come together to discuss something",
    "sentence": "A: Why isn't Mr. Chen answering his phone this morning, when the client from Singapore has called him three times already? B: He is in a long {{BLANK}} with the board of directors to discuss next year's budget, and he asked his assistant not to disturb him until it finishes at about eleven-thirty.",
    "cn": "A：為什麼陳先生今天早上都不接電話？新加坡的客戶已經打給他三次了。 B：他正在和董事會開一場很長的【會議】討論明年的預算，他請助理在大約十一點半結束前不要打擾他。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "研習會；工作坊",
    "en_def": "a meeting where people learn a skill by doing practical activities",
    "sentence": "A: Do you know any good way for our sales staff to improve their speaking skills before they meet the overseas buyers next month? B: Yes, a local business school is offering a one-day {{BLANK}} on presentation skills, where each person practices speaking in small groups and gets helpful feedback from an experienced trainer.",
    "cn": "A：你知道有什麼好方法可以讓我們的業務人員在下個月見國外買家之前提升口說能力嗎？ B：有，當地一所商學院開設了為期一天的簡報技巧【工作坊】，每個人都會在小組中練習說話，並得到經驗豐富的講師給予的實用回饋。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論會",
    "en_def": "a class or meeting where a small group discusses a subject with an expert",
    "sentence": "A: Why are so many accountants from our department leaving the office early this Thursday afternoon, and who will answer client calls? B: They are going to a {{BLANK}} at the city hall about the new tax laws, which will start next year, and two staff members from the front desk will answer the phones while they are away.",
    "cn": "A：為什麼我們部門這週四下午有這麼多會計師提早離開辦公室？誰來接客戶的電話？ B：他們要去市政廳參加一場關於明年開始實施的新稅法的【研討會】，他們不在時，櫃台的兩位員工會負責接電話。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "（大型）會議；大會",
    "en_def": "a large formal meeting where many people discuss a subject, often for several days",
    "sentence": "A: Have you booked your flight to Singapore for next month yet, and are you going to give a speech there this year? B: Yes, I booked it yesterday, because I'm speaking at the international {{BLANK}} on green energy, where about two thousand engineers and business leaders will share ideas for three days.",
    "cn": "A：你訂好下個月飛新加坡的機票了嗎？你今年會在那裡演講嗎？ B：訂好了，我昨天訂的，因為我要在國際綠能【大會】上演講，屆時大約兩千名工程師和企業領袖會在三天內交流想法。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "an event in which people try to win a prize by being the best",
    "sentence": "A: Why is everyone in the design department working so late every night this week, even though our big project is already finished? B: They entered a national {{BLANK}} for the best new product packaging, and the winning team will receive a large cash prize, so they want their design to be perfect before Friday's deadline.",
    "cn": "A：為什麼設計部的每個人這週每天晚上都工作到這麼晚？我們的大案子明明已經完成了。 B：他們報名了一場全國最佳新產品包裝【比賽】，獲勝的團隊會得到一大筆獎金，所以他們希望在週五截止前讓設計完美無缺。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽；聯賽",
    "en_def": "a sports or game competition with many players or teams and several rounds",
    "sentence": "A: Why is the company gym booked every evening this month, when I usually go there after work to exercise? B: Our office is holding a basketball {{BLANK}} between eight departments, and teams practice there every night, but the games will end next Friday, so you can use the gym again after that.",
    "cn": "A：為什麼公司健身房這個月每天晚上都被預約滿了？我平常下班後都會去那裡運動。 B：我們辦公室正在舉辦一場八個部門之間的籃球【錦標賽】，各隊每天晚上都在那裡練習，不過比賽下週五就會結束，之後你就可以再使用健身房了。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "演出；表演",
    "en_def": "the act of playing music, dancing, or acting in front of people",
    "sentence": "A: Did you enjoy the company's year-end party at the hotel last night, or did you leave early because you were so tired? B: I stayed until the end, because the most exciting part was a live {{BLANK}} by a famous jazz band, and the guests kept dancing and clapping until almost midnight.",
    "cn": "A：你昨晚喜歡公司在飯店舉辦的尾牙嗎？還是因為太累提早離開了？ B：我待到最後，因為最精彩的部分是一個知名爵士樂團的現場【演出】，賓客一直跳舞拍手到快午夜。"
  },
  {
    "word": "show",
    "pos": "n.",
    "cn_def": "展覽；表演；節目",
    "en_def": "an event where people look at products or watch entertainment",
    "sentence": "A: Why did the marketing team pack so many boxes of brochures and product samples into the van this morning? B: They are driving to the convention center for a three-day trade {{BLANK}}, where hundreds of companies display their newest products, and they hope to meet many new buyers from Japan and Korea there.",
    "cn": "A：為什麼行銷團隊今天早上把這麼多箱手冊和產品樣品搬上廂型車？ B：他們要開車到會展中心參加為期三天的貿易【展】，數百家公司會在那裡展示最新產品，他們希望能在那裡認識許多來自日本和韓國的新買家。"
  },
  {
    "word": "exhibition",
    "pos": "n.",
    "cn_def": "展覽；展覽會",
    "en_def": "a public event where art or products are shown to people",
    "sentence": "A: What are you planning to do with the visiting clients on Saturday afternoon after the factory tour is over? B: I'm going to take them to the city museum, because there is a special {{BLANK}} of old Taiwanese photographs and paintings, and they told me they are very interested in local history and art.",
    "cn": "A：週六下午工廠參觀結束後，你打算帶來訪的客戶做什麼？ B：我要帶他們去市立博物館，因為那裡有一個台灣老照片和畫作的特別【展覽】，他們跟我說對當地歷史和藝術很有興趣。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that gives information about something to a group of people",
    "sentence": "A: You look very nervous this morning, so is something wrong with the new project, or did you not sleep well last night? B: I have to give a {{BLANK}} to the senior managers about our sales results at ten o'clock, and I'm worried that the projector might not work, so I printed copies of every slide.",
    "cn": "A：你今天早上看起來很緊張，是新專案出了什麼問題，還是昨晚沒睡好？ B：我十點要向高階主管做一場關於業績結果的【簡報】，我擔心投影機可能會故障，所以把每張投影片都印出來了。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "示範；展示",
    "en_def": "an act of showing how something works or how to do something",
    "sentence": "A: How will the store staff learn to use the new coffee machines before the café opens to customers next Monday? B: A technician from the supplier is coming on Friday afternoon to give a {{BLANK}}, so she will show everyone step by step how to clean the machine and make each type of drink.",
    "cn": "A：門市員工要怎麼在下週一咖啡廳開幕前學會使用新的咖啡機？ B：供應商的技術人員週五下午會來做【示範】，她會一步一步教大家如何清潔機器以及製作每一種飲料。"
  },
  {
    "word": "activity-based",
    "pos": "adj.",
    "cn_def": "以活動為主的；活動式的",
    "en_def": "using practical activities to help people learn or work",
    "sentence": "A: The new employees seemed bored during last month's training, so how can we make the lessons more interesting for the next group? B: We should try an {{BLANK}} approach, where trainees solve real problems in small teams and play short role-play games instead of listening to long lectures all day.",
    "cn": "A：新進員工在上個月的訓練中似乎很無聊，我們要怎麼讓下一梯次的課程更有趣？ B：我們應該試試【以活動為主的】方式，讓學員以小組解決真實問題並玩簡短的角色扮演遊戲，而不是整天聽冗長的講課。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動的；互動式的",
    "en_def": "allowing people to take part and communicate, not just watch or listen",
    "sentence": "A: Why do so many children and parents visit the science museum downtown on weekends, even though the tickets are quite expensive? B: The museum has many {{BLANK}} displays, where visitors can touch screens, build simple machines, and try small experiments, so families have fun and learn something at the same time.",
    "cn": "A：為什麼週末有這麼多孩子和家長去市中心的科學博物館，即使門票相當貴？ B：博物館有很多【互動式的】展示，參觀者可以觸碰螢幕、組裝簡單的機器並嘗試小實驗，所以家庭可以同時玩得開心又學到東西。"
  },
  {
    "word": "recreational",
    "pos": "adj.",
    "cn_def": "娛樂的；休閒的",
    "en_def": "relating to activities that people do for fun when they are not working",
    "sentence": "A: What kind of benefits does the new company offer its staff, apart from a good salary and health insurance? B: It has a large {{BLANK}} center next to the office with a swimming pool, a game room, and tennis courts, so employees can relax and exercise after work without paying any extra fees.",
    "cn": "A：除了優渥的薪水和健康保險，新公司還提供員工哪些福利？ B：公司在辦公室旁邊有一座大型【休閒】中心，裡面有游泳池、遊戲室和網球場，所以員工下班後可以放鬆和運動，不需要另外付費。"
  },
  {
    "word": "scheduled",
    "pos": "adj.",
    "cn_def": "預定的；排定的",
    "en_def": "planned for a particular time",
    "sentence": "A: Is the shipment of new office furniture still going to arrive on Tuesday, or has the delivery company changed the date again? B: The {{BLANK}} delivery time is still Tuesday at two o'clock, but the driver said heavy rain might cause a short delay, so someone should wait at the loading area that afternoon.",
    "cn": "A：新辦公家具還是會在週二送到嗎？還是貨運公司又改日期了？ B：【預定的】送貨時間還是週二下午兩點，不過司機說大雨可能會造成短暫延誤，所以那天下午應該要有人在卸貨區等。"
  },
  {
    "word": "organized",
    "pos": "adj.",
    "cn_def": "有組織的；安排好的",
    "en_def": "planned carefully and arranged well",
    "sentence": "A: Are you going on the weekend trip to the mountains with the rest of the accounting team, or do you prefer to rest at home? B: I'm going, because it's an {{BLANK}} tour with a bus, a local guide, and all the meals included, so I don't need to plan anything or worry about getting lost.",
    "cn": "A：你會跟會計團隊的其他人一起去山上的週末旅行嗎？還是你比較想在家休息？ B：我會去，因為那是一個【安排好的】團體行程，包含巴士、當地導遊和所有餐點，所以我不需要計畫任何事情，也不用擔心迷路。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Do all employees have to join the company's charity run in the park next Sunday morning, even if they are not very good at running? B: No, nobody is required to {{BLANK}}, but the manager hopes many people will join, because the money we raise will help buy books for children at a local school.",
    "cn": "A：所有員工都必須參加下週日早上在公園舉辦的公司慈善路跑嗎？即使不太擅長跑步也一樣？ B：不，沒有人被要求一定要【參加】，但經理希望很多人會加入，因為我們募到的錢會用來幫當地一所學校的孩子買書。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；舉辦",
    "en_def": "to organize an event and invite people to it",
    "sentence": "A: Which city did the board of directors finally choose for next year's sales meeting, and when will they tell the regional managers? B: They decided that our Taichung office will {{BLANK}} the meeting, because it has a large new conference room and is close to the high-speed rail station, and they will announce it on Monday.",
    "cn": "A：董事會最後選了哪個城市辦明年的業務會議？他們什麼時候會告知各區經理？ B：他們決定由我們台中辦公室【主辦】這場會議，因為那裡有一間新的大型會議室，而且離高鐵站很近，他們會在週一宣布。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加",
    "en_def": "to go to an event, such as a meeting or class",
    "sentence": "A: Will you be able to {{BLANK}} the training workshop on customer service tomorrow afternoon, or are you still busy preparing the monthly report? B: I'll be there, because my supervisor said it is very important for everyone who works at the front desk, and I finished most of the report last night anyway.",
    "cn": "A：你明天下午能【出席】客服訓練工作坊嗎？還是你還在忙著準備月報？ B：我會到，因為主管說這對所有在櫃台工作的人都非常重要，而且反正我昨晚已經把報告大部分完成了。"
  },
  {
    "word": "conduct",
    "pos": "v.",
    "cn_def": "進行；實施",
    "en_def": "to organize and do a particular activity",
    "sentence": "A: How will the company find out whether customers are happy with the new mobile app that we released last month? B: The marketing department plans to {{BLANK}} an online survey next week, asking about five hundred users to answer ten short questions, and the results will help the designers decide what to improve.",
    "cn": "A：公司要怎麼了解顧客是否滿意我們上個月推出的新手機應用程式？ B：行銷部打算下週【進行】一項線上調查，請大約五百位使用者回答十個簡短的問題，結果會幫助設計師決定要改善哪些地方。"
  },
  {
    "word": "launch",
    "pos": "v.",
    "cn_def": "推出；發起",
    "en_def": "to start something new, or to make a new product available",
    "sentence": "A: Why has the marketing team been working so hard on weekends recently, and when will they finally get some rest? B: The company is going to {{BLANK}} its new line of energy drinks at a big event next month, so they are busy preparing the advertisements, the website, and the free samples for customers.",
    "cn": "A：為什麼行銷團隊最近週末都這麼努力工作？他們什麼時候才能休息？ B：公司下個月要在一場大型活動中【推出】新系列的能量飲料，所以他們正忙著準備廣告、網站和給顧客的免費樣品。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "參與；吸引（注意）",
    "en_def": "to take part in an activity, or to get someone interested",
    "sentence": "A: Why does the new manager always ask so many questions and give small prizes during her training classes for the sales staff? B: She wants everyone to {{BLANK}} in the discussion instead of just sitting quietly, because she believes people remember more information when they share their own ideas and experiences with the group.",
    "cn": "A：為什麼新經理在業務人員訓練課上總是問很多問題又發小獎品？ B：她希望大家都能【參與】討論，而不是只是安靜地坐著，因為她相信當人們和團隊分享自己的想法和經驗時，會記得更多資訊。"
  },
  {
    "word": "occur",
    "pos": "v.",
    "cn_def": "發生",
    "en_def": "to happen",
    "sentence": "A: Why did the factory manager suddenly call an emergency meeting this afternoon, and should the office staff join it too? B: He wants to explain the new safety rules, because two small accidents happened in the warehouse last week, and he wants to make sure that problems like that never {{BLANK}} again in any part of the building.",
    "cn": "A：為什麼工廠經理今天下午突然召開緊急會議？辦公室員工也要參加嗎？ B：他想說明新的安全規定，因為上週倉庫發生了兩起小意外，他要確保這類問題不會在大樓的任何地方再次【發生】。"
  },
  {
    "word": "wrap-up",
    "pos": "n.",
    "cn_def": "總結；收尾",
    "en_def": "the final part of an event that sums up what happened",
    "sentence": "A: Do I need to stay until the very end of the three-day conference on Friday, or can I leave after the last afternoon talk? B: Please stay for the {{BLANK}} at four o'clock, because the organizers will summarize the main ideas from every session, give out certificates, and explain how to download all of the speakers' slides.",
    "cn": "A：週五這場為期三天的研討會，我需要待到最後嗎？還是可以在下午最後一場演講後離開？ B：請留下來參加四點的【總結】，因為主辦單位會歸納每一場的重點、頒發證書，並說明如何下載所有講者的投影片。"
  }
];

const MCQS = [
  {
    "q": "Please register online before Friday if you plan to join the anniversary dinner. Space at the _____ is limited to two hundred guests.",
    "options": [
      "event",
      "tournament",
      "demonstration",
      "competition"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Park brought his best camera to the awards dinner. He wanted to remember the special _____ when his team won first prize.",
    "options": [
      "program",
      "occasion",
      "session",
      "workshop"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "About thirty former employees met at a small restaurant last Saturday night. The friendly _____ gave them a chance to share old stories.",
    "options": [
      "tournament",
      "demonstration",
      "gathering",
      "conference"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The shop reached one million dollars in sales this year. To thank the staff, the owner is planning a big _____ with food and music.",
    "options": [
      "demonstration",
      "seminar",
      "presentation",
      "celebration"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Every October, the town closes its main street for three days of music and local food. The _____ attracts thousands of visitors each year.",
    "options": [
      "meeting",
      "seminar",
      "festival",
      "workshop"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The president will hand out certificates to all graduates of the training course. The _____ will take place in the main hall.",
    "options": [
      "ceremony",
      "tournament",
      "competition",
      "exhibition"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The city offers a free English _____ for new residents. It includes weekly classes, cultural visits, and online practice for six months.",
    "options": [
      "tournament",
      "gathering",
      "celebration",
      "program"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The first training _____ will begin at nine o'clock. After a short break, the second one will start at eleven.",
    "options": [
      "festival",
      "session",
      "celebration",
      "tournament"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "All department heads must come to the weekly _____ on Monday morning. They will discuss sales figures and next month's goals.",
    "options": [
      "festival",
      "exhibition",
      "ceremony",
      "meeting"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Participants in the three-hour _____ will practice writing business emails. Each person will receive feedback from the trainer during the class.",
    "options": [
      "tournament",
      "festival",
      "workshop",
      "ceremony"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Professor Lee will lead a small _____ on international trade law next Tuesday. Only fifteen students can join the discussion.",
    "options": [
      "tournament",
      "seminar",
      "festival",
      "celebration"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "More than three thousand doctors from forty countries will attend the medical _____ in Taipei. It will last for four days.",
    "options": [
      "conference",
      "tournament",
      "celebration",
      "festival"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Young chefs from across the country entered the cooking _____ last weekend. The winner received a prize of fifty thousand dollars.",
    "options": [
      "seminar",
      "competition",
      "conference",
      "ceremony"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Sixteen teams from local companies will play in the tennis _____ this summer. The final match will be held on August 20.",
    "options": [
      "seminar",
      "presentation",
      "conference",
      "tournament"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The theater group gave an excellent _____ of a famous play last night. The audience stood up and clapped for five minutes.",
    "options": [
      "performance",
      "conference",
      "meeting",
      "seminar"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The art gallery's new _____ of modern paintings opens this month. More than eighty works by local artists are on display.",
    "options": [
      "tournament",
      "seminar",
      "exhibition",
      "meeting"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Ms. Wu used charts and photos during her _____ to the board. The directors asked her several questions about the new budget.",
    "options": [
      "presentation",
      "tournament",
      "festival",
      "celebration"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The salesperson gave a short _____ of the new vacuum cleaner. She showed customers how easily it picks up dust and hair.",
    "options": [
      "tournament",
      "festival",
      "demonstration",
      "ceremony"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The course uses an _____ approach, so learners spend most of each lesson doing practical tasks. They rarely just sit and listen.",
    "options": [
      "recreational",
      "scheduled",
      "organized",
      "activity-based"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The new museum guide is fully _____. Visitors can ask it questions and get answers about each painting right away.",
    "options": [
      "scheduled",
      "interactive",
      "recreational",
      "organized"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The apartment building has a gym, a pool, and other _____ facilities. Residents can use them for free at any time.",
    "options": [
      "scheduled",
      "activity-based",
      "interactive",
      "recreational"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The _____ departure time for the flight to Tokyo is 8:15 a.m. Passengers should arrive at the airport two hours early.",
    "options": [
      "recreational",
      "scheduled",
      "interactive",
      "activity-based"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The trip was well _____, with every hotel and meal booked in advance. Nobody had to worry about anything during the week.",
    "options": [
      "organized",
      "interactive",
      "recreational",
      "activity-based"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Employees who want to _____ in the charity run must sign up by Friday. The event starts at 7 a.m. in City Park.",
    "options": [
      "attend",
      "host",
      "participate",
      "conduct"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our company will _____ the regional sales meeting this year. We need to book rooms and plan meals for sixty guests.",
    "options": [
      "occur",
      "host",
      "participate",
      "engage"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "All new employees must _____ the safety training next Monday. Anyone who misses it will have to take it again in March.",
    "options": [
      "attend",
      "occur",
      "participate",
      "launch"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The research team will _____ interviews with fifty customers next week. They want to learn why sales dropped last quarter.",
    "options": [
      "occur",
      "participate",
      "conduct",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The phone company plans to _____ its new model in early December. Stores are already preparing posters and displays.",
    "options": [
      "occur",
      "participate",
      "attend",
      "launch"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Good speakers ask questions to _____ their audience. When listeners feel involved, they pay more attention to the message.",
    "options": [
      "engage",
      "occur",
      "participate",
      "attend"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Power cuts often _____ during strong summer storms. Please save your work frequently to avoid losing important files.",
    "options": [
      "host",
      "occur",
      "conduct",
      "launch"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "event": {
    "pos": "n.",
    "en_def": "something important or special that happens, often planned",
    "cn_def": "活動；大型活動；事件"
  },
  "occasion": {
    "pos": "n.",
    "en_def": "a special time or event",
    "cn_def": "場合；特殊時刻"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people for a social or work purpose",
    "cn_def": "聚會；集會"
  },
  "celebration": {
    "pos": "n.",
    "en_def": "a party or special event to show you are happy about something",
    "cn_def": "慶祝；慶祝活動"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special time when people enjoy music, food, or culture, often for several days",
    "cn_def": "節慶；（藝術、音樂等）節"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal public event with special traditions or actions",
    "cn_def": "典禮；儀式"
  },
  "function": {
    "pos": "n.",
    "en_def": "a formal social event, such as a party or dinner",
    "cn_def": "宴會；正式聚會"
  },
  "program": {
    "pos": "n.",
    "en_def": "a planned series of activities or events",
    "cn_def": "計畫；課程方案；節目"
  },
  "session": {
    "pos": "n.",
    "en_def": "a period of time used for a particular activity",
    "cn_def": "（活動的）一段時間；場次；講習"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "an event when people come together to discuss something",
    "cn_def": "會議"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn a skill by doing practical activities",
    "cn_def": "研習會；工作坊"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a class or meeting where a small group discusses a subject with an expert",
    "cn_def": "研討會；專題討論會"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where many people discuss a subject, often for several days",
    "cn_def": "（大型）會議；大會"
  },
  "competition": {
    "pos": "n.",
    "en_def": "an event in which people try to win a prize by being the best",
    "cn_def": "比賽；競賽"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a sports or game competition with many players or teams and several rounds",
    "cn_def": "錦標賽；聯賽"
  },
  "performance": {
    "pos": "n.",
    "en_def": "the act of playing music, dancing, or acting in front of people",
    "cn_def": "演出；表演"
  },
  "show": {
    "pos": "n.",
    "en_def": "an event where people look at products or watch entertainment",
    "cn_def": "展覽；表演；節目"
  },
  "exhibition": {
    "pos": "n.",
    "en_def": "a public event where art or products are shown to people",
    "cn_def": "展覽；展覽會"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information about something to a group of people",
    "cn_def": "簡報；報告"
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "an act of showing how something works or how to do something",
    "cn_def": "示範；展示"
  },
  "activity-based": {
    "pos": "adj.",
    "en_def": "using practical activities to help people learn or work",
    "cn_def": "以活動為主的；活動式的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people to take part and communicate, not just watch or listen",
    "cn_def": "互動的；互動式的"
  },
  "recreational": {
    "pos": "adj.",
    "en_def": "relating to activities that people do for fun when they are not working",
    "cn_def": "娛樂的；休閒的"
  },
  "scheduled": {
    "pos": "adj.",
    "en_def": "planned for a particular time",
    "cn_def": "預定的；排定的"
  },
  "organized": {
    "pos": "adj.",
    "en_def": "planned carefully and arranged well",
    "cn_def": "有組織的；安排好的"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and invite people to it",
    "cn_def": "主辦；舉辦"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, such as a meeting or class",
    "cn_def": "出席；參加"
  },
  "conduct": {
    "pos": "v.",
    "en_def": "to organize and do a particular activity",
    "cn_def": "進行；實施"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to start something new, or to make a new product available",
    "cn_def": "推出；發起"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to take part in an activity, or to get someone interested",
    "cn_def": "參與；吸引（注意）"
  },
  "occur": {
    "pos": "v.",
    "en_def": "to happen",
    "cn_def": "發生"
  },
  "wrap-up": {
    "pos": "n.",
    "en_def": "the final part of an event that sums up what happened",
    "cn_def": "總結；收尾"
  }
};

const EXTRA_GLOSSES = {};
