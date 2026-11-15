// Topic 75 Quiz Data: Conference 會議
// Source word list: https://www.examword.com/group-topic/conference — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T75 - Conference 會議",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論會",
    "en_def": "a meeting where a small group learns about or discusses a subject with an expert",
    "sentence": "A: Why are half of the accountants leaving the office early this Thursday afternoon, when the quarterly report is due on Friday? B: The finance director signed them up for a free {{BLANK}} on the new tax rules, and she wants them to learn the changes before they prepare next year's budget.",
    "cn": "A：為什麼一半的會計師這週四下午要提早離開辦公室，季報不是星期五就要交了嗎？ B：財務長幫他們報名了一場關於新稅法的免費【研討會】，她希望他們在準備明年預算之前先了解這些變動。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習會",
    "en_def": "a meeting where people learn a skill by doing practical activities together",
    "sentence": "A: How did the new sales staff learn to answer difficult questions from customers so quickly? B: Last month they spent two full days in a hands-on {{BLANK}}, where they practiced real phone calls in small groups and received useful advice from an experienced trainer after each round.",
    "cn": "A：新進業務人員怎麼這麼快就學會回答客戶的刁鑽問題？ B：上個月他們花了整整兩天參加一場實作【工作坊】，在小組中練習真實的電話對話，並在每一輪結束後得到資深講師的實用建議。"
  },
  {
    "word": "symposium",
    "pos": "n.",
    "cn_def": "專題研討會；學術討論會",
    "en_def": "a formal meeting where experts give talks on one subject",
    "sentence": "A: Why has the hospital asked so many doctors from Japan and Korea to visit Taipei next spring? B: It is holding a three-day {{BLANK}} on new heart treatments, and experts from several countries will give short talks and then answer questions from local doctors and nurses.",
    "cn": "A：為什麼醫院邀請這麼多日本和韓國的醫生明年春天來台北？ B：醫院將舉辦為期三天、主題是心臟新療法的【專題研討會】，來自多國的專家會發表簡短演講，然後回答本地醫師和護理師的問題。"
  },
  {
    "word": "summit",
    "pos": "n.",
    "cn_def": "高峰會",
    "en_def": "an important meeting between leaders of governments or organizations",
    "sentence": "A: Why are all the hotels near the exhibition center fully booked during the second week of May? B: Leaders from twenty countries will meet there for an economic {{BLANK}} about trade and energy, so thousands of reporters, guards and assistants need rooms close to the meeting halls.",
    "cn": "A：為什麼展覽中心附近的飯店在五月第二週全部客滿？ B：二十個國家的領袖將在那裡召開一場關於貿易和能源的經濟【高峰會】，所以上千名記者、警衛和助理都需要靠近會議廳的房間。"
  },
  {
    "word": "convention",
    "pos": "n.",
    "cn_def": "大會；大型會議",
    "en_def": "a large meeting of people from the same job or interest group",
    "sentence": "A: Why did you order so many extra brochures and samples for the booth this month? B: The yearly toy industry {{BLANK}} opens in Las Vegas next week, and more than ten thousand buyers usually visit, so we need enough materials to give to everyone who stops at our stand.",
    "cn": "A：你這個月為什麼為攤位多訂了這麼多手冊和樣品？ B：一年一度的玩具業【大會】下週在拉斯維加斯開幕，通常有超過一萬名買家參觀，所以我們需要足夠的資料，發給每一位在我們攤位停留的人。"
  },
  {
    "word": "forum",
    "pos": "n.",
    "cn_def": "論壇；討論會",
    "en_def": "a meeting or place where people discuss a topic and share ideas",
    "sentence": "A: How will the city government decide where to build the new bus station in our neighborhood? B: It is holding an open public {{BLANK}} at the community center on Saturday, where residents and shop owners can share their opinions before the mayor makes a final decision next month.",
    "cn": "A：市政府要怎麼決定在我們社區哪裡蓋新的公車站？ B：市府星期六會在社區中心舉辦一場公開【論壇】，居民和店家老闆可以在市長下個月做出最後決定之前，發表他們的意見。"
  },
  {
    "word": "session",
    "pos": "n.",
    "cn_def": "場次；一段時間；會議",
    "en_def": "a period of time used for one activity, such as a meeting or class",
    "sentence": "A: I arrived late because my train was delayed, so did I miss anything important at the training this morning? B: You only missed the first {{BLANK}} about safety rules, but the trainer said she will email the slides to everyone, and the hands-on part begins after the coffee break.",
    "cn": "A：我因為火車誤點遲到了，今天早上的訓練我有錯過什麼重要的內容嗎？ B：你只錯過了關於安全規定的第一個【場次】，不過講師說她會把投影片寄給每個人，而實作部分在咖啡休息後才開始。"
  },
  {
    "word": "agenda",
    "pos": "n.",
    "cn_def": "議程",
    "en_def": "a list of topics to be discussed at a meeting",
    "sentence": "A: Should I prepare anything before the board meeting tomorrow, since this is my first time joining it? B: Yes, please read the {{BLANK}} I sent you last night, because the budget and the new office lease are the first two topics, and the chairman may ask for your opinion on both.",
    "cn": "A：明天的董事會我是第一次參加，需要事先準備什麼嗎？ B：需要，請先看我昨晚寄給你的【議程】，因為預算和新辦公室租約是頭兩個議題，主席可能會詢問你對這兩件事的意見。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程表",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Do you know what time the keynote speaker will start, because I have a client call at ten? B: According to the printed {{BLANK}} at the front desk, her talk begins at nine thirty and lasts forty-five minutes, so you should be able to leave the hall in time.",
    "cn": "A：你知道主講人幾點開始嗎？因為我十點要跟客戶通電話。 B：根據服務台印好的【時間表】，她的演講九點半開始，持續四十五分鐘，所以你應該來得及離開會場。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that gives information about a new product, idea or piece of work",
    "sentence": "A: Why were you still in the office so late last night when everyone else had already gone home? B: I had to finish the slides for my {{BLANK}} to the new client from Singapore, because the meeting starts at nine this morning and my manager wanted to check them first.",
    "cn": "A：昨晚其他人都回家了，你為什麼還那麼晚待在辦公室？ B：我得完成要給新加坡新客戶的【簡報】投影片，因為會議今天早上九點開始，而且經理想先檢查一遍。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "演講；講座",
    "en_def": "a long talk on a subject, especially to students or a group",
    "sentence": "A: Are you going to the library this evening, or are you joining us for dinner after the meeting? B: Neither, because a famous economist from London is giving a free {{BLANK}} on online shopping trends at the university tonight, and I want to take notes for our marketing plan.",
    "cn": "A：你今晚要去圖書館，還是開完會跟我們去吃晚餐？ B：都不是，今晚有位倫敦的知名經濟學家在大學舉辦一場關於網路購物趨勢的免費【講座】，我想去做筆記，用在我們的行銷計畫上。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演說；致詞",
    "en_def": "a formal talk given to an audience",
    "sentence": "A: Why does the CEO look so nervous today, even though she usually seems very calm at company events? B: She has to give a {{BLANK}} at the opening dinner tonight in front of five hundred guests, including the mayor and several major investors, and she is worried about forgetting her lines.",
    "cn": "A：執行長平常在公司活動都很冷靜，今天為什麼看起來這麼緊張？ B：她今晚要在開幕晚宴上，對包括市長和幾位大投資人在內的五百位來賓發表【演說】，她很擔心會忘詞。"
  },
  {
    "word": "panel",
    "pos": "n.",
    "cn_def": "專題小組；座談小組",
    "en_def": "a small group of experts who discuss a topic or make decisions in front of others",
    "sentence": "A: Who will answer questions about the new travel rules at the tourism meeting this afternoon? B: A {{BLANK}} of four experts, including an airline manager and a hotel owner, will discuss the changes on stage, and then the audience can ask them questions for about thirty minutes.",
    "cn": "A：今天下午的觀光會議上，誰會回答關於新旅遊規定的問題？ B：一個由四位專家組成的【座談小組】，包括一位航空公司經理和一位飯店老闆，會在台上討論這些變動，之後觀眾可以向他們提問約三十分鐘。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk between people about a subject, in which ideas are shared",
    "sentence": "A: Did the managers agree on how to reduce costs at the meeting yesterday afternoon? B: Not yet, because after a long {{BLANK}} about cutting staff or closing the small branch, they decided to collect more information and meet again next Tuesday before making any final choice.",
    "cn": "A：昨天下午的會議上，經理們對於如何降低成本達成共識了嗎？ B：還沒有，在針對裁員或關閉小分行進行一番冗長的【討論】之後，他們決定再收集更多資料，下週二再開會，然後才做最後決定。"
  },
  {
    "word": "networking",
    "pos": "n.",
    "cn_def": "建立人脈；交流",
    "en_def": "meeting people at events to make useful business contacts",
    "sentence": "A: Why did you stay at the reception so long after the last talk ended yesterday evening? B: It was a great chance for {{BLANK}}, because many buyers from Europe were there, and I exchanged business cards with six people who might become important clients for our company next year.",
    "cn": "A：昨晚最後一場演講結束後，你為什麼在招待會待那麼久？ B：那是個【建立人脈】的好機會，因為很多歐洲買家都在場，我跟六個明年可能成為我們公司重要客戶的人交換了名片。"
  },
  {
    "word": "delegate",
    "pos": "n.",
    "cn_def": "代表",
    "en_def": "a person chosen to represent a group at a meeting",
    "sentence": "A: Who is going to speak for our branch at the company's global meeting in Tokyo this summer? B: The staff voted for Ms. Lin as our {{BLANK}}, because she knows the local market well, and she will share our ideas and report back to us when she returns.",
    "cn": "A：今年夏天在東京舉行的公司全球會議，誰會代表我們分公司發言？ B：員工投票選出林小姐擔任我們的【代表】，因為她很了解本地市場，她會分享我們的想法，回來後再向我們報告。"
  },
  {
    "word": "attendee",
    "pos": "n.",
    "cn_def": "出席者；與會者",
    "en_def": "a person who goes to a meeting or event",
    "sentence": "A: What should we put in the welcome bags for the trade show next week? B: Every {{BLANK}} should get a name badge, a map of the hall, a bottle of water and a list of restaurants nearby, because many visitors are coming from abroad and don't know the area.",
    "cn": "A：下週商展的迎賓袋裡應該放什麼？ B：每位【與會者】都應該拿到一張名牌、一份會場地圖、一瓶水和一份附近餐廳的清單，因為很多訪客來自國外，不熟悉這一帶。"
  },
  {
    "word": "organizer",
    "pos": "n.",
    "cn_def": "主辦人；籌辦者",
    "en_def": "a person who plans and arranges an event",
    "sentence": "A: Who should I call if the projector in Room B stops working during my talk tomorrow? B: Call the event {{BLANK}}, Mr. Chen, because he is in charge of the rooms and equipment, and his phone number is printed on the back of your name badge.",
    "cn": "A：如果明天我演講時B會議室的投影機壞了，我該打電話給誰？ B：打給活動【主辦人】陳先生，因為他負責場地和設備，他的電話號碼印在你名牌的背面。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；舉辦",
    "en_def": "to organize an event and welcome the guests who come to it",
    "sentence": "A: Why is our hotel hiring so many part-time waiters and cleaners for the first week of October? B: We will {{BLANK}} a large medical conference with almost two thousand guests, so we need extra staff to serve meals, clean the rooms and help visitors find their meeting halls.",
    "cn": "A：為什麼我們飯店十月第一週要招募這麼多兼職服務生和清潔人員？ B：我們將【主辦】一場將近兩千名賓客的大型醫學會議，所以需要額外人手供餐、打掃房間，並幫助訪客找到他們的會議廳。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加",
    "en_def": "to go to an event such as a meeting or class",
    "sentence": "A: Can you meet the supplier from Vietnam on Wednesday morning, or are you busy that day? B: I'm sorry, but I have to {{BLANK}} a training course on the new accounting software all day Wednesday, so could we move the meeting to Thursday afternoon instead?",
    "cn": "A：你星期三早上可以跟越南供應商見面嗎，還是那天很忙？ B：抱歉，我星期三一整天都要【參加】新會計軟體的訓練課程，可以改成星期四下午開會嗎？"
  },
  {
    "word": "present",
    "pos": "v.",
    "cn_def": "報告；提出；呈現",
    "en_def": "to show or explain information to a group of people",
    "sentence": "A: What will happen at the meeting with the bank on Monday morning? B: Our finance manager will {{BLANK}} the new business plan to the bank's loan officers, and if they like our sales figures and the timeline, they may lend us the money for the second factory.",
    "cn": "A：星期一早上和銀行的會議會進行什麼？ B：我們的財務經理會向銀行的放款專員【報告】新的營運計畫，如果他們滿意我們的銷售數字和時程，他們可能會借我們錢蓋第二座工廠。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參與；參加",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Is the volunteer beach cleanup on Saturday only for the marketing team? B: No, every employee is welcome to {{BLANK}}, and the company will provide gloves, bags and lunch, so please sign the list at reception by Thursday if you'd like to join us.",
    "cn": "A：星期六的志工淨灘活動只限行銷團隊嗎？ B：不是，歡迎每位員工【參加】，公司會提供手套、袋子和午餐，所以如果你想加入，請在星期四前到櫃台簽名。"
  },
  {
    "word": "register",
    "pos": "v.",
    "cn_def": "登記；報名；註冊",
    "en_def": "to put your name on an official list to take part in something",
    "sentence": "A: Is it too late to join the marketing conference in Kaohsiung next month? B: No, you can still {{BLANK}} online until Friday, but the early-bird price has ended, so the ticket now costs three thousand dollars, which includes lunch on both days.",
    "cn": "A：現在參加下個月在高雄的行銷研討會會太晚嗎？ B：不會，你到星期五前都還可以在網路上【報名】，不過早鳥價已經結束了，所以門票現在要三千元，包含兩天的午餐。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "籌劃；組織；安排",
    "en_def": "to plan and arrange an event or activity",
    "sentence": "A: Who is responsible for the company's year-end party this December? B: The human resources team will {{BLANK}} it this year, so they are already booking a restaurant, planning the games and choosing the prizes, and they want everyone's ideas by the end of the month.",
    "cn": "A：今年十二月公司尾牙由誰負責？ B：今年由人資團隊【籌劃】，所以他們已經在訂餐廳、規劃遊戲和挑選獎品，並希望在月底前收集到大家的點子。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and following official rules, not relaxed",
    "sentence": "A: What should I wear to the awards dinner at the Grand Hotel on Friday evening? B: It is a {{BLANK}} event with government officials and company presidents, so men should wear a dark suit and tie, and women should wear an evening dress or a business suit.",
    "cn": "A：星期五晚上在大飯店的頒獎晚宴，我該穿什麼？ B：那是有政府官員和公司總裁出席的【正式】場合，所以男士應穿深色西裝打領帶，女士應穿晚禮服或套裝。"
  },
  {
    "word": "annual",
    "pos": "adj.",
    "cn_def": "每年的；年度的",
    "en_def": "happening once every year",
    "sentence": "A: Why is everyone in the sales department working so hard to finish their reports this week? B: Our {{BLANK}} sales meeting is next Monday, where the managers review the whole year's results, and the best team will win a trip to Okinawa next spring.",
    "cn": "A：為什麼業務部的每個人這週都這麼努力趕報告？ B：我們的【年度】業務會議在下週一，經理們會在會中檢視整年的成果，表現最好的團隊將贏得明年春天的沖繩之旅。"
  },
  {
    "word": "international",
    "pos": "adj.",
    "cn_def": "國際的",
    "en_def": "involving two or more countries",
    "sentence": "A: Why do we need so many interpreters at the trade fair in Taichung this year? B: It has become a truly {{BLANK}} event, with companies from Japan, Germany, Brazil and India showing their machines, so visitors need help talking with sellers who don't speak Chinese.",
    "cn": "A：為什麼今年台中的商展需要這麼多口譯員？ B：它已經成為一個真正的【國際】活動，有日本、德國、巴西和印度的公司展示機器，所以參觀者需要協助才能和不會說中文的賣家溝通。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的；職業的",
    "en_def": "showing the skills and high standards expected from a trained worker",
    "sentence": "A: Why do you think the new hotel won the contract for the medical conference instead of our hotel? B: Their staff gave a very {{BLANK}} tour of the meeting rooms, answered every question clearly, and sent a detailed price list the same day, which really impressed the organizers.",
    "cn": "A：你認為為什麼新飯店拿下了醫學會議的合約，而不是我們飯店？ B：他們的員工帶領大家參觀會議室時非常【專業】，清楚回答每個問題，還在同一天寄出詳細的價目表，這讓主辦單位印象深刻。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學術的",
    "en_def": "relating to schools, universities, research and study",
    "sentence": "A: Why is the university hiring extra security guards and drivers for next weekend? B: It is holding a large {{BLANK}} conference on artificial intelligence, and over three hundred professors and researchers from Asia and Europe will come to share their latest studies.",
    "cn": "A：為什麼大學要為下週末加聘保全和司機？ B：學校將舉辦一場關於人工智慧的大型【學術】研討會，超過三百位來自亞洲和歐洲的教授和研究人員會來分享最新的研究。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves what you wanted",
    "sentence": "A: How did the launch of the new smartwatch go in Singapore last week? B: The team {{BLANK}} finished all three product demonstrations without any technical problems, and several large electronics stores have already placed orders for the holiday season, so the boss is very pleased.",
    "cn": "A：上週新智慧手錶在新加坡的發表會進行得如何？ B：團隊【成功地】完成了三場產品展示，沒有任何技術問題，而且好幾家大型電子賣場已經為假期旺季下訂單了，所以老闆非常滿意。"
  },
  {
    "word": "formally",
    "pos": "adv.",
    "cn_def": "正式地",
    "en_def": "in an official way",
    "sentence": "A: Has the new branch manager in Kaohsiung started her job yet, or is she still in training? B: She has been learning the system for two weeks, but the president will {{BLANK}} introduce her to all the staff at the monthly meeting on Friday, and she will take full charge next Monday.",
    "cn": "A：高雄的新任分店經理開始上任了嗎，還是還在受訓？ B：她已經學習系統兩週了，不過總裁會在星期五的月會上向全體員工【正式】介紹她，下週一她就會全面接手。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a way that involves doing things, not just watching",
    "sentence": "A: Why do you think Kevin was chosen to lead the new customer service project? B: He always {{BLANK}} shares ideas in team meetings, asks useful questions and helps others solve problems, so the managers believe he has the energy and skills to guide a group.",
    "cn": "A：你覺得為什麼凱文被選為新客服專案的負責人？ B：他在團隊會議中總是【積極地】分享想法、提出有用的問題並幫助別人解決問題，所以經理們相信他有帶領團隊的活力和能力。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常",
    "en_def": "often, or at the same time each day, week, etc.",
    "sentence": "A: How does your team keep track of all the tasks when everyone works from home three days a week? B: We {{BLANK}} hold short video meetings every Monday and Thursday morning, where each person reports progress and problems, so the manager always knows what is happening.",
    "cn": "A：每個人一週有三天在家工作，你們團隊怎麼掌握所有任務？ B：我們每週一和週四早上都會【定期】舉行簡短的視訊會議，每個人報告進度和問題，所以經理總能掌握狀況。"
  }
];

const MCQS = [
  {
    "q": "Our bank offers a free _____ on saving money for retirement. About thirty people usually join each month to learn from the experts.",
    "options": [
      "seminar",
      "panel",
      "agenda",
      "delegate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Staff learned to repair the new machines in a two-day _____. Each person practiced with real tools under the trainer's guidance.",
    "options": [
      "speech",
      "schedule",
      "workshop",
      "summit"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Presidents from ten Asian countries will meet at the _____ next month. They plan to sign an agreement on clean energy.",
    "options": [
      "lecture",
      "summit",
      "workshop",
      "discussion"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "More than eight thousand dentists came to the national _____ in Chicago. The exhibition hall was full of companies selling new equipment.",
    "options": [
      "agenda",
      "panel",
      "speech",
      "convention"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The mayor held an open _____ to hear residents' views on the new park. Many local families shared their ideas and concerns.",
    "options": [
      "delegate",
      "schedule",
      "forum",
      "organizer"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The afternoon _____ will focus on online marketing. It starts at two o'clock in Room 305 after the lunch break.",
    "options": [
      "session",
      "delegate",
      "organizer",
      "networking"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Please add the new parking rules to the _____ for Monday's meeting. We need at least fifteen minutes to talk about them.",
    "options": [
      "delegate",
      "agenda",
      "summit",
      "lecture"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The train company changed its _____ because of the bridge repairs. The first train now leaves at six instead of five thirty.",
    "options": [
      "panel",
      "forum",
      "speech",
      "schedule"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Ms. Wu showed sales charts during her _____ to the board. The directors were impressed by the clear slides and figures.",
    "options": [
      "presentation",
      "delegate",
      "convention",
      "organizer"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The professor gave a one-hour _____ on world trade to the business students. Afterward, many of them asked her questions.",
    "options": [
      "summit",
      "agenda",
      "delegate",
      "lecture"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The CEO thanked all the workers in a short _____ at the year-end party. Everyone clapped when she announced the bonuses.",
    "options": [
      "forum",
      "speech",
      "schedule",
      "organizer"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "A _____ of three judges will choose the best business plan. The winner will receive funding to start the company.",
    "options": [
      "speech",
      "seminar",
      "panel",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "After a long _____, the team agreed to delay the product launch. They needed more time to fix the software problems.",
    "options": [
      "delegate",
      "convention",
      "organizer",
      "discussion"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The evening reception gives guests time for _____. Many people exchange business cards and make useful contacts there.",
    "options": [
      "delegate",
      "networking",
      "agenda",
      "summit"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Each branch office will send one _____ to the meeting in Tokyo. That person will vote on the new company rules.",
    "options": [
      "delegate",
      "agenda",
      "lecture",
      "forum"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The event _____ apologized for the delay and offered free drinks. The sound system had stopped working before the first talk.",
    "options": [
      "agenda",
      "seminar",
      "organizer",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Taipei will _____ the Asian design fair next year. The city expects thousands of visitors from around the world.",
    "options": [
      "host",
      "attend",
      "participate",
      "register"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "All new employees must _____ the safety training on Monday. Those who miss it cannot use the machines in the factory.",
    "options": [
      "participate",
      "attend",
      "register",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Each team will _____ its research findings to the managers on Friday. The best idea will receive extra funding next year.",
    "options": [
      "attend",
      "participate",
      "register",
      "present"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Over two hundred runners will _____ in the charity race this weekend. All the money will go to the children's hospital.",
    "options": [
      "organize",
      "host",
      "participate",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Visitors must _____ at the front desk before entering the building. They will receive a pass with their name and photo.",
    "options": [
      "host",
      "register",
      "organize",
      "present"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Ms. Huang will _____ the company trip to Hualien this year. She is already booking the hotel and the bus.",
    "options": [
      "organize",
      "attend",
      "participate",
      "register"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Please send a _____ letter of complaint to the head office. Text messages and phone calls are not accepted as official records.",
    "options": [
      "annual",
      "academic",
      "formal",
      "international"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The company publishes its _____ report every March. It shows the profits and losses for the whole previous year.",
    "options": [
      "academic",
      "international",
      "professional",
      "annual"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The airport opened a new terminal for _____ flights. Passengers traveling to Japan and Korea now check in on the third floor.",
    "options": [
      "annual",
      "international",
      "formal",
      "academic"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "If your computer keeps crashing, ask a _____ technician for help. Trying to fix it yourself could cause more damage.",
    "options": [
      "professional",
      "annual",
      "international",
      "academic"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The engineers _____ tested the new engine last week. It ran for ten hours without any problems.",
    "options": [
      "formally",
      "regularly",
      "actively",
      "successfully"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The two companies will _____ announce their merger at a press conference tomorrow. Until then, employees must keep the news secret.",
    "options": [
      "actively",
      "regularly",
      "formally",
      "successfully"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Our manager wants everyone to _____ share ideas in meetings instead of sitting quietly. Shy staff members will receive extra support.",
    "options": [
      "formally",
      "successfully",
      "regularly",
      "actively"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Drivers should _____ check their tire pressure, at least once a month. This simple habit can prevent accidents and save fuel.",
    "options": [
      "formally",
      "successfully",
      "regularly",
      "actively"
    ],
    "answer": 2,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where a small group learns about or discusses a subject with an expert",
    "cn_def": "研討會；專題討論會"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn a skill by doing practical activities together",
    "cn_def": "工作坊；研習會"
  },
  "symposium": {
    "pos": "n.",
    "en_def": "a formal meeting where experts give talks on one subject",
    "cn_def": "專題研討會；學術討論會"
  },
  "summit": {
    "pos": "n.",
    "en_def": "an important meeting between leaders of governments or organizations",
    "cn_def": "高峰會"
  },
  "convention": {
    "pos": "n.",
    "en_def": "a large meeting of people from the same job or interest group",
    "cn_def": "大會；大型會議"
  },
  "forum": {
    "pos": "n.",
    "en_def": "a meeting or place where people discuss a topic and share ideas",
    "cn_def": "論壇；討論會"
  },
  "session": {
    "pos": "n.",
    "en_def": "a period of time used for one activity, such as a meeting or class",
    "cn_def": "場次；一段時間；會議"
  },
  "agenda": {
    "pos": "n.",
    "en_def": "a list of topics to be discussed at a meeting",
    "cn_def": "議程"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程表"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information about a new product, idea or piece of work",
    "cn_def": "簡報；報告"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a long talk on a subject, especially to students or a group",
    "cn_def": "演講；講座"
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to an audience",
    "cn_def": "演說；致詞"
  },
  "panel": {
    "pos": "n.",
    "en_def": "a small group of experts who discuss a topic or make decisions in front of others",
    "cn_def": "專題小組；座談小組"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk between people about a subject, in which ideas are shared",
    "cn_def": "討論"
  },
  "networking": {
    "pos": "n.",
    "en_def": "meeting people at events to make useful business contacts",
    "cn_def": "建立人脈；交流"
  },
  "delegate": {
    "pos": "n.",
    "en_def": "a person chosen to represent a group at a meeting",
    "cn_def": "代表"
  },
  "attendee": {
    "pos": "n.",
    "en_def": "a person who goes to a meeting or event",
    "cn_def": "出席者；與會者"
  },
  "organizer": {
    "pos": "n.",
    "en_def": "a person who plans and arranges an event",
    "cn_def": "主辦人；籌辦者"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and welcome the guests who come to it",
    "cn_def": "主辦；舉辦"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event such as a meeting or class",
    "cn_def": "出席；參加"
  },
  "present": {
    "pos": "v.",
    "en_def": "to show or explain information to a group of people",
    "cn_def": "報告；提出；呈現"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參與；參加"
  },
  "register": {
    "pos": "v.",
    "en_def": "to put your name on an official list to take part in something",
    "cn_def": "登記；報名；註冊"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to plan and arrange an event or activity",
    "cn_def": "籌劃；組織；安排"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and following official rules, not relaxed",
    "cn_def": "正式的"
  },
  "annual": {
    "pos": "adj.",
    "en_def": "happening once every year",
    "cn_def": "每年的；年度的"
  },
  "international": {
    "pos": "adj.",
    "en_def": "involving two or more countries",
    "cn_def": "國際的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skills and high standards expected from a trained worker",
    "cn_def": "專業的；職業的"
  },
  "academic": {
    "pos": "adj.",
    "en_def": "relating to schools, universities, research and study",
    "cn_def": "學術的"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves what you wanted",
    "cn_def": "成功地"
  },
  "formally": {
    "pos": "adv.",
    "en_def": "in an official way",
    "cn_def": "正式地"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a way that involves doing things, not just watching",
    "cn_def": "積極地；主動地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, or at the same time each day, week, etc.",
    "cn_def": "定期地；經常"
  }
};

const EXTRA_GLOSSES = {};
