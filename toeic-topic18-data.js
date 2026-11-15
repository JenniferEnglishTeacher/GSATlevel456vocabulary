// Topic 18 Quiz Data: Appointment 預約
// Source word list: https://www.examword.com/group-topic/appointment — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T18 - Appointment 預約",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "schedule",
    "pos": "v.",
    "cn_def": "安排（時間）；排定",
    "en_def": "to plan something for a certain time",
    "sentence": "A: The new client from Tokyo wants to visit our factory and see the production line next week, so what should I do first? B: Please {{BLANK}} a visit for Tuesday morning, because the machines run all day then, and send him the address and a map before the weekend.",
    "cn": "A：東京來的新客戶下週想來參觀我們的工廠和生產線，我該先做什麼？ B：請把參觀【安排】在星期二早上，因為那天機器整天運轉，並在週末前把地址和地圖寄給他。"
  },
  {
    "word": "booking",
    "pos": "n.",
    "cn_def": "預訂；預約",
    "en_def": "an arrangement to have a seat, room, or service at a certain time",
    "sentence": "A: Our team dinner for the sales award is on Friday night, and that Italian restaurant is always full on weekends, so did anyone call them? B: Yes, I made a {{BLANK}} for twelve people at seven o'clock, and the restaurant also promised to give us a private room in the back.",
    "cn": "A：我們慶祝業績獎的團隊晚餐在星期五晚上，那家義大利餐廳週末總是客滿，有人打電話給他們了嗎？ B：有，我做了七點十二個人的【預訂】，餐廳還答應給我們後面的一間包廂。"
  },
  {
    "word": "reserve",
    "pos": "v.",
    "cn_def": "預訂；保留",
    "en_def": "to ask for a room, seat, or table to be kept for you",
    "sentence": "A: More than forty people from different branches will come to the training day next month, and our meeting rooms are too small, so where can we hold it? B: I will {{BLANK}} the large conference hall at the hotel across the street, because it has a projector, good sound, and enough chairs for everyone.",
    "cn": "A：下個月有四十多位來自不同分公司的人要來參加訓練日，我們的會議室太小了，可以在哪裡舉辦？ B：我會【預訂】對街飯店的大型會議廳，因為那裡有投影機、良好的音響，也有足夠的椅子給每個人。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預約；訂位",
    "en_def": "an arrangement to keep a room, table, or ticket for someone",
    "sentence": "A: I arrived at the hotel in Singapore after a long flight, but the front desk says they cannot find my name in their system, so what can I do? B: Show them the email with your {{BLANK}} number, and if they still have a problem, call our travel agent, who booked the room for you last month.",
    "cn": "A：我長途飛行後抵達新加坡的飯店，但櫃台說系統裡找不到我的名字，我該怎麼辦？ B：給他們看有你【訂房】編號的電子郵件，如果還有問題，就打給上個月幫你訂房的旅行社人員。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event where people come together to discuss something",
    "sentence": "A: The marketing manager wants to talk with everyone about the new product launch, but half of the team works from home on Mondays, so when should we do it? B: Let's hold the {{BLANK}} on Wednesday afternoon in Room 5, and we can also share a video link for anyone who cannot come in person.",
    "cn": "A：行銷經理想跟大家談新產品上市的事，但星期一有一半的團隊在家工作，我們該什麼時候進行？ B：我們星期三下午在五號會議室開【會議】吧，也可以分享視訊連結給無法親自出席的人。"
  },
  {
    "word": "consultation",
    "pos": "n.",
    "cn_def": "諮詢；諮商",
    "en_def": "a meeting to get advice from an expert",
    "sentence": "A: Our company wants to open a store in Japan next year, but none of us understand the local tax rules very well, so who can help us? B: I have booked a {{BLANK}} with a tax expert in Osaka next Thursday, and she will explain the rules and the forms we need to prepare.",
    "cn": "A：我們公司明年想在日本開店，但我們沒有人很了解當地的稅務規定，誰能幫我們？ B：我已經預約了下週四和大阪一位稅務專家的【諮詢】，她會說明相關規定和我們需要準備的表格。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a formal meeting where someone is asked questions, for example for a job",
    "sentence": "A: The human resources office called me this morning about the assistant job I applied for last week, and they sounded very friendly, so what did they say? B: They invited me to an {{BLANK}} at ten o'clock on Monday, and they asked me to bring my diploma and two copies of my resume.",
    "cn": "A：人資部今天早上打電話給我，談我上週應徵的助理工作，他們聽起來很友善，他們說了什麼？ B：他們邀請我星期一十點去【面試】，還要我帶畢業證書和兩份履歷影本。"
  },
  {
    "word": "session",
    "pos": "n.",
    "cn_def": "（一段）時間；場次",
    "en_def": "a period of time used for a particular activity",
    "sentence": "A: The new accounting software is quite difficult, and many staff members have asked for help using it, so how are we going to train everyone? B: We will hold a two-hour training {{BLANK}} every Friday afternoon this month, and each person can choose the week that fits their work schedule best.",
    "cn": "A：新的會計軟體相當難用，很多員工都要求協助，我們要怎麼訓練每個人？ B：這個月每週五下午我們會舉辦兩小時的訓練【場次】，每個人可以選擇最符合自己工作時間的那一週。"
  },
  {
    "word": "time slot",
    "pos": "n.phr.",
    "cn_def": "時段",
    "en_def": "a short period of time that is kept for one appointment or activity",
    "sentence": "A: I need to see the eye doctor before my business trip next week, but the clinic's website says almost every day is full, so is there any chance? B: There is only one free {{BLANK}} left on Thursday at 4:30, so you should book it online right now before someone else takes it.",
    "cn": "A：我下週出差前需要看眼科醫生，但診所網站說幾乎每天都額滿了，還有機會嗎？ B：星期四四點半只剩下一個空的【時段】，你應該現在就上網預約，免得被別人搶走。"
  },
  {
    "word": "availability",
    "pos": "n.",
    "cn_def": "有空的時間；可用性",
    "en_def": "the times when someone is free to meet or do something",
    "sentence": "A: The director wants to meet all five department heads before the budget is finished, but they all have very different schedules, so how can we find a time? B: I will send everyone an online form today to check their {{BLANK}} for next week, and then I will choose the time that works for most people.",
    "cn": "A：主任想在預算定案前和五位部門主管見面，但他們的行程都很不一樣，我們要怎麼找到時間？ B：我今天會寄一份線上表單給每個人，確認他們下週【有空的時間】，然後選一個大多數人都可以的時間。"
  },
  {
    "word": "calendar",
    "pos": "n.",
    "cn_def": "行事曆",
    "en_def": "a list of dates or a digital tool showing your plans and appointments",
    "sentence": "A: I keep forgetting my meetings with clients because I write them on small pieces of paper that I often lose, so do you have any advice? B: Put every appointment in the shared online {{BLANK}}, because it sends you alerts on your phone and your assistant can see your plans too.",
    "cn": "A：我老是忘記和客戶的會面，因為我把它們寫在常常弄丟的小紙條上，你有什麼建議嗎？ B：把每個約會都記在共用的線上【行事曆】，因為它會在你手機上發出提醒，你的助理也能看到你的安排。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say or show that something is definite or correct",
    "sentence": "A: The visitors from the German supplier are flying in on Sunday night, and they plan to come to our office on Monday, but I am not sure about the time. B: Please call their assistant this afternoon to {{BLANK}} the meeting time, so we can prepare the room and order lunch for everyone.",
    "cn": "A：德國供應商的訪客星期天晚上搭機抵達，他們打算星期一來我們辦公室，但我不確定時間。 B：請你今天下午打電話給他們的助理【確認】會議時間，這樣我們才能準備會議室並幫大家訂午餐。"
  },
  {
    "word": "confirmation",
    "pos": "n.",
    "cn_def": "確認（函）",
    "en_def": "a message or document that says something is definite",
    "sentence": "A: I booked the train tickets for our trip to the trade show in Taichung online last night, but I have not received anything yet, so is something wrong? B: Check your spam folder, because the website usually sends a {{BLANK}} email within ten minutes, and you will need its code to pick up the tickets.",
    "cn": "A：我昨晚在網路上訂了去台中參加商展的火車票，但到現在什麼都還沒收到，是出了什麼問題嗎？ B：檢查一下你的垃圾郵件匣，因為網站通常會在十分鐘內寄出【確認】信，你取票時需要信裡的代碼。"
  },
  {
    "word": "reminder",
    "pos": "n.",
    "cn_def": "提醒（通知）",
    "en_def": "a message that helps you remember something",
    "sentence": "A: Many patients forget their appointments at our clinic, and the doctors end up waiting with nothing to do, so how can we fix this problem? B: We can send each patient a text {{BLANK}} one day before the visit, and they can reply to it if they need to change the time.",
    "cn": "A：我們診所很多病人忘記約診，醫生最後只能空等，我們要怎麼解決這個問題？ B：我們可以在看診前一天傳簡訊【提醒】每位病人，如果他們需要改時間也可以直接回覆。"
  },
  {
    "word": "reschedule",
    "pos": "v.",
    "cn_def": "改期；重新安排時間",
    "en_def": "to change the time or date of a planned event",
    "sentence": "A: My flight back from Hong Kong was delayed, so I will not be in the office on Thursday, but I have a meeting with the bank that morning. B: Then you should call the bank today and {{BLANK}} the meeting for Friday or next Monday, because they need you to sign the loan papers in person.",
    "cn": "A：我從香港回來的班機延誤了，所以星期四不會進辦公室，但那天早上我和銀行有會議。 B：那你今天應該打電話給銀行，把會議【改期】到星期五或下週一，因為他們需要你親自簽貸款文件。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延後；延期",
    "en_def": "to move an event to a later time",
    "sentence": "A: A strong typhoon is expected to hit northern Taiwan on Saturday, and our company picnic is planned for that day in the park, so what should we do? B: We should {{BLANK}} the picnic until the following weekend, and I will send an email to all staff members this afternoon to let them know.",
    "cn": "A：預計星期六會有強烈颱風侵襲北台灣，而我們的公司野餐就安排在那天在公園舉行，我們該怎麼辦？ B：我們應該把野餐【延後】到下個週末，我今天下午會寄電子郵件通知所有員工。"
  },
  {
    "word": "cancel",
    "pos": "v.",
    "cn_def": "取消",
    "en_def": "to say that a planned event will not happen",
    "sentence": "A: The client from Seoul just emailed to say she is sick and cannot travel this week, but we booked a hotel room and a car for her. B: Please {{BLANK}} the hotel room and the car service right away, because we can still get our money back if we tell them before noon today.",
    "cn": "A：首爾的客戶剛寄信說她生病了，這週不能出差，但我們已經幫她訂了飯店房間和車子。 B：請馬上【取消】飯店房間和派車服務，因為如果我們今天中午前通知，還能拿回退款。"
  },
  {
    "word": "cancellation",
    "pos": "n.",
    "cn_def": "取消",
    "en_def": "the act of stopping a planned event or order",
    "sentence": "A: Our hotel has many guests who book rooms and then simply do not arrive, which costs us a lot of money during the busy season, so what can we do? B: We could charge a {{BLANK}} fee of fifty percent if guests do not tell us at least two days before their arrival date.",
    "cn": "A：我們飯店有很多客人訂了房卻沒來，在旺季讓我們損失很多錢，我們能怎麼做？ B：如果客人沒有在入住日前至少兩天告知我們，我們可以收取百分之五十的【取消】費用。"
  },
  {
    "word": "delay",
    "pos": "v.",
    "cn_def": "延誤；耽擱",
    "en_def": "to make something happen later than planned",
    "sentence": "A: The heavy rain this morning has caused terrible traffic on the highway, and the delivery truck is still stuck near Taoyuan, so will the client meeting still start on time? B: I think we must {{BLANK}} the start of the meeting by thirty minutes, because the samples we want to show the client are on that truck.",
    "cn": "A：今天早上的大雨造成高速公路嚴重塞車，送貨卡車還卡在桃園附近，客戶會議還能準時開始嗎？ B：我想我們必須把會議開始時間【延後】三十分鐘，因為我們要給客戶看的樣品就在那輛卡車上。"
  },
  {
    "word": "punctual",
    "pos": "adj.",
    "cn_def": "準時的；守時的",
    "en_def": "arriving or doing something at the right time, not late",
    "sentence": "A: Our new client from Switzerland is coming at nine o'clock tomorrow, and I heard that people in her company care a lot about time, so is that true? B: Yes, she is always very {{BLANK}}, so please be in the lobby by 8:50, and make sure the meeting room is ready before she arrives.",
    "cn": "A：我們瑞士的新客戶明天九點要來，我聽說她公司的人很重視時間，是真的嗎？ B：是的，她總是非常【守時】，所以請你八點五十分前到大廳，並確保她到達前會議室已經準備好。"
  },
  {
    "word": "late",
    "pos": "adj.",
    "cn_def": "遲到的；晚的",
    "en_def": "arriving or happening after the expected time",
    "sentence": "A: I am stuck in a long line of cars because of an accident on the bridge, and my appointment with the lawyer starts in ten minutes, so what should I do? B: Call her office now and tell them you will be about twenty minutes {{BLANK}}, because it is polite to let people know before the meeting begins.",
    "cn": "A：因為橋上發生車禍，我被困在長長的車陣裡，而我和律師的約再十分鐘就開始了，我該怎麼辦？ B：現在就打電話到她的事務所，告訴他們你大約會【遲到】二十分鐘，因為在會面開始前通知對方是禮貌。"
  },
  {
    "word": "early",
    "pos": "adj.",
    "cn_def": "提早的；早的",
    "en_def": "arriving or happening before the expected time",
    "sentence": "A: This is my first time visiting the government office to renew my business license, and I heard there are always long lines, so when should I go? B: You should be {{BLANK}} and arrive before they open at eight thirty, because by ten o'clock the waiting room is usually completely full.",
    "cn": "A：這是我第一次去政府機關更新營業執照，聽說那裡總是大排長龍，我該什麼時候去？ B：你應該【提早】，在他們八點半開門前就到，因為到了十點，等候室通常就完全坐滿了。"
  },
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的",
    "en_def": "very important and needing action immediately",
    "sentence": "A: The computer system in the accounting office stopped working an hour ago, and the staff cannot send any invoices to clients, so what is the plan? B: I have asked the IT company for an {{BLANK}} visit this afternoon, because we must send all the monthly invoices before the end of today.",
    "cn": "A：會計室的電腦系統一小時前當機了，員工沒辦法寄任何發票給客戶，計畫是什麼？ B：我已經請資訊公司今天下午【緊急】到場，因為我們必須在今天結束前寄出所有月結發票。"
  },
  {
    "word": "fixed",
    "pos": "adj.",
    "cn_def": "固定的",
    "en_def": "not able to be changed",
    "sentence": "A: Can we move the presentation for the investors to Thursday, because two people on our team are still finishing the sales charts and need more time? B: I am afraid the date is {{BLANK}}, since the investors are flying in from Hong Kong only for Wednesday, so we must finish the charts tonight.",
    "cn": "A：我們可以把對投資人的簡報改到星期四嗎？因為我們團隊有兩個人還在完成銷售圖表，需要更多時間。 B：恐怕日期是【固定的】，因為投資人只為了星期三從香港飛來，所以我們今晚必須完成圖表。"
  },
  {
    "word": "flexible",
    "pos": "adj.",
    "cn_def": "有彈性的；可變通的",
    "en_def": "able to change easily",
    "sentence": "A: The supplier wants to visit us next week to show their new packaging, but my schedule is full of meetings, so can you meet them for me? B: Sure, my schedule is quite {{BLANK}} next week, so I can see them any morning or afternoon, and I will tell you what they show me.",
    "cn": "A：供應商下週想來展示他們的新包裝，但我的行程排滿了會議，你可以替我和他們見面嗎？ B：當然，我下週的行程很【有彈性】，所以早上或下午都能見他們，我會告訴你他們展示了什麼。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加",
    "en_def": "to go to an event such as a meeting or class",
    "sentence": "A: The headquarters in Singapore is holding a sales conference next month, and the manager wants two people from our office to go, so who will it be? B: She has asked Emily and me to {{BLANK}} the conference, because we handled the biggest accounts this year and can share our results with the other teams.",
    "cn": "A：新加坡總部下個月要舉辦業務會議，經理希望我們辦公室派兩個人去，會是誰？ B：她請艾蜜莉和我去【參加】這場會議，因為我們今年負責最大的客戶，可以和其他團隊分享我們的成果。"
  },
  {
    "word": "miss",
    "pos": "v.",
    "cn_def": "錯過；缺席",
    "en_def": "to not go to something or not be there at the right time",
    "sentence": "A: I overslept this morning because my phone battery died, and I did not hear the alarm, so what happened at the eight o'clock meeting? B: Do not worry too much, because you only had to {{BLANK}} the first part, and I took notes on the new sales targets, so I can share them with you now.",
    "cn": "A：我今天早上因為手機沒電沒聽到鬧鐘而睡過頭，八點的會議發生了什麼事？ B：別太擔心，因為你只是【錯過】了前半段，我有記下新的業績目標筆記，現在可以和你分享。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排",
    "en_def": "to plan and organize something",
    "sentence": "A: The new manager from our Tokyo office is visiting Taipei next week, and she has never been to Taiwan before, so how can we help her? B: I will {{BLANK}} a car to pick her up at the airport, and I will also plan a short tour of our three stores on her first afternoon.",
    "cn": "A：東京辦公室的新經理下週要來台北，她以前從沒來過台灣，我們能怎麼幫她？ B：我會【安排】一輛車去機場接她，也會規劃在她第一天下午簡短參觀我們的三家門市。"
  },
  {
    "word": "booked",
    "pos": "adj.",
    "cn_def": "（被）預訂的；客滿的",
    "en_def": "already reserved, so no more places are available",
    "sentence": "A: My boss asked me to find a hotel near the convention center for the trade show next weekend, but I have already called three places, so is there a problem? B: Most hotels in that area are fully {{BLANK}} because of the show, so you should try the hotels near the train station, which are only fifteen minutes away.",
    "cn": "A：老闆要我找一家下週末商展時會展中心附近的飯店，我已經打了三家，是有什麼問題嗎？ B：因為商展的關係，那一帶大部分飯店都已經【被訂滿了】，你應該試試火車站附近的飯店，離那裡只有十五分鐘。"
  },
  {
    "word": "officially",
    "pos": "adv.",
    "cn_def": "正式地",
    "en_def": "in a formal way that is accepted by people in charge",
    "sentence": "A: Everyone in the office is talking about the new branch manager, but I have not received any email or notice about it, so is it really true? B: It is true, but she will start her job {{BLANK}} on the first of next month, and the director will introduce her at the staff meeting on Monday.",
    "cn": "A：辦公室裡大家都在談論新的分店經理，但我沒收到任何電子郵件或通知，這是真的嗎？ B：是真的，但她要到下個月一號才【正式】上任，主任會在星期一的員工會議上介紹她。"
  },
  {
    "word": "promptly",
    "pos": "adv.",
    "cn_def": "準時地；迅速地",
    "en_def": "quickly and without delay; exactly at the right time",
    "sentence": "A: Last week, the training started almost twenty minutes late because some people were still getting coffee, and the trainer was quite unhappy, so what should we do this time? B: Please remind everyone that the session will begin {{BLANK}} at nine o'clock, and ask them to take their seats five minutes before that.",
    "cn": "A：上週訓練幾乎晚了二十分鐘才開始，因為有些人還在拿咖啡，講師很不高興，這次我們該怎麼做？ B：請提醒大家課程將在九點【準時】開始，並請他們提前五分鐘入座。"
  }
];

const MCQS = [
  {
    "q": "Ms. Lin asked her assistant to _____ a call with the supplier. She wants to discuss prices before Friday.",
    "options": [
      "attend",
      "miss",
      "schedule",
      "confirm"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The restaurant accepts online _____ for groups of up to ten. Larger groups must call the manager directly.",
    "options": [
      "reminder",
      "calendar",
      "session",
      "booking"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Guests who want to _____ a table by the window should call early. Those seats are popular on weekends.",
    "options": [
      "reserve",
      "miss",
      "delay",
      "attend"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Your hotel _____ number is printed at the top of the email. Please show it at the front desk.",
    "options": [
      "meeting",
      "reservation",
      "availability",
      "session"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The weekly sales _____ will be held in Room 3. All team members should bring their monthly reports.",
    "options": [
      "meeting",
      "reminder",
      "cancellation",
      "confirmation"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The bank offers a free _____ with a financial advisor. Customers can ask questions about saving and investing.",
    "options": [
      "calendar",
      "consultation",
      "cancellation",
      "reminder"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "A one-hour yoga _____ is offered to staff every Friday. It helps employees relax after a long week.",
    "options": [
      "reservation",
      "confirmation",
      "session",
      "calendar"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Please check the manager's _____ before setting a date. She is often away on business trips in March.",
    "options": [
      "cancellation",
      "consultation",
      "booking",
      "calendar"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Please _____ your attendance by replying to this email. We need the final number of guests by Monday.",
    "options": [
      "confirm",
      "postpone",
      "delay",
      "miss"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "You will receive a _____ by text message after you pay. Keep it until the end of your stay.",
    "options": [
      "consultation",
      "session",
      "confirmation",
      "meeting"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The dentist's office sent Tom a _____ yesterday. His cleaning appointment is at three o'clock this afternoon.",
    "options": [
      "reservation",
      "meeting",
      "booking",
      "reminder"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The supplier asked to _____ the visit for next Tuesday. Their manager has an important meeting on Monday.",
    "options": [
      "attend",
      "reschedule",
      "arrange",
      "confirm"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Because of the heavy snow, the airline had to _____ all morning flights. Passengers were moved to evening flights.",
    "options": [
      "attend",
      "confirm",
      "delay",
      "arrange"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Last-minute _____ will be charged the full price of the ticket. Please contact us at least two days earlier.",
    "options": [
      "cancellation",
      "consultation",
      "availability",
      "session"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The manager decided to _____ the concert until next month. The singer was sick and needed time to rest.",
    "options": [
      "attend",
      "postpone",
      "confirm",
      "arrange"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Mr. Wu is always _____ for his appointments. He has never arrived after the agreed time in ten years.",
    "options": [
      "urgent",
      "booked",
      "fixed",
      "punctual"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The manager has an _____ request from a client. She will call you back after she deals with it.",
    "options": [
      "early",
      "urgent",
      "punctual",
      "flexible"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The price of the tour is _____ and will not change. It includes hotels, meals, and all entrance tickets.",
    "options": [
      "fixed",
      "urgent",
      "late",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Our working hours are _____, so staff can start between 8 and 10. They must still work eight hours a day.",
    "options": [
      "urgent",
      "punctual",
      "booked",
      "flexible"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "All new employees must _____ the safety training on Monday. The session will be held in the main hall.",
    "options": [
      "cancel",
      "postpone",
      "attend",
      "delay"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "If you _____ your appointment, please call to book a new one. Our office is open until six o'clock.",
    "options": [
      "arrange",
      "miss",
      "confirm",
      "reserve"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The travel agent will _____ hotels and transport for the group. She will send the full plan by Friday.",
    "options": [
      "arrange",
      "miss",
      "delay",
      "cancel"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The event hall is fully _____ for the whole of December. You may want to look for another place.",
    "options": [
      "urgent",
      "punctual",
      "early",
      "booked"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The new shopping mall will _____ open on May 1. A small ceremony will be held at the main entrance.",
    "options": [
      "promptly",
      "early",
      "officially",
      "late"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The staff answered our questions _____ and politely. We received a reply within ten minutes of sending the email.",
    "options": [
      "officially",
      "late",
      "fixed",
      "promptly"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The clinic's _____ is limited this week because two doctors are away. Patients may need to wait until next Monday.",
    "options": [
      "reminder",
      "confirmation",
      "availability",
      "calendar"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Every morning _____ is taken, but we still have openings after lunch. Please choose a time on our website.",
    "options": [
      "time slot",
      "reminder",
      "calendar",
      "session"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The final _____ for the sales job will be held on Thursday. Three people will meet the general manager.",
    "options": [
      "reminder",
      "interview",
      "calendar",
      "booking"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Please arrive fifteen minutes _____ for your first visit. You will need time to fill in some forms.",
    "options": [
      "early",
      "urgent",
      "fixed",
      "booked"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The flight was two hours _____ because of strong winds. Many passengers missed their connecting flights in Tokyo.",
    "options": [
      "punctual",
      "flexible",
      "urgent",
      "late"
    ],
    "answer": 3,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "schedule": {
    "pos": "v.",
    "en_def": "to plan something for a certain time",
    "cn_def": "安排（時間）；排定"
  },
  "booking": {
    "pos": "n.",
    "en_def": "an arrangement to have a seat, room, or service at a certain time",
    "cn_def": "預訂；預約"
  },
  "reserve": {
    "pos": "v.",
    "en_def": "to ask for a room, seat, or table to be kept for you",
    "cn_def": "預訂；保留"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a room, table, or ticket for someone",
    "cn_def": "預約；訂位"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "an event where people come together to discuss something",
    "cn_def": "會議"
  },
  "consultation": {
    "pos": "n.",
    "en_def": "a meeting to get advice from an expert",
    "cn_def": "諮詢；諮商"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a formal meeting where someone is asked questions, for example for a job",
    "cn_def": "面試"
  },
  "session": {
    "pos": "n.",
    "en_def": "a period of time used for a particular activity",
    "cn_def": "（一段）時間；場次"
  },
  "time slot": {
    "pos": "n.phr.",
    "en_def": "a short period of time that is kept for one appointment or activity",
    "cn_def": "時段"
  },
  "availability": {
    "pos": "n.",
    "en_def": "the times when someone is free to meet or do something",
    "cn_def": "有空的時間；可用性"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a list of dates or a digital tool showing your plans and appointments",
    "cn_def": "行事曆"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or show that something is definite or correct",
    "cn_def": "確認"
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "a message or document that says something is definite",
    "cn_def": "確認（函）"
  },
  "reminder": {
    "pos": "n.",
    "en_def": "a message that helps you remember something",
    "cn_def": "提醒（通知）"
  },
  "reschedule": {
    "pos": "v.",
    "en_def": "to change the time or date of a planned event",
    "cn_def": "改期；重新安排時間"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延後；延期"
  },
  "cancel": {
    "pos": "v.",
    "en_def": "to say that a planned event will not happen",
    "cn_def": "取消"
  },
  "cancellation": {
    "pos": "n.",
    "en_def": "the act of stopping a planned event or order",
    "cn_def": "取消"
  },
  "delay": {
    "pos": "v.",
    "en_def": "to make something happen later than planned",
    "cn_def": "延誤；耽擱"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the right time, not late",
    "cn_def": "準時的；守時的"
  },
  "late": {
    "pos": "adj.",
    "en_def": "arriving or happening after the expected time",
    "cn_def": "遲到的；晚的"
  },
  "early": {
    "pos": "adj.",
    "en_def": "arriving or happening before the expected time",
    "cn_def": "提早的；早的"
  },
  "urgent": {
    "pos": "adj.",
    "en_def": "very important and needing action immediately",
    "cn_def": "緊急的"
  },
  "fixed": {
    "pos": "adj.",
    "en_def": "not able to be changed",
    "cn_def": "固定的"
  },
  "flexible": {
    "pos": "adj.",
    "en_def": "able to change easily",
    "cn_def": "有彈性的；可變通的"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event such as a meeting or class",
    "cn_def": "出席；參加"
  },
  "miss": {
    "pos": "v.",
    "en_def": "to not go to something or not be there at the right time",
    "cn_def": "錯過；缺席"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan and organize something",
    "cn_def": "安排"
  },
  "booked": {
    "pos": "adj.",
    "en_def": "already reserved, so no more places are available",
    "cn_def": "（被）預訂的；客滿的"
  },
  "officially": {
    "pos": "adv.",
    "en_def": "in a formal way that is accepted by people in charge",
    "cn_def": "正式地"
  },
  "promptly": {
    "pos": "adv.",
    "en_def": "quickly and without delay; exactly at the right time",
    "cn_def": "準時地；迅速地"
  }
};

const EXTRA_GLOSSES = {};
