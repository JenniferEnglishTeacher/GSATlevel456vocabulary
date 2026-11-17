// Topic 320 Quiz Data: Receiving 收受
// Source word list: https://www.examword.com/group-topic/receiving — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T320 - Receiving 收受",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a paper that shows you have paid for something",
    "sentence": "A: I bought a new printer for the office yesterday, but it stopped working this morning, so can I still get my money back from the store? B: Yes, but you need to bring the {{BLANK}} with you, because the store manager will check the date of purchase before giving you a refund or a new machine.",
    "cn": "A：我昨天替辦公室買了一台新印表機，但今天早上它就壞了，我還能向店家退錢嗎？ B：可以，但你得帶著【收據】去，因為店經理在退款或換新機之前會先核對購買日期。"
  },
  {
    "word": "reception",
    "pos": "n.",
    "cn_def": "接待處；歡迎會",
    "en_def": "the desk or area where visitors go when they arrive at a building",
    "sentence": "A: Our new clients from Tokyo are arriving at ten o'clock, so where should they wait while I finish preparing the meeting room upstairs? B: Ask them to sign in at the {{BLANK}} on the first floor, and our assistant will offer them coffee and a company brochure until you are ready to meet them.",
    "cn": "A：我們來自東京的新客戶十點會到，我在樓上準備會議室的時候，他們該在哪裡等？ B：請他們在一樓的【接待處】登記，我們的助理會招待他們咖啡和公司簡介，直到你準備好跟他們見面。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受",
    "en_def": "to agree to take or say yes to something that is offered",
    "sentence": "A: The supplier offered us a ten percent discount if we sign the contract this week, but do you think we should agree before checking other companies? B: I think we should {{BLANK}} the offer quickly, because their prices are already the lowest in the market and their shipping service has always been reliable.",
    "cn": "A：供應商說如果我們這週簽約就給我們九折，但你覺得我們應該在比較其他公司之前就答應嗎？ B：我認為我們應該盡快【接受】這個提議，因為他們的價格已經是市場上最低的，而且他們的運送服務一向很可靠。"
  },
  {
    "word": "acceptance",
    "pos": "n.",
    "cn_def": "接受；錄取",
    "en_def": "the act of agreeing to take something, or being allowed to join a school or group",
    "sentence": "A: Have you heard anything from the university about the business management program you applied for last spring? B: Yes, I finally got a letter of {{BLANK}} yesterday, so I will start my evening classes in September while I continue working full-time at the bank downtown.",
    "cn": "A：你去年春天申請的那個企業管理課程，大學那邊有消息了嗎？ B：有，我昨天終於收到【錄取】通知書了，所以我九月會開始上夜間課程，同時繼續在市中心的銀行全職工作。"
  },
  {
    "word": "collect",
    "pos": "v.",
    "cn_def": "收集；領取",
    "en_def": "to gather things together, or to go and get something",
    "sentence": "A: The team leader wants everyone's opinions about the new office layout before Friday, so who is going to organize the survey? B: I will {{BLANK}} the completed forms from each department on Thursday afternoon and then write a short report so that she can review the results over the weekend.",
    "cn": "A：組長希望在星期五前得到大家對新辦公室配置的意見，那誰要負責整理問卷？ B：我會在星期四下午向各部門【收集】填好的表格，然後寫一份簡短的報告，讓她可以在週末檢視結果。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收取；收集；收藏品",
    "en_def": "the act of taking things away or gathering them together",
    "sentence": "A: Our office produces so much paper waste every week, so do you know when the recycling company comes to take it away? B: The {{BLANK}} is every Tuesday morning at eight, so please put all the boxes outside the back door on Monday evening before you leave the building.",
    "cn": "A：我們辦公室每週產生好多廢紙，你知道回收公司什麼時候來載走嗎？ B：每週二早上八點會來【收取】，所以請在星期一晚上離開大樓前把所有的箱子放到後門外面。"
  },
  {
    "word": "obtain",
    "pos": "v.",
    "cn_def": "取得；獲得",
    "en_def": "to get something, often by making an effort",
    "sentence": "A: I want to open a small coffee shop near the train station next year, but what do I need to do before I can start selling food and drinks? B: First you must {{BLANK}} a business license from the city government, and that usually takes about two months, so you should start the application process as soon as possible.",
    "cn": "A：我明年想在火車站附近開一家小咖啡店，但在開始販售餐飲之前我需要做什麼？ B：首先你必須向市政府【取得】營業執照，而這通常需要大約兩個月，所以你應該盡快開始申請流程。"
  },
  {
    "word": "gain",
    "pos": "v.",
    "cn_def": "獲得；增加",
    "en_def": "to get something useful or good",
    "sentence": "A: Why did you decide to work as an intern at that small marketing company instead of taking a summer holiday with your friends? B: I wanted to {{BLANK}} some practical experience before graduation, because most employers prefer people who have already worked with real clients and handled real projects.",
    "cn": "A：你為什麼決定去那家小行銷公司實習，而不是跟朋友去暑假旅行？ B：我想在畢業前【獲得】一些實務經驗，因為大部分雇主比較喜歡已經跟真正的客戶合作過、處理過實際專案的人。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "取得；收購；學得",
    "en_def": "to get or buy something, or to learn a skill",
    "sentence": "A: Our sales have been growing quickly in Southeast Asia, so what is the company planning to do to expand there next year? B: The directors hope to {{BLANK}} a small local firm in Vietnam, because buying an existing business will give us experienced staff and a large number of customers right away.",
    "cn": "A：我們在東南亞的業績成長很快，公司明年打算怎麼在那裡擴展？ B：董事們希望在越南【收購】一家當地的小公司，因為買下現有的企業能讓我們立刻擁有經驗豐富的員工和大量客戶。"
  },
  {
    "word": "earn",
    "pos": "v.",
    "cn_def": "賺取；贏得",
    "en_def": "to get money for the work you do",
    "sentence": "A: Why are you working at the restaurant on weekends when you already have a full-time job at the insurance company? B: I want to {{BLANK}} some extra money for my sister's wedding next spring, and the restaurant owner pays well and lets me choose my own working hours.",
    "cn": "A：你已經在保險公司有全職工作了，為什麼週末還在餐廳打工？ B：我想為明年春天我妹妹的婚禮【賺】一些額外的錢，而且餐廳老闆給的薪水不錯，還讓我自己選工作時段。"
  },
  {
    "word": "award",
    "pos": "v.",
    "cn_def": "授予；頒發",
    "en_def": "to officially give a prize or money to someone",
    "sentence": "A: Did you hear which design team won the national competition for the new city library, and what will they receive? B: The judges decided to {{BLANK}} the first prize to our team from the Taipei office, so we will get a trophy and fifty thousand dollars at the ceremony next month.",
    "cn": "A：你有聽說哪個設計團隊贏得了新市立圖書館的全國競賽嗎？他們會得到什麼？ B：評審決定把首獎【頒給】我們台北辦公室的團隊，所以下個月典禮上我們會拿到一座獎盃和五萬元。"
  },
  {
    "word": "grant",
    "pos": "v.",
    "cn_def": "給予；准許",
    "en_def": "to officially agree to give or allow something",
    "sentence": "A: I asked the human resources department for two extra weeks of leave so I can take care of my father after his surgery, but have they replied? B: Yes, they agreed to {{BLANK}} your request, so you can stay home until the end of the month, and your manager will cover your important meetings.",
    "cn": "A：我向人資部門申請多請兩週假，好在我爸爸手術後照顧他，他們回覆了嗎？ B：有，他們同意【批准】你的請求，所以你可以在家待到月底，你的經理會幫你處理重要的會議。"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "cn_def": "遞送；交付",
    "en_def": "to take goods or letters to a place",
    "sentence": "A: We need two hundred chairs for the conference hall before the event on Saturday morning, so can your company bring them in time? B: Of course, our drivers will {{BLANK}} the chairs to the hall on Friday afternoon, and two workers will stay to help your staff set them up in rows.",
    "cn": "A：我們需要在星期六早上的活動前把兩百張椅子送到會議廳，你們公司來得及送嗎？ B：當然，我們的司機會在星期五下午把椅子【送到】會議廳，還會留兩名工人幫你們的員工排好椅子。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "遞送；送貨",
    "en_def": "the act of bringing goods or letters to a place",
    "sentence": "A: I ordered new laptops for the sales department last week, so when can we expect them to arrive at our office? B: The online store said the {{BLANK}} will take about three working days, so the boxes should be here by Wednesday, and someone at the front desk must sign for them.",
    "cn": "A：我上週替業務部訂了新的筆電，我們什麼時候可以收到？ B：網路商店說【送貨】大約需要三個工作天，所以箱子應該在星期三前會到，而且櫃台必須有人簽收。"
  },
  {
    "word": "pick up",
    "pos": "v.phr.",
    "cn_def": "領取；接（人）",
    "en_def": "to go and get something or someone from a place",
    "sentence": "A: The post office left a note saying my package from Japan arrived while I was at work, so what should I do now? B: You can {{BLANK}} the package at the counter any weekday before six o'clock, but remember to bring the note and your ID card, or the clerk will not give it to you.",
    "cn": "A：郵局留了一張通知單，說我從日本寄來的包裹在我上班時送到了，我現在該怎麼辦？ B：你可以在任何平日六點前到櫃台【領取】包裹，但記得帶通知單和身分證，否則職員不會交給你。"
  },
  {
    "word": "take in",
    "pos": "v.phr.",
    "cn_def": "吸收；理解",
    "en_def": "to understand and remember new information",
    "sentence": "A: How was the three-hour training session on the new accounting software yesterday, and do you feel ready to use it? B: Not really, there was too much information to {{BLANK}} in one afternoon, so I asked the trainer to send me the slides so that I can review them slowly at home.",
    "cn": "A：昨天三小時的新會計軟體訓練課程怎麼樣？你覺得可以上手了嗎？ B：不太行，一個下午要【吸收】的資訊太多了，所以我請講師把投影片寄給我，好讓我回家慢慢複習。"
  },
  {
    "word": "welcome",
    "pos": "v.",
    "cn_def": "歡迎",
    "en_def": "to greet someone in a friendly way when they arrive",
    "sentence": "A: The new engineers from our German branch are joining us on Monday, so how should we make them feel comfortable on their first day? B: Let's {{BLANK}} them with a short lunch party in the meeting room, and then each team leader can show them around the factory and introduce the staff.",
    "cn": "A：我們德國分公司的新工程師星期一要加入，第一天我們該怎麼讓他們覺得自在？ B：我們就在會議室辦個簡單的午餐派對來【歡迎】他們，然後每位組長可以帶他們參觀工廠並介紹員工。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認；准許進入",
    "en_def": "to agree that something bad is true; to allow someone to enter",
    "sentence": "A: The customer is very angry because his order arrived three days late, so what should I say when he calls again this afternoon? B: You should {{BLANK}} that we made a mistake with the shipping date, apologize politely, and then offer him a discount on his next order to keep him happy.",
    "cn": "A：那位顧客很生氣，因為他的訂單晚了三天才到，他今天下午再打來時我該說什麼？ B：你應該【承認】我們弄錯了出貨日期，禮貌地道歉，然後提供他下次訂單的折扣讓他滿意。"
  },
  {
    "word": "admission",
    "pos": "n.",
    "cn_def": "入場（費）；入學許可",
    "en_def": "permission to enter a place, or the cost of entering",
    "sentence": "A: Our company is taking all the employees to the science museum next Friday, but do we have to pay for tickets at the entrance? B: No, {{BLANK}} is free for groups of more than twenty people on weekdays, but we still need to call the museum and book our visit at least one week in advance.",
    "cn": "A：我們公司下星期五要帶全體員工去科學博物館，我們需要在入口買票嗎？ B：不用，平日二十人以上的團體【入場】免費，但我們還是得至少提前一週打電話給博物館預約參觀。"
  },
  {
    "word": "inherit",
    "pos": "v.",
    "cn_def": "繼承",
    "en_def": "to receive money, property or a business from someone who has died or retired",
    "sentence": "A: Why is the young manager suddenly in charge of that big family company when he only graduated from college two years ago? B: His father retired last month, so he will {{BLANK}} the business and all its factories, although several experienced directors will help him make important decisions at first.",
    "cn": "A：那位年輕經理大學才畢業兩年，為什麼突然掌管那家大型家族企業？ B：他父親上個月退休了，所以他會【繼承】公司和所有的工廠，不過一開始會有幾位經驗豐富的董事協助他做重要決定。"
  },
  {
    "word": "inheritance",
    "pos": "n.",
    "cn_def": "遺產；繼承",
    "en_def": "money or property that you receive from someone who has died",
    "sentence": "A: How was your neighbor able to buy that beautiful apartment downtown when she only started working at the bank last year? B: Her grandmother left her a large {{BLANK}} when she passed away, so she used part of the money for the apartment and saved the rest for her retirement.",
    "cn": "A：你的鄰居去年才開始在銀行工作，她怎麼買得起市中心那間漂亮的公寓？ B：她祖母過世時留給她一大筆【遺產】，所以她用其中一部分錢買了公寓，其餘的存起來作為退休金。"
  },
  {
    "word": "reward",
    "pos": "n.",
    "cn_def": "獎勵；報酬",
    "en_def": "something given to thank someone for good work or help",
    "sentence": "A: Our team finished the big project two weeks before the deadline, so do you think the boss will do anything special for us? B: Yes, she said everyone will get a cash {{BLANK}} in their next paycheck, and she is also planning a dinner at a nice restaurant to thank us for our hard work.",
    "cn": "A：我們團隊比截止日期提早兩週完成了大專案，你覺得老闆會為我們做什麼特別的事嗎？ B：會，她說每個人下次的薪水都會有一筆現金【獎勵】，她還打算在一家不錯的餐廳請吃晚餐，感謝我們的辛勞。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a message that tells you about something",
    "sentence": "A: How will I know when the online training course is ready, since I don't check the company website very often? B: The system will send you a {{BLANK}} by email and text message as soon as the course opens, so you can register right away before all the places are taken.",
    "cn": "A：我不常看公司網站，那我怎麼知道線上訓練課程什麼時候準備好了？ B：課程一開放，系統就會透過電子郵件和簡訊寄【通知】給你，所以你可以在名額額滿之前馬上報名。"
  },
  {
    "word": "response",
    "pos": "n.",
    "cn_def": "回應；回覆",
    "en_def": "an answer or reply",
    "sentence": "A: We sent the price list to the hotel chain last Monday, so have they told us whether they want to order our towels and sheets? B: Not yet, but their purchasing manager promised to give us a {{BLANK}} by Friday, after she discusses our prices with the other managers at their weekly meeting.",
    "cn": "A：我們上星期一把價目表寄給那家連鎖飯店了，他們有說要不要訂我們的毛巾和床單嗎？ B：還沒，但他們的採購經理答應在星期五前給我們【回覆】，她要先在每週會議上跟其他經理討論我們的價格。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: We launched the new mobile app for our customers two weeks ago, so how do we know whether people actually like using it? B: We asked users to rate the app and write comments, and so far the {{BLANK}} has been mostly positive, although some people want a larger font size.",
    "cn": "A：我們兩週前替顧客推出了新的手機應用程式，我們怎麼知道大家是不是真的喜歡用？ B：我們請使用者評分並留言，到目前為止【意見回饋】大多是正面的，不過有些人希望字體再大一點。"
  },
  {
    "word": "supply",
    "pos": "n.",
    "cn_def": "供應；存貨；補給品",
    "en_def": "an amount of something that is kept so it can be used",
    "sentence": "A: The printer in our office ran out of ink again this morning, so who is responsible for ordering paper and ink cartridges? B: The office manager keeps a {{BLANK}} of paper and ink in the storage room next to the kitchen, so you can take what you need and write it down in the notebook.",
    "cn": "A：我們辦公室的印表機今天早上又沒墨水了，誰負責訂購紙張和墨水匣？ B：辦公室經理在廚房旁邊的儲藏室裡放了一批紙和墨水的【存貨】，所以你可以拿需要的東西，然後記在本子上。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "轉移；轉帳；調動",
    "en_def": "to move money, things or people from one place to another",
    "sentence": "A: I sent the invoice to our client in Singapore two weeks ago, but have they paid for the furniture we shipped to them yet? B: Their accountant called this morning and said they will {{BLANK}} the money to our bank account tomorrow, so it should arrive by the end of the week.",
    "cn": "A：我兩週前把發票寄給新加坡的客戶了，他們付了我們運過去的家具款項了嗎？ B：他們的會計今天早上打電話來說，明天會把錢【轉】進我們的銀行帳戶，所以應該週末前就會入帳。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "確認收到；承認",
    "en_def": "to say that you have received something; to accept that something is true",
    "sentence": "A: I emailed my job application to the hotel three days ago, but I'm not sure whether they actually got it or not. B: Most large companies {{BLANK}} every application with an automatic reply, so check your spam folder first, and if there is nothing there, call their human resources office.",
    "cn": "A：我三天前把求職申請寄給那家飯店了，但我不確定他們到底有沒有收到。 B：大部分大公司都會用自動回覆【確認收到】每一份申請，所以先檢查你的垃圾郵件匣，如果那裡沒有，就打電話到他們的人資辦公室。"
  }
];

const MCQS = [
  {
    "q": "Customers who want a refund must show the original _____. Without it, the store can only offer a store credit.",
    "options": [
      "receipt",
      "reception",
      "admission",
      "delivery"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Visitors must sign in at the _____ desk on the ground floor. A security guard will then give them a visitor badge.",
    "options": [
      "collection",
      "reception",
      "inheritance",
      "notification"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "After a week of careful thought, Linda decided to _____ the job offer from the bank. She will start her new position in March.",
    "options": [
      "inherit",
      "admit",
      "accept",
      "transfer"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Ken was thrilled when he received a letter of _____ from the business school. Classes will begin in early September.",
    "options": [
      "inheritance",
      "delivery",
      "collection",
      "acceptance"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The HR assistant will _____ the completed survey forms from every department. She will then put all the answers into one report.",
    "options": [
      "collect",
      "earn",
      "inherit",
      "welcome"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Trash _____ in our building takes place every Tuesday morning. Please do not leave garbage bags in the hallway before then.",
    "options": [
      "admission",
      "collection",
      "reception",
      "inheritance"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "All visitors must _____ a security pass before entering the factory floor. Passes are available at the main gate.",
    "options": [
      "welcome",
      "inherit",
      "obtain",
      "acknowledge"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Many students take summer internships to _____ practical work experience. This often helps them find better jobs after graduation.",
    "options": [
      "admit",
      "deliver",
      "inherit",
      "gain"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The electronics company plans to _____ a smaller rival firm next year. The deal is expected to cost about two billion dollars.",
    "options": [
      "acquire",
      "welcome",
      "deliver",
      "acknowledge"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Sales staff can _____ an extra bonus if they reach their monthly targets. Last month, almost half of the team received one.",
    "options": [
      "deliver",
      "earn",
      "admit",
      "inherit"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The judges will _____ the first prize to the most creative design. The winner will also receive a free trip to Paris.",
    "options": [
      "admit",
      "collect",
      "award",
      "obtain"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The city council agreed to _____ the company permission to build a new warehouse. Construction will begin early next spring.",
    "options": [
      "collect",
      "earn",
      "inherit",
      "grant"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our drivers can _____ the furniture to your home within three working days. There is no extra charge for this service.",
    "options": [
      "deliver",
      "admit",
      "inherit",
      "acknowledge"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Please allow five to seven business days for _____ of your order. You will receive a tracking number by email.",
    "options": [
      "admission",
      "delivery",
      "inheritance",
      "acceptance"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "You can _____ your order at the service counter after three o'clock. Please bring your receipt and a photo ID.",
    "options": [
      "take in",
      "carry out",
      "pick up",
      "put off"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The training manual contained too much information to _____ in one day. Most new employees needed a week to understand it all.",
    "options": [
      "set up",
      "give up",
      "turn down",
      "take in"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The CEO gave a short speech to _____ the new employees on their first day. Afterward, everyone enjoyed lunch together in the cafeteria.",
    "options": [
      "welcome",
      "inherit",
      "acquire",
      "transfer"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The manager had to _____ that the team had made an error in the budget. She apologized and promised to fix it quickly.",
    "options": [
      "deliver",
      "admit",
      "collect",
      "award"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "_____ to the art museum is free for all visitors on Sundays. On other days, tickets cost ten dollars.",
    "options": [
      "delivery",
      "inheritance",
      "admission",
      "notification"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Alan will _____ his parents' bakery when they retire next year. He has been learning to manage the shop for five years.",
    "options": [
      "admit",
      "deliver",
      "acknowledge",
      "inherit"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "She used her _____ from her late grandfather to open a small café. The business has grown steadily over the past three years.",
    "options": [
      "inheritance",
      "admission",
      "reception",
      "notification"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The company offers a cash _____ to employees who suggest money-saving ideas. Last year, twelve staff members received one.",
    "options": [
      "receipt",
      "reward",
      "reception",
      "admission"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "You will receive an email _____ when your package has been shipped. It will include a link to track the delivery.",
    "options": [
      "inheritance",
      "admission",
      "notification",
      "reception"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "We sent the proposal to the client on Monday but have not received a _____ yet. We will call them tomorrow if necessary.",
    "options": [
      "inheritance",
      "admission",
      "reception",
      "response"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The manager asked customers for _____ on the new menu. Most of their comments were positive, but some found the dishes too salty.",
    "options": [
      "feedback",
      "admission",
      "inheritance",
      "collection"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The storeroom has a large _____ of paper, so we do not need to order more this month. Please tell me when it runs low.",
    "options": [
      "receipt",
      "supply",
      "reception",
      "admission"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The client promised to _____ the payment to our bank account by Friday. The accountant will check the account on Monday morning.",
    "options": [
      "welcome",
      "admit",
      "transfer",
      "inherit"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Please _____ receipt of this contract by replying to this email. Our legal team will then send you the final copy.",
    "options": [
      "welcome",
      "inherit",
      "earn",
      "acknowledge"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Keep the _____ for your hotel bill, because the company only pays back expenses with proof. Give it to the accounting department.",
    "options": [
      "receipt",
      "response",
      "reception",
      "reward"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our trainer gave each of us helpful _____ after the sales presentation. She told us exactly what we needed to improve.",
    "options": [
      "inheritance",
      "feedback",
      "admission",
      "delivery"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "receipt": {
    "pos": "n.",
    "en_def": "a paper that shows you have paid for something",
    "cn_def": "收據"
  },
  "reception": {
    "pos": "n.",
    "en_def": "the desk or area where visitors go when they arrive at a building",
    "cn_def": "接待處；歡迎會"
  },
  "accept": {
    "pos": "v.",
    "en_def": "to agree to take or say yes to something that is offered",
    "cn_def": "接受"
  },
  "acceptance": {
    "pos": "n.",
    "en_def": "the act of agreeing to take something, or being allowed to join a school or group",
    "cn_def": "接受；錄取"
  },
  "collect": {
    "pos": "v.",
    "en_def": "to gather things together, or to go and get something",
    "cn_def": "收集；領取"
  },
  "collection": {
    "pos": "n.",
    "en_def": "the act of taking things away or gathering them together",
    "cn_def": "收取；收集；收藏品"
  },
  "obtain": {
    "pos": "v.",
    "en_def": "to get something, often by making an effort",
    "cn_def": "取得；獲得"
  },
  "gain": {
    "pos": "v.",
    "en_def": "to get something useful or good",
    "cn_def": "獲得；增加"
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or buy something, or to learn a skill",
    "cn_def": "取得；收購；學得"
  },
  "earn": {
    "pos": "v.",
    "en_def": "to get money for the work you do",
    "cn_def": "賺取；贏得"
  },
  "award": {
    "pos": "v.",
    "en_def": "to officially give a prize or money to someone",
    "cn_def": "授予；頒發"
  },
  "grant": {
    "pos": "v.",
    "en_def": "to officially agree to give or allow something",
    "cn_def": "給予；准許"
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to take goods or letters to a place",
    "cn_def": "遞送；交付"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of bringing goods or letters to a place",
    "cn_def": "遞送；送貨"
  },
  "pick up": {
    "pos": "v.phr.",
    "en_def": "to go and get something or someone from a place",
    "cn_def": "領取；接（人）"
  },
  "take in": {
    "pos": "v.phr.",
    "en_def": "to understand and remember new information",
    "cn_def": "吸收；理解"
  },
  "welcome": {
    "pos": "v.",
    "en_def": "to greet someone in a friendly way when they arrive",
    "cn_def": "歡迎"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree that something bad is true; to allow someone to enter",
    "cn_def": "承認；准許進入"
  },
  "admission": {
    "pos": "n.",
    "en_def": "permission to enter a place, or the cost of entering",
    "cn_def": "入場（費）；入學許可"
  },
  "inherit": {
    "pos": "v.",
    "en_def": "to receive money, property or a business from someone who has died or retired",
    "cn_def": "繼承"
  },
  "inheritance": {
    "pos": "n.",
    "en_def": "money or property that you receive from someone who has died",
    "cn_def": "遺產；繼承"
  },
  "reward": {
    "pos": "n.",
    "en_def": "something given to thank someone for good work or help",
    "cn_def": "獎勵；報酬"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message that tells you about something",
    "cn_def": "通知"
  },
  "response": {
    "pos": "n.",
    "en_def": "an answer or reply",
    "cn_def": "回應；回覆"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "意見回饋"
  },
  "supply": {
    "pos": "n.",
    "en_def": "an amount of something that is kept so it can be used",
    "cn_def": "供應；存貨；補給品"
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to move money, things or people from one place to another",
    "cn_def": "轉移；轉帳；調動"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to say that you have received something; to accept that something is true",
    "cn_def": "確認收到；承認"
  }
};

const EXTRA_GLOSSES = {};
